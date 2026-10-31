"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-sports-analytics.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "athletes-sports-analytics-sw",
  lang: "sw",
  translationOf: "athletes-sports-analytics",
  category: "Athletes",
  name: "Misingi ya Uchambuzi wa Takwimu za Michezo",
  skills: "Kuuliza swali la uchambuzi, Kusafisha jedwali la takwimu za michezo, Kukokotoa wastani, asilimia na viwango, Kutengeneza chati iliyo wazi, Kueleza matokeo kwa uaminifu",
  outcome: "kujibu swali moja la kweli kuhusu mchezaji au timu kwa kutumia takwimu: kukusanya na kusafisha jedwali dogo, kukokotoa wastani, asilimia na viwango kwa kila mechi katika Google Sheets, kutengeneza chati moja iliyo wazi, na kueleza matokeo na mipaka yake kwa sentensi tatu.",
  about: [
    "Kozi hii ni ya wanamichezo, makocha, wasimamizi wa timu na mashabiki wanaotaka kuelewa namba zilizo nyuma ya michezo na kuzitumia vizuri. Hakuna hesabu zaidi ya kujumlisha, kutoa, kuzidisha na kugawanya.",
    "Uchambuzi si kuwa na namba nyingi kuliko wengine. Ni kuuliza swali zuri, kutumia takwimu safi, kufanya hesabu rahisi kwa usahihi, kuonyesha matokeo kwa uwazi, na kuwa mkweli kuhusu kile ambacho hayathibitishi. Utatumia Google Sheets (jedwali la bure la Google) na msaidizi wa AI kama msaidizi.",
    "Kila somo linachukua kama dakika tano na lina kazi ya \"Jaribu sasa\". Jaribio la maarifa linafunga kila sura, na mtihani wa maswali 20 unafunga kozi."
  ],
  finalTask: "Jibu swali moja kuhusu timu yako au timu unayoipenda kwa kutumia takwimu: andika swali, kusanya takwimu za angalau mechi 10 kutoka kwa box score au ukurasa rasmi wa takwimu, zisafishe, kokotoa angalau wastani mmoja, asilimia moja na kiwango kimoja kwa kila mechi, tengeneza chati moja, na uandike matokeo kwa sentensi tatu zinazotaja mpaka mmoja wa takwimu zako.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo, makocha, wasimamizi wa timu na mashabiki wanaotaka kutumia namba za michezo vizuri. Wengi tayari hufuatilia takwimu lakini hawajawahi kuzifanyia kazi katika jedwali (spreadsheet).",
    startingPoint: "Wanaweza kusoma box score na kufanya hesabu za msingi. Hawatumii sana, au hawajawahi kutumia, fomula na chati za jedwali, na hawajazoea kupima kama namba fulani inathibitisha jambo lolote.",
    gap: "Mazungumzo ya michezo yamejaa namba zinazopotosha: sampuli ndogo sana, asilimia zilizokokotolewa vibaya kwa wastani, na uhusiano unaodhaniwa kuwa ndio sababu. Wanafunzi wanahitaji kujibu swali moja la kweli kwa takwimu safi, hesabu rahisi sahihi, chati iliyo wazi na mpaka mmoja unaosemwa kwa uaminifu, ili matokeo yao yamsaidie kocha au timu badala ya kuwachanganya.",
    constraints: [
      "Hesabu: hesabu za msingi tu; fomula zinaonyeshwa hatua kwa hatua",
      "Vifaa: simu au kompyuta yenye Google Sheets ya bure",
      "Muda: kama dakika tano kwa kila somo pamoja na muda wa kuingiza takwimu za mechi 10",
      "Takwimu lazima zitoke kwenye takwimu rasmi za timu, ligi au shule",
      "Takwimu za mchezaji mmoja mmoja hushirikiwa hadharani kwa ruhusa tu"
    ],
    prerequisites: "Hakuna. Wanafunzi wapya kwenye majedwali wanaweza kutaka kuanza na kozi ya msingi ya Google Sheets."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukipewa timu au mchezaji unayemfuatilia", action: "kuandika swali mahususi la uchambuzi ambalo takwimu za box score zinaweza kulijibu", standard: "ukitaja takwimu, mechi na ulinganisho" },
    { id: "O2", condition: "Ukitumia chanzo rasmi cha takwimu na Google Sheets", action: "kukusanya takwimu za angalau mechi 10 na kuzisafisha", standard: "kila mstari ukiwa mechi moja na kila pengo au tofauti ikirekebishwa kutoka kwenye chanzo" },
    { id: "O3", condition: "Ukipewa jedwali safi", action: "kukokotoa wastani, asilimia na kiwango kwa kila mechi kwa fomula za jedwali", standard: "jibu moja likikaguliwa kwa mkono kwa kikokotoo" },
    { id: "O4", condition: "Ukiwa na majibu uliyokokotoa", action: "kuchagua na kutengeneza chati moja inayojibu swali lako", standard: "ikiwa na kichwa kinachotaja matokeo na mihimili yote miwili ikiwa na lebo" },
    { id: "O5", condition: "Ukipewa matokeo", action: "kuyakagua kwa sampuli ndogo, uhusiano unaodhaniwa kuwa sababu na muktadha uliokosekana", standard: "ukiandika ukubwa wa sampuli na angalau maelezo mengine mawili yanayowezekana" },
    { id: "O6", condition: "Ukiwa na chati yako na ukaguzi wako", action: "kuandika na kushiriki matokeo kwa sentensi tatu pamoja na mipaka yake", standard: "ukijumuisha namba, kwa nini ni muhimu na mpaka mmoja wa takwimu" }
  ],
  chapters: [
    {
      name: "Sura 1: Maswali na takwimu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kuanza na swali zuri",
          minutes: 4,
          goal: "Andika swali la uchambuzi lililo wazi ambalo unaweza kulijibu kwa takwimu.",
          text: [
            "Uchambuzi unaanza na swali, si jedwali. Swali zuri ni mahususi na linaweza kujibiwa: \"Je, timu yetu inafunga mitupo ya pointi tatu kwa asilimia bora nyumbani au ugenini?\" \"Je, usahihi wa serve yangu ni bora katika seti ya kwanza au ya tatu?\"",
            "Epuka maswali makubwa mno (\"Nani ni mchezaji bora wa wakati wote?\") au ambayo takwimu haziwezi kuyajibu (\"Nani anajitahidi zaidi?\").",
            "Andika takwimu unazohitaji ili kulijibu: takwimu zipi, mechi ngapi, na utazipata wapi."
          ],
          steps: ["Andika swali kuhusu timu yako au mchezaji.", "Lifanye mahususi: nani, takwimu gani, ulinganisho gani.", "Hakikisha takwimu zinaweza kulijibu.", "Orodhesha takwimu unazohitaji na mahali pa kuzipata."],
          words: [["Uchambuzi (analytics)", "kutumia takwimu kujibu maswali na kufanya maamuzi bora."], ["Takwimu (data)", "ukweli na namba, kama pointi, majaribio na mitupo iliyofaulu."]],
          slides: [
            { title: "Swali kwanza", bullets: ["Si jedwali", "Mahususi na linaloweza kujibiwa"] },
            { title: "Zuri dhidi ya kubwa mno", bullets: ["Zuri: % ya pointi 3 nyumbani dhidi ya ugenini", "Kubwa mno: \"mchezaji bora wa wakati wote?\"", "Si la takwimu: \"nani anajitahidi zaidi?\""] },
            { title: "Panga takwimu", bullets: ["Takwimu zipi", "Mechi ngapi", "Utazipata wapi"] }
          ],
          tryIt: "Andika maswali matatu ya uchambuzi kuhusu timu yako au timu unayoipenda. Muulize msaidizi wa AI ni lipi linaloweza kujibiwa vizuri zaidi kwa box score. Chagua moja na uorodheshe takwimu unazohitaji.",
          youCanNow: "kuandika swali mahususi la uchambuzi na kupanga takwimu za kulijibu.",
          quickCheck: [
            { objective: "O1", q: "Ni nini kinachofanya swali la uchambuzi liweze kujibiwa?", options: ["Linataja takwimu na ulinganisho unaoweza kuhesabu", "Linauliza nani ni mtu bora", "Linauliza kuhusu hisia", "Halina namba yoyote"], answer: 0, why: "Swali zuri linaelekeza kwenye takwimu unazoweza kukusanya na kulinganisha." },
            { objective: "O1", q: "Swali lako ni \"Je, timu yetu ni nzuri?\". Utafanya nini?", options: ["Kuliacha kama lilivyo", "Kulifanya mahususi, kama kulinganisha rebound kwa kila mechi nyumbani na ugenini", "Kuwaomba mashabiki wapige kura", "Kuacha swali na kuanza kuchora chati"], answer: 1, why: "Swali mahususi linakuambia hasa takwimu gani za kukusanya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kukusanya na kusafisha takwimu",
          minutes: 6,
          goal: "Kusanya takwimu za angalau mechi 10 na uzisafishe ili ziwe tayari kutumika.",
          text: [
            "Pata takwimu kutoka vyanzo vya kuaminika: takwimu rasmi za timu yako, tovuti za ligi au za michezo ya shule, au box score rasmi. Andika kila namba ilitoka wapi.",
            "Ziweke katika Google Sheets: mstari mmoja kwa kila mechi, safu moja kwa kila takwimu, na mstari wa vichwa (Tarehe, Mpinzani, Nyumbani/Ugenini, 3PA, 3PM). Kusafisha maana yake ni kurekebisha matatizo: makosa ya kuandika, namba zinazokosekana, timu moja iliyoandikwa kwa njia mbili, namba zilizohifadhiwa kama maandishi, au mistari inayojirudia.",
            "Msaidizi wa AI anaweza kukusaidia kuona matatizo: bandika jedwali na uulize, \"Find any typos, duplicates, missing values or inconsistent names. Don't change the numbers, just list the problems.\" (Tafuta makosa ya kuandika, marudio, namba zinazokosekana au majina yasiyolingana. Usibadilishe namba, orodhesha matatizo tu.) Kisha yarekebishe mwenyewe ukitumia chanzo cha asili."
          ],
          steps: ["Tafuta chanzo rasmi cha takwimu zako.", "Andaa mstari mmoja kwa kila mechi, safu moja kwa kila takwimu.", "Ingiza angalau mechi 10.", "Kagua makosa ya kuandika, marudio, namba zinazokosekana na majina yasiyolingana.", "Yarekebishe ukitumia chanzo, si kubahatisha."],
          words: [["Box score", "jedwali la takwimu za mechi moja."], ["Kusafisha takwimu", "kurekebisha makosa na mapengo katika takwimu kabla ya kuzitumia."], ["Namba inayokosekana", "nafasi tupu mahali ambapo namba inapaswa kuwa."]],
          slides: [
            { title: "Vyanzo vya kuaminika", bullets: ["Takwimu rasmi za timu", "Tovuti za ligi au za michezo ya shule", "Andika chanzo"] },
            { title: "Mpangilio wa jedwali", bullets: ["Mstari mmoja kwa kila mechi", "Safu moja kwa kila takwimu", "Mstari wa vichwa wenye majina wazi"] },
            { title: "Zisafishe", bullets: ["Makosa ya kuandika, marudio, nafasi tupu", "Jina moja lililoandikwa kwa njia mbili", "AI inaorodhesha matatizo; wewe unarekebisha kutoka kwenye chanzo"] }
          ],
          tryIt: "Ingiza takwimu za angalau mechi 10 katika Google Sheets kutoka kwenye chanzo rasmi. Iombe AI iorodheshe matatizo, kisha rekebisha kila moja kutoka kwenye chanzo.",
          youCanNow: "kukusanya takwimu za michezo kutoka vyanzo vya kuaminika na kuzisafisha.",
          quickCheck: [
            { objective: "O2", q: "Kila mstari wa jedwali lako la takwimu unapaswa kuwa na nini?", options: ["Msimu mmoja", "Maisha yote ya mchezaji mmoja ya kucheza", "Mechi moja", "Jina la timu moja"], answer: 2, why: "Mechi moja kwa kila mstari hufanya takwimu ziwe rahisi kuhesabu na kukagua." },
            { objective: "O2", q: "Mechi ya 7 haina namba ya majaribio. Unafanya nini?", options: ["Kubahatisha namba", "Kutumia makadirio ya AI", "Kufuta mechi zote", "Kuitafuta katika box score rasmi"], answer: 3, why: "Mapengo hurekebishwa kutoka kwenye chanzo cha asili, si kwa kubahatisha." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wastani, asilimia na viwango",
          minutes: 6,
          goal: "Kokotoa wastani, asilimia na kiwango kwa kila mechi katika Google Sheets.",
          text: [
            "Wastani: jumlisha thamani zote na ugawanye kwa idadi yake. Katika Sheets, =AVERAGE(B2:B11) inatoa wastani wa visanduku hivyo.",
            "Asilimia: mitupo iliyofaulu ikigawanywa kwa majaribio. Asilimia ya pointi tatu = 3PM / 3PA. Jumlisha jumla kwanza, kisha gawanya: =SUM(E2:E11)/SUM(D2:D11). Kuchukua wastani wa asilimia ya kila mechi kunaweza kutoa jibu lisilo sahihi idadi ya majaribio ikitofautiana sana.",
            "Kiwango: takwimu kwa kila mechi, kwa kila dakika au kwa kila jaribio hufanya ulinganisho uwe wa haki muda wa kucheza ukitofautiana. Pointi kwa kila mechi = jumla ya pointi / mechi zilizochezwa. Msaidizi wa AI anaweza kueleza fomula yoyote; kagua majibu kwa kikokotoo kwenye mstari mmoja."
          ],
          steps: ["Tumia =AVERAGE() kupata wastani.", "Kwa asilimia, gawanya jumla ya mitupo iliyofaulu kwa jumla ya majaribio.", "Kwa kiwango, gawanya jumla kwa mechi au dakika.", "Panga asilimia zionekane kama asilimia (%).", "Kagua jibu moja kwa kikokotoo."],
          words: [["Wastani", "jumla ikigawanywa kwa idadi ya thamani."], ["Asilimia", "sehemu kati ya 100, kama mitupo iliyofaulu kati ya majaribio."], ["Kiwango (rate)", "takwimu kwa kila kipimo kimoja, kama kwa kila mechi au kwa kila dakika."]],
          slides: [
            { title: "Wastani", bullets: ["Jumla / idadi", "=AVERAGE(B2:B11)"] },
            { title: "Asilimia", bullets: ["Jumla ya iliyofaulu / jumla ya majaribio", "=SUM(makes)/SUM(attempts)", "Usichukue wastani wa asilimia za mechi"] },
            { title: "Kiwango", bullets: ["Kwa kila mechi, kila dakika, kila jaribio", "Ni haki muda wa kucheza ukitofautiana", "Kagua moja kwa kikokotoo"] }
          ],
          tryIt: "Katika jedwali lako, kokotoa wastani mmoja, asilimia moja (njia ya jumla) na kiwango kimoja kwa kila mechi. Kagua kimoja kwa kikokotoo.",
          youCanNow: "kukokotoa wastani, asilimia na viwango kwa usahihi katika jedwali.",
          quickCheck: [
            { objective: "O3", q: "Kiwango kwa kila mechi ni nini?", options: ["Jumla ikigawanywa kwa idadi ya mechi", "Matokeo ya mechi ya mwisho", "Namba kubwa zaidi katika safu", "Kubahatisha kuhusu mechi ijayo"], answer: 0, why: "Kiwango hugawa jumla kwa mechi ili wachezaji walinganishwe kwa haki." },
            { objective: "O3", q: "Umekokotoa asilimia ya timu kwa fomula. Unaikagua vipi?", options: ["Kuiamini fomula", "Kukokotoa jibu moja kwa kikokotoo", "Kumuuliza shabiki", "Kubadilisha takwimu hadi zionekane sawa"], answer: 1, why: "Kukagua jibu moja kwa mkono hukamata makosa ya fomula." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Maswali na takwimu",
        questions: [
          { objective: "O1", q: "Lipi ni swali zuri la uchambuzi?", options: ["\"Nani ni bora wa wakati wote?\"", "\"Nani anajitahidi zaidi?\"", "\"Je, tunafunga pointi tatu vizuri zaidi nyumbani au ugenini?\"", "\"Je, michezo inafurahisha?\""], answer: 2, why: "Ni mahususi na takwimu zinaweza kulijibu." },
          { objective: "O2", q: "Takwimu zako zinapaswa kutoka wapi?", options: ["Takwimu rasmi za timu, ligi au shule", "Kumbukumbu tu", "Maoni ya mtu yeyote", "Kubahatisha"], answer: 0, why: "Vyanzo vya kuaminika huleta majibu ya kuaminika." },
          { objective: "O2", q: "Kusafisha takwimu maana yake ni:", options: ["Kufuta takwimu zote", "Kufanya namba ziwe kubwa zaidi", "Kubadilisha chanzo", "Kurekebisha makosa na mapengo kabla ya kutumia takwimu"], answer: 3, why: "Takwimu safi hutoa majibu sahihi." },
          { objective: "O3", q: "Asilimia ya pointi tatu ya timu kwa mechi 10 inapatikana vizuri zaidi kwa:", options: ["Kuchukua wastani wa asilimia ya kila mechi", "Jumla ya iliyofaulu ikigawanywa kwa jumla ya majaribio", "Kujumlisha asilimia", "Kubahatisha"], answer: 1, why: "Jumla hushughulikia vizuri mechi zenye idadi tofauti ya majaribio." },
          { objective: "O3", q: "Kwa nini utumie viwango kwa kila mechi au kwa kila dakika?", options: ["Kufanya namba ziwe kubwa zaidi", "Kulinganisha kwa haki muda wa kucheza ukitofautiana", "Kwa sababu ni mtindo", "Kuficha takwimu"], answer: 1, why: "Viwango huzingatia nafasi ambayo kila mchezaji alipata." }
        ]
      }
    },
    {
      name: "Sura 2: Kuonyesha na kueleza",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutengeneza chati iliyo wazi",
          minutes: 5,
          goal: "Tengeneza chati moja inayojibu swali lako kwa kuitazama mara moja.",
          text: [
            "Chagua chati inayofaa swali. Kulinganisha makundi (nyumbani dhidi ya ugenini): chati ya pau. Mabadiliko kwa muda (pointi mechi kwa mechi): chati ya mstari. Sehemu za kitu kizima: mara nyingi chati ya pau ni wazi zaidi kuliko chati ya duara (pie).",
            "Iweke wazi: kichwa kinachotaja matokeo (\"Tunafunga pointi tatu kwa asilimia 6 zaidi nyumbani\"), mihimili yenye lebo, mhimili wa y ukianzia sifuri kwa chati za pau, na bila mapambo ya ziada.",
            "Katika Google Sheets, chagua takwimu zako na uingize chati, kisha chagua aina ya chati na uhariri lebo. Unaweza kumuuliza msaidizi wa AI aina gani ya chati inafaa swali lako."
          ],
          steps: ["Amua: unalinganisha makundi au mabadiliko kwa muda?", "Chagua chati ya pau au ya mstari.", "Ingiza chati katika Sheets.", "Andika kichwa kinachotaja matokeo.", "Weka lebo kwenye mihimili; anza chati za pau kwenye sifuri."],
          words: [["Chati ya pau (bar chart)", "chati yenye pau za kulinganisha makundi."], ["Chati ya mstari (line chart)", "chati yenye mstari unaoonyesha mabadiliko kwa muda."], ["Mhimili (axis)", "mstari ulio pembeni au chini ya chati wenye lebo."]],
          slides: [
            { title: "Chagua chati", bullets: ["Kulinganisha makundi: pau", "Mabadiliko kwa muda: mstari", "Pau mara nyingi ni wazi kuliko duara"] },
            { title: "Iweke wazi", bullets: ["Kichwa kinataja matokeo", "Mihimili yenye lebo", "Pau zinaanzia sifuri"] },
            { title: "Katika Sheets", bullets: ["Chagua takwimu, ingiza chati", "Chagua aina, hariri lebo"] }
          ],
          tryIt: "Tengeneza chati moja inayojibu swali lako. Ipe kichwa kinachotaja matokeo, na uweke lebo kwenye mihimili yote miwili.",
          youCanNow: "kutengeneza chati iliyo wazi inayojibu swali kwa kuitazama mara moja.",
          quickCheck: [
            { objective: "O4", q: "Kichwa kizuri cha chati kinapaswa kufanya nini?", options: ["Kuandika \"Chati 1\" tu", "Kuorodhesha kila namba", "Kutaja matokeo", "Kuachwa tupu"], answer: 2, why: "Kichwa kinachotaja matokeo huwasaidia watu kuelewa chati kwa kuitazama mara moja." },
            { objective: "O4", q: "Unalinganisha ufungaji nyumbani na ugenini. Unachagua chati gani?", options: ["Chati ya duara", "Ramani", "Jedwali bila chati", "Chati ya pau"], answer: 3, why: "Chati za pau hulinganisha makundi machache kando kwa kando kwa uwazi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Uhusiano, ukubwa wa sampuli na mitego mingine",
          minutes: 5,
          goal: "Tambua mitego mitatu ya kawaida inayofanya namba zipotoshe.",
          text: [
            "Sampuli ndogo: mechi tatu hazitoshi kuthibitisha mengi. Mchezaji anayefunga 4 kati ya 5 si lazima awe mfungaji wa asilimia 80. Mechi zaidi hukupa uhakika zaidi.",
            "Uhusiano si sababu: timu ikishinda zaidi inapovaa jezi za bluu, huenda jezi siyo sababu. Mambo mawili kwenda pamoja haimaanishi kwamba moja linasababisha jingine; tafuta maelezo mengine, kama nguvu ya mpinzani au mechi za nyumbani.",
            "Muktadha ni muhimu: takwimu hazinasi kila kitu, kama juhudi za kujihami, majeraha, au ubora wa wapinzani. Msaidizi wa AI anaweza kukusaidia kuorodhesha maelezo mengine: \"Nini kingine kinaweza kueleza mfumo huu?\""
          ],
          steps: ["Kagua ukubwa wa sampuli.", "Uliza: kuna kitu kingine kinachoweza kueleza hili?", "Angalia muktadha: wapinzani, majeraha, nyumbani/ugenini.", "Iombe AI maelezo mengine.", "Andika una uhakika kiasi gani."],
          words: [["Ukubwa wa sampuli", "idadi ya mechi au majaribio yaliyomo katika takwimu zako."], ["Uhusiano (correlation)", "mambo mawili yanayoelekea kwenda pamoja."], ["Sababu (causation)", "pale jambo moja linaposababisha jingine kweli."]],
          slides: [
            { title: "Sampuli ndogo", bullets: ["4 kati ya 5 si 80% iliyothibitishwa", "Mechi zaidi, uhakika zaidi"] },
            { title: "Uhusiano si sababu", bullets: ["Jezi za bluu hazishindi mechi", "Tafuta maelezo mengine"] },
            { title: "Muktadha", bullets: ["Wapinzani, majeraha, nyumbani/ugenini", "Juhudi na kujihami havihesabiwi kila mara"] }
          ],
          tryIt: "Angalia matokeo yako. Andika ukubwa wa sampuli, mambo mawili mengine yanayoweza kuyaeleza, na una uhakika kiasi gani (mdogo, wa kati, mkubwa).",
          youCanNow: "kutambua sampuli ndogo, kuchanganya uhusiano na sababu, na muktadha uliokosekana.",
          quickCheck: [
            { objective: "O5", q: "Mtego wa sampuli ndogo ni nini?", options: ["Kufikia hitimisho kubwa kutoka kwa mechi au majaribio machache mno", "Kutumia takwimu rasmi", "Kutengeneza chati ya pau", "Kuweka lebo kwenye mihimili"], answer: 0, why: "Mechi au majaribio machache yanaweza kubadilika sana kwa bahati." },
            { objective: "O5", q: "Timu yako ilifunga zaidi baada ya mazoezi mapya ya kupasha mwili moto, lakini pia ilicheza na wapinzani dhaifu. Unaandika nini?", options: ["Mazoezi ya kupasha mwili moto ndiyo yalisababisha", "Wapinzani dhaifu wanaweza pia kueleza hili", "Hakuna; imethibitishwa", "Kufuta matokeo"], answer: 1, why: "Mambo mengine yanaweza kueleza mfumo, kwa hiyo unayataja." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kueleza matokeo yako",
          minutes: 5,
          goal: "Andika na ushiriki matokeo kwa sentensi tatu pamoja na mipaka yake.",
          text: [
            "Matokeo mazuri yana sentensi tatu: 1. Ulichogundua, pamoja na namba. 2. Kwa nini kinaweza kuwa muhimu kwa timu. 3. Mpaka mmoja wa takwimu. Mfano: \"Katika mechi 12 tulifunga pointi tatu kwa 38% nyumbani na 31% ugenini. Hali hii ikiendelea, kufanyia mazoezi taratibu za mechi za ugenini kunaweza kusaidia. Tukiwa na mechi 6 tu za ugenini, hii inaweza kuwa bahati.\"",
            "Muombe msaidizi wa AI afanye sentensi zako ziwe wazi zaidi, kisha kagua namba mwenyewe. Onyesha chati pamoja nazo.",
            "Mshirikishe kocha wako kama taarifa, si kama agizo. Makocha huunganisha namba na kile wanachokiona. Kamwe usishiriki hadharani takwimu za mchezaji mmoja mmoja bila ruhusa."
          ],
          steps: ["Sentensi 1: ulichogundua, pamoja na namba.", "Sentensi 2: kwa nini kinaweza kuwa muhimu.", "Sentensi 3: mpaka mmoja.", "Ongeza chati yako.", "Mshirikishe kocha wako, si hadharani."],
          words: [["Matokeo (finding)", "kile ambacho uchambuzi wako unaonyesha."], ["Mpaka (limit)", "sababu inayoweza kufanya matokeo yasiaminike kikamilifu."]],
          slides: [
            { title: "Sentensi tatu", bullets: ["1. Ulichogundua, pamoja na namba", "2. Kwa nini kinaweza kuwa muhimu", "3. Mpaka mmoja"] },
            { title: "Boresha", bullets: ["AI inaifanya iwe wazi zaidi", "Wewe unakagua namba", "Ongeza chati yako"] },
            { title: "Shiriki vizuri", bullets: ["Taarifa, si agizo", "Kocha huunganisha takwimu na macho", "Hakuna takwimu za mchezaji hadharani bila ruhusa"] }
          ],
          tryIt: "Kazi ya mwisho: andika matokeo yako kwa sentensi tatu pamoja na chati yako, ukubwa wa sampuli na chanzo, na uyashiriki na kocha wako au mchezaji mwenzako.",
          youCanNow: "kueleza matokeo ya takwimu kwa uaminifu, pamoja na mipaka yake.",
          quickCheck: [
            { objective: "O6", q: "Sehemu tatu za matokeo mazuri ni zipi?", options: ["Utani, chati na kubahatisha", "Namba kubwa zaidi tu", "Namba, kwa nini ni muhimu na mpaka mmoja", "Agizo, tarehe ya mwisho na jina"], answer: 2, why: "Sehemu hizo tatu hufanya matokeo yawe wazi na ya kweli." },
            { objective: "O6", q: "Unataka kuweka mtandaoni takwimu za mchezaji mwenzako. Unafanya nini kwanza?", options: ["Kuziweka mara moja", "Kubadilisha jina lake kidogo", "Kuweka mechi mbaya tu", "Kuomba ruhusa yake"], answer: 3, why: "Takwimu za mchezaji mmoja mmoja hushirikiwa hadharani kwa ruhusa tu." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Kuonyesha na kueleza",
        questions: [
          { objective: "O4", q: "Chati gani inafaa \"pointi mechi kwa mechi katika msimu\"?", options: ["Chati ya duara", "Hakuna chati", "Ramani", "Chati ya mstari"], answer: 3, why: "Chati za mstari huonyesha mabadiliko kwa muda." },
          { objective: "O4", q: "Kichwa kizuri cha chati:", options: ["Kinataja matokeo", "Kinasema \"Chati 1\"", "Ni tupu", "Ni utani"], answer: 0, why: "Kinamwambia msomaji aone nini." },
          { objective: "O5", q: "Mchezaji anafunga 4 kati ya 5 katika mechi moja. Hii inathibitisha:", options: ["Ni mfungaji wa 80%", "Anapaswa kupiga kila mtupo", "Si mengi; sampuli ni ndogo", "Hakuna chochote kuhusu kitu chochote milele"], answer: 2, why: "Sampuli ndogo zinaweza kupotosha." },
          { objective: "O5", q: "Timu inashinda zaidi ikivaa jezi za bluu. Kuna uwezekano mkubwa kwamba:", options: ["Bluu husababisha ushindi", "Msivae nyekundu kamwe", "Takwimu ni za uongo", "Kitu kingine kinaeleza hili"], answer: 3, why: "Uhusiano si sababu." },
          { objective: "O6", q: "Sentensi ya 3 ya matokeo ni:", options: ["Agizo kwa kocha", "Mpaka mmoja wa takwimu", "Utani", "Nenosiri lako"], answer: 1, why: "Matokeo ya kweli yanajumuisha mipaka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Misingi ya Uchambuzi wa Takwimu za Michezo",
    questions: [
      { objective: "O1", q: "Uchambuzi unaanza na:", options: ["Jedwali", "Chati", "Swali", "Kubahatisha"], answer: 2, why: "Swali linaongoza kila kitu kingine." },
      { objective: "O1", q: "Swali lipi ambalo takwimu HAZIWEZI kulijibu vizuri?", options: ["\"Nani anajitahidi zaidi?\"", "\"Je, tunafunga zaidi nyumbani?\"", "\"Je, serve yangu ni bora katika seti 1?\"", "\"Je, tunapoteza mpira zaidi katika robo ya 4?\""], answer: 0, why: "Juhudi hazipimwi katika box score." },
      { objective: "O2", q: "Box score ni:", options: ["Jedwali la takwimu za mechi moja", "Sanduku la zawadi", "Aina ya chati", "Benchi la timu"], answer: 0, why: "Linaorodhesha takwimu za mechi moja." },
      { objective: "O2", q: "Katika jedwali lako, kila mstari unapaswa kuwa:", options: ["Msimu mmoja", "Namba moja yoyote", "Mechi moja", "Chati moja"], answer: 2, why: "Mstari mmoja kwa kila mechi huweka takwimu kwa mpangilio." },
      { objective: "O2", q: "\"Lincoln HS\" na \"Lincoln High\" katika safu moja ni:", options: ["Sawa tu", "Majina yasiyolingana ya kusafisha", "Chati", "Fomula"], answer: 1, why: "Timu moja yenye maandishi mawili huharibu hesabu." },
      { objective: "O2", q: "AI inapata namba inayokosekana. Unairekebisha kwa:", options: ["Kubahatisha", "Kuiacha AI iibuni", "Kufuta safu", "Kukagua chanzo cha asili"], answer: 3, why: "Rekebisha kutoka kwenye chanzo, si kwa kubahatisha." },
      { objective: "O3", q: "=AVERAGE(B2:B11) inatoa:", options: ["Jumla", "Thamani kubwa zaidi", "Wastani wa visanduku hivyo", "Chati"], answer: 2, why: "AVERAGE hukokotoa wastani." },
      { objective: "O3", q: "Asilimia ya pointi tatu ni sawa na:", options: ["3PA ikigawanywa kwa 3PM", "3PM ukijumlisha 3PA", "Pointi zikigawanywa kwa mechi", "3PM ikigawanywa kwa 3PA"], answer: 3, why: "Iliyofaulu juu ya majaribio." },
      { objective: "O3", q: "Kwa nini usichukue wastani wa asilimia ya kila mechi?", options: ["Mechi zenye idadi tofauti ya majaribio hupewa uzito usio sahihi", "Ni kinyume na sheria", "Daima ni sahihi", "Sheets haiwezi kufanya hivyo"], answer: 0, why: "Tumia jumla kupata asilimia ya kweli." },
      { objective: "O3", q: "Pointi kwa kila mechi ni:", options: ["Asilimia", "Kiwango", "Chati", "Box score"], answer: 1, why: "Ni takwimu kwa kila mechi." },
      { objective: "O3", q: "Kagua fomula kwa:", options: ["Kuiamini", "Kuifuta", "Kukokotoa mstari mmoja kwa kikokotoo", "Kumuuliza shabiki"], answer: 2, why: "Ukaguzi mmoja kwa mkono hukamata makosa." },
      { objective: "O4", q: "Kulinganisha nyumbani na ugenini, tumia:", options: ["Chati ya pau", "Chati ya mstari kwa muda tu", "Hakuna chati", "Picha"], answer: 0, why: "Pau hulinganisha makundi." },
      { objective: "O4", q: "Chati za pau kwa kawaida zinapaswa kuanza mhimili wa y kwenye:", options: ["Thamani ndogo zaidi", "100", "Popote", "Sifuri"], answer: 3, why: "Vinginevyo tofauti huonekana kubwa kuliko zilivyo." },
      { objective: "O4", q: "Kwa kawaida ni wazi zaidi kuliko chati ya duara:", options: ["Duara la 3D", "Chati ya pau", "Wingu la maneno", "Ukurasa mtupu"], answer: 1, why: "Pau ni rahisi kulinganisha." },
      { objective: "O5", q: "Ukubwa wa sampuli maana yake ni:", options: ["Ukubwa wa kiatu chako", "Idadi ya mechi au majaribio yaliyomo katika takwimu zako", "Ukubwa wa chati", "Ukubwa wa timu"], answer: 1, why: "Takwimu zaidi humaanisha uhakika zaidi." },
      { objective: "O5", q: "Uhusiano (correlation) maana yake ni:", options: ["Moja husababisha jingine", "Aina ya chati", "Hatua ya kusafisha", "Mambo mawili yanaelekea kwenda pamoja"], answer: 3, why: "Kwenda pamoja si kusababisha." },
      { objective: "O5", q: "Lipi ni muktadha ambao takwimu zinaweza kukosa?", options: ["Nguvu ya mpinzani na majeraha", "Pointi", "Rebound", "Matokeo ya mwisho"], answer: 0, why: "Muktadha unaeleza namba." },
      { objective: "O6", q: "Matokeo mazuri yanajumuisha:", options: ["Maoni tu", "Kila takwimu", "Namba, kwa nini ni muhimu na mpaka mmoja", "Hakuna namba"], answer: 2, why: "Huo ndio muundo wa sentensi tatu." },
      { objective: "O6", q: "Unamshirikisha kocha wako matokeo kama:", options: ["Amri", "Chapisho la mitandao ya kijamii", "Siri", "Taarifa, si agizo"], answer: 3, why: "Makocha huunganisha takwimu na kile wanachokiona." },
      { objective: "O6", q: "Takwimu za mchezaji mmoja mmoja zinapaswa kushirikiwa hadharani:", options: ["Kila mara", "Kwa ruhusa tu", "Kwa timu pinzani", "Katika maoni"], answer: 1, why: "Takwimu za mchezaji ni mambo yake binafsi." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      0,
      3,
      5,
      7,
      8,
      11,
      14,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Swali",
        objective: "O1",
        notYet: "Swali halieleweki au haliwezi kujibiwa kwa takwimu.",
        meets: "Swali linataja takwimu, mechi na ulinganisho.",
        exceeds: "Pia linasema kwa nini jibu ni muhimu kwa timu."
      },
      {
        name: "Takwimu safi",
        objective: "O2",
        notYet: "Mechi chini ya 10, hakuna chanzo, au mapengo na majina yasiyolingana yamebaki.",
        meets: "Angalau mechi 10 kutoka chanzo rasmi, moja kwa kila mstari, zimesafishwa.",
        exceeds: "Inaandika kila marekebisho yaliyofanywa na mahali yalipokaguliwa."
      },
      {
        name: "Hesabu",
        objective: "O3",
        notYet: "Hesabu moja inakosekana au asilimia imepatikana kwa wastani wa asilimia za mechi.",
        meets: "Wastani, asilimia kwa njia ya jumla na kiwango kwa kila mechi, kimoja kikiwa kimekaguliwa kwa mkono.",
        exceeds: "Fomula zina lebo ili mtu mwingine aweze kuzifuata."
      },
      {
        name: "Chati",
        objective: "O4",
        notYet: "Aina ya chati isiyofaa, hakuna kichwa au mihimili haina lebo.",
        meets: "Chati moja inayofaa yenye kichwa kinachotaja matokeo na mihimili yenye lebo.",
        exceeds: "Chati za pau zinaanzia sifuri na hakuna kitu cha ziada kinachovuruga matokeo."
      },
      {
        name: "Matokeo ya kweli",
        objective: "O6",
        notYet: "Inadai uthibitisho au inaacha ukubwa wa sampuli na mipaka.",
        meets: "Sentensi tatu: namba, kwa nini ni muhimu na mpaka mmoja, pamoja na chanzo.",
        exceeds: "Pia inataja maelezo mengine yanayowezekana na kiwango cha uhakika."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kozi na kufaulu kazi ya mwisho (rubriki)",
      "Wanafunzi wanaoshiriki matokeo ya takwimu na kocha au timu ndani ya siku 30 (utafiti wa ufuatiliaji)",
      "Makocha au timu zinazoripoti kutumia uchambuzi wa mwanafunzi katika uamuzi",
      "Wanafunzi wanaoanza kozi nyingine ya Koach Learn ya wanamichezo au ya takwimu ndani ya siku 30"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu au kompyuta yenye Google Sheets ya bure",
      "Uwezo wa kufikia ukurasa rasmi wa takwimu wa timu, ligi au shule",
      "Kikokotoo na msaidizi wa AI wa bure",
      "Kama dakika 60 za masomo, majaribio na mtihani, pamoja na muda wa kuingiza takwimu za mechi 10"
    ],
    facilitatorNotes: [
      "Acha vikundi vidogo vichague timu moja na vigawane kazi ya kuingiza takwimu, kisha vilinganishe majedwali yaliyosafishwa.",
      "Onyesha moja kwa moja njia ya jumla ya kukokotoa asilimia; ndilo kosa linalotokea mara nyingi zaidi.",
      "Tumia takwimu za kiwango cha timu au za hadharani kwa mazoezi; pata ruhusa kabla ya kushiriki namba za mchezaji yeyote mmoja.",
      "Mwombe kila kikundi kisome matokeo yake kwa sauti na kitaje mpaka mmoja kabla ya kuyashiriki na kocha.",
      "Tathmini kazi ya mwisho kwa rubriki, mstari mmoja wa Bado kwa wakati mmoja."
    ]
  }
};
