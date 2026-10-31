"use strict";

// Koach Learn course (Igbo translation of shared/cnc-machining-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ihe ọmụmụ nkwadebe: ọ naghị enye asambodo, ọ dịghịkwa ọrụ igwe n'ime ya. G-code na M-code dị ka e dere ha na Bekee.

module.exports = {
  id: "cnc-machining-basics-ig",
  lang: "ig",
  translationOf: "cnc-machining-basics",
  category: "Workforce Development",
  name: "Ntọala Ọrụ Igwe CNC",
  skills: "Ịkpọ aha igwe CNC na axis ha, Ịgụ nha na tolerance n'eserese akụkụ, Ịgụ G-code na M-code dị mfe, Ịhazi usoro setup dị nchebe na akụkụ mbụ n'usoro, Ịhụ ihe egwu dị n'ụlọ ọrụ igwe na otu e si egbochi ha, Ịhazi ụzọ gị gaa n'ọzụzụ na asambodo ọrụ igwe",
  outcome: "ịkpọ aha igwe CNC ndị bụ isi na axis ha, ịgụ nha na tolerance n'eserese akụkụ dị mfe, ịgụ obere mmemme G-code ma see ụzọ ngwá ọrụ ahụ n'akwụkwọ graph, ịhazi usoro setup dị nchebe na akụkụ mbụ n'usoro, ịkpọ aha ihe nchebe maka ihe egwu a na-ahụkarị n'ụlọ ọrụ igwe, na ịgbaso atụmatụ nwere ụbọchị iji nweta ọzụzụ na asambodo ọrụ igwe.",
  about: [
    "Ndị ọrụ igwe CNC (machinists na operators) na-emepụta akụkụ igwe na plastik dị n'ime ụgbọ ala, ụgbọ elu, ngwá ọrụ ugbo, ngwá ọgwụ na igwe dị n'ụlọ ọrụ mmepụta ọ bụla. Ọtụtụ na-amalite dị ka ndị na-arụ igwe (operator), wee rịgoo n'ọrụ setup, ide mmemme na nyocha. Ihe ọmụmụ a bụ maka onye ọ bụla na-ele ụzọ ahụ anya: ndị na-achọ ọrụ, ndị ntorobịa, ndị agha mbụ (veterans), ndị si n'ụlọ mkpọrọ na-alọta, ndị kwagara na mba ọzọ na ndị okenye na-alaghachi n'ọmụmụ ihe.",
    "Ị ga-amụta ihe igwe CNC na-eme na otu axis ha si aga, otu esi agụ nha na tolerance n'eserese akụkụ, otu esi agụ obere mmemme CNC n'ahịrị n'ahịrị, na usoro setup dị nchebe na akụkụ mbụ. Mgbe ahụ, ị ga-amụta ihe egwu dị n'ụlọ ọrụ igwe na otu ndị ọrụ igwe si egbochi ha, na otu ọzụzụ na asambodo si arụ ọrụ.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị asambodo ma ọ bụ ikike (license), ị gaghịkwa arụ igwe n'ime ya. A na-amụta ịrụ mill ma ọ bụ lathe naanị n'ụlọ ọrụ igwe ebe onye nkuzi ruru eru na-elekọta gị. Asambodo ọrụ igwe, dị ka nke National Institute for Metalworking Skills (NIMS, òtù na-edobe ụkpụrụ ọrụ igwe na America), na-achọkarị ule ederede na nnwale nka aka.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ ma ọ bụ na kọmputa, na ajụjụ abụọ dị mkpirikpi. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ikpeazụ ị ga-emepụta bụ atụmatụ mmalite CNC nke gị nwere ezi ụbọchị."
  ],
  finalTask: "Mee atụmatụ mmalite CNC nke gị: (1) eserese otu peeji nke mill na lathe, ya na axis X, Y na Z e gosiri; (2) mpempe akwụkwọ ịgụ eserese maka akụkụ omume, ebe i gbakọrọ oke nha maka nha atọ nwere tolerance; (3) obere mmemme omume (ahịrị 8 ruo 12) na-egbutu square ma ọ bụ slot dị mfe, ya na nkọwa ahịrị ọ bụla n'okwu nke gị, na ụzọ ngwá ọrụ ahụ e sere n'akwụkwọ graph; (4) ndepụta setup na nchebe maka akụkụ mbụ nke na-ekpuchi guard, ihe nchebe anya, uwe, chips, coolant, workholding, offsets, dry run na first-article inspection; na (5) atụmatụ nwere ụbọchị na-akpọ aha mmemme ọzụzụ abụọ ma ọ bụ apprenticeship dị nso gị, asambodo NIMS ị ga-achọ (site na saịtị gọọmentị ya), na ụbọchị maka nzọụkwụ ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa na ndị okenye na-achọ ọrụ aka n'ụlọ ọrụ mmepụta: ndị na-achọ ọrụ, ụmụ akwụkwọ sekọndrị na ndị gụchara, ndị agha mbụ, ndị si n'ụlọ mkpọrọ na-alọta, ndị kwagara na mba ọzọ na ndị okenye na-alaghachi n'ọmụmụ ihe. Ụfọdụ emeela klaasị ọrụ aka, ọrụ ụgbọ ala, ọrụ ugbo ma ọ bụ ọrụ nrụzi n'ime ndị agha; ọtụtụ arụbeghị igwe CNC.",
    startingPoint: "Ha nwere ike ịgụ obere ntụziaka, ịgụ teepu nha, na ime mgbakọ ọnụọgụ zuru ezu na ntụpọ (decimal). Ọtụtụ maara na ụlọ ọrụ mmepụta na-eji igwe kọmputa na-achịkwa, mana ha enweghị ike ịkpọ aha igwe ma ọ bụ axis, ịgụ tolerance, ịgụ otu ahịrị G-code, ma ọ bụ ịdepụta usoro setup dị nchebe.",
    gap: "Ndị were mmadụ n'ọrụ, ndị na-akwado apprenticeship na mmemme ọrụ igwe chọrọ ndị maara okwu ndị bụ isi, nwere ike ịgụ eserese na mmemme dị mfe, ma were nchebe kpọrọ ihe. Ndị na-amụ ihe chọrọ ntọala ahụ na atụmatụ nwere ụbọchị, ka ha họrọ ezi ọzụzụ, zere ịtụfu ego, ma bịa njikere ịmụ ihe n'igwe.",
    constraints: [
      "Ọkwa ịgụ ihe: okwu dị mfe na ahịrịokwu dị mkpirikpi (ihe dị ka klaasị 6 ruo 8); a na-akọwa okwu ọrụ igwe ọ bụla",
      "Enweghị ọrụ igwe n'ihe ọmụmụ a: ịrụ mill ma ọ bụ lathe chọrọ ụlọ ọrụ igwe e lekọtara na onye nkuzi ruru eru",
      "Ngwá: ekwentị ma ọ bụ kọmputa ọbá akwụkwọ maka peeji gọọmentị; akwụkwọ graph, pensụl na rula maka eserese na ụzọ ngwá ọrụ",
      "Mgbakọ: ntụpọ ruo ọnọdụ atọ (otu ụzọ n'ime puku nke inch) na millimeter dị mfe; e nyere ihe atụ a gbakọrọ agbakọ",
      "Oge: nkuzi nkeji 5 ruo 6 nke dabara n'akụkụ ụlọ akwụkwọ, ọrụ na oge nzukọ",
      "G-code dị iche site n'otu igwe ruo n'ọzọ: ndị na-amụ ihe na-agbaso akwụkwọ ntụziaka (manual) nke igwe ha na-amụ ihe na ya"
    ],
    prerequisites: "Ọ dịghị. \"Everyday Math\" na-enyere aka na ntụpọ; \"Starting a Career in the Skilled Trades\" na-enyere ndị na-amụ ihe aka ịhọrọ ọrụ aka, ihe ọmụmụ a na-abanyekwa omimi n'ọrụ igwe."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ụkpụrụ) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị foto ma ọ bụ nkọwa igwe na akụkụ dị n'ụlọ ọrụ igwe", action: "ịkpọ aha igwe CNC na-emepụta akụkụ ọ bụla ma gosi axis X, Y na Z ya", standard: "nweta opekata mpe 4 n'ime 5 nke ọma" },
    { id: "O2", condition: "Mgbe e nyere gị eserese akụkụ dị mfe nwere nha na tolerance", action: "ide nha kacha nta na nke kacha ukwuu a kwadoro maka nha ọ bụla ma kpebie ma akụkụ a tụrụ gafere", standard: "na-enweghị njehie mgbakọ na nha 3" },
    { id: "O3", condition: "Mgbe e nyere gị obere mmemme CNC nwere ahịrị 8 ruo 12", action: "ịkọwa ihe ahịrị G-code na M-code ọ bụla na-eme ma see ụzọ ngwá ọrụ ahụ n'akwụkwọ graph", standard: "na mmegharị, ebe mmalite na ebe njedebe ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị usoro setup na akụkụ mbụ a gwakọtara agwakọta", action: "ịhazi usoro setup dị nchebe na akụkụ mbụ n'usoro ziri ezi", standard: "ya na dry run na first-article inspection tupu mmepụta" },
    { id: "O5", condition: "Mgbe e nyere gị ihe egwu ise a na-ahụkarị n'ụlọ ọrụ igwe", action: "ịkpọ aha ihe nchebe maka ihe egwu ọ bụla: guard, ihe nchebe ahụ, omume dị nchebe ma ọ bụ lockout", standard: "ịkpọ aha ihe nchebe ziri ezi maka ise niile" },
    { id: "O6", condition: "Iji peeji gọọmentị maka ọzụzụ, apprenticeship na NIMS", action: "ide atụmatụ nwere ụbọchị iji nweta ọzụzụ na asambodo ọrụ igwe", standard: "ya na mmemme abụọ, otu asambodo na ụbọchị maka nzọụkwụ ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Igwe, eserese na mmemme",
      lessons: [
        {
          title: "Ihe igwe CNC na-eme na otu ha si aga",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kpọọ aha igwe CNC ndị bụ isi ma gosi axis X, Y na Z ha.",
          text: [
            "CNC pụtara computer numerical control: igwe kọmputa na-achịkwa site n'ọnụọgụ. Igwe CNC na-agbaso mmemme iji mee ka ngwá ọrụ na-egbutu ihe ma ọ bụ akụkụ ahụ gaa n'ụzọ kpọmkwem. Machining pụtara igbupụ ihe n'akụkụ ahụ, n'obere iberibe (chips), ruo mgbe akụkụ ahụ nwere ọdịdị na nha ziri ezi.",
            "CNC mill (ma ọ bụ machining center) na-ejide akụkụ ahụ ka ọ ghara ịkpa n'elu tebụl, ebe ngwá ọrụ na-agba gburugburu na-egbutu ya. Ọ na-eme ihu dị larịị, pocket, slot na oghere, dị ka bracket ma ọ bụ efere injin. CNC lathe (ma ọ bụ turning center) na-eme ka akụkụ ahụ gbaa gburugburu, ebe ngwá ọrụ na-anọghị ọtọ na-egbutu ya. Ọ na-eme akụkụ gburugburu, dị ka shaft, pin na bushing. Ụlọ ọrụ igwe na-ejikwa CNC router maka osisi na plastik, na CNC plasma na laser maka mpempe igwe.",
            "Ụzọ ọ bụla igwe nwere ike isi gaa bụ axis. N'ọtụtụ vertical mill, X na-aga aka ekpe na aka nri, Y na-abịakwute gị ma na-aga n'ebe ọzọ, Z na-arịgo ma na-agbada ya na spindle. Na lathe, Z na-aga n'ogologo akụkụ na-agba gburugburu, X na-agafe ya, nke na-edozi diameter (obosara gburugburu). Igwe ndị ka ukwuu na-agbakwụnye axis na-atụgharị, ya mere igwe \"5-axis\" nwekwara ike ịkpọda ma tụgharịa akụkụ ahụ."
          ],
          words: [["CNC", "computer numerical control: igwe na-agbaso mmemme nwere ọnụọgụ na koodu."], ["Mill", "igwe ebe ngwá ọrụ na-agba gburugburu na-egbutu akụkụ e jidere n'elu tebụl."], ["Lathe", "igwe ebe akụkụ ahụ na-agba gburugburu, ngwá ọrụ anaghị akpa na-egbutu ya; ọ na-eme akụkụ gburugburu."], ["Spindle", "akụkụ igwe na-eme ka ngwá ọrụ (mill) ma ọ bụ akụkụ ahụ (lathe) gbaa gburugburu."], ["Axis", "otu ụzọ igwe nwere ike isi gaa, dị ka X, Y ma ọ bụ Z."]],
          slides: [
            { title: "CNC = computer numerical control", bullets: ["Mmemme na-eme ka ngwá ọrụ ma ọ bụ akụkụ ahụ gaa n'ụzọ kpọmkwem", "Machining na-egbupụ ihe n'obere iberibe (chips)"] },
            { title: "Mill na lathe", bullets: ["Mill: akụkụ anaghị akpa, ngwá ọrụ na-agba na-egbutu: ihu, pocket, slot, oghere", "Lathe: akụkụ na-agba gburugburu, ngwá ọrụ anaghị akpa na-egbutu: shaft, pin, bushing"] },
            { title: "Axis na vertical mill", bullets: ["X: aka ekpe na aka nri", "Y: na-abịakwute gị na-aga n'ebe ọzọ", "Z: elu na ala ya na spindle"] },
            { title: "Axis na lathe", bullets: ["Z: n'ogologo akụkụ ahụ", "X: na-agafe akụkụ ahụ; ọ na-edozi diameter", "Igwe 5-axis na-agbakwụnye ịkpọda na ịtụgharị"] }
          ],
          tryIt: "Chọta akụkụ igwe ma ọ bụ plastik atọ n'ụlọ (bolt, hinge ọnụ ụzọ, okpu pen, akụkụ igwe kwụ otu ebe). Maka nke ọ bụla, dee \"mill\" ma ọ bụ \"lathe\" na ihe kpatara ya. Mgbe ahụ, see vertical mill dị ka igbe nwere spindle n'elu ya, ma were akụ gosi X, Y na Z.",
          youCanNow: "ịkọwa ihe CNC mill na CNC lathe na-emepụta ma gosi axis X, Y na Z na nke ọ bụla.",
          quickCheck: [
            { objective: "O1", q: "Ụlọ ọrụ igwe chọrọ pin igwe gburugburu 500. Kedu igwe kacha dabara?", options: ["CNC plasma cutter", "CNC lathe", "CNC router maka osisi", "Igwe ọkpụkpụ mpempe igwe (sheet metal brake)"], answer: 1, why: "Lathe na-eme ka akụkụ ahụ gbaa gburugburu, ya mere ọ na-eme akụkụ gburugburu dị ka pin na shaft." },
            { objective: "O1", q: "N'ọtụtụ vertical mill, kedu axis na-ebuli ma na-ebuda spindle?", options: ["X", "Y", "A", "Z"], answer: 3, why: "Na vertical mill, Z bụ axis elu na ala nke spindle." }
          ]
        },
        {
          title: "Ịgụ eserese: nha na tolerance",
          objectives: ["O2"],
          minutes: 6,
          goal: "Dee nha kacha nta na nke kacha ukwuu a kwadoro maka nha nwere tolerance ma kpebie ma akụkụ ahụ gafere.",
          text: [
            "Eserese (print, a na-akpọkwa ya blueprint ma ọ bụ drawing) na-egosi akụkụ ahụ site n'akụkụ dị iche iche ma nye nha ọ bụla ị chọrọ. Nha ọ bụla bụ dimension. Ụlọ ọrụ igwe na US na-ejikarị inch e dere ruo ọnọdụ ntụpọ atọ ma ọ bụ anọ; ọtụtụ ụlọ ọrụ na-eji millimeter. Title block, n'otu nkuku eserese ahụ, na-egosi aha akụkụ ahụ, ihe e ji mee ya, unit na general tolerance (tolerance izugbe).",
            "Ọ dịghị akụkụ a pụrụ ime nke zuru oke, ya mere eserese ahụ na-ekwu ole nha nwere ike ịgahie. Ohere ahụ bụ tolerance. \"1.000 ±0.005\" pụtara na nha ahụ nwere ike ịbụ site na 0.995 ruo 1.005 inch. Ọnụọgụ abụọ ndị a bụ limits (oke). Ọ bụrụ na e deghị tolerance n'akụkụ dimension, general tolerance dị na title block ka a na-eji.",
            "Ndị ọrụ igwe na-eji ngwá ọtụtụ nha enyocha nha. Calipers na-atụ nha mpụga, nha ime na omimi ngwa ngwa. Micrometer na-atụ nke ọma karịa n'obere oke. A na-edebe ngwá ndị a ọcha ma were ihe ọtụtụ a ma ama nyochaa ha, n'ihi na ngwá ruru unyi ma ọ bụ nke dara ada nwere ike inye nha na-ezighị ezi."
          ],
          steps: ["Chọta dimension ahụ na unit ya (inch ma ọ bụ mm) n'eserese ahụ.", "Chọta tolerance ya n'akụkụ ya, ma ọ bụ general tolerance na title block.", "Wepụ tolerance maka nha kacha nta; gbakwụnye ya maka nha kacha ukwuu.", "Tụnyere nha a tụrụ: ọ bụrụ na ọ dị n'etiti limits, dimension ahụ gafere."],
          words: [["Print", "eserese akụkụ nwere nha ya niile; a na-akpọkwa ya blueprint."], ["Dimension", "nha e gosiri n'eserese, dị ka ogologo, obosara ma ọ bụ diameter oghere."], ["Tolerance", "ole nha nwere ike ịgahie ma ka dị mma, dị ka ±0.005."], ["Limits", "nha kacha nta na nke kacha ukwuu a kwadoro."], ["Title block", "igbe dị n'eserese nwere aha akụkụ, ihe e ji mee ya, unit na general tolerance."], ["Caliper / micrometer", "ngwá ọtụtụ nha; micrometer na-atụ nke ọma karịa n'obere oke."]],
          slides: [
            { title: "Eserese na-enye nha ọ bụla", bullets: ["Nha ọ bụla bụ dimension", "Inch (ọtụtụ mgbe ntụpọ 3 ma ọ bụ 4) ma ọ bụ millimeter", "Title block: akụkụ, ihe e ji mee ya, unit, general tolerance"] },
            { title: "Tolerance = njehie a kwadoro", bullets: ["1.000 ±0.005 pụtara 0.995 ruo 1.005", "E deghị tolerance? Jiri nke title block"] },
            { title: "Gbakọọ limits", bullets: ["Kacha nta = nha wepụ tolerance", "Kacha ukwuu = nha gbakwụnye tolerance", "N'etiti limits = ọ gafere"] },
            { title: "Ngwá ọtụtụ nha", bullets: ["Calipers: nha mpụga, ime na omimi ngwa ngwa", "Micrometer: nke ọma karịa n'obere oke", "Debe ngwá ọcha ma nyochaa ha"] }
          ],
          tryIt: "Naanị maka omume. Gbakọọ limits maka: (a) 2.500 ±0.010, (b) 0.750 ±0.002, (c) 25.0 ±0.1 mm. Mgbe ahụ kpebie: akụkụ a tụrụ na 0.753 maka (b), ọ gafere? (Azịza: a 2.490 ruo 2.510; b 0.748 ruo 0.752; c 24.9 ruo 25.1 mm; 0.753 karịrị akarị, ya mere ọ dara.)",
          youCanNow: "ịchọta dimension na tolerance ya n'eserese, gbakọọ limits ya, ma kpebie ma akụkụ a tụrụ gafere.",
          quickCheck: [
            { objective: "O2", q: "Eserese kwuru 1.250 ±0.003. Gịnị bụ limits?", options: ["1.247 ruo 1.253", "1.250 ruo 1.253", "1.220 ruo 1.280", "1.247 ruo 1.250"], answer: 0, why: "Wepụ 0.003 maka nha kacha nta ma gbakwụnye 0.003 maka nke kacha ukwuu." },
            { objective: "O2", q: "E deghị tolerance n'akụkụ otu dimension. Ebee ka ị ga-ele?", options: ["Jụọ igwe ahụ", "Chee na ọ bụ ±0.1", "General tolerance dị na title block", "Tolerance ọ bụla dị mma"], answer: 2, why: "Title block na-enye general tolerance maka dimension ndị na-enweghị nke ha." }
          ]
        },
        {
          title: "Ịgụ obere mmemme CNC",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọwaa ihe ahịrị ọ bụla nke obere mmemme G-code na-eme ma see ụzọ ngwá ọrụ ya.",
          text: [
            "Ọtụtụ igwe CNC na-agụ mmemme e dere na G-code. Ahịrị ọ bụla, nke a na-akpọ block, na-enye otu ntụziaka ma ọ bụ ole na ole. G-code na-agwakarị igwe otu ọ ga-esi gaa. M-code na-agbanye ma na-agbanyụ ọrụ igwe. Mkpụrụedemede na ọnụọgụ na-enye nkọwa: X, Y na Z bụ ọnọdụ, F bụ feed rate (ọsọ ngwá ọrụ mgbe ọ na-egbutu), S bụ ọsọ spindle, T na-ahọrọ ngwá ọrụ.",
            "Koodu a na-ahụkarị n'ọtụtụ igwe: G00 bụ mmegharị ọsọ (rapid: ọsọ, ọ naghị egbutu). G01 bụ mmegharị kwụ ọtọ na-egbutu na feed rate. G02 na G03 na-egbutu arc, n'ụzọ elekere na n'ụzọ megidere elekere. G20 na-edozi inch, G21 na-edozi millimeter. G90 pụtara na a na-atụ ọnọdụ site na ebe efu (zero) nke akụkụ ahụ (absolute). M03 na-amalite spindle n'ụzọ elekere, M05 na-akwụsị ya, M08 na-agbanye coolant, M09 na-agbanyụ ya, M30 na-akwụsị mmemme ahụ.",
            "Koodu nwere ike ịdị iche site n'otu njikwa igwe (control) ruo n'ọzọ, ya mere onye ọrụ igwe na-elerịrị manual nke igwe dị n'ihu ya. Ọtụtụ ụlọ ọrụ na-eji software CAM ede mmemme, mana ndị ọrụ igwe ka na-agụ koodu ahụ iji jide njehie tupu ngwá ọrụ amalite ịga. G-code viewer efu na browser nwere ike ise ụzọ mmemme, mana akwụkwọ graph dịkwa mma maka omume."
          ],
          steps: ["Gụọ ahịrị mbụ: unit (G20 ma ọ bụ G21) na ọnọdụ absolute (G90).", "Chọta ngwá ọrụ (T), ọsọ spindle (S) na mmalite spindle (M03).", "Maka mmegharị ọ bụla, dee koodu ahụ (G00 ma ọ bụ G01) na ọnọdụ X, Y na Z.", "Dọba ebe X na Y ọ bụla n'akwụkwọ graph ma jikọọ ha n'usoro: ahịrị ntụpọ ntụpọ maka rapid, ahịrị siri ike maka igbutu.", "Chọta njedebe: nkwụsị spindle (M05), coolant gbanyụrụ (M09) na njedebe mmemme (M30)."],
          words: [["G-code", "koodu, nke ka n'ọtụtụ maka mmegharị, nke igwe CNC na-agụ."], ["M-code", "koodu na-agbanye ma ọ bụ na-agbanyụ ọrụ igwe, dị ka spindle ma ọ bụ coolant."], ["Block", "otu ahịrị nke mmemme CNC."], ["Feed rate (F)", "ọsọ ngwá ọrụ mgbe ọ na-egbutu."], ["Spindle speed (S)", "ọsọ spindle na-agba gburugburu, n'ọnụọgụ ntụgharị kwa nkeji (RPM)."], ["Toolpath", "ụzọ ngwá ọrụ na-agbaso."], ["CAM", "software na-agbanwe ihe nlereanya 3D ka ọ bụrụ mmemme CNC."]],
          slides: [
            { title: "Mmemme bụ ndepụta block", bullets: ["G-code: nke ka n'ọtụtụ bụ mmegharị", "M-code: ọrụ igwe na-agbanye na-agbanyụ", "Ọnọdụ X, Y, Z; F feed; S ọsọ; T ngwá ọrụ"] },
            { title: "G-code a na-ahụkarị", bullets: ["G00 mmegharị rapid, ọ naghị egbutu", "G01 mmegharị kwụ ọtọ na-egbutu", "G02 / G03 arc, n'ụzọ elekere / n'ụzọ megidere elekere", "G20 inch, G21 mm, G90 absolute"] },
            { title: "M-code a na-ahụkarị", bullets: ["M03 spindle na-agba n'ụzọ elekere, M05 spindle akwụsị", "M08 coolant gbanyere, M09 coolant gbanyụrụ", "M30 njedebe mmemme"] },
            { title: "Gụọ ya, wee see ya", bullets: ["Dọba ebe X na Y ọ bụla n'akwụkwọ graph", "Ahịrị ntụpọ ntụpọ = rapid, ahịrị siri ike = igbutu", "Koodu dị iche site na control: lee manual igwe ahụ"] }
          ],
          tryIt: "Naanị maka omume, n'akwụkwọ graph (1 square = 0.1 inch). Kọwaa ahịrị ọ bụla, wee see ya: G20 G90 / T1 M06 / S1500 M03 / G00 X0 Y0 / G00 Z0.1 / G01 Z-0.05 F5.0 / G01 X1.0 / G01 Y1.0 / G01 X0 / G01 Y0 / G00 Z1.0 / M05 / M30. Ị kwesịrị inweta square 1-inch e gbuturu omimi 0.05 inch.",
          youCanNow: "ịgụ obere mmemme CNC n'ahịrị n'ahịrị ma see ụzọ ngwá ọrụ ahụ ga-agbaso.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka G01 X2.0 F10.0 na-agwa igwe ka ọ mee?", options: ["Mmegharị rapid gaa X2.0 n'egbutughị", "Kwụsị spindle", "Gbanye coolant", "Gbutu n'ahịrị kwụ ọtọ gaa X2.0 na feed rate 10"], answer: 3, why: "G01 bụ mmegharị kwụ ọtọ na-egbutu, F na-edozikwa feed rate." },
            { objective: "O3", q: "Kedu koodu na-amalitekarị spindle ka ọ gbaa n'ụzọ elekere?", options: ["M30", "M03", "G00", "M09"], answer: 1, why: "M03 bụ spindle na-agba n'ụzọ elekere n'ọtụtụ control; M30 na-akwụsị mmemme, M09 na-agbanyụ coolant." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Igwe, eserese na mmemme",
        questions: [
          { objective: "O1", q: "Akụkụ bụ efere aluminum dị larịị nwere pocket na oghere anọ. Kedu igwe kacha dabara?", options: ["CNC lathe", "CNC mill", "Teepu nha", "Naanị drill press"], answer: 1, why: "Mill na-eme ihu dị larịị, pocket na oghere n'akụkụ e jidere n'elu tebụl." },
          { objective: "O1", q: "Na lathe, kedu axis na-aga n'ogologo akụkụ na-agba gburugburu?", options: ["Z", "X", "Y", "B"], answer: 0, why: "Na lathe, Z na-aga n'ogologo akụkụ ahụ, X na-agafe ya, na-edozi diameter." },
          { objective: "O2", q: "Shaft ga-abụrịrị 0.500 ±0.001. A tụrụ ya 0.4995. Ọ gafere?", options: ["Mba, ọ dị obere karịa", "Mba, nha ọ bụla na-erughị 0.500 dara", "Ee, ọ dị n'etiti 0.499 na 0.501", "Ị pụghị ịma"], answer: 2, why: "Limits bụ 0.499 ruo 0.501, 0.4995 dịkwa n'etiti ha." },
          { objective: "O3", q: "Otu ahịrị mmemme bụ G00 Z1.0. Gịnị na-eme?", options: ["Ngwá ọrụ na-egbutu gbadaa 1 inch", "Coolant na-agbanye", "Mmemme na-akwụsị", "Ngwá ọrụ na-aga ọsọ, n'egbutughị, ruo Z1.0"], answer: 3, why: "G00 bụ mmegharị rapid; ebe a ọ na-ebuli ngwá ọrụ ahụ pụọ ruo Z1.0." },
          { objective: "O3", q: "Igwe ọzụzụ gị na-eji koodu ị hụbeghị. Gịnị ka ị ga-eme?", options: ["Chee site n'igwe ọzọ", "Lee manual nke control igwe ahụ", "Hichapụ ahịrị ahụ", "Gbaa ya ma lee anya"], answer: 1, why: "Koodu dị iche site na control, ya mere manual igwe ahụ bụ isi mmalite." }
        ]
      }
    },
    {
      name: "Isi 2: Setup, nchebe na ụzọ gị",
      lessons: [
        {
          title: "Ime setup na ịme akụkụ mbụ",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hazie usoro setup dị nchebe na akụkụ mbụ n'usoro ziri ezi.",
          text: [
            "Tupu ụlọ ọrụ igwe emee ọtụtụ akụkụ, mmadụ na-eme setup igwe ahụ ma gosipụta na mmemme ahụ dị mma. Ndị operator ọhụrụ na-amalitekarị site n'itinye akụkụ n'igwe na inyocha nha, wee mụta setup n'okpuru onye isi ọrụ igwe (lead machinist).",
            "Setup pụtara: gụọ eserese na setup sheet, hichaa tebụl ma ọ bụ chuck, jide akụkụ ahụ nke ọma (workholding, dị ka vise ma ọ bụ chuck), tinye ngwá ọrụ ziri ezi, ma dozie offsets. Work offset na-agwa igwe ebe ebe efu (zero) nke akụkụ ahụ dị. Tool offset na-agwa ya ogologo ngwá ọrụ ọ bụla, ka ọnụ ya ruo ebe ziri ezi.",
            "Mgbe ahụ, a na-anwale mmemme ahụ nwayọọ nwayọọ. Dry run na-eme ka igwe gaa ebe ngwá ọrụ nọ n'elu akụkụ ahụ n'enweghị ihe egwu. Single block na-agba otu ahịrị n'otu oge. Mkpịsị feed override na-ebelata ọsọ mmegharị, operator na-edebekwa aka n'akụkụ feed hold ma ọ bụ emergency stop (nkwụsị ihe mberede). Mgbe e gbuturu akụkụ mbụ, a na-atụ ya megide dimension ọ bụla dị n'eserese. Nke a bụ first-article inspection. Naanị mgbe ọ gafere ka akụkụ mmepụta na-amalite."
          ],
          steps: ["Gụọ eserese, setup sheet na mmemme.", "Hichaa tebụl, vise ma ọ bụ chuck ma jide akụkụ ahụ nke ọma.", "Tinye ngwá ọrụ ndị e depụtara na setup sheet.", "Dozie work offset na tool offsets.", "Mee dry run n'elu akụkụ ahụ, wee gbaa single block ebe e wedara feed override.", "Tụọ akụkụ mbụ megide dimension ọ bụla (first-article inspection).", "Malite mmepụta naanị mgbe akụkụ mbụ gafere; na-enyocha akụkụ ka ị na-aga n'ihu."],
          words: [["Setup sheet", "akwụkwọ na-edepụta ngwá ọrụ, workholding na offsets maka otu ọrụ."], ["Workholding", "ihe na-ejide akụkụ ahụ ka ọ ghara ịkpa, dị ka vise, clamp ma ọ bụ chuck."], ["Work offset", "ndozi na-agwa igwe ebe ebe efu nke akụkụ ahụ dị."], ["Tool offset", "ndozi maka ogologo (na nha) ngwá ọrụ ọ bụla, ka ọnụ ya ruo ebe ziri ezi."], ["Dry run", "ịgba mmemme ebe ngwá ọrụ nọ n'ebe dị anya site n'akụkụ ahụ."], ["First-article inspection", "ịtụ akụkụ mbụ megide eserese niile tupu e mee ndị ọzọ."]],
          slides: [
            { title: "Dị njikere", bullets: ["Gụọ eserese, setup sheet na mmemme", "Hichaa ma jide akụkụ ahụ nke ọma", "Tinye ngwá ọrụ ziri ezi"] },
            { title: "Dozie offsets", bullets: ["Work offset: ebe efu nke akụkụ ahụ dị", "Tool offsets: ogologo ngwá ọrụ ọ bụla"] },
            { title: "Nwalee ya nwayọọ nwayọọ", bullets: ["Dry run ebe ngwá ọrụ dị anya site n'akụkụ ahụ", "Single block, e wedara feed override", "Aka n'akụkụ feed hold ma ọ bụ emergency stop"] },
            { title: "Akụkụ mbụ na mbụ", bullets: ["Tụọ dimension ọ bụla dị n'eserese", "Mmepụta na-amalite naanị mgbe ọ gafere", "Na-enyocha akụkụ n'oge ọrụ ahụ"] }
          ],
          tryIt: "Dee nke ọ bụla n'ime ndị a n'obere mpempe akwụkwọ, gwakọta ha, wee hazie ha n'usoro: dozie tool offsets; first-article inspection; hichaa ma jide akụkụ ahụ; dry run; gụọ eserese na setup sheet; single block run; dozie work offset; tinye ngwá ọrụ; malite mmepụta. Tụnyere usoro gị na nzọụkwụ dị na nkuzi a.",
          youCanNow: "ịhazi usoro setup na akụkụ mbụ n'usoro ma kwuo ihe mere dry run na first-article inspection ji abụ tupu mmepụta.",
          quickCheck: [
            { objective: "O4", q: "Kedu ndozi na-agwa igwe ebe ebe efu nke akụkụ ahụ dị?", options: ["Feed rate", "Tool offset", "Work offset", "Ọsọ spindle"], answer: 2, why: "Work offset na-achọta ebe efu nke akụkụ ahụ; tool offsets na-edozi ogologo ngwá ọrụ ọ bụla." },
            { objective: "O4", q: "E gbuturu akụkụ mbụ. Gịnị na-abịa tupu ị gbaa ọrụ ahụ fọdụrụ?", options: ["Tụọ ya megide dimension ọ bụla dị n'eserese", "Tụgharịa feed override ruo n'ọkwa kachasị elu", "Wepụ guard ka ị hụ nke ọma", "Hichapụ mmemme ahụ"], answer: 0, why: "First-article inspection na-egosi na setup na mmemme dị mma tupu mmepụta." }
          ]
        },
        {
          title: "Ịnọ na nchebe n'ụlọ ọrụ igwe",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kpọọ aha ihe nchebe maka ihe egwu ọ bụla a na-ahụkarị n'ụlọ ọrụ igwe.",
          text: [
            "Igwe nwere ike ịpịaji mkpịsị aka ma ọ bụ aka, bepụ akụkụ ahụ, kpọọ ọkụ, ma mee ka mmadụ kpuo ìsì. Ihe egwu ndị bụ isi bụ spindle, chuck na ngwá ọrụ na-agba gburugburu, chips na-efe efe, chips na ọnụ dị nkọ ma dị ọkụ, coolant n'akpụkpọ ahụ, akụkụ dị arọ na mkpọtụ. Iwu OSHA (ụlọ ọrụ US na-ahụ maka nchekwa ọrụ) gbasara machine guarding (29 CFR 1910.212) chọrọ guard na-echebe ndị ọrụ pụọ n'ihe egwu ndị a.",
            "Omume ụlọ ọrụ igwe: yiri ugogbe anya nchebe nwere ihe nchebe n'akụkụ oge niile, na ihe nchebe ntị ebe mkpọtụ dị. Mechie ọnụ ụzọ igwe na guard mgbe ọ na-arụ ọrụ, ma etinyela aka n'ime ruo mgbe spindle kwụsịrị kpamkpam. Ọtụtụ ụlọ ọrụ anaghị ekwe ka mmadụ yiri glove, aka uwe ndị na-akwụghị, ihe ịchọ mma ma ọ bụ ntutu ogologo a na-ekeghị ekeghị n'akụkụ spindle na-agba, n'ihi na ha nwere ike ijide ma dọba gị n'ime. Jiri chip hook ma ọ bụ brush wepụ chips, ọ bụghị aka gị, ma afụla chips n'onwe gị ma ọ bụ ndị ọzọ. Saa coolant n'akpụkpọ ahụ gị ma gụọ safety data sheet (SDS).",
            "Mgbe a na-ehicha, na-arụzi ma ọ bụ na-elekọta igwe, a na-egbanyụ ọkụ ya ma kpọchie ya ka onye ọ bụla ghara ịmalite ya. Nke a bụ lockout/tagout, nke iwu OSHA gbasara ike dị egwu (29 CFR 1910.147) na-ekpuchi, ọ bụkwa naanị ndị ọrụ a zụrụ azụ, e nyere ikike, na-eme ya. Onye nkuzi ruru eru na-akụzi nchebe aka n'ụlọ ọrụ igwe; gbasoo iwu ụlọ ọrụ igwe gị oge ọ bụla."
          ],
          steps: ["Yiri ugogbe anya nchebe nwere ihe nchebe n'akụkụ, na ihe nchebe ntị ebe ọ dị mkpa.", "Wepụ glove, ihe ịchọ mma na aka uwe na-akwụghị; kee ntutu ogologo azụ.", "Lelee na guard na ọnụ ụzọ dị n'ọnọdụ ha ma mechie.", "Chere ka spindle kwụsị kpamkpam tupu imeghe ọnụ ụzọ ma ọ bụ itinye aka n'ime.", "Jiri chip hook ma ọ bụ brush wepụ chips, ọ bụghị aka gị.", "Maka nhicha ma ọ bụ nrụzi, gbasoo usoro lockout/tagout nke ụlọ ọrụ igwe."],
          words: [["Guard", "mkpuchi ma ọ bụ ọnụ ụzọ na-ewepụ aka na chips n'akụkụ na-akpa."], ["Chips", "obere iberibe igwe ma ọ bụ plastik ngwá ọrụ na-egbupụ; ọtụtụ mgbe ha dị nkọ ma dị ọkụ."], ["Coolant", "mmiri na-eme ka ngwá ọrụ na akụkụ ahụ jụọ oyi ma na-asachapụ chips."], ["SDS", "safety data sheet: akwụkwọ na-edepụta ihe egwu ngwaahịa na otu esi echebe onwe gị."], ["Lockout/tagout", "ịgbanyụ na ịkpọchi ọkụ igwe ka onye ọ bụla ghara ịmalite ya n'oge a na-elekọta ya."]],
          slides: [
            { title: "Ihe egwu igwe", bullets: ["Spindle, chuck na ngwá ọrụ na-agba gburugburu", "Chips na-efe efe, dị nkọ ma dị ọkụ", "Coolant n'akpụkpọ ahụ, akụkụ dị arọ, mkpọtụ"] },
            { title: "Chebe onwe gị", bullets: ["Ugogbe anya nchebe nwere ihe nchebe n'akụkụ, oge niile", "Ihe nchebe ntị ebe mkpọtụ dị", "Enweghị glove, ihe ịchọ mma ma ọ bụ aka uwe na-akwụghị n'akụkụ spindle na-agba; kee ntutu"] },
            { title: "Omume dị nchebe", bullets: ["Guard na ọnụ ụzọ mechiri emechi mgbe ọ na-arụ ọrụ", "Chere nkwụsị zuru ezu tupu itinye aka n'ime", "Chip hook ma ọ bụ brush, ọ bụghị aka gị"] },
            { title: "Nlekọta = lockout/tagout", bullets: ["Gbanyụọ ma kpọchie ọkụ tupu nhicha ma ọ bụ nrụzi", "OSHA 29 CFR 1910.147; naanị ndị ọrụ a zụrụ azụ", "Gbasoo iwu ụlọ ọrụ igwe gị oge ọ bụla"] }
          ],
          sources: [
            { name: "OSHA: Machine Guarding standards", url: "https://www.osha.gov/machine-guarding/standards" },
            { name: "OSHA: Control of Hazardous Energy (Lockout/Tagout)", url: "https://www.osha.gov/control-hazardous-energy" }
          ],
          tryIt: "Mee tebụl nwere kọlụm abụọ n'akwụkwọ: Ihe egwu na Ihe nchebe. Jupụta ahịrị ise: spindle na-agba gburugburu, chips na-efe efe, chips dị nkọ ma dị ọkụ, coolant n'akpụkpọ ahụ, igwe a na-arụzi. Dee otu ihe nchebe maka nke ọ bụla, wee tụnyere ha na nkuzi a.",
          youCanNow: "ịkpọ aha ihe egwu ndị bụ isi n'ụlọ ọrụ igwe na ihe nchebe maka nke ọ bụla.",
          quickCheck: [
            { objective: "O5", q: "Chips dị ọkụ na-agbakọ n'akụkụ vise. Kedu otu ị ga-esi wepụ ha?", options: ["Were aka gị hichapụ ha", "Were ikuku fụpụ ha n'ebe onye ọrụ ibe gị nọ", "Tinye aka n'ime mgbe spindle na-agba", "Chere nkwụsị zuru ezu, wee jiri chip hook ma ọ bụ brush"], answer: 3, why: "Chips dị nkọ ma dị ọkụ; chip hook ma ọ bụ brush na-echebe aka gị." },
            { objective: "O5", q: "Igwe chọrọ nrụzi n'ime ya. Gịnị ga-ebu ụzọ mee?", options: ["Wedata feed override", "Onye ọrụ e nyere ikike ga-egbanyụ ma kpọchie ọkụ ya (lockout)", "Meghee ọnụ ụzọ mgbe ọ na-arụ ọrụ", "Yiri glove"], answer: 1, why: "Lockout/tagout na-egbochi onye ọ bụla ịmalite igwe ahụ n'oge nlekọta." }
          ]
        },
        {
          title: "Ọzụzụ, asambodo na atụmatụ CNC gị",
          objectives: ["O6"],
          minutes: 6,
          goal: "Dee atụmatụ nwere ụbọchị iji nweta ọzụzụ na asambodo ọrụ igwe.",
          text: [
            "Ọtụtụ ndị ọrụ igwe na-amụta n'ọrụ, ọtụtụ mgbe na-amalite dị ka operator. Community college na ụlọ akwụkwọ teknụzụ na-enye asambodo na nzere afọ abụọ nke na-ekpuchi ịgụ blueprint na ide mmemme na ịrụ CNC. Registered apprenticeship na-ejikọ ọrụ a na-akwụ ụgwọ na klaasị, ọ na-ewekarị ọtụtụ afọ. Chọọ otu site na Apprenticeship Job Finder dị na apprenticeship.gov. Ndị agha mbụ nwere ike ịjụ maka iji uru agụmakwụkwọ ha, ndị ntorobịa nwere ike ịjụ maka mmemme dị n'ụlọ akwụkwọ ha ma ọ bụ n'ụlọ ọrụ nchọta ọrụ (job center).",
            "Asambodo na-egosi onye were gị n'ọrụ ihe ị nwere ike ime. National Institute for Metalworking Skills (NIMS) na-edobe ụkpụrụ na asambodo maka ọrụ igwe dị iche iche. Ọtụtụ asambodo NIMS nwere akụkụ abụọ: ule gbasara ihe ọmụma ọrụ ahụ, na nnwale nka aka, dị ka ime akụkụ dị ka eserese si kwuo. Lelee aha asambodo na ihe ha chọrọ ugbu a na nims-skills.org. Ụfọdụ ndị were mmadụ n'ọrụ na-ejikwa asambodo CNC ma ọ bụ CAD/CAM sitere n'ụlọ akwụkwọ ma ọ bụ n'aka onye na-emepụta igwe kpọrọ ihe.",
            "Ihe ọmụmụ a na-akwado gị; ọ naghị enye gị asambodo. Kpachara anya na mmemme ọ bụla na-ekwe nkwa ọrụ ma ọ bụ asambodo ngwa ngwa maka nnukwu ego. Jụọ ụlọ akwụkwọ ahụ gbasara oge n'ezi igwe, asambodo ọ na-akwado gị maka ha, na ole n'ime ndị gụchara na-enweta ọrụ."
          ],
          steps: ["Họrọ ebumnuche mbụ: ọrụ operator, mmemme ụlọ akwụkwọ ma ọ bụ apprenticeship.", "Chọta mmemme abụọ dị nso gị: community college ma ọ bụ ụlọ akwụkwọ teknụzụ, na apprenticeship na apprenticeship.gov.", "Chọọ asambodo NIMS maka ọrụ ị chọrọ na nims-skills.org.", "Jụọ mmemme ọ bụla gbasara oge igwe, asambodo, ọnụ ahịa na inweta ọrụ.", "Dee ụbọchị maka nzọụkwụ ọ bụla: itinye akwụkwọ, ịmalite, omume, ule."],
          words: [["Apprenticeship", "ọrụ a na-akwụ ụgwọ nwere ọzụzụ n'ọrụ na klaasị, ọtụtụ mgbe ruo ọtụtụ afọ."], ["Credential", "ihe akaebe, dị ka asambodo, na i gafere ule nka gị."], ["NIMS", "National Institute for Metalworking Skills, nke na-edobe ụkpụrụ na asambodo ọrụ igwe."], ["Performance check", "nnwale aka ebe ị na-eme ọrụ ahụ, dị ka ime akụkụ dị ka eserese si kwuo."]],
          slides: [
            { title: "Ụzọ isi banye", bullets: ["Malite dị ka operator ma mụta n'ọrụ", "Asambodo community college ma ọ bụ ụlọ akwụkwọ teknụzụ", "Registered apprenticeship: ọrụ a na-akwụ ụgwọ gbakwụnye klaasị"] },
            { title: "Asambodo", bullets: ["NIMS: ụkpụrụ na asambodo ọrụ igwe", "Ọtụtụ mgbe ule gbakwụnye nnwale nka aka", "Lelee aha na nzọụkwụ ugbu a na nims-skills.org"] },
            { title: "Jiri amamihe họrọ mmemme", bullets: ["Jụọ maka oge n'ezi igwe", "Jụọ asambodo ọ na-akwado gị maka ha", "Kpachara anya na nkwa ngwa ngwa, dị oke ọnụ"] },
            { title: "Atụmatụ gị nwere ụbọchị", bullets: ["Mmemme abụọ, otu asambodo", "Ụbọchị itinye akwụkwọ, ịmalite, omume na ule"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee atụmatụ mmalite CNC nke gị. See mill na lathe ya na axis ha, gbakọọ limits maka nha atọ nwere tolerance, dee ma kọwaa obere mmemme maka square ma ọ bụ slot ma see ya, dee ndepụta setup na nchebe gị, ma dee atụmatụ nwere ụbọchị nwere mmemme abụọ dị nso gị na otu asambodo NIMS sitere na saịtị gọọmentị ya.",
          youCanNow: "ịchọta ọzụzụ ọrụ igwe dị nso gị, kpọọ aha asambodo ị ga-achọ, ma gbasoo atụmatụ nwere ụbọchị iji ruo ebe ahụ.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ị nwere ike ịchọ registered apprenticeship na US?", options: ["Mgbasa ozi ọrụ na-arịọ ego maka itinye akwụkwọ", "Ozi na soshal midia", "Apprenticeship Job Finder dị na apprenticeship.gov", "Ozi ederede sitere n'aka onye ị na-amaghị"], answer: 2, why: "Apprenticeship.gov bụ saịtị gọọmentị nke US Department of Labor nwere ihe nchọta ọrụ." },
            { objective: "O6", q: "Gịnị ka ọtụtụ asambodo NIMS gụnyere?", options: ["Ule na nnwale nka aka", "Naanị vidiyo n'ịntanetị", "Naanị ego", "Akwụkwọ ozi sitere n'aka enyi"], answer: 0, why: "NIMS na-akọwa ule gbasara ihe ọmụma ọrụ ahụ gbakwụnye nnwale nka aka." }
          ],
          sources: [
            { name: "NIMS: Credentialing", url: "https://www.nims-skills.org/credentialing" },
            { name: "Apprenticeship.gov (US Department of Labor)", url: "https://www.apprenticeship.gov/" },
            { name: "BLS Occupational Outlook Handbook: Machinists and Tool and Die Makers", url: "https://www.bls.gov/ooh/production/machinists-and-tool-and-die-makers.htm" }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Setup, nchebe na ụzọ gị",
        questions: [
          { objective: "O4", q: "Gịnị mere ị ga-eji mee dry run tupu igbutu akụkụ mbụ?", options: ["Ịchọta njehie mmemme ebe ngwá ọrụ dị anya site n'akụkụ ahụ n'enweghị ihe egwu", "Ime ka igwe gaa ọsọ karịa", "Ịwụfe first-article inspection", "Ime ka coolant kpoo ọkụ"], answer: 0, why: "Dry run na-egosi mmegharị n'egbutughị, ya mere a na-ejide njehie n'enweghị ihe egwu." },
          { objective: "O4", q: "Kedu nzọụkwụ na-abịa ozugbo e jidechara akụkụ ahụ ma tinye ngwá ọrụ?", options: ["Malite mmepụta", "First-article inspection", "Dozie work offset na tool offsets", "Zipụ akụkụ ndị ahụ"], answer: 2, why: "A ga-edozirịrị offsets tupu e nwalee mmemme ma gbutu akụkụ mbụ." },
          { objective: "O5", q: "Gịnị mere ọtụtụ ụlọ ọrụ igwe ji machibido glove n'akụkụ spindle na-agba?", options: ["Ha na-eme ka aka gị jụọ oyi", "Ha nwere ike ijide ma dọba aka gị n'ime", "Ha dị oke ọnụ", "Ha na-ezo egbugbu ahụ gị (tattoo)"], answer: 1, why: "Spindle ma ọ bụ ngwá ọrụ na-agba nwere ike ijide glove ma dọba aka ahụ n'ime." },
          { objective: "O5", q: "Kedu ihe nchebe ị na-eyi oge niile n'ụlọ ọrụ igwe?", options: ["Naanị okpu siri ike", "Glove", "Akpụkpọ ụkwụ sandals", "Ugogbe anya nchebe nwere ihe nchebe n'akụkụ"], answer: 3, why: "Chips na-efe efe nwere ike ime ka ị kpuo ìsì, ya mere a na-eyi ihe nchebe anya oge niile." },
          { objective: "O6", q: "Ụlọ akwụkwọ kwere nkwa ọrụ CNC n'otu izu maka nnukwu ego. Gịnị ka ị ga-eme?", options: ["Jụọ maka oge igwe, asambodo na inweta ọrụ, ma tụnyere mmemme ndị ọzọ", "Kwụọ ụgwọ ozugbo", "Nye ha nbanye akaụntụ ụlọ akụ gị", "Bịanye aka n'agụghị ya"], answer: 0, why: "Inyocha ihe mmemme na-enye n'ezie na-echebe oge gị na ego gị." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ntọala Ọrụ Igwe CNC",
    questions: [
      { objective: "O1", q: "Gịnị ka CNC pụtara?", options: ["Central number cutting", "Computer numerical control", "Cut now carefully", "Cold nickel coating"], answer: 1, why: "CNC pụtara computer numerical control." },
      { objective: "O1", q: "Kedu akụkụ e nwere ike ime na CNC lathe karịa?", options: ["Bracket dị larịị nwere slot", "Igbe mpempe igwe", "Shaft gburugburu", "Akara osisi"], answer: 2, why: "Lathe na-eme ka akụkụ ahụ gbaa gburugburu, ya mere ọ na-eme akụkụ gburugburu dị ka shaft." },
      { objective: "O1", q: "Na vertical mill, kedu axis na-abịakwute gị ma na-aga n'ebe ọzọ?", options: ["Y", "Z", "X", "C"], answer: 0, why: "Na vertical mill, Y na-abịakwute operator ma na-aga n'ebe ọzọ." },
      { objective: "O2", q: "Gịnị bụ tolerance?", options: ["Ihe e ji mee akụkụ ahụ", "Ọsọ igwe", "Ole nha nwere ike ịgahie ma ka dị mma", "Aha akụkụ ahụ"], answer: 2, why: "Tolerance bụ njehie a kwadoro na nha." },
      { objective: "O2", q: "Eserese kwuru 3.000 ±0.005. Kedu nha a tụrụ dara?", options: ["2.996", "3.004", "3.000", "3.006"], answer: 3, why: "Limits bụ 2.995 ruo 3.005, ya mere 3.006 karịrị akarị." },
      { objective: "O2", q: "Ebee ka ị na-ahụ unit na general tolerance n'eserese?", options: ["N'ime mmemme", "Na title block", "N'ọnụ ụzọ igwe", "Naanị na setup sheet"], answer: 1, why: "Title block na-edepụta akụkụ, ihe e ji mee ya, unit na general tolerance." },
      { objective: "O2", q: "Kedu ngwá na-atụ nke ọma karịa n'obere oke?", options: ["Micrometer", "Teepu nha", "Rula", "Chip hook"], answer: 0, why: "Micrometer na-atụ nke ọma karịa calipers ma ọ bụ rula n'obere oke ya." },
      { objective: "O3", q: "Kedu koodu na-abụkarị mmegharị rapid, ọ bụghị igbutu?", options: ["G01", "G02", "M08", "G00"], answer: 3, why: "G00 bụ mmegharị rapid iji dozie ọnọdụ." },
      { objective: "O3", q: "Na mmemme CNC, gịnị ka mkpụrụ okwu F na-edozi?", options: ["Nọmba ngwá ọrụ", "Feed rate mgbe ọ na-egbutu", "Ọsọ spindle", "Aha faịlụ"], answer: 1, why: "F bụ feed rate; S bụ ọsọ spindle, T bụ ngwá ọrụ." },
      { objective: "O3", q: "Mmemme malitere na G21. Gịnị ka nke ahụ na-edozi?", options: ["Inch", "Coolant gbanyere", "Millimeter", "Njedebe mmemme"], answer: 2, why: "G21 na-edozi millimeter; G20 na-edozi inch." },
      { objective: "O3", q: "Kedu koodu na-akwụsịkarị mmemme?", options: ["M30", "M03", "G01", "G90"], answer: 0, why: "M30 na-akwụsị mmemme n'ọtụtụ control." },
      { objective: "O4", q: "Gịnị ka tool offset na-agwa igwe?", options: ["Ebe ebe efu nke akụkụ ahụ dị", "Ọsọ ọ ga-eji gbutu", "Coolant ọ ga-eji", "Ogologo ngwá ọrụ ọ bụla, ka ọnụ ya ruo ebe ziri ezi"], answer: 3, why: "Tool offsets na-edozi ogologo ngwá ọrụ ọ bụla; work offset na-edozi ebe efu nke akụkụ ahụ." },
      { objective: "O4", q: "Mgbe ị na-anwale mmemme ọhụrụ, kedu ụzọ dị nchebe isi gbaa ya?", options: ["Ọsọ zuru ezu ebe ọnụ ụzọ ghe oghe", "Single block ebe e wedara feed override", "Ịwụfe dry run", "Ịhapụ igwe mgbe ọ na-arụ ọrụ"], answer: 1, why: "Single block na feed override dị ala na-enye gị ohere ịkwụsị tupu njehie emee." },
      { objective: "O4", q: "Gịnị bụ first-article inspection?", options: ["Ịgụ peeji mbụ nke manual", "Ihicha chip mbụ", "Ịtụ akụkụ mbụ megide dimension ọ bụla dị n'eserese", "Itinye ngwá ọrụ mbụ"], answer: 2, why: "A na-atụ akụkụ mbụ kpam kpam tupu mmepụta amalite." },
      { objective: "O5", q: "Spindle na-ebelata ọsọ mana ọ kwụsịbeghị. Gịnị ka ị ga-eme?", options: ["Chere ruo mgbe ọ kwụsịrị kpamkpam tupu imeghe ọnụ ụzọ", "Tinye aka n'ime jide akụkụ ahụ", "Were aka gị kwụsị ya", "Meghee ọnụ ụzọ ka ị lee nso"], answer: 0, why: "Etinyela aka n'ime ruo mgbe spindle kwụsịrị kpamkpam." },
      { objective: "O5", q: "Kedu iwu OSHA na-ekpuchi lockout/tagout nke ike dị egwu?", options: ["29 CFR 1910.212", "29 CFR 1910.178", "29 CFR 1910.215", "29 CFR 1910.147"], answer: 3, why: "29 CFR 1910.147 bụ iwu OSHA gbasara njikwa ike dị egwu (lockout/tagout)." },
      { objective: "O5", q: "Coolant gbanyere n'aka gị. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Saa ya ma lee SDS maka nchebe", "Hichaa ya n'uwe gị", "Gbakwụnye coolant ọzọ"], answer: 1, why: "Coolant nwere ike ịkpasu akpụkpọ ahụ iwe; saa ya ma gbasoo SDS." },
      { objective: "O6", q: "Gịnị ka ihe ọmụmụ a na-enye gị?", options: ["Asambodo NIMS", "Ikike steeti (license)", "Nkwadebe maka ọzụzụ na ule asambodo", "Ọrụ e kwere nkwa ya"], answer: 2, why: "Ihe ọmụmụ a na-akwado gị; asambodo na-abịa site n'ịgafe ule dị ka ule NIMS na nnwale nka aka." },
      { objective: "O6", q: "Ebee ka ị na-enyocha aha asambodo NIMS na ihe ha chọrọ ugbu a?", options: ["Ozi na soshal midia", "nims-skills.org", "Nkọwa n'okpuru vidiyo", "Mgbasa ozi ọrụ ọ bụla"], answer: 1, why: "Saịtị gọọmentị NIMS nwere asambodo na ihe ha chọrọ ugbu a." },
      { objective: "O6", q: "Kedu ihe kwesịrị ịdị n'ezi atụmatụ mmalite CNC?", options: ["Mmemme abụọ, otu asambodo na ụbọchị maka nzọụkwụ ọ bụla", "Naanị ọchịchọ ịrụ ọrụ n'ụlọ ọrụ mmepụta", "Ego a kwụrụ onye ị na-amaghị", "Enweghị ụbọchị, ka ọ dị nro"], answer: 0, why: "Atụmatụ nwere mmemme a kpọrọ aha, asambodo na ụbọchị na-agbanwe ebumnuche ka ọ bụrụ nzọụkwụ." }
    ]
  },
  // ---- ADDIE: Nyocha ikpeazụ ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 2, 4, 5, 7, 9, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Igwe na axis", objective: "O1", notYet: "Eserese ahụ gwakọtara mill na lathe, ma ọ bụ axis efuola ma ọ bụ ezighị ezi.", meets: "E sere mill na lathe, ya na X, Y na Z e gosiri nke ọma.", exceeds: "Ọ na-akpọkwa aha akụkụ igwe ọ bụla na-eme, na ebe igwe 5-axis na-agbakwụnye mmegharị." },
      { name: "Ịgụ eserese", objective: "O2", notYet: "Otu limit ma ọ bụ karịa ezighị ezi, ma ọ bụ mkpebi gafere/dara ezighị ezi.", meets: "Dimension atọ niile nwere limits ziri ezi na mkpebi gafere/dara ziri ezi.", exceeds: "Ọ na-egosikwa ihe atụ millimeter ma kwuo ngwá ọ ga-eji tụọ nha ọ bụla." },
      { name: "Mmemme na ụzọ ngwá ọrụ", objective: "O3", notYet: "A kọwaghị ahịrị, ma ọ bụ ụzọ e sere adabaghị na koodu ahụ.", meets: "A kọwara ahịrị ọ bụla, ụzọ e sere dabakwara na koodu ahụ, ya na rapid na igbutu e gosiri.", exceeds: "Ọ na-achọpụtakwa ma dozie otu njehie onye mmekọ ma ọ bụ onye nkuzi tinyere na mmemme ahụ." },
      { name: "Ndepụta setup na nchebe", objective: "O5", notYet: "Ndepụta ahụ hapụrụ guard, ihe nchebe anya, uwe ma ọ bụ chips.", meets: "Ọ na-ekpuchi guard, ihe nchebe anya na ntị, uwe, chips, coolant na lockout maka nlekọta.", exceeds: "Ọ na-akọwakwa n'otu obere ahịrị ihe mere ihe ọ bụla ji dị mkpa." },
      { name: "Usoro setup", objective: "O4", notYet: "Mmepụta malitere tupu dry run ma ọ bụ first-article inspection.", meets: "Nzọụkwụ dị n'usoro, ya na offsets, dry run na first-article inspection tupu mmepụta.", exceeds: "Ọ na-agbakwụnyekwa nyocha n'oge ọrụ ahụ na-aga." },
      { name: "Atụmatụ nwere ụbọchị", objective: "O6", notYet: "Enweghị ezi mmemme, enweghị asambodo, ma ọ bụ enweghị ụbọchị.", meets: "Ezi mmemme abụọ dị nso onye na-amụ ihe, otu asambodo NIMS sitere na saịtị gọọmentị ya na ụbọchị maka nzọụkwụ ọ bụla.", exceeds: "Ọ na-edepụtakwa ajụjụ a jụrụ mmemme ọ bụla na azịza ha." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere akwụkwọ na mmemme ọrụ igwe, apprenticeship ma ọ bụ ọrụ operator n'ime ụbọchị 90",
      "Ndị na-amụ ihe nwetara asambodo NIMS ma ọ bụ asambodo ọrụ igwe ọzọ n'ime otu afọ",
      "Ndị na-amụ ihe e were n'ọrụ dị ka machine operator, CNC operator ma ọ bụ apprentice, na akụkọ ndị were mmadụ n'ọrụ na-emekọ ihe gbasara njikere ndị ọrụ ọhụrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa ọbá akwụkwọ maka peeji gọọmentị (nims-skills.org, apprenticeship.gov)",
      "Akwụkwọ graph, pensụl, rula na igwe mgbakọ (calculator)",
      "Nhọrọ: G-code viewer efu na browser iji nyochaa ụzọ ngwá ọrụ e sere",
      "Nhọrọ, ya na onye nkuzi: calipers na micrometer iji mee omume ịgụ nha n'akụkụ atụ",
      "Ihe dị ka nkeji 75 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meekọọ ule mbido ọnụ, wee mee otu isi n'oge ọ bụla, ebe a na-eme ọrụ \"Nwalee ya ugbu a\" n'ihu ọha.",
      "Enweghị ọrụ igwe n'ihe ọmụmụ a. Ọ bụrụ na ị na-eme ya n'ụlọ ọrụ igwe, ndị na-amụ ihe na-ele anya naanị ma ha anaghị emetụ igwe aka ma ọ bụrụ na onye nkuzi ruru eru anaghị elekọta ha, ya na guard niile na ihe nchebe niile n'ọnọdụ ha.",
      "Chetara ndị na-amụ ihe na G-code dị iche site na control; ọ bụrụ na mmemme gị na-eji otu igwe kpọmkwem, kesaa ndepụta koodu ya.",
      "Maka ọrụ ụzọ ngwá ọrụ, tinye otu njehie n'obere mmemme (M05 efuola ma ọ bụ uru X ezighị ezi) ma mee ka ndị mmekọ chọta ya.",
      "Jiri rubric nye ọrụ ikpeazụ akara ma nye nzaghachi n'otu ahịrị Ọ ruchabeghị n'otu oge.",
      "Kpọọ onye ọrụ igwe obodo, onye na-akwado apprenticeship ma ọ bụ onye nkuzi community college ka ọ kọọ maka ezi ọrụ na ọzụzụ dị n'obodo gị."
    ]
  }
};
