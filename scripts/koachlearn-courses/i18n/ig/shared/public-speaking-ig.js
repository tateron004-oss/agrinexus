"use strict";

// Koach Learn course (Igbo translation of shared/public-speaking.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "public-speaking-ig",
  lang: "ig",
  translationOf: "public-speaking",
  category: "Athletes",
  name: "Ikwu Okwu n'Ihu Ọha na Ngosi Okwu",
  skills: "Ịhazi obere okwu, Ịhazi ozi gị, Ime slaịdị dị mfe, Ime omume na ijide ụjọ, Iji olu na omume ahụ, Ịza ajụjụ",
  outcome: "ịhazi, ime omume na ikwu obere okwu nkeji 2 doro anya nke nwere mmalite siri ike, isi ihe atọ na njedebe doro anya, ijide ụjọ gị, iji olu na ahụ gị nke ọma, na ịza ajụjụ n'udo.",
  about: [
    "Ikwu okwu n'ihu ndị mmadụ bụ otu n'ime ihe ndị mmadụ na-atụkarị ụjọ, ma ọ bụkwa otu n'ime nka kacha baa uru. Ị na-eji ya n'ajụjụ ọnụ maka ọrụ, nzukọ otu, okwu ire ahịa nye ndị ahịa ma ọ bụ ndị na-etinye ego, okwu nye ndị na-enye onyinye na ndị ọrụ afọ ofufo, ajụjụ ọnụ ndị nta akụkọ, nzukọ obodo na ụlọ mgbanwe uwe ndị egwuregwu.",
    "Ihe ọmụmụ a bụ maka ndị egwuregwu, ndị nwe azụmahịa, ndị ọrụ otu na-adịghị achọ uru, ndị agha mbụ, ndị ntorobịa, ndị ọrụ na onye ọ bụla chọrọ ikwu okwu n'obi ike. Ọ dịghị mkpa ka ị bụrụ onye a mụrụ na ya. Ịhazi na ime omume na-eme ezigbo ndị na-ekwu okwu.",
    "Ị ga-ahazi obere okwu, nye ya usoro doro anya, mee slaịdị dị mfe ma ọ bụrụ na ị chọrọ ha, mee omume, jide ụjọ, jiri olu na ahụ gị, ma zaa ajụjụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise ma na-ejedebe n'omume. Ọrụ ikpeazụ bụ okwu nkeji 2 ị ga-edekọ na ekwentị gị. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Dekọọ onwe gị na ekwentị gị ka ị na-ekwu okwu nkeji 2 banyere isiokwu ị maara nke ọma (egwuregwu gị, azụmahịa gị, ihe ị na-akwado, ọrụ gị ma ọ bụ nka i nwere). O kwesịrị inwe mmalite na-adọta mmasị, isi ihe atọ na njedebe doro anya. Lee ya ọzọ, dee otu ihe i mere nke ọma na otu ihe ị ga-eme ka ọ ka mma, wee dekọọ ya otu ugboro ọzọ.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị egwuregwu, ndị nwe azụmahịa, ndị ọrụ otu na-adịghị achọ uru, ndị agha mbụ, ndị ntorobịa, ndị ọrụ na onye ọ bụla kwesịrị ikwu okwu n'ajụjụ ọnụ, nzukọ otu, okwu ire ahịa, okwu nye ndị na-enye onyinye, ajụjụ ọnụ ndị nta akụkọ, nzukọ obodo ma ọ bụ ụlọ mgbanwe uwe ndị egwuregwu.",
    startingPoint: "Ha na-agwa ndị mmadụ okwu kwa ụbọchị ma mara isiokwu ụfọdụ nke ọma, dị ka egwuregwu ha, azụmahịa ha, ihe ha na-akwado ma ọ bụ ọrụ ha. Ọtụtụ na-atụ ụjọ ikwu okwu n'ihu otu, na-agagharị n'okwu n'enweghị usoro, na-agụ site na slaịdị, ma ha ahụbeghị onwe ha na vidiyo mgbe ọ bụla.",
    gap: "Ikwu okwu nke ọma na-enyere ndị mmadụ aka inweta ọrụ, nweta ndị ahịa na ndị na-enye onyinye, duo otu ma bụrụ ndị a na-anụ olu ha n'obodo ha. Ndị na-amụ ihe chọrọ ụzọ dị mfe isi hazie, mee omume ma kwuo obere okwu ma zaa ajụjụ, ka ụjọ ghara ijide ha azụ.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ",
      "Ngwaọrụ: ekwentị nwere igwefoto na elekere ọgụgụ oge (timer); slaịdị bụ nhọrọ",
      "A na-eme omume na ndekọ naanị gị ma ọ bụ ya na otu enyi, iji belata nrụgide",
      "Nzuzo: ndekọ na-anọ na ekwentị onye na-amụ ihe ma ọ bụrụ na ọ họrọghị ikesa ha",
      "Oge: nkuzi nke ihe dị ka nkeji ise, na okwu ikpeazụ nke nkeji 2"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka isiokwu ị maara nke ọma", action: "ide ndị na-ege ntị gị, ihe ị chọrọ ka ha mee, na otu isi ihe gị", standard: "na isi ihe ahụ n'otu ahịrịokwu" },
    { id: "O2", condition: "Maka okwu nkeji 2", action: "ịhazi mmalite na-adọta mmasị, isi ihe atọ nwere ọmụmaatụ, na njedebe nwere otu ihe ị chọrọ ka ha mee", standard: "n'otu peeji ndetu dị mkpụmkpụ" },
    { id: "O3", condition: "Maka okwu gị", action: "ikpebi ma ị chọrọ slaịdị, ma ọ bụrụ na ị chọrọ, ime naanị slaịdị atọ dị mfe ma ọ bụ ole na-erughị ya", standard: "na otu echiche n'otu slaịdị na eziokwu ọ bụla e lelere" },
    { id: "O4", condition: "Tupu i kwuo okwu ahụ", action: "ime omume n'olu dị elu na elekere ọgụgụ oge ma jiri iku ume jide ụjọ", standard: "na-emecha ya n'ime nkeji 2 ma ọ bụ ole na-erughị ya" },
    { id: "O5", condition: "Mgbe ị na-ekwu okwu", action: "iji olu gị, ilegide ndị mmadụ anya na otu i si guzoro mee ka ị dị ka onye nwere obi ike", standard: "na-edozi opekata mpe otu ihe ị hụrụ na ndekọ gị" },
    { id: "O6", condition: "Mgbe okwu gwụrụ", action: "ịza ajụjụ n'udo, gụnyere ndị ị na-enweghị ike ịza", standard: "na-ekwughachi ajụjụ ọ bụla ma jiri isi ihe gị mechie" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi okwu gị",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịhazi obere okwu: ndị na-ege ntị, ebumnuche na otu isi ihe",
          minutes: 5,
          goal: "Dee ndị na-ege ntị gị, ebumnuche gị na otu isi ihe gị maka obere okwu.",
          text: [
            "Tupu i dee otu okwu, zaa ajụjụ atọ. Onye na-ege ntị? Gịnị ka m chọrọ ka ha mee, chee ma ọ bụ nụ n'obi mgbe m kwuchara? Gịnị bụ otu isi ihe m chọrọ ka ha cheta?",
            "Otu isiokwu ahụ na-agbanwe dabere n'ndị na-ege ntị. Ọ bụrụ na ị na-agwa ndị na-enye onyinye okwu banyere ebe otu gị na-ekesa nri, ị nwere ike ilekwasị anya na ihe ọ rụpụtara na ihe ego ha na-eme. Nye ndị ọrụ afọ ofufo ọhụrụ, ị ga-ekwu otu oge ọrụ si adị. Nye otu egwuregwu ntorobịa, onye nkuzi egwuregwu na-ekwu banyere ịdọ onwe ya aka na ntị ga-eji egwuregwu ha n'onwe ha mee ọmụmaatụ.",
            "Dee isi ihe gị n'otu ahịrịokwu nke nwata dị afọ 12 nwere ike ikwughachi: \"Ịbịa n'oge kwa ụbọchị bụ ihe na-eme ka anyị merie egwuregwu siri ike.\" ma ọ bụ \"App anyị na-azọpụtara obere ụlọ ahịa awa abụọ kwa izu.\" Ihe niile dị n'okwu gị kwesịrị ịkwado ahịrịokwu ahụ. Ọ bụrụ na ihe adịghị akwado ya, wepụ ya."
          ],
          steps: ["Dee onye na-ege ntị na ihe ha na-eche banyere.", "Dee ihe ị chọrọ ka ha mee, chee ma ọ bụ nụ n'obi mgbe ahụ.", "Dee otu isi ihe gị n'otu ahịrịokwu dị mfe.", "Lelee: ihe ọ bụla ị chọrọ ikwu ọ na-akwado isi ihe ahụ?"],
          words: [["Ndị na-ege ntị", "ndị mmadụ na-ege okwu gị ntị."], ["Isi ihe (big idea)", "otu isi ozi ị chọrọ ka ndị mmadụ cheta."]],
          slides: [
            { title: "Ajụjụ atọ na mbụ", bullets: ["Onye na-ege ntị?", "Gịnị ka ha kwesịrị ime, iche ma ọ bụ inụ n'obi mgbe ahụ?", "Gịnị bụ otu isi ihe m?"] },
            { title: "Mee ka ọ dabara ndị na-ege ntị", bullets: ["Ndị na-enye onyinye: ihe e rụpụtara na mgbanwe ọ wetara", "Ndị ọrụ afọ ofufo ọhụrụ: otu oge ọrụ si adị", "Otu egwuregwu ntorobịa: egwuregwu ha dị ka ọmụmaatụ"] },
            { title: "Otu isi ihe", bullets: ["Otu ahịrịokwu nwata dị afọ 12 nwere ike ikwughachi", "\"App anyị na-azọpụtara obere ụlọ ahịa awa abụọ kwa izu.\"", "Ọ bụrụ na ọ naghị akwado isi ihe ahụ, wepụ ya"] }
          ],
          tryIt: "Họrọ isiokwu ị maara nke ọma maka okwu nkeji 2 gị. Dee ndị na-ege ntị gị, ihe ị chọrọ ka ha mee, na otu isi ihe gị n'otu ahịrịokwu.",
          youCanNow: "ịhazi okwu site n'ịhọrọ ndị na-ege ntị gị, ebumnuche gị na otu isi ihe.",
          quickCheck: [
            { objective: "O1", q: "Gịnị mere ị ga-eji chee banyere ndị na-ege ntị tupu i dee okwu?", options: ["Ka i nwee ike iji okwu ndị ka ukwuu", "Ka okwu ahụ dabara ihe ha chọrọ na ihe dị ha mkpa", "Ka i nwee ike ikwu ogologo oge", "Ka ị hapụ ime omume"], answer: 1, why: "Ịmara ndị na-ege ntị na-enyere gị aka ịhọrọ ihe dị ha mkpa." },
            { objective: "O1", q: "Ị na-agwa ụmụ egwuregwu na-eto eto okwu banyere isonye na klọb gị. Gịnị ka ị ga-eme ka ọ bụrụ isi ihe gị?", options: ["Akụkọ niile nke klọb ahụ kemgbe ọ malitere", "Ndepụta iwu niile", "Ihe mere isonye na klọb ahụ ga-enyere ha aka ito ma nwee obi ụtọ", "Ọnụ ọgụgụ mmeri gị n'onwe gị"], answer: 2, why: "Isi ihe kwesịrị ịbụ otu ozi ndị a na-ege ntị kwesịrị icheta." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Usoro: mmalite, isi ihe atọ, njedebe",
          minutes: 5,
          goal: "Hazie okwu nkeji 2 nwere mmalite na-adọta mmasị, isi ihe atọ na njedebe doro anya.",
          text: [
            "Usoro dị mfe na-enyere ndị na-ege ntị aka ịgbaso gị, ma na-enyere gị aka icheta ihe na-esote. Jiri: mmalite (hook), isi ihe atọ, njedebe.",
            "Mmalite na-adọta mmasị ndị mmadụ n'ime sekọnd 15 mbụ: obere akụkọ, eziokwu na-eju anya, ma ọ bụ ajụjụ. \"N'oge egwuregwu gara aga, anyị tụfuru egwuregwu anọ site n'otu akara.\" Wee nye isi ihe atọ. Atọ dị mfe icheta. Kwado nke ọ bụla site n'ọmụmaatụ ma ọ bụ nọmba. Wee mechie: kwughachi isi ihe gị ma gwa ndị mmadụ ihe ha ga-eme ọzọ. \"Bịa n'oge n'izu a. Aga m anọ ebe ahụ n'elekere 6.\" ma ọ bụ \"Debanye aha maka otu oge ọrụ tupu Fraịde.\"",
            "Maka okwu nkeji 2, nke ahụ bụ ihe dị ka sekọnd 15 maka mmalite, sekọnd 30 maka isi ihe ọ bụla na sekọnd 15 maka njedebe. Dee usoro ahụ dị ka ndetu dị mkpụmkpụ, ọ bụghị okwu niile e dere ede, ka okwu gị dị ka okwu nkịtị."
          ],
          steps: ["Dee mmalite: akụkọ, eziokwu na-eju anya ma ọ bụ ajụjụ.", "Dee isi ihe atọ, nke ọ bụla nwere otu ọmụmaatụ ma ọ bụ nọmba.", "Dee njedebe: kwughachi isi ihe ma rịọ maka otu ihe ha ga-eme.", "Gụọ oge ya: ihe dị ka 15 s mmalite, 30 s n'isi ihe ọ bụla, 15 s njedebe."],
          words: [["Mmalite (hook)", "mmalite na-adọta mmasị ndị mmadụ."], ["Ọkpụkpọ oku ime ihe (call to action)", "ịgwa ndị na-ege ntị otu ihe ha ga-eme ọzọ."], ["Usoro (outline)", "obere ndepụta akụkụ okwu gị, n'usoro."]],
          slides: [
            { title: "Mmalite, isi ihe atọ, njedebe", bullets: ["Ọ dị mfe ịgbaso maka ndị na-ege ntị", "Ọ dị mfe icheta maka gị"] },
            { title: "Mmalite (ihe dị ka sekọnd 15)", bullets: ["Obere akụkọ", "Eziokwu na-eju anya", "Ajụjụ nye ndị na-ege ntị"] },
            { title: "Isi ihe atọ (ihe dị ka sekọnd 30 nke ọ bụla)", bullets: ["Atọ dị mfe icheta", "Kwado nke ọ bụla site n'ọmụmaatụ ma ọ bụ nọmba"] },
            { title: "Njedebe (ihe dị ka sekọnd 15)", bullets: ["Kwughachi isi ihe gị", "Otu ihe doro anya ha ga-eme: \"Debanye aha tupu Fraịde.\"", "Jiri ndetu, ọ bụghị okwu niile e dere ede"] }
          ],
          tryIt: "Dee usoro okwu nkeji 2 gị: otu mmalite, isi ihe atọ nwere otu ọmụmaatụ nke ọ bụla, na njedebe nwere otu ihe ị chọrọ ka ha mee. Mee ka ọ bụrụ ndetu dị mkpụmkpụ n'otu peeji ma ọ bụ otu ndetu na ekwentị.",
          youCanNow: "ịhazi obere okwu nwere mmalite, isi ihe atọ na njedebe nwere otu ihe ị chọrọ ka ha mee.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ ọrụ mmalite (hook)?", options: ["Ịdọta mmasị ndị mmadụ na sekọnd ole na ole mbụ", "Imechi okwu ahụ", "Ịdepụta isi ihe atọ gị", "Ikele ndị na-ege ntị"], answer: 0, why: "Mmalite na-eme ka ndị mmadụ malite ige ntị ozugbo." },
            { objective: "O2", q: "Usoro gị nwere isi ihe asaa maka okwu nkeji 2. Gịnị ka ị ga-eme?", options: ["Kwuo okwu ngwa ngwa ka ha niile baa", "Tinyekwuo slaịdị", "Debe ha niile ma hapụ njedebe", "Họrọ isi ihe atọ kacha mkpa"], answer: 3, why: "Isi ihe atọ dabara oge ahụ ma dị mfe icheta." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Slaịdị dị mfe na-enyere aka, ọ bụghị na-emebi",
          minutes: 4,
          goal: "Mee slaịdị dị mfe, ma ọ bụ kpebie na ị chọghị nke ọ bụla.",
          text: [
            "Slaịdị kwesịrị inyere ndị na-ege ntị aka, ọ bụghị ijide okwu gị niile e dere ede. Ọtụtụ ezigbo obere okwu anaghị eji slaịdị ọ bụla. Jiri ha mgbe foto, chaatị ma ọ bụ okwu ole na ole na-eme ka ihe ị na-ekwu doo anya karị.",
            "Iwu na-arụ ọrụ: otu echiche n'otu slaịdị; aha dị mkpụmkpụ; naanị okwu ole na ole ma ọ bụ otu foto; mkpụrụ akwụkwọ buru ibu nke ndị nọ n'azụ nwere ike ịgụ; ọdịiche agba siri ike, dị ka mkpụrụ akwụkwọ gbara ọchịchịrị n'ala na-acha ọcha. Agụpụtala slaịdị gị n'olu dị elu okwu n'okwu; ndị na-ege ntị na-agụ ngwa ngwa karịa ka ị na-ekwu okwu.",
            "Ngwa n'efu dị ka Google Slides, Microsoft PowerPoint maka weebụ na Canva na-ekwe ka i mee slaịdị na browser. Ngwa enyemaka AI nwere ike ịtụ aro aha slaịdị site n'usoro gị, mana belata okwu ya nke ukwuu ma lelee eziokwu na nọmba ọ bụla o nyere gị."
          ],
          steps: ["Jụọ: slaịdị ọ na-eme ka ihe a doo anya karị? Ọ bụrụ na ọ bụghị, hapụ ya.", "Otu echiche n'otu slaịdị nwere aha dị mkpụmkpụ.", "Jiri okwu ole na ole ma ọ bụ otu foto.", "Mee ka mkpụrụ akwụkwọ buru ibu, nwee ọdịiche agba siri ike.", "Mee omume n'agụpụtaghị slaịdị n'olu dị elu."],
          words: [["Ụyọkọ slaịdị (slide deck)", "otu ụyọkọ slaịdị maka okwu."], ["Ọdịiche agba (contrast)", "otu mkpụrụ akwụkwọ si pụta ìhè n'ala ya."]],
          slides: [
            { title: "Slaịdị na-enyere ndị na-ege ntị aka", bullets: ["Ọ bụghị okwu e dere ede maka gị", "Ọtụtụ ezigbo obere okwu anaghị eji ya"] },
            { title: "Iwu slaịdị", bullets: ["Otu echiche n'otu slaịdị", "Okwu ole na ole ma ọ bụ otu foto", "Mkpụrụ akwụkwọ buru ibu, ọdịiche agba siri ike"] },
            { title: "Agụla ha", bullets: ["Ndị mmadụ na-agụ ngwa ngwa karịa ka ị na-ekwu", "Kama nke ahụ, kọwaa ihe dị na slaịdị ahụ"] },
            { title: "Ngwa n'efu", bullets: ["Google Slides, PowerPoint maka weebụ, Canva", "AI nwere ike ịtụ aro aha; belata ma lelee ha"] }
          ],
          tryIt: "Kpebie ma okwu nkeji 2 gị chọrọ slaịdị. Ọ bụrụ ee, mee naanị slaịdị atọ ma ọ bụ ole na-erughị ya na ngwa n'efu, otu echiche n'otu. Ọ bụrụ mba, dee otu ahịrịokwu banyere ihe mere okwu ahụ ji arụ ọrụ n'enweghị ha.",
          youCanNow: "ime slaịdị dị mfe nke a na-agụ nke ọma, ma ọ bụ ikpebi n'obi ike ikwu okwu n'enweghị ha.",
          quickCheck: [
            { objective: "O3", q: "Olee mgbe slaịdị na-enyere okwu aka?", options: ["Mgbe ọ na-ejide okwu gị niile e dere ede", "Mgbe foto, chaatị ma ọ bụ okwu ole na ole na-eme ka ihe doo anya karị", "Mgbe ị nweghị ihe ị ga-ekwu", "Mgbe niile, n'ahịrịokwu ọ bụla"], answer: 1, why: "Slaịdị na-enyere aka naanị mgbe ha na-eme ka ihe doo anya karị." },
            { objective: "O3", q: "Ngwa enyemaka AI nyere gị slaịdị jupụtara n'okwu 80. Gịnị ka ị ga-eme?", options: ["Gụọ ya okwu n'okwu", "Mee ka mkpụrụ akwụkwọ ya dị obere", "Tinyekwuo okwu", "Belata ya ka ọ bụrụ aha dị mkpụmkpụ na okwu ole na ole, ma lelee eziokwu"], answer: 3, why: "Slaịdị dị mfe nwere eziokwu e lelere na-enyere aka; mgbidi okwu na-emebi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi okwu gị",
        questions: [
          { objective: "O1", q: "Gịnị ka ị kwesịrị ikpebi tupu i dee okwu gị?", options: ["Naanị uwe ị ga-eyi", "Ọnụ ọgụgụ slaịdị ị ga-eji", "Ndị na-ege ntị gị, ebumnuche gị na otu isi ihe gị", "Otu ajụjụ ga-esi dị ogologo"], answer: 2, why: "Ihe atọ ndị ahụ na-ekpebi ihe ndị ọzọ niile n'okwu ahụ." },
          { objective: "O2", q: "Kedu nke bụ ezigbo mmalite?", options: ["\"N'oge egwuregwu gara aga, anyị tụfuru egwuregwu anọ site n'otu akara.\"", "\"Ehm, ya bụ, aga m ekwu okwu ugbu a.\"", "\"Ndo, amaghị m ihe a nke ọma.\"", "Ịgụ slaịdị aha"], answer: 0, why: "Obere akụkọ ma ọ bụ eziokwu na-eju anya na-adọta mmasị." },
          { objective: "O2", q: "Gịnị mere ị ga-eji jiri isi ihe atọ?", options: ["Ọ bụ iwu", "Isi ihe ndị ọzọ na-eme ka ị dị ka onye maara ihe mgbe niile", "Ọ na-ejupụta oge", "Atọ dị mfe ka ndị mmadụ cheta"], answer: 3, why: "Isi ihe atọ dị mfe ịgbaso na icheta." },
          { objective: "O2", q: "Ezigbo njedebe na-eme gịnị?", options: ["Ọ na-ejedebe na \"Ọ bụ naanị ya, eche m\"", "Ọ na-ekwughachi isi ihe ma rịọ maka otu ihe ha ga-eme", "Ọ na-agbakwunye isi ihe nke anọ ọhụrụ", "Ọ na-arịọ mgbaghara maka okwu ahụ"], answer: 1, why: "Njedebe doro anya na-eme ka ndị mmadụ mara ihe ha ga-eme." },
          { objective: "O3", q: "Kedu slaịdị kacha mma?", options: ["Isi ihe iri na mkpụrụ akwụkwọ dị obere", "Otu peeji zuru ezu nke okwu gị e dere ede", "Otu echiche, aha dị mkpụmkpụ na mkpụrụ akwụkwọ buru ibu", "Mkpụrụ akwụkwọ ntụ ntụ na-acha ọkụ n'ala ọcha"], answer: 2, why: "Slaịdị dị mfe nke a na-agụ nke ọma na-enyere ndị na-ege ntị aka." }
        ]
      }
    },
    {
      name: "Isi 2: Ikwu okwu n'obi ike",
      lessons: [
        {
          objectives: ["O4"],
          title: "Omume na ụjọ",
          minutes: 5,
          goal: "Mee omume okwu n'olu dị elu ma jiri ngwa dị mfe jide ụjọ.",
          text: [
            "Ụjọ bụ ihe nkịtị, ọbụlagodi nye ndị ọkachamara na-ekwu okwu na ndị egwuregwu tupu nnukwu egwuregwu. Obi na-akụ ngwa ngwa na aka na-ama jijiji bụ ahụ gị na-akwado onwe ya. Ọ dịghị mkpa ka i wepụ ụjọ; ihe ị chọrọ bụ iji ya.",
            "Omume bụ ọgwụ kacha mma. Kwuo okwu ahụ n'olu dị elu opekata mpe ugboro atọ, guzoro ọtọ, na elekere ọgụgụ oge. Wee dekọọ ya na ekwentị gị ma lee ya. Wee nwaa ya n'ihu otu enyi, onye ezinụlọ, onye nkuzi egwuregwu ma ọ bụ onye gị na ya na-arụ ọrụ. Oge ọ bụla, ọ na-adị mfe karị.",
            "N'ụbọchị ahụ: kuo ume nwayọọ (ume n'ime maka 4, ume n'èzí maka 6) tupu ị malite; jide ndetu gị ma ọ bụ hapụ aka gị ka ha zuo ike; chọta otu ihu enyi n'ime ụlọ ahụ; ma cheta na ndị na-ege ntị chọrọ ka ị mee nke ọma. Ọ bụrụ na ị chefuo ebe ị ruru, kwụsịtụ, lee ndetu gị ma gaa n'ihu. Nkwụsịtụ na-adị gị ogologo mana ọ na-adị ha mkpụmkpụ."
          ],
          steps: ["Kwuo okwu ahụ n'olu dị elu ugboro atọ, guzoro ọtọ, na elekere ọgụgụ oge.", "Dekọọ ya na ekwentị gị ma lee ya.", "Mee omume otu ugboro n'ihu otu onye ma rịọ maka otu ndụmọdụ.", "Tupu ị malite: kuo ume n'ime maka 4, n'èzí maka 6.", "Ọ bụrụ na ị chefuo ebe ị ruru: kwụsịtụ, lee ndetu, gaa n'ihu."],
          words: [["Ime omume (rehearse)", "ime omume okwu n'olu dị elu tupu i kwuo ya n'ezie."], ["Ụjọ", "mmetụta egwu tupu ihe dị mkpa; ọ bụ ihe nkịtị, ọ na-abakwa uru."]],
          slides: [
            { title: "Ụjọ bụ ihe nkịtị", bullets: ["Ọbụlagodi ndị ọkachamara na ndị egwuregwu na-atụ ya", "Ahụ gị na-akwado onwe ya", "Jiri ya; alụsola ya ọgụ"] },
            { title: "Mee omume n'olu dị elu", bullets: ["Ugboro atọ, guzoro ọtọ, na elekere ọgụgụ oge", "Dekọọ ma lee ya", "Nwaa ya n'ihu otu onye"] },
            { title: "N'ụbọchị ahụ", bullets: ["Kuo ume: n'ime maka 4, n'èzí maka 6", "Chọta otu ihu enyi", "Ndị na-ege ntị chọrọ ka ị mee nke ọma"] },
            { title: "Ị chefuru ebe ị ruru?", bullets: ["Kwụsịtụ", "Lee ndetu gị", "Gaa n'ihu: nkwụsịtụ ahụ na-adị ha mkpụmkpụ karị"] }
          ],
          tryIt: "Guzoro ọtọ ma kwuo okwu nkeji 2 gị n'olu dị elu ugboro atọ na elekere ọgụgụ oge. Dee oge nke ọ bụla were ma wepụ ihe ọ bụla na-eme ka ị gafee nkeji 2.",
          youCanNow: "ime omume okwu n'olu dị elu, ịgụ oge ya, na iji iku ume na nkwụsịtụ jide ụjọ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ọ pụtara mgbe obi gị na-akụ ngwa ngwa tupu okwu?", options: ["Ahụ gị na-akwado onwe ya, nke bụ ihe nkịtị", "I kwesịrị ịkagbu okwu ahụ", "Ị kwadobeghị", "Ị na-arịa ọrịa"], answer: 0, why: "Ụjọ bụ ihe ịrịba ama nkịtị na ahụ gị na-akwado onwe ya." },
            { objective: "O4", q: "Omume gị na-ewe nkeji 3, mana i nwere nkeji 2. Gịnị ka ị ga-eme?", options: ["Kwuo okwu ngwa ngwa nke ukwuu", "Hapụ njedebe n'ụbọchị ahụ", "Wepụ akụkụ ndị na-adịghị akwado isi ihe gị ma gụọ oge ya ọzọ", "Rịọ maka oge ọzọ n'ụbọchị ahụ"], answer: 2, why: "Iwepụ akụkụ ndị na-adịghị mkpa na-eme ka okwu ahụ dị n'oge ma lekwasị anya." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Olu na omume ahụ",
          minutes: 5,
          goal: "Jiri olu gị, anya gị na ahụ gị mee ka ị dị ka onye nwere obi ike.",
          text: [
            "Otu i si ekwu ya dị mkpa dị ka ihe ị na-ekwu. Kwuo okwu nwayọọ ntakịrị ma n'olu dị elu ntakịrị karịa n'okwu nkịtị. Kwụsịtụ mgbe isi ihe dị mkpa gasịrị ka ha banye. Gbanwee ụda olu gị ka ọ ghara ịdị otu ụda, ma wepụ okwu ndochi dị ka \"ehm\" na \"like\" site n'ịkwụsịtụ kama.",
            "Guzoro ọtọ, ụkwụ gị dị anya dị ka obosara ubu gị, ibu ahụ gị kesara nke ọma. Hapụ aka gị ka ha zuo ike n'akụkụ gị ma ọ bụ jiri ha mee mmegharị aka nkịtị; ezere ịgbanye aka n'obi ma ọ bụ itinye aka n'akpa. Lee ezi mmadụ anya, otu n'otu, maka ahịrịokwu otu ma ọ bụ abụọ. N'oku vidiyo, lee igwefoto anya, ọ bụghị ihu gị na ihuenyo.",
            "Omenala dị iche iche na-aghọta ilegide anya na mmegharị aka n'ụzọ dị iche iche, ya mere lee ndị na-ege gị ntị ma gbanwee. Ebumnuche bụ ka ị dị jụụ, meghee obi ma nwee mmasị n'ebe ha nọ."
          ],
          steps: ["Kwuo okwu nwayọọ ntakịrị ma n'olu dị elu ntakịrị karịa nkịtị.", "Kwụsịtụ mgbe isi ihe dị mkpa gasịrị.", "Dochie \"ehm\" na obere nkwụsịtụ.", "Guzoro ọtọ, ụkwụ dị anya dị ka obosara ubu, aka zuru ike.", "Lee otu onye anya maka otu ahịrịokwu, wee lee onye ọzọ.", "Na vidiyo, lee igwefoto anya."],
          words: [["Omume ahụ (body language)", "ihe otu i si guzoro, ihu gị, aka gị na anya gị na-ekwu n'enweghị okwu."], ["Okwu ndochi (filler words)", "ụda dị ka \"ehm\", \"uh\" na \"like\" na-ejupụta ịgbachi nkịtị."]],
          slides: [
            { title: "Olu gị", bullets: ["Nwayọọ ntakịrị ma dị elu ntakịrị", "Kwụsịtụ mgbe isi ihe gasịrị", "Gbanwee ụda olu; dochie \"ehm\" na nkwụsịtụ"] },
            { title: "Ahụ gị", bullets: ["Guzoro ọtọ, ụkwụ dị anya dị ka obosara ubu", "Aka zuru ike ma ọ bụ mmegharị aka nkịtị", "Agbanyela aka n'obi, etinyela aka n'akpa"] },
            { title: "Anya gị", bullets: ["Otu onye, otu ahịrịokwu, wee onye ọzọ", "Na vidiyo: lee igwefoto anya"] },
            { title: "Ghọta ndị nọ n'ụlọ", bullets: ["Omenala dị iche n'ilegide anya na mmegharị aka", "Bụrụ onye dị jụụ, meghere obi ma nwee mmasị"] }
          ],
          tryIt: "Dekọọ sekọnd 30 nke okwu gị na ekwentị gị. Lee ya n'enweghị ụda: lelee otu i si guzoro, aka gị na anya gị. Wee mechie anya ma gee ya ntị: gụọ ugboro ole i kwuru \"ehm\" ma chọpụta ọsọ okwu gị. Họrọ otu ihe ị ga-edozi.",
          youCanNow: "iji olu gị, otu i si guzoro, aka gị na ilegide anya mee ka ị dị jụụ ma nwee obi ike.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ okwu ndochi?", options: ["Okwu dị mkpa n'isi ihe gị", "Okwu dị ka \"ehm\" ma ọ bụ \"like\" na-ejupụta nkwụsịtụ", "Okwu dị na slaịdị", "Okwu ikpeazụ n'okwu gị"], answer: 1, why: "Okwu ndochi na-ejupụta ịgbachi nkịtị; obere nkwụsịtụ ka mma." },
            { objective: "O5", q: "Mgbe ị na-ele ndekọ gị, ị hụrụ na ị na-ele ala anya. Gịnị ka ị ga-eme?", options: ["Lee otu onye anya maka otu ahịrịokwu, wee lee onye ọzọ", "Mechie anya gị mgbe ị na-ekwu okwu", "Gụọ ndetu gị oge niile", "Lee naanị elu ụlọ anya"], answer: 0, why: "Ilegide otu onye anya n'otu oge na-egosi obi ike." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịza ajụjụ",
          minutes: 5,
          goal: "Zaa ajụjụ mgbe okwu gwụrụ n'udo na nke ọma, gụnyere ndị ị na-enweghị ike ịza.",
          text: [
            "Ajụjụ pụtara na ndị mmadụ na-ege ntị. Kwadoo site n'ide ajụjụ atọ a ga-ajụkarị gị na obere azịza maka nke ọ bụla.",
            "Mgbe mmadụ jụrụ: gee ajụjụ ahụ niile ntị, kelee ha, ma kwughachi ya ma ọ bụ kwuo ya n'ụzọ ọzọ ka onye ọ bụla nụ ya. Zaa nkenke, n'ime sekọnd 30 ma ọ bụ ole na-erughị ya ma ọ bụrụ na i nwere ike, wee jụọ: \"Nke a ọ zara ajụjụ gị?\" Ọ bụrụ na ị maghị, kwuo ya n'eziokwu: \"Amaghị m, mana aga m achọpụta ma laghachikwute gị tupu Fraịde.\" Wee mee ya. Echepụtala ihe ọ bụla mgbe ọ bụla.",
            "Maka ajụjụ iwe ma ọ bụ nke na-apụ n'isiokwu, nọrọ jụụ ma nwee nkwanye ugwu: \"Nke ahụ bụ ezi nchegbu. Ka anyị kwurịta ya mgbe e mechara ka anyị nye ya oge zuru ezu.\" Onye nta akụkọ ma ọ bụ onye na-akwado gị (sponsor) nwekwara ike ịjụ ajụjụ siri ike; jiri akwa mmiri (bridge) laghachi n'isi ihe gị: \"Ihe m nwere ike ịgwa gị bụ...\". Jiri njedebe gị mechie oge ajụjụ ọzọ ka isi ihe gị bụrụ ihe ikpeazụ ndị mmadụ nụrụ."
          ],
          steps: ["Tupu oge ahụ: dee ajụjụ atọ a ga-ajụkarị na obere azịza.", "Gee ajụjụ ahụ niile ntị.", "Kelee ha ma kwughachi ya maka onye ọ bụla.", "Zaa nkenke, wee jụọ ma ọ zara ha.", "Ị maghị? Kwuo ya ma kwe nkwa ịlaghachikwute ha.", "Jiri ikwughachi njedebe gị mechie."],
          words: [["Q&A", "mkpirisi okwu bekee maka ajụjụ na azịza: oge mgbe okwu gwụrụ maka ajụjụ."], ["Akwa mmiri (bridge)", "okwu na-eweghachi azịza siri ike n'isi ozi gị."]],
          slides: [
            { title: "Kwadoo", bullets: ["Dee ajụjụ atọ a ga-ajụkarị", "Dee obere azịza maka nke ọ bụla"] },
            { title: "Ịza ajụjụ", bullets: ["Gee ajụjụ ahụ niile ntị", "Kelee ha ma kwughachi ya", "Zaa nkenke, wee jụọ ma ọ zara ha"] },
            { title: "Mgbe ị maghị", bullets: ["Kwuo ya n'eziokwu", "\"Aga m achọpụta ma laghachikwute gị tupu Fraịde.\"", "Echepụtala ihe mgbe ọ bụla"] },
            { title: "Ajụjụ siri ike", bullets: ["Nọrọ jụụ ma nwee nkwanye ugwu", "Kwuo na unu ga-akparịta ụka mgbe e mechara", "Akwa mmiri: \"Ihe m nwere ike ịgwa gị bụ...\""] }
          ],
          tryIt: "Ọrụ ikpeazụ: dekọọ okwu nkeji 2 gị na ekwentị gị. Wee mee ka enyi jụọ gị ajụjụ abụọ (ma ọ bụ jụọ onwe gị abụọ) ma dekọọ azịza gị. Lee ya ọzọ, dee otu ike gị na otu ihe ị ga-edozi, ma dekọọ okwu ahụ otu ugboro ọzọ.",
          youCanNow: "ikwu obere okwu ma za ajụjụ n'udo, gụnyere ndị ị na-enweghị ike ịza ugbu a.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ akwa mmiri (bridge) n'ịza ajụjụ?", options: ["Slaịdị na-ejikọ isi ihe abụọ", "Nkwụsịtụ tupu okwu gị", "Okwu na-esi n'ajụjụ ahụ weghachi gị n'isi ozi gị", "Ụzọ isi zere ajụjụ ọ bụla"], answer: 2, why: "Akwa mmiri dị ka \"Ihe m nwere ike ịgwa gị bụ...\" na-eweghachi gị n'ozi gị." },
            { objective: "O6", q: "Mmadụ jụrụ ajụjụ ị na-enweghị ike ịza. Gịnị ka ị ga-ekwu?", options: ["Chepụta azịza", "Leghara ajụjụ ahụ anya", "Gwa ha na ọ bụ ajụjụ ọjọọ", "\"Amaghị m, mana aga m achọpụta ma laghachikwute gị tupu Fraịde.\""], answer: 3, why: "Eziokwu na ụbọchị doro anya ị ga-alaghachi na-echekwa ntụkwasị obi." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ikwu okwu n'obi ike",
        questions: [
          { objective: "O4", q: "Gịnị bụ ụzọ kacha mma isi kwadoo maka okwu?", options: ["Gụọ ya n'obi otu ugboro", "Kwuo ya n'olu dị elu ọtụtụ ugboro, guzoro ọtọ, na elekere ọgụgụ oge", "Buru naanị slaịdị n'isi", "Kwuo ya n'akwadobeghị"], answer: 1, why: "Omume n'olu dị elu bụ ọgwụ kacha mma maka ụjọ." },
          { objective: "O4", q: "Ị chefuru ebe ị ruru n'etiti okwu. Gịnị ka ị na-eme?", options: ["Rịọ mgbaghara ọtụtụ ugboro", "Pụọ n'elu ikpo okwu", "Malitegharịa site na mmalite", "Kwụsịtụ, lee ndetu gị ma gaa n'ihu"], answer: 3, why: "Obere nkwụsịtụ bụ ihe nkịtị, a naghị ahụkarị ya." },
          { objective: "O5", q: "N'oku vidiyo, ebee ka ị ga-ele anya mgbe ị na-ekwu okwu?", options: ["Na igwefoto", "Na ihu gị na ihuenyo", "Na kiiboodu", "N'èzí site na windo"], answer: 0, why: "Ilegide igwefoto anya dị ka ilegide mmadụ anya." },
          { objective: "O5", q: "Gịnị bụ ezigbo ụzọ isi wepụ okwu ndochi dị ka \"ehm\"?", options: ["Kwuo okwu ngwa ngwa", "Dochie ha na obere nkwụsịtụ", "Kwuo \"like\" kama", "Akwụsịla ikwu okwu mgbe ọ bụla"], answer: 1, why: "Nkwụsịtụ na-egosi obi ike; okwu ndochi anaghị egosi ya." },
          { objective: "O6", q: "Mmadụ jụrụ ajụjụ ị na-enweghị ike ịza. Gịnị kacha mma?", options: ["Chepụta azịza", "Leghara ha anya", "Kwuo na ị maghị, ma kwe nkwa ịlaghachikwute ha n'ụbọchị a kara aka", "Gbanwee isiokwu n'ekwughị ihe ọ bụla"], answer: 2, why: "Eziokwu na ịlaghachikwute ha na-echekwa ntụkwasị obi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ikwu Okwu n'Ihu Ọha na Ngosi Okwu",
    questions: [
      { objective: "O1", q: "\"Isi ihe\" nke okwu bụ:", options: ["Akụkụ kacha ogologo", "Otu isi ozi ị chọrọ ka ndị mmadụ cheta", "Otu slaịdị gị si dị", "Aha slaịdị mbụ gị"], answer: 1, why: "Ihe niile dị n'okwu ahụ na-akwado isi ihe ahụ." },
      { objective: "O1", q: "Ị ga-agwa ndị ọrụ afọ ofufo ọhụrụ okwu banyere ebe otu gị na-ekesa nri. Gịnị ka ị kwesịrị ilekwasị anya?", options: ["Akwụkwọ ụtụ isi gị", "Ndekọ nzukọ ndị isi n'afọ gara aga", "Mmemme niile ị na-eme", "Otu oge ọrụ onye ọrụ afọ ofufo si adị"], answer: 3, why: "Mee ka okwu ahụ dabara ihe ndị ahụ na-ege ntị chọrọ." },
      { objective: "O1", q: "Ọ bụrụ na akụkụ okwu gị adịghị akwado isi ihe ahụ, i kwesịrị:", options: ["Iwepụ ya", "Ime ka ọ dị ogologo", "Itinye ya na mbụ", "Itinye ya na slaịdị"], answer: 0, why: "Iwepụ ya na-eme ka okwu ahụ doo anya ma dị mkpụmkpụ." },
      { objective: "O2", q: "Usoro okwu dị mfe n'ihe ọmụmụ a bụ:", options: ["Mgbaghara, nkọwa, ka ọ dị", "Slaịdị, slaịdị ndị ọzọ, ajụjụ", "Mmalite, isi ihe atọ, njedebe", "Akụkọ, akụkọ, akụkọ"], answer: 2, why: "Mmalite, isi ihe atọ na njedebe dị mfe ịgbaso." },
      { objective: "O2", q: "N'okwu nkeji 2, ihe dị ka ogologo oge ole ka isi ihe ọ bụla na-ewe?", options: ["Sekọnd 5", "Sekọnd 30", "Nkeji 2", "Nkeji 10"], answer: 1, why: "Ihe dị ka 15 s mmalite, 30 s n'isi ihe ọ bụla, 15 s njedebe." },
      { objective: "O2", q: "Kedu nke bụ ọkpụkpọ oku ime ihe doro anya?", options: ["\"Daalụ, eche m.\"", "\"Ajụjụ ọ bụla? Mba? Ọ dị mma.\"", "\"Ma eleghị anya chee banyere ya otu ụbọchị.\"", "\"Debanye aha maka otu oge ọrụ tupu Fraịde.\""], answer: 3, why: "Ọ na-agwa ndị mmadụ kpọmkwem ihe ha ga-eme na mgbe ha ga-eme ya." },
      { objective: "O2", q: "Gịnị mere ị ga-eji jiri ndetu kama okwu niile e dere ede?", options: ["Okwu gị na-adị ka okwu nkịtị karị", "A naghị ekwe ka e jiri okwu e dere ede", "Ndetu dị ogologo karị", "Ka i nwee ike ịgụ okwu ọ bụla"], answer: 0, why: "Ndetu dị mkpụmkpụ na-eme ka okwu gị dị ka okwu nkịtị ma ị ka na-agbaso usoro." },
      { objective: "O3", q: "Olee mgbe i kwesịrị iji slaịdị?", options: ["N'ahịrịokwu ọ bụla", "Mgbe foto, chaatị ma ọ bụ okwu ole na ole na-eme ka ihe doo anya karị", "Ọ dịghị mgbe ọ bụla", "Naanị maka okwu gị e dere ede"], answer: 1, why: "Slaịdị kwesịrị inyere ndị na-ege ntị aka ịghọta." },
      { objective: "O3", q: "Gịnị mere ị na-agaghị agụ slaịdị okwu n'okwu?", options: ["Ọ dị ngwa nke ukwuu", "Slaịdị bụ ihe nzuzo", "Ndị na-ege ntị na-agụ ngwa ngwa karịa ka ị na-ekwu", "Ọ megidere iwu"], answer: 2, why: "Ịgụ slaịdị na-eme ka ndị na-ege ntị kwụsị ige gị ntị." },
      { objective: "O3", q: "Ngwa enyemaka AI nyere gị okwu maka slaịdị. Gịnị ka i kwesịrị ime?", options: ["Jiri ya niile otu o si dị", "Belata ya ma lelee eziokwu na nọmba ọ bụla", "Gụpụta ya n'olu dị elu okwu n'okwu", "Tinyekwuo okwu"], answer: 1, why: "AI nwere ike ịdị njọ ma nwee okwu karịrị akarị; gị ka bụ onye isi." },
      { objective: "O4", q: "Ụjọ tupu okwu bụ:", options: ["Ihe ịrịba ama na i kwesịrị ịkagbu ya", "Ihe a na-adịghị ahụkarị", "Naanị maka ndị mbido", "Ihe nkịtị, ahụ gị na-akwado onwe ya"], answer: 3, why: "Ọbụlagodi ndị ọkachamara na-atụ ụjọ; ị nwere ike iji ya." },
      { objective: "O4", q: "Kedu nzọụkwụ omume na-esote ikwu ya n'olu dị elu ugboro atọ?", options: ["Dekọọ ya na ekwentị gị ma lee ya", "Hichapụ ndetu gị", "Tinye isi ihe iri ọzọ", "Kwụsị ime omume"], answer: 0, why: "Ilele ndekọ na-egosi ihe ị ga-edozi." },
      { objective: "O4", q: "Ụzọ ngwa ngwa isi mee ka obi dajụọ tupu ị malite bụ:", options: ["Ṅụọ ọtụtụ kọfị", "Kuo ume n'ime maka 4, n'èzí maka 6", "Gbaa ọsọ n'otu ebe maka nkeji 5", "Gụọ email gị niile"], answer: 1, why: "Iku ume nwayọọ na-eme ka ahụ dajụọ." },
      { objective: "O5", q: "Kedu ụzọ iguzo na-egosi obi ike?", options: ["Aka gbanyere n'obi", "Aka n'akpa", "Iguzo ọtọ, ụkwụ dị anya dị ka obosara ubu, aka zuru ike", "Ịdabere na mgbidi"], answer: 2, why: "Iguzo n'ụzọ meghere emeghe ma kwụ chịm na-egosi udo na obi ike." },
      { objective: "O5", q: "Ezigbo ilegide anya n'otu ìgwè pụtara:", options: ["Ilegide otu onye anya oge niile", "Ilele ala anya", "Ilele elu ụlọ anya", "Ilegide otu onye anya maka otu ahịrịokwu, wee onye ọzọ"], answer: 3, why: "Ọ na-ejikọ ọtụtụ mmadụ n'otu n'otu." },
      { objective: "O5", q: "Ma e jiri ya tụnyere mkparịta ụka nkịtị, i kwesịrị ikwu okwu:", options: ["Nwayọọ ntakịrị ma n'olu dị elu ntakịrị", "Ngwa ngwa nke ukwuu", "Na nzuzo (n'olu ala)", "N'enweghị nkwụsịtụ ọ bụla"], answer: 0, why: "Nwayọọ na olu dị elu na-enyere onye ọ bụla aka ịnụ na ịgbaso." },
      { objective: "O6", q: "Gịnị mere ị ga-eji kwughachi ajụjụ tupu ị zaa ya?", options: ["Iji mefuo oge", "Ka onye ọ bụla nụ ya ma ka ị hụ na ị ghọtara ya", "Iji gosi onwe gị", "N'ihi na onye jụrụ ya chefuru ya"], answer: 1, why: "Ikwughachi ya na-enyere ndị nọ n'ụlọ aka ma na-elele na ị ghọtara ya." },
      { objective: "O6", q: "Onye na-akwado gị (sponsor) jụrụ ajụjụ siri ike. Ezigbo \"akwa mmiri\" bụ:", options: ["\"Enweghị m ihe m ga-ekwu.\" wee pụọ", "\"Nke ahụ bụ ajụjụ nzuzu.\"", "\"Ihe m nwere ike ịgwa gị bụ...\" wee laghachi n'isi ozi gị", "Ịchepụta nọmba"], answer: 2, why: "Akwa mmiri na-aza n'ụzọ nwere nkwanye ugwu ma laghachi n'ozi gị." },
      { objective: "O6", q: "Mmadụ wetara mkpesa na-apụ n'isiokwu n'oge Q&A. Gịnị kacha mma?", options: ["Ịrụ ụka ruo mgbe ha kwụsịrị", "Ileghara ha anya kpamkpam", "Imechi okwu ahụ n'oge", "Nwee nkwanye ugwu ma kwuo na unu ga-akparịta ụka mgbe e mechara"], answer: 3, why: "Ọ na-asọpụrụ ha ma na-echekwa oge maka onye ọ bụla." },
      { objective: "O6", q: "Gịnị kwesịrị ịbụ ihe ikpeazụ ndị mmadụ ga-anụ mgbe Q&A gwụrụ?", options: ["Njedebe gị na isi ihe gị ọzọ", "Mgbaghara", "\"Ehm, ọ dị mma, ka ọ dị.\"", "Isiokwu ọhụrụ"], answer: 0, why: "Iji njedebe gị mechie na-eme ka isi ihe gị nọgide n'uche ha." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      1,
      3,
      5,
      8,
      10,
      12,
      13,
      15,
      17
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Isi ihe",
        objective: "O1",
        notYet: "Okwu ahụ enweghị isi ozi doro anya.",
        meets: "Otu isi ihe onye na-ege ntị nwere ike ikwughachi n'otu ahịrịokwu.",
        exceeds: "Isi ihe ahụ dabara ndị na-ege ntị na ihe ha chọrọ."
      },
      {
        name: "Usoro",
        objective: "O2",
        notYet: "Mmalite, otu isi ihe ma ọ bụ njedebe adịghị.",
        meets: "Mmalite, isi ihe atọ nwere ọmụmaatụ na njedebe nwere otu ọkpụkpọ oku ime ihe.",
        exceeds: "Njedebe na-ekwughachi isi ihe ahụ, ọkpụkpọ oku ime ihe ahụ dokwara anya kpọmkwem."
      },
      {
        name: "Oge",
        objective: "O4",
        notYet: "Ọ gafere nkeji 2, ma ọ bụ o doro anya na e meghị omume ya.",
        meets: "Ọ na-emecha n'ime nkeji 2 ma ọ bụ ole na-erughị ya, site na ndetu, ọ bụghị okwu e dere ede.",
        exceeds: "Ọ dị ka okwu nkịtị ma dị jụụ site na mmalite ruo na njedebe."
      },
      {
        name: "Olu na ahụ",
        objective: "O5",
        notYet: "Ọ siri ike ịnụ, ọtụtụ okwu ndochi, ma ọ bụ enweghị ilegide anya.",
        meets: "Olu doro anya, ọsọ okwu kwụ chịm, iguzo nke ọma na ilegide igwefoto anya.",
        exceeds: "Ndekọ nke abụọ na-egosi mgbanwe a họọrọ mgbe e lechara nke mbụ."
      },
      {
        name: "Ịza ajụjụ",
        objective: "O6",
        notYet: "Chepụtara azịza ma ọ bụ were iwe gbachitere onwe ya.",
        meets: "Kwughachiri ajụjụ ọ bụla ma zaa n'udo, ma ọ bụ kwe nkwa ịlaghachikwute ha.",
        exceeds: "Jiri akwa mmiri laghachi n'isi ihe ahụ na njedebe."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe kwuru okwu, okwu ire ahịa ma ọ bụ ngosi okwu n'ọrụ, n'ụlọ akwụkwọ, n'otu ma ọ bụ n'obodo ha n'ime ụbọchị 60 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na ha nwekwuru obi ike ikwu okwu n'ajụjụ ọnụ ma ọ bụ nzukọ",
      "Ndị na-amụ ihe nke ndekọ nke abụọ ha nwetara akara ka elu na rubric karịa nke mbụ",
      "Ndị na-amụ ihe malitere ihe ọmụmụ Koach Learn ọzọ gbasara ọrụ ma ọ bụ nka mmekọrịta n'ime ụbọchị 30"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị nwere igwefoto na elekere ọgụgụ oge",
      "Akwụkwọ ma ọ bụ ndetu na ekwentị maka usoro okwu",
      "Ngwa slaịdị n'efu dị ka Google Slides ma ọ bụ Canva (nhọrọ)",
      "Ihe dị ka nkeji 60 n'ozuzu, gbakwunyere oge iji dekọọ okwu ikpeazụ"
    ],
    facilitatorNotes: [
      "Malite n'obere otu ma ọ bụ mmadụ abụọ abụọ ka ndị na-amụ ihe na-atụ ụjọ nwee ike ime omume n'enweghị nrụgide dị ukwuu.",
      "Nye ndụmọdụ site n'ibu ụzọ kwuo otu ike, wee kwuo otu ihe a ga-edozi.",
      "Kwe ka ndị na-amụ ihe debe ndekọ ha na nzuzo; ha ga-ekesa naanị ma ọ bụrụ na ha họọrọ.",
      "Kwe ka ndị na-amụ ihe họrọ isiokwu ha maara nke ọma, dị ka egwuregwu ha, ọrụ ha, azụmahịa ha ma ọ bụ ihe ha na-akwado.",
      "Jiri rubric tụọ akara ndekọ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
