"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-intro.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const FAO_ITU_DRONES = { name: "FAO and ITU: E-agriculture in Action: Drones for Agriculture (2018)", url: "https://www.itu.int/pub/D-STR-E_AGRICULT.02-2018" };
const FAO_WHO_AERIAL = { name: "FAO and WHO: Guidance for aerial application of pesticides (2024)", url: "https://www.who.int/publications/i/item/9789240076785" };

module.exports = {
  id: "agri-drones-intro-ig",
  lang: "ig",
  translationOf: "agri-drones-intro",
  category: "Agriculture (Africa)",
  name: "Drone maka Nlekọta Ugbo 1: Mmalite, Iwu na Nchekwa",
  skills: "Ịkọwa ihe drone ugbo na-eme, Ịhọrọ ụdị drone dabara ọrụ, Ịchọta iwu ụlọ ọrụ na-achị ụgbọelu, Ịlele ebe a ga-efe drone maka ihe egwu, Ime nzukọ nchekwa tupu efee drone",
  outcome: "ikpebi ma drone ọ bụ ngwa kwesịrị ekwesị maka nsogbu ugbo, ịkpọ aha ụlọ ọrụ na-achị ụgbọelu na akwụkwọ ndị ị chọrọ tupu i fee ya, na ide obere atụmatụ iji drone nwere ndepụta nchekwa maka otu ugbo.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọrụ ugbo, ndị ọrụ extension (ndị na-enye ndị ọrụ ugbo ndụmọdụ), ndị nwe azụmahịa ugbo na ndị ntorobịa na Kenya, Nigeria na n'Afrịka niile chọrọ ịmalite iji drone lekọta ihe ọkụkụ, anụmanụ na ala. Ọ dịghị mkpa ka i nwee drone ugbu a.",
    "N'Isi 1 ị ga-amụta ihe drone nwere ike ime na ihe ọ na-enweghị ike ime n'ugbo, ụdị drone ndị bụ isi, na otu esi amata mgbe drone kwesịrị ego ya ma e jiri ya tụnyere ije ụkwụ n'ubi ma ọ bụ iji foto satịlaịtị n'efu. N'Isi 2 ị ga-amụta onye na-eme iwu drone na mba gị, akwụkwọ ndị a na-achọkarị, na otu esi elele ebe a ga-efe ya ma kọwara ndị otu gị atụmatụ ka onye ọ bụla ghara imerụ ahụ.",
    "Iwu drone bụ iwu obodo, ha na-agbanwekwa. Ihe ọmụmụ a anaghị agwa gị mgbe ọ bụla na ị nwere ike ife drone: ọ na-egosi gị otu esi achọta iwu gọọmentị mba gị ma gbasoo ha. Ọ bụ Ihe ọmụmụ 1 nke usoro nwere akụkụ isii; ihe ọmụmụ ndị ọzọ na-akụzi ife drone, ịse foto, ahụike ihe ọkụkụ, ọrụ ugbo nke ọma (precision farming) na ịgba mmemme drone.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise: gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ iji drone, otu peeji, maka otu ezi ugbo ma ọ bụ ugbo ọmụmaatụ (dịka ọmụmaatụ acre 3 nke ọka na agwa na Nakuru, ma ọ bụ hectare 5 nke akpụ na Oyo State): nsogbu drone ga-enyere aka na ya, ụdị drone na ihe mere i ji họrọ ya, ụlọ ọrụ na-achị ụgbọelu na akwụkwọ ndị i kwesịrị ilele ma ọ bụ nweta, ihe egwu ndị ị hụrụ n'ebe ahụ, na ndepụta nchekwa tupu efee drone nwere opekata mpe ihe asatọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọrụ ugbo, ndị ọrụ extension, ndị nwe azụmahịa ugbo na ndị ntorobịa na Kenya, Nigeria na n'Afrịka niile chọrọ ịmalite iji drone lekọta ihe ọkụkụ, anụmanụ na ala. Ọtụtụ n'ime ha enwebeghị drone.",
    startingPoint: "Ọtụtụ ahụla drone na vidiyo ma ọ bụ n'ebe a na-egosi ya, ha na-ejekwa ije n'ubi ha ilele ihe ọkụkụ. Ole na ole maara drone na igwefoto dabara ọrụ ugbo ọ bụla, mgbe drone kwesịrị ego ya, onye na-eme iwu drone na mba ha, ma ọ bụ otu esi elele ebe ma kọwara ndị otu atụmatụ tupu efee ya.",
    gap: "Ndị mmadụ na-azụta drone na-adabaghị ọrụ ahụ, na-efe ya n'enweghị ndebanye aha na ikike iwu chọrọ, ma ọ bụ na-etinye ndị mmadụ na ụgbọelu n'ihe egwu. Ịmara ihe drone nwere ike ime na ihe ọ na-enweghị ike ime, iwu, na nchekwa ebe ahụ na-enyere ndị na-amụ ihe aka ikpebi nke ọma ma malite usoro drone n'ụzọ dị mma nke iwu kwadoro.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu drone ọ bụla",
      "Ngwaọrụ: ekwentị nwere ịntanetị iji chọta peeji drone nke ụlọ ọrụ na-achị ụgbọelu; ọ dịghị mkpa drone",
      "Iwu bụ iwu obodo, ha na-agbanwekwa: ihe ọmụmụ a anaghị ekwu mgbe ọ bụla na onye na-amụ ihe nwere ike ife drone; ndị na-amụ ihe na-elele iwu gọọmentị mba ha",
      "Oge: nkuzi nke ihe dị ka nkeji 5 dabara n'etiti ọrụ ugbo",
      "Nchekwa na nzuzo: enweghị ife drone n'ihe ọmụmụ a; esela foto ndị mmadụ ma ọ bụ ụlọ ha"
    ],
    prerequisites: "Ọ dịghị. Nke a bụ Ihe ọmụmụ 1 nke usoro drone nwere akụkụ isii."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta nsogbu ugbo", action: "ịmata ndị drone nwere ike inyere aka na ndị ọ na-enweghị ike inyere aka", standard: "ma kpọọ aha opekata mpe ọrụ anọ ọ nwere ike inyere aka na abụọ ọ na-enweghị ike ime" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ ugbo na nha ugbo ahụ", action: "ịhọrọ ụdị drone na igwefoto dabara ọrụ ahụ", standard: "ma nye ihe kpatara nhọrọ ọ bụla" },
    { id: "O3", condition: "Maka otu nsogbu ugbo", action: "itụnyere drone, foto satịlaịtị n'efu na ije ụkwụ n'ubi ma họrọ ngwa kacha mma", standard: "ma gụọ ụgwọ niile na mkpebi foto ndị ahụ ga-agbanwe" },
    { id: "O4", condition: "Maka mba gị", action: "ịchọta ụlọ ọrụ na-achị ụgbọelu ma depụta akwụkwọ drone ndị ọ nwere ike ịchọ", standard: "site n'iji naanị weebụsaịtị ma ọ bụ ọfịs nke ụlọ ọrụ ahụ n'onwe ya" },
    { id: "O5", condition: "Tupu efee drone ọ bụla n'ugbo", action: "ije ije n'ebe ahụ ma kaa akara ihe egwu na ebe a na-anaghị efe drone", standard: "ma gwa onye ọrụ ugbo na ndị agbata obi mgbe ị ga-efe ya" },
    { id: "O6", condition: "Tupu na n'oge a na-efe drone", action: "ime nzukọ tupu efee ya na ndepụta nchekwa ma kwuo nzọụkwụ mbụ n'oge ihe mberede", standard: "nke nwere opekata mpe ihe asatọ na ndepụta ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Drone n'ugbo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe drone nwere ike imere ugbo",
          minutes: 5,
          goal: "Kpọọ aha ọrụ ugbo anọ drone nwere ike inyere aka na ya, na abụọ ọ na-enweghị ike ime.",
          text: [
            "Drone bụ obere ụgbọelu na-enweghị onye ọkwọ ya n'ime ya. Mmadụ nọ n'ala na-akwọ ya site na rimot (remote controller) ma ọ bụ ekwentị, ma ọ bụ setịpụ ya ka o fee n'onwe ya n'ụzọ a kwadoro. Ụlọ ọrụ na-achị ụgbọelu na-akpọ ya unmanned aircraft system (UAS) ma ọ bụ remotely piloted aircraft system (RPAS).",
            "N'ugbo, ọtụtụ drone na-ebu igwefoto. Site n'elu, ị na-ahụ ubi niile n'otu oge: ebe mkpụrụ na-epughị, ebe na-acha odo odo ma ọ bụ na-akpọnwụ, akụkụ mmiri jupụtara, mbuze ala, ngere gbajiri agbaji, na anụmanụ nọ n'ebe na-ekwesịghị. FAO na ITU depụtara nlekọta ihe ọkụkụ, ịdọ aka na ntị n'oge, nlekọta ụmụ ahụhụ, ịchọta anụmanụ na nlekọta ọhịa n'ime ọrụ ugbo ndị bụ isi.",
            "Ụfọdụ drone ka ukwuu na-agba ọgwụ ma ọ bụ na-agbasa mkpụrụ na fatịlaịza. Ịgba ọgwụ ahụhụ site na drone bụ ọrụ pụrụ iche nwere ihe egwu karịa, nke chọrọ ikike nke ya site n'aka ụlọ ọrụ na-achị ụgbọelu NA onye na-achị ọgwụ ahụhụ, ya mere ihe ọmụmụ a na-akụzi naanị nlekọta.",
            "Drone enweghị ike ịgwa gị IHE MERE ebe ahụ ji acha odo odo. Ọ na-egosi gị EBE ị ga-ele. Ị ka ga-aga n'ebe ahụ, lee akwụkwọ, ala na ụmụ ahụhụ, wee kpebie ihe ị ga-eme. O nweghịkwa ike ife n'oke mmiri ozuzo ma ọ bụ n'ike ifufe, batrị ya anaghịkwa adịkarị ruo otu awa."
          ],
          words: [["Drone", "obere ụgbọelu a na-akwọ n'enweghị onye ọkwọ ya n'ime ya."], ["UAS / RPAS", "aha gọọmentị: unmanned aircraft system, remotely piloted aircraft system. Ụgbọelu ahụ, rimot ya na njikọ dị n'etiti ha."], ["Nlele ubi (scouting)", "ije ije n'ubi ịchọ nsogbu dị ka ụmụ ahụhụ, ọrịa ma ọ bụ ahịhịa."]],
          slides: [
            { title: "Drone bụ", bullets: ["Obere ụgbọelu na-enweghị onye ọkwọ ya n'ime ya", "A na-akwọ ya site n'ala, ma ọ bụ n'ụzọ a kwadoro", "Aha gọọmentị ya bụ UAS ma ọ bụ RPAS"] },
            { title: "Ihe ọ na-enyere aka", bullets: ["Ịhụ ubi niile n'otu oge", "Ịchọta ebe mkpụrụ na-epughị, ebe na-acha odo odo ma ọ bụ na-akpọnwụ", "Ịhụ mmiri jupụtara, mbuze ala, ngere gbajiri agbaji", "Ịgụ na ịchọta anụmanụ"] },
            { title: "Ihe ọ na-enweghị ike ime", bullets: ["Ịgwa gị IHE MERE ebe ahụ ji rịa ọrịa: ị ka ga-aga ebe ahụ", "Ife n'oke mmiri ozuzo ma ọ bụ n'ike ifufe", "Ịnọ n'elu ọtụtụ awa n'otu batrị"] },
            { title: "Ịgba ọgwụ dị iche", bullets: ["Drone na-agba ọgwụ chọrọ ikike ndị ọzọ", "Ụlọ ọrụ na-achị ụgbọelu NA onye na-achị ọgwụ ahụhụ", "Ihe ọmụmụ a na-akụzi naanị nlekọta"] }
          ],
          sources: [FAO_ITU_DRONES, FAO_WHO_AERIAL],
          tryIt: "Chee echiche banyere otu ugbo ị maara. Dee nsogbu atọ dị n'ugbo ahụ i nwere ike ịhụ site n'elu, na otu nsogbu drone na-enweghị ike inyere aka na ya (dịka ọmụmaatụ, ọnụ ahịa dị ala n'ahịa).",
          youCanNow: "ịkọwa ihe drone ugbo na-eme, ịkpọ aha ọrụ ndị ọ na-enyere aka, na ikwu ihe mere i ji ka na-aga n'ubi n'ụkwụ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka drone nwere igwefoto nwere ike igosi onye ọrụ ugbo?", options: ["Ihe mere osisi ji rịa ọrịa", "Ezi aha ọrịa ahụ", "Ebe mkpụrụ na-epughị, ebe na-acha odo odo ma ọ bụ akụkụ mmiri jupụtara dị", "Ego owuwe ihe ubi ga-ere"], answer: 2, why: "Drone na-egosi ebe ị ga-ele; ị ka ga-aga n'ebe ahụ ịchọpụta ihe kpatara ya." },
            { objective: "O1", q: "Onye ọrụ ugbo chọrọ ife drone nwere igwefoto n'oke mmiri ozuzo ilele idei mmiri. Gịnị ka ị ga-agwa ya?", options: ["Fee ya elu karịa n'mmiri ozuzo", "Chere; drone enweghị ike ife n'oke mmiri ozuzo, ya mere lelee mgbe ọ kwụsịrị", "Fee ya ruo mgbe batrị gwụrụ", "Gbaa ubi ọgwụ n'otu oge ahụ"], answer: 1, why: "Drone enweghị ike ife n'oke mmiri ozuzo ma ọ bụ n'ike ifufe." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhọrọ ụdị drone kwesịrị ekwesị",
          minutes: 5,
          goal: "Jikọta ụdị drone na igwefoto na ọrụ ugbo.",
          text: [
            "E nwere ụdị drone ugbo atọ bụ isi. Multirotor nwere fan (propeller) anọ ma ọ bụ karịa, dị ka obere helikopta. Ọ na-esi n'obere ebe efeli, nwere ike ịkwụ otu ebe n'ikuku, ọ dịkwa mfe ịmụta, mana ọ na-ekpuchi obere ala n'otu batrị. Ọ dabara obere ugbo, ụlọ ihe ọkụkụ (greenhouse) na ilele otu ebe.",
            "Drone fixed-wing dị ka obere ụgbọelu. Ọ na-efegharị n'ikuku, ya mere ọ na-ekpuchi nnukwu ala dị ka ubi tii hectare 200 ma ọ bụ ebe a na-azụ ehi, mana ọ chọrọ ohere iji efeli na ịda, ọ siekwa ike ịkwọ. Drone hybrid (VTOL) na-efeli ọtọ dị ka multirotor wee fee dị ka ụgbọelu.",
            "Igwefoto dị mkpa dị ka drone n'onwe ya. Igwefoto agba nkịtị (RGB) zuru ezu ịhụ ebe mkpụrụ na-epughị, ahịhịa, mmiri jupụtara na anụmanụ. Igwefoto multispectral na-atụ ìhè anya na-adịghị ahụ ma na-enyere aka igosi nsogbu osisi n'oge. Igwefoto thermal na-egosi okpomọkụ: ọ bara uru maka ụkọ mmiri, mmiri na-ehi n'ọkpọkọ ịgba mmiri, na ịchọta anụmanụ.",
            "Malite n'obere. Ọtụtụ ndị ọrụ extension na ndị ntorobịa na-enye ọrụ na-amalite n'obere multirotor nwere igwefoto RGB, mụta nke ọma, wee tinyekwuo sensọ ndị ọzọ ma emechaa."
          ],
          steps: ["Dee ọrụ ahụ: gịnị ka ị chọrọ ịhụ, oleekwa otu ala ahụ ha?", "Obere ala ma ọ bụ ịchọ ịkwụ otu ebe n'ikuku: multirotor. Nnukwu ala: fixed-wing ma ọ bụ hybrid.", "Họrọ igwefoto: RGB maka ọtụtụ ọrụ, multispectral maka nsogbu osisi n'oge, thermal maka okpomọkụ na mmiri.", "Lelee na a nabatara drone ahụ ma nwee ike idebanye ya aha na mba gị tupu i zụta ya."],
          words: [["Multirotor", "drone nwere fan anọ ma ọ bụ karịa nke nwere ike ịkwụ otu ebe n'ikuku."], ["Fixed-wing", "drone dị ka obere ụgbọelu nke na-efegharị ma na-ekpuchi nnukwu ala."], ["Igwefoto RGB", "igwefoto agba nkịtị (red, green, blue: uhie, akwụkwọ ndụ, anụnụ anụnụ)."], ["Igwefoto multispectral", "igwefoto na-atụkwa ìhè anya na-adịghị ahụ, dị ka near-infrared."]],
          slides: [
            { title: "Ụdị drone ugbo atọ", bullets: ["Multirotor: na-akwụ otu ebe, obere ohere, obere ala", "Fixed-wing: na-efegharị, nnukwu ala, chọrọ ohere iji efeli", "Hybrid (VTOL): na-efeli ọtọ, na-efe dị ka ụgbọelu"] },
            { title: "Ụdị igwefoto atọ", bullets: ["RGB: agba nkịtị, zuru ezu maka ọtụtụ ọrụ", "Multispectral: na-egosi nsogbu osisi n'oge", "Thermal: na-egosi okpomọkụ, ụkọ mmiri, anụmanụ"] },
            { title: "Jikọta drone na ọrụ", bullets: ["Ubi ọka acre 2: obere multirotor, RGB", "Ubi tii hectare 200: fixed-wing ma ọ bụ hybrid", "Ebe a na-azụ ehi n'isi ụtụtụ: igwefoto thermal ịchọta ehi"] },
            { title: "Malite n'obere", bullets: ["Mụta n'obere multirotor nwere RGB", "Tinyekwuo sensọ mgbe ị chọrọ ha", "Lelee iwu ndebanye aha tupu i zụta"] }
          ],
          tryIt: "Maka ọrụ ndị a, họrọ ụdị drone na igwefoto ma dee otu ihe kpatara ya: (a) ilele mpụta mkpụrụ n'ubi agwa acre 2, (b) ime maapụ ubi okpete hectare 150, (c) ịchọta ehi furu efu n'ọhịa n'isi ụtụtụ.",
          youCanNow: "ịhọrọ ụdị drone na igwefoto dabara ọrụ ugbo na nha ala ahụ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ drone multirotor?", options: ["Drone nwere fan anọ ma ọ bụ karịa nke nwere ike ịkwụ otu ebe n'ikuku", "Drone dị ka ụgbọelu", "Satịlaịtị", "Drone na-agba naanị ọgwụ"], answer: 0, why: "Multirotor nwere fan anọ ma ọ bụ karịa, na-esi n'obere ebe efeli, nwekwa ike ịkwụ otu ebe n'ikuku." },
            { objective: "O2", q: "Ị chọrọ ịchọta ebe mmiri na-ehi n'ọkpọkọ ịgba mmiri n'ugbo akwụkwọ nri. Kedu igwefoto ị ga-ahọrọ?", options: ["Igwefoto ekwentị nkịtị n'elu osisi", "Ọ dịghị igwefoto", "Naanị igwefoto RGB n'abalị", "Igwefoto thermal"], answer: 3, why: "Igwefoto thermal na-egosi okpomọkụ, nke bara uru maka ụkọ mmiri na mmiri na-ehi n'ọkpọkọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Drone ọ kwesịrị ego ya? Drone, satịlaịtị ma ọ bụ ije ụkwụ",
          minutes: 5,
          goal: "Kpebie ma drone, foto satịlaịtị n'efu ma ọ bụ ije ụkwụ n'ubi bụ ngwa kacha mma maka nsogbu ugbo.",
          text: [
            "Drone abụghị mgbe niile ngwa kacha mma. Maka obere ubi akwụkwọ nri dị n'azụ ụlọ nke ruru ụzọ anọ nke otu acre, ije n'ahịrị ubi ka ngwa ngwa ma bụrụ n'efu. Maka mpaghara dum, foto satịlaịtị n'efu (dịka ọmụmaatụ site na satịlaịtị Sentinel-2 nke Europe, nke a na-ahụ na ngwa ịntanetị n'efu) na-egosi ihe n'ozuzu kwa ụbọchị ole na ole, mana pixel ọ bụla dị ihe dị ka mita 10, nke buru ibu nke ukwuu ịhụ otu osisi.",
            "Drone nọ n'etiti. Ọ na-ahụ ihe ruo sentimita ole na ole, n'ụbọchị ị họọrọ, ọbụlagodi n'okpuru igwe ojii dị nro. Nke a na-eme ka ọ dị mma maka ugbo etiti na nnukwu ugbo, maka otu ndị ọrụ ugbo (cooperative) na-ekerịta otu drone n'ubi ọtụtụ ndị otu, na maka ihe ọkụkụ dị oke ọnụ dị ka tii, kọfị, ube oyibo (avocado) na akwụkwọ nri.",
            "Gụọ ụgwọ niile, ọ bụghị naanị ọnụ ahịa drone: ụgwọ ndebanye aha na ikike, ọzụzụ, batrị na fan ndị ọzọ, ekwentị ma ọ bụ tablet, data, njem na oge gị. Wee jụọ: kedu mkpebi foto ndị ahụ ga-agbanwe, mkpebi ahụ ọ bara uru karịa ụgwọ ahụ?"
          ],
          steps: ["Dee mkpebi ị chọrọ ime (dịka ọmụmaatụ: ebe a ga-akụgharị, ma ọ bụ akụkụ a ga-agwọ).", "Jụọ otu ala ahụ ha, na otu ihe ị chọrọ ịhụ si dị nta.", "Tụnyere ije ụkwụ, satịlaịtị na drone maka nha na nkọwa ahụ.", "Depụta ụgwọ niile nke iji drone ma tụnyere ya na uru nke mkpebi ka mma."],
          words: [["Foto satịlaịtị", "foto ụwa e sere site na mbara igwe; ndị n'efu na-egosi nnukwu ala mana nkọwa ole na ole."], ["Resolution", "otu ihe foto nwere ike igosi si dị nta; foto drone nwere ike igosi sentimita ole na ole, foto satịlaịtị n'efu ihe dị ka mita 10."]],
          slides: [
            { title: "Ụzọ atọ e si elekọta ugbo", bullets: ["Ije ụkwụ: n'efu, kacha mma maka obere ubi, nwayọọ maka nnukwu ndị", "Satịlaịtị: n'efu, nnukwu ala, nkọwa ihe dị ka mita 10", "Drone: nkọwa sentimita, n'ụbọchị ị họọrọ"] },
            { title: "Ebe drone na-akwụ ụgwọ ya", bullets: ["Ugbo etiti na nnukwu ugbo", "Otu ndị ọrụ ugbo na-ekerịta otu drone", "Ihe ọkụkụ dị oke ọnụ: tii, kọfị, avocado, akwụkwọ nri"] },
            { title: "Gụọ ụgwọ niile", bullets: ["Ndebanye aha, ikike na ọzụzụ", "Batrị, fan, ekwentị ma ọ bụ tablet, data", "Njem na oge gị"] },
            { title: "Ajụjụ bụ isi", bullets: ["Kedu mkpebi foto ndị ahụ ga-agbanwe?", "Mkpebi ahụ ọ bara uru karịa ụgwọ ahụ?"] }
          ],
          tryIt: "Họrọ otu nsogbu ugbo site na Nkuzi 1. Dee ngwa ị ga-eji (ije ụkwụ, satịlaịtị ma ọ bụ drone), ihe kpatara ya, ma depụta opekata mpe ụgwọ ise ma ọ bụrụ na i họrọ drone.",
          youCanNow: "ikpebi ma drone kwesịrị ego ya maka nsogbu ugbo site n'itụnyere ya na ije ụkwụ na foto satịlaịtị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere foto satịlaịtị n'efu ji buo ibu nke ukwuu ịhụ otu osisi?", options: ["Ha bụ naanị oji na ọcha", "A na-ese ha otu ugboro n'afọ", "Ha dị oke ọnụ", "Pixel ọ bụla dị ihe dị ka mita 10"], answer: 3, why: "Pixel Sentinel-2 dị ihe dị ka mita 10, ya mere ha na-egosi ihe n'ozuzu, ọ bụghị otu osisi." },
            { objective: "O3", q: "Onye ọrụ ugbo nwere ubi akwụkwọ nri ruru ụzọ anọ nke otu acre jụrụ ma ọ ga-azụta drone. Gịnị ka ị ga-atụ aro?", options: ["Jee ije n'ahịrị ubi; ọ ka ngwa ngwa ma bụrụ n'efu maka ubi dị nta otu ahụ", "Zụta drone fixed-wing kacha ukwuu", "Jiri igwefoto thermal kwa ụbọchị", "Gbazite drone na-agba ọgwụ"], answer: 0, why: "Maka obere ubi, ije n'ahịrị ubi ka ngwa ngwa, ọ dịghịkwa ego ọ na-efu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Drone n'ugbo",
        questions: [
          { objective: "O1", q: "Maapụ drone na-egosi ebe na-acha odo odo n'ubi ọka. Gịnị ka ị ga-eme ọzọ?", options: ["Gbaa ubi niile ọgwụ n'otu oge", "Jee n'ebe ahụ ma lee osisi, ala na ụmụ ahụhụ", "Leghara ya anya; maapụ drone na-ezighi ezi mgbe niile", "Fegharịa ruo mgbe ebe ahụ furu efu"], answer: 1, why: "Drone na-egosi EBE ị ga-ele; ị na-achọpụta IHE MERE ya n'ala." },
          { objective: "O2", q: "Kedu drone kacha mma maka ime maapụ ubi tii hectare 200?", options: ["Drone egwuregwu ụmụaka", "Obere drone e ji n'ime ụlọ", "Drone fixed-wing ma ọ bụ hybrid", "Ọ dịghị drone nwere ike ime nke a"], answer: 2, why: "Drone fixed-wing na hybrid na-efegharị ma na-ekpuchi nnukwu ala n'otu batrị." },
          { objective: "O2", q: "Kedu igwefoto kacha enyere aka ịchọta ehi n'ọhịa n'isi ụtụtụ?", options: ["Igwefoto thermal", "Naanị igwefoto ekwentị nkịtị", "Igwefoto na-enweghị anya (lens)", "Isi ihe na-agba ọgwụ"], answer: 0, why: "Igwefoto thermal na-egosi okpomọkụ anụmanụ mgbe ìhè dị ntakịrị." },
          { objective: "O4", q: "Ịgba ọgwụ ahụhụ site na drone:", options: ["Achọghị akwụkwọ ọzọ", "Dị ka ịse foto", "Chọrọ ikike nke ya site n'aka ụlọ ọrụ na-achị ụgbọelu na onye na-achị ọgwụ ahụhụ", "A nabatara ya ebe ọ bụla ma ọ bụrụ na ubi ahụ bụ nke gị"], answer: 2, why: "Ịgba ọgwụ bụ ọrụ pụrụ iche nwere ihe egwu karịa, chọrọ ikike ndị ọzọ." },
          { objective: "O3", q: "Maka obere ubi akwụkwọ nri ruru ụzọ anọ nke otu acre, ngwa kacha mma na-abụkarị:", options: ["Drone fixed-wing", "Drone multispectral", "Foto satịlaịtị", "Ije n'ahịrị ubi"], answer: 3, why: "N'obere ubi, ije ụkwụ ka ngwa ngwa, ka ọnụ ala, ma na-egosi ihe karịa." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu na nchekwa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Onye na-eme iwu drone na mba gị",
          minutes: 6,
          goal: "Chọta ụlọ ọrụ na-achị ụgbọelu na mba gị ma depụta akwụkwọ drone ndị ọ nwere ike ịchọ.",
          text: [
            "Mba ọ bụla na-achị ikuku dị n'elu ya. Na mba ọ bụla, ụlọ ọrụ gọọmentị na-achị ụgbọelu (civil aviation authority) na-eme iwu drone ma na-eme ka a gbasoo ha. Na Kenya ọ bụ Kenya Civil Aviation Authority (KCAA), n'okpuru Civil Aviation (Unmanned Aircraft Systems) Regulations, 2020. Na Nigeria ọ bụ Nigeria Civil Aviation Authority (NCAA), n'okpuru Part 21 nke Nigeria Civil Aviation Regulations 2023. Mba ndị ọzọ, dị ka Ghana, Rwanda, Uganda, Tanzania na South Africa, nwere ụlọ ọrụ nke ha na iwu nke ha.",
            "Akwụkwọ ndị a na-achọkarị gụnyere: ndebanye aha drone; ikike ibubata ya site ná mba ọzọ; ikike ọkwọ drone (remote pilot licence) maka onye na-efe ya (karịsịa maka ọrụ a na-akwụ ụgwọ ma ọ bụ ọrụ nwere ihe egwu karịa); asambodo onye ọrụ (operator certificate) maka azụmahịa na-efe drone maka ego (KCAA na-akpọ ya Remote Air Operator Certificate, NCAA na-akpọ ya RPAS Operator Certificate); na ikike maka ụfọdụ ụdị ife. KCAA na NCAA nwere usoro drone n'ịntanetị.",
            "Adabere n'enyi, onye na-ere drone ma ọ bụ soshal midia maka iwu. Gụọ peeji drone nke ụlọ ọrụ ahụ n'onwe ya, ma ọ bụ kpọọ ma ọ bụ zigara ụlọ ọrụ ahụ email. Ụgwọ na usoro na-agbanwe, ya mere lelee ha n'ụbọchị ị na-etinye akwụkwọ.",
            "Efela drone mgbe ọ bụla tupu i nweta ndebanye aha, ikike na nnabata ndị mba gị chọrọ maka ife ahụ. Ife ya n'enweghị ha nwere ike ime ka a taa gị ntaramahụhụ ego, nara gị drone ma ọ bụ ihe ka njọ, ọ na-etinyekwa ndị mmadụ na ụgbọelu n'ihe egwu."
          ],
          steps: ["Chọọ ụlọ ọrụ na-achị ụgbọelu na mba gị ma meghee weebụsaịtị gọọmentị ya.", "Chọta peeji gbasara drone, UAS ma ọ bụ RPAS.", "Dee: ndebanye aha, ikike ibubata, ikike ọkwọ drone, asambodo onye ọrụ, na ikike ife: kedu ndị metụtara gị?", "Dee ụgwọ ndị ahụ na usoro ịntanetị ahụ, na ụbọchị i lelere ya.", "Ọ bụrụ na ihe ọ bụla edoghị anya, kpọtụrụ ụlọ ọrụ ahụ ozugbo."],
          words: [["Ụlọ ọrụ na-achị ụgbọelu (civil aviation authority)", "ụlọ ọrụ gọọmentị na-eme iwu ma na-eme ka a gbasoo ha maka ihe niile na-efe efe na mba."], ["Ndebanye aha (registration)", "idebanye drone gị aha n'ụlọ ọrụ ahụ ka o nwee nọmba gọọmentị."], ["Ikike ọkwọ drone (RPL)", "ikike gọọmentị maka onye na-efe drone."], ["Asambodo onye ọrụ (operator certificate)", "nnabata azụmahịa chọrọ iji fee drone maka ego."]],
          slides: [
            { title: "Mba ọ bụla nwere ụlọ ọrụ nke ya", bullets: ["Kenya: KCAA, UAS Regulations 2020", "Nigeria: NCAA, Nig.CARs 2023 Part 21", "Mba ndị ọzọ: ụlọ ọrụ nke ha na iwu nke ha"] },
            { title: "Akwụkwọ ị nwere ike ịchọ", bullets: ["Ndebanye aha drone na ikike ibubata ya", "Ikike ọkwọ drone maka onye na-efe ya", "Asambodo onye ọrụ iji fee maka ego", "Ikike maka ụfọdụ ife"] },
            { title: "Nweta iwu site n'isi iyi", bullets: ["Gụọ peeji drone nke ụlọ ọrụ ahụ n'onwe ya", "Kpọọ ma ọ bụ zigara ụlọ ọrụ ahụ email", "Lelee ụgwọ na usoro n'ụbọchị ị na-etinye akwụkwọ"] },
            { title: "Iwu ọlaedo", bullets: ["Enweghị ndebanye aha, ikike ma ọ bụ nnabata: enweghị ife", "Ntaramahụhụ, a nara drone, ihe egwu nye ndị mmadụ na ụgbọelu"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Meghee weebụsaịtị ụlọ ọrụ na-achị ụgbọelu na mba gị (KCAA, NCAA ma ọ bụ nke mba gị). Chọta peeji drone ma dee ndepụta akwụkwọ ndị ọ chọrọ, adreesị usoro ịntanetị ahụ, na ụbọchị taa.",
          youCanNow: "ịkpọ aha ụlọ ọrụ na-achị ụgbọelu na mba gị, ịchọta iwu drone ya, na ịdepụta akwụkwọ ndị i kwesịrị inwe tupu i fee drone.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ikike ọkwọ drone (remote pilot licence) bụ maka ya?", options: ["Drone n'onwe ya", "Onye na-efe drone ahụ", "Onye nwe ugbo", "Ụlọ ahịa drone"], answer: 1, why: "Ikike ọkwọ drone bụ maka onye na-efe ya, karịsịa maka ọrụ a na-akwụ ụgwọ ma ọ bụ nwere ihe egwu karịa." },
            { objective: "O4", q: "Onye na-ere drone kwuru na ị chọghị akwụkwọ ọ bụla iji fee drone maka ndị ọrụ ugbo na-akwụ gị ụgwọ. Gịnị ka ị ga-eme?", options: ["Tụkwasị onye na-ere ya obi", "Jụọ na soshal midia", "Lelee peeji drone nke ụlọ ọrụ na-achị ụgbọelu n'onwe ya ma ọ bụ kpọtụrụ ụlọ ọrụ ahụ", "Fee ya ma tinye akwụkwọ ma emechaa"], answer: 2, why: "Naanị peeji ma ọ bụ ọfịs nke ụlọ ọrụ ahụ n'onwe ya na-enye iwu na akwụkwọ dị ugbu a." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ilele ebe a ga-efe drone maka ihe egwu",
          minutes: 5,
          goal: "Jee ije n'ugbo ma kaa akara ihe egwu na ebe a na-anaghị efe drone tupu efee ya ọ bụla.",
          text: [
            "Tupu efee drone ọ bụla, lee ebe ahụ n'ala na na maapụ. Ọtụtụ iwu na-eme ka drone dị anya site n'ọdụ ụgbọelu na ebe ụgbọelu na-ada, ebe ndị agha, ụlọ mkpọrọ, igwe mmadụ na ebe gọọmentị. Dịka ọmụmaatụ, Part 21 nke Nigeria nwere iwu anya site n'ọdụ ụgbọelu (aerodrome) na oke maka ife n'elu ebe ndị mmadụ bi na nso ndị na-anọghị n'ọrụ ahụ. Iwu mba gị na-enye ezi anya ndị ahụ; lelee ha.",
            "N'ugbo n'onwe ya, chọọ waya ọkụ eletrik, osisi toro ogologo, ogwe telekọm (mast), ụlọ, okporo ụzọ, ogige ụlọ, ụlọ akwụkwọ, ahịa na anụmanụ na-ata nri. Chọọ ebe doro anya, dị larịị, ebe a ga-efeli ma daa, nke dị anya site na ndị mmadụ na ájá.",
            "Gwa ndị mmadụ okwu: onye ọrụ ugbo, ndị agbata obi na onye ọ bụla na-arụ ọrụ n'akụkụ ya. Gwa ha mgbe ị ga-efe ya. Jụọ tupu i fee n'elu ala ma ọ bụ ogige ụlọ onye agbata obi. Kwanyere nzuzo ùgwù: esela foto ndị mmadụ ma ọ bụ ụlọ ha."
          ],
          steps: ["Meghee ngwa maapụ ma lee mpaghara gbara ugbo ahụ gburugburu: ebe ụgbọelu na-ada, okporo ụzọ, obodo, ebe ndị dị nro.", "Lelee iwu ụlọ ọrụ gị maka anya site n'ọdụ ụgbọelu na ndị mmadụ.", "Jee ije n'ugbo ma kaa akara waya ọkụ, osisi, ogwe telekọm, ụlọ na anụmanụ.", "Họrọ ebe doro anya ebe a ga-efeli ma daa.", "Gwa onye ọrụ ugbo na ndị agbata obi mgbe ị ga-efe ya, ma jụọ tupu i gafee ala ha."],
          words: [["Ebe a na-anaghị efe drone (no-fly zone)", "ebe a na-anabataghị drone n'enweghị ikike pụrụ iche, dị ka nso ọdụ ụgbọelu."], ["Ihe egwu (hazard)", "ihe ọ bụla nwere ike imerụ ahụ: waya ọkụ, osisi, ndị mmadụ, anụmanụ."], ["Aerodrome", "ọdụ ụgbọelu ọ bụla, ebe ụgbọelu na-ada ma ọ bụ ebe helikopta na-ada."]],
          slides: [
            { title: "Lee karịa ugbo ahụ", bullets: ["Ọdụ ụgbọelu, ebe ụgbọelu na helikopta na-ada", "Ebe ndị agha, ụlọ mkpọrọ, igwe mmadụ", "Lelee ezi anya ndị mba gị chọrọ"] },
            { title: "Lee n'ugbo", bullets: ["Waya ọkụ, osisi toro ogologo, ogwe telekọm", "Ogige ụlọ, okporo ụzọ, ụlọ akwụkwọ, ahịa", "Anụmanụ na-ata nri"] },
            { title: "Họrọ ebe dị mma", bullets: ["Ebe doro anya, dị larịị, a ga-efeli ma daa", "Anya site na ndị mmadụ na ájá"] },
            { title: "Gwa ndị mmadụ okwu", bullets: ["Gwa onye ọrụ ugbo na ndị agbata obi mgbe ị na-efe", "Jụọ tupu i gafee ala ha", "Esela foto ndị mmadụ ma ọ bụ ụlọ ha"] }
          ],
          sources: [NCAA_P21, KCAA_UAS],
          tryIt: "See obere maapụ dị mfe nke otu ugbo. Kaa akara ebe a ga-efeli, ihe egwu ọ bụla ị chọtara, ụlọ ndị dị nso, okporo ụzọ na ebe ụgbọelu na-ada ọ bụla dị n'ime kilomita ole na ole ị chọtara na ngwa maapụ.",
          youCanNow: "ilele ebe maka ihe egwu na ebe a na-anaghị efe drone ma họrọ ebe dị mma a ga-efeli.",
          quickCheck: [
            { objective: "O5", q: "Kedu ihe egwu ị ga-achọ n'ugbo tupu i fee drone?", options: ["Ubi doro anya, dị larịị", "Ọka toro nke ọma", "Ogwe telekọm ma ọ bụ osisi toro ogologo", "Ụtụtụ kpọrọ nkụ, anwụ na-acha"], answer: 2, why: "Ogwe telekọm, osisi, waya ọkụ na ụlọ bụ ihe egwu a ga-aka akara tupu efee drone." },
            { objective: "O5", q: "Ụzọ i chere na drone gị ga-esi gafere n'elu ogige ụlọ onye agbata obi. Gịnị ka ị ga-eme?", options: ["Bu ụzọ jụọ onye agbata obi ahụ, esela foto ndị mmadụ ma ọ bụ ụlọ ha", "Fee ya ọsọ ọsọ ka ha ghara ịhụ", "See foto ogige ụlọ ahụ maka akụkọ", "Fee ya n'abalị"], answer: 0, why: "Jụọ tupu i fee n'elu ala ma ọ bụ ogige ụlọ onye agbata obi, ma kwanyere nzuzo ùgwù." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nzukọ tupu efee drone na ihe a ga-eme ma ihe adịghị mma",
          minutes: 5,
          goal: "Mee nzukọ nchekwa tupu efee drone ma mara nzọụkwụ mbụ n'oge ihe mberede.",
          text: [
            "Ndị otu drone ọkachamara na-amalite ife ọ bụla site na nzukọ nkenke (briefing). Onye ọ bụla na-anụ atụmatụ ahụ: ebe drone ga-efe, otu ọ ga-adị elu, ogologo oge ole, onye bụ onye ọkwọ, onye bụ onye nche (observer) na-ele igwe na drone, na ebe ọ ga-ada.",
            "Lelee ihu igwe: enweghị ife na mmiri ozuzo, oke mmiri ozuzo nwere égbè eluigwe, ifufe siri ike ma ọ bụ na-ebili na mberede, oké ifufe ájá ma ọ bụ ìhè na-adịghị mma, ma ọ bụrụ na drone gị na nnabata gị ekweghị ya. Lelee drone: batrị nwere chaj, fan emebighị, igwefoto dị ọcha, rimot jikọrọ.",
            "Kwekọrịta ihe ị ga-eme ma ọ bụrụ na ihe adịghị mma: ọ bụrụ na batrị dị ala, daa; ọ bụrụ na mmadụ ma ọ bụ anụmanụ agafee n'okpuru drone, wezuga ya ma ọ bụ daa; ọ bụrụ na ụgbọelu nwere onye ọkwọ ma ọ bụ helikopta pụta, gbada ma daa ozugbo. Ọ bụrụ na drone furu efu ma ọ bụ daa n'ike, mee ka ebe ahụ dị mma, ma kọọrọ ụlọ ọrụ gị ihe mberede dị njọ dị ka iwu ya chọrọ."
          ],
          steps: ["Kọwaara ndị otu: mpaghara, ịdị elu, oge, onye ọkwọ, onye nche, ebe a ga-ada.", "Lelee ihu igwe: mmiri ozuzo, ifufe, ájá, ìhè.", "Lelee drone: batrị, fan, igwefoto, njikọ rimot.", "Kwekọrịta atụmatụ ihe mberede: batrị dị ala, ndị mmadụ n'okpuru, ụgbọelu dị nso, drone furu efu.", "Mgbe i fechara, dee ihe mere n'akwụkwọ ndekọ (log book)."],
          words: [["Onye nche (observer)", "onye otu na-ele drone na igwe ma na-adọ onye ọkwọ aka na ntị."], ["Nzukọ nkenke (briefing)", "obere okwu tupu efee drone ka onye ọ bụla mara atụmatụ ahụ."], ["Akwụkwọ ndekọ (log book)", "ndekọ nke ife ọ bụla: ụbọchị, ebe, oge, onye ọkwọ, nsogbu."]],
          slides: [
            { title: "Kọwaara ndị otu atụmatụ", bullets: ["Ebee, otu elu, ogologo oge ole", "Onye bụ onye ọkwọ, onye bụ onye nche", "Ebe ị ga-ada"] },
            { title: "Lelee ihu igwe na drone", bullets: ["Enweghị mmiri ozuzo, égbè eluigwe, ifufe siri ike ma ọ bụ ájá", "Batrị, fan, igwefoto, rimot"] },
            { title: "Ọ bụrụ na ihe adịghị mma", bullets: ["Batrị dị ala: daa", "Ndị mmadụ ma ọ bụ anụmanụ n'okpuru: wezuga ya ma ọ bụ daa", "Ụgbọelu dị nso: gbada ma daa ozugbo"] },
            { title: "Mgbe i fechara", bullets: ["Dee ya n'akwụkwọ ndekọ", "Kọọ ihe mberede dị njọ dị ka iwu gị chọrọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ iji drone gị, otu peeji, maka otu ugbo: nsogbu ahụ, ụdị drone na igwefoto, ụlọ ọrụ na akwụkwọ, ihe egwu site na maapụ i sere, na ndepụta tupu efee drone nwere opekata mpe ihe asatọ gụnyere atụmatụ ihe mberede.",
          youCanNow: "ịkọwara ndị otu atụmatụ tupu efee drone, ilele ihu igwe na drone, na ịgbaso atụmatụ ihe mberede dị mfe.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-eme na nzukọ tupu efee drone?", options: ["Onye ọkwọ na-anata onye ahịa ego", "Ndị otu na-ede akụkọ ikpeazụ", "A na-ere drone ahụ", "Onye ọ bụla na-anụ ebe, otu elu na ogologo oge drone ga-efe, na onye ga-eme gịnị"], answer: 3, why: "Nzukọ ahụ na-ekesara onye ọ bụla atụmatụ, ọrụ onye ọ bụla na ebe a ga-ada." },
            { objective: "O6", q: "Helikopta pụtara mgbe drone gị na-efe. Gịnị ka ị ga-eme?", options: ["Fee elu karịa ka ị hụ ya", "Gbada ma daa ozugbo", "Gaa n'ihu na-ese foto", "Fee gakwuru ya"], answer: 1, why: "Ọ bụrụ na ụgbọelu nwere onye ọkwọ ma ọ bụ helikopta pụta, drone ga-agbada ma daa ozugbo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu na nchekwa",
        questions: [
          { objective: "O4", q: "Onye na-eme iwu drone ma na-eme ka a gbasoo ha na Kenya?", options: ["Kenya Civil Aviation Authority (KCAA)", "Ọfịs ọrụ ugbo nke county", "Onye na-ere drone", "Onye isi obodo"], answer: 0, why: "KCAA bụ ụlọ ọrụ na-achị ụgbọelu na Kenya, ọ na-achịkwa drone." },
          { objective: "O4", q: "Enyi gị kwuru na ị nwere ike ife drone ọhụrụ n'ugbo onye ahịa n'enweghị akwụkwọ ọ bụla. Gịnị ka ị ga-eme?", options: ["Fee ya; enyi gị emeela ya na mbụ", "Lelee iwu gọọmentị nke ụlọ ọrụ na-achị ụgbọelu ma nweta ihe a chọrọ tupu i fee ya", "Fee ya n'isi ụtụtụ ka onye ọ bụla ghara ịhụ", "Fee ya naanị n'elu ala onye ahịa ahụ"], answer: 1, why: "Naanị iwu ụlọ ọrụ gọọmentị bụ ihe a na-agụ; enweghị akwụkwọ pụtara enweghị ife." },
          { objective: "O5", q: "Kedu ihe egwu ị ga-aka akara tupu i fee drone?", options: ["Igwe doro anya", "Ebe kpọrọ nkụ, dị larịị a ga-efeli", "Waya ọkụ gafere ubi ahụ", "Batrị nwere chaj"], answer: 2, why: "Waya ọkụ nwere ike ijide ma ọ bụ mebie drone, ọ bụkwa ezi ihe egwu." },
          { objective: "O6", q: "N'oge a na-efe drone, obere ụgbọelu pụtara n'akụkụ. Gịnị ka onye ọkwọ kwesịrị ime?", options: ["Fee elu karịa ka ọ hụ nke ọma", "Gaa n'ihu na-ese foto", "Fee gakwuru ya", "Gbada ma daa ozugbo"], answer: 3, why: "Ụgbọelu nwere onye ọkwọ na-ebu ụzọ mgbe niile; wetuo drone ma wezuga ya n'ụzọ." },
          { objective: "O6", q: "Gịnị bụ ọrụ onye nche (observer)?", options: ["Ile drone na igwe ma dọọ onye ọkwọ aka na ntị", "Ife drone", "Naanị ịgba batrị chaj", "Ise foto ndị agbata obi"], answer: 0, why: "Onye nche na-ele anya ka onye ọkwọ wee lekwasị anya n'ife drone n'enweghị nsogbu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone maka Nlekọta Ugbo 1: Mmalite, Iwu na Nchekwa",
    questions: [
      { objective: "O1", q: "Gịnị bụ drone?", options: ["Obere ụgbọelu na-enweghị onye ọkwọ ya n'ime ya", "Traktọ", "Satịlaịtị ihu igwe", "Ngwa (app) ekwentị"], answer: 0, why: "A na-akwọ drone site n'ala ma ọ bụ n'ụzọ a kwadoro, n'enweghị onye nọ n'ime ya." },
      { objective: "O1", q: "Kedu ọrụ ugbo drone nwere igwefoto nwere ike inyere aka na ya?", options: ["Ịbawanye ọnụ ahịa n'ahịa", "Ịchọta ebe mkpụrụ na-epughị", "Ịrụzi pọmpụ mebiri emebi", "Ịbịanye aka na nkwekọrịta"], answer: 1, why: "Site n'elu ị na-ahụ ngwa ngwa ebe ihe ọkụkụ na-epughị." },
      { objective: "O1", q: "Drone na-egosi ebe akpụ na-akpọnwụ. Drone ahụ na-agwa gị:", options: ["Kpọmkwem ọrịa ọ bụ", "Ọgwụ ahụhụ ị ga-azụta", "Ebe ị ga-aga lee", "Ọ dịghị ihe bara uru"], answer: 2, why: "Ọ na-egosi ebe; ị na-achọpụta ihe kpatara ya n'ala." },
      { objective: "O2", q: "Kedu drone nwere ike ịkwụ otu ebe n'ikuku ma si n'obere ebe efeli?", options: ["Fixed-wing", "Ụgbọelu akwụkwọ", "Satịlaịtị", "Multirotor"], answer: 3, why: "Multirotor nwere ọtụtụ fan, nwekwa ike ịkwụ otu ebe n'ikuku." },
      { objective: "O2", q: "Igwefoto multispectral bara uru n'ihi na ọ:", options: ["Na-atụ ìhè anya na-adịghị ahụ ma na-egosi nsogbu osisi n'oge", "Na-ese naanị foto oji na ọcha", "Na-eme ka drone fee ọsọ karịa", "Na-agbasa fatịlaịza"], answer: 0, why: "Ọ na-atụ near-infrared na ìhè ndị ọzọ metụtara ahụike osisi." },
      { objective: "O2", q: "Igwefoto thermal na-egosi:", options: ["Naanị agba", "Okpomọkụ", "Nri dị n'ala ozugbo", "Ọnụ ahịa"], answer: 1, why: "Igwefoto thermal na-atụ okpomọkụ, nke bara uru maka ụkọ mmiri na anụmanụ." },
      { objective: "O3", q: "Otu ndị ọrụ ugbo nwere obere ugbo 300 chọrọ ilekọta ọka ndị otu ha. Nhọrọ dị mma bụ:", options: ["Onye ọrụ ugbo ọ bụla ịzụta drone fixed-wing", "Ịghara iji drone mgbe ọ bụla", "Otu ọrụ drone a na-ekerịta maka ndị otu niile", "Naanị oku ekwentị"], answer: 2, why: "Ikerịta otu drone n'ọtụtụ ubi na-ekesa ụgwọ ahụ." },
      { objective: "O3", q: "Foto satịlaịtị n'efu anaghị aba uru nke ukwuu maka otu osisi n'ihi na:", options: ["Igwe ojii na-ekpuchi ha mgbe niile", "Ha bụ oji na ọcha", "Ha dị oke ọnụ", "Pixel ọ bụla dị ihe dị ka mita 10"], answer: 3, why: "Pixel buru ibu na-egosi ihe n'ozuzu na nnukwu ala, ọ bụghị otu osisi." },
      { objective: "O3", q: "Kedu ụgwọ iji drone ọzọ e wezụga ịzụta ya?", options: ["Batrị na fan ndị ọzọ", "Mmiri ozuzo n'efu", "Ìhè anwụ", "Ọ dịghị ihe ọzọ"], answer: 0, why: "Batrị, fan, ụgwọ, ọzụzụ, data na njem niile na-efu ego." },
      { objective: "O3", q: "Tupu i zụta drone, ajụjụ bụ isi bụ:", options: ["Kedu agba ya?", "Kedu mkpebi foto ndị ahụ ga-agbanwe, ọ bakwara uru karịa ụgwọ ya?", "Ọ bụ ụdị kacha ọhụrụ?", "Ndị enyi m nwere otu?"], answer: 1, why: "Drone na-akwụ ụgwọ ya naanị ma ọ bụrụ na ọ na-eme ka mkpebi ka mma karịa ihe ọ na-efu." },
      { objective: "O4", q: "Iwu drone Nigeria dị na:", options: ["Akwụkwọ mgbasa ozi onye na-ere drone", "Otu soshal midia", "Nig.CARs 2023 Part 21 nke NCAA", "Akwụkwọ nnata ego nke ugbo"], answer: 2, why: "Part 21 nke NCAA gbasara ndebanye aha, asambodo na ọrụ RPAS." },
      { objective: "O4", q: "Iwu drone Ghana, Rwanda na Uganda:", options: ["Dị kpọmkwem ka nke Kenya", "Adịghị mkpa", "Naanị United Nations na-eme ha", "Ụlọ ọrụ na-achị ụgbọelu nke mba ọ bụla na-eme ha"], answer: 3, why: "Mba ọ bụla na-achị ikuku dị n'elu ya, nwekwa iwu nke ya." },
      { objective: "O4", q: "Azụmahịa na-efe drone maka ndị ọrụ ugbo na-akwụ ụgwọ na-achọkarị:", options: ["Asambodo onye ọrụ site n'aka ụlọ ọrụ na-achị ụgbọelu", "Ọ dịghị ihe ọzọ", "Naanị ekwentị", "Naanị kaadị azụmahịa"], answer: 0, why: "KCAA na NCAA nwere asambodo onye ọrụ maka ọrụ drone a na-akwụ ụgwọ." },
      { objective: "O4", q: "Ebee ka i kwesịrị ilele ụgwọ drone dị ugbu a?", options: ["Akwụkwọ akụkọ ochie", "Peeji gọọmentị nke ụlọ ọrụ na-achị ụgbọelu n'ụbọchị ị na-etinye akwụkwọ", "Asịrị", "Igbe drone"], answer: 1, why: "Ụgwọ na-agbanwe; peeji gọọmentị bụ isi iyi a pụrụ ịtụkwasị obi." },
      { objective: "O4", q: "Ịgba ọgwụ ahụhụ site na drone chọrọ nnabata site n'aka:", options: ["Naanị onye ọrụ ugbo", "Naanị onye na-ere ya", "Ụlọ ọrụ na-achị ụgbọelu na onye na-achị ọgwụ ahụhụ", "Ọ dịghị onye"], answer: 2, why: "Ịgba ọgwụ bụ ọrụ pụrụ iche nke iwu ụgbọelu na iwu ọgwụ ahụhụ na-achị." },
      { objective: "O5", q: "Kedu ebe na-enwekarị mmachi drone n'akụkụ ya?", options: ["Ubi ọka dị anya site n'obodo", "Akụkụ osimiri", "Ubi agwa", "Ebe ụgbọelu na-ada (airstrip)"], answer: 3, why: "Iwu na-eme ka drone dị anya site n'ọdụ ụgbọelu na ebe ụgbọelu na-ada." },
      { objective: "O5", q: "Tupu i fee n'elu ogige ụlọ onye agbata obi, i kwesịrị:", options: ["Ibu ụzọ jụọ ha", "Ife ya n'ala ala ka ọ tụọ ha n'anya", "Ise foto ha", "Ife ya n'abalị"], answer: 0, why: "Kwanyere ala na nzuzo ndị mmadụ ùgwù; bu ụzọ jụọ." },
      { objective: "O6", q: "Kedu ihu igwe pụtara na i kwesịghị ife obere drone?", options: ["Ọ dị jụụ ma doo anya", "Ifufe siri ike, na-ebili na mberede ma ọ bụ égbè eluigwe", "Obere igwe ojii na-enweghị ifufe", "Anwụ ụtụtụ"], answer: 1, why: "Ifufe, oke mmiri ozuzo na égbè eluigwe nwere ike ime ka ị ghara ịchịkwa ya." },
      { objective: "O6", q: "Ihe ịdọ aka na ntị batrị kwuru na ọ dị ala n'oge a na-efe drone. I kwesịrị:", options: ["Fee otu ahịrị ọzọ", "Fee elu karịa", "Daa", "Gbanyụọ rimot"], answer: 2, why: "Batrị dị ala pụtara wetuo drone ugbu a n'enweghị nsogbu." },
      { objective: "O6", q: "Mgbe ife ọ bụla gwụrụ, i kwesịrị:", options: ["Ihichapụ foto niile", "Ire drone ahụ", "Ichefu ya", "Ide ife ahụ n'akwụkwọ ndekọ"], answer: 3, why: "Akwụkwọ ndekọ na-edekọ ife ọ bụla na nsogbu ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      3,
      5,
      6,
      9,
      10,
      12,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke atụmatụ ahụ ma lelee ya ọzọ.",
    criteria: [
      {
        name: "Nsogbu ugbo",
        objective: "O1",
        notYet: "Nsogbu ahụ edoghị anya, ma ọ bụ ọ bụ ihe drone na-enweghị ike ime.",
        meets: "Na-akpọ aha nsogbu ugbo doro anya drone nwere ike inyere aka na ya, na ihe a ga-ejikwa ụkwụ lelee.",
        exceeds: "Na-ekwu mkpebi foto ndị ahụ ga-agbanwe."
      },
      {
        name: "Drone na igwefoto",
        objective: "O2",
        notYet: "Enweghị ụdị drone ma ọ bụ igwefoto, ma ọ bụ enweghị ihe kpatara ya.",
        meets: "Ụdị drone na igwefoto dabara ọrụ ahụ na nha ugbo ahụ, nwere ihe kpatara ya.",
        exceeds: "Na-atụnyere ya na drone, foto satịlaịtị ma ọ bụ ije ụkwụ ma kọwaa ụgwọ ya."
      },
      {
        name: "Ụlọ ọrụ na akwụkwọ",
        objective: "O4",
        notYet: "Ụlọ ọrụ ahụ ma ọ bụ akwụkwọ ndị ahụ adịghị ya.",
        meets: "Na-akpọ aha ụlọ ọrụ na-achị ụgbọelu na mba ahụ na akwụkwọ a ga-elele ma ọ bụ nweta, site na weebụsaịtị ya n'onwe ya.",
        exceeds: "Na-etinye njikọ (link) ahụ na ụbọchị e lelere iwu ndị ahụ."
      },
      {
        name: "Ihe egwu n'ebe ahụ",
        objective: "O5",
        notYet: "Ọ dịghị ihe egwu e depụtara.",
        meets: "Na-edepụta ihe egwu na ebe a na-anaghị efe drone a chọtara, na ndị a ga-agwa banyere ife ahụ.",
        exceeds: "Na-etinye obere maapụ dị mfe nwere ebe a ga-efeli."
      },
      {
        name: "Ndepụta nchekwa",
        objective: "O6",
        notYet: "Ihe na-erughị asatọ, ma ọ bụ enweghị nzọụkwụ ihe mberede.",
        meets: "Opekata mpe ihe asatọ tupu efee drone gbasara ihu igwe, drone, ndị otu na ebe ahụ, nwere nzọụkwụ ihe mberede.",
        exceeds: "Na-akpọ aha ọrụ onye ọkwọ na onye nche na otu a ga-esi kọọ ihe mberede."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla nke rubric maka atụmatụ iji drone",
      "Ndị na-amụ ihe lere iwu drone nke ụlọ ọrụ na-achị ụgbọelu ha n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihu na Ihe ọmụmụ 2 nke usoro drone",
      "Mmemme mmekọ na-akọ na ndị na-eji drone na-edebanye aha ma na-enweta ikike tupu ha efee ya"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere ịntanetị iji meghee peeji drone nke ụlọ ọrụ na-achị ụgbọelu",
      "Akwụkwọ na mkpịsị ode maka atụmatụ iji drone na ndepụta",
      "Ezi ugbo ma ọ bụ ugbo ọmụmaatụ a ga-eje ije na ya maka ilele ebe ahụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge ide atụmatụ ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee meghee peeji drone nke ụlọ ọrụ ahụ n'ihu otu ahụ.",
      "Efela drone dị ka akụkụ nke ihe ọmụmụ a belụsọ ma onye ọkwọ, drone na ife ahụ nwere nnabata niile mba ahụ chọrọ.",
      "Jeenụ ije n'ezi ugbo ọnụ iji mụta ịhụ ihe egwu, ma chetara ndị na-amụ ihe ka ha ghara ise foto ndị mmadụ ma ọ bụ ụlọ ha.",
      "Lelee saịtị ụlọ ọrụ ahụ maka mgbanwe iwu tupu e kuzie ihe ọmụmụ a ọ bụla.",
      "Jiri rubric tụọ akara atụmatụ iji drone ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
