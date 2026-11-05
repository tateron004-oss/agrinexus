"use strict";

// Koach Learn course (Igbo translation of shared/security-officer-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md. US course: US agency names and California rules are kept.

const BSIS_GUARD = { name: "California BSIS: Ndị nche (akwụkwọ ịrịọ, usoro ọzụzụ, akwụkwọ Power to Arrest)", url: "https://www.bsis.ca.gov/industries/guard.shtml" };
const BSIS_FACT = { name: "California BSIS: Akwụkwọ nkọwa ndebanye aha onye nche (Security Guard Registration)", url: "https://www.bsis.ca.gov/forms_pubs/guard_fact.pdf" };
const BSIS_TRAIN = { name: "California BSIS: Usoro ọzụzụ onye nche (ihe ọmụmụ na awa)", url: "https://www.bsis.ca.gov/industries/g_train.shtml" };
const BSIS_POA = { name: "California BSIS: Akwụkwọ ọzụzụ Power to Arrest", url: "https://www.bsis.ca.gov/forms_pubs/poa.pdf" };
const BSIS_VERIFY = { name: "California Department of Consumer Affairs: Lelee akwụkwọ ikike (Verify a license)", url: "https://search.dca.ca.gov/" };
const NY_DOS = { name: "New York Department of State: Akwụkwọ ikike onye nche", url: "https://dos.ny.gov/security-guard" };
const TX_DPS = { name: "Texas Department of Public Safety: Private Security Program", url: "https://www.dps.texas.gov/section/private-security" };
const FL_FDACS = { name: "Florida Department of Agriculture and Consumer Services: Division of Licensing (onye nche Class D)", url: "https://www.fdacs.gov/Business-Services/Private-Investigative-Recovery-and-Security-Licensing" };
const BLS_GUARDS = { name: "U.S. Bureau of Labor Statistics: Ndị nche (otu esi aghọ onye nche)", url: "https://www.bls.gov/ooh/protective-service/security-guards.htm" };

module.exports = {
  id: "security-officer-prep-ig",
  lang: "ig",
  translationOf: "security-officer-prep",
  category: "Workforce Development",
  name: "Nkwadebe Onye Nche (Guard Card)",
  skills: "Ịchọta iwu guard card steeti gị, Ịgagharị na ilekọta ọnụ ụzọ site na post orders, Ilele na ịkọ ihe n'ime ikike gị, Ime ka esemokwu dajụọ na ịzaghachi ihe mberede, Ide akụkọ ihe mere (incident report) doro anya, Ịhazi atụmatụ akwụkwọ ikike na ọrụ gị",
  outcome: "ịchọta ihe steeti gị chọrọ maka guard card ma dee nzọụkwụ iji nweta ya, ịgbaso post orders mgbe ị na-agagharị na n'ọnụ ụzọ, ịhọrọ omume ilele-na-ịkọ nke na-anọ n'ime ikike onye nche, ide akụkọ ihe mere doro anya nke bụ eziokwu, na ịme atụmatụ nwere ụbọchị iji nweta akwụkwọ ikike na ọrụ.",
  about: [
    "Ndị nche (security officers) na-echebe ndị mmadụ na ihe onwunwe n'ọfịs, ụlọ ahịa, ụlọ ọgwụ, ụlọ akwụkwọ, ụlọ nkwakọba ngwa ahịa, mmemme na ụlọ obibi. Ọtụtụ ọrụ a achọghị akwụkwọ mahadum, ndị were ọrụ na-ewekwa mmadụ n'afọ niile. Ihe ọmụmụ a bụ maka ndị na-achọ ọrụ, ndị na-alọta site n'ụlọ mkpọrọ, ndị bụbu ndị agha na ndị ntorobịa chọrọ ịmalite ọrụ a.",
    "Ị ga-amụta ihe onye nche na-eme na ihe ọ na-adịghị eme, otu guard card steeti si arụ ọrụ, otu e si agagharị ma lekọta ọnụ ụzọ site na post orders, otu ị ga-esi nọrọ jụụ ma nọrọ na nchekwa mgbe esemokwu ma ọ bụ ihe mberede mere, na otu e si ede akụkọ ihe mere nke onye isi gị, ọkàiwu ma ọ bụ onye uwe ojii ga-atụkwasị obi.",
    "Ihe dị mkpa: ihe ọmụmụ a na-akwado gị; ọ naghị enye gị akwụkwọ ikike. N'ọtụtụ steeti, ụlọ ọrụ gọọmentị steeti na-enye ndị nche akwụkwọ ikike, ị ga-erurịrị afọ 18, gafee nlele ndekọ mpụ (background check) ma mechaa ọzụzụ steeti chọrọ n'ụlọ akwụkwọ ma ọ bụ n'aka onye were ọrụ steeti kwadoro. Iwu dị iche n'otu steeti, ya mere ị ga-achọ peeji gọọmentị steeti gị. California bụ ọmụmaatụ anyị n'ihi na anyị lelere iwu ya na peeji gọọmentị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ ma ọ bụ n'ngwa ide akwụkwọ n'efu. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee ngwugwu njikere guard card: ihe steeti gị chọrọ e dere ka nzọụkwụ ya na peeji gọọmentị, ndepụta ịgagharị na ilekọta ọnụ ụzọ maka otu ebe nche omume, otu akụkọ ihe mere omume zuru oke, kaadị akpa nwere nzọụkwụ ilele-na-ịkọ na nke ihe mberede gị, na atụmatụ nwere ụbọchị iji mechaa ọzụzụ, tinye akwụkwọ ma nweta ọrụ, ya na ahịrị résumé nke bụ eziokwu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye gbara afọ 18 na karịa na-achọ ọrụ nche na-anaghị ebu égbè: ndị na-achọ ọrụ, ndị na-alọta site n'ụlọ mkpọrọ, ndị bụbu ndị agha na ndị ntorobịa. Ụfọdụ nwere ahụmahụ ndị uwe ojii agha, ụlọ mkpọrọ ma ọ bụ igbochi izu ohi n'ụlọ ahịa; ọtụtụ ka dị ọhụrụ n'ọrụ a.",
    startingPoint: "Ha nwere ike ịgụ obere fọm, ịgbaso ntụziaka ma jiri ekwentị. Ole na ole maara otu akwụkwọ ikike onye nche si arụ ọrụ na steeti ha, oke iwu nyere onye nche, ma ọ bụ otu e si ede akụkọ bụ eziokwu. Ụfọdụ na-eche na ọrụ a bụ ọrụ ndị uwe ojii.",
    gap: "Ọrụ nche bụ ngalaba buru ibu na-ewe ọtụtụ mmadụ, ụzọ isi banye na ya dịkwa ngwa, mana ndị mmadụ na-atụfu ọrụ ma merụọ ahụ mgbe ha gafere ikike ha, jiri ike ha na-ekwesịghị iji, ma ọ bụ dee akụkọ na-edoghị anya. Ndị na-amụ ihe chọrọ eziokwu banyere nzọụkwụ akwụkwọ ikike na steeti ha, omume ilele-na-ịkọ ndị were ọrụ chọrọ, na nka ide akụkọ doro anya, ka ha nweta akwụkwọ ikike, nweta ọrụ ma dowe ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọ bụla",
      "Akwụkwọ ikike dị n'aka steeti: ihe ọmụmụ a na-akụzi usoro ahụ na otu e si achọta peeji gọọmentị, ebe California bụ ọmụmaatụ e lelere",
      "Naanị ọrụ na-enweghị ngwa agha: égbè, osisi nche (baton), tear gas na ngwa agha ndị ọzọ chọrọ ikike nke ha na ọzụzụ ihu na ihu",
      "Nka aka dị ka enyemaka mbụ (first aid), CPR na nchebe onwe onye (defensive tactics) ka a na-amụta ihu na ihu n'aka onye nkuzi ruru eru",
      "Nlele ndekọ mpụ: a na-agwa ndị nwere ndekọ ka ha zaa eziokwu ma lelee iwu steeti ha ma ọ bụ mmemme enyemaka iwu maka ndị na-alọta",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ maka peeji steeti; akwụkwọ maka ndepụta na akụkọ"
    ],
    prerequisites: "Ọ dịghị. \"Ọrụ Ndị Ahịa Kacha Mma\" na \"Résumés, LinkedIn and Interviews\" ga-enye aka dị ka ihe ọmụmụ ndị ọzọ."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji peeji akwụkwọ ikike gọọmentị steeti gị", action: "idepụta nzọụkwụ iji nweta guard card na steeti gị", standard: "na-akpọ aha ụlọ ọrụ gọọmentị ahụ, iwu afọ, nlele ndekọ mpụ na ọzụzụ achọrọ tupu na mgbe e nyechara gị akwụkwọ ikike" },
    { id: "O2", condition: "Mgbe e nyere gị post orders", action: "ịgagharị ma lelee ndị na-abata n'ọnụ ụzọ", standard: "na-emetụ ihe ọ bụla dị na post orders ma na-ede ihe ị hụrụ na ihe i mere ya na oge ya" },
    { id: "O3", condition: "Mgbe e nyere gị ọnọdụ esemokwu, izu ohi ma ọ bụ ihe mberede", action: "ịhọrọ omume ilele-na-ịkọ nke na-anọ n'ime ikike onye nche", standard: "na-aza ọnọdụ 4 n'ime 5 nke ọma, ebe ị na-akpọ oku ihe mberede na mbụ" },
    { id: "O4", condition: "Mgbe ị hụrụ ma ọ bụ gụrụ banyere ihe mere", action: "ide akụkọ ihe mere bụ eziokwu", standard: "na-aza onye, gịnị, mgbe, ebee na otu o si mee, site n'iji eziokwu, ọ bụghị echiche, n'usoro oge" },
    { id: "O5", condition: "Site n'iji iwu steeti gị na ọrụ e depụtara n'obodo gị", action: "ide atụmatụ nwere ụbọchị iji nweta akwụkwọ ikike na ọrụ", standard: "ya na ụbọchị maka ọzụzụ, mkpịsị aka (fingerprints), akwụkwọ ịrịọ na ịrịọ ọrụ, na ahịrị résumé bụ eziokwu" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, guard card na ebe nche",
      lessons: [
        {
          title: "Ihe onye nche na-eme, na ihe ọ naghị eme",
          objectives: ["O3"],
          minutes: 5,
          goal: "Kọwaa ọrụ ndị bụ isi nke onye nche na oke ikike onye nche.",
          text: [
            "Onye nche na-echebe ndị mmadụ na ihe onwunwe. Ọrụ ụbọchị niile bụ ka a hụ gị, ilele anya, ilekọta ndị na-abata, ịgagharị, inyere ndị mmadụ aka, ịzaghachi alaam, na ide ihe mere. Ịnọ ebe a na-ahụ gị na ịmụ anya na-egbochi ọtụtụ nsogbu tupu ha amalite.",
            "Onye nche abụghị onye uwe ojii. N'ọtụtụ steeti, onye nche nwere otu ikike ijide mmadụ dị ka onye ọ bụla nkịtị, ọ karịghị ya. Ọtụtụ ndị were ọrụ na-agwa ndị nche ka ha \"lelee ma kọọ\" (observe and report): lelee nke ọma, kpọọ ndị uwe ojii ma ọ bụ onye isi gị, ma dee ya, kama ịchụ ma ọ bụ ijide mmadụ.",
            "Iwu onye were gị n'ọrụ (post orders) nwere ike isi ike karịa iwu obodo. Ọ bụrụ na post orders kwuru \"ejidela mmadụ\", ejidela, ọ bụrụgodị na iwu ga-ekwe. Ịgafe iwu e nyere gị nwere ike ime ka a chụọ gị n'ọrụ, gbaa gị akwụkwọ n'ụlọikpe ma ọ bụ merụọ gị ahụ.",
            "Ije ozi ndị mmadụ bụ ọkara ọrụ ahụ. Ị na-egosi ndị mmadụ ụzọ, na-enyere ndị ọbịa furu ụzọ aka, ma na-anọ nwayọ na ndị iwe were. Ndị nche na-anọ jụụ, na-abịa n'oge, ma na-ede akụkọ nke ọma bụ ndị a na-ebuli elu."
          ],
          words: [["Onye nche (security officer)", "onye a na-akwụ ụgwọ iji chebe ndị mmadụ na ihe onwunwe; a na-akpọkwa ya security guard."], ["Lelee ma kọọ (observe and report)", "lelee, kpọọ maka enyemaka ma dee ya, n'emetụghị mmadụ aka."], ["Post orders", "ntụziaka e dere maka otu ebe: ihe a ga-elele, mgbe, na ihe a ga-eme."], ["Ijide (detain)", "igbochi mmadụ ịpụ. Onye nche ga-eme ya naanị ma iwu na post orders kwere."], ["Igbochi (deter)", "ịkwụsị nsogbu tupu ọ malite, dịka ọmụmaatụ site n'ime ka a hụ gị."]],
          slides: [
            { title: "Ọrụ ụbọchị niile", bullets: ["Mee ka a hụ gị ma mụrụ anya", "Lekọta ndị na-abata ma gagharịa", "Nyere ndị mmadụ aka ma zaghachi alaam", "Dee ihe mere"] },
            { title: "Ọ bụghị onye uwe ojii", bullets: ["Ọ na-enwekarị otu ikike ijide mmadụ dị ka onye nkịtị", "Ọtụtụ ndị were ọrụ: lelee ma kọọ", "Kpọọ ndị uwe ojii; achụla, ejidela mmadụ"] },
            { title: "Post orders bụ ihe mbụ", bullets: ["Ha nwere ike isi ike karịa iwu", "Ọ bụrụ na ha sị ejidela, ejidela"] },
            { title: "Ihe na-eme ka e bulie gị elu", bullets: ["Ije ozi ndị mmadụ jụụ na nkwanye ùgwù", "Ịbịa n'oge, oge ọrụ ọ bụla", "Akụkọ doro anya, bụrụ eziokwu"] }
          ],
          sources: [BLS_GUARDS, BSIS_POA],
          tryIt: "See kọlụm abụọ n'akwụkwọ: \"Onye nche na-eme\" na \"Onye nche anaghị eme\". Tinye ihe ndị a n'otu kọlụm: ịgagharị n'ebe a na-adọba ụgbọala, iji ike nyochaa akpa mmadụ, igosi onye ọbịa ụzọ, ịchụ onye ohi ụlọ ahịa ruo n'okporo ụzọ, ịkpọ 911 maka ọgụ, ide akụkọ, itinye mmadụ ígwè aka mgbe post orders kwuru lelee ma kọọ. Mgbe ahụ dee otu ahịrịokwu na-akọwa ihe kpatara ya.",
          youCanNow: "ịkọwa ihe onye nche na-eme na oke ikike onye nche.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ọtụtụ ndị were ọrụ pụtara site na \"lelee ma kọọ\"?", options: ["Chụọ onye ọ bụla gbara ọsọ", "Lelee, kpọọ maka enyemaka ma dee ya", "Nyochaa akpa onye ọ bụla", "Jide ndị mmadụ maka iwu ọ bụla ha mebiri"], answer: 1, why: "Lelee ma kọọ pụtara na ị na-ele anya, kpọọ ndị uwe ojii ma ọ bụ onye isi gị, ma dee ya, n'emetụghị mmadụ aka." },
            { objective: "O3", q: "Iwu nwere ike ikwe ka onye nkịtị jide mmadụ, mana post orders gị kwuru \"ejidela mmadụ\". Gịnị ka ị ga-eme?", options: ["Jide ya n'agbanyeghị", "Jụọ onye ahụ a na-enyo enyo ihe ọ chọrọ", "Gbasoo post orders: lelee, kpọọ ma kọọ", "Hapụ ebe nche gị"], answer: 2, why: "Post orders nwere ike isi ike karịa iwu, ị ga-agbasorịrị ha." }
          ]
        },
        {
          title: "Inweta guard card gị: otu akwụkwọ ikike steeti si arụ ọrụ",
          objectives: ["O1"],
          minutes: 6,
          goal: "Chọta ụlọ ọrụ gọọmentị na-enye akwụkwọ ikike na steeti gị ma depụta nzọụkwụ iji nweta guard card.",
          text: [
            "Ọtụtụ steeti na-enye ndị nche akwụkwọ ikike site n'otu ụlọ ọrụ gọọmentị steeti. Usoro a na-ahụkarị: rụọ afọ 18 ma ọ dịkarịa ala, gafee nlele ndekọ mpụ nwere mkpịsị aka, ma mechaa ọzụzụ n'ụlọ akwụkwọ ma ọ bụ n'aka onye were ọrụ steeti kwadoro. Ọtụtụ steeti chọkwara ọzụzụ kwa afọ. Aha ya dị iche: \"guard card\", \"registration\" ma ọ bụ \"Class D license\".",
            "California bụ ọmụmaatụ anyị lelere. Ụlọ ọrụ ahụ bụ Bureau of Security and Investigative Services (BSIS). Ị ga-erurịrị afọ 18, gafee nlele ndekọ mpụ nke Department of Justice na FBI site na mkpịsị aka Live Scan, ma mechaa ọzụzụ Power to Arrest tupu e nye gị ndebanye aha ahụ. Mgbe ahụ ị ga-emecha awa 32 nke ọzụzụ nka onye nche n'ime ọnwa 6 mbụ, na awa 8 nke ọzụzụ na-aga n'ihu kwa afọ. Ị na-etinye akwụkwọ n'ịntanetị na BreEZe ma ọ bụ site n'ozi, ị na-ebukwa kaadị gị mgbe ị nọ n'ọrụ.",
            "Steeti ndị ọzọ nwere ụlọ ọrụ nke ha, dịka ọmụmaatụ New York Department of State, Private Security Program nke Texas Department of Public Safety, na Division of Licensing nke Florida Department of Agriculture and Consumer Services. Chọọ peeji gọọmentị steeti gị maka awa ọzụzụ, ụgwọ na fọm ugbu a. Atụkwasịla mgbasa ozi ọzụzụ obi maka iwu.",
            "Ọ bụrụ na ị nwere ndekọ mpụ: steeti ọ bụla na-ekpebi ndekọ ndị dị mkpa. Zaa ajụjụ ọ bụla n'eziokwu, n'ihi na azịza ụgha n'onwe ya nwere ike ime ka a jụ gị. Mmemme maka ndị na-alọta ma ọ bụ ọfịs enyemaka iwu (legal aid) nwere ike inyere gị aka ịgụ iwu steeti gị."
          ],
          steps: ["Chọọ ụlọ ọrụ na-enye ndị nche akwụkwọ ikike na steeti gị ma mepee peeji .gov gọọmentị ahụ.", "Dee: afọ kacha nta, nzọụkwụ nlele ndekọ mpụ na mkpịsị aka.", "Dee ọzụzụ achọrọ tupu e nye gị akwụkwọ ikike na mgbe e nyechara (ọnwa mbụ, kwa afọ).", "Chọta akwụkwọ ịrịọ (n'ịntanetị ma ọ bụ akwụkwọ) na peeji ụgwọ; echela echiche maka ụgwọ ahụ.", "Dee otu e si emeghari ya na ogologo oge akwụkwọ ikike ahụ na-adị."],
          words: [["Guard card", "aha a na-akpọkarị akwụkwọ ikike ma ọ bụ ndebanye aha onye nche nke steeti."], ["BSIS", "Bureau of Security and Investigative Services nke California, nke na-edebanye aha ndị nche na California."], ["Live Scan", "ịse mkpịsị aka n'eletrọnịk e ji eme nlele ndekọ mpụ na California na steeti ndị ọzọ."], ["Nlele ndekọ mpụ (background check)", "nchọta n'ime ndekọ mpụ, nke steeti na FBI na-emekarị, tupu e nye akwụkwọ ikike."], ["Ọzụzụ na-aga n'ihu", "ọzụzụ ị ga-anọgide na-eme mgbe e nyechara gị akwụkwọ ikike, na-abụkarị kwa afọ."]],
          slides: [
            { title: "Usoro a na-ahụkarị", bullets: ["Afọ 18 ma ọ dịkarịa ala", "Nlele ndekọ mpụ nwere mkpịsị aka", "Ọzụzụ akwadoro; ọtụtụ steeti chọkwara kwa afọ"] },
            { title: "Ọmụmaatụ California (BSIS)", bullets: ["Ọzụzụ Power to Arrest tupu e nye kaadị", "Awa 32 nke ọzụzụ nka n'ime ọnwa 6", "Awa 8 nke ọzụzụ na-aga n'ihu kwa afọ"] },
            { title: "Steeti ndị ọzọ", bullets: ["NY: Department of State", "TX: DPS Private Security Program", "FL: FDACS Division of Licensing (Class D)", "Lelee peeji gọọmentị, ọ bụghị mgbasa ozi"] },
            { title: "Ọ bụrụ na ị nwere ndekọ", bullets: ["Steeti ọ bụla na-ekpebi ndekọ ndị dị mkpa", "Zaa ajụjụ ọ bụla n'eziokwu", "Jụọ mmemme ndị na-alọta ma ọ bụ legal aid"] }
          ],
          sources: [BSIS_FACT, BSIS_TRAIN, NY_DOS, TX_DPS, FL_FDACS, BLS_GUARDS],
          tryIt: "Mepee peeji akwụkwọ ikike gọọmentị steeti gị (ma ọ bụ akwụkwọ nkọwa BSIS nke California ma ọ bụrụ na ị na-eme omume). N'akwụkwọ, dee nzọụkwụ guard card steeti gị n'usoro: ụlọ ọrụ, afọ, nlele ndekọ mpụ, ọzụzụ tupu kaadị, ọzụzụ mgbe e mesịrị, otu e si etinye akwụkwọ, na adreesị peeji ahụ.",
          youCanNow: "ịchọta ụlọ ọrụ na-enye akwụkwọ ikike na steeti gị ma depụta nzọụkwụ iji nweta guard card.",
          quickCheck: [
            { objective: "O1", q: "Na California, olee ọzụzụ a ga-emecharịrị tupu e nye ndebanye aha onye nche?", options: ["Ọzụzụ égbè", "Ọzụzụ Power to Arrest", "Ọzụzụ osisi nche (baton)", "Ọ dịghị ọzụzụ ọ bụla"], answer: 1, why: "BSIS kwuru na a ga-emecharịrị ọzụzụ Power to Arrest tupu e nye ndebanye aha ahụ." },
            { objective: "O1", q: "Mgbasa ozi ọzụzụ kwuru na steeti gị chọrọ naanị klas awa 2 n'ịntanetị. Gịnị ka ị ga-eme?", options: ["Kwere mgbasa ozi ahụ", "Jụọ enyi gị", "Kwụọ ụgwọ ma tụọ anya", "Lelee peeji gọọmentị nke ụlọ ọrụ steeti ahụ"], answer: 3, why: "Iwu na-agbanwe ma dị iche n'otu steeti; naanị peeji gọọmentị nke ụlọ ọrụ ahụ ka a pụrụ ịtụkwasị obi." }
          ]
        },
        {
          title: "Post orders, ịgagharị na ilekọta ọnụ ụzọ",
          objectives: ["O2"],
          minutes: 5,
          goal: "Gagharịa ma lelee ndị na-abata n'ọnụ ụzọ site n'ịgbaso post orders e dere ede.",
          text: [
            "Ebe ọ bụla nwere post orders. Ha na-agwa gị awa ọrụ gị, ebe ị ga-agagharị na ugboro ole, ọnụ ụzọ ndị ị ga-elele, onye nwere ike ịbata, ihe ị ga-eme mgbe alaam dara, na onye ị ga-akpọ. Gụọ ha na mmalite oge ọrụ ọ bụla, ma jụọ onye isi gị maka ihe ọ bụla na-edoghị anya.",
            "Mgbe ị na-agagharị, gbanwee oge gị ka onye ọ bụla ghara ịma mgbe ị ga-abịa. Jiri anya, ntị na imi gị: lelee ọnụ ụzọ mepere emepe, mkpọchi mebiri emebi, mmiri na-agba, anwụrụ ọkụ, ụzọ mgbapụ ọkụ e gbochiri, ọkụ nwụrụ anwụ na ndị mmadụ nọ ebe ha na-ekwesịghị ịnọ. Dee nlele ọ bụla na ndekọ ọrụ ụbọchị gị (daily activity log) ya na oge ya.",
            "Ilekọta ọnụ ụzọ (access control) pụtara na ọ bụ naanị ndị kwesịrị ekwesị na-abata. Lelee baajị ma ọ bụ ID dị ka post orders si kwuo, debanye aha ndị ọbịa mgbe ha batara na mgbe ha pụrụ, nye ha kaadị ọbịa, ekwekwala ka onye ọ bụla soro gị n'azụ banye n'ọnụ ụzọ akpọchiri akpọchi (tailgating). Nọrọ nwayọ ma guzosie ike: \"Ndo, achọrọ m ịhụ baajị gị.\"",
            "Jiri redio ma ọ bụ ekwentị gị dị ka ebe ahụ si kwuo: ozi dị mkpụmkpụ, doro anya, ya na ebe ị nọ. Mgbe oge ọrụ na-agbanwe, gwa onye nche na-esote ihe ka mepere emepe ma nyefee ya ndekọ ahụ."
          ],
          steps: ["Gụọ post orders na ndekọ oge ọrụ gara aga.", "Lelee redio ma ọ bụ ekwentị gị na igodo gị.", "Gagharịa ebe ọ bụla dị na post orders, n'oge dị iche iche.", "N'ọnụ ụzọ: lelee ID ma ọ bụ baajị, debanye aha ndị ọbịa, gbochie tailgating.", "Dee nlele ọ bụla na ihe ọ bụla dị iche ya na oge ya.", "Gwa onye nche na-esote ihe mere mgbe oge ọrụ na-agbanwe."],
          words: [["Ịgagharị (patrol)", "ije ma ọ bụ ịnya ụgbọala gburugburu ebe n'ụzọ a kara aka iji chọọ nsogbu."], ["Ilekọta ọnụ ụzọ (access control)", "ime ka ọ bụ naanị ndị na ụgbọala a kwadoro na-abata."], ["Tailgating", "mgbe onye ọ bụla soro onye a kwadoro n'azụ banye n'ọnụ ụzọ akpọchiri akpọchi n'egosighị ID."], ["Ndekọ ọrụ ụbọchị (daily activity log)", "ndekọ e dere ede nke onye nche maka nlele na ihe ọ bụla mere n'oge ọrụ, ya na oge ha."]],
          slides: [
            { title: "Mmalite oge ọrụ", bullets: ["Gụọ post orders na ndekọ gara aga", "Lelee redio, ekwentị na igodo", "Jụọ maka ihe ọ bụla na-edoghị anya"] },
            { title: "Mgbe ị na-agagharị", bullets: ["Gbanwee oge gị", "Ọnụ ụzọ, mkpọchi, mmiri na-agba, anwụrụ ọkụ, ụzọ mgbapụ ọkụ, ọkụ", "Dee nlele ọ bụla ya na oge ya"] },
            { title: "N'ọnụ ụzọ", bullets: ["Lelee baajị ma ọ bụ ID dị ka iwu si kwuo", "Debanye aha ndị ọbịa na-abata na ndị na-apụ", "Gbochie tailgating: nwayọ ma guzosie ike"] },
            { title: "Njedebe oge ọrụ", bullets: ["Gwa onye nche na-esote ihe mere", "Nyefee ndekọ ahụ"] }
          ],
          sources: [BSIS_TRAIN, BLS_GUARDS],
          tryIt: "Họrọ ebe nche omume: ụlọ obibi gị, ọba akwụkwọ ma ọ bụ ụlọ ahịa ị maara. Dee ahịrị ise nke post orders maka ya (awa, ebe ịgagharị, iwu ọnụ ụzọ, onye a ga-akpọ). Mgbe ahụ dee ndekọ ọrụ ụbọchị nke otu awa maka ebe ahụ, nwere opekata mpe ihe anọ e dere ya na oge ha, gụnyere otu nsogbu ị hụrụ na ihe i mere.",
          youCanNow: "ịgagharị ma lelee ndị na-abata n'ọnụ ụzọ site na post orders e dere ede, ma dee ha.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere ị ga-eji gbanwee oge ịgagharị gị?", options: ["Ka onye ọ bụla ghara ịma mgbe ị ga-abịa", "Iji gwụchaa ngwa ngwa", "N'ihi na redio kwuru", "Iji wụfee ụfọdụ nlele"], answer: 0, why: "Onye ojọọ na-ezere ịgagharị a na-amata oge ya ngwa ngwa; oge dị iche iche na-egbochi nsogbu." },
            { objective: "O2", q: "Onye na-enweghị baajị na-abata n'azụ onye ọrụ ozugbo. Gịnị bụ nke a?", options: ["Ịgagharị", "Tailgating", "Ilele anya", "Ide ndekọ"], answer: 1, why: "Tailgating bụ ịso onye n'azụ banye n'ọnụ ụzọ a na-elekọta n'egosighị ID." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, guard card na ebe nche",
        questions: [
          { objective: "O3", q: "N'ọtụtụ steeti, kedu ka ikike onye nche ijide mmadụ si dị ma e jiri ya tụnyere nke onye nkịtị?", options: ["Ọ ka ukwuu, dị ka nke onye uwe ojii", "Ọ dịghị ma ọlị n'ọnọdụ niile", "Naanị na ngwụcha izu", "Ọ dị ihe dị ka otu ihe ahụ dị ka nke onye nkịtị ọ bụla"], answer: 3, why: "N'ọtụtụ steeti, onye nche nwere ikike ijide mmadụ nke onye nkịtị, ọ karịghị ya." },
          { objective: "O1", q: "Olee nke so n'usoro guard card a na-ahụkarị n'ọtụtụ steeti?", options: ["Akwụkwọ mahadum", "Inwe ụgbọala", "Nlele ndekọ mpụ nwere mkpịsị aka", "Ikike égbè"], answer: 2, why: "Ọtụtụ steeti chọrọ nlele ndekọ mpụ nwere mkpịsị aka, afọ 18 na ọzụzụ akwadoro." },
          { objective: "O1", q: "Na California, awa ole nke ọzụzụ na-aga n'ihu ka onye nche ga-emecha kwa afọ?", options: ["Awa 8", "Ọ dịghị ọzụzụ", "Awa 40", "Awa 1"], answer: 0, why: "BSIS chọrọ awa 8 nke ọzụzụ na-aga n'ihu kwa afọ." },
          { objective: "O2", q: "Ebee ka ị ga-achọta ọnụ ụzọ ndị ị ga-elele na onye ị ga-akpọ n'ebe ọrụ gị?", options: ["Na mgbasa ozi ọzụzụ", "Na post orders", "N'aka onye ọbịa", "Na soshal midia"], answer: 1, why: "Post orders bụ ntụziaka e dere ede maka ebe ahụ." },
          { objective: "O2", q: "Mgbe ị na-agagharị, ị hụrụ na igbe gbochiri ụzọ mgbapụ ọkụ. Gịnị ka ị ga-eme?", options: ["Leghara ya anya; ọ bụghị ọrụ gị", "Hapụ akwụkwọ ozi n'elu igbe ndị ahụ", "Chere oge ọrụ na-esote", "Kọọ ya ma dee ya ya na oge ya, dị ka post orders si kwuo"], answer: 3, why: "Ụzọ mgbapụ e gbochiri bụ ihe egwu nchekwa a ga-akọ ma dee ozugbo." }
        ]
      }
    },
    {
      name: "Isi 2: Esemokwu, ihe mberede, akụkọ na inweta ọrụ",
      lessons: [
        {
          title: "Ime ka esemokwu dajụọ, iji ike na ihe mberede",
          objectives: ["O3"],
          minutes: 6,
          goal: "Họrọ ụzọ jụụ na nke nchekwa iji zaghachi esemokwu, izu ohi ma ọ bụ ihe mberede.",
          text: [
            "Enwere ike iji okwu mee ka ọtụtụ esemokwu dajụọ. Nọrọ n'ebe dị anya nke nchekwa, guzoro n'akụkụ, hapụ aka gị mepere emepe ebe a na-ahụ ha, ma kwuo okwu nwayọ na ntakịrị olu. Gee ntị, kpọọ onye ahụ aha ya ma ọ bụrụ na ị maara ya, ma nye ya nhọrọ: \"Ị nwere ike ichere ebe a ma ọ bụ m kpọọ onye njikwa gị.\" Esela okwu, emetụla ya aka, egbochikwala ya ụzọ.",
            "Iji ike (use of force) bụ akụkụ kachasị dị mkpa n'ọrụ a. Steeti na-akụzi ya n'ọzụzụ ha (California chọrọ ọzụzụ Appropriate Use of Force na Power to Arrest). Iwu ị ga-echeta: naanị ike iwu na post orders gị kwere, naanị mgbe ọ dị mkpa, kwụsịkwa ozugbo ọ dịghịzi mkpa. A na-agwakarị ọtụtụ ndị nche na-enweghị ngwa agha ka ha pụọ ma kpọọ ndị uwe ojii kama.",
            "Izu ohi: lelee, cheta otu onye ahụ dị, kpọọ ndị uwe ojii ma ọ bụ onye isi gị dị ka iwu gị si kwuo, achụkwala ya ruo n'okporo ụzọ ma ọ bụ ebe a na-adọba ụgbọala. Nchekwa gị na nke ndị ọzọ dị mkpa karịa ngwa ahịa.",
            "Ihe mberede: maka ọkụ, ihe mberede ahụike, ọgụ ma ọ bụ ngwa agha, kpọọ 911 (ma ọ bụ nọmba ihe mberede obodo gị) na mbụ, mgbe ahụ gbasoo atụmatụ ihe mberede nke ebe ahụ: dọọ ndị mmadụ aka ná ntị, duru ha gaa n'ụzọ mgbapụ, zute ndị ọrụ enyemaka ma gwa ha ihe ị hụrụ. A na-amụta enyemaka mbụ na CPR ma nweta asambodo ha ihu na ihu n'aka onye nkuzi ruru eru, dịka ọmụmaatụ site na American Red Cross ma ọ bụ American Heart Association."
          ],
          steps: ["Lelee: onwere onye nọ n'ihe egwu? Ọ bụrụ ee, kpọọ 911 na mbụ.", "Nọrọ n'ebe dị anya nke nchekwa, nwee ụzọ ị ga-esi gbapụ.", "Kwuo okwu nwayọ; gee ntị; nye nhọrọ.", "Ọ bụrụ na ọ naghị adajụ, laghachi azụ ma kpọọ ndị uwe ojii ma ọ bụ onye isi gị.", "Gbasoo atụmatụ ihe mberede nke ebe ahụ; duru ndị mmadụ pụọ; zute ndị ọrụ enyemaka.", "Dee ya ozugbo ọ dị mma."],
          words: [["Ime ka iwe dajụọ (de-escalation)", "iji okwu jụụ na omume ahụ iji belata iwe mmadụ."], ["Iji ike (use of force)", "omume ọ bụla e ji ahụ achịkwa mmadụ; ndị nche nwere ike iji naanị ihe iwu na iwu e nyere ha kwere."], ["Atụmatụ ihe mberede", "nzọụkwụ e dere ede nke ebe ahụ maka ọkụ, ihe mberede ahụike, ngwa agha na ịpụ n'ụlọ."], ["Ịpụ n'ụlọ (evacuation)", "ime ka onye ọ bụla pụọ n'ụlọ n'udo."]],
          slides: [
            { title: "Jiri okwu mee ka ọ dajụọ", bullets: ["Ebe dị anya nke nchekwa, aka mepere emepe, guzoro n'akụkụ", "Kwuo nwayọ; gee ntị; nye nhọrọ", "Esela okwu, emetụla, egbochila mmadụ ụzọ"] },
            { title: "Iji ike", bullets: ["Naanị ihe iwu na iwu e nyere gị kwere", "Naanị mgbe ọ dị mkpa; kwụsị mgbe ọ dịghịzi", "Ọtụtụ ndị nche na-enweghị ngwa agha: laghachi azụ ma kpọọ"] },
            { title: "Izu ohi", bullets: ["Lelee ma cheta otu onye ahụ dị", "Kpọọ ndị uwe ojii ma ọ bụ onye isi gị", "Achụla; ndụ mmadụ ka ngwa ahịa mkpa"] },
            { title: "Ihe mberede", bullets: ["Kpọọ 911 (ma ọ bụ nọmba obodo) na mbụ", "Gbasoo atụmatụ ihe mberede; duru ndị mmadụ pụọ", "Zute ndị ọrụ enyemaka ma gwa ha ihe ị hụrụ"] }
          ],
          sources: [BSIS_TRAIN, BSIS_POA],
          tryIt: "Mee omume ya na enyi gị ma ọ bụ n'ihu enyo. Ọnọdụ: onye ọbịa na-eti mkpu n'ihu tebụl nnabata n'ihi na ọ pụghị ịrịgo n'enweghị baajị. Kwuo n'olu ahịrịokwu atọ jụụ, gụnyere otu nhọrọ ị nyere ya. Mgbe ahụ dee oge ị ga-alaghachi azụ ma kpọọ onye isi gị ma ọ bụ ndị uwe ojii.",
          youCanNow: "ịhọrọ ụzọ jụụ na nke nchekwa iji zaghachi esemokwu, izu ohi ma ọ bụ ihe mberede, n'ime ikike gị.",
          quickCheck: [
            { objective: "O3", q: "Mmadụ dara n'ala n'ụlọ nnabata, ọ naghịkwa eku ume nke ọma. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Dee akụkọ ahụ", "Kpọọ onye isi gị ma chere", "Kpọọ 911, mgbe ahụ gbasoo atụmatụ ihe mberede", "Chọọ ID ya"], answer: 2, why: "N'ihe mberede ahụike, ị na-ebu ụzọ kpọọ 911 (ma ọ bụ nọmba obodo gị)." },
            { objective: "O3", q: "Onye ohi ụlọ ahịa ji ngwa ahịa gbapụ n'ebe a na-adọba ụgbọala. Iwu gị kwuru lelee ma kọọ. Gịnị ka ị ga-eme?", options: ["Dee otu o si dị na ụzọ o si gaa ma kpọọ dị ka iwu gị si kwuo", "Chụọ ya ruo n'etiti ụgbọala", "Napụ ya akpa ya", "Jiri ụgbọala gị gbochie nke ya"], answer: 0, why: "Ị na-anọ na nchekwa, chịkọta eziokwu ma kpọọ; ngwa ahịa erughị ndụ mmadụ." }
          ]
        },
        {
          title: "Lelee, kọwaa ma dee akụkọ ihe mere",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dee akụkọ ihe mere bụ eziokwu nke na-aza onye, gịnị, mgbe, ebee na otu o si mee.",
          text: [
            "Onye isi gị, onye ahịa ụlọ ọrụ (client), ụlọ ọrụ inshọransị, ndị uwe ojii ma ọ bụ ụlọikpe nwere ike ịgụ akụkọ gị, mgbe ụfọdụ ọtụtụ ọnwa e mesịa. Ezigbo akụkọ na-eme ka onye ọbịa hụ kpọmkwem ihe mere. Ọtụtụ ndị nche na-atụfu ntụkwasị obi n'ihi na akụkọ ha anaghị edo anya.",
            "Dee eziokwu, ọ bụghị echiche. Ọ bụghị \"ọ ṅụbigara mmanya ókè\" kama \"ọ na-esi isi mmanya, na-ama jijiji, okwu ya na-agbagọkwa\". Ọ bụghị \"nwoke a na-enyo enyo\" kama \"nwoke dị ihe dị ka afọ 30, ogologo ya dị ihe dị ka 6 feet, jaket uhie nwere okpu, akpa azụ ojii, gagharịrị n'etiti ụgbọala a dọbara ma nwaa njide ọnụ ụzọ abụọ\".",
            "Zaa onye, gịnị, mgbe, ebee na otu o si mee, n'usoro oge. Nye ụbọchị na oge kpọmkwem, ebe kpọmkwem, ndị metụtara ya na ndị akaebe, ihe gị onwe gị hụrụ ma nụ, ihe i mere, na onye ị kpọrọ na mgbe. Dee kpọmkwem okwu ndị mmadụ kwuru n'ime akara ntụnye okwu (quotes).",
            "Dee ya ozugbo ọ dị mma, mgbe ị ka na-echeta. Jiri \"m\" (\"Ahụrụ m\"), ahịrịokwu dị mkpụmkpụ na aha ziri ezi. Echela echiche, atụkwasịla ihe, ahapụkwala ihe. Ọ bụrụ na i mehiere, dozie ya otu onye were gị n'ọrụ si kwuo; agbanwela akụkọ ma emechaa ka o yie ka ọ ka mma."
          ],
          steps: ["Ụbọchị, oge na ebe kpọmkwem.", "Onye: gị onwe gị, ndị metụtara ya, ndị akaebe (aha na otu ha dị).", "Ihe mere, n'usoro oge, ya na ihe gị onwe gị hụrụ ma nụ.", "Ihe i mere na onye ị kpọrọ, ya na oge.", "Okwu kpọmkwem n'ime quotes; eziokwu, ọ bụghị echiche.", "Gụọ ya ọzọ; bịanye aka dị ka onye were gị n'ọrụ chọrọ."],
          words: [["Akụkọ ihe mere (incident report)", "ndekọ e dere ede nke bụ eziokwu banyere ihe mere dị ka izu ohi, mmerụ ahụ, ọgụ ma ọ bụ alaam."], ["Onye akaebe", "onye hụrụ ma ọ bụ nụrụ ihe mere."], ["Eziokwu (fact)", "ihe gị onwe gị hụrụ, nụrụ ma ọ bụ tụrụ."], ["Echiche (opinion)", "ihe ị chere ma ọ bụ ị na-eche echiche, dị ka \"o yiri onye mere ya\"."]],
          slides: [
            { title: "Onye na-agụ akụkọ gị?", bullets: ["Onye isi, client, ụlọ ọrụ inshọransị, ndị uwe ojii, ụlọikpe", "Ọ ga-edo anya nye onye ọbịa, ọtụtụ ọnwa e mesịa"] },
            { title: "Eziokwu, ọ bụghị echiche", bullets: ["Ọ bụghị \"ọ ṅụbigara\": ọ na-esi isi mmanya, na-ama jijiji, okwu na-agbagọ", "Kọwaa ndị mmadụ: afọ, ogologo, uwe, akpa"] },
            { title: "Onye, gịnị, mgbe, ebee, otu", bullets: ["Ụbọchị, oge kpọmkwem, ebe kpọmkwem", "Ndị metụtara ya na ndị akaebe", "Ihe ị hụrụ, ihe i mere na onye ị kpọrọ"] },
            { title: "Dee ya nke ọma", bullets: ["Ozugbo ọ dị mma", "\"M\", ahịrịokwu dị mkpụmkpụ, okwu kpọmkwem", "Agbanwela ya ma emechaa ka o yie ka ọ ka mma"] }
          ],
          sources: [BSIS_TRAIN],
          tryIt: "Lelee ihe ọ bụla na-eme n'ihu ọha ruo nkeji 2 (okporo ụzọ jupụtara na mmadụ, ọnụ ụzọ ụlọ ahịa ma ọ bụ obere vidiyo na-enweghị ụda). Mgbe ahụ dee akụkọ ihe mere omume: ụbọchị, oge, ebe, ndị mmadụ a kọwara site n'eziokwu, ihe mere n'usoro oge, na ihe ị gaara eme na onye ị gaara akpọ. Dọọ ahịrị n'okpuru okwu echiche ọ bụla ma dee ha ọzọ ka ha bụrụ eziokwu.",
          youCanNow: "ide akụkọ ihe mere bụ eziokwu nke na-aza onye, gịnị, mgbe, ebee na otu o si mee.",
          quickCheck: [
            { objective: "O4", q: "Olee ahịrịokwu kwesịrị ịdị n'akụkọ ihe mere?", options: ["Nwoke ahụ yiri onye ohi.", "O doro anya na ọ ṅụbigara mmanya ókè.", "N'elekere 9:42 p.m. nwoke yi jaket uhie nwara njide ọnụ ụzọ ụgbọala abụọ na Row C.", "Ihe ọjọọ na-eme."], answer: 2, why: "Ọ na-enye oge, ebe, otu onye ahụ dị na ihe o mere dị ka eziokwu, ọ bụghị echiche." },
            { objective: "O4", q: "Olee mgbe ị ga-ede akụkọ ahụ?", options: ["N'izu na-abịa", "Ozugbo ọ dị mma, mgbe ị ka na-echeta", "Naanị ma ndị uwe ojii jụọ", "Mgbe gị na onye ọ bụla kwurịtara iji kwekọrịta n'otu akụkọ"], answer: 1, why: "Ide ya ngwa ngwa na-eme ka nkọwa ahụ zie ezi." }
          ]
        },
        {
          title: "Atụmatụ guard card gị na inweta ọrụ",
          objectives: ["O5", "O1"],
          minutes: 5,
          goal: "Dee atụmatụ nwere ụbọchị iji mechaa ọzụzụ, rịọ maka guard card ma nweta ọrụ.",
          text: [
            "Tụgharịa nzọụkwụ steeti gị ka ha bụrụ ụbọchị. Dịka ọmụmaatụ: izu 1, chọta ụlọ akwụkwọ ọzụzụ akwadoro ma ọ bụ onye were ọrụ na-azụ ndị nche ọhụrụ; izu 2, mechaa ọzụzụ achọrọ tupu kaadị; izu 3, see mkpịsị aka ma tinye akwụkwọ; mgbe ahụ rịọ maka ọrụ mgbe ụlọ ọrụ ahụ na-enyocha akwụkwọ ịrịọ gị. Na California, BSIS kwuru ka ị chere ihe dị ka izu 4 ruo 6 maka nyocha ahụ, ọ nwekwara ike ịka ogologo.",
            "Ọtụtụ ụlọ ọrụ nche na-ewe ndị mmadụ ma nyere ha aka gafee ọzụzụ. Chọọ na saịtị ọrụ (job boards), na American Job Center ma ọ bụ ụlọ ọrụ workforce dị n'obodo gị, na na webụsaịtị ụlọ ọrụ. Lelee na steeti gị kwadoro ụlọ akwụkwọ ọzụzụ ahụ (California na-ekwe ka i lelee akwụkwọ ikike n'ịntanetị). Kpachara anya maka onye ọ bụla kwere nkwa akwụkwọ ikike \"e kwere nkwa\" (guaranteed).",
            "Résumé gị: bụrụ onye eziokwu. Tupu e nye gị akwụkwọ ikike, dee \"Completed security officer preparation course; guard card application in progress\" (agụchara m ihe ọmụmụ nkwadebe onye nche; akwụkwọ ịrịọ guard card m ka na-aga). Kpọọ aha nka gị: ide akụkọ, ije ozi ndị mmadụ, ịgagharị, ịnọ jụụ n'oge nrụgide. Ndị bụbu ndị agha: kọwaa ọrụ ndị uwe ojii agha, ọrụ nche ma ọ bụ ịche nche n'okwu nkịtị.",
            "Mee omume azịza ajụjụ ọnụ ọrụ: \"Kedu ka ị ga-esi jikwaa onye ọbịa iwe were?\" na \"Gịnị ka ị ga-eme ma ị hụ ka a na-ezu ohi?\" Jiri ihe ị mụtara: nọrọ jụụ, lelee ma kọọ, kpọọ maka enyemaka, dee ya."
          ],
          steps: ["Detuo nzọụkwụ guard card steeti gị site na Nkuzi 2.", "Tinye ụbọchị n'akụkụ nzọụkwụ ọ bụla.", "Depụta ndị were ọrụ atọ ma ọ bụ ụlọ akwụkwọ akwadoro dị nso gị.", "Dee ahịrị résumé bụ eziokwu na nka atọ.", "Mee omume azịza ajụjụ ọnụ ọrụ abụọ n'olu."],
          words: [["Ụlọ akwụkwọ akwadoro", "onye na-enye ọzụzụ nke steeti gị kwere ka o nye ọzụzụ onye nche achọrọ."], ["American Job Center", "ọfịs ọha na eze nke US n'efu na-enye aka n'ịchọ ọrụ na ọzụzụ."], ["Oge nyocha (processing time)", "ogologo oge ụlọ ọrụ ahụ na-ewe iji nyochaa akwụkwọ ịrịọ gị na nlele ndekọ mpụ gị."]],
          slides: [
            { title: "Nzọụkwụ ka ha bụrụ ụbọchị", bullets: ["Chọta ọzụzụ; mechaa ihe achọrọ tupu kaadị", "Mkpịsị aka na akwụkwọ ịrịọ", "Rịọ maka ọrụ mgbe ị na-eche"] },
            { title: "Ebe ị ga-achọ", bullets: ["Ụlọ ọrụ nche na-azụ ndị nche ọhụrụ", "American Job Centers na ụlọ ọrụ workforce", "Lelee na steeti kwadoro ụlọ akwụkwọ ahụ"] },
            { title: "Résumé bụ eziokwu", bullets: ["\"Guard card application in progress\" ruo mgbe e nyere ya", "Ide akụkọ, ije ozi ndị mmadụ, ịgagharị, ịnọ jụụ"] },
            { title: "Omume ajụjụ ọnụ ọrụ", bullets: ["Onye ọbịa iwe were: okwu jụụ, nye nhọrọ", "Izu ohi: lelee, kpọọ, dee ya"] }
          ],
          sources: [BSIS_FACT, BSIS_VERIFY, BLS_GUARDS],
          tryIt: "Mee atụmatụ guard card gị n'otu peeji: nzọụkwụ ọ bụla site na peeji steeti gị ya na ụbọchị, ndị were ọrụ atọ ma ọ bụ ụlọ akwụkwọ akwadoro dị n'obodo gị, ahịrị résumé bụ eziokwu, na azịza gị maka ajụjụ ọnụ ọrụ abụọ ahụ. Tinye ya na ndepụta gị na akụkọ omume gị: nke ahụ bụ ngwugwu njikere gị.",
          youCanNow: "ide atụmatụ nwere ụbọchị iji nweta guard card gị na ọrụ, ya na ahịrị résumé bụ eziokwu.",
          quickCheck: [
            { objective: "O5", q: "Ị gụchaala ihe ọmụmụ a mana e nyebeghị gị guard card. Olee ahịrị résumé bụ eziokwu?", options: ["\"Licensed security officer\" (onye nche nwere akwụkwọ ikike)", "\"Completed security officer preparation course; guard card application in progress\"", "\"Armed guard\" (onye nche na-ebu égbè)", "\"State certified instructor\" (onye nkuzi steeti nyere asambodo)"], answer: 1, why: "Ọ na-ekwu kpọmkwem ihe i mere n'ekwughị na i nwere akwụkwọ ikike i nweghị." },
            { objective: "O1", q: "Kedu ka ị ga-esi mata na ụlọ akwụkwọ ọzụzụ ma ọ bụ akwụkwọ ikike bụ ezigbo na California?", options: ["Tụkwasị mgbasa ozi ụlọ akwụkwọ ahụ obi", "Jụọ na soshal midia", "Jiri nlele akwụkwọ ikike steeti n'ịntanetị", "Lelee akara (logo) ha"], answer: 2, why: "Department of Consumer Affairs nke California na-ekwe ka i lelee akwụkwọ ikike n'ịntanetị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Esemokwu, ihe mberede, akụkọ na inweta ọrụ",
        questions: [
          { objective: "O3", q: "Onye ọbịa iwe were na-eti mkpu. Olee ihe kachasị mma ị ga-ebu ụzọ mee?", options: ["Tie ya mkpu ka o gee ntị", "Guzoro nso ya nke ukwuu", "Jide ya n'aka", "Nọrọ n'ebe dị anya nke nchekwa ma kwuo okwu nwayọ na jụụ"], answer: 3, why: "Ebe dị anya na okwu jụụ na-ebelata iwe ma na-echebe gị." },
          { objective: "O3", q: "Ị na-anụ isi anwụrụ ọkụ ma hụ ọkụ n'ime ụlọ nkwakọba ihe. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Kpọọ 911 (ma ọ bụ nọmba obodo) ma malite atụmatụ ihe mberede nke ebe ahụ", "Dee akụkọ ahụ", "Mechaa ịgagharị gị", "See foto maka soshal midia"], answer: 0, why: "N'ihe mberede, ị na-ebu ụzọ kpọọ 911, mgbe ahụ gbasoo atụmatụ ihe mberede." },
          { objective: "O4", q: "Olee nke bụ eziokwu, ọ bụghị echiche?", options: ["O yiri onye mere ya", "Ara na-agba ya", "O kwuru, \"Pụọ n'ụzọ m\"", "Ha na-akpa nkata ọjọọ"], answer: 2, why: "Okwu kpọmkwem ị nụrụ bụ eziokwu; ndị ọzọ bụ echiche." },
          { objective: "O4", q: "Ị hụrụ ihe ezighị ezi n'akụkọ ụnyaahụ mgbe onye isi gị gụchara ya. Gịnị ka ị ga-eme?", options: ["Dee ya ọzọ na nzuzo ka o yie ka ọ ka mma", "Dozie ya n'ihu ọha, otu onye were gị n'ọrụ si kwuo", "Tụfuo ya", "Rịọ onye ọrụ ibe gị ka ọ bịanye aka na ya"], answer: 1, why: "A na-edozi ihe n'ihu ọha site n'usoro onye were ọrụ; ịgbanwe akụkọ na nzuzo na-emebi ntụkwasị obi." },
          { objective: "O5", q: "Gịnị ka atụmatụ guard card kwesịrị inwe?", options: ["Ụbọchị maka ọzụzụ, mkpịsị aka, akwụkwọ ịrịọ na ịrịọ ọrụ", "Naanị ọrụ ị chọrọ", "Nkwa akwụkwọ ikike e kwere nkwa", "Ọ dịghị ihe ọ bụla ruo mgbe e were gị n'ọrụ"], answer: 0, why: "Atụmatụ nwere ụbọchị na-eme ka nzọụkwụ steeti gị bụrụ omume ị nwere ike imecha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe Onye Nche (Guard Card)",
    questions: [
      { objective: "O3", q: "Gịnị bụ isi ọrụ onye nche?", options: ["Ijide ndị mmadụ maka iwu ọ bụla ha mebiri", "Ichebe ndị mmadụ na ihe onwunwe site n'ime ka a hụ ya, ilele anya na ịkọ ihe", "Inyocha mpụ n'ụlọikpe", "Ide tiketi okporo ụzọ"], answer: 1, why: "Isi ọrụ ahụ bụ nchekwa a na-ahụ anya, ilele anya na ịkọ ihe." },
      { objective: "O3", q: "Post orders gị siri ike karịa iwu. Olee nke ị ga-agbaso?", options: ["Naanị iwu", "Ihe ọ bụla ị chere na ọ dị mma", "Ihe onye ọbịa rịọrọ", "Post orders"], answer: 3, why: "Ndị were ọrụ nwere ike ịtọ iwu siri ike karịa, ị ga-agbasorịrị post orders gị." },
      { objective: "O1", q: "Onye na-enye guard card n'ọtụtụ steeti?", options: ["Ụlọ ọrụ gọọmentị steeti", "Ụlọ akwụkwọ ọzụzụ ọ bụla", "Ụlọ ahịa ukwu obodo", "FBI"], answer: 0, why: "Ụlọ ọrụ gọọmentị steeti na-enye ndị nche akwụkwọ ikike; ụlọ akwụkwọ na-enye naanị ọzụzụ." },
      { objective: "O1", q: "Na California, awa ole nke ọzụzụ nka onye nche ka a ga-emecha n'ime ọnwa 6 mbụ?", options: ["Awa 8", "Awa 4", "Awa 32", "Awa 100"], answer: 2, why: "BSIS chọrọ awa 32 nke ọzụzụ nka n'ime ọnwa 6 mbụ." },
      { objective: "O1", q: "Gịnị bụ afọ kacha nta maka ndebanye aha onye nche na California?", options: ["16", "21", "25", "18"], answer: 3, why: "BSIS kwuru na ndị na-etinye akwụkwọ ga-erurịrị afọ 18." },
      { objective: "O1", q: "Ị nwere ndekọ mpụ, ị na-ejupụtakwa akwụkwọ ịrịọ guard card. Gịnị ka ị ga-eme?", options: ["Zaa ajụjụ ọ bụla n'eziokwu ma lelee iwu steeti gị", "Hapụ ndekọ ahụ", "Jiri aha enyi gị", "Kwụsị n'elelighị"], answer: 0, why: "Azịza ụgha nwere ike ime ka a jụ gị; steeti ọ bụla na-ekpebi ndekọ ndị dị mkpa." },
      { objective: "O2", q: "Gịnị dị na post orders?", options: ["Uru ụlọ ọrụ ahụ nwetara", "Ntụziaka ebe ahụ: awa, ebe ịgagharị, iwu ịbata, onye a ga-akpọ", "Usoro ọrụ gị n'izu", "Ndepụta ndị a na-enyo enyo"], answer: 1, why: "Post orders bụ ntụziaka e dere ede maka otu ebe a kapịrị ọnụ." },
      { objective: "O2", q: "Gịnị ka ihe ọ bụla e dere na ndekọ ọrụ ụbọchị kwesịrị inwe?", options: ["Echiche gị banyere ndị ọrụ ibe gị", "Naanị nsogbu, enweghị oge", "Oge na ihe i lelere ma ọ bụ hụrụ", "Ọ dịghị ihe ruo na njedebe oge ọrụ"], answer: 2, why: "Ndekọ na-edepụta nlele na ihe ọ bụla mere ya na oge ya." },
      { objective: "O2", q: "Onye ọbịa na-enweghị baajị kwuru, \"Mụ na ya nọ,\" ma soro onye ọrụ n'azụ bata. Gịnị ka ị ga-eme?", options: ["Hapụ ya ka ọ bata; o yiri ezigbo mmadụ", "Tie ya mkpu", "Hapụ ebe nche gị ka ị soro ya", "Kwụsị ya nwayọ ma lelee ID dị ka post orders si kwuo"], answer: 3, why: "Igbochi tailgating nwayọ ma guzosie ike bụ isi ilekọta ọnụ ụzọ." },
      { objective: "O2", q: "Gịnị mere ị ga-eji gwa onye nche na-esote ihe mere mgbe oge ọrụ na-agbanwe?", options: ["Ka ọ mara ihe mepere emepe na ihe ọ ga-elele", "Iji kwụsị oge ọrụ gị n'oge", "Ọ dịghị mkpa", "Iji kọọ asịrị"], answer: 0, why: "Ezigbo nnyefe na-eme ka a na-eche ebe ahụ nche n'enweghị oghere." },
      { objective: "O3", q: "Olee nke na-enye aka ime ka iwe onye iwe were dajụọ?", options: ["Iguzo ihu na ihu nso ya", "Ikwu okwu nwayọ na inye nhọrọ", "Ịtụ ya aka", "Igbochi ụzọ mgbapụ"], answer: 1, why: "Okwu jụụ na nhọrọ na-ebelata nrụgide; igbochi ụzọ na ịtụ aka na-eme ka ọ ka njọ." },
      { objective: "O3", q: "Olee mgbe onye nche nwere ike iji ike?", options: ["Mgbe ọ bụla onye kpara àgwà ọjọọ", "Iji nwetaghachi ihe ọ bụla", "Naanị dị ka iwu na post orders si kwe, naanị mgbe ọ dị mkpa", "Mgbe ọ bụla onye isi na-adịghị ele anya"], answer: 2, why: "Iwu na post orders na-egbochi iji ike, a na-akwụsịkwa ya mgbe ọ dịghịzi mkpa." },
      { objective: "O3", q: "Ị hụrụ ọgụ nwere ngwa agha n'ebe a na-adọba ụgbọala. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Banye n'etiti ha ma kewaa ha", "Kpọọ 911 site n'ebe dị mma", "Buru ụzọ dee akụkọ ahụ", "See ya vidiyo maka soshal midia"], answer: 1, why: "Ngwa agha pụtara na ị ga-ebu ụzọ kpọọ 911, site n'ebe dị mma." },
      { objective: "O4", q: "Onye nwere ike ịgụ akụkọ ihe mere gị?", options: ["Naanị gị", "Ọ dịghị onye", "Naanị ezinụlọ gị", "Onye isi, client, ụlọ ọrụ inshọransị, ndị uwe ojii ma ọ bụ ụlọikpe"], answer: 3, why: "Ọtụtụ mmadụ nwere ike iji akụkọ, mgbe ụfọdụ ọtụtụ ọnwa e mesịa." },
      { objective: "O4", q: "Olee nkọwa kachasị mma nke mmadụ n'akụkọ?", options: ["Nwanyị, ihe dị ka afọ 40, ogologo ihe dị ka 5 feet 5, uwe mwụda (coat) na-acha anụnụ anụnụ, akpa azụ ntụ ntụ", "Onye na-adịghị mma", "Mmadụ dị iche", "Onye na-akpata nsogbu"], answer: 0, why: "Afọ, ogologo na uwe bụ eziokwu na-enyere ndị ọzọ aka ịmata onye ahụ." },
      { objective: "O4", q: "Olee ajụjụ ndị akụkọ ga-azarịrị?", options: ["Ihe kpatara onye ahụ ji jọọ njọ", "Echiche gị banyere client", "Onye, gịnị, mgbe, ebee na otu o si mee", "Naanị ihe ndị uwe ojii kwuru"], answer: 2, why: "Onye, gịnị, mgbe, ebee na otu o si mee na-eme akụkọ zuru oke, nke bụ eziokwu." },
      { objective: "O4", q: "Kedu ka ị ga-esi dee ihe mmadụ kwuru?", options: ["Chịkọta ya n'echiche gị", "Hapụ ya", "Mee ka ọ dị ka ihe ka njọ", "Dee kpọmkwem okwu ya n'ime quotes"], answer: 3, why: "Okwu kpọmkwem bụ eziokwu ndị ọzọ nwere ike ịtụkwasị obi." },
      { objective: "O5", q: "Olee ahịrị résumé bụ eziokwu tupu e nye gị akwụkwọ ikike?", options: ["\"Guard card application in progress\" (akwụkwọ ịrịọ guard card ka na-aga)", "\"Licensed security professional\" (ọkachamara nche nwere akwụkwọ ikike)", "\"Armed officer\" (onye nche na-ebu égbè)", "\"Police officer\" (onye uwe ojii)"], answer: 0, why: "Ọ na-akọwa ọnọdụ gị n'ezie n'ekwughị na i nwere akwụkwọ ikike." },
      { objective: "O5", q: "Ụlọ akwụkwọ kwere nkwa akwụkwọ ikike onye nche \"e kwere nkwa\" n'otu ụbọchị. Gịnị ka ị ga-eme?", options: ["Kwụọ ụgwọ ozugbo", "Lelee peeji ụlọ ọrụ steeti na ma steeti kwadoro ụlọ akwụkwọ ahụ", "Zitere ha nọmba Social Security gị site na tekst", "Gwa ndị enyi gị ka ha debanye aha"], answer: 1, why: "Ọ bụ naanị steeti na-enye akwụkwọ ikike; lelee peeji gọọmentị na ma a kwadoro ụlọ akwụkwọ ahụ." },
      { objective: "O5", q: "Mgbe ụlọ ọrụ ahụ na-enyocha akwụkwọ ịrịọ gị, olee nzọụkwụ amamihe dị na ya n'atụmatụ gị?", options: ["Emela ihe ọ bụla", "Kwụsị ịmụ ihe", "Rịọ maka ọrụ ma mee omume azịza ajụjụ ọnụ ọrụ", "Malite ịrụ ọrụ n'enweghị akwụkwọ ikike"], answer: 2, why: "Iji oge ichere ahụ rịọ ọrụ ma mee omume na-eme ka e were gị n'ọrụ ngwa ngwa." }
    ]
  },
  // ---- ADDIE: Nyocha (Evaluation) ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 3, 5, 6, 8, 11, 12, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee ọzọ.",
    criteria: [
      { name: "Nzọụkwụ guard card steeti", objective: "O1", notYet: "Ụlọ ọrụ, nlele ndekọ mpụ ma ọ bụ ọzụzụ na-efu, ma ọ bụ ọ na-eji mgbasa ozi ọzụzụ kama peeji gọọmentị.", meets: "Ọ na-edepụta ụlọ ọrụ, afọ, nlele ndekọ mpụ, ọzụzụ tupu na mgbe e nyere akwụkwọ ikike, otu e si etinye akwụkwọ, na adreesị peeji gọọmentị.", exceeds: "Ọ na-agbakwunye iwu imeghari ya na otu e si elele ụlọ akwụkwọ ma ọ bụ akwụkwọ ikike." },
      { name: "Ndepụta ịgagharị na ọnụ ụzọ", objective: "O2", notYet: "Ebe ịgagharị, iwu ọnụ ụzọ ma ọ bụ ndekọ na-efu.", meets: "Ọ na-emetụ ihe ọ bụla dị na post orders omume ma nwee ndekọ nwere oge nwere opekata mpe ihe anọ.", exceeds: "Ọ na-agbakwunye nnyefe oge ọrụ na atụmatụ maka tailgating." },
      { name: "Kaadị akpa ilele-na-ịkọ", objective: "O3", notYet: "Ọ gụnyere ịchụ mmadụ, iji ike karịrị iwu e nyere, ma ọ bụ enweghị nzọụkwụ 911 na mbụ.", meets: "Ọ na-egosi okwu jụụ, mgbe a ga-alaghachi azụ ma kpọọ, enweghị ịchụ, na 911 na mbụ n'ihe mberede.", exceeds: "Ọ na-agbakwunye nzọụkwụ atụmatụ ihe mberede nke ebe ahụ na ihe a ga-agwa ndị ọrụ enyemaka." },
      { name: "Akụkọ ihe mere omume", objective: "O4", notYet: "Ọ naghị edo anya, nwere echiche, ma ọ bụ oge ma ọ bụ ebe na-efu.", meets: "Ọ na-aza onye, gịnị, mgbe, ebee na otu o si mee n'usoro oge site n'eziokwu na okwu kpọmkwem.", exceeds: "Nkọwa ndị ahụ zuru oke nke na onye ọbịa nwere ike ịmata ndị mmadụ na ebe ndị ahụ." },
      { name: "Atụmatụ nwere ụbọchị na ahịrị résumé", objective: "O5", notYet: "Enweghị ụbọchị, ma ọ bụ ọ na-ekwu na o nwere akwụkwọ ikike o nwebeghị.", meets: "Ụbọchị maka nzọụkwụ ọ bụla, ndị were ọrụ atọ ma ọ bụ ụlọ akwụkwọ akwadoro dị n'obodo, ahịrị résumé bụ eziokwu.", exceeds: "Ọ gụnyere azịza e mere omume ha maka ajụjụ ọnụ ọrụ abụọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a na ngwugwu njikere ruru rubric",
      "Ndị na-amụ ihe rịọrọ maka guard card steeti n'ime ụbọchị 60 (nyocha nleba anya)",
      "Ndị na-amụ ihe nwetara guard card ma e were ha dị ka ndị nche (nleba anya na akụkọ ndị mmekọ)",
      "Ndị were ọrụ bụ ndị mmekọ na-akọ na akụkọ ihe mere ndị nche ọhụrụ achọghị ka e dee ya ọzọ n'ime ụbọchị 90 mbụ"
    ]
  },
  // ---- ADDIE: Mmejuputa ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka peeji akwụkwọ ikike steeti",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ ngwa ide akwụkwọ n'efu, maka ndepụta, ndekọ, akụkọ na atụmatụ",
      "Nhọrọ: akwụkwọ nkọwa steeti gị e bipụtara na ọmụmaatụ post order",
      "Ihe dị ka nkeji 60 n'ozuzu"
    ],
    facilitatorNotes: [
      "Kwuo ya n'oge na ugboro ugboro: ihe ọmụmụ a na-akwado ndị na-amụ ihe; ụlọ ọrụ steeti na-enye akwụkwọ ikike, mgbe ọzụzụ akwadoro gachara.",
      "Tupu klas, mepee peeji gọọmentị steeti gị ma bute awa ọzụzụ, ụgwọ na fọm ugbu a; iwu na-agbanwe.",
      "Akụzila ijide mmadụ n'ike, itinye ígwè aka ma ọ bụ ngwa agha n'ihe ọmụmụ a; ndị ahụ chọrọ ọzụzụ akwadoro ihu na ihu.",
      "Maka ndị na-amụ ihe nwere ndekọ, dowe ya na nzuzo ma zie ha iwu steeti na mmemme enyemaka iwu maka ndị na-alọta; ekwela nkwa na a ga-akwado ha.",
      "Jiri egwuregwu ọnọdụ (role play) maka ime ka iwe dajụọ, nwee okwu nkwụsị doro anya, ma jiri rubric tụọ ngwugwu njikere ahụ otu ahịrị n'otu oge."
    ]
  }
};
