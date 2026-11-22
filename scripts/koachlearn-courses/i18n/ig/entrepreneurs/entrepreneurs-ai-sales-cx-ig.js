"use strict";

// Koach Learn course (Igbo translation of entrepreneurs/entrepreneurs-ai-sales-cx.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "entrepreneurs-ai-sales-cx-ig",
  lang: "ig",
  translationOf: "entrepreneurs-ai-sales-cx",
  category: "Entrepreneurs",
  name: "AI maka Ire Ahịa na Ọrụ Ndị Ahịa",
  skills: "Ịhọrọ ndị ahịa nwere ike ịzụ (leads), Ide ozi nke onwe gị, Ịkwado maka mkparịta ụka ire ahịa, Ime FAQ maka ndị ahịa, Ịza mkpesa, Ịmụta ihe site n'echiche ndị ahịa",
  outcome: "iji AI chọta ma họrọ ndị nwere ike ịzụ ihe (leads), dee ozi nke onwe gị na-agbaso iwu, kwadoo maka mkparịta ụka ire ahịa, ma mee FAQ maka ndị ahịa na ntụziaka ịza mkpesa nke na-eme ka obi dị ndị ahịa ụtọ.",
  about: [
    "Ire ahịa na ọrụ ndị ahịa na-ekpebi ma azụmahịa ga-eto. Ihe ọmụmụ a bụ maka ndị nwe azụmahịa na-ere ahịa ha n'onwe ha ma na-enyere ndị ahịa ha aka, ma chọọ iji AI mee ha abụọ nke ọma na ngwa ngwa.",
    "N'Isi 1, ị ga-eji AI kọwaa ndị ị ga-erere ihe, hazie leads, dee ozi nke onwe gị (ọ bụghị spam), ma kwadoo maka oku ire ahịa nwere azịza nye mgbagha a na-ahụkarị. N'Isi 2, ị ga-eme FAQ maka ndị ahịa, mụta ụzọ dị jụụ isi zaa mkpesa, ma jiri AI chọta ihe na-emegharị onwe ya n'echiche ndị ahịa.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, ya na ọrụ maka ezi azụmahịa gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. A na-akọwa iwu gbasara oku, ozi ederede na email n'okwu dị mfe; nke a abụghị ndụmọdụ ọka iwu."
  ],
  finalTask: "Mee ngwugwu ire ahịa na ọrụ ndị ahịa maka azụmahịa gị: obere ndepụta leads 10 a họrọrọ nwere ihe kpatara nke ọ bụla, ozi abụọ nke onwe gị, ntụziaka oku otu peeji nwere azịza nye mgbagha atọ ị na-anụkarị, FAQ nwere ajụjụ 10, na ụdị azịza mkpesa (template). Lelee eziokwu niile, ma etinyela ozi nzuzo onye ahịa ọ bụla na ngwa AI ọ bụla.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nwe obere azụmahịa na US na-ere ahịa ha n'onwe ha ma na-enyere ndị ahịa aka, dị ka ndị na-enye ọrụ, ndị nwe ụlọ ahịa na ndị na-erere azụmahịa ndị ọzọ ihe (B2B).",
    startingPoint: "Ha na-agwa ndị ahịa okwu kwa ụbọchị ma na-aza ajụjụ site n'ekwentị, email ma ọ bụ ozi ederede. Ọ bụ mmadụ ole na ole nwere ndepụta leads, ntụziaka oku, FAQ ma ọ bụ ụzọ e debere isi zaa mkpesa, ọtụtụ amaghịkwa nke ọma iwu gbasara izigara ndị mmadụ ozi mbụ.",
    gap: "Ndị nwe azụmahịa na-egbu oge na leads na-agaghị azụ ihe, na-ezipu ozi n'ozuzu na-emebi iwu email, oku ma ọ bụ ozi ederede, ma na-aza mkpesa n'ụzọ na-eme ka ndị ahịa pụọ. Ha kwesịrị iji AI tinye uche n'ire ahịa ha, kpọtụrụ ndị mmadụ n'ụzọ nke onwe ha ma nke iwu kwadoro, ma zaa ndị ahịa n'udo na n'otu ụzọ mgbe niile.",
    constraints: [
      "Okwu dị mfe; a na-akọwa iwu n'ụzọ dị mfe, ọ bụghịkwa ndụmọdụ ọka iwu",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu na email",
      "Oge: ihe dị ka nkeji ise kwa nkuzi, gbakwunye ọrụ n'ezi ndị ahịa onye nwe azụmahịa",
      "Iwu email, oku na ozi ederede metụtara (CAN-SPAM, nkwenye TCPA), gụnyere maka olu AI",
      "Etinyela aha ndị ahịa, ozi nkwurịta okwu ha ma ọ bụ ozi nzuzo ha na ngwa AI ọ bụla"
    ],
    prerequisites: "\"Mmalite AI maka Ndị Na-azụ Ahịa\". \"Mgbasa Ozi Azụmahịa na Imepụta Ihe Ọdịnaya site n'AI\" na-enyere aka n'ịkọwa ezigbo onye ahịa gị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị leads 15 site n'ozi ọha na ndị ị maara", action: "ịtụ ha akara n'ihe gbasara nsogbu, ego, mkpebi na oge, ma họrọ 10 kacha mma", standard: "ya na ihe kpatara nke ọ bụla e dere ede" },
    { id: "O2", condition: "Mgbe e nyere gị leads abụọ site na ndepụta gị", action: "ide ozi mbụ dị mkpụmkpụ, nke onwe gị, na-agbaso iwu email, oku na ozi ederede nke US", standard: "nke ọ bụla nwere ezi ihe gbasara lead ahụ, adreesị gị na ahịrị maka ịkwụsị inweta ozi (opt-out)" },
    { id: "O3", condition: "Tupu mkparịta ụka ire ahịa", action: "ime ntụziaka oku otu peeji nwere ajụjụ mepere emepe ise na azịza nye mgbagha atọ ị na-anụkarị", standard: "ya na azịza ọ bụla bụ eziokwu, ma i jirila AI mee ya otu ugboro dị ka egwuregwu (role-play)" },
    { id: "O4", condition: "Mgbe e nyere gị opekata mpe ajụjụ ndị ahịa 10 n'ezie, e wepụrụ aha ha", action: "ime FAQ nwere ajụjụ 10 ya na azịza e dere site n'eziokwu nke gị", standard: "ya na azịza ọ bụla e lelere" },
    { id: "O5", condition: "Mgbe e nyere gị mkpesa n'ezie ma ọ bụ nke e chepụtara", action: "ịhọrọ ụzọ ziri ezi isi dozie ya ma dee azịza dị jụụ nwere ekele, ndo, ihe ị ga-eme na mgbe", standard: "ya na ọ bụ gị, ọ bụghị AI, kpebiri ihe a ga-eme" },
    { id: "O6", condition: "Mgbe e nyere gị opekata mpe echiche ndị ahịa 20", action: "iji AI chọta isiokwu ndị bụ isi ma họrọ otu ihe a ga-eme ka ọ ka mma", standard: "mgbe i lelechara ọnụọgụ AI n'onwe gị" }
  ],
  chapters: [
    {
      name: "Isi 1: Ire ahịa site n'AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịchọta na ịhọrọ leads",
          minutes: 5,
          goal: "Mee obere ndepụta leads ma kpebie ndị nwere ike ịzụ ihe karịa.",
          text: [
            "Lead bụ mmadụ ma ọ bụ azụmahịa nwere ike ịzụ ihe n'aka gị. Ịhọrọ (qualify) pụtara ikpebi leads ndị ruru oge gị. Nnwale dị mfe: Ha nwere nsogbu ị na-edozi? Ha nwere ike ịkwụ ụgwọ? Ha nwere ike ikpebi? Ha chọrọ ya n'oge na-adịghị anya?",
            "AI nwere ike inyere gị aka iche ebe leads gị dị (\"Ebee ka obere ụlọ mmega ahụ (gym) n'obodo m na-achọ ndị na-asa ụlọ?\") ma tụọ akara na ndepụta i nweburu. Kọwaa lead ọ bụla n'okwu n'ozuzu, ma rịọ AI ka ọ hazie ha site n'ajụjụ anọ ahụ.",
            "Jiri ozi azụmahịa ọha, ọ bụghị ozi nzuzo onye ọ bụla. Azụla ndepụta nkwurịta okwu, ewerekwala ozi nzuzo ndị mmadụ site na weebụsaịtị (scraping); ha na-adịkarị ochie, ha nwekwara ike imebi iwu nzuzo na iwu mgbasa ozi."
          ],
          steps: ["Dee ndị bụ ndị ahịa gị kacha mma n'oge gara aga.", "Jụọ AI ebe a ga-ahụ azụmahịa ma ọ bụ ndị mmadụ yiri ha.", "Depụta leads 15 ruo 20 site n'isi iyi ọha na ndị ị maara.", "Tụọ nke ọ bụla akara n'ihe gbasara nsogbu, ego, mkpebi na oge.", "Debe 10 kacha mma, ya na ihe kpatara nke ọ bụla n'otu ahịrị."],
          words: [["Lead", "mmadụ ma ọ bụ azụmahịa nwere ike ịzụ ihe n'aka gị."], ["Ịhọrọ (qualify)", "ikpebi ma lead nwere ike ịzụ ihe ma ruo oge gị."]],
          slides: [
            { title: "Lead nwere ike ịzụ ihe", bullets: ["Ịhọrọ = ọ ruru oge gị?", "Nsogbu, ego, mkpebi, oge"] },
            { title: "Otu AI si enyere aka", bullets: ["Iche ebe leads dị", "Ịhazi ndepụta gị site n'ajụjụ anọ ahụ"] },
            { title: "Mee ya n'ụzọ ziri ezi", bullets: ["Jiri ozi azụmahịa ọha", "Enweghị ndepụta a zụrụ azụ ma ọ bụ ozi nzuzo e weere site na weebụsaịtị"] }
          ],
          tryIt: "Depụta leads 15, jiri enyemaka AI tụọ ha akara n'ihe gbasara nsogbu, ego, mkpebi na oge, ma debe 10 kacha mma ya na ihe kpatara nke ọ bụla.",
          youCanNow: "ịchọta leads ma tinye uche na ndị nwere ike ịzụ ihe karịa.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ lead a họrọrọ (qualified lead)?", options: ["Onye nwere nsogbu ahụ, ego, ikike ikpebi, ma chọọ ya n'oge na-adịghị anya", "Onye ọ bụla ị nwere ike ịchọta email ya", "Enyi na-amasị post gị", "Azụmahịa n'ọrụ ọzọ"], answer: 0, why: "Leads a họrọrọ na-agafe ajụjụ anọ ahụ: nsogbu, ego, mkpebi na oge." },
            { objective: "O1", q: "Echiche gị masịrị otu lead nke ukwuu, mana o nweghị ego ruo afọ ọzọ. Gịnị ka ị ga-eme?", options: ["Tinye ya n'elu ndepụta gị", "Nye ya obere akara n'ego na oge, ma kpọtụrụ ya ọzọ ma emechaa", "Hichapụ ya ruo mgbe ebighị ebi", "Zigara ya ozi iri"], answer: 1, why: "Ịtụ akara na-enyere gị aka itinye uche na ndị nwere ike ịzụ ihe ugbu a." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide ozi mbụ nke onwe gị, ọ bụghị spam",
          minutes: 5,
          goal: "Dee ozi mbụ dị mkpụmkpụ, nke onwe gị, na-agbaso iwu email, oku na ozi ederede nke US.",
          text: [
            "Ezigbo ozi mbụ dị mkpụmkpụ ma gbasa ha: ihe i hụrụ banyere azụmahịa ha, nsogbu ị nwere ike inyere aka na ya, na otu nzọụkwụ ọzọ dị mfe. Jụọ AI: \"Dee email mbụ nwere okwu 70 nye onye nwe obere ụlọ mmega ahụ. Kwuo na nyocha (reviews) ha na-ekwu na ụlọ mgbanwe uwe dị ọcha dị mkpa. Nye ha nleta nkeji 15 n'efu. Etinyela okwu mbuli elu.\" Wee tinye otu ihe naanị gị maara.",
            "Maka email azụmahịa, iwu CAN-SPAM Act chọrọ ka aha onye zitere (From) na isiokwu (subject) bụrụ eziokwu, ka adreesị ebe azụmahịa gị dị n'ezie dị ya, na ka e nwee ụzọ doro anya isi kwụsị inweta ozi (opt-out). A ga-asọpụrụ arịrịọ opt-out n'ime ụbọchị ọrụ 10.",
            "Oku na ozi ederede nwere iwu siri ike karị. Ozi ederede mgbasa ozi na oku igwe (robocalls) na-achọkarị nkwenye onye ahụ tupu. N'afọ 2024, FCC kpebiri na olu AI mepụtara bụ olu \"arụrụ arụ\" (artificial) n'okpuru iwu Telephone Consumer Protection Act. Ejila oku olu AI ma ọ bụ ozi ederede e zigara ọtụtụ mmadụ n'enweghị nkwenye, ma lelee fcc.gov ma ọ bụ jụọ ọka iwu tupu ịmalite."
          ],
          steps: ["Dee otu ezi ihe gbasara lead ahụ site n'ozi ọha.", "Rịọ AI ka o dee ozi dị mkpụmkpụ: ọnọdụ ha, enyemaka gị, otu nzọụkwụ ọzọ.", "Tinye ihe nke onwe gị ma lelee eziokwu ọ bụla.", "Maka email, tinye adreesị gị na ahịrị opt-out.", "Ezigala onye ọ bụla ozi ederede ma ọ bụ oku AI n'enweghị nkwenye ya."],
          words: [["Ozi mbụ (outreach)", "ịkpọtụrụ onye nwere ike ịbụ onye ahịa na mbụ."], ["CAN-SPAM Act", "iwu US nwere iwu gbasara email azụmahịa."], ["TCPA", "Telephone Consumer Protection Act: iwu US na-egbochi oku na ozi ederede mgbasa ozi n'enweghị nkwenye."]],
          slides: [
            { title: "Mkpụmkpụ ma gbasa ha", bullets: ["Ihe i hụrụ", "Nsogbu ị na-edozi", "Otu nzọụkwụ ọzọ dị mfe"] },
            { title: "Iwu email (CAN-SPAM)", bullets: ["Aha onye zitere na isiokwu bụ eziokwu", "Adreesị ebe azụmahịa gị dị n'ezie", "A na-asọpụrụ opt-out n'ime ụbọchị ọrụ 10"] },
            { title: "Oku na ozi ederede", bullets: ["Ozi ederede mgbasa ozi na robocalls na-achọkarị nkwenye", "Olu AI bụ olu arụrụ arụ (FCC 2024)", "Buru ụzọ lelee fcc.gov ma ọ bụ jụọ ọka iwu"] }
          ],
          sources: [{ name: "FTC: CAN-SPAM Act Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" }, { name: "FCC: AI-generated voices in robocalls ruling (2024)", url: "https://www.fcc.gov/document/fcc-makes-ai-generated-voices-robocalls-illegal" }],
          tryIt: "Jiri enyemaka AI dee email mbụ abụọ nke onwe gị nye leads site na ndepụta gị. Tinye ezi ihe n'ime nke ọ bụla, ma lelee na adreesị gị na ahịrị opt-out dị n'ime ha.",
          youCanNow: "ide ozi mbụ nke onwe gị na-asọpụrụ iwu email, oku na ozi ederede.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka email azụmahịa ga-enwerịrị n'okpuru CAN-SPAM?", options: ["Mbelata ọnụahịa", "Foto gị", "Ụzọ isi kwụsị inweta ozi (opt-out)", "Nọmba ekwentị ụlọ gị"], answer: 2, why: "Email azụmahịa ga-enye ụzọ isi kwụsị inweta ozi." },
            { objective: "O2", q: "AI dere email mbụ nke a pụrụ izigara onye ọ bụla. Gịnị ka ị ga-eme?", options: ["Zigara ya mmadụ niile", "Mee ka ọ dị ogologo", "Tinye okwu ire ahịa ndị ọzọ", "Tinye ezi ihe i hụrụ banyere lead a"], answer: 3, why: "Ezi ihe na-eme ka ozi ahụ bụrụ nke onwe gị, ọ bụghị spam." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịkwado maka mkparịta ụka ire ahịa",
          minutes: 5,
          goal: "Mee ntụziaka oku otu peeji nwere ajụjụ na azịza nye mgbagha a na-ahụkarị.",
          text: [
            "Mkparịta ụka ire ahịa bụ ọkachasị ige ntị. Kwadoo ajụjụ ise dị mma banyere ọnọdụ onye ahịa, nsogbu ya na ihe ọ chọrọ imezu, wee kọwaa otu ị na-esi enyere aka n'okwu ya.",
            "Mgbagha (objections) bụ ihe ndị mmadụ na-ekwu dị ka ihe kpatara ha anaghị azụ: \"Ọ dị oke ọnụ.\" \"Achọrọ m iche maka ya.\" \"Anyị nwere onye na-eme ya.\" Jụọ AI: \"Depụta mgbagha ise a na-ahụkarị maka [ọrụ] ma nye azịza dị jụụ, bụ eziokwu, nye nke ọ bụla.\" Dezie ha ka ha yie okwu gị ma bụrụ eziokwu.",
            "Mee egwuregwu (role-play) na AI: \"Mee ka ị bụ onye nwe ụlọ mmega ahụ nwere ọrụ n'aka, onye na-ejighị n'aka ma ọ ga-ewe ndị na-asa ụlọ. Jụọ m ajụjụ siri ike.\" Mee ya ruo mgbe ị nwere ike ịza n'agụghị akwụkwọ."
          ],
          steps: ["Dee ajụjụ mepere emepe ise banyere ọnọdụ onye ahịa na ihe ọ chọrọ.", "Rịọ AI maka mgbagha a na-ahụkarị na azịza bụ eziokwu.", "Dezie azịza ndị ahụ ka ha bụrụ eziokwu ma yie okwu gị.", "Mee mkparịta ụka ahụ dị ka egwuregwu na AI.", "Tinye ha niile n'otu peeji."],
          words: [["Mgbagha (objection)", "ihe onye ahịa na-ekwu dị ka ihe kpatara na ọ zụbeghị."], ["Egwuregwu (role-play)", "ime mkparịta ụka dị ka ihe nkiri iji mụọ ya."], ["Ajụjụ mepere emepe", "ajụjụ a na-apụghị ịza naanị site n'ịsị ee ma ọ bụ mba."]],
          slides: [
            { title: "Ọkachasị ige ntị", bullets: ["Ajụjụ mepere emepe ise", "Ọnọdụ ha, nsogbu ha, ihe ha chọrọ", "Kọwaa enyemaka gị n'okwu ha"] },
            { title: "Kwadoo maka mgbagha", bullets: ["\"Ọ dị oke ọnụ\"", "\"Achọrọ m iche maka ya\"", "\"Anyị nwere onye na-eme ya\""] },
            { title: "Mụọ ya na AI", bullets: ["Rịọ AI ka ọ bụrụ onye ahịa na-enwe obi abụọ", "Zaa n'olu dị elu", "Megharịa ya ruo mgbe ọ dị gị mfe"] }
          ],
          tryIt: "Mee ntụziaka oku gị otu peeji: ajụjụ mepere emepe ise na azịza bụ eziokwu nye mgbagha atọ ị na-anụkarị. Mee egwuregwu otu ugboro na AI.",
          youCanNow: "ịkwado ma mụọ mkparịta ụka ire ahịa site n'AI.",
          quickCheck: [
            { objective: "O3", q: "Gịnị bụ ajụjụ mepere emepe?", options: ["Ajụjụ a na-apụghị ịza naanị site n'ịsị ee ma ọ bụ mba", "Ajụjụ gbasara naanị ọnụahịa", "Ajụjụ ị na-ajụ AI", "Ajụjụ na-enweghị azịza"], answer: 0, why: "Ajụjụ mepere emepe na-eme ka onye ahịa kwuo maka mkpa ya." },
            { objective: "O3", q: "Azịza AI nye mgbagha \"Achọrọ m iche maka ya\" dị ka ịmanye mmadụ. Gịnị ka ị ga-eme?", options: ["Jiri ya otu o si dị", "Dezie ya ka ọ bụrụ eziokwu ma yie okwu gị", "Hapụ ntụziaka oku ahụ", "Gụọ ya okwu n'okwu ngwa ngwa karị"], answer: 1, why: "Ị na-edezi azịza AI ka ha bụrụ eziokwu ma dị n'olu nke gị." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ire ahịa site n'AI",
        questions: [
          { objective: "O1", q: "Kedu lead a họrọrọ nke ọma karịa?", options: ["Onye na-achọghị ọrụ gị", "Azụmahịa nwere nsogbu ahụ, ego, onye na-ekpebi, ma chọọ ya n'oge na-adịghị anya", "Adreesị email ọ bụla", "Onye na-asọ mpi na gị"], answer: 1, why: "Ọ na-agafe ajụjụ anọ ahụ niile." },
          { objective: "O1", q: "Ebee ka ozi gbasara leads gị kwesịrị isi bịa?", options: ["Faịlụ nzuzo ndị ahịa", "Ozi nzuzo e weere site na weebụsaịtị", "Ndepụta ndị ọbịa a zụrụ azụ", "Ozi azụmahịa ọha na ndị ị maara"], answer: 3, why: "Ozi ọha na-egbochi nsogbu nzuzo na nsogbu mgbasa ozi." },
          { objective: "O2", q: "Ezigbo ozi mbụ bụ:", options: ["Mkpụmkpụ, gbasara ha, nwere otu nzọụkwụ ọzọ dị mfe", "Ogologo ma gbasara naanị gị", "E zigara mmadụ 1,000 n'agbanweghị ya", "Jupụtara n'okwu \"e kwere nkwa\" (guaranteed)"], answer: 0, why: "Ozi nke onwe gị na nke dị mkpụmkpụ na-enweta azịza." },
          { objective: "O2", q: "Ị nwere ike izigara ndị na-enyeghị nkwenye oku igwe nwere olu AI?", options: ["Ee, na ngwụcha izu", "Ee, iwu ahụ anaghị emetụta olu AI", "Mba, iwu nkwenye na-emetụtakwa olu AI", "Naanị nye azụmahịa nọ na steeti ndị ọzọ"], answer: 2, why: "FCC na-ewere olu AI dị ka olu arụrụ arụ n'okpuru TCPA." },
          { objective: "O3", q: "Onye ahịa kwuru \"Ọ dị oke ọnụ.\" A na-akpọ nke a:", options: ["Ihe na-akpali (trigger)", "Lead", "Mgbagha (objection)", "Nkwụghachi ego"], answer: 2, why: "Mgbagha bụ ihe kpatara na onye ahụ azụbeghị." }
        ]
      }
    },
    {
      name: "Isi 2: Ime ka obi dị ndị ahịa ụtọ",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ime FAQ maka ndị ahịa",
          minutes: 5,
          goal: "Mee FAQ nwere ajụjụ 10 site n'ajụjụ ndị ahịa na-ajụ n'ezie.",
          text: [
            "Ndị ahịa na-ajụ otu ajụjụ ahụ ugboro ugboro. Peeji ma ọ bụ akwụkwọ ajụjụ a na-ajụkarị (FAQ) na-echekwa gị oge ma na-enyere ndị ahịa aka ikpebi ngwa ngwa.",
            "Chịkọta ezi ajụjụ site na email, ozi na oku ruo izu abụọ (wepụ aha na ozi nkwurịta okwu). Rịọ AI ka o kee ha otu otu ma dee azịza doro anya, dị mkpụmkpụ, site naanị n'eziokwu i nyere ya: ọnụahịa, oge mmeghe, ebe ị na-eje ozi, iwu azụmahịa gị.",
            "Lelee azịza ọ bụla. Wee jiri FAQ ahụ na weebụsaịtị gị, n'azịza ị chekwara, na dị ka eziokwu maka chatbot ọ bụla. Ọ bụrụ na i ji chatbot, gwa ndị ahịa na ọ bụ igwe na-aza, ma nye ha ụzọ dị mfe isi kpọtụrụ mmadụ."
          ],
          steps: ["Chịkọta ajụjụ ndị ahịa ruo izu abụọ, n'enweghị aha ma ọ bụ ozi nkwurịta okwu.", "Rịọ AI ka o kee ha otu otu ma họrọ 10 kacha.", "Nye AI ezi eziokwu gị ma rịọ maka azịza dị mkpụmkpụ.", "Lelee azịza ọ bụla.", "Bipụta FAQ ahụ ma jiri ya n'azịza gị."],
          words: [["FAQ", "frequently asked questions (ajụjụ a na-ajụkarị): ndepụta ajụjụ a na-ahụkarị ya na azịza ha."], ["Chatbot", "mmemme igwe na-aza ozi ndị ahịa n'onwe ya."]],
          slides: [
            { title: "Otu ajụjụ ahụ, kwa izu", bullets: ["FAQ na-echekwa gị oge", "Ọ na-enyere ndị ahịa aka ikpebi ngwa ngwa"] },
            { title: "Mee ya site n'ezi ajụjụ", bullets: ["Chịkọta ruo izu abụọ, n'enweghị aha", "AI na-eke ha otu otu ma dee azịza mbụ", "Naanị site n'eziokwu i nyere ya"] },
            { title: "Jiri ya ebe niile", bullets: ["Weebụsaịtị na azịza ị chekwara", "Eziokwu maka chatbot ọ bụla", "Kwuo na ọ bụ igwe; nye ụzọ isi kpọtụrụ mmadụ"] }
          ],
          tryIt: "Chịkọta opekata mpe ajụjụ ndị ahịa 10 n'ezie (n'enweghị aha), jiri AI kee ha otu otu ma dee azịza site n'eziokwu gị, lelee nke ọ bụla, ma chekwaa FAQ gị.",
          youCanNow: "ịgbanwe ezi ajụjụ ndị ahịa ka ọ bụrụ FAQ e lelere.",
          quickCheck: [
            { objective: "O4", q: "Ebee ka ajụjụ FAQ kwesịrị isi bịa?", options: ["Ihe AI chere", "Weebụsaịtị onye na-asọ mpi na gị", "Ajụjụ ezi ndị ahịa na-ajụ", "Ajụjụ ị chọrọ ka ndị mmadụ jụọ"], answer: 2, why: "Ezi ajụjụ na-eme FAQ na-enyere aka n'ezie." },
            { objective: "O4", q: "Azịza FAQ AI dere kwuru oge nnyefe ị na-anaghị enye. Gịnị ka ị ga-eme?", options: ["Bipụta ya", "Gbanwee oge nnyefe gị", "Wepụ FAQ ahụ niile", "Dozie ya site n'ezi eziokwu gị"], answer: 3, why: "Azịza FAQ ga-adabere n'eziokwu gị." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịza mkpesa n'udo",
          minutes: 5,
          goal: "Jiri AI dee azịza dị jụụ, ziri ezi nye mkpesa, ma kpebie otu ị ga-esi dozie ya.",
          text: [
            "Mkpesa a zara nke ọma nwere ike ime ka onye ahịa nọrọ gị ruo ndụ ya niile. Usoro dị mfe: kelee ha, kwuo ndo maka ihe merenụ ha, kwuo ihe ị ga-eme, ma kwuo mgbe. Esela okwu n'ihu ọha; nye ha ka unu gaa n'ihu na nzuzo.",
            "Mgbe iwe na-ewe gị, AI na-enyere gị aka ịnọ jụụ. Kọwaa mkpesa ahụ n'okwu gị (n'enweghị aha ma ọ bụ nọmba ihe e nyere iwu (order)) ma jụọ: \"Dee azịza dị jụụ, dị mkpụmkpụ, nke na-ekele ha, na-arịọ mgbaghara, na-enye [ihe a ga-eme], ma na-akpọ ha ka ha zitere anyị ozi na nzuzo.\"",
            "Ọ bụ gị na-ekpebi ihe a ga-eme. Ekwela ka AI kwe nkwa nkwụghachi ego ma ọ bụ kredit i kwenyeghị na ya, ejikwala AI dee nyocha ọma adịgboroja iji kpuchie nke ọjọọ; FTC machibidoro nyocha adịgboroja iwu, gụnyere ndị AI dere."
          ],
          steps: ["Gụọ mkpesa ahụ ma chere nkeji ole na ole tupu ị zaa.", "Kpebie n'onwe gị ụzọ ziri ezi isi dozie ya.", "Kọwaara AI mkpesa ahụ n'enweghị aha ma ọ bụ nọmba order.", "Rịọ maka azịza dị jụụ: ekele, ndo, ihe ị ga-eme, mgbe, gaa na nzuzo.", "Dezie, lelee, ma zipu."],
          words: [["Mkpesa", "onye ahịa na-agwa gị na ihe mehiere."], ["Ihe a ga-eme (fix)", "ihe ị ga-eme iji mezie ya, dị ka ime ya ọzọ ma ọ bụ ịkwụghachi ego."]],
          slides: [
            { title: "Usoro azịza", bullets: ["Kelee ha", "Kwuo ndo maka ihe merenụ ha", "Kwuo ihe ị ga-eme na mgbe"] },
            { title: "AI na-eme ka ị nọrọ jụụ", bullets: ["Kọwaa ya n'enweghị aha ma ọ bụ nọmba order", "Rịọ maka azịza mbụ dị mkpụmkpụ, dị jụụ", "Mee ka mkparịta ụka ahụ gaa na nzuzo"] },
            { title: "Ọ bụ gị na-ekpebi", bullets: ["Ihe a ga-eme bụ nhọrọ gị", "Enweghị nkwa i kwadoghị", "Ejila nyocha adịgboroja kpuchie nke ọjọọ"] }
          ],
          sources: [{ name: "FTC: Final rule banning fake reviews and testimonials (press release)", url: "https://www.ftc.gov/news-events/news/press-releases/2024/08/federal-trade-commission-announces-final-rule-banning-fake-reviews-testimonials" }],
          tryIt: "Were mkpesa n'ezie ma ọ bụ nke e chepụtara, kpebie ụzọ ziri ezi isi dozie ya, ma jiri AI dee azịza dị jụụ site n'usoro akụkụ anọ ahụ. Chekwaa ya dị ka ụdị azịza mkpesa gị (template).",
          youCanNow: "ịza mkpesa n'udo na n'ụzọ ziri ezi site n'enyemaka AI, ma kpebie n'onwe gị ihe a ga-eme.",
          quickCheck: [
            { objective: "O5", q: "Kedu akụkụ anọ nke azịza dị jụụ nye mkpesa?", options: ["Ekele, ndo, ihe ị ga-eme, mgbe", "Ịgọnahụ, igbu oge, ịgbachitere onwe, ihichapụ", "Ọnụahịa, ngwaahịa, ebe, mgbasa ozi", "Ndewo, ka ọ dị, bịanye aka, zipu"], answer: 0, why: "Usoro a na-eme ka azịza dị jụụ, ziri ezi ma doo anya." },
            { objective: "O5", q: "Azịza mbụ AI dere na-enye nkwụghachi ego zuru ezu i kwenyeghị na ya. Gịnị ka ị ga-eme?", options: ["Zipu ya", "Kpebie n'onwe gị ụzọ ziri ezi ma gbanwee azịza ahụ", "Hapụ AI ka o kpebie", "Leghara mkpesa ahụ anya"], answer: 1, why: "Ọ bụ gị na-ekpebi ihe a ga-eme; AI na-ede naanị okwu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịmụta ihe site n'echiche ndị ahịa",
          minutes: 5,
          goal: "Jiri AI chọta ihe na-emegharị onwe ya na nyocha na echiche ndị ahịa, ma họrọ otu ihe a ga-eme ka ọ ka mma.",
          text: [
            "Nyocha (reviews), azịza nnyocha (survey) na ozi na-agwa gị ihe ị ga-edozi na ihe ị ga-edebe. Ọ bụrụ na ị gụọ ha otu otu, ị ga-atụfu ihe na-emegharị onwe ya. AI maara ike n'ịkekọta ihe otu otu.",
            "Detuo nyocha ma ọ bụ echiche 20 ruo 50 (wepụ aha) ma jụọ: \"Kee echiche ndị a n'isiokwu. Maka isiokwu ọ bụla, kwuo ole echiche kwuru maka ya ma nye otu ọmụmaatụ. Depụta ihe atọ kacha masị ndị ahịa na nsogbu atọ kacha.\"",
            "Lelee ọnụọgụ ndị ahụ site n'ịgụfe ha n'onwe gị, n'ihi na AI nwere ike ịgụhie. Wee họrọ otu nsogbu ị ga-edozi n'ọnwa a, dozie ya, ma gwa ndị ahịa na i gere ntị."
          ],
          steps: ["Chịkọta nyocha ma ọ bụ echiche 20 ruo 50 ma wepụ aha.", "Rịọ AI ka o kee ha n'isiokwu, ya na ọnụọgụ na ọmụmaatụ.", "Gụfee ha iji lelee isiokwu na ọnụọgụ.", "Họrọ otu nsogbu ị ga-edozi n'ọnwa a.", "Gwa ndị ahịa ihe i gbanwere."],
          words: [["Isiokwu (theme)", "ihe a na-ekwu ugboro ugboro n'echiche ndị ahịa."], ["Nnyocha (survey)", "obere ajụjụ ị na-ajụ ndị ahịa."]],
          slides: [
            { title: "Echiche ndị ahịa na-egosi ụzọ", bullets: ["Nyocha, survey, ozi", "Otu otu, ị na-atụfu ihe na-emegharị onwe ya"] },
            { title: "AI na-ekekọta ha", bullets: ["Buru ụzọ wepụ aha", "Isiokwu, ọnụọgụ na ọmụmaatụ", "Ihe atọ kacha masị ha na nsogbu atọ kacha"] },
            { title: "Mee ihe banyere ya", bullets: ["Lelee ọnụọgụ n'onwe gị", "Dozie otu nsogbu n'ọnwa a", "Gwa ndị ahịa na i gere ntị"] }
          ],
          tryIt: "Ọrụ ikpeazụ: jiri AI nyochaa opekata mpe echiche ndị ahịa 20, họrọ otu ihe ị ga-edozi, wee chịkọta ngwugwu ire ahịa na ọrụ ndị ahịa gị: leads 10 a họrọrọ, ozi mbụ abụọ, ntụziaka oku, FAQ na ụdị azịza mkpesa.",
          youCanNow: "iji AI n'ire ahịa na ọrụ ndị ahịa: ịchọta leads, ịkpọtụrụ ha n'ụzọ ziri ezi, ịkwado, ịza ndị ahịa, na ịna-eme ka ihe ka mma.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ isiokwu n'echiche ndị ahịa?", options: ["Otu echiche iwe", "Agba weebụsaịtị gị", "Ihe a na-ekwu ugboro ugboro", "Nyocha kpakpando ise"], answer: 2, why: "Isiokwu na-egosi nsogbu ọtụtụ ndị ahịa nwere." },
            { objective: "O6", q: "AI kwuru na ọtụtụ echiche gbasara ọnụahịa, mana i chetara ọtụtụ echiche gbasara ogologo oge nchere. Gịnị ka ị ga-eme?", options: ["Kwere AI", "Wedata ọnụahịa ozugbo", "Rịọ AI ka o kwenye na gị", "Gụfee echiche ndị ahụ n'onwe gị iji lelee"], answer: 3, why: "Lelee ọnụọgụ AI n'onwe gị tupu i mee ihe banyere ha." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ime ka obi dị ndị ahịa ụtọ",
        questions: [
          { objective: "O4", q: "Ebee ka ajụjụ FAQ kwesịrị isi bịa?", options: ["Ezi ajụjụ ndị ahịa na-ajụ", "Ajụjụ AI chepụtara", "Saịtị onye na-asọ mpi na gị", "Ihe a chere n'efu"], answer: 0, why: "Ezi ajụjụ na-eme FAQ bara uru." },
          { objective: "O4", q: "Ọ bụrụ na i ji chatbot, ị kwesịrị:", options: ["Izo ozi nkwurịta okwu gị", "Ime ka ọ dị ka ọ bụ mmadụ", "Ikwe ka o kwe nkwa nkwụghachi ego", "Ịgwa ndị ahịa na ọ bụ igwe ma nye ha ụzọ isi kpọtụrụ mmadụ"], answer: 3, why: "Eziokwu na ụzọ dị mfe isi kpọtụrụ mmadụ na-edebe ntụkwasị obi." },
          { objective: "O5", q: "Onye na-ekpebi ihe a ga-eme maka mkpesa?", options: ["AI", "Gị", "Ndị enyi onye ahịa", "Ọ dịghị onye"], answer: 1, why: "AI na-ede okwu; ọ bụ gị na-ekpebi ihe a ga-eme." },
          { objective: "O5", q: "Nyocha ọjọọ pụtara. Kedu azịza megidere iwu FTC?", options: ["Itinye nyocha ọma adịgboroja iji kpuchie ya", "Ịza n'udo", "Idozi nsogbu ahụ", "Ịkpọ onye ahịa ka unu kparịta na nzuzo"], answer: 0, why: "FTC machibidoro nyocha adịgboroja iwu, gụnyere ndị AI dere." },
          { objective: "O6", q: "AI kwuru na echiche 30 kwuru maka nnyefe na-egbu oge. Gịnị ka ị kwesịrị ime?", options: ["Hichapụ echiche ndị ahụ", "Kwere ya kpamkpam", "Gụfee ha iji lelee ọnụọgụ ahụ n'onwe gị", "Leghara ya anya"], answer: 2, why: "AI nwere ike ịgụhie; lelee tupu i mee ihe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ire Ahịa na Ọrụ Ndị Ahịa",
    questions: [
      { objective: "O1", q: "Lead bụ:", options: ["Onye ahịa kwụrụ ụgwọ", "Mmadụ ma ọ bụ azụmahịa nwere ike ịzụ ihe n'aka gị", "Mkpesa", "Ngwaahịa"], answer: 1, why: "Nke ahụ bụ nkọwa ya." },
      { objective: "O1", q: "Ajụjụ anọ e ji ahọrọ leads gbasara:", options: ["Logo, mkpụrụ edemede, weebụsaịtị na app", "Agba, nha, ịdị arọ na ọdịdị", "Aha, afọ, adreesị na ekwentị", "Nsogbu, ego, mkpebi na oge"], answer: 3, why: "Ha na-egosi onye nwere ike ịzụ ihe." },
      { objective: "O1", q: "Kedu isi iyi leads dị mma iji?", options: ["Faịlụ ndị ahịa onye na-asọ mpi na gị", "Ndepụta nọmba ekwentị nzuzo a zụrụ azụ", "Ozi nzuzo e weere site na weebụsaịtị", "Ndepụta azụmahịa ọha"], answer: 3, why: "Ozi azụmahịa ọha na-egbochi nsogbu nzuzo." },
      { objective: "O2", q: "Ezigbo ozi mbụ na-ekwu maka:", options: ["Naanị ihe nrite gị", "Ezi ihe i hụrụ banyere ha", "Ụbọchị njedebe adịgboroja", "Adreesị ụlọ ha"], answer: 1, why: "Ihe nke onwe ha na-egosi na i mere nchọpụta gị." },
      { objective: "O2", q: "CAN-SPAM chọrọ ka email azụmahịa nwee:", options: ["Mbelata ọnụahịa", "Ozi ụlọ akụ gị", "Ụzọ isi kwụsị inweta ozi (opt-out)", "Foto"], answer: 2, why: "Opt-out bụ otu n'ime ihe ndị bụ isi a chọrọ." },
      { objective: "O2", q: "A ga-asọpụrụ arịrịọ opt-out n'ime:", options: ["Ụbọchị ọrụ 10", "Afọ 1", "Awa 1", "Ọ dịghị mgbe"], answer: 0, why: "Ntụziaka FTC kwuru ụbọchị ọrụ 10." },
      { objective: "O2", q: "N'okpuru mkpebi FCC nke 2024, a na-ewere olu AI mepụtara n'oku dị ka:", options: ["Ihe iwu ọ bụla anaghị emetụta", "Olu mmadụ", "Olu arụrụ arụ n'okpuru TCPA", "Email"], answer: 2, why: "Ya mere iwu nkwenye na-emetụta ya." },
      { objective: "O2", q: "Tupu izipu ozi ederede mgbasa ozi, ị kwesịrị:", options: ["Inweta nkwenye onye ahụ ma lelee iwu", "Izigara onye ọ bụla nọ n'ekwentị gị", "Iji olu AI kama", "Izo aha azụmahịa gị"], answer: 0, why: "Ozi ederede mgbasa ozi na-achọkarị nkwenye." },
      { objective: "O3", q: "Mkparịta ụka ire ahịa kwesịrị ịbụ ọkachasị:", options: ["Ikwu maka onwe gị", "Ige ntị", "Ịgụ ihe e dere ede ngwa ngwa", "Mbelata ọnụahịa"], answer: 1, why: "Ige ntị na-agwa gị ihe onye ahịa chọrọ." },
      { objective: "O3", q: "Ajụjụ mepere emepe bụ nke:", options: ["Na-enweghị azịza", "Enweghị nkwanye ugwu", "Gbasara naanị ọnụahịa", "A na-apụghị ịza naanị site n'ịsị ee ma ọ bụ mba"], answer: 3, why: "Ajụjụ mepere emepe na-eme ka ndị ahịa kwuo okwu." },
      { objective: "O3", q: "Egwuregwu (role-play) na AI na-enyere gị aka:", options: ["Ịmụ ịza ajụjụ siri ike", "Ịbịanye aka na nkwekọrịta", "Ịhapụ ịkwado", "Ide nyocha adịgboroja"], answer: 0, why: "Ịmụ ya na-enye obi ike." },
      { objective: "O3", q: "Mgbe AI dere azịza nye mgbagha, ị kwesịrị:", options: ["Ịghara iji ha mgbe ọ bụla", "Ịgụ ha okwu n'okwu", "Itinye nkwa ụgha", "Idezi ha ka ha bụrụ eziokwu ma yie okwu gị"], answer: 3, why: "Azịza bụ eziokwu n'olu nke gị na-ewu ntụkwasị obi." },
      { objective: "O4", q: "FAQ na-enyere aka n'ihi na:", options: ["Ọ na-ezo ọnụahịa", "Ọ na-anọchi nkwurịta okwu niile na ndị ahịa", "Ọ na-aza ajụjụ a na-ahụkarị ngwa ngwa", "Iwu chọrọ ya"], answer: 2, why: "Ọ na-echekwa oge gị na nke ndị ahịa." },
      { objective: "O4", q: "Tupu inye AI ajụjụ ndị ahịa, ị kwesịrị:", options: ["Itinye nọmba kaadị ha", "Iwepụ aha na ozi nkwurịta okwu", "Ịrịọ okwuntughe ha", "Itinye ha n'ihu ọha"], answer: 1, why: "Wezuga ozi nzuzo na ngwa AI." },
      { objective: "O4", q: "Azịza FAQ kwesịrị ịdabere na:", options: ["Asịrị ochie", "Ihe ọ bụla AI chere", "Ọnụahịa onye na-asọ mpi na gị", "Eziokwu i nyere AI"], answer: 3, why: "AI nwere ike ịchepụta eziokwu ma ọ bụrụ na i nyeghị ya ha." },
      { objective: "O5", q: "Azịza mkpesa nwere akụkụ anọ bụ:", options: ["Mbelata, mbelata, mbelata, mbelata", "Ịgọnahụ, ise okwu, igbochi, ihichapụ", "Ekele, ndo, ihe ị ga-eme, mgbe", "Leghara ya anya"], answer: 2, why: "Ọ dị jụụ, ziri ezi ma doo anya." },
      { objective: "O5", q: "Mgbe mkpesa dị n'ihu ọha, ezigbo ihe ime bụ:", options: ["Ịza n'udo ma kpọọ ka unu gaa n'ihu na nzuzo", "Ise okwu n'ebe a na-ede echiche", "Itinye ozi onye ahịa n'ihu ọha", "Ihichapụ akaụntụ gị"], answer: 0, why: "Ịga na nzuzo na-egbochi esemokwu n'ihu ọha." },
      { objective: "O5", q: "AI nwere ike ikwe nkwa nkwụghachi ego n'azịza gị n'enweghị nkwado gị?", options: ["Ee, mgbe niile", "Mba, ọ bụ gị na-ekpebi ihe a ga-eme", "Naanị na ngwụcha izu", "Naanị maka order buru ibu"], answer: 1, why: "Mkpebi gbasara ego na-anọ n'aka gị." },
      { objective: "O6", q: "Isiokwu n'echiche ndị ahịa bụ:", options: ["Ọdịdị weebụsaịtị", "Ihe a na-ekwu ugboro ugboro", "Otu nyocha", "Mkpụrụ edemede"], answer: 1, why: "Isiokwu na-egosi ihe na-emegharị onwe ya." },
      { objective: "O6", q: "Mgbe ịchọtachara nsogbu kacha n'echiche ndị ahịa, ị kwesịrị:", options: ["Idozi ya ma gwa ndị ahịa na i gere ntị", "Ileghara ya anya", "Izo nyocha ndị ahụ", "Ịzụta nyocha ọhụrụ"], answer: 0, why: "Ime ihe banyere echiche ndị ahịa na-ewu iguzosi ike n'ihe." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 4, 8, 9, 12, 13, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Leads a họrọrọ", objective: "O1", notYet: "Leads erughị 10, enweghị ihe kpatara, ma ọ bụ leads site n'isi iyi a na-anabataghị.", meets: "Leads 10 site n'ozi ọha ma ọ bụ ndị ị maara, nke ọ bụla nwere ihe kpatara ya.", exceeds: "Lead ọ bụla na-egosi akara ya n'ihe gbasara nsogbu, ego, mkpebi na oge." },
      { name: "Ozi mbụ", objective: "O2", notYet: "Ọ dị n'ozuzu, ma ọ bụ adreesị ma ọ bụ ahịrị opt-out adịghị ya.", meets: "Ozi abụọ dị mkpụmkpụ, nke onwe gị, nwere ezi ihe, adreesị na opt-out.", exceeds: "Nke ọ bụla na-ejedebe n'otu nzọụkwụ ọzọ dị mfe, a gụpụtakwara ya n'olu dị elu tupu e zipu ya." },
      { name: "Ntụziaka oku", objective: "O3", notYet: "Ajụjụ ma ọ bụ azịza nye mgbagha adịghị ya, ma ọ bụ azịza na-ekwe nkwa karịa ihe ị ga-emeli.", meets: "Ajụjụ mepere emepe ise na azịza bụ eziokwu nye mgbagha atọ, e mere ya otu ugboro.", exceeds: "Na-ede ihe e gbanwere mgbe egwuregwu (role-play) ahụ gasịrị." },
      { name: "FAQ na ụdị azịza mkpesa", objective: "O5", notYet: "E leleghị azịza FAQ, ma ọ bụ azịza mkpesa ahụ na-ekwe nkwa ihe e kpebighị.", meets: "Azịza FAQ 10 e lelere na ụdị azịza mkpesa nwere akụkụ anọ, ya na ihe onye nwe azụmahịa kpebiri.", exceeds: "E bipụtala FAQ ahụ ma ọ bụ a na-eji ya, ụdị azịza ahụ nwekwara ahịrị na-akpọ ka unu gaa n'ihu na nzuzo." },
      { name: "Ozi nzuzo", objective: "O4", notYet: "Aha ndị ahịa ma ọ bụ ozi nkwurịta okwu ha banyere na ngwa AI.", meets: "E wepụrụ aha na ozi nkwurịta okwu n'ajụjụ na echiche niile.", exceeds: "Na-ede ntọala data nke ngwa AI ahụ e lelere." }
    ]
  },
  evaluation: {
    results: [
      "Ndị nwe azụmahịa mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Mkparịta ụka ire ahịa ma ọ bụ ndị ahịa ọhụrụ site na ndepụta leads n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nwe azụmahịa bipụtara FAQ ha ma kọọ na ajụjụ a na-ajụghachi belatara",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ maka ndị nwe azụmahịa n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ngwa enyemaka AI n'efu na email",
      "Spreadsheet maka ndepụta leads",
      "Ezi ajụjụ na echiche ndị ahịa, e wepụrụ aha na ozi nkwurịta okwu",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu maka nkuzi, ọrụ, nnwale na ngwugwu ahụ"
    ],
    facilitatorNotes: [
      "Kee ndị na-amụ ihe abụọ abụọ maka egwuregwu ire ahịa mgbe ha mechara na AI.",
      "Gosi otu esi ewepụ aha na ozi nkwurịta okwu n'ajụjụ ndị ahịa tupu iji AI.",
      "Kọwaa na a na-akọwa iwu oku, ozi ederede na email n'okwu dị mfe, ha abụghịkwa ndụmọdụ ọka iwu.",
      "Kwusie ike na ọ bụ onye nwe azụmahịa na-ekpebi ihe a ga-eme maka mkpesa ọ bụla na nkwụghachi ego ọ bụla, ọ bụghị AI.",
      "Jiri rubric tụọ akara ngwugwu ire ahịa na ọrụ ndị ahịa, otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
