"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-beginner-ai-tools.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-beginner-ai-tools-ig",
  lang: "ig",
  translationOf: "underserved-beginner-ai-tools",
  category: "Undeserved Community",
  name: "Ngwa AI Dị Mfe Maka Ndị Na-amalite",
  skills: "Ịhọrọ ngwa AI n'efu kwesịrị ekwesị, Iji olu gị gwa AI okwu, Iji igwefoto ekwentị gị sụgharịa ihe, Iji Canva mee obere akwụkwọ mgbasa ozi, Iji ngwa enyemaka AI dee obere ozi",
  outcome: "ịhọrọ ngwa AI n'efu kwesịrị ọrụ kwa ụbọchị ma jiri ya: iji olu gị gwa ngwa enyemaka okwu, iji igwefoto ekwentị gị sụgharịa akara ma ọ bụ akwụkwọ ozi, na ime obere akwụkwọ mgbasa ozi peeji otu maka mmemme obodo.",
  about: [
    "E nwere ọtụtụ ngwa AI n'efu, ọ na-esikwa ike ịmata ebe a ga-amalite. Ihe ọmụmụ a na-egosi gị obere ngwa ole na ole dị mfe maka ndị na-amalite, ndị na-anaghị akwụ ụgwọ ma na-arụ ọrụ n'ekwentị ma ọ bụ na kọmputa ọba akwụkwọ.",
    "Ị ga-eji olu gị kama ide ihe, jiri igwefoto ekwentị gị sụgharịa okwu, jiri ngwa enyemaka AI dee obere ozi, ma jiri Canva n'efu mee obere akwụkwọ mgbasa ozi.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Mee ọrụ \"Nwalee ya ugbu a\" mgbe nke ọ bụla gwụrụ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee akwụkwọ mgbasa ozi peeji otu maka ezi mmemme obodo ma ọ bụ nke i chepụtara, dị ka ịnakọta nri maka ndị nọ ná mkpa, ihicha okporo ụzọ obodo, ma ọ bụ ịchọ ego maka ụlọ akwụkwọ. Jiri ngwa enyemaka AI dee obere aha isi na ahịrị atọ nke nkọwa, mee akwụkwọ ahụ na Canva n'efu, ma jiri ngwa nsụgharị dee otu okwu ahụ n'asụsụ nke abụọ ndị agbata obi gị na-asụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye bi n'obodo ndị na-enweghị enyemaka zuru ezu, ndị ọhụrụ n'iji ngwa AI: ndị nne na nna, ndị agadi, ndị ọrụ afọ ofufo n'obodo, ndị na-enweghị kọmputa n'ụlọ, na ndị na-asụ asụsụ ọzọ na-abụghị Bekee n'ụlọ.",
    startingPoint: "Ha na-eji ekwentị akpọ oku, zipu ozi, ma eleghị anya jiri soshal midia. Ha anụla maka AI ma ha amaghị ngwa n'efu dị adị ma ọ bụ ihe nke ọ bụla maka. Ide ihe na-adịrị ụfọdụ nwayọọ ma ọ bụ sie ike.",
    gap: "Ngwa n'efu nwere ike ide ozi, sụgharịa akara na akwụkwọ ozi, ma mee akwụkwọ mgbasa ozi, ma ndị na-amụ ihe amaghị ebe ha ga-amalite. Ịhọrọ ngwa n'efu kwesịrị ọrụ na-echekwa oge na ego, ma na-enyere ha aka ikesara ndị agbata obi ha ozi n'ihe karịrị otu asụsụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 5 ruo 6)",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa ọba akwụkwọ",
      "Ụgwọ: naanị ngwa n'efu",
      "Nsụgharị igwe ezughị oke: akwụkwọ ahụike ma ọ bụ nke iwu dị mkpa chọrọ onye ntụgharị okwu (interpreter)",
      "Nzuzo: pụọ (sign out) na kọmputa a na-ekerịta, ma debe ozi nzuzo n'ebe ọ na-adịghị na prompt"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'iji ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ kwa ụbọchị", action: "ịhọrọ ngwa n'efu kwesịrị ya: ngwa enyemaka mkparịta ụka, app nsụgharị ma ọ bụ ngwa nhazi (design)", standard: "ma kwekọọ opekata mpe ọrụ 4 n'ime 5 n'ụdị ngwa kwesịrị ya" },
    { id: "O2", condition: "Site n'iji ekwentị ma ọ bụ app ngwa enyemaka AI", action: "iji olu jụọ ajụjụ ma dozie okwu ọ bụla ide-site-n'olu dere n'ụzọ na-ezighi ezi", standard: "tupu i zipu ya" },
    { id: "O3", condition: "Mgbe e nyere gị akara, labelụ ma ọ bụ ọkwa e biri ebi n'asụsụ ọzọ", action: "iji igwefoto ekwentị sụgharịa ya ma kpebie mgbe ị ga-arịọ onye ntụgharị okwu ma ọ bụ onye maara asụsụ ahụ nke ọma", standard: "na-eji onye ntụgharị okwu maka akwụkwọ ahụike ma ọ bụ nke iwu" },
    { id: "O4", condition: "Mgbe e nyere gị ozi ị ga-ezipu", action: "ịrịọ ngwa enyemaka AI maka obere ozi nwere onye ga-agụ ya, ihe ọ ga-ekwu, ụda ya na ogologo ya, wee dezie ya ma lelee eziokwu ọ bụla", standard: "nke mere na ọ dị ka okwu gị ma ụbọchị na ebe ọ bụla ziri ezi" },
    { id: "O5", condition: "Site n'iji Canva n'efu", action: "ime akwụkwọ mgbasa ozi peeji otu site na template nwere aha isi, gịnị, mgbe na ebe, na otu foto", standard: "budata ya ma ọ bụ kesaa ya, ma pụọ (sign out) na kọmputa a na-ekerịta" }
  ],
  chapters: [
    {
      name: "Isi 1: Igbe ngwa AI gị n'efu",
      lessons: [
        {
          title: "Ịhọrọ ngwa n'efu kwesịrị ọrụ ahụ",
          objectives: ["O1"],
          minutes: 4,
          goal: "Kwekọọ ọrụ kwa ụbọchị na ngwa AI n'efu kwesịrị ya.",
          text: [
            "Chee maka ngwa AI dị ka ngwa dị n'ime drọwa kichin. Nke ọ bụla maara ọrụ dị iche nke ọma.",
            "Ngwa enyemaka mkparịta ụka AI (ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini) dị mma maka ide ihe, ịkọwa ihe na ime atụmatụ. App nsụgharị (dị ka Google Translate) dị mma maka asụsụ ndị ọzọ. Ngwa nhazi (dị ka Canva, nke nwere ụdị n'efu) dị mma maka akwụkwọ mgbasa ozi na kaadị.",
            "Malite n'ọrụ ahụ, ọ bụghị n'ngwa ahụ. Jụọ onwe gị: ọ̀ bụ okwu ka m chọrọ ka e dee, okwu ka a sụgharịa, ka ọ bụ ihe mara mma m ga-ebipụta ma ọ bụ kesaa?"
          ],
          steps: ["Dee ọrụ ị ga-arụ.", "Kpebie: ị chọrọ ka e dee okwu, sụgharịa ya, ka ọ bụ hazie ya?", "Họrọ ngwa kwekọrọ: ngwa enyemaka mkparịta ụka, app nsụgharị ma ọ bụ ngwa nhazi.", "Buru ụzọ jiri ụdị n'efu."],
          words: [["Ngwa enyemaka mkparịta ụka (chat assistant)", "mmemme AI ị na-ede ihe na ya ma ọ bụ gwa okwu, nke na-ede azịza."], ["Ụdị n'efu (free version)", "ọkwa ngwa ahụ na-adịghị akwụ ụgwọ; ụfọdụ ngwa na-erekwa atụmatụ ndị ọzọ."]],
          slides: [
            { title: "Ngwa dị ka drọwa kichin", bullets: ["Ngwa ọ bụla maara ọrụ dị iche nke ọma", "Malite n'ọrụ ahụ, ọ bụghị n'ngwa ahụ"] },
            { title: "Ngwa n'efu atọ iji malite", bullets: ["Ngwa enyemaka mkparịta ụka: ide, ịkọwa, ime atụmatụ", "App nsụgharị: asụsụ ndị ọzọ", "Canva n'efu: akwụkwọ mgbasa ozi na kaadị"] },
            { title: "Jụọ onwe gị", bullets: ["Ọ̀ bụ okwu ka m chọrọ ka e dee?", "Okwu ka a sụgharịa?", "Ihe e hazirie m ga-ebipụta ma ọ bụ kesaa?"] }
          ],
          tryIt: "Dee ọrụ atọ ị nwere n'ọnwa a. N'akụkụ nke ọ bụla, dee ụdị ngwa kwesịrị ya: ngwa enyemaka mkparịta ụka, app nsụgharị ma ọ bụ ngwa nhazi.",
          youCanNow: "ịkwekọ ọrụ kwa ụbọchị na ngwa AI n'efu kwesịrị ya.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụdị ngwa kacha mma maka itinye akwụkwọ ozi n'asụsụ ọzọ?", options: ["App nsụgharị", "Ngwa nhazi", "Ngwa ndozi foto", "App kalenda"], answer: 0, why: "E mere app nsụgharị maka ịgbanwe okwu ka ọ bụrụ asụsụ ọzọ." },
            { objective: "O1", q: "Ị chọrọ kaadị ekele maka ndị ọrụ afọ ofufo nke mara mma ibipụta. Gịnị ka ị ga-ebu ụzọ meghee?", options: ["App nsụgharị", "Ngwa nhazi dị ka Canva", "Igwe mgbakọ", "Ide-site-n'olu"], answer: 1, why: "E mere ngwa nhazi maka kaadị na akwụkwọ mgbasa ozi mara mma ibipụta ma ọ bụ ikesa." }
          ]
        },
        {
          title: "Iji olu gị gwa AI okwu",
          objectives: ["O2"],
          minutes: 5,
          goal: "Jụọ ngwa enyemaka AI ajụjụ site n'ikwu okwu kama ide ihe.",
          text: [
            "Ọ bụrụ na ide ihe na-adịrị gị nwayọọ ma ọ bụ sie ike, ị nwere ike ikwu okwu kama. Ọtụtụ app ngwa enyemaka AI nwere bọtịnụ maikrofon. Pịa ya, kwuo ajụjụ gị, app ahụ ga-agbanwe okwu gị ka ọ bụrụ ihe e dere ede.",
            "Ekwentị nwekwara ide-site-n'olu n'ime kiibọọdụ. Chọọ obere maikrofon na kiibọọdụ mgbe ị na-ede ozi.",
            "Kwuo okwu nke ọma, ntakịrị nwayọọ karịa otu i si ekwukarị. Kwuo ihe ị chọrọ, dịka: \"Nyere m aka dee obere ozi nye onye nkuzi nwa m nwoke, na-ekwu na ọ gaghị abịa ụlọ akwụkwọ na Fraịdee n'ihi na ọ ga-ahụ dọkịta.\" Gụọ okwu ahụ tupu i zipu ya, n'ihi na ide-site-n'olu nwere ike ịnụhie ihe."
          ],
          steps: ["Meghee app ngwa enyemaka AI ma ọ bụ ozi n'ekwentị gị.", "Chọta bọtịnụ maikrofon.", "Pịa ya ma kwuo ajụjụ gị nke ọma.", "Gụọ okwu ọ nụrụ, dozie mperi ọ bụla, wee zipu."],
          words: [["Ide-site-n'olu (voice typing)", "atụmatụ ekwentị na-agbanwe ihe ị na-ekwu ka ọ bụrụ okwu e dere ede."], ["Bọtịnụ maikrofon", "obere bọtịnụ nwere foto maikrofon nke na-eme ka ngwaọrụ ahụ gee ntị."]],
          slides: [
            { title: "Kwuo okwu kama ide ihe", bullets: ["Ọtụtụ app AI nwere bọtịnụ maikrofon", "Ekwentị nwere ide-site-n'olu na kiibọọdụ"] },
            { title: "Otu esi agwa ya okwu", bullets: ["Kwuo nke ọma, ntakịrị nwayọọ", "Kwuo ihe ị chọrọ na otu ị chọrọ ka ọ dị"] },
            { title: "Lelee tupu i zipu", bullets: ["Ide-site-n'olu nwere ike ịnụhie okwu", "Gụọ ya, dozie ya, wee zipu"] }
          ],
          tryIt: "Jiri bọtịnụ maikrofon rịọ ngwa enyemaka AI ka o dee ozi ahịrịokwu abụọ nye onye nkuzi, onye isi ọrụ ma ọ bụ onye agbata obi. Gụọ ya ma dozie mperi ọ bụla.",
          youCanNow: "iji olu gị rịọ ngwa enyemaka AI enyemaka ma lelee ihe ọ nụrụ.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka ị na-ahụkarị ide-site-n'olu n'ekwentị?", options: ["N'ntọala igwefoto", "Na menu batrị", "Obere maikrofon na kiibọọdụ", "Na kọntaktị ekwentị"], answer: 2, why: "Kiibọọdụ ekwentị na-enwekarị obere bọtịnụ maikrofon maka ide-site-n'olu." },
            { objective: "O2", q: "I kwuru ozi, app ahụ wee dee \"by bread\" kama \"buy bread\". Gịnị ka ị ga-eme?", options: ["Zipu ya otú ahụ", "Hichapụ app ahụ", "Malitegharịa n'akwụkwọ", "Dozie okwu ahụ tupu i zipu"], answer: 3, why: "Ide-site-n'olu nwere ike ịnụhie ihe, ya mere ị na-agụ ma dozie okwu tupu i zipu." }
          ]
        },
        {
          title: "Iji igwefoto ekwentị gị sụgharịa ihe",
          objectives: ["O3"],
          minutes: 5,
          goal: "Sụgharịa akara, labelụ ma ọ bụ akwụkwọ ozi e biri ebi site n'ịtụ igwefoto ekwentị gị n'elu ya.",
          text: [
            "App n'efu dị ka Google Translate nwere ike iji igwefoto ekwentị gị gụọ okwu e biri ebi ma gosi ya n'asụsụ ọzọ. Nke a na-enyere aka maka akara, labelụ ọgwụ, ọkwa ụlọ akwụkwọ na fọm e dere n'asụsụ ị na-agụghị nke ọma.",
            "N'ime app ahụ, họrọ asụsụ abụọ ahụ (nke dị n'akwụkwọ ahụ na nke ị chọrọ), họrọ nhọrọ igwefoto, ma tụọ ekwentị gị n'elu okwu ahụ.",
            "Nsụgharị igwe na-enyere aka ma ọ zughị oke. Maka ọgwụ, akwụkwọ iwu ma ọ bụ ihe ọ bụla dị mkpa, rịọ onye ntụgharị okwu. Ọtụtụ ụlọ ọgwụ, ebe a na-agwọ ọrịa na ọfịs gọọmentị na-enye otu n'efu; jụọ n'ebe nnabata."
          ],
          steps: ["Wụnye app nsụgharị n'efu site n'ezi ụlọ ahịa app.", "Họrọ asụsụ dị n'akwụkwọ ahụ na asụsụ ị chọrọ.", "Họrọ nhọrọ igwefoto ma tụọ ekwentị gị n'elu okwu ahụ.", "Maka akwụkwọ dị mkpa, rịọ ọfịs ahụ ka o nye gị onye ntụgharị okwu."],
          words: [["Ịsụgharị (translate)", "ịgbanwe okwu site n'otu asụsụ gaa n'asụsụ ọzọ."], ["Onye ntụgharị okwu (interpreter)", "onye a zụrụ azụ na-atụgharị okwu a na-ekwu n'etiti asụsụ abụọ."]],
          slides: [
            { title: "Igwefoto gị nwere ike ịsụgharị ihe", bullets: ["Akara, labelụ, ọkwa ụlọ akwụkwọ, fọm", "App n'efu dị ka Google Translate"] },
            { title: "Otu esi eme ya", bullets: ["Họrọ asụsụ abụọ ahụ", "Họrọ nhọrọ igwefoto", "Tụọ ekwentị gị n'elu okwu ahụ"] },
            { title: "Akwụkwọ dị mkpa", bullets: ["Nsụgharị igwe ezughị oke", "Rịọ ọfịs ahụ maka onye ntụgharị okwu", "Ọtụtụ ebe a na-agwọ ọrịa na ọfịs na-enye otu n'efu"] }
          ],
          tryIt: "Tụọ igwefoto app nsụgharị n'elu labelụ ma ọ bụ akara e biri ebi n'ụlọ gị (igbe nri dabara). Sụgharịa ya n'asụsụ ọzọ, wee sụgharịa ya azụ.",
          youCanNow: "iji igwefoto ekwentị gị sụgharịa okwu e biri ebi, ma mata mgbe ị ga-arịọ mmadụ kama.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ eziokwu gbasara nsụgharị igwe?", options: ["Ọ na-enyere aka ma ọ zughị oke", "Ọ na-eziri ezi kpọmkwem mgbe niile", "Ọ na-arụ ọrụ naanị maka Bekee", "Ọ chọrọ akaụntụ a na-akwụ ụgwọ"], answer: 0, why: "Nsụgharị n'efu bụ enyemaka siri ike ma o nwere ike ime mperi." },
            { objective: "O3", q: "Labelụ ọgwụ gị dị n'asụsụ ị na-agụghị nke ọma. Kedu nzọụkwụ kacha enweghị nsogbu?", options: ["Chepụta ya site na foto ndị ahụ", "Rịọ ụlọ ahịa ọgwụ ma ọ bụ ebe a na-agwọ ọrịa maka onye ntụgharị okwu", "Jiri naanị nsụgharị igwefoto", "Jụọ onye ị na-amaghị n'ịntanetị"], answer: 1, why: "Maka ọgwụ na akwụkwọ iwu, onye ntụgharị okwu a zụrụ azụ bụ enyemaka kacha enweghị nsogbu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Igbe ngwa AI gị n'efu",
        questions: [
          { objective: "O1", q: "Ị chọrọ akwụkwọ mgbasa ozi maka ire achịcha n'ụlọ akwụkwọ. Kedu ụdị ngwa kacha dabara?", options: ["App nsụgharị", "Ngwa nhazi dị ka Canva", "Igwe mgbakọ", "App maapụ"], answer: 1, why: "E mere ngwa nhazi maka akwụkwọ mgbasa ozi na kaadị." },
          { objective: "O2", q: "Ide ihe na-esiri gị ike. Olee otu ị ka ga-esi jụọ ngwa enyemaka AI ajụjụ?", options: ["Ị pụghị", "Buru ụzọ kwụọ ụgwọ maka klas kiibọọdụ", "Jiri bọtịnụ maikrofon ma kwuo okwu", "Rịọ onye ọzọ ka o dee okwuntughe gị"], answer: 2, why: "Iji olu na-ekwe ka ị kwuo okwu kama ide ihe." },
          { objective: "O2", q: "Gịnị mere ị ga-eji gụọ ihe ide-site-n'olu dere tupu i zipu?", options: ["O nwere ike ịnụhie okwu", "Ọ na-agbakwunye adreesị gị mgbe niile", "Ọ na-ana ego", "Ọ na-ehichapụ ozi gị"], answer: 0, why: "Ide-site-n'olu nwere ike idehie okwu." },
          { objective: "O3", q: "Ị chọrọ ịgụ akara dị n'asụsụ ọzọ. Gịnị ka ị ga-eji?", options: ["Ngwa nhazi", "App egwu", "Ọkụ tọọchị", "App nsụgharị nwere nhọrọ igwefoto"], answer: 3, why: "Nhọrọ igwefoto na-agụ ma sụgharịa okwu e biri ebi." },
          { objective: "O3", q: "Ị chọrọ ịghọta ntụziaka dọkịta gị n'asụsụ ọzọ. Gịnị kacha mma?", options: ["Rịọ ebe a na-agwọ ọrịa maka onye ntụgharị okwu", "Chepụta ya", "Jiri naanị nsụgharị ekwentị", "Leghara ntụziaka ahụ anya"], answer: 0, why: "Maka ọgwụ na akwụkwọ dị mkpa, onye ntụgharị okwu a zụrụ azụ kacha enweghị nsogbu." }
        ]
      }
    },
    {
      name: "Isi 2: Iji AI mee ihe",
      lessons: [
        {
          title: "Iji ngwa enyemaka AI dee obere ozi",
          objectives: ["O4"],
          minutes: 4,
          goal: "Mee ka ngwa enyemaka AI dee obere ozi doro anya n'ụda ị chọrọ.",
          text: [
            "Ngwa enyemaka AI nwere ike idere gị obere ozi: ncheta nye otu obodo gị, ozi nye onye nwe ụlọ, ma ọ bụ ekele nye onye ọrụ afọ ofufo.",
            "Gwa ya onye ozi ahụ bụ maka ya, ihe ọ ga-ekwu, na ụda ya: nke enyi, nke nwere nkwanye ugwu, ma ọ bụ nke siri ike. Gwa ya ogologo ya: \"ahịrịokwu atọ\" ma ọ bụ \"okwu na-erughị 50\".",
            "Wee mee ka ọ bụrụ nke gị. Gbanwee okwu ndị na-adịghị ka okwu gị, ma lelee aha, ụbọchị na ebe n'onwe gị."
          ],
          steps: ["Kwuo onye ozi ahụ bụ maka ya.", "Kwuo ihe ọ ga-agụnye: ụbọchị, oge, ebe, ihe a ga-eweta.", "Kwuo ụda ya na ogologo ya.", "Dezie ya ka ọ dị ka okwu gị, ma lelee eziokwu ọ bụla."],
          words: [["Ụda (tone)", "otu ozi si ada: nke enyi, nke nwere nkwanye ugwu, nke dị oke mkpa ma ọ bụ nke siri ike."]],
          slides: [
            { title: "Obere ozi AI nwere ike ide", bullets: ["Ncheta maka otu gị", "Ozi nye onye nwe ụlọ ma ọ bụ ụlọ akwụkwọ", "Ekele nye ndị ọrụ afọ ofufo"] },
            { title: "Gwa ya ihe anọ", bullets: ["Onye ọ bụ maka ya", "Ihe ọ ga-ekwu", "Ụda ya", "Ogologo ya"] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Gbanwee okwu ndị na-adịghị ka okwu gị", "Lelee aha, ụbọchị na ebe"] }
          ],
          tryIt: "Jụọ ngwa enyemaka AI: \"Dee ncheta ahịrịokwu atọ nke enyi nye ndị agbata obi m maka ihicha okporo ụzọ obodo na Satọde n'elekere 9 nke ụtụtụ. Wetanụ uwe aka (gloves).\" Wee gbanwee otu ahịrị ka ọ dị ka okwu gị.",
          youCanNow: "ime ka ngwa enyemaka AI dee obere ozi nwere ụda na ogologo kwesịrị ekwesị, wee mee ka ọ bụrụ nke gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka \"ụda\" pụtara n'ozi?", options: ["Ogologo ya", "Onye ọ bụ maka ya", "Otu ọ si ada, dị ka nke enyi ma ọ bụ nke siri ike", "Ụbọchị e zipụrụ ya"], answer: 2, why: "Ụda bụ otu ozi si adaba n'ntị onye na-agụ ya." },
            { objective: "O4", q: "Ncheta AI dere na-ekwu na ihicha ahụ bụ na Sọnde, ma ọ bụ na Satọde. Gịnị ka ị ga-eme?", options: ["Zipu ya; AI kacha mara", "Gwa onye ọ bụla ka ọ bịa ụbọchị abụọ ahụ", "Hichapụ ozi ahụ niile", "Gbanwee ya ka ọ bụrụ Satọde tupu i zipu"], answer: 3, why: "Ị na-elele eziokwu ọ bụla n'onwe gị ma dozie ya tupu i zipu." }
          ]
        },
        {
          title: "Iji Canva hazie obere akwụkwọ mgbasa ozi",
          objectives: ["O5"],
          minutes: 6,
          goal: "Mee akwụkwọ mgbasa ozi peeji otu na Canva n'efu.",
          text: [
            "Canva bụ weebụsaịtị na app nhazi nwere ụdị n'efu. O nwere template ndị a kwadoro akwado, ya mere ọ dịghị mkpa ka ị bụrụ onye na-ese ihe. Ị nwere ike iji ya na canva.com na kọmputa ọba akwụkwọ ma ọ bụ n'app ya n'ekwentị gị.",
            "Chọọ template na Canva, dị ka \"flyer\" ma ọ bụ \"event flyer\" (n'asụsụ Bekee). Pịa nke masịrị gị, wee pịa okwu ya ka i jiri nke gị dochie ha. Mee ka ọ dị mfe: aha isi buru ibu, ahịrị atọ dị mkpụmkpụ (gịnị, mgbe, ebe), na otu foto.",
            "Mgbe i mechara, budata ya ka i bipụta ya, ma ọ bụ kesaa ya site n'ozi ederede ma ọ bụ email. Canva na-arịọ gị ka i mepee akaụntụ n'efu; na kọmputa a na-ekerịta, pụọ (sign out) mgbe i mechara."
          ],
          steps: ["Gaa na canva.com ma ọ bụ meghee app Canva ma debanye aha maka akaụntụ n'efu.", "Chọọ template akwụkwọ mgbasa ozi ma họrọ otu.", "Pịa okwu ọ bụla ma dee okwu nke gị.", "Debe ya n'aha isi, ahịrị atọ dị mkpụmkpụ na otu foto.", "Budata ma ọ bụ kesaa ya, wee pụọ na kọmputa a na-ekerịta."],
          words: [["Template", "nhazi a kwadoro akwado nke ị na-ejupụta n'okwu na foto nke gị."], ["Ibudata (download)", "ichekwa otu nnomi faịlụ n'ime ngwaọrụ gị."]],
          slides: [
            { title: "Canva: ngwa nhazi n'efu", bullets: ["Weebụsaịtị canva.com ma ọ bụ app Canva", "Template ndị a kwadoro akwado", "Ọ dịghị mkpa ịma ese ihe"] },
            { title: "Mee akwụkwọ mgbasa ozi gị", bullets: ["Chọọ template akwụkwọ mgbasa ozi", "Pịa okwu ahụ ma dee nke gị", "Aha isi + gịnị, mgbe, ebe + otu foto"] },
            { title: "Mechaa ma kesaa", bullets: ["Budata ya ka i bipụta", "Kesaa ya site n'ozi ederede ma ọ bụ email", "Pụọ (sign out) na kọmputa a na-ekerịta"] }
          ],
          tryIt: "Meghee Canva, họrọ template akwụkwọ mgbasa ozi, ma jiri ncheta i dere na Nkuzi 4 dochie okwu ya. Budata ya ma ọ bụ chekwaa ya n'akaụntụ gị.",
          youCanNow: "iji template Canva n'efu mee obere akwụkwọ mgbasa ozi doro anya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ template na Canva?", options: ["Nhazi a kwadoro akwado nke ị na-ejupụta n'okwu gị", "Ihe mgbakwunye a na-akwụ ụgwọ", "Ụdị igwe mbipụta", "Ihe nzacha foto"], answer: 0, why: "Template bụ nhazi a kwadoro akwado, ya mere ị na-agbanwe naanị okwu na foto." },
            { objective: "O5", q: "Akwụkwọ mgbasa ozi gị nwere ahịrị asatọ nke obere mkpụrụedemede. Olee otu ị ga-esi mee ka ọ dị mfe ịgụ?", options: ["Mee ka mkpụrụedemede ahụ dị obere karị", "Belata ya ka ọ bụrụ aha isi na ahịrị atọ dị mkpụmkpụ", "Tinyekwuo foto", "Jiri agba ise"], answer: 1, why: "Aha isi buru ibu na ahịrị atọ dị mkpụmkpụ (gịnị, mgbe, ebe) kacha dị mfe ịgụ." }
          ]
        },
        {
          title: "Iji ngwa ndị a ọnụ",
          objectives: ["O5", "O3"],
          minutes: 5,
          goal: "Jiri ngwa enyemaka mkparịta ụka, ngwa nhazi na ngwa nsụgharị ọnụ mee otu akwụkwọ mgbasa ozi zuru ezu n'asụsụ abụọ.",
          text: [
            "Ezi ọrụ na-ejikarị ihe karịrị otu ngwa. Maka akwụkwọ mgbasa ozi obodo, ị nwere ike iji ngwa enyemaka mkparịta ụka dee okwu ya, jiri Canva hazie ya, ma jiri ngwa nsụgharị mee ụdị nke abụọ.",
            "Rịọ AI maka obere aha isi na ahịrị atọ nke nkọwa. Tinye ha na template Canva. Wee sụgharịa otu okwu ahụ n'asụsụ nke abụọ ndị agbata obi gị na-asụ, ma mee nnomi akwụkwọ ahụ nwere ha.",
            "Ọ bụrụ na ị nwere ike, rịọ onye na-asụ asụsụ ahụ ka ọ gụọ nsụgharị ahụ. Ngwa n'efu bụ mmalite siri ike; ezi onye na-agụ ihe na-eme ka o ziri ezi."
          ],
          steps: ["Rịọ ngwa enyemaka mkparịta ụka maka aha isi na ahịrị atọ nke nkọwa.", "Tinye okwu ahụ na template akwụkwọ mgbasa ozi Canva.", "Sụgharịa okwu ahụ n'asụsụ nke abụọ.", "Mee nnomi akwụkwọ ahụ nwere nsụgharị ahụ.", "Ọ bụrụ na ị nwere ike, rịọ onye maara asụsụ ahụ nke ọma ka ọ gụọ ya."],
          words: [["Ọrụ (project)", "otu ọrụ nwere njedebe doro anya, dị ka akwụkwọ mgbasa ozi."]],
          slides: [
            { title: "Otu ọrụ, ngwa atọ", bullets: ["Ngwa enyemaka mkparịta ụka: okwu ya", "Canva: nhazi ya", "App nsụgharị: asụsụ nke abụọ"] },
            { title: "Nzọụkwụ ndị ahụ", bullets: ["Jiri AI dee okwu ya", "Tinye ha na template Canva", "Sụgharịa ma mee nnomi nke abụọ"] },
            { title: "Mee ka o ziri ezi", bullets: ["Lelee ụbọchị na ebe ọ bụla", "Rịọ onye maara asụsụ ahụ nke ọma ka ọ gụọ nsụgharị ahụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee akwụkwọ mgbasa ozi peeji otu maka mmemme obodo. Jiri ngwa enyemaka AI dee aha isi na ahịrị atọ, hazie ya na Canva, ma mee nnomi nke abụọ a sụgharịrị n'asụsụ ọzọ ndị agbata obi gị na-asụ.",
          youCanNow: "iji ọtụtụ ngwa AI n'efu ọnụ mechaa ezi ọrụ maka obodo gị.",
          quickCheck: [
            { objective: "O5", q: "N'ọrụ a jikọtara ọnụ, gịnị ka ị na-etinye na template Canva?", options: ["Nọmba ekwentị gị", "Mkparịta ụka AI niile", "Aha isi na ahịrị atọ AI dere", "Njikọ weebụsaịtị AI"], answer: 2, why: "Ngwa enyemaka mkparịta ụka na-ede okwu ahụ, ị na-etinyekwa ha n'akwụkwọ mgbasa ozi Canva." },
            { objective: "O3", q: "I sụgharịrị akwụkwọ mgbasa ozi gị n'asụsụ Spanish ma ị naghị asụ Spanish. Gịnị ka ị ga-eme tupu i kesaa ya?", options: ["Kesaa ya ozugbo", "Sụgharịa ya ọzọ", "Wepụ nnomi Spanish ahụ", "Rịọ onye maara Spanish nke ọma ka ọ gụọ ya"], answer: 3, why: "Ezi onye na-agụ ihe na-ahụ mperi ngwa n'efu ahụ hapụrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iji AI mee ihe",
        questions: [
          { objective: "O4", q: "Kedu ihe anọ ị ga-agwa ngwa enyemaka AI mgbe ị na-arịọ obere ozi?", options: ["Okwuntughe gị, adreesị, afọ na ụlọ akụ", "Onye ọ bụ maka ya, ihe ọ ga-ekwu, ụda ya na ogologo ya", "Naanị ụbọchị", "Ọ dịghị ihe; ọ ga-echepụta ya"], answer: 1, why: "Nkọwa anọ ndị a na-enweta ozi kwesịrị ekwesị." },
          { objective: "O5", q: "Gịnị bụ template?", options: ["Nje kọmputa (virus)", "Okwuntughe", "Nhazi a kwadoro akwado nke ị na-ejupụta n'okwu gị", "Ntọala ekwentị"], answer: 2, why: "Template na-ekwe ka ndị na-amalite mee nhazi mara mma." },
          { objective: "O5", q: "Gịnị ka obere akwụkwọ mgbasa ozi kwesịrị inwe?", options: ["Aha isi buru ibu na gịnị, mgbe na ebe", "Paragraf iri", "Nọmba Social Security gị", "Naanị foto, n'enweghị okwu"], answer: 0, why: "Obere akwụkwọ mgbasa ozi dị mfe ịgụ: aha isi, nkọwa na otu foto." },
          { objective: "O5", q: "I jiri Canva na kọmputa ọba akwụkwọ. Gịnị ka ị ga-eme na njedebe?", options: ["Hapụ akaụntụ gị ka ọ ghere oghe", "Chekwaa okwuntughe gị na browser", "Dee okwuntughe gị n'ihuenyo", "Pụọ (sign out)"], answer: 3, why: "Ịpụ na-echebe akaụntụ gị na kọmputa a na-ekerịta." },
          { objective: "O3", q: "I jiri ngwa n'efu sụgharịa akwụkwọ mgbasa ozi gị. Olee otu ị ga-esi hụ na o ziri ezi?", options: ["Rịọ onye maara asụsụ ahụ nke ọma ka ọ gụọ ya", "Sụgharịa ya ugboro iri ọzọ", "Mee ka mkpụrụedemede buo ibu", "Tinyekwuo foto"], answer: 0, why: "Ezi onye na-agụ ihe na-ahụ mperi igwe na-eme." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI Dị Mfe Maka Ndị Na-amalite",
    questions: [
      { objective: "O1", q: "Mgbe ị na-ahọrọ ngwa AI, ị kwesịrị ịmalite na:", options: ["Ngwa kacha dị oke ọnụ", "Ọrụ ị ga-arụ", "App kacha ọhụrụ", "Ihe ọ bụla onye ị na-amaghị tụrụ aro"], answer: 1, why: "Malite n'ọrụ ahụ, wee họrọ ngwa kwesịrị ya." },
      { objective: "O1", q: "Kedu ngwa kacha mma maka ide ihe na ịkọwa ihe?", options: ["App igwefoto", "App ọkụ tọọchị", "Ngwa enyemaka mkparịta ụka dị ka Copilot, ChatGPT ma ọ bụ Gemini", "Igwe egwu"], answer: 2, why: "Ngwa enyemaka mkparịta ụka maara ide ihe, ịkọwa ihe na ime atụmatụ nke ọma." },
      { objective: "O1", q: "A na-ejikarị Canva maka:", options: ["Ịhazi akwụkwọ mgbasa ozi na kaadị", "Ọrụ ụlọ akụ", "Ịkpọ oku", "Ihu igwe"], answer: 0, why: "Canva bụ ngwa nhazi nwere ụdị n'efu." },
      { objective: "O1", q: "Ebee ka ị ga-ebu ụzọ nwaa mgbe ị na-ahọrọ ngwa?", options: ["Atụmatụ kacha dị oke ọnụ", "Ihe ọmụmụ a na-akwụ ụgwọ", "Mgbasa ozi na-apụta na mberede", "Ụdị n'efu"], answer: 3, why: "Ụdị n'efu zuru maka ọtụtụ ọrụ ndị na-amalite." },
      { objective: "O2", q: "Olee otu ị ga-esi jiri olu jụọ ọtụtụ app AI ajụjụ?", options: ["Maa ekwentị jijiji", "Pịa bọtịnụ maikrofon", "Gbanyụọ ekwentị", "Meghee igwefoto"], answer: 1, why: "Bọtịnụ maikrofon na-eme ka app ahụ gee ntị." },
      { objective: "O2", q: "Mgbe ị na-eji ide-site-n'olu, ọ na-enyere aka:", options: ["Ikwu okwu nke ọma ma ntakịrị nwayọọ", "Ịgba izu", "Ikwu okwu ọsọ ọsọ", "Ikpuchi maikrofon"], answer: 0, why: "A na-anụ okwu doro anya, nke dị nwayọọ, nke ọma karịa." },
      { objective: "O2", q: "Ide-site-n'olu dere \"Friday\" dị ka \"fry day\". Ị kwesịrị:", options: ["Iziga ya otú ahụ", "Ihichapụ app ahụ", "Idozi ya tupu i zipu", "Ịmalitegharị n'ekwentị ọhụrụ"], answer: 2, why: "Gụọ ma dozie ihe ide-site-n'olu nụrụ mgbe niile." },
      { objective: "O3", q: "Iji sụgharịa ọkwa ụlọ akwụkwọ e biri ebi, ị nwere ike:", options: ["Iji ngwa nhazi", "Iji nhọrọ igwefoto nke app nsụgharị", "Iji igwe mgbakọ", "Ichere ka mmadụ kpọọ oku"], answer: 1, why: "Nhọrọ igwefoto na-agụ ma sụgharịa okwu e biri ebi." },
      { objective: "O3", q: "N'app nsụgharị, ị na-ebu ụzọ họrọ:", options: ["Okwuntughe", "Ụdị mkpụrụedemede", "Agba", "Asụsụ dị n'akwụkwọ ahụ na asụsụ ị chọrọ"], answer: 3, why: "App ahụ kwesịrị ịmata asụsụ abụọ ahụ." },
      { objective: "O3", q: "Maka akwụkwọ iwu dị n'asụsụ ị na-agụghị nke ọma, enyemaka kacha enweghị nsogbu bụ:", options: ["Onye ntụgharị okwu a zụrụ azụ", "Ichepụta ya", "Meme", "Ịhapụ ya"], answer: 0, why: "Akwụkwọ dị mkpa chọrọ onye a zụrụ azụ, ọ bụghị naanị igwe." },
      { objective: "O4", q: "Kedu nke bụ ezigbo arịrịọ maka obere ozi?", options: ["\"ozi\"", "\"Dee ozi ahịrịokwu abụọ nwere nkwanye ugwu nye onye nwe ụlọ m, na-ajụ mgbe a ga-arụzi igwe na-ekpo ọkụ.\"", "\"dee\"", "\"ihe maka onye nwe ụlọ\""], answer: 1, why: "Ọ na-ekwu onye, ihe, ụda na ogologo." },
      { objective: "O4", q: "Mgbe AI dechara ozi gị, ị kwesịrị:", options: ["Iziga ya n'agụghị ya", "Itinye nkọwa ụlọ akụ gị", "Idezi ya ka ọ dị ka okwu gị ma lelee eziokwu ya", "Itinye ya n'ihu ọha"], answer: 2, why: "Ị na-eme ka ọ bụrụ nke gị ma lelee aha, ụbọchị na ebe." },
      { objective: "O4", q: "Ụda pụtara:", options: ["Otu ozi si ada, dị ka nke enyi ma ọ bụ nke siri ike", "Ogologo ozi ahụ", "Nha mkpụrụedemede", "Olu ekwentị"], answer: 0, why: "Ụda bụ otu ozi ahụ si adị onye na-agụ ya." },
      { objective: "O5", q: "Gịnị ka Canva na-arịọ ka i mee tupu i nwee ike ịhazi ihe?", options: ["Ịkwụ ụgwọ", "Ịkpọ oku", "Akaụntụ n'efu", "Fọm e biri ebi"], answer: 2, why: "Canva na-eji akaụntụ n'efu echekwa nhazi gị." },
      { objective: "O5", q: "Kedu akwụkwọ mgbasa ozi kacha dị mfe ịgụ?", options: ["Peeji jupụtara n'obere mkpụrụedemede", "Aha isi, ahịrị atọ dị mkpụmkpụ na otu foto", "Foto iri na-enweghị okwu", "Naanị nọmba ekwentị"], answer: 1, why: "Ihe dị mkpụmkpụ ma doo anya kacha mma maka akwụkwọ mgbasa ozi." },
      { objective: "O5", q: "Iji nweta nnomi akwụkwọ mgbasa ozi gị ka i bipụta ya, ị na-:", options: ["Esere ihuenyo foto", "Emechi browser", "Ezigara Canva email", "Ebudata ya"], answer: 3, why: "Ibudata na-echekwa nnomi ị nwere ike ibipụta." },
      { objective: "O1", q: "N'ọrụ a jikọtara ọnụ, kedu ngwa na-ede okwu ya?", options: ["Ngwa enyemaka mkparịta ụka", "App nsụgharị", "Igwe mbipụta", "Igwefoto"], answer: 0, why: "Ngwa enyemaka mkparịta ụka na-ede aha isi na nkọwa." },
      { objective: "O3", q: "Gịnị mere ị ga-eji mee nnomi nke abụọ nke akwụkwọ mgbasa ozi n'asụsụ ọzọ?", options: ["Ọ na-adị mma karị", "Ka ndị agbata obi ọzọ nwee ike ịgụ ya", "Canva chọrọ ya", "Iji akwụkwọ karịa"], answer: 1, why: "Asụsụ nke abụọ na-eru ọtụtụ ndị ọzọ n'obodo gị." },
      { objective: "O4", q: "Tupu i kesaa akwụkwọ mgbasa ozi i mechara, ị kwesịrị ilele:", options: ["Ihu igwe", "Batrị ekwentị gị", "Na ụbọchị na ebe ọ bụla ziri ezi", "Agba igwe mbipụta"], answer: 2, why: "Nkọwa ezighi ezi n'akwụkwọ mgbasa ozi na-eziga ndị mmadụ n'ebe na-ezighi ezi." },
      { objective: "O3", q: "N'ọrụ ikpeazụ, ngwa ikpeazụ ị na-eji bụ:", options: ["Igwe mgbakọ", "App egwu", "Maapụ", "Ngwa nsụgharị maka nnomi n'asụsụ nke abụọ"], answer: 3, why: "Nzọụkwụ ikpeazụ na-eme akwụkwọ mgbasa ozi ahụ n'asụsụ nke abụọ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 4, 6, 7, 9, 10, 13, 14, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Okwu sitere na ngwa enyemaka", objective: "O4", notYet: "Enweghị aha isi ma ọ bụ nkọwa, ma ọ bụ na e leleghị okwu ahụ.", meets: "Obere aha isi na ahịrị atọ sitere n'AI, e dezigharịrị ka ọ daa nke ọma, ma e lelere ụbọchị na ebe.", exceeds: "Rịọrọ AI maka mgbanwe, dị ka ụda nke enyi karị ma ọ bụ aha isi dị mkpụmkpụ karị." },
      { name: "Nhazi akwụkwọ mgbasa ozi", objective: "O5", notYet: "Enweghị akwụkwọ mgbasa ozi, ma ọ bụ na ọ jupụtara oke ma sie ike ịgụ.", meets: "Akwụkwọ mgbasa ozi Canva peeji otu nwere aha isi buru ibu, gịnị, mgbe na ebe, na otu foto.", exceeds: "Budatara ma ọ bụ kesaa ya, a na-agụkwa ya nke ọma site n'ofe ọnụ ụlọ." },
      { name: "Asụsụ nke abụọ", objective: "O3", notYet: "Enweghị nnomi a sụgharịrị.", meets: "Nnomi nke abụọ nwere okwu a sụgharịrị n'asụsụ ndị agbata obi na-asụ.", exceeds: "Onye maara asụsụ ahụ nke ọma gụrụ nsụgharị ahụ, e dozikwara ya ma ọ bụrụ na ọ dị mkpa." },
      { name: "Ngwa kwesịrị maka nzọụkwụ ọ bụla", objective: "O1", notYet: "Enweghị ike ikwu ngwa rụrụ ọrụ ọ bụla.", meets: "Na-akpọ aha ngwa enyemaka mkparịta ụka, Canva na ngwa nsụgharị maka nzọụkwụ ọ bụla.", exceeds: "Na-akọwa ihe mere ngwa ọ bụla ji kwesị ọrụ ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mere ezi akwụkwọ mgbasa ozi ma ọ bụ ozi maka otu obodo, ụlọ akwụkwọ ma ọ bụ azụmahịa n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị mmekọ obodo na-akọ na a na-ama ọkwa mmemme ndị ọzọ n'asụsụ abụọ ma ọ bụ karịa",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Smartphone nwere ịntanetị, ma ọ bụ kọmputa ọba akwụkwọ ma ọ bụ nke ebe obodo",
      "Ngwa enyemaka AI n'efu: Microsoft Copilot, ChatGPT ma ọ bụ Google Gemini",
      "App nsụgharị n'efu dị ka Google Translate, na akaụntụ Canva n'efu",
      "Labelụ ma ọ bụ akara e biri ebi maka omume nsụgharị igwefoto",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Kekọọ ndị na-amụ ihe na-asụ asụsụ dị iche iche ọnụ ka ha nwee ike ịgụrịta nsụgharị ibe ha.",
      "Buru ụzọ nyere aka n'ịdebanye aha na Canva; ọ na-ewe ndị na-amalite oge kacha ukwuu.",
      "Chetara ndị na-amụ ihe na akwụkwọ ọgwụ na nke iwu chọrọ onye ntụgharị okwu, ọ bụghị naanị app.",
      "Hụ na ndị na-amụ ihe pụrụ (sign out) na Canva na ngwa AI na kọmputa a na-ekerịta.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
