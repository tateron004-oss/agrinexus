"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-restaurants.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const FDA_ALLERGENS = { name: "FDA: Ihe nfụkasị nri (ihe nfụkasị nri itoolu ndị bụ isi)", url: "https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies" };
const FDA_CODE = { name: "FDA: Food Code (iwu nchekwa nri)", url: "https://www.fda.gov/food/retail-food-protection/fda-food-code" };
const FTC_REVIEWS = { name: "FTC: Iwu gbasara nyocha na ama ndị ahịa, ajụjụ na azịza", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };

module.exports = {
  id: "smallbiz-ai-restaurants-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-restaurants",
  category: "Small Business",
  name: "AI maka Ụlọ Nri",
  skills: "Ide nkọwa nri na menu, Ime chaatị ihe nfụkasị site na ntụziaka nri gị, Ime ndepụta nkwadebe na ndepụta ịzụ ihe, Ịhazi usoro oge ndị ọrụ, Ịza nyocha ndị ahịa, Ịhazi nri pụrụ iche",
  outcome: "iji AI rụọ ọrụ azụ ụlọ nke obere ụlọ nri ma ọ bụ ụgbọala na-ere nri: ide nkọwa nri na menu, ime chaatị ihe nfụkasị site na ntụziaka nri gị ma lelee ya, ime ndepụta nkwadebe na ndepụta ịzụ ihe site n'ihe ị rere, ịhazi usoro oge ndị ọrụ nke ziri ezi, na ịza nyocha ndị ahịa n'eziokwu.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe, ndị njikwa na ndị osi nri n'obere ụlọ nri, ụlọ kọfị, ụgbọala na-ere nri, ndị na-esi nri maka mmemme na kichin dị ka nke ụlọ. Ọtụtụ ụmụ akwụkwọ anyị na-elekọta ụlọ nri ezinụlọ na nke ndị obodo pere mpe nwe, ebe onye nwe ya na-esikwa nri, na-azụ ihe, ma na-aza ekwentị.",
    "Ị ga-eji ngwa enyemaka AI n'efu na spreadsheet (mpempe akwụkwọ ọnụọgụ) chekwaa oge n'ide ihe, ịhazi atụmatụ na akwụkwọ. Iwu nchekwa nri na ihe nfụkasị na-esi n'isi iyi gọọmentị na ngalaba ahụike obodo gị, ọ bụghị site n'AI; ihe ọmụmụ a na-egosi gị ebe ị ga-ele.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwugwu ụlọ nri: nkọwa menu maka nri ise, chaatị ihe nfụkasị maka nri ise ahụ e mere site n'ezi ntụziaka nri gị na akara ngwaahịa (label) i ji, nke gị onwe gị lelere megide ihe nfụkasị itoolu bụ isi nke FDA, ndepụta nkwadebe na ndepụta ịzụ ihe maka otu izu dabere n'ihe ị rere, usoro oge ndị ọrụ mbụ, na azịza nye otu ezigbo nyocha na otu nyocha ọjọọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe, ndị njikwa na ndị osi nri n'obere ụlọ nri, ụlọ kọfị, ụgbọala na-ere nri, ndị na-esi nri maka mmemme na kichin dị ka nke ụlọ. Ọtụtụ bụ nke ezinụlọ na nke ndị obodo pere mpe nwe, ebe onye nwe ya na-esikwa nri, na-azụ ihe, ma na-aza ekwentị.",
    startingPoint: "Ha maara isi nri, ilekọta oge ọrụ na ịnara ndị ahịa iwu. Ọtụtụ na-eji ekwentị na igwe ire ahịa (POS), mana ha enweghị ahụmahụ ma ọ bụ nwee ntakịrị n'iji ngwa enyemaka AI ma ọ bụ usoro mgbakọ (formula) na spreadsheet.",
    gap: "Ide ihe, ịhazi atụmatụ na akwụkwọ na-eri ọtụtụ awa onye nwe ya na-enweghị. Ndị na-amụ ihe kwesịrị iji AI chekwaa oge ahụ ma debe ozi ihe nfụkasị, iwu ọrụ na nyocha ka ha ziri ezi ma bụrụ eziokwu, n'ihi na mperi nwere ike imerụ onye ahịa ahụ ma ọ bụ mebie iwu.",
    constraints: [
      "Oge: ndị nwe na-arụ ọrụ ogologo oge, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Ngwaọrụ: ọtụtụ mgbe ekwentị ma ọ bụ otu kọmputa ọfịs ndị mmadụ na-ekerịta",
      "Iwu nchekwa nri na ihe nfụkasị na-esi na FDA na ngalaba ahụike obodo, ọ bụghị site n'AI",
      "Iwu ọrụ gbasara ezumike, oge ọrụ karịrị akarị (overtime) na ụmụaka na-arụ ọrụ dabere na steeti na obodo",
      "Nzuzo: etinyela nọmba Social Security, ụgwọ ọnwa ya na aha, ma ọ bụ ndetu nzuzo gbasara ndị ọrụ n'ime ngwa AI"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'iji ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ezi ihe e ji esi otu nri na otu e si esi ya", action: "ide obere nkọwa menu site n'enyemaka AI ma wepụ ihe ọ bụla na-abụghị eziokwu", standard: "ebe okwu ihe nri ọ bụla dabara na ntụziaka nri gị" },
    { id: "O2", condition: "Site n'iji ntụziaka nri gị na akara ngwaahịa nke ihe ị na-azụ", action: "ime chaatị ihe nfụkasị nke na-egosi ihe nfụkasị itoolu bụ isi nke FDA maka nri ọ bụla", standard: "ebe onye nke abụọ lelere nri ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị ọnụọgụ ihe ị na-ere kwa ụbọchị na ọnụọgụ efere n'otu batch", action: "ime ndepụta nkwadebe na ndepụta ịzụ ihe nke izu na spreadsheet", standard: "ebe a gbagoro batch n'ọnụọgụ zuru ezu ma gbanwee maka mmemme, ngwụcha izu na ihu igwe" },
    { id: "O4", condition: "Mgbe e nyere gị oge mmeghe gị, oge ọrụ, aha mbụ ndị ọrụ na oge ha nwere", action: "ịhazi usoro oge ndị ọrụ nke izu site n'AI ma lelee ya maka mkpuchi, ikpe ziri ezi na iwu ọrụ", standard: "n'etinyeghị ozi nzuzo onye ọrụ ọ bụla na prompt" },
    { id: "O5", condition: "Mgbe e nyere gị ajụjụ onye ahịa ma ọ bụ ezigbo nyocha ma ọ bụ nyocha ọjọọ", action: "ide azịza dị jụụ, nke eziokwu site n'enyemaka AI", standard: "ebe okwu ọ bụla bụ eziokwu, na-enweghị nyocha adịgboroja ma ọ bụ nke a kwụrụ ụgwọ" },
    { id: "O6", condition: "Mgbe e nyere gị ihe nri fọdụrụ ma ọ bụ nke oge ya ruru", action: "ịhazi nri pụrụ iche nke izu, gbakọọ ego efere ya ma tinye ọnụahịa nwere uru", standard: "ebe e lelere ihe nfụkasị ma tinye nri pụrụ iche ahụ na ndepụta nkwadebe" }
  ],
  chapters: [
    {
      name: "Isi 1: Menu, ihe nfụkasị na ndepụta kichin",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide nkọwa nri na menu",
          minutes: 5,
          goal: "Dee nkọwa menu dị mkpụmkpụ, na-atọ ụtọ ma ziri ezi site n'enyemaka AI.",
          text: [
            "Ezigbo nkọwa menu na-ekwu ihe dị n'ime nri ahụ, otu e si esi ya, na ihe mere o ji pụrụ iche, n'okwu 10 ruo 25. \"Jollof rice e siri nwayọọ na ofe tomato na ose, ya na plantain e ghere eghe na apata ọkụkọ e ghere n'ọkụ.\"",
            "Nye AI ezi ihe e ji esi ya na otu e si esi ya: \"Dee nkọwa menu nwere okwu 20 maka: curry anụ ewu, ya na ọkpụkpụ, e siri nwayọọ awa 4 ya na ose scotch bonnet, thyme na nduku bekee (potatoes), ya na osikapa ọcha. Okwu dị mfe, na-ekpo ọkụ n'obi.\" Rịọ ụdị atọ ma họrọ otu.",
            "Lelee ya. AI nwere ike itinye ihe nri ị na-anaghị eji (\"ya na cashew\") ma ọ bụ okwu dị ka \"organic\" ma ọ bụ \"e mere n'ụlọ anyị\" na-abụghị eziokwu. Ihe nri ezighi ezi na menu nwere ike imerụ onye nwere nfụkasị."
          ],
          steps: ["Dee ezi ihe e ji esi nri ahụ na otu e si esi ya.", "Rịọ AI ka o dee nkọwa atọ dị mkpụmkpụ.", "Họrọ otu ma lelee okwu ihe nri ọ bụla.", "Wepụ ihe ọ bụla na-abụghị eziokwu, dị ka \"organic\"."],
          words: [["Nkọwa menu", "obere ederede dị n'okpuru aha nri nke na-agwa ndị ahịa ihe ọ bụ."]],
          slides: [
            { title: "Ezigbo nkọwa", bullets: ["Ihe dị n'ime ya", "Otu e si esi ya", "Ihe mere o ji pụrụ iche, n'okwu 10 ruo 25"] },
            { title: "Nye AI ezi ntụziaka nri", bullets: ["Ihe e ji esi ya na otu e si esi ya", "Rịọ ụdị atọ"] },
            { title: "Lelee okwu ọ bụla", bullets: ["Ọ dịghị ihe nri ị na-anaghị eji", "Ọ dịghị \"organic\" ma ọ bụ \"e mere n'ụlọ anyị\" ma ọ bụrụ na ọ bụghị eziokwu", "Ihe nri ezighi ezi nwere ike imerụ ndị ahịa nwere nfụkasị"] }
          ],
          tryIt: "Dee nkọwa menu maka nri ise n'ime nri gị site n'enyemaka AI. Lelee okwu ihe nri ọ bụla megide ntụziaka nri gị.",
          youCanNow: "ide nkọwa menu ziri ezi ma na-adọta mmasị site n'enyemaka AI.",
          quickCheck: [
            { objective: "O1", q: "Kedu ihe atọ ezigbo nkọwa menu na-ekwu?", options: ["Ihe dị n'ime nri ahụ, otu e si esi ya, na ihe mere o ji pụrụ iche", "Ọnụahịa, aha onye siri ya na nha efere", "Kalori, onye na-ere ihe ahụ na ụbọchị", "Naanị aha nri ahụ n'akwụkwọ ozi ukwu"], answer: 0, why: "Nkuzi ahụ kwuru na ezigbo nkọwa na-ekwu ihe dị n'ime ya, otu e si esi ya na ihe mere o ji pụrụ iche." },
            { objective: "O1", q: "AI dere \"tortilla organic e mere n'ụlọ anyị\" mana ị na-azụ tortilla nkịtị. Gịnị ka ị ga-eme?", options: ["Hapụ ya n'ihi na ọ na-ada mma karịa", "Wepụ \"e mere n'ụlọ anyị\" na \"organic\" n'ihi na ha abụghị eziokwu", "Tinyekwuo okwu dị ka \"artisan\"", "Rịọ AI ka o dee ya n'akwụkwọ ozi ukwu"], answer: 1, why: "Okwu menu ga-abụrịrị eziokwu, ya mere ị na-ewepụ ihe ọ bụla AI tinyere nke ị na-anaghị eme." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ime chaatị ihe nfụkasị n'enweghị nsogbu",
          minutes: 6,
          goal: "Mee chaatị ihe nfụkasị site na ntụziaka nri gị na akara ngwaahịa, nke gị onwe gị lelere.",
          text: [
            "FDA depụtara ihe nfụkasị nri itoolu bụ isi: mmiri ara ehi (milk), akwa, azụ, azụ nwere okpokoro dị ka oporo na nshịkọ (crustacean shellfish), mkpụrụ osisi dị ka cashew (tree nuts), ahụekere, ọka wiit (wheat), soya na sesame (ịsa). Ndị ahịa nwere nfụkasị na-atụkwasị gị obi ka ị mara ihe dị n'ime nri ọ bụla.",
            "Mee chaatị: nri n'akụkụ aka ekpe gbadata, ihe nfụkasị itoolu ahụ n'elu gafee. Dejupụta ya site n'ezi ntụziaka nri gị NA akara ngwaahịa nke ihe niile ị na-azụ, n'ihi na ofe, ngwakọta ngwa nri na achịcha na-ezokarị ihe nfụkasị. AI nwere ike inyere gị aka ịhazi tebụl ahụ ma chetara gị ihe nri ndị na-enwekarị ihe nfụkasị, mana ọ maghị ngwaahịa ndị na-ere gị ihe. Gị na akara ngwaahịa gị maara.",
            "Melite chaatị ahụ mgbe ọ bụla ntụziaka nri ma ọ bụ onye na-ere gị ihe gbanwere. Kụziere ndị ọrụ ka ha kwuo \"Ka m lelee\" ma jụọ kichin, ha agaghị echeghị ihe. Ngalaba ahụike obodo gị na FDA Food Code nwere iwu gbasara nchekwa nri na ịmara ihe nfụkasị; lelee ihe metụtara ebe ị nọ."
          ],
          steps: ["Depụta nri gị na ihe ọ bụla e ji esi nke ọ bụla.", "Gụọ akara ngwaahịa nke ihe ọ bụla ị zụtara.", "Kaa akara ihe nfụkasị itoolu ahụ maka nri ọ bụla.", "Mee ka onye nke abụọ lelee chaatị ahụ.", "Melite ya mgbe ntụziaka nri ma ọ bụ ndị na-ere gị ihe gbanwere."],
          words: [["Ihe nfụkasị (allergen)", "nri nwere ike ịkpata mmeghachi ahụ siri ike n'ahụ ụfọdụ mmadụ."], ["Mmetụ nfụkasị (cross-contact)", "mgbe ihe nfụkasị batara na nri ọzọ site n'ebe, mmanụ ma ọ bụ ngwa a na-ekerịta."], ["Food Code", "iwu nchekwa nri nlereanya nke FDA nke ọtụtụ steeti na kaụntị na-anabata."]],
          slides: [
            { title: "Ihe nfụkasị itoolu bụ isi nke FDA", bullets: ["Mmiri ara ehi, akwa, azụ, azụ nwere okpokoro (oporo, nshịkọ)", "Mkpụrụ osisi (tree nuts), ahụekere, ọka wiit", "Soya, sesame"] },
            { title: "Mee chaatị site n'eziokwu", bullets: ["Nri n'akụkụ, ihe nfụkasị n'elu gafee", "Ntụziaka nri gị NA akara ngwaahịa ọ bụla", "AI na-ahazi tebụl; ọ maghị ndị na-ere gị ihe"] },
            { title: "Debe ya ka o ziri ezi", bullets: ["Onye nke abụọ na-elele ya", "Melite ya mgbe ntụziaka ma ọ bụ ndị na-ere gị ihe gbanwere", "Ndị ọrụ anaghị eche ihe: \"Ka m lelee\""] },
            { title: "Iwu ebe ị nọ", bullets: ["Ngalaba ahụike obodo gị", "FDA Food Code"] }
          ],
          sources: [FDA_ALLERGENS, FDA_CODE],
          tryIt: "Rịọ AI ka ọ hazie chaatị ihe nfụkasị tọgbọ chakoo maka nri ise, ya na ihe nfụkasị itoolu ahụ dị ka kọlụm. Dejupụta ya n'onwe gị site na ntụziaka nri gị na akara ngwaahịa, wee mee ka mmadụ lelee ya.",
          youCanNow: "ime ma debe chaatị ihe nfụkasị site na ntụziaka nri gị na akara ngwaahịa gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-aga n'elu chaatị ihe nfụkasị n'ime nkuzi a?", options: ["Ọnụahịa gị", "Aha ndị na-ere gị ihe", "Ihe nfụkasị itoolu bụ isi", "Aha ndị ọrụ gị"], answer: 2, why: "Nri na-aga n'akụkụ, ihe nfụkasị itoolu ahụ na-aga n'elu gafee." },
            { objective: "O2", q: "Onye na-ere gị ihe gbanwere ụdị ngwakọta ngwa nri ị na-eji. Gịnị ka ị ga-eme?", options: ["Ọ dịghị ihe, ngwakọta ngwa nri anaghị enwe ihe nfụkasị", "Jụọ AI ma ụdị ọhụrụ ahụ nwere ihe nfụkasị ma kwere ya", "Chere ruo mgbe onye ahịa jụrụ", "Gụọ akara ngwaahịa ọhụrụ ahụ ma melite chaatị ahụ"], answer: 3, why: "AI amaghị ngwaahịa ndị na-ere gị ihe; ị na-emelite chaatị ahụ site n'akara ngwaahịa ọhụrụ ahụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ndepụta nkwadebe na ndepụta ịzụ ihe site n'ihe ị rere",
          minutes: 5,
          goal: "Mee ndepụta nkwadebe na ndepụta ịzụ ihe nke izu site n'ọnụọgụ ihe ị rere.",
          text: [
            "Ịkwadebe karịa na-emebi nri; ịkwadebe ntakịrị na-eme ka ị kwuo \"ndo, o mechaala\". Malite site n'ọnụọgụ nri ọ bụla ị na-ere kwa ụbọchị. POS gị nwere ike igosi nke a ọtụtụ mgbe, ma ọ bụ debe obere ndekọ.",
            "Na spreadsheet: Nri, Ọnụọgụ a na-ere kwa ụbọchị, Efere n'otu batch, Batch a chọrọ. Wee depụta ihe nri dị n'otu efere ka ị hụ ihe ị ga-azụ. Rịọ AI enyemaka maka formula: \"Dee formula Google Sheets iji gbagoo batch a chọrọ: ọnụọgụ a na-ere kewara site n'efere n'otu batch.\" (=ROUNDUP(B2/C2,0) bụ otu ụzọ.)",
            "Gbanwee ya site n'ihe ị maara: ngwụcha izu, mmemme, ihu igwe, ezumike. AI nwere ike ịtụ aro otu ndepụta nkwadebe ga-adị na ndepụta nlele, mana ọnụọgụ gị na ahụmahụ gị na-ekpebi ọnụọgụ ahụ."
          ],
          steps: ["Nweta ọnụọgụ a na-ere kwa ụbọchị maka nri ọ bụla.", "Tinye efere n'otu batch ma gbakọọ batch site na ROUNDUP.", "Depụta ihe nri n'otu efere ma gbakọọ ihe niile ị ga-azụ.", "Gbanwee ya maka ngwụcha izu, mmemme na ihu igwe."],
          words: [["Ndepụta nkwadebe (prep list)", "ndepụta ihe kichin ga-akwadebe tupu oge ire nri."], ["Ọkwa par (par level)", "ọnụọgụ otu ihe ị chọrọ inwe na mmalite oge ire nri."], ["Batch", "otu oge isi nri nke na-enye ọnụọgụ efere a kara aka."]],
          slides: [
            { title: "Imebi nri na ọ gwụ", bullets: ["Ịkwadebe karịa na-emebi nri", "Ịkwadebe ntakịrị na-ewute ndị ahịa", "Malite site n'ihe ị na-ere maka nri ọ bụla"] },
            { title: "Mpempe nkwadebe dị mfe", bullets: ["Nri, ọnụọgụ a na-ere kwa ụbọchị, efere n'otu batch", "Batch = ROUNDUP(ọnụọgụ a rere / efere, 0)", "Ihe nri n'otu efere -> ndepụta ịzụ ihe"] },
            { title: "Jiri ihe ị maara", bullets: ["Ngwụcha izu, mmemme, ihu igwe", "AI na-enyere aka n'ọdịdị; gị na-ekpebi ọnụọgụ"] }
          ],
          tryIt: "Mee mpempe nkwadebe maka nri ise nwere ọnụọgụ a na-ere kwa ụbọchị, efere n'otu batch na formula ROUNDUP maka batch. Mee ya ka ọ bụrụ ndepụta ịzụ ihe maka otu izu.",
          youCanNow: "ime ndepụta nkwadebe na ndepụta ịzụ ihe site n'ọnụọgụ ihe ị rere n'onwe gị.",
          quickCheck: [
            { objective: "O3", q: "Kedu nsogbu ịkwadebe karịa na-akpata?", options: ["Nri na-emebi", "Otu nri na-agwụ", "Oge mmeghe ogologo karịa", "Ụgwọ ụlọ dị elu karịa"], answer: 0, why: "Nkuzi ahụ kwuru na ịkwadebe karịa na-emebi nri, ịkwadebe ntakịrị na-eme ka nri gwụ." },
            { objective: "O3", q: "Nnukwu ememe (festival) dị n'obodo na ngwụcha izu a. Gịnị ka ị ga-eme na ndepụta nkwadebe gị?", options: ["Jiri ọnụọgụ nkịtị otu o si dị", "Bulie ọnụọgụ ahụ elu dabere n'ihe ị maara", "Hapụ AI ka o kpebie ọnụọgụ n'enweghị mgbanwe", "Kwụsị ime ndepụta nkwadebe"], answer: 1, why: "Ị na-agbanwe ya maka mmemme, ngwụcha izu na ihu igwe, n'ihi na ahụmahụ gị na-ekpebi ọnụọgụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Menu, ihe nfụkasị na ndepụta kichin",
        questions: [
          { objective: "O1", q: "Nkọwa menu AI dere tinyere \"ya na cashew\" mana nri gị enweghị ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ na-ada mma", "Wepụ ya", "Tinye cashew", "Leghara ya anya"], answer: 1, why: "Ihe nri ezighi ezi nwere ike imerụ ndị ahịa nwere nfụkasị ma duhie onye ọ bụla." },
          { objective: "O2", q: "Ihe nfụkasị nri bụ isi ole ka FDA depụtara?", options: ["Iri abụọ", "Atọ", "Iri na anọ", "Itoolu"], answer: 3, why: "FDA depụtara itoolu, gụnyere sesame." },
          { objective: "O2", q: "Ebee ka ozi ihe nfụkasị dị na chaatị gị si?", options: ["Ntụziaka nri gị na akara ngwaahịa nke ihe ị na-azụ", "Ihe AI chere", "Menu onye asọmpi", "Ndị ahịa"], answer: 0, why: "Naanị ntụziaka nri gị na akara ngwaahịa na-egosi ihe dị n'ezie n'ime nri gị." },
          { objective: "O2", q: "Onye ahịa jụrụ ma otu nri nwere sesame, i jighịkwa n'aka. Ị ga:", options: ["Jụọ AI", "Chee na ọ dịghị", "Kwuo \"Ka m lelee\" ma jụọ kichin na chaatị", "Kwuo na ọ dị mma"], answer: 2, why: "Echela ihe mgbe ọ bụla gbasara ihe nfụkasị." },
          { objective: "O3", q: "Ị na-ere 22 kwa ụbọchị, otu batch na-enye 8. Site na ROUNDUP, batch ole?", options: ["2", "3", "4", "22"], answer: 1, why: "22 / 8 = 2.75, gbagoro ruo 3." }
        ]
      }
    },
    {
      name: "Isi 2: Ndị ọrụ, ndị ahịa na uto",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi usoro oge ndị ọrụ",
          minutes: 5,
          goal: "Hazie usoro oge nke izu site n'enyemaka AI, wee lelee ya megide iwu gị.",
          text: [
            "Nye AI eziokwu: oge mmeghe gị, ọnụọgụ mmadụ ị chọrọ n'oge ọrụ ọ bụla, oge onye ọrụ ọ bụla nwere na ọrụ ya, na iwu gị. \"Hazie usoro oge nke izu maka taqueria m, nke na-emeghe 11-9 Tuzde-Sọnde. Achọrọ m ndị osi nri 2 na ndị ọrụ n'ihu 2 n'oge nri ehihie na nri abalị. Nke a bụ oge ha nwere: [naanị aha mbụ].\"",
            "Lelee usoro ahụ n'onwe gị. Hụ na o ziri ezi, na-ekpuchi oge ọgba aghara, ma na-agbaso iwu ọrụ gbasara ezumike, overtime na ụmụaka na-arụ ọrụ. Iwu ndị ahụ dabere na steeti na obodo gị; lelee ngalaba ọrụ steeti gị ma ọ bụ onye ọkachamara. AI amaghị ha nke ọma.",
            "Etinyela nọmba Social Security, ụgwọ ọnwa ya na aha, ma ọ bụ ndetu nzuzo gbasara ndị ọrụ n'ime ngwa AI. Aha mbụ na oge ha nwere ezuola."
          ],
          steps: ["Depụta oge ọrụ na ndị mmadụ a chọrọ.", "Depụta ndị ọrụ site n'aha mbụ ya na oge ha nwere na ọrụ ha.", "Rịọ AI ka o dee usoro mbụ.", "Lelee ikpe ziri ezi, mkpuchi na iwu ọrụ nke steeti gị.", "Tinye usoro ikpeazụ ahụ ebe ndị ọrụ ga-ahụ ya."],
          words: [["Oge onye ọrụ nwere (availability)", "ụbọchị na oge onye ọrụ nwere ike ịrụ ọrụ."], ["Overtime", "awa ọrụ karịrị akarị nke iwu ọrụ nwere ike ịchọ ka a kwụọ ụgwọ dị elu."], ["Mkpuchi (coverage)", "inwe ndị ọrụ zuru ezu n'oge ọrụ ọ bụla."]],
          slides: [
            { title: "Nye AI eziokwu", bullets: ["Oge mmeghe na ndị ọrụ a chọrọ n'oge ọrụ ọ bụla", "Aha mbụ, oge ha nwere na ọrụ ha"] },
            { title: "Gị na-elele usoro ahụ", bullets: ["O ziri ezi ma na-ekpuchi oge ọgba aghara", "Ezumike, overtime na ụmụaka: lelee iwu steeti gị"] },
            { title: "Debe ozi ndị ọrụ na nzuzo", bullets: ["Ọ dịghị SSN ma ọ bụ ụgwọ ọnwa ya na aha", "Aha mbụ na oge ha nwere ezuola"] }
          ],
          tryIt: "Hazie usoro oge izu na-abịa site n'AI, jiri aha mbụ na oge ndị ọrụ nwere. Lelee mkpuchi na ikpe ziri ezi, ma dee ebe ị ga-elele iwu ezumike na overtime nke steeti gị.",
          youCanNow: "ịhazi usoro oge ndị ọrụ site n'AI ma lelee ya megide mkpa gị na iwu ọrụ.",
          quickCheck: [
            { objective: "O4", q: "Kedu eziokwu AI chọrọ iji hazie usoro oge?", options: ["Nọmba Social Security na ụgwọ ọnwa ndị ọrụ", "Naanị aha ụlọ nri ahụ", "Oge mmeghe gị, ndị mmadụ a chọrọ n'oge ọrụ ọ bụla, na oge ndị ọrụ nwere na ọrụ ha", "Ndetu nzuzo gbasara onye ọrụ ọ bụla"], answer: 2, why: "Oge mmeghe, mkpa oge ọrụ, oge ha nwere na ọrụ ha ezuola; ozi nzuzo na-anọ n'azụ." },
            { objective: "O4", q: "Usoro AI dere tinyere nwata dị afọ 16 n'oge ọrụ abalị. Gịnị ka ị ga-eme?", options: ["Tinye ya otu o si dị", "Jụọ AI ma ọ dị n'iwu ma kwere azịza ya", "Wepụ onye ọrụ ahụ n'usoro ruo mgbe ebighị ebi", "Lelee iwu steeti gị gbasara ụmụaka ma dozie usoro ahụ"], answer: 3, why: "Iwu gbasara ụmụaka dabere na steeti gị, ya mere ị na-elele ha ma dozie usoro ahụ n'onwe gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịza nyocha na ozi ndị ahịa",
          minutes: 5,
          goal: "Zaa nyocha na ajụjụ ndị ahịa na-ajụkarị ngwa ngwa ma n'eziokwu.",
          text: [
            "Ndị ahịa na-ajụ otu ihe ahụ: oge mmeghe, ebe ịdọba ụgbọala, ịdebe oche, isi nri maka mmemme, nri na-enweghị anụ (vegan), ihe nfụkasị. Jiri AI mee ka ezi azịza gị bụrụ obere azịza ị nwere ike ịmado. Maka ajụjụ gbasara ihe nfụkasị, zoo aka mgbe niile na chaatị ihe nfụkasị gị e lelere na ndị ọrụ gị.",
            "Maka nyocha: kele ezigbo nyocha nkenke ma kpọọ aha nri ahụ. Maka ndị ọjọọ, nọrọ jụụ, rịọ mgbaghara maka ihe merenụ, kwuo ihe ị na-edozi, ma kpọọ ha ka ha kpọtụrụ gị. Esela okwu n'ihu ọha. Hapụ AI ka o dee ụdị dị jụụ ma ọ bụrụ na iwe na-ewe gị, wee lelee na okwu ọ bụla bụ eziokwu.",
            "Edela nyocha adịgboroja mgbe ọ bụla, ma ọ bụ kwụọ ụgwọ naanị maka nyocha ọma. Iwu FTC gbasara nyocha ndị ahịa machibidoro nke a, gụnyere nyocha adịgboroja AI dere."
          ],
          steps: ["Dee ezi azịza nye ajụjụ ndị ahịa na-ajụkarị.", "Rịọ AI ka o mee obere azịza dị njikere ịmado.", "Jiri AI dee azịza nyocha n'udo, wee lelee ha.", "Emela nyocha adịgboroja ma ọ bụ zụta nyocha mgbe ọ bụla."],
          words: [["Nyocha (review)", "akara na okwu onye ahịa n'ihu ọha."], ["Isi nri maka mmemme (catering)", "inye nri maka mmemme n'èzí oge ire nri nkịtị n'ime ụlọ nri."]],
          slides: [
            { title: "Azịza dị njikere ịmado", bullets: ["Oge mmeghe, ebe ịdọba ụgbọala, ịdebe oche, catering", "Ajụjụ ihe nfụkasị: jiri chaatị gị e lelere"] },
            { title: "Azịza nyocha", bullets: ["Ọma: kele ha, kpọọ aha nri ahụ", "Ọjọọ: nọrọ jụụ, rịọ mgbaghara, dozie, kpọọ ha ka ha kpọtụrụ gị", "Lelee na okwu ọ bụla bụ eziokwu"] },
            { title: "Ọ dịghị nyocha adịgboroja", bullets: ["Iwu FTC machibidoro nyocha adịgboroja", "Gụnyere ndị AI dere"] }
          ],
          sources: [FTC_REVIEWS],
          tryIt: "Rịọ AI ka o dee azịza nye otu ezigbo nyocha na otu nyocha ọjọọ (nke ezi ma ọ bụ ọmụmaatụ, dị ka nri jụrụ oyi n'abalị Fraịde nwere ọgba aghara). Mee ka okwu ọ bụla bụrụ eziokwu ma dị ka okwu gị.",
          youCanNow: "ịza ajụjụ na nyocha ndị ahịa ngwa ngwa, n'udo ma n'eziokwu.",
          quickCheck: [
            { objective: "O5", q: "Olee otu ị ga-esi zaa ezigbo nyocha?", options: ["Kele ha nkenke ma kpọọ aha nri ahụ", "Leghara ya anya", "Nye ha ego maka nyocha ọzọ", "Dee ogologo akụkọ gbasara ụlọ nri gị"], answer: 0, why: "Nkuzi ahụ kwuru ka i kele ezigbo nyocha nkenke ma kpọọ aha nri ahụ." },
            { objective: "O5", q: "Iwe na-ewe gị maka nyocha ọjọọ na-ezighi ezi. Gịnị ka ị ga-eme?", options: ["Gị na onye ahịa ahụ sere okwu n'ihu ọha", "Hapụ AI ka o dee azịza dị jụụ, wee lelee na okwu ọ bụla bụ eziokwu", "Tinye nyocha ọma adịgboroja iji zoo ya", "Hichapụ peeji azụmahịa gị"], answer: 1, why: "AI nwere ike inyere gị aka ịnọ jụụ, ị na-elelekwa na azịza ahụ bụ eziokwu; ị naghị ese okwu n'ihu ọha ma ọ bụ mee nyocha adịgboroja." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịhazi nri pụrụ iche site n'ihe i nwere",
          minutes: 5,
          goal: "Hazie nri pụrụ iche nke izu nke na-ebelata imebi nri ma na-enye uru.",
          text: [
            "Nri pụrụ iche (special) nwere ike ire ihe fọdụrụ tupu ọ mebie, nwalee nri ọhụrụ ma kpọghachi ndị ahịa na-abịa mgbe niile. Lee ihe ị zụtara karịa ma ọ bụ ihe oge ya ruru.",
            "Jụọ AI: \"Enwere m plantain, agwa ojii (black beans) na apata ọkụkọ fọdụrụ n'izu a. Tụọ aro nri pụrụ iche atọ dabara na menu Caribbean m ma na-eji ihe ndị a kachasị.\" Họrọ otu, gbakọọ ego ya (ihe nri n'otu efere), ma tinye ọnụahịa nwere uru.",
            "Dee nkọwa nri pụrụ iche ahụ, lelee ihe nfụkasị ya site n'usoro chaatị gị, tinye ya na ndepụta nkwadebe gị, ma tinye ya n'ịntanetị ya na foto ezi nri ahụ."
          ],
          steps: ["Depụta ihe nri fọdụrụ ma ọ bụ nke oge ya ruru.", "Rịọ AI echiche nri pụrụ iche dabara na menu gị.", "Gbakọọ ego efere ma tinye ọnụahịa nwere uru.", "Lelee ihe nfụkasị ma tinye ya na ndepụta nkwadebe.", "Tinye ya n'ịntanetị ya na ezi foto."],
          words: [["Ego efere (plate cost)", "ego ihe nri dị n'otu efere."], ["Pasentị ego nri (food cost percentage)", "ego efere kewara site n'ọnụahịa menu, mụbaa ya na 100."]],
          slides: [
            { title: "Ihe mere nri pụrụ iche", bullets: ["Jiri ihe fọdụrụ tupu ọ mebie", "Nwalee nri ọhụrụ", "Kpọghachi ndị ahịa na-abịa mgbe niile"] },
            { title: "AI maka echiche", bullets: ["Depụta ihe fọdụrụ gị", "Rịọ nri pụrụ iche dabara na menu gị"] },
            { title: "Tupu i tinye ya", bullets: ["Gbakọọ ego efere ma tinye ọnụahịa", "Lelee ihe nfụkasị; tinye ya na ndepụta nkwadebe", "Jiri ezi foto"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee ngwugwu ụlọ nri gị: nkọwa menu ise, chaatị ihe nfụkasị site na ntụziaka nri gị na akara ngwaahịa, ndepụta nkwadebe na ịzụ ihe nke otu izu, usoro oge mbụ, azịza nyocha abụọ, na otu nri pụrụ iche ya na ego efere ya.",
          youCanNow: "iji AI n'atụmatụ, akwụkwọ na mkparịta ụka ndị ahịa nke ụlọ nri gị, n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O6", q: "Kedu otu ihe mere a ga-eji mee nri pụrụ iche?", options: ["Ịbulite ọnụahịa ihe niile", "Iji awa ndị ọrụ mee ihe", "Ire ihe fọdụrụ tupu ọ mebie", "Ịghara ilele ihe nfụkasị"], answer: 2, why: "Nri pụrụ iche nwere ike ire ihe fọdụrụ, nwalee nri ọhụrụ ma kpọghachi ndị ahịa na-abịa mgbe niile." },
            { objective: "O6", q: "AI tụrụ aro nri pụrụ iche atọ site na plantain fọdụrụ gị. Gịnị ka ị ga-eme ọzọ?", options: ["Tinye ha atọ n'ịntanetị ozugbo ya na foto a zụtara", "Rịọ AI ka o tinye ọnụahịa", "Hapụ ịgbakọ ego n'ihi na ọ bụ naanị maka otu izu", "Họrọ otu, gbakọọ ego efere ma tinye ọnụahịa nwere uru"], answer: 3, why: "Ị na-agbakọ ego efere ma tinye ọnụahịa nwere uru, wee lelee ihe nfụkasị ma tinye ya na ndepụta nkwadebe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ndị ọrụ, ndị ahịa na uto",
        questions: [
          { objective: "O4", q: "Ebee ka ị ga-elele iwu ezumike na overtime?", options: ["Ngalaba ọrụ steeti gị ma ọ bụ onye ọkachamara", "Usoro AI dere", "Onye ahịa", "Ozi na soshal midia"], answer: 0, why: "Iwu ọrụ dabere na steeti na obodo gị." },
          { objective: "O4", q: "Kedu ozi onye ọrụ kwesịrị ịbanye na prompt usoro oge AI?", options: ["Adreesị ụlọ", "Nọmba Social Security", "Ụgwọ ọnwa ya na aha", "Aha mbụ na oge ha nwere"], answer: 3, why: "Naanị ihe a chọrọ, ọ dịghị ihe nzuzo." },
          { objective: "O5", q: "Onye ahịa zitere ozi na-ajụ ma otu nri enweghị ahụekere. Azịza gị ga-adabere na:", options: ["Ihe AI chere", "Chaatị ihe nfụkasị gị e lelere na ndị ọrụ gị", "Foto menu", "Naanị ihe i chetara"], answer: 1, why: "Azịza gbasara ihe nfụkasị na-esi na chaatị gị e lelere." },
          { objective: "O5", q: "N'okpuru iwu FTC, kedu nke a machibidoro?", options: ["Iji AI dee nyocha adịgboroja", "Ịkele onye dere nyocha", "Ịza nyocha ọjọọ", "Ịrịọ ndị ahịa nyocha nke eziokwu"], answer: 0, why: "A machibidoro nyocha adịgboroja, gụnyere ndị AI dere." },
          { objective: "O6", q: "Nri pụrụ iche na-eji ihe nri ruru $3.50 ma a na-ere ya $14. Gịnị bụ pasentị ego nri?", options: ["14%", "25%", "35%", "50%"], answer: 1, why: "3.50 / 14 = 0.25, ya bụ 25%." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ụlọ Nri",
    questions: [
      { objective: "O1", q: "Ezigbo nkọwa menu dị ihe dị ka:", options: ["Okwu 200", "Okwu 10 ruo 25", "Otu mkpụrụ akwụkwọ", "Peeji zuru ezu"], answer: 1, why: "A na-agụ nkọwa dị mkpụmkpụ ngwa ngwa." },
      { objective: "O1", q: "Gịnị ka ị na-enye AI iji dee nkọwa menu?", options: ["Ọ dịghị ihe", "Ozi ụlọ akụ gị", "Aha ndị ahịa", "Ezi ihe e ji esi ya na otu e si esi ya"], answer: 3, why: "Ezi eziokwu na-eme ka nkọwa zie ezi." },
      { objective: "O1", q: "Gịnị mere ị ga-eji lelee okwu ihe nri ọ bụla AI dere?", options: ["Ọ dịghị mkpa", "Ime ka ọ dị ogologo", "Maka nsụpe naanị", "Ihe nri ezighi ezi nwere ike imerụ onye ahịa nwere nfụkasị"], answer: 3, why: "Izi ezi bụ okwu nchekwa." },
      { objective: "O2", q: "Kedu nke bụ otu n'ime ihe nfụkasị itoolu bụ isi nke FDA?", options: ["Osikapa", "Sesame", "Ọka", "Ọkụkọ"], answer: 1, why: "A gbakwụnyere sesame dị ka nke itoolu." },
      { objective: "O2", q: "Gịnị mere ị ga-eji gụọ akara ngwaahịa nke ihe ọ bụla ị zụtara?", options: ["Maka egwuregwu", "Ịchọta ọnụahịa", "Ofe na ngwakọta nwere ike izo ihe nfụkasị", "Ọ dịghị mkpa"], answer: 2, why: "Ihe nfụkasị zoro ezo na-adịkarị n'ihe nri a kwadebere akwadebe." },
      { objective: "O2", q: "Olee mgbe ị ga-emelite chaatị ihe nfụkasị gị?", options: ["Mgbe ntụziaka nri ma ọ bụ onye na-ere gị ihe gbanwere", "Otu ugboro n'afọ iri", "Mgbe ọ bụla", "Naanị mgbe mmadụ mere mkpesa"], answer: 0, why: "Mgbanwe nwere ike itinye ihe nfụkasị." },
      { objective: "O2", q: "Gịnị bụ mmetụ nfụkasị (cross-contact)?", options: ["Oku ekwentị", "Ndị ọrụ abụọ na-akparịta ụka", "Ihe nfụkasị na-abanye na nri ọzọ site na ngwa ma ọ bụ mmanụ a na-ekerịta", "Mgbanwe menu"], answer: 2, why: "Ebe a na-ekerịta nwere ike ịgbasa ihe nfụkasị." },
      { objective: "O2", q: "Onye na-etinye iwu nchekwa nri maka ụlọ nri gị?", options: ["Ngalaba ahụike obodo gị, nke na-adaberekarị na FDA Food Code", "AI", "Ndị ahịa gị", "Saịtị nyocha"], answer: 0, why: "Ụlọ ọrụ gọọmentị na-etinye iwu ahụ." },
      { objective: "O3", q: "Ndepụta nkwadebe bụ:", options: ["Usoro oge ndị ọrụ", "Ihe kichin ga-akwadebe tupu oge ire nri", "Nyocha", "Fọm ụtụ isi"], answer: 1, why: "Ọ na-eduzi nkwadebe kichin." },
      { objective: "O3", q: "=ROUNDUP(B2/C2,0) na-enye:", options: ["Ihe nfụkasị", "Uru", "Awa ndị ọrụ", "Batch zuru ezu a chọrọ, e gbagoro elu"], answer: 3, why: "Ọ na-agbago ọnụọgụ batch elu." },
      { objective: "O3", q: "Onye na-ekpebi ọnụọgụ nkwadebe ikpeazụ?", options: ["Gị, site n'ọnụọgụ gị na ahụmahụ gị", "Naanị AI", "Onye na-ere gị ihe", "Ndị ahịa"], answer: 0, why: "AI na-enyere aka n'ọdịdị; gị na-ekpebi ọnụọgụ." },
      { objective: "O3", q: "Kedu nke bụ ezigbo ihe mere a ga-eji gbanwee nkwadebe?", options: ["Ọ dịghị ihe", "Ụdị mkpụrụ akwụkwọ ọhụrụ", "AI kwuru otu ahụ", "Mmemme obodo na ngwụcha izu a"], answer: 3, why: "Mmemme na-agbanwe ọnụọgụ ndị ahịa chọrọ." },
      { objective: "O4", q: "Usoro AI dere nyere otu onye ọrụ oge ọrụ 7. Ị ga:", options: ["Leghara ya anya", "Tinye ya", "Lelee ikpe ziri ezi na iwu ọrụ, wee dozie ya", "Gwa onye ọrụ ahụ ka ọ kwụsị ọrụ"], answer: 2, why: "Ị na-elele usoro ọ bụla AI dere." },
      { objective: "O4", q: "AI ọ bụ isi iyi a pụrụ ịtụkwasị obi maka iwu overtime nke steeti gị?", options: ["Ee, mgbe niile", "Mba, lelee ngalaba ọrụ steeti", "Naanị na ngwụcha izu", "Naanị maka ụmụaka"], answer: 1, why: "Iwu ọrụ chọrọ isi iyi gọọmentị." },
      { objective: "O5", q: "Nyocha ọjọọ na-eme mkpesa na nri jụrụ oyi. Ezigbo azịza:", options: ["Na-enye ego maka nyocha ka mma", "Na-ese okwu n'ihu ọha", "Na-ekesa ozi onye ahịa ahụ", "Na-arịọ mgbaghara, na-ekwu ihe ị na-edozi, na-akpọ ha ka ha kpọtụrụ gị"], answer: 3, why: "Azịza dị jụụ na nke eziokwu na-ewulite ntụkwasị obi." },
      { objective: "O5", q: "Ịkwụ ndị ahịa ụgwọ naanị ma ọ bụrụ na ha nyere kpakpando 5 bụ:", options: ["Ihe a chọrọ", "Ahịa ọgụgụ isi", "Ihe a machibidoro n'okpuru iwu nyocha FTC", "Ọ dị mma"], answer: 2, why: "A machibidoro onyinye e jikọtara na nyocha ọma." },
      { objective: "O6", q: "Ezigbo ihe e ji nri pụrụ iche eme bụ:", options: ["Iji ihe fọdụrụ tupu ọ mebie", "Izo nri ochie", "Ịbulite ọnụahịa niile", "Ịghara ilele ihe nfụkasị"], answer: 0, why: "Nri pụrụ iche na-ebelata imebi nri." },
      { objective: "O6", q: "Gịnị bụ ego efere?", options: ["Ọnụahịa efere", "Ego ihe nri dị n'otu efere", "Ụgwọ ụlọ", "Ego e nyere onye ọrụ n'onyinye (tip)"], answer: 1, why: "Ọ bụ ego ihe nri n'otu efere." },
      { objective: "O6", q: "Tupu i tinye nri pụrụ iche n'ịntanetị, ị kwesịrị:", options: ["Ịhapụ itinye ọnụahịa", "Ilele ihe nfụkasị ma tinye ya na ndepụta nkwadebe", "Iji foto a zụtara nke nri ọzọ", "Ikwe nkwa na ọ bụ organic"], answer: 1, why: "Nchekwa na atụmatụ na-ebu ụzọ." },
      { objective: "O6", q: "Pasentị ego nri bụ:", options: ["Ego efere kewara site n'ọnụahịa menu, mụbaa ya na 100", "Ụgwọ ụlọ kewara site n'ihe a rere", "Tip mụbaa ndị ọrụ", "Ọnụahịa gbakwụnyere ụtụ isi"], answer: 0, why: "Ọ na-egosi akụkụ ọnụahịa bụ ihe nri." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 6, 9, 12, 14, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Nkọwa menu ziri ezi", objective: "O1", notYet: "Otu nkọwa na-akpọ ihe nri ma ọ bụ ihe e kwuru na-adịghị n'ime nri ahụ.", meets: "Nkọwa ise dị mkpụmkpụ, okwu ihe nri ọ bụla dabara na ntụziaka nri.", exceeds: "Nke ọ bụla na-ekwukwa otu e si esi nri ahụ na ihe mere o ji pụrụ iche." },
      { name: "Chaatị ihe nfụkasị e lelere", objective: "O2", notYet: "E detuuru chaatị ahụ site n'AI ma ọ bụ otu nri ma ọ bụ ihe nfụkasị adịghị na ya.", meets: "E kara akara nri ise niile maka ihe nfụkasị itoolu site na ntụziaka nri na akara ngwaahịa, onye nke abụọ lelere ya.", exceeds: "Na-ekwu ihe ndị a zụtara na-ezo ihe nfụkasị na mgbe ikpeazụ e meliteere chaatị ahụ." },
      { name: "Ndepụta nkwadebe na ịzụ ihe", objective: "O3", notYet: "E chere ọnụọgụ ahụ echiche ma ọ bụ a gbagoghị batch elu.", meets: "Ndepụta nkwadebe na ịzụ ihe nke otu izu e mere site n'ihe a rere, ya na batch e gbagoro elu.", exceeds: "E gbanwere ọnụọgụ maka otu mmemme, ngwụcha izu ma ọ bụ ihu igwe a kpọrọ aha." },
      { name: "Usoro oge ziri ezi, e lelere", objective: "O4", notYet: "Usoro ahụ hapụrụ oge ọgba aghara n'enweghị ndị ọrụ zuru ezu ma ọ bụ jiri ozi nzuzo ndị ọrụ.", meets: "Na-ekpuchi oge ọrụ ọ bụla n'ikpe ziri ezi, na-eji naanị aha mbụ, ma na-ekwu ebe e lelere iwu ọrụ.", exceeds: "Na-ekwukwa ezumike na iwu ọ bụla gbasara ụmụaka site n'isi iyi steeti." },
      { name: "Azịza nyocha nke eziokwu", objective: "O5", notYet: "Azịza na-ese okwu, na-ekwe nkwa ụgha ma ọ bụ na-enye onyinye maka nyocha.", meets: "E zara otu ezigbo nyocha na otu nyocha ọjọọ n'udo, naanị okwu eziokwu.", exceeds: "Azịza nyocha ọjọọ na-akpọ ezi ndozi aha ma na-akpọ onye ahịa ka ọ kpọtụrụ gị." },
      { name: "Nri pụrụ iche e gbakọrọ ego ya", objective: "O6", notYet: "Nri pụrụ iche ahụ enweghị ego efere ma ọ bụ ọnụahịa.", meets: "Otu nri pụrụ iche nwere ego efere, ọnụahịa nwere uru, ya na ihe nfụkasị e lelere.", exceeds: "E tinyekwara ya na ndepụta nkwadebe ma ọ na-eji ihe fọdụrụ ma ọ bụ nke oge ya ruru." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe ụlọ nri kwuru na ha jiri chaatị ihe nfụkasị na ndepụta nkwadebe ha na kichin n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nwe ụlọ nri kwuru na nri mebiri ebelata ma ọ bụ na ihe gwụrụ agwụ ebelata n'ime ụbọchị 30",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara obere azụmahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu na spreadsheet n'efu dị ka Google Sheets",
      "Ntụziaka nri gị, akara ngwaahịa ihe nri na ọnụọgụ ihe ị rere n'otu izu",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị nwe ka ha weta ezi ntụziaka nri na akara ngwaahịa, ma ọ bụ jiri ọmụmaatụ, ka e mee chaatị ihe nfụkasị site n'ezi ozi.",
      "Mesie ike na iwu ihe nfụkasị, nchekwa nri na iwu ọrụ na-esi na FDA, ngalaba ahụike obodo na ngalaba ọrụ steeti, ọ bụghị site n'AI.",
      "Chetara ndị na-amụ ihe ka ha jiri naanị aha mbụ maka ndị ọrụ, ma ghara ide nọmba Social Security ma ọ bụ ụgwọ ọnwa ya na aha mgbe ọ bụla.",
      "Hazie nnọkọ n'èzí oge ọgba aghara nri, dịka ọmụmaatụ n'etiti ehihie.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
