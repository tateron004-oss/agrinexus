"use strict";

// Koach Learn course (Igbo translation of shared/electrical-basics.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "electrical-basics-ig",
  lang: "ig",
  translationOf: "electrical-basics",
  category: "Workforce Development",
  name: "Mmalite Ọrụ Ọkụ Eletrik",
  skills: "Iji iwu Ohm na usoro mgbakọ power, Ịgụ obere ihe osise circuit, Ịgbaso lockout/tagout na ilele tupu i metụ aka, Ịgụ tape measure na multimeter, Ịhazi ụzọ gị gaa n'apprenticeship ọrụ eletrik",
  outcome: "ime mgbakọ eletrik ndị bụ isi, ịgụ obere circuit, ịkọwa nzọụkwụ nchekwa na-edebe ndị eletrishan ndụ, ịtụ ihe nke ọma, na ịgbaso atụmatụ nwere ụbọchị iji rịọ apprenticeship eletrik ma rụọ ọrụ gaa n'akwụkwọ ikike.",
  about: [
    "Ndị eletrishan na-adọ waya ọkụ n'ụlọ obibi, ọfịs, ụlọ ọrụ mmepụta ihe, usoro ọkụ anyanwụ (solar) na ebe a na-achaji ụgbọala. Ọtụtụ na-amụta ọrụ ahụ n'apprenticeship a na-akwụ ụgwọ, ọtụtụ steeti na-enyekwa ndị eletrishan akwụkwọ ikike (license). Ihe ọmụmụ a bụ nzọụkwụ mbụ: ọ bụ maka ndị na-achọ ọrụ, ndị agha lara ezumike, ndị ntorobịa, ndị na-alọta site n'ụlọ mkpọrọ, ndị kwabatara na ndị okenye na-alaghachi ịmụ ihe chọrọ ịbanye n'apprenticeship ka ha dị njikere.",
    "Ị ga-amụta ihe volts, amps, ohms na watts bụ, ma mee mgbakọ site n'iwu Ohm. Ị ga-agụ obere ihe osise circuit ma mụta ihe mere e ji adọ waya n'ụlọ otu a. Mgbe ahụ, ị ga-amụta nzọụkwụ nchekwa eletrishan ọ bụla na-agbaso, ngwa ọrụ na nka ịtụ ihe ndị na-amụ ọrụ na-eji n'ụbọchị mbụ, na otu esi arịọ apprenticeship.",
    "Ihe ọmụmụ a na-akwado gị. Ọ naghị enye gị akwụkwọ ikike ma ọ bụ asambodo, ọ naghịkwa arịọ gị ka ị rụọ ọrụ na ọkụ eletrik dị ndụ (live). Ọrụ eletrik dị ize ndụ, ọ nwekwara ike igbu mmadụ. A na-amụta ezi ọrụ waya naanị na mmemme nwere onye nlekọta, na ngwa nchekwa kwesịrị ekwesị. Akwụkwọ ikike na-esi na steeti ma ọ bụ obodo gị.",
    "Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, nwere ọrụ \"Nwalee ya ugbu a\" na ajụjụ abụọ dị ngwa. E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Ihe ikpeazụ ị ga-emepụta bụ ngwugwu mmalite eletrik nke gị, nwere atụmatụ nwere ụbọchị."
  ],
  finalTask: "Mee ngwugwu mmalite eletrik gị: (1) ajụjụ ise gbasara iwu Ohm ma ọ bụ power nke gị onwe gị dere, nke ị zara ma gosi otu i si gbakọọ ya; (2) ihe osise obere circuit parallel, nwere aha isi ọkụ, breaker, switch, load abụọ, hot, neutral na ground e dere na ya; (3) nzọụkwụ isii nke lockout/tagout e dere n'usoro na kaadị; (4) ihe ise ị tụrụ n'ụlọ site na tape measure, ruo 1/16 inch kacha nso; na (5) atụmatụ nwere ụbọchị iji rịọ mmemme apprenticeship eletrik abụọ, ya na iwu akwụkwọ ikike steeti gị site na peeji gọọmentị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye chọrọ ọrụ aka nke na-achọghị akara mmụta mahadum afọ anọ: ndị na-achọ ọrụ, ndị agha lara ezumike, ndị ntorobịa, ndị na-alọta site n'ụlọ mkpọrọ, ndị kwabatara na ndị okenye na-alaghachi ịmụ ihe. Ụfọdụ arụọla ọrụ aka ma ọ bụ ọrụ agha; ọtụtụ enweghị ọzụzụ eletrik ọ bụla.",
    startingPoint: "Ha nwere ike ime mgbakọ nọmba zuru oke na ụfọdụ fraction, ma mara na ọkụ eletrik nwere ike ịdị ize ndụ. Ọtụtụ amabeghị ịkọwa volts, amps ma ọ bụ ohms, iji iwu Ohm, ịgụ ihe osise circuit ma ọ bụ ịkọwa lockout/tagout.",
    gap: "Mmemme apprenticeship na-anwalekarị mgbakọ na ịgụ akwụkwọ, na-achọkwa ndị maara okwu ndị bụ isi ma were nchekwa kpọrọ ihe. Ndị na-amụ ihe chọrọ mgbakọ ndị bụ isi, okwu ndị ahụ, omume nchekwa na atụmatụ doro anya iji rịọ, ka ha banye ma nọrọ na nchekwa.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ (ihe dị ka klas 6 ruo 8); a na-akọwa okwu ọrụ ọ bụla",
      "Enweghị ọrụ ọkụ eletrik dị ndụ: naanị omume multimeter bụ na batrị nkịtị a na-eji n'ụlọ",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa ọba akwụkwọ maka peeji gọọmentị; akwụkwọ, mkpịsị ode, igwe mgbakọ na tape measure",
      "Oge: nkuzi nkeji 5 ruo 6 nke dabara n'etiti ọrụ na oge ịhụ ndị ọrụ",
      "Iwu akwụkwọ ikike dị iche n'otu steeti na obodo: ndị na-amụ ihe na-elele peeji gọọmentị nke ebe ha bi"
    ],
    prerequisites: "Mgbakọ nọmba zuru oke na fraction dị mfe. \"Ịmalite Ọrụ n'Ọrụ Aka Nka (Skilled Trades)\" na-enyere ndị na-amụ ihe aka ịhọrọ ọrụ aka; ihe ọmụmụ a na-abanyekwu n'ime ọrụ eletrik."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nọmba e chepụtara maka circuit", action: "ịgbakọ volts, amps, ohms ma ọ bụ watts site n'iji iwu Ohm na usoro mgbakọ power", standard: "na-enweta opekata mpe 4 n'ime ajụjụ omume 5 ziri ezi, ma gosi otu i si gbakọọ ya" },
    { id: "O2", condition: "Mgbe e nyere gị obere ihe osise circuit", action: "ịkpọ aha akụkụ ọ bụla nke circuit ahụ ma kwuo ma load ndị ahụ dị na series ma ọ bụ na parallel", standard: "na-akpọ aha akụkụ ọ bụla n'ụzọ ziri ezi" },
    { id: "O3", condition: "Mgbe e nyere gị ọrụ ebe a ga-arụ ọrụ na ngwa", action: "idepụta nzọụkwụ lockout/tagout n'usoro ma kpọọ aha ihe egwu eletrik ndị bụ isi na nchekwa ha", standard: "na nzọụkwụ isii niile n'usoro ziri ezi na opekata mpe ihe egwu atọ jikọtara ya na nchekwa ha" },
    { id: "O4", condition: "Site n'iji tape measure na, ọ bụrụ na i nwere, multimeter na batrị a na-eji n'ụlọ", action: "ịgụ ihe ị tụrụ ruo 1/16 inch kacha nso ma gụọ voltage batrị", standard: "na-enweta opekata mpe 4 n'ime ihe ise ị gụrụ ziri ezi" },
    { id: "O5", condition: "Site n'iji weebụsaịtị gọọmentị nke steeti gị", action: "ide atụmatụ nwere ụbọchị iji rịọ apprenticeship eletrik ma rụọ ọrụ gaa n'akwụkwọ ikike", standard: "nwere ezi mmemme abụọ, ihe ha chọrọ na ụbọchị maka nzọụkwụ ọ bụla" }
  ],
  chapters: [
    {
      name: "Isi 1: Otu ọkụ eletrik si arụ ọrụ",
      lessons: [
        {
          title: "Volts, amps, ohms na watts",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọwaa volts, amps, ohms na watts n'okwu nke gị, ya na ọmụmaatụ maka nke ọ bụla.",
          text: [
            "Ọkụ eletrik bụ ịgafe nke obere ihe nwere chaaji (electrons) n'ime waya. Okwu anọ na-akọwa ya, ị ga-ejikwa ha kwa ụbọchị n'ọrụ a.",
            "Voltage (volts, V) bụ ike na-akwali. Current (amps, A) bụ ole ọkụ eletrik na-agafe. Resistance (ohms, Ω) bụ otu ihe ahụ si egbochi ya ịgafe. Power (watts, W) bụ ole ọrụ ọkụ eletrik na-arụ, dị ka ikpo ọkụ, inye ìhè ma ọ bụ ịtụgharị moto.",
            "Ọkpọkọ mmiri ubi (garden hose) na-enyere aka: ike mmiri na-akwali dị ka volts, ole mmiri na-agafe dị ka amps, ebe ọkpọkọ ahụ gbagọrọ agbagọ ma ọ bụ ọnụ ya dị warara dị ka resistance. Ike ka ukwuu ma ọ bụ resistance pere mpe na-eme ka ọ gafee karịa.",
            "N'ụlọ ndị dị na US, ọtụtụ soket (outlet) na-arụ ọrụ n'ihe dị ka volts 120, nnukwu ngwa ụlọ dị ka igwe na-ehicha uwe (dryer) na stovu (range) na-eji ihe dị ka volts 240. Batrị na-enye obere current na-adịgide adịgide nke na-aga otu ụzọ (DC); ụlọ na-eji alternating current (AC), nke na-agbanwe ụzọ ọtụtụ ugboro n'otu sekọnd."
          ],
          words: [
            ["Volts (V)", "ike eletrik na-akwali, a na-akpọkwa ya voltage."],
            ["Amps (A)", "ole current eletrik na-agafe, a na-akpọkwa ya current."],
            ["Ohms (Ω)", "resistance: ole ihe ahụ na-egbochi ịgafe ahụ."],
            ["Watts (W)", "power: ole ọrụ ọkụ eletrik na-arụ."],
            ["AC na DC", "alternating current (ụlọ na nnukwu ụlọ) na-agbanwe ụzọ; direct current (batrị) na-aga otu ụzọ."],
            ["Conductor", "ihe na-ekwe ka ọkụ eletrik gafee ngwa ngwa, dị ka waya copper (ọla ọbara)."]
          ],
          slides: [
            { title: "Okwu anọ ị na-eji kwa ụbọchị", bullets: ["Volts: ike na-akwali", "Amps: ịgafe", "Ohms: resistance (ngbochi)", "Watts: ọrụ e rụrụ"] },
            { title: "Ihe atụ ọkpọkọ mmiri", bullets: ["Ike mmiri na-akwali = volts", "Mmiri na-agafe = amps", "Ebe gbagọrọ agbagọ ma ọ bụ ọnụ dị warara = resistance"] },
            { title: "N'ụlọ ndị dị na US", bullets: ["Ọtụtụ soket: ihe dị ka volts 120", "Dryer na stovu: ihe dị ka volts 240", "Ụlọ na-eji AC; batrị na-enye DC"] }
          ],
          tryIt: "N'akwụkwọ, dee okwu anọ ahụ (volts, amps, ohms, watts). N'akụkụ nke ọ bụla, dee ihe ọ pụtara n'okwu nke gị na otu ọmụmaatụ site n'ụlọ. Dịka ọmụmaatụ: watts, \"akara microwave m na-ekwu watts 1,000\". Lee akara (label) dị na lampụ, chaja ekwentị ma ọ bụ ngwa ụlọ (wepụ ya na soket, ma lee naanị akara ahụ) ma detuo volts, amps ma ọ bụ watts e dere na ya.",
          youCanNow: "ịkọwa volts, amps, ohms na watts ma chọta ha n'akara ngwa ụlọ.",
          quickCheck: [
            { objective: "O1", q: "Kedu okwu pụtara ole current eletrik na-agafe?", options: ["Volts", "Ohms", "Amps", "Watts"], answer: 2, why: "Amps (current) na-atụ ole ọkụ eletrik na-agafe." },
            { objective: "O1", q: "N'ihe atụ ọkpọkọ mmiri ubi, gịnị dị ka resistance?", options: ["Ebe gbagọrọ agbagọ ma ọ bụ ọnụ dị warara", "Ike mmiri na-akwali", "Ole mmiri", "Agba ọkpọkọ ahụ"], answer: 0, why: "Ebe gbagọrọ agbagọ na-egbochi ịgafe, otu resistance si egbochi current." }
          ]
        },
        {
          title: "Iwu Ohm na mgbakọ power",
          objectives: ["O1"],
          minutes: 6,
          goal: "Gbakọọ volts, amps, ohms ma ọ bụ watts site n'iji iwu Ohm na usoro mgbakọ power.",
          text: [
            "Iwu Ohm na-ejikọ ike na-akwali, ịgafe na resistance: volts = amps × ohms, e dere ya V = I × R (I pụtara current). Ọ bụrụ na ị mara abụọ n'ime ha, ị nwere ike ịchọta nke atọ: I = V ÷ R na R = V ÷ I.",
            "Usoro mgbakọ power: watts = volts × amps, e dere ya P = V × I. Ị nwekwara ike ịchọta amps site na watts: I = P ÷ V.",
            "Ọmụmaatụ e mere (maka omume naanị, nọmba e chepụtara): E jikọrọ batrị volts 12 na load ohms 4. Amps = 12 ÷ 4 = amps 3. Circuit volts 120 na-ebu amps 15. Watts = 120 × 15 = watts 1,800. Igwe na-ekpo ụlọ ọkụ (space heater) watts 1,500 na volts 120 na-adọta 1,500 ÷ 120 = amps 12.5.",
            "Ihe mere o ji dị mkpa: circuit ọ bụla nwere breaker e mere maka ọnụ ọgụgụ amps. Ọ bụrụ na ọtụtụ ihe na-arụ ọrụ n'otu oge ma dọta amps karịa ihe circuit ahụ kwesịrị ibu, o bu ibu karịrị akarị (overload), breaker ahụ ewee gbanyụọ (trip). Ndị eletrishan na-eme mgbakọ a iji họrọ nha waya na breaker n'enweghị nsogbu, na-agbaso koodu eletrik."
          ],
          steps: [
            "Dee ihe ị maara na ihe ị chọrọ ịchọta.",
            "Họrọ usoro mgbakọ: V = I × R, I = V ÷ R, R = V ÷ I, ma ọ bụ P = V × I.",
            "Tinye nọmba ndị ahụ ma mee mgbakọ ahụ.",
            "Dee unit ahụ (V, A, Ω ma ọ bụ W) ma jụọ: azịza a ọ dabara?"
          ],
          words: [
            ["Iwu Ohm (Ohm's law)", "iwu na-ekwu na volts = amps × ohms (V = I × R)."],
            ["Usoro mgbakọ power", "watts = volts × amps (P = V × I)."],
            ["Load", "ihe ọ bụla na-eji ọkụ eletrik, dị ka ọkụ, igwe na-ekpo ọkụ ma ọ bụ moto."],
            ["Breaker", "switch nchekwa dị n'ime panel nke na-agbanyụ circuit mgbe current karịrị akarị na-agafe."],
            ["Overload", "mgbe circuit na-ebu current karịa ihe ọ kwesịrị ibu."]
          ],
          slides: [
            { title: "Iwu Ohm", bullets: ["V = I × R", "I = V ÷ R", "R = V ÷ I"] },
            { title: "Power", bullets: ["P = V × I (watts = volts × amps)", "I = P ÷ V"] },
            { title: "Ọmụmaatụ e mere (maka omume naanị)", bullets: ["12 V ÷ 4 Ω = 3 A", "120 V × 15 A = 1,800 W", "1,500 W ÷ 120 V = 12.5 A"] },
            { title: "Ihe mere ndị eletrishan ji eme mgbakọ a", bullets: ["E na-ahọrọ breaker site n'amps", "Amps karịrị akarị = overload, breaker na-agbanyụ", "Mgbakọ na-enyere aka ịhọrọ nha waya na breaker dịka koodu si dị"] }
          ],
          tryIt: "Maka omume naanị. Zaa ma gosi otu i si gbakọọ ya: (1) volts 9 na ohms 3: amps ole? (2) amps 2 na ohms 6: volts ole? (3) volts 120 na amps 10: watts ole? (4) Microwave watts 600 na volts 120: amps ole? (5) volts 24 na amps 4: ohms ole? Azịza: 3 A; 12 V; 1,200 W; 5 A; 6 Ω. Mgbe ahụ, dee otu ajụjụ nke gị ma zaa ya: ọ bụ mmalite akụkụ 1 nke ọrụ ikpeazụ gị.",
          youCanNow: "iji iwu Ohm na usoro mgbakọ power chọta volts, amps, ohms ma ọ bụ watts.",
          quickCheck: [
            { objective: "O1", q: "Maka omume naanị: volts 12 na load ohms 3. Amps ole na-agafe?", options: ["Amps 36", "Amps 9", "Amps 15", "Amps 4"], answer: 3, why: "I = V ÷ R, ya mere 12 ÷ 3 = amps 4." },
            { objective: "O1", q: "Maka omume naanị: circuit volts 120 na-ebu amps 5. Watts ole ka nke ahụ bụ?", options: ["Watts 24", "Watts 600", "Watts 125", "Watts 115"], answer: 1, why: "P = V × I, ya mere 120 × 5 = watts 600." }
          ]
        },
        {
          title: "Circuit na otu esi agụ obere ihe osise",
          objectives: ["O2"],
          minutes: 6,
          goal: "Kpọọ aha akụkụ nke obere circuit ma mata series na parallel n'ihe osise.",
          text: [
            "Circuit bụ okirikiri zuru ezu. O nwere isi ọkụ (power source), conductor (waya), load, ụzọ isi chịkwaa ya (switch) na nchekwa (breaker ma ọ bụ fuse). Ọ bụrụ na okirikiri ahụ agbajie, ọ dịghị ihe na-agafe.",
            "Na circuit series, load ndị ahụ dị n'otu ahịrị, ya mere current na-agafe nke ọ bụla otu n'otu; ọ bụrụ na otu anyụọ, ha niile na-anyụ. Na circuit parallel, load ọ bụla nwere ụzọ nke ya, ya mere nke ọ bụla na-enweta voltage zuru ezu, otu nwekwara ike ịnyụ ebe ndị ọzọ ka na-enwu. A na-adọ soket na ọkụ n'ụlọ na parallel.",
            "Ọtụtụ waya ụlọ na US nwere ụdị waya atọ. Waya hot na-ebu current gaa na load (ọ na-adịkarị oji ma ọ bụ uhie). Neutral na-ebughachi ya (ọ na-adịkarị ọcha). Ground (copper efu ma ọ bụ akwụkwọ ndụ) na-enye ụzọ nchekwa ma ọ bụrụ na ihe mebiri. Ndị eletrishan ka na-elele waya ọ bụla, n'ihi na agba nwere ike ịdị njọ n'ọrụ ochie ma ọ bụ ọrụ na-adịghị mma.",
            "Ụdị nchekwa pụrụ iche abụọ: GFCI (ground-fault circuit interrupter) na-egbu ọkụ ngwa ngwa ma ọ bụrụ na current na-apụ apụ, dịka ọmụmaatụ site n'ahụ mmadụ; a na-eji ya n'ebe dị nso mmiri dị ka kichin, ụlọ ịsa ahụ na n'èzí. AFCI (arc-fault circuit interrupter) na-egbu ọkụ mgbe ọ hụrụ arcing (ọkụ na-awụpụ n'etiti waya) nke nwere ike ịmalite ọkụ. Short circuit na-eme mgbe current were ụzọ dị mfe a na-ezubeghị; ọ nwere ike ime ka ọkụ na-awụpụ ma kpata ọkụ, breaker ahụ kwesịkwara ịgbanyụ."
          ],
          steps: [
            "Chọta isi ọkụ (batrị ma ọ bụ panel).",
            "Soro waya ahụ site n'isi ọkụ gafee breaker ma ọ bụ fuse na switch.",
            "Chọta load ọ bụla ma lee ma ọ dị n'otu ahịrị (series) ma ọ bụ n'alaka nke ya (parallel).",
            "Soro ụzọ ahụ laghachi n'isi ọkụ."
          ],
          words: [
            ["Circuit", "okirikiri zuru ezu nke ọkụ eletrik na-agafe."],
            ["Circuit series", "load dị n'otu ahịrị; current na-agafe nke ọ bụla otu n'otu."],
            ["Circuit parallel", "load ọ bụla n'alaka nke ya; nke ọ bụla na-enweta voltage zuru ezu."],
            ["Hot, neutral na ground", "hot na-ebu current gaa na load, neutral na-ebughachi ya, ground bụ ụzọ nchekwa."],
            ["GFCI", "ground-fault circuit interrupter: na-egbu ọkụ ngwa ngwa ma ọ bụrụ na current na-apụ apụ, iji chebe ndị mmadụ pụọ n'ọkụ ịgba."],
            ["AFCI", "arc-fault circuit interrupter: na-egbu ọkụ mgbe ọ hụrụ arcing nke nwere ike ịkpata ọkụ."],
            ["Short circuit", "current na-ewere ụzọ dị mfe a na-ezubeghị; ọ nwere ike ime ka ọkụ na-awụpụ ma kpata ọkụ."]
          ],
          slides: [
            { title: "Akụkụ nke circuit ọ bụla", bullets: ["Isi ọkụ, waya, load", "Njikwa: switch", "Nchekwa: breaker ma ọ bụ fuse"] },
            { title: "Series na parallel", bullets: ["Series: otu ahịrị, otu anyụọ = ha niile anyụọ", "Parallel: alaka nke ya, voltage zuru ezu maka nke ọ bụla", "Ụlọ: parallel"] },
            { title: "Hot, neutral, ground", bullets: ["Hot: na-adịkarị oji ma ọ bụ uhie", "Neutral: na-adịkarị ọcha", "Ground: efu ma ọ bụ akwụkwọ ndụ", "Lelee mgbe niile; agba nwere ike ịdị njọ"] },
            { title: "Nchekwa ọzọ", bullets: ["GFCI: na-echebe ndị mmadụ n'akụkụ mmiri", "AFCI: na-enyere aka igbochi ọkụ arcing", "Short circuit: breaker kwesịrị ịgbanyụ"] }
          ],
          tryIt: "N'akwụkwọ, see batrị, switch na bọlbụ ọkụ abụọ na series. Mgbe ahụ, see otu akụkụ ndị ahụ na parallel. Dee aha isi ọkụ, switch na load n'ihe osise abụọ ahụ, ma dee ihe na-eme n'ihe osise ọ bụla ma ọ bụrụ na otu bọlbụ agbaa. Ọzọ, see circuit ụlọ: panel, breaker, switch na ọkụ abụọ na parallel, nwere aha hot, neutral na ground. Debe ya: ọ bụ akụkụ 2 nke ọrụ ikpeazụ gị.",
          youCanNow: "ịkpọ aha akụkụ nke obere circuit ma mata series na parallel n'ihe osise.",
          quickCheck: [
            { objective: "O2", q: "E jikọrọ bọlbụ abụọ nke mere na mgbe otu gbara, nke ọzọ ka na-enwu. Kedu otu e si jikọọ ha?", options: ["Na series", "Na parallel", "N'enweghị switch", "N'azụ azụ"], answer: 1, why: "Na parallel, bọlbụ ọ bụla nwere ụzọ nke ya, ya mere otu nwere ike ịnyụ ebe nke ọzọ ka na-enwu." },
            { objective: "O2", q: "Kedu ngwa na-echebe ndị mmadụ pụọ n'ọkụ ịgba n'akụkụ sink kichin?", options: ["AFCI", "Switch ọkụ", "Dimmer", "GFCI"], answer: 3, why: "GFCI na-egbu ọkụ ngwa ngwa mgbe current na-apụ apụ, dị ka site n'ahụ mmadụ nọ n'akụkụ mmiri." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Otu ọkụ eletrik si arụ ọrụ",
        questions: [
          { objective: "O1", q: "Kedu okwu pụtara ike eletrik na-akwali?", options: ["Volts", "Amps", "Ohms", "Watts"], answer: 0, why: "Voltage bụ ike na-akwali current n'ime circuit." },
          { objective: "O1", q: "Maka omume naanị: amps 2 na-agafe na load ohms 10. Gịnị bụ voltage?", options: ["Volts 5", "Volts 12", "Volts 20", "Volts 8"], answer: 2, why: "V = I × R, ya mere 2 × 10 = volts 20." },
          { objective: "O1", q: "Maka omume naanị: igwe na-ehicha ntutu watts 1,200 na-arụ ọrụ na volts 120. Amps ole ka ọ na-adọta?", options: ["Amps 10", "Amps 100", "Amps 1,320", "Amps 12"], answer: 0, why: "I = P ÷ V, ya mere 1,200 ÷ 120 = amps 10." },
          { objective: "O2", q: "Kedu akụkụ circuit na-agbanyụ ya ma ọ bụrụ na current karịrị akarị na-agafe?", options: ["Load", "Waya neutral", "Mpempe switch", "Breaker ma ọ bụ fuse"], answer: 3, why: "Breaker na fuse na-echebe circuit site n'ịkwụsị current mgbe ọ karịrị akarị." },
          { objective: "O2", q: "N'ọtụtụ waya ụlọ na US, kedu waya na-adịkarị ọcha?", options: ["Waya hot", "Waya neutral", "Waya ground", "Ọ dịghị; a naghị eji agba mgbe ọ bụla"], answer: 1, why: "Neutral na-adịkarị ọcha, mana ndị eletrishan ka na-elele, n'ihi na agba nwere ike ịdị njọ." }
        ]
      }
    },
    {
      name: "Isi 2: Nchekwa, ngwa ọrụ na ụzọ gị",
      lessons: [
        {
          title: "Nchekwa eletrik: lockout/tagout na ilele tupu i metụ aka",
          objectives: ["O3"],
          minutes: 6,
          goal: "Depụta nzọụkwụ isii nke lockout/tagout n'usoro ma kpọọ aha ihe egwu eletrik ndị bụ isi.",
          text: [
            "Ọkụ eletrik nwere ike igbu mmadụ. Ihe egwu eletrik gụnyere ọkụ ịgba (shock), ọnwụ site n'ọkụ eletrik (electrocution), ọkụ ire, arc flash (mgbawa ọkụ na ìhè na mberede site na mmebi eletrik), ọkụ na ịda mgbe ọkụ gbachara mmadụ. OSHA depụtara ihe na-akpatakarị mmerụ ahụ eletrik, gụnyere imetụ waya ọkụ dị n'elu (power lines), enweghị nchekwa ground-fault, ụzọ ground gbajiri agbaji, iji ngwa n'ụzọ na-ezighi ezi, na iji extension cord n'ụzọ na-ezighi ezi.",
            "Ụzọ kacha enweghị nsogbu isi rụọ ọrụ bụ mgbe ọkụ gbanyụrụ ma e kpọchiri ya (locked out). Iwu lockout/tagout nke OSHA (29 CFR 1910.147) na-esetịpụ usoro maka ndị ọrụ e nyere ikike ma zụọ: 1. Kwadebe: mara ike dị ebe ahụ na otu esi achịkwa ya. 2. Gbanyụọ ngwa ahụ. 3. Kewapụ ya: meghee disconnect ma ọ bụ breaker. 4. Tinye mkpọchi na tag nke gị. 5. Hapụ ma ọ bụ gbochie ike echekwara (dị ka capacitor nwere chaaji ma ọ bụ spring). 6. Kwado: lelee na ọ gbanyụrụ n'ezie tupu ị malite.",
            "Lelee tupu i metụ aka: jiri tester ma ọ bụ meter nke ị buru ụzọ lelee n'isi ọkụ ị maara na ọ dị ndụ, mgbe ahụ lelee circuit ahụ, wee lelee tester ahụ ọzọ. Naanị ndị ọrụ e zụrụ azụ tozuru oke na-eme nke a, dịka akụkụ nke mmemme onye were ha n'ọrụ.",
            "Omume ndị ọzọ: jiri ubube (ladder) na-anaghị ebu ọkụ (fiberglass) n'akụkụ ọkụ eletrik, nọrọ nke ọma n'ebe dị anya site na waya ọkụ dị n'elu, jiri nchekwa GFCI maka ngwa ọrụ eletrik, arụla ọrụ na ngwa eletrik n'ebe mmiri dị mgbe ọ bụla, ma yiri ugogbe anya nchekwa, gloves na PPE ndị ọzọ onye were gị n'ọrụ chọrọ."
          ],
          steps: [
            "Kwadebe: mara ike ahụ na otu esi achịkwa ya.",
            "Gbanyụọ ngwa ahụ.",
            "Kewapụ ya n'isi ọkụ.",
            "Tinye mkpọchi na tag nke gị.",
            "Hapụ ma ọ bụ gbochie ike echekwara.",
            "Kwado na ọ gbanyụrụ: lelee tupu i metụ aka."
          ],
          words: [
            ["Electrocution", "ọnwụ nke ọkụ eletrik gbara mmadụ kpatara."],
            ["Arc flash", "mgbawa ọkụ, ìhè na ike na mberede site na mmebi eletrik."],
            ["Lockout/tagout", "ịgbanyụ na ịkpọchi isi ike ahụ, ya na tag, ka onye ọ bụla ghara ịgbanye ya mgbe a na-arụ ọrụ."],
            ["Ike echekwara (stored energy)", "ike fọdụrụ mgbe e gbanyụchara ọkụ, dị ka n'ime capacitor ma ọ bụ spring."],
            ["Onye ọrụ tozuru oke (qualified worker)", "onye e zụrụ ịmata ihe egwu ma rụọ ọrụ eletrik ahụ n'enweghị nsogbu."],
            ["OSHA", "Occupational Safety and Health Administration nke US, nke na-esetịpụ iwu nchekwa ebe ọrụ."]
          ],
          slides: [
            { title: "Ọkụ eletrik nwere ike igbu mmadụ", bullets: ["Ọkụ ịgba, electrocution, ọkụ ire", "Arc flash na ọkụ", "Ịda mgbe ọkụ gbachara gị"] },
            { title: "Lockout/tagout: nzọụkwụ isii", bullets: ["1. Kwadebe  2. Gbanyụọ  3. Kewapụ", "4. Mkpọchi na tag  5. Hapụ ike echekwara", "6. Kwado: lelee tupu i metụ aka"] },
            { title: "Lelee tupu i metụ aka", bullets: ["Lelee tester n'isi ọkụ ị maara na ọ dị ndụ", "Lelee circuit ahụ", "Lelee tester ahụ ọzọ"] },
            { title: "Omume kwa ụbọchị", bullets: ["Ubube fiberglass n'akụkụ ọkụ eletrik", "Nọrọ n'ebe dị anya site na waya ọkụ dị n'elu", "GFCI maka ngwa ọrụ eletrik; arụla ọrụ n'ebe mmiri dị"] }
          ],
          sources: [
            { name: "OSHA: Nchekwa eletrik (Electrical safety)", url: "https://www.osha.gov/electrical" },
            { name: "OSHA: Ịchịkwa ike dị ize ndụ (lockout/tagout), 29 CFR 1910.147", url: "https://www.osha.gov/laws-regs/regulations/standardnumber/1910/1910.147" }
          ],
          tryIt: "Na kaadị (index card), dee nzọụkwụ isii nke lockout/tagout n'usoro site n'isi gị. Tụnyere ha na nkuzi ahụ ma dozie mperi ọ bụla. N'azụ ya, dee ihe egwu eletrik atọ na nchekwa maka nke ọ bụla (dịka ọmụmaatụ: waya ọkụ dị n'elu, nọrọ n'ebe dị anya ma kpọọ ụlọ ọrụ ọkụ). Debe kaadị ahụ: ọ bụ akụkụ 3 nke ọrụ ikpeazụ gị.",
          youCanNow: "idepụta nzọụkwụ isii nke lockout/tagout n'usoro ma jikọọ ihe egwu eletrik na nchekwa kwesịrị ekwesị.",
          quickCheck: [
            { objective: "O3", q: "Kedu nzọụkwụ lockout/tagout ikpeazụ tupu ọrụ amalite?", options: ["Kwado na ngwa ahụ gbanyụrụ site n'ilele", "Tinye mkpọchi gị", "Gwa onye ahịa", "Gbanyụọ ngwa ahụ"], answer: 0, why: "Mgbe i kpọchiri ma hapụ ike echekwara, ị na-akwado na ọ gbanyụrụ n'ezie tupu i metụ ihe ọ bụla." },
            { objective: "O3", q: "Kedu ubube kwesịrị ekwesị n'akụkụ ngwa eletrik?", options: ["Aluminum", "Ubube ọ bụla", "Fiberglass", "Ubube osisi dị mmiri mmiri"], answer: 2, why: "Fiberglass anaghị ebu ọkụ eletrik otu ọla si ebu ya." }
          ]
        },
        {
          title: "Ngwa ọrụ, ịtụ ihe na koodu eletrik",
          objectives: ["O4"],
          minutes: 6,
          goal: "Gụọ tape measure ruo 1/16 inch kacha nso ma gụọ voltage batrị na multimeter.",
          text: [
            "Ndị na-amụ ọrụ (apprentices) na-eji ngwa aka dị ka lineman's pliers, wire strippers, screwdriver nwere mkpuchi (insulated), level na tape measure, na ngwa nlele dị ka voltage tester na multimeter. Onye were gị n'ọrụ ma ọ bụ mmemme gị ga-akụziri gị ngwa ndị ị ga-azụ na otu esi eji nke ọ bụla n'enweghị nsogbu.",
            "Ịgụ tape measure: e kewara inch ọ bụla ka ọ bụrụ obere akara 16. Akara kacha ogologo bụ ọkara inch, mgbe ahụ nkeji anọ (quarters), mgbe ahụ eighths, mgbe ahụ sixteenths. Gụọ obere akara ndị gafere inch zuru oke ikpeazụ ma belata fraction ahụ: inch 5 na akara 6 bụ 5 6/16, nke bụ inch 5 3/8. Tụọ ugboro abụọ, bee otu ugboro.",
            "Multimeter na-atụ volts, amps na ohms. Mee omume naanị na batrị AA nkịtị: tụgharịa dial ahụ gaa na DC volts, metụ lead uhie na nsọtụ + na lead oji na nsọtụ -, ma gụọ ihuenyo ahụ. Batrị AA ọhụrụ na-agụ ihe dị ka volts 1.5. Emela omume na soket ma ọ bụ waya ụlọ ọ bụla mgbe ọ bụla.",
            "Ndị eletrishan na-agbaso National Electrical Code (NEC), a na-akpọkwa ya NFPA 70, nke na-esetịpụ ọkwa nchekwa maka waya na ngwa. Steeti na obodo na-anabata koodu ahụ, mgbe ụfọdụ na mgbanwe nke ha, ule akwụkwọ ikike na-agụnyekwa koodu ahụ na iwu obodo. Ị ga-amụta iji akwụkwọ koodu ahụ n'apprenticeship gị."
          ],
          steps: [
            "Tape: chọta inch zuru oke ikpeazụ.",
            "Gụọ akara 1/16 ndị gafere ya.",
            "Belata fraction ahụ: 8/16 = 1/2, 4/16 = 1/4, 2/16 = 1/8.",
            "Meter (batrị naanị): tụgharịa gaa na DC volts, uhie na +, oji na -, gụọ ihuenyo."
          ],
          words: [
            ["Multimeter", "meter na-atụ volts, amps na ohms."],
            ["Voltage tester", "ngwa na-egosi ma voltage dị."],
            ["Lead", "waya uhie na oji nwere probe na-ejikọ meter na ihe ị na-elele."],
            ["NEC (NFPA 70)", "National Electrical Code: ọkwa nchekwa maka waya, nke steeti na obodo na-anabata."],
            ["Ibelata fraction", "ide ya na nọmba kacha nta, dị ka 6/16 = 3/8."]
          ],
          slides: [
            { title: "Ngwa ọrụ mmalite", bullets: ["Lineman's pliers, wire strippers", "Screwdriver nwere mkpuchi, level, tape", "Voltage tester na multimeter"] },
            { title: "Ịgụ tape measure", bullets: ["Akara 16 n'inch ọ bụla", "Gụọ akara gafere inch zuru oke", "5 6/16 = inch 5 3/8"] },
            { title: "Omume multimeter: batrị naanị", bullets: ["Dial gaa na DC volts", "Uhie na +, oji na -", "AA ọhụrụ na-agụ ihe dị ka volts 1.5", "Emela omume na soket ma ọ bụ waya mgbe ọ bụla"] },
            { title: "Koodu eletrik", bullets: ["NEC, a na-akpọkwa ya NFPA 70", "Steeti na obodo na-anabata ya", "Ule akwụkwọ ikike na-agụnye koodu ahụ"] }
          ],
          sources: [
            { name: "NFPA: NFPA 70, National Electrical Code", url: "https://www.nfpa.org/codes-and-standards/nfpa-70-standard-development/70" },
            { name: "US Bureau of Labor Statistics: Ndị eletrishan (Electricians)", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm" }
          ],
          tryIt: "Tụọ ihe ise n'ụlọ site na tape measure (ọnụ ụzọ, akwụkwọ, tebụl, windo, igbe) ruo 1/16 inch kacha nso, ma dee nke ọ bụla n'ụdị e belatara. Mgbe ahụ mee omume: 3 na 12/16 = ? 7 na 2/16 = ? 10 na 8/16 = ? (Azịza: 3 3/4, 7 1/8, 10 1/2.) Ọ bụrụ na i nwere multimeter, gụọ voltage batrị AA ma dee ya. Debe ihe ndị ị gụrụ: ha bụ akụkụ 4 nke ọrụ ikpeazụ gị.",
          youCanNow: "ịgụ tape measure ruo 1/16 inch kacha nso ma gụọ voltage batrị site na multimeter.",
          quickCheck: [
            { objective: "O4", q: "Osisi tụrụ inch 4 na akara sixteenth 12. Gịnị bụ nke ahụ n'ụdị e belatara?", options: ["Inch 4 1/2", "Inch 4 3/4", "Inch 4 12", "Inch 4 1/4"], answer: 1, why: "12/16 na-ebelata ghọọ 3/4, ya mere ọ bụ inch 4 3/4." },
            { objective: "O4", q: "Ebee ka o nweghị nsogbu ime omume multimeter n'ihe ọmụmụ a?", options: ["Na soket mgbidi", "Na panel breaker", "Na switch ọkụ", "Na batrị AA"], answer: 3, why: "Batrị a na-eji n'ụlọ nwere obere voltage, o nweghịkwa nsogbu; soket na waya bụ maka ọrụ e zụrụ azụ nwere onye nlekọta." }
          ]
        },
        {
          title: "Apprenticeship, akwụkwọ ikike na atụmatụ gị",
          objectives: ["O5"],
          minutes: 6,
          goal: "Dee atụmatụ nwere ụbọchị iji rịọ apprenticeship eletrik ma rụọ ọrụ gaa n'akwụkwọ ikike.",
          text: [
            "Bureau of Labor Statistics (BLS) kwuru na ọtụtụ ndị eletrishan na-amụta ọrụ site n'apprenticeship afọ 4 ma ọ bụ 5. Afọ ọ bụla na-agụnyekarị ihe dị ka awa 2,000 nke ọzụzụ n'ọrụ a na-akwụ ụgwọ, gbakwunyere klas na tiori eletrik, ịgụ blueprint na nchekwa. A chọrọ asambodo ụlọ akwụkwọ sekọndrị (high school diploma) ma ọ bụ ihe ruru ya (dị ka GED), ụfọdụ ndị na-ebu ụzọ gaa ụlọ akwụkwọ teknụzụ.",
            "Ọtụtụ steeti chọrọ ka ndị eletrishan gafee ule ma nwee akwụkwọ ikike. Ule ahụ na-agụnye National Electrical Code na koodu steeti na obodo. Ụfọdụ ebe chọkwara mmụta na-aga n'ihu (continuing education) iji debe akwụkwọ ikike ahụ. Aha dị ka apprentice, journeyman na master dị iche n'otu steeti, ya mere lelee ụlọ ọrụ na-enye akwụkwọ ikike eletrik (licensing board) nke steeti ma ọ bụ obodo gị.",
            "Ndị otu ọrụ (unions), otu ndị kọntraktọ na ndị were mmadụ n'ọrụ na-agba mmemme apprenticeship. Ọtụtụ na-arịọ diploma ma ọ bụ GED, ID, mgbe ụfọdụ akwụkwọ ikike ịnya ụgbọala, ule mgbakọ na ịgụ akwụkwọ na ajụjụ ọnụ (interview), ụfọdụ na-anabata arịrịọ naanị n'oge ụfọdụ. Chọta mmemme na apprenticeship.gov, na American Job Centers na kọleji obodo (community colleges). Ndị agha lara ezumike nwere ike ịjụ VA maka GI Bill; ọ bụrụ na i nwere ndekọ mpụ (record), jụọ mmemme ahụ na licensing board otu ha si eleba ya anya.",
            "Atụmatụ gị na-eme ka nke a ghọọ nzọụkwụ nwere ụbọchị: ihe ị ga-amụ, mmemme ndị ị ga-arịọ, mgbe ha na-emeghe, na ihe licensing board chọrọ."
          ],
          steps: [
            "Dee ebumnuche gị, dịka ọmụmaatụ \"ịmalite apprenticeship eletrik tupu oge mgbụsị akwụkwọ (fall) na-abịa\".",
            "Chọta mmemme abụọ dị nso gị; dee ihe nke ọ bụla chọrọ na mgbe ọ na-anabata arịrịọ.",
            "Chọta licensing board steeti ma ọ bụ obodo gị ma dee ihe ọ chọrọ (ya na adreesị weebụ ya).",
            "Chịkọta akwụkwọ: diploma ma ọ bụ GED, ID, akwụkwọ ikike ịnya ụgbọala ma ọ bụrụ na a chọrọ ya.",
            "Tinye ụbọchị ọmụmụ maka mgbakọ na ịgụ akwụkwọ, na ụbọchị maka arịrịọ ọ bụla."
          ],
          words: [
            ["Apprenticeship", "ọrụ a na-akwụ ụgwọ ebe ị na-amụta ihe n'aka ndị eletrishan nwere ahụmahụ, gbakwunyere klas."],
            ["Journeyman", "n'ọtụtụ steeti, eletrishan mechara apprenticeship ma gafee ule akwụkwọ ikike; aha dị iche iche."],
            ["Licensing board", "ọfịs steeti ma ọ bụ obodo na-enye akwụkwọ ikike eletrik."],
            ["Mmụta na-aga n'ihu (continuing education)", "obere ihe ọmụmụ ụfọdụ akwụkwọ ikike chọrọ iji mara ihe ọhụrụ na koodu na nchekwa."],
            ["American Job Center", "ebe obodo n'efu maka enyemaka ịchọ ọrụ na ọzụzụ, nke US Department of Labor na-akwado."]
          ],
          slides: [
            { title: "Otu ọtụtụ ndị eletrishan si amụta", bullets: ["Apprenticeship afọ 4 ma ọ bụ 5 (BLS)", "Ihe dị ka awa 2,000 a na-akwụ ụgwọ kwa afọ, gbakwunyere klas", "A chọrọ diploma ma ọ bụ GED"] },
            { title: "Akwụkwọ ikike", bullets: ["Ọtụtụ steeti chọrọ ule na akwụkwọ ikike", "Ule na-agụnye NEC na koodu obodo", "Lelee board steeti ma ọ bụ obodo gị"] },
            { title: "Ịbanye", bullets: ["Mmemme union, kọntraktọ na ndị were mmadụ n'ọrụ", "Ọtụtụ mgbe: ule mgbakọ na ịgụ akwụkwọ, ajụjụ ọnụ", "Ụfọdụ na-anabata arịrịọ naanị n'oge ụfọdụ"] },
            { title: "Atụmatụ gị", bullets: ["Mmemme abụọ na ihe ha chọrọ", "Iwu akwụkwọ ikike site na board gọọmentị", "Ụbọchị maka nzọụkwụ ọ bụla"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Ndị eletrishan, otu esi aghọ otu", url: "https://www.bls.gov/ooh/construction-and-extraction/electricians.htm#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: Ịchọta akwụkwọ ikike (License finder)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Ọrụ ikpeazụ: mee ngwugwu mmalite eletrik gị. Chịkọta ajụjụ iwu Ohm ise gị (Nkuzi 2), ihe osise circuit gị nwere aha (Nkuzi 3), kaadị lockout/tagout gị (Nkuzi 4) na ihe ise ị gụrụ na tape (Nkuzi 5). Mgbe ahụ, dee atụmatụ gị nwere ụbọchị: ebumnuche gị, mmemme apprenticeship abụọ dị nso gị ya na ihe nke ọ bụla chọrọ na mgbe ọ na-anabata arịrịọ, ihe steeti ma ọ bụ obodo gị chọrọ maka akwụkwọ ikike (ya na adreesị weebụ ya), na ụbọchị maka nzọụkwụ ọ bụla.",
          youCanNow: "ịgbaso atụmatụ nwere ụbọchị nke gị iji rịọ apprenticeship eletrik ma rụọ ọrụ gaa n'akwụkwọ ikike.",
          quickCheck: [
            { objective: "O5", q: "Dịka BLS si kwuo, olee otu ọtụtụ ndị eletrishan si amụta ọrụ ahụ?", options: ["Klas n'ịntanetị otu izu", "Ile vidiyo n'ụlọ", "Apprenticeship afọ 4 ma ọ bụ 5 a na-akwụ ụgwọ", "Naanị akara mmụta mahadum afọ anọ"], answer: 2, why: "Ọtụtụ ndị eletrishan na-amụta n'apprenticeship afọ 4 ma ọ bụ 5 nke na-agwakọta ọrụ a na-akwụ ụgwọ na klas." },
            { objective: "O5", q: "Ebee ka ị ga-achọpụta ihe steeti gị chọrọ maka akwụkwọ ikike eletrik?", options: ["Licensing board eletrik nke steeti ma ọ bụ obodo gị", "Otu ìgwè na soshal midia", "Ụlọ ahịa ngwa ọrụ", "Ihe ọmụmụ a"], answer: 0, why: "Iwu akwụkwọ ikike dị iche n'otu steeti na obodo, ya mere board gọọmentị bụ isi iyi ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nchekwa, ngwa ọrụ na ụzọ gị",
        questions: [
          { objective: "O3", q: "Kedu nzọụkwụ lockout/tagout na-esote ozugbo mgbe e kewapụrụ ngwa ahụ?", options: ["Kwado site n'ilele", "Tinye mkpọchi na tag nke gị", "Hapụ ike echekwara", "Kwadebe"], answer: 1, why: "Usoro ahụ bụ kwadebe, gbanyụọ, kewapụ, mkpọchi na tag, hapụ ike echekwara, kwado." },
          { objective: "O3", q: "Gịnị mere ndị ọrụ ji ahapụ ma ọ bụ gbochie ike echekwara mgbe ha kpọchiri?", options: ["Iji chekwaa ọkụ eletrik", "Ka mkpọchi ahụ dabara", "Iji mechaa ngwa ngwa", "N'ihi na akụkụ dị ka capacitor ka nwere ike ịgba mmadụ ọkụ mgbe e gbanyụrụ ọkụ"], answer: 3, why: "Ike echekwara ka nwere ike imerụ gị ahụ mgbe e gbanyụrụ ọkụ." },
          { objective: "O3", q: "OSHA depụtara ihe na-akpatakarị mmerụ ahụ eletrik. Kedu nke ọ bụ?", options: ["Imetụ waya ọkụ dị n'elu", "Iyi ugogbe anya nchekwa", "Iji ubube fiberglass", "Ịgụ akwụkwọ koodu"], answer: 0, why: "Imetụ waya ọkụ dị n'elu bụ otu n'ime ihe na-akpatakarị mmerụ ahụ OSHA depụtara." },
          { objective: "O4", q: "Gịnị bụ 9/16 inch gbakwunyere 7/16 inch?", options: ["1/2 inch", "Inch 16", "Inch 1", "Inch 2"], answer: 2, why: "9/16 + 7/16 = 16/16, nke bụ inch 1." },
          { objective: "O5", q: "Kedu nzọụkwụ atụmatụ zuru ezu?", options: ["\"Ghọọ eletrishan\"", "\"Rịọ otu ụbọchị\"", "\"Lee mmemme\"", "\"Rịọ mmemme apprenticeship nke county tupu ụbọchị ikpeazụ ya bụ March 1, ya na GED na ID m\""], answer: 3, why: "Ọ na-akpọ aha mmemme ahụ, ụbọchị ikpeazụ na ihe ị ga-ebute." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Mmalite Ọrụ Ọkụ Eletrik",
    questions: [
      { objective: "O1", q: "Kedu okwu pụtara ole ọrụ ọkụ eletrik na-arụ?", options: ["Watts", "Ohms", "Amps", "Volts"], answer: 0, why: "Watts na-atụ power: ọrụ e rụrụ, dị ka okpomọkụ ma ọ bụ ìhè." },
      { objective: "O1", q: "Iwu Ohm na-ekwu:", options: ["P = V + I", "V = I × R", "R = V × I", "I = V × R"], answer: 1, why: "Volts hà ka amps ugboro ohms." },
      { objective: "O1", q: "Maka omume naanị: volts 120 na amps 20. Watts ole?", options: ["Watts 140", "Watts 6", "Watts 2,400", "Watts 100"], answer: 2, why: "P = V × I, ya mere 120 × 20 = watts 2,400." },
      { objective: "O1", q: "Maka omume naanị: volts 24 na load ohms 6. Amps ole?", options: ["Amps 144", "Amps 18", "Amps 30", "Amps 4"], answer: 3, why: "I = V ÷ R, ya mere 24 ÷ 6 = amps 4." },
      { objective: "O1", q: "Gịnị na-eme mgbe circuit dọtara amps karịa ihe e mere ya maka ya?", options: ["Voltage na-amụba okpukpu abụọ", "O bu ibu karịrị akarị, breaker ahụ kwesịkwara ịgbanyụ", "Waya na-ajụ oyi karịa", "Ọ dịghị ihe"], answer: 1, why: "Current karịrị akarị bụ overload; breaker na-agbanyụ iji chebe waya." },
      { objective: "O2", q: "Na circuit series nwere bọlbụ atọ, otu agbaa. Gịnị na-eme?", options: ["Ha niile na-anyụ", "Naanị nke ahụ na-anyụ", "Ndị ọzọ na-enwukwu", "Breaker na-ebuwanye ibu"], answer: 0, why: "Na series, naanị otu ụzọ dị, ya mere ngbaji na-akwụsị current na-aga na ha niile." },
      { objective: "O2", q: "Olee otu a na-adọkarị waya soket n'ụlọ?", options: ["Na series", "N'enweghị breaker", "Na parallel", "N'enweghị neutral"], answer: 2, why: "Waya parallel na-enye soket ọ bụla voltage zuru ezu na ụzọ nke ya." },
      { objective: "O2", q: "Kedu waya na-enye ụzọ nchekwa ma ọ bụrụ na ihe mebiri?", options: ["Waya hot", "Waya neutral", "Switch leg", "Waya ground"], answer: 3, why: "Ground (efu ma ọ bụ akwụkwọ ndụ) bụ ụzọ nchekwa." },
      { objective: "O2", q: "Kedu ngwa na-egbu ọkụ mgbe ọ hụrụ arcing nke nwere ike ịmalite ọkụ?", options: ["GFCI", "AFCI", "Dimmer", "Plọg"], answer: 1, why: "Arc-fault circuit interrupter (AFCI) na-enyere aka igbochi ọkụ arcing." },
      { objective: "O3", q: "Kedu nzọụkwụ lockout/tagout mbụ?", options: ["Kwadebe: mara ike ahụ na otu esi achịkwa ya", "Tinye mkpọchi gị", "Kwado site n'ilele", "Gbanyụọ"], answer: 0, why: "Ị na-amalite site n'ịmara ike dị ebe ahụ na otu esi achịkwa ya." },
      { objective: "O3", q: "Mgbe ị na-elele tupu i metụ aka, gịnị mere ị ji ebu ụzọ lelee tester n'isi ọkụ ị maara na ọ dị ndụ?", options: ["Iji kpoo ya ọkụ", "Iji chaajị batrị ya", "Iji gosi na tester ahụ na-arụ ọrụ, ka a tụkwasị obi n'ihe ọ gụrụ \"enweghị voltage\"", "Ọ dịghị mkpa"], answer: 2, why: "Tester mebiri emebi nwere ike igosi n'ụzọ ụgha na voltage adịghị." },
      { objective: "O3", q: "Kedu nke bụ mgbawa ọkụ na ìhè na mberede site na mmebi eletrik?", options: ["Ground", "Load", "Breaker", "Arc flash"], answer: 3, why: "Arc flash bụ mgbawa dị ize ndụ nke mmebi eletrik kpatara." },
      { objective: "O3", q: "N'ihe ọmụmụ a, mgbe ole ka ị nwere ike ịrụ ọrụ na waya dị ndụ?", options: ["Ọ dịghị mgbe; a na-amụta ezi ọrụ waya n'ọzụzụ nwere onye nlekọta", "Mgbe Nkuzi 2 gasịrị", "Mgbe breaker gbanyere", "N'ngwụcha izu"], answer: 0, why: "Ihe ọmụmụ a anaghị arụ ọrụ dị ndụ; nke ahụ bụ maka mmemme nwere onye nlekọta na PPE." },
      { objective: "O4", q: "Tape measure gụrụ inch 6 na akara sixteenth 4. Gịnị bụ nke ahụ n'ụdị e belatara?", options: ["Inch 6 1/2", "Inch 6 1/4", "Inch 6 4", "Inch 6 1/8"], answer: 1, why: "4/16 na-ebelata ghọọ 1/4." },
      { objective: "O4", q: "Gịnị ka batrị AA ọhụrụ na-agụkarị na multimeter e tụgharịrị na DC volts?", options: ["Ihe dị ka volts 120", "Ihe dị ka volts 12", "Ihe dị ka volts 1.5", "Ihe dị ka volts 240"], answer: 2, why: "Batrị AA ọhụrụ bụ ihe dị ka volts 1.5." },
      { objective: "O4", q: "Gịnị ka a na-akpọkwa National Electrical Code?", options: ["OSHA 10", "EPA 608", "NFPA 70", "GFCI"], answer: 2, why: "A na-ebipụta NEC dị ka NFPA 70." },
      { objective: "O5", q: "Ihe ọmụmụ a ga:", options: ["Enye gị akwụkwọ ikike eletrik", "Akwado gị ịrịọ; ọ naghị enye gị akwụkwọ ikike ma ọ bụ asambodo", "Agụ dị ka awa apprenticeship gị", "Ekwe ka ị dọọ waya n'ụlọ"], answer: 1, why: "Akwụkwọ ikike na-esi na steeti ma ọ bụ obodo gị, ezi ọzụzụ na-esikwa n'apprenticeship." },
      { objective: "O5", q: "Kedu weebụsaịtị n'efu na-enyere gị aka ịchọta mmemme apprenticeship dị nso gị?", options: ["Mgbasa ozi na-apụta na mberede", "Ebe a na-ede nkọwa (comments)", "Akwụkwọ mgbasa ozi ụlọ ahịa ngwa ọrụ", "apprenticeship.gov"], answer: 3, why: "Apprenticeship.gov nwere Apprenticeship Job Finder nke US Department of Labor." },
      { objective: "O5", q: "Gịnị ka ule akwụkwọ ikike ndị eletrishan na-agụnyekarị?", options: ["National Electrical Code na koodu steeti na obodo", "Ndozi ụgbọala", "Naanị plumbing", "Ọsọ ịpị mkpịsị ugodi"], answer: 0, why: "BLS kwuru na ule akwụkwọ ikike na-agụnye NEC na koodu steeti na obodo." },
      { objective: "O5", q: "Ụfọdụ mmemme na-anabata arịrịọ naanị n'oge ụfọdụ. Gịnị ka atụmatụ gị kwesịrị inwe?", options: ["Ọ dịghị ihe; naanị gaa ebe ahụ", "Ịkọ nkọ", "Naanị logo mmemme ahụ", "Ụbọchị arịrịọ na-emeghe na mgbe ọ na-emechi"], answer: 3, why: "Ide ụbọchị arịrịọ na-eme ka ị ghara ịtụfu oge ahụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [1, 2, 5, 7, 9, 11, 13, 15, 16, 19] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ajụjụ iwu Ohm na power", objective: "O1", notYet: "Ihe na-erughị 4 n'ime ajụjụ 5 ziri ezi, ma ọ bụ e gosighị otu e si gbakọọ ya.", meets: "Opekata mpe 4 n'ime 5 ziri ezi, nke ọ bụla nwere usoro mgbakọ, otu e si gbakọọ ya na unit.", exceeds: "Ha 5 niile ziri ezi, na-eji usoro mgbakọ anọ niile, ya na nlele na azịza ọ bụla dabara." },
      { name: "Ihe osise circuit", objective: "O2", notYet: "Akụkụ ụfọdụ adịghị ma ọ bụ load adịghị na parallel.", meets: "E dere aha isi ọkụ, breaker, switch, load abụọ na parallel, hot, neutral na ground niile.", exceeds: "Ọ na-egosikwa ebe GFCI ga-adị ma kọwaa ihe mere." },
      { name: "Kaadị lockout/tagout", objective: "O3", notYet: "Nzọụkwụ ụfọdụ adịghị ma ọ bụ ha adịghị n'usoro.", meets: "Nzọụkwụ isii niile n'usoro, gbakwunyere ihe egwu atọ jikọtara ya na nchekwa.", exceeds: "Ọ na-akọwakwa ilele tupu i metụ aka site na nlele live-dead-live (dị ndụ, nwụrụ anwụ, dị ndụ)." },
      { name: "Ihe a tụrụ", objective: "O4", notYet: "Ihe a gụrụ ezighi ezi ma ọ bụ e belataghị fraction.", meets: "Opekata mpe 4 n'ime 5 ihe a gụrụ ziri ezi ruo 1/16 inch kacha nso, n'ụdị e belatara.", exceeds: "Ha ise niile ziri ezi, gbakwunyere ihe a gụrụ na batrị ebe e tụgharịrị meter ahụ nke ọma." },
      { name: "Atụmatụ nwere ụbọchị site n'isi iyi gọọmentị", objective: "O5", notYet: "Nzọụkwụ enweghị ụbọchị, ma ọ bụ iwu si na mgbasa ozi ma ọ bụ post.", meets: "Ezi mmemme abụọ nwere ihe ha chọrọ na ụbọchị arịrịọ, iwu akwụkwọ ikike nwere adreesị weebụ gọọmentị, na ụbọchị maka nzọụkwụ ọ bụla.", exceeds: "O nwekwara usoro oge ọmụmụ maka ule mbata na atụmatụ nkwado, dị ka ọrụ inyeaka (helper)." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe rịọrọ apprenticeship eletrik ma ọ bụ pre-apprenticeship n'ime ụbọchị 90",
      "Ndị na-amụ ihe a nabatara n'apprenticeship ma ọ bụ e were n'ọrụ dị ka onye inyeaka eletrik n'ime ọnwa 6",
      "Mmemme ndị mmekọ na-akọ na ndị na-arịọ na-agafe ule mgbakọ mbata ma bịa mara nzọụkwụ nchekwa ndị bụ isi"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ekwentị ma ọ bụ kọmputa nwere ịntanetị maka peeji BLS, OSHA, apprenticeship.gov na licensing board steeti",
      "Akwụkwọ, mkpịsị ode, kaadị (index cards), igwe mgbakọ na tape measure",
      "Nhọrọ: multimeter dị mfe na batrị AA (omume na batrị naanị)",
      "Ihe dị ka nkeji 60 ruo 75 n'ozuzu, n'oge nkenke: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Enweghị ọrụ ọkụ eletrik dị ndụ ọ bụla. Naanị omume meter bụ na batrị a na-eji n'ụlọ; ekwela mgbe ọ bụla ka ndị na-amụ ihe lelee soket ma ọ bụ panel.",
      "Buru ụzọ meekọọ mgbakọ ahụ ọnụ na bọọdụ, wee mee ka ndị na-amụ ihe dee ajụjụ omume nke ha ma gbanwerịta ha.",
      "Kpọọ onye na-ahazi apprenticeship ma ọ bụ eletrishan nwere akwụkwọ ikike ka ọ kọwaa usoro arịrịọ na ule mbata.",
      "Nyere onye ọ bụla na-amụ ihe aka ịchọta peeji akwụkwọ ikike nke steeti ma ọ bụ obodo ya; iwu dị iche iche, ya mere enyela otu azịza maka ìgwè niile.",
      "Maka ndị na-amụ ihe nwere ndekọ mpụ ma ọ bụ ndị agha lara ezumike, jikọọ ha na ọrụ enyemaka re-entry ma ọ bụ nke ndị agha; ekwela nkwa ihe ọ bụla mmemme ma ọ bụ licensing board ga-eme.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
