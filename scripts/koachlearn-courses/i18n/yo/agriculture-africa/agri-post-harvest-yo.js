"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-post-harvest.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_LOSS = { name: "FAO: Dídín àdánù àti ìfiṣòfò oúnjẹ kù (nǹkan bí 14 nínú ọgọ́rùn-ún oúnjẹ ló ń sọnù láàárín ìkórè àti ṣọ́ọ̀bù, 2019)", url: "https://www.fao.org/newsroom/detail/A-major-step-forward-in-reducing-food-loss-and-waste-is-critical-to-achieve-the-SDGs/en" };
const FAO_AFLA = { name: "FAO: Dídènà àti ṣíṣàkóso májèlé èbu nínú ọkà: ṣíṣàkóso aflatoxin nínú àgbàdo", url: "https://www.fao.org/4/x5036e/x5036e0s.htm" };
const FAO_DRYER = { name: "FAO TECA/STI portal: Àgbàdo tí a sá gbẹ dáadáa ń ṣe gbogbo ènìyàn láǹfààní: ẹ̀rọ ìsá-oòrùn fún àgbàdo", url: "https://sti-portal.fao.org/innovations/well-dried-maize-benefits-all-solar-maize-dryer" };
const IITA_AFLASAFE = { name: "IITA: Àwọn ọjà Aflasafe tí ń fi ohun alààyè ṣàkóso aflatoxin fún àwọn àgbẹ̀ Áfíríkà", url: "https://www.iita.org/news-item/iita-moves-to-commercialize-and-disseminate-aflatoxin-biocontrol-products-to-africas-farmers/" };
const PICS = { name: "Purdue University: Àpò hermetic Purdue Improved Crop Storage (PICS)", url: "https://www.purdue.edu/discoverypark/food/research/pics.php" };
const FAO_ZECC = { name: "FAO TECA/STI portal: Zero Energy Cooling Chamber (yàrá ìtutù láìsí iná) fún ẹ̀fọ́", url: "https://sti-portal.fao.org/innovations/zero-energy-cooling-chamber-vegetables" };

module.exports = {
  id: "agri-post-harvest-yo",
  lang: "yo",
  translationOf: "agri-post-harvest",
  category: "Agriculture (Africa)",
  name: "Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè",
  skills: "Wíwá ibi tí ìkórè rẹ ti ń sọnù, Kíkórè ní àkókò tó tọ́, Sísá ọkà gbẹ dé ọ̀rinrin tí kò léwu, Dídènà aflatoxin, Pípa ọkà mọ́ sínú àpò hermetic, Mímú irè tútù tutù, pípín in ní ìpele àti dídì í",
  outcome: "ṣe ètò lẹ́yìn ìkórè fún irè kan: kórè rẹ̀ ní àkókò tó tọ́, sá ọkà gbẹ dé ọ̀rinrin tí kò léwu, dí aflatoxin lọ́wọ́, pa á mọ́ sínú àpò hermetic, kí o sì jẹ́ kí irè tútù wà ní tutù, ní ìpele tó tọ́, kí o sì dì í dáadáa fún olùrà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn oníṣòwò àti àwọn ọ̀dọ́ tó ń ṣiṣẹ́ okòwò àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà. Ìkórè tó dára ṣì lè pàdánù púpọ̀ nínú iye rẹ̀ lẹ́yìn tí ó bá kúrò lóko: ọkà máa ń hu èbu tàbí kòkòrò ọkà (weevil) jẹ ẹ́, tòmátì máa ń fọ́, àwọn olùrà sì máa ń san owó díẹ̀ tàbí kí wọ́n kọ̀ ọ́.",
    "Orí 1 dá lórí kíkó ìkórè wọlé dáadáa: ibi tí àdánù ti ń ṣẹlẹ̀ àti ìdí rẹ̀, kíkórè ní àkókò tó tọ́, àti sísá ọkà gbẹ dé ọ̀rinrin tí kò léwu. Orí 2 dá lórí pípa á mọ́: dídènà aflatoxin, pípa ọkà mọ́ sínú àpò hermetic, àti mímú irè tútù tutù, pípín in ní ìpele àti dídì í dáadáa.",
    "Àwọn olùrà àti àwọn àjọ òdiwọ̀n orílẹ̀-èdè ní òfin dídára tiwọn, nítorí náà máa béèrè lọ́wọ́ olùrà rẹ, ẹgbẹ́ alájùmọ̀ṣe (cooperative) rẹ tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ ohun tí wọ́n fẹ́. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ kan lórí oko tàbí ní ilé ìpamọ́ rẹ. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò lẹ́yìn ìkórè ní ojú-ewé kan fún irè kan (tìrẹ, tàbí àpẹẹrẹ bí éékà 2 àgbàdo ní Trans Nzoia, éékà 1 tòmátì ní Kaduna, tàbí ẹ̀wà (cowpea) ní Tamale): ìgbà àti bí o ṣe máa kórè, bí o ṣe máa sá a gbẹ àti bí o ṣe máa ṣàyẹ̀wò ọ̀rinrin (fún ọkà), bí o ṣe máa dí aflatoxin lọ́wọ́, bí o ṣe máa pa á mọ́ àti ibi tí o máa pa á mọ́ sí, àti bí o ṣe máa jẹ́ kí ó tutù, pín in ní ìpele àti dì í fún olùrà rẹ, pẹ̀lú òfin dídára olùrà tí a kọ sí òkè ojú-ewé náà.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ tó ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn oníṣòwò àti àwọn ọ̀dọ́ tó ń ṣiṣẹ́ okòwò àgbẹ̀ ní Kenya, Nàìjíríà, Ghana àti káàkiri Áfíríkà tí wọ́n ń bójú tó ọkà, irè ẹlẹ́wà àti irè tútù lẹ́yìn ìkórè.",
    startingPoint: "Ọ̀pọ̀ máa ń kórè nígbà tí irè bá dà bí ẹni pé ó ti ṣetán, wọ́n máa ń sá ọkà sí oòrùn lórí ohunkóhun tí ó bá wà nítòsí, wọ́n máa ń pa á mọ́ sínú àpò, wọ́n sì máa ń gbé irè sínú àpò tàbí ní òkìtì. Díẹ̀ ló ń ṣàyẹ̀wò ọ̀rinrin ọkà, tí wọ́n mọ bí aflatoxin ṣe ń wáyé, tí wọ́n ń lo àpò hermetic, tàbí tí wọ́n ń pín irè ní ìpele tí wọ́n sì ń dì í bí olùrà ṣe fẹ́.",
    gap: "Púpọ̀ nínú ìkórè tó dára máa ń dín kù ní iye tàbí ní owó lẹ́yìn tí ó bá kúrò lóko: kòkòrò ọkà, èbu àti eku nínú ilé ìpamọ́, irè tí ó fọ́, àti ọkà tí a kọ̀ nítorí aflatoxin, èyí tí ó tún ń pa àwọn ìdílé tí ó jẹ ẹ́ lára. Ètò lẹ́yìn ìkórè ń jẹ́ kí ìkórè púpọ̀ sí i wà, ó ń jẹ́ kí oúnjẹ wà láìléwu, ó sì ń mú owó tó dára wọlé.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ tuntun",
      "Ohun èlò: fóònù lásán; tapólì (tarpaulin), àpò àti àpótí (crate) tí akẹ́kọ̀ọ́ ti ní tàbí tí ó lè yá",
      "Àwọn olùrà àti àwọn àjọ òdiwọ̀n orílẹ̀-èdè ní òfin dídára tiwọn: akẹ́kọ̀ọ́ ń béèrè lọ́wọ́ olùrà, ẹgbẹ́ alájùmọ̀ṣe tàbí òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀",
      "Ààbò oúnjẹ: má ṣe jẹ, tà tàbí fi ọkà tí ó ní èbu bọ́ ẹran láéláé; lo ọjà biocontrol kìkì bí a ṣe fọwọ́ sí i àti bí àmì-ìtọ́sọ́nà ṣe sọ",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá iṣẹ́ ìkórè mu"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún irè kan", action: "ya ọ̀nà rẹ̀ láti oko dé ọ̀dọ̀ olùrà, kí o sì sàmì sí ibi tí ó ti ń pàdánù iye tàbí owó", standard: "kí o dárúkọ ó kéré tán ibi àdánù mẹ́ta àti ohun tí ó máa tún wọn ṣe" },
    { id: "O2", condition: "Fún irè kọ̀ọ̀kan tí o ń gbìn", action: "mọ àwọn àmì pé ó ti ṣetán, kí o sì ṣètò ọjọ́ ìkórè pẹ̀lú àsọtẹ́lẹ̀ ojú-ọjọ́", standard: "pẹ̀lú irinṣẹ́, àpò tàbí àpótí àti òṣìṣẹ́ tí ó ti ṣetán kí ìkórè tó bẹ̀rẹ̀" },
    { id: "O3", condition: "Fún ọkà tí a ṣẹ̀ṣẹ̀ kórè", action: "sá a gbẹ kíákíá lórí ohun tí kì í ṣe ilẹ̀, kí o sì ṣàyẹ̀wò pé ó ti dé ọ̀rinrin tí kò léwu", standard: "nǹkan bí 13 sí 14 nínú ọgọ́rùn-ún tàbí òdiwọ̀n olùrà, tí a fi ẹ̀rọ ìwọ̀n ọ̀rinrin tàbí ìdánwò iyọ̀ ṣàyẹ̀wò" },
    { id: "O4", condition: "Fún àgbàdo, ẹ̀pà tàbí irè míì tí ó wà nínú ewu", action: "kọ àwọn ìgbésẹ̀ pàtàkì tí ń dí aflatoxin lọ́wọ́ sílẹ̀, kí o sì lò wọ́n", standard: "pẹ̀lú ọkà tí ó ní èbu àti èyí tí ó ti bàjẹ́ tí a ṣà kúrò, tí a kò sì jẹ, tà tàbí fi bọ́ ẹran láéláé" },
    { id: "O5", condition: "Pẹ̀lú ọkà tí ó gbẹ, tí ó mọ́, tí a sì ti ṣà", action: "kún àpò hermetic, dí i, kí o sì pa á mọ́", standard: "pẹ̀lú àpò inú kọ̀ọ̀kan tí a so tí afẹ́fẹ́ kò lè wọ̀, àti àpò náà tí kò kan ilẹ̀, tí ó jìnnà sí ògiri, tí eku kò sì lè dé" },
    { id: "O6", condition: "Fún irè tútù", action: "jẹ́ kí ó wà ní tutù, pín in ní ìpele bí olùrà ṣe fẹ́, kí o sì dì í kí ó dé láìfarapa", standard: "nínú àpótí tó mọ́, tí afẹ́fẹ́ ń wọ̀, tí a sì kọ àmì sí" }
  ],
  chapters: [
    {
      name: "Orí 1: Kíkó ìkórè wọlé dáadáa",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ibi tí ìkórè ti ń sọnù, àti ìdí rẹ̀",
          minutes: 4,
          goal: "Tẹ̀lé irè rẹ láti oko dé ọ̀dọ̀ olùrà, kí o sì sàmì sí ibi tí ó ti ń pàdánù iye tàbí owó.",
          text: [
            "Ní 2019, FAO ṣírò pé nǹkan bí 14 nínú ọgọ́rùn-ún oúnjẹ àgbáyé ló ń sọnù láàárín ìkórè àti ṣọ́ọ̀bù, kí ó tó dé ọjà rárá. Lórí ọ̀pọ̀ oko ní Áfíríkà, àdánù fún àwọn irè kan ga ju bẹ́ẹ̀ lọ. Àpò kọ̀ọ̀kan tí ó sọnù jẹ́ irúgbìn, ajílẹ̀ àti iṣẹ́ tí a jù nù.",
            "Àdánù ń ṣẹlẹ̀ ní gbogbo ìgbésẹ̀: kíkórè ní kùtùkùtù jù tàbí ní pẹ́ jù, fífi irè sílẹ̀ nínú òjò, gbígbé e ní ọ̀nà líle tí ó ń pa á lára, ooru, sísá a gbẹ díẹ̀díẹ̀ jù, kòkòrò bí kòkòrò ọkà (weevil) àti larger grain borer, eku, èbu, àti dídì í burúkú lórí ọ̀nà tí kò dán. Àwọn àdánù kan o lè rí (àpò tí ó dín kù); àwọn míì o kò lè rí (ìpele tí ó lọ sílẹ̀, owó tí ó lọ sílẹ̀, tàbí ọkà tí kò léwu láti jẹ).",
            "Ìgbésẹ̀ àkọ́kọ́ ni láti wá àwọn àdánù tìrẹ tí ó tóbi jù. Tẹ̀lé irè rẹ láti oko dé ọ̀dọ̀ olùrà, kí o sì béèrè ní ìgbésẹ̀ kọ̀ọ̀kan: kí ló ń ṣẹlẹ̀ tí kò dára níbí, èló ló ń sọnù, èló ló sì máa ná láti tún un ṣe?"
          ],
          steps: ["Kọ gbogbo ìgbésẹ̀ tí irè rẹ ń gbà kọjá: ìkórè, gbígbé, sísá gbẹ, pípa tàbí bíbó, pípamọ́, dídì, kíkó lọ, títà.", "Ní ìgbésẹ̀ kọ̀ọ̀kan, kọ ohun tí kò dára tí ó ń ṣẹlẹ̀ (òjò, fífarapa, kòkòrò, eku, èbu).", "Ṣírò bí ó ti tó tí ó ń sọnù tàbí bí owó ṣe ń lọ sílẹ̀ tó.", "Fa àyíká yí àwọn àdánù méjì tí ó tóbi jù ká; ibẹ̀ ni o ti máa bẹ̀rẹ̀."],
          words: [["Àdánù lẹ́yìn ìkórè", "oúnjẹ tàbí owó tí ó sọnù láàárín ìkórè àti títà."], ["Larger grain borer", "kòkòrò kan tí ó ń lu ihò sínú àgbàdo àti ẹ̀gẹ́ tí a pa mọ́, tí ó sì ń sọ wọ́n di ìyẹ̀fun."], ["Ìpele (grade)", "ẹgbẹ́ dídára, bí ìpele kìíní tàbí kejì, tí ó ń pinnu owó."]],
          slides: [
            { title: "Bí àdánù ṣe tóbi tó (FAO)", bullets: ["Nǹkan bí 14 nínú ọgọ́rùn-ún oúnjẹ ń sọnù láàárín ìkórè àti ṣọ́ọ̀bù", "Ó sábà máa ń ga jù fún àwọn irè kan lórí oko ní Áfíríkà", "Àpò kọ̀ọ̀kan tí ó sọnù ń fi irúgbìn, ajílẹ̀ àti iṣẹ́ ṣòfò"] },
            { title: "Ìdí tí ó fi ń ṣẹlẹ̀", bullets: ["Àkókò ìkórè tí kò tọ́, òjò, sísá gbẹ díẹ̀díẹ̀", "Fífarapa, ooru, ìrìnàjò líle", "Kòkòrò ọkà, grain borer, eku, èbu"] },
            { title: "Wá àwọn àdánù rẹ tí ó tóbi jù", bullets: ["Tẹ̀lé irè láti oko dé ọ̀dọ̀ olùrà", "Béèrè ohun tí kò dára ní ìgbésẹ̀ kọ̀ọ̀kan", "Bẹ̀rẹ̀ pẹ̀lú méjì tí ó tóbi jù"] }
          ],
          sources: [FAO_LOSS],
          tryIt: "Ya ọ̀nà irè rẹ láti oko dé ọ̀dọ̀ olùrà bí ìlà àwọn àpótí. Lábẹ́ àpótí kọ̀ọ̀kan, kọ ohun tí kò dára tí ó ń ṣẹlẹ̀ níbẹ̀ àti nǹkan bí iye tí ó ń sọnù. Fa àyíká yí àwọn àdánù méjì tí ó tóbi jù ká.",
          youCanNow: "ya ibi tí ìkórè rẹ ti ń pàdánù iye tàbí owó, kí o sì yan àwọn àdánù tí o máa kọ́kọ́ tún ṣe.",
          quickCheck: [
            { objective: "O1", q: "Kòkòrò wo ni a dárúkọ gẹ́gẹ́ bí kòkòrò ilé ìpamọ́ tí ó ń jẹ ọkà?", options: ["Oyin", "Ladybird", "Larger grain borer", "Labalábá"], answer: 2, why: "Kòkòrò ọkà (weevil) àti larger grain borer jẹ́ kòkòrò ilé ìpamọ́ tí ó ń fa àdánù ọkà." },
            { objective: "O1", q: "Ní ọjà, wọ́n kọ ọ̀pọ̀ nínú tòmátì rẹ nítorí pé wọ́n ti fọ́. Kí ni o máa ṣe?", options: ["Tẹ̀lé irè náà padà, wá ìgbésẹ̀ tí ó ti ń fọ́ àti iye tí ó máa ná láti tún un ṣe", "Ta á fún olùrà míì nígbà míì láìyí nǹkan kan padà", "Gbin irè míì", "Dá olùrà lẹ́bi"], answer: 0, why: "Títẹ̀lé irè ní ìgbésẹ̀ kọ̀ọ̀kan ń fi ibi tí àdánù ti ń ṣẹlẹ̀ àti ohun tí ó yẹ kí a tún ṣe hàn." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Kíkórè ní àkókò tó tọ́",
          minutes: 5,
          goal: "Mọ àwọn àmì pé irè rẹ kọ̀ọ̀kan ti ṣetán, kí o sì ṣètò ọjọ́ ìkórè.",
          text: [
            "Kíkórè ní kùtùkùtù jù ń fúnni ní ọkà kékeré tí kò wúwo, tàbí irè tí kò ní pọ́n dáadáa; kíkórè ní pẹ́ jù ń fa ìbàjẹ́ òjò, kòkòrò, ẹyẹ, olè àti jíjẹrà. Kọ́ àwọn àmì fún irè kọ̀ọ̀kan.",
            "Àgbàdo ti gbó nígbà tí èèpo rẹ̀ bá ti gbẹ, tí ọkà sì le pẹ̀lú ìpele dúdú (black layer) ní ìsàlẹ̀ rẹ̀; lẹ́yìn náà ó lè gbẹ sí i lórí igi rẹ̀ fún àkókò kúkúrú tí ojú-ọjọ́ bá gbẹ, ṣùgbọ́n má fi í sílẹ̀ níta nígbà òjò. Ẹ̀wà àti ẹ̀wà (cowpea) ti ṣetán nígbà tí ọ̀pọ̀ nínú pódì bá ti gbẹ tí wọ́n sì ń dún. Ọkà bàbà ti ṣetán nígbà tí ọkà bá le tí èékánná kò sì lè tẹ̀ ẹ́ wọlé. A máa ń ká tòmátì ní ìpele àwọ̀ tí olùrà rẹ fẹ́ (ó sábà máa ń jẹ́ nígbà tí ó ṣẹ̀ṣẹ̀ ń yí àwọ̀ padà fún ọjà tí ó jìnnà). Kọfí: ká kìkì èso pupa tí ó ti pọ́n. Tíì: já ẹ̀ka tuntun tí ó rọ̀, tí ó sábà máa ń jẹ́ ewé méjì àti ẹ̀hù kan. Gbòǹgbò ẹ̀gẹ́ máa ń bàjẹ́ láàárín ọjọ́ díẹ̀ lẹ́yìn ìkórè, nítorí náà hú kìkì èyí tí o lè tà tàbí ṣe kíákíá.",
            "Ṣètò ọjọ́ ìkórè pẹ̀lú àsọtẹ́lẹ̀ ojú-ọjọ́. Kórè irè tútù ní àárọ̀ kùtùkùtù tí ó tutù, jẹ́ kí ó wà ní ibòji, kí o sì ní àpò, àpótí, tapólì àti òṣìṣẹ́ ní sẹpẹ́ kí o tó bẹ̀rẹ̀."
          ],
          steps: ["Kọ àwọn àmì pé ó ti ṣetán fún irè kọ̀ọ̀kan tí o ń gbìn.", "Rìn yí oko ká kí o sì ṣàyẹ̀wò àwọn àmì náà ní ọ̀sẹ̀ kọ̀ọ̀kan bí ìkórè ṣe ń súnmọ́.", "Ṣàyẹ̀wò àsọtẹ́lẹ̀ ojú-ọjọ́ kí o sì yan ọjọ́ tí ó gbẹ fún ọkà.", "Ní tapólì, àpò tàbí àpótí àti òṣìṣẹ́ ní sẹpẹ́.", "Kórè irè tútù ní àárọ̀ tí ó tutù kí o sì jẹ́ kí ó wà ní ibòji."],
          words: [["Gbígbó (maturity)", "ìpele tí irè ti dàgbà tán tí ó sì ṣetán fún ìkórè."], ["Ìpele dúdú (black layer)", "àmì dúdú ní ìsàlẹ̀ hóró àgbàdo tí ó fi hàn pé ó ti gbó."], ["Ewé méjì àti ẹ̀hù kan", "ẹ̀ka tíì tuntun tí ó rọ̀ tí àwọn tí ń já tíì máa ń já fún tíì tí ó dára."]],
          slides: [
            { title: "Kùtùkùtù jù tàbí pẹ́ jù, méjèèjì ló ń ná ọ", bullets: ["Kùtùkùtù jù: kékeré, kò wúwo, kò pọ́n dáadáa", "Pẹ́ jù: òjò, kòkòrò, ẹyẹ, olè, jíjẹrà"] },
            { title: "Àmì pé ó ti ṣetán", bullets: ["Àgbàdo: èèpo gbígbẹ, ọkà líle, ìpele dúdú", "Ẹ̀wà: ọ̀pọ̀ pódì ti gbẹ wọ́n sì ń dún", "Kọfí: kìkì èso pupa tí ó pọ́n; tíì: ewé méjì àti ẹ̀hù kan"] },
            { title: "Irè tútù", bullets: ["Tòmátì: ìpele àwọ̀ tí olùrà fẹ́", "Ẹ̀gẹ́: hú kìkì èyí tí o lè tà láìpẹ́", "Kórè ní àárọ̀ tí ó tutù; jẹ́ kí ó wà ní ibòji"] },
            { title: "Wà ní sẹpẹ́", bullets: ["Ṣàyẹ̀wò àsọtẹ́lẹ̀; yan ọjọ́ tí ó gbẹ", "Kọ́kọ́ ní tapólì, àpò, àpótí àti òṣìṣẹ́"] }
          ],
          tryIt: "Fún irè méjì tí o ń gbìn, kọ àwọn àmì pé wọ́n ti ṣetán àti ọjọ́ tí o retí láti kórè. Béèrè lọ́wọ́ olùrà rẹ ìpele tàbí dídára tí ó fẹ́ kí o sì kọ ọ́ sílẹ̀. Ṣe ìránnilétí lórí fóònù láti ṣàyẹ̀wò àsọtẹ́lẹ̀ ojú-ọjọ́ ní ọ̀sẹ̀ kan ṣáájú.",
          youCanNow: "mọ ìgbà tí irè rẹ ti ṣetán, kí o sì ṣètò ọjọ́ ìkórè tí ó ń dáàbò bo dídára rẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Báwo ni o ṣe mọ̀ pé ọkà bàbà ti ṣetán fún ìkórè?", options: ["Ewé rẹ̀ ṣì jẹ́ àwọ̀ ewé", "Orí rẹ̀ kéré", "Ọkà rẹ̀ rọ̀ ó sì dà bí wàrà", "Ọkà rẹ̀ le, èékánná kò sì lè tẹ̀ ẹ́ wọlé"], answer: 3, why: "Ọkà bàbà ti ṣetán nígbà tí ọkà bá le tí èékánná kò sì lè tẹ̀ ẹ́ wọlé." },
            { objective: "O2", q: "Àgbàdo rẹ ti gbó, àsọtẹ́lẹ̀ sì sọ pé òjò ńlá máa rọ̀ ní ọ̀sẹ̀ tó ń bọ̀. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀ lórí igi rẹ̀ la òjò já", "Kórè ṣáájú òjò, pẹ̀lú tapólì àti àpò ní sẹpẹ́", "Kórè kìkì lẹ́yìn tí òjò bá dá", "Gé e kí o sì fi í sílẹ̀ lórí ilẹ̀"], answer: 1, why: "Ṣètò ìkórè pẹ̀lú àsọtẹ́lẹ̀, má sì fi àgbàdo tí ó ti gbó sílẹ̀ níta nígbà òjò." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Sísá ọkà gbẹ dé ọ̀rinrin tí kò léwu",
          minutes: 6,
          goal: "Sá ọkà gbẹ kíákíá, kí o sì ṣàyẹ̀wò pé ó ti dé ọ̀rinrin tí kò léwu fún ìpamọ́.",
          text: [
            "Ọkà tí a ṣẹ̀ṣẹ̀ kórè ní omi púpọ̀ nínú. Ọkà tí ó tutù máa ń gbóná, ó máa ń hu èbu, ó sì máa ń fa kòkòrò mọ́ra. Ìtọ́sọ́nà FAO lórí àgbàdo sọ pé sísá a gbẹ dé ọ̀rinrin tí kò léwu, nǹkan bí 13 sí 14 nínú ọgọ́rùn-ún, kí èbu tó hù, ni ọ̀nà tí ó dájú jù láti dènà aflatoxin, àti pé sísá gbẹ gbọ́dọ̀ yá: ọkà tí ó wà ní tutù fún ohun tí ó ju nǹkan bí ọjọ́ méjì lọ wà nínú ewu tí ó ga jù. Olùrà rẹ, ẹgbẹ́ alájùmọ̀ṣe rẹ tàbí òdiwọ̀n orílẹ̀-èdè lè ní òdiwọ̀n tí ó ga jù tiwọn, nítorí náà béèrè.",
            "Sá a sórí tapólì tó mọ́, pèpéle tí a gbé sókè, ẹní tàbí ilẹ̀ sìmẹ́ńtì, má ṣe sá a sórí ilẹ̀ lásán láéláé. Tẹ́ ọkà ní tínrín, yí i padà ní ọ̀pọ̀ ìgbà lójúmọ́, kí o sì bò ó tàbí kó o wọlé kí òjò tó rọ̀ àti ní alẹ́. Ọkà tí a ti bó máa ń gbẹ yá ju èyí tí ó ṣì wà lórí ṣùkú lọ. Ẹ̀rọ ìsá-oòrùn (solar dryer), tí ó jẹ́ férémù lásán tí a fi ọ̀rá tí ó mọ́lẹ̀ bò, máa ń sá a gbẹ yá jù, ó sì ń dí òjò, eruku àti ẹran lọ́wọ́.",
            "Ṣàyẹ̀wò ọ̀rinrin kí o tó pa á mọ́. Irinṣẹ́ tí ó dára jù ni ẹ̀rọ ìwọ̀n ọ̀rinrin (moisture meter); àwọn ẹgbẹ́ alájùmọ̀ṣe, olùrà, ọ́fíìsì ìdálẹ́kọ̀ọ́ àgbẹ̀ àti ilé ìkó-ọjà sábà máa ń ní ọ̀kan. Àyẹ̀wò ilé tí kò péye ni ìdánwò iyọ̀: fi ẹ̀kúnwọ́ iyọ̀ gbígbẹ àti ọkà díẹ̀ sínú ìgò dígí tó mọ́ tí ó gbẹ, mì í fún ìṣẹ́jú méjì sí mẹ́ta, tí iyọ̀ bá sì lẹ̀ mọ́ dígí, ọkà náà ṣì tutù jù. Ọkà tí ó yege ìdánwò yìí ṣì lè tutù díẹ̀, nítorí náà fi ẹ̀rọ ìwọ̀n ọ̀rinrin jẹ́rìí sí i nígbà tí o bá lè ṣe é."
          ],
          steps: ["Kórè nígbà tí ojú-ọjọ́ bá gbẹ.", "Tẹ́ ọkà ní tínrín sórí tapólì, ẹní, pèpéle tàbí sìmẹ́ńtì, má ṣe tẹ́ ẹ sórí ilẹ̀ lásán láéláé.", "Yí i padà ní ọ̀pọ̀ ìgbà lójúmọ́; bò ó nígbà òjò àti ní alẹ́.", "Sá a gbẹ kíákíá: gbìyànjú láti dé ọ̀rinrin tí kò léwu láàárín nǹkan bí ọjọ́ méjì lẹ́yìn bíbó.", "Ṣe ìdánwò iyọ̀; fi ẹ̀rọ ìwọ̀n ọ̀rinrin jẹ́rìí sí i lọ́dọ̀ ẹgbẹ́ alájùmọ̀ṣe tàbí olùrà rẹ.", "Pa á mọ́ kìkì nígbà tí ó bá gbẹ."],
          words: [["Ìwọ̀n ọ̀rinrin (moisture content)", "iye omi tí ó wà nínú ọkà, gẹ́gẹ́ bí ìdá nínú ọgọ́rùn-ún ìwúwo rẹ̀."], ["Ẹ̀rọ ìwọ̀n ọ̀rinrin (moisture meter)", "irinṣẹ́ tí ó ń wọn ọ̀rinrin ọkà."], ["Ìdánwò iyọ̀", "àyẹ̀wò ilé tí kò péye: iyọ̀ gbígbẹ máa ń lẹ̀ mọ́ ìgò tí ọkà bá ṣì tutù jù."], ["Ẹ̀rọ ìsá-oòrùn (solar dryer)", "férémù tí a fi ohun tí ó mọ́lẹ̀ bò, tí ó ń lo oòrùn láti sá irè gbẹ yá jù àti ní mímọ́ jù."]],
          slides: [
            { title: "Ìdí tí a fi ń sá a gbẹ", bullets: ["Ọkà tí ó tutù ń gbóná, ó ń hu èbu, ó sì ń fa kòkòrò", "FAO: sá àgbàdo gbẹ dé nǹkan bí 13 sí 14 nínú ọgọ́rùn-ún", "Kíákíá: láàárín nǹkan bí ọjọ́ méjì"] },
            { title: "Bí a ṣe ń sá a gbẹ", bullets: ["Tapólì, ẹní, pèpéle tàbí sìmẹ́ńtì, kì í ṣe ilẹ̀ lásán", "Tẹ́ ẹ ní tínrín, yí i padà lọ́pọ̀ ìgbà", "Bò ó kí òjò tó rọ̀ àti ní alẹ́"] },
            { title: "Ṣàyẹ̀wò kí o tó pa á mọ́", bullets: ["Èyí tí ó dára jù: ẹ̀rọ ìwọ̀n ọ̀rinrin (ẹgbẹ́ alájùmọ̀ṣe, olùrà, ìdálẹ́kọ̀ọ́ àgbẹ̀)", "Àyẹ̀wò tí kò péye: ìdánwò iyọ̀ nínú ìgò gbígbẹ", "Iyọ̀ lẹ̀ mọ́ ìgò = ó tutù jù; máa sá a gbẹ lọ"] }
          ],
          sources: [FAO_AFLA, FAO_DRYER],
          tryIt: "Ṣe ìdánwò iyọ̀ lórí ẹ̀kúnwọ́ ọkà rẹ (tàbí ti aládùúgbò): ìgò gbígbẹ, iyọ̀ gbígbẹ, mì í fún ìṣẹ́jú méjì sí mẹ́ta, wo dígí náà. Lẹ́yìn náà, wá ẹni tí ó ní ẹ̀rọ ìwọ̀n ọ̀rinrin nítòsí rẹ àti òdiwọ̀n ọ̀rinrin tí ó ga jù tí olùrà gbà.",
          youCanNow: "sá ọkà gbẹ kíákíá lórí ohun tó mọ́, kí o sì ṣàyẹ̀wò pé ó ti dé ọ̀rinrin tí kò léwu kí o tó pa á mọ́.",
          quickCheck: [
            { objective: "O3", q: "Kí ni ẹ̀rọ ìsá-oòrùn (solar dryer)?", options: ["Ààrò oníná", "Férémù tí a fi ọ̀rá tí ó mọ́lẹ̀ bò tí ó ń sá ọkà gbẹ yá jù, tí ó sì ń dí òjò àti eruku lọ́wọ́", "Àká irin fún ìpamọ́", "Ẹ̀rọ ìwọ̀n ọ̀rinrin"], answer: 1, why: "Ẹ̀rọ ìsá-oòrùn jẹ́ férémù lásán tí a fi ohun tí ó mọ́lẹ̀ bò tí ó ń sá ọkà gbẹ yá jù, tí ó sì ń dáàbò bò ó." },
            { objective: "O3", q: "Ìkùukùu òjò ń kó jọ ní ọ̀sán nígbà tí àgbàdo tí o ti bó ń gbẹ níta. Kí ni o máa ṣe?", options: ["Fi í sílẹ̀; ó máa gbẹ lẹ́yìn náà", "Tẹ́ ẹ ní tínrín sí i", "Da omi kúrò lórí rẹ̀ lẹ́yìn òjò", "Bò ó tàbí kó o wọlé kí òjò tó rọ̀"], answer: 3, why: "Bo ọkà tàbí kó o wọlé kí òjò tó rọ̀ àti ní alẹ́, kí ó má baà tún tutù." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Kíkó ìkórè wọlé dáadáa",
        questions: [
          { objective: "O1", q: "Ìdá mélòó nínú oúnjẹ ni FAO ṣírò pé ó ń sọnù láàárín ìkórè àti ṣọ́ọ̀bù (2019)?", options: ["1 nínú ọgọ́rùn-ún", "50 nínú ọgọ́rùn-ún", "Nǹkan bí 14 nínú ọgọ́rùn-ún", "Kò sí"], answer: 2, why: "Ìṣirò FAO ní 2019 jẹ́ nǹkan bí 14 nínú ọgọ́rùn-ún tí ó ń sọnù láàárín ìkórè àti ọjà títà." },
          { objective: "O2", q: "Èwo ni àmì pé hóró àgbàdo ti gbó?", options: ["Èèpo tí ó jẹ́ àwọ̀ ewé tí ó sì tutù", "Ọkà tí ó rọ̀ tí ó dà bí wàrà", "Irun àgbàdo tí ó ṣẹ̀ṣẹ̀ ń yọ", "Ìpele dúdú ní ìsàlẹ̀ hóró"], answer: 3, why: "Ìpele dúdú fi hàn pé ọkà ti gbó." },
          { objective: "O2", q: "O ní éékà 2 ẹ̀gẹ́, o sì lè ta ìdá mẹ́rin rẹ̀ nìkan ní ọ̀sẹ̀ yìí. Kí ni o máa ṣe?", options: ["Hú kìkì èyí tí o lè tà tàbí ṣe láìpẹ́", "Hú gbogbo rẹ̀ lẹ́ẹ̀kan náà", "Hú gbogbo rẹ̀ kí o sì fi í sílẹ̀ nínú oòrùn", "Má ṣe kórè ẹ̀gẹ́ láéláé"], answer: 0, why: "Gbòǹgbò ẹ̀gẹ́ máa ń bàjẹ́ láàárín ọjọ́ díẹ̀ lẹ́yìn ìkórè." },
          { objective: "O3", q: "Níbo ni o yẹ kí o sá àgbàdo sí?", options: ["Sórí ilẹ̀ lásán", "Sórí tapólì tó mọ́, ẹní, pèpéle tàbí ilẹ̀ sìmẹ́ńtì", "Sínú àpò tí a dí nínú òjò", "Ní òkìtì nínú oko"], answer: 1, why: "Ohun tó mọ́, tí a gbé sókè tàbí tí a bò, ń jẹ́ kí ọkà mọ́, ó sì ń sá a gbẹ yá jù." },
          { objective: "O3", q: "Nínú ìdánwò iyọ̀, iyọ̀ lẹ̀ mọ́ dígí. Kí ló túmọ̀ sí?", options: ["Ọkà ti gbẹ tó láti pa á mọ́", "Ọkà ní aflatoxin", "Ọkà ṣì tutù jù; máa sá a gbẹ lọ", "Iyọ̀ náà ti bàjẹ́"], answer: 2, why: "Iyọ̀ tí ó lẹ̀ mọ́ dígí fi hàn pé ọkà ṣì ní ọ̀rinrin púpọ̀ jù." }
        ]
      }
    },
    {
      name: "Orí 2: Pípa ìkórè mọ́ láìléwu kí ó sì ṣeé tà",
      lessons: [
        {
          objectives: ["O4"],
          title: "Aflatoxin: ohun tí ó jẹ́ àti bí a ṣe ń dènà rẹ̀",
          minutes: 6,
          goal: "Lo àwọn ìgbésẹ̀ pàtàkì tí ń dí aflatoxin lọ́wọ́ nínú àgbàdo àti ẹ̀pà rẹ.",
          text: [
            "Aflatoxin jẹ́ májèlé tí àwọn èbu kan (Aspergillus) ń ṣe, tí wọ́n ń hù lórí àgbàdo, ẹ̀pà, ọkà bàbà àti àwọn irè míì, nínú oko àti ní ilé ìpamọ́. Ọ̀pọ̀ ìgbà o kò lè rí i, gbọ́ òórùn rẹ̀ tàbí tọ́ ọ wò. Jíjẹ ẹ́ fún ìgbà pípẹ́ ń ba ẹ̀dọ̀ jẹ́, ó ní í ṣe pẹ̀lú jẹjẹrẹ ẹ̀dọ̀ àti ìdàgbàsókè tí kò péye nínú àwọn ọmọdé; iye púpọ̀ rẹ̀ lè pa ènìyàn. Ó tún ń kọjá láti inú oúnjẹ ẹran sínú wàrà àti ẹyin. Àwọn olùrà àti àwọn àjọ òdiwọ̀n oúnjẹ orílẹ̀-èdè máa ń ṣàyẹ̀wò rẹ̀, wọ́n sì máa ń kọ ọkà tí ó ju òdiwọ̀n òfin lọ.",
            "Dídènà rẹ̀ bẹ̀rẹ̀ nínú oko: irè tí ó ní ìlera, gbíngbìn ní àkókò, àti ṣíṣàkóso kòkòrò tí ó ń ba ṣùkú àti pódì jẹ́. Kórè ní àkókò, má fi irè sílẹ̀ lórí ilẹ̀, kí o sì sá a gbẹ kíákíá dé ọ̀rinrin tí kò léwu. FAO ṣàkíyèsí pé iye aflatoxin nínú àgbàdo tí a pa mọ́ ń ga sí i bí kòkòrò ọkà ṣe ń bà á jẹ́, nítorí náà jẹ́ kí ilé ìpamọ́ mọ́, kí o sì dí kòkòrò lọ́wọ́.",
            "Ṣà á kí o tó pa á mọ́: yọ ọkà àti ṣùkú tí ó ní èbu, tí ó fọ́, tí àwọ̀ rẹ̀ ti yí padà, tí kòkòrò ti bà jẹ́ àti tí ó ti rún kúrò. Má ṣe jẹ, tà tàbí fi ọkà tí ó ní èbu bọ́ ẹran láéláé. Àwọn ọjà biocontrol bí Aflasafe, tí IITA ṣe, tí a sì forúkọ rẹ̀ sílẹ̀ ní àwọn orílẹ̀-èdè bí Kenya, Nàìjíríà àti Ghana, ni a ń fọ́n sínú oko kí irè tó yọ òdòdó, láti lé àwọn èbu olóró sẹ́yìn; béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ tàbí olùtajà ohun èlò oko (agro-dealer) bóyá a ti fọwọ́ sí ọ̀kan fún irè àti agbègbè rẹ, kí o sì tẹ̀lé àmì-ìtọ́sọ́nà rẹ̀."
          ],
          steps: ["Ṣàkóso kòkòrò tí ó ń ba ṣùkú àti pódì jẹ́ nínú oko.", "Kórè ní àkókò; má fi irè sílẹ̀ lórí ilẹ̀.", "Sá a gbẹ kíákíá dé ọ̀rinrin tí kò léwu.", "Ṣà ọkà tí ó ní èbu, tí ó fọ́, tí àwọ̀ rẹ̀ ti yí padà àti tí kòkòrò ti bà jẹ́ kúrò.", "Pa á mọ́ sí ibi tó mọ́, tó gbẹ, tí kòkòrò kò lè wọ̀.", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ nípa ọjà biocontrol tí a fọwọ́ sí fún agbègbè rẹ."],
          words: [["Aflatoxin", "májèlé tí àwọn èbu kan ń ṣe lórí irè bí àgbàdo àti ẹ̀pà."], ["Aspergillus", "ẹgbẹ́ àwọn èbu tí ó lè ṣe aflatoxin."], ["Biocontrol", "lílo ohun alààyè tí kò léwu láti lé ohun alààyè tí ó léwu sẹ́yìn."], ["Ṣíṣà (sorting)", "yíyọ ọkà tàbí irè tí kò dára kúrò, pẹ̀lú ọwọ́ tàbí ẹ̀rọ."]],
          slides: [
            { title: "Ohun tí aflatoxin jẹ́", bullets: ["Májèlé tí àwọn èbu kan ń ṣe", "Ọ̀pọ̀ ìgbà a kò lè rí i: kò ní òórùn, kò ní adùn", "Ó ń ba ẹ̀dọ̀ jẹ́; ó ní í ṣe pẹ̀lú jẹjẹrẹ àti ìdàgbàsókè tí kò péye"] },
            { title: "Dá a dúró ní gbogbo ìgbésẹ̀", bullets: ["Irè tí ó ní ìlera; ṣàkóso kòkòrò ṣùkú àti pódì", "Kórè ní àkókò; sá a gbẹ kíákíá dé ọ̀rinrin tí kò léwu", "Ilé ìpamọ́ tó mọ́, tó gbẹ, tí kòkòrò kò lè wọ̀"] },
            { title: "Ṣà á, má sì lo ọkà tí ó ní èbu láéláé", bullets: ["Yọ ọkà tí ó ní èbu, tí ó fọ́, tí àwọ̀ rẹ̀ ti yí padà", "Má ṣe jẹ, tà tàbí fi ọkà tí ó ní èbu bọ́ ẹran láéláé", "Ó ń kọjá sínú wàrà àti ẹyin"] },
            { title: "Biocontrol", bullets: ["Aflasafe (IITA): a forúkọ rẹ̀ sílẹ̀ ní Kenya, Nàìjíríà, Ghana", "A ń fọ́n ọn sínú oko kí irè tó yọ òdòdó", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀; tẹ̀lé àmì-ìtọ́sọ́nà"] }
          ],
          sources: [FAO_AFLA, IITA_AFLASAFE],
          tryIt: "Mú díẹ̀ nínú ọkà tàbí ẹ̀pà tí o pa mọ́ kí o sì ṣà á lórí àwo: ya ọkà tí ó ní èbu, tí ó fọ́, tí àwọ̀ rẹ̀ ti yí padà àti tí kòkòrò ti bà jẹ́ sọ́tọ̀. Wọn wọ́n tàbí kà wọ́n, kí o sì kọ ìdá tí o yọ kúrò. Kọ ìgbésẹ̀ méjì tí o máa yí padà ní àsìkò tó ń bọ̀ láti dín in kù.",
          youCanNow: "ṣàlàyé ìdí tí aflatoxin fi léwu, kí o sì lo àwọn ìgbésẹ̀ oko, sísá gbẹ, ṣíṣà àti ìpamọ́ láti dí i lọ́wọ́.",
          quickCheck: [
            { objective: "O4", q: "Lórí àwọn irè wo ni èbu aflatoxin lè hù?", options: ["Àgbàdo, ẹ̀pà àti ọkà bàbà", "Tòmátì nìkan", "Tíì nìkan", "Ewé ẹ̀gẹ́ nìkan"], answer: 0, why: "Èbu Aspergillus ń hù lórí àgbàdo, ẹ̀pà, ọkà bàbà àti àwọn irè míì." },
            { objective: "O4", q: "O rí kòkòrò ọkà (weevil) nínú àgbàdo tí o pa mọ́. Kí ni o máa ṣe?", options: ["Fojú fò wọ́n; wọn kò ṣe nǹkan kan", "Fi ọkà tí ó ti bàjẹ́ bọ́ adìyẹ", "Ṣà ọkà tí ó ti bàjẹ́ kúrò kí o sì tún ilé ìpamọ́ ṣe láti dí kòkòrò lọ́wọ́, nítorí pé ìbàjẹ́ kòkòrò ọkà ń mú aflatoxin ga sí i", "Da ọkà tí ó ti bàjẹ́ pọ̀ mọ́ ọkà tí ó dára"], answer: 2, why: "Iye aflatoxin ń ga sí i pẹ̀lú ìbàjẹ́ kòkòrò ọkà; a máa ń ṣà ọkà tí ó ti bàjẹ́ kúrò, a kì í sì fi í bọ́ ẹran tàbí tà á." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Pípa ọkà mọ́ sínú àpò hermetic",
          minutes: 5,
          goal: "Kún àpò hermetic, dí i, kí o sì pa á mọ́ kí kòkòrò lè kú láìlo kẹ́míkà.",
          text: [
            "Hermetic túmọ̀ sí pé afẹ́fẹ́ kò lè wọ̀ ọ́. Àpò hermetic, bí àpò PICS tí wọ́n ṣe ní Purdue University, ní àpò ọ̀rá inú méjì (liner) nínú àpò híhun ti òde. Nígbà tí a bá ti dí i, kòkòrò àti ọkà máa ń lo oxygen inú rẹ̀ tán, kòkòrò náà á sì kú tàbí kí wọ́n dẹ́kun bíbí, láìsí oògùn kòkòrò. Purdue kọ àgbàdo, ọkà bàbà, ẹ̀wà, ẹ̀wà (cowpea), ẹ̀pà, ìrẹsì àti àwọn irè míì gẹ́gẹ́ bí èyí tí ó bá àpò yìí mu.",
            "Àpò náà ń ṣiṣẹ́ kìkì tí ọkà bá gbẹ tí afẹ́fẹ́ kò sì lè wọ àpò náà. Pa kìkì ọkà tí ó gbẹ, tí ó mọ́, tí a sì ti ṣà mọ́. Kún àpò inú àkọ́kọ́, ti afẹ́fẹ́ jáde bí o ti lè ṣe tó, lọ́ ọrùn rẹ̀ kí o sì so ó pinpin; lẹ́yìn náà ṣe bákan náà fún àpò inú kejì àti níkẹyìn fún àpò òde. Ṣàyẹ̀wò bóyá ihò wà kí o tó lò ó; ihò kékeré ń jẹ́ kí afẹ́fẹ́ wọlé, àpò náà á sì dẹ́kun iṣẹ́.",
            "Jẹ́ kí àpò má kan ilẹ̀ nípa gbígbé wọn sórí pákó ìgbérù (pallet) tàbí pákó, kí wọ́n jìnnà sí ògiri, nínú ilé ìpamọ́ tó mọ́, tó gbẹ, tí ó ní ibòji, kí o sì dáàbò bò wọ́n lọ́wọ́ eku, tí ó máa ń gé ihò sí i. Má ṣe ṣí wọn lọ́pọ̀ ìgbà: ìgbà kọ̀ọ̀kan tí o bá ṣí i, afẹ́fẹ́ tuntun ń wọlé. Àpò tí ó ṣì wà ní pípé lè tún ṣeé lò ní àsìkò tó ń bọ̀. Àwọn ọ̀nà míì tí ó dára ni àká irin (metal silo) àti àká tó mọ́, tí a gbé sókè, tí afẹ́fẹ́ ń wọ̀ dáadáa fún àgbàdo lórí ṣùkú."
          ],
          steps: ["Ṣàyẹ̀wò pé ọkà ti gbẹ, ó mọ́, a sì ti ṣà á.", "Ṣàyẹ̀wò àwọn àpò inú bóyá wọ́n ní ihò.", "Kún àpò inú àkọ́kọ́, ti afẹ́fẹ́ jáde, lọ́ ọ kí o sì so ó pinpin.", "So àpò inú kejì, lẹ́yìn náà àpò òde, ní ọ̀nà kan náà.", "Pa á mọ́ sórí pákó ìgbérù, kí ó jìnnà sí ògiri, nínú ilé ìpamọ́ tó gbẹ, tí ó ní ibòji, tí eku kò lè wọ̀.", "Ṣí i kìkì nígbà tí ó bá pọn dandan; tún àwọn àpò tí ó ṣì wà ní pípé lò."],
          words: [["Hermetic", "afẹ́fẹ́ kò lè wọlé tàbí jáde."], ["Àpò inú (liner)", "àpò ọ̀rá tí ó wà nínú àpò òde."], ["Pákó ìgbérù (pallet)", "pèpéle igi tí ó ń jẹ́ kí àpò má kan ilẹ̀."], ["Àká irin (metal silo)", "àpótí irin tí a dí tí a fi ń pa ọkà mọ́."]],
          slides: [
            { title: "Bí àpò hermetic ṣe ń ṣiṣẹ́", bullets: ["Àpò ọ̀rá inú méjì nínú àpò híhun (PICS)", "Tí a bá dí i: oxygen tán, kòkòrò kú", "Kò nílò oògùn kòkòrò"] },
            { title: "Dí i dáadáa", bullets: ["Kìkì ọkà tí ó gbẹ, tí ó mọ́, tí a ti ṣà", "Ti afẹ́fẹ́ jáde; lọ́ kí o sì so àpò kọ̀ọ̀kan", "Kọ́kọ́ ṣàyẹ̀wò àpò inú bóyá ihò wà"] },
            { title: "Pa á mọ́ dáadáa", bullets: ["Sórí pákó ìgbérù, kí ó jìnnà sí ògiri", "Ilé ìpamọ́ tó gbẹ, tí ó ní ibòji, tí eku kò lè wọ̀", "Má ṣí i lọ́pọ̀ ìgbà; tún àpò pípé lò"] }
          ],
          sources: [PICS],
          tryIt: "Wo ilé ìpamọ́ rẹ. Kọ ìyípadà mẹ́ta tí ó máa dáàbò bo àwọn àpò (pákó ìgbérù, àlàfo láàárín wọn àti ògiri, dídí eku lọ́wọ́, ibòji). Tí o bá lè ṣe é, ra àpò hermetic kan lọ́wọ́ olùtajà ohun èlò oko kí o sì fi ọkà gbígbẹ kọ́ bí a ṣe ń so àpò kọ̀ọ̀kan.",
          youCanNow: "dí ọkà kí o sì pa á mọ́ sínú àpò hermetic kí ó lè pẹ́ láìlo kẹ́míkà.",
          quickCheck: [
            { objective: "O5", q: "Kí ló wà nínú àpò híhun ti òde ti àpò PICS?", options: ["Ìbòrí irin", "Ìyẹ̀fun oògùn kòkòrò", "Àpò ọ̀rá inú méjì", "Kò sí nǹkan kan"], answer: 2, why: "Àpò PICS ní àpò ọ̀rá inú méjì nínú àpò híhun ti òde." },
            { objective: "O5", q: "O ti kún àpò inú àkọ́kọ́, o sì ti so ó. Kí ni o máa ṣe tẹ̀lé e?", options: ["Ti afẹ́fẹ́ jáde, lọ́ kí o sì so àpò inú kejì, lẹ́yìn náà so àpò òde", "Fi àpò inú kejì sílẹ̀ ní ṣíṣí fún afẹ́fẹ́", "Gé ihò láti ṣàyẹ̀wò ọkà", "Pa á mọ́ sínú oòrùn"], answer: 0, why: "A máa ń so àpò inú kọ̀ọ̀kan àti àpò òde pinpin kí afẹ́fẹ́ má lè wọ àpò náà." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Mímú irè tutù, pípín in ní ìpele àti dídì í",
          minutes: 5,
          goal: "Jẹ́ kí irè tútù wà ní tutù, pín in ní ìpele bí olùrà ṣe fẹ́, kí o sì dì í kí ó dé láìfarapa.",
          text: [
            "Irè tútù bí tòmátì, kale, máńgòrò àti píà (avocado) ṣì ń wà láàyè, wọ́n sì ń mí lẹ́yìn ìkórè. Ooru ń mú èyí yá, nítorí náà wọ́n máa ń pọ́n, rọ, wọ́n sì máa ń jẹrà yá jù. Kórè ní àárọ̀ tí ó tutù, jẹ́ kí irè wà ní ibòji nígbà gbogbo, kí o sì gbé e dé ọ̀dọ̀ olùrà kíákíá.",
            "Láìsí iná mànàmáná, ẹ̀rọ ìtutù omi (evaporative cooler) ń ṣèrànwọ́. Zero Energy Cooling Chamber tí FAO kọ sílẹ̀ jẹ́ ògiri bíríkì méjì pẹ̀lú yanrìn tútù láàárín wọn àti ìbòrí tútù lókè; bí omi ṣe ń gbẹ lọ, ó ń mú inú rẹ̀ tutù, ó sì ń jẹ́ kí afẹ́fẹ́ inú rẹ̀ ní ọ̀rinrin kí irè má baà rọ. Ó ń ṣiṣẹ́ dáadáa jù ní ibi tí ó gbẹ tí ó sì gbóná. Ìkòkò amọ̀ ìtutù ń ṣiṣẹ́ ní ọ̀nà kan náà ní ìwọ̀n kékeré.",
            "Pípín ní ìpele (grading) túmọ̀ sí ṣíṣà irè sí ẹgbẹ́ nípa ìwọ̀n, bí ó ti pọ́n tó àti dídára, àti yíyọ èyí tí ó ti bàjẹ́ kúrò kí ó má baà ba èyí tó kù jẹ́. Àwọn olùrà máa ń san owó púpọ̀ sí i fún irè tí ó dọ́gba, tí ó mọ́, tí a sì ti pín ní ìpele. Fún irè tí ó rọ̀, dì í sínú àpótí tó mọ́, tó lágbára, tí afẹ́fẹ́ ń wọ̀ dípò àpò, má ṣe kún un jù, kí o sì kọ ìpele, ọjọ́ àti orúkọ rẹ sí àpótí kọ̀ọ̀kan. Fọ́tò lórí fóònù fún ẹgbẹ́ irè kọ̀ọ̀kan tí a ti pín ní ìpele ń ṣèrànwọ́ láti yanjú aáwọ̀ pẹ̀lú olùrà."
          ],
          steps: ["Béèrè lọ́wọ́ olùrà nípa ìpele rẹ̀: ìwọ̀n, bí ó ti pọ́n tó, dídára.", "Kórè ní àárọ̀ tí ó tutù kí o sì jẹ́ kí irè wà ní ibòji.", "Pín in sí ìpele; yọ èyí tí ó ti bàjẹ́ kúrò.", "Lo ẹ̀rọ ìtutù omi tí o bá gbọ́dọ̀ pa irè mọ́ fún àkókò díẹ̀.", "Dì í sínú àpótí tó mọ́, tí afẹ́fẹ́ ń wọ̀; má ṣe kún un jù.", "Kọ ìpele, ọjọ́ àti orúkọ sí àpótí; ya fọ́tò."],
          words: [["Ẹ̀rọ ìtutù omi (evaporative cooler)", "ibi ìpamọ́ tí omi tí ń gbẹ lára ògiri tútù, yanrìn tàbí aṣọ ń mú tutù."], ["Pípín ní ìpele (grading)", "ṣíṣà irè sí ẹgbẹ́ dídára."], ["Àpótí tí afẹ́fẹ́ ń wọ̀ (ventilated crate)", "àpótí tí ó ní ihò tí ń jẹ́ kí afẹ́fẹ́ máa ṣàn yí irè ká."]],
          slides: [
            { title: "Ooru ni ọ̀tá", bullets: ["Irè ṣì ń mí lẹ́yìn ìkórè", "Kórè ní àárọ̀ tí ó tutù", "Ibòji nígbà gbogbo; tà á kíákíá"] },
            { title: "Ìtutù láìsí iná (FAO)", bullets: ["Zero Energy Cooling Chamber: yanrìn tútù láàárín ògiri bíríkì", "Inú rẹ̀ tutù, ó sì ní ọ̀rinrin", "Ó dára jù ní ibi tí ó gbẹ tí ó sì gbóná"] },
            { title: "Pín in ní ìpele kí o sì dì í", bullets: ["Ṣà á nípa ìwọ̀n, bí ó ti pọ́n tó àti dídára", "Àpótí tó mọ́ tí afẹ́fẹ́ ń wọ̀, kì í ṣe àpò", "Kọ ìpele, ọjọ́, orúkọ; ya fọ́tò"] }
          ],
          sources: [FAO_ZECC],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò lẹ́yìn ìkórè rẹ ní ojú-ewé kan fún irè kan. Kọ òfin dídára olùrà sí òkè, lẹ́yìn náà àkókò ìkórè rẹ, sísá gbẹ àti àyẹ̀wò ọ̀rinrin (fún ọkà), àwọn ìgbésẹ̀ aflatoxin, ìpamọ́, àti bí o ṣe máa jẹ́ kí ó tutù, pín in ní ìpele àti dì í.",
          youCanNow: "jẹ́ kí irè tútù wà ní tutù, pín in ní ìpele kí o sì dì í bí olùrà ṣe fẹ́, kí o sì ṣe ètò lẹ́yìn ìkórè pípé fún irè kan.",
          quickCheck: [
            { objective: "O6", q: "Níbo ni Zero Energy Cooling Chamber ti ń ṣiṣẹ́ dáadáa jù?", options: ["Ní ibi tí ó tutù tí ó sì ní òjò", "Ní ibi tí ó gbẹ tí ó sì gbóná", "Nínú fìríìjì nìkan", "Ní alẹ́ nìkan"], answer: 1, why: "Ẹ̀rọ ìtutù omi ń ṣiṣẹ́ dáadáa jù ní ibi tí ó gbẹ tí ó sì gbóná, níbi tí omi ti ń gbẹ kíákíá." },
            { objective: "O6", q: "Olùrà kan sọ pé ìpele àpótí rẹ kò tọ́. Kí ló ń ṣèrànwọ́ láti yanjú aáwọ̀ náà?", options: ["Pípariwo", "Dín owó rẹ kù lẹ́sẹ̀kẹsẹ̀", "Kíkó àpótí padà sílé", "Àmì ìpele àti ọjọ́, àti fọ́tò lórí fóònù fún ẹgbẹ́ irè kọ̀ọ̀kan tí a ti pín ní ìpele"], answer: 3, why: "Àpótí tí a kọ àmì sí àti fọ́tò ẹgbẹ́ irè kọ̀ọ̀kan tí a ti pín ní ìpele ń ṣèrànwọ́ láti yanjú aáwọ̀ pẹ̀lú olùrà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Pípa ìkórè mọ́ láìléwu kí ó sì ṣeé tà",
        questions: [
          { objective: "O4", q: "Kí ni aflatoxin?", options: ["Ajílẹ̀ kan", "Májèlé tí àwọn èbu kan ń ṣe lórí irè", "Oríṣi kòkòrò ọkà kan", "Àpò ìpamọ́ kan"], answer: 1, why: "Aflatoxin jẹ́ májèlé tí àwọn èbu Aspergillus kan ń ṣe." },
          { objective: "O4", q: "Àwọn ṣùkú kan nínú àgbàdo rẹ ní èbu. Kí ni o yẹ kí o ṣe pẹ̀lú wọn?", options: ["Fi wọ́n bọ́ adìyẹ", "Da wọ́n pọ̀ mọ́ ọkà tí ó dára", "Tà wọ́n ní owó pọ́ọ́kú", "Yọ wọ́n kúrò; má ṣe jẹ wọ́n, tà wọ́n tàbí fi wọ́n bọ́ ẹran"], answer: 3, why: "Aflatoxin ń pa ènìyàn lára, ó sì ń kọjá láti inú oúnjẹ ẹran sínú wàrà àti ẹyin." },
          { objective: "O5", q: "Báwo ni àpò hermetic ṣe ń pa kòkòrò ilé ìpamọ́?", options: ["Oxygen inú rẹ̀ máa ń tán nígbà tí a bá ti dí i", "Ó ní májèlé nínú", "A máa ń mú un gbóná", "Ó ń jẹ́ kí afẹ́fẹ́ tuntun wọlé"], answer: 0, why: "Tí a bá dí i pinpin, oxygen máa ń tán, kòkòrò á sì kú láìlo kẹ́míkà." },
          { objective: "O5", q: "Kí ló dé tí a fi ń gbé àpò ọkà sórí pákó ìgbérù kí wọ́n sì jìnnà sí ògiri?", options: ["Kí ó lè dára lójú nìkan", "Láti mú wọn wúwo sí i", "Láti dí ọ̀rinrin lọ́wọ́ àti láti jẹ́ kí ó rọrùn láti rí eku àti kòkòrò", "Kí oòrùn lè tàn sí àpò"], answer: 2, why: "Pákó ìgbérù àti àlàfo láàárín àpò àti ògiri ń jẹ́ kí àpò gbẹ, ó sì rọrùn láti ṣàyẹ̀wò wọn." },
          { objective: "O6", q: "Kí ni ọ̀nà tí ó dára jù láti di tòmátì tí ó ti pọ́n fún ọjà?", options: ["Kí ó há gádígádí nínú àpò", "Ní fífọ́nká lórí ilẹ̀ ọkọ̀ akẹ́rù", "Nínú àpò ọ̀rá tí a dí nínú oòrùn", "Nínú àpótí tó mọ́, tí afẹ́fẹ́ ń wọ̀, tí a kò kún jù"], answer: 3, why: "Àpótí ń dáàbò bo irè tí ó rọ̀ kí ó má fọ́, ó sì ń jẹ́ kí afẹ́fẹ́ máa ṣàn." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìtọ́jú àti Ìpamọ́ Irè Lẹ́yìn Ìkórè",
    questions: [
      { objective: "O1", q: "Èwo ni ohun tí ó sábà máa ń fa àdánù lẹ́yìn ìkórè?", options: ["Sísá gbẹ kíákíá", "Kòkòrò ọkà, eku àti èbu ní ilé ìpamọ́", "Àpótí tó mọ́", "Pípín ní ìpele"], answer: 1, why: "Kòkòrò àti èbu ní ilé ìpamọ́ jẹ́ àwọn ohun pàtàkì tí ó ń fa àdánù." },
      { objective: "O1", q: "Kí ló dé tí a fi ń ya ọ̀nà irè wa láti oko dé ọ̀dọ̀ olùrà?", options: ["Láti wá ibi tí àdánù tí ó tóbi jù ti ń ṣẹlẹ̀", "Láti mú ọ̀nà náà gùn sí i", "Láti yẹra fún olùrà", "Kò wúlò"], answer: 0, why: "Mímọ ibi tí àdánù ti ń ṣẹlẹ̀ ń sọ ibi tí o máa kọ́kọ́ ṣiṣẹ́ lé lórí fún ọ." },
      { objective: "O1", q: "Owó tí ó lọ sílẹ̀ nítorí dídára tí kò dára jẹ́:", options: ["Kì í ṣe àdánù", "Èrè", "Àdánù lẹ́yìn ìkórè tí a kò rí", "Owó orí"], answer: 2, why: "Pípàdánù ìpele tàbí owó jẹ́ àdánù iye, bí àpò kankan kò bá tilẹ̀ sọnù." },
      { objective: "O2", q: "Ẹ̀wà ti ṣetán fún ìkórè nígbà tí:", options: ["Òdòdó bá ṣí", "Ewé bá jẹ́ àwọ̀ ewé dúdú", "Pódì ṣì rọ̀", "Ọ̀pọ̀ nínú pódì ti gbẹ wọ́n sì ń dún"], answer: 3, why: "Pódì gbígbẹ tí ó ń dún fi hàn pé ẹ̀wà ti gbó." },
      { objective: "O2", q: "Nígbà tí o bá ń ká kọfí, o yẹ kí o ká:", options: ["Kìkì èso pupa tí ó ti pọ́n", "Èso tí ó jẹ́ àwọ̀ ewé", "Ewé àti èso pọ̀", "Èso tí ó ti jábọ́ sílẹ̀"], answer: 0, why: "Èso pupa tí ó ti pọ́n ń fúnni ní kọfí tí ó dára jù." },
      { objective: "O2", q: "Òdiwọ̀n tí a sábà máa ń lò fún jíjá tíì ni:", options: ["Ewé tí ó ti gbó tí ó sì le", "Ewé méjì àti ẹ̀hù kan", "Gbogbo ẹ̀ka", "Gbòǹgbò"], answer: 1, why: "Ẹ̀ka tuntun tí ó rọ̀, ewé méjì àti ẹ̀hù kan, ń fúnni ní tíì tí ó dára." },
      { objective: "O2", q: "Kí ló dé tí a fi ń kórè irè tútù ní àárọ̀ tí ó tutù?", options: ["Àwọn olùrà máa ń pẹ́ jí", "Ó dín owó kù", "Ooru ń mú pípọ́n, rírọ àti jíjẹrà yá", "Ìrì àárọ̀ ń fi ìwúwo kún un"], answer: 2, why: "Irè tí ó tutù máa ń pẹ́ jù." },
      { objective: "O3", q: "Ìtọ́sọ́nà FAO sọ pé ọ̀rinrin tí kò léwu fún pípa àgbàdo mọ́ jẹ́ nǹkan bí:", options: ["13 sí 14 nínú ọgọ́rùn-ún", "25 nínú ọgọ́rùn-ún", "40 nínú ọgọ́rùn-ún", "2 nínú ọgọ́rùn-ún"], answer: 0, why: "FAO sọ pé sísá a gbẹ dé nǹkan bí 13 sí 14 nínú ọgọ́rùn-ún kí èbu tó hù ni ọ̀nà tí kò léwu jù láti dènà aflatoxin." },
      { objective: "O3", q: "Báwo ni ó ṣe yẹ kí a sá àgbàdo tí a ṣẹ̀ṣẹ̀ bó gbẹ yá tó?", options: ["Láàárín nǹkan bí ọ̀sẹ̀ méjì", "Kò sí ìkánjú", "Lẹ́yìn àsìkò òjò tó ń bọ̀", "Láàárín nǹkan bí ọjọ́ méjì"], answer: 3, why: "FAO ṣàkíyèsí pé aflatoxin ń ga sí i kíákíá tí àgbàdo bá wà ní tutù fún ohun tí ó ju nǹkan bí ọjọ́ méjì lọ." },
      { objective: "O3", q: "Ọ̀nà tí ó péye jù láti ṣàyẹ̀wò ọ̀rinrin ọkà ni:", options: ["Fífi eyín gé hóró kan", "Ẹ̀rọ ìwọ̀n ọ̀rinrin", "Wíwo àwọ̀ rẹ̀", "Wíwọn àpò"], answer: 1, why: "Ẹ̀rọ ìwọ̀n ọ̀rinrin ń wọ̀n ọ́n; ìdánwò iyọ̀ jẹ́ àyẹ̀wò tí kò péye nìkan." },
      { objective: "O3", q: "Kí ló dé tí a kò fi gbọ́dọ̀ sá ọkà sórí ilẹ̀ lásán?", options: ["Ó máa ń gbẹ yá jù", "Ó lòdì sí gbogbo òfin", "Erùpẹ̀, ọ̀rinrin àti irúgbìn èbu ń wọ inú ọkà", "Erùpẹ̀ ń mú ọkà wúwo, ó sì ń mú owó rẹ̀ ga"], answer: 2, why: "Ilẹ̀ lásán ń ba ọkà jẹ́, ó sì ń jẹ́ kí ó wà ní tutù." },
      { objective: "O4", q: "Ọ̀kan nínú ìdí tí aflatoxin fi léwu ni pé:", options: ["Ó ní òórùn líle tí ènìyàn fi ń yẹra fún un", "Ọ̀pọ̀ ìgbà o kò lè rí i, gbọ́ òórùn rẹ̀ tàbí tọ́ ọ wò", "Ó ń kan ewéko nìkan", "Ó ń pòórá nígbà tí a bá se ọkà"], answer: 1, why: "A kò sábà lè rí i, nítorí náà dídènà àti àyẹ̀wò ṣe pàtàkì." },
      { objective: "O4", q: "Aflatoxin nínú oúnjẹ ẹran lè:", options: ["Kọjá sínú wàrà àti ẹyin", "Mú ẹran dàgbà yá", "Kò ṣe ẹran ní nǹkan kan", "Di ajílẹ̀"], answer: 0, why: "Aflatoxin láti inú oúnjẹ ẹran lè fara hàn nínú wàrà àti ẹyin." },
      { objective: "O4", q: "Aflasafe jẹ́:", options: ["Àpò ìpamọ́ kan", "Ẹ̀rọ ìwọ̀n ọ̀rinrin kan", "Orúkọ ọjà irúgbìn àgbàdo kan", "Ọjà biocontrol tí ó ń lé àwọn èbu olóró sẹ́yìn"], answer: 3, why: "Aflasafe, láti ọ̀dọ̀ IITA, ń lo èbu tí kò léwu láti lé àwọn olóró sẹ́yìn." },
      { objective: "O4", q: "Kí o tó lo ọjà biocontrol, o yẹ kí o:", options: ["Dà á pọ̀ mọ́ ọkà tí a pa mọ́", "Béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ bóyá a ti fọwọ́ sí i fún irè àti agbègbè rẹ, kí o sì tẹ̀lé àmì-ìtọ́sọ́nà", "Fi ìlọ́po méjì iye rẹ̀ sí i", "Lò ó lẹ́yìn ìkórè nìkan"], answer: 1, why: "Lo kìkì ọjà tí a fọwọ́ sí, bí àmì-ìtọ́sọ́nà ṣe sọ." },
      { objective: "O5", q: "Kí ló gbọ́dọ̀ jẹ́ òótọ́ kí ọkà tó wọ inú àpò hermetic?", options: ["Ó ti gbẹ, ó mọ́, a sì ti ṣà á", "Ó ṣì tutù", "A ti da oògùn kòkòrò pọ̀ mọ́ ọn", "Ó ṣì gbóná láti inú oòrùn"], answer: 0, why: "Àpò hermetic kì í sá ọkà gbẹ; ọkà tí ó tutù ṣì máa hu èbu." },
      { objective: "O5", q: "Àpò inú àpò hermetic kan ní ihò kékeré. Kí ló máa ṣẹlẹ̀?", options: ["Kò sí nǹkan", "Ó máa ṣiṣẹ́ dáadáa sí i", "Afẹ́fẹ́ máa wọlé, àpò náà á sì dẹ́kun iṣẹ́", "Ọkà máa gbẹ yá jù"], answer: 2, why: "Àpò náà gbọ́dọ̀ jẹ́ èyí tí afẹ́fẹ́ kò lè wọ̀ kí kòkòrò lè pàdánù oxygen." },
      { objective: "O5", q: "Kí ló dé tí o kò fi gbọ́dọ̀ máa ṣí àpò hermetic lọ́pọ̀ ìgbà?", options: ["Wọ́n máa ń wúwo sí i", "Ìgbà kọ̀ọ̀kan tí o bá ṣí i, afẹ́fẹ́ tuntun ń wọlé", "Ṣíṣí wọn lòdì sí òfin", "Kòkòrò fẹ́ràn ìmọ́lẹ̀"], answer: 1, why: "Afẹ́fẹ́ tuntun ń mú oxygen padà wá fún kòkòrò." },
      { objective: "O6", q: "Zero Energy Cooling Chamber ń mú irè tutù nípa:", options: ["Iná mànàmáná", "Yìnyín láti ṣọ́ọ̀bù", "Gáàsì", "Omi tí ń gbẹ lára yanrìn tútù láàárín ògiri bíríkì"], answer: 3, why: "Gbígbẹ omi ń mú yàrá náà tutù, ó sì ń jẹ́ kí afẹ́fẹ́ ní ọ̀rinrin." },
      { objective: "O6", q: "Kí ló dé tí a fi ń pín irè ní ìpele kí a tó tà á?", options: ["Àwọn olùrà máa ń san owó púpọ̀ sí i fún irè tí ó dọ́gba, tí ó mọ́, tí a sì ti ṣà", "Ó ń mú irè jẹrà yá", "Ó ń fi èyí tí ó ti bàjẹ́ pamọ́", "Fún ọjà òkèèrè nìkan ni"], answer: 0, why: "Pípín ní ìpele ń bá òdiwọ̀n olùrà mu, ó sì ń yọ èyí tí ó ti bàjẹ́ kúrò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      1,
      3,
      7,
      9,
      11,
      14,
      15,
      16,
      18
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe kí o sì tún ṣàyẹ̀wò rẹ̀.",
    criteria: [
      {
        name: "Òfin olùrà àti àkókò ìkórè",
        objective: "O2",
        notYet: "Kò sí òfin olùrà, tàbí kò sí àmì pé irè ti ṣetán.",
        meets: "Òfin dídára olùrà wà ní òkè, pẹ̀lú àwọn àmì pé irè ti ṣetán àti bí a ṣe máa ṣètò ọjọ́ ìkórè.",
        exceeds: "Ó fi hàn pé a ti ṣètò irinṣẹ́, àpò tàbí àpótí àti òṣìṣẹ́ kí ìkórè tó bẹ̀rẹ̀."
      },
      {
        name: "Sísá gbẹ àti ọ̀rinrin",
        objective: "O3",
        notYet: "Kò sí ibi sísá gbẹ tàbí àyẹ̀wò ọ̀rinrin (fún ọkà).",
        meets: "Sísá gbẹ lórí ohun tí kì í ṣe ilẹ̀, yíyí i padà àti bíbò ó, àti àyẹ̀wò ọ̀rinrin pẹ̀lú ẹ̀rọ ìwọ̀n ọ̀rinrin tàbí ìdánwò iyọ̀.",
        exceeds: "Ó dárúkọ ibi tí a ti lè lo ẹ̀rọ ìwọ̀n ọ̀rinrin, bí ẹgbẹ́ alájùmọ̀ṣe tàbí olùrà."
      },
      {
        name: "Dídènà aflatoxin",
        objective: "O4",
        notYet: "Kò sí ìgbésẹ̀ kankan lòdì sí aflatoxin, tàbí a pa ọkà tí ó ní èbu mọ́.",
        meets: "Ìgbésẹ̀ oko, sísá gbẹ, ṣíṣà àti ilé ìpamọ́, pẹ̀lú ọkà tí ó ní èbu tí a yọ kúrò tí a kò sì jẹ, tà tàbí fi bọ́ ẹran láéláé.",
        exceeds: "Ó béèrè lọ́wọ́ òṣìṣẹ́ ìdálẹ́kọ̀ọ́ àgbẹ̀ bóyá ọjà biocontrol tí a fọwọ́ sí bá irè àti agbègbè náà mu."
      },
      {
        name: "Ìpamọ́",
        objective: "O5",
        notYet: "Kò sí ọ̀nà ìpamọ́, tàbí a pa ọkà tí ó tutù mọ́.",
        meets: "Ọkà tí ó gbẹ, tí ó mọ́, tí a sì ti ṣà nínú àpò hermetic tàbí ilé ìpamọ́ míì tí ó dára, tí kò kan ilẹ̀, tí eku kò sì lè dé.",
        exceeds: "Ó kọ bí a ṣe máa ṣàyẹ̀wò àpò lọ́pọ̀ ìgbà láìṣí wọn."
      },
      {
        name: "Ìtutù, pípín ní ìpele àti dídì",
        objective: "O6",
        notYet: "Irè tútù wà nínú àpò tàbí nínú oòrùn, tàbí kò sí pípín ní ìpele.",
        meets: "Àkókò ìkórè tí ó tutù, ibòji, pípín ní ìpele bí olùrà ṣe fẹ́, àti àpótí tó mọ́ tí afẹ́fẹ́ ń wọ̀ tí a kọ àmì sí.",
        exceeds: "Ó lo ẹ̀rọ ìtutù omi tàbí fọ́tò fún ẹgbẹ́ irè kọ̀ọ̀kan tí a ti pín ní ìpele."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà rubric ti ètò lẹ́yìn ìkórè",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn pé wọ́n ń lo àpò hermetic, àyẹ̀wò ọ̀rinrin tàbí àpótí láàárín àsìkò kan (ìwádìí àtẹ̀lé)",
      "Ìyípadà nínú àdánù ní ilé ìpamọ́, ẹrù tí a kọ̀, tàbí owó fún àpò kọ̀ọ̀kan, gẹ́gẹ́ bí akẹ́kọ̀ọ́ tàbí ẹgbẹ́ wọn ṣe ròyìn lẹ́yìn àsìkò kan",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n bẹ̀rẹ̀ ẹ̀kọ́ iṣẹ́ àgbẹ̀ míì ti Koach Learn láàárín ọjọ́ 30"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé ìkọ̀wé, gègé àti fóònù lásán",
      "Ìgò dígí tó mọ́ àti iyọ̀ gbígbẹ fún ìdánwò iyọ̀; ẹ̀rọ ìwọ̀n ọ̀rinrin tí a bá lè yá ọ̀kan",
      "Àpò hermetic kan àti àpótí kan fún àfihàn, tí wọ́n bá wà",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní ìpàdé kúkúrú, pẹ̀lú àkókò láti kọ ètò lẹ́yìn ìkórè"
    ],
    facilitatorNotes: [
      "Nínú ẹgbẹ́ àgbẹ̀ tàbí ní ilé ìpamọ́: ẹ jọ ṣe ìdánwò ṣáájú, lẹ́yìn náà ẹ tẹ̀lé ọ̀nà irè kan láti oko dé ọ̀dọ̀ olùrà.",
      "Fi ìdánwò iyọ̀ hàn, àti ẹ̀rọ ìwọ̀n ọ̀rinrin láti ọ̀dọ̀ ẹgbẹ́ alájùmọ̀ṣe tàbí olùrà tí ó bá ṣeé ṣe.",
      "Ẹ jọ kọ́ bí a ṣe ń kún àpò hermetic àti bí a ṣe ń so ó gẹ́gẹ́ bí ẹgbẹ́.",
      "Má ṣe tọ́ ọkà tí ó ní èbu wò tàbí fi í bọ́ ẹran nígbà àfihàn láéláé; fi bí a ṣe ń ṣà á àti bí a ṣe ń yọ ọ́ kúrò láìléwu hàn.",
      "Fi rubric ṣe àmì fún ètò lẹ́yìn ìkórè, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
