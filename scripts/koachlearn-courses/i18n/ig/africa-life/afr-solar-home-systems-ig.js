"use strict";

// Koach Learn course (Igbo translation of africa-life/afr-solar-home-systems.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const VERASOL = { name: "VeraSol: nlekọta ịdị mma nke onwe ya maka ike anyanwụ na-adịghị n'eletrịkị gọọmentị (nọchiri Lighting Global Quality Assurance)", url: "https://verasol.org/" };
const VERASOL_DB = { name: "Ebe nchekwa ngwaahịa VeraSol: chọọ ngwa ike anyanwụ e nyere asambodo", url: "https://data.verasol.org/" };
const NFPA = { name: "NFPA: Nchekwa batrị lithium-ion (ihe ịdọ aka na ntị; atụbala ya n'ahịhịa, mee ka e megharịa ya)", url: "https://www.nfpa.org/education-and-research/home-fire-safety/lithium-ion-batteries" };
const GOGLA_CP = { name: "GOGLA: Nchekwa ndị ahịa n'ike anyanwụ na-adịghị n'eletrịkị gọọmentị (ire ahịa n'ụzọ ziri ezi, ime ihe n'ìhè, imeso mmadụ nke ọma, ọrụ ọma, ịdị mma)", url: "https://www.gogla.org/what-we-do/business-environment-and-consumer-protection/consumer-protection/" };
const EPRA = { name: "Energy and Petroleum Regulatory Authority (EPRA), Kenya: ike ọhụrụ na ikikere ọrụ", url: "https://www.epra.go.ke/" };
const WHO_EWASTE = { name: "Akwụkwọ eziokwu WHO: Ahịhịa ngwa eletrọnịkị (e-waste), gụnyere ihe egwu dị n'ịkpọ ya ọkụ na ịtụfu ya", url: "https://www.who.int/news-room/fact-sheets/detail/electronic-waste-(e-waste)" };

module.exports = {
  id: "afr-solar-home-systems-ig",
  lang: "ig",
  translationOf: "afr-solar-home-systems",
  category: "Africa: Life and Work",
  name: "Ike Anyanwụ n'Ụlọ: Ịwụnye, Ire na Azụmahịa Ike Anyanwụ",
  skills: "Ịkpọ aha akụkụ ngwa ike anyanwụ na ịlele ịdị mma ya, Ịtụ nha ngwa site n'ike a na-eji kwa ụbọchị, Ịwụnye obere ngwa DC n'enweghị nsogbu, Ilekọta na ịchọpụta nsogbu ngwa, Ire n'eziokwu site n'ego nkịtị ma ọ bụ ịkwụ nwayọọ nwayọọ",
  outcome: "inyere ezinụlọ aka ịhọrọ, ịwụnye na ilekọta obere ngwa ike anyanwụ n'ụlọ: ịlele na e nyere ngwa ahụ asambodo, ịtụ nha ya site n'ike ezinụlọ ahụ na-eji kwa ụbọchị, ịwụnye ya n'enweghị nsogbu, idebe ya ka ọ na-arụ ọrụ, na ire ya n'eziokwu nwere ọnụahịa na usoro doro anya.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ntorobịa, ndị na-enyere ndị eletrịkị aka, ndị nwe ụlọ ahịa na ndị na-ere ahịa n'Africa niile chọrọ inweta ego site n'obere ike anyanwụ: ọkụ, ịchaja ekwentị, redio, obere TV ma ọ bụ fan maka ụlọ na kiosk na-enweghị eletrịkị gọọmentị a pụrụ ịtụkwasị obi, n'ime obodo Kenya, n'ugwu Nigeria, Upper East nke Ghana, Casamance nke Senegal, ma ọ bụ Far North nke Cameroon.",
    "Isi 1 na-akụzi otu ngwa ike anyanwụ n'ụlọ si arụ ọrụ: akụkụ ya na otu esi elele ịdị mma ya, otu esi atụ nha ngwa site n'ihe ezinụlọ na-eji kwa ụbọchị, na otu esi awụnye obere ngwa n'enweghị nsogbu. Isi 2 na-akụzi idebe ya ka ọ na-arụ ọrụ na ịgba azụmahịa: nlekọta na ịchọpụta nsogbu, ire site n'ego nkịtị ma ọ bụ ịkwụ nwayọọ nwayọọ (pay-as-you-go), na ide ọnụahịa n'eziokwu.",
    "Ihe ọmụmụ a bụ naanị maka obere ngwa n'ụlọ. Ọ naghị akụzi ọrụ na eletrịkị gọọmentị (grid), waya eletrịkị nke ụlọ ma ọ bụ ngwa ndị buru ibu; ndị ahụ chọrọ onye eletrịkị nwere ikikere. Mba ụfọdụ na-enye ndị ọrụ ike anyanwụ ikikere, ya mere jụọ ndị na-achịkwa ike na mba gị. Ọnụọgụ nha na ọnụahịa niile bụ ihe atụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ. Nnwale nta na-esochi nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Dee ọnụahịa (quote) maka otu ezinụlọ dị adị ma ọ bụ nke ihe atụ (dịka ọmụmaatụ ezinụlọ mmadụ ise na Kitui, Kenya, ma ọ bụ kiosk na Kaolack, Senegal): tebụl nke ihe ha chọrọ ka ọ kwụọ ọkụ, na watts na awa kwa ụbọchị; ngụkọta ike kwa ụbọchị; nha panel na batrị i họrọ na otu i si gụpụta ya; ngwa e nyere asambodo site n'ebe nchekwa VeraSol ma ọ bụ ngwa nwere warranti doro anya; ndepụta nchekwa maka ịwụnye ya; ọnụahịa ego nkịtị na usoro ịkwụ nwayọọ nwayọọ ọ bụla, na ngụkọta onye ahịa ga-akwụ; na kaadị nlekọta na warranti maka onye ahịa.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa, ndị na-enyere ndị eletrịkị aka, ndị nwe ụlọ ahịa na ndị na-ere ngwa ike anyanwụ n'obodo mepere emepe na n'ime obodo n'Africa niile (Kenya, Nigeria, Ghana, Senegal, Cameroon, Morocco na ndị ọzọ) na-ere, na-awụnye ma ọ bụ chọrọ ịmalite obere azụmahịa ike anyanwụ.",
    startingPoint: "Ọtụtụ ahụla oriọna na ngwa ike anyanwụ, ụfọdụ na-erekwa ha. Ole na ole nwere ike ịtụ nha ngwa site n'ike ezinụlọ na-eji, ịlele ma e nyere ngwa asambodo, ịwụnye obere ngwa n'enweghị nsogbu, ịchọpụta nsogbu dị mfe, ma ọ bụ ịkọwa usoro ịkwụ nwayọọ nwayọọ n'eziokwu.",
    gap: "Ngwa dị obere karịa mkpa ma ọ bụ adịgboroja na-anwụ ngwa ngwa, ndị ahịa na-atụfu ego na ntụkwasị obi; ịwụnye ya nke ọma na-akpata ọkụ batrị na ọkụ eletrịkị ịgba mmadụ; usoro ịkwụ nwayọọ nwayọọ na-edoghị anya na-etinye ezinụlọ n'ụgwọ. Onye na-awụnye ma na-ere n'eziokwu, nke a zụrụ azụ, na-enweta ndị ahịa na-alọghachi ma na-enyere ezinụlọ aka inweta ọkụ na ike dị ọcha a pụrụ ịtụkwasị obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; mgbakọ dị mfe (ịmụba, ịgbakọ, ikewa), a kọwara okwu teknụzụ ọ bụla",
      "Ngwaọrụ: ekwentị nkịtị nwere igwe mgbakọ; data dị oke ọnụ, ya mere ịchọ n'ebe nchekwa dị mkpụmkpụ",
      "Oke na nchekwa: naanị obere ngwa n'ụlọ; ọ dịghị grid, waya eletrịkị ụlọ ma ọ bụ ngwa buru ibu; iwu ikikere dị iche na mba ọ bụla, ndị na-amụ ihe na-ajụkwa ndị na-achịkwa ike",
      "Ego: ọnụahịa na ọnụọgụ nha bụ ihe atụ; ọ dịghị ndụmọdụ itinye ego; a na-akọwa usoro ịkwụ nwayọọ nwayọọ n'eziokwu",
      "A sụgharịkwara ihe ọmụmụ a n'asụsụ French na Arabic, ya mere ihe atụ gụnyere ndị ahịa na-asụ French na ndị North Africa"
    ],
    prerequisites: "Mgbakọ dị mfe. Ọ dịghị mkpa ọzụzụ eletrịkị iji malite; a ga-amụ ịwụnye ngwa n'aka n'akụkụ onye na-awụnye nwere ahụmịhe."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ngwa ike anyanwụ n'ụlọ", action: "ịkpọ aha akụkụ ọ bụla (panel, charge controller, batrị, inverter, ọkụ na ngwa ụlọ) ma lelee ma e nyere ngwa ahụ asambodo n'ebe nchekwa VeraSol", standard: "na-akpọ aha akụkụ niile nke ọma ma dee ihe ị chọpụtara banyere asambodo" },
    { id: "O2", condition: "Mgbe e nyere gị ndepụta ihe ezinụlọ chọrọ ka ọ kwụọ ọkụ", action: "ịgụpụta ike a chọrọ kwa ụbọchị na watt-hours ma họrọ nha panel na batrị", standard: "na mgbakọ ziri ezi na ihe e tinyere maka ike na-efu efu" },
    { id: "O3", condition: "Mgbe ị na-awụnye obere ngwa ike anyanwụ DC n'ụlọ", action: "ịgbaso ndepụta nchekwa maka ebe panel ga-anọ, waya, fiuz na ebe batrị ga-anọ", standard: "n'ahapụghị nzọụkwụ ọ bụla na n'emeghị ọrụ ọ bụla na grid ma ọ bụ waya eletrịkị ụlọ" },
    { id: "O4", condition: "Mgbe ngwa anaghị arụ ọrụ nke ọma", action: "ime nlekọta oge niile ma chọpụta nsogbu dị mfe otu nzọụkwụ n'otu oge", standard: "na-elele panel, njikọ, controller na batrị n'usoro" },
    { id: "O5", condition: "Mgbe ị na-ere onye ahịa ngwa", action: "ide ọnụahịa n'eziokwu nwere ọnụahịa ego nkịtị, usoro ịkwụ nwayọọ nwayọọ ọ bụla, ngụkọta ego na warranti", standard: "ka onye ahịa nwee ike ikwu ngụkọta ọ ga-akwụ tupu ọ bịanye aka" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu ngwa ike anyanwụ n'ụlọ si arụ ọrụ",
      lessons: [
        {
          title: "Akụkụ nke ngwa ike anyanwụ n'ụlọ, na ịdị mma ya",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kpọọ aha akụkụ ngwa ike anyanwụ n'ụlọ ma lelee ma e nyere ngwa asambodo.",
          text: [
            "Ngwa ike anyanwụ n'ụlọ na-agbanwe ìhè anyanwụ ka ọ bụrụ eletrịkị maka ụlọ ma ọ bụ obere ụlọ ahịa. O nwere akụkụ ise bụ isi. Panel anyanwụ na-eme eletrịkị site n'ìhè anyanwụ n'ehihie. Charge controller na-eziga eletrịkị ahụ n'ime batrị n'enweghị nsogbu ma na-egbochi ya ịchaja karịa oke ma ọ bụ ịgwụ nke ukwuu. Batrị na-echekwa ike maka abalị. Ọkụ na ngwa ụlọ (loads) na-eji ike ahụ. Ngwa ụfọdụ nwere inverter, nke na-agbanwe ike DC nke batrị ka ọ bụrụ ike AC maka soket nkịtị.",
            "Ọtụtụ obere ngwa na-abịa dị ka otu igbe nwere controller na batrị n'ime ya, ya na ọkụ DC, ebe ịchaja ekwentị, na mgbe ụfọdụ redio, TV ma ọ bụ fan DC. Ngwa ụlọ DC na-eji ike pere mpe karịa ngwa AC na inverter, ya mere ha na-eme ka obere ngwa rụọ ọrụ ogologo oge.",
            "Ngwa adịgboroja na ngwa na-adịghị mma juru ebe niile. Tupu i ree ma ọ bụ wụnye ngwa, lelee ma VeraSol nyere ya asambodo. VeraSol bụ mmemme ịdị mma nke onwe ya sitere na Lighting Global. Ebe nchekwa ya n'efu n'ịntanetị (data.verasol.org) na-edepụta ngwa ike anyanwụ e nyere asambodo. E nwalela ngwa e nyere asambodo maka otu o si arụ ọrụ n'ezie, otu o si adịgide, na ma ihe a na-ekwu maka ya bụ eziokwu. Ọ bụrụ na ngwa adịghị na ndepụta ahụ, rịọ ka e nye gị warranti ya n'akwụkwọ na nsonaazụ nnwale ya.",
            "Ihe atụ: Fatou na Kaolack, Senegal, na-atụnyere ngwa abụọ nha ha hà. Otu dị n'ebe nchekwa VeraSol ma nwee warranti e dere ede; nke ọzọ enweghị akara, enweghịkwa warranti. Ọ na-ahọrọ ngwa e nyere asambodo maka ndị ahịa ya."
          ],
          words: [["Panel anyanwụ (solar panel)", "mbadamba dị larịị na-eme eletrịkị site n'ìhè anyanwụ."], ["Charge controller", "obere igbe na-achaja batrị n'enweghị nsogbu ma na-echebe ya."], ["Inverter", "ngwa na-agbanwe ike DC nke batrị ka ọ bụrụ ike AC maka soket nkịtị."], ["DC na AC", "DC bụ ike na-agụ otu ụzọ site na batrị na panel; AC bụ ike si na grid na ọtụtụ soket nkịtị."]],
          slides: [
            { title: "Akụkụ ise bụ isi", bullets: ["Panel: na-eme ike site n'ìhè anyanwụ", "Charge controller: na-achaja batrị n'enweghị nsogbu", "Batrị: na-echekwa ike maka abalị; loads na-eji ya"] },
            { title: "Inverter na ngwa ụlọ DC", bullets: ["Inverter: DC nke batrị gaa AC maka soket nkịtị", "Ọkụ, redio, TV, fan DC na-eji ike pere mpe", "Ọtụtụ ngwa na-abịa dị ka otu igbe"] },
            { title: "Lelee ịdị mma: VeraSol", bullets: ["Mmemme ịdị mma nke onwe ya (sitere na Lighting Global)", "Ebe nchekwa n'efu: data.verasol.org", "Ọ dịghị na ndepụta? Rịọ warranti e dere ede na nsonaazụ nnwale"] }
          ],
          sources: [VERASOL, VERASOL_DB],
          tryIt: "Lee otu ngwa ike anyanwụ (n'ụlọ ahịa, n'ụlọ, ma ọ bụ foto n'ịntanetị) ma dee aha akụkụ ọ bụla. Ọ bụrụ na i nwere data, chọọ otu ngwa n'ebe nchekwa VeraSol ma dee ma ọ dị na ndepụta ahụ.",
          youCanNow: "ịkpọ aha akụkụ ọ bụla nke ngwa ike anyanwụ n'ụlọ ma lelee ma e nyere ngwa asambodo.",
          quickCheck: [
            { objective: "O1", q: "Kedu akụkụ na-egbochi batrị ịchaja karịa oke?", options: ["Bọlbụ ọkụ", "Okpokoro panel", "Charge controller", "Waya chaja ekwentị"], answer: 2, why: "Charge controller na-achaja batrị n'enweghị nsogbu ma na-echebe ya pụọ n'ịchaja karịa oke na ịgwụ nke ukwuu." },
            { objective: "O1", q: "Ebee ka ị nwere ike ịlele ma e nyere ngwa ike anyanwụ asambodo?", options: ["Ebe nchekwa ngwaahịa VeraSol", "Agba igbe ya", "Naanị okwu onye na-ere ya", "Ịdị arọ panel ahụ"], answer: 0, why: "Ebe nchekwa VeraSol n'efu na-edepụta ngwa e nwalere n'onwe ya ma nye asambodo." }
          ]
        },
        {
          title: "Ịtụ nha ngwa site n'ihe ezinụlọ na-eji",
          objectives: ["O2"],
          minutes: 6,
          goal: "Gụpụta ike ezinụlọ chọrọ kwa ụbọchị ma họrọ nha panel na batrị.",
          text: [
            "Tụọ nha ngwa site n'ihe ezinụlọ ahụ chọrọ n'ezie ka ọ kwụọ ọkụ. Maka ihe ọ bụla, mụbaa ike ya na watts (W) site n'awa a na-eji ya kwa ụbọchị. Nke ahụ na-enye watt-hours (Wh) kwa ụbọchị. Gbakọọ ha niile.",
            "Ihe atụ (ọnụọgụ bụ naanị ihe atụ): bọlbụ LED 3 nke 3 W maka awa 5 = 45 Wh. Ịchaja ekwentị 2, ihe dị ka 10 Wh nke ọ bụla = 20 Wh. Redio, 5 W maka awa 4 = 20 Wh. TV DC, 20 W maka awa 3 = 60 Wh. Ngụkọta: 145 Wh kwa ụbọchị. Tinye ihe dị ka 30% maka ike na-efu efu na waya, controller na batrị: ihe dị ka 190 Wh kwa ụbọchị.",
            "Panel: kee ike a chọrọ kwa ụbọchị site n'awa anyanwụ siri ike (peak sun hours) ebe onye ahịa bi (awa anyanwụ siri ike zuru oke n'otu ụbọchị). Ọ bụrụ na e nwere ihe dị ka awa anyanwụ siri ike 5: 190 / 5 = 38 W. Mee ka ọ rịgoro na nha panel na-esote, dịka ọmụmaatụ panel 50 W. Awa anyanwụ siri ike na-agbanwe dịka ebe na oge afọ si dị; lelee data obodo ma ọ bụ jụọ onye na-awụnye nwere ahụmịhe, ma tụọ nha maka ọnwa igwe ojii kachasị.",
            "Batrị: ọ ga-ejide opekata mpe ike a chọrọ maka otu abalị. A naghị ekwesị ịgwụcha ọtụtụ batrị kpamkpam. A na-ejikarị batrị lithium ruo ihe dị ka 80%; nke lead-acid ruo ihe dị ka 50% (lelee ọnụọgụ onye mere ya). Maka 190 Wh na lithium: 190 / 0.8 = ihe dị ka 238 Wh. Maka batrị 12 V, kee ya site na 12: ihe dị ka 20 Ah. Tinyekwuo ma ọ bụrụ na ezinụlọ ahụ chọrọ ike n'ụbọchị igwe ojii."
          ],
          steps: ["Depụta ihe ọ bụla, watts ya na awa ya kwa ụbọchị.", "Mụbaa watts site n'awa maka nke ọ bụla, ma gbakọọ: Wh kwa ụbọchị.", "Tinye ihe dị ka 30% maka ike na-efu efu.", "Panel: ike a chọrọ kwa ụbọchị / awa anyanwụ siri ike, wee mee ka ọ rịgoro.", "Batrị: ike a chọrọ kwa ụbọchị / akụkụ a pụrụ iji (dịka 0.8), wee / 12 maka amp-hours na 12 V."],
          words: [["Watt (W)", "ike ole ihe na-eji n'otu oge."], ["Watt-hour (Wh)", "ike e jiri: watts e mụbara site n'awa."], ["Awa anyanwụ siri ike (peak sun hours)", "ọnụọgụ awa anyanwụ siri ike zuru oke n'otu ụbọchị n'otu ebe."], ["Amp-hour (Ah)", "chaja ole batrị na-ejide; Wh = Ah x volts."]],
          slides: [
            { title: "Ike a chọrọ kwa ụbọchị", bullets: ["Watts x awa = Wh maka ihe ọ bụla", "Gbakọọ ha niile", "Ihe atụ: 145 Wh; +30% ike na-efu efu = ihe dị ka 190 Wh"] },
            { title: "Nha panel", bullets: ["Wh kwa ụbọchị / awa anyanwụ siri ike", "Ihe atụ: 190 / 5 = 38 W: họrọ 50 W", "Tụọ nha maka ọnwa igwe ojii kachasị"] },
            { title: "Nha batrị", bullets: ["Agwụchala ya kpamkpam: lithium ihe dị ka 80%, lead-acid ihe dị ka 50%", "Ihe atụ: 190 / 0.8 = ihe dị ka 238 Wh", "Na 12 V: 238 / 12 = ihe dị ka 20 Ah"] },
            { title: "Ọnụọgụ bụ ihe atụ", bullets: ["Lelee watts nke ngwa ọ bụla n'akara ya", "Lelee awa anyanwụ obodo gị", "Lelee ọnụọgụ onye mere batrị ahụ"] }
          ],
          tryIt: "Mee tebụl ike maka ụlọ gị ma ọ bụ nke onye agbata obi: ihe ọ bụla, watts, awa, Wh. Gbakọọ ngụkọta, tinye 30%, ma gụpụta nha panel na batrị site n'iji nzọụkwụ ndị ahụ.",
          youCanNow: "ịgụpụta ike ezinụlọ chọrọ kwa ụbọchị ma họrọ nha panel na batrị maka ya.",
          quickCheck: [
            { objective: "O2", q: "A na-eji bọlbụ 4 W awa 6 kwa ụbọchị. Watt-hours ole ka nke ahụ bụ?", options: ["10 Wh", "2 Wh", "46 Wh", "24 Wh"], answer: 3, why: "4 W x awa 6 = 24 Wh." },
            { objective: "O2", q: "Ezinụlọ chọrọ 200 Wh kwa ụbọchị, e nwekwara awa anyanwụ siri ike 5. Kedu nha panel kacha nta site na mgbakọ ahụ?", options: ["40 W", "1,000 W", "5 W", "200 W"], answer: 0, why: "200 / 5 = 40 W; wee mee ka ọ rịgoro na nha panel na-esote dị." }
          ]
        },
        {
          title: "Ịwụnye obere ngwa n'enweghị nsogbu",
          objectives: ["O3"],
          minutes: 6,
          goal: "Wụnye obere ngwa ike anyanwụ DC n'ụlọ site n'ịgbaso ndepụta nchekwa.",
          text: [
            "Panel: tinye ya ebe ọ ga-enweta anyanwụ zuru oke ọtụtụ oge n'ụbọchị, n'enweghị ndò osisi, mgbidi ma ọ bụ waya. Chee ya ihu n'akụkụ equator: na mba ndị dị n'ugwu equator, chee ya ihu na ndịda (south); na ndịda equator, chee ya ihu n'ugwu (north). Mee ka ọ dabere ntakịrị, ka mmiri ozuzo kwọpụ uzuzu. Kee ya ike ka ifufe ghara iburu ya. N'elu ụlọ, jiri ubube dị mma, mee ka onye inyeaka jide ya, ọ dịkwaghị mgbe ị ga-arụ ọrụ n'oge mmiri ozuzo ma ọ bụ ifufe.",
            "Batrị: debe ya n'ime ụlọ, ebe kpọrọ nkụ, nwere ndò, ikuku na-abata, n'elu ala, ebe ụmụaka na-agaghị eru ya, tere aka n'ọkụ isi nri. Batrị lead-acid na-ewepụta gas nwere ike ịgba ọkụ mgbe a na-achaja ha, ha nwekwara asịd n'ime: mee ka ikuku na-abata, yiri ihe nchekwa anya na uwe aka, ma mee ka ọkụ tere aka. Short circuit n'etiti terminal abụọ nke batrị nwere ike ime ka waya gbazee ma kpata ọkụ.",
            "Waya: jiri nha waya onye mere ngwa ahụ kwuru, mee ka uhie gaa na positive (+) na oji gaa na negative (-), ma tinye fiuz ma ọ bụ breaker onye mere ya nyere, nso batrị. Maka ọtụtụ ngwa nwere controller dị iche, buru ụzọ jikọọ batrị na controller, wee panel, wee loads; gbaso akwụkwọ ntụziaka onye mere ya ma ọ bụrụ na ọ kwuru ihe ọzọ. Kee waya ike ka a ghara ịdọpụ ha ma ọ bụ taa ha.",
            "Oke: ihe ọmụmụ a bụ naanị maka obere ngwa DC. Ejikọla ngwa ike anyanwụ na grid ma ọ bụ na waya eletrịkị ụlọ mgbe ọ bụla, emeghekwala inverter mgbe ọ bụla. Ọrụ ndị ahụ chọrọ onye eletrịkị nwere ikikere. Mba ụfọdụ na-enye ndị ọrụ ike anyanwụ ikikere; na Kenya, jụọ EPRA, n'ebe ndị ọzọ, jụọ ndị na-achịkwa ike na mba gị."
          ],
          steps: ["Họrọ ebe anyanwụ na-acha, enweghị ndò; chee panel ihu n'akụkụ equator ma mee ka ọ dabere ntakịrị; kee ya ike.", "Rụọ ọrụ n'elu naanị na ubube dị mma na onye inyeaka; ọ bụghị n'oge mmiri ozuzo ma ọ bụ ifufe.", "Debe batrị n'ime ụlọ: ebe kpọrọ nkụ, nwere ndò, ikuku na-abata, n'elu ala, tere aka n'ụmụaka na ọkụ.", "Jiri waya kwesịrị ekwesị, uhie gaa +, oji gaa -, ma tinye fiuz nso batrị.", "Buru ụzọ jikọọ batrị na controller, wee panel, wee loads, ma ọ bụrụ na akwụkwọ ntụziaka ekwughị ihe ọzọ.", "Ọ dịghị njikọ na grid ma ọ bụ waya eletrịkị ụlọ; ọ dịghị imeghe inverter."],
          words: [["Polarity", "waya nke bụ positive (+) na nke bụ negative (-). Ime ya n'ụzọ ezighi ezi nwere ike imebi akụkụ ndị ahụ."], ["Fiuz (fuse)", "obere akụkụ nchekwa na-agbaji sekit ma ọ bụrụ na eletrịkị karịrị oke na-agafe."], ["Ikuku na-abata (ventilated)", "ebe ikuku ọhụrụ na-agafe, ka gas ghara ịkọkọta."]],
          slides: [
            { title: "Ebe panel ga-anọ", bullets: ["Anyanwụ zuru oke, enweghị ndò", "Chee equator ihu: south ma ọ bụrụ n'ugwu ya, north ma ọ bụrụ na ndịda ya", "Dabere ntakịrị; kee ya ike; ubube dị mma na onye inyeaka"] },
            { title: "Ebe batrị ga-anọ", bullets: ["N'ime ụlọ: kpọrọ nkụ, nwere ndò, ikuku na-abata, n'elu ala", "Tere aka n'ụmụaka na ọkụ isi nri", "Lead-acid: asịd na gas; ihe nchekwa anya, uwe aka, enweghị ọkụ"] },
            { title: "Waya", bullets: ["Waya kwesịrị ekwesị; uhie +, oji -", "Fiuz nso batrị", "Batrị na controller mbụ, wee panel, wee loads (ma ọ bụ dịka akwụkwọ ntụziaka si kwuo)"] },
            { title: "Oke gị", bullets: ["Naanị obere ngwa DC", "Ọ dịghị mgbe grid ma ọ bụ waya eletrịkị ụlọ; ọ dịghị mgbe imeghe inverter", "Ikikere: Kenya EPRA; n'ebe ndị ọzọ ndị na-achịkwa ike na mba gị"] }
          ],
          sources: [EPRA, NFPA],
          tryIt: "Dee ndepụta nchekwa gị maka ịwụnye ngwa nwere opekata mpe ahịrị asatọ site na nkuzi a. Ọ bụrụ na ị nwere ike, gagharịa n'otu ụlọ ma họrọ ebe kacha mma maka panel na batrị, ma dee ihe kpatara ya.",
          youCanNow: "ịwụnye obere ngwa ike anyanwụ DC n'ụlọ n'enweghị nsogbu, na-agbaso ndepụta, ma mara ọrụ ndị ị ga-ahapụrụ onye eletrịkị nwere ikikere.",
          quickCheck: [
            { objective: "O3", q: "Ụlọ onye ahịa dị na Nairobi, nke dị ntakịrị na ndịda equator. Olee akụkụ panel ga-eche ihu?", options: ["South (ndịda)", "Kpọmkwem n'ala", "North (ugwu), n'akụkụ equator", "N'ime ndò"], answer: 2, why: "Panel na-eche equator ihu; na ndịda ya, nke ahụ pụtara iche north ihu." },
            { objective: "O3", q: "Onye ahịa rịọrọ gị ka i jikọọ ngwa ike anyanwụ ya na waya grid dị n'ụlọ ya. Gịnị ka ị ga-eme?", options: ["Mee ya ngwa ngwa", "Jụ: ọrụ grid na waya eletrịkị ụlọ chọrọ onye eletrịkị nwere ikikere", "Mee ya n'abalị", "Buru ụzọ meghee inverter"], answer: 1, why: "Ihe ọmụmụ a bụ naanị maka obere ngwa DC; ọrụ grid na waya eletrịkị ụlọ chọrọ onye eletrịkị nwere ikikere." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu ngwa ike anyanwụ n'ụlọ si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Gịnị ka inverter na-eme?", options: ["Na-echekwa ike", "Na-eme ike site n'ìhè anyanwụ", "Na-atụ ìhè anyanwụ", "Na-agbanwe ike DC nke batrị ka ọ bụrụ ike AC maka soket nkịtị"], answer: 3, why: "Inverter na-agbanwe DC ka ọ bụrụ AC." },
          { objective: "O1", q: "Gịnị mere ị ga-eji họrọ ngwa dị n'ebe nchekwa VeraSol?", options: ["E nwalela ya n'onwe ya maka otu o si arụ ọrụ, otu o si adịgide, na ma ihe a na-ekwu maka ya bụ eziokwu", "Ọ na-adị ọnụ ala karịa mgbe niile", "Ọ dịghị mgbe ọ chọrọ nlekọta", "Ọ na-arụ ọrụ n'enweghị anyanwụ"], answer: 0, why: "VeraSol na-enye ngwa asambodo mgbe e nwalechara ha n'onwe ya." },
          { objective: "O2", q: "Ezinụlọ chọrọ 120 Wh kwa ụbọchị tupu ike na-efu efu. Ihe dị ka ole ma e tinye 30%?", options: ["90 Wh", "150 Wh", "156 Wh", "360 Wh"], answer: 2, why: "120 x 1.3 = 156 Wh." },
          { objective: "O2", q: "Gịnị mere a na-agaghị agwụcha batrị lithium kpamkpam kwa abalị?", options: ["Ọ na-eme ka ọkụ na-enwu karịa", "Ọ bụ naanị maka ehihie", "Ọ megidere iwu", "Ịgwụcha ya kpamkpam na-eme ka ndụ ya dị mkpụmkpụ, ya mere ị na-atụ nha maka iji ihe dị ka 80%"], answer: 3, why: "Idebe ụfọdụ chaja na batrị na-echebe ya, ya mere ịtụ nha na-enye ohere maka akụkụ a pụrụ iji." },
          { objective: "O3", q: "Ebee ka fiuz kwesịrị ịnọ?", options: ["Nso batrị, dịka onye mere ya si kwuo", "N'elu ụlọ", "N'ime bọlbụ ọkụ", "Ebe ọ bụla, ma ọ bụ ọ dịghị ebe"], answer: 0, why: "Fiuz nso batrị na-echebe waya pụọ na short circuit na batrị." }
        ]
      }
    },
    {
      name: "Isi 2: Idebe ya ka ọ na-arụ ọrụ na ịgba azụmahịa ike anyanwụ",
      lessons: [
        {
          title: "Nlekọta na ịchọpụta nsogbu dị mfe",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mee nlekọta oge niile ma chọpụta nsogbu dị mfe otu nzọụkwụ n'otu oge.",
          text: [
            "Ngwa a na-elekọta nke ọma na-adị ọtụtụ afọ. Kụziere onye ahịa: hichaa panel na mmiri na ákwà dị nro mgbe uzuzu kpuchiri ya, n'isi ụtụtụ ma ọ bụ na mgbede mgbe ọ dị jụụ (ọ bụghị mgbe ọ bụla na ncha na-ahapụ ihe n'elu ya, ọ dịkwaghị mgbe ị ga-eguzo n'elu ya). Bepụ ndò ọhụrụ sitere n'osisi. Debe batrị ka ọ dị ọcha ma kpọọ nkụ. Gbanyụọ loads na-adịghị mkpa.",
            "Mgbe onye ahịa kwuru \"ọkụ na-anwụ n'oge\", lelee n'usoro: (1) Panel: uzuzu ọ kpuchiri ya ma ọ bụ ndò ọ dị ugbu a? (2) Njikọ: waya ma ọ bụ plọg ọ tọrọ atọ, gbajiri agbaji ma ọ bụ rere ure? (3) Controller: gịnị ka ọkụ ya ma ọ bụ ihuenyo ya na-egosi? Gụọ akwụkwọ ntụziaka maka ihe ha pụtara. (4) Batrị: ọ dị ochie, zara aza, na-ekpo ọkụ ma ọ bụ na-agba mmiri? (5) Loads: ezinụlọ ahụ ọ tinyere TV ka ibu ma ọ bụ bọlbụ karịa ihe e tụrụ nha ngwa ahụ maka ya?",
            "Ọtụtụ nsogbu bụ uzuzu, ndò, plọg tọrọ atọ ma ọ bụ loads agbakwunyere. A ga-agbanwe batrị zara aza, na-ekpo ọkụ nke ukwuu ma ọ bụ na-agba mmiri; achajala ya ma ọ bụ meghee ya mgbe ọ bụla. Batrị ochie bụ e-waste: akpọla ha ọkụ, elila ha ma ọ bụ tụfuo ha mgbe ọ bụla, nye ha onye nchịkọta a kwadoro ma ọ bụ mmemme nnabata (take-back) nke ụlọ ọrụ ngwa ahụ.",
            "Ihe atụ: Chinedu na Kano nwetara oku na ọkụ na-anwụ tupu elekere 8 nke abalị. Ọ chọpụtara alaka osisi ọhụrụ na-eme ndò n'elu panel na TV nke abụọ e tinyere. O bepụrụ alaka ahụ site n'ikike onye nwe ya ma kọwaa nha ngwa ahụ; ezinụlọ ahụ kpebiri itinye panel nke abụọ."
          ],
          steps: ["Lelee panel: ọ dị ọcha ma enweghị ndò?", "Lelee njikọ: ọ tọrọ atọ, gbajiri agbaji ma ọ bụ rere ure?", "Lelee ọkụ ma ọ bụ ihuenyo controller tụnyere ya na akwụkwọ ntụziaka.", "Lelee batrị: ọ dị ochie, zara aza, na-ekpo ọkụ ma ọ bụ na-agba mmiri?", "Lelee loads: ihe karịrị ma ọ bụ ka ibu karịa ihe e zubere?"],
          words: [["Nrere ure (corrosion)", "ihe ọcha ma ọ bụ akwụkwọ ndụ na-ekpuchi njikọ igwe, na-egbochi ike ịgafe nke ọma."], ["Mmemme nnabata (take-back scheme)", "mmemme ụlọ ọrụ iji chịkọta ngwaahịa ochie ya ka e megharịa ha n'enweghị nsogbu."]],
          slides: [
            { title: "Nlekọta oge niile", bullets: ["Hichaa panel na mmiri na ákwà dị nro mgbe ọ dị jụụ", "Bepụ ndò ọhụrụ; debe batrị ka ọ dị ọcha ma kpọọ nkụ", "Gbanyụọ ihe na-adịghị mkpa"] },
            { title: "Ịchọpụta nsogbu n'usoro", bullets: ["1. Panel: uzuzu ma ọ bụ ndò?", "2. Njikọ: tọrọ atọ ma ọ bụ rere ure?", "3. Ọkụ controller; 4. Batrị; 5. Loads agbakwunyere"] },
            { title: "Ịdọ aka na ntị maka batrị", bullets: ["Zara aza, na-ekpo ọkụ nke ukwuu ma ọ bụ na-agba mmiri: gbanwee ya", "Achajala ma ọ bụ meghee batrị mebiri emebi mgbe ọ bụla", "Batrị ochie: onye nchịkọta a kwadoro ma ọ bụ take-back"] }
          ],
          sources: [NFPA, WHO_EWASTE],
          tryIt: "Dee kaadị nlekọta maka onye ahịa (ahịrị anọ nke nlekọta oge niile) na ndepụta nzọụkwụ ise maka ịchọpụta nsogbu nke ị ga-eburu gaa n'oku ọ bụla.",
          youCanNow: "ịkụziri onye ahịa otu esi elekọta ngwa ya na ịchọpụta nsogbu dị mfe n'usoro ziri ezi.",
          quickCheck: [
            { objective: "O4", q: "Ọkụ na-anwụ n'oge. Gịnị bụ ihe mbụ ị ga-elele?", options: ["Agba batrị", "Ma uzuzu ọ kpuchiri panel ma ọ bụ ndò ọ dị n'elu ya", "Ekwentị onye ahịa", "Ọnụahịa ngwa ahụ"], answer: 1, why: "Malite na panel: uzuzu na ndò ọhụrụ bụ ihe na-akpatakarị nsogbu, ha dịkwa mfe idozi." },
            { objective: "O4", q: "Ị chọtara batrị zara aza ma na-ekpo ọkụ. Gịnị ka ị ga-eme?", options: ["Gbanwee ya; achajala ya ma ọ bụ meghee ya", "Chaja ya ogologo oge", "Meghee ya ka ị lee ihe dị n'ime", "Kpọọ ya ọkụ"], answer: 0, why: "Batrị zara aza, na-ekpo ọkụ dị egwu, a ga-agbanwekwa ya n'enweghị nsogbu." }
          ]
        },
        {
          title: "Ire n'eziokwu: ego nkịtị na ịkwụ nwayọọ nwayọọ",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọwaa ọnụahịa ego nkịtị na usoro ịkwụ nwayọọ nwayọọ ka onye ahịa nwee ike ikwu ngụkọta ọ ga-akwụ.",
          text: [
            "Ọtụtụ ezinụlọ enweghị ike ịkwụ ọnụahịa zuru ezu n'otu mgbe, ya mere ọtụtụ ụlọ ọrụ na-ere ngwa site n'ịkwụ nwayọọ nwayọọ (pay-as-you-go, PAYGo). Onye ahịa na-akwụ ego mbido (deposit), wee na-akwụ obere ego, ọtụtụ mgbe kwa ụbọchị, kwa izu ma ọ bụ kwa ọnwa site na mobile money. Ọ bụrụ na ịkwụ ụgwọ akwụsị, ngwa ahụ na-akpọchi ruo mgbe ọ kwụrụ ọzọ. Mgbe ịkwụ ụgwọ ikpeazụ gachara, ngwa ahụ bụ nke onye ahịa.",
            "PAYGo na-enyere ezinụlọ aka inweta ike anyanwụ ngwa ngwa, mana ngụkọta ya na-akarịkarị ọnụahịa ego nkịtị. Onye na-ere n'eziokwu na-egosi ha abụọ. Ihe atụ (ọnụọgụ bụ naanị ihe atụ): ọnụahịa ego nkịtị KES 20,000. PAYGo: ego mbido KES 2,000, wee KES 1,500 kwa ọnwa maka ọnwa 18: 2,000 + (1,500 x 18) = KES 29,000 n'ozuzu. Onye ahịa kwesịrị inwe ike ikwu ngụkọta ahụ tupu ọ bịanye aka.",
            "GOGLA, otu ụlọ ọrụ ike anyanwụ na-adịghị n'eletrịkị gọọmentị, nwere iwu nchekwa ndị ahịa wuru n'ire ahịa na ọnụahịa n'ụzọ ziri ezi (ereghị karịa ihe ezinụlọ nwere ike ịkwụ), ime ihe n'ìhè (ozi doro anya, nke eziokwu), imeso mmadụ nke ọma na nkwanye ugwu, ọrụ ọma na ịdị mma ngwaahịa. Gbasoo ya ma ụlọ ọrụ gị abịanyela aka ma ọ bụ na ọ bịanyebeghị.",
            "Ekwela nkwa karịa ihe ngwa ahụ nwere ike ịkwụ ọkụ mgbe ọ bụla. Ajụla onye ahịa PIN mobile money ya mgbe ọ bụla; ịkwụ ụgwọ na-aga na nọmba gọọmentị ma ọ bụ till nke ụlọ ọrụ ahụ, ezi ụlọ ọrụ anaghịkwa arịọ PIN mgbe ọ bụla."
          ],
          steps: ["Gosi ọnụahịa ego nkịtị.", "Gosi ego mbido PAYGo, nha ịkwụ ụgwọ, ugboro ole na ruo ogologo oge ole.", "Gụpụta ngụkọta ego PAYGo gị na onye ahịa.", "Kọwaa ihe na-eme ma a kwụghị ụgwọ otu oge, na warranti.", "Lelee na onye ahịa nwere ike ịkwụ ụgwọ ndị ahụ; ajụla PIN mgbe ọ bụla."],
          words: [["PAYGo (ịkwụ nwayọọ nwayọọ)", "ịzụta ngwa site n'ego mbido na obere ịkwụ ụgwọ; ọ na-akpọchi ma ịkwụ ụgwọ akwụsị, ọ bụkwa nke gị mgbe nke ikpeazụ gachara."], ["Ego mbido (deposit)", "ịkwụ ụgwọ mbụ tupu onye ahịa ewere ngwa ahụ."], ["Nchekwa ndị ahịa", "iwu na omume na-emeso ndị ahịa nke ọma na n'eziokwu."]],
          slides: [
            { title: "Otu PAYGo si arụ ọrụ", bullets: ["Ego mbido, wee obere ịkwụ ụgwọ site na mobile money", "Ngwa na-akpọchi ma ịkwụ ụgwọ akwụsị", "Ọ bụ nke onye ahịa mgbe ịkwụ ụgwọ ikpeazụ gachara"] },
            { title: "Gosi ngụkọta", bullets: ["Ngụkọta PAYGo na-akarịkarị ego nkịtị", "Ihe atụ: 2,000 + 1,500 x 18 = KES 29,000 tụnyere KES 20,000 ego nkịtị", "Onye ahịa nwere ike ikwu ngụkọta tupu ọ bịanye aka"] },
            { title: "Ree n'ụzọ ziri ezi (iwu GOGLA)", bullets: ["Ire n'ụzọ ziri ezi: naanị ihe ha nwere ike ịkwụ", "Ime ihe n'ìhè; imeso mmadụ nke ọma na nkwanye ugwu", "Ọrụ ọma na ịdị mma"] },
            { title: "Ọ dịghị mgbe", bullets: ["Ikwe nkwa karịa ihe ngwa ahụ nwere ike ịkwụ ọkụ", "Ịrịọ PIN mobile money"] }
          ],
          sources: [GOGLA_CP],
          tryIt: "Maka ngwa ị maara (ma ọ bụ ihe atụ ahụ), dee ọnụahịa ego nkịtị na usoro PAYGo n'akụkụ ibe ha, ma gụpụta ngụkọta ego PAYGo. Nwalee ịkọwa ya n'olu dị elu n'ime ihe na-erughị otu nkeji.",
          youCanNow: "ịkọwa ọnụahịa ego nkịtị na nke ịkwụ nwayọọ nwayọọ n'eziokwu ka onye ahịa mara ngụkọta tupu ọ bịanye aka.",
          quickCheck: [
            { objective: "O5", q: "Ego mbido PAYGo XOF 10,000, wee XOF 5,000 kwa ọnwa maka ọnwa 12. Gịnị bụ ngụkọta?", options: ["XOF 15,000", "XOF 60,000", "XOF 50,000", "XOF 70,000"], answer: 3, why: "10,000 + (5,000 x 12) = 70,000." },
            { objective: "O5", q: "Kedu nke bụ ire n'eziokwu?", options: ["Izo ngụkọta ego PAYGo", "Ikwe nkwa na ngwa ahụ ga-akwụ friji ọkụ mgbe ọ nweghị ike", "Igosi ọnụahịa ego nkịtị na ngụkọta ego PAYGo n'akụkụ ibe ha", "Ire ezinụlọ ihe karịrị ihe ha nwere ike ịkwụ"], answer: 2, why: "Ime ihe n'ìhè pụtara igosi ọnụahịa abụọ ahụ nke ọma." }
          ]
        },
        {
          title: "Ide ọnụahịa na ịgba azụmahịa ike anyanwụ gị",
          objectives: ["O5", "O2"],
          minutes: 5,
          goal: "Dee ọnụahịa zuru ezu, nke eziokwu, maka otu ezinụlọ.",
          text: [
            "Ọnụahịa dị mma na-enweta ntụkwasị obi. Ọ na-egosi onye ahịa ihe ha rịọrọ ka ọ kwụọ ọkụ, tebụl ike, ngwa i họrọ na ihe kpatara ya, ọnụahịa, usoro ịkwụ ụgwọ na warranti. O nwekwara aha gị na nọmba ekwentị gị, na ụbọchị.",
            "Ọnụahịa nke gị maka ịwụnye ngwa ga-ekpuchi ngwa ahụ, waya na ihe ndị ọzọ e ji arụ ya, njem ruo n'ụlọ ahụ, oge gị, na uru. Ihe atụ (ọnụọgụ bụ naanị ihe atụ): ngwa MAD 2,500, waya na ihe ndị ọzọ MAD 300, njem MAD 150, ụgwọ ọrụ MAD 400: ọnụ ego MAD 3,350. Tinye uru MAD 400: MAD 3,750.",
            "Mgbe i wụnyechara ya, nye onye ahịa kaadị: nzọụkwụ nlekọta, ihe ọkụ controller pụtara, warranti, na nọmba gị maka nsogbu. Laghachi mgbe otu ọnwa gachara ilele ya. Ndị ahịa nwere obi ụtọ na-ezite ndị agbata obi ha; otu a ka azụmahịa ike anyanwụ si eto n'ime obodo site na Kitui ruo Kaolack.",
            "Debe ndekọ dị mfe nke ọrụ ọ bụla: onye ahịa, ngwa ahụ na serial number ya, ụbọchị, ọnụahịa na nlọghachi ọ bụla. Ọ na-enyere gị aka ịkwanyere warranti ugwu ma hụ ngwa ndị na-emebi."
          ],
          steps: ["Dee tebụl ike na otu i si tụọ nha.", "Kpọọ aha ngwa ahụ, na ma e nyere ya asambodo ma ọ bụ o nwere warranti e dere ede.", "Tinye ndepụta nchekwa gị.", "Gosi ọnụahịa ego nkịtị na usoro PAYGo ọ bụla na ngụkọta.", "Tinye kaadị nlekọta na warranti, nwere aha gị, nọmba gị na ụbọchị."],
          words: [["Ọnụahịa (quote)", "onyinye e dere ede na-egosi ihe ị ga-enye na ihe ị ga-eme, na ọnụahịa ya."], ["Serial number", "nọmba pụrụ iche dị na ngwaahịa, a na-eji ya maka warranti ya."], ["Nlọghachi (call-back)", "ịlaghachi ọzọ iji dozie nsogbu mgbe e wụnyechara ngwa."]],
          slides: [
            { title: "Ihe ọnụahịa na-egosi", bullets: ["Ihe ha chọrọ ka ọ kwụọ ọkụ: tebụl ike", "Ngwa ahụ na ihe kpatara ya; asambodo ma ọ bụ warranti", "Ọnụahịa, usoro, warranti; aha gị, nọmba gị, ụbọchị"] },
            { title: "Ọnụahịa ịwụnye gị", bullets: ["Ngwa + waya + njem + ụgwọ ọrụ + uru", "Ihe atụ: ọnụ ego MAD 3,350 + MAD 400 = MAD 3,750", "Ọnụọgụ bụ naanị ihe atụ"] },
            { title: "Mgbe ọrụ gachara", bullets: ["Kaadị nlekọta na warranti", "Laghachi mgbe otu ọnwa gachara", "Ndekọ: onye ahịa, ngwa, serial number, ụbọchị, ọnụahịa"] }
          ],
          tryIt: "Dee ọnụahịa gị zuru ezu maka otu ezinụlọ, dịka a kọwara n'ọrụ ikpeazụ. Gụọrọ ya otu enyi gị ma rịọ ya ka ọ gwa gị ngụkọta ọ ga-akwụ.",
          youCanNow: "ide ọnụahịa zuru ezu, nke eziokwu, maka ngwa ike anyanwụ n'ụlọ ma debe ndekọ ọma nke ọrụ ọ bụla.",
          quickCheck: [
            { objective: "O5", q: "Kedu ihe kwesịrị ịdị n'ọnụahịa ọ bụla?", options: ["PIN mobile money onye ahịa", "Ngụkọta onye ahịa ga-akwụ, na warranti", "Nkwa ike n'efu ruo mgbe ebighị ebi", "Naanị ọnụahịa ndị ọzọ na-ere ihe dị otu ahụ"], answer: 1, why: "Ngụkọta ego na warranti na-enye onye ahịa ohere ikpebi n'ụzọ ziri ezi." },
            { objective: "O2", q: "Gịnị mere ị ga-eji tinye tebụl ike n'ọnụahịa?", options: ["Ọ na-egosi otu i si tụọ nha ngwa ahụ dịka ihe ezinụlọ na-eji n'ezie", "Ka ọnụahịa ahụ dị ogologo", "Ndị ahịa na-enwe mmasị na ọnụọgụ", "Ọ dịghị mkpa"], answer: 0, why: "Tebụl ahụ na-egosi na ngwa ahụ dabara n'ihe ezinụlọ ahụ ga-eji ya kwụọ ọkụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Idebe ya ka ọ na-arụ ọrụ na ire ya",
        questions: [
          { objective: "O4", q: "Kedu otu onye ahịa kwesịrị isi hichaa panel uzuzu kpuchiri?", options: ["Na ncha n'etiti ehihie", "Site n'iguzo n'elu ya na-ehicha ya ike", "Na mmiri na ákwà dị nro mgbe ọ dị jụụ", "Na ájá"], answer: 2, why: "Mmiri na ákwà dị nro, mgbe ọ dị jụụ, na-ehicha ya n'emebighị ya." },
          { objective: "O4", q: "Ọkụ na-anwụ n'oge, panel dịkwa ọcha ma enweghị ndò. Gịnị ka ị ga-elele ọzọ?", options: ["Ọwa TV onye ahịa", "Njikọ: waya tọrọ atọ, gbajiri agbaji ma ọ bụ rere ure", "Amụma ihu igwe", "Ọ dịghị ihe ọzọ"], answer: 1, why: "Njikọ na-esote n'usoro ịchọpụta nsogbu." },
          { objective: "O4", q: "Gịnị kwesịrị ime batrị ike anyanwụ ochie?", options: ["Kpọọ ya ọkụ", "Lie ya", "Tụba ya n'iyi", "Nye ya onye nchịkọta a kwadoro ma ọ bụ mmemme take-back"], answer: 3, why: "Batrị ochie bụ e-waste, a ga-emegharịkwa ha n'enweghị nsogbu." },
          { objective: "O5", q: "Gịnị na-eme na PAYGo mgbe ịkwụ ụgwọ kwụsịrị?", options: ["Ngwa ahụ na-akpọchi ruo mgbe onye ahịa kwụrụ ọzọ", "Onye ahịa na-enweta ya ozugbo", "Panel na-agbaji", "Ọ dịghị ihe ọ bụla"], answer: 0, why: "Ngwa PAYGo na-akpọchi mgbe ịkwụ ụgwọ kwụsịrị ma na-emeghe mgbe a kwụrụ." },
          { objective: "O5", q: "Onye ahịa nwere ike ịkwụ naanị ọkara nke ịkwụ ụgwọ kwa ọnwa. Gịnị ka ire n'ụzọ ziri ezi pụtara?", options: ["Ree ya ngwa buru ibu n'agbanyeghị", "Zoo nha ịkwụ ụgwọ", "Nye ya ngwa pere mpe ma ọ bụ usoro ọ nwere ike ịkwụ", "Rịọ PIN ya"], answer: 2, why: "Ire n'ụzọ ziri ezi pụtara ereghị karịa ihe ezinụlọ nwere ike ịkwụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ike Anyanwụ n'Ụlọ: Ịwụnye, Ire na Azụmahịa Ike Anyanwụ",
    questions: [
      { objective: "O1", q: "Kedu akụkụ na-echekwa ike maka abalị?", options: ["Panel", "Batrị", "Fiuz", "Ọkụ"], answer: 1, why: "Batrị na-echekwa ike maka iji mgbe anyanwụ adịghị." },
      { objective: "O1", q: "Gịnị bụ VeraSol?", options: ["Ụdị batrị", "Ụlọ ọrụ ike anyanwụ na-ere site na PAYGo", "Mmemme ịdị mma nke onwe ya na-enye ngwa ike anyanwụ na-adịghị n'eletrịkị gọọmentị asambodo", "Ụtụ gọọmentị"], answer: 2, why: "VeraSol bụ mmemme nlekọta ịdị mma nke onwe ya maka ike anyanwụ na-adịghị n'eletrịkị gọọmentị." },
      { objective: "O1", q: "Ngwa enweghị akara, enweghị asambodo, enweghịkwa warranti. Gịnị ka ị ga-eme?", options: ["Rịọ warranti e dere ede na nsonaazụ nnwale, ma ọ bụ họrọ ngwa e nyere asambodo", "Ree ya ka à ga-asị na e nyere ya asambodo", "Ree ya n'ọnụahịa dị elu karịa", "Wụnye ya n'agwaghị onye ọ bụla"], answer: 0, why: "Ọ bụrụ na ọ dịghị ihe na-egosi ịdị mma, rịọ warranti na nsonaazụ nnwale, ma ọ bụ họrọ ngwa e nyere asambodo." },
      { objective: "O1", q: "Gịnị mere obere ngwa ji ejikarị ngwa ụlọ DC?", options: ["Ha na-eme mkpọtụ karịa", "Ha chọrọ grid", "Ha na-adị n'efu mgbe niile", "Ha na-eji ike pere mpe karịa ngwa AC na inverter"], answer: 3, why: "Ngwa ụlọ DC na-ezere ike na-efu efu n'inverter ma na-eji ike pere mpe." },
      { objective: "O2", q: "Redio na-eji 5 W awa 6 kwa ụbọchị. Wh ole?", options: ["11 Wh", "30 Wh", "56 Wh", "1 Wh"], answer: 1, why: "5 x 6 = 30 Wh." },
      { objective: "O2", q: "Gịnị mere ị ga-eji tinye ihe dị ka 30% na ngụkọta kwa ụbọchị?", options: ["Maka ike na-efu efu na waya, controller na batrị", "Maka uru", "Maka ụtụ", "Maka kredit ekwentị onye ahịa"], answer: 0, why: "Ike na-efu n'ụzọ, ya mere ngwa ahụ ga-emerịrị ike karịa ihe loads na-eji." },
      { objective: "O2", q: "Ike a chọrọ kwa ụbọchị 300 Wh, awa anyanwụ siri ike 5. Kedu panel kacha nta site na mgbakọ ahụ?", options: ["1,500 W", "30 W", "6 W", "60 W"], answer: 3, why: "300 / 5 = 60 W; wee mee ka ọ rịgoro na nha panel na-esote." },
      { objective: "O2", q: "Ike a chọrọ kwa ụbọchị 240 Wh, batrị lithium e ji ruo 80%, 12 V. Ihe dị ka amp-hours ole?", options: ["Ihe dị ka 25 Ah", "Ihe dị ka 12 Ah", "Ihe dị ka 300 Ah", "Ihe dị ka 2 Ah"], answer: 0, why: "240 / 0.8 = 300 Wh; 300 / 12 = 25 Ah." },
      { objective: "O3", q: "Onye ahịa bi n'ugwu Ghana, n'ugwu equator. Olee akụkụ panel ga-eche ihu?", options: ["North (ugwu)", "Kpọmkwem n'elu n'adabereghị ma ntakịrị", "South (ndịda), n'akụkụ equator", "Naanị east (ọwụwa anyanwụ)"], answer: 2, why: "N'ugwu equator, panel na-eche south ihu, n'akụkụ equator, ma dabere ntakịrị." },
      { objective: "O3", q: "Ebee ka batrị kwesịrị ịnọ?", options: ["N'elu ụlọ n'anyanwụ", "N'akụkụ ọkụ isi nri", "N'ime ụlọ, ebe kpọrọ nkụ, nwere ndò, ikuku na-abata, n'elu ala, tere aka n'ụmụaka", "N'ime igbe emechiri emechi na-enweghị ikuku"], answer: 2, why: "Ebe kpọrọ nkụ, nwere ndò, ikuku na-abata, tere aka n'ụmụaka na ọkụ kacha enweghị nsogbu." },
      { objective: "O3", q: "N'ọtụtụ ngwa nwere controller dị iche, gịnị ka ị ga-ebu ụzọ jikọọ?", options: ["Panel na loads", "Batrị na controller", "Loads na grid", "Panel na batrị ozugbo"], answer: 1, why: "Ijikọ batrị na controller mbụ na-enye controller ohere ịhazi onwe ya; wee panel, wee loads, ma ọ bụrụ na akwụkwọ ntụziaka ekwughị ihe ọzọ." },
      { objective: "O3", q: "Kedu ọrụ dị n'azụ ihe ọmụmụ a ma chọọ onye eletrịkị nwere ikikere?", options: ["Ihicha panel", "Idebe batrị", "Itinye fiuz onye mere ya nyere", "Ijikọ ngwa ahụ na grid ma ọ bụ waya eletrịkị ụlọ"], answer: 3, why: "Ọrụ grid na waya eletrịkị ụlọ bụ naanị maka ndị eletrịkị nwere ikikere." },
      { objective: "O3", q: "Gịnị mere a ga-eji debe batrị lead-acid ebe ikuku na-abata ma tere aka n'ọkụ?", options: ["Ha na-ewepụta gas nwere ike ịgba ọkụ mgbe a na-achaja ha", "Ha na-ajụ oyi nke ukwuu", "Ha na-adọta ụmụ ahụhụ", "Ha chọrọ ìhè anyanwụ"], answer: 0, why: "Ịchaja batrị lead-acid na-ewepụta gas nwere ike ịgba ọkụ." },
      { objective: "O4", q: "Olee oge kacha mma ihicha panel?", options: ["N'etiti ehihie n'anyanwụ zuru oke", "N'isi ụtụtụ ma ọ bụ na mgbede, mgbe ọ dị jụụ", "N'oge oke mmiri ozuzo", "Ọ dịghị mgbe"], answer: 1, why: "Panel dị jụụ ka mma imetụ na ihicha karịa nke na-ekpo ọkụ n'anyanwụ zuru oke." },
      { objective: "O4", q: "Kedu usoro ziri ezi maka ịchọpụta nsogbu?", options: ["Batrị, wee chee echiche", "Loads, wee zụta ngwa ọhụrụ", "Panel, njikọ, controller, batrị, loads", "Naanị controller"], answer: 2, why: "Ilele n'usoro a na-ebu ụzọ chọta ihe ndị na-akpatakarị nsogbu, ndị dị mfe." },
      { objective: "O4", q: "Ezinụlọ tinyere TV buru ibu, ugbu a ọkụ na-anwụ n'oge. Gịnị nwere ike ịbụ ihe kpatara ya?", options: ["Panel ahụ dị n'isi ala", "Anyanwụ adịghị ike", "Fiuz ahụ siri ike karịa", "Loads karịrị ihe e tụrụ nha ngwa ahụ maka ya"], answer: 3, why: "Loads agbakwunyere na-eji ike karịa ihe ngwa ahụ na-eme ma na-echekwa." },
      { objective: "O5", q: "Ọnụahịa ego nkịtị NGN 150,000. PAYGo: ego mbido NGN 20,000, wee NGN 12,000 kwa ọnwa maka ọnwa 12. Gịnị bụ ngụkọta PAYGo?", options: ["NGN 164,000", "NGN 144,000", "NGN 32,000", "NGN 150,000"], answer: 0, why: "20,000 + (12,000 x 12) = 164,000." },
      { objective: "O5", q: "Onye ga-arịọ onye ahịa PIN mobile money ya?", options: ["Ụlọ ọrụ ike anyanwụ", "Onye isi gị", "Ọ dịghị ezi ụlọ ọrụ: naanị ndị aghụghọ", "Onye na-awụnye ya"], answer: 2, why: "Ezi ụlọ ọrụ anaghị arịọ PIN mgbe ọ bụla." },
      { objective: "O5", q: "Kedu nke so n'iwu nchekwa ndị ahịa GOGLA?", options: ["Ire ngwa kacha ibu nye onye ọ bụla", "Ime ihe n'ìhè: ozi doro anya, nke eziokwu", "Izo ngụkọta ọnụahịa", "Enweghị ọrụ mgbe e rechara ihe"], answer: 1, why: "Ime ihe n'ìhè na ire n'ụzọ ziri ezi bụ ụkpụrụ bụ isi." },
      { objective: "O5", q: "Ngwa EGP 4,000, waya EGP 500, njem EGP 300, ụgwọ ọrụ EGP 700, uru EGP 500. Gịnị bụ ọnụahịa gị?", options: ["EGP 5,500", "EGP 4,500", "EGP 5,000", "EGP 6,000"], answer: 3, why: "4,000 + 500 + 300 + 700 + 500 = 6,000." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị marawọrị?", from: [0, 1, 4, 6, 8, 11, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ nke ọnụahịa gị ma nwaa ọzọ.",
    criteria: [
      { name: "Elelere ịdị mma", objective: "O1", notYet: "A kpọghị aha ngwa ahụ, ma ọ bụ a leleghị ịdị mma ya.", meets: "A kpọrọ aha ngwa ahụ na akụkụ ya, ọnụahịa ahụ dekwara ma ọ dị n'ebe nchekwa VeraSol ma ọ bụ o nwere warranti e dere ede.", exceeds: "Ọ na-akọwakwara onye ahịa ihe mere ngwa e nyere asambodo ji dị mkpa." },
      { name: "Atụrụ nha nke ọma", objective: "O2", notYet: "Enweghị tebụl ike, ma ọ bụ mgbakọ ahụ ezighi ezi.", meets: "E gụpụtara tebụl ike, 30% e tinyere, na nha panel na batrị nke ọma.", exceeds: "Ọ na-echekwa maka ụbọchị igwe ojii ma ọ bụ ọnwa igwe ojii kachasị, ma kwuo ebe ọnụọgụ awa anyanwụ si bịa." },
      { name: "Ịwụnye n'enweghị nsogbu", objective: "O3", notYet: "Enweghị ndepụta, ma ọ bụ o gụnyere ọrụ grid ma ọ bụ waya eletrịkị ụlọ.", meets: "Ndepụta ahụ kpuchiri ebe panel ga-anọ, nchekwa ubube, ebe batrị ga-anọ, polarity, fiuz na usoro njikọ, n'enweghị ọrụ grid.", exceeds: "Ọ na-akpọkwa aha ndị na-achịkwa ike a ga-ajụ maka ikikere." },
      { name: "Nlekọta na nsogbu", objective: "O4", notYet: "Enweghị kaadị nlekọta, ma ọ bụ ndụmọdụ na-adịghị mma.", meets: "Kaadị ahụ na-enye nlekọta oge niile na usoro nzọụkwụ ise maka nsogbu, ma kwuo otu a ga-esi emeso batrị ochie.", exceeds: "Ọ na-akọwakwa ihe ọkụ controller pụtara maka ngwa a." },
      { name: "Ọnụahịa na usoro n'eziokwu", objective: "O5", notYet: "Ngụkọta ego PAYGo ma ọ bụ warranti adịghị ya, ma ọ bụ mgbakọ ahụ ezighi ezi.", meets: "Ọnụahịa ego nkịtị, usoro PAYGo ọ bụla na ngụkọta ziri ezi dị n'akụkụ ibe ha, ya na warranti na nọmba onye na-awụnye ya.", exceeds: "Ọ na-elelekwa na ịkwụ ụgwọ ndị ahụ dabara n'ego ezinụlọ ahụ ma kwuo ihe na-eme ma a kwụghị otu oge." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha dere ọnụahịa nwere tebụl ike maka ezi onye ahịa n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha rere ma ọ bụ wụnye ngwa e nyere asambodo n'ime ụbọchị 90",
      "Ndị na-amụ ihe kwuru na ọ dịghị ọkụ batrị, ọkụ eletrịkị ịgba mmadụ ma ọ bụ mkpesa ndị ahịa banyere ego e zoro ezo n'ime ụbọchị 90"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nkịtị nwere igwe mgbakọ; data maka ịchọ obere ihe n'ebe nchekwa VeraSol ma ọ bụrụ na ọ ga-ekwe omume",
      "Akwụkwọ na mkpịsị ode maka tebụl ike, ndepụta nchekwa, kaadị nlekọta na ọnụahịa",
      "Ọ bụrụ na ọ ga-ekwe omume, obere ngwa ike anyanwụ e nyere asambodo iji lee ma kpọọ aha akụkụ ya",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "N'otu ndị ntorobịa, otu ọzụzụ aka ọrụ ma ọ bụ otu ụmụ nwanyị: meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ, ndị na-amụ ihe na-atụ nha ngwa maka ezi ụlọ ha maara.",
      "A ga-amụ ịwụnye ngwa n'aka naanị n'okpuru onye na-awụnye nwere ahụmịhe, na obere ngwa DC; ekwela ka ndị na-amụ ihe rụọ ọrụ na grid, waya eletrịkị ụlọ ma ọ bụ inverter mgbe ọ bụla.",
      "Tupu ihe ọmụmụ ahụ, chọpụta ma mba gị na-enye ndị ọrụ ike anyanwụ ikikere, na ndị nchịkọta e-waste ma ọ bụ mmemme take-back na-arụ ọrụ n'ógbè gị.",
      "Arịọla ndị na-amụ ihe ka ha kesaa PIN ma ọ bụ okwuntughe na klaasị mgbe ọ bụla.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
