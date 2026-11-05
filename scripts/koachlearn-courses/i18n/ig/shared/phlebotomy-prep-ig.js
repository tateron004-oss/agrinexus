"use strict";

// Koach Learn course (Igbo translation of shared/phlebotomy-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Teaches the knowledge behind blood collection and prepares learners for a certification exam. It does NOT teach anyone to draw blood.

module.exports = {
  id: "phlebotomy-prep-ig",
  lang: "ig",
  translationOf: "phlebotomy-prep",
  category: "Workforce Development",
  name: "Nkwadebe maka Ọrụ Onye Na-ewe Ọbara (Phlebotomy Technician)",
  skills: "Ịhọrọ mmemme ọzụzụ na asambodo, Ịmata onye ọrịa na ịlele iwu nyocha, Usoro iwe ọbara n'ime tub, Nzọụkwụ nke iwe ọbara nkịtị, Igbochi ọrịa na nchekwa agịga, Itinye akara na ijikwa ihe nlele",
  outcome: "ime ndepụta nlele nke gị (pocket checklist) maka iwe ọbara nkịtị, site n'ịmata onye ọrịa ruo n'itinye akara na tub na ihicha ebe ahụ, ya na usoro iwe ọbara nke ụlọ nyocha gị na nzọụkwụ nchekwa, tinyekwa atụmatụ maka mmemme ọzụzụ gị na ule asambodo gị.",
  about: [
    "Ndị na-ewe ọbara (phlebotomy technicians) na-anakọta ọbara n'ụlọ ọgwụ, n'ụlọ nyocha (lab), n'ụlọ ọgwụ nta, n'ebe a na-enye ọbara na n'ụlọ ndị ọrịa. Ọ bụ ụzọ dị ngwa isi banye n'ọrụ ahụike, ọ nwekwara ike iduga gị n'ọrụ ndị ọzọ n'ụlọ nyocha na n'ilekọta ndị ọrịa.",
    "Ihe ọmụmụ a na-akụzi ihe ọmụma dị n'azụ ọrụ a: asambodo na iwu steeti, otu esi amata onye ọrịa ma lelee iwu nyocha, usoro iwe ọbara n'ime tub, nzọụkwụ nke iwe ọbara nkịtị, igbochi ọrịa na nchekwa agịga, na otu esi etinye akara ma jikwaa ihe nlele ka ụlọ nyocha nwee ike iji ha. Ọ na-akụzikwa banyere ichebe ozi nzuzo onye ọrịa n'okpuru HIPAA.",
    "Ihe dị mkpa: ihe ọmụmụ a anaghị akụziri gị iwe ọbara, ịkwesịghịkwa ịnwale ya n'ahụ onye ọ bụla. A na-amụta iwe ọbara naanị na mmemme ọzụzụ a kwadoro, ebe onye nkuzi na-ele gị anya, mgbe i bu ụzọ nwalee n'aka mmụta (training arm). Ule asambodo na-arịọkwa ihe akaebe na i weela ọbara n'ahụ ezi mmadụ ebe onye nkuzi na-ele gị anya. Ihe ọmụmụ a na-akwado gị maka mmemme ahụ na ule ahụ; ọ naghị enye gị asambodo ma ọ bụ ikike ọrụ (license).",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ọ na-ejedebekwa n'ọrụ \"Nwalee ya ugbu a\" n'akwụkwọ. Obere nnwale na-eso nkuzi ọ bụla, nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Mee ndepụta nlele nke gị (pocket checklist) maka iwe ọbara nkịtị: mata onye ọrịa ma lelee iwu nyocha, kwadebe ma chebe onwe gị, usoro iwe ọbara maka tub gị (site na chaatị mmemme gị ma ọ bụ nke ụlọ nyocha gị), nzọụkwụ nke iwe ọbara, itinye akara n'ihu onye ọrịa, itụfu agịga na ihicha ebe ahụ. Tinye atụmatụ otu peeji: mmemme ọzụzụ ị ga-etinye akwụkwọ na ya, ule asambodo ị ga-ede, ihe steeti gị chọrọ, na ụbọchị ị lekwasịrị anya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-achọ ụzọ dị ngwa ma kwụsie ike isi banye n'ọrụ ahụike: ndị na-achọ ọrụ, ndị ntorobịa, ndị si mba ọzọ bịa, ndị agha mbụ (veterans; ụfọdụ nwere ahụmahụ ọgwụ n'ime ndị agha) na ndị okenye na-alọghachi n'ịmụ ihe.",
    startingPoint: "Ha nwere ike ịgụ asụsụ ụbọchị niile ma jiri ekwentị ma ọ bụ kọmputa ọba akwụkwọ. Ọtụtụ arụbeghị ọrụ n'ụlọ ọgwụ ma ọ bụ n'ụlọ nyocha, ha amaghị okwu ọgwụ, ụfọdụ na-atụkwa egwu agịga ma ọ bụ ọbara.",
    gap: "Mmemme ọzụzụ phlebotomy na ule asambodo na-atụ anya na ndị na-amụ ihe maara ịmata onye ọrịa, usoro iwe ọbara, nzọụkwụ venipuncture, igbochi ọrịa, ijikwa ihe nlele na ozi nzuzo, na na ha eweela ọbara ebe onye nkuzi na-ele ha anya. Ndị na-amụ ihe chọrọ ihe ọmụma a, atụmatụ doro anya maka ọzụzụ na ule, na eziokwu banyere ọrụ a tupu ha edebanye aha.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa okwu ọgwụ ọ bụla",
      "Nchekwa: ewela ọbara ma ọ bụ nwalee agịga n'ụlọ; ihe ndị ahụ na-eme naanị na mmemme ebe onye nkuzi na-ele anya",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; akwụkwọ zuru maka ọrụ ọ bụla",
      "Iwu steeti dị iche iche (dịka ọmụmaatụ, California na-enye asambodo phlebotomy nke ya); ndị na-amụ ihe na-elele steeti ha",
      "Agba tub na usoro iwe ọbara na-eso chaatị ụlọ nyocha ọ bụla; ndị na-amụ ihe na-eji chaatị mmemme ha",
      "Ozi nzuzo: enweghị ezi ozi onye ọrịa ọ bụla n'ọrụ ọ bụla"
    ],
    prerequisites: "Ọ dịghị. \"Health Literacy\" (ịghọta ozi ahụike) na-enye aka, ma ọ dịghị mkpa."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji ezi peeji NHA na peeji ngalaba ahụike steeti gị", action: "ide atụmatụ maka mmemme ọzụzụ phlebotomy, iwe ọbara a chọrọ ebe onye nkuzi na-ele anya, na ụbọchị ule asambodo", standard: "ebe e lelere ihe ọ bụla a chọrọ na ezi peeji" },
    { id: "O2", condition: "Mgbe e nyere gị onye ọrịa omume na iwu nyocha", action: "ịkwado onye ọrịa ahụ site n'ihe njirimara abụọ ma hụ na iwu nyocha dabara tupu iwe ọbara ọ bụla", standard: "na-akwụsị oge ọ bụla ihe adabaghị" },
    { id: "O3", condition: "Mgbe e nyere gị agba tub dị iche iche na chaatị mmemme gị", action: "idokwa tub ndị ahụ n'usoro iwe ọbara", standard: "n'enweghị tub ọ bụla dị n'ebe na-ezighi ezi" },
    { id: "O4", condition: "Mgbe e nyere gị nzọụkwụ venipuncture nkịtị na-esoghị usoro", action: "idokwa nzọụkwụ ndị ahụ n'usoro ma kwuo mgbe a ga-akwụsị iwe ọbara", standard: "n'enweghị nzọụkwụ ọ bụla fọdụrụ" },
    { id: "O5", condition: "Mgbe e nyere gị ọnọdụ nchekwa omume", action: "ịhọrọ nzọụkwụ ziri ezi maka igbochi ọrịa na nchekwa agịga", standard: "na-aza ọnọdụ ọ bụla nke ọma" },
    { id: "O6", condition: "Mgbe e nyere gị ihe nlele omume", action: "ikpebi ma e tinyere akara na ihe nlele ọ bụla ma jikwaa ya nke ọma ka ụlọ nyocha nara ya", standard: "na-ahụ ihe ọ bụla mere a ga-eji jụ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Ọrụ ahụ, onye ọrịa na tub",
      lessons: [
        {
          title: "Ọrụ ahụ, ọzụzụ na asambodo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Dee atụmatụ maka mmemme ọzụzụ, iwe ọbara ebe onye nkuzi na-ele anya, na ule asambodo.",
          text: [
            "Onye na-ewe ọbara (phlebotomy technician) na-ewe ọbara n'ahụ ndị ọrịa maka nyocha n'ụlọ nyocha na maka inye ọbara. Ọrụ a chọrọ nzọụkwụ a na-eme nke ọma, obi dị jụụ n'ihu ndị ọrịa na-atụ egwu, na nchekwa siri ike.",
            "Ọtụtụ mmadụ na-amalite na mmemme ọzụzụ phlebotomy na kọleji obodo (community college), ụlọ akwụkwọ ndị okenye ma ọ bụ ụlọ akwụkwọ ọrụ aka. Ị na-ebu ụzọ mụta n'aka mmụta (training arm), wee were ọbara n'ahụ ezi mmadụ ebe onye nkuzi na-ele gị anya. Ọ dịghị onye nwere ike ịmụta akụkụ aka a n'ịntanetị.",
            "Asambodo: otu nhọrọ a na-ahụkarị bụ Certified Phlebotomy Technician (CPT) nke NHA. NHA na-arịọ akwụkwọ gụsịrị ụlọ akwụkwọ sekọndrị ma ọ bụ GED (ma ọ bụ nke na-abịa n'oge na-adịghị anya), mmemme ọzụzụ ma ọ bụ ahụmahụ ọrụ ebe onye isi na-ele anya, na ihe akaebe nke opekata mpe venipuncture 30 na capillary stick 10 (mkpịsị aka ma ọ bụ ikiri ụkwụ) n'ahụ ndị dị ndụ. Otu ndị ọzọ, dị ka ASCP, na-enyekwa asambodo; lelee ezi peeji ha.",
            "Ụfọdụ steeti nwere iwu nke ha. Dịka ọmụmaatụ, California na-enye asambodo phlebotomy nke steeti site na California Department of Public Health (CDPH), ọ na-achọkwa ule mba niile site n'otu a kwadoro. Lelee ngalaba ahụike steeti gị tupu ị họrọ mmemme. Iwu na ụgwọ na-agbanwe, ya mere gụọ ezi peeji ndị ahụ."
          ],
          steps: ["Chọta mmemme ọzụzụ phlebotomy abụọ dị nso gị.", "Jụọ nke ọ bụla: iwe ọbara ole ka ụmụ akwụkwọ na-eme ebe onye nkuzi na-ele anya, na asambodo olee ka ọ na-akwado gị maka ya?", "Gụọ ezi peeji asambodo ahụ maka ihe ọ chọrọ ugbu a.", "Lelee ngalaba ahụike steeti gị maka iwu steeti.", "Dee ụbọchị ị lekwasịrị anya: mmalite ọzụzụ, njedebe ọzụzụ, ule."],
          words: [["Phlebotomy", "iwe ọbara n'ahụ mmadụ maka nyocha ma ọ bụ inye ọbara."], ["Venipuncture", "itinye agịga n'ime akwara ọbara (vein) iji were ọbara."], ["Capillary stick", "obere ọkpọ n'isi mkpịsị aka ma ọ bụ n'ikiri ụkwụ iji were ntụpọ ọbara ole na ole."], ["Training arm (aka mmụta)", "aka arụrụ arụ e ji amụta iwe ọbara n'enweghị ihe egwu."]],
          slides: [
            { title: "Ọrụ ahụ", bullets: ["Iwe ọbara maka nyocha na inye ọbara", "Nzọụkwụ nke ọma, obi dị jụụ, nchekwa siri ike"] },
            { title: "Ọzụzụ na-ebu ụzọ", bullets: ["Mmemme a kwadoro: kọleji, ụlọ akwụkwọ ndị okenye ma ọ bụ nke ọrụ aka", "Aka mmụta, wee were ọbara n'ahụ ezi mmadụ ebe onye nkuzi na-ele anya", "Ọ dịghị onye nwere ike ịmụta akụkụ aka a n'ịntanetị"] },
            { title: "Asambodo", bullets: ["CPT nke NHA: ọzụzụ ma ọ bụ ahụmahụ ọrụ", "Ihe akaebe nke venipuncture 30 na capillary stick 10", "Otu ndị ọzọ, dị ka ASCP: lelee peeji ha"] },
            { title: "Lelee steeti gị", bullets: ["Ụfọdụ steeti na-enye asambodo nke ha", "California: CDPH gbakwunyere ule mba niile", "Iwu na ụgwọ na-agbanwe: gụọ ezi peeji"] }
          ],
          sources: [
            { name: "NHA: Certified Phlebotomy Technician (CPT) (n'asụsụ bekee)", url: "https://www.nhanow.com/certifications/phlebotomy-technician" },
            { name: "California Department of Public Health: asambodo phlebotomy (n'asụsụ bekee)", url: "https://www.cdph.ca.gov/Programs/OSPHLD/LFS/Pages/Phlebotomist.aspx" }
          ],
          tryIt: "Dee atụmatụ otu peeji: mmemme ọzụzụ abụọ dị nso gị (aha, ogologo oge, iwe ọbara ebe onye nkuzi na-ele anya, asambodo ha na-akwado gị maka ya), asambodo ị ga-ede na ihe ọ chọrọ site n'ezi peeji ya, iwu steeti gị, na ụbọchị atọ ị lekwasịrị anya.",
          youCanNow: "ikwu ihe onye na-ewe ọbara na-arụ, otu ọzụzụ si arụ ọrụ, ihe CPT nke NHA na-arịọ, na ebe ị ga-elele iwu steeti gị.",
          quickCheck: [
            { objective: "O1", q: "Ebee ka ị na-amụta n'ezie iwe ọbara?", options: ["Site na vidiyo n'ụlọ", "N'ahụ enyi gị, nwayọọ nwayọọ", "Na mmemme ọzụzụ a kwadoro, ebe onye nkuzi na-ele gị anya", "N'ahụ gị n'onwe gị"], answer: 2, why: "A na-amụta iwe ọbara naanị na mmemme ebe onye nkuzi na-ele anya, na-ebu ụzọ n'aka mmụta." },
            { objective: "O1", q: "Gịnị ọzọ ka CPT nke NHA na-arịọ, karịa ọzụzụ ma ọ bụ ahụmahụ ọrụ?", options: ["Ihe akaebe nke venipuncture na capillary stick n'ahụ ndị dị ndụ ebe onye nkuzi na-ele anya", "Akara mmụta nọọsụ", "Akwụkwọ ikike ịnya ụgbọ ala", "Ọ dịghị ihe ọzọ"], answer: 0, why: "NHA na-arịọ ihe akaebe nke opekata mpe venipuncture 30 na capillary stick 10." }
          ]
        },
        {
          title: "Onye ọrịa ziri ezi na iwu nyocha ziri ezi",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kwado onye ọrịa site n'ihe njirimara abụọ ma hụ na iwu nyocha dabara tupu iwe ọbara ọ bụla.",
          text: [
            "Nzọụkwụ kachasị mkpa na-eme tupu agịga: ịhụ na ọ bụ onye ọrịa ziri ezi. Ọbara e were n'ahụ onye na-abụghị ya nwere ike iduga n'ọgwụgwọ na-ezighi ezi.",
            "Jiri opekata mpe ihe njirimara abụọ, nke a na-ejikarị bụ aha zuru ezu na ụbọchị ọmụmụ. Rịọ onye ọrịa ka o kwuo ha (\"Biko gwa m aha gị zuru ezu na ụbọchị ọmụmụ gị\"), kama ịjụ \"Ị bụ John Smith?\", n'ihi na onye na-atụ egwu ma ọ bụ onye mgbagwoju anya nwere ike ịza naanị ee. N'ụlọ ọgwụ, lelekwa eriri njirimara (ID band) n'aka ya ma tụnyere ya na iwu nyocha.",
            "Mgbe ahụ gụọ iwu nyocha (requisition): nyocha ndị a chọrọ, ntụziaka pụrụ iche dị ka ibu ọnụ (fasting) ma ọ bụ oge a kara aka, na tub ndị a chọrọ. Ọ bụrụ na aha, ụbọchị ọmụmụ ma ọ bụ ihe ọ bụla ọzọ adabaghị, kwụsị ma jụọ onye isi gị. Echela mgbe ọ bụla.",
            "Ozi nzuzo (HIPAA): iwu nyocha nwere ozi ahụike nzuzo. Zoo ya ka ndị ọzọ ghara ịhụ ya, kwuo okwu nwayọọ, ma kwuo banyere nyocha ndị ahụ naanị ya na onye ọrịa na ndị ọrụ chọrọ ịma ya."
          ],
          steps: ["Kọwaa onwe gị ma kọwaa ihe ị ga-eme.", "Rịọ onye ọrịa ka o kwuo aha ya zuru ezu na ụbọchị ọmụmụ ya.", "Tụnyere ha na iwu nyocha (na eriri njirimara n'ụlọ ọgwụ).", "Lelee nyocha, tub na ntụziaka pụrụ iche ọ bụla dị ka ibu ọnụ.", "Ọ bụrụ na ihe ọ bụla adabaghị, kwụsị ma jụọ onye isi gị."],
          words: [["Ihe njirimara onye ọrịa", "ozi dị ka aha zuru ezu na ụbọchị ọmụmụ e ji ahụ na ọ bụ onye ziri ezi."], ["Requisition", "iwu nyocha nke na-edepụta onye ọrịa na nyocha ndị a ga-ewe ọbara maka ha."], ["Ibu ọnụ (fasting)", "ịghara iri nri (na mgbe ụfọdụ ịghara ị ṅụ ihe ọ bụla ma e wezụga mmiri) ruo oge a kara aka tupu nyocha."], ["HIPAA", "iwu gọọmentị etiti (federal) nke na-echebe nzuzo ozi ahụike."]],
          slides: [
            { title: "Tupu agịga", bullets: ["Onye ọrịa ziri ezi kachasị mkpa", "Onye ọrịa na-ezighi ezi = nsonaazụ na-ezighi ezi, ọgwụgwọ na-ezighi ezi"] },
            { title: "Ihe njirimara abụọ", bullets: ["Aha zuru ezu na ụbọchị ọmụmụ", "Rịọ onye ọrịa ka o KWUO ha", "Ụlọ ọgwụ: lelekwa eriri njirimara"] },
            { title: "Gụọ iwu nyocha", bullets: ["Nyocha na tub ndị a chọrọ", "Ntụziaka ibu ọnụ ma ọ bụ oge", "Ihe adabaghị? Kwụsị ma jụọ"] },
            { title: "Ozi nzuzo", bullets: ["Zoo iwu nyocha ka a ghara ịhụ ya", "Kwuo okwu nwayọọ", "Kesaa naanị ndị chọrọ ya"] }
          ],
          sources: [
            { name: "HHS: HIPAA for professionals (Privacy Rule) (n'asụsụ bekee)", url: "https://www.hhs.gov/hipaa/for-professionals/privacy/index.html" }
          ],
          tryIt: "Mee egwuregwu omume ya na enyi gị, n'enweghị agịga. Enyi gị na-eme ka onye ọrịa nwere aha na ụbọchị ọmụmụ e chepụtara; ị jide iwu nyocha e chepụtara nke otu ihe dị iche na ya. Kọwaa onwe gị, rịọ ya ka o kwuo aha ya na ụbọchị ọmụmụ ya, tụnyere ha na iwu nyocha, ma kwuo n'olu dị elu ihe ị ga-eme mgbe ọ dabaghị.",
          youCanNow: "ịmata onye ọrịa site n'ihe njirimara abụọ, ịlele iwu nyocha, ịkwụsị mgbe ihe adabaghị, na idebe ozi ahụ na nzuzo.",
          quickCheck: [
            { objective: "O2", q: "Kedu ụzọ kachasị mma iji kwado onye onye ọrịa bụ?", options: ["Jụọ \"Ị bụ Maria Lopez?\"", "Lee ihu ya", "Jụọ onye nọ n'ọnụ ụlọ nchere", "Rịọ ya ka o kwuo aha ya zuru ezu na ụbọchị ọmụmụ ya"], answer: 3, why: "Ime ka onye ọrịa kwuo ihe njirimara abụọ na-egbochi \"ee\" onye na-atụ egwu nwere ike ịza n'aha na-ezighi ezi." },
            { objective: "O2", q: "Ụbọchị ọmụmụ dị n'iwu nyocha adabaghị ihe onye ọrịa kwuru. Gịnị ka ị ga-eme?", options: ["Were ọbara ka o sila dị; aha dabara", "Kwụsị ma jụọ onye isi gị", "Gbanwee ụbọchị dị n'iwu nyocha", "Jiri iwu nyocha nke onye ọrịa ọzọ"], answer: 1, why: "Ihe ọ bụla adabaghị na-akwụsị iwe ọbara ruo mgbe e doziri ya." }
          ]
        },
        {
          title: "Tub na usoro iwe ọbara",
          objectives: ["O3"],
          minutes: 6,
          goal: "Dokwaa tub dị iche iche n'usoro iwe ọbara site n'iji chaatị mmemme gị.",
          text: [
            "Tub nwere mkpuchi nwere agba na-agwa gị ihe dị n'ime ya. Ụfọdụ nwere ihe agbakwunyere (additive) na-egbochi ọbara ịkpụkọ; ndị ọzọ na-enyere ya aka ịkpụkọ. Ọ bụrụ na ihe agbakwunyere si n'otu tub banye na nke na-esote, ọ nwere ike ịgbanwe nsonaazụ nyocha.",
            "Ọ bụ ya mere ụlọ nyocha ji agbaso usoro iwe ọbara, dabere n'ụkpụrụ ụlọ nyocha sitere na CLSI. Usoro a na-ahụkarị bụ: 1) karama blood culture, 2) acha anụnụ anụnụ na-adịghị ike (light blue; sodium citrate), 3) uhie ma ọ bụ agba ọlaedo (tub serum, nwere ma ọ bụ enweghị gel), 4) akwụkwọ ndụ (green; heparin), 5) lavender ma ọ bụ odo odo (purple; EDTA), 6) ntụ ntụ (gray; sodium fluoride na potassium oxalate).",
            "Agba mkpuchi nwere ike ịdị iche n'etiti ụlọ ọrụ na-emepụta tub, ụlọ nyocha nwekwara ike inwe tub ndị ọzọ, ya mere jiri chaatị mmemme gị ma ọ bụ nke ụlọ nyocha gị mgbe niile. Ọtụtụ ụmụ akwụkwọ na-amụta ahịrị ncheta maka usoro ahụ ma na-eme ya ugboro ugboro ruo mgbe ọ na-abịa n'onwe ya.",
            "A na-atụgharị tub nwere ihe agbakwunyere nwayọọ nwayọọ ka isi ya dị n'ala ma laghachi (invert) ọtụtụ ugboro ozugbo e jupụtara ya, dịka ụlọ ọrụ mepụtara ya kwuru. Ekwala ya mgbe ọ bụla."
          ],
          words: [["Additive (ihe agbakwunyere)", "kemịkalụ dị n'ime tub nke na-egbochi ọbara ịkpụkọ ma ọ bụ na-enyere ya aka ịkpụkọ."], ["Usoro iwe ọbara (order of draw)", "usoro a kara aka maka ijupụta tub ka ihe agbakwunyere ghara ịbanye na tub na-esote."], ["Serum", "akụkụ mmiri mmiri nke ọbara mgbe ọ kpụkọrọ."], ["Invert (ịtụgharị)", "ịtụgharị tub nwayọọ ka isi ya dị n'ala ma laghachi."], ["CLSI", "Clinical and Laboratory Standards Institute, otu na-ede ụkpụrụ ụlọ nyocha."]],
          slides: [
            { title: "Ihe mere usoro ji dị mkpa", bullets: ["Mkpuchi na-egosi ihe dị n'ime", "Ihe agbakwunyere banyere na tub na-esote na-agbanwe nsonaazụ"] },
            { title: "Usoro iwe ọbara a na-ahụkarị", bullets: ["1. Blood culture  2. Light blue", "3. Uhie ma ọ bụ ọlaedo  4. Akwụkwọ ndụ (green)", "5. Lavender  6. Ntụ ntụ (gray)"] },
            { title: "Jiri chaatị ụlọ nyocha gị", bullets: ["Agba nwere ike ịdị iche n'etiti ndị mepụtara ya", "Ụlọ nyocha nwere ike itinye tub ndị ọzọ", "Mụta ya ruo mgbe ọ na-abịa n'onwe ya"] },
            { title: "Mgbe e jupụtachara", bullets: ["Tụgharịa nwayọọ, dịka onye mepụtara ya kwuru", "Ekwala ya mgbe ọ bụla"] }
          ],
          tryIt: "Bee mpempe akwụkwọ isii ma tee ha agba ma ọ bụ dee aha ha: ntụ ntụ (gray), uhie, blood culture, lavender, light blue, akwụkwọ ndụ (green). Gwakọta ha ma dokwaa ha n'usoro iwe ọbara. Mee ya ugboro ise, na-eme ngwa ngwa karịa oge ọ bụla. Lelee azịza gị na usoro dị na nkuzi a, ma emesịa na chaatị mmemme gị.",
          youCanNow: "idokwa tub a na-ahụkarị n'usoro iwe ọbara, ikwu ihe mere usoro ahụ ji dị mkpa, na ịtụgharị tub nwayọọ mgbe e jupụtachara ha.",
          quickCheck: [
            { objective: "O3", q: "N'usoro iwe ọbara a na-ahụkarị, kedu nke na-ebu ụzọ?", options: ["Lavender", "Ntụ ntụ (gray)", "Karama blood culture", "Akwụkwọ ndụ (green)"], answer: 2, why: "A na-ebu ụzọ were blood culture ka ha nọgide na-enweghị nje." },
            { objective: "O3", q: "Gịnị mere e ji enwe usoro iwe ọbara?", options: ["Ka ihe agbakwunyere si n'otu tub ghara ịbanye na nke na-esote", "Ka onye ọrịa hụ agba mara mma", "Iji tub ole na ole", "Ime ka iwe ọbara dị ngwa"], answer: 0, why: "Ihe agbakwunyere banyere na tub na-esote nwere ike ịgbanwe nsonaazụ nyocha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ọrụ ahụ, onye ọrịa na tub",
        questions: [
          { objective: "O1", q: "Onye na-enye asambodo Certified Phlebotomy Technician (CPT) a kọwara n'ihe ọmụmụ a?", options: ["DMV (ọfịs ụgbọ ala)", "Ụlọ ọgwụ ọ bụla", "NHA, National Healthcareer Association", "Dọkịta onye ọrịa"], answer: 2, why: "NHA na-enye asambodo CPT." },
          { objective: "O1", q: "Ị bi na California. Gịnị ọzọ ka ị ga-elele?", options: ["Iwu phlebotomy nke California Department of Public Health", "Ọ dịghị; iwu mba niile zuru", "Ihe e dere na blọọgụ", "Ụlọ ọrụ ekwentị gị"], answer: 0, why: "California na-enye asambodo phlebotomy nke ya site na CDPH." },
          { objective: "O2", q: "Ihe njirimara onye ọrịa ole ka ị ga-eji opekata mpe?", options: ["Ọ dịghị", "Otu", "Ise", "Abụọ"], answer: 3, why: "Opekata mpe abụọ, nke a na-ejikarị bụ aha zuru ezu na ụbọchị ọmụmụ." },
          { objective: "O2", q: "Iwu nyocha kwuru na nyocha ahụ chọrọ ibu ọnụ. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Lelee ma onye ọrịa ọ bụrụla ọnụ ma soro iwu ụlọ nyocha gị", "Gwa onye ọrịa ka o buru ụzọ rie nri", "Were tub ọzọ gbakwunyere"], answer: 1, why: "A ghaghị ilele ntụziaka pụrụ iche dị n'iwu nyocha tupu iwe ọbara." },
          { objective: "O3", q: "N'usoro iwe ọbara a na-ahụkarị, kedu tub na-abịa ozugbo tupu akwụkwọ ndụ (green)?", options: ["Lavender", "Ntụ ntụ (gray)", "Uhie ma ọ bụ ọlaedo", "Blood culture"], answer: 2, why: "Usoro ahụ bụ blood culture, light blue, uhie ma ọ bụ ọlaedo, akwụkwọ ndụ, lavender, ntụ ntụ." }
        ]
      }
    },
    {
      name: "Isi 2: Iwe ọbara, nchekwa na ihe nlele",
      lessons: [
        {
          title: "Nzọụkwụ nke iwe ọbara nkịtị",
          objectives: ["O4"],
          minutes: 6,
          goal: "Dokwaa nzọụkwụ venipuncture nkịtị n'usoro ma kwuo mgbe a ga-akwụsị.",
          text: [
            "Nkuzi a na-akụzi nzọụkwụ ndị ahụ ka ị mara ha tupu mmemme ọzụzụ gị. Ị ga-eme ha naanị ebe onye nkuzi na-ele gị anya. Anwala ya n'ahụ mmadụ ọ bụla n'èzí mmemme ebe onye nkuzi na-ele anya.",
            "Nzọụkwụ ndị bụ isi: mata onye ọrịa ma lelee iwu nyocha; saa aka gị ma yiri uwe aka (gloves); dozie aka onye ọrịa; kee tourniquet ma họrọ akwara ọbara (median cubital vein dị na nkuchi ikpere aka na-abụkarị nhọrọ mbụ); hichaa ebe ahụ ma hapụ ya ka ọ kpọọ nkụ n'ikuku; tinye agịga n'akụkụ dị ala; jupụta tub n'usoro iwe ọbara; tọpụ tourniquet; wepụ agịga ma gbanye ngwa nchekwa ya; jiri gauze pịa ebe ahụ; tinye akara na tub n'ihu onye ọrịa; hichaa ebe ahụ ma lelee otu onye ọrịa mere.",
            "Ọtụtụ mmemme na-akụzi na ị gaghị ahapụ tourniquet n'aka karịa ihe dị ka otu nkeji, n'ihi na ọ nwere ike ịgbanwe nsonaazụ nyocha. Soro iwu mmemme gị.",
            "Mara mgbe ị ga-akwụsị: onye ọrịa na-enwe isi ọgbụgba ma ọ bụ daa mba, ọzịza (hematoma) na-apụta ngwa ngwa, onye ọrịa na-enwe mgbu dị nkọ, na-agba agba ma ọ bụ dị ka ọkụ eletrik, ma ọ bụ onye ọrịa rịọ gị ka ị kwụsị. Wepụ tourniquet na agịga, pịa ebe ahụ, chebe onye ọrịa ma kpọọ maka enyemaka."
          ],
          steps: ["Mata onye ọrịa ma lelee iwu nyocha.", "Saa aka ma yiri uwe aka (gloves).", "Dozie aka ma kee tourniquet.", "Họrọ akwara ọbara, wee hichaa ebe ahụ ma hapụ ya ka ọ kpọọ nkụ.", "Tinye agịga ma jupụta tub n'usoro iwe ọbara.", "Tọpụ tourniquet, wepụ agịga ma gbanye ngwa nchekwa ya.", "Jiri gauze pịa ebe ahụ.", "Tinye akara na tub n'ihu onye ọrịa, hichaa ebe ahụ ma lelee otu onye ọrịa mere."],
          words: [["Tourniquet", "eriri a na-eke n'aka ka akwara ọbara dị mfe ịchọta."], ["Median cubital vein", "akwara ọbara dị na nkuchi ikpere aka nke na-abụkarị nhọrọ mbụ maka iwe ọbara."], ["Hematoma", "ọzịza nke ọbara n'okpuru akpụkpọ ahụ."], ["Syncope", "ịda mba: obere oge mmadụ anaghị ama ihe na-eme."]],
          slides: [
            { title: "Mụta nzọụkwụ, nwalee ebe a na-ele anya", bullets: ["Mara nzọụkwụ tupu ọzụzụ", "Ezi iwe ọbara naanị ebe onye nkuzi na-ele anya"] },
            { title: "Tupu agịga", bullets: ["Mata onye ọrịa, lelee iwu nyocha", "Saa aka, yiri uwe aka", "Tourniquet, họrọ akwara ọbara, hichaa ma hapụ ka ọ kpọọ nkụ"] },
            { title: "Iwe ọbara na mgbe e mechara", bullets: ["Jupụta tub n'usoro iwe ọbara", "Tọpụ tourniquet, wepụ agịga, gbanye ngwa nchekwa", "Pịa ebe ahụ, tinye akara n'ihu onye ọrịa"] },
            { title: "Mgbe ị ga-akwụsị", bullets: ["Ịda mba ma ọ bụ inwe isi ọgbụgba", "Ọzịza na-apụta ngwa ngwa (hematoma)", "Mgbu dị nkọ, na-agba agba ma ọ bụ dị ka ọkụ eletrik", "Onye ọrịa rịọrọ gị ka ị kwụsị"] }
          ],
          tryIt: "Enweghị agịga. Dee nzọụkwụ asatọ nke iwe ọbara nkịtị na kaadị asatọ, gwakọta ha ma dokwaa ha n'usoro. Mgbe ahụ, n'azụ kaadị ikpeazụ, dee ihe ịrịba ama anọ na-egosi na ị ga-akwụsị iwe ọbara, na ihe ị ga-eme ozugbo.",
          youCanNow: "idepụta nzọụkwụ venipuncture nkịtị n'usoro ma kwuo mgbe a ga-akwụsị iwe ọbara na ihe a ga-eme.",
          quickCheck: [
            { objective: "O4", q: "Kedu nzọụkwụ na-abịa ozugbo tupu ihicha ebe ahụ?", options: ["Itinye akara na tub", "Iwepụ agịga", "Ịpịa ebe ahụ", "Ikee tourniquet na ịhọrọ akwara ọbara"], answer: 3, why: "Ị na-ebu ụzọ chọta akwara ọbara, wee hichaa ebe ahụ ma hapụ ya ka ọ kpọọ nkụ." },
            { objective: "O4", q: "Mgbe ị na-ewe ọbara, onye ọrịa kwuru na isi na-agba ya ọgbụgba. Gịnị ka ị ga-eme?", options: ["Mechaa ngwa ngwa", "Kwụsị iwe ọbara, chebe ya ma kpọọ maka enyemaka", "Gwa ya ka o bilie ọtọ", "Leghara ya anya"], answer: 1, why: "Isi ọgbụgba bụ ihe ịrịba ama ịkwụsị: wepụ tourniquet na agịga, pịa ebe ahụ, chebe onye ọrịa, kpọọ maka enyemaka." }
          ]
        },
        {
          title: "Igbochi ọrịa na nchekwa agịga",
          objectives: ["O5"],
          minutes: 5,
          goal: "Họrọ nzọụkwụ ziri ezi maka igbochi ọrịa na nchekwa agịga n'ọnọdụ omume.",
          text: [
            "Ọbara nwere ike iburu nje dị ka hepatitis B, hepatitis C na HIV, a na-akpọ ha bloodborne pathogens (nje na-esi n'ọbara). Bloodborne Pathogens Standard nke OSHA na-achọ ka ndị were mmadụ n'ọrụ nwee atụmatụ nchịkwa mmetụta (exposure control plan), nye ọgwụ mgbochi hepatitis B, zụọ ndị ọrụ, nye ngwa nchekwa ahụ, ma jiri ngwa agịga dị nchebe karịa.",
            "Omume gị: hichaa aka gị tupu na mgbe onye ọrịa ọ bụla gasịrị na mgbe ị yipụrụ uwe aka; yiri uwe aka ọhụrụ maka onye ọrịa ọ bụla; jiri agịga nwere ngwa nchekwa ma gbanye ya ozugbo; tinye agịga e jirila mee ihe ozugbo n'ime igbe agịga (sharps container), ejila aka gị kpuchie ha ọzọ mgbe ọ bụla, ma ekwela ka igbe ahụ jupụta karịa oke.",
            "Ọ bụrụ na agịga dụrụ gị ma ọ bụ ọbara metụrụ akpụkpọ ahụ gị ma ọ bụ banye n'anya gị: jiri ncha na mmiri saa ebe ahụ (jiri mmiri sachaa anya), ma gwa onye isi gị ozugbo ka e lelee gị. Echela."
          ],
          steps: ["Hichaa aka tupu na mgbe onye ọrịa ọ bụla gasịrị.", "Uwe aka ọhụrụ maka onye ọrịa ọ bụla.", "Gbanye ngwa nchekwa ozugbo agịga pụtara.", "Tụba agịga ozugbo n'ime igbe agịga; ejila aka kpuchie ya ọzọ.", "Mmetụta: saa ma ọ bụ sachaa, wee kọọ ya ozugbo."],
          words: [["Bloodborne pathogens", "nje dị n'ọbara nwere ike ibute ọrịa, dị ka hepatitis B, hepatitis C na HIV."], ["OSHA", "Occupational Safety and Health Administration, ụlọ ọrụ gọọmentị etiti na-ahụ maka nchekwa n'ebe ọrụ."], ["Igbe agịga (sharps container)", "igbe siri ike nwere akara maka agịga e jirila mee ihe na ihe ndị ọzọ dị nkọ."], ["PPE", "ngwa nchekwa ahụ (personal protective equipment), dị ka uwe aka."]],
          slides: [
            { title: "Ihe mere o ji dị mkpa", bullets: ["Ọbara nwere ike iburu hepatitis B, hepatitis C, HIV", "Bloodborne Pathogens Standard nke OSHA na-echebe ndị ọrụ"] },
            { title: "Onye were gị n'ọrụ ga-", bullets: ["Nwee atụmatụ nchịkwa mmetụta na ọzụzụ", "Nye ọgwụ mgbochi hepatitis B", "Nye PPE na ngwa agịga dị nchebe karịa"] },
            { title: "Omume gị", bullets: ["Aka dị ọcha; uwe aka ọhụrụ maka onye ọrịa ọ bụla", "Gbanye ngwa nchekwa ozugbo", "Ozugbo n'ime igbe agịga; ejila aka kpuchie ya ọzọ"] },
            { title: "Ọ bụrụ na ọbara metụrụ gị", bullets: ["Jiri ncha na mmiri saa; jiri mmiri sachaa anya", "Gwa onye isi gị ozugbo"] }
          ],
          sources: [
            { name: "OSHA: Bloodborne pathogens and needlestick prevention (n'asụsụ bekee)", url: "https://www.osha.gov/bloodborne-pathogens" }
          ],
          tryIt: "Omume naanị. Maka ọnọdụ ọ bụla, dee nzọụkwụ ziri ezi: (1) ị mechara otu onye ọrịa, onye na-esote anọdụ ala, (2) agịga apụọla n'akwara ọbara, (3) igbe agịga ejupụtala ruo n'ahịrị ya, (4) agịga e jirila mee ihe dụrụ gị site n'uwe aka gị. Azịza: hichaa aka ma yiri uwe aka ọhụrụ; gbanye ngwa nchekwa ma tinye ya n'igbe agịga; mechie igbe ahụ ma were nke ọhụrụ; saa ebe ahụ ma kọọ ya ozugbo.",
          youCanNow: "ịhọrọ nzọụkwụ ziri ezi maka igbochi ọrịa na nchekwa agịga, na ikwu ihe a ga-eme mgbe ọbara metụrụ gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka ị na-eme agịga e jirila mee ihe?", options: ["Gbanye ngwa nchekwa ma tinye ya ozugbo n'igbe agịga", "Jiri aka kpuchie ya ọzọ", "Tụba ya n'ihe nkpofu nkịtị", "Tọgbọ ya n'efere maka emesịa"], answer: 0, why: "Ngwa nchekwa na itinye ya ozugbo n'igbe agịga na-egbochi agịga ịdụ mmadụ." },
            { objective: "O5", q: "Agịga e jirila mee ihe dụrụ gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Mechaa ọrụ gị, wee kpebie", "Zoo ya ka a ghara ịta gị ụta", "Jiri ncha na mmiri saa ebe ahụ ma kọọ ya ozugbo", "Tinye bandeeji ma chefuo ya"], answer: 2, why: "Saa, wee kọọ ya ozugbo ka e lelee gị ngwa ngwa." }
          ]
        },
        {
          title: "Itinye akara na ijikwa ihe nlele, na ndepụta nlele gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kpebie ma e tinyere akara na ihe nlele ma jikwaa ya nke ọma ka ụlọ nyocha nara ya.",
          text: [
            "Iwe ọbara zuru oke na-efu efu ma ọ bụrụ na ụlọ nyocha enweghị ike iji ọbara ahụ. Ụlọ nyocha na-ajụ ihe nlele na-enweghị akara ma ọ bụ nwere akara na-ezighi ezi, nọ na tub na-ezighi ezi, ejupụtaghị nke ọma, kpụkọrọ mgbe ọ na-ekwesịghị, hemolyzed (mkpụrụ ọbara uhie gbajiri, nke na-esikarị n'iwe ọbara siri ike ma ọ bụ tub e kwere ekwe), ma ọ bụ na-edebeghị ya n'ọkwa okpomọkụ ziri ezi ma ọ bụ n'oge ziri ezi.",
            "Tinye akara na tub ọ bụla n'ihu onye ọrịa, ozugbo i wechara ọbara, ọ bụghị mgbe ọ bụla tupu ya. Soro iwu ụlọ nyocha gị maka ihe a ga-ede n'akara ahụ, nke na-abụkarị aha zuru ezu onye ọrịa, ụbọchị ọmụmụ ma ọ bụ nọmba njirimara, ụbọchị na oge, na mkpụrụ aha gị (initials). Mgbe ahụ tụnyere akara ahụ na iwu nyocha otu ugboro ọzọ.",
            "Zipu ihe nlele otu ụlọ nyocha gị kwuru: ụfọdụ na-aga n'ime ice, a na-ezo ụfọdụ n'ìhè, ụfọdụ ga-erurịrị ụlọ nyocha n'ime oge a kara aka. Debe ozi onye ọrịa na nzuzo n'ụzọ.",
            "Ugbu a mee ọrụ ikpeazụ gị: ndepụta nlele nke gị (pocket checklist), gbakwunyere atụmatụ ọzụzụ na ule gị."
          ],
          steps: ["Tinye akara na tub ọ bụla n'ihu onye ọrịa, ozugbo i wechara ọbara.", "Tinye ihe ụlọ nyocha gị chọrọ: aha, ụbọchị ọmụmụ ma ọ bụ nọmba njirimara, ụbọchị, oge, mkpụrụ aha gị.", "Tụnyere akara ndị ahụ na iwu nyocha.", "Jikwaa ma zipu tub otu ụlọ nyocha kwuru (ice, ìhè, oge).", "Kọọ nsogbu ọ bụla kama izipu ihe nlele na-adịghị mma."],
          words: [["Ihe nlele (specimen)", "ihe a na-ewe nyocha, dị ka tub ọbara, a na-ezigara ụlọ nyocha."], ["Hemolysis", "mgbe mkpụrụ ọbara uhie gbawara, nke nwere ike imebi nsonaazụ ụfọdụ nyocha."], ["Ihe nlele a jụrụ (rejected specimen)", "ihe nlele ụlọ nyocha agaghị enyocha, ya mere a ga-ewe onye ọrịa ọbara ọzọ."]],
          slides: [
            { title: "Ihe mere ụlọ nyocha ji ajụ ihe nlele", bullets: ["Enweghị akara ma ọ bụ akara na-ezighi ezi", "Tub na-ezighi ezi ma ọ bụ ejupụtaghị nke ọma", "Kpụkọrọ, hemolyzed, okpomọkụ na-ezighi ezi ma ọ bụ oge agafeela"] },
            { title: "Tinye akara nke ọma", bullets: ["N'ihu onye ọrịa, ozugbo i wechara ọbara", "Ihe ụlọ nyocha gị chọrọ: aha, DOB ma ọ bụ ID, ụbọchị, oge, mkpụrụ aha", "Tụnyere ya na iwu nyocha"] },
            { title: "Jikwaa ya nke ọma", bullets: ["Iwu ice, ìhè ma ọ bụ oge", "Debe ozi na nzuzo", "Kọọ nsogbu; ezipula ihe nlele na-adịghị mma"] },
            { title: "Ọrụ ikpeazụ", bullets: ["Ndepụta nlele gị, site na mmalite ruo n'ihicha", "Usoro iwe ọbara nke ụlọ nyocha gị", "Atụmatụ ọzụzụ na ule gị nwere ụbọchị"] }
          ],
          tryIt: "Ọrụ ikpeazụ. Mee ndepụta nlele (pocket checklist) maka iwe ọbara nkịtị: ịmata onye ọrịa na ịlele iwu nyocha, ịdị ọcha aka na uwe aka, usoro iwe ọbara, nzọụkwụ nke iwe ọbara, mgbe a ga-akwụsị, itụfu agịga, itinye akara n'ihu onye ọrịa, ijikwa ihe nlele na ihicha ebe ahụ. N'azụ ya, dee atụmatụ gị: mmemme ọzụzụ, ule asambodo, iwu steeti gị na ụbọchị ị lekwasịrị anya. Ejila ezi ozi onye ọrịa ọ bụla.",
          youCanNow: "itinye akara na ijikwa ihe nlele ka ụlọ nyocha nwee ike iji ha, ịhụ ihe mere a ga-eji jụ ha, na iji ndepụta nlele na atụmatụ nke gị.",
          quickCheck: [
            { objective: "O6", q: "Olee mgbe ị na-etinye akara na tub?", options: ["Tupu gị na onye ọrịa ahụ ezute", "Na njedebe nke oge ọrụ gị", "N'ihu onye ọrịa, ozugbo i wechara ọbara", "Mgbe ụlọ nyocha kpọrọ"], answer: 2, why: "Itinye akara n'ihu onye ọrịa ozugbo i wechara ọbara na-egbochi mgbagwoju anya." },
            { objective: "O6", q: "Tub na-enweghị akara erute ụlọ nyocha. Gịnị na-eme?", options: ["Ụlọ nyocha na-echepụta onye nwe ya", "Ụlọ nyocha na-ajụ ya, a ga-ewekwa onye ọrịa ọbara ọzọ", "Ụlọ nyocha na-enyocha ya ka o sila dị", "Ụlọ nyocha na-etinye akara site na ncheta"], answer: 1, why: "A na-ajụ ihe nlele na-enweghị akara n'ihi na ọ dịghị onye nwere ike ịma n'ezie onye nwe ọbara ahụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Iwe ọbara, nchekwa na ihe nlele",
        questions: [
          { objective: "O4", q: "Kedu akwara ọbara na-abụkarị nhọrọ mbụ maka iwe ọbara nkịtị?", options: ["Akwara ọbara dị n'ụkwụ", "Akwara ọbara dị n'olu", "Naanị akwara ọbara dị n'azụ aka", "Median cubital vein dị na nkuchi ikpere aka"], answer: 3, why: "Median cubital vein na-abụkarị nhọrọ mbụ n'ihi na ọ na-adịkarị mfe iru ya." },
          { objective: "O4", q: "Kedu nke bụ ihe ịrịba ama ịkwụsị iwe ọbara?", options: ["Onye ọrịa na-enwe mgbu dị nkọ, na-agba agba ma ọ bụ dị ka ọkụ eletrik", "Tub na-ejupụta", "Onye ọrịa dere duu", "Tourniquet ka dị n'aka"], answer: 0, why: "Mgbu na-agba agba ma ọ bụ dị ka ọkụ eletrik nwere ike ịpụta na metụrụ akwara mmetụta (nerve); kwụsị ozugbo." },
          { objective: "O5", q: "Kedu omume agịga dị nchebe?", options: ["Iji aka kpuchie agịga ọzọ", "Ijupụta igbe agịga karịa oke", "Itinye agịga ozugbo n'igbe agịga", "Ịhapụ agịga n'efere"], answer: 2, why: "Agịga na-aga ozugbo n'igbe agịga, a naghị eji aka kpuchie ha ọzọ." },
          { objective: "O5", q: "N'okpuru Bloodborne Pathogens Standard nke OSHA, ọgwụ mgbochi olee ka ndị were mmadụ n'ọrụ ga-enye?", options: ["Flu", "Hepatitis B", "Measles (akpata)", "Tetanus"], answer: 1, why: "Ndị were mmadụ n'ọrụ ga-eme ka ọgwụ mgbochi hepatitis B dịrị ndị ọrụ nwere ike ịmetụ ọbara." },
          { objective: "O6", q: "Gịnị bụ hemolysis?", options: ["Mkpụrụ ọbara uhie na-agbawa", "Ụdị tub", "Ụdị ọbara", "Iwe ọbara dị ọcha"], answer: 0, why: "Hemolysis bụ mkpụrụ ọbara uhie gbajiri, nke nwere ike imebi nsonaazụ ụfọdụ nyocha." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe maka Ọrụ Onye Na-ewe Ọbara (Phlebotomy Technician)",
    questions: [
      { objective: "O1", q: "Gịnị bụ phlebotomy?", options: ["Ise foto X-ray", "Ịgba ọgwụ", "Iwe ọbara maka nyocha ma ọ bụ inye ọbara", "Inye ọgwụ dọkịta dere"], answer: 2, why: "Phlebotomy pụtara iwe ọbara." },
      { objective: "O1", q: "Ihe ọmụmụ ịntanetị a naanị ọ̀ nwere ike ime ka ị ruo eru iwe ọbara?", options: ["Ee, mgbe ule gasịrị", "Mba; ị chọrọ mmemme ọzụzụ na iwe ọbara ebe onye nkuzi na-ele anya", "Ee, ọ bụrụ na ị lere vidiyo", "Ee, na steeti ọ bụla"], answer: 1, why: "A na-amụta ma gosipụta ezi iwe ọbara naanị na mmemme ebe onye nkuzi na-ele anya." },
      { objective: "O1", q: "Ebee ka ị na-elele ihe asambodo chọrọ ugbu a?", options: ["Ezi peeji otu na-enye asambodo ahụ", "Ozi na soshal midia", "Enyi gị", "Akwụkwọ ọgụgụ ochie"], answer: 0, why: "Ihe a chọrọ na ụgwọ na-agbanwe; ezi peeji ahụ bụ nke ugbu a." },
      { objective: "O2", q: "Kedu ihe njirimara abụọ a na-ejikarị?", options: ["Nọmba ọnụ ụlọ na agba akwa ndina", "Ogologo na ịdị arọ", "Aha dọkịta na aha nyocha", "Aha zuru ezu na ụbọchị ọmụmụ"], answer: 3, why: "Aha zuru ezu na ụbọchị ọmụmụ bụ ihe njirimara abụọ a na-ejikarị." },
      { objective: "O2", q: "Gịnị bụ requisition?", options: ["Tub ọbara", "Iwu nyocha nke na-edepụta onye ọrịa na nyocha", "Bandeeji", "Akwụkwọ ụgwọ"], answer: 1, why: "Requisition bụ iwu nyocha." },
      { objective: "O2", q: "Gịnị mere ị ga-eji rịọ onye ọrịa ka o kwuo aha ya kama ịjụ \"Ị bụ ...?\"", options: ["Ọ dị ngwa karịa", "O nwere nkwanye ugwu karịa", "Onye ọrịa na-atụ egwu nwere ike ịza ee n'aha na-ezighi ezi", "Iwu kwuru ya"], answer: 2, why: "Ime ka ha kwuo ya na-ejide mgbagwoju anya." },
      { objective: "O3", q: "N'usoro iwe ọbara a na-ahụkarị, kedu tub na-abịa n'ikpeazụ?", options: ["Light blue", "Uhie", "Akwụkwọ ndụ (green)", "Ntụ ntụ (gray)"], answer: 3, why: "Ntụ ntụ (sodium fluoride na potassium oxalate) na-abịa n'ikpeazụ n'usoro a na-ahụkarị." },
      { objective: "O3", q: "Kedu nke na-abịa ozugbo mgbe blood culture gasịrị?", options: ["Light blue (sodium citrate)", "Lavender", "Ntụ ntụ (gray)", "Akwụkwọ ndụ (green)"], answer: 0, why: "Light blue na-eso blood culture n'usoro a na-ahụkarị." },
      { objective: "O3", q: "Agba mkpuchi tub dị iche n'ụlọ nyocha ọhụrụ gị. Gịnị ka ị ga-agbaso?", options: ["Slaịdị ihe ọmụmụ a", "Ihe ị na-echeta site n'ọrụ ochie", "Chaatị nke ụlọ nyocha gị n'onwe ya", "Ihe ọ bụla kachasị ngwa"], answer: 2, why: "Chaatị ụlọ nyocha ọ bụla bụ iwu, n'ihi na ndị na-emepụta tub na ụlọ nyocha dị iche iche." },
      { objective: "O3", q: "Kedu otu ị na-esi agwakọta tub nwere ihe agbakwunyere?", options: ["Kwee ya ike", "Tụgharịa ya nwayọọ, dịka onye mepụtara ya kwuru", "Hapụ ya otu ọ dị", "Kpoo ya ọkụ"], answer: 1, why: "Ịtụgharị nwayọọ na-agwakọta ihe agbakwunyere n'agbajighị mkpụrụ ọbara." },
      { objective: "O4", q: "Kedu nzọụkwụ na-ebu ụzọ?", options: ["Mata onye ọrịa ma lelee iwu nyocha", "Kee tourniquet", "Tinye agịga", "Tinye akara na tub"], answer: 0, why: "Iwe ọbara ọ bụla na-amalite site n'onye ọrịa ziri ezi na iwu nyocha ziri ezi." },
      { objective: "O4", q: "Gịnị bụ hematoma?", options: ["Agba tub", "Ụdị agịga", "Ebe dị ọcha", "Ọzịza nke ọbara n'okpuru akpụkpọ ahụ"], answer: 3, why: "Hematoma bụ ọbara na-agbakọ n'okpuru akpụkpọ ahụ." },
      { objective: "O4", q: "Olee mgbe ị na-atọpụ tourniquet?", options: ["Tupu ihicha ebe ahụ", "Mgbe itinye akara gasịrị", "Tupu iwepụ agịga", "Ọ dịghị mgbe"], answer: 2, why: "A na-atọpụ tourniquet tupu agịga apụta." },
      { objective: "O5", q: "Gịnị bụ bloodborne pathogens?", options: ["Nje dị n'ọbara nwere ike ibute ọrịa", "Igwe ụlọ nyocha", "Ihe agbakwunyere na tub", "Ụdị bandeeji"], answer: 0, why: "Hepatitis B, hepatitis C na HIV bụ ọmụmaatụ." },
      { objective: "O5", q: "Ụkpụrụ ụlọ ọrụ gọọmentị etiti olee na-echebe ndị ọrụ pụọ na bloodborne pathogens?", options: ["FDA", "OSHA", "DMV", "IRS"], answer: 1, why: "Bloodborne Pathogens Standard nke OSHA na-ahụ maka nke a." },
      { objective: "O5", q: "Ọbara fesara n'anya gị. Gịnị ka ị ga-eme?", options: ["Gaa n'ihu n'ọrụ", "Kpochaa ya n'aka", "Chere ruo echi", "Jiri mmiri sachaa ya ma kọọ ya ozugbo"], answer: 3, why: "Sachaa ozugbo ma kọọ ya ka e lelee gị." },
      { objective: "O5", q: "Olee mgbe ị na-agbanwe uwe aka?", options: ["Otu ugboro n'ụbọchị", "Maka onye ọrịa ọ bụla", "Naanị mgbe ọ dọwara adọwa", "Ọ dịghị mgbe"], answer: 1, why: "Uwe aka ọhụrụ maka onye ọrịa ọ bụla na-egbochi ịgbasa nje." },
      { objective: "O6", q: "Kedu ihe mere ụlọ nyocha ga-eji jụ ihe nlele?", options: ["E tinyere ya akara n'ihu onye ọrịa", "E zitere ya n'oge", "Ọ bụ hemolyzed", "Ọ nọ na tub ziri ezi"], answer: 2, why: "Hemolysis nwere ike imebi nsonaazụ, ya mere ụlọ nyocha nwere ike ịjụ ya." },
      { objective: "O6", q: "Gịnị ka a na-ede n'akara tub?", options: ["Ihe ụlọ nyocha gị chọrọ, nke na-abụkarị aha, DOB ma ọ bụ ID, ụbọchị, oge na mkpụrụ aha gị", "Naanị agba tub", "Nọmba ekwentị onye ọrịa", "Ọ dịghị ihe"], answer: 0, why: "Ụlọ nyocha na-esetịpụ iwu akara; ozi ndị a bụ nke a na-ejikarị." },
      { objective: "O6", q: "Ị hụrụ na e jupụtaghị otu tub nke ọma. Gịnị ka ị ga-eme?", options: ["Zipu ya ka o sila dị", "Tinye mmiri", "Gwakọta ya na tub ọzọ", "Kọọ ya ma soro iwu ụlọ nyocha gị; ezipula ihe nlele na-adịghị mma"], answer: 3, why: "Tub ejupụtaghị nke ọma nwere ike inye nsonaazụ na-ezighi ezi; soro iwu ụlọ nyocha." }
    ]
  },
  // ---- ADDIE: Nyocha ikpeazụ ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 3, 6, 7, 10, 11, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Atụmatụ ọzụzụ na ule", objective: "O1", notYet: "Akpọghị aha mmemme ma ọ bụ ule, ma ọ bụ e chepụtara ihe a chọrọ.", meets: "Ọ na-akpọ aha mmemme ọzụzụ, ule asambodo na ihe ọ chọrọ site n'ezi peeji, iwu steeti na ụbọchị a lekwasịrị anya.", exceeds: "Ọ na-atụnyere mmemme abụọ, gụnyere iwe ọbara ole nke ọ bụla na-enye ebe onye nkuzi na-ele anya." },
      { name: "Ịmata onye ọrịa na iwu nyocha", objective: "O2", notYet: "Ndepụta nlele ahụ na-awụfe ịmata onye ọrịa ma ọ bụ ịlele iwu nyocha.", meets: "Ọ na-amalite site n'ihe njirimara abụọ onye ọrịa kwuru na ịlele iwu nyocha, ya na \"kwụsị ma ọ bụrụ na ọ dabaghị\".", exceeds: "Ọ na-ekwukwa banyere eriri njirimara n'ụlọ ọgwụ na ntụziaka pụrụ iche dị ka ibu ọnụ." },
      { name: "Usoro iwe ọbara", objective: "O3", notYet: "Tub fọdụrụ ma ọ bụ ha esoghị usoro.", meets: "Tub niile nọ n'usoro ziri ezi site na chaatị mmemme ma ọ bụ nke ụlọ nyocha.", exceeds: "Ọ na-agbakwunye ihe mere usoro ahụ ji dị mkpa na ịtụgharị tub nwayọọ." },
      { name: "Nzọụkwụ na ihe ịrịba ama ịkwụsị", objective: "O4", notYet: "Nzọụkwụ fọdụrụ ma ọ bụ esoghị usoro, ma ọ bụ enweghị ihe ịrịba ama ịkwụsị.", meets: "Nzọụkwụ niile n'usoro, ya na ihe ịrịba ama na-egosi na a ga-akwụsị iwe ọbara.", exceeds: "Ọ na-agbakwunye ihe a ga-eme maka onye ọrịa na-ada mba." },
      { name: "Nchekwa", objective: "O5", notYet: "Enweghị nzọụkwụ ịdị ọcha aka, uwe aka ma ọ bụ agịga.", meets: "Ịdị ọcha aka, uwe aka ọhụrụ, ngwa nchekwa, igbe agịga na ihe a ga-eme mgbe ọbara metụrụ gị.", exceeds: "Ọ na-ekwu na e jighị aka ekpuchi agịga ọzọ na na a naghị ejupụta igbe agịga karịa oke." },
      { name: "Itinye akara na ijikwa", objective: "O6", notYet: "Ọ na-etinye akara tupu iwe ọbara ma ọ bụ n'ebe onye ọrịa anọghị.", meets: "Ọ na-etinye akara n'ihu onye ọrịa mgbe iwe ọbara gasịrị, na-atụnyere ya na iwu nyocha ma na-agbaso iwu ijikwa.", exceeds: "Ọ na-edepụta ihe atọ mere ụlọ nyocha ji ajụ ihe nlele na otu esi egbochi nke ọ bụla." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe debanyere aha na mmemme ọzụzụ phlebotomy a kwadoro n'ime ụbọchị 90",
      "Ndị na-amụ ihe gafere ule asambodo phlebotomy dị ka CPT nke NHA (ha n'onwe ha kọrọ)",
      "Ndị na-amụ ihe e were n'ọrụ dị ka ndị na-ewe ọbara ma ọ bụ ndị enyemaka ụlọ nyocha n'ime ọnwa 6"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka peeji NHA na nke ngalaba ahụike steeti",
      "Akwụkwọ, mkpịsị ode nwere agba ma ọ bụ mpempe akwụkwọ maka omume usoro iwe ọbara, na kaadị maka ndepụta nlele",
      "Chaatị usoro iwe ọbara nke mmemme ọzụzụ gị, ọ bụrụ na i nwere ya",
      "Ihe dị ka nkeji 70 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Enweghị agịga, tub ma ọ bụ ọbara n'ihe ọmụmụ a; ekwela ka ndị na-amụ ihe nwalee iwe ọbara n'ahụ ibe ha. Omume aka bụ maka mmemme a kwadoro ebe onye nkuzi na-ele anya.",
      "Ndị na-amụ ihe na-enwe isi ọgbụgba ma ha hụ ọbara: kwe ka ha wụfee foto ma kparịta ụka ma ọrụ a ọ dabara ha.",
      "Weta chaatị usoro iwe ọbara site na mmemme ọzụzụ ma ọ bụ ụlọ nyocha dị nso, n'ihi na agba nwere ike ịdị iche.",
      "Mee egwuregwu omume ịmata onye ọrịa n'abụọ n'abụọ, ya na ihe adabaghị e zoro ezo n'ime ya.",
      "Chetara ndị na-amụ ihe ka ha lelee iwu steeti ha; ụfọdụ steeti, dị ka California, na-enye asambodo nke ha.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
