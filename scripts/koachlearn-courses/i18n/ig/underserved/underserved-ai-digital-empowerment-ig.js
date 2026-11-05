"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-ai-digital-empowerment.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-digital-empowerment-ig",
  lang: "ig",
  translationOf: "underserved-ai-digital-empowerment",
  category: "Undeserved Community",
  name: "Mmalite AI na Ike n'Ihe Dijitalụ",
  skills: "Ịbanye n'ịntanetị n'efu ma ọ bụ n'obere ego, Imeghe ngwa enyemaka AI n'efu, Ịrịọ enyemaka n'okwu dị mfe, Ime ka akwụkwọ ozi siri ike bụrụ ndepụta ihe ime, Ịlele azịza na ichebe ozi gị",
  outcome: "ịbanye n'ịntanetị n'ọba akwụkwọ, n'ebe obodo na-ezukọ ma ọ bụ n'ekwentị gị, ma jiri ngwa enyemaka AI n'efu mee ka akwụkwọ ozi ma ọ bụ ọkwa na-agbagwoju anya bụrụ okwu dị mfe na obere ndepụta ihe ime, n'ekesaghị ozi nzuzo.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla chere na teknụzụ hapụrụ ya n'azụ, ma ọ bụ onye a gwara na kọmputa na AI \"abụghị maka ndị dị ka anyị\". Ha bụ maka gị, ọtụtụ n'ime ngwa kacha mma bụkwa n'efu.",
    "Ị ga-achọta ụzọ n'efu ma ọ bụ n'obere ego isi banye n'ịntanetị, meghee ngwa enyemaka AI n'efu, ma jiri ya maka ezi ọrụ ezinụlọ: ịgụ akwụkwọ ozi siri ike, ịhazi izu jupụtara n'ọrụ, ma ọ bụ ide ozi nye ụlọ akwụkwọ ma ọ bụ onye nwe ụlọ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Were ezi akwụkwọ ozi ma ọ bụ ọkwa i nwetara (site n'ụlọ akwụkwọ, ụlọ ọgwụ, onye nwe ụlọ ma ọ bụ ụlọ ọrụ ọkụ na mmiri). Kpuchie ma ọ bụ wepụ nọmba nzuzo na aha ọ bụla. Rịọ ngwa enyemaka AI n'efu ka ọ kọwaa ya n'okwu dị mfe ma mee obere ndepụta ihe ime nwere ụbọchị. Wee lelee otu ụbọchị ma ọ bụ nọmba ekwentị na weebụsaịtị gọọmentị ma ọ bụ site n'ịkpọ ọfịs ahụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nọ n'obodo ndị a na-elegharị anya bụ ndị chere na teknụzụ hapụrụ ha n'azụ: ezinụlọ na-enweghị ego buru ibu, ndị agadi, ndị nne na nna, ndị na-enweghị kọmputa n'ụlọ, na ndị na-asụ asụsụ ọzọ dị ka asụsụ nke abụọ.",
    startingPoint: "Ha nwere ike ịkpọ oku ma zipu ozi n'ekwentị. Ha anaghị eji kọmputa, web browser ma ọ bụ ngwa enyemaka AI, ma ọ bụ na-eji ha ntakịrị, a gwakwala ụfọdụ na teknụzụ \"abụghị maka ndị dị ka anyị\".",
    gap: "Ụlọ akwụkwọ, ụlọ ọgwụ, ndị nwe ụlọ na ọfịs gọọmentị na-ezipu akwụkwọ ozi ma na-atụ anya ka ndị mmadụ mee ihe n'ịntanetị. Ndị na-amụ ihe chọrọ ebe n'efu ịbanye n'ịntanetị na ụzọ n'enweghị nsogbu iji ngwa enyemaka AI n'efu ghọta akwụkwọ ozi ma hazie ihe ha ga-eme, n'ekweghị ka azịza ezighi ezi ma ọ bụ aghụghọ duhie ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: ụfọdụ nwere naanị ekwentị nkịtị ma ọ bụ kọmputa ọba akwụkwọ nwere oge a kara aka",
      "Ego: naanị ngwa n'efu na ebe n'efu ịbanye n'ịntanetị",
      "Ihe egwu dị elu nke aghụghọ na nzuzo: enweghị ezi nọmba nzuzo ma ọ bụ aha n'ọrụ omume ọ bụla",
      "Oge: nkuzi dị mkpụmkpụ nke dabara n'etiti ọrụ, ezinụlọ na oge ịhụ ndị ọrụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "N'ebe ị bi", action: "ịkpọ aha ebe n'efu ị nwere ike ịbanye n'ịntanetị na otu mmemme nwere ike ibelata ụgwọ ekwentị ma ọ bụ ịntanetị gị", standard: "ma kpọọ aha opekata mpe ebe abụọ na oge mmeghe ha" },
    { id: "O2", condition: "Mgbe e nyere gị ndepụta ọrụ kwa ụbọchị", action: "ịmata ndị ngwa enyemaka AI nwere ike inyere aka na onye na-ekpebi ihe a ga-eme n'azịza ya", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O3", condition: "Site n'iji kọmputa ọba akwụkwọ ma ọ bụ ekwentị", action: "imeghe ngwa enyemaka AI n'efu site n'ezi app ma ọ bụ weebụsaịtị ya ma jụọ ajụjụ nwere ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị", standard: "n'enweghị onye nyere gị aka" },
    { id: "O4", condition: "Mgbe e nyere gị akwụkwọ ozi ma ọ bụ ọkwa na-agbagwoju anya", action: "ịrịọ ngwa enyemaka AI ka ọ kọwaa ya n'okwu dị mfe ma mee ndepụta ihe ime nwere ụbọchị, na-eji ihe nnọchi maka ozi nzuzo", standard: "n'enweghị ezi aha ma ọ bụ nọmba ọ bụla na prompt" },
    { id: "O5", condition: "Mgbe e nyere gị azịza AI nwere ụbọchị, nọmba ekwentị ma ọ bụ iwu", action: "ịlele ya na akwụkwọ ozi ahụ, ezi weebụsaịtị .gov, ọfịs ahụ ma ọ bụ 211", standard: "tupu i mee ihe n'elu ya" },
    { id: "O6", condition: "Mgbe ị na-ede prompt ma ọ bụ nweta ozi na-eme ngwa ngwa", action: "idebe ozi nzuzo n'ebe ọ na-adịghị ma hụ ihe ịdọ aka na ntị nke aghụghọ", standard: "n'ekesaghị nọmba nzuzo ọ bụla, na-akpọtụrụ ọfịs naanị site na nọmba ma ọ bụ saịtị ị chọtara n'onwe gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ijikọ n'ịntanetị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ụzọ n'efu na n'obere ego isi banye n'ịntanetị",
          minutes: 5,
          goal: "Kpọọ aha ebe abụọ dị nso gị ebe ị nwere ike iji ịntanetị n'efu, na otu mmemme nwere ike ibelata ụgwọ ekwentị ma ọ bụ ịntanetị gị.",
          text: [
            "Ọ dịghị mkpa ka i nwee kọmputa iji teknụzụ. Ọba akwụkwọ ọha nwere kọmputa n'efu na Wi-Fi n'efu, ọtụtụ n'ime ha na-agbazinyekwa laptop ma ọ bụ hotspot. Ebe obodo na-ezukọ, ebe enyemaka ọrụ na ụfọdụ ụka nwekwara kọmputa ị nwere ike iji.",
            "Lifeline bụ mmemme gọọmentị etiti (federal) na-ebelata ụgwọ ọnwa ọ bụla nke ekwentị ma ọ bụ ịntanetị maka ndị na-enweghị ego buru ibu ma ọ bụ ndị nọ na mmemme dị ka SNAP ma ọ bụ Medicaid. Ị na-etinye akwụkwọ n'ịntanetị, wee họrọ ụlọ ọrụ ekwentị ma ọ bụ ịntanetị so na ya.",
            "Ndị ọrụ ọba akwụkwọ nwere ike inyere gị aka ịmalite. Ịrịọ enyemaka bụ ihe nkịtị; inyere ndị mmadụ aka na kọmputa so n'ọrụ ha."
          ],
          steps: ["Chọọ ọba akwụkwọ ọha kacha nso gị na oge mmeghe ya.", "Jụọ ma ọ na-agbazinye laptop ma ọ bụ hotspot, na ma o nwere klas kọmputa n'efu.", "Ọ bụrụ na ego siri ike, gụọ maka Lifeline na ezi saịtị ya ma lee ma ị ruru eru.", "Dee ebe na oge ị ga-abanye n'ịntanetị n'izu a."],
          words: [["Wi-Fi", "ụzọ isi jikọọ n'ịntanetị n'enweghị waya."], ["Hotspot", "obere ngwaọrụ (ma ọ bụ ntọala n'ekwentị) na-ekesa njikọ ịntanetị na ngwaọrụ ndị ọzọ."], ["Lifeline", "mmemme gọọmentị etiti (federal) na-enye mbelata ụgwọ kwa ọnwa n'ekwentị ma ọ bụ ịntanetị nye ndị ruru eru."]],
          sources: [{ name: "Lifeline Support (USAC, ezi saịtị Lifeline)", url: "https://www.lifelinesupport.org/" }],
          slides: [
            { title: "Ị nwere ike ịbanye n'ịntanetị n'enweghị kọmputa nke gị", bullets: ["Ọba akwụkwọ ọha: kọmputa na Wi-Fi n'efu", "Ebe obodo na-ezukọ na ebe enyemaka ọrụ", "Ụfọdụ ọba akwụkwọ na-agbazinye laptop na hotspot"] },
            { title: "Belata ụgwọ ekwentị ma ọ bụ ịntanetị gị", bullets: ["Lifeline na-enye mbelata kwa ọnwa nye ndị ruru eru", "Ị nwere ike iru eru site n'ego ị na-enweta, SNAP ma ọ bụ Medicaid", "Tinye akwụkwọ na ezi saịtị Lifeline"] },
            { title: "Rịọ enyemaka", bullets: ["Ndị ọrụ ọba akwụkwọ na-enyere ndị mmadụ aka na kọmputa kwa ụbọchị", "Jụọ maka klas kọmputa n'efu", "Ịjụ ajụjụ bụ amamihe, ọ bụghị adịghị ike"] }
          ],
          tryIt: "Dee ebe abụọ dị nso gị ebe ị nwere ike iji ịntanetị n'efu, na oge mmeghe ha. Ọ bụrụ na ụgwọ ekwentị ma ọ bụ ịntanetị gị siri ike ịkwụ, meghee lifelinesupport.org ma gụọ ndị ruru eru.",
          youCanNow: "ịkpọ aha ebe n'efu ị nwere ike ịbanye n'ịntanetị ma mara ebe ị ga-amụta maka Lifeline.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ hotspot nke ụfọdụ ọba akwụkwọ na-agbazinye?", options: ["Obere ngwaọrụ na-enyere gị aka ịbanye n'ịntanetị", "Igwe na-ekpo ọkụ maka ụlọ oyi", "Atụmatụ ekwentị n'efu", "Klas kọmputa"], answer: 0, why: "Hotspot bụ obere ngwaọrụ na-enye gị ịntanetị ka ị nwee ike ịbanye n'ịntanetị ebe ọ bụghị n'ọba akwụkwọ." },
            { objective: "O1", q: "Ụgwọ ịntanetị gị siri ike ịkwụ, ị na-enwetakwa SNAP. Gịnị ka ị ga-eme?", options: ["Kwụsị ịntanetị kpamkpam", "Gụọ maka Lifeline na ezi saịtị ya ka ị hụ ma ị ruru eru", "Rịọ onye ị na-amaghị n'ịntanetị ka ọ kwụọ ya", "Chere ka ụlọ ọrụ ahụ kpọọ gị"], answer: 1, why: "Lifeline na-ebelata ụgwọ kwa ọnwa maka ndị na-enweghị ego buru ibu ma ọ bụ ndị nọ na mmemme dị ka SNAP." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ihe AI bụ, n'okwu kwa ụbọchị",
          minutes: 4,
          goal: "Kọwaa ihe ngwa enyemaka AI bụ ma kpọọ aha ụzọ atọ o nwere ike isi nyere ezinụlọ gị aka.",
          text: [
            "AI pụtara artificial intelligence (ọgụgụ isi arụrụ arụ). Ngwa enyemaka AI bụ mmemme kọmputa ị nwere ike ide ihe na ya ma ọ bụ gwa ya okwu n'okwu nke gị. Ọ na-ede azịza n'ime sekọnd ole na ole. Ndị n'efu gụnyere ChatGPT, Microsoft Copilot na Google Gemini.",
            "O nwere ike ịkọwa akwụkwọ ozi siri ike, ide obere ozi, ịhazi nri n'obere ego, inyere nwatakịrị aka ịghọta ihe omume ụlọ akwụkwọ, ma ọ bụ ịsụgharị n'etiti asụsụ.",
            "Ọ bụ onye enyemaka, ọ bụghị onye isi. Ọ maghị ndụ gị, ọ na-ehiekwa eziokwu mgbe ụfọdụ. Gị na-ekpebi ihe ị ga-ajụ na ihe ị ga-eji."
          ],
          words: [["AI", "artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme kọmputa na-arụ ọrụ dị ka ide ihe na ịza ajụjụ."], ["Ngwa enyemaka AI", "mmemme AI ị na-akparịta ụka na ya site n'ide ihe ma ọ bụ ikwu okwu."]],
          slides: [
            { title: "Ngwa enyemaka AI bụ onye enyemaka", bullets: ["Ị na-ede ma ọ bụ kwuo okwu n'okwu nke gị", "Ọ na-ede azịza n'ime sekọnd ole na ole", "Ndị n'efu: ChatGPT, Microsoft Copilot, Google Gemini"] },
            { title: "Ụzọ o nwere ike isi nyere ezinụlọ gị aka", bullets: ["Ịkọwa akwụkwọ ozi siri ike", "Ịhazi nri n'obere ego", "Inyere aka n'ajụjụ ihe omume ụlọ akwụkwọ", "Ịsụgharị ozi"] },
            { title: "Gị bụ onye isi", bullets: ["Ọ maghị ndụ gị", "O nwere ike ihie eziokwu", "Gị na-ekpebi ihe ị ga-ajụ na ihe ị ga-eji"] }
          ],
          tryIt: "Dee ọrụ atọ site n'izu gị ebe ngwa enyemaka AI nwere ike inyere gị, ezinụlọ gị ma ọ bụ otu obodo gị aka.",
          youCanNow: "ikwu ihe ngwa enyemaka AI bụ ma kpọọ aha ụzọ atọ o nwere ike isi nyere gị aka.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ngwa enyemaka AI?", options: ["Mmadụ na-agụ akwụkwọ ozi gị", "Ọfịs gọọmentị", "Mmemme ị na-ede ihe na ya ma ọ bụ gwa okwu n'okwu nke gị", "Ụlọ ọrụ ekwentị"], answer: 2, why: "Ngwa enyemaka AI bụ mmemme na-ede azịza mgbe ị jụrụ ajụjụ n'okwu nke gị." },
            { objective: "O2", q: "Nwa gị anaghị aghọta ihe omume ụlọ akwụkwọ ya. Kedu otu ngwa enyemaka AI ga-esi nyere aka?", options: ["Mee ule ahụ niile maka ya", "Bịanye aka n'akwụkwọ ụlọ akwụkwọ", "Kpọọ onye nkuzi n'ọnọdụ gị", "Kọwaa isiokwu ahụ n'okwu dị mfe karị"], answer: 3, why: "AI nwere ike ịkọwa ihe n'okwu dị mfe karị; gị na nwa gị ka bụ ndị isi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Imeghe ngwa enyemaka AI n'efu na ịjụ ajụjụ mbụ gị",
          minutes: 5,
          goal: "Meghee ngwa enyemaka AI n'efu ma jụọ ya ajụjụ doro anya banyere ezi ọrụ.",
          text: [
            "Na kọmputa ọba akwụkwọ ma ọ bụ nke ebe obodo na-ezukọ, meghee web browser ma gaa na copilot.microsoft.com, chatgpt.com ma ọ bụ gemini.google.com. Na ekwentị, wụnye ezi app site n'ụlọ ahịa app.",
            "Chọọ igbe ebe ị na-ede ihe. Jụọ ajụjụ gị otu ị ga-esi jụọ onye agbata obi na-enyere aka: kwuo ihe ị chọrọ, ntakịrị banyere ọnọdụ gị, na otu ị chọrọ ka azịza dị.",
            "Dịka ọmụmaatụ: \"Enwere m $60 maka nri n'izu a maka ezinụlọ mmadụ anọ. Nye m echiche nri abalị ise dị ọnụ ala na ndepụta ihe a ga-azụ. Jiri okwu dị mfe.\""
          ],
          steps: ["Meghee browser ma ọ bụ ezi app.", "Chọta igbe ozi.", "Dee ihe ị chọrọ, ọnọdụ gị (n'enweghị ozi nzuzo), na otu ị chọrọ ka azịza dị.", "Pịa Enter ma ọ bụ metụ akara ziga, wee gụọ azịza."],
          words: [["Browser", "mmemme ị na-eji eleta weebụsaịtị, dị ka Chrome, Edge ma ọ bụ Safari."], ["Prompt", "ajụjụ ma ọ bụ arịrịọ ị na-ede nye ngwa enyemaka AI."]],
          slides: [
            { title: "Meghee ya", bullets: ["Kọmputa: copilot.microsoft.com, chatgpt.com ma ọ bụ gemini.google.com", "Ekwentị: ezi app site n'ụlọ ahịa app"] },
            { title: "Jụọ ya otu ị na-ajụ onye agbata obi", bullets: ["Ihe ị chọrọ", "Ntakịrị banyere ọnọdụ gị", "Otu ị chọrọ ka azịza dị"] },
            { title: "Ọmụmaatụ", bullets: ["\"Enwere m $60 maka nri maka ezinụlọ mmadụ anọ.", "Nye m nri abalị ise dị ọnụ ala na ndepụta ihe a ga-azụ.", "Jiri okwu dị mfe.\""] }
          ],
          tryIt: "Meghee ngwa enyemaka AI n'efu. Rịọ ya enyemaka n'otu ọrụ site na ndepụta gị na Nkuzi 2, na-eji akụkụ atọ niile nke ezigbo ajụjụ. Gụọ azịza ya.",
          youCanNow: "imeghe ngwa enyemaka AI n'efu ma jụọ ajụjụ doro anya nke na-enweta azịza bara uru.",
          quickCheck: [
            { objective: "O3", q: "Na kọmputa ọba akwụkwọ, ebee ka ị ga-ede copilot.microsoft.com?", options: ["N'igbe adreesị nke web browser", "N'ozi ederede", "Na menu igwe mbipụta", "N'email i zigara ọba akwụkwọ"], answer: 0, why: "Ị na-emeghe web browser ma dee adreesị ahụ iji ruo ngwa enyemaka AI." },
            { objective: "O3", q: "Ị chọrọ enyemaka ịhazi oriri ụbọchị ọmụmụ n'obere ego. Kedu ajụjụ kacha mma?", options: ["\"Oriri.\"", "\"Nyere m aka hazie oriri maka ụmụaka 8 na $50. Nye m ndepụta dị mfe.\"", "\"Gwa m ihe niile.\"", "\"Gịnị bụ oriri?\""], answer: 1, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ijikọ n'ịntanetị",
        questions: [
          { objective: "O1", q: "Ị nweghị kọmputa. Ebee ka ị na-enwekarị ike iji otu n'efu?", options: ["Ọba akwụkwọ ọha", "Ebe a na-ere ụgbọala", "Ime ụlọ nchekwa ụlọ akụ", "Ebe a na-ere mmanụ ụgbọala"], answer: 0, why: "Ọba akwụkwọ ọha na-enye kọmputa na Wi-Fi n'efu." },
          { objective: "O1", q: "Gịnị ka Lifeline na-eme?", options: ["Ọ na-enye gị ụgbọala n'efu", "Ọ na-ebelata ụgwọ kwa ọnwa nke ekwentị ma ọ bụ ịntanetị maka ndị ruru eru", "Ọ na-akwụ ụgwọ ụlọ gị", "Ọ na-enye gị kọmputa ọhụrụ kwa afọ"], answer: 1, why: "Lifeline bụ mbelata ụgwọ gọọmentị etiti n'ekwentị ma ọ bụ ịntanetị." },
          { objective: "O2", q: "Kedu nke bụ ngwa enyemaka AI n'efu?", options: ["App igwe mgbakọ", "Igwe mbipụta", "Microsoft Copilot", "Ozi ederede"], answer: 2, why: "Copilot, ChatGPT na Gemini bụ ngwa enyemaka AI a ma ama n'efu." },
          { objective: "O2", q: "Onye na-ekpebi ihe a ga-eme n'azịza ngwa enyemaka AI?", options: ["AI", "Ụlọ ahịa app", "Ọba akwụkwọ", "Gị"], answer: 3, why: "AI bụ onye enyemaka; gị ka bụ onye isi." },
          { objective: "O3", q: "Kedu ajụjụ ga-enweta azịza kacha baa uru?", options: ["\"nri\"", "\"Enwere m $60 maka nri maka mmadụ anọ. Nye m nri abalị ise dị ọnụ ala na ndepụta n'okwu dị mfe.\"", "\"enyemaka\"", "\"gwa m ihe\""], answer: 1, why: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI maka ezi ndụ, n'enweghị nsogbu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime ka akwụkwọ ozi siri ike bụrụ okwu dị mfe",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI kọwaa akwụkwọ ozi na-agbagwoju anya ma mee ndepụta ihe ime.",
          text: [
            "Akwụkwọ ozi site n'ụlọ akwụkwọ, ụlọ ọgwụ, ndị nwe ụlọ na ọfịs gọọmentị nwere ike ijupụta n'okwu siri ike. Ngwa enyemaka AI nwere ike itinye ha n'okwu dị mfe ma wepụta ihe ị ga-eme na mgbe ị ga-eme ya.",
            "Nke mbụ, wepụ ozi nzuzo. Dee ma ọ bụ tinye naanị okwu ndị na-akọwa ihe akwụkwọ ozi ahụ bụ maka ya, ma were ihe nnọchi dị ka [aha m] ma ọ bụ [nọmba akaụntụ] dochie aha na nọmba.",
            "Wee jụọ: \"Kọwaa akwụkwọ ozi a n'okwu dị mfe. Gịnị ka m ga-eme, ruo ụbọchị ole? Mee obere ndepụta ihe ime.\""
          ],
          steps: ["Gụọ akwụkwọ ozi ahụ otu ugboro ma gbaa okirikiri gburugburu akụkụ ndị ị na-aghọtaghị.", "Detuo ma ọ bụ dee akụkụ ndị ahụ, na-eji ihe nnọchi dochie aha na nọmba.", "Rịọ AI ka ọ kọwaa ya n'okwu dị mfe ma mee ndepụta ihe ime nwere ụbọchị.", "Jụọ ajụjụ nsochi ma ọ bụrụ na ihe ọ bụla edoghị anya, dị ka \"Gịnị ka 'recertification' pụtara?\""],
          words: [["Ihe nnọchi (placeholder)", "ihe nnọchi dị ka [aha m] nke ị na-ede kama ezi ozi nzuzo."], ["Ajụjụ nsochi (follow-up)", "ajụjụ nke abụọ na-ewuli elu n'azịza mbụ."]],
          slides: [
            { title: "Akwụkwọ ozi siri ike, okwu dị mfe", bullets: ["Akwụkwọ ozi ụlọ akwụkwọ, ụlọ ọgwụ, onye nwe ụlọ ma ọ bụ ọfịs gọọmentị", "AI nwere ike ịkọwa okwu siri ike", "O nwere ike idepụta ihe ime na mgbe a ga-eme ya"] },
            { title: "Buru ụzọ wepụ ozi nzuzo", bullets: ["Were [aha m] dochie aha", "Were [nọmba akaụntụ] dochie nọmba", "Debe naanị okwu na-akọwa akwụkwọ ozi ahụ"] },
            { title: "Ihe ị ga-ajụ", bullets: ["\"Kọwaa nke a n'okwu dị mfe.\"", "\"Gịnị ka m ga-eme, ruo mgbe ole?\"", "\"Mee obere ndepụta ihe ime.\""] }
          ],
          tryIt: "Họrọ akwụkwọ ozi ma ọ bụ ọkwa i nwere (ma ọ bụ ọmụmaatụ site na weebụsaịtị ụlọ akwụkwọ). Wepụ ozi nzuzo, wee rịọ ngwa enyemaka AI ka ọ kọwaa ya ma mee ndepụta ihe ime.",
          youCanNow: "ime ka akwụkwọ ozi na-agbagwoju anya bụrụ okwu dị mfe na ndepụta ihe ime, n'etinyeghị ozi nzuzo gị.",
          quickCheck: [
            { objective: "O4", q: "Kedu nke bụ ezigbo ihe nnọchi na prompt?", options: ["Ezi nọmba akaụntụ gị", "Aha nwa gị zuru ezu", "[nọmba akaụntụ]", "Adreesị ụlọ gị"], answer: 2, why: "Ihe nnọchi dị ka [nọmba akaụntụ] na-anọchi ezi ozi ahụ ka ọ nọrọ na nzuzo." },
            { objective: "O4", q: "Nkọwa AI ka na-eji okwu \"recertification\", ị maghịkwa ya. Gịnị ka ị ga-eme?", options: ["Hapụ akwụkwọ ozi ahụ", "Chepụta ihe ọ pụtara", "Tinye nọmba okwu gị (case number)", "Jụọ: \"Gịnị ka recertification pụtara?\""], answer: 3, why: "Ajụjụ nsochi na-arịọ AI ka ọ kọwaa okwu siri ike ahụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịlele ihe AI gwara gị",
          minutes: 4,
          goal: "Lelee ụbọchị, nọmba ekwentị ma ọ bụ iwu site n'azịza AI na ezi isi iyi ya.",
          text: [
            "Ngwa enyemaka AI nwere ike ihie. O nwere ike inye nọmba ekwentị ochie, ụbọchị njedebe ezighi ezi, ma ọ bụ iwu si na steeti ọzọ.",
            "Tupu i mee ihe ọ bụla gbasara ego, enyemaka gọọmentị, ahụike, ụlọ akwụkwọ, ebe obibi ma ọ bụ iwu, lelee ya. Lee akwụkwọ ozi ahụ n'onwe ya, ezi weebụsaịtị (saịtị gọọmentị United States na-ejedebekarị na .gov), ma ọ bụ kpọọ ọfịs ahụ.",
            "Ọ bụrụ na ịchọtaghị azịza ya, kpọọ 211. Ọ bụ ahịrị ekwentị n'efu na nzuzo nke na-ejikọ gị na enyemaka dị n'obodo gị maka nri, ebe obibi, ọkụ na mmiri, na ihe ndị ọzọ."
          ],
          steps: ["Gbaa okirikiri gburugburu ụbọchị, nọmba na iwu ọ bụla n'azịza AI.", "Tụnyere nke ọ bụla na akwụkwọ ozi mbụ ahụ.", "Lelee ezi weebụsaịtị ma ọ bụ kpọọ ọfịs ahụ.", "Ọ bụrụ na ị kpachiri, kpọọ 211 ma ọ bụ jụọ onye ọrụ ọba akwụkwọ."],
          words: [[".gov", "ọgwụgwụ adreesị ezi weebụsaịtị gọọmentị United States."], ["211", "ahịrị ekwentị n'efu na nzuzo na-ejikọ ndị mmadụ na enyemaka dị n'obodo ha."]],
          sources: [{ name: "211.org: Banyere 211", url: "https://www.211.org/about-us" }],
          slides: [
            { title: "AI nwere ike ihie", bullets: ["Nọmba ekwentị ochie", "Ụbọchị njedebe ezighi ezi", "Iwu si na steeti ọzọ"] },
            { title: "Lelee ihe ndị a mgbe niile", bullets: ["Ego na enyemaka gọọmentị", "Ahụike na ụlọ akwụkwọ", "Ebe obibi na iwu"] },
            { title: "Ebe ị ga-elele", bullets: ["Akwụkwọ ozi mbụ ahụ", "Ezi weebụsaịtị, nke na-ejedebekarị na .gov", "Kpọọ ọfịs ahụ, ma ọ bụ kpọọ 211 maka enyemaka n'obodo"] }
          ],
          tryIt: "Were ndepụta ihe ime site na Nkuzi 4. Lelee otu ụbọchị ma ọ bụ nọmba ekwentị na akwụkwọ ozi mbụ ahụ ma ọ bụ na ezi weebụsaịtị.",
          youCanNow: "ịlele azịza AI na ezi isi iyi ya tupu i mee ihe n'elu ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ 211?", options: ["Ahịrị n'efu na nzuzo na-ejikọ gị na enyemaka n'obodo", "Nọmba mberede ndị uwe ojii", "Ọrụ iwu a na-akwụ ụgwọ", "Weebụsaịtị ịzụ ahịa"], answer: 0, why: "211 bụ n'efu na nzuzo, ọ na-ejikọkwa ndị mmadụ na enyemaka n'obodo dị ka nri na ọkụ na mmiri." },
            { objective: "O5", q: "AI nyere nọmba ekwentị ọfịs ebe obibi. Gịnị ka ị ga-eme tupu ị kpọọ?", options: ["Kpọọ ya ozugbo", "Lelee ya na ezi weebụsaịtị ọfịs ahụ ma ọ bụ n'akwụkwọ ozi gị", "Tinye ya na soshal midia", "Jụọ AI ma o ji n'aka"], answer: 1, why: "AI nwere ike inye nọmba ochie ma ọ bụ ezighi ezi, ya mere buru ụzọ lelee ezi isi iyi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ichebe ozi gị na ezinụlọ gị",
          minutes: 5,
          goal: "Debe ozi nzuzo n'ebe ọ na-adịghị na ngwa AI ma hụ ozi aghụghọ.",
          text: [
            "Edela ihe ndị a mgbe ọ bụla n'ime ngwa enyemaka AI: nọmba Social Security (nọmba njirimara gọọmentị US), nọmba okwu ma ọ bụ nke enyemaka gọọmentị, nọmba ụlọ akụ ma ọ bụ kaadị, okwuntughe, ma ọ bụ aha ụmụ gị zuru ezu na ụlọ akwụkwọ ha.",
            "Ndị aghụghọ na-elekwasị anya n'ezinụlọ na-agba mbọ. Kpachara anya maka ozi na-ekwe nkwa ego n'efu ma ọ bụ onyinye gọọmentị (grant), na-ekwu na enyemaka gị ga-akwụsị ma ọ bụrụ na i meghị ihe ugbu a, ma ọ bụ na-arịọ ka i jiri gift card (kaadị onyinye) kwụọ ụgwọ.",
            "Ezi ọfịs anaghị arịọ ka a kwụọ ụgwọ site na gift card. Ọ bụrụ na ozi na-echegbu gị, apịala njikọ ya. Gaa n'ezi weebụsaịtị n'onwe gị ma ọ bụ kpọọ nọmba ị maralarị."
          ],
          steps: ["Gụọ prompt ọ bụla tupu i zipu ya ma wepụ ozi nzuzo.", "Nwee enyo n'ozi na-eme ka ị mee ngwa ngwa ma ọ bụ na-ekwe nkwa ego n'efu.", "Ejila gift card kwụọ ụgwọ mgbe ọ bụla n'ihi na ozi gwara gị.", "Kpọtụrụ ọfịs ahụ site na nọmba ma ọ bụ weebụsaịtị ị chọtara n'onwe gị."],
          words: [["Aghụghọ (scam)", "wayo e ji ezu ego ma ọ bụ ozi."], ["Phishing", "ozi adịgboroja na-anwa ime ka ị pịa njikọ ma ọ bụ kesaa ozi nzuzo."]],
          slides: [
            { title: "Edela ihe ndị a n'ime AI mgbe ọ bụla", bullets: ["Nọmba Social Security, nọmba okwu ma ọ bụ nke enyemaka", "Nọmba ụlọ akụ ma ọ bụ kaadị, okwuntughe", "Aha ụmụ gị zuru ezu na ụlọ akwụkwọ ha"] },
            { title: "Ihe ịdọ aka na ntị nke aghụghọ", bullets: ["Nkwa ego n'efu ma ọ bụ grant", "\"Enyemaka gị ga-akwụsị taa\"", "Kwụọ ụgwọ site na gift card"] },
            { title: "Nọrọ n'udo", bullets: ["Apịala njikọ n'ozi na-echegbu gị", "Gaa n'ezi saịtị n'onwe gị", "Kpọọ nọmba ị maralarị na ọ bụ ezi nọmba"] }
          ],
          tryIt: "Ọrụ ikpeazụ: were ezi akwụkwọ ozi ma ọ bụ ọkwa, wepụ ozi nzuzo niile, rịọ ngwa enyemaka AI ka ọ kọwaa ya ma mee ndepụta ihe ime nwere ụbọchị, wee lelee otu ụbọchị ma ọ bụ nọmba ekwentị na ezi isi iyi ya.",
          youCanNow: "iji AI maka ezi ọrụ ezinụlọ ma na-echebe ozi gị ma na-ahụ aghụghọ.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ihe ịdọ aka na ntị nke aghụghọ?", options: ["Akwụkwọ ozi dabara na weebụsaịtị ọfịs ahụ", "Ncheta site n'ọfịs ụlọ akwụkwọ nwa gị", "Ozi na-eme ka ị kwụọ ụgwọ ngwa ngwa site na gift card", "Ụgwọ nwere ego ziri ezi"], answer: 2, why: "Ezi ọfịs anaghị arịọ gift card ma ọ bụ mee ka ị kwụọ ụgwọ ozugbo." },
            { objective: "O6", q: "Ozi ederede kwuru na i nwetara grant gọọmentị, o nwekwara njikọ. Gịnị ka ị ga-eme?", options: ["Pịa njikọ ahụ ka ị nara ya", "Zaa ya na nọmba ụlọ akụ gị", "Zigara ndị enyi gị ya", "Apịala ya; chọọ ọfịs ahụ n'onwe gị"], answer: 3, why: "Ịga n'ezi saịtị ma ọ bụ nọmba ị chọtara n'onwe gị na-echebe gị pụọ na njikọ adịgboroja." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI maka ezi ndụ, n'enweghị nsogbu",
        questions: [
          { objective: "O4", q: "Tupu i tinye akwụkwọ ozi n'ime ngwa enyemaka AI, gịnị ka ị kwesịrị ime?", options: ["Tinye nọmba Social Security gị", "Were ihe nnọchi dochie aha na nọmba", "Tinye ozi ụlọ akụ gị ka o nyekwuo aka", "Ọ dịghị ihe"], answer: 1, why: "Ihe nnọchi na-ekwe ka ị nweta enyemaka n'ekesaghị ozi nzuzo." },
          { objective: "O5", q: "AI kwuru na ụbọchị njedebe gị bụ June 5, mana akwụkwọ ozi ahụ kwuru June 1. Kedu nke ị ga-ekwere?", options: ["AI", "Ọ dịghị nke ọ bụla", "Nke ọ bụla dị n'azụ", "Akwụkwọ ozi ahụ ma ọ bụ ọfịs ahụ n'onwe ya"], answer: 3, why: "Ezi isi iyi na-emeri mgbe AI ekwekọghị na ya." },
          { objective: "O5", q: "Gịnị bụ 211?", options: ["Ahịrị n'efu na nzuzo na-ejikọ gị na enyemaka n'obodo", "Ụlọ akụ", "App AI", "Nọmba aghụghọ"], answer: 0, why: "211 na-ejikọ ndị mmadụ na enyemaka n'obodo maka nri, ebe obibi na ihe ndị ọzọ." },
          { objective: "O6", q: "Ozi ederede kwuru na enyemaka gị ga-akwụsị taa ma ọ bụrụ na i jighị gift card kwụọ ụgwọ. Nke a bụ:", options: ["Ọkwa nkịtị", "Iwu ọhụrụ", "Ihe ịdọ aka na ntị nke aghụghọ", "Ozi ụlọ akwụkwọ"], answer: 2, why: "Ime ka ị mee ngwa ngwa na ịrịọ gift card bụ ihe ịrịba ama nke aghụghọ." },
          { objective: "O6", q: "Ozi na-echegbu gị. Kedu ụzọ kacha enweghị nsogbu isi lelee ya?", options: ["Pịa njikọ ya", "Zaa ya na ozi gị", "Zigara ndị enyi gị ya", "Gaa n'ezi weebụsaịtị n'onwe gị ma ọ bụ kpọọ nọmba ị maara"], answer: 3, why: "Ịkpọtụrụ ọfịs ahụ n'onwe gị na-ezere njikọ adịgboroja." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite AI na Ike n'Ihe Dijitalụ",
    questions: [
      { objective: "O1", q: "Ebee ka ị na-enwekarị ike ịgbazite laptop ma ọ bụ hotspot?", options: ["Ụfọdụ ọba akwụkwọ ọha", "Ụlọ ahịa nri ọ bụla", "Igbe ozi n'ụlọ ozi", "Ebe a na-adọba ụgbọala"], answer: 0, why: "Ọtụtụ ọba akwụkwọ na-agbazinye laptop na hotspot." },
      { objective: "O1", q: "Lifeline na-enyere aka na:", options: ["Mmezi ụgbọala", "Ụgwọ kwa ọnwa nke ekwentị ma ọ bụ ịntanetị", "Ụgwọ ụlọ", "Nri"], answer: 1, why: "Lifeline bụ mbelata ụgwọ n'ekwentị ma ọ bụ ịntanetị." },
      { objective: "O1", q: "Ebee ka ị kwesịrị ịgụ maka Lifeline?", options: ["Mgbasa ozi na soshal midia", "Ozi ederede onye ị na-amaghị", "Ezi saịtị Lifeline", "Windo na-apụta na mberede"], answer: 2, why: "Ezi saịtị nwere ezi iwu na akwụkwọ ntinye." },
      { objective: "O2", q: "Ngwa enyemaka AI bụ:", options: ["Mmadụ nọ n'ọba akwụkwọ", "Ọfịs gọọmentị", "Ụlọ ọrụ ekwentị", "Mmemme ị na-akparịta ụka na ya n'okwu nke gị"], answer: 3, why: "Ọ bụ mmemme kọmputa ị na-ede ihe na ya ma ọ bụ gwa okwu." },
      { objective: "O2", q: "Kedu ihe ngwa enyemaka AI nwere ike inyere aka na ya?", options: ["Ịhazi nri n'obere ego", "Ịbịanye aka n'akwụkwọ mgbazinye ụlọ gị", "Ịga oge ọhụhụ gị", "Ịkwụ ụgwọ gị site n'akaụntụ gị"], answer: 0, why: "Ọ maara ime atụmatụ, ndepụta na nkọwa nke ọma." },
      { objective: "O2", q: "AI na-ehie eziokwu mgbe ụfọdụ. Nke ahụ pụtara na ị kwesịrị:", options: ["Ịghara iji ya mgbe ọ bụla", "Ịlele eziokwu ndị dị mkpa", "Ịtụkwasịkwu ya obi", "Ịkwụ ụgwọ maka nke ka mma"], answer: 1, why: "Ọ bara uru, mana eziokwu ndị dị mkpa chọrọ ilele." },
      { objective: "O3", q: "Na kọmputa ọba akwụkwọ, kedu otu ị ga-esi meghee Copilot?", options: ["Kpọọ ọba akwụkwọ", "Gbanyụọ kọmputa ma gbanwuo ya ọzọ", "Dee copilot.microsoft.com na browser", "Zipu email"], answer: 2, why: "Adreesị weebụ ahụ na-emeghe Copilot na browser." },
      { objective: "O3", q: "Ezigbo ajụjụ nye AI nwere:", options: ["Okwuntughe gị", "Naanị otu okwu", "Nọmba ụlọ akụ gị", "Ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị"], answer: 3, why: "Akụkụ atọ ndị ahụ na-enweta azịza bara uru." },
      { objective: "O3", q: "Ebee ka ị ga-esi wụnye app AI na ekwentị?", options: ["Ezi ụlọ ahịa app", "Njikọ n'ozi onye ị na-amaghị zitere", "Mgbasa ozi na-apụta na mberede", "Weebụsaịtị ọ bụla"], answer: 0, why: "Ezi ụlọ ahịa app bụ ebe n'enweghị nsogbu." },
      { objective: "O4", q: "Gịnị bụ ihe nnọchi (placeholder)?", options: ["Ụdị app", "Ihe nnọchi dị ka [aha m] kama ezi ozi", "Okwuntughe", "Weebụsaịtị"], answer: 1, why: "Ọ na-eme ka ozi nzuzo ghara ịdị na prompt gị." },
      { objective: "O4", q: "Ị chọrọ enyemaka n'akwụkwọ ozi ụlọ akwụkwọ. Kedu ezigbo arịrịọ?", options: ["\"akwụkwọ ozi\"", "\"Nke a bụ aha nwa m zuru ezu na nọmba ID ya\"", "\"Kọwaa nke a n'okwu dị mfe ma depụta ihe m ga-eme na mgbe m ga-eme ya.\"", "\"ụlọ akwụkwọ\""], answer: 2, why: "Ọ na-arịọ okwu dị mfe na ndepụta ihe ime, n'enweghị ozi nzuzo." },
      { objective: "O4", q: "AI na-eji okwu siri ike ị na-amaghị. Ị nwere ike:", options: ["Ịhapụ ya", "Ime ka à ga-asị na ị maara ya", "Imechi browser", "Ịjụ ajụjụ nsochi: \"Gịnị ka okwu ahụ pụtara?\""], answer: 3, why: "Ajụjụ nsochi na-edozi akụkụ ndị na-agbagwoju anya." },
      { objective: "O5", q: "Kedu nke ị kwesịrị ịlele mgbe niile tupu i mee ihe n'elu ya?", options: ["Ụbọchị njedebe maka enyemaka gọọmentị", "Echiche maka nri abalị", "Njakịrị", "Ndepụta agba"], answer: 0, why: "Ụbọchị njedebe, ego na enyemaka gọọmentị ka a ga-elelerịrị na ezi isi iyi." },
      { objective: "O5", q: "Weebụsaịtị gọọmentị US na-ejedebekarị na:", options: [".win", ".gov", ".gift", ".shop"], answer: 1, why: "Ezi saịtị gọọmentị US na-eji .gov." },
      { objective: "O5", q: "Ịchọtaghị enyemaka n'obodo maka ụgwọ ọkụ na mmiri gị. Onye ka ị nwere ike ịkpọ?", options: ["Nọmba dị na mgbasa ozi na-apụta na mberede", "Ọ dịghị onye", "211", "Nọmba ọ bụla e nwetara n'ịntanetị"], answer: 2, why: "211 na-ejikọ gị na enyemaka n'obodo maka ụgwọ, nri na ebe obibi." },
      { objective: "O6", q: "Kedu nke ị na-ekwesịghị ide mgbe ọ bụla n'ime ngwa enyemaka AI?", options: ["\"Jiri okwu dị mfe\"", "\"Mee ndepụta\"", "Echiche maka nri abalị", "Nọmba kaadị ụlọ akụ gị"], answer: 3, why: "Nọmba ụlọ akụ na kaadị bụ ozi nzuzo." },
      { objective: "O6", q: "Ozi na-ekwe nkwa grant gọọmentị n'efu ma ọ bụrụ na i buru ụzọ kwụọ ụgwọ. O yikarịrị ka ọ bụ:", options: ["Aghụghọ", "Mmemme nkịtị", "Ọkwa ụlọ akwụkwọ", "Nlọghachi ụtụ isi"], answer: 0, why: "Ịkwụ ụgwọ iji nweta ego \"n'efu\" bụ aghụghọ a na-ahụkarị." },
      { objective: "O6", q: "Ezi ọfịs gọọmentị na-arịọ ka a kwụọ ụgwọ site na:", options: ["Gift card", "Ọ dịghị mgbe ọ bụla site na gift card", "Gift card naanị na ngwụcha izu", "Ego site n'ozi ederede"], answer: 1, why: "Ịkwụ ụgwọ site na gift card bụ ihe ịrịba ama nke aghụghọ." },
      { objective: "O6", q: "Ozi ederede kwuru \"Pịa ebe a ugbu a ma ọ bụ tufuo enyemaka gị.\" Gịnị ka ị ga-eme?", options: ["Pịa ngwa ngwa", "Zaa ya na nọmba okwu gị", "Apịala ya; gaa n'ezi saịtị ma ọ bụ kpọọ nọmba ị maara", "Kesaara ndị agbata obi ya"], answer: 2, why: "Kpọtụrụ ọfịs ahụ n'onwe gị kama iji njikọ dị n'ozi ahụ." },
      { objective: "O5", q: "N'ọrụ ikpeazụ, mgbe AI mechara ndepụta ihe ime gị, ị ga:", options: ["Ihichapụ akwụkwọ ozi ahụ", "Itinye ya n'ịntanetị", "Itinye ozi ụlọ akụ gị", "Ịlele otu ụbọchị ma ọ bụ nọmba ekwentị na ezi isi iyi"], answer: 3, why: "Ịlele na ezi isi iyi bụ nzọụkwụ ikpeazụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 7, 9, 10, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "E wepụrụ ozi nzuzo", objective: "O6", notYet: "Prompt ahụ nwere ezi aha, nọmba okwu, nọmba akaụntụ ma ọ bụ adreesị.", meets: "E wepụrụ aha na nọmba nzuzo ọ bụla ma ọ bụ were ihe nnọchi dochie ha.", exceeds: "Jiri ihe nnọchi doro anya dị ka [aha m] ka azịza ahụ ka dị mma." },
      { name: "Arịrịọ doro anya", objective: "O3", notYet: "Arịrịọ ahụ edoghị anya, dị ka \"nyere m aka na nke a\".", meets: "Ọ na-ekwu ihe ị chọrọ, ọnọdụ gị na otu ị chọrọ ka azịza dị.", exceeds: "Azịza mbụ ahụ fọrọ nke nta ka ọ bụrụ ihe ị chọrọ." },
      { name: "Okwu dị mfe na ndepụta ihe ime", objective: "O4", notYet: "Enweghị nkọwa n'okwu dị mfe ma ọ bụ enweghị ndepụta ihe ime.", meets: "Nwetara nkọwa n'okwu dị mfe na obere ndepụta ihe ime nwere ụbọchị.", exceeds: "Jụrụ ajụjụ nsochi iji kọwaa okwu siri ike ma ọ bụ otu nzọụkwụ." },
      { name: "Elelere eziokwu", objective: "O5", notYet: "E leleghị ụbọchị ma ọ bụ nọmba ekwentị ọ bụla.", meets: "Lelere otu ụbọchị ma ọ bụ nọmba ekwentị na akwụkwọ ozi ahụ ma ọ bụ ezi isi iyi.", exceeds: "Nwere ike ikwu ebe o lelere ya na ihe ọ chọtara." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri ngwa enyemaka AI n'enweghị nsogbu maka akwụkwọ ozi, fọm ma ọ bụ ozi n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe tinyere akwụkwọ maka Lifeline ma ọ bụ malite iji kọmputa ọba akwụkwọ ma ọ bụ hotspot",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe obodo na-ezukọ",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "Ezi akwụkwọ ozi e kpuchiri ozi nzuzo ya, ma ọ bụ akwụkwọ ozi ọmụmaatụ site na weebụsaịtị ụlọ akwụkwọ",
      "Akwụkwọ na mkpịsị ode maka ndetu na ndepụta ihe ime",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Malite site n'ikwu na teknụzụ bụ maka onye ọ bụla, na ịrịọ enyemaka bụ ihe nkịtị.",
      "Bute akwụkwọ ozi ọmụmaatụ ka ọ dịghị onye ga-ekesa akwụkwọ ozi nke ya.",
      "Lelee prompt ọ bụla tupu e zipu ya; enweghị ezi aha, nọmba okwu ma ọ bụ nọmba akaụntụ.",
      "Nwee ozi 211 na Lifeline njikere, ma hụ na ndị na-amụ ihe pụrụ (sign out) na kọmputa a na-ekekọrịta.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
