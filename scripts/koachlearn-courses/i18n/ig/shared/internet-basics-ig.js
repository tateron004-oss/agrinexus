"use strict";

// Koach Learn course (Igbo translation of shared/internet-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FTC_TECH = { name: "FTC: Otu esi ahụ, zere ma kọọ aghụghọ \"tech support\" (How to spot, avoid and report tech support scams)", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" };

module.exports = {
  id: "internet-basics-ig",
  lang: "ig",
  translationOf: "internet-basics",
  category: "Seniors and Technology",
  name: "Mmalite Ịntanetị",
  skills: "Ijikọ na Wi-Fi, Iji web browser, Imeghe na ịgbanwe tab, Ịchọ ihe n'ịntanetị, Ịgụ adreesị weebụ n'enweghị nsogbu, Ichekwa saịtị ị hụrụ n'anya",
  outcome: "ijikọ ekwentị ma ọ bụ kọmputa na Wi-Fi, imeghe web browser, ịga na weebụsaịtị site n'adreesị ya, ịchọ ihe ị chọrọ, ịmata adreesị weebụ dị mma na nke dị egwu, na ichekwa saịtị ị na-eji mgbe niile ka i wee laghachi na ya site n'otu mmetụ.",
  about: [
    "Ịntanetị na-ekwe ka ị lee ihu igwe, chọta oge ọfịs dọkịta na-emeghe, gụọ akụkọ, lee usoro oge ụgbọ ala (bus), ma hụ foto ezinụlọ gị. Ihe ọmụmụ a na-amalite site na mbido, ọ dịghịkwa mkpa ka i nwee ahụmahụ ọ bụla.",
    "Na Isi 1, ị ga-amụta ihe ịntanetị bụ, otu esi ejikọ na Wi-Fi, na otu esi eji web browser. Na Isi 2, ị ga-achọ ihe, mụta ịgụ adreesị weebụ ka i zere saịtị adịgboroja na pop-up na-atụ ụjọ, ma chekwaa saịtị ị na-eji kacha.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Debe ekwentị, tablet ma ọ bụ kọmputa n'akụkụ gị ka ị nwalee nzọụkwụ ọ bụla. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Hazie obere njem. Jikọọ na Wi-Fi, meghee web browser, ma chọọ ebe ị ga-achọ ịga, dị ka ogige ntụrụndụ (park), ụlọ ngosi ihe mgbe ochie (museum) ma ọ bụ ọba akwụkwọ. Meghee ezi weebụsaịtị ya, lee oge ọ na-emeghe na adreesị ya, meghee tab nke abụọ nwere ihu igwe echi, mee ka mkpụrụ edemede buo ibu ma ọ bụrụ na ọ dị mkpa, ma chekwaa (bookmark) ezi saịtị ahụ ka i wee chọta ya ọzọ site n'otu mmetụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bụ ndị ọhụrụ n'ịntanetị ma ọ bụ ndị na-eji ya naanị site n'otu app ma ọ bụ abụọ: ndị agadi, ndị na-elekọta ha, ndị na-alọghachi n'obodo, ndị bịara ọhụrụ, na onye ọ bụla chọrọ iji ịntanetị n'obi ike.",
    startingPoint: "Ha nwere ike ịgbanye ekwentị, tablet ma ọ bụ kọmputa ma metụ ma ọ bụ pịa ihe. Ọtụtụ n'ime ha ejikọbeghị na Wi-Fi n'onwe ha, edebeghị adreesị weebụ, ejibeghị tab ma ọ bụ bookmark, ma ọ bụ lelee ma adreesị weebụ ọ bụ ezi nke.",
    gap: "Ugbu a, a na-achọta oge mmeghe, map, ihu igwe, ahụike, enyemaka gọọmentị na ịzụ ahịa n'ịntanetị. Ndị na-enweghị ike ijikọ, ịchọ ihe na ịmata ezi saịtị na nke adịgboroja na-adabere n'ebe ndị ọzọ nọ, na-atụfu ozi, na-eri data ekwentị ha, ma ọ bụ na-ada n'ọnyà pop-up adịgboroja na saịtị ndị yiri ezi ndị.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu dị ka router, browser, tab na domain",
      "Ngwaọrụ: ekwentị, tablet ma ọ bụ kọmputa; e nyere nzọụkwụ maka iPhone, Android na kọmputa",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, ihe dị ka nkeji 60 n'ozuzu",
      "Ego: Wi-Fi n'efu n'ụlọ, n'ọba akwụkwọ ma ọ bụ n'ụlọ kọfị (café); enweghị app a na-akwụ ụgwọ",
      "Nchekwa: enweghị ọrụ ụlọ akụ ma ọ bụ ozi nzuzo na Wi-Fi ọha n'oge omume"
    ],
    prerequisites: "Ọ dịghị. \"Smartphone na Tablet\" ma ọ bụ \"Nka Kọmputa Mbụ\" na-enyere ndị na-ejibeghị ngwaọrụ mgbe ọ bụla aka."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'enweghị ndetu", action: "ịkọwa ihe ịntanetị na web bụ, na ụzọ abụọ bụ isi ngwaọrụ si ejikọ", standard: "na-akpọ Wi-Fi na mobile data aha nke ọma, na-ekwukwa mgbe Wi-Fi na-echekwa data nke atụmatụ ekwentị gị" },
    { id: "O2", condition: "Mgbe e nyere gị aha netwọk na okwuntughe ya", action: "ijikọ na netwọk Wi-Fi na ekwentị, tablet ma ọ bụ kọmputa gị, ma kpọọ aha ihe a ga-ezere na Wi-Fi ọha", standard: "jikọọ n'enweghị onye nyere aka, ma kpọọ ọrụ ụlọ akụ na ozi nzuzo aha dị ka ihe a ga-ezere" },
    { id: "O3", condition: "Site n'iji web browser", action: "imeghe weebụsaịtị site n'ide adreesị ya, wee jiri bọtịnụ azụ (back), tab na zoom", standard: "ezi saịtị ahụ ghere oghe, tab nke abụọ ghere oghe, mkpụrụ edemede bukwara ibu" },
    { id: "O4", condition: "Mgbe e nyere gị ihe ị chọrọ ịchọta", action: "ịchọ ihe site n'okwu isi ole na ole ma họrọ nsonaazụ bara uru nke na-abụghị mgbasa ozi (ad)", standard: "na-agụ adreesị weebụ tupu imeghe nsonaazụ ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị adreesị weebụ, pop-up na-atụ ụjọ na saịtị ị na-eji mgbe niile", action: "ịmata adreesị weebụ dị mma na nke dị egwu, imechi pop-up adịgboroja, na ichekwa (bookmark) ezi saịtị ka i wee laghachi na ya n'enweghị nsogbu", standard: "na-ahọrọ nke ziri ezi mgbe niile ma na-emeghe saịtị e chekwara ọzọ site n'otu mmetụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịbanye n'ịntanetị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe ịntanetị bụ",
          minutes: 4,
          goal: "Kọwaa ịntanetị, web na otu ngwaọrụ si ejikọ.",
          text: [
            "Ịntanetị bụ netwọk buru ibu nke na-ejikọ kọmputa na ekwentị n'ụwa niile ka ha wee kesaa ozi. World Wide Web, ma ọ bụ web, bụ akụkụ ị na-eleta site na web browser: weebụsaịtị nwere peeji, foto na vidiyo. Email na oku vidiyo na-agakwa n'ịntanetị.",
            "Ngwaọrụ gị na-ejikọ n'otu n'ime ụzọ abụọ bụ isi. Wi-Fi bụ njikọ na-enweghị waya site n'igbe a na-akpọ router, n'ụlọ, n'ọba akwụkwọ ma ọ bụ n'ụlọ kọfị. Mobile data na-esi n'ọkpọ (tower) ụlọ ọrụ ekwentị gị, ọ bụkwa akụkụ nke atụmatụ ekwentị gị.",
            "Wi-Fi n'ụlọ anaghị erikarị data nke atụmatụ ekwentị gị, ya mere ọ bụ ezigbo nhọrọ maka vidiyo na nbudata buru ibu."
          ],
          words: [["Ịntanetị", "netwọk n'ụwa niile na-ejikọ kọmputa na ekwentị."], ["Web (World Wide Web)", "weebụsaịtị ị na-eleta site na browser."], ["Router", "igbe na-ezipụ akara Wi-Fi."], ["Mobile data", "ịntanetị site n'ọkpọ ụlọ ọrụ ekwentị gị, akụkụ nke atụmatụ ekwentị gị."]],
          slides: [
            { title: "Ịntanetị na web", bullets: ["Ịntanetị: netwọk ngwaọrụ n'ụwa niile", "Web: weebụsaịtị ị na-eleta site na browser", "Email na oku vidiyo na-ejikwa ịntanetị"] },
            { title: "Ụzọ abụọ isi jikọọ", bullets: ["Wi-Fi: na-enweghị waya, site na router", "Mobile data: site n'ọkpọ ekwentị, akụkụ nke atụmatụ gị"] },
            { title: "Ndụmọdụ", bullets: ["Jiri Wi-Fi n'ụlọ maka vidiyo na nbudata buru ibu", "Ọ na-echekwa data nke atụmatụ ekwentị gị"] }
          ],
          tryIt: "Na ekwentị ma ọ bụ tablet gị, lee n'elu ihuenyo. Chọta akara Wi-Fi (ahịrị gbagọrọ agbagọ) ma ọ bụ akara mobile data (ogwe ma ọ bụ mkpụrụ edemede dị ka 5G). Kedu nke na-arụ ọrụ ugbu a?",
          youCanNow: "ịkọwa ihe ịntanetị na web bụ, na ịmata ma ngwaọrụ gị nọ na Wi-Fi ma ọ bụ na mobile data.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ mobile data?", options: ["Igbe dị n'ụlọ gị", "Ndepụta weebụsaịtị i chekwara", "Ịntanetị site n'ọkpọ ụlọ ọrụ ekwentị gị, akụkụ nke atụmatụ ekwentị gị", "Ụdị web browser"], answer: 2, why: "Mobile data na-esi n'ọkpọ ekwentị, ọ bụkwa akụkụ nke atụmatụ ekwentị gị." },
            { objective: "O1", q: "Ị chọrọ ikiri vidiyo ogologo na ekwentị gị n'ụlọ. Kedu njikọ ị ga-eji?", options: ["Wi-Fi ụlọ, ka ị ghara iri data nke atụmatụ ekwentị gị", "Mobile data, n'ihi na ọ bụ n'efu mgbe niile", "Vidiyo achọghị njikọ ọ bụla", "Bookmark"], answer: 0, why: "Wi-Fi ụlọ anaghị erikarị data nke atụmatụ ekwentị gị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ijikọ na Wi-Fi",
          minutes: 5,
          goal: "Jikọọ na netwọk Wi-Fi na ekwentị, tablet ma ọ bụ kọmputa.",
          text: [
            "Iji jikọọ na Wi-Fi, ị chọrọ aha netwọk ahụ na okwuntughe ya. N'ụlọ, a na-edekarị ha abụọ n'obere akwụkwọ nrapado (sticker) dị na router. N'ọba akwụkwọ ma ọ bụ n'ụlọ kọfị, jụọ ndị ọrụ ma ọ bụ chọọ akara e dere ede.",
            "Na iPhone ma ọ bụ iPad: meghee Settings, metụ Wi-Fi, metụ aha netwọk ahụ ma dee okwuntughe. Na Android: meghee Settings, metụ Network and internet ma ọ bụ Connections, wee Wi-Fi, họrọ netwọk ahụ ma dee okwuntughe. Na kọmputa: pịa akara Wi-Fi dị nso elekere, họrọ netwọk ahụ ma dee okwuntughe.",
            "Wi-Fi ọha bara uru, mana ndị ọzọ na-ekekọrịta ya. Na Wi-Fi ọha, zere ọrụ ụlọ akụ ma edela ozi nzuzo. Jikọọ naanị na netwọk ndị ọrụ nyere gị aha ha, ọ bụghị ndị nwere aha dị iche."
          ],
          steps: ["Chọta aha netwọk na okwuntughe (sticker router, ndị ọrụ ma ọ bụ akara e dere ede).", "Meghee Settings, wee Wi-Fi (na kọmputa, pịa akara Wi-Fi dị nso elekere).", "Metụ ma ọ bụ pịa aha netwọk ahụ.", "Dee okwuntughe nke ọma; mkpụrụ edemede ukwu (capital) dị mkpa.", "Chere ka akara Wi-Fi pụta n'elu."],
          words: [["Aha netwọk", "aha njikọ Wi-Fi na-egosi na ndepụta, a na-akpọkwa ya SSID."], ["Okwuntughe Wi-Fi", "koodu ị na-ede iji jikọọ na netwọk Wi-Fi."], ["Wi-Fi ọha", "Wi-Fi ọtụtụ mmadụ na-ekekọrịta n'ebe dị ka ọba akwụkwọ na ụlọ kọfị."]],
          slides: [
            { title: "Ị chọrọ ihe abụọ", bullets: ["Aha netwọk ahụ", "Okwuntughe (sticker router, ndị ọrụ ma ọ bụ akara e dere ede)"] },
            { title: "Otu esi ejikọ", bullets: ["Ekwentị ma ọ bụ tablet: Settings, wee Wi-Fi", "Kọmputa: akara Wi-Fi dị nso elekere", "Họrọ netwọk ahụ, dee okwuntughe"] },
            { title: "Nchekwa na Wi-Fi ọha", bullets: ["Enweghị ọrụ ụlọ akụ ma ọ bụ ozi nzuzo", "Jikọọ naanị na aha ndị ọrụ nyere gị"] }
          ],
          tryIt: "Meghee ntọala (settings) Wi-Fi gị ma chọta ndepụta netwọk. Ọ bụrụ na ị nọ n'ụlọ ma ọ bụ n'ọba akwụkwọ, jikọọ na nke ziri ezi. Lelee na akara Wi-Fi pụtara n'elu.",
          youCanNow: "ijikọ na netwọk Wi-Fi na iji Wi-Fi ọha n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O2", q: "Kedu ihe abụọ ị chọrọ iji jikọọ na netwọk Wi-Fi?", options: ["Email gị na nọmba ekwentị gị", "Aha netwọk ahụ na okwuntughe ya", "Browser na bookmark", "Tab na igwe nchọta (search engine)"], answer: 1, why: "Ị na-ahọrọ netwọk ahụ site n'aha ya ma dee okwuntughe ya." },
            { objective: "O2", q: "N'ụlọ kọfị, ị hụrụ netwọk abụọ: otu ndị ọrụ kpọrọ aha, na otu aha ya bụ \"FREE_FAST_WIFI_123\". Gịnị ka ị ga-eme?", options: ["Jikọọ na nke dị iche n'ihi na o kwuru n'efu", "Jikọọ na ha abụọ n'otu oge", "Dee ozi ụlọ akụ gị iji nwalee nke dị iche ahụ", "Jikọọ naanị na netwọk ndị ọrụ nyere gị"], answer: 3, why: "Jikọọ naanị na netwọk ndị ọrụ nyere gị aha ha, ọ bụghị ndị nwere aha dị iche." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji web browser",
          minutes: 5,
          goal: "Meghee weebụsaịtị site n'adreesị ya ma jiri bọtịnụ azụ na tab gagharịa.",
          text: [
            "Web browser bụ app ị na-eji eleta weebụsaịtị. Ndị a na-ahụkarị bụ Chrome, Safari, Edge na Firefox. N'elu ya bụ igbe adreesị (address bar), igbe ogologo ebe ị na-ede adreesị weebụ dị ka weather.gov ma pịa Enter ma ọ bụ Go.",
            "Bọtịnụ ndị bara uru: akụ azụ (back arrow) na-alaghachi na peeji ị nọ na mbụ; akụ gbara gburugburu na-ebughachi (reload) peeji ahụ. Tab na-ekwe ka ọtụtụ peeji ghere oghe n'otu oge, dị ka faịlụ dị na tebụl. Meghee tab ọhụrụ site na bọtịnụ (+) ma gbanwee site n'imetụ ma ọ bụ ịpị tab.",
            "Ọ bụrụ na mkpụrụ okwu dị obere nke ukwuu, ị nwere ike ime zoom. Na kọmputa, jide Ctrl ma pịa + (Command na + na Mac); Ctrl na - na-eme ka ọ dị obere. Na ekwentị, gbasaa mkpịsị aka abụọ n'ihuenyo."
          ],
          steps: ["Meghee browser (Chrome, Safari, Edge ma ọ bụ Firefox).", "Metụ igbe adreesị dị n'elu.", "Dee adreesị weebụ, dị ka weather.gov, ma pịa Enter ma ọ bụ Go.", "Jiri akụ azụ laghachi.", "Pịa + iji meghee tab ọhụrụ.", "Zoom: Ctrl na + (Command na + na Mac), ma ọ bụ gbasaa mkpịsị aka abụọ na ekwentị."],
          words: [["Web browser", "app ị na-eji eleta weebụsaịtị, dị ka Chrome, Safari, Edge ma ọ bụ Firefox."], ["Igbe adreesị (address bar)", "igbe dị n'elu browser ebe ị na-ede adreesị weebụ."], ["Tab", "otu peeji ghere oghe na browser; ọtụtụ nwere ike ịghe oghe n'otu oge."], ["Zoom", "ime ka ihe dị n'ihuenyo buo ibu ma ọ bụ dị obere."]],
          slides: [
            { title: "Browser", bullets: ["Chrome, Safari, Edge ma ọ bụ Firefox", "Igbe adreesị dị n'elu", "Dee adreesị, pịa Enter ma ọ bụ Go"] },
            { title: "Bọtịnụ bara uru", bullets: ["Akụ azụ: peeji nke gara aga", "Akụ gbara gburugburu: bughachi peeji", "+ na-emeghe tab ọhụrụ"] },
            { title: "Mee ka o buo ibu", bullets: ["Kọmputa: Ctrl na + (Command na + na Mac)", "Ekwentị: gbasaa mkpịsị aka abụọ"] }
          ],
          tryIt: "Meghee browser ma dee weather.gov n'igbe adreesị. Wee meghee tab ọhụrụ ma gaa na weebụsaịtị ọba akwụkwọ dị nso gị. Gbanwee n'etiti tab abụọ ahụ ma mee ka mkpụrụ edemede buo ibu n'otu n'ime ha.",
          youCanNow: "imeghe weebụsaịtị site n'adreesị ha, iji bọtịnụ azụ, ịgbanwe tab, na ime ka mkpụrụ edemede buo ibu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka akụ gbara gburugburu dị na browser na-eme?", options: ["Ọ na-emechi browser", "Ọ na-emeghe tab ọhụrụ", "Ọ na-echekwa bookmark", "Ọ na-ebughachi peeji ahụ"], answer: 3, why: "Akụ gbara gburugburu na-ebughachi peeji ị nọ na ya." },
            { objective: "O3", q: "Ị na-agụ usoro esi nri ma chọọ ilele ihu igwe n'atụfughị usoro ahụ. Gịnị ka ị ga-eme?", options: ["Meghee tab ọhụrụ site na bọtịnụ (+)", "Mechie peeji usoro esi nri ahụ", "Gbanyụọ Wi-Fi", "Malitegharịa ngwaọrụ ahụ"], answer: 0, why: "Tab na-ekwe ka ọtụtụ peeji ghere oghe n'otu oge." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịbanye n'ịntanetị",
        questions: [
          { objective: "O1", q: "Gịnị bụ web?", options: ["Ụdị waya", "Naanị ụlọ ududo", "Ụgwọ ekwentị gị", "Weebụsaịtị ị na-eleta site na browser"], answer: 3, why: "Web bụ weebụsaịtị ị na-eleta site na browser." },
          { objective: "O2", q: "Ebee ka a na-edekarị okwuntughe Wi-Fi ụlọ?", options: ["Na rimot TV", "Na sticker dị na router", "Na mkpuchi ekwentị gị", "N'akwụkwọ akụkọ"], answer: 1, why: "Router na-enwekarị aha na okwuntughe na sticker." },
          { objective: "O2", q: "Na kọmputa, ebee ka ị na-apịkarị iji jikọọ na Wi-Fi?", options: ["Ebe a na-atụfu ihe (trash)", "Akara Wi-Fi dị nso elekere", "Igwe mbipụta", "Igwefoto"], answer: 1, why: "Akara Wi-Fi dị nso elekere na-egosi netwọk ndị ahụ." },
          { objective: "O2", q: "Ị nọ na Wi-Fi ụlọ kọfị. Gịnị ka ị kwesịrị izere?", options: ["Ilele ihu igwe", "Ịgụ akụkọ", "Ọrụ ụlọ akụ n'ịntanetị", "Ịchọ usoro esi nri"], answer: 2, why: "A na-ekekọrịta Wi-Fi ọha, ya mere zere ọrụ ụlọ akụ na ozi nzuzo." },
          { objective: "O3", q: "Ebee ka ị na-ede adreesị weebụ dị ka weather.gov?", options: ["N'igwefoto", "N'ozi ederede", "N'igwe mgbakọ", "N'igbe adreesị dị n'elu browser"], answer: 3, why: "Igbe adreesị na-akpọga gị na weebụsaịtị." }
        ]
      }
    },
    {
      name: "Isi 2: Ịchọta ihe na ịnọ na nchekwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịchọ ihe n'ịntanetị",
          minutes: 5,
          goal: "Chọọ otu ihe kpọmkwem ma meghee nsonaazụ bara uru.",
          text: [
            "Ọ bụrụ na ị maghị adreesị weebụ, chọọ ya. Dee okwu isi ole na ole n'igbe adreesị ma ọ bụ na saịtị nchọta dị ka Google ma ọ bụ Bing, wee pịa Enter. Dịka ọmụmaatụ: \"Springfield public library hours\".",
            "Peeji nsonaazụ na-egosi ndepụta njikọ (link). Nke ọ bụla nwere aha na-acha anụnụ anụnụ, adreesị weebụ n'obere mkpụrụ edemede, na nkọwa dị mkpụmkpụ. Gụọ adreesị weebụ tupu i metụ. Nsonaazụ ndị dị n'elu nwere akara \"Sponsored\" ma ọ bụ \"Ad\" bụ mgbasa ozi e kwụrụ ụgwọ ya.",
            "Ị nwekwara ike iji olu gị chọọ ihe. Metụ igwe okwu (microphone) dị n'igbe nchọta ma kwuo ihe ị chọrọ, dị ka \"weather tomorrow\" (ihu igwe echi)."
          ],
          steps: ["Metụ igbe adreesị ma ọ bụ igbe nchọta.", "Dee okwu isi ole na ole, dị ka ebe ahụ, obodo ahụ na ihe ị chọrọ.", "Pịa Enter ma ọ bụ bọtịnụ nchọta.", "Hapụ nsonaazụ nwere akara Sponsored ma ọ bụ Ad.", "Gụọ adreesị weebụ, wee metụ nsonaazụ ị chọrọ."],
          words: [["Ịchọ (search)", "ide okwu iji chọta peeji weebụ gbasara ha."], ["Nsonaazụ (results)", "ndepụta peeji weebụ nchọta ahụ chọtara."], ["Njikọ (link)", "okwu ma ọ bụ foto ị na-emetụ iji gaa na peeji ọzọ."]],
          slides: [
            { title: "Jiri okwu isi chọọ", bullets: ["\"Springfield public library hours\"", "Dee n'igbe adreesị ma ọ bụ na Google ma ọ bụ Bing"] },
            { title: "Ịgụ nsonaazụ", bullets: ["Aha na-acha anụnụ anụnụ, adreesị weebụ, nkọwa dị mkpụmkpụ", "Sponsored ma ọ bụ Ad = e kwụrụ ụgwọ", "Gụọ adreesị tupu i metụ"] },
            { title: "Jiri olu gị", bullets: ["Metụ igwe okwu (microphone)", "Kwuo: \"weather tomorrow\""] }
          ],
          tryIt: "Chọọ oge mmeghe nke ebe dị nso gị, dị ka ụlọ ahịa ọgwụ (pharmacy) ma ọ bụ ogige ntụrụndụ. Hapụ mgbasa ozi ọ bụla, meghee ezi nsonaazụ ahụ ma chọta oge mmeghe ya.",
          youCanNow: "ịchọ ihe n'ịntanetị na ịhọrọ nsonaazụ bara uru nke na-abụghị mgbasa ozi.",
          quickCheck: [
            { objective: "O4", q: "Na peeji nsonaazụ, gịnị ka obere mkpụrụ edemede dị n'okpuru aha ọ bụla na-acha anụnụ anụnụ na-egosi?", options: ["Adreesị weebụ", "Ihu igwe", "Okwuntughe gị", "Ọnụahịa peeji ahụ"], answer: 0, why: "Nsonaazụ ọ bụla na-egosi adreesị weebụ ya n'obere mkpụrụ edemede, ka ị gụọ ya tupu i metụ." },
            { objective: "O4", q: "Aka gị ji ihe, ị chọkwara ihu igwe echi. Gịnị ka ị ga-eme?", options: ["Dee akụkọ ogologo n'igbe nchọta", "Meghee bookmark nke saịtị ịzụ ahịa", "Metụ igwe okwu dị n'igbe nchọta ma kwuo \"weather tomorrow\"", "Malitegharịa ekwentị"], answer: 2, why: "Ị nwere ike iji olu gị chọọ ihe site n'imetụ igwe okwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgụ adreesị weebụ na izere aghụghọ",
          minutes: 5,
          goal: "Mata adreesị weebụ dị mma na nke dị egwu, ma mee ihe kwesịrị maka pop-up na-atụ ụjọ.",
          text: [
            "Adreesị weebụ nwere akụkụ bụ isi, domain, nke dị tupu akara slash (/) mbụ, dị ka irs.gov ma ọ bụ amazon.com. Akụkụ bụ isi ahụ na-agwa gị onye na-elekọta saịtị ahụ. Saịtị adịgboroja na-eji aha yiri ezi ndị, dị ka \"amaz0n-deals.com\" ma ọ bụ \"irs-refund.help\".",
            "Chọọ https na akara mkpọchi (lock) na mmalite adreesị ahụ. Ọ pụtara na njikọ ahụ bụ nzuzo, mana ndị aghụghọ nwekwara ike inwe ya, ya mere aha domain ka bụ ihe kacha mkpa.",
            "Ụfọdụ pop-up adịgboroja na-ekwu na kọmputa gị nwere nje (virus) ma nye nọmba ekwentị ị ga-akpọ. FTC (ọfịs gọọmentị US na-echebe ndị na-azụ ahịa) kwuru na ezi ịdọ aka na ntị nchekwa agaghị arịọ gị mgbe ọ bụla ka ị kpọọ nọmba ekwentị, na ezi ụlọ ọrụ teknụzụ agaghị akpọ gị ma ọ bụ zitere gị ozi maka nsogbu. Akpọla. Mechie tab ahụ ma ọ bụ browser; ọ bụrụ na ọ jụrụ imechi, malitegharịa ngwaọrụ ahụ. Ọ bụrụ na ọ na-echegbu gị, jụọ onye ị tụkwasịrị obi."
          ],
          steps: ["Chọta domain: aha dị tupu slash (/) mbụ.", "Lelee na ọ bụ ezi aha ị tụrụ anya ya.", "Chọọ https na mkpọchi, mana atụkwasịla naanị ha obi.", "Pop-up na-atụ ụjọ nwere nọmba ekwentị? Akpọla.", "Mechie tab ahụ ma ọ bụ malitegharịa ngwaọrụ ahụ.", "Kọọ aghụghọ tech support na ReportFraud.ftc.gov."],
          words: [["Domain", "aha bụ isi n'adreesị weebụ na-agwa gị onye na-elekọta saịtị ahụ, dị ka irs.gov."], ["Pop-up", "obere windo na-apụta na mberede n'elu peeji weebụ."], ["Aghụghọ tech support", "ịdọ aka na ntị ma ọ bụ oku adịgboroja na-ekwu na ngwaọrụ gị nwere nsogbu iji nweta ego gị ma ọ bụ ịbanye na ngwaọrụ gị."]],
          sources: [FTC_TECH],
          slides: [
            { title: "Chọta domain", bullets: ["Aha dị tupu slash (/) mbụ", "irs.gov bụ ezi nke; irs-refund.help abụghị"] },
            { title: "https na mkpọchi", bullets: ["Njikọ ahụ bụ nzuzo", "Ndị aghụghọ nwekwara ike inwe ya", "Aha domain kacha mkpa"] },
            { title: "Pop-up na-atụ ụjọ (FTC)", bullets: ["Ezi ịdọ aka na ntị anaghị arịọ gị ka ị kpọọ nọmba", "Akpọla", "Mechie tab ahụ ma ọ bụ malitegharịa ngwaọrụ ahụ"] }
          ],
          tryIt: "Lee adreesị weebụ atọ dị n'ihuenyo gị ma ọ bụ n'email gị. Maka nke ọ bụla, gosi domain ya ma kwuo onye na-elekọta saịtị ahụ.",
          youCanNow: "ịgụ adreesị weebụ iji hụ onye na-elekọta saịtị, na imeso pop-up nje adịgboroja n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O5", q: "Kedu akụkụ adreesị weebụ na-agwa gị onye na-elekọta saịtị ahụ?", options: ["https dị na mmalite", "Okwu ndị dị mgbe slash (/) mbụ gasịrị", "Domain, nke dị tupu slash (/) mbụ", "Akara mkpọchi"], answer: 2, why: "Domain, dị ka irs.gov, na-agwa gị onye na-elekọta saịtị ahụ." },
            { objective: "O5", q: "Pop-up kwuru na kọmputa gị nwere nje ma gosi nọmba ị ga-akpọ. Ọ jụrụ imechi. Gịnị ka ị ga-eme?", options: ["Kpọọ nọmba ahụ ozugbo", "Malitegharịa ngwaọrụ ahụ ma akpọla", "Dee nọmba kaadị gị iji kwụọ ụgwọ mmezi", "Hapụ ya n'ihuenyo ọtụtụ ụbọchị"], answer: 1, why: "Ezi ịdọ aka na ntị nchekwa anaghị arịọ gị ka ị kpọọ; malitegharịa ma ọ bụrụ na pop-up ahụ jụrụ imechi." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ichekwa saịtị ị hụrụ n'anya",
          minutes: 4,
          goal: "Chekwaa (bookmark) weebụsaịtị ma meghee ya ọzọ site n'otu mmetụ.",
          text: [
            "Bookmark (a na-akpọkwa ya favorite) na-echekwa weebụsaịtị ka i wee laghachi na ya n'achọghị ya ọzọ. Ọ bụ ụzọ kacha enweghị nsogbu isi laghachi na saịtị ị na-eji mgbe niile, dị ka ụlọ akụ gị, ụlọ ahịa ọgwụ gị ma ọ bụ saịtị akụkọ, n'ihi na ị na-ezere nsonaazụ nchọta adịgboroja.",
            "Na kọmputa, pịa kpakpando (star) dị na njedebe igbe adreesị. Na iPhone ma ọ bụ iPad na Safari, metụ bọtịnụ Share ma họrọ Add Bookmark. Na Chrome na ekwentị, meghee menu (ntụpọ atọ) ma metụ kpakpando ahụ. N'ọtụtụ ekwentị, ị nwekwara ike ịhọrọ \"Add to Home screen\" iji mee akara dị ka app.",
            "Iji meghee bookmark ma emechaa, meghee ndepụta bookmark dị na menu browser, ma ọ bụ metụ akara dị na ihuenyo mbụ (home screen) gị."
          ],
          steps: ["Meghee ezi weebụsaịtị ị chọrọ ichekwa.", "Kọmputa: pịa kpakpando dị n'igbe adreesị.", "Safari na iPhone ma ọ bụ iPad: bọtịnụ Share, wee Add Bookmark.", "Chrome na ekwentị: menu ntụpọ atọ, wee kpakpando ahụ.", "Iji meghee ya ma emechaa: gaa na Bookmarks dị na menu, ma ọ bụ metụ akara dị na home screen."],
          words: [["Bookmark / favorite", "njikọ e chekwara na weebụsaịtị ka i wee meghee ya ọzọ ngwa ngwa."], ["Home screen", "ihuenyo mbụ nke ekwentị ma ọ bụ tablet na-egosi akara app."]],
          slides: [
            { title: "Gịnị mere bookmark?", bullets: ["Laghachi na saịtị site n'otu mmetụ", "Ọ na-ezere nsonaazụ nchọta adịgboroja", "Ọ dị mma maka ụlọ akụ, ụlọ ahịa ọgwụ, akụkọ"] },
            { title: "Otu esi eme bookmark", bullets: ["Kọmputa: kpakpando dị n'igbe adreesị", "Safari: Share, wee Add Bookmark", "Chrome na ekwentị: ntụpọ atọ, wee kpakpando ahụ"] },
            { title: "Meghee ya ọzọ", bullets: ["Bookmarks dị na menu browser", "Ma ọ bụ metụ akara dị na home screen"] }
          ],
          tryIt: "Ọrụ ikpeazụ: hazie obere njem. Chọọ ogige ntụrụndụ, ụlọ ngosi ihe mgbe ochie ma ọ bụ ọba akwụkwọ, meghee ezi saịtị ya, lee oge mmeghe na adreesị ya, meghee ihu igwe echi na tab nke abụọ, mee ka mkpụrụ edemede buo ibu ma ọ bụrụ na ọ dị mkpa, ma chekwaa (bookmark) ezi saịtị ahụ.",
          youCanNow: "iji ịntanetị n'onwe gị, ịchọta ihe ị chọrọ, izere saịtị adịgboroja, na ichekwa saịtị ị hụrụ n'anya.",
          quickCheck: [
            { objective: "O5", q: "Na kọmputa, gịnị ka ị na-apị iji chekwaa (bookmark) weebụsaịtị?", options: ["Akụ azụ", "Akụ gbara gburugburu", "Bọtịnụ (+)", "Kpakpando dị na njedebe igbe adreesị"], answer: 3, why: "Kpakpando dị na njedebe igbe adreesị na-echekwa bookmark." },
            { objective: "O5", q: "Ị na-enye iwu ọgwụ site na weebụsaịtị ụlọ ahịa ọgwụ gị kwa ọnwa. Kedu otu ị ga-esi laghachi na ya n'enweghị nsogbu?", options: ["Chọọ ya oge ọ bụla ma metụ mgbasa ozi mbụ", "Chekwaa ezi saịtị ahụ ma meghee ya site na bookmark gị", "Pịa njikọ dị n'ozi ederede", "Chepụta adreesị ahụ oge ọ bụla"], answer: 1, why: "Bookmark e si n'ezi saịtị chekwaa na-ezere nsonaazụ nchọta adịgboroja." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịchọta ihe na ịnọ na nchekwa",
        questions: [
          { objective: "O4", q: "Kedu nchọta kacha doo anya?", options: ["\"place\"", "\"Springfield library hours\"", "\"open?\"", "\"help me find it please now\""], answer: 1, why: "Okwu isi ole na ole nwere ebe ahụ na ihe ị chọrọ na-arụ ọrụ kacha mma." },
          { objective: "O5", q: "Na www.irs.gov/refunds, kedu nke bụ domain?", options: ["www", "refunds", "irs.gov", "https"], answer: 2, why: "Domain bụ aha dị tupu slash (/) mbụ." },
          { objective: "O5", q: "Pop-up kwuru na kọmputa gị nwere nje, ma gwa gị ka ị kpọọ nọmba ugbu a. Gịnị ka ị ga-eme?", options: ["Kpọọ nọmba ahụ", "Kwụọ ụgwọ site na gift card", "Nye ha ohere ịbanye na kọmputa gị site n'ebe dị anya", "Akpọla; mechie tab ahụ ma ọ bụ malitegharịa"], answer: 3, why: "FTC kwuru na ezi ịdọ aka na ntị anaghị arịọ gị ka ị kpọọ nọmba." },
          { objective: "O5", q: "Weebụsaịtị na-egosi https na mkpọchi. Nke ahụ pụtara:", options: ["Ọ bụ saịtị gọọmentị", "Ọ bụ eziokwu n'ezie", "Njikọ ahụ bụ nzuzo, mana ị ka na-elele domain", "Ọ bụ n'efu"], answer: 2, why: "Ndị aghụghọ nwekwara ike inwe https; domain kacha mkpa." },
          { objective: "O5", q: "Kedu ụzọ kacha enweghị nsogbu isi laghachi na weebụsaịtị ụlọ ahịa ọgwụ gị kwa ọnwa?", options: ["Pịa mgbasa ozi", "Bookmark i chekwara site n'ezi saịtị ahụ", "Njikọ dị n'ozi ederede onye ị na-amaghị", "Chepụta adreesị ahụ"], answer: 1, why: "Bookmark na-ezere nsonaazụ nchọta na njikọ adịgboroja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ịntanetị",
    questions: [
      { objective: "O1", q: "Ịntanetị bụ:", options: ["Otu weebụsaịtị", "Ọwa TV", "Akwụkwọ nọmba ekwentị", "Netwọk n'ụwa niile na-ejikọ kọmputa na ekwentị"], answer: 3, why: "Ọ na-ejikọ ngwaọrụ n'ụwa niile." },
      { objective: "O1", q: "Wi-Fi na-esi na:", options: ["Batrị", "TV", "Router", "Igwe mbipụta"], answer: 2, why: "Router na-ezipụ akara Wi-Fi." },
      { objective: "O1", q: "Mobile data bụ:", options: ["Browser", "Wi-Fi n'efu n'ọba akwụkwọ", "Ụdị email", "Ịntanetị site n'ọkpọ ekwentị, akụkụ nke atụmatụ ekwentị gị"], answer: 3, why: "Mobile data na-esi n'ụlọ ọrụ ekwentị gị." },
      { objective: "O1", q: "Gịnị mere i ji eji Wi-Fi ụlọ maka vidiyo?", options: ["Vidiyo na-akpọ naanị na Wi-Fi", "Ọ na-echekwakarị data nke atụmatụ ekwentị gị", "Iwu chọrọ ya", "Ọ na-eme ka ekwentị dị fechaa"], answer: 1, why: "Wi-Fi ụlọ anaghị erikarị data nke atụmatụ gị." },
      { objective: "O2", q: "Iji jikọọ na Wi-Fi, ị chọrọ:", options: ["Igwe mbipụta", "Nọmba ụlọ akụ gị", "Aha netwọk na okwuntughe", "Ekwentị ọhụrụ"], answer: 2, why: "Aha na okwuntughe na-ekwe ka i jikọọ." },
      { objective: "O2", q: "Na iPhone, a na-ahụ Wi-Fi na:", options: ["Clock", "Photos", "Calculator", "Settings"], answer: 3, why: "Settings, wee Wi-Fi." },
      { objective: "O2", q: "Na Wi-Fi ọha, kedu nke bụ echiche ọjọọ?", options: ["Ịgụ akụkọ", "Ọrụ ụlọ akụ n'ịntanetị", "Ilele map", "Ịchọ oge mmeghe"], answer: 1, why: "A na-ekekọrịta Wi-Fi ọha; zere ọrụ nzuzo." },
      { objective: "O3", q: "Kedu n'ime ndị a bụ web browser?", options: ["Igwe mgbakọ", "Chrome", "Igwefoto", "Elekere"], answer: 1, why: "Chrome, Safari, Edge na Firefox bụ browser." },
      { objective: "O3", q: "Gịnị ka akụ azụ dị na browser na-eme?", options: ["Ọ na-ehichapụ weebụsaịtị ahụ", "Ọ na-emechi kọmputa", "Ọ na-aga na peeji ị nọ na ya na mbụ", "Ọ na-ebipụta peeji ahụ"], answer: 2, why: "Azụ na-alaghachi na peeji gara aga." },
      { objective: "O3", q: "Tab na-ekwe ka ị:", options: ["Gbanyụọ Wi-Fi", "Kwụọ ụgwọ n'onwe ya", "Chajie batrị", "Debe ọtụtụ peeji ka ha ghere oghe n'otu oge"], answer: 3, why: "Tab ọ bụla bụ otu peeji ghere oghe." },
      { objective: "O3", q: "Mkpụrụ okwu dị na peeji weebụ dị obere nke ukwuu na kọmputa. Pịa:", options: ["Delete", "Ctrl na + (Command na + na Mac)", "Escape", "Shift na 0"], answer: 1, why: "Ctrl na + na-eme ka ọ buo ibu." },
      { objective: "O3", q: "Na ekwentị, kedu otu ị ga-esi mee ka peeji buo ibu?", options: ["Gbasaa mkpịsị aka abụọ n'ihuenyo", "Kpaa ekwentị ahụ", "Gbanyụọ ya", "Pịa bọtịnụ olu"], answer: 0, why: "Ịgbasa mkpịsị aka abụọ na-eme ka ọ buo ibu." },
      { objective: "O4", q: "Nsonaazụ nchọta nwere akara \"Sponsored\" bụ:", options: ["Mgbasa ozi e kwụrụ ụgwọ ya", "Ezi saịtị mgbe niile", "Peeji gọọmentị", "Ịdọ aka na ntị nje"], answer: 0, why: "Sponsored pụtara na mmadụ kwụrụ ụgwọ ya." },
      { objective: "O4", q: "Tupu i metụ nsonaazụ nchọta, ị kwesịrị:", options: ["Ịgụ adreesị weebụ ya", "Imechi browser", "Ịmalitegharị ekwentị", "Imetụ nsonaazụ niile"], answer: 0, why: "Adreesị ahụ na-egosi onye na-elekọta saịtị ahụ." },
      { objective: "O4", q: "Kedu otu ị ga-esi chọọ ihe n'edeghị ihe?", options: ["Metụ igwe okwu ma kwuo okwu", "Kpaa ekwentị", "Jiri igwe mgbakọ", "Mee ka olu dị elu"], answer: 0, why: "Nchọta site n'olu na-ekwe ka ị kwuo ihe ị chọrọ." },
      { objective: "O5", q: "Kedu adreesị nwere ike ịbụ adịgboroja?", options: ["irs.gov", "amazon.com", "amaz0n-deals.com", "weather.gov"], answer: 2, why: "Efu (0) n'ọnọdụ O bụ aghụghọ iji yie ezi aha." },
      { objective: "O5", q: "https na mkpọchi na-agwa gị:", options: ["Njikọ ahụ bụ nzuzo", "Saịtị ahụ bụ eziokwu n'ezie", "Saịtị ahụ bụ n'efu", "Saịtị ahụ bụ ụlọ akụ"], answer: 0, why: "Ha na-echebe njikọ ahụ, ọ bụghị eziokwu saịtị ahụ." },
      { objective: "O5", q: "Ezi ịdọ aka na ntị nchekwa na kọmputa gị ga:", options: ["Ghara ịrịọ gị mgbe ọ bụla ka ị kpọọ nọmba ekwentị", "Rịọ gift card", "Rịọ gị ka ị kpọọ ozugbo", "Rịọ okwuntughe ụlọ akụ gị"], answer: 0, why: "FTC kwuru na ezi ịdọ aka na ntị anaghị arịọ gị ka ị kpọọ nọmba." },
      { objective: "O5", q: "Pop-up jụrụ imechi. Gịnị ka ị ga-eme?", options: ["Malitegharịa ngwaọrụ ahụ", "Kpọọ nọmba dị na ya", "Dee okwuntughe gị", "Kwụọ ụgwọ ahụ"], answer: 0, why: "Ịmalitegharị na-ekpochapụ pop-up ahụ n'enweghị nsogbu." },
      { objective: "O5", q: "Bookmark bụ:", options: ["Njikọ e chekwara na weebụsaịtị", "Naanị ihe e ji edebe peeji akwụkwọ", "Nje (virus)", "Okwuntughe"], answer: 0, why: "Bookmark na-akpọghachi gị na saịtị ngwa ngwa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 4, 6, 8, 10, 12, 13, 15, 17, 19]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ijikọ na Wi-Fi", objective: "O2", notYet: "Ngwaọrụ ahụ ejikọghị, ma ọ bụ e jikọrọ na netwọk nwere aha a na-amaghị.", meets: "Ngwaọrụ ahụ jikọrọ na netwọk Wi-Fi a maara n'enweghị onye nyere aka.", exceeds: "Ọ na-akọwakwa ihe a ga-ezere na Wi-Fi ọha." },
      { name: "Ịchọta ezi saịtị", objective: "O4", notYet: "Saịtị e meghere bụ mgbasa ozi ma ọ bụ ọ bụghị saịtị nke ebe ahụ n'onwe ya.", meets: "E jiri nchọta chọta ezi weebụsaịtị nke ebe ahụ, chọtakwa oge mmeghe na adreesị ya.", exceeds: "E gụrụ ma lelee adreesị weebụ tupu imetụ ya." },
      { name: "Iji browser", objective: "O3", notYet: "Naanị otu peeji ka e meghere, ma ọ bụ onye na-amụ ihe enweghị ike ịlaghachi na peeji mbụ.", meets: "Tab nke abụọ na-egosi ihu igwe echi, onye na-amụ ihe na-agbanwekwa n'etiti tab.", exceeds: "Ọ na-emekwa zoom ka mkpụrụ edemede dị n'ogo dị mma ma jiri bọtịnụ azụ." },
      { name: "Adreesị dị mma na bookmark", objective: "O5", notYet: "Enweghị bookmark, ma ọ bụ e chekwara saịtị yiri ezi nke ma ọ bụ saịtị mgbasa ozi.", meets: "E chekwara ezi saịtị ahụ ma meghee ya ọzọ site n'otu mmetụ.", exceeds: "Ọ na-akọwakwa otu domain si egosi na saịtị ahụ bụ ezi nke." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ njem ahụ",
      "Ndị na-amụ ihe kwuru na ha jiri ịntanetị n'onwe ha maka ezi mkpa, dị ka oge mmeghe, ihu igwe ma ọ bụ saịtị ahụike, n'ime ụbọchị 30 mgbe ihe ọmụmụ ahụ gasịrị (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha mechiri pop-up adịgboroja ma ọ bụ zere saịtị yiri ezi nke",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ọzọ, dị ka \"Email na Nkwurịta Okwu n'Ịntanetị\" ma ọ bụ \"Mmalite Ọgụgụ Dijitalụ\""
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa onye na-amụ ihe nwere ike iji mee omume",
      "Aha netwọk Wi-Fi na okwuntughe (n'ụlọ, n'ọba akwụkwọ ma ọ bụ nke mmemme ahụ)",
      "Akwụkwọ na mkpịsị ode iji dee oge mmeghe na adreesị ebe ahụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Dee aha Wi-Fi na okwuntughe mmemme ahụ na bọọdụ ka ndị na-amụ ihe jikọọ na netwọk ziri ezi, ọ bụghị nke yiri ya.",
      "Kewaa ndị na-amụ ihe dị ka ngwaọrụ ha (iPhone, Android ma ọ bụ kọmputa) ka nzọụkwụ dị n'ihuenyo dabara n'ihe ha na-ahụ.",
      "Jiri ogige ntụrụndụ, ọba akwụkwọ ma ọ bụ ụlọ ngosi ihe mgbe ochie dị nso maka ọrụ njem ahụ ka ọ dị mfe ilele ezi saịtị ya.",
      "Gosi foto pop-up nje adịgboroja ka ndị na-amụ ihe mata ya, mana emela ka ezi saịtị aghụghọ ghee oghe na klas mgbe ọ bụla.",
      "Jiri nwayọọ gaa na ndị na-amụ ihe merela agadi: hapụ ha ka ha metụ ihe niile n'onwe ha kama ime ya maka ha."
    ]
  }
};
