"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-business-strategy.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "smallbiz-ai-business-strategy-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-business-strategy",
  category: "Small Business",
  name: "Iwu Atụmatụ AI maka Azụmahịa na Njikọ Ngwa",
  skills: "Ịhụ ebe oge gị na-aga, Ịhọrọ ọrụ AI site n'uru na ihe egwu, Ime nnwale ụbọchị 30, Ịtụ nsonaazụ, Ijikọ ngwa n'enweghị nsogbu, Ide iwu iji AI",
  outcome: "ide atụmatụ AI nke otu peeji maka azụmahịa gị: ọrụ abụọ ị ga-ebu ụzọ meziwanye na ihe kpatara ya, nnwale ụbọchị 30 nwere ntụle tupu na mgbe e mechara, otu ngwa gị ga-esi jikọta na onye na-enye ikike maka gịnị, na obere iwu iji AI maka gị na ndị ọrụ gị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nwe obere azụmahịa jirila AI ntakịrị, ma ugbu a chọrọ atụmatụ kama ịnwa ihe n'enweghị usoro: ụlọ ahịa, ụlọ nri, ụlọ ntutu isi, ọrụ nhicha na ndozi, na obere ọfịs.",
    "Ị ga-ahụ ebe oge gị na-aga, họrọ ọrụ AI bara uru, nwalee otu n'ime ha ụbọchị 30 ma tụọ ya, mụta otu ngwa si ejikọ ibe ha (integrations), ma dee iwu dị mfe maka otu azụmahịa gị si eji AI.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọrụ ndị ahụ na-ewulite atụmatụ AI gị nke otu peeji."
  ],
  finalTask: "Dee atụmatụ AI gị nke otu peeji nwere akụkụ ise: (1) maapụ oge gị na ọrụ abụọ ị họrọ, ya na akara uru na ihe egwu maka nke ọ bụla; (2) nnwale ụbọchị 30 maka ọrụ mbụ ahụ nwere ntụle tupu na mgbe e mechara; (3) eserese dị mfe ma ọ bụ ndepụta nke otu ngwa gị si jikọta na nzọụkwụ ndị chọrọ ikike gị; (4) nlele ego ọ na-efu; (5) iwu ise iji AI maka gị na ndị ọrụ gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa jirila AI ntakịrị, ma ugbu a chọrọ atụmatụ kama ịnwa ihe n'enweghị usoro: ụlọ ahịa, ụlọ nri, ụlọ ntutu isi, ọrụ nhicha na ndozi, na obere ọfịs, ụfọdụ nwere ndị ọrụ ole na ole.",
    startingPoint: "Ha ejirila ngwa enyemaka mkparịta ụka (chat assistant) mee ọrụ ole na ole, ma na-eji ọtụtụ ngwa azụmahịa dị ka ngwa ndokwa oge, ngwa ịkwụ ụgwọ na spreadsheet. Ha enweghị atụmatụ e dere ede maka ọrụ AI ha ga-eme, otu ha ga-esi tụọ ha, otu ngwa si ejikọ ma ọ bụ iwu ha ga-agbaso.",
    gap: "Ịnwa AI n'enweghị usoro na-emefu oge na ego, na ngwa na-arụ onwe ya (automation) n'enweghị ikike nwere ike imegharị mperi dị oke ọnụ ma ọ bụ mee ka ozi gbapụ. Ndị nwe azụmahịa kwesịrị ịhọrọ ọrụ bara uru, nwalee otu ma tụọ ya, jikọta ngwa n'enweghị nsogbu ma tọọ iwu AI doro anya maka onwe ha na ndị ọrụ ha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: kọmputa ma ọ bụ smartphone nwere ngwa azụmahịa ahụ na-eji ugbu a",
      "Oge: nkuzi dị ka nkeji 5 dabara n'ụbọchị ọrụ juru eju",
      "Ọnụahịa na ihe ngwa na-eme na-agbanwe; ndị nwe azụmahịa na-elele peeji ọnụahịa nke ngwa ọ bụla n'onwe ya",
      "Nzuzo na nchekwa: ndị mmadụ na-eme mkpebi gbasara ego, iwu, iwe mmadụ n'ọrụ na nchekwa; a na-echebe ozi ndị ahịa"
    ],
    prerequisites: "Bụ ụzọ were \"Mmalite AI maka Obere Azụmahịa\" ma ọ bụ \"Ngwa AI Ndị Dị Mkpa maka Obere Azụmahịa\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'icheta izu nkịtị", action: "ime maapụ oge nke ọrụ ndị na-ewe oge gị", standard: "nwere opekata mpe ọrụ iri, nkeji maka nke ọ bụla, e kewara n'ìgwè, ma gbaa okirikiri gburugburu atọ kachasị" },
    { id: "O2", condition: "Mgbe e nyere gị opekata mpe echiche AI ise", action: "inye nke ọ bụla akara uru na ihe egwu ma họrọ ọrụ abụọ ị ga-eji malite", standard: "otu mmeri ngwa ngwa na otu ọrụ ka ukwuu, nke ọ bụla nwere ihe kpatara ya n'otu ahịrịokwu" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ mmeri ngwa ngwa gị", action: "ịhazi nnwale ụbọchị 30 nwere ntụle tupu na mgbe e mechara", standard: "nwere baseline, ebumnuche doro anya na ndekọ kwa izu" },
    { id: "O4", condition: "Mgbe e nyere gị ngwa azụmahịa gị na-eji", action: "ise otu ngwa gị si ezigara ibe ha ozi", standard: "nwere igbe na akụ, na opekata mpe otu nzọụkwụ a na-eme n'aka nke e nwere ike ime ka ọ rụọ onwe ya" },
    { id: "O5", condition: "Mgbe e nyere gị maapụ ngwa gị na ego ha na-efu", action: "ịkara nzọụkwụ ndị chọrọ ikike gị ma gbakọọ ezi ego automation na-efu", standard: "na-etinye kpakpando n'akụkụ nzọụkwụ ọ bụla na-eziga ego ma ọ bụ ozi nye ọtụtụ mmadụ, ma tụnyere ego ahụ na awa e chekwara" },
    { id: "O6", condition: "Mgbe e nyere gị otu azụmahịa gị si eji AI", action: "ide iwu ise iji AI na atụmatụ AI nke otu peeji", standard: "nwere akụkụ ise niile nke atụmatụ ahụ na iwu nke onye ọrụ ghọtara nke ọma" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhọrọ ihe ị ga-emeziwanye",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhụ ebe oge gị na-aga",
          minutes: 5,
          goal: "Mee maapụ dị mfe nke ọrụ ndị na-ewe oge gị kwa izu.",
          text: [
            "Atụmatụ na-amalite site n'eziokwu gbasara azụmahịa gị n'onwe gị. Ruo otu izu, dee ọrụ ndị na-ewe oge gị na ihe dị ka oge nke ọ bụla na-ewe: ịza ozi, ndokwa oge, ịtụ ngwa, ozi na social media, idekọ ego, ọnụahịa (quotes), nhicha, ịzụ ndị ọrụ.",
            "Kewaa ha n'ìgwè: ndị ahịa, ire ahịa na mgbasa ozi, ọrụ kwa ụbọchị (ịtụ ngwa, ndokwa oge), ego (akwụkwọ ụgwọ, idekọ ego), na ndị mmadụ (iwe mmadụ n'ọrụ, ịzụ ha).",
            "Ị ga-ahụkarị na ọrụ ole na ole na-eri ọtụtụ oge gị. Ọ bụ ebe ahụ ka AI nwere ike inyere aka, mana naanị ma ọ bụrụ na ọrụ ahụ dabara ya, nke bụ nkuzi na-esote."
          ],
          steps: ["Ruo otu izu, dee ọrụ ọ bụla na nkeji ole ọ na-ewe.", "Kewaa ọrụ n'ìgwè ise.", "Gbakọọ oge niile n'ìgwè ọ bụla.", "Gbaa okirikiri gburugburu ọrụ atọ kachasị eri oge."],
          words: [["Atụmatụ (strategy)", "nhazi nke ihe ị ga-ebu ụzọ mee na ihe kpatara ya."], ["Maapụ oge (time map)", "ndepụta ọrụ gị na oge ole nke ọ bụla na-ewe."], ["Ọrụ kwa ụbọchị (operations)", "ọrụ ụbọchị niile nke ịgba azụmahịa, dị ka ịtụ ngwa na ndokwa oge."]],
          slides: [
            { title: "Malite site n'eziokwu gị", bullets: ["Dee ọrụ ọ bụla ruo otu izu", "Dee ihe dị ka oge ole nke ọ bụla na-ewe"] },
            { title: "Ìgwè ise", bullets: ["Ndị ahịa; ire ahịa na mgbasa ozi", "Ọrụ kwa ụbọchị; ego", "Ndị mmadụ"] },
            { title: "Chọta ndị na-eri oge", bullets: ["Gbakọọ ìgwè ọ bụla", "Gbaa okirikiri gburugburu ọrụ atọ kachasị"] }
          ],
          tryIt: "Malite maapụ oge gị. Site n'ihe ị na-echeta, depụta opekata mpe ọrụ iri kwa izu na nkeji maka nke ọ bụla, kewaa ha n'ìgwè ise ahụ, ma gbaa okirikiri gburugburu atọ kachasị.",
          youCanNow: "ịhụ ebe oge gị na-aga ma chọta ọrụ ndị kachasị eri oge gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka maapụ oge na-edepụta?", options: ["Ọrụ gị na oge ole nke ọ bụla na-ewe", "Adreesị ụlọ ndị ọrụ gị", "Ego ị rere n'ọnwa", "Naanị oge ị na-emeghe ụlọ ahịa"], answer: 0, why: "Maapụ oge na-egosi ebe oge gị kwa izu na-aga." },
            { objective: "O1", q: "Maapụ oge gị gosiri na ọrụ atọ na-ewe ọtụtụ izu gị. Gịnị ka ị ga-eme ha?", options: ["Leghara ha anya", "Gbaa okirikiri gburugburu ha dị ka ebe AI nwere ike inyere aka kacha", "Hichapụ ha na ndepụta", "Mee ha ngwa ngwa n'agbanweghị ihe ọ bụla"], answer: 1, why: "Ọrụ ndị kachasị eri oge bụ ebe AI nwere ike inyere aka kacha." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịhọrọ ọrụ AI site n'uru na ihe egwu",
          minutes: 5,
          goal: "Nye ọrụ AI nwere ike ime akara ma họrọ abụọ ị ga-eji malite.",
          text: [
            "Ọ bụghị ọrụ ọ bụla na-eri oge bụ ezigbo ọrụ AI. Nye nke ọ bụla akara 1 ruo 5 maka uru (oge ma ọ bụ ego e chekwara, ọrụ ka mma) na 1 ruo 5 maka ihe egwu (ihe ga-eme ma AI mehie: ndị ahịa iwe ewe, ego efuo, nsogbu iwu).",
            "Malite n'uru dị elu na ihe egwu dị ala. Ide ozi social media na ịza ajụjụ a na-ajụkarị na-abụkarị mmalite dị mma. Ịhazi ụdị ego n'akwụkwọ ego ma ọ bụ ọnụahịa nwere ike ịba uru nke ukwuu mana chọrọ nlele nke ọma. Mkpebi iwe mmadụ n'ọrụ, akwụkwọ iwu na ihe ọ bụla gbasara ahụike ma ọ bụ nchekwa nwere ihe egwu dị elu: hapụ mmadụ na ọkachamara ka ha bụrụ ndị isi.",
            "Họrọ ọrụ abụọ. Otu mmeri ngwa ngwa iji wulite obi ike, na otu ọrụ ka ukwuu ị ga-ahazi nke ọma."
          ],
          steps: ["Depụta ọrụ atọ kachasị eri oge gị na echiche ndị ọzọ ọ bụla.", "Nye akara uru 1-5 na ihe egwu 1-5.", "Họrọ otu mmeri ngwa ngwa (uru dị elu, ihe egwu dị ala).", "Họrọ otu ọrụ ka ukwuu ị ga-ahazi nke ọma."],
          words: [["Uru", "ego ma ọ bụ oge ọrụ na-echekwa ma ọ bụ na-ewebata, ma ọ bụ otu ọ na-eme ka ọrụ ndị ahịa ka mma."], ["Ihe egwu", "ụdị mmerụ mperi nwere ike ịkpata."], ["Mmeri ngwa ngwa (quick win)", "obere ọrụ na-arụ ọrụ ngwa ngwa ma na-ewulite obi ike."]],
          slides: [
            { title: "Nye echiche ọ bụla akara", bullets: ["Uru 1-5: oge, ego, ọrụ ka mma", "Ihe egwu 1-5: mmerụ ma AI mehie"] },
            { title: "Ebe ị ga-amalite", bullets: ["Bụ ụzọ mee uru dị elu, ihe egwu dị ala", "Ozi social media na ajụjụ a na-ajụkarị bụ mmalite dị mma", "Iwe mmadụ n'ọrụ, iwu, ahụike na nchekwa: ndị mmadụ bụ ndị isi"] },
            { title: "Họrọ abụọ", bullets: ["Otu mmeri ngwa ngwa", "Otu ọrụ ka ukwuu, e hazịrị nke ọma"] }
          ],
          tryIt: "Nye opekata mpe echiche AI ise akara uru na ihe egwu n'obere tebụl. Họrọ mmeri ngwa ngwa gị na ọrụ ka ukwuu gị, ma dee otu ahịrịokwu maka ihe kpatara nke ọ bụla.",
          youCanNow: "ịhọrọ ọrụ AI maka azụmahịa gị site n'ịtụnyere uru na ihe egwu.",
          quickCheck: [
            { objective: "O2", q: "N'akara uru na ihe egwu, gịnị ka ihe egwu pụtara?", options: ["Ego ngwa ahụ na-efu", "Oge ole ịtọlite ya na-ewe", "Mmerụ ma AI mehie", "Ọnụ ọgụgụ ndị ọrụ na-eji ya"], answer: 2, why: "Ihe egwu bụ mmerụ nwere ike ime ma AI mehie." },
            { objective: "O2", q: "Otu echiche nwere uru dị elu na ihe egwu dị ala, nke ọzọ nwere uru dị elu na ihe egwu dị elu. Kedu nke ị ga-eji malite?", options: ["Nke nwere ihe egwu dị elu", "Ọ dịghị nke ọ bụla", "Ha abụọ n'otu oge", "Nke nwere uru dị elu, ihe egwu dị ala"], answer: 3, why: "Uru dị elu na ihe egwu dị ala na-eme ezigbo ọrụ mbụ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ime nnwale ụbọchị 30 na ịtụ ya",
          minutes: 5,
          goal: "Hazie obere nnwale ụbọchị 30 nwere ntụle doro anya tupu na mgbe e mechara.",
          text: [
            "Pilot bụ obere nnwale nwere oge a kara aka. Kama ịgbanwe ihe niile, ị na-anwa AI n'otu ọrụ ruo ụbọchị 30 ma tụọ ma o nyere aka.",
            "Buru ụzọ tụọ \"tupu\": oge ole ọrụ ahụ na-ewe ugbu a, mperi ole, otu ndị ahịa si anabata ya. Wee kpebie ebumnuche \"mgbe e mechara\": \"Ịza ozi a na-ezitekarị ga-esi na nkeji 60 daa na nkeji 25 kwa ụbọchị, n'enweghị mmụba na mkpesa.\"",
            "N'oge nnwale ahụ, dee obere ndekọ: ihe rụrụ ọrụ, ihe mehiere, ihe i doziri. Na njedebe, kpebie: debe ya, gbanwee ya ma ọ bụ kwụsị ya. Ịkwụsị dị mma; ị mụtara ihe n'ego dị ntakịrị."
          ],
          steps: ["Họrọ ọrụ ahụ ma dee ọnụ ọgụgụ tupu.", "Dee ebumnuche mgbe e mechara.", "Mee nnwale ahụ ruo ụbọchị 30 ma dee obere ndekọ.", "N'ụbọchị 30: debe ya, gbanwee ya ma ọ bụ kwụsị ya."],
          words: [["Pilot (nnwale)", "obere nnwale nwere oge a kara aka nke ụzọ ọhụrụ e si arụ ọrụ."], ["Baseline", "ọnụ ọgụgụ \"tupu\" ị na-eji atụnyere."], ["Ebumnuche (target)", "nsonaazụ ị na-atụ anya iru."]],
          slides: [
            { title: "Pilot bụ obere nnwale", bullets: ["Otu ọrụ, ụbọchị 30", "Tụọ ma o nyere aka"] },
            { title: "Tupu na mgbe e mechara", bullets: ["Tupu: oge, mperi, otu ndị ahịa si anabata ya", "Ọmụmaatụ ebumnuche: site na nkeji 60 ruo 25 kwa ụbọchị", "Enweghị mmụba na mkpesa"] },
            { title: "N'ụbọchị 30", bullets: ["Gụọ ndekọ gị", "Debe ya, gbanwee ya ma ọ bụ kwụsị ya", "Ịkwụsị bụ ihe mmụta dị ọnụ ala"] }
          ],
          tryIt: "Dee atụmatụ nnwale maka mmeri ngwa ngwa gị: ọrụ ahụ, ọnụ ọgụgụ tupu (chee ya ma ọ dị mkpa), ebumnuche mgbe e mechara, na ihe ị ga-ede na ndekọ gị kwa izu.",
          youCanNow: "ịhazi na ịtụ nnwale AI ụbọchị 30 maka otu ọrụ azụmahịa.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ baseline na nnwale?", options: ["Ọnụ ọgụgụ \"tupu\" ị na-eji atụnyere", "Nsonaazụ ikpeazụ", "Ọnụahịa ngwa ahụ", "Usoro oge ndị ọrụ"], answer: 0, why: "Baseline bụ ebe ị na-amalite, ka i wee tụọ mgbanwe." },
            { objective: "O3", q: "N'ụbọchị 30, nnwale gị echekwaghị oge ọ bụla. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ na-aga ruo mgbe ebighị ebi", "Kwụsị ya ma ọ bụ gbanwee ya; ị mụtara ihe n'ego dị ntakịrị", "Zụta ụdị ya dị oke ọnụ", "Zoo nsonaazụ ahụ"], answer: 1, why: "Pilot bụ obere nnwale, ya mere nke dara ada na-efu ntakịrị ma na-akụzi ọtụtụ ihe." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhọrọ ihe ị ga-emeziwanye",
        questions: [
          { objective: "O1", q: "Gịnị bụ nzọụkwụ mbụ nke atụmatụ AI n'ihe ọmụmụ a?", options: ["Zụta ọtụtụ ngwa", "Hụ ebe oge gị na-aga", "Chụọ ndị ọrụ", "Detuo ihe onye asọmpi na-eme"], answer: 1, why: "Atụmatụ na-amalite site n'eziokwu gbasara azụmahịa gị." },
          { objective: "O2", q: "Kedu ọrụ kacha mma ịbụ nke mbụ?", options: ["Nke ọ bụla kachasị ọhụrụ", "Uru dị ala, ihe egwu dị elu", "Ihe egwu dị elu, uru ọ bụla", "Uru dị elu, ihe egwu dị ala"], answer: 3, why: "Malite ebe AI na-enyere aka kacha ma nwee ike ime obere mmerụ." },
          { objective: "O2", q: "Kedu ọrụ mmadụ na ọkachamara kwesịrị ịnọgide na-abụ ndị isi ya?", options: ["Mkpebi iwe mmadụ n'ọrụ", "Ide ozi social media", "Ịza \"Kedu oge unu na-emeghe?\"", "Ịchọpụta aha nri ọhụrụ"], answer: 0, why: "Iwe mmadụ n'ọrụ nwere ihe egwu dị elu." },
          { objective: "O3", q: "Gịnị bụ pilot?", options: ["Ọrụ n'ụgbọelu", "Mgbanwe na-adịgide adịgide", "Obere nnwale nwere oge a kara aka", "Ikike iji software"], answer: 2, why: "Pilot na-anwale otu ọrụ ruo oge a kara aka." },
          { objective: "O3", q: "N'ụbọchị 30, nnwale ahụ enyereghị aka. Gịnị bụ ezigbo ihe ime?", options: ["Zoo nsonaazụ ahụ", "Gbasaa ya n'ihe niile", "Kwụsị ya ma ọ bụ gbanwee ya; ị mụtara ihe n'ego dị ntakịrị", "Atụkwala ihe ọzọ"], answer: 2, why: "Ịkwụsị nnwale na-arụghị ọrụ bụ ezigbo mkpebi." }
        ]
      }
    },
    {
      name: "Isi 2: Ijikọ ngwa na ịtọ iwu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Otu ngwa si ejikọ: integrations n'okwu dị mfe",
          minutes: 5,
          goal: "See otu ngwa azụmahịa gị si ezigara ibe ha ozi.",
          text: [
            "Integration bụ njikọ na-ekwe ka otu ngwa zigara ngwa ọzọ ozi n'onwe ya. Dịka ọmụmaatụ: fọm ndokwa oge na-etinye oge nzukọ ahụ na kalenda gị; ahịa a kwụrụ ụgwọ ya na-etinye ahịrị ọhụrụ na shiit ahịa gị; nyocha (review) ọhụrụ na-ezitere gị ozi ederede.",
            "Ọtụtụ ngwa nwere njikọ e wuru n'ime ha, nke e depụtara na settings ha, nke a na-akpọkarị apps, integrations ma ọ bụ connected accounts. Ọrụ njikọ dị ka Zapier, Make ma ọ bụ Microsoft Power Automate na-ejikọ ngwa ndị na-anaghị ejikọ n'onwe ha. Lelee weebụsaịtị nke ngwa ọ bụla n'onwe ya maka ihe ọ na-ejikọ na ego ọ na-efu.",
            "See ngwa gị dị ka igbe na ozi dị ka akụ: \"booking app -> calendar\", \"POS -> sales sheet\". Wee kaa akụ ndị na-arụ ọrụ ugbu a, ndị ị na-eme n'aka, na ndị ị nwere ike ime ka ha rụọ onwe ha."
          ],
          steps: ["Depụta ngwa ị na-eji: POS, ndokwa oge, email, kalenda, spreadsheet, social media.", "See nke ọ bụla dị ka igbe.", "See akụ maka ozi na-agafe n'etiti ha.", "Kaa akụ ọ bụla: na-arụ onwe ya, n'aka, ma ọ bụ nwere ike ịrụ onwe ya."],
          words: [["Integration", "njikọ na-ekwe ka otu ngwa zigara ngwa ọzọ ozi n'onwe ya."], ["Ọrụ njikọ (connector service)", "ngwa dị ka Zapier, Make ma ọ bụ Power Automate na-ejikọ ngwa ndị ọzọ."], ["Automate", "ime ka ọrụ mee onwe ya n'enweghị mmadụ na-eme nzọụkwụ ọ bụla."], ["POS", "igwe ma ọ bụ ngwa e ji anata ụgwọ n'ụlọ ahịa (point of sale)."]],
          slides: [
            { title: "Integration bụ njikọ", bullets: ["Fọm ndokwa oge -> kalenda", "Ahịa a kwụrụ ụgwọ -> shiit ahịa", "Nyocha ọhụrụ -> ozi ederede"] },
            { title: "Ụzọ isi jikọta", bullets: ["Njikọ e wuru n'ime settings ngwa", "Ọrụ njikọ: Zapier, Make, Power Automate", "Lelee weebụsaịtị ngwa ọ bụla maka ego"] },
            { title: "See maapụ gị", bullets: ["Ngwa bụ igbe; ozi bụ akụ", "Kaa: na-arụ onwe ya, n'aka, nwere ike ịrụ onwe ya"] }
          ],
          tryIt: "See maapụ ngwa gị n'akwụkwọ nwere igbe na akụ. Kaa opekata mpe otu akụ ị na-eme n'aka taa nke e nwere ike ime ka ọ rụọ onwe ya.",
          youCanNow: "ise otu ngwa azụmahịa gị si ejikọ ma hụ ọrụ e nwere ike ime ka ha rụọ onwe ha.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka akụ ndị dị na maapụ ngwa gị na-egosi?", options: ["Onye bụ onye isi", "Ngwa kachasị ọnụ", "Ozi na-agafe n'etiti ngwa", "Usoro i siri zụta ngwa ahụ"], answer: 2, why: "Akụ na-egosi otu ozi si esi n'otu ngwa gaa na nke ọzọ." },
            { objective: "O4", q: "Ị na-eji aka detuo ahịa ọ bụla a kwụrụ ụgwọ ya na shiit ahịa gị. Gịnị ka ị ga-eme?", options: ["Kwụsị idekọ ahịa", "Were onye ga-ede ngwa ngwa", "Hichapụ shiit ahịa", "Kaa ya na maapụ gị dị ka nzọụkwụ e nwere ike ime ka ọ rụọ onwe ya"], answer: 3, why: "Nzọụkwụ a na-eme n'aka nke na-ebugharị ozi bụ ezigbo ihe maka integration." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịnọgide na-achịkwa: ikike, ego na ozi",
          minutes: 5,
          goal: "Kpebie nzọụkwụ automation ndị chọrọ ikike gị ma lelee ezi ego ọ na-efu.",
          text: [
            "Automation na-echekwa oge, mana ọ nwekwara ike imegharị otu mperi ugboro otu narị. Hapụ mmadụ ka ọ na-enye ikike maka ihe ọ bụla na-eziga ego, na-eziga ozi nye ọtụtụ ndị ahịa, na-agbanwe ọnụahịa, na-ehichapụ ndekọ ma ọ bụ na-ekwe nkwa.",
            "Gụọ ego niile ọ na-efu: subscription, ụgwọ a na-akwụ maka ojiji ọ bụla, oge ịtọlite ya na oge ịlele ọrụ ya. Tụnyere ya na oge e chekwara site na nnwale gị. Ọ bụrụ na ọnụ ọgụgụ ahụ adabaghị, nọgide na-eme ya n'aka ugbu a.",
            "Mara ebe ozi gị na-aga. Tupu ijikọ ngwa, gụọ ozi ọ ga-ahụ ma mee ka ọ dị ntakịrị dị ka o kwere mee. Jiri okwuntughe siri ike na nbanye nzọụkwụ abụọ n'akaụntụ azụmahịa, ma wepụ ikike ndị ọrụ hapụrụ ọrụ."
          ],
          steps: ["Kaa nzọụkwụ automation ọ bụla na-eziga ego, na-eziga ozi nye ọtụtụ mmadụ, na-agbanwe ọnụahịa ma ọ bụ na-ehichapụ ozi.", "Chọọ ikike gị n'nzọụkwụ ndị ahụ.", "Gbakọọ ego niile ọ na-efu kwa ọnwa.", "Lelee ozi njikọ ọ bụla nwere ike ịhụ.", "Gbanye nbanye nzọụkwụ abụọ."],
          words: [["Nzọụkwụ ikike (approval step)", "ebe mmadụ ga-ekwe \"ee\" tupu usoro ahụ aga n'ihu."], ["Nbanye nzọụkwụ abụọ (two-step sign-in)", "nlele nke abụọ, dị ka koodu n'ekwentị gị, mgbe ị na-abanye."], ["Subscription", "ụgwọ a na-akwụ oge niile iji nọgide na-eji ngwa."]],
          slides: [
            { title: "Mmadụ na-enye ikike", bullets: ["Ihe ọ bụla na-eziga ego", "Ozi nye ọtụtụ ndị ahịa", "Mgbanwe ọnụahịa, nhichapụ, nkwa"] },
            { title: "Gụọ ego niile ọ na-efu", bullets: ["Subscription na ụgwọ maka ojiji ọ bụla", "Oge ịtọlite na oge ịlele", "Tụnyere ya na oge e chekwara"] },
            { title: "Chebe ozi gị", bullets: ["Nye ngwa ọ bụla naanị ozi ole ọ chọrọ", "Okwuntughe siri ike na nbanye nzọụkwụ abụọ", "Wepụ ikike mgbe ndị ọrụ hapụrụ"] }
          ],
          tryIt: "Na maapụ ngwa gị, tinye kpakpando n'akụkụ nzọụkwụ ọ bụla chọrọ ikike gị. Wee dee nlele ego: ego ngwa kwa ọnwa tụnyere awa e chekwara mụbaa uru otu awa gị.",
          youCanNow: "ịchịkwa automation site na nzọụkwụ ikike, nlele ego na ịkpachi ozi.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ị ga-eji debe ikike n'automation na-eziga ego ma ọ bụ ozi nye ọtụtụ mmadụ?", options: ["Automation nwere ike imegharị mperi ọtụtụ ugboro", "Ikike na-eme ka ngwa dị ọnụ ala", "Iwu na-achọ ya mgbe niile", "Ọ na-eme ka automation ahụ dị ngwa"], answer: 0, why: "Otu mperi n'automation nwere ike imegharị ọtụtụ ugboro tupu ị hụ ya." },
            { objective: "O5", q: "Onye ọrụ hapụrụ azụmahịa gị. Gịnị ka ị ga-eme?", options: ["Hapụ ikike ya ma ọ bụrụ na ọ ga-alọghachi", "Kesaa okwuntughe ya na onye ọrụ ọhụrụ", "Wepụ ikike ya n'ngwa azụmahịa", "Agbanwela ihe ọ bụla"], answer: 2, why: "Iwepụ ikike na-echebe ozi azụmahịa gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ide iwu iji AI gị na atụmatụ otu peeji",
          minutes: 5,
          goal: "Dee iwu AI ise dị mfe maka azụmahịa gị ma mechaa atụmatụ AI gị nke otu peeji.",
          text: [
            "Iwu iji AI (AI use policy) bụ obere ndepụta iwu maka otu gị na ndị ọrụ gị si eji AI. Ọ na-echebe ndị ahịa ma na-eme ka onye ọ bụla na-eme ihe n'otu ụzọ. Iwu ise zuru ezu iji malite.",
            "Ọmụmaatụ iwu: (1) Aha ndị ahịa ya na ozi ịkpọtụrụ ha, nọmba kaadị, okwuntughe ma ọ bụ ndekọ ndị ọrụ abanyeghị n'ngwa AI. (2) Mmadụ na-elele eziokwu ọ bụla tupu ndị ahịa ahụ ya. (3) Anyị anaghị ede nyocha ụgha ma ọ bụ nkwupụta ụgha. (4) Naanị ngwa e kwadoro ka a na-eji maka azụmahịa. (5) Ndị mmadụ na-eme mkpebi gbasara ego, iwu, iwe mmadụ n'ọrụ na nchekwa.",
            "Rịọ AI ka o mee ka iwu gị doo anya ma dị mkpụmkpụ, wee tinye ha n'otu peeji ya na maapụ oge gị, ọrụ ị họrọ, atụmatụ nnwale, maapụ ngwa na nlele ego. Lelee atụmatụ ahụ ọzọ kwa ọnwa atọ."
          ],
          steps: ["Dee iwu ise n'okwu dị mfe.", "Rịọ AI ka o mee ka ha doo anya ma dị mkpụmkpụ.", "Kesaa ha na ndị ọrụ ma nata ajụjụ ha.", "Tinye ihe niile n'otu peeji ma kara ụbọchị nlele."],
          words: [["Iwu iji AI (AI use policy)", "iwu e dere ede maka otu azụmahịa si eji AI."], ["Ngwa e kwadoro (approved tool)", "ngwa onye nwe azụmahịa elelela ma kwe ka e jiri ya maka azụmahịa."]],
          slides: [
            { title: "Gịnị mere iwu ji dị mkpa", bullets: ["Ọ na-echebe ndị ahịa", "Ọ na-eme ka ndị ọrụ na-eme ihe n'otu ụzọ", "Iwu ise zuru ezu iji malite"] },
            { title: "Ọmụmaatụ iwu", bullets: ["Enweghị ozi nzuzo ndị ahịa ma ọ bụ ndị ọrụ n'AI", "Mmadụ na-elele eziokwu; enweghị nyocha ụgha", "Naanị ngwa e kwadoro; ndị mmadụ na-eme mkpebi ukwu"] },
            { title: "Atụmatụ gị nke otu peeji", bullets: ["Maapụ oge na ọrụ abụọ", "Nnwale, maapụ ngwa na nlele ego", "Iwu ise; lelee ya kwa ọnwa atọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: dee iwu AI ise gị na atụmatụ AI gị nke otu peeji nwere akụkụ ise niile. Kesaa iwu ahụ na otu onye ọrụ ma ọ bụ onye ị tụkwasịrị obi ma jụọ ma ihe ọ bụla edoghị anya.",
          youCanNow: "iduzi otu azụmahịa gị si eji AI site n'atụmatụ e dere ede na iwu doro anya.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ iwu iji AI (AI use policy)?", options: ["Ngwugwu AI a na-akwụ ụgwọ", "Iwu e dere ede maka otu azụmahịa gị si eji AI", "Nyocha onye ahịa", "Usoro ojiji nke ngwa"], answer: 1, why: "Iwu iji AI na-etọ iwu doro anya maka gị na ndị ọrụ gị." },
            { objective: "O6", q: "I dechaala iwu AI ise gị. Gịnị ka ị ga-eme ọzọ?", options: ["Debe ha na nzuzo", "Tinye ha n'ịntanetị n'agụghị ha", "Rịọ AI ka o kwado ha", "Kesaa ha na otu onye ọrụ ma jụọ ma ihe ọ bụla edoghị anya"], answer: 3, why: "Iwu na-arụ ọrụ naanị ma ọ bụrụ na ndị na-eji ha ghọtara ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ijikọ ngwa na ịtọ iwu",
        questions: [
          { objective: "O4", q: "Gịnị bụ integration?", options: ["Njikọ na-ekwe ka otu ngwa zigara ngwa ọzọ ozi", "Onye ọrụ ọhụrụ", "Fọm ụtụ isi", "Ụdị mbinye ego"], answer: 0, why: "Integrations na-ebugharị ozi n'etiti ngwa." },
          { objective: "O4", q: "Kedu nke bụ ọrụ njikọ?", options: ["Igwe stapler", "Drọwa ego", "Igwe fax", "Zapier"], answer: 3, why: "Zapier na-ejikọ ngwa ndị na-anaghị ejikọ n'onwe ha." },
          { objective: "O5", q: "Kedu nzọụkwụ automation kachasị chọọ ikike gị?", options: ["Ichekwa aha faịlụ", "Iziga email mbelata ọnụahịa nye ndị ahịa 800 niile", "Itinye agba na kalenda", "Ịhazi ndepụta"], answer: 1, why: "Ozi nye ọtụtụ ndị ahịa chọrọ \"ee\" nke mmadụ." },
          { objective: "O5", q: "Automation na-efu ego kwa ọnwa karịa oge ọ na-echekwa. Gịnị ka ị ga-eme?", options: ["Nọgide na-eme ya n'aka ugbu a", "Nọgide na-akwụ ụgwọ", "Tinye ngwa ndị ọzọ", "Leghara ego ahụ anya"], answer: 0, why: "Ọnụ ọgụgụ ahụ kwesịrị ịdaba." },
          { objective: "O6", q: "Kedu nke bụ ezigbo iwu iji AI?", options: ["Tinye nọmba kaadị ndị ahịa ka e chekwaa oge", "Jiri ngwa ọ bụla ị hụrụ", "Mmadụ na-elele eziokwu ọ bụla tupu ndị ahịa ahụ ya", "AI na-eme mkpebi iwe mmadụ n'ọrụ"], answer: 2, why: "Ịlele eziokwu na-echebe ndị ahịa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iwu Atụmatụ AI maka Azụmahịa na Njikọ Ngwa",
    questions: [
      { objective: "O1", q: "Maapụ oge na-edepụta:", options: ["Okwuntughe gị", "Ọrụ gị na oge ole nke ọ bụla na-ewe", "Adreesị ndị ahịa gị", "Ndị asọmpi gị"], answer: 1, why: "Ọ na-egosi ebe oge gị na-aga." },
      { objective: "O1", q: "Kedu nke bụ otu n'ime ìgwè ise ahụ?", options: ["Ihe nkiri", "Ihu igwe", "Egwuregwu", "Ọrụ kwa ụbọchị"], answer: 3, why: "Ndị ahịa, ire ahịa na mgbasa ozi, ọrụ kwa ụbọchị, ego, ndị mmadụ." },
      { objective: "O1", q: "Gịnị mere ị ga-eji gbaa okirikiri gburugburu ọrụ atọ kachasị eri oge gị?", options: ["Maka ịchọ mma", "Iji hichapụ ha", "Iji kesaa ha n'ịntanetị", "Ọ bụ ebe ahụ ka AI nwere ike inyere aka kacha"], answer: 3, why: "Ọrụ ukwu na-enye ohere ichekwa oge kacha." },
      { objective: "O2", q: "N'akara uru na ihe egwu, ihe egwu pụtara:", options: ["Otu ọ si atọ ụtọ", "Mmerụ ma AI mehie", "Otu ngwa ahụ si dị ọhụrụ", "Ọnụ ọgụgụ apps i nwere"], answer: 1, why: "Ihe egwu na-atụ mmerụ nwere ike ime." },
      { objective: "O2", q: "Mmeri ngwa ngwa bụ:", options: ["Tiketi lọtrị", "Ọrụ kachasị ukwuu, kachasị nwee ihe egwu", "Obere ọrụ na-arụ ọrụ ngwa ngwa", "Okwu ikpe"], answer: 2, why: "Mmeri ngwa ngwa na-ewulite obi ike." },
      { objective: "O2", q: "Kedu ọrụ nwere ihe egwu dị elu?", options: ["Ide nkwekọrịta iwu", "Ide okwu nkọwa maka Instagram", "Ịchọpụta aha maka ihe pụrụ iche", "Ịhazi ndepụta"], answer: 0, why: "Akwụkwọ iwu chọrọ ọkachamara." },
      { objective: "O3", q: "A na-akpọ ọnụ ọgụgụ \"tupu\" na nnwale:", options: ["Mmefu ego (budget)", "Ebumnuche", "Baseline", "Okwuntughe"], answer: 2, why: "Baseline bụ ihe ị na-eji atụnyere." },
      { objective: "O3", q: "Ezigbo ebumnuche nnwale bụ:", options: ["\"Ozi ga-esi na nkeji 60 daa na 25 kwa ụbọchị n'enweghị mmụba na mkpesa\"", "\"Ka mma\"", "\"Jiri AI karịa\"", "\"Nwaa ihe\""], answer: 0, why: "Ọ doro anya ma e nwere ike ịtụ ya." },
      { objective: "O3", q: "N'oge nnwale ahụ, ị na-edebe:", options: ["Enweghị ndetu", "Obere ndekọ nke ihe rụrụ ọrụ na ihe mehiere", "Nọmba kaadị ndị ahịa", "Naanị ozi ọma"], answer: 1, why: "Ndekọ ahụ na-eduzi mkpebi gị n'ụbọchị 30." },
      { objective: "O4", q: "\"Ahịa a kwụrụ ụgwọ -> shiit ahịa\" bụ ọmụmaatụ nke:", options: ["Ụtụ isi", "Iwu", "Nyocha", "Integration"], answer: 3, why: "Ozi na-agafe n'etiti ngwa n'onwe ya." },
      { objective: "O4", q: "Ebee ka a na-ahụkarị njikọ e wuru n'ime ngwa?", options: ["Na settings ngwa ahụ", "N'akwụkwọ nnata ego", "N'akwụkwọ ozi post", "Ebe ọ bụla"], answer: 0, why: "Settings na-edepụtakarị apps ma ọ bụ integrations." },
      { objective: "O4", q: "Na maapụ ngwa gị, akụ na-egosi:", options: ["Aha ndị ọrụ", "Ọnọdụ obi ndị ahịa", "Ọnụahịa", "Ozi na-agafe n'etiti ngwa"], answer: 3, why: "Igbe bụ ngwa; akụ bụ ozi." },
      { objective: "O5", q: "Gịnị mere ị ga-eji debe ikike n'automation na-eziga ego?", options: ["Iji wee ndị ọrụ iwe", "Ọ na-eme ka ọ dị nwayọọ", "Automation nwere ike imegharị mperi ọtụtụ ugboro", "Ọ dịghị mkpa"], answer: 2, why: "Mmadụ na-akwụsị mperi dị oke ọnụ na-emegharị onwe ya." },
      { objective: "O5", q: "Ego niile ngwa na-efu gụnyere:", options: ["Naanị ọnụahịa dị na mgbasa ozi", "Subscription, ụgwọ maka ojiji ọ bụla, oge ịtọlite na oge ịlele", "Ọ dịghị ihe ọ bụla", "Naanị ọkụ eletrik"], answer: 1, why: "A na-agụ ego niile megide oge e chekwara." },
      { objective: "O5", q: "Mgbe onye ọrụ hapụrụ, ị kwesịrị:", options: ["Ọ dịghị ihe ime", "Ịhapụ ya ka ọ ghere oghe", "Ikesa okwuntughe ya", "Iwepụ ikike ya n'ngwa azụmahịa"], answer: 3, why: "Iwepụ ikike na-echebe ozi gị." },
      { objective: "O5", q: "Gịnị ka nbanye nzọụkwụ abụọ na-agbakwunye?", options: ["Nkwalite n'efu", "Okwuntughe nke abụọ n'akwụkwọ", "Nlele nke abụọ, dị ka koodu n'ekwentị", "Ọ dịghị ihe ọ bụla"], answer: 2, why: "Ọ na-eme ka ọ sie ike ịbanye n'akaụntụ n'ike." },
      { objective: "O6", q: "Iwu iji AI bụ:", options: ["Iwu e dere ede maka otu azụmahịa gị si eji AI", "Iwu inshọransị", "Nkwekọrịta mgbazinye ụlọ", "Ngwa"], answer: 0, why: "Ọ na-echebe onye ọ bụla ma na-eme ka ha na-eme ihe n'otu ụzọ." },
      { objective: "O6", q: "Kedu nke kwesịrị ịdị n'iwu AI gị?", options: ["AI na-ekpebi onye a ga-ewe n'ọrụ", "Ndị mmadụ na-eme mkpebi gbasara ego, iwu, iwe mmadụ n'ọrụ na nchekwa", "Ngwa ọ bụla dị mma", "Nyocha ụgha dị mma"], answer: 1, why: "Mkpebi ukwu na-anọgide n'aka ndị mmadụ." },
      { objective: "O6", q: "Ugboro ole ka ị ga-elele atụmatụ AI gị ọzọ?", options: ["Ọ dịghị mgbe", "Ihe dị ka kwa ọnwa atọ", "Kwa awa", "Naanị mgbe ọdachi mere"], answer: 1, why: "Nlele oge niile na-eme ka ọ dị ọhụrụ." },
      { objective: "O6", q: "Atụmatụ AI gị nke otu peeji gụnyere:", options: ["Maapụ oge, ọrụ, nnwale, maapụ ngwa, nlele ego na iwu", "Naanị ndepụta apps", "Okwuntughe ndị ahịa", "Ọnụahịa onye asọmpi"], answer: 0, why: "Akụkụ ndị ahụ na-eme atụmatụ zuru ezu." }
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
      7,
      9,
      11,
      12,
      13,
      16
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Maapụ oge na ọrụ abụọ",
        objective: "O2",
        notYet: "Enweghị maapụ oge, ma ọ bụ a họrọ ọrụ n'enweghị akara uru na ihe egwu.",
        meets: "Maapụ oge na ọrụ abụọ a họrọ, nke ọ bụla nwere akara uru na ihe egwu.",
        exceeds: "Nhọrọ ọ bụla nwere ihe kpatara ya doro anya n'otu ahịrịokwu, nke jikọrọ na maapụ oge."
      },
      {
        name: "Nnwale ụbọchị 30",
        objective: "O3",
        notYet: "Enweghị ntụle, ma ọ bụ enweghị ọnụ ọgụgụ tupu.",
        meets: "Nnwale maka ọrụ mbụ nwere baseline na ebumnuche mgbe e mechara.",
        exceeds: "O nwekwara atụmatụ ndekọ kwa izu na iwu ịkwụsị ma ọ bụ ịgbanwe n'ụbọchị 30."
      },
      {
        name: "Njikọ ngwa na ikike",
        objective: "O4",
        notYet: "Enweghị maapụ ngwa, ma ọ bụ a kaghị ikike ọ bụla.",
        meets: "Eserese ma ọ bụ ndepụta nke otu ngwa si ejikọ, ya na nzọụkwụ ikike a kara.",
        exceeds: "Nzọụkwụ ọ bụla na-eziga ego ma ọ bụ ozi nye ọtụtụ mmadụ nwere kpakpando."
      },
      {
        name: "Nlele ego",
        objective: "O5",
        notYet: "Enweghị nlele ego.",
        meets: "Ego ngwa kwa ọnwa tụnyere awa e chekwara mụbaa uru otu awa gị.",
        exceeds: "Gụnyere ụgwọ maka ojiji ọ bụla, oge ịtọlite na oge ịlele."
      },
      {
        name: "Iwu iji AI",
        objective: "O6",
        notYet: "Iwu erughị ise, ma ọ bụ iwu na-enye AI mkpebi gbasara ego, iwu, iwe mmadụ n'ọrụ ma ọ bụ nchekwa.",
        meets: "Iwu ise doro anya maka gị na ndị ọrụ gị.",
        exceeds: "E kesara ya na onye ọrụ ma ọ bụ onye a tụkwasịrị obi, ma mee ka o doo anya karịa site n'echiche ha."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị nwe azụmahịa mere nnwale ụbọchị 30 ha ma kọọ nsonaazụ tupu na mgbe e mechara (nnyocha nsochi)",
      "Ndị nwe azụmahịa kọrọ awa ole ha chekwara kwa izu mgbe nnwale ahụ gasịrị",
      "Ndị nwe azụmahịa kesara iwu iji AI e dere ede na ndị ọrụ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa ma ọ bụ smartphone nwere ịntanetị na ngwa azụmahịa ahụ na-eji ugbu a",
      "Ngwa enyemaka AI n'efu na spreadsheet n'efu maka inye akara na ndekọ",
      "Akwụkwọ na mkpịsị ode maka maapụ oge na maapụ ngwa",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Rịọ ndị nwe azụmahịa ka ha chee ọrụ izu nkịtị tupu nnọkọ ahụ ka maapụ oge wee gaa ngwa ngwa.",
      "See ọmụmaatụ maapụ ngwa na bọọdụ nwere igbe na akụ tupu ndị nwe azụmahịa esee nke ha.",
      "Chetara ndị nwe azụmahịa ka ha lelee peeji ọnụahịa nke ngwa ọ bụla n'onwe ya; ọnụahịa na ihe ngwa na-eme na-agbanwe.",
      "Kọwaa nke ọma na ndị mmadụ na-eme mkpebi gbasara ego, iwu, iwe mmadụ n'ọrụ na nchekwa, na a na-echebe ozi ndị ahịa.",
      "Jiri rubric tụọ akara atụmatụ otu peeji ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
