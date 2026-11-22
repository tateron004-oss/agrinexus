"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-data-precision.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FAO_EO = { name: "FAO GIEWS Earth Observation (NDVI na ihe ngosi ahịhịa ndụ)", url: "https://www.fao.org/giews/earthobservation/index.jsp" };
const QGIS = { name: "QGIS (mmemme GIS n'efu, open-source)", url: "https://qgis.org/" };
const ODM = { name: "OpenDroneMap (mmemme n'efu, open-source, maka ime map site na drone)", url: "https://www.opendronemap.org/" };
const FAO_ITU_DRONES = { name: "FAO na ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO na WHO: Ntụziaka maka ịgba ọgwụ ahụhụ site n'ikuku (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-data-precision-ig",
  lang: "ig",
  translationOf: "agri-drones-data-precision",
  category: "Agriculture (Africa)",
  name: "Drone n'Ugbo: Nnyocha Data na Ọrụ Ugbo Ziri Ezi (Precision Agriculture)",
  skills: "Ịlele izi ezi nke map drone, Ịhọrọ index ahịhịa kwesịrị ekwesị, Ime zonal statistics na ịgụ osisi na QGIS, Ime prescription map, Ịmata ma precision agriculture ọ na-akwụ ụgwọ, Ịkọrọ ndị ọrụ ugbo ihe a chọpụtara",
  outcome: "ịgbanwe data drone ka ọ bụrụ nnyocha a lelere nke ọma, nwere ọnụọgụ nke mpaghara (zone) ọ bụla na prescription map, ịmata ma ime ihe ahụ ọ ga-akwụ ụgwọ, na inye onye ọrụ ugbo ma ọ bụ onye na-elekọta nnukwu ugbo (estate) ihe a chọpụtara n'ụdị ọ ga-eji mee ihe.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-enyocha data drone, ndị ọkachamara n'ọrụ ugbo (agronomists), ndị ndụmọdụ ugbo (extension), ndị azụmahịa ugbo na ndị na-elekọta nnukwu ugbo (estate), na azụmahịa na-enye ọrụ drone na Kenya, Naịjirịa na Afrịka niile. Ị kwesịrị ịmarala ijikọ foto drone ka ọ bụrụ map na ime map NDVI dị mfe (lee usoro nlekota, Ihe ọmụmụ 3).",
    "Isi 1 bụ nnyocha data: ịhụ na map ziri ezi nke ọma tupu e jiri ya mee ihe, ịhọrọ n'etiti index ahịhịa dị iche iche, na ịtụ mpaghara na ịgụ osisi ma ọ bụ ihe ọkụkụ na QGIS. Isi 2 bụ precision agriculture: ime prescription map site na nnyocha gị, ịlele ego site na partial budget dị mfe, na igosi ihe a chọpụtara ka ndị ọrụ ugbo mee ihe.",
    "Ọmụmaatụ ndị a na-eji ọka na agwa, tii, kọfị, ube oyibo (avocado) na akpụ. Ọnụọgụ fatịlaịza na mkpụrụ dị n'ihe ọmụmụ a bụ naanị ihe nnọchi: ezi ọnụọgụ na-esi n'ule ala, nchọcha obodo na ndụmọdụ extension. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Jiri data drone nke ezi ubi ma ọ bụ ihe atụ n'efu: kwuo otu map ahụ si ziri ezi na otu i siri lelee ya; họrọ index ahịhịa ma kọwaa ihe mere; kewaa ubi ahụ n'ime mpaghara ma kọọ ọnụọgụ mpaghara ọ bụla (oke ala na nkezi index) na ọnụọgụ ihe ọkụkụ ma ọ bụ osisi; mee prescription map nwere ọnụọgụ ma ọ bụ ọrụ maka mpaghara ọ bụla (jiri ọnụọgụ a tụrụ aro n'obodo gị); gbakọọ partial budget dị mfe na-egosi ma ọ na-akwụ ụgwọ; ma dee otu peeji maka onye ọrụ ugbo n'okwu dị mfe.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-enyocha data drone, ndị agronomists, ndị ndụmọdụ ugbo (extension), ndị azụmahịa ugbo na ndị na-elekọta nnukwu ugbo, na azụmahịa na-enye ọrụ drone na Kenya, Naịjirịa na Afrịka niile, ndị na-arụ ọrụ na ihe ọkụkụ dị ka ọka na agwa, tii, kọfị, ube oyibo na akpụ.",
    startingPoint: "Ndị na-amụ ihe maralarị ijikọ foto drone ka ọ bụrụ map na ime map NDVI dị mfe. Ole na ole na-elele ma map ọ dị n'ebe ziri ezi, na-ahọrọ index dabara ihe ọkụkụ na ọkwa uto ya, na-agbanwe map ka ọ bụrụ ọnụọgụ mpaghara, na-eme prescription map, na-alele ma ọ na-akwụ ụgwọ, ma ọ bụ na-egosi ihe a chọpụtara ka onye ọrụ ugbo mee ihe.",
    gap: "Naanị map nwere agba anaghị agbanwekarị ihe na-eme n'ubi, map na-ezighi ezi ma ọ bụ index na-ezighi ezi nwekwara ike iziga ndị ọrụ na ihe a na-etinye n'ala n'ebe na-ezighi ezi. Ịgbanwe data drone ka ọ bụrụ ọnụọgụ a lelere, prescription bara uru na partial budget nke eziokwu na-enyere ndị ọrụ ugbo na nnukwu ugbo aka itinye ihe n'ebe ọ na-akwụ ụgwọ, ma tụkwasị ọrụ drone obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa index na okwu map ọ bụla",
      "Ngwaọrụ: laptọọpụ nwere QGIS n'efu na data drone ma ọ bụ data ihe atụ n'efu",
      "Ọnụọgụ bụ naanị ihe nnọchi: ezi ọnụọgụ fatịlaịza na mkpụrụ na-esi n'ule ala, nchọcha obodo na extension",
      "Ịgba ọgwụ ma ọ bụ ịfesa ihe site na drone chọrọ ikike ụgbọelu na ikike ọgwụ ahụhụ",
      "Data ndị ọrụ ugbo bụ nzuzo, a na-ekesa ya naanị site n'ikike ha"
    ],
    prerequisites: "\"Drone maka Nlekọta Ugbo 3: Ahụike Ihe Ọkụkụ, Ụmụ Ahụhụ na Nhazi Data\" (ijikọ map na ime map NDVI)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị map drone e jikọrọ ọnụ na akụkọ nhazi ya (processing report)", action: "ịlele ma map ahụ dị n'ebe ziri ezi na ịdị mma foto ya, ma kọọ mperi ahụ", standard: "site n'iji check points ma ọ bụ ụzọ a kpọrọ aha, tupu nnyocha ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị ihe ọkụkụ, ọkwa uto ya na igwefoto e ji mee ya", action: "ịhọrọ index ahịhịa ma kọwaa ihe mere o ji dabara", standard: "ma kwado ya site na map agba ezi ụwa (true-colour) na n'ubi n'onwe ya" },
    { id: "O3", condition: "Site n'iji QGIS na map index", action: "ime mpaghara ma kọọ oke ala na nkezi index nke mpaghara ọ bụla, ma gụọ ihe ọkụkụ ma ọ bụ osisi", standard: "ebe e lelere ọnụọgụ ahụ n'ihe atụ n'ubi ma kọọ mperi ya" },
    { id: "O4", condition: "Mgbe e nyere gị mpaghara na ihe kpatara ha nke e lelere n'ubi", action: "ime prescription map nwere ọnụọgụ ma ọ bụ ọrụ maka mpaghara ọ bụla", standard: "site n'iji ọnụọgụ abụọ ruo anọ e si n'ule ala ma ọ bụ ndụmọdụ obodo" },
    { id: "O5", condition: "Maka ihe precision a tụrụ aro ime", action: "ịgbakọ partial budget nwere ọnọdụ nlezianya (cautious) na ọnọdụ o yiri ka ọ ga-eme (likely)", standard: "na-agụ naanị ihe na-agbanwe, ma kwuo eziokwu ma ọ bụrụ na ọ naghị akwụ ụgwọ" },
    { id: "O6", condition: "Maka onye ọrụ ugbo ma ọ bụ onye na-elekọta nnukwu ugbo", action: "ide obere akụkọ na-ebute ụzọ n'ihe a ga-eme, n'asụsụ ha na n'ọnụọgụ ha na-eji", standard: "na-egosi otu i ji n'aka na ihe e lelere n'ubi" }
  ],
  chapters: [
    {
      name: "Isi 1: Nnyocha data",
      lessons: [
        {
          objectives: ["O1"],
          title: "Map a ọ ziri ezi nke ọma ka e jiri ya mee ihe?",
          minutes: 6,
          goal: "Lelee ma map drone ọ dị n'ebe ziri ezi na ịdị mma foto ya tupu i nyochaa ya.",
          text: [
            "Tupu i ziga ndị ọrụ n'otu mpaghara, ị ga-atụkwasị obi na map ahụ na-etinye ihe n'ebe ziri ezi. GNSS nkịtị nke drone (dị ka GPS) nwere ike ime ka map pụọ mita ole na ole. Nke ahụ adịghị njọ maka ịchọta akụkụ ubi mmiri juru, mana ọ dabaghị maka iduzi ọrụ n'otu ahịrị ma ọ bụ ịtụnyere map ụbọchị dị iche iche.",
            "Ụzọ atọ isi mee ka ọ ka ziri ezi ma lelee ya: ground control points (GCPs), akara n'ala nke ị na-atụ ebe ha dị site na igwe GNSS ziri ezi ma jiri ha n'oge nhazi; drone nwere RTK ma ọ bụ PPK, nke na-edozi ebe ọ dị n'oge ma ọ bụ mgbe ọ fechara; na check points, akara ndị ọzọ a tụrụ ma e jighị ha n'oge nhazi, e ji ha anwale map ikpeazụ. Kọọ mperi ahụ ị tụrụ.",
            "Lelekwa ịdị mma: akụkọ nhazi (ọnụọgụ foto e jiri, ịdọ aka na ntị ọ bụla), ezi nkọwa foto ahụ (GSD), ịdị nzu nzu (blur), oghere na mperi njikọ. Maka map ị ga-atụnyere n'oge dị iche iche, jiri otu ụzọ ahụ oge ọ bụla ma hụ na ha dabara n'elu ibe ha."
          ],
          steps: ["Gụọ akụkọ nhazi: foto e jiri, ịdọ aka na ntị, GSD.", "Chọọ ịdị nzu nzu, oghere na mperi njikọ.", "Tụọ mperi ebe ọ dị na check points (ma ọ bụ tụnyere ya na ihe a maara).", "Kpebie ma izi ezi ahụ dabara mkpebi ahụ.", "Maka map n'oge dị iche iche, lelee na ha dabara n'elu ibe ha."],
          words: [["Ground control point (GCP)", "akara n'ala nwere ebe a tụrụ nke ọma, e ji edozi ebe map dị."], ["RTK / PPK", "ụzọ e ji edozi ebe drone dị n'oge ọ na-efe (RTK) ma ọ bụ mgbe o fechara (PPK) ka ọ zie ezi nke ukwuu."], ["Check point", "akara a tụrụ, e ji naanị ya anwale izi ezi map."], ["Akụkọ nhazi (processing report)", "nchịkọta mmemme njikọ map na-ewepụta banyere ịdị mma map."]],
          slides: [
            { title: "Tụkwasị obi tupu i mee ihe", bullets: ["GNSS nkịtị: mita ole na ole pụọ", "Ọ dị mma maka mpaghara, ọ bụghị maka otu ahịrị", "Map n'oge dị iche iche ga-adaba"] },
            { title: "Mee ka ọ ka ziri ezi", bullets: ["Ground control points (GCPs)", "Drone nwere RTK ma ọ bụ PPK", "Check points iji nwalee ihe e nwetara"] },
            { title: "Lelee ịdị mma", bullets: ["Akụkọ nhazi na ịdọ aka na ntị", "Ezi GSD, ịdị nzu nzu, oghere", "Otu ụzọ ahụ ụbọchị ọ bụla"] }
          ],
          sources: [ODM],
          tryIt: "Meghee akụkọ nhazi nke map i mere (ma ọ bụ akụkọ nke data ihe atụ). Dee ọnụọgụ foto e jiri, GSD, ịdọ aka na ntị ọ bụla, ma kpebie ma map ahụ ziri ezi nke ọma iji (a) chọta ebe mmiri juru, (b) duzie ịkụgharị otu ahịrị.",
          youCanNow: "ịlele izi ezi na ịdị mma map drone ma kpebie ma ọ dabara mkpebi ahụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka e ji check points eme?", options: ["Ịnwale izi ezi map ikpeazụ, n'ihi na e jighị ha n'oge nhazi", "Ịdọda drone n'ala n'enweghị nsogbu", "Ịchaji batrị n'ubi", "Ịkara ebe ndị ọrụ na-amalite"], answer: 0, why: "Check points bụ akara ndị ọzọ a tụrụ ma e debere ha n'akụkụ n'oge nhazi, ka i wee tụọ ezi mperi map ahụ." },
            { objective: "O1", q: "Ị ga-atụnyere map ọnwa a na nke ọnwa gara aga iji duzie ọrụ n'otu ahịrị. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Naanị agba", "Ahụike batrị drone", "Na map abụọ ahụ ziri ezi ma dabara n'elu ibe ha", "Ọ dịghị ihe; GNSS nkịtị na-ezu mgbe niile"], answer: 2, why: "GNSS nkịtị nwere ike ịpụ mita ole na ole, ya mere map e ji maka ahịrị ma ọ bụ n'oge dị iche iche ga-ezi ezi ma dabara." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhọrọ index ahịhịa kwesịrị ekwesị",
          minutes: 6,
          goal: "Họrọ index ahịhịa dabara ihe ọkụkụ, ọkwa uto ya na igwefoto.",
          text: [
            "NDVI = (NIR - Red) / (NIR + Red) bụ index a kacha mara; FAO na-eji ya site na satịlaịtị iji soro ahịhịa ndụ na Afrịka niile. Mana NDVI na-ejupụtakarị (saturate) n'ihe ọkụkụ juru eju na nwere ahụike, dị ka ọka tozuru etozu, tii ma ọ bụ kọfị: ọnụọgụ ya na-agbakọ n'elu, obere ọdịiche na-apụkwa n'anya.",
            "NDRE na-eji red-edge kama red: (NIR - RedEdge) / (NIR + RedEdge). Ọ na-anọgide na-ahụ ọdịiche n'ihe ọkụkụ juru eju, ọ na-egosikarị ọdịiche nitrogen na chlorophyll n'oge ikpeazụ nke afọ ọrụ ugbo. Ọ bụrụ na i nwere naanị igwefoto agba (RGB), index dị ka VARI, (Green - Red) / (Green + Red - Blue), ma ọ bụ Excess Green, 2 x Green - Red - Blue, na-ekewa ahịhịa ndụ na ala ma gosi ike uto n'ozuzu; ha bara uru maka ọnụọgụ ihe ọkụkụ (stand) na ahịhịa ọjọọ, mana ha anaghị ekwe nkwa maka nsogbu ihe ọkụkụ.",
            "Họrọ dabere n'ajụjụ ahụ: maka stand na ahịhịa ọjọọ n'oge mmalite, index RGB ma ọ bụ NDVI; maka ike uto n'etiti oge n'ihe ọkụkụ mepere emepe, NDVI; maka ihe ọkụkụ juru eju na nitrogen, NDRE. Ihe ọ bụla ị họọrọ, lelekwa map agba ezi ụwa (true-colour), ma kwado ya n'ubi."
          ],
          words: [["Saturation (ijupụta)", "mgbe index kwụsịrị ịgbanwe ọ bụ ezie na ihe ọkụkụ ka dị iche, dị ka NDVI na-eme n'ihe ọkụkụ juru eju."], ["Red edge", "obere akụkụ ìhè dị n'etiti red na near-infrared (NIR), nke na-ahụ chlorophyll nke ọma."], ["NDRE", "Normalized Difference Red Edge index, nke na-ahụ ọdịiche karịa NDVI n'ihe ọkụkụ juru eju."], ["VARI", "Visible Atmospherically Resistant Index, index ahịhịa e ji naanị agba RGB mee."]],
          slides: [
            { title: "NDVI na oke ya", bullets: ["(NIR - Red) / (NIR + Red)", "A na-eji ya ebe niile, gụnyere FAO", "Ọ na-ejupụta n'ihe ọkụkụ juru eju"] },
            { title: "Index ndị ọzọ", bullets: ["NDRE: (NIR - RedEdge) / (NIR + RedEdge)", "VARI: (G - R) / (G + R - B)", "Excess Green: 2G - R - B"] },
            { title: "Họrọ dabere n'ajụjụ", bullets: ["Stand na ahịhịa ọjọọ: index RGB ma ọ bụ NDVI", "Ihe ọkụkụ mepere emepe n'etiti oge: NDVI", "Ihe ọkụkụ juru eju na nitrogen: NDRE"] }
          ],
          sources: [FAO_EO, QGIS],
          tryIt: "Maka ọnọdụ ọ bụla, họrọ index ma dee ihe mere: (a) ịgụ stand n'ọka dị izu 3 site na drone RGB, (b) ọdịiche nitrogen n'ubi tii mechiri emechi site na drone multispectral, (c) ike uto n'etiti oge n'akpụ site na drone multispectral.",
          youCanNow: "ịhọrọ index ahịhịa dabara ihe ọkụkụ, ọkwa uto ya na igwefoto.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere NDVI nwere ike ịghara ịhụ obere ọdịiche n'ọka tozuru etozu, tii ma ọ bụ kọfị?", options: ["Ọ na-arụ ọrụ naanị n'abalị", "Ọ na-ejupụta n'ihe ọkụkụ juru eju nwere ahụike", "Ọ chọrọ igwefoto thermal", "Ọ na-eleghara near-infrared anya"], answer: 1, why: "N'ihe ọkụkụ juru eju nwere ahụike, ọnụọgụ NDVI na-agbakọ n'elu, obere ọdịiche na-apụkwa n'anya." },
            { objective: "O2", q: "I nwere naanị igwefoto RGB, ịchọrọ ịhụ stand ihe ọkụkụ n'oge mmalite. Kedu index ị ga-ahọrọ?", options: ["NDRE", "Index thermal", "Ọ dịghị nke ọ bụla; RGB enweghị ike inyere aka", "Index RGB dị ka VARI ma ọ bụ Excess Green"], answer: 3, why: "Index RGB na-ekewa ahịhịa ndụ na ala, ha dabakwara maka stand na ahịhịa ọjọọ n'oge mmalite." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Zonal statistics na ịgụ ọnụ na QGIS",
          minutes: 6,
          goal: "Tụọ oke ala na nkezi index nke mpaghara ọ bụla, ma gụọ ihe ọkụkụ ma ọ bụ osisi.",
          text: [
            "Nnyocha na-agbanwe map nwere agba ka ọ bụrụ ọnụọgụ ndị mmadụ nwere ike iji mee ihe. Nke mbụ, mee mpaghara: kewaa map index n'ime klas (dịka ọmụmaatụ ala, etiti, elu), wee gbanwee ha ka ha bụrụ polygon ma wepụ obere iberibe; ma ọ bụ jiri aka see mpaghara site n'ihe onye ọrụ ugbo maara. Gbakọọ oke ala mpaghara ọ bụla.",
            "Wee jiri QGIS Zonal Statistics gbakọọ, maka mpaghara ọ bụla, nkezi (mean), nke kacha nta (min), nke kacha ukwuu (max) na mgbasa nke index ahụ. Tụnyere mpaghara, ma tụnyere otu mpaghara ahụ n'ụbọchị dị iche iche. Tebụl dị ka Zone A: 3.2 ha, nkezi NDVI 0.71; Zone C: 0.8 ha, nkezi NDVI 0.48 dị mfe iji mee ihe karịa foto.",
            "Ịgụ ọnụ: maka osisi (ube oyibo, mangoro, kọfị), elu osisi na-apụtakarị nke ọma na map RGB nwere nkọwa dị elu, a pụkwara iji aka gụọ ha site na points, ma ọ bụ site na plugin na script. Maka ihe ọkụkụ n'ahịrị, gụọ n'obere ala ihe atụ (sample plots) wee mụbaa ya. Lelee mgbe niile ụfọdụ ọnụọgụ n'ubi ma kọọ mperi ya."
          ],
          steps: ["Kewaa map index n'ime klas ole na ole, ma ọ bụ see mpaghara ya na onye ọrụ ugbo.", "Gbanwee klas ka ha bụrụ polygon; wepụ obere iberibe; gbakọọ oke ala.", "Mee Zonal Statistics maka mean, min, max na mgbasa n'otu mpaghara.", "Gụọ osisi ma ọ bụ ihe ọkụkụ (points, plugin ma ọ bụ sample plots).", "Lelee ọnụọgụ n'ubi ma kọọ mperi ya."],
          words: [["Zonal statistics", "ọnụọgụ (dị ka nkezi) e gbakọrọ maka pixel dị n'ime mpaghara ọ bụla."], ["Polygon", "ụdị mechiri emechi na map, dị ka mpaghara ma ọ bụ oke ubi."], ["Ikewa (classify)", "ịchịkọta ọnụọgụ pixel n'ime klas ole na ole, dị ka ala, etiti na elu."]],
          slides: [
            { title: "Site n'agba ruo ọnụọgụ", bullets: ["Kewaa map index", "Gbanwee ya ka ọ bụrụ polygon mpaghara, wepụ iberibe", "Gbakọọ oke ala mpaghara ọ bụla"] },
            { title: "Zonal Statistics", bullets: ["Mean, min, max, mgbasa n'otu mpaghara", "Tụnyere mpaghara na ụbọchị", "Zone A: 3.2 ha, nkezi NDVI 0.71"] },
            { title: "Ịgụ ọnụ", bullets: ["Elu osisi na map RGB nwere nkọwa dị elu", "Ihe ọkụkụ n'ahịrị: sample plots, mụbaa ya", "Lelee n'ubi ma kọọ mperi"] }
          ],
          sources: [QGIS],
          tryIt: "Na QGIS jiri map gị ma ọ bụ ihe atụ: see ma ọ bụ kewaa mpaghara atọ, gbakọọ oke ala ha, mee Zonal Statistics n'index ahụ, ma mee tebụl nke mpaghara, oke ala na nkezi. Ọ bụrụ ubi osisi, gụọ osisi n'otu mpaghara.",
          youCanNow: "ịtụ mpaghara na ịgụ ihe ọkụkụ ma ọ bụ osisi na QGIS ma gosi ihe ọ pụtara na tebụl.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka tebụl zonal statistics na-enye gị?", options: ["Foto mara mma karị", "Oge drone fere", "Akwụkwọ ụgwọ onye ahịa", "Ọnụọgụ dị ka oke ala na nkezi index nke mpaghara ọ bụla"], answer: 3, why: "Zonal statistics na-agbanwe map nwere agba ka ọ bụrụ ọnụọgụ ndị mmadụ nwere ike iji mee ihe." },
            { objective: "O3", q: "Mmemme gị gụrụ osisi ube oyibo 1,240. Gịnị ka ị ga-eme tupu i kọọ ya?", options: ["Mee ya 1,000", "Lelee ụfọdụ ọnụọgụ n'ubi ma kọọ mperi ya", "Tinye 10% ka i wee nọrọ na nchekwa", "Kọọ ya n'eleleghị ya"], answer: 1, why: "A na-elele ọnụọgụ n'ihe atụ n'ubi ma kọọ mperi ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Nnyocha data",
        questions: [
          { objective: "O1", q: "Gịnị ka e ji check point eme?", options: ["Ịdozi map n'oge nhazi", "Ịnwale izi ezi map ikpeazụ", "Ịchaji batrị", "Ịdọda drone n'ala"], answer: 1, why: "A na-atụ check points mana e jighị ha n'oge nhazi, ya mere ha na-anwale ihe e nwetara." },
          { objective: "O1", q: "Map pụrụ ihe dị ka mita 3. Ọ ziri ezi nke ọma iji:", options: ["Duzie ịkụgharị otu ahịrị", "Tụọ otu otu ihe ọkụkụ", "Chọta akụkụ ubi mmiri juru", "Ọ dịghị ihe ọ bụla"], answer: 2, why: "Mperi mita ole na ole dị mma maka nnukwu ihe, ọ bụghị maka ahịrị." },
          { objective: "O2", q: "Gịnị mere NDVI nwere ike igosi obere ọdịiche n'ubi tii tozuru etozu juru eju?", options: ["NDVI na-ejupụta n'ihe ọkụkụ juru eju", "Tii enweghị akwụkwọ", "Drone fere n'ala nke ukwuu", "NDVI na-arụ ọrụ naanị n'ala"], answer: 0, why: "Ọnụọgụ na-agbakọ n'elu n'ahịhịa juru eju." },
          { objective: "O2", q: "Kedu index e nwere ike ịgbakọ site naanị n'igwefoto RGB?", options: ["NDRE", "NDVI", "Ọ dịghị nke ọ bụla", "VARI"], answer: 3, why: "VARI na-eji naanị green, red na blue." },
          { objective: "O3", q: "QGIS Zonal Statistics na-enye gị:", options: ["Amụma ihu igwe", "Ọnụọgụ dị ka nkezi index nke mpaghara ọ bụla", "Akwụkwọ ikike ịnya drone", "Ọnụahịa mkpụrụ"], answer: 1, why: "Ọ na-achịkọta ọnụọgụ pixel dị n'ime mpaghara ọ bụla." }
        ]
      }
    },
    {
      name: "Isi 2: Ọrụ ugbo ziri ezi (precision agriculture)",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime prescription map",
          minutes: 6,
          goal: "Gbanwee mpaghara ka ọ bụrụ prescription map nwere ọnụọgụ ma ọ bụ ọrụ maka mpaghara ọ bụla.",
          text: [
            "Prescription map na-agwa igwe ma ọ bụ onye ọrụ ihe a ga-eme na mpaghara ọ bụla. Malite n'ihe kpatara ya, ọ bụghị n'agba: jiri nlele n'ubi (ground-truthing) na, ebe o kwere omume, ule ala iji mata ihe mere mpaghara ọ bụla ji dị iche. Wee họrọ ihe a ga-eme n'otu mpaghara: fatịlaịza karịa ma ọ bụ belata, ọnụọgụ mkpụrụ dị iche, ịkụgharị, ịwapụ mmiri, ịkpa ahịhịa, ma ọ bụ enweghị mgbanwe.",
            "Ọnụọgụ na-esi n'agronomy, ọ bụghị site na drone. Jiri ihe ule ala gosiri na ndụmọdụ obodo site n'ụlọ ọrụ nchọcha mba gị ma ọ bụ ọrụ extension maka ihe ọkụkụ ahụ na mpaghara ahụ. Map na-ekwu naanị ebe ọnụọgụ ọ bụla ga-aga. Mee ka ọnụọgụ dị ole na ole (abụọ ruo anọ) ka ọ dị mfe ime.",
            "Maka igwe, wepụta mpaghara dị ka shapefile ma ọ bụ ụdị faịlụ igwe nchịkwa (controller) ahụ na-anabata. Maka itinye ya n'aka, bipụta ma ọ bụ kesaa map mpaghara dị mfe nwere ntụziaka mpaghara ọ bụla na gram n'otu olulu ọkụkụ ma ọ bụ akpa n'otu mpaghara, ma kaa mpaghara ahụ akara n'ubi. Prescription ịgba ọgwụ ma ọ bụ ịfesa ihe site na drone chọrọ ikike ụgbọelu na ikike ọgwụ ahụhụ mba gị chọrọ."
          ],
          steps: ["Kwado ihe kpatara ya na mpaghara ọ bụla (nlele n'ubi, ule ala).", "Họrọ ihe a ga-eme n'otu mpaghara.", "Were ọnụọgụ site n'ule ala na ndụmọdụ obodo.", "Debe ọnụọgụ abụọ ruo anọ.", "Wepụta ya maka igwe, ma ọ bụ mee map mpaghara e bipụtara nwere ntụziaka maka ndị ọrụ."],
          words: [["Prescription map", "map na-agwa igwe ma ọ bụ onye ọrụ ole a ga-etinye, ma ọ bụ ihe a ga-eme, na mpaghara ọ bụla."], ["Shapefile", "ụdị faịlụ GIS a na-ejikarị maka mpaghara na oke."], ["Ule ala (soil test)", "nnyocha ụlọ nyocha (laboratory) nke nri dị n'ala na asịd ya."]],
          slides: [
            { title: "Malite n'ihe kpatara ya", bullets: ["Lelee mpaghara ọ bụla n'ubi", "Ule ala ebe o kwere omume", "Wee họrọ ihe a ga-eme"] },
            { title: "Ọnụọgụ na-esi n'agronomy", bullets: ["Ule ala na ndụmọdụ obodo", "Map na-ekwu ebe, ọ bụghị ole", "Ọnụọgụ abụọ ruo anọ"] },
            { title: "Nyefee ya", bullets: ["Igwe: shapefile ma ọ bụ ụdị faịlụ controller", "Ọrụ aka: map e bipụtara, gram n'otu olulu", "Ịgba ọgwụ ma ọ bụ ịfesa site na drone: chọrọ ikike"] }
          ],
          sources: [FAO_WHO_AERIAL, QGIS],
          tryIt: "Jiri mpaghara atọ gị site na Nkuzi 3, dee tebụl prescription: mpaghara, oke ala, ihe o yiri ka ọ kpatara ya, ihe a ga-eme, ọnụọgụ (dee \"site na ndụmọdụ obodo\" ma ọ bụrụ na i nweghị ya), na otu ndị ọrụ ga-esi chọta mpaghara ahụ.",
          youCanNow: "ime prescription map bara uru nwere ọnụọgụ ma ọ bụ ọrụ maka mpaghara ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka prescription map na-egosi?", options: ["Naanị agba NDVI", "Oke ugbo ahụ", "Ihe a ga-etinye ma ọ bụ mee na mpaghara ọ bụla", "Ahịrị drone fere"], answer: 2, why: "Prescription map na-agwa igwe ma ọ bụ onye ọrụ ihe a ga-eme na mpaghara ọ bụla." },
            { objective: "O4", q: "Otu mpaghara dị ka ọ dị ike na map. Gịnị ka ị ga-eme tupu ịhọrọ ihe a ga-eme?", options: ["Chọta ihe kpatara ya site na nlele n'ubi na, ebe o kwere omume, ule ala", "Tinye fatịlaịza okpukpu abụọ ebe ahụ", "Kụgharịa ya ozugbo", "Leghara ya anya"], answer: 0, why: "Malite n'ihe kpatara ya, ọ bụghị n'agba; ihe a ga-eme dabere n'ihe mere mpaghara ahụ ji dị iche." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ọ na-akwụ ụgwọ? Partial budget dị mfe",
          minutes: 6,
          goal: "Jiri partial budget mata ma ihe precision ọ na-akwụ ụgwọ.",
          text: [
            "Partial budget na-atụnyere naanị ihe na-agbanwe. N'otu akụkụ: ego ọzọ na-abata (ihe ubi ọzọ e rere) na ego echekwara (fatịlaịza belatara ebe ọ na-efu efu). N'akụkụ nke ọzọ: ụgwọ ọzọ (ọrụ drone, ihe ọzọ a na-etinye n'ụfọdụ mpaghara, ọrụ aka) na ego furu efu. Ọ bụrụ na akụkụ mbụ ka ukwuu, mgbanwe ahụ na-akwụ ụgwọ.",
            "Ọmụmaatụ nwere ọnụọgụ nnọchi na shilling Kenya: ugbo ọka nwere hectare 4 na-akwụ KSh 6,000 maka ime map. Prescription ahụ na-ebuga akpa fatịlaịza 2 site na mpaghara hectare 1 mmiri juru, ebe ọ na-efu efu, gaa na mpaghara nkịtị nwere hectare 2, ya mere a zụtaghị fatịlaịza ọzọ, onye ọrụ ugbo na-atụkwa anya akpa ọka 5 ọzọ site na mpaghara ahụ. Uru: akpa 5 x ọnụahịa otu akpa n'obodo. Ụgwọ: KSh 6,000 maka map + ọrụ aka iji gwuo olulu mmiri. Jiri ezi ọnụahịa obodo na atụmanya ihe ubi nke nlezianya.",
            "Gosi oke, n'ihi na ihe ubi na ọnụahịa na-agbanwe: ọnọdụ nlezianya (cautious) na ọnọdụ o yiri ka ọ ga-eme (likely). Gụọkwa uru ndị siri ike itinye ọnụahịa, dị ka ịmata ọbịbịa fall armyworm n'oge. Kwuo eziokwu ma ọ bụrụ na ọnụọgụ anaghị akwụ ụgwọ n'obere ugbo; otu nkwado (cooperative) ma ọ bụ ọrụ a na-ekerịta nwere ike ịgbanwe azịza ahụ."
          ],
          steps: ["Depụta ego ọzọ na-abata na ego echekwara.", "Depụta ụgwọ ọzọ na ego furu efu.", "Jiri ọnụahịa obodo na atụmanya ihe ubi nke nlezianya.", "Gbakọọ ọnọdụ nlezianya na ọnọdụ o yiri ka ọ ga-eme.", "Dee azịza ahụ n'eziokwu, na ihe nwere ike ịgbanwe ya."],
          words: [["Partial budget", "ntụnyere dị mfe nke naanị ụgwọ na uru na-agbanwe mgbe ị gbanwere otu ihe."], ["Break-even", "ebe uru ọzọ ha nhata na ụgwọ ọzọ."]],
          slides: [
            { title: "Naanị ihe na-agbanwe", bullets: ["Gbakwunye: ego ọzọ na-abata, ego echekwara", "Wepụ: ụgwọ ọzọ, ego furu efu", "Gbakwunye karịrị wepụ = ọ na-akwụ ụgwọ"] },
            { title: "Jiri ezi ọnụọgụ", bullets: ["Ọnụahịa obodo n'otu akpa ma ọ bụ kg", "Atụmanya ihe ubi nke nlezianya", "Ọrụ drone, ihe a na-etinye, ọrụ aka"] },
            { title: "Kwuo eziokwu", bullets: ["Ọnọdụ nlezianya na nke o yiri ka ọ ga-eme", "Gụọ uru siri ike itinye ọnụahịa", "Obere ugbo? Ọrụ a na-ekerịta nwere ike inyere aka"] }
          ],
          tryIt: "Mee partial budget maka ọmụmaatụ ahụ site n'iji ezi ọnụahịa site n'ahịa obodo gị (ọnụahịa ọka n'otu akpa, ọnụahịa fatịlaịza n'otu akpa, ụgwọ ọrụ aka n'otu ụbọchị). Gbakọọ ọnọdụ nlezianya (akpa 3 ọzọ) na ọnọdụ o yiri ka ọ ga-eme (akpa 5 ọzọ). Ọ na-akwụ ụgwọ?",
          youCanNow: "iji partial budget gosi ma ihe precision ọ na-akwụ ụgwọ.",
          quickCheck: [
            { objective: "O5", q: "Na partial budget, kedu nke bụ ụgwọ?", options: ["Ụgwọ ọrụ ime map site na drone", "Ihe ubi ọzọ e rere", "Ego fatịlaịza echekwara", "Ọnụahịa ka elu maka owuwe ihe ubi"], answer: 0, why: "Ụgwọ ọzọ dị ka ọrụ drone na ọrụ aka na-aga n'akụkụ ụgwọ." },
            { objective: "O5", q: "Ọnọdụ o yiri ka ọ ga-eme na-akwụ ụgwọ, mana ọnọdụ nlezianya na-efu ego. Gịnị ka ị ga-agwa onye ọrụ ugbo?", options: ["Naanị ọnọdụ o yiri ka ọ ga-eme", "Na ọ na-akwụ ụgwọ mgbe niile", "Ọnọdụ abụọ ahụ n'eziokwu, na ihe na-akpata ọdịiche ahụ", "Ọ dịghị ihe gbasara ego"], answer: 2, why: "Ihe ubi na ọnụahịa na-agbanwe, ya mere ị na-egosi oke ma kwuo eziokwu mgbe ọnụọgụ dị nso." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọrọ ihe a chọpụtara ka ndị ọrụ ugbo mee ihe",
          minutes: 5,
          goal: "Gosi ihe nnyocha chọpụtara n'ụdị dị mkpụmkpụ ma doo anya nke onye ọrụ ugbo ga-eji mee ihe.",
          text: [
            "Nnyocha kacha mma na-efu efu ma ọ bụrụ na onye ọrụ ugbo aghọtaghị ya ma ọ bụ tụkwasị ya obi. Bute ụzọ n'azịza na ihe a ga-eme: \"Zone C (akụkụ dị ala n'akụkụ ụzọ, ihe dị ka acre 2) mmiri juru. Gwuo olulu mmiri tupu itinye fatịlaịza nke abụọ (topdressing). Etinyela fatịlaịza ebe ahụ n'oge ọrụ ugbo a.\" Wee gosi map nwere mpaghara n'agba dị mfe na ihe ndị a ma ama (landmarks).",
            "Jiri ụzọ na asụsụ onye ọrụ ugbo na-eji: peeji e bipụtara, foto na obere ozi na WhatsApp ma ọ bụ SMS, ma ọ bụ ozi olu (voice note) n'asụsụ Kiswahili, Hausa, Yoruba, Igbo ma ọ bụ asụsụ obodo ọzọ. Jiri ọnụọgụ obodo (acre, akpa, debe) yana hectare na kilogram. Mee ka ọnụọgụ dị ole na ole.",
            "Gosi otu i ji n'aka, na ihe e kwadoro n'ubi. Kwe nkwa ka unu soro jegharịa n'ubi ahụ. Kwekọrịta ihe a ga-elele oge ọzọ, ma dee ihe onye ọrụ ugbo mere, ka nnyocha ọzọ wee gosi ma ọ rụrụ ọrụ. Debe data ndị ọrụ ugbo na nzuzo ma kesaa ya naanị site n'ikike ha."
          ],
          steps: ["Dee azịza na ihe a ga-eme na mbụ, mpaghara n'otu mpaghara.", "Gosi map dị mfe nwere ihe ndị a ma ama.", "Jiri ụzọ, asụsụ na ọnụọgụ onye ọrụ ugbo.", "Kwuo otu i ji n'aka na ihe e kwadoro.", "Kwekọrịta nlele nsochi ma dee ihe onye ọrụ ugbo mere."],
          words: [["Ihe a ma ama (landmark)", "ihe ndị mmadụ maara, dị ka ụzọ, osisi, ụlọ ahịa ma ọ bụ osimiri, e ji achọta ebe."], ["Nsochi (follow-up)", "nlele e mere mgbe e mesịrị iji hụ ma ihe ahụ rụrụ ọrụ."]],
          slides: [
            { title: "Azịza na ihe a ga-eme na mbụ", bullets: ["Zone C, akụkụ dị ala n'akụkụ ụzọ", "Gwuo olulu mmiri tupu topdressing", "Wee gosi map"] },
            { title: "Ụzọ ha, asụsụ ha", bullets: ["Peeji e bipụtara, WhatsApp, SMS, voice note", "Kiswahili, Hausa, Yoruba, Igbo na ndị ọzọ", "Acre, akpa, debe yana hectare"] },
            { title: "Wulite ntụkwasị obi", bullets: ["Kwuo otu i ji n'aka", "Jegharịa n'ubi ọnụ", "Kwekọrịta nsochi; debe data na nzuzo"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Ọrụ ikpeazụ: mechaa nnyocha gị ma dee otu peeji maka onye ọrụ ugbo: izi ezi na otu e siri lelee ya, index na ihe mere, tebụl mpaghara na ọnụọgụ, prescription map, partial budget, na ihe a ga-eme n'okwu dị mfe nwere ụbọchị nsochi.",
          youCanNow: "inye nnyocha drone dị ka ihe a ga-eme doro anya, a tụkwasịrị obi, nke onye ọrụ ugbo nwere ike ịgbaso.",
          quickCheck: [
            { objective: "O6", q: "Kedu otu akụkọ onye ọrụ ugbo kwesịrị isi malite?", options: ["Site n'usoro mgbakọ index", "Site n'azịza na ihe a ga-eme", "Site n'ụdị drone", "Site na tebụl dị ogologo"], answer: 1, why: "Ịbute ụzọ n'azịza na ihe a ga-eme na-enyere onye ọrụ ugbo aka ime ihe." },
            { objective: "O6", q: "Onye ọrụ ugbo na-agụ Kiswahili ma na-eji WhatsApp. Kedu otu ị ga-esi ziga ya akụkọ ahụ?", options: ["PDF ogologo n'asụsụ bekee site na email", "Faịlụ data a na-ahazibeghị", "Ọ dịghị ihe; gwa naanị ọfịs estate", "Foto map mpaghara na obere ozi ma ọ bụ voice note n'asụsụ Kiswahili"], answer: 3, why: "Jiri ụzọ na asụsụ onye ọrụ ugbo na-eji, na ọnụọgụ ole na ole na ọnụọgụ obodo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ọrụ ugbo ziri ezi (precision agriculture)",
        questions: [
          { objective: "O4", q: "Ebee ka ọnụọgụ fatịlaịza na prescription map kwesịrị isi bịa?", options: ["Naanị agba map drone", "Ule ala na ndụmọdụ agronomy obodo", "Ichepụta echepụta", "Onye mere drone"], answer: 1, why: "Map na-egosi ebe; agronomy na-ekpebi ole." },
          { objective: "O4", q: "Ọnụọgụ ole bara uru n'ọtụtụ prescription map?", options: ["Abụọ ruo anọ", "Iri ise", "Otu n'otu ihe ọkụkụ", "Ọ dịghị nke ọ bụla"], answer: 0, why: "Ọnụọgụ ole na ole dị mfe ka ndị ọrụ na igwe tinye." },
          { objective: "O5", q: "Partial budget na-atụnyere:", options: ["Ụgwọ ugbo niile maka afọ iri", "Naanị ụgwọ na uru na-agbanwe", "Naanị ọnụahịa drone", "Naanị ọnụahịa ihe ubi"], answer: 1, why: "Ọ na-elekwasị anya n'ihe mgbanwe ahụ na-agbakwunye ma ọ bụ na-ewepụ." },
          { objective: "O6", q: "Kedu ahịrị mmalite kacha mma maka akụkọ onye ọrụ ugbo?", options: ["Nkezi NDRE nke polygon 3 bụ 0.31", "Akụkọ nhazi nwere foto 412", "Anyị jiri QGIS 3", "Zone C n'akụkụ ụzọ mmiri juru: gwuo olulu mmiri tupu topdressing"], answer: 3, why: "Bute ụzọ n'azịza na ihe a ga-eme n'okwu a ma ama." },
          { objective: "O5", q: "Partial budget gosiri na mgbanwe ahụ anaghị akwụ ụgwọ n'ugbo acre 1. Ị kwesịrị:", options: ["Ịgbanwe ọnụọgụ ahụ", "Izochi ihe ọ gosiri", "Ikwu ya n'eziokwu ma tụlee ọrụ a na-ekerịta ma ọ bụ nke cooperative", "Ịmụba ọnụahịa okpukpu abụọ"], answer: 2, why: "Ihe e kwuru n'eziokwu na-ewulite ntụkwasị obi; ịkerịta nwere ike ịgbanwe ego ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone n'Ugbo: Nnyocha Data na Ọrụ Ugbo Ziri Ezi",
    questions: [
      { objective: "O1", q: "GNSS nkịtị nke drone na-etinyekarị map:", options: ["N'ebe ziri ezi kpam kpam", "Mita ole na ole pụọ", "Kilomita pụọ", "N'isi ala"], answer: 1, why: "Na-enweghị ndozi, mperi ebe ọ dị bụ mita ole na ole." },
      { objective: "O1", q: "Ground control points bụ:", options: ["Batrị drone", "Ndị ọrụ ubi", "Akara n'ala nwere ebe a tụrụ nke ọma", "Ụdị index"], answer: 2, why: "GCPs na-edozi ebe map dị n'oge nhazi." },
      { objective: "O1", q: "RTK na PPK bụ:", options: ["Ụzọ e ji edozi ebe drone dị ka ọ zie ezi nke ukwuu", "Ọrịa ihe ọkụkụ", "Ụdị fatịlaịza", "Aha ụdị igwefoto"], answer: 0, why: "Ha na-edozi ebe GNSS dị n'oge ma ọ bụ mgbe ụgbọ ahụ fechara." },
      { objective: "O1", q: "Gịnị mere map ụbọchị dị iche iche ga-eji dabara n'elu ibe ha?", options: ["Maka agba", "Iji chekwaa ebe nchekwa", "Mmemme na-achọ ya", "Iji tụnyere otu ebe ahụ n'oge dị iche iche"], answer: 3, why: "Map na-adabaghị na-egosi mgbanwe ụgha." },
      { objective: "O1", q: "Akụkọ nhazi na-agwa gị:", options: ["Ọnụahịa ihe ubi", "Foto e jiri, ịdọ aka na ntị na GSD", "Aha onye ọrụ ugbo", "Ihu igwe"], answer: 1, why: "Ọ na-achịkọta ịdị mma map e jikọrọ ọnụ." },
      { objective: "O2", q: "Ijupụta (saturation) NDVI pụtara:", options: ["Index ahụ kwụsịrị igosi ọdịiche n'ihe ọkụkụ juru eju", "Igwefoto ahụ mmiri dekwasịrị", "Batrị ahụ juru", "Map ahụ nwere oghere"], answer: 0, why: "Ọnụọgụ na-agbakọ n'elu n'ahịhịa juru eju." },
      { objective: "O2", q: "NDRE na-eji kedu akụkụ ìhè kama red?", options: ["Blue", "Thermal", "Red edge", "Green"], answer: 2, why: "NDRE = (NIR - RedEdge) / (NIR + RedEdge)." },
      { objective: "O2", q: "Excess Green (2G - R - B) bara uru maka:", options: ["Ịtụ pH ala", "Amụma ihu igwe", "Ịgụ ego", "Ikewa ahịhịa ndụ na ala na foto RGB"], answer: 3, why: "Ọ na-eme ka ahịhịa ndụ pụta ìhè n'ala." },
      { objective: "O2", q: "Maka ọdịiche nitrogen n'ubi kọfị juru eju, họrọ:", options: ["Excess Green", "NDRE", "Enweghị index", "Naanị thermal"], answer: 1, why: "NDRE na-anọgide na-ahụ ọdịiche ebe NDVI na-ejupụta." },
      { objective: "O2", q: "Index ọ bụla i ji, ị kwesịkwara:", options: ["Ilele map agba ezi ụwa ma kwado ya n'ubi", "Ihichapụ foto mbụ", "Ileghara onye ọrụ ugbo anya", "Iji naanị otu ụbọchị mgbe niile"], answer: 0, why: "Index bụ naanị ihe ngosi; nlele n'ubi na-akwado." },
      { objective: "O3", q: "Ịgbanwe pixel e kewara ka ha bụrụ mpaghara na-emepụta:", options: ["Batrị", "Naanị points", "Polygon", "Vidiyo"], answer: 2, why: "Mpaghara bụ polygon nwere oke ala." },
      { objective: "O3", q: "Gịnị mere a ga-eji wepụ obere iberibe na mpaghara?", options: ["Iji gbanwee ihe ọkụkụ", "Maka agba", "Iji jiri ebe nchekwa karịa", "Ndị ọrụ enweghị ike ilekọta obere ala nta"], answer: 3, why: "Mpaghara bara uru buru ibu nke ọma ka e mee ya ihe." },
      { objective: "O3", q: "Ọnụọgụ osisi site na map drone kwesịrị:", options: ["Ka e lelee ya n'ihe atụ n'ubi, ma kọọ mperi ya", "Ka a tụkwasị ya obi n'eleleghị ya", "Ka e mee ya okpukpu abụọ", "Ka e debe ya na nzuzo"], answer: 0, why: "Nlele n'ubi na-egosi otu ọnụọgụ ahụ si ziri ezi." },
      { objective: "O4", q: "Prescription map na-ekwu:", options: ["Drone ị ga-azụta", "Ihe a ga-etinye ma ọ bụ mee na mpaghara ọ bụla", "Ihu igwe", "Ego onye ọrụ ugbo na-enweta"], answer: 1, why: "Ọ na-eduzi ndị ọrụ ma ọ bụ igwe mpaghara n'otu mpaghara." },
      { objective: "O4", q: "Tupu ịhọrọ ihe a ga-eme maka mpaghara dị ike, ị kwesịrị:", options: ["Ịgba ya ọgwụ", "Itinye fatịlaịza kacha ukwuu", "Ịkwado ihe kpatara ya site na nlele n'ubi na ule ala", "Iwepụ ya na map"], answer: 2, why: "Ihe a ga-eme ga-edozi ezi ihe kpatara ya." },
      { objective: "O4", q: "Maka itinye ya n'aka, ụzọ kacha mma isi nye prescription bụ:", options: ["Naanị shapefile", "Ndepụta ọnụọgụ pixel", "Naanị spreadsheet nke coordinates", "Map mpaghara dị mfe nwere gram n'otu olulu ma ọ bụ akpa n'otu mpaghara"], answer: 3, why: "Ndị ọrụ chọrọ ntụziaka dị mfe, bara uru." },
      { objective: "O5", q: "Na partial budget, ego echekwara na fatịlaịza bụ:", options: ["Uru", "Ụgwọ", "Ọ dịghị ihe", "Ego furu efu"], answer: 0, why: "Ego echekwara dị n'akụkụ uru." },
      { objective: "O5", q: "Gịnị mere a ga-eji gbakọọ ọnọdụ nlezianya na ọnọdụ o yiri ka ọ ga-eme?", options: ["Iji mee onye ọrụ ugbo mgbagwoju anya", "N'ihi na ihe ubi na ọnụahịa na-agbanwe", "Iwu chọrọ ya", "Iji jiri akwụkwọ karịa"], answer: 1, why: "Oke na-egosi ihe egwu n'eziokwu." },
      { objective: "O6", q: "Kedu ọnụọgụ na-enyere ọtụtụ ndị ọrụ ugbo nta aka ịghọta ihe a chọpụtara?", options: ["Naanị kilomita square", "Naanị pixel", "Acre, akpa na debe yana hectare", "Naanị nkọwa sayensị"], answer: 2, why: "Ọnụọgụ a ma ama na-eme ka ihe a chọpụtara bara uru." },
      { objective: "O6", q: "Gịnị mere a ga-eji dee ihe onye ọrụ ugbo mere mgbe ndụmọdụ gị gasịrị?", options: ["Iji ree data ya", "Iji dejupụta fọm", "Ọ baghị uru", "Ka nnyocha ọzọ wee gosi ma ọ rụrụ ọrụ"], answer: 3, why: "Nsochi na-emechi okirikiri ahụ ma na-eme ka ndụmọdụ ka mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 5, 8, 10, 12, 13, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke nnyocha ma lelee ya ọzọ.",
    criteria: [
      { name: "Izi ezi map", objective: "O1", notYet: "Ọ dịghị izi ezi e kwuru, ma ọ bụ ọ dịghị nlele ịdị mma.", meets: "E kwuru izi ezi map ahụ na otu e siri lelee ya, e lelekwara ịdị mma foto n'akụkọ nhazi.", exceeds: "Jiri check points ma kọọ mperi a tụrụ." },
      { name: "Nhọrọ index", objective: "O2", notYet: "E kọwaghị ihe mere e ji họrọ index ahụ, ma ọ bụ ọ dabaghị ihe ọkụkụ ma ọ bụ igwefoto.", meets: "Index ahụ dabara ihe ọkụkụ, ọkwa uto na igwefoto, nwee obere nkọwa.", exceeds: "Tụnyere index abụọ ma gosi ihe mere e ji họrọ otu." },
      { name: "Mpaghara na ọnụọgụ", objective: "O3", notYet: "Ọ dịghị zonal statistics, ma ọ bụ e lelighị ọnụọgụ.", meets: "Oke ala na nkezi index nke mpaghara ọ bụla, na ọnụọgụ ihe ọkụkụ ma ọ bụ osisi e lelere n'ihe atụ n'ubi.", exceeds: "Tụnyere otu mpaghara ahụ n'ụbọchị abụọ." },
      { name: "Prescription map", objective: "O4", notYet: "E chepụtara ọnụọgụ ma ọ bụ ọnụọgụ dị ọtụtụ nke ukwuu.", meets: "Ọnụọgụ ma ọ bụ ọrụ abụọ ruo anọ n'otu mpaghara, site na ndụmọdụ obodo, jikọtara n'ihe kpatara ya e lelere n'ubi.", exceeds: "E wepụtara ya n'ụdị igwe ma ọ bụ ndị ọrụ nwere ike iji." },
      { name: "Partial budget", objective: "O5", notYet: "Ọ dịghị budget, ma ọ bụ ọ na-agụ ihe na-anaghị agbanwe.", meets: "Partial budget nwere ọnọdụ nlezianya na ọnọdụ o yiri ka ọ ga-eme, jiri ọnụahịa obodo.", exceeds: "Kwuru uru siri ike itinye ọnụahịa na mgbe ọrụ a na-ekerịta ga-enyere aka." },
      { name: "Akụkọ onye ọrụ ugbo", objective: "O6", notYet: "Ọ karịrị otu peeji ma ọ bụ ọ malitere n'ihe teknụzụ.", meets: "Otu peeji na-ebute ụzọ n'ihe a ga-eme, n'okwu dị mfe na ọnụọgụ obodo, na otu i ji n'aka.", exceeds: "E dere ya n'asụsụ na ụzọ onye ọrụ ugbo n'onwe ya, e kwekọrịtakwara nlele nsochi." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke nnyocha ahụ",
      "Ndị na-amụ ihe kwuru na ha nyere onye ọrụ ugbo ma ọ bụ estate prescription map ma ọ bụ akụkọ mpaghara n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị ọrụ ugbo ma ọ bụ estate kwuru na ha mere ihe dabere n'ihe drone chọpụtara ma dee ihe si na ya pụta",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ọzọ gbasara drone ma ọ bụ precision agriculture"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Laptọọpụ nwere QGIS n'efu etinyere n'ime ya",
      "Data drone site n'ezi ubi, ma ọ bụ data ihe atụ n'efu",
      "Ọnụọgụ a tụrụ aro n'obodo site na extension ma ọ bụ nchọcha, na ọnụahịa ihe a na-etinye na ihe ubi n'obodo",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge iji mechaa nnyocha na akụkọ onye ọrụ ugbo"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee nzọụkwụ zonal statistics n'anya mmadụ niile na QGIS site na otu data ihe atụ e kerịtara.",
      "Enyela ọnụọgụ fatịlaịza ma ọ bụ mkpụrụ n'onwe gị; were ọnụọgụ site na extension ma ọ bụ nchọcha maka ihe ọkụkụ obodo ahụ.",
      "Chetara ndị na-amụ ihe na prescription ịgba ọgwụ ma ọ bụ ịfesa site na drone chọrọ ikike ụgbọelu na ikike ọgwụ ahụhụ.",
      "Jiri naanị data ugbo onye ọrụ ugbo kwere ka e kesaa, ma wepụ aha n'ọmụmaatụ klas.",
      "Jiri rubric tụọ akara nnyocha ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
