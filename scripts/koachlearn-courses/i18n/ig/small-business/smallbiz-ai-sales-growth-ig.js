"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-sales-growth.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const CAN_SPAM = { name: "FTC: Iwu CAN-SPAM, ntuziaka maka azụmahịa (n'asụsụ bekee)", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-sales-growth-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-sales-growth",
  category: "Small Business",
  name: "AI maka Ire Ahịa na Uto Azụmahịa",
  skills: "Ịkọwa onye ahịa kacha dabara gị, Ide onyinye ahịa doro anya, Idebe ndepụta ndị ahịa dị mfe, Ide ozi nsochi, Ịgụ nọmba ire ahịa, Ịhazi mgbalị uto ụbọchị 30",
  outcome: "iji AI hazie ma mee mgbalị ire ahịa ụbọchị 30 maka azụmahịa gị: ịkọwa onye ahịa kacha dabara gị, ide otu onyinye ahịa doro anya, ịhazi ndepụta ndị ahịa dị mfe, ide usoro ozi nsochi na-agbaso iwu email, na ịdekọ ihe si na ya pụta na spreadsheet.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa chọrọ ire ahịa karịa site n'aka ndị ahịa ha nwere ugbu a na ndị bi nso: ụlọ ahịa, ụlọ nri, ebe a na-edozi isi, ọrụ nhicha na mmezi, ndị na-esi nri maka mmemme na ụgbọala na-ere nri. Ọtụtụ n'ime ndị na-amụ ihe anyị bụ ndị nwe azụmahịa si n'agbụrụ pere mpe, na-eto n'enweghị nnukwu ego mgbasa ozi.",
    "Ị ga-eji ngwa enyemaka AI n'efu chee echiche banyere ndị na-azụ ihe n'aka gị, hazie onyinye ahịa nwere isi, soro ndị ahịa kwere ka ị na-ezitere ha ozi, ma gụọ nọmba nke gị ka ị hụ ihe na-arụ ọrụ. AI na-enyere gị aka ide na iche echiche; ọ bụ uche gị na mmekọrịta gị na ndị ahịa na-ere ahịa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọrụ ndị ahụ na-ejikọta ọnụ ghọọ atụmatụ ire ahịa ụbọchị 30."
  ],
  finalTask: "Dee atụmatụ ire ahịa ụbọchị 30 n'otu peeji: onye ahịa kacha dabara gị n'ahịrịokwu atọ, otu onyinye ahịa nwere ọnụahịa doro anya na ụbọchị njedebe, ebe ndepụta ndị ahịa gị dị na otu ndị mmadụ si banye na ya, usoro ozi nsochi atọ (ya na adreesị gị na ahịrị ịkwụsị ịnata ozi n'email mgbasa ozi ọ bụla), na tebụl ndekọ nwere nọmba ndị ị ga-elele kwa izu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa chọrọ ire ahịa karịa site n'aka ndị ahịa ha nwere ugbu a na ndị bi nso: ụlọ ahịa, ụlọ nri, ebe a na-edozi isi, ọrụ nhicha na mmezi, ndị na-esi nri maka mmemme na ụgbọala na-ere nri. Ọtụtụ bụ ndị nwe azụmahịa si n'agbụrụ pere mpe, na-eto n'enweghị nnukwu ego mgbasa ozi.",
    startingPoint: "Ha maara ndị ahịa ha na-abịa mgbe niile na ngwaahịa ha nke ọma. Ha anaghị eji, ma ọ bụ na-eji ntakịrị, onyinye ahịa e dere ede, ndepụta ndị ahịa nwere nkwenye, ozi nsochi site n'email ma ọ bụ ozi ederede, ndekọ ire ahịa ma ọ bụ AI maka ịhazi atụmatụ.",
    gap: "Na-enweghị atụmatụ, mgbalị ire ahịa na-adị n'enweghị usoro, mbelata ọnụahịa nwere ike iripịa uru, ozi mgbasa ozi nwekwara ike imebi iwu email na ozi ederede. Ndị nwe azụmahịa chọrọ atụmatụ ụbọchị 30 dị mfe, nke e ji enyemaka AI wuo, nke na-elekwasị anya na ndị ahịa kwesịrị ekwesị, na-enye onyinye ahịa na-eweta uru, na-agbaso iwu n'ozi nsochi ma na-edekọ ihe na-arụ ọrụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: smartphone ma ọ bụ kọmputa; spreadsheet dị mfe karị na kọmputa",
      "Oge: nkuzi dị ka nkeji 5 nke dabara n'ụbọchị ọrụ juru ọrụ",
      "Iwu: CAN-SPAM maka email mgbasa ozi, na iwu gọọmentị etiti (federal) dị iche maka ozi ederede mgbasa ozi",
      "Nzuzo: a na-echebe ndepụta ndị ahịa, ọ naghịkwa abanye na ngwa AI"
    ],
    prerequisites: "\"Mmalite AI maka Obere Azụmahịa\" na-enyere aka, mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'ihe ị na-ahụ n'ebe ndị ahịa gị kacha mma nọ", action: "ide nkọwa dị mkpụmkpụ ma doo anya nke onye ahịa kacha dabara gị site n'enyemaka AI", standard: "n'ahịrịokwu atọ na-ekwu onye ha bụ, ihe ha chọrọ na ihe mere ha ji họrọ gị" },
    { id: "O2", condition: "Mgbe AI nyere gị echiche onyinye ahịa", action: "ime otu onyinye ahịa doro anya nke nwere eziokwu", standard: "nwere ihe ị na-ere, ọnụahịa, ihe kpatara ịzụ ugbu a na ụbọchị njedebe, ya na uru a gụrụ n'akwụkwọ" },
    { id: "O3", condition: "Site n'iji spreadsheet", action: "ịhazi ndepụta ndị ahịa na-edekọ nkwenye ịkpọtụrụ ha", standard: "nwere kọlụm maka nkwenye na ụbọchị, ụzọ isi debanye aha, na-enweghị ezi ozi ndị ahịa n'ime AI" },
    { id: "O4", condition: "Mgbe e nyere gị CAN-SPAM na iwu ozi ederede", action: "ide usoro ozi nsochi atọ site n'enyemaka AI", standard: "nwere adreesị nzipu ozi na ahịrị ịkwụsị ịnata ozi n'email mgbasa ozi ọ bụla, na ozi ederede naanị mgbe e nwere nkwenye doro anya" },
    { id: "O5", condition: "Mgbe e nyere gị nọmba ire ahịa nke izu anọ", action: "ịdekọ nọmba ire ahịa gị na tebụl ma lelee usoro AI hụrụ", standard: "nwere fọmụla maka mkpokọta, e wepụrụ aha ndị ahịa, ma kwado opekata mpe otu usoro na shiit ahụ" },
    { id: "O6", condition: "Mgbe e nyere gị onye ahịa gị, onyinye ahịa, ndepụta, ozi nsochi na ndekọ gị", action: "ide atụmatụ ire ahịa ụbọchị 30 n'otu peeji", standard: "dabara n'ezi awa gị, nwere nọmba ị ga-elele kwa izu na nyocha n'ụbọchị 30" }
  ],
  chapters: [
    {
      name: "Isi 1: Ndị na-azụ ihe na ihe ị na-enye",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịkọwa onye ahịa kacha dabara gị",
          minutes: 5,
          goal: "Dee nkọwa dị mkpụmkpụ ma doo anya nke ụdị onye ahịa ị kacha chọọ ka ha baa ụba.",
          text: [
            "Ị pụghị ire ahịa nke ọma nye onye ọ bụla. Chee banyere ndị ahịa gị kacha mma: ndị na-alọghachi, na-azụ ọtụtụ ihe ma na-eziga ndị enyi ha. Gịnị ka ha nwere n'otu?",
            "Dee ahịrịokwu atọ: onye ha bụ, ihe ha chọrọ, na ihe na-eme ka ha họrọ gị. Ọmụmaatụ maka ụlọ nri West Africa: \"Ndị ọrụ ọfịs bi n'ime maịl abụọ chọrọ nri ehihie na-eju afọ n'ọnụahịa na-erughị $15. Ha na-arụsi ọrụ ike ma na-enye iwu nri site n'ekwentị ha. Ha na-ahọrọ anyị maka nri buru ibu na ịnara ya ngwa ngwa.\"",
            "AI nwere ike inyere gị aka iche echiche: \"Nke a bụ ihe m maara banyere ndị ahịa m kacha mma. Kedu ajụjụ m kwesịrị ịjụ onwe m iji kọwaa ha nke ọma karị?\" Jiri ihe ị na-ahụ n'ụlọ ahịa gị, ọ bụghị echiche efu banyere otu ndị mmadụ."
          ],
          steps: ["Cheta ndị ahịa gị ise kacha mma.", "Dee ihe ha nwere n'otu.", "Dee ahịrịokwu atọ: onye, ihe ha chọrọ, ihe mere gị.", "Rịọ AI ajụjụ ga-eme ka ọ doo anya karị."],
          words: [["Onye ahịa kacha dabara gị", "ụdị onye ahịa kacha dabara azụmahịa gị."], ["Onye ahịa na-alọghachi", "onye na-azụ ihe n'aka gị karịa otu ugboro."]],
          slides: [
            { title: "Ọ bụghị onye ọ bụla", bullets: ["Chee banyere ndị ahịa gị kacha mma", "Onye na-alọghachi, na-azụ ọtụtụ ihe, na-eziga ndị enyi?"] },
            { title: "Ahịrịokwu atọ", bullets: ["Onye ha bụ", "Ihe ha chọrọ", "Ihe mere ha ji ahọrọ gị"] },
            { title: "Ọmụmaatụ: ụlọ nri ehihie", bullets: ["Ndị ọrụ ọfịs bi n'ime maịl abụọ", "Chọrọ nri ehihie na-eju afọ n'ọnụahịa na-erughị $15", "Na-ahọrọ anyị maka nri buru ibu na ịnara ya ngwa ngwa"] }
          ],
          tryIt: "Dee onye ahịa kacha dabara gị n'ahịrịokwu atọ. Rịọ ngwa enyemaka AI ajụjụ ise ga-eme ka ọ doo anya karị, zaa ha, ma degharịa ahịrịokwu atọ gị.",
          youCanNow: "ịkọwa ụdị onye ahịa ị kacha chọọ ka ha baa ụba n'ahịrịokwu atọ doro anya.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka nkọwa onye ahịa kacha dabara gị kwesịrị isi?", options: ["Ihe ị na-ahụ n'ebe ezi ndị ahịa gị kacha mma nọ", "Echiche efu banyere onye ọ bụla n'obodo", "Ihe ọ bụla AI buru ụzọ kwuo", "Weebụsaịtị onye mmegide gị"], answer: 0, why: "Ezi ndị ahịa gị kacha mma na-egosi onye ị ga-achọ." },
            { objective: "O1", q: "Nkọwa gị na-ekwu \"onye ọ bụla na-amasị nri\". Gịnị ka ị ga-eme?", options: ["Debe ya n'ihi na ọ gụnyere ọtụtụ mmadụ", "Rịọ AI ajụjụ ga-eme ka o doo anya, ma mee ka ọ bụrụ nke a kapịrị ọnụ", "Wepụ nkọwa ahụ", "Detuo nkọwa nnukwu ụlọ ahịa"], answer: 1, why: "Nkọwa a kapịrị ọnụ na-enyere gị aka iru ndị kwesịrị ekwesị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide onyinye ahịa nwere isi",
          minutes: 5,
          goal: "Mee otu onyinye ahịa doro anya nke nwere eziokwu, nwee ọnụahịa, ihe kpatara ịzụ ugbu a na ụbọchị njedebe.",
          text: [
            "Onyinye ahịa bụ ihe ị na-ere, n'ọnụahịa ole, na ihe mere mmadụ ga-eji zụta ya ugbu a. Ezigbo onyinye ahịa dị mfe: \"Nri ehihie jikọrọ ọnụ: osikapa, stew na ihe ọṅụṅụ, $13, ụbọchị ọrụ site n'elekere 11 ruo 2 ruo June 30.\"",
            "Rịọ AI ka o chepụta echiche, wee họrọ n'onwe gị: \"Ana m arụ ọrụ nhicha ụgbọala na-agagharị agagharị. Onye ahịa kacha dabara m bụ nne na nna ndị na-arụsi ọrụ ike. Nye m echiche onyinye ahịa ise maka oge opupu ihe ubi ndị na-echekwa uru m.\" Gụọ ego ahụ n'onwe gị: mbelata ọnụahịa na-efunahụ gị ego n'ire ahịa ọ bụla abụghị uto.",
            "Kwuo eziokwu. Kwuo ezi ọnụahịa, ezi ụbọchị njedebe na oke ọ bụla dị. Akpọla ya \"sale\" (mbelata ọnụahịa) ma ọ bụrụ na ọ bụ ọnụahịa gị nkịtị."
          ],
          steps: ["Rịọ AI echiche onyinye ahịa ise maka onye ahịa kacha dabara gị.", "Họrọ otu ma gụọ ihe ọ ga-efu gị na uru gị.", "Dee ya nwere ihe ị na-ere, ọnụahịa, ihe kpatara ịzụ ugbu a na ụbọchị njedebe.", "Lelee na o nwere eziokwu ma doo anya."],
          words: [["Onyinye ahịa (offer)", "ihe ị na-ere, ọnụahịa ya na ihe kpatara ịzụ ya ugbu a."], ["Uru (profit)", "ego fọdụrụ mgbe ị kwụchara ihe niile ọ na-efu gị."], ["Margin", "akụkụ nke ọnụahịa bụ uru."]],
          slides: [
            { title: "Onyinye ahịa doro anya nwere", bullets: ["Ihe ị na-ere", "Ọnụahịa", "Ihe kpatara ịzụ ugbu a na ụbọchị njedebe"] },
            { title: "AI na-echepụta, gị na-ahọrọ", bullets: ["Rịọ echiche ise maka onye ahịa kacha dabara gị", "Gụọ ego ahụ: debe uru"] },
            { title: "Kwuo eziokwu", bullets: ["Ezi ọnụahịa, ezi ụbọchị njedebe, ezi oke", "\"Sale\" ga-adị ala karịa ọnụahịa gị nkịtị"] }
          ],
          tryIt: "Rịọ AI echiche onyinye ahịa ise maka onye ahịa kacha dabara gị. Họrọ otu, gụọ ihe ọ ga-efu gị na uru gị n'akwụkwọ, ma dee onyinye ahịa ahụ n'otu ahịrịokwu nwere ụbọchị njedebe.",
          youCanNow: "ide onyinye ahịa doro anya, nwee eziokwu, nke ka na-eweta uru.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka onyinye ahịa doro anya gụnyere?", options: ["Naanị nnukwu mbelata ọnụahịa", "Ogologo ndepụta ngwaahịa", "Ihe ị na-ere, ọnụahịa, ihe kpatara ịzụ ugbu a na ụbọchị njedebe", "Nkwa na ọ gaghị agwụ mgbe ọ bụla"], answer: 2, why: "Akụkụ ndị a na-eme ka onyinye ahịa dị mfe ịghọta na ime ihe na ya." },
            { objective: "O2", q: "AI tụrụ aro mbelata ọkara ọnụahịa n'ihe niile ruo otu ọnwa. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Tinye ya n'ịntanetị taa", "Mee ya 70% kama", "Jụọ ndị ahịa ma ọ masịrị ha", "Gụọ n'akwụkwọ ma ị ka na-enweta uru"], answer: 3, why: "Onyinye ahịa ga-ahapụrịrị ego mgbe ị kwụchara ihe ọ na-efu." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịmalite ndepụta ndị ahịa dị mfe",
          minutes: 5,
          goal: "Hazie ndepụta ndị ahịa dị mfe na spreadsheet, nwere nkwenye ịkpọtụrụ ha.",
          text: [
            "Ndepụta ndị ahịa gị bụ ngwa ire ahịa gị kacha baa uru. O nwere ike ịbụ spreadsheet nwere kọlụm dị ka Aha mbụ, Otu esi akpọtụrụ ya (email ma ọ bụ ekwentị), Kwere ịnata ozi (ee/mba na ụbọchị), Oge ikpeazụ ọ bịara, Ihe ọ zụrụ, na Ndetu.",
            "Tinye naanị ndị nyere gị ozi ha ma kwere ịnụ ihe site n'aka gị: akwụkwọ ndebanye aha n'ebe ị na-anara ego, koodu QR na-eduga na fọm, ma ọ bụ igbe a na-akara na ngwa ndokwa oge gị. Dee mgbe na otu ha si kwere.",
            "Debe ndepụta ahụ na nzuzo ma dịrị nchebe: okwuntughe na faịlụ ma ọ bụ akaụntụ ahụ, kesaa ya naanị ndị ọrụ chọrọ ya. Etinyela ndepụta ahụ n'ime ngwa AI. Ọ bụrụ na ị chọrọ enyemaka AI, kọwaa kọlụm ndị ahụ ma ọ bụ jiri ahịrị ọmụmaatụ e chepụtara echepụta."
          ],
          steps: ["Mee spreadsheet nwere kọlụm ndị a kpọrọ n'elu.", "Tinye ụzọ isi debanye aha: akwụkwọ n'ebe ị na-anara ego, fọm QR ma ọ bụ igbe na ngwa ndokwa oge.", "Dee mgbe na otu onye ọ bụla si kwere.", "Chebe faịlụ ahụ ma ghara itinye ya na ngwa AI."],
          words: [["Ndepụta ndị ahịa", "ndekọ ndị ahịa kwere ịnụ ihe site n'aka gị."], ["Opt in (ịkwere)", "mgbe mmadụ kwere ịnata ozi gị."], ["CRM", "customer relationship management (njikwa mmekọrịta ndị ahịa): sọftwea ma ọ bụ shiit maka idekọ ndị ahịa."]],
          slides: [
            { title: "Ngwa ire ahịa gị kacha baa uru", bullets: ["Spreadsheet dị mfe na-arụ ọrụ", "Aha, ụzọ ịkpọtụrụ, kwere (ụbọchị), oge ikpeazụ ọ bịara, ndetu"] },
            { title: "Nkwenye na mbụ", bullets: ["Ndebanye aha n'ebe ego, fọm QR ma ọ bụ igbe na ngwa ndokwa oge", "Dee mgbe na otu ha si kwere"] },
            { title: "Debe ya na nchebe", bullets: ["Okwuntughe na faịlụ ma ọ bụ akaụntụ", "Kesaa naanị ndị ọrụ chọrọ ya", "Etinyela ndepụta ahụ n'ime ngwa AI mgbe ọ bụla"] }
          ],
          tryIt: "Mee shiit ndepụta ndị ahịa gị nwere kọlụm isii ahụ. Tinye ahịrị ọmụmaatụ atọ e chepụtara echepụta, wee dee otu ezi ndị ahịa ga-esi debanye aha (akwụkwọ n'ebe ego, fọm QR ma ọ bụ igbe na ngwa ndokwa oge).",
          youCanNow: "ịhazi ndepụta ndị ahịa nzuzo nwere ndekọ nkwenye ịkpọtụrụ ha.",
          quickCheck: [
            { objective: "O3", q: "Onye kwesịrị ịnọ na ndepụta ndị ahịa gị?", options: ["Ndị kwere ịnụ ihe site n'aka gị", "Onye ọ bụla ị nwere ike ịchọta nọmba ya", "Ndị ahịa ndị mmegide gị", "Onye ọ bụla nọ n'akwụkwọ nọmba ekwentị"], answer: 0, why: "Naanị ndị kwere ịnụ ihe site n'aka gị na-aba na ndepụta ahụ." },
            { objective: "O3", q: "Ị chọrọ ka AI nyere aka hazie shiit ndepụta ndị ahịa gị. Gịnị ka ị ga-ekesa?", options: ["Ezi ndepụta ndị ahịa gị niile", "Nọmba ekwentị ndị ahịa", "Aha kọlụm ma ọ bụ ahịrị ọmụmaatụ e chepụtara echepụta", "Okwuntughe shiit ahụ"], answer: 2, why: "Aha kọlụm ma ọ bụ ahịrị ọmụmaatụ na-enweta enyemaka n'ekesaghị ezi ozi ndị ahịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ndị na-azụ ihe na ihe ị na-enye",
        questions: [
          { objective: "O1", q: "Gịnị bụ onye ahịa kacha dabara gị?", options: ["Onye ọ bụla nwere ego", "Ụdị onye ahịa kacha dabara azụmahịa gị", "Naanị ndị na-eme mkpesa", "Ndị ahịa onye mmegide gị"], answer: 1, why: "Ọ na-akọwa ndị ị kacha chọọ ka ha baa ụba." },
          { objective: "O2", q: "Kedu nke bụ onyinye ahịa doro anya?", options: ["\"Ezigbo onyinye!\"", "\"Ihe dị ọnụ ala\"", "\"Bịa mgbe ọ bụla\"", "\"Nri ehihie jikọrọ ọnụ: osikapa, stew na ihe ọṅụṅụ, $13, ụbọchị ọrụ 11-2 ruo June 30\""], answer: 3, why: "Ọ na-ekwu ihe ị na-ere, ọnụahịa, oge na ụbọchị njedebe." },
          { objective: "O2", q: "AI tụrụ aro mbelata ọnụahịa 60%. Gịnị ka ị ga-ebu ụzọ lelee?", options: ["Ma ị ka na-enweta uru", "Ma ọ na-atọ ụtọ ịnụ", "Ọ dịghị ihe", "Ụdị mkpụrụ edemede"], answer: 0, why: "Mbelata ọnụahịa na-efunahụ gị ego abụghị uto." },
          { objective: "O3", q: "Onye kwesịrị ịnọ na ndepụta ndị ahịa gị?", options: ["Onye ọ bụla ị chọtara nọmba ya", "Ndị ahịa ndị mmegide gị", "Ndị kwere ịnụ ihe site n'aka gị", "Nọmba ekwentị a na-amaghị"], answer: 2, why: "Nkwenye na-ebu ụzọ." },
          { objective: "O3", q: "Ị chọrọ enyemaka AI ịhazi ndepụta ndị ahịa gị. Gịnị ka ị ga-ekesa?", options: ["Ndepụta niile ya na nọmba ekwentị", "Nọmba kaadị ndị ahịa", "Aha kọlụm ma ọ bụ ahịrị ọmụmaatụ e chepụtara echepụta", "Okwuntughe faịlụ gị"], answer: 2, why: "Ezi ozi ndị ahịa anaghị abanye na ngwa AI." }
        ]
      }
    },
    {
      name: "Isi 2: Ịsochi ndị ahịa na ito",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide ozi nsochi na-agbaso iwu",
          minutes: 6,
          goal: "Dee usoro ozi nsochi atọ ma hụ na email mgbasa ozi na-agbaso CAN-SPAM.",
          text: [
            "Ọtụtụ ire ahịa na-esi n'ịsochi ndị ahịa. Usoro dị mfe: (1) ekele mgbe ha bịara, (2) ncheta ma ọ bụ ndụmọdụ mgbe otu izu gachara, (3) onyinye ahịa gị ya na ụbọchị njedebe ya. Jụọ AI: \"Dee email nsochi atọ dị mkpụmkpụ maka ebe m na-edozi isi n'ụdị okwu azụmahịa m. Jiri [aha mbụ].\"",
            "Email mgbasa ozi na US ga-agbasorịrị Iwu CAN-SPAM. Ntuziaka FTC (ụlọ ọrụ gọọmentị US na-ahụ maka azụmahịa) na-ekwu: jiri ahịrị From (onye zitere) na isiokwu nwere eziokwu, mee ka o doo anya na ọ bụ mgbasa ozi, tinye ezi adreesị nzipu ozi, nye ụzọ doro anya isi kwụsị ịnata ozi (unsubscribe), ma mezuo arịrịọ ịkwụsị ịnata ozi n'ime ụbọchị ọrụ 10.",
            "Ozi ederede mgbasa ozi nwere iwu gọọmentị etiti nke ha (TCPA, nke FCC na-elekọta), ha na-achọkarị nkwenye doro anya nke onye ahịa. Tupu i zipu ozi ederede mgbasa ozi, lelee iwu ndị ahụ na fcc.gov ma ọ bụ jụọ ọkachamara, ma jiri ngwa ozi ederede na-ahụ maka ndị chọrọ ịkwụsị ịnata ozi."
          ],
          steps: ["Hazie ozi atọ: ekele, ncheta ma ọ bụ ndụmọdụ, onyinye ahịa.", "Rịọ AI ka o dee ha nwere oghere [aha mbụ].", "Tinye adreesị nzipu ozi gị na ahịrị ịkwụsị ịnata ozi n'email mgbasa ozi.", "Mezuo arịrịọ ịkwụsị ịnata ozi ngwa ngwa.", "Lelee iwu ozi ederede tupu i zipu ozi ederede mgbasa ozi."],
          words: [["Usoro ozi nsochi", "ozi ndị a hazịrị ahazi a na-ezipu mgbe onye ahịa bịara ma ọ bụ debanye aha."], ["CAN-SPAM", "iwu US nwere iwu maka email azụmahịa."], ["Unsubscribe (ịkwụsị ịnata ozi)", "ụzọ ndị mmadụ ga-esi kwụsị ịnata ozi gị."]],
          slides: [
            { title: "Usoro ozi atọ", bullets: ["1. Ekele mgbe ha bịara", "2. Ncheta ma ọ bụ ndụmọdụ mgbe otu izu gachara", "3. Onyinye ahịa gị nwere ụbọchị njedebe"] },
            { title: "Isi ihe CAN-SPAM (FTC)", bullets: ["Ahịrị From na isiokwu nwere eziokwu; kwuo na ọ bụ mgbasa ozi", "Ezi adreesị nzipu ozi", "Unsubscribe doro anya, e mezuo ya n'ime ụbọchị ọrụ 10"] },
            { title: "Ozi ederede mgbasa ozi", bullets: ["Iwu gọọmentị etiti dị iche (TCPA, FCC)", "Buru ụzọ nweta nkwenye doro anya", "Lelee fcc.gov ma ọ bụ jụọ ọkachamara"] }
          ],
          sources: [CAN_SPAM],
          tryIt: "Rịọ AI ka o dee usoro ozi nsochi atọ gị nwere [aha mbụ]. Tinye adreesị nzipu ozi gị na ahịrị ịkwụsị ịnata ozi n'email onyinye ahịa ahụ.",
          youCanNow: "ide usoro ozi nsochi ma hụ na email mgbasa ozi na-emezu isi ihe CAN-SPAM.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka email mgbasa ozi ọ bụla na US ga-enwerịrị n'okpuru CAN-SPAM?", options: ["Kupọn", "Ezi adreesị nzipu ozi na ụzọ isi kwụsị ịnata ozi", "Foto", "Aha onye ahịa zuru ezu"], answer: 1, why: "CAN-SPAM chọrọ adreesị nzipu ozi na ụzọ isi kwụsị ịnata ozi." },
            { objective: "O4", q: "Ị chọrọ iziga ozi ederede mgbasa ozi banyere onyinye ahịa gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zigara onye ọ bụla nọ n'ekwentị gị ozi", "Zipu ozi n'abalị", "Jiri ndepụta nọmba e zụrụ azụ", "Nweta nkwenye doro anya ma lelee iwu gọọmentị etiti gbasara ozi ederede"], answer: 3, why: "Ozi ederede mgbasa ozi nwere iwu gọọmentị etiti nke ha, ha chọkwara nkwenye doro anya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịgụ nọmba ire ahịa gị site n'enyemaka AI",
          minutes: 5,
          goal: "Dekọọ nọmba ire ahịa ole na ole kwa izu ma jiri AI nyere aka hụ usoro.",
          text: [
            "Ị chọrọ naanị nọmba ole na ole: ire ahịa kwa ụbọchị, ọnụọgụ ndị ahịa, nkezi ire ahịa (ire ahịa kewara site n'ọnụọgụ ndị ahịa), ihe ị kacha ere, na ọnụọgụ ndị jiri onyinye ahịa gị.",
            "Debe ha na spreadsheet site n'izu. Hapụ spreadsheet ka ọ gụọ ego ahụ. Mgbe ahụ ị nwere ike itinye mkpokọta izu ọ bụla (na-enweghị aha ndị ahịa) n'ime ngwa enyemaka AI ma jụọ: \"Nke a bụ nọmba izu 6 maka ụlọ achịcha m. Kedu usoro ị hụrụ? Gịnị ka m kwesịrị ilele?\"",
            "Were echiche AI dị ka ajụjụ, ọ bụghị azịza. Ọ bụrụ na ọ sị \"Satọdee na-adị nwayọọ\", lee shiit nke gị ka ị kwado ya, ma chee ihe kpatara ya: ihu igwe, mmemme, mgbanwe ndị ọrụ."
          ],
          steps: ["Dekọọ ire ahịa, ndị ahịa, nkezi ire ahịa, ihe ị kacha ere na iji onyinye ahịa kwa izu.", "Hapụ fọmụla ka ha gụọ mkpokọta.", "Tinye mkpokọta izu (na-enweghị aha) n'ime AI ma rịọ usoro.", "Kwado usoro ọ bụla na shiit gị."],
          words: [["Nkezi ire ahịa", "mkpokọta ire ahịa kewara site n'ọnụọgụ ndị ahịa."], ["Usoro (pattern)", "ihe na-eme ugboro ugboro na nọmba gị."]],
          slides: [
            { title: "Nọmba ise ị ga-edekọ", bullets: ["Ire ahịa kwa ụbọchị na ndị ahịa", "Nkezi ire ahịa", "Ihe ị kacha ere na iji onyinye ahịa"] },
            { title: "AI dị ka anya nke abụọ", bullets: ["Tinye mkpokọta izu, ọ bụghị aha", "Jụọ: \"Kedu usoro ị hụrụ?\""] },
            { title: "Kwado tupu i mee ihe", bullets: ["Echiche AI bụ ajụjụ", "Lelee shiit nke gị", "Jụọ ihe kpatara ya: ihu igwe, mmemme, ndị ọrụ"] }
          ],
          tryIt: "Mee tebụl ndekọ kwa izu nwere nọmba ise ahụ. Dejupụta nọmba ọmụmaatụ ma ọ bụ ezi nọmba maka izu anọ ma jụọ AI usoro ọ hụrụ. Kwado otu na shiit gị.",
          youCanNow: "ịdekọ nọmba ire ahịa dị mkpa ma jiri AI nyere aka hụ usoro ị ga-emesịa kwado.",
          quickCheck: [
            { objective: "O5", q: "Kedu otu ị ga-esi gụọ nkezi ire ahịa gị?", options: ["Ire ahịa kewara site n'ọnụọgụ ndị ahịa", "Ndị ahịa kewara site n'ụbọchị", "Uru mụbara ugboro abụọ", "Ọnụọgụ ihe ị rere"], answer: 0, why: "Nkezi ire ahịa bụ mkpokọta ire ahịa kewara site n'ọnụọgụ ndị ahịa." },
            { objective: "O5", q: "Ị chọrọ ka AI lelee tebụl ire ahịa gị kwa izu. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Tinye aha ndị ahịa ka ọ mara ihe karị", "Tinye ya otu o si dị", "Wepụ aha ndị ahịa tupu i tinye ya", "Tinye nọmba kaadị ndị ahịa"], answer: 2, why: "Aha ndị ahịa anaghị abanye na ngwa AI." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Atụmatụ ire ahịa ụbọchị 30 gị",
          minutes: 5,
          goal: "Tinye onye ahịa gị, onyinye ahịa, ndepụta, ozi nsochi na ndekọ n'otu atụmatụ ụbọchị 30.",
          text: [
            "Atụmatụ na-eme ka echiche ghọọ omume. Izu 1: hazie ndepụta ndị ahịa gị na ndebanye aha. Izu 2: malite onyinye ahịa gị ma zipu ozi ekele. Izu 3: zipu ncheta ma tinye onyinye ahịa n'ịntanetị. Izu 4: zipu oku ikpeazụ tupu ụbọchị njedebe, wee nyochaa nọmba gị.",
            "Rịọ AI ka o mee ndetu gị kalenda nwere ọrụ maka izu ọ bụla. Mee ka o kwekọọ n'awa gị.",
            "Na njedebe, tụnyere nọmba gị na nke ọnwa gara aga. Debe ihe rụrụ ọrụ, hapụ ihe na-arụghị ọrụ, ma hazie ụbọchị 30 na-esote."
          ],
          steps: ["Chịkọta onye ahịa kacha dabara gị, onyinye ahịa, nhazi ndepụta, ozi nsochi na tebụl ndekọ.", "Rịọ AI ka o mee kalenda ọrụ izu anọ.", "Mee ka ọrụ ndị ahụ dabara n'ezi awa gị.", "Nyochaa ihe si na ya pụta n'ụbọchị 30."],
          words: [["Atụmatụ ire ahịa", "atụmatụ e dere ede nke ihe ị ga-eme iji ree ahịa karị, na mgbe ị ga-eme ya."], ["Nyocha", "ileghachi anya n'ihe si na ya pụta iji kpebie ihe ị ga-edebe ma ọ bụ gbanwee."]],
          slides: [
            { title: "Izu anọ", bullets: ["Izu 1: ndepụta na ndebanye aha", "Izu 2: malite onyinye ahịa, zipu ekele", "Izu 3: ncheta; Izu 4: oku ikpeazụ na nyocha"] },
            { title: "AI na-eme kalenda", bullets: ["Tinye ndetu gị", "Rịọ ọrụ kwa izu", "Mee ka o dabara n'awa gị"] },
            { title: "Ụbọchị 30", bullets: ["Tụnyere ya na ọnwa gara aga", "Debe ihe rụrụ ọrụ", "Hazie ụbọchị 30 na-esote"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee atụmatụ ire ahịa ụbọchị 30 gị n'otu peeji nwere onye ahịa kacha dabara gị, onyinye ahịa, ndepụta, usoro ozi atọ na tebụl ndekọ. Rịọ AI ka o mee ya kalenda ọrụ kwa izu.",
          youCanNow: "ịhazi, ime ma nyochaa mgbalị ire ahịa ụbọchị 30 maka azụmahịa gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka Izu 1 nke atụmatụ ụbọchị 30 bụ maka ya?", options: ["Iziga ozi niile n'otu oge", "Ịhazi ndepụta na ndebanye aha", "Ịkwụsị onyinye ahịa", "Ịtụnyere ihe si na ya pụta"], answer: 1, why: "Izu mbụ na-ahazi ndepụta ahụ na otu ndị mmadụ ga-esi banye na ya." },
            { objective: "O6", q: "Atụmatụ ụbọchị 30 gị chọrọ awa karịa nke ị nwere. Gịnị ka ị ga-eme?", options: ["Debe ya ma rụọ ọrụ abalị niile", "Hapụ atụmatụ ahụ", "Rịọ AI ka o ree ahịa", "Belata ya ka o dabara n'ezi awa gị"], answer: 3, why: "Atụmatụ dabara n'awa gị bụ nke ị nwere ike ime n'ezie." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịsochi ndị ahịa na ito",
        questions: [
          { objective: "O4", q: "Kedu nke kwesịrị ịdị n'email mgbasa ozi ọ bụla na US n'okpuru CAN-SPAM?", options: ["Ezi adreesị nzipu ozi na ụzọ isi kwụsị ịnata ozi", "Nọmba kaadị onye ahịa", "Isiokwu adịgboroja", "Enweghị aha onye zitere"], answer: 0, why: "FTC depụtara ha abụọ dị ka ihe a chọrọ." },
          { objective: "O4", q: "N'ime oge ole ka ị ga-emezu arịrịọ ịkwụsị ịnata ozi, dị ka ntuziaka FTC si kwuo?", options: ["Naanị ma ọ bụrụ na ha kpọọ oku", "N'ime otu afọ", "Mgbe ọ bụla", "N'ime ụbọchị ọrụ 10"], answer: 3, why: "FTC kwuru n'ime ụbọchị ọrụ 10." },
          { objective: "O4", q: "Tupu i zipu ozi ederede mgbasa ozi, ị kwesịrị:", options: ["Iziga ozi na nọmba ọ bụla ị nwere", "Inweta nkwenye doro anya ma lelee iwu gọọmentị etiti gbasara ozi ederede", "Ịzụta ndepụta", "Izo aha azụmahịa gị"], answer: 1, why: "Ozi ederede mgbasa ozi nwere iwu gọọmentị etiti dị iche, ha chọkwara nkwenye." },
          { objective: "O5", q: "Kedu otu ị ga-esi gụọ nkezi ire ahịa?", options: ["Ire ahịa kewara site n'ọnụọgụ ndị ahịa", "Ire ahịa mụbara site na ndị ahịa", "Uru wepụ ụgwọ ụlọ", "Ndị ahịa kewara site n'ụbọchị"], answer: 0, why: "Nkezi ire ahịa = mkpokọta ire ahịa / ndị ahịa." },
          { objective: "O5", q: "AI kwuru na Tuzde gị na-adị nwayọọ. Gịnị ka ị ga-eme?", options: ["Mechie ụlọ ahịa na Tuzde ozugbo", "Leghara nọmba anya", "Kwado ya na nọmba nke gị ma chee ihe kpatara ya", "Jụọ onye mmegide gị"], answer: 2, why: "Usoro AI hụrụ bụ ajụjụ ị ga-elele." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ire Ahịa na Uto Azụmahịa",
    questions: [
      { objective: "O1", q: "Nkọwa onye ahịa kacha dabara gị kwesịrị ịbụ:", options: ["\"Onye ọ bụla\"", "Nke a kapịrị ọnụ: onye, ihe ha chọrọ, ihe mere gị", "Nke dabere n'echiche efu banyere otu ndị mmadụ", "Ogologo nke ukwuu"], answer: 1, why: "Nkọwa a kapịrị ọnụ na-eduzi onyinye ahịa ka mma." },
      { objective: "O1", q: "Ebee ka nkọwa onye ahịa kacha dabara gị kwesịrị isi?", options: ["Naanị AI", "Echiche ụgha banyere otu ndị mmadụ", "Weebụsaịtị ọ bụla", "Ihe ị na-ahụ n'ebe ezi ndị ahịa gị kacha mma nọ"], answer: 3, why: "Jiri ezi ihe ị hụrụ, ọ bụghị echiche efu." },
      { objective: "O1", q: "Kedu otu AI nwere ike isi nyere aka kọwaa onye ahịa kacha dabara gị?", options: ["Ọ pụghị inyere aka", "Site n'ịgụ akaụntụ ụlọ akụ gị", "Site n'ịkpọ ndị ahịa oku", "Site n'ịjụ gị ajụjụ ga-eme ka o doo anya"], answer: 3, why: "AI nwere ike ịtụ aro ajụjụ ị ga-eji chee echiche." },
      { objective: "O2", q: "Onyinye ahịa doro anya gụnyere:", options: ["Naanị foto", "Ihe ị na-ere, ọnụahịa, ihe kpatara ịzụ ugbu a na ụbọchị njedebe", "Enweghị ọnụahịa", "Koodu nzuzo"], answer: 1, why: "Akụkụ anọ ahụ niile na-eme ka o doo anya." },
      { objective: "O2", q: "Gịnị bụ uru?", options: ["Mbelata ọnụahịa", "Ego niile na-abata", "Ego fọdụrụ mgbe ị kwụchara ihe niile ọ na-efu", "Ego mbinye"], answer: 2, why: "Uru bụ ego na-abata wepụ ihe niile ọ na-efu." },
      { objective: "O2", q: "Ịkpọ ọnụahịa gị nkịtị \"sale\" bụ:", options: ["Iduhie mmadụ", "Amamihe", "Iwu chọrọ ya", "Ọ dị mma kwa ụbọchị"], answer: 0, why: "Onyinye ahịa ga-enwerịrị eziokwu." },
      { objective: "O3", q: "Kedu kọlụm na-enyere aka gosi na onye ahịa kwere ịnata ozi?", options: ["Nọmba kaadị", "Agba kacha amasị ya", "Kwere ịnata ozi (ee/mba na ụbọchị)", "Okwuntughe"], answer: 2, why: "Idekọ nkwenye dị mkpa." },
      { objective: "O3", q: "Ezigbo ụzọ isi nakọta ndebanye aha bụ:", options: ["Koodu QR na-eduga na fọm ndebanye aha", "Idetuo nọmba site na rịsịtị n'ajụghị ajụjụ", "Ịzụta ndepụta", "Ịkọ email"], answer: 0, why: "Ndị mmadụ na-ahọrọ ịbanye n'onwe ha." },
      { objective: "O3", q: "Ndepụta ndị ahịa gị kwesịrị ịbụ:", options: ["Nke e tinyere n'ịntanetị", "Nke e chebere ma ghara itinye ya na ngwa AI", "Nke e kesara onye ọ bụla", "Nke e tinyere na mkparịta ụka"], answer: 1, why: "Ozi ndị ahịa bụ nzuzo." },
      { objective: "O4", q: "Usoro ozi nsochi dị mfe na-amalite site na:", options: ["Ọ dịghị ihe", "Ịmanye mmadụ ịzụ ihe", "Mkpesa", "Ekele mgbe ha bịara"], answer: 3, why: "Ibu ụzọ kele na-ewuli mmekọrịta." },
      { objective: "O4", q: "N'okpuru CAN-SPAM, email mgbasa ozi ga-:", options: ["Eme ka o doo anya na ọ bụ mgbasa ozi", "Ezo onye zitere ya", "Eji isiokwu adịgboroja", "Enweghị adreesị"], answer: 0, why: "FTC chọrọ ka a mata mgbasa ozi dị ka mgbasa ozi." },
      { objective: "O4", q: "Ntuziaka ụlọ ọrụ gọọmentị nke ole na-ekwu maka CAN-SPAM?", options: ["IRS", "DMV", "Ụlọ ọrụ nzipu ozi (post office)", "FTC"], answer: 3, why: "FTC na-ebipụta ntuziaka ahụ." },
      { objective: "O4", q: "Ozi ederede mgbasa ozi nọ n'okpuru:", options: ["Naanị CAN-SPAM", "Enweghị iwu ọ bụla", "Iwu gọọmentị etiti dị iche (TCPA) nke FCC na-elekọta", "Naanị iwu steeti gbasara ịdọba ụgbọala"], answer: 2, why: "Ozi ederede nwere iwu nke ha." },
      { objective: "O5", q: "Kedu nke bụ otu n'ime nọmba ise ị ga-edekọ?", options: ["Abụ kacha amasị gị", "Nkezi ire ahịa", "Ụgwọ ụlọ onye mmegide gị", "Okwuntughe gị"], answer: 1, why: "Nkezi ire ahịa na-egosi ego onye ahịa ọ bụla na-emefu." },
      { objective: "O5", q: "Gịnị kwesịrị ịgụ mkpokọta na shiit ndekọ gị?", options: ["Ndị ahịa", "Ịkọ AI", "Ncheta", "Fọmụla spreadsheet"], answer: 3, why: "Fọmụla na-agụ ihe n'ụzọ a pụrụ ịtụkwasị obi." },
      { objective: "O5", q: "Tupu i tinye nọmba n'ime AI, wepụ:", options: ["Mkpokọta", "Ụbọchị izu", "Aha ndị ahịa", "Aha ngwaahịa"], answer: 2, why: "Aha bụ nzuzo." },
      { objective: "O6", q: "Izu 1 nke atụmatụ ụbọchị 30 bụ maka:", options: ["Ịhazi ndepụta na ndebanye aha", "Imechi azụmahịa", "Ịbawanye ọnụahịa niile", "Ịchụ ndị ọrụ"], answer: 0, why: "Ndepụta ahụ na-ebu ụzọ." },
      { objective: "O6", q: "Gịnị mere ị ga-eji mee ka atụmatụ dabara n'ezi awa gị?", options: ["Ka o wee dị ogologo", "Ka ị nwee ike ime ya n'ezie", "Ọ dịghị mkpa", "Ka obi tọọ AI ụtọ"], answer: 1, why: "A na-arụcha atụmatụ ndị kwekọrọ n'eziokwu." },
      { objective: "O6", q: "N'ụbọchị 30 ị kwesịrị:", options: ["Ichefu nọmba ahụ", "Ịtụnyere ihe si na ya pụta ma debe ihe rụrụ ọrụ", "Ịmalitegharị n'echeghị echiche", "Ihichapụ ndepụta ahụ"], answer: 1, why: "Nyocha na-eduzi ụbọchị 30 na-esote." },
      { objective: "O6", q: "N'ihe ọmụmụ a, onye na-ere ahịa?", options: ["Gị na mmekọrịta gị na ndị ahịa, ya na AI dị ka onye enyemaka", "Naanị AI", "Ọ dịghị onye", "Bot na-eme ka ọ bụ gị"], answer: 0, why: "AI na-enyere gị aka ide na iche echiche; gị na-ere ahịa." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      4,
      6,
      8,
      9,
      10,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Onye ahịa kacha dabara gị",
        objective: "O1",
        notYet: "Ọ doghị anya, dị ka \"onye ọ bụla\".",
        meets: "Ahịrịokwu atọ a kapịrị ọnụ: onye, ihe ha chọrọ na ihe mere gị.",
        exceeds: "Dabere n'ezi ndị ahịa kacha mma, e jikwa ajụjụ AI mee ka o doo anya karị."
      },
      {
        name: "Onyinye ahịa",
        objective: "O2",
        notYet: "Enweghị ọnụahịa ma ọ bụ ụbọchị njedebe, ma ọ bụ na-efunahụ ego.",
        meets: "Otu onyinye ahịa doro anya, nwee eziokwu, nwere ọnụahịa, ihe kpatara ịzụ ugbu a na ụbọchị njedebe.",
        exceeds: "A gụrụ uru ya ma dee ya n'akụkụ ya."
      },
      {
        name: "Ndepụta ndị ahịa",
        objective: "O3",
        notYet: "Enweghị kọlụm nkwenye, ma ọ bụ enweghị ụzọ isi debanye aha.",
        meets: "Na-ekwu ebe ndepụta ahụ dị na otu ndị mmadụ si banye na ya, ya na nkwenye e dekọrọ.",
        exceeds: "Na-ekwu otu e si echebe ndepụta ahụ ma ghara itinye ya na ngwa AI."
      },
      {
        name: "Usoro ozi nsochi",
        objective: "O4",
        notYet: "Ozi na-erughị atọ, ma ọ bụ email mgbasa ozi na-enweghị adreesị ma ọ bụ ahịrị ịkwụsị ịnata ozi.",
        meets: "Ozi atọ, ya na adreesị na ahịrị ịkwụsị ịnata ozi n'email mgbasa ozi.",
        exceeds: "Na-ekwu nkwenye na iwu a chọrọ tupu ozi ederede mgbasa ozi ọ bụla."
      },
      {
        name: "Tebụl ndekọ",
        objective: "O5",
        notYet: "Enweghị tebụl ma ọ bụ enweghị nọmba kwa izu.",
        meets: "Tebụl nwere nọmba ị ga-elele kwa izu, na-eji fọmụla.",
        exceeds: "Gụnyere nyocha n'ụbọchị 30 iji debe ihe rụrụ ọrụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa mere mgbalị ire ahịa ụbọchị 30 ha (nnyocha nsochi n'ụbọchị 30)",
      "Ndị nwe azụmahịa kọrọ na ire ahịa ha rịrị elu ma ọ bụ na ndị ahịa na-alọghachi baara ụba mgbe ụbọchị 30 gachara, site na tebụl ndekọ ha",
      "Ndị nwe azụmahịa mere ka ndepụta ndị ahịa nwere nkwenye too n'ime ụbọchị 60"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ smartphone nwere ịntanetị",
      "Ngwa enyemaka AI n'efu na spreadsheet n'efu (Google Sheets ma ọ bụ Microsoft Excel)",
      "Akwụkwọ na mkpịsị ode iji gụọ ihe ọ na-efu na uru",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Jiri ahịrị ọmụmaatụ e chepụtara echepụta na ndepụta omume; etinyela ezi ndepụta ndị ahịa n'ime AI mgbe ọ bụla.",
      "Meghee ntuziaka CAN-SPAM nke FTC ọnụ, ma gosi na ozi ederede nwere iwu dị iche.",
      "Gaa n'otu ọmụmaatụ ihe ọ na-efu na uru n'akwụkwọ tupu ndị nwe azụmahịa ahazi onyinye ahịa ha.",
      "Gbaa ndị nwe azụmahịa ume ka ha lelee atụmatụ ụbọchị 30 ha megide ezi awa ha kwa izu.",
      "Jiri rubric tụọ akara atụmatụ ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
