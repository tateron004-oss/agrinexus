"use strict";

// Koach Learn course (Igbo translation of shared/agile-project-management.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "agile-project-management-ig",
  lang: "ig",
  translationOf: "agile-project-management",
  category: "Veterans (military)",
  name: "Ijikwa Ọrụ n'Ụzọ Agile",
  skills: "Ide user stories, Iwu backlog, Ịhazi sprint, Iji bọọdụ ọrụ, Ime nyocha na retrospective",
  outcome: "ijikwa obere ọrụ n'ụzọ Agile: ime ka ọrụ ahụ bụrụ backlog nke user stories a hazịrị n'usoro mkpa, ịhazi sprint nke otu izu ma ọ bụ izu abụọ, iso ya na bọọdụ ọrụ, ma mechie ya site na nyocha (review) na retrospective.",
  about: [
    "Agile bụ ụzọ isi arụ ọrụ (project) n'obere oge nkenke, na-elele ihe ọ rụpụtara ugboro ugboro, na-agbanwekwa ụzọ mgbe ị mụtara ihe ọhụrụ. Ọtụtụ ndị were mmadụ n'ọrụ na teknụzụ, gọọmentị, ahụike na ibu ngwongwo na-eji ya, ọtụtụ mgbasa ọkwa ọrụ na-ajụkwa maka ya.",
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-edu otu ma ọ bụ na-arụ ọrụ n'otu: ndị agha mbụ (veterans) na-abanye n'ọrụ ndị nkịtị, ndị ọrụ na-achọ ọrụ onye nhazi (coordinator) ma ọ bụ onye nyocha (analyst), na ndị na-arụ ọrụ n'ebe ọrụ, n'ụka ma ọ bụ n'obodo. Omume nhazi ndị agha dị ka mission brief na after-action review dabara nke ọma na Agile.",
    "Ị ga-eme omume n'otu ezi obere ọrụ nke gị site na nkuzi mbụ ruo nke ikpeazụ. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise, na-ejedebe n'ọrụ \"Nwalee ya ugbu a\". E nwere nnwale ihe ọmụma mgbe isi ọ bụla gwụrụ, na ule nwere ajụjụ 20 na njedebe."
  ],
  finalTask: "Họrọ ezi ọrụ nke ga-ewe izu abụọ ruo izu isii (dịka ọmụmaatụ ịkwado résumé na ịchọ ọrụ, mmemme obodo ma ọ bụ obere weebụsaịtị). Wuo backlog nwere opekata mpe user stories asatọ n'usoro mkpa, hazie sprint nke otu izu nwere sprint goal, jiri bọọdụ ọrụ n'efu mee ya, ma mechie ya site na sprint review e dere ede na retrospective na-akpọ otu ihe ị ga-aga n'ihu ime, otu ihe ị ga-akwụsị na otu ihe ị ga-anwale.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị agha mbụ (veterans) na ndị agha na-ahapụ ọrụ agha na-abanye n'ọrụ ndị nkịtị dị ka onye nhazi ọrụ (project coordinator), ọrụ nlekọta (operations), IT ma ọ bụ ijikwa mmemme. Ọtụtụ n'ime ha duru otu, mere mission, ma mee after-action review n'ime ndị agha.",
    startingPoint: "Ha maara ime atụmatụ, ịkọwa ọrụ (briefing), usoro ọrụ onye ọ bụla na after-action review. Ọtụtụ n'ime ha ejibeghị okwu Agile, user stories ma ọ bụ bọọdụ ọrụ dijitalụ.",
    gap: "Ọtụtụ ndị were mmadụ n'ọrụ na-arụ ọrụ n'ụzọ Agile ma na-ajụ maka ahụmahụ Scrum ma ọ bụ Kanban na mgbasa ọkwa ọrụ. Ndị na-amụ ihe kwesịrị igosi na ha nwere ike ijikwa obere ọrụ na sprint site n'iji okwu ndị nkịtị, ma jikọta ya na nka idu ndú ha nweburu, ka ha nwee ike ịsọ mpi maka ọrụ ndị a.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe; a na-akọwa okwu Agile na nke mbụ a hụrụ ya",
      "Ngwaọrụ: ekwentị ma ọ bụ kọmputa maka ngwa bọọdụ n'efu, ma ọ bụ mpempe akwụkwọ nrapado (sticky notes) na mgbidi",
      "Oge: nkuzi nkeji 5, gbakwunyere sprint nke otu izu maka ọrụ ikpeazụ",
      "Ụgwọ na ihe a chọrọ maka asambodo (certification) na-agbanwe; ndị na-amụ ihe na-elele weebụsaịtị ụlọ ọrụ na-enye asambodo ahụ",
      "Etinyela ozi nzuzo ma ọ bụ ozi nzuzo agha n'ọrụ omume ma ọ bụ na prompt AI"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị nkọwa otu ọrụ", action: "ịkọwa otu Agile si arụ ọrụ n'obere oge nkenke na mgbe waterfall dabara karịa", standard: "n'okwu nke gị, ya na otu ọmụmaatụ nke ọ bụla" },
    { id: "O2", condition: "Mgbe e nyere gị obere otu Scrum", action: "ịkpọ aha ọrụ atọ ndị Scrum, mmemme ise na ihe atọ (artifacts)", standard: "ma nweta opekata mpe 9 n'ime 11 ziri ezi" },
    { id: "O3", condition: "Maka ezi ọrụ nke izu abụọ ruo izu isii", action: "ide backlog nwere opekata mpe user stories asatọ nwere acceptance criteria, n'usoro mkpa", standard: "ebe story ọ bụla na-agbaso usoro \"As a..., I want... so that...\"" },
    { id: "O4", condition: "Mgbe e nyere gị backlog gị na awa ị nwere n'ezie", action: "ịhazi sprint nke otu izu nwere sprint goal nke otu ahịrịokwu na ọrụ ndị na-ewe otu ụbọchị ma ọ bụ obere", standard: "nke mere na ọrụ a hazịrị dabara n'oge ị nwere" },
    { id: "O5", condition: "N'oge sprint gị", action: "iso ọrụ ahụ na bọọdụ ọrụ nwere WIP limit na nzukọ nkeji 15 kwa ụbọchị", standard: "na-ebugharị kaadị ọ bụla ka ọrụ na-aga" },
    { id: "O6", condition: "Na njedebe sprint gị", action: "ime sprint review na retrospective Keep, Stop, Try ma tinye otu mmezi na sprint na-esote", standard: "ya na ndụmọdụ e dere n'ime backlog" }
  ],
  chapters: [
    {
      name: "Isi 1: Ime atụmatụ n'ụzọ Agile",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ihe Agile bụ, na otu o si dị iche na nnukwu atụmatụ",
          minutes: 4,
          goal: "Kọwaa n'okwu nke gị otu Agile si arụ ọrụ n'obere oge nkenke.",
          text: [
            "N'ọrụ ochie ma ọ bụ \"waterfall\", ị na-ebu ụzọ hazie ihe niile, wee wuo ya, wee nwalee ya, wee nyefee ya na njedebe. Nke a na-arụ ọrụ mgbe a maara ọrụ ahụ nke ọma, dị ka ịwụ ntọala ụlọ. Ọ naghị arụ ọrụ mgbe ihe a chọrọ gbanwere n'etiti.",
            "Agile na-enyefe ihe n'obere oge nkenke, ọtụtụ mgbe otu izu ruo izu anọ. Oge ọ bụla na-arụpụta ihe a pụrụ iji, otu ahụ na-egosi ya ndị e mere ya maka ha, a na-agbanwekwa atụmatụ dabere n'ihe ha kwuru. Agile Manifesto (2001) kwuru ya n'ụzọ dị mfe: ihe na-arụ ọrụ na ịnabata mgbanwe dị mkpa karịa ịgbaso atụmatụ a kpọchiri akpọchi.",
            "Scrum na Kanban bụ ụzọ abụọ a na-ejikarị eme Agile. Scrum na-eji oge ogologo ya kwụ ọtọ a na-akpọ sprint. Kanban na-eji bọọdụ na ọrụ na-aga n'ihu nwayọọ nwayọọ, ya na oke n'ọnụ ọgụgụ ọrụ na-aga n'otu oge. Ị nwere ike iji echiche sitere n'ha abụọ."
          ],
          words: [["Agile", "ụzọ isi arụ ọrụ n'obere oge nkenke, na-elele ma na-agbanwe ihe ugboro ugboro."], ["Waterfall", "ụzọ isi arụ ọrụ ebe a na-emecha otu akụkụ tupu nke ọzọ amalite."], ["Scrum", "ụzọ Agile na-arụ ọrụ n'oge ogologo ya kwụ ọtọ a na-akpọ sprint."], ["Kanban", "ụzọ Agile na-eji bọọdụ ma na-egbochi ọrụ ole na-aga n'otu oge."]],
          slides: [
            { title: "Waterfall na Agile", bullets: ["Waterfall: hazie ihe niile, wuo ihe niile, nyefee na njedebe", "Agile: nyefee ihe a pụrụ iji kwa izu ole na ole", "Agile na-agbanwe atụmatụ ka ị na-amụta ihe"] },
            { title: "Ihe mere ndị otu ji eji Agile", bullets: ["Ihe a chọrọ na-agbanwe n'etiti ọrụ", "Nsogbu na-apụta n'oge, ọ bụghị na njedebe", "Ndị ị na-ejere ozi na-ahụ ọganihu ugboro ugboro"] },
            { title: "Ụzọ abụọ a na-ejikarị", bullets: ["Scrum: sprint nwere oge kwụ ọtọ, otu ọnwa ma ọ bụ obere", "Kanban: bọọdụ na oke n'ọrụ na-aga"] }
          ],
          sources: [{ name: "Manifesto for Agile Software Development (n'asụsụ bekee)", url: "https://agilemanifesto.org/" }, { name: "The Scrum Guide (2020) (n'asụsụ bekee)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Họrọ otu ezi ọrụ ị chọrọ imecha n'ime izu abụọ ruo izu isii na-abịa. Dee otu ahịrịokwu na-akọwa ya na otu ahịrịokwu banyere ndị ọ bụ maka ha.",
          youCanNow: "ịkọwa otu Agile si dị iche na nnukwu atụmatụ e mere na mbido, ma kpọọ aha Scrum na Kanban.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ Kanban?", options: ["Atụmatụ izu anọ a kpọchiri akpọchi", "Ụdị user story", "Ule asambodo", "Ụzọ isi eme Agile site na bọọdụ na oke n'ọrụ na-aga"], answer: 3, why: "Kanban na-eji bọọdụ na ọrụ na-aga n'ihu nwayọọ, ya na oke n'ọnụ ọgụgụ ọrụ na-aga n'otu oge." },
            { objective: "O1", q: "Otu ndị agha mbụ gị na-ewu weebụsaịtị ọhụrụ, ndị otu na-agbanwekwa ihe ha chọrọ mgbe niile. Kedu ụzọ dabara?", options: ["Waterfall: hazie ihe niile na mbido ma nyefee na njedebe", "Agile: nyefee n'obere oge nkenke ma gbanwee mgbe nke ọ bụla gwụrụ", "Enweghị atụmatụ ọ bụla", "Chere ruo mgbe onye ọ bụla kwenyere n'ihe niile"], answer: 1, why: "Agile dabara ọrụ ebe ihe a chọrọ na-agbanwe, n'ihi na a na-egosi oge ọ bụla ma gbanwee atụmatụ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Ọrụ, mmemme na ihe (artifacts) Scrum",
          minutes: 5,
          goal: "Kpọọ aha onye na-eme gịnị na Scrum na mmemme ise sprint na-eji.",
          text: [
            "The Scrum Guide (nke 2020) kpọrọ aha ọrụ atọ (accountabilities). Product Owner na-ekpebi ihe kacha mkpa ma na-edebe ndepụta ọrụ n'usoro. Developers bụ ndị na-arụ ọrụ ahụ, ụdị ọrụ ọ bụla, ọ bụghị naanị software. Scrum Master na-enyere otu ahụ aka ịgbaso Scrum ma na-ewepụ ihe mgbochi.",
            "E nwere mmemme ise. Sprint bụ igbe na-ejide ihe niile, otu ọnwa ma ọ bụ obere. Sprint Planning na-ekpebi sprint goal ma họrọ ọrụ. Daily Scrum bụ nlele nkeji 15 maka ọganihu gaa n'ebumnuche ahụ. Sprint Review na-egosi ihe a rụpụtara nye ndị e mere ya maka ha. Sprint Retrospective na-ele otu otu ahụ si rụọ ọrụ ma họrọ mmezi.",
            "E nwere ihe atọ (artifacts): Product Backlog (ọrụ niile, n'usoro), Sprint Backlog (ọrụ a họọrọ maka sprint a) na Increment (ihe a pụrụ iji a rụpụtara). N'obere ọrụ, otu onye nwere ike ijide ihe karịrị otu ọrụ. Nke ahụ dị mma ma ọ bụrụhaala na e mere ọrụ ọ bụla."
          ],
          words: [["Product Owner", "onye na-ekpebi ọrụ kacha mkpa ma na-ahazi backlog n'usoro."], ["Scrum Master", "onye na-enyere otu aka iji Scrum nke ọma ma na-ewepụ ihe mgbochi."], ["Increment", "ihe a pụrụ iji nke sprint rụpụtara."], ["Retrospective", "nzukọ na njedebe sprint banyere otu otu ahụ si rụọ ọrụ; ọ yiri after-action review."]],
          slides: [
            { title: "Ọrụ atọ", bullets: ["Product Owner: ihe kacha mkpa", "Developers: na-arụ ọrụ ahụ", "Scrum Master: na-enyere otu aka ma na-ewepụ ihe mgbochi"] },
            { title: "Mmemme ise", bullets: ["Sprint: otu ọnwa ma ọ bụ obere", "Sprint Planning na Daily Scrum (nkeji 15)", "Sprint Review na Sprint Retrospective"] },
            { title: "Ihe atọ (artifacts)", bullets: ["Product Backlog: ọrụ niile, n'usoro", "Sprint Backlog: ọrụ maka sprint a", "Increment: ihe a pụrụ iji a rụpụtara"] }
          ],
          sources: [{ name: "The Scrum Guide (2020) (n'asụsụ bekee)", url: "https://scrumguides.org/scrum-guide.html" }],
          tryIt: "Maka ọrụ gị, dee onye ga-abụ Product Owner, Scrum Master na Developers. Ọ bụrụ na ọ bụ naanị gị, dee okpu ị ga-eyi na mmemme ọ bụla.",
          youCanNow: "ịkpọ aha ọrụ atọ Scrum, mmemme ise na ihe atọ (artifacts), ma kenye ha n'ọrụ gị.",
          quickCheck: [
            { objective: "O2", q: "Gịnị bụ Increment na Scrum?", options: ["Ihe a pụrụ iji nke sprint rụpụtara", "Ndepụta ọrụ niile", "Nzukọ kwa ụbọchị", "Akụkọ Scrum Master"], answer: 0, why: "Increment bụ ihe a pụrụ iji a rụpụtara; Product Backlog bụ ndepụta ọrụ niile." },
            { objective: "O2", q: "Ọ bụ naanị gị nọ n'obere ọrụ. Gịnị ka ị ga-eme banyere ọrụ Scrum?", options: ["Kwụsị, n'ihi na Scrum chọrọ opekata mpe mmadụ atọ", "Buru ụzọ were Scrum Master n'ọrụ", "Jide ihe karịrị otu ọrụ ma hụ na e mere ọrụ ọ bụla", "Hapụ ọrụ Product Owner"], answer: 2, why: "N'obere ọrụ, otu onye nwere ike ijide ihe karịrị otu ọrụ, ma ọ bụrụhaala na e mere ọrụ ọ bụla." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Ide user stories na iwu backlog",
          minutes: 6,
          goal: "Mee ka ọrụ bụrụ backlog nke user stories n'usoro mkpa, nwere njedebe doro anya.",
          text: [
            "User story na-akọwa otu akụkụ ọrụ site n'anya onye ọ na-enyere aka: \"As a [ụdị mmadụ], I want [ihe] so that [ihe kpatara ya].\" N'Igbo: \"Dị ka [ụdị mmadụ], achọrọ m [ihe] ka [ihe kpatara ya].\" Ọmụmaatụ: \"Dị ka onye na-ewe mmadụ n'ọrụ, achọrọ m résumé nwere otu peeji ka m hụ nka onye ahụ ngwa ngwa.\"",
            "Story ọ bụla chọrọ acceptance criteria: nlele abụọ ma ọ bụ atọ na-ekwu mgbe e mechara ya. Maka story résumé: ọ dabara n'otu peeji, o nwere ihe atọ a rụpụtara nke a pụrụ ịtụ, o nweghị mperi nsụpe. Njedebe doro anya na-egbochi esemokwu n'ikpeazụ.",
            "Hazie stories n'usoro: nke kacha baa uru na nke kacha ngwa n'elu. Ngwa enyemaka AI dị ka ChatGPT, Microsoft Copilot ma ọ bụ Google Gemini nwere ike inyere gị aka ide stories mbụ site na nkọwa ọrụ, mana gị na-ekpebi usoro ma lelee na story ọ bụla bụ ezi ọrụ."
          ],
          steps: ["Depụta ihe niile ọrụ ahụ chọrọ, otu ihe n'otu ahịrị.", "Degharịa ihe ọ bụla dị ka \"As a..., I want... so that...\".", "Tinye acceptance criteria abụọ ma ọ bụ atọ na nke ọ bụla.", "Kewaa story ọ bụla buru oke ibu imecha n'otu sprint.", "Hazie stories n'usoro mkpa, site n'elu ruo ala."],
          words: [["User story", "nkọwa dị mkpụmkpụ nke ọrụ site n'anya onye ọ na-enyere aka."], ["Acceptance criteria", "nlele ndị na-ekwu na e mechara story."], ["Backlog", "ndepụta ọrụ niile maka ọrụ ahụ, n'usoro."]],
          slides: [
            { title: "Usoro user story", bullets: ["As a [ụdị mmadụ] (Dị ka...)", "I want [ihe] (achọrọ m...)", "so that [ihe kpatara ya] (ka...)"] },
            { title: "Acceptance criteria", bullets: ["Nlele abụọ ma ọ bụ atọ pụtara \"emechaala\"", "Ọmụmaatụ: otu peeji, ihe atọ a rụpụtara, enweghị mperi nsụpe"] },
            { title: "Ịhazi backlog n'usoro", bullets: ["Nke kacha baa uru na nke kacha ngwa n'elu", "Kewaa stories buru oke ibu maka otu sprint", "AI nwere ike ide nke mbụ; gị na-ekpebi usoro"] }
          ],
          tryIt: "Dee opekata mpe user stories asatọ maka ọrụ gị, nke ọ bụla nwere acceptance criteria, ma hazie ha n'usoro mkpa. Ị nwere ike ịjụ ngwa enyemaka AI: \"Turn this project into user stories with acceptance criteria\" wee dozie ihe ọ dere.",
          youCanNow: "ide user stories nwere acceptance criteria ma hazie ha ka ha bụrụ backlog.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka akụkụ \"so that\" (ka...) nke user story na-enye?", options: ["Ụbọchị njedebe", "Onye na-arụ ọrụ ahụ", "Ihe mere ọrụ ahụ ji dị mkpa", "Ọnụ ahịa"], answer: 2, why: "\"So that\" na-ekwu ihe kpatara ya ma ọ bụ uru ọ ga-abara onye story ahụ na-enyere aka." },
            { objective: "O3", q: "Ngwa enyemaka AI dere stories maka mmemme obodo gị. Otu bụ \"Hazie mmemme ahụ dum\". Gịnị ka ị ga-eme?", options: ["Kewaa ya ka ọ bụrụ obere stories ga-adaba n'otu sprint", "Mee ka ọ bụrụ story kacha elu", "Hichapụ stories niile AI dere", "Tinye ya na sprint ọ bụla"], answer: 0, why: "Story buru oke ibu maka otu sprint kwesịrị ka e kewaa ya n'obere akụkụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ime atụmatụ n'ụzọ Agile",
        questions: [
          { objective: "O1", q: "Gịnị bụ isi ihe dị iche n'etiti Agile na waterfall?", options: ["Agile enweghị atụmatụ ọ bụla", "Agile na-enyefe n'obere oge nkenke ma na-agbanwe ka ọ na-amụta ihe", "Waterfall na-eji sprint", "Agile na-arụ ọrụ naanị maka software"], answer: 1, why: "Agile na-arụ ọrụ n'obere oge nkenke, nke ọ bụla na-enyefe ihe, wee gbanwee atụmatụ." },
          { objective: "O2", q: "Dị ka The Scrum Guide si kwuo, ogologo oge ole ka sprint nwere ike ịdị?", options: ["Otu ọnwa ma ọ bụ obere", "Ogologo ọ bụla onyeisi chọrọ", "Otu afọ", "Ọnwa isii kpọmkwem"], answer: 0, why: "The Scrum Guide kwuru na sprint bụ otu ọnwa ma ọ bụ obere." },
          { objective: "O2", q: "Onye na-ekpebi ọrụ kacha mkpa ma na-edebe backlog n'usoro?", options: ["Onye ọ bụla buru ụzọ mechaa", "Scrum Master", "Ọka iwu onye ahịa", "Product Owner"], answer: 3, why: "Product Owner na-ahazi Product Backlog n'usoro." },
          { objective: "O3", q: "Kedu nke bụ user story e dere nke ọma?", options: ["\"Résumé\"", "\"Dozie ihe\"", "\"Dị ka onye na-ewe mmadụ n'ọrụ, achọrọ m résumé nwere otu peeji ka m hụ nka ngwa ngwa\"", "\"Mee ihe niile tupu Fraịde\""], answer: 2, why: "Ọ na-akpọ aha onye ahụ, ihe ọ chọrọ na ihe kpatara ya." },
          { objective: "O3", q: "Story buru oke ibu imecha n'otu sprint. Gịnị ka ị ga-eme?", options: ["Mee ka sprint ahụ dị ogologo otu afọ", "Hichapụ ya", "Kewaa ya ka ọ bụrụ obere stories", "Hapụ acceptance criteria"], answer: 2, why: "A na-ekewa nnukwu stories ka e nwee ike imecha akụkụ ọ bụla n'otu sprint." }
        ]
      }
    },
    {
      name: "Isi 2: Ịrụ sprint",
      lessons: [
        {
          objectives: ["O4"],
          title: "Ịhazi sprint nwere ebumnuche doro anya",
          minutes: 5,
          goal: "Hazie sprint nke otu izu ma ọ bụ izu abụọ nwere sprint goal na ọrụ ruru eru.",
          text: [
            "Sprint Planning na-aza ajụjụ atọ: gịnị mere sprint a ji baa uru (sprint goal), gịnị ka a pụrụ ime (stories ndị e họọrọ), na olee otu a ga-esi mee ya (ọrụ ndị ahụ).",
            "Sprint goal bụ otu ahịrịokwu, dị ka commander's intent (ebumnuche ọchịagha): \"Tupu Fraịde, aga m enwe résumé m mechara na arịrịọ ọrụ ise e zipụrụ, nke ọ bụla dabara n'ọrụ ya.\" Ọ bụrụ na atụmatụ agbanwee n'etiti, ebumnuche ahụ na-agwa onye ọ bụla ihe ka dị mkpa.",
            "Were stories site n'elu backlog ruo mgbe oge otu ahụ jupụtara, ma hapụ ohere ntakịrị. Otu ọhụrụ fọrọ nke nta ka ha na-ahazi ọrụ karịrị akarị mgbe niile. Kewaa story ọ bụla ka ọ bụrụ ọrụ ndị na-ewe otu ụbọchị ma ọ bụ obere."
          ],
          steps: ["Kpebie ogologo sprint (otu izu ma ọ bụ izu abụọ dị mma maka ndị mbido).", "Dee sprint goal nke otu ahịrịokwu.", "Were stories site n'elu backlog nke na-enyere ebumnuche ahụ aka.", "Kewaa story ọ bụla ka ọ bụrụ ọrụ ndị na-ewe otu ụbọchị ma ọ bụ obere.", "Tụnyere ngụkọta ya na awa ị nwere n'ezie, ma belata ma ọ dị mkpa."],
          words: [["Sprint goal", "otu ahịrịokwu na-ekwu ihe sprint ahụ chọrọ imezu."], ["Capacity", "oge ole otu ahụ nwere n'ezie n'oge sprint."]],
          slides: [
            { title: "Sprint Planning na-aza", bullets: ["Gịnị mere: sprint goal", "Gịnị: stories ndị e họọrọ", "Olee otu: ọrụ ndị ahụ"] },
            { title: "Sprint goal dị mma", bullets: ["Otu ahịrịokwu, dị ka commander's intent", "Ọ na-ekwu ihe ka dị mkpa ma atụmatụ agbanwee"] },
            { title: "Etinyela ọrụ karịrị akarị", bullets: ["Were site n'elu backlog", "Ọrụ na-ewe otu ụbọchị ma ọ bụ obere", "Hapụ ohere: otu ọhụrụ na-ahazi ọrụ karịrị akarị"] }
          ],
          tryIt: "Hazie sprint nke otu izu maka ọrụ gị: dee sprint goal, họrọ stories, kewaa ha ka ha bụrụ ọrụ, ma tụnyere ha na awa ị nwere n'ezie n'izu a.",
          youCanNow: "ịhazi sprint nwere ebumnuche, stories e họọrọ na ọrụ dabara n'ezi oge gị.",
          quickCheck: [
            { objective: "O4", q: "Ogologo oge ole ka ọrụ dị na atụmatụ sprint kwesịrị iwe?", options: ["Sprint dum", "Otu ụbọchị ma ọ bụ obere", "Opekata mpe otu izu", "Otu ọnwa"], answer: 1, why: "Ịkewa stories ka ha bụrụ ọrụ na-ewe otu ụbọchị ma ọ bụ obere na-eme ka ọ dị mfe iso ọganihu." },
            { objective: "O4", q: "N'etiti sprint, atụmatụ gbanwere. Gịnị na-agwa otu ahụ ihe ka dị mkpa?", options: ["Kaadị kacha ochie na bọọdụ", "Onye ọ bụla na-ekwu okwu kacha ike", "Retrospective nke afọ gara aga", "Sprint goal"], answer: 3, why: "Dị ka commander's intent, sprint goal na-ekwu ihe ka dị mkpa mgbe atụmatụ gbanwere." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịrụ ọrụ na bọọdụ ọrụ",
          minutes: 5,
          goal: "Hazie bọọdụ ọrụ ma jiri nzukọ kwa ụbọchị mee ka ọrụ na-aga n'ihu.",
          text: [
            "Bọọdụ ọrụ (task board) na-egosi ọrụ n'ogidi: To Do (ime), In Progress (na-aga) na Done (emechaala). Ọrụ ọ bụla bụ kaadị na-aga n'aka nri ka ọrụ na-aga. Ị nwere ike iji mpempe akwụkwọ nrapado na mgbidi, spreadsheet, ma ọ bụ ngwa bọọdụ n'efu dị ka Trello, Microsoft Planner ma ọ bụ GitHub Projects.",
            "Kanban na-agbakwunye oke n'ọrụ na-aga (WIP limit): dịka ọmụmaatụ, kaadị abụọ n'ime In Progress n'otu onye, ọ gaghị agafe ya. Imecha ọrụ ka mma karịa ịmalite ọrụ ọhụrụ.",
            "Daily Scrum bụ nkeji 15. Onye ọ bụla na-akọ ọganihu ya gaa na sprint goal, ihe na-esote, na ihe ọ bụla na-egbochi ya. A na-edozi ihe mgbochi mgbe nzukọ ahụ gwụrụ, ọ bụghị n'oge ya."
          ],
          steps: ["Mee ogidi atọ: To Do, In Progress, Done.", "Tinye otu kaadị maka ọrụ ọ bụla dị na atụmatụ sprint gị.", "Debe WIP limit, dị ka kaadị abụọ n'ime In Progress.", "Kwa ụbọchị, bugharịa kaadị ma mee nzukọ nkeji 15.", "Dee ihe mgbochi na onye ga-ewepụ ha."],
          words: [["Bọọdụ ọrụ (task board)", "bọọdụ nwere ogidi na-egosi ebe ọrụ ọ bụla dị."], ["WIP limit", "oke n'ọnụ ọgụgụ ọrụ nwere ike ịga n'otu oge (WIP: work in progress)."], ["Ihe mgbochi (blocker)", "ihe ọ bụla na-egbochi ọrụ ịga n'ihu."]],
          slides: [
            { title: "Bọọdụ ọrụ dị mfe", bullets: ["To Do, In Progress, Done", "Otu kaadị maka ọrụ ọ bụla", "Mpempe akwụkwọ nrapado, spreadsheet ma ọ bụ ngwa bọọdụ n'efu"] },
            { title: "Gbochie ọrụ na-aga n'otu oge", bullets: ["Dịka ọmụmaatụ: kaadị abụọ n'otu onye", "Mechaa ọrụ tupu ịmalite ọrụ ọhụrụ"] },
            { title: "Daily Scrum nkeji 15", bullets: ["Ọganihu gaa na sprint goal", "Ihe na-esote", "Ihe mgbochi: dozie ha mgbe nzukọ gwụrụ"] }
          ],
          tryIt: "Wuo bọọdụ ọrụ maka sprint gị nwere ogidi atọ na otu kaadị maka ọrụ ọ bụla. Debe WIP limit. N'ime ụbọchị atọ na-abịa, bugharịa kaadị ma dee nzukọ kwa ụbọchị n'ahịrị abụọ.",
          youCanNow: "ịrụ sprint na bọọdụ ọrụ nwere WIP limit na nzukọ dị mkpụmkpụ kwa ụbọchị.",
          quickCheck: [
            { objective: "O5", q: "Kedu ihe atọ onye ọ bụla na-akọ na Daily Scrum?", options: ["Ụgwọ ọnwa ya, ọkwa ya na awa ya", "Nkọwa niile nke ọrụ ọ bụla", "Echiche ya banyere Product Owner", "Ọganihu gaa n'ebumnuche, ihe na-esote na ihe mgbochi ọ bụla"], answer: 3, why: "Daily Scrum bụ nlele dị mkpụmkpụ maka ọganihu gaa na sprint goal, ihe na-esote na ihe mgbochi." },
            { objective: "O5", q: "I mechara otu ọrụ. Gịnị ka ị ga-eme kaadị ya?", options: ["Hapụ ya n'In Progress", "Bugharịa ya gaa Done", "Tụfuo ya tupu onye ọ bụla ahụ ya", "Bughachi ya na To Do"], answer: 1, why: "Kaadị na-aga n'aka nri ka ọrụ na-aga, ya mere ọrụ e mechara na-aga Done." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Imechi sprint: nyocha na retrospective",
          minutes: 5,
          goal: "Mee sprint review na retrospective ma mee ka ha bụrụ otu mgbanwe maka sprint na-esote.",
          text: [
            "Sprint Review na-egosi ọrụ e mechara nye ndị e mere ya maka ha ma jụọ ihe ha chere. Gosi naanị ọrụ ruru acceptance criteria ya. Ndụmọdụ ha na-alaghachi n'ime backlog.",
            "Sprint Retrospective bụ maka otu i si rụọ ọrụ, ọ bụghị ihe i wuru. Ọ na-arụ ọrụ dị ka after-action review: ihe kwesịrị ime, ihe mere, ihe kpatara ya, na ihe a ga-eme n'ụzọ dị iche. Usoro dị mfe bụ Keep, Stop, Try (Gaa n'ihu, Kwụsị, Nwalee).",
            "Họrọ otu mmezi ma tinye ya na sprint na-esote dị ka ezi ọrụ. Retrospective na-adịghị agbanwe ihe ọ bụla bụ naanị nzukọ. Asambodo Agile, dị ka Certified ScrumMaster site na Scrum Alliance ma ọ bụ Professional Scrum Master site na Scrum.org, nwere ike ịbịa mgbe e mesịrị; lelee weebụsaịtị ha maka ihe a chọrọ na ụgwọ ugbu a."
          ],
          steps: ["Depụta ihe e mechara nke ruru acceptance criteria ya.", "Gosi ya ndị e mere ya maka ha ma dee ndụmọdụ ha.", "Tinye ndụmọdụ ahụ n'ime backlog.", "Mee retrospective Keep / Stop / Try.", "Tinye otu mmezi na sprint na-esote."],
          words: [["Sprint Review", "nzukọ iji gosi ọrụ e mechara ma nweta ndụmọdụ."], ["After-action review", "nnyocha ndị agha mgbe ọrụ gwụrụ: ihe a hazịrị, ihe mere na ihe a ga-agbanwe."], ["Keep / Stop / Try", "usoro retrospective dị mfe: gaa n'ihu, kwụsị, nwalee."]],
          slides: [
            { title: "Sprint Review", bullets: ["Gosi naanị ọrụ e mechara", "Jụọ ndị e mere ya maka ha", "Ndụmọdụ na-abanye n'ime backlog"] },
            { title: "Retrospective = after-action review", bullets: ["Banyere otu i si rụọ ọrụ", "Keep, Stop, Try"] },
            { title: "Mee ka ọ baa uru", bullets: ["Họrọ otu mmezi", "Tinye ya na sprint na-esote dị ka ọrụ"] }
          ],
          sources: [{ name: "Scrum Alliance: Certified ScrumMaster (n'asụsụ bekee)", url: "https://www.scrumalliance.org/get-certified/scrum-master-track/certified-scrummaster" }, { name: "Ule Scrum.org (n'asụsụ bekee)", url: "https://www.scrum.org/assessments" }],
          tryIt: "Ọrụ ikpeazụ: mechaa sprint gị nke otu izu. Dee sprint review dị mkpụmkpụ (ihe e mechara, onye hụrụ ya, ihe ha kwuru) na retrospective Keep / Stop / Try, wee tinye otu mmezi na sprint na-esote.",
          youCanNow: "imechi sprint site na nyocha na retrospective ma buru otu mmezi banye na sprint na-esote.",
          quickCheck: [
            { objective: "O6", q: "Retrospective kacha yie omume ndị agha ole?", options: ["After-action review", "Emume mgbanwe ọchịchị (change of command)", "Arịrịọ ngwongwo", "Nlele uwe agha"], answer: 0, why: "Dị ka after-action review, ọ na-ajụ ihe a hazịrị, ihe mere, ihe kpatara ya, na ihe a ga-agbanwe." },
            { objective: "O6", q: "Otu gị depụtara ihe ise a ga-anwale na sprint na-esote. Gịnị na-eme ka retrospective ahụ baa uru?", options: ["Nwalee ha ise n'otu oge", "Dee ha ma chefuo ha", "Họrọ otu ma tinye ya na sprint na-esote dị ka ezi ọrụ", "Mee nzukọ ọzọ iji kparịta ha"], answer: 2, why: "Otu mmezi e mere ka ọ bụrụ ezi ọrụ bụ ihe na-agbanwe otu otu ahụ si arụ ọrụ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: Ịrụ sprint",
        questions: [
          { objective: "O4", q: "Gịnị bụ sprint goal?", options: ["Ndepụta ọrụ niile", "Ụgwọ ọnwa otu ahụ", "Otu ahịrịokwu na-ekwu ihe sprint kwesịrị imezu", "Ụbọchị njedebe maka ọrụ dum"], answer: 2, why: "Sprint goal bụ ebumnuche nke otu ahịrịokwu na-eduzi nhọrọ n'oge sprint." },
          { objective: "O4", q: "Otu gị hazịrị awa 60 nke ọrụ mana o nwere naanị awa 40. Gịnị ka ị ga-eme?", options: ["Debe awa 60 niile ma rụọ ọrụ na ngwụcha izu", "Belata stories ruo mgbe atụmatụ dabara n'ezi oge", "Hapụ Daily Scrum", "Mee ka sprint dị ogologo n'agwaghị onye ọ bụla"], answer: 1, why: "Hazie dabere n'oge ị nwere n'ezie; sprint ọrụ karịrị akarị na-ada." },
          { objective: "O5", q: "Gịnị ka WIP limit na-eme?", options: ["Ọ na-egbochi ọnụ ọgụgụ ọrụ nwere ike ịga n'otu oge", "Ọ na-egbochi ọnụ ọgụgụ mmadụ nwere ike ịbanye", "Ọ na-edobe mmefu ego ọrụ ahụ", "Ọ na-ewepụ ogidi Done"], answer: 0, why: "WIP limit na-eme ka otu ahụ mechaa ọrụ tupu ịmalite ndị ọzọ." },
          { objective: "O5", q: "Onye otu kwuru ihe mgbochi na Daily Scrum. Mgbe ole ka a ga-edozi ya?", options: ["N'oge nzukọ ahụ, otu awa", "Ọ dịghị mgbe ọ bụla", "Na njedebe ọrụ ahụ", "Mgbe nzukọ gwụrụ, site n'aka ndị nwere ike inye aka"], answer: 3, why: "Daily Scrum na-anọ na nkeji 15; a na-edozi ihe mgbochi ozugbo ọ gwụrụ." },
          { objective: "O6", q: "Gịnị ka retrospective bụ maka ya?", options: ["Ire ngwaahịa ahụ", "Ịhọrọ Product Owner ọhụrụ", "Ide mmefu ego", "Otu otu ahụ si rụọ ọrụ na ihe a ga-agbanwe"], answer: 3, why: "Retrospective na-enyocha otu otu ahụ si rụọ ọrụ, dị ka after-action review." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Ijikwa Ọrụ n'Ụzọ Agile",
    questions: [
      { objective: "O1", q: "Ọrụ Agile na-enyefe:", options: ["Ihe niile naanị na njedebe", "Naanị akwụkwọ", "Ihe a pụrụ iji n'obere oge nkenke", "Ọ dịghị ihe ruo mgbe ego gwụrụ"], answer: 2, why: "Agile na-enyefe ọrụ a pụrụ iji kwa izu ole na ole." },
      { objective: "O1", q: "Kedu ọnọdụ waterfall dabara karịa Agile?", options: ["App ọhụrụ ebe ihe ndị ọrụ chọrọ edoghị anya", "Ọrụ a maara nke ọma nke na-agaghị agbanwe, dị ka ịwụ ntọala ụlọ", "Nnwale ahịa nwere nsonaazụ a na-amaghị", "Ọrụ ebe ndụmọdụ na-agbanwe atụmatụ kwa izu"], answer: 1, why: "Waterfall na-arụ ọrụ mgbe a maara ọrụ ahụ nke ọma ma ọ kwụsiri ike." },
      { objective: "O1", q: "Scrum na Kanban bụ:", options: ["Ụzọ abụọ a na-ejikarị eme Agile", "Asụsụ mmemme kọmputa abụọ", "Ule asambodo abụọ", "Ụdị mmefu ego abụọ"], answer: 0, why: "Ha abụọ bụ ụzọ Agile a ma ama." },
      { objective: "O2", q: "Onye na-enyere otu aka iji Scrum nke ọma ma na-ewepụ ihe mgbochi?", options: ["Product Owner", "Onye na-agụ ego (accountant)", "Onye ahịa", "Scrum Master"], answer: 3, why: "Nke ahụ bụ ọrụ Scrum Master." },
      { objective: "O2", q: "Na Scrum, \"Developers\" pụtara:", options: ["Naanị ndị na-ede mmemme software", "Ndị njikwa", "Ndị na-ewu ụlọ maka ire", "Ndị na-arụ ọrụ ahụ, ụdị ọrụ ọ bụla"], answer: 3, why: "Developers bụ onye ọ bụla na-arụ ọrụ sprint ahụ." },
      { objective: "O2", q: "Ogologo oge ole ka Daily Scrum na-ewe?", options: ["Otu ụbọchị dum", "Awa abụọ", "Nkeji 15", "Ọ nweghị oke"], answer: 2, why: "The Scrum Guide debere Daily Scrum na nkeji 15." },
      { objective: "O2", q: "Kedu nke ỌBỤGHỊ otu n'ime ihe atọ (artifacts) Scrum?", options: ["Product Backlog", "Akụkọ kwa afọ (Annual Report)", "Increment", "Sprint Backlog"], answer: 1, why: "Ihe atọ ahụ bụ Product Backlog, Sprint Backlog na Increment." },
      { objective: "O3", q: "Mezue usoro user story: \"As a ___, I want ___ ...\"", options: ["\"...so that [ihe kpatara ya]\"", "\"...by Friday\"", "\"...for free\"", "\"...or else\""], answer: 0, why: "Usoro ahụ na-ejedebe n'ihe kpatara ya: so that (ka...)." },
      { objective: "O3", q: "Acceptance criteria bụ:", options: ["Nlele ndị na-ekwu na e mechara story", "Arịrịọ ọrụ nke ndị otu", "Ọnụ ahịa ọrụ ahụ", "Ndepụta ndị otu"], answer: 0, why: "Ha na-akọwa mgbe a ga-agụ story dị ka nke e mechara." },
      { objective: "O3", q: "Ngwa enyemaka AI dere user stories iri maka gị. Gịnị bụ ọrụ gị?", options: ["Jiri ha n'agụghị ha", "Gwa AI ka ọ rụọ sprint", "Hichapụ backlog", "Lelee ha, dozie ha ma kpebie usoro"], answer: 3, why: "AI nwere ike ide nke mbụ; gị na-elele ọrụ ahụ ma na-ekpebi ihe kacha mkpa." },
      { objective: "O3", q: "Ihe ndị dị n'elu backlog kwesịrị ịbụ:", options: ["Ndị kacha dị mfe", "Ndị a họọrọ n'enweghị usoro", "Ndị kacha baa uru na ndị kacha ngwa", "Ndị kacha ochie"], answer: 2, why: "A na-ahazi backlog dabere n'uru na ngwa ngwa." },
      { objective: "O4", q: "Sprint Planning na-aza ajụjụ atọ ole?", options: ["Onye, ebee, mgbe ole", "Gịnị mere, gịnị na olee otu", "Ọnụ ahịa, ego, uru", "Malite, kwụsị, zuru ike"], answer: 1, why: "Gịnị mere (ebumnuche), gịnị (stories), olee otu (ọrụ)." },
      { objective: "O4", q: "Sprint goal kacha yie echiche ndị agha ole?", options: ["Nlele uwe agha", "Commander's intent (ebumnuche ọchịagha)", "Ọkwa ụgwọ ọnwa", "Arịrịọ ezumike"], answer: 1, why: "Ha abụọ na-ekwu ihe dị mkpa ma atụmatụ agbanwee." },
      { objective: "O4", q: "Ọrụ dị na sprint kwesịrị iwe:", options: ["Otu ụbọchị ma ọ bụ obere", "Otu ọnwa nke ọ bụla", "Otu afọ", "Oge ọ bụla"], answer: 0, why: "Obere ọrụ na-egosi ọganihu ma na-ekpughe nsogbu n'oge." },
      { objective: "O5", q: "Bọọdụ ọrụ dị mfe nwere ogidi ole?", options: ["Ọbara ọbara, ọcha, acha anụnụ anụnụ", "Ee na Mba", "Mọnde ruo Fraịde", "To Do, In Progress, Done"], answer: 3, why: "Ogidi atọ ahụ na-egosi ebe ọrụ ọ bụla dị." },
      { objective: "O5", q: "I nwere kaadị ise n'In Progress na WIP limit nke abụọ. Gịnị ka ị ga-eme?", options: ["Malite ọrụ nke isii", "Wepụ oke ahụ", "Mechaa ọrụ tupu ịmalite ihe ọhụrụ ọ bụla", "Bugharịa ha niile gaa Done"], answer: 2, why: "WIP limit pụtara na imecha ka mma karịa ịmalite." },
      { objective: "O6", q: "Na Sprint Review, ị kwesịrị igosi:", options: ["Ọ dịghị ihe; ọ bụ nzukọ atụmatụ", "Ọrụ e mechaghị dị ka à ga-asị na e mechara ya", "Naanị ọrụ ruru acceptance criteria ya", "Usoro oge onwe ndị otu"], answer: 2, why: "A na-egosi naanị ọrụ e mechara, ka ndụmọdụ bụrụ eziokwu." },
      { objective: "O6", q: "Ndụmọdụ sitere na Sprint Review na-aga:", options: ["N'ime ihe mkpofu", "N'ime backlog", "Naanị n'ime retrospective", "Nye ọka iwu"], answer: 1, why: "Ndụmọdụ ọhụrụ na-aghọ ihe n'ime backlog." },
      { objective: "O6", q: "Keep / Stop / Try bụ usoro maka:", options: ["Retrospective", "Mmefu ego", "Iwe mmadụ n'ọrụ", "User stories"], answer: 0, why: "Ọ bụ ụzọ dị mfe isi eme retrospective." },
      { objective: "O6", q: "Ebee ka ị ga-ekwenye ihe a chọrọ na ụgwọ ugbu a maka asambodo Agile?", options: ["Ozi ọ bụla na forum", "Mgbasa ọkwa na soshal midia", "Naanị azịza AI", "Weebụsaịtị gọọmentị ụlọ ọrụ na-enye asambodo ahụ, dị ka Scrum Alliance ma ọ bụ Scrum.org"], answer: 3, why: "Ihe a chọrọ na ụgwọ na-agbanwe; weebụsaịtị gọọmentị ụlọ ọrụ ahụ bụ isi iyi." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: { title: "Ule mbido: Gịnị ka ị maraworị?", from: [0, 1, 3, 6, 7, 11, 12, 14, 15, 18] },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      { name: "Backlog nke user stories", objective: "O3", notYet: "Stories erughị asatọ, ma ọ bụ ihe e dere dị ka ọrụ nkịtị na-enweghị \"so that\".", meets: "Opekata mpe stories asatọ n'usoro ahụ, nke ọ bụla nwere acceptance criteria abụọ ma ọ bụ atọ, n'usoro mkpa.", exceeds: "E kewara nnukwu stories, onye na-amụ ihe nwekwara ike ịkọwa ihe mere story kacha elu ji bụrụ nke mbụ." },
      { name: "Atụmatụ sprint", objective: "O4", notYet: "Enweghị sprint goal, ma ọ bụ ọrụ ahụ karịrị oge dị.", meets: "Sprint goal nke otu ahịrịokwu, stories sitere n'elu backlog na ọrụ ndị na-ewe otu ụbọchị ma ọ bụ obere dabara n'awa ndị ahụ.", exceeds: "Ọ hapụrụ ohere ntakịrị ma kwuo ihe a ga-ebu ụzọ belata." },
      { name: "Bọọdụ ọrụ", objective: "O5", notYet: "E hazịrị bọọdụ ahụ mana a bugharịghị kaadị n'izu ahụ.", meets: "Ogidi To Do, In Progress na Done, WIP limit, na kaadị a na-ebugharị kwa ụbọchị.", exceeds: "E dere ihe mgbochi ya na onye wepụrụ ha." },
      { name: "Nyocha na retrospective", objective: "O6", notYet: "Nyocha (review) ma ọ bụ retrospective adịghị.", meets: "Nyocha e dere ede nwere ndụmọdụ a tinyere na backlog, na Keep, Stop na Try e depụtara.", exceeds: "Otu mmezi abụrụlarị ọrụ na sprint na-esote." }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma gafee ọrụ ikpeazụ (rubric)",
      "Ndị na-amụ ihe tinyere ahụmahụ Agile ma ọ bụ Scrum na résumé ma ọ bụ profaịlụ LinkedIn n'ime ụbọchị 30",
      "Ndị na-amụ ihe rịọrọ ma ọ bụ malite ọrụ project, mmemme ma ọ bụ operations n'ime ụbọchị 90",
      "Ndị na-amụ ihe gara n'ihu nweta asambodo Agile dị ka Certified ScrumMaster ma ọ bụ Professional Scrum Master"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Ngwa bọọdụ ọrụ n'efu (Trello, Microsoft Planner ma ọ bụ GitHub Projects), spreadsheet, ma ọ bụ mpempe akwụkwọ nrapado na mgbidi",
      "Ekwentị ma ọ bụ kọmputa; ngwa enyemaka AI bụ nhọrọ maka ide stories mbụ",
      "Akwụkwọ na mkpịsị ode, ma ọ bụ akwụkwọ dijitalụ, maka backlog, atụmatụ sprint, nyocha na retrospective",
      "Ihe dị ka nkeji 60 maka nkuzi na nnwale, gbakwunyere otu izu iji rụọ sprint"
    ],
    facilitatorNotes: [
      "Meenụ ule mbido ọnụ, wee mee otu isi n'otu nnọkọ; gosi bọọdụ ọmụmaatụ na ihuenyo onye ọ bụla na-ahụ.",
      "Jikọta echiche ọ bụla na ahụmahụ ndị agha: sprint goal na commander's intent, retrospective na after-action review.",
      "Mee ka ndị na-amụ ihe họrọ ezi ọrụ nke onwe ha ma ọ bụ nke obodo ka sprint ahụ bụrụ ezi ọrụ.",
      "Mee obere nzukọ otu n'izu sprint ka ndị na-amụ ihe mee omume Daily Scrum n'olu dị elu.",
      "Jiri rubric tụọ akara ọrụ ikpeazụ, ma nye ndụmọdụ n'otu ahịrị Ọ ruchabeghị n'otu oge."
    ]
  }
};
