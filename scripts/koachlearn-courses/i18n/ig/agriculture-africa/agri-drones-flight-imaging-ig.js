"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-flight-imaging.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-flight-imaging-ig",
  lang: "ig",
  translationOf: "agri-drones-flight-imaging",
  category: "Agriculture (Africa)",
  name: "Drones maka Ilekọta Ugbo 2: Ịkwọ Drone, Ịse Foto na Sensọ",
  skills: "Ime nlele tupu ịfelie, Ịkwọ drone ebe anya gị na-ahụ ya, Ịhazi ofufe nke na-ese maapụ n'onwe ya, Ịhọrọ ịdị elu na overlap, Ịhọrọ sensọ kwesịrị ekwesị, Ịse foto doro anya nke ìhè ya hà nhata",
  outcome: "ịhazi na ịkwado ofufe drone maka ịse maapụ n'elu ala ugbo: ịhọrọ sensọ, ịdị elu, overlap na oge n'ụbọchị, ime nlele tupu ịfelie, na ịse foto niile doro anya nke ìhè ya hà nhata, nke a ga-ejikọta ka ha bụrụ otu maapụ.",
  about: [
    "Nke a bụ Ihe ọmụmụ 2 n'usoro ihe ọmụmụ ilekọta ugbo site na drone (obere ụgbọelu na-enweghị onye nọ n'ime ya), maka ndị ọrụ ugbo, ndị ọrụ ndụmọdụ ugbo (extension officers), ndị ọrụ azụmahịa ugbo na ndị ntorobịa na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile. Buru ụzọ were Ihe ọmụmụ 1, ma ọ bụ hụ na ị maraworị iwu drone nke mba gị, ma nwee ndebanye aha, akwụkwọ ikike na nkwado ndị ọ chọrọ.",
    "N'Isi 1, ị ga-amụta ịkwado drone, ịkwọ ya n'enweghị nsogbu ebe anya gị na-ahụ ya, na ịhazi ofufe na-ese maapụ n'onwe ya nwere ịdị elu na overlap kwesịrị ekwesị. N'Isi 2, ị ga-amụta ihe sensọ ọ bụla na-egosi (agba, multispectral, thermal) na otu ìhè, ikuku na oge si eme ka maapụ baa uru ma ọ bụ ghara ịba uru.",
    "Ọmụmaatụ ndị a sitere n'ezi ọrụ ugbo: ugbo ọka (maize) hectare 2, otu akụkụ ugbo tii, ugbo akpụ, na ụlọ ihe ọkụkụ (greenhouse). Nkuzi ọ bụla na-ejedebe n'obere ọrụ omume. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ zuru ezu maka ofufe ịse foto n'ugbo ọka hectare 2 (ezi ugbo ma ọ bụ ọmụmaatụ): ebumnuche ofufe ahụ, sensọ, ịdị elu ofufe na nkọwa foto ngwa ofufe gị gosiri, overlap n'ihu na n'akụkụ, ọsọ ofufe, ọnụọgụ batrị, oge n'ụbọchị, oke ihu igwe, ebe ị ga-esi felie, na ndepụta nlele tupu ịfelie. Ọ bụrụ na i nwere drone na nkwado ndị a chọrọ, kwọọ ya ma lelee foto ọ bụla tupu ị hapụ ugbo ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo, ndị ọrụ ndụmọdụ ugbo, ndị ọrụ azụmahịa ugbo na ndị ntorobịa na-enye ọrụ drone na Kenya, Nigeria na n'Afrịka niile, ndị na-amụ Ihe ọmụmụ 2 n'usoro ilekọta ugbo site na drone.",
    startingPoint: "Ndị na-amụ ihe maara ihe drone nwere ike ime n'ugbo na otu esi achọta iwu drone nke mba ha (Ihe ọmụmụ 1). Ole na ole emeela nlele e dere ede tupu ịfelie, kwọọ ofufe maapụ a hazịrị ahazị, tọọ ịdị elu na overlap maka nkọwa ha chọrọ, ma ọ bụ mara sensọ na ìhè na-enye maapụ bara uru.",
    gap: "Ofufe a na-akwadoghị nke ọma na-eme ka drone daa, ofufe a na-ahazighị nke ọma ma ọ bụ e mere n'oge na-adịghị mma na-enye foto na-edoghị anya, nke na-ahaghị nhata, nke a na-apụghị ijikọ ma ọ bụ tụnyere, na-emefu batrị, oge na ego ndị ahịa. Ịhazi na ịkwado ofufe maapụ nke ọma na-enye foto niile doro anya n'oge mbụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu ọ bụla gbasara ịkwọ drone na ịse foto",
      "Ngwaọrụ: ekwentị ma ọ bụ tablet nwere ngwa maapụ na-enyere aka; a chọrọ drone naanị maka ofufe a na-amanyeghị",
      "Iwu: a na-akwọ drone naanị site na ndebanye aha, akwụkwọ ikike na nkwado mba ahụ chọrọ",
      "Ọnọdụ ugbo: ikuku, okpomọkụ, igwe ojii na-agbasa agbasa, na enweghị netwọk ekwentị n'ọtụtụ ugbo",
      "Oge: nkuzi dị mkpụmkpụ, gbakwunyere oge ide atụmatụ ofufe"
    ],
    prerequisites: "\"Drone maka Nlekọta Ugbo 1: Mmalite, Iwu na Nchekwa\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Tupu ofufe ọ bụla", action: "ime nlele zuru ezu tupu ịfelie maka drone, batrị, njikwa (controller), ntọala na akwụkwọ", standard: "n'ahapụghị ihe ọ bụla dị na ndepụta nlele" },
    { id: "O2", condition: "N'ofufe omume ma ọ bụ ofufe e nyere ikike", action: "ịfelie, ịkwọ drone n'ụzọ dị mfe ma rịda ya ebe anya gị na-ahụ ya", standard: "n'ime oke ịdị elu iwu kwere, ma rịda mgbe batrị ka fọdụrụ" },
    { id: "O3", condition: "Maka ugbo a ga-ese maapụ ya", action: "ịhazi ofufe maapụ grid nwere ịdị elu, nkọwa foto, overlap, ọsọ na batrị", standard: "na overlap dị ihe dị ka pasentị 70 ruo 80 n'ihu na pasentị 60 ruo 70 n'akụkụ" },
    { id: "O4", condition: "Mgbe e nyere gị foto drone nwere agba na nkọwa dị elu", action: "igosi ebe oghere dị, ahịhịa, mmiri, ihe ọkụkụ dara ada na mmebi", standard: "ma kaa akara n'ebe ọ bụla a ga-eji ụkwụ gaa lelee" },
    { id: "O5", condition: "Mgbe e nyere gị ajụjụ gbasara ugbo", action: "ịhọrọ n'etiti sensọ RGB, multispectral na thermal", standard: "na ihe kpatara ya dabara ajụjụ ahụ na ego ọ ga-efu" },
    { id: "O6", condition: "N'ụbọchị ofufe maapụ", action: "ịtọ oge, oke ìhè na ikuku, na ilele foto ọ bụla tupu ị hapụ ugbo ahụ", standard: "ka foto ndị ahụ doo anya, nwee ìhè hà nhata ma zuo ezu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwọ drone",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịkwado drone: nlele tupu ịfelie",
          minutes: 5,
          goal: "Mee nlele zuru ezu tupu ịfelie drone n'oge ọ bụla.",
          text: [
            "Ọtụtụ ihe mberede drone na-amalite n'ala: propeller gbawara agbawa, batrị a chajirị ọkara, maapụ ochie n'ime ngwa (app), ma ọ bụ compass a na-edozighị (calibrate). Ndepụta nlele e dere ede, nke a na-eji oge niile, na-egbochi ọtụtụ n'ime ha.",
            "Lelee drone n'onwe ya (ahụ ya, aka ya, propeller siri ike ma ghara imebi, igwefoto dị ọcha ma kwụsie ike), batrị (a chajiri ya nke ọma, ọ fụghị afụ, ebe njikọ ya dị ọcha), njikwa na ekwentị ma ọ bụ tablet (a chajiri ha, e meliteere ngwa tupu i si n'ụlọ pụọ, e budatara maapụ offline ma ọ bụrụ na netwọk adịghị n'ugbo), na ntọala (ịdị elu return-to-home karịrị osisi ma ọ bụ mast kachasị ogologo, e dekọọ home point).",
            "Mee nlele akwụkwọ gị kwa: ndebanye aha, akwụkwọ ikike onye ọkwọ drone, na nkwado ofufe ọ bụla ndị ọchịchị gị chọrọ maka ebe a, buru ha ma ọ bụ debe ha n'ekwentị gị."
          ],
          steps: ["Nlele akwụkwọ: ndebanye aha, akwụkwọ ikike, nkwado maka ebe a.", "Drone: ahụ ya, aka ya, propeller, igwefoto.", "Batrị: a chajiri ha, ha afụghị afụ, ebe njikọ dị ọcha.", "Njikwa na ekwentị ma ọ bụ tablet: a chajiri ha, e meliteere ngwa, maapụ offline dị njikere.", "Ntọala: ịdị elu return-to-home, home point, idozi compass ma ọ bụrụ na ngwa ahụ rịọrọ.", "Lee gburugburu: ndị mmadụ, anụmanụ, ikuku, wee malite."],
          words: [["Nlele tupu ịfelie (pre-flight check)", "ndepụta ihe a na-elele tupu ofufe ọ bụla."], ["Return-to-home (RTH)", "ntọala na-eme ka drone laghachi n'ebe o si felie n'onwe ya, dịka ọmụmaatụ mgbe batrị dị ala ma ọ bụ mgbe njikọ furu efu."], ["Home point", "ebe drone ga-alaghachi, nke na-abụkarị ebe o si felie."]],
          slides: [
            { title: "Ihe mberede na-amalite n'ala", bullets: ["Propeller gbawara agbawa, batrị na-adịghị ike", "Maapụ ochie n'ime ngwa, compass a na-edozighị", "Ndepụta nlele oge niile na-egbochi ọtụtụ"] },
            { title: "Lelee ngwa", bullets: ["Ahụ, aka, propeller, igwefoto", "Batrị a chajiri, ha afụghị afụ", "Njikwa, ekwentị, ngwa e meliteere, maapụ offline"] },
            { title: "Lelee ntọala", bullets: ["Ịdị elu return-to-home karịrị ihe kachasị ogologo", "E dekọọ home point", "Dozie compass ma ọ bụrụ na a rịọrọ"] },
            { title: "Lelee akwụkwọ", bullets: ["Ndebanye aha na akwụkwọ ikike onye ọkwọ", "Nkwado maka ebe a", "Buru ha n'aka"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Dee ndepụta nlele tupu ịfelie nke gị nwere opekata mpe ihe 12 n'okpuru isiokwu anọ: akwụkwọ, drone, batrị na njikwa, ntọala. Debe ya n'ekwentị gị.",
          youCanNow: "ịkwado drone site na nlele zuru ezu tupu ịfelie nke gụnyere akwụkwọ, drone, batrị, njikwa na ntọala.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ home point?", options: ["Ụlọ onye ọkwọ drone", "Ebe drone na-alaghachi n'onwe ya mgbe return-to-home rụrụ ọrụ", "Ebe kachasị elu n'ugbo ahụ", "Ụlọ ahịa drone"], answer: 1, why: "A na-edekọ home point tupu ịfelie ka return-to-home wee kwọghachi drone n'ebe ahụ." },
            { objective: "O1", q: "Ị na-aga n'ugbo na-enweghị netwọk ekwentị. Gịnị ka ị ga-eme tupu i si n'ụlọ pụọ?", options: ["Ọ dịghị ihe; ngwa ahụ ga-arụ ọrụ n'agbanyeghị", "Zube imelite ngwa ahụ n'ugbo", "Hapụ batrị n'achajighị ha", "Budata maapụ offline ma melite ngwa ahụ"], answer: 3, why: "A ga-emelite ngwa ma budata maapụ offline tupu i pụọ, n'ihi na netwọk nwere ike ọ gaghị adị n'ugbo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịkwọ drone n'enweghị nsogbu ebe anya gị na-ahụ ya",
          minutes: 5,
          goal: "Felie drone, kwọọ ya n'ụzọ dị mfe ma rịda ya ebe anya gị na-ahụ ya.",
          text: [
            "Visual line of sight (VLOS) pụtara na gị, ma ọ bụ onye na-enyere gị ile anya, na-eji anya unu ahụ drone ahụ, n'ejighị binoculars, oge niile. Ọtụtụ ofufe ugbo nke obere ndị ọrụ ugbo na ndị ọkwọ ọhụrụ bụ VLOS. Ịkwọ ya karịa ebe anya na-ahụ chọrọ nkwado pụrụ iche. Dịka ọmụmaatụ, Part 21 nke Nigeria chọrọ VLOS maka obere drones, ma tọọ oke ịdị elu nke mita 120 (ụkwụ 400) n'elu ala maka ọtụtụ ọrụ; lelee oke nke mba gị.",
            "Felie site n'ebe gị doro anya, rịgoo n'ịdị elu na-enweghị nsogbu karịrị osisi, ma kwụsị n'ikuku sekọnd ole na ole iji hụ na drone kwụsiri ike. Kwọọ ya nwayọọ. Debe drone n'ihu gị, ọ bụghị n'elu isi gị ma ọ bụ n'azụ gị, ka ị ghara ichefu akụkụ ọ chere ihu.",
            "Lezie batrị na ikuku anya. Rịda mgbe batrị zuru ezu fọdụrụ maka ịrịda n'enweghị nsogbu, ọ bụghị mgbe naanị pasentị ikpeazụ fọdụrụ. Ọ bụrụ na ikuku na-ebughari drone nke ukwuu, kpọghachi ya ma rịda ya."
          ],
          steps: ["Guzo n'ebe ị ga-esi felie, gị na onye na-enyere gị ile anya.", "Felie ma rịgoo karịa osisi; kwụsị n'ikuku ma hụ na ọ kwụsiri ike.", "Kwọọ ya nwayọọ n'ụdị square n'ihu gị, na-ahụ ya anya.", "Lezie batrị na ikuku anya n'ihuenyo.", "Kpọghachi ya, rịdata ya nwayọọ ma rịda mgbe batrị ka fọdụrụ."],
          words: [["VLOS", "visual line of sight: ị na-eji anya gị ahụ drone ahụ n'ofufe niile."], ["BVLOS", "beyond visual line of sight: ịkwọ drone karịa ebe anya gị na-ahụ; ọ chọrọ nkwado pụrụ iche."], ["AGL", "above ground level: ịdị elu a tụrụ site n'ala dị n'okpuru drone."]],
          slides: [
            { title: "Ebe anya gị na-ahụ ya (VLOS)", bullets: ["Gị ma ọ bụ onye na-enyere gị na-ahụ drone oge niile", "Ejila binoculars", "Karịa ebe anya na-ahụ chọrọ nkwado pụrụ iche"] },
            { title: "Mara oke ịdị elu", bullets: ["Nigeria Part 21: 120 m (400 ft) AGL maka ọtụtụ ofufe", "Lelee oke nke mba gị"] },
            { title: "Kwọọ ya nke ọma", bullets: ["Rịgoo karịa osisi, kwụsị n'ikuku, hụ na ọ kwụsiri ike", "Kwọọ ya nwayọọ, debe ya n'ihu gị", "Lezie batrị na ikuku anya"] },
            { title: "Rịda mgbe batrị ka fọdụrụ", bullets: ["Ọ bụghị mgbe pasentị ikpeazụ fọdụrụ", "Ikuku na-ebughari ya nke ukwuu: kpọghachi ya ma rịda"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "Ọ bụrụ na i nwere drone na nkwado, kwọọ ya nwayọọ n'ụdị square n'ihu gị ma rịda mgbe batrị ka fọdụrụ. Ọ bụrụ na i nweghị, jiri ngwa simulator drone n'efu ma ọ bụ lee vidiyo ọzụzụ ma dee nzọụkwụ ndị ị hụrụ.",
          youCanNow: "ịfelie drone, ịkwọ ya n'ụzọ dị mfe ebe anya gị na-ahụ ya, na ịrịda ya n'enweghị nsogbu mgbe batrị ka fọdụrụ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka idebe drone \"n'ihu gị\" na-enyere aka?", options: ["Ịchaji batrị", "Ime ka foto na-enwu karịa", "Ịmata akụkụ drone chere ihu", "Ịkwọ ya karịa ebe anya na-ahụ"], answer: 2, why: "Idebe drone n'ihu gị, ọ bụghị n'elu isi ma ọ bụ n'azụ, na-enyere gị aka ịmata ụzọ ọ chere." },
            { objective: "O2", q: "Ozugbo i feliri drone, ikuku na-ebughari ya nke ukwuu. Gịnị ka ị ga-eme?", options: ["Kpọghachi ya ma rịda ya", "Rịgoo elu karịa ka ị gbanahụ ikuku", "Kwọọ ya ọsọ ka ị mechaa", "Lee anya ebe ọzọ ma hapụ ya ka ọ fee"], answer: 0, why: "Ọ bụrụ na ikuku na-ebughari drone nke ukwuu, kpọghachi ya ma rịda ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi ofufe maapụ nke na-agba n'onwe ya",
          minutes: 6,
          goal: "Hazie ofufe maapụ grid nwere ịdị elu, overlap na ọsọ kwesịrị ekwesị.",
          text: [
            "Iji see maapụ ugbo, drone na-efe azụ na ihu n'ahịrị ndị kwụ ọtọ (grid, nke a na-akpọ mgbe ụfọdụ lawnmower pattern) ma na-ese foto ndị na-ekekọrịta ihe. Ngwa maapụ na-ekwe ka ị see oke ugbo ahụ, wee hazie ahịrị ndị ahụ maka gị.",
            "Ịdị elu na-ekpebi nkọwa. Ka ị na-efe elu, ka pixel ọ bụla na-ekpuchi ala karịa, nkọwa na-ebelatakwa, mana ị na-emecha ngwa ngwa. Ngwa ahụ na-egosi nke a dị ka ground sampling distance (GSD), dịka ọmụmaatụ 2 cm kwa pixel. Iji gụọ osisi ọka, ị chọrọ nkọwa dị nro; iji hụ ebe mmiri juru, nkọwa siri ike zuru ezu. Ahazila ofufe karịa oke ịdị elu iwu kwere.",
            "Overlap bụ ole foto ọ bụla na nke na-esote ya na-ekekọrịta. Sọftụwia chọrọ overlap buru ibu iji jikọta foto ka ha bụrụ otu maapụ; ọtụtụ ntuziaka maapụ na-atụ aro ihe dị ka pasentị 70 ruo 80 n'ihu na pasentị 60 ruo 70 n'akụkụ, karịa n'elu ihe ọkụkụ toro ogologo, hà nhata dị ka ọka ma ọ bụ tii. Kwọọ ya nwayọọ ka foto doo anya, ma hazie batrị zuru ezu iji mechaa."
          ],
          steps: ["See oke ugbo ahụ n'ime ngwa maapụ.", "Họrọ ịdị elu: lelee GSD ọ na-enye ma nọrọ n'okpuru oke iwu kwere.", "Tọọ overlap n'ihu na n'akụkụ (dịka ọmụmaatụ pasentị 75 na 65).", "Lelee oge ofufe na ọnụọgụ batrị.", "Chekwaa atụmatụ ahụ ma legharịa ya anya ọzọ tupu ị gaa n'ugbo."],
          words: [["Ofufe grid", "ofufe n'ahịrị kwụ ọtọ azụ na ihu nke na-ekpuchi ugbo ahụ niile."], ["Overlap", "ole foto ọ bụla na nke na-esote ya na-ekekọrịta, na pasentị."], ["GSD", "ground sampling distance: ole ala otu pixel na-ekpuchi, dị ka 2 cm."], ["Orthomosaic", "otu nnukwu foto ziri ezi dị ka maapụ, e jikọtara site n'ọtụtụ foto na-ekekọrịta ihe."]],
          slides: [
            { title: "Ofufe maapụ", bullets: ["Ahịrị kwụ ọtọ azụ na ihu", "Foto na-ekekọrịta ihe (overlap)", "Sọftụwia na-ejikọta ha ka ha bụrụ otu maapụ"] },
            { title: "Ịdị elu na-ekpebi nkọwa", bullets: ["Elu karịa = nkọwa dị ntakịrị, ọ na-adị ngwa", "Ala karịa = nkọwa ka ukwuu, batrị ka ukwuu", "Nọrọ n'okpuru oke ịdị elu iwu kwere"] },
            { title: "Overlap na-eme ka njikọ rụọ ọrụ", bullets: ["Ihe dị ka 70-80% n'ihu, 60-70% n'akụkụ bụ ihe a na-ahụkarị", "Karịa n'elu ihe ọkụkụ toro ogologo, hà nhata"] },
            { title: "Tupu ị gaa", bullets: ["Lelee GSD, oge ofufe, batrị", "Chekwaa atụmatụ ahụ ma legharịa ya anya"] }
          ],
          tryIt: "Meghee ngwa maapụ ma ọ bụ ngwa ịhazi ofufe n'efu (ma ọ bụ ihe ịhazi ofufe dị n'ime ngwa drone gị) ma see ugbo hectare 2. Nwaa ịdị elu atọ ma dee GSD na oge ofufe nke ọ bụla.",
          youCanNow: "ịhazi ofufe maapụ grid na ịhọrọ ịdị elu, overlap na ọsọ maka ọrụ ahụ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ grid ma ọ bụ lawnmower pattern?", options: ["Ahịrị kwụ ọtọ azụ na ihu n'elu ugbo ahụ", "Okirikiri gburugburu otu osisi", "Otu foto e sere n'elu dị elu nke ukwuu", "Ofufe n'akụkụ okporo ụzọ"], answer: 0, why: "Ofufe maapụ na-efe n'ahịrị kwụ ọtọ azụ na ihu ka foto kpuchie ugbo ahụ niile na overlap." },
            { objective: "O3", q: "Ị chọrọ ịgụ osisi ọka mana atụmatụ gị na-enye nkọwa siri ike. Gịnị ka ị ga-agbanwe?", options: ["Kwọọ ya ọsọ karịa", "Belata overlap", "Fee ala karịa maka GSD dị nro, n'ime oke iwu kwere", "Fee ya na mgbede"], answer: 2, why: "Ife ala karịa na-enye nkọwa dị nro kwa pixel, mana ekwela ka ọ gafee oke iwu kwere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwọ drone",
        questions: [
          { objective: "O1", q: "Gịnị mere ị ga-eji jiri ndepụta nlele e dere ede tupu ịfelie oge niile?", options: ["Ọ na-eme ka ị dị ka ọkachamara", "Ọtụtụ ihe mberede na-amalite site n'ihe a hapụrụ n'ala", "Drone chọrọ ya iji malite", "Ọ na-anọchi akwụkwọ ikike"], answer: 1, why: "Ndepụta nlele na-achọpụta propeller gbawara agbawa, batrị na-adịghị ike na ntọala ezighi ezi." },
          { objective: "O1", q: "Kedu ịdị elu a ga-atọ maka return-to-home?", options: ["Ala dị ka o kwere omume", "N'okpuru osisi kachasị ogologo", "Karịa osisi ma ọ bụ mast kachasị ogologo n'ebe ahụ", "Ọ dịghị mkpa"], answer: 2, why: "Drone ga-agafe ihe mgbochi ọ bụla mgbe ọ na-efe laghachi n'onwe ya." },
          { objective: "O2", q: "Gịnị ka VLOS pụtara?", options: ["Ị na-eji anya gị ahụ drone n'ofufe niile", "Drone na-ahụ gị", "Drone na-efe n'abalị", "Drone na-efe gafee mbara igwe"], answer: 0, why: "Visual line of sight pụtara iji anya gị n'onwe ya hụ drone oge niile." },
          { objective: "O3", q: "Ị na-efe elu karịa n'ofufe maapụ. Gịnị na-eme?", options: ["Nkọwa ka ukwuu kwa pixel", "Foto akwụsị ikekọrịta ihe", "Ọ dịghị ihe na-agbanwe", "Pixel ọ bụla na-ekpuchi ala karịa, ị na-emechakwa ngwa ngwa"], answer: 3, why: "Ofufe dị elu karịa na-enye GSD siri ike mana na-ekpuchi ugbo ngwa ngwa." },
          { objective: "O3", q: "Gịnị mere foto maapụ ji chọọ overlap buru ibu?", options: ["Iji batrị karịa", "Ka sọftụwia jikọta ha ka ha bụrụ otu maapụ", "Ime ka foto na-enwu karịa", "N'ihi na iwu kwuru pasentị 100"], answer: 1, why: "Sọftụwia njikọ na-achọ ihe ndị foto na-ekekọrịta ma jikọta ha." }
        ]
      }
    },
    {
      name: "Isi 2: Ịse foto site n'elu na sensọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Foto agba (RGB): ihe ị nwere ike ịhụ",
          minutes: 5,
          goal: "Gụọ foto drone nwere agba na nkọwa dị elu maka oghere, ahịhịa, mmiri na mmebi.",
          text: [
            "Igwefoto agba nkịtị (RGB) bụ sensọ kachasị baa uru n'ọtụtụ ugbo, ọ na-abịakwa na ihe fọrọ nke nta ka ọ bụrụ drone ọ bụla. Na centimita ole na ole kwa pixel, ị nwere ike ịhụ otu otu osisi ọka, agwa ma ọ bụ akpụ.",
            "Na foto agba, chọọ: oghere n'ahịrị (mkpụli na-adịghị mma ma ọ bụ osisi ụmụ ahụhụ riri), ahịhịa n'etiti ahịrị, mmiri guzoro na ala tọgbọrọ chakoo, ọka ma ọ bụ sorghum dara ada (lodging), mmebi mkpụrụ mmiri ma ọ bụ ikuku, ehi ma ọ bụ ewu n'ebe ezighi ezi, na ọwa mmiri mechiri emechi ma ọ bụ ngere gbajiri agbaji.",
            "Foto agba nwekwara ike igosi ntakịrị nsogbu nri ihe ọkụkụ ma ọ bụ ọrịa (ịcha odo odo, akwụkwọ ndụ na-ahaghị nhata), mana ọ na-egosi ya oge ka anya mmadụ n'ala ma ọ bụ igwefoto multispectral nwere ike ịhụ ya. Kaa akara n'ebe ahụ mgbe niile ma jiri ụkwụ gaa lelee ya."
          ],
          steps: ["Meghee foto ma ọ bụ maapụ ahụ ma mee ka ọ dị nta ka ị hụ ugbo ahụ niile.", "Chọọ ihe ọ bụla na-ahaghị nhata: oghere, mgbanwe agba, mmiri, ala tọgbọrọ chakoo.", "Mee ka nke ọ bụla buo ibu ka ị hụ ya nke ọma.", "Kaa akara n'ebe ọ bụla site na nọmba na obere ndetu.", "Jiri ụkwụ gaa n'ebe ndị ahụ lelee ha."],
          words: [["Foto nkọwa dị elu (high-resolution)", "foto nwere nkọwa dị nro, ebe pixel ọ bụla na-ekpuchi obere ala."], ["Lodging", "mgbe osisi ọka, sorghum ma ọ bụ wheat gbagọrọ agbagọ ma ọ bụ daa."]],
          slides: [
            { title: "RGB: sensọ na-arụ ọrụ kachasị", bullets: ["Ọ na-abịa na ihe fọrọ nke nta ka ọ bụrụ drone ọ bụla", "Ọ na-egosi otu otu osisi na cm ole na ole kwa pixel"] },
            { title: "Ihe ị ga-achọ", bullets: ["Oghere n'ahịrị, ahịhịa", "Mmiri guzoro, ala tọgbọrọ chakoo", "Ọka dara ada, mmebi mkpụrụ mmiri ma ọ bụ ikuku", "Anụmanụ, ngere gbajiri agbaji, ọwa mmiri mechiri emechi"] },
            { title: "Oke ya", bullets: ["Ọ na-egosi ọrịa na nsogbu nri ihe ọkụkụ oge", "Jiri ụkwụ gaa lelee ebe ndị ahụ mgbe niile"] }
          ],
          tryIt: "Chọta foto drone ma ọ bụ foto satellite nke ugbo n'ịntanetị (ma ọ bụ jiri nke gị). Depụta ihe ise ị hụrụ, kaa akara ebe nke ọ bụla dị, ma kwuo ihe ị ga-elele n'ala.",
          youCanNow: "ịgụ foto drone nwere agba na ịkaa akara n'oghere, ahịhịa, mmiri na mmebi a ga-elele n'ala.",
          quickCheck: [
            { objective: "O4", q: "Na foto agba, gịnị ka oghere n'ahịrị nwere ike igosi?", options: ["Fatịlaịza karịrị akarị", "Batrị siri ike", "Ezigbo owuwe ihe ubi", "Mkpụli na-adịghị mma ma ọ bụ osisi ụmụ ahụhụ riri"], answer: 3, why: "Oghere n'ahịrị na-apụtakarị na mkpụrụ apụtaghị ma ọ bụ na e riri osisi ndị ahụ." },
            { objective: "O4", q: "Foto ahụ na-egosi ebe na-acha odo odo, nke na-ahaghị nhata n'ugbo agwa. Gịnị ka ị ga-eme?", options: ["Fesaa ọgwụ n'ugbo ahụ niile", "Kaa akara n'ebe ahụ ma jiri ụkwụ gaa lelee ya", "Leghara ya anya", "Hichapụ foto ahụ"], answer: 1, why: "Foto agba nwere ike igosi ntakịrị nsogbu, mana a ga-elele ebe ahụ n'ala." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Sensọ multispectral na thermal",
          minutes: 6,
          goal: "Họrọ n'etiti sensọ RGB, multispectral na thermal maka ajụjụ gbasara ugbo.",
          text: [
            "Akwụkwọ ndụ ahụike na-agbanarị ọtụtụ ìhè near-infrared, nke anya mmadụ na-apụghị ịhụ. Akwụkwọ nwere nsogbu ma ọ bụ ọrịa na-agbanarị obere. Igwefoto multispectral na-atụ ọtụtụ ụdị ìhè (bands), gụnyere near-infrared na red edge, ka sọftụwia wee gbakọọ vegetation index dị ka NDVI nke na-egosi ike osisi. FAO na-eji NDVI site na satellite eso ahụike ihe ọkụkụ n'Afrịka niile; drones na-eme otu ihe ahụ n'ọkwa otu ugbo.",
            "Igwefoto thermal na-atụ okpomọkụ dị n'elu ihe. Osisi na-enweghị mmiri zuru ezu na-emechi oghere ha ma na-ekpo ọkụ, ya mere foto thermal nwere ike igosi nsogbu enweghị mmiri na ọkpọkọ mmiri (irrigation) mechiri emechi. Thermal dịkwa mma maka ịchọta anụmanụ n'abalị ma ọ bụ n'isi ụtụtụ.",
            "Sensọ ndị a na-efu ego karịa ma chọọ iji nlezianya (calibration, oge kwesịrị ekwesị n'ụbọchị). Họrọ ha mgbe ajụjụ ahụ chọrọ ha: nsogbu n'oge mbụ n'ugbo tii ma ọ bụ n'ugbo akwụkwọ nri a na-agba mmiri, ee; ịgụ oghere n'ugbo agwa acre 1, mba, foto agba zuru ezu."
          ],
          words: [["Near-infrared (NIR)", "ìhè dị nso n'akụkụ uhie nke ndị mmadụ na-apụghị ịhụ; akwụkwọ ndụ ahụike na-agbanarị ọtụtụ ya."], ["Vegetation index", "nọmba a gbakọrọ site n'ụdị ìhè dị iche iche nke na-egosi otu osisi si acha akwụkwọ ndụ ma sie ike."], ["NDVI", "Normalized Difference Vegetation Index: vegetation index a na-ahụkarị site n'ìhè uhie na near-infrared, site na -1 ruo +1; nke dị elu na-apụtakarị osisi akwụkwọ ndụ juru ebe ahụ ma dị mma."]],
          slides: [
            { title: "Multispectral", bullets: ["Ọ na-atụ uhie, red edge, near-infrared na ndị ọzọ", "Sọftụwia na-eme maapụ vegetation index dị ka NDVI", "Ọ na-egosi nsogbu osisi oge mbụ karịa foto agba"] },
            { title: "Thermal", bullets: ["Ọ na-atụ okpomọkụ dị n'elu ihe", "Osisi na-enweghị mmiri na-ekpo ọkụ karịa", "Ọ na-achọta ọkpọkọ mmiri mechiri emechi na anụmanụ n'isi ụtụtụ"] },
            { title: "Họrọ dabere n'ajụjụ", bullets: ["Oghere na ahịhịa: RGB", "Nsogbu oge mbụ n'ihe ọkụkụ dị oke ọnụ: multispectral", "Enweghị mmiri ma ọ bụ anụmanụ: thermal"] }
          ],
          sources: [{ name: "FAO GIEWS Earth Observation (NDVI and vegetation indicators)", url: "https://www.fao.org/giews/earthobservation/index.jsp" }, FAO_ITU_DRONES],
          tryIt: "Maka ajụjụ ọ bụla, họrọ RGB, multispectral ma ọ bụ thermal ma dee ihe kpatara ya: (a) Ọkpọkọ drip m ọ mechiri emechi? (b) Ebee ka agwa apụtaghị? (c) Otu akụkụ ugbo tii ọ nọ na nsogbu tupu akwụkwọ ya agbanwee agba?",
          youCanNow: "ikwu ihe sensọ multispectral na thermal na-egosi na ịhọrọ sensọ kwesịrị ekwesị maka ajụjụ gbasara ugbo.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka igwefoto thermal na-atụ?", options: ["Ogologo osisi", "Okpomọkụ dị n'elu ihe", "Nri dị n'ala", "Mmiri ozuzo"], answer: 1, why: "Igwefoto thermal na-atụ okpomọkụ dị n'elu ihe, nke nwere ike igosi enweghị mmiri." },
            { objective: "O5", q: "Ugbo tii buru ibu chọrọ ịhụ nsogbu oge mbụ n'akụkụ ya niile. Kedu sensọ ị ga-atụ aro?", options: ["Ọ dịghị nke ọ bụla", "Igwefoto thermal naanị maka anụmanụ", "Igwefoto ekwentị", "Igwefoto multispectral"], answer: 3, why: "Igwefoto multispectral na-atụ near-infrared na red edge, nke na-egosi nsogbu osisi oge mbụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịse ezigbo foto: ìhè, ikuku na oge",
          minutes: 5,
          goal: "Hazie ofufe ka foto ọ bụla doo anya, nwee ìhè hà nhata ma baa uru.",
          text: [
            "Foto e sere n'izu dị iche iche nwere ike ịtụnyere naanị ma ọ bụrụ na e sere ha n'otu ụzọ ahụ. Fee gburugburu etiti ehihie, mgbe onyinyo dị mkpụmkpụ, na n'ìhè kwụsiri ike: ma anwụ zuru oke ma ọ bụ igwe ojii hà nhata, ọ bụghị igwe ojii na-agbasa agbasa na-agafe n'elu ugbo ahụ. Fee n'otu ịdị elu na otu ntọala oge ọ bụla.",
            "Ikuku na-eme ka drone maa jijiji ma na-akpali akwụkwọ osisi, nke na-eme ka foto ghara idoanya ma mebie njikọ. Fee nwayọọ karịa mgbe ikuku dị nro, ma afela ma ọlị mgbe ikuku siri ike. Hụ na lenzi dị ọcha na igwefoto tọrọ nke ọma iji doo anya (focus); ọtụtụ ngwa maapụ na-atọ igwefoto maka gị.",
            "Maka igwefoto multispectral, see foto calibration panel (kaadị nwere reflectance a maara nke na-abịa na sensọ ahụ) tupu ofufe na mgbe ofufe gachara, ka sọftụwia wee dozie maka ìhè. Tupu ị hapụ ugbo ahụ, legharịa foto ndị ahụ anya: ọ bụrụ na ụfọdụ edoghị anya, gbara ọchịchịrị ma ọ bụ furu efu, fegharịa akụkụ ahụ mgbe ị ka nọ ebe ahụ."
          ],
          steps: ["Zube ife gburugburu etiti ehihie n'ìhè kwụsiri ike.", "Lelee ikuku; fee nwayọọ mgbe ikuku dị nro, kagbuo ya mgbe ikuku siri ike.", "Hichaa lenzi; lelee ntọala igwefoto.", "Multispectral: see foto calibration panel tupu na mgbe ofufe gachara.", "Tupu ị pụọ, lelee foto ndị ahụ ma fegharịa akụkụ ọ bụla dị njọ."],
          words: [["Calibration panel", "kaadị nwere ìhè a maara nke a na-ese foto ya tupu na mgbe ofufe multispectral gachara iji dozie maka ìhè."], ["Blur", "mgbe foto edoghị anya n'ihi na igwefoto ma ọ bụ osisi megharịrị ahụ."]],
          slides: [
            { title: "Otu ụzọ ahụ, oge niile", bullets: ["Fee gburugburu etiti ehihie: onyinyo dị mkpụmkpụ", "Ìhè kwụsiri ike: anwụ zuru oke ma ọ bụ igwe ojii hà nhata", "Otu ịdị elu na otu ntọala n'ofufe ọ bụla"] },
            { title: "Merie foto na-edoghị anya", bullets: ["Fee nwayọọ mgbe ikuku dị nro", "Kagbuo ya mgbe ikuku siri ike", "Lenzi dị ọcha, ntọala igwefoto ziri ezi"] },
            { title: "Ihe ọzọ maka multispectral", bullets: ["See foto calibration panel", "Tupu NA mgbe ofufe gachara"] },
            { title: "Lelee tupu ị pụọ", bullets: ["Legharịa foto ndị ahụ anya", "Fegharịa akụkụ na-edoghị anya, gbara ọchịchịrị ma ọ bụ furu efu"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ zuru ezu maka ofufe ịse foto n'ugbo ọka hectare 2: ebumnuche, sensọ, ịdị elu na GSD, overlap, ọsọ, batrị, oge n'ụbọchị, oke ihu igwe, ebe ị ga-esi felie na ndepụta nlele. Ọ bụrụ na i nwere drone na nkwado ndị a chọrọ, kwọọ ya ma lelee foto ọ bụla tupu ị pụọ.",
          youCanNow: "ịhazi na ịse foto doro anya, nwee ìhè hà nhata, nke a ga-ejikọta ka ha bụrụ maapụ ugbo ma tụnyere ha ka oge na-aga.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ calibration panel?", options: ["Propeller ọzọ e debere", "Igbe batrị", "Kaadị nwere reflectance a maara nke a na-ese foto ya tupu na mgbe ofufe multispectral gachara", "Ihuenyo njikwa"], answer: 2, why: "Ịse foto calibration panel na-ekwe ka sọftụwia dozie maka ìhè nke ụbọchị ahụ." },
            { objective: "O6", q: "Igwe ojii na-agbasa agbasa na-agafe ngwa ngwa n'elu ugbo n'etiti ehihie. Gịnị ka ị ga-eme?", options: ["Chere anwụ zuru oke ma ọ bụ igwe ojii hà nhata tupu ị fee", "Fee ugbu a ma nwee olileanya", "Fee na mgbede kama", "Fee elu karịa ka ị gafee igwe ojii"], answer: 0, why: "Ìhè kwụsiri ike, ma anwụ zuru oke ma ọ bụ igwe ojii hà nhata, na-enye foto nwere ìhè hà nhata nke a ga-atụnyere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịse foto site n'elu na sensọ",
        questions: [
          { objective: "O4", q: "Kedu sensọ zuru ezu iji chọta oghere n'ugbo agwa acre 1?", options: ["Naanị thermal", "Naanị multispectral", "Igwefoto agba nkịtị (RGB)", "Ọ dịghị sensọ nwere ike ime nke a"], answer: 2, why: "Ọ dị mfe ịhụ oghere na foto agba na centimita ole na ole kwa pixel." },
          { objective: "O5", q: "Akwụkwọ ndụ ahụike na-agbanarị ọtụtụ:", options: ["Ìhè near-infrared", "Ụda", "Naanị okpomọkụ", "Ebili redio"], answer: 0, why: "Nhazi akwụkwọ ahụike na-agbanarị near-infrared nke ukwuu; vegetation index na-eji nke a." },
          { objective: "O5", q: "Foto thermal na-egosi otu akụkụ ugbo tomato na-ekpo ọkụ karịa ndị ọzọ. Ihe nwere ike ịkpata ya ị ga-elele bụ:", options: ["Agba fatịlaịza karịrị akarị", "Drone dị elu nke ukwuu", "Akụkụ ahụ na-acha akwụkwọ ndụ karịa", "Enweghị mmiri ma ọ bụ ọkpọkọ drip mechiri emechi"], answer: 3, why: "Osisi na-enweghị mmiri zuru ezu na-ekpo ọkụ n'ihi na ha na-emechi oghere ha." },
          { objective: "O6", q: "Kedu oge kacha mma ife maka foto a ga-atụnyere?", options: ["N'ọwụwa anyanwụ otu izu na n'ọdịda anyanwụ izu na-esote", "Gburugburu etiti ehihie, n'ìhè kwụsiri ike, n'otu ụzọ ahụ oge niile", "N'igwe ojii na-agbasa agbasa na-agagharị", "N'abalị"], answer: 1, why: "Onyinyo dị mkpụmkpụ na ìhè kwụsiri ike na-eme ka a tụnyere foto." },
          { objective: "O6", q: "Ụfọdụ foto edoghị anya mgbe ị lere ha n'ugbo. Ị kwesịrị:", options: ["Ifegharị akụkụ ahụ tupu ị pụọ", "Ịla n'ụlọ ma nwee olileanya na njikọ ga-arụ ọrụ", "Ihichapụ foto niile", "Ife ọsọ karịa oge ọzọ"], answer: 0, why: "Idozi ya n'ebe ahụ na-azọpụta njem ọzọ ma na-enye maapụ zuru ezu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drones maka Ilekọta Ugbo 2: Ịkwọ Drone, Ịse Foto na Sensọ",
    questions: [
      { objective: "O1", q: "Ebee ka ọtụtụ ihe mberede drone na-amalite?", options: ["Naanị n'ikuku", "N'ala, site n'ihe a hapụrụ n'ịkwado", "N'ọfịs", "Na sọftụwia mgbe drone rịdachara"], answer: 1, why: "Propeller gbawara agbawa, batrị na-adịghị ike na ntọala ezighi ezi na-akpata ọtụtụ ihe mberede." },
      { objective: "O1", q: "Kedu nke so na nlele akwụkwọ?", options: ["Ịdị ike propeller", "Ihicha lenzi", "Ndebanye aha, akwụkwọ ikike na nkwado maka ebe ahụ", "Batrị ifụ afụ"], answer: 2, why: "Nlele akwụkwọ na-akwado na e nyere gị ikike ife n'ebe ahụ." },
      { objective: "O1", q: "Batrị yiri ka ọ fụrụ afụ. Ị kwesịrị:", options: ["Ghara iji ya", "Jiri ya maka obere ofufe", "Pịa ya ka ọ dị larịị", "Chajikwuo ya"], answer: 0, why: "Batrị fụrụ afụ nwere ike ịkwụsị ọrụ ma ọ bụ gbaa ọkụ; ejila ya fee." },
      { objective: "O1", q: "Gịnị mere ị ga-eji budata maapụ offline tupu ị gaa n'ugbo dị n'ime obodo?", options: ["Iji chekwa ego mmanụ ụgbọala", "Ime ka drone na-agba ọsọ karịa", "N'ihi na iwu chọrọ ya", "Netwọk ekwentị nwere ike ọ gaghị adị n'ugbo"], answer: 3, why: "N'enweghị netwọk, ngwa ahụ nwere ike ghara ibubata maapụ ọ chọrọ." },
      { objective: "O1", q: "Return-to-home bụ:", options: ["Ntọala na-eme ka drone laghachi n'ebe o si felie n'onwe ya", "Bọtịnụ na-agbanyụ moto", "Ụdị igwefoto", "Ụdị batrị"], answer: 0, why: "RTH na-akpọghachi drone mgbe batrị dị ala ma ọ bụ njikọ furu efu." },
      { objective: "O2", q: "Ịkwọ drone karịa ebe anya gị na-ahụ:", options: ["A na-ekwe ya mgbe niile", "Chọrọ nkwado pụrụ iche", "A chọrọ ya maka ịse maapụ", "Ka enweghị nsogbu"], answer: 1, why: "BVLOS nwere ihe egwu karịa ma chọọ ikike." },
      { objective: "O2", q: "Part 21 nke Nigeria tọrọ oke ịdị elu a na-ahụkarị nke:", options: ["Mita 10", "Mita 1,000", "Mita 120 (ụkwụ 400) n'elu ala", "Enweghị oke"], answer: 2, why: "Part 21 na-eji 120 m (400 ft) AGL maka ọtụtụ ọrụ; lelee oke nke mba gị." },
      { objective: "O2", q: "Mgbe ị na-akwọ drone, ebee ka ị ga-edebe ya?", options: ["N'azụ gị", "Kpọmkwem n'elu isi gị", "N'ebe anya na-adịghị ahụ", "N'ihu gị, ebe ị na-ahụ ya"], answer: 3, why: "N'ihu gị na ebe ị na-ahụ ya, ị nwere ike ịmata akụkụ ọ chere ihu." },
      { objective: "O2", q: "Olee mgbe ị ga-arịda drone?", options: ["Mgbe batrị ka fọdụrụ", "Na pasentị 0", "Naanị mgbe drone rịdara n'onwe ya", "Mgbe ekwentị jupụtara"], answer: 0, why: "Hapụ batrị zuru ezu maka ịrịdata na ịrịda n'enweghị nsogbu." },
      { objective: "O3", q: "Ofufe maapụ na-efe:", options: ["N'okirikiri", "N'ahịrị kwụ ọtọ azụ na ihu", "Na-enweghị usoro", "Kwụ ọtọ elu na ala"], answer: 1, why: "Grid pattern na-ekpuchi ugbo ahụ niile site na foto na-ekekọrịta ihe." },
      { objective: "O3", q: "GSD pụtara:", options: ["Ọsọ drone n'ala", "Ebe nchekwa zuru ụwa ọnụ", "Ole ala otu pixel na-ekpuchi", "Nha batrị"], answer: 2, why: "Ground sampling distance bụ nkọwa foto, dị ka 2 cm kwa pixel." },
      { objective: "O3", q: "Iji gụọ otu otu osisi ọka, ị kwesịrị:", options: ["Ife elu dị ka o kwere omume", "Iji naanị satellite", "Ife n'abalị", "Ife ala karịa maka nkọwa dị nro, n'ime oke iwu kwere"], answer: 3, why: "GSD dị nro na-egosi otu otu osisi; nọrọ n'okpuru oke ịdị elu." },
      { objective: "O3", q: "Overlap n'ihu a na-ahụkarị maka ịse maapụ dị ihe dị ka:", options: ["Pasentị 70 ruo 80", "Pasentị 5", "Pasentị 0", "Kpọmkwem pasentị 100"], answer: 0, why: "Overlap dị elu na-ekwe ka sọftụwia jikọta foto." },
      { objective: "O4", q: "Lodging na foto agba pụtara:", options: ["Osisi na-acha akwụkwọ ndụ karịrị akarị", "Osisi gbagọrọ agbagọ ma ọ bụ dara ada", "Ahịhịa n'etiti ahịrị", "Mmiri n'elu ala"], answer: 1, why: "Ọka ma ọ bụ sorghum dara ada na-edina n'ala, ọ dịkwa mfe ịhụ ya site n'elu." },
      { objective: "O4", q: "Foto agba na-egosi ebe na-acha odo odo. Nzọụkwụ kacha mma ọzọ bụ:", options: ["Fesaa ya ọgwụ", "Leghara ya anya", "Kaa ya akara ma jiri ụkwụ gaa lelee ya", "Fee elu karịa"], answer: 2, why: "Foto na-egosi ebe ọ dị; ị na-akwado ihe kpatara ya n'ala." },
      { objective: "O5", q: "A na-agbakọ NDVI site na:", options: ["Ụda na okpomọkụ", "Naanị ìhè anụnụ anụnụ", "Ala e wepụtara maka nnwale", "Ìhè uhie na near-infrared"], answer: 3, why: "NDVI na-atụnyere reflectance uhie na near-infrared." },
      { objective: "O5", q: "Nọmba NDVI dị elu na-apụtakarị:", options: ["Osisi akwụkwọ ndụ juru ebe ahụ, dị mma", "Ala tọgbọrọ chakoo", "Mmiri", "Igwefoto mebiri emebi"], answer: 0, why: "FAO na-akọwa NDVI dị elu dị ka osisi juru ebe ahụ, dị mma." },
      { objective: "O5", q: "Igwefoto thermal bụ ezigbo nhọrọ iji:", options: ["Gụọ nọmba ụgbọala", "Chọta enweghị mmiri na anụmanụ n'isi ụtụtụ", "Gụọ mkpụrụ dị n'akpa", "Hụ agba ka ha na-enwu karịa"], answer: 1, why: "Thermal na-atụ okpomọkụ, nke metụtara enweghị mmiri na anụmanụ ahụ ha na-ekpo ọkụ." },
      { objective: "O6", q: "Gịnị mere ị ga-eji see foto calibration panel na igwefoto multispectral?", options: ["Ọ bụ ihe ncheta", "Iji nwalee propeller", "Ka sọftụwia dozie maka ìhè nke ụbọchị ahụ", "Iji tụọ ikuku"], answer: 2, why: "Reflectance a maara nke panel ahụ na-ekwe ka sọftụwia dozie ihe a gụrụ." },
      { objective: "O6", q: "Ikuku siri ike, na-efesi ike n'ụbọchị ofufe maapụ pụtara:", options: ["Fee ọsọ karịa", "Fee elu karịa", "Wepụ propeller", "Afela; hazie ụbọchị ọzọ"], answer: 3, why: "Ikuku siri ike na-eme ka ọ sie ike ịchịkwa drone ma na-emebi foto." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      5,
      6,
      10,
      12,
      13,
      15,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ma lelee ya ọzọ.",
    criteria: [
      {
        name: "Ebumnuche na sensọ",
        objective: "O5",
        notYet: "Enweghị ebumnuche, ma ọ bụ sensọ ahụ adabaghị ebumnuche ahụ.",
        meets: "Ebumnuche doro anya maka ofufe ahụ na sensọ dabara ya, ya na ihe kpatara ya.",
        exceeds: "Na-akọwa ihe mere na a họrọghị sensọ dị ọnụ ala ma ọ bụ nke dị oke ọnụ."
      },
      {
        name: "Ịdị elu, nkọwa na overlap",
        objective: "O3",
        notYet: "Ịdị elu, GSD ma ọ bụ overlap adịghị, ma ọ bụ ọ karịrị oke ịdị elu iwu kwere.",
        meets: "Ịdị elu na GSD ngwa ahụ gosiri, overlap n'ihu na n'akụkụ, ọsọ na ọnụọgụ batrị.",
        exceeds: "Na-egosi otu nkọwa ahụ si dabara ọrụ ahụ, dị ka ịgụ osisi."
      },
      {
        name: "Ìhè, ikuku na oge",
        objective: "O6",
        notYet: "Enweghị oge n'ụbọchị ma ọ bụ oke ihu igwe.",
        meets: "Oge n'ụbọchị, ìhè, oke ikuku na atụmatụ ilele foto ọ bụla tupu ịpụ.",
        exceeds: "Gụnyere nzọụkwụ calibration panel ma ọ bụ ụbọchị ọzọ e debere."
      },
      {
        name: "Ndepụta nlele tupu ịfelie",
        objective: "O1",
        notYet: "Ndepụta nlele ahụ hapụrụ drone, batrị, ntọala ma ọ bụ akwụkwọ.",
        meets: "Ọ gụnyere drone, batrị, njikwa na ngwa, ntọala return-to-home na akwụkwọ.",
        exceeds: "Na-agbakwunye ebe ị ga-esi felie na otu drone ga-esi nọrọ ebe anya na-ahụ ya."
      },
      {
        name: "Ịkwọ drone n'enweghị nsogbu",
        objective: "O2",
        notYet: "Enweghị ebe a ga-esi felie, ma ọ bụ ịkwọ ya karịa ebe anya na-ahụ n'enweghị nkwado.",
        meets: "Ebe doro anya a ga-esi felie, ịkwọ ya ebe anya na-ahụ na n'ime oke ịdị elu iwu kwere, na ịrịda mgbe batrị ka fọdụrụ.",
        exceeds: "Na-akpọ aha onye na-enyere aka ile anya na nzọụkwụ ndị a ga-eme ma ọ bụrụ na ikuku esie ike."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ ofufe",
      "Ndị na-amụ ihe nwere nkwado kwuru na ha kwọrọ ofufe maapụ a hazịrị ahazị ma nweta foto niile zuru ezu n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihu were Ihe ọmụmụ 3 n'usoro drone",
      "Ndị na-enye ọrụ drone kwuru na ifegharị ma ọ bụ ihe mberede belatara mgbe ọzụzụ gachara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ tablet nwere ngwa maapụ drone, ma ọ bụ foto ihuenyo (screenshots) nke otu",
      "Akwụkwọ ndetu ma ọ bụ ndepụta nlele e bipụtara",
      "Drone nwere ndebanye aha, akwụkwọ ikike na nkwado ya, naanị maka ofufe omume a na-amanyeghị",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge ide atụmatụ ofufe"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee hazie otu ofufe maapụ ọmụmaatụ n'ihuenyo ka onye ọ bụla hụ otu ịdị elu, GSD na overlap si agbanwe.",
      "Ofufe omume ọ bụla ga-agbaso iwu mba ahụ, ya na onye ọkwọ nwere akwụkwọ ikike na nkwado ndị a chọrọ, ma debe ndị na-ekiri anya n'ebe dị anya.",
      "Gụpụta ndepụta nlele tupu ịfelie n'olu dị elu n'elu ezi drone ma ọ bụ foto drone, ejila batrị fụrụ afụ.",
      "Jiri foto ọmụmaatụ ma ọ bụrụ na drone adịghị, ka ndị na-amụ ihe mụọ ịgụ foto agba, multispectral na thermal.",
      "Jiri rubric tụọ akara atụmatụ ofufe ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
