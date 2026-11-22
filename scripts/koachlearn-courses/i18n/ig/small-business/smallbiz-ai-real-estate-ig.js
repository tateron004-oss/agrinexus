"use strict";

// Koach Learn course (Igbo translation of small-business/smallbiz-ai-real-estate.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const HUD_FHA = { name: "HUD: Nchịkọta Fair Housing Act (iwu ụlọ obibi n'ịkpa oke)", url: "https://www.hud.gov/helping-americans/fair-housing-act-overview" };
const CFR_100_75 = { name: "24 CFR 100.75: Mgbasa ozi, okwu na ọkwa na-akpa oke", url: "https://www.law.cornell.edu/cfr/text/24/100.75" };
const DRE = { name: "California Department of Real Estate (ọmụmaatụ onye nlekọta steeti)", url: "https://www.dre.ca.gov/" };
const CAN_SPAM = { name: "FTC: Iwu CAN-SPAM, Ntụzi Aka maka Azụmahịa", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-real-estate-ig",
  lang: "ig",
  translationOf: "smallbiz-ai-real-estate",
  category: "Small Business",
  name: "AI maka Ndị Na-ere Ụlọ na Ala (Real Estate Agents)",
  skills: "Ide nkọwa ụlọ e tinyere n'ahịa nke na-agbaso iwu fair housing, Ịgbanwe ndetu ka ọ bụrụ ozi ọhụrụ nye ndị ahịa, Iwu atụmatụ nsochi, Ịchịkọta ọnụọgụ ahịa i wetara, Ịkwadebe maka ngosi ụlọ na open house, Ichebe ozi ndị ahịa",
  outcome: "iji AI n'azụmahịa ire ụlọ na ala gị dee nkọwa ụlọ ziri ezi nke na-agbaso iwu fair housing, na-agwa ndị na-azụ na ndị na-ere ihe na-eme, na-agbaso atụmatụ nsochi maka ndị nwere mmasị (leads), ma gbanwee ọnụọgụ ahịa i wetara na MLS gị ka ọ bụrụ nchịkọta doro anya nye onye ahịa, n'etinyeghị ozi nzuzo ndị ahịa n'ime ngwa AI.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị na-ere ụlọ na ala (agents), ndị broker na ndị na-enyere ha aka, karịsịa ndị na-arụ ọrụ n'onwe ha na ndị ọhụrụ na-ewu azụmahịa, gụnyere ọtụtụ ndị agent si n'obodo ndị pere mpe na-ejere obodo ha ozi na ndị na-azụ ụlọ nke mbụ.",
    "Ị ga-eji ngwa enyemaka AI n'efu dee nkọwa ụlọ ngwa ngwa, gwa ndị ahịa ihe na-eme, sochie ndị nwere mmasị mgbe niile ma kọwaa ọnụọgụ ahịa nke ọma. Ị ga-amụtakwa ebe AI na-ebute ihe egwu n'ire ụlọ: okwu fair housing, eziokwu ezighi ezi na nkọwa ụlọ, na nzuzo ndị ahịa.",
    "Ihe ọmụmụ a abụghị ndụmọdụ iwu. Iwu fair housing, iwu mgbasa ozi na iwu akwụkwọ ikike (license) metụtara gị; lelee HUD, onye nlekọta real estate nke steeti gị (na California, Department of Real Estate) na broker gị. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Wuo ngwa AI nke agent: otu nkọwa ụlọ e lelere ahịrị n'ahịrị maka eziokwu na okwu fair housing, ụdị ozi kwa izu nye onye na-ere ụlọ, ụdị ozi ọchụchọ nye onye na-azụ ụlọ, atụmatụ nsochi ụbọchị 30 nwere ozi anọ maka ndị nwere mmasị, nchịkọta ahịa otu peeji e wuru site n'ọnụọgụ i wetara n'onwe gị, na ndepụta ihe maka open house. Ọ dịghị ozi nzuzo onye ahịa ọ bụla na-abanye n'ime ngwa AI.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-ere ụlọ na ala (agents), ndị broker na ndị na-enyere ha aka, karịsịa ndị na-arụ ọrụ n'onwe ha na ndị ọhụrụ na-ewu azụmahịa, gụnyere ọtụtụ ndị agent si n'obodo ndị pere mpe na-ejere obodo ha ozi na ndị na-azụ ụlọ nke mbụ.",
    startingPoint: "Ha nwere akwụkwọ ikike (license) ma ọ bụ na-arụ ọrụ n'okpuru broker, ma mara otu esi ewepụta ụlọ na ọnụọgụ site na MLS. Ọtụtụ anwaala AI maka otu ma ọ bụ abụọ post mana enweghị usoro kwụsiri ike, ọ bụkwa mmadụ ole na ole chere banyere ihe egwu AI n'ihe gbasara fair housing na nzuzo.",
    gap: "Ide nkọwa ụlọ, ozi ọhụrụ na ozi nsochi na-ewe ọtụtụ awa, nsochi na-adịghị kwụsiri ike na-emekwa ka ndị ahịa pụọ. AI na-azọpụta oge ahụ, mana o nwere ike ichepụta eziokwu, dee okwu na-emebi iwu fair housing ma gosipụta ozi ndị ahịa. Ndị na-amụ ihe chọrọ ụzọ n'enweghị nsogbu, nke a na-emeghachi, iji ya nke na-echebe akwụkwọ ikike ha na ndị ahịa ha.",
    constraints: [
      "Ọ bụghị ndụmọdụ iwu: iwu fair housing, mgbasa ozi na akwụkwọ ikike si na HUD, onye nlekọta steeti na broker",
      "Iwu ụlọ ọrụ broker gbasara ngwa AI metụtara gị",
      "Nzuzo: enweghị aha ndị ahịa na adreesị ha, ozi ego, usoro onyinye ọnụ ahịa (offer) ma ọ bụ atụmatụ mkparịta ụka n'ime ngwa AI",
      "Ọnụọgụ ahịa ga-esi na MLS ma ọ bụ isi iyi ọzọ a pụrụ ịtụkwasị obi, ọ bụghị site n'AI",
      "Oge: ndị agent na-arụsi ọrụ ike, ya mere nkuzi ọ bụla dị ihe dị ka nkeji 5"
    ],
    prerequisites: "Ọ dịghị. Ndị ọhụrụ n'iji ngwa enyemaka AI nwere ike ibu ụzọ were ihe ọmụmụ mmalite AI."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị eziokwu e lelere site n'akwụkwọ ndekọ, onye na-ere ụlọ na nleta gị n'onwe gị", action: "ide nkọwa ụlọ site n'enyemaka AI ma lelee eziokwu ọ bụla ahịrị n'ahịrị", standard: "na-ewepụ ihe ọ bụla ị na-enweghị ike ịkwado" },
    { id: "O2", condition: "Mgbe e nyere gị nkọwa ụlọ ma ọ bụ mgbasa ozi e ji AI dee", action: "ịchọpụta na idegharị okwu na-egosi mmasị banyere ndị mmadụ kama ịkọwa ụlọ ahụ", standard: "ka ahịrị ọ bụla kọwaa naanị ụlọ ahụ na ihe ndị dị n'ime ya" },
    { id: "O3", condition: "Mgbe e nyere gị nkọwa ụlọ e lelere", action: "ime post maka social media na email ahịa nke na-agbaso iwu mgbasa ozi ndị nwere license na iwu email", standard: "nwere ozi license na ụlọ ọrụ broker dị ka a chọrọ, adreesị nzipu ozi (postal address) na nhọrọ ịkwụsị ịnata ozi (unsubscribe)" },
    { id: "O4", condition: "Mgbe e nyere gị ndetu gị nke izu ahụ", action: "ide ozi ọhụrụ nye onye na-ere ma ọ bụ onye na-azụ ụlọ site n'AI na-eji ihe nnọchi maka ozi nzuzo", standard: "n'enweghị ozi nzuzo onye ahịa n'ime ngwa AI" },
    { id: "O5", condition: "Mgbe e nyere gị onye ọhụrụ nwere mmasị kwetara ịnụ olu gị", action: "ịhazi nsochi ụbọchị 30 nwere ozi anọ bara uru na ụbọchị ọzọ e dere ede", standard: "na-elele njikọ mmemme ọ bụla na peeji gọọmentị ma ọ bụ nke ezi ụlọ ọrụ" },
    { id: "O6", condition: "Mgbe e nyere gị ọnụọgụ ahịa i wetara na MLS gị", action: "ime nchịkọta ahịa n'okwu dị mfe na ndepụta ihe maka open house", standard: "n'enweghị ọnụọgụ e chepụtara echepụta, ma tinye isi iyi na ụbọchị" }
  ],
  chapters: [
    {
      name: "Isi 1: Nkọwa ụlọ na fair housing",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ide nkọwa ụlọ site n'eziokwu gị",
          minutes: 5,
          goal: "Dee nkọwa ụlọ ziri ezi, na-adọrọ mmasị, site n'eziokwu e lelere banyere ụlọ ahụ.",
          text: [
            "Nkọwa ụlọ (listing description) na-ere ihe ndị dị n'ụlọ ahụ: otu e si hazie ya, ihe e meziri ọhụrụ, ìhè, ebe dị n'èzí, na ihe dị nso dị ka ogige ntụrụndụ ma ọ bụ ụgbọ njem ọha. AI na-ede ngwa ngwa, mana ọ maara naanị ihe ị gwara ya.",
            "Nye ya naanị eziokwu e lelere: \"3 bed, 2 bath, 1,450 sq ft per county records, built 1962, kitchen remodeled 2021, new roof 2023, fenced backyard with lemon tree, 0.3 miles to light rail.\" (Ime ụlọ 3, ụlọ ịsa ahụ 2, 1,450 sq ft dị ka akwụkwọ ndekọ county si kwuo, e wuru ya 1962, e meziri kichin 2021, elu ụlọ ọhụrụ 2023, azụ ụlọ e gbachiri ogige nwere osisi lemon, 0.3 miles ruo ụgbọ okporo ígwè.) Rịọ nkọwa nwere okwu 120 n'ụda dị ọkụ, nke ọkachamara, na obere ụdị maka social media.",
            "Wee lelee eziokwu ọ bụla: ebe ọnụọgụ sq ft si, afọ e meziri ihe, aha ụlọ akwụkwọ, anya ụzọ. AI nwere ike itinye ihe na-adịghị ya (\"granite counters\", \"ocean view\"). Okwu ụgha na nkọwa ụlọ nwere ike ibute mkpesa na nsogbu iwu."
          ],
          steps: ["Chịkọta eziokwu e lelere site n'akwụkwọ ndekọ, onye na-ere ụlọ na nleta gị.", "Rịọ AI maka nkọwa ogologo na nke mkpụmkpụ.", "Lelee eziokwu ọ bụla ahịrị n'ahịrị.", "Wepụ ihe ọ bụla ị na-enweghị ike ịkwado."],
          words: [["Nkọwa ụlọ (listing description)", "ederede na-akọwa ụlọ a na-ere ma ọ bụ a na-agbazinye."], ["MLS", "Multiple Listing Service: ebe nchekwa data ndị agent na-eji ekekọrịta ụlọ dị n'ahịa."], ["Eziokwu e lelere", "ihe i kwadoro site n'akwụkwọ ndekọ, onye na-ere ụlọ ma ọ bụ nleta gị n'onwe gị."]],
          slides: [
            { title: "Ree ihe ndị dị n'ụlọ ahụ", bullets: ["Nhazi, ihe e meziri, ìhè, ebe dị n'èzí", "Ogige ntụrụndụ na ụgbọ njem ọha dị nso"] },
            { title: "Eziokwu abanye, okwu apụta", bullets: ["Nye AI naanị eziokwu e lelere", "Rịọ ụdị ogologo na nke mkpụmkpụ"] },
            { title: "Lelee ahịrị n'ahịrị", bullets: ["Ebe sq ft si, afọ e meziri ihe, anya ụzọ", "AI nwere ike ichepụta ihe ndị na-adịghị", "Okwu ụgha nwere ike ibute mkpesa"] }
          ],
          tryIt: "Họrọ ụlọ ị maara (ma ọ bụ ọmụmaatụ). Dee eziokwu iri e lelere, rịọ AI nkọwa nwere okwu 120, ma lelee ahịrị ọ bụla, na-ehichapụ ihe ọ bụla na-adịghị n'eziokwu gị.",
          youCanNow: "ide nkọwa ụlọ site n'eziokwu e lelere ma chọpụta ihe AI chepụtara echepụta.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka AI maara banyere ụlọ mgbe ọ na-ede nkọwa ya?", options: ["Naanị ihe ị gwara ya", "Ihe niile dị n'akwụkwọ ndekọ county", "Ihe onye na-ere ụlọ gwara ọfịs gị", "Data MLS ụlọ ahụ nke na-aga ugbu a"], answer: 0, why: "AI maara naanị ihe i nyere ya, ya mere ị na-enye ya naanị eziokwu e lelere." },
            { objective: "O1", q: "Nkọwa AI kwuru \"granite counters\" mana ị hụghị ha mgbe i letara. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ndị na-azụ ụlọ na-amasị granite", "Wepụ ya ma ọ bụrụ na ị nweghị ike ịkwado ya", "Tinye \"ma eleghị anya\" n'ihu ya", "Jụọ AI ma o ji n'aka"], answer: 1, why: "Ị na-elele eziokwu ọ bụla ma wepụ ihe ọ bụla ị na-enweghị ike ịkwado." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Okwu fair housing: ihe AI ekwesịghị ide",
          minutes: 6,
          goal: "Chọpụta ma dozie okwu na nkọwa ụlọ na-egosi mmasị dabere n'otu ìgwè a na-echebe.",
          text: [
            "Iwu federal Fair Housing Act machibidoro ịkpa oke n'ụlọ obibi n'ihi agbụrụ, ụcha akpụkpọ, mba mmadụ si, okpukpe, nwoke ma ọ bụ nwanyị, ọnọdụ ezinụlọ na nkwarụ. Iwu HUD na 24 CFR 100.75 machibidoro mgbasa ozi, okwu na ọkwa na-egosi mmasị, oke ma ọ bụ ịkpa oke dabere n'ihe ndị a, gụnyere site n'okwu, foto ma ọ bụ ebe ị họọrọ ịgbasa ozi. Ọtụtụ steeti, gụnyere California, na-echebe ìgwè ndị ọzọ; lelee nke steeti gị.",
            "Kọwaa ụlọ ahụ, ọ bụghị ndị ị chọrọ ka ha biri n'ime ya. Okwu dị egwu: \"perfect for young professionals\" (ọ dabara ndị ọrụ na-eto eto), \"ideal for a couple\" (ọ dabara di na nwunye), \"no kids\" (ụmụaka abịala), \"great Christian neighborhood\" (ezigbo obodo Ndị Kraịst), \"bachelor pad\", \"walking distance to [ụlọ ekpere] for families of that faith\", \"able-bodied\" (ndị ahụ ha dị mma). Nke ka mma: \"three bedrooms\", \"quiet street\", \"0.3 miles to transit\", \"single-level layout\".",
            "AI nwere ike i ṅomi ụkpụrụ ịkpa oke site n'ihe ọ mụtara. Gụọ ihe ọ bụla o dere mgbe niile maka nsogbu fair housing, ma rịọ ya: \"Rewrite to describe only the property and its features.\" (Degharịa ya ka ọ kọwaa naanị ụlọ ahụ na ihe ndị dị n'ime ya.) Mgbe obi abụọ dị gị, jụọ broker gị ma ọ bụ ebe enyemaka fair housing."
          ],
          steps: ["Gụọ ahịrị ọ bụla na-ajụ: ọ na-akọwa ụlọ ahụ ka ọ bụ ndị mmadụ?", "Wepụ okwu gbasara onye kwesịrị ibi n'ebe ahụ.", "Dochie ya na ihe ndị dị n'ụlọ ahụ.", "Lelekwa foto na ebe ị na-etinye mgbasa ozi.", "Jụọ broker gị mgbe obi abụọ dị gị."],
          words: [["Fair Housing Act", "iwu federal machibidoro ịkpa oke n'ụlọ obibi dabere n'ìgwè a na-echebe."], ["Ìgwè a na-echebe (protected class)", "ìgwè iwu na-echebe pụọ n'ịkpa oke, dị ka agbụrụ ma ọ bụ ọnọdụ ezinụlọ."], ["Ọnọdụ ezinụlọ (familial status)", "inwe ụmụaka na-erubeghị afọ 18 n'ụlọ, ma ọ bụ ịdị ime."], ["HUD", "US Department of Housing and Urban Development (ngalaba gọọmentị US maka ụlọ obibi)."]],
          slides: [
            { title: "Ìgwè federal a na-echebe", bullets: ["Agbụrụ, ụcha akpụkpọ, mba mmadụ si, okpukpe", "Nwoke ma ọ bụ nwanyị, ọnọdụ ezinụlọ, nkwarụ", "Ọtụtụ steeti, dị ka California, na-echebe ndị ọzọ"] },
            { title: "Mgbasa ozi agaghị egosi mmasị", bullets: ["24 CFR 100.75: okwu, foto, ebe a na-etinye mgbasa ozi", "Kọwaa ụlọ ahụ, ọ bụghị ndị mmadụ"] },
            { title: "Dozie okwu dị egwu", bullets: ["\"Perfect for young professionals\" -> wepụ ya", "\"No kids\" -> wepụ ya", "Jiri ihe dị n'ụlọ: \"3 bedrooms\", \"near transit\""] },
            { title: "AI nwere ike i ṅomi ịkpa oke", bullets: ["Gụọ ihe ọ bụla o dere maka nsogbu fair housing", "Rịọ: \"Describe only the property\"", "Obi abụọ? Jụọ broker gị"] }
          ],
          sources: [HUD_FHA, CFR_100_75],
          tryIt: "Rịọ AI nkọwa ụlọ maka ụlọ ezinụlọ buru ibu. Kaa akara n'okwu ọ bụla na-akọwa ndị mmadụ kama ụlọ ahụ, wee degharịa ha ka ha bụrụ ihe ndị dị n'ụlọ.",
          youCanNow: "ịchọpụta na idozi nsogbu fair housing n'okwu nkọwa ụlọ, gụnyere ederede AI dere.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka nkọwa ụlọ kwesịrị ịkọwa?", options: ["Ụdị ndị kwesịrị ịzụ ya", "Okpukpe ndị agbata obi", "Ụlọ ahụ na ihe ndị dị n'ime ya", "Onye ga-adaba n'okporo ámá ahụ"], answer: 2, why: "Kọwaa ụlọ ahụ, ọ bụghị ndị ị chọrọ ka ha biri n'ime ya." },
            { objective: "O2", q: "AI dere \"ideal for a couple.\" Gịnị ka ị ga-eme?", options: ["Hapụ ya; ọ dị mma", "Tinye \"or a single person\"", "Bugharịa ya na njedebe", "Dochie ya na ihe ndị dị n'ụlọ, dị ka \"two bedrooms, quiet street\""], answer: 3, why: "\"Ideal for a couple\" bụ okwu dị egwu gbasara ndị mmadụ; kọwaa ụlọ ahụ kama." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịgbasa ozi maka ụlọ gị na onwe gị, dị ka iwu si kwuo",
          minutes: 5,
          goal: "Mee post social media na email maka ụlọ nke na-agbaso iwu mgbasa ozi na iwu email.",
          text: [
            "AI nwere ike ịgbanwe nkọwa ụlọ i lelere ka ọ bụrụ post, email nye ndị ị maara (sphere), ederede flyer na obere edemede vidiyo. Jiri otu eziokwu e lelere ahụ na otu nlele fair housing ahụ maka ihe ọ bụla.",
            "Onye nlekọta steeti gị na broker gị nwere iwu mgbasa ozi maka ndị nwere license, nke na-agụnyekarị igosi nọmba license gị na aha ụlọ ọrụ broker gị. Na California, onye nlekọta ahụ bụ Department of Real Estate (DRE); lelee iwu steeti gị na iwu ụlọ ọrụ broker gị.",
            "Email ahịa ga-agbaso CAN-SPAM: onye zitere ya na isiokwu ya ga-abụ eziokwu, kwuo na ọ bụ mgbasa ozi, tinye adreesị nzipu ozi (postal address) na nhọrọ unsubscribe, ma kwụsị iziga ndị rịọrọ ka ị kwụsị n'ime ụbọchị ọrụ 10."
          ],
          steps: ["Jiri AI gbanwee nkọwa ụlọ e lelere ka ọ bụrụ post, email na flyer.", "Mee nlele fair housing n'ihe ọ bụla.", "Tinye ozi license na ụlọ ọrụ broker dị ka steeti gị na broker gị chọrọ.", "Tinye postal address na unsubscribe n'email ahịa."],
          words: [["Sphere", "ndị ị maara nwere ike ịzụ, ire ma ọ bụ zigara gị ndị ahịa: ndị ahịa gara aga, ndị enyi, ezinụlọ."], ["Onye nwere license (licensee)", "onye nwere akwụkwọ ikike ire ụlọ na ala."]],
          slides: [
            { title: "Otu ụlọ, ọtụtụ ihe", bullets: ["Post, email, flyer, edemede vidiyo", "Otu eziokwu, otu nlele fair housing"] },
            { title: "Iwu mgbasa ozi ndị nwere license", bullets: ["Ọtụtụ mgbe: nọmba license na aha ụlọ ọrụ broker", "California: Department of Real Estate", "Lelee iwu steeti gị na nke broker gị"] },
            { title: "Ihe ndabere email ahịa", bullets: ["Onye zitere na isiokwu bụ eziokwu; kwuo na ọ bụ mgbasa ozi", "Postal address na unsubscribe", "Kwụsị iziga ndị rịọrọ n'ime ụbọchị ọrụ 10"] }
          ],
          sources: [DRE, CAN_SPAM],
          tryIt: "Gbanwee nkọwa ụlọ i lelere ka ọ bụrụ post social media na obere email. Mee nlele fair housing, ma tinye ozi license na ụlọ ọrụ broker steeti gị na broker gị chọrọ.",
          youCanNow: "ịgbasa ozi maka ụlọ n'ọtụtụ ụzọ ma na-agbaso iwu fair housing, iwu ndị nwere license na iwu email.",
          quickCheck: [
            { objective: "O3", q: "Kedu iwu email metụtara email ahịa na nkuzi a?", options: ["CAN-SPAM", "The Food Code", "HIPAA", "Iwu FTC gbasara nyocha (reviews)"], answer: 0, why: "Email ahịa ga-agbaso CAN-SPAM, gụnyere postal address na nhọrọ unsubscribe." },
            { objective: "O3", q: "I jiri AI gbanwee nkọwa ụlọ gị ka ọ bụrụ post social media. Gịnị ọzọ ka ị ga-eme tupu i tinye ya?", options: ["Tinye ya ozugbo; e lelerela nkọwa ụlọ ahụ", "Mee nlele fair housing ma tinye ozi license na ụlọ ọrụ broker dị ka a chọrọ", "Wepụ ọnụ ahịa ya", "Tinye foto ụlọ ọzọ dị iche"], answer: 1, why: "Ihe ọ bụla na-enweta otu nlele fair housing ahụ na ozi steeti gị na broker gị chọrọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Nkọwa ụlọ na fair housing",
        questions: [
          { objective: "O1", q: "Nkọwa AI kwuru \"ocean view\" mana ụlọ ahụ anaghị ahụ oké osimiri. Gịnị ka ị ga-eme?", options: ["Hapụ ya; ndị na-azụ ụlọ na-amasị ya", "Hichapụ ya", "Tinye foto oké osimiri", "Jụọ AI ma ọ bụ eziokwu"], answer: 1, why: "Naanị eziokwu e lelere kwesịrị ịdị na nkọwa ụlọ." },
          { objective: "O2", q: "Kedu nke bụ ìgwè a na-echebe n'okpuru federal Fair Housing Act?", options: ["Ụcha ntutu isi", "Otu egwuregwu kacha amasị gị", "Ụdị ụgbọala", "Ọnọdụ ezinụlọ (familial status)"], answer: 3, why: "Ọnọdụ ezinụlọ bụ otu n'ime ìgwè federal asaa." },
          { objective: "O2", q: "Kedu okwu bụ ihe egwu fair housing?", options: ["\"Perfect for young professionals\"", "\"Three bedrooms\"", "\"New roof 2023\"", "\"0.3 miles to light rail\""], answer: 0, why: "Ọ na-egosi mmasị banyere onye kwesịrị ibi n'ebe ahụ." },
          { objective: "O2", q: "Iwu mgbasa ozi fair housing nwere ike ịgụnye:", options: ["Naanị bọọdụ mgbasa ozi n'okporo ụzọ", "Naanị okwu", "Okwu, foto na ebe ị na-etinye mgbasa ozi", "Ọ dịghị ihe n'ịntanetị"], answer: 2, why: "24 CFR 100.75 gụnyere okwu, foto na nhọrọ ebe mgbasa ozi." },
          { objective: "O3", q: "Ebee ka ị ga-elele iwu mgbasa ozi ndị nwere license na California?", options: ["Onye na-azụ ụlọ", "Mkparịta ụka AI", "Department of Real Estate na broker gị", "Otu ìgwè social media"], answer: 2, why: "DRE na-elekọta ndị nwere license na California." }
        ]
      }
    },
    {
      name: "Isi 2: Ndị ahịa, ndị nwere mmasị na data ahịa",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ozi ọhụrụ nye ndị ahịa n'ekesaghị ozi nzuzo",
          minutes: 5,
          goal: "Gbanwee ndetu gị ka ọ bụrụ ozi ọhụrụ doro anya nye onye na-ere na onye na-azụ ụlọ site n'iji ihe nnọchi.",
          text: [
            "Ndị ahịa chọrọ ịnụ olu gị ọtụtụ mgbe. Ozi kwa izu nye onye na-ere ụlọ na-ekwu maka ngosi ụlọ, ihe ndị mmadụ kwuru, ole ndị lere ya n'ịntanetị na nzọụkwụ ọzọ. Ozi nye onye na-azụ ụlọ na-ekwu maka ụlọ ọhụrụ dabara ha, ngosi e kwadoro na ihe na-eme n'ọnụ ahịa ha.",
            "Jiri AI gbanwee ndetu gị ka ọ bụrụ ozi doro anya, site n'iji ihe nnọchi: \"Turn these notes into a friendly weekly update for [seller name]: 6 showings, 2 second showings, feedback says kitchen is great but backyard needs cleanup, 1,200 online views. Suggest one next step.\" (Gbanwee ndetu ndị a ka ọ bụrụ ozi kwa izu nwere obi ọma nye [aha onye na-ere]: ngosi 6, ngosi nke abụọ 2, ndị mmadụ kwuru na kichin dị mma mana a ga-ehicha azụ ụlọ, ndị 1,200 lere ya n'ịntanetị. Tụọ aro otu nzọụkwụ ọzọ.)",
            "Etinyela ozi nzuzo ndị ahịa n'ime ngwa AI: aha zuru ezu na adreesị, ozi ego, ego e kwadoro ịgbazinye (pre-approval), nọmba Social Security, usoro onyinye ọnụ ahịa (offer) ma ọ bụ atụmatụ mkparịta ụka. Dejupụta ha n'onwe gị n'email gị ma ọ bụ na CRM gị. Gbasoo iwu ụlọ ọrụ broker gị gbasara ngwa AI."
          ],
          steps: ["Dee ndetu mgbe izu ahụ gwụrụ.", "Dochie aha na ozi nzuzo na ihe nnọchi.", "Rịọ AI ozi doro anya nwere nzọụkwụ ọzọ.", "Dejupụta ezi ozi n'onwe gị ma zipu ya."],
          words: [["CRM", "customer relationship management: sọftụwia e ji edekọ ndị ahịa na ndị nwere mmasị."], ["Ihe nnọchi (placeholder)", "oghere dị ka [seller name] e ji n'ọnọdụ ezi ozi nzuzo."]],
          slides: [
            { title: "Ndị ahịa chọrọ ozi ọhụrụ", bullets: ["Onye na-ere: ngosi, ihe a kwuru, ndị lere ya, nzọụkwụ ọzọ", "Onye na-azụ: ụlọ ọhụrụ dabara, ngosi, mgbanwe ahịa"] },
            { title: "Ndetu abanye, ozi apụta", bullets: ["Ndetu nwere ihe nnọchi", "Rịọ ozi nwere obi ọma na nzọụkwụ ọzọ"] },
            { title: "Etinyela ihe ndị a n'AI", bullets: ["Aha na adreesị, ozi ego, nọmba SSN", "Ego pre-approval na usoro offer", "Atụmatụ mkparịta ụka"] }
          ],
          tryIt: "Dee ndetu maka izu otu onye na-ere ụlọ (ọmụmaatụ). Jiri ihe nnọchi, rịọ AI ozi kwa izu nwere nzọụkwụ ọzọ, ma lelee na o nweghị ozi nzuzo ọ bụla.",
          youCanNow: "iziga ozi ọhụrụ doro anya nye ndị ahịa e ji AI mee ma na-edebe ozi ndị ahịa na nzuzo.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ozi kwa izu nye onye na-ere ụlọ na-ekwu maka ya?", options: ["Ego pre-approval onye na-azụ ụlọ", "Atụmatụ mkparịta ụka gị", "Ngosi, ihe ndị mmadụ kwuru, ndị lere ya n'ịntanetị na nzọụkwụ ọzọ", "Offer ndị ahịa ndị ọzọ"], answer: 2, why: "Ozi nye onye na-ere ụlọ na-ekwu maka ngosi, ihe a kwuru, ndị lere ya na nzọụkwụ ọzọ." },
            { objective: "O4", q: "Ndetu gị nwere aha zuru ezu onye na-azụ ụlọ na usoro offer ya. Gịnị ka ị ga-eme tupu i tinye ha n'AI?", options: ["Tinye ha otu ha dị", "Mee ka ndetu ahụ dị mkpụmkpụ", "Buru ụzọ sụgharịa ha", "Dochie ozi nzuzo na ihe nnọchi ma dejupụta ha n'onwe gị emesịa"], answer: 3, why: "Ozi nzuzo ndị ahịa anaghị abanye n'ngwa AI; ị na-edejupụta ha n'onwe gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Atụmatụ nsochi maka ndị nwere mmasị",
          minutes: 5,
          goal: "Wuo atụmatụ nsochi ụbọchị 30 nwere ozi anọ maka ndị ọhụrụ nwere mmasị.",
          text: [
            "Ọtụtụ ndị nwere mmasị (leads) adịbeghị njikere taa. Atụmatụ nsochi kwụsiri ike, nke bara uru, na-eme ka ha cheta gị. Ọmụmaatụ atụmatụ ụbọchị 30: ụbọchị 1, ekele na otu ajụjụ; ụbọchị 7, ndụmọdụ bara uru (mmemme maka ndị na-azụ ụlọ nke mbụ ha ga-enyocha); ụbọchị 14, nchịkọta ahịa nke mpaghara ha; ụbọchị 30, ịjụ ka ha mere.",
            "Rịọ AI ka o dee ozi ọ bụla n'olu gị nwere oghere [first name] na [area]. Mee ka ha bụrụ ndị bara uru, ọ bụghị ndị na-akpali mmadụ ike. Nye naanị njikọ (link) gaa na peeji gọọmentị ma ọ bụ nke ezi mmemme i lelere.",
            "Dekọọ ndị nwere mmasị na CRM gị ma ọ bụ na spreadsheet: aha, ebe o si, ụbọchị, ọkwa ha nọ, ụbọchị nsochi ọzọ. Zipu email ma ọ bụ ozi ederede naanị nye ndị kwetara ịnụ olu gị, ma gbasoo iwu email na ozi ederede."
          ],
          steps: ["Hazie kọntaktị anọ n'ime ụbọchị 30.", "Rịọ AI ka o dee nke ọ bụla nwere oghere.", "Mee ka ha baa uru ma lelee ozi mmemme ọ bụla na peeji gọọmentị ma ọ bụ nke ezi ụlọ ọrụ.", "Dekọọ ụbọchị nsochi ọzọ nke onye ọ bụla.", "Kpọtụrụ naanị ndị kwetara."],
          words: [["Onye nwere mmasị (lead)", "onye nwere ike ịzụ, ire ma ọ bụ gbazite ụlọ mana o bịanyebeghị aka n'akwụkwọ gị."], ["Kọntaktị (touch)", "otu oge ịkpọtụrụ onye nwere mmasị: oku, ozi ederede ma ọ bụ email."]],
          slides: [
            { title: "Atụmatụ ụbọchị 30", bullets: ["Ụbọchị 1: ekele na otu ajụjụ", "Ụbọchị 7: ndụmọdụ bara uru; Ụbọchị 14: nchịkọta ahịa", "Ụbọchị 30: ịjụ ka ha mere"] },
            { title: "Bara uru, ọ bụghị ịkpali ike", bullets: ["AI na-ede ya nwere [first name] na [area]", "Nye naanị njikọ gaa na peeji ezi ụlọ ọrụ i lelere"] },
            { title: "Dekọọ ma sọpụrụ", bullets: ["Aha, ebe o si, ọkwa, ụbọchị ọzọ", "Kpọtụrụ naanị ndị kwetara"] }
          ],
          tryIt: "Rịọ AI ka o dee atụmatụ nsochi ụbọchị 30 gị nwere ozi anọ. Dozie nke ọ bụla ka ọ dị ka olu gị, ma mee mpempe akwụkwọ ndekọ ndị nwere mmasị nwere kọlụm maka nsochi ọzọ.",
          youCanNow: "ịgbaso atụmatụ nsochi kwụsiri ike, nke bara uru, maka ndị ọhụrụ nwere mmasị.",
          quickCheck: [
            { objective: "O5", q: "N'atụmatụ ọmụmaatụ ahụ, gịnị bụ ozi ụbọchị 14?", options: ["Nchịkọta ahịa nke mpaghara ha", "Arịrịọ ka ha zitere gị onye ahịa", "Akwụkwọ nkwekọrịta ha ga-abịanye aka", "Kaadị ụbọchị ọmụmụ"], answer: 0, why: "Atụmatụ ahụ bụ ụbọchị 1 ekele, ụbọchị 7 ndụmọdụ, ụbọchị 14 nchịkọta ahịa, ụbọchị 30 ịjụ ka ha mere." },
            { objective: "O5", q: "I zutere otu onye na oriri na-ekwetabeghị ịnụ olu gị. Ị ga-etinye ya n'atụmatụ ozi ederede gị?", options: ["Ee, onye ọ bụla i zutere bụ onye nwere mmasị", "Mba, kpọtụrụ naanị ndị kwetara ịnụ olu gị", "Ee, ma ọ bụrụ na ozi ndị ahụ dị mkpụmkpụ", "Ee, mana naanị na ngwụcha izu"], answer: 1, why: "Zipu email ma ọ bụ ozi ederede naanị nye ndị kwetara, ma gbasoo iwu email na ozi ederede." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Nchịkọta ahịa na nkwadebe ngosi ụlọ",
          minutes: 5,
          goal: "Gbanwee ọnụọgụ ahịa i wetara ka ọ bụrụ nchịkọta doro anya nye onye ahịa, ma kwadebe open house.",
          text: [
            "Ndị ahịa na-ajụ, \"Kedu ka ahịa ụlọ si aga?\" Wepụta ọnụọgụ ndị ahụ n'onwe gị site na MLS gị ma ọ bụ isi iyi ọzọ a pụrụ ịtụkwasị obi: ọnụ ahịa etiti (median price), ụbọchị n'ahịa, ọnụọgụ ụlọ dị n'ahịa ugbu a, na ọnụọgụ ọnụ e rere ya n'ebe ọnụ e debere, maka ọnwa ole na ole gara aga.",
            "Tinye ọnụọgụ ndị ahụ (n'enweghị data onye ahịa) n'AI ma jụọ: \"Explain these market numbers for a first-time buyer in plain words, in 150 words. Do not add numbers I did not give you.\" (Kọwaa ọnụọgụ ahịa ndị a nye onye na-azụ ụlọ nke mbụ n'okwu dị mfe, n'okwu 150. Etinyela ọnụọgụ m na-enyeghị gị.) Lelee na o chepụtaghị ọnụọgụ ọ bụla, ma tinye isi iyi gị na ụbọchị. AI enweghị data ahịa nke ugbu a a pụrụ ịtụkwasị obi; gị nwere ya.",
            "Maka ngosi ụlọ na open house, rịọ AI ndepụta ihe: tupu (ọkụ, okpomọkụ ụlọ, flyer, akwụkwọ mbinye aka), n'oge ya (nchekwa, ịnabata ndị mmadụ, ndetu), mgbe ọ gachara (nsochi n'ime awa 24). Tinye usoro nchekwa ụlọ ọrụ broker gị."
          ],
          steps: ["Wepụta ọnụọgụ nke ugbu a site na MLS gị ma ọ bụ isi iyi a pụrụ ịtụkwasị obi.", "Rịọ AI ka ọ kọwaa ha n'okwu dị mfe n'etinyeghị ọnụọgụ ọzọ.", "Lelee ọnụọgụ ọ bụla ma tinye isi iyi na ụbọchị.", "Rịọ AI ndepụta ihe maka open house ma tinye nzọụkwụ nchekwa."],
          words: [["Ọnụ ahịa etiti (median price)", "ọnụ ahịa nọ n'etiti: ọkara ụlọ e rere karịrị ya, ọkara erughị ya."], ["Ụbọchị n'ahịa (days on market)", "ogologo oge ọ na-ewe ire ụlọ."], ["Sale-to-list ratio", "ọnụ e rere ụlọ kewara site n'ọnụ e debere ya, e gosiri dị ka pasent."]],
          slides: [
            { title: "Gị na-ewepụta ọnụọgụ", bullets: ["Median price na ụbọchị n'ahịa", "Ụlọ dị n'ahịa ugbu a na sale-to-list ratio", "Site na MLS gị ma ọ bụ isi iyi a pụrụ ịtụkwasị obi"] },
            { title: "AI na-akọwa", bullets: ["\"Kọwaa n'okwu dị mfe; etinyela ọnụọgụ ọzọ\"", "Lelee ọnụọgụ ọ bụla; tinye isi iyi na ụbọchị"] },
            { title: "Ndepụta ihe maka open house", bullets: ["Tupu: ọkụ, flyer, akwụkwọ mbinye aka", "N'oge ya: nchekwa na ndetu", "Mgbe ọ gachara: sochie n'ime awa 24"] }
          ],
          tryIt: "Ọrụ ikpeazụ: wuo ngwa AI gị nke agent: nkọwa ụlọ e lelere, ụdị ozi maka onye na-ere na onye na-azụ ụlọ, atụmatụ nsochi ụbọchị 30, nchịkọta ahịa site n'ọnụọgụ i wetara, na ndepụta ihe maka open house.",
          youCanNow: "ịkọwa ọnụọgụ ahịa nke ọma ma kwadebe ngosi ụlọ site n'enyemaka AI, na-eji data nke gị.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka sale-to-list price ratio na-atụnyere?", options: ["Ụgwọ ụlọ na mortgage", "Ụbọchị n'ahịa na ụlọ dị n'ahịa", "Ọnụ e rere ụlọ na ọnụ e debere ha", "Ndị agent na ndị na-azụ ụlọ"], answer: 2, why: "Ọ na-atụnyere ọnụ e rere ya na ọnụ e debere ya." },
            { objective: "O6", q: "Nchịkọta ahịa AI nwere ọnụọgụ i nyeghị ya. Gịnị ka ị ga-eme?", options: ["Hapụ ya; AI nwere data nke ugbu a", "Mee ka ọ bụrụ ọnụọgụ zuru oke", "Bugharịa ya n'okpuru peeji", "Wepụ ya ma lelee ọnụọgụ ọ bụla na isi iyi gị"], answer: 3, why: "AI enweghị data ahịa nke ugbu a a pụrụ ịtụkwasị obi, ya mere ị na-ewepụ ọnụọgụ e chepụtara ma tinye isi iyi gị na ụbọchị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ndị ahịa, ndị nwere mmasị na data ahịa",
        questions: [
          { objective: "O4", q: "Kedu nke a na-ekwesịghị itinye n'ngwa AI mgbe ọ bụla?", options: ["Ego pre-approval na aha onye na-azụ ụlọ", "\"6 showings this week\"", "\"Kitchen got good feedback\"", "\"[seller name]\""], answer: 0, why: "Ozi ego ndị ahịa bụ nzuzo." },
          { objective: "O5", q: "Gịnị bụ ezigbo ozi nsochi ụbọchị 7?", options: ["Ọ dịghị ihe", "\"Bịanye aka ugbu a!\" na-akpali ike", "Akara kredit ha (credit score)", "Ndụmọdụ bara uru maka ọnọdụ ha"], answer: 3, why: "Kọntaktị bara uru na-ewulite ntụkwasị obi." },
          { objective: "O6", q: "Ebee ka ọnụọgụ ahịa kwesịrị isi?", options: ["Ncheta AI", "MLS gị ma ọ bụ isi iyi ọzọ a pụrụ ịtụkwasị obi i wetara", "Echiche efu", "Onye agbata obi"], answer: 1, why: "AI enweghị data ahịa nke ugbu a a pụrụ ịtụkwasị obi." },
          { objective: "O6", q: "AI tinyere \"prices rose 12% this year\" mana i nyeghị ya ọnụọgụ ahụ. Ị ga:", options: ["Wepụ ya", "Hapụ ya", "Mee ka ọ karịa", "Tinye ya n'ịntanetị"], answer: 0, why: "Ejila ọnụọgụ ị na-enyeghị ma lelee." },
          { objective: "O6", q: "Gịnị bụ median price?", options: ["Ụgwọ ụlọ nkezi", "Ọnụ kacha elu", "Ọnụ ahịa nọ n'etiti: ọkara e rere karịrị ya, ọkara erughị ya", "Ọnụ e debere ụlọ"], answer: 2, why: "Median bụ ọnụọgụ nọ n'etiti." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ndị Na-ere Ụlọ na Ala",
    questions: [
      { objective: "O1", q: "Gịnị ka ị ga-enye AI iji dee nkọwa ụlọ?", options: ["Nọmba SSN onye na-ere ụlọ", "Naanị eziokwu e lelere", "Echiche efu", "Nkọwa ụlọ onye asọmpi"], answer: 1, why: "Eziokwu abanye, okwu ziri ezi apụta." },
      { objective: "O1", q: "MLS pụtara:", options: ["My Listing Site", "Main Loan System", "Market Law Statute", "Multiple Listing Service"], answer: 3, why: "Ndị agent na-ekekọrịta ụlọ dị n'ahịa na MLS." },
      { objective: "O1", q: "Gịnị mere ị ga-eji lelee sq ft na nkọwa ụlọ AI dere?", options: ["Ọ dịghị mkpa", "Ime ka ọ dị ogologo", "Maka egwuregwu", "Okwu ụgha nwere ike ibute mkpesa na nsogbu iwu"], answer: 3, why: "Eziokwu ezighi ezi na-ebute nsogbu." },
      { objective: "O2", q: "Ìgwè ole ka federal Fair Housing Act na-echebe?", options: ["Atọ", "Asaa", "Iri", "Abụọ"], answer: 1, why: "Agbụrụ, ụcha akpụkpọ, mba mmadụ si, okpukpe, nwoke ma ọ bụ nwanyị, ọnọdụ ezinụlọ, nkwarụ." },
      { objective: "O2", q: "Kedu nke bụ ihe dị n'ụlọ, ọ bụghị mmasị banyere ndị mmadụ?", options: ["\"No kids\"", "\"Ideal for a couple\"", "\"Single-level layout\"", "\"Great for young professionals\""], answer: 2, why: "Ọ na-akọwa ụlọ ahụ." },
      { objective: "O2", q: "Gịnị mere AI nwere ike ide okwu na-emebi fair housing?", options: ["O nwere ike i ṅomi ụkpụrụ ịkpa oke site n'ihe ọ mụtara", "Ọ maara iwu fair housing nke ọma", "Ọ dịghị mgbe ọ na-eme mperi", "Ọ bụ ọka iwu"], answer: 0, why: "Gụọ ihe AI dere mgbe niile." },
      { objective: "O2", q: "California ọ na-echebe ìgwè karịrị iwu federal?", options: ["Naanị na ngwụcha izu", "Mba, ọ dịghị mgbe", "Ee; lelee iwu steeti gị", "Naanị maka ụlọ mgbazinye"], answer: 2, why: "Ọtụtụ steeti, gụnyere California, na-echebe ìgwè ndị ọzọ." },
      { objective: "O3", q: "Mgbasa ozi ndị nwere license na-achọkarị:", options: ["Nọmba license na aha ụlọ ọrụ broker, dị ka iwu steeti na broker si kwuo", "Adreesị ụlọ gị", "Aha ndị ahịa", "Ọ dịghị ihe"], answer: 0, why: "Lelee iwu mgbasa ozi steeti gị." },
      { objective: "O3", q: "Email ahịa nye sphere gị ga-enwerịrị:", options: ["Usoro offer ndị ahịa", "Postal address na nhọrọ unsubscribe", "Onye zitere adịgboroja", "Ọ dịghị ihe"], answer: 1, why: "CAN-SPAM chọrọ ha abụọ." },
      { objective: "O3", q: "Gịnị bụ sphere gị?", options: ["Onye na-agbazinye ego", "Ihe gburugburu", "MLS", "Ndị ị maara nwere ike ịzụ, ire ma ọ bụ zigara gị ndị ahịa"], answer: 3, why: "Ndị ahịa gara aga, ndị enyi na ezinụlọ." },
      { objective: "O4", q: "Ozi kwa izu nye onye na-ere ụlọ gụnyere:", options: ["Ngosi, ihe ndị mmadụ kwuru, ndị lere ya na nzọụkwụ ọzọ", "Ozi ego ndị ahịa ndị ọzọ", "Okwuntughe gị", "Ọ dịghị ihe"], answer: 0, why: "Ihe ndị ahụ na-eme ka ndị na-ere ụlọ mara ihe na-eme." },
      { objective: "O4", q: "Kedu nke bụ ihe nnọchi?", options: ["Nọmba Social Security", "Aha zuru ezu na adreesị onye na-ere ụlọ", "Nọmba akaụntụ ụlọ akụ", "[seller name]"], answer: 3, why: "Ihe nnọchi na-egbochi ozi nzuzo ịbanye." },
      { objective: "O4", q: "Atụmatụ mkparịta ụka kwesịrị:", options: ["Ịdị n'ịntanetị", "Ịbanye na mkparịta ụka AI", "Ịnọ n'èzí ngwa AI", "Ịbụ nke e kesara ndị na-azụ ụlọ niile"], answer: 2, why: "Ọ bụ ozi nzuzo onye ahịa." },
      { objective: "O5", q: "Atụmatụ nsochi ụbọchị 30 nwere ihe dị ka:", options: ["Oku narị", "Kọntaktị anọ bara uru", "Ọ dịghị", "Ozi ederede na-akpali ike kwa ụbọchị"], answer: 1, why: "Ihe kwụsiri ike ma bara uru na-arụ ọrụ nke ọma." },
      { objective: "O5", q: "Ònye ka ị ga-ezigara email ma ọ bụ ozi ederede ahịa?", options: ["Ndị ị na-amaghị", "Onye ọ bụla ị chọtara nọmba ya", "Ndepụta e zụtara", "Ndị kwetara ịnụ olu gị"], answer: 3, why: "Nkwenye na-ebu ụzọ." },
      { objective: "O5", q: "Tupu i nye njikọ gaa na mmemme maka ndị na-azụ ụlọ nke mbụ, ị ga:", options: ["Chepụta iwu ya", "Tụkwasị njikọ AI obi", "Lelee peeji gọọmentị ma ọ bụ nke ezi ụlọ ọrụ ya", "Ghara ilele"], answer: 2, why: "Ozi mmemme na-agbanwe." },
      { objective: "O6", q: "Ụbọchị n'ahịa (days on market) na-atụ:", options: ["Ogologo oge ọ na-ewe ire ụlọ", "Awa open house", "Ụbọchị kọmịshọn", "Ụbọchị ezumike"], answer: 0, why: "Ọ na-egosi otu ahịa si agba ọsọ." },
      { objective: "O6", q: "Mgbe AI na-akọwa ọnụọgụ ahịa, ị kwesịrị ịgwa ya:", options: ["Chepụtakwuo ọnụọgụ", "Etinyela ọnụọgụ m na-enyeghị gị", "Buo amụma maka ọdịnihu", "Jiri weebụsaịtị ọ bụla"], answer: 1, why: "Nke a na-ebelata ọnụọgụ e chepụtara echepụta." },
      { objective: "O6", q: "Mgbe ole ka ị ga-esochi mgbe open house gachara?", options: ["Afọ ọzọ", "N'ime awa 24", "Ọ dịghị mgbe", "Naanị ma ọ bụrụ na ha kpọọ"], answer: 1, why: "Nsochi ngwa ngwa na-enweta ndị ahịa." },
      { objective: "O2", q: "Ihe ọmụmụ a bụ:", options: ["Ọ bụghị ndụmọdụ iwu; lelee HUD, onye nlekọta steeti gị na broker gị", "Ndụmọdụ iwu", "Akwụkwọ ikike (license)", "Akwụkwọ nkwekọrịta"], answer: 0, why: "Isi iyi gọọmentị na broker gị nwere okwu ikpeazụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      5,
      7,
      11,
      13,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Nkọwa ụlọ ziri ezi",
        objective: "O1",
        notYet: "Nkọwa ụlọ ahụ nwere eziokwu a na-elereghị anya, dị ka ihe na-adịghị n'ụlọ ahụ.",
        meets: "E lelere eziokwu ọ bụla ahịrị n'ahịrị na akwụkwọ ndekọ, onye na-ere ụlọ ma ọ bụ nleta gị.",
        exceeds: "Na-edekwa ebe eziokwu ndị dị mkpa si, dị ka sq ft."
      },
      {
        name: "Okwu fair housing",
        objective: "O2",
        notYet: "Otu ahịrị na-akọwa onye kwesịrị ibi n'ebe ahụ kama ụlọ ahụ.",
        meets: "Ahịrị ọ bụla na-akọwa naanị ụlọ ahụ na ihe ndị dị n'ime ya.",
        exceeds: "Na-elelekwa foto na ebe a na-etinye mgbasa ozi, ma nwee ike ịkọwa mgbanwe ọ bụla."
      },
      {
        name: "Ozi nzuzo n'ozi ndị ahịa",
        objective: "O4",
        notYet: "Aha onye ahịa na adreesị, ozi ego ma ọ bụ usoro offer banyere n'ngwa AI.",
        meets: "Ụdị ozi nye onye na-ere na onye na-azụ ụlọ na-eji ihe nnọchi, nwere nzọụkwụ ọzọ doro anya.",
        exceeds: "A na-edejupụta ihe nnọchi naanị n'email ma ọ bụ CRM nke agent n'onwe ya."
      },
      {
        name: "Atụmatụ nsochi ndị nwere mmasị",
        objective: "O5",
        notYet: "Ozi erughị anọ, ma ọ bụ ozi na-akpali ike ma ọ bụ a na-elereghị anya.",
        meets: "Ozi anọ bara uru n'ime ụbọchị 30 nwere oghere na ụbọchị ọzọ e dere ede.",
        exceeds: "E lelere njikọ mmemme na peeji gọọmentị ma ọ bụ nke ezi ụlọ ọrụ ma dee ya."
      },
      {
        name: "Nchịkọta ahịa na open house",
        objective: "O6",
        notYet: "Nchịkọta ahụ nwere ọnụọgụ na-esighị n'isi iyi gị.",
        meets: "Nchịkọta n'okwu dị mfe site n'ọnụọgụ nke gị nwere isi iyi na ụbọchị, na ndepụta ihe maka open house.",
        exceeds: "Ndepụta ahụ gụnyere nzọụkwụ nchekwa ụlọ ọrụ broker na nsochi n'ime awa 24."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị agent kwuru na ha na-eji atụmatụ nsochi kwụsiri ike n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị agent kwuru na ha na-azọpụta oge kwa izu na nkọwa ụlọ na ozi nye ndị ahịa",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara obere azụmahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị",
      "Ngwa enyemaka AI n'efu",
      "Eziokwu e lelere maka otu ụlọ n'ezie ma ọ bụ ọmụmaatụ, na ọnụọgụ nso nso a site na MLS gị",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Chetara ndị na-amụ ihe na ihe ọmụmụ a abụghị ndụmọdụ iwu; ajụjụ gbasara fair housing, mgbasa ozi na license na-aga na HUD, onye nlekọta steeti na broker ha.",
      "Meenụ omume n'otu: gụpụta nkọwa ụlọ AI dere n'olu dị elu ma chọpụta ihe egwu fair housing ọnụ.",
      "Jiri ọmụmaatụ nkọwa ụlọ na ihe nnọchi na klas; etinyela ezi ozi nzuzo ndị ahịa n'ngwa AI mgbe ọ bụla.",
      "Rịọ ndị na-amụ ihe ka ha lelee iwu ụlọ ọrụ broker ha gbasara ngwa AI tupu ha jiri ha na ndị ahịa.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
