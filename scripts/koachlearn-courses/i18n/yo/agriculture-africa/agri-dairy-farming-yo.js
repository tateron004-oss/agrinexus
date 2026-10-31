"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-dairy-farming.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const ILRI_MANUAL = { name: "ILRI: Ìwé ìdánilẹ́kọ̀ọ́ fún àwọn àgbẹ̀ kékeré tó ń sin màlúù ìfúnwàrà (Goopy àti Gakige, ILRI Manual 24, ẹ̀dà kejì, 2019)", url: "https://hdl.handle.net/10568/77004" };
const FAO_PRESERVE = { name: "FAO, wàrà àti àwọn ohun tí a fi wàrà ṣe: pípa wàrà mọ́ (mú un tutù dé 4 °C láàárín wákàtí 3 sí 4 lẹ́yìn fífún wàrà)", url: "https://www.fao.org/dairy-production-products/processing/milk-preservation/en" };
const FAO_TESTING = { name: "FAO, wàrà àti àwọn ohun tí a fi wàrà ṣe: dídára wàrà àti àyẹ̀wò rẹ̀", url: "https://www.fao.org/dairy-production-products/products/quality-and-testing/en" };
const FAO_HEALTH = { name: "FAO, wàrà àti àwọn ohun tí a fi wàrà ṣe: ìlera ẹranko (mastitis ń dín iye wàrà àti dídára rẹ̀ kù)", url: "https://www.fao.org/dairy-production-products/production/animal-health/en" };
const MU_CMT = { name: "University of Missouri Extension: Lílo California Mastitis Test (bí a ṣe ń ṣe é àti bí a ṣe ń ka èsì rẹ̀)", url: "https://extension.missouri.edu/publications/g3653" };
const KDB = { name: "Kenya Dairy Board (ó ń ṣàkóso iṣẹ́ wàrà; ó ń fún àwọn tó ń ṣòwò wàrà ní ìwé àṣẹ)", url: "https://www.kdb.go.ke/" };
const KDB_PERMITS = { name: "Kenya Dairy Board: àwọn ohun tí a nílò fún ìwé àṣẹ", url: "https://www.kdb.go.ke/licensing-requirement/" };

module.exports = {
  id: "agri-dairy-farming-yo",
  lang: "yo",
  translationOf: "agri-dairy-farming",
  category: "Agriculture (Africa)",
  name: "Ọ̀sìn Ẹran Ìfúnwàrà: Ṣíṣe Wàrà àti Ìmọ́tótó",
  skills: "Yíyan màlúù àti ewúrẹ́ ìfúnwàrà, Kíkọ́ ilé zero-grazing, Fífún wàrà lọ́nà tó mọ́, Mímọ mastitis àti ṣíṣe àyẹ̀wò rẹ̀, Mímú wàrà tó dára tutù àti títà á, Títọ́ ọmọ màlúù àti ṣíṣírò iye owó lítà kan",
  outcome: "ṣe iṣẹ́ wàrà kékeré tó ń mú wàrà mímọ́ jáde tí olùrà máa gbà: yan màlúù tàbí ewúrẹ́ rẹ kí o sì kọ́ ilé fún wọn, fún wàrà wọn pẹ̀lú ètò ìmọ́tótó, rí mastitis ní kùtùkùtù pẹ̀lú California Mastitis Test, mú wàrà tutù kí o sì ta wàrà tó yege nínú àyẹ̀wò dídára, tọ́ ọmọ màlúù tó ní ìlera, kí o sì ṣírò iye tí lítà kọ̀ọ̀kan ń ná ọ.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn tó ń dàgbà sí i tó ń sin ẹran ìfúnwàrà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, Burkina Faso àti káàkiri Áfíríkà, tí wọ́n ń sin màlúù ìfúnwàrà tàbí ewúrẹ́ ìfúnwàrà, tàbí tí wọ́n fẹ́ bẹ̀rẹ̀. Wàrà tó mọ́ ń tà ní owó tó ga jù, wọn kì í sábà kọ̀ ọ́, ó sì ń dáàbò bo ìlera ìdílé; wàrà tó dọ̀tí àti mastitis tí a kò rí ń jẹ èrè rẹ ní ìkọ̀kọ̀.",
    "Orí 1 ṣètò iṣẹ́ wàrà náà: yíyan ẹran, ilé zero-grazing àti oúnjẹ fún wàrà, àti ètò fífún wàrà tó mọ́. Orí 2 dáàbò bo wàrà náà ó sì tà á: mastitis àti California Mastitis Test, mímú wàrà tutù àti títà á fún ẹgbẹ́ alájọṣe tàbí ilé-iṣẹ́ tó ń ṣe wàrà, àti títọ́ ọmọ màlúù, àkọsílẹ̀ àti iye owó lítà kan. A kọ́ni nípa oúnjẹ ẹran ní kíkún nínú ẹ̀kọ́ \"Oúnjẹ Ẹran Ọ̀sìn àti Ṣíṣe Oúnjẹ pẹ̀lú Ohun Èlò Agbègbè\" (Livestock Nutrition and Feed Formulation with Local Ingredients); níbí, o máa kọ́ bí oúnjẹ ṣe so mọ́ wàrà àti ìnáwó.",
    "Ẹ̀kọ́ yìí kò sọ iye oògùn, àjẹsára tàbí homonu tí a máa fún ẹran, kò sì sọ iye ọjọ́ àkókò ìdádúró. Máa tẹ̀lé dókítà ẹranko rẹ tàbí òṣìṣẹ́ ìlera ẹranko àti ohun tí wọ́n kọ sára oògùn nígbà gbogbo. Àpẹẹrẹ lásán ni iye owó tí a lò; lo iye owó tìrẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan tí o máa ṣe lórí oko rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Ṣe ojú-ewé méjì fún oko wàrà rẹ (tìrẹ, tàbí àpẹẹrẹ bí màlúù 3 ní Kiambu tàbí ewúrẹ́ ìfúnwàrà 10 nítòsí Kumasi). Ojú-ewé 1, ètò ìmọ́tótó fífún wàrà tí o máa lẹ̀ mọ́ ibi fífún wàrà: àwọn ìgbésẹ̀ láti mímúra ẹni tó ń fún wàrà àti àwọn ohun èlò sílẹ̀ títí dé mímú wàrà tutù, àwọn àmì mastitis tí o máa wá, ìgbà tí o máa ṣe CMT, àti ohun tí o máa ṣe sí wàrà ẹran tó ń ṣàìsàn tàbí èyí tí a ń tọ́jú. Ojú-ewé 2, ìwé ìṣirò iye owó lítà kan fún oṣù kan: gbogbo ìnáwó (oúnjẹ àti koríko ẹran, owó òṣìṣẹ́, dókítà ẹranko àti ìbísí, àwọn mìíràn), iye lítà tí o rí, iye owó lítà kan, iye tí olùrà rẹ ń san, àti ìyípadà kan tí o máa ṣe láti dín iye owó lítà kan kù.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn tó ń dàgbà sí i tó ń sin ẹran ìfúnwàrà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà, Ghana, àwọn orílẹ̀-èdè Ìwọ̀-oòrùn Áfíríkà tó ń sọ Faransé àti ibòmíì ní Áfíríkà, tí wọ́n ń sin màlúù 1 sí 20 tàbí agbo ewúrẹ́ ìfúnwàrà kékeré, nígbà púpọ̀ lọ́nà zero-grazing tàbí ìdajì zero-grazing.",
    startingPoint: "Wọ́n lè fún ẹran ní oúnjẹ àti omi, wọ́n lè fi ọwọ́ fún wàrà, wọ́n sì ń ta wàrà ní àdúgbò. Ọ̀pọ̀ ń fún wàrà láìsí ètò ìmọ́tótó tó dúró sójú kan, wọ́n ń lo ohun èlò ike, ìgbà tí wàrà bá ti bàjẹ́ ni wọ́n máa ń rí mastitis, wọn kò sì mọ iye tí lítà kan ń ná wọn láti ṣe.",
    gap: "Àwọn olùrà àti ẹgbẹ́ alájọṣe ń yẹ wàrà wò, wọ́n sì ń kọ̀ tàbí san owó díẹ̀ fún wàrà tó ti kan, tí a ti da omi sí tàbí tí oògùn kù sínú rẹ̀. Mastitis tí a kò rí (subclinical) ń dín iye wàrà kù láìsí àmì tí a lè rí. Àwọn àgbẹ̀ nílò ètò tó ń mú wàrà mímọ́ tó tutù jáde, ọ̀nà láti rí mastitis ní kùtùkùtù, àti àkọsílẹ̀ tó ń fi hàn bóyá lítà kọ̀ọ̀kan ń mú èrè wá.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ẹ̀kọ́ náà tún wà ní èdè Spanish, Faransé àti Lárúbáwá",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone; ẹ̀rọ ìṣirò; àkọsílẹ̀ lórí ìwé dára",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6 tó bá àkókò fífún wàrà mu",
      "Kò sí iná mànàmáná tàbí ẹ̀rọ amú-wàrà-tutù ní ọ̀pọ̀ oko",
      "Ìlera ẹranko: kò sí iye oògùn, àjẹsára tàbí homonu, kò sì sí iye ọjọ́ ìdádúró; tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára oògùn",
      "Àpẹẹrẹ ni iye owó; iye owó, ìwé àṣẹ àti òfin olùrà yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè àti láti olùrà sí olùrà"
    ],
    prerequisites: "Kò sí. \"Ìlera àti Ìtọ́jú Ẹran Ọ̀sìn\" (àyẹ̀wò ìlera ojoojúmọ́) àti \"Oúnjẹ Ẹran Ọ̀sìn àti Ṣíṣe Oúnjẹ pẹ̀lú Ohun Èlò Agbègbè\" (ìpín oúnjẹ) wúlò láti kà pẹ̀lú rẹ̀."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ilẹ̀, owó, koríko ẹran àti ọjà tí o ní", action: "yan màlúù tàbí ewúrẹ́ ìfúnwàrà kí o sì ṣètò ilé zero-grazing pẹ̀lú ibùdúró, ọpọ́n oúnjẹ, omi àti ọ̀nà tí omi ẹ̀gbin ń gbà ṣàn lọ", standard: "kí o sì dárúkọ ó kéré tán àyẹ̀wò mẹ́rin tí o ṣe kí o tó rà" },
    { id: "O2", condition: "Ní gbogbo ìgbà tí o bá ń fún wàrà", action: "ṣe ètò fífún wàrà tó mọ́, láti mímúra ẹni tó ń fún wàrà àti àwọn ohun èlò sílẹ̀ títí dé sísẹ́ wàrà àti bíbò ó", standard: "kí o sì ṣe gbogbo ìgbésẹ̀ ní ìtẹ̀léra láìfo ìgbésẹ̀ kankan" },
    { id: "O3", condition: "Pẹ̀lú màlúù tàbí ewúrẹ́ tó ń fún wàrà", action: "wá àwọn àmì mastitis kí o sì ṣe California Mastitis Test lórí orí ọmú kọ̀ọ̀kan", standard: "kí o sì kọ èsì ìdá ọmú kọ̀ọ̀kan sílẹ̀, kí o sì pe dókítà ẹranko fún ẹran èyíkéyìí tí àyẹ̀wò fi àrùn hàn tàbí tó ń ṣàìsàn" },
    { id: "O4", condition: "Lẹ́yìn fífún wàrà, pẹ̀lú ẹ̀rọ amú-wàrà-tutù tàbí láìsí rẹ̀", action: "mú wàrà tutù, tọ́jú rẹ̀ kí o sì gbé e lọ kí ó lè yege nínú àyẹ̀wò dídára olùrà", standard: "kí ó sì dé ọ̀dọ̀ ẹ̀rọ amú-wàrà-tutù tàbí olùrà láàárín àkókò tí olùrà fi lélẹ̀, láìfi ohunkóhun kún wàrà náà" },
    { id: "O5", condition: "Pẹ̀lú àkọsílẹ̀ oko fún oṣù kan", action: "ṣírò iye owó lítà wàrà kan kí o sì fi wé iye tí olùrà rẹ ń san", standard: "pẹ̀lú gbogbo ìnáwó nínú rẹ̀ àti ìṣirò tó tọ̀nà" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣíṣètò oko wàrà tó mọ́",
      lessons: [
        {
          title: "Yíyan màlúù àti ewúrẹ́ ìfúnwàrà",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan ẹran ìfúnwàrà tó bá oúnjẹ, owó àti ọjà rẹ mu.",
          text: [
            "Bí oúnjẹ àti ìtọ́jú tí o lè fún ẹran ìfúnwàrà ṣe dára tó ni wàrà rẹ̀ ṣe máa pọ̀ tó. Màlúù Friesian (Holstein) tó ń fún wàrà púpọ̀ nílò oúnjẹ dáadáa púpọ̀ àti omi lójoojúmọ́; tí o kò bá lè pèsè rẹ̀, àdàpọ̀ pẹ̀lú irú ẹran ìbílẹ̀, tàbí irú ẹran kékeré bí Jersey tàbí Ayrshire, lè mú owó púpọ̀ wá fún ọ jù. Ní àwọn agbègbè tó gbẹ, irú ẹran ìbílẹ̀ tó le àti àwọn àdàpọ̀ wọn, bí àdàpọ̀ zebu ní àríwá Nàìjíríà tàbí zebu Azawak ní Niger àti Burkina Faso, máa ń fara da ooru àti koríko tí kò dára jù.",
            "Ewúrẹ́ ìfúnwàrà bá ilẹ̀ kékeré àti owó díẹ̀ mu. Wọ́n ń jẹ díẹ̀, wọn kò wọ́n tó, wàrà ewúrẹ́ sì ní àwọn olùrà tirẹ̀. Ní Kenya, a ń sin ewúrẹ́ Saanen, Toggenburg àti Alpine àti àdàpọ̀ wọn pẹ̀lú ewúrẹ́ ìbílẹ̀ fún wàrà.",
            "Kí o tó rà, yẹ̀ wò: Ṣé o ní koríko ẹran àti omi jálẹ̀ ọdún, pẹ̀lú ìgbà ẹ̀ẹ̀rùn? Ta ló máa ra wàrà rẹ, ní iye wo? Ṣé o lè dé ọ̀dọ̀ dókítà ẹranko àti iṣẹ́ ìfàtọ̀sínú lọ́nà ìgbàlódé (AI)? Lẹ́yìn náà yẹ ẹran náà wò: rà á lọ́wọ́ àgbẹ̀ tí o mọ̀ tó ní àkọsílẹ̀, wá ẹran tó ní ìlera, tó jí pépé, tí ọmú rẹ̀ rí dáadáa, tí orí ọmú mẹ́rin (màlúù) tàbí méjì (ewúrẹ́) rẹ̀ ń ṣiṣẹ́, béèrè nípa iye wàrà tó ti ń fún tẹ́lẹ̀, ìbímọ àti àìsàn rẹ̀, kí o sì ní kí dókítà ẹranko tàbí òṣìṣẹ́ ìlera ẹranko yẹ̀ ẹ́ wò kí o tó sanwó."
          ],
          steps: ["Kọ koríko ẹran àti omi rẹ sílẹ̀ fún ìgbà òjò àti ìgbà ẹ̀ẹ̀rùn.", "Wá olùrà rẹ àti iye owó lítà kan.", "Wá dókítà ẹranko àti iṣẹ́ AI tó sún mọ́ ọ jù.", "Yan irú ẹran tàbí àdàpọ̀ tí oúnjẹ rẹ lè gbé ró.", "Rà lọ́wọ́ ẹni tí o mọ̀ tó ní àkọsílẹ̀; yẹ ọmú, orí ọmú àti ìlera wò.", "Ní kí dókítà ẹranko yẹ ẹran náà wò kí o tó sanwó."],
          words: [["Irú ẹran ìfúnwàrà (dairy breed)", "irú ẹran tí a ń sin fún wàrà ní pàtàkì, bí màlúù Friesian, Jersey tàbí Ayrshire, tàbí ewúrẹ́ Saanen àti Toggenburg."], ["Àdàpọ̀ (cross)", "ẹran tí àwọn òbí rẹ̀ jẹ́ irú ẹran méjì tó yàtọ̀, nígbà púpọ̀ irú ẹran ìfúnwàrà láti òkèèrè àti irú ẹran ìbílẹ̀."], ["Ìfàtọ̀sínú lọ́nà ìgbàlódé (AI)", "fífi àtọ̀ akọ màlúù tàbí òbúkọ tí a yàn sínú abo ẹran; òṣìṣẹ́ tí a ti kọ́ ló ń ṣe é."]],
          slides: [
            { title: "Oúnjẹ ló ń pinnu irú ẹran", bullets: ["Ẹran tó ń fún wàrà púpọ̀ nílò oúnjẹ dáadáa àti omi púpọ̀", "Àdàpọ̀ àti irú ẹran kékeré bá oúnjẹ díẹ̀ mu", "Irú ẹran ìbílẹ̀ tó le ń fara da ooru àti ẹ̀ẹ̀rùn"] },
            { title: "Ewúrẹ́ ìfúnwàrà", bullets: ["Oúnjẹ díẹ̀, owó díẹ̀, ààyè díẹ̀", "Saanen, Toggenburg, Alpine àti àdàpọ̀ wọn", "Kọ́kọ́ wá àwọn tó ń ra wàrà ewúrẹ́"] },
            { title: "Kí o tó rà", bullets: ["Koríko ẹran àti omi jálẹ̀ ọdún?", "Olùrà àti iye owó lítà kan?", "Dókítà ẹranko àti iṣẹ́ AI tí o lè dé?"] },
            { title: "Yẹ ẹran náà wò", bullets: ["Ẹni tí o mọ̀ tó ní àkọsílẹ̀", "Ìlera, ó jí pépé; ọmú dáadáa; gbogbo orí ọmú ń ṣiṣẹ́", "Dókítà ẹranko yẹ̀ ẹ́ wò kí o tó sanwó"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Kọ àkọsílẹ̀ ohun tí o máa yẹ̀ wò kí o tó rà: koríko ẹran àti omi rẹ fún ìgbà ẹ̀ẹ̀rùn, olùrà rẹ àti iye owó, dókítà ẹranko àti iṣẹ́ AI tó sún mọ́ ọ jù, irú ẹran tàbí àdàpọ̀ tí o lè bọ́, àti nǹkan márùn-ún tí o máa yẹ̀ wò lára ẹran náà kí o tó sanwó.",
          youCanNow: "yan irú ẹran ìfúnwàrà tó bá oúnjẹ àti ọjà rẹ mu, kí o sì yẹ ẹran wò dáadáa kí o tó rà á.",
          quickCheck: [
            { objective: "O1", q: "O kò ní koríko ẹran púpọ̀ ní ìgbà ẹ̀ẹ̀rùn. Èwo ni ọgbọ́n jù?", options: ["Ra Friesian tó ń fún wàrà jù lọ tí o bá rí", "Ra àdàpọ̀ tàbí irú ẹran kékeré tí oúnjẹ rẹ lè gbé ró", "Ra màlúù púpọ̀ kí díẹ̀ lè yè", "Ra báyìí kí o ṣètò koríko ẹran lẹ́yìn náà"], answer: 1, why: "Màlúù máa ń fún wàrà tó bá oúnjẹ rẹ̀ mu nìkan; àdàpọ̀ tàbí irú ẹran kékeré bá koríko díẹ̀ mu." },
            { objective: "O1", q: "Àyẹ̀wò wo ni o gbọ́dọ̀ ṣe kí o tó sanwó fún màlúù?", options: ["Ní kí dókítà ẹranko yẹ̀ ẹ́ wò kí o sì wo àkọsílẹ̀ rẹ̀", "Ka àwọn àmì ara rẹ̀", "Wo àwọ̀ rẹ̀ nìkan", "Béèrè lọ́wọ́ ẹni tó ń tà á bóyá ó dára"], answer: 0, why: "Àyẹ̀wò dókítà ẹranko àti àkọsílẹ̀ ń fi ìlera, iye wàrà àtẹ̀yìnwá àti ìbímọ hàn." }
          ]
        },
        {
          title: "Ilé zero-grazing àti oúnjẹ fún wàrà",
          objectives: ["O1"],
          minutes: 6,
          goal: "Ṣètò ilé zero-grazing kí o sì ṣètò oúnjẹ àti omi fún wàrà.",
          text: [
            "Nínú zero-grazing, àwọn ẹran ń dúró nínú ilé wọn, ìwọ ni o sì ń gbé oúnjẹ wá bá wọn, bí koríko Napier tí a gé, koríko ẹran mìíràn àti pòròpórò oko. Ó ń dín ilẹ̀ tí o nílò kù, ó sì ń jẹ́ kí o ṣàkóso oúnjẹ, ṣùgbọ́n ó nílò iṣẹ́ ojoojúmọ́ àti ìmọ́tótó dáadáa.",
            "Ilé tó dára ní: òrùlé fún ibòji àti òjò; ibùdúró fún màlúù kọ̀ọ̀kan pẹ̀lú ibùsùn tó gbẹ tó sì rọ̀ kí ó lè dùbúlẹ̀; ilẹ̀ tó tẹ̀ díẹ̀ kí ìtọ̀ àti omi lè ṣàn lọ; ọpọ́n oúnjẹ àti ọpọ́n omi tó rọrùn láti fọ̀; ibi mímọ́ tó dá wà fún fífún wàrà; ilé ọmọ màlúù; kòtò ìgbẹ́ tó jìnnà sí ibi fífún wàrà; àti ilé ìkẹ́rùsí fún oúnjẹ. Fún ewúrẹ́, ilẹ̀ onípákó tí a gbé sókè ń jẹ́ kí wọ́n gbẹ. Kó ìgbẹ́ kúrò lójoojúmọ́, nítorí ibùsùn tó dọ̀tí jẹ́ ọ̀kan pàtàkì nínú ohun tó ń fa mastitis.",
            "Oúnjẹ àti omi ni a fi ń ṣe wàrà. Màlúù tó ń fún wàrà nílò omi mímọ́ púpọ̀ jálẹ̀ ọjọ́, koríko tó dára (roughage), àti agbára, protein àti mineral àfikún tó dọ́gba; wàrà máa ń dín kù kíákíá tí omi tàbí oúnjẹ bá tán. A kọ́ni bí a ṣe ń ṣe ìpín oúnjẹ láti inú oúnjẹ agbègbè nínú \"Oúnjẹ Ẹran Ọ̀sìn àti Ṣíṣe Oúnjẹ pẹ̀lú Ohun Èlò Agbègbè\". Níbí, rántí nǹkan méjì: kọ iye owó oúnjẹ kọ̀ọ̀kan sílẹ̀, nítorí oúnjẹ ni ìnáwó rẹ tó pọ̀ jù lọ nígbà púpọ̀, kí o sì máa yí oúnjẹ padà díẹ̀díẹ̀."
          ],
          steps: ["Sàmì sí ibi tí o máa kọ́ ilé olórùlé sí, lórí ilẹ̀ tí omi kì í dúró sí.", "Fún ẹran kọ̀ọ̀kan ní ibùdúró pẹ̀lú ibùsùn tó gbẹ àti ilẹ̀ tó tẹ̀ díẹ̀.", "Gbé ọpọ́n oúnjẹ àti ọpọ́n omi sí ibi tó rọrùn láti kún àti láti fọ̀.", "Fi ibi mímọ́ fún fífún wàrà, ilé ọmọ màlúù àti ilé ìkẹ́rùsí oúnjẹ kún un.", "Gbé kòtò ìgbẹ́ jìnnà sí ibi fífún wàrà àti omi.", "Kó ìgbẹ́ kúrò lójoojúmọ́; kọ oúnjẹ tí o rà àti iye owó rẹ̀ sílẹ̀."],
          words: [["Zero-grazing", "sísin ẹran nínú ilé wọn àti gbígbé gbogbo oúnjẹ wọn wá bá wọn dípò kí wọ́n máa jẹ̀ kiri."], ["Ibùsùn ẹran (bedding)", "ohun tó gbẹ tó sì rọ̀ lórí ilẹ̀ níbi tí ẹran ń dùbúlẹ̀, bí èérún igi, koríko gbígbẹ tàbí iyanrìn."], ["Roughage", "oúnjẹ ẹran tó pọ̀ tó sì ní okun, bí koríko, koríko ẹran, koríko gbígbẹ (hay) àti pòròpórò oko."]],
          slides: [
            { title: "Zero-grazing", bullets: ["Ẹran ń dúró nínú ilé; ìwọ ni o ń gbé oúnjẹ wá", "Ó ń dín ilẹ̀ kù; o ń ṣàkóso oúnjẹ", "Ó nílò iṣẹ́ ojoojúmọ́ àti ìmọ́tótó"] },
            { title: "Ilé tó dára", bullets: ["Òrùlé; ibùdúró kan fún màlúù kan; ibùsùn tó gbẹ", "Ilẹ̀ tó tẹ̀ díẹ̀ tí omi ń ṣàn kúrò lórí rẹ̀", "Ọpọ́n oúnjẹ àti omi tó rọrùn láti fọ̀"] },
            { title: "Jẹ́ kí ó mọ́", bullets: ["Ibi mímọ́ tó dá wà fún fífún wàrà", "Ilé ọmọ màlúù; ilé ìkẹ́rùsí oúnjẹ", "Kòtò ìgbẹ́ jìnnà sí ibi fífún wàrà; máa fọ̀ ọ́ lójoojúmọ́"] },
            { title: "Oúnjẹ ló ń ṣe wàrà", bullets: ["Omi mímọ́ púpọ̀ jálẹ̀ ọjọ́", "Roughage pẹ̀lú agbára, protein àti mineral tó dọ́gba", "Kọ owó oúnjẹ sílẹ̀; yí oúnjẹ padà díẹ̀díẹ̀"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Ya àwòrán ilé zero-grazing rẹ (tàbí èyí tí o máa kọ́) lọ́nà tó rọrùn: ibùdúró, ibùsùn ẹran, bí ilẹ̀ ṣe tẹ̀, ọpọ́n oúnjẹ, ọpọ́n omi, ibi fífún wàrà, ilé ọmọ màlúù, ilé ìkẹ́rùsí oúnjẹ àti kòtò ìgbẹ́. Sàmì sí ohun kan tí o máa kọ́kọ́ tún ṣe.",
          youCanNow: "ṣètò ilé zero-grazing tó ń jẹ́ kí ẹran gbẹ kí ó sì mọ́, kí o sì ṣàlàyé bí oúnjẹ àti omi ṣe ń di wàrà.",
          quickCheck: [
            { objective: "O1", q: "Kí nìdí tí ilẹ̀ ibùdúró zero-grazing fi gbọ́dọ̀ tẹ̀ díẹ̀?", options: ["Kí màlúù lè yọ̀ jáde", "Kí ìtọ̀ àti omi lè ṣàn lọ kí ibùsùn sì gbẹ", "Láti dín sìmẹ́ńtì kù", "Kí oúnjẹ lè yí lọ bá màlúù"], answer: 1, why: "Ilẹ̀ àti ibùsùn tó gbẹ ń jẹ́ kí ọmú mọ́, ó sì ń dín mastitis kù." },
            { objective: "O1", q: "Níbo ni kòtò ìgbẹ́ gbọ́dọ̀ wà?", options: ["Lẹ́gbẹ̀ẹ́ ọpọ́n omi", "Nínú ibi fífún wàrà", "Jìnnà sí ibi fífún wàrà àti omi", "Lábẹ́ ilé ìkẹ́rùsí oúnjẹ"], answer: 2, why: "Ìgbẹ́ tó wà nítòsí ibi fífún wàrà tàbí omi ń tan ẹ̀gbin àti kòkòrò àrùn sínú wàrà." }
          ]
        },
        {
          title: "Ètò fífún wàrà tó mọ́",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fún wàrà màlúù tàbí ewúrẹ́ pẹ̀lú ètò tó mọ́, ní ìgbésẹ̀ kọ̀ọ̀kan.",
          text: [
            "Kòkòrò àrùn ń wọ inú wàrà láti ọwọ́ tó dọ̀tí, ọmú tó dọ̀tí, ohun èlò tó dọ̀tí àti afẹ́fẹ́ ilé ẹran tó dọ̀tí. Ètò kan tí o ń ṣe bákan náà ní gbogbo ìgbà tí o bá ń fún wàrà ń dí wọn lọ́nà. Máa fún wàrà ní àkókò kan náà lójoojúmọ́, ní ibi tó mọ́, pẹ̀lú ìfarabalẹ̀: ẹran tí ẹ̀rù ń bà máa ń tú wàrà díẹ̀ sílẹ̀.",
            "Lo ohun èlò irin tó jọ̀lọ̀ (aluminium tàbí stainless steel) tó rọrùn láti fọ̀. Jerrican ike máa ń ní àpá, ó sì ń di ẹ̀gbin mú, ọ̀pọ̀ olùrà sì ń kọ wàrà tí a gbé wá nínú rẹ̀. Fọ ohun èlò lẹ́yìn ìlò kọ̀ọ̀kan pẹ̀lú omi mímọ́ àti ọṣẹ ìfọṣọ, ṣàn án, kí o sì dorí rẹ̀ kodò sórí àgbéká nínú oòrùn kí ó gbẹ.",
            "Kọ́kọ́ fún wàrà ẹran tó ní ìlera, kí o sì fún wàrà ẹran tó ń ṣàìsàn tàbí èyí tí a ń tọ́jú kẹ́yìn. Ya wàrà ẹran tí a fún ní oògùn sọ́tọ̀, má sì ṣe tà á títí àkókò ìdádúró tí a kọ sára oògùn, tàbí tí dókítà ẹranko rẹ sọ, yóò fi kọjá."
          ],
          steps: ["Wọ aṣọ tó mọ́; jẹ́ kí èékánná rẹ kúrú; fi ọṣẹ fọ ọwọ́ rẹ.", "Mú ohun èlò irin tó mọ́ tó sì gbẹ wá, pẹ̀lú strip cup àti asẹ́ tàbí ajọ̀ tó mọ́.", "So ẹran náà tàbí jẹ́ kí ó farabalẹ̀ ní ibi fífún wàrà tó mọ́.", "Fọ orí ọmú (àti ọmú fúnra rẹ̀ tó bá dọ̀tí nìkan) pẹ̀lú omi lílọ́wọ́ọ́wọ́ tó mọ́, kí o sì fi aṣọ tàbí bébà mímọ́ ọ̀tọ̀ nù ún gbẹ fún ẹran kọ̀ọ̀kan.", "Fún wàrà àkọ́kọ́ láti orí ọmú kọ̀ọ̀kan sínú strip cup kí o sì wò bóyá ó ní ìdì, èérún, tàbí bóyá ó ṣàn bí omi.", "Fún wàrà kíákíá àti tán pátá pẹ̀lú gbogbo ọwọ́, kì í ṣe nípa fífa pẹ̀lú ìka.", "Ri orí ọmú bọ teat dip tàbí fín in lẹ́yìn fífún wàrà tí dókítà ẹranko bá gbà ọ́ nímọ̀ràn bẹ́ẹ̀, kí o sì fún ẹran ní oúnjẹ kí ó lè dúró fún ìgbà díẹ̀.", "Sẹ́ wàrà náà, bò ó, kí o sì bẹ̀rẹ̀ sí mú un tutù lẹ́sẹ̀kẹsẹ̀."],
          words: [["Strip cup", "ife tí ó ní àwo dúdú tàbí aṣọ dúdú lórí; wàrà àkọ́kọ́ tí a fún sórí rẹ̀ ń fi ìdì tàbí èérún hàn."], ["Teat dip", "omi apakòkòrò tí a ń ri orí ọmú bọ̀ lẹ́yìn fífún wàrà láti pa kòkòrò àrùn; lo èyí tí dókítà ẹranko rẹ dámọ̀ràn, bí a ṣe kọ ọ́ sára rẹ̀."], ["Àkókò ìdádúró (withdrawal period)", "àkókò lẹ́yìn tí a fún ẹran ní oògùn tí a kò gbọ́dọ̀ ta tàbí jẹ wàrà tàbí ẹran rẹ̀; a kọ ọ́ sára oògùn, tàbí dókítà ẹranko ló ń sọ ọ́."]],
          slides: [
            { title: "Ibi tí kòkòrò àrùn ti ń wá", bullets: ["Ọwọ́ àti ọmú tó dọ̀tí", "Ohun èlò tó dọ̀tí", "Ilé ẹran tó dọ̀tí tó kún fún eruku"] },
            { title: "Kí o tó fún wàrà", bullets: ["Aṣọ mímọ́, èékánná kúkúrú, fọ ọwọ́", "Ohun èlò irin tó mọ́ tó sì gbẹ", "Fọ orí ọmú kí o nù ún gbẹ: aṣọ kan fún ẹran kan"] },
            { title: "Nígbà tí o bá ń fún wàrà", bullets: ["Strip cup: yẹ wàrà àkọ́kọ́ wò", "Fún un kíákíá àti tán pátá, pẹ̀lú gbogbo ọwọ́", "Ẹran tó ní ìlera kọ́kọ́, èyí tó ń ṣàìsàn tàbí tí a ń tọ́jú kẹ́yìn"] },
            { title: "Lẹ́yìn fífún wàrà", bullets: ["Teat dip tí dókítà ẹranko bá gbà ọ́ nímọ̀ràn", "Sẹ́ wàrà, bò ó, kí o sì mú un tutù lẹ́sẹ̀kẹsẹ̀", "Ẹran tí a ń tọ́jú: má tà á títí àkókò tí a kọ sára oògùn"] }
          ],
          sources: [ILRI_MANUAL, FAO_TESTING],
          tryIt: "Wo ẹni tó ń fún wàrà lẹ́ẹ̀kan lórí oko rẹ, tàbí kí o ṣe é fúnra rẹ, kí o sì sàmì sí ìgbésẹ̀ kọ̀ọ̀kan nínú ẹ̀kọ́ yìí. Kọ gbogbo ìgbésẹ̀ tí a fò sílẹ̀ àti ìyípadà kan tí o máa ṣe lọ́la, bí aṣọ ìnura kan fún ẹran kan tàbí agolo irin dípò jerrican.",
          youCanNow: "fún wàrà màlúù tàbí ewúrẹ́ pẹ̀lú ètò tó mọ́ tó ń dí kòkòrò àrùn lọ́nà kúrò nínú wàrà.",
          quickCheck: [
            { objective: "O2", q: "Kí nìdí tí a fi ń fún wàrà àkọ́kọ́ sínú strip cup?", options: ["Láti fi bọ́ ológbò", "Òun ni wàrà tó lọ́ràá jù", "Láti rí ìdì tàbí èérún tó ń fi mastitis hàn", "Láti mú kí màlúù farabalẹ̀"], answer: 2, why: "Strip cup ń fi wàrà tí kò dára hàn ní kùtùkùtù, kí ó tó dàpọ̀ mọ́ wàrà tó dára." },
            { objective: "O2", q: "Dókítà ẹranko tọ́jú màlúù kan ní ọjọ́ méjì sẹ́yìn. Kí ni o máa ṣe sí wàrà rẹ̀?", options: ["Dà á pọ̀ mọ́ àwọn yòókù; díẹ̀ kò burú", "Tà á fún olùrà mìíràn", "Fún ọmọ rẹ̀ mu láìbéèrè", "Yà á sọ́tọ̀, má sì tà á títí àkókò ìdádúró tí a kọ sára oògùn tàbí tí dókítà ẹranko sọ yóò fi kọjá"], answer: 3, why: "Oògùn tó kù nínú wàrà ń mú kí wàrà léwu, àwọn olùrà sì ń yẹ̀ ẹ́ wò; ohun tí a kọ sára oògùn tàbí dókítà ẹranko ló ń sọ àkókò ìdúró." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣíṣètò oko wàrà tó mọ́",
        questions: [
          { objective: "O1", q: "Kí ló yẹ kí ó pinnu irú ẹran ìfúnwàrà tí o máa rà?", options: ["Oúnjẹ, omi àti ìtọ́jú tí o lè fún un jálẹ̀ ọdún", "Àwọ̀ tí o fẹ́ràn jù", "Ohun tí aládùúgbò rẹ rà", "Ẹran tí owó rẹ̀ kéré jù ní ọjà"], answer: 0, why: "Ẹran ìfúnwàrà máa ń fún wàrà tó bá oúnjẹ àti ìtọ́jú rẹ̀ mu nìkan." },
          { objective: "O1", q: "Èwo ni KÌ Í ṣe ara ilé zero-grazing tó dára?", options: ["Ibùsùn tó gbẹ ní ibùdúró kọ̀ọ̀kan", "Ilẹ̀ tí omi ń ṣàn kúrò lórí rẹ̀", "Kòtò ìgbẹ́ lẹ́gbẹ̀ẹ́ ibi fífún wàrà", "Ọpọ́n oúnjẹ àti omi tó rọrùn láti fọ̀"], answer: 2, why: "A gbọ́dọ̀ jẹ́ kí ìgbẹ́ jìnnà sí ibi fífún wàrà kí kòkòrò àrùn má bàa wọ inú wàrà." },
          { objective: "O2", q: "Ohun èlò wo ló dára jù fún wàrà?", options: ["Jerrican ike", "Agolo aluminium tàbí stainless steel tó mọ́ tó sì jọ̀lọ̀", "Garawa ọ̀dà àtijọ́", "Ohun èlò èyíkéyìí tó ní ìdérí"], answer: 1, why: "Irin tó jọ̀lọ̀ rọrùn láti fọ̀; ike máa ń ní àpá ó sì ń di ẹ̀gbin mú." },
          { objective: "O2", q: "Báwo ni o ṣe gbọ́dọ̀ nu orí ọmú gbẹ kí o tó fún wàrà?", options: ["Pẹ̀lú aṣọ ìnura kan tí gbogbo ẹran ń lò", "Fi wọ́n sílẹ̀ bí wọ́n ṣe rin", "Pẹ̀lú aṣọ tí o wọ̀", "Pẹ̀lú aṣọ tàbí bébà mímọ́ ọ̀tọ̀ fún ẹran kọ̀ọ̀kan"], answer: 3, why: "Aṣọ ìnura tí gbogbo ẹran ń lò ń gbé kòkòrò mastitis láti ẹran kan lọ sí òmíràn." },
          { objective: "O2", q: "Ní ìtẹ̀léra wo ni o gbọ́dọ̀ fún wàrà àwọn ẹran rẹ?", options: ["Ẹran tó ní ìlera kọ́kọ́, ẹran tó ń ṣàìsàn tàbí tí a ń tọ́jú kẹ́yìn", "Ẹran tó ń ṣàìsàn kọ́kọ́", "Ìtẹ̀léra èyíkéyìí", "Èyí tí ọjọ́ orí rẹ̀ kéré jù kọ́kọ́"], answer: 0, why: "Fífún wàrà ẹran tó ń ṣàìsàn kẹ́yìn ń dá kòkòrò àrùn dúró kí ó má tàn dé ọmú ẹran tó ní ìlera." }
        ]
      }
    },
    {
      name: "Orí 2: Ọmú tó ní ìlera, wàrà tí kò léwu àti èrè",
      lessons: [
        {
          title: "Mastitis: àmì, ìdènà àti CMT",
          objectives: ["O3"],
          minutes: 6,
          goal: "Yẹ ẹran wò fún mastitis kí o sì ṣe California Mastitis Test.",
          text: [
            "Mastitis jẹ́ àkóràn àti wíwú ọmú ẹran. Ó ń dín iye wàrà àti dídára rẹ̀ kù, ó sì jẹ́ ọ̀kan lára àwọn àrùn ẹran ìfúnwàrà tó ń náni lówó jù. Mastitis tí a lè rí (clinical) ń fi ara hàn báyìí: ìdá ọmú kan gbóná, ó wú tàbí ó ń dunni; wàrà ní ìdì tàbí èérún, ó ṣàn bí omi tàbí ẹ̀jẹ̀ wà nínú rẹ̀; nígbà mìíràn ibà àti àìfẹ́ jẹun. Mastitis tí a kò rí (subclinical) kò ní àmì kankan tí o lè rí, ṣùgbọ́n ẹran náà ń fún wàrà díẹ̀. Ìdí nìyẹn tí o fi ń ṣe àyẹ̀wò.",
            "California Mastitis Test (CMT) ń rí mastitis tí a kò rí lórí oko. O nílò pákó ìdánwò onífe mẹ́rin (paddle) àti omi CMT (reagent). Fún wàrà díẹ̀ láti orí ọmú kọ̀ọ̀kan sínú ife tirẹ̀, fi reagent tó pọ̀ bákan náà sí i, yí i po, kí o sì ka èsì rẹ̀ láàárín ìṣẹ́jú-àáyá díẹ̀. Wàrà tó bá ṣì ṣàn bí omi dára. Tí ó bá ki bí jẹ́lì, tí ó yọ̀ bí ikun tàbí tí ó dì, iye sẹ́ẹ̀lì inú rẹ̀ ga, èyí sì ń tọ́ka sí mastitis ní ìdá ọmú yẹn. Bí jẹ́lì náà bá ṣe ki tó, bẹ́ẹ̀ ni ìhùwàsí náà ṣe lágbára tó. Má ṣe àyẹ̀wò ní ọjọ́ díẹ̀ àkọ́kọ́ lẹ́yìn ìbímọ, nígbà tí èsì máa ń ga fúnra rẹ̀. Wàrà ewúrẹ́ lè fi ìhùwàsí tó lágbára jù hàn kódà nígbà tí ewúrẹ́ ní ìlera, nítorí náà béèrè lọ́wọ́ dókítà ẹranko rẹ bí o ṣe máa ka èsì fún ewúrẹ́.",
            "Dènà mastitis pẹ̀lú ibùsùn tó mọ́ tó sì gbẹ, ètò fífún wàrà tó mọ́, teat dip tí dókítà ẹranko rẹ bá gbà ọ́ nímọ̀ràn, fífún wàrà ẹran tó ní àkóràn kẹ́yìn, àti títọ́jú ẹran pẹ̀lú ìmọ̀ràn dókítà ẹranko nìkan. Má ṣe fún ẹran ní antibiotics fúnra rẹ láéláé: tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára oògùn. Kọ gbogbo àrùn àti gbogbo ìtọ́jú sílẹ̀."
          ],
          steps: ["Wò ó kí o sì fọwọ́ kàn án: ìdá ọmú kọ̀ọ̀kan, bóyá ó gbóná, ó wú tàbí ó ń dunni.", "Yẹ wàrà àkọ́kọ́ wò lórí strip cup fún ìdì, èérún tàbí ẹ̀jẹ̀.", "Fún CMT: da wàrà àkọ́kọ́ nù, lẹ́yìn náà fún wàrà díẹ̀ láti orí ọmú kọ̀ọ̀kan sínú ife tirẹ̀.", "Tẹ pákó náà kí iye tó tọ́ ṣẹ́kù; fi reagent tó pọ̀ bákan náà sí i.", "Yí i po jẹ́jẹ́ kí o sì kà á láàárín ìṣẹ́jú-àáyá díẹ̀: tó bá ṣàn bí omi, ó dára; jẹ́lì túmọ̀ sí ìhùwàsí.", "Kọ èsì ìdá ọmú kọ̀ọ̀kan tàbí ìdajì kọ̀ọ̀kan sílẹ̀.", "Pe dókítà ẹranko rẹ fún àrùn tí a lè rí tàbí èsì tó fi àrùn hàn; tẹ̀lé dókítà ẹranko àti ohun tí a kọ sára oògùn."],
          words: [["Mastitis", "àkóràn àti wíwú ọmú ẹran tó ń dín iye wàrà àti dídára rẹ̀ kù."], ["Mastitis tí a kò rí (subclinical)", "mastitis tí kò ní àmì tí a lè rí; àyẹ̀wò bí CMT nìkan ló ń fi hàn."], ["Ìdá ọmú (quarter)", "ọ̀kan nínú apá mẹ́rin ọmú màlúù, tí ọ̀kọ̀ọ̀kan ní orí ọmú tirẹ̀."], ["Reagent", "omi tí a ń lò nínú àyẹ̀wò, tó ń fi ìhùwàsí hàn nígbà tí a bá dà á pọ̀ mọ́ wàrà."]],
          slides: [
            { title: "Mastitis ń náni lówó", bullets: ["Àkóràn àti wíwú ọmú", "Wàrà díẹ̀, dídára rẹ̀ dín kù", "Clinical: o rí i. Subclinical: o kò rí i"] },
            { title: "Àmì tí a lè rí", bullets: ["Ìdá ọmú gbóná, ó wú tàbí ó ń dunni", "Ìdì, èérún, wàrà bí omi tàbí ẹ̀jẹ̀ nínú wàrà", "Nígbà mìíràn ibà àti àìjẹun"] },
            { title: "CMT", bullets: ["Ife kan fún orí ọmú kan; reagent tó pọ̀ bákan náà", "Yí i po kí o sì kà á láàárín ìṣẹ́jú-àáyá díẹ̀", "Ṣàn bí omi = ó dára; jẹ́lì tàbí bí ikun = ìhùwàsí"] },
            { title: "Dènà kí o sì gbé ìgbésẹ̀", bullets: ["Ibùsùn gbígbẹ, ètò tó mọ́, teat dip tí a bá gbà ọ́ nímọ̀ràn", "Ẹran tó ní àkóràn: fún wàrà wọn kẹ́yìn", "Dókítà ẹranko ló ń pinnu ìtọ́jú; tẹ̀lé ohun tí a kọ sára oògùn"] }
          ],
          sources: [MU_CMT, FAO_HEALTH],
          tryIt: "Ṣe CMT lórí màlúù tàbí ewúrẹ́ kan (yá pákó àti reagent lọ́wọ́ ẹgbẹ́ alájọṣe rẹ, dókítà ẹranko tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tí o kò bá ní). Kọ èsì ìdá ọmú kọ̀ọ̀kan tàbí ìdajì kọ̀ọ̀kan sínú ìwé àkọsílẹ̀ rẹ, kí o sì kọ ohun tí o máa ṣe nípa ìhùwàsí èyíkéyìí.",
          youCanNow: "dá àwọn àmì mastitis mọ̀, ṣe CMT lórí orí ọmú kọ̀ọ̀kan, kọ èsì rẹ̀ sílẹ̀, kí o sì mọ ìgbà tí o máa pe dókítà ẹranko.",
          quickCheck: [
            { objective: "O3", q: "Wàrà màlúù rẹ dà bí ó ti máa ń rí, ṣùgbọ́n iye wàrà rẹ̀ ti dín kù. Kí ló lè rí mastitis tí a kò rí?", options: ["Dídúró títí wàrà yóò fi ní ìdì", "California Mastitis Test", "Fífún un ní iyọ̀ sí i", "Gbígbóòórùn wàrà"], answer: 1, why: "Mastitis tí a kò rí kò ní àmì tí a lè rí; CMT ló ń fi hàn." },
            { objective: "O3", q: "Nínú CMT, ife kan di jẹ́lì tó ki. Kí ni èyí túmọ̀ sí?", options: ["A ṣe àyẹ̀wò náà dáadáa, ìdá ọmú yẹn sì ní ìlera", "O kò fi wàrà tó", "Wàrà náà lọ́ràá púpọ̀", "Ìhùwàsí tó lágbára ní ìdá ọmú yẹn; kọ ọ́ sílẹ̀ kí o sì pe dókítà ẹranko"], answer: 3, why: "Jẹ́lì túmọ̀ sí pé iye sẹ́ẹ̀lì ga, èyí tó jẹ́ àmì mastitis ní ìdá ọmú yẹn." }
          ]
        },
        {
          title: "Mímú wàrà tutù, títọ́jú rẹ̀ àti títà á",
          objectives: ["O4"],
          minutes: 6,
          goal: "Mú wàrà tutù kí o sì gbé wàrà tó máa yege nínú àyẹ̀wò dídára olùrà lọ.",
          text: [
            "Wàrà tuntun ní ààbò àdánidá tó ń dá kòkòrò àrùn dúró fún nǹkan bí wákàtí mẹ́ta sí mẹ́rin péré lẹ́yìn fífún wàrà. FAO gbà wá nímọ̀ràn láti mú un tutù dé 4 °C láàárín àkókò yẹn kí dídára rẹ̀ lè wà. Tí o kò bá ní ẹ̀rọ amú-wàrà-tutù, gbé agolo irin tí a bò sínú omi tó tutù tó sì mọ́, yálà omi tó ń ṣàn tàbí omi tí a pọn sílẹ̀, ní ibòji, kí o sì yára gbé wàrà náà lọ sí ẹ̀rọ amú-wàrà-tutù ní ibùdó ìgbàwàrà. Má ṣe fi wàrà sílẹ̀ nínú oòrùn láéláé.",
            "Ọ̀pọ̀ àgbẹ̀ kékeré ń ta wàrà fún ẹgbẹ́ alájọṣe wàrà, ibùdó ìgbàwàrà, ilé-iṣẹ́ tó ń ṣe wàrà, tàbí ilé-iṣẹ́ wàrà kékeré (fún àpẹẹrẹ, àwọn ilé-iṣẹ́ wàrà kékeré ní Burkina Faso ń ra wàrà lọ́wọ́ àwọn darandaran àti àgbẹ̀). Nígbà tí o bá gbé wàrà dé, olùrà máa yẹ wàrà rẹ wò. Àwọn àyẹ̀wò tó wọ́pọ̀ ni: wíwò àti gbígbóòórùn rẹ̀; àyẹ̀wò ọtí (alcohol test) àti àyẹ̀wò sísè (clot-on-boiling), tó ń fi wàrà tó ń bẹ̀rẹ̀ sí kan hàn; lactometer, tó ń fi wàrà tí a da omi sí hàn; àti, ní àwọn ilé-iṣẹ́ kan, àyẹ̀wò fún oògùn tó kù nínú wàrà. Wàrà tí kò bá yege ni wọ́n máa kọ̀ tàbí san owó díẹ̀ fún.",
            "Má ṣe fi omi, ìyẹ̀fun, oògùn ìpamọ́ tàbí ohunkóhun mìíràn kún wàrà láéláé: ìrẹ́jẹ ni, ó lòdì sí òfin ní ọ̀pọ̀ ibi, àwọn àyẹ̀wò náà sì ń mú un. Béèrè lọ́wọ́ olùrà rẹ bí wọ́n ṣe ń sanwó (fún lítà kọ̀ọ̀kan, nígbà mìíràn pẹ̀lú owó àfikún fún dídára tàbí ọ̀rá), ìgbà tí wọ́n ń sanwó (nígbà púpọ̀ lóṣooṣù nípasẹ̀ báńkì tàbí owó orí fóònù), àti ohun tí wọ́n ń yọ kúrò nínú owó. Ka gbogbo àdéhùn kí o tó fọwọ́ sí i. Títa wàrà tí a kò sè (raw milk) fún aráàlú lè nílò ìwé àṣẹ: ní Kenya, Kenya Dairy Board ló ń fún àwọn tó ń ṣòwò wàrà ní ìwé àṣẹ, nítorí náà yẹ òfin rẹ̀ wò, tàbí ti àjọ tó ń ṣàkóso wàrà ní orílẹ̀-èdè rẹ."
          ],
          steps: ["Sẹ́ wàrà kí o sì bò ó lẹ́sẹ̀kẹsẹ̀ lẹ́yìn fífún wàrà.", "Mú un tutù lẹ́sẹ̀kẹsẹ̀: ẹ̀rọ amú-wàrà-tutù, tàbí agolo nínú omi tó tutù ní ibòji.", "Gbé e dé ibùdó ìgbàwàrà tàbí ọ̀dọ̀ olùrà láàárín àkókò tí wọ́n fi lélẹ̀.", "Wo àwọn àyẹ̀wò náà kí o sì béèrè èsì wọn.", "Kọ iye lítà tí o gbé lọ sílẹ̀, àti wàrà tí wọ́n kọ̀ pẹ̀lú ìdí rẹ̀.", "Fi gbogbo owó tí wọ́n san wé àkọsílẹ̀ wàrà tí o gbé lọ."],
          words: [["Lactometer", "ohun èlò tó ń léfòó tó ń wọn bí wàrà ṣe wúwo tó; omi tí a dà sí wàrà ń mú kí ó fúyẹ́."], ["Àyẹ̀wò ọtí (alcohol test)", "dída wàrà pọ̀ mọ́ ọtí; wàrà tó ń bẹ̀rẹ̀ sí kan máa ń dì."], ["Ibùdó ìgbàwàrà (collection centre)", "ibi tí àwọn àgbẹ̀ ń gbé wàrà lọ kí wọ́n lè yẹ̀ ẹ́ wò, mú un tutù, kí wọ́n sì fi ránṣẹ́ sí ilé-iṣẹ́ tó ń ṣe wàrà."]],
          slides: [
            { title: "Mú un tutù kíákíá", bullets: ["Ààbò àdánidá ń wà fún nǹkan bí wákàtí 3 sí 4", "FAO: mú un tutù dé 4 °C láàárín àkókò yẹn", "Kò sí ẹ̀rọ amú-wàrà-tutù: agolo nínú omi tó tutù, ní ibòji"] },
            { title: "Àyẹ̀wò olùrà", bullets: ["Wíwò àti gbígbóòórùn", "Ọtí àti sísè: wàrà tó ń kan", "Lactometer: omi tí a dà sí i; àwọn kan ń yẹ oògùn wò"] },
            { title: "Má ṣe fi nǹkan kún un láéláé", bullets: ["Kò sí omi, ìyẹ̀fun tàbí oògùn ìpamọ́", "Ìrẹ́jẹ ni, ó lòdì sí òfin ní ọ̀pọ̀ ibi, àyẹ̀wò sì ń mú un"] },
            { title: "Gbígba owó", bullets: ["Fún lítà kọ̀ọ̀kan; béèrè nípa owó àfikún fún dídára", "Ìgbà àti bí wọ́n ṣe ń sanwó; ohun tí wọ́n ń yọ kúrò", "Ka àdéhùn; yẹ ìwé àṣẹ wò (Kenya: KDB)"] }
          ],
          sources: [FAO_PRESERVE, FAO_TESTING, KDB, KDB_PERMITS],
          tryIt: "Lọ sí ibùdó ìgbàwàrà, ẹgbẹ́ alájọṣe tàbí olùrà tó sún mọ́ ọ jù, tàbí pè wọ́n lórí fóònù. Béèrè: àwọn àyẹ̀wò tí wọ́n ń ṣe, àkókò tó pẹ́ jù tí wọ́n ń gba wàrà, bí wọ́n ṣe ń sanwó àti ìgbà tí wọ́n ń sanwó, àti ohun tí wọ́n ń yọ kúrò nínú owó. Kọ ìdáhùn wọn sílẹ̀ kí o sì fi wé bí o ṣe ń tọ́jú wàrà báyìí.",
          youCanNow: "mú wàrà tutù kí o sì tọ́jú rẹ̀ kí dídára rẹ̀ lè wà, ṣàlàyé àwọn àyẹ̀wò olùrà, kí o sì yẹ bí wọ́n ṣe ń san owó fún ọ wò.",
          quickCheck: [
            { objective: "O4", q: "O kò ní ẹ̀rọ amú-wàrà-tutù. Kí ni ohun tó dára jù láti ṣe lẹ́yìn fífún wàrà?", options: ["Gbé agolo irin tí a bò sínú omi tó tutù ní ibòji kí o sì yára gbé e lọ", "Fi wàrà sílẹ̀ nínú oòrùn kí ó lè gbóná", "Da omi díẹ̀ sí i kí ó lè wà ní tuntun", "Tọ́jú rẹ̀ títí di ọ̀la kí o sì gbé wàrà ìgbà méjì lọ pọ̀"], answer: 0, why: "Mímú un tutù kíákíá àti gbígbé e lọ kíákíá ń dá kòkòrò àrùn dúró kí wọ́n má pọ̀ sí i." },
            { objective: "O4", q: "Kí ni àyẹ̀wò lactometer ní ibùdó ìgbàwàrà ń mú?", options: ["Mastitis ní ìdá ọmú kan", "Wàrà tí a da omi sí", "Irú màlúù náà", "Wàrà tó tutù jù"], answer: 1, why: "Omi tí a dà sí wàrà ń mú kí ó fúyẹ́, lactometer sì ń fi èyí hàn." }
          ]
        },
        {
          title: "Títọ́ ọmọ màlúù, àkọsílẹ̀ àti iye owó lítà kan",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò iye owó lítà kan kí o sì máa kọ àkọsílẹ̀ tí ìṣirò náà nílò.",
          text: [
            "Ọmọ màlúù àti ọmọ ewúrẹ́ rẹ ni agbo ẹran rẹ ọjọ́ iwájú. Rí i dájú pé ọmọ tuntun mu colostrum, wàrà àkọ́kọ́ tó ki, ní kíákíá bí ó ti ṣeé ṣe lẹ́yìn ìbí, ó dára jù láàárín wákàtí díẹ̀ àkọ́kọ́, nítorí ó ń gbé ààbò ìyá rẹ̀ lòdì sí àrùn. Fi ọmọ màlúù sínú ilé mímọ́ tó gbẹ tó sì dá wà, fún un ní omi mímọ́, fún un ní koríko gbígbẹ (hay) tó dára tàbí koríko ẹran tó rọ̀ àti oúnjẹ ọmọ màlúù ní kùtùkùtù kí ikùn rẹ̀ lè dàgbà, kí o sì já a lẹ́nu ọmú nígbà tí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tàbí dókítà ẹranko rẹ bá sọ pé ó ti ń jẹ oúnjẹ líle tó. Tẹ̀lé ètò dókítà ẹranko rẹ fún ìtọ́jú ìdodo, oògùn aràn àti àjẹsára.",
            "Máa kọ àkọsílẹ̀ tó rọrùn lójoojúmọ́: iye lítà ẹran kọ̀ọ̀kan ní ìgbà fífún wàrà kọ̀ọ̀kan, oúnjẹ tí o rà àti iye owó rẹ̀, àmì pé ẹran ń wá akọ (heat) àti ọjọ́ AI tàbí ọjọ́ tí akọ gùn ún, ọjọ́ ìbímọ, ìtọ́jú pẹ̀lú ọjọ́ tí a tún lè ta wàrà, wàrà tí o gbé lọ, wàrà tí wọ́n kọ̀ àti owó tí wọ́n san. Ìwé àkọsílẹ̀ dára; spreadsheet lórí fóònù ń jẹ́ kí ìṣirò rọrùn.",
            "Iye owó lítà kan = gbogbo ìnáwó oṣù náà pín sí iye lítà tí o rí. Àpẹẹrẹ (àpẹẹrẹ lásán ni àwọn nọ́mbà yìí): màlúù 3 ní Kenya fún lítà 1,050 ní oṣù kan. Ìnáwó: oúnjẹ àti koríko ẹran KES 27,000, owó òṣìṣẹ́ KES 9,000, dókítà ẹranko àti AI KES 3,000, àwọn mìíràn KES 3,000; àpapọ̀ KES 42,000. Iye owó lítà kan = 42,000 / 1,050 = KES 40. Tí olùrà rẹ bá ń san owó tó kéré sí iye owó lítà kan rẹ, o ń pàdánù owó lórí lítà kọ̀ọ̀kan; kọ́kọ́ wo oúnjẹ tí ń ṣòfò, àdánù láti ọwọ́ mastitis àti wàrà tí wọ́n kọ̀."
          ],
          steps: ["Fún ọmọ tuntun ní colostrum ní kíákíá bí ó ti ṣeé ṣe lẹ́yìn ìbí.", "Fi ọmọ màlúù sínú ilé mímọ́ tó gbẹ pẹ̀lú omi, koríko gbígbẹ àti oúnjẹ ọmọ màlúù.", "Kọ iye lítà, oúnjẹ, ìbísí, ìbímọ, ìtọ́jú, wàrà tí o gbé lọ àti owó tí wọ́n san sílẹ̀.", "Ní òpin oṣù, ṣe àròpọ̀ gbogbo ìnáwó.", "Pín àpapọ̀ ìnáwó sí iye lítà tí o rí: èyí ni iye owó lítà kan rẹ.", "Fi wé iye owó tí wọ́n san kí o sì yan ìyípadà kan láti dín ìnáwó kù."],
          words: [["Colostrum", "wàrà àkọ́kọ́ tó ki, tó ní àwọ̀ ìyeyè, lẹ́yìn ìbí; ó ń dáàbò bo ọmọ tuntun lọ́wọ́ àrùn."], ["Jíjá lẹ́nu ọmú (weaning)", "yíyí ọmọ ẹran padà láti wàrà sí oúnjẹ líle."], ["Iye owó lítà kan", "gbogbo ìnáwó oko wàrà rẹ fún àkókò kan pín sí iye lítà tí o rí."]],
          slides: [
            { title: "Ọmọ màlúù ni agbo ọjọ́ iwájú", bullets: ["Colostrum ní kíákíá bí ó ti ṣeé ṣe lẹ́yìn ìbí", "Ilé mímọ́, gbígbẹ; omi, koríko gbígbẹ, oúnjẹ ọmọ màlúù ní kùtùkùtù", "Ètò dókítà ẹranko fún ìdodo, aràn, àjẹsára"] },
            { title: "Àkọsílẹ̀ ojoojúmọ́", bullets: ["Lítà ẹran kọ̀ọ̀kan; oúnjẹ àti iye owó rẹ̀", "Wíwá akọ, AI, ìbímọ, ìtọ́jú", "Wàrà tí o gbé lọ, èyí tí wọ́n kọ̀, owó tí wọ́n san"] },
            { title: "Iye owó lítà kan", bullets: ["Gbogbo ìnáwó oṣù náà / lítà tí o rí", "Àpẹẹrẹ: KES 42,000 / 1,050 L = KES 40 fún lítà kan", "Àpẹẹrẹ ni àwọn nọ́mbà: lo tìrẹ"] },
            { title: "Tí kò bá mú èrè wá", bullets: ["Owó tí wọ́n san kéré sí ìnáwó: o ń pàdánù lórí lítà kọ̀ọ̀kan", "Wo oúnjẹ tí ń ṣòfò, mastitis, wàrà tí wọ́n kọ̀", "Yan ìyípadà kan kí o sì máa tọpinpin rẹ̀"] }
          ],
          sources: [ILRI_MANUAL],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ìmọ́tótó fífún wàrà rẹ tí o máa lẹ̀ mọ́ ibi fífún wàrà, lẹ́yìn náà kún ìwé ìṣirò iye owó lítà kan fún oṣù tó kọjá (tàbí oṣù àpẹẹrẹ): gbogbo ìnáwó, iye lítà tí o rí, iye owó lítà kan, iye tí olùrà rẹ ń san, àti ìyípadà kan tí o máa ṣe.",
          youCanNow: "tọ́ ọmọ màlúù tó ní ìlera, kọ àkọsílẹ̀ oko wàrà, kí o sì ṣírò iye tí lítà wàrà kọ̀ọ̀kan ń ná ọ.",
          quickCheck: [
            { objective: "O5", q: "Ìgbà wo ni ọmọ màlúù tuntun gbọ́dọ̀ mu colostrum?", options: ["Lẹ́yìn ọ̀sẹ̀ kan", "Tí ó bá dà bí ẹni pé ó ṣe aláìlera nìkan", "Ní kíákíá bí ó ti ṣeé ṣe lẹ́yìn ìbí, ó dára jù láàárín wákàtí díẹ̀ àkọ́kọ́", "Kò yẹ kí ó mu ún rárá; omi nìkan ni kí o fún un"], answer: 2, why: "Colostrum ń gbé ààbò ìyá, ọmọ màlúù sì ń gbà á dáadáa jù ní wákàtí àkọ́kọ́." },
            { objective: "O5", q: "Ìnáwó oṣù náà jẹ́ KES 36,000, àwọn màlúù sì fún lítà 900. Kí ni iye owó lítà kan?", options: ["KES 25", "KES 32", "KES 36", "KES 40"], answer: 3, why: "36,000 pín sí 900 jẹ́ 40." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ọmú tó ní ìlera, wàrà tí kò léwu àti èrè",
        questions: [
          { objective: "O3", q: "Èwo ni àmì mastitis tí a lè rí?", options: ["Ìdá ọmú tó gbóná tó sì wú àti ìdì nínú wàrà", "Irun tó ń dán", "Jíjẹ àpọ̀jẹ", "Jíjẹun dáadáa"], answer: 0, why: "Gbígbóná, wíwú, ìrora àti wàrà tí kò dára jẹ́ àmì mastitis tí a lè rí." },
          { objective: "O3", q: "CMT fi ìhùwàsí hàn ní ìdá ọmú kan. Kí ni o máa ṣe?", options: ["Fún un ní antibiotic tí o ní nílé", "Kọ ọ́ sílẹ̀ kí o sì pe dókítà ẹranko rẹ; tẹ̀lé ìmọ̀ràn rẹ̀ àti ohun tí a kọ sára oògùn", "Pa á tì; wàrà náà dà bí ẹni pé ó dára", "Ta màlúù náà lónìí"], answer: 1, why: "Dókítà ẹranko ló ń pinnu ìtọ́jú; ìtọ́jú nílé láìsí ìmọ̀ràn lè fi oògùn sílẹ̀ nínú wàrà, ó sì lè mú kí oògùn má ṣiṣẹ́ mọ́." },
          { objective: "O4", q: "Gẹ́gẹ́ bí FAO ṣe sọ, láàárín ìgbà wo ni a gbọ́dọ̀ mú wàrà tutù dé nǹkan bí 4 °C?", options: ["Láàárín ọ̀sẹ̀ kan", "Ní ọjọ́ kejì", "Láàárín nǹkan bí wákàtí mẹ́ta sí mẹ́rin lẹ́yìn fífún wàrà", "Ní ìgbà ooru nìkan"], answer: 2, why: "Ààbò àdánidá wàrà ń dá kòkòrò àrùn dúró fún nǹkan bí wákàtí mẹ́ta sí mẹ́rin péré." },
          { objective: "O4", q: "Ibùdó ìgbàwàrà ṣe àyẹ̀wò ọtí. Kí ló ń fi hàn?", options: ["Omi tí a dà sí i", "Iye ọ̀rá inú rẹ̀", "Irú màlúù náà", "Wàrà tó ń bẹ̀rẹ̀ sí kan"], answer: 3, why: "Wàrà tó ń bẹ̀rẹ̀ sí kan máa ń dì nígbà tí a bá dà á pọ̀ mọ́ ọtí." },
          { objective: "O5", q: "Iye owó lítà kan rẹ jẹ́ KES 45, olùrà sì ń san KES 40. Kí ni èyí túmọ̀ sí?", options: ["O ń pàdánù nǹkan bí KES 5 lórí lítà kọ̀ọ̀kan", "O ń jèrè KES 5 lórí lítà kan", "Kò sí èrè, kò sí àdánù", "Kò túmọ̀ sí nǹkan kan; iye owó kò ṣe pàtàkì"], answer: 0, why: "Tí iye owó lítà kan bá ju iye owó tí wọ́n san lọ, lítà kọ̀ọ̀kan ń mú àdánù wá." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ọ̀sìn Ẹran Ìfúnwàrà: Ṣíṣe Wàrà àti Ìmọ́tótó",
    questions: [
      { objective: "O1", q: "Kí o tó ra màlúù ìfúnwàrà, ohun àkọ́kọ́ tí o gbọ́dọ̀ yẹ̀ wò ni:", options: ["Àwọ̀ àwọn màlúù náà", "Bóyá o ní koríko ẹran àti omi jálẹ̀ ọdún, pẹ̀lú ìgbà ẹ̀ẹ̀rùn", "Irú màlúù tó lókìkí jù", "Iye màlúù tí aládùúgbò rẹ ní"], answer: 1, why: "Oúnjẹ àti omi ló ń pinnu iye wàrà tí màlúù èyíkéyìí lè fún." },
      { objective: "O1", q: "Kí nìdí tí àgbẹ̀ kan fi lè yan ewúrẹ́ ìfúnwàrà dípò màlúù?", options: ["Ewúrẹ́ kò nílò omi", "Ewúrẹ́ kì í ṣàìsàn láéláé", "Ewúrẹ́ ń jẹun díẹ̀, wọ́n sì bá ilẹ̀ kékeré àti owó díẹ̀ mu", "Wàrà ewúrẹ́ kò nílò ìmọ́tótó"], answer: 2, why: "Ewúrẹ́ nílò oúnjẹ, ààyè àti owó díẹ̀, èyí sì bá ọ̀pọ̀ àgbẹ̀ kékeré mu." },
      { objective: "O1", q: "Nínú zero-grazing, kí nìdí tí a fi gbọ́dọ̀ kó ìgbẹ́ kúrò lójoojúmọ́?", options: ["Ibùsùn tó dọ̀tí jẹ́ ọ̀kan pàtàkì nínú ohun tó ń fa mastitis", "Láti tà á lójoojúmọ́", "Màlúù kò fẹ́ òórùn rẹ̀", "Kò pọn dandan"], answer: 0, why: "Ọmú ń sinmi lórí ibùsùn; ẹ̀gbin tó wà níbẹ̀ ń tan kòkòrò mastitis kálẹ̀." },
      { objective: "O1", q: "Kí ló ń ràn ibùdúró zero-grazing lọ́wọ́ láti wà ní gbígbẹ?", options: ["Ilẹ̀ tó tẹ́jú láìsí ọ̀nà omi", "Kò sí òrùlé", "Koríko tó rin", "Ilẹ̀ tó tẹ̀ díẹ̀ sí ọ̀nà omi"], answer: 3, why: "Ilẹ̀ tó tẹ̀ díẹ̀ ń jẹ́ kí ìtọ̀ àti omi ṣàn lọ." },
      { objective: "O2", q: "Kí ni ìgbésẹ̀ àkọ́kọ́ nínú ètò fífún wàrà tó mọ́?", options: ["Bẹ̀rẹ̀ sí fún wàrà lẹ́sẹ̀kẹsẹ̀", "Ẹni tó ń fún wàrà wọ aṣọ mímọ́, èékánná rẹ̀ kúrú, ó sì fi ọṣẹ fọ ọwọ́", "Da wàrà sínú jerrican", "Fún ọmọ màlúù lóúnjẹ"], answer: 1, why: "Ọwọ́ àti aṣọ tó mọ́ ń dí kòkòrò àrùn lọ́nà kí ó má wọ inú wàrà láti ìbẹ̀rẹ̀." },
      { objective: "O2", q: "Kí nìdí tí a fi ń fún wàrà pẹ̀lú gbogbo ọwọ́ dípò fífa pẹ̀lú ìka?", options: ["Ó yára láti kọ́", "Ó ń lo wàrà díẹ̀", "Kò ṣe orí ọmú léṣe, ó sì ń jẹ́ kí wàrà jáde tán", "Ìka dọ̀tí jù"], answer: 2, why: "Fífún wàrà pẹ̀lú gbogbo ọwọ́ kò ṣe orí ọmú léṣe, ó sì ń sọ ọmú di òfo." },
      { objective: "O2", q: "Lẹ́yìn fífún wàrà, kí ni o gbọ́dọ̀ kọ́kọ́ ṣe sí wàrà náà?", options: ["Sẹ́ ẹ, bò ó, kí o sì bẹ̀rẹ̀ sí mú un tutù lẹ́sẹ̀kẹsẹ̀", "Fi í sílẹ̀ láìbò nínú ilé ẹran kí ó tutù", "Da omi sí i kí ó lè pọ̀ sí i", "Dà á pọ̀ mọ́ wàrà àná"], answer: 0, why: "Sísẹ́, bíbò àti mímú un tutù kíákíá ń dí ẹ̀gbin àti kòkòrò àrùn lọ́nà." },
      { objective: "O2", q: "Kí nìdí tí a fi ń fún màlúù lóúnjẹ lẹ́sẹ̀kẹsẹ̀ lẹ́yìn fífún wàrà?", options: ["Kí ó lè sùn", "Láti mú ọ̀rá pọ̀ sí i", "Kí ó lè dúró nígbà tí ihò orí ọmú ń padé", "Kò wúlò fún nǹkan kan"], answer: 2, why: "Dídúró nígbà tí ihò orí ọmú ń padé ń dí ẹ̀gbin ibùsùn lọ́nà kí ó má wọ inú rẹ̀." },
      { objective: "O3", q: "Mastitis tí a kò rí (subclinical) ni:", options: ["Mastitis tí ìdá ọmú rẹ̀ wú tó sì gbóná", "Àrùn ewúrẹ́ nìkan", "Ìṣòro oúnjẹ", "Mastitis tí kò ní àmì tí a lè rí, tí àyẹ̀wò ń rí"], answer: 3, why: "Àyẹ̀wò bí CMT nìkan ló ń fi mastitis tí a kò rí hàn." },
      { objective: "O3", q: "Nínú CMT, báwo ni o ṣe ń ka èsì?", options: ["Dúró fún wákàtí kan, lẹ́yìn náà gbóòórùn rẹ̀", "Yí i po kí o sì kà á láàárín ìṣẹ́jú-àáyá díẹ̀: tó bá ṣàn bí omi ó dára, jẹ́lì jẹ́ ìhùwàsí", "Tọ́ ọ wò", "Kọ́kọ́ sè é"], answer: 1, why: "A ń ka ìhùwàsí náà láàárín ìṣẹ́jú-àáyá díẹ̀; jẹ́lì túmọ̀ sí pé iye sẹ́ẹ̀lì ga." },
      { objective: "O3", q: "Ìgbà wo ni o KÒ gbọ́dọ̀ gbára lé CMT fún màlúù?", options: ["Ní ọjọ́ díẹ̀ àkọ́kọ́ lẹ́yìn ìbímọ", "Ní àárọ̀", "Nígbà tí ó farabalẹ̀", "Lẹ́yìn tí ó jẹun"], answer: 0, why: "Iye sẹ́ẹ̀lì máa ń ga fúnra rẹ̀ lẹ́yìn ìbímọ, nítorí náà èsì lè ṣini lọ́nà." },
      { objective: "O3", q: "Ta ló ń pinnu bí a ṣe máa tọ́jú mastitis?", options: ["Aládùúgbò", "Ẹni tó ń ra wàrà", "Dókítà ẹranko rẹ, pẹ̀lú títẹ̀lé ohun tí a kọ sára oògùn", "Fídíò lórí íńtánẹ́ẹ̀tì"], answer: 2, why: "Ìtọ́jú àti àkókò ìdúró kí a tó ta wàrà wá láti ọ̀dọ̀ dókítà ẹranko àti ohun tí a kọ sára oògùn." },
      { objective: "O4", q: "Ohun èlò wo ló ṣeé ṣe jù kí wọ́n tìtorí rẹ̀ kọ wàrà?", options: ["Agolo aluminium tó mọ́", "Agolo stainless steel", "Garawa wàrà irin tó mọ́", "Jerrican ike tó ní àpá"], answer: 3, why: "Àpá ara ike ń di ẹ̀gbin àti kòkòrò àrùn mú, ọ̀pọ̀ olùrà sì ń kọ wàrà tó wà nínú rẹ̀." },
      { objective: "O4", q: "Oníṣòwò kan dábàá pé kí o da omi díẹ̀ sí gbogbo agolo. Ìwọ:", options: ["Kọ̀: ìrẹ́jẹ ni, ó lòdì sí òfin ní ọ̀pọ̀ ibi, lactometer sì máa mú un", "Gbà tí iye owó bá kéré", "Fi ìyẹ̀fun sí i dípò", "Da omi sí i ní ìgbà ẹ̀ẹ̀rùn nìkan"], answer: 0, why: "Fífi ohunkóhun kún wàrà jẹ́ ìrẹ́jẹ, àyẹ̀wò olùrà sì ń mú un." },
      { objective: "O4", q: "Àyẹ̀wò sísè (clot-on-boiling) ń yẹ̀ wò fún:", options: ["Omi tí a dà sí i", "Wàrà tó ti kan tàbí tí kò dára", "Ọjọ́ orí ẹran náà", "Iye ọ̀rá"], answer: 1, why: "Wàrà tó ti kan tàbí tí kò dára máa ń dì nígbà tí a bá sè é." },
      { objective: "O4", q: "Ní Kenya, àjọ wo ló ń fún àwọn tó ń ṣòwò wàrà ní ìwé àṣẹ?", options: ["Kenya Wildlife Service", "Ọ́fíìsì omi ti county", "Kenya Dairy Board", "Pest Control Products Board"], answer: 2, why: "Kenya Dairy Board ló ń ṣàkóso iṣẹ́ wàrà, ó sì ń fún àwọn tó ń ṣòwò wàrà ní ìwé àṣẹ." },
      { objective: "O5", q: "Iye owó lítà kan ni:", options: ["Iye owó tí olùrà ń san", "Owó oúnjẹ nìkan", "Lítà pín sí iye màlúù", "Gbogbo ìnáwó fún àkókò náà pín sí iye lítà tí o rí"], answer: 3, why: "Ó ní gbogbo ìnáwó nínú, kì í ṣe oúnjẹ nìkan." },
      { objective: "O5", q: "Ìnáwó oṣù kan jẹ́ KES 50,000, o sì rí lítà 1,250. Iye owó lítà kan?", options: ["KES 25", "KES 40", "KES 50", "KES 62"], answer: 1, why: "50,000 pín sí 1,250 jẹ́ 40." },
      { objective: "O5", q: "Àkọsílẹ̀ wo lo nílò láti mọ ìgbà tí a tún lè ta wàrà màlúù tí a tọ́jú?", options: ["Ọjọ́ ìtọ́jú àti àkókò ìdádúró láti ara oògùn tàbí láti ọ̀dọ̀ dókítà ẹranko", "Àwọ̀ rẹ̀", "Ojú ọjọ́", "Iye owó oúnjẹ"], answer: 0, why: "Kíkọ ìtọ́jú àti àkókò ìdádúró rẹ̀ sílẹ̀ ń dá oògùn tó kù dúró kí ó má dé ọ̀dọ̀ olùrà." },
      { objective: "O5", q: "Iye owó lítà kan rẹ ga ju iye owó tí wọ́n ń san lọ. Ibi tó dára láti kọ́kọ́ wò ni:", options: ["Ríra màlúù púpọ̀ sí i lẹ́ẹ̀kan náà", "Títa wàrà láìsí àyẹ̀wò", "Oúnjẹ tí ń ṣòfò, àdánù mastitis àti wàrà tí wọ́n kọ̀", "Dídá gbogbo àkọsílẹ̀ dúró"], answer: 2, why: "Oúnjẹ ni ìnáwó tó pọ̀ jù nígbà púpọ̀, mastitis àti wàrà tí wọ́n kọ̀ sì ń fi wàrà tí o ti náwó lé lórí ṣòfò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 8, 9, 13, 14, 16, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ẹran àti ilé ẹran", objective: "O1", notYet: "Kò so ẹran, ilé ẹran àti oúnjẹ tí oko ní pọ̀.", meets: "Ètò náà bá ẹran àti ilé oko náà mu: ibi fífún wàrà tó mọ́, ibùsùn tó gbẹ, ìgbẹ́ sì jìnnà.", exceeds: "Ó kọ àtúnṣe kan sí ilé ẹran pẹ̀lú ọjọ́ rẹ̀, bí ọ̀nà omi tó dára jù tàbí ibi fífún wàrà tó dá wà." },
      { name: "Ètò fífún wàrà", objective: "O2", notYet: "Àwọn ìgbésẹ̀ kan kò sí tàbí wọn kò tẹ̀léra, fún àpẹẹrẹ kò sí fífọ ọwọ́ tàbí nínu orí ọmú gbẹ.", meets: "Gbogbo ìgbésẹ̀ láti ẹni tó ń fún wàrà àti ohun èlò títí dé sísẹ́, bíbò àti mímú wàrà tutù, ní ìtẹ̀léra.", exceeds: "Ó sọ ẹni tó ń ṣe ìgbésẹ̀ kọ̀ọ̀kan àti bí a ṣe ń yẹ ètò náà wò lọ́sẹ̀ọ̀sẹ̀." },
      { name: "Àyẹ̀wò mastitis", objective: "O3", notYet: "Kò sí àmì mastitis tàbí CMT nínú ètò náà, tàbí ìtọ́jú nílé láìsí dókítà ẹranko.", meets: "Ó to àwọn àmì, ìgbà tí a ń ṣe CMT, bí a ṣe ń kọ èsì sílẹ̀, àti pípe dókítà ẹranko fún èsì tó fi àrùn hàn; a ya wàrà ẹran tí a tọ́jú sọ́tọ̀ títí ohun tí a kọ sára oògùn tàbí dókítà ẹranko yóò fi gbà.", exceeds: "Ó ní tábìlì àkọsílẹ̀ CMT tó rọrùn fún ẹran kọ̀ọ̀kan àti ìdá ọmú kọ̀ọ̀kan." },
      { name: "Mímú wàrà tutù àti gbígbé e lọ", objective: "O4", notYet: "A fi wàrà sílẹ̀ ní gbígbóná tàbí a gbé e lọ pẹ́; a lo ohun èlò ike.", meets: "A mú wàrà tutù lẹ́sẹ̀kẹsẹ̀, a sì gbé e lọ láàárín àkókò olùrà, nínú ohun èlò irin, láìfi nǹkan kan kún un.", exceeds: "Ó kọ àkókò tí a gbé wàrà lọ, èsì àyẹ̀wò àti wàrà tí wọ́n kọ̀ pẹ̀lú ìdí rẹ̀ sílẹ̀." },
      { name: "Iye owó lítà kan", objective: "O5", notYet: "Àwọn ìnáwó kan kò sí tàbí ìṣirò kò tọ̀nà.", meets: "Gbogbo ìnáwó wà níbẹ̀, iye owó lítà kan tọ̀nà, a sì fi wé iye owó olùrà.", exceeds: "Ó dárúkọ ìyípadà kan láti dín iye owó lítà kan kù àti bí a ṣe máa wọn ipa rẹ̀ ní oṣù tó ń bọ̀." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege nínú iṣẹ́ ìkẹyìn (rubric)",
      "Wàrà tí wọ́n kọ̀ ní ibùdó ìgbàwàrà tàbí lọ́dọ̀ olùrà dín kù láàárín oṣù 3 (àkọsílẹ̀ wàrà tí a gbé lọ)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ń ṣe CMT lórí ẹran wọn ó kéré tán lẹ́ẹ̀kan lóṣù (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n mọ iye owó lítà kan wọn tí wọ́n sì ń tọpinpin rẹ̀ lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Ìyípadà nínú àròpín wàrà tí a gbé lọ fún ẹran kọ̀ọ̀kan láàárín oṣù 3, níbi tí àkọsílẹ̀ bá wà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí fóònù tó ní spreadsheet tàbí app àkọsílẹ̀",
      "Ẹ̀rọ ìṣirò (ẹ̀rọ ìṣirò orí fóònù dára)",
      "Àǹfààní láti dé ọ̀dọ̀ ẹran tó ń fún wàrà fún iṣẹ́ àṣeṣe, tàbí oko àfihàn",
      "Pákó CMT àti reagent, tí a yá lọ́wọ́ ẹgbẹ́ alájọṣe, dókítà ẹranko tàbí ọ́fíìsì ìtọ́sọ́nà àgbẹ̀ tí ó bá pọn dandan",
      "Nǹkan bí ìṣẹ́jú 75 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú àṣeṣe ní àkókò fífún wàrà"
    ],
    facilitatorNotes: [
      "Ṣe àfihàn ètò fífún wàrà àti CMT lójúkojú lórí oko ọmọ ẹgbẹ́ kan tàbí ní ẹgbẹ́ alájọṣe; jẹ́ kí akẹ́kọ̀ọ́ kọ̀ọ̀kan ṣe CMT fúnra rẹ̀.",
      "Pe ibùdó ìgbàwàrà tàbí ẹgbẹ́ alájọṣe tó wà nítòsí wá láti fi àyẹ̀wò wàrà wọn hàn (ọtí, sísè, lactometer).",
      "Má ṣe sọ iye oògùn, àjẹsára tàbí homonu, tàbí iye ọjọ́ ìdádúró láéláé; rán akẹ́kọ̀ọ́ lọ sọ́dọ̀ dókítà ẹranko wọn àti ohun tí a kọ sára oògùn.",
      "Sọ fún àwọn akẹ́kọ̀ọ́ pé kí wọ́n mú ìwé ìsanwó oúnjẹ oṣù tó kọjá àti ìwé ìgbàwàrà wá fún iṣẹ́ iye owó lítà kan; lo nọ́mbà àpẹẹrẹ fún àwọn tí kò ní àkọsílẹ̀.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan.",
      "So ẹ̀kọ́ yìí pọ̀ mọ́ \"Oúnjẹ Ẹran Ọ̀sìn àti Ṣíṣe Oúnjẹ pẹ̀lú Ohun Èlò Agbègbè\" fún àwọn akẹ́kọ̀ọ́ tí iye owó lítà kan wọn ga nítorí oúnjẹ."
    ]
  }
};
