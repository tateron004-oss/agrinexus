"use strict";

// Koach Learn course (Igbo translation of veterans/veterans-ai-logistics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "veterans-ai-logistics-ig",
  lang: "ig",
  translationOf: "veterans-ai-logistics",
  category: "Veterans (military)",
  name: "AI maka Lọjistiks na Ọrụ Nhazi",
  skills: "Ịsụ asụsụ ndị nkịtị gbasara supply chain, Ịmara ebe AI dabara na lọjistiks, Iwu mpempe akwụkwọ maka ịzụghachi ngwaahịa, Ide usoro nnyefe ngwaahịa site n'enyemaka AI, Ịkọwa atụmatụ ọrụ nhazi n'obere nkọwa",
  outcome: "iwu obere mpempe akwụkwọ (spreadsheet) maka ịzụghachi ngwaahịa na usoro nnyefe ngwaahịa site n'enyemaka ngwa enyemaka AI na spreadsheet n'efu, ilele mgbakọ ahụ n'onwe gị, na ịkọwa atụmatụ ahụ n'okwu lọjistiks ndị nkịtị.",
  about: [
    "Ọ bụrụ na i bugara ndị mmadụ, akụkụ ngwaọrụ, mmanụ ụgbọala, nri ma ọ bụ ụgbọala n'ọrụ agha, i meela lọjistiks. Ụlọ nkwakọba ngwaahịa, ụlọ ọrụ ụgbọ ibu, ụlọ ọgwụ na ụlọ ahịa ịntanetị nke ndị nkịtị chọrọ otu nka ahụ, ha na-ejikwa ngwa AI eme atụmatụ ugbu a.",
    "N'ihe ọmụmụ a, ị ga-amụta okwu ndị nkịtị maka ihe i mere, hụ ebe AI dabara na lọjistiks taa, ma wuo ngwa abụọ bara uru: mpempe akwụkwọ maka ịzụghachi ngwaahịa na usoro nnyefe ngwaahịa. Ị ga-emechi site n'ịkọwa atụmatụ ahụ, dị ka ị ga-akọwara onye isi agha, mana n'okwu ndị nkịtị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Ị chọrọ spreadsheet n'efu (Google Sheets ma ọ bụ Microsoft Excel na weebụ) na ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee nkọwa ọrụ nhazi nwere otu peeji maka obere azụmahịa e chepụtara echepụta (dịka ọmụmaatụ ụlọ nri ndị ogbenye (food bank) ma ọ bụ ụlọ ahịa akụkụ ngwaọrụ): mpempe akwụkwọ ngwaahịa nwere reorder point maka ihe ise, usoro nnyefe ngwaahịa nke otu izu nke AI dere ma i lelere, ihe egwu atọ nwere atụmatụ ndabere maka nke ọ bụla, na ahịrị résumé abụọ na-akọwa ọrụ lọjistiks gị n'agha n'okwu ndị nkịtị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha lara ezumike (veterans) na ndị agha na-apụ n'ọrụ agha bụ ndị bugara ndị mmadụ, akụkụ ngwaọrụ, mmanụ ụgbọala, nri ma ọ bụ ụgbọala n'ọrụ agha, ma chọọ ọrụ ndị nkịtị n'ụlọ nkwakọba ngwaahịa, ụgbọ ibu, ụlọ ọgwụ, ụlọ nri ndị ogbenye ma ọ bụ ụlọ ahịa ịntanetị.",
    startingPoint: "Ha maara ọrụ nnyefe ngwaahịa, njem na nlekọta ụgbọala nke ọma, ha nwekwara ike iji ekwentị ma ọ bụ kọmputa. Ọtụtụ na-eji okwu agha, ha ewubeghị mpempe akwụkwọ ịzụghachi ngwaahịa na spreadsheet n'efu, ha ejibeghịkwa AI mee usoro oge ma ọ bụ gụọ data.",
    gap: "Ndị were mmadụ n'ọrụ lọjistiks ndị nkịtị na-eji okwu nke ha na ngwa AI maka atụmatụ, ha chọkwara ndị nwere ike ilele atụmatụ AI megide ezi oke. Ndị na-amụ ihe kwesịrị ịsụ asụsụ ndị nkịtị gbasara supply chain, wuo ma lelee mpempe akwụkwọ ịzụghachi ngwaahịa na usoro oge site n'enyemaka AI, ma kọwaa atụmatụ nke ọma.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-egosi nzọụkwụ spreadsheet otu n'otu",
      "Ngwaọrụ: kọmputa kachasị mma maka spreadsheet; ngwa n'efu dị ka Google Sheets ma ọ bụ Microsoft Excel na ịntanetị",
      "Nzuzo: naanị azụmahịa e chepụtara echepụta; enweghị aha ndị ahịa ma ọ bụ adreesị ụlọ na ngwa AI ọha",
      "Ilele mgbakọ: ndị na-amụ ihe na-elele usoro mgbakọ (formula) na oge AI nyere n'aka, site na igwe mgbakọ na app maapụ",
      "Oge: nkuzi ihe dị ka nkeji 5 gbakwunyere omume spreadsheet"
    ],
    prerequisites: "Ọ dịghị. Ọ ga-enyere aka ma ọ bụrụ na i jiriworo spreadsheet ntakịrị, mana ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ lọjistiks site n'ọrụ agha gị", action: "ịsụgharị okwu lọjistiks agha gaa n'okwu ndị nkịtị ndị were mmadụ n'ọrụ na-eji", standard: "site n'ịsụgharị okwu ise na ịkpọ aha ọrụ ndị nkịtị abụọ dabara" },
    { id: "O2", condition: "Mgbe e nyere gị ọmụmaatụ AI n'ụlọ nkwakọba ngwaahịa na n'ụgbọ ibu", action: "ịkọwa ụzọ anọ a na-esi eji AI na lọjistiks na mkpebi mmadụ ka na-eme maka nke ọ bụla", standard: "na-akpọ aha otu ihe mmadụ ga-elelerịrị maka nke ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị ojiji kwa ụbọchị, lead time na safety stock maka ihe ise", action: "iwu spreadsheet na-agbakọ mgbe ị ga-azụghachi ihe ọ bụla", standard: "na otu ahịrị e lelere n'aka site na igwe mgbakọ" },
    { id: "O4", condition: "Mgbe e nyere gị ebe nkwụsị, awa, ụgbọala na ndị ọkwọ ụgbọala", action: "iji ngwa enyemaka AI dee usoro nnyefe ngwaahịa nke otu izu ma lelee ya megide ezi oke", standard: "na-edozi nsogbu ọ bụla ị hụrụ site n'app maapụ na awa ebe nkwụsị ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị obere tebụl data nnyefe ngwaahịa", action: "iji AI chọta usoro na-emegharị onwe ya (pattern) ma kwado otu n'onwe gị site na filter spreadsheet", standard: "ma dee ihe kpatara ya, ndozi na otu ị ga-esi tụọ ya" },
    { id: "O6", condition: "Site n'iji mpempe akwụkwọ gị, usoro oge gị na ihe egwu", action: "ịkọwa atụmatụ ọrụ nhazi n'okwu ndị nkịtị ma dee ahịrị résumé abụọ gbasara ọrụ lọjistiks gị", standard: "nwere ọnọdụ ahụ, atụmatụ, ihe egwu atọ na ndabere maka nke ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Site na lọjistiks agha gaa na supply chain ndị nkịtị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịsụ asụsụ ndị nkịtị gbasara supply chain",
          minutes: 5,
          goal: "Sụgharịa okwu lọjistiks agha ise gaa n'okwu ndị nkịtị ndị were mmadụ n'ọrụ na-eji.",
          text: [
            "Supply chain bụ nzọụkwụ niile na-ebute ngwaahịa site n'ebe a na-emepụta ya ruo n'aka onye na-eji ya. Lọjistiks bụ akụkụ atụmatụ na mbugharị nke usoro ahụ.",
            "Ọtụtụ okwu agha nwere ejima n'etiti ndị nkịtị. Ụlọ ngwaahịa (supply room) ma ọ bụ ụlọ nkwakọba ngwaahịa bụ inventory management (nlekọta ngwaahịa). Convoy bụ transportation ma ọ bụ freight (njem ngwaahịa). Motor pool bụ fleet maintenance (nlekọta ụgbọala). Atụmatụ ngwaahịa Class I ruo IX bụ demand planning (atụmatụ mkpa). Njem ikpeazụ ruo n'aka onye na-eji ya ka a na-akpọ \"last-mile delivery\".",
            "My Next Move for Veterans (mynextmove.org/vets), nke U.S. Department of Labor (Ngalaba Ọrụ US), na-ekwe ka i tinye ọrụ agha gị ma hụ ọrụ ndị nkịtị yiri ya, dị ka logistician, onye nlekọta ụlọ nkwakọba ngwaahịa ma ọ bụ dispatcher (onye na-ezipụ ụgbọala)."
          ],
          steps: ["Depụta ọrụ lọjistiks ise i mere n'ọrụ agha.", "Jụọ ngwa enyemaka AI: \"Sụgharịa ọrụ lọjistiks agha ndị a gaa n'okwu supply chain ndị nkịtị.\"", "Chọọ ọrụ agha gị na mynextmove.org/vets.", "Dee aha ọrụ ndị nkịtị kacha dabara."],
          words: [["Supply chain", "nzọụkwụ niile site n'imepụta ngwaahịa ruo n'aka onye na-eji ya."], ["Inventory", "ngwaahịa azụmahịa na-edebe n'ụlọ ahịa ma ọ bụ n'ụlọ nkwakọba."], ["Last-mile delivery", "njem ikpeazụ na-ebutere onye ahịa ihe ahụ."], ["3PL", "third-party logistics: ụlọ ọrụ e goro iji debe ma zipu ngwaahịa maka azụmahịa ọzọ."]],
          slides: [
            { title: "Supply chain na lọjistiks", bullets: ["Supply chain: nzọụkwụ niile ruo n'aka onye na-eji ya", "Lọjistiks: akụkụ atụmatụ na mbugharị"] },
            { title: "Site n'agha gaa na ndị nkịtị", bullets: ["Supply room = inventory management", "Convoy = transportation ma ọ bụ freight", "Motor pool = fleet maintenance", "Atụmatụ ngwaahịa = demand planning"] },
            { title: "Chọta ọrụ dabara", bullets: ["mynextmove.org/vets (Department of Labor)", "Logistician, onye nlekọta ụlọ nkwakọba, dispatcher"] }
          ],
          sources: [{ name: "My Next Move for Veterans (U.S. Department of Labor)", url: "https://www.mynextmove.org/vets/" }],
          tryIt: "Dee ọrụ lọjistiks ise site n'ọrụ agha gị. Rịọ ngwa enyemaka AI ka ọ sụgharịa ha gaa n'okwu ndị nkịtị, wee chọọ ọrụ agha gị na mynextmove.org/vets ma dee aha ọrụ abụọ dabara.",
          youCanNow: "ịkọwa ọrụ lọjistiks gị n'agha n'okwu ndị were mmadụ n'ọrụ n'etiti ndị nkịtị na-eji.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ supply chain?", options: ["Naanị ụgbọ ibu ụlọ ọrụ nwere", "Nzọụkwụ niile site n'imepụta ngwaahịa ruo n'aka onye na-eji ya", "Ọnụ ụzọ ihu ụlọ nkwakọba ngwaahịa", "Ndepụta nọmba ekwentị ndị na-ebubata ngwaahịa"], answer: 1, why: "Supply chain gụnyere nzọụkwụ niile site na mmepụta ruo n'aka onye ikpeazụ na-eji ya." },
            { objective: "O1", q: "Résumé gị kwuru \"Ran the motor pool\". Kedu okwu ndị nkịtị ị ga-eji?", options: ["Hapụ ya dị ka \"motor pool\"", "\"Nyara ụgbọala\"", "\"Mere ihe gbasara ụgbọala\"", "\"Managed fleet maintenance\" (lekọtara ụgbọala niile)"], answer: 3, why: "Motor pool n'agha kacha yie fleet maintenance n'etiti ndị nkịtị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ebe AI dabara na lọjistiks",
          minutes: 4,
          goal: "Kpọọ aha ụzọ anọ a na-esi eji AI na lọjistiks na mkpebi ndị mmadụ ka na-eme.",
          text: [
            "Ụlọ ọrụ na-eji AI eme forecast nke mkpa (ịkọ ole ihe ndị mmadụ ga-achọ), eme atụmatụ ụzọ na-echekwa mmanụ na oge, ahụ ngwaahịa ga-egbu oge n'oge, ma na-aza ajụjụ ndị ahịa gbasara nnyefe ngwaahịa.",
            "AI maara naanị data e nyere ya. Ọ bụrụ na data ahụ ochie, ezighi ezi ma ọ bụ na-efu efu, atụmatụ ahụ ga-ezighịkwa ezi. Oké mmiri ozuzo, ụzọ e mechiri emechi ma ọ bụ ọgba aghara oge ezumike nwere ike ọ gaghị anọ na data ahụ.",
            "Ndị mmadụ ka na-eme mkpebi: ilele na atụmatụ ahụ nwere isi, ịhazi ihe na-agaghị dị ka atụmatụ si dị, ichebe ndị ọkwọ ụgbọala na ndị ọrụ, na ịgwa ndị ahịa okwu. Ikpe ikpe ahụ bụ kpọmkwem ihe lọjistiks agha zụrụ gị ime."
          ],
          words: [["Forecast", "ịkọ nke ọma ihe ga-eme, dị ka ole ngwaahịa ị ga-achọ."], ["Route optimization", "ịchọta usoro na ụzọ kacha mma maka nnyefe ngwaahịa."], ["Exception", "ihe na-agaghị dị ka atụmatụ si dị, dị ka ụgbọ ibu gbuo oge."]],
          slides: [
            { title: "AI na lọjistiks", bullets: ["Forecast nke mkpa", "Atụmatụ ụzọ", "Ịhụ ngwaahịa ga-egbu oge", "Ịza ajụjụ gbasara nnyefe"] },
            { title: "Adịghị ike AI", bullets: ["Ọ maara naanị data e nyere ya", "Data ochie ma ọ bụ na-efu efu = atụmatụ ezighi ezi", "Oké mmiri ozuzo na ụzọ e mechiri nwere ike ọ gaghị anọ ya"] },
            { title: "Ndị mmadụ ka na-ekpebi", bullets: ["Atụmatụ ahụ ọ nwere isi?", "Ịhazi exception", "Nchekwa na ndị ahịa"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Kedu otu ụlọ nkwakọba ngwaahịa na ụlọ ọrụ ụgbọ ibu si eji AI taa? Nye ọmụmaatụ anọ n'okwu dị mfe.\" N'akụkụ nke ọ bụla, dee otu ihe mmadụ ka ga-elele.",
          youCanNow: "ịkọwa ebe AI na-enyere aka na lọjistiks na ebe a ka chọrọ ikpe ikpe mmadụ.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ demand forecasting?", options: ["Ịzụ ihe niile n'otu oge", "Ịgụ ngwaahịa na njedebe afọ", "Ịkọ nke ọma ole a ga-achọ", "Akụkọ ihu igwe maka ndị ọkwọ ụgbọala"], answer: 2, why: "Demand forecasting na-atụ ole a ga-achọ, AI na-enyekarịkwa aka ime ya." },
            { objective: "O2", q: "Atụmatụ ụzọ AI zipụrụ ụgbọ ibu n'ụzọ e mechiri n'ụtụtụ a. Onye ga-edozi ya?", options: ["Mmadụ maara na e mechiri ụzọ ahụ", "AI ga-edozi onwe ya ma emechaa", "Onye ahịa", "Ọ dịghị onye; soro atụmatụ ahụ"], answer: 0, why: "AI maara naanị data o nwere, ya mere ndị mmadụ na-ahazi exception dị ka ụzọ e mechiri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iwu mpempe akwụkwọ maka ịzụghachi ngwaahịa",
          minutes: 6,
          goal: "Wuo spreadsheet na-egosi mgbe ị ga-azụghachi ihe ọ bụla.",
          text: [
            "Reorder point bụ ọnụ ọgụgụ ngwaahịa na-agwa gị ka ị zụkwuo tupu ọ gwụ. Usoro mgbakọ dị mfe bụ: ojiji kwa ụbọchị mụbaa lead time (ụbọchị ole ọ na-ewe ka ngwaahịa bịarute), gbakwunye safety stock (ihe mgbakwunye maka ihe mberede).",
            "Ọmụmaatụ: ụlọ nri ndị ogbenye (food bank) na-eji ite agwa 20 kwa ụbọchị, nnyefe na-ewe ụbọchị 5, ọ na-edebekwa 40 mgbakwunye. Reorder point = 20 x 5 + 40 = 140. Mgbe ngwaahịa ruru 140, zụkwuo.",
            "Ngwa enyemaka AI nwere ike inyere gị aka hazie kọlụm na usoro mgbakọ spreadsheet. Lelee usoro mgbakọ ahụ mgbe niile n'otu ahịrị n'aka ka ị hụ na o ziri ezi."
          ],
          steps: ["Meghee Google Sheet ma ọ bụ Excel workbook efu.", "Mee kọlụm: Item, On hand, Daily use, Lead time (days), Safety stock, Reorder point, Order now?", "Rịọ ngwa enyemaka AI usoro mgbakọ maka Reorder point na maka kọlụm ee/mba \"Order now?\".", "Tinye ihe ise nwere nọmba e chepụtara echepụta.", "Lelee otu ahịrị n'aka site na igwe mgbakọ."],
          words: [["Reorder point", "ọnụ ọgụgụ ngwaahịa na-agwa gị ka ị zụkwuo."], ["Lead time", "ụbọchị ole ọ na-ewe ka ihe i nyere iwu bịarute."], ["Safety stock", "ngwaahịa mgbakwunye e debere maka ihe mberede."], ["Formula", "usoro mgbakọ spreadsheet na-emere gị."]],
          slides: [
            { title: "Reorder point", bullets: ["Ojiji kwa ụbọchị x lead time + safety stock", "Mgbe ngwaahịa ruru ya, zụkwuo"] },
            { title: "Ọmụmaatụ: agwa ụlọ nri ndị ogbenye", bullets: ["20 kwa ụbọchị x ụbọchị 5 + 40 mgbakwunye = 140", "Mgbe ọ ruru ite 140, nye iwu"] },
            { title: "Wuo ya site n'enyemaka AI", bullets: ["Rịọ AI usoro mgbakọ kọlụm", "Tinye ihe ise", "Lelee otu ahịrị n'aka"] }
          ],
          tryIt: "Wuo mpempe akwụkwọ ịzụghachi ngwaahịa nwere ihe ise. Rịọ ngwa enyemaka AI usoro mgbakọ, wee lelee otu ahịrị site na igwe mgbakọ ma dozie ihe ọ bụla na-ezighi ezi.",
          youCanNow: "iwu spreadsheet na-egosi mgbe ihe ọ bụla kwesịrị ka a zụghachi ya.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ safety stock?", options: ["Ngwaahịa mebiri emebi", "Ngwaahịa e rere na mbelata ọnụ ahịa", "Ngwaahịa e kpọchiri n'igbe nchekwa", "Ngwaahịa mgbakwunye e debere maka ihe mberede"], answer: 3, why: "Safety stock na-ekpuchi ihe mberede dị ka nnyefe gburu oge ma ọ bụ mkpa karịrị." },
            { objective: "O3", q: "Ojiji kwa ụbọchị 5, lead time ụbọchị 6, safety stock 10. Gịnị bụ reorder point?", options: ["21", "40", "60", "11"], answer: 1, why: "Ojiji kwa ụbọchị mụbaa lead time (5 x 6 = 30) gbakwunye safety stock (10) bụ 40." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Site na lọjistiks agha gaa na supply chain ndị nkịtị",
        questions: [
          { objective: "O1", q: "Convoy n'agha kacha yie okwu ndị nkịtị dị olee?", options: ["Ịkwụ ụgwọ ọnwa (payroll)", "Ahịa na mgbasa ozi (marketing)", "Transportation ma ọ bụ freight", "Nlekọta ndị ọrụ (human resources)"], answer: 2, why: "Ibugharị ngwaahịa n'ụgbọala bụ transportation ma ọ bụ freight." },
          { objective: "O1", q: "Gịnị bụ last-mile delivery?", options: ["Njem ikpeazụ ruo n'aka onye ahịa", "Maịl mbụ nke njem", "Asọmpi ọsọ", "Ụlọ mmepụta ihe"], answer: 0, why: "Ọ bụ akụkụ ikpeazụ ruo n'aka onye na-eji ihe ahụ." },
          { objective: "O2", q: "Gịnị mere atụmatụ ụzọ AI ji nwee ike ịbụ nke ezighi ezi?", options: ["Ụgbọ ibu anaghị emebi mgbe ọ bụla", "AI na-eziri ezi mgbe niile", "Maapụ anaghị agbanwe mgbe ọ bụla", "AI maara naanị data e nyere ya"], answer: 3, why: "Data na-efu efu ma ọ bụ data ochie na-eweta atụmatụ ezighi ezi." },
          { objective: "O3", q: "Ojiji kwa ụbọchị 10, lead time ụbọchị 4, safety stock 20. Gịnị bụ reorder point?", options: ["14", "34", "40", "60"], answer: 3, why: "10 x 4 + 20 = 60." },
          { objective: "O3", q: "Mgbe AI dere gị usoro mgbakọ spreadsheet, ị kwesịrị:", options: ["Ịghara ile ya anya mgbe ọ bụla", "Ilele otu ahịrị n'aka", "Ihichapụ mpempe akwụkwọ ahụ", "Ikesa ya n'eleleghị ya"], answer: 1, why: "Ilele n'aka na-egosi na usoro mgbakọ ahụ ziri ezi." }
        ]
      }
    },
    {
      name: "Isi 2: Ime atụmatụ na ịkọwa ọrụ nhazi",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide usoro nnyefe ngwaahịa site n'enyemaka AI",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI dee usoro nnyefe ngwaahịa nke otu izu ma lelee ya megide ezi oke.",
          text: [
            "Usoro nnyefe ngwaahịa (delivery schedule) na-ekwu onye na-aga ebee, mgbe ole, na ihe ọ na-ebu. AI nwere ike ide otu ngwa ngwa ma ọ bụrụ na i nye ya eziokwu: ebe nkwụsị, awa mmeghe, ọnụ ọgụgụ ụgbọala na ndị ọkwọ ụgbọala, awa ndị ọkwọ ụgbọala, na ihe ebe nkwụsị ọ bụla chọrọ.",
            "Wee lelee ya dị ka atụmatụ convoy. Oge njem ọ dị ka eziokwu na ezi maapụ? Ndị ọkwọ ụgbọala ọ na-enweta oge ezumike? Ebe nkwụsị ọ bụla ọ na-enweta nnyefe mgbe e mechiri ya?",
            "Jiri naanị data e chepụtara echepụta ma ọ bụ data azụmahịa kwere. Etinyela aha ndị ahịa, adreesị ụlọ ma ọ bụ ihe ọ bụla onye were gị n'ọrụ ekweghị maka ngwa AI."
          ],
          steps: ["Depụta ebe nkwụsị, awa, ụgbọala, ndị ọkwọ ụgbọala na ihe ebe nkwụsị ọ bụla chọrọ.", "Jụọ ngwa enyemaka AI: \"Mee usoro nnyefe ngwaahịa nke otu izu dị ka tebụl nwere oke ndị a.\"", "Lelee oge njem n'app maapụ.", "Lelee oge ezumike, awa mmeghe na ohere dị n'ụgbọala.", "Dozie usoro ahụ ma chekwaa ya n'akụkụ mpempe akwụkwọ ngwaahịa gị."],
          words: [["Delivery schedule", "atụmatụ na-egosi onye na-ebuga gịnị, ebee na mgbe ole."], ["Constraint", "oke atụmatụ ahụ ga-agbaso, dị ka awa mmeghe ma ọ bụ awa ndị ọkwọ ụgbọala."]],
          slides: [
            { title: "Nye AI eziokwu", bullets: ["Ebe nkwụsị na awa mmeghe", "Ụgbọala na ndị ọkwọ ụgbọala", "Ihe ebe nkwụsị ọ bụla chọrọ"] },
            { title: "Lelee ya dị ka atụmatụ convoy", bullets: ["Ezi oge njem na maapụ", "Oge ezumike ndị ọkwọ ụgbọala", "Enweghị nnyefe n'ebe e mechiri emechi"] },
            { title: "Chebe data", bullets: ["Naanị data e chepụtara ma ọ bụ nke e kwere", "Enweghị aha ndị ahịa ma ọ bụ adreesị ụlọ"] }
          ],
          tryIt: "Maka ụlọ nri ndị ogbenye e chepụtara echepụta nwere ebe nkesa nri atọ na otu ụgbọala van, rịọ ngwa enyemaka AI usoro nnyefe ngwaahịa nke otu izu dị ka tebụl. Lelee ya n'app maapụ ma dozie otu nsogbu ị hụrụ.",
          youCanNow: "ide usoro nnyefe ngwaahịa site n'enyemaka AI ma lelee ya megide ezi oke ndụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ constraint n'usoro nnyefe ngwaahịa?", options: ["Oke atụmatụ ahụ ga-agbaso, dị ka awa mmeghe", "Ego mgbakwunye maka ndị ọkwọ ụgbọala", "Ebe nkwụsị mgbakwunye", "Ụdị ụgbọ ibu"], answer: 0, why: "Constraint bụ oke dị ka awa, ụgbọala na ndị ọkwọ ụgbọala nke usoro ahụ ga-asọpụrụ." },
            { objective: "O4", q: "Usoro AI kwuru na njem maịl 40 na-ewe nkeji 15. Gịnị ka ị ga-eme?", options: ["Kwere ya", "Wepụ ebe nkwụsị ahụ", "Lelee oge ahụ n'app maapụ ma dozie usoro ahụ", "Gwa onye ọkwọ ụgbọala ka ọ gbaa ọsọ karịa"], answer: 2, why: "Ị na-elele oge njem AI nyere n'app maapụ ma dozie ihe ọ bụla na-adịghị ka eziokwu." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhụ nsogbu na data ọrụ nhazi",
          minutes: 5,
          goal: "Jiri AI chịkọta obere tebụl data ma kwado ihe ọ chọtara n'onwe gị.",
          text: [
            "Ndị otu ọrụ nhazi na-ele data anya kwa ụbọchị: nnyefe gburu oge, ngwaahịa na-agwụ, ngwaahịa mebiri emebi. AI nwere ike ịchịkọta tebụl ma gosi usoro na-emegharị onwe ya, dị ka \"Nnyefe Tuzde na-egbukarị oge.\"",
            "Were ihe AI chọtara dị ka intel (ozi nnyocha): ọ bara uru, mana kwado ya tupu i mee ihe. Hazie (sort) ma ọ bụ filter spreadsheet ahụ n'onwe gị ka ị hụ ma usoro ahụ ọ bụ eziokwu.",
            "Mgbe ị chọtara ezi nsogbu, dee ihe i chere kpatara ya, ndozi, na otu ị ga-esi mara na ndozi ahụ rụrụ ọrụ."
          ],
          steps: ["Mee obere tebụl: ụbọchị, ebe nkwụsị, n'oge (ee/mba), ihe kpatara ya ma ọ bụrụ na o gburu oge.", "Jụọ ngwa enyemaka AI: \"Kedu usoro ị na-ahụ na tebụl a?\"", "Hazie ma ọ bụ filter mpempe akwụkwọ ahụ n'onwe gị iji kwado ya.", "Dee: nsogbu, ihe nwere ike ịkpata ya, ndozi, otu ị ga-esi tụọ ya."],
          words: [["Pattern", "ihe na-eme ugboro ugboro na data."], ["Filter", "ngwa spreadsheet na-egosi naanị ahịrị ndị ị họrọ."]],
          slides: [
            { title: "AI nwere ike ịchịkọta data", bullets: ["Nnyefe gburu oge, ngwaahịa na-agwụ, mmebi", "Ọ na-egosi usoro na-emegharị onwe ya"] },
            { title: "Were ya dị ka intel", bullets: ["Ọ bara uru, mana kwado ya tupu i mee ihe", "Hazie ma ọ bụ filter mpempe akwụkwọ ahụ n'onwe gị"] },
            { title: "Dee ndozi ahụ", bullets: ["Nsogbu na ihe nwere ike ịkpata ya", "Ndozi ahụ", "Otu ị ga-esi tụọ ya"] }
          ],
          tryIt: "Mee tebụl nnyefe ngwaahịa nwere ahịrị 10 nwere ụfọdụ nnyefe gburu oge. Rịọ ngwa enyemaka AI usoro ọ hụrụ, wee filter mpempe akwụkwọ ahụ n'onwe gị iji kwado otu, ma dee ndozi.",
          youCanNow: "iji AI chọta usoro na data ọrụ nhazi ma kwado ya tupu i mee ihe.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka filter spreadsheet na-eme?", options: ["Ọ na-ehichapụ ahịrị ruo mgbe ebighị ebi", "Ọ na-egosi naanị ahịrị ndị ị họrọ", "Ọ na-eme ka nọmba buo ibu", "Ọ na-ezipu mpempe akwụkwọ ahụ n'email"], answer: 1, why: "Filter na-ezo ahịrị ndị ị chọghị ka i wee lelee usoro n'onwe gị." },
            { objective: "O5", q: "AI kwuru na ọtụtụ nnyefe gburu oge si n'otu onye ọkwọ ụgbọala. Gịnị ka ị ga-eme?", options: ["Gwa onye ọkwọ ụgbọala ahụ ozugbo", "Leghara ya anya", "Hichapụ ahịrị onye ọkwọ ụgbọala ahụ", "Filter data ahụ n'onwe gị iji kwado ya tupu i mee ihe"], answer: 3, why: "Were ihe AI chọtara dị ka intel: ọ bara uru, mana kwado ya tupu i mee ihe." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkọwa atụmatụ ahụ na ịchọ ọrụ",
          minutes: 5,
          goal: "Kọwaa atụmatụ ọrụ nhazi n'okwu ndị nkịtị ma jikọta ya na nzọụkwụ ọrụ gị ọzọ.",
          text: [
            "Ndị isi ọrụ n'etiti ndị nkịtị na-achọ nkọwa dị mkpụmkpụ (brief), dị ka ndị isi agha: ọnọdụ ahụ, atụmatụ ahụ, ihe egwu na atụmatụ ndabere, na ihe ị chọrọ n'aka ha. Jiri okwu ndị nkịtị: \"inventory\", \"delivery schedule\", \"on-time rate\".",
            "Gbanwee ọrụ agha gị ka ọ bụrụ ahịrị résumé nwere nọmba, dịka ọmụmaatụ: \"Managed inventory of 1,200 items worth $2 million with zero losses at audit.\" (Lekọtara ngwaahịa 1,200 ruru $2 nde, n'enweghị ihe furu efu n'oge nyocha.) Jiri naanị nọmba ị nwere ike ịkwado.",
            "Maka enyemaka ọrụ, Veterans' Employment and Training Service (VETS) nke Department of Labor na-eme Transition Assistance Program (TAP) ma na-egosi ụzọ apprenticeship (ịmụ ọrụ n'aka onye ọkachamara). Ọ bụrụ na i nwere GI Bill, enyemaka on-the-job training na apprenticeship nke VA nwere ike ịkwụ gị ego kwa ọnwa mgbe ị na-amụ ọrụ n'aka onye were mmadụ n'ọrụ e kwadoro. Lelee peeji gọọmentị maka ndị ruru eru."
          ],
          steps: ["Dee brief ahụ: ọnọdụ, atụmatụ, ihe egwu, ndabere, ihe ị chọrọ.", "Jiri okwu ndị nkịtị n'ebe niile.", "Dee ahịrị résumé abụọ nwere ezi nọmba.", "Lelee dol.gov/agencies/vets na peeji on-the-job training nke va.gov maka nzọụkwụ ọzọ."],
          words: [["Brief", "nchịkọta dị mkpụmkpụ e kwuru ma ọ bụ e dere nke atụmatụ maka onye na-eme mkpebi."], ["On-time rate", "akụkụ nnyefe ngwaahịa na-abịarute n'oge e kwere ná nkwa."]],
          slides: [
            { title: "Kọwaa dị ka i mere n'ọrụ agha", bullets: ["Ọnọdụ, atụmatụ, ihe egwu, ndabere", "Ihe ị chọrọ n'aka ha", "N'okwu ndị nkịtị"] },
            { title: "Ahịrị résumé nwere nọmba", bullets: ["\"Managed 1,200 items worth $2M, zero losses\"", "Naanị nọmba ị nwere ike ịkwado"] },
            { title: "Enyemaka gọọmentị", bullets: ["DOL VETS: TAP na apprenticeship", "VA on-the-job training (GI Bill)", "Lelee ndị ruru eru na peeji gọọmentị"] }
          ],
          sources: [
            { name: "U.S. Department of Labor, Veterans' Employment and Training Service", url: "https://www.dol.gov/agencies/vets" },
            { name: "VA: On-the-job training and apprenticeships", url: "https://www.va.gov/education/about-gi-bill-benefits/how-to-use-benefits/on-the-job-training-apprenticeships/" }
          ],
          tryIt: "Ọrụ ikpeazụ: tinye mpempe akwụkwọ ịzụghachi ngwaahịa gị, usoro nnyefe ngwaahịa i lelere, ihe egwu atọ nwere ndabere, na ahịrị résumé abụọ n'ime brief ọrụ nhazi nwere otu peeji.",
          youCanNow: "ime atụmatụ ngwaahịa na nnyefe site n'enyemaka AI, ilele atụmatụ ahụ n'onwe gị, na ịkọwa ya n'okwu ndị nkịtị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-abanye n'ezigbo brief ọrụ nhazi?", options: ["Naanị ozi ọma", "Akụkọ ogologo gbasara ọrụ gị niile", "Ọnọdụ, atụmatụ, ihe egwu na ndabere", "Ahịrị ọ bụla dị na spreadsheet gị"], answer: 2, why: "Brief na-enye ọnọdụ ahụ, atụmatụ ahụ na ihe egwu na ndabere, dị mkpụmkpụ ma doo anya." },
            { objective: "O6", q: "Kedu ahịrị résumé kacha kọwaa ọrụ lọjistiks agha nke ọma maka onye were mmadụ n'ọrụ n'etiti ndị nkịtị?", options: ["\"Managed 800 items worth $1M with zero losses at audit.\"", "\"Was S4 shop NCOIC.\"", "\"Did supply.\"", "\"Handled CL IX.\""], answer: 0, why: "Ọ na-eji okwu ndị nkịtị, ogo na nsonaazụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime atụmatụ na ịkọwa ọrụ nhazi",
        questions: [
          { objective: "O4", q: "Gịnị ka ị ga-enye AI ka o dee usoro nnyefe ngwaahịa?", options: ["Ozi nbanye ụlọ akụ gị", "Naanị okwu \"schedule\"", "Adreesị ụlọ ndị ahịa", "Ebe nkwụsị, awa, ụgbọala, ndị ọkwọ ụgbọala na mkpa"], answer: 3, why: "Ezi oke na-enyere AI aka ide atụmatụ bara uru." },
          { objective: "O4", q: "Usoro AI zipụrụ van n'ebe nkwụsị mgbe e mechiri ya. Ị kwesịrị:", options: ["Idozi usoro ahụ", "Ịhapụ ya otu o si dị", "Ịchụ onye ọkwọ ụgbọala ahụ n'ọrụ", "Imechi azụmahịa ahụ"], answer: 0, why: "Ilele megide oke bụ ọrụ gị." },
          { objective: "O5", q: "AI kwuru na Tuzde na-egbukarị oge. Gịnị ọzọ?", options: ["Leghara ya anya", "Kagbuo Tuzde", "Filter data ahụ n'onwe gị iji kwado ya", "Tinye ya n'ịntanetị"], answer: 2, why: "Kwado tupu i mee ihe, dị ka ilele intel." },
          { objective: "O6", q: "Ezigbo brief ọrụ nhazi gụnyere:", options: ["Enweghị atụmatụ", "Naanị njakịrị", "Naanị koodu agha", "Ọnọdụ, atụmatụ, ihe egwu na ndabere"], answer: 3, why: "Nke ahụ bụ ihe ndị na-eme mkpebi chọrọ." },
          { objective: "O6", q: "Kedu enyemaka VA nwere ike ịkwụ ego kwa ọnwa mgbe ị na-amụ ọrụ n'aka onye were mmadụ n'ọrụ e kwadoro?", options: ["Inshọransị ndụ", "Mbinye ego maka ụlọ", "On-the-job training na apprenticeship", "Enyemaka olili ozu"], answer: 2, why: "va.gov na-akọwa ego kwa ọnwa n'oge OJT ma ọ bụ apprenticeship e kwadoro." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Lọjistiks na Ọrụ Nhazi",
    questions: [
      { objective: "O1", q: "Supply chain bụ:", options: ["Agbụ dị n'ụgbọ ibu", "Nzọụkwụ niile site n'imepụta ngwaahịa ruo n'aka onye na-eji ya", "Ụdị nkwekọrịta", "Ọnụ ụzọ ụlọ nkwakọba ngwaahịa"], answer: 1, why: "Ọ gụnyere ụzọ niile ruo n'aka onye na-eji ya." },
      { objective: "O1", q: "Motor pool n'agha kacha yie:", options: ["Fleet maintenance", "Ndekọ ego (accounting)", "Ahịa na mgbasa ozi (marketing)", "Iwu (legal)"], answer: 0, why: "Ha abụọ na-elekọta ụgbọala." },
      { objective: "O1", q: "Gịnị bụ 3PL?", options: ["Ọkwa n'agha", "Ụdị ụgbọ ibu", "Ụlọ ọrụ e goro iji debe ma zipu ngwaahịa maka azụmahịa ọzọ", "Spreadsheet"], answer: 2, why: "Ụlọ ọrụ third-party logistics na-elekọta nchekwa na nziga ngwaahịa." },
      { objective: "O1", q: "Kedu saịtị n'efu na-ejikọta ọrụ agha na ọrụ ndị nkịtị?", options: ["My Next Move for Veterans", "App egwu", "Saịtị ịzụ ahịa", "Egwuregwu"], answer: 0, why: "A na-arụ mynextmove.org/vets maka Department of Labor." },
      { objective: "O2", q: "Demand forecasting pụtara:", options: ["Iwe ndị ọkwọ ụgbọala n'ọrụ", "Ibuga ngwaahịa ngwa ngwa", "Ise ụgbọ ibu agba", "Ịkọ nke ọma ole a ga-achọ"], answer: 3, why: "Forecast na-atụ mkpa ga-adị n'ọdịnihu." },
      { objective: "O2", q: "Kedu ihe AI na-eme atụmatụ ụzọ nwere ike ọ gaghị ahụ?", options: ["Ọnụ ọgụgụ ebe nkwụsị i nyere ya", "Ụzọ e mechiri n'ụtụtụ a", "Maapụ ahụ", "Okwu \"route\""], answer: 1, why: "Ihe ọhụrụ mere nwere ike ọ gaghị anọ na data ya." },
      { objective: "O2", q: "Onye na-ahazi exception dị ka ụgbọ ibu gburu oge?", options: ["Ọ dịghị onye", "Ndị mmadụ", "Naanị AI", "Onye ahịa"], answer: 1, why: "Ikpe ikpe mmadụ na-ahazi exception." },
      { objective: "O3", q: "Lead time bụ:", options: ["Awa ụlọ ahịa na-emeghe", "Oge onye ọkwọ ụgbọala na-edu convoy", "Oge nri ehihie", "Ụbọchị ole ọ na-ewe ka ihe i nyere iwu bịarute"], answer: 3, why: "Lead time bụ oge a na-eche nnyefe." },
      { objective: "O3", q: "Safety stock bụ:", options: ["Ngwaahịa mgbakwunye e debere maka ihe mberede", "Ngwaahịa e kpọchiri", "Ngwaahịa mebiri emebi", "Ngwaahịa e rere taa"], answer: 0, why: "Ọ na-ekpuchi mkpa a na-atụghị anya ya ma ọ bụ igbu oge." },
      { objective: "O3", q: "Ojiji kwa ụbọchị 20, lead time 5, safety stock 40. Reorder point?", options: ["25", "65", "100", "140"], answer: 3, why: "20 x 5 + 40 = 140." },
      { objective: "O3", q: "Olee otu ị ga-esi mara na usoro mgbakọ AI dere ziri ezi?", options: ["Hichapụ ya", "Kwere ya", "Jụọ naanị AI ọzọ", "Lelee otu ahịrị n'aka"], answer: 3, why: "Ilele n'aka na-akwado mgbakọ ahụ." },
      { objective: "O4", q: "Constraint n'usoro oge bụ:", options: ["Nnyefe ngwaahịa", "Ụdị ụgbọ ibu", "Oke atụmatụ ahụ ga-agbaso", "Onye ahịa"], answer: 2, why: "Awa mmeghe na awa ndị ọkwọ ụgbọala bụ constraint." },
      { objective: "O4", q: "Olee otu ị ga-esi lelee oge njem AI nyere?", options: ["Chee ya n'echiche", "Tụnyere ya na app maapụ", "Gwa onye ọkwọ ụgbọala ka ọ gbaa ọsọ", "Leghara ha anya"], answer: 1, why: "App maapụ na-enye oge dị ka eziokwu." },
      { objective: "O4", q: "Kedu nke a na-ekwesịghị itinye na ngwa AI ọha?", options: ["Aha ndị ahịa na adreesị ụlọ ha", "Ebe nkwụsị e chepụtara echepụta", "Awa mmeghe nke ụlọ ahịa e chepụtara echepụta", "Ọnụ ọgụgụ ụgbọala van"], answer: 0, why: "Ozi gbasara ndị ahịa bụ nzuzo." },
      { objective: "O5", q: "Ihe AI chọtara na data, a ga-ewere ya dị ka:", options: ["Njakịrị", "Iwu ị ga-agbasorịrị", "Intel: ọ bara uru mana kwado ya tupu i mee ihe", "Eziokwu ikpeazụ"], answer: 2, why: "Ịkwado ya na-egbochi ime ihe n'ihi mperi." },
      { objective: "O5", q: "Filter spreadsheet na-ekwe ka ị:", options: ["Gosi naanị ahịrị ndị ị họrọ", "Hichapụ mpempe akwụkwọ ahụ", "Bipụta ngwa ngwa", "Gbanwee ụdị mkpụrụ edemede"], answer: 0, why: "Filter na-enyere gị aka ilele usoro." },
      { objective: "O5", q: "Mgbe ị chọtara ezi nsogbu, dee:", options: ["Okwuntughe ọhụrụ", "Naanị onye a ga-ata ụta", "Ọ dịghị ihe", "Ihe kpatara ya, ndozi, na otu ị ga-esi tụọ ya"], answer: 3, why: "Ndozi a tụrụ atụ na-egosi na ọ rụrụ ọrụ." },
      { objective: "O5", q: "On-time rate pụtara:", options: ["Ọsọ onye ọkwọ ụgbọala", "Akụkụ nnyefe ngwaahịa na-abịarute n'oge e kwere ná nkwa", "Ego mmanụ ụgbọala", "Ọnụ ọgụgụ ụgbọ ibu"], answer: 1, why: "Ọ na-atụ nkwa e mezuru." },
      { objective: "O6", q: "Kedu ahịrị résumé kacha sie ike?", options: ["\"Did supply stuff.\"", "\"Managed 1,200 items worth $2M with zero losses at audit.\"", "\"Worked hard.\"", "\"Army.\""], answer: 1, why: "Nọmba na nsonaazụ na-egosi mmetụta ọrụ gị." },
      { objective: "O6", q: "Ụlọ ọrụ DOL na-elekọta mmemme ọrụ ndị agha lara ezumike, gụnyere TAP, bụ:", options: ["EPA", "IRS", "FAA", "VETS"], answer: 3, why: "Veterans' Employment and Training Service na-eme TAP maka DOL." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 5, 9, 10, 12, 14, 16, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Mpempe akwụkwọ ịzụghachi ngwaahịa", objective: "O3", notYet: "Ihe erughị ise, ma ọ bụ reorder point ezighi ezi.", meets: "Ihe ise nwere reorder point ziri ezi, otu ahịrị e lelere n'aka.", exceeds: "Mpempe akwụkwọ ahụ na-egosi ihe ndị ruru ma ọ bụ dị n'okpuru reorder point." },
      { name: "Usoro nnyefe ngwaahịa e lelere", objective: "O4", notYet: "E jiri usoro AI n'eleleghị ya, ma ọ bụ ọ na-emebi otu oke.", meets: "Usoro nke otu izu na-asọpụrụ awa ebe nkwụsị, ụgbọala na ndị ọkwọ ụgbọala, nwere oge njem e lelere n'app maapụ.", exceeds: "Onye na-amụ ihe na-akpọ aha nsogbu ọ hụrụ na otu o si dozie ya." },
      { name: "Ihe egwu na ndabere", objective: "O6", notYet: "Ihe egwu erughị atọ, ma ọ bụ ihe egwu na-enweghị ndabere.", meets: "Ihe egwu atọ, nke ọ bụla nwere atụmatụ ndabere.", exceeds: "Ndabere ọ bụla na-ekwu onye ga-eme ihe na mgbe ole." },
      { name: "Ahịrị résumé n'okwu ndị nkịtị", objective: "O1", notYet: "Ahịrị ndị ahụ na-eji okwu agha ma ọ bụ enweghị nsonaazụ.", meets: "Ahịrị abụọ n'okwu lọjistiks ndị nkịtị nwere ogo ma ọ bụ nsonaazụ.", exceeds: "Ahịrị ndị ahụ dabara n'aha ọrụ ndị nkịtị site na My Next Move for Veterans." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rịọrọ ọrụ lọjistiks, ụlọ nkwakọba ngwaahịa ma ọ bụ njem ndị nkịtị n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe nwetara ọrụ lọjistiks, apprenticeship ma ọ bụ ohere on-the-job training n'ime ụbọchị 90",
      "Ụlọ nri ndị ogbenye ma ọ bụ obere azụmahịa ndị mmekọ na-eji mpempe akwụkwọ ịzụghachi ngwaahịa ma ọ bụ usoro oge onye na-amụ ihe"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Spreadsheet n'efu: Google Sheets ma ọ bụ Microsoft Excel na ịntanetị",
      "Ngwa enyemaka AI n'efu: ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini, na app maapụ",
      "Igwe mgbakọ",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Nye onye ọ bụla na-amụ ihe otu ụlọ nri ndị ogbenye ma ọ bụ ụlọ ahịa akụkụ ngwaọrụ e chepụtara echepụta ka ha nwee ike ịtụnyere mpempe akwụkwọ na usoro oge ha.",
      "Gosi otu mgbakọ reorder point na bọọdụ tupu ndị na-amụ ihe ewuo mpempe akwụkwọ nke ha.",
      "Jiri naanị ebe nkwụsị na data e chepụtara echepụta; etinyela ezi aha ndị ahịa ma ọ bụ adreesị ụlọ na AI ọha mgbe ọ bụla.",
      "Mee ka ndị na-amụ ihe kọwaa atụmatụ ha n'olu dị elu n'ime nkeji abụọ, dị ka ha ga-akọwara onye isi ọrụ n'etiti ndị nkịtị.",
      "Jiri rubric tụọ akara brief ọrụ nhazi ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
