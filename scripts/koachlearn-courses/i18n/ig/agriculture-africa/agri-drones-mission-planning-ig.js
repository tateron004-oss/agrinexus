"use strict";

// Koach Learn course (Igbo translation of agriculture-africa/agri-drones-mission-planning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const KCAA_UAS = { name: "Kenya Civil Aviation Authority (KCAA): Unmanned Aircraft Systems", url: "https://www.kcaa.or.ke/safety-security-oversight/unmanned-aircraft-systems" };
const KCAA_PORTAL = { name: "KCAA drone (RPAS) online system", url: "https://rpas.kcaa.or.ke/" };
const NCAA_P21 = { name: "Nigeria Civil Aviation Authority (NCAA): Nig.CARs 2023 Part 21, Remotely Piloted Aircraft Systems", url: "https://www.ncaa.gov.ng/documents/regulations/nig-cars-2023/part-21-remotely-piloted-aircraft-system-rpas/" };
const KMD = { name: "Kenya Meteorological Department", url: "https://meteo.go.ke" };
const NIMET = { name: "Nigerian Meteorological Agency (NiMet)", url: "https://nimet.gov.ng" };

module.exports = {
  id: "agri-drones-mission-planning-ig",
  lang: "ig",
  translationOf: "agri-drones-mission-planning",
  category: "Agriculture (Africa)",
  name: "Drone n'Ugbo: Ịhazi Ọrụ Ifefe na Ịrụ Ya",
  skills: "Ịgbanwe arịrịọ onye ahịa ka ọ bụrụ nkọwa ọrụ, Ịlele ebe ọrụ na ịlele ikuku na ikike, Ide nyocha ihe egwu, Ime atụmatụ ifefe nwere atụmatụ nnọchi, Iduzi nzukọ ndị otu na ịfe drone, Ime nlele mgbe ifefe gasịrị na ịkọ ihe mberede",
  outcome: "ịhazi ma rụọ ọrụ drone ugbo n'ụzọ ọkachamara site n'arịrịọ onye ahịa ruo data e nyefere ya, ya na akpa akwụkwọ ọrụ zuru ezu: nkọwa ọrụ, nlele ebe ọrụ, nlele ikuku na ikike, nyocha ihe egwu, atụmatụ ifefe, nzukọ ndị otu, atụmatụ nnọchi na ndekọ mgbe ifefe gasịrị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ọkwọ drone (remote pilots), azụmahịa na-enye ọrụ drone, ndị otu drone nke ugbo ukwu na azụmahịa ugbo, na mmemme extension na Kenya, Nigeria na n'Afrịka niile na-efe drone maka ndị ọzọ. Ọ na-eche na ị maraworị isi ihe gbasara ịfe drone, ime maapụ, na iwu drone obodo gị (lee usoro nlekọta na ihe ọmụmụ iwu).",
    "Isi 1 bụ ịhazi: ịkwekọrịta ihe onye ahịa chọrọ n'ezie, ịlele ebe ọrụ, ịlele ikuku na ikike, inyocha ihe egwu, na ime atụmatụ ifefe ebe a gbakọrọ ịdị elu, overlap, batrị na oge. Isi 2 bụ ọrụ n'ọhịa: ọrụ onye ọ bụla n'otu na nzukọ, ịfe na ilekọta ifefe, ime ihe mgbe ihe mebiri, na imechi ọrụ site na nlele data, ndekọ na akụkọ ihe mberede ọ bụla.",
    "Ọmụmaatụ ndị a bụ ezi ụdị ọrụ: ime maapụ hekta 40 nke ube oyibo (avocado) maka onye na-ebupụ ya na Murang'a, ịgụ ọnụ ọgụgụ osisi n'ugbo akpụ 25 nke ndị ọrụ ugbo outgrower na Oyo State, ilele mmiri ugbo (irrigation) n'ugbo akwụkwọ nri na mkpụrụ osisi dị nso Naivasha. Efela drone n'ọrụ ọ bụla n'enweghị ndebanye aha, akwụkwọ ikike (licence), asambodo onye ọrụ (operator certificate) na ikike ndị obodo gị chọrọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee akpa akwụkwọ ọrụ zuru ezu maka otu ọrụ drone ugbo (ezi ọrụ ma ọ bụ ọmụmaatụ, dị ka ime maapụ hekta 40 nke ube oyibo maka onye na-ebupụ ya): nkọwa ọrụ unu na onye ahịa kwekọrịtara, nlele ebe ọrụ nwere ihe egwu na maapụ e sere n'aka, nlele ikuku na ikike ya na isi iyi ha, tebụl nyocha ihe egwu, atụmatụ ifefe (mpaghara, ịdị elu, ịdị nkọ foto, overlap, ọsọ, batrị, oge, oke ihu igwe), ọrụ ndị otu na ndetu nzukọ, atụmatụ nnọchi, na ndepụta nlele na akwụkwọ ndekọ ị ga-edejupụta mgbe ifefe gasịrị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ọkwọ drone, azụmahịa na-enye ọrụ drone, ndị otu drone nke ugbo ukwu na azụmahịa ugbo, na mmemme extension na Kenya, Nigeria na n'Afrịka niile na-efe drone ugbo maka ndị ahịa.",
    startingPoint: "Ndị na-amụ ihe maraworị ịfe drone, ime ifefe maapụ dị mfe, ma mara iwu drone obodo ha. Ole na ole na-agbanwe arịrịọ onye ahịa ka ọ bụrụ nkọwa ọrụ e dere ede, na-ede nyocha ihe egwu na atụmatụ nnọchi, na-eme nzukọ ndị otu, ma ọ bụ na-emechi ọrụ site na nlele data, ndekọ na akụkọ ihe mberede.",
    gap: "Ọrụ na-enweghị nkọwa doro anya na-akpata esemokwu, ọrụ na-enweghị nlele ebe ọrụ, nyocha ihe egwu na nzukọ na-akpatakwa ihe mberede, data a jụrụ na ndị ahịa furu efu. Akpa akwụkwọ ọrụ zuru ezu na-enyere ndị otu drone aka inye onye ahịa ihe ọ chọrọ n'enweghị nsogbu, n'ụzọ iwu kwadoro na n'oge, ma na-egosi ndị ahịa na ndị ọchịchị na azụmahịa ahụ bụ nke ọkachamara.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu gbasara drone na nchekwa",
      "Ngwaọrụ: ekwentị ma ọ bụ laptọọpụ nwere app maapụ; drone na app nhazi na-enyere aka mana ọ bụghị iwu",
      "Iwu: ọrụ ọ bụla chọrọ ndebanye aha, akwụkwọ ikike, asambodo onye ọrụ na ikike ndị obodo ahụ chọrọ",
      "Ọnọdụ n'ọhịa: okpomọkụ, ikuku, mmiri ozuzo, netwọk na-adịghị mma na ndị na-ekiri ihe n'ugbo Afrịka",
      "Oge: nkuzi dị mkpụmkpụ, gbakwunyere oge iji mee akpa akwụkwọ ọrụ"
    ],
    prerequisites: "\"Drone Ugbo n'Afrịka: Iwu Ụgbọelu na Ikike (Licence)\" na usoro \"Drones for Agricultural Monitoring\", ma ọ bụ ahụmahụ ifefe ruru otu ahụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị arịrịọ onye ahịa maka ọrụ drone", action: "ide nkọwa ọrụ nwere mkpebi, mpaghara, ihe a ga-enyefe, ụbọchị, onye a ga-akpọ, ọnụ ahịa na otu a ga-esi kesaa data", standard: "gụnyere ihe drone ahụ na-enweghị ike ime" },
    { id: "O2", condition: "Maka ebe ọrụ drone", action: "ilele ebe ahụ na maapụ na n'ala ma kwenye oke ikuku na ikike ọ bụla", standard: "e dekọrọ ya na ụbọchị na isi iyi tupu ifefe" },
    { id: "O3", condition: "Maka ọrụ e hazirela", action: "ide nyocha ihe egwu, atụmatụ ifefe na atụmatụ nnọchi", standard: "nwere ihe mbelata maka ihe egwu ọ bụla, ma debe oke ihu igwe" },
    { id: "O4", condition: "Tupu ifefe mbụ nke ọrụ", action: "ikenye ndị otu ọrụ ha ma duzie nzukọ", standard: "na-ekwu maka ihe egwu, oke, atụmatụ nnọchi, okwu ndị a kwekọrịtara na onye nwere ike ịkpọ \"kwụsị\"" },
    { id: "O5", condition: "N'oge ọrụ ifefe", action: "ilekọta ifefe na telemetry ma kpebie ma a ga-aga n'ihu ma ọ bụ kwụsị", standard: "na-akwụsịtụ ma ọ bụ na-ada drone mgbe ọ bụla a gafere oke" },
    { id: "O6", condition: "Na njedebe ọrụ ifefe", action: "ilele data, dejupụta ndekọ ma kọọ ihe mberede ọ bụla", standard: "tupu ịhapụ ebe ahụ, e fere oghere ọzọ ma chekwaa data n'ebe ọzọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi ọrụ ifefe",
      lessons: [
        {
          objectives: ["O1"],
          title: "Site n'arịrịọ onye ahịa ruo nkọwa ọrụ",
          minutes: 5,
          goal: "Gbanwee arịrịọ onye ahịa ka ọ bụrụ nkọwa ọrụ doro anya e dere ede.",
          text: [
            "Ndị ahịa na-arịọkarị \"ifefe drone\" mgbe ihe ha chọrọ n'ezie bụ azịza: Kedu akụkụ ugbo ebe osisi na-etoghị nke ọma? Ebee ka mmiri ugbo na-agbapụ? Osisi ole ka anyị nwere? Bido site n'ịjụ mkpebi ha chọrọ ime na ihe ha ga-eji nsonaazụ ya mee.",
            "Wee kwekọrịta nkọwa ọrụ n'akwụkwọ: mpaghara ahụ (ya na maapụ ma ọ bụ faịlụ oke ugbo), ajụjụ ahụ na ihe a ga-enyefe (dịka ọmụmaatụ orthomosaic, maapụ NDVI, ọnụ ọgụgụ osisi, akụkọ otu peeji), ọkwa ịdị nkọ achọrọ, oge ụbọchị, otu a ga-esi banye n'ugbo, onye n'ugbo bụ onye a ga-akpọ, ọnụ ahịa na ụzọ ịkwụ ụgwọ (dị ka mobile money mgbe e nyefere ihe), na otu a ga-esi kesaa ma chekwaa data.",
            "Kwuo n'ụzọ doro anya ihe drone ahụ na-enweghị ike ime. Maapụ nwere ike igosi ebe osisi na-anọ na nsogbu; ọ pụghị n'onwe ya ịkọ ọrịa ọ bụ. Nkọwa ọrụ doro anya na-echebe gị na onye ahịa pụọ na mmechuihu na esemokwu."
          ],
          steps: ["Jụọ mkpebi onye ahịa chọrọ ime.", "Kwekọrịta mpaghara ahụ ma nweta oke ugbo ma ọ bụ maapụ e sere n'aka.", "Kwekọrịta ihe a ga-enyefe, ịdị nkọ, ụbọchị na onye a ga-akpọ.", "Kwekọrịta ọnụ ahịa, ịkwụ ụgwọ na ikesa data.", "Kwuo oke ihe drone ahụ nwere ike igosi.", "Dee ya ma unu abụọ kwenye."],
          words: [["Nkọwa ọrụ (mission scope)", "nkwekọrịta e dere ede banyere ihe ọrụ drone ga-ekpuchi na ihe ọ ga-enyefe."], ["Ihe a ga-enyefe (deliverable)", "ihe onye ahịa ga-anata, dị ka maapụ ma ọ bụ akụkọ."]],
          slides: [
            { title: "Chọta ezi ajụjụ ahụ", bullets: ["Kedu mkpebi onye ahịa ga-eme?", "Gịnị ka ha ga-eji nsonaazụ ya mee?"] },
            { title: "Kwekọrịta n'akwụkwọ", bullets: ["Mpaghara na oke ugbo", "Ihe a ga-enyefe na ịdị nkọ", "Ụbọchị, ụzọ ịbanye, onye a ga-akpọ n'ugbo", "Ọnụ ahịa, ịkwụ ụgwọ, ikesa data"] },
            { title: "Kwuo oke ya", bullets: ["Maapụ na-egosi ebe, ọ bụghị mgbe niile ihe kpatara ya", "Nkọwa doro anya na-egbochi esemokwu"] }
          ],
          tryIt: "Onye na-ebupụ ube oyibo kwuru: \"Fee hekta 40 anyị n'izu na-abịa.\" Dee ajụjụ ise ị ga-ajụ, wee dee nkọwa ọrụ otu paragraf nwere mpaghara, ihe a ga-enyefe, ụbọchị, onye a ga-akpọ, ebe ọnụ ahịa ga-aba, na oke ihe drone nwere ike ime.",
          youCanNow: "ịgbanwe arịrịọ onye ahịa na-edoghị anya ka ọ bụrụ nkọwa ọrụ doro anya e dere ede.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ihe a ga-enyefe (deliverable) na nkọwa ọrụ?", options: ["Batrị drone ahụ", "Nọmba ekwentị onye ahịa", "Ịdị elu ifefe", "Ihe onye ahịa ga-anata, dị ka maapụ ma ọ bụ akụkọ"], answer: 3, why: "Ihe a ga-enyefe bụ ihe ị na-enye, dị ka orthomosaic, maapụ NDVI, ọnụ ọgụgụ osisi ma ọ bụ akụkọ." },
            { objective: "O1", q: "Onye ahịa chọrọ ka maapụ NDVI gị kpọọ aha ọrịa dị n'ube oyibo ya. Gịnị ka ị ga-ede na nkọwa ọrụ?", options: ["Na maapụ ahụ ga-akpọ aha ọrịa ọ bụla", "Na maapụ ahụ na-egosi osisi na-anọ na nsogbu, mana a ga-amata ọrịa n'ala", "Ọ dịghị ihe ọ bụla gbasara ya", "Na ị ga-agbakwa ọgwụ n'osisi ndị ahụ"], answer: 1, why: "Maapụ nwere ike igosi ebe osisi na-anọ na nsogbu mana ọ pụghị n'onwe ya ịkọ ọrịa ọ bụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Nlele ebe ọrụ, ikuku na ikike",
          minutes: 6,
          goal: "Lelee ebe ọrụ ma kwenye oke ikuku na ikike ọ bụla tupu ifefe.",
          text: [
            "Bụrụ ụzọ mee nlele n'oche (desk survey): lee mpaghara ahụ na app maapụ na foto satịlaịtị maka ebe ụgbọelu na-ada (airstrip), ọdụ ụgbọelu, okporo ụzọ, obodo, waya ọkụ, mast, osimiri, ebe a na-echebe na ebe nchekwa. Wee lelee iwu na maapụ ndị ọchịchị gị maka ebe amachibidoro na anya dị n'etiti gị na ọdụ ụgbọelu, na ma ọrụ ahụ chọrọ ikike ọrụ pụrụ iche. Hapụ oge maka ikike ọ bụla ịbịa.",
            "Wee lelee ya n'ala ma ọ bụrụ na ị nwere ike, ma ọ bụ rịọ onye a ga-akpọ n'ugbo ka o zitere gị foto: ebe drone ga-esi bulie na ebe ọ ga-ada, ihe mgbochi na ịdị elu ha, ndị mmadụ na anụmanụ, ụlọ obibi, ụzọ ịbanye, netwọk ekwentị, na ebe ndị otu ga-ezo onwe ha n'anwụ na mmiri ozuzo.",
            "Kwenye ikike: onye nwe ala ma ọ bụ onye njikwa n'akwụkwọ, ndị agbata obi ma ọ bụrụ na ị ga-agafe n'ala ha, ndị isi obodo ebe a na-atụ anya ya, na ndị ọchịchị ụgbọelu dị ka iwu siri chọọ. Dekọọ ihe niile n'akpa akwụkwọ ọrụ ya na ụbọchị na isi iyi."
          ],
          steps: ["Nlele n'oche: maapụ na foto satịlaịtị nke mpaghara ahụ.", "Lelee iwu ụgbọelu: ebe amachibidoro, anya site n'ọdụ ụgbọelu, ikike.", "Nlele n'ala ma ọ bụ foto ugbo: ebe ibuli, ihe mgbochi, ndị mmadụ, netwọk.", "Nweta ikike onye nwe ala na ndị agbata obi n'akwụkwọ.", "Dekọọ nlele niile ya na ụbọchị na isi iyi."],
          words: [["Nlele n'oche (desk survey)", "ilele ebe ọrụ site na maapụ na akwụkwọ tupu ịga ebe ahụ."], ["Ebe amachibidoro (restricted area)", "ikuku ebe a na-egbochi ifefe ma ọ bụ ebe ọ chọrọ ikike pụrụ iche."], ["Ikike ọrụ (operation authorisation)", "ikike ndị ọchịchị ụgbọelu na-enye maka otu ụdị ọrụ ifefe."]],
          slides: [
            { title: "Nlele n'oche", bullets: ["Maapụ na foto satịlaịtị", "Ebe ụgbọelu na-ada, okporo ụzọ, obodo, waya ọkụ, mast", "Ebe a na-echebe na ebe nchekwa"] },
            { title: "Ikuku na ikike", bullets: ["Ebe amachibidoro na anya site n'ọdụ ụgbọelu", "Ọ chọrọ ikike ọrụ pụrụ iche?", "Hapụ oge maka ikike ịbịa"] },
            { title: "Nlele n'ala", bullets: ["Ebe ibuli, ihe mgbochi, ịdị elu ha", "Ndị mmadụ, anụmanụ, ụlọ obibi, netwọk", "Ebe ndị otu ga-ezo onwe ha"] },
            { title: "Ikike n'akwụkwọ", bullets: ["Onye nwe ala ma ọ bụ onye njikwa", "Ndị agbata obi, ndị isi obodo", "Ndị ọchịchị ụgbọelu dị ka iwu siri chọọ"] }
          ],
          sources: [KCAA_UAS, KCAA_PORTAL, NCAA_P21],
          tryIt: "Maka otu ugbo ị nwere ike ịchọta na app maapụ, mee nlele n'oche: depụta ebe ụgbọelu na-ada, okporo ụzọ, waya ọkụ, obodo na ebe a na-echebe niile dị n'ime kilomita ole na ole, ma dee iwu ụgbọelu ị ga-elele na ikike ị chọrọ.",
          youCanNow: "ilele ebe ọrụ, ilele oke ikuku ma nweta ikike ọ bụla tupu ọrụ ifefe.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ nlele n'oche (desk survey)?", options: ["Nzukọ n'oche onye ahịa", "Ịfe drone nnwale", "Ilele maapụ na foto satịlaịtị maka ihe egwu na ebe amachibidoro tupu ịga ebe ọrụ", "Ịgụ ọnụ ọgụgụ ndị otu"], answer: 2, why: "Nlele n'oche na-elele maapụ, foto satịlaịtị na iwu ndị ọchịchị tupu ileta ebe ahụ." },
            { objective: "O2", q: "Ahịrị ifefe gị ga-agafe n'ala onye agbata obi. Gịnị ka ị ga-eme tupu ifefe?", options: ["Nweta ikike onye agbata obi ma dekọọ ya n'akpa akwụkwọ ọrụ", "Fee elu ka ha ghara ịhụ", "Fee naanị n'isi ụtụtụ", "Gwa onye ahịa ka ọ gwa ha mgbe e mechara"], answer: 0, why: "A na-ekwenye ma dekọọ ikike ndị nwe ala na ndị agbata obi tupu ifefe." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nyocha ihe egwu na atụmatụ ifefe",
          minutes: 6,
          goal: "Dee nyocha ihe egwu na atụmatụ ifefe zuru ezu nwere atụmatụ nnọchi.",
          text: [
            "Nyocha ihe egwu na-edepụta ihe nwere ike ịga njọ, ka o nwere ike isi mee, ka o nwere ike isi dị njọ, na ihe ị ga-eme iji belata ya. Dịka ọmụmaatụ: ihe egwu, waya ọkụ dị n'oke ugbo n'akụkụ ugwu; ihe nwere ike ime, ịkụ ya; ihe mbelata, hazie ahịrị ifefe 30 m site na ya ma debe ịdị elu return-to-home karịa ya. Ihe egwu ndị ọzọ a na-ahụkarị: ndị mmadụ na-abata n'ebe ahụ, anụ ụlọ, nnụnụ na-eri anụ, ikuku siri ike n'ehihie, okpomọkụ, njikọ na-efu n'azụ ugwu, na ebe ụgbọelu na-ada dị nso.",
            "Atụmatụ ifefe na-edobe: mpaghara ahụ e kewara n'ifefe nke ọ bụla dabara otu batrị; ịdị elu na ịdị nkọ foto ọ na-enye (n'ime oke ịdị elu iwu kwadoro); overlap; ọsọ; ọnụ ọgụgụ batrị, gbakwunyere ndị nnọchi; ebe ibuli na ebe ịda; oge (dịka ọmụmaatụ 10:00 ruo 14:00 maka ìhè ha nhata); na oke ihu igwe (ikuku kacha elu, enweghị mmiri ozuzo, ịhụ ụzọ). Lelee amụma ihu igwe site n'ụlọ ọrụ ihu igwe obodo gị ụbọchị tupu ọrụ ahụ na n'ụtụtụ ụbọchị ọrụ.",
            "Atụmatụ nnọchi na-ekwu ihe ị ga-eme ma ọ bụrụ na ihe agbanwee: ikuku karịrị oke gị, kwụsịtụ; mmiri ozuzo, kwakọọ ihe ma laghachi n'ụbọchị nchekwa; mmadụ abata n'ebe ahụ, chere ma ọ bụ daa drone; njikọ efuo, return-to-home edobere; batrị emebie, daa n'ebe ịda ọzọ e hazirela."
          ],
          steps: ["Depụta ihe egwu; tụọ ka o nwere ike isi mee na ka o si dị njọ; dee ihe mbelata maka nke ọ bụla.", "Kewaa mpaghara ahụ n'ifefe otu batrị.", "Debe ịdị elu, ịdị nkọ, overlap, ọsọ na batrị gbakwunyere ndị nnọchi.", "Debe oge na oke ihu igwe; lelee amụma ihu igwe.", "Dee atụmatụ nnọchi na ebe ịda ọzọ."],
          words: [["Nyocha ihe egwu (risk assessment)", "nlele e dere ede banyere ihe nwere ike ịga njọ na otu ị ga-esi belata ihe egwu ahụ."], ["Ihe mbelata (control)", "omume na-ebelata ihe egwu."], ["Atụmatụ nnọchi (contingency)", "omume e hazirela tupu oge ma ọ bụrụ na ihe agbanwee ma ọ bụ ga njọ."]],
          slides: [
            { title: "Nyocha ihe egwu", bullets: ["Ihe egwu, ka o nwere ike isi mee, ka o si dị njọ, ihe mbelata", "Waya ọkụ, ndị mmadụ, anụ ụlọ, nnụnụ", "Ikuku, okpomọkụ, njikọ na-efu, ebe ụgbọelu na-ada"] },
            { title: "Atụmatụ ifefe", bullets: ["Ifefe otu batrị, batrị nnọchi", "Ịdị elu, ịdị nkọ, overlap, ọsọ", "Ebe ibuli, ebe ịda, oge"] },
            { title: "Ihu igwe", bullets: ["Debe oke: ikuku, mmiri ozuzo, ịhụ ụzọ", "Lelee amụma obodo ụbọchị tupu ya na n'ụtụtụ ụbọchị ahụ"] },
            { title: "Atụmatụ nnọchi", bullets: ["Ikuku: kwụsịtụ. Mmiri ozuzo: ụbọchị nchekwa", "Mmadụ abata: chere ma ọ bụ daa", "Njikọ efuo: RTH edobere. Mmebi: ebe ịda ọzọ"] }
          ],
          sources: [KMD, NIMET, NCAA_P21],
          tryIt: "Dee tebụl nyocha ihe egwu nwere opekata mpe ihe egwu isii maka ọrụ ube oyibo hekta 40 ahụ, wee dee atụmatụ ifefe ya na atụmatụ nnọchi ise.",
          youCanNow: "ide nyocha ihe egwu na atụmatụ ifefe zuru ezu nwere atụmatụ nnọchi.",
          quickCheck: [
            { objective: "O3", q: "Na nyocha ihe egwu, gịnị bụ ihe egwu (hazard)?", options: ["Ihe nwere ike imerụ ahụ ma ọ bụ mebie ihe, dị ka waya ọkụ", "Ụgwọ onye ahịa", "Ihe a ga-enyefe site n'ifefe", "Agba drone ahụ"], answer: 0, why: "Ihe egwu bụ ihe nwere ike ịga njọ; nyocha ihe egwu na-agbakwunye ka o nwere ike isi mee, ka o si dị njọ na ihe mbelata." },
            { objective: "O3", q: "Atụmatụ gị debere ikuku kacha elu. Amụma ụtụtụ na-egosi ikuku karịrị ya ụbọchị niile. Gịnị ka ị ga-eme?", options: ["Fee ya otu o sila dị ma tụọ anya", "Wepụ oke ikuku na atụmatụ", "Fee naanị akụkụ ugbo dị anya", "Jiri ụbọchị nchekwa dị n'atụmatụ nnọchi"], answer: 3, why: "Atụmatụ nnọchi na-ekwu ihe a ga-eme mgbe ọnọdụ gafere oke, dị ka ịlaghachi n'ụbọchị nchekwa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi ọrụ ifefe",
        questions: [
          { objective: "O1", q: "Onye ahịa rịọrọ \"ifefe drone\". Ajụjụ mbụ gị kwesịrị ịbụ:", options: ["Drone agba gịnị ka ị chọrọ?", "Mkpebi gịnị ka ị chọrọ iji nsonaazụ ya mee?", "Enwere m ike ịfe ya taa?", "Ị nwere drone?"], answer: 1, why: "Mkpebi ahụ na-ekpebi data na ihe a ga-enyefe achọrọ." },
          { objective: "O1", q: "Kedu nke kwesịrị ịnọ na nkọwa ọrụ e dere ede?", options: ["Egwu ọkwọ drone kacha amasị", "Naanị ọnụ ahịa", "Ọ dịghị ihe; kwekọrịta n'ekwentị", "Mpaghara, ihe a ga-enyefe, ụbọchị, onye a ga-akpọ, ọnụ ahịa na ikesa data"], answer: 3, why: "Nkọwa ọrụ doro anya e dere ede na-egbochi esemokwu." },
          { objective: "O2", q: "N'oge nlele n'oche, ị chọpụtara ebe ụgbọelu na-ada dị kilomita 3 site na ya. Ị kwesịrị:", options: ["Ilele iwu anya site n'ọdụ ụgbọelu na ikike ọ bụla achọrọ", "Ileghara ya anya", "Ịfe naanị n'ụtụtụ", "Ịfe elu karịa"], answer: 0, why: "Ọtụtụ iwu na-egbochi drone n'akụkụ ọdụ ụgbọelu." },
          { objective: "O3", q: "Na nyocha ihe egwu, ihe mbelata (control) bụ:", options: ["Igwe njikwa drone (remote controller)", "Omume na-ebelata ihe egwu", "Mkpesa onye ahịa", "Batrị"], answer: 1, why: "Ihe mbelata na-ebelata ka o nwere ike isi mee ma ọ bụ ka o si dị njọ." },
          { objective: "O3", q: "Amụma ihu igwe na-egosi ikuku siri ike n'ehihie. Atụmatụ ezi uche bụ:", options: ["Fee n'ehihie otu o sila dị", "Kagbuo ọrụ ahụ ruo mgbe ebighị ebi", "Debe oge n'awa ndị ikuku dị jụụ ma debe ụbọchị nchekwa", "Wepụ propeller"], answer: 2, why: "Hazie gburugburu oke ihu igwe ya na ụbọchị nchekwa." }
        ]
      }
    },
    {
      name: "Isi 2: Ịfe drone n'ọrụ ahụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ọrụ ndị otu na nzukọ",
          minutes: 5,
          goal: "Kenye ndị otu ọrụ ha ma duzie nzukọ doro anya tupu ọrụ ifefe.",
          text: [
            "Ọbụlagodi obere ọrụ na-aga nke ọma mgbe ọrụ onye ọ bụla doro anya. Onye isi ọkwọ (pilot in command) na-ahụ maka nchekwa ifefe ahụ, ọ bụkwa ya na-ekwu okwu ikpeazụ. Onye nlekọta anya (observer) na-ele drone na igwe anya ma na-adọ aka na ntị maka ụgbọelu, nnụnụ, ndị mmadụ na anụmanụ. Onye ọrụ n'ala ma ọ bụ onye na-ahụ maka igwefoto (ground or payload operator) nwere ike ilekọta batrị, igwefoto, ebe ịda na onye ahịa.",
            "Tupu ifefe mbụ, onye isi ọkwọ na-eme nzukọ nye onye ọ bụla, gụnyere onye a ga-akpọ n'ugbo: mpaghara na ahịrị ifefe, ịdị elu, oge na batrị ọ bụla, ebe ibuli na ebe ịda, ihe egwu na ihe mbelata site na nyocha ihe egwu, oke ihu igwe, atụmatụ nnọchi, okwu unu ga-eji (dịka ọmụmaatụ \"hold\" [chere], \"land now\" [daa ugbu a]), na onye nwere ike ịkpọ \"kwụsị\". Onye ọ bụla nwere ike ịkpọ \"kwụsị\" maka nchekwa.",
            "Lelee na onye ọ bụla n'otu nwere mmiri, ihe nchebe n'anwụ na uwe nchekwa dị ka vest na-enwu gbaa (high-visibility), ma na-akara ebe ibuli ma na-ewepụ ndị na-ekiri ihe n'ebe ahụ."
          ],
          steps: ["Kenye onye isi ọkwọ, onye nlekọta anya na onye ọrụ n'ala ma ọ bụ igwefoto.", "Nzukọ: mpaghara, ịdị elu, batrị, ebe ibuli na ịda, ihe egwu, oke ihu igwe.", "Kwekọrịta atụmatụ nnọchi na okwu a kwekọrịtara (hold, land now).", "Kwenye na onye ọ bụla nwere ike ịkpọ \"kwụsị\".", "Kaa akara ebe ibuli; lelee mmiri, ihe nchebe n'anwụ na vest."],
          words: [["Onye isi ọkwọ (pilot in command)", "onye ọkwọ drone na-ahụ maka nchekwa ifefe, onye na-ekwu okwu ikpeazụ."], ["Okwu a kwekọrịtara (standard calls)", "okwu dị mkpụmkpụ ndị otu kwekọrịtara ka onye ọ bụla ghọta ozugbo."]],
          slides: [
            { title: "Ọrụ ndị otu", bullets: ["Onye isi ọkwọ: okwu ikpeazụ gbasara nchekwa", "Onye nlekọta anya: drone, igwe, ndị mmadụ, anụmanụ", "Onye ọrụ n'ala ma ọ bụ igwefoto: batrị, igwefoto, onye ahịa"] },
            { title: "Nzukọ", bullets: ["Mpaghara, ịdị elu, batrị, ebe ibuli, ebe ịda", "Ihe egwu, oke ihu igwe, atụmatụ nnọchi", "Okwu a kwekọrịtara: hold, land now"] },
            { title: "Lekọta ndị otu", bullets: ["Onye ọ bụla nwere ike ịkpọ \"kwụsị\"", "Mmiri, ihe nchebe n'anwụ, vest", "Kaa akara ebe ibuli, wepụ ndị na-ekiri ihe"] }
          ],
          tryIt: "Dee ihe onye isi ọkwọ ga-agụ na nzukọ, otu peeji, maka ọrụ ube oyibo ahụ, nke a ga-agụ n'ime nkeji atọ, na-ekpuchi ihe niile dị na nkuzi a.",
          youCanNow: "ikenye ndị otu ọrụ ha na iduzi nzukọ doro anya tupu ọrụ ifefe.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka onye nlekọta anya (observer) na-eme?", options: ["Ọ na-akwụ ndị otu ụgwọ", "Ọ na-ele drone, igwe na ala ma na-adọ onye ọkwọ aka na ntị", "Ọ na-ede akụkọ onye ahịa", "Ọ na-anata ego n'aka onye ahịa"], answer: 1, why: "Onye nlekọta anya na-ele maka ụgbọelu, nnụnụ, ndị mmadụ na anụmanụ ma na-adọ onye ọkwọ aka na ntị." },
            { objective: "O4", q: "Onye a ga-akpọ n'ugbo ga-eguzo nso ebe ibuli. Gịnị ka ị ga-eme na nzukọ?", options: ["Hapụ ya na nzukọ", "Gwa ya ka ọ gbachi nkịtị", "Tinye ya, kọwaara ya ihe egwu na okwu a kwekọrịtara, ma gwa ya na onye ọ bụla nwere ike ịkpọ \"kwụsị\"", "Rịọ ya ka ọ fee drone ahụ"], answer: 2, why: "Nzukọ ahụ gụnyere onye ọ bụla nọ n'ebe ahụ, gụnyere onye a ga-akpọ n'ugbo, onye ọ bụla nwekwara ike ịkpọ \"kwụsị\" maka nchekwa." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịrụ ọrụ ifefe na ilekọta ya",
          minutes: 5,
          goal: "Fee ọrụ e hazirela, lekọta ya ma kpebie ma a ga-aga n'ihu ma ọ bụ kwụsị.",
          text: [
            "Tupu ifefe ọ bụla, mee ndepụta nlele tupu ifefe ma kwenye na ọnọdụ dị n'ime oke. Bulite ma ọ bụ lelee ụzọ e hazirela, kwenye ebe ụlọ (home point) na ịdị elu return-to-home, ma kwenye na onye nlekọta anya nọ n'ọnọdụ ya.",
            "N'oge ifefe, onye ọkwọ na-ele drone na telemetry (batrị, signal, satịlaịtị, ịdọ aka na ntị maka ikuku, ịdị elu, otu o si aga n'ahịrị ndị ahụ). Onye nlekọta anya na-ele igwe na ala. Dị njikere iji aka gị were njikwa drone n'oge ọ bụla. Gbanwee batrị n'etiti ifefe dị ka usoro batrị gị si dị, ma kaa akara ahịrị ndị e mechara.",
            "Na-ekpebi ma a ga-aga n'ihu ma ọ bụ kwụsị ụbọchị niile. Ọ bụrụ na ikuku karịrị oke gị, mmadụ abata n'ebe ahụ, oké ifufe na-akwado, ma ọ bụ ịdọ aka na ntị na-alọghachi ugboro ugboro, kwụsịtụ ma ọ bụ daa drone. Imecha echi ka mma karịa ihe mberede taa. Na-agwa onye ahịa otu ọrụ si aga na mgbanwe ọ bụla."
          ],
          steps: ["Ndepụta nlele tupu ifefe; ọnọdụ ọ dị n'ime oke?", "Lelee ụzọ, ebe ụlọ na ịdị elu return-to-home.", "Fee; onye ọkwọ na-ele drone na telemetry, onye nlekọta anya na-ele igwe na ala.", "Gbanwee batrị n'enweghị nsogbu; kaa akara ahịrị e mechara.", "Kwụsịtụ ma ọ bụ daa ma ọ bụrụ na a gafere oke; gwa onye ahịa."],
          words: [["Telemetry", "data ndụ drone na-ezite n'igwe njikwa: batrị, ịdị elu, ọnọdụ, signal, ịdọ aka na ntị."], ["Ga n'ihu / kwụsị (go / no-go)", "mkpebi ma ọ dị mma ịfe ma ọ bụ ịga n'ihu."]],
          slides: [
            { title: "Tupu ifefe ọ bụla", bullets: ["Ndepụta nlele na oke", "Ụzọ, ebe ụlọ, ịdị elu RTH", "Onye nlekọta anya nọ n'ọnọdụ ya"] },
            { title: "N'oge ifefe", bullets: ["Onye ọkwọ: drone na telemetry", "Onye nlekọta anya: igwe na ala", "Dị njikere iji aka were njikwa"] },
            { title: "Ga n'ihu ma ọ bụ kwụsị, ụbọchị niile", bullets: ["Ikuku, ndị mmadụ, oké ifufe, ịdọ aka na ntị ugboro ugboro", "Kwụsịtụ ma ọ bụ daa", "Echi ka mma karịa ihe mberede"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Dee kaadị \"ga n'ihu / kwụsị\" maka ọrụ gị: ọnọdụ ise pụtara \"ga n'ihu\", na ise pụtara \"kwụsị ma ọ bụ daa\", n'okwu dị mkpụmkpụ ndị otu nwere ike ịgụ n'ọhịa.",
          youCanNow: "ịfe ma lekọta ọrụ e hazirela ma mee ezi mkpebi ma a ga-aga n'ihu ma ọ bụ kwụsị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ telemetry?", options: ["Nkwekọrịta onye ahịa", "Amụma ihu igwe", "Data ifefe ndụ dị ka batrị, ịdị elu, signal na ịdọ aka na ntị", "Ndepụta ndị otu"], answer: 2, why: "Telemetry bụ data ndụ onye ọkwọ na-ele n'oge ifefe." },
            { objective: "O5", q: "Oké ifufe na-akwado, e mechaala ọkara ahịrị ndị ahụ. Gịnị ka ị ga-eme?", options: ["Daa drone, ma mechaa ndị fọdụrụ ma emechaa", "Fee ọsọ ọsọ ka i mechaa", "Gbanyụọ ịdọ aka na ntị", "Hapụ onye nlekọta anya ka ọ fee mgbe ị na-akwakọ ihe"], answer: 0, why: "Imecha echi ka mma karịa ihe mberede taa; kwụsịtụ ma ọ bụ daa mgbe ọnọdụ adịghị mma." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Imechi ọrụ: nlele data, ndekọ na ihe mberede",
          minutes: 5,
          goal: "Lelee data, dejupụta ndekọ ma lekọta akụkọ ihe mberede tupu ịhapụ ebe ọrụ.",
          text: [
            "Tupu ị hapụ ebe ahụ, lelee data: gụọ ọnụ ọgụgụ foto n'ifefe ọ bụla, lee ụfọdụ n'ime ha maka ịgba agba (blur) na ìhè, lelee oghere ebe foto na-ekpuchighị, ma ọ bụrụ na ọ ga-ekwe omume, mee ngwa ngwa ijikọ foto n'obere ịdị nkọ (low-resolution stitch) na laptọọpụ. Fee oghere ọ bụla ọzọ mgbe ndị otu na ọnọdụ ka dị. Chekwaa data na ngwaọrụ nke abụọ.",
            "Dejupụta ndekọ: akwụkwọ ndekọ ifefe maka ifefe ọ bụla (oge, batrị, onye ọkwọ, nsogbu), ndetu batrị na nrụzi, na ezi ọnọdụ ụbọchị ahụ n'akpa akwụkwọ ọrụ. Kelee onye a ga-akpọ n'ugbo ma kwenye mgbe ọ ga-anata ihe a ga-enyefe.",
            "Ọ bụrụ na ihe ọ bụla gara njọ (drone dara, ọ fọrọ obere ka ọ kụọ ụgbọelu, mmerụ ahụ, mmebi ihe onwunwe, drone fefuru efu), bụrụ ụzọ mee ka ebe ahụ dị nchebe, wee dekọọ ihe mere ma kọọ ya nye ndị ọchịchị ụgbọelu gị dị ka iwu ha siri chọọ, na nye ụlọ ọrụ inshọransị gị. Gị na ndị otu tụlee ihe mberede ahụ ma melite usoro unu ka ọ ghara ime ọzọ."
          ],
          steps: ["Gụọ foto, lee ụfọdụ maka ịgba agba, lelee oghere.", "Fee oghere ọzọ; chekwaa data na ngwaọrụ nke abụọ.", "Dejupụta ndekọ ifefe, batrị na nrụzi.", "Kwenye ụbọchị nnyefe na onye ahịa.", "Maka ihe mberede ọ bụla: mee ka ọ dị nchebe, dekọọ, kọọ dị ka iwu siri chọọ, tụlee ma melite usoro."],
          words: [["Ọ fọrọ obere (near miss)", "ihe mere ebe ihe mberede fọrọ obere ka ọ mee."], ["Oghere foto (coverage gap)", "mpaghara foto na-adịghị ma ọ bụ foto ya adịghị mma."]],
          slides: [
            { title: "Lelee data n'ebe ọrụ", bullets: ["Gụọ foto, lee ụfọdụ maka ịgba agba", "Chọọ oghere foto; jikọta ngwa ngwa", "Fee oghere ọzọ, chekwaa na ngwaọrụ nke abụọ"] },
            { title: "Dejupụta ndekọ", bullets: ["Ndekọ ifefe, batrị na nrụzi", "Ezi ọnọdụ n'akpa akwụkwọ ọrụ", "Kwenye ụbọchị nnyefe"] },
            { title: "Ọ bụrụ na ihe gara njọ", bullets: ["Mee ka ebe ahụ dị nchebe", "Dekọọ ma kọọ dị ka iwu siri chọọ; gwa inshọransị", "Tụlee ma melite usoro"] }
          ],
          sources: [KCAA_UAS, NCAA_P21],
          tryIt: "Ọrụ ikpeazụ: chịkọta akpa akwụkwọ ọrụ gị zuru ezu: nkọwa ọrụ, nlele ebe ọrụ na maapụ e sere n'aka, nlele ikuku na ikike ya na isi iyi, nyocha ihe egwu, atụmatụ ifefe, ọrụ ndị otu na nzukọ, atụmatụ nnọchi, kaadị ga n'ihu / kwụsị, na ndepụta nlele na ụdị akwụkwọ ndekọ mgbe ifefe gasịrị.",
          youCanNow: "imechi ọrụ ifefe n'ụzọ ọkachamara site na nlele data, ndekọ zuru ezu na ezi njikwa ihe mberede.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ijikọ foto ngwa ngwa n'obere ịdị nkọ (low-resolution stitch) bụ maka ya?", options: ["Ime akụkọ ikpeazụ", "Ịchaji batrị", "Iziga akwụkwọ ụgwọ", "Ilele oghere foto tupu ịhapụ ebe ọrụ"], answer: 3, why: "Ijikọ ngwa ngwa na-egosi oghere mgbe ndị otu na ọnọdụ ka dị iji fee ha ọzọ." },
            { objective: "O6", q: "Drone gị kụrụ osisi ngere wee gbajie otu propeller. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Kọọ ya n'ọnwa na-abịa", "Mee ka ebe ahụ dị nchebe, wee dekọọ ya ma kọọ ya dị ka iwu siri chọọ", "Zoo mmebi ahụ n'anya onye ahịa", "Fee ọrụ na-esote ya na otu propeller ahụ"], answer: 1, why: "Bụrụ ụzọ mee ka ebe ahụ dị nchebe, wee dekọọ ihe mberede ahụ ma kọọ ya nye ndị ọchịchị na inshọransị dị ka a chọrọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịfe drone n'ọrụ ahụ",
        questions: [
          { objective: "O4", q: "Onye na-ekwu okwu ikpeazụ gbasara nchekwa ifefe?", options: ["Onye ahịa", "Onye nlekọta anya", "Onye isi ọkwọ", "Onye mere drone ahụ"], answer: 2, why: "Onye isi ọkwọ na-ahụ maka nchekwa ifefe." },
          { objective: "O4", q: "Onye nwere ike ịkpọ \"kwụsị\" maka nchekwa n'oge ọrụ?", options: ["Onye ọ bụla n'otu", "Naanị onye ahịa", "Naanị onye nlekọta anya", "Ọ dịghị onye ozugbo drone malitere ife"], answer: 0, why: "Onye ọ bụla hụrụ ihe egwu nwere ike ịkpọ \"kwụsị\"." },
          { objective: "O5", q: "Telemetry na-egosi na ikuku karịrị oke gị ugbu a. Ị kwesịrị:", options: ["Ịfe ọsọ ọsọ ka i mechaa", "Igbanyụ ịdọ aka na ntị", "Ịrịgo elu karịa", "Ịkwụsịtụ ma ọ bụ ịda drone"], answer: 3, why: "Ịgafe oke pụtara kwụsị; mechaa ma emechaa." },
          { objective: "O6", q: "Tupu ịhapụ ebe ọrụ, ị kwesịrị:", options: ["Ihichapụ foto ka ebe nchekwa tọgbọ chakoo", "Ilele foto maka ịgba agba na oghere, ma fee oghere ọzọ", "Ịpụ n'agwaghị onye ahịa", "Ihichapụ kaadị ebe nchekwa (format)"], answer: 1, why: "Idozi oghere n'ebe ọrụ na-echekwa njem nke abụọ." },
          { objective: "O6", q: "Drone gị fọrọ obere ka ọ kụọ obere ụgbọelu. Mgbe i mere ka ihe dị nchebe, ị kwesịrị:", options: ["Idekọ ya ma kọọ ya dị ka ndị ọchịchị gị siri chọọ", "Izo ya", "Ịgba ọsọ pụọ", "Ịta ụgbọelu ahụ ụta"], answer: 0, why: "Ịkọ ya na-enyere nchekwa aka, iwu na-achọkarịkwa ya." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Drone n'Ugbo: Ịhazi Ọrụ Ifefe na Ịrụ Ya",
    questions: [
      { objective: "O1", q: "Nkọwa ọrụ (mission scope) bụ:", options: ["Igwefoto drone ahụ", "Nkwekọrịta e dere ede banyere ihe ọrụ na-ekpuchi na ihe ọ na-enyefe", "Akụkọ ihu igwe", "Akwụkwọ ndekọ ifefe"], answer: 1, why: "Ọ na-edobe mpaghara, ihe a ga-enyefe, ụbọchị, ọnụ ahịa na oke." },
      { objective: "O1", q: "Kedu nke bụ ihe a ga-enyefe (deliverable)?", options: ["Akwụkwọ ikike onye ọkwọ", "Batrị", "Maapụ NDVI na akụkọ otu peeji", "Propeller"], answer: 2, why: "Ihe a ga-enyefe bụ ihe onye ahịa na-anata." },
      { objective: "O1", q: "Gịnị mere ị ga-eji kwuo oke maapụ drone na nkọwa ọrụ?", options: ["Iji zere mmechuihu na esemokwu", "Iji nara ego karịa", "Iji mee ka onye ahịa ghara ịghọta", "Ọ dịghị mkpa"], answer: 0, why: "Oke doro anya na-eme ka ihe a na-atụ anya ya bụrụ eziokwu." },
      { objective: "O2", q: "Nlele n'oche (desk survey) na-eji:", options: ["Naanị shọvel", "Drone na-efe efe", "Traktọ", "Maapụ na foto satịlaịtị tupu ịga ebe ọrụ"], answer: 3, why: "Nlele n'oche na-achọpụta ihe egwu na nsogbu ikuku n'oge." },
      { objective: "O2", q: "Kedu nke ị ga-ekwenye n'akwụkwọ tupu ịfe drone n'ugbo onye ahịa?", options: ["Ọnụ ọgụgụ akpụkpọ ụkwụ onye ọkwọ", "Ikike onye nwe ala ma ọ bụ onye njikwa", "Ọnụ ahịa ihe ọkụkụ", "Ọ dịghị ihe"], answer: 1, why: "Ikike e dere ede na-echebe onye ọ bụla." },
      { objective: "O2", q: "Gịnị mere ị ga-eji lelee netwọk ekwentị n'oge nlele n'ala?", options: ["Maka egwu", "Maka social media", "App, maapụ na nkwurịta okwu nwere ike ịchọ ya", "Ọ baghị uru"], answer: 2, why: "Enweghị netwọk nwere ike imetụta maapụ, nhazi ọrụ na ihe mberede." },
      { objective: "O3", q: "Nyocha ihe egwu na-edepụta:", options: ["Ihe egwu, ka o nwere ike isi mee, ka o si dị njọ na ihe mbelata", "Naanị ego a ga-eji", "Aha ndị ahịa", "Ụdị ihe ọkụkụ"], answer: 0, why: "Ọ na-egosi ihe nwere ike ịga njọ na otu a ga-esi belata ya." },
      { objective: "O3", q: "Waya ọkụ dị n'akụkụ ugbo ahụ. Ezi ihe mbelata bụ:", options: ["Fee nso karịa maka foto ka mma", "Leghara ya anya", "Fee n'abalị", "Debe ahịrị ifefe n'ebe dị anya site na ya ma debe ịdị elu RTH karịa ya"], answer: 3, why: "Anya na ịdị elu RTH dị mma na-ebelata ihe egwu ịkụ ya." },
      { objective: "O3", q: "Gịnị mere ị ga-eji kewaa mpaghara buru ibu n'ifefe otu batrị?", options: ["Iji foto ole na ole", "Ka ifefe ọ bụla mechaa n'enweghị nsogbu n'otu batrị", "Iji mee ka sọftwia ghara ịghọta", "N'ihi na overlap chọrọ ya"], answer: 1, why: "Ịhazi site na batrị na-egbochi ihe mberede batrị ịgwụ." },
      { objective: "O3", q: "Ebee ka ị ga-enweta amụma ihu igwe?", options: ["Site n'ichepụta ya", "Echiche enyi gị", "Ụlọ ọrụ ihu igwe obodo gị, ụbọchị tupu ya na n'ụtụtụ ụbọchị ahụ", "Akwụkwọ ndetu nke afọ gara aga"], answer: 2, why: "Amụma ihu igwe gọọmentị bụ nke a kacha tụkwasị obi." },
      { objective: "O3", q: "Atụmatụ nnọchi (contingency) bụ:", options: ["Omume e hazirela tupu oge ma ọ bụrụ na ihe agbanwee ma ọ bụ ga njọ", "Ntọala igwefoto", "Ụgwọ", "Akụkụ drone"], answer: 0, why: "Atụmatụ nnọchi na-enyere ndị otu aka ime ihe ngwa ngwa n'enweghị nsogbu." },
      { objective: "O4", q: "Isi ọrụ onye nlekọta anya bụ:", options: ["Ịhazi data", "Ịkwụ ndị otu ụgwọ", "Ịfe drone", "Ilele drone, igwe na ala ma dọọ onye ọkwọ aka na ntị"], answer: 3, why: "Onye nlekọta anya na-eche nche maka ihe egwu." },
      { objective: "O4", q: "Okwu a kwekọrịtara dị ka \"hold\" na \"land now\" na-enyere aka n'ihi na:", options: ["Ha na-ada ka okwu ọkachamara", "Onye ọ bụla na-aghọta ha ozugbo", "Drone chọrọ ha", "Ha na-echekwa batrị"], answer: 1, why: "Okwu dị mkpụmkpụ a kwekọrịtara na-ebelata ọgba aghara mgbe a na-eme ọsọ ọsọ." },
      { objective: "O5", q: "Telemetry gụnyere:", options: ["Ọnụ ahịa ihe ọkụkụ", "Aha ndị ọrụ ugbo", "Batrị, ịdị elu, ọnọdụ, signal na ịdọ aka na ntị", "Ihu igwe ọnwa na-abịa"], answer: 2, why: "Telemetry bụ data ifefe ndụ." },
      { objective: "O5", q: "Mmadụ abata n'ebe a na-efe drone. Ndị otu kwesịrị:", options: ["Ime ka drone chere ma ọ bụ daa ya", "Ịfe ala karịa n'elu ha", "Ịga n'ihu na-efe ahịrị ndị ahụ", "Ịgwa ha ka ha gbaa ọsọ"], answer: 0, why: "Ndị mmadụ n'ebe ahụ na-eme ka ihe egwu bawanye; kwụsịtụ ma ọ bụ daa." },
      { objective: "O5", q: "\"Imecha echi ka mma karịa ihe mberede taa\" pụtara:", options: ["Na-efe mgbe niile n'abalị", "Emechala ọrụ ọ bụla", "Na-anara ego karịa maka igbu oge", "Kwụsị mgbe ọnọdụ adịghị mma, ọbụlagodi ma ọ bụrụ na e mechabeghị ọrụ ahụ"], answer: 3, why: "Nchekwa na-abụ ụzọ tupu usoro oge." },
      { objective: "O6", q: "Gịnị mere ị ga-eji chekwaa data na ngwaọrụ nke abụọ tupu ịpụ?", options: ["Iji mejupụta ebe nchekwa", "Ka data dịrị ma ọ bụrụ na otu ngwaọrụ mebiri ma ọ bụ furu efu", "N'ihi na drone chọrọ ya", "Iji kesaa ndị ị na-amaghị"], answer: 1, why: "Mbipụta nke abụọ na-echebe data onye ahịa na ọrụ gị." },
      { objective: "O6", q: "Akwụkwọ ndekọ ifefe mgbe ọrụ gasịrị na-edekọ:", options: ["Naanị aha onye ahịa", "Naanị ọnụ ahịa", "Oge, batrị, onye ọkwọ na nsogbu maka ifefe ọ bụla", "Ọ dịghị ihe"], answer: 2, why: "Ndekọ na-akwado nchekwa, nrụzi na idebe iwu." },
      { objective: "O6", q: "Mgbe ihe mberede mere, ihe mbụ kacha mkpa bụ:", options: ["Ime ka ebe ahụ dị nchebe", "Itinye foto n'ịntanetị", "Ịpụ ngwa ngwa", "Ihichapụ ndekọ"], answer: 0, why: "Ndị mmadụ na ihe onwunwe na-abụ ụzọ." },
      { objective: "O6", q: "Gịnị mere unu na ndị otu ga-eji tụlee ihe mberede?", options: ["Iji ta mmadụ ụta", "Iji mezue oge", "Ọ baghị uru", "Iji melite usoro ka ọ ghara ime ọzọ"], answer: 3, why: "Ịmụta ihe site n'ihe mberede na-eme ka nchekwa ka mma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 4, 6, 10, 11, 13, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke akpa akwụkwọ ọrụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Nkọwa ọrụ", objective: "O1", notYet: "Mkpebi onye ahịa, mpaghara ma ọ bụ ihe a ga-enyefe adịghị.", meets: "E dere mkpebi, mpaghara, ihe a ga-enyefe, ịdị nkọ, ụbọchị, onye a ga-akpọ, ọnụ ahịa na ikesa data, ya na ihe drone ahụ na-enweghị ike ime.", exceeds: "Onye ahịa bịanyere aka na ya ma ọ bụ kwenye ya n'akwụkwọ." },
      { name: "Nlele ebe ọrụ na ikike", objective: "O2", notYet: "Enweghị nlele, ma ọ bụ ikike na nlele ikuku adịghị.", meets: "Nlele n'oche na n'ala ya na maapụ e sere n'aka nke ihe egwu, nlele ikuku ya na isi iyi, na ikike e dere ede.", exceeds: "Gụnyere netwọk ekwentị, ebe ndị otu ga-ezo onwe ha na ụbọchị nlele ọ bụla." },
      { name: "Nyocha ihe egwu", objective: "O3", notYet: "E depụtara ihe egwu n'enweghị ihe mbelata.", meets: "Tebụl nwere ihe egwu, ka o nwere ike isi mee, ka o si dị njọ na ihe mbelata maka isi ihe egwu ọ bụla.", exceeds: "Na-ekpuchi okpomọkụ, ikuku, ndị na-ekiri ihe, njikọ na-efu na ebe ụgbọelu na-ada dị nso." },
      { name: "Atụmatụ ifefe na atụmatụ nnọchi", objective: "O3", notYet: "Ịdị elu, overlap, batrị ma ọ bụ oke ihu igwe adịghị.", meets: "E kewara mpaghara n'ifefe, ịdị elu, ịdị nkọ foto, overlap, ọsọ, batrị gbakwunyere ndị nnọchi, oge, oke ihu igwe na atụmatụ nnọchi.", exceeds: "Na-egosi otu e si gbakọọ ọnụ ọgụgụ batrị na ụbọchị nchekwa." },
      { name: "Ndị otu na nzukọ", objective: "O4", notYet: "Enweghị ọrụ ndị otu ma ọ bụ ndetu nzukọ.", meets: "Ọrụ e kenyere ndị a kpọrọ aha na ndetu nzukọ nwere ihe egwu, oke, atụmatụ nnọchi na okwu a kwekọrịtara.", exceeds: "Gụnyere uwe nchekwa, mmiri na otu a ga-esi wepụ ndị na-ekiri ihe." },
      { name: "Imechi ọrụ", objective: "O6", notYet: "Enweghị ndepụta nlele ma ọ bụ akwụkwọ ndekọ mgbe ifefe gasịrị.", meets: "Ndepụta nlele mgbe ifefe gasịrị nwere nlele data, nchekwa data, ndekọ ifefe na nzọụkwụ ịkọ ihe mberede.", exceeds: "Gụnyere otu ihe a mụtara site n'ihe mberede si emelite usoro." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke akpa akwụkwọ ọrụ",
      "Ndị na-amụ ihe kwuru na ha jiri akpa akwụkwọ ọrụ e dere ede maka ezi ọrụ onye ahịa n'ime ụbọchị 60 (nnyocha nsochi)",
      "Azụmahịa drone na-akọ na ifefe ugboro abụọ, esemokwu ma ọ bụ ihe mberede belatara mgbe ọzụzụ gasịrị",
      "Ndị na-amụ ihe were ihe ọmụmụ drone ọzọ ma ọ bụ nweta onye ahịa na-alọghachi"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ laptọọpụ nwere app maapụ na foto satịlaịtị",
      "Ụdị akwụkwọ (templates) ma ọ bụ akwụkwọ ndetu maka nkọwa ọrụ, nyocha ihe egwu, atụmatụ ifefe na ndekọ",
      "Drone na app nhazi ya, ọ bụrụ na ọ dị, maka ọrụ omume",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge iji mee akpa akwụkwọ ọrụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu akpa akwụkwọ ọrụ ọmụmaatụ dị ka otu tupu ndị na-amụ ihe emee nke ha.",
      "Mee egwuregwu nzukọ (role-play) nwere onye ọkwọ, onye nlekọta anya na onye a ga-akpọ n'ugbo, ma mụọ okwu a kwekọrịtara.",
      "Ifefe omume ọ bụla ga-agbaso iwu drone obodo ahụ, ya na ndị ọkwọ nwere akwụkwọ ikike na ikike niile dị.",
      "Jiri ọrụ ọmụmaatụ dị n'ihe ọmụmụ a ma ọ bụrụ na ndị na-amụ ihe enweghị onye ahịa ugbu a.",
      "Jiri rubric tụọ akara akpa akwụkwọ ọrụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
