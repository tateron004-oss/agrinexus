"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const SOS_LLC = { name: "California Secretary of State: Limited Liability Companies (fọm na ụgwọ)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "California Secretary of State: Corporations (fọm na ụgwọ)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: Limited liability company (LLC)", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: Corporations", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: Ntụziaka maka ụdị nwe azụmahịa a na-ahụkarị (FTB 1123)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: Ikike na akwụkwọ ikike (Permits and Licenses)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: Otu esi enweta seller's permit (ajụjụ a na-ajụkarị)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: Nweta Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: Enyemaka California maka ikike azụmahịa (permits)", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: Nzọụkwụ 1, Debanye aha dị ka onye were ndị ọrụ", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "Los Angeles County Clerk: Ihe a chọrọ maka Fictitious Business Name (ọmụmaatụ otu county)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "California Office of the Small Business Advocate: Hazie azụmahịa gị", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-ig",
  lang: "ig",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Ịhazi Obere Azụmahịa na California, Gụnyere Ọnụ Ahịa",
  skills: "Ịhọrọ ụdị azụmahịa, Ịdebanye aha na steeti na county, Inweta EIN na seller's permit, Ịchọta ikike obodo, Ime mpempe akwụkwọ ọnụ ahịa mmalite na ụbọchị njedebe",
  outcome: "ime atụmatụ ịhazi azụmahịa nke otu peeji maka azụmahịa gị na California: ụdị azụmahịa ị ga-eji, ndebanye aha na ikike ọ bụla ị chọrọ n'usoro kwesịrị ekwesị, ọfịs gọọmentị maka nke ọ bụla, ego nke ọ bụla na-efu (ma ọ bụ ebe ị ga-achọ ya), na ụbọchị njedebe ị na-agaghị agafe.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-amalite obere azụmahịa na California: ụgbọala na-ere nri (food truck), ụlọ ntutu isi, ọrụ nhicha, obere ụlọ ahịa, ụlọ ahịa n'ịntanetị ma ọ bụ ebe a na-eme achịcha n'ụlọ. Ọtụtụ ụmụ akwụkwọ anyị bụ ndị na-enwe azụmahịa nke mbụ na ndị si n'obodo pere mpe, ọtụtụ na-emekwa ya n'enweghị ọka iwu.",
    "Ị ga-amụta nzọụkwụ ịhazi n'usoro: họrọ ụdị azụmahịa, debanye aha ya, nweta nọmba ụtụ gọọmentị etiti n'efu, nweta seller's permit ma ọ bụrụ na ị na-ere ngwaahịa, chọta ikike obodo na county gị, ma kwadebe maka ụtụ steeti na akwụkwọ a na-edenye kwa afọ. E lelere ụgwọ steeti ọ bụla n'ihe ọmụmụ a na peeji gọọmentị, nkuzi ọ bụla na-edepụtakwa peeji ndị ahụ.",
    "Ụgwọ na iwu na-agbanwe. Tupu i kwụọ ego ọ bụla, meghee peeji gọọmentị e depụtara na nkuzi ahụ ma lelee ọnụ ọgụgụ ugbu a. Ụgwọ obodo na county dị iche n'ebe ọ bụla, ya mere ihe ọmụmụ a na-egosi gị ebe ị ga-achọ ha kama ịkọ nkọ. Maka ọnọdụ nke gị, onye ndụmọdụ SCORE n'efu, Small Business Development Center (SBDC) ma ọ bụ ọkachamara n'ụtụ nwere ike inyere gị aka.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ nkuzi ahụ, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\". E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ọrụ ndị ahụ na-agbakọta ghọọ atụmatụ ịhazi nke gị."
  ],
  finalTask: "Mee atụmatụ ịhazi otu peeji maka azụmahịa gị nwere kọlụm ise: Nzọụkwụ, Ọfịs (ya na weebụsaịtị gọọmentị), Ego (ma ọ bụ \"chọọ ya na ...\"), Ụbọchị njedebe, Emechaala. Tinye ụdị azụmahịa gị, ndebanye aha, EIN, seller's permit (ma ọ bụ ihe mere ị chọghị ya), akwụkwọ ikike azụmahịa obodo, ikike pụrụ iche ọ bụla CalGold depụtara maka ụdị azụmahịa gị, na ụtụ $800 kwa afọ na Statement of Information ma ọ bụrụ na i hiwe LLC ma ọ bụ corporation.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-amalite obere azụmahịa na California, dị ka food truck, ụlọ ntutu isi, ọrụ nhicha, obere ụlọ ahịa, ụlọ ahịa n'ịntanetị ma ọ bụ ebe a na-eme achịcha n'ụlọ. Ọtụtụ bụ ndị na-enwe azụmahịa nke mbụ na ndị si n'obodo pere mpe na-eme ya n'enweghị ọka iwu.",
    startingPoint: "Ha nwere echiche azụmahịa ma nwee ike iji ekwentị ma ọ bụ kọmputa leta weebụsaịtị. Ọtụtụ amaghị nzọụkwụ ịhazi, ọfịs na-elekọta nke ọ bụla, ụgwọ steeti, ma ọ bụ akwụkwọ na ụtụ kwa afọ ndị na-eso ụdị azụmahịa ọ bụla.",
    gap: "Ịhapụ ndebanye aha, ikike ma ọ bụ akwụkwọ kwa afọ nwere ike iweta ntaramahụhụ na ụgwọ mmebi iwu, weebụsaịtị adịgboroja na-akwụ ụgwọ na-anarakwa ego karịrị akarị maka ọrụ n'efu. Ndị na-amụ ihe chọrọ atụmatụ nwere nzọụkwụ ọ bụla n'usoro, ọfịs gọọmentị, ego na ụbọchị njedebe, ka ha malite n'iwu ma kwadebe ego nke ọma.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ịntanetị iji meghee peeji .gov gọọmentị",
      "Oge: nkuzi dị ihe dị ka nkeji 5 nke dabara n'oge ị na-arụ ma ọ bụ na-eme atụmatụ azụmahịa",
      "Ụgwọ na iwu na-agbanwe, ụgwọ obodo na county dịkwa iche; ndị na-amụ ihe na-elele peeji gọọmentị ọ bụla tupu ha akwụọ ụgwọ",
      "Ọ bụghị ndụmọdụ iwu ma ọ bụ ụtụ; nzuzo: nọmba Social Security na-aga naanị n'ezi fọm IRS"
    ],
    prerequisites: "Ọ dịghị. \"Mmalite AI maka Obere Azụmahịa\" na-enye aka ma ọ bụrụ na ndị na-amụ ihe chọrọ iji AI hazie atụmatụ ahụ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị echiche azụmahịa gị, ndị nwe ya na ihe egwu ya", action: "ịhọrọ ụdị azụmahịa ma depụta ego ọ na-efu iji hiwe ya", standard: "nwere otu ihe mere i ji họrọ ya na ụgwọ e lelere na peeji Secretary of State" },
    { id: "O2", condition: "Mgbe e nyere gị aha azụmahịa gị na ụdị ya", action: "ịchọpụta otu esi edebanye aha azụmahịa gị", standard: "ya na ọfịs kwesịrị ekwesị, peeji ụgwọ ya na iwu mbipụta n'akwụkwọ akụkọ e dere n'atụmatụ gị" },
    { id: "O3", condition: "Mgbe e nyere gị ụdị azụmahịa gị", action: "ikpebi ma ị chọrọ seller's permit ma depụta otu esi enweta EIN n'efu", standard: "na-akpọ IRS na CDTFA dị ka ọfịs ndị ahụ ma ghara iji ọrụ EIN a na-akwụ ụgwọ" },
    { id: "O4", condition: "Site n'iji CalGold na weebụsaịtị obodo gị", action: "ịdepụta ikike obodo azụmahịa gị chọrọ", standard: "ya na weebụsaịtị ụlọ ọrụ gọọmentị ọ bụla na ụgwọ ma ọ bụ ebe ị ga-achọ ya" },
    { id: "O5", condition: "Mgbe e nyere gị ụdị azụmahịa gị na atụmatụ iwe ndị ọrụ", action: "ịdepụta ego steeti kwa afọ na ụbọchị njedebe", standard: "gụnyere ụtụ $800, Statement of Information na ndebanye aha EDD ebe ha metụtara, nke ọ bụla e lelere na peeji gọọmentị" },
    { id: "O6", condition: "Mgbe e nyere gị nzọụkwụ niile si n'ihe ọmụmụ a", action: "ime atụmatụ ịhazi otu peeji nwere nzọụkwụ n'usoro, ọfịs, ego na ụbọchị njedebe", standard: "ebe e lelere ego ọ bụla na peeji gọọmentị ma ọ bụ e dee \"chọọ ya na\" na ebe ahụ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhọrọ na ịdebanye aha azụmahịa gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhọrọ ụdị azụmahịa",
          minutes: 6,
          goal: "Họrọ ụdị azụmahịa dabara azụmahịa gị taa, ma mara ego ọ na-efu iji hiwe ya.",
          text: [
            "Ụdị azụmahịa gị (business structure) bụ ọdịdị iwu nke azụmahịa gị. Nhọrọ ndị a na-ahụkarị maka obere azụmahịa bụ sole proprietorship (otu onye nwe ya), general partnership (ndị mmekọ), limited liability company (LLC) na corporation.",
            "Sole proprietorship bụ otu onye na-azụ ahịa. Ị naghị edenye akwụkwọ mmalite na California Secretary of State, ya mere ọ dịghị ụgwọ mmalite steeti. Mana n'anya iwu, gị na azụmahịa ahụ bụ otu: ọ bụrụ na azụmahịa ahụ ji ụgwọ ma ọ bụ e kpee ya ikpe, ihe onwunwe gị nwere ike ịnọ n'ihe egwu. Partnership bụ otu echiche ahụ, mana ndị nwe ya dị abụọ ma ọ bụ karịa.",
            "LLC ma ọ bụ corporation bụ otu iwu kewapụrụ onwe ya. Ị na-ahiwe ya site n'ịdenye akwụkwọ na California Secretary of State. Secretary of State depụtara ụgwọ maka LLC Articles of Organization (Fọm LLC-1) dị ka $70, maka Articles of Incorporation nke general stock corporation (Fọm ARTS-GS) dị ka $100. LLC ma ọ bụ corporation nwere ike inye aka chebe ihe onwunwe gị pụọ n'ụgwọ azụmahịa, mana ọ na-efu ego karịa kwa afọ (Nkuzi 6).",
            "Ọ dịghị otu azịza ziri ezi. Ọrụ nhicha otu onye na-amalite ọhụrụ nwere ike ịmalite dị ka sole proprietor; ụlọ oriri nwere ụlọ mgbazinye, ndị ọrụ na ihe egwu ka ukwuu na-ahiwekarị LLC ma ọ bụ corporation. Kparịta ya na onye ndụmọdụ SBDC n'efu, onye ndụmọdụ SCORE ma ọ bụ ọkachamara n'ụtụ tupu i kpebie."
          ],
          steps: ["Dee onye nwe azụmahịa ahụ na ihe egwu ole o nwere (ụlọ mgbazinye, ndị ọrụ, ndị ahịa na-abịa ebe ahụ, mbinye ego).", "Gụọ FTB Guide to Common Forms of Ownership.", "Tụnyere ego kwa afọ, ọ bụghị naanị ụgwọ mmalite.", "Họrọ ụdị azụmahịa, ma jụọ onye ndụmọdụ ma ọ bụrụ na ị maghị nke ọma."],
          words: [["Ụdị azụmahịa (business structure)", "ọdịdị iwu nke azụmahịa, dị ka sole proprietorship, LLC ma ọ bụ corporation."], ["Sole proprietorship", "azụmahịa otu onye nwe nke na-ekewapụghị onwe ya n'onye nwe ya n'iwu."], ["LLC", "limited liability company: azụmahịa e debanyere aha na steeti nke kewapụrụ onwe ya n'ndị nwe ya."], ["Liability", "ịbụ onye iwu na-ejide maka ụgwọ ma ọ bụ mmerụ."]],
          slides: [
            { title: "Ụdị azụmahịa anọ a na-ahụkarị", bullets: ["Sole proprietorship (otu onye nwe ya)", "General partnership (ndị nwe ya dị abụọ ma ọ bụ karịa)", "Limited liability company (LLC)", "Corporation"] },
            { title: "Sole proprietor ma ọ bụ partnership", bullets: ["Ọ dịghị akwụkwọ mmalite na Secretary of State", "Gị na azụmahịa ahụ bụ otu n'iwu", "Ihe onwunwe gị nwere ike ịnọ n'ihe egwu"] },
            { title: "LLC ma ọ bụ corporation", bullets: ["A na-ahiwe ya site n'ịdenye akwụkwọ na Secretary of State", "LLC-1: $70. ARTS-GS stock corporation: $100", "Ọ kewapụrụ onwe ya n'ebe ị nọ, mana ọ na-efu ego karịa kwa afọ"] },
            { title: "Ịhọrọ", bullets: ["Chee banyere ihe egwu: ụlọ mgbazinye, ndị ọrụ, ndị ahịa, mbinye ego", "Tụnyere ego kwa afọ, ọ bụghị naanị ụgwọ mmalite", "Jụọ onye ndụmọdụ SBDC ma ọ bụ SCORE n'efu"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Malite atụmatụ ịhazi gị. N'elu, dee echiche azụmahịa gị, onye nwe ya, na ihe egwu ya kachasị ukwuu. Wee dee ụdị azụmahịa ị ga-ahọrọ taa na otu ihe mere.",
          youCanNow: "ịkpọ aha ụdị azụmahịa a na-ahụkarị, ikwu ego ịhiwe LLC ma ọ bụ corporation na-efu na steeti, na ịhọrọ otu maka azụmahịa gị.",
          quickCheck: [
            { objective: "O1", q: "Kedu ụdị azụmahịa na-adịghị mkpa ịdenye akwụkwọ mmalite na California Secretary of State?", options: ["LLC", "Corporation", "Sole proprietorship", "Nonprofit corporation"], answer: 2, why: "Sole proprietorship anaghị edenye akwụkwọ mmalite na Secretary of State." },
            { objective: "O1", q: "Ị chọrọ ịhiwe LLC, ị hụkwara ụgwọ n'ịntanetị. Gịnị ka ị ga-eme tupu i kwụọ ụgwọ?", options: ["Lelee ụgwọ ugbu a na peeji gọọmentị nke Secretary of State", "Kwụọ ụgwọ na weebụsaịtị mbụ pụtara", "Jụọ enyi gị ego o kwụrụ ọtụtụ afọ gara aga", "Jiri ihe ọ bụla AI kwuru"], answer: 0, why: "Ụgwọ na-agbanwe, ya mere ị na-elele peeji gọọmentị tupu i kwụọ ụgwọ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ịgụ aha na ịdebanye aha azụmahịa gị",
          minutes: 5,
          goal: "Debanye aha azụmahịa gị n'ụzọ kwesịrị ụdị azụmahịa gị.",
          text: [
            "LLC ma ọ bụ corporation na-edebanye aha ya mgbe ọ na-edenye akwụkwọ mmalite ya na Secretary of State. Ị nwere ike ide ya n'ịntanetị na bizfile Online (bizfileonline.sos.ca.gov). Buru ụzọ chọọ aha ahụ n'ebe ahụ ka ị hụ ma azụmahịa ọzọ ejirila ya.",
            "Ọ bụrụ na ị na-azụ ahịa n'aha na-abụghị aha iwu gị, ị ga-edenye Fictitious Business Name (FBN) statement, a na-akpọkwa ya DBA (\"doing business as\", ya bụ \"na-azụ ahịa dị ka\"), na county clerk nke county ebe azụmahịa gị dị. Dịka ọmụmaatụ, ọ bụrụ na Maria Lopez na-agba \"Sunrise Tamales\", ọ ga-edenye FBN. LLC na-eji aha dị iche n'aha e debanyere ya na-edenyekwa FBN.",
            "County ọ bụla na-esetịpụ ụgwọ FBN nke ya, ya mere chọọ ya na weebụsaịtị county clerk gị. Counties na-achọkwa ka i bipụta FBN ahụ n'akwụkwọ akụkọ obodo otu ugboro n'izu ruo izu anọ, na-amalitekarị n'ime ụbọchị 30 i denyere ya, wee denye ihe akaebe na e bipụtara ya. Lelee iwu kpọmkwem nke county gị."
          ],
          steps: ["Chọọ aha ị chọrọ na bizfile Online.", "LLC ma ọ bụ corporation: denye akwụkwọ mmalite na bizfile Online.", "Ọ bụrụ na ị na-eji aha na-abụghị aha iwu gị: denye FBN na county clerk gị.", "Bipụta FBN n'akwụkwọ akụkọ otu county gị chọrọ, ma denye ihe akaebe ya.", "Dee nzọụkwụ ọ bụla, ọfịs ya na ego ya n'atụmatụ gị."],
          words: [["Fictitious Business Name (FBN)", "aha azụmahịa na-abụghị aha iwu nke onye nwe ya; a na-akpọkwa ya DBA."], ["DBA", "\"doing business as\": aha azụmahịa na-eji n'ihu ọha."], ["County clerk", "ọfịs county na-edenye FBN na akwụkwọ ọha ndị ọzọ."]],
          slides: [
            { title: "LLC ma ọ bụ corporation", bullets: ["A na-edebanye aha ya mgbe ị hiwere ya", "Denye ya n'ịntanetị na bizfileonline.sos.ca.gov", "Buru ụzọ chọọ aha ahụ"] },
            { title: "Fictitious Business Name (DBA)", bullets: ["Maka aha na-abụghị aha iwu gị", "A na-edenye ya na county clerk gị", "Ọmụmaatụ: Maria Lopez na-azụ ahịa dị ka Sunrise Tamales"] },
            { title: "Ụgwọ FBN na mbipụta", bullets: ["County ọ bụla na-esetịpụ ụgwọ ya: lelee weebụsaịtị ya", "Bipụta ya n'akwụkwọ akụkọ obodo otu ugboro n'izu ruo izu 4", "Wee denye ihe akaebe; lelee ụbọchị njedebe county gị"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Chọọ aha azụmahịa gị na bizfile Online. Wee chọta peeji FBN nke county clerk gị ma dee ụgwọ ndenye na iwu mbipụta n'atụmatụ gị.",
          youCanNow: "ilele ma aha azụmahịa ọ ka dị n'efu, na ikwu mgbe ị chọrọ Fictitious Business Name na ebe ị ga-edenye ya.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ DBA?", options: ["Fọm ụtụ", "Akwụkwọ ikike azụmahịa", "Ụdị LLC", "Aha azụmahịa na-eji n'ihu ọha, ma ọ bụrụ na ọ bụghị aha iwu nke onye nwe ya"], answer: 3, why: "DBA bụ aha ọha nke azụmahịa dị iche n'aha iwu nke onye nwe ya." },
            { objective: "O2", q: "I denyere Fictitious Business Name na county gị. Gịnị ka ị ga-eme ọzọ?", options: ["Ọ dịghị ihe ọzọ", "Bipụta ya n'akwụkwọ akụkọ obodo otu county gị chọrọ", "Denye ya ọzọ na IRS", "Chere afọ ise"], answer: 1, why: "Ọtụtụ counties nke California na-achọ ka i bipụta FBN n'akwụkwọ akụkọ obodo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Inweta EIN gị n'efu na seller's permit",
          minutes: 5,
          goal: "Tinye akwụkwọ maka EIN site na IRS ma kpebie ma ị chọrọ seller's permit nke California.",
          text: [
            "EIN (Employer Identification Number) bụ nọmba ụtụ gọọmentị etiti (federal) nke azụmahịa gị. LLC, corporation, partnership na azụmahịa ọ bụla nwere ndị ọrụ chọrọ ya; sole proprietor na-enweghị ndị ọrụ nwere ike iji nọmba nke ya, mana ọ na-enwetakarị EIN iji kewaa ihe azụmahịa na ihe onwe ya. IRS kwuru na ị gaghị akwụ ụgwọ ọ bụla maka EIN. Tinye akwụkwọ na irs.gov, ma kpachara anya maka weebụsaịtị na-ana ego maka ya.",
            "Seller's permit (ikike ire ahịa) na-esi na California Department of Tax and Fee Administration (CDTFA). Ọ bụrụ na ị na-ere ma ọ bụ na-agbazinye ngwaahịa a na-atụkarị ụtụ na California, ị chọrọ ya, ị ga-egosikwa ya n'ebe ị na-azụ ahịa. Ụlọ ahịa, ụlọ ahịa uwe, food truck na ụlọ oriri na-achọkarị ya. Naanị ọrụ, dị ka nhicha ụlọ ma ọ bụ nkuzi, anaghị achọkarị ya, mana lelee.",
            "CDTFA kwuru na ọ dịghị ụgwọ maka seller's permit, mana ọ nwere ike ịrịọ ego nchekwa (security deposit), ọ na-ekpebikwa ego ole mgbe ị tinyere akwụkwọ. Ọ bụrụ na ị na-ere n'otu ebe ụbọchị 90 ma ọ bụ na-erughị, dị ka ebe ire ahịa oge ụfọdụ, ị nwere ike ịchọ temporary seller's permit (nke nwa oge) kama. Debanye aha n'ịntanetị site na CDTFA."
          ],
          steps: ["Gaa na irs.gov ma chọọ \"apply for an EIN\".", "Tinye akwụkwọ n'ịntanetị n'otu nnọkọ ma chekwaa akwụkwọ ozi nkwenye.", "Kpebie ma ị na-ere ngwaahịa a na-atụ ụtụ.", "Ọ bụrụ ee, debanye aha maka seller's permit na cdtfa.ca.gov.", "Gosi ikike ahụ n'ebe ị na-azụ ahịa."],
          words: [["EIN", "Employer Identification Number: nọmba ụtụ gọọmentị etiti n'efu maka azụmahịa, site na IRS."], ["Seller's permit", "ikike California, site na CDTFA, iji ree ngwaahịa a na-atụ ụtụ ma nakọta ụtụ ire ahịa (sales tax)."], ["CDTFA", "California Department of Tax and Fee Administration."], ["Ego nchekwa (security deposit)", "ego CDTFA nwere ike ijide ma ọ bụrụ na a kwụghị sales tax n'ọdịnihu."]],
          slides: [
            { title: "EIN: nọmba ụtụ azụmahịa gị", bullets: ["Site na IRS, na irs.gov", "N'efu mgbe niile: IRS anaghị ana ego maka EIN", "Kpachara anya maka saịtị na-ana ego"] },
            { title: "Seller's permit: onye chọrọ ya", bullets: ["Ire ma ọ bụ ịgbazinye ngwaahịa a na-atụ ụtụ na California", "Ụlọ ahịa, food truck, ụlọ oriri na-achọkarị ya", "Naanị ọrụ anaghị achọkarị ya: lelee"] },
            { title: "Seller's permit: ego", bullets: ["Ọ dịghị ụgwọ itinye akwụkwọ (CDTFA)", "CDTFA nwere ike ịrịọ ego nchekwa", "Ị na-ere ụbọchị 90 ma ọ bụ na-erughị? Jụọ maka ikike nwa oge"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Tinye ahịrị abụọ n'atụmatụ gị: EIN (IRS, n'efu, tinye akwụkwọ na irs.gov) na seller's permit (CDTFA, enweghị ụgwọ, ego nchekwa nwere ike ịdị) ma ọ bụ ndetu na-ekwu ihe mere ị chọghị ya. Edela nọmba Social Security gị n'ebe ọ bụla ma ọ bụghị n'ezi fọm IRS.",
          youCanNow: "itinye akwụkwọ maka EIN n'efu na saịtị gọọmentị IRS na ikpebi ma azụmahịa gị chọrọ seller's permit.",
          quickCheck: [
            { objective: "O3", q: "Kedu ụlọ ọrụ gọọmentị na-enye seller's permit nke California?", options: ["IRS", "County clerk gị", "CDTFA", "Secretary of State"], answer: 2, why: "California Department of Tax and Fee Administration na-enye seller's permit." },
            { objective: "O3", q: "Ị na-ezube ire ngwaahịa naanị n'ahịa oge ezumike ruo izu ole na ole. Gịnị ka ị ga-eme?", options: ["Jụọ CDTFA maka temporary seller's permit", "Hapụ ikike n'ihi na ọ dị mkpụmkpụ", "Nweta EIN kama", "Kwụọ saịtị nkeonwe ka o nye gị ikike"], answer: 0, why: "Ndị na-ere ahịa nwa oge nwere ike ịjụ CDTFA maka temporary seller's permit." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhọrọ na ịdebanye aha azụmahịa gị",
        questions: [
          { objective: "O1", q: "Kedu ụgwọ Secretary of State depụtara maka LLC Articles of Organization (Fọm LLC-1)?", options: ["$800", "$70", "$20", "N'efu"], answer: 1, why: "Peeji fọm LLC nke Secretary of State depụtara Fọm LLC-1 dị ka $70." },
          { objective: "O1", q: "Kevin na-arụ ọrụ nlekọta ahịhịa (lawn care) dị ka sole proprietor. Kedu nke bụ eziokwu?", options: ["Ọ ga-akwụ Secretary of State $100 iji hiwe ya", "O nweghị ike iji aha azụmahịa", "Ọ ga-ebu ụzọ hiwe corporation", "Ọ naghị edenye akwụkwọ mmalite na Secretary of State"], answer: 3, why: "Sole proprietor anaghị edenye akwụkwọ mmalite na Secretary of State." },
          { objective: "O2", q: "Maria Lopez na-ere nri dị ka \"Sunrise Tamales\". Ebee ka ọ ga-edenye Fictitious Business Name ya?", options: ["County clerk ya", "CDTFA", "IRS", "Franchise Tax Board"], answer: 0, why: "A na-edenye FBN na county clerk ebe azụmahịa ahụ dị." },
          { objective: "O3", q: "Weebụsaịtị na-arịọ $150 iji nweta gị EIN. Gịnị ka ị ga-eme?", options: ["Kwụọ ya; ọ dị ngwa karị", "Jiri EIN enyi gị", "Tinye akwụkwọ n'efu na irs.gov kama", "Ghara inweta EIN ruo mgbe ebighị ebi"], answer: 2, why: "IRS kwuru na ị gaghị akwụ ụgwọ ọ bụla maka EIN." },
          { objective: "O3", q: "Kedu azụmahịa kachasị chọọ seller's permit nke California?", options: ["Ọrụ nhicha ụlọ", "Ọrụ nkuzi", "Ụlọ ahịa na-ere uwe", "Ọrụ idekọ ego (bookkeeping)"], answer: 2, why: "Ire ngwaahịa a na-atụ ụtụ, dị ka uwe, chọrọ seller's permit." }
        ]
      }
    },
    {
      name: "Isi 2: Ikike obodo, ego kwa afọ na atụmatụ gị",
      lessons: [
        {
          objectives: ["O4","O6"],
          title: "Ịchọta ikike obodo na county gị",
          minutes: 5,
          goal: "Jiri CalGold na weebụsaịtị obodo gị depụta ikike obodo azụmahịa gị chọrọ.",
          text: [
            "Ọtụtụ obodo na-achọ akwụkwọ ikike azụmahịa (business license) ma ọ bụ business tax certificate, ọbụlagodi maka azụmahịa n'ụlọ. Obodo ọ bụla (ma ọ bụ county, ma ọ bụrụ na ị nọ n'èzí obodo) na-esetịpụ ego ya, ọ na-adaberekarị n'ụdị azụmahịa gị ma ọ bụ ego ị na-enweta. Chọọ ya na weebụsaịtị obodo gị ma ọ bụ kpọọ city hall.",
            "Ụfọdụ azụmahịa chọrọ ikike pụrụ iche. Ụlọ oriri ma ọ bụ food truck chọrọ ikike ahụike site n'ngalaba environmental health nke county. Ebe a na-eme achịcha n'ụlọ nwere ike ịchọ ndebanye aha ma ọ bụ ikike cottage food site na county. Ụlọ ntutu isi chọrọ akwụkwọ ikike state board maka ndị ọrụ. Ọtụtụ ebe na-achọkwa nlele zoning, nlele ọkụ (fire inspection) ma ọ bụ ikike akara ngosi (sign permit).",
            "CalGold (calgold.ca.gov) bụ ngwa steeti n'efu na-enyere gị aka ịchọta ozi gbasara ikike. Ị na-ahọrọ obodo ma ọ bụ county gị na ụdị azụmahịa gị, ọ na-edepụtakwa ụlọ ọrụ gọọmentị na otu esi akpọtụrụ ha. CalGold anaghị enye ikike, ọ na-ekwukwa na a ka na-ewu ya, ya mere kpọọ ụlọ ọrụ ahụ ka o kwado."
          ],
          steps: ["Meghee calgold.ca.gov.", "Họrọ obodo ma ọ bụ county gị.", "Họrọ ụdị azụmahịa gị (ma ọ bụ \"General Business Information\").", "Dee ikike ọ bụla na ụlọ ọrụ na-enye ya.", "Gaa ma ọ bụ kpọọ ụlọ ọrụ ọ bụla ka i kwado ụgwọ na otu esi etinye akwụkwọ."],
          words: [["Akwụkwọ ikike azụmahịa (business license)", "ikike obodo ma ọ bụ county iji rụọ azụmahịa n'ebe ahụ; a na-akpọ ya mgbe ụfọdụ business tax certificate."], ["Zoning", "iwu obodo gbasara ụdị azụmahịa nwere ike ịrụ ọrụ n'otu adreesị."], ["CalGold", "weebụsaịtị California n'efu na-edepụta ozi ikike site n'ebe na ụdị azụmahịa."]],
          slides: [
            { title: "Akwụkwọ ikike azụmahịa obodo", bullets: ["Ọtụtụ obodo na-achọ ya, ọbụlagodi n'ụlọ", "Obodo ma ọ bụ county ọ bụla na-esetịpụ ego ya", "Lelee weebụsaịtị obodo gị ma ọ bụ kpọọ city hall"] },
            { title: "Ikike pụrụ iche", bullets: ["Nri: ikike environmental health nke county", "Achịcha n'ụlọ: iwu cottage food nke county", "Zoning, nlele ọkụ na ikike akara ngosi"] },
            { title: "Jiri CalGold", bullets: ["calgold.ca.gov: họrọ obodo na ụdị azụmahịa", "Ọ na-edepụta ụlọ ọrụ; ọ naghị enye ikike", "Kpọọ ụlọ ọrụ ọ bụla ka i kwado ụgwọ"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Jiri CalGold maka obodo gị na ụdị azụmahịa gị. Tinye ikike ọ bụla ọ depụtara n'atụmatụ gị, ya na weebụsaịtị ụlọ ọrụ ahụ. Maka nke ọ bụla, dee ụgwọ ma ọ bụ \"chọọ ya na\" na ebe ahụ.",
          youCanNow: "ịchọta ikike obodo na county azụmahịa gị chọrọ na ọfịs na-enye nke ọ bụla.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka CalGold na-eme?", options: ["Ọ na-enye ikike niile ị chọrọ", "Ọ na-anakọta ụtụ gị", "Ọ na-ahiwe LLC gị", "Ọ na-edepụta ozi ikike na ụlọ ọrụ maka obodo gị na ụdị azụmahịa gị"], answer: 3, why: "CalGold na-edepụta ikike na ụlọ ọrụ, mana ọ naghị enye ha." },
            { objective: "O4", q: "CalGold depụtara otu ikike maka food truck gị. Gịnị ka ị ga-eme ọzọ?", options: ["Were ya na i nwetala ya ugbu a", "Kpọtụrụ ụlọ ọrụ e depụtara ka i kwado ụgwọ ma tinye akwụkwọ", "Rịọ AI ka o tinye akwụkwọ maka gị", "Chere ruo mgbe onye nlele ga-abịa"], answer: 1, why: "CalGold anaghị enye ikike, ya mere ị na-akpọtụrụ ụlọ ọrụ ọ bụla." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ego kwa afọ: ụtụ $800, akwụkwọ na ụgwọ ndị ọrụ",
          minutes: 6,
          goal: "Depụta ego steeti kwa afọ na ụbọchị njedebe ndị na-eso ụdị azụmahịa gị.",
          text: [
            "LLC: Franchise Tax Board (FTB) kwuru na LLC ọ bụla na-azụ ahịa ma ọ bụ e hiwere na California ga-akwụ ụtụ kwa afọ (annual tax) nke $800, kwa afọ, ruo mgbe a kagburu LLC ahụ, ọbụlagodi ma ọ bụrụ na ọ dịghị ahịa ọ zụrụ. Ụgwọ mbụ ga-abịa tupu ụbọchị nke 15 nke ọnwa nke 4 mgbe i denyere na Secretary of State. LLC na-enweta ihe karịrị $250,000 na-akwụkwa LLC fee. Ntọhapụ afọ mbụ dịbu site na 2021 ruo 2023 adịghịzi.",
            "Corporation: FTB kwuru na corporations na-akwụ ụtụ franchise kacha nta nke $800, mana corporations e hiwere ọhụrụ achọghị ịkwụ nke kacha nta ahụ n'afọ ụtụ mbụ ha. Ha ka nwere ike iji ụtụ n'ego ha nwetara, ha ga-akwụkwa ụgwọ e mere atụmatụ (estimated payments).",
            "Statement of Information: LLC na corporations na-edenye ya na Secretary of State. Statement of Information nke LLC (LLC-12) bụ $20, ga-abịa n'ime ụbọchị 90 nke ịhiwe ya na afọ abụọ ọ bụla mgbe nke ahụ gasịrị. Nke stock corporation (SI-550) bụ $25. Ịhapụ ya nwere ike iweta ntaramahụhụ.",
            "Iwe ndị ọrụ: debanye aha na Employment Development Department (EDD) n'ime ụbọchị 15 mgbe i kwụrụ ihe karịrị $100 n'ụgwọ ọrụ n'otu nkeji afọ (quarter). Iwu ụgwọ ndị ọrụ (payroll) dị ọtụtụ, ya mere ọtụtụ ndị nwe azụmahịa na-eji ọrụ payroll ma ọ bụ ọkachamara n'ụtụ."
          ],
          words: [["Franchise Tax Board (FTB)", "ụlọ ọrụ ụtụ steeti California maka ụtụ ego a na-enweta na ụtụ franchise."], ["Ụtụ kwa afọ (annual tax)", "ụtụ $800 kwa afọ LLC ọ bụla na California na-akwụ."], ["Statement of Information", "obere fọm LLC na corporations na-edenye na Secretary of State iji mee ka ozi ha dị ọhụrụ."], ["EDD", "Employment Development Department: ọfịs steeti maka ụtụ payroll na ndị were ndị ọrụ."]],
          slides: [
            { title: "LLC: $800 kwa afọ", bullets: ["Ọ ga-abịa tupu ụbọchị nke 15 nke ọnwa nke 4 mgbe i hiwere ya", "Ị ji ya ọbụlagodi n'enweghị ahịa, ruo mgbe i kagburu ya", "Ego karịrị $250,000: LLC fee kwa"] },
            { title: "Corporation: $800 kacha nta", bullets: ["Ụtụ franchise kacha nta: $800", "Achọghị ya n'afọ ụtụ mbụ", "Estimated payments ka nwere ike ịdị"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12): $20, n'ime ụbọchị 90, wee kwa afọ 2", "Stock corporation (SI-550): $25", "Ịhapụ ya nwere ike iweta ntaramahụhụ"] },
            { title: "Iwe ndị ọrụ", bullets: ["Debanye aha na EDD n'ime ụbọchị 15", "Mgbe i kwụrụ ihe karịrị $100 n'ụgwọ ọrụ n'otu quarter", "Chee maka ọrụ payroll ma ọ bụ ọkachamara n'ụtụ"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Tinye ahịrị kwa afọ dabara ụdị azụmahịa gị n'atụmatụ gị: ụtụ $800 na ụbọchị njedebe ya, Statement of Information na ụgwọ ya, na ndebanye aha EDD ma ọ bụrụ na ị ga-ewe ndị ọrụ. Meghee peeji gọọmentị ọ bụla ma lelee ọnụ ọgụgụ ahụ tupu i dee ya.",
          youCanNow: "ịdepụta ego steeti kwa afọ na ụbọchị njedebe maka ụdị azụmahịa gị na ikwu ọfịs na-anakọta nke ọ bụla.",
          quickCheck: [
            { objective: "O5", q: "Ugboro ole ka LLC na-edenye Statement of Information mgbe nke mbụ gasịrị?", options: ["Kwa ọnwa", "Kwa afọ ise", "Naanị otu ugboro", "Kwa afọ abụọ"], answer: 3, why: "Mgbe nke mbụ gasịrị, LLC na-edenye Statement of Information kwa afọ abụọ." },
            { objective: "O5", q: "LLC gị enwetaghị ego afọ a. Gịnị ka ị ga-akwadebe maka ya?", options: ["Ọ dịghị ihe, n'ihi na ọ dịghị ahịa", "Kagbuo atụmatụ ụtụ", "Ị ka ji ụtụ kwa afọ $800 ruo mgbe a kagburu LLC ahụ", "Naanị ụtụ gọọmentị etiti"], answer: 2, why: "LLC ji ụtụ kwa afọ $800 ruo mgbe a kagburu ya, ọbụlagodi n'enweghị ahịa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịchịkọta ya: atụmatụ ịhazi gị na mmefu ego",
          minutes: 5,
          goal: "Mee atụmatụ ịhazi otu peeji nwere nzọụkwụ n'usoro, ọfịs, ego na ụbọchị njedebe.",
          text: [
            "Ugbu a, tinye ha niile n'otu peeji. Usoro dị mkpa: họrọ ụdị azụmahịa, hiwe LLC ma ọ bụ corporation (ma ọ bụrụ na ọ dị), nweta EIN, denye FBN (ma ọ bụrụ na ọ dị mkpa), nweta seller's permit (ma ọ bụrụ na ọ dị mkpa), wee nweta ikike obodo na county. Ọtụtụ ikike na-arịọ EIN gị ma ọ bụ nọmba entity gị, ya mere buru ụzọ mee ndị ahụ.",
            "Gbakọọ ego ndị ị maara, ma kaa akara ndị ị ka ga-achọ. Ọmụmaatụ maka food truck bụ LLC: LLC-1 $70, Statement of Information $20, EIN n'efu, seller's permit enweghị ụgwọ (ego nchekwa nwere ike ịdị), ụtụ kwa afọ $800, gbakwunyere ikike ahụike county, akwụkwọ ikike obodo na ụgwọ FBN ị ga-achọ n'obodo gị.",
            "Ngwa enyemaka AI nwere ike inyere gị aka hazie tebụl ma mee ndepụta nlele, mana o nwere ike ime mperi gbasara ụgwọ na ụbọchị. Jiri peeji gọọmentị mgbe niile maka ọnụ ọgụgụ. Edela nọmba Social Security gị, ozi ụlọ akụ ma ọ bụ okwuntughe n'ime ngwa AI. Mgbe i mechara, gosi onye ndụmọdụ SBDC n'efu ma ọ bụ ọkachamara n'ụtụ atụmatụ ahụ."
          ],
          steps: ["Depụta nzọụkwụ ndị ahụ n'usoro.", "Tinye ọfịs na weebụsaịtị gọọmentị maka nke ọ bụla.", "Tinye ego site na peeji gọọmentị, ma ọ bụ \"chọọ ya na ...\".", "Tinye ụbọchị njedebe maka ihe ọ bụla kwa afọ.", "Gbakọọ ego ndị ị maara ma gosi onye ndụmọdụ atụmatụ ahụ."],
          words: [["Ego mmalite (startup costs)", "ego ị na-emefu otu ugboro iji meghee azụmahịa ahụ."], ["Ego na-alọghachi (recurring costs)", "ego ị na-akwụ ọzọ kwa afọ, dị ka ụtụ $800."]],
          slides: [
            { title: "Usoro ya", bullets: ["1. Ụdị azụmahịa  2. Hiwe LLC ma ọ bụ corporation", "3. EIN  4. FBN ma ọ dị mkpa  5. Seller's permit", "6. Ikike obodo na county"] },
            { title: "Ọmụmaatụ: food truck bụ LLC", bullets: ["LLC-1 $70; Statement of Information $20", "EIN n'efu; seller's permit enweghị ụgwọ", "Ụtụ kwa afọ $800; ụgwọ obodo: chọọ ha"] },
            { title: "Iji AI n'enweghị nsogbu ebe a", bullets: ["AI nwere ike ịhazi tebụl na ndepụta nlele gị", "Nweta ụgwọ na ụbọchị ọ bụla site na peeji gọọmentị", "Edela SSN, ozi ụlọ akụ ma ọ bụ okwuntughe gị mgbe ọ bụla"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ otu peeji gị nwere kọlụm ise: Nzọụkwụ, Ọfịs (weebụsaịtị), Ego, Ụbọchị njedebe, Emechaala. Dejupụta ahịrị ọ bụla site n'ihe ọmụmụ a, gbakọọ ego ndị ị maara, ma kaa akara ụgwọ obodo ọ bụla ị ka ga-achọ.",
          youCanNow: "ime ma jiri atụmatụ ịhazi zuru ezu maka ịmalite azụmahịa na California.",
          quickCheck: [
            { objective: "O6", q: "N'usoro ole ka ị na-emekarị nzọụkwụ ndị a?", options: ["Họrọ ụdị azụmahịa, hiwe ya, nweta EIN, wee nweta ikike obodo", "Ikike obodo, wee họrọ ụdị azụmahịa", "Nweta EIN tupu ịhọrọ aha ma ọ bụ ụdị, wee hiwe ya n'ikpeazụ", "Usoro ọ bụla bụ otu"], answer: 0, why: "Nzọụkwụ ọ bụla dabere n'nke bu ya ụzọ, na-amalite n'ụdị azụmahịa." },
            { objective: "O6", q: "Ị maghị ụgwọ akwụkwọ ikike azụmahịa obodo gị. Gịnị ka ị ga-ede n'atụmatụ gị?", options: ["Ihe ị kọrọ nkọ", "Efu", "\"Chọọ ya na\" ya na weebụsaịtị gọọmentị obodo ahụ", "Ụgwọ si n'obodo ọzọ"], answer: 2, why: "Ụgwọ obodo dị iche, ya mere ị na-ede ebe ị ga-achọ ha kama ịkọ nkọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ikike obodo, ego kwa afọ na atụmatụ gị",
        questions: [
          { objective: "O4", q: "Gịnị ka CalGold na-eme?", options: ["Ọ na-edepụta ozi ikike na ụlọ ọrụ maka obodo gị na ụdị azụmahịa gị", "Ọ na-enye akwụkwọ ikike azụmahịa gị", "Ọ na-anakọta ụtụ $800", "Ọ na-enye gị EIN"], answer: 0, why: "CalGold na-achọta ozi ikike; ọ naghị enye ikike." },
          { objective: "O4", q: "Onye na-esetịpụ ụgwọ akwụkwọ ikike azụmahịa obodo?", options: ["IRS", "Secretary of State", "CDTFA", "Obodo ma ọ bụ county ọ bụla"], answer: 3, why: "Obodo ma ọ bụ county ọ bụla na-esetịpụ ụgwọ ikike nke ya." },
          { objective: "O5", q: "LLC azụghị ahịa ọ bụla afọ a. Ọ ji ụtụ kwa afọ $800?", options: ["Mba, naanị ma o nwetara ego", "Ee, ruo mgbe a kagburu LLC ahụ", "Naanị n'afọ mbụ", "Naanị ma o nwere ndị ọrụ"], answer: 1, why: "FTB kwuru na ụtụ kwa afọ dị ọbụlagodi ma LLC ahụ anaghị azụ ahịa, ruo mgbe a kagburu ya." },
          { objective: "O5", q: "Olee mgbe Statement of Information mbụ nke LLC ga-abịa?", options: ["N'ime ụbọchị 90 nke ịhiwe ya", "Kwa ọnwa", "Naanị mgbe ọ na-emechi", "N'ime afọ 10"], answer: 0, why: "Secretary of State kwuru na ọ ga-abịa n'ime ụbọchị 90 nke ndebanye aha na kwa afọ abụọ mgbe nke ahụ gasịrị." },
          { objective: "O5", q: "Ị ga-ewe onye ọrụ mbụ gị. Kedu ọfịs ị ga-edebanye aha na ya?", options: ["CalGold", "County clerk", "EDD", "DMV"], answer: 2, why: "Ndị were ndị ọrụ na-edebanye aha na EDD n'ime ụbọchị 15 mgbe ha kwụrụ ihe karịrị $100 n'ụgwọ ọrụ n'otu quarter." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ịhazi Obere Azụmahịa na California, Gụnyere Ọnụ Ahịa",
    questions: [
      { objective: "O1", q: "Kedu ụdị azụmahịa na-adịghị mkpa ịdenye akwụkwọ mmalite na California Secretary of State?", options: ["LLC", "Sole proprietorship", "Corporation", "Nonprofit corporation"], answer: 1, why: "Sole proprietor anaghị edenye akwụkwọ mmalite na Secretary of State." },
      { objective: "O1", q: "Gịnị bụ isi ihe mere ndị nwe azụmahịa ji ahiwe LLC?", options: ["Ọ bụ n'efu mgbe niile", "Ọ na-anọchi ikike niile", "Ọ na-ewepụ ụtụ niile", "Ọ nwere ike inye aka kewaa ihe onwunwe gị n'ụgwọ azụmahịa"], answer: 3, why: "LLC bụ otu iwu kewapụrụ onwe ya nke nwere ike ichebe onye nwe ya." },
      { objective: "O1", q: "Ụgwọ Secretary of State maka Articles of Incorporation nke general stock corporation (ARTS-GS) bụ:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "Secretary of State depụtara ARTS-GS dị ka $100." },
      { objective: "O1", q: "Ebee ka ị na-edenye akwụkwọ mmalite LLC n'ịntanetị?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online bụ saịtị ndenye akwụkwọ nke Secretary of State." },
      { objective: "O2", q: "Gịnị bụ DBA?", options: ["Fọm ụtụ", "Ụdị ikike maka nri", "Aha azụmahịa na-eji n'ihu ọha, ma ọ bụrụ na ọ bụghị aha iwu nke onye nwe ya", "Akaụntụ ụlọ akụ"], answer: 2, why: "DBA pụtara \"doing business as\"; a na-edenye ya dị ka Fictitious Business Name." },
      { objective: "O2", q: "Mgbe i denyere FBN, ọtụtụ counties nke California na-achọkwa ka:", options: ["I bipụta ya n'akwụkwọ akụkọ obodo ruo izu anọ", "I kwụọ IRS ụgwọ", "I nweta seller's permit", "I hiwe LLC"], answer: 0, why: "Counties na-achọ ka e bipụta FBN otu ugboro n'izu ruo izu anọ." },
      { objective: "O2", q: "Ebee ka ị ga-achọ ụgwọ FBN nke county gị?", options: ["Ngwa enyemaka AI", "IRS", "Weebụsaịtị county clerk gị", "Ozi na soshal midia"], answer: 2, why: "County ọ bụla na-esetịpụ ụgwọ FBN nke ya." },
      { objective: "O3", q: "Ego ole ka IRS na-ana maka EIN?", options: ["Ọ dịghị ihe", "$70", "$50", "$800"], answer: 0, why: "IRS kwuru na ị gaghị akwụ ụgwọ ọ bụla maka EIN." },
      { objective: "O3", q: "Kedu ụlọ ọrụ gọọmentị na-enye seller's permit nke California?", options: ["FTB", "CDTFA", "EDD", "County clerk"], answer: 1, why: "California Department of Tax and Fee Administration na-enye seller's permit." },
      { objective: "O3", q: "Gịnị ka CDTFA nwere ike ịrịọ mgbe ị na-enweta seller's permit, ọ bụ ezie na ọ dịghị ụgwọ?", options: ["Akwụkwọ corporation", "Okwuntughe ụlọ akụ gị", "Ọkwa n'akwụkwọ akụkọ", "Ego nchekwa (security deposit)"], answer: 3, why: "CDTFA kwuru na ọ nwere ike ịchọ ego nchekwa." },
      { objective: "O3", q: "Ebe ire ugu (pumpkin) oge ụfọdụ na-ere n'otu ebe ruo izu isii. Gịnị ka onye nwe ya ga-ajụ CDTFA?", options: ["Temporary seller's permit", "EIN", "FBN", "Statement of Information"], answer: 0, why: "Ire ahịa n'otu ebe ụbọchị 90 ma ọ bụ na-erughị nwere ike ịchọ temporary seller's permit." },
      { objective: "O4", q: "Food truck na-achọkarị ikike ahụike site na:", options: ["IRS", "EDD", "Secretary of State", "Ngalaba environmental health nke county"], answer: 3, why: "Azụmahịa nri na-enweta ikike ahụike site na environmental health nke county." },
      { objective: "O6", q: "CalGold kwuru na ọ naghị enye ikike. Ya mere, mgbe i jiri ya, ị kwesịrị:", options: ["Ileghara ndepụta ahụ anya", "Ịkwụ CalGold ụgwọ", "Ịkpọtụrụ ụlọ ọrụ ọ bụla e depụtara ka i kwado ụgwọ ma tinye akwụkwọ", "Ịrịọ AI ka o tinye akwụkwọ maka gị"], answer: 2, why: "CalGold na-edepụta ụlọ ọrụ; ị na-etinye akwụkwọ n'ebe nke ọ bụla." },
      { objective: "O4", q: "Azụmahịa nkuzi n'ụlọ ka nwere ike ịchọ:", options: ["Seller's permit", "Akwụkwọ ikike azụmahịa obodo ma ọ bụ tax certificate", "Ikike ahụike", "Ikike ire mmanya"], answer: 1, why: "Ọtụtụ obodo na-achọ akwụkwọ ikike azụmahịa, ọbụlagodi maka azụmahịa n'ụlọ." },
      { objective: "O5", q: "Ego ole bụ ụtụ kwa afọ nke LLC na California?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "FTB kwuru na LLC ọ bụla ga-akwụ ụtụ kwa afọ nke $800." },
      { objective: "O5", q: "Olee mgbe ụtụ kwa afọ $800 mbụ nke LLC ga-abịa?", options: ["Naanị mgbe o nwetara $250,000", "Ọ dịghị mgbe n'afọ mbụ", "Tupu ụbọchị nke 15 nke ọnwa nke 4 mgbe e denyere na Secretary of State", "Na December 31"], answer: 2, why: "FTB nyere ụbọchị nke 15 nke ọnwa nke 4 mgbe e denyere ya." },
      { objective: "O5", q: "Corporation ọhụrụ n'afọ ụtụ mbụ ya:", options: ["Achọghị ịkwụ ụtụ franchise kacha nta nke $800", "Na-akwụ $1,600", "Anaghị akwụ ụtụ ọ bụla mgbe ọ bụla", "Ga-akwụ LLC fee"], answer: 0, why: "FTB kwuru na corporations e hiwere ọhụrụ achọghị ịkwụ nke kacha nta n'afọ ụtụ mbụ ha." },
      { objective: "O5", q: "Ugboro ole ka LLC na-edenye Statement of Information mgbe nke mbụ gasịrị?", options: ["Kwa ọnwa", "Kwa afọ abụọ", "Kwa afọ iri", "Ọ dịghị mgbe"], answer: 1, why: "Secretary of State kwuru kwa afọ abụọ mgbe nke mbụ gasịrị." },
      { objective: "O6", q: "N'usoro ole ka ị na-emekarị ihe ndị a?", options: ["Ikike obodo, wee hiwe LLC, wee họrọ ụdị azụmahịa", "Họrọ ụdị azụmahịa, hiwe ya, nweta EIN, wee nweta ikike obodo", "Seller's permit, wee EIN, wee ụdị azụmahịa", "Usoro ọ bụla dị mma"], answer: 1, why: "Ọtụtụ ikike na-arịọ EIN gị na nọmba entity gị, ya mere hiwe ya ma nweta EIN tupu." },
      { objective: "O6", q: "Ngwa enyemaka AI gwara gị ụgwọ FBN na county gị. Gịnị ka ị ga-eme?", options: ["Buru ụzọ lelee ya na peeji gọọmentị nke county clerk gị", "Tinye ya n'atụmatụ n'eleleghị ya", "Kwụọ ngwa AI ahụ ụgwọ", "Dee SSN gị ka i nweta azịza ka mma"], answer: 0, why: "AI nwere ike ime mperi; ụgwọ na-esi na peeji gọọmentị." }
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
      7,
      8,
      11,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ụdị azụmahịa na aha",
        objective: "O1",
        notYet: "Ọ dịghị ụdị azụmahịa a họrọ, ma ọ bụ ndenye aha adịghị.",
        meets: "Ụdị azụmahịa nwere ihe mere e ji họrọ ya, gbakwunyere ndenye aha kwesịrị ekwesị na ọfịs ya.",
        exceeds: "Ọ na-edekwa iwu mbipụta FBN ma ọ bụrụ na ọ metụtara."
      },
      {
        name: "EIN na seller's permit",
        objective: "O3",
        notYet: "Ọ dịghị, ma ọ bụ e jiri ọrụ EIN a na-akwụ ụgwọ.",
        meets: "EIN site na irs.gov n'efu, na ahịrị seller's permit ma ọ bụ ihe mere a chọghị ya.",
        exceeds: "Ọ na-ede ego nchekwa CDTFA nwere ike ịrịọ."
      },
      {
        name: "Ikike obodo",
        objective: "O4",
        notYet: "E depụtaghị akwụkwọ ikike obodo ma ọ bụ ikike CalGold.",
        meets: "Akwụkwọ ikike azụmahịa obodo na ikike CalGold ọ bụla, nke ọ bụla ya na weebụsaịtị ụlọ ọrụ ahụ.",
        exceeds: "E dejupụtara ụgwọ obodo ọ bụla site na peeji gọọmentị."
      },
      {
        name: "Ego kwa afọ na ụbọchị njedebe",
        objective: "O5",
        notYet: "Ụtụ $800 ma ọ bụ Statement of Information adịghị maka LLC ma ọ bụ corporation.",
        meets: "Ahịrị kwa afọ dabara ụdị azụmahịa ahụ, ya na ụbọchị njedebe.",
        exceeds: "Gụnyere ndebanye aha EDD ma ọ bụrụ na a na-ewe ndị ọrụ, e lelekwara ọnụ ọgụgụ ọ bụla na peeji gọọmentị."
      },
      {
        name: "Atụmatụ n'usoro ya na ego",
        objective: "O6",
        notYet: "Nzọụkwụ adịghị n'usoro, ma ọ bụ e kọrọ nkọ ego.",
        meets: "E dejupụtara kọlụm ise n'usoro, gbakọọ ego ndị a maara, kaa akara \"chọọ ya na\" n'ụgwọ a na-amaghị.",
        exceeds: "E depụtara weebụsaịtị gọọmentị ọ bụla, a na-ejikwa kọlụm Emechaala."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mechara opekata mpe otu ndebanye aha ma ọ bụ ikike n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe meghere azụmahịa ha n'iwu n'ime ọnwa 6",
      "Ndị na-amụ ihe zutere onye ndụmọdụ SCORE ma ọ bụ SBDC n'ime ụbọchị 60"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Akwụkwọ, ma ọ bụ spreadsheet n'efu, maka atụmatụ ịhazi nwere kọlụm ise",
      "Peeji gọọmentị e depụtara na nkuzi ọ bụla: bizfile Online, irs.gov, CDTFA, CalGold, FTB na EDD",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Tupu nnọkọ ọ bụla, meghee peeji gọọmentị ma lelee na ụgwọ steeti dị n'ihe ọmụmụ a ka bụ nke ugbu a.",
      "Chọọ peeji county clerk na akwụkwọ ikike azụmahịa obodo nke ebe gị ka i gosi ndị na-amụ ihe ezi saịtị obodo.",
      "Ejila mgbe ọ bụla rịọ ndị na-amụ ihe ka ha dee nọmba Social Security n'ihuenyo ọha; a na-etinye akwụkwọ EIN naanị na irs.gov, na nzuzo.",
      "Ihe ọmụmụ a abụghị ndụmọdụ iwu ma ọ bụ ụtụ; kpọọ onye ndụmọdụ SCORE, onye ndụmọdụ SBDC ma ọ bụ ọkachamara n'ụtụ maka ajụjụ gbasara ọnọdụ onye na-amụ ihe n'onwe ya.",
      "Jiri rubric tụọ akara atụmatụ ịhazi ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
