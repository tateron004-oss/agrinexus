"use strict";

// Koach Learn course (Swahili translation of athletes/athletes-influencer-marketing.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// NIL and endorsement rules change: sources are the FTC, NCAA and College Sports Commission pages checked 27-28 October 2026; students are told to confirm with their school and state.

module.exports = {
  id: "athletes-influencer-marketing-sw",
  lang: "sw",
  translationOf: "athletes-influencer-marketing",
  category: "Athletes",
  name: "Masoko kwa Ushawishi kwa Wanamichezo",
  skills: "Kupata chapa zinazokufaa, Kutengeneza media kit ya ukurasa mmoja, Kuandika ombi kwa chapa kwa msaada wa AI, Kutambua dalili za hatari katika mkataba, Kutangaza wazi machapisho yaliyolipiwa na kufuata kanuni za NIL",
  outcome: "kutengeneza media kit ya ukurasa mmoja, kutuma ombi kwa chapa moja inayokufaa kwa ujumbe ulioandaliwa na AI, kukagua mkataba kutafuta dalili za hatari pamoja na mtu mzima unayemwamini, na kuchapisha maudhui yaliyolipiwa yenye tangazo wazi kama FTC inavyotaka huku ukifuata kanuni za NIL za shule yako na jimbo lako.",
  about: [
    "Kozi hii ni kwa wanamichezo wanaotaka kufanya kazi na chapa (makampuni na bidhaa) kwenye mitandao ya kijamii kupitia mikataba ya jina, picha na sura (NIL), na kwa makocha na wazazi wanaowaongoza.",
    "Masoko kwa ushawishi (influencer marketing) maana yake chapa inakulipa, kwa pesa au kwa bidhaa, ili uonyeshe bidhaa yake kwa wafuasi wako. Utajifunza jinsi ya kupata chapa zinazokufaa, kuonyesha thamani yako kwa media kit, kutuma ombi kwa njia ya kitaalamu, kutambua mikataba mibaya, na kubaki mwaminifu na ndani ya kanuni.",
    "Kanuni za NIL ni tofauti kwa shule za sekondari, kwa ngazi za vyuo na kwa majimbo, na zinabadilika. Kozi hii ni ya Marekani: inafundisha ujuzi na inakuonyesha kurasa rasmi. Kila mara thibitisha kanuni za sasa na ofisi ya kufuata kanuni (compliance office) ya shule yako au chama cha michezo cha shule za sekondari cha jimbo lako kabla ya kusaini chochote. Huu si ushauri wa kisheria wala wa kodi."
  ],
  finalTask: "Tengeneza media kit ya ukurasa mmoja, chagua chapa moja inayolingana na maadili yako na wafuasi wako, andika ujumbe wa ombi kwa AI kisha uurekebishe kwa sauti yako, na andika orodha ya dalili za hatari na kanuni utakazokagua kabla ya kusaini (pamoja na nani shuleni kwako au katika jimbo lako utamuuliza). Ukipata mkataba, uchapishe pamoja na tangazo wazi ndani ya chapisho lenyewe.",
  // ---- ADDIE: Uchambuzi ----
  analysis: {
    learners: "Wanamichezo wa shule za sekondari na vyuo nchini Marekani wanaotaka kufanya kazi na chapa kwenye mitandao ya kijamii kupitia mikataba ya jina, picha na sura (NIL), na makocha na wazazi wanaowaongoza.",
    startingPoint: "Wana akaunti za mitandao ya kijamii na wafuasi kiasi, na wamesikia kuhusu mikataba ya NIL. Wachache wanajua kanuni za NCAA au za jimbo, wana media kit, wamewahi kutuma ombi kwa chapa, au wanaweza kutambua dalili za hatari katika mkataba.",
    gap: "Wanamichezo wanaweza kupoteza haki ya kushiriki michezo, pesa au haki juu ya picha yao wenyewe kwa kusaini mikataba mibaya, kuvunja kanuni za shule au jimbo, au kuacha kutangaza machapisho yaliyolipiwa. Kujua kanuni, kuonyesha namba halisi, na kukagua mikataba pamoja na mtu mzima wanayemwamini kunawasaidia kupata kipato kwa usalama na kwa uaminifu.",
    constraints: [
      "Lugha rahisi kwa kiwango cha kusoma cha karibu darasa la 8",
      "Simu yenye mitandao ya kijamii, msaidizi wa AI wa bure na Canva",
      "Kama dakika 60 kwa jumla",
      "Kanuni za NIL za NCAA, NAIA, vyama vya majimbo na shule zinatofautiana na zinabadilika; uliza ofisi ya kufuata kanuni au mkurugenzi wa michezo",
      "Wanamichezo walio chini ya miaka 18 wanamhusisha mzazi au mlezi; haya ni mafunzo, si ushauri wa kisheria wala wa kodi"
    ],
    prerequisites: "Hakuna. Kozi \"Kujenga Chapa ya Mwanamichezo kwenye Mitandao ya Kijamii\" ni hatua nzuri ya kwanza."
  },
  // ---- ADDIE: Usanifu (malengo: hali, kitendo kinachoonekana, kiwango) ----
  objectives: [
    { id: "O1", condition: "Ukizingatia ngazi ya mchezo wako", action: "kueleza mkataba wa NIL ni nini na kanuni zipi zinakuhusu, pamoja na yasiyoruhusiwa", standard: "ukitaja nani wa kumuuliza shuleni kwako au katika jimbo lako, na kwamba kipato cha NIL kwa kawaida hutozwa kodi" },
    { id: "O2", condition: "Ukipewa bidhaa na biashara za karibu unazotumia", action: "kuorodhesha chapa tano zinazolingana na maadili yako na wafuasi wako", standard: "huku kila aina ya bidhaa iliyozuiliwa na shule yako au jimbo lako ikiwa imefutwa" },
    { id: "O3", condition: "Ukitumia takwimu za app yako (insights) na kiolezo cha Canva", action: "kutengeneza media kit ya ukurasa mmoja yenye maelezo mafupi kukuhusu, akaunti zako, namba halisi, wafuasi wako, unachotoa na njia salama ya mawasiliano", standard: "kila namba ikiwa halisi, ya sasa na yenye tarehe" },
    { id: "O4", condition: "Ukitumia rasimu ya AI", action: "kuandika ujumbe wa ombi kwa mawasiliano rasmi ya chapa moja", standard: "chini ya maneno 150, kwa sauti yako, ukiwa na sababu mahususi ya kweli, wazo moja na media kit yako, na mzazi akihusishwa kama uko chini ya miaka 18" },
    { id: "O5", condition: "Ukipewa mkataba ulioandikwa", action: "kuukagua kutafuta dalili za hatari pamoja na mtu mzima unayemwamini kabla ya kusaini", standard: "ukikagua kazi, malipo, muda wa mkataba na jinsi ya kuumaliza, na ukikataa kusaini kwa shinikizo" },
    { id: "O6", condition: "Kwa chapisho lolote ambalo chapa imekupa kitu", action: "kuandika chapisho lililolipiwa lenye tangazo wazi karibu na mwanzo", standard: "likisemwa na kuonyeshwa kwenye video, bila kufichwa katika hashtag au kwenye bio yako, na bila madai usiyoweza kuthibitisha" }
  ],
  chapters: [
    {
      name: "Sura 1: Kujiandaa kufanya kazi na chapa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Jinsi mikataba ya ushawishi ya wanamichezo inavyofanya kazi",
          minutes: 5,
          goal: "Eleza mkataba wa NIL ni nini na kinachoruhusiwa kwa wanamichezo wa vyuo.",
          text: [
            "Mkataba wa NIL unakulipa, kwa pesa, bidhaa au huduma, ili biashara itumie jina lako, picha yako au sura yako: machapisho ya mitandao ya kijamii, kuhudhuria matukio, kambi za mafunzo, kusaini sahihi (autographs) au matangazo ya biashara.",
            "Kwa wanamichezo wa vyuo walio chini ya NCAA (chama kinachosimamia michezo ya vyuo nchini Marekani), ukurasa wa NIL wa NCAA unasema mikataba inapaswa kukulipa kwa matumizi ya NIL yako, iwe na lengo halisi la kibiashara, na ilipe kiasi kinachokubalika. Pay-for-play, yaani malipo ili ujiunge au uchezee shule fulani au malipo yanayotegemea matokeo yako uwanjani, hayaruhusiwi. Wakati wa kuandika, wanamichezo wa Division I lazima waripoti mikataba na watu au makampuni ya nje ya $600 au zaidi kupitia NIL Go, inayoendeshwa na College Sports Commission; uliza ofisi yako ya kufuata kanuni kuhusu maelezo ya sasa.",
            "Kanuni za NIL za shule za sekondari zinawekwa na chama cha michezo cha shule za sekondari cha kila jimbo na sheria ya jimbo; baadhi ya majimbo yanaruhusu kwa mipaka. Kagua kanuni za jimbo lako kabla ya mkataba wowote. Kipato cha NIL kwa kawaida hutozwa kodi, kwa hiyo weka kumbukumbu na zungumza na mtaalamu wa kodi."
          ],
          steps: ["Tambua ngazi yako: sekondari, division ya NCAA, NAIA, chuo cha jamii (junior college) au mchezaji wa kulipwa.", "Soma sera ya NIL ya shule yako au kanuni za chama cha jimbo lako.", "Zungumza na ofisi yako ya kufuata kanuni au mkurugenzi wa michezo.", "Weka kumbukumbu ya kila mkataba na kila malipo."],
          words: [["NIL", "jina, picha na sura (name, image and likeness): kupata kipato kutokana na jina lako, picha yako au jina lako binafsi kama chapa."], ["Pay-for-play", "malipo ili ujiunge au ushindane kwa ajili ya shule, au malipo yanayotegemea matokeo ya michezo; hayaruhusiwi chini ya kanuni za NCAA."], ["Ofisi ya kufuata kanuni", "ofisi ya shule (compliance office) inayoeleza na kukagua kanuni za michezo."]],
          slides: [
            { title: "Mkataba wa NIL", bullets: ["Malipo kwa pesa, bidhaa au huduma", "Machapisho, matukio, kambi, sahihi (autographs)"] },
            { title: "Msingi wa NCAA (kagua kanuni za sasa)", bullets: ["Lengo halisi la kibiashara, malipo yanayokubalika", "Hakuna pay-for-play", "DI: ripoti mikataba ya $600+ kupitia NIL Go"] },
            { title: "Shule za sekondari na kodi", bullets: ["Kanuni zinawekwa na chama cha jimbo lako", "Kipato cha NIL kwa kawaida hutozwa kodi", "Weka kumbukumbu; uliza mtaalamu wa kodi"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Student-Athlete NIL Deals", url: "https://www.collegesportscommission.org/nil/" },
            { name: "IRS: Self-Employed Individuals Tax Center", url: "https://www.irs.gov/businesses/small-businesses-self-employed/self-employed-individuals-tax-center" }
          ],
          tryIt: "Tafuta ukurasa wa NIL wa shule yako au wa chama cha jimbo lako na uandike kanuni tatu zinazokuhusu na nani ungemuuliza ukiwa na maswali.",
          youCanNow: "kueleza jinsi mikataba ya NIL ya wanamichezo inavyofanya kazi na kupata kanuni zinazokuhusu.",
          quickCheck: [
            { objective: "O1", q: "Mkataba wa NIL unaweza kukulipa kwa nini?", options: ["Pesa taslimu tu", "Alama za shule tu", "Tiketi za mechi tu", "Pesa, bidhaa au huduma"], answer: 3, why: "Mikataba ya NIL inaweza kulipa kwa pesa, bidhaa au huduma kwa matumizi ya jina, picha au sura yako." },
            { objective: "O1", q: "Unapata malipo yako ya kwanza ya NIL. Unafanya nini?", options: ["Unaweka kumbukumbu yake na kuzungumza na mtaalamu wa kodi", "Unayatumia na kuyasahau", "Unaificha shule yako", "Unayarudisha"], answer: 0, why: "Kipato cha NIL kwa kawaida hutozwa kodi, kwa hiyo weka kumbukumbu na pata ushauri wa kodi." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kupata chapa zinazokufaa",
          minutes: 5,
          goal: "Tengeneza orodha ya chapa tano zinazolingana na maadili yako na wafuasi wako.",
          text: [
            "Mikataba bora ni na chapa ambazo tayari unazitumia na unaziamini, na ambazo wafuasi wako wanazijali. Gym ya karibu, kinywaji cha michezo unachokunywa kweli, app ya mazoezi unayotumia, au mgahawa wa familia karibu na shule yako.",
            "Anza karibu nawe. Biashara za karibu mara nyingi ziko tayari zaidi kufanya kazi na wanamichezo vijana, na wafuasi wako wa eneo lako ni muhimu kwao. Chapa kubwa mara nyingi hufanya kazi kupitia mawakala au masoko ya NIL ambayo shule yako huenda inatumia; uliza ofisi ya kufuata kanuni ni yapi yaliyoidhinishwa.",
            "Epuka chapa zinazopingana na maadili yako, kanuni za shule yako au umri wako. Shule na majimbo mengi yanazuia aina za bidhaa kama pombe, tumbaku, sigara za kielektroniki (vaping), kamari na bidhaa za watu wazima."
          ],
          steps: ["Orodhesha bidhaa na biashara za karibu unazotumia kweli.", "Weka alama kwa zile ambazo wafuasi wako wanazijali.", "Futa aina yoyote ya bidhaa ambayo shule yako au jimbo lako linazuia.", "Baki na tano bora."],
          words: [["Kufaana na chapa", "jinsi chapa inavyolingana na maadili yako, sura yako mbele ya watu na wafuasi wako."], ["Soko la NIL", "tovuti au app inayowaunganisha wanamichezo na chapa kwa ajili ya mikataba."]],
          slides: [
            { title: "Zinazofaa zaidi", bullets: ["Chapa unazotumia tayari na kuziamini", "Wafuasi wako wanazijali"] },
            { title: "Anza karibu nawe", bullets: ["Gym, migahawa, maduka karibu nawe", "Uliza compliance kuhusu masoko yaliyoidhinishwa"] },
            { title: "Epuka", bullets: ["Chapa zinazopingana na maadili yako", "Aina zilizozuiliwa: pombe, vaping, kamari"] }
          ],
          tryIt: "Andika orodha ya bidhaa au biashara kumi unazotumia. Muulize msaidizi wa AI zipi zinafaa zaidi wafuasi kama wako, kisha chagua tano bora wewe mwenyewe.",
          youCanNow: "kuchagua chapa zinazolingana na maadili yako, wafuasi wako na kanuni.",
          quickCheck: [
            { objective: "O2", q: "Kwa nini uanze na biashara za karibu?", options: ["Hazikatai kamwe", "Mara nyingi ziko tayari kwa wanamichezo vijana na zinawajali wafuasi wako wa eneo lako", "Zinalipa zaidi", "Hazihitaji mikataba"], answer: 1, why: "Biashara za karibu mara nyingi ziko tayari zaidi kwa wanamichezo vijana na zinathamini wafuasi wa eneo lao." },
            { objective: "O2", q: "Duka la vape linakupa mkataba. Unafanya nini?", options: ["Unakubali kama malipo ni mazuri", "Unaomba pesa zaidi", "Unaifuta; shule na majimbo mengi yanazuia aina hiyo", "Unachapisha kuihusu bila mkataba"], answer: 2, why: "Epuka aina za bidhaa ambazo shule yako au jimbo lako linazuia, kama vaping." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Kutengeneza media kit yako",
          minutes: 6,
          goal: "Tengeneza media kit ya ukurasa mmoja inayoonyesha chapa thamani yako.",
          text: [
            "Media kit ni muhtasari wa ukurasa mmoja ambao chapa huutumia kuamua kama unawafaa. Unaonyesha wewe ni nani, wafuasi wako ni akina nani, na unachoweza kuwafanyia.",
            "Weka ndani: picha nzuri na maelezo mafupi kukuhusu (bio); mchezo wako, timu yako na mafanikio yako; akaunti zako pamoja na idadi ya wafuasi na wastani wa ushiriki (likes, maoni, kushirikiwa au kutazamwa kwa kila chapisho) kutoka kwenye takwimu za app yako (insights); wafuasi wako ni akina nani (mahali, kundi la umri kama app inaonyesha); ushirikiano uliopita; unachotoa (machapisho, video, kuhudhuria matukio, kambi); na mawasiliano, ukitumia barua pepe ya michezo au mzazi au wakala kwa walio chini ya miaka 18.",
            "Tumia kiolezo cha Canva kuisanifu na msaidizi wa AI kufanya maneno yawe mafupi na wazi. Kila namba lazima iwe halisi na ya sasa. Usinunue wafuasi; chapa hukagua ushiriki."
          ],
          steps: ["Kusanya namba zako halisi kutoka kwenye takwimu za app yako.", "Andika bio ya sentensi mbili.", "Orodhesha unachotoa.", "Isanifu katika kiolezo cha media kit cha Canva.", "Kagua kila namba; weka tarehe."],
          words: [["Media kit", "muhtasari wa ukurasa mmoja kuhusu wewe ni nani, wafuasi wako na unachotoa kwa chapa."], ["Kiwango cha ushiriki", "kiasi ambacho watu wanajihusisha na machapisho yako (engagement rate) ukilinganisha na wangapi wanakufuata au kuyaona."]],
          slides: [
            { title: "Media kit inaonyesha nini", bullets: ["Wewe ni nani", "Wafuasi wako ni akina nani", "Unachoweza kuifanyia chapa"] },
            { title: "Weka ndani", bullets: ["Picha, bio, mchezo na mafanikio", "Akaunti, wafuasi, wastani wa ushiriki", "Unachotoa na mawasiliano salama"] },
            { title: "Uaminifu", bullets: ["Namba halisi na za sasa", "Usinunue wafuasi kamwe", "Chapa hukagua ushiriki"] }
          ],
          tryIt: "Tengeneza media kit yako ya ukurasa mmoja katika Canva ukitumia namba zako halisi. Muombe msaidizi wa AI afanye bio yako iwe fupi na wazi zaidi.",
          youCanNow: "kutengeneza media kit ya ukurasa mmoja iliyo ya kweli.",
          quickCheck: [
            { objective: "O3", q: "Ushiriki unaonyesha nini katika media kit yako?", options: ["Kiasi ambacho watu wanajihusisha na machapisho yako", "Unajua chapa ngapi", "Wastani wa alama zako shuleni", "Namba ya jezi yako"], answer: 0, why: "Ushiriki ni likes, maoni, kushirikiwa au kutazamwa kwa kila chapisho." },
            { objective: "O3", q: "Idadi ya wafuasi wako imebadilika tangu ulipotengeneza media kit mwezi uliopita. Unafanya nini?", options: ["Unaacha namba ya zamani", "Unaiongeza sana", "Unanunua wafuasi ili ilingane", "Unaisasisha kwa namba halisi ya sasa na tarehe"], answer: 3, why: "Kila namba lazima iwe halisi na ya sasa." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 1: Kujiandaa kufanya kazi na chapa",
        questions: [
          { objective: "O1", q: "NIL inasimama kwa nini?", options: ["National Influencer League", "New Income Law", "Jina, picha na sura (name, image and likeness)", "No Ink Limits"], answer: 2, why: "NIL ni kupata kipato kutokana na jina, picha na sura yako." },
          { objective: "O1", q: "Chini ya kanuni za NCAA, kipi HAKIRUHUSIWI?", options: ["Kulipwa ili ujiunge na shule fulani", "Machapisho ya kulipwa kwa duka la karibu", "Kuendesha kambi ya kulipia", "Kusaini sahihi kwa malipo"], answer: 0, why: "Huo ni pay-for-play, ambao kanuni za NCAA haziruhusu." },
          { objective: "O1", q: "Mwanamichezo wa sekondari anataka mkataba wa NIL. Kanuni za nani zinahusika?", options: ["Za chapa tu", "Za mtu yeyote", "Za ligi ya kulipwa", "Za chama cha michezo cha shule za sekondari cha jimbo lake na shule yake"], answer: 3, why: "Kanuni za NIL za shule za sekondari zinawekwa jimbo kwa jimbo." },
          { objective: "O2", q: "Chapa ipi huenda ndiyo inafaa zaidi kuanza nayo?", options: ["Kampuni ya vape", "Gym ya karibu unayofanyia mazoezi na kuiamini", "Chapa yoyote ambayo hujawahi kuitumia", "App ya kamari"], answer: 1, why: "Kuitumia kweli na wafuasi wa eneo lako ndivyo vinavyofanya ifae zaidi." },
          { objective: "O3", q: "Kila namba katika media kit yako lazima iweje?", options: ["Iliyoongezwa sana", "Halisi na ya sasa", "Ya kubahatisha", "Kutoka kwenye akaunti ya rafiki"], answer: 1, why: "Chapa hukagua, na uaminifu ndio kila kitu." }
        ]
      }
    },
    {
      name: "Sura 2: Maombi, mikataba na tangazo wazi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Kutuma ombi kwa chapa",
          minutes: 5,
          goal: "Andika ujumbe mfupi wa ombi wa kitaalamu kwa chapa moja.",
          text: [
            "Ombi (pitch) ni ujumbe mfupi unaoomba kufanya kazi pamoja. Ulitume kutoka barua pepe yako ya kitaalamu au kwa mawasiliano rasmi ya chapa, si kwa ujumbe wa moja kwa moja (DM) kwa wafanyakazi ovyo.",
            "Ombi zuri: wewe ni nani kwa mstari mmoja; kwa nini unaipenda chapa hii (kitu mahususi na cha kweli); wafuasi wako na namba moja; wazo moja lililo wazi (\"video tatu za mazoezi zikitumia app yenu ya kupona\"); na media kit yako imeambatishwa. Liwe chini ya maneno 150.",
            "Muombe msaidizi wa AI aandike rasimu, kisha uiandike upya kwa sauti yako. Kama uko chini ya miaka 18, mhusishe mzazi au mlezi. Fuatilia mara moja baada ya wiki moja au mbili. Chapa nyingi zitakataa au hazitajibu; hilo ni jambo la kawaida."
          ],
          steps: ["Tafuta mawasiliano rasmi ya chapa.", "Muombe AI ombi fupi la chini ya maneno 150.", "Ongeza sababu mahususi ya kweli kwa nini unaipenda chapa.", "Ambatisha media kit yako.", "Fuatilia mara moja baada ya wiki moja hadi mbili."],
          words: [["Ombi (pitch)", "ujumbe mfupi unaopendekeza kufanya kazi pamoja."], ["Kufuatilia", "ukumbusho mmoja wa adabu kama hujajibiwa."]],
          slides: [
            { title: "Pa kulituma", bullets: ["Barua pepe yako ya kitaalamu", "Mawasiliano rasmi ya chapa"] },
            { title: "Ombi zuri", bullets: ["Wewe ni nani", "Kwa nini unaipenda chapa (kweli)", "Wafuasi wako na namba moja", "Wazo moja wazi + media kit"] },
            { title: "Baada ya hapo", bullets: ["Chini ya miaka 18: mzazi ahusishwe", "Fuatilia mara moja", "Kukosa jibu ni kawaida"] }
          ],
          tryIt: "Chagua chapa moja kati ya tano zako. Tumia AI kuandika rasimu ya ombi, liandike upya kwa sauti yako, na mwombe kocha au mzazi alisome kabla hujalituma.",
          youCanNow: "kuandika na kutuma ombi fupi la kitaalamu kwa chapa.",
          quickCheck: [
            { objective: "O4", q: "Unapaswa kutuma ombi kwa chapa wapi?", options: ["DM ovyo kwa wafanyakazi", "Mawasiliano rasmi ya chapa", "Kwa mshindani wa chapa", "Kwenye maoni ya hadharani"], answer: 1, why: "Litume kutoka barua pepe yako ya kitaalamu kwa mawasiliano rasmi ya chapa." },
            { objective: "O4", q: "Chapa haijajibu ombi lako baada ya wiki mbili. Unafanya nini?", options: ["Unawatumia ujumbe kila siku", "Unachapisha kuwahusu kwa hasira", "Unafuatilia mara moja, kisha unaendelea mbele kama hakuna jibu", "Unalituma kwa kila mfanyakazi"], answer: 2, why: "Fuatilia mara moja; chapa nyingi zitakataa au hazitajibu, na hilo ni kawaida." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Kusoma mkataba: dalili za hatari",
          minutes: 6,
          goal: "Tambua dalili za hatari katika mkataba kabla ya kusaini.",
          text: [
            "Kabla hujakubali chochote, hakikisha kimeandikwa na ukisome pamoja na mtu mzima unayemwamini. Kwa mikataba mikubwa, wakili, wakala au msaada wa NIL wa shule yako unaweza kusaidia. Usisaini kwa shinikizo.",
            "Dalili za hatari: wanakutaka ulipe pesa kwanza; wanataka nywila zako au misimbo ya kuingia; mkataba unadumu muda mrefu sana au unasema wanamiliki jina lako au picha yako milele; huwezi kabisa kuchapisha kwa chapa nyingine (upekee, exclusivity) bila malipo ya haki; malipo hayako wazi au ni \"kujulikana\" (exposure) tu; wanataka uchapishe mambo yasiyo ya kweli; au chochote ambacho kanuni za shule yako au jimbo lako haziruhusu, kama kutumia nembo za shule bila ruhusa.",
            "Kagua unachopaswa kufanya (machapisho mangapi, lini, nini), utalipwa vipi na lini, mkataba unadumu muda gani, na jinsi ya kuumaliza. Wanamichezo wa vyuo: kagua kama lazima uripotiwe na uuripoti kwa wakati."
          ],
          steps: ["Hakikisha mkataba umeandikwa.", "Usome pamoja na mtu mzima unayemwamini au mshauri.", "Kagua kazi, malipo, muda wa mkataba na jinsi ya kuumaliza.", "Tafuta dalili za hatari.", "Kagua kanuni za shule yako na jimbo lako na kama unahitaji kuripoti.", "Usisaini kamwe kwa shinikizo."],
          words: [["Mkataba", "makubaliano yaliyoandikwa ambayo pande zote mbili lazima ziyafuate."], ["Upekee (exclusivity)", "kanuni kwamba huwezi kufanya kazi na chapa zinazoshindana."], ["Haki za matumizi", "jinsi na kwa muda gani chapa inaweza kutumia picha zako, video zako na jina lako."]],
          slides: [
            { title: "Kabla ya kusaini", bullets: ["Hakikisha umeandikwa", "Usome pamoja na mtu mzima unayemwamini", "Usisaini kamwe kwa shinikizo"] },
            { title: "Dalili za hatari", bullets: ["Ulipe kwanza, au wanataka nywila", "Wanamiliki picha yako milele", "Malipo si wazi au \"exposure\" tu", "Wanakutaka useme yasiyo ya kweli"] },
            { title: "Kagua", bullets: ["Kazi, malipo, muda, jinsi ya kuumaliza", "Kanuni za shule na jimbo", "Muda wa mwisho wa kuripoti"] }
          ],
          sources: [
            { name: "NCAA: Name, Image and Likeness", url: "https://www.ncaa.org/student-athletes/name-image-likeness/" },
            { name: "College Sports Commission: Student-Athlete NIL Deals", url: "https://www.collegesportscommission.org/nil/" }
          ],
          tryIt: "Muombe msaidizi wa AI aandike mkataba mfupi wa mfano wa NIL wenye dalili tatu za hatari zilizofichwa (ni zoezi). Zitafute, kisha andika orodha yako mwenyewe ya dalili za hatari.",
          youCanNow: "kutambua dalili za hatari katika mkataba na kujua utausoma na nani kabla ya kusaini.",
          quickCheck: [
            { objective: "O5", q: "Ipi ni dalili ya hatari katika mkataba?", options: ["Wanataka nywila zako au misimbo ya kuingia", "Malipo na tarehe zilizo wazi", "Njia ya kumaliza mkataba", "Idadi maalum ya machapisho"], answer: 0, why: "Usimpe chapa nywila zako wala misimbo ya kuingia kamwe." },
            { objective: "O5", q: "Chapa inasema lazima usaini leo au utaukosa mkataba. Unafanya nini?", options: ["Unasaini sasa", "Unasaini na kuusoma baadaye", "Unamwomba rafiki asaini kwa niaba yako", "Husaini kwa shinikizo; kwanza unausoma pamoja na mtu mzima unayemwamini"], answer: 3, why: "Usisaini kamwe kwa shinikizo; hakikisha umeandikwa na usome pamoja na mtu mzima." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kutangaza wazi machapisho yaliyolipiwa kwa njia sahihi",
          minutes: 5,
          goal: "Andika chapisho lililolipiwa lenye tangazo wazi na sahihi.",
          text: [
            "FTC, shirika la serikali ya Marekani linalosimamia sheria za matangazo ya biashara, linasema lazima utangaze uhusiano wowote muhimu na chapa (material connection), yaani malipo, bidhaa za bure au za punguzo, au uhusiano wa kifamilia au wa kikazi, kila unapoitaja chapa.",
            "Lifanye liwe wazi na lisiloweza kupitwa: liweke pamoja na chapisho, karibu na mwanzo, kwa maneno rahisi kama \"Ad\", \"Sponsored\" au \"Asante [chapa] kwa viatu vya bure\". Kwenye video, lisema na lionyeshe kwenye skrini; kwenye matangazo ya moja kwa moja (live), lirudie. Kwenye picha na stories, liweke juu ya picha. Usilifiche katika rundo la hashtag, kwenye bio yako tu, au nyuma ya \"more\". Maneno yasiyo wazi kama \"sp\", \"collab\" au \"ambassador\" peke yake hayako wazi.",
            "Sema yaliyo ya kweli tu: usitangaze bidhaa ambayo hujaijaribu, na kamwe usitoe madai ya kiafya ambayo chapa haiwezi kuthibitisha, kama \"kinywaji hiki kinaponya misuli kukaza (cramps)\"."
          ],
          steps: ["Amua: je, kuna malipo yoyote, bidhaa ya bure au uhusiano? Basi tangaza.", "Weka \"Ad\" au shukrani iliyo wazi karibu na mwanzo wa maelezo ya chapisho.", "Kwenye video: lisema na lionyeshe.", "Tumia pia lebo ya app ya ushirikiano uliolipiwa (paid partnership), kama inayo.", "Kagua kwamba kila dai ni la kweli."],
          words: [["Uhusiano muhimu", "uhusiano na chapa, kama malipo, bidhaa za bure au familia, ambao watu huenda hawautarajii (material connection)."], ["Chapisho lililolipiwa", "chapisho ambalo chapa ililipia au ilikupa kitu kwa ajili yake (sponsored post)."]],
          slides: [
            { title: "Wakati wa kutangaza", bullets: ["Malipo, bidhaa za bure au za punguzo", "Uhusiano wa familia au kazi na chapa"] },
            { title: "Jinsi gani", bullets: ["\"Ad\" au \"Asante [chapa] kwa...\" karibu na mwanzo", "Video: lisema na lionyeshe", "Lisifichwe katika hashtag au bio"] },
            { title: "Baki mwaminifu", bullets: ["Bidhaa ulizojaribu tu", "Hakuna madai ya kiafya wasiyoweza kuthibitisha"] }
          ],
          sources: [
            { name: "FTC: Disclosures 101 for Social Media Influencers", url: "https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers" },
            { name: "FTC: Endorsement Guides, What People Are Asking", url: "https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides" }
          ],
          tryIt: "Kazi ya mwisho: maliza media kit yako, ombi lako kwa chapa na orodha yako ya dalili za hatari (pamoja na majina ya utakaowauliza shuleni kwako au katika jimbo lako). Kisha andika maelezo ya mazoezi ya chapisho lililolipiwa yenye tangazo sahihi.",
          youCanNow: "kuchapisha maudhui yaliyolipiwa yenye tangazo wazi na sahihi na kubaki ndani ya kanuni za NIL.",
          quickCheck: [
            { objective: "O6", q: "Kipi kinahesabika kama uhusiano muhimu unaopaswa kutangaza?", options: ["Bidhaa uliyoinunua mwenyewe", "Bidhaa ya bure au ya punguzo kutoka kwa chapa", "Chapa ambayo hujawahi kuisikia", "Timu unayoipenda"], answer: 1, why: "Malipo, bidhaa za bure au za punguzo, au uhusiano wa kifamilia au wa kikazi lazima vitangazwe." },
            { objective: "O6", q: "Unafanya tangazo la moja kwa moja (live) lililolipiwa. Unatangazaje?", options: ["Mara moja kwenye bio yako", "Katika hashtag tu", "Unasema \"collab\" mara moja", "Unatangaza wazi na kurudia wakati wa live"], answer: 3, why: "Katika matangazo ya moja kwa moja, rudia tangazo." }
          ]
        }
      ],
      check: {
        title: "Jaribio la maarifa 2: Maombi, mikataba na tangazo wazi",
        questions: [
          { objective: "O4", q: "Ombi linapaswa kuwa na nini?", options: ["Insha ya kurasa 3", "Nywila yako", "Kudai pesa kwanza", "Wewe ni nani, kwa nini unaipenda chapa, wafuasi wako, wazo moja na media kit yako"], answer: 3, why: "Fupi, mahususi na la kitaalamu ndilo hujibiwa." },
          { objective: "O5", q: "\"Chapa\" inakuomba ulipe ada ili ujiunge na programu yao ya wanamichezo. Hii ni:", options: ["Dalili ya hatari", "Kawaida", "Inatakiwa na NCAA", "Mkataba mzuri sana"], answer: 0, why: "Chapa halisi zinakulipa wewe, si wewe kuzilipa." },
          { objective: "O5", q: "Mkataba unasema chapa inamiliki picha yako milele. Unapaswa:", options: ["Kusaini haraka", "Kupuuza", "Kuichukulia kama dalili ya hatari na kupata ushauri", "Kuomba \"milele\" zaidi"], answer: 2, why: "Haki za matumizi za milele ni dalili kubwa ya hatari." },
          { objective: "O6", q: "Tangazo lipi liko wazi?", options: ["\"#sp\" mwishoni", "\"collab\"", "Kwenye bio yako tu", "\"Ad\" karibu na mwanzo wa maelezo ya chapisho"], answer: 3, why: "FTC inasema liwe wazi na lisiloweza kupitwa." },
          { objective: "O6", q: "Katika video iliyolipiwa, tangazo linapaswa kuwa:", options: ["Katika maelezo ya chini tu", "Lisemwe na lionyeshwe ndani ya video", "Katika maoni", "Liachwe"], answer: 1, why: "Matangazo ya video yanapaswa kuwa ndani ya video yenyewe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Mtihani wa mwisho: Masoko kwa Ushawishi kwa Wanamichezo",
    questions: [
      { objective: "O1", q: "Masoko kwa ushawishi maana yake ni:", options: ["Kununua wafuasi", "Kufundisha timu", "Chapa inakulipa uonyeshe bidhaa yake kwa wafuasi wako", "Kuuza tiketi"], answer: 2, why: "Chapa hulipia watu unaowafikia na imani yao kwako." },
      { objective: "O1", q: "Mikataba ya NIL ya NCAA inapaswa kuwa na:", options: ["Lengo halisi la kibiashara na malipo yanayokubalika", "Hakuna kazi inayohitajika", "Malipo yanayotegemea pointi ulizofunga", "Malipo ili uchague shule"], answer: 0, why: "Hivyo ndivyo NCAA inavyoeleza mikataba inayoruhusiwa." },
      { objective: "O1", q: "Malipo yanayotegemea matokeo yako ya michezo ni:", options: ["Pay-for-play, hayaruhusiwi chini ya kanuni za NCAA", "Yanahimizwa", "Yanatakiwa", "Fomu ya kodi"], answer: 0, why: "Kanuni za NCAA zinakataza pay-for-play." },
      { objective: "O1", q: "Wanamichezo wa Division I wanaripoti wapi mikataba ya NIL na watu au makampuni ya nje (wakati wa kuandika)?", options: ["Kwenye bio yao ya mitandao", "Katika kikundi cha gumzo", "NIL Go, inayoendeshwa na College Sports Commission", "Popote pale si lazima"], answer: 2, why: "Thibitisha maelezo ya sasa na ofisi yako ya kufuata kanuni." },
      { objective: "O1", q: "Kipato cha NIL kwa kawaida:", options: ["Hakitozwi kodi kamwe", "Hutozwa kodi", "Ni haramu", "Hulipwa kwa shule"], answer: 1, why: "NCAA inasema kipato cha NIL kwa kawaida hutozwa kodi." },
      { objective: "O1", q: "Nani anaweka kanuni za NIL za shule za sekondari?", options: ["NFL", "Chapa", "Hakuna mtu", "Chama cha shule za sekondari cha kila jimbo na sheria ya jimbo"], answer: 3, why: "Zinatofautiana jimbo kwa jimbo." },
      { objective: "O2", q: "Chapa bora za kuanza nazo mara nyingi ni:", options: ["Chapa ambazo hujawahi kuzisikia", "Apps za kamari", "Biashara za karibu unazotumia na kuziamini", "Maduka ya vape"], answer: 2, why: "Kufaana na eneo lako na kuzitumia kweli hufanya mikataba imara." },
      { objective: "O2", q: "Aina ipi ya bidhaa shule na majimbo mengi yanazuia?", options: ["Mikate ya maduka ya karibu", "Maduka ya vitabu", "Viatu vya kukimbia", "Kamari na pombe"], answer: 3, why: "Aina zilizozuiliwa ni za kawaida katika kanuni za NIL." },
      { objective: "O3", q: "Media kit ni:", options: ["Muhtasari wa ukurasa mmoja kukuhusu wewe, wafuasi wako na unachotoa", "Sanduku la huduma ya kwanza", "Mkoba wa kamera", "Mkataba"], answer: 0, why: "Chapa huitumia kuamua kama unawafaa." },
      { objective: "O3", q: "Kiwango cha ushiriki kinaonyesha:", options: ["Urefu wako", "Kiasi ambacho watu wanajihusisha ukilinganisha na wafuasi au waliotazama", "Wastani wa alama zako shuleni", "Namba ya jezi yako"], answer: 1, why: "Chapa zinajali ushiriki kuliko idadi tu ya wafuasi." },
      { objective: "O3", q: "Kununua wafuasi ni:", options: ["Masoko ya busara", "Inatakiwa", "Si uaminifu na chapa zinaweza kugundua", "Bure"], answer: 2, why: "Wafuasi bandia huharibu imani." },
      { objective: "O4", q: "Unapaswa kutuma ombi wapi?", options: ["Mawasiliano rasmi ya chapa", "DM binafsi za wafanyakazi ovyo", "Kwa washindani wao", "Popote pale si lazima"], answer: 0, why: "Mawasiliano rasmi ni ya kitaalamu na salama." },
      { objective: "O4", q: "Ombi linapaswa kuwa kama:", options: ["Kurasa tano", "Emoji moja", "Simu ya video usiku wa manane", "Chini ya maneno 150"], answer: 3, why: "Maombi mafupi husomwa." },
      { objective: "O4", q: "Kama uko chini ya miaka 18 unapotuma ombi, unapaswa:", options: ["Kuficha umri wako", "Kumhusisha mzazi au mlezi", "Kudanganya kuhusu umri wako", "Kutumia jina bandia"], answer: 1, why: "Watu wazima husaidia kuwalinda watoto katika mikataba." },
      { objective: "O5", q: "Kabla ya kusaini mkataba unapaswa:", options: ["Kusaini papo hapo", "Kuhakikisha umeandikwa na kuusoma pamoja na mtu mzima unayemwamini", "Kutoa nywila yako", "Kulipa ada"], answer: 1, why: "Masharti yaliyoandikwa yanakulinda." },
      { objective: "O5", q: "Upekee (exclusivity) maana yake:", options: ["Unalipwa zaidi", "Mkataba ni mfupi", "Unamiliki chapa", "Huwezi kufanya kazi na chapa zinazoshindana"], answer: 3, why: "Unazuia mikataba mingine, kwa hiyo unapaswa kuwa wa haki." },
      { objective: "O5", q: "Mkataba unalipa kwa \"kujulikana\" (exposure) tu. Hii ni:", options: ["Dalili ya hatari", "Malipo mazuri sana", "Inatakiwa", "Kanuni ya kodi"], answer: 0, why: "Malipo yasiyo wazi ni ishara ya onyo." },
      { objective: "O6", q: "Chapa imekupa viatu vya bure. Je, unahitaji kutangaza?", options: ["Hapana, pesa taslimu tu ndiyo inahesabika", "Kama tu unavipenda", "Ndiyo, bidhaa za bure zinahesabika", "Kwenye TikTok tu"], answer: 2, why: "FTC inasema bidhaa za bure ni uhusiano muhimu." },
      { objective: "O6", q: "Tangazo HALIPASWI kuwa wapi peke yake?", options: ["Karibu na mwanzo wa maelezo ya chapisho", "Juu ya picha katika story", "Likisemwa ndani ya video", "Limefichwa katika hashtag au kwenye bio yako"], answer: 3, why: "Matangazo lazima yawe yasiyoweza kupitwa." },
      { objective: "O6", q: "Chapa inakuomba useme kinywaji chake kinaponya misuli kukaza. Wewe:", options: ["Unasema", "Unakataa; usitoe madai ya kiafya wasiyoweza kuthibitisha", "Unasema kwa sauti zaidi", "Unasema bila tangazo"], answer: 1, why: "FTC inaonya dhidi ya madai ya kiafya yasiyothibitishwa." }
    ]
  },
  // ---- ADDIE: Tathmini ----
  pretest: {
    title: "Jaribio la awali: Unajua nini tayari?",
    from: [
      1,
      5,
      6,
      8,
      12,
      14,
      16,
      17
    ]
  },
  rubric: {
    mastery: "Anafikia au Anazidi katika kila mstari. Mstari ukiwa Bado, rekebisha sehemu hiyo na ujaribu tena.",
    criteria: [
      {
        name: "Media kit",
        objective: "O3",
        notYet: "Namba hazipo, ni za kubuni au zimepitwa na wakati, au mawasiliano ya binafsi yanaonekana.",
        meets: "Ukurasa mmoja wenye bio, akaunti, namba halisi zenye tarehe, wafuasi, unachotoa na mawasiliano salama.",
        exceeds: "Inaonyesha wastani wa ushiriki kwa kila chapisho na orodha wazi ya ushirikiano uliopita au kazi za kijamii."
      },
      {
        name: "Kufaana na chapa",
        objective: "O2",
        notYet: "Chapa iliyochaguliwa inapingana na maadili ya mwanamichezo au ni aina ya bidhaa iliyozuiliwa.",
        meets: "Chapa moja ambayo mwanamichezo anaitumia kweli, inayowafaa wafuasi wake na kanuni za shule na jimbo.",
        exceeds: "Uchaguzi unaungwa mkono na orodha ya chapa tano zinazofaa pamoja na sababu."
      },
      {
        name: "Ujumbe wa ombi",
        objective: "O4",
        notYet: "Ni mrefu, wa jumla au maandishi ya AI yaliyonakiliwa, au umetumwa kwa DM ovyo.",
        meets: "Chini ya maneno 150, kwa sauti ya mwanamichezo, ukiwa na sababu ya kweli, wazo moja na media kit, kwa mawasiliano rasmi.",
        exceeds: "Mzazi au mlezi amehusishwa inapohitajika na tarehe ya kufuatilia imewekwa."
      },
      {
        name: "Orodha ya dalili za hatari na kanuni",
        objective: "O5",
        notYet: "Inakosa dalili muhimu za hatari au haitaji nani ataulizwa.",
        meets: "Inaorodhesha dalili za hatari, cha kukagua (kazi, malipo, muda, kumaliza) na nani shuleni au katika jimbo wa kumuuliza.",
        exceeds: "Inaongeza muda wa mwisho wa kuripoti na kuweka kumbukumbu kwa ajili ya kodi."
      },
      {
        name: "Tangazo wazi",
        objective: "O6",
        notYet: "Hakuna tangazo, au limefichwa au halieleweki.",
        meets: "\"Ad\" au shukrani iliyo wazi karibu na mwanzo, likisemwa na kuonyeshwa kwenye video, na madai ya kweli tu.",
        exceeds: "Pia linatumia lebo ya app ya ushirikiano uliolipiwa na linakagua kila dai pamoja na chapa."
      }
    ]
  },
  evaluation: {
    results: [
      "Wanafunzi wanaomaliza kazi ya mwisho na kupata Anafikia au Anazidi katika kila mstari wa rubriki",
      "Wanafunzi wanaoripoti kutuma ombi kwa angalau chapa moja ndani ya siku 30 (utafiti wa kufuatilia)",
      "Wanafunzi wanaoripoti mkataba uliokaguliwa pamoja na mtu mzima wanayemwamini au ofisi ya kufuata kanuni, au mkataba mbaya uliokataliwa",
      "Wanafunzi wanaoripoti kwamba kila chapisho lililolipiwa lilikuwa na tangazo wazi na kila mkataba uliohitaji kuripotiwa uliripotiwa kwa wakati"
    ]
  },
  // ---- ADDIE: Utekelezaji ----
  implementation: {
    materials: [
      "Simu yenye apps za mitandao ya kijamii na takwimu zake (insights)",
      "Akaunti ya bure ya Canva",
      "Msaidizi wa AI wa bure (ChatGPT, Microsoft Copilot au Google Gemini)",
      "Sera ya NIL ya shule yako au kanuni za chama cha jimbo lako",
      "Kama dakika 60"
    ],
    facilitatorNotes: [
      "Alika ofisi ya kufuata kanuni au mkurugenzi wa michezo aeleze kanuni za sasa za NIL na kuripoti; kanuni na viwango vya pesa vinabadilika.",
      "Kwa wanamichezo walio chini ya miaka 18, wahusishe wazazi au walezi katika kila ombi na kila mkataba.",
      "Usimwambie mwanamichezo kamwe kwamba mkataba fulani uko sawa; peleka mikataba kwa mtu mzima anayeaminika, wakili, wakala au msaada wa NIL wa shule.",
      "Fundisha kwamba kununua wafuasi au kuongeza namba si uaminifu na kunaweza kumaliza mikataba.",
      "Fanyeni mazoezi ya kuandika matangazo pamoja na kagueni rasimu za machapisho yaliyolipiwa kabla hayajachapishwa."
    ]
  }
};
