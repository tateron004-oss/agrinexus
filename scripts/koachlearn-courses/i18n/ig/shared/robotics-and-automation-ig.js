"use strict";

// Koach Learn course (Igbo translation of shared/robotics-and-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "robotics-and-automation-ig",
  lang: "ig",
  translationOf: "robotics-and-automation",
  category: "Youth",
  name: "Mmalite Robot, AI na Automation",
  skills: "Ịkọwa sense-think-act (ịhụ, iche, ime), Ịhọrọ sensọ na actuator kwesịrị ekwesị, Ide algorithm, Iji blọk ede koodu maka robot mebere emebe, Iji sensọ eme mkpebi, Ịnwale na idozi mperi",
  outcome: "ịhazi na ide koodu maka robot mebere emebe site n'iji koodu blọk n'efu, ka ọ gaa n'ụzọ e nyere ya, jiri sensọ zere mgbidi, ma nwalee ya ma dozie ya ruo mgbe ọ rụrụ ọrụ nke ọma.",
  about: [
    "Robot na automation dị n'ụlọ nkwakọba ngwaahịa, n'ugbo, n'ụlọ ọgwụ, n'ụgbọala na n'ụlọ. Ihe ọmụmụ a na-egosi otu ha si arụ ọrụ ma kwe ka i dee koodu maka otu n'onwe gị. Ọ dịghị robot ị ga-azụ, ọ dịghịkwa mkpa ka ị mara ide koodu na mbụ.",
    "Ọ bụ maka ndị ntorobịa chọrọ ịmata maka ọrụ teknụzụ, ndị agha ochie (veterans) rụrụ ọrụ n'ụgbọ na-enweghị onye na-anya ya ma ọ bụ n'ịrụzi igwe ma chọọ ọrụ nkịtị, na onye ọ bụla chọrọ ịghọta igwe ndị na-agbanwe ebe ọrụ.",
    "Ị ga-amụta echiche sense-think-act (ịhụ, iche, ime), hazie mmegharị robot n'akwụkwọ, wee dee koodu maka robot mebere emebe n'efu na web browser site n'iji blọk. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Na ngwa robot mebere emebe n'efu dị ka VEXcode VR, dee mmemme blọk nke na-eme ka robot ahụ gaa n'ụdị square (akụkụ anọ hara nhata), wee dee mmemme nke abụọ nke na-eme ka ọ gaa n'ihu ruo mgbe sensọ hụrụ mgbidi, kwụsị, tụgharịa ma gaa n'ihu. Nwalee ya, dozie opekata mpe otu mperi, ma dee ahịrịokwu atọ na-akọwa ihe robot ahụ na-ahụ, otu o si ekpebi ihe ọ ga-eme na otu o si eme ihe.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa (site na klas etiti ruo ndị okenye na-eto eto) chọrọ ịmata maka robot, ide koodu ma ọ bụ ọrụ teknụzụ, n'ụlọ akwụkwọ, na mmemme mgbe akwụkwọ gachara, n'ọba akwụkwọ ma ọ bụ n'ebe ndị ntorobịa na-ezukọ.",
    startingPoint: "Ha nwere ike iji kọmputa, Chromebook ma ọ bụ tablet na web browser, ha ahụọla robot na vidiyo ma ọ bụ n'ụlọ ahịa. Ọtụtụ n'ime ha edebeghị mmemme ma ọ bụ hazie algorithm.",
    gap: "Robot na automation na-amụba n'ụlọ nkwakọba ngwaahịa, n'ụlọ mmepụta ihe, n'ugbo na n'ụlọ ọgwụ, ọrụ teknịshan na ide mmemme chọkwara ndị maara ịhazi nzọụkwụ, ide koodu, ịnwale na idozi. Ndị na-amụ ihe chọrọ mmeri mbụ n'aka ha na robot mebere emebe iji wuo obi ike ma hụ ụzọ ha ga-esi banye n'ọrụ ndị a.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6 ruo 8)",
      "Ngwaọrụ: kọmputa, Chromebook ma ọ bụ tablet nwere web browser; ọ dịghị mkpa ezi robot",
      "Oge: nkuzi nkeji 5, ihe dị ka nkeji 60 n'ozuzu",
      "Ụdị ngwa n'efu na ihe ha na-eme nwere ike ịgbanwe; jiri nke ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ na-ahọrọ",
      "Nchekwa: a na-eji ezi robot ụlọ ọrụ naanị mgbe a zụrụ mmadụ maka nchekwa n'ebe ahụ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọmụmaatụ ezi igwe", action: "ịmata ndị bụ robot, ndị bụ automation na ndị na-eji AI, ma kọwaa usoro sense-think-act", standard: "ma nweta opekata mpe 4 n'ime 5 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị ọrụ robot ga-arụ", action: "ịhọrọ sensọ na actuator ọ chọrọ", standard: "na-enye ihe kpatara akụkụ ọ bụla" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ robot", action: "ide algorithm n'okwu dị mfe nwere nzọụkwụ doro anya, loop na mkpebi if-then", standard: "nke mere na ọ na-arụ ọrụ mgbe gị onwe gị gafere ya" },
    { id: "O4", condition: "Site n'iji ngwa robot mebere emebe n'efu dị ka VEXcode VR", action: "ide koodu blọk maka robot ahụ ka ọ gaa n'ụdị square", standard: "nke mere na ọ laghachiri nso ebe o si malite" },
    { id: "O5", condition: "Mgbe e nyere gị robot ga-ezere mgbidi", action: "itinye if-then na-eji sensọ na mmemme ahụ ma dozie opekata mpe otu mperi", standard: "na-agbanwe otu ihe n'otu oge ruo mgbe robot ahụ kwụsịrị ma tụgharịa na mgbidi" },
    { id: "O6", condition: "Mgbe e nyere gị ebe ọrụ na-eji robot", action: "ịkpọ aha ezi ọrụ gbasara robot na iwu nchekwa ndị mmadụ na-agbaso n'akụkụ robot", standard: "na-akpọ aha opekata mpe ọrụ abụọ na iwu nchekwa abụọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu robot na automation si arụ ọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Robot, automation na AI: olee ihe dị iche?",
          minutes: 4,
          goal: "Kewaa ezi igwe ka ha bụrụ robot, automation na AI, ma kọwaa sense-think-act.",
          text: [
            "Automation pụtara na igwe ma ọ bụ mmemme na-arụ ọrụ n'onwe ya mgbe a hazichara ya, dị ka igwe na-asa efere ma ọ bụ eriri na-ebu ngwaahịa n'ụlọ mmepụta ihe. Robot bụ igwe nwere ike ịhụ ihe dị gburugburu ya ma megharịa ma ọ bụ mee ihe n'ime ya, dị ka robot na-asa ala ma ọ bụ robot na-ebu shelf n'ụlọ nkwakọba ngwaahịa.",
            "Robot ọ bụla na-agbaso otu usoro ahụ: ịhụ, iche, ime (sense, think, act). Ọ na-eji sensọ ahụ ihe (igwefoto, sensọ nkụ, sensọ anya), ọ na-eche site na mmemme kọmputa na-ekpebi ihe ọ ga-eme, ọ na-ejikwa moto, wiil, aka ma ọ bụ ihe njide eme ihe. Wee hụkwa ọzọ.",
            "AI bụ ụdị mmemme na-eche echiche nke na-amụta usoro site n'ọmụmaatụ, dị ka ịhụ mmadụ n'ihe oyiyi igwefoto. Ọtụtụ robot na-eji iwu dị mfe, ọ bụghị AI. Ụfọdụ na-eji AI ahụ ụzọ, hazie ụzọ ha ga-aga ma ọ bụ ghọta okwu."
          ],
          words: [["Automation", "igwe ma ọ bụ mmemme na-arụ ọrụ n'onwe ya mgbe a hazichara ya."], ["Robot", "igwe nwere ike ịhụ ihe gbara ya gburugburu ma mee ihe n'ime ya."], ["Sense-think-act", "usoro robot ọ bụla na-agbaso: ịnara ozi, ikpebi, wee megharịa ma ọ bụ mee ihe."], ["AI", "artificial intelligence (ọgụgụ isi arụrụ arụ): mmemme na-amụta usoro site n'ọmụmaatụ iji mee mkpebi."]],
          slides: [
            { title: "Automation na robot", bullets: ["Automation: na-arụ otu ọrụ a kara aka n'onwe ya", "Robot: na-ahụ ihe gbara ya gburugburu ma na-eme ihe n'ime ya"] },
            { title: "Usoro robot", bullets: ["Ịhụ: sensọ na-anara ozi", "Iche: mmemme na-ekpebi", "Ime: moto, wiil ma ọ bụ aka na-emegharị", "Wee hụkwa ọzọ"] },
            { title: "Ebe AI dabara", bullets: ["AI na-amụta usoro site n'ọmụmaatụ", "Ọtụtụ robot na-eji iwu dị mfe, ọ bụghị AI", "Ụfọdụ na-eji AI ahụ ụzọ, hazie ụzọ ma ọ bụ gee ntị"] }
          ],
          tryIt: "Họrọ igwe atọ ị hụrụla (dịka ọmụmaatụ robot na-asa ala, igwe ịkwụ ụgwọ n'onwe gị n'ụlọ ahịa, drone na-ebu ngwaahịa). Maka nke ọ bụla, dee ma ọ bụ automation ma ọ bụ robot, na otu ụzọ o si ahụ ihe, eche echiche ma mee ihe.",
          youCanNow: "ịmata ọdịiche dị n'etiti automation, robot na AI, ma kọwaa robot ọ bụla site n'iji sense-think-act.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka robot na-eme na nzọụkwụ \"ime\" (act) nke sense-think-act?", options: ["Ọ na-emegharị ma ọ bụ mee ihe site na moto, wiil ma ọ bụ ihe njide", "Ọ na-eji sensọ tụọ ụwa", "Ọ na-eji mmemme ekpebi ihe ọ ga-eme", "Ọ na-agbanyụ onwe ya"], answer: 0, why: "Ime ihe pụtara imegharị ma ọ bụ ime ihe site na moto, wiil, aka ma ọ bụ ihe njide." },
            { objective: "O1", q: "Enyi gị kwuru na robot ọ bụla na-eji AI. Gịnị ka ị ga-agwa ya?", options: ["O ziri ezi; robot enweghị ike ịrụ ọrụ na-enweghị AI", "AI pụtara na robot nwere wiil", "Ọtụtụ robot na-agbaso iwu dị mfe; naanị ụfọdụ na-eji AI", "Robot na AI bụ otu ihe"], answer: 2, why: "Ọtụtụ robot na-eji iwu dị mfe; ụfọdụ na-eji AI ahụ ụzọ, hazie ụzọ ma ọ bụ ghọta okwu." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sensọ na actuator: anya na akwara robot",
          minutes: 5,
          goal: "Jikọta sensọ na actuator a na-ahụkarị na ọrụ ha na-arụ.",
          text: [
            "Sensọ bụ ihe robot ji ahụ ụwa. Sensọ anya (distance sensor) na-atụ otu ihe si dị anya. Sensọ nkụ (bump sensor) na-ama mgbe robot metụrụ ihe aka. Igwefoto na-ahụ ihe oyiyi. Sensọ ahịrị ma ọ bụ agba na-ahụ ala. GPS na-ama ebe ọ nọ n'èzí.",
            "Actuator bụ akwara robot: ihe ọ bụla na-eme ka o megharịa ma ọ bụ mee ihe. Moto na-atụgharị wiil, servo na-atụgharị nkwonkwo ruo n'akụkụ (angle) kpọmkwem, ihe njide ma ọ bụ iko na-amị amị na-ebuli ihe.",
            "Mgbe ị na-ahazi robot, malite n'ọrụ ahụ. Robot ga-akwụsị tupu ọ kụọ mgbidi chọrọ sensọ anya ma ọ bụ sensọ nkụ na moto na-akwọ ya. Robot na-ekewa igbe uhie na igbe acha anụnụ anụnụ chọrọ sensọ agba na ihe njide."
          ],
          words: [["Sensọ", "akụkụ na-anara ozi, dị ka anya, mmetụ, ìhè ma ọ bụ ihe oyiyi."], ["Actuator", "akụkụ na-eme ka robot megharịa ma ọ bụ mee ihe, dị ka moto ma ọ bụ ihe njide."], ["Servo", "moto na-atụgharị ruo n'akụkụ (angle) kpọmkwem."]],
          slides: [
            { title: "Sensọ = ihe ọ ji ahụ ụwa", bullets: ["Sensọ anya, sensọ nkụ, igwefoto", "Sensọ ahịrị ma ọ bụ agba", "GPS maka ebe ọ nọ n'èzí"] },
            { title: "Actuator = akwara", bullets: ["Moto na-atụgharị wiil", "Servo na-atụgharị ruo n'akụkụ kpọmkwem", "Ihe njide na-ebuli ihe"] },
            { title: "Malite n'ọrụ ahụ", bullets: ["Kwụsị tupu mgbidi: sensọ anya + moto", "Kewaa site n'agba: sensọ agba + ihe njide"] }
          ],
          tryIt: "Hazie n'akwụkwọ robot maka otu ọrụ, dị ka ịgba osisi mmiri ma ọ bụ ibu igbe gafee ọnụ ụlọ. Depụta sensọ na actuator ọ chọrọ na ihe mere o ji chọọ ha.",
          youCanNow: "ịhọrọ sensọ na actuator robot chọrọ maka ọrụ.",
          quickCheck: [
            { objective: "O2", q: "Kedu akụkụ bụ actuator?", options: ["Igwefoto", "Ihe njide", "Sensọ nkụ", "Sensọ ahịrị"], answer: 1, why: "Actuator na-eme ka robot megharịa ma ọ bụ mee ihe; ihe njide na-ebuli ihe." },
            { objective: "O2", q: "Ị na-ahazi robot na-agbaso ahịrị ojii dị n'ala. Kedu sensọ ị ga-etinye?", options: ["GPS", "Sensọ nkụ", "Igwe na-anara olu (microphone)", "Sensọ ahịrị ma ọ bụ agba"], answer: 3, why: "Sensọ ahịrị ma ọ bụ agba na-ele ala anya ma nwee ike ịgbaso ahịrị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide algorithm tupu i dee koodu",
          minutes: 5,
          goal: "Dee atụmatụ nzọụkwụ na nzọụkwụ nwere loop na mkpebi nke robot nwere ike ịgbaso.",
          text: [
            "Algorithm bụ ndepụta nzọụkwụ doro anya iji mechaa ọrụ. Robot enweghị ike ịkọ nkọ, ya mere nzọụkwụ ọ bụla ga-edo anya: \"gaa n'ihu 50 centimeters\" kama \"gaa ntakịrị\".",
            "Ngwaọrụ abụọ na-eme ka algorithm dị ike. Loop na-emeghachi nzọụkwụ, dị ka \"megharịa ugboro 4: gaa n'ihu, tụgharịa aka nri 90 degrees\" iji gaa n'ụdị square. Mkpebi, nke a na-akpọkwa if-then, na-ahọrọ ihe a ga-eme: \"ọ bụrụ na mgbidi dị nso karịa 10 centimeters, kwụsị; ma ọ bụghị ya, gaa n'ihu\".",
            "Buru ụzọ dee ya n'okwu dị mfe ma ọ bụ see flowchart. Wee gafee ya n'onwe gị dị ka a ga-asị na ị bụ robot ahụ. Ọ bụrụ na ị kụrụ ihe n'akwụkwọ, robot ahụ ga-akụkwa ya."
          ],
          steps: ["Dee ebumnuche ahụ n'otu ahịrịokwu.", "Depụta nzọụkwụ ọ bụla n'usoro, na ọnụọgụ kpọmkwem.", "Chọọ nzọụkwụ ndị na-emeghachi onwe ha ma mee ha ka ha bụrụ loop.", "Tinye mkpebi if-then ọ bụla na-eji sensọ.", "Gafee ya n'onwe gị iji nwalee ya."],
          words: [["Algorithm", "ndepụta nzọụkwụ doro anya iji mechaa ọrụ."], ["Loop", "otu nzọụkwụ na-emeghachi onwe ha."], ["If-then", "mkpebi: ọ bụrụ na ihe bụ eziokwu, mee otu ihe; ma ọ bụghị ya, mee ihe ọzọ."], ["Flowchart", "eserese algorithm nwere igbe na akụ."]],
          slides: [
            { title: "Algorithm na-edo anya", bullets: ["\"Gaa n'ihu 50 cm\", ọ bụghị \"gaa ntakịrị\"", "Robot enweghị ike ịkọ nkọ"] },
            { title: "Loop na mkpebi", bullets: ["Loop: megharịa ugboro 4, gaa n'ihu wee tụgharịa aka nri 90", "Ọ bụrụ na mgbidi dị nso karịa 10 cm, kwụsị; ma ọ bụghị ya, gaa n'ihu"] },
            { title: "Buru ụzọ nwalee n'akwụkwọ", bullets: ["Dee ya ma ọ bụ see flowchart", "Gafee ya dị ka robot ahụ", "Dozie ya tupu i dee koodu"] }
          ],
          tryIt: "Dee algorithm nwere loop maka robot ka ọ gaa n'ụdị square. Wee tinye nzọụkwụ if-then ka ọ kwụsị ma ọ bụrụ na ihe gbochiri ya ụzọ. Gafee ya site n'iji ihe egwuregwu ụmụaka, ekwentị ma ọ bụ ụkwụ gị.",
          youCanNow: "ide algorithm doro anya nwere loop na mkpebi if-then, ma nwalee ya n'akwụkwọ.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka loop na-eme n'algorithm?", options: ["Ọ na-akwụsị robot", "Ọ na-ahọrọ n'etiti omume abụọ", "Ọ na-emeghachi otu nzọụkwụ", "Ọ na-atụ anya ebe ihe dị"], answer: 2, why: "Loop na-emeghachi nzọụkwụ, dị ka ịga n'ihu na ịtụgharị ugboro anọ maka square." },
            { objective: "O3", q: "Atụmatụ gị na-ekwu \"gaa n'ihu ntakịrị\". Gịnị ka ị ga-agbanwe tupu i dee koodu?", options: ["Nye ọnụọgụ kpọmkwem, dị ka 50 centimeters", "Ọ dịghị ihe; robot ga-akọ nkọ", "Tinye nzọụkwụ ndị ọzọ n'azụ ya", "Wepụ nzọụkwụ ahụ"], answer: 0, why: "Robot enweghị ike ịkọ nkọ, ya mere nzọụkwụ ọ bụla chọrọ ọnụọgụ kpọmkwem." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu robot na automation si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Kedu nzọụkwụ atọ robot ọ bụla na-emeghachi?", options: ["Ịzụ, iwu, ire", "Ịmalite, ịkwụsị, ịkwụsịtụ", "Ịhụ, iche, ime", "Ịchaja, ịga, ịdọba"], answer: 2, why: "Robot na-ahụ ihe, ji mmemme kpebie, wee mee ihe, ma na-emeghachi ya." },
          { objective: "O2", q: "Kedu akụkụ bụ sensọ?", options: ["Sensọ anya", "Moto wiil", "Ihe njide", "Batrị"], answer: 0, why: "Sensọ anya na-anara ozi; moto na ihe njide bụ actuator." },
          { objective: "O2", q: "Robot ga-ekewa igbe uhie na igbe acha anụnụ anụnụ. Gịnị ka ọ kacha chọọ?", options: ["GPS", "Ihe na-ebu olu dị elu karị", "Naanị batrị buru ibu karị", "Sensọ agba na ihe njide"], answer: 3, why: "Ọ ga-ahụrịrị agba ma buli igbe." },
          { objective: "O3", q: "Kedu ntuziaka doro anya nke ọma maka robot?", options: ["\"Gaa ntakịrị\"", "\"Gaa n'ihu 50 centimeters\"", "\"Tụgharịa aka nri ntakịrị\"", "\"Mee ihe ahụ\""], answer: 1, why: "Robot chọrọ ọnụọgụ kpọmkwem." },
          { objective: "O3", q: "\"Megharịa ugboro 4: gaa n'ihu, tụgharịa aka nri 90 degrees\" na-eji:", options: ["Sensọ", "Loop", "Ihe njide", "Okwuntughe"], answer: 1, why: "Loop na-emeghachi nzọụkwụ; nke a na-eme ka robot gaa n'ụdị square." }
        ]
      }
    },
    {
      name: "Isi 2: Ide koodu na iji robot",
      lessons: [
        {
          objectives: ["O4"],
          title: "Iji blọk ede koodu maka robot mebere emebe",
          minutes: 6,
          goal: "Meghee robot mebere emebe n'efu ma dee koodu ka ọ gaa n'ụdị square.",
          text: [
            "Ị nwere ike ịmụ ide koodu robot na web browser na-enweghị robot. VEXcode VR, nke VEX Robotics, nwere ụdị n'efu na-eji blọk ị na-adọkpụ ma tinye (drag-and-drop), dị ka Scratch, ọ na-arụkwa ọrụ na kọmputa, Chromebook na tablet na vr.vex.com. E nwere nhọrọ ndị ọzọ n'efu; ụlọ akwụkwọ gị ma ọ bụ ọba akwụkwọ gị nwere ike ịnwe nke ọ na-ahọrọ.",
            "Blọk na-ejikọ ọnụ dị ka iberibe egwuregwu puzzle. Blọk \"drive forward\" (gaa n'ihu) na-eme ka robot ahụ gaa, blọk \"turn right\" (tụgharịa aka nri) na-atụgharị ya, blọk \"repeat\" (megharịa) na-emekwa loop. Ị na-pịa Start ka ị hụ ka robot ahụ na-agbaso mmemme gị n'ebe egwuregwu mebere emebe (playground).",
            "Gbanwee algorithm gị dị n'akwụkwọ ka ọ bụrụ blọk, otu nzọụkwụ n'otu oge. Gbaa ya mgbe mgbanwe ọ bụla gasịrị ka i wee mara blọk kpatara ihe ọ bụla."
          ],
          steps: ["Meghee vr.vex.com na web browser.", "Họrọ playground dị mfe nwere ohere n'ala.", "Dọkpụta blọk drive-forward na blọk turn-right banye na mmemme ahụ.", "Kechie ha n'ime blọk repeat e debere na 4.", "Pịa Start ma lee anya. Gbanwee anya ọ na-aga ma ọ bụ ntụgharị ruo mgbe ọ gara n'ụdị square dị mma."],
          words: [["Ide koodu blọk", "ide mmemme site n'ijikọ blọk a na-ahụ anya kama ide koodu."], ["Playground", "ebe mebere emebe ebe robot a na-eṅomi na-aga."], ["Simulator", "sọftwea na-eme ka ezi igwe ka i wee nwee ike ime omume n'enweghị nsogbu."]],
          slides: [
            { title: "Mụọ ihe na-enweghị robot", bullets: ["Ide koodu blọk n'efu na browser", "VEXcode VR: vr.vex.com", "Ọ na-arụ ọrụ na kọmputa, Chromebook na tablet"] },
            { title: "Blọk na-ejikọ ọnụ", bullets: ["Gaa n'ihu, tụgharịa aka nri", "Blọk repeat = loop", "Pịa Start ka ị lee anya"] },
            { title: "Wuo ya obere obere", bullets: ["Gbanwee atụmatụ gị dị n'akwụkwọ ka ọ bụrụ blọk", "Gbaa ya mgbe mgbanwe ọ bụla gasịrị", "Gbanwee ya ruo mgbe ọ rụrụ ọrụ"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "Na VEXcode VR ma ọ bụ robot mebere emebe ọzọ n'efu, dee koodu ka robot ahụ gaa n'ụdị square site n'iji blọk repeat. Mee ka ọ kwụsị nso ebe o si malite.",
          youCanNow: "iji blọk dee koodu maka robot mebere emebe, na-eji loop eme ka ọ gaa n'ụdị square.",
          quickCheck: [
            { objective: "O4", q: "N'ide koodu blọk, gịnị ka bọtịnụ Start na-eme?", options: ["Ọ na-ehichapụ blọk gị", "Ọ na-echekwa mmemme gị na USB", "Ọ na-emeghe playground ọhụrụ", "Ọ na-agba mmemme ahụ ka ị hụ ka robot na-agbaso ya"], answer: 3, why: "Ịpịa Start na-agba mmemme ahụ n'ime playground mebere emebe." },
            { objective: "O4", q: "I tinyere blọk ọhụrụ ise n'otu oge, robot ahụ wee kụọ ihe. Gịnị ka i kwesịrị ime?", options: ["Tinyekwuo blọk ndị ọzọ", "Gbaa mmemme ahụ mgbe mgbanwe ọ bụla gasịrị", "Jiri ezi robot kama", "Gbanyụọ sensọ ahụ"], answer: 1, why: "Ịgba ya mgbe mgbanwe ọ bụla gasịrị na-egosi blọk kpatara ihe ọ bụla." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Iji sensọ eme mkpebi, wee dozie mperi",
          minutes: 6,
          goal: "Tinye if-then na-eji sensọ na mmemme robot ma dozie mperi.",
          text: [
            "Robot na-agbaso naanị nzọụkwụ a kara aka dị ka onye kpuru ìsì. Tinye sensọ, ọ ga-enwe ike ịzaghachi. N'ide koodu blọk, ị na-eji blọk \"if\" nwere ihe sensọ gụrụ n'ime ya, dị ka \"if distance is less than 100 millimeters\" (ọ bụrụ na anya erughị 100 millimeters).",
            "Usoro a na-ahụkarị: loop na-adịgide adịgide (forever loop), n'ime ya if-then-else. Ọ bụrụ na mgbidi dị nso, kwụsị ma tụgharịa. Ma ọ bụghị ya, gaa n'ihu. Robot ahụ na-elele sensọ ahụ ugboro ugboro, nke a bụ usoro sense-think-act na koodu.",
            "Mperi (bug) bụ ihe nkịtị. Idozi mperi (debugging) pụtara ịchọta ha na idozi ha. Gbanwee otu ihe n'otu oge, gbaa ya, ma lee anya. Mperi a na-ahụkarị: ntụgharị ahụ erughị 90 degrees kpọmkwem, ọnụọgụ anya dị n'otu (unit) ezighi ezi, ma ọ bụ blọk nọ n'èzí loop."
          ],
          steps: ["Tinye forever loop.", "N'ime ya, tinye blọk if-then-else.", "Tinye nlele sensọ anya n'ime if.", "Then: kwụsị ma tụgharịa. Else: gaa n'ihu.", "Gbaa ya, lee anya maka mperi, gbanwee otu ihe, gbaa ya ọzọ."],
          words: [["Mperi (bug)", "ihe ezighi ezi na mmemme na-eme ka ọ rụọ ọrụ n'ụzọ ezighi ezi."], ["Idozi mperi (debugging)", "ịchọta na idozi mperi."], ["Forever loop", "loop na-emeghachi onwe ya ruo mgbe a kwụsịrị mmemme ahụ."]],
          slides: [
            { title: "Sensọ na-eme ka robot zaghachi", bullets: ["Jiri blọk if nwere ihe sensọ gụrụ", "Ọmụmaatụ: if distance < 100 mm"] },
            { title: "Usoro ahụ", bullets: ["Forever loop", "Ọ bụrụ na ọ dị nso: kwụsị ma tụgharịa", "Ma ọ bụghị ya: gaa n'ihu"] },
            { title: "Idozi mperi", bullets: ["Gbanwee otu ihe n'otu oge", "Lelee ntụgharị, otu (unit) na ebe blọk dị", "Mperi bụ ihe nkịtị"] }
          ],
          tryIt: "Dee koodu ka robot ahụ gaa n'ihu ruo mgbe sensọ anya ya hụrụ mgbidi, wee kwụsị, tụgharịa ma gaa n'ihu. Dee otu mperi i zutere na otu i si dozie ya.",
          youCanNow: "iji ihe sensọ gụrụ n'ime if-then-else mee ka robot zaghachi, ma dozie mperi na mmemme ahụ.",
          quickCheck: [
            { objective: "O5", q: "Na mmemme na-ezere mgbidi, gịnị mere a ga-eji forever loop?", options: ["Ka robot ahụ nọgide na-elele sensọ ahụ ugboro ugboro", "Ka robot ahụ lelee naanị otu ugboro", "Ka mmemme ahụ ghara ịmalite", "Ka robot ahụ gaa n'ụdị square"], answer: 0, why: "Forever loop na-emeghachi nlele sensọ ahụ, nke bụ sense-think-act na koodu." },
            { objective: "O5", q: "Robot gị na-akwụsị 1 mita site na mgbidi kama ịkwụsị nso ya. Gịnị nwere ike ịbụ mperi ahụ?", options: ["Robot ahụ chọrọ batrị ọhụrụ", "Playground ahụ mebiri emebi", "Ọnụọgụ anya ahụ dị n'otu (unit) ezighi ezi", "Mgbidi ahụ toro ogologo nke ukwuu"], answer: 2, why: "Anya dị n'otu ezighi ezi, dị ka centimeters kama millimeters, bụ mperi a na-ahụkarị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ebe robot na-arụ ọrụ, na ịrụ ọrụ n'akụkụ ha n'enweghị nsogbu",
          minutes: 5,
          goal: "Kpọọ aha ezi ọrụ gbasara robot na iwu nchekwa ndị mmadụ na-agbaso n'akụkụ robot.",
          text: [
            "A na-eji robot na automation n'ụlọ nkwakọba ngwaahịa (ibugharị shelf na ngwugwu), n'ụlọ mmepụta ihe (ịgbado ígwè, ịkwakọ ngwaahịa), n'ugbo (ịra ehi mmiri ara, ịgba ọgwụ, drone), n'ụlọ ọgwụ (ibuga ngwa ọrụ, inyere ndị dọkịta na-awa ahụ aka) na n'ime ndị agha (iwepụ bọmbụ, ụgbọelu na-enweghị onye na-anya ya).",
            "Ndị mmadụ ka na-arụ ọrụ dị mkpa: teknịshan robot na-arụzi ma na-elekọta robot, ndị na-arụ ọrụ (operators) na-agba ha ma na-ele ha anya, ndị na-ede mmemme na ndị injinia na-ahazi ha. Ọtụtụ ọrụ teknịshan na-amalite site na asambodo kọleji obodo (community college) ma ọ bụ ọzụzụ ndị agha.",
            "Nchekwa bụ ihe mbụ. Robot ụlọ ọrụ nwere ike imegharị ọsọ ọsọ ma kụọ ike. Ndị ọrụ na-anọ n'èzí ebe a kara akara maka robot, na-eji bọtịnụ nkwụsị mberede (emergency stop), na-egbukwa ọkụ (lock out) tupu ha arụzie ya. E mere robot na-arụkọ ọrụ (cobots) ka ha rụọ ọrụ nso ndị mmadụ, mana otu iwu ahụ ka dị: gbasoo ọzụzụ nchekwa nke ebe ahụ."
          ],
          words: [["Teknịshan robot", "onye na-etinye, na-elekọta ma na-arụzi robot."], ["Cobot", "robot na-arụkọ ọrụ, nke e mere ka ọ rụọ ọrụ nso ndị mmadụ."], ["Emergency stop", "bọtịnụ buru ibu na-akwụsị igwe ozugbo."]],
          slides: [
            { title: "Ebe robot na-arụ ọrụ", bullets: ["Ụlọ nkwakọba ngwaahịa, ụlọ mmepụta ihe, ugbo", "Ụlọ ọgwụ na ndị agha"] },
            { title: "Ọrụ gbasara robot", bullets: ["Teknịshan na-arụzi ma na-elekọta ha", "Operators na-agba ha ma na-ele ha anya", "Ndị na-ede mmemme na ndị injinia na-ahazi ha"] },
            { title: "Nchekwa bụ ihe mbụ", bullets: ["Nọrọ n'èzí ebe a kara akara maka robot", "Mara bọtịnụ emergency stop", "Gbasoo ọzụzụ nchekwa nke ebe ahụ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa mmemme square gị na mmemme sensọ gị na ngwa robot mebere emebe, dozie opekata mpe otu mperi, ma dee ahịrịokwu atọ na-akọwa ihe robot gị na-ahụ, otu o si ekpebi na otu o si eme ihe.",
          youCanNow: "ide koodu maka robot mebere emebe na-ahụ ihe ma na-azaghachi, ịkọwa otu o si arụ ọrụ, na ịkpọ aha ezi ọrụ robot na iwu nchekwa.",
          quickCheck: [
            { objective: "O6", q: "Onye na-arụzi ma na-elekọta robot n'ụlọ mmepụta ihe ma ọ bụ n'ụlọ nkwakọba ngwaahịa?", options: ["Onye na-anara ego n'ụlọ ahịa", "Teknịshan robot", "Onye na-anya ụgbọ ibuga ngwaahịa", "Onye ahịa"], answer: 1, why: "Teknịshan robot na-arụzi ma na-elekọta robot." },
            { objective: "O6", q: "Ị na-eleta ụlọ nkwakọba ngwaahịa, ị hụkwa robot na-emegharị n'azụ ahịrị a kara akara. Gịnị ka ị ga-eme?", options: ["Gafee ahịrị ahụ ka ị lee nso", "Metụ robot aka ka ị hụ ma ọ ga-akwụsị", "Pịa bọtịnụ ọ bụla", "Nọrọ n'èzí ebe a kara akara ma gbasoo iwu nchekwa onye na-eduzi gị"], answer: 3, why: "Robot ụlọ ọrụ nwere ike imegharị ọsọ ọsọ ma kụọ ike, ya mere ndị mmadụ na-anọ n'èzí ebe a kara akara maka robot." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ide koodu na iji robot",
        questions: [
          { objective: "O4", q: "Gịnị bụ simulator?", options: ["Ezi robot", "Ụdị sensọ", "Batrị robot", "Sọftwea na-eme ka ezi igwe ka i wee nwee ike ime omume"], answer: 3, why: "Simulator na-ekwe ka i mee omume n'enweghị nsogbu na-enweghị ezi igwe ahụ." },
          { objective: "O4", q: "Kedu blọk na-eme ka robot megharịa nzọụkwụ?", options: ["Repeat", "Stop", "Start", "Print"], answer: 0, why: "Blọk repeat na-emepụta loop." },
          { objective: "O5", q: "Kedu mmemme na-eme ka robot zere mgbidi?", options: ["Gaa n'ihu mgbe niile n'enweghị nlele ọ bụla", "Tụgharịa aka nri otu ugboro", "Forever: ọ bụrụ na mgbidi dị nso, kwụsị ma tụgharịa; ma ọ bụghị ya, gaa n'ihu", "Kwụsị na mmalite"], answer: 2, why: "If-then-else na-eji sensọ eme ka robot zaghachi." },
          { objective: "O5", q: "Robot gị na-atụgharị karịa ntakịrị oge ọ bụla. Kedu ụzọ kacha mma isi dozie mperi?", options: ["Hichapụ mmemme ahụ niile", "Gbanwee blọk ise n'otu oge", "Hapụ ya", "Gbanwee ọnụọgụ ntụgharị ahụ ntakịrị ma gbaa ya ọzọ"], answer: 3, why: "Gbanwee otu ihe n'otu oge ma nwalee." },
          { objective: "O6", q: "Gịnị ka onye ọrụ kwesịrị ime tupu ọ rụzie robot ụlọ ọrụ?", options: ["Banye n'ime ya mgbe ọ na-arụ ọrụ", "Rịọ robot ahụ ka ọ kwụsị", "Gbasoo ọzụzụ nchekwa ma gbanyụọ ọkụ (lock out)", "Gbanyụọ ọkụ ime ụlọ"], answer: 2, why: "Igbanyụ ọkụ na ịgbaso ọzụzụ na-echebe ndị mmadụ." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Robot, AI na Automation",
    questions: [
      { objective: "O1", q: "Igwe na-asa efere na-arụ ọrụ ya bụ ọmụmaatụ:", options: ["Cobot", "Automation", "Sensọ", "Flowchart"], answer: 1, why: "Ọ na-arụ otu ọrụ a kara aka n'onwe ya mgbe a malitere ya." },
      { objective: "O1", q: "Gịnị na-eme ka igwe bụrụ robot?", options: ["Ọ nwere ike ịhụ ihe gbara ya gburugburu ma mee ihe n'ime ya", "Ọ dị oke ọnụ", "O nwere ihuenyo", "Ọ na-eji ọkụ eletrik"], answer: 0, why: "Robot na-ahụ ihe ma na-eme ihe n'ụwa." },
      { objective: "O1", q: "Na sense-think-act, akụkụ \"iche\" (think) bụ nke:", options: ["Wiil", "Batrị", "Mmemme", "Agba e tere ya"], answer: 2, why: "Mmemme na-ekpebi ihe a ga-eme." },
      { objective: "O1", q: "Robot niile ọ na-eji AI?", options: ["Mba, ọtụtụ na-agbaso iwu dị mfe", "Ee, mgbe niile", "Naanị robot na-asa ala", "Naanị na fim"], answer: 0, why: "Ọtụtụ robot na-agba mmemme dabere n'iwu dị mfe." },
      { objective: "O2", q: "Kedu nke bụ actuator?", options: ["Igwefoto", "Sensọ nkụ", "GPS", "Moto"], answer: 3, why: "Moto na-eme ka robot megharịa." },
      { objective: "O2", q: "Servo bụ:", options: ["Sensọ anya", "Moto na-atụgharị ruo n'akụkụ kpọmkwem", "Ihe na-achaja batrị", "Ụdị loop"], answer: 1, why: "A na-eji servo maka nkwonkwo chọrọ akụkụ kpọmkwem." },
      { objective: "O2", q: "Robot ga-ama mgbe o metụrụ ihe aka. Kedu sensọ dabara?", options: ["Ihe na-ebu olu (speaker)", "Sensọ nkụ", "Ọkụ agba", "Elekere"], answer: 1, why: "Sensọ nkụ na-ahụ mmetụ." },
      { objective: "O3", q: "Algorithm bụ:", options: ["Aha ụlọ ọrụ robot", "Ụdị moto", "Iwu nchekwa", "Ndepụta nzọụkwụ doro anya iji mechaa ọrụ"], answer: 3, why: "Algorithm bụ atụmatụ nzọụkwụ na nzọụkwụ." },
      { objective: "O3", q: "Gịnị mere a ga-eji buru ụzọ nwalee algorithm n'akwụkwọ?", options: ["Iji chọta mperi tupu i dee koodu", "N'ihi na robot chọrọ akwụkwọ", "Iji mee ka ọ dị ogologo", "Iwu chọrọ ya"], answer: 0, why: "Ịgafe ya na-achọta mperi n'oge." },
      { objective: "O3", q: "\"Ọ bụrụ na mgbidi dị nso, kwụsị; ma ọ bụghị ya, gaa n'ihu\" bụ:", options: ["Loop", "Ihe njide", "Mkpebi if-then", "Playground"], answer: 2, why: "Ọ na-ahọrọ n'etiti omume dabere n'ọnọdụ." },
      { objective: "O3", q: "Flowchart na-egosi algorithm site n'iji:", options: ["Akara egwu", "Foto", "Okwuntughe", "Igbe na akụ"], answer: 3, why: "Flowchart na-ese nzọụkwụ dị ka igbe e ji akụ jikọọ." },
      { objective: "O4", q: "Ide koodu blọk pụtara:", options: ["Naanị ide koodu ogologo", "Igbochi weebụsaịtị", "Ijikọ blọk a na-ahụ anya iji dee mmemme", "Iji blọk osisi wuo ihe"], answer: 2, why: "Blọk bụ iberibe koodu a na-ahụ anya." },
      { objective: "O4", q: "Ugboro ole ka ị ga-emeghachi \"gaa n'ihu, tụgharịa aka nri 90\" iji gaa n'ụdị square?", options: ["2", "3", "4", "10"], answer: 2, why: "Square nwere akụkụ anọ na ntụgharị anọ." },
      { objective: "O4", q: "Gịnị mere ị ga-eji gbaa mmemme gị mgbe obere mgbanwe ọ bụla gasịrị?", options: ["Iji mara mgbanwe kpatara ihe ọ bụla", "Iji na-eri batrị karịa", "N'ihi na a chọrọ ya", "Iji hichapụ blọk"], answer: 0, why: "Obere nzọụkwụ na-eme ka ọ dị mfe ịchọta nsogbu." },
      { objective: "O5", q: "Forever loop:", options: ["Na-agba otu ugboro", "Na-agbanyụ robot", "Na-emeghachi onwe ya ruo mgbe mmemme kwụsịrị", "Bụ sensọ"], answer: 2, why: "Ọ na-emeghachi ugboro ugboro." },
      { objective: "O5", q: "Idozi mperi (debugging) pụtara:", options: ["Ịchọta na idozi mperi na mmemme", "Ihichapụ ụmụ ahụhụ n'ahụ robot", "Ịzụta robot ọhụrụ", "Igbanyụ sensọ"], answer: 0, why: "Bug bụ mperi na mmemme." },
      { objective: "O5", q: "Robot gị anaghị akwụsị na mgbidi. Kedu nke nwere ike ịbụ mperi ahụ?", options: ["Robot ahụ nwere agba ezighi ezi", "Ihuenyo ahụ na-enwu nke ukwuu", "Playground ahụ mara mma nke ukwuu", "Nlele sensọ ahụ dị n'èzí loop ma ọ bụ na-eji anya ezighi ezi"], answer: 3, why: "Ebe ezighi ezi ma ọ bụ ọnụọgụ ezighi ezi na nlele sensọ bụ mperi a na-ahụkarị." },
      { objective: "O6", q: "Kedu nke bụ ezi ọrụ gbasara robot?", options: ["Onye robot na-agba afa", "Teknịshan robot", "Naanị onye na-ete sensọ agba", "Ọ dịghị nke dị"], answer: 1, why: "Teknịshan na-etinye, na-elekọta ma na-arụzi robot." },
      { objective: "O6", q: "Cobot bụ:", options: ["Naanị robot na-esi nri", "Robot e mere ka ọ rụọ ọrụ nso ndị mmadụ", "Robot mebiri emebi", "Robot na-enweghị sensọ"], answer: 1, why: "E wuru robot na-arụkọ ọrụ ka ha rụọ ọrụ n'akụkụ ndị mmadụ." },
      { objective: "O6", q: "Ị hụrụ aka robot na-arụ ọrụ ọsọ ọsọ n'azụ ahịrị a kara akara. Gịnị ka ị ga-eme?", options: ["Banye ka ị lee nso", "Metụ ya aka ka ị nwalee ya", "Gbanyụọ sensọ ya", "Nọrọ n'èzí ebe a kara akara ma gbasoo iwu nchekwa nke ebe ahụ"], answer: 3, why: "Ebe a kara akara na-eme ka ndị mmadụ ghara ịnọ n'ụzọ robot ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [1, 3, 4, 6, 7, 9, 12, 15, 16, 19]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Mmemme square", objective: "O4", notYet: "Robot ahụ anaghị aga n'ụdị square, ma ọ bụ mmemme ahụ enweghị loop.", meets: "Blọk repeat na-eme ka robot ahụ gaa n'ụdị square nke na-akwụsị nso mmalite.", exceeds: "E gbanwere anya na ntụgharị ka square ahụ dị mma ma hara nhata." },
      { name: "Mmemme na-ezere mgbidi", objective: "O5", notYet: "Robot ahụ na-akụ mgbidi ma ọ bụ anaghị emegharị ọzọ.", meets: "Forever loop nwere if-then-else: ọ na-akwụsị ma tụgharịa na mgbidi, wee gaa n'ihu.", exceeds: "Ọ na-arụ ọrụ site n'ebe mmalite karịrị otu na playground ahụ." },
      { name: "Ịnwale na idozi mperi", objective: "O5", notYet: "Achọtaghị ma ọ bụ dozie mperi ọ bụla.", meets: "A chọtara ma dozie opekata mpe otu mperi site n'ịgbanwe otu ihe n'otu oge.", exceeds: "Nwere ike ịkọwa ihe kpatara mperi ahụ na otu e si chọta ya." },
      { name: "Atụmatụ tupu koodu", objective: "O3", notYet: "Enweghị atụmatụ e dere ede, ma ọ bụ nzọụkwụ dị ka \"gaa ntakịrị\".", meets: "Atụmatụ n'okwu dị mfe nwere nzọụkwụ doro anya, loop na if-then.", exceeds: "E gafere atụmatụ ahụ n'akwụkwọ ma dozie ya tupu e dee koodu." },
      { name: "Akọwara ịhụ, iche, ime", objective: "O1", notYet: "Ahịrịokwu atọ ahụ adịghị ma ọ bụ ha akpọghị aha sensọ.", meets: "Ahịrịokwu atọ na-ekwu ihe robot ahụ na-ahụ, otu o si ekpebi na otu o si eme ihe.", exceeds: "Ọ na-ekwukwa ma robot ahụ na-eji AI ma ọ bụ iwu dị mfe, na ihe kpatara ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe sonyere na klọb robot, klas ide koodu ma ọ bụ mmemme STEM n'ime ụbọchị 60",
      "Ndị na-amụ ihe malitere ihe ọmụmụ teknụzụ Koach Learn ọzọ n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha nwere mmasị n'ụzọ teknịshan robot, ide mmemme ma ọ bụ injinia (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa, Chromebook ma ọ bụ tablet nwere web browser na ịntanetị",
      "Ngwa robot mebere emebe n'efu dị ka VEXcode VR (vr.vex.com), ma ọ bụ nke ụlọ akwụkwọ ma ọ bụ ọba akwụkwọ na-ahọrọ",
      "Akwụkwọ na mkpịsị ode maka algorithm na flowchart",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke: nkuzi, omume ide koodu, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; gosi blọk mbụ ndị ahụ n'ihuenyo ndị niile na-ahụ.",
      "Mee ka ndị na-amụ ihe mee algorithm dị ka egwuregwu: otu na-agụ nzọụkwụ, onye ọzọ na-agbaso ha kpọmkwem, iji gosi ihe mere nzọụkwụ ga-eji doo anya.",
      "Kewaa ndị na-amụ ihe abụọ abụọ maka idozi mperi: otu na-agba mmemme ahụ, onye nke ọzọ na-ele anya maka mperi.",
      "Ọ bụrụ na unu na-eleta ebe nwere ezi robot, gbasoonụ iwu nchekwa nke ebe ahụ ma nọnyere onye na-eduzi unu mgbe niile.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
