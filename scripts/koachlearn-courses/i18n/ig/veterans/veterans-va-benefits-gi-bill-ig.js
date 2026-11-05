"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-va-benefits-gi-bill.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-va-benefits-gi-bill-ig",
  lang: "ig",
  translationOf: "veterans-va-benefits-gi-bill",
  category: "Veterans (military)",
  name: "Uru VA na GI Bill",
  skills: "Ịkwado akwụkwọ gị, Itinye arịrịọ maka nkwụghachi nkwarụ, Ịrịọ maka nlekọta ahụike VA, Ịghọta GI Bill, Ịrịọ maka uru agụmakwụkwọ, Inweta enyemaka n'efu site n'aka VSO VA kwadoro",
  outcome: "ime ma malite atụmatụ uru VA gị: ịchịkọta akwụkwọ gị, ịrịọ maka nkwụghachi nkwarụ, nlekọta ahụike ma ọ bụ GI Bill n'ụzọ ziri ezi, na inweta enyemaka n'efu site n'aka Veterans Service Officer VA kwadoro kama ịkwụ mmadụ ụgwọ ka o tinye arịrịọ gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị agha ochie (veterans), ndị agha na-akwado ịpụ n'ọrụ agha, na ndị ezinụlọ na-enyere ha aka. Ọtụtụ ndị agha ochie anaghị arịọ maka uru ha ruru, ma ọ bụ na-echere ọtụtụ afọ, n'ihi na usoro ahụ dị ka ihe siri ike.",
    "Ị ga-achịkọta akwụkwọ VA na-arịọ, mụta ụzọ e si etinye arịrịọ nkwarụ na ịrịọ maka nlekọta ahụike, mụta ihe GI Bill nwere ike ịkwụ ụgwọ ya na otu esi arịọ ya, ma chọta onye nnọchite anya VA kwadoro, n'efu, ka o nyere gị aka. Ị ga-amụtakwa ihe ịdọ aka na ntị gbasara ndị na-ana ego maka itinye arịrịọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Iwu VA, fọm na oge ọ na-ewe na-agbanwe, ya mere lelee ihe niile na va.gov ma ọ bụ n'aka onye nnọchite anya a kwadoro tupu i tinye arịrịọ."
  ],
  finalTask: "Mee atụmatụ uru VA gị: (1) ndepụta akwụkwọ gị, malite na DD214 gị; (2) uru ọ bụla ị ga-arịọ (nkwụghachi nkwarụ, nlekọta ahụike, agụmakwụkwọ) na otu ị ga-esi arịọ ya; (3) ọ bụrụ na ị ga-eji GI Bill, kedu mmemme, kedu ụlọ akwụkwọ ma ọ bụ ọzụzụ, na ihe ị chọrọ maka ya; (4) aha na ozi kọntaktị nke onye nnọchite anya ma ọ bụ VSO VA kwadoro i ji ngwa nchọta VA chọta; (5) ihe ịdọ aka na ntị atọ nke onye a na-ekwesịghị ịkwụ ụgwọ ka o tinye arịrịọ gị. Wee mee nzọụkwụ mbụ n'otu uru.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha ochie, ndị agha na-akwado ịpụ n'ọrụ agha, na ndị ezinụlọ na-enyere ha aka. Ọtụtụ arịọbeghị maka uru ha ruru, ma ọ bụ echerela ọtụtụ afọ n'ihi na usoro ahụ dị ka ihe siri ike.",
    startingPoint: "Ha nwere ike iji ekwentị ma ọ bụ kọmputa, ha nwekwara DD214 ha, ma ọ bụ nwee ike ịrịọ ya. Ọtụtụ amaghị fọm ha ga-eji, otu esi echebe ụbọchị mmalite arịrịọ, otu mmemme GI Bill si dị iche, ma ọ bụ na enyemaka a kwadoro bụ n'efu.",
    gap: "Ndị agha ochie na-atụfu ego na nlekọta site n'ịghara ịrịọ, site n'ịhapụ ụbọchị njedebe, ma ọ bụ site n'ịkwụ ndị na-ekwesịghị ịna ego ụgwọ ka ha tinye arịrịọ. Ndị na-amụ ihe chọrọ atụmatụ doro anya: akwụkwọ dị njikere, ụzọ ziri ezi isi rịọ uru ọ bụla, atụmatụ GI Bill, na onye nnọchite anya VA kwadoro n'efu.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu VA",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa; a na-akọwakwa arịrịọ e dere n'akwụkwọ",
      "Nzuzo: enweghị nọmba Social Security, ozi ahụike ma ọ bụ nbanye va.gov n'ime ngwa enyemaka AI ma ọ bụ n'aka ndị enyemaka a na-akwadoghị",
      "Fọm, iwu na nọmba ekwentị na-agbanwe, ya mere ndị na-amụ ihe na-elele ha na va.gov tupu ha eme ihe",
      "Mkpebi gbasara ahụike na iwu na-aga n'aka VA ma ọ bụ onye nnọchite anya a kwadoro, ọ bụghị ihe ọmụmụ a"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Tupu ị rịọ maka uru VA ọ bụla", action: "ịchịkọta akwụkwọ VA na-arịọ, malite na DD214 gị, ma depụta uru ị nwere ike ịrịọ", standard: "ma kaa akara n'akwụkwọ ndị na-efu, ma debe mbipụta n'ebe dị nchebe" },
    { id: "O2", condition: "Maka ọrịa ma ọ bụ nsogbu ahụike i chere na ha metụtara ọrụ agha gị", action: "ịhọrọ otu ị ga-esi tinye arịrịọ nkwarụ ma depụta ihe akaebe maka nke ọ bụla", standard: "site n'iji ụzọ gọọmentị kwadoro na ichebe ụbọchị mmalite gị" },
    { id: "O3", condition: "Site n'iji ndepụta omume", action: "ịkwado ozi maka arịrịọ nlekọta ahụike VA (10-10EZ) ma họrọ otu ị ga-esi rịọ", standard: "ma kaa akara na akụkọ ọrụ agha gị, ihe ọjọọ i metụrụ, inshọransị na ego ị na-enweta dị njikere ma ọ bụ ka a chọrọ" },
    { id: "O4", condition: "Mgbe e nyere gị ebumnuche ọrụ gị", action: "ịkọwa isi mmemme GI Bill na ụdị ọzụzụ abụọ ha nwere ike ịkwụ ụgwọ ya", standard: "ma kpọọ aha ọzụzụ dabara ebumnuche gị" },
    { id: "O5", condition: "Mgbe e nyere gị ụlọ akwụkwọ ma ọ bụ mmemme ọzụzụ abụọ", action: "itụnyere ha na GI Bill Comparison Tool ma hazie arịrịọ uru agụmakwụkwọ gị", standard: "ma nwee eziokwu abụọ gbasara nke ọ bụla, ma lelee arịrịọ gị tupu i zipu ya" },
    { id: "O6", condition: "Mgbe ị chọrọ enyemaka n'arịrịọ gị", action: "ịchọta onye nnọchite anya VA kwadoro n'efu ma mata ihe ịdọ aka na ntị nke onye a na-ekwesịghị ịkwụ ụgwọ", standard: "ma dee aha onye nnọchite anya ahụ, ozi kọntaktị ya na ihe ịdọ aka na ntị atọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịrịọ maka uru VA",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịkwado onwe gị: akwụkwọ gị na ndepụta uru gị",
          minutes: 5,
          goal: "Chịkọta akwụkwọ VA na-arịọ ma depụta uru ị nwere ike ịrịọ.",
          text: [
            "Uru VA bụ ihe ị ruru site n'ọrụ agha gị. Ndị a na-ahụkarị gụnyere nkwụghachi nkwarụ (ego a na-akwụ kwa ọnwa maka ọrịa ọrụ agha kpatara ma ọ bụ mere ka ọ ka njọ), nlekọta ahụike VA, uru agụmakwụkwọ dị ka GI Bill, na Veteran Readiness and Employment (enyemaka ịkwado maka ọrụ). E nwere ndị ọzọ, dị ka enyemaka mbinye ego ụlọ, ụgwọ ezumike (pension) na uru olili ozu. Nke ọ bụla nwere iwu nke ya.",
            "Akwụkwọ kacha mkpa bụ DD214 gị ma ọ bụ akwụkwọ ọpụpụ ọzọ. VA na-eji ya akwado na ị rụrụ ọrụ agha. Debe mbipụta ya n'ebe dị nchebe. Ọ bụrụ na ịchọtaghị nke gị, va.gov na-akọwa otu esi arịọ akwụkwọ ọrụ agha gị.",
            "Ihe ndị ọzọ VA nwere ike ịrịọ: nọmba Social Security gị (nọmba njirimara gọọmentị US), ozi ụlọ akụ maka iziga ego ozugbo (direct deposit), akwụkwọ ahụike gị na aha ndị dọkịta gị, ozi gbasara di ma ọ bụ nwunye gị na ndị dabeere na gị, kaadị inshọransị, na ego ị nwetara n'afọ gara aga maka ụfọdụ mkpebi nlekọta ahụike.",
            "Mepee akaụntụ nbanye na va.gov ka i wee nwee ike ịrịọ n'ịntanetị, bulite akwụkwọ ma lelee ọnọdụ arịrịọ gị. Jiri naanị saịtị gọọmentị ahụ. Ekesala nbanye gị na onye ọ bụla, edekwala nọmba Social Security gị ma ọ bụ ozi ahụike gị n'ime ngwa enyemaka AI mgbe ọ bụla."
          ],
          steps: ["Chọta DD214 gị ma ọ bụ akwụkwọ ọpụpụ ọzọ ma mee mbipụta ya.", "Chịkọta akwụkwọ ahụike na ndepụta ndị dọkịta gị.", "Dee uru ị chọrọ ileba anya: nkwarụ, nlekọta ahụike, agụmakwụkwọ, ndị ọzọ.", "Mepee akaụntụ nbanye na va.gov.", "Debe ihe niile n'otu faịlụ."],
          words: [["DD214", "akwụkwọ na-egosi ọrụ agha gị na otu i si pụọ n'ọrụ ahụ."], ["Nkwụghachi nkwarụ (disability compensation)", "ego a na-akwụ kwa ọnwa, na-enweghị ụtụ isi, maka ọrịa ọrụ agha kpatara ma ọ bụ mere ka ọ ka njọ."], ["Onye dabeere na gị (dependent)", "di ma ọ bụ nwunye, nwa ma ọ bụ onye ezinụlọ ọzọ na-adabere na gị."]],
          slides: [
            { title: "Uru ị ruru", bullets: ["Nkwụghachi nkwarụ", "Nlekọta ahụike VA", "Agụmakwụkwọ: GI Bill", "Veteran Readiness and Employment, na ndị ọzọ"] },
            { title: "Akwụkwọ gị kacha mkpa", bullets: ["DD214 ma ọ bụ akwụkwọ ọpụpụ ọzọ", "Debe mbipụta n'ebe dị nchebe", "Ọ furu efu? va.gov na-akọwa otu esi arịọ akwụkwọ"] },
            { title: "Ihe ndị ọzọ VA nwere ike ịrịọ", bullets: ["Akwụkwọ ahụike na ndị dọkịta", "Ozi gbasara di ma ọ bụ nwunye na ndị dabeere na gị", "Ozi ụlọ akụ maka direct deposit"] },
            { title: "Akaụntụ va.gov gị", bullets: ["Rịọ, bulite ma lelee ọnọdụ n'ịntanetị", "Jiri naanị saịtị gọọmentị ahụ", "Ekesala nbanye gị mgbe ọ bụla"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Mee faịlụ (n'akwụkwọ ma ọ bụ faịlụ dị nchebe na kọmputa nke gị) ma tinye n'ime ya, ma ọ bụ depụta ihe na-efu: DD214 gị, akwụkwọ ahụike, ndepụta ndị dọkịta gị na ozi gbasara ndị dabeere na gị. Dee uru ị chọrọ ileba anya.",
          youCanNow: "ịchịkọta akwụkwọ VA na-arịọ ma depụta uru ị nwere ike ịrịọ.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ị ga-eji debe mbipụta DD214 gị n'ebe dị nchebe?", options: ["Ka i nwee ike itinye ya n'ịntanetị", "Ka AI nwee ike ịgụ ya", "VA na-eji ya akwado ọrụ agha gị, ị ga-achọkwa ya ọzọ", "Ọ na-akwụsị ịrụ ọrụ mgbe otu afọ gachara"], answer: 2, why: "DD214 gị na-akwado ọrụ agha gị maka ọtụtụ uru, ya mere debe mbipụta ya n'ebe dị nchebe." },
            { objective: "O1", q: "Ị chọrọ ka ngwa enyemaka AI nyere gị aka ịghọta uru gị. Gịnị ka ị ga-ahapụ?", options: ["Nọmba Social Security gị na ozi ahụike gị", "Aha uru ahụ", "Okwu \"veteran\"", "Ajụjụ gị"], answer: 0, why: "Nọmba nzuzo na ozi ahụike anaghị abanye n'ime ngwa enyemaka AI mgbe ọ bụla." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Itinye arịrịọ maka nkwụghachi nkwarụ",
          minutes: 6,
          goal: "Họrọ otu ị ga-esi tinye arịrịọ nkwarụ ma chebe ụbọchị mmalite gị.",
          text: [
            "Ị nwere ike itinye arịrịọ nkwarụ n'ịntanetị na va.gov, site na mail (akwụkwọ ozi) site n'iji VA Form 21-526EZ, n'onwe gị n'ọfịs mpaghara VA (regional office), ma ọ bụ site n'enyemaka onye nnọchite anya a kwadoro. VA kwuru na ịmalite fọm ahụ n'ịntanetị na-edozi ụbọchị nnabata (effective date) gị n'onwe ya.",
            "Ụbọchị nnabata gị dị mkpa n'ihi na o nwere ike ikpebi mgbe a ga-amalite ịgụ ụgwọ gị. Ọ bụrụ na i bido n'ịntanetị, VA ga-eji ụbọchị i bidoro dị ka ụbọchị arịrịọ gị ma ọ bụrụ na i mechaa ya n'ime ụbọchị 365. Ọ bụrụ na i tinye ya n'akwụkwọ, ị nwere ike ibu ụzọ zipu intent to file (ozi na-ekwu na ị ga-etinye arịrịọ) iji jide ụbọchị nnabata nwere ike ịbụ nke gị mgbe ị na-achịkọta ihe akaebe.",
            "Ihe akaebe na-eme ka arịrịọ gaa nke ọma ma ọ bụ daa. VA na-enyocha DD214 gị ma ọ bụ akwụkwọ ọpụpụ gị na akwụkwọ ọgwụgwọ gị n'oge ọrụ agha (service treatment records). Tinye ihe i nwere: akwụkwọ dọkịta onwe gị, na okwu e dere site n'aka gị ma ọ bụ ndị hụrụ otu ọrịa ahụ si emetụta gị. Depụta ọrịa ọ bụla i kwenyere na ọ metụtara ọrụ agha gị.",
            "Mgbe i tinyechara arịrịọ, VA nwere ike ịhazi nnyocha ahụike (exam). Gaa na ya. Lelee ọnọdụ arịrịọ gị na va.gov. VA na-ebipụta oge ọ na-ewe n'ozuzu, nke na-agbanwe, ya mere lelee va.gov maka nọmba ugbu a. Ọ bụrụ na ị kwenyeghị na mkpebi, e nwere ụzọ isi rịọ maka nyochaghachi; onye nnọchite anya a kwadoro nwere ike inyere gị aka."
          ],
          steps: ["Kpebie otu ị ga-esi tinye ya: n'ịntanetị, site na mail (VA Form 21-526EZ), n'onwe gị, ma ọ bụ site n'aka onye nnọchite anya a kwadoro.", "Ọ bụrụ n'ịntanetị, bido fọm ahụ iji dozie ụbọchị gị, ma mechaa ya n'ime ụbọchị 365.", "Ọ bụrụ n'akwụkwọ, chee echiche ibu ụzọ zipu intent to file.", "Depụta ọrịa ọ bụla ma chịkọta ihe akaebe gị.", "Gaa na nnyocha VA ọ bụla ma lelee ọnọdụ gị na va.gov."],
          words: [["Ụbọchị nnabata (effective date)", "ụbọchị VA na-eji ekpebi mgbe a ga-amalite ịgụ ụgwọ uru gị."], ["Intent to file", "ozi nye VA na ị ga-etinye arịrịọ, nke nwere ike ijide ụbọchị nnabata gị mgbe ị na-achịkọta ihe akaebe."], ["Ihe akaebe (evidence)", "akwụkwọ na okwu e dere ndị na-akwado arịrịọ gị."], ["Njikọ ọrụ agha (service connection)", "njikọ dị n'etiti ọrịa ma ọ bụ nsogbu ahụike na ọrụ agha gị."]],
          slides: [
            { title: "Ụzọ anọ isi tinye arịrịọ", bullets: ["N'ịntanetị na va.gov", "Site na mail: VA Form 21-526EZ", "N'onwe gị n'ọfịs mpaghara VA", "Site n'aka onye nnọchite anya a kwadoro"] },
            { title: "Chebe ụbọchị mmalite gị", bullets: ["Ịntanetị: ụbọchị i bidoro na-agụ ma i mechaa n'ime ụbọchị 365", "Akwụkwọ: chee echiche ibu ụzọ zipu intent to file"] },
            { title: "Ihe akaebe na-eme ka arịrịọ gaa nke ọma", bullets: ["DD214 na akwụkwọ ọgwụgwọ n'oge ọrụ agha", "Akwụkwọ dọkịta onwe gị", "Okwu e dere site n'aka gị na ndị hụrụ ya"] },
            { title: "Mgbe i tinyechara ya", bullets: ["Gaa na nnyocha VA gị", "Lelee ọnọdụ na va.gov", "Ị kwenyeghị? Jụọ onye nnọchite anya a kwadoro maka nyochaghachi"] }
          ],
          sources: [{ name: "VA: How to file a VA disability claim", url: "https://www.va.gov/disability/how-to-file-claim/" }],
          tryIt: "Dee ọrịa ma ọ bụ nsogbu ahụike ọ bụla i chere nwere ike ịmetụta ọrụ agha gị. N'akụkụ nke ọ bụla, dee otu ihe akaebe i nwere ma ọ bụ i nwere ike inweta. Wee kpebie ụzọ ị ga-esi tinye arịrịọ ma dee ya n'elu.",
          youCanNow: "ịhọrọ otu ị ga-esi tinye arịrịọ nkwarụ, ichebe ụbọchị nnabata gị na ịchịkọta ihe akaebe maka ọrịa ọ bụla.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke bụ ụzọ gọọmentị kwadoro isi tinye arịrịọ nkwarụ?", options: ["Iziga ozi ederede nye onye ị na-amaghị na-ekwu na ọ ga-enyere aka", "Itinye ya n'otu ìgwè na soshal midia", "Iziga email nye ụlọ ọrụ na-ana pasentị", "N'ịntanetị na va.gov"], answer: 3, why: "Itinye ya n'ịntanetị na va.gov bụ otu n'ime ụzọ VA kwadoro." },
            { objective: "O2", q: "I depụtara nsogbu ikpere sitere n'ọrụ agha. Gịnị ka ị ga-ede n'akụkụ ya?", options: ["Ọ dịghị ihe; VA ga-achọta ihe niile", "Otu ihe akaebe, dị ka akwụkwọ ọgwụgwọ n'oge ọrụ agha ma ọ bụ akwụkwọ dọkịta", "Ịkọ ọkwa nkwarụ (rating) gị", "Okwuntughe va.gov gị"], answer: 1, why: "Ọrịa ọ bụla chọrọ ihe akaebe, dị ka akwụkwọ ọgwụgwọ n'oge ọrụ agha ma ọ bụ akwụkwọ dọkịta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịrịọ maka nlekọta ahụike VA",
          minutes: 4,
          goal: "Rịọ maka nlekọta ahụike VA mgbe ozi ziri ezi dị gị njikere.",
          text: [
            "Nlekọta ahụike VA bụ arịrịọ dị iche na nkwụghachi nkwarụ. Ị na-eji VA Form 10-10EZ, Application for Health Benefits (arịrịọ maka uru ahụike), arịọ ya.",
            "Ị nwere ike ịrịọ n'ịntanetị na va.gov, site na ekwentị na nọmba enyemaka uru ahụike VA 877-222-8387 (VA kwuru na ọ na-arụ ọrụ Mọnde ruo Fraịde, elekere 8:00 nke ụtụtụ ruo elekere 8:00 nke abalị, oge Eastern), site na mail, ma ọ bụ n'onwe gị n'ụlọ ọgwụ ma ọ bụ klinik VA. Onye nnọchite anya a kwadoro nwekwara ike inyere gị aka.",
            "Kwadoo: DD214 gị na akụkọ ọrụ agha gị, gụnyere ihe ọ bụla na-egbu egbu ma ọ bụ dị ize ndụ i metụrụ (exposure); nọmba Social Security nke gị, nke di ma ọ bụ nwunye gị na nke ndị dabeere na gị ruru eru; kaadị inshọransị gị, gụnyere Medicare ma ọ bụ inshọransị si n'ọrụ; na ego ezinụlọ gị nwetara n'afọ gara aga. VA kwuru na ị nwere ike ịhapụ ego ị na-enweta, mana o nwere ike ịchọ ya iji kpebie arịrịọ gị.",
            "Ọmụmaatụ: otu Marine (onye agha mmiri) rụrụ ọrụ na mba ọzọ nwere ụkwara ume ọkụ (asthma) ma chọọ dọkịta isi. Ọ na-arịọ maka nlekọta ahụike n'ịntanetị n'otu izu ahụ ọ na-etinye arịrịọ nkwarụ ya, depụta akụkọ ihe ọ metụrụ, ma hazie oge ịhụ dọkịta mbụ ya ozugbo e debanyere ya aha."
          ],
          steps: ["Chịkọta DD214 gị, akụkọ ihe i metụrụ, nọmba Social Security na kaadị inshọransị.", "Dee ego ezinụlọ gị nwetara n'afọ gara aga.", "Rịọ n'ịntanetị na va.gov, site na ekwentị na 877-222-8387, site na mail, ma ọ bụ n'onwe gị.", "Chere mkpebi VA ma hazie oge ịhụ dọkịta mbụ gị."],
          words: [["VA Form 10-10EZ", "arịrịọ maka uru ahụike VA."], ["Ihe na-egbu egbu i metụrụ (toxic exposure)", "imetụ ihe ọjọọ n'oge ọrụ agha, dị ka ọkụ ebe a na-akpọ ihe mkpofu (burn pits), kemịkalụ ma ọ bụ radieshọn."]],
          slides: [
            { title: "Arịrịọ dị iche", bullets: ["Nlekọta ahụike adịghị otu na arịrịọ nkwarụ", "Fọm: VA Form 10-10EZ"] },
            { title: "Ụzọ isi rịọ", bullets: ["N'ịntanetị na va.gov", "Ekwentị: 877-222-8387", "Site na mail, ma ọ bụ n'onwe gị n'ụlọ ọrụ VA"] },
            { title: "Kwadoo", bullets: ["DD214 na akụkọ ihe i metụrụ", "Nọmba Social Security na kaadị inshọransị", "Ego ezinụlọ gị nwetara n'afọ gara aga"] }
          ],
          sources: [{ name: "VA: How to apply for VA health care", url: "https://www.va.gov/health-care/how-to-apply/" }],
          tryIt: "Dejupụta ndepụta omume maka 10-10EZ: DD214 (i nwere ya ma ọ bụ na i nweghị), akụkọ ihe i metụrụ, kaadị inshọransị, ego ezinụlọ gị nwetara n'afọ gara aga. Kaa akara n'ihe i nwere na ihe ka ị chọrọ, ma họrọ otu ị ga-esi rịọ.",
          youCanNow: "ịrịọ maka nlekọta ahụike VA mgbe ozi ziri ezi dị gị njikere ma mara ụzọ isi rịọ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka VA Form 10-10EZ bụ maka ya?", options: ["Itinye arịrịọ nkwarụ", "Ịrịọ maka nlekọta ahụike VA", "Ịrịọ maka GI Bill", "Ịhọrọ VSO"], answer: 1, why: "10-10EZ bụ arịrịọ maka nlekọta ahụike VA." },
            { objective: "O3", q: "Ị na-edejupụta ndepụta nlekọta ahụike gị. Gịnị ka ị ga-etinye gbasara ọrụ agha gị?", options: ["Ọ dịghị ihe gbasara ọrụ agha gị", "Naanị ọkwa (rank) gị", "Naanị ogige agha kacha amasị gị", "Akụkọ ọrụ agha gị, gụnyere ihe ọ bụla na-egbu egbu ma ọ bụ dị ize ndụ i metụrụ"], answer: 3, why: "VA na-ajụ maka akụkọ ọrụ agha gị na ihe i metụrụ mgbe ị na-arịọ maka nlekọta ahụike." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịrịọ maka uru VA",
        questions: [
          { objective: "O1", q: "Kedu akwụkwọ VA na-eji akwado ọrụ agha gị?", options: ["Akwụkwọ ikike ịnya ụgbọala gị", "Akwụkwọ ụgwọ ọnwa site n'ọrụ nkịtị", "DD214 gị ma ọ bụ akwụkwọ ọpụpụ ọzọ", "Kaadị ndebanye aha ebe mgbatị ahụ"], answer: 2, why: "VA na-enyocha DD214 gị ma ọ bụ akwụkwọ ọpụpụ gị." },
          { objective: "O2", q: "I bidoro arịrịọ nkwarụ n'ịntanetị mana ị chọrọ oge iji nweta akwụkwọ. Ogologo oge ole ka i nwere iji mechaa ya ma debe ụbọchị mmalite gị?", options: ["Ụbọchị 365", "Ụbọchị 7", "Ụbọchị 30", "Ọ dịghị ụbọchị mmalite"], answer: 0, why: "VA kwuru na ụbọchị i bidoro na-agụ ma i mechaa n'ime ụbọchị 365." },
          { objective: "O2", q: "Gịnị ka VA Form 21-526EZ bụ maka ya?", options: ["Ịrịọ maka GI Bill", "Ịrịọ maka nlekọta ahụike VA", "Ịgbanwe adreesị gị", "Ịrịọ maka nkwụghachi nkwarụ site na mail"], answer: 3, why: "Ọ bụ Application for Disability Compensation (arịrịọ maka nkwụghachi nkwarụ)." },
          { objective: "O3", q: "Kedu fọm a na-eji arịọ maka nlekọta ahụike VA?", options: ["DD214", "VA Form 10-10EZ", "VA Form 22-1990", "W-2"], answer: 1, why: "10-10EZ bụ Application for Health Benefits." },
          { objective: "O2", q: "I tinyere arịrịọ nkwarụ. Gịnị ọzọ ka i kwesịrị ime?", options: ["Gaa na nnyocha VA ọ bụla a haziri maka gị", "Leghara akwụkwọ ozi VA anya", "Kwụọ mmadụ ụgwọ ka o mee ka ọ gaa ngwa ngwa", "Tinye otu arịrịọ ahụ ọtụtụ ugboro"], answer: 0, why: "Nnyocha ahụ so na mkpebi ahụ; ịhapụ ya nwere ike imebi arịrịọ gị." }
        ]
      }
    },
    {
      name: "Isi 2: GI Bill na enyemaka n'efu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịghọta GI Bill",
          minutes: 5,
          goal: "Kpọọ aha isi mmemme GI Bill ma depụta ihe ha nwere ike ịkwụ ụgwọ ya.",
          text: [
            "GI Bill na-enyere aka ịkwụ ụgwọ ụlọ akwụkwọ na ọzụzụ. Isi mmemme taa bụ Post-9/11 GI Bill (Chapter 33), maka ndị rụrụ ọrụ agha oge niile (active duty) mgbe September 10, 2001 gachara. O nwere ike inyere aka ịkwụ ụgwọ ụlọ akwụkwọ ma kwụọ ụgwọ ihe ndị ọzọ mgbe ị na-azụ maka ọrụ.",
            "Mmemme ndị ọzọ gụnyere Montgomery GI Bill Active Duty (Chapter 30) na Montgomery GI Bill Selected Reserve (Chapter 1606) maka ndị òtù Reserve na National Guard. Nke ị nwere ike iji dabere n'ọrụ agha gị.",
            "GI Bill abụghị naanị maka mahadum afọ anọ. VA depụtara ihe ndị dị ka nzere mahadum mbụ na nke elu, mmemme nzere na-abụghị mahadum, ọzụzụ n'ọrụ (on-the-job training) na apprenticeship, ule ikike na asambodo, ọzụzụ ịnya ụgbọelu, mmụta n'ịntanetị na ndị ọzọ. Yellow Ribbon Program nwere ike inyere aka ịkwụ ụgwọ akwụkwọ (tuition) Post-9/11 GI Bill anaghị akwụ, n'ụlọ akwụkwọ ndị sonyere na ya.",
            "Ụfọdụ ndị agha nwere ike ibufe uru Post-9/11 ha na-ejibeghị nye di ma ọ bụ nwunye ha ma ọ bụ ụmụ ha. Ọ bụrụ na i nweelarị uru Post-9/11, lelee ole fọdụrụ gị na GI Bill Statement of Benefits (nkwupụta uru GI Bill) gị na va.gov."
          ],
          words: [["GI Bill", "uru agụmakwụkwọ VA na-enyere aka ịkwụ ụgwọ ụlọ akwụkwọ ma ọ bụ ọzụzụ."], ["Post-9/11 GI Bill", "GI Bill maka ndị rụrụ ọrụ agha oge niile mgbe September 10, 2001 gachara (Chapter 33)."], ["Yellow Ribbon Program", "mmemme nwere ike ịkwụ ụgwọ akwụkwọ Post-9/11 GI Bill anaghị akwụ, n'ụlọ akwụkwọ ndị sonyere na ya."], ["Apprenticeship", "ọzụzụ a na-akwụ ụgwọ n'ọrụ maka nka aka (trade)."]],
          slides: [
            { title: "Isi mmemme GI Bill", bullets: ["Post-9/11 GI Bill (Chapter 33)", "Montgomery GI Bill Active Duty (Chapter 30)", "Montgomery GI Bill Selected Reserve (Chapter 1606)"] },
            { title: "Ọ bụghị naanị mahadum", bullets: ["Nzere na mmemme na-abụghị mahadum", "Apprenticeship na ọzụzụ n'ọrụ", "Ule ikike na asambodo"] },
            { title: "Enyemaka ọzọ", bullets: ["Yellow Ribbon: ụgwọ akwụkwọ GI Bill anaghị akwụ", "Ibufe ya nye di ma ọ bụ nwunye ma ọ bụ ụmụ, maka ụfọdụ"] },
            { title: "Lelee ole fọdụrụ gị", bullets: ["GI Bill Statement of Benefits na va.gov"] }
          ],
          sources: [{ name: "VA: About GI Bill benefits", url: "https://www.va.gov/education/about-gi-bill-benefits/" }],
          tryIt: "Dee ọrụ ị chọrọ ịrụ. Wee dee ụdị ọzụzụ abụọ GI Bill na-akwụ ụgwọ ya nwere ike iduga gị ebe ahụ, dịka ọmụmaatụ apprenticeship onye ọkụ eletrik na mmemme asambodo, ma ọ bụ nzere na ule ikike.",
          youCanNow: "ịkpọ aha isi mmemme GI Bill na ijikọ ọzụzụ GI Bill na-akwụ ụgwọ ya na ebumnuche ọrụ.",
          quickCheck: [
            { objective: "O4", q: "Kedu aha ọzọ a na-akpọ Post-9/11 GI Bill?", options: ["Chapter 33", "Form 10-10EZ", "VetCert", "Chapter 1"], answer: 0, why: "Post-9/11 GI Bill bụ Chapter 33." },
            { objective: "O4", q: "Ị chọrọ ịbụ onye ọkụ eletrik n'enweghị nzere mahadum afọ anọ. Gịnị ka ị ga-ede n'atụmatụ gị?", options: ["GI Bill na-akwụ naanị ụgwọ nzere", "Hapụ GI Bill", "Apprenticeship ma ọ bụ ọzụzụ n'ọrụ GI Bill nwere ike inyere aka", "Kwụọ ụgwọ ihe niile n'onwe gị"], answer: 2, why: "GI Bill nwere ike inyere aka na apprenticeship na ọzụzụ n'ọrụ, ọ bụghị naanị nzere." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịrịọ maka GI Bill na ịhọrọ ụlọ akwụkwọ",
          minutes: 5,
          goal: "Rịọ maka uru agụmakwụkwọ ma tụnyere ụlọ akwụkwọ tupu i debanye aha.",
          text: [
            "Rịọ maka uru agụmakwụkwọ n'ịntanetị na va.gov. Ọ bụrụ na ị na-arịọ site na mail, jiri VA Form 22-1990, Application for VA Education Benefits (arịrịọ maka uru agụmakwụkwọ VA), maka Post-9/11 GI Bill na mmemme Montgomery GI Bill. Ndị ezinụlọ na-eji uru e bufere ha na-eji fọm dị iche, VA Form 22-1990e.",
            "Kwadoo: nọmba Social Security gị, ozi ụlọ akụ maka direct deposit, akụkọ agụmakwụkwọ na ọrụ agha gị, na isi ozi gbasara ụlọ akwụkwọ ma ọ bụ mmemme ọzụzụ ahụ. VA kwuru na ị pụghị ịgbanwe arịrịọ ahụ mgbe i zipuchara ya, ya mere bụrụ ụzọ lelee ya.",
            "VA kwuru na ọ na-ewe ihe dị ka ụbọchị 30 n'ozuzu iji hazie arịrịọ agụmakwụkwọ, mana lelee va.gov maka oge ugbu a. Mgbe a nabatara gị, VA na-ezite Certificate of Eligibility (asambodo nruru eru). Nye onye na-akwado aha n'ụlọ akwụkwọ gị (school certifying official) otu mbipụta ya; a na-ahụkarị onye a n'ọfịs ndị agha ochie ma ọ bụ ọrụ agha nke ụlọ akwụkwọ ahụ.",
            "Tupu i debanye aha, tụnyere ụlọ akwụkwọ site na GI Bill Comparison Tool (ngwa ntụnyere GI Bill) VA na va.gov, ma jụọ ụlọ akwụkwọ ahụ gbasara ụgwọ, ọrụ ndị gụchara na-enweta, na ma ọ sonyere na Yellow Ribbon. Kpachara anya maka ụlọ akwụkwọ na-amanye gị ka i debanye aha ngwa ngwa."
          ],
          steps: ["Họrọ mmemme gị na ụlọ akwụkwọ ma ọ bụ ọzụzụ.", "Tụnyere ya site na GI Bill Comparison Tool na va.gov.", "Chịkọta nọmba Social Security gị, ozi ụlọ akụ, akụkọ agụmakwụkwọ na ọrụ agha.", "Rịọ n'ịntanetị, ma ọ bụ site na mail na VA Form 22-1990.", "Nye onye na-akwado aha n'ụlọ akwụkwọ ahụ Certificate of Eligibility gị."],
          words: [["Certificate of Eligibility (COE)", "akwụkwọ ozi VA na-egosi uru agụmakwụkwọ i nwere na ole ọ dị."], ["School certifying official", "onye n'ụlọ akwụkwọ na-agwa VA na i debanyere aha."], ["VA Form 22-1990", "Application for VA Education Benefits (arịrịọ maka uru agụmakwụkwọ VA)."]],
          slides: [
            { title: "Otu esi arịọ", bullets: ["N'ịntanetị na va.gov", "Site na mail: VA Form 22-1990", "Ndị ezinụlọ na-eji uru e bufere ha: 22-1990e"] },
            { title: "Kwadoo", bullets: ["Nọmba Social Security na ozi ụlọ akụ", "Akụkọ agụmakwụkwọ na ọrụ agha", "Ozi gbasara ụlọ akwụkwọ ma ọ bụ mmemme"] },
            { title: "Mgbe i rịọchara", bullets: ["Ihe dị ka ụbọchị 30 n'ozuzu; lelee va.gov", "Ị ga-enweta Certificate of Eligibility", "Nye ya onye na-akwado aha n'ụlọ akwụkwọ"] },
            { title: "Tụnyere tupu i debanye aha", bullets: ["GI Bill Comparison Tool na va.gov", "Jụọ gbasara ụgwọ, ọrụ ndị gụchara na-enweta, Yellow Ribbon", "Hapụ ebe a na-amanye gị ịbịanye aka ngwa ngwa"] }
          ],
          sources: [
            { name: "VA: How to apply for the GI Bill and related benefits", url: "https://www.va.gov/education/how-to-apply/" },
            { name: "VA: GI Bill Comparison Tool", url: "https://www.va.gov/education/gi-bill-comparison-tool/" }
          ],
          tryIt: "Họrọ ụlọ akwụkwọ ma ọ bụ mmemme ọzụzụ abụọ maka ebumnuche ọrụ gị. Chọọ nke ọ bụla na GI Bill Comparison Tool na va.gov, ma dee eziokwu abụọ gbasara nke ọ bụla na otu ajụjụ ị ga-ajụ ọfịs ndị agha ochie ya.",
          youCanNow: "ịrịọ maka uru GI Bill, ịtụnyere ụlọ akwụkwọ tupu i debanye aha na iji Certificate of Eligibility gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka GI Bill Comparison Tool na-enyere gị aka ime?", options: ["Itinye arịrịọ nkwarụ", "Ịchọta VSO", "Ịtụnyere ụlọ akwụkwọ na mmemme ọzụzụ tupu i debanye aha", "Ịgbanwe GI Bill gị mgbe i zipuchara ya"], answer: 2, why: "Comparison Tool na-egosi eziokwu gbasara ụlọ akwụkwọ na mmemme ka i wee tụnyere ha." },
            { objective: "O5", q: "I dechara arịrịọ GI Bill gị. Gịnị ka ị ga-eme tupu i zipu ya?", options: ["Lelee ya nke ọma, n'ihi na ị pụghị ịgbanwe ya mgbe i zipuchara ya", "Zipu ya ngwa ngwa ma dozie ya emesịa", "Rịọ onye ị na-amaghị ka o zipu ya", "Hapụ ebe ụfọdụ n'edeghị ihe"], answer: 0, why: "Ị pụghị ịgbanwe arịrịọ ahụ mgbe i zipuchara ya, ya mere bụrụ ụzọ lelee ya." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Inweta enyemaka n'efu, na izere ndị na-ana ego maka itinye arịrịọ",
          minutes: 5,
          goal: "Chọta onye nnọchite anya VA kwadoro n'efu ma mata ndị a na-ekwesịghị ịkwụ ụgwọ.",
          text: [
            "Ọ dịghị mkpa ka i tinye arịrịọ naanị gị. VA na-akwado ụdị ndị nnọchite anya atọ: ndị nnọchite anya Veterans Service Organization (VSO), ndị ọka iwu (attorneys) na ndị ọrụ arịrịọ (claims agents). VA kwuru na ọrụ onye nnọchite anya VSO a kwadoro n'arịrịọ gị bụ n'efu mgbe niile. Ha nwere ike inyere aka ịchịkọta ihe akaebe, tinye arịrịọ, rịọ maka nyochaghachi mkpebi, ma soro VA kwuo okwu n'ọnọdụ gị. Ọtụtụ steeti na kanti nwekwara ndị veterans service officer.",
            "Chọta otu site n'iji ngwa VA, \"Find a VA-accredited representative or VSO\", na va.gov. VA kwuru ka ị hụ na onye ọ bụla na-enyere gị aka n'arịrịọ gị bụ onye a kwadoro tupu ị họrọ ya.",
            "Ndị ọka iwu na ndị ọrụ arịrịọ nwere ike ịna ego, mana VA kwuru na ọ bụ naanị mgbe VA kpebichara arịrịọ mbụ gị, na naanị site na nkwekọrịta ụgwọ e bịanyere aka na ya. Nke ahụ pụtara na onye ọ bụla na-ana gị ego iji tinye arịrịọ mbụ gị, ma ọ bụ na-ekwe nkwa ọkwa nkwarụ dị elu maka ego, bụ ihe ịdọ aka na ntị. Ụfọdụ ndị a na-akwadoghị, a na-akpọ mgbe ụfọdụ \"claim sharks\", na-arịọ òkè n'ego azụ (back pay) gị n'ọdịnihu, ozi nbanye gị ma ọ bụ ego tupu ha amalite ọrụ.",
            "Enyela onye ọ bụla nbanye va.gov gị mgbe ọ bụla. Ọ bụrụ na i kwere na onye nnọchite anya mere ihe ọjọọ ma ọ bụ nara ụgwọ na-ezighi ezi, ị nwere ike ịkpọtụrụ Office of General Counsel (ọfịs ndụmọdụ iwu) VA, ị ga-emekwa ngwa ngwa maka esemokwu gbasara ụgwọ."
          ],
          steps: ["Mepee ngwa VA \"Find a VA-accredited representative or VSO\" na va.gov.", "Chọọ nso gị ma họrọ onye nnọchite anya VSO (n'efu).", "Kwado na a kwadoro ha tupu i kesaa ihe ọ bụla.", "Akwụla ụgwọ iji tinye arịrịọ mbụ, ekesakwala nbanye va.gov gị mgbe ọ bụla.", "Kọọ nsogbu nye Office of General Counsel VA."],
          words: [["VSO", "Veterans Service Organization: òtù ndị nnọchite anya ya a kwadoro na-enyere ndị agha ochie aka n'arịrịọ n'efu."], ["A kwadoro (accredited)", "VA nabatara ka o nyere aka n'arịrịọ VA."], ["Claim shark", "onye ma ọ bụ ụlọ ọrụ a na-akwadoghị na-ana ndị agha ochie ego iji tinye arịrịọ."]],
          slides: [
            { title: "Enyemaka n'efu dị", bullets: ["Ndị nnọchite anya VSO a kwadoro bụ n'efu mgbe niile", "Ha na-achịkọta ihe akaebe, tinye arịrịọ ma soro VA kwuo okwu"] },
            { title: "Chọta otu", bullets: ["Ngwa VA Find a VA-accredited representative", "Lelee na a kwadoro ya tupu ị họrọ"] },
            { title: "Ihe ịdọ aka na ntị", bullets: ["Ọ na-ana ego iji tinye arịrịọ mbụ gị", "Ọ na-ekwe nkwa ọkwa dị elu maka ego", "Ọ chọrọ nbanye va.gov gị ma ọ bụ òkè n'ego azụ gị"] },
            { title: "Chebe onwe gị", bullets: ["Ekesala nbanye va.gov gị mgbe ọ bụla", "Kọọ nsogbu nye Office of General Counsel VA"] }
          ],
          sources: [
            { name: "VA: Accredited representative FAQs", url: "https://www.va.gov/resources/va-accredited-representative-faqs/" },
            { name: "VA: Find a VA-accredited representative or VSO", url: "https://www.va.gov/get-help-from-accredited-representative/find-rep/" }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri ngwa VA \"Find a VA-accredited representative or VSO\" chọta otu onye nnọchite anya n'efu nso gị ma dee aha ya na otu esi akpọtụrụ ya. Wee mechaa atụmatụ uru VA gị site na ndepụta akwụkwọ gị, uru ị ga-arịọ na otu, atụmatụ GI Bill gị ma ọ bụrụ na i nwere, na ihe ịdọ aka na ntị atọ nke claim sharks. Mee nzọụkwụ mbụ n'otu uru.",
          youCanNow: "ịchọta VSO a kwadoro n'efu, ịmata ndị a na-ekwesịghị ịkwụ ụgwọ ka ha tinye arịrịọ, na ịmalite atụmatụ uru VA gị.",
          quickCheck: [
            { objective: "O6", q: "Ndị olee ka VA na-akwado ka ha nyere aka n'arịrịọ?", options: ["Onye ọ bụla nwere weebụsaịtị", "Ụlọ ọrụ ọ bụla na-ere ozi nye ndị agha ochie", "Ndị enyi tinyerela arịrịọ na mbụ", "Ndị nnọchite anya VSO, ndị ọka iwu na ndị ọrụ arịrịọ"], answer: 3, why: "VA na-akwado ndị nnọchite anya VSO, ndị ọka iwu na ndị ọrụ arịrịọ." },
            { objective: "O6", q: "Onye enyemaka kwuru na ọ ga-etinye arịrịọ mbụ gị ngwa ngwa ma ọ bụrụ na i kesaa nbanye va.gov gị. Gịnị ka ị ga-eme?", options: ["Kesaa ya ka i chekwaa oge", "Jụ, ma chọta onye nnọchite anya a kwadoro n'efu site na ngwa nchọta VA", "Kesaa naanị okwuntughe gị", "Bụrụ ụzọ kwụọ ha ụgwọ"], answer: 1, why: "Ekesala nbanye gị mgbe ọ bụla; enyemaka a kwadoro n'efu dị site na ngwa nchọta VA." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: GI Bill na enyemaka n'efu",
        questions: [
          { objective: "O4", q: "Post-9/11 GI Bill bụ maka ndị olee?", options: ["Onye ọ bụla bi na US", "Naanị ndị ọchịagha (officers)", "Naanị di ma ọ bụ nwunye", "Ndị rụrụ ọrụ agha oge niile mgbe September 10, 2001 gachara"], answer: 3, why: "VA kwuru na Post-9/11 GI Bill bụ maka ọrụ agha oge niile mgbe September 10, 2001 gachara." },
          { objective: "O4", q: "Kedu n'ime ndị a ka GI Bill nwere ike inyere aka ịkwụ ụgwọ ya?", options: ["Mbinye ego ụgbọala", "Apprenticeship ma ọ bụ ule ikike", "Ụgwọ ụlọ n'ụlọ ndị mụrụ gị", "Ụgwọ ekwentị gị"], answer: 1, why: "VA depụtara apprenticeship, ọzụzụ n'ọrụ na ule ikike n'etiti ihe GI Bill na-akwụ." },
          { objective: "O5", q: "Mgbe a nabatachara gị maka GI Bill, onye na-enweta mbipụta Certificate of Eligibility gị?", options: ["Onye na-ewe ndị agha (recruiter)", "Onye nwe ụlọ ị bi na ya", "Onye na-akwado aha n'ụlọ akwụkwọ gị", "Ọ dịghị onye"], answer: 2, why: "Onye na-akwado aha n'ụlọ akwụkwọ na-eji ya agwa VA na i debanyere aha." },
          { objective: "O6", q: "Ego ole ka onye nnọchite anya VSO a kwadoro na-ana iji nyere aka n'arịrịọ gị?", options: ["Ọ dịghị; ọ bụ n'efu mgbe niile", "Òkè n'ego azụ gị", "Ego tupu i tinye arịrịọ", "Ụgwọ otu ọnwa"], answer: 0, why: "VA kwuru na ọrụ ndị nnọchite anya VSO a kwadoro bụ n'efu mgbe niile." },
          { objective: "O6", q: "Otu ụlọ ọrụ kwuru na ọ ga-etinye arịrịọ nkwarụ mbụ gị maka 20% nke ego azụ gị. Gịnị bụ nke a?", options: ["Ụgwọ VA nkịtị", "Mmemme VA", "Ihe ịdọ aka na ntị; jiri VSO a kwadoro n'efu kama", "Iwu chọrọ ya"], answer: 2, why: "A na-ekwe ka a na ụgwọ naanị mgbe VA kpebichara arịrịọ mbụ, site na nkwekọrịta e bịanyere aka na ya, na naanị site n'aka ndị ọka iwu ma ọ bụ ndị ọrụ arịrịọ a kwadoro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Uru VA na GI Bill",
    questions: [
      { objective: "O2", q: "Gịnị bụ nkwụghachi nkwarụ?", options: ["Gift card a na-enye otu ugboro", "Ego a na-akwụ kwa ọnwa maka ọrịa ọrụ agha kpatara ma ọ bụ mere ka ọ ka njọ", "Mbinye ego ụlọ akwụkwọ", "Ọrụ e nyere gị"], answer: 1, why: "Ọ na-akwụ ndị agha ochie ụgwọ maka ọrịa metụtara ọrụ agha." },
      { objective: "O1", q: "Gịnị ka ị ga-eme na DD214 gị?", options: ["Debe mbipụta ya n'ebe dị nchebe", "Tụfuo ya mgbe i si n'ọrụ agha pụta", "Tinye ya n'ịntanetị", "Nye onye ọ bụla rịọrọ ya nke mbụ ahụ (original)"], answer: 0, why: "VA na-eji ya akwado ọrụ agha gị, ya mere debe ya n'ebe dị nchebe." },
      { objective: "O1", q: "Ebee ka i kwesịrị ịrịọ maka uru VA n'ịntanetị?", options: ["Saịtị ọ bụla nwere ọkọlọtọ", "Njikọ n'ozi ederede", "Saịtị gọọmentị va.gov", "Peeji soshal midia"], answer: 2, why: "Jiri naanị saịtị gọọmentị VA." },
      { objective: "O1", q: "Gịnị ka ị na-ekwesịghị ide MGBE Ọ BỤLA n'ime ngwa enyemaka AI?", options: ["\"Kọwaa ihe effective date bụ\"", "\"Nyere m aka depụta ajụjụ maka VSO m\"", "\"Gịnị bụ GI Bill?\"", "Nọmba Social Security gị ma ọ bụ ozi ahụike gị"], answer: 3, why: "Debe ozi nzuzo n'ebe ọ na-adịghị n'ime ngwa AI." },
      { objective: "O2", q: "Kedu nke ABỤGHỊ otu n'ime ụzọ isi tinye arịrịọ nkwarụ?", options: ["N'ịntanetị na va.gov", "Site na mail na VA Form 21-526EZ", "N'onwe gị n'ọfịs mpaghara VA", "Site n'iziga ozi ederede nye onye ị na-amaghị na-ekwu na ọ ga-enyere aka"], answer: 3, why: "Tinye ya n'ịntanetị, site na mail, n'onwe gị ma ọ bụ site n'aka onye nnọchite anya a kwadoro." },
      { objective: "O2", q: "Ị na-eme atụmatụ itinye arịrịọ n'akwụkwọ mana ị chọrọ oge iji chịkọta ihe akaebe. Gịnị nwere ike inyere aka ichebe ụbọchị nnabata gị?", options: ["Intent to file", "Ichere afọ ole na ole", "Itinyeghị ihe ọ bụla", "Ịkpọ claim shark"], answer: 0, why: "Intent to file nwere ike ijide ụbọchị nnabata nwere ike ịbụ nke gị." },
      { objective: "O2", q: "Kedu nke bụ ezigbo ihe akaebe maka arịrịọ nkwarụ?", options: ["Ịkọ ihe VA chọrọ", "Akwụkwọ ọgwụgwọ n'oge ọrụ agha na akwụkwọ dọkịta", "Ihe e dere na soshal midia", "Mkpebi arịrịọ enyi gị"], answer: 1, why: "Akwụkwọ na okwu ndị hụrụ ya na-akwado arịrịọ gị." },
      { objective: "O2", q: "VA haziri nnyocha maka arịrịọ gị. I kwesịrị:", options: ["Ịhapụ ya", "Iziga onye ọzọ", "Ịga na ya", "Ịrịọ claim shark ka ọ gaa"], answer: 2, why: "Nnyocha ahụ so na mkpebi ahụ." },
      { objective: "O3", q: "Kedu arịrịọ nlekọta ahụike VA na-eji?", options: ["VA Form 10-10EZ", "VA Form 22-1990", "VA Form 21-526EZ", "DD214"], answer: 0, why: "10-10EZ bụ Application for Health Benefits." },
      { objective: "O3", q: "Mgbe ị na-arịọ maka nlekọta ahụike VA, gịnị ka i kwesịrị itinye gbasara ọrụ agha gị?", options: ["Naanị ọkwa (rank) gị", "Ọ dịghị ihe ọ bụla", "Ogige agha kacha amasị gị", "Akụkọ ọrụ agha gị, gụnyere ihe ọ bụla na-egbu egbu ma ọ bụ dị ize ndụ i metụrụ"], answer: 3, why: "VA na-arịọ akụkọ ọrụ agha na ihe i metụrụ." },
      { objective: "O3", q: "Kedu nọmba ekwentị VA depụtara maka enyemaka n'ịrịọ maka nlekọta ahụike?", options: ["911", "988", "877-222-8387", "411"], answer: 2, why: "VA depụtara 877-222-8387 maka nọmba enyemaka uru ahụike." },
      { objective: "O4", q: "A na-akpọkwa Post-9/11 GI Bill:", options: ["Chapter 1606", "Chapter 33", "Form 10-10EZ", "DD214"], answer: 1, why: "Post-9/11 GI Bill bụ Chapter 33." },
      { objective: "O4", q: "Otu nwanyị agha ochie chọrọ ịbụ onye ọkụ eletrik n'enweghị nzere mahadum afọ anọ. GI Bill nwere ike inyere ya aka?", options: ["Mba, ọ na-akwụ naanị ụgwọ mahadum afọ anọ", "Ee, o nwere ike inyere aka na apprenticeship na ọzụzụ n'ọrụ", "Naanị ma ọ kwaga mba ọzọ", "Naanị maka ndị ọchịagha"], answer: 1, why: "VA depụtara apprenticeship na ọzụzụ n'ọrụ n'etiti ihe GI Bill na-akwụ." },
      { objective: "O4", q: "Yellow Ribbon Program nwere ike:", options: ["Ịkwụ ụgwọ ụlọ gị", "Ịnọchi DD214 gị", "Ime ka arịrịọ nkwarụ gaa ngwa ngwa", "Inyere aka ịkwụ ụgwọ akwụkwọ Post-9/11 GI Bill anaghị akwụ, n'ụlọ akwụkwọ ndị sonyere na ya"], answer: 3, why: "Yellow Ribbon na-enyere aka n'ụgwọ akwụkwọ karịrị ihe GI Bill na-akwụ." },
      { objective: "O5", q: "Ọ bụrụ na ị na-arịọ maka GI Bill site na mail, kedu fọm ị ga-eji?", options: ["VA Form 22-1990", "VA Form 10-10EZ", "VA Form 21-526EZ", "Fọm ụtụ isi"], answer: 0, why: "VA Form 22-1990 bụ Application for VA Education Benefits." },
      { objective: "O5", q: "Tupu i debanye aha n'ụlọ akwụkwọ site na GI Bill, i kwesịrị:", options: ["Idebanye aha n'otu ụbọchị ahụ onye na-ewe ndị mmadụ kpọrọ gị", "Ịghara ịtụnyere", "Ịtụnyere ya site na GI Bill Comparison Tool ma jụọ gbasara ụgwọ na ọrụ ndị gụchara na-enweta", "Ịkwụ ego mbụ (deposit) tupu ị gụọ ihe ọ bụla"], answer: 2, why: "Ibu ụzọ tụnyere na-echebe uru gị." },
      { objective: "O5", q: "Ị nwere ike ịgbanwe arịrịọ GI Bill gị mgbe i zipuchara ya?", options: ["Ee, oge ọ bụla", "Ee, site n'ịkpọ ụlọ akwụkwọ", "Naanị na ngwụcha izu", "Mba, ya mere lelee ya tupu i zipu ya"], answer: 3, why: "VA kwuru na ị pụghị ime mgbanwe mgbe i zipuchara ya." },
      { objective: "O6", q: "Kedu n'ime ndị a ka VA kwadoro ka ha nyere aka n'arịrịọ?", options: ["Ndị nnọchite anya VSO, ndị ọka iwu na ndị ọrụ arịrịọ", "Weebụsaịtị ọ bụla", "Onye ọ bụla rụrụ ọrụ agha", "Ndị na-ere ụgbọala"], answer: 0, why: "Office of General Counsel VA na-akwado ụdị atọ ndị a." },
      { objective: "O6", q: "Olee mgbe onye ọka iwu ma ọ bụ onye ọrụ arịrịọ a kwadoro nwere ike ịna ego?", options: ["Tupu i tinye arịrịọ mbụ gị", "Naanị mgbe VA kpebichara arịrịọ mbụ gị, na site na nkwekọrịta ụgwọ e bịanyere aka na ya", "Oge ọ bụla ha chọrọ", "Ọ dịghị mgbe ọ bụla, n'iwu ọ bụla"], answer: 1, why: "VA kwuru na ụgwọ nwere ike ịbịa naanị mgbe mkpebi mbụ gachara, site na nkwekọrịta e bịanyere aka na ya." },
      { objective: "O6", q: "Onye na-enyere gị aka n'arịrịọ gị rịọrọ nbanye va.gov gị. I kwesịrị:", options: ["Ikesa ya ka ha rụọ ọrụ ngwa ngwa", "Ide ya n'obere akwụkwọ maka ha", "Ịjụ; ekesala nbanye gị mgbe ọ bụla", "Ịgbanwe ya ka ọ dị mfe karị"], answer: 2, why: "Enyela onye ọ bụla nbanye va.gov gị mgbe ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 5, 8, 9, 12, 15, 18, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ndepụta akwụkwọ", objective: "O1", notYet: "Enweghị ndepụta, ma ọ bụ DD214 adịghị na ya.", meets: "Ndepụta malitere na DD214, nwere akara n'akwụkwọ ndị na-efu.", exceeds: "Ọ na-ekwu ebe a na-edebe akwụkwọ ọ bụla na otu esi enweta ndị na-efu." },
      { name: "Uru na otu esi arịọ ha", objective: "O2", notYet: "E depụtara uru n'ekwughị otu esi arịọ ha.", meets: "Uru ọ bụla (nkwụghachi nkwarụ, nlekọta ahụike, agụmakwụkwọ) nwere ụzọ gọọmentị kwadoro isi rịọ ya.", exceeds: "Ọ gụnyere otu onye na-amụ ihe ga-esi chebe ụbọchị mmalite ma ọ bụ fọm ọ ga-eji." },
      { name: "Atụmatụ GI Bill", objective: "O5", notYet: "Enweghị mmemme ma ọ bụ ụlọ akwụkwọ a kpọrọ aha, ma ọ bụrụ na onye na-amụ ihe ga-eji GI Bill.", meets: "Mmemme ahụ, ụlọ akwụkwọ ma ọ bụ ọzụzụ ahụ, na ihe a chọrọ maka ya.", exceeds: "Nhọrọ abụọ e tụnyere na GI Bill Comparison Tool." },
      { name: "Enyemaka a kwadoro n'efu", objective: "O6", notYet: "Enweghị onye nnọchite anya, ma ọ bụ ụlọ ọrụ a na-akwụ ụgwọ nke a na-akwadoghị.", meets: "Aha na ozi kọntaktị nke onye nnọchite anya ma ọ bụ VSO VA kwadoro site na ngwa nchọta VA.", exceeds: "Onye na-amụ ihe akpọtụrụla ha ma ọ bụ hazie oge ịhụ ha." },
      { name: "Ihe ịdọ aka na ntị nke claim shark", objective: "O6", notYet: "Ihe ịdọ aka na ntị erughị atọ.", meets: "Ihe ịdọ aka na ntị atọ nke onye a na-ekwesịghị ịkwụ ụgwọ ka o tinye arịrịọ.", exceeds: "Onye na-amụ ihe na-akọwa mgbe onye ọka iwu ma ọ bụ onye ọrụ arịrịọ a kwadoro nwere ike ịna ego." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe zipuru opekata mpe otu arịrịọ VA ma ọ bụ intent to file n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kpọtụrụ onye nnọchite anya ma ọ bụ VSO a kwadoro n'efu n'ime ụbọchị 30",
      "Ndị na-amụ ihe debanyere aha n'ọzụzụ GI Bill na-akwụ ụgwọ ya n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Faịlụ (n'akwụkwọ, ma ọ bụ faịlụ dị nchebe na kọmputa nke onye na-amụ ihe) maka akwụkwọ",
      "DD214 onye na-amụ ihe ma ọ bụ akwụkwọ ọpụpụ ọzọ, ma ọ bụrụ na o nwere ha",
      "Weebụsaịtị va.gov n'efu, gụnyere GI Bill Comparison Tool na ngwa nchọta onye nnọchite anya a kwadoro",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Anakọtala ma ọ bụ lee DD214, akwụkwọ ahụike ma ọ bụ nọmba Social Security nke ndị na-amụ ihe mgbe ọ bụla; ndị na-amụ ihe na-edebe faịlụ nke ha.",
      "Kpọọ VSO VA kwadoro ka ọ bịa na nnọkọ ikpeazụ ka ndị na-amụ ihe hụ enyemaka n'efu ihu na ihu.",
      "Lelee fọm, nọmba ekwentị na iwu na va.gov n'oge nnọkọ ahụ, n'ihi na ha nwere ike ịgbanwe.",
      "Enyela ndụmọdụ gbasara ahụike ma ọ bụ iwu; zipu ajụjụ ndị ahụ n'aka VA ma ọ bụ onye nnọchite anya a kwadoro.",
      "Jiri rubric tụọ akara atụmatụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
