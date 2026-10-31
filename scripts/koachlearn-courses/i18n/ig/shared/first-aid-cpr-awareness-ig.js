"use strict";

// Koach Learn course (Igbo translation of shared/first-aid-cpr-awareness.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.
// Ihe ọmụmụ AMAMIHE (awareness) ka ọ bụ: ọ naghị enye asambodo. Enweghị ọgwụ ma ọ bụ ọnụọgụ ọgwụ ọ bụla n'ime ya.

const MEDLINE_CPR = { name: "MedlinePlus (US National Library of Medicine): CPR - adult and child after onset of puberty", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Choking - adult or child over 1 year", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Bleeding", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Heart attack first aid", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Signs and Symptoms of Stroke", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: CPR and First Aid courses", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "American Red Cross: First Aid, CPR and AED classes", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Medical and First Aid", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-ig",
  lang: "ig",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Amamihe Enyemaka Mbụ na CPR",
  skills: "Ilele ebe ahụ na ịkpọ 911, Usoro CPR jiri naanị aka, Iji AED, Inyere onye ihe kpachiri akpịrị aka, Ịkwụsị ọbara ọgbụgba siri ike, Ịmata nkụchi obi na ọrịa strok",
  outcome: "ime ihe n'udo n'oge nkeji mbụ nke ihe mberede: ilele na ebe ahụ dị mma, ịkpọ 911 (ma ọ bụ nọmba ihe mberede obodo gị), ịgbaso usoro CPR jiri naanị aka na nke AED, inye aka mgbe ihe kpachiri mmadụ akpịrị na mgbe ọbara na-agba nke ukwuu, ịmata nkụchi obi ma ọ bụ ọrịa strok, na idenye aha gị na klaasị CPR na enyemaka mbụ a na-eme n'ihu ọha nke na-enye ezi asambodo.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla chọrọ ịdị njikere inye aka: ndị ntorobịa na-achọ ọrụ mbụ, ndị nne na nna na nne na nna ochie, ndị na-arụ ọrụ n'ilekọta ụmụaka, nri, ahịa, nchekwa na ọrụ aka, na ndị ọrụ afọ ofufo n'òtù enyemaka na ụka. Ọtụtụ n'ime ọrụ ndị a na-arịọ asambodo CPR na enyemaka mbụ.",
    "Ị ga-amụta usoro ị ga-esi mee ihe n'ihe mberede, usoro CPR jiri naanị aka (Hands-Only CPR), otu AED si akụziri gị ka i nye shock, na ihe ị ga-eme mgbe ihe kpachiri mmadụ akpịrị, mgbe ọbara na-agba nke ukwuu, mgbe nkụchi obi na ọrịa strok. Usoro ndị a na-eso ndụmọdụ izugbe nke American Red Cross, American Heart Association na US National Library of Medicine (ụlọ ọrụ ndị America na-ahụ maka ahụike).",
    "Nke a bụ ihe ọmụmụ amamihe. Ọ na-EME KA Ị DỊ NJIKERE; ọ naghị enye gị asambodo CPR ma ọ bụ enyemaka mbụ. Ezi nka aka, dị ka ịpịa obi ruo omimi ziri ezi, ka a na-amụta ma nwalee n'ihu onye nkuzi ruru eru, site n'iji manikin. Nkuzi ikpeazụ na-egosi gị otu esi achọta klaasị ahụ.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. Gụọ ya, lee slaịdị, wee mee ọrụ \"Nwalee ya ugbu a\" site n'iji akwụkwọ ma ọ bụ ohiri isi. E nwere obere nnwale mgbe nkuzi ọ bụla gwụrụ, nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Mee Atụmatụ Njikere Enyemaka Mbụ na CPR nke gị n'otu peeji: (1) nọmba ihe mberede gị na otu ị ga-esi kwuo adreesị gị nke ọma; (2) ebe AED na igbe enyemaka mbụ kacha nso dị n'ụlọ, n'ebe ọrụ, n'ụlọ akwụkwọ ma ọ bụ n'ebe ofufe gị; (3) usoro ihe mberede, nke i dere site n'isi gị n'usoro ziri ezi (lelee, kpọọ oku, CPR na AED, ihe kpachiri akpịrị, ọbara ọgbụgba, B.E. F.A.S.T.); na (4) klaasị CPR, AED na enyemaka mbụ n'ihu ọha nke ị họọrọ site na American Red Cross ma ọ bụ American Heart Association, ya na aha ya, onye na-enye asambodo ahụ, ebe ọ dị, na ụbọchị ị ga-eme ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị na-amụ ihe dị iche iche: ndị ntorobịa na ndị okenye na-eto eto na-achọ ọrụ mbụ, ndị okenye nọ ma ọ bụ na-abanye n'ọrụ na-arịọ CPR na enyemaka mbụ (ilekọta ụmụaka, nri, ahịa, nchekwa, ọrụ aka, ilekọta ndị ọrịa n'ụlọ), ndị agadi na-elekọta di ma ọ bụ nwunye ha ma ọ bụ ụmụ ụmụ ha, na ndị ọrụ afọ ofufo n'òtù enyemaka na ụka. Ụfọdụ na-asụ Bekee dị ka asụsụ nke abụọ.",
    startingPoint: "Ọtụtụ maara ịkpọ 911 ma ha na-akwụ ọtọ ma ọ bụ amaghị ihe ọzọ ha ga-eme. Ọtụtụ ahụla CPR na TV ma ha emetụbeghị ya aka. Mmadụ ole na ole maara ebe AED kacha nso dị ma ọ bụ otu o si arụ ọrụ. Ụfọdụ na-eche na ha nwere ike ịbanye na nsogbu ma ha nyere aka.",
    gap: "Mgbe mkpụrụ obi kwụsịrị ịkụ, mgbe ihe kpachiri akpịrị ma ọ bụ mgbe ọbara na-agba nke ukwuu, nkeji ole na ole mbụ tupu enyemaka abịa kacha mkpa. Ndị na-amụ ihe chọrọ usoro doro anya, obi ike ịmalite, na atụmatụ inweta asambodo n'ihu ọha, n'ihi na ọtụtụ ọrụ chọrọ asambodo dị ndụ site n'aka ụlọ ọrụ a ma ama.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6)",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ; omume na-eji akwụkwọ, ohiri isi ma ọ bụ akwa nhicha ahụ a fụkọrọ afụkọ",
      "Oge: nkuzi nkeji 4 ruo 6",
      "Nchekwa: naanị amamihe; enweghị omume na ezi mmadụ; nka aka na asambodo na-eme n'ihu onye nkuzi ruru eru",
      "Enweghị ọnụọgụ ọgwụ ma ọ bụ ndụmọdụ dọkịta; gbasoo onye na-aza oku 911 na ndị ọrụ mberede",
      "Nọmba ihe mberede dị iche site na mba ruo mba: 911 n'America; ndị nọ ná mba ọzọ na-eji nọmba obodo ha"
    ],
    prerequisites: "Ọ dịghị. Ndị chọrọ ịmụtakwu banyere ịgụ ozi ahụike nwekwara ike ịmụ \"Health Literacy\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa ebe ihe mberede mere n'okwu", action: "ilele ma ihe egwu ọ dị n'ebe ahụ, ilele ma onye ahụ na-aza, na ịkpọ 911 ma ọ bụ nọmba ihe mberede obodo", standard: "n'usoro ziri ezi, na-ekwu adreesị na ihe mere n'otu ahịrịokwu doro anya" },
    { id: "O2", condition: "Mgbe e nyere gị okenye dara n'ala nke na-anaghị eku ume nke ọma", action: "idepụta usoro CPR jiri naanị aka na usoro iji AED", standard: "n'usoro ziri ezi, ya na ebe aka ga-anọ, ọsọ 100 ruo 120 kwa nkeji na omimi ihe dị ka 2 inch" },
    { id: "O3", condition: "Mgbe e nyere gị nkọwa okenye ihe nwere ike ịkpachi akpịrị", action: "ịmata ihe ịrịba ama nke ihe kpachiri akpịrị ma kọwaa enyemaka mbụ ya", standard: "na-amata ọdịiche dị n'etiti onye nwere ike ịkwa ụkwara ma kwuo okwu na onye na-enweghị ike" },
    { id: "O4", condition: "Mgbe e nyere gị ọnya ọbara na-agba nke ukwuu", action: "ịkọwa otu esi akwụsị ọbara ahụ site n'ịpịa ya ike n'elu ọnya ahụ", standard: "na-akpọ aha uwe aka ma ọ bụ ihe mgbochi, ịpịa na-adịghị akwụsị, na ịgbakwunye akwa kama iweli akwa ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị ndepụta ihe ịrịba ama", action: "ịmata ihe ịdọ aka na ntị nke nkụchi obi na nke ọrịa strok site n'iji B.E. F.A.S.T.", standard: "na-enweta opekata mpe 4 n'ime 5 ziri ezi ma na-akpọ 911 kama ịnya onye ahụ ụgbọ ala" },
    { id: "O6", condition: "Site n'iji ihe nchọta klaasị nke American Red Cross ma ọ bụ American Heart Association", action: "ịhọrọ klaasị CPR, AED na enyemaka mbụ n'ihu ọha ma dee atụmatụ ọzụzụ nwere ụbọchị", standard: "na-akpọ aha klaasị ahụ, onye na-enye asambodo, na ma ọrụ gị chọrọ ya" }
  ],
  chapters: [
    {
      name: "Isi 1: Mee ngwa ngwa ma mee ka mkpụrụ obi na-arụ ọrụ",
      lessons: [
        {
          title: "Lelee, kpọọ oku, nye aka: nkeji mbụ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Lelee ebe ahụ na onye ahụ, wee kpọọ 911 site n'ozi doro anya.",
          text: [
            "N'ihe mberede ọ bụla, malite n'okwu atọ: lelee, kpọọ oku, nye aka. Nke mbụ, LELEE ma ebe ahụ dị mma maka gị: ụgbọ ala na-agafe, ọkụ, anwụrụ ọkụ, eletrik, onye iwe na-ewe ma ọ bụ mmiri miri emi. Ọ bụrụ na ọ dịghị mma, nọrọ n'ebe dị anya ma kpọọ oku. Ị pụghị inyere onye ọ bụla aka ma ọ bụrụ na ihe emerụọ gị ahụ.",
            "Mgbe ahụ lelee onye ahụ. Metụ ubu ya aka ma tie mkpu, \"Ọ dị gị mma?\" Lee obi (chest) ya ka ịhụ ma ọ na-eku ume nke ọma. Ịkụ ume n'ike n'ike otu mgbe n'otu mgbe abụghị iku ume nke ọma.",
            "Nke ọzọ, KPỌỌ 911 (ma ọ bụ nọmba ihe mberede obodo gị ma ọ bụrụ na ị nọghị n'America). Ọ bụrụ na onye ọzọ nọ gị nso, tụọ ya aka ma sị, \"Gị, kpọọ 911 ma weta AED.\" Tinye ekwentị na spika. Kwuo adreesị mbụ, wee kwuo ihe mere, ma akwụsịla oku ahụ ruo mgbe onye na-aza oku (dispatcher) gwara gị. Onye na-aza oku nwere ike ịkụziri gị CPR n'oge ahụ.",
            "Mgbe ahụ NYE AKA: nye enyemaka ị nwere ike inye ruo mgbe ndị a zụrụ azụ bịara. Jiri uwe aka ma ọ bụ ihe mgbochi ma ọ bụrụ na i nwere ha. Ọtụtụ steeti n'America nwere iwu Good Samaritan nke na-echebe ndị na-enye aka n'ezi obi; nkọwa ya dị iche site na steeti ruo steeti."
          ],
          steps: ["Lelee ebe ahụ: ọ dị mma maka m?", "Lelee onye ahụ: metụ ya aka, tie mkpu \"Ọ dị gị mma?\", lee ma ọ na-eku ume nke ọma.", "Kpọọ 911 (ma ọ bụ nọmba obodo gị), ma ọ bụ tụọ otu onye aka ka ọ kpọọ oku, onye ọzọ ka o weta AED.", "Ekwentị na spika: adreesị mbụ, wee kwuo ihe mere. Nọgide n'ekwentị.", "Nye aka: nye enyemaka ruo mgbe ndị a zụrụ azụ bịara."],
          words: [["Dispatcher", "onye a zụrụ azụ na-aza oku 911, na-eziga enyemaka ma nwee ike ịgwa gị ihe ị ga-eme."], ["Unresponsive (anaghị aza)", "onye na-adịghị emegharị ahụ, na-adịghị emeghe anya ma ọ bụ aza mgbe ị metụrụ ya aka ma tie mkpu."], ["Iwu Good Samaritan", "iwu steeti nke na-echebe ndị na-enye aka n'ihe mberede n'ezi obi; nkọwa ya dị iche site na steeti ruo steeti."]],
          slides: [
            { title: "Lelee, kpọọ oku, nye aka", bullets: ["Lelee: ebe ahụ ọ dị mma? Onye ahụ ọ na-aza?", "Kpọọ oku: 911 ma ọ bụ nọmba ihe mberede obodo gị", "Nye aka: nyere aka ruo mgbe ndị a zụrụ azụ bịara"] },
            { title: "Lelee onye ahụ", bullets: ["Metụ ubu ya aka ma tie mkpu \"Ọ dị gị mma?\"", "Lee obi (chest) ya ma ọ na-eku ume nke ọma", "Ịkụ ume n'ike n'ike ABỤGHỊ iku ume nke ọma"] },
            { title: "Kpọọ oku nke ọma", bullets: ["Tụọ otu onye aka: \"Gị, kpọọ 911\"", "Gwa onye ọzọ ka o weta AED", "Adreesị mbụ, wee kwuo ihe mere", "Nọgide n'ekwentị; onye na-aza oku ga-enyere gị aka"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Dee otu ahịrịokwu ị ga-agwa 911 site n'ụlọ gị: adreesị gị zuru ezu na okporo ụzọ kacha nso nke gafere ya, wee sị \"otu nwoke dara n'ala, ọ naghị eku ume\". Gụpụta ya n'olu dị elu ugboro abụọ ruo mgbe ị nwere ike ikwu ya n'elegheghị anya.",
          youCanNow: "ilele ebe ahụ na onye ahụ, na ịkpọ 911 site n'ozi doro anya.",
          quickCheck: [
            { objective: "O1", q: "Ị hụrụ otu nwoke dina n'okporo ụzọ, ụgbọ ala na-agafe. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Gbaa ọsọ gakwuru ya ozugbo", "Hụ na ebe ahụ dị mma maka gị, wee kpọọ 911", "Malite CPR n'okporo ụzọ", "Sere vidiyo ya"], answer: 1, why: "Ilele na ebe ahụ dị mma na-ebu ụzọ; ọ bụrụ na ọ dịghị mma, nọrọ n'ebe dị anya ma kpọọ oku." },
            { objective: "O1", q: "Mgbe ị kpọrọ 911, gịnị ka ị ga-ebu ụzọ kwuo?", options: ["Akụkọ ndụ gị", "Akụkọ ahụike onye ahụ", "Adreesị ma ọ bụ ebe ahụ", "Ụdị ekwentị gị"], answer: 2, why: "Adreesị na-ebu ụzọ ka e nwee ike iziga enyemaka ọbụlagodi ma oku ahụ kwụsịrị." }
          ]
        },
        {
          title: "CPR jiri naanị aka: pịa ike ma mee ngwa ngwa",
          objectives: ["O2"],
          minutes: 6,
          goal: "Depụta usoro CPR jiri naanị aka n'usoro ziri ezi.",
          text: [
            "Mgbe okenye dara n'ala na mberede, anaghị aza ma anaghị eku ume nke ọma, mkpụrụ obi ya nwere ike ịkwụsị. A na-akpọ nke a cardiac arrest (mkpụrụ obi ịkwụsị ịkụ). CPR na-akwali ọbara gaa n'ụbụrụ ruo mgbe AED na ndị ọrụ mberede bịara.",
            "American Heart Association na-akụzi CPR jiri naanị aka maka onye ọ bụla a na-azụbeghị ma ọ bụ na-enweghị obi ike inye ume: kpọọ 911, wee pịa ike ma mee ngwa ngwa n'etiti obi (chest). Ọ dịghị mkpa ka i lelee pulse (ọkụkụ obi) ma ọ bụrụ na ị bụghị onye ọrụ ahụike.",
            "Gbuo ikpere n'akụkụ onye ahụ n'elu ihe siri ike ma dị larịị. Tinye ikiri aka (heel) otu aka n'etiti obi ya, aka nke ọzọ n'elu ya, aka gị kwụ ọtọ, ubu gị n'elu aka gị. Pịa ala ihe dị ka 2 inch (5 sentimita), ugboro 100 ruo 120 kwa nkeji, ma hapụ obi ahụ ka ọ laghachi elu kpamkpam oge ọ bụla.",
            "Gaa n'ihu ruo mgbe AED dị njikere, ndị a zụrụ azụ weghaara, ma ọ bụ onye ahụ malitere iku ume nke ọma. CPR na-agwụ ike: ọ bụrụ na onye ọzọ maara ya, gbanwee onwe unu ihe dị ka nkeji abụọ ọ bụla, kwụsịtụ ntakịrị. Klaasị na-enye gị ohere ime omume omimi ahụ na manikin; emela omume na ezi mmadụ mgbe ọ bụla."
          ],
          steps: ["Anaghị aza ma anaghị eku ume nke ọma: kpọọ 911 ma ziga mmadụ ka o weta AED.", "Tọgbọọ onye ahụ n'azụ ya n'elu ihe siri ike ma dị larịị.", "Ikiri otu aka n'etiti obi, aka nke ọzọ n'elu ya.", "Aka kwụ ọtọ, ubu n'elu aka.", "Pịa ihe dị ka 2 inch n'omimi, ugboro 100 ruo 120 kwa nkeji; hapụ obi ka ọ laghachi elu kpamkpam.", "Akwụsịla ruo mgbe AED, ndị a zụrụ azụ, ma ọ bụ iku ume nke ọma."],
          words: [["CPR", "cardiopulmonary resuscitation: ịpịa obi (na mgbe ụfọdụ inye ume) nke na-eme ka ọbara na-aga mgbe mkpụrụ obi kwụsịrị."], ["Cardiac arrest", "mgbe mkpụrụ obi kwụsịrị ịkwọ ọbara na mberede; onye ahụ na-ada n'ala ma anaghị eku ume nke ọma."], ["Compression (ịpịa)", "otu ịpịa ala n'elu obi (chest)."], ["Manikin", "ahụ mmadụ arụrụ arụ a na-eji eme omume na klaasị CPR."]],
          slides: [
            { title: "Mgbe ị ga-amalite CPR", bullets: ["Okenye dara n'ala ma anaghị aza", "Anaghị eku ume nke ọma, ma ọ bụ na-akụ ume n'ike n'ike", "Bute ụzọ kpọọ 911 ma ziga mmadụ ka o weta AED"] },
            { title: "Aka n'ebe ziri ezi", bullets: ["Ikiri otu aka n'etiti obi (chest)", "Aka nke ọzọ n'elu ya", "Aka kwụ ọtọ, ubu n'elu aka"] },
            { title: "Pịa ike ma mee ngwa ngwa", bullets: ["Ihe dị ka 2 inch (5 cm) n'omimi", "Ugboro 100 ruo 120 kwa nkeji", "Hapụ obi ka ọ laghachi elu kpamkpam"] },
            { title: "Gaa n'ihu", bullets: ["Ruo mgbe AED dị njikere ma ọ bụ ndị enyemaka weghaara", "Gbanwee onwe gị na onye enyemaka ihe dị ka nkeji 2 ọ bụla", "Mee omume omimi ahụ na manikin na klaasị"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Gbuo ikpere n'akụkụ ohiri isi siri ike ma ọ bụ akwa nhicha ahụ a fụkọrọ afụkọ n'ala (ọ bụghị mmadụ mgbe ọ bụla). Tinye aka gị dị ka e gosiri, aka kwụ ọtọ. Tọọ oge ekwentị maka sekọnd 30 ma gụọ ịpịa gị n'olu dị elu. Chọọ ịpịa 50 ruo 60 n'ime sekọnd 30, nke dabara 100 ruo 120 kwa nkeji.",
          youCanNow: "idepụta usoro CPR jiri naanị aka ma debe ọsọ ziri ezi.",
          quickCheck: [
            { objective: "O2", q: "Ebee ka aka gị na-aga maka CPR okenye?", options: ["N'elu afọ", "N'ubu aka ekpe", "N'olu", "N'etiti obi (chest)"], answer: 3, why: "Ikiri otu aka na-aga n'etiti obi, aka nke ọzọ n'elu ya." },
            { objective: "O2", q: "Ọsọ ole ka ị na-eji pịa na CPR?", options: ["Ugboro 100 ruo 120 kwa nkeji", "Ihe dị ka ugboro 20 kwa nkeji", "Otu ugboro na sekọnd 10 ọ bụla", "Nwayọọ nwayọọ dị ka i nwere ike"], answer: 0, why: "Ndụmọdụ bụ ịpịa ugboro 100 ruo 120 kwa nkeji, na-ahapụ obi ka ọ laghachi elu oge ọ bụla." }
          ]
        },
        {
          title: "Iji AED, na ihe klaasị CPR zuru ezu na-agbakwunye",
          objectives: ["O2"],
          minutes: 5,
          goal: "Depụta usoro iji AED na CPR.",
          text: [
            "AED (automated external defibrillator) bụ obere igbe nwere ike inye mkpụrụ obi shock ka ọ laghachi n'ịkụ nke ọma. Ị na-ahụ ha n'ụlọ akwụkwọ, ebe mgbatị ahụ, ọdụ ụgbọ elu, ọfịs, nnukwu ụlọ ahịa na ebe ofufe, ọtụtụ mgbe n'igbe dị na mgbidi nwere akara obi na àmụmà.",
            "E mere AED maka ndị a na-azụbeghị. Gbanye ya, ọ ga-agwa gị okwu. Kpughee obi (chest), hichaa ya ka ọ kpọọ nkụ, tinye pads ebe foto na-egosi, ma tinye waya ma ọ dị mkpa. Onye ọ bụla na-anọ n'ebe dị anya mgbe ọ na-elele mkpụrụ obi. Ọ bụrụ na ọ sị nye shock, hụ na ọ dịghị onye metụrụ onye ahụ aka, wee pịa bọtịnụ ahụ. Wee laghachi ozugbo na CPR, dị ka AED na-agwa gị.",
            "Jiri AED ozugbo ọ bịarutere, ma soro olu ya kpọmkwem. Akwụsịla CPR ịga chọọ otu n'onwe gị ma ọ bụrụ na onye ọzọ nwere ike iweta ya.",
            "Na klaasị CPR zuru ezu, ị na-amụtakwa inye ume (rescue breaths): ịpịa 30, wee nye ume 2, na-emeghachi ya. Ị na-amụtakwa CPR maka ụmụaka na ụmụ ọhụrụ, nke dị iche. Mee omume usoro ndị ahụ na klaasị n'ihu onye nkuzi."
          ],
          steps: ["Gaa n'ihu na CPR mgbe mmadụ na-eweta AED.", "Gbanye AED ma gee ntị.", "Kpughee obi ma hichaa ya ka ọ kpọọ nkụ; tinye pads ebe foto na-egosi.", "Nọrọ n'ebe dị anya mgbe ọ na-elele; ọ dịghị onye na-emetụ onye ahụ aka.", "Ọ bụrụ na ọ sị shock: onye ọ bụla pụọ, pịa bọtịnụ ahụ.", "Laghachi ozugbo na CPR dị ka ọ na-agwa gị."],
          words: [["AED", "automated external defibrillator: igbe na-elele mkpụrụ obi ma, ọ bụrụ na ọ dị mkpa, nye shock iji dozie ịkụ ya. Ọ na-agwa gị nzọụkwụ ọ bụla."], ["Pads", "ihe nrapado nwere waya a na-etinye n'obi (chest) gba ọtọ ka AED nwee ike ilele mkpụrụ obi ma nye ya shock."], ["Rescue breaths", "ume ị na-enye n'ọnụ onye ahụ n'oge CPR; a na-amụta ya na klaasị zuru ezu."]],
          slides: [
            { title: "Ihe AED na-eme", bullets: ["Ọ na-elele ịkụ mkpụrụ obi", "Ọ na-enye shock naanị ma ọ dị mkpa", "Ọ na-agwa gị nzọụkwụ ọ bụla"] },
            { title: "Usoro AED", bullets: ["Gbanye ya ma gee ntị", "Obi gba ọtọ, kpọrọ nkụ; pads ebe foto na-egosi", "Nọrọ n'ebe dị anya mgbe ọ na-elele"] },
            { title: "Ọ bụrụ na ọ sị shock", bullets: ["Hụ na ọ dịghị onye metụrụ onye ahụ aka", "Pịa bọtịnụ shock", "Laghachi ozugbo na CPR"] },
            { title: "Klaasị zuru ezu na-agbakwunye", bullets: ["Inye ume: ịpịa 30, wee nye ume 2", "CPR maka ụmụaka na ụmụ ọhụrụ", "Omume aka n'ihu onye nkuzi"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Chọpụta ebe AED kacha nso dị n'ebe ọrụ gị, ụlọ akwụkwọ, ebe mgbatị ahụ ma ọ bụ ebe ofufe gị. Jụọ onye njikwa ma ọ bụ chọọ akara ya. Dee kpọmkwem ebe ọ dị, ma sere ebe pads abụọ ahụ na-aga n'elu foto mmadụ e ji osisi sere, site n'isi gị.",
          youCanNow: "idepụta usoro iji AED na CPR ma kwuo ebe nke kacha nso dị.",
          quickCheck: [
            { objective: "O2", q: "AED sị na a na-atụ aro shock. Gịnị ka ị ga-eme tupu ị pịa bọtịnụ ahụ?", options: ["Jide onye ahụ aka", "Wepụ pads ahụ", "Hụ na ọ dịghị onye metụrụ onye ahụ aka", "Nye onye ahụ mmiri"], answer: 2, why: "Onye ọ bụla ga-apụ ka shock ahụ ga naanị n'ahụ onye ahụ." },
            { objective: "O2", q: "AED enyela shock. Gịnị na-esote?", options: ["Chere ụgbọ ala ndị ọrịa (ambulance) n'udo", "Laghachi na CPR dị ka AED na-agwa gị", "Gbanyụọ AED", "Mee ka onye ahụ nọdụ ala"], answer: 1, why: "Mgbe shock gasịrị, ị na-alaghachi ozugbo na CPR, na-eso olu AED." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Mee ngwa ngwa ma mee ka mkpụrụ obi na-arụ ọrụ",
        questions: [
          { objective: "O1", q: "Kedu okwu atọ mbụ maka ihe mberede ọ bụla?", options: ["Chere, lee, jee ije", "Lelee, kpọọ oku, nye aka", "Gbaa ọsọ, zoo, kọọ", "Jụọ, sere vidiyo, biputa"], answer: 1, why: "Lelee ebe ahụ na onye ahụ, kpọọ 911, wee nye aka ruo mgbe enyemaka bịara." },
          { objective: "O1", q: "Mmadụ atọ na-ele otu nwanyị dara n'ala. Kedu otu ị ga-esi nweta enyemaka ngwa ngwa?", options: ["Tụọ otu onye aka: \"Gị, kpọọ 911,\" ma gwa onye ọzọ ka o weta AED", "Tie mkpu \"Onye kpọọ oku!\" nye igwe mmadụ", "Chere ka onye ọzọ mee ya", "Biputa ya na soshal midia"], answer: 0, why: "Inye otu onye ọrụ doro anya na-akwụsị onye ọ bụla iche na onye ọzọ akpọọla oku." },
          { objective: "O2", q: "Ole omimi ka ị na-apịa obi okenye na CPR?", options: ["Imetụ ya aka nwayọọ", "Ihe dị ka ọkara inch", "Omimi kacha ị nwere ike", "Ihe dị ka 2 inch (5 cm)"], answer: 3, why: "Ịpịa obi okenye bụ ihe dị ka 2 inch n'omimi, na-ahapụ obi ka ọ laghachi elu." },
          { objective: "O2", q: "Olee mgbe ị ga-amalite CPR jiri naanị aka n'ahụ okenye?", options: ["Mgbe ọ na-ekwu okwu ma ike gwụrụ ya", "Mgbe ọ naghị aza ma anaghị eku ume nke ọma", "Mgbe o nwere obere ọnya", "Mgbe ọ na-akwa ụkwara ike"], answer: 1, why: "CPR bụ maka onye na-anaghị aza ma anaghị eku ume nke ọma, ma ọ bụ na-akụ ume n'ike n'ike." },
          { objective: "O2", q: "Onye nwere ike iji AED?", options: ["Onye ọ bụla; ọ na-agwa gị usoro ya", "Naanị ndị dọkịta", "Naanị ndị na-emenyụ ọkụ", "Naanị ndị gafere afọ 30"], answer: 0, why: "E mere AED maka ndị a na-azụbeghị, ọ na-enyekwa ntụziaka n'olu." }
        ]
      }
    },
    {
      name: "Isi 2: Ihe mberede a na-ahụkarị na inweta asambodo",
      lessons: [
        {
          title: "Ihe kpachiri akpịrị na ọbara ọgbụgba siri ike",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Mata mgbe ihe kpachiri mmadụ akpịrị, ma kọwaa otu esi akwụsị ọbara ọgbụgba siri ike site n'ịpịa ọnya ahụ kpọmkwem.",
          text: [
            "Ihe kpachiri akpịrị (choking): onye ahụ nwere ike ijide akpịrị ya, enweghị ike ikwu okwu, kwaa ụkwara na-esighị ike, mee olu dị elu dị ka ụda mkpọrọhịhị, ma ọ bụ malite ịcha anụnụ anụnụ. Jụọ, \"Ihe kpachiri gị akpịrị? Ị nwere ike ikwu okwu?\" Ọ bụrụ na ọ nwere ike ịkwa ụkwara ike ma kwuo okwu, akụla ya ihe; gwa ya ka ọ gaa n'ihu na-akwa ụkwara.",
            "Ọ bụrụ na o nweghị ike ikwu okwu, ịkwa ụkwara ma ọ bụ iku ume, mee ka mmadụ kpọọ 911. Ndụmọdụ America na-egosi ụzọ abụọ isi chụpụ ihe ahụ: ịkụ ike n'etiti ọkpụkpụ ubu abụọ site n'ikiri aka gị (back blows), na ịkwali ngwa ngwa n'ime na elu n'elu otubo (abdominal thrusts). Nwanyị dị ime ma ọ bụ onye buru ibu nke ukwuu na-enweta ịkwali obi (chest thrusts) kama. Ọ bụrụ na onye ahụ dara mbà, kpọọ 911, tọgbọọ ya n'ala ma malite CPR. Mụta ma mee omume ihe ndị a na klaasị; emela omume ịkwali n'ahụ ezi mmadụ.",
            "Ọbara ọgbụgba siri ike: kpọọ 911. Yiri uwe aka ma ọ bụrụ na i nwere ya, ma ọ bụ jiri akpa plastik dị ka ihe mgbochi. Pịa ike, kpọmkwem n'elu ọnya ahụ, site n'iji akwa dị ọcha, gauze ma ọ bụ ọbụna otu uwe, ma gaa n'ihu na-apịa. Ewelila ya ka ị lee. Ọ bụrụ na ọbara gbazere ya, tinyekwu akwa n'elu ya ma gaa n'ihu na-apịa.",
            "Adọpụtala ihe rapaara n'ime ọnya; tinye akwa gburugburu ya. Tourniquet bụ maka ọbara ọgbụgba nwere ike igbu mmadụ n'aka ma ọ bụ ụkwụ mgbe ịpịa ezughị; Stop the Bleed na klaasị enyemaka mbụ na-akụzi otu esi eji ya."
          ],
          steps: ["Ihe kpachiri akpịrị: jụọ \"Ihe kpachiri gị akpịrị? Ị nwere ike ikwu okwu?\"", "Ọ nwere ike ịkwa ụkwara ma kwuo okwu: hapụ ya ka ọ gaa n'ihu na-akwa ụkwara.", "O nweghị ike ikwu okwu ma ọ bụ iku ume: kpọọ 911 ma nye enyemaka mbụ i mụtara na klaasị (back blows na abdominal thrusts).", "Ọ dara mbà: tọgbọọ ya n'ala, malite CPR.", "Ọbara ọgbụgba: kpọọ 911, uwe aka ma ọ bụ ihe mgbochi, pịa ọnya ahụ ike site n'akwa dị ọcha.", "Ọbara gbazere ya: tinyekwu akwa n'elu; ewelila akwa mbụ."],
          words: [["Abdominal thrusts", "ịkwali ngwa ngwa n'ime na elu n'elu otubo iji chụpụ ihe kpachiri akpịrị; a na-akpọkwa ya Heimlich maneuver."], ["Back blows", "ịkụ ike n'etiti ọkpụkpụ ubu abụọ site n'ikiri aka iji tọpụ ihe kpachiri akpịrị."], ["Direct pressure (ịpịa kpọmkwem)", "ịpịa ike kpọmkwem n'elu ọnya iji belata ma kwụsị ọbara ọgbụgba."], ["Tourniquet", "eriri siri ike a na-ekenye n'aka ma ọ bụ ụkwụ n'elu ọnya iji kwụsị ọbara ọgbụgba nwere ike igbu mmadụ; a na-akụzi ya na klaasị."]],
          slides: [
            { title: "Ihe ịrịba ama nke ihe kpachiri akpịrị", bullets: ["Ọ na-ejide akpịrị, enweghị ike ikwu okwu", "Ụkwara na-esighị ike ma ọ bụ olu dị elu", "Ọ na-amalite ịcha anụnụ anụnụ"] },
            { title: "Ihe kpachiri akpịrị: ihe ị ga-eme", bullets: ["Ọ nwere ike ịkwa ụkwara ma kwuo okwu: hapụ ya ka ọ kwaa ụkwara", "O nweghị ike ikwu okwu: kpọọ 911, back blows na thrusts", "Ọ dara mbà: tọgbọọ ya n'ala, malite CPR"] },
            { title: "Ọbara ọgbụgba siri ike", bullets: ["Kpọọ 911; uwe aka ma ọ bụ ihe mgbochi", "Pịa ike, kpọmkwem n'elu ọnya ahụ", "Ọbara gbazere ya: tinyekwu akwa, gaa n'ihu na-apịa"] },
            { title: "Emela", bullets: ["Ewelila akwa ahụ ka ị lee", "Adọpụtala ihe rapaara n'ọnya", "Emela omume ịkwali n'ahụ ezi mmadụ"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Tinye akwa nhicha ahụ a pịaji apịaji n'elu ogwe aka gị. Jiri ọbụ aka gị pịa ya ike ruo sekọnd 60 site na elekere, n'eweliteghị ya. Wee tinye akwa nke abụọ n'elu ya ma gaa n'ihu na-apịa. Dee ahịrị abụọ: otu o si sie ike idobe ịpịa ahụ, na ihe ịrịba ama atọ nke ihe kpachiri akpịrị site na nkuzi a.",
          youCanNow: "ịmata ihe ịrịba ama nke ihe kpachiri akpịrị ma kwụsị ọbara ọgbụgba siri ike site n'ịpịa ọnya ahụ ike kpọmkwem.",
          quickCheck: [
            { objective: "O3", q: "Otu nwanyị na-eri nri ehihie na-akwa ụkwara ike ma ka nwere ike ikwu okwu. Gịnị ka ị ga-eme?", options: ["Kụọ ya ike n'azụ ozugbo", "Nye ya abdominal thrusts", "Gbaa ya ume ka ọ gaa n'ihu na-akwa ụkwara ma nọnyere ya", "Tọgbọọ ya n'ala"], answer: 2, why: "Ọ bụrụ na mmadụ nwere ike ịkwa ụkwara ike ma kwuo okwu, hapụ ya ka ọ gaa n'ihu na-akwa ụkwara; akụla ya ihe." },
            { objective: "O4", q: "Ọbara gbazere akwa ị na-eji apịa ọnya. Gịnị ka ị ga-eme?", options: ["Welie akwa ahụ ka ị lee", "Kwụsị ịpịa", "Jiri mmiri saa ọnya ahụ", "Tinyekwu akwa n'elu ya ma gaa n'ihu na-apịa"], answer: 3, why: "Ịgbakwunye akwa na-edobe ịpịa ahụ; iweli akwa ahụ nwere ike ime ka ọbara malite ọzọ." }
          ]
        },
        {
          title: "Ịmata nkụchi obi na ọrịa strok",
          objectives: ["O5"],
          minutes: 5,
          goal: "Mata ihe ịdọ aka na ntị nke nkụchi obi na nke ọrịa strok.",
          text: [
            "Nkụchi obi (heart attack) bụ mgbe ọbara anaghị eru otu akụkụ mkpụrụ obi. Ihe ịrịba ama a na-ahụkarị: mgbu ma ọ bụ nrụgide n'obi (chest) nke nwere ike gbasaa n'agba, aka, azụ ma ọ bụ afọ, ume ọkụ, ọsụsọ oyi, ọgbụgbọ ma ọ bụ isi ọgbụgba, na ike ọgwụgwụ na-adịghị ahụkebe. Ụmụ nwanyị, ndị agadi na ndị nwere ọrịa shuga nwere ike inwe ihe ịrịba ama dị nro ma ọ bụ dị iche.",
            "Ọ bụrụ na i chere na ọ bụ nkụchi obi, kpọọ 911 ozugbo. Echela ka ị hụ ma ọ ga-agafe, ekwela ka onye ahụ gbochie gị. Mee ka ọ nọdụ ala zuo ike, tọpụ uwe siri ike, ma nọnyere ya. Enyela ọgwụ ọ bụla ma ọ bụrụ na ọ bụghị ọgwụ nke ya dọkịta nyere ya ma ọ bụ onye na-aza oku 911 gwara gị. Ọ bụrụ na ọ kwụsịrị ịza ma kwụsị iku ume nke ọma, malite CPR ma jiri AED.",
            "Ọrịa strok (stroke) bụ mgbe ọbara anaghị eru otu akụkụ ụbụrụ ma ọ bụ mgbe akwara ọbara gbawara. CDC (ụlọ ọrụ ahụike ọha nke America) na-akụzi B.E. F.A.S.T.: Balance (isi ọgbụgba na mberede ma ọ bụ ida ọdịda), Eyes (nsogbu ịhụ ụzọ na mberede), Face (gwa ya ka ọ mụmụọ ọnụ ọchị; otu akụkụ ihu ọ dara?), Arms (gwa ya ka o welie aka abụọ; otu ọ na-ada ala?), Speech (okwu ya ọ na-agbagọ ma ọ bụ dị iche?), Time (kpọọ 911 ozugbo).",
            "Dee oge ihe ịrịba ama ndị ahụ malitere ma gwa ndị ọrụ mberede. Kpọọ ụgbọ ala ndị ọrịa (ambulance); anyala onye ahụ gaa ụlọ ọgwụ n'onwe gị."
          ],
          steps: ["Ihe ịrịba ama nkụchi obi: mgbu ma ọ bụ nrụgide n'obi, ume ọkụ, ọsụsọ oyi, ọgbụgbọ, isi ọgbụgba.", "Kpọọ 911 ozugbo; mee ka ọ nọdụ ala, tọpụ uwe, nọnyere ya.", "Enweghị ọgwụ ma ọ bụrụ na ọ bụghị nke ya ma ọ bụ onye na-aza oku kwuru.", "Ọrịa strok: lelee B.E. F.A.S.T.", "Dee oge ihe ịrịba ama malitere; kpọọ ambulance, anyala ya ụgbọ ala."],
          words: [["Nkụchi obi (heart attack)", "mgbe ọbara anaghị eru otu akụkụ mkpụrụ obi; onye ahụ na-amakarị ihe ma nwee mgbu ma ọ bụ nrụgide n'obi."], ["Ọrịa strok (stroke)", "mgbe ọbara anaghị eru otu akụkụ ụbụrụ ma ọ bụ mgbe akwara ọbara n'ụbụrụ gbawara."], ["B.E. F.A.S.T.", "Balance, Eyes, Face, Arms, Speech, Time (nguzozi, anya, ihu, aka, okwu, oge): ụzọ ịmata ọrịa strok na icheta ịkpọ 911."]],
          slides: [
            { title: "Ihe ịrịba ama nkụchi obi", bullets: ["Mgbu ma ọ bụ nrụgide n'obi; nwere ike gbasaa n'agba, aka, azụ", "Ume ọkụ, ọsụsọ oyi, ọgbụgbọ", "Ụmụ nwanyị na ndị agadi nwere ike inwe ihe ịrịba ama dị nro"] },
            { title: "Nkụchi obi: ihe ị ga-eme", bullets: ["Kpọọ 911 ugbu a; echela", "Nọdụ ala, zuo ike, tọpụ uwe, nọnyere ya", "Enweghị ọgwụ ma ọ bụghị nke ya ma ọ bụ onye na-aza oku kwuru"] },
            { title: "Ọrịa strok: B.E. F.A.S.T.", bullets: ["Balance na Eyes: isi ọgbụgba ma ọ bụ nsogbu ịhụ ụzọ na mberede", "Face na-ada, Arm na-ada ala, Speech na-agbagọ", "Time: kpọọ 911 ozugbo"] },
            { title: "Oge dị mkpa", bullets: ["Dee mgbe ihe ịrịba ama malitere", "Kpọọ ambulance; anyala ya ụgbọ ala"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Dee B.E. F.A.S.T. n'akụkụ peeji site n'elu ruo ala. N'akụkụ mkpụrụ akwụkwọ ọ bụla, dee ajụjụ ma ọ bụ nnwale ị ga-eji, site n'isi gị. Wee kụziere otu enyi ma ọ bụ onye ezinụlọ ya n'ihe na-erughị otu nkeji.",
          youCanNow: "ịmata ihe ịdọ aka na ntị nke nkụchi obi na nke ọrịa strok ma kpọọ 911 ngwa ngwa.",
          quickCheck: [
            { objective: "O5", q: "Ọnụ ọchị nwanne nna gị na-ada n'otu akụkụ, okwu ya na-agbagọkwa. Gịnị ka ị ga-eme?", options: ["Kpọọ 911 ozugbo ma dee oge ahụ", "Hapụ ya ka ọ dinara ala hie ụra", "Nya ya ụgbọ ala gaa ụlọ ọgwụ n'onwe gị", "Nye ya ọgwụ mgbu"], answer: 0, why: "Ndị a bụ ihe ịrịba ama ọrịa strok; kpọọ 911 ozugbo, dee oge ahụ, ma hapụ ambulance ka o buru ya." },
            { objective: "O5", q: "Kedu nke bụ ihe ịrịba ama nkụchi obi a na-ahụkarị?", options: ["Obere ọnya n'aka", "Mgbu ma ọ bụ nrụgide n'obi nke na-agbasa n'aka ma ọ bụ agba", "Mgbe mmadụ zere uzere", "Ihe na-akọ akọ n'ụkwụ"], answer: 1, why: "Mgbu ma ọ bụ nrụgide n'obi nke nwere ike gbasaa bụ ihe ịrịba ama nkụchi obi a na-ahụkarị." }
          ]
        },
        {
          title: "Inweta asambodo: atụmatụ njikere gị",
          objectives: ["O6"],
          minutes: 5,
          goal: "Họrọ klaasị CPR na enyemaka mbụ n'ihu ọha ma dee atụmatụ ọzụzụ nwere ụbọchị.",
          text: [
            "Ihe ọmụmụ a na-enye amamihe, ọ bụghị asambodo. Ndị were mmadụ n'ọrụ na-arịọ CPR na enyemaka mbụ na-achọkarị kaadị site n'aka ụlọ ọrụ a ma ama. N'America, ndị a kacha mara bụ American Red Cross na American Heart Association. Ha abụọ nwere ihe nchọta klaasị na weebụsaịtị ha.",
            "Họrọ klaasị dabara ụzọ gị. Ọtụtụ ọrụ n'ebe ọrụ na n'obodo (ilekọta ụmụaka, ịzụ ndị egwuregwu, nchekwa, nri, òtù enyemaka) na-anabata klaasị First Aid, CPR na AED maka ndị okenye na ụmụaka. Ọrụ ahụike (nurse aide, EMT, ụmụ akwụkwọ ọgwụ na ahụike) na-achọkarị Basic Life Support (BLS). Jụọ onye were gị n'ọrụ ma ọ bụ mmemme gị nke ha na-anabata tupu ị kwụọ ụgwọ.",
            "Ọtụtụ klaasị bụ ngwakọta: otu akụkụ n'ịntanetị, wee nnọkọ nka n'ihu onye nkuzi na manikin. Klaasị niile n'ịntanetị na-enweghị nnwale aka nwere ike ọ gaghị anabata ya. Ọnụ ahịa, ogologo klaasị na oge kaadị ahụ ga-adị dị iche: lelee peeji ụlọ ọrụ ahụ na ụbọchị dị na kaadị gị, ma megharịa ya tupu oge ya agwụ.",
            "Jụọ maka klaasị n'efu ma ọ bụ nke ọnụ ala: ụfọdụ ndị were mmadụ n'ọrụ, mmemme ọzụzụ ọrụ, ndị na-emenyụ ọkụ, ụlọ ọgwụ na òtù obodo na-enye ha. OSHA (ụlọ ọrụ America na-ahụ maka nchekwa n'ebe ọrụ) kwuru na ndị were mmadụ n'ọrụ ga-enwerịrị ndị enyemaka mbụ na ngwa dabara ihe egwu dị n'ebe ọrụ ahụ."
          ],
          steps: ["Jụọ onye were gị n'ọrụ ma ọ bụ mmemme gị klaasị ha na-anabata (dịka ọmụmaatụ First Aid, CPR na AED, ma ọ bụ BLS).", "Meghee ihe nchọta klaasị nke Red Cross ma ọ bụ American Heart Association.", "Họrọ klaasị n'ihu ọha ma ọ bụ ngwakọta dị gị nso.", "Dee aha klaasị ahụ, onye na-enye kaadị, ebe, ụbọchị na ọnụ ahịa.", "Tinye ụbọchị ahụ na kalenda gị ma tọọ ihe ncheta tupu kaadị ahụ agwụ."],
          words: [["Kaadị asambodo", "ihe akaebe site n'aka ụlọ ọrụ ọzụzụ na i gafere nnwale nka; ndị were mmadụ n'ọrụ na-arịọ ịhụ ya."], ["BLS", "Basic Life Support: klaasị CPR maka ndị ọrụ ahụike na ụmụ akwụkwọ ahụike."], ["Blended learning (ngwakọta)", "klaasị nke otu akụkụ ya dị n'ịntanetị, otu akụkụ n'ihu ọha, ya na nnwale nka aka."], ["Pediatric", "maka ụmụaka na ụmụ ọhụrụ."]],
          slides: [
            { title: "Ihe ọmụmụ a bụ amamihe", bullets: ["Ọ na-eme ka ị dị njikere; ọ naghị enye gị asambodo", "Asambodo na-esi n'aka ụlọ ọrụ a ma ama", "N'America: American Red Cross, American Heart Association"] },
            { title: "Họrọ klaasị ziri ezi", bullets: ["Ọtụtụ ọrụ: First Aid, CPR na AED (ndị okenye na ụmụaka)", "Ahụike: Basic Life Support (BLS)", "Jụọ onye were gị n'ọrụ nke ha na-anabata"] },
            { title: "Tupu ị denye aha", bullets: ["Ọ chọrọ nnwale nka n'ihu ọha", "Lelee ọnụ ahịa, ogologo ya na oge kaadị ga-adị", "Jụọ maka klaasị n'efu ma ọ bụ nke ọnụ ala"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Ọrụ ikpeazụ: mee Atụmatụ Njikere Enyemaka Mbụ na CPR gị n'otu peeji. Dee nọmba ihe mberede gị na ahịrịokwu adreesị gị, ebe AED na igbe enyemaka mbụ kacha nso dị, usoro ihe mberede site n'isi gị, na klaasị n'ihu ọha i chọtara na saịtị Red Cross ma ọ bụ AHA: aha ya, onye na-enye ya, ebe na ụbọchị.",
          youCanNow: "ịhọrọ klaasị CPR na enyemaka mbụ n'ihu ọha a ma ama ma zụọ atụmatụ mgbe ị ga-eme ya.",
          quickCheck: [
            { objective: "O6", q: "I mechaala ihe ọmụmụ amamihe a. Gịnị ka ọ na-enye gị?", options: ["Kaadị CPR onye were gị n'ọrụ ga-anabatarịrị", "Ikike ọrụ nọọsụ", "Ihe ọmụma na-eme ka ị dị njikere maka klaasị asambodo n'ihu ọha", "Ikike ịkụzi CPR"], answer: 2, why: "Ihe ọmụmụ a na-eme ka ị dị njikere; asambodo na-esi na klaasị n'ihu ọha nke ụlọ ọrụ a ma ama." },
            { objective: "O6", q: "Ị na-amalite mmemme nurse aide. Kedu klaasị CPR ha nwere ike ịchọ?", options: ["Vidiyo niile n'ịntanetị na-enweghị nnwale nka", "Ọ dịghị klaasị ọ bụla", "Klaasị site na mbipụta soshal midia", "Basic Life Support (BLS), mgbe i jụchara mmemme ahụ"], answer: 3, why: "Mmemme ahụike na-achọkarị BLS; jụọ mmemme ahụ ka ọ kwado nke ha na-anabata." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ihe mberede a na-ahụkarị na inweta asambodo",
        questions: [
          { objective: "O3", q: "Otu nwoke jidere akpịrị ya, o nweghị ike ikwu okwu ma ọ bụ kwaa ụkwara. Gịnị ka ị ga-eme?", options: ["Chere ka ahụ dị ya mma", "Mee ka mmadụ kpọọ 911 ma nye enyemaka mbụ maka ihe kpachiri akpịrị", "Nye ya mmiri ọ ṅụọ", "Gwa ya ka ọ dina ala zuo ike"], answer: 1, why: "Onye na-enweghị ike ikwu okwu ma ọ bụ kwaa ụkwara bụ onye ihe kpachiri akpịrị nke ukwuu; kpọọ 911 ma mee ihe." },
          { objective: "O4", q: "Gịnị bụ ihe mbụ ị ga-eme maka ọnya miri emi ọbara na-agba nke ukwuu (mgbe i kpọchara 911)?", options: ["Pịa ike, kpọmkwem n'elu ọnya ahụ, site n'akwa dị ọcha", "Hapụ ya ka ọ gbaa ka o hichaa ya", "Tinye ice n'elu ya", "Gwa onye ahụ ka ọ gagharịa"], answer: 0, why: "Ịpịa ike kpọmkwem bụ isi ụzọ isi kwụsị ọbara ọgbụgba siri ike." },
          { objective: "O4", q: "Otu iberibe iko rapaara n'ime ọnya. Gịnị ka ị kwesịrị ime?", options: ["Dọpụta ya ngwa ngwa", "Kwanye ya n'ime karịa", "Hapụ ya n'ime ma tinye akwa gburugburu ya", "Wụsa mmiri n'elu ya ruo mgbe ọ pụtara"], answer: 2, why: "Ịdọpụta ya nwere ike ime ka ọbara ọgbụgba ka njọ; tinye akwa gburugburu ya ma hapụ ndị ọkachamara ka ha wepụ ya." },
          { objective: "O5", q: "Na B.E. F.A.S.T., gịnị ka A pụtara?", options: ["Allergy (ahụ ekweghị)", "Address (adreesị)", "Ambulance", "Arms: otu aka ọ na-ada ala?"], answer: 3, why: "A bụ maka Arms (aka): gwa onye ahụ ka o welie aka abụọ ma lee ma otu na-ada ala." },
          { objective: "O6", q: "Kedu ụzọ kacha mma isi nweta asambodo CPR nke ọrụ ga-anabata?", options: ["Klaasị n'ihu ọha ma ọ bụ ngwakọta site na Red Cross ma ọ bụ AHA", "Ikiri vidiyo n'ịntanetị na-enweghị nnwale", "Ịgụ ihe ọmụmụ a ugboro abụọ", "Ịrịọ enyi ka ọ bịanye aka n'akwụkwọ"], answer: 0, why: "Ndị were mmadụ n'ọrụ na-achọkarị kaadị site n'aka ụlọ ọrụ a ma ama nwere nnwale nka aka." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Amamihe Enyemaka Mbụ na CPR",
    questions: [
      { objective: "O1", q: "Ị hụrụ onye ọrụ ibe gị n'ala n'akụkụ waya eletrik na-awụpụ ọkụ. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Jide aka onye ọrụ ibe gị ma dọkpụrụ ya", "Nọrọ n'ebe dị anya, kpọọ 911 ma mee ka e gbanyụọ ọkụ eletrik", "Wụsa mmiri n'elu waya ahụ", "Malite CPR n'ebe ọ nọ"], answer: 1, why: "Ebe ahụ adịghị mma; nọrọ n'ebe dị anya, kpọọ oku ma mee ka ọ dị mma tupu i metụ onye ọ bụla aka." },
      { objective: "O1", q: "Kedu otu ị ga-esi lelee ma mmadụ na-aza?", options: ["Metụ ubu ya aka ma tie mkpu \"Ọ dị gị mma?\"", "Wụsa mmiri oyi n'ihu ya", "Kpagharịa isi ya ike", "Chere nkeji ise"], answer: 0, why: "Imetụ aka na itie mkpu bụ ụzọ enweghị nsogbu isi lelee ma mmadụ na-aza." },
      { objective: "O1", q: "Ị na-akpọ 911. Olee mgbe ị nwere ike ịkwụsị oku ahụ?", options: ["Ozugbo i kwuru adreesị", "Mgbe otu nkeji gasịrị", "Mgbe onye na-aza oku gwara gị", "Mgbe onye ahụ meghere anya ya"], answer: 2, why: "Nọgide n'ekwentị; onye na-aza oku nwere ike ịchọ ozi ọzọ ma ọ bụ kụziere gị CPR." },
      { objective: "O1", q: "Ọ bụrụ na ị nọghị n'America, nọmba ole ka ị ga-akpọ?", options: ["911 mgbe niile, ebe niile", "Nọmba enyi gị", "Isi ọfịs ụlọ ọgwụ", "Nọmba ihe mberede obodo gị"], answer: 3, why: "Nọmba ihe mberede dị iche site na mba ruo mba; mụta nke obodo gị." },
      { objective: "O2", q: "Otu okenye dara n'ala, anaghị aza ma na-akụ naanị ume n'ike n'ike. Gịnị na-eme?", options: ["O nwere ike ịbụ na ọ na-arahụ ụra", "Mkpụrụ obi ya nwere ike ịkwụsị; kpọọ 911 ma malite CPR", "Ihe kpachiri ya akpịrị ma ọ dị mma", "Ọ chọrọ otu iko mmiri"], answer: 1, why: "Ịkụ ume n'ike n'ike abụghị iku ume nke ọma; were ya dị ka cardiac arrest." },
      { objective: "O2", q: "Gịnị ka CPR jiri naanị aka pụtara?", options: ["Kpọọ 911 ma pịa ike ma mee ngwa ngwa n'etiti obi (chest)", "Ịhịa aka onye ahụ", "Inye naanị ume", "Ijide aka onye ahụ ruo mgbe enyemaka bịara"], answer: 0, why: "CPR jiri naanị aka bụ ịpịa obi n'enyeghị ume, mgbe i kpọchara 911." },
      { objective: "O2", q: "Mgbe ịpịa ọ bụla na CPR, gịnị ka ị na-ahapụ obi (chest) ahụ ka ọ mee?", options: ["Ọ nọgide na-adọ ala", "Ọ maa jijiji", "Ọ laghachi elu kpamkpam", "Ọ tụgharịa n'akụkụ"], answer: 2, why: "Ịhapụ obi ka ọ laghachi elu kpamkpam na-eme ka mkpụrụ obi jupụta n'ọbara tupu ịpịa nke ọzọ." },
      { objective: "O2", q: "Mmadụ wetara AED. Gịnị ka ị ga-eme?", options: ["Chere ka ndị ambulance jiri ya", "Bute ụzọ gụọ akwụkwọ ntụziaka ya niile", "Tinye ya n'okpuru isi onye ahụ", "Gbanye ya ma soro olu ya"], answer: 3, why: "AED na-agwa gị nzọụkwụ ọ bụla; jiri ya ozugbo ọ bịarutere." },
      { objective: "O3", q: "Kedu nke bụ ihe ịrịba ama na ihe kpachiri okenye akpịrị?", options: ["Ọ na-achị ọchị n'olu dị elu", "Ọ jidere akpịrị ya ma o nweghị ike ikwu okwu", "Ọ na-azere uzere", "Ọ na-arịọ akwa nhicha ọnụ"], answer: 1, why: "Ijide akpịrị na enweghị ike ikwu okwu bụ ihe ịrịba ama a ma ama nke ihe kpachiri akpịrị." },
      { objective: "O3", q: "Onye ihe kpachiri akpịrị dara mbà. Gịnị ka ị ga-eme?", options: ["Kpọọ 911, tọgbọọ ya n'ala ma malite CPR", "Gaa n'ihu na-eme back blows ka ọ dina ala", "Hapụ ya ka o zuo ike", "Nye ya mmiri"], answer: 0, why: "Ọ bụrụ na onye ihe kpachiri akpịrị kwụsịrị ịza, kpọọ 911 ma malite CPR." },
      { objective: "O3", q: "Ebee ka ị kwesịrị ịmụta back blows na abdominal thrusts nke ọma?", options: ["Site n'ime omume ike n'ahụ enyi", "Site na nkọwa vidiyo ọ bụla", "Na klaasị nka aka n'ihu onye nkuzi", "Ọ dịghị mkpa ka ị mụta ha"], answer: 2, why: "A na-eme omume ihe ndị a n'enweghị nsogbu na klaasị; emela omume ịkwali n'ahụ ezi mmadụ mgbe ọ bụla." },
      { objective: "O4", q: "Tupu ị pịa ọnya mmadụ ọbara na-agba, gịnị na-echebe gị?", options: ["Uwe aka, ma ọ bụ akpa plastik dị ka ihe mgbochi", "Ọ dịghị ihe dị mkpa", "Ịsa aka gị ruo nkeji ise tupu", "Imechi anya gị"], answer: 0, why: "Uwe aka ma ọ bụ ihe mgbochi na-echebe gị pụọ n'ọbara mgbe ị na-enye aka." },
      { objective: "O4", q: "Ị na-apịa ọnya. Ruo ogologo oge ole ka ị ga-aga n'ihu na-apịa?", options: ["Sekọnd iri", "Ruo mgbe ike gwụrụ gị", "Ruo mgbe ị lere n'okpuru akwa ahụ", "Ruo mgbe ọbara kwụsịrị ma ọ bụ ndị enyemaka weghaara, n'eweliteghị ya"], answer: 3, why: "Ịpịa na-adịgide n'eleghị anya na-enye ọbara oge ka ọ kpụkọọ." },
      { objective: "O4", q: "Olee mgbe a na-eji tourniquet?", options: ["Maka obere ọnya ọ bụla", "Maka ọbara ọgbụgba nwere ike igbu mmadụ n'aka ma ọ bụ ụkwụ mgbe ịpịa ezughị", "Maka ọbara na-agba n'imi", "Maka ọnya ọkpụ"], answer: 1, why: "Tourniquet bụ maka ọbara ọgbụgba nwere ike igbu mmadụ n'aka ma ọ bụ ụkwụ, a na-akụzikwa ya na klaasị." },
      { objective: "O5", q: "Nne nne gị kwuru na ọ na-enwe nrụgide n'obi na ọsụsọ oyi ma ọ chọrọ ichere. Gịnị ka ị ga-eme?", options: ["Chere otu awa ka ị hụ", "Kpọọ 911 ugbu a ma nọnyere ya", "Nya ya ụgbọ ala n'onwe gị mgbe nri abalị gasịrị", "Nye ya ọgwụ ọ bụla dị n'ụlọ"], answer: 1, why: "Ndị a bụ ihe ịrịba ama nkụchi obi; kpọọ 911 ugbu a, ekwela ka o gbochie gị." },
      { objective: "O5", q: "Na B.E. F.A.S.T., gịnị ka T na-echetara gị ime?", options: ["Take a photo (see foto)", "Text a friend (zigara enyi ozi)", "Tell them to sleep (gwa ya ka ọ rahụ ụra)", "Time: kpọọ 911 ozugbo ma dee mgbe ihe ịrịba ama malitere"], answer: 3, why: "T bụ maka Time (oge): kpọọ 911 ozugbo ma dee mgbe ihe ịrịba ama malitere." },
      { objective: "O5", q: "Gịnị mere ị ga-eji kpọọ ambulance maka ọrịa strok kama ịnya onye ahụ ụgbọ ala?", options: ["Ndị ọrụ ahụ nwere ike ịmalite nlekọta n'ụzọ ma gwa ụlọ ọgwụ", "Ambulance bụ n'efu mgbe niile", "Ụlọ ọgwụ anaghị anabata ndị bịara n'onwe ha", "Ọ megidere iwu ịnya mmadụ ụgbọ ala"], answer: 0, why: "Ndị ọrụ mberede na-amalite nlekọta n'oge ma na-agwa ụlọ ọgwụ; CDC kwuru ka a kpọọ 911, ọ bụghị ịnya ụgbọ ala." },
      { objective: "O6", q: "Kedu òtù abụọ n'America kacha mara amara maka asambodo CPR na enyemaka mbụ?", options: ["DMV na ụlọ ọrụ nzipu akwụkwọ ozi", "IRS na SBA", "American Red Cross na American Heart Association", "Otu ìgwè soshal midia ọ bụla"], answer: 2, why: "Red Cross na AHA bụ ndị kacha mara amara na-enye ọzụzụ CPR na enyemaka mbụ n'America." },
      { objective: "O6", q: "Tupu ị kwụọ ụgwọ klaasị CPR maka ọrụ, gịnị ka ị kwesịrị ịjụ?", options: ["Klaasị na ụlọ ọrụ nke onye were gị n'ọrụ na-anabata", "Ma ị nwere ike ịhapụ nnwale nka", "Ma enyi nwere ike ime ya n'ọnọdụ gị", "Ọ dịghị ihe; klaasị niile bụ otu"], answer: 0, why: "Ọrụ dị iche iche: ụfọdụ na-anabata First Aid, CPR na AED, ahụike na-achọkarị BLS." },
      { objective: "O6", q: "Kaadị CPR gị nwere ụbọchị n'elu ya. Gịnị ka ị ga-eme?", options: ["Leghara ya anya", "Tụfuo kaadị ahụ", "Tinye ya n'ime plastik ka ọ ghara ịgwụ mgbe ọ bụla", "Tọọ ihe ncheta ka i megharịa ya tupu oge ya agwụ"], answer: 3, why: "Kaadị na-agwụ; megharịa ya tupu ụbọchị ahụ ka asambodo gị nọgide na-adị ndụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Njikere ịkpọ oku ihe mberede", objective: "O1", notYet: "Enweghị nọmba ihe mberede ma ọ bụ ahịrịokwu adreesị, ma ọ bụ adreesị ahụ edoghị anya.", meets: "O nwere nọmba ihe mberede ziri ezi na ahịrịokwu doro anya nke adreesị bu ụzọ, wee ihe mere.", exceeds: "Ọ gbakwunyekwara okporo ụzọ gafere ya ma ọ bụ ihe ama ama ma mee omume ikwu ya n'olu dị elu." },
      { name: "Achọtala AED na igbe", objective: "O2", notYet: "Amaghị ebe AED ma ọ bụ igbe enyemaka mbụ dị.", meets: "Ọ na-akpọ ebe AED na igbe enyemaka mbụ kacha nso dị n'ụlọ, n'ebe ọrụ, n'ụlọ akwụkwọ ma ọ bụ n'ebe ofufe.", exceeds: "Ọ na-akpọ ebe abụọ, ma lelee na igbe AED ahụ dị mfe iru." },
      { name: "Usoro n'usoro ya", objective: "O2", notYet: "Usoro ụfọdụ adịghị ma ọ bụ ha adịghị n'usoro ziri ezi, ma ọ bụ ọsọ na omimi CPR ezighi ezi.", meets: "O dere lelee, kpọọ oku, CPR na AED n'usoro, ya na aka n'etiti obi, 100 ruo 120 kwa nkeji na ihe dị ka 2 inch.", exceeds: "O dekwara usoro AED na mgbe a ga-agbanwe ndị na-enye aka." },
      { name: "Ihe kpachiri akpịrị na ọbara ọgbụgba", objective: "O4", notYet: "Ọ na-agwakọta ihe a ga-eme, ma ọ bụ kwuo ka e welie akwa ma ọ bụ dọpụta ihe rapaara.", meets: "O dere ihe ịrịba ama nke ihe kpachiri akpịrị (O3) na ịpịa ike kpọmkwem ya na ịgbakwunye akwa maka ọbara ọgbụgba.", exceeds: "O kwukwara mgbe onye ihe kpachiri akpịrị chọrọ CPR na ihe tourniquet bụ maka ya." },
      { name: "Nkụchi obi na ọrịa strok", objective: "O5", notYet: "O nweghị ike idepụta B.E. F.A.S.T. ma ọ bụ ihe ịrịba ama nkụchi obi.", meets: "Ọ na-edepụta B.E. F.A.S.T. na ihe ịrịba ama atọ nke nkụchi obi, ya na \"kpọọ 911\".", exceeds: "O dekwara ka e dee oge ihe ịrịba ama malitere na ka a ghara ịnya onye ahụ ụgbọ ala." },
      { name: "Atụmatụ asambodo", objective: "O6", notYet: "Ọ họrọghị klaasị, ma ọ bụ klaasị naanị n'ịntanetị na-enweghị nnwale nka.", meets: "Ọ na-akpọ aha klaasị n'ihu ọha ma ọ bụ ngwakọta, onye na-enye kaadị, ebe na ụbọchị.", exceeds: "O jirikwa onye were ya n'ọrụ ma ọ bụ mmemme ahụ kwado na a na-anabata klaasị ahụ, ma tọọ ihe ncheta maka imegharị ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe mechara klaasị CPR, AED na enyemaka mbụ n'ihu ọha nke Red Cross ma ọ bụ AHA n'ime ụbọchị 60 (nnyocha nsochi, e gosiri kaadị)",
      "Ndị na-amụ ihe na-ede kaadị CPR na enyemaka mbụ dị ndụ n'akwụkwọ arịrịọ ọrụ ma ọ bụ résumé",
      "Ebe ọrụ na òtù enyemaka nọ na mmemme ahụ na-akọ na ndị ọrụ na ndị ọrụ afọ ofufo ha nwetara asambodo karịa, ma mara ebe AED dị"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị iji lee nkuzi na ihe nchọta klaasị",
      "Akwụkwọ na mkpịsị ode; ohiri isi siri ike ma ọ bụ akwa nhicha ahụ a fụkọrọ afụkọ maka omume ọsọ CPR; akwa nhicha ahụ maka omume ịpịa",
      "Oge ekwentị ma ọ bụ elekere",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke"
    ],
    facilitatorNotes: [
      "Nke a bụ naanị amamihe. Na-ekwukarị na ọ naghị enye asambodo, ma duzie ndị na-amụ ihe gaa na klaasị n'ihu ọha nke onye nkuzi Red Cross ma ọ bụ AHA ruru eru.",
      "Ekwela ka ndị na-amụ ihe mee omume ịpịa obi, back blows ma ọ bụ abdominal thrusts n'ahụ ibe ha mgbe ọ bụla; jiri ohiri isi ma ọ bụ, ma ọ bụrụ na i nwere ha, manikin n'ihu onye nkuzi nwere asambodo.",
      "Enyela ọnụọgụ ọgwụ ma ọ bụ ndụmọdụ dọkịta; ziga ajụjụ ahụike n'aka dọkịta ma ọ bụ onye na-aza oku 911.",
      "Ụfọdụ ndị na-amụ ihe nwere ike ịgabigala ihe mberede ma ọ bụ tufuo mmadụ; kwe ka ha zuo ike ma pụọ ma ọ dị ha mkpa.",
      "Maka otu ndị nọ ná mba ọzọ, dochie 911 na nọmba ihe mberede obodo na ndị ọzụzụ obodo (dịka ọmụmaatụ òtù Red Cross ma ọ bụ Red Crescent nke mba ahụ).",
      "Soro ndị na-emenyụ ọkụ, ụlọ ọgwụ ma ọ bụ alaka Red Cross obodo gị rụkọọ ọrụ iji nye klaasị asambodo ozugbo ihe ọmụmụ a gwụrụ."
    ]
  }
};
