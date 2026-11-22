"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-ai-training-performance.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-ai-training-performance-sw",
  lang: "sw",
  translationOf: "athletes-ai-training-performance",
  category: "Athletes",
  name: "AI kwa Mazoezi na Utendaji",
  skills: "Kuweka lengo la mazoezi linalopimika, Kurekodi data ya mazoezi, Kusoma mwelekeo rahisi wa mazoezi, Kuandaa swali la wiki ya mazoezi kwa kocha wako ukitumia AI, Kutambua ushauri wa mazoezi wa AI usio salama",
  outcome: "kuweka lengo moja la utendaji linalopimika, kurekodi data ya mazoezi ya wiki nne kwenye jedwali, kutumia msaidizi wa AI kufupisha mwelekeo, na kumpelekea kocha wako swali lililo wazi na salama kuhusu mazoezi yako.",
  about: [
    "Kozi hii ni kwa wanamichezo wanaotaka kufanya mazoezi kwa akili zaidi, na kwa makocha wanaotaka wanamichezo wao waelewe namba zao wenyewe. Ni elimu ya jumla, si programu ya mazoezi: kocha wako na mkufunzi wa afya ya wanamichezo (athletic trainer) ndio wanaopanga mazoezi yako.",
    "Utaweka lengo unaloweza kupima, utafuatilia namba sahihi, utaona zinasema nini, na utatumia msaidizi wa AI kupanga data yako na kujiandaa kwa mazungumzo bora na kocha wako.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Chagua lengo moja linalopimika, rekodi data ya angalau vipindi vinne vya mazoezi kwenye Google Sheet (tarehe, ulichofanya, juhudi 1-10, matokeo), muombe msaidizi wa AI aeleze mwelekeo kwa maneno rahisi, na uandike maswali matatu kuhusu kipindi chako kijacho cha mazoezi ya kumpelekea kocha wako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa sekondari, chuo na vilabu wanaotaka kufanya mazoezi kwa akili zaidi, na makocha wanaotaka wanamichezo wao waelewe namba zao wenyewe.",
    startingPoint: "Wanafanya mazoezi mara kwa mara chini ya kocha na wanatumia simu janja kila siku. Wengi wana malengo kama \"kuwa na kasi zaidi\" lakini hawana kipimo cha namba, hawana daftari la mazoezi la kila mara, na hawana mazoea ya kusoma chati au kupima ushauri wa mazoezi wa mtandaoni.",
    gap: "Bila lengo linalopimika na daftari rahisi, wanamichezo hawawezi kuona kama mazoezi yanafanya kazi, na AI au mipango ya mtandaoni inaweza kusukuma ushauri usio salama. Namba zilizo wazi na maswali salama yanaboresha mazungumzo na kocha na yanalinda afya ya mwanamichezo.",
    constraints: [
      "Lugha rahisi, kama kiwango cha kusoma cha darasa la 7",
      "Simu au kompyuta yenye Google Sheets ya bure na msaidizi wa AI wa bure",
      "Kama dakika 60 za masomo, pamoja na wiki nne za kurekodi sambamba na mazoezi ya kawaida",
      "Elimu ya jumla tu: kocha na mkufunzi wa afya ya wanamichezo ndio wanaopanga mazoezi, uzito wa mazoezi na kurudi baada ya jeraha",
      "Data na kumbukumbu za afya zinabaki faragha na kamwe hazibandikwi kwenye msaidizi wa AI"
    ],
    prerequisites: "Hakuna. Kozi \"Zana za AI kwa Wanamichezo\" (AI Tools for Athletes) inasaidia kama hujawahi kutumia Google Sheets."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa lengo la mazoezi lisilo wazi", action: "kuliandika upya kama lengo moja linalopimika lenye namba, tarehe na jaribio", standard: "likiwa na sehemu zote nne na lengo limekubaliwa na kocha wako" },
    { id: "O2", condition: "Ukitumia Google Sheets", action: "kuandaa na kutunza daftari la mazoezi lenye Tarehe, Kipindi, Juhudi na Matokeo", standard: "ukijaza mstari baada ya kila kipindi kwa angalau vipindi vinne" },
    { id: "O3", condition: "Ukipewa chati ya daftari lako la mazoezi", action: "kueleza mwelekeo kwa sentensi moja au mbili na kulinganisha juhudi na matokeo", standard: "ukitaja mwelekeo kwa usahihi na kukagua hesabu yoyote ya AI wewe mwenyewe" },
    { id: "O4", condition: "Ukipewa orodha ya kazi za mazoezi", action: "kutambua kazi ambazo AI inaweza kusaidia na zipi ni za kocha wako au mkufunzi wa afya ya wanamichezo", standard: "ukipata angalau 4 kati ya 5 sahihi" },
    { id: "O5", condition: "Ukipewa ushauri wa mazoezi wa AI au wa mtandaoni", action: "kutambua dalili za hatari kama kufanya mazoezi ukiwa na maumivu, kupunguza maji au virutubisho hatari", standard: "ukiona kila dalili ya hatari na kuipeleka kwa kocha au mkufunzi wa afya ya wanamichezo badala ya kuifuata" },
    { id: "O6", condition: "Ukitumia lengo lako, daftari lako na msaidizi wa AI", action: "kuandika taarifa ya sentensi tatu kwa kocha na maswali matatu kuhusu kipindi chako kijacho cha mazoezi", standard: "kwa maneno yako mwenyewe, bila kushiriki kumbukumbu za afya, na jibu la kocha wako likitumika kusasisha mpango wako" }
  ],
  chapters: [
    {
      name: "Sura 1: Malengo na data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuweka lengo unaloweza kupima",
          minutes: 5,
          goal: "Geuza lengo lisilo wazi kuwa lengo linalopimika lenye tarehe.",
          text: [
            "\"Kuwa na kasi zaidi\" ni tamani tu. \"Kukimbia mbio za yadi 40 kwa kasi zaidi kwa sekunde 0.1 kufikia mwisho wa kipindi cha maandalizi, ukipimwa kwa njia ileile kila mara\" ni lengo unaloweza kupima.",
            "Lengo zuri la mazoezi linataja kitu kimoja, namba, tarehe, na jinsi litakavyopimwa. Linapaswa kukubaliwa na kocha wako ili lilingane na mpango wa timu.",
            "Msaidizi wa AI anaweza kukusaidia kuandika upya lengo lisilo wazi. Jaribu: \"Geuza lengo langu 'kuwa na nguvu zaidi kwa mpira wa miguu' kuwa lengo moja linalopimika lenye tarehe. Niulize maswali kama unahitaji taarifa zaidi.\""
          ],
          steps: ["Andika lengo lako kwa maneno yako mwenyewe.", "Ongeza namba moja ya kupima.", "Ongeza tarehe.", "Sema litapimwa vipi na lini.", "Likubaliane na kocha wako."],
          words: [["Linalopimika", "kitu unachoweza kuhesabu au kupima kwa saa, ili ujue kama kimebadilika."], ["Kipimo cha mwanzo (baseline)", "namba yako ya kuanzia kabla hujaanza kufanya mazoezi kwa ajili ya lengo."]],
          slides: [
            { title: "Tamani dhidi ya lengo", bullets: ["Tamani: \"kuwa na kasi zaidi\"", "Lengo: \"yadi 40 kwa kasi zaidi kwa sekunde 0.1 kufikia mwisho wa maandalizi\""] },
            { title: "Lengo lina", bullets: ["Kitu kimoja", "Namba na tarehe", "Jinsi litakavyopimwa"] },
            { title: "Tumia AI kulinoa", bullets: ["\"Geuza lengo langu kuwa linalopimika\"", "Kisha likubaliane na kocha wako"] }
          ],
          tryIt: "Andika lengo moja lisilo wazi. Muombe msaidizi wa AI alifanye lipimike na liwe na tarehe. Lirekebishe ili liwe kweli kwako, kisha andika kipimo chako cha mwanzo kama unakijua.",
          youCanNow: "kuandika lengo la mazoezi linalopimika lenye namba, tarehe na jaribio.",
          quickCheck: [
            { objective: "O1", q: "Ni sehemu ipi inageuza \"kuwa na nguvu zaidi\" kuwa lengo linalopimika?", options: ["Kuongeza neno \"kweli kweli\"", "Kuongeza namba, tarehe na jinsi litakavyopimwa", "Kuliweka mtandaoni", "Kulifanya refu zaidi"], answer: 1, why: "Lengo linalopimika linataja kitu kimoja, namba, tarehe na jinsi linavyopimwa." },
            { objective: "O1", q: "Umeandika lengo linalopimika kwa msaada wa AI. Unafanya nini baadaye?", options: ["Kuanza mazoezi peke yako", "Kuiomba AI iliidhinishe", "Kulificha", "Kulikubaliana na kocha wako"], answer: 3, why: "Lengo lako linapaswa kukubaliwa na kocha wako ili lilingane na mpango wa timu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kurekodi data sahihi ya mazoezi",
          minutes: 5,
          goal: "Andaa daftari rahisi la mazoezi ambalo utalitunza kweli.",
          text: [
            "Data ina manufaa tu ukiikusanya kwa njia ileile kila mara. Daftari rahisi ni bora kuliko app ya kifahari unayoacha kutumia baada ya wiki moja.",
            "Safu nne zinatosha kuanza: Tarehe, Kipindi (ulichofanya), Juhudi (ilikuwa ngumu kiasi gani, 1 hadi 10), na Matokeo (namba ya lengo lako). Baadhi ya wanamichezo wanaongeza saa za usingizi au maelezo mafupi.",
            "Vifaa vya kuvaa kama saa na mikanda ya mapigo ya moyo vinaweza kuongeza data, lakini si kamili. Zichukulie namba zake kama vidokezo, si ukweli kamili, na uweke data yako ya afya faragha."
          ],
          steps: ["Fungua Google Sheets.", "Tengeneza safu: Tarehe, Kipindi, Juhudi (1-10), Matokeo.", "Jaza mstari mmoja baada ya kila kipindi.", "Liweke mahali palepale kwenye simu yako ili lichukue dakika moja."],
          words: [["Kiwango cha juhudi", "alama ya 1 hadi 10 ya jinsi kipindi kilivyokuwa kigumu; makocha mara nyingi huita RPE (rating of perceived exertion, yaani kiwango cha juhudi unachohisi)."], ["Kifaa cha kuvaa (wearable)", "kifaa unachovaa, kama saa, kinachopima vitu kama mapigo ya moyo au hatua."]],
          slides: [
            { title: "Rahisi ni bora kuliko kifahari", bullets: ["Njia ileile, kila mara", "Dakika moja baada ya kila kipindi"] },
            { title: "Safu nne", bullets: ["Tarehe", "Kipindi", "Juhudi 1-10", "Matokeo"] },
            { title: "Kuhusu vifaa vya kuvaa", bullets: ["Vidokezo vyenye manufaa, si ukweli kamili", "Weka data ya afya faragha"] }
          ],
          tryIt: "Tengeneza daftari lako la mazoezi kwenye Google Sheets lenye safu nne. Jaza vipindi vyako viwili au vitatu vya mwisho kutoka kumbukumbu au maelezo yako.",
          youCanNow: "kutunza daftari la mazoezi lililo rahisi na la kila mara.",
          quickCheck: [
            { objective: "O2", q: "Nini kinaingia kwenye safu ya Matokeo ya daftari lako?", options: ["Namba ya lengo lako", "Jinsi kilivyokuwa kigumu", "Ulichokula", "Jina la kocha wako"], answer: 0, why: "Matokeo yanabeba namba unayofuatilia kwa ajili ya lengo lako." },
            { objective: "O2", q: "Unasahau mara kwa mara kujaza daftari lako. Nini kinasaidia zaidi?", options: ["Kubadili kwenda app ya kifahari zaidi", "Kulijaza mara moja kwa mwezi kutoka kumbukumbu", "Kuliweka mahali palepale kwenye simu yako na kujaza mstari mmoja mara tu baada ya kila kipindi", "Kuacha kurekodi"], answer: 2, why: "Daftari rahisi linalojazwa kwa njia ileile kila mara ndilo utakalolitunza." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kusoma mwelekeo wa mazoezi yako",
          minutes: 5,
          goal: "Soma chati ya data yako na ueleze inachoonyesha kwa sentensi moja au mbili.",
          text: [
            "Baada ya wiki chache, tengeneza chati ya safu yako ya Matokeo kwa tarehe. Tazama mwelekeo: juu, chini au tambarare. Siku moja mbaya haina maana kubwa; tazama mstari kwa ujumla.",
            "Linganisha Juhudi na Matokeo. Kama juhudi inaendelea kupanda lakini matokeo yanabaki palepale au yanashuka, huenda umechoka, na hilo ni jambo la kumwambia kocha wako.",
            "Unaweza kubandika jedwali lako (bila majina wala kumbukumbu za afya) kwenye msaidizi wa AI na kuuliza: \"Eleza mwelekeo wa data hii ya mazoezi kwa maneno rahisi. Nimuulize kocha wangu maswali gani?\" Kagua hesabu zake wewe mwenyewe."
          ],
          steps: ["Chagua Tarehe na Matokeo kisha weka chati ya mstari.", "Sema mwelekeo: juu, chini au tambarare.", "Linganisha Juhudi na Matokeo.", "Andika muhtasari wa sentensi moja."],
          words: [["Mwelekeo", "njia ya jumla ambayo namba zako zinaelekea kadiri muda unavyopita."], ["Kusimama (plateau)", "pale matokeo yanapoacha kuboreka kwa muda."]],
          slides: [
            { title: "Tazama mstari", bullets: ["Juu, chini au tambarare?", "Siku moja mbaya si mwelekeo"] },
            { title: "Juhudi dhidi ya matokeo", bullets: ["Juhudi juu, matokeo palepale au chini?", "Huenda umechoka: mwambie kocha wako"] },
            { title: "AI inaweza kuueleza", bullets: ["Bandika jedwali, bila majina wala kumbukumbu za afya", "Kagua hesabu zake wewe mwenyewe"] }
          ],
          tryIt: "Tengeneza chati ya safu yako ya Matokeo. Andika sentensi moja inayoeleza mwelekeo. Kisha muombe msaidizi wa AI auelezee na ulinganishe sentensi yake na yako.",
          youCanNow: "kutengeneza chati ya data yako ya mazoezi na kueleza mwelekeo kwa maneno rahisi.",
          quickCheck: [
            { objective: "O3", q: "Unatazama nini kwanza kwenye chati yako ya mazoezi?", options: ["Siku moja mbaya zaidi", "Rangi", "Mwelekeo wa jumla: juu, chini au tambarare", "Kichwa cha chati"], answer: 2, why: "Siku moja mbaya haina maana kubwa; mstari kwa ujumla unaonyesha mwelekeo." },
            { objective: "O3", q: "Unabandika jedwali lako kwenye msaidizi wa AI. Unaondoa nini kwanza?", options: ["Majina na kumbukumbu za afya", "Tarehe", "Safu ya Matokeo", "Hakuna kitu"], answer: 0, why: "Weka majina na kumbukumbu za afya nje ya zana za AI." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Malengo na data",
        questions: [
          { objective: "O1", q: "Lipi ni lengo linalopimika?", options: ["Kuwa bora", "Kuwa hodari sana", "Kufunga mitupo huru 16 kati ya 20 kufikia Januari 15, ikijaribiwa mazoezini", "Kufanya kazi kwa bidii"], answer: 2, why: "Lina namba, tarehe na jaribio." },
          { objective: "O1", q: "Kipimo cha mwanzo (baseline) ni nini?", options: ["Namba yako ya kuanzia kabla hujaanza mazoezi kwa ajili ya lengo", "Mstari wa nyuma wa uwanja", "Siku yako bora kabisa", "Wastani wa timu"], answer: 0, why: "Kipimo cha mwanzo kinaonyesha ulipoanzia." },
          { objective: "O2", q: "Daftari lipi la mazoezi lina manufaa zaidi?", options: ["La kifahari unaloacha baada ya wiki moja", "Unalojaza mara moja kwa msimu", "Unalobuni kwa kukisia", "Rahisi unalojaza kila mara"], answer: 3, why: "Data ya kila mara ndiyo inayofanya mwelekeo uwe na maana." },
          { objective: "O2", q: "Unapaswa kuzichukulia vipi namba kutoka kifaa cha kuvaa?", options: ["Kama ukweli kamili", "Kama vidokezo vyenye manufaa ambavyo si kamili", "Kama ushauri wa kitabibu", "Kama kitu cha kuweka hadharani"], answer: 1, why: "Vifaa vya kuvaa vinasaidia lakini vinaweza kukosea." },
          { objective: "O3", q: "Viwango vyako vya juhudi vinaendelea kupanda lakini muda wako unazidi kuwa wa polepole. Ufanye nini?", options: ["Kufanya mazoezi mara mbili zaidi", "Kumwambia kocha wako; huenda umechoka", "Kuacha kurekodi", "Kupuuza"], answer: 1, why: "Juhudi inayopanda na matokeo yanayoshuka yanaweza kuonyesha uchovu, ambao kocha wako anapaswa kuujua." }
        ]
      }
    },
    {
      name: "Sura 2: Kutumia AI pamoja na kocha wako",
      lessons: [
        {
          objectives: ["O4"],
          title: "AI inachoweza na isichoweza kufanya kwa mazoezi",
          minutes: 4,
          goal: "Panga kazi za mazoezi katika zile AI inaweza kusaidia na zile ni za kocha wako au mkufunzi wa afya ya wanamichezo.",
          text: [
            "Wasaidizi wa AI ni hodari wa kupanga mambo: kugeuza maelezo kuwa jedwali, kueleza neno la mazoezi, kufupisha daftari lako, au kuandika maswali kwa kocha wako.",
            "Si hodari wa kuujua mwili wako. Hawawezi kuona mtindo wako, historia yako ya majeraha au jinsi ulivyolala, na mipango ya jumla kutoka intaneti huenda isilingane na umri wako, kiwango chako au msimu wako.",
            "Kwa hiyo tumia AI kuelewa na kujiandaa, na mwachie kocha wako na mkufunzi wa afya ya wanamichezo waamue mazoezi yako, uzito wa mazoezi na kurudi kwako baada ya jeraha."
          ],
          words: [["Mzigo wa mazoezi (training load)", "kiasi na ugumu wa mazoezi unayofanya kadiri muda unavyopita."], ["Mkufunzi wa afya ya wanamichezo (athletic trainer)", "mtaalamu wa afya mwenye leseni anayezuia na kutibu majeraha na kuwasaidia wanamichezo kupona."]],
          slides: [
            { title: "AI ni hodari wa", bullets: ["Kupanga maelezo kuwa majedwali", "Kueleza maneno ya mazoezi", "Kufupisha daftari lako", "Kuandika maswali kwa kocha wako"] },
            { title: "AI haiwezi", bullets: ["Kuona mtindo wako", "Kujua historia yako ya majeraha", "Kujua unavyojisikia leo"] },
            { title: "Nani anaamua", bullets: ["Kocha: mazoezi na uzito wake", "Mkufunzi wa afya: jeraha na kurudi uwanjani"] }
          ],
          tryIt: "Muombe msaidizi wa AI aeleze neno moja la mazoezi ulilowahi kusikia (kwa mfano \"periodization\" au \"deload week\") kwa maneno rahisi. Andika swali moja kulihusu kwa kocha wako.",
          youCanNow: "kusema kazi zipi za mazoezi AI inaweza kusaidia na zipi ni za kocha wako au mkufunzi wa afya ya wanamichezo.",
          quickCheck: [
            { objective: "O4", q: "Kati ya hivi, kipi msaidizi wa AI anaweza kufanya vizuri kwa mazoezi?", options: ["Kuona mtindo wako mazoezini", "Kujua historia yako ya majeraha", "Kuamua kurudi kwako baada ya jeraha", "Kueleza neno la mazoezi"], answer: 3, why: "AI ni hodari wa kupanga na kueleza, si wa kuujua mwili wako." },
            { objective: "O4", q: "Msaidizi wa AI anakupa mpango wa kubeba uzito mzito zaidi kuliko alioandika kocha wako. Unafanya nini?", options: ["Kufuata mpango wa AI", "Kuutumia kuandaa swali na kumwachia kocha wako aamue", "Kufanya mipango yote miwili", "Kuacha kubeba uzito"], answer: 1, why: "Tumia AI kuelewa na kujiandaa; kocha wako ndiye anayeamua mazoezi na uzito wake." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kutambua ushauri wa mazoezi wa AI usio salama",
          minutes: 5,
          goal: "Tambua dalili za hatari katika ushauri wa mazoezi wa AI au wa mtandaoni.",
          text: [
            "AI na mipango ya mtandaoni inaweza kutoa ushauri ulio mwingi mno, wa haraka mno, au usiofaa kwa wanamichezo wachanga au walioumia. Unahitaji kuutambua.",
            "Dalili za hatari: kuendelea na mazoezi ukiwa na maumivu makali; kuongeza mazoezi sana kwa mara moja; kupunguza chakula au maji ili kufikia uzito fulani; virutubisho vinavyoahidi matokeo ya haraka; \"hakuna siku za kupumzika\"; na mpango wowote unaopuuza alichoandika kocha wako.",
            "Virutubisho ni hatari ya pekee: havikaguliwi na FDA (mamlaka ya chakula na dawa ya Marekani) kabla ya kuuzwa, na baadhi vina vitu vilivyopigwa marufuku. Ongea na mkufunzi wako wa afya ya wanamichezo au mtaalamu wa lishe aliyesajiliwa kabla ya kutumia chochote."
          ],
          steps: ["Soma ushauri polepole.", "Ulinganishe na orodha ya dalili za hatari.", "Dalili yoyote ya hatari ikionekana, usiufuate.", "Upeleke kwa kocha wako au mkufunzi wa afya ya wanamichezo."],
          words: [["Dalili ya hatari", "ishara ya onyo kwamba kitu si salama au si sahihi."], ["Kirutubisho (supplement)", "kidonge, unga au kinywaji kinachouzwa ili kuongeza kitu kwenye chakula chako."]],
          slides: [
            { title: "Dalili za hatari", bullets: ["Mazoezi ukiwa na maumivu makali", "Kuongeza mazoezi sana kwa mara moja", "Kupunguza chakula au maji ili kufikia uzito", "\"Hakuna siku za kupumzika\""] },
            { title: "Virutubisho", bullets: ["Havikaguliwi na FDA kabla ya kuuzwa", "Baadhi vina vitu vilivyopigwa marufuku", "Muulize kwanza mkufunzi wa afya au mtaalamu wa lishe"] },
            { title: "Ukiona dalili moja", bullets: ["Usiufuate", "Upeleke kwa kocha au mkufunzi wa afya"] }
          ],
          sources: [{ name: "USADA: Supplement Connect (hatari za virutubisho kwa wanamichezo)", url: "https://www.usada.org/athletes/substances/supplement-connect/" }],
          tryIt: "Muombe msaidizi wa AI \"mpango wa kuwa na kasi zaidi katika wiki mbili\". Usome na uzungushie duara dalili zozote za hatari. Andika ungemuuliza nini kocha wako kuuhusu.",
          youCanNow: "kutambua ushauri wa mazoezi usio salama na kuupeleka kwa mtu sahihi.",
          quickCheck: [
            { objective: "O5", q: "Kati ya hivi, kipi ni dalili ya hatari katika ushauri wa mazoezi?", options: ["Siku ya kupumzika kila wiki", "Mpango unaolingana na alichoandika kocha wako", "Kuongeza mazoezi sana kwa mara moja", "Kupasha mwili moto kabla ya mazoezi"], answer: 2, why: "Mwingi mno, haraka mno ni mojawapo ya dalili za hatari katika somo." },
            { objective: "O5", q: "Mchezaji mwenzako anakushirikisha kirutubisho kinachoahidi matokeo ya haraka. Unafanya nini?", options: ["Kuongea kwanza na mkufunzi wako wa afya ya wanamichezo au mtaalamu wa lishe aliyesajiliwa", "Kujaribu kiasi kidogo", "Kukinunua kama maoni ya wateja ni mazuri", "Kuiomba AI ikiidhinishe"], answer: 0, why: "Virutubisho havikaguliwi na FDA kabla ya kuuzwa na baadhi vina vitu vilivyopigwa marufuku." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kujiandaa kwa mazungumzo ya mazoezi na kocha wako",
          minutes: 5,
          goal: "Tumia AI kuandaa taarifa fupi iliyo wazi na maswali matatu kwa kocha wako.",
          text: [
            "Makocha wana shughuli nyingi. Taarifa fupi iliyo wazi yenye namba zako inaboresha mazungumzo: lengo lako ni nini, data yako inaonyesha nini, na unataka kuuliza nini.",
            "Muulize msaidizi wa AI: \"Hili ni lengo langu na daftari langu la mazoezi. Niandikie taarifa ya sentensi tatu kwa kocha wangu na unipendekezee maswali matatu ninayoweza kuuliza kuhusu kipindi changu kijacho cha mazoezi.\" Kisha uirekebishe isikike kama wewe.",
            "Mpelekee kocha wako taarifa hiyo ana kwa ana au kwa njia ambayo timu yako inapendelea. Sikiliza, andika maelezo, na usasishe mpango wako kwa anachosema kocha wako, si kwa kile AI ilichosema."
          ],
          steps: ["Bandika lengo lako na daftari lako (bila kumbukumbu za afya).", "Omba taarifa ya sentensi tatu na maswali matatu.", "Irekebishe kwa maneno yako mwenyewe.", "Mshirikishe kocha wako kwa njia ambayo timu yako inapendelea.", "Sasisha mpango wako kwa jibu la kocha wako."],
          words: [["Kipindi cha mazoezi (training block)", "wiki kadhaa zenye lengo moja kuu la mazoezi."], ["Taarifa", "ujumbe mfupi unaosema ulipo sasa."]],
          slides: [
            { title: "Taarifa nzuri", bullets: ["Lengo langu", "Data yangu inaonyesha nini", "Maswali yangu"] },
            { title: "Tumia AI kuandaa rasimu", bullets: ["Taarifa ya sentensi tatu", "Maswali matatu", "Irekebishe kwa maneno yako mwenyewe"] },
            { title: "Kisha", bullets: ["Ongea na kocha wako", "Andika maelezo", "Fuata mpango wa kocha wako"] }
          ],
          tryIt: "Kazi ya mwisho: rekodi angalau vipindi vinne, muombe msaidizi wa AI aeleze mwelekeo wako, na uandike taarifa ya sentensi tatu pamoja na maswali matatu kwa kocha wako.",
          youCanNow: "kugeuza data yako ya mazoezi kuwa taarifa iliyo wazi na maswali kwa kocha wako.",
          quickCheck: [
            { objective: "O6", q: "Taarifa nzuri kwa kocha inagusa mambo gani matatu?", options: ["Lengo lako, data yako inaonyesha nini na unataka kuuliza nini", "Mitandao yako ya kijamii, usingizi na alama za shule", "Takwimu za wachezaji wengine", "Siku yako bora tu"], answer: 0, why: "Taarifa fupi inatoa lengo lako, data yako na maswali yako." },
            { objective: "O6", q: "Jibu la kocha wako ni tofauti na pendekezo la AI. Unafanya nini?", options: ["Kufuata AI", "Kuuliza AI nyingine", "Kupuuza yote mawili", "Kusasisha mpango wako kwa alichosema kocha wako"], answer: 3, why: "Sasisha mpango wako kwa jibu la kocha wako, si kwa kile AI ilichosema." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kutumia AI pamoja na kocha wako",
        questions: [
          { objective: "O4", q: "AI ni hodari wa kazi ipi ya mazoezi?", options: ["Kuona mtindo wako ana kwa ana", "Kukuruhusu kurudi baada ya jeraha", "Kujua jinsi ulivyolala", "Kufupisha daftari lako la mazoezi"], answer: 3, why: "Kupanga na kufupisha ni uwezo mkubwa wa AI." },
          { objective: "O4", q: "Nani anaamua lini urudi baada ya jeraha?", options: ["Mkufunzi wako wa afya ya wanamichezo au daktari", "Msaidizi wa AI", "Mchezaji mwenzako", "Mshawishi wa mazoezi mitandaoni"], answer: 0, why: "Kurudi uwanjani ni uamuzi wa afya wa wataalamu wenye sifa." },
          { objective: "O5", q: "Lipi ni dalili ya hatari katika ushauri wa mazoezi?", options: ["Siku za kupumzika kila wiki", "Kupasha mwili moto kwanza", "Kuendelea na mazoezi ukiwa na maumivu makali", "Kumuuliza kocha wako"], answer: 2, why: "Maumivu makali ni ishara ya kusimama na kupimwa." },
          { objective: "O5", q: "Kwa nini virutubisho ni hatari kwa wanamichezo?", options: ["Vimepigwa marufuku kila wakati", "Vinajaribiwa na kocha wako", "Vina ladha mbaya", "Havikaguliwi na FDA kabla ya kuuzwa, na baadhi vina vitu vilivyopigwa marufuku"], answer: 3, why: "USADA inaonya kwamba virutubisho vinaweza kuchafuliwa au kuandikwa vibaya." },
          { objective: "O6", q: "Baada ya kuongea na kocha wako, unafuata mpango wa nani?", options: ["Wa AI", "Wa kocha wako", "Wa video yoyote", "Wa mpinzani wako"], answer: 1, why: "Kocha anapanga mazoezi; AI inakusaidia kujiandaa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: AI kwa Mazoezi na Utendaji",
    questions: [
      { objective: "O1", q: "\"Kuwa na kasi zaidi\" ni:", options: ["Lengo kamili", "Daftari la mazoezi", "Tamani, si lengo linalopimika", "Zoezi"], answer: 2, why: "Halina namba, tarehe wala jaribio." },
      { objective: "O1", q: "Lengo zuri la mazoezi lina:", options: ["Kitu kimoja, namba, tarehe na jaribio", "Hisia tu", "Nywila yako", "Malengo kumi kwa mara moja"], answer: 0, why: "Sehemu hizo zinalifanya lipimike." },
      { objective: "O1", q: "Nani anapaswa kukubaliana nawe kuhusu lengo lako?", options: ["Kocha wako", "Mgeni mtandaoni", "AI peke yake", "Hakuna mtu"], answer: 0, why: "Lengo lako linapaswa kulingana na mpango wa timu." },
      { objective: "O2", q: "Daftari lako la kwanza la mazoezi linapaswa kuwa na nini?", options: ["Safu hamsini", "Kumbukumbu zako za kitabibu", "Tarehe, Kipindi, Juhudi na Matokeo", "Picha tu"], answer: 2, why: "Safu nne rahisi zinatosha kuanza." },
      { objective: "O2", q: "Kiwango cha juhudi cha 1 hadi 10 kinapima:", options: ["Urefu wako", "Jinsi kipindi kilivyokuwa kigumu", "Alama zako za shule", "Wafuasi wako"], answer: 1, why: "Ni alama ya haraka ya juhudi unayohisi." },
      { objective: "O2", q: "Namba kutoka saa au mkanda ni:", options: ["Sahihi kabisa kila wakati", "Uchunguzi wa kitabibu", "Hazina maana", "Vidokezo vyenye manufaa vinavyoweza kukosea"], answer: 3, why: "Vifaa vya kuvaa vinasaidia, lakini vichukulie kama vidokezo." },
      { objective: "O3", q: "Unaposoma chati yako, unapaswa kuzingatia:", options: ["Siku yako moja mbaya zaidi", "Rangi ya chati", "Mwelekeo wa jumla wa mstari", "Chati za wanamichezo wengine"], answer: 2, why: "Mwelekeo ni muhimu kuliko siku moja." },
      { objective: "O3", q: "Matokeo yamebaki palepale kwa wiki kadhaa. Hii inaitwa:", options: ["Mbio fupi", "Kipimo cha mwanzo", "Kifaa cha kuvaa", "Kusimama (plateau)"], answer: 3, why: "Kusimama ni kipindi kisicho na maendeleo." },
      { objective: "O3", q: "Kabla ya kubandika daftari lako kwenye AI, ondoa:", options: ["Majina na kumbukumbu za afya", "Tarehe", "Viwango vya juhudi", "Matokeo"], answer: 0, why: "Weka taarifa binafsi na za afya nje ya zana za AI." },
      { objective: "O3", q: "AI inasema wastani wako umeboreka kwa sekunde 2. Unapaswa:", options: ["Kuuweka mtandaoni", "Kukagua hesabu wewe mwenyewe", "Kuiamini kabisa", "Kufuta daftari lako"], answer: 1, why: "AI inaweza kukosea hesabu." },
      { objective: "O4", q: "Kipi AI HAIWEZI kukufanyia?", options: ["Kueleza neno la mazoezi", "Kugeuza maelezo kuwa jedwali", "Kuona mtindo wako mazoezini", "Kuandika maswali kwa kocha wako"], answer: 2, why: "Haiwezi kukuona ukifanya mazoezi." },
      { objective: "O4", q: "Mkufunzi wa afya ya wanamichezo anafanya nini?", options: ["Anazuia na kutibu majeraha na kusaidia kupona", "Anauza viatu", "Anaendesha mitandao ya kijamii", "Anaandika ratiba ya timu"], answer: 0, why: "Wakufunzi wa afya ya wanamichezo ni wataalamu wa afya wenye leseni." },
      { objective: "O5", q: "Mpango wa mtandaoni unasema upunguze maji ili kufikia uzito. Hii ni:", options: ["Salama kwa kila mtu", "Lazima", "Wazo zuri kabla ya mechi", "Dalili ya hatari"], answer: 3, why: "Kupunguza chakula au maji ili kufikia uzito kunaweza kuwa hatari." },
      { objective: "O5", q: "Mpango wenye \"hakuna siku za kupumzika\" ni:", options: ["Bora kwa kukua", "Dalili ya hatari", "Unaotakiwa na NCAA", "Kawaida kwa wanaoanza"], answer: 1, why: "Kupumzika ni sehemu ya mazoezi; kutopumzika ni ishara ya onyo." },
      { objective: "O5", q: "Kabla ya kutumia kirutubisho chochote, ongea na:", options: ["Tangazo", "Mkufunzi wako wa afya ya wanamichezo au mtaalamu wa lishe aliyesajiliwa", "Mchezaji mwenzako", "Hakuna mtu"], answer: 1, why: "Wanaweza kueleza hatari, pamoja na vitu vilivyopigwa marufuku." },
      { objective: "O5", q: "Ushauri wa AI ukipingana na mpango wa kocha wako, wewe:", options: ["Unafuata AI", "Unaacha timu", "Unafuata kocha wako na kuuliza kuuhusu", "Unafanya yote mawili"], answer: 2, why: "Kocha wako anakujua wewe na mpango wa timu." },
      { objective: "O6", q: "Taarifa nzuri kwa kocha ina:", options: ["Lengo lako, data yako inaonyesha nini, na maswali yako", "Malalamiko tu", "Insha ndefu", "Nywila yako"], answer: 0, why: "Fupi na wazi inawasaidia makocha wenye shughuli nyingi." },
      { objective: "O6", q: "Baada ya AI kuandika rasimu ya taarifa yako, unapaswa:", options: ["Kuituma bila kuisoma", "Kuiweka hadharani", "Kuirekebisha kwa maneno yako mwenyewe", "Kumtumia mpinzani"], answer: 2, why: "Inapaswa kusikika kama wewe na iwe kweli." },
      { objective: "O6", q: "Kipindi cha mazoezi (training block) ni:", options: ["Kipande cha mbao", "Mpira uliozuiwa", "Siku ya kupumzika", "Wiki kadhaa zenye lengo moja kuu"], answer: 3, why: "Makocha hupanga mazoezi kwa vipindi." },
      { objective: "O4", q: "Matumizi bora ya AI kwa mazoezi ni:", options: ["Kuchukua nafasi ya kocha wako", "Kuelewa data yako na kuandaa maswali bora", "Kugundua majeraha", "Kuchagua virutubisho vyako"], answer: 1, why: "AI inakusaidia kuelewa na kujiandaa; watu ndio wanaoamua." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [0, 3, 6, 8, 10, 12, 14, 16]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      { name: "Lengo linalopimika", objective: "O1", notYet: "Lengo halijawa wazi, au namba, tarehe au jaribio halipo.", meets: "Kitu kimoja, namba, tarehe na jaribio, limekubaliwa na kocha.", exceeds: "Lina kipimo cha mwanzo na linalingana na sehemu iliyotajwa ya mpango wa msimu wa timu." },
      { name: "Daftari la mazoezi", objective: "O2", notYet: "Vipindi chini ya vinne, au safu zinakosekana.", meets: "Tarehe, Kipindi, Juhudi na Matokeo vimejazwa kwa angalau vipindi vinne.", exceeds: "Kila kipindi kimerekodiwa siku ileile, pamoja na maelezo mafupi au saa za usingizi." },
      { name: "Muhtasari wa mwelekeo", objective: "O3", notYet: "Hakuna chati, au mwelekeo si sahihi au haupo.", meets: "Chati na muhtasari wa sentensi moja au mbili wa mwelekeo, juhudi ikilinganishwa na matokeo na hesabu ya AI ikiwa imekaguliwa.", exceeds: "Anaona kusimama (plateau) au juhudi inayopanda na matokeo yaliyobaki palepale, na analigeuza kuwa swali kwa kocha." },
      { name: "Matumizi salama ya AI", objective: "O5", notYet: "Anafuata au anarudia ushauri wenye dalili ya hatari, au anashiriki kumbukumbu za afya na AI.", meets: "Hakuna ushauri wenye dalili ya hatari unaofuatwa, na chochote chenye shaka kinapelekwa kwa kocha au mkufunzi wa afya ya wanamichezo.", exceeds: "Anataja dalili mahususi ya hatari na kwa nini si salama anapoileta." },
      { name: "Maswali kwa kocha", objective: "O6", notYet: "Maswali chini ya matatu, au taarifa inasomeka kama maandishi ya AI yaliyonakiliwa.", meets: "Taarifa ya sentensi tatu na maswali matatu yaliyo wazi kwa maneno ya mwanamichezo mwenyewe.", exceeds: "Mwanamichezo anaandika majibu ya kocha na kusasisha mpango kutokana nayo." }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi ambao bado wanatunza daftari lao la mazoezi siku 30 baadaye (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti kufikia au kusogea kuelekea lengo lao linalopimika kufikia tarehe iliyokubaliwa",
      "Wanafunzi wanaoripoti kumpelekea kocha wao taarifa na maswali, au kukataa ushauri usio salama"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye intaneti",
      "Akaunti ya Google ya bure kwa ajili ya Google Sheets",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Lengo moja lililokubaliwa na kocha wako",
      "Kama dakika 60 za masomo, kisha kama dakika moja baada ya kila kipindi kwa wiki nne"
    ],
    facilitatorNotes: [
      "Shirikiana na kocha mkuu kabla ya kuanza ili malengo na madaftari yalingane na mpango wa timu; kozi hii haipangi mazoezi.",
      "Wafundishe wanamichezo kuondoa majina na kumbukumbu za afya kabla ya kubandika data yoyote kwenye zana ya AI.",
      "Peleka swali lolote kuhusu maumivu, jeraha, uzito au virutubisho kwa mkufunzi wa afya ya wanamichezo au mtaalamu wa lishe aliyesajiliwa; usilijibu katika kikundi.",
      "Fanyeni Masomo 1 hadi 2 kwanza, waacheni wanamichezo warekodi kwa wiki nne, kisha fanyeni Masomo 3 hadi 6 na kazi ya mwisho.",
      "Pangeni mikutano mifupi na kocha ili wanamichezo waweze kuwasilisha taarifa na maswali yao."
    ]
  }
};
