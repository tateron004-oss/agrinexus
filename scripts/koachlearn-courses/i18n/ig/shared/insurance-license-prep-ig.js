"use strict";

// Koach Learn course (Igbo translation of shared/insurance-license-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const SRC = {
  naicDepts: { name: "NAIC: Chọta ngalaba inshọransị steeti gị", url: "https://content.naic.org/state-insurance-departments" },
  nipr: { name: "NIPR: National Insurance Producer Registry (ịrịọ na imegharị akwụkwọ ikike producer)", url: "https://nipr.com/" },
  tdiAgent: { name: "Texas Department of Insurance: Akwụkwọ ikike agent", url: "https://www.tdi.texas.gov/agent/index.html" },
  tdiLifeApply: { name: "Texas Department of Insurance: Otu esi arịọ akwụkwọ ikike general lines life, accident, health na HMO", url: "https://www.tdi.texas.gov/agent/general-life-apply.html" },
  usc1033: { name: "18 U.S.C. 1033 (Cornell Legal Information Institute)", url: "https://www.law.cornell.edu/uscode/text/18/1033" },
  naicUtpa: { name: "NAIC Model Law 880: Iwu gbasara omume azụmahịa na-ezighi ezi (Unfair Trade Practices Act)", url: "https://content.naic.org/sites/default/files/model-law-880.pdf" }
};

module.exports = {
  id: "insurance-license-prep-ig",
  lang: "ig",
  translationOf: "insurance-license-prep",
  category: "Workforce Development",
  name: "Nkwadebe maka Ule Akwụkwọ Ikike Onye Ọrụ Inshọransị (Agent)",
  skills: "Ịhọrọ ụdị akwụkwọ ikike (license line), Ịchọta nzọụkwụ akwụkwọ ikike steeti gị, Ịkọwa okwu inshọransị, Ịgbakọ claim omume, Ịmata omume ire ahịa na-ezighi ezi, Ịhazi atụmatụ ule",
  outcome: "ịkwado maka ule akwụkwọ ikike agent inshọransị nke steeti gị: ịhọrọ license line kwesịrị ekwesị, ịchọta nzọụkwụ gọọmentị na ndepụta isiokwu ule steeti gị, ịkọwa okwu ndị bụ isi, ịgbakọ claim omume, ịmata omume ire ahịa na-ezighi ezi, ma soro atụmatụ ọmụmụ na ule nwere ụbọchị.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye chọrọ ire inshọransị dị ka agent nwere akwụkwọ ikike, nke a na-akpọkwa producer: ndị na-achọ ọrụ, ndị na-agbanwe ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha mbụ (veterans) na ndị chọrọ imeghe ụlọ ọrụ inshọransị (agency) nke ha. Ọ bụ steeti ọ bụla na United States na-enye ndị agent inshọransị akwụkwọ ikike, ọ bụghị gọọmentị etiti (federal).",
    "Ị ga-amụta license line ndị bụ isi, otu esi achọta nzọụkwụ na ndepụta isiokwu ule nke steeti gị, okwu na echiche ndị bụ isi ule na-ajụ, otu esi agbakọ claim omume nwere deductible na limit, na iwu omume ọma (ethics) na-echebe ndị ahịa. Na njedebe, ị ga-ede atụmatụ ọmụmụ na ule nke gị nwere ezi ụbọchị.",
    "Ihe ọmụmụ a na-AKWADO gị maka ule ahụ. Ọ naghị enye akwụkwọ ikike, ọ naghịkwa anọchi ihe ọmụmụ prelicensing ọ bụla steeti gị nwere ike ịchọ. Ọ bụ ngalaba inshọransị steeti gị na-ekpebi ihe a chọrọ, ego a na-akwụ na ozi ule, ha na-agbanwekwa, ya mere nkuzi ọ bụla na-ezigara gị na ibe gọọmentị. Ọ dịghị ihe ebe a bụ ndụmọdụ maka ịzụta inshọransị ma ọ bụ itinye ego (investment)."
  ],
  finalTask: "Dee Atụmatụ Ọmụmụ na Ule Akwụkwọ Ikike Inshọransị nke peeji otu maka steeti gị: (1) license line ị ga-enweta na ihe mere; (2) nzọụkwụ gọọmentị steeti gị n'usoro (ihe ọmụmụ prelicensing ma ọ bụrụ na a chọrọ ya, ule na ụlọ ọrụ na-enye ule, mkpịsị aka (fingerprints) ma ọ bụ nlele ndekọ, arịrịọ, appointment), nke ọ bụla na adreesị weebụ gọọmentị ya; (3) isiokwu na ọnụọgụ ajụjụ ha site na ndepụta isiokwu ule steeti gị; (4) usoro ọmụmụ kwa izu nwere ụbọchị, ụbọchị ule ị na-achọ, na opekata mpe ụbọchị ule omume abụọ nwere akara ị na-achọ inweta; (5) claim omume atọ ị gbakọrọ nke ọma na iwu omume ọma atọ n'okwu nke gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nọ na United States chọrọ ọrụ dị ka agent inshọransị (producer) n'ebe a na-aza oku (call center), n'ụlọ akụ, n'ụlọ ọrụ agency ma ọ bụ n'ụlọ ọrụ inshọransị, ma ọ bụ chọrọ imeghe agency nke ha. Otu agwakọtara agwakọta: ndị na-achọ ọrụ, ndị na-agbanwe ọrụ, ndị agha mbụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị kwabatara (immigrants) na ndị nwe obere azụmahịa.",
    startingPoint: "Ha azụtala inshọransị ụgbọ ala, ụlọ mgbazinye ma ọ bụ ahụike, mana ha anaghị agụkarị policy. Ha amaghị otu akwụkwọ ikike si arụ ọrụ, akwụkwọ ikike ha kwesịrị inweta, ma ọ bụ okwu a na-eji n'ule. Ha nwere ike ịgbakọ pasentị dị mfe site n'enyemaka ntakịrị.",
    gap: "Ọtụtụ mmadụ na-akwụ ụgwọ ihe ọmụmụ prelicensing ma ọ bụ ule n'amaghị akwụkwọ ikike dabara n'ọrụ ahụ, ihe steeti ha chọrọ, ma ọ bụ otu e si hazie ule ahụ, ha wee daa ma ọ bụ hapụ ya. Ịmara ụzọ ahụ, okwu ndị bụ isi, mgbakọ claim na iwu omume ọma na-eme ka usoro na-agbagwoju anya ghọọ atụmatụ nwere ụbọchị, ma na-eduga n'ọrụ nke na-adịghị achọkarị digrii.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 8); a na-akọwa okwu ule ọ bụla",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; akwụkwọ, mkpịsị ode na igwe mgbakọ (calculator) nkịtị zuru maka ọrụ ọ bụla",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Steeti ọ bụla na-enye akwụkwọ ikike: nzọụkwụ, awa prelicensing, ego, ụlọ ọrụ na-enye ule na akara ngafe dị iche iche, ya mere ndị na-amụ ihe na-elele ibe gọọmentị nke steeti ha",
      "Nlele ndekọ (background check): ụfọdụ ndị na-amụ ihe nwere ndekọ mpụ; ihe ọmụmụ a na-akọwa iwu ahụ n'eziokwu ma zipu ha na ngalaba steeti ha",
      "Ọ dịghị ndụmọdụ banyere inshọransị ma ọ bụ investment onye ọ bụla kwesịrị ịzụta; omume na-eji nọmba e chepụtara echepụta"
    ],
    prerequisites: "Ọ dịghị. Ndị chọrọ enyemaka na mgbakọ pasentị nwere ike ibu ụzọ were \"Mgbakọ Kwa Ụbọchị\" (Everyday Math)."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ ma ọ bụ ngwaahịa inshọransị", action: "ịmata license line na ọrụ dabara na ya", standard: "ma nweta opekata mpe 5 n'ime ọmụmaatụ 6 ziri ezi" },
    { id: "O2", condition: "Maka steeti nke gị", action: "ịchọta nzọụkwụ akwụkwọ ikike gọọmentị, ụlọ ọrụ na-enye ule na ndepụta isiokwu ule", standard: "na-ede nzọụkwụ ọ bụla na adreesị weebụ gọọmentị ya" },
    { id: "O3", condition: "Mgbe e nyere gị ndepụta okwu na echiche ule", action: "ịkọwa okwu inshọransị ndị bụ isi na ụkpụrụ nkwekọrịta n'okwu dị mfe", standard: "nwere ezi ihe ọ pụtara maka opekata mpe 8 n'ime 10" },
    { id: "O4", condition: "Mgbe e nyere gị claim omume nwere deductible, coinsurance ma ọ bụ policy limit", action: "ịgbakọ ego ụlọ ọrụ inshọransị ga-akwụ na ego onye inshọransị ga-akwụ", standard: "ziri ezi ruo dollar n'otu n'otu na claim omume 3" },
    { id: "O5", condition: "Mgbe e nyere gị ọnọdụ ire ahịa ma ọ bụ ọrụ ndị ahịa", action: "ịmata omume na-ezighi ezi ma ọ bụ megidere iwu ma họrọ omume eziokwu", standard: "ma nweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi" },
    { id: "O6", condition: "Site n'iji nzọụkwụ gọọmentị na ndepụta isiokwu ule steeti gị", action: "ide atụmatụ ọmụmụ na ule nwere ụbọchị maka ule akwụkwọ ikike gị", standard: "nke gụnyere nzọụkwụ gọọmentị ọ bụla, isiokwu ọ bụla dị na ndepụta na opekata mpe ụbọchị ule omume abụọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụzọ gị ruo akwụkwọ ikike inshọransị",
      lessons: [
        {
          title: "Ihe agent na-eme na license line ị chọrọ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Họrọ license line dabara n'ọrụ inshọransị ị chọrọ.",
          text: [
            "Agent inshọransị, nke iwu na-akpọ producer, na-ere, na-achọ ndị ahịa ma ọ bụ na-akparịta inshọransị maka ndị ahịa. Steeti ọ bụla chọrọ akwụkwọ ikike iji mee nke a. Captive agent na-ere maka otu ụlọ ọrụ. Independent agent na-ere maka ọtụtụ ụlọ ọrụ, ọ na-agbakarị obere azụmahịa. Ụlọ ọrụ inshọransị ọ bụla agent na-ere maka ya ga-ahọpụtakwa ya (appointment).",
            "Steeti na-enye akwụkwọ ikike site na line of authority. Line anọ bụ isi a na-ahụkarị bụ Life, Accident and Health (ọrịa), Property na Casualty. Ọtụtụ mmadụ na-amalite na Life na Health ọnụ, ma ọ bụ Property na Casualty ọnụ. Ụfọdụ steeti na-enyekwa obere akwụkwọ ikike Personal Lines maka naanị inshọransị ụlọ na ụgbọ ala.",
            "Life na-ekpuchi ọnwụ na ụfọdụ policy nchekwa ego ogologo oge. Accident and Health na-ekpuchi ụgwọ ọgwụ, ego mgbe nkwarụ (disability) gbochiri ọrụ, na ụgwọ ndị yiri ya. Property na-ekpuchi mmebi ihe ị nwere, dị ka ụlọ ma ọ bụ ụgbọ ala. Casualty na-ekpuchi liability, ya bụ ego ị ji ụgwọ ma ọ bụrụ na i merụrụ mmadụ ahụ ma ọ bụ mebie ihe ya.",
            "Ọrụ inshọransị ndị ọzọ na-eji akwụkwọ ikike dị iche. Adjuster na-enyocha ma na-edozi claim. Ire ụfọdụ ngwaahịa yiri investment, dị ka variable annuities, chọkwara akwụkwọ ikike securities. Lelee ndepụta ụdị akwụkwọ ikike steeti gị tupu ị kwụọ ụgwọ ihe ọmụmụ ọ bụla."
          ],
          words: [["Producer", "okwu iwu maka agent ma ọ bụ broker inshọransị nwere akwụkwọ ikike, nke na-ere inshọransị."], ["Line of authority", "ụdị inshọransị akwụkwọ ikike gị kwere ka i ree, dị ka Life ma ọ bụ Property."], ["Appointment", "nkwado gọọmentị ụlọ ọrụ inshọransị nyere gị ka i ree ngwaahịa ya."], ["Liability", "ego iwu kwuru na ị ji mmadụ ma ọ bụrụ na i merụrụ ya ahụ ma ọ bụ mebie ihe ya."], ["Adjuster", "onye na-enyocha ma na-edozi claim inshọransị; ọ na-achọkarị akwụkwọ ikike nke ya."]],
          slides: [
            { title: "Ndị agent bụ producer", bullets: ["Ha na-ere, na-achọ ndị ahịa ma ọ bụ na-akparịta inshọransị", "Steeti ọ bụla chọrọ akwụkwọ ikike", "Ụlọ ọrụ ọ bụla ị na-ere maka ya ga-ahọpụta gị (appoint)"] },
            { title: "Captive ma ọ bụ independent", bullets: ["Captive: na-ere maka otu ụlọ ọrụ", "Independent: na-ere maka ọtụtụ ụlọ ọrụ, na-agbakarị azụmahịa"] },
            { title: "Line anọ bụ isi", bullets: ["Life: na-akwụ ụgwọ mgbe mmadụ nwụrụ", "Accident and Health: ụgwọ ọgwụ, nkwarụ (disability)", "Property: mmebi ihe ị nwere", "Casualty: liability mgbe i merụrụ ndị ọzọ"] },
            { title: "Lelee tupu ị kwụọ ụgwọ", bullets: ["Adjuster chọrọ akwụkwọ ikike dị iche", "Ngwaahịa variable chọkwara akwụkwọ ikike securities", "Buru ụzọ chọta ndepụta ụdị akwụkwọ ikike steeti gị"] }
          ],
          tryIt: "Dee ọrụ inshọransị atọ ị nwere ike ịrịọ (dịka ọmụmaatụ agent call center na-ere inshọransị ụgbọ ala, onye ọrụ ụlọ akụ na-ere inshọransị ndụ (life), ma ọ bụ agency nke gị). N'akụkụ nke ọ bụla, dee license line ma ọ bụ line ndị ọ chọrọ.",
          youCanNow: "ikwu ihe producer inshọransị na-eme ma họrọ license line dabara n'ọrụ.",
          quickCheck: [
            { objective: "O1", q: "Mgbasa ọrụ kwuru na ị ga-ere inshọransị ụgbọ ala na nke ụlọ (homeowners). Kedu license line dabara?", options: ["Life na Health", "Property na Casualty", "Naanị Securities", "Naanị Adjuster"], answer: 1, why: "Policy ụgbọ ala na ụlọ na-ekpuchi mmebi ihe na liability n'ebe ndị ọzọ nọ, ndị ahụ bụ Property na Casualty." },
            { objective: "O1", q: "Gịnị bụ captive agent?", options: ["Agent na-ere maka naanị otu ụlọ ọrụ inshọransị", "Agent na-enweghị akwụkwọ ikike", "Agent na-edozi naanị claim", "Agent na-arụrụ steeti ọrụ"], answer: 0, why: "Captive agent na-anọchite anya otu ụlọ ọrụ; independent agent na-anọchite anya ọtụtụ." }
          ]
        },
        {
          title: "Ịchọta nzọụkwụ akwụkwọ ikike gọọmentị nke steeti gị",
          objectives: ["O2"],
          minutes: 6,
          goal: "Chọta nzọụkwụ akwụkwọ ikike, ụlọ ọrụ na-enye ule na ndepụta isiokwu ule steeti gị na ibe gọọmentị.",
          text: [
            "Ngalaba inshọransị steeti gị na-eme iwu. Iji chọta ya, jiri ibe NAIC (National Association of Insurance Commissioners) nke nwere njikọ gaa na ngalaba steeti ọ bụla. Chọọ ibe a kpọrọ producer licensing, agent licensing ma ọ bụ how to apply.",
            "Ọtụtụ steeti na-agbaso ụzọ yiri onwe ya: ihe ọmụmụ prelicensing (a chọrọ ya n'ọtụtụ steeti, ọ bụghị ha niile), ule steeti nke ụlọ ọrụ ule na-enye, mkpịsị aka ma ọ bụ nlele ndekọ, arịrịọ, wee appointment site n'aka ụlọ ọrụ inshọransị. Mgbe i nwetara akwụkwọ ikike, ị na-emeghari ya ma were continuing education. Dịka ọmụmaatụ, Texas, mgbe anyị lelere n'October 2026, na-enye ule ya site na Pearson VUE, chọrọ mkpịsị aka, ma na-anabata arịrịọ site na Sircon ma ọ bụ NIPR naanị mgbe i gafere ule ahụ.",
            "Ụlọ ọrụ ule na-ebipụta akwụkwọ ntuziaka onye ule (candidate handbook) na ndepụta isiokwu ule (content outline) maka steeti gị. Ndepụta ahụ na-egosi isiokwu ọ bụla na ọnụọgụ ajụjụ si na nke ọ bụla. Ọ bụ ngwa ọmụmụ kacha baa uru i nwere, ọ bụkwa n'efu.",
            "Ọ bụrụ na i nwere ndekọ mpụ, kwuo eziokwu n'arịrịọ ahụ. Iwu gọọmentị etiti (18 U.S.C. 1033) kwuru na onye a mara ikpe felony gbasara aghụghọ ma ọ bụ imebi ntụkwasị obi chọrọ nkwenye ederede site n'aka onye na-achị inshọransị (regulator) iji rụọ ọrụ inshọransị. Ngalaba steeti gị na-akọwa otu esi arịọ ya. Ekwela ka onye na-ere ihe ọmụmụ gwa gị na ọ dịghị mkpa."
          ],
          steps: ["Meghee ibe ngalaba inshọransị steeti nke NAIC ma họrọ steeti gị.", "Chọta ibe producer ma ọ bụ agent licensing na ndepụta ụdị akwụkwọ ikike.", "Dee nzọụkwụ ọ bụla: ihe ọmụmụ prelicensing, ule, mkpịsị aka, arịrịọ, appointment.", "Chọta aha ụlọ ọrụ ule ma budata candidate handbook na content outline n'efu.", "Dee adreesị weebụ gọọmentị maka nzọụkwụ ọ bụla na ụbọchị i lelere ya."],
          words: [["NAIC", "National Association of Insurance Commissioners: otu ndị na-achị inshọransị steeti."], ["Prelicensing education", "ihe ọmụmụ ụfọdụ steeti chọrọ tupu i nwee ike were ule akwụkwọ ikike."], ["Content outline", "ndepụta isiokwu ule na ọnụọgụ ajụjụ si na nke ọ bụla."], ["NIPR", "National Insurance Producer Registry: weebụsaịtị ọtụtụ steeti na-eji maka arịrịọ na imegharị akwụkwọ ikike."], ["Continuing education", "klas ndị agent nwere akwụkwọ ikike ga-ewe iji meghari akwụkwọ ikike ha."]],
          slides: [
            { title: "Malite n'isi iyi gọọmentị", bullets: ["Ngalaba inshọransị steeti gị na-eme iwu", "Chọta ya site n'ibe ngalaba steeti NAIC", "Chọọ producer ma ọ bụ agent licensing"] },
            { title: "Ụzọ a na-agbasokarị", bullets: ["Ihe ọmụmụ prelicensing (ọtụtụ steeti)", "Ule steeti site n'ụlọ ọrụ ule", "Mkpịsị aka ma ọ bụ nlele ndekọ", "Arịrịọ, wee appointment site n'ụlọ ọrụ inshọransị"] },
            { title: "Nweta ndepụta isiokwu n'efu", bullets: ["Ụlọ ọrụ ule na-ebipụta candidate handbook", "Content outline na-egosi isiokwu na ọnụọgụ ajụjụ", "Mụọ ihe dịka ndepụta ahụ si dị"] },
            { title: "Ndekọ mpụ abụghị njedebe", bullets: ["Kwuo eziokwu n'arịrịọ ahụ", "Ụfọdụ felony chọrọ nkwenye ederede regulator", "Jụọ ngalaba steeti gị otu esi eme ya"] }
          ],
          sources: [SRC.naicDepts, SRC.nipr, SRC.tdiAgent, SRC.tdiLifeApply, SRC.usc1033],
          tryIt: "Meghee ibe NAIC, họrọ steeti gị ma chọta ibe producer licensing ya. Dee nzọụkwụ akwụkwọ ikike ọ bụla n'usoro, aha ụlọ ọrụ ule, na adreesị weebụ nke content outline ule ahụ.",
          youCanNow: "ịchọta nzọụkwụ akwụkwọ ikike gọọmentị, ụlọ ọrụ ule na content outline ule nke steeti gị.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka ị ga-ahụ ezi nzọụkwụ akwụkwọ ikike maka steeti gị?", options: ["Ozi na soshal midia", "Mgbasa ozi maka ihe ọmụmụ prelicensing", "Ibe gọọmentị nke ngalaba inshọransị steeti gị", "Enyi nwere akwụkwọ ikike na steeti ọzọ"], answer: 2, why: "Ngalaba inshọransị steeti ọ bụla na-edozi ma na-ebipụta iwu akwụkwọ ikike nke ya." },
            { objective: "O2", q: "Kedu akwụkwọ n'efu na-agwa gị isiokwu dị n'ule steeti gị?", options: ["Akwụkwọ ụgwọ inshọransị ụgbọ ala", "Declarations page nke policy", "Akwụkwọ mgbasa ozi onye na-achọ ndị ọrụ", "Content outline ule nke ụlọ ọrụ ule"], answer: 3, why: "Content outline na-egosi isiokwu ule ọ bụla na ọnụọgụ ajụjụ si na nke ọ bụla." }
          ]
        },
        {
          title: "Okwu ndị bụ isi na otu nkwekọrịta inshọransị si arụ ọrụ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọwaa okwu inshọransị ndị bụ isi na echiche nkwekọrịta n'okwu nke gị.",
          text: [
            "Inshọransị na-ebufe ihe egwu (risk) site n'aka mmadụ gaa n'ụlọ ọrụ inshọransị. Onye inshọransị (insured) na-akwụ premium. N'ọnọdụ ya, ụlọ ọrụ inshọransị (insurer) na-ekwe nkwa ịkwụ ụgwọ maka ụfọdụ mfu. Policy bụ nkwekọrịta ederede, declarations page na-egosikwa onye na ihe e kpuchiri, limit na premium.",
            "Ule na-ajụ ajụjụ gbasara echiche ole na ole bụ isi. Insurable interest: ị ga-atụfu ego ma ọ bụrụ na mfu ahụ mere. Indemnity: inshọransị na-eweghachi gị ebe ị nọ na mbụ, ọ bụghị ime ka ọ ka gị mma. Utmost good faith: akụkụ abụọ ahụ ga-ekwu eziokwu, ya mere ụgha n'arịrịọ (misrepresentation) nwere ike imebi nkpuchi ahụ. Underwriting: ụlọ ọrụ inshọransị na-amụ ihe egwu ahụ ma kpebie ma ọ ga-anabata ya na ọnụ ahịa ya.",
            "Policy inshọransị bụ nkwekọrịta, ya mere ọ chọrọ onyinye na nnabata (offer and acceptance), consideration (premium na nkwa ahụ), ndị nwere ike ime nkwekọrịta (competent parties) na ebumnuche kwekọrọ n'iwu. Ọ bụkwa contract of adhesion: ụlọ ọrụ inshọransị na-ede ya, onye ahịa na-anabata ya otu e dere ya, ya mere a na-agụkarị okwu na-edoghị anya n'ụzọ na-abara onye ahịa uru.",
            "Jiri flash card mụta okwu ndị a. Ule na-enyekarị obere akụkọ ma jụọ echiche ọ na-egosi."
          ],
          words: [["Premium", "ego onye inshọransị na-akwụ maka nkpuchi."], ["Insurable interest", "inwe ezi mfu ego ma ọ bụrụ na ihe e kpuchiri ahụ mere."], ["Indemnity", "ịkwụghachi mfu ahụ ka ị laghachi ebe ị nọ, ọ bụghị ka ọ ka gị mma."], ["Underwriting", "ịmụ ihe egwu iji kpebie ma a ga-ekpuchi ya na ọnụ ahịa ya."], ["Declarations page", "peeji policy na-egosi onye e kpuchiri, ihe e kpuchiri, limit na premium."], ["Contract of adhesion", "nkwekọrịta otu akụkụ dere, nke akụkụ nke ọzọ nabatara otu o si dị."]],
          slides: [
            { title: "Inshọransị na-ebufe ihe egwu", bullets: ["Onye inshọransị (insured) na-akwụ premium", "Insurer na-ekwe nkwa ịkwụ mfu e kpuchiri", "Policy bụ nkwekọrịta ahụ"] },
            { title: "Echiche bụ isi n'ule", bullets: ["Insurable interest: ị ga-atụfu ego", "Indemnity: laghachi ebe ị nọ na mbụ", "Utmost good faith: akụkụ abụọ na-ekwu eziokwu", "Underwriting: ịkpebi ma a ga-anabata na ọnụ ahịa"] },
            { title: "Policy bụ nkwekọrịta", bullets: ["Offer and acceptance, consideration", "Competent parties, ebumnuche kwekọrọ n'iwu", "Adhesion: okwu na-edoghị anya na-abara onye ahịa uru"] }
          ],
          tryIt: "Mee flash card 10 n'akwụkwọ ma ọ bụ n'ekwentị: n'otu akụkụ okwu ahụ (premium, insurable interest, indemnity, underwriting, declarations page, consideration, adhesion, misrepresentation, insured, insurer), n'akụkụ nke ọzọ ihe ọ pụtara n'otu ahịrị n'okwu nke gị. Nwalee onwe gị ruo mgbe ị nwetara 8 n'ime 10.",
          youCanNow: "ịkọwa okwu inshọransị ndị bụ isi na akụkụ nkwekọrịta inshọransị n'okwu dị mfe.",
          quickCheck: [
            { objective: "O3", q: "Otu nwoke chọrọ ịzụta inshọransị ọkụ maka ụlọ onye ọ na-amaghị. Kedu echiche na-egbochi ya?", options: ["Indemnity", "Underwriting", "Consideration", "Insurable interest"], answer: 3, why: "Ọ gaghị atụfu ego ọ bụla ma ụlọ onye ahụ ọ na-amaghị gbaa ọkụ, ya mere o nweghị insurable interest." },
            { objective: "O3", q: "Mgbe e zuuru TV e kpuchiri, insurer na-akwụ ụgwọ TV ahụ e zuuru, ọ bụghị TV ka ukwuu. Kedu echiche a?", options: ["Indemnity", "Adhesion", "Appointment", "Liability"], answer: 0, why: "Indemnity na-eweghachi onye inshọransị ebe ọ nọ na mbụ, ọ bụghị ime ka ọ ka ya mma." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụzọ gị ruo akwụkwọ ikike inshọransị",
        questions: [
          { objective: "O1", q: "Ị ga-ere policy term life na inshọransị disability income. Kedu line dabara?", options: ["Property na Casualty", "Life na Accident and Health", "Naanị Personal Lines", "Adjuster"], answer: 1, why: "Policy ndụ chọrọ line Life, disability income bụkwa Accident and Health." },
          { objective: "O1", q: "Gịnị ka appointment nke ụlọ ọrụ inshọransị na-eme?", options: ["Ọ na-anọchi ule steeti", "Ọ na-enye akwụkwọ ikike securities", "Ọ na-akwado gị n'ụzọ gọọmentị ka i ree ngwaahịa ụlọ ọrụ ahụ", "Ọ na-ekpebi ego akwụkwọ ikike steeti gị"], answer: 2, why: "Akwụkwọ ikike si na steeti; ụlọ ọrụ inshọransị ọ bụla na-ahọpụta gị ka i ree maka ya." },
          { objective: "O2", q: "Onye na-enye akwụkwọ ikike agent inshọransị na United States?", options: ["Ngalaba inshọransị steeti ọ bụla", "Gọọmentị etiti (federal)", "Ụlọ ọrụ inshọransị ị na-arụrụ ọrụ", "Ụlọ ọrụ ule"], answer: 0, why: "A na-enye ndị producer inshọransị akwụkwọ ikike steeti n'otu n'otu." },
          { objective: "O2", q: "E nwere mgbe a mara gị ikpe felony maka aghụghọ (fraud). Gịnị bụ nzọụkwụ mbụ eziokwu?", options: ["Ahapụ ya n'arịrịọ ahụ", "Ịhapụ ọrụ inshọransị kpamkpam", "Iji aha enyi gị", "Ịjụ ngalaba steeti gị otu esi arịọ nkwenye ederede regulator"], answer: 3, why: "Iwu gọọmentị etiti chọrọ nkwenye ederede maka ụfọdụ ikpe, ngalaba steeti na-akọwakwa otu esi arịọ ya." },
          { objective: "O3", q: "N'arịrịọ, onye na-azụ ahịa zoro ọrịa siri ike o nwere. Kedu ụkpụrụ o mebiri?", options: ["Indemnity", "Insurable interest", "Utmost good faith", "Adhesion"], answer: 2, why: "Akụkụ abụọ ga-ekwu eziokwu; ụgha dị mkpa nwere ike imebi nkpuchi ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Isiokwu ule na ịdị njikere maka ule",
      lessons: [
        {
          title: "Isi ihe life na health na mgbakọ claim ahụike",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Gbakọọ onye na-akwụ gịnị na claim ahụike omume nwere deductible na coinsurance.",
          text: [
            "Inshọransị ndụ (life): term life na-ekpuchi ọnụọgụ afọ a kara aka, o nweghịkwa cash value. Permanent life, dị ka whole life, nwere ike ịdị ndụ niile ma na-akpakọba cash value. Beneficiary bụ onye na-anata ego ọnwụ (death benefit); contingent beneficiary na-anata ya ma ọ bụrụ na onye mbụ ahụ anwụọla. Policyowner na-achịkwa policy ahụ, ọ nwekwara ike ịbụ onye dị iche n'onye inshọransị (insured).",
            "Inshọransị ahụike nwere okwu nke ya. Deductible bụ ihe ị na-akwụ kwa afọ tupu atụmatụ ahụ amalite ịkwụkọ ụgwọ. Coinsurance bụ pasentị ị na-ekerịta mgbe nke ahụ gasịrị, dị ka 80/20: atụmatụ ahụ na-akwụ 80%, ị na-akwụ 20%. Copay bụ ego dollar a kara aka maka nleta. Out-of-pocket maximum bụ ego kacha ị ga-akwụ n'afọ maka nlekọta e kpuchiri.",
            "Naanị omume, nọmba e chepụtara: ụgwọ e kpuchiri $3,000, deductible $1,000 a kwụbeghị, coinsurance 80/20. Ị na-akwụ $1,000 mbụ. A na-ekerịta $2,000 fọdụrụ: atụmatụ ahụ na-akwụ 80% ($1,600), ị na-akwụ 20% ($400). Ị na-akwụ $1,400 n'ozuzu; atụmatụ ahụ na-akwụ $1,600. Lelee: $1,400 + $1,600 = $3,000."
          ],
          steps: ["Dee ego ụgwọ e kpuchiri.", "Wepụ akụkụ deductible a ka ji; onye inshọransị na-akwụ akụkụ ahụ.", "Kee nke fọdụrụ site na pasentị coinsurance.", "Gbakọọ deductible na coinsurance onye inshọransị ọnụ; kwụsị na out-of-pocket maximum.", "Lelee na òkè abụọ ahụ gbakọtara ruo ụgwọ ahụ."],
          words: [["Beneficiary", "onye na-anata ego mgbe onye e kpuchiri nwụrụ."], ["Cash value", "nchekwa ego na-eto n'ime policy permanent life."], ["Deductible", "ego ị na-akwụ tupu inshọransị amalite ịkwụ."], ["Coinsurance", "pasentị ụgwọ gị na atụmatụ ahụ na-ekerịta mgbe deductible gasịrị."], ["Out-of-pocket maximum", "ego kacha ị ga-akwụ n'afọ atụmatụ maka nlekọta e kpuchiri."]],
          slides: [
            { title: "Okwu inshọransị ndụ", bullets: ["Term: afọ a kara aka, enweghị cash value", "Whole life: ndụ niile, na-akpakọba cash value", "Beneficiary na contingent beneficiary"] },
            { title: "Okwu inshọransị ahụike", bullets: ["Deductible: ị na-ebu ụzọ kwụọ", "Coinsurance: pasentị a na-ekerịta, dị ka 80/20", "Copay: ego a kara aka kwa nleta", "Out-of-pocket maximum: oke kwa afọ"] },
            { title: "Claim omume (e chepụtara)", bullets: ["Ụgwọ $3,000, deductible $1,000, 80/20", "Gị: $1,000 + 20% nke $2,000 = $1,400", "Atụmatụ: 80% nke $2,000 = $1,600"] }
          ],
          tryIt: "Naanị omume: gbakọọ claim a n'akwụkwọ. Ụgwọ e kpuchiri $5,000, deductible $500 a kwụbeghị, coinsurance 80/20. Ego ole ka onye inshọransị na-akwụ, ego ole ka atụmatụ ahụ na-akwụ? (Azịza: onye inshọransị $500 + $900 = $1,400; atụmatụ $3,600.)",
          youCanNow: "ịkọwa okwu inshọransị ndụ na ahụike ndị bụ isi ma gbakọọ claim ahụike nwere deductible na coinsurance.",
          quickCheck: [
            { objective: "O4", q: "Naanị omume: ụgwọ e kpuchiri $2,000, deductible $500 a kwụbeghị, coinsurance 80/20. Ego ole ka onye inshọransị na-akwụ?", options: ["$400", "$500", "$800", "$1,500"], answer: 2, why: "Deductible $500 gbakọtara na 20% nke $1,500 fọdụrụ ($300) bụ $800." },
            { objective: "O3", q: "Kedu policy inshọransị ndụ na-akpakọba cash value?", options: ["Whole life", "Term afọ iri", "Term afọ iri abụọ", "Inshọransị ihe mberede njem"], answer: 0, why: "Policy permanent dị ka whole life na-akpakọba cash value; policy term anaghị eme ya." }
          ]
        },
        {
          title: "Isi ihe property na casualty na mgbakọ claim property",
          objectives: ["O1", "O4"],
          minutes: 6,
          goal: "Gbakọọ ihe policy property ma ọ bụ liability ụgbọ ala na-akwụ na claim omume.",
          text: [
            "Policy property na-akwụ ụgwọ mmebi ihe ị nwere. Replacement cost na-akwụ iji dochie ihe ahụ n'ihe ọhụrụ yiri ya. Actual cash value na-akwụ replacement cost wepụ depreciation (ịka nka na iji ya mee ihe). Naanị omume: sofa ọhụrụ na-efu $1,200, depreciation ya bụ $500, ya mere actual cash value ya bụ $700. A na-ewepụ deductible n'ego a na-akwụ.",
            "Nkpuchi casualty (liability) na-akwụ ndị ọzọ mgbe iwu kwuru na ị bụ onye kpatara mmerụ ha. A na-edekarị limit liability ụgbọ ala dị ka nọmba atọ, dị ka 25/50/25: ruo $25,000 maka mmerụ ahụ otu onye, ruo $50,000 maka mmerụ ahụ niile n'otu ihe mberede, na ruo $25,000 maka mmebi ihe. Steeti gị na-ekpebi ihe kacha nta a chọrọ; lelee ha.",
            "Naanị omume: onye ọkwọ ụgbọ ala nwere limit 25/50/25 merụrụ otu onye ahụ, ụgwọ ya bụ $40,000. Policy ahụ na-akwụ $25,000, limit ya maka otu onye. Onye ọkwọ ụgbọ ala ahụ nwere ike ịkwụ $15,000 fọdụrụ n'onwe ya. Ọ bụ ya mere ndị agent ji akọwa limit nke ọma."
          ],
          steps: ["Chọta ego mfu ahụ na ụdị nkpuchi ahụ.", "Maka actual cash value, wepụ depreciation na replacement cost.", "Wepụ deductible.", "Tụnyere ya na policy limit; insurer anaghị akwụ karịa limit.", "Ihe ọ bụla karịrị limit bụ onye inshọransị ga-akwụ ya."],
          words: [["Replacement cost", "ego iji dochie ihe n'ihe ọhụrụ nke ụdị na ịdị mma yiri ya."], ["Actual cash value", "replacement cost wepụ depreciation."], ["Depreciation", "ọnụ ahịa na-ebelata n'ihi ịka nka na iji ya mee ihe."], ["Policy limit", "ego kacha insurer ga-akwụ maka mfu e kpuchiri."], ["Split limits", "limit liability ụgbọ ala e dere dị ka nọmba atọ, dị ka 25/50/25."]],
          slides: [
            { title: "Property: ụzọ abụọ e si akwụ", bullets: ["Replacement cost: ihe ọhụrụ yiri ya", "Actual cash value: replacement cost wepụ depreciation", "A na-ewepụ deductible n'ego a na-akwụ"] },
            { title: "Casualty: liability n'ebe ndị ọzọ nọ", bullets: ["Ọ na-akwụ mgbe iwu kwuru na i merụrụ ndị ọzọ", "Limit ụgbọ ala dị ka 25/50/25", "Steeti gị na-ekpebi ihe kacha nta"] },
            { title: "Claim omume (e chepụtara)", bullets: ["25/50/25, otu onye merụrụ ahụ, ụgwọ $40,000", "Policy na-akwụ limit $25,000 kwa onye", "Onye ọkwọ ụgbọ ala nwere ike ịkwụ $15,000 fọdụrụ"] }
          ],
          tryIt: "Naanị omume: ọkụ kichin kpatara mmebi e kpuchiri ruru $18,000. Policy homeowners na-akwụ replacement cost, deductible bụ $1,000, dwelling limit bụkwa $250,000. Dee ihe insurer na-akwụ na ihe onye nwe ụlọ na-akwụ. (Azịza: insurer $17,000; onye nwe ụlọ $1,000.)",
          youCanNow: "ịmata ọdịiche dị n'etiti nkpuchi property na casualty ma gbakọọ claim omume nwere depreciation, deductible na limit.",
          quickCheck: [
            { objective: "O4", q: "Naanị omume: TV ọhụrụ na-efu $900, depreciation ya bụ $300. Gịnị bụ actual cash value ya?", options: ["$300", "$900", "$1,200", "$600"], answer: 3, why: "Actual cash value bụ replacement cost wepụ depreciation: $900 - $300 = $600." },
            { objective: "O1", q: "Onye ahịa n'amaghị ama merụrụ onye na-ebuga ngwaahịa ahụ n'ụlọ ya, a gbakwa ya akwụkwọ n'ụlọikpe. Kedu ụdị nkpuchi na-aza ya?", options: ["Life", "Casualty (liability)", "Disability income", "Mmebi property nke ụlọ ahụ"], answer: 1, why: "Nkpuchi liability na-akwụ ndị ọzọ mgbe iwu kwuru na onye inshọransị kpatara mmerụ ha." }
          ]
        },
        {
          title: "Iwu omume ọma na atụmatụ ọmụmụ na ule gị",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Mata omume ire ahịa na-ezighi ezi ma dee atụmatụ ọmụmụ na ule nwere ụbọchị.",
          text: [
            "Steeti nwere iwu omume azụmahịa na-ezighi ezi (unfair trade practices), ule ọ bụla na-ajụkwa ha. Misrepresentation bụ ịgha ụgha ma ọ bụ izo ihe policy na-eme. Twisting bụ iji ụgha ma ọ bụ ntụnyere na-eduhie eduhie mee ka onye ahịa dochie policy, nke na-emerụ ya. Churning bụ idochi policy ugboro ugboro tumadi iji nweta commission ọhụrụ. Rebating bụ inye akụkụ commission gị ma ọ bụ onyinye iji nweta ahịa; ọ megidere iwu n'ọtụtụ steeti, ya mere lelee iwu steeti gị. Premium ị natara bụ nke onye ahịa na insurer: agent na-ejide ya n'ntụkwasị obi (fiduciary duty) ma ghara ịgwakọta ya n'ego nke ya (commingling).",
            "Omume eziokwu dị mfe: kwuo eziokwu banyere nkpuchi, buru mkpa onye ahịa ụzọ, tụnyere policy n'ụzọ ziri ezi, dee ihe ede, ma kewapụ ego premium. Ọ bụrụ na o doghị gị anya, jụọ onye isi gị ma ọ bụ ngalaba steeti.",
            "Ugbu a, hazie atụmatụ. Jiri content outline steeti gị depụta isiokwu ọ bụla na ọnụọgụ ajụjụ ya. Nye isiokwu ndị dị arọ ụbọchị ọmụmụ karịa. Họrọ ụbọchị ule ị na-achọ, ụbọchị ule omume abụọ ma ọ bụ karịa na akara ị na-achọ inweta. Mechaa ihe ọmụmụ prelicensing ọ bụla a chọrọ tupu ị debanye aha maka ule ahụ. Gụọ ajụjụ ule ọ bụla ugboro abụọ ma lezie anya na okwu dị ka EXCEPT na NOT.",
            "Ọrụ ikpeazụ: dee Atụmatụ Ọmụmụ na Ule gị nke peeji otu nwere license line gị, nzọụkwụ gọọmentị steeti gị na adreesị weebụ ha, isiokwu na ọnụọgụ ajụjụ ndepụta ahụ, usoro kwa izu nwere ụbọchị, ụbọchị ule omume, claim omume atọ na iwu omume ọma atọ."
          ],
          steps: ["Depụta nzọụkwụ gọọmentị steeti gị n'usoro na adreesị weebụ ha.", "Detuo isiokwu ọ bụla dị na ndepụta na ọnụọgụ ajụjụ ya.", "Nye isiokwu ndị nwere ajụjụ kacha ọtụtụ ụbọchị ọmụmụ karịa.", "Họrọ ụbọchị ule ị na-achọ na opekata mpe ụbọchị ule omume abụọ nwere akara ị na-achọ inweta.", "Tinye claim omume atọ na iwu omume ọma atọ n'okwu nke gị."],
          words: [["Misrepresentation", "ịgha ụgha ma ọ bụ izo ihe policy na-eme ma ọ bụ ihe ọ na-efu."], ["Twisting", "iji ụgha ma ọ bụ ntụnyere na-eduhie eduhie mee ka onye ahịa dochie policy."], ["Churning", "idochi policy ugboro ugboro tumadi iji nweta commission."], ["Rebating", "inyeghachi akụkụ commission ma ọ bụ onyinye iji nweta ahịa; ọ megidere iwu n'ọtụtụ steeti."], ["Fiduciary", "onye a tụkwasịrị obi ka o jiri ego onye ọzọ mee ihe n'eziokwu."], ["Commingling", "ịgwakọta ego premium onye ahịa n'ego nke gị."]],
          slides: [
            { title: "Omume ule na-ajụ", bullets: ["Misrepresentation: ịgha ụgha banyere policy", "Twisting: iduhie onye ahịa ka o dochie policy", "Churning: idochi iji nweta commission", "Rebating: megidere iwu n'ọtụtụ steeti, lelee nke gị"] },
            { title: "Ego premium", bullets: ["Ị na-ejide ya n'ntụkwasị obi: fiduciary duty", "Agwakọtala ya n'ego nke gị"] },
            { title: "Hazie atụmatụ gị", bullets: ["Nzọụkwụ na adreesị weebụ si na steeti gị", "Isiokwu ndepụta na ọnụọgụ ajụjụ ha", "Usoro kwa izu nwere ụbọchị na ule omume"] },
            { title: "N'ụbọchị ule", bullets: ["Gụọ ajụjụ ọ bụla ugboro abụọ", "Lezie anya na EXCEPT na NOT", "Bute ID handbook ahụ chọrọ"] }
          ],
          sources: [SRC.naicUtpa, SRC.naicDepts],
          tryIt: "Ọrụ ikpeazụ: dee Atụmatụ Ọmụmụ na Ule Akwụkwọ Ikike Inshọransị gị n'otu peeji, site n'iji nzọụkwụ gọọmentị na content outline steeti gị, nwere ezi ụbọchị maka izu ọmụmụ ọ bụla, ule omume abụọ na ụbọchị ule ị na-achọ.",
          youCanNow: "ịmata omume ire ahịa na-ezighi ezi, họrọ omume eziokwu, ma soro atụmatụ ọmụmụ na ule nwere ụbọchị maka ule akwụkwọ ikike gị.",
          quickCheck: [
            { objective: "O5", q: "Otu agent gwara agadi nwanyị na policy ochie ya \"abaghị uru\" ka o wee zụta policy ọhụrụ nke na-akwụ agent ahụ ego karịa. Gịnị bụ nke a?", options: ["Underwriting", "Indemnity", "Twisting", "Appointment"], answer: 2, why: "Iji okwu na-eduhie eduhie mee ka onye ahịa dochie policy bụ twisting." },
            { objective: "O6", q: "Ndepụta isiokwu steeti gị nyere otu isiokwu ajụjụ karịrị nke ọzọ nke ukwuu. Gịnị ka ị ga-eme n'atụmatụ gị?", options: ["Nye isiokwu ahụ ụbọchị ọmụmụ karịa", "Hapụ ya n'ihi na ọ dị ogologo", "Mụọ naanị isiokwu ndị kacha nta", "Leghara ndepụta ahụ anya"], answer: 0, why: "Isiokwu nwere ajụjụ karịa kwesịrị oge ọmụmụ karịa." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Isiokwu ule na ịdị njikere maka ule",
        questions: [
          { objective: "O4", q: "Naanị omume: ụgwọ e kpuchiri $4,000, a kwụchaala deductible, coinsurance 80/20. Ego ole ka atụmatụ ahụ na-akwụ?", options: ["$800", "$4,000", "$3,000", "$3,200"], answer: 3, why: "Ebe a kwụchaala deductible, atụmatụ ahụ na-akwụ 80% nke $4,000, ya bụ $3,200." },
          { objective: "O4", q: "Naanị omume: mmebi oké mmiri ozuzo e kpuchiri ruru $12,000, replacement cost, deductible $2,000. Ego ole ka insurer na-akwụ?", options: ["$10,000", "$12,000", "$14,000", "$2,000"], answer: 0, why: "A na-ewepụ deductible na mfu ahụ: $12,000 - $2,000 = $10,000." },
          { objective: "O3", q: "Onye na-anata death benefit ma ọ bụrụ na primary beneficiary anwụọla?", options: ["Agent ahụ", "Contingent beneficiary", "Insurer", "Steeti"], answer: 1, why: "Contingent beneficiary na-esote mgbe primary beneficiary nwụrụ." },
          { objective: "O5", q: "Onye ahịa kwụrụ gị premium n'ego aka (cash). Gịnị ka ị ga-eji ya mee?", options: ["Tinye ya n'akaụntụ nke gị ugbu a", "Mefuo ya ma kwụghachi ya emesịa", "Jide ya dị ka ego ntụkwasị obi, kewapụrụ iche dịka agency gị na steeti chọrọ", "Nyeghachi onye ahịa ụfọdụ dị ka ekele"], answer: 2, why: "A na-ejide premium n'ntụkwasị obi; ịgwakọta ya n'ego nke gị bụ commingling." },
          { objective: "O6", q: "Gịnị kwesịrị ịdị n'ezigbo atụmatụ ọmụmụ na ule?", options: ["Naanị ụbọchị ule", "Nzọụkwụ gọọmentị, isiokwu ndepụta, izu ọmụmụ nwere ụbọchị na ule omume", "Ndepụta commission agent", "Azịza e detuuru site na weebụsaịtị"], answer: 1, why: "Atụmatụ zuru ezu gụnyere nzọụkwụ gọọmentị, isiokwu ndepụta na ezi ụbọchị maka ọmụmụ na omume." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe maka Ule Akwụkwọ Ikike Onye Ọrụ Inshọransị (Agent)",
    questions: [
      { objective: "O1", q: "Gịnị bụ okwu iwu maka agent inshọransị nwere akwụkwọ ikike na-ere inshọransị?", options: ["Producer", "Underwriter", "Adjuster", "Actuary"], answer: 0, why: "Iwu steeti na-akpọ ndị agent na broker nwere akwụkwọ ikike producer." },
      { objective: "O1", q: "Ụlọ akụ were gị ka i ree inshọransị ndụ na nkpuchi disability ogologo oge. Kedu line ị chọrọ?", options: ["Property na Casualty", "Personal Lines", "Life na Accident and Health", "Adjuster"], answer: 2, why: "Policy ndụ chọrọ Life, nkpuchi disability bụkwa Accident and Health." },
      { objective: "O1", q: "Kedu ọrụ na-achọkarị akwụkwọ ikike dị iche na nke agent?", options: ["Ire inshọransị ndị mgbazinye ụlọ (renters)", "Ire term life", "Ire inshọransị ụgbọ ala", "Inyocha na idozi claim dị ka adjuster"], answer: 3, why: "Ndị adjuster na-enyocha ma na-edozi claim, ha na-achọkarị akwụkwọ ikike nke ha." },
      { objective: "O2", q: "Kedu weebụsaịtị na-enyere gị aka ịchọta ngalaba inshọransị steeti ọ bụla?", options: ["Ibe ngalaba inshọransị steeti nke NAIC", "Blọọgụ onye na-ere ihe ọmụmụ", "Otu na soshal midia", "Ebe mkparịta ụka n'ịntanetị (forum)"], answer: 0, why: "NAIC, otu ndị na-achị inshọransị steeti, nwere njikọ gaa na ngalaba steeti ọ bụla." },
      { objective: "O2", q: "Na Texas, mgbe anyị lelere, olee mgbe ị nwere ike ịrịọ akwụkwọ ikike general lines?", options: ["Tupu i were ule ọ bụla", "Mgbe i gafere ule steeti", "Naanị mgbe i rụchara ọrụ afọ ise", "Naanị site n'ụlọ ọrụ inshọransị"], answer: 1, why: "TDI kwuru ka i buru ụzọ gafee ule ahụ wee rịọ site na Sircon ma ọ bụ NIPR." },
      { objective: "O2", q: "Enyi gị kwuru na a chọrọ ihe ọmụmụ awa 20 n'ebe niile. Gịnị ka ị ga-eme?", options: ["Kwere ya", "Kwụọ ụgwọ ihe ọmụmụ kacha ogologo ị hụrụ", "Lelee ibe ngalaba steeti nke gị", "Ahapụ ihe ọmụmụ ọ bụla"], answer: 2, why: "Iwu prelicensing dị iche site na steeti ruo steeti, ya mere lelee ibe gọọmentị." },
      { objective: "O3", q: "Gịnị bụ premium?", options: ["Ego insurer na-akwụ na claim", "Ego onye inshọransị na-akwụ maka nkpuchi", "Akwụkwọ ikike agent", "Policy limit"], answer: 1, why: "Premium bụ ihe onye inshọransị na-akwụ iji zụta nkpuchi." },
      { objective: "O3", q: "Kedu peeji policy na-egosi onye e kpuchiri, limit na premium?", options: ["Akwụkwọ ozi mmeghe (cover letter)", "Fọm claim", "Arịrịọ (application)", "Declarations page"], answer: 3, why: "Declarations page na-achịkọta onye na ihe e kpuchiri, limit na premium." },
      { objective: "O3", q: "Gịnị mere a na-agụkarị okwu na-edoghị anya na policy n'ụzọ na-abara onye ahịa uru?", options: ["N'ihi na policy ahụ bụ contract of adhesion nke insurer dere", "N'ihi na agent dere ya", "N'ihi na onye ahịa na-eziri ezi mgbe niile", "N'ihi indemnity"], answer: 0, why: "Insurer na-ede nkwekọrịta ahụ, onye ahịa na-anabata ya otu o si dị, ya mere okwu na-edoghị anya na-abara onye ahịa uru." },
      { objective: "O3", q: "Kedu policy ndụ na-ekpuchi ọnụọgụ afọ a kara aka, nke na-enweghị cash value?", options: ["Whole life", "Universal life", "Term life", "Permanent life"], answer: 2, why: "Term life na-ekpuchi oge a kara aka, ọ naghịkwa akpakọba cash value." },
      { objective: "O4", q: "Naanị omume: ụgwọ e kpuchiri $6,000, deductible $1,000 a kwụbeghị, coinsurance 80/20. Ego ole ka onye inshọransị na-akwụ?", options: ["$1,200", "$2,000", "$1,000", "$5,000"], answer: 1, why: "Deductible $1,000 gbakọtara na 20% nke $5,000 fọdụrụ ($1,000) bụ $2,000." },
      { objective: "O4", q: "Naanị omume: onye ọkwọ ụgbọ ala nwere limit 25/50/25 merụrụ otu onye ahụ, ụgwọ ya bụ $30,000. Ego ole ka policy ahụ na-akwụ maka onye ahụ?", options: ["$30,000", "$50,000", "$5,000", "$25,000"], answer: 3, why: "Limit mmerụ ahụ kwa onye bụ $25,000; onye ọkwọ ụgbọ ala nwere ike ịkwụ $5,000 fọdụrụ." },
      { objective: "O4", q: "Naanị omume: laptop ọhụrụ na-efu $1,000, depreciation ya bụ $400; deductible bụ $100. Ego ole ka policy actual cash value na-akwụ?", options: ["$500", "$600", "$900", "$1,000"], answer: 0, why: "Actual cash value bụ $1,000 - $400 = $600, wepụ deductible $100, ọ bụrụ $500." },
      { objective: "O4", q: "Kedu ego na-akpachi ihe mmadụ ga-akwụ maka nlekọta ahụike e kpuchiri n'afọ?", options: ["Copay", "Premium", "Out-of-pocket maximum", "Deductible"], answer: 2, why: "Out-of-pocket maximum bụ ego kacha onye inshọransị ga-akwụ n'afọ atụmatụ maka nlekọta e kpuchiri." },
      { objective: "O5", q: "Agent nyere onye ahịa gift card $100 ka o zụta policy. Gịnị ka a na-akpọ nke a?", options: ["Twisting", "Rebating", "Underwriting", "Indemnity"], answer: 1, why: "Inye ihe bara uru iji nweta ahịa bụ rebating, nke megidere iwu n'ọtụtụ steeti." },
      { objective: "O5", q: "Agent na-edochi policy onye ahịa kwa afọ tumadi iji nweta commission ọhụrụ. Gịnị bụ nke a?", options: ["Churning", "Coinsurance", "Appointment", "Utmost good faith"], answer: 0, why: "Idochi ugboro ugboro tumadi maka commission bụ churning." },
      { objective: "O5", q: "Onye ahịa jụrụ ma policy dị ọnụ ala na-ekpuchi mmebi idei mmiri (flood), o dokwaghị gị anya. Gịnị ka ị ga-eme?", options: ["Kwuo ee ka ahịa ahụ gwụ", "Gbanwee okwu", "Kwuo na a na-ekpuchi idei mmiri mgbe niile", "Lelee okwu policy ahụ ma ọ bụ jụọ ụlọ ọrụ ahụ tupu ị zaa"], answer: 3, why: "Ịkọ nkọ banyere nkpuchi nwere ike ịbụ misrepresentation; buru ụzọ lelee ma kwuo eziokwu." },
      { objective: "O6", q: "Gịnị bụ nzọụkwụ mbụ kacha mma mgbe ị na-ahazi atụmatụ ọmụmụ ule gị?", options: ["Debanye aha maka ule echi", "Zụta ihe ọmụmụ kacha ọnụ ahịa", "Nweta nzọụkwụ gọọmentị na content outline ule steeti gị", "Buru n'isi ajụjụ omume ọ bụla"], answer: 2, why: "Nzọụkwụ gọọmentị na ndepụta isiokwu na-egosi ihe ị ga-eme na ihe ị ga-amụ." },
      { objective: "O6", q: "Akara ule omume mbụ gị dị n'okpuru ihe ị na-achọ. Gịnị ka ị ga-agbanwe n'atụmatụ gị?", options: ["Tinye ụbọchị ọmụmụ maka isiokwu ndepụta ị kacha adịghị ike na ya ma hazie ule omume ọzọ", "Kagbuo atụmatụ ahụ", "Were ezi ule ahụ ozugbo", "Mụọ naanị isiokwu ị maraworị"], answer: 0, why: "Ule omume na-egosi isiokwu ị na-adịghị ike na ya; tinye oge n'ebe ahụ ma nwalee ọzọ tupu ezi ule ahụ." },
      { objective: "O6", q: "N'ule, ajụjụ jụrụ ihe e kpuchiri \"EXCEPT\". Gịnị ka ị ga-eme?", options: ["Họrọ nkwupụta mbụ bụ eziokwu", "Hapụ ya", "Kọọ nkọ ngwa ngwa", "Gụọ ya ugboro abụọ ma họrọ ihe a NA-EKPUCHIGHỊ"], answer: 3, why: "EXCEPT na-arịọ maka otu nhọrọ na-adabaghị; ịgụ ya ugboro abụọ na-egbochi mperi nleghara anya." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 6, 8, 10, 12, 14, 16, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "License line kwesịrị ekwesị", objective: "O1", notYet: "Ọ dịghị line a kpọrọ aha, ma ọ bụ line na-adabaghị n'ọrụ ahụ.", meets: "Ọ kpọrọ aha license line dabara n'ọrụ ahụ ma kwuo ihe mere.", exceeds: "Ọ kpọkwara aha line ma ọ bụ akwụkwọ ikike nke abụọ onye na-amụ ihe nwere ike ịchọ emesịa na ihe mere." },
      { name: "Nzọụkwụ gọọmentị", objective: "O2", notYet: "Nzọụkwụ efuola ma ọ bụ si na mgbasa ozi ma ọ bụ ndị enyi.", meets: "Nzọụkwụ ọ bụla si n'ibe gọọmentị steeti ahụ, n'usoro, nwere adreesị weebụ.", exceeds: "Ọ tinyere ụbọchị e lelere ya, handbook ụlọ ọrụ ule na nzọụkwụ nlele ndekọ ọ bụla." },
      { name: "Isiokwu ndepụta na okwu", objective: "O3", notYet: "Enweghị isiokwu ndepụta, ma ọ bụ a kọwahiere okwu ndị bụ isi.", meets: "Ọ depụtara isiokwu ndepụta ọ bụla na ọnụọgụ ajụjụ ya ma kọwaa okwu ndị bụ isi nke ọma.", exceeds: "Ọ gosiri isiokwu onye na-amụ ihe kacha adịghị ike na ya ma tinye flash card maka ha." },
      { name: "Claim omume", objective: "O4", notYet: "Claim erughị atọ, ma ọ bụ azịza ezighi ezi.", meets: "Claim omume atọ a gbakọrọ nke ọma, na-egosi nzọụkwụ ọ bụla.", exceeds: "Claim ndị ahụ gụnyere deductible, coinsurance na policy limit, nke ọ bụla nwere nlele mgbakọ." },
      { name: "Iwu omume ọma", objective: "O5", notYet: "Iwu efuola ma ọ bụ ezighi ezi.", meets: "Iwu omume ọma atọ a kọwara nke ọma n'okwu onye na-amụ ihe n'onwe ya.", exceeds: "Iwu ọ bụla nwere obere ọmụmaatụ nke omume eziokwu." },
      { name: "Atụmatụ nwere ụbọchị", objective: "O6", notYet: "Enweghị ụbọchị, ma ọ bụ enweghị ule omume.", meets: "Usoro kwa izu nwere ụbọchị, ụbọchị ule a na-achọ na ule omume abụọ nwere akara a na-achọ inweta.", exceeds: "Ụbọchị ọmụmụ karịa na-aga n'isiokwu ndepụta kacha arọ, ya na ụbọchị ule ndabere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha maka ule akwụkwọ ikike steeti ha n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha gafere ule steeti ma nweta akwụkwọ ikike (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na e nyere ha ọrụ ma ọ bụ appointment dị ka agent inshọransị, ma ọ bụ na ha mepere agency nke ha"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji meghee ibe gọọmentị steeti ahụ",
      "Akwụkwọ, mkpịsị ode na igwe mgbakọ (calculator) nkịtị",
      "Content outline ule na candidate handbook steeti onye na-amụ ihe (n'efu site n'ụlọ ọrụ ule)",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke, gbakwunye oge maka atụmatụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Ọ bụrụ na ị nwere ike, kewaa ndị na-amụ ihe site na steeti, ma meghee ibe akwụkwọ ikike steeti ọ bụla ọnụ; enyela iwu otu steeti dị ka à ga-asị na ọ dị n'ebe niile.",
      "Mee ka o doo anya na ihe ọmụmụ a na-akwado ndị na-amụ ihe, ọ naghị anọchi ihe ọmụmụ prelicensing steeti chọrọ, ọ naghịkwa enye akwụkwọ ikike.",
      "Maka ndị na-amụ ihe nwere ndekọ mpụ, kọwaa iwu nkwenye ederede n'eziokwu ma zipu ha na ngalaba steeti ha; akọla nkọ banyere okwu ikpe ha.",
      "Mgbakọ claim niile na-eji nọmba e chepụtara; enyela ndụmọdụ banyere policy onye ọ bụla kwesịrị ịzụta.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ, ma lelee na nzọụkwụ ọ bụla nwere adreesị weebụ gọọmentị."
    ]
  }
};
