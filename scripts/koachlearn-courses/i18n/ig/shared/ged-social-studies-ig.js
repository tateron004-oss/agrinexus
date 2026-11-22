"use strict";

// Koach Learn course (Igbo translation of shared/ged-social-studies.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

const GED_SUBJECTS = { name: "GED Testing Service: test subjects (time, question types, calculator)", url: "https://ged.com/about_test/test_subjects/" };
const GED_SS = { name: "GED Testing Service: Social Studies test", url: "https://ged.com/about_test/test_subjects/social_studies/" };
const GED_SCORES = { name: "GED Testing Service: scores", url: "https://ged.com/about_test/scores/" };
const GED_FREE = { name: "GED Testing Service: free sample tests (English and Spanish)", url: "https://ged.com/study/free_online_ged_test/" };
const GED_READY = { name: "GED Ready, the official practice test", url: "https://www.ged.com/study/ged-ready.html" };
const HISET = { name: "HiSET, another high school equivalency test (official site)", url: "https://hiset.org/" };
const USA_BRANCHES = { name: "USAGov: Branches of the U.S. government", url: "https://www.usa.gov/branches-of-government" };
const ARCHIVES_CONST = { name: "National Archives: The Constitution of the United States (transcript)", url: "https://www.archives.gov/founding-docs/constitution-transcript" };
const ARCHIVES_BOR = { name: "National Archives: The Bill of Rights (transcript)", url: "https://www.archives.gov/founding-docs/bill-of-rights-transcript" };

module.exports = {
  id: "ged-social-studies-ig",
  lang: "ig",
  translationOf: "ged-social-studies",
  category: "Workforce Development",
  name: "Nkwadebe maka Ule GED: Social Studies (Ọmụmụ Obodo)",
  skills: "Ịgụ isi iyi mbụ na nke abụọ, Ịmata eziokwu na echiche, Ịkọwa otu gọọmentị US si arụ ọrụ, Ịchọta ihe kpatara na ihe si na ya pụta, Ịgụ maapụ, chaatị na graf, Ime atụmatụ ọmụmụ",
  outcome: "ịgụ ederede social studies, akwụkwọ akụkọ ihe mere eme, maapụ ma ọ bụ graf, ma zaa ajụjụ dị ka nke GED gbasara ya: isi okwu, echiche onye dere ya, eziokwu ma ọ bụ echiche, ihe kpatara na ihe si na ya pụta, otu gọọmentị US si arụ ọrụ, na ihe data ahụ na-egosi.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị okenye na-akwado maka ule GED Social Studies: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha mbụ (veterans), ndị ntorobịa, ndị si mba ọzọ bịa na onye ọ bụla na-alọghachi ịmụ ihe. Ged.com kwuru na ọ bụghị ule ịchekwa ihe n'isi. Ọ na-anwale otu ị si agụ ihe, echiche ihe, ma jiri graf gbasara gọọmentị, akụkọ ihe mere eme na ego.",
    "Ihe ọmụmụ a na-akwado gị maka ule ahụ. Ọ naghị enye gị asambodo GED. GED Testing Service na-ahazi ule ahụ, steeti gị na-esetakwa iwu maka ide ya. Steeti ụfọdụ na-eji ule ọzọ a na-akpọ HiSET. Lelee ged.com na ọfịs agụmakwụkwọ ndị okenye (adult education) nke steeti gị maka iwu, ụgwọ na ule nke ugbu a.",
    "Nkuzi ọ bụla na-akụzi otu nka nwere ihe atụ a rụrụ arụ, omume \"Nwalee ya ugbu a\" nwere azịza a kọwara, na obere nnwale ajụjụ abụọ. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe.",
    "Ọrụ ikpeazụ bụ mpempe akwụkwọ nyocha isi iyi ị ga-emezu n'ezigbo akwụkwọ ntọala obodo si na National Archives, gbakwunyere atụmatụ ọmụmụ GED nke gị nwere ụbọchị."
  ],
  finalTask: "Mezue mpempe akwụkwọ nyocha isi iyi otu peeji gbasara Preamble nke US Constitution (ma ọ bụ akwụkwọ ntọala ọzọ dị na archives.gov): onye dere ya na mgbe e dere ya, ma ọ bụ isi iyi mbụ ma ọ bụ nke abụọ, isi okwu ya n'otu ahịrịokwu, echiche onye dere ya, otu eziokwu na otu echiche ma ọ bụ ebumnuche, otu ihe kpatara na otu ihe si na ya pụta jikọrọ ya, na ngalaba gọọmentị ọ metụtara na ihe kpatara ya. Tinye atụmatụ ọmụmụ GED gị nwere ụbọchị n'ala ya.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye na-akwado maka ule GED Social Studies: ndị na-achọ ọrụ, ndị na-alọta ụlọ site n'ụlọ mkpọrọ, ndị agha mbụ, ndị ntorobịa hapụrụ ụlọ akwụkwọ, ndị si mba ọzọ bịa (ụfọdụ na-akwadokwa maka ịbụ nwa amaala) na ndị okenye na-alọghachi ịmụ ihe mgbe ọtụtụ afọ gachara.",
    startingPoint: "Ha nwere ike ịgụ ederede kwa ụbọchị na chaatị dị mfe. Ọtụtụ echetaghị ihe ukwuu gbasara akụkọ ihe mere eme US ma ọ bụ civics site n'ụlọ akwụkwọ, ma chee na ule ahụ bụ ịchekwa ụbọchị n'isi. Ụfọdụ ka na-amụ asụsụ bekee.",
    gap: "Ule ahụ na-arịọ ndị na-amụ ihe ka ha gụọ isi iyi, hụ echiche na ihe akaebe, kọwaa otu gọọmentị si arụ ọrụ, ma gụọ graf na maapụ. Nka ndị a na-enyekwara ndị mmadụ aka ịgbaso akụkọ ụwa, ịtụ vootu ebe ha ruru eru, ịghọta ikike ha na ime mkpebi gbasara ego.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akọwa akwụkwọ ochie n'ahịrị n'ahịrị",
      "Ngwaọrụ: ekwentị, kọmputa ọba akwụkwọ, ma ọ bụ akwụkwọ na mkpịsị ode",
      "Oge: nkuzi nkeji 4 ruo 6 nke dabara n'etiti ọrụ, oge ịhụ ndị ọrụ na ezinụlọ",
      "A na-akụzi isiokwu ndọrọ ndọrọ ọchịchị n'enweghị akụkụ: otu ihe si arụ ọrụ na otu esi ekpe ikpe ihe akaebe, ọ bụghị akụkụ a ga-eso",
      "Iwu ule, ụgwọ na ule steeti na-eji (GED ma ọ bụ HiSET) na-agbanwe; ndị na-amụ ihe na-elele ged.com na steeti ha"
    ],
    prerequisites: "Ọ dịghị. Ihe ọmụmụ GED language arts na-enyere aka n'ịgụ ihe maka isi okwu na ikpe ikpe ihe akaebe."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Site n'iji weebụsaịtị GED gọọmentị", action: "ịkpọ aha akụkụ, ụdị ajụjụ, oge na ngwa nke ule GED Social Studies ma dee atụmatụ ọmụmụ nwere ụbọchị", standard: "ma kpọọ aha mpaghara nka atọ ahụ, na opekata mpe otu ụbọchị ọmụmụ kwa izu ruo ụbọchị ule" },
    { id: "O2", condition: "Mgbe e nyere gị isi iyi mbụ ma ọ bụ nke abụọ", action: "ịmata isi okwu, echiche onye dere ya, na okwu ndị bụ eziokwu na ndị bụ echiche", standard: "ma gosi okwu ndị na-egosi azịza ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị obere ọnọdụ civics", action: "ịkọwa ngalaba gọọmentị na-eme ihe na otu checks and balances ma ọ bụ ikike nke Constitution si metụta ya", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O4", condition: "Mgbe e nyere gị ihe mere n'akụkọ ihe mere eme ma ọ bụ arụmụka", action: "ịmata ihe kpatara, ihe si na ya pụta, na ihe akaebe na-akwado inference", standard: "ma kpọọ aha ihe akaebe ahụ site n'isi iyi ahụ" },
    { id: "O5", condition: "Mgbe e nyere gị maapụ, chaatị ma ọ bụ graf gbasara akụkọ ihe mere eme, akụnụba ma ọ bụ ọdịdị ala", action: "ịgụ ọnụ ọgụgụ, ịkọwa ụzọ ọ na-aga, na ịhọrọ nkwubi okwu data ahụ na-akwado", standard: "n'etinyeghị eziokwu ndị a na-egosighị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịgụ isi iyi na otu gọọmentị si arụ ọrụ",
      lessons: [
        {
          title: "Otu ule GED Social Studies si arụ ọrụ",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kpọọ aha akụkụ na ngwa nke ule GED Social Studies ma dee atụmatụ ọmụmụ nwere ụbọchị.",
          text: [
            "GED nwere ule anọ: Math, Reasoning Through Language Arts, Science na Social Studies. Ị nwere ike ide ha otu n'otu. GED Testing Service na-eme ule ahụ. Steeti ụfọdụ na-eji ule ọzọ kwesịrị ụlọ akwụkwọ sekọndrị (high school equivalency), HiSET, ya mere lelee ule steeti gị na-eji.",
            "Na ged.com, e dere na ule Social Studies bụ nkeji 70 n'enweghị ezumike. Ọ na-agụnye mpaghara nka atọ: ịgụ ihe maka ịghọta ya na social studies, inyocha ihe mere n'akụkọ ihe mere eme na arụmụka, na iji ọnụ ọgụgụ na graf na social studies. Ajụjụ bụ multiple choice (ịhọrọ otu), fill in the blank (mejupụta oghere), drag and drop (dọkpụrụ tinye), select an area (họrọ otu ebe) na drop-down.",
            "A na-enye gị calculator dị n'ihuenyo na mpempe ntụaka calculator, ged.com kwukwara na ị nwere ike iweta calculator TI-30XS nke gị n'ebe ule. Ged.com kwuru na ọ bụghị ule ịchekwa ihe n'isi: ị na-eji ozi e nyere gị wee mee nkwubi okwu.",
            "Ged.com depụtara akara ngafe 145 maka isiokwu ọ bụla. Oge na iwu nwere ike ịgbanwe, ya mere lelee ged.com tupu i debe oge. Ged.com nwere ule nlele n'efu na ule omume gọọmentị, GED Ready."
          ],
          steps: ["Gaa na ged.com ma gụọ peeji ule Social Studies.", "Dee oge ya, mpaghara nka atọ ahụ na ngwa a na-enye gị.", "Dee ule nlele Social Studies n'efu ka ị hụ ebe ị nọ.", "Họrọ izu ị chọrọ ide ule.", "Dee opekata mpe otu ụbọchị ọmụmụ kwa izu, ya na nka ị ga-amụ."],
          words: [["GED", "ule kwesịrị ụlọ akwụkwọ sekọndrị; ịgafe isiokwu anọ niile na-enye asambodo nke ọtụtụ ndị were mmadụ n'ọrụ na kọleji na-anabata dị ka diploma."], ["HiSET", "ule ọzọ kwesịrị ụlọ akwụkwọ sekọndrị nke steeti ụfọdụ na-eji."], ["Civics", "ọmụmụ gọọmentị na ikike na ọrụ ụmụ amaala."], ["Economics (akụnụba)", "ọmụmụ otu ndị mmadụ si emepụta, zụta, ree ma jiri ngwongwo na ego."]],
          slides: [
            { title: "Ule Social Studies (lelee ged.com)", bullets: ["Nkeji 70, enweghị ezumike", "Multiple choice na ụdị ajụjụ ndị ọzọ", "Akara ngafe e depụtara: 145"] },
            { title: "Mpaghara nka atọ", bullets: ["Ịgụ ihe maka ịghọta ya na social studies", "Inyocha ihe mere n'akụkọ ihe mere eme na arụmụka", "Iji ọnụ ọgụgụ na graf"] },
            { title: "Ọ bụghị ule ịchekwa ihe n'isi", bullets: ["Jiri ozi e nyere gị", "Mee nkwubi okwu site na ya", "Calculator dị n'ihuenyo na mpempe ntụaka"] },
            { title: "Mee atụmatụ", bullets: ["Buru ụzọ dee ule nlele n'efu", "Họrọ izu ị chọrọ ide ule", "Mụọ ntakịrị, ọtụtụ ụbọchị n'izu"] }
          ],
          sources: [GED_SUBJECTS, GED_SS, GED_SCORES, GED_FREE, GED_READY, HISET],
          tryIt: "Meghee ged.com ma dee ule nlele Social Studies n'efu (ma ọ bụ gụọ peeji Social Studies ma ọ bụrụ na ịnweghị ike ide ya ugbu a). Dee atụmatụ ọmụmụ gị: izu ị chọrọ ide ule na otu ụbọchị kwa izu ya na nka ị ga-amụ: ịgụ isi iyi, gọọmentị, akụkọ ihe mere eme, ma ọ bụ graf. Debe ya maka ọrụ ikpeazụ.",
          youCanNow: "ịkpọ aha akụkụ na ngwa nke ule GED Social Studies ma soro atụmatụ ọmụmụ nwere ụbọchị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ged.com kwuru gbasara ule Social Studies?", options: ["Ọ bụkarị ịchekwa ụbọchị n'isi", "Ọ bụghị ule ịchekwa ihe n'isi", "O nweghị graf ọ bụla", "Ọ bụ naanị gbasara mba ndị ọzọ"], answer: 1, why: "Ged.com kwuru na ọ bụghị ule ịchekwa ihe n'isi; ị na-eji ozi e nyere gị echiche ihe." },
            { objective: "O1", q: "Kedu nke bụ otu n'ime mpaghara nka atọ dị n'ule ahụ?", options: ["Ịsụpe isi obodo steeti", "Ịse ọkọlọtọ", "Iji ọnụ ọgụgụ na graf na social studies", "Ọsọ ịpị ihe"], answer: 2, why: "Ged.com depụtara ịgụ ihe maka ịghọta ya, ihe mere n'akụkọ ihe mere eme na arụmụka, na ọnụ ọgụgụ na graf." }
          ]
        },
        {
          title: "Isi iyi, echiche onye dere ya, eziokwu na echiche",
          objectives: ["O2"],
          minutes: 6,
          goal: "Mata isi okwu, echiche onye dere ya, eziokwu na echiche dị n'isi iyi.",
          text: [
            "Isi iyi mbụ (primary source) bụ ihe onye nọ ebe ahụ n'oge ahụ mere: akwụkwọ ozi, okwu a kwuru n'ihu ọha, iwu, foto, akwụkwọ ndetu kwa ụbọchị. Isi iyi nke abụọ (secondary source) bụ ihe onye na-amụ ihe ahụ mere mere emesịa, dị ka akwụkwọ ọgụgụ ma ọ bụ nyocha akụkọ ụwa. Ha abụọ bara uru; isi iyi mbụ na-egosi otu ndị mmadụ si hụ ihe n'oge ahụ.",
            "Echiche onye dere ya (point of view) bụ otu onye dere ya si ahụ isiokwu ahụ, dabere n'onye ọ bụ na ihe ọ chọrọ. Jụọ: onye dere nke a, mgbe ole, gịnị kpatara? Onye nwe ụlọ ọrụ mmepụta na onye ọrụ n'ụlọ ọrụ ahụ n'afọ 1900 nwere ike ịkọwa otu ngagharị iwe ndị ọrụ (strike) n'ụzọ dị iche nke ukwuu.",
            "Eziokwu (fact) bụ ihe a pụrụ ilele ma gosi na ọ bụ eziokwu ma ọ bụ ụgha: \"E kwadoro 19th Amendment n'afọ 1920.\" Echiche (opinion) bụ ihe mmadụ kwenyere ma ọ bụ mmetụta: \"Ọ bụ mgbanwe kacha mkpa n'akụkọ ihe mere eme anyị.\" Okwu dị ka kacha mma, kacha njọ, kwesịrị, dị mkpa na ekwenyere m na-egosikarị echiche.",
            "Ihe atụ a rụrụ arụ. Mgbasa ozi akwụkwọ akụkọ n'afọ 1910: \"Igwe ọhụrụ anyị na-emepụta uwe elu 500 kwa ụbọchị. Ezinụlọ ọ bụla nke oge a kwesịrị ịzụta uwe elu anyị!\" Eziokwu: uwe elu 500 kwa ụbọchị (a pụrụ ilele ya). Echiche: ezinụlọ ọ bụla kwesịrị ịzụta ha. Echiche onye dere ya: azụmahịa na-ere ngwongwo ya."
          ],
          steps: ["Jụọ onye mere isi iyi ahụ, mgbe ole na gịnị kpatara.", "Kpebie: mbụ (e mere ya n'oge ahụ) ma ọ bụ nke abụọ (e mere ya emesịa).", "Kwuo isi okwu ya n'otu ahịrịokwu.", "Kaa okwu ọ bụla akara eziokwu (a pụrụ ilele ya) ma ọ bụ echiche (nkwenye ma ọ bụ ikpe).", "Kọwaa echiche onye dere ya na ihe ọ chọrọ ka onye na-agụ ya mee ma ọ bụ chee."],
          words: [["Isi iyi mbụ (primary source)", "ihe e mere n'oge ihe mere, site n'aka onye nọ ebe ahụ."], ["Isi iyi nke abụọ (secondary source)", "ihe e mere emesịa site n'aka onye na-amụ ihe ahụ mere."], ["Echiche onye dere ya (point of view)", "otu onye dere ya si ahụ isiokwu, dabere n'onye ọ bụ na ihe ọ chọrọ."], ["Eziokwu (fact)", "okwu a pụrụ ilele ma gosi."], ["Echiche (opinion)", "nkwenye, mmetụta ma ọ bụ ikpe mmadụ."]],
          slides: [
            { title: "Mbụ ka ọ bụ nke abụọ?", bullets: ["Mbụ: e mere ya n'oge ahụ, site n'aka onye nọ ebe ahụ", "Nke abụọ: e mere ya emesịa, site n'aka onye na-amụ ya"] },
            { title: "Echiche onye dere ya", bullets: ["Onye dere ya?", "Mgbe ole?", "Gịnị kpatara, gịnị ka ọ chọrọ?"] },
            { title: "Eziokwu ka ọ bụ echiche?", bullets: ["Eziokwu: a pụrụ ilele ya", "Echiche: nkwenye ma ọ bụ ikpe", "Okwu ngosi: kacha mma, kacha njọ, kwesịrị, ekwenyere m"] }
          ],
          tryIt: "Omume: akwụkwọ ozi onye ọrụ ugbo dere n'afọ 1935: \"Oké ifufe ájá liri ubi anyị ugboro atọ n'oge opupu ihe ubi a. Gọọmentị kwesịrị inyere ndị ọrụ ugbo dị ka anyị aka tupu oge agafee.\" 1) Mbụ ka ọ bụ nke abụọ? 2) Otu eziokwu. 3) Otu echiche. 4) Echiche onye dere ya? Azịza: 1) Mbụ: onye nọ ebe ahụ dere ya n'oge ahụ. 2) Oké ifufe ájá liri ubi ahụ ugboro atọ n'oge opupu ihe ubi ahụ. 3) Gọọmentị kwesịrị inyere ndị ọrụ ugbo aka. 4) Onye ọrụ ugbo nọ na nsogbu na-arịọ enyemaka.",
          youCanNow: "ịmata ọdịiche dị n'etiti isi iyi mbụ na nke abụọ, ịkọwa echiche onye dere ya, na ikewa eziokwu na echiche.",
          quickCheck: [
            { objective: "O2", q: "Kedu nke bụ isi iyi mbụ gbasara Agha Ụwa nke Abụọ?", options: ["Isi akwụkwọ ọgụgụ e dere n'afọ 2020", "Nchịkọta weebụsaịtị e dere n'afọ gara aga", "Ihe nkiri e mere n'afọ 2015", "Akwụkwọ ozi onye agha degaara ndị ụlọ ya n'afọ 1944"], answer: 3, why: "Onye nọ ebe ahụ mere ya n'oge ahụ." },
            { objective: "O2", q: "Kedu okwu bụ echiche?", options: ["Congress gafere iwu ahụ n'afọ 1964.", "Obodo ahụ nwere ndị bi na ya 40,000.", "Nke ahụ bụ iwu kacha mma Congress gafere.", "Akwa mmiri ahụ meghere n'afọ 1937."], answer: 2, why: "\"Kacha mma\" bụ ikpe a na-apụghị igosi." }
          ]
        },
        {
          title: "Otu gọọmentị US si arụ ọrụ",
          objectives: ["O3"],
          minutes: 6,
          goal: "Kọwaa ngalaba gọọmentị na-eme ihe n'otu ọnọdụ na otu checks and balances si metụta ya.",
          text: [
            "US Constitution kewara gọọmentị etiti (federal) ụzọ atọ ka mmadụ ma ọ bụ otu ọ bụla ghara inwe ike karịrị akarị. Ngalaba omebe iwu (legislative) bụ Congress (Senate na House of Representatives); ọ na-eme iwu. Ngalaba nchịkwa (executive) bụ onye isi ala (president), osote onye isi ala na cabinet; ọ na-emejuputa iwu. Ngalaba ikpe (judicial) bụ Supreme Court na ụlọikpe federal ndị ọzọ; ha na-akọwa iwu ma kpebie ma iwu ọ na-emegide Constitution.",
            "Checks and balances (nlekọta na nhazi ike) na-ekwe ka ngalaba ọ bụla gbochie ndị ọzọ. Onye isi ala nwere ike ịjụ (veto) bill Congress gafere. Senate na-akwado ma ọ bụ jụ ndị onye isi ala họpụtara, dị ka ndị ọka ikpe federal. Supreme Court nwere ike ịkagbu iwu ọ hụrụ na ọ na-emegide Constitution. Congress nwere ike, n'ọnọdụ siri ike, iwepụ onye isi ala n'ọchịchị.",
            "Bill of Rights bụ mgbanwe (amendments) iri mbụ nke Constitution. Ọ na-echebe ikike dị ka nnwere onwe ikwu okwu, okpukpe, ndị nta akụkọ na nzukọ (First Amendment), na ikike ndị a na-ebo ebubo mpụ, dị ka ikpe ziri ezi na ngwa ngwa. A na-ekekọrịtakwa ike n'etiti gọọmentị federal na steeti; a na-akpọ nke a federalism.",
            "Ihe atụ a rụrụ arụ. \"Congress gafere bill. Onye isi ala jụrụ ya (veto).\" Kedu check nke a bụ? Ngalaba nchịkwa na-enyocha ngalaba omebe iwu."
          ],
          steps: ["Chọta onye na-eme ihe: Congress, onye isi ala ma ọ bụ ụlọikpe.", "Kpọọ aha ngalaba ahụ: omebe iwu, nchịkwa ma ọ bụ ikpe.", "Jụọ ike a na-eji: ime iwu, imejuputa iwu ma ọ bụ ịkọwa iwu.", "Ọ bụrụ na otu ngalaba na-egbochi ọzọ, kpọọ aha check ahụ.", "Ọ bụrụ na ikike mmadụ metụtara ya, chọọ ikike ahụ na Bill of Rights."],
          words: [["Constitution", "iwu kacha elu na United States; ọ na-ehiwe gọọmentị."], ["Ngalaba omebe iwu (legislative)", "Congress; ọ na-eme iwu."], ["Ngalaba nchịkwa (executive)", "onye isi ala, osote onye isi ala na cabinet; ọ na-emejuputa iwu."], ["Ngalaba ikpe (judicial)", "ụlọikpe; ha na-akọwa iwu."], ["Veto", "mgbe onye isi ala jụrụ bill Congress gafere."], ["Amendment", "mgbanwe ma ọ bụ mgbakwunye na Constitution."]],
          slides: [
            { title: "Ngalaba atọ", bullets: ["Omebe iwu (Congress): na-eme iwu", "Nchịkwa (onye isi ala): na-emejuputa iwu", "Ikpe (ụlọikpe): na-akọwa iwu"] },
            { title: "Checks and balances", bullets: ["Onye isi ala nwere ike ịjụ (veto) bill", "Senate na-akwado ma ọ bụ jụ ndị a họpụtara", "Supreme Court nwere ike ịkagbu iwu megidere Constitution"] },
            { title: "Bill of Rights", bullets: ["Amendments iri mbụ", "Okwu, okpukpe, ndị nta akụkọ, nzukọ", "Ikike ndị a na-ebo ebubo mpụ"] },
            { title: "Federalism", bullets: ["Ike a na-ekekọrịta n'etiti mba na steeti"] }
          ],
          sources: [USA_BRANCHES, ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Omume: kpọọ aha ngalaba ma ọ bụ ikike. 1) Senate na-atụ vootu na onye onye isi ala họpụtara ka ọ bụrụ ọka ikpe federal. 2) Supreme Court kpebiri na iwu na-emebi Constitution. 3) Akwụkwọ akụkọ bipụtara akụkọ na-akatọ onye isi obodo (mayor). 4) Onye isi ala bịanyere aka na bill ka ọ bụrụ iwu. Azịza: 1) Omebe iwu na-enyocha nchịkwa. 2) Ikpe na-enyocha omebe iwu. 3) Nnwere onwe ndị nta akụkọ, First Amendment. 4) Nchịkwa (na-arụ ọrụ ya n'ime iwu).",
          youCanNow: "ịkpọ aha ngalaba atọ ahụ, ịkọwa checks and balances n'otu ọnọdụ, na ijikọ ọnọdụ na Bill of Rights.",
          quickCheck: [
            { objective: "O3", q: "Kedu ngalaba na-eme iwu federal?", options: ["Ngalaba omebe iwu (Congress)", "Ngalaba ikpe", "Ngalaba nchịkwa", "Naanị steeti"], answer: 0, why: "Congress, ngalaba omebe iwu, na-eme iwu." },
            { objective: "O3", q: "Supreme Court kpebiri na iwu na-emegide Constitution. Gịnị ka nke a bụ ihe atụ ya?", options: ["Federalism", "Veto", "Check ngalaba ikpe na-eme na ngalaba omebe iwu", "Amendment"], answer: 2, why: "Ụlọikpe nwere ike ịkagbu iwu na-emegide Constitution." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịgụ isi iyi na otu gọọmentị si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Ebee ka i kwesịrị ilele oge, ụgwọ na iwu ule GED nke ugbu a?", options: ["Ihe e dere na social media", "Ged.com na ọfịs agụmakwụkwọ ndị okenye nke steeti gị", "Akwụkwọ ọgụgụ ochie", "Ihe enyi gị chetara"], answer: 1, why: "Iwu na ụgwọ na-agbanwe; isi iyi gọọmentị nwere nke ugbu a." },
          { objective: "O2", q: "Kedu nke bụ isi iyi nke abụọ?", options: ["Okwu e kwuru n'afọ 1963", "Foto e sere n'oge oké ifufe ájá n'afọ 1930s", "Akwụkwọ ozi e dere n'afọ 1776", "Akwụkwọ ọgụgụ akụkọ ihe mere eme e dere n'afọ 2015"], answer: 3, why: "Ndị na-amụ ihe ndị ahụ mere na-ede akwụkwọ ọgụgụ emesịa." },
          { objective: "O2", q: "Mgbasa ozi otu ụlọ ọrụ n'afọ 1912 kwuru na ụgbọ oloko ya bụ \"ndị kacha mma n'ala a.\" Gịnị ka nke a bụ?", options: ["Echiche si n'echiche azụmahịa", "Eziokwu", "Iwu", "Isi iyi nke abụọ"], answer: 0, why: "\"Kacha mma\" bụ ikpe, ụlọ ọrụ ahụ chọkwara ire tiketi." },
          { objective: "O3", q: "Onye isi ala jụrụ (veto) bill. Kedu ngalaba a na-enyocha?", options: ["Ngalaba ikpe", "Ngalaba nchịkwa", "Ngalaba omebe iwu", "Steeti"], answer: 2, why: "Veto na-ekwe ka nchịkwa nyochaa Congress, ngalaba omebe iwu." },
          { objective: "O3", q: "Gịnị bụ Bill of Rights?", options: ["Mmefu ego onye isi ala", "Amendments iri mbụ nke Constitution", "Ndepụta iwu steeti", "Mkpebi Supreme Court"], answer: 1, why: "Bill of Rights bụ amendments iri mbụ." }
        ]
      }
    },
    {
      name: "Isi 2: Akụkọ ihe mere eme, akụnụba na graf",
      lessons: [
        {
          title: "Ihe kpatara, ihe si na ya pụta na ihe akaebe n'akụkọ ihe mere eme",
          objectives: ["O4"],
          minutes: 5,
          goal: "Mata ihe kpatara na ihe si na ya pụta n'ihe mere n'akụkọ ihe mere eme, na ihe akaebe na-akwado inference.",
          text: [
            "Ajụjụ akụkọ ihe mere eme na-ajụkarị ihe mere otu ihe ji mee (ihe kpatara ya, cause) na ihe mere n'ihi ya (ihe si na ya pụta, effect). Okwu ngosi: n'ihi na, ya mere, n'ihi nke a, dugara na, ya bụ, n'ihi.",
            "Ihe atụ a rụrụ arụ. \"Na njedebe afọ 1800s, ụlọ ọrụ mmepụta n'obodo mepere emepe nyere ọtụtụ ọrụ ọhụrụ. N'ihi nke a, ọtụtụ nde mmadụ si n'ugbo kwaga n'obodo mepere emepe. Ọnụ ọgụgụ ndị bi n'obodo ahụ toro ngwa ngwa, ebe obibi juru oke wee bụrụ nsogbu.\" Ihe kpatara: ọrụ ụlọ ọrụ mmepụta n'obodo. Ihe si na ya pụta: ndị mmadụ kwagara n'obodo. Ihe si na ya pụta emesịa: ebe obibi juru oke. Otu ihe kpatara nwere ike iduga n'usoro ihe ndị si na ya pụta.",
            "Inference bụ nkwubi okwu ihe akaebe na-akwado. Ajụjụ GED nwere ike ịjụ okwu dị n'isi iyi na-akwado inference. Họrọ okwu na-enye ihe akaebe, ọ bụghị naanị nke gbasara otu isiokwu ahụ.",
            "Kpachara anya: ihe abụọ imee n'otu oge apụtaghị mgbe niile na otu kpatara nke ọzọ. Chọọ ka isi iyi ahụ kwuo ma ọ bụ gosi njikọ ahụ."
          ],
          steps: ["Chọta ihe mere ajụjụ ahụ na-ajụ.", "Chọọ okwu ngosi: n'ihi na, ya mere, n'ihi nke a, dugara na.", "Kpọọ aha ihe kpatara (gịnị mere) na ihe si na ya pụta (ihe mere ọzọ).", "Maka inference, họrọ okwu na-enye ihe akaebe maka ya.", "Lelee na isi iyi ahụ jikọrọ ha abụọ n'ezie; echela n'onwe gị."],
          words: [["Ihe kpatara (cause)", "ihe mere otu ihe ji mee."], ["Ihe si na ya pụta (effect)", "ihe mere n'ihi ihe kpatara ya."], ["Inference", "nkwubi okwu ihe akaebe na-akwado."], ["Industrialization", "uto ụlọ ọrụ mmepụta na igwe na-emepụta ngwongwo."]],
          slides: [
            { title: "Ihe kpatara na ihe si na ya pụta", bullets: ["Ihe kpatara: ihe mere o ji mee", "Ihe si na ya pụta: ihe mere ọzọ", "Okwu ngosi: n'ihi na, n'ihi nke a, dugara na"] },
            { title: "Usoro ihe ndị si na ya pụta", bullets: ["Ọrụ ụlọ ọrụ mmepụta n'obodo", "Ndị mmadụ si n'ugbo kwaga n'obodo", "Ebe obibi juru oke n'obodo"] },
            { title: "Ihe akaebe maka inference", bullets: ["Họrọ okwu na-egosi ya", "Otu isiokwu abụghị otu ihe akaebe", "N'otu oge apụtaghị na otu kpatara nke ọzọ"] }
          ],
          tryIt: "Omume: \"Dust Bowl nke afọ 1930s bibiri ihe ọkụkụ na Great Plains. Ọtụtụ ezinụlọ ndị ọrụ ugbo tụfuru ala ha ma kwaga ọdịda anyanwụ ịchọ ọrụ.\" 1) Ihe kpatara? 2) Ihe si na ya pụta? 3) Kedu okwu kacha akwado inference \"Dust Bowl gbanwere ebe ndị mmadụ bi\": (a) \"Dust Bowl bibiri ihe ọkụkụ\" ma ọ bụ (b) \"Ọtụtụ ezinụlọ ndị ọrụ ugbo kwagara ọdịda anyanwụ\"? Azịza: 1) Oké ifufe ájá bibiri ihe ọkụkụ. 2) Ezinụlọ tụfuru ala ma kwaga ọdịda anyanwụ. 3) (b): ọ na-egosi ndị mmadụ na-akwaga.",
          youCanNow: "ịchọta ihe kpatara na ihe si na ya pụta n'akụkọ ihe mere eme ma họrọ ihe akaebe na-akwado inference.",
          quickCheck: [
            { objective: "O4", q: "\"Ọnụ ahịa mmanụ ụgbọala rịgoro nke ukwuu, ya mere ọtụtụ mmadụ banyere bọs.\" Gịnị bụ ihe si na ya pụta?", options: ["Ọnụ ahịa mmanụ ụgbọala rịgoro", "Ọtụtụ mmadụ banyere bọs", "Bọs dara ọnụ", "Ụgbọala buru ibu karịa"], answer: 1, why: "Ịbanye bọs bụ ihe mere n'ihi na ọnụ ahịa mmanụ ụgbọala rịgoro." },
            { objective: "O4", q: "Kedu okwu kacha akwado inference na okporo ụzọ ọhụrụ nyeere azụmahịa obodo aka?", options: ["\"Okporo ụzọ ahụ nwere ụzọ anọ.\"", "\"Okporo ụzọ ahụ meghere n'afọ 1960.\"", "\"E ji concrete arụ okporo ụzọ.\"", "\"Ihe ụlọ ahịa obodo ahụ rere mụbara okpukpu abụọ n'ime afọ ise mgbe okporo ụzọ ahụ meghere.\""], answer: 3, why: "Ọ na-enye ihe akaebe nke uto azụmahịa jikọrọ okporo ụzọ ahụ." }
          ]
        },
        {
          title: "Akụnụba na graf",
          objectives: ["O5"],
          minutes: 6,
          goal: "Gụọ chaatị ma ọ bụ maapụ, kọwaa ụzọ ọ na-aga ma họrọ nkwubi okwu data ahụ na-akwado.",
          text: [
            "Supply (ihe dị maka ire) bụ ole ihe dị maka ire. Demand (ihe a chọrọ) bụ ole ndị mmadụ chọrọ ịzụta. Mgbe demand rịgoro ma supply ka dị otu ahụ, ọnụ ahịa na-arịgokarị. Mgbe supply rịgoro ma demand ka dị otu ahụ, ọnụ ahịa na-adakarị. Ihe atụ: mgbe oyi siri ike mebiri ihe ọkụkụ oroma, supply oroma na-ada, ọnụ ahịa ya na-arịgo.",
            "Graf: buru ụzọ gụọ aha ya, labels na units. Tebụl omume (e mepụtara ya): ọnụ ọgụgụ enweghị ọrụ (unemployment rate) n'otu obodo bụ 8% n'afọ 2020, 6% n'afọ 2021, 5% n'afọ 2022 na 4% n'afọ 2023. Ụzọ ọ na-aga: na-ada kwa afọ. Nkwubi okwu a kwadoro: n'afọ 2023, akụkụ pere mpe nke ndị na-achọ ọrụ enweghị ọrụ karịa n'afọ 2020. A kwadoghị: ihe mere o ji daa, n'ihi na tebụl ahụ ekwughị.",
            "Maapụ: gụọ aha ya, legend (igodo) na compass rose. Legend na-agwa gị ihe agba ma ọ bụ akara pụtara. Maapụ mmiri ozuzo nwere ike iji agba gbara ọchịchịrị karịa maka mmiri ozuzo karịrị. Jiri scale chọpụta ihe dị ka anya dị n'etiti ebe abụọ.",
            "Mgbanwe pasentị na-adịkarị: site na 8% ruo 4% bụ ọdịda nke percentage points 4. Ị nwere ike iji calculator dị n'ihuenyo maka mgbakọ ahụ."
          ],
          steps: ["Gụọ aha ya, labels, units ma ọ bụ legend maapụ.", "Chọta ọnụ ọgụgụ ajụjụ ahụ na-ajụ.", "Kọwaa ụzọ ọ na-aga: na-arịgo, na-ada ma ọ bụ enweghị usoro doro anya.", "Họrọ nkwubi okwu na-anọ n'ime data ahụ.", "Maka ọnụ ahịa, jụọ: supply ka ọ bụ demand gbanwere?"],
          words: [["Supply", "ole ngwongwo ma ọ bụ ọrụ dị maka ire."], ["Demand", "ole ndị mmadụ chọrọ ịzụta ya."], ["Unemployment rate", "akụkụ ndị na-achọ ọrụ na-enweghị ọrụ."], ["Legend", "igodo dị na maapụ ma ọ bụ chaatị na-agwa ihe agba ma ọ bụ akara pụtara."], ["Percentage point", "ọdịiche dị mfe n'etiti pasentị abụọ, dị ka 8% ruo 4% bụ points 4."]],
          slides: [
            { title: "Supply na demand", bullets: ["Demand rịgoro, supply dị otu: ọnụ ahịa na-arịgokarị", "Supply rịgoro, demand dị otu: ọnụ ahịa na-adakarị"] },
            { title: "Ịgụ graf", bullets: ["Buru ụzọ gụọ aha, labels, units", "Chọta ọnụ ọgụgụ ahụ", "Kọwaa ụzọ ọ na-aga"] },
            { title: "Ịgụ maapụ", bullets: ["Aha na legend (igodo)", "Compass rose maka ụzọ", "Scale maka anya dị n'etiti ebe"] },
            { title: "Nọrọ n'ime data ahụ", bullets: ["Chaatị na-egosi ihe mere, ọ bụghị mgbe niile ihe kpatara ya", "Enweghị nkwubi okwu gbasara ihe a na-egosighị"] }
          ],
          tryIt: "Omume (data e mepụtara): chaatị bar na-egosi ụgwọ ụlọ (rent) kwa ọnwa n'otu obodo: 2019: $1,000; 2021: $1,150; 2023: $1,400. 1) Ụgwọ ụlọ n'afọ 2021? 2) Ụzọ ọ na-aga? 3) Ole ka ụgwọ ụlọ rịgoro site n'afọ 2019 ruo 2023? 4) Kedu nkwubi okwu a kwadoro: (a) ụgwọ ụlọ rịgoro n'oge a, ma ọ bụ (b) ụgwọ ụlọ rịgoro n'ihi ọrụ ọhụrụ? Azịza: 1) $1,150. 2) Na-arịgo. 3) $400. 4) (a); chaatị ahụ egosighị ihe kpatara ya.",
          youCanNow: "iji supply na demand kọwaa mgbanwe ọnụ ahịa, ma gụọ chaatị na maapụ wee họrọ nkwubi okwu a kwadoro.",
          quickCheck: [
            { objective: "O5", q: "Oké ifufe mebiri ọtụtụ ụlọ ọrụ na-egbu osisi, ya mere osisi (lumber) dị maka ire belatara ebe ndị na-ewu ụlọ ka chọrọ ya. Gịnị na-emekarị ọnụ ahịa osisi?", options: ["Ọ na-arịgo", "Ọ na-ada", "Ọ na-anọ otu ahụ", "Osisi aghọọ n'efu"], answer: 0, why: "Supply dara ebe demand nọ otu ahụ, ya mere ọnụ ahịa na-arịgokarị." },
            { objective: "O5", q: "Na maapụ, gịnị na-agwa gị ihe agba ọ bụla pụtara?", options: ["Compass rose", "Aha ya", "Legend (igodo)", "Scale"], answer: 2, why: "Legend na-akọwa agba na akara." }
          ]
        },
        {
          title: "Ijikọ ya ọnụ: inyocha akwụkwọ ntọala obodo",
          objectives: ["O2", "O3", "O4"],
          minutes: 6,
          goal: "Mezue mpempe akwụkwọ nyocha isi iyi gbasara akwụkwọ ntọala obodo.",
          text: [
            "Ajụjụ GED na-enyekarị gị obere akụkụ nke akwụkwọ ochie ma jụọ gbasara isi okwu ya, ebumnuche ya ma ọ bụ otu o si jikọta na gọọmentị taa. Preamble, ahịrịokwu mmeghe nke Constitution, dị mma maka omume. Gụọ ya na weebụsaịtị National Archives.",
            "Preamble na-amalite \"We the People of the United States\" (Anyị bụ Ndị United States) ma depụta ebumnuche: ime njikọ zuru oke karịa, iguzobe ikpe ziri ezi, ime ka udo dịrị n'ụlọ (domestic tranquility), ichebe obodo ọnụ (common defense), ịkwalite ọdịmma mmadụ niile (general welfare) na ichekwa ngọzi nke nnwere onwe.",
            "Nyocha a rụrụ arụ. Onye na mgbe: ndị nnọchiteanya na Constitutional Convention, 1787. Ụdị: isi iyi mbụ. Isi okwu: ndị mmadụ hiwere gọọmentị iji mezuo ebumnuche ha nwere ọnụ. Echiche onye dere ya: ndị isi chọrọ gọọmentị mba siri ike karịa nke ha nwere na mbụ. Ihe kpatara na ihe si na ya pụta: gọọmentị mbụ n'okpuru Articles of Confederation adịghị ike, nke a dugara n'ide Constitution ọhụrụ. Ngalaba: Preamble na-ewebata Constitution niile, nke na-ehiwe ngalaba atọ niile.",
            "Mpempe akwụkwọ gị achọghị azịza zuru oke. Ọ chọrọ azịza ị nwere ike ịkwado site n'igosi okwu ndị dị n'akwụkwọ ahụ."
          ],
          steps: ["Meghee ederede Constitution na archives.gov ma gụọ Preamble.", "Dee onye dere ya, mgbe e dere ya, ma ọ bụ isi iyi mbụ ma ọ bụ nke abụọ.", "Dee isi okwu ya n'otu ahịrịokwu na echiche onye dere ya.", "Dee otu eziokwu gbasara ya na otu ebumnuche ma ọ bụ echiche dị n'ime ya.", "Dee otu ihe kpatara na otu ihe si na ya pụta, na ngalaba ma ọ bụ ikike o jikọrọ.", "Tinye atụmatụ ọmụmụ gị nwere ụbọchị n'ala ya."],
          words: [["Preamble", "ahịrịokwu mmeghe nke Constitution na-ekwu ebumnuche ya."], ["Articles of Confederation", "atụmatụ mbụ nke gọọmentị US, nke e ji tupu Constitution."], ["Domestic tranquility", "udo n'ụlọ (n'ime obodo)."], ["General welfare", "ọdịmma ndị mmadụ niile."]],
          slides: [
            { title: "Preamble", bullets: ["Ahịrịokwu mmeghe nke Constitution", "Na-amalite \"We the People\"", "Na-edepụta ebumnuche gọọmentị ọhụrụ ahụ"] },
            { title: "Mpempe akwụkwọ nyocha gị", bullets: ["Onye, mgbe ole, mbụ ma ọ bụ nke abụọ", "Isi okwu na echiche onye dere ya", "Otu eziokwu na otu ebumnuche ma ọ bụ echiche"] },
            { title: "Jikọọ ya", bullets: ["Otu ihe kpatara na otu ihe si na ya pụta", "Ngalaba ma ọ bụ ikike ọ metụtara", "Gosi okwu ndị na-egosi ya"] }
          ],
          sources: [ARCHIVES_CONST, ARCHIVES_BOR],
          tryIt: "Ọrụ ikpeazụ: mezue mpempe akwụkwọ nyocha isi iyi otu peeji gbasara Preamble (ma ọ bụ Bill of Rights) site na archives.gov, site n'iji nzọụkwụ ndị dị n'elu. Tinye atụmatụ ọmụmụ GED gị nwere ụbọchị n'ala ya, wee jiri rubric nke ihe ọmụmụ a tụọ akara ọrụ gị.",
          youCanNow: "inyocha akwụkwọ ntọala obodo: ụdị isi iyi ya, isi okwu ya, echiche onye dere ya, ihe kpatara na ihe si na ya pụta, na njikọ ya na otu gọọmentị si arụ ọrụ.",
          quickCheck: [
            { objective: "O2", q: "Ndị nnọchiteanya na Constitutional Convention dere Preamble n'afọ 1787. Kedu ụdị isi iyi ọ bụ?", options: ["Nke abụọ", "Nnyocha echiche ọha", "Maapụ", "Mbụ"], answer: 3, why: "Ndị dere Constitution mere ya n'oge ahụ." },
            { objective: "O4", q: "Articles of Confederation hiwere gọọmentị mba na-adịghị ike. Gịnị bụ otu ihe si na ya pụta?", options: ["Ndị isi dere Constitution ọhụrụ", "E wepụrụ Bill of Rights", "E mechiri Congress ruo mgbe ebighị ebi", "Steeti kwụsịrị ịdị"], answer: 0, why: "Adịghị ike nke Articles dugara na Constitution nke 1787." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Akụkọ ihe mere eme, akụnụba na graf",
        questions: [
          { objective: "O4", q: "\"N'ihi na ụlọ ọrụ mmepụta ahụ mechiri, ọtụtụ ndị ọrụ kwapụrụ.\" Gịnị bụ ihe kpatara?", options: ["Ndị ọrụ kwapụrụ", "Obodo ahụ toro", "Ụlọ ọrụ mmepụta ahụ mechiri", "Ụlọ ahịa ọhụrụ meghere"], answer: 2, why: "Mmechi ụlọ ọrụ mmepụta ahụ bụ ihe mere ndị ọrụ ji kwapụ." },
          { objective: "O4", q: "Ihe abụọ mere n'otu afọ. Gịnị ka ị nwere ike ikwu n'ejighị obi abụọ?", options: ["Otu kpatara nke ọzọ", "Ha mere n'otu oge; lelee isi iyi ahụ maka njikọ", "Ha abụọ bụ echiche", "Ọ dịghị nke mere"], answer: 1, why: "Imekọ ọnụ egosighị na otu kpatara nke ọzọ." },
          { objective: "O5", q: "Demand maka igwe kwụ otu ebe (bike) rịgoro ma supply nọ otu ahụ. Gịnị na-emekarị ọnụ ahịa bike?", options: ["Ọ na-ada", "Ọ na-anọ otu ahụ", "Bike aghọọ n'efu", "Ọ na-arịgo"], answer: 3, why: "Ndị na-azụ ahịa karịrị maka otu supply ahụ na-ebulikarị ọnụ ahịa elu." },
          { objective: "O5", q: "Tebụl na-egosi ọnụ ọgụgụ ndị bi n'otu obodo: 2000: 10,000; 2010: 12,000; 2020: 15,000. Kedu nkwubi okwu a kwadoro?", options: ["Ọnụ ọgụgụ ndị bi na ya toro n'afọ ndị a", "Obodo ahụ ga-enwe mmadụ 50,000 n'afọ 2030", "Ndị mmadụ kwabatara n'ihi ụlọ akwụkwọ dị mma", "Obodo ahụ tụfuru mmadụ"], answer: 0, why: "Ọnụ ọgụgụ ahụ na-arịgo kwa afọ iri; tebụl ahụ egosighị ọdịnihu ma ọ bụ ihe kpatara ya." },
          { objective: "O3", q: "Senate jụrụ onye onye isi ala họpụtara ka ọ bụrụ ọka ikpe federal. Kedu check nke a bụ?", options: ["Ngalaba ikpe na-enyocha nchịkwa", "Ngalaba omebe iwu na-enyocha nchịkwa", "Federalism", "Veto"], answer: 1, why: "Senate, akụkụ nke Congress, na-akwado ma ọ bụ jụ ndị onye isi ala họpụtara." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nkwadebe maka Ule GED: Social Studies (Ọmụmụ Obodo)",
    questions: [
      { objective: "O1", q: "Gịnị ka ihe ọmụmụ a na-emere gị?", options: ["Ọ na-enye gị asambodo GED", "Ọ na-eme gị nwa amaala US", "Ọ na-akwado gị maka ule GED Social Studies", "Ọ na-anọchi ule GED"], answer: 2, why: "Ọ na-akwado gị; GED Testing Service na-ahazi ule ahụ, steeti gị na-enyekwa asambodo ahụ." },
      { objective: "O1", q: "Kedu ule ọzọ kwesịrị ụlọ akwụkwọ sekọndrị steeti ụfọdụ na-eji?", options: ["HiSET", "SAT", "CDL", "LSAT"], answer: 0, why: "HiSET bụ ule ọzọ kwesịrị ụlọ akwụkwọ sekọndrị." },
      { objective: "O1", q: "Dị ka ged.com si kwuo, ule Social Studies bụ:", options: ["Naanị ịchekwa ụbọchị n'isi", "Naanị ule edemede (essay)", "Ọ bụghị ule ịchekwa ihe n'isi", "Ajụjụ ọnụ a na-ekwu n'olu"], answer: 2, why: "Ged.com kwuru na ọ bụghị ule ịchekwa ihe n'isi." },
      { objective: "O2", q: "Gịnị bụ isi iyi mbụ?", options: ["Akwụkwọ ọgụgụ e dere n'afọ gara aga", "Ihe e mere n'oge ahụ site n'aka onye nọ ebe ahụ", "Nchịkọta na weebụsaịtị", "Ndetu onye nkuzi"], answer: 1, why: "Isi iyi mbụ na-esi n'aka ndị nọ n'oge ihe ahụ mere." },
      { objective: "O2", q: "Kedu nke bụ eziokwu?", options: ["E bịanyere aka na Civil Rights Act n'afọ 1964.", "Ọ bụ iwu kacha ukwuu e dere mgbe ọ bụla.", "Onye ọ bụla kwesịrị ịhụ ya n'anya.", "Ọ bụ ụbọchị kacha atọ ụtọ n'akụkọ ihe mere eme."], answer: 0, why: "A pụrụ ilele ụbọchị e bịanyere aka; ndị ọzọ bụ ikpe." },
      { objective: "O2", q: "Iji chọta echiche onye dere ya, jụọ:", options: ["Ogologo isi iyi ahụ", "Agba akwụkwọ ahụ", "Peeji ole o nwere", "Onye dere ya, mgbe ole na gịnị kpatara"], answer: 3, why: "Onye, mgbe ole na gịnị kpatara na-eme ka onye dere ya hụ isiokwu otu o si hụ ya." },
      { objective: "O2", q: "Kedu okwu na-egosikarị echiche?", options: ["E kwadoro (ratified)", "Kwesịrị", "1920", "Congress"], answer: 1, why: "\"Kwesịrị\" na-ekwu ihe mmadụ kwenyere na ọ ga-eme." },
      { objective: "O3", q: "Kedu ngalaba na-emejuputa iwu?", options: ["Omebe iwu", "Ikpe", "Nchịkwa", "Ọ dịghị"], answer: 2, why: "Onye isi ala na ngalaba nchịkwa na-emejuputa iwu." },
      { objective: "O3", q: "Congress nwere:", options: ["Senate na House of Representatives", "Onye isi ala na cabinet", "Supreme Court", "Ndị gọvanọ"], answer: 0, why: "Congress nwere akụkụ abụọ: Senate na House." },
      { objective: "O3", q: "Otu otu mmadụ mere ngagharị iwe n'udo n'ogige. Kedu ikike na-echebe nke a?", options: ["Ikike ikpe ngwa ngwa", "Ikike ịtụ vootu mgbe ị dị afọ 18", "Veto onye isi ala", "Nnwere onwe nzukọ (First Amendment)"], answer: 3, why: "First Amendment na-echebe nzukọ n'udo." },
      { objective: "O3", q: "A na-akpọ ike a na-ekekọrịta n'etiti gọọmentị mba na steeti:", options: ["Veto", "Federalism", "Preamble", "Echiche"], answer: 1, why: "Federalism na-ekewa ike n'etiti mba na steeti." },
      { objective: "O4", q: "Kedu okwu ngosi na-egosi ihe kpatara na ihe si na ya pụta?", options: ["N'ihi nke a", "Ọzọkwa", "Dịka ọmụmaatụ", "Na mgbakwunye"], answer: 0, why: "\"N'ihi nke a\" na-ewebata ihe si na ya pụta." },
      { objective: "O4", q: "\"Ọrụ ụlọ ọrụ mmepụta mụbara n'obodo, ya mere ndị mmadụ si n'ugbo kwapụ.\" Gịnị bụ ihe kpatara?", options: ["Ndị mmadụ si n'ugbo kwapụ", "Ugbo bụbigara ibu", "Ọrụ ụlọ ọrụ mmepụta mụbara n'obodo", "Obodo belatara"], answer: 2, why: "Ọrụ ụlọ ọrụ mmepụta bụ ihe mere ndị mmadụ ji kwapụ." },
      { objective: "O4", q: "Kedu okwu kacha akwado inference na iwu ọhụrụ belatara mmerụ ahụ n'ebe ọrụ?", options: ["\"Iwu ahụ dị peeji 20.\"", "\"Akụkọ mmerụ ahụ dara otu ụzọ n'ụzọ atọ n'ime afọ atọ mgbe iwu ahụ malitere.\"", "\"Ọtụtụ mmadụ kwuru banyere iwu ahụ.\"", "\"Iwu ahụ nwere aha dị ogologo.\""], answer: 1, why: "Ọ na-enye ihe akaebe na mmerụ ahụ belatara mgbe iwu ahụ bịara." },
      { objective: "O5", q: "Oyi siri ike mebiri ọtụtụ ihe ọkụkụ oroma. Gịnị na-emekarị ọnụ ahịa oroma?", options: ["Ọ na-ada", "Ọ na-anọ otu ahụ", "Oroma aghọọ n'efu", "Ọ na-arịgo"], answer: 3, why: "Supply belatara ebe demand nọ otu ahụ na-ebulikarị ọnụ ahịa." },
      { objective: "O5", q: "Gịnị ka i kwesịrị ibu ụzọ gụọ na chaatị?", options: ["Aha ya, labels na units", "Naanị nhọrọ azịza", "Ọnụ ọgụgụ kacha nta", "Naanị agba"], answer: 0, why: "Ha na-agwa gị ihe ọnụ ọgụgụ ndị ahụ pụtara." },
      { objective: "O5", q: "Unemployment bụ 8% n'afọ 2020 na 4% n'afọ 2023. Ole ka ọ dara?", options: ["Percentage points 2", "Percentage points 12", "Percentage points 4", "Percentage points 8"], answer: 2, why: "8% - 4% = percentage points 4." },
      { objective: "O5", q: "Chaatị na-egosi ụgwọ ụlọ na-arịgo kwa afọ. Kedu nkwubi okwu gafere data ahụ?", options: ["Ụgwọ ụlọ rịgoro n'afọ ndị a", "Ụgwọ ụlọ ga-amụba okpukpu abụọ n'afọ na-abịa", "Ụgwọ ụlọ dị elu na njedebe karịa na mmalite", "Chaatị ahụ na-egosi ọtụtụ afọ"], answer: 1, why: "Chaatị ahụ egosighị afọ na-abịa." },
      { objective: "O2", q: "Preamble na-amalite \"We the People.\" Gịnị ka nke a na-egosi gbasara echiche gọọmentị ahụ?", options: ["Ike si n'aka ndị mmadụ", "Ike si n'aka eze", "Naanị steeti nwere ike", "Ụlọikpe dere ya"], answer: 0, why: "\"We the People\" na-egosi na ndị mmadụ hiwere gọọmentị ahụ maka ndị mmadụ." },
      { objective: "O4", q: "Gịnị mere ndị isi ji dee Constitution n'afọ 1787?", options: ["Mba ahụ enweghị steeti", "Eze rịọrọ ha", "Bill of Rights adaala", "Gọọmentị n'okpuru Articles of Confederation adịghị ike nke ukwuu"], answer: 3, why: "Articles of Confederation na-adịghị ike dugara n'atụmatụ gọọmentị ọhụrụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [2, 3, 4, 7, 9, 12, 13, 14, 16] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, gụghachi akụkụ ahụ nke akwụkwọ ahụ ma dozie azịza gị.",
    criteria: [
      { name: "Isi iyi na echiche onye dere ya", objective: "O2", notYet: "Ụdị isi iyi ma ọ bụ onye dere ya ezighi ezi ma ọ bụ adịghị.", meets: "Onye dere ya, ụbọchị na ụdị isi iyi ziri ezi, na echiche onye dere ya dabara n'onye dere ya na ihe mere o ji dee ya.", exceeds: "Ọ kọwakwara otu echiche ahụ si emetụta ihe akwụkwọ ahụ na-ekwu." },
      { name: "Isi okwu, eziokwu na echiche", objective: "O2", notYet: "Isi okwu ezighi ezi, ma ọ bụ eziokwu na echiche gwakọtara.", meets: "Isi okwu ziri ezi n'otu ahịrịokwu, otu eziokwu na otu ebumnuche ma ọ bụ echiche, nke ọ bụla jikọrọ okwu ndị dị n'akwụkwọ ahụ.", exceeds: "Ọ na-ehota kpọmkwem okwu ndị na-egosi azịza ọ bụla." },
      { name: "Ihe kpatara na ihe si na ya pụta", objective: "O4", notYet: "Enweghị ihe kpatara ma ọ bụ ihe si na ya pụta, ma ọ bụ a tụgharịrị ha.", meets: "Otu ihe kpatara ziri ezi na otu ihe si na ya pụta ziri ezi jikọrọ akwụkwọ ahụ.", exceeds: "Ọ na-egosi usoro: ihe kpatara, ihe si na ya pụta na ihe ọzọ si na ya pụta emesịa." },
      { name: "Njikọ na gọọmentị", objective: "O3", notYet: "Akpọghị aha ngalaba ma ọ bụ ikike ọ bụla, ma ọ bụ a kpọrọ nke na-ezighi ezi.", meets: "Ọ kpọrọ aha ngalaba ma ọ bụ ikike ọ metụtara ma kọwaa ihe kpatara ya n'otu ahịrịokwu.", exceeds: "Ọ nyekwara ihe atụ nke checks and balances ma ọ bụ ikike a na-eji taa." },
      { name: "Ịgụ data", objective: "O5", notYet: "O mezughị omume graf dị na Nkuzi 5.", meets: "O mezuru omume graf nke Nkuzi 5 nwere nkwubi okwu na-anọ n'ime data ahụ.", exceeds: "Ọ kọwakwara mgbanwe ọnụ ahịa site n'iji supply na demand." },
      { name: "Atụmatụ ọmụmụ", objective: "O1", notYet: "Enweghị atụmatụ ọmụmụ, ma ọ bụ enweghị ụbọchị.", meets: "Atụmatụ ọmụmụ nwere opekata mpe otu ụbọchị kwa izu ruo izu e chere ide ule.", exceeds: "O nwekwara ụbọchị maka GED Ready ma ọ bụ ụbọchị ule e debere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ karịa n'ahịrị rubric ọ bụla",
      "Ndị na-amụ ihe dere GED Ready ma ọ bụ ule nlele n'efu nke ged.com n'ime ụbọchị 30",
      "Ndị na-amụ ihe debere ma ọ bụ gafere ule GED Social Studies n'ime ụbọchị 90 (ha kọrọ n'onwe ha)",
      "Mmemme ndị mmekọ na-akọ na ndị na-amụ ihe ka mezuru isiokwu GED anọ niile ma gaa n'ọzụzụ ọrụ ma ọ bụ kọleji"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, tablet ma ọ bụ kọmputa nwere ịntanetị, ma ọ bụ nkuzi e bipụtara",
      "Akwụkwọ na mkpịsị ode maka azịza omume na mpempe akwụkwọ nyocha isi iyi",
      "Mbipụta ma ọ bụ ihuenyo nke Preamble na Bill of Rights site na archives.gov",
      "Ule nlele n'efu nke ged.com; GED Ready ma ọ bụrụ na onye na-amụ ihe kpebiri ịzụta ya",
      "Ihe dị ka nkeji 90 maka nkuzi na nnwale, gbakwunyere ihe dị ka nkeji 45 maka ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Malite site n'ule mbido na ule nlele Social Studies n'efu nke ged.com iji chọta mpaghara nka onye ọ bụla na-amụ ihe kacha chọọ.",
      "Gụọnụ Preamble n'olu dị elu ọnụ ma tụgharịa ebumnuche ọ bụla n'okwu nkịtị tupu ndị na-amụ ihe edee mpempe akwụkwọ ha.",
      "Mee ka isiokwu ndọrọ ndọrọ ọchịchị ghara inwe akụkụ: kụzie otu gọọmentị si arụ ọrụ na otu esi ekpe ikpe ihe akaebe, ọ bụghị akụkụ a ga-eso.",
      "Jiri chaatị mpaghara, nke ezi (dịka ọmụmaatụ data ọrụ ma ọ bụ ụgwọ ụlọ nke county) maka omume graf ọzọ, ma lelee ọnụ ọgụgụ ndị ahụ na isi iyi gọọmentị.",
      "Lelee ule steeti gị na-eji (GED ma ọ bụ HiSET) ma kesaa ebe ule dị nso na enyemaka ụgwọ ọ bụla."
    ]
  }
};
