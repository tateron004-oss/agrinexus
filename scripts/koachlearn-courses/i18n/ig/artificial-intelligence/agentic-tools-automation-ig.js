"use strict";

// Koach Learn course (Igbo translation of artificial-intelligence/agentic-tools-automation.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agentic-tools-automation-ig",
  lang: "ig",
  translationOf: "agentic-tools-automation",
  category: "Artificial Intelligence",
  name: "Iji Ngwaọrụ na Automation na AI Agent",
  skills: "Ịkọwa ngwaọrụ site na schema, Ịlele ihe a na-etinye na ngwaọrụ (arguments), Itinye ngwaọrụ na-ede ihe n'azụ nkwado, Dry run na ịmegharị ọrụ n'enweghị nsogbu, Ijikọ ngwaọrụ site na MCP, Ịrụ agent n'oge a kara aka",
  outcome: "inye agent ezi ngwaọrụ n'enweghị nsogbu: ịkọwa ngwaọrụ ọ bụla site na schema, ịlele ihe ọ bụla a na-etinye na ya, idebe ihe ọ bụla na-ede ihe n'azụ dry run na \"ee\" nke mmadụ, na ịrụ agent ahụ dị ka automation a na-emegharị emegharị nke na-agụ faịlụ ma dee akụkọ.",
  about: [
    "Nke a bụ ihe ọmụmụ nke 4 nke Design, Build, and Deploy Autonomous AI Agents (Ịhazi, Iwu na Itinye AI Agent n'Ọrụ). Agent gị nke ihe ọmụmụ 3 nwere ngwaọrụ abụọ n'enweghị nsogbu. Ezi agent na-agụ faịlụ, na-akpọ ọrụ weebụ (web services) ma na-ede nsonaazụ, ọ bụkwa ebe ahụ ka ọtụtụ ihe ọjọọ agent na-eme si amalite. Ihe ọmụmụ a na-akụziri gị otu esi etinye ezi ngwaọrụ n'atụfughị njikwa.",
    "Isi 1 gbasara ngwaọrụ: ịkọwa ha site na schema model ghọtara, ịlele ihe ọ bụla koodu gị natara, na itinye omume ọ bụla na-agbanwe ihe n'azụ dry run na nkwado mmadụ. Isi 2 gbasara automation: ihe na-amalite ọrụ (triggers) na oge a kara aka, ịmegharị ọrụ n'enweghị nsogbu, Model Context Protocol (MCP) maka ijikọ ngwaọrụ, na ime ka agent gị bụrụ ọrụ na-arụ n'onwe ya.",
    "Ị ga-arụ ọrụ na Python na Google Colab ma ọ bụ na kọmputa nke gị. E gosiri koodu dị ka ahịrị mkpụmkpụ n'ime nkuzi. Nnwale ihe ọmụma na-emechi isi ọ bụla, ule nwere ajụjụ 20 na-emechikwa ihe ọmụmụ ahụ."
  ],
  finalTask: "Wuo agent \"akụkọ izu\" (weekly report). Ọ na-agụ faịlụ CSV nwere ahịa ma ọ bụ mmefu e chepụtara echepụta site na ngwaọrụ na-agụ ihe, na-eji ngwaọrụ calculator gbakọọ ngụkọta, ma dee nchịkọta dị mkpụmkpụ. Naanị ngwaọrụ ya na-ede ihe, save_report(filename, text), ga-elele ihe a na-etinye na ya (naanị faịlụ .txt ma ọ bụ .md, naanị n'ime folda reports), rụọ ọrụ na dry run dị ka ihe ndabara, ma jụọ \"Save report? yes/no\" tupu o dee ihe. Ịrụ ya ugboro abụọ maka otu izu ahụ agaghị eme akụkọ abụọ. Gosi ndekọ ọrụ (log) nke otu ọrụ zuru ezu.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nọ na mmemme Design, Build, and Deploy Autonomous AI Agents mechara ihe ọmụmụ 1 ruo 3: ndị nwe obere azụmahịa, ndị na-agbanwe ọrụ, ụmụ akwụkwọ na ndị ọrụ chọrọ agent na-arụ ezi ọrụ n'oge a kara aka.",
    startingPoint: "Ha ewuola loop agent nwere ngwaọrụ abụọ na Python, nwere oke nzọụkwụ, ijikwa mperi na ndekọ ọrụ. Ha enyebeghị agent ngwaọrụ na-agụ faịlụ ma ọ bụ na-agbanwe ihe, ha arụbeghịkwa otu dị ka automation.",
    gap: "Ọtụtụ ihe ọjọọ agent na-eme na-eme mgbe agent nwetara ezi ngwaọrụ na-agụ ma na-ede ihe. Ndị na-amụ ihe kwesịrị ịkọwa ngwaọrụ nke ọma, lelee ihe ọ bụla a na-etinye, debe omume ide ihe n'azụ dry run na \"ee\" nke mmadụ, ma mee ka automation dị mma ịmegharị, ka agent ha nyere aka n'emebighị ihe.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; e gosiri koodu dị ka ahịrị mkpụmkpụ a ga-edetuo",
      "Ngwaọrụ: kọmputa nwere web browser; Colab maka iwu, ọ bụghị maka ịrụ ọrụ n'oge a kara aka",
      "Omume na-eji naanị data CSV e chepụtara echepụta, ọ dịghị mgbe ọ bụla ezi ndekọ ndị ahịa ma ọ bụ ego",
      "Omume ide ihe na-anọ na dry run ruo mgbe mmadụ kwadoro",
      "Naanị MCP server a pụrụ ịtụkwasị obi, nwere naanị ikike dị mkpa"
    ],
    prerequisites: "Ihe ọmụmụ 3 nke Design, Build, and Deploy Autonomous AI Agents (\"Iwu AI Agent\")."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Maka ngwaọrụ ọ bụla agent gị na-eji", action: "ide schema ngwaọrụ nwere aha doro anya, ebumnuche na ihe a na-etinye nwere ụdị (types)", standard: "nke mere na model nwere ike ịhọrọ ngwaọrụ ziri ezi na ihe ziri ezi a ga-etinye" },
    { id: "O2", condition: "Mgbe e nyere gị ihe model zitere (arguments)", action: "ịlele ihe ọ bụla a na-etinye megide allow list tupu ngwaọrụ ahụ ejiri ya", standard: "na-ajụ ụdị faịlụ ọjọọ, aghụghọ path na ụdị ezighi ezi site n'ozi mperi doro anya" },
    { id: "O3", condition: "Maka ngwaọrụ ọ bụla na-agbanwe ihe", action: "itinye omume ahụ n'azụ dry run na nkwado yes/no na-egosi nkọwa ya kpọmkwem", standard: "nke mere na ọ dịghị ihe a na-ede ruo mgbe mmadụ kwuru ee" },
    { id: "O4", condition: "Mgbe e nyere gị ọrụ a na-arụ mgbe niile", action: "ịhọrọ ihe na-amalite ya (trigger) ma mee ka automation ahụ dị mma ịmegharị", standard: "nke mere na ọrụ nke abụọ maka otu oge ahụ anaghị eme ihe abụọ (duplicate)" },
    { id: "O5", condition: "Mgbe e nyere gị ngwaọrụ ị chọrọ ikesa na app AI", action: "ịkọwa ihe MCP server na-eme ma kpebie mgbe ị ga-eji ya", standard: "na-akpọ aha iwu nkwado na nlele ị ga-edebe" },
    { id: "O6", condition: "Mgbe e nyere gị ngwaọrụ na-agụ ihe, calculator na nke na-echekwa", action: "iwu na ịnwale automation akụkọ izu site na mmalite ruo njedebe", standard: "nwere ndekọ ọrụ zuru ezu, ma na-akọ data ọjọọ kama ileghara ya anya" }
  ],
  chapters: [
    {
      name: "Isi 1: Inye agent ezi ngwaọrụ",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ịkọwa ngwaọrụ site na schema",
          minutes: 5,
          goal: "Dee nkọwa ngwaọrụ nwere aha, ebumnuche na ihe a na-etinye nwere ụdị.",
          text: [
            "Model na-ahọrọ ngwaọrụ site na nkọwa ha. Schema ngwaọrụ bụ nkọwa doro anya: aha, ahịrịokwu otu ma ọ bụ abụọ banyere ihe ọ na-eme na mgbe a ga-eji ya, na ihe ọ bụla a na-etinye na ya na ụdị ya na ihe ọ pụtara. Ọtụtụ ndị na-enye model na-ede ihe a na-etinye na JSON Schema, ụzọ a kwadoro iji kọwaa data.",
            "Ọmụmaatụ: aha read_csv; nkọwa \"Read a CSV file from the data folder and return its first 50 rows as text. Use when you need the numbers in a file.\" (Gụọ faịlụ CSV site na folda data ma weghachi ahịrị 50 mbụ ya dị ka ederede); ihe a na-etinye: filename (string, a chọrọ ya, aha faịlụ dị na folda data dị ka sales-week-42.csv).",
            "Ezigbo schema dị nta ma doo anya. Otu ngwaọrụ, otu ọrụ. Kwuo ihe ngwaọrụ ahụ na-eweghachi na mgbe a na-agaghị eji ya. Jiri aha na-agụ dị ka omume: read_csv, save_report, ọ bụghị tool1."
          ],
          steps: ["Nye ngwaọrụ ahụ aha nwere okwu omume.", "Kọwaa ihe ọ na-eme, mgbe a ga-eji ya na ihe ọ na-eweghachi.", "Depụta ihe ọ bụla a na-etinye na ụdị ya, na ma a chọrọ ya.", "Mee ka o nwee naanị otu ọrụ.", "Nwalee: nye model ebumnuche ma lee ma ọ họrọ ngwaọrụ ahụ nke ọma."],
          words: [["Schema ngwaọrụ (tool schema)", "nkọwa doro anya nke ngwaọrụ: aha ya, ebumnuche ya na ihe a na-etinye na ya."], ["JSON Schema", "ụzọ a kwadoro iji kọwaa ọdịdị data, dị ka mpaghara ndị bụ ederede ma ọ bụ nọmba."], ["Argument", "uru (value) a na-etinye n'ime ngwaọrụ ma ọ bụ function."]],
          slides: [
            { title: "Model na-ahọrọ site na nkọwa", bullets: ["Aha, ebumnuche, ihe a na-etinye", "A na-ede ihe a na-etinye na JSON Schema"] },
            { title: "Ọmụmaatụ: read_csv", bullets: ["Na-agụ CSV site na folda data", "Na-eweghachi ahịrị 50 mbụ dị ka ederede", "Ihe a na-etinye: filename (string, a chọrọ ya)"] },
            { title: "Ezigbo schema", bullets: ["Otu ngwaọrụ, otu ọrụ", "Aha omume: read_csv, save_report", "Kwuo ihe ọ na-eweghachi na mgbe a na-agaghị eji ya"] }
          ],
          tryIt: "Dee schema maka ngwaọrụ atọ: read_csv, calculator na save_report. Nye chatbot n'efu schema atọ ahụ na ebumnuche \"Total last week's sales and save a report\" (Gbakọọ ngụkọta ahịa izu gara aga ma chekwaa akụkọ), ma jụọ ya ngwaọrụ ọ ga-ebu ụzọ kpọọ na ihe ọ ga-etinye.",
          youCanNow: "ịkọwa ngwaọrụ ka model nwee ike ịhọrọ ya ma dejupụta ihe a na-etinye na ya nke ọma.",
          quickCheck: [
            { objective: "O1", q: "Gịnị ka ihe a na-etinye nwere ụdị (types) na schema ngwaọrụ na-agwa model?", options: ["Otu ngwaọrụ ahụ si agba ọsọ", "Onye dere ngwaọrụ ahụ", "Ụdị uru ihe ọ bụla a na-etinye ga-abụ, dị ka ederede ma ọ bụ nọmba", "Model a ga-eji"], answer: 2, why: "Ụdị na-akọwa ọdịdị ihe ọ bụla a na-etinye ka model wee zipu ihe ziri ezi." },
            { objective: "O1", q: "Ị chọrọ otu ngwaọrụ na-agụ faịlụ, na-ezipu email ma na-ehichapụ akụkọ ochie. Gịnị ka ị ga-eme kama?", options: ["Kewaa ya ka ọ bụrụ ngwaọrụ dị iche iche, nke ọ bụla nwere otu ọrụ doro anya", "Debe ya, n'ihi na otu ngwaọrụ dị mfe karị", "Nye ya nkọwa dị ogologo karị", "Zoo akụkụ ihichapụ na schema"], answer: 0, why: "Ezigbo ngwaọrụ na-arụ otu ọrụ doro anya, nke na-eme ka ọ dị mfe ịkọwa, ilele na ịkwado ya." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Atụkwasịla obi n'ihe a na-etinye: ilele ihe ngwaọrụ natara",
          minutes: 6,
          goal: "Lelee ihe ọ bụla model zitere tupu ngwaọrụ ejiri ya.",
          text: [
            "Model na-ede ihe a na-etinye na ngwaọrụ gị, model nwekwara ike ime mperi ma ọ bụ ka a ghọgbuo ya site na prompt injection. Ya mere ngwaọrụ ahụ, ọ bụghị model, ga-amanye iwu ndị ahụ. Were ihe a na-etinye dị ka ihe onye ị na-amaghị n'ịntanetị zitere.",
            "Lelee ụdị na ọdịdị: filename ọ bụ string? Lelee uru ndị e kwere: naanị aha na-ejedebe na .csv, naanị n'ime folda data. Gbochie aghụghọ path: aha dị ka ../../secrets.txt na-agbalị ịrịpụ na folda ahụ. Na Python: from pathlib import Path, wee p = (DATA_DIR / filename).resolve() ma jụ ma ọ bụrụ na DATA_DIR.resolve() adịghị na p.parents.",
            "Mgbe nlele dara, weghachi ozi doro anya, ọ bụghị ịkụda: \"read_csv error: only .csv files in the data folder are allowed\" (naanị faịlụ .csv dị na folda data ka e kwere). Ejila ederede model dere rụọ ọrụ dị ka koodu ma ọ bụ iwu shell; otu a ka obere mperi si aghọ nnukwu mperi."
          ],
          steps: ["Lelee ụdị ihe ọ bụla a na-etinye.", "Lelee uru ndị e kwere: ụdị faịlụ, folda, oke nọmba.", "Chọpụta path faịlụ zuru ezu (resolve) ma jụ ihe ọ bụla dị na mpụga folda e kwere.", "Weghachi ozi mperi doro anya mgbe ọ dara.", "Ejila ederede model dere rụọ ọrụ dị ka koodu ma ọ bụ iwu shell."],
          words: [["Validation (nlele)", "ịlele na ihe a na-etinye bụ ụdị ziri ezi ma dịrị n'ime uru e kwere tupu e jiri ya."], ["Path traversal", "aghụghọ na-eji ../ n'aha faịlụ iji ruo faịlụ dị na mpụga folda e kwere."], ["Allow list", "ndepụta naanị uru ndị e kwere."]],
          slides: [
            { title: "Ngwaọrụ na-amanye iwu", bullets: ["Model nwere ike ime mperi ma ọ bụ ka a ghọgbuo ya", "Were ihe a na-etinye dị ka ihe onye ị na-amaghị zitere"] },
            { title: "Lelee ihe ọ bụla a na-etinye", bullets: ["Ụdị: ọ bụ string ka ọ bụ nọmba?", "Uru e kwere: naanị .csv, naanị folda data", "Gbochie aghụghọ path ../"] },
            { title: "Mgbe ọ dara", bullets: ["Weghachi ozi mperi doro anya", "Akụdala, echepụtala ihe", "Ejila ederede model rụọ ọrụ dị ka koodu ma ọ bụ iwu"] }
          ],
          tryIt: "Dee read_csv nwere nlele. Nwalee ya n'onwe gị site na: 'sales.csv', 'notes.exe', '../secret.txt' na 42. Naanị nke mbụ kwesịrị ịgụ faịlụ; ndị ọzọ kwesịrị iweghachi ozi mperi doro anya.",
          youCanNow: "ide ngwaọrụ na-elele ihe ọ bụla a na-etinye tupu ha eme ihe.",
          quickCheck: [
            { objective: "O2", q: "Gịnị mere koodu ngwaọrụ n'onwe ya ga-eji lelee ihe a na-etinye na ya?", options: ["Schema na-egbochilarị uru ọjọọ ọ bụla", "Model nwere ike izipu ihe na-adịghị mma ma ọ bụ ezighi ezi", "Ọ na-eme ka model mara ihe karị", "Ọ dị mkpa naanị maka ngwaọrụ na-ede ihe"], answer: 1, why: "Ọ bụ naanị koodu ngwaọrụ nwere ike ịmanye iwu ya; model nwere ike ime mperi ma ọ bụ ka a ghọgbuo ya." },
            { objective: "O2", q: "read_csv natara nọmba 42 dị ka aha faịlụ. Gịnị kwesịrị ime?", options: ["Gụọ faịlụ aha ya bụ 42.csv", "Gbanwee ya ka ọ bụrụ ederede ma gaa n'ihu", "Rịọ model ka o chepụta faịlụ ziri ezi", "Weghachi ozi mperi doro anya na aha faịlụ ga-abụ ederede na-ejedebe na .csv"], answer: 3, why: "A na-ajụ ụdị ezighi ezi site n'ozi mperi doro anya model nwere ike ime ihe banyere ya." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ngwaọrụ na-ede ihe: dry run na nkwado mmadụ",
          minutes: 6,
          goal: "Tinye omume ide ihe n'azụ dry run na nkwado yes/no.",
          text: [
            "Ngwaọrụ na-ede ihe (write tool) na-agbanwe ihe: na-echekwa faịlụ, na-ezipu ozi, na-emelite mpempe akwụkwọ (sheet), na-emefu ego. Nye ngwaọrụ ndị a mkpọchi abụọ. Nke mbụ, dry run: ngwaọrụ ahụ na-ekwu kpọmkwem ihe ọ ga-eme, mana ọ naghị eme ya. Mee ka dry run bụrụ ihe ndabara, site na DRY_RUN = True n'elu koodu gị.",
            "Nke abụọ, nkwado mmadụ: tupu ezi ide ihe, gosi onye ahụ ihe ga-eme ma jụọ ya. N'ime notebook, answer = input('Save report to reports/week-42.md? yes/no ') ma gaa n'ihu naanị ma ọ bụrụ answer == 'yes'. N'ezi app, nke a bụ bọtịnụ Approve (Kwado).",
            "Gosi ezi nkọwa na nkwado ahụ, ọ bụghị nchịkọta model dere: aha faịlụ, onye ga-anata ya, ego ole. Dekọọ nkwado ọ bụla na ajụ ọ bụla. Ọ bụrụ na model arịọ ka e dee otu ihe ahụ ọzọ mgbe ị sịrị mba, nke ahụ bụ ihe ịrịba ama ịkwụsị ọrụ ahụ."
          ],
          steps: ["Kpọọ ngwaọrụ ọ bụla READ (na-agụ) ma ọ bụ WRITE (na-ede).", "Nye ngwaọrụ ọ bụla na-ede ihe ọnọdụ dry run, nke na-agbanye dị ka ihe ndabara.", "Tupu ezi ide ihe, gosi nkọwa kpọmkwem ma jụọ yes ma ọ bụ no.", "Dee naanị ma ọ bụrụ yes, ma dekọọ azịza ahụ.", "Kwụsị ọrụ ahụ ma ọ bụrụ na model na-anwa ọzọ ide ihe a jụrụ."],
          words: [["Dry run", "ọrụ omume na-egosi ihe ga-eme n'emeghị ya."], ["Approval gate (ọnụ ụzọ nkwado)", "ebe mmadụ ga-ekwu ee tupu omume eme."]],
          slides: [
            { title: "Ngwaọrụ na-ede ihe na-agbanwe ihe", bullets: ["Ichekwa, izipu, imelite, imefu", "Ha chọrọ mkpọchi abụọ"] },
            { title: "Mkpọchi 1: dry run dị ka ihe ndabara", bullets: ["DRY_RUN = True", "Na-egosi kpọmkwem ihe ga-eme", "Anaghị eme ya"] },
            { title: "Mkpọchi 2: nkwado mmadụ", bullets: ["Gosi ezi nkọwa: faịlụ, onye ga-anata, ego ole", "Jụọ yes ma ọ bụ no", "Dee naanị ma ọ bụrụ yes; dekọọ azịza"] }
          ],
          tryIt: "Dee save_report(filename, text) nwere nlele (naanị .md ma ọ bụ .txt, naanị n'ime folda reports), dry run dị ka ihe ndabara na nkwado yes/no. Nwalee ya mgbe DRY_RUN gbanyere, wee mgbe ọ gbanyụrụ, zaa no otu ugboro na yes otu ugboro.",
          youCanNow: "itinye ngwaọrụ na-ede ihe nke na-eme ihe naanị mgbe dry run na \"ee\" nke mmadụ gachara.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka dry run na-eme?", options: ["Na-egosi ihe ga-eme n'emeghị ya", "Na-arụ omume ahụ ugboro abụọ iji jide n'aka", "Na-ebu ụzọ hichapụ faịlụ ochie", "Na-echekwa nnomi model"], answer: 0, why: "Dry run na-ekwe ka mmadụ hụ nsonaazụ tupu ihe ọ bụla agbanwee." },
            { objective: "O3", q: "Ajụjụ nkwado na-ekwu naanị \"Proceed? yes/no\". Gịnị ka ị ga-agbanwe?", options: ["Ọ dịghị ihe, ọ dị mkpụmkpụ ma doo anya", "Mee ka agent zaa yes n'onwe ya", "Gosi aha faịlụ na ederede kpọmkwem a ga-echekwa", "Wepụ nkwado ka ị chekwaa oge"], answer: 2, why: "Mmadụ nwere ike ịkwado nke ọma naanị mgbe ọ hụrụ nkọwa kpọmkwem." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Inye agent ezi ngwaọrụ",
        questions: [
          { objective: "O1", q: "Gịnị ka schema ngwaọrụ na-enye model?", options: ["Igodo API gị", "Koodu isi ngwaọrụ ahụ", "Aha ngwaọrụ ahụ, ebumnuche ya na ihe a na-etinye na ya", "Ikike ịrụ ihe ọ bụla"], answer: 2, why: "Model na-ahọrọ ma na-ejupụta ngwaọrụ site na schema ha." },
          { objective: "O1", q: "Kedu aha ngwaọrụ kacha mma?", options: ["save_report", "doStuff", "tool1", "x"], answer: 0, why: "Aha omume na-agwa model ihe ngwaọrụ ahụ na-eme." },
          { objective: "O2", q: "Model zitere read_csv aha faịlụ '../../passwords.txt'. Ngwaọrụ ahụ kwesịrị:", options: ["Ịgụ ya, n'ihi na model rịọrọ", "Ịrịọ model ka o kwe nkwa na ọ dịghị nsogbu", "Ịgụ ọkara ya", "Ịjụ ya site n'ozi mperi doro anya"], answer: 3, why: "Ngwaọrụ ga-egbochi aghụghọ path na-aga na mpụga folda e kwere." },
          { objective: "O3", q: "Gịnị mere DRY_RUN ga-eji gbanye dị ka ihe ndabara?", options: ["Ọ na-agba ọsọ karị", "Ọ dịghị ihe na-agbanwe ruo mgbe mmadụ kpachaara anya gbanyụọ ya", "Model na-ahọrọ ya", "Ọ na-echekwa tokens"], answer: 1, why: "Ihe ndabara n'enweghị nsogbu na-egbochi ide ihe na mberede." },
          { objective: "O3", q: "Gịnị ka ajụjụ nkwado kwesịrị igosi?", options: ["Nchịkọta model dere", "Ọ dịghị ihe, naanị \"OK?\"", "Aha model ahụ", "Nkọwa kpọmkwem: aha faịlụ, onye ga-anata ma ọ bụ ego ole"], answer: 3, why: "Ndị mmadụ ga-akwado ihe ga-eme n'ezie." }
        ]
      }
    },
    {
      name: "Isi 2: Site na agent gaa na automation",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ihe na-amalite ọrụ, oge a kara aka na ịmegharị n'enweghị nsogbu",
          minutes: 5,
          goal: "Họrọ ihe na-amalite agent ma mee ka ịmegharị ya dị mma.",
          text: [
            "Automation bụ agent na-amalite n'onwe ya. Trigger (ihe na-amalite ya) na-ebido ya: oge a kara aka (Mọnde ọ bụla n'elekere 8 nke ụtụtụ), ihe mere (faịlụ ọhụrụ na folda, azịza fọm ọhụrụ) ma ọ bụ bọtịnụ mmadụ pịara.",
            "A na-emegharị automation: oge a kara aka na-agba ugboro abụọ, ọrụ dara n'etiti ma ị malitegharịa ya. Hazie maka ya. Idempotent pụtara na ịrụ ya ugboro abụọ na-enye otu nsonaazụ ahụ dị ka otu ugboro. Kpọọ ihe ọ na-emepụta aha oge ya (reports/week-42.md) ma lelee tupu i dee: ọ bụrụ na akụkọ ahụ dịlarị, kwụsị ma ọ bụ jụọ, kama ime nnomi ọzọ.",
            "Ụzọ isi hazie oge: na kọmputa gị, Windows Task Scheduler ma ọ bụ cron na Mac na Linux nwere ike ịrụ script Python; ngwaọrụ na-enweghị koodu dị ka Zapier, Make na n8n na-arụ workflow site na triggers; ọrụ cloud nwekwara ihe na-ahazi oge. Colab bụ maka iwu na ịnwale, ọ bụghị maka ịrụ ọrụ n'oge a kara aka. Lelee oke n'efu ugbu a nke ngwaọrụ ọ bụla na saịtị nke ya."
          ],
          steps: ["Họrọ trigger: oge a kara aka, ihe mere ma ọ bụ bọtịnụ.", "Kpọọ ihe ọ bụla ọ na-emepụta aha oge ya, dị ka week-42.", "Tupu i dee, lelee ma ihe ahụ dịlarị.", "Ọ bụrụ na ọ dịlarị, kwụsị ma ọ bụ jụọ; emela nnomi ọzọ.", "Họrọ ebe ọ ga-arụ ọrụ, ma lelee oke ngwaọrụ ahụ."],
          words: [["Trigger", "ihe mere na-amalite automation."], ["Idempotent", "ọ dị mma ịrụ ya karịa otu ugboro: ọrụ nke abụọ anaghị agbanwe ihe ọzọ."], ["Cron", "ihe na-ahazi oge na Mac na Linux nke na-arụ iwu n'oge a kara aka."]],
          slides: [
            { title: "Ụdị trigger atọ", bullets: ["Oge a kara aka: Mọnde ọ bụla n'elekere 8 nke ụtụtụ", "Ihe mere: faịlụ ọhụrụ ma ọ bụ azịza fọm", "Bọtịnụ: mmadụ na-amalite ya"] },
            { title: "Hazie maka ịmegharị", bullets: ["Idempotent: ugboro abụọ = otu ugboro", "Kpọọ ihe ọ na-emepụta aha oge ya: week-42", "Lelee tupu i dee; emela nnomi ọzọ"] },
            { title: "Ebe ọ nwere ike ịrụ ọrụ", bullets: ["Task Scheduler ma ọ bụ cron na kọmputa gị", "Na-enweghị koodu: Zapier, Make, n8n", "Colab bụ maka iwu, ọ bụghị maka ịhazi oge"] }
          ],
          tryIt: "Gbanwee save_report ka aha faịlụ gụnye nọmba izu, ka ọrụ nke abụọ maka otu izu ahụ kwụsị site na \"Report for week 42 already exists\" (Akụkọ maka izu 42 dịlarị). Rụọ ya ugboro abụọ iji gosi ya.",
          youCanNow: "ịhọrọ trigger ma mee ka automation dị mma ịrụ karịa otu ugboro.",
          quickCheck: [
            { objective: "O4", q: "Gịnị ka ọ pụtara na automation bụ idempotent?", options: ["Ọ na-arụ naanị otu ugboro n'afọ", "Ịrụ ya ugboro abụọ na-enye otu nsonaazụ ahụ dị ka ịrụ ya otu ugboro", "Ọ dịghị mgbe ọ chọrọ trigger", "Ọ na-arịọ nkwado mgbe niile"], answer: 1, why: "Enwere ike imegharị ọrụ idempotent n'enweghị nsogbu n'emeghị nnomi." },
            { objective: "O4", q: "Ọrụ izu gị rụrụ ugboro abụọ na mberede ma mee akụkọ abụọ. Gịnị ka ị ga-agbanwe?", options: ["Rụọ ya obere oge", "Jiri aka hichapụ akụkọ kwa izu", "Gbanyụọ ndekọ ọrụ", "Kpọọ akụkọ ahụ aha izu ma kwụsị ma ọ bụrụ na akụkọ izu ahụ dịlarị"], answer: 3, why: "Aha dabere n'izu na nlele ma ọ dịlarị na-eme ka ịmegharị dị mma." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ijikọ ngwaọrụ site na MCP",
          minutes: 5,
          goal: "Kọwaa ihe MCP bụ ma kpebie mgbe ị ga-eji MCP server.",
          text: [
            "Model Context Protocol (MCP) bụ ụkpụrụ open-source (onye ọ bụla nwere ike iji) maka ijikọ app AI na sistemụ ndị ọzọ: faịlụ, databases, kalenda, ngwaọrụ ọchụchọ. Saịtị nke ya na-atụnyere ya na ọdụ USB-C maka AI: wuo njikọ otu ugboro, ọtụtụ app AI nwere ike iji ya.",
            "Na MCP, server na-enye ngwaọrụ na data; client (n'ime app AI dị ka Claude, ChatGPT ma ọ bụ ihe ndezi koodu dị ka VS Code) na-ejikọ na ya ma na-ekwe ka model jiri ha. Ị nwere ike iji server ndị a kwadebere ma ọ bụ dee obere server nke gị na Python nke na-ekpuchi ngwaọrụ dị ka read_csv gị.",
            "MCP n'onwe ya anaghị eme ka ngwaọrụ dị mma. Iwu ọ bụla sitere n'Isi 1 ka na-arụ ọrụ: lelee ihe a na-etinye, ikike kacha nta (least privilege), nkwado maka ide ihe. Wụnye server naanị site n'isi iyi ị tụkwasịrị obi, n'ihi na server na-arụ ọrụ na ikike ọ bụla i nyere ya. Gụọ peeji MCP security best-practices tupu i jikọọ ihe ọ bụla nzuzo."
          ],
          words: [["MCP", "Model Context Protocol: ụkpụrụ mepere emepe maka ijikọ app AI na ngwaọrụ na data."], ["MCP server", "mmemme na-enye app AI ngwaọrụ ma ọ bụ data site na MCP."], ["MCP client", "akụkụ app AI na-ejikọ na MCP server."]],
          slides: [
            { title: "Ihe MCP bụ", bullets: ["Ụkpụrụ mepere emepe iji jikọọ app AI na ngwaọrụ na data", "Dị ka ọdụ USB-C maka AI", "Wuo otu ugboro, jiri ya n'ọtụtụ app AI"] },
            { title: "Server na client", bullets: ["Server: na-enye ngwaọrụ na data", "Client: n'ime app AI, na-ejikọ na server", "Ị nwere ike ide obere server na Python"] },
            { title: "Ọ ka bụ ọrụ gị", bullets: ["Lelee ihe a na-etinye, ikike kacha nta", "Nkwado maka ide ihe", "Wụnye server naanị site n'isi iyi ị tụkwasịrị obi"] }
          ],
          sources: [{ name: "Model Context Protocol: What is MCP?", url: "https://modelcontextprotocol.io/docs/getting-started/intro" }],
          tryIt: "Gụọ peeji mmalite MCP. Wee dee ahịrịokwu atọ: ngwaọrụ gị nke ị ga-enye site na MCP server, app AI ga-eji ya, na iwu nkwado ị ga-edebe.",
          youCanNow: "ịkọwa MCP server na client ma kpebie mgbe ijikọ ngwaọrụ site na MCP bara uru.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ MCP server?", options: ["Mmemme na-enye app AI ngwaọrụ na data n'ụzọ a kwadoro", "Model na-ede koodu", "Folda cloud maka akụkọ", "Ụdị igodo API"], answer: 0, why: "MCP, Model Context Protocol, bụ ụzọ a kwadoro iji jikọọ ngwaọrụ na data na app AI." },
            { objective: "O5", q: "Ị na-enye save_report site na MCP server. Gịnị na-eme nlele ihe a na-etinye na nkwado ya?", options: ["Enwere ike iwepụ ha, n'ihi na MCP na-elekọta nchekwa", "Ha na-akwaga na app AI", "Ị na-edebe ha n'ime ngwaọrụ ahụ", "Naanị nkwado na-anọ"], answer: 2, why: "MCP na-ejikọ ngwaọrụ; ọ naghị anọchi nlele na nkwado dị na koodu gị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Iwu automation akụkọ izu",
          minutes: 6,
          goal: "Tinye ngwaọrụ, loop na iwu nchekwa ọnụ n'otu automation.",
          text: [
            "Ugbu a, chịkọta ihe niile. Ngwaọrụ: read_csv (na-agụ, e lelere), calculator (na-agụ, e lelere), save_report (na-ede: e lelere, dry run, nkwado, enweghị nnomi). Loop sitere n'ihe ọmụmụ 3 nwere oke nzọụkwụ na ndekọ. System prompt sitere n'ihe ọmụmụ 2 nwere ebumnuche: chịkọta izu ahụ ma chekwaa akụkọ.",
            "Mee obere faịlụ e chepụtara echepụta iji nwalee, dị ka data/sales-week-42.csv nwere kọlụm day, item, amount. Ejila ezi data ndị ahịa ma ọ bụ ozi onwe mmadụ nwalee mgbe ọ bụla.",
            "Rụọ ya site na mmalite ruo njedebe. Gụọ ndekọ ọrụ: ọ gụrụ tupu ọ gbakọọ? Ọ jụrụ tupu o chekwaa? Rụọ ya ugboro nke abụọ maka otu izu ahụ: ọ gaghị eme nnomi. Wee nwaa faịlụ nwere ahịrị ọjọọ (okwu n'ebe nọmba kwesịrị ịdị) ma lee na ọ na-akọ nsogbu ahụ kama ichepụta ihe."
          ],
          steps: ["Mepụta CSV e chepụtara echepụta n'ime folda data.", "Debanye ngwaọrụ atọ ahụ na schema ha.", "Rụọ loop ahụ nwere oke nzọụkwụ na ndekọ.", "Kwado ichekwa otu ugboro; rụọ ọzọ iji nwalee na ọ dịghị nnomi.", "Nwalee faịlụ nwere ahịrị ọjọọ."],
          words: [["Test data (data nnwale)", "data e chepụtara echepụta e ji anwale mmemme n'etinyeghị ezi ozi n'ihe egwu."], ["End-to-end test", "ịrụ automation niile site na mmalite ruo njedebe."]],
          slides: [
            { title: "Tinye ya ọnụ", bullets: ["read_csv, calculator, save_report", "Loop nwere oke nzọụkwụ na ndekọ", "Prompt nwere ebumnuche izu"] },
            { title: "Nwalee site na data e chepụtara echepụta", bullets: ["data/sales-week-42.csv", "Ọ dịghị mgbe ọ bụla ezi data ndị ahịa ma ọ bụ ozi onwe mmadụ"] },
            { title: "Lelee ọrụ ahụ", bullets: ["Ọ gụrụ tupu ọ gbakọọ?", "Ọ jụrụ tupu o chekwaa?", "Ọrụ nke abụọ: enweghị nnomi", "Ahịrị ọjọọ: a kọrọ ya, e chepụtaghị ihe"] }
          ],
          tryIt: "Ọrụ ikpeazụ: wuo agent akụkọ izu nwere read_csv, calculator na save_report (e lelere, dry run dị ka ihe ndabara, nkwado yes/no, enweghị nnomi). Rụọ ya na CSV e chepụtara echepụta, rụọ ya ọzọ maka otu izu ahụ, ma chekwaa ndekọ nke ọrụ ahụ zuru ezu.",
          youCanNow: "ime ka agent bụrụ automation dị mma, a na-emegharị emegharị, nwere ezi ngwaọrụ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị bụ end-to-end test nke automation gị?", options: ["Ịnwale naanị calculator", "Ịrụ automation niile site na mmalite ruo njedebe", "Ịgụpụta koodu n'olu dị elu", "Ịnwale model na chatbot"], answer: 1, why: "End to end pụtara na akụkụ ọ bụla na-arụ ọrụ ọnụ, otu ọ ga-adị n'ezie." },
            { objective: "O6", q: "CSV gị nwere okwu \"none\" n'ebe nọmba ahịa kwesịrị ịdị. Gịnị ka agent kwesịrị ime?", options: ["Kọọ nsogbu ahụ na nchịkọta ya", "Gụọ ya dị ka efu n'ekwughị ya", "Wụfee faịlụ ahụ niile", "Chepụta nọmba"], answer: 0, why: "Ezigbo agent na-akọ data ọjọọ kama izo ya." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Site na agent gaa na automation",
        questions: [
          { objective: "O4", q: "Kedu nke bụ trigger ihe mere (event)?", options: ["Mmadụ na-agụ ndekọ ọrụ", "Mọnde ọ bụla n'elekere 8 nke ụtụtụ", "Faịlụ ọhụrụ bịarutere na folda", "Oke nzọụkwụ"], answer: 2, why: "Ihe mere, dị ka faịlụ ọhụrụ, na-amalite ọrụ ahụ." },
          { objective: "O4", q: "Automation bụ idempotent mgbe:", options: ["Ịrụ ya ugboro abụọ na-enye otu nsonaazụ ahụ dị ka otu ugboro", "Ọ na-agba ọsọ nke ukwuu", "Ọ dịghị mgbe ọ na-ada", "Ọ naghị eji ngwaọrụ ọ bụla"], answer: 0, why: "Ịmegharị n'enweghị nsogbu anaghị eme ọrụ ugboro abụọ." },
          { objective: "O5", q: "Gịnị ka MCP server na-eme?", options: ["Na-azụ model", "Na-enye app AI ngwaọrụ na data", "Na-echekwa okwuntughe gị", "Na-anọchi nlele ihe a na-etinye"], answer: 1, why: "Server na-enye ngwaọrụ na data; client n'ime app AI na-ejikọ na ha." },
          { objective: "O5", q: "Ị hụrụ MCP server na weebụsaịtị ị na-amaghị nke chọrọ ịbanye na faịlụ gị. Kedu ihe kacha mma ime?", options: ["Jiri naanị server sitere n'isi iyi ị tụkwasịrị obi, nwere naanị ikike dị mkpa", "Nye ya ikike n'ihe niile", "Wụnye ya ozugbo", "Gbanyụọ nkwado"], answer: 0, why: "Server na-arụ ọrụ na ikike ọ bụla i nyere ya." },
          { objective: "O6", q: "Kedu data ị ga-eji nwalee automation gị?", options: ["Ezi ndekọ ndị ahịa", "Akwụkwọ akaụntụ ụlọ akụ gị", "Email enyi gị", "Data nnwale e chepụtara echepụta"], answer: 3, why: "Data nnwale na-egbochi itinye ezi ozi n'ihe egwu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Iji Ngwaọrụ na Automation na AI Agent",
    questions: [
      { objective: "O1", q: "Schema ngwaọrụ gụnyere:", options: ["Data e ji zụọ model", "Aha, ebumnuche na ihe a na-etinye", "Okwuntughe", "Ndepụta ọnụahịa"], answer: 1, why: "Nke ahụ bụ ihe model na-agụ iji họrọ ma jiri ngwaọrụ ahụ." },
      { objective: "O1", q: "A na-eji JSON Schema:", options: ["Echekwa igodo API", "Eme foto", "Akọwa ọdịdị ihe a na-etinye na ngwaọrụ", "Azụ model"], answer: 2, why: "Ọ na-akọwa ụdị na mpaghara ndị a chọrọ." },
      { objective: "O1", q: "Ezigbo ngwaọrụ na-arụ:", options: ["Ihe ọ bụla model kwuru", "Ọrụ niile n'otu oge", "Otu ọrụ doro anya", "Ọ dịghị ihe"], answer: 2, why: "Ngwaọrụ dị nta ma doo anya dị mfe ịhọrọ ma dịkwa mma karị." },
      { objective: "O2", q: "Onye ga-amanye iwu ngwaọrụ?", options: ["Koodu ngwaọrụ ahụ n'onwe ya", "Model", "Browser onye ọrụ", "Ọ dịghị onye"], answer: 0, why: "Model nwere ike ime mperi ma ọ bụ ka a ghọgbuo ya." },
      { objective: "O2", q: "Aha faịlụ '../secret.txt' bụ ọmụmaatụ nke:", options: ["Faịlụ nkịtị", "Trigger", "Schema", "Path traversal"], answer: 3, why: "../ na-agbalị ịpụ na folda e kwere." },
      { objective: "O2", q: "Allow list bụ:", options: ["Ndepụta ndị ọrụ a gbochiri", "Ndepụta naanị uru ndị e kwere", "Ndepụta ihe a ga-eme", "Ntọala model"], answer: 1, why: "Ọ bụ naanị uru ndị dị na ndepụta ka a na-anabata." },
      { objective: "O2", q: "Agent ọ kwesịrị iji ederede model dere rụọ ọrụ dị ka iwu shell?", options: ["Ee, mgbe niile", "Naanị na ngwụsị izu", "Naanị ma ọ bụrụ na ọ dị mkpụmkpụ", "Mba, ọ dịghị mgbe ọ bụla"], answer: 3, why: "Nke ahụ na-eme ka mperi model ghọọ nsogbu sistemụ." },
      { objective: "O3", q: "Dry run:", options: ["Na-ehichapụ faịlụ nnwale", "Na-arụ ọrụ n'enweghị model", "Na-egosi ihe ga-eme n'emeghị ya", "Na-arụ ugboro abụọ"], answer: 2, why: "Ọ na-egosi omume ahụ tupu o mee n'enweghị nsogbu." },
      { objective: "O3", q: "Kedu nke bụ ngwaọrụ na-ede ihe?", options: ["save_report", "calculator", "read_csv", "search"], answer: 0, why: "Ichekwa na-agbanwe ihe." },
      { objective: "O3", q: "Tupu ezi ide ihe, onye ahụ kwesịrị ịhụ:", options: ["Naanị akara mkpịsị aka elu", "Faịlụ, onye ga-anata ma ọ bụ ego ole kpọmkwem", "Igodo API", "Ọ dịghị ihe"], answer: 1, why: "Nkwado ga-abụrịrị maka ezi nkọwa." },
      { objective: "O3", q: "Model na-arịọ ichekwa ọzọ ozugbo i kwuchara no. Ị kwesịrị:", options: ["Ịkwụsị ọrụ ahụ ma gụọ ndekọ ọrụ", "Ịsị yes ka ọ kwụsị", "Ịgbanyụ nkwado", "Inye ya ngwaọrụ ndị ọzọ"], answer: 0, why: "Ịnwa ọzọ ide ihe a jụrụ bụ ihe ịdọ aka na ntị." },
      { objective: "O4", q: "Kedu nke bụ trigger oge a kara aka?", options: ["Ahịrị ọjọọ", "Azịza fọm ọhụrụ", "Ịpị bọtịnụ", "Mọnde ọ bụla n'elekere 8 nke ụtụtụ"], answer: 3, why: "Oge a kara aka na-amalite ọrụ n'oge e debere." },
      { objective: "O4", q: "Ịkpọ akụkọ aha izu (week-42) na-enyere aka:", options: ["Ime ka model mara ihe karị", "Igbochi akụkọ abụọ mgbe a na-emegharị ọrụ", "Izo akụkọ ahụ", "Ichekwa tokens"], answer: 1, why: "Agent nwere ike ịlele ma akụkọ izu ahụ dịlarị." },
      { objective: "O4", q: "Google Colab ọ bụ ebe kwesịrị ekwesị iji rụọ ọrụ kwa izu n'oge a kara aka?", options: ["Ee, ọ na-arụ ruo mgbe ebighị ebi", "Ee, o nwere kalenda n'ime ya", "Mba, ọ bụ maka iwu na ịnwale", "Naanị maka ndị na-akwụ ụgwọ"], answer: 2, why: "Jiri ihe na-ahazi oge ma ọ bụ ọrụ automation maka ọrụ n'oge a kara aka." },
      { objective: "O4", q: "A na-eji cron na Windows Task Scheduler:", options: ["Elele JSON", "Ede prompt", "Arụ mmemme n'oge a kara aka", "Azụ model"], answer: 2, why: "Ha bụ ihe na-ahazi oge." },
      { objective: "O5", q: "MCP pụtara:", options: ["Model Context Protocol", "Main Control Program", "Multi Cloud Platform", "Model Copy Process"], answer: 0, why: "Ọ bụ ụkpụrụ mepere emepe maka ijikọ app AI na ngwaọrụ." },
      { objective: "O5", q: "Na saịtị nke ya, a na-atụnyere MCP na:", options: ["Eriri chaja ekwentị maka naanị Apple", "Ihe na-elekọta okwuntughe", "Spreadsheet", "Ọdụ USB-C maka app AI"], answer: 3, why: "Otu njikọ a kwadoro nke ọtụtụ app nwere ike iji." },
      { objective: "O5", q: "Iji MCP pụtara na nlele ihe a na-etinye gị:", options: ["Adịghịzi mkpa", "Ka dị mkpa", "Weebụsaịtị server ahụ na-eme ya", "Model na-eme ya"], answer: 1, why: "MCP na-ejikọ ngwaọrụ; ọ naghị eme ka ha dị mma." },
      { objective: "O6", q: "Ahịrị CSV nwere okwu n'ebe nọmba kwesịrị ịdị. Ezigbo agent:", options: ["Na-echepụta nọmba", "Na-ahapụ akụkọ ahụ niile na nzuzo", "Na-ehichapụ faịlụ ahụ", "Na-akọ nsogbu ahụ"], answer: 3, why: "Kọọ nsogbu data; echepụtala ihe mgbe ọ bụla." },
      { objective: "O6", q: "End-to-end test pụtara:", options: ["Ịnwale otu function", "Ịgụ schema", "Ịrụ automation niile site na mmalite ruo njedebe", "Ilele naanị azịza ikpeazụ"], answer: 2, why: "Ọ na-elele akụkụ ọ bụla na-arụ ọrụ ọnụ." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      3,
      4,
      7,
      9,
      11,
      12,
      15,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "A kọwara ngwaọrụ",
        objective: "O1",
        notYet: "Otu ngwaọrụ enweghị schema ma ọ bụ nwere aha ma ọ bụ ebumnuche na-edoghị anya.",
        meets: "read_csv, calculator na save_report nke ọ bụla nwere aha, ebumnuche na ihe a na-etinye nwere ụdị.",
        exceeds: "Nkọwa doro anya nke ọma nke mere na model na-ahọrọ ngwaọrụ ziri ezi na nke mbụ."
      },
      {
        name: "E lelere ihe a na-etinye",
        objective: "O2",
        notYet: "save_report na-anabata aha faịlụ ma ọ bụ folda ọ bụla.",
        meets: "Naanị faịlụ .txt ma ọ bụ .md, naanị n'ime folda reports; ihe ọjọọ a na-etinye na-enweta ozi mperi doro anya.",
        exceeds: "E lelekwara read_csv otu ụzọ ahụ, e nwalekwara ozi mperi ndị ahụ."
      },
      {
        name: "Dry run na nkwado",
        objective: "O3",
        notYet: "E dere akụkọ ahụ n'enweghị dry run ma ọ bụ yes.",
        meets: "Dry run gbanyere dị ka ihe ndabara, a jụkwara \"Save report? yes/no\" tupu e dee ihe.",
        exceeds: "Nkwado ahụ na-egosi aha faịlụ kpọmkwem na nlele mbụ (preview) nke ederede ahụ."
      },
      {
        name: "Ịmegharị n'enweghị nsogbu",
        objective: "O4",
        notYet: "Ọrụ nke abụọ maka otu izu ahụ na-eme akụkọ abụọ.",
        meets: "Ọrụ nke abụọ maka otu izu ahụ na-akwụsị n'emeghị nnomi.",
        exceeds: "Ọ na-ekwu n'ụzọ doro anya akụkọ izu nke dịlarị."
      },
      {
        name: "E dekọrọ ọrụ zuru ezu",
        objective: "O6",
        notYet: "Enweghị ndekọ, ma ọ bụ ọrụ ahụ emechaghị.",
        meets: "Ndekọ ahụ na-egosi otu ọrụ zuru ezu site n'ịgụ CSV ruo na nkwado.",
        exceeds: "Nchịkọta ahụ na-akọ ahịrị ọjọọ ọ bụla dị na data ahụ."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe gara n'ihu n'ihe ọmụmụ 5 nke mmemme agent n'ime ụbọchị 30",
      "Ndị na-amụ ihe kwuru na ha rụrụ automation n'oge a kara aka nwere nkwado maka omume ide ihe n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị na-amụ ihe kwuru na automation ha edeghị ihe a na-achọghị ma ọ bụ mee nnomi (nnyocha nsochi)"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere web browser na ịntanetị; Colab ma ọ bụ Python na kọmputa nke gị",
      "Igodo API model sitere n'ihe ọmụmụ 2 ma ọ bụ model n'efu dị na kọmputa gị",
      "Faịlụ CSV e chepụtara echepụta nwere ahịa ma ọ bụ mmefu",
      "Loop agent gị sitere n'ihe ọmụmụ 3",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee wuo akụkụ nchekwa ọ bụla n'ihu ha: schema, nlele, dry run, nkwado.",
      "Nye onye ọ bụla otu CSV e chepụtara echepụta ka e nwee ike ịtụnyere nsonaazụ; ejila ezi ndekọ ndị ahịa ma ọ bụ ego mgbe ọ bụla.",
      "Mee ka ndị na-amụ ihe nwaa aha faịlụ ọjọọ sitere na Nkuzi 2 n'olu dị elu dị ka otu ìgwè ka ha hụ mperi ọ bụla.",
      "Mesie ike na a ga-eji naanị MCP server a pụrụ ịtụkwasị obi, nwere naanị ikike dị mkpa.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma rịọ onye ọ bụla na-amụ ihe ka o gosi ọrụ nke abụọ ya na-akwụsị n'emeghị nnomi."
    ]
  }
};
