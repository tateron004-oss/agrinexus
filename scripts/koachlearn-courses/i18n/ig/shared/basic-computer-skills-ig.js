"use strict";

// Koach Learn course (Igbo translation of shared/basic-computer-skills.js). See scripts/koachlearn-courses/README.md, "Translations",
// and scripts/koachlearn-courses/AFRICAN-LANGUAGES-BRIEF.md.

module.exports = {
  id: "basic-computer-skills-ig",
  lang: "ig",
  translationOf: "basic-computer-skills",
  category: "Seniors and Technology",
  name: "Nka Mbụ nke Kọmputa",
  skills: "Ịgbanye na ịgbanyụ kọmputa, Iji mouse ma ọ bụ trackpad, Iji keyboard ede ihe, Imeghe na imechi app na windo, Ịchekwa na ịchọta faịlụ n'ime folda, Idebe kọmputa ka ọ dị ọhụrụ",
  outcome: "ịgbanye kọmputa Windows ma ọ bụ Mac ma banye (sign in), iji mouse na keyboard n'obi ike, imeghe app, ide ma chekwaa obere ndetu n'ime folda i mere, ịchọta ya ọzọ ma emechaa, na ịgbanyụ kọmputa n'ụzọ ziri ezi.",
  about: [
    "Ihe ọmụmụ a bụ maka onye ọ bụla na-enweghị obi ike n'ihu kọmputa: ndị ejibeghị ya mgbe ọ bụla, ndị mụtara ya ọtụtụ afọ gara aga, na ndị na-ejikarị ekwentị. Anyị na-aga otu obere nzọụkwụ n'otu oge, ọ dịghịkwa ihe ị ga-eme na nkuzi ndị a ga-emebi kọmputa.",
    "N'Isi 1, ị ga-amụta akụkụ kọmputa, otu esi agbanye ya ma banye, na otu esi eji mouse na keyboard. N'Isi 2, ị ga-emeghe app na windo, chekwaa faịlụ n'ime folda, chọta ya ọzọ, ma debe kọmputa ka ọ dị mma.",
    "E nyere nzọụkwụ maka kọmputa Windows na kọmputa Mac. Nkuzi ọ bụla na-ewe ihe dị ka nkeji ise. E nwere nnwale ihe ọmụma na njedebe isi ọ bụla, na ule nwere ajụjụ 20 na njedebe ihe ọmụmụ a."
  ],
  finalTask: "Gbanye kọmputa ma banye. Mee folda ọhụrụ aha ya bụ \"Practice\" n'ime folda Documents gị. Meghee Notepad (Windows) ma ọ bụ TextEdit (Mac), dee obere ndetu, dị ka ndepụta ajụjụ maka oge ọzọ ị ga-ahụ dọkịta ma ọ bụ ozi nye nwa nwa gị, nwee mkpụrụedemede ukwu na mmalite ahịrịokwu ọ bụla. Chekwaa ya n'ime folda Practice nwere aha doro anya, mechie app ahụ, chọta faịlụ ahụ ọzọ ma meghee ya, wee gbanyụọ kọmputa n'ụzọ ziri ezi.",
  // ---- ADDIE: Nnyocha ----
  analysis: {
    learners: "Ndị okenye nwere ahụmịhe ntakịrị ma ọ bụ ọ dịghị nke ha nwere na kọmputa: ndị agadi, ndị na-alọghachi n'ọrụ ma ọ bụ n'obodo, ndị na-achọ ọrụ na ndị na-elekọta mmadụ chọrọ iji kọmputa n'ụlọ, n'ọba akwụkwọ ma ọ bụ n'ebe enyemaka ọrụ n'onwe ha.",
    startingPoint: "Ha nwere ike iji ekwentị kpọọ oku ma ọ bụ zipu ozi. Ọtụtụ ejibeghị mouse mgbe ọ bụla, edebeghị ihe na keyboard zuru oke, emegheghị app na kọmputa, echekwabeghị faịlụ n'ime folda, ma ọ bụ gbanyụọ kọmputa n'ụzọ ziri ezi.",
    gap: "Arịrịọ ọrụ, ọrụ ọba akwụkwọ, ụlọ akwụkwọ na ọtụtụ fọm chọrọ kọmputa. Na-enweghị ihe mbụ ndị a, ndị mmadụ ga-arịọ ndị ọzọ enyemaka, tufuo ọrụ ha n'ihi na e chekwaghị ya, ma ọ bụ zere kọmputa kpamkpam.",
    constraints: [
      "Ọkwa ịgụ akwụkwọ: okwu dị mfe na ahịrịokwu dị mkpụmkpụ; a na-akpọ aha akụkụ na bọtịnụ ọ bụla ma kọwaa ya",
      "Ngwaọrụ: kọmputa desktop ma ọ bụ laptop Windows ma ọ bụ Mac, n'ụlọ ma ọ bụ n'ọba akwụkwọ ma ọ bụ n'ebe enyemaka ọrụ",
      "Oge: ihe dị ka nkeji 5 maka nkuzi ọ bụla, ihe dị ka nkeji 60 n'ozuzu, na oge mgbakwunye iji mụọ mouse",
      "Ego: naanị app n'efu dịlarịrị na kọmputa (Notepad ma ọ bụ TextEdit)",
      "Kọmputa ọha: ndị na-amụ ihe na-agbaso iwu ndị ọrụ maka ịbanye, ha anaghịkwa echekwa faịlụ nzuzo na kọmputa ọba akwụkwọ"
    ],
    prerequisites: "Ọ dịghị."
  },
  // ---- ADDIE: Nhazi (ebumnuche: ọnọdụ, omume a na-ahụ anya, ọkwa) ----
  objectives: [
    { id: "O1", condition: "Mgbe e nyere gị kọmputa desktop ma ọ bụ laptop", action: "ịkpọ aha akụkụ ya ndị bụ isi, ịgbanye ya ma banye", standard: "n'enweghị onye nyere gị aka, na-akpọ aha ihuenyo, keyboard, mouse ma ọ bụ trackpad, na bọtịnụ ọkụ" },
    { id: "O2", condition: "Site n'iji mouse ma ọ bụ trackpad", action: "ịtụ aka, ịpị (click), ịpị ugboro abụọ (double-click), ịpị aka nri (right-click) na ịkpụgharị (scroll)", standard: "na-eme omume ọ bụla nke ọma mgbe a gwara gị" },
    { id: "O3", condition: "Site n'iji keyboard", action: "ide ahịrịokwu nwere mkpụrụedemede ukwu, oghere na akara edemede ma dozie mperi", standard: "nwere mkpụrụedemede ukwu na mmalite ahịrịokwu ọ bụla, ma jiri Backspace ma ọ bụ undo dozie mperi ọ bụla" },
    { id: "O4", condition: "Na kọmputa Windows ma ọ bụ Mac", action: "imeghe app site n'aha ya, ime ka windo ya buo ibu ma ọ bụ zoo ya (minimize), weghachi ya ma mechie ya", standard: "n'enweghị onye nyere gị aka" },
    { id: "O5", condition: "Mgbe e nyere gị obere ndetu ị ga-echekwa", action: "ime folda, ịchekwa ndetu ahụ n'ime ya n'aha doro anya ma chọta ya ọzọ", standard: "faịlụ ahụ dị na folda ziri ezi ma e meghere ya ọzọ ma emechaa" },
    { id: "O6", condition: "Mgbe kọmputa chọrọ nlekọta ma ọ bụ nwee nsogbu", action: "ịwụnye mmelite (update), ịmalitegharị ya (restart), ịgbanyụ ya n'ụzọ ziri ezi ma họrọ ebe dị mma ị ga-enweta enyemaka", standard: "na-eji menu agbanyụ ya ma ọ dịghị mgbe ọ bụla na-akpọ nọmba sitere na pop-up" }
  ],
  chapters: [
    {
      name: "Isi 1: Ịmara kọmputa nke ọma",
      lessons: [
        {
          objectives: ["O1"],
          title: "Akụkụ kọmputa, na otu esi agbanye ya",
          minutes: 5,
          goal: "Kpọọ aha akụkụ kọmputa ndị bụ isi, gbanye ya ma banye.",
          text: [
            "Kọmputa desktop nwere ihuenyo (monitor), keyboard, mouse, na igbe ma ọ bụ ihuenyo nke kọmputa n'onwe ya dị n'ime ya. Laptop nwere ihe ndị a niile n'otu ihe na-emepe emepe; kama mouse, o nwere ebe dị larịị a na-emetụ aka a na-akpọ trackpad.",
            "Iji gbanye ya, pịa bọtịnụ ọkụ otu ugboro. Ọ na-enwekarị okirikiri nwere ahịrị gafere n'elu ya. Na laptop, ọ na-adịkarị n'elu aka nri nke keyboard ma ọ bụ n'akụkụ ya. Chere ka ihuenyo bilie.",
            "Ọtụtụ kọmputa ga-agwa gị ka i jiri okwuntughe (password) ma ọ bụ PIN banye. Dee ya ma pịa Enter. Na kọmputa ọha, dị ka nke dị n'ọba akwụkwọ, ndị ọrụ ga-agwa gị otu esi abanye."
          ],
          steps: ["Chọta bọtịnụ ọkụ (okirikiri nwere ahịrị n'elu).", "Pịa ya otu ugboro ma hapụ ya.", "Chere ihuenyo ịbanye.", "Dee okwuntughe ma ọ bụ PIN gị ma pịa Enter."],
          words: [["Monitor", "ihuenyo nke kọmputa desktop."], ["Laptop", "kọmputa na-emepe emepe, nke ihuenyo na keyboard ya dị n'otu ihe."], ["Trackpad", "ebe dị larịị a na-emetụ aka na laptop nke na-arụ ọrụ dị ka mouse."], ["Ịbanye (sign in)", "ide okwuntughe ma ọ bụ PIN gị ka kọmputa mara na ọ bụ gị."]],
          slides: [
            { title: "Akụkụ kọmputa", bullets: ["Ihuenyo (monitor)", "Keyboard", "Mouse, ma ọ bụ trackpad na laptop"] },
            { title: "Gbanye ya", bullets: ["Bọtịnụ ọkụ: okirikiri nwere ahịrị n'elu", "Pịa otu ugboro ma chere"] },
            { title: "Banye", bullets: ["Dee okwuntughe ma ọ bụ PIN gị", "Pịa Enter", "Na kọmputa ọha, jụọ ndị ọrụ"] }
          ],
          tryIt: "Tụọ aka n'ihuenyo, keyboard na mouse (ma ọ bụ trackpad) nke kọmputa dị gị nso. Chọta bọtịnụ ọkụ, gbanye kọmputa ma banye.",
          youCanNow: "ịkpọ aha akụkụ kọmputa, ịgbanye ya ma banye.",
          quickCheck: [
            { objective: "O1", q: "Gịnị bụ monitor?", options: ["Mouse", "Ihuenyo", "Waya ọkụ", "Keyboard"], answer: 1, why: "Monitor bụ ihuenyo ebe ị na-ahụ ọrụ gị." },
            { objective: "O1", q: "Ị chọrọ iji kọmputa n'ọba akwụkwọ, ọ na-arịọ ka i banye. Gịnị ka ị ga-eme?", options: ["Jide bọtịnụ ọkụ ruo mgbe ọ nwụrụ", "Wepụ waya ya", "Dee mkpụrụedemede ọ bụla ruo mgbe ọ meghere", "Jụọ ndị ọrụ otu esi abanye"], answer: 3, why: "Na kọmputa ọha, ndị ọrụ ga-agwa gị otu esi abanye." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Iji mouse ma ọ bụ trackpad",
          minutes: 5,
          goal: "Tụọ aka, pịa, pịa ugboro abụọ, pịa aka nri ma kpụgharịa.",
          text: [
            "Mouse na-ebugharị pointer, obere akụ dị n'ihuenyo. Debe aka gị na mouse ma jiri nwayọọ sọọ ya na tebụl; akụ ahụ ga-eso ya. Ọ bụrụ na ohere agwụ gị, welie mouse ma tinyeghachi ya n'etiti.",
            "Pịa (click): pịa bọtịnụ aka ekpe otu ugboro iji họrọ ihe. Pịa ugboro abụọ (double-click): pịa bọtịnụ aka ekpe ugboro abụọ ngwa ngwa iji meghee ihe, dị ka folda. Pịa aka nri (right-click): pịa bọtịnụ aka nri otu ugboro iji hụ obere menu nhọrọ. Kpụgharịa (scroll): tụgharịa obere wiil dị n'etiti bọtịnụ abụọ ahụ iji bugharịa peeji elu ma ọ bụ ala.",
            "Na trackpad laptop, sọọ otu mkpịsị aka iji bugharịa akụ ahụ, metụ ma ọ bụ pịa otu ugboro iji pịa, ma sọọ mkpịsị aka abụọ elu ma ọ bụ ala iji kpụgharịa. Iji pịa aka nri, jiri mkpịsị aka abụọ metụ ya."
          ],
          steps: ["Sọọ mouse iji bugharịa akụ ahụ.", "Pịa: pịa bọtịnụ aka ekpe otu ugboro.", "Pịa ugboro abụọ: pịa bọtịnụ aka ekpe ugboro abụọ ngwa ngwa.", "Pịa aka nri: pịa bọtịnụ aka nri otu ugboro maka menu.", "Kpụgharịa: tụgharịa wiil, ma ọ bụ sọọ mkpịsị aka abụọ na trackpad."],
          words: [["Pointer", "obere akụ dị n'ihuenyo nke na-eso mouse."], ["Pịa (click)", "ịpị bọtịnụ aka ekpe nke mouse otu ugboro."], ["Pịa ugboro abụọ (double-click)", "ịpị bọtịnụ aka ekpe ugboro abụọ ngwa ngwa iji meghee ihe."], ["Pịa aka nri (right-click)", "ịpị bọtịnụ aka nri iji hụ menu nhọrọ."], ["Kpụgharịa (scroll)", "ibugharị peeji elu ma ọ bụ ala."]],
          slides: [
            { title: "Bugharịa pointer", bullets: ["Jiri nwayọọ sọọ mouse", "Ohere agwụla? Welie ya, tinyeghachi ya n'etiti"] },
            { title: "Ịpị", bullets: ["Pịa: bọtịnụ aka ekpe otu ugboro, iji họrọ", "Pịa ugboro abụọ: ngwa ngwa, iji meghee", "Pịa aka nri: bọtịnụ aka nri, maka menu"] },
            { title: "Kpụgharịa", bullets: ["Tụgharịa wiil mouse", "Trackpad: sọọ mkpịsị aka abụọ elu ma ọ bụ ala"] },
            { title: "Trackpad", bullets: ["Otu mkpịsị aka na-ebugharị akụ", "Metụ ya iji pịa", "Mkpịsị aka abụọ metụ iji pịa aka nri"] }
          ],
          tryIt: "Meghee peeji weebụ ma ọ bụ akwụkwọ ọ bụla. Kpụgharịa ala ma laghachi elu. Pịa aka nri n'ebe tọgbọrọ chakoo ma gụọ menu ahụ, wee pịa Esc iji mechie ya. Pịa otu okwu ugboro abụọ iji họrọ ya.",
          youCanNow: "ịtụ aka, ịpị, ịpị ugboro abụọ, ịpị aka nri na ịkpụgharị site n'iji mouse ma ọ bụ trackpad.",
          quickCheck: [
            { objective: "O2", q: "Gịnị ka ịkpụgharị (scroll) na-eme?", options: ["Ọ na-ebugharị peeji elu ma ọ bụ ala", "Ọ na-emeghe folda", "Ọ na-agbanyụ kọmputa", "Ọ na-ede mkpụrụedemede ukwu"], answer: 0, why: "Ịtụgharị wiil mouse, ma ọ bụ ịsọ mkpịsị aka abụọ na trackpad, na-ebugharị peeji." },
            { objective: "O2", q: "Na trackpad laptop, ị chọrọ ịhụ obere menu nhọrọ. Gịnị ka ị ga-eme?", options: ["Sọọ otu mkpịsị aka", "Pịa bọtịnụ ọkụ", "Jiri mkpịsị aka abụọ metụ ya", "Pịa Caps Lock"], answer: 2, why: "Na trackpad, mkpịsị aka abụọ metụrụ ya bụ ịpị aka nri." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Iji keyboard ede ihe",
          minutes: 5,
          goal: "Dee ahịrịokwu nwere mkpụrụedemede ukwu, oghere na akara edemede, ma dozie mperi.",
          text: [
            "Keyboard nwere mkpụrụedemede, nọmba na igodo pụrụ iche. Ogologo igodo dị n'okpuru bụ Space bar. Enter (Return na Mac) na-amalite ahịrị ọhụrụ ma ọ bụ na-ekwu \"gaa\". Backspace (Delete na Mac) na-ehichapụ mkpụrụedemede dị n'aka ekpe nke ahịrị na-enwu enwu, a na-akpọ cursor.",
            "Maka otu mkpụrụedemede ukwu, jide Shift ma pịa mkpụrụedemede ahụ. Caps Lock na-eme ka mkpụrụedemede niile bụrụ ukwu ruo mgbe ị pịara ya ọzọ. Shift na-edekwa akara dị n'elu igodo, dị ka ? ma ọ bụ !.",
            "Ụzọ mkpirisi (shortcut) na-azọpụta oge. Na Windows jiri Ctrl; na Mac jiri Command. Ctrl+Z na-eweghachi mperi, Ctrl+C na-eṅomi (copy), Ctrl+V na-etinye (paste), Ctrl+S na-echekwa."
          ],
          steps: ["Pịa ebe ị chọrọ ide ihe; cursor ga-enwu enwu ebe ahụ.", "Jide Shift ma pịa mkpụrụedemede maka nke ukwu.", "Pịa Space bar n'etiti okwu.", "Pịa Backspace (Delete na Mac) iji dozie mperi.", "Pịa Enter (Return na Mac) maka ahịrị ọhụrụ."],
          words: [["Cursor", "ahịrị na-enwu enwu nke na-egosi ebe ihe ị na-ede ga-aga."], ["Shift", "igodo ị na-ejide maka mkpụrụedemede ukwu ma ọ bụ akara dị n'elu."], ["Backspace", "igodo na-ehichapụ mkpụrụedemede dị n'aka ekpe (Delete na Mac)."], ["Shortcut", "igodo ole na ole a na-apị ọnụ nke na-arụ ọrụ ngwa ngwa, dị ka Ctrl+S iji chekwaa."]],
          slides: [
            { title: "Igodo ndị dị mkpa", bullets: ["Space bar: oghere", "Enter (Return na Mac): ahịrị ọhụrụ", "Backspace (Delete na Mac): hichapụ mkpụrụedemede"] },
            { title: "Mkpụrụedemede ukwu na akara", bullets: ["Shift + mkpụrụedemede = otu nke ukwu", "Caps Lock = niile ukwu ruo mgbe ị pịara ya ọzọ", "Shift na-edekwa ? na !"] },
            { title: "Ụzọ mkpirisi bara uru", bullets: ["Windows: Ctrl. Mac: Command", "Z weghachi, C ṅomie, V tinye, S chekwaa"] }
          ],
          tryIt: "Meghee igbe ọchụchọ ma ọ bụ akwụkwọ efu ma dee: Aha m bụ ___, a na m amụ kọmputa! Jiri mkpụrụedemede ukwu malite, wee jiri Backspace hichapụ otu okwu ma dee ya ọzọ.",
          youCanNow: "ide ahịrịokwu nwere mkpụrụedemede ukwu na akara edemede, idozi mperi na iji ụzọ mkpirisi ndị a na-ejikarị.",
          quickCheck: [
            { objective: "O3", q: "Gịnị ka Ctrl+C na-eme na Windows?", options: ["Ọ na-echekwa ọrụ gị", "Ọ na-eweghachi mperi", "Ọ na-eṅomi (copy)", "Ọ na-emechi app"], answer: 2, why: "Ctrl+C na-eṅomi; Ctrl+V na-etinye." },
            { objective: "O3", q: "Ihe niile ị na-ede na-apụta na mkpụrụedemede ukwu. Gịnị ka ị ga-eme?", options: ["Malitegharịa kọmputa", "Pịa Caps Lock ọzọ iji gbanyụọ ya", "Jide Shift maka mkpụrụedemede ọ bụla", "Zụta keyboard ọhụrụ"], answer: 1, why: "Caps Lock na-eme ka mkpụrụedemede niile bụrụ ukwu ruo mgbe ị pịara ya ọzọ." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 1: Ịmara kọmputa nke ọma",
        questions: [
          { objective: "O1", q: "Gịnị bụ trackpad?", options: ["Ihuenyo", "Ụdị igwe mbipụta", "Ebe dị larịị a na-emetụ aka na laptop nke na-arụ ọrụ dị ka mouse", "Waya"], answer: 2, why: "Trackpad na-arụ ọrụ mouse na laptop." },
          { objective: "O1", q: "Kedu ka bọtịnụ ọkụ na-adịkarị?", options: ["Kpakpando", "Okirikiri nwere ahịrị n'elu", "Obi", "Akara ajụjụ"], answer: 1, why: "Nke ahụ bụ akara ọkụ a na-ahụkarị." },
          { objective: "O2", q: "Kedu ka i si eji mouse emeghe folda?", options: ["Pịa aka nri otu ugboro", "Tụgharịa wiil", "Pịa ya ugboro abụọ", "Maa mouse jijiji"], answer: 2, why: "Ịpị ugboro abụọ na-emeghe ihe." },
          { objective: "O3", q: "Kedu ka i si ede otu mkpụrụedemede ukwu?", options: ["Pịa Enter", "Jide Shift ma pịa mkpụrụedemede ahụ", "Pịa Backspace", "Pịa Space bar ugboro abụọ"], answer: 1, why: "Shift na mkpụrụedemede na-eme otu nke ukwu." },
          { objective: "O3", q: "I dere mkpụrụedemede ezighi ezi. Kedu igodo na-ehichapụ ya?", options: ["Space bar", "Shift", "Caps Lock", "Backspace (Delete na Mac)"], answer: 3, why: "Backspace na-ehichapụ mkpụrụedemede dị n'aka ekpe nke cursor." }
        ]
      }
    },
    {
      name: "Isi 2: App, faịlụ na nlekọta",
      lessons: [
        {
          objectives: ["O4"],
          title: "Imeghe app na ijikwa windo",
          minutes: 5,
          goal: "Meghee app, gbanwee nha windo ya ma mechie ya.",
          text: [
            "App (mmemme) na-arụ ọrụ: web browser maka ịntanetị, app ide ihe maka ndetu, app foto maka foto. Na Windows, pịa bọtịnụ Start (akara Windows dị n'okpuru ihuenyo) ma dee aha app ahụ. Na Mac, pịa enyo mbụli ihe dị n'elu aka nri (Spotlight), dee aha ya ma pịa Return.",
            "App ọ bụla na-emeghe n'ime windo. N'akụkụ elu ya, e nwere obere bọtịnụ. Na Windows, n'elu aka nri: ahịrị nta (minimize, zoo ya ugbu a), square (maximize, mejupụta ihuenyo) na X (mechie). Na Mac, n'elu aka ekpe: uhie (mechie), odo (minimize) na akwụkwọ ndụ (ihuenyo zuru oke).",
            "App e zoro ezo na-echere na taskbar (Windows, n'okpuru) ma ọ bụ Dock (Mac). Pịa akara (icon) app ahụ ebe ahụ iji weghachi ya."
          ],
          steps: ["Windows: pịa Start ma dee aha app. Mac: pịa enyo mbụli ihe ma dee aha ya.", "Pịa Enter ma ọ bụ Return iji meghee ya.", "Jiri bọtịnụ minimize zoo ya.", "Pịa akara ya na taskbar ma ọ bụ Dock iji weghachi ya.", "Mechie ya site na X (Windows) ma ọ bụ bọtịnụ uhie (Mac)."],
          words: [["App / mmemme", "sọftụwia na-arụ otu ọrụ, dị ka ide ihe ma ọ bụ ịchọgharị ịntanetị."], ["Windo", "igbe app na-emeghe n'ime ya."], ["Minimize", "izo windo ugbu a n'emechighị ya."], ["Taskbar / Dock", "ahịrị akara app dị n'okpuru ihuenyo (taskbar na Windows, Dock na Mac)."]],
          slides: [
            { title: "Meghee app", bullets: ["Windows: bọtịnụ Start, dee aha ya", "Mac: enyo mbụli ihe (Spotlight), dee aha ya"] },
            { title: "Bọtịnụ windo na Windows", bullets: ["N'elu aka nri", "Ahịrị nta = minimize, square = maximize, X = mechie"] },
            { title: "Bọtịnụ windo na Mac", bullets: ["N'elu aka ekpe", "Uhie = mechie, odo = minimize, akwụkwọ ndụ = ihuenyo zuru oke"] },
            { title: "Weghachi ya", bullets: ["Pịa akara ya na taskbar (Windows)", "Ma ọ bụ na Dock (Mac)"] }
          ],
          tryIt: "Meghee Notepad (Windows) ma ọ bụ TextEdit (Mac) site n'ide aha ya na Start ma ọ bụ Spotlight. Zoo ya (minimize), weghachi ya site na taskbar ma ọ bụ Dock, wee mee ka o mejupụta ihuenyo.",
          youCanNow: "imeghe app ọ bụla site n'aha ya, ịgagharị n'etiti windo na imechi ha.",
          quickCheck: [
            { objective: "O4", q: "Na Windows, gịnị ka bọtịnụ square dị n'elu aka nri windo na-eme?", options: ["Ọ na-emechi windo", "Ọ na-ezo windo", "Ọ na-emeghe Spotlight", "Ọ na-eme ka windo mejupụta ihuenyo"], answer: 3, why: "Square bụ maximize; ahịrị nta na-ezo windo, X na-emechikwa ya." },
            { objective: "O4", q: "I zoro (minimize) app ide ihe gị, ugbu a ị chọrọ ya azụ. Gịnị ka ị ga-eme?", options: ["Pịa akara ya na taskbar (Windows) ma ọ bụ Dock (Mac)", "Gbanyụọ kọmputa", "Meghee folda ọhụrụ", "Pịa Backspace"], answer: 0, why: "App e zoro ezo na-echere na taskbar ma ọ bụ Dock ruo mgbe ị pịara ha." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ịchekwa na ịchọta faịlụ n'ime folda",
          minutes: 5,
          goal: "Chekwaa ndetu n'ime folda i mere ma chọta ya ọzọ.",
          text: [
            "Faịlụ bụ otu ihe e chekwara: akwụkwọ ozi, foto, ndepụta. Folda na-ejide faịlụ, dị ka drọwa n'ime kabọọd akwụkwọ. Folda Documents bụ ezigbo ụlọ maka faịlụ gị.",
            "Iji mee folda: na Windows meghee File Explorer (akara folda odo), pịa Documents, wee họrọ New na Folder. Na Mac meghee Finder (akara ihu na-acha anụnụ anụnụ), pịa Documents, wee meghee menu File ma họrọ New Folder. Dee aha ma pịa Enter ma ọ bụ Return.",
            "Iji chekwaa: pịa Ctrl+S (Command+S na Mac). Igbe ga-emeghe; họrọ folda, dee aha faịlụ doro anya dị ka \"Questions for Dr Lee\", ma pịa Save. Iji chọta faịlụ ma emechaa, meghee File Explorer ma ọ bụ Finder ma lee n'ime folda ahụ, ma ọ bụ dee akụkụ aha ya n'igbe ọchụchọ."
          ],
          steps: ["Meghee File Explorer (Windows) ma ọ bụ Finder (Mac).", "Gaa na Documents ma mee folda ọhụrụ.", "N'ime app gị, pịa Ctrl+S (Command+S na Mac).", "Họrọ folda ahụ, dee aha doro anya, pịa Save.", "Iji chọta ya: meghee folda ahụ, ma ọ bụ chọọ akụkụ aha ya."],
          words: [["Faịlụ", "otu ihe e chekwara, dị ka akwụkwọ ozi ma ọ bụ foto."], ["Folda", "ebe na-ejide faịlụ, dị ka drọwa."], ["File Explorer / Finder", "app maka ilele faịlụ na folda (Windows / Mac)."]],
          slides: [
            { title: "Faịlụ na folda", bullets: ["Faịlụ = otu ihe e chekwara", "Folda = drọwa na-ejide faịlụ", "Documents bụ ezigbo ụlọ"] },
            { title: "Mee folda", bullets: ["Windows: File Explorer, Documents, New, Folder", "Mac: Finder, Documents, File, New Folder"] },
            { title: "Chekwaa n'aha doro anya", bullets: ["Ctrl+S (Command+S na Mac)", "Họrọ folda, nye ya aha, pịa Save"] },
            { title: "Chọta ya ọzọ", bullets: ["Meghee folda ahụ", "Ma ọ bụ chọọ akụkụ aha ya"] }
          ],
          tryIt: "Mee folda aha ya bụ \"Practice\" n'ime Documents. Dee obere ndepụta na Notepad ma ọ bụ TextEdit, chekwaa ya n'ime Practice dị ka \"My First Note\", mechie app ahụ, wee chọta ma meghee faịlụ ahụ ọzọ.",
          youCanNow: "ime folda, ịchekwa faịlụ n'aha doro anya na ịchọta ha ọzọ.",
          quickCheck: [
            { objective: "O5", q: "Gịnị bụ faịlụ?", options: ["Otu ihe e chekwara, dị ka akwụkwọ ozi, foto ma ọ bụ ndepụta", "Drọwa na-ejide folda", "App na-emeghe ịntanetị", "Bọtịnụ ọkụ"], answer: 0, why: "Faịlụ bụ otu ihe e chekwara; folda na-ejide faịlụ." },
            { objective: "O5", q: "I dechara ndetu ma chọọ idebe ya. Gịnị ka ị ga-eme?", options: ["Mechie app n'echekwaghị ya", "Gbanyụọ kọmputa", "Wepụ keyboard", "Pịa Ctrl+S (Command+S na Mac), họrọ folda, dee aha doro anya ma pịa Save"], answer: 3, why: "Ịchekwa na-etinye ndetu n'ime folda nwere aha ka i nwee ike ịchọta ya ma emechaa." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Idebe kọmputa gị ka ọ dị mma",
          minutes: 4,
          goal: "Wụnye mmelite, malitegharịa ma gbanyụọ ya n'ụzọ ziri ezi, ma mara ebe ị ga-enweta enyemaka.",
          text: [
            "Mmelite (update) na-edozi nsogbu ma mechie oghere nchekwa. Na Windows, meghee Settings ma họrọ Windows Update. Na Mac, meghee System Settings ma họrọ General, wee Software Update. Wụnye mmelite mgbe a gwara gị ma hapụ kọmputa ka ọ malitegharịa.",
            "Ọ bụrụ na kọmputa na-eji nwayọọ arụ ọrụ ma ọ bụ ihe kwụsịrị ọnụ (freeze), chekwaa ọrụ gị ma malitegharịa ya. Nke ahụ na-edozi ọtụtụ nsogbu. Iji gbanyụọ ya na Windows: Start, wee akara ọkụ, wee Shut down. Na Mac: menu Apple dị n'elu aka ekpe, wee Shut Down. Ewepụla waya ya ma ọ bụ jide bọtịnụ ọkụ ma ọ bụrụ na ọ kwụsịbeghị kpamkpam.",
            "Ọ bụrụ na pop-up na-ekwu na kọmputa gị nwere nje (virus) ma nye nọmba ekwentị, akpọla; mechie ya. Rịọ enyemaka n'aka onye ị tụkwasịrị obi, nnọkọ enyemaka teknụzụ n'ọba akwụkwọ, ma ọ bụ ụlọ ahịa ebe ị zụtara kọmputa ahụ."
          ],
          steps: ["Lelee mmelite: Windows Update (Windows) ma ọ bụ Software Update (Mac).", "Wụnye ha ma hapụ kọmputa ka ọ malitegharịa.", "Ọ na-eji nwayọọ ma ọ bụ kwụsịrị ọnụ? Chekwaa ma malitegharịa.", "Gbanyụọ: Start, akara ọkụ, Shut down (Windows) ma ọ bụ menu Apple, Shut Down (Mac).", "Chọrọ enyemaka? Onye ị tụkwasịrị obi, enyemaka teknụzụ n'ọba akwụkwọ ma ọ bụ ụlọ ahịa."],
          words: [["Mmelite (update)", "ndozi n'efu sitere n'aka onye mere ya nke na-eme ka nchekwa na ọrụ ya ka mma."], ["Ịmalitegharị (restart)", "ịgbanyụ kọmputa ma gbanye ya ọzọ n'otu nzọụkwụ."], ["Ịgbanyụ (shut down)", "ịgbanyụ kọmputa kpamkpam n'ụzọ ziri ezi."]],
          sources: [{ name: "FTC: Otu esi amata, ezere ma kọọ aghụghọ enyemaka teknụzụ (n'asụsụ bekee)", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" }],
          slides: [
            { title: "Wụnye mmelite", bullets: ["Windows: Settings, Windows Update", "Mac: System Settings, General, Software Update"] },
            { title: "Ịmalitegharị na-edozi ọtụtụ ihe", bullets: ["Ọ na-eji nwayọọ ma ọ bụ kwụsịrị ọnụ? Chekwaa, wee malitegharịa"] },
            { title: "Gbanyụọ n'ụzọ ziri ezi", bullets: ["Windows: Start, akara ọkụ, Shut down", "Mac: menu Apple, Shut Down", "Ewepụla waya ya otu a"] },
            { title: "Ịnweta enyemaka", bullets: ["Akpọla nọmba ọ bụla dị na pop-up nje", "Jụọ onye ị tụkwasịrị obi ma ọ bụ enyemaka teknụzụ ọba akwụkwọ"] }
          ],
          tryIt: "Ọrụ ikpeazụ: gbanye ma banye, mee folda Practice, dee ma chekwaa obere ndetu nwere mkpụrụedemede ukwu na Notepad ma ọ bụ TextEdit, mechie ya, chọta ma meghee ya ọzọ, lelee mmelite, wee gbanyụọ n'ụzọ ziri ezi.",
          youCanNow: "iji kọmputa site na mmalite ruo na njedebe: ịbanye, ịrụ ọrụ, ịchekwa, ịchọta faịlụ gị na ịgbanyụ ya n'enweghị nsogbu.",
          quickCheck: [
            { objective: "O6", q: "Ebee ka ị na-ahụ mmelite na kọmputa Windows?", options: ["N'ime Recycle Bin", "N'ime Settings, n'okpuru Windows Update", "Na elekere taskbar", "N'ime Notepad"], answer: 1, why: "Mmelite Windows dị na Settings, n'okpuru Windows Update." },
            { objective: "O6", q: "I mechaala ọrụ maka ụbọchị a na kọmputa Windows. Gịnị ka ị ga-eme?", options: ["Wepụ waya ọkụ", "Jide bọtịnụ ọkụ", "Pịa Start, wee akara ọkụ, wee Shut down", "Mechie laptop mgbe app na-echekwa ihe"], answer: 2, why: "Ịgbanyụ site na menu bụ ụzọ ziri ezi; iwepụ waya nwere ike ịkpata nsogbu." }
          ]
        }
      ],
      check: {
        title: "Nnwale ihe ọmụma 2: App, faịlụ na nlekọta",
        questions: [
          { objective: "O4", q: "Na Windows, kedu ka i si emeghe app ị na-ahụghị?", options: ["Gbanyụọ ihuenyo", "Wepụ waya kọmputa", "Pịa Backspace", "Pịa Start ma dee aha ya"], answer: 3, why: "Ọchụchọ Start na-achọta app ọ bụla site n'aha ya." },
          { objective: "O4", q: "Na Mac, bọtịnụ uhie dị n'elu aka ekpe windo:", options: ["Na-eme ka o mejupụta ihuenyo", "Na-ezo ya", "Na-emechi ya", "Na-ebipụta ya"], answer: 2, why: "Uhie na-emechi, odo na-ezo, akwụkwọ ndụ na-emejupụta ihuenyo." },
          { objective: "O5", q: "Gịnị bụ folda?", options: ["Ụdị keyboard", "Ebe na-ejide faịlụ, dị ka drọwa", "Mmelite", "Peeji weebụ"], answer: 1, why: "Folda na-edebe faịlụ n'usoro." },
          { objective: "O5", q: "Kedu igodo na-echekwa ọrụ gị na Windows?", options: ["Ctrl+Z", "Ctrl+P", "Alt+Tab", "Ctrl+S"], answer: 3, why: "Ctrl+S na-echekwa (Command+S na Mac)." },
          { objective: "O6", q: "Kọmputa na-eji nwayọọ, otu mmemme kwụsịkwara ọnụ. Ezigbo nzọụkwụ mbụ bụ:", options: ["Ịkpọ nọmba dị na pop-up", "Ịchekwa ọrụ gị ma malitegharịa", "Ịwụsa mmiri na ya", "Ịzụta kọmputa ọhụrụ"], answer: 1, why: "Ịmalitegharị na-edozi ọtụtụ nsogbu." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ule ikpeazụ: Nka Mbụ nke Kọmputa",
    questions: [
      { objective: "O1", q: "Kedu akụkụ ị na-ele anya iji hụ ọrụ gị?", options: ["Waya ọkụ", "Mouse", "Ihuenyo (monitor)", "Keyboard"], answer: 2, why: "Ihuenyo na-egosi ihe kọmputa na-eme." },
      { objective: "O1", q: "Laptop bụ:", options: ["Chaja ekwentị", "Ụdị mouse", "Igwe mbipụta", "Kọmputa na-emepe emepe nke ihuenyo na keyboard ya dị ọnụ"], answer: 3, why: "Laptop nwere ihe niile n'otu ma a na-ebu ya ebu." },
      { objective: "O1", q: "Mgbe kọmputa gbanyere, ihe ị na-emekarị bụ:", options: ["Wepụ waya ya", "Jiri okwuntughe ma ọ bụ PIN banye", "Pịa Caps Lock", "Mechie laptop"], answer: 1, why: "Ịbanye na-agwa kọmputa na ọ bụ gị." },
      { objective: "O2", q: "Pointer bụ:", options: ["Folda", "Bọtịnụ ọkụ", "Obere akụ na-eso mouse", "Igodo"], answer: 2, why: "Pointer na-eso mouse." },
      { objective: "O2", q: "Mouse gị eruola na nsọtụ tebụl. Gịnị ka ị na-eme?", options: ["Tụgharịa ya", "Pịa ya ike karịa", "Malitegharịa kọmputa", "Welie ya ma tinyeghachi ya n'etiti"], answer: 3, why: "Iwelite mouse anaghị ebugharị pointer." },
      { objective: "O2", q: "Ịpị aka nri na-egosi:", options: ["Naanị nhọrọ ọkụ", "Obere menu nhọrọ", "Kọmputa ọhụrụ", "Ọ dịghị ihe mgbe ọ bụla"], answer: 1, why: "Ịpị aka nri na-emeghe menu." },
      { objective: "O2", q: "Na trackpad, kedu ka i si akpụgharị?", options: ["Pịa Shift", "Metụ bọtịnụ ọkụ", "Sọọ mkpịsị aka abụọ elu ma ọ bụ ala", "Mechie laptop"], answer: 2, why: "Mkpịsị aka abụọ na-akpụgharị na trackpad." },
      { objective: "O3", q: "Ahịrị na-enwu enwu ebe ihe ị na-ede na-aga bụ:", options: ["Monitor", "Folda", "Dock", "Cursor"], answer: 3, why: "Cursor na-egosi ebe mkpụrụedemede ga-apụta." },
      { objective: "O3", q: "Caps Lock:", options: ["Na-ehichapụ okwu", "Na-eme ka mkpụrụedemede niile bụrụ ukwu ruo mgbe ị pịara ya ọzọ", "Na-echekwa faịlụ", "Na-agbanyụ kọmputa"], answer: 1, why: "Ọ na-ekpochi mkpụrụedemede ukwu." },
      { objective: "O3", q: "Kedu ụzọ mkpirisi na-eweghachi mperi na Windows?", options: ["Ctrl+V", "Ctrl+S", "Ctrl+Z", "Ctrl+P"], answer: 2, why: "Ctrl+Z bụ undo (Command+Z na Mac)." },
      { objective: "O3", q: "A na-eji Enter (Return na Mac):", options: ["Gbanyụọ ihuenyo", "Hichapụ mkpụrụedemede", "Mee mkpụrụedemede ukwu", "Malite ahịrị ọhụrụ"], answer: 3, why: "Enter na-amalite ahịrị ọhụrụ ma ọ bụ na-ekwu gaa." },
      { objective: "O4", q: "Na Mac, kedu ka i nwere ike isi meghee app site n'aha ya?", options: ["Pịa bọtịnụ ọkụ", "Pịa enyo mbụli ihe (Spotlight) ma dee ya", "Pịa ihuenyo aka nri", "Jide Shift"], answer: 1, why: "Spotlight na-achọta app site n'aha ha." },
      { objective: "O4", q: "Na Windows, X dị n'elu aka nri windo:", options: ["Na-emechi ya", "Na-eme ka o buo ibu", "Na-echekwa ya", "Na-ezo ya"], answer: 0, why: "X na-emechi windo." },
      { objective: "O4", q: "Windo e zoro ezo (minimize) na-aga:", options: ["Na taskbar (Windows) ma ọ bụ Dock (Mac)", "N'ime ebe mkpofu ruo mgbe ebighị ebi", "Na igwe mbipụta", "N'ịntanetị"], answer: 0, why: "Pịa akara ya ebe ahụ iji weghachi ya." },
      { objective: "O5", q: "Kedu aha faịlụ kacha mma?", options: ["Questions for Dr Lee", "asdf", "Untitled", "1"], answer: 0, why: "Aha doro anya na-enyere gị aka ịchọta ya ma emechaa." },
      { objective: "O5", q: "App maka ilele faịlụ na Windows bụ:", options: ["File Explorer", "Spotlight", "Dock", "Safari"], answer: 0, why: "File Explorer na-egosi faịlụ na folda." },
      { objective: "O5", q: "Ị nweghị ike icheta ebe i chekwara faịlụ. Ị nwere ike:", options: ["Ịchọ akụkụ aha ya", "Ịmalitegharị ruo mgbe ọ pụtara", "Ịzụta kọmputa ọhụrụ", "Iwepụ mouse"], answer: 0, why: "Ọchụchọ na-achọta faịlụ site n'aha ha." },
      { objective: "O6", q: "Gịnị mere i ji awụnye mmelite?", options: ["Ha na-edozi nsogbu ma mechie oghere nchekwa", "Ha na-ehichapụ faịlụ gị", "Ha na-efu ego oge ọ bụla", "Ha na-eme ka kọmputa jiri nwayọọ ruo mgbe ebighị ebi"], answer: 0, why: "Mmelite na-eme ka nchekwa ka mma ma dozie nsogbu." },
      { objective: "O6", q: "Kedu ka i si agbanyụ Mac n'ụzọ ziri ezi?", options: ["Menu Apple, wee Shut Down", "Wepụ waya ọkụ", "Mechie windo", "Pịa Caps Lock"], answer: 0, why: "Jiri menu Apple gbanyụọ ya n'enweghị nsogbu." },
      { objective: "O6", q: "Pop-up na-ekwu na ị nwere nje ma gwa gị ka ị kpọọ otu nọmba. Ị kwesịrị:", options: ["Akpọla; mechie ya ma jụọ onye ị tụkwasịrị obi", "Kpọọ ozugbo", "Nye ha okwuntughe gị", "Jiri kaadị onyinye (gift card) kwụọ ụgwọ"], answer: 0, why: "Ezi ịdọ aka na ntị anaghị arịọ gị ka ị kpọọ nọmba." }
    ]
  },
  // ---- ADDIE: Nyocha ----
  pretest: {
    title: "Ule mbido: Gịnị ka ị maraworị?",
    from: [
      0,
      2,
      4,
      5,
      8,
      9,
      12,
      13,
      15,
      18
    ]
  },
  rubric: {
    mastery: "Ruru eru ma ọ bụ Karịrị n'ahịrị ọ bụla. Ọ bụrụ na ahịrị bụ Ọ ruchabeghị, dozie akụkụ ahụ ma nwaa ọzọ.",
    criteria: [
      {
        name: "Ịgbanye na ịbanye",
        objective: "O1",
        notYet: "Ọ chọrọ enyemaka iji gbanye kọmputa ma ọ bụ banye.",
        meets: "Ọ na-agbanye kọmputa ma banye n'enweghị onye nyere ya aka.",
        exceeds: "Ọ na-akpọkwa aha akụkụ kọmputa ndị bụ isi."
      },
      {
        name: "Folda na ndetu e chekwara",
        objective: "O5",
        notYet: "Folda Practice ma ọ bụ ndetu e chekwara adịghị, ma ọ bụ ndetu ahụ nwere aha dị ka Untitled.",
        meets: "Folda Practice dị n'ime Documents nwere ndetu ahụ, e chekwara n'aha doro anya.",
        exceeds: "Ọ na-achọta faịlụ ahụ ọzọ site n'igbe ọchụchọ yana site na folda."
      },
      {
        name: "Ide ndetu ahụ",
        objective: "O3",
        notYet: "Ndetu ahụ adịghị, ma ọ bụ ahịrịokwu enweghị mkpụrụedemede ukwu.",
        meets: "Obere ndetu nwere mkpụrụedemede ukwu na mmalite ahịrịokwu ọ bụla, e dozikwara mperi.",
        exceeds: "Ọ na-ejikwa akara edemede dị ka ? ma ọ bụ ! nke ọma ma jiri Ctrl+Z (Command+Z) weghachi mperi."
      },
      {
        name: "Imeghe na imechi app",
        objective: "O4",
        notYet: "Ọ nweghị ike imeghe Notepad ma ọ bụ TextEdit, ma ọ bụ ọ nweghị ike imechi ya.",
        meets: "Ọ na-emeghe app ahụ site n'aha ya, mechie ya, wee chọta ma meghee faịlụ e chekwara.",
        exceeds: "Ọ na-ezokwa windo ahụ ma weghachi ya site na taskbar ma ọ bụ Dock."
      },
      {
        name: "Ịgbanyụ",
        objective: "O6",
        notYet: "E wepụrụ waya kọmputa ma ọ bụ jide bọtịnụ ọkụ.",
        meets: "Ọ na-agbanyụ ya n'ụzọ ziri ezi site na menu Start ma ọ bụ menu Apple.",
        exceeds: "Ọ na-elelekwa mmelite tupu ọ gbanyụọ ya."
      }
    ]
  },
  evaluation: {
    results: [
      "Ndị na-amụ ihe mechara ihe ọmụmụ a ma nweta Ruru eru ma ọ bụ Karịrị n'ahịrị rubric ọ bụla nke ọrụ ikpeazụ",
      "Ndị na-amụ ihe kwuru na ha jiri kọmputa n'onwe ha, dị ka n'ọba akwụkwọ ma ọ bụ n'ebe enyemaka ọrụ, n'ime ụbọchị 30 mgbe ihe ọmụmụ a gwụchara (nnyocha nsochi)",
      "Ndị na-amụ ihe gara n'ihe ọmụmụ ọzọ, dị ka Internet Basics ma ọ bụ Microsoft 365 na Google Docs",
      "Ndị na-amụ ihe kwuru na ha mezuru ezi ọrụ na kọmputa, dị ka akwụkwọ ozi ma ọ bụ arịrịọ ọrụ"
    ]
  },
  // ---- ADDIE: Mmejupụta ----
  implementation: {
    materials: [
      "Kọmputa desktop ma ọ bụ laptop Windows ma ọ bụ Mac nwere mouse ma ọ bụ trackpad",
      "Ozi ịbanye na kọmputa ahụ (site n'ụlọ, ma ọ bụ site n'aka ndị ọrụ ọba akwụkwọ ma ọ bụ ụlọ kọmputa)",
      "Notepad (Windows) ma ọ bụ TextEdit (Mac), nke dịlarịrị na kọmputa",
      "Ihe dị ka nkeji 60 n'ozuzu, n'oge nkenke, gbakwunyere oge mgbakwunye iji mụọ mouse"
    ],
    facilitatorNotes: [
      "Hazie ịbanye tupu klas ka a ghara iji nkuzi mbụ hazie akaụntụ.",
      "Nye ndị ọhụrụ oge mgbakwunye na mouse; hapụ ha ka ha mụọ ịpị na ịpị ugboro abụọ n'akara dị na desktop tupu ha agaa n'ihu.",
      "Kewaa ndị na-eji Windows na ndị na-eji Mac, ma ọ bụ gosi nzọụkwụ abụọ ahụ n'ihuenyo.",
      "Na kọmputa ọha, mee ka ndị na-amụ ihe hichapụ faịlụ omume ha ma pụọ (sign out) na njedebe, ma chetara ha ka ha ghara ichekwa ozi nzuzo ebe ahụ.",
      "Hapụ ndị na-amụ ihe ka ha pịa igodo ọ bụla na bọtịnụ ọ bụla n'onwe ha; ezere ịnapụ ha mouse."
    ]
  }
};
