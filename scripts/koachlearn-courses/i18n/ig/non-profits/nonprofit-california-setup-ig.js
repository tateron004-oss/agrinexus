"use strict";

// Koach Learn course (Igbo translation of non-profits/nonprofit-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const SOS_ARTICLES = { name: "California Secretary of State: fọm na ụgwọ maka kọpọreshọn California", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "California Secretary of State: Statement of Information (SI-100 maka nzukọ na-anaghị achọ uru)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: Nweta Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: Ụgwọ Form 1023 na 1023-EZ", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: Banyere Form 1023", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: Banyere Form 1023-EZ (mpempe nlele ntozu dị n'ime ntụziaka ya)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Form 990-N (e-Postcard) maka obere nzukọ na-enweghị ụtụ isi", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS Publication 1828: Ntụziaka ụtụ isi maka chọọchị na nzukọ okpukpe", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "California Franchise Tax Board: Nzukọ ọrụ ebere na nzukọ na-anaghị achọ uru (Form 3500 / 3500A)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "California Attorney General: Registry of Charities, ndebanye aha mbụ (CT-1)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "California Attorney General: Registry of Charities, mmegharị kwa afọ (RRF-1)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-ig",
  lang: "ig",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Ịmalite Nzukọ Na-anaghị Achọ Uru na California, Gụnyere Ego Ọ Na-efu",
  skills: "Ịhọrọ ụdị nzukọ na-anaghị achọ uru kwesịrị ekwesị, Iziga articles nye Secretary of State, Inweta EIN n'efu, Ịrịọ maka enweghị ụtụ isi nke gọọmentị etiti na nke steeti, Ịdebanye aha na Attorney General, Ime atụmatụ ego na kalenda maka mmalite",
  outcome: "ime atụmatụ mmalite zuru ezu nwere ụbọchị maka nzukọ na-anaghị achọ uru nke na-erere ọha uru (public benefit) na California: akwụkwọ ọ bụla n'usoro ziri ezi, ọfịs na-anata ya, aha fọm ahụ, ụgwọ gọọmentị, na akwụkwọ a na-eziga kwa afọ iji nọgide n'ọnọdụ ọma.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-amalite nzukọ ọrụ ebere, ozi chọọchị, otu obodo ma ọ bụ mmemme na California: ndị malitere ya, ndị pastọ, ndị otu bọọdụ na ndị ọrụ afọ ofufo chọrọ ime ya nke ọma na nke mbụ.",
    "Ị ga-amụta nzọụkwụ ndị ahụ n'usoro: họrọ ụdị nzukọ gị na bọọdụ gị, ziga articles of incorporation nye Secretary of State, nweta EIN n'efu site na IRS, rịọ maka ọnọdụ 501(c)(3), nweta enweghị ụtụ isi California site na Franchise Tax Board, ma debanye aha na Registry of Charities nke Attorney General. Mgbe ahụ ị ga-amụta akwụkwọ a na-eziga kwa afọ ma mee atụmatụ ego.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E lelere ụgwọ ọ bụla dị n'ihe ọmụmụ a na peeji gọọmentị na 27 Ọktoba 2026, e dekwara njikọ ya ka i wee lelee ya ọzọ. Ụgwọ na-agbanwe, ya mere kwado ya mgbe niile na peeji gọọmentị tupu ị kwụọ ụgwọ. Ihe ọmụmụ a bụ nkuzi, ọ bụghị ndụmọdụ iwu ma ọ bụ ụtụ isi: maka okwu nke gị, gwa ọka iwu na-ahụ maka nzukọ na-anaghị achọ uru, onye na-agụ akaụntụ, ma ọ bụ ebe enyemaka nzukọ na-anaghị achọ uru n'efu."
  ],
  finalTask: "Mee atụmatụ mmalite otu peeji maka nzukọ gị (nke ezi ma ọ bụ nke omume): tebụl nwere akwụkwọ ọ bụla n'usoro, ọfịs, aha fọm, ụgwọ site na peeji gọọmentị, ụbọchị ị chọrọ iziga ya, na akwụkwọ a na-eziga kwa afọ ya na ụbọchị ha ga-erute. Tinye ego mmalite niile gbakọtara na njikọ nke peeji gọọmentị ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-amalite nzukọ ọrụ ebere, ozi chọọchị, otu obodo ma ọ bụ mmemme na California: ndị malitere ya, ndị pastọ, ndị otu bọọdụ na ndị ọrụ afọ ofufo chọrọ ime ya nke ọma na nke mbụ.",
    startingPoint: "Ha nwere ebumnuche, ọtụtụ mgbe ha nwekwara otu ndị na-enye aka. Ọtụtụ n'ime ha ezigabeghị akwụkwọ nye Secretary of State, IRS, Franchise Tax Board ma ọ bụ Attorney General, ha amaghịkwa usoro ya ma ọ bụ ego ọ na-efu.",
    gap: "Ndị malitere nzukọ na-eziga akwụkwọ n'usoro ezighi ezi, na-akwụ weebụsaịtị ụgwọ maka ọrụ dị n'efu, ma ọ bụ na-ahapụ akwụkwọ kwa afọ ma tufuo ohere enweghị ụtụ isi. Ndị na-amụ ihe chọrọ otu atụmatụ nwere ụbọchị, nke nwere akwụkwọ ọ bụla, ọfịs, fọm, ụgwọ gọọmentị na ụbọchị kwa afọ, ka nzukọ ahụ malite nke ọma ma nọgide n'ọnọdụ ọma.",
    constraints: [
      "Ụgwọ na fọm na-agbanwe; a na-elele ụgwọ ọ bụla na peeji gọọmentị tupu e ziga akwụkwọ",
      "Ọ bụghị ndụmọdụ iwu ma ọ bụ ụtụ isi: ndị na-amụ ihe na-ajụ ọka iwu, ebe enyemaka ma ọ bụ ọkachamara mgbe obi abụọ dị",
      "Nzuzo: nọmba Social Security ma ọ bụ ITIN na-aga naanị na saịtị gọọmentị IRS, ọ dịghị mgbe ọ na-aga na ngwa AI ma ọ bụ email",
      "Chọọchị na otu okpukpe nwere iwu pụrụ iche a ga-elele",
      "Okwu dị mfe maka ndị na-amalite nzukọ na nke mbụ; ihe dị ka nkeji 60 n'ozuzu"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nzọụkwụ maka ịmalite nzukọ ọrụ ebere na California", action: "idepụta akwụkwọ mmalite ndị bụ isi n'usoro na ọfịs na-ahụ maka nke ọ bụla", standard: "ma akwụkwọ ọ bụla dị n'usoro ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ebumnuche nzukọ gị", action: "ịhọrọ fọm articles of incorporation kwesịrị ekwesị ma hazie Statement of Information", standard: "ma ebe a na-eziga ya na ụbọchị ha ga-erute ziri ezi" },
    { id: "O3", condition: "Mgbe e zigachara articles gị", action: "inweta EIN n'efu na irs.gov ma hazie nzukọ bọọdụ mbụ", standard: "ma e dee nọmba nzuzo naanị na saịtị gọọmentị IRS, ma depụta mkpebi ọ bụla nke nzukọ mbụ" },
    { id: "O4", condition: "Site n'iji mpempe nlele ntozu nke IRS", action: "ịhọrọ n'etiti Form 1023 na Form 1023-EZ ma kwuo ebe a na-eziga ya", standard: "ma were ụgwọ ahụ site na peeji gọọmentị" },
    { id: "O5", condition: "Mgbe gọọmentị etiti kwadoro gị ma ọ bụ mgbe i nwetara onyinye mbụ", action: "ịhazi enweghị ụtụ isi nke Franchise Tax Board na ndebanye aha na Registry nke Attorney General", standard: "ma were fọm ziri ezi ma debe ụbọchị 30 nke Registry" },
    { id: "O6", condition: "Mgbe e nyere gị ụgwọ na ụbọchị e lelere", action: "ime atụmatụ ego mmalite na kalenda akwụkwọ kwa afọ", standard: "ma e lelee ụgwọ na ụbọchị ọ bụla na peeji gọọmentị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmalite kọpọreshọn ahụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Map ụzọ: ihe nzukọ na-anaghị achọ uru na California chọrọ",
          minutes: 5,
          goal: "Depụta akwụkwọ mmalite ndị bụ isi n'usoro ziri ezi na ọfịs na-ahụ maka nke ọ bụla.",
          text: [
            "Na California, nzukọ ọrụ ebere na-aghọkarị nonprofit public benefit corporation. Ịbụ kọpọreshọn na-anaghị achọ uru bụ ihe steeti na-ahụ maka ya. Ịnwe enweghị ụtụ isi bụ nzọụkwụ dị iche: otu ugboro na IRS (gọọmentị etiti), otu ugboro na Franchise Tax Board (steeti). Nzukọ ọrụ ebere na-achọ onyinye na-edebanyekwa aha na Attorney General.",
            "Usoro a na-agbasokarị bụ: 1) họrọ ebumnuche gị, aha na bọọdụ mbụ; 2) ziga articles of incorporation nye Secretary of State; 3) nweta EIN site na IRS; 4) nabata bylaws ma mee nzukọ bọọdụ mbụ; 5) ziga Statement of Information; 6) rịọ maka ọnọdụ 501(c)(3) nke gọọmentị etiti; 7) rịọ maka enweghị ụtụ isi California na Franchise Tax Board; 8) debanye aha na Registry of Charities nke Attorney General.",
            "Ime ha n'usoro dị mkpa. Dịka ọmụmaatụ, IRS na-agwa kọpọreshọn ka ha debanye aha na steeti tupu ha arịọ EIN, Attorney General na-arịọkwa articles na bylaws gị mgbe ị na-edebanye aha."
          ],
          steps: ["Dee ebumnuche gị n'otu ahịrịokwu ma ọ bụ abụọ.", "Họrọ mmadụ atọ ma ọ bụ karịa maka bọọdụ mbụ gị, ọ bụrụ na ị nwere ike.", "Dee nzọụkwụ asatọ ahụ n'usoro n'otu peeji.", "N'akụkụ nzọụkwụ ọ bụla, dee ọfịs ahụ: Secretary of State, IRS, Franchise Tax Board ma ọ bụ Attorney General."],
          words: [["Nonprofit public benefit corporation", "ụdị kọpọreshọn California ọtụtụ nzukọ ọrụ ebere na-eji; ọ na-ejere ọha ozi, ọ bụghị ndị nwe ya."], ["501(c)(3)", "akụkụ iwu ụtụ isi gọọmentị etiti maka nzukọ ọrụ ebere; onyinye e nyere ha na-ebelatakarị ụtụ isi onye nyere ya."], ["Enweghị ụtụ isi (tax-exempt)", "na a chọghị ka ị kwụọ ụtụ isi ego a na-enweta, mgbe otu ụlọ ọrụ gọọmentị kwadoro ya."]],
          slides: [
            { title: "Ọfịs anọ ị ga-arụ ọrụ na ha", bullets: ["Secretary of State: na-emepụta kọpọreshọn ahụ", "IRS: EIN na ọnọdụ 501(c)(3) nke gọọmentị etiti", "Franchise Tax Board: enweghị ụtụ isi California", "Attorney General: Registry of Charities"] },
            { title: "Usoro ahụ, akụkụ 1", bullets: ["1. Ebumnuche, aha, bọọdụ mbụ", "2. Articles of incorporation (Secretary of State)", "3. EIN (IRS, n'efu)", "4. Bylaws na nzukọ bọọdụ mbụ"] },
            { title: "Usoro ahụ, akụkụ 2", bullets: ["5. Statement of Information (Secretary of State)", "6. Arịrịọ 501(c)(3) (IRS)", "7. Form 3500 ma ọ bụ 3500A (Franchise Tax Board)", "8. Debanye aha na Attorney General (CT-1)"] },
            { title: "Ụdị ọnọdụ abụọ", bullets: ["Kọpọreshọn na-anaghị achọ uru: ihe steeti", "Enweghị ụtụ isi: nkwado dị iche nke gọọmentị etiti na steeti"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Dee ebumnuche nzukọ gị n'otu ahịrịokwu ma ọ bụ abụọ. Wee dee nzọụkwụ mmalite asatọ ahụ n'usoro na ọfịs maka nke ọ bụla. Debe peeji a: ọ ga-aghọ atụmatụ mmalite ikpeazụ gị.",
          youCanNow: "idepụta akwụkwọ mmalite nke nzukọ na-anaghị achọ uru na California n'usoro ma kpọọ aha ọfịs na-ahụ maka nke ọ bụla.",
          quickCheck: [
            { objective: "O1", q: "Kedu ọfịs na-ahụ maka enweghị ụtụ isi California?", options: ["Franchise Tax Board", "Secretary of State", "Attorney General", "Kansụl obodo"], answer: 0, why: "Enweghị ụtụ isi dị na IRS (gọọmentị etiti) na Franchise Tax Board (steeti)." },
            { objective: "O1", q: "Onye na-amalite nzukọ chọrọ ịrịọ EIN tupu o ziga articles. Gịnị ka ị ga-agwa ya?", options: ["Usoro ọ bụla dị mma", "Buru ụzọ ziga articles nye Secretary of State, dị ka IRS na-agwa kọpọreshọn", "Hapụ articles", "Buru ụzọ debanye aha na Attorney General"], answer: 1, why: "IRS na-agwa kọpọreshọn ka ha debanye aha na steeti tupu ha arịọ EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iziga articles of incorporation",
          minutes: 5,
          goal: "Họrọ fọm articles kwesịrị ekwesị ma ziga ya nye Secretary of State.",
          text: [
            "Articles of incorporation na-emepụta kọpọreshọn gị. California Secretary of State nwere ụdị atọ maka nzukọ na-anaghị achọ uru: Form ARTS-PB (public benefit, na-erere ọha uru), Form ARTS-RE (okpukpe) na Form ARTS-MU (mutual benefit, na-erere ndị otu uru). Ụgwọ e gosiri maka nke ọ bụla bụ $30 mgbe anyị lelere.",
            "Ọtụtụ nzukọ ọrụ ebere na-eji public benefit. Chọọchị ma ọ bụ ozi okpukpe nwere ike iji fọm okpukpe. Mutual benefit bụ maka otu na-ejere ndị otu ha ozi, dị ka ụfọdụ klọb, ọ dabaghịkwa ọtụtụ nzukọ ọrụ ebere. Ọ bụrụ na ị chọrọ ọnọdụ 501(c)(3), IRS chọrọ ụfọdụ okwu n'ime articles gị banyere ebumnuche gị na ihe ga-eme akụ gị ma ọ bụrụ na i mechie. Gụọ ntụziaka fọm ahụ, ma rịọ ọka iwu nzukọ na-anaghị achọ uru ma ọ bụ ebe enyemaka ka ọ lelee ya.",
            "Ị nwere ike iziga ya n'ịntanetị na bizfile Online (bizfileonline.sos.ca.gov), ma ọ bụ site na post ma ọ bụ n'onwe gị. Buru ụzọ chọọ aha ahụ ka ị hụ na onye ọzọ ejighị ya. N'ime ụbọchị 90, ị ga-ezigakwa Statement of Information (Form SI-100, $20), ma ziga ya ọzọ afọ abụọ ọ bụla."
          ],
          steps: ["Chọọ aha gị na bizfile Online.", "Họrọ fọm ahụ: ARTS-PB maka ọtụtụ nzukọ ọrụ ebere, ARTS-RE maka otu okpukpe.", "Dejupụta ya na aha gị, ebumnuche gị na agent for service of process.", "Ziga ya n'ịntanetị ma kwụọ ụgwọ e gosiri na peeji gọọmentị.", "Tinye Statement of Information (SI-100) na kalenda gị: n'ime ụbọchị 90, wee afọ abụọ ọ bụla."],
          words: [["Articles of incorporation", "obere akwụkwọ na-emepụta kọpọreshọn gị n'iwu."], ["Agent for service of process", "onye ma ọ bụ ụlọ ọrụ kwetara ịnata akwụkwọ iwu n'aha nzukọ ahụ."], ["Statement of Information", "fọm na-agwa steeti adreesị gị na ndị isi gị; nzukọ na-anaghị achọ uru na-eziga SI-100."]],
          slides: [
            { title: "Fọm articles atọ maka nzukọ na-anaghị achọ uru", bullets: ["ARTS-PB: public benefit (ọtụtụ nzukọ ọrụ ebere)", "ARTS-RE: okpukpe", "ARTS-MU: mutual benefit (na-ejere ndị otu ozi)"] },
            { title: "Ụgwọ mgbe e lelere (27 Ọktoba 2026)", bullets: ["Articles: $30", "Statement of Information SI-100: $20", "Kwado ya mgbe niile na sos.ca.gov tupu ị kwụọ ụgwọ"] },
            { title: "Otu esi eziga ya", bullets: ["Buru ụzọ chọọ aha ahụ", "Ziga ya n'ịntanetị na bizfileonline.sos.ca.gov", "Ma ọ bụ site na post ma ọ bụ n'onwe gị"] },
            { title: "Echefula", bullets: ["SI-100 n'ime ụbọchị 90 mgbe i zigara articles", "Wee afọ abụọ ọ bụla", "Okwu 501(c)(3): ka onye maara ihe lelee articles ahụ"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Meghee peeji fọm Secretary of State. Chọta fọm articles dabara otu gị ma dee aha fọm ahụ na ụgwọ ya ugbu a. Wee chọta ụgwọ SI-100 ma tinye ha abụọ n'atụmatụ gị, ya na ụbọchị SI-100 ga-erute.",
          youCanNow: "ịhọrọ fọm articles kwesịrị ekwesị, ịchọta ụgwọ ya na peeji gọọmentị, na ịhazi oge Statement of Information gị.",
          quickCheck: [
            { objective: "O2", q: "Kedu fọm articles na-adabaghị ọtụtụ nzukọ ọrụ ebere?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (mutual benefit)", "Ọ dịghị nke dabara"], answer: 2, why: "Mutual benefit bụ maka otu na-ejere ndị otu ha ozi, ọ dabaghịkwa ọtụtụ nzukọ ọrụ ebere." },
            { objective: "O2", q: "Ị chọrọ ịkpọ nzukọ gị \"Hope Kitchen.\" Gịnị ka ị ga-eme tupu i ziga ya?", options: ["Ziga ya ozugbo", "Jụọ AI ma aha ahụ ọ dị", "Kwụọ weebụsaịtị ụgwọ ka o debere ya", "Buru ụzọ chọọ aha ahụ ka ị hụ na onye ọzọ ejighị ya"], answer: 3, why: "Buru ụzọ chọọ aha ahụ ka ị hụ na onye ọzọ ejighị ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Inweta EIN gị, bylaws na nzukọ bọọdụ mbụ",
          minutes: 5,
          goal: "Nweta EIN n'efu n'enweghị nsogbu ma kwadebe nzukọ bọọdụ mbụ.",
          text: [
            "EIN (Employer Identification Number) bụ nọmba ụtụ isi gọọmentị etiti nke nzukọ ahụ. Ị chọrọ ya maka akaụntụ ụlọ akụ, maka ịkwụ ndị ọrụ ụgwọ na maka arịrịọ enweghị ụtụ isi gị. IRS kwuru na ọ dịghị mgbe ị ga-akwụ ụgwọ maka EIN. Ụfọdụ weebụsaịtị na-ana ụgwọ maka ya: zere ha ma rịọ ya na irs.gov.",
            "Ngwa IRS n'ịntanetị chọrọ nọmba Social Security ma ọ bụ ITIN nke onye na-ahụ maka nzukọ ahụ (responsible party), a ga-emechakwa ya n'otu oge n'akwụsịghị. Dee nọmba nzuzo ndị a naanị na saịtị gọọmentị IRS, ọ dịghị mgbe ị ga-ede ha na ngwa AI, email ma ọ bụ weebụsaịtị ọ bụla ọzọ. Bipụta ma ọ bụ chekwaa akwụkwọ ozi nkwenye ahụ.",
            "Bylaws bụ iwu gị: ole ndị isi (directors), otu e si ahọpụta ha, otu nzukọ si arụ ọrụ, na onye na-abịanye aka na cheque. Na nzukọ bọọdụ mbụ, bọọdụ na-anabata bylaws, na-ahọpụta ndị isi ọrụ (officers), na-akwado imeghe akaụntụ ụlọ akụ ma na-anabata iwu esemokwu mmasị (conflict-of-interest policy). Dee minits ma debe ha."
          ],
          steps: ["Chere ruo mgbe Secretary of State nabatara articles gị.", "Gaa na irs.gov ma rịọ EIN site na ngwa n'ịntanetị dị n'efu.", "Chekwaa akwụkwọ ozi nkwenye EIN n'ime folda ndekọ gị.", "Dee bylaws na iwu esemokwu mmasị.", "Mee nzukọ bọọdụ mbụ ma dee minits."],
          words: [["EIN", "Employer Identification Number: nọmba ụtụ isi gọọmentị etiti n'efu maka nzukọ."], ["Bylaws", "iwu e dere ede maka otu nzukọ ahụ na bọọdụ ya si arụ ọrụ."], ["Minits (minutes)", "ndekọ e dere ede nke ihe bọọdụ kpebiri na nzukọ."], ["Iwu esemokwu mmasị (conflict-of-interest policy)", "iwu na-ekwu ihe onye otu bọọdụ ga-eme mgbe mkpebi nwere ike irere ya n'onwe ya uru."]],
          slides: [
            { title: "EIN gị", bullets: ["Nọmba ụtụ isi gọọmentị etiti nke nzukọ ahụ", "N'efu na irs.gov: akwụla weebụsaịtị ụgwọ maka ya", "A chọrọ ya maka ụlọ akụ na fọm enweghị ụtụ isi"] },
            { title: "Debe nọmba nzuzo na nzuzo", bullets: ["SSN ma ọ bụ ITIN na-aga naanị na saịtị gọọmentị IRS", "Ọ dịghị mgbe na ngwa AI, email ma ọ bụ weebụsaịtị ndị ọzọ", "Chekwaa akwụkwọ ozi nkwenye ahụ"] },
            { title: "Nzukọ bọọdụ mbụ", bullets: ["Nabata bylaws", "Họpụta ndị isi ọrụ", "Kwado akaụntụ ụlọ akụ", "Nabata iwu esemokwu mmasị"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Mee agenda nzukọ mbụ nwere ihe ise: nabata bylaws, họpụta ndị isi ọrụ, kwado akaụntụ ụlọ akụ, nabata iwu esemokwu mmasị, ma kpebie ụbọchị nzukọ ọzọ. Tinye \"Rịọ EIN na irs.gov (n'efu)\" n'atụmatụ gị, ya na ụbọchị mgbe e zigachara articles gị.",
          youCanNow: "inweta EIN n'efu n'enweghị nsogbu, na ịgba nzukọ bọọdụ mbụ nwere mkpebi ziri ezi na agenda.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ị chọrọ EIN maka ya?", options: ["Akaụntụ ụlọ akụ, ịkwụ ndị ọrụ ụgwọ na arịrịọ enweghị ụtụ isi", "Naanị maka ịzụta ụlọ", "Naanị maka chọọchị", "Ọ dịghị ihe; ọ bụ naanị ihe ịchọ mma"], answer: 0, why: "EIN bụ nọmba ụtụ isi gọọmentị etiti nke nzukọ ahụ maka ụlọ akụ, ịkwụ ndị ọrụ ụgwọ na arịrịọ enweghị ụtụ isi." },
            { objective: "O3", q: "Ị na-ejupụta ngwa EIN nke IRS n'ịntanetị ma ị chọrọ ịkwụsị n'etiti. Gịnị ka ị ga-ama?", options: ["Ị nwere ike ichekwa ya ma mechaa ya izu ọzọ", "A ga-emecha ya n'otu oge n'akwụsịghị", "AI nwere ike imechara gị ya", "Ị nwere ike iziga IRS ihe fọdụrụ n'email"], answer: 1, why: "A ga-emecha ngwa IRS n'ịntanetị n'otu oge n'akwụsịghị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmalite kọpọreshọn ahụ",
        questions: [
          { objective: "O1", q: "Kedu ọfịs na-emepụta kọpọreshọn na-anaghị achọ uru na California?", options: ["IRS", "California Secretary of State", "Attorney General", "Onye ode akwụkwọ kaụntị"], answer: 1, why: "A na-eziga articles of incorporation nye Secretary of State." },
          { objective: "O2", q: "Ebe nri (food pantry) na-ejere obodo niile ozi ga-eziga fọm articles kedu?", options: ["ARTS-MU (mutual benefit)", "ARTS-RE (okpukpe)", "ARTS-PB (public benefit)", "Fọm LLC azụmahịa"], answer: 2, why: "Nzukọ ọrụ ebere na-ejere ọha ozi na-ezigakarị articles public benefit." },
          { objective: "O3", q: "Weebụsaịtị na-ekwu na ọ ga-enwetara gị EIN maka $79. Gịnị ka ị ga-eme?", options: ["Kwụọ ya, ọ dị ngwa karị", "Rịọ ya n'efu na irs.gov", "Rịọ Attorney General ka ọ kwụọ ya", "Hapụ EIN"], answer: 1, why: "IRS kwuru na EIN anaghị efu ego; rịọ ya na irs.gov." },
          { objective: "O2", q: "Kedu mgbe Statement of Information (SI-100) mbụ ga-erute?", options: ["N'ime ụbọchị 90 mgbe i zigara articles", "Naanị mgbe i mechiri", "Afọ iri ọ bụla", "Ọ dịghị mgbe maka nzukọ na-anaghị achọ uru"], answer: 0, why: "Secretary of State kwuru n'ime ụbọchị 90, wee afọ abụọ ọ bụla." },
          { objective: "O3", q: "Kedu nke bụ ọrụ nzukọ bọọdụ mbụ?", options: ["Iziga 990-N", "Ịnabata bylaws na ịhọpụta ndị isi ọrụ", "Ịkwụ ụgwọ IRS", "Imegharị ndebanye aha na Attorney General"], answer: 1, why: "Nzukọ mbụ na-anabata bylaws, na-ahọpụta ndị isi ọrụ ma na-akwado ihe ndị bụ isi dị ka akaụntụ ụlọ akụ." }
        ]
      }
    },
    {
      name: "Isi 2: Enweghị ụtụ isi, ndebanye aha na ego ọ na-efu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịrịọ maka ọnọdụ 501(c)(3) nke gọọmentị etiti",
          minutes: 6,
          goal: "Họrọ n'etiti Form 1023 na Form 1023-EZ ma mara ụgwọ ya.",
          text: [
            "Iji bụrụ nzukọ ọrụ ebere 501(c)(3), ọtụtụ nzukọ na-arịọ IRS. E nwere fọm abụọ. Form 1023 bụ arịrịọ zuru ezu; ụgwọ ya (user fee) bụ $600 mgbe anyị lelere. Form 1023-EZ bụ fọm dị mkpụmkpụ maka obere nzukọ; ụgwọ ya bụ $275. A na-eziga ha abụọ n'ịntanetị na Pay.gov, a na-akwụkwa ụgwọ ahụ n'ebe ahụ mgbe ị na-eziga ya.",
            "Ọ bụghị onye ọ bụla nwere ike iji 1023-EZ. IRS nwere mpempe nlele ntozu (eligibility worksheet) na njedebe ntụziaka Form 1023-EZ. Ọ na-ele ihe dị ka ego ole ị na-atụ anya inweta na akụ gị. Jupụta mpempe ahụ n'eziokwu tupu ị họrọ.",
            "Chọọchị nwere iwu pụrụ iche: IRS na-emeso chọọchị n'ụzọ dị iche na nzukọ ọrụ ebere ndị ọzọ, ọtụtụ n'ime ha achọghị ịrịọ, ọ bụ ezie na ụfọdụ na-ahọrọ ịrịọ. Gụọ IRS Publication 1828 ma ọ bụ jụọ ọkachamara. Mgbe IRS kwadoro gị, ọ na-ezite determination letter. Debe ya ruo mgbe ebighị ebi: ndị na-enye onyinye, ndị na-enye grant na steeti ga-arịọ ya."
          ],
          steps: ["Meghee ntụziaka Form 1023-EZ na irs.gov ma jupụta mpempe nlele ntozu.", "Ọ bụrụ na i tozuru ma ọ dabara, hazie maka 1023-EZ; ma ọ bụghị, hazie maka Form 1023.", "Mepụta akaụntụ Pay.gov ma jupụta fọm ahụ n'ebe ahụ.", "Kwụọ ụgwọ e gosiri na peeji ụgwọ IRS.", "Chekwaa determination letter mgbe ọ bịara."],
          words: [["Form 1023", "arịrịọ IRS zuru ezu maka ọnọdụ 501(c)(3)."], ["Form 1023-EZ", "arịrịọ IRS dị mkpụmkpụ maka obere nzukọ gafere mpempe nlele ntozu."], ["User fee", "ụgwọ IRS na-ana iji lelee arịrịọ ahụ."], ["Determination letter", "akwụkwọ ozi IRS na-ekwu na nzukọ gị enweghị ụtụ isi."]],
          slides: [
            { title: "Fọm abụọ nke gọọmentị etiti", bullets: ["Form 1023: arịrịọ zuru ezu, ụgwọ $600", "Form 1023-EZ: fọm dị mkpụmkpụ, ụgwọ $275", "Ụgwọ mgbe e lelere, 27 Ọktoba 2026: kwado ya na irs.gov"] },
            { title: "Kedu nke?", bullets: ["Mee mpempe nlele ntozu dị na ntụziaka 1023-EZ", "I tozuru ma ọ dabara: 1023-EZ", "I tozughị: Form 1023"] },
            { title: "Otu esi eziga ya", bullets: ["N'ịntanetị na Pay.gov", "Kwụọ ụgwọ ahụ mgbe ị na-eziga ya"] },
            { title: "Chọọchị na akwụkwọ ozi ahụ", bullets: ["Chọọchị nwere iwu pụrụ iche: lee IRS Publication 1828", "Debe determination letter ruo mgbe ebighị ebi"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Meghee ntụziaka Form 1023-EZ na irs.gov ma gụọ mpempe nlele ntozu. Kpebie fọm nzukọ gị ga-eziga, wee tinye fọm ahụ, ụgwọ site na peeji ụgwọ IRS, na ụbọchị ị chọrọ iziga ya n'atụmatụ gị.",
          youCanNow: "ikpebi n'etiti Form 1023 na 1023-EZ, ịchọta ụgwọ ya ugbu a, na ịmara ebe a na-eziga ya.",
          quickCheck: [
            { objective: "O4", q: "Kedu mgbe a na-akwụ ụgwọ IRS maka Form 1023 ma ọ bụ 1023-EZ?", options: ["Otu afọ mgbe a kwadoro ya", "Site na cheque nye Secretary of State", "Na Pay.gov mgbe ị na-eziga ya", "Ọ dịghị mgbe"], answer: 2, why: "A na-eziga fọm abụọ ahụ n'ịntanetị na Pay.gov, a na-akwụkwa ụgwọ ahụ n'ebe ahụ mgbe ị na-eziga ya." },
            { objective: "O4", q: "IRS zitere gị determination letter. Gịnị ka ị ga-eji ya mee?", options: ["Tụfuo ya mgbe otu afọ gachara", "Nye onye na-enye onyinye naanị otu mbipụta ị nwere", "Tinye ya n'ime AI", "Debe ya ruo mgbe ebighị ebi, n'ihi na ndị na-enye onyinye, ndị na-enye grant na steeti ga-arịọ ya"], answer: 3, why: "Debe determination letter ruo mgbe ebighị ebi; ọtụtụ ga-arịọ ya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Enweghị ụtụ isi California na Registry of Charities",
          minutes: 5,
          goal: "Hazie enweghị ụtụ isi nke Franchise Tax Board na ndebanye aha na Attorney General.",
          text: [
            "Nkwado gọọmentị etiti n'onwe ya anaghị eme ka ị ghara ịkwụ ụtụ isi California. Ị ga-arịọkwa Franchise Tax Board (FTB). Form 3500 bụ arịrịọ California zuru ezu. Form 3500A bụ fọm dị mkpụmkpụ maka nzukọ nweworị determination letter IRS ha. Lelee ftb.ca.gov maka fọm, ntụziaka na ụgwọ ọ bụla ugbu a tupu i ziga ya, n'ihi na anyị enweghị ike ịkwado ụgwọ ahụ na peeji FTB maka ihe ọmụmụ a.",
            "Nzukọ ọrụ ebere na-ejide ma ọ bụ na-achọ ego maka ọrụ ebere na California na-edebanyekwa aha na Registry of Charities nke Attorney General. Ị na-edebanye aha n'ịntanetị site na Form CT-1 n'ime ụbọchị 30 mgbe i nwetara akụ ọrụ ebere na nke mbụ, dị ka onyinye mbụ gị. Ụgwọ ya bụ $50 mgbe anyị lelere. Ị na-ebugo articles gị, bylaws, determination letter IRS (ma ọ bụ EIN gị ma ọ bụrụ na ị nwebeghị ya) na Form 1023 ma ọ bụ 1023-EZ gị ma ọ bụrụ na i zigara otu.",
            "Ụfọdụ otu nwere ike ịghara ịdebanye aha na Registry. Ọ bụrụ na i chere na nke gị bụ otu n'ime ha (dịka ọmụmaatụ, nzukọ okpukpe), gụọ peeji Registry ma ọ bụ jụọ Registry tupu ị hapụ ya."
          ],
          steps: ["Mgbe akwụkwọ ozi IRS bịara, hazie Form 3500A na ftb.ca.gov (ma ọ bụ Form 3500 ma ọ bụrụ na ị na-arịọ n'enweghị ya).", "Dee ụbọchị i nwetara onyinye ma ọ bụ akụ ọrụ ebere ọzọ na nke mbụ.", "N'ime ụbọchị 30 site n'ụbọchị ahụ, debanye aha n'ịntanetị site na Form CT-1.", "Bugo articles, bylaws, akwụkwọ ozi IRS ma ọ bụ EIN, na 1023 ma ọ bụ 1023-EZ gị.", "Kwụọ ụgwọ Registry e gosiri na oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "ụlọ ọrụ ụtụ isi steeti California."], ["Form 3500A", "fọm enweghị ụtụ isi California dị mkpụmkpụ maka otu nweworị akwụkwọ ozi 501(c)(3) nke gọọmentị etiti."], ["Registry of Charities", "ọfịs Attorney General na-edebanye aha ma na-elekọta nzukọ ọrụ ebere na California."], ["CT-1", "fọm ndebanye aha mbụ nke Attorney General maka nzukọ ọrụ ebere."]],
          slides: [
            { title: "Enweghị ụtụ isi California (FTB)", bullets: ["Dị iche na nkwado IRS", "Form 3500: arịrịọ zuru ezu", "Form 3500A: ọ bụrụ na ị nweworị akwụkwọ ozi IRS", "Lelee ftb.ca.gov maka ụgwọ ugbu a"] },
            { title: "Registry of Charities (Attorney General)", bullets: ["Form CT-1, e zigara n'ịntanetị", "N'ime ụbọchị 30 mgbe i nwetara akụ ọrụ ebere na nke mbụ", "Ụgwọ: $50 mgbe e lelere, 27 Ọktoba 2026"] },
            { title: "Kwadebe ihe ndị a maka CT-1", bullets: ["Articles na bylaws", "Determination letter IRS, ma ọ bụ EIN ma ọ bụrụ na ọ bịabeghị", "Form 1023 ma ọ bụ 1023-EZ gị, ma ọ bụrụ na i zigara ya"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Tinye ahịrị abụọ n'atụmatụ gị: enweghị ụtụ isi FTB (aha fọm, \"lelee ụgwọ na ftb.ca.gov\", ụbọchị mgbe akwụkwọ ozi IRS bịachara) na CT-1 nke Attorney General ($50, ga-erute n'ime ụbọchị 30 mgbe i nwetara onyinye mbụ gị). Mee ndepụta akwụkwọ anọ ị ga-ebugo.",
          youCanNow: "ịhazi enweghị ụtụ isi California gị na ndebanye aha gị na Registry of Charities site na fọm, oge na akwụkwọ ziri ezi.",
          quickCheck: [
            { objective: "O5", q: "Kedu fọm bụ arịrịọ enweghị ụtụ isi California zuru ezu?", options: ["Form 3500", "Form CT-1", "Form SI-100", "Form RRF-1"], answer: 0, why: "Form 3500 bụ arịrịọ California zuru ezu; 3500A bụ nke dị mkpụmkpụ." },
            { objective: "O5", q: "Ozi chọọchị gị chere na o nwere ike ịghara ịdebanye aha na Registry. Gịnị ka ị ga-eme?", options: ["Hapụ ya n'eleleghị ya", "Gụọ peeji Registry ma ọ bụ jụọ Registry tupu ị hapụ ya", "Jụọ enyi gị", "Debanye aha na IRS kama"], answer: 1, why: "Lelee peeji Registry ma ọ bụ jụọ Registry tupu ị hapụ ndebanye aha." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịnọgide n'ọnọdụ ọma na atụmatụ ego mmalite gị",
          minutes: 6,
          goal: "Mee atụmatụ ego mmalite na kalenda akwụkwọ kwa afọ.",
          text: [
            "Ịmalite abụghị njedebe. Kwa afọ, ị na-eziga akwụkwọ nye IRS: obere otu nwere ego a na-enweta (gross receipts) na-adịkarị $50,000 ma ọ bụ na-erughị ya na-ezigakarị Form 990-N e-Postcard; ndị buru ibu na-eziga Form 990-EZ ma ọ bụ 990. Ọ bụrụ na i zigaghị ya afọ atọ n'usoro, IRS ga-ewepụ ohere enweghị ụtụ isi gị n'onwe ya.",
            "Kwa afọ, ị na-emegharịkwa ndebanye aha na Attorney General site na Form RRF-1. Ụgwọ ya dabere n'ego niile a na-enweta: mgbe anyị lelere ọ bụ $25 n'okpuru $50,000, $50 site na $50,000 ruo $100,000, na $75 site na $100,001 ruo $250,000, ọ na-arịkwa elu maka nzukọ ọrụ ebere buru ibu. Ọ na-erute ọnwa 4 na ụbọchị 15 mgbe afọ ego (fiscal year) gị gwụchara (May 15 maka afọ na-agwụ na December 31). Ị nwekwara Statement of Information afọ abụọ ọ bụla, na akwụkwọ kwa afọ nke California nye FTB: lelee ftb.ca.gov maka fọm dabara gị.",
            "Ụgwọ gọọmentị maka mmalite, dị ka e lelere: articles $30, Statement of Information $20, EIN n'efu, IRS $275 (1023-EZ) ma ọ bụ $600 (1023), Registry $50, gbakwunyere ụgwọ FTB ọ bụla. Nke ahụ bụ ihe dị ka $375 na 1023-EZ ma ọ bụ $700 na Form 1023, tupu ụgwọ FTB ọ bụla, ọrụ registered agent, ma ọ bụ ọka iwu. Jiri AI nyere aka dee tebụl atụmatụ ego ma ọ bụ ndepụta ncheta, mana lelee nọmba ọ bụla na peeji gọọmentị."
          ],
          steps: ["Depụta ụgwọ mmalite ọ bụla site na peeji gọọmentị.", "Gbakọọ ha maka fọm i họrọ (1023-EZ ma ọ bụ 1023).", "Tinye akwụkwọ kwa afọ: usoro IRS 990, RRF-1 nke Attorney General, akwụkwọ kwa afọ nke FTB.", "Tinye Statement of Information afọ abụọ ọ bụla.", "Tinye ụbọchị ọ bụla na kalenda a na-ekerịta, nwere ncheta abụọ."],
          words: [["Form 990-N", "e-Postcard nke IRS: obere ozi kwa afọ n'ịntanetị maka obere otu na-enweghị ụtụ isi."], ["RRF-1", "fọm mmegharị kwa afọ nke Attorney General maka nzukọ ọrụ ebere."], ["Afọ ego (fiscal year)", "oge ọnwa 12 nzukọ gị na-eji maka akwụkwọ ego ya, ọtụtụ mgbe site na Jenụwarị ruo Disemba."], ["Ọnọdụ ọma (good standing)", "na i mezuola akwụkwọ na ụgwọ niile a chọrọ."]],
          slides: [
            { title: "Kwa afọ", bullets: ["IRS: 990-N, 990-EZ ma ọ bụ 990", "Attorney General: RRF-1, ụgwọ dabere n'ego a na-enweta", "FTB: lelee ftb.ca.gov maka fọm kwa afọ gị"] },
            { title: "Kpachara anya", bullets: ["Ọ bụrụ na i zigaghị akwụkwọ IRS afọ 3 n'usoro: ị ga-atụfu enweghị ụtụ isi", "RRF-1 ga-erute ọnwa 4 na ụbọchị 15 mgbe afọ gwụchara", "SI-100 afọ abụọ ọ bụla"] },
            { title: "Ụgwọ mmalite (e lelere 27 Ọktoba 2026)", bullets: ["Articles $30 + SI-100 $20 + EIN n'efu", "IRS: $275 (1023-EZ) ma ọ bụ $600 (1023)", "Registry CT-1 $50, gbakwunyere ụgwọ FTB ọ bụla"] },
            { title: "Ngụkọta gị", bullets: ["Ihe dị ka $375 na 1023-EZ, $700 na 1023", "Tupu ụgwọ FTB, ọrụ agent ma ọ bụ ọka iwu", "Kwado ụgwọ ọ bụla na peeji gọọmentị"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ mmalite otu peeji gị. Mee tebụl nwere akwụkwọ ọ bụla n'usoro, ọfịs, fọm, ụgwọ site na peeji gọọmentị, na ụbọchị ị chọrọ iziga ya. Tinye akwụkwọ kwa afọ na ụbọchị ha ga-erute, ego mmalite niile gbakọtara, na njikọ gọọmentị maka ahịrị ọ bụla.",
          youCanNow: "ime atụmatụ mmalite zuru ezu maka nzukọ na-anaghị achọ uru na California, nwere ego ọ na-efu na kalenda kwa afọ na-eme ka nzukọ ahụ nọgide n'ọnọdụ ọma.",
          quickCheck: [
            { objective: "O6", q: "Kedu akwụkwọ kwa afọ na-aga nye Attorney General?", options: ["Form 990-N", "Form 1023", "Form RRF-1", "Form ARTS-PB"], answer: 2, why: "Kwa afọ, ị na-emegharị ndebanye aha na Attorney General site na Form RRF-1." },
            { objective: "O6", q: "AI dere tebụl atụmatụ ego mmalite gị. Gịnị ka ị ga-eji ụgwọ dị n'ime ya mee?", options: ["Kwere ha; AI maara ihe ọhụrụ", "Bulie ha elu", "Hapụ ebe ha tọgbọ chakoo", "Lelee nọmba ọ bụla na peeji gọọmentị"], answer: 3, why: "Jiri AI dee tebụl ahụ, mana lelee nọmba ọ bụla na peeji gọọmentị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Enweghị ụtụ isi, ndebanye aha na ego ọ na-efu",
        questions: [
          { objective: "O4", q: "Gịnị bụ ụgwọ IRS maka Form 1023 na Form 1023-EZ mgbe e lelere?", options: ["$100 na $50", "$600 na $275", "N'efu maka ha abụọ", "$1,000 na $500"], answer: 1, why: "Peeji ụgwọ IRS gosiri $600 maka Form 1023 na $275 maka Form 1023-EZ." },
          { objective: "O5", q: "Nzukọ gị nweworị determination letter IRS ya. Kedu fọm California e mere maka gị?", options: ["Form 3500A", "Form CT-1", "Form SI-100", "Form 990-N"], answer: 0, why: "Form 3500A bụ fọm FTB dị mkpụmkpụ maka otu nweworị akwụkwọ ozi gọọmentị etiti." },
          { objective: "O5", q: "I nwetara onyinye mbụ gị na March 1. Kedu mgbe ị ga-edebanye aha na Registry of Charities?", options: ["N'ime ụbọchị 30", "N'ime afọ 2", "Naanị mgbe i nwetara $50,000", "Ọ dịghị mgbe"], answer: 0, why: "Attorney General kwuru ka ị debanye aha n'ime ụbọchị 30 mgbe i nwetara akụ ọrụ ebere na nke mbụ." },
          { objective: "O6", q: "Gịnị na-eme ma ọ bụrụ na i zigaghị akwụkwọ kwa afọ nke IRS afọ atọ n'usoro?", options: ["Ọ dịghị ihe", "Ntaramahụhụ $10", "Ị ga-atụfu enweghị ụtụ isi n'onwe ya", "EIN gị ga-agbanwe"], answer: 2, why: "IRS na-ewepụ enweghị ụtụ isi n'onwe ya mgbe afọ atọ n'usoro gachara n'eziteghị akwụkwọ." },
          { objective: "O6", q: "Nzukọ ọrụ ebere nwere $40,000 n'ego niile a na-enweta na-emegharị ndebanye aha na Attorney General. Gịnị bụ ụgwọ RRF-1 mgbe e lelere?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "Usoro ụgwọ RRF-1 gosiri $25 maka ego niile a na-enweta n'okpuru $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịmalite Nzukọ Na-anaghị Achọ Uru na California, Gụnyere Ego Ọ Na-efu",
    questions: [
      { objective: "O1", q: "Ịghọ kọpọreshọn na-anaghị achọ uru na inweta enweghị ụtụ isi bụ:", options: ["Otu nzọụkwụ ahụ", "Naanị ihe gọọmentị etiti", "Naanị maka chọọchị", "Nzọụkwụ dị iche nwere ọfịs dị iche"], answer: 3, why: "Steeti na-emepụta kọpọreshọn ahụ; IRS na FTB na-enye enweghị ụtụ isi iche iche." },
      { objective: "O1", q: "Kedu nke na-ebu ụzọ?", options: ["Ịdebanye aha na Attorney General", "Iziga articles nye Secretary of State", "Iziga Form 3500A", "Iziga RRF-1"], answer: 1, why: "Kọpọreshọn ahụ ga-adị tupu akwụkwọ ndị ọzọ." },
      { objective: "O1", q: "Kedu ọfịs na-ahụ maka Registry of Charities?", options: ["IRS", "Franchise Tax Board", "California Attorney General", "Secretary of State"], answer: 2, why: "Registry of Charities bụ akụkụ nke ọfịs Attorney General." },
      { objective: "O2", q: "Ọtụtụ nzukọ ọrụ ebere na California na-eziga ụdị articles kedu?", options: ["Mutual benefit", "Kọpọreshọn azụmahịa nwere oke (stock)", "LLC", "Public benefit"], answer: 3, why: "Kọpọreshọn public benefit na-ejere ọha ozi, nke dabara ọtụtụ nzukọ ọrụ ebere." },
      { objective: "O2", q: "Gịnị bụ ụgwọ Secretary of State maka articles nzukọ na-anaghị achọ uru mgbe e lelere?", options: ["$30", "$300", "$600", "N'efu"], answer: 0, why: "Peeji fọm gosiri $30 maka ARTS-PB, ARTS-RE na ARTS-MU." },
      { objective: "O2", q: "Ebee ka ị nwere ike iziga articles n'ịntanetị?", options: ["Pay.gov", "irs.gov", "Ngwa AI ọ bụla", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online bụ saịtị Secretary of State maka iziga akwụkwọ n'ịntanetị." },
      { objective: "O2", q: "Ugboro ole ka a na-eziga Statement of Information (SI-100) mgbe nke mbụ gachara?", options: ["Ọnwa ọ bụla", "Afọ ọ bụla", "Afọ abụọ ọ bụla", "Ọ dịghị ọzọ"], answer: 2, why: "Secretary of State kwuru afọ abụọ ọ bụla." },
      { objective: "O3", q: "Ego ole ka IRS na-ana maka EIN?", options: ["$50", "$25", "Ọ dabere na steeti gị", "Ọ dịghị ego"], answer: 3, why: "IRS kwuru na ọ dịghị mgbe ị ga-akwụ ụgwọ maka EIN." },
      { objective: "O3", q: "Ebee ka ị ga-ede nọmba Social Security nke onye na-ahụ maka nzukọ ahụ maka EIN?", options: ["Naanị na saịtị gọọmentị IRS", "N'ime ngwa enyemaka AI ka o lelee ya", "N'email otu nye bọọdụ", "Na saịtị ọ bụla na-enye enyemaka"], answer: 0, why: "Nọmba nzuzo na-aga naanị na saịtị gọọmentị nke ụlọ ọrụ ahụ." },
      { objective: "O3", q: "Kedu mkpebi dịịrị nzukọ bọọdụ mbụ?", options: ["Iziga 990-N", "Ịnabata iwu esemokwu mmasị", "Ịkwụ RRF-1", "Inweta akwụkwọ ozi IRS"], answer: 1, why: "Nzukọ mbụ na-anabata bylaws, iwu ndị ọzọ ma na-ahọpụta ndị isi ọrụ." },
      { objective: "O4", q: "Kedu otu ị ga-esi kpebie ma ị nwere ike iji Form 1023-EZ?", options: ["Jụọ weebụsaịtị ọ bụla", "Họrọ nke ọ bụla dị ọnụ ala", "Attorney General na-ekpebi", "Jupụta mpempe nlele ntozu IRS dị na ntụziaka 1023-EZ"], answer: 3, why: "Mpempe nlele ntozu IRS na-ekpebi onye nwere ike iji fọm dị mkpụmkpụ ahụ." },
      { objective: "O4", q: "Ebee ka a na-eziga Form 1023 na 1023-EZ?", options: ["Site na fax gaa Sacramento", "N'ọfịs kaụntị", "N'ịntanetị na Pay.gov", "Na bizfile Online"], answer: 2, why: "IRS kwuru na a na-ejupụta ma kwụọ ụgwọ ha abụọ na Pay.gov." },
      { objective: "O4", q: "Gịnị ka determination letter IRS na-egosi?", options: ["Na a kwadoro aha kọpọreshọn gị", "Na nzukọ gị enweghị ụtụ isi n'okpuru iwu gọọmentị etiti", "Na i kwụọla ụgwọ Registry gị", "Nọmba EIN gị"], answer: 1, why: "Determination letter na-akwado ọnọdụ enweghị ụtụ isi nke gọọmentị etiti." },
      { objective: "O4", q: "Chọọchị chọrọ ịmara ma ọ ga-eziga Form 1023. Ebee ka ọ ga-ebu ụzọ lee?", options: ["IRS Publication 1828 ma ọ bụ ọkachamara", "Ozi na soshal midia", "DMV", "Form SI-100"], answer: 0, why: "Chọọchị nwere iwu IRS pụrụ iche e kọwara na Publication 1828." },
      { objective: "O5", q: "Mgbe gọọmentị etiti kwadoro ya, nzukọ na-anaghị achọ uru na California enweghị ụtụ isi steeti:", options: ["N'onwe ya ozugbo", "Naanị mgbe FTB kwadoro ya (Form 3500 ma ọ bụ 3500A)", "Naanị ma ọ bụrụ chọọchị", "Ọ dịghị mgbe"], answer: 1, why: "Enweghị ụtụ isi California bụ arịrịọ dị iche nye Franchise Tax Board." },
      { objective: "O5", q: "Kedu akwụkwọ ị na-ebugo maka CT-1 nke Attorney General?", options: ["Articles, bylaws, akwụkwọ ozi IRS ma ọ bụ EIN, na 1023 gị ma ọ bụrụ na i zigara ya", "Naanị foto ID", "Aha na adreesị ndị na-enye onyinye", "Okwuntughe ụlọ akụ gị"], answer: 0, why: "Registry na-arịọ akwụkwọ ntọala, bylaws, akwụkwọ ozi IRS ma ọ bụ EIN na arịrịọ enweghị ụtụ isi." },
      { objective: "O5", q: "Gịnị bụ ụgwọ ndebanye aha mbụ nke Registry mgbe e lelere?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "Peeji ndebanye aha mbụ gosiri ụgwọ $50." },
      { objective: "O6", q: "Ego obere nzukọ ọrụ ebere na-enweta (gross receipts) na-adịkarị $50,000 ma ọ bụ na-erughị ya. Kedu akwụkwọ IRS kwa afọ ọ na-ejikarị?", options: ["Form 1023", "Form 990-N e-Postcard", "Form CT-1", "Form ARTS-PB"], answer: 1, why: "IRS na-ekwe ka ọtụtụ obere otu nọ n'okpuru ego ahụ ziga 990-N." },
      { objective: "O6", q: "Afọ ego gị na-agwụ na December 31. Kedu mgbe RRF-1 na-erutekarị?", options: ["January 1", "March 1", "May 15", "December 31"], answer: 2, why: "Ọ na-erute ọnwa 4 na ụbọchị 15 mgbe afọ gwụchara, nke bụ May 15." },
      { objective: "O6", q: "Site n'iji ụgwọ e lelere, ihe dị ka ego ole bụ ụgwọ gọọmentị maka mmalite na Form 1023-EZ, tupu ụgwọ FTB ọ bụla?", options: ["Ihe dị ka $375", "Ihe dị ka $50", "Ihe dị ka $1,500", "Ọ dịghị ego"], answer: 0, why: "$30 articles + $20 SI-100 + $275 1023-EZ + $50 CT-1 = $375, EIN bụkwa n'efu." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 7, 10, 14, 17, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Akwụkwọ n'usoro", objective: "O1", notYet: "Otu akwụkwọ adịghị ma ọ bụ ọ dịghị n'usoro.", meets: "E depụtara akwụkwọ mmalite ọ bụla n'usoro ziri ezi ya na ọfịs ya.", exceeds: "Na-ekwu ihe mere usoro ahụ ji dị mkpa maka opekata mpe nzọụkwụ abụọ." },
      { name: "Fọm ziri ezi", objective: "O2", notYet: "A kpọrọ aha fọm ezighi ezi, dị ka articles mutual benefit maka nzukọ ọrụ ebere.", meets: "Akwụkwọ ọ bụla na-akpọ aha fọm ziri ezi, gụnyere articles, SI-100, 1023 ma ọ bụ 1023-EZ, 3500 ma ọ bụ 3500A, na CT-1.", exceeds: "Na-akọwa nhọrọ n'etiti 1023 na 1023-EZ site n'iji mpempe nlele ntozu." },
      { name: "Ụgwọ gọọmentị na njikọ", objective: "O6", notYet: "E chepụtara otu ụgwọ ma ọ bụ o nweghị njikọ.", meets: "Ụgwọ ọ bụla si na peeji gọọmentị, nwere njikọ, e gbakọọkwa ego mmalite niile.", exceeds: "Na-edekwa ụbọchị e lelere ụgwọ ọ bụla." },
      { name: "Ụbọchị a haziri", objective: "O5", notYet: "Enweghị ụbọchị a haziri maka iziga akwụkwọ, ma ọ bụ e gafere oge ụbọchị 30 nke Registry na ụbọchị 90 nke SI-100.", meets: "Ụbọchị a haziri maka akwụkwọ ọ bụla nke na-emezu oge niile.", exceeds: "Na-akpọ aha onye na bọọdụ na-ahụ maka akwụkwọ ọ bụla." },
      { name: "Kalenda kwa afọ", objective: "O6", notYet: "Akwụkwọ kwa afọ adịghị.", meets: "Akwụkwọ IRS kwa afọ, RRF-1, Statement of Information afọ abụọ ọ bụla na akwụkwọ FTB, ya na ụbọchị ha ga-erute.", exceeds: "E tinyere ụbọchị ha ga-erute dị ka ncheta kalenda maka bọọdụ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị malitere nzukọ zigara articles of incorporation n'ime ụbọchị 90 (nnyocha nsochi)",
      "Nzukọ nwetara determination letter IRS ma debanye aha na Registry of Charities",
      "Nzukọ ka nọ n'ọnọdụ ọma otu afọ mgbe e mesịrị, ma na-eziga akwụkwọ kwa afọ n'oge"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị",
      "Njikọ gaa na peeji gọọmentị: Secretary of State, IRS, Pay.gov, Franchise Tax Board na Registry of Charities nke Attorney General",
      "Spreadsheet ma ọ bụ akwụkwọ maka tebụl atụmatụ mmalite",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge ilele ụgwọ na peeji gọọmentị"
    ],
    facilitatorNotes: [
      "Mee ka ndị na-amụ ihe lelee ụgwọ ọ bụla na peeji gọọmentị n'oge nnọkọ ahụ, n'ihi na ụgwọ na-agbanwe.",
      "Kpọọ ọka iwu nzukọ na-anaghị achọ uru ma ọ bụ onye ọrụ afọ ofufo site n'ebe enyemaka ka ọ zaa ajụjụ gbasara okwu articles na iwu chọọchị.",
      "Chetara ndị na-amụ ihe ka ha ghara ide nọmba Social Security ma ọ bụ ITIN n'ime ngwa AI ma ọ bụ email mgbe ọ bụla.",
      "Ndị na-amụ ihe na-enweghị ezi nzukọ nwere ike ime atụmatụ omume maka nzukọ ọrụ ebere ọmụmaatụ.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
