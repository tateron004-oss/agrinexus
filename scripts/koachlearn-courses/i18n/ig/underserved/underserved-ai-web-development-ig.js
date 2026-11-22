"use strict";

// Koach Learn course (Igbo translation of underserved/underserved-ai-web-development.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "underserved-ai-web-development-ig",
  lang: "ig",
  translationOf: "underserved-ai-web-development",
  category: "Undeserved Community",
  name: "Iji AI Mepụta Weebụsaịtị",
  skills: "Ịhazi weebụsaịtị nwere otu peeji, Iji Google Sites wuo saịtị n'efu, Iji AI dee okwu weebụ, Ịgụ na idezi HTML dị mfe, Itinye koodu AI dere n'enweghị nsogbu, Ibipụta na ịlele saịtị",
  outcome: "ịhazi, wuo ma bipụta weebụsaịtị n'efu nwere otu peeji maka azụmahịa ezinụlọ, klọb ma ọ bụ otu obodo site na Google Sites, na-eji ngwa enyemaka AI n'efu dee okwu ya na obere koodu HTML nke gị onwe gị na-agụ, nwalee ma dozie.",
  about: [
    "Weebụsaịtị na-enyere ndị mmadụ aka ịchọta otu ụka, otu ndị bi n'otu okporo ụzọ, mmemme nkuzi ma ọ bụ obere azụmahịa ezinụlọ. Ị chọghị ego ma ọ bụ asambodo mahadum na sayensị kọmputa iji mee otu.",
    "N'ihe ọmụmụ a, ị ga-ahazi saịtị nwere otu peeji, wuo ya site na Google Sites (n'efu ma ọ bụrụ na i nwere akaụntụ Google), jiri ngwa enyemaka AI n'efu nyere aka dee okwu ya, ma mụta HTML, asụsụ e ji ede peeji weebụ, nke ga-ezu ka ị gụọ, nwalee ma dozie obere koodu AI dere maka gị.",
    "Ị nwere ike iji kọmputa dị n'ụlọ ma ọ bụ n'ọba akwụkwọ rụọ ọrụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" nke na-ewu ezi saịtị gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Bipụta Google Site nwere otu peeji maka ezi otu obodo ma ọ bụ obere azụmahịa, ma ọ bụ nke omume. O kwesịrị inwe aha doro anya, obere akụkụ \"Banyere anyị\" (About us) nke AI nyere aka dee ma ị dezigharịrị n'okwu nke gị, obere igbe HTML nwere oge mmeghe na ụzọ e si akpọtụrụ unu nke ị nwalere ma dozie, o nweghị adreesị ụlọ nzuzo ma ọ bụ nọmba ekwentị onwe onye, ma ọ ga-adịkwa mma na ekwentị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na ndị ntorobịa nọ n'obodo ndị na-enweghị enyemaka zuru ezu, ndị chọrọ weebụsaịtị maka otu ụka, otu ndị bi n'otu okporo ụzọ, mmemme nkuzi, klọb ma ọ bụ obere azụmahịa ezinụlọ, na ndị chọrọ ịmata nzọụkwụ mbụ n'ọrụ weebụ.",
    startingPoint: "Ha na-eji ekwentị ma na-eme nchọgharị n'ịntanetị. Ha ewubeghị weebụsaịtị mgbe ọ bụla ma ọ bụ gụọ HTML; ụfọdụ nwere akaụntụ Google mana ha ejibeghị Google Sites. Ụfọdụ ejirila ngwa enyemaka AI ntakịrị.",
    gap: "Otu na obere azụmahịa a na-apụghị ịchọta n'ịntanetị na-atụfu ndị otu na ndị ahịa, ịkwụ ụgwọ maka weebụsaịtị karịkwa ha ike. Ndị na-amụ ihe kwesịrị ịhazi ma bipụta saịtị n'efu, jiri AI maka okwu na koodu ma na-elele eziokwu ọ bụla, ma chebe ozi nzuzo.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6 ruo 7)",
      "Ngwaọrụ: a chọrọ kọmputa iji wuo na Google Sites; ekwentị iji lelee saịtị dị ndụ",
      "Ụgwọ: naanị akaụntụ Google n'efu, Google Sites na ihe ndezi HTML n'ịntanetị n'efu",
      "Nchekwa: nwalee koodu AI niile, naanị HTML dị mfe, na-enweghị script ị na-arịọghị",
      "Nzuzo: enweghị adreesị ụlọ, nọmba ekwentị onwe onye ma ọ bụ foto ụmụaka n'enweghị ikike e dere ede"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'ngwa enyemaka AI nwere ike ibu ụzọ were \"Mmalite AI na Ike n'Ihe Dijitalụ\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ezi otu ma ọ bụ azụmahịa, ma ọ bụ nke omume", action: "ịhazi weebụsaịtị nwere otu peeji: ndị ọ bụ maka ha, otu ihe ndị ọbịa ga-eme, akụkụ ya na foto ya", standard: "nwere akụkụ anọ ma ọ bụ ise na naanị foto i nwere ikike iji" },
    { id: "O2", condition: "Site n'iji akaụntụ Google n'efu", action: "imepụta Google Site nwere aha, igbe ederede maka akụkụ ọ bụla ị haziri na theme dị mfe ịgụ", standard: "n'enweghị onye nyere gị aka" },
    { id: "O3", condition: "Mgbe e nyere gị ezi eziokwu gbasara otu gị", action: "ide akụkụ \"Banyere anyị\" (About Us) site n'iji ngwa enyemaka AI ma dezigharịa ya n'okwu nke gị", standard: "na-ewepụ eziokwu ọ bụla na-ezighi ezi ma ọ bụ nke e chepụtara echepụta" },
    { id: "O4", condition: "Mgbe e nyere gị obere koodu HTML n'ihe ndezi dị n'ịntanetị", action: "ịmata tag ya niile ma gbanwee okwu dị n'etiti ha", standard: "nke mere na peeji ahụ ka na-arụ ọrụ nke ọma" },
    { id: "O5", condition: "Site n'iji ngwa enyemaka AI n'efu", action: "ịrịọ maka igbe HTML dị mfe, nwalee ya, dozie otu nsogbu ma tinye ya na Google Site gị", standard: "na eziokwu ọ bụla ziri ezi na-enweghị script ị na-arịọghị" },
    { id: "O6", condition: "Mgbe saịtị gị dị njikere", action: "ibipụta ya, lelee ya na ekwentị ma wepụ ozi nzuzo", standard: "na njikọ na-arụ ọrụ, ederede dị mfe ịgụ, na-enweghị adreesị nzuzo, nọmba onwe onye ma ọ bụ foto a na-anabataghị" }
  ],
  chapters: [
    {
      name: "Isi 1: Hazie ma wuo saịtị gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Otu weebụsaịtị si arụ ọrụ, na ịhazi peeji gị",
          minutes: 4,
          goal: "Dee atụmatụ dị mfe maka weebụsaịtị nwere otu peeji.",
          text: [
            "Weebụsaịtị bụ otu peeji ma ọ bụ karịa e chekwara na kọmputa a na-akpọ server. Mgbe ị dere adreesị, browser gị na-arịọ server ahụ maka peeji ahụ ma gosi gị ya.",
            "Tupu i wuo, hazie. Zaa ajụjụ anọ: Onye ka saịtị a bụ maka ya? Gịnị bụ otu ihe ndị ọbịa kwesịrị ime (ịkpọ oku, ịbịa, ịdebanye aha, inye onyinye)? Akụkụ ole ka ị chọrọ? Foto ndị ole ka i nwere ike iji n'ikike?",
            "Ọtụtụ obere saịtị obodo chọrọ naanị akụkụ ole na ole: aha, \"Banyere anyị\", ihe unu na-enye, oge mmeghe na otu e si akpọtụrụ unu."
          ],
          steps: ["Dee ndị saịtị ahụ bụ maka ha.", "Dee otu ihe ị chọrọ ka ndị ọbịa mee.", "Depụta akụkụ anọ ma ọ bụ ise.", "Depụta foto ndị bụ nke gị ma ọ bụ ndị i nwere ikike iji."],
          words: [["Weebụsaịtị", "otu peeji ma ọ bụ karịa ndị mmadụ nwere ike ileta n'ịntanetị."], ["Server", "kọmputa na-echekwa weebụsaịtị ma na-ezigara ndị ọbịa peeji."], ["Browser", "mmemme ị na-eji eleta weebụsaịtị, dị ka Chrome, Edge ma ọ bụ Safari."]],
          slides: [
            { title: "Otu weebụsaịtị si arụ ọrụ", bullets: ["E chekwara peeji na server", "Browser gị na-arịọ maka peeji ahụ", "Server ahụ na-ezighachi ya"] },
            { title: "Jiri ajụjụ anọ hazie", bullets: ["Onye ka ọ bụ maka ya?", "Gịnị ka ndị ọbịa kwesịrị ime?", "Akụkụ ole ka ị chọrọ?", "Foto ndị ole ka i nwere ike iji?"] },
            { title: "Saịtị dị mfe nwere otu peeji", bullets: ["Aha", "Banyere anyị na ihe unu na-enye", "Oge mmeghe na otu e si akpọtụrụ unu"] }
          ],
          tryIt: "Họrọ ezi otu ma ọ bụ nke omume (dịka ọmụmaatụ klọb nkuzi ndị ntorobịa ma ọ bụ ụgbọ ala nri ezinụlọ). Dee atụmatụ gị: ndị ọ bụ maka ha, otu ihe ahụ, akụkụ ise na foto abụọ i nwere ike iji.",
          youCanNow: "ịkọwa otu weebụsaịtị si erute gị ma hazie saịtị nwere otu peeji.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ server?", options: ["Kọmputa na-echekwa weebụsaịtị ma na-ezipu peeji", "Ihuenyo ị na-ele anya", "Adreesị weebụ", "Ụdị ekwentị"], answer: 0, why: "Server na-echekwa peeji weebụ ma na-ezipu ha mgbe browser rịọrọ." },
            { objective: "O1", q: "Saịtị ụgbọ ala nri gị kwesịrị ime ka ndị mmadụ bịa rie nri. Gịnị bụ otu ihe ahụ?", options: ["Ịgụ akụkọ ihe mere eme banyere tacos", "Ịchọta ebe na oge ụgbọ ala ahụ ga-anọ", "Ide ogologo okwu", "Ibudata faịlụ"], answer: 1, why: "Otu ihe ahụ bụ ihe ị kacha chọọ ka ndị ọbịa mee, dị ka ịbịa n'ụgbọ ala ahụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji Google Sites wuo saịtị n'efu",
          minutes: 5,
          goal: "Mepụta Google Site nwere aha na akụkụ ndị ị haziri.",
          text: [
            "Google Sites bụ ihe e ji ewu weebụsaịtị n'efu nke so akaụntụ Google. Ị na-ewu site n'ịpị na ide ihe, ọ bụghị site n'ide koodu.",
            "Mepee sites.google.com na kọmputa ma malite saịtị ọhụrụ, ma ọ bụ nke efu ma ọ bụ site na template. Nye saịtị ahụ aha ma dee aha peeji. N'akụkụ aka nri ị ga-ahụ Insert (iji tinye igbe ederede, foto na ihe ndị ọzọ), Pages na Themes.",
            "Tinye igbe ederede maka akụkụ ọ bụla sitere n'atụmatụ gị. Họrọ theme nwere agba dị mfe ịgụ. Google Sites na-echekwa ọrụ gị ka ị na-arụ."
          ],
          steps: ["Gaa na sites.google.com ma banye (sign in) site n'akaụntụ Google gị.", "Malite saịtị ọhụrụ, nke efu ma ọ bụ site na template.", "Dee aha saịtị na aha peeji.", "Jiri Insert dị n'aka nri tinye igbe ederede maka akụkụ ọ bụla.", "Họrọ theme dị mfe ịgụ."],
          words: [["Template", "ụdị nhazi e meburu emebu nke ị na-ejupụta n'okwu nke gị."], ["Theme", "agba na ụdị mkpụrụ edemede e ji n'ebe niile na saịtị gị."]],
          sources: [{ name: "Google Sites Help: Create, name or copy a site", url: "https://support.google.com/sites/answer/6372878" }],
          slides: [
            { title: "Google Sites", bullets: ["N'efu ma ọ bụrụ na i nwere akaụntụ Google", "Wuo site n'ịpị na ide ihe", "Ọ na-echekwa ka ị na-arụ"] },
            { title: "Malite saịtị gị", bullets: ["Mepee sites.google.com", "Malite na nke efu ma ọ bụ template", "Dee aha saịtị na aha peeji"] },
            { title: "Tinye akụkụ gị", bullets: ["Insert n'aka nri: igbe ederede, foto", "Otu igbe ederede maka akụkụ ọ bụla", "Họrọ theme dị mfe ịgụ"] }
          ],
          tryIt: "Malite Google Site ọhụrụ maka otu gị. Tinye aha ya na igbe ederede efu maka akụkụ ọ bụla dị n'atụmatụ gị, ma họrọ theme.",
          youCanNow: "iwu ọkpụkpụ weebụsaịtị n'efu site na Google Sites.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka theme dị na Google Sites na-agbanwe?", options: ["Adreesị weebụ gị", "Ndị nwere ike ịhụ saịtị ahụ", "Agba na ụdị mkpụrụ edemede", "Eziokwu dị na saịtị ahụ"], answer: 2, why: "Theme na-ahazi agba na ụdị mkpụrụ edemede nke saịtị gị." },
            { objective: "O2", q: "Ị chọrọ itinye akụkụ \"Oge mmeghe\" na Google Site gị. Gịnị ka ị na-apị?", options: ["Publish", "Themes", "Pages", "Insert, wee pịa igbe ederede"], answer: 3, why: "Insert dị n'akụkụ aka nri na-etinye igbe ederede, foto na ihe ndị ọzọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji AI dee okwu weebụ gị",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI n'efu dee ihe mbụ nke akụkụ Banyere anyị, wee mee ka ọ bụrụ nke gị.",
          text: [
            "Ngwa enyemaka AI n'efu dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini nwere ike ide ihe mbụ (draft) nke okwu weebụ gị. Nye ya eziokwu na ụda ị chọrọ.",
            "Ọmụmaatụ prompt: \"Dee Banyere anyị nwere okwu 60, nke enyi na enyi, maka klọb nkuzi n'efu mgbe ụlọ akwụkwọ gwụrụ n'ebe obodo na-ezukọ. Anyị na-enyere ụmụaka nọ na klas 3 ruo 8 aka n'ịgụ akwụkwọ na mgbakọ. Jiri okwu dị mfe.\"",
            "Wee dezie ya. Dozie eziokwu ọ bụla AI kwuru n'ụzọ na-ezighi ezi ma ọ bụ chepụta, wepụ okwu na-adịghị ka okwu gị, ekwela ka ọ chepụta ọnụ ahịa, ihe nrite ma ọ bụ nkwa ị na-apụghị imezu. Saịtị gị na-ekwuru otu gị, ya mere ọ bụ gị ka okwu ọ bụla dị n'aka."
          ],
          steps: ["Nye AI ezi eziokwu gbasara otu gị na ụda ị chọrọ.", "Rịọ maka obere draft nwere oke okwu.", "Dozie eziokwu na-ezighi ezi ma ọ bụ nke e chepụtara.", "Degharịa akụkụ ka ha dị ka okwu gị, wee tinye ya na saịtị gị."],
          words: [["Draft", "ihe mbụ e dere nke ị ga-eme ka ọ ka mma."], ["Ụda", "otu ihe e dere si ada: nke enyi na enyi, nke siri ike, nke obi ụtọ."]],
          slides: [
            { title: "AI na-ede draft mbụ", bullets: ["Nye ya ezi eziokwu", "Kwuo ụda na oke okwu"] },
            { title: "Ọmụmaatụ prompt", bullets: ["\"Dee Banyere anyị nwere okwu 60, nke enyi na enyi,", "maka klọb nkuzi n'efu maka klas 3 ruo 8.", "Jiri okwu dị mfe.\""] },
            { title: "Gị na-edezi ya", bullets: ["Dozie eziokwu na-ezighi ezi ma ọ bụ nke e chepụtara", "Ọ dịghị ọnụ ahịa, ihe nrite ma ọ bụ nkwa e chepụtara", "Mee ka ọ dị ka okwu gị"] }
          ],
          tryIt: "Rịọ ngwa enyemaka AI maka Banyere anyị nwere okwu 60 maka otu gị. Dozie otu eziokwu ma ọ bụ otu ahịrịokwu, wee tinye nke ị dezigharịrị na Google Site gị.",
          youCanNow: "iji AI dee draft okwu weebụ ma dezie ya ka o bụrụ eziokwu ma dị ka okwu gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere i ji enye AI oke okwu maka Banyere anyị gị?", options: ["Ka draft ahụ dị mkpụmkpụ ma dabara na peeji gị", "Ka ọ ghara ịdị oke ọnụ", "Ka o jiri okwu siri ike karị", "Ka o tinyekwuo eziokwu"], answer: 0, why: "Oke okwu na-eme ka draft ahụ dị mkpụmkpụ nke ga-ezu maka obere weebụsaịtị." },
            { objective: "O3", q: "Draft AI kwuru na nkuzi gị \"ga-eme ka akara ule bulie n'ezie\". Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-ada mma", "Wepụ nkwa ị na-apụghị imezu", "Mee ka ọ buo ibu ma gbaa oji", "Tinye nkwa nke abụọ"], answer: 1, why: "Ekwela ka AI tinye nkwa ị na-apụghị imezu; ọ bụ gị ka okwu ọ bụla dị n'aka." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Hazie ma wuo saịtị gị",
        questions: [
          { objective: "O1", q: "Gịnị ka server na-eme?", options: ["Na-echekwa weebụsaịtị ma na-ezigara ndị ọbịa peeji", "Na-ebipụta peeji n'akwụkwọ", "Na-echaji ekwentị gị", "Na-ede okwu gị"], answer: 0, why: "Server bụ kọmputa na-ejide saịtị ahụ ma na-ezipu peeji." },
          { objective: "O1", q: "Kedu ajụjụ dabara n'atụmatụ saịtị gị?", options: ["Gịnị bụ okwuntughe m?", "Gịnị bụ otu ihe ndị ọbịa kwesịrị ime?", "Gịnị bụ nọmba ụlọ akụ m?", "Gịnị ka m riri taa?"], answer: 1, why: "Ịmata otu ihe ahụ na-enyere gị aka ịhazi peeji ahụ." },
          { objective: "O2", q: "Gịnị ka ị chọrọ iji Google Sites n'efu?", options: ["Ebe nchekwa weebụ a na-akwụ ụgwọ", "Asambodo mahadum na sayensị kọmputa", "Akaụntụ Google", "Kaadị kredit"], answer: 2, why: "Google Sites na-abịa n'efu ma ọ bụrụ na i nwere akaụntụ Google." },
          { objective: "O2", q: "Na Google Sites, ebee ka ị na-etinye igbe ederede na foto?", options: ["Ebe a na-atụfu ihe", "Ebe a na-ede adreesị", "Igwe ebipụta akwụkwọ", "Insert, n'akụkụ aka nri"], answer: 3, why: "Insert dị n'aka nri na-etinye ihe n'ime saịtị." },
          { objective: "O3", q: "Draft AI kwuru na klọb gị \"meriri ihe nrite mba\" mana o meghị. Gịnị ka ị ga-eme?", options: ["Wepụ ya tupu i bipụta", "Hapụ ya, ọ na-ada mma", "Mee ka ọ buo ibu", "Rịọ AI ka o tinyekwuo ihe nrite"], answer: 0, why: "Ọ bụ gị ka okwu ọ bụla dị n'aka; wepụ eziokwu e chepụtara." }
        ]
      }
    },
    {
      name: "Isi 2: Koodu, bipụta ma lelee",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịgụ HTML dị mfe",
          minutes: 5,
          goal: "Gụọ obere koodu HTML ma gbanwee okwu ya n'enweghị nsogbu.",
          text: [
            "HTML bụ asụsụ e ji ede peeji weebụ. Ọ na-eji tag dị n'ime akara < na >. Ọtụtụ tag na-abịa abụọ abụọ: tag mmeghe dị ka <h2> na tag mmechi dị ka </h2>, okwu dịkwa n'etiti ha.",
            "Tag a na-ahụkarị: <h2> maka isiokwu, <p> maka paragraf, <ul> na <li> maka ndepụta nwere ntụpọ, <strong> maka mkpụrụ edemede gbara oji, na <a href=\"...\"> maka njikọ.",
            "Ị nwere ike ime omume n'efu, na-enweghị akaụntụ, n'ihe ndezi dị n'ịntanetị dị ka W3Schools Tryit Editor: tinye HTML n'aka ekpe, pịa Run, ma hụ peeji ahụ n'aka nri. Na mbụ, gbanwee naanị okwu dị n'etiti tag, wee pịa Run ọzọ."
          ],
          steps: ["Mepee ihe ndezi HTML n'efu dị n'ịntanetị.", "Tinye obere koodu HTML.", "Pịa Run ka ịhụ ihe ọ mere.", "Gbanwee okwu dị n'etiti tag abụọ ma pịa Run ọzọ."],
          words: [["HTML", "asụsụ e ji ede peeji weebụ."], ["Tag", "akara dị n'ime < na >, dị ka <p>, nke na-agwa browser ihe otu ihe bụ."], ["Tag mmechi", "tag njedebe nwere akara /, dị ka </p>."]],
          slides: [
            { title: "HTML na-ewu peeji weebụ", bullets: ["Tag dị n'ime < na >", "Mmeghe <p> ... mmechi </p>"] },
            { title: "Tag ị kwesịrị ịmara", bullets: ["<h2> isiokwu, <p> paragraf", "<ul> na <li> ndepụta nwere ntụpọ", "<strong> gbara oji, <a> njikọ"] },
            { title: "Mee omume n'efu", bullets: ["Ihe ndezi n'ịntanetị dị ka W3Schools Tryit", "Tinye, pịa Run, lee anya", "Gbanwee okwu dị n'etiti tag"] }
          ],
          tryIt: "N'ihe ndezi HTML n'efu dị n'ịntanetị, dee <h2>Our Hours</h2><p>Mondays 3 to 6 pm</p>. Pịa Run, gbanwee oge ahụ, wee pịa Run ọzọ.",
          youCanNow: "ịgụ tag HTML dị mfe ma gbanwee okwu dị n'ime ha n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O4", q: "Kedu tag na-eme otu ihe n'ime ndepụta nwere ntụpọ?", options: ["<p>", "<h2>", "<li>", "<strong>"], answer: 2, why: "<li> na-egosi ihe ọ bụla n'ime ndepụta nwere ntụpọ, n'ime <ul>." },
            { objective: "O4", q: "Ị chọrọ ịgbanwe \"Mondays\" ka ọ bụrụ \"Tuesdays\" n'ime <p>Mondays 3 to 6 pm</p>. Gịnị ka ị ga-agbanwe?", options: ["Tag <p>", "Tag </p>", "Hichapụ tag ndị ahụ", "Naanị okwu dị n'etiti tag ndị ahụ"], answer: 3, why: "Na mbụ, gbanwee naanị okwu dị n'etiti tag ka HTML ahụ ka rụọ ọrụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ka AI dee koodu, wee nwalee ma dozie ya",
          minutes: 6,
          goal: "Rịọ AI maka obere igbe HTML, nwalee ya, dozie otu nsogbu ma tinye ya na saịtị gị.",
          text: [
            "Ngwa enyemaka AI nwere ike ide HTML. Kwuo ya kpọmkwem: \"Dee naanị HTML dị mfe, na-enweghị JavaScript, maka igbe nwere isiokwu Oge mmeghe na Kpọtụrụ anyị, ndepụta oge mmeghe anyị (Mon ruo Thu 3 ruo 6 pm), na njikọ gaa na email anyị. Jiri agba azụ na-acha nke ọma na mkpụrụ edemede buru ibu.\"",
            "Nwalee koodu AI mgbe niile tupu i jiri ya. Tinye ya n'ihe ndezi dị n'ịntanetị, pịa Run ma lelee: Eziokwu ọ bụla ọ ziri ezi? Njikọ ahụ ọ na-arụ ọrụ? Ederede ahụ ọ dị mfe ịgụ? Ọ bụrụ na ihe adịghị mma, gwa AI kpọmkwem ihe ọ ga-edozi, ma ọ bụ dozie okwu ahụ n'onwe gị.",
            "Etinyela koodu ị na-aghọtaghị nke sitere n'aka ndị ọbịa, ma ọ bụ koodu AI nwere script ị na-arịọghị. Iji tinye igbe gị na Google Sites: pịa Insert, wee pịa Embed, họrọ Embed code, tinye HTML gị, pịa Next wee pịa Insert."
          ],
          steps: ["Rịọ AI maka naanị HTML dị mfe, nwere ezi oge mmeghe gị na ụzọ e si akpọtụrụ gị.", "Nwalee ya n'ihe ndezi dị n'ịntanetị.", "Dozie otu ihe: eziokwu, njikọ ma ọ bụ nha ederede.", "Na Google Sites: Insert, Embed, Embed code, tinye, Next, Insert."],
          words: [["Koodu", "ntụziaka e dere maka kọmputa, dị ka HTML."], ["Embed", "itinye otu koodu ma ọ bụ ihe n'ime peeji."], ["Bug", "mperi dị na koodu nke na-eme ka ọ rụọ ọrụ n'ụzọ na-ezighi ezi."]],
          sources: [{ name: "Google Sites Help: Embed HTML or JavaScript in your site", url: "https://support.google.com/sites/answer/90569" }],
          slides: [
            { title: "Rịọ AI maka koodu n'ụzọ doro anya", bullets: ["Naanị HTML dị mfe, enweghị JavaScript", "Ezi oge mmeghe gị na ụzọ e si akpọtụrụ gị", "Ederede buru ibu, dị mfe ịgụ"] },
            { title: "Nwalee tupu i jiri ya", bullets: ["Tinye ya ma pịa Run n'ihe ndezi", "Eziokwu ziri ezi? Njikọ na-arụ ọrụ? Dị mfe ịgụ?", "Dozie ya ma ọ bụ rịọ AI ka o dozie otu ihe"] },
            { title: "Tinye ya na Google Sites", bullets: ["Insert, wee Embed", "Họrọ Embed code ma tinye ya", "Next, wee Insert"] }
          ],
          tryIt: "Rịọ AI maka igbe HTML dị mfe nwere Oge mmeghe na Kpọtụrụ anyị maka otu gị. Nwalee ya, dozie otu nsogbu, ma tinye (embed) ya na Google Site gị.",
          youCanNow: "inweta HTML na-arụ ọrụ site n'AI, nwalee ya, dozie ya ma tinye ya na saịtị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere i ji arịọ AI maka \"naanị HTML dị mfe, enweghị JavaScript\"?", options: ["HTML dị mfe nwere nchekwa karị ma dịrị onye mbido mfe ilele", "A naghị ekwe JavaScript n'ịntanetị", "HTML adịghị oke ọnụ", "AI apụghị ide JavaScript"], answer: 0, why: "HTML dị mfe dị mfe ịgụ na ịnwale, na-enweghị script ị na-arịọghị." },
            { objective: "O5", q: "Ị nwalere igbe AI mere, njikọ email ahụ anaghị arụ ọrụ. Gịnị ka ị ga-eme?", options: ["Tinye ya otu o sila dị", "Gwa AI kpọmkwem ihe ọ ga-edozi, ma ọ bụ dozie ya n'onwe gị, wee nwalee ọzọ", "Hichapụ saịtị gị niile", "Wepụ email n'atụmatụ ahụ"], answer: 1, why: "Dozie otu nsogbu ahụ ma nwalee ọzọ tupu i jiri koodu ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ibipụta na ịlele saịtị gị",
          minutes: 5,
          goal: "Bipụta saịtị gị, lelee ya na ekwentị ma chebe ozi nzuzo.",
          text: [
            "Mgbe peeji gị dị njikere, pịa Publish n'elu aka nri nke Google Sites. Họrọ adreesị weebụ ma bipụta. Ị nwere ike ime mgbanwe ma emechaa ma bipụta ọzọ.",
            "Lelee saịtị gị dị ndụ na ekwentị, n'ihi na ọtụtụ ndị ọbịa ga-eji otu. Ederede ahụ ọ buru ibu nke ọma? Njikọ ndị ahụ ọ na-arụ ọrụ? Foto ọ na-apụta? Rịọ enyi gị ka ọ nwaakwa ya.",
            "Chebe nzuzo. Etinyela adreesị ụlọ, nọmba ekwentị onwe onye ma ọ bụ foto ụmụaka n'enweghị ikike e dere ede site n'aka nne na nna ma ọ bụ onye nlekọta. Kama nke ahụ, jiri email otu ma ọ bụ ebe ọha na-ezukọ."
          ],
          steps: ["Pịa Publish, họrọ adreesị weebụ, ma bipụta.", "Mepee adreesị dị ndụ ahụ na ekwentị.", "Lelee nha ederede, njikọ na foto.", "Wepụ adreesị nzuzo ọ bụla, nọmba onwe onye ma ọ bụ foto na-enweghị ikike."],
          words: [["Bipụta (Publish)", "ime ka saịtị gị dị ndụ ka onye ọ bụla nwere adreesị ya hụ ya."], ["Adreesị weebụ", "ihe ị na-ede iji leta saịtị, a na-akpọkwa ya URL."]],
          slides: [
            { title: "Bipụta", bullets: ["Pịa Publish n'elu aka nri", "Họrọ adreesị weebụ", "Ị nwere ike imezi ma bipụta ọzọ"] },
            { title: "Lelee na ekwentị", bullets: ["Ederede ọ buru ibu nke ọma?", "Njikọ ọ na-arụ ọrụ?", "Foto ọ na-apụta? Rịọ enyi ka ọ nwalee"] },
            { title: "Chebe nzuzo", bullets: ["Enweghị adreesị ụlọ ma ọ bụ ekwentị onwe onye", "Enweghị foto ụmụaka n'enweghị ikike", "Jiri email otu ma ọ bụ ebe ọha"] }
          ],
          tryIt: "Ọrụ ikpeazụ: bipụta Google Site gị nwere otu peeji, ya na akụkụ Banyere anyị ị dezigharịrị na igbe Oge mmeghe na Kpọtụrụ anyị ị nwalere. Lelee ya na ekwentị ma wepụ ihe ọ bụla bụ nzuzo.",
          youCanNow: "ibipụta weebụsaịtị na-arụ ọrụ, lelee ya na ekwentị ma ghara itinye ozi nzuzo na ya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị na-eme mgbe ị pịa Publish na Google Sites?", options: ["E hichapụ saịtị ahụ", "Naanị gị nwere ike ịhụ ya", "Saịtị ahụ na-adị ndụ n'adreesị weebụ ị họrọrọ", "Ọ na-ebipụta saịtị ahụ n'akwụkwọ"], answer: 2, why: "Ibipụta na-eme ka saịtị ahụ dị ndụ n'adreesị weebụ ya." },
            { objective: "O6", q: "Saịtị gị na-egosi nọmba ekwentị onwe onye nke otu onye otu. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-enyere ndị mmadụ aka ịkpọ oku", "Mee ka ọ dị nta", "Rịọ ndị ọbịa ka ha ghara ịkpọ ya", "Jiri email otu dochie ya ma bipụta ọzọ"], answer: 3, why: "Nọmba onwe onye anaghị adị na saịtị ọha; jiri email otu kama." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Koodu, bipụta ma lelee",
        questions: [
          { objective: "O4", q: "Gịnị bụ HTML?", options: ["Ụdị ekwentị", "Asụsụ e ji ede peeji weebụ", "Okwuntughe", "App email"], answer: 1, why: "E ji HTML ede peeji weebụ." },
          { objective: "O4", q: "Kedu nke bụ tag mmechi?", options: ["<p>", "<h2>", "</p>", "<li>"], answer: 2, why: "Tag mmechi nwere akara /." },
          { objective: "O5", q: "AI nyere gị HTML maka saịtị gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Bipụta ya n'eleghị ya anya", "Ziga ya ndị ọbịa", "Hichapụ saịtị gị", "Nwalee ya n'ihe ndezi dị n'ịntanetị ma lelee eziokwu"], answer: 3, why: "Ịnwale na-achọpụta bug na eziokwu na-ezighi ezi tupu ndị ọbịa ahụ ha." },
          { objective: "O5", q: "Kedu otu i si etinye koodu HTML na Google Site?", options: ["Insert, Embed, Embed code, tinye, Next, Insert", "Bipụta ya n'akwụkwọ", "Ziga ya Google n'email", "Dee ya n'aha peeji"], answer: 0, why: "Nke ahụ bụ ụzọ Embed code na Google Sites." },
          { objective: "O6", q: "Kedu ihe dị mma itinye na saịtị ọha nke otu obodo?", options: ["Adreesị ụlọ gị", "Adreesị email otu", "Foto nwatakịrị n'enweghị ikike", "Nọmba ekwentị onwe gị"], answer: 1, why: "Email otu na-eme ka ndị mmadụ nwee ike ịkpọtụrụ unu n'egosighi ozi nzuzo." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iji AI Mepụta Weebụsaịtị",
    questions: [
      { objective: "O1", q: "Mgbe ị dere adreesị weebụ, gịnị na-eme?", options: ["Browser gị na-arịọ server maka peeji ahụ", "E bipụta peeji ahụ n'akwụkwọ", "Ekwentị gị na-ede peeji ahụ", "Ọ dịghị ihe"], answer: 0, why: "Server na-ezigara browser gị peeji ahụ." },
      { objective: "O1", q: "Kedu nke bụ browser weebụ?", options: ["Spreadsheet", "Chrome", "Igwe ebipụta akwụkwọ", "Ozi ederede"], answer: 1, why: "Chrome, Edge na Safari bụ browser." },
      { objective: "O1", q: "Nzọụkwụ mbụ n'iwu saịtị bụ:", options: ["Ịkwụ ụgwọ maka mgbasa ozi", "Ịhọrọ naanị agba", "Ime atụmatụ dị mfe", "Ibipụta peeji efu"], answer: 2, why: "Atụmatụ na-agwa gị ihe saịtị ahụ chọrọ." },
      { objective: "O1", q: "Kedu akụkụ obere saịtị obodo na-achọkarị?", options: ["Adreesị ụlọ ndị otu", "Nọmba ụlọ akụ", "Okwuntughe", "Otu e si akpọtụrụ unu"], answer: 3, why: "Ndị ọbịa chọrọ ụzọ ha ga-esi kpọtụrụ unu." },
      { objective: "O2", q: "Google Sites bụ:", options: ["Ihe e ji ewu weebụsaịtị n'efu nke so akaụntụ Google", "Naanị app a na-akwụ ụgwọ", "Ụlọ ọrụ ekwentị", "Ebe mgbasa ozi ọha (social media)"], answer: 0, why: "Ọ na-abịa n'efu ma ọ bụrụ na i nwere akaụntụ Google." },
      { objective: "O2", q: "Template bụ:", options: ["Okwuntughe", "Ụdị nhazi e meburu emebu nke ị na-ejupụta", "Ụdị server", "Bug"], answer: 1, why: "Template na-enye gị nhazi ị ga-eji malite." },
      { objective: "O2", q: "Theme na-achịkwa:", options: ["Ndị nwere ike ileta", "Adreesị weebụ", "Agba na ụdị mkpụrụ edemede", "Akaụntụ gị"], answer: 2, why: "Theme na-ahazi otu saịtị ahụ si dị anya." },
      { objective: "O3", q: "Kedu prompt ga-enweta draft Banyere anyị kacha mma?", options: ["\"weebụsaịtị\"", "\"dee ihe\"", "\"nyere m aka\"", "\"Dee Banyere anyị nwere okwu 60, nke enyi na enyi, maka klọb nkuzi n'efu maka klas 3 ruo 8. Jiri okwu dị mfe.\""], answer: 3, why: "Ọ na-enye eziokwu, ogologo na ụda." },
      { objective: "O3", q: "Onye ka okwu ọ bụla dị na saịtị gị dị n'aka?", options: ["Gị na otu gị", "AI", "Google", "Ọ dịghị onye"], answer: 0, why: "AI na-ede draft, mana ọ bụ gị na-ebipụta ma nwe okwu ndị ahụ." },
      { objective: "O4", q: "Gịnị bụ tag na HTML?", options: ["Akara ọnụ ahịa", "Akara dị n'ime < na > dị ka <p>", "Foto", "Adreesị weebụ"], answer: 1, why: "Tag na-agwa browser ihe akụkụ ọ bụla bụ." },
      { objective: "O4", q: "Kedu tag na-eme paragraf?", options: ["<li>", "<a>", "<p>", "<ul>"], answer: 2, why: "<p> pụtara paragraf (paragraph)." },
      { objective: "O4", q: "N'ihe ndezi HTML dị n'ịntanetị, kedu otu i si ahụ peeji gị?", options: ["Bipụta ya n'akwụkwọ", "Ziga ya n'email", "Malitegharịa kọmputa", "Pịa Run"], answer: 3, why: "Run na-egosi ihe HTML gị mere." },
      { objective: "O5", q: "Mgbe ị na-arịọ AI maka koodu maka saịtị onye mbido, arịrịọ dị mma bụ:", options: ["\"Naanị HTML dị mfe, enweghị JavaScript\"", "\"Tinye script ọ bụla masịrị gị\"", "\"Detuo koodu site na saịtị ọ bụla\"", "\"Tinye okwuntughe m\""], answer: 0, why: "HTML dị mfe dị mfe ịgụ, ịnwale na ịtụkwasị obi." },
      { objective: "O5", q: "Bug bụ:", options: ["Theme weebụsaịtị", "Mperi dị na koodu nke na-eme ka ọ rụọ ọrụ n'ụzọ na-ezighi ezi", "Adreesị weebụ", "Ụdị template"], answer: 1, why: "Bug bụ mperi a ga-achọpụta ma dozie." },
      { objective: "O5", q: "Koodu AI na-egosi oge mmechi na-ezighi ezi. I kwesịrị:", options: ["Bipụta ya otu o sila dị", "Hichapụ saịtị niile", "Dozie okwu ahụ ma ọ bụ rịọ AI ka o dozie naanị otu ihe ahụ", "Leghara ya anya"], answer: 2, why: "Dozie nsogbu ahụ kpọmkwem, wee nwalee ọzọ." },
      { objective: "O5", q: "Gịnị ka \"embed\" pụtara?", options: ["Ihichapụ peeji", "Ibipụta peeji n'akwụkwọ", "Ịgbanwe okwuntughe gị", "Itinye koodu ma ọ bụ ihe n'ime peeji"], answer: 3, why: "Embed na-etinye igbe HTML gị n'ime saịtị ahụ." },
      { objective: "O6", q: "Iji mee ka Google Site gị dị ndụ, ị na-apịa:", options: ["Publish", "Delete", "Print", "Undo"], answer: 0, why: "Publish na-eme ka a hụ saịtị ahụ n'adreesị ya." },
      { objective: "O6", q: "Gịnị mere i ji elele saịtị gị na ekwentị?", options: ["Ekwentị apụghị igosi weebụsaịtị", "Ọtụtụ ndị ọbịa na-eji ekwentị", "Ọ na-agbanwe adreesị ahụ", "Iwu chọrọ ya"], answer: 1, why: "Ọtụtụ ndị ọbịa ga-ahụ saịtị gị na ekwentị." },
      { objective: "O6", q: "Kedu ihe a NA-EKWESỊGHỊ itinye na saịtị ọha gị?", options: ["Oge mmeghe otu ahụ", "Email otu", "Foto nwatakịrị n'enweghị ikike e dere ede site n'aka nne ma ọ bụ nna ya", "Ihe unu na-enye"], answer: 2, why: "Foto ụmụaka chọrọ ikike site n'aka nne na nna ma ọ bụ onye nlekọta." },
      { objective: "O6", q: "Mgbe i bipụtachara, ị nwere ike ịgbanwe Google Site gị?", options: ["Mba, mgbe ọ bụla", "Naanị ma ọ bụrụ na i kwụrụ ụgwọ", "Naanị site n'ịmalitegharị ọhụrụ", "Ee, dezie ma bipụta ọzọ"], answer: 3, why: "Ị nwere ike imezi ma bipụtaghachi ya mgbe ọ bụla." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 7, 9, 13, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "E wuru saịtị", objective: "O2", notYet: "Enweghị aha doro anya, ma ọ bụ akụkụ ụfọdụ adịghị.", meets: "Google Site nwere aha doro anya na akụkụ ndị a haziri, na theme dị mfe ịgụ.", exceeds: "Otu ihe ndị ọbịa kwesịrị ime dị mfe ịchọta." },
      { name: "Banyere anyị", objective: "O3", notYet: "E tinyere okwu AI otu o si dị, ma ọ bụ ya na eziokwu na-ezighi ezi ma ọ bụ nke e chepụtara.", meets: "Obere Banyere anyị nwere ezi eziokwu, nke onye na-amụ ihe dezigharịrị n'okwu nke ya.", exceeds: "Nwere ike igosi ihe ọ gbanwere na ihe mere o ji gbanwee ya." },
      { name: "Igbe Oge mmeghe na Kpọtụrụ anyị", objective: "O5", notYet: "Enweghị igbe HTML, ma ọ bụ a nwaleghị ya.", meets: "Igbe HTML dị mfe e nwalere n'ihe ndezi, e dozie otu nsogbu, ma tinye (embed) ya.", exceeds: "Nwere ike ịkọwa ihe tag ọ bụla dị n'igbe ahụ na-eme." },
      { name: "E bipụtara ya, ọ dịkwa njikere maka ekwentị", objective: "O6", notYet: "E bipụtaghị ya, ma ọ bụ e leleghị ya na ekwentị.", meets: "E bipụtara ya ma lelee ya na ekwentị: ederede dị mfe ịgụ, njikọ na-arụ ọrụ, foto na-apụta.", exceeds: "Enyi nwalekwara ya, e dozikwa nsogbu ọ bụla." },
      { name: "Nzuzo", objective: "O6", notYet: "Adreesị ụlọ, nọmba onwe onye ma ọ bụ foto nwatakịrị a na-anabataghị dị na saịtị ahụ.", meets: "Naanị email otu ma ọ bụ ebe ọha, na-enweghị ozi nzuzo.", exceeds: "Foto niile bụ nke onye ahụ ma ọ bụ e ji ha n'ikike e dere ede." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu obodo ma ọ bụ obere azụmahịa nwere saịtị dị ndụ nke onye na-amụ ihe wuru n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe were ihe ọmụmụ weebụ ma ọ bụ koodu ọzọ n'ime ụbọchị 60",
      "Otu ndị na-akọ na ha nwetara ndị otu ọhụrụ, ndị ahịa ma ọ bụ oku site na saịtị ha"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị (n'ọba akwụkwọ ma ọ bụ n'ụlọ) iji wuo saịtị ahụ, na ekwentị iji lelee ya",
      "Akaụntụ Google n'efu maka Google Sites",
      "Ngwa enyemaka AI n'efu na ihe ndezi HTML n'efu dị n'ịntanetị dị ka W3Schools Tryit Editor",
      "Ezi eziokwu gbasara otu ahụ: aha, ihe ọ na-enye, oge mmeghe na email otu",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Buru ụzọ nyere aka n'ịbanye n'akaụntụ Google; ọ na-ewe ndị mbido oge kacha ogologo.",
      "Mee ka ndị na-amụ ihe wuoro ezi otu ha so na ya mgbe ha nwere ike, na nkwado otu ahụ.",
      "Lelee saịtị ọ bụla e bipụtara maka adreesị ụlọ, nọmba onwe onye na foto ụmụaka na-enweghị ikike.",
      "Chetara ndị na-amụ ihe ka ha nwalee koodu AI niile ma rịọ naanị maka HTML dị mfe.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
