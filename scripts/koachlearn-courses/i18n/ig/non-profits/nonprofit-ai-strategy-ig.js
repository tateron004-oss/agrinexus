"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-ai-strategy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nonprofit-ai-strategy-ig",
  lang: "ig",
  translationOf: "nonprofit-ai-strategy",
  category: "Non Profits",
  name: "Ịkwado Atụmatụ AI maka Otu Gị Na-adịghị Achọ Uru",
  skills: "Ịchọta ọrụ ndị kwesịrị AI, Ịhazi echiche site n'uru na ihe egwu, Ide iwu maka iji AI, Ịhazi obere nnwale (pilot), Ịtụ nsonaazụ na ịkọrọ bọọdụ",
  outcome: "ide atụmatụ AI otu peeji maka otu gị na-adịghị achọ uru nke na-akpọ aha ọrụ atọ AI ga-enyere aka, iwu ndị ọrụ na ndị ọrụ afọ ofufo ga-agbaso, nnwale ụbọchị 30 nwere otu onye na-elekọta ya, na otu ị ga-esi tụọ ma ọ rụrụ ọrụ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị isi ọrụ (executive directors), ndị fada na ndị pastọ, ndị otu bọọdụ, ndị na-elekọta mmemme na ndị ndu ndị ọrụ afọ ofufo chọrọ iji AI n'ebumnuche, ọ bụghị na mberede.",
    "Ị ga-ahụ ebe oge ndị otu gị na-aga, họrọ ọrụ ebe AI kacha enyere aka na obere ihe egwu, dee iwu dị mfe na-echebe ndị na-enye onyinye na ndị ị na-ejere ozi, ma hazie obere nnwale ị nwere ike ịkọrọ bọọdụ gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ na-ewu otu akụkụ nke atụmatụ gị. Ka ọ na-erule Nkuzi 6, ị ga-enwe atụmatụ AI otu peeji zuru ezu. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dee atụmatụ AI otu peeji maka otu gị nwere akụkụ ise: (1) ebumnuche (mission) gị n'otu ahịrịokwu, (2) ọrụ atọ AI ga-enyere aka, nke e hazirela site n'uru na ihe egwu, (3) opekata mpe iwu ise maka iji AI, gụnyere iwu nzuzo, (4) nnwale ụbọchị 30 nwere otu onye na-elekọta ya, otu ngwa na ụbọchị mmalite, na (5) ihe abụọ ị ga-eji tụọ nsonaazụ ị ga-akọrọ bọọdụ gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị isi ọrụ, ndị fada na ndị pastọ, ndị otu bọọdụ, ndị na-elekọta mmemme na ndị ndu ndị ọrụ afọ ofufo nke otu na-adịghị achọ uru na otu okpukpere chi chọrọ iji AI n'ebumnuche, ọ bụghị na mberede.",
    startingPoint: "Ha na-edu otu ndị ọrụ ma mara ebumnuche na mmemme ha nke ọma. Ụfọdụ ndị ọrụ na ndị ọrụ afọ ofufo na-eji ngwa AI n'onwe ha, mana otu ahụ enweghị atụmatụ ma ọ bụ iwu ha niile na-agbaso.",
    gap: "Na-enweghị atụmatụ, iji AI na-agbasa n'ebe niile: o nwere ike itinye ozi ndị na-enye onyinye ma ọ bụ ndị a na-ejere ozi n'ihe egwu, ma ọ bụ hapụ ọrụ ebe ọ ga-enyekarị ebumnuche aka. Ndị ndu chọrọ atụmatụ otu peeji na-ahọrọ ọrụ ziri ezi, na-etọ iwu, na-anwale n'enweghị nsogbu, ma na-akọrọ bọọdụ nsonaazụ.",
    constraints: [
      "Obere ego: ka mma iji AI dịworị n'ime ngwa otu ahụ nwere",
      "Ndị ndu enweghị oge buru ibu, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5",
      "Nzuzo: ozi ndị na-enye onyinye, ndị ọrụ afọ ofufo na ndị a na-ejere ozi anaghị abanye n'AI; iwu ndị ọzọ nwere ike ịdị maka ozi ahụike, ozi ụmụaka ma ọ bụ ozi iwu",
      "AI anaghị ekpebi mgbe ọ bụla onye ga-enweta enyemaka, onye a ga-ewe n'ọrụ ma ọ bụ onye a ga-achụpụ",
      "Nkwado na nlekọta bọọdụ"
    ],
    prerequisites: "\"Mmalite AI maka Otu Na-adịghị Achọ Uru\", ma ọ bụ ụfọdụ ahụmịhe n'iji ngwa enyemaka AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ebumnuche otu gị", action: "ịkọwara bọọdụ ma ọ bụ ndị ndu gị ihe mere otu gị ji chọọ atụmatụ AI dị mfe", standard: "na-amalite site n'ebumnuche, ọ bụghị site na ngwa" },
    { id: "O2", condition: "Mgbe ị jụchara ndị ọrụ na ndị ọrụ afọ ofufo ihe na-eri oge ha n'izu", action: "idepụta ọrụ ndị na-emegharị onwe ha ma mata ndị AI nwere ike inyere aka na ndị ga-anọgide n'aka mmadụ", standard: "na-ahapụ mkpebi ọ bụla gbasara mmadụ n'aka mmadụ" },
    { id: "O3", condition: "Mgbe e nyere gị ndepụta ọrụ ndị dabara AI", action: "inye ọrụ ọ bụla akara site na 1 ruo 3 maka uru na ihe egwu ma họrọ atọ kacha elu", standard: "na-etinye ọrụ nwere uru dị elu na ihe egwu dị ala n'ihu" },
    { id: "O4", condition: "Maka ndị ọrụ gị na ndị ọrụ afọ ofufo", action: "ide opekata mpe iwu ise doro anya maka iji AI, gụnyere iwu nzuzo", standard: "dị mkpụmkpụ ka o ruo otu peeji ma dị mfe nke na onye ọrụ afọ ofufo ọhụrụ ga-aghọta ya" },
    { id: "O5", condition: "Mgbe e nyere gị otu n'ime ọrụ atọ kacha elu gị", action: "ịhazi nnwale ụbọchị 30 nwere otu ngwa, otu onye na-elekọta ya, ụbọchị mmalite na baseline", standard: "na baseline ahụ tụrụ tupu ị malite" },
    { id: "O6", condition: "Na njedebe nke nnwale ahụ", action: "itunyere ihe nleba anya abụọ na baseline ma dee akụkọ bọọdụ nwere ahịrịokwu ise", standard: "nwere mkpebi doro anya ịnọgide, ịgbanwe ma ọ bụ ịkwụsị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhọrọ ebe AI na-enyere aka",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe mere otu na-adịghị achọ uru ji chọọ atụmatụ AI",
          minutes: 4,
          goal: "Kọwaara bọọdụ ma ọ bụ ndị ndu gị ihe mere otu gị ji chọọ atụmatụ AI dị mfe.",
          text: [
            "Ndị ọrụ gị na ndị ọrụ afọ ofufo nwere ike na-eji ngwa AI n'onwe ha, na-enweghị iwu ha niile na-agbaso. Nke a nwere ike ịchekwa oge, mana o nwekwara ike itinye ozi ndị na-enye onyinye ma ọ bụ ndị a na-ejere ozi n'ihe egwu, ma ọ bụ mee ihe e dere na-adịghị ka okwu unu.",
            "Atụmatụ AI bụ obere akwụkwọ na-ekwu ihe AI bụ maka ya n'otu gị, ihe ọ bụghị maka ya, onye na-ekpebi, na otu unu ga-esi lelee na ọ na-enyere ebumnuche unu aka.",
            "Ezigbo atụmatụ na-amalite site n'ebumnuche, ọ bụghị site na ngwa. Ajụjụ abụghị \"Kedu AI anyị ga-azụ?\" kama ọ bụ \"Ebee ka ndị otu anyị na-atụfu oge nke anyị nwere ike iweghachi nye ndị anyị na-ejere ozi?\""
          ],
          words: [["Atụmatụ AI", "obere akwụkwọ na-ekwu otu otu gị ga-esi jiri AI na otu ọ na-agaghị esi jiri ya."], ["Ebumnuche (mission)", "ihe kpatara otu gị ji dị, ihe ọ na-arụ maka ndị mmadụ."], ["Ndị metụtara ya (stakeholder)", "onye ọ bụla ọrụ unu na-emetụta: ndị a na-ejere ozi, ndị na-enye onyinye, ndị ọrụ afọ ofufo, ndị ọrụ, bọọdụ."]],
          slides: [
            { title: "Gịnị mere atụmatụ?", bullets: ["Ndị mmadụ nwere ike na-eji AI na-enweghị iwu", "Nzuzo na ntụkwasị obi nọ n'ihe egwu", "Atụmatụ na-eme ka iji AI gbasasịrị ghọọ ezi enyemaka"] },
            { title: "Atụmatụ AI na-ekwu", bullets: ["Ihe AI bụ maka ya, na ihe ọ bụghị maka ya", "Onye na-ekpebi", "Otu unu ga-esi lelee na ọ na-enyere aka"] },
            { title: "Malite site n'ebumnuche", bullets: ["Ọ bụghị \"Kedu ngwa?\"", "Kama \"Ebee ka anyị na-atụfu oge?\"", "Weghachi oge ahụ nye ndị unu na-ejere ozi"] }
          ],
          tryIt: "Dee ebumnuche gị n'otu ahịrịokwu n'elu peeji efu nwere aha \"Atụmatụ AI Anyị\". N'okpuru ya, dee otu ahịrịokwu na-ekwu ihe mere otu gị ji chọọ atụmatụ ugbu a.",
          youCanNow: "ịkọwa ihe mere otu na-adịghị achọ uru ji chọọ atụmatụ AI ma malite otu site n'ebumnuche gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka atụmatụ AI na-ekwu?", options: ["Ihe AI bụ maka ya, ihe ọ bụghị maka ya, onye na-ekpebi na otu unu ga-esi lelee na ọ na-enyere aka", "Ụlọ ọrụ AI unu ga-etinye ego na ya", "Okwuntughe onye ọrụ ọ bụla", "Naanị ọnụ ahịa ngwa AI"], answer: 0, why: "Atụmatụ na-ekwu ihe AI bụ maka ya na ihe ọ bụghị maka ya, onye na-ekpebi na otu unu si elele na ọ na-enyere ebumnuche aka." },
            { objective: "O1", q: "Otu onye bọọdụ jụrụ, \"Kedu AI anyị ga-azụ?\" Kedu otu ị ga-esi zaa?", options: ["Zụta nke kacha ama ama", "Bido site n'ịjụ ebe ndị otu anyị na-atụfu oge nke anyị nwere ike iweghachi nye ndị anyị na-ejere ozi", "Zụta ngwa niile ma hụ", "Chere ruo mgbe otu ndị ọzọ kpebiri"], answer: 1, why: "Ezigbo atụmatụ na-amalite site n'ebumnuche, ọ bụghị site na ngwa." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhụ ebe oge ndị otu gị na-aga",
          minutes: 5,
          goal: "Depụta ọrụ otu gị na-emegharị ma mata ndị AI nwere ike inyere aka.",
          text: [
            "AI na-enyekarị aka n'ọrụ ndị na-emegharị onwe ha, nwere ọtụtụ ide ihe ma ọ bụ ịhazi ihe, ma na-agbaso otu usoro. Ọmụmaatụ: ozi ncheta ndị ọrụ afọ ofufo kwa izu, akwụkwọ ozi ekele nye ndị na-enye onyinye, ihe mbụ (draft) nke akwụkwọ akụkọ (newsletter), ndetu nzukọ, nchịkọta akụkọ grant, na ịza otu ajụjụ ọha na-ajụkarị.",
            "AI ekwesịghị ime mkpebi gbasara mmadụ: onye ga-enweta enyemaka, onye a ga-ewe n'ọrụ, ma ọ bụ onye a ga-achụpụ. Ihe ndị a chọrọ uche mmadụ, ikpe ziri ezi na nlekọta.",
            "Jụọ mmadụ atọ ma ọ bụ anọ n'otu gị, gụnyere otu onye ọrụ afọ ofufo, ọrụ ndị na-eri oge ha n'izu. Ihe ị ga-amụta ga-eju gị anya."
          ],
          steps: ["Depụta ọrụ iri ndị otu gị na-arụ kwa izu ma ọ bụ kwa ọnwa.", "N'akụkụ nke ọ bụla, dee ihe dị ka awa ole ọ na-ewe.", "Kaa akara n'ọrụ ndị na-emegharị ma nwee ide ihe, ịhazi ihe ma ọ bụ ịchịkọta ihe.", "Kpachapụ ọrụ ndị na-ekpebi ihe gbasara mmadụ."],
          words: [["Ọrụ na-emegharị onwe ya", "ọrụ a na-arụ n'otu ụzọ ahụ ugboro ugboro, dị ka ozi ncheta kwa izu."], ["Uche mmadụ (human judgment)", "mkpebi mmadụ na-eme site na nlekọta, ikpe ziri ezi na ịmata ọnọdụ ahụ."]],
          slides: [
            { title: "Ọrụ dabara AI", bullets: ["Na-emegharị ugboro ugboro", "Ọtụtụ ide ihe, ịhazi ma ọ bụ ịchịkọta ihe", "Na-agbaso otu usoro"] },
            { title: "Ọmụmaatụ n'otu na-adịghị achọ uru", bullets: ["Ozi ncheta ndị ọrụ afọ ofufo na ekele ndị na-enye onyinye", "Ihe mbụ akwụkwọ akụkọ na ndetu nzukọ", "Azịza nye ajụjụ ọha na-ajụkarị"] },
            { title: "Hapụ n'aka mmadụ", bullets: ["Onye ga-enweta enyemaka", "Onye a ga-ewe n'ọrụ ma ọ bụ achụpụ", "Ihe ọ bụla chọrọ nlekọta na ikpe ziri ezi"] }
          ],
          tryIt: "Mee ndepụta ọrụ iri nwere awa ha maka otu gị. Kaa akara n'ọrụ ndị dabara AI ma kpachapụ ndị ọ bụla na-ekpebi ihe gbasara mmadụ.",
          youCanNow: "ịhụ ọrụ ndị otu gị na-emegharị ma họpụta ọrụ ndị dabara AI.",
          quickCheck: [
            { objective: "O2", q: "Kedu ụdị ọrụ AI na-enyekarị aka?", options: ["Mkpebi gbasara onye ga-enweta enyemaka", "Nhọrọ maka iwe mmadụ n'ọrụ", "Ọrụ ndị na-emegharị, nwere ide ihe ma ọ bụ ịhazi ihe, ma na-agbaso otu usoro", "Mkparịta ụka nlekọta ndị ụka (pastoral care)"], answer: 2, why: "AI na-enyekarị aka n'ọrụ ide na ịhazi ihe na-emegharị ma na-agbaso usoro." },
            { objective: "O2", q: "Mmadụ tụrụ aro iji AI kpebie ezinụlọ ndị ga-abanye na mmemme nri. Gịnị ka ị ga-ekwu?", options: ["Ee, ọ dị ngwa", "Ee, ma ọ bụrụ na AI kọwara onwe ya", "Naanị maka ezinụlọ ọhụrụ", "Mba; mkpebi gbasara mmadụ chọrọ uche mmadụ"], answer: 3, why: "AI ekwesịghị ime mkpebi gbasara onye ga-enweta enyemaka." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịhazi echiche site n'uru na ihe egwu",
          minutes: 5,
          goal: "Hazie echiche AI gị ma họrọ atọ kacha elu ị ga-eji malite.",
          text: [
            "Maka ọrụ ọ bụla dabara AI, jụọ ajụjụ abụọ. Uru: oge ole ma ọ bụ mma ole ka anyị ga-enweta? Ihe egwu: gịnị nwere ike ịga njọ, ọ ga-adịkwa njọ ole?",
            "Ọrụ nwere ihe egwu dị ala na uru dị elu na-ebu ụzọ, dịka ọmụmaatụ ide ozi ncheta ndị ọrụ afọ ofufo site n'ozi mmemme ọha. Ọrụ nwere ihe egwu dị elu, dị ka ihe ọ bụla nwere ndetu okwu ndị a na-ejere ozi (case notes) ma ọ bụ ozi ahụike, na-echere ruo mgbe unu nwere iwu siri ike na ngwa e nyere ikike, nke echekwara nke ọma, ma ọ bụ ha anọghị na ndepụta ahụ.",
            "Nye nke ọ bụla akara site na 1 (dị ala) ruo 3 (dị elu). Malite site n'uru dị elu na ihe egwu dị ala. Ọrụ atọ e mere nke ọma ka mma karịa ọrụ iri e mere ọkara."
          ],
          steps: ["Nye ọrụ ọ bụla akara uru site na 1 ruo 3.", "Nye ọrụ ọ bụla akara ihe egwu site na 1 ruo 3.", "Hazie ha: uru dị elu na ihe egwu dị ala n'ihu.", "Họrọ atọ kacha elu gị."],
          words: [["Uru", "oge, ego ma ọ bụ mma ole mgbanwe ga-eweta."], ["Ihe egwu", "ihe nwere ike ịga njọ na mmerụ ole ọ ga-akpata."]],
          slides: [
            { title: "Ajụjụ abụọ maka ọrụ ọ bụla", bullets: ["Uru: gịnị ka anyị ga-enweta?", "Ihe egwu: gịnị nwere ike ịga njọ?"] },
            { title: "Akara 1 ruo 3", bullets: ["Uru dị elu + ihe egwu dị ala = malite ebe a", "Ihe egwu dị elu = chere iwu ma ọ bụ hapụ ya"] },
            { title: "Ọmụmaatụ", bullets: ["Ihe egwu dị ala: ozi ncheta ndị ọrụ afọ ofufo site n'ozi mmemme ọha", "Ihe egwu dị elu: ihe ọ bụla nwere ndetu okwu ndị a na-ejere ozi"] },
            { title: "Họrọ atọ", bullets: ["Atọ e mere nke ọma ka mma karịa iri e mere ọkara"] }
          ],
          tryIt: "Nye ọrụ ndị i kara akara akara maka uru na ihe egwu. Dee atọ kacha elu gị n'okpuru isiokwu \"Ebe AI ga-enyere aka\" n'atụmatụ gị.",
          youCanNow: "ịhazi echiche AI site n'uru na ihe egwu ma họrọ atọ ị ga-eji malite.",
          quickCheck: [
            { objective: "O3", q: "N'ime nkuzi a, kedu ọ̀tụ̀tụ̀ ị na-eji enye uru na ihe egwu akara?", options: ["1 (dị ala) ruo 3 (dị elu)", "1 ruo 100", "Naanị ee ma ọ bụ mba", "A ruo F"], answer: 0, why: "Nye nke ọ bụla akara site na 1 (dị ala) ruo 3 (dị elu)." },
            { objective: "O3", q: "Ị nwere echiche AI iri. Gịnị ka ị ga-eme?", options: ["Malite iri ahụ niile otu mgbe", "Họrọ ihe dị ka atọ nwere uru dị elu na ihe egwu dị ala", "Họrọ atọ kacha nwee ihe egwu", "Hapụ onye ọrụ ọ bụla ka ọ họrọ otu"], answer: 1, why: "Ọrụ atọ e mere nke ọma ka mma karịa ọrụ iri e mere ọkara." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhọrọ ebe AI na-enyere aka",
        questions: [
          { objective: "O1", q: "Site n'ebee ka atụmatụ AI nke otu na-adịghị achọ uru kwesịrị ịmalite?", options: ["Ebumnuche", "Ngwa kacha ọhụrụ", "Ọnụ ahịa kacha ala", "Weebụsaịtị otu ọzọ"], answer: 0, why: "Atụmatụ na-amalite site n'ebumnuche na ebe oge nwere ike ịlaghachi nye ndị unu na-ejere ozi." },
          { objective: "O2", q: "Kedu ọrụ kacha dabara AI?", options: ["Ikpebi onye ga-enweta enyemaka nri", "Ide ozi ncheta ndị ọrụ afọ ofufo kwa izu", "Ịhọrọ ndị ọrụ a ga-ewe", "Ịchụpụ onye a na-ejere ozi"], answer: 1, why: "Ọrụ ide ihe na-emegharị dabara AI; mkpebi gbasara mmadụ na-anọ n'aka mmadụ." },
          { objective: "O3", q: "Otu ọrụ nwetara akara uru dị elu na ihe egwu dị ala. Gịnị ka ị ga-eme?", options: ["Hapụ ya", "Chere afọ ise", "Tinye ya n'akụkụ elu nke ndepụta gị", "Nye bọọdụ ka ha dee ya"], answer: 2, why: "Ọrụ nwere uru dị elu na ihe egwu dị ala na-ebu ụzọ." },
          { objective: "O3", q: "Otu ọrụ nwere ozi ahụike ndị a na-ejere ozi. Kedu otu ị ga-esi hazie ya?", options: ["Ihe egwu kacha ala", "Bu ụzọ mee ya", "Tinye ya n'ihu ọha", "Ihe egwu dị elu: chere iwu siri ike na ngwa echekwara nke ọma, ma ọ bụ hapụ ya"], answer: 3, why: "Ozi nzuzo ndị a na-ejere ozi nwere ihe egwu dị elu." },
          { objective: "O2", q: "Gịnị mere ị ga-eji jụọ ndị ọrụ afọ ofufo na ndị ọrụ ihe na-eri oge ha n'izu?", options: ["Ịchọta ezi ọrụ ndị na-emegharị", "Ịta mmadụ ụta", "Ibelata ndị ọrụ afọ ofufo", "Iwu chọrọ ya"], answer: 0, why: "Ndị na-arụ ọrụ ahụ maara ebe oge na-aga." }
        ]
      }
    },
    {
      name: "Isi 2: Iwu, nnwale na nsonaazụ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ide iwu AI dị mfe",
          minutes: 5,
          goal: "Dee opekata mpe iwu ise doro anya maka otu ndị ọrụ gị na ndị ọrụ afọ ofufo ga-esi jiri AI.",
          text: [
            "Iwu na-eme ka iji AI ghara inwe nsogbu. Mee ka ha dị mkpụmkpụ ka ha ruo otu peeji, ma dị mfe nke na onye ọrụ afọ ofufo ọhụrụ ga-agbaso ha.",
            "Iwu isi ọtụtụ otu na-adịghị achọ uru chọrọ: jiri naanị ngwa e nyere ikike; etinyela ozi nzuzo ndị na-enye onyinye, ndị ọrụ afọ ofufo ma ọ bụ ndị a na-ejere ozi; mmadụ na-enyocha ihe niile tupu e zipu ya ma ọ bụ bipụta ya; lelee eziokwu na nọmba ọ bụla; kwuo eziokwu mgbe AI nyere aka n'ebe ọ dị mkpa; AI anaghịkwa ekpebi onye ga-enweta enyemaka.",
            "Otu okpukpere chi nwere ike ịgbakwunye iwu na-ekwu na ozizi (sermon), ekpere na nlekọta ndị ụka na-anọgide n'aka mmadụ. Jụọ ọka iwu ma ọ bụ ụlọ ọrụ inshọransị gị ma ọ bụrụ na unu na-edebe ozi ahụike, ozi ụmụaka ma ọ bụ ozi iwu, n'ihi na iwu ndị ọzọ nwere ike ịdị."
          ],
          steps: ["Depụta ngwa AI e nyere ikike.", "Dee iwu nzuzo: ihe na-agaghị abanye n'AI mgbe ọ bụla.", "Dee iwu nyocha: onye na-elele tupu ihe ọ bụla apụọ.", "Dee iwu mkpebi: AI anaghị ekpebi ihe gbasara mmadụ.", "Gbakwunye iwu ọ bụla ebumnuche gị chọrọ."],
          words: [["Iwu iji AI (AI use policy)", "iwu e dere ede maka otu ndị nọ n'otu gị nwere ike isi jiri AI."], ["Ngwa e nyere ikike (approved tool)", "ngwa AI ndị ndu gị leleworo ma kwe ka e jiri ya."]],
          slides: [
            { title: "Mee ka iwu dị mkpụmkpụ", bullets: ["Otu peeji", "Dị mfe nke na onye ọrụ afọ ofufo ọhụrụ ga-aghọta ya"] },
            { title: "Iwu isi", bullets: ["Naanị ngwa e nyere ikike", "Enweghị ozi nzuzo ndị na-enye onyinye ma ọ bụ ndị a na-ejere ozi", "Mmadụ na-enyocha tupu ọ pụọ", "Lelee eziokwu na nọmba ọ bụla"] },
            { title: "Iwu ndị ọzọ", bullets: ["AI anaghị ekpebi onye ga-enweta enyemaka", "Kwuo eziokwu mgbe AI nyere aka", "Gbakwunye iwu ebumnuche gị chọrọ"] },
            { title: "Chọọ ndụmọdụ", bullets: ["Ozi ahụike, ụmụaka ma ọ bụ iwu: jụọ ọka iwu ma ọ bụ ụlọ ọrụ inshọransị"] }
          ],
          tryIt: "Dee opekata mpe iwu ise n'okpuru isiokwu \"Iwu AI anyị\" n'atụmatụ gị. Gụọrọ otu onye ọrụ afọ ofufo ha ma jụọ ma ihe ọ bụla edoghị anya.",
          youCanNow: "ide iwu iji AI dị mfe nke ndị otu gị nwere ike ịgbaso.",
          quickCheck: [
            { objective: "O4", q: "Ogologo ole ka iwu AI gị kwesịrị ịdị?", options: ["Opekata mpe peeji 20", "Naanị n'ọnụ, a naghị ede ha", "Dị mkpụmkpụ ka ha ruo otu peeji", "Ogologo dị ka iwu ntọala otu (bylaws)"], answer: 2, why: "Mee ka iwu dị mkpụmkpụ ka ha ruo otu peeji ma dị mfe maka onye ọrụ afọ ofufo ọhụrụ." },
            { objective: "O4", q: "Ụka gị chọrọ iwu gbasara ekpere na ozizi. Gịnị ka ọ nwere ike ikwu?", options: ["AI na-ede ozizi niile", "AI na-ahọrọ ndị a ga-eleta maka ekpere", "Ọ dịghị ihe; ụka achọghị iwu", "Ozizi, ekpere na nlekọta ndị ụka na-anọgide n'aka mmadụ"], answer: 3, why: "Otu okpukpere chi nwere ike ịgbakwunye iwu na-ekwu na ihe ndị a na-anọgide n'aka mmadụ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịhazi nnwale ụbọchị 30",
          minutes: 5,
          goal: "Hazie obere nnwale AI ụbọchị 30 n'otu ọrụ, nwere otu onye na-elekọta ya.",
          text: [
            "Nnwale (pilot) bụ obere ule tupu ị gbanwee ihe niile. Họrọ otu n'ime ọrụ atọ kacha elu gị, otu ngwa, otu onye na-ahụ maka ya, na ụbọchị 30.",
            "Tupu ị malite, tụọ otu ihe si arụ ọrụ taa. Ọ bụrụ na ozi ncheta ndị ọrụ afọ ofufo na-ewe awa 3 kwa izu, dee nke ahụ. Nke ahụ bụ ebe ị na-amalite, ma ọ bụ baseline.",
            "Debe ndetu n'oge nnwale ahụ: oge e jiri, nsogbu, na ihe ndị mmadụ kwuru. Jiri ngwa otu gị nweworị ma ọ bụrụ na ị nwere ike, dị ka AI dị n'ime Microsoft 365 ma ọ bụ Google Workspace, ka ị ghara ịgbakwunye ego."
          ],
          steps: ["Họrọ otu ọrụ site n'atọ kacha elu gị.", "Họrọ otu ngwa e nyere ikike na otu onye na-elekọta ya.", "Dee baseline: oge ole ọ na-ewe taa.", "Tọọ ụbọchị mmalite na ụbọchị njedebe ụbọchị 30 ka e mesịrị.", "Debe ndetu dị mfe kwa izu."],
          words: [["Nnwale (pilot)", "obere ule dị mkpụmkpụ tupu mgbanwe ka ukwuu."], ["Baseline", "otu ihe si arụ ọrụ taa, nke a tụrụ tupu ị gbanwee ya."], ["Onye na-elekọta ya (owner)", "otu onye na-ahụ maka nnwale ahụ."]],
          slides: [
            { title: "Nnwale bụ obere ule", bullets: ["Otu ọrụ, otu ngwa, otu onye na-elekọta ya", "Ụbọchị 30"] },
            { title: "Bu ụzọ tụọ", bullets: ["Baseline: oge ole ọ na-ewe taa", "Ọmụmaatụ: ozi ncheta na-ewe awa 3 kwa izu"] },
            { title: "N'oge nnwale", bullets: ["Dee oge e jiri", "Dee nsogbu", "Dee ihe ndị mmadụ kwuru"] }
          ],
          tryIt: "N'okpuru \"Nnwale ụbọchị 30 anyị\", dee ọrụ ahụ, ngwa, onye na-elekọta ya, ụbọchị mmalite, ụbọchị njedebe na baseline.",
          youCanNow: "ịhazi nnwale AI ụbọchị 30 nwere onye doro anya na-elekọta ya na baseline.",
          quickCheck: [
            { objective: "O5", q: "Ndetu gịnị ka ị na-edebe n'oge nnwale?", options: ["Oge e jiri, nsogbu na ihe ndị mmadụ kwuru", "Naanị ụbọchị mmalite", "Ego ndị na-enye onyinye nyere", "Ọ dịghị ihe ruo na njedebe"], answer: 0, why: "Debe ndetu banyere oge e jiri, nsogbu na ihe ndị mmadụ kwuru." },
            { objective: "O5", q: "Ị chọrọ ịmalite nnwale maka ide akwụkwọ akụkọ (newsletter) n'izu na-abịa. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Zụta ngwa AI ọhụrụ", "Dee oge ole akwụkwọ akụkọ na-ewe taa", "Malite na-agwaghị onye ọ bụla", "Hazie ọrụ ise otu mgbe"], answer: 1, why: "Bu ụzọ tụọ otu ihe si arụ ọrụ taa; nke ahụ bụ baseline gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịtụ nsonaazụ na ịkọrọ bọọdụ gị",
          minutes: 5,
          goal: "Họrọ ihe abụọ ị ga-eji tụọ nsonaazụ ma kọọ nsonaazụ nnwale n'obere akụkọ bọọdụ.",
          text: [
            "Họrọ ihe nleba anya abụọ: otu maka oge ma ọ bụ ego (awa e chekwara kwa izu) na otu maka mma (mperi belatara, ndị ọrụ afọ ofufo ọzọ debanyere aha, ịza ọha ngwa ngwa, ma ọ bụ ihe ndị gụrụ ya kwuru).",
            "Na njedebe, tụnyere ya na baseline gị. Wee kpebie: nọgide na ya, gbanwee ya, ma ọ bụ kwụsị ya. Ịkwụsị bụ nsonaazụ dị mma; ị mụtara ihe n'ọnụ ala.",
            "Kọọrọ bọọdụ gị n'ahịrịokwu ise: ihe unu nwalere, ihe gbanwere, nsogbu ọ bụla, ma e gbasoro iwu, na ihe ị na-atụ aro ka e mee ọzọ. Bọọdụ na-eche maka ebumnuche, ego, ihe egwu na ntụkwasị obi."
          ],
          steps: ["Họrọ otu ihe nleba anya maka oge na otu maka mma.", "Tụnyere njedebe nnwale ahụ na baseline gị.", "Kpebie: nọgide, gbanwee ma ọ bụ kwụsị.", "Dee akụkọ bọọdụ nwere ahịrịokwu ise."],
          words: [["Ihe nleba anya (measure)", "nọmba ma ọ bụ ihe ịrịba ama ị na-esochi iji hụ ma ihe rụrụ ọrụ."], ["Bọọdụ", "otu ndị mmadụ na-achị otu na-adịghị achọ uru ma na-elekọta ndị ndu ya."]],
          slides: [
            { title: "Ihe nleba anya abụọ", bullets: ["Oge: awa e chekwara kwa izu", "Mma: mperi, ndebanye aha, azịza, ihe ndị mmadụ kwuru"] },
            { title: "Kpebie", bullets: ["Nọgide na ya", "Gbanwee ya", "Kwụsị ya: ọ ka bụ nsonaazụ bara uru"] },
            { title: "Akụkọ bọọdụ ahịrịokwu ise", bullets: ["Ihe anyị nwalere na ihe gbanwere", "Nsogbu na ma e gbasoro iwu", "Ihe anyị na-atụ aro ka e mee ọzọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ AI otu peeji gị. Gbakwunye ihe nleba anya abụọ, wee chịkọta akụkụ ise ahụ niile: ebumnuche, ọrụ atọ, iwu, nnwale ụbọchị 30 na ihe nleba anya ị ga-akọrọ bọọdụ gị.",
          youCanNow: "ide atụmatụ AI otu peeji zuru ezu ma kọọrọ bọọdụ gị nsonaazụ.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ ihe nleba anya maka oge ma ọ bụ ego?", options: ["Ihe ndị gụrụ ya kwuru", "Mperi belatara", "Awa e chekwara kwa izu", "Ndị ọrụ afọ ofufo ọzọ debanyere aha"], answer: 2, why: "Awa e chekwara kwa izu na-atụ oge; ndị ọzọ na-atụ mma." },
            { objective: "O6", q: "Nnwale ahụ chekwara oge mana otu onye ọrụ mebiri iwu nzuzo otu ugboro. Gịnị na-aba n'akụkọ bọọdụ?", options: ["Naanị oge e chekwara", "Ọ dịghị ihe; ọ bụ obere mperi", "Naanị arịrịọ maka ego ọzọ", "Nsonaazụ, nsogbu ahụ, ma e gbasoro iwu na ihe ị na-atụ aro ka e mee ọzọ"], answer: 3, why: "Akụkọ ahụ na-ekwu ihe unu nwalere, ihe gbanwere, nsogbu, ma e gbasoro iwu na nzọụkwụ ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwu, nnwale na nsonaazụ",
        questions: [
          { objective: "O4", q: "Kedu nke bụ iwu AI isi maka otu na-adịghị achọ uru?", options: ["Tinye faịlụ ndị a na-ejere ozi ka i nweta azịza ka mma", "Mmadụ na-enyocha ihe niile tupu ọ pụọ", "AI na-ahọrọ onye ga-enweta enyemaka", "Ngwa ọ bụla dị mma"], answer: 1, why: "Nyocha mmadụ na-echebe mma ọrụ na ntụkwasị obi." },
          { objective: "O5", q: "Gịnị bụ baseline?", options: ["Akara ikpeazụ", "Ụdị AI", "Otu ọrụ ahụ si arụ taa, tupu mgbanwe", "Mmefu ego bọọdụ"], answer: 2, why: "Ị na-atụnyere nsonaazụ na baseline." },
          { objective: "O5", q: "Ole ka nnwale mbụ kwesịrị ịdị?", options: ["Ọrụ niile otu mgbe", "Enweghị oke oge", "Bọọdụ niile", "Otu ọrụ, otu ngwa, otu onye na-elekọta ya, ụbọchị 30"], answer: 3, why: "Obere ule na-akụziri gị ihe n'ọnụ ala na n'enweghị nsogbu." },
          { objective: "O6", q: "Nnwale ahụ echekwaghị oge. Kedu ezigbo mkpebi?", options: ["Kwụsị ma ọ bụ gbanwee ya; ị mụtara ihe", "Zoo nsonaazụ ahụ", "Manye onye ọ bụla ka o jiri ya", "Ta ndị ọrụ afọ ofufo ụta"], answer: 0, why: "Ịkwụsị bụ nsonaazụ dị mma na nke eziokwu." },
          { objective: "O4", q: "Otu gị na-edebe ozi ụmụaka. Gịnị ka ị ga-agbakwunye?", options: ["Ọ dịghị ihe", "Ndụmọdụ site n'aka ọka iwu ma ọ bụ ụlọ ọrụ inshọransị banyere iwu ndị ọzọ", "Tinye ya n'AI", "Kesaa ya n'ihu ọha"], answer: 1, why: "Iwu ndị ọzọ nwere ike ịdị maka ozi ụmụaka, ahụike na iwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịkwado Atụmatụ AI maka Otu Gị Na-adịghị Achọ Uru",
    questions: [
      { objective: "O1", q: "Atụmatụ AI maka otu na-adịghị achọ uru bụ:", options: ["Ịzụ ngwanrọ (software)", "Mmemme ịchọ ego", "Obere akwụkwọ na-ekwu otu unu ga-esi jiri AI na otu unu na-agaghị esi jiri ya", "Ndepụta ndị na-enye onyinye"], answer: 2, why: "Ọ na-etọ ebumnuche, iwu na nlele maka iji AI." },
      { objective: "O1", q: "Ajụjụ mbụ kacha mma maka atụmatụ AI bụ:", options: ["Kedu ngwa kacha ama ama?", "Kedu otu anyị ga-esi dochie ndị ọrụ afọ ofufo?", "Ego ole ka otu ndị ọzọ na-akwụ?", "Ebee ka ndị otu anyị na-atụfu oge anyị nwere ike iweghachi nye ebumnuche anyị?"], answer: 3, why: "Malite site n'ebumnuche na oge, ọ bụghị site na ngwa." },
      { objective: "O1", q: "Gịnị mere enweghị atụmatụ AI ji nwee ihe egwu?", options: ["Ndị mmadụ nwere ike iji AI na-enweghị iwu nzuzo", "AI megidere iwu", "Ndị na-enye onyinye chọrọ AI", "O nweghị ihe egwu"], answer: 0, why: "Iji ya na-enweghị atụmatụ nwere ike ikpughe ozi nzuzo." },
      { objective: "O2", q: "Kedu ọrụ dabara AI?", options: ["Ikpebi onye a ga-achụpụ n'ụlọ obibi", "Ịchịkọta ogologo akụkọ grant", "Iwe pastọ ọhụrụ n'ọrụ", "Ịbịanye aka n'akwụkwọ mgbazinye ụlọ"], answer: 1, why: "Ịchịkọta ihe bụ ọrụ na-agbaso usoro; ndị ọzọ bụ mkpebi mmadụ." },
      { objective: "O2", q: "Kedu nke kwesịrị ịnọ n'aka mmadụ?", options: ["Ide ozi ncheta", "Ịhazi akwụkwọ akụkọ", "Ikpebi onye ga-enweta enyemaka", "Idepụta isiokwu nzukọ"], answer: 2, why: "Mkpebi gbasara mmadụ chọrọ uche mmadụ." },
      { objective: "O2", q: "Mgbe ị na-ahụ ebe oge na-aga, ị kwesịrị:", options: ["Ịkọ otu ọrụ n'echiche", "Ịjụ naanị bọọdụ", "Ịhapụ ndị ọrụ afọ ofufo", "Idepụta ọrụ na awa ha na-ewe"], answer: 3, why: "Awa na-egosi ebe AI nwere ike ịkacha nyere aka." },
      { objective: "O3", q: "Kedu akara abụọ ị na-eji ahazi echiche?", options: ["Uru na ihe egwu", "Agba na nha", "Ọnụ ahịa na aha ụlọ ọrụ", "Afọ na ogologo"], answer: 0, why: "Uru dị elu na ihe egwu dị ala na-ebu ụzọ." },
      { objective: "O3", q: "Ọrụ ole ka ị kwesịrị iji malite?", options: ["Ọrụ niile", "Ihe dị ka atọ", "Ọ dịghị nke ọ bụla", "Iri ise"], answer: 1, why: "Atọ e mere nke ọma ka mma karịa iri e mere ọkara." },
      { objective: "O3", q: "Kedu ọrụ nwere ihe egwu kacha ala?", options: ["Ịchịkọta ndetu okwu ndị a na-ejere ozi", "Inyocha ozi ụlọ akụ ndị na-enye onyinye", "Ozi ncheta ndị ọrụ afọ ofufo site n'ozi mmemme ọha", "Ide ndụmọdụ ahụike"], answer: 2, why: "Ọ na-eji naanị ozi ọha." },
      { objective: "O4", q: "Iwu iji AI kwesịrị ịdị:", options: ["Peeji iri ise", "Nzuzo", "E dere naanị n'okwu iwu", "Mkpụmkpụ ma dị mfe nke na onye ọrụ afọ ofufo ọhụrụ ga-aghọta ya"], answer: 3, why: "A na-agbaso iwu dị mfe." },
      { objective: "O4", q: "Kedu nke bụ iwu nzuzo?", options: ["Etinyela ozi nzuzo ndị na-enye onyinye ma ọ bụ ndị a na-ejere ozi n'AI mgbe ọ bụla", "Jiri ngwa ọ bụla masịrị gị", "Kesaa okwuntughe ka i chekwaa oge", "Bipụta akụkọ ndị a na-ejere ozi nwere aha ha"], answer: 0, why: "Ichebe ozi nzuzo na-echekwa ntụkwasị obi." },
      { objective: "O4", q: "Gịnị ka \"ngwa e nyere ikike\" pụtara?", options: ["Ngwa ọ bụla n'efu", "Ngwa ndị ndu gị lelere ma kwe ka e jiri ya", "Ngwa nwere mgbasa ozi", "Ngwa masịrị otu onye na-enye onyinye"], answer: 1, why: "Ndị ndu na-elele ngwa e nyere ikike maka nchekwa." },
      { objective: "O5", q: "Nnwale (pilot) bụ:", options: ["Iji ya n'ebe niile otu mgbe", "Grant", "Obere ule dị mkpụmkpụ tupu mgbanwe ka ukwuu", "Ntuli aka bọọdụ"], answer: 2, why: "Nnwale na-ebu ụzọ nwalee n'ọnụ ala." },
      { objective: "O5", q: "Gịnị mere ị ga-eji tụọ baseline tupu nnwale?", options: ["Iji mee ka ihe gaa nwayọọ", "N'ihi na ndị na-enye onyinye na-arịọ ya", "Ọ dịghị mkpa", "Ka i nwee ike itunyere nsonaazụ mgbe e mesịrị"], answer: 3, why: "Na-enweghị baseline, ị gaghị ama ma o nyere aka." },
      { objective: "O5", q: "Nnwale ọ bụla chọrọ:", options: ["Otu onye na-elekọta ya, onye na-ahụ maka ya", "Ọ dịghị onye na-ahụ maka ya", "Onye ọrụ ọ bụla na-ahụ maka ya", "Naanị AI"], answer: 0, why: "Otu onye na-elekọta ya na-eme ka ọ ghara ịpụ n'ụzọ." },
      { objective: "O5", q: "Gịnị mere ị ga-eji jiri AI dịworị n'ime ngwa unu nwere, dị ka Microsoft 365 ma ọ bụ Google Workspace?", options: ["Ọ na-adị mma mgbe niile", "Ọ nwere ike igbochi ịgbakwunye ego", "Ọ na-ekesara ndị na-enye onyinye ozi", "A chọrọ ya n'iwu"], answer: 1, why: "Iji ihe unu nweworị na-eme ka mmefu ego dị ala." },
      { objective: "O6", q: "Kedu nke bụ ihe nleba anya maka mma?", options: ["Agba akara (logo) ngwa ahụ", "Ọnụ ọgụgụ app AI e wụnyere", "Ndị ọrụ afọ ofufo ọzọ na-edebanye aha mgbe ozi ncheta gasịrị", "Ogologo iwu ahụ"], answer: 2, why: "Ihe nleba anya maka mma na-egosi ma ọrụ ahụ ka mma." },
      { objective: "O6", q: "Mgbe nnwale gasịrị, nhọrọ atọ gị bụ:", options: ["Zoo ya, leghara ya anya ma ọ bụ gọnahụ ya", "Zụta ngwa ndị ọzọ", "Chụpụ onye na-elekọta ya", "Nọgide na ya, gbanwee ya ma ọ bụ kwụsị ya"], answer: 3, why: "Kpebie site n'ihe nleba anya ndị ahụ." },
      { objective: "O6", q: "Ezigbo akụkọ bọọdụ bụ:", options: ["Ihe dị ka ahịrịokwu ise doro anya banyere nsonaazụ, ihe egwu na nzọụkwụ ọzọ", "Akụkọ teknụzụ peeji 40", "Ọ dịghị ihe", "Naanị ọnụ ahịa ngwa ahụ"], answer: 0, why: "Bọọdụ chọrọ foto dị mkpụmkpụ ma doo anya." },
      { objective: "O6", q: "Ihe bọọdụ na-echekarị maka ya bụ:", options: ["AI nwere akara (logo) kacha mma", "Ebumnuche, ego, ihe egwu na ntụkwasị obi", "Ọnụ ọgụgụ prompt e dere", "Naanị mmasị (likes) na soshal midia"], answer: 1, why: "Ndị a bụ ọrụ isi bọọdụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 4, 6, 10, 12, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebumnuche na-ebu ụzọ", objective: "O1", notYet: "Enweghị ahịrịokwu ebumnuche, ma ọ bụ atụmatụ ahụ na-amalite site na ngwa.", meets: "Ebumnuche n'otu ahịrịokwu na-emeghe atụmatụ ahụ.", exceeds: "Ọrụ ọ bụla a họrọrọ na-ekwu otu o si eweghachi oge nye ebumnuche." },
      { name: "Ọrụ atọ e hazirela", objective: "O3", notYet: "E hazighị ọrụ ndị ahụ, ma ọ bụ ọrụ nwere ihe egwu dị elu nọ n'ihu.", meets: "Ọrụ atọ e nyere akara maka uru na ihe egwu, uru dị elu na ihe egwu dị ala n'ihu.", exceeds: "Na-ekwu ọrụ ndị a hapụrụ na ihe kpatara ya." },
      { name: "Iwu AI doro anya", objective: "O4", notYet: "Iwu erughị ise, ma ọ bụ enweghị iwu nzuzo.", meets: "Opekata mpe iwu ise dị mkpụmkpụ, gụnyere nzuzo, ngwa e nyere ikike na nyocha mmadụ.", exceeds: "Na-agbakwunye iwu maka ihe egwu pụrụ iche nke otu ahụ, dị ka ozi ụmụaka." },
      { name: "Nnwale ụbọchị 30", objective: "O5", notYet: "Enweghị onye na-elekọta ya, ngwa ma ọ bụ ụbọchị mmalite.", meets: "Otu ọrụ, otu ngwa, otu onye na-elekọta ya, ụbọchị mmalite na baseline a tụrụ atụ.", exceeds: "Na-eji ngwa otu ahụ nweworị, nwere ndetu banyere ego." },
      { name: "Ihe nleba anya maka bọọdụ", objective: "O6", notYet: "Enweghị ihe nleba anya, ma ọ bụ a pụghị itunyere ha na baseline.", meets: "Otu ihe nleba anya maka oge ma ọ bụ ego na otu maka mma.", exceeds: "Gụnyere ihe mbụ (draft) nke akụkọ bọọdụ ahịrịokwu ise." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu ndị bọọdụ ha kwadoro atụmatụ AI e dere ede n'ime ụbọchị 60 (nnyocha nsochi)",
      "Otu ndị mechara nnwale ụbọchị 30 ma kọọ awa ha chekwara",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara otu na-adịghị achọ uru n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị na ngwa ide akwụkwọ (word processor)",
      "Ebumnuche otu gị e dere ede na ndepụta ọrụ ndị otu gị na-arụ kwa izu",
      "Ngwa enyemaka AI n'efu ma ọ bụ nke otu gị nweworị, maka ide ihe mbụ",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunye oge ịgwa ndị ọrụ na ndị ọrụ afọ ofufo okwu"
    ],
    facilitatorNotes: [
      "Ọ na-akacha arụ ọrụ mgbe ndị ndu abụọ ma ọ bụ atọ si n'otu otu na-ede otu atụmatụ ọnụ.",
      "Tupu nnọkọ ahụ, rịọ ndị na-amụ ihe ka ha jụọ ndị ọrụ na otu onye ọrụ afọ ofufo ihe na-eri oge ndị otu ha n'izu.",
      "Zipu ndị na-amụ ihe n'aka ọka iwu ma ọ bụ ụlọ ọrụ inshọransị mgbe ha na-edebe ozi ahụike, ozi ụmụaka ma ọ bụ ozi iwu.",
      "Mee ka ndị na-amụ ihe mụọ ịgụpụta akụkọ bọọdụ ahịrịokwu ise n'olu dị elu.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
