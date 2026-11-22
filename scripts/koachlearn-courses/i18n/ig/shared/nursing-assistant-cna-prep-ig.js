"use strict";

// Koach Learn course (Igbo translation of shared/nursing-assistant-cna-prep.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "nursing-assistant-cna-prep-ig",
  lang: "ig",
  translationOf: "nursing-assistant-cna-prep",
  category: "Workforce Development",
  name: "Nkwadebe maka Certified Nursing Assistant (CNA)",
  skills: "Ịmata ụzọ CNA nke steeti gị, Ihicha aka na iji gloves n'enweghị nsogbu, Ichebe ikike na nzuzo ndị bi n'ebe nlekọta, Inye nlekọta kwa ụbọchị n'enweghị nsogbu, Ịhụ na ịkọ mgbanwe, Ịhazi atụmatụ maka ule steeti",
  outcome: "ime atụmatụ nke gị iji ghọọ certified nursing assistant na steeti gị, na ịkọwa isi ihe gbasara nchekwa, nzuzo, nlekọta na ịkọ ihe nke ule steeti na-enyocha.",
  about: [
    "Certified nursing assistant (CNA) na-enyere ndị mmadụ aka na nlekọta kwa ụbọchị n'ụlọ nlekọta ndị agadi (nursing home), n'ụlọ ọgwụ na n'ebe nlekọta ndị ọzọ. Ọ bụ otu n'ime ụzọ kacha ọsọ isi banye n'ọrụ ahụike, ọtụtụ nọọsụ bidokwara dị ka CNA.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị eme gị CNA. Iji nweta asambodo, ị ga-emecha mmemme ọzụzụ steeti kwadoro, gafee ule ikike (competency test) nke steeti gị, ma e dee aha gị na ndepụta nurse aide nke steeti gị (registry). Steeti ọ bụla na-eme iwu nke ya, ya mere ị ga-amụta ebe ị ga-elele nke gị.",
    "Ị ga-amụta ihe ọmụma ọrụ ahụ na ule ahụ dabere na ya: aka dị ọcha, ikike na nzuzo ndị bi n'ebe nlekọta, nlekọta kwa ụbọchị n'enweghị nsogbu, na otu esi ahụ ma kọọ ihe. Nka aka dị ka ibugharị mmadụ ma ọ bụ ịtụ ọbara mgbali (blood pressure) ka a na-eme na mmemme gị nke a na-elekọta anya, ọ bụghị n'ụlọ n'ahụ ezi onye ọrịa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\" na obere nnwale nwere ajụjụ abụọ. Na njedebe, ị ga-eme atụmatụ ọmụmụ na ule nke gị nwere ezi ụbọchị."
  ],
  finalTask: "Mee atụmatụ ọmụmụ na ule CNA nke otu peeji maka steeti gị: peeji registry ma ọ bụ peeji ngalaba ahụike gọọmentị (health department) i lelere, mmemme abụọ a kwadoro dị nso gị na ego ha na-ewe na mgbe ha na-amalite (site na peeji nke ha), akụkụ ule steeti gị, usoro ọmụmụ kwa izu nwere ụbọchị, nka ise ị ga-emekarị na klas, na otu onye ị ga-agwa ma ọ bụrụ na i nwere ajụjụ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ọrụ mbido n'ahụike: ndị na-achọ ọrụ, ndị ntorobịa, ndị na-alọta site n'ụlọ mkpọrọ, ndị si mba ọzọ bịa na ndị okenye na-alaghachi ịmụ ihe. Ọtụtụ bụ ndị nwere obi ọma, ndị lekọtara ezinụlọ ha, mana ha anaghị enweta ọzụzụ ahụike.",
    startingPoint: "Ha nwere ike ịgụ ntụziaka dị mkpụmkpụ ma jiri ekwentị ma ọ bụ kọmputa chọọ ihe. Ọtụtụ amụbeghị klas ahụike. Ụfọdụ elekọtala onye ikwu n'ụlọ.",
    gap: "Ọrụ nurse aide chọrọ mmemme steeti kwadoro na ule steeti a gafere. Ndị na-amụ ihe anaghịkarị ama nzọụkwụ ndị ahụ, peeji gọọmentị ha ga-atụkwasị obi, ma ọ bụ isi ihe nchekwa na nzuzo ule ahụ na-atụ anya ya. Ịmata ụzọ ahụ na isi ihe ndị a na-enyere ha aka ịhọrọ ezi mmemme ma mechaa ya.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6 ruo 7)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; akwụkwọ dị mma maka ọrụ ọ bụla",
      "Iwu dị iche site na steeti; ihe ọmụmụ a na-eduga na registry steeti kama ikwu awa ma ọ bụ ego",
      "Enweghị omume nlekọta n'ahụ ezi mmadụ n'ụlọ; a na-amụta nka aka na mmemme a na-elekọta anya",
      "Ikpe mpụ gara aga nwere ike imetụta ide aha na registry na steeti ụfọdụ; ndị na-amụ ihe na-elele iwu steeti nke ha"
    ],
    prerequisites: "Ọ dịghị. \"Ọmụma Ahụike: Ịghọta Nlekọta Ahụike Gị\" bụ ihe ọmụmụ mbụ bara uru."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji peeji gọọmentị nke registry nurse aide ma ọ bụ ngalaba ahụike nke steeti gị", action: "idepụta nzọụkwụ iji ghọọ certified nursing assistant na steeti gị", standard: "na-akpọ aha mmemme a kwadoro, ule ikike na registry, ya na peeji i lelere" },
    { id: "O2", condition: "Mgbe e nyere gị ọnọdụ nlekọta", action: "ịhọrọ mgbe na otu ị ga-esi hichaa aka gị ma jiri gloves", standard: "ma nweta opekata mpe 4 n'ime ọnọdụ 5 ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị obere akụkọ gbasara onye bi n'ebe nlekọta", action: "ịmata ma a na-echebe ikike ma ọ bụ nzuzo onye ahụ, na ikwu ihe ị ga-eme ma ọ bụrụ na a naghị eme ya", standard: "gụnyere onye ị ga-akọrọ" },
    { id: "O4", condition: "Mgbe e nyere gị ọrụ nlekọta kwa ụbọchị dị ka ịgbanwe ọnọdụ mmadụ, inyere ya aka ije ije ma ọ bụ inye nri", action: "ịhazi nzọụkwụ nchekwa n'usoro ziri ezi", standard: "na-enweghị nzọụkwụ ọ bụla na-etinye onye ahụ ma ọ bụ gị n'ihe egwu" },
    { id: "O5", condition: "Mgbe e nyere gị chaatị onye e chepụtara echepụta na mgbanwe ị hụrụ", action: "ide obere ndetu nwere eziokwu ma kọọ ya nọọsụ", standard: "na-eji ihe ị hụrụ ma ọ bụ tụrụ, ọ bụghị ịkọ nkọ" },
    { id: "O6", condition: "Site n'iji kalenda nke gị", action: "ime atụmatụ ọmụmụ na ule nwere ụbọchị", standard: "nke na-ekpuchi akụkụ ọ bụla nke ule steeti gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ụzọ CNA na isi ihe nlekọta n'enweghị nsogbu",
      lessons: [
        {
          title: "Ihe CNA na-eme na otu esi enweta asambodo",
          objectives: ["O1"],
          minutes: 5,
          goal: "Depụta nzọụkwụ iji ghọọ CNA na steeti gị ma chọta peeji gọọmentị nke steeti gị.",
          text: [
            "Nursing assistant na-enye nlekọta bụ isi ma na-enyere ndị mmadụ aka na ndụ kwa ụbọchị: ịsa ahụ, iyi uwe, iji ụlọ mposi, iri nri, imegharị ahụ na ịtụgharị. Ha na-atụ ihe ịrịba ama ndụ (vital signs), na-ele mgbanwe anya ma na-akọrọ nọọsụ ya. Ha na-arụ ọrụ n'okpuru ntụziaka nọọsụ.",
            "Na ọtụtụ steeti, ụzọ ahụ nwere nzọụkwụ atọ. Nke mbụ, mechaa mmemme ọzụzụ nurse aide steeti kwadoro. Ọ na-agwakọta mmụta n'ime klas na omume a na-elekọta anya. Nke abụọ, gafee ule ikike nke steeti gị. Nke atọ, mee ka e dee aha gị na registry nurse aide nke steeti gị. Aha gị ga-adị na registry tupu ị rụọ ọrụ nurse aide n'ụlọ nlekọta ndị agadi.",
            "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị asambodo. Awa, ego, nyocha akụkọ ndụ (background check) na iwu ule dị iche site na steeti, ha nwekwara ike ịgbanwe. Lelee peeji registry nurse aide ma ọ bụ ngalaba ahụike nke steeti gị, ma jụọ mmemme ọ bụla ị na-ele ma steeti ọ kwadoro ya.",
            "Ụfọdụ mmemme bụ n'efu ma ọ bụ onye were gị n'ọrụ na-akwụ ụgwọ ya, dị ka ụlọ nlekọta ndị agadi were gị n'ọrụ mgbe ị na-amụ ihe. American Job Center nwekwara ike inyere aka kwụọ ụgwọ ọzụzụ. Jụọ tupu ị kwụọ ụgwọ."
          ],
          steps: ["Chọọ na weebụ aha steeti gị na \"nurse aide registry\".", "Meghee nsonaazụ si na saịtị gọọmentị steeti gị (na-ejedebekarị na .gov).", "Dee nzọụkwụ ndị ahụ, ule ahụ na iwu ọ bụla gbasara background check.", "Dee mmemme abụọ steeti kwadoro dị nso gị, ma lelee peeji nke onye ọ bụla."],
          words: [["CNA", "certified nursing assistant: nurse aide gafere ule steeti ma nwee aha na registry steeti."], ["Registry nurse aide", "ndepụta gọọmentị steeti nke nurse aide ndị nwere ike ịrụ ọrụ n'ụlọ nlekọta ndị agadi."], ["Mmemme steeti kwadoro", "mmemme ọzụzụ steeti nyochara ma kwe ka ọ zụọ nurse aide."], ["Ule ikike (competency test)", "ule steeti na-enyocha ihe ị maara na ihe ị nwere ike ime."]],
          slides: [
            { title: "Ihe CNA na-eme", bullets: ["Na-enyere aka n'ịsa ahụ, iyi uwe, iri nri na imegharị ahụ", "Na-atụ vital signs ma na-ele mgbanwe anya", "Na-akọrọ nọọsụ"] },
            { title: "Nzọụkwụ atọ na ọtụtụ steeti", bullets: ["1. Mechaa mmemme ọzụzụ steeti kwadoro", "2. Gafee ule ikike steeti", "3. Mee ka e dee aha gị na registry nurse aide"] },
            { title: "Ihe ọmụmụ a na-akwado gị", bullets: ["Ọ naghị enye asambodo", "Iwu, awa na ego dị iche site na steeti", "Lelee peeji registry nke steeti gị"] },
            { title: "Ịkwụ ụgwọ ọzụzụ", bullets: ["Ụfọdụ ndị were mmadụ n'ọrụ na-akwụ ụgwọ mgbe ị na-amụ ihe", "American Job Center nwere ike inyere aka", "Jụọ tupu ị kwụọ ụgwọ"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Nursing Assistants and Orderlies", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm" },
            { name: "CareerOneStop: Find an American Job Center", url: "https://www.careeronestop.org/LocalHelp/AmericanJobCenters/find-american-job-centers.aspx" }
          ],
          tryIt: "Chọta peeji registry nurse aide ma ọ bụ ngalaba ahụike nke steeti gị. N'akwụkwọ, dee nzọụkwụ atọ maka steeti gị, adreesị peeji ahụ, na otu iwu ị maghị (dịka ọmụmaatụ gbasara background check).",
          youCanNow: "idepụta nzọụkwụ iji ghọọ CNA na steeti gị na ịchọta peeji gọọmentị na-eme iwu ndị ahụ.",
          quickCheck: [
            { objective: "O1", q: "Kedu nzọụkwụ na-esote mgbe i mechara mmemme ọzụzụ steeti kwadoro?", options: ["Ịmalite inye ọgwụ", "Ịgafe ule ikike steeti", "Imeghe ụlọ ọgwụ nke gị", "Ịzụta asambodo n'ịntanetị"], answer: 1, why: "Mgbe mmemme ahụ gasịrị, ị na-agafe ule steeti, e mesịa dee aha gị na registry." },
            { objective: "O1", q: "Ebee ka ị ga-elele iwu CNA nke steeti gị?", options: ["Ozi na soshal midia", "Enyi mere ya ọtụtụ afọ gara aga", "Peeji registry nurse aide ma ọ bụ ngalaba ahụike nke steeti gị", "Mgbasa ozi ọ bụla na-ekwu \"nweta asambodo ngwa ngwa\""], answer: 2, why: "Steeti na-eme iwu, ya mere peeji gọọmentị ya bụ nke ị ga-atụkwasị obi." }
          ]
        },
        {
          title: "Aka dị ọcha na gloves: ịkwụsị mgbasa nje",
          objectives: ["O2"],
          minutes: 5,
          goal: "Họrọ mgbe ị ga-ehicha aka gị na ụzọ ị ga-esi hichaa ya.",
          text: [
            "Aka dị ọcha bụ ụzọ kacha mkpa isi kwụsị nje ịgbasa n'ebe nlekọta. Ndị ị na-elekọta na-abụkarị ndị agadi ma ọ bụ ndị ọrịa, ya mere nje nwere ike imerụ ha ahụ karịa.",
            "CDC (ụlọ ọrụ gọọmentị US na-ahụ maka ọrịa) kwuru na ndị ọrụ ahụike kwesịrị ihicha aka ha ozugbo tupu ha emetụ onye ọrịa aka, mgbe ha metụrụ onye ọrịa ma ọ bụ ihe ya aka, mgbe ha metụrụ ọbara ma ọ bụ mmiri ahụ aka, na ozugbo ha yipụrụ gloves.",
            "Hand sanitizer nwere mmanya (alcohol) bụ ihe a na-ahọrọkarị mgbe aka gị adịghị ka ọ ruru unyi. Tee ya n'akụkụ niile ruo mgbe aka gị kpọrọ nkụ, nke na-ewe ihe dị ka sekọnd 20. Jiri ncha na mmiri mgbe aka gị dị ka ọ ruru unyi, tupu iri nri na mgbe i jiri ụlọ mposi. Kpachie akụkụ ọ bụla nke aka na mkpịsị aka gị.",
            "Gloves na-enyere aka, mana ha anaghị anọchi aka dị ọcha. Jiri gloves ọhụrụ maka onye ọ bụla, asala ha ma jiri ha ọzọ, ma hichaa aka gị ozugbo i yipụrụ ha. Mmemme gị ga-akụziri gị otu esi eyi ma yipụ gloves, gown na mask n'usoro ziri ezi."
          ],
          steps: ["Hichaa aka ozugbo tupu i metụ onye bi n'ebe nlekọta aka.", "Yiri gloves ma ọ bụrụ na ị nwere ike imetụ ọbara, mmiri ahụ ma ọ bụ akpụkpọ ahụ dọwara adọwa.", "Yipụ gloves n'emetụghị elu ya aka n'aka efu.", "Hichaa aka ozugbo i yipụrụ gloves na tupu ị pụọ n'ọnụ ụlọ."],
          words: [["Ịdị ọcha aka (hand hygiene)", "ihicha aka gị site na hand sanitizer ma ọ bụ ncha na mmiri."], ["Njikwa ọrịa na-efe efe (infection control)", "nzọụkwụ ndị ọrụ ahụike na-eme iji kwụsị nje ịgbasa."], ["PPE", "personal protective equipment (ihe nchekwa onwe): gloves, gown, mask na ihe nchekwa anya."]],
          slides: [
            { title: "Mgbe ị ga-ehicha aka gị", bullets: ["Ozugbo tupu i metụ onye bi n'ebe nlekọta aka", "Mgbe i metụrụ onye ahụ ma ọ bụ ihe ya aka", "Mgbe ọbara ma ọ bụ mmiri ahụ", "Ozugbo i yipụrụ gloves"] },
            { title: "Ụzọ ị ga-esi hichaa ya", bullets: ["Aka adịghị unyi: hand sanitizer, tee ruo mgbe ọ kpọrọ nkụ", "Aka dị ka ọ ruru unyi: ncha na mmiri", "Ncha na mmiri tupu iri nri na mgbe ụlọ mposi"] },
            { title: "Gloves", bullets: ["Ha anaghị anọchi aka dị ọcha", "Gloves ọhụrụ maka onye ọ bụla", "Hichaa aka ozugbo i yipụrụ ha"] }
          ],
          sources: [{ name: "CDC: Clinical Safety: Hand Hygiene for Healthcare Workers", url: "https://www.cdc.gov/clean-hands/hcp/clinical-safety/index.html" }],
          tryIt: "Mee omume na sink nke gị. Jiri ncha na mmiri saa aka, na-ekpochi ọbụ aka, azụ aka, n'etiti mkpịsị aka, mkpịsị aka ukwu, ọnụ mkpịsị aka na nkwojiaka. Wee dee oge anọ CNA ga-ehicha aka na kaadị, debe ya maka ọmụmụ.",
          youCanNow: "ikwu mgbe CNA na-ehicha aka, ịhọrọ hand sanitizer ma ọ bụ ncha na mmiri, na iji gloves n'ahapụghị ihicha aka.",
          quickCheck: [
            { objective: "O2", q: "Aka gị dị ka ọ ruru unyi mgbe i nyechara onye bi n'ebe nlekọta aka. Gịnị ka ị ga-eji?", options: ["Naanị hand sanitizer", "Akwụkwọ nhicha kpọrọ nkụ", "Ọ dịghị ihe ruo oge ezumike gị", "Ncha na mmiri"], answer: 3, why: "Ncha na mmiri bụ ihe a na-ahọrọ mgbe aka dị ka ọ ruru unyi." },
            { objective: "O2", q: "I yipụchara gloves gị ugbu a. Gịnị ka ị ga-eme ọzọ?", options: ["Hichaa aka gị", "Tinye gloves n'akpa gị ka i jiri ha ọzọ", "Metụ onye ọzọ aka", "Ọ dịghị ihe, n'ihi na i yiri gloves"], answer: 0, why: "Gloves anaghị anọchi aka dị ọcha; hichaa ha ozugbo i yipụrụ gloves." }
          ]
        },
        {
          title: "Ikike ndị bi n'ebe nlekọta, nzuzo na ịkọ mmegbu",
          objectives: ["O3"],
          minutes: 5,
          goal: "Mata mgbe a naghị asọpụrụ ikike ma ọ bụ nzuzo onye bi n'ebe nlekọta, ma kwuo onye ị ga-akọrọ.",
          text: [
            "Ndị ị na-elekọta nwere ikike. Ha na-ahọrọ ihe ha ga-eyi na mgbe ha ga-ezu ike mgbe ha nwere ike. Ha na-enweta nzuzo mgbe ha na-asa ahụ ma ọ bụ na-eji ụlọ mposi. A na-agwa ha okwu nwere nkwanye ugwu ma na-akpọ ha aha ha na-achọ. Kụọ aka n'ọnụ ụzọ, kwuo onye ị bụ ma kọwaa ihe ị na-achọ ime.",
            "Ozi ahụike bụ nzuzo. Iwu gọọmentị etiti (federal) a na-akpọ HIPAA na-echebe ya. Kesaa ozi onye bi n'ebe nlekọta naanị ndị otu nlekọta chọrọ ya maka ọrụ ha. Ekwula banyere ndị bi n'ebe nlekọta n'okporo ụzọ ime ụlọ, n'ụlọ gị ma ọ bụ na soshal midia, ma etinyela foto ha n'ịntanetị mgbe ọ bụla.",
            "Mmegbu na ileghara anya nwere ike ịbụ n'ahụ, n'obi, n'ihe gbasara mmekọahụ ma ọ bụ n'ego, dị ka iwere ego. Ihe ịrịba ama gụnyere ọnya ọbara (bruise) onye ọ bụla na-enweghị ike ịkọwa, ọnya akwa (bed sore), adịghị ọcha, onye dị ka ọ na-atụ egwu ma ọ bụ na-anọ naanị ya, ma ọ bụ mgbanwe na mberede n'ego ya.",
            "Ọ bụrụ na ị hụ ma ọ bụ chee na e nwere mmegbu, gwa nọọsụ gị ma ọ bụ onye isi gị ozugbo. Na ọtụtụ steeti, iwu chọrọ ka nurse aide kọọ mmegbu a na-enyo enyo. Ọ bụrụ na mmadụ nọ n'ihe egwu ugbu a, kpọọ 911. Long-Term Care Ombudsman na steeti gị na-enyekwa ndị bi n'ụlọ nlekọta ndị agadi aka."
          ],
          steps: ["Kụọ aka n'ọnụ ụzọ, kwuo aha gị ma kọwaa ihe ị ga-eme.", "Mechie ákwà mgbochi ma ọ bụ ọnụ ụzọ maka nlekọta nzuzo.", "Kesaa ozi naanị ndị otu nlekọta.", "Kọọ ihe ịrịba ama mmegbu ma ọ bụ ileghara anya nye nọọsụ ozugbo."],
          words: [["HIPAA", "iwu gọọmentị etiti US na-echebe nzuzo ozi ahụike ndị mmadụ."], ["Ileghara anya (neglect)", "inyeghị mmadụ nlekọta ọ chọrọ, dị ka nri, ihicha ahụ ma ọ bụ ịtụgharị ya."], ["Ombudsman", "onye na-ekwuchitere ndị bi n'ụlọ nlekọta ndị agadi ma na-enyere aka dozie nsogbu."], ["Onye iwu chọrọ ka ọ kọọ (mandated reporter)", "onye ọrụ iwu chọrọ ka ọ kọọ mmegbu a na-enyo enyo."]],
          slides: [
            { title: "Nkwanye ugwu oge niile", bullets: ["Kụọ aka n'ọnụ ụzọ ma kwuo onye ị bụ", "Kọwaa tupu ị malite", "Nye nhọrọ mgbe ị nwere ike", "Mechie ákwà mgbochi maka nlekọta nzuzo"] },
            { title: "Nzuzo (HIPAA)", bullets: ["Kesaa naanị ndị otu nlekọta", "Ekwula okwu n'okporo ụzọ ime ụlọ ma ọ bụ n'ụlọ", "Enweghị foto ma ọ bụ ozi na soshal midia"] },
            { title: "Ihe ịrịba ama mmegbu ma ọ bụ ileghara anya", bullets: ["Ọnya ọbara onye ọ bụla na-enweghị ike ịkọwa", "Ọnya akwa ma ọ bụ adịghị ọcha", "Egwu, ịnọ naanị onwe, ma ọ bụ mgbanwe ego na mberede"] },
            { title: "Ihe ị ga-eme", bullets: ["Gwa nọọsụ ma ọ bụ onye isi gị ozugbo", "Ihe egwu ugbu a: kpọọ 911", "Ombudsman na-enyekwa ndị bi n'ebe nlekọta aka"] }
          ],
          sources: [
            { name: "MedlinePlus: Elder Abuse", url: "https://medlineplus.gov/elderabuse.html" },
            { name: "MedlinePlus: Patient Rights", url: "https://medlineplus.gov/patientrights.html" }
          ],
          tryIt: "Gụọ akụkọ e chepụtara echepụta a: \"Onye gị na ya na-arụ ọrụ tinyere foto na-atọ ọchị nke Mr. Lee, onye bi n'ebe nlekọta, na soshal midia, ma gwa gị na ezinụlọ Mr. Lee anaghị abịa ileta ya.\" Dee nsogbu abụọ ị hụrụ, na ihe ị ga-eme maka nke ọ bụla.",
          youCanNow: "ịhụ mgbe a naghị asọpụrụ ikike ma ọ bụ nzuzo onye bi n'ebe nlekọta na ịkọrọ ya onye kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O3", q: "Enyi gị jụrụ otu onye bi n'ebe nlekọta ọ maara si mee. Gịnị ka ị ga-ekwu?", options: ["Kesaa ozi ahụike onye ahụ", "Gosi ya chaatị ahụ", "Kwuo na ị nweghị ike ikesa ozi ndị bi n'ebe nlekọta", "Zitere ya foto"], answer: 2, why: "Ozi ahụike bụ nzuzo, ọ na-agakwa naanị n'aka ndị otu nlekọta." },
            { objective: "O3", q: "Ị hụrụ ọnya ọbara n'ahụ onye bi n'ebe nlekọta nke onye ọ bụla na-enweghị ike ịkọwa. Gịnị ka ị ga-eme?", options: ["Chere otu izu ka ị hụ ma ọ ga-apụ", "Gwa nọọsụ ma ọ bụ onye isi gị ozugbo", "Gwa onye ahụ ka o zoo ya", "Dee banyere ya n'ịntanetị"], answer: 1, why: "A na-akọ mmegbu nwere ike ime nye nọọsụ ma ọ bụ onye isi ozugbo." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ụzọ CNA na isi ihe nlekọta n'enweghị nsogbu",
        questions: [
          { objective: "O1", q: "Ebee ka aha nurse aide ga-adị tupu ọ rụọ ọrụ n'ụlọ nlekọta ndị agadi?", options: ["Otu soshal midia", "Registry nurse aide nke steeti", "Ndepụta ndị otu ụlọ egwuregwu", "Bọọdụ ọrụ nkeonwe"], answer: 1, why: "Aha nurse aide ga-adị na registry steeti tupu ha arụọ ọrụ n'ụlọ nlekọta ndị agadi." },
          { objective: "O1", q: "Weebụsaịtị na-ekwu \"Nweta asambodo CNA gị n'ịntanetị n'otu ụbọchị.\" Gịnị bụ eziokwu?", options: ["Ọ bụ ezi ụzọ kacha ọsọ", "Ọ na-anọchi ule steeti", "Buru ụzọ lelee ndepụta mmemme steeti kwadoro", "Steeti ọ bụla na-anabata ya"], answer: 2, why: "Naanị mmemme steeti kwadoro na ule steeti na-eduga na registry; lelee peeji steeti n'onwe ya." },
          { objective: "O2", q: "Olee mgbe CNA kwesịrị ihicha aka ya?", options: ["Ozugbo tupu o metụ onye bi n'ebe nlekọta aka", "Naanị na mmalite ọrụ", "Naanị mgbe aka dị ka ọ ruru unyi", "Naanị mgbe gloves dọwara"], answer: 0, why: "CDC kwuru ka ị hichaa aka ozugbo tupu i metụ onye ọrịa aka, n'etiti oge ndị ọzọ." },
          { objective: "O2", q: "Gịnị mere ị ka ga-eji hichaa aka mgbe i yichara gloves?", options: ["Gloves na-eme ka aka dị ọcha karị", "Ọ bụ naanị maka ngosi", "A na-eji gloves ọzọ, ya mere ọ dịghị mkpa", "Gloves nwere ike inwe obere oghere, nje na-erukwa aka mgbe ị na-eyipụ ha"], answer: 3, why: "Gloves anaghị anọchi aka dị ọcha; nje nwere ike iru aka gị." },
          { objective: "O3", q: "Tupu i nyere onye bi n'ebe nlekọta aka ịsa ahụ, gịnị ka ị ga-eme?", options: ["Malite ngwa ngwa n'ekwughị okwu", "Kụọ aka n'ọnụ ụzọ, kwuo onye ị bụ, kọwaa ma mechie ákwà mgbochi", "Hapụ ọnụ ụzọ ka o meghere ka ndị ọzọ nyere aka", "Gwa onye ya na ya bi n'ọnụ ụlọ ka o lee anya"], answer: 1, why: "Ịkụ aka n'ọnụ ụzọ, ịkọwa na imechi ákwà mgbochi na-echebe ugwu na nzuzo onye ahụ." }
        ]
      }
    },
    {
      name: "Isi 2: Nlekọta kwa ụbọchị, ịkọ ihe na atụmatụ ule gị",
      lessons: [
        {
          title: "Nlekọta kwa ụbọchị n'enweghị nsogbu: imegharị ahụ, ije ije na nri",
          objectives: ["O4"],
          minutes: 6,
          goal: "Hazie nzọụkwụ nchekwa maka ọrụ nlekọta kwa ụbọchị n'usoro ziri ezi.",
          text: [
            "Ọrụ nlekọta ọ bụla na-amalite otu ụzọ ahụ: hichaa aka gị, kwuo onye ị bụ, kọwaa ihe ị ga-eme, nye nzuzo, ma lelee atụmatụ nlekọta (care plan). Ọrụ ọ bụla na-ejedebekwa otu ụzọ ahụ: hapụ call light ebe aka ruru, akwa ka ọ dị ala ma kpọchie ya, ma hichaa aka gị.",
            "Ndị na-anọ n'otu ọnọdụ ogologo oge nwere ike inweta ọnya nrụgide (pressure sore), a na-akpọkwa ya ọnya akwa, n'ebe ọkpụkpụ dị nso n'akpụkpọ dị ka ukwu, ikiri ụkwụ na azụ. MedlinePlus kwuru ka a gbanwee ọnọdụ mmadụ ihe dị ka awa abụọ ọ bụla ma debe akpụkpọ ahụ ka ọ dị ọcha ma kpọọ nkụ. Gbasoo usoro ịtụgharị dị n'atụmatụ nlekọta.",
            "Ịda ada bụ nnukwu ihe egwu. Debe ala ka ọ dị ọcha n'enweghị ihe, call light ka ọ dị nso ma akwa ka ọ dị ala. Hụ na onye ahụ yi akpụkpọ ụkwụ na-adịghị amị amị. Kpọchie wiil wheelchair na nke akwa tupu ibugharị ya. Jiri gait belt na ọnụọgụ ndị enyemaka atụmatụ nlekọta kwuru.",
            "Chebe azụ gị. Gbagọọ ikpere gị, debe onye ahụ ma ọ bụ ihe ahụ nso gị, ma jiri ụkwụ gị tụgharịa kama ịgbagọ ahụ. Ebuli mmadụ naanị gị mgbe ọ bụla ma ọ bụrụ na atụmatụ kwuru mmadụ abụọ ma ọ bụ igwe mbuli (lift). Ị ga-eme omume ibugharị mmadụ naanị na mmemme gị nke a na-elekọta anya."
          ],
          steps: ["Hichaa aka, kwuo onye ị bụ ma kọwaa ọrụ ahụ.", "Lelee atụmatụ nlekọta ma nye nzuzo.", "Kpọchie wiil ma wedata ma ọ bụ welie akwa ruo ogo dị mma.", "Mee ọrụ ahụ otu atụmatụ nlekọta kwuru, ya na enyemaka ma ọ dị mkpa.", "Hapụ akwa ka ọ dị ala, call light ebe aka ruru ma hichaa aka gị."],
          words: [["Ọrụ ndụ kwa ụbọchị (ADLs)", "nlekọta onwe kwa ụbọchị: ịsa ahụ, iyi uwe, iri nri, iji ụlọ mposi na imegharị ahụ."], ["Atụmatụ nlekọta (care plan)", "atụmatụ e dere ede nke nọọsụ na-ekwu nlekọta onye ọ bụla bi n'ebe nlekọta na-enweta."], ["Ọnya nrụgide (pressure sore)", "akpụkpọ ahụ mebiri emebi n'ihi ịnọ n'otu ọnọdụ ogologo oge, a na-akpọkwa ya ọnya akwa."], ["Gait belt", "eriri siri ike a na-ekenye n'úkwù mmadụ ka onye enyemaka jide ya mgbe ọ na-aga ije ma ọ bụ na-emegharị ahụ."], ["Iji ahụ eme ihe nke ọma (body mechanics)", "iji ahụ gị n'ụzọ dị mma ka ị ghara imerụ azụ gị ahụ."]],
          slides: [
            { title: "Malite ọrụ ọ bụla", bullets: ["Hichaa aka ma kwuo onye ị bụ", "Kọwaa ihe ị ga-eme", "Nye nzuzo ma lelee atụmatụ nlekọta"] },
            { title: "Gbochie ọnya nrụgide", bullets: ["Gbanwee ọnọdụ ihe dị ka awa 2 ọ bụla", "Debe akpụkpọ ahụ ka ọ dị ọcha ma kpọọ nkụ", "Gbasoo usoro ịtụgharị"] },
            { title: "Gbochie ịda ada", bullets: ["Ala dị ọcha, akwa dị ala, call light dị nso", "Akpụkpọ ụkwụ na-adịghị amị amị", "Kpọchie wiil tupu ibugharị mmadụ"] },
            { title: "Chebe azụ gị", bullets: ["Gbagọọ ikpere gị, debe ibu ahụ nso", "Jiri ụkwụ tụgharịa, agbagọla ahụ", "Nweta enyemaka mgbe atụmatụ kwuru mmadụ abụọ"] },
            { title: "Mechie ọrụ ọ bụla", bullets: ["Akwa dị ala ma kpọchiri ya", "Call light ebe aka ruru", "Hichaa aka gị"] }
          ],
          sources: [
            { name: "MedlinePlus: Pressure Sores", url: "https://medlineplus.gov/pressuresores.html" },
            { name: "MedlinePlus: Falls", url: "https://medlineplus.gov/falls.html" }
          ],
          tryIt: "Dee nzọụkwụ ndị a na kaadị, gwakọta ha, wee hazie ha n'usoro: \"Kpọchie wiil wheelchair\", \"Hichaa aka gị\", \"Kọwaa ihe ị ga-eme\", \"Hapụ call light ebe aka ruru\", \"Lelee atụmatụ nlekọta\". Wee tụnyere usoro gị na nkuzi ahụ.",
          youCanNow: "ịhazi nzọụkwụ nchekwa maka nlekọta kwa ụbọchị n'usoro ziri ezi na ịkọwa otu ha si egbochi ịda ada, ọnya na mmerụ azụ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ị ga-eme tupu i nyere onye bi n'ebe nlekọta aka isi n'akwa gaa na wheelchair?", options: ["Yipụ akpụkpọ ụkwụ onye ahụ", "Welie akwa ruo n'elu kacha elu", "Kpọchie wiil wheelchair na nke akwa", "Gbanyụọ ọkụ"], answer: 2, why: "Wiil a kpọchiri na-egbochi oche ma ọ bụ akwa ịgbagharị mgbe a na-ebugharị mmadụ." },
            { objective: "O4", q: "Atụmatụ nlekọta kwuru mmadụ abụọ maka ibugharị onye ahụ, mana ọ bụ naanị gị nọ. Gịnị ka ị ga-eme?", options: ["Mee ya naanị gị ka ị chekwaa oge", "Chere enyemaka ma ọ bụ jụọ nọọsụ", "Gwa onye ahụ ka ọ nwaa naanị ya", "Hapụ ibugharị ya taa n'agwaghị onye ọ bụla"], answer: 1, why: "Ịgbaso atụmatụ na-echebe onye ahụ na gị; nweta enyemaka ma ọ bụ jụọ nọọsụ." }
          ]
        },
        {
          title: "Ịhụ, ịtụ na ịkọ ihe",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dee obere ndetu nwere eziokwu gbasara mgbanwe ma kọọ ya nọọsụ.",
          text: [
            "Ị na-ahụ ndị bi n'ebe nlekọta karịa onye ọ bụla ọzọ, ya mere ị na-abụkarị onye mbụ hụrụ mgbanwe. Ọrụ gị bụ ịhụ, ide na ịkọ. Nọọsụ na-ekpebi ihe ọ pụtara.",
            "Isi vital signs anọ bụ ọbara mgbali (blood pressure), pulse (ọkụkụ obi), ọnụọgụ iku ume na okpomọkụ ahụ. Ị ga-amụta ịtụ ha na mmemme gị ma mee omume n'ahụ ụmụ klas gị n'okpuru nlekọta.",
            "Dee ihe ị hụrụ, nụrụ ma ọ bụ tụrụ, ọ bụghị ihe i chere na ọ pụtara. \"Riri ọkara nri ehihie. Kwuru, 'Afọ na-afụ m ụfụ.' Jidere afọ ya.\" ka mma karịa \"O yiri onye na-arịa ọrịa.\" Dee oge ma bịanye aka gị.",
            "A ga-akọ mgbanwe ụfọdụ ozugbo: mgbu ọhụrụ, nsogbu iku ume, ịda ada, mgbanwe n'otu mmadụ si mụrụ anya ma ọ bụ ọgbaghara uche, ma ọ bụ nnukwu mgbanwe na vital sign. Mgbe obi abụọ dị, gwa nọọsụ."
          ],
          steps: ["Hụ mgbanwe ahụ: ihe ị hụrụ, nụrụ ma ọ bụ tụrụ.", "Dee eziokwu ndị ahụ, oge na aha gị.", "Kọọ nọọsụ ozugbo ma ọ bụrụ na ọ bụ ihe ọhụrụ ma ọ bụ ihe dị njọ.", "Dee na i kọrọ ya na onye i kọrọ."],
          words: [["Vital signs", "ntụle ọrụ isi nke ahụ: ọbara mgbali, pulse, ọnụọgụ iku ume na okpomọkụ ahụ."], ["Ihe a na-ahụ anya (objective)", "eziokwu ị nwere ike ịhụ, ịnụ, ịtụ ma ọ bụ ịgụ ọnụ."], ["Ihe onye ahụ kwuru (subjective)", "ihe onye bi n'ebe nlekọta gwara gị na ọ na-enwe, e dere n'okwu nke ya."], ["Chaatị", "akwụkwọ ndekọ nlekọta onye bi n'ebe nlekọta."]],
          slides: [
            { title: "Hụ, dee, kọọ", bullets: ["Ị na-ebu ụzọ ahụ mgbanwe", "Ị na-ede eziokwu", "Nọọsụ na-ekpebi ihe ha pụtara"] },
            { title: "Vital signs anọ", bullets: ["Ọbara mgbali (blood pressure)", "Pulse (ọkụkụ obi)", "Ọnụọgụ iku ume", "Okpomọkụ ahụ"] },
            { title: "Dee eziokwu, ọ bụghị ịkọ nkọ", bullets: ["Nke ọma: \"Riri ọkara nri ehihie. Kwuru 'Afọ na-afụ m ụfụ.'\"", "Ọ bụghị: \"O yiri onye na-arịa ọrịa.\"", "Tinye oge na aha gị"] },
            { title: "Kọọ ozugbo", bullets: ["Mgbu ọhụrụ ma ọ bụ nsogbu iku ume", "Ịda ada", "Ọgbaghara uche ma ọ bụ ụra karịa ka ọ dị na mbụ"] }
          ],
          sources: [{ name: "MedlinePlus: Vital Signs", url: "https://medlineplus.gov/vitalsigns.html" }],
          tryIt: "Naanị maka omume, ya na onye e chepụtara echepụta: \"Ms. Rivera na-aga ije ga n'ebe nri ụtụtụ kwa ụbọchị. Taa n'elekere 8:15 ọ nọgidere n'akwa, kwuo 'Isi na-agba m gburugburu,' ma o righị nri.\" Dee ndetu nwere eziokwu nke ahịrị atọ na otu ahịrịokwu ị ga-agwa nọọsụ.",
          youCanNow: "ide obere ndetu nwere eziokwu gbasara mgbanwe ị hụrụ na ịkọrọ ya nọọsụ.",
          quickCheck: [
            { objective: "O5", q: "Kedu ndetu e dere n'ụzọ ziri ezi?", options: ["\"Ọ na-eme isi ike.\"", "\"Ọ nwere ike ịna-arịa ọrịa.\"", "\"Ọ dị ka ọ dị mma, echere m.\"", "\"10:30. Ọ jụrụ nri ehihie. Kwuru, 'Obi m na-anyụ m n'ime.'\""], answer: 3, why: "Ọ na-enye oge, ihe mere na okwu onye ahụ n'onwe ya." },
            { objective: "O5", q: "Onye bi n'ebe nlekọta nwere ọgbaghara uche na mberede karịa ka ọ dị na mbụ. Gịnị ka ị ga-eme?", options: ["Gwa nọọsụ ozugbo", "Chere ruo mgbe ọrụ gị gwụrụ", "Nye ya ọgwụ site na kart ọgwụ", "Gwa naanị onye ya na ya bi n'ọnụ ụlọ"], answer: 0, why: "A na-akọrọ nọọsụ ozugbo mgbanwe na mberede n'ịmụ anya ma ọ bụ n'ọgbaghara uche." }
          ]
        },
        {
          title: "Ịkwado maka ule steeti: atụmatụ ọmụmụ gị",
          objectives: ["O6", "O1"],
          minutes: 5,
          goal: "Mee atụmatụ ọmụmụ na ule nwere ezi ụbọchị maka ule CNA nke steeti gị.",
          text: [
            "Na ọtụtụ steeti, ule CNA nwere akụkụ abụọ: ule ederede (steeti ụfọdụ na-agụpụta ya n'olu dị elu) na ule nka ebe ị na-egosi onye nyocha (evaluator) nka nlekọta ole na ole. Peeji registry ma ọ bụ peeji ụlọ ọrụ ule nke steeti gị na-ekwu akụkụ ndị ahụ kpọmkwem, ndepụta nka na otu esi edebanye aha.",
            "Jiri akwụkwọ ntuziaka onye ule (candidate handbook) gọọmentị ma ọ bụrụ na steeti gị nwere ya. Ọ na-edepụta nka ndị ahụ, nzọụkwụ onye nyocha na-ele anya na ihe ị ga-ebute n'ụbọchị ule. Ajụjụ omume n'efu site na mmemme gị na-enyekwara aka.",
            "Na-amụ ntakịrị kwa ụbọchị. Mee omume nka na klas ma ọ bụ na ụlọ omume (open lab), ebe onye nkuzi nwere ike ile gị anya. Kwuo nzọụkwụ ọ bụla n'olu dị elu, gụnyere ndị ndị mmadụ na-echefu: ihicha aka, inye nzuzo na ịhapụ call light ebe aka ruru.",
            "Hazie ihe ndị ọzọ: ID gị, otu ị ga-esi ruo ebe ule, nlekọta ụmụaka, na ezumike n'ọrụ. Dee ụbọchị ndị ahụ na kalenda."
          ],
          steps: ["Chọta akụkụ ule steeti gị na candidate handbook na peeji gọọmentị.", "Depụta nka ndị ị kacha kwesị ime omume ha.", "Họrọ oge ọmụmụ kwa ụbọchị na ụbọchị ule omume abụọ.", "Dee ụbọchị ule, ihe ị ga-ebute na otu ị ga-esi ruo ebe ahụ."],
          words: [["Candidate handbook", "akwụkwọ ntuziaka gọọmentị site na steeti ma ọ bụ ụlọ ọrụ ule na-akọwa ule ahụ."], ["Onye nyocha (evaluator)", "onye na-ele ma na-enye akara ule nka gị."], ["Ule nka (skills test)", "akụkụ ule ebe ị na-egosi nka nlekọta nzọụkwụ n'otu n'otu."]],
          slides: [
            { title: "Akụkụ abụọ na ọtụtụ steeti", bullets: ["Ule ederede (steeti ụfọdụ na-agụpụta ya n'olu dị elu)", "Ule nka nke onye nyocha na-ele anya", "Peeji steeti gị nwere nkọwa ya"] },
            { title: "Jiri ihe gọọmentị", bullets: ["Candidate handbook na ndepụta nka", "Ajụjụ omume site na mmemme gị", "Mee omume nka ebe onye nkuzi nwere ike ile anya"] },
            { title: "Nzọụkwụ ndị mmadụ na-echefu", bullets: ["Ihicha aka", "Inye nzuzo", "Call light ebe aka ruru, akwa dị ala"] },
            { title: "Hazie ụbọchị ule", bullets: ["ID na ihe ị ga-ebute", "Njem na nlekọta ụmụaka", "Ezumike n'ọrụ"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Nursing Assistants and Orderlies (How to Become One)", url: "https://www.bls.gov/ooh/healthcare/nursing-assistants.htm#tab-4" }
          ],
          tryIt: "Ọrụ ikpeazụ: mee atụmatụ ọmụmụ na ule CNA nke otu peeji. Tinye peeji gọọmentị steeti gị, mmemme abụọ a kwadoro na ego ha na ụbọchị mmalite ha site na peeji nke ha, akụkụ ule, usoro ọmụmụ kwa izu nwere ụbọchị, nka ise ị ga-emekarị omume ha, na otu onye ị ga-ajụ mgbe i nwere ajụjụ.",
          youCanNow: "ime atụmatụ ọmụmụ na ule nwere ụbọchị nke na-ekpuchi akụkụ ọ bụla nke ule CNA steeti gị.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ị ga-ahụ nka kpọmkwem dị n'ule steeti gị?", options: ["Okwu mmadụ dere n'okpuru vidiyo", "Candidate handbook gọọmentị ma ọ bụ peeji registry", "Echiche enyi", "Ule ahụ anaghị ekwu"], answer: 1, why: "Handbook gọọmentị ma ọ bụ peeji registry na-edepụta nka na ihe onye nyocha na-elele." },
            { objective: "O6", q: "Kedu atụmatụ ọmụmụ kacha sie ike?", options: ["Ịmụ ihe n'abalị tupu ule", "Ịmụ naanị akụkụ ederede", "Ọmụmụ kwa ụbọchị, omume nka na klas, ule omume nwere ụbọchị", "Ịhapụ omume ma tụọ anya"], answer: 2, why: "Ọmụmụ mgbe niile, omume nka a na-elekọta anya na ule omume nwere ụbọchị na-ekpuchi akụkụ niile." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nlekọta kwa ụbọchị, ịkọ ihe na atụmatụ ule gị",
        questions: [
          { objective: "O4", q: "Ugboro ole ka a ga-agbanwe ọnọdụ onye na-enweghị ike imegharị ahụ, ma ọ bụrụ na atụmatụ nlekọta ekwughị ihe ọzọ?", options: ["Otu ugboro n'ụbọchị", "Otu ugboro n'izu", "Naanị mgbe ọ rịọrọ", "Ihe dị ka awa abụọ ọ bụla"], answer: 3, why: "MedlinePlus kwuru ka a gbanwee ọnọdụ ihe dị ka awa abụọ ọ bụla iji nyere aka gbochie ọnya nrụgide." },
          { objective: "O4", q: "Kedu nke bụ iji ahụ eme ihe nke ọma (body mechanics)?", options: ["Hulata n'úkwù ma gbagọọ ahụ", "Gbagọọ ikpere gị ma debe ibu ahụ nso", "Bulie ya na aka gị gbatịrị agbatị", "Bulie onye dị arọ naanị gị ngwa ngwa"], answer: 1, why: "Ịgbagọ ikpere gị na idebe ibu ahụ nso na-echebe azụ gị." },
          { objective: "O5", q: "Kedu n'ime ndị a bụ vital sign?", options: ["Pulse", "Nri kacha amasị ya", "Ọnụ akpụkpọ ụkwụ", "Nọmba ọnụ ụlọ"], answer: 0, why: "Pulse, ọbara mgbali, ọnụọgụ iku ume na okpomọkụ ahụ bụ isi vital signs." },
          { objective: "O5", q: "Onye na-ekpebi ihe mgbanwe n'onye bi n'ebe nlekọta pụtara?", options: ["CNA naanị ya", "Onye ya na ya bi n'ọnụ ụlọ", "Nọọsụ, mgbe CNA kọrọ ya", "Ọ dịghị onye"], answer: 2, why: "CNA na-ahụ ma na-akọ; nọọsụ na-ekpebi ihe ọ pụtara." },
          { objective: "O6", q: "Gịnị ka atụmatụ ule CNA kwesịrị ịgụnye?", options: ["Naanị ụbọchị ule", "Oge ọmụmụ, ule omume, ụbọchị ule na ihe ị ga-ebute", "Naanị adreesị mmemme ahụ", "Ndepụta ihe nkiri TV"], answer: 1, why: "Atụmatụ zuru ezu na-ekpuchi ọmụmụ, omume na ihe gbasara ụbọchị ule." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe maka Certified Nursing Assistant (CNA)",
    questions: [
      { objective: "O1", q: "Kedu nke bụ isi ọrụ nursing assistant?", options: ["Inyere ndị mmadụ aka ịsa ahụ, iyi uwe, iri nri na imegharị ahụ", "Ide ọgwụ maka ndị ọrịa", "Ịwa ahụ", "Ikpebi ọrịa mmadụ na-arịa"], answer: 0, why: "CNA na-enyere aka na ndụ kwa ụbọchị ma na-akọrọ nọọsụ." },
      { objective: "O1", q: "Gịnị ka ihe ọmụmụ a na-eme?", options: ["Ọ na-enye gị asambodo CNA", "Ọ na-ede aha gị na registry", "Ọ na-akwado gị maka mmemme steeti kwadoro na ule steeti", "Ọ na-anọchi ule nka"], answer: 2, why: "Ihe ọmụmụ a na-akwado gị; mmemme steeti, ule na registry na-eme gị CNA." },
      { objective: "O1", q: "Kedu nzọụkwụ atọ na ọtụtụ steeti?", options: ["Zụta uwe ọrụ, tinye akwụkwọ, malite ọrụ", "Mmemme a kwadoro, ule steeti, ide aha na registry", "Nnwale n'ịntanetị, ajụjụ ọnụ, baajị", "Lee vidiyo, bịanye aka n'akwụkwọ, rụọ ọrụ"], answer: 1, why: "Ọtụtụ steeti chọrọ mmemme a kwadoro, ule ikike na registry." },
      { objective: "O1", q: "Iwu gbasara background check maka nurse aide:", options: ["Dị otu ebe niile", "Adịghị adị", "Bụ naanị maka nọọsụ", "Dị iche site na steeti, ya mere lelee peeji steeti gị"], answer: 3, why: "Steeti ọ bụla na-eme iwu nke ya, ya mere lelee peeji gọọmentị." },
      { objective: "O2", q: "Aka gị adịghị ka ọ ruru unyi, ị na-achọkwa imetụ onye bi n'ebe nlekọta aka. Gịnị ka ị ga-eji?", options: ["Ọ dịghị ihe", "Hand sanitizer nwere mmanya, tee ya ruo mgbe ọ kpọrọ nkụ", "Ude ahụ (lotion)", "Akwụkwọ nhicha mmiri si n'akpa gị"], answer: 1, why: "Hand sanitizer bụ ihe a na-ahọrọkarị mgbe aka adịghị ka ọ ruru unyi." },
      { objective: "O2", q: "Kedu otu esi eji gloves n'ụzọ ziri ezi?", options: ["Gloves ọhụrụ maka onye ọ bụla, wee hichaa aka", "Otu gloves maka ọrụ ụbọchị niile", "Saa ha ma jiri ha ọzọ", "Yiri ha kama ihicha aka"], answer: 0, why: "Gloves ọhụrụ maka onye ọ bụla, na aka dị ọcha mgbe i yipụrụ ha." },
      { objective: "O2", q: "Olee mgbe ị ga-eji ncha na mmiri kama hand sanitizer?", options: ["Ọ dịghị mgbe", "Naanị na ngwụcha izu", "Mgbe aka dị ka ọ ruru unyi na mgbe i jiri ụlọ mposi", "Naanị tupu ị hapụ ọrụ"], answer: 2, why: "CDC kwuru ncha na mmiri mgbe aka dị ka ọ ruru unyi, tupu iri nri na mgbe ụlọ mposi." },
      { objective: "O3", q: "Kedu iwu na-echebe nzuzo ozi ahụike?", options: ["OSHA", "HIPAA", "FMLA", "ADA"], answer: 1, why: "HIPAA na-echebe nzuzo ozi ahụike." },
      { objective: "O3", q: "Onye gị na ya na-arụ ọrụ tinyere foto onye bi n'ebe nlekọta n'ịntanetị. Nke a bụ:", options: ["Ọ dị mma ma ọ bụrụ na ọ na-atọ ọchị", "Ọ dị mma ma ọ bụrụ na ihu edoghị anya", "Ọ dị mma maka ụlọ ọrụ ahụ", "Nsogbu nzuzo a ga-akọ"], answer: 3, why: "Foto ndị bi n'ebe nlekọta na soshal midia na-emebi nzuzo ha; kọọ ya." },
      { objective: "O3", q: "Kedu nke nwere ike ịbụ ihe ịrịba ama ileghara anya?", options: ["Uwe dị ọcha", "Onye bi n'ebe nlekọta na-amụmụ ọnụ ọchị", "Ọnya akwa na adịghị ọcha", "Ezinụlọ bịara ileta"], answer: 2, why: "Ọnya akwa na adịghị ọcha nwere ike igosi na a naghị enye nlekọta." },
      { objective: "O3", q: "Onye bi n'ebe nlekọta chọrọ iyi uwe elu na-acha uhie uhie taa, ọ bụghị nke na-acha anụnụ anụnụ i họọrọ. Gịnị ka ị ga-eme?", options: ["Nyere ya aka iyi nke na-acha uhie uhie", "Sị na ọ ga-eyi nke na-acha anụnụ anụnụ", "Gwa ya na ọ nweghị ike ịhọrọ", "Hapụ iyiri ya uwe"], answer: 0, why: "Ndị bi n'ebe nlekọta nwere ikike ịhọrọ ihe gbasara nlekọta nke ha mgbe ha nwere ike." },
      { objective: "O4", q: "Gịnị ka ị na-eme na njedebe ọrụ nlekọta ọ bụla?", options: ["Hapụ akwa ka ọ dị elu", "Wepụ call light", "Hapụ akwa ka ọ dị ala, call light ebe aka ruru, ma hichaa aka", "Hapụ ọnụ ụzọ ka o meghere maka nlele"], answer: 2, why: "Akwa dị ala, call light ebe aka ruru na aka dị ọcha na-echebe onye ahụ." },
      { objective: "O4", q: "Ọnya nrụgide na-apụtakarị na:", options: ["Ebe ọkpụkpụ dị nso n'akpụkpọ dị ka ukwu na ikiri ụkwụ", "Ntutu isi", "Mbọ aka", "Nkpuchi anya"], answer: 0, why: "Ha na-apụta ebe ọkpụkpụ dị nso n'akpụkpọ ahụ, nrụgide wee dị ogologo oge." },
      { objective: "O4", q: "Iji gbochie ịda ada, onye bi n'ebe nlekọta kwesịrị iyi:", options: ["Naanị sọks", "Enweghị akpụkpọ ụkwụ", "Akpụkpọ ụkwụ ogologo ikiri", "Akpụkpọ ụkwụ na-adịghị amị amị"], answer: 3, why: "Akpụkpọ ụkwụ na-adịghị amị amị na-enyere aka gbochie ịda ada." },
      { objective: "O4", q: "Ebee ka a na-eme omume ibugharị mmadụ n'aka?", options: ["N'ụlọ n'ahụ onye ezinụlọ, naanị gị", "Na mmemme steeti kwadoro nke a na-elekọta anya", "Naanị n'ụbọchị ule", "Naanị site na vidiyo"], answer: 1, why: "A na-amụta nka aka na mmemme a na-elekọta anya, ebe onye nkuzi nwere ike idozi gị." },
      { objective: "O5", q: "Kedu ndetu nwere eziokwu?", options: ["\"Ọ na-ama ume ngwụ taa.\"", "\"Ikekwe ọ bụ flu.\"", "\"2:00. Ọ ṅụrụ otu iko mmiri. Kwuru, 'Oyi na-atụ m.'\"", "\"Ọ dị ka ihe adịghị mma.\""], answer: 2, why: "Ọ na-edekọ oge, ọnụọgụ a tụrụ na okwu onye ahụ n'onwe ya." },
      { objective: "O5", q: "Onye bi n'ebe nlekọta dara ada mana ọ sị na ọ dị mma. Gịnị ka ị ga-eme?", options: ["Kọọ nọọsụ ịda ada ahụ ozugbo", "Nyere ya aka bilie ma ekwula ihe ọ bụla", "Dee ya n'izu na-abịa", "Gwa ya ka ọ ghara ịgwa onye ọ bụla"], answer: 0, why: "A na-akọ ịda ada ọ bụla ozugbo ka nọọsụ nwee ike inyocha onye ahụ." },
      { objective: "O5", q: "Kedu nke na-abụghị otu n'ime isi vital signs anọ?", options: ["Okpomọkụ ahụ", "Ọnụọgụ iku ume", "Ọbara mgbali", "Ịdị arọ akpụkpọ ụkwụ ya"], answer: 3, why: "Isi vital signs anọ bụ ọbara mgbali, pulse, ọnụọgụ iku ume na okpomọkụ ahụ." },
      { objective: "O6", q: "Na ọtụtụ steeti, ule CNA nwere:", options: ["Naanị edemede", "Akụkụ ederede na akụkụ nka", "Naanị ajụjụ ọnụ", "Enweghị ule ọ bụla"], answer: 1, why: "Ọtụtụ steeti na-eji ule ederede (ma ọ bụ nke a na-agụpụta n'olu dị elu) na ule nka; lelee peeji steeti gị." },
      { objective: "O6", q: "N'ule nka, kedu nzọụkwụ ndị mmadụ na-echefukarị?", options: ["Ikele ezinụlọ onye nyocha", "Ibute nri nta", "Ihicha aka na ịhapụ call light ebe aka ruru", "Iyi ihe ịchọ mma"], answer: 2, why: "Ihicha aka, nzuzo na call light bụ nzọụkwụ dị mfe ịhapụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 4, 7, 9, 11, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma lelee ya ọzọ.",
    criteria: [
      { name: "Ụzọ gọọmentị steeti", objective: "O1", notYet: "Enweghị peeji gọọmentị, ma ọ bụ nzọụkwụ ndị ahụ si na mgbasa ozi ma ọ bụ enyi.", meets: "Na-edepụta nzọụkwụ mmemme, ule na registry site na peeji gọọmentị steeti, ya na adreesị ya.", exceeds: "Na-edekwa iwu background check nke steeti na onye a ga-akpọ maka ajụjụ." },
      { name: "Mmemme a kwadoro", objective: "O1", notYet: "Mmemme adịghị, ma ọ bụ o doghị anya na steeti kwadoro ha.", meets: "Mmemme abụọ nwere ego na ụbọchị mmalite e wetara site na peeji nke ha, e lelekwara nkwado ha.", exceeds: "Na-edekwa nhọrọ n'efu ma ọ bụ nke onye were mmadụ n'ọrụ na-akwụ, ma ọ bụ enyemaka site na American Job Center." },
      { name: "Akụkụ ule e kpuchiri", objective: "O6", notYet: "Naanị akụkụ ederede, ma ọ bụ e depụtaghị akụkụ ule ọ bụla.", meets: "Na-edepụta akụkụ ọ bụla nke ule steeti na nka ise a ga-emekarị omume ha.", exceeds: "Na-ejikọ nka ọ bụla na nzọụkwụ ndị mmadụ na-echefukarị, dị ka aka dị ọcha na nzuzo." },
      { name: "Usoro nwere ụbọchị", objective: "O6", notYet: "Enweghị ụbọchị, ma ọ bụ naanị otu oge ọmụmụ ọsọ ọsọ.", meets: "Oge ọmụmụ kwa izu, ụbọchị ule omume abụọ na ụbọchị ule na kalenda.", exceeds: "Na-ahazikwa ihe a chọrọ n'ụbọchị ule: ID, njem, nlekọta ụmụaka na ezumike n'ọrụ." },
      { name: "Nchekwa na ịkọ ihe", objective: "O5", notYet: "A kpọghị aha onye a ga-akọrọ ma ọ bụ jụọ ajụjụ.", meets: "Na-akpọ aha onye a ga-ajụ ma ọ bụ kọọrọ, dị ka onye nkuzi ma ọ bụ nọọsụ.", exceeds: "Na-etinyekwa obere ndetu omume e dere dị ka eziokwu, ọ bụghị ịkọ nkọ." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe debanyere aha na mmemme nurse aide steeti kwadoro n'ime ụbọchị 60",
      "Ndị na-amụ ihe gafere ule ikike CNA nke steeti ha ma e dee aha ha na registry",
      "Ndị na-amụ ihe e were n'ọrụ dị ka nurse aide n'ime ọnwa 6 (nnyocha nsochi)",
      "Mmemme ndị mmekọ na-akọ na ụmụ akwụkwọ ole na ole na-akwụsị n'izu ndị mbụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji chọta peeji registry steeti",
      "Akwụkwọ, mkpịsị ode na kaadị ndetu maka ọrụ \"Nwalee ya ugbu a\"",
      "Sink nwere ncha maka omume ịsa aka",
      "Kalenda (akwụkwọ ma ọ bụ ekwentị) maka atụmatụ ọmụmụ",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Tupu ihe ọmụmụ a, chọta peeji registry nurse aide nke steeti gị na ndepụta mmemme a kwadoro dị nso, ma kesaa njikọ ha.",
      "Ekwela ka ndị na-amụ ihe mee omume ibugharị ma ọ bụ ibuli mmadụ n'ahụ ibe ha n'enweghị onye nkuzi a zụrụ azụ na ngwa ziri ezi.",
      "Kwuo n'ụzọ doro anya na ihe ọmụmụ a anaghị enye onye ọ bụla asambodo, na iwu, awa na ego si na steeti.",
      "Ọ bụrụ na onye na-amụ ihe na-echegbu onwe ya maka ikpe mpụ gara aga, duga ya n'iwu steeti n'onwe ya na onye ndụmọdụ re-entry ma ọ bụ legal aid.",
      "Jiri rubric tụọ akara atụmatụ ikpeazụ, ma nyere onye ọ bụla na-amụ ihe aka kpọtụrụ otu mmemme a kwadoro tupu ọ pụọ."
    ]
  }
};
