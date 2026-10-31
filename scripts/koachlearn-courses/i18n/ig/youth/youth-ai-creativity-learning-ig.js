"use strict";

// Koach Learn course (Igbo translation of youth/youth-ai-creativity-learning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "youth-ai-creativity-learning-ig",
  lang: "ig",
  translationOf: "youth-ai-creativity-learning",
  category: "Youth",
  name: "Ngwa AI maka Ihe Okike na Mmụta",
  skills: "Iji AI chepụta echiche, Iji Canva mee nhazi, Iji onye nkuzi AI mụta nka ọhụrụ, Ime ajụjụ omume, Inye otuto na idebe ọrụ gị ka ọ bụrụ nke gị",
  outcome: "iji ngwa AI n'efu chepụta echiche maka ọrụ okike, jiri ya mee nhazi ihe, ma jiri onye enyemaka ọmụmụ AI kụziere onwe gị nka ọhụrụ, ma na-edebe ọrụ ahụ ka ọ bụrụ nke gị ma na-ekwu ebe AI nyere aka.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị ntorobịa dị ihe dị ka afọ 13 ruo 18 na-enwe mmasị ime ihe (poster, akụkọ, egwu beat, echiche egwuregwu, akwụkwọ mgbasa ozi otu klọb) ma chọọ ịmụ ihe ngwa ngwa.",
    "Ị ga-eji AI dị ka onye mmekọ n'ihe okike na onye mmekọ n'ọmụmụ ihe. Ị ga-echepụta echiche, mee poster, mụta ihe ọhụrụ nzọụkwụ n'otu n'otu ma nwalee onwe gị. Ị ga-amụtakwa otu esi edebe olu nke gị na otu esi ekwu eziokwu banyere ihe AI mere.",
    "Tupu ịmalite: lelee iwu afọ nke ngwa ọ bụla, gbasoo iwu ụlọ akwụkwọ gị banyere AI, ma gwa nne na nna gị ma ọ bụ onye nlekọta gị okwu tupu i meghee akaụntụ ọhụrụ ọ bụla. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'ọrụ \"Nwalee ya ugbu a\"."
  ],
  finalTask: "Mee poster maka ezi klọb ma ọ bụ mmemme ụlọ akwụkwọ, ma ọ bụ nke i chepụtara echepụta. Jiri AI chepụta opekata mpe echiche ise, họrọ otu ma mee ka ọ bụrụ nke gị, mee nhazi poster ahụ na Canva ma ọ bụ Google Slides, wee tinye obere ndetu n'ala ya na-ekwu otu AI siri nyere aka.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị ntorobịa dị ihe dị ka afọ 13 ruo 18 na-enwe mmasị ime ihe dị ka poster, akụkọ, egwu beat, echiche egwuregwu na akwụkwọ mgbasa ozi klọb, ma chọọ ịmụ ihe ngwa ngwa.",
    startingPoint: "Ha na-eji ekwentị na kọmputa ụlọ akwụkwọ, ụfọdụ anwalela ngwa enyemaka AI ma ọ bụ app nhazi. Ọ bụ mmadụ ole na ole na-eji AI n'ebumnuche iji chepụta echiche, mụọ ihe nzọụkwụ n'otu n'otu ma ọ bụ nwalee onwe ha, ọtụtụ amaghịkwa ihe bụ iji AI n'eziokwu.",
    gap: "Ndị ntorobịa nwere ike iji AI pụọ ebe ha kwụsịrị, mee nhazi ngwa ngwa ma mụọ ihe nke ọma, mana iji ya detuo ọrụ na-awụfe mmụta ma nwee ike imebi iwu ụlọ akwụkwọ. Ha kwesịrị iji AI dị ka onye mmekọ n'ihe okike na n'ọmụmụ ihe ma na-edebe olu nke ha ma na-enye otuto.",
    constraints: [
      "Oke afọ: ngwa na akụkụ AI na-eme foto nwere iwu afọ nke ha; nne na nna ma ọ bụ onye nlekọta na-ekwenye tupu e meghee akaụntụ ọhụrụ",
      "Iwu banyere AI na foto AI mere dị iche n'ụlọ akwụkwọ, klas na asọmpi",
      "Ngwaọrụ: ekwentị, kọmputa ụlọ akwụkwọ ma ọ bụ kọmputa ọba akwụkwọ; naanị atụmatụ n'efu",
      "Nzuzo: enweghị ozi nzuzo na prompt ma ọ bụ na ndetu e tinyere",
      "Nkuzi dị mkpụmkpụ na okwu dị mfe maka ọkwa ịgụ akwụkwọ dị iche iche"
    ],
    prerequisites: "\"Gịnị bụ AI? (maka ndị ntorobịa)\" bụ ihe ọmụmụ mbụ bara uru mana ọ bụghị iwu."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị ọrụ okike", action: "iji ngwa enyemaka AI depụta ọtụtụ echiche dị iche iche, wee gbanwee ma ọ bụ jikọta ha ka ọ bụrụ echiche nke gị", standard: "na-enweta opekata mpe echiche ise ma mee ka otu bụrụ nke gị" },
    { id: "O2", condition: "Site n'iji ngwa nhazi n'efu dị ka Canva ma ọ bụ Google Slides", action: "ime poster dị mfe site na template, mgbe i lelechara iwu afọ nke ngwa ahụ na ntọala ụlọ akwụkwọ", standard: "nwere otu isiokwu buru ibu na ụbọchị, oge na ebe doro anya" },
    { id: "O3", condition: "Maka ọrụ ọ bụla AI nyere aka na ya", action: "ide ndetu otuto na-ekwu ihe AI mere na ihe i mere, ma tinye ihe naanị gị nwere ike ime", standard: "na-agbaso iwu klas ma ọ bụ asọmpi banyere AI ma na-ejighị ihe osise onye ọzọ n'enweghị ikike" },
    { id: "O4", condition: "Mgbe e nyere gị obere nka ị chọrọ ịmụta", action: "ịrịọ ngwa enyemaka AI ka ọ kụziere gị ya n'obere nzọụkwụ n'ọkwa gị ma nwalee gị mgbe nke ọ bụla gasịrị", standard: "na-akpọ aha nka ahụ, ọkwa gị na arịrịọ otu nzọụkwụ n'otu oge" },
    { id: "O5", condition: "Mgbe e nyere gị ndetu klas nke gị", action: "iji AI mee ajụjụ omume ma ọ bụ flashcard, buru ụzọ zaa ha, wee lelee azịza ya", standard: "na-enweghị ozi nzuzo ma na-elele azịza ọ bụla na ndetu gị ma ọ bụ akwụkwọ ọgụgụ gị" },
    { id: "O6", condition: "Tupu na mgbe i jiri AI maka ọrụ ụlọ akwụkwọ", action: "ikpebi ma iji AI na-enyere gị aka ịmụta ihe ma ọ bụ na-awụfe mmụta, site n'iji ule echi na iwu onye nkuzi gị", standard: "na-ebu ụzọ jụọ onye nkuzi gị mgbe ọ bụla obi abụọ dị gị" }
  ],
  chapters: [
    {
      name: "Isi 1: AI dị ka onye mmekọ gị n'ihe okike",
      lessons: [
        {
          objectives: ["O1"],
          title: "Iji AI chepụta echiche",
          minutes: 5,
          goal: "Jiri ngwa enyemaka AI nweta ọtụtụ echiche, wee họrọ ma mee ka nke kacha mma ka mma.",
          text: [
            "Ịchepụta echiche (brainstorming) pụtara iwepụta ọtụtụ echiche ngwa ngwa, n'ekpebighị ma ha dị mma ugbu a. Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot na Google Gemini maara ime nke a nke ọma n'ihi na ha nwere ike idepụta ọtụtụ echiche n'ime sekọnd ole na ole.",
            "Rịọ maka ọnụ ọgụgụ na ụdị dị iche iche: \"Nye m echiche 10 dị iche iche maka poster klọb robotics nke ụlọ akwụkwọ anyị. Mee ka ụfọdụ tọọ ọchị, ụfọdụ dị njọ anya, ụfọdụ nwee obi ike.\" Wee họrọ. Ihe kacha mma na-apụta mgbe ị gwakọtara echiche AI na nke gị.",
            "Were echiche AI dị ka mmalite. Gbanwee ha, jikọta abụọ, ma ọ bụ jiri otu kpalite ihe ọhụrụ. N'ụzọ dị otu a, echiche ikpeazụ ahụ ga-abụ nke gị n'ezie."
          ],
          steps: ["Kwuo ihe ị na-eme na onye ọ bụ maka ya.", "Rịọ maka ọtụtụ echiche nwere ụdị dị iche iche.", "Gbaa gburugburu abụọ ma ọ bụ atọ masịrị gị.", "Gbanwee ma ọ bụ jikọta ha ka ọ bụrụ echiche nke gị."],
          words: [["Ịchepụta echiche (brainstorm)", "iwepụta ọtụtụ echiche ngwa ngwa tupu ịhọrọ otu."]],
          slides: [
            { title: "Ịchepụta echiche = ọtụtụ echiche, ngwa ngwa", bullets: ["Ekpebila ma echiche dị mma ugbu a", "AI nwere ike idepụta echiche 10 n'ime sekọnd"] },
            { title: "Rịọ maka ụdị dị iche iche", bullets: ["Kwuo ihe ị na-eme na onye ọ bụ maka ya", "Rịọ maka echiche na-atọ ọchị, dị njọ anya na nwere obi ike"] },
            { title: "Mee ka ọ bụrụ nke gị", bullets: ["Họrọ abụọ ma ọ bụ atọ masịrị gị", "Gbanwee ma ọ bụ jikọta ha", "Tinye ihe nke gị"] }
          ],
          tryIt: "Họrọ otu ọrụ: poster klọb, obere akụkọ, ọkwa egwuregwu ma ọ bụ isiokwu egwu. Rịọ ngwa enyemaka AI e kwere ka i jiri maka echiche 10 dị iche iche. Họrọ abụọ kacha masị gị ma dee otu ị ga-esi gbanwee ha.",
          youCanNow: "iji AI chepụta echiche ma mee ka echiche ya bụrụ nke gị.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ isi iwu mgbe ị na-achepụta echiche?", options: ["Họrọ echiche mbụ", "Jiri naanị echiche AI", "Kpebie ma echiche ọ bụla dị mma ozugbo", "Wepụta ọtụtụ echiche tupu i kpebie ma ha dị mma"], answer: 3, why: "Ịchepụta echiche pụtara ọtụtụ echiche ngwa ngwa, n'ekpebighị ma ha dị mma ugbu a." },
            { objective: "O1", q: "AI nyere gị echiche poster 10, abụọ n'ime ha dị nso n'ihe ị chọrọ. Gịnị ka ị ga-eme?", options: ["Detuo nke mbụ otu o si dị", "Jikọta ma ọ bụ gbanwee ha ma tinye ihe nke gị", "Rịọ maka 100 ọzọ ma ghara ịhọrọ mgbe ọ bụla", "Hapụ poster ahụ"], answer: 1, why: "Ịgwakọta echiche AI na nke gị na-eme ka echiche ikpeazụ bụrụ nke gị n'ezie." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji ngwa AI n'efu mee nhazi",
          minutes: 5,
          goal: "Mee poster ma ọ bụ foto dị mfe site n'iji ngwa nhazi n'efu.",
          text: [
            "Canva bụ ngwa nhazi nwere atụmatụ n'efu nke na-arụ ọrụ na web browser ma ọ bụ app. Ụfọdụ ụlọ akwụkwọ na-enyekwa ụmụ akwụkwọ ohere site n'akaụntụ ụlọ akwụkwọ, ya mere jụọ onye nkuzi gị. Google Slides na Microsoft PowerPoint na-arụkwa ọrụ maka poster dị mfe.",
            "Malite site na template (nhazi e meworo emecha), wee gbanwee okwu, agba na foto. Ụfọdụ ngwa nwere ike ime foto site n'okwu ị dere. Akụkụ AI ndị a na-eme foto nwere ike inwe iwu afọ nke ha ma ọ bụ bụrụ ndị e gbanyụrụ n'akaụntụ ụlọ akwụkwọ, ya mere lelee tupu i jiri ha.",
            "Ezigbo nhazi dị mfe: otu isiokwu buru ibu, ahịrị mkpụmkpụ ole na ole, agba doro anya dị mfe ịgụ, na eziokwu ndị dị mkpa dị ka ụbọchị, oge na ebe."
          ],
          steps: ["Meghee Canva, Google Slides ma ọ bụ PowerPoint (jiri akaụntụ ụlọ akwụkwọ gị ma ọ bụrụ na ụlọ akwụkwọ gị nyere gị otu).", "Họrọ template poster.", "Gbanwee isiokwu, nkọwa na agba.", "Tinye ma ọ bụ mee otu foto.", "Lelee na ụbọchị, oge na ebe dị mfe ịgụ."],
          words: [["Template", "nhazi e meworo emecha nke ị nwere ike ịgbanwe."], ["Ngwa AI na-eme foto (AI image generator)", "ngwa na-eme foto site n'okwu ị dere."]],
          slides: [
            { title: "Ngwa n'efu maka nhazi", bullets: ["Canva (atụmatụ n'efu; jụọ ma ụlọ akwụkwọ gị na-enye ohere)", "Google Slides", "Microsoft PowerPoint"] },
            { title: "Malite site na template", bullets: ["Gbanwee okwu, agba na foto", "Akụkụ AI na-eme foto nwere ike inwe iwu afọ nke ha"] },
            { title: "Nhazi dị mfe na-emeri", bullets: ["Otu isiokwu buru ibu", "Ahịrị mkpụmkpụ ole na ole", "Agba dị mfe ịgụ", "Ụbọchị, oge na ebe"] }
          ],
          tryIt: "Meghee ngwa nhazi n'efu ma họrọ template poster. Tinye isiokwu na ụbọchị, oge na ebe maka echiche gị sitere na Nkuzi 1. Chekwaa ya.",
          youCanNow: "ime poster dị mfe site n'iji ngwa nhazi n'efu.",
          quickCheck: [
            { objective: "O2", q: "Gịnị na-eme ka poster dị mfe ịgụ?", options: ["Otu isiokwu buru ibu, ahịrị mkpụmkpụ ole na ole na agba doro anya", "Ọtụtụ obere mkpụrụ okwu", "Ụdị mkpụrụ edemede iri dị iche iche", "Mkpụrụ edemede ojii n'elu ndabere gbara ọchịchịrị"], answer: 0, why: "Ezigbo nhazi dị mfe, nwere isiokwu buru ibu na eziokwu ndị dị mkpa dị mfe ịhụ." },
            { objective: "O2", q: "Ị chọrọ iji akụkụ AI na-eme foto n'ime ngwa nhazi n'akaụntụ ụlọ akwụkwọ gị. Gịnị ka ị ga-ebu ụzọ mee?", options: ["Jiri akaụntụ enyi gị", "Meghee akaụntụ ọhụrụ n'agwaghị onye ọ bụla", "Lelee iwu afọ ya na ma ụlọ akwụkwọ gị kwere ya", "Hapụ poster ahụ"], answer: 2, why: "Akụkụ AI na-eme foto nwere ike inwe iwu afọ nke ha ma ọ bụ bụrụ ndị e gbanyụrụ n'akaụntụ ụlọ akwụkwọ." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Idebe ọrụ gị ka ọ bụrụ nke gị na inye otuto",
          minutes: 4,
          goal: "Kwuo n'eziokwu otu AI siri nyere aka ma debe olu nke gị n'ọrụ ahụ.",
          text: [
            "Ọ bụrụ na AI nyeere gị aka ime ihe, kwuo ya. Obere ndetu dị ka \"E ji Microsoft Copilot chepụta echiche; nhazi na okwu bụ nke m\" bụ eziokwu ma na-egosi na ị maara otu e si eji ngwa ahụ.",
            "Ejila ihe osise, egwu, logo ma ọ bụ agwa ndị ọzọ n'enweghị ikike, ejikwala rịọ AI ka o detuo ọrụ ezi onye na-ese ihe otu o si dị. Ụfọdụ ụlọ akwụkwọ na asọmpi anaghị ekwe ka e jiri foto AI mere ma ọlị, ya mere gụọ iwu ha.",
            "Olu gị dị mkpa. Tinye ihe naanị gị nwere ike itinye: njakịrị nke naanị ndị klọb gị ghọtara, foto i sere n'onwe gị, ihe osise, ma ọ bụ okwu nke gị."
          ],
          steps: ["Dee ihe AI mere na ihe i mere.", "Tinye obere ndetu otuto.", "Gụọ iwu asọmpi ma ọ bụ klas banyere AI.", "Tinye otu ihe naanị gị nwere ike ime."],
          words: [["Otuto (credit)", "ikwu onye ma ọ bụ ihe nyere aka ime ihe."], ["Ikike nwebiisinka (copyright)", "iwu na-echebe ọrụ okike ndị mmadụ, dị ka ihe osise, egwu na ihe e dere ede."]],
          slides: [
            { title: "Kwuo otu AI siri nyere aka", bullets: ["\"E ji AI chepụta echiche; nhazi bụ nke m\"", "Ọ bụ eziokwu ma na-egosi nka"] },
            { title: "Sọpụrụ ndị okike ndị ọzọ", bullets: ["Edetuola ihe osise, logo ma ọ bụ agwa", "Ụfọdụ asọmpi machibidoro foto AI: gụọ iwu"] },
            { title: "Tinye olu nke gị", bullets: ["Foto i sere n'onwe gị", "Ihe osise ma ọ bụ okwu nke gị", "Ihe naanị gị nwere ike itinye"] }
          ],
          tryIt: "Tinye ndetu otuto nwere otu ahịrị na poster ị malitere. Wee tinye otu ihe naanị gị nwere ike itinye, dị ka foto nke gị ma ọ bụ okwu mkpọsa (slogan) nke gị.",
          youCanNow: "inye otuto n'eziokwu maka enyemaka AI ma debe olu nke gị n'ọrụ gị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị mere ị ga-eji tinye ndetu otuto mgbe AI nyere aka?", options: ["Ime ka poster dị ogologo", "Asọmpi na-achọ foto AI", "Ọ na-ezo ihe i mere", "Ọ bụ eziokwu ma na-egosi otu i si jiri ngwa ahụ"], answer: 3, why: "Obere ndetu otuto na-ekwu eziokwu banyere ihe AI mere na ihe i mere." },
            { objective: "O3", q: "Poster gị yiri poster AI ndị ọzọ niile nke ukwuu. Kedu otu ị ga-esi tinye olu nke gị?", options: ["Tinye foto, ihe osise, slogan ma ọ bụ njakịrị klọb gị", "Rịọ AI ka o detuo onye na-ese ihe a ma ama otu o si dị", "Jiri logo a ma ama", "Wepụ aha gị"], answer: 0, why: "Itinye ihe naanị gị nwere ike ime na-eme ka ọrụ ahụ bụrụ nke gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: AI dị ka onye mmekọ gị n'ihe okike",
        questions: [
          { objective: "O1", q: "Gịnị bụ ịchepụta echiche (brainstorming)?", options: ["Idetu ọrụ onye ọzọ", "Iwepụta ọtụtụ echiche tupu ịhọrọ", "Ịrụzi kọmputa mebiri emebi", "Ihichapụ faịlụ ochie"], answer: 1, why: "Ịchepụta echiche bụ iwepụta ọtụtụ echiche ngwa ngwa, wee họrọ." },
          { objective: "O1", q: "Kedu prompt ga-enye echiche kacha mma?", options: ["\"poster\"", "\"mee ya\"", "\"echiche\"", "\"Nye m echiche 10 dị iche iche maka poster klọb robotics: ụfọdụ na-atọ ọchị, ụfọdụ dị njọ anya\""], answer: 3, why: "Ọ na-ekwu ihe, onye ọ bụ maka ya, ole na ụdị echiche." },
          { objective: "O2", q: "Gịnị bụ template?", options: ["Nhazi e meworo emecha nke ị nwere ike ịgbanwe", "Okwuntughe", "Ụdị nje kọmputa (virus)", "Iwu ụlọ akwụkwọ"], answer: 0, why: "Template na-enye gị nhazi mmalite ị ga-edezi." },
          { objective: "O3", q: "Asọmpi kwuru na ọ nweghị foto AI mere. Ị ga-:", options: ["Jiri otu n'agbanyeghị", "Zoo na i jiri AI", "Gbasoo iwu ahụ ma mee ma ọ bụ jiri foto nke gị", "Ghara ịgụ iwu"], answer: 2, why: "Ịgbaso iwu asọmpi na-eme ka ihe i zipụrụ bụrụ eziokwu ma bụrụ nke e kwere." },
          { objective: "O3", q: "Kedu nke bụ ezigbo ndetu otuto?", options: ["Ọ dịghị ihe ọ bụla", "\"Mụ onwe m mere ihe niile\" mgbe AI nyere aka", "\"E ji AI chepụta echiche; nhazi na okwu bụ nke m\"", "\"Robot mere ya\""], answer: 2, why: "Ọ na-ekwu n'eziokwu ihe AI mere na ihe i mere." }
        ]
      }
    },
    {
      name: "Isi 2: AI dị ka onye mmekọ gị n'ọmụmụ ihe",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịmụta nka ọhụrụ nzọụkwụ n'otu n'otu",
          minutes: 5,
          goal: "Rịọ AI ka ọ kụziere gị nka ọhụrụ n'obere nzọụkwụ n'ọkwa gị.",
          text: [
            "AI nwere ike ime ka onye nkuzi nwere ndidi. Gwa ya ihe ị chọrọ ịmụta, ihe ị maraworị, ma rịọ ya ka ọ gaa otu nzọụkwụ n'otu oge. Dịka ọmụmaatụ: \"Achọrọ m ịmụta ịgụ guitar tabs. Amaghị m ihe ọ bụla ugbu a. Kụziere m ya n'obere nzọụkwụ 5 ma chere m mgbe nke ọ bụla gasịrị.\"",
            "Rịọ ya ka o lelee ma ị ghọtara: \"Jụọ m otu ajụjụ tupu ị gaa n'ihu.\" Ọ bụrụ na ihe agbagwojuru gị anya, kwuo ya: \"Kọwaa ya dị ka a ga-akọwara onye dị afọ 12\" ma ọ bụ \"Nye m ọmụmaatụ site na basketball.\"",
            "Weebụsaịtị mmụta n'efu dị ka Khan Academy nwere nkuzi na omume ị nwere ike iji ya na ngwa enyemaka AI. Ụlọ akwụkwọ gị nwere ike inwe ngwa ọ kwadoro, ya mere jụọ onye nkuzi gị ndị ị ga-eji."
          ],
          steps: ["Kpọọ aha nka ahụ na ọkwa gị.", "Rịọ maka obere nzọụkwụ, otu n'otu oge.", "Rịọ ya ka ọ nwalee gị tupu ọ gaa n'ihu.", "Rịọ maka ọmụmaatụ sitere n'ihe masịrị gị."],
          words: [["Onye nkuzi (tutor)", "onye (ma ọ bụ ngwa) na-enyere gị aka ịmụta ihe naanị gị na ya."]],
          slides: [
            { title: "AI dị ka onye nkuzi", bullets: ["Kwuo ihe ị chọrọ ịmụta", "Kwuo ihe ị maraworị", "Rịọ maka otu nzọụkwụ n'otu oge"] },
            { title: "Mee ka o lelee gị", bullets: ["\"Jụọ m otu ajụjụ tupu ị gaa n'ihu\"", "\"Kọwaa ya dị ka a ga-akọwara onye dị afọ 12\""] },
            { title: "Jiri ọmụmaatụ masịrị gị", bullets: ["Egwuregwu, egwuregwu vidiyo, egwu", "Jụọ onye nkuzi gị maka ngwa e kwadoro"] }
          ],
          tryIt: "Họrọ obere nka ị chọrọ ịmụta n'izu a (otu kọọd egwu, otu ụzọ mgbakọ, otu usoro ise ihe, otu okwu n'asụsụ ọhụrụ). Rịọ ngwa enyemaka AI ka ọ kụziere gị ya n'obere nzọụkwụ ma nwalee gị mgbe nke ọ bụla gasịrị.",
          youCanNow: "iji AI dị ka onye nkuzi na-aga nzọụkwụ n'otu n'otu n'ọkwa gị.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka prompt maka ịmụta nka ọhụrụ kwesịrị inwe?", options: ["Naanị okwu \"kụzie\"", "Nka ahụ, ọkwa gị na arịrịọ ka ọ gaa otu nzọụkwụ n'otu oge", "Okwuntughe gị", "Azịza ị chọrọ"], answer: 1, why: "Ịgwa AI nka ahụ, ọkwa gị na ka ọ gaa nzọụkwụ n'otu n'otu na-eme ka ọ dị ka onye nkuzi nwere ndidi." },
            { objective: "O4", q: "Nkọwa AI banyere otu ụzọ mgbakọ na-agbagwoju gị anya. Gịnị ka ị ga-ezipu?", options: ["Ọ dịghị ihe; mechie app ahụ", "\"Mee ihe omume ụlọ m.\"", "\"Kọwaa ya dị ka a ga-akọwara onye dị afọ 12, were ọmụmaatụ site na basketball.\"", "Otu ajụjụ ahụ ọzọ"], answer: 2, why: "Ịrịọ maka okwu dị mfe karị ma ọ bụ ọmụmaatụ masịrị gị na-enyere gị aka ịghọta." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ime ajụjụ omume na flashcard",
          minutes: 5,
          goal: "Mee ka ndetu gị bụrụ ajụjụ omume ma nwalee onwe gị.",
          text: [
            "Ịnwale onwe gị bụ otu n'ime ụzọ kacha mma isi cheta ihe. AI nwere ike ime ka ndetu gị bụrụ ajụjụ nnwale n'ime sekọnd ole na ole.",
            "Tinye ma ọ bụ dee ndetu klas gị (na-enweghị ozi nzuzo) ma jụọ: \"Mee ajụjụ omume 8 site na ndetu ndị a. Egosila azịza ruo mgbe m zara.\" Wee zaa ha n'onwe gị tupu i lee.",
            "Ị nwekwara ike ịrịọ maka flashcard: okwu n'otu akụkụ, ihe ọ pụtara n'akụkụ nke ọzọ. Ngwa n'efu dị ka Google Docs ma ọ bụ kaadị akwụkwọ na-arụ ọrụ nke ọma. Lelee azịza ya na ndetu gị ma ọ bụ akwụkwọ ọgụgụ gị, n'ihi na AI ka nwere ike ime mperi."
          ],
          steps: ["Chịkọta ndetu gị banyere otu isiokwu.", "Rịọ AI maka ajụjụ omume, ka azịza zoro ezo.", "Buru ụzọ zaa ha n'onwe gị.", "Lelee azịza ya na ndetu gị ma ọ bụ akwụkwọ ọgụgụ gị."],
          words: [["Flashcard", "kaadị nwere ajụjụ ma ọ bụ okwu n'otu akụkụ na azịza n'akụkụ nke ọzọ."], ["Ịnwale onwe gị", "ịjụ onwe gị ajụjụ iji nyere gị aka icheta ihe."]],
          slides: [
            { title: "Nwalee onwe gị ka i cheta", bullets: ["Ịnwale onwe gị ka ịgụghachi ihe", "AI nwere ike ime ajụjụ site na ndetu gị"] },
            { title: "Jụọ n'ụzọ ziri ezi", bullets: ["\"Mee ajụjụ 8 site na ndetu ndị a\"", "\"Zoo azịza ruo mgbe m zara\""] },
            { title: "Lelee azịza ya", bullets: ["Jiri ndetu gị ma ọ bụ akwụkwọ ọgụgụ", "AI ka nwere ike ime mperi"] }
          ],
          tryIt: "Were ndetu site n'otu klas n'izu a. Rịọ AI maka ajụjụ omume 5 ka azịza zoro ezo. Zaa ha, wee lelee onwe gị na ndetu gị.",
          youCanNow: "ime ka ndetu bụrụ ajụjụ omume ma nwalee onwe gị.",
          quickCheck: [
            { objective: "O5", q: "Gịnị mere ị ga-eji rịọ AI ka o zoo azịza mgbe ọ na-eme ajụjụ omume?", options: ["Ichekwa akwụkwọ", "Ka AI wee nye onwe ya akara", "N'ihi na azịza bụ nzuzo", "Ka i buru ụzọ zaa ma nwalee onwe gị n'ezie"], answer: 3, why: "Ịnwale onwe gị tupu ị hụ azịza na-enyere gị aka icheta." },
            { objective: "O5", q: "Azịza AI nyere maka otu ajụjụ omume adabaghị na ndetu gị. Gịnị ka ị ga-eme?", options: ["Lelee ndetu gị ma ọ bụ akwụkwọ ọgụgụ ma tụkwasị ha obi", "Tụkwasị AI obi mgbe niile", "Hichapụ ndetu gị", "Hapụ isiokwu ahụ"], answer: 0, why: "AI ka nwere ike ime mperi, ya mere lelee ya na ndetu gị ma ọ bụ akwụkwọ ọgụgụ." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iji AI mụta ihe, ọ bụghị iwụfe mmụta",
          minutes: 4,
          goal: "Kpebie mgbe enyemaka AI bụ mmụta na mgbe ọ na-awụfe ọrụ ahụ.",
          text: [
            "E nwere ọdịiche dị n'etiti AI na-enyere gị aka ịmụta ihe na AI na-arụrụ gị ọrụ ahụ. Ọ bụrụ na ị rịọ ya ka ọ kọwaa, nwalee gị ma ọ bụ nye gị ndụmọdụ, ị na-amụta ihe. Ọ bụrụ na ị rịọ ya ka o dee edemede gị ma ọ bụ zaa ihe omume ụlọ gị ka i detuo ya, ị na-awụfe mmụta, ọ nwekwara ike imebi iwu ụlọ akwụkwọ.",
            "Ezigbo ule: mgbe i jiri AI, ị nwere ike ime ọrụ ahụ naanị gị echi? Ọ bụrụ ee, AI nyeere gị aka ịmụta ihe. Ọ bụrụ mba, nwaa ọzọ n'ụzọ ga-eme ka ị bụrụ onye na-eche echiche.",
            "Gbasoo iwu onye nkuzi gị mgbe niile. Ọ bụrụ na i jighị n'aka ma e kwere ihe, jụọ tupu i jiri AI, ma dị njikere ikwu otu i si jiri ya."
          ],
          steps: ["Rịọ AI ka ọ kọwaa, nwalee gị ma ọ bụ nye ndụmọdụ, ọ bụghị ka ọ rụọ ọrụ ahụ.", "Lelee: m nwere ike ime nke a naanị m echi?", "Gbasoo iwu AI nke onye nkuzi gị.", "Dị njikere ikwu otu i si jiri AI."],
          words: [["Ndụmọdụ (feedback)", "okwu na-enyere gị aka ime ka ọrụ nke gị ka mma."]],
          slides: [
            { title: "Ịmụta na iwụfe", bullets: ["Ịmụta: kọwaa, nwalee, ndụmọdụ", "Iwụfe: AI dere ya, i detuo ya"] },
            { title: "Ule echi", bullets: ["Ị nwere ike ime ya naanị gị echi?", "Ọ bụrụ mba, chee echiche karịa"] },
            { title: "Gbasoo iwu", bullets: ["Jụọ onye nkuzi gị mgbe obi abụọ dị", "Dị njikere ikwu otu i si jiri AI"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mee poster klọb ma ọ bụ mmemme gị. Jiri AI chepụta opekata mpe echiche ise, mee ka otu bụrụ nke gị, mee nhazi ya na Canva ma ọ bụ Google Slides, ma tinye ndetu otuto na-ekwu otu AI siri nyere aka.",
          youCanNow: "iji AI maka ihe okike na mmụta n'ụzọ bụ eziokwu ma na-edebe nka ahụ ka ọ bụrụ nke gị.",
          quickCheck: [
            { objective: "O6", q: "Kedu nke bụ iji AI mụta ihe?", options: ["Idetu edemede AI dere", "Ịrịọ AI ka ọ kọwaa nzọụkwụ i tụfuru, wee nwaa ya n'onwe gị", "Ime ka AI zaa ajụjụ omume ụlọ niile", "Itinye azịza AI n'ule"], answer: 1, why: "Nkọwa, nnwale na ndụmọdụ na-enyere gị aka ịmụta; idetu na-awụfe mmụta." },
            { objective: "O6", q: "Mgbe AI nyere aka, ị pụghị ime ọrụ ahụ naanị gị echi. Gịnị ka ị ga-eme?", options: ["Nyefee ọrụ AI mere", "Kwụsị iji AI ruo mgbe ebighị ebi", "Nwaa ọzọ ka i chee echiche karịa", "Zoo na i jiri AI"], answer: 2, why: "Ule echi na-egosi na AI chere echiche ahụ, ya mere megharịa ya n'ụzọ ga-eme ka ị mụta." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: AI dị ka onye mmekọ gị n'ọmụmụ ihe",
        questions: [
          { objective: "O4", q: "Kedu prompt na-eme ka AI dị ka ezigbo onye nkuzi?", options: ["\"Kụziere m guitar tabs n'obere nzọụkwụ 5 ma nwalee m mgbe nke ọ bụla gasịrị\"", "\"Mee ihe omume ụlọ m\"", "\"Zaa ihe niile\"", "\"tabs\""], answer: 0, why: "Ọ na-akọwa ọkwa, obere nzọụkwụ na nnwale." },
          { objective: "O5", q: "Gịnị mere ịnwale onwe gị ji baa uru?", options: ["Ọ na-ala oge n'iyi", "Ndị nkuzi machibidoro ya", "Ọ na-ehichapụ ndetu", "Ọ na-enyere gị aka icheta"], answer: 3, why: "Ịnwale onwe gị bụ otu n'ime ụzọ kacha mma isi cheta ihe." },
          { objective: "O5", q: "AI mere ajụjụ omume site na ndetu gị. Tupu i tụkwasị azịza ya obi, ị kwesịrị:", options: ["Ikesa ha n'ịntanetị", "Ilele ha na ndetu gị ma ọ bụ akwụkwọ ọgụgụ", "Ihichapụ ndetu gị", "Ịjụ onye ị na-amaghị"], answer: 1, why: "AI ka nwere ike ime mperi, ya mere lelee." },
          { objective: "O6", q: "Kedu iji AI na-awụfe mmụta?", options: ["Ịrịọ ya ka o dee edemede gị ka i detuo ya", "Ịrịọ ya ka ọ kọwaa otu nzọụkwụ", "Ịrịọ ya ka ọ nwalee gị", "Ịrịọ maka ndụmọdụ n'ihe mbụ i dere"], answer: 0, why: "Idetu ọrụ AI pụtara na ị na-awụfe mmụta ma nwee ike imebi iwu." },
          { objective: "O6", q: "Gịnị bụ \"ule echi\"?", options: ["Ime ihe omume ụlọ echi", "Ide ule echi", "Ịjụ ma ị nwere ike ime ọrụ ahụ naanị gị echi", "Igbanyụ AI echi"], answer: 2, why: "Ọ bụrụ na ị nwere ike ime ya naanị gị, AI nyeere gị aka ịmụta ihe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ngwa AI maka Ihe Okike na Mmụta",
    questions: [
      { objective: "O1", q: "Mgbe i ji AI na-achepụta echiche, ị ga-ebu ụzọ:", options: ["Kpebie ma echiche ọ bụla dị mma", "Rịọ maka ọtụtụ echiche dị iche iche", "Họrọ nke mbụ", "Kwụsị mgbe otu echiche gasịrị"], answer: 1, why: "Ịchepụta echiche bụ maka ọtụtụ echiche na mbụ." },
      { objective: "O1", q: "Ụzọ kacha mma isi mee ka echiche AI bụrụ nke gị bụ:", options: ["Idetu ya otu o si dị", "Ịrịọ enyi gị ka ọ họrọ", "Ịghara iji echiche AI mgbe ọ bụla", "Ịgbanwe ma ọ bụ ijikọta echiche ma tinye ihe nke gị"], answer: 3, why: "Ịgbanwe na ịgwakọta echiche na-eme ka ihe ikpeazụ bụrụ nke gị." },
      { objective: "O1", q: "Ịrịọ maka echiche \"na-atọ ọchị, dị njọ anya na nwere obi ike\" na-enye gị:", options: ["Nje kọmputa (virus)", "Echiche ole na ole", "Okwuntughe", "Ụdị dị iche iche"], answer: 3, why: "Ụdị dị iche iche na-enye gị ihe ka ukwuu ị ga-ahọrọ." },
      { objective: "O2", q: "Canva bụ:", options: ["Igwe egwuregwu vidiyo", "Ngwa nhazi nwere atụmatụ n'efu", "Iwu ụlọ akwụkwọ", "Naanị app egwu"], answer: 1, why: "Canva bụ ngwa nhazi nwere atụmatụ n'efu." },
      { objective: "O2", q: "Tupu i jiri akụkụ AI na-eme foto, ị kwesịrị:", options: ["Itinye foto enyi gị", "Ikesa okwuntughe gị", "Ilele iwu afọ ya na ntọala ụlọ akwụkwọ gị", "Ịhapụ iwu niile"], answer: 2, why: "Akụkụ AI na-eme foto nwere ike inwe iwu afọ nke ha." },
      { objective: "O2", q: "Ezigbo poster nwere:", options: ["Otu isiokwu buru ibu na ụbọchị, oge na ebe doro anya", "Ọtụtụ obere mkpụrụ okwu", "Agba niile n'otu oge", "Enweghị nkọwa ọ bụla"], answer: 0, why: "Nhazi dị mfe kacha dị mfe ịgụ." },
      { objective: "O3", q: "Otuto n'eziokwu maka enyemaka AI dị ka:", options: ["Izo na i jiri AI", "\"E ji AI chepụta echiche; nhazi bụ nke m\"", "Ikwu na robot mere ihe niile", "Ọ dịghị ihe ọ bụla"], answer: 1, why: "Ọ na-ekwu eziokwu banyere onye mere gịnị." },
      { objective: "O3", q: "Ị chọrọ iji agwa katuun a ma ama na poster. Ị kwesịrị:", options: ["Iji ya n'ajụghị ajụjụ", "Ịrịọ AI ka o detuo ya otu o si dị", "Iwepụ ndetu otuto", "Ime foto nke gị kama, ma ọ bụ nweta ikike"], answer: 3, why: "Iwu nwebiisinka (copyright) na-echebe agwa na ihe osise." },
      { objective: "O3", q: "Iwu nwebiisinka (copyright) na-echebe:", options: ["Ọrụ okike ndị mmadụ dị ka ihe osise na egwu", "Batrị ekwentị gị", "Nri ehihie ụlọ akwụkwọ", "Wi-Fi"], answer: 0, why: "Iwu nwebiisinka na-echebe ọrụ ndị okike." },
      { objective: "O4", q: "Iji AI mụta nka ọhụrụ, ị kwesịrị ịgwa ya:", options: ["Ọ dịghị ihe", "Okwuntughe gị", "Nka ahụ, ọkwa gị, na ka ọ gaa otu nzọụkwụ n'otu oge", "Ka ọ wụga ruo na njedebe"], answer: 2, why: "Ọkwa na obere nzọụkwụ na-eme AI ka ọ bụrụ ezigbo onye nkuzi." },
      { objective: "O4", q: "Ọ bụrụ na nkọwa AI na-agbagwoju anya, ezigbo ajụjụ nsochi bụ:", options: ["\"Hapụ ya\"", "\"Nye m akara m\"", "\"Kọwaa ya dị ka a ga-akọwara onye dị afọ 12\"", "\"Dee ule m\""], answer: 2, why: "Ịrịọ maka okwu dị mfe karị na-enyere gị aka ịghọta." },
      { objective: "O4", q: "Onye nwere ike ịgwa gị ngwa AI e kwadoro maka ụlọ akwụkwọ?", options: ["Onye nkuzi gị", "Mgbasa ozi na-apụta na mberede", "Onye ị na-amaghị n'ịntanetị", "Ọ dịghị onye"], answer: 0, why: "Ndị nkuzi maara ngwa na iwu ụlọ akwụkwọ kwadoro." },
      { objective: "O5", q: "Gịnị ka ị ga-ahapụ mgbe ị na-etinye ndetu n'ime AI?", options: ["Okwu isiokwu", "Ụbọchị ndị dị mkpa maka isiokwu ahụ", "Okwu mmụta", "Ozi nzuzo dị ka adreesị gị"], answer: 3, why: "Etinyela ozi nzuzo n'ime ngwa AI mgbe ọ bụla." },
      { objective: "O5", q: "Gịnị mere ị ga-eji rịọ AI ka o zoo azịza ajụjụ omume?", options: ["Ichekwa akwụkwọ", "Ka i buru ụzọ zaa ma nwalee onwe gị n'ezie", "Iwu chọrọ ya", "Ịghọgbu onye nkuzi gị"], answer: 1, why: "Ibu ụzọ zaa bụ ezi nnwale onwe gị." },
      { objective: "O5", q: "Flashcard nwere:", options: ["Ajụjụ ma ọ bụ okwu n'otu akụkụ na azịza n'akụkụ nke ọzọ", "Naanị foto", "Okwuntughe", "Naanị akara egwu"], answer: 0, why: "Otu ahụ ka flashcard si arụ ọrụ." },
      { objective: "O5", q: "Mgbe AI mere azịza omume, ị kwesịrị:", options: ["Ịtụkwasị ha obi kpam kpam", "Itinye ha n'ịntanetị", "Ilele ha na ndetu ma ọ bụ akwụkwọ ọgụgụ", "Ihichapụ ha"], answer: 2, why: "Azịza AI nwere ike ịbụ ihe ezighi ezi." },
      { objective: "O6", q: "Kedu nke bụ iji AI mụta ihe?", options: ["Idetu edemede AI dere", "Ịrịọ AI maka ndụmọdụ n'ihe mbụ i dere n'onwe gị", "Ime ka AI were ule gị", "Itinye azịza ihe omume ụlọ AI dere"], answer: 1, why: "Ndụmọdụ n'ọrụ nke gị na-enyere gị aka ime ka ọ ka mma." },
      { objective: "O6", q: "I jighị n'aka ma e kwere iji AI maka otu ọrụ. Ị kwesịrị:", options: ["Iji ya ma tụọ anya na ọ dị mma", "Iji ya na nzuzo", "Ịjụ AI ma e kwere ya", "Ibu ụzọ jụọ onye nkuzi gị"], answer: 3, why: "Onye nkuzi gị na-ekpebi iwu maka klas ahụ." },
      { objective: "O2", q: "Tupu i meghee akaụntụ ọhụrụ na app okike, ị kwesịrị:", options: ["Iji afọ adịgboroja", "Inye ya okwuntughe ụlọ akwụkwọ gị", "Ịhapụ ịgụ usoro ya", "Ịgwa nne na nna gị ma ọ bụ onye nlekọta gị okwu ma lelee iwu afọ"], answer: 3, why: "Iwu afọ na nkwenye nne na nna ma ọ bụ onye nlekọta na-ebu ụzọ." },
      { objective: "O6", q: "Mgbe i jiri AI, ị pụghị ime ọrụ ahụ naanị gị echi. Nke ahụ pụtara:", options: ["Ị mụtara ihe niile", "AI chere echiche ahụ; nwaa ọzọ ka i chee karịa", "AI emebiela", "Ị kwesịrị ịkwụsị ụlọ akwụkwọ"], answer: 1, why: "Ule echi na-egosi ma ị mụtara ihe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 6, 7, 9, 13, 15, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ịchepụta echiche", objective: "O1", notYet: "Echiche erughị ise, ma ọ bụ e jiri echiche AI mbụ otu o si dị.", meets: "Opekata mpe echiche ise, ebe e gbanwere ma ọ bụ jikọta otu ka ọ bụrụ nke onye na-amụ ihe.", exceeds: "Nwere ike igosi echiche ndị e jikọtara na ihe mere e ji họrọ nke ahụ." },
      { name: "Nhazi poster", objective: "O2", notYet: "Isiokwu ma ọ bụ ụbọchị, oge na ebe adịghị ma ọ bụ siri ike ịgụ.", meets: "Otu isiokwu buru ibu, ahịrị mkpụmkpụ ole na ole, agba doro anya, na ụbọchị, oge na ebe dị mfe ịgụ.", exceeds: "Nhazi ahụ dabara klọb ma ọ bụ mmemme ahụ, onye klas nwekwara ike ịgụ ya site n'ofe ọnụ ụlọ." },
      { name: "Olu nke ya", objective: "O3", notYet: "Ọ dịghị ihe dị na poster ahụ bụ nke onye na-amụ ihe, ma ọ bụ o ji ihe osise ma ọ bụ logo onye ọzọ.", meets: "Ọ nwere otu ihe naanị onye na-amụ ihe nwere ike itinye, dị ka foto, ihe osise ma ọ bụ slogan.", exceeds: "Ọtụtụ okwu na nhọrọ doro anya na ha bụ nke onye na-amụ ihe." },
      { name: "Ndetu otuto", objective: "O3", notYet: "Enweghị ndetu, ma ọ bụ ọ na-ezo otu AI siri nyere aka.", meets: "Obere ndetu na-ekwu ihe AI mere na ihe onye na-amụ ihe mere.", exceeds: "Ndetu ahụ doro anya nke ọma, dị ka ngwa e ji chepụta echiche ahụ." },
      { name: "Gbasoro iwu", objective: "O6", notYet: "Jiri ngwa ma ọ bụ akụkụ megidere iwu afọ ya, iwu ụlọ akwụkwọ ma ọ bụ iwu asọmpi.", meets: "Ngwa na akụkụ niile e jiri bụ ndị e kwere maka afọ na ụlọ akwụkwọ onye na-amụ ihe.", exceeds: "Nwere ike ịkọwa iwu ndị o lelere na ebe o lelere ha." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe kwuru na ha jiri AI nwalee onwe ha ma ọ bụ mụta nka n'ime nnyocha nsochi ụbọchị 30",
      "Poster ma ọ bụ ọrụ e mere n'ihe ọmụmụ a nke klọb, mmemme ma ọ bụ klas jiri n'ezie",
      "Ndị na-amụ ihe malitere ihe ọmụmụ ntorobịa Koach Learn ọzọ n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị, kọmputa ụlọ akwụkwọ ma ọ bụ kọmputa ọba akwụkwọ nwere ịntanetị",
      "Ngwa enyemaka AI n'efu e kwere ka onye na-amụ ihe jiri, na Canva, Google Slides ma ọ bụ PowerPoint",
      "Ndetu klas site n'otu isiokwu maka nkuzi ọmụmụ ihe",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Lelee iwu afọ nke ngwa ọ bụla na akụkụ AI ọ bụla na-eme foto tupu klas, ma jiri akaụntụ ụlọ akwụkwọ ebe ụlọ akwụkwọ nyere ha.",
      "Kesaa iwu AI nke ụlọ akwụkwọ ma ọ bụ mmemme gị na mmalite, gụnyere ma e kwere foto AI mere.",
      "Chetara ndị na-amụ ihe ka ha ghara itinye ozi nzuzo mgbe ha na-eme ka ndetu bụrụ ajụjụ omume.",
      "Mee obere ngosi poster ebe ndị na-amụ ihe na-akọwa ndetu otuto ha na akụkụ bụ nke ha.",
      "Jiri rubric tụọ akara poster ahụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
