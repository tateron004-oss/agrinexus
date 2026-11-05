"use strict";

// Koach Learn course (Igbo translation of shared/warehouse-logistics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ihe ọmụmụ a na-akwado gị; ọ naghị enye asambodo. Ịnya forklift dị n'ihe ọmụmụ "Mmalite Ọrụ Onye Na-anya Forklift".

const BLS_MOVERS = { name: "U.S. Bureau of Labor Statistics: Hand laborers and material movers", url: "https://www.bls.gov/ooh/transportation-and-material-moving/hand-laborers-and-material-movers.htm" };
const BLS_CLERKS = { name: "U.S. Bureau of Labor Statistics: Material recording clerks", url: "https://www.bls.gov/ooh/office-and-administrative-support/material-recording-clerks.htm" };
const MSSC_CLT = { name: "MSSC: Certified Logistics Technician (CLT) and Certified Logistics Associate (CLA)", url: "https://www.msscusa.org/certified-logistics-technician-clt/" };
const OSHA_OUTREACH = { name: "OSHA Outreach Training Program (10-hour and 30-hour classes)", url: "https://www.osha.gov/training/outreach" };
const OSHA_WAREHOUSE = { name: "OSHA: Warehousing", url: "https://www.osha.gov/warehousing" };
const OSHA_WH_HAZARDS = { name: "OSHA: Warehousing hazards and solutions", url: "https://www.osha.gov/warehousing/hazards-solutions" };
const OSHA_HEAT = { name: "OSHA: Heat exposure", url: "https://www.osha.gov/heat-exposure" };
const OSHA_178 = { name: "OSHA 29 CFR 1910.178: Powered industrial trucks (trailer brakes and wheel chocks)", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.178" };
const AJC = { name: "CareerOneStop: find an American Job Center near you", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" };

module.exports = {
  id: "warehouse-logistics-ig",
  lang: "ig",
  translationOf: "warehouse-logistics",
  category: "Workforce Development",
  name: "Ọrụ n'Ụlọ Nkwakọba Ngwaahịa na Logistics",
  skills: "Ịmata ọrụ ụlọ nkwakọba ngwaahịa na asambodo, Ịchọta ngwaahịa site na SKU na ebe ọ dị, Ịnabata ngwaahịa e zitere, Ịhazi pallet n'enweghị nsogbu, Ịrụ ọrụ ngwa ngwa n'enweghị ihe egwu",
  outcome: "ịkpọ aha ọrụ ndị bụ isi n'ụlọ nkwakọba ngwaahịa na asambodo ndị na-enyere gị aka inweta ha, ịgbaso ngwaahịa site na nnabata ruo na mbupụ, ịchọta ngwaahịa site na SKU ya na koodu ebe ọ dị, ilele ngwaahịa e bugara n'akwụkwọ ya ma dee nsogbu ọ bụla, ịhazi pallet n'enweghị ihe egwu, na ime atụmatụ iji nweta ọrụ.",
  about: [
    "Ụlọ nkwakọba ngwaahịa (warehouse) na ebe nkesa ngwaahịa na-ebugharị ihe anyị na-azụ kwa ụbọchị, ha na-ewekwa ndị ọrụ n'afọ niile. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha mbụ (veterans) na onye ọ bụla chọrọ ọrụ mbụ kwụsiri ike na logistics nke nwere ohere ito eto.",
    "Ị ga-amụta ọrụ dị n'ụlọ nkwakọba ngwaahịa, otu ngwaahịa si esi n'ụgbọ ala gaa n'elu shelf wee rute onye ahịa, otu esi agụ koodu ebe, otu esi anabata ngwaahịa e bugara ma gụọ ngwaahịa nke ọma, otu esi ahazi pallet n'enweghị ihe egwu, na otu esi anọ n'udo ma na-arụ ọrụ ngwa ngwa.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị asambodo. Ọ bụrụ na ị chọrọ otu, Manufacturing Skill Standards Council (MSSC) na-enye Certified Logistics Associate (CLA) na Certified Logistics Technician (CLT). Ịnya forklift chọrọ ọzụzụ onye were gị n'ọrụ; lee ihe ọmụmụ anyị \"Mmalite Ọrụ Onye Na-anya Forklift\".",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" nke ị nwere ike iji akwụkwọ na pensụl mee. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwugwu mmalite ọrụ ụlọ nkwakọba ngwaahịa: akụkọ nnabata maka ngwaahịa omume (ọnụọgụ e lelere n'akwụkwọ packing list, ebe e dere ụkọ ọ bụla, mfe ọ bụla na mmebi ọ bụla), pick list i hazịrị n'usoro ije site na koodu ebe, eserese atụmatụ pallet n'enweghị ihe egwu nwere ibu na ọkwa ya, na atụmatụ ibe otu iji nweta ọrụ nwere ndị were mmadụ n'ọrụ ma ọ bụ mmemme atọ, asambodo ị ga-achọ, na ahịrị résumé abụọ bụ eziokwu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-achọ ọrụ mbụ n'ụlọ nkwakọba ngwaahịa, ebe nkesa ngwaahịa ma ọ bụ logistics: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha mbụ na ndị agha nwere ahụmịhe n'ọrụ ngwaahịa, ndị ntorobịa na ndị na-agbanwe ọrụ.",
    startingPoint: "Ha nwere ike ịgụ ọnụ, ịgụ nọmba na akara (label), ma gbasoo ntụziaka. Ha nwere obere ahụmịhe na koodu ebe, akwụkwọ nnabata, ịgụ ngwaahịa ma ọ bụ ịhazi pallet. Ụfọdụ arụọla ọrụ ike ma ha amụtabeghị otu esi ebuli ihe n'enweghị ihe egwu.",
    gap: "Ụlọ nkwakọba ngwaahịa na-ewe ọtụtụ mmadụ, mana ndị ọrụ ọhụrụ na-emehie n'ịgụ ọnụ, na-agwakọta ebe, ma ọ bụ na-emerụ ahụ anaghị anọ ogologo oge. Ndị na-amụ ihe chọrọ omume ndị bụ isi nke izi ezi na nchekwa, na ụzọ doro anya ruo n'asambodo na nkwalite, ka e wee were ha n'ọrụ ma ha nọgide.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Mgbakọ: ọnụọgụ zuru ezu, mgbakwunye na mmụba dị mfe; ọnụọgụ omume bụ nke e chepụtara",
      "Achọghị ngwaọrụ: mee omume jiri akwụkwọ, ihe dị n'ụlọ ma ọ bụ igbe",
      "Enweghị iji forklift ma ọ bụ ngwaọrụ na-eji ike eletrik/injin n'ihe ọmụmụ a",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ maka ibe gọọmentị na ịchọ ọrụ"
    ],
    prerequisites: "Ọ dịghị. \"Ihe Ndabere nke Nchekwa n'Ebe Ọrụ (OSHA)\" na \"Mmalite Ọrụ Onye Na-anya Forklift\" bụ ezigbo ihe ọmụmụ ọzọ ị ga-amụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndepụta mgbasa ozi ọrụ ụlọ nkwakọba ngwaahịa", action: "ịmata ọrụ ndị ahụ, ihe onye ọ bụla na-eme na asambodo ndị na-enyere gị aka inweta ọrụ", standard: "site n'ịkpọ aha opekata mpe ọrụ anọ na otu ezi asambodo ya na onye na-enye ya" },
    { id: "O2", condition: "Mgbe e nyere gị pick list nwere SKU na koodu ebe", action: "ịchọta ebe ngwaahịa ọ bụla dị ma hazie ihe ị ga-ewere n'usoro ije", standard: "ebe a gụrụ koodu ebe ọ bụla nke ọma" },
    { id: "O3", condition: "Mgbe e nyere gị ngwaahịa omume e bugara na packing list ya", action: "ịnabata ngwaahịa ahụ ma dee ụkọ ọ bụla, mfe ọ bụla ma ọ bụ mmebi ọ bụla", standard: "ebe ọnụọgụ na ndetu ọ bụla ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị igbe na ibu ha", action: "ịhazi pallet n'enweghị ihe egwu, ihe dị arọ n'ala ma n'ime oke ibu", standard: "na-agbaso iwu ọ bụla dị na ndepụta nlele pallet" },
    { id: "O5", condition: "Mgbe e nyere gị ọrụ ma ọ bụ ihe egwu n'ụlọ nkwakọba ngwaahịa", action: "ịhọrọ ụzọ dị mma iji buli, bugharịa ma ọ bụ kọọ ya mgbe ị na-arụ ọrụ ngwa ngwa", standard: "na-enweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu ụlọ nkwakọba ngwaahịa si arụ ọrụ",
      lessons: [
        {
          title: "Ọrụ n'ụlọ nkwakọba ngwaahịa na asambodo ndị na-enyere aka",
          objectives: ["O1"],
          minutes: 5,
          goal: "Mata ọrụ ndị bụ isi n'ụlọ nkwakọba ngwaahịa na otu asambodo nwere ike inyere gị aka inweta ọrụ.",
          text: [
            "Ọrụ mmalite a na-ahụkarị: material handler ma ọ bụ warehouse associate (onye na-ebugharị ngwaahịa), picker na packer (ndị na-emejupụta ọda ndị ahịa), stocker ma ọ bụ order filler, shipping and receiving clerk (onye na-elele ngwaahịa na-abata na nke na-apụ), inventory clerk (onye na-agụ ngwaahịa ma na-edozi ndekọ) na onye na-anya forklift. Site n'ahụmịhe, ị nwere ike ịghọ onye ndu (lead), onye nlekọta (supervisor) ma ọ bụ onye nhazi inventory ma ọ bụ logistics.",
            "Ọtụtụ ọrụ mmalite achọghị asambodo mahadum. Ndị mmadụ na-amụtakarị ya n'ọrụ, ọtụtụ mgbe n'ime otu ọnwa ma ọ bụ na-erughị, ma na-amụta iwu nchekwa dabere n'ụkpụrụ OSHA. Ndị were mmadụ n'ọrụ na-achọ ndị na-abịa n'oge, na-agụ ọnụ nke ọma ma na-arụ ọrụ n'enweghị ihe egwu.",
            "Asambodo nwere ike ime ka ị pụta ìhè. Manufacturing Skill Standards Council (MSSC) na-enye Certified Logistics Associate (CLA) na Certified Logistics Technician (CLT); ị ga-ebu ụzọ gafee CLA tupu i were CLT. Klaasị OSHA Outreach nke awa 10 na-enye gị kaadị mmecha; ọ bụ nke afọ ofufo, OSHA kwukwara na ọ bụghị asambodo (certification). Ịnya forklift na-achọ mgbe niile ọzụzụ na nyocha nke onye were gị n'ọrụ n'onwe ya.",
            "Ụgwọ ọrụ na ohere ọrụ dị iche iche dabere n'ebe. Lelee Occupational Outlook Handbook gọọmentị na bls.gov maka ụgwọ ọrụ na ọdịnihu ọrụ, na ezi mgbasa ozi ọrụ dị nso n'ebe ị nọ."
          ],
          words: [["Logistics", "ịhazi na ibugharị ngwaahịa site n'ebe e mere ha ruo n'ebe a chọrọ ha."], ["Ebe nkesa ngwaahịa (Distribution center)", "nnukwu ụlọ nkwakọba ngwaahịa na-ezipu ngwaahịa n'ụlọ ahịa ma ọ bụ nye ndị ahịa."], ["Asambodo (Credential)", "akwụkwọ ma ọ bụ kaadị na-egosi na i gafere ule ma ọ bụ mechaa ọzụzụ."], ["MSSC", "Manufacturing Skill Standards Council, otu ọgbakọ mba America na-enye asambodo CLA na CLT."]],
          slides: [
            { title: "Ọrụ mmalite", bullets: ["Material handler, picker, packer, stocker", "Shipping and receiving clerk, inventory clerk", "Onye na-anya forklift (site n'ọzụzụ onye were gị n'ọrụ)"] },
            { title: "Otu ndị mmadụ si amalite", bullets: ["Ọtụtụ mgbe, achọghị asambodo mahadum", "Mụta ya n'ọrụ, ọtụtụ mgbe n'ime otu ọnwa ma ọ bụ na-erughị", "Bịa n'oge, gụọ ọnụ nke ọma, rụọ ọrụ n'enweghị ihe egwu"] },
            { title: "Asambodo na-enyere aka", bullets: ["MSSC: CLA mbụ, wee CLT", "Kaadị OSHA awa 10: afọ ofufo, ọ bụghị asambodo", "Forklift: ọzụzụ na nyocha onye were gị n'ọrụ"] },
            { title: "Lelee eziokwu ahụ", bullets: ["Ụgwọ ọrụ na ọdịnihu: Occupational Outlook Handbook na bls.gov", "Ezi mgbasa ozi ọrụ dị nso n'ebe ị nọ"] }
          ],
          sources: [BLS_MOVERS, BLS_CLERKS, MSSC_CLT, OSHA_OUTREACH],
          tryIt: "Chọta mgbasa ozi ọrụ ụlọ nkwakọba ngwaahịa atọ dị nso n'ebe ị nọ. Maka nke ọ bụla, dee aha ọrụ ahụ, oge ọrụ (shift), ihe ọrụ ahụ na-eme n'otu ahịrị, na asambodo ma ọ bụ nka ọ bụla ọ na-arịọ. Wee meghee ibe MSSC CLT ma dee onye na-enye CLA na CLT.",
          youCanNow: "ịkpọ aha ọrụ ndị bụ isi n'ụlọ nkwakọba ngwaahịa, ihe nke ọ bụla na-eme, na asambodo ndị nwere ike inyere gị aka inweta ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọrụ na-elele ngwaahịa na-abata na nke na-apụ n'akwụkwọ ha?", options: ["Shipping and receiving clerk", "Packer", "Onye na-arụzi forklift", "Onye nche"], answer: 0, why: "Shipping and receiving clerks na-eso ngwaahịa na-abata na nke na-apụ ma na-elele ha." },
            { objective: "O1", q: "Onye na-enye asambodo Certified Logistics Technician (CLT)?", options: ["OSHA", "IRS", "Manufacturing Skill Standards Council (MSSC)", "Ụlọ ọrụ staffing ọ bụla"], answer: 2, why: "CLT, na CLA na-ebu ya ụzọ, bụ asambodo MSSC." }
          ]
        },
        {
          title: "Otu ngwaahịa si agagharị na koodu ebe",
          objectives: ["O2"],
          minutes: 5,
          goal: "Chọta ngwaahịa site na SKU ya na koodu ebe ọ dị, ma hazie ihe ị ga-ewere n'usoro ije.",
          text: [
            "Ngwaahịa na-agagharị n'ụlọ nkwakọba ngwaahịa n'otu usoro kwa ụbọchị. Nnabata (receiving): ngwaahịa na-abata, a na-elele ha. Ntinye n'ebe (putaway): a na-edebe ha n'ebe a kara aka. Nchekwa (storage). Iwepụta (picking): ndị ọrụ na-ewepụta ihe maka ọda. Nkwakọ (packing). Mbupụ (shipping): ọda na-apụ n'ụgbọ ala.",
            "Ngwaahịa ọ bụla nwere SKU (stock keeping unit), koodu maka kpọmkwem ihe ahụ, dịka ọmụmaatụ uwe elu anụnụ anụnụ nke nha large. Ebe nchekwa ọ bụla nwere koodu ebe. Ọtụtụ ụlọ nkwakọba ngwaahịa na-eji zone, aisle (ụzọ n'etiti shelf), rack (ma ọ bụ bay) na level (ọkwa), ya mere A-12-03-B nwere ike ịpụta zone A, aisle 12, rack 3, level B. Ụlọ nkwakọba ngwaahịa gị ga-akụziri gị usoro nke ya.",
            "Ọtụtụ ụlọ nkwakọba ngwaahịa na-eji scanner. Ị na-scan ebe ahụ na ngwaahịa ahụ ka sistemụ kọmputa (warehouse management system) mara ihe bugharịrị. Ọ bụrụ na ihe dị n'ebe ahụ adabaghị na SKU, kwụsị ma gwa onye ndu gị; ewerela ihe yiri ya.",
            "Iji chekwaa nzọụkwụ, wepụta ihe n'usoro ije: hazie ndepụta gị site na aisle, wee site na rack, ka i jee aisle ọ bụla naanị otu ugboro."
          ],
          steps: ["Gụọ SKU na koodu ebe maka ahịrị ọ bụla.", "Kewaa koodu ebe ahụ n'akụkụ ya: zone, aisle, rack, level.", "Hazie ndepụta ahụ site na zone, wee aisle, wee rack.", "N'ebe ọ bụla, scan ma ọ bụ lelee na SKU dabara tupu i wepụta ya.", "Ọ bụrụ na ọ dabaghị ma ọ bụ ebe ahụ tọgbọ chakoo, kọọ ya."],
          words: [["SKU", "stock keeping unit: koodu maka otu kpọmkwem ngwaahịa."], ["Koodu ebe (Location code)", "adreesị ebe nchekwa, dị ka zone, aisle, rack na level."], ["Putaway", "ibuga ngwaahịa a nabatara n'ebe nchekwa ha."], ["Picking", "iwepụta ihe site n'ebe nchekwa iji mejupụta ọda."], ["Warehouse management system (WMS)", "sistemụ kọmputa na-eso ebe ngwaahịa ọ bụla dị."]],
          slides: [
            { title: "Otu ngwaahịa si agagharị", bullets: ["Nnabata, ntinye n'ebe, nchekwa", "Iwepụta, nkwakọ, mbupụ"] },
            { title: "Koodu ị na-eji", bullets: ["SKU: kpọmkwem ngwaahịa ahụ", "Ebe: zone, aisle, rack, level", "Ọmụmaatụ: A-12-03-B"] },
            { title: "Wepụta nke ọma, wepụta n'amamihe", bullets: ["Scan ebe ahụ na ngwaahịa ahụ", "Ihe ezighi ezi ma ọ bụ ebe tọgbọ chakoo? Kọọ ya", "Hazie site na aisle ka i jee aisle ọ bụla otu ugboro"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Naanị omume. Hazie pick list a n'usoro ije (zone, aisle, rack, level): B-04-02-A, A-12-03-B, A-03-01-C, B-01-05-A, A-12-01-A. Wee dee ihe akụkụ ọ bụla nke A-12-03-B pụtara. Lelee: usoro ahụ na-amalite A-03-01-C, A-12-01-A, A-12-03-B.",
          youCanNow: "ịgụ koodu ebe, ịchọta ngwaahịa site na SKU ya na ịhazi pick list n'usoro ije.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ SKU?", options: ["Ụdị forklift", "Koodu maka otu kpọmkwem ngwaahịa", "Ụgbọ ala na-ebu ngwaahịa", "Iwu nchekwa"], answer: 1, why: "Stock keeping unit bụ koodu maka otu kpọmkwem ihe." },
            { objective: "O2", q: "Ị gara n'otu ebe, ngwaahịa ahụ adabaghị na SKU dị na ndepụta gị. Gịnị ka ị ga-eme?", options: ["Were ihe yiri ya", "Gafee ahịrị ahụ ma ghara ikwu ihe ọ bụla", "Were abụọ n'ihe ọzọ", "Kwụsị ma kọọrọ onye ndu gị"], answer: 3, why: "A ga-akọ ihe adabaghị ka ọda ahụ na ndekọ ahụ dịrị n'ezi." }
          ]
        },
        {
          title: "Ịnabata ngwaahịa e bugara na ịgụ ngwaahịa",
          objectives: ["O3"],
          minutes: 6,
          goal: "Lelee ngwaahịa e bugara n'akwụkwọ packing list ya ma dee nsogbu ọ bụla.",
          text: [
            "Mgbe ụgbọ ala rutere, ndị nnabata na-elele na ihe bịara bụ ihe e nyere ọda ya. Ị na-atụnyere ngwaahịa ahụ na packing list (na purchase order, ma ọ bụrụ na i nwere ya). Onye ọkwọ ụgbọ ala na-enyekwa bill of lading, akwụkwọ mbupụ ị na-abịanye aka na ya.",
            "Gụọ ahịrị ọ bụla. Lelee SKU, ọnụọgụ na ọnọdụ ya. Ọ bụrụ na igbe kụrụ akụ, mmiri mikpuru ya ma ọ bụ o meghere emeghe, see foto ma ebe ọrụ gị kwere, ma dee ya. Ọ bụrụ na ihe bịara erughị ihe e depụtara, ọ bụ ụkọ (shortage); ọ bụrụ na ọ karịrị, ọ bụ mfe (overage). Dee nsogbu ọ bụla n'akwụkwọ ahụ tupu ị bịanye aka, dịka usoro ebe ọrụ gị si kwuo. Ịbịanye aka n'akwụkwọ nnabata na-enweghị ndetu nwere ike ịpụta na ị nabatara ihe niile dị mma.",
            "Ịgụ ngwaahịa (inventory) na-arụ ọrụ n'otu ụzọ ahụ. Cycle count bụ ịgụ ebe ole na ole kwa ụbọchị kama ịgụ ụlọ nkwakọba ngwaahịa niile otu mgbe. Ọ bụrụ na ọnụọgụ gị adabaghị na sistemụ, gụọ ọzọ, wee kọọ ya. N'ebe a, izi ezi dị mkpa karịa ọsọ."
          ],
          steps: ["Nweta packing list (na purchase order ma ọ bụrụ na i nwere ya).", "Gụọ ahịrị ọ bụla: SKU ziri ezi, ọnụọgụ ziri ezi.", "Lelee ọnọdụ igbe ọ bụla.", "Dee ụkọ, mfe ma ọ bụ mmebi ọ bụla n'akwụkwọ ahụ.", "Gbasoo usoro ebe ọrụ gị tupu ị bịanye aka na bill of lading.", "Kọọrọ onye ndu gị nsogbu."],
          words: [["Packing list", "ndepụta ihe dị n'ime ngwaahịa e zitere."], ["Purchase order (PO)", "ọda onye zụrụ ihe na-egosi ihe ọ zụrụ na ole."], ["Bill of lading (BOL)", "akwụkwọ mbupụ onye na-ebu ngwaahịa na-enye; ịbịanye aka na ya na-egosi na ị nataala ngwaahịa ahụ."], ["Ụkọ (Shortage)", "ihe bịara erughị ihe akwụkwọ kwuru."], ["Mfe (Overage)", "ihe bịara karịrị ihe akwụkwọ kwuru."], ["Cycle count", "ịgụ ebe ole na ole n'otu oge ka ndekọ dịrị n'ezi."]],
          slides: [
            { title: "Ihe nnabata na-elele", bullets: ["SKU ziri ezi", "Ọnụọgụ ziri ezi", "Ọnọdụ dị mma"] },
            { title: "Nsogbu ị ga-ede", bullets: ["Ụkọ: erughị ihe e depụtara", "Mfe: karịrị ihe e depụtara", "Mmebi: kụrụ akụ, mmiri mikpuru ma ọ bụ meghere emeghe"] },
            { title: "Tupu ị bịanye aka", bullets: ["Dee nsogbu ọ bụla", "Gbasoo usoro ebe ọrụ gị", "Mbịanye aka na-enweghị ndetu nwere ike ịpụta na ihe niile dị mma"] },
            { title: "Ịgụ ngwaahịa", bullets: ["Cycle count: ebe ole na ole kwa ụbọchị", "Ọ dabaghị? Gụọ ọzọ, wee kọọ ya", "Izi ezi tupu ọsọ"] }
          ],
          sources: [BLS_CLERKS],
          tryIt: "Naanị omume. Packing list kwuru: SKU 1001, igbe 12; SKU 1002, igbe 8; SKU 1003, igbe 20. Ị gụrụ 12 nke 1001, 6 nke 1002, na 21 nke 1003, otu igbe 1003 kụrụ akụ. Dee akụkọ nnabata: ahịrị ọ bụla, ihe a tụrụ anya, ihe bịara, na nsogbu ahụ. Azịza: 1002 nwere ụkọ 2; 1003 nwere mfe 1 na mmebi 1.",
          youCanNow: "ilele ngwaahịa e bugara n'akwụkwọ packing list ya ma dee ụkọ, mfe na mmebi.",
          quickCheck: [
            { objective: "O3", q: "Packing list kwuru igbe 10, mana 8 bịara. Kedu aha nke a?", options: ["Mfe (overage)", "Ụkọ (shortage)", "Cycle count", "Putaway"], answer: 1, why: "Ihe erughị ihe akwụkwọ depụtara bụ ụkọ." },
            { objective: "O3", q: "Otu igbe n'ime ngwaahịa e bugara dere mmiri ma dọwaa. Gịnị ka ị ga-eme?", options: ["Dee mmebi ahụ n'akwụkwọ tupu ị bịanye aka, dịka usoro ebe ọrụ gị si kwuo", "Bịanye aka n'akwụkwọ ma ghara ikwu ihe ọ bụla", "Tụfuo igbe ahụ", "Zoo ya n'azụ"], answer: 0, why: "A ga-ede mmebi ka e wee nwee ike ịrịọ maka ya ma ghara ịta ụlọ nkwakọba ngwaahịa ụta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu ụlọ nkwakọba ngwaahịa si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Gịnị ka ị chọrọ tupu ị nya forklift n'ụlọ nkwakọba ngwaahịa?", options: ["Naanị kaadị ịntanetị", "Ọ dịghị ihe", "Akwụkwọ ikike ịnya ụgbọ ala", "Ọzụzụ na nyocha nke onye were gị n'ọrụ n'onwe ya"], answer: 3, why: "OSHA chọrọ ka onye were mmadụ n'ọrụ zụọ ma nyochaa onye ọ bụla na-anya forklift." },
          { objective: "O1", q: "Gịnị bụ eziokwu banyere kaadị OSHA awa 10?", options: ["Ọ bụ akwụkwọ ikike forklift", "Ọ bụ ọzụzụ afọ ofufo, ọ bụghịkwa asambodo", "Iwu chọrọ ya maka ọrụ ọ bụla", "MSSC na-enye ya"], answer: 1, why: "OSHA kwuru na ọzụzụ Outreach bụ afọ ofufo, ọ bụghịkwa asambodo." },
          { objective: "O2", q: "Na koodu A-12-03-B, gịnị ka 12 nwere ike ịbụ?", options: ["Aisle", "Ọnụ ahịa", "SKU", "Ibu"], answer: 0, why: "N'usoro zone-aisle-rack-level, akụkụ nke abụọ bụ aisle." },
          { objective: "O2", q: "Kedu nzọụkwụ na-esote nnabata ozugbo?", options: ["Mbupụ", "Nkwakọ", "Ntinye n'ebe (putaway)", "Iwepụta (picking)"], answer: 2, why: "Mgbe a nabatachara ngwaahịa, a na-edebe ha n'ebe nchekwa ha." },
          { objective: "O3", q: "Cycle count gị gosiri 14, mana sistemụ kwuru 16. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gbanwee sistemụ ka ọ bụrụ 14", "Dee 16 ka ọ dabara", "Hapụ ya", "Gụọ ọzọ, wee kọọ ya ma ọ ka adabaghị"], answer: 3, why: "Bụ ụzọ gụọ ọzọ; ọ bụrụ na ọ ka adabaghị, kọọ ya ka e lelee ya." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ ọrụ n'enweghị ihe egwu na inweta ọrụ",
      lessons: [
        {
          title: "Ibuli ihe n'enweghị ihe egwu na ihe egwu n'ụlọ nkwakọba",
          objectives: ["O5"],
          minutes: 5,
          goal: "Họrọ ụzọ dị mma iji buli, bugharịa ma kọọ ihe egwu n'ụlọ nkwakọba ngwaahịa.",
          text: [
            "OSHA kpọrọ aha ihe egwu ndị bụ isi n'ụlọ nkwakọba ngwaahịa: forklift na ụgbọ ndị ọzọ na-eji ike, ibuli ihe na mmerụ ahụ site n'ime otu ihe ugboro ugboro, ibugharị ngwaahịa, kemịkal, ịmịfu, ịsọ ngọngọ na ịda, na robot na conveyor. Mmerụ ahụ a na-ahụkarị bụ mgbaji akwara site n'ibuli ihe na forklift ịkụ mmadụ.",
            "Buli n'amamihe. Bụ ụzọ chee banyere ibuli ahụ na ụzọ ị ga-agafe. Bịaruo ibu ahụ nso, gbagọọ ikpere gị, mee ka azụ gị kwụ ọtọ ma debe ibu ahụ nso n'ahụ gị, ma atụgharịla n'úkwù: jiri ụkwụ gị tụgharịa. Jiri ụgbọ aka (cart), hand truck ma ọ bụ pallet jack mgbe ị nwere ike. Maka ihe dị arọ ma ọ bụ ihe siri ike ijide, rịọ ka unu buli ya ọnụ (team lift).",
            "N'akụkụ ngwaọrụ: nọrọ n'ụzọ ije, lee onye na-anya forklift anya, ma agala n'okpuru ndụdụ forklift e weliri elu. Debe aka gị n'ebe dị anya na conveyor na-agagharị. N'oge okpomọkụ, na-aṅụ mmiri mgbe niile, were ezumike gị ma gwa mmadụ ma ọ bụrụ na isi na-atụgharị gị ma ọ bụ ahụ adịghị gị.",
            "Ọsọ dị mkpa, mana ejila ụzọ dị mkpụmkpụ nwere ihe egwu. Kọọrọ onye ndu gị ihe egwu dị ka ihe wụfụrụ n'ala, rack mebiri emebi ma ọ bụ ụzọ mpụta e gbochiri ozugbo."
          ],
          steps: ["Chee echiche: ọ dị arọ ole, ebee ka ọ na-aga, ụzọ ọ dị ọcha?", "Bịaruo nso, gbagọọ ikpere, azụ kwụ ọtọ.", "Jiri ụkwụ gị buli, ibu nso n'ahụ gị.", "Jiri ụkwụ gị tụgharịa; atụgharịla n'úkwù.", "Jiri cart ma ọ bụ pallet jack, ma ọ bụ rịọ team lift, maka ibu dị arọ.", "Kọọ ihe egwu ozugbo."],
          words: [["Ergonomics", "ime ka ọrụ dabara ahụ mmadụ iji gbochie mgbaji akwara na mmerụ ahụ."], ["Pallet jack", "ngwaọrụ a na-eji aka akwali ma ọ bụ nke na-eji ike, na-ebuli ma bugharịa pallet obere ebe."], ["Team lift", "mmadụ abụọ ma ọ bụ karịa na-ebuli otu ihe dị arọ ma ọ bụ siri ike ijide ọnụ."], ["Ọrịa okpomọkụ (Heat illness)", "ọrịa site n'ịrụ ọrụ n'okpomọkụ, dị ka heat exhaustion ma ọ bụ heat stroke."]],
          slides: [
            { title: "Ihe egwu ndị bụ isi", bullets: ["Forklift na ụgbọ ndị ọzọ na-eji ike", "Ibuli ihe na ime otu ihe ugboro ugboro", "Ịmịfu, ịsọ ngọngọ, ịda, conveyor, okpomọkụ"] },
            { title: "Buli n'amamihe", bullets: ["Chee echiche, bịaruo nso, gbagọọ ikpere", "Ibu nso; jiri ụkwụ tụgharịa", "Cart, pallet jack ma ọ bụ team lift maka ibu dị arọ"] },
            { title: "N'akụkụ ngwaọrụ", bullets: ["Nọrọ n'ụzọ ije; lee onye na-anya anya", "Agala n'okpuru ndụdụ e weliri elu", "Aka n'ebe dị anya na conveyor na-agagharị"] },
            { title: "Ọsọ n'enweghị ihe egwu", bullets: ["Mmiri na ezumike n'okpomọkụ", "Enweghị ụzọ dị mkpụmkpụ nwere ihe egwu", "Kọọ ihe egwu ozugbo"] }
          ],
          sources: [OSHA_WAREHOUSE, OSHA_WH_HAZARDS, OSHA_HEAT],
          tryIt: "Mee omume n'ụlọ jiri igbe tọgbọ chakoo ma ọ bụ nke dị mfe. Buli ya site n'iji nzọụkwụ ọ bụla, ma kwuo nzọụkwụ ọ bụla n'olu dị elu. Wee dee ihe egwu atọ ị nwere ike ịhụ n'ụlọ nkwakọba ngwaahịa na ihe ị ga-eme maka nke ọ bụla.",
          youCanNow: "ibuli ma bugharịa ihe n'enweghị ihe egwu ma kọọ ihe egwu n'ụlọ nkwakọba ngwaahịa n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O5", q: "Ị chọrọ ịtụgharị mgbe ị bu igbe. Kedu otu ị ga-esi mee ya?", options: ["Tụgharịa n'úkwù", "Jiri ụkwụ gị tụgharịa", "Tụfuo igbe ahụ", "Bụ ụzọ bulie ya karịa isi gị"], answer: 1, why: "Iji ụkwụ tụgharịa na-echebe azụ gị; ịtụgharị n'úkwù mgbe ị na-ebuli ihe na-ebute mmerụ ahụ." },
            { objective: "O5", q: "Ị hụrụ forklift ka ọ na-abịa n'aisle gị. Gịnị kacha mma?", options: ["Jiri ọsọ jee n'azụ ya", "Banye n'okpuru ndụdụ e weliri elu", "Nọrọ n'ụzọ ije ma lee onye na-anya ya anya", "Fee aka ma gaa n'ihu n'ụzọ ya"], answer: 2, why: "Ụzọ ije na ile anya na-enyere onye na-anya aka ịhụ gị ma mee ka ị ghara ịnọ n'ụzọ ya." }
          ]
        },
        {
          title: "Ịhazi pallet n'enweghị ihe egwu",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hazie pallet: ihe dị arọ n'ala, ọkwa hara nhata, ibu niile n'ime oke.",
          text: [
            "Ezigbo pallet na-erute n'otu iberibe ma na-echebe ndị mmadụ. Bụ ụzọ lelee pallet n'onwe ya: enweghị osisi gbajiri agbaji ma ọ bụ ntu pụtara apụta.",
            "Igbe dị arọ na-aga n'ala, nke dị mfe n'elu. Mee ọkwa hara nhata ma dị larịị. Debe igbe n'ime ọnụ pallet ahụ (ọ dịghị nke na-agafe ọnụ). Tụgharịa ọkwa ọ bụla nke abụọ ka igbe gafee ibe ha (a na-akpọ nke a interlocking); ọ na-enyere ihe ahụ aka ijikọ ọnụ. Nọrọ n'okpuru oke ịdị elu na oke ibu nke ebe ọrụ gị.",
            "Gbakọọ ibu niile. Ọmụmaatụ (naanị omume): igbe 20 nke 25 lb ọ bụla bụ 500 lb, gbakwunye pallet dị ihe dị ka 40 lb bụ 540 lb. Lelee na ọ dị n'okpuru oke maka pallet, rack na ngwaọrụ ahụ.",
            "Jiri stretch wrap kechie ibu ahụ, sie ike site n'ala ruo n'elu, ma kechie ya na pallet. Tinye akara (label) ka ha chee ihu n'èzí ebe a ga-scan ha. Tupu a bunye ụgbọ ala, a na-eme ka breeki trailer ahụ jide ma tinye ihe mgbochi n'ụkwụ ya (wheel chocks); a na-agbasa ibu ahụ nhata n'ime trailer."
          ],
          steps: ["Lelee pallet: enweghị osisi gbajiri agbaji ma ọ bụ ntu.", "Igbe kacha arọ n'ọkwa ala.", "Ọkwa hara nhata, n'ime ọnụ, interlocked.", "Gbakọọ ibu niile ma lelee oke ya.", "Kechie stretch wrap ka o sie ike, site n'ala ruo n'elu, gụnyere pallet.", "Akara chere ihu n'èzí."],
          words: [["Pallet", "ihe ndabere dị larịị nke osisi ma ọ bụ plastik a na-atụkọta ngwaahịa n'elu ya ka e wee bugharịa ha ọnụ."], ["Interlocking", "ịtụgharị ọkwa igbe ọ bụla ka ọ gafee ọkwa dị n'okpuru ya."], ["Overhang", "igbe na-agafe ọnụ pallet."], ["Stretch wrap", "plastik dị gịrịgịrị a na-ekechi n'ibu iji jikọta ya ọnụ."]],
          slides: [
            { title: "Malite nke ọma", bullets: ["Lelee pallet maka osisi gbajiri agbaji na ntu", "Igbe kacha arọ n'ala"] },
            { title: "Tụkọọ nke ọma", bullets: ["Ọkwa hara nhata ma dị larịị", "Enweghị overhang", "Interlock ọkwa ndị ahụ"] },
            { title: "Lelee ibu", bullets: ["Igbe x ibu, gbakwunye pallet", "N'okpuru oke pallet, rack na ngwaọrụ"] },
            { title: "Mechaa nke ọma", bullets: ["Kechie ka o sie ike, site n'ala ruo n'elu", "Akara chere ihu n'èzí"] }
          ],
          sources: [OSHA_WH_HAZARDS, OSHA_178],
          tryIt: "Naanị omume. I nwere igbe 8 nke 50 lb, igbe 12 nke 20 lb na igbe 6 nke 10 lb. See pallet ahụ site n'akụkụ: igbe ndị ga-aga n'ọkwa ọ bụla. Gbakọọ ibu niile ya na pallet nke 40 lb ma lelee na ọ dị n'okpuru oke 1,000 lb. Azịza: 400 + 240 + 60 + 40 = 740 lb.",
          youCanNow: "ịhazi pallet n'enweghị ihe egwu, ihe dị arọ n'ala, ọkwa hara nhata na ibu niile n'ime oke.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka igbe kacha arọ na-aga na pallet?", options: ["N'ọkwa elu", "Na-agafe ọnụ", "Naanị n'ọkwa etiti", "N'ọkwa ala"], answer: 3, why: "Ihe dị arọ n'ala na-eme ka ibu kwụsie ike ma na-echebe igbe ndị dị mfe." },
            { objective: "O4", q: "Omume: igbe 30 nke 20 lb na pallet nke 40 lb. Ole bụ ibu niile?", options: ["640 lb", "600 lb", "540 lb", "60 lb"], answer: 0, why: "30 x 20 = 600 lb, gbakwunye pallet 40 lb = 640 lb." }
          ]
        },
        {
          title: "Inweta ọrụ na ịrị elu",
          objectives: ["O1", "O5"],
          minutes: 5,
          goal: "Dee atụmatụ inweta ọrụ nwere ndị were mmadụ n'ọrụ, ebumnuche asambodo na ahịrị résumé bụ eziokwu.",
          text: [
            "Ebe ị ga-achọ: weebụsaịtị ọrụ nke nnukwu ụlọ ahịa na ụlọ ọrụ mbupụ, ebe mgbasa ozi ọrụ obodo, ụlọ ọrụ staffing na American Job Center dị nso n'ebe ị nọ, nke nwekwara ike inye aka ịkwụ ụgwọ ọzụzụ na asambodo n'ọnọdụ ụfọdụ. Ọtụtụ ụlọ nkwakọba ngwaahịa na-ewe ndị nwere ndekọ mpụ; jụọ job center ahụ maka ndị were mmadụ n'ọrụ na-enye ohere nke abụọ (second-chance employers).",
            "Ihe ndị were mmadụ n'ọrụ na-achọ: ịbịa n'oge, ịgụ ọnụ nke ọma, omume nchekwa na ọsọ kwụsiri ike. Ụlọ nkwakọba ngwaahịa na-atụkarị rate gị, dị ka ihe ole i wepụtara kwa awa (picks per hour). Ruo ya site n'ịrụ ọrụ n'amamihe (usoro ije, ịscan nke ọma), ọ bụghị site n'ịhapụ nchekwa.",
            "Mee ka résumé gị dabara ọrụ ahụ. Jiri okwu omume na ezi ọmụmaatụ: \"Counted and checked deliveries against packing lists\" ma ọ bụ \"Completed warehouse safety and logistics training (Koach Learn), 2026\". Ndị agha mbụ: ọrụ ngwaahịa (supply), motor pool na logistics dị mkpa, ya mere dee ha n'okwu nkịtị.",
            "Hazie otu ị ga-esi too. Asambodo dị ka MSSC CLA, wee CLT, na ọzụzụ forklift nke onye were gị n'ọrụ nwere ike iduga gị n'ọrụ na-akwụ ụgwọ karịa dị ka onye ndu, inventory control ma ọ bụ logistics coordinator."
          ],
          steps: ["Depụta ndị were mmadụ n'ọrụ ma ọ bụ mmemme atọ dị nso, gụnyere American Job Center gị.", "Họrọ ebumnuche asambodo (dịka ọmụmaatụ MSSC CLA) na ụbọchị ị chọrọ iru ya.", "Dee ahịrị résumé abụọ bụ eziokwu site n'ihe ọmụmụ a ma ọ bụ ọrụ gara aga.", "Mee omume azịza sekọnd 30: \"Kedu otu ị si anọgide na-eme ihe n'ezi ma n'enweghị ihe egwu mgbe ọrụ na-aga ngwa ngwa?\""],
          words: [["Rate", "ọrụ ole ị na-arụ n'oge a kara aka, dị ka ihe ole i wepụtara kwa awa."], ["American Job Center", "ọfịs ọha n'efu na-enyere ndị mmadụ aka ịchọta ọrụ na ọzụzụ."], ["Second-chance employer", "azụmahịa na-ewe ndị nwere ndekọ mpụ n'ọrụ."]],
          slides: [
            { title: "Ebe ị ga-achọ", bullets: ["Weebụsaịtị ọrụ ụlọ ọrụ na ebe mgbasa ozi ọrụ", "Ụlọ ọrụ staffing", "American Job Center dị nso n'ebe ị nọ"] },
            { title: "Ihe ndị were mmadụ n'ọrụ na-achọ", bullets: ["N'oge, n'ezi, n'enweghị ihe egwu", "Ruo rate site n'ịrụ ọrụ n'amamihe", "Ọ bụghị site n'ịhapụ nchekwa"] },
            { title: "Résumé gị", bullets: ["Okwu omume na ezi ọmụmaatụ", "Eziokwu banyere ọzụzụ na asambodo", "Ndị agha mbụ: kọwaa ọrụ supply na logistics n'okwu nkịtị"] },
            { title: "Rịa elu", bullets: ["MSSC CLA, wee CLT", "Ọzụzụ forklift nke onye were gị n'ọrụ", "Onye ndu, inventory control, coordinator"] }
          ],
          sources: [AJC, MSSC_CLT, BLS_MOVERS],
          tryIt: "Dee atụmatụ inweta ọrụ gị: ndị were mmadụ n'ọrụ ma ọ bụ mmemme atọ dị nso, ebumnuche asambodo gị na ụbọchị ya, ahịrị résumé abụọ bụ eziokwu, na azịza sekọnd 30 gị maka \"Kedu otu ị si anọgide na-eme ihe n'ezi ma n'enweghị ihe egwu mgbe ọrụ na-aga ngwa ngwa?\" Gụpụta azịza ahụ n'olu dị elu.",
          youCanNow: "ide atụmatụ inweta ọrụ n'ụlọ nkwakọba ngwaahịa, nwere ebumnuche asambodo na ahịrị résumé bụ eziokwu.",
          quickCheck: [
            { objective: "O5", q: "Ị nọ n'azụ rate picks-per-hour gị. Kedu ụzọ ziri ezi isi rute ya?", options: ["Hapụ ịscan ka ị gaa ngwa ngwa", "Gbaa ọsọ n'aisle", "Wepụta n'usoro ije ma scan nke ọma", "Rịgoo rack kama iji ubube"], answer: 2, why: "Ịrụ ọrụ n'amamihe na-echekwa oge; ụzọ dị mkpụmkpụ nwere ihe egwu na-ebute mmerụ ahụ na mperi." },
            { objective: "O1", q: "Kedu ahịrị résumé bụ eziokwu ma sie ike?", options: ["\"MSSC CLT certified\" (tupu i gafee ya)", "\"Hard worker\"", "\"Forklift certified\" (na-enweghị nyocha onye were gị n'ọrụ)", "\"Counted and checked deliveries against packing lists\""], answer: 3, why: "Ọ na-eji okwu omume na ezi ọrụ, ọ dịghịkwa ihe ọ na-ekwu na i nwere nke i nweghị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ ọrụ n'enweghị ihe egwu na inweta ọrụ",
        questions: [
          { objective: "O5", q: "Igbe dị arọ nke ukwuu ka ị buli naanị gị. Gịnị ka ị ga-eme?", options: ["Bulie ya ngwa ngwa tupu o merụọ gị ahụ", "Jiri cart ma ọ bụ pallet jack, ma ọ bụ rịọ team lift", "Dọkpụrụ ya ka azụ gị gbagọrọ agbagọ", "Hapụ ya n'aisle"], answer: 1, why: "Jiri ngwaọrụ ma ọ bụ team lift maka ibu dị arọ iji gbochie mmerụ azụ." },
          { objective: "O5", q: "Ị hụrụ ihe wụfụrụ n'aisle. Kedu ihe ziri ezi ị ga-eme?", options: ["Gafee ya ma ghara ikwu ihe ọ bụla", "Chere ka onye ọzọ hụ ya", "Mee ka ndị mmadụ ghara ịbịaru ya nso ma kọọ ya ozugbo", "Kpuchie ya n'igbe"], answer: 2, why: "Kọọ ihe egwu ozugbo ka e hichaa ya tupu mmadụ amịfu." },
          { objective: "O4", q: "Gịnị ka interlocking ọkwa na pallet na-eme?", options: ["Ọ na-enyere ihe a tụkọrọ aka ijikọ ọnụ", "Ọ na-eme ka ọ dị arọ karịa", "Ọ na-ezo akara", "Ọ na-ekwe ka igbe gafee ọnụ"], answer: 0, why: "Ọkwa ndị gafere ibe ha na-ejikọta ihe a tụkọrọ ka ọ ghara ikewa." },
          { objective: "O4", q: "Kedu pallet dị njikere ka e bugharịa ya?", options: ["Igbe na-agafe ọnụ", "Igbe dị mfe n'ala", "Ọ tọpụrụ atọpụ, e kechighị ya", "Igbe dị arọ n'ala, ọkwa hara nhata, e kechiri ya, akara chere ihu n'èzí"], answer: 3, why: "Ọ na-agbaso iwu niile: ihe dị arọ n'ala, nhata, e kechiri ya ma tinye akara." },
          { objective: "O1", q: "Kedu ọfịs nwere ike inyere gị aka ịchọta ọrụ ụlọ nkwakọba ngwaahịa na ọzụzụ n'efu?", options: ["American Job Center dị nso n'ebe ị nọ", "Ọfịs ire tiketi", "DMV", "Ụlọ akụ"], answer: 0, why: "American Job Centers bụ ọfịs ọha n'efu maka ọrụ na ọzụzụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ọrụ n'Ụlọ Nkwakọba Ngwaahịa na Logistics",
    questions: [
      { objective: "O1", q: "Kedu ọrụ na-emejupụta ọda ndị ahịa site n'iwepụta ihe n'elu shelf?", options: ["Receiving clerk", "Picker", "Onye na-arụzi ụgbọ ala", "Onye nche"], answer: 1, why: "Pickers na-ewepụta ihe site n'ebe nchekwa iji mejupụta ọda." },
      { objective: "O1", q: "Kedu asambodo ị ga-ebu ụzọ gafee tupu i were MSSC CLT?", options: ["CDL", "Kaadị OSHA awa 30", "MSSC Certified Logistics Associate (CLA)", "Kaadị forklift"], answer: 2, why: "MSSC chọrọ CLA tupu nyocha CLT." },
      { objective: "O1", q: "Ebee ka ị ga-elele ụgwọ ọrụ na ọdịnihu ọrụ maka ọrụ ụlọ nkwakọba ngwaahịa?", options: ["Occupational Outlook Handbook na bls.gov", "Ozi na social media", "Ihe enyi gị chere", "Egwuregwu vidiyo"], answer: 0, why: "Akwụkwọ BLS bụ isi iyi gọọmentị maka ụgwọ ọrụ na ọdịnihu ọrụ." },
      { objective: "O2", q: "Kedu usoro ziri ezi ngwaahịa si agagharị?", options: ["Mbupụ, iwepụta, nnabata", "Nkwakọ, nnabata, ntinye n'ebe", "Iwepụta, nnabata, nchekwa", "Nnabata, ntinye n'ebe, nchekwa, iwepụta, nkwakọ, mbupụ"], answer: 3, why: "Ngwaahịa na-abata, a na-edebe ha, wee wepụta ha, kwakọọ ha ma zipu ha." },
      { objective: "O2", q: "Omume: kedu ebe mbụ n'usoro ije?", options: ["B-02-01-A", "A-07-04-C", "A-02-06-B", "B-01-01-A"], answer: 2, why: "Hazie site na zone, wee aisle: zone A aisle 02 na-ebu ụzọ tupu A aisle 07 na zone B niile." },
      { objective: "O2", q: "Gịnị mere ị na-scan ebe ahụ na ngwaahịa ahụ mgbe ị na-ewepụta ihe?", options: ["Ka sistemụ mara kpọmkwem ihe bugharịrị", "Iji mee ka ị ga nwayọọ", "Iji lelee oge", "Ọ bụ naanị maka egwuregwu"], answer: 0, why: "Ịscan na-eme ka ndekọ warehouse management system dịrị n'ezi." },
      { objective: "O2", q: "Ebe SKU gị dị tọgbọ chakoo. Gịnị ka ị ga-eme?", options: ["Were ihe ọ bụla dị nso", "Kọọrọ onye ndu gị", "Kaa ọda ahụ akara na o mechara", "Hapụ ahịrị ahụ ma ghara ikwu ihe ọ bụla"], answer: 1, why: "A na-akọ ebe tọgbọ chakoo ka e wee chọta ngwaahịa ma dozie ndekọ." },
      { objective: "O3", q: "Gịnị bụ bill of lading?", options: ["Ndepụta ihe a ga-azụ n'ahịa", "Akara nchekwa", "Akwụkwọ ụgwọ ọrụ", "Akwụkwọ mbupụ ị na-abịanye aka maka ngwaahịa e bugara"], answer: 3, why: "Bill of lading bụ akwụkwọ mbupụ nke onye na-ebu ngwaahịa." },
      { objective: "O3", q: "Ndepụta kwuru igbe 15; 17 bịara. Gịnị bụ ya?", options: ["Mfe (overage)", "Ụkọ (shortage)", "Mmebi", "Putaway"], answer: 0, why: "Ihe karịrị ihe akwụkwọ depụtara bụ mfe." },
      { objective: "O3", q: "Kedu ihe atọ ị na-elele n'ahịrị ọ bụla mgbe ị na-anabata ngwaahịa?", options: ["Agba, nha na isi", "SKU ziri ezi, ọnụọgụ ziri ezi, ọnọdụ dị mma", "Ọnụ ahịa, ụtụ na tip", "Aha onye ọkwọ ụgbọ, agba ụgbọ ala, oge"], answer: 1, why: "Nnabata na-elele ihe ahụ, ọnụọgụ ya na ọnọdụ ya." },
      { objective: "O3", q: "Gịnị bụ cycle count?", options: ["Ịgụ ịnyịnya ígwè", "Ịgụ ụlọ nkwakọba ngwaahịa niile naanị otu ugboro n'afọ", "Ịgụ ebe ole na ole n'otu oge ka ndekọ dịrị n'ezi", "Ịgụ awa ọrụ gị"], answer: 2, why: "Cycle count na-elele ebe ole na ole kwa ụbọchị ka ndekọ dịrị n'ezi." },
      { objective: "O4", q: "Gịnị ka ị na-ebu ụzọ lelee mgbe ị na-ahazi pallet?", options: ["Agba akara", "Na pallet enweghị osisi gbajiri agbaji ma ọ bụ ntu pụtara apụta", "Ihu igwe", "Redio ụgbọ ala"], answer: 1, why: "Pallet mebiri emebi nwere ike ịgbaji ma tụpụ ibu ahụ." },
      { objective: "O4", q: "Omume: igbe 10 nke 30 lb na igbe 10 nke 15 lb na pallet nke 40 lb. Ole niile?", options: ["450 lb", "300 lb", "490 lb", "45 lb"], answer: 2, why: "300 + 150 + 40 = 490 lb." },
      { objective: "O4", q: "Gịnị mere igbe ekwesịghị ịgafe ọnụ pallet?", options: ["Overhang na-akụri igbe ma nwee ike ime ka ibu ahụ ghara ịkwụsi ike", "Ọ naghị adị mma ile anya, ọ bụ naanị ya", "Ọ na-eme ka ibu dị mfe", "Ọ na-eme ka ikechi ya dị ngwa"], answer: 0, why: "Igbe na-agafe ọnụ enweghị ihe na-ejide ha, ha na-akụri ma nwee ike ime ka ibu ahụ daa." },
      { objective: "O4", q: "Kedu otu e kwesịrị isi kechie stretch wrap?", options: ["Naanị gburugburu ọkwa elu", "Tọpụrụ atọpụ, ka ọ pụọ ngwa ngwa", "N'elu akara ka a ghara ịgụ ha", "Sie ike, site n'ala ruo n'elu, gburugburu pallet kwa"], answer: 3, why: "Ikechi ya ka o sie ike ma ruo na pallet na-ejikọta ibu niile ọnụ." },
      { objective: "O5", q: "Kedu mmerụ ahụ a na-ahụkarị n'ụlọ nkwakọba ngwaahịa, dịka OSHA si kwuo?", options: ["Akwụkwọ ibe aka", "Mgbaji akwara site n'ibuli ihe na forklift ịkụ mmadụ", "Anwụ ire ọkụ n'akpụkpọ ahụ", "Ike ọgwụgwụ anya site na ihuenyo"], answer: 1, why: "OSHA kpọrọ mgbaji akwara site n'ibuli ihe na ụgbọ na-eji ike ịkụ mmadụ dị ka ndị a na-ahụkarị." },
      { objective: "O5", q: "Kedu otu ị ga-esi bulie igbe n'ala?", options: ["Bịaruo nso, gbagọọ ikpere, mee ka azụ kwụ ọtọ ma debe ibu nso", "Gbagọọ n'úkwù ka ụkwụ kwụ ọtọ", "Tụgharịa ka ị na-ebuli", "Jide ya n'ebe dị anya n'ahụ gị"], answer: 0, why: "Iji ụkwụ gị na idebe ibu nso na-echebe azụ gị." },
      { objective: "O5", q: "Okpomọkụ dị nke ukwuu n'ụlọ nkwakọba ngwaahịa, isi na-atụgharịkwa gị. Gịnị ka ị ga-eme?", options: ["Gaa n'ihu na-arụ ọrụ ka i rute rate gị", "Hapụ ezumike gị", "Gwa mmadụ, ṅụọ mmiri ma zuo ike n'ebe dị jụụ", "Laa n'ụlọ n'agwaghị onye ọ bụla"], answer: 2, why: "Isi ịtụgharị nwere ike ịbụ ọrịa okpomọkụ; gwa mmadụ, mee ka ahụ gị jụọ ma ṅụọ mmiri." },
      { objective: "O5", q: "Kedu ụzọ dị mma iji nọgide na rate gị?", options: ["Hapụ ịscan", "Nọkwasị na pallet jack", "Rịgoo rack iji ruo ihe", "Rụọ ọrụ n'amamihe: usoro ije, ịscan nke ọma, enweghị ụzọ dị mkpụmkpụ nwere ihe egwu"], answer: 3, why: "Ụzọ amamihe na-echekwa oge n'etinyeghị mmerụ ahụ ma ọ bụ mperi n'ihe egwu." },
      { objective: "O1", q: "Kedu eziokwu banyere kaadị OSHA Outreach awa 10?", options: ["Ọ bụ ọzụzụ afọ ofufo, OSHA kwukwara na ọ bụghị asambodo", "Ọ na-ekwe ka ị nya forklift ọ bụla", "Ọ dị otu na MSSC CLT", "Iwu gọọmentị etiti chọrọ ya maka ọrụ ụlọ nkwakọba ngwaahịa ọ bụla"], answer: 0, why: "OSHA kwuru na klaasị Outreach bụ afọ ofufo, ọ dịghịkwa nke ọ bụla n'ime ha bụ asambodo." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 4, 8, 9, 11, 12, 15, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee ọzọ.",
    criteria: [
      { name: "Akụkọ nnabata", objective: "O3", notYet: "Otu ọnụọgụ ezighi ezi, ma ọ bụ ụkọ, mfe ma ọ bụ mmebi adịghị ya.", meets: "Ahịrị ọ bụla na-egosi ihe a tụrụ anya na ihe bịara, e dekwara nsogbu ọ bụla.", exceeds: "O dekwara ihe a ga-eme tupu ịbịanye aka na bill of lading na onye a ga-agwa." },
      { name: "Pick list n'usoro ije", objective: "O2", notYet: "Ebe ụfọdụ adịghị n'usoro, ma ọ bụ a gụhiere otu koodu.", meets: "E hazịrị ihe niile site na zone, aisle, rack na level, a gụkwara koodu ọ bụla nke ọma.", exceeds: "Ọ na-akọwa ihe a ga-eme ma ngwaahịa adabaghị ma ọ bụ ebe tọgbọ chakoo." },
      { name: "Atụmatụ pallet", objective: "O4", notYet: "Igbe dị arọ n'elu, overhang, ma ọ bụ ibu niile ezighi ezi ma ọ bụ karịrị oke.", meets: "Igbe dị arọ n'ala, ọkwa hara nhata e interlocked, ibu niile ziri ezi n'okpuru oke, e kechiri ya ma tinye akara.", exceeds: "Ọ gbakwunyere nlele pallet na nzọụkwụ nchekwa trailer." },
      { name: "Atụmatụ inweta ọrụ", objective: "O1", notYet: "Enweghị ndị were mmadụ n'ọrụ, enweghị ebumnuche asambodo, ma ọ bụ ahịrị résumé na-ekwu ihe na-abụghị eziokwu.", meets: "Ndị were mmadụ n'ọrụ ma ọ bụ mmemme atọ, ezi asambodo ya na onye na-enye ya na ụbọchị, ahịrị résumé abụọ bụ eziokwu.", exceeds: "O nwere azịza sekọnd 30 e mere omume ya banyere izi ezi na nchekwa." },
      { name: "Ọrụ n'enweghị ihe egwu", objective: "O5", notYet: "Atụmatụ ahụ na-atụ aro ụzọ dị mkpụmkpụ nwere ihe egwu iji rute rate.", meets: "Azịza sekọnd 30 na atụmatụ ahụ na-ebute nchekwa ụzọ, ya na ibuli ihe n'enweghị ihe egwu na ịkọ ihe egwu.", exceeds: "Ọ kpọrọ aha otu ihe egwu site n'ibe OSHA warehousing na otu esi egbochi ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a na ngwugwu mmalite nke ruru rubric",
      "Ndị na-amụ ihe tinyere akwụkwọ maka opekata mpe ọrụ ụlọ nkwakọba ngwaahịa atọ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe e were n'ọrụ ụlọ nkwakọba ngwaahịa ma ọ bụ logistics n'ime ụbọchị 90 (akụkọ ndị mmekọ na nnyocha nsochi)",
      "Ndị na-amụ ihe debanyere aha maka MSSC CLA ma ọ bụ malite ọzụzụ forklift nke onye were ha n'ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Akwụkwọ, pensụl na kalkuleto (kalkuleto ekwentị dị mma)",
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka ịchọ ọrụ na ibe gọọmentị",
      "Nhọrọ: igbe tọgbọ chakoo ole na ole ma ọ bụ sticky notes iji mee omume ọkwa pallet na ụzọ iwepụta ihe",
      "Ihe dị ka nkeji 60 n'ozuzu"
    ],
    facilitatorNotes: [
      "Hazie obere ụlọ nkwakọba ngwaahịa nwere shelf e tinyere akara (sticky notes dị ka A-01-01-A) ma mee asọmpi iwepụta ihe e ji oge tụọ, ebe izi ezi bụ ihe mbụ a na-agụ.",
      "Jiri packing list omume e biri ebi na igbe nwere ihe dị iche iche maka ọrụ nnabata.",
      "Mee omume ibuli ihe naanị jiri igbe tọgbọ chakoo ma ọ bụ nke dị mfe.",
      "Kpọọ onye nlekọta ụlọ nkwakọba ngwaahịa obodo ma ọ bụ onye ọrụ American Job Center ka ọ kọọ banyere iwe mmadụ n'ọrụ, rate na iwe ndị chọrọ ohere nke abụọ.",
      "Jiri rubric tụọ ngwugwu mmalite ahụ ma lelee otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
