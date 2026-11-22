"use strict";

// Koach Learn course (Igbo translation of leadership/edu-ai-lesson-planning.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "edu-ai-lesson-planning-ig",
  lang: "ig",
  translationOf: "edu-ai-lesson-planning",
  category: "Leadership Development",
  name: "AI maka Ndị Ndu Ụlọ Akwụkwọ na Agụmakwụkwọ 3: AI maka Ịhazi Nkuzi",
  skills: "Ịhazi nkuzi site n'ebumnuche, Ide prompt maka atụmatụ nkuzi zuru ezu, Ịlele atụmatụ AI maka izi ezi na ndakọrịta, Itinye nkewa nkuzi (differentiation), Ide ndepụta unit, Ịkụzi otu ndị nkuzi ịhazi nkuzi na AI",
  outcome: "ịhazi nkuzi zuru ezu na ngwa enyemaka AI, site n'ebumnuche na ihe ịrịba ama ịga nke ọma ruo n'omume, nkewa nkuzi na exit ticket, ịlele ya maka izi ezi, ndakọrịta na ele mmadụ anya n'ihu, na ime usoro gị ka ọ bụrụ template otu gị nwere ike iji ọzọ.",
  about: [
    "Ihe ọmụmụ a bụ maka ndị nkuzi, ndị nchịkwa nkuzi (instructional coaches), ndị isi ngalaba na ndị isi ụlọ akwụkwọ na-akwado ịhazi nkuzi. AI nwere ike ibelata oge ịhazi nkuzi, mana atụmatụ e mere ngwa ngwa dị mma naanị ma ọ bụrụ na o ziri ezi, dakọrọ n'ihe ụmụ akwụkwọ ga-amụta, ma dabara ụmụ akwụkwọ gị.",
    "Isi 1 na-akụzi usoro backward design (ịhazi site na njedebe) na AI: bido n'ebumnuche, kpebie ihe ga-egosi na ha mụtara, wee wuo omume, ma lelee ihe niile. Isi 2 na-atụkwasị nkewa nkuzi, ịhazi unit, na otu ndị ndu si akụzi otu ndị nkuzi iji AI hazie nkuzi nke ọma.",
    "Jiri nkọwa klas e chepụtara echepụta. Etinyela aha ụmụ akwụkwọ, ozi IEP ma ọ bụ 504, akara ule ma ọ bụ ozi ọzọ na-egosi onye ọ bụ n'ime ngwa district gị ekwenyeghị na ya. E nwere obere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe. Nke a bụ ihe ọmụmụ 3 n'ime 8 nke AI maka Ndị Ndu Ụlọ Akwụkwọ na Agụmakwụkwọ."
  ],
  finalTask: "Jiri ngwa enyemaka AI hazie otu nkuzi zuru ezu gị (ma ọ bụ onye nkuzi ị na-akụzi) ga-akụzi: ebumnuche na ihe ịrịba ama ịga nke ọma site na standard ị họọrọ, hook (mmalite na-adọta uche), omume a na-eduzi na omume onwe, nkwado maka otu atọ (chọrọ nkwado ọzọ, nọ n'ọkwa, dị njikere maka ihe karịrị), na exit ticket nwere ajụjụ atọ na azịza ha. Lelee ya na ndepụta nnyocha ogo, dee ihe i gbanwere na ihe mere i ji gbanwee ya, ma chekwaa prompt gị dị ka template maka otu gị.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị nkuzi, ndị nchịkwa nkuzi, ndị isi ngalaba na ndị isi ụlọ akwụkwọ n'ụlọ akwụkwọ US na-ahazi nkuzi ma ọ bụ na-akwado ndị nkuzi na-ahazi ya.",
    startingPoint: "Ha maara iji usoro prompt nke onye nkuzi, ma mara iwu nzuzo ụmụ akwụkwọ site n'ihe ọmụmụ 1 na 2. Ha na-eji aka ahazi nkuzi, ụfọdụ ejirila AI chọọ echiche mana ọ bụghị maka nkuzi zuru ezu e lelere.",
    gap: "AI nwere ike ibelata oge ịhazi nkuzi, mana atụmatụ e mere ngwa ngwa na-adịkarị ogologo nke ukwuu, na-adakọghị ma ọ bụ na-ezighi ezi. Ndị nkuzi na ndị ndu chọrọ usoro backward design na AI, nnyocha ogo maka izi ezi, ndakọrịta na ele mmadụ anya n'ihu, na template otu ahụ nwere ike iji ọzọ.",
    constraints: [
      "Jiri nkọwa klas e chepụtara echepụta; etinyela aha ụmụ akwụkwọ, ozi IEP ma ọ bụ 504, akara ule ma ọ bụ ozi ọzọ na-egosi onye ọ bụ n'ime ngwa district ekwenyeghị na ya",
      "Standard na-esi n'isi iyi gọọmentị steeti ma ọ bụ district, ọ bụghị n'aka AI",
      "A na-ahazi nkwado IEP na 504 (accommodations) na ndị ọrụ ibe na-akụzi special education, a ka ga-enyekwa ha",
      "Ngwaọrụ: kọmputa nwere ịntanetị na ngwa enyemaka AI",
      "Oge: nkuzi dị mkpụmkpụ dabara n'ụbọchị nkuzi"
    ],
    prerequisites: "\"AI maka Ndị Ndu Ụlọ Akwụkwọ na Agụmakwụkwọ 2: Ngwa AI maka Ndị Nkuzi\"."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị standard e detuuru site n'isi iyi gọọmentị", action: "ide ebumnuche \"Enwere m ike\" (I can) na ihe ịrịba ama ịga nke ọma atọ site n'enyemaka AI", standard: "nke i deziri ruo mgbe ọ dị njikere maka bọọdụ, tupu ị rịọ maka omume" },
    { id: "O2", condition: "Mgbe e nyere gị ebumnuche gị", action: "ide prompt ị nwere ike iji ọzọ nke na-enweta atụmatụ nkuzi zuru ezu site n'AI", standard: "nwere ogologo oge klas, ihe ha maraworị, ngwa na akụkụ nkuzi, ya na opekata mpe ajụjụ nsochi abụọ" },
    { id: "O3", condition: "Mgbe e nyere gị atụmatụ nkuzi AI dere", action: "ịlele ya na ndepụta nnyocha ogo nwere isi ihe ise ma dee ihe i gbanwere", standard: "na-edozi nsogbu ọ bụla a chọtara" },
    { id: "O4", condition: "Mgbe e nyere gị nkuzi na klas a kọwara site na mkpa ha", action: "ịhazi nkwado maka otu atọ: chọrọ nkwado ọzọ, nọ n'ọkwa na dị njikere maka ihe karịrị", standard: "ya na nkwado IEP na 504 i kwadoro na onye ọrụ ibe na-akụzi special education" },
    { id: "O5", condition: "Mgbe e nyere gị unit nkuzi gị so na ya", action: "ide ndepụta unit na AI ma dozie ọsọ (pacing) ya", standard: "na-atụkwasị ụbọchị nlegharị anya na echiche ezighi ezi atọ a ga-akwadebe maka ha" },
    { id: "O6", condition: "Maka otu gị ma ọ bụ PLC gị", action: "ime prompt ịhazi nkuzi gị na ndepụta nnyocha ka ha bụrụ template otu ma kụzie ndị ọzọ iji ya", standard: "na-edekọ oge e chekwara na nsogbu ogo" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịhazi nkuzi na AI",
      lessons: [
        {
          objectives: ["O1"],
          title: "Bido n'ebumnuche, ọ bụghị n'omume",
          minutes: 5,
          goal: "Dee ebumnuche doro anya na ihe ịrịba ama ịga nke ọma tupu ị rịọ AI maka omume.",
          text: [
            "AI ga-eji obi ụtọ mepụta omume na-atọ ụtọ nke na-akụzighị ihe ọ bụla doro anya. Backward design na-egbochi nke a: buru ụzọ kpebie ihe ụmụ akwụkwọ kwesịrị ịma ma ọ bụ inwe ike ime, wee kpebie otu ị ga-esi hụ ya, mgbe ahụ omume.",
            "Gị na-ahọrọ standard. Detuo okwu ya kpọmkwem site na weebụsaịtị standard gọọmentị steeti gị ma ọ bụ curriculum district gị, ọ bụghị site n'AI, n'ihi na AI nwere ike ịkọ ya n'ụzọ ezighi ezi ma ọ bụ chepụta koodu standard. Wee rịọ AI ka o nyere gị aka mee ya ebumnuche ụmụ akwụkwọ ga-aghọta (\"Enwere m ike...\") na ihe ịrịba ama ịga nke ọma abụọ ma ọ bụ atọ.",
            "Ọmụmaatụ prompt: \"Nke a bụ standard: [tinye ya]. Dee ebumnuche maka otu nkuzi nye ụmụ klas 6 n'okwu ha ga-aghọta, na ihe ịrịba ama ịga nke ọma atọ na-egosi na e ruru ebumnuche ahụ.\" Dezie ya ruo mgbe ị ga-ede ya na bọọdụ."
          ],
          steps: ["Họrọ standard site n'isi iyi steeti ma ọ bụ district gị.", "Tinye okwu ya kpọmkwem n'ime prompt.", "Rịọ maka ebumnuche \"Enwere m ike\" na ihe ịrịba ama ịga nke ọma.", "Dezie ya ruo mgbe ọ doro ụmụ akwụkwọ anya.", "Naanị mgbe ahụ ka ị ga-ahazi omume."],
          words: [["Backward design", "ịhazi nkuzi site n'ebumnuche mmụta, gaa n'ihe na-egosi mmụta, wee gaa n'omume."], ["Ihe ịrịba ama ịga nke ọma (success criteria)", "ihe ụmụ akwụkwọ ga-enwe ike igosi mgbe ha ruru ebumnuche ahụ."], ["Standard", "nkwupụta gọọmentị nke ihe ụmụ akwụkwọ kwesịrị ịmụta, nke steeti ma ọ bụ district gị setịpụrụ."]],
          slides: [
            { title: "Backward design", bullets: ["1. Gịnị ka ụmụ akwụkwọ kwesịrị ịmụta?", "2. Kedu otu anyị ga-esi hụ ya?", "3. Mgbe ahụ, omume"] },
            { title: "Gị na-ahọrọ standard", bullets: ["Detuo ya site n'isi iyi gọọmentị steeti ma ọ bụ district", "AI nwere ike ịkọ ya n'ụzọ ezighi ezi ma ọ bụ chepụta koodu standard"] },
            { title: "Ebumnuche na ihe ịrịba ama ịga nke ọma", bullets: ["\"Enwere m ike...\" n'okwu ụmụ akwụkwọ ga-aghọta", "Ihe abụọ ma ọ bụ atọ ụmụ akwụkwọ ga-egosi"] }
          ],
          tryIt: "Họrọ standard maka nkuzi na-abịa. Detuo ya site n'isi iyi gọọmentị, wee jiri AI dee ebumnuche \"Enwere m ike\" na ihe ịrịba ama ịga nke ọma atọ. Dezie ha ruo mgbe ha dị njikere maka bọọdụ.",
          youCanNow: "ịmalite atụmatụ nkuzi AI na-enyere aka site n'ezi standard, ebumnuche na ihe ịrịba ama ịga nke ọma.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ ihe ịrịba ama ịga nke ọma?", options: ["Akara ule ụmụ akwụkwọ nwetara n'afọ gara aga", "Ihe ụmụ akwụkwọ ga-egosi mgbe ha ruru ebumnuche", "Ndepụta ngwa", "Ebumnuche onye nkuzi maka afọ ahụ"], answer: 1, why: "Ihe ịrịba ama ịga nke ọma na-akọwa ihe na-egosi mmụta maka ebumnuche ahụ." },
            { objective: "O1", q: "AI nyere gị koodu standard maka ebumnuche gị. Gịnị ka ị ga-eme?", options: ["Jiri ya, n'ihi na AI maara standard", "Rịọ AI ka o lelegharịa ya", "Kama nke ahụ, detuo standard site n'isi iyi gọọmentị steeti ma ọ bụ district gị", "Hapụ standard ahụ"], answer: 2, why: "AI nwere ike ịkọ standard n'ụzọ ezighi ezi ma ọ bụ chepụta ya, ya mere ọ na-esi n'isi iyi gọọmentị." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ide prompt maka nkuzi zuru ezu",
          minutes: 6,
          goal: "Nweta atụmatụ nkuzi a haziri ahazi site n'AI site na prompt ị nwere ike iji ọzọ.",
          text: [
            "Mgbe e setịpụrụ ebumnuche, rịọ maka nkuzi niile n'ụdị ụlọ akwụkwọ gị na-eji. Prompt siri ike na-enye: klas na isiokwu, ogologo oge klas, ebumnuche na ihe ịrịba ama ịga nke ọma, ihe ụmụ akwụkwọ maraworị, ngwa ị nwere, na akụkụ nkuzi ị chọrọ.",
            "Ọmụmaatụ: \"Hazie nkuzi nkeji 50 maka klas 6. Ebumnuche: [tinye]. Ihe ịrịba ama ịga nke ọma: [tinye]. Ụmụ akwụkwọ maraworị [x]. Ngwa: whiteboard, projector, enweghị ngwaọrụ. Akụkụ: hook (nkeji 5), obere nkuzi (10), omume a na-eduzi (15), omume onwe (15), exit ticket (5). Jiri tebụl nwere oge, ihe onye nkuzi na-eme, ihe ụmụ akwụkwọ na-eme.\"",
            "Were ihe ọ dere dị ka ihe mbụ (draft) site n'aka onye ọrụ ibe na-eme ngwa ngwa mana bụ onye ọhụrụ. Jụọ ajụjụ nsochi: \"mee ka hook ahụ jikọta na ndụ ụmụ akwụkwọ\", \"tinye nlele nghọta abụọ n'oge obere nkuzi\", \"belata omume a na-eduzi ka ọ bụrụ nkeji 10\"."
          ],
          steps: ["Nye klas, isiokwu na ogologo oge klas.", "Tinye ebumnuche na ihe ịrịba ama ịga nke ọma.", "Kwuo ihe ụmụ akwụkwọ maraworị na ngwa ị nwere.", "Depụta akụkụ nkuzi na oge ị chọrọ.", "Rịọ maka tebụl, wee meziwanye ya site n'ajụjụ nsochi."],
          words: [["Obere nkuzi (mini-lesson)", "akụkụ nkuzi dị mkpụmkpụ, lekwasịrị anya n'otu ihe."], ["Nlele nghọta (check for understanding)", "ụzọ ngwa ngwa iji hụ ma ụmụ akwụkwọ na-eso, dị ka iweli mkpịsị aka ukwu elu ma ọ bụ ide azịza na whiteboard."]],
          slides: [
            { title: "Nye AI ọnọdụ ahụ", bullets: ["Klas, isiokwu, ogologo oge klas", "Ebumnuche na ihe ịrịba ama ịga nke ọma", "Ihe ha maraworị na ngwa"] },
            { title: "Rịọ maka ụdị gị", bullets: ["Akụkụ nkuzi na oge ha", "Tebụl: oge, onye nkuzi, ụmụ akwụkwọ"] },
            { title: "Meziwanye ya", bullets: ["\"Jikọta hook ahụ na ndụ ụmụ akwụkwọ\"", "\"Tinye nlele nghọta abụọ\""] }
          ],
          tryIt: "Jiri usoro prompt a nweta atụmatụ nkuzi zuru ezu maka ebumnuche gị site na Nkuzi 1. Jụọ opekata mpe ajụjụ nsochi abụọ iji meziwanye ya.",
          youCanNow: "inweta atụmatụ nkuzi a haziri ahazi, nke bara uru, site n'AI ma meziwanye ya site n'ajụjụ nsochi.",
          quickCheck: [
            { objective: "O2", q: "Kedu otu ị ga-esi were atụmatụ nkuzi AI dere?", options: ["Dị ka ihe mbụ site n'aka onye ọrụ ibe na-eme ngwa ngwa mana bụ onye ọhụrụ", "Dị ka atụmatụ zuru ezu, dị njikere ịkụzi", "Dị ka atụmatụ district gị kwadoro", "Dị ka ihe ị ga-ezochi ndị ọrụ ibe gị"], answer: 0, why: "Ihe AI dere na-adị ngwa mana chọrọ ka i jiri uche gị lelee ya tupu i jiri ya." },
            { objective: "O2", q: "Nkuzi AI dere enweghị nlele nghọta. Gịnị ka ị ga-eme?", options: ["Kụzie ya otu ọ dị", "Malite mkparịta ụka ọhụrụ na ngwa ọhụrụ", "Wepụ omume ndị ahụ", "Jụọ ajụjụ nsochi: \"Tinye nlele nghọta ngwa ngwa mgbe omume a na-eduzi gachara\""], answer: 3, why: "Ajụjụ nsochi na-ejupụta oghere dị n'ihe mbụ ahụ n'amalitegharịghị." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ịlele atụmatụ: izi ezi, ndakọrịta na ele mmadụ anya n'ihu",
          minutes: 5,
          goal: "Lelee atụmatụ nkuzi AI dere na ndepụta nnyocha ogo nwere isi ihe ise.",
          text: [
            "Atụmatụ AI ọ bụla chọrọ ka onye nkuzi lelee ya tupu ọ ruo ụmụ akwụkwọ. Jiri ajụjụ ise. O ziri ezi: eziokwu, ọmụmaatụ, ụbọchị na azịza niile ọ ziri ezi? O dakọrọ: omume ọ bụla ọ na-eduga ụmụ akwụkwọ n'ebumnuche, exit ticket ọ na-atụ ya?",
            "Ọkwa ziri ezi: o siri ike na ogologo kwesịrị ụmụ akwụkwọ ndị a na oge a? Ọ dị mma ma na-anabata onye ọ bụla: ọmụmaatụ, aha na ọnọdụ ọ na-akwanyere ugwu ma dị iche iche, enweghị echiche ọjọọ banyere otu ndị mmadụ (stereotype), ụmụ akwụkwọ nwere nkwarụ na ndị na-amụ bekee nwere ike iji ya? Ọ ga-ekwe omume: ị nwere ngwa na oge?",
            "Dee ihe i gbanwere. Ka oge na-aga, nke a na-egosi otu gị ebe atụmatụ AI na-ehiekarị (ọtụtụ mgbe: ọdịnaya karịrị oge, na omume na-eme ka ụmụ akwụkwọ dị ka ha na-arụsi ọrụ ike mana ha anaghị eme omume n'ebumnuche)."
          ],
          steps: ["O ziri ezi: lelee eziokwu, ọmụmaatụ na azịza.", "O dakọrọ: omume ọ bụla na-eje ozi n'ebumnuche; exit ticket na-atụ ya.", "Ọkwa ziri ezi maka ụmụ akwụkwọ ndị a na oge a.", "Ọ dị mma ma na-anabata onye ọ bụla: enweghị stereotype; onye ọ bụla nwere ike iji ya.", "Ọ ga-ekwe omume na ngwa gị; dee ihe i gbanwere."],
          words: [["Ndakọrịta (alignment)", "mgbe ebumnuche, omume na nnwale niile dakọrọ."], ["Stereotype", "echiche na-ezighi ezi, nke a na-adịghị agbanwe, banyere otu ndị mmadụ."], ["Onye ọ bụla nwere ike iji ya (accessible)", "nwa akwụkwọ ọ bụla nwere ike iji ya, gụnyere ndị nwere nkwarụ."]],
          slides: [
            { title: "Nnyocha nwere isi ihe ise", bullets: ["O ziri ezi", "O dakọrọ", "Ọkwa ziri ezi", "Ọ dị mma ma na-anabata onye ọ bụla; ọ ga-ekwe omume"] },
            { title: "Nsogbu a na-ahụkarị n'atụmatụ AI", bullets: ["Ọdịnaya karịrị oge", "Omume na-eme ka ha rụsie ọrụ ike mana ha anaghị eru ebumnuche", "Azịza ezighi ezi ma ọ bụ eziokwu e chepụtara echepụta"] },
            { title: "Dee ihe i gbanwere", bullets: ["Ọ na-egosi ebe atụmatụ AI na-ehie", "Ọ na-ewulite uche otu gị"] }
          ],
          tryIt: "Jiri nnyocha nwere isi ihe ise lelee atụmatụ nkuzi gị. Dozie nsogbu ọ bụla ma depụta mgbanwe ndị i mere.",
          youCanNow: "ịlele atụmatụ nkuzi AI dere maka izi ezi, ndakọrịta, ọkwa, ịdị mma na ma ọ ga-ekwe omume.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka ndakọrịta pụtara n'atụmatụ nkuzi?", options: ["E bipụtara nkuzi ahụ nke ọma", "Nkuzi ahụ na-eso usoro akwụkwọ ọgụgụ", "Ebumnuche, omume na nnwale niile dakọrọ", "Nkuzi ahụ na-eji ngwa kacha ọhụrụ"], answer: 2, why: "Nkuzi dakọrọ na-eme omume ma na-atụ otu ihe ahụ ebumnuche kpọrọ aha." },
            { objective: "O3", q: "Atụmatụ AI tinyere omume ise na klas nkeji 45. Gịnị ka ị ga-agbanwe?", options: ["Belata ya ka o kwekọọ n'oge, na-edebe omume ndị na-eme omume n'ebumnuche", "Debe ise niile ma mee ngwa ngwa", "Tinye otu omume ọzọ", "Gwa ụmụ akwụkwọ ka ha mechaa ya n'ụlọ"], answer: 0, why: "Ọdịnaya karịrị oge bụ nsogbu a na-ahụkarị n'atụmatụ AI." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịhazi nkuzi na AI",
        questions: [
          { objective: "O1", q: "Na backward design, gịnị na-ebu ụzọ?", options: ["Omume na-atọ ụtọ", "Akwụkwọ omume (worksheet)", "Ihe ụmụ akwụkwọ kwesịrị ịmụta", "Atụmatụ ebe ha ga-anọdụ"], answer: 2, why: "Hazie site n'ebumnuche mmụta." },
          { objective: "O1", q: "Ebee ka okwu standard kwesịrị isi bịa?", options: ["Isi iyi gọọmentị steeti ma ọ bụ district gị", "Ihe ọ bụla AI kwuru", "Weebụsaịtị ọ bụla", "Ncheta gị"], answer: 0, why: "AI nwere ike ịkọ standard n'ụzọ ezighi ezi ma ọ bụ chepụta ya." },
          { objective: "O2", q: "Kedu ozi kacha enyere aka na prompt ịhazi nkuzi?", options: ["Aha ụmụ akwụkwọ na-agba mbọ", "Nọmba ekwentị onye isi ụlọ akwụkwọ", "Akara ule ụmụ akwụkwọ na aha ha", "Ogologo oge klas, ebumnuche, ihe ha maraworị na ngwa"], answer: 3, why: "Ọnọdụ na-eme ka atụmatụ ka mma n'enweghị ozi nzuzo." },
          { objective: "O3", q: "Omume AI dere na-atọ ụtọ mana ọ naghị eme omume n'ebumnuche. Kedu nlele dara?", options: ["O ziri ezi", "O dakọrọ", "Ọ ga-ekwe omume", "Ọ dị mma"], answer: 1, why: "Ndakọrịta pụtara na omume na-eje ozi n'ebumnuche." },
          { objective: "O3", q: "Kedu nsogbu a na-ahụkarị n'atụmatụ nkuzi AI?", options: ["Ọdịnaya adịghị ezu", "Oge zuru oke", "Enweghị ederede ọ bụla", "Ọdịnaya karịrị oge"], answer: 3, why: "AI na-ejupụtakarị oge karịa." }
        ]
      }
    },
    {
      name: "Isi 2: Nkewa nkuzi, unit na ịhazi nkuzi n'otu",
      lessons: [
        {
          objectives: ["O4"],
          title: "Itinye nkewa nkuzi (differentiation)",
          minutes: 6,
          goal: "Jiri AI hazie nkwado maka ụmụ akwụkwọ chọrọ enyemaka ọzọ na ihe ịma aka maka ndị dị njikere maka ihe karịrị.",
          text: [
            "Kọwaa otu site na mkpa ha, ọ dịghị mgbe site n'aha: \"ụmụ akwụkwọ chọrọ nkwado ọzọ n'ajụjụ nwere ọtụtụ nzọụkwụ\", \"ụmụ akwụkwọ nọ n'ọkwa\", \"ụmụ akwụkwọ dị njikere maka ihe ịma aka karịrị\". Rịọ AI maka otu ebumnuche ahụ e ruru n'ụzọ atọ: scaffolding karịrị (ọmụmaatụ a rụchara arụcha, mmalite ahịrịokwu, foto), omume nọ n'ọkwa, na extension (ajụjụ siri ike karị ma ọ bụ ọrụ na-eji ihe a mụtara n'ọnọdụ ọhụrụ).",
            "Rịọ maka nkwado na-enyere onye ọ bụla aka: foto doro anya, okwu ọhụrụ nwere foto, nhọrọ n'otu ụmụ akwụkwọ si egosi ihe ha mụtara. A na-akpọkarị ụzọ a, ịhazi maka ụmụ akwụkwọ dị iche iche site na mmalite, Universal Design for Learning (UDL); chọọ CAST's UDL Guidelines maka ihe ndị ọzọ.",
            "Ụmụ akwụkwọ nwere IEP ma ọ bụ atụmatụ 504 ga-enweta nkwado (accommodations) dị n'atụmatụ ha; nkwado AI mepụtara anaghị anọchi ha mgbe ọ bụla. Kpọtụrụ onye nkuzi special education, etinyekwala ozi atụmatụ ahụ n'ime ngwa a na-ekwenyeghị na ya."
          ],
          steps: ["Kọwaa otu site na mkpa, ọ bụghị site n'aha.", "Rịọ maka ụzọ atọ e si eru otu ebumnuche ahụ.", "Rịọ maka nkwado na-enyere onye ọ bụla aka: foto, okwu ọhụrụ, nhọrọ.", "Kwado nkwado IEP na 504 na onye nkuzi special education.", "Debe ozi atụmatụ ahụ n'ebe ọ na-adịghị n'ime ngwa a na-ekwenyeghị na ya."],
          words: [["Nkewa nkuzi (differentiation)", "ịgbanwe nkuzi ka ụmụ akwụkwọ nwere mkpa dị iche iche nwee ike iru otu ebumnuche ahụ."], ["Scaffolding", "nkwado nwa oge, dị ka ọmụmaatụ a rụchara arụcha ma ọ bụ mmalite ahịrịokwu."], ["Universal Design for Learning (UDL)", "ịhazi nkuzi maka ụmụ akwụkwọ dị iche iche site na mmalite."]],
          slides: [
            { title: "Otu site na mkpa, ọ bụghị aha", bullets: ["Chọrọ nkwado ọzọ", "Nọ n'ọkwa", "Dị njikere maka ihe karịrị"] },
            { title: "Ụzọ atọ, otu ebumnuche", bullets: ["Scaffolding: ọmụmaatụ, mmalite ahịrịokwu, foto", "Omume nọ n'ọkwa", "Extension ma ọ bụ ọrụ n'ọnọdụ ọhụrụ"] },
            { title: "Nkwado maka onye ọ bụla", bullets: ["Foto, okwu ọhụrụ, nhọrọ", "UDL: lee CAST's UDL Guidelines"] },
            { title: "IEP na atụmatụ 504", bullets: ["Nkwado a chọrọ ka dị ire", "Nkwado AI anaghị anọchi ha mgbe ọ bụla"] }
          ],
          tryIt: "Tinye nkewa nkuzi na nkuzi gị: rịọ AI maka ụzọ atọ e si eru ebumnuche ahụ, lelee ha, ma kwado nkwado IEP ma ọ bụ 504 ndị a ka ga-ahazi na onye ọrụ ibe gị na-akụzi special education.",
          youCanNow: "ịhazi nkwado na ihe ịma aka maka ụmụ akwụkwọ dị iche iche na AI ma na-asọpụrụ nkwado a chọrọ.",
          quickCheck: [
            { objective: "O4", q: "Gịnị bụ scaffolding?", options: ["Inye ụmụ akwụkwọ nọ n'ihu ọrụ ọzọ", "Nkwado dị ka ọmụmaatụ a rụchara arụcha na mmalite ahịrịokwu", "Ịnwale ụmụ akwụkwọ tupu nkuzi", "Ime ka ụmụ akwụkwọ nọdụ n'otu n'otu"], answer: 1, why: "Scaffolding na-enyere ụmụ akwụkwọ aka iru otu ebumnuche ahụ site na nkwado." },
            { objective: "O4", q: "AI tụrụ aro nkwado dị iche na nkwado dị n'IEP nwa akwụkwọ. Gịnị ka ị ga-eme?", options: ["Jiri nkwado AI kama", "Rịọ AI ka o kpebie", "Hapụ ha abụọ ma kụzie dị ka ọ dị na mbụ", "Nye nkwado IEP ahụ ma hazie ya na onye ọrụ ibe gị na-akụzi special education"], answer: 3, why: "A ka ga-enye nkwado IEP na 504, n'agbanyeghị ihe AI tụrụ aro." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Site na nkuzi gaa na unit",
          minutes: 5,
          goal: "Dee ndepụta unit na AI ma lelee ọsọ ya.",
          text: [
            "Unit bụ usoro nkuzi na-eduga n'ebumnuche ka ukwuu. Nye AI standard nke unit ahụ (site n'isi iyi gọọmentị gị), ọnụ ọgụgụ ụbọchị klas, ezumike ma ọ bụ ụbọchị ule, na ebe ụmụ akwụkwọ na-amalite. Rịọ maka ndepụta kwa ụbọchị nwere ebumnuche, isi omume na ebe nlele (checkpoints).",
            "Buru ụzọ lelee ọsọ (pacing): AI na-etinyekarị ihe karịrị. Hụ na nkuzi ọ bụla na-ewuli elu na nke gara aga, na e nwere ụbọchị nlegharị anya na atụmatụ ịkụzigharị, na nnwale njedebe unit dakọrọ n'ebumnuche.",
            "Jiri AI chepụta echiche n'ihe ọ na-eme nke ọma: ọrụ ezi ndụ (anchor project) iji kee unit ahụ, echiche ezighi ezi a na-ahụkarị a ga-akwadebe maka ha, na ajụjụ na-eme ka ụmụ akwụkwọ chee echiche. Gị na-ekpebi ihe dabara."
          ],
          steps: ["Nye standard unit, ọnụ ọgụgụ ụbọchị na oghere kalenda.", "Rịọ maka ndepụta kwa ụbọchị nwere ebumnuche na ebe nlele.", "Lelee ọsọ: wepụ, tinye ụbọchị nlegharị anya na ịkụzigharị.", "Lelee na nnwale ikpeazụ dakọrọ n'ebumnuche.", "Jiri AI chepụta echiche ezighi ezi na anchor project."],
          words: [["Unit", "otu nkuzi na-arụ ọrụ maka ebumnuche mmụta ka ukwuu."], ["Ọsọ (pacing)", "ole a na-akụzi kwa ụbọchị na otu klas si aga ngwa ngwa."], ["Echiche ezighi ezi (misconception)", "echiche ezighi ezi ụmụ akwụkwọ na-enwekarị banyere isiokwu."]],
          slides: [
            { title: "Nye ọnọdụ unit ahụ", bullets: ["Standard site n'isi iyi gọọmentị", "Ọnụ ọgụgụ ụbọchị na oghere kalenda", "Ebe ụmụ akwụkwọ na-amalite"] },
            { title: "Lelee ọsọ", bullets: ["AI na-etinyekarị ihe karịrị", "Tinye ụbọchị nlegharị anya na ịkụzigharị", "Nnwale dakọrọ n'ebumnuche"] },
            { title: "Chepụta echiche na AI", bullets: ["Echiche ezighi ezi a na-ahụkarị", "Anchor project", "Ajụjụ na-eme ka ụmụ akwụkwọ chee echiche"] }
          ],
          tryIt: "Rịọ AI maka ndepụta ụbọchị iri nke unit nkuzi gị so na ya. Dozie ọsọ ya, tinye otu ụbọchị nlegharị anya, ma depụta echiche ezighi ezi atọ a ga-akwadebe maka ha.",
          youCanNow: "ide ndepụta unit na AI ma dozie ọsọ ya.",
          quickCheck: [
            { objective: "O5", q: "Gịnị ka prompt ndepụta unit kwesịrị inwe?", options: ["Standard, ọnụ ọgụgụ ụbọchị na oghere kalenda", "Aha ụmụ akwụkwọ na akara ule ha", "Naanị aha unit ahụ", "Ụgwọ ọnwa onye nkuzi"], answer: 0, why: "Ụbọchị na oghere kalenda na-enyere AI aka ịtụ aro ọsọ ga-ekwe omume." },
            { objective: "O5", q: "Ndepụta AI dere na-ekpuchi unit ahụ n'ụbọchị iri n'enweghị nlegharị anya. Gịnị ka ị ga-eme?", options: ["Nabata ya otu e dere ya", "Tinye unit atọ ọzọ", "Dozie ọsọ ya ma tinye ụbọchị nlegharị anya", "Wepụ nnwale ahụ"], answer: 2, why: "Ọsọ bụ ihe mbụ a ga-elele, oge nlegharị anya na-efukarị." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Ịkụzi otu ndị nkuzi ịhazi nkuzi na AI",
          minutes: 6,
          goal: "Mee usoro ịhazi nkuzi gị ka ọ bụrụ template ma kụzie otu iji ya.",
          text: [
            "Ndị ndu na-eme ka omume ọma baa ụba site n'ime ka a nwee ike imegharị ya. Mee ihe ị mụtara ka ọ bụrụ template ịhazi nkuzi: prompt maka ebumnuche, nkuzi zuru ezu, nkewa nkuzi na unit, gbakwunyere ndepụta nnyocha ogo nwere isi ihe ise.",
            "Jiri ya na nzukọ otu ma ọ bụ professional learning community (PLC): onye nkuzi ọ bụla ji template ahụ hazie otu nkuzi, mgbe ahụ ndị mmekọ na-agbanwe atụmatụ ma jiri nnyocha ogo lelee nke ibe ha. Kparịta ihe AI mehiere; nke ahụ na-ewulite uche otu ngwa ngwa karịa slaịdị ọzụzụ ọ bụla.",
            "Setịpụ ihe a na-atụ anya ya: atụmatụ AI nyere aka dị mma, ndị nkuzi ka bụ ndị na-aza ajụjụ maka ihe ha na-akụzi. Hụ na a na-eji naanị ngwa a kwadoro ma na ozi ụmụ akwụkwọ ọ bụla adịghị abanye. Rịọ ndị nkuzi ka ha dee oge e chekwara na nsogbu ogo, ka ị mara ma omume ahụ na-arụ ọrụ."
          ],
          steps: ["Dee template ịhazi nkuzi: prompt anọ na ndepụta nnyocha.", "Na nzukọ otu, onye nkuzi ọ bụla ji ya hazie otu nkuzi.", "Ndị mmekọ na-agbanwe ma jiri nnyocha ogo lelee.", "Kparịta ihe AI mehiere.", "Setịpụ ihe a na-atụ anya ya ma dekọọ oge e chekwara na nsogbu ogo."],
          words: [["PLC", "professional learning community: otu ndị nkuzi na-ezukọ iji meziwanye nkuzi ọnụ."], ["Template", "ụdị mmalite ị nwere ike iji ọzọ."]],
          slides: [
            { title: "Mee ka a nwee ike imegharị ya", bullets: ["Prompt anọ: ebumnuche, nkuzi, nkewa nkuzi, unit", "Gbakwunyere ndepụta nnyocha nwere isi ihe ise"] },
            { title: "Omume n'otu", bullets: ["Onye nkuzi ọ bụla na-ahazi otu nkuzi", "Ndị mmekọ na-agbanwe ma lelee", "Kparịta ihe AI mehiere"] },
            { title: "Ihe a na-atụ anya ya doro anya", bullets: ["Ndị nkuzi na-aza ajụjụ maka ihe ha na-akụzi", "Ngwa a kwadoro, enweghị ozi ụmụ akwụkwọ", "Dekọọ oge e chekwara na ogo"] }
          ],
          tryIt: "Ọrụ ikpeazụ: mechaa atụmatụ nkuzi gị zuru ezu (ebumnuche, ihe ịrịba ama ịga nke ọma, hook, omume a na-eduzi na omume onwe, otu atọ, exit ticket nwere azịza), lelee ya na ndepụta nnyocha nwere isi ihe ise, dee mgbanwe gị, ma chekwaa prompt anọ gị na ndepụta nnyocha dị ka template otu.",
          youCanNow: "ịhazi nkuzi na AI n'ọkwa dị elu ma nyere otu aka ime otu ihe ahụ.",
          quickCheck: [
            { objective: "O6", q: "Gịnị ka template ịhazi nkuzi otu kwesịrị inwe?", options: ["Naanị nkuzi ikpeazụ", "Prompt na ndepụta nnyocha ogo", "Ndepụta ngwa a machibidoro", "Okwuntughe ngwa AI"], answer: 1, why: "Prompt na ndepụta nnyocha na-enye ndị ọzọ ohere imegharị usoro na nlele ahụ." },
            { objective: "O6", q: "Ị chọrọ ịmata ma ịhazi nkuzi na AI na-enyere otu gị aka. Gịnị ka ị ga-edekọ?", options: ["Ole prompt onye nkuzi ọ bụla dere", "Ngwa AI kacha ọhụrụ", "Ọ dịghị ihe; jụọ otu ugboro n'afọ", "Oge e chekwara na nsogbu ogo a chọtara"], answer: 3, why: "Oge e chekwara na nsogbu ogo na-egosi ma usoro ahụ na-arụ ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Nkewa nkuzi, unit na ịhazi nkuzi n'otu",
        questions: [
          { objective: "O4", q: "Kedu otu ị ga-esi kọwaa otu ụmụ akwụkwọ na prompt?", options: ["Site n'aha", "Site n'akara ule na aha", "Site na mkpa, dị ka \"chọrọ nkwado ọzọ n'ajụjụ nwere ọtụtụ nzọụkwụ\"", "Site n'ego ezinụlọ na-enweta"], answer: 2, why: "Kọwaa mkpa n'egosighi onye ụmụ akwụkwọ ahụ bụ." },
          { objective: "O4", q: "IEP nwa akwụkwọ nwere nkwado. AI tụrụ aro nkwado dị iche. Gịnị dị ire?", options: ["A ka ga-enye nkwado IEP ahụ", "Nkwado AI na-anọchi IEP", "Ọ dịghị nke ọ bụla", "Rịọ AI ka o kpebie"], answer: 0, why: "Aro AI anaghị anọchi nkwado a chọrọ." },
          { objective: "O5", q: "Gịnị bụ ihe mbụ a ga-elele na ndepụta unit AI dere?", options: ["Ụdị mkpụrụ akwụkwọ (font)", "Ọsọ", "Aha ya", "Agba ya"], answer: 1, why: "AI na-etinyekarị ihe karịrị." },
          { objective: "O6", q: "Na PLC, gịnị kpatara ndị mmekọ ji elele atụmatụ AI nke ibe ha?", options: ["Iwulite uche ọnụ banyere ebe AI na-ehie", "Ịtụ ndị nkuzi akara", "Ịhapụ ịhazi nkuzi", "Iji AI karịa"], answer: 0, why: "Ịkparịta mperi na-ewulite uche otu." },
          { objective: "O6", q: "Onye na-aza ajụjụ maka nkuzi AI nyere aka a kụziri na klas?", options: ["Ụlọ ọrụ AI ahụ", "Ọ dịghị onye", "Ụmụ akwụkwọ", "Onye nkuzi"], answer: 3, why: "Ndị nkuzi ka bụ ndị na-aza ajụjụ maka ihe ha na-akụzi." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: AI maka Ndị Ndu Ụlọ Akwụkwọ na Agụmakwụkwọ 3: AI maka Ịhazi Nkuzi",
    questions: [
      { objective: "O1", q: "Backward design na-ahazi n'usoro dị aṅaa?", options: ["Omume, ebumnuche, ihe ngosi", "Ebumnuche, ihe ngosi, omume", "Worksheet, ule, ebumnuche", "Ihe ngosi, omume, ebumnuche"], answer: 1, why: "Bido n'ebumnuche." },
      { objective: "O1", q: "Ihe ịrịba ama ịga nke ọma na-akọwa:", options: ["Otu e si hazie ọnụ ụlọ", "Ụgwọ ọnwa onye nkuzi", "Ihe ụmụ akwụkwọ ga-egosi mgbe ha ruru ebumnuche", "Usoro oge mgbịrịgba"], answer: 2, why: "Ha na-eme ka a hụ ebumnuche anya." },
      { objective: "O1", q: "Ebumnuche \"Enwere m ike\" bụ:", options: ["Akara ule", "Okwu ịkpọsa", "Ebumnuche n'okwu ụmụ akwụkwọ ga-aghọta", "Iwu"], answer: 2, why: "Ụmụ akwụkwọ kwesịrị ịghọta ebumnuche ahụ." },
      { objective: "O1", q: "Gịnị kpatara na i kwesịghị iwere koodu standard n'aka AI?", options: ["AI nwere ike ịkọ ha n'ụzọ ezighi ezi ma ọ bụ chepụta ha", "Ha bụ ihe nzuzo", "AI anaghị ama standard mgbe ọ bụla", "Ha dị ogologo nke ukwuu"], answer: 0, why: "Jiri isi iyi gọọmentị." },
      { objective: "O2", q: "Prompt maka nkuzi zuru ezu kwesịrị inwe:", options: ["Akara ule na aha", "Aha ụmụ akwụkwọ", "Email ndị nne na nna", "Ogologo oge klas, ebumnuche, ihe ha maraworị, ngwa, akụkụ nkuzi"], answer: 3, why: "Ọnọdụ, ọ bụghị ozi nzuzo." },
      { objective: "O2", q: "Atụmatụ nkuzi AI dere kwesịrị ịbụ nke a na-ewere dị ka:", options: ["Atụmatụ ikpeazụ", "Ihe mbụ site n'aka onye ọrụ ibe na-eme ngwa ngwa mana bụ onye ọhụrụ", "Akwụkwọ iwu", "Ọrụ nwa akwụkwọ"], answer: 1, why: "Ndị nkuzi na-elele ma na-edezi ya." },
      { objective: "O2", q: "Nlele nghọta bụ:", options: ["Nzukọ ndị nne na nna", "Chekụ ụlọ akụ", "Kaadị akara ule", "Ụzọ ngwa ngwa iji hụ ma ụmụ akwụkwọ na-eso"], answer: 3, why: "Ọ na-achọpụta mgbagwoju anya n'oge." },
      { objective: "O3", q: "Kedu nke so na nnyocha nwere isi ihe ise?", options: ["Kacha ogologo", "Kacha nwee agba", "Ọ dị mma ma na-anabata onye ọ bụla", "Kacha ewu ewu"], answer: 2, why: "Ịdị mma na ịnabata onye ọ bụla so n'ogo." },
      { objective: "O3", q: "Ndakọrịta pụtara:", options: ["Ebumnuche, omume na nnwale dakọrọ", "Desk n'ahịrị", "Atụmatụ ahụ dị ogologo", "AI kwenyere"], answer: 0, why: "Ihe niile na-eje ozi n'ebumnuche." },
      { objective: "O3", q: "Gịnị kpatara i ji edekọ ihe i gbanwere n'atụmatụ AI?", options: ["Iwu chọrọ ya", "Ọ na-egosi ebe atụmatụ AI na-ehie", "Ọ na-eme ka atụmatụ ahụ dị ogologo", "Ịta AI ụta"], answer: 1, why: "Ọ na-ewulite uche ka oge na-aga." },
      { objective: "O4", q: "Nkewa nkuzi pụtara:", options: ["Ịgbanwe nkuzi ka ụmụ akwụkwọ dị iche iche ruo otu ebumnuche ahụ", "Inye akara ule dị iche iche", "Ikewa klas ruo mgbe ebighị ebi", "Iji ngwa AI dị iche iche"], answer: 0, why: "Otu ebumnuche, ụzọ dị iche iche." },
      { objective: "O4", q: "Scaffolding gụnyere:", options: ["Ntaramahụhụ (detention)", "Iwepụ nkwado niile", "Ule siri ike karị", "Ọmụmaatụ a rụchara arụcha na mmalite ahịrịokwu"], answer: 3, why: "Nkwado nwa oge na-enyere ụmụ akwụkwọ aka iru ebumnuche." },
      { objective: "O4", q: "UDL pụtara:", options: ["Unit Daily Lesson", "Universal Design for Learning", "Upper Division Level", "Unified District Login"], answer: 1, why: "Ịhazi maka ụmụ akwụkwọ dị iche iche site na mmalite." },
      { objective: "O4", q: "Ọrụ extension bụ maka ụmụ akwụkwọ:", options: ["Chọrọ nkwado ọzọ", "Na-anọghị", "Dị njikere maka ihe ịma aka karịrị", "Mechara afọ ahụ"], answer: 2, why: "Ọ na-eme ka mmụta miwanye maka ụmụ akwụkwọ dị njikere." },
      { objective: "O4", q: "Nkwado IEP na 504:", options: ["Na-abanye n'ime ngwa AI ọ bụla", "Nkwado AI nwere ike ịnọchi ha", "A ka ga-enye ha, n'agbanyeghị ihe AI tụrụ aro", "Bụ nhọrọ"], answer: 2, why: "A chọrọ ha." },
      { objective: "O5", q: "Prompt ndepụta unit kwesịrị inwe:", options: ["Standard, ọnụ ọgụgụ ụbọchị na oghere kalenda", "Aha ụmụ akwụkwọ", "Ụgwọ ọnwa ndị ọrụ", "Ọ dịghị ihe"], answer: 0, why: "Ọsọ dabere n'ezi oge dị." },
      { objective: "O5", q: "AI kacha baa uru n'ịhazi unit maka:", options: ["Ikwado ngwa", "Ikpebi akara ule", "Ide IEP", "Ichepụta echiche ezighi ezi na anchor project"], answer: 3, why: "Ichepụta echiche bụ ike ya; gị na-ekpebi ihe dabara." },
      { objective: "O6", q: "Template ịhazi nkuzi kwesịrị inwe:", options: ["Ozi ụmụ akwụkwọ", "Prompt na ndepụta nnyocha ogo", "Okwuntughe", "Ọ dịghị ihe"], answer: 1, why: "Ọ na-eme ka a nwee ike imegharị omume ọma." },
      { objective: "O6", q: "PLC pụtara:", options: ["Principal leadership council", "Public library card", "Planning lesson calendar", "Professional learning community"], answer: 3, why: "Ndị nkuzi na-emeziwanye nkuzi ọnụ." },
      { objective: "O6", q: "Iji mara ma ịhazi nkuzi na AI na-arụ ọrụ, ndị ndu kwesịrị idekọ:", options: ["Ọ dịghị ihe", "Naanị oge e chekwara", "Oge e chekwara na nsogbu ogo", "Ọnụ ọgụgụ prompt e dere"], answer: 2, why: "Ọsọ n'enweghị ogo abụghị ịga nke ọma." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  // ule mbido: ajụjụ ule ndị a, e were tupu Nkuzi 1, ka ule ikpeazụ gosi otu onye ọ bụla si mụta
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 4, 7, 8, 10, 14, 15, 17] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Ebumnuche na ihe ịrịba ama ịga nke ọma", objective: "O1", notYet: "Enweghị ebumnuche, ma ọ bụ standard ahụ esighị n'isi iyi gọọmentị.", meets: "Ebumnuche na ihe ịrịba ama ịga nke ọma site na standard e detuuru n'isi iyi gọọmentị.", exceeds: "E dere ebumnuche ahụ dị ka nkwupụta \"Enwere m ike\" doro anya nke ụmụ akwụkwọ ghọtara." },
      { name: "Nkuzi zuru ezu", objective: "O2", notYet: "Hook, omume a na-eduzi ma ọ bụ omume onwe, ma ọ bụ exit ticket adịghị.", meets: "O nwere hook, omume a na-eduzi na omume onwe, na exit ticket nwere ajụjụ atọ na azịza ha.", exceeds: "O nwere nlele nghọta ma dabara n'ogologo oge klas." },
      { name: "Otu atọ", objective: "O4", notYet: "Nkwado maka otu ma ọ bụ karịa adịghị.", meets: "Nkwado maka chọrọ nkwado ọzọ, nọ n'ọkwa na dị njikere maka ihe karịrị.", exceeds: "Ọ na-ekwu nkwado IEP ma ọ bụ 504 ndị a ka ga-ahazi na onye ọrụ ibe na-akụzi special education." },
      { name: "E lelere ogo", objective: "O3", notYet: "E leleghị ya, ma ọ bụ e dekọghị mgbanwe.", meets: "E jiri ndepụta nnyocha nwere isi ihe ise lelee ya, e dekọkwara mgbanwe ọ bụla na ihe kpatara ya.", exceeds: "Ndekọ ahụ na-egosi usoro ebe atụmatụ AI hiere." },
      { name: "Template otu", objective: "O6", notYet: "E chekwaghị prompt, ma ọ bụ enweghị ndepụta nnyocha.", meets: "E chekwara prompt na ndepụta nnyocha dị ka template maka otu ahụ.", exceeds: "Onye ọrụ ibe ejirila template ahụ maka nkuzi nke ya." }
    ]
  },
  evaluation: {
    results: [
      "Ndị nkuzi na ndị ndu mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Otu ndị na-eji template ịhazi nkuzi ọnụ n'ime ụbọchị 30 (nnyocha nsochi)",
      "Ndị nkuzi kwuru na ha chekwara oge ịhazi nkuzi n'agbadaghị ogo nkuzi (nnyocha nsochi)",
      "Ndị ndu gara n'ihu n'ihe ọmụmụ 4 nke AI maka Ndị Ndu Ụlọ Akwụkwọ na Agụmakwụkwọ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa nwere ịntanetị na ngwa enyemaka AI, ka mma ma ọ bụrụ nke district kwadoro",
      "Standard na-abịa e detuuru site n'isi iyi gọọmentị steeti ma ọ bụ district",
      "Nkọwa klas e chepụtara echepụta",
      "Ndepụta nnyocha ogo nwere isi ihe ise",
      "Ihe dị ka nkeji 60 n'ozuzu: nkuzi, omume, nnwale na ọrụ ikpeazụ"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee hazie otu nkuzi dị ka otu tupu ndị nkuzi ahazie nke ha.",
      "Jiri naanị nkọwa klas e chepụtara echepụta; ọ dịghị mgbe ezi aha ụmụ akwụkwọ, ozi IEP ma ọ bụ 504 ma ọ bụ akara ule.",
      "Na PLC, mee ka ndị mmekọ jiri ndepụta nnyocha nwere isi ihe ise lelee atụmatụ AI nke ibe ha.",
      "Kpọọ onye ọrụ ibe na-akụzi special education ka ọ bịa nnọkọ nkewa nkuzi.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma rịọ maka ndekọ mgbanwe dị ka ihe akaebe."
    ]
  }
};
