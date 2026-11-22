"use strict";

// Koach Learn course (Igbo translation of youth/youth-ai-video.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-video-ig",
  lang: "ig",
  translationOf: "youth-ai-video",
  category: "Youth",
  name: "Iji AI Mepụta Vidiyo",
  skills: "Iji AI ede obere script, Ime storyboard, Iji ekwentị see vidiyo, Ịhazi vidiyo n'ngwa nhazi n'efu, Itinye captions na egwu n'ụzọ kwesịrị ekwesị, Ikesa n'enweghị nsogbu",
  outcome: "ịhazi, ise na ịhazigharị vidiyo nke sekọnd 30 ruo 60 (dị ka mgbasa ozi maka otu klọb ma ọ bụ mmemme n'ụlọ akwụkwọ) site n'iji AI nyere aka na script, storyboard na captions, na ikike site n'aka onye ọ bụla nọ na vidiyo, egwu e kwere gị iji, na akara eziokwu n'ihe ọ bụla AI mere.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nọ n'afọ iri na ụma chọrọ ime vidiyo ka mma maka ọrụ ụlọ akwụkwọ, klọb, otu egwuregwu, otu egwu ma ọ bụ ọwa nke ha. Ekwentị na ngwa nhazi vidiyo n'efu ezuola.",
    "Ị ga-eji ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini chepụta echiche ma dee obere script, gbanwee ya ka ọ bụrụ storyboard, see ya n'ezigbo ìhè na ụda, hazie ya n'ngwa nhazi n'efu dị ka CapCut ma ọ bụ Canva, tinye captions, ma kesaa ya n'enweghị nsogbu.",
    "Ngwa vidiyo na ngwa AI nwere afọ kacha nta, ụfọdụ chọkwara akaụntụ, ya mere gụọ iwu ngwa ọ bụla, gbasoo iwu ụlọ akwụkwọ gị gbasara AI na ise vidiyo, ma tinye nne na nna ma ọ bụ onye nlekọta gị mgbe ị na-edebanye aha. Nkuzi ọ bụla na-ejedebe n'ọrụ \"Nwalee ya ugbu a\", nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ a."
  ],
  finalTask: "Mee vidiyo nke sekọnd 30 ruo 60 na-akwado otu klọb, otu egwuregwu, mmemme ma ọ bụ ihe ị na-eche banyere n'ụlọ akwụkwọ. Jiri AI nyere aka dee script na storyboard, see opekata mpe shot anọ na ikike site n'aka onye ọ bụla nọ na vidiyo, hazie ya n'ngwa nhazi n'efu, tinye captions na egwu e kwere gị iji, tinye akara n'ihe ọ bụla AI mere, ma bupụta ya (export).",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nọ n'afọ iri na ụma chọrọ ime vidiyo ka mma maka ọrụ ụlọ akwụkwọ, klọb, otu egwuregwu, otu egwu ma ọ bụ ọwa nke ha.",
    startingPoint: "Ha na-ese ma na-ekiri obere vidiyo n'ekwentị ha kwa ụbọchị. Ọ bụ mmadụ ole na ole na-eji script ma ọ bụ storyboard eme atụmatụ, na-achịkwa ìhè na ụda, na-ehazi nke ọma, ma ọ bụ maara iwu gbasara ikike ise mmadụ, copyright egwu na itinye akara n'ihe AI mere.",
    gap: "Vidiyo na-enweghị atụmatụ na-atụfu ndị na-ekiri n'ime sekọnd ole na ole, ndị e mere n'akpachaghị anya nwere ike iji egwu n'enweghị ikike, see ndị kwuru mba, ma ọ bụ gbasaa vidiyo adịgboroja AI mere nke na-emerụ mmadụ ahụ. Ndị na-eto eto kwesịrị ịhazi, ise na ịhazigharị obere vidiyo nke ọma ma na-eji AI n'eziokwu ma na-asọpụrụ ndị ọzọ.",
    constraints: [
      "Oke afọ na iwu akaụntụ maka ngwa vidiyo na AI; nne na nna ma ọ bụ onye nlekọta na-esonye n'ịdebanye aha",
      "Iwu ụlọ akwụkwọ gbasara AI na ise ụmụ akwụkwọ; a pụghị ise ụfọdụ ụmụ akwụkwọ ma ọ bụ tinye ha n'ịntanetị",
      "Ngwaọrụ: ekwentị na ngwa nhazi n'efu dị ka CapCut ma ọ bụ Canva",
      "Copyright na nkwenye: naanị egwu na vidiyo e kwere; ikike site n'aka onye ọ bụla nọ na vidiyo",
      "Nzuzo mgbe ị na-ekesa: enweghị aha zuru ezu, adreesị ụlọ akwụkwọ ma ọ bụ usoro oge n'ozi ọha"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe ị na-eche maka vidiyo ị na-ekiri na nke ị na-eme", action: "ịkọwa otu AI si enyere aka na vidiyo, ihe deepfake bụ, na iwu ị ga-agbaso", standard: "ma nweta opekata mpe 3 n'ime 4 ziri ezi" },
    { id: "O2", condition: "Mgbe e nyere gị isiokwu, ndị na-ekiri na ogologo oge", action: "iji AI dee script nwere hook, obere ihe nkiri na call to action, ma gbanwee ya ka ọ bụrụ storyboard", standard: "n'ide ya ọzọ n'okwu nke gị, ilele eziokwu ya, na ime ka oge ya niile dabara ogologo ahụ" },
    { id: "O3", condition: "Site n'iji ekwentị", action: "ise shot kwụsiri ike, nwere ezigbo ìhè na ụda doro anya", standard: "na ikike site n'aka onye ọ bụla nọ na vidiyo, na-agbasokwa iwu ụlọ akwụkwọ gbasara ise vidiyo" },
    { id: "O4", condition: "Site n'iji ngwa nhazi vidiyo n'efu", action: "ibubata, ibelata na ịhazi usoro clips gị ma tinye aha na call to action dị ka ederede", standard: "na-agbaso storyboard, n'enweghị oge efu" },
    { id: "O5", condition: "Tupu vidiyo gị agwụ", action: "itinye captions ziri ezi, egwu e kwere gị iji, na akara n'ihe ọ bụla AI mere", standard: "na-elele caption ọ bụla, na-enweghị ihu ma ọ bụ olu ezigbo mmadụ AI mere n'enweghị ikike" },
    { id: "O6", condition: "Mgbe nhazi ahụ gwụrụ", action: "ịnata echiche ndị ọzọ, ibupụta vidiyo ahụ ma kesaa ya n'enweghị nsogbu", standard: "na-edebe ozi gbasara onwe gị na nzuzo, na-ekwukwa otu i siri jiri AI n'ọrụ ụlọ akwụkwọ" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi na ise vidiyo",
      lessons: [
        {
          objectives: ["O1"],
          title: "Otu AI si enyere aka na vidiyo, na iwu ndị bụ isi",
          minutes: 4,
          goal: "Kpọọ aha ụzọ AI si enyere aka na vidiyo na iwu ị ga-agbaso.",
          text: [
            "AI dị ebe niile n'ime vidiyo: ngwa enyemaka na-enyere aka chepụta echiche na ide script, ngwa nhazi na-eme captions n'onwe ha ma ọ bụ na-ewepụ mkpọtụ dị n'azụ, na ngwa na-emepụta foto ma ọ bụ vidiyo site na prompt ederede.",
            "Mmadụ nwekwara ike iji AI mee ihe ọjọọ. Deepfake bụ vidiyo ma ọ bụ olu adịgboroja na-eme ka ọ dị ka ezigbo mmadụ kwuru ma ọ bụ mere ihe ọ na-ekwughị ma ọ bụ na-emeghị. Ime deepfake nke ụmụ klas gị, ndị nkuzi ma ọ bụ ndị a ma ama nwere ike imerụ mmadụ ahụ, mebie iwu ụlọ akwụkwọ, ma n'ebe ụfọdụ mebie iwu obodo.",
            "Iwu gị: nweta ikike site n'aka onye ọ bụla ị na-ese, jiri naanị egwu na vidiyo e kwere gị iji, tinye akara n'ihe ọ bụla AI mere, lelee afọ kacha nta nke ngwa ọ bụla, ma gbasoo iwu ụlọ akwụkwọ gị."
          ],
          words: [["Script", "okwu na omume e mere atụmatụ maka vidiyo."], ["Deepfake", "vidiyo ma ọ bụ olu adịgboroja na-eme ka ọ dị ka ezigbo mmadụ kwuru ma ọ bụ mere ihe ọ na-emeghị."], ["AI mere (AI-generated)", "ihe ngwa AI mepụtara, ọ bụghị ihe mmadụ sere ma ọ bụ see na vidiyo."]],
          slides: [
            { title: "AI n'ime ime vidiyo", bullets: ["Ichepụta echiche na ide script", "Captions na-eme onwe ha na iwepụ mkpọtụ", "Foto ma ọ bụ vidiyo site na prompt"] },
            { title: "Iji ya mee ihe ọjọọ: deepfake", bullets: ["Ime ka ezigbo mmadụ dị ka o kwuru ma ọ bụ mere ihe", "Ọ na-emerụ mmadụ ahụ ma mebie iwu ụlọ akwụkwọ", "Emela ya mgbe ọ bụla"] },
            { title: "Iwu ndị bụ isi", bullets: ["Ikike site n'aka onye ọ bụla nọ na vidiyo", "Egwu na vidiyo e kwere gị iji", "Tinye akara n'ihe AI mere", "Lelee afọ ngwa na iwu ụlọ akwụkwọ"] }
          ],
          tryIt: "Họrọ isiokwu vidiyo ikpeazụ gị: otu klọb, otu egwuregwu, mmemme ma ọ bụ ihe ị na-eche banyere n'ụlọ akwụkwọ ma ọ bụ n'obodo gị. Dee otu ahịrịokwu banyere ndị vidiyo ahụ bụ maka ha na ihe ị chọrọ ka ha mee mgbe ha kirichara ya.",
          youCanNow: "ịkpọ aha ụzọ AI si enyere aka na vidiyo na ịkọwa iwu maka iji ya n'ụzọ ziri ezi.",
          quickCheck: [
            { objective: "O1", q: "Kedu nke n'ime ndị a bụ ụzọ bara uru e si eji AI na vidiyo?", options: ["Ime vidiyo adịgboroja nke onye nkuzi", "Iwepụ mkpọtụ dị n'azụ na ndekọ", "Iṅomi ihu mmadụ n'ajụghị ya", "Izu egwu"], answer: 1, why: "AI na-enyere aka na script, captions na iwepụ mkpọtụ; vidiyo adịgboroja nke ezigbo mmadụ bụ iji ya mee ihe ọjọọ." },
            { objective: "O1", q: "Enyi gị chọrọ ime deepfake ọchị nke onye isi ụlọ akwụkwọ maka vidiyo klọb unu. Gịnị ka ị ga-eme?", options: ["Mee ya ma gosi naanị ndị enyi", "Mee ya ma mee ka ihu ya ghara ịdị nkọ", "Tinye ya n'ịntanetị n'enweghị akara", "Kwuo mba, n'ihi na ọ nwere ike imerụ mmadụ ahụ ma mebie iwu"], answer: 3, why: "Deepfake nke ezigbo mmadụ nwere ike imerụ ha ahụ, mebie iwu ụlọ akwụkwọ, ma n'ebe ụfọdụ mebie iwu obodo." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji AI ede script na storyboard",
          minutes: 5,
          goal: "Jiri AI dee obere script ma gbanwee ya ka ọ bụrụ storyboard nke shot n'otu n'otu.",
          text: [
            "Obere vidiyo chọrọ hook n'ime sekọnd 3 mbụ, etiti doro anya, na njedebe na-agwa ndị mmadụ ihe ha ga-eme, dị ka \"Bịa sonye anyị na Tọzdee n'Ime Ụlọ 12\".",
            "Rịọ AI ka o dee ihe mbụ (draft): \"Dee script nke sekọnd 45 maka vidiyo na-akpọ ụmụ akwụkwọ ọhụrụ ka ha sonye na klọb robotics anyị. Tinye hook, obere ihe nkiri 3 na call to action. Jiri okwu nkịtị ndị na-eto eto.\" Wee dee ya ọzọ ka ọ dị ka okwu gị na nke klọb gị.",
            "Storyboard bụ atụmatụ maka shot ọ bụla: ihe anyị na-ahụ, ihe anyị na-anụ, na ogologo oge ya. Rịọ AI ka ọ gbanwee script gị ka ọ bụrụ tebụl nwere kọlụm ndị ahụ. Ị nwekwara ike ise ihe osise mmadụ dị mfe."
          ],
          steps: ["Gwa AI isiokwu, ndị na-ekiri, ogologo oge na ụdị olu.", "Rịọ maka hook, obere ihe nkiri 3 na call to action.", "Dee ya ọzọ n'okwu nke gị ma lelee eziokwu ya (ụbọchị, ime ụlọ, oge).", "Rịọ AI ka ọ gbanwee ya ka ọ bụrụ tebụl storyboard: shot, ihe anyị na-ahụ, ihe anyị na-anụ, sekọnd.", "Hụ na oge ya niile dabara ogologo vidiyo gị."],
          words: [["Hook", "sekọnd ole na ole mbụ na-adọta uche ndị mmadụ."], ["Call to action", "ahịrị na-agwa ndị na-ekiri ihe ha ga-eme ọzọ."], ["Storyboard", "atụmatụ vidiyo, shot n'otu n'otu."], ["Shot", "otu akụkụ vidiyo e sere n'akwụsịghị."]],
          slides: [
            { title: "Ụdị obere vidiyo", bullets: ["Hook n'ime sekọnd 3 mbụ", "Etiti doro anya", "Call to action na njedebe"] },
            { title: "Rịọ AI maka ihe mbụ", bullets: ["Isiokwu, ndị na-ekiri, ogologo oge, ụdị olu", "Wee dee ya ọzọ n'okwu nke gị", "Lelee ụbọchị, oge na ebe"] },
            { title: "Storyboard", bullets: ["Nọmba shot", "Ihe anyị na-ahụ na ihe anyị na-anụ", "Sekọnd ole"] }
          ],
          tryIt: "Jiri ngwa enyemaka AI dee script maka isiokwu vidiyo gị, dee ya ọzọ n'okwu nke gị, ma gbanwee ya ka ọ bụrụ storyboard nwere shot 4 ruo 6 dabara oge gị.",
          youCanNow: "ide obere script vidiyo na storyboard site n'enyemaka AI.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ storyboard?", options: ["Ebe a na-ede nkọwa n'okpuru vidiyo", "Faịlụ ikpeazụ e bupụtara", "Atụmatụ maka shot ọ bụla: ihe anyị na-ahụ, ihe anyị na-anụ na ogologo oge ya", "Ndepụta egwu"], answer: 2, why: "Storyboard na-ahazi shot ọ bụla tupu i see ya." },
            { objective: "O2", q: "Script AI dere kwuru na klọb gị na-ezukọ n'Ime Ụlọ 14, mana ị maghị nke ọma. Gịnị ka ị ga-eme?", options: ["Lelee ime ụlọ, ụbọchị na oge n'onwe gị tupu i see vidiyo", "Hapụ ya; AI na-adịkarị mma", "Ekwula maka ime ụlọ ahụ na vidiyo", "Jụọ AI ma o ji n'aka"], answer: 0, why: "AI nwere ike ịkọ ụbọchị, oge ma ọ bụ ebe n'ụzọ ezighi ezi, ya mere lelee eziokwu ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji ekwentị ese vidiyo",
          minutes: 5,
          goal: "See shot kwụsiri ike, nwere ezigbo ìhè na ụda doro anya, na ikike.",
          text: [
            "Ìhè: chee ihu n'ebe ìhè dị, dị ka windo, ka ìhè dakwasị ihu onye ahụ, ọ bụghị n'azụ ya. Ịkwụsi ike: jiri aka abụọ jide ekwentị, dabere n'ihe, ma ọ bụ jiri ihe njide. Tụgharịa ekwentị n'akụkụ ma ọ bụ debe ya ọtọ ka o dabara ebe ị ga-etinye ya.",
            "Ụda dị mkpa karịa ka ndị mmadụ chere. See vidiyo nso onye na-ekwu okwu n'ebe dị jụụ, ebe fan na ọnụ ụzọ ndị mmadụ na-agafe na-adịghị. Dekọọ nnwale sekọnd 3 ma gee ya ntị tupu ezigbo ise.",
            "Jụọ onye ọ bụla ị na-ese ma ọ dị mma, ma gwa ha ebe a ga-egosi vidiyo ahụ. Iwu ụlọ akwụkwọ anaghị ekwe ka e see ụfọdụ ụmụ akwụkwọ ma ọ bụ tinye ha n'ịntanetị, ya mere jụọ onye nkuzi gị ma ọ bụ onye ndụmọdụ klọb. Esela ndị mmadụ n'ebe nzuzo ma ọ bụ onye ọ bụla kwuru mba."
          ],
          steps: ["Mee ka ìhè chee onye ahụ ihu.", "Jiri aka abụọ ma ọ bụ ihe njide mee ka ekwentị kwụsie ike.", "Họrọ n'akụkụ ma ọ bụ ọtọ ka o dabara ebe ị ga-etinye ya.", "Dekọọ obere nnwale ụda ma gee ya ntị.", "Nweta ikike site n'aka onye ọ bụla nọ na vidiyo, ma gbasoo iwu ụlọ akwụkwọ gbasara ise vidiyo."],
          words: [["Take", "otu nnwale ise otu shot."], ["Framing", "ihe dị n'ime oke foto ahụ."]],
          slides: [
            { title: "Ìhè na ịkwụsi ike", bullets: ["Chee ihu n'ebe ìhè dị", "Aka abụọ ma ọ bụ ihe njide", "N'akụkụ ma ọ bụ ọtọ ka o dabara ebe ị ga-etinye ya"] },
            { title: "Ụda", bullets: ["Bịaruo onye na-ekwu okwu nso", "Ebe dị jụụ, enweghị fan ma ọ bụ ọnụ ụzọ", "Mee nnwale sekọnd 3"] },
            { title: "Ikike", bullets: ["Jụọ onye ọ bụla nọ na vidiyo", "Kwuo ebe a ga-egosi ya", "Gbasoo iwu ụlọ akwụkwọ gbasara ise vidiyo"] }
          ],
          tryIt: "See shot abụọ mbụ site na storyboard gị. Bụrụ ụzọ mee nnwale ụda, nweta ikike site n'aka onye ọ bụla nọ na vidiyo, ma see shot ọ bụla opekata mpe ugboro abụọ.",
          youCanNow: "ise shot kwụsiri ike, nwere ezigbo ìhè na ụda doro anya, na ikike site n'aka ndị nọ na vidiyo.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị ga-eji dekọọ obere nnwale ụda tupu ezigbo ise?", options: ["Iji mefuo batrị", "Ime ka vidiyo ahụ dị ogologo", "Ilele ìhè", "Ịnụ ma ụda ahụ doro anya tupu i see"], answer: 3, why: "Nnwale sekọnd 3 na-enyere gị aka ịhụ mkpọtụ ma ọ bụ ụda dị ala tupu ezigbo ise." },
            { objective: "O3", q: "Onye ndụmọdụ klọb gị kwuru na iwu ụlọ akwụkwọ anaghị ekwe ka e see otu nwa akwụkwọ. Gịnị ka ị ga-eme?", options: ["See ya site n'azụ", "See ya ma mee ka ihu ya ghara ịdị nkọ emesịa", "Hazie shot ndị ahụ ka nwa akwụkwọ ahụ ghara ịnọ na vidiyo", "Leghara iwu ahụ anya"], answer: 2, why: "Gbasoo iwu ụlọ akwụkwọ gbasara ise vidiyo, esekwala onye ọ bụla a na-anaghị ekwe ka e see ma ọ bụ na-achọghị ka e see ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi na ise vidiyo",
        questions: [
          { objective: "O1", q: "Gịnị bụ deepfake?", options: ["Vidiyo ma ọ bụ olu adịgboroja na-eme ka ọ dị ka ezigbo mmadụ kwuru ma ọ bụ mere ihe ọ na-emeghị", "Ụdị igwefoto", "Ngwa nhazi n'efu", "Njedebe vidiyo"], answer: 0, why: "Deepfake na-etinye okwu ma ọ bụ omume na-emetụbeghị n'ezigbo mmadụ." },
          { objective: "O2", q: "Gịnị ka sekọnd 3 mbụ nke obere vidiyo kwesịrị ime?", options: ["Igosi aha ndị mere ya", "Ịgbachi nkịtị", "Iji hook dọta uche", "Igosi ihuenyo efu"], answer: 2, why: "Hook na-eme ka ndị mmadụ nọgide na-ekiri." },
          { objective: "O2", q: "AI dere script gị. Gịnị ka ị ga-eme ọzọ?", options: ["Tinye ya n'ịntanetị n'agbanweghị ya", "Dee ya ọzọ n'okwu nke gị ma lelee eziokwu ya", "Hichapụ ya", "Tinye adreesị ụlọ gị"], answer: 1, why: "Ị na-eme ka ọ bụrụ nke gị ma hụ na ụbọchị na ebe ziri ezi." },
          { objective: "O3", q: "Ebee ka ìhè kwesịrị ịdị mgbe ị na-ese mmadụ?", options: ["N'azụ ya", "Ebe ọ bụla", "Naanị n'ala", "N'ihu ya, dị ka mgbe ọ chere windo ihu"], answer: 3, why: "Ìhè n'ihu na-eme ka a hụ ya nke ọma." },
          { objective: "O3", q: "Nwa klas gị kwuru na ọ chọghị ịnọ na vidiyo gị. Gịnị ka ị ga-eme?", options: ["See ya n'agbanyeghị", "See ya site n'ebe dị anya", "Esela ya", "Mee ka ihu ya ghara ịdị nkọ emesịa n'ajụghị ya"], answer: 2, why: "See naanị ndị kwenyere." }
        ]
      }
    },
    {
      name: "Isi 2: Ịhazi na ikesa vidiyo",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi vidiyo n'ngwa nhazi n'efu",
          minutes: 6,
          goal: "Bubata clips, belata ha, hazie usoro ha ma tinye ederede.",
          text: [
            "Ngwa nhazi n'efu dị ka CapCut na Canva na-arụ ọrụ na ekwentị na n'ime web browser. Menu ha na-agbanwekarị, ya mere chọọ ihe ndị a: malite ọrụ ọhụrụ (new project), bubata ma ọ bụ bulite clips gị, belata (bepụ mmalite na njedebe), kewaa clip, dọrọ clips ka ha nọrọ n'usoro, ma tinye ederede.",
            "Gbasoo storyboard gị. Bee shot ọ bụla nke ọma: malite obere tupu omume ahụ ma kwụsị ozugbo o mechara. Oge efu na-eme ka ndị mmadụ gafere vidiyo gị.",
            "Tinye aha na mmalite na call to action gị dị ka ederede na njedebe. Mee ka ederede ahụ buru ibu, dị mkpụmkpụ, ma nọrọ na ihuenyo ogologo oge zuru ịgụ ya ugboro abụọ."
          ],
          steps: ["Malite ọrụ ọhụrụ ma bubata clips gị.", "Hazie clips ahụ n'usoro storyboard.", "Belata mmalite na njedebe nke clip ọ bụla.", "Tinye aha na call to action dị ka ederede.", "Kirie ya site na mmalite ruo na njedebe ma dozie ihe ọ bụla na-aga nwayọọ."],
          words: [["Ibubata (import)", "iweta clips gị n'ime ngwa nhazi."], ["Ibelata (trim)", "ibepụ mmalite ma ọ bụ njedebe nke clip."], ["Timeline", "ahịrị dị n'ngwa nhazi ebe clips na-anọ n'usoro."]],
          slides: [
            { title: "Ngwa nhazi n'efu", bullets: ["CapCut ma ọ bụ Canva na ekwentị ma ọ bụ weebụ", "Chọọ: import, trim, split, text"] },
            { title: "Bee nke ọma", bullets: ["Malite obere tupu omume ahụ", "Kwụsị ozugbo o mechara", "Enweghị oge efu"] },
            { title: "Ederede na ihuenyo", bullets: ["Aha na mmalite", "Call to action na njedebe", "Buru ibu, dị mkpụmkpụ, dị mfe ịgụ"] }
          ],
          tryIt: "Bubata shot gị niile, hazie ha n'usoro storyboard, belata nke ọ bụla, ma tinye aha na call to action na njedebe.",
          youCanNow: "ịhazi clips ka ha bụrụ vidiyo dị nkenke, nọ n'usoro, nwere aha na call to action.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ọ pụtara ibe shot \"nke ọma\" (tight)?", options: ["Ime ka ederede dị obere nke ukwuu", "Ịmalite obere tupu omume ahụ ma kwụsị ozugbo o mechara", "Ime ka ihu dị nso", "Iji naanị otu shot"], answer: 1, why: "Ibe nke ọma na-ewepụ oge efu na-eme ka ndị na-ekiri gafere vidiyo." },
            { objective: "O4", q: "Ederede call to action gị na-agafe ngwa ngwa nke na a pụghị ịgụ ya. Gịnị ka ị ga-eme?", options: ["Mee ka ederede ahụ dị obere", "Hichapụ ya", "Tinyekwuo okwu", "Mee ka ọ nọrọ na ihuenyo ogologo oge zuru ịgụ ya ugboro abụọ"], answer: 3, why: "Ederede na ihuenyo kwesịrị ibu ibu, dị mkpụmkpụ, ma nọrọ ogologo oge zuru ịgụ ya ugboro abụọ." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Captions, egwu na foto AI, n'ụzọ ziri ezi",
          minutes: 5,
          goal: "Tinye captions ziri ezi, egwu e kwere gị iji, na akara eziokwu n'ihe AI mere.",
          text: [
            "Ọtụtụ ndị na-ekiri vidiyo n'enweghị ụda, captions na-enyekwa ndị ntị chiri ma ọ bụ ndị na-anụghị ihe nke ọma aka. Ọtụtụ ngwa nhazi nwere ike iji AI mee captions n'onwe ha. Gụọ ha mgbe niile ma dozie okwu ezighi ezi, karịsịa aha.",
            "Copyright na-echebe egwu. Dị ka U.S. Copyright Office (ụlọ ọrụ gọọmentị US na-ahụ maka copyright) si kwuo, a na-echebe ọrụ ozugbo e mepụtara ya ma dekọọ ya, ya mere a na-echebe ọtụtụ egwu ị na-anụ. Jiri egwu sitere n'ọba egwu nke ngwa nhazi ahụ dị ka iwu ya si dị, egwu i mere, ma ọ bụ egwu nwere ikike doro anya. Ụlọ ọrụ ịntanetị nwere ike imenyụ ụda ma ọ bụ wepụ vidiyo ji egwu n'enweghị ikike.",
            "Ọ bụrụ na i tinye foto ma ọ bụ vidiyo AI mere, tinye akara na ya, dịka ọmụmaatụ \"Foto AI mere\" na ihuenyo ma ọ bụ na nkọwa. Ejila AI tinye ihu ma ọ bụ olu ezigbo mmadụ na vidiyo gị n'enweghị ikike doro anya site n'aka ya."
          ],
          steps: ["Gbanye captions na-eme onwe ha ma ọ bụrụ na ngwa nhazi gị nwere ya.", "Gụọ caption ọ bụla ma dozie mperi, karịsịa aha.", "Họrọ egwu site n'ọba egwu ngwa nhazi ahụ, nke gị, ma ọ bụ nke nwere ikike.", "Tinye akara n'foto ma ọ bụ vidiyo ọ bụla AI mere.", "Ejila ihu ma ọ bụ olu ezigbo mmadụ AI mere n'enweghị ikike."],
          words: [["Captions", "okwu na ihuenyo na-egosi ihe a na-ekwu."], ["Copyright", "ikike iwu nke onye mepụtara ihe nwere ịchịkwa otu e si eṅomi ọrụ ya."], ["Akara (label)", "obere ozi na-ekwu na e ji AI mee ihe ahụ."]],
          slides: [
            { title: "Captions", bullets: ["Ọtụtụ na-ekiri n'enweghị ụda", "Ọ na-enyere ndị ntị chiri ma ọ bụ ndị na-anụghị nke ọma aka", "Dozie mperi captions na-eme onwe ha"] },
            { title: "Egwu e kwere gị iji", bullets: ["Ọba egwu ngwa nhazi dị ka iwu ya si dị", "Egwu i mere", "Egwu nwere ikike doro anya"] },
            { title: "Foto AI", bullets: ["Tinye akara na ha", "Enweghị ihu ma ọ bụ olu AI nke ezigbo mmadụ n'enweghị ikike"] }
          ],
          sources: [{ name: "U.S. Copyright Office: Copyright basics FAQ", url: "https://www.copyright.gov/help/faq/faq-general.html" }],
          tryIt: "Tinye captions na vidiyo gị ma dozie mperi ọ bụla. Tinye egwu e kwere gị iji. Ọ bụrụ na i jiri foto ma ọ bụ vidiyo ọ bụla AI mere, tinye akara.",
          youCanNow: "itinye captions ziri ezi, ịhọrọ egwu e kwere gị iji, na itinye akara eziokwu n'ihe AI mere.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ị ga-eji gụọ captions na-eme onwe ha tupu i tinye vidiyo n'ịntanetị?", options: ["Captions AI nwere ike ide okwu ezighi ezi, karịsịa aha", "Captions na-adị mma mgbe niile", "Ime ka vidiyo ahụ dị ogologo", "Captions abụghị ihe dị mkpa"], answer: 0, why: "Captions na-eme onwe ha nwere ike ịnụ okwu n'ụzọ ezighi ezi, ya mere gụọ ma dozie ha." },
            { objective: "O5", q: "Ị chọrọ iji egwu a ma ama na mgbasa ozi klọb gị. Gịnị ka ị ga-eme?", options: ["Jiri ya ma tụọ anya na ọ dịghị onye ga-ahụ", "Jiri ya n'olu dị ala n'azụ", "Họrọ egwu site n'ọba egwu ngwa nhazi, nke gị, ma ọ bụ nke nwere ikike", "Mee ka ọ gaa ngwa ngwa ka ọ dị iche"], answer: 2, why: "A na-echebe ọtụtụ egwu; jiri egwu e kwere ma ọ bụghị ya ụlọ ọrụ ahụ nwere ike imenyụ ụda ma ọ bụ wepụ vidiyo ahụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ilele, ibupụta na ikesa n'enweghị nsogbu",
          minutes: 5,
          goal: "Nata echiche ndị ọzọ, bupụta vidiyo gị ma kesaa ya n'enweghị nsogbu.",
          text: [
            "Tupu i mechaa, gosi mmadụ otu ma ọ bụ abụọ vidiyo gị ma jụọ: Hook ahụ ọ dị ike? Ọ dị ihe gbagwojuru anya? Ị maara ihe ị ga-eme na njedebe? Ị nwekwara ike ịkọwara ngwa enyemaka AI vidiyo gị ma rịọ ya ụzọ atọ ị ga-esi mee ka ọ ka mma.",
            "Bupụta vidiyo ahụ site n'iji nhọrọ export ma ọ bụ save nke ngwa nhazi ahụ. Kirie faịlụ e bupụtara ọzọ iji lelee ụda, captions na njedebe.",
            "Kesaa ya ebe klọb gị, ụlọ akwụkwọ gị na ezinụlọ gị kwenyere. Etinyela aha gị zuru ezu, adreesị ụlọ akwụkwọ na usoro oge gị n'ozi ọha. Ọ bụrụ ọrụ ụlọ akwụkwọ, gbasoo iwu AI onye nkuzi gị ma kwuo otu i siri jiri AI."
          ],
          steps: ["Gosi mmadụ otu ma ọ bụ abụọ vidiyo ahụ ma jụọ ajụjụ atọ.", "Mee mgbanwe otu ma ọ bụ abụọ.", "Bupụta vidiyo ahụ ma kirie faịlụ ahụ ọzọ.", "Kesaa ya ebe klọb gị, ụlọ akwụkwọ gị na ezinụlọ gị kwenyere.", "Debe ozi gbasara onwe gị na nzuzo ma kwuo otu i siri jiri AI n'ọrụ ụlọ akwụkwọ."],
          words: [["Echiche ndị ọzọ (feedback)", "ihe ndị ọzọ kwuru na-enyere gị aka ime ka ọ ka mma."], ["Ibupụta (export)", "ichekwa ọrụ gị dị ka faịlụ vidiyo."]],
          slides: [
            { title: "Nata echiche ndị ọzọ", bullets: ["Hook ahụ ọ dị ike?", "Ọ dị ihe gbagwojuru anya?", "Ị maara ihe ị ga-eme na njedebe?"] },
            { title: "Bupụta ma lelee", bullets: ["Jiri export ma ọ bụ save", "Kirie faịlụ ahụ ọzọ"] },
            { title: "Kesaa n'enweghị nsogbu", bullets: ["Ebe ụlọ akwụkwọ na ezinụlọ kwenyere", "Debe ozi gbasara onwe gị na nzuzo", "Kwuo otu i siri jiri AI n'ọrụ ụlọ akwụkwọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa vidiyo gị nke sekọnd 30 ruo 60 nwere script na storyboard AI nyere aka, opekata mpe shot anọ e sere na ikike, captions, egwu e kwere gị iji na akara n'ihe AI mere. Nata echiche ndị ọzọ, bupụta ya ma kesaa ya n'enweghị nsogbu.",
          youCanNow: "ịhazi, ise, ịhazigharị, ilele na ikesa obere vidiyo n'ụzọ kwesịrị ekwesị site n'enyemaka AI.",
          quickCheck: [
            { objective: "O6", q: "Gịnị mere ị ga-eji kirie faịlụ e bupụtara ọzọ?", options: ["Iji lelee na ụda, captions na njedebe pụtara nke ọma", "Iji mefuo data", "Ihichapụ ọrụ ahụ", "Ịgbanwe isiokwu"], answer: 0, why: "Ibupụta nwere ike inwe nsogbu, ya mere kirie faịlụ ikpeazụ tupu i kesaa ya." },
            { objective: "O6", q: "Onye kiri ya kwuru na ọ maghị ihe ọ ga-eme na njedebe. Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe", "Mee ka call to action doo anya karị", "Tinyekwuo egwu", "Wepụ hook"], answer: 1, why: "Echiche gbasara njedebe pụtara na call to action kwesịrị idokwu anya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịhazi na ikesa vidiyo",
        questions: [
          { objective: "O4", q: "Gịnị ka trim pụtara n'ngwa nhazi vidiyo?", options: ["Itinye egwu", "Ibepụ mmalite ma ọ bụ njedebe nke clip", "Ikesa vidiyo ahụ", "Ime captions"], answer: 1, why: "Ibelata na-ewepụ oge fọdụrụ na mmalite ma ọ bụ na njedebe." },
          { objective: "O5", q: "Captions na-eme onwe ha dere aha onye ndu klọb gị n'ụzọ ezighi ezi. Gịnị ka ị ga-eme?", options: ["Hapụ ya", "Gbanyụọ ụda", "Hichapụ vidiyo ahụ", "Dozie caption ahụ"], answer: 3, why: "Gụọ ma dozie captions na-eme onwe ha mgbe niile." },
          { objective: "O5", q: "Kedu egwu dị mma iji?", options: ["Egwu sitere n'ọba egwu ngwa nhazi dị ka iwu ya si dị", "Egwu a ma ama si na redio", "Egwu e wepụtara na saịtị vidiyo", "Egwu ọ bụla ma ọ bụrụ na i kwuo aha onye bụrụ ya"], answer: 0, why: "Egwu ọba egwu dị ka iwu ya si dị, egwu nke gị, ma ọ bụ egwu nwere ikike dị mma." },
          { objective: "O5", q: "I tinyere foto AI mere. Gịnị ka ị kwesịrị ime?", options: ["Zoo ya", "Kwuo na ọ bụ gị sere ya", "Tinye akara na AI mere ya", "Wepụ captions"], answer: 2, why: "Akara eziokwu na-agwa ndị na-ekiri ihe AI mere." },
          { objective: "O6", q: "Gịnị ka ị kwesịrị ime tupu i kesaa vidiyo ọrụ ụlọ akwụkwọ?", options: ["Tinye adreesị ụlọ akwụkwọ gị", "Zoo otu i siri jiri AI", "Ghara ikiri faịlụ e bupụtara", "Gbasoo iwu AI onye nkuzi gị ma kwuo otu i siri jiri AI"], answer: 3, why: "Ịgbaso iwu ụlọ akwụkwọ na ikwu eziokwu banyere iji AI dị mkpa." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iji AI Mepụta Vidiyo",
    questions: [
      { objective: "O1", q: "Kedu nke bụ ụzọ bara uru e si eji AI na vidiyo?", options: ["Ime captions na-eme onwe ha", "Ime vidiyo adịgboroja nke ụmụ klas", "Iṅomi fim", "Izu akaụntụ"], answer: 0, why: "Captions na-eme onwe ha bụ ihe AI bara uru a na-ahụkarị." },
      { objective: "O1", q: "Gịnị mere deepfake nke ezigbo mmadụ ji bụrụ nsogbu?", options: ["Ha dị mkpụmkpụ nke ukwuu", "Ha nwere ike imerụ mmadụ ahụ ma mebie iwu ụlọ akwụkwọ ma ọ bụ iwu obodo", "Ha enweghị ụda", "Ha chọrọ ihe njide ekwentị"], answer: 1, why: "Deepfake na-eme ka ezigbo mmadụ dị ka o mere ihe ọ na-emeghị." },
      { objective: "O1", q: "Tupu ịdebanye aha na ngwa vidiyo ma ọ bụ AI, onye nọ n'afọ iri na ụma kwesịrị:", options: ["Iji akaụntụ enyi gị toro okwu", "Ịgafe iwu ahụ n'agụghị ya", "Ilele afọ kacha nta ma tinye nne na nna ma ọ bụ onye nlekọta", "Iji ụbọchị ọmụmụ ụgha"], answer: 2, why: "Ngwa nwere oke afọ, nne na nna kwesịkwara isonye." },
      { objective: "O2", q: "Call to action bụ:", options: ["Egwu dị n'azụ", "Ntọala igwefoto", "Aha faịlụ vidiyo", "Ahịrị na-agwa ndị na-ekiri ihe ha ga-eme ọzọ"], answer: 3, why: "Ọ na-agwa ndị na-ekiri ihe ha ga-eme, dị ka isonye ma ọ bụ ịbịa." },
      { objective: "O2", q: "Kedu arịrịọ AI ga-enye ihe mbụ script kacha mma?", options: ["\"Vidiyo sekọnd 45 na-akpọ ụmụ akwụkwọ ọhụrụ na klọb robotics; hook, ihe nkiri 3, call to action; okwu nkịtị\"", "\"vidiyo\"", "\"mee ihe\"", "\"robots\""], answer: 0, why: "Ọ na-enye isiokwu, ndị na-ekiri, ogologo oge, ụdị na olu." },
      { objective: "O2", q: "Storyboard na-egosi:", options: ["Naanị egwu", "Shot ọ bụla: ihe anyị na-ahụ, na-anụ na ogologo oge ya", "Ọnụahịa ngwa nhazi", "Ihe ndị na-ekiri kwuru"], answer: 1, why: "Storyboard bụ atụmatụ shot n'otu n'otu." },
      { objective: "O2", q: "Gịnị mere ị ga-eji lelee eziokwu dị na script AI dere?", options: ["AI anaghị eme mperi", "Eziokwu adịghị mkpa na vidiyo", "AI nwere ike ịkọ ụbọchị, oge ma ọ bụ ebe n'ụzọ ezighi ezi", "Ọ na-eme ka vidiyo ahụ dị ogologo"], answer: 2, why: "AI nwere ike ime mperi; ị na-elele nkọwa ya." },
      { objective: "O3", q: "Iji mee ka ekwentị gị kwụsie ike, ị nwere ike:", options: ["Ịfegharị ya", "Iji otu mkpịsị aka jide ya", "Ise vidiyo mgbe ị na-agba ọsọ", "Iji aka abụọ, dabere n'ihe, ma ọ bụ jiri ihe njide"], answer: 3, why: "Shot kwụsiri ike na-ele anya ka nke ndị ọkachamara." },
      { objective: "O3", q: "Ebe kacha mma iji dekọọ mmadụ na-ekwu okwu bụ:", options: ["Ebe dị jụụ, nso onye na-ekwu okwu", "N'akụkụ fan na-eme mkpọtụ", "Ọnụ ụzọ ndị mmadụ jupụtara", "N'ofe ụlọ egwuregwu dị anya"], answer: 0, why: "Ebe dị jụụ na ịbịaru nso na-enye ụda doro anya." },
      { objective: "O3", q: "Tupu i see ndị mmadụ maka vidiyo klọb ụlọ akwụkwọ, ị kwesịrị:", options: ["Ise ha na nzuzo", "Ịjụ ikike ma lelee iwu ụlọ akwụkwọ gbasara ise vidiyo", "Ịjụ naanị mgbe i tinyechara ya n'ịntanetị", "Ise ha n'ebe nzuzo"], answer: 1, why: "Ikike na iwu ụlọ akwụkwọ na-ebu ụzọ." },
      { objective: "O4", q: "Import n'ngwa nhazi vidiyo pụtara:", options: ["Itinye vidiyo ahụ n'ịntanetị", "Ihichapụ clips", "Iweta clips gị n'ime ngwa nhazi", "Itinye captions"], answer: 2, why: "Ibubata na-eweta clips ka ị hazie ha." },
      { objective: "O4", q: "Gịnị mere ị ga-eji bee shot ọ bụla nke ọma?", options: ["Iji ebe nchekwa karịa", "Ime ka vidiyo ahụ dị ogologo", "Izo captions", "Oge efu na-eme ka ndị na-ekiri gafere vidiyo"], answer: 3, why: "Ibe nke ọma na-ejide uche ndị mmadụ." },
      { objective: "O4", q: "Ederede na ihuenyo kwesịrị:", options: ["Ibu ibu, dị mkpụmkpụ, ma nọrọ na ihuenyo ogologo oge zuru ịgụ ya", "Ịdị obere ma na-agafe ngwa ngwa", "Ịbụ paragraf dị ogologo nke ukwuu", "Ịzọ ezo"], answer: 0, why: "Ederede dị mfe ịgụ na-eweta ozi gị." },
      { objective: "O5", q: "Gịnị mere ị ga-eji tinye captions?", options: ["Ekwentị niile chọrọ ha", "Ọtụtụ na-ekiri n'enweghị ụda, ha na-enyekwa ndị ntị chiri ma ọ bụ ndị na-anụghị nke ọma aka", "Ha na-anọchi nhazi", "Ha na-eme ka faịlụ dị obere"], answer: 1, why: "Captions na-eme ka vidiyo doo anya ma dịrị mmadụ niile mfe." },
      { objective: "O5", q: "Dị ka U.S. Copyright Office si kwuo, copyright na-echebe ọrụ:", options: ["Naanị mgbe e debanyere ya aha", "Naanị maka afọ 1", "Ozugbo e mepụtara ya ma dekọọ ya n'ụdị ndị mmadụ nwere ike ịhụ ma ọ bụ ịnụ", "Naanị maka vidiyo"], answer: 2, why: "Nchekwa na-amalite mgbe e mepụtara ọrụ ahụ ma dekọọ ya." },
      { objective: "O5", q: "Gịnị nwere ike ime ma ọ bụrụ na i jiri egwu a ma ama n'enweghị ikike?", options: ["Ọ dịghị ihe ga-eme", "Ị ga-enweta ego", "Egwu ahụ ga-aka mma", "Ụlọ ọrụ ahụ nwere ike imenyụ ụda ma ọ bụ wepụ vidiyo gị"], answer: 3, why: "Ụlọ ọrụ ịntanetị na-eme ihe banyere egwu e ji n'enweghị ikike." },
      { objective: "O5", q: "Enyi gị kwuru ka i tinye ihu onye a ma ama AI mere na vidiyo gị maka ọchị. Ị ga:", options: ["Ikwu mba; ejila ihu ezigbo mmadụ n'enweghị ikike", "Ime ya ma tinye akara", "Ime ya n'akaụntụ nzuzo", "Ime ya ma mee ka ọ ghara ịdị nkọ"], answer: 0, why: "Ejila AI ṅomie ezigbo mmadụ n'enweghị ikike ha." },
      { objective: "O6", q: "Kedu ajụjụ echiche kacha baa uru?", options: ["\"Ọ zuru oke?\"", "\"Ị maara ihe ị ga-eme na njedebe?\"", "\"Ị hụrụ m n'anya?\"", "\"Ekwentị m ọ mara mma?\""], answer: 1, why: "Ọ na-elele ma call to action ahụ na-arụ ọrụ." },
      { objective: "O6", q: "Mgbe i bupụtachara, ị kwesịrị:", options: ["Ihichapụ ọrụ ahụ ozugbo", "Itinye ya n'ịntanetị n'ekirighị ya", "Ikiri faịlụ ahụ ọzọ iji lelee ụda na captions", "Ịkpọ ya aha site n'adreesị gị"], answer: 2, why: "Ibupụta nwere ike inwe nsogbu; lelee tupu i kesaa." },
      { objective: "O6", q: "Mgbe ị na-ekesa n'ihu ọha, debe na nzuzo:", options: ["Aha klọb ahụ", "Ụbọchị mmemme ahụ", "Aha vidiyo ahụ", "Aha gị zuru ezu, adreesị ụlọ akwụkwọ na usoro oge gị"], answer: 3, why: "Ozi gbasara onwe gị na-anọ na nzuzo n'ịntanetị." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      1,
      3,
      5,
      7,
      9,
      11,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Script na storyboard",
        objective: "O2",
        notYet: "Enweghị hook ma ọ bụ call to action, ma ọ bụ enweghị storyboard.",
        meets: "Script nwere hook, ihe nkiri na call to action, n'okwu onye na-amụ ihe, na storyboard dabara sekọnd 30 ruo 60.",
        exceeds: "E lelere eziokwu dị ka ụbọchị na ime ụlọ, storyboard ahụ na-egosikwa sekọnd maka shot ọ bụla."
      },
      {
        name: "Ise vidiyo",
        objective: "O3",
        notYet: "Shot gbara ọchịchịrị, na-ama jijiji ma ọ bụ siri ike ịnụ, ma ọ bụ e sere mmadụ n'enweghị ikike.",
        meets: "Opekata mpe shot anọ kwụsiri ike, nwere ezigbo ìhè na ụda doro anya, na ikike site n'aka onye ọ bụla nọ na vidiyo.",
        exceeds: "E sere shot ọ bụla opekata mpe ugboro abụọ ma họrọ take kacha mma."
      },
      {
        name: "Nhazi",
        objective: "O4",
        notYet: "Clips anọghị n'usoro ma ọ bụ nwere ogologo oge efu.",
        meets: "Clips na-agbaso storyboard, e bere ha nke ọma, ha nwekwara aha na call to action na njedebe.",
        exceeds: "Ederede dị mfe ịgụ, ije vidiyo ahụ na-emekwa ka ndị mmadụ nọgide na-ekiri."
      },
      {
        name: "Captions, egwu na akara",
        objective: "O5",
        notYet: "Captions nwere mperi, egwu ahụ abụghị nke e kwere, ma ọ bụ ihe AI mere enweghị akara.",
        meets: "Captions ziri ezi, egwu e kwere, na akara n'ihe ọ bụla AI mere.",
        exceeds: "Onye na-amụ ihe nwere ike ikwu ebe egwu ahụ si na iwu ndị kwere ka o jiri ya."
      },
      {
        name: "Echiche ndị ọzọ na ikesa n'enweghị nsogbu",
        objective: "O6",
        notYet: "E bupụtaghị ya, ma ọ bụ e kesara ya na ozi gbasara onwe mmadụ.",
        meets: "Echiche site n'aka opekata mpe otu onye, otu mgbanwe e mere, e bupụtara ya ma kesaa ya n'enweghị nsogbu.",
        exceeds: "Na-ekwu otu e siri jiri AI na ihe gbanwere mgbe e nwetara echiche ndị ọzọ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Vidiyo ezigbo klọb, otu egwuregwu, mmemme ma ọ bụ ihe e kwadoro jiri n'ime ụbọchị 30",
      "Ndị na-amụ ihe mere vidiyo nke abụọ e mere atụmatụ ya n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha na-enweta ikike ma na-etinye akara n'ihe AI mere na vidiyo ha mere emesịa"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere igwefoto",
      "Ngwa nhazi vidiyo n'efu dị ka CapCut ma ọ bụ Canva, e ji n'ime iwu afọ ya",
      "Ngwa enyemaka AI n'efu e kwere onye na-amụ ihe iji",
      "Ihe njide ekwentị dị mfe ma ọ bụ ihe a ga-adabere na ya (ọ bụghị iwu)",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge ise vidiyo"
    ],
    facilitatorNotes: [
      "Lelee iwu ụlọ akwụkwọ gị gbasara ise vidiyo na ikike foto tupu klas, ma kesaa ụmụ akwụkwọ ndị a na-agaghị ese.",
      "Lelee iwu afọ maka ngwa ọ bụla ma tinye nne na nna ma ọ bụ ndị nlekọta n'ịdebanye aha ọ bụla.",
      "Kee ndị na-amụ ihe n'otu dị ka ndị ọrụ fim ka onye ọ bụla mụta ise vidiyo, ịnọ na vidiyo na inye echiche.",
      "Lelee vidiyo maka ikike, egwu na akara AI tupu e tinye ihe ọ bụla n'ihu ọha.",
      "Mee ngosi vidiyo n'otu ahụ ma jiri rubric tụọ akara vidiyo ọ bụla, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
