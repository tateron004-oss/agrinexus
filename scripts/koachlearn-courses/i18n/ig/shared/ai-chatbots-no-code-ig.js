"use strict";

// Koach Learn course (Igbo translation of shared/ai-chatbots-no-code.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "ai-chatbots-no-code-ig",
  lang: "ig",
  translationOf: "ai-chatbots-no-code",
  category: "Small Business",
  name: "Ịrụ Chatbot AI (Ọ Dịghị Mkpa Ide Koodu)",
  skills: "Ịhọrọ ọrụ chatbot, Ide ntụziaka chatbot, Ịme faịlụ ihe ọmụma, Itinye iwu nchekwa, Ịnwale ya n'ezi ajụjụ, Ịmalite ya na ime ka ọ ka mma",
  outcome: "ịrụ chatbot AI n'ede koodu ọ bụla, nke na-aza ajụjụ ndị mmadụ na-ajụkarị maka azụmahịa, otu enyemaka (nonprofit) ma ọ bụ klọb site n'ozi nke gị, nwere ntụziaka doro anya na iwu nchekwa, ma e nwalere ya n'ezi ajụjụ tupu onye ọ bụla eji ya.",
  about: [
    "Chatbot na-aza ajụjụ n'igbe mkparịta ụka (chat), n'oge ọ bụla n'ụbọchị. Site na ngwa AI nke oge a, ị nwere ike ịrụ otu n'ede koodu ọ bụla: ị na-enye ya ntụziaka na ozi nke gị, ọ na-azakwa n'okwu dị mfe.",
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa, ndị ọrụ na ndị ọrụ afọ ofufo nke otu enyemaka, na ndị ntorobịa chọrọ ezi ọrụ ha ga-arụ. Ọmụmaatụ gụnyere ụlọ achịcha na-aza \"Ị na-emeghe na Sọnde?\", ebe enyemaka nri na-akọwa ihe a ga-eweta, na klọb ụlọ akwụkwọ na-aza ajụjụ gbasara nnwale ịbanye.",
    "Ị ga-akwado ọrụ chatbot ahụ, dee ntụziaka ya, nye ya faịlụ ihe ọmụma, tinye iwu nchekwa, nwalee ya, wee malite ya. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise nwere ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Rụọ chatbot na-arụ ọrụ n'ede koodu ọ bụla maka ezi otu ma ọ bụ otu e mere maka omume: ọrụ n'otu ahịrịokwu, ntụziaka e dere ede nwere ụda na iwu nchekwa, faịlụ ihe ọmụma nwere otu peeji eziokwu, na ndekọ nnwale nke opekata mpe ezi ajụjụ iri na mgbanwe ị mere. Kesaa ya otu onye ma dee ihe ha kwuru.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa, ndị ọrụ ha, na ndị na-elekọta otu enyemaka, ụka ma ọ bụ klọb, ndị na-aza otu ajụjụ ahụ ugboro ugboro site n'oku, ozi ederede, email na mgbasa ozi ọha (social media).",
    startingPoint: "Ha nwere ike iji ekwentị ma ọ bụ kọmputa, email na mgbasa ozi ọha, ma eleghị anya ha anwaala ngwa enyemaka AI. Ha enweghị ahụmahụ ide koodu, ọtụtụ n'ime ha emebeghị chatbot mgbe ọ bụla.",
    gap: "Ịza ajụjụ ndị a na-ajụghachi na-ewe ọtụtụ awa kwa izu, ndị ahịa na-atụkwa anya azịza n'oge ọ bụla. Ndị na-amụ ihe kwesịrị ịrụ chatbot dị warara ma na-ekwu eziokwu site n'eziokwu nke ha, nwere iwu nchekwa na nnwale, ka o chekwaa oge n'enyeghị azịza ezighi ezi ma ọ bụ nke dị ize ndụ na-emebi ntụkwasị obi.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; enweghị ide koodu",
      "Ngwaọrụ: kọmputa kacha mfe; ụfọdụ ngwa ịrụ chatbot na-arụ ọrụ n'ekwentị",
      "Ọnụ ahịa na atụmatụ: atụmatụ na ụdị ndenye aha (plan) nke ngwa chatbot na-agbanwe; ndị na-amụ ihe na-elele peeji enyemaka nke ngwa ahụ",
      "Nzuzo: enweghị aha ndị ahịa, nọmba ekwentị, ozi ndị na-enye onyinye, okwuntughe ma ọ bụ ozi ụlọ akụ n'ime faịlụ ọ bụla",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge nnwale"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ na ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ajụjụ otu gị na-anata ugbu a", action: "ide ọrụ chatbot n'otu ahịrịokwu ma depụta ajụjụ iri ọ ga-aza", standard: "n'enweghị ajụjụ ahụike, iwu ma ọ bụ ego dị ize ndụ na ndepụta ahụ" },
    { id: "O2", condition: "Site n'iji ngwa ịrụ chatbot n'ede koodu", action: "ide ntụziaka na-akọwa ọrụ chatbot ahụ, ndị ọ na-agwa okwu, ihe ọ na-aza, ụda ya na oke ya", standard: "nwere akụkụ ise ahụ niile na ahịrị maka ihe ọ ga-eme mgbe ọ maghị" },
    { id: "O3", condition: "Mgbe e nyere gị eziokwu gbasara otu gị", action: "ịme faịlụ ihe ọmụma nwere otu peeji na ụbọchị, n'ụdị ajụjụ na azịza, ma tinye ya na chatbot ahụ", standard: "n'enweghị ozi nzuzo ọ bụla n'ime ya" },
    { id: "O4", condition: "Maka chatbot ọha mmadụ ga-eji", action: "ide iwu nchekwa na-eme ka ọ nọgide n'isiokwu ya, kwuo eziokwu ma dịrị nchebe", standard: "gụnyere enweghị nọmba nzuzo, enweghị ndụmọdụ ọkachamara, ikwu na ọ bụ AI na iziga ihe mberede na 911" },
    { id: "O5", condition: "Tupu onye ọ bụla eji chatbot ahụ", action: "ịnwale ya n'opekata mpe ajụjụ iri ndị dị adị na ndị aghụghọ, dee nsonaazụ ya ma dozie ihe dara", standard: "na-anwaghachi ajụjụ ọ bụla dara ruo mgbe ọ gafere" },
    { id: "O6", condition: "Mgbe chatbot ahụ dị njikere", action: "ikesa ya mmadụ ole na ole, nakọta echiche ha ma hazie usoro mmelite", standard: "ebe mmadụ dị mgbe niile maka ihe ọ na-enweghị ike ime" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịkwado na ịrụ chatbot ahụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe chatbot AI nwere ike ime, na ịhọrọ otu ọrụ ya",
          minutes: 4,
          goal: "Dee ọrụ chatbot n'otu ahịrịokwu ma depụta ajụjụ ọ ga-aza.",
          text: [
            "Chatbot AI bụ ngwa enyemaka AI e hiwere maka otu ebumnuche. Kama ịza ajụjụ ọ bụla, ọ na-aza ajụjụ gbasara otu gị, site n'iji ozi i nyere ya.",
            "Ọrụ mbụ dị mma dị warara ma na-emeghachi onwe ya: oge mmeghe na ebe ị nọ, ọnụ ahịa, otu esi edebanye aha, ihe a ga-eweta, iwu nloghachi ngwa ahịa, oge ndị ọrụ afọ ofufo. Ọrụ mbụ ọjọọ bụ ndị dị ize ndụ: ndụmọdụ ahụike, iwu ma ọ bụ ego, ma ọ bụ ihe ọ bụla chọrọ mkpebi mmadụ.",
            "Malite n'ajụjụ ndị mmadụ na-ajụ ugbu a. Lee email gị, ozi, oku ekwentị na nkọwa (comments) na mgbasa ozi ọha. Ajụjụ iri a na-ajụkarị ga-abụ ọrụ chatbot ahụ."
          ],
          steps: ["Dee ajụjụ iri ndị mmadụ na-ajụkarị gị.", "Kpochapụ nke ọ bụla chọrọ mkpebi mmadụ ma ọ bụ dị ize ndụ.", "Dee ọrụ chatbot ahụ n'otu ahịrịokwu: \"Chatbot a na-aza ajụjụ gbasara [isiokwu] maka [ndị].\""],
          words: [["Chatbot", "mmemme kọmputa na-aza ajụjụ n'igbe mkparịta ụka (chat)."], ["Use case", "okwu bekee maka otu ọrụ a kapịrị ọnụ e ji ngwa rụọ."]],
          slides: [
            { title: "Chatbot bụ ngwa enyemaka lekwasịrị anya", bullets: ["E hiwere ya maka otu ebumnuche", "Ọ na-aza site n'ozi nke gị"] },
            { title: "Ọrụ mbụ dị mma", bullets: ["Oge mmeghe, ebe ị nọ, ọnụ ahịa", "Otu esi edebanye aha ma ọ bụ ihe a ga-eweta", "Oge ndị ọrụ afọ ofufo, iwu nloghachi"] },
            { title: "Hapụrụ ndị mmadụ", bullets: ["Ndụmọdụ ahụike, iwu ma ọ bụ ego", "Mkpesa na ihe chọrọ mkpebi"] },
            { title: "Malite n'ezi ajụjụ", bullets: ["Email, oku, ozi, nkọwa", "Ajụjụ iri kachasị = ọrụ ya"] }
          ],
          tryIt: "Họrọ azụmahịa, otu enyemaka ma ọ bụ klọb (nke gị ma ọ bụ nke omume). Dee ajụjụ iri a na-ajụkarị ya na ọrụ chatbot ya n'otu ahịrịokwu.",
          youCanNow: "ịhọrọ ọrụ dị warara na nke enweghị nsogbu maka chatbot ma depụta ajụjụ ọ ga-aza.",
          quickCheck: [
            { objective: "O1", q: "Gịnị na-eme ọrụ mbụ dị mma maka chatbot azụmahịa?", options: ["Inye ndụmọdụ iwu", "Ikpebi nkwụghachi ego otu otu", "Ịza ajụjụ dị warara a na-ajụghachi, dị ka oge mmeghe na ndebanye aha", "Ịza ajụjụ ọ bụla n'ụwa"], answer: 2, why: "Ajụjụ dị warara a na-ajụghachi enweghị ize ndụ dị ukwuu ma na-echekwa oge kacha." },
            { objective: "O1", q: "Ụlọ ịkpụ isi gị na-anata ọtụtụ ajụjụ. Kedu nke ị ga-ewepụ na ndepụta chatbot ahụ?", options: ["\"Ọ̀ bụ ihe dị njọ ka ọnyá a dị n'isi m?\"", "\"Kedu oge unu na-emeghe na Satọde?\"", "\"Kedu otu m ga-esi debe oge ọbịbịa?\"", "\"Ebe ka m ga-adọba ụgbọ ala?\""], answer: 0, why: "Ajụjụ ahụike chọrọ mkpebi ọkachamara, ya mere ọ bụghị ọrụ chatbot." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide ntụziaka chatbot ahụ",
          minutes: 5,
          goal: "Dee ntụziaka doro anya na-akọwa ọrụ chatbot ahụ, ụda ya na oke ya.",
          text: [
            "Ngwa ịrụ chatbot n'ede koodu na-ekwe ka ị dee ntụziaka AI ahụ ga-agbaso na mkparịta ụka ọ bụla. Ọmụmaatụ gụnyere custom GPTs na ChatGPT, Gems na Google Gemini na agents na Microsoft Copilot Studio. Aha atụmatụ, menu na plan ndị nwere ha na-agbanwe ugboro ugboro, ya mere lelee peeji enyemaka nke ngwa ahụ maka nzọụkwụ ugbu a.",
            "Ntụziaka dị mma na-ekpuchi ihe ise: onye chatbot ahụ bụ (\"Ị bụ onye enyemaka nke Sunrise Food Pantry\"), ndị ọ na-agwa okwu, ihe ọ na-aza, otu o si ada (enyi, mkpụmkpụ, okwu dị mfe), na ihe ọ na-agaghị eme.",
            "Dee ntụziaka n'ahịrịokwu dị mkpụmkpụ ma doo anya. Gwa ya ihe ọ ga-eme mgbe ọ maghị: \"Ọ bụrụ na azịza ahụ adịghị na faịlụ ihe ọmụma, kwuo na ị maghị nke ọma ma nye nọmba ekwentị.\""
          ],
          steps: ["Ọrụ: \"Ị bụ onye enyemaka nke [otu].\"", "Ndị ọ na-agwa okwu: ndị ga-ajụ ajụjụ.", "Ihe ọ na-aza: isiokwu ndị ọ na-aza.", "Ụda: enyi, mkpụmkpụ, okwu dị mfe.", "Oke: ihe ọ na-agaghị eme, na ihe ọ ga-ekwu mgbe ọ maghị."],
          words: [["Ntụziaka", "iwu chatbot na-agbaso na mkparịta ụka ọ bụla; mgbe ụfọdụ a na-akpọ ya system prompt."], ["Ụda", "otu ederede si ada: nke ọkachamara, nke enyi, mkpụmkpụ."]],
          slides: [
            { title: "Ngwa ịrụ chatbot n'ede koodu", bullets: ["Custom GPTs, Gemini Gems, agents nke Copilot Studio", "Aha na plan na-agbanwe: lelee peeji enyemaka"] },
            { title: "Akụkụ ise nke ntụziaka", bullets: ["Ọrụ na ndị ọ na-agwa okwu", "Ihe ọ na-aza", "Ụda", "Ihe ọ na-agaghị eme"] },
            { title: "Mgbe ọ maghị", bullets: ["Kwuo \"Amaghị m nke ọma\"", "Nye nọmba ekwentị ma ọ bụ email nke mmadụ"] }
          ],
          sources: [{ name: "Google Gemini Help: Gems", url: "https://support.google.com/gemini/answer/15146780" }],
          tryIt: "Dee ntụziaka maka chatbot gị nwere akụkụ ise ahụ niile, n'ahịrịokwu asatọ ma ọ bụ ole na-erughị ya.",
          youCanNow: "ide ntụziaka chatbot na-akọwa ọrụ ya, ndị ọ na-agwa okwu, ihe ọ na-aza, ụda ya na oke ya.",
          quickCheck: [
            { objective: "O2", q: "Kedu akụkụ ntụziaka bụ \"enyi, mkpụmkpụ, okwu dị mfe\"?", options: ["Ọrụ", "Ndị ọ na-agwa okwu", "Oke", "Ụda"], answer: 3, why: "Ụda na-akọwa otu chatbot ahụ si ada." },
            { objective: "O2", q: "Ntụziaka gị ekwughị ihe chatbot ahụ ga-eme mgbe ọ maghị. Gịnị ka ị ga-agbakwunye?", options: ["\"Nye azịza mgbe niile, ọbụlagodi nkọ.\"", "\"Ọ bụrụ na azịza ahụ adịghị na faịlụ ihe ọmụma, kwuo na ị maghị nke ọma ma nye nọmba ekwentị.\"", "\"Gbanwee isiokwu.\"", "\"Rịọ onye ahụ okwuntughe ya.\""], answer: 1, why: "Ịgwa ya ka o kwete na ọ maghị nke ọma ma duga n'aka mmadụ na-akwụsị azịza e chepụtara echepụta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Inye chatbot ahụ eziokwu gị: faịlụ ihe ọmụma",
          minutes: 5,
          goal: "Mee faịlụ ihe ọmụma nwere otu peeji ma jikọọ ya na chatbot a na-arụ n'ede koodu.",
          text: [
            "Ngwa AI maara ọtụtụ ihe n'ozuzu ma ọ maghị ihe ọ bụla gbasara oge mmeghe gị na Tọsdee. Ọtụtụ ngwa ịrụ chatbot n'ede koodu na-ekwe ka i bulite faịlụ, nke na-adịkarị n'akụkụ a na-akpọ Knowledge, nke chatbot ahụ na-eji aza ajụjụ.",
            "Mee ka faịlụ ahụ dị mfe: isiokwu maka ihe ọ bụla na eziokwu dị mkpụmkpụ ma dị mfe. Jiri ụdị ajụjụ na azịza maka ajụjụ iri gị kachasị. Tinye ụbọchị n'elu ka ị mara mgbe ị ga-emelite ya.",
            "Etinyela ozi nzuzo n'ime faịlụ ahụ mgbe ọ bụla: enweghị aha ndị ahịa, nọmba ekwentị, okwuntughe, ozi ndị na-enye onyinye ma ọ bụ ozi ụlọ akụ. Ihe ọ bụla dị na faịlụ ahụ nwere ike ịpụta n'azịza."
          ],
          steps: ["Mepee Google Doc ma ọ bụ akwụkwọ Word.", "Tinye ụbọchị na aha otu ahụ n'elu.", "Dee ajụjụ ọ bụla kachasị na azịza ya n'okpuru ya.", "Tinye ihe ndị bụ isi: oge mmeghe, adreesị, ụzọ isi kpọtụrụ, ọnụ ahịa ma ọ bụ ọrụ.", "Wepụ ihe ọ bụla nzuzo, chekwaa ya, ma bulite ya n'akụkụ ihe ọmụma nke ngwa ịrụ chatbot ahụ."],
          words: [["Faịlụ ihe ọmụma", "akwụkwọ ị na-ebulite ka chatbot ahụ nwee ike ịza site n'eziokwu gị."], ["Bulite (upload)", "iziga faịlụ site na ngwaọrụ gị gaa na weebụsaịtị ma ọ bụ app."]],
          slides: [
            { title: "AI amaghị nkọwa gị", bullets: ["Oge mmeghe gị, ọnụ ahịa, iwu gị", "Nye ya faịlụ ihe ọmụma"] },
            { title: "Faịlụ ihe ọmụma dị mma", bullets: ["Ụbọchị n'elu", "Ajụjụ na azịza maka ajụjụ ọ bụla kachasị", "Eziokwu dị mkpụmkpụ ma dị mfe"] },
            { title: "Etinyela mgbe ọ bụla", bullets: ["Aha na nọmba ndị ahịa ma ọ bụ ndị na-enye onyinye", "Okwuntughe ma ọ bụ ozi ụlọ akụ", "Ihe ọ bụla ị na-agaghị etinye n'ihu ọha"] }
          ],
          tryIt: "Dee faịlụ ihe ọmụma nwere otu peeji maka chatbot gị, nwere ụbọchị na azịza ajụjụ iri gị kachasị. Wee mepee ngwa ịrụ chatbot n'ede koodu ị nwere ike iji, tinye ntụziaka gị, bulite faịlụ ahụ ma chekwaa.",
          youCanNow: "ịme faịlụ ihe ọmụma enweghị nsogbu ma jikọọ ya na ntụziaka na ngwa ịrụ chatbot n'ede koodu.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere i ji etinye ụbọchị n'elu faịlụ ihe ọmụma?", options: ["Ka faịlụ ahụ dị ogologo karị", "Ka ị mara mgbe ị ga-emelite ya", "N'ihi na AI chọrọ ya iji malite", "Iji zoo eziokwu ochie"], answer: 1, why: "Ụbọchị ahụ na-egosi otu eziokwu ahụ si dị ọhụrụ na mgbe a ga-emelite ha." },
            { objective: "O3", q: "Ị na-eme faịlụ ihe ọmụma nke ụka. Kedu nke ị ga-ahapụ?", options: ["Oge ofufe", "Adreesị", "Otu esi esonye n'obere otu", "Nọmba ekwentị ndị otu"], answer: 3, why: "Ozi nzuzo dị ka nọmba ekwentị nwere ike ịpụta n'azịza, ya mere ọ naghị aba na faịlụ ahụ mgbe ọ bụla." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịkwado na ịrụ chatbot ahụ",
        questions: [
          { objective: "O1", q: "Kedu ọrụ mbụ kacha mma maka chatbot obere otu?", options: ["Inye ndụmọdụ ahụike", "Ịkwado mbinye ego", "Ịza ajụjụ gbasara oge mmeghe, ebe ị nọ na ndebanye aha", "Ịza mkpesa niile n'onwe ya"], answer: 2, why: "Ajụjụ dị warara, a na-ajụghachi, na-enweghị ize ndụ bụ ọrụ mbụ kacha mma." },
          { objective: "O1", q: "Ebee ka ị ga-ahụ ajụjụ chatbot gị ga-aza?", options: ["Email, oku, ozi na nkọwa ndị mmadụ ezitelarị", "Chepụta ha", "Detuo ndepụta ụlọ ọrụ ọzọ", "Rịọ AI ka ọ kọọ"], answer: 0, why: "Ezi ajụjụ sitere n'ezi mmadụ na-egosi ọrụ chatbot ahụ." },
          { objective: "O2", q: "Gịnị ka ntụziaka kwesịrị ịsị chatbot ahụ mee mgbe ọ maghị azịza?", options: ["Chepụta ihe dị ka eziokwu", "Kwụsị mkparịta ụka ahụ n'ekwughị ihe", "Rịọ onye ahịa okwuntughe ya", "Kwuo na ọ maghị nke ọma ma nye ụzọ isi kpọtụrụ mmadụ"], answer: 3, why: "Ikwete na ọ maghị na iduga n'aka mmadụ na-egbochi azịza ezighi ezi." },
          { objective: "O3", q: "Gịnị mere i ji ebulite faịlụ ihe ọmụma?", options: ["Ime ka chatbot ahụ dị nwayọọ", "Ka chatbot ahụ nwee ike ịza site n'eziokwu nke gị", "Iji chekwaa okwuntughe ndị ahịa", "Ọ dịghị mkpa mgbe ọ bụla"], answer: 1, why: "AI amaghị nkọwa gị ruo mgbe i nyere ya ha." },
          { objective: "O3", q: "Kedu nke kwesịrị ịdị na faịlụ ihe ọmụma chatbot?", options: ["Nọmba ekwentị ndị na-enye onyinye", "Oge mmeghe gị", "Okwuntughe ndị ọrụ", "Nọmba akaụntụ ụlọ akụ"], answer: 1, why: "Naanị eziokwu ọha kwesịrị ịdị na faịlụ ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Ịnwale, ịmalite na ime ka ọ ka mma",
      lessons: [
        {
          objectives: ["O4"],
          title: "Itinye iwu nchekwa ka chatbot ahụ dịrị nchebe",
          minutes: 5,
          goal: "Dee iwu nchekwa na-eme ka chatbot ahụ nọgide n'isiokwu ya, kwuo eziokwu ma dịrị nchebe.",
          text: [
            "Iwu nchekwa (guardrails) bụ iwu na-egbochi chatbot ahụ ịga ebe ọ na-ekwesịghị ịga. Tinye ha na ntụziaka dị ka ahịrị \"emela\" na \"mgbe niile\" doro anya.",
            "Iwu nchekwa bara uru: nọgide n'isiokwu gị ma jiri nkwanye ugwu jụ ndị ọzọ; arịọla ma ọ bụ chekwaa ozi nzuzo dị ka nọmba kaadị ma ọ bụ nọmba Social Security mgbe ọ bụla; enyela ndụmọdụ ahụike, iwu ma ọ bụ ego mgbe ọ bụla; gwa ndị mmadụ na ọ bụ AI, ọ bụghị mmadụ; ma ziga ihe mberede na 911 ma ọ bụ nọmba enyemaka kwesịrị ekwesị.",
            "Ikwu eziokwu na ọ bụ AI na-ewulite ntụkwasị obi. Malite mkparịta ụka ahụ n'obere ozi: \"Ndewo, abụ m onye enyemaka AI nke Sunrise Food Pantry. Enwere m ike ịza ajụjụ gbasara oge mmeghe na ihe a ga-eweta.\""
          ],
          steps: ["Tinye ahịrị: nọgide na [isiokwu gị]; jiri nkwanye ugwu jụ ndị ọzọ.", "Tinye: arịọla nọmba kaadị, ụlọ akụ, ID ma ọ bụ Social Security mgbe ọ bụla.", "Tinye: enweghị ndụmọdụ ahụike, iwu ma ọ bụ ego; duga n'aka ọkachamara.", "Tinye: kwuo na ị bụ onye enyemaka AI.", "Tinye: maka ihe mberede, gwa ndị mmadụ ka ha kpọọ 911."],
          words: [["Iwu nchekwa (guardrail)", "iwu na-eme ka ngwa AI nọgide n'isiokwu ya ma dịrị nchebe."], ["Jụ (decline)", "ịsị mba n'ụzọ nkwanye ugwu."]],
          slides: [
            { title: "Iwu nchekwa na-eme ka ọ dịrị nchebe", bullets: ["Ahịrị \"emela\" na \"mgbe niile\" na ntụziaka"] },
            { title: "Iwu nchekwa ọ ghaghị inwe", bullets: ["Nọgide n'isiokwu; jụ ndị ọzọ", "Arịọla nọmba nzuzo mgbe ọ bụla", "Enweghị ndụmọdụ ahụike, iwu ma ọ bụ ego"] },
            { title: "Kwuo eziokwu", bullets: ["Kwuo na ọ bụ onye enyemaka AI", "Ziga ihe mberede na 911"] }
          ],
          tryIt: "Tinye opekata mpe iwu nchekwa ise na ntụziaka chatbot gị, gbakwunyere obere ekele na-ekwu na ọ bụ onye enyemaka AI na ihe o nwere ike inyere aka.",
          youCanNow: "ide iwu nchekwa na-eme ka chatbot nọgide n'isiokwu ya, kwuo eziokwu ma dịrị nchebe.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ ebumnuche iwu nchekwa na ntụziaka chatbot?", options: ["Ime ka chatbot ahụ nọgide n'isiokwu ya, kwuo eziokwu ma dịrị nchebe", "Ime ka azịza dị ogologo karị", "Ime ka weebụsaịtị ahụ gaa ngwa ngwa", "Ịnakọta nọmba kaadị ndị ahịa"], answer: 0, why: "Iwu nchekwa bụ iwu \"emela\" na \"mgbe niile\" na-eme ka chatbot ahụ nọrọ ebe o kwesịrị ịnọ." },
            { objective: "O4", q: "Onye ahịa rịọrọ chatbot ụlọ ahịa gị ka ọ rịọ nọmba kaadị ya iji mechaa ịzụ ahịa. Gịnị ka iwu nchekwa kwesịrị ime ka o mee?", options: ["Rịọ nọmba kaadị ahụ niile", "Rịọ naanị nọmba anọ ikpeazụ", "Arịọla nọmba kaadị mgbe ọ bụla, ma duga n'ebe ịkwụ ụgwọ nchebe ma ọ bụ n'aka mmadụ", "Chekwaa nọmba kaadị ahụ maka oge ọzọ"], answer: 2, why: "Chatbot ahụ agaghị arịọ ma ọ bụ chekwaa nọmba kaadị, ụlọ akụ ma ọ bụ ID mgbe ọ bụla." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịnwale chatbot ahụ dị ka onye ahịa siri ike",
          minutes: 6,
          goal: "Nwalee chatbot ahụ n'ezi ajụjụ na ajụjụ aghụghọ, dee nsonaazụ ya ma dozie nsogbu.",
          text: [
            "Amalitela chatbot ị nwalebeghị mgbe ọ bụla. Jụọ ya opekata mpe ajụjụ iri: ajụjụ gị kachasị e dere n'ụzọ dị iche iche, ajụjụ o kwesịghị ịza, na ajụjụ aghụghọ.",
            "Nnwale aghụghọ: jụọ ihe na-adịghị na faịlụ ahụ (ọ̀ na-ekweta na ọ maghị?), rịọ ndụmọdụ o kwesịrị ịjụ, dee okwu n'ụzọ ezighi ezi, ma nwaa ịkpụpụ ya n'isiokwu (\"Dee m abụ\"). Rịọ onye ọzọ ka ọ nwalekwa ya; ha ga-ajụ ihe ị na-atụghị anya ya.",
            "Debe ndekọ nnwale: ajụjụ ahụ, ihe ọ kwuru, ọ gafere ma ọ bụ ọ dara, na mmezi. Ọtụtụ mmezi dị obere: tinye eziokwu na-efu efu na faịlụ ihe ọmụma, ma ọ bụ tinye ahịrị na ntụziaka. Nwalee ọzọ mgbe mmezi ọ bụla gasịrị."
          ],
          steps: ["Dee ajụjụ nnwale iri: nkịtị, e dere n'ụzọ ọzọ, ndị pụrụ n'isiokwu na ndị dị ize ndụ.", "Jụọ nke ọ bụla ma detuo azịza ya na ndekọ nnwale.", "Dee ọ gafere ma ọ bụ ọ dara.", "Dozie ihe dara site n'imelite faịlụ ihe ọmụma ma ọ bụ ntụziaka.", "Nwaleghachi ajụjụ ndị dara."],
          words: [["Ndekọ nnwale (test log)", "ndekọ nnwale ọ bụla, nsonaazụ ya na mmezi ya."], ["Edge case", "okwu bekee maka ajụjụ na-adịghị ahụkarị nke nwere ike imebi usoro."]],
          slides: [
            { title: "Nwalee tupu ịmalite", bullets: ["Opekata mpe ajụjụ iri", "Nkịtị, e dere n'ụzọ ọzọ, pụrụ n'isiokwu, dị ize ndụ"] },
            { title: "Nnwale aghụghọ", bullets: ["Ihe na-adịghị na faịlụ ahụ", "Ndụmọdụ o kwesịrị ịjụ", "Okwu e dere ezighi ezi na arịrịọ pụrụ n'isiokwu"] },
            { title: "Dee ma dozie", bullets: ["Ajụjụ, azịza, gafere ma ọ bụ dara, mmezi", "Melite faịlụ ma ọ bụ ntụziaka", "Nwalee ọzọ"] }
          ],
          tryIt: "Jụọ chatbot gị ajụjụ nnwale iri, gụnyere opekata mpe atọ dị aghụghọ. Dee ha na ndekọ nnwale, dozie ihe ọ bụla dara ma nwalee ọzọ.",
          youCanNow: "ịnwale chatbot n'ajụjụ nkịtị na ajụjụ aghụghọ, idebe ndekọ nnwale ma dozie ihe dara.",
          quickCheck: [
            { objective: "O5", q: "Gịnị na-aba na ndekọ nnwale chatbot?", options: ["Naanị ajụjụ ndị o zara nke ọma", "Nọmba ekwentị ndị ahịa", "Ntụziaka chatbot ahụ", "Ajụjụ ahụ, azịza ya, ọ gafere ma ọ bụ ọ dara, na mmezi"], answer: 3, why: "Ndekọ nnwale na-edekọ ajụjụ ọ bụla, azịza ya, ọ gafere ma ọ bụ ọ dara, na ihe i doziri." },
            { objective: "O5", q: "N'oge nnwale, chatbot ahụ chepụtara ọnụ ahịa na-adịghị na faịlụ gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Tinye ọnụ ahịa ahụ na faịlụ ihe ọmụma ma ọ bụ ahịrị na-agwa ya ka o kwete na ọ maghị, wee nwalee ọzọ", "Malite ya otu o sila dị", "Hichapụ chatbot ahụ", "Hapụ ya; ndị ahịa agaghị ajụ"], answer: 0, why: "Ọtụtụ mmezi bụ eziokwu na-efu efu ma ọ bụ ahịrị ntụziaka, wee nwalee ọzọ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịmalite ya, ikesa ya na ime ka ọ dị ọhụrụ",
          minutes: 5,
          goal: "Kesaa chatbot ahụ ezi ndị ọrụ, nakọta echiche ha ma hazie usoro mmelite.",
          text: [
            "Ọtụtụ ngwa ịrụ chatbot na-ekwe ka ị kesaa chatbot site na link, ụfọdụ na-ekwekwa ka i tinye ya na weebụsaịtị. Malite n'obere: buru ụzọ kesaa ya ndị ahịa, ndị otu ma ọ bụ ndị ọrụ afọ ofufo ole na ole, ma gwa ha na ọ bụ ọhụrụ.",
            "Rịọ echiche ha: \"Ọ̀ zara ajụjụ gị? Gịnị ka o mehiere?\" Gụọ ezi mkparịta ụka ma ọ bụrụ na ngwa gị na-egosi ha, ma chọọ ajụjụ ọ na-enweghị ike ịza.",
            "Hazie usoro. Kwa ọnwa, ma ọ bụ oge ọ bụla oge mmeghe, ọnụ ahịa ma ọ bụ iwu gbanwere, melite faịlụ ihe ọmụma na ụbọchị ya. Chatbot ochie dị njọ karịa enweghị chatbot. Mee ka mmadụ dịrị maka ihe ọ bụla chatbot ahụ na-enweghị ike ime."
          ],
          steps: ["Kesaa link chatbot ahụ mmadụ atọ ruo ise.", "Jụọ ha ajụjụ echiche abụọ.", "Tinye azịza na-efu efu na faịlụ ihe ọmụma.", "Tinye ihe ncheta mmelite kwa ọnwa na kalenda gị.", "Hụ na ndị mmadụ nwere ike ịkpọtụrụ mmadụ mgbe niile."],
          words: [["Ịmalite (launch)", "ime ka ihe dịrị ndị mmadụ iji."], ["Echiche (feedback)", "ihe ndị ọrụ na-agwa gị gbasara ihe rụrụ ọrụ na ihe na-arụghị."]],
          slides: [
            { title: "Malite n'obere", bullets: ["Kesaa link ahụ mmadụ ole na ole", "Gwa ha na ọ bụ ọhụrụ"] },
            { title: "Rịọ echiche", bullets: ["\"Ọ̀ zara ajụjụ gị?\"", "\"Gịnị ka o mehiere?\""] },
            { title: "Mee ka ọ dị ọhụrụ", bullets: ["Melite kwa ọnwa ma ọ bụ mgbe eziokwu gbanwere", "Gbanwee ụbọchị dị na faịlụ ahụ", "Mmadụ dị mgbe niile"] }
          ],
          tryIt: "Ọrụ ikpeazụ: kesaa chatbot gị e nwalere opekata mpe otu onye. Dee echiche ha, mee otu mmezi, ma tinye ihe ncheta kwa ọnwa maka imelite faịlụ ihe ọmụma.",
          youCanNow: "ịrụ, ịnwale, ịmalite ma na-elekọta chatbot AI n'ede koodu maka ezi otu.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere i ji ebu ụzọ kesaa chatbot ọhụrụ naanị mmadụ ole na ole?", options: ["Ka ọ bụrụ ihe nzuzo", "N'ihi na link na-arụ naanị maka mmadụ ise", "Ịchọta nsogbu na inweta echiche tupu onye ọ bụla eji ya", "Ka ị ghara imelite ya mgbe ọ bụla"], answer: 2, why: "Ịmalite n'obere na-enyere gị aka ijide nsogbu na ịnakọta echiche n'enweghị nsogbu." },
            { objective: "O6", q: "Ụlọ achịcha gị na-agbanwe oge mmeghe ya izu na-abịa. Gịnị ka ị ga-eme na chatbot ahụ?", options: ["Ọ dịghị ihe; ọ ga-amụta n'onwe ya", "Melite faịlụ ihe ọmụma na ụbọchị ya", "Gbanyụọ chatbot ahụ ruo mgbe ebighị ebi", "Gwa ndị ahịa ka ha ghara ige ya ntị"], answer: 1, why: "Melite faịlụ ahụ na ụbọchị ya oge ọ bụla eziokwu gbanwere; chatbot ochie dị njọ karịa enweghị chatbot." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịnwale, ịmalite na ime ka ọ ka mma",
        questions: [
          { objective: "O4", q: "Gịnị bụ iwu nchekwa (guardrail)?", options: ["Ngere gburugburu ọfịs", "Nkwalite a na-akwụ ụgwọ", "Ụdị faịlụ ihe ọmụma", "Iwu na-eme ka ngwa AI nọgide n'isiokwu ya ma dịrị nchebe"], answer: 3, why: "Iwu nchekwa bụ iwu dị na ntụziaka." },
          { objective: "O4", q: "Onye ọrụ rịọrọ chatbot ụlọ achịcha gị ndụmọdụ ahụike gbasara mmeghachi omume allergy. Gịnị ka o kwesịrị ime?", options: ["Jụ ma duga ha n'aka dọkịta, ma ọ bụ 911 n'ihe mberede", "Kọwaa ọrịa ahụ", "Rịọ nọmba inshọransị ha", "Gbanwee isiokwu gaa na keki"], answer: 0, why: "Chatbot ekwesịghị inye ndụmọdụ ahụike, o kwesịkwara iziga ihe mberede na 911." },
          { objective: "O5", q: "Gịnị mere i ji ajụ ajụjụ na-ADỊGHỊ na faịlụ ihe ọmụma n'oge nnwale?", options: ["Ime ka ọ dị nwayọọ", "Ihichapụ faịlụ ahụ", "Ịlele na ọ na-ekweta na ọ maghị kama ịchepụta ihe", "Ọ dịghị ihe kpatara ya"], answer: 2, why: "Chatbot dị mma na-ekwu na ọ maghị nke ọma kama ịchepụta azịza." },
          { objective: "O6", q: "Chatbot ahụ na-enye oge mmeghe nke ọnwa gara aga. Gịnị bụ mmezi ya?", options: ["Mechie azụmahịa ahụ", "Gwa ndị ọrụ ka ha kọọ", "Naanị tinye iwu nchekwa ndị ọzọ", "Melite faịlụ ihe ọmụma na ụbọchị ya"], answer: 3, why: "Eziokwu ochie na-esi na faịlụ ochie." },
          { objective: "O6", q: "Kedu ụzọ kacha mma isi malite ya?", options: ["Tinye ya ebe niile n'enweghị nnwale", "Zoo ya", "Buru ụzọ kesaa mmadụ ole na ole ma rịọ echiche ha", "Wepụ ụzọ isi kpọtụrụ mmadụ"], answer: 2, why: "Mmalite obere na-ejide nsogbu tupu ọtụtụ mmadụ ahụ ha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịrụ Chatbot AI (Ọ Dịghị Mkpa Ide Koodu)",
    questions: [
      { objective: "O1", q: "Chatbot AI maka otu ka a kacha kọwaa dị ka:", options: ["Onye nnabata mmadụ", "Ngwa enyemaka AI e hiwere maka otu ebumnuche", "Ọrụ na-ebu weebụsaịtị (hosting)", "Usoro ịkwụ ụgwọ"], answer: 1, why: "Ọ bụ ngwa enyemaka lekwasịrị anya n'otu ọrụ." },
      { objective: "O1", q: "Kedu ọrụ mbụ chatbot nwere ize ndụ kacha nta?", options: ["Oge mmeghe ebe enyemaka nri na ihe a ga-eweta", "Ndụmọdụ iwu", "Ịchọpụta ọrịa", "Ndụmọdụ itinye ego (investment)"], answer: 0, why: "Oge mmeghe na ntụziaka dị mfe bụ eziokwu enweghị ize ndụ dị ukwuu." },
      { objective: "O1", q: "Ebee ka ị ga-ahụ ajụjụ chatbot ahụ kachasị?", options: ["Ndepụta ọ bụla n'ịntanetị", "Nkọ AI", "Ajụjụ ndị mmadụ na-ajụ gị ugbu a", "Mgbasa ozi onye asọmpi"], answer: 2, why: "Ezi ajụjụ na-egosi ezi ọrụ ahụ." },
      { objective: "O2", q: "Kedu ụzọ isi rụọ chatbot n'ede koodu?", options: ["Custom GPT, Gemini Gem ma ọ bụ agent nke Copilot Studio", "Ide mgbawa kọmputa (chip)", "Iji akụkụ rụọ server", "Iziga akwụkwọ ozi n'ọfịs nzipu ozi"], answer: 0, why: "Ngwa ndị a na-ekwe ka ị rụọ site na ntụziaka na faịlụ, n'enweghị koodu." },
      { objective: "O2", q: "Menu na atụmatụ plan na ngwa chatbot na-agbanwe. Ebee ka ị ga-ekwenye nzọụkwụ ugbu a?", options: ["Asịrị", "Naanị vidiyo ochie", "Kọọ", "Peeji enyemaka nke ngwa ahụ"], answer: 3, why: "Peeji enyemaka nke ngwa ahụ nwere nzọụkwụ ugbu a." },
      { objective: "O2", q: "Kedu ahịrị kwesịrị ịdị na ntụziaka chatbot?", options: ["\"Lee okwuntughe onye nlekọta.\"", "\"Ị bụ onye enyemaka nke Sunrise Food Pantry.\"", "\"Leghara ajụjụ niile anya.\"", "\"Kọọ mgbe niile ma ọ bụrụ na ị maghị.\""], answer: 1, why: "Ịkọwa ọrụ ya bụ akụkụ dị mkpa nke ntụziaka." },
      { objective: "O2", q: "Ụdị ide ihe nke enyi, mkpụmkpụ, okwu dị mfe ka a na-akpọ nke chatbot ahụ:", options: ["Mbulite", "Ụda", "Iwu nchekwa", "Mmalite"], answer: 1, why: "Ụda bụ otu ederede si ada." },
      { objective: "O3", q: "Gịnị kwesịrị ịdị n'elu faịlụ ihe ọmụma?", options: ["Nọmba ekwentị ndị ahịa", "Okwuntughe", "Ọ dịghị ihe", "Ụbọchị na aha otu ahụ"], answer: 3, why: "Ụbọchị ahụ na-agwa gị mgbe ọ chọrọ mmelite." },
      { objective: "O3", q: "Gịnị mere i ji ewepụ ozi nzuzo na faịlụ ihe ọmụma?", options: ["Ihe ọ bụla dị n'ime ya nwere ike ịpụta n'azịza", "Ọ na-eme ka faịlụ ahụ dị mkpụmkpụ nke ukwuu", "AI enweghị ike ịgụ aha", "Ọ dị mma itinye ya"], answer: 0, why: "Chatbot ahụ nwere ike ikwughachi ihe dị na faịlụ ahụ." },
      { objective: "O3", q: "Ụdị dị mma maka faịlụ ihe ọmụma bụ:", options: ["Otu paragraf ogologo n'enweghị isiokwu", "Foto nke bọọdụ ọcha", "Ajụjụ ọ bụla kachasị na azịza ya n'okpuru ya", "Ndepụta okwuntughe"], answer: 2, why: "Ụdị ajụjụ na azịza dị mfe maka AI iji." },
      { objective: "O4", q: "Kedu iwu nchekwa ọ ghaghị inwe?", options: ["Dee abụ mgbe niile", "Zaa isiokwu ọ bụla n'ụwa", "Mee ka à ga-asị na ị bụ mmadụ", "Arịọla nọmba kaadị, ụlọ akụ ma ọ bụ Social Security mgbe ọ bụla"], answer: 3, why: "Chatbot ekwesịghị ịnakọta nọmba nzuzo mgbe ọ bụla." },
      { objective: "O4", q: "Chatbot ahụ ọ̀ kwesịrị ikwu na ọ bụ AI?", options: ["Mba, mee ka à ga-asị na ọ bụ mmadụ", "Naanị ma ọ bụrụ na a jụrụ ya ugboro atọ", "Ee, eziokwu na-ewulite ntụkwasị obi", "Naanị na ngwụsị izu"], answer: 2, why: "Ime ka o doo anya na ọ bụ AI bụ eziokwu, ọ na-ewulitekwa ntụkwasị obi." },
      { objective: "O4", q: "Mmadụ gwara chatbot ahụ na o nwere ihe mberede. O kwesịrị:", options: ["Ịrịọ adreesị ya na nọmba kaadị ya", "Ịgwa ya ka ọ kpọọ 911", "Ileghara ya anya", "Ịgbanwe isiokwu"], answer: 1, why: "Ihe mberede na-aga na 911." },
      { objective: "O5", q: "Ajụjụ nnwale ole, opekata mpe, ka ihe ọmụmụ a na-atụ aro?", options: ["Iri", "Otu", "Efu", "Puku atọ"], answer: 0, why: "Opekata mpe ajụjụ iri na-ekpuchi ajụjụ nkịtị na ajụjụ aghụghọ." },
      { objective: "O5", q: "\"Dee m abụ\" e zigara chatbot ebe enyemaka nri na-anwale ma ọ:", options: ["Maara oge mmeghe", "Nwere ike ibulite faịlụ", "Na-anọgide n'isiokwu ya", "Nwere okwuntughe"], answer: 2, why: "Ọ bụ arịrịọ pụrụ n'isiokwu; chatbot ahụ kwesịrị iji nkwanye ugwu jụ ya." },
      { objective: "O5", q: "Ndekọ nnwale na-edekọ:", options: ["Ajụjụ ahụ, azịza ya, ọ gafere ma ọ bụ ọ dara, na mmezi", "Naanị azịza ndị dị mma", "Okwuntughe ndị ahịa", "Ihu igwe"], answer: 0, why: "Ọ na-edekọ nnwale ọ bụla na ihe ị gbanwere." },
      { objective: "O5", q: "Mgbe i doziri nnwale dara, ị kwesịrị:", options: ["Ihichapụ ndekọ nnwale", "Ịmalite ya n'eleghị ya", "Iwepụ iwu nchekwa niile", "Ịnwaleghachi ajụjụ ahụ"], answer: 3, why: "Ịnwaleghachi na-egosi na mmezi ahụ rụrụ ọrụ." },
      { objective: "O5", q: "Gịnị mere onye ọzọ ji ekwesị ịnwale chatbot ahụ?", options: ["Iwu chọrọ ya", "Ha na-ajụ ihe ị na-atụghị anya ya", "Ime ka ọ dị nwayọọ", "Ka ị ghara ime ya"], answer: 1, why: "Anya ọhụrụ na-ahụ ajụjụ ọhụrụ na-adịghị ahụkarị." },
      { objective: "O6", q: "Ugboro ole ka ị kwesịrị imelite faịlụ ihe ọmụma?", options: ["Ọ dịghị mgbe", "Kwa ọnwa, ma ọ bụ oge ọ bụla eziokwu gbanwere", "Otu ugboro n'afọ iri", "Naanị mgbe AI rịọrọ"], answer: 1, why: "Eziokwu ochie na-akpata azịza ezighi ezi." },
      { objective: "O6", q: "Ọbụlagodi na chatbot dị, ndị mmadụ kwesịrị inwe ike mgbe niile:", options: ["Ịhụ okwuntughe ndị ọrụ", "Ịgbanwe ntụziaka", "Inweta ndụmọdụ iwu site na ya", "Ịkpọtụrụ mmadụ"], answer: 3, why: "Mmadụ dị n'azụ na-arụ ihe chatbot ahụ na-enweghị ike ime." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 2, 5, 8, 9, 10, 12, 14, 15, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ọrụ doro anya", objective: "O1", notYet: "Enweghị ahịrịokwu ọrụ, ma ọ bụ ọrụ ahụ gụnyere ndụmọdụ dị ize ndụ.", meets: "Ọrụ n'otu ahịrịokwu maka ajụjụ dị warara na-enweghị ize ndụ dị ukwuu.", exceeds: "Ajụjụ iri ọ na-ekpuchi sitere n'ezi ozi ndị mmadụ zitere." },
      { name: "Ntụziaka na iwu nchekwa", objective: "O4", notYet: "Ntụziaka enweghị ọrụ ma ọ bụ iwu \"emela\" ọ bụla.", meets: "Ọrụ, ndị ọ na-agwa okwu, ihe ọ na-aza, ụda na oke, gbakwunyere iwu nchekwa maka nọmba nzuzo, ndụmọdụ, ikwu na ọ bụ AI na ihe mberede.", exceeds: "Gụnyere ozi mmeghe na-agwa ndị mmadụ na ọ bụ AI na ihe o nwere ike inyere aka." },
      { name: "Faịlụ ihe ọmụma", objective: "O3", notYet: "Enweghị faịlụ, ma ọ bụ faịlụ ahụ nwere ozi nzuzo.", meets: "Faịlụ nwere otu peeji na ụbọchị, nwere ajụjụ kachasị na azịza ha, n'enweghị ozi nzuzo.", exceeds: "E kewara eziokwu n'okpuru isiokwu doro anya, onye nke abụọ lelekwara ha." },
      { name: "Ndekọ nnwale", objective: "O5", notYet: "Ajụjụ erughị iri, ma ọ bụ e dozighị ihe dara.", meets: "Opekata mpe ajụjụ iri, gụnyere ndị pụrụ n'isiokwu na ndị dị ize ndụ, nwere mmezi na nnwaleghachi.", exceeds: "Onye ọzọ nwalekwara ya, ajụjụ ha dịkwa na ndekọ ahụ." },
      { name: "Echiche na nlekọta", objective: "O6", notYet: "E kesaghị ya, ma ọ bụ e deghị echiche ọ bụla.", meets: "E kesara otu onye, e dere echiche ha, e tinyekwara ụzọ isi kpọtụrụ mmadụ.", exceeds: "E tinyere ihe ncheta mmelite kwa ọnwa, e mekwara otu mmezi site n'echiche ahụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu ndị malitere chatbot n'ime ụbọchị 30 (nnyocha nsochi)",
      "Awa a chekwara kwa izu n'ịza ajụjụ a na-ajụghachi, dị ka onye nwe ya kọrọ",
      "Chatbot ka a na-emelite ụbọchị 90 ka e mesịrị, n'enweghị akụkọ ozi nzuzo e kesara"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị (ekwentị na-arụ ọrụ maka ụfọdụ ngwa ịrụ chatbot)",
      "Ngwa ịrụ chatbot n'ede koodu dị ka custom GPT, Gemini Gem ma ọ bụ agent nke Copilot Studio (lelee plan ngwa ahụ ugbu a)",
      "Google Doc ma ọ bụ akwụkwọ Word maka faịlụ ihe ọmụma na ndekọ nnwale",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere oge ịnwale na ikesa chatbot ahụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; rụọ chatbot ọmụmaatụ n'ihuenyo a na-ekerịta.",
      "Gwa ndị na-amụ ihe ka ha weta ezi ajụjụ iri ha kachasị site na email, ozi ederede ma ọ bụ nkọwa.",
      "Lelee faịlụ ihe ọmụma ọ bụla maka ozi nzuzo tupu e bulite ya.",
      "Kee ndị na-amụ ihe abụọ abụọ ka ha nwalee chatbot ibe ha n'ajụjụ pụrụ n'isiokwu na ajụjụ dị ize ndụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
