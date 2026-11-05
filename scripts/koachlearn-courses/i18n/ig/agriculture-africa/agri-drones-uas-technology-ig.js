"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-uas-technology.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };

module.exports = {
  id: "agri-drones-uas-technology-ig",
  lang: "ig",
  translationOf: "agri-drones-uas-technology",
  category: "Agriculture (Africa)",
  name: "Drone Ugbo: Teknụzụ UAS na Nlekọta Ya",
  skills: "Ịkpọ aha akụkụ nke usoro drone na ọrụ nke ọ bụla, Ilekọta batrị lithium-polymer n'enweghị nsogbu, Ịhọrọ na ijikwa payload, Ime nlele tupu na mgbe ụgbọ efe, Idebe usoro nlekọta na ndekọ, Ịchọpụta na idozi nsogbu ndị a na-ahụkarị",
  outcome: "ịkọwa otu akụkụ ọ bụla nke usoro drone ugbo si arụ ọrụ, ilekọta batrị na payload ya n'enweghị nsogbu, na ime atụmatụ nlekọta nwere nlele, usoro oge, nzọụkwụ idozi nsogbu na ndekọ zuru ezu maka otu drone.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-efe drone (pilots), ndị teknịshan, azụmahịa na-enye ọrụ drone, ndị ọrụ agribusiness na nnukwu ugbo (estates), na ndị ntorobịa chọrọ ime ka drone ugbo na-efe n'enweghị nsogbu na Kenya, Nigeria na n'Afrịka niile.",
    "Isi 1 na-emeghe usoro drone: ahụ ya (airframe), moto na propeller, flight controller na sensọ, njikọ redio na ground station, batrị na payload dị ka igwefoto na ngwa ịgba ọgwụ. Isi 2 bụ nlekọta: nlele kwa ụbọchị, nlekọta a haziri ahazi, idozi nsogbu ndị a na-ahụkarị, mmelite firmware, ndekọ, na ime ka drone na-arụ ọrụ n'ájá, okpomọkụ, mmiri ozuzo na ebe ọkụ latrik anaghị adị mgbe niile.",
    "Buru ụzọ gbasoo akwụkwọ ntụziaka onye mere ya (manufacturer's manual) na akwụkwọ ntụziaka ọrụ gị (operations manual); ihe ọmụmụ a na-akụzi nka n'ozuzu dị n'azụ ha. Ndị ọchịchị ụgbọ elu na-atụ anya ka ndị na-arụ ọrụ drone lekọta ụgbọ ha ma debe ndekọ, ya mere ezigbo nlekọta bụ ma nchekwa ma irube isi n'iwu. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee atụmatụ nlekọta maka otu drone ugbo (ezi drone ma ọ bụ ọmụmaatụ, dị ka drone multirotor e ji ese maapụ nke otu ọgbakọ ndị ọrụ ugbo na-eji): ndepụta akụkụ ya na ọrụ nke ọ bụla, usoro ilekọta na ịchaji batrị, ndepụta nlele tupu na mgbe ụgbọ efe, usoro nlekọta site n'awa ụgbọ efe na site n'oge kalenda, tebụl idozi nsogbu maka opekata mpe nsogbu ise a na-ahụkarị, na ụdị akwụkwọ ndekọ nlekọta nwere ihe ndekọ ọmụmaatụ abụọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-efe drone, ndị teknịshan, azụmahịa na-enye ọrụ drone, ndị ọrụ agribusiness na nnukwu ugbo, na ndị ntorobịa na Kenya, Nigeria na n'Afrịka niile chọrọ ime ka drone ugbo na-efe n'enweghị nsogbu.",
    startingPoint: "Ọtụtụ ahụla ma ọ bụ fee drone ugbo, ma nwee ike ịchaji batrị ma mee ka ọ fepụ site na app. Ole na ole nwere ike ịkpọ aha akụkụ ọ bụla nke usoro ahụ na ọrụ ya, gbasoo ndepụta nlele e dere ede, hazie nlekọta site n'awa ụgbọ efe, ma ọ bụ debe akwụkwọ ndekọ nlekọta.",
    gap: "Drone dị oke ọnụ, ọ na-emebikwa ngwa ngwa n'ájá, okpomọkụ na mmiri ozuzo, batrị lithium a na-ejighị nke ọma nwekwara ike ịgba ọkụ. Drone dara ma ọ bụ nke a kwụsịrị ka ọ ghara ife na-efu ndị ahịa na ego, ndị ọchịchị, ndị ahịa na ndị inshọransị na-atụkwa anya ndekọ nlekọta. Ịmata usoro ahụ na ime atụmatụ nlekọta na-eme ka drone dịrị nchekwa, na-arụ ọrụ, ma na-erube isi n'iwu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu teknụzụ ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa maka ihe ọmụmụ ahụ; ezi drone na-enyere aka mana ọ dịghị mkpa",
      "Nchekwa: batrị lithium nwere ike ịgba ọkụ; a gaghị arụzi ihe n'ime batrị ma ọ bụ ngwa eletrọnịkị",
      "Akwụkwọ ntụziaka onye mere ya na akwụkwọ ntụziaka ọrụ na-ebu ụzọ; ihe ọmụmụ ahụ na-akụzi nka n'ozuzu dị n'azụ ha",
      "Ọnọdụ ugbo: ájá, okpomọkụ, mmiri ozuzo na ọkụ latrik anaghị adị mgbe niile n'ọtụtụ ebe"
    ],
    prerequisites: "A na-atụ aro ka ị buru ụzọ were \"Drone maka Nlekọta Ugbo 1: Mmalite, Iwu na Nchekwa\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị usoro drone ugbo", action: "ịkpọ aha akụkụ ọ bụla dị mkpa nke ụgbọ ahụ na usoro ala ya ma kọwaa ihe ọ na-eme", standard: "gụnyere flight controller, sensọ, njikọ C2 na payload" },
    { id: "O2", condition: "Site n'iji otu ìgwè batrị drone", action: "ịkọwa otu esi achaji, echekwa, ebugharị ma wepụ ha n'ọrụ n'enweghị nsogbu", standard: "na-agbaso nzọụkwụ nchekwa ọ bụla, n'ejighị batrị fụrụ akpụ ma ọ bụ mebiri emebi" },
    { id: "O3", condition: "Mgbe e nyere gị igwefoto, sensọ ma ọ bụ payload ịgba ọgwụ", action: "ịkọwa otu esi etinye ya, ehicha ya ma lelee ya", standard: "na payload ahụ siri ike n'ebe ọ dị, lenzị dị ọcha, a lelekwara akụkụ ngwa ịgba ọgwụ maka ịka nká" },
    { id: "O4", condition: "Tupu na mgbe ụgbọ efe ọ bụla", action: "ime nlele tupu na mgbe ụgbọ efe ma dee ihe ị hụrụ", standard: "na-elele ihe ọ bụla dị na ndepụta nlele" },
    { id: "O5", condition: "Maka otu drone", action: "ide usoro nlekọta site n'awa ụgbọ efe na kalenda, usoro mmelite firmware na akwụkwọ ndekọ nlekọta", standard: "nwere oge \"nke ọ bụla bu ụzọ ruo\" na ebe ọ bụla dị n'akwụkwọ ndekọ ejupụtara" },
    { id: "O6", condition: "Mgbe e nyere gị nsogbu ma ọ bụ ọnọdụ ugbo siri ike", action: "ịchọpụta nsogbu nzọụkwụ n'otu n'otu ma chebe drone pụọ n'ájá, okpomọkụ, mmiri ozuzo na mkpụchi ọkụ", standard: "na-akwụsị drone ife mgbe nsogbu nchekwa na-alọghachi" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu usoro drone ugbo si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Akụkụ nke usoro drone",
          minutes: 6,
          goal: "Kpọọ aha akụkụ ndị dị mkpa nke usoro drone ma kọwaa ihe nke ọ bụla na-eme.",
          text: [
            "Ndị ọchịchị na-akpọ drone usoro (UAS ma ọ bụ RPAS) n'ihi na ụgbọ ahụ bụ naanị otu akụkụ. Usoro ahụ gụnyere ụgbọ ahụ, ground station (ihe njikwa, ekwentị ma ọ bụ tablet, sọftwia), njikọ redio dị n'etiti ha (a na-akpọkarị ya command and control, ma ọ bụ njikọ C2), batrị na chaja, na payload (igwefoto, sensọ ma ọ bụ ngwa ịgba ọgwụ).",
            "N'ụgbọ ahụ: airframe (ahụ na aka ya, ma ọ bụ nku); moto na propeller na-ebuli ya elu; ESC (electronic speed controllers) na-agwa moto ọ bụla ka o si gbaa ọsọ; flight controller, ụbụrụ drone ahụ; na sensọ: GNSS (ịchọpụta ebe ọ nọ site na satịlaịt, dị ka GPS), kompas, IMU (inertial measurement unit) na-ama mgbe ọ na-adaba n'akụkụ na mgbe ọ na-agagharị, barometer maka ogo elu, na ọtụtụ mgbe sensọ na-ahụ ihe mgbochi.",
            "Flight controller na-agụ sensọ ndị ahụ ọtụtụ narị ugboro n'otu sekọnd ma na-ahazi moto ọ bụla ka drone kwụsie ike ma nọrọ n'ụzọ ya. Ọ bụrụ na otu sensọ enye data ezighi ezi, dị ka kompas dị nso n'ígwè, drone niile nwere ike ime ihe ijuanya. Ọ bụ ya mere calibration na ịhọrọ ebe a ga-esi fepụ nke ọma ji dị mkpa."
          ],
          words: [["Airframe", "ahụ, aka ma ọ bụ nku drone ahụ."], ["ESC", "electronic speed controller: na-achịkwa ka moto ọ bụla si agba ọsọ."], ["Flight controller", "kọmputa dị n'ime drone na-eme ka ọ kwụsie ike ma nọrọ n'ụzọ ya."], ["GNSS", "global navigation satellite systems: usoro satịlaịt dị ka GPS, e ji ama ebe ihe dị."], ["IMU", "inertial measurement unit: na-ama ịdaba n'akụkụ, ịtụgharị na mmegharị."], ["Njikọ C2", "command and control link: njikọ redio dị n'etiti ihe njikwa na drone."]],
          slides: [
            { title: "Usoro, ọ bụghị naanị ụgbọ", bullets: ["Ụgbọ ahụ", "Ground station: ihe njikwa, ekwentị, sọftwia", "Njikọ redio C2", "Batrị na payload"] },
            { title: "N'ụgbọ ahụ", bullets: ["Airframe, moto, propeller", "ESC na-achịkwa moto ọ bụla", "Flight controller: ụbụrụ ya"] },
            { title: "Sensọ", bullets: ["GNSS maka ebe ọ nọ, kompas maka ụzọ", "IMU maka ịdaba n'akụkụ na mmegharị", "Barometer maka ogo elu, sensọ ihe mgbochi"] },
            { title: "Ihe mere o ji dị mkpa", bullets: ["Data sensọ ezighi ezi = omume ijuanya", "Mee calibration ma họrọ ebe ị ga-esi fepụ nke ọma"] }
          ],
          sources: [NCAA_P21],
          tryIt: "Were drone (ma ọ bụ foto ma ọ bụ eserese ya doro anya) ma kaa akara opekata mpe akụkụ asatọ: airframe, moto, propeller, ebe flight controller dị, modul GNSS, igwefoto ma ọ bụ payload, batrị, ihe njikwa. N'akụkụ nke ọ bụla, dee ọrụ ya n'otu ahịrị.",
          youCanNow: "ịkpọ aha akụkụ nke usoro drone ma kwuo ihe nke ọ bụla na-eme.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ flight controller?", options: ["Ihe njikwa aka nke onye na-efe ya", "Ụbụrụ drone na-agụ sensọ ma na-ahazi moto", "Chaja batrị", "Ebe a na-etinye igwefoto"], answer: 1, why: "Flight controller na-agụ sensọ ọtụtụ ugboro n'otu sekọnd ma na-ahazi moto ọ bụla ka drone kwụsie ike." },
            { objective: "O1", q: "Ị na-achọ ifepụ n'akụkụ tankị mmiri ígwè, drone ahụ na-akpagharị n'ụzọ ijuanya. Gịnị nwere ike ịkpata ya?", options: ["Propeller ahụ dị ọhụrụ nke ukwuu", "Payload ahụ dị ọcha nke ukwuu", "Batrị ahụ juru nke ukwuu", "Data kompas ezighi ezi n'ihi ígwè dị nso"], answer: 3, why: "Kompas dị nso n'ígwè na-enye data ezighi ezi, drone niile nwere ike ime ihe ijuanya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Batrị: akụkụ chọrọ nlekọta kacha ukwuu",
          minutes: 6,
          goal: "Chaji, chekwaa, buru ma wepụ batrị drone n'ọrụ n'enweghị nsogbu.",
          text: [
            "Ọtụtụ drone na-eji batrị lithium-polymer (LiPo) ma ọ bụ batrị lithium ndị yiri ya. Ha na-ebu ike dị ukwuu ma e jiri ya tụnyere ịdị arọ ha, ọ bụ ya mere ha nwekwara ike ịgba ọkụ ma ọ bụrụ na ha emebie, a chajie ha karịa, a ṅụchaa ha karịa, ma ọ bụ ha ekpoo ọkụ karịa. Ilekọta batrị bụ ọrụ nlekọta kacha mkpa.",
            "Chaji naanị site na chaja ziri ezi, n'elu ihe na-anaghị agba ọkụ, ahapụla ya mgbe ọ na-achaji, achajila batrị fụrụ akpụ, nwere oghere ma ọ bụ na-ekpo ọkụ. Mee ka batrị jụọ oyi mgbe ụgbọ efe gasịrị tupu i chaji ya, mee ka o jụọ ma ọ bụ kpoo ọkụ ruo okpomọkụ nkịtị tupu i fee ya. Ahapụla batrị n'ụgbọala na-ekpo ọkụ ma ọ bụ n'anwụ n'ugbo.",
            "Maka ichekwa karịa ụbọchị ole na ole, debe batrị na storage charge (a chajiri ya ọkara, ọ jughị eju, ọ tọghịkwa n'efu; ọtụtụ smart batrị na-eme nke a n'onwe ha), n'ebe dị oyi ma kpọọ nkụ, ka mma n'ime akpa ma ọ bụ igbe na-eguzogide ọkụ. Soro ọnụ ọgụgụ charge cycle na ọnọdụ batrị ọ bụla. Wepụ batrị fụrụ akpụ ma ọ bụ mebiri emebi n'ọrụ ma tufuo ha n'ebe ezi nchịkọta e-waste ma ọ bụ batrị, ọ bụghị n'ọkụ ma ọ bụ n'ahịhịa nkịtị. Iburu batrị n'ụgbọ elu nwere iwu nke ụlọ ọrụ ụgbọ elu."
          ],
          steps: ["Nye batrị ọ bụla nọmba ma dee cycle ya.", "Chaji site na chaja ziri ezi, n'elu ihe na-anaghị agba ọkụ, na-ele ya anya.", "Achajila ma ọ bụ fee batrị fụrụ akpụ, nwere oghere ma ọ bụ na-ekpo ọkụ.", "Debe batrị pụọ n'ụgbọala na-ekpo ọkụ na n'anwụ.", "Chekwaa ya na storage charge n'ime ihe dị oyi, kpọọ nkụ, na-eguzogide ọkụ.", "Wepụ batrị mebiri emebi n'ọrụ, ziga ya n'ezi ebe nchịkọta."],
          words: [["LiPo", "batrị lithium-polymer: dị mfe, nwee ike, mana nwere ike ịgba ọkụ ma ọ bụrụ na e jighị ya nke ọma."], ["Charge cycle", "otu ojiji zuru ezu nke ike batrị, site na ịchaji ruo iji ya na ịlaghachi."], ["Storage charge", "ọkwa chaji nke ọkara na-eme ka batrị lithium dịrị mma mgbe a naghị eji ya."], ["E-waste", "ihe mkpofu eletrọnịkị, nke chọrọ nchịkọta na mmegharị pụrụ iche."]],
          slides: [
            { title: "Ike nwere ihe egwu", bullets: ["LiPo: ike dị ukwuu maka ịdị arọ ya", "Nwere ike ịgba ọkụ ma ọ mebie ma ọ bụ e jighị ya nke ọma", "Ilekọta batrị bụ ọrụ mbụ"] },
            { title: "Iwu ịchaji", bullets: ["Chaja ziri ezi, elu ihe na-anaghị agba ọkụ", "Ahapụla ya mgbe ọ na-achaji", "Ọ bụghị nke fụrụ akpụ, nwere oghere ma ọ bụ na-ekpo ọkụ"] },
            { title: "Okpomọkụ na nchekwa", bullets: ["Ọ bụghị n'ụgbọala na-ekpo ọkụ ma ọ bụ n'anwụ", "Storage charge, ebe dị oyi ma kpọọ nkụ", "Akpa ma ọ bụ igbe na-eguzogide ọkụ"] },
            { title: "Soro ya ma wepụ ya n'ọrụ", bullets: ["Nye batrị nọmba, dee cycle", "Wepụ ndị fụrụ akpụ ma ọ bụ mebiri emebi n'ọrụ", "Tufuo ha n'ezi ebe nchịkọta"] }
          ],
          tryIt: "Dee usoro batrị otu peeji maka otu otu ndị ọrụ drone: inye nọmba, ịchaji, ijikwa ya n'ugbo n'okpomọkụ, nchekwa, akwụkwọ ndekọ cycle na iwepụ ya n'ọrụ. Tinye tebụl ndekọ batrị nwere kọlụm maka nọmba batrị, ụbọchị, cycle, ọnọdụ na ndetu.",
          youCanNow: "ịchaji, ichekwa, ibugharị na iwepụ batrị drone n'ọrụ n'enweghị nsogbu, na idebe akwụkwọ ndekọ batrị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ storage charge?", options: ["A chajiri ya ọkara, ọ jughị eju ma ọ tọghị n'efu, maka ichekwa karịa ụbọchị ole na ole", "A chajiri ya eju", "Ọ tọrọ n'efu kpamkpam", "A chajiri ya n'ụgbọala na-ekpo ọkụ"], answer: 0, why: "A na-edebe batrị a ga-echekwa karịa ụbọchị ole na ole na ọkara chaji, n'ebe dị oyi ma kpọọ nkụ." },
            { objective: "O2", q: "Ị ka rutere ala, ị chọkwara ife ọzọ n'oge na-adịghị anya. Batrị ahụ na-ekpo ọkụ. Gịnị ka ị ga-eme?", options: ["Chaji ya ozugbo n'anwụ", "Chaji ya n'ụgbọala ma hapụ ya", "Mee ka o jụọ oyi tupu i chaji ya, ma chaji ya na-ele ya anya n'elu ihe na-anaghị agba ọkụ", "Tinye ya na friza"], answer: 2, why: "Ịchaji batrị na-ekpo ọkụ ma ọ bụ ịhapụ ya mgbe ọ na-achaji na-eme ka ihe egwu ọkụ baa ụba." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Payload: igwefoto, sensọ na ngwa ịgba ọgwụ",
          minutes: 5,
          goal: "Jikwaa, tinye ma lekọta payload ndị dị mkpa nke drone ugbo.",
          text: [
            "Payload bụ ihe drone na-ebu iji rụọ ọrụ ahụ. Drone e ji ese maapụ na-ebu igwefoto RGB, ọtụtụ mgbe n'elu gimbal na-eme ka ọ kwụsie ike. Drone nlele ahụike ihe ọkụkụ nwere ike ibu igwefoto multispectral nwere sensọ ìhè anyanwụ na mbadamba calibration. Igwefoto thermal na-atụ okpomọkụ. Drone ịgba ọgwụ na-ebu tankị, pọmpụ, ọkpọkọ na nozzle, ụfọdụ na-agbasakwa granule ma ọ bụ mkpụrụ.",
            "Lekọta optics: debe lenzị na sensọ ìhè anyanwụ ka ha dị ọcha site na akwa lenzị dị nro, chebe ha site n'ihe mkpuchi (caps), debekwa igwefoto pụọ n'ájá na mmiri. Lelee na gimbal na-agagharị n'efu, nakwa na e tinyere payload ahụ ka o sie ike; payload na-adịghị ike na-emebi nguzozi na flight controller.",
            "Ngwa ịgba ọgwụ chọrọ nlekọta karịa: mgbe ojiji ọ bụla gasịrị, a na-asacha ya ma hichaa ya dị ka onye mere ya na akara (label) ọgwụ ahụ si chọọ, a na-elele nozzle maka ịka nká na ihe mgbochi, a na-emekwa calibration nke usoro niile ka o tinye ọnụ ọgụgụ ziri ezi. Cheta na ịgba ọgwụ site na drone chọrọ ikike ụgbọ elu na ikike ọgwụ; nlekọta anaghị anọchi ha."
          ],
          words: [["Payload", "ngwa drone na-ebu iji rụọ ọrụ, dị ka igwefoto ma ọ bụ tankị ịgba ọgwụ."], ["Gimbal", "ihe njide nwere moto na-eme ka igwefoto kwụsie ike."], ["Sensọ ìhè anyanwụ", "obere sensọ dị n'elu ụfọdụ drone multispectral na-atụ ìhè na-abịa iji dozie ihe a gụrụ."], ["Nozzle", "ọnụ na-eme ka mmiri ghọọ obere ntụpọ ọgwụ."]],
          slides: [
            { title: "Payload a na-ahụkarị", bullets: ["Igwefoto RGB n'elu gimbal", "Multispectral nwere sensọ ìhè anyanwụ", "Igwefoto thermal", "Tankị ịgba ọgwụ, pọmpụ, nozzle; ihe ịgbasa"] },
            { title: "Ilekọta optics", bullets: ["Hichaa lenzị na sensọ site n'akwa dị nro", "Tinye caps, debe pụọ n'ájá na mmiri", "Gimbal na-agagharị n'efu, njide siri ike"] },
            { title: "Ngwa ịgba ọgwụ", bullets: ["Sachaa ma hichaa dị ka onye mere ya na label si chọọ", "Lelee nozzle maka ịka nká na ihe mgbochi", "Mee calibration ọnụ ọgụgụ; a ka chọrọ ikike"] }
          ],
          sources: [FAO_ITU_DRONES],
          tryIt: "Họrọ otu payload (igwefoto RGB, igwefoto multispectral ma ọ bụ ngwa ịgba ọgwụ). Dee ndepụta nlekọta nwere opekata mpe ihe isii maka tupu na mgbe ojiji ọ bụla.",
          youCanNow: "itinye, ihicha na ilele payload ndị dị mkpa nke drone ugbo.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ payload na drone ugbo?", options: ["Batrị", "Ground station", "Ihe drone na-ebu iji rụọ ọrụ, dị ka igwefoto ma ọ bụ ngwa ịgba ọgwụ", "Njikọ redio"], answer: 2, why: "Payload bụ igwefoto, sensọ, ngwa ịgba ọgwụ ma ọ bụ ịgbasa na-arụ ọrụ ahụ." },
            { objective: "O3", q: "Mgbe ọrụ ịgba ọgwụ gwụrụ, gịnị ka ị ga-eme ngwa ịgba ọgwụ ahụ?", options: ["Sachaa ma hichaa ya dị ka onye mere ya na label si chọọ, ma lelee nozzle", "Hapụ ọgwụ fọdụrụ n'ime tankị", "Jiri mmiri na-agba ike saa drone niile", "Chekwaa ya ka ọ dị mmiri n'anwụ"], answer: 0, why: "A na-asacha ma hichaa ngwa ịgba ọgwụ mgbe ojiji ọ bụla gasịrị, a na-elelekwa nozzle maka ịka nká na ihe mgbochi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu usoro drone ugbo si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Gịnị mere e ji akpọ drone usoro (UAS ma ọ bụ RPAS)?", options: ["Ọ na-ada mma n'ụda", "Ọ gụnyere ụgbọ, ground station, njikọ redio, batrị na payload", "O nwere ọtụtụ propeller", "E mere ya n'ụlọ ọrụ"], answer: 1, why: "Akụkụ niile ọnụ na-eme ka drone rụọ ọrụ." },
          { objective: "O1", q: "Gịnị ka IMU na-ama?", options: ["Ịdaba n'akụkụ, ịtụgharị na mmegharị", "Mmiri dị n'ala", "Ọnụ ahịa ihe ọkụkụ", "Agba batrị"], answer: 0, why: "IMU na-ama mmegharị drone ka flight controller wee mee ka ọ kwụsie ike." },
          { objective: "O2", q: "Batrị fụrụ akpụ ntakịrị mgbe ụgbọ efe gasịrị. Ị kwesịrị:", options: ["Ịchaji ya ngwa ngwa", "Ịpịa ya ka ọ dị larịị", "Ife ya otu ugboro ọzọ", "Ịkwụsị iji ya ma wepụ ya n'ọrụ n'enweghị nsogbu"], answer: 3, why: "Ịfụ akpụ bụ ihe ịrịba ama nke mmebi na ihe egwu ọkụ." },
          { objective: "O2", q: "Ebee ka e kwesịrị ichekwa batrị drone maka ezumike ogologo?", options: ["E chajiri eju n'ụgbọala na-ekpo ọkụ", "Ọ tọrọ n'efu n'anwụ", "Na storage charge n'ime ihe dị oyi, kpọọ nkụ, na-eguzogide ọkụ", "N'ọkụ kichin"], answer: 2, why: "Storage charge na ebe dị oyi na-eme ka batrị lithium dịrị nchekwa ma dị mma." },
          { objective: "O3", q: "Gịnị ka gimbal na-eme?", options: ["Ọ na-eme ka igwefoto kwụsie ike", "Ọ na-achaji batrị", "Ọ na-agba ọgwụ ahụhụ", "Ọ na-atụ ogo elu"], answer: 0, why: "Gimbal na-eme ka igwefoto kwụsie ike maka foto doro anya." }
        ]
      }
    },
    {
      name: "Isi 2: Nlekọta n'ugbo na n'ụlọ ọrụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Nlele tupu na mgbe ụgbọ efe ọ bụla",
          minutes: 5,
          goal: "Mee nlele tupu na mgbe ụgbọ efe ma dee ihe ị hụrụ.",
          text: [
            "Nlele na-ejide obere nsogbu tupu ha akpata ọdịda. Nlele tupu ụgbọ efe na-elele na drone ahụ dị njikere ife ugbu a; nlele mgbe ụgbọ efe gasịrị na-achọta mmebi ma ọ bụ ịka nká site n'ụgbọ efe e mechara ma na-akwado ụbọchị ọzọ.",
            "Tupu ụgbọ efe: airframe na aka enweghị mgbawa, aka kpọchiri; propeller dị ọcha, siri ike, enweghị nkụja ma ọ bụ mgbawa; moto na-atụgharị n'efu n'enweghị ụda ọkpụkpụ; payload siri ike, lenzị dị ọcha; batrị nọ n'ọnọdụ ya ma kpọchie; sensọ na windo vision dị ọcha; ihe njikwa na app dị njikere; e lelere ọnọdụ firmware tupu ịhapụ ebe isi (base).",
            "Mgbe ụgbọ efe gasịrị: mee ka moto na batrị jụọ oyi; lelee okpomọkụ moto (moto na-ekpo ọkụ karịa ka o kwesịrị nwere ike ịna-emebi); chọọ mmebi ọhụrụ, ájá ma ọ bụ ahịhịa n'ime moto na oghere ikuku; hichaa drone site na brọsh dị nro ma ọ bụ akwa kpọrọ nkụ (agbala mmiri na-agba ike n'elu ngwa eletrọnịkị); dee oge ụgbọ efe, nsogbu na ozi ịdọ aka na ntị ọ bụla n'akwụkwọ ndekọ."
          ],
          steps: ["Tupu ụgbọ efe: ahụ, aka, propeller, moto, payload, batrị, sensọ, ihe njikwa.", "Fee naanị ma ọ bụrụ na ihe ọ bụla gafere.", "Mgbe ụgbọ efe gasịrị: mee ka o jụọ oyi, lelee okpomọkụ moto, chọọ mmebi na unyi.", "Hichaa site na brọsh dị nro ma ọ bụ akwa kpọrọ nkụ.", "Dee oge ụgbọ efe, nsogbu na ozi ịdọ aka na ntị."],
          words: [["Nlele (inspection)", "ilele nke ọma maka mmebi, ịka nká ma ọ bụ nsogbu."], ["Firmware", "sọftwia e wuru n'ime drone, ihe njikwa na batrị."]],
          slides: [
            { title: "Nlele abụọ", bullets: ["Tupu ụgbọ efe: ọ dị njikere ife ugbu a?", "Mgbe ụgbọ efe gasịrị: mmebi ma ọ bụ ịka nká taa?"] },
            { title: "Tupu ụgbọ efe", bullets: ["Ahụ, aka kpọchiri, propeller emebighị", "Moto na-atụgharị n'efu, payload siri ike", "Batrị kpọchiri, sensọ dị ọcha, app dị njikere"] },
            { title: "Mgbe ụgbọ efe gasịrị", bullets: ["Mee ka o jụọ oyi; lelee okpomọkụ moto", "Mmebi, ájá, ahịhịa na moto na oghere ikuku", "Hichaa ka ọ kpọọ nkụ, dee oge, nsogbu, ịdọ aka na ntị"] }
          ],
          tryIt: "Dee ndepụta nlele tupu ụgbọ efe na nke mgbe ụgbọ efe gasịrị, nke ọ bụla nwere opekata mpe ihe asatọ, maka drone e ji ese maapụ. Ọ bụrụ na i nwere drone, jiri ha otu ugboro ma dee ihe ị hụrụ.",
          youCanNow: "ilele drone tupu na mgbe ụgbọ efe ọ bụla ma dee ihe ị hụrụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka nlele tupu ụgbọ efe bụ maka ya?", options: ["Ịchọta naanị mmebi site n'ụgbọ efe gara aga", "Ịchaji batrị", "Imelite firmware n'ugbo", "Ilele na drone dị njikere ife ugbu a"], answer: 3, why: "Nlele tupu ụgbọ efe na-elele na drone dị njikere ife tupu ọ fepụ." },
            { objective: "O4", q: "N'oge nlele tupu ụgbọ efe, otu moto na-eme ụda ọkpụkpụ mgbe ị tụgharịrị ya. Gịnị ka ị ga-eme?", options: ["Fee ya nke ọma", "Efela ya; lelee moto ahụ maka ájá, ahịhịa ma ọ bụ mmebi", "Tinye mmanụ na propeller", "Fee obere ọrụ"], answer: 1, why: "Moto kwesịrị ịtụgharị n'efu; ụda ọkpụkpụ pụtara nsogbu a ga-edozi tupu ife." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Nlekọta a haziri ahazi, firmware na ndekọ",
          minutes: 5,
          goal: "Hazie usoro nlekọta site n'awa ụgbọ efe na kalenda, ma debe ndekọ nlekọta.",
          text: [
            "Ụfọdụ akụkụ na-aka nká site n'ojiji. Propeller, moto, bearing, gimbal, ụkwụ ọdịda (landing gear), pọmpụ na nozzle ịgba ọgwụ chọrọ ka a gbanwee ha n'usoro oge. Akwụkwọ ntụziaka onye mere ya na-enye oge ndị ahụ; akwụkwọ ntụziaka ọrụ gị na-edozi usoro nke gị. Hazie ya site n'awa ụgbọ efe (dịka ọmụmaatụ kwa awa 50) na site na kalenda (dịka ọmụmaatụ kwa ọnwa atọ), nke ọ bụla bu ụzọ ruo.",
            "Mmelite firmware na-edozi mperi ma na-agbakwunye ihe nchekwa, mana mmelite nwekwara ike ịgbanwe omume drone. Gụọ release notes, melite ya tupu ịhapụ ebe isi (ọ bụghị n'ugbo), melite drone, ihe njikwa na batrị ọnụ, ma nwalee ya site n'obere ụgbọ efe tupu ezi ọrụ.",
            "Debe akwụkwọ ndekọ nlekọta maka drone ọ bụla: ụbọchị, awa ụgbọ efe, ihe e lelere, e gbanwere ma ọ bụ e doziri, akụkụ e jiri, ụdị firmware, onye mere ya, na nsonaazụ ya. Ndị ọchịchị na-atụ anya ka ndị na-arụ ọrụ drone lekọta ụgbọ ha ma debe ndekọ; ndị ahịa na ndị inshọransị nwekwara ike ịrịọ ha."
          ],
          steps: ["Gụọ oge nlekọta onye mere ya nyere.", "Dee usoro nke gị site n'awa ụgbọ efe na kalenda.", "Hazie mmelite firmware n'ebe isi, gụọ release notes, mee ụgbọ efe nnwale.", "Debe akwụkwọ ndekọ nlekọta maka drone ọ bụla.", "Debe propeller na akụkụ ndị a na-achọkarị n'aka."],
          words: [["Nlekọta a haziri ahazi", "nlele na mgbanwe akụkụ e mere atụmatụ ya n'oge a kara aka."], ["Akwụkwọ ndekọ nlekọta", "ndekọ nlekọta niile e mere na drone."], ["Release notes", "nkọwa onye mere ya banyere ihe mmelite sọftwia na-agbanwe."]],
          slides: [
            { title: "Akụkụ na-aka nká", bullets: ["Propeller, moto, bearing, gimbal", "Ụkwụ ọdịda, pọmpụ, nozzle", "Gbanwee ha n'usoro oge"] },
            { title: "Awa na kalenda", bullets: ["Dịka ọmụmaatụ kwa awa 50 ma ọ bụ ọnwa 3", "Nke ọ bụla bu ụzọ ruo", "Gbasoo akwụkwọ ntụziaka onye mere ya"] },
            { title: "Firmware n'enweghị nsogbu", bullets: ["Gụọ release notes", "Melite n'ebe isi, akụkụ niile ọnụ", "Ụgbọ efe nnwale tupu ezi ọrụ"] },
            { title: "Akwụkwọ ndekọ nlekọta", bullets: ["Ụbọchị, awa, ọrụ e mere, akụkụ, firmware", "Onye mere ya na nsonaazụ", "Maka nchekwa, ndị ọchịchị, ndị ahịa, ndị inshọransị"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Mee tebụl usoro nlekọta maka otu drone nwere opekata mpe ihe isii (propeller, moto, gimbal, ụkwụ ọdịda, batrị, firmware), nke ọ bụla nwere oge n'awa na n'ọnwa, ma malite akwụkwọ ndekọ nlekọta nwere otu ihe ndekọ ọmụmaatụ.",
          youCanNow: "ịhazi nlekọta a haziri ahazi na mmelite firmware, na idebe ezigbo akwụkwọ ndekọ nlekọta.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka \"nke ọ bụla bu ụzọ ruo\" pụtara n'usoro nlekọta?", options: ["Rụọ ọrụ ahụ naanị kwa ọnwa atọ", "Rụọ ọrụ ahụ mgbe oke awa ụgbọ efe ma ọ bụ ụbọchị kalenda ruru, nke ọ bụla bu ụzọ ruo", "Hapụ ọrụ ahụ ma ọ bụrụ na drone na-efe nke ọma", "Rụọ ọrụ ahụ naanị mgbe ọ dara"], answer: 1, why: "Ịhazi site n'awa ụgbọ efe na kalenda, nke ọ bụla bu ụzọ ruo, na-egbochi akụkụ ịka nká karịa." },
            { objective: "O5", q: "Mmelite firmware pụtara mgbe ị nọ n'ugbo onye ahịa. Gịnị ka ị ga-eme?", options: ["Wụnye ya ozugbo n'ugbo", "Melite naanị drone ma ọ bụghị ihe njikwa", "Gbanyụọ mmelite niile ruo mgbe ebighị ebi", "Chere, wee melite ya n'ebe isi mgbe ị gụchara release notes, ma nwalee ya site n'obere ụgbọ efe"], answer: 3, why: "Mmelite nwere ike ịgbanwe omume, ya mere a na-eme ha n'ebe isi, ọnụ, ma nwalee ha tupu ezi ọrụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idozi nsogbu na ọnọdụ ugbo n'Afrịka",
          minutes: 6,
          goal: "Chọpụta nsogbu ndị a na-ahụkarị nzọụkwụ n'otu n'otu ma chebe drone pụọ n'ájá, okpomọkụ, mmiri ozuzo na mkpụchi ọkụ.",
          text: [
            "Dozie nsogbu otu nzọụkwụ n'otu oge: gụọ ozi ịdọ aka na ntị dị n'app, buru ụzọ lelee ihe kacha dị mfe nwere ike ịkpata ya, gbanwee otu ihe, ma nwalee. Nsogbu a na-ahụkarị: mperi kompas (pụọ n'ebe ígwè, ụgbọala na waya ọkụ dị, wee mee calibration ọzọ ma ọ bụrụ na a rịọrọ ya); GNSS na-adịghị ike (chere ka satịlaịt ndị ọzọ bịa, pụọ n'okpuru osisi ogologo); ịma jijiji ma ọ bụ ịkpagharị (lelee propeller mebiri emebi ma ọ bụ na-adịghị ike, ma ọ bụ aka gbagọrọ agbagọ); mperi moto (lelee ahịhịa, ájá ma ọ bụ moto mebiri emebi); oge ụgbọ efe dị mkpụmkpụ (batrị na-aka nká, okpomọkụ ma ọ bụ payload dị arọ).",
            "Ájá na-abanye na moto na gimbal: fepụ site n'elu ute ma ọ bụ tapọlin, hichaa mgbe ụgbọ efe gasịrị ma chekwaa ya n'igbe mechiri emechi. Okpomọkụ na-ebelata ndụ batrị ma nwee ike ime ka ngwa eletrọnịkị kpoo ọkụ karịa: debe batrị na ihe njikwa na ndò, fee n'oge oyi, ma nye drone ezumike n'etiti ụgbọ efe. Mmiri ozuzo na iru mmiri na-emebi ngwa eletrọnịkị ma ọ bụrụ na e mebeghị drone ahụ maka ha: efela n'oké mmiri ozuzo, mee ka ngwa kpọọ nkụ ma chekwaa ha na obere akpa na-amịkọrọ mmiri.",
            "N'ebe ọkụ latrik anaghị adị mgbe niile, hazie ịchaji: inverter ụgbọala ma ọ bụ ngwa ịchaji anyanwụ (solar), batrị zuru ezu maka ụbọchị ahụ, na ịchaji n'abalị n'ebe isi. Mara mgbe ị ga-akwụsị: ọ bụrụ na nsogbu na-alọghachi ma ọ bụ metụta nchekwa, kwụsị drone ife ma ziga ya n'ebe ọrụ (service centre) onye mere ya ma ọ bụ nye teknịshan ruru eru."
          ],
          steps: ["Gụọ kpọmkwem ozi ịdọ aka na ntị.", "Buru ụzọ lelee ihe kacha dị mfe nwere ike ịkpata ya.", "Gbanwee otu ihe n'otu oge, wee nwalee.", "Jiri ute ọdịda; hichaa ma tinye drone n'igbe mgbe ọrụ ájá gasịrị.", "Debe batrị na ndò; fee n'oge oyi; efela na mmiri ozuzo ma e mebeghị ya maka ya.", "Kwụsị drone ife ma ọ bụrụ na nsogbu nchekwa na-alọghachi."],
          words: [["Idozi nsogbu (troubleshooting)", "ịchọpụta ihe kpatara nsogbu nzọụkwụ n'otu n'otu."], ["Calibration", "usoro na-edozi sensọ, dị ka kompas, ka ọ gụọ ihe nke ọma."], ["A kwụsịrị ya ife (grounded)", "a naghị ekwe ka ọ fee ruo mgbe e doziri ya."]],
          slides: [
            { title: "Dozie nsogbu nzọụkwụ n'otu n'otu", bullets: ["Gụọ ozi ịdọ aka na ntị", "Ihe kacha dị mfe na mbụ", "Gbanwee otu ihe, wee nwalee"] },
            { title: "Nsogbu a na-ahụkarị", bullets: ["Mperi kompas: pụọ n'ebe ígwè dị, mee calibration ọzọ", "Ịkpagharị: propeller ma ọ bụ aka", "Ụgbọ efe dị mkpụmkpụ: batrị ochie, okpomọkụ, payload dị arọ"] },
            { title: "Ájá, okpomọkụ na mmiri ozuzo", bullets: ["Ute ọdịda, hichaa, igbe mechiri emechi", "Batrị na ndò, fee n'oge oyi", "Efela na mmiri ozuzo ma e mebeghị ya maka ya; mee ka ọ kpọọ nkụ"] },
            { title: "Ọkụ latrik na oke", bullets: ["Ịchaji site n'ụgbọala ma ọ bụ solar, batrị ndị ọzọ", "Kwụsị drone ife ma ọ bụrụ na nsogbu nchekwa na-alọghachi"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ nlekọta maka otu drone: ndepụta akụkụ na ọrụ ha, usoro batrị, ndepụta nlele tupu na mgbe ụgbọ efe, usoro oge site n'awa na kalenda, tebụl idozi nsogbu maka opekata mpe nsogbu ise, na ụdị akwụkwọ ndekọ nlekọta nwere ihe ndekọ ọmụmaatụ abụọ.",
          youCanNow: "idozi nsogbu drone ndị a na-ahụkarị, ichebe drone n'ọnọdụ ugbo n'Afrịka, na ime atụmatụ nlekọta zuru ezu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ nzọụkwụ mbụ n'idozi nsogbu?", options: ["Gụọ ozi ịdọ aka na ntị ma buru ụzọ lelee ihe kacha dị mfe nwere ike ịkpata ya", "Gbanwee ọtụtụ akụkụ n'otu oge", "Meghee batrị", "Fee elu karịa iji nwalee"], answer: 0, why: "Gụọ ozi ahụ, buru ụzọ lelee ihe dị mfe, gbanwee otu ihe ma nwalee." },
            { objective: "O6", q: "Ị ga-efe ụbọchị niile n'ugbo na-ekpo ọkụ, nwere ájá, na-enweghị ọkụ latrik. Gịnị ka ị ga-ahazi?", options: ["Otu batrị na ifepụ site n'elu ájá", "Hapụ batrị n'anwụ ka ha dị ọkụ", "Ute maka ifepụ, ndò maka batrị, oge oyi, na batrị zuru ezu a chajiri ma ọ bụ chaja solar ma ọ bụ nke ụgbọala", "Fee n'enyeghị drone ezumike"], answer: 2, why: "Ute na-egbochi ájá, ndò na oge oyi na-echebe batrị, a ga-ahazikwa ịchaji n'ebe ọkụ latrik anaghị adị mgbe niile." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nlekọta n'ugbo na n'ụlọ ọrụ",
        questions: [
          { objective: "O4", q: "Propeller nwere obere nkụja n'ọnụ ya. Ị kwesịrị:", options: ["Ife ya nke ọma", "Ịkechi ya teepu", "Ịgbanwe ya tupu ife", "Ịkwọcha ya ka ọ dị larịị wee fee"], answer: 2, why: "Propeller mebiri emebi na-akpata ịma jijiji ma nwee ike ịda n'oge ụgbọ efe." },
          { objective: "O4", q: "Mgbe ụgbọ efe gasịrị, otu moto na-ekpo ọkụ karịa ndị ọzọ nke ukwuu. Nke a nwere ike ịpụta:", options: ["Moto ahụ na-emebi ma ọ bụ ihe gbochiri ya", "Drone ahụ fere nke ọma", "Igwefoto ahụ ruru unyi", "Batrị ahụ dị ọhụrụ"], answer: 0, why: "Okpomọkụ na-adịghị nkịtị nwere ike igosi bearing ọjọọ, unyi ma ọ bụ moto na-emebi." },
          { objective: "O5", q: "Olee mgbe i kwesịrị ịwụnye mmelite firmware?", options: ["N'etiti ugbo onye ahịa", "N'oge ụgbọ efe", "Ọ dịghị mgbe ọ bụla", "N'ebe isi, mgbe ị gụchara release notes, wee mee ụgbọ efe nnwale"], answer: 3, why: "Mmelite nwere ike ịgbanwe omume; nwalee tupu ezi ọrụ." },
          { objective: "O6", q: "App na-egosi mperi kompas mgbe ọ na-achọ ifepụ. Ezigbo nzọụkwụ mbụ bụ:", options: ["Fepụ n'agbanyeghị", "Pụọ n'ebe ígwè, ụgbọala na waya ọkụ dị ma mee calibration ọzọ ma ọ bụrụ na a rịọrọ ya", "Wepụ kompas ahụ", "Fee na sport mode"], answer: 1, why: "Ígwè na ihe magnet na-emebi kompas." },
          { objective: "O6", q: "Olee otu i si echebe drone pụọ n'ájá n'ugbo kpọrọ nkụ?", options: ["Fepụ site n'elu ute, hichaa mgbe ụgbọ efe gasịrị, chekwaa n'igbe mechiri emechi", "Jiri ọkpọkọ mmiri saa ya", "Fee nso n'ala karịa", "Hapụ ya n'ekpuchighị ya"], answer: 0, why: "Ájá na-emebi moto na gimbal; ute, ihicha na igbe na-enyere aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone Ugbo: Teknụzụ UAS na Nlekọta Ya",
    questions: [
      { objective: "O1", q: "Njikọ C2 bụ:", options: ["Ụdị batrị", "Njikọ redio dị n'etiti ihe njikwa na drone", "Nha propeller", "Lenzị igwefoto"], answer: 1, why: "Njikọ command and control na-ebu iwu na data." },
      { objective: "O1", q: "ESC na-achịkwa:", options: ["Zoom igwefoto", "Nchekwa batrị", "Ka moto ọ bụla si agba ọsọ", "Satịlaịt GPS"], answer: 2, why: "Electronic speed controllers na-akwọ moto." },
      { objective: "O1", q: "Flight controller bụ:", options: ["Ụbụrụ dị n'ime drone na-eme ka ọ kwụsie ike", "Onye na-efe ya", "Igbe ihe njikwa", "Ebe ọdịda"], answer: 0, why: "Ọ na-agụ sensọ ma na-ahazi moto ọtụtụ ugboro n'otu sekọnd." },
      { objective: "O1", q: "GNSS na-enye drone:", options: ["Agba ya", "Okpomọkụ", "Ọkwa batrị", "Ebe ọ nọ site na satịlaịt"], answer: 3, why: "GNSS, dị ka GPS, na-enye ebe ọ nọ." },
      { objective: "O1", q: "Barometer dị na drone na-atụ:", options: ["Ụzọ ifufe", "Nrụgide ikuku, e ji ama ogo elu", "Ahụike ihe ọkụkụ", "Charge cycle batrị"], answer: 1, why: "Nrụgide ikuku na-agbanwe ka ogo elu na-agbanwe." },
      { objective: "O2", q: "Gịnị mere batrị LiPo ji nwee ike ịdị ihe egwu?", options: ["Ha dị arọ", "Ha na-eme mkpọtụ", "Ha nwere ike ịgba ọkụ ma ọ bụrụ na ha emebie, a chajie ha karịa ma ọ bụ ha ekpoo ọkụ karịa", "Ha anaghị achaji mgbe ọ bụla"], answer: 2, why: "Ike dị ukwuu n'ime ha pụtara ihe egwu dị elu mgbe e jighị ha nke ọma." },
      { objective: "O2", q: "E kwesịrị ịchaji batrị:", options: ["Site na chaja ziri ezi, na-ele ya anya, n'elu ihe na-anaghị agba ọkụ", "N'abalị niile n'elu akwa ndina", "N'ime ụgbọala na-ekpo ọkụ", "Site na chaja ọ bụla dabara"], answer: 0, why: "Nzọụkwụ ndị a na-ebelata ihe egwu ọkụ." },
      { objective: "O2", q: "Charge cycle bụ:", options: ["Akụkụ igwe kwụ otu ebe (bicycle)", "Atụmatụ ụgbọ efe", "Ụdị ihu igwe", "Otu ojiji zuru ezu nke ike batrị"], answer: 3, why: "Idekọ cycle na-egosi ka batrị si aka nká." },
      { objective: "O2", q: "Batrị drone mebiri emebi e wepụrụ n'ọrụ kwesịrị ịga:", options: ["N'ọkụ esi nri", "N'ezi ebe nchịkọta e-waste ma ọ bụ batrị", "N'ahịhịa nkịtị", "N'osimiri"], answer: 1, why: "Batrị lithium chọrọ nchịkọta na mmegharị n'enweghị nsogbu." },
      { objective: "O3", q: "Sensọ ìhè anyanwụ nke drone multispectral:", options: ["Na-achaji batrị", "Na-atụ ifufe", "Na-atụ ìhè na-abịa iji dozie ihe a gụrụ", "Na-agba mmiri"], answer: 2, why: "Ọ na-enyere aka idozi mgbanwe ìhè." },
      { objective: "O3", q: "Payload na-adịghị ike n'ebe ọ dị nwere ike:", options: ["Imebi nguzozi na njikwa drone", "Ime ka foto ka mma", "Ime ka drone dị mfe", "Ime ka ọ chaji ngwa ngwa"], answer: 0, why: "Flight controller na-atụ anya ibu siri ike ma guzozie." },
      { objective: "O3", q: "E kwesịrị ilele nozzle ịgba ọgwụ maka:", options: ["Agba ha", "Stika aha ụlọ ọrụ", "Egwu", "Ịka nká na ihe mgbochi"], answer: 3, why: "Nozzle kara nká ma ọ bụ gbochiri egbochi na-agba ọnụ ọgụgụ ezighi ezi." },
      { objective: "O3", q: "Ezigbo nlekọta ngwa ịgba ọgwụ ọ na-anọchi ikike ịgba ọgwụ?", options: ["Ee", "Mba; a ka chọrọ ikike ụgbọ elu na ikike ọgwụ", "Naanị n'obere ugbo", "Naanị n'abalị"], answer: 1, why: "Nlekọta na ikike iwu bụ ihe abụọ dị iche a chọrọ." },
      { objective: "O4", q: "A na-eme nlele mgbe ụgbọ efe gasịrị iji:", options: ["Chaji ihe njikwa", "Hazie onye ahịa ọzọ", "Chọta mmebi ma ọ bụ ịka nká site n'ụgbọ efe e mechara", "Dezie foto"], answer: 2, why: "Ọ na-ejide nsogbu tupu ụgbọ efe ọzọ." },
      { objective: "O4", q: "Olee otu i kwesịrị isi hichaa drone mgbe ụgbọ efe nwere ájá gasịrị?", options: ["Brọsh dị nro ma ọ bụ akwa kpọrọ nkụ", "Mmiri na-agba ike", "Akwụkwọ ájá (sandpaper)", "Peterol"], answer: 0, why: "Mmiri na kemịkal nwere ike imebi ngwa eletrọnịkị." },
      { objective: "O5", q: "A na-ahazi nlekọta a haziri ahazi site na:", options: ["Naanị agba", "Naanị ihu igwe", "Naanị onye ahịa", "Awa ụgbọ efe na kalenda, nke ọ bụla bu ụzọ ruo"], answer: 3, why: "Akụkụ na-aka nká site n'ojiji na site n'oge." },
      { objective: "O5", q: "Akwụkwọ ndekọ nlekọta na-edekọ:", options: ["Naanị ọnụ ahịa drone", "Ụbọchị, awa, ọrụ e mere, akụkụ, firmware, onye mere ya, nsonaazụ", "Nọmba ekwentị ndị ọrụ ugbo", "Ọnụ ahịa ihe ọkụkụ"], answer: 1, why: "Ndekọ zuru ezu na-akwado nchekwa na irube isi n'iwu." },
      { objective: "O6", q: "Drone na-akpagharị n'oge ụgbọ efe. Buru ụzọ lelee:", options: ["Maapụ onye ahịa", "Amụma ihu igwe nke ọnwa na-abịa", "Propeller na aka maka mmebi ma ọ bụ ịdị ụrụrụ", "Kaadị ebe nchekwa (memory card)"], answer: 2, why: "Propeller mebiri emebi na aka gbagọrọ agbagọ na-akpata ịma jijiji." },
      { objective: "O6", q: "N'oké okpomọkụ, ị kwesịrị:", options: ["Idebe batrị na ndò ma fee n'oge oyi", "Ịhapụ batrị n'anwụ", "Ife na-akwụsịghị n'enweghị ezumike", "Ịchaji batrị mgbe ha na-ekpo ọkụ"], answer: 0, why: "Okpomọkụ na-ebelata ndụ batrị ma na-enye ngwa eletrọnịkị nsogbu." },
      { objective: "O6", q: "Nsogbu nchekwa na-alọghachi mgbe i dozisịrị ya. Ị kwesịrị:", options: ["Ịnọgide na-efe", "Izochi ya n'aka ndị ahịa", "Ikpuchi ozi ịdọ aka na ntị", "Ịkwụsị drone ife ma ziga ya nye teknịshan ruru eru"], answer: 3, why: "Nsogbu nchekwa na-alọghachi chọrọ ọkachamara ka o dozie ya tupu ife." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [0, 2, 5, 6, 9, 12, 13, 15, 17, 19]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ndepụta akụkụ", objective: "O1", notYet: "Akụkụ ndị dị mkpa adịghị, ma ọ bụ a kọwaghị ihe ha na-eme.", meets: "E depụtara akụkụ ọ bụla dị mkpa nke ụgbọ ahụ na usoro ala ya, ya na ihe ọ na-eme.", exceeds: "Ọ na-egosi akụkụ ndị na-aka nká na ndị chọrọ calibration." },
      { name: "Ilekọta batrị", objective: "O2", notYet: "Nzọụkwụ ịchaji, nchekwa ma ọ bụ iwepụ n'ọrụ adịghị ma ọ bụ enweghị nchekwa.", meets: "Nzọụkwụ ịchaji n'enweghị nsogbu, ime ka o jụọ oyi, storage charge, ibugharị na iwepụ n'ọrụ, ya na isoro cycle.", exceeds: "O nwere atụmatụ ọkụ maka ebe a na-achaji." },
      { name: "Ndepụta nlele", objective: "O4", notYet: "Enweghị ndepụta, ma ọ bụ ihe ndị dị mkpa dị ka propeller na ihe nkpọchi batrị adịghị.", meets: "Ndepụta tupu na mgbe ụgbọ efe na-ekpuchi airframe, propeller, moto, payload, batrị, sensọ na ndetu ndekọ.", exceeds: "Nlele payload dabara n'ezi ọrụ drone ahụ, dị ka ise maapụ ma ọ bụ ịgba ọgwụ." },
      { name: "Usoro oge na ndekọ", objective: "O5", notYet: "Enweghị oge a kara aka, ma ọ bụ akwụkwọ ndekọ enweghị ụfọdụ ebe.", meets: "Usoro site n'awa ụgbọ efe na kalenda, usoro firmware, na ụdị akwụkwọ ndekọ nwere ihe ndekọ ọmụmaatụ abụọ.", exceeds: "E si n'akwụkwọ ntụziaka onye mere ya were oge ndị ahụ, e dekwara ebe e si nweta ha." },
      { name: "Tebụl idozi nsogbu", objective: "O6", notYet: "Nsogbu erughị ise, ma ọ bụ enweghị nzọụkwụ.", meets: "Opekata mpe nsogbu ise a na-ahụkarị, nke ọ bụla nwere nlele mbụ dị mfe na mgbe a ga-akwụsị drone ife.", exceeds: "Ọ na-agbakwunye nzọụkwụ maka ájá, okpomọkụ, mmiri ozuzo na mkpụchi ọkụ n'ugbo nke onye na-amụ ihe n'onwe ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke atụmatụ nlekọta",
      "Ndị na-amụ ihe kwuru na ha na-eji ndepụta nlele e dere ede na akwụkwọ ndekọ nlekọta ụbọchị 30 ka e mechara (nnyocha nsochi)",
      "Azụmahịa drone ma ọ bụ ọgbakọ ndị ọrụ ugbo na-akọ na ọdịda, ihe ọghọm batrị ma ọ bụ ụbọchị a kwụsịrị drone ife belatara mgbe ọzụzụ gasịrị",
      "Ndị na-amụ ihe were ihe ọmụmụ drone ọzọ ma ọ bụ ọzụzụ teknịshan nke onye mere drone"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa maka nkuzi; ezi drone ugbo, ma ọ bụ foto ya doro anya, maka omume",
      "Akwụkwọ ntụziaka onye mere drone ahụ, ma ọ bụrụ na ọ dị",
      "Akwụkwọ ndetu ma ọ bụ spreadsheet maka ndepụta nlele, usoro oge na akwụkwọ ndekọ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge ide atụmatụ nlekọta"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee gagharịa ezi drone (agbanyụrụ ya, e wepụrụ propeller) iji kpọọ aha akụkụ ọ bụla.",
      "Jikwaa batrị naanị n'elu ihe na-anaghị agba ọkụ, ma achajila, adula oghere ma ọ bụ meghee batrị fụrụ akpụ na klas mgbe ọ bụla.",
      "Jiri akwụkwọ ntụziaka nke drone ahụ maka oge na usoro; ihe ọmụmụ ahụ na-enye naanị ụzọ n'ozuzu.",
      "Ejila ọgwụ ahụhụ mee ka ngwa ịgba ọgwụ rụọ ọrụ na klas; jiri mmiri dị ọcha ma ọ bụ enweghị mmiri mee omume nlele.",
      "Jiri rubric tụọ akara atụmatụ nlekọta ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
