"use strict";

// Koach Learn course (Igbo translation of leadership/lead-agentic-modern-leaders.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "lead-agentic-modern-leaders-ig",
  lang: "ig",
  translationOf: "lead-agentic-modern-leaders",
  category: "Leadership Development",
  name: "Ndu n'Oge Agentic AI 2: AI maka Ndị Ndu Ọgbara Ọhụrụ na Ngwa AI maka Ndị Ndu",
  skills: "Ime ka ndetu nzukọ ghọọ ndepụta ọrụ, Ide akwụkwọ mkpebi nwere nhọrọ na ihe egwu, Ide ozi doro anya nye otu gị, Ịkwado maka mkparịta ụka siri ike, Ịhọrọ ngwa e kwadoro, Ide ntụziaka iji AI nke otu gị n'otu peeji",
  outcome: "iji ngwa AI n'ọrụ ndu gị: ime ka ndetu nzukọ ghọọ ndepụta ọrụ, ide akwụkwọ mkpebi nwere nhọrọ na ihe egwu, na ịkwado ozi nye otu gị, ma dee ntụziaka iji AI n'otu peeji nke otu gị ga-agbaso.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị njikwa, ndị nlekọta, ndị ndu otu, na ndị nwe obere azụmahịa na otu na-adịghị achọ uru (nonprofit) mechara ihe ọmụmụ 1 ma ọ bụ ghọtalarị isi ihe gbasara AI. Ọ bụ maka ọrụ gị dị ka onye ndu: nzukọ, mkpebi, nkwurịta okwu na ndị mmadụ.",
    "Isi 1 na-ewu ụzọ ọrụ AI atọ ị nwere ike iji kwa izu: ndetu nzukọ ghọọ ndepụta ọrụ, akwụkwọ mkpebi, na ozi nye otu gị. Isi 2 na-ekwu maka akụkụ ndị siri ike karị: iji AI kwadoo maka mkparịta ụka gị na ndị mmadụ n'enyeghị ya ọrụ ahụ, ịhọrọ ngwa nke ọma, na ide ntụziaka dị mfe iji AI maka otu gị.",
    "Ị nwere ike iji ngwa enyemaka ọ bụla a ma ama: ChatGPT, Microsoft Copilot, Google Gemini ma ọ bụ Claude. Ọ bụrụ na otu gị (ụlọ ọrụ gị) kwadoro otu ngwa, jiri nke ahụ. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Wuo ngwa AI nke onye ndu gị: chekwaa prompt atọ i nwalere nke ị nwere ike iji ọzọ (ndetu nzukọ ghọọ ndepụta ọrụ, akwụkwọ mkpebi nwere nhọrọ na ihe egwu, ozi ọhụrụ nye otu gị), nke ọ bụla e jiri otu ugboro n'ezi ọrụ mgbe e wepụrụ ozi nzuzo; ma dee ntụziaka iji AI n'otu peeji maka otu gị nke na-ekwu ngwa ndị e kwadoro, ihe a na-agaghị etinye mgbe ọ bụla, ihe mmadụ ga-elele, na onye a ga-ajụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị njikwa, ndị nlekọta, ndị ndu otu na ndị nwe obere azụmahịa na otu nonprofit mechara ihe ọmụmụ 1 ma ọ bụ ghọtalarị isi ihe gbasara AI.",
    startingPoint: "Ha nwere ike ịkọwa generative AI na agentic AI ma kpọọ aha ihe egwu ndị bụ isi nye otu ha. Ha na-eji AI mgbe ụfọdụ, mana ọ bụghị n'ụzọ ọrụ a na-emegharị maka nzukọ, mkpebi, nkwurịta okwu na ọrụ gbasara ndị mmadụ.",
    gap: "Ndị ndu na-etinye ọtụtụ oge n'izu ha na ndetu, mkpebi na ozi. Prompt e nwalere nke a na-eji ọzọ na-echekwa oge, mana naanị ma ọ bụrụ na ndị ndu ejide ikpe ikpe, mkparịta ụka na ndị mmadụ na ozi nzuzo n'aka mmadụ, ma nye otu ha ntụziaka doro anya ha ga-agbaso.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe, a tụghị anya ihe ọmụma teknụzụ ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI; jiri ngwa otu gị kwadoro",
      "Nzuzo: wepụ ozi nzuzo na ozi gbasara onwe mmadụ tupu itinye ihe ọ bụla n'ime AI",
      "Iwu HR, iwu na iwu otu gị na-emetụta mkpebi gbasara ndị mmadụ na ozi dị nro",
      "Oge: nkuzi dị mkpụmkpụ nwere otu ọrụ e ji ezi ọrụ eme"
    ],
    prerequisites: "\"Ndu n'Oge AI Agentic 1: Ịghọta AI\", ma ọ bụ nghọta mbụ gbasara AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ndetu nzukọ n'ezie e wepụrụ ozi nzuzo", action: "iji prompt a na-eji ọzọ mee ka ndetu ahụ ghọọ mkpebi, ọrụ nwere onye nwe ya na ụbọchị, na ajụjụ ndị fọdụrụ", standard: "na-elele ndepụta ahụ maka ihe ọ bụla e chepụtara ma ọ bụ nke na-efu efu" },
    { id: "O2", condition: "Mgbe e nyere gị ezi mkpebi i nwere ime", action: "ide akwụkwọ mkpebi nwere nhọrọ, ihe egwu na ajụjụ nsochi, wee dee ndụmọdụ ahụ n'onwe gị", standard: "n'ekwughị mgbe ọ bụla na \"AI tụrụ aro ya\" dị ka ihe kpatara ya" },
    { id: "O3", condition: "Mgbe e nyere gị isi ihe atọ maka ozi ọhụrụ nye otu gị", action: "ide ozi nye otu gị ma dozie ụda ya, ogologo ya na ndị ọ bụ maka ha", standard: "na-agụpụta ya n'olu dị elu tupu izipu ya" },
    { id: "O4", condition: "Tupu mkparịta ụka siri ike gị na mmadụ", action: "iji AI kwadoo ahịrịokwu mmalite na ajụjụ site naanị na nkọwa n'ozuzu", standard: "n'enweghị aha ma ọ bụ ozi nzuzo, gị onwe gị ka na-ejide mkparịta ụka ahụ na mkpebi ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị ngwa AI otu gị na-eji ma ọ bụ chọrọ", action: "ịtụle ya gbasara data, ihe ọ nwere ike ịbanye na ya na usoro atụmatụ (plan) ya site na peeji onye na-enye ya n'onwe ya", standard: "na-emechi n'otu ahịrị ikpe: kwado, kwado nwere oke, ma ọ bụ ọ bụghị ugbu a" },
    { id: "O6", condition: "Maka otu gị", action: "ide ntụziaka iji AI n'otu peeji ma chekwaa prompt ndị i nwalere n'otu ebe", standard: "na-ekwu ngwa e kwadoro, ihe a na-agaghị etinye mgbe ọ bụla, ihe a ga-elele, ikwupụta iji AI na onye a ga-ajụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụzọ ọrụ AI atọ maka ndị ndu",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ndetu nzukọ ghọọ ndepụta ọrụ",
          minutes: 5,
          goal: "Mee ka ndetu nzukọ na-adịghị ọcha ghọọ ndepụta ọrụ doro anya nwere onye nwe ya na ụbọchị.",
          text: [
            "Ọtụtụ oge, nzukọ na-agwụ na ncheta na-edoghị anya kama ọrụ doro anya. AI maara ime ka ndetu na-adịghị ọcha nwee usoro. Tinye ndetu gị (mgbe i wepụrụ ozi nzuzo ma ọ bụ ozi gbasara onwe mmadụ) ma rịọ ka o depụta mkpebi, ọrụ nwere onye nwe ya na ụbọchị ọ ga-agwụ, na ajụjụ ndị fọdụrụ.",
            "Prompt ị nwere ike iji ọzọ: \"Site na ndetu nzukọ ndị a, depụta: 1) mkpebi e mere, 2) ọrụ dị ka tebụl nwere ọrụ, onye nwe ya, ụbọchị ọ ga-agwụ, 3) ajụjụ ndị fọdụrụ. Ọ bụrụ na onye nwe ọrụ ma ọ bụ ụbọchị adịghị, dee MISSING. Etinyela ihe ọ bụla na-adịghị na ndetu ahụ.\" Ahịrịokwu ikpeazụ dị mkpa: ọ na-egbochi ngwa ahụ ichepụta ọrụ.",
            "Ọtụtụ app nzukọ na-enye ndetu ma ọ bụ nchịkọta AI ugbu a. Tupu ịgbanye ha, lelee iwu otu gị ma gwa ndị nọ na nzukọ ahụ, n'ihi na idekọ na idepụta okwu ndị mmadụ na-ewetara ajụjụ gbasara nkwenye na nzuzo."
          ],
          steps: ["Wepụ ozi nzuzo ma ọ bụ ozi gbasara onwe mmadụ na ndetu ahụ.", "Tinye ndetu ahụ na prompt a na-eji ọzọ.", "Lelee ọrụ ọ bụla site na ncheta gị na ndetu ahụ.", "Dejupụta ihe ọ bụla e dere MISSING.", "Zipu ndepụta ahụ nye ndị bịara n'otu ụbọchị ahụ."],
          words: [["Ihe ọrụ (action item)", "ọrụ e kwekọrịtara na nzukọ, nwere onye nwe ya na ụbọchị ọ ga-agwụ."], ["Prompt a na-eji ọzọ", "prompt i chekwara ma jiri ọzọ maka otu ụdị ọrụ ahụ."]],
          slides: [
            { title: "Site na ndetu ruo ọrụ", bullets: ["Mkpebi e mere", "Ọrụ: ọrụ, onye nwe ya, ụbọchị ọ ga-agwụ", "Ajụjụ ndị fọdụrụ"] },
            { title: "Gbochie ọrụ e chepụtara", bullets: ["\"Ọ bụrụ na ọ dịghị, dee MISSING\"", "\"Etinyela ihe ọ bụla na-adịghị na ndetu ahụ\""] },
            { title: "Ngwa AI na-edekọ nzukọ", bullets: ["Buru ụzọ lelee iwu otu gị", "Gwa ndị nọ na nzukọ tupu idekọ"] }
          ],
          tryIt: "Were ndetu site na nzukọ e mere n'oge na-adịbeghị anya, wepụ ozi nzuzo, jiri prompt a na-eji ọzọ, ma lelee ihe ọ zara. Gụọ ihe ole o mehiere ma ọ bụ chepụta.",
          youCanNow: "ime ka ndetu nzukọ ghọọ ndepụta ọrụ e lelere nwere onye nwe ya na ụbọchị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ezigbo prompt ndetu nzukọ kwesịrị ịrịọ AI ka o depụta?", options: ["Onye kwuru okwu kacha", "Mkpebi, ọrụ nwere onye nwe ya na ụbọchị, na ajụjụ ndị fọdụrụ", "Nchịkọta ahịrịokwu ọ bụla", "Echiche maka nri mmiri nzukọ ọzọ"], answer: 1, why: "Mkpebi, ọrụ nwere onye nwe ya na ajụjụ fọdụrụ bụ ihe otu chọrọ mgbe nzukọ gwụrụ." },
            { objective: "O1", q: "Ndepụta ọrụ ahụ nwere ọrụ ọ dịghị onye kwuru na nzukọ. Gịnị ka ị ga-eme?", options: ["Hapụ ya, ebe ọ bụ ezigbo echiche", "Were ya n'onwe gị n'ịgbachi nkịtị", "Wepụ ya ma tinye \"Etinyela ihe ọ bụla na-adịghị na ndetu ahụ\" na prompt", "Rịọ AI ka ọ kọwaa ihe kpatara ya"], answer: 2, why: "Ọrụ e chepụtara na-ebute mgbagwoju anya; iwu dị na prompt na-egbochi ngwa ahụ itinye ha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Akwụkwọ mkpebi: nhọrọ, ihe egwu na ndụmọdụ",
          minutes: 6,
          goal: "Jiri AI dee akwụkwọ mkpebi nke na-atụnyere nhọrọ n'ụzọ ziri ezi.",
          text: [
            "Ndị ndu na-eme mkpebi mgbe oge adịghị. AI nwere ike inyere gị aka iche echiche sara mbara, ọ bụghị ime mkpebi n'ọnọdụ gị. Nye ya mkpebi ahụ, eziokwu ị nwere, oke gị (ego, oge, ndị mmadụ) ma rịọ ya nhọrọ atọ, nke ọ bụla nwere uru ya, ihe egwu ya, ego ọ ga-efu, na ihe ị ga-ekwere ka ọ bụrụ nhọrọ kacha mma.",
            "Wee gbaghaa ya: \"Kedu arụmụka kacha sie ike megide nhọrọ m kacha amasị m?\" na \"Kedu ozi na-efu m?\" Ajụjụ nsochi abụọ a bụ ebe AI kacha aba uru, n'ihi na ha na-egosi ihe ị na-ahụghị.",
            "Gị na-ede ndụmọdụ ahụ. Lelee nọmba ọ bụla, tinye ihe naanị gị maara (ndị gị, akụkọ gị, ụkpụrụ gị) ma nwee mkpebi ahụ. Akwụkwọ ahụ ekwesịghị ikwu mgbe ọ bụla na \"AI tụrụ aro ya\" dị ka ihe kpatara ya."
          ],
          steps: ["Kọwaa mkpebi ahụ, eziokwu na oke (n'enweghị ozi nzuzo).", "Rịọ nhọrọ atọ nwere uru, ihe egwu na ego ọ ga-efu.", "Rịọ arụmụka kacha sie ike megide nke kacha amasị gị.", "Jụọ ozi na-efu efu.", "Lelee nọmba ma dee ndụmọdụ ahụ n'onwe gị."],
          words: [["Akwụkwọ mkpebi (decision memo)", "obere akwụkwọ na-akọwa mkpebi, nhọrọ ndị dị na ndụmọdụ."], ["Ihe ị na-ahụghị (blind spot)", "ihe dị mkpa i lebabeghị anya."]],
          slides: [
            { title: "AI na-eme ka echiche saa mbara, gị na-ekpebi", bullets: ["Nye mkpebi ahụ, eziokwu, oke", "Rịọ nhọrọ atọ: uru, ihe egwu, ego ọ ga-efu"] },
            { title: "Ajụjụ nsochi abụọ dị ike", bullets: ["\"Arụmụka kacha sie ike megide nke kacha amasị m?\"", "\"Kedu ozi na-efu m?\""] },
            { title: "Gị nwe mkpebi ahụ", bullets: ["Lelee nọmba ọ bụla", "Tinye ihe naanị gị maara", "Ọ bụghị mgbe ọ bụla \"AI tụrụ aro ya\" dị ka ihe kpatara ya"] }
          ],
          tryIt: "Họrọ ezi mkpebi i nwere ime (dịka ọmụmaatụ, usoro oge ọhụrụ, onye na-ere ngwa ma ọ bụ mmemme). Jiri prompt akwụkwọ mkpebi na ajụjụ nsochi abụọ ahụ, wee dee ndụmọdụ otu paragraf n'okwu nke gị.",
          youCanNow: "iji AI mee ka mkpebi saa mbara ma dee akwụkwọ mkpebi bụ nke gị.",
          quickCheck: [
            { objective: "O2", q: "Kedu ọrụ kacha mma AI nwere n'akwụkwọ mkpebi?", options: ["Ime mkpebi ikpeazụ", "Ịhọrọ nhọrọ otu ahụ kacha amasị", "Ịbịanye aka n'akwụkwọ ahụ", "Ime ka nhọrọ gị saa mbara ma chọta ihe ị na-ahụghị"], answer: 3, why: "AI na-enyere gị aka ịhụ nhọrọ na ihe egwu ndị ọzọ; onye ndu na-ekpebi." },
            { objective: "O2", q: "I nwere nhọrọ kacha amasị gị. Kedu ajụjụ nsochi ị ga-ezipu?", options: ["\"Kedu arụmụka kacha sie ike megide nhọrọ m kacha amasị m?\"", "\"Gwa m na nhọrọ m kacha mma.\"", "\"Mee ka akwụkwọ ahụ dị mkpụmkpụ.\"", "\"Họrọọrọ m.\""], answer: 0, why: "Ịrịọ arụmụka kacha sie ike megide ya na-anwale nhọrọ gị n'ụzọ ziri ezi." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Nkwurịta okwu doro anya na otu gị",
          minutes: 5,
          goal: "Dee ozi nye otu gị ma dozie ụda ya, ogologo ya na ndị ọ bụ maka ha.",
          text: [
            "Ọtụtụ nsogbu ndu bụ nsogbu nkwurịta okwu. AI na-enyere gị aka ide ozi ọhụrụ nye otu gị, ọkwa ma ọ bụ ozi ekele ngwa ngwa, wee dozie ya: \"mee ka ọ dị mkpụmkpụ\", \"mee ka o nwee obi ọma karị\", \"maka ndị ọrụ ọhụrụ\", \"Bekee dị mfe maka ndị Bekee abụghị asụsụ mbụ ha\".",
            "Nye ya isi ihe gị dị ka ndepụta na ndị ọ bụ maka ha, ma rịọ ka o dee ozi mbụ n'ụda olu gị. Tinye ozi ochie i dere ma kwuo \"mee ka ụda ya dị ka nke a\" ka ọ dị ka okwu gị.",
            "Gụpụta ya n'olu dị elu tupu izipu ya. Wepụ ihe ọ bụla ị na-agaghị ekwu ihu na ihu. Maka ozi dị nro dị ka ịchụ ndị ọrụ (layoffs), mgbanwe iwu ma ọ bụ ihe mberede gbasara nchekwa, AI nwere ike inyere gị aka ịhazi ya, mana HR ma ọ bụ ndị ọka iwu kwesịrị ilele okwu ikpeazụ, ị kwesịkwara ịkọ akụkọ dị mkpa ihu na ihu ebe ị nwere ike."
          ],
          steps: ["Dee isi ihe gị dị ka ndepụta.", "Kpọọ aha ndị ọ bụ maka ha na ụda ya.", "Rịọ ozi mbụ; nye ozi ochie ka ọ dị ka olu gị.", "Dozie ya site n'otu ma ọ bụ ajụjụ nsochi abụọ.", "Gụpụta ya n'olu dị elu; ka e lelee ozi dị nro."],
          words: [["Ụda (tone)", "otu ozi si eme mmadụ: obi ọma, nkwanye ugwu, ngwa ngwa, nwayọọ."], ["Ndị ọ bụ maka ha (audience)", "ndị ga-agụ ozi ahụ."]],
          slides: [
            { title: "Dee ngwa ngwa, wee dozie", bullets: ["Isi ihe dị ka ndepụta", "Ndị ọ bụ maka ha na ụda ya", "\"Mkpụmkpụ\", \"obi ọma karị\", \"okwu dị mfe\""] },
            { title: "Mee ka ọ dị ka gị", bullets: ["Tinye ozi ochie i dere", "\"Mee ka ụda ya dị ka nke a\""] },
            { title: "Tupu i zipu", bullets: ["Gụpụta ya n'olu dị elu", "Ozi dị nro: ka HR ma ọ bụ ndị ọka iwu lelee ya", "Kọọ akụkọ dị mkpa ihu na ihu"] }
          ],
          tryIt: "Dee isi ihe atọ maka ezi ozi ọhụrụ nye otu gị. Jiri AI dee ya, rịọ maka otu mgbanwe, gụpụta ya n'olu dị elu ma zipu ya (ma ọ bụ chekwaa ya ka i zipu).",
          youCanNow: "iji AI dee ma dozie ozi nye otu gị ma ka na-ejide olu nke gị.",
          quickCheck: [
            { objective: "O3", q: "Olee otu ị ga-esi mee ka ozi AI dere dị ka okwu gị?", options: ["Rịọ ya ka o jiri okwu nkwanye ugwu siri ike", "Tinye ozi ochie i dere ma kwuo \"mee ka ụda ya dị ka nke a\"", "Zipu ya n'agụghị ya", "Jiri akara mkpu (!) karịa"], answer: 1, why: "Ọmụmaatụ ihe i dere n'onwe gị na-egosi ngwa ahụ ụda gị." },
            { objective: "O3", q: "Ozi ọhụrụ AI dere maka otu gị dị ogologo okpukpu abụọ nke ihe ị chọrọ. Gịnị ka ị ga-eme?", options: ["Zipu ya otu o sila dị", "Malite mkparịta ụka ọhụrụ na ngwa ọzọ", "Hichapụ ọkara nke abụọ", "Rịọ maka otu mgbanwe, dị ka \"mee ka ọ bụrụ ahịrịokwu ise dị mkpụmkpụ\", wee gụpụta ya n'olu dị elu"], answer: 3, why: "Otu ajụjụ nsochi doro anya na-edozi ogologo, ịgụpụta ya n'olu dị elu na-ejidekwa ihe ị na-agaghị ekwu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụzọ ọrụ AI atọ maka ndị ndu",
        questions: [
          { objective: "O1", q: "Gịnị mere a ga-eji tinye \"Etinyela ihe ọ bụla na-adịghị na ndetu ahụ\" na prompt nzukọ?", options: ["Ọ na-ezo ndị nwe ọrụ", "Ọ na-eme ka ndepụta ahụ dị ogologo", "Ọ na-egbochi ngwa ahụ ichepụta ọrụ", "Iwu chọrọ ya"], answer: 2, why: "AI nwere ike iji ihe e chepụtara jupụta ebe ihe na-adịghị." },
          { objective: "O1", q: "Tupu ịgbanye ngwa AI na-edekọ nzukọ, ị kwesịrị:", options: ["Ilele iwu ma gwa ndị nọ na nzukọ", "Idekọ ya na nzuzo", "Ịgwa naanị onye isi", "Ịgbanyụ igwe okwu (microphone)"], answer: 0, why: "Idekọ ndị mmadụ na-ewetara ajụjụ gbasara nkwenye na nzuzo." },
          { objective: "O2", q: "Kedu ajụjụ nsochi kacha agbakwunye uru n'akwụkwọ mkpebi?", options: ["\"Mee ka ọ dị ogologo.\"", "\"Tinye emoji.\"", "\"Jiri okwu ukwu.\"", "\"Kedu arụmụka kacha sie ike megide nhọrọ m kacha amasị m?\""], answer: 3, why: "Ọ na-egosi ihe ị na-ahụghị." },
          { objective: "O2", q: "Onye na-ede ndụmọdụ n'akwụkwọ mkpebi?", options: ["AI", "Gị, onye ndu", "Onye na-ere ngwa", "Ọ dịghị onye"], answer: 1, why: "Ndị ndu nwe mkpebi; AI na-eme naanị ka echiche saa mbara." },
          { objective: "O3", q: "Ị ga-ekwupụta mgbanwe iwu na-emetụta ụgwọ ọrụ. Kedu ụzọ kacha mma?", options: ["Zipu ozi AI dere a na-eleleghị site na email", "Hapụ AI ka ọ kọọ ya", "Ekwupụtala ya", "Jiri AI hazie ya, ka HR lelee ya, kọọ ya ihu na ihu"], answer: 3, why: "Ozi dị nro chọrọ ka mmadụ lelee ya ma kọọ ya." }
        ]
      }
    },
    {
      name: "Isi 2: Ndị mmadụ, ngwa na ntụziaka otu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịkwado maka mkparịta ụka na ndị mmadụ n'enyeghị AI ya",
          minutes: 5,
          goal: "Jiri AI kwadoo maka mkparịta ụka siri ike ma debe ozi nzuzo n'ebe ọ na-adịghị.",
          text: [
            "Mkparịta ụka gbasara nzaghachi (feedback), esemokwu na otu mmadụ si arụ ọrụ bụ ebe ndị ndu kacha achọ enyemaka, ọ bụkwa ebe AI kacha dị egwu. Ozi gbasara onye ọrụ bụ nzuzo; etinyela aha, ahụike, akụkọ ntaramahụhụ ma ọ bụ akara arụmọrụ n'ime ngwa AI ọha.",
            "Ị ka nwere ike ịkwado. Kọwaa ọnọdụ ahụ n'ozuzu (\"otu onye n'otu m na-agafekarị oge ọrụ, ndị mmadụ hụrụ ya n'anya, o nwekwara mgbanwe n'ezinụlọ ya n'oge na-adịbeghị anya\") ma rịọ: ahịrịokwu mmalite, ajụjụ iji ghọta akụkụ nke ya, na ụzọ isi kwekọrịta nzọụkwụ ndị ọzọ. Rịọ ya ka o mee ka ọ bụ onye nke ọzọ (role-play) ka i wee mee omume.",
            "Ekwela ka AI kpebie mgbe ọ bụla gbasara iwe mmadụ n'ọrụ, ntaramahụhụ, ụgwọ ọrụ ma ọ bụ ịchụ mmadụ n'ọrụ, ezipukwala nzaghachi AI dere nke ị degharịghị n'okwu nke gị. Ndị mmadụ na-ama, ntụkwasị obi bụkwa ihe ị ga-atụfu."
          ],
          steps: ["Kọwaa ọnọdụ ahụ n'ozuzu, n'enweghị aha ma ọ bụ ozi nzuzo.", "Rịọ mmalite, ajụjụ na nhọrọ nzọụkwụ ndị ọzọ.", "Mee omume site na role-play.", "Dee ndetu nke gị n'okwu nke gị.", "Hapụ mkpebi gbasara ndị mmadụ n'aka ndị mmadụ."],
          words: [["Role-play", "ime omume mkparịta ụka ebe mmadụ (ma ọ bụ AI) na-eme ka ọ bụ onye nke ọzọ."], ["Nzuzo (confidential)", "ozi a ga-edebe na nzuzo ma kesaa naanị ndị chọrọ ya."]],
          slides: [
            { title: "Debe ozi nzuzo n'ebe ọ na-adịghị", bullets: ["Enweghị aha, ahụike ma ọ bụ akụkọ ntaramahụhụ", "Enweghị akara arụmọrụ n'ime ngwa AI ọha"] },
            { title: "Kwadoo n'ozuzu", bullets: ["Rịọ mmalite na ezigbo ajụjụ", "Rịọ nhọrọ nzọụkwụ ndị ọzọ", "Mee omume site na role-play"] },
            { title: "Oke ị na-agaghị agafe", bullets: ["AI anaghị ekpebi iwe mmadụ n'ọrụ, ụgwọ ọrụ ma ọ bụ ntaramahụhụ", "Degharịa nzaghachi n'okwu nke gị"] }
          ],
          tryIt: "Chee maka mkparịta ụka i kwesịrị inwe. Kọwaa ya n'ozuzu n'enweghị aha, rịọ ahịrịokwu mmalite na ajụjụ atọ, wee mee ya otu ugboro site na role-play.",
          youCanNow: "iji AI kwadoo maka mkparịta ụka siri ike ma na-echebe nzuzo ndị mmadụ na ntụkwasị obi ha nwere na gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ị nwere ike itinye n'ime ngwa AI ọha mgbe ị na-akwado maka mkparịta ụka gbasara arụmọrụ?", options: ["Aha onye ọrụ ahụ na akụkọ nyocha ya", "Nkọwa n'ozuzu n'enweghị aha ma ọ bụ ozi nzuzo", "Ndetu ahụike ya, ka i nwee nghọta", "Faịlụ ya niile dị n'ụlọ ọrụ"], answer: 1, why: "Naanị nkọwa n'ozuzu na-edebe ozi nzuzo onye ahụ n'ebe ngwa ahụ na-adịghị." },
            { objective: "O4", q: "AI tụrụ aro kpọmkwem ihe ị ga-ekwu na mkpebi ị ga-eme gbasara onye ọrụ. Gịnị ka ị ga-eme?", options: ["Jiri echiche ahịrịokwu mmalite ya mee omume, ma mee mkpebi ahụ n'onwe gị", "Gụọ ihe o dere otu o si dị", "Hapụ AI ka o zipu ozi ahụ", "Detuo mkpebi ya n'akwụkwọ HR"], answer: 0, why: "AI nwere ike inyere gị aka ịkwado, mana mkparịta ụka na mkpebi ahụ na-anọgide n'aka gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhọrọ na iji ngwa AI nke ọma",
          minutes: 5,
          goal: "Tụlee ngwa AI site n'ajụjụ ndị dị mkpa maka otu gị.",
          text: [
            "E nwere ọtụtụ ngwa AI: ngwa enyemaka n'ozuzu (ChatGPT, Microsoft Copilot, Google Gemini, Claude), ngwa enyemaka dị n'ime ngwa ị na-eji ugbu a (Microsoft 365, Google Workspace, Canva, app nzukọ), na ihe agent nwere ike ime ihe. Ihe ha nwere na ọnụahịa ha na-agbanwekarị.",
            "Jụọ ajụjụ ise tupu otu gị amalite iji otu. Data: ọ na-echekwa ma ọ bụ na-eji ihe anyị dere azụ onwe ya (train), anyị nwere ike igbanyụ nke ahụ? Ịbanye: gịnị ka ọ nwere ike ịgụ ma ọ bụ ime na sistemụ anyị? Nkwado: otu anyị ma ọ bụ IT akwadola ya? Izi ezi: ọ nwere ike igosi isi iyi? Ego: ego ole ka ọ na-efu onye ọ bụla, ugbu a na mgbe a ga-emegharị ya?",
            "Chọta azịza ndị a na peeji nzuzo na ọnụahịa nke onye na-enye ya n'onwe ya na n'ime nkwekọrịta gị, ọ bụghị na mgbasa ozi. Atụmatụ azụmahịa na nke agụmakwụkwọ na-enwekarị iwu data dị iche na atụmatụ onwe onye n'efu; gụọ ha maka atụmatụ ị ga-eji n'ezie."
          ],
          steps: ["Depụta ngwa otu gị na-eji ma ọ bụ chọrọ.", "Lelee data: ichekwa na iji ihe i dere azụ ya.", "Lelee ịbanye: ihe ọ nwere ike ịgụ ma ọ bụ ime.", "Lelee nkwado, izi ezi na ego.", "Jiri peeji onye na-enye ya n'onwe ya na nkwekọrịta gị."],
          words: [["Iwu data (data terms)", "iwu gbasara otu onye na-enye ngwa si echekwa ma jiri ihe i dere."], ["Ngwa enyemaka dị n'ime (built-in assistant)", "ihe AI dị n'ime ngwa ị na-eji ugbu a, dị ka ngwa ide akwụkwọ."]],
          slides: [
            { title: "Ụdị ngwa AI", bullets: ["Ngwa enyemaka n'ozuzu", "Ngwa enyemaka dị n'ime ngwa ị na-eji ugbu a", "Ihe agent na-eme ihe"] },
            { title: "Ajụjụ ise", bullets: ["Data: ọ na-echekwa ma ọ bụ na-eji ya azụ onwe ya?", "Ịbanye: gịnị ka ọ nwere ike ịgụ ma ọ bụ ime?", "Nkwado, izi ezi, ego"] },
            { title: "Ebe ị ga-achọta azịza", bullets: ["Peeji nzuzo na ọnụahịa nke onye na-enye ya", "Nkwekọrịta gị", "Iwu dị iche n'atụmatụ ọ bụla: lelee nke gị"] }
          ],
          tryIt: "Họrọ otu ngwa AI otu gị na-eji ma ọ bụ chọrọ. Zaa ajụjụ ise ahụ site na peeji onye na-enye ya n'onwe ya. Dee ikpe n'otu ahịrị: kwado, kwado nwere oke, ma ọ bụ ọ bụghị ugbu a.",
          youCanNow: "ikpe ngwa AI ikpe gbasara data, ịbanye, nkwado, izi ezi na ego.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ajụjụ \"ịbanye\" gbasara ngwa AI na-ajụ?", options: ["Ego ole ọ na-efu", "Otu o si aza ngwa ngwa", "Ihe ọ nwere ike ịgụ ma ọ bụ ime na sistemụ gị", "Asụsụ ndị ọ na-asụ"], answer: 2, why: "Ịbanye na-agwa gị ihe ngwa ahụ nwere ike ịhụ ma ọ bụ gbanwee ma ọ bụrụ na ihe emehie." },
            { objective: "O5", q: "Otu gị na-eji atụmatụ onwe onye n'efu, ị chọkwara ịmata ma ọ na-eji data gị azụ onwe ya. Ebee ka ị ga-ele?", options: ["Akụkọ mgbasa ozi nke afọ gara aga", "Iwu nzuzo onye na-enye ya n'onwe ya maka atụmatụ ahụ", "Ihe onye ọrụ ibe gị chere", "Azịza AI n'onwe ya na mkparịta ụka"], answer: 1, why: "Atụmatụ n'efu na nke azụmahịa nwere ike inwe iwu data dị iche, peeji onye na-enye ya bụkwa isi iyi." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide ntụziaka iji AI n'otu peeji maka otu gị",
          minutes: 6,
          goal: "Dee obere ntụziaka iji AI nke otu gị ga-agbaso.",
          text: [
            "Ntụziaka otu peeji ka mma karịa iwu ogologo nke ọ dịghị onye na-agụ. Ọ na-aza ajụjụ ise: Kedu ngwa anyị nwere ike iji? Gịnị ka a na-agaghị etinye mgbe ọ bụla? Gịnị ka mmadụ ga-elele tupu ọ pụọ? Olee mgbe anyị ga-ekwu na AI nyere aka? Onye ka anyị ga-ajụ?",
            "Dee ya n'okwu dị mfe nwere ọmụmaatụ site n'ọrụ otu gị: \"Etinyela aha ndị ahịa, adreesị ha ma ọ bụ ozi ịkwụ ụgwọ ha mgbe ọ bụla.\" \"Mmadụ na-elele eziokwu, nọmba na okwu e hotara ọ bụla.\" \"Gwa onye ahịa ma ọ bụrụ na ọ na-akparịta ụka na AI.\" Ọ bụrụ na otu gị nwere iwu edere ede, ntụziaka gị ga-adaba n'ime ya; jụọ HR, IT ma ọ bụ ndị ọka iwu.",
            "Jiri AI dee ya site na ndetu gị, wee dezie ya nke ọma. Kesaa ya, jụọ otu gị ihe na-edoghị anya, ma lelee ya ọzọ kwa ọnwa ole na ole, n'ihi na ngwa na ihe egwu na-agbanwe mgbe niile."
          ],
          steps: ["Zaa ajụjụ ise ahụ na ndetu dị mkpụmkpụ.", "Jiri AI dee otu peeji site na ndetu gị.", "Tinye ezi ọmụmaatụ site n'ọrụ otu gị.", "Lelee na ọ dabara n'iwu otu gị.", "Kesaa ya, jụọ ihe na-edoghị anya, kpebie ụbọchị nlele."],
          words: [["Ntụziaka iji AI (AI use guide)", "obere iwu gbasara otu otu si eji ngwa AI."], ["Ikwupụta (disclosure)", "ịgwa ndị mmadụ na AI nyere aka mee ihe ma ọ bụ na ha na-akparịta ụka na AI."]],
          slides: [
            { title: "Ajụjụ ise, otu peeji", bullets: ["Kedu ngwa?", "Gịnị ka a na-agaghị etinye mgbe ọ bụla?", "Gịnị ka mmadụ ga-elele?", "Olee mgbe anyị ga-ekwupụta? Onye ka anyị ga-ajụ?"] },
            { title: "Okwu dị mfe, ezi ọmụmaatụ", bullets: ["\"Etinyela ozi ịkwụ ụgwọ ndị ahịa mgbe ọ bụla\"", "\"Mmadụ na-elele eziokwu na nọmba ọ bụla\""] },
            { title: "Mee ka ọ dị ndụ", bullets: ["Ka ọ daba n'ime iwu edere ede ọ bụla", "Jụọ otu gị ihe na-edoghị anya", "Lelee ya kwa ọnwa ole na ole"] }
          ],
          tryIt: "Ọrụ ikpeazụ: chekwaa prompt atọ i nwalere (ọrụ nzukọ, akwụkwọ mkpebi, ozi ọhụrụ nye otu) n'otu akwụkwọ, ma tinye ntụziaka iji AI n'otu peeji nke otu gị nwere ngwa, ihe a na-agaghị etinye, ihe a ga-elele, ikwupụta na onye a ga-ajụ. Kesaa ya na otu onye ọrụ ibe gị ka o nye gị nzaghachi.",
          youCanNow: "idu otu gị n'iji AI kwa ụbọchị site na ngwa e nwalere na ntụziaka doro anya n'otu peeji.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka ikwupụta pụtara na ntụziaka AI nke otu?", options: ["Ikesa okwuntughe gị na IT", "Idepụta ngwa AI ọ bụla e mere", "Itinye prompt gị n'ịntanetị", "Ịgwa ndị mmadụ mgbe AI nyere aka ma ọ bụ mgbe ha na-akparịta ụka na AI"], answer: 3, why: "Ikwupụta na-eme ka ndị mmadụ mara ebe e jiri AI." },
            { objective: "O6", q: "Otu gị nwere iwu AI edere ede. Olee otu ntụziaka otu peeji gị kwesịrị isi metụta ya?", options: ["Daba n'ime ya ma kwuo maka ya", "Were iwu dị mfe karị dochie ya", "Leghara ya anya, ebe ọ bụ na otu dị iche iche", "Detuo ya niile otu o si dị"], answer: 0, why: "Ntụziaka otu na-agbakwunye nkọwa bara uru mana ọ ga-anọrịrị n'ime iwu otu ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ndị mmadụ, ngwa na ntụziaka otu",
        questions: [
          { objective: "O4", q: "Mgbe ị na-akwado maka mkparịta ụka gbasara arụmọrụ, gịnị ka ị nwere ike itinye n'ime ngwa AI ọha?", options: ["Aha onye ọrụ ahụ na akara ya", "Ndetu ahụike ya", "Nkọwa n'ozuzu n'enweghị aha ma ọ bụ ozi nzuzo", "Faịlụ ntaramahụhụ ya"], answer: 2, why: "Kọwaa ọnọdụ n'ozuzu; debe ozi nzuzo n'ebe ọ na-adịghị." },
          { objective: "O4", q: "Kedu mkpebi AI na-ekwesịghị ime mgbe ọ bụla?", options: ["Ịta onye ọrụ ahụhụ", "Ịhọrọ oge nzukọ", "Ịhọrọ ụdị mkpụrụ edemede (font)", "Ịhazi usoro ihe a ga-ekwu na nzukọ"], answer: 0, why: "Mkpebi gbasara ndị mmadụ na-anọgide n'aka ndị mmadụ." },
          { objective: "O5", q: "Ebee ka ị ga-elele ma ngwa ọ na-eji data gị azụ onwe ya?", options: ["Mgbasa ozi maka ngwa ahụ", "Iwu nzuzo onye na-enye ya n'onwe ya maka atụmatụ gị", "Echiche enyi gị", "Akara (logo) ngwa ahụ"], answer: 1, why: "Iwu onye na-enye ya n'onwe ya maka atụmatụ gị n'ezie bụ isi iyi." },
          { objective: "O6", q: "Kedu uru bụ isi nke ntụziaka AI n'otu peeji?", options: ["Ndị mmadụ na-agụ ya ma na-agbaso ya n'ezie", "Ọ na-ekpuchi ọnọdụ ọ bụla", "Ọ dịghị mgbe ọ chọrọ mmelite", "Ọ na-edochi iwu niile"], answer: 0, why: "A na-eji ntụziaka dị mkpụmkpụ na nke doro anya." },
          { objective: "O6", q: "Ugboro ole ka ị kwesịrị ilele ntụziaka AI nke otu gị?", options: ["Ọ dịghị mgbe", "Kwa afọ iri", "Naanị mgbe ọdachi mere", "Kwa ọnwa ole na ole, ka ngwa na ihe egwu na-agbanwe"], answer: 3, why: "Ngwa AI na-agbanwe ngwa ngwa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ndu n'Oge Agentic AI 2: AI maka Ndị Ndu Ọgbara Ọhụrụ na Ngwa AI maka Ndị Ndu",
    questions: [
      { objective: "O1", q: "Ezigbo prompt ndetu nzukọ na-arịọ:", options: ["Abụ uri", "Mkpebi, ọrụ nwere onye nwe ya na ụbọchị, ajụjụ ndị fọdụrụ", "Ụgwọ ọnwa onye ọ bụla", "Naanị usoro nzukọ ọhụrụ"], answer: 1, why: "Usoro ahụ na-eme ka ndetu ghọọ ọrụ." },
      { objective: "O1", q: "Ọ bụrụ na AI depụtara ọrụ na-enweghị onye nwe ya, prompt ahụ kwesịrị ime ka o dee:", options: ["Aha gị", "Aha ọ bụla o chere", "MISSING", "Ọ dịghị ihe"], answer: 2, why: "Ịkọ ebe ihe na-adịghị na-egbochi ichepụta onye nwe ọrụ." },
      { objective: "O1", q: "Tupu itinye ndetu n'ime AI, ị kwesịrị:", options: ["Itinye okwuntughe", "Itinye aha ndị ọzọ", "Iwepụ ozi nzuzo ma ọ bụ ozi gbasara onwe mmadụ", "Ịsụgharị ha"], answer: 2, why: "Ozi nzuzo anaghị abanye na ngwa ọha." },
      { objective: "O2", q: "N'akwụkwọ mkpebi, ọrụ kacha mma AI nwere bụ:", options: ["Ime ka nhọrọ gị saa mbara ma gosi ihe ị na-ahụghị", "Ime mkpebi ahụ", "Ịbịanye aka n'akwụkwọ ahụ", "Ịdochi otu gị"], answer: 0, why: "Gị na-ekpebi; AI na-enyere gị aka iche echiche sara mbara." },
      { objective: "O2", q: "\"Kedu ozi na-efu m?\" bụ:", options: ["Iwu nhazi ederede", "Ịla oge n'iyi", "Ihe egwu nzuzo", "Ajụjụ nsochi bara uru na-achọta ihe ị na-ahụghị"], answer: 3, why: "Ọ na-egosi ebe ihe na-efu n'echiche gị." },
      { objective: "O2", q: "Kedu ihe kpatara akwụkwọ mkpebi na-ekwesịghị ikwu mgbe ọ bụla?", options: ["\"Ọ dabara n'ego anyị nwere\"", "\"AI tụrụ aro ya\"", "\"Ọ ga-agwụ n'oge\"", "\"Otu anyị nwere ike ime ya\""], answer: 1, why: "Ndị ndu nwe ihe kpatara mkpebi ha." },
      { objective: "O3", q: "Iji mee ka ozi AI dere dị ka okwu gị:", options: ["Jiri ngwa ọzọ", "Jiri akara mkpu (!) karịa", "Rịọ okwu ogologo", "Tinye ozi ochie ma kwuo \"mee ka ụda ya dị ka nke a\""], answer: 3, why: "Ọmụmaatụ ihe i dere na-eduzi ụda ya." },
      { objective: "O3", q: "Ịgụpụta ozi n'olu dị elu tupu izipu ya na-enyere gị aka:", options: ["Itinye okwu ọkachamara siri ike", "Ime ka ọ dị ogologo", "Iwepụ ihe ị na-agaghị ekwu ihu na ihu", "Ịhapụ nlele"], answer: 2, why: "Ntị gị na-ejide ụda na-adịghị mma." },
      { objective: "O3", q: "Maka ozi gbasara ịchụ ndị ọrụ (layoffs), AI nwere ike inyere gị aka:", options: ["Ịhazi ozi ahụ, ka HR ma ọ bụ ndị ọka iwu lelee ya", "Izipu ya n'eleleghị ya", "Ikpebi onye a ga-achụ", "Izere ịgwa ndị mmadụ"], answer: 0, why: "Ozi dị nro chọrọ ka mmadụ lelee ya." },
      { objective: "O4", q: "Kedu ozi a na-agaghị etinye mgbe ọ bụla n'ime ngwa AI ọha?", options: ["Usoro nzukọ nkịtị", "Ozi ahụike onye ọrụ", "Ụbọchị mmemme ọha", "Aha otu gị"], answer: 1, why: "Ozi ahụike bụ nzuzo." },
      { objective: "O4", q: "Role-play na AI na-enyere gị aka:", options: ["Ime omume mkparịta ụka siri ike", "Ịhapụ mkparịta ụka ahụ", "Idekọ onye ọrụ ahụ", "Ikpebi ụgwọ ọrụ"], answer: 0, why: "Omume na-ewulite obi ike n'ekesaghị ozi nzuzo." },
      { objective: "O4", q: "Nzaghachi AI dere kwesịrị:", options: ["Ịbụ ihe e zoro onye ọrụ ahụ", "Ka e zipu ya otu o si dị", "Ka e tinye ya n'ihu ọha", "Ka e degharịa ya n'okwu nke gị"], answer: 3, why: "Ndị mmadụ na-ama, ntụkwasị obi dịkwa mkpa." },
      { objective: "O5", q: "Kedu nke bụ ngwa enyemaka dị n'ime?", options: ["Akwụkwọ ndetu e ji akwụkwọ mee", "Ihe AI dị n'ime ngwa ide akwụkwọ gị", "Ekwentị dị n'elu tebụl", "Igwe mbipụta"], answer: 1, why: "Ọtụtụ ngwa ndị a maara nke ọma nwere ihe AI ugbu a." },
      { objective: "O5", q: "Ajụjụ \"data\" gbasara ngwa na-ajụ:", options: ["Ndị mmadụ ọ na-amasị?", "Kedu agba ya?", "Ọ na-echekwa ma ọ bụ na-eji ihe anyị dere azụ onwe ya?", "Bọtịnụ ole ka o nwere?"], answer: 2, why: "Iwu data na-ekpebi ihe dị mma ide." },
      { objective: "O5", q: "Ajụjụ \"ịbanye\" na-ajụ:", options: ["Ọfịs ahụ ọ ghere oghe?", "Ndị ọrụ nwere ike ịbanye n'ịntanetị?", "Gịnị ka ọ nwere ike ịgụ ma ọ bụ ime na sistemụ anyị?", "Onye nwere igodo ụzọ?"], answer: 2, why: "Ihe agent nwere ike ime ihe na sistemụ gị." },
      { objective: "O5", q: "Atụmatụ onwe onye n'efu na atụmatụ azụmahịa:", options: ["Nwere ike inwe iwu data dị iche", "Na-enwe otu iwu ahụ mgbe niile", "Anaghị echekwa data mgbe ọ bụla", "Bụ n'efu mgbe niile"], answer: 0, why: "Gụọ iwu maka atụmatụ ị ga-eji." },
      { objective: "O6", q: "Ntụziaka AI n'otu peeji na-aza:", options: ["Naanị onye bụ onye isi", "Ajụjụ iwu ọ bụla", "Naanị ọnụahịa", "Kedu ngwa, ihe a na-agaghị etinye, ihe a ga-elele, ikwupụta, onye a ga-ajụ"], answer: 3, why: "Ajụjụ ise dị mfe na-ekpuchi iji ya kwa ụbọchị." },
      { objective: "O6", q: "Ikwupụta pụtara:", options: ["Izo iji AI", "Ịgwa ndị mmadụ na AI nyere aka ma ọ bụ na ha na-akparịta ụka na AI", "Ihichapụ akụkọ", "Ikesa okwuntughe"], answer: 1, why: "Ikwu eziokwu gbasara AI na-ewulite ntụkwasị obi." },
      { objective: "O6", q: "Ọ bụrụ na otu gị nwere iwu AI edere ede, ntụziaka otu gị ga-:", options: ["Megide ya", "Dochie ya", "Leghara ya anya", "Daba n'ime ya"], answer: 3, why: "Ntụziaka otu na-arụ ọrụ n'ime iwu otu ahụ." },
      { objective: "O6", q: "Ebe kacha mma idebe ngwa AI nke onye ndu gị bụ:", options: ["Okwuntughe ndị ọzọ", "Prompt ọ bụla i chefuru", "Prompt e nwalere nke a na-eji ọzọ, e chekwara n'otu ebe", "Ndepụta ngwa AI niile"], answer: 2, why: "Prompt e chekwara na nke e nwalere na-eme ka ezigbo omume ga n'ihu." }
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
      11,
      13,
      16,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Prompt ọrụ nzukọ",
        objective: "O1",
        notYet: "Ọ dịghị prompt e chekwara, ma ọ bụ e nwaleghị ya na ezi ndetu.",
        meets: "Prompt e chekwara nke na-eme ka ndetu ghọọ ọrụ nwere onye nwe ya na ụbọchị, e jiri otu ugboro mgbe e wepụrụ ozi nzuzo.",
        exceeds: "Prompt ahụ na-akọ ndị nwe ọrụ na-efu efu ma machibido ọrụ e chepụtara."
      },
      {
        name: "Prompt akwụkwọ mkpebi",
        objective: "O2",
        notYet: "Ọ dịghị prompt e chekwara, ma ọ bụ AI mere ndụmọdụ ahụ.",
        meets: "Prompt e chekwara maka nhọrọ na ihe egwu, e jiri otu ugboro, onye ndu dekwara ndụmọdụ ahụ.",
        exceeds: "O nwere ajụjụ nsochi na-anwale nhọrọ kacha amasị."
      },
      {
        name: "Prompt ozi ọhụrụ nye otu",
        objective: "O3",
        notYet: "Ọ dịghị prompt e chekwara, ma ọ bụ e leleghị ozi ahụ.",
        meets: "Prompt e chekwara maka ozi ọhụrụ nye otu, e jiri otu ugboro ma dozie ụda ma ọ bụ ogologo ya.",
        exceeds: "O nwere ọmụmaatụ ihe onye ndu dere n'onwe ya ka ụda ya dabara."
      },
      {
        name: "Ntụziaka AI n'otu peeji",
        objective: "O6",
        notYet: "Ngwa e kwadoro, ihe a na-agaghị etinye, ihe a ga-elele ma ọ bụ onye a ga-ajụ na-efu.",
        meets: "Otu peeji na-ekwu ngwa e kwadoro, ihe a na-agaghị etinye mgbe ọ bụla, ihe mmadụ ga-elele na onye a ga-ajụ.",
        exceeds: "Ọ na-ekwukwa maka ikwupụta, e kesakwara ya na onye ọrụ ibe ka o nye nzaghachi."
      },
      {
        name: "Ozi nzuzo adịghị n'ime ya",
        objective: "O4",
        notYet: "Prompt ma ọ bụ ọmụmaatụ nwere aha ma ọ bụ ozi nzuzo.",
        meets: "Ọ dịghị ozi nzuzo ma ọ bụ ozi gbasara onwe mmadụ na prompt ma ọ bụ ọmụmaatụ ọ bụla e chekwara.",
        exceeds: "Prompt na-eji ihe nnọchi dị ka [onye otu] ka ọ dị mma iji ya ọzọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị ndu mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu nwere ntụziaka iji AI n'otu peeji n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị ndu kwuru na prompt ha na-eji ọzọ na-echekwa ha oge kwa izu (nnyocha nsochi)",
      "Ndị ndu gara n'ihu were ihe ọmụmụ 3 nke Ndu n'Oge Agentic AI"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI; jiri nke otu gị kwadoro",
      "Ndetu site na nzukọ na-adịbeghị anya, ezi mkpebi na ozi ọhụrụ nye otu, mgbe e wepụrụ ozi nzuzo",
      "Akwụkwọ (document) iji chekwaa prompt na ntụziaka iji AI",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee jiri prompt ndetu nzukọ n'ihu ha na ndetu e chepụtara echepụta tupu ndị ndu ejiri nke ha.",
      "Chetara ndị ndu ka ha gbasoo iwu AI nke otu ha ma tinye HR ma ọ bụ ndị ọka iwu na mkpebi gbasara ndị mmadụ na ozi dị nro.",
      "Kee ndị ndu abụọ abụọ ka ha mee role-play nke mkparịta ụka siri ike site naanị na nkọwa n'ozuzu.",
      "Ka ndị ndu gbanwerịta ntụziaka AI ha dere ma nye ibe ha otu nzaghachi.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma lelee na ọ dịghị prompt e chekwara nwere ozi gbasara onwe mmadụ."
    ]
  }
};
