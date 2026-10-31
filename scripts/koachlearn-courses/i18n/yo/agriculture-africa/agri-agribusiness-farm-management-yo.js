"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-agribusiness-farm-management.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const CBK = { name: "Central Bank of Kenya, Báńkì Àpapọ̀ Kenya (wo àkọsílẹ̀ àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ)", url: "https://www.centralbank.go.ke" };
const CBN = { name: "Central Bank of Nigeria, Báńkì Àpapọ̀ Nàìjíríà (ààbò oníbàárà àti àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ)", url: "https://www.cbn.gov.ng" };
const FAO_CSA = { name: "FAO: Ìwé ìtọ́kasí Climate-Smart Agriculture (bí a ṣe ń ṣàkóso ewu oko)", url: "https://openknowledge.fao.org/3/a-i3484e.pdf" };

module.exports = {
  id: "agri-agribusiness-farm-management-yo",
  lang: "yo",
  translationOf: "agri-agribusiness-farm-management",
  category: "Agriculture (Africa)",
  name: "Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko",
  skills: "Kíkọ àkọsílẹ̀ oko tó rọrùn, Ṣíṣírò èrè àkọ́kọ́ (gross margin) fún irè oko tàbí ẹran kọ̀ọ̀kan, Wíwá ọjà àti iye owó tó dára jù, Ṣíṣàkóso ìṣàn owó pẹ̀lú owó orí fóònù, Ṣíṣàyẹ̀wò iye owó gbèsè àti ṣíṣàkóso ewu, Kíkọ ètò òwò oko ojú-ewé kan",
  outcome: "ṣiṣẹ́ oko rẹ bí òwò: kọ àkọsílẹ̀, ṣírò irè oko tàbí ẹran tó ń mú èrè jù wá lórí éékà kọ̀ọ̀kan, ṣètò owó rẹ fún gbogbo ọdún, ṣàyẹ̀wò bóyá gbèsè kan bọ́gbọ́n mu, kí o sì kọ ètò òwò oko ojú-ewé kan tí o lè fi han ẹgbẹ́ alájọṣe, ayánilówó tàbí alábàáṣiṣẹ́.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn ẹgbẹ́ obìnrin àti ọ̀dọ́, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n fẹ́ kí oko wọn mú owó púpọ̀ wá kí ewu rẹ̀ sì dín kù.",
    "Orí 1 ka oko sí òwò: kíkọ àkọsílẹ̀ tó rọrùn, ṣíṣírò èrè àkọ́kọ́ (gross margin) iṣẹ́ kọ̀ọ̀kan (bí àgbàdo, ẹ̀wà, tòmátì, adìẹ tàbí màálù ọlọ́mú), àti wíwá ọjà àti iye owó tó dára jù. Orí 2 dá lórí owó àti ìdàgbàsókè: lílo owó orí fóònù láti ṣàkóso ìṣàn owó, pípinnu bóyá kí o yá owó àti bí o ṣe lè ṣàkóso ewu, àti kíkọ ètò òwò ojú-ewé kan.",
    "Gbogbo àpẹẹrẹ owó nínú ẹ̀kọ́ yìí jẹ́ nọ́mbà àròsọ láti fi ọ̀nà náà hàn; lo iye owó ti agbègbè rẹ. Ẹ̀kọ́ yìí kò fúnni ní ìmọ̀ràn ìdókòwò tàbí ti yíyá owó: kí o tó yá owó, fi àwọn ìfilọ̀ wé ara wọn, rí i dájú pé ayánilówó náà ní ìwé àṣẹ, kí o sì bá olùdámọ̀ràn tí o fọkàn tán sọ̀rọ̀, bí ẹgbẹ́ alájọṣe rẹ, SACCO tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀. Ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò òwò ojú-ewé kan fún oko rẹ (tàbí oko àpẹẹrẹ kan): ohun tí o ń gbìn tàbí sìn àti lórí ilẹ̀ tó tóbi tó, èrè àkọ́kọ́ (gross margin) ó kéré tán iṣẹ́ méjì (pẹ̀lú iye owó àti ìnáwó ti agbègbè rẹ), ẹni tí o máa tà fún àti bí o ṣe máa tà, àkọsílẹ̀ ìṣàn owó oṣù 12 tí ó fi hàn ìgbà tí owó ń wọlé àti ìgbà tí ó ń jáde, gbèsè èyíkéyìí tí o ń rò pẹ̀lú iye owó rẹ̀ lápapọ̀ àti bí o ṣe máa san án padà, àwọn ewu pàtàkì rẹ àti bí o ṣe máa dín wọn kù, àti àfojúsùn mẹ́ta fún àsìkò oko tó ń bọ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn ẹgbẹ́ obìnrin àti ọ̀dọ́, àwọn olórí ẹgbẹ́ alájọṣe àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Kenya, Nàìjíríà àti káàkiri Áfíríkà, tí wọ́n fẹ́ kí oko wọn mú owó púpọ̀ wá kí ewu rẹ̀ sì dín kù.",
    startingPoint: "Wọ́n mọ bí a ṣe ń gbin ohun ọ̀gbìn àti bí a ṣe ń sin ẹran, wọ́n sì mọ ohun tí wọ́n ń ná àti ohun tí wọ́n ń rí ní ìwọ̀n díẹ̀. Díẹ̀ ni wọ́n ń kọ àkọsílẹ̀, ń ṣírò èrè àkọ́kọ́, ń ṣètò ìṣàn owó fún gbogbo ọdún tàbí ń fi iye owó gbèsè lápapọ̀ wé ara wọn.",
    gap: "Láìsí àkọsílẹ̀ àti nọ́mbà, àwọn àgbẹ̀ kò lè rí iṣẹ́ tó ń mú èrè wá, owó máa ń tán lọ́wọ́ wọn ní àwọn oṣù ìyàn, wọ́n ń tà ní iye owó tó kéré jù, wọ́n sì lè yá owó tí wọn kò lè san padà. Ọ̀nà òwò tó rọrùn ń ràn wọ́n lọ́wọ́ láti rí owó púpọ̀ sí i, láti yá owó láìléwu, àti láti fi ètò tó yé han àwọn ayánilówó àti olùrà.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo èdè Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì",
      "Ẹ̀rọ: ìwé àkọsílẹ̀ tàbí fóònù lásán; spreadsheet lórí fóònù ń ṣèrànwọ́ ṣùgbọ́n kò pọn dandan",
      "Ìṣirò: àròpọ̀, àyọkúrò àti àpapọ̀ tó rọrùn; àwọn nọ́mbà àpẹẹrẹ jẹ́ àròsọ, àwọn akẹ́kọ̀ọ́ sì ń lo iye owó ti agbègbè wọn",
      "Ààbò owó: má ṣe pín PIN tàbí kóòdù owó orí fóònù láéláé, kí o sì lo àwọn ayánilówó tó ní ìwé àṣẹ nìkan",
      "Iye owó, àwọn ayánilówó àti àwọn aláṣẹ yàtọ̀ láti orílẹ̀-èdè dé orílẹ̀-èdè àti láti àsìkò dé àsìkò: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò pẹ̀lú ẹgbẹ́ alájọṣe, òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ àti àwọn aláṣẹ ìjọba"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Pẹ̀lú ìwé àkọsílẹ̀ tàbí spreadsheet lórí fóònù", action: "kọ àkọsílẹ̀ owó tó wọlé, owó tó jáde àti èso oko", standard: "ní kíkọ ohun kọ̀ọ̀kan ní ọjọ́ náà gan-an, títí kan ọjọ́ iṣẹ́ àwọn ará ilé" },
    { id: "O2", condition: "Tí a bá fún ọ ní èso, iye owó àti ìnáwó tó ń yí padà", action: "ṣírò èrè àkọ́kọ́ lórí éékà kan fún iṣẹ́ méjì kí o sì fi wọ́n wé ara wọn", standard: "pẹ̀lú ìṣirò tó tọ̀nà, kí o sì ro ewu àti iṣẹ́ ọwọ́ mọ́ ọn, kì í ṣe èrè nìkan" },
    { id: "O3", condition: "Fún ohun ọ̀gbìn pàtàkì rẹ", action: "fi ó kéré tán ọ̀nà mẹ́ta láti tà wé ara wọn kí o sì yan èyí tó dára jù", standard: "pẹ̀lú iye owó láti ọ̀dọ̀ olùrà púpọ̀, ìpele dídára tí ọ̀kọ̀ọ̀kan nílò, àti àdéhùn èyíkéyìí ní àkọsílẹ̀" },
    { id: "O4", condition: "Fún oṣù 12 tó ń bọ̀", action: "ṣètò ìṣàn owó oko rẹ kí o sì lo owó orí fóònù láìléwu", standard: "ní sísàmì sí àwọn oṣù ìyàn pẹ̀lú ètò fún ọ̀kọ̀ọ̀kan, láìpín PIN tàbí kóòdù láéláé" },
    { id: "O5", condition: "Tí a bá fún ọ ní ìfilọ̀ gbèsè kan", action: "ṣírò iye owó gbèsè náà lápapọ̀ kí o sì pinnu bóyá ó bá ìṣàn owó rẹ mu", standard: "ní fífi gbogbo owó ìsanwó kún un àti ṣíṣàyẹ̀wò pé ayánilówó náà ní ìwé àṣẹ" },
    { id: "O6", condition: "Pẹ̀lú àkọsílẹ̀ àti nọ́mbà rẹ", action: "kọ ètò òwò oko ojú-ewé kan pẹ̀lú àwọn ewu pàtàkì rẹ àti bí o ṣe máa dín wọn kù", standard: "pẹ̀lú gbogbo apá tí a nílò àti àfojúsùn mẹ́ta tó ní nọ́mbà" }
  ],
  chapters: [
    {
      name: "Orí 1: Oko gẹ́gẹ́ bí òwò",
      lessons: [
        {
          objectives: ["O1"],
          title: "Kíkọ àkọsílẹ̀ oko tó rọrùn",
          minutes: 5,
          goal: "Bẹ̀rẹ̀ àkọsílẹ̀ tó rọrùn ti owó tó wọlé, owó tó jáde àti èso oko.",
          text: [
            "O kò lè ṣàkóso ohun tí o kò wọ̀n. Ọ̀pọ̀ àgbẹ̀ mọ ohun tí wọ́n ń ná àti ohun tí wọ́n ń rí ní ìwọ̀n díẹ̀, ṣùgbọ́n láìsí àkọsílẹ̀ ó ṣòro láti rí ohun ọ̀gbìn tó ń mú èrè wá, láti ṣètò, tàbí láti rí gbèsè tàbí àdéhùn pẹ̀lú olùrà.",
            "Máa kọ àkọsílẹ̀ mẹ́ta tó rọrùn. Owó tó jáde: ọjọ́, ohun tí o rà (irúgbìn, ajílẹ̀, owó iṣẹ́, ọkọ̀, oníṣègùn ẹran), ohun ọ̀gbìn tàbí ẹran wo, iye owó. Owó tó wọlé: ọjọ́, ohun tí o tà, iye rẹ̀, ẹni tí o tà fún, iye owó. Èso oko: ọjọ́ gbingbin, ohun tí o lò, èso láti ilẹ̀ kọ̀ọ̀kan, ẹyin tàbí wàrà lójoojúmọ́. Ìwé àkọsílẹ̀ dára; spreadsheet lórí fóònù náà dára. Àkọsílẹ̀ owó orí fóònù (statement) tún ń ràn ọ́ lọ́wọ́ láti rántí.",
            "Kọ àkọsílẹ̀ ní ọjọ́ náà gan-an. Ya owó oko sọ́tọ̀ kúrò lára owó ilé nínú àkọsílẹ̀ rẹ, kódà tí wọ́n bá ti inú àpò kan náà wá, kí o sì ka ọjọ́ iṣẹ́ àwọn ará ilé pẹ̀lú, nítorí àkókò rẹ ní iye."
          ],
          steps: ["Yan ìwé àkọsílẹ̀ tàbí spreadsheet lórí fóònù.", "Ṣe ojú-ewé tàbí sheet mẹ́ta: owó tó jáde, owó tó wọlé, èso oko.", "Kọ ohun kọ̀ọ̀kan ní ọjọ́ náà gan-an: ọjọ́, kí ni, ohun ọ̀gbìn tàbí ẹran wo, iye owó.", "Lo àkọsílẹ̀ owó orí fóònù láti kún àwọn àlàfo.", "Ka ọjọ́ iṣẹ́ àwọn ará ilé pẹ̀lú owó iṣẹ́ tí o san."],
          words: [["Àkọsílẹ̀ oko", "kíkọ ohun tó ń ṣẹlẹ̀ lórí oko sílẹ̀: owó, ohun èlò àti èso."], ["Iṣẹ́ (enterprise)", "iṣẹ́ kan lórí oko, bí àgbàdo, ẹ̀wà, adìẹ tàbí màálù ọlọ́mú."]],
          slides: [
            { title: "Kí nìdí tí a fi ń kọ àkọsílẹ̀?", bullets: ["Láti rí ohun ọ̀gbìn tó ń mú èrè wá", "Láti ṣètò àsìkò oko", "Láti rí gbèsè tàbí àdéhùn olùrà"] },
            { title: "Àkọsílẹ̀ mẹ́ta tó rọrùn", bullets: ["Owó tó jáde: ọjọ́, kí ni, iṣẹ́ wo, iye owó", "Owó tó wọlé: ọjọ́, ohun tí o tà, ẹni tí o tà fún, iye owó", "Èso oko: gbingbin, ohun èlò, ìkórè, ẹyin, wàrà"] },
            { title: "Àṣà rere", bullets: ["Kọ ọ́ ní ọjọ́ náà gan-an", "Ya owó oko sọ́tọ̀ kúrò lára owó ilé", "Ka iṣẹ́ àwọn ará ilé pẹ̀lú"] }
          ],
          tryIt: "Bẹ̀rẹ̀ àkọsílẹ̀ rẹ lónìí. Ṣe sheet mẹ́ta náà kí o sì kọ ó kéré tán ohun márùn-ún láti oṣù tó kọjá sínú rẹ̀, láti inú ìrántí rẹ àti àkọsílẹ̀ owó orí fóònù rẹ.",
          youCanNow: "kọ àkọsílẹ̀ tó rọrùn ti owó tó wọlé, owó tó jáde àti èso fún iṣẹ́ oko kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O1", q: "Kí ni àkọsílẹ̀ oko mẹ́ta tó rọrùn nínú ẹ̀kọ́ yìí?", options: ["Owó tó jáde, owó tó wọlé àti èso oko", "Ojú ọjọ́, iye owó àti ìròyìn", "Orúkọ, fóònù àti àdírẹ́sì", "Irúgbìn, irinṣẹ́ àti ilé"], answer: 0, why: "Àkọsílẹ̀ mẹ́ta yìí ń fi ohun tí o ń ná, ohun tí o ń rí àti ohun tí o ń mú jáde hàn." },
            { objective: "O1", q: "O gbàgbé láti kọ ajílẹ̀ tí o rà ní ọ̀sẹ̀ tó kọjá. Kí ló lè ràn ọ́ lọ́wọ́ láti rántí?", options: ["Fojú díwọ̀n nọ́mbà kan", "Àkọsílẹ̀ owó orí fóònù rẹ", "Fi í sílẹ̀", "Ní kí AI hùmọ̀ rẹ̀"], answer: 1, why: "Àkọsílẹ̀ owó orí fóònù ń ràn ọ́ lọ́wọ́ láti kún àwọn àlàfo nínú àkọsílẹ̀ rẹ." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Èrè àkọ́kọ́: ohun ọ̀gbìn wo ló ń mú èrè jù wá?",
          minutes: 6,
          goal: "Ṣírò èrè àkọ́kọ́ lórí éékà kan fún iṣẹ́ méjì kí o sì fi wọ́n wé ara wọn.",
          text: [
            "Èrè àkọ́kọ́ (gross margin) = owó tó wọlé láti iṣẹ́ kan yọ ìnáwó tó jẹ́ ti iṣẹ́ náà kúrò (ìnáwó tó ń yí padà: irúgbìn, ajílẹ̀, oògùn oko, owó òṣìṣẹ́, àpò, ọkọ̀). Ṣírò rẹ̀ lórí éékà kan (tàbí hẹ́kítà kan, tàbí ẹyẹ 100) kí o lè fi àwọn iṣẹ́ wé ara wọn lọ́nà tó tọ́.",
            "Àpẹẹrẹ pẹ̀lú nọ́mbà àròsọ ní shilling Kenya, éékà kan fún ọ̀kọ̀ọ̀kan. Àgbàdo: àpò 18 ní 3,500 = 63,000 owó tó wọlé; ìnáwó 34,000 (irúgbìn 3,000, ajílẹ̀ 14,000, owó iṣẹ́ 12,000, oògùn oko 2,000, àpò àti ọkọ̀ 3,000); èrè àkọ́kọ́ 29,000. Ẹ̀wà: àpò 5 ní 9,000 = 45,000 owó tó wọlé; ìnáwó 18,000; èrè àkọ́kọ́ 27,000. Èrè méjèèjì sún mọ́ ara wọn, ṣùgbọ́n ẹ̀wà tún ń fi nitrogen kún ilẹ̀, a sì ń kórè rẹ̀ tètè. Lo iye owó tìrẹ: wọ́n yàtọ̀ láti ibì kan dé ibòmíì àti láti àsìkò dé àsìkò.",
            "Tún fi èrè lórí ọjọ́ iṣẹ́ kan àti ewu wé ara wọn: ohun ọ̀gbìn tí èrè rẹ̀ ga ṣùgbọ́n tí ó sábà máa ń kùnà lè má jẹ́ àṣàyàn tó dára jù. Ìnáwó tí kì í yí padà (owó ilẹ̀, irinṣẹ́, táńkì omi) ni àpapọ̀ gbogbo èrè àkọ́kọ́ ń san."
          ],
          steps: ["Yan iṣẹ́ méjì.", "Kọ èso tí o retí àti iye owó lórí ẹyọ kan láti rí owó tó wọlé.", "Kọ ìnáwó tó ń yí padà fún ọ̀kọ̀ọ̀kan.", "Èrè àkọ́kọ́ = owó tó wọlé - ìnáwó tó ń yí padà, lórí éékà kan.", "Fi èrè, iṣẹ́ ọwọ́ àti ewu wé ara wọn."],
          words: [["Èrè àkọ́kọ́ (gross margin)", "owó tó wọlé láti iṣẹ́ kan yọ ìnáwó tó jẹ́ ti iṣẹ́ náà kúrò."], ["Ìnáwó tó ń yí padà", "ìnáwó tó ń yí padà bí ohun tí o gbìn ṣe pọ̀ tó, bí irúgbìn, ajílẹ̀ àti owó iṣẹ́."], ["Ìnáwó tí kì í yí padà", "ìnáwó tó dúró bákan náà ohun yòówù tí o gbìn, bí owó ilẹ̀ tàbí táńkì omi."]],
          slides: [
            { title: "Ìlànà ìṣirò", bullets: ["Èrè àkọ́kọ́ = owó tó wọlé - ìnáwó tó ń yí padà", "Lórí éékà kan, hẹ́kítà kan tàbí ẹyẹ 100"] },
            { title: "Àpẹẹrẹ (KSh àròsọ, éékà 1)", bullets: ["Àgbàdo: 63,000 - 34,000 = 29,000", "Ẹ̀wà: 45,000 - 18,000 = 27,000", "Lo iye owó ti agbègbè rẹ"] },
            { title: "Tún fi wé ara wọn", bullets: ["Èrè lórí ọjọ́ iṣẹ́ kan", "Ewu kíkùnà", "Gbogbo èrè ló ń san ìnáwó tí kì í yí padà"] }
          ],
          tryIt: "Ṣírò èrè àkọ́kọ́ lórí éékà kan fún iṣẹ́ méjì lórí oko rẹ (tàbí méjì tí o ń rò) pẹ̀lú iye owó ti agbègbè rẹ. Èwo ló ga jù, èwo ló sì ní ewu jù?",
          youCanNow: "ṣírò èrè àkọ́kọ́ kí o sì fi wọ́n wé ara wọn láti pinnu ohun tí o máa gbìn tàbí sìn.",
          quickCheck: [
            { objective: "O2", q: "Èwo ni ìnáwó tí kì í yí padà, tí kì í ṣe ìnáwó tó ń yí padà?", options: ["Irúgbìn", "Ajílẹ̀", "Táńkì omi", "Owó òṣìṣẹ́ fún ìgbàlẹ̀"], answer: 2, why: "O máa san owó táńkì omi ohun yòówù tí o gbìn, nítorí náà ìnáwó tí kì í yí padà ni." },
            { objective: "O2", q: "Tòmátì ń mú 50,000 wá lórí éékà kan, ìnáwó tó ń yí padà sì jẹ́ 30,000. Kí ni èrè àkọ́kọ́?", options: ["80,000", "30,000", "50,000", "20,000"], answer: 3, why: "Èrè àkọ́kọ́ ni owó tó wọlé yọ ìnáwó tó ń yí padà kúrò: 50,000 - 30,000 = 20,000." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Wíwá ọjà àti iye owó tó dára jù",
          minutes: 5,
          goal: "Fi ó kéré tán ọ̀nà mẹ́ta láti tà wé ara wọn kí o sì yan èyí tó dára jù fún ohun ọ̀gbìn kan.",
          text: [
            "Iye owó sábà máa ń wálẹ̀ lẹ́yìn ìkórè, nígbà tí gbogbo ènìyàn ń tà, ó sì máa ń gòkè ní oṣù díẹ̀ lẹ́yìn náà. Títà díẹ̀díẹ̀ fúnra rẹ fún oníṣòwò àkọ́kọ́ tó dé ẹnu oko rọrùn, ṣùgbọ́n ó sábà máa ń mú owó tó kéré jù wá. Fi wé ara wọn: ọjà ìlú, àwọn oníṣòwò, ẹgbẹ́ alájọṣe tó ń kó èso jọ, àwọn ilé-iṣẹ́ tó ń ṣe ọjà láti inú èso, ilé-ìwé tàbí òtẹ́ẹ̀lì, àdéhùn àgbẹ̀ pẹ̀lú olùrà, àti, níbi tí wọ́n bá wà, ilé ìpamọ́ tó ní ìwé ẹ̀rí tí ó ń tọ́jú ọkà, tí ó sì lè ran àgbẹ̀ lọ́wọ́ láti rí gbèsè lórí rẹ̀.",
            "Wá ìsọfúnni iye owó: béèrè lọ́wọ́ olùrà púpọ̀, wo àwọn iṣẹ́ ìròyìn iye owó ọjà àti rédíò, kí o sì bá ẹgbẹ́ alájọṣe rẹ sọ̀rọ̀. Mọ ìpele dídára tí olùrà ń fẹ́ (ọ̀rinrin, ìpele, ìwọ̀n, ìmọ́tótó) kí o sì tẹ̀lé e: èso tó mọ́, tó gbẹ, tí a ti tò ń mú owó púpọ̀ wá, ó sì ń pẹ́ jù.",
            "Àdéhùn lè fún ọ ní ọjà tó dájú, ṣùgbọ́n ka àwọn ìlànà rẹ̀: iye owó tàbí bí a ṣe máa pinnu rẹ̀, iye èso, ìpele dídára, ọjọ́ ìfijíṣẹ́, ẹni tó máa san owó ọkọ̀, ọjọ́ àti ọ̀nà ìsanwó, àti ohun tó máa ṣẹlẹ̀ tí ìkórè bá kùnà. Gbà á ní àkọsílẹ̀, kí o sì ní kí ẹgbẹ́ alájọṣe rẹ tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ṣàyẹ̀wò rẹ̀."
          ],
          steps: ["Kọ ó kéré tán ọ̀nà mẹ́ta láti ta ohun ọ̀gbìn rẹ.", "Gba iye owó láti ọ̀dọ̀ olùrà púpọ̀ àti àwọn iṣẹ́ ìsọfúnni ọjà.", "Mọ ìpele dídára tí olùrà kọ̀ọ̀kan ń fẹ́.", "Ro kíkó èso jọ pẹ̀lú ẹgbẹ́ tàbí títọ́jú rẹ̀ fún iye owó tó dára jù.", "Ka àwọn ìlànà àdéhùn èyíkéyìí kí o sì gbà á ní àkọsílẹ̀."],
          words: [["Kíkó èso jọ (bulking)", "fífi èso àwọn àgbẹ̀ púpọ̀ papọ̀ láti ta iye tó pọ̀ ní iye owó tó dára jù."], ["Àdéhùn àgbẹ̀ (contract farming)", "àdéhùn láti gbin èso kí o sì tà á fún olùrà kan lábẹ́ àwọn ìlànà tí a ti fohùn ṣọ̀kan lé lórí."], ["Ìpele dídára", "àwọn òfin olùrà nípa ọ̀rinrin, ìwọ̀n, ìpele àti ìmọ́tótó."]],
          slides: [
            { title: "Àkókò ṣe pàtàkì", bullets: ["Iye owó sábà máa ń wálẹ̀ lẹ́yìn ìkórè", "Ó máa ń ga ní oṣù díẹ̀ lẹ́yìn náà", "Ìpamọ́ àti kíkó èso jọ lè ṣèrànwọ́"] },
            { title: "Àwọn ọ̀nà láti tà", bullets: ["Ọjà, àwọn oníṣòwò, ẹgbẹ́ alájọṣe", "Ilé-iṣẹ́ ìṣe ọjà, ilé-ìwé, òtẹ́ẹ̀lì", "Àdéhùn, ilé ìpamọ́ tó ní ìwé ẹ̀rí"] },
            { title: "Rí owó púpọ̀ sí i", bullets: ["Fi iye owó púpọ̀ wé ara wọn", "Tẹ̀lé ìpele dídára", "Ka àdéhùn; gbà á ní àkọsílẹ̀"] }
          ],
          tryIt: "Fún ohun ọ̀gbìn pàtàkì rẹ, kọ ọ̀nà mẹ́ta tí o lè gbà tà á, iye owó tí ọ̀kọ̀ọ̀kan máa san lónìí (béèrè tàbí fojú díwọ̀n), ìpele dídára tí ọ̀kọ̀ọ̀kan nílò, àti èyí tí o máa yàn àti ìdí rẹ̀.",
          youCanNow: "fi àwọn ọjà wé ara wọn kí o sì yan ọ̀nà tó dára jù láti ta ohun ọ̀gbìn kan.",
          quickCheck: [
            { objective: "O3", q: "Kí ni kíkó èso jọ (bulking)?", options: ["Títà papọ̀ gẹ́gẹ́ bí ẹgbẹ́ láti ní iye tó pọ̀", "Fífi omi kún ọkà", "Ríra irúgbìn nínú àpò kékeré", "Títọ́jú ọkà sínú ilé"], answer: 0, why: "Kíkó èso jọ pẹ̀lú ẹgbẹ́ alájọṣe tàbí ẹgbẹ́ ń mú iye tó pọ̀ wá tí ó lè rí iye owó tó dára jù." },
            { objective: "O3", q: "Olùrà kan fẹ́ ẹ̀wà rẹ ṣùgbọ́n kò sọ nǹkan kan nípa ìgbà tí yóò sanwó. Kí lo máa ṣe?", options: ["Fi í jíṣẹ́ kí o sì retí", "Béèrè ọjọ́ àti ọ̀nà ìsanwó ní àkọsílẹ̀", "Tà á fún un bẹ́ẹ̀ náà", "Dín iye owó rẹ kù"], answer: 1, why: "Àdéhùn gbọ́dọ̀ kọ ọjọ́ àti ọ̀nà ìsanwó sílẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Oko gẹ́gẹ́ bí òwò",
        questions: [
          { objective: "O1", q: "Kí nìdí tí a fi ń kọ àkọsílẹ̀ oko?", options: ["Fún àwọn òṣìṣẹ́ owó orí nìkan ni", "Láti rí iṣẹ́ tó ń mú èrè wá, láti ṣètò, àti láti rí gbèsè tàbí àdéhùn", "Láti lo àkókò", "Àkọsílẹ̀ kò wúlò"], answer: 1, why: "Àkọsílẹ̀ ń sọ àròsọ di ìpinnu." },
          { objective: "O2", q: "Èrè àkọ́kọ́ ni:", options: ["Gbogbo ilẹ̀ oko", "Owó tó wọlé yọ ìnáwó tó ń yí padà kúrò fún iṣẹ́ kan", "Iye owó ajílẹ̀", "Owó tí a yá"], answer: 1, why: "Ó ń fi ohun tí iṣẹ́ kọ̀ọ̀kan ń mú wá hàn kí a tó san ìnáwó tí kì í yí padà." },
          { objective: "O2", q: "Èwo ni ìnáwó tó ń yí padà?", options: ["Irúgbìn", "Ilẹ̀ tí o ní", "Táńkì omi tí a ti kọ́ tán", "Ilé rẹ"], answer: 0, why: "Irúgbìn ń yí padà bí ohun tí o gbìn ṣe pọ̀ tó." },
          { objective: "O3", q: "Olùrà kan fún ọ ní àdéhùn. Kí ló yẹ kí o ṣàyẹ̀wò?", options: ["Orúkọ olùrà nìkan", "Kò sí nǹkan; àdéhùn máa ń tọ́ nígbà gbogbo", "Àwọ̀ àwọn àpò nìkan", "Iye owó, iye èso, ìpele dídára, ìfijíṣẹ́, ìsanwó àti ohun tó máa ṣẹlẹ̀ tí ìkórè bá kùnà"], answer: 3, why: "Àwọn ìlànà ló ń pinnu bóyá àdéhùn náà máa ràn ọ́ lọ́wọ́." },
          { objective: "O3", q: "Kí nìdí tí iye owó fi máa ń wálẹ̀ lẹ́yìn ìkórè?", options: ["Ohun ọ̀gbìn ń dínkù", "Àwọn olùrà dẹ́kun jíjẹun", "Ọ̀pọ̀ àgbẹ̀ ń tà ní àkókò kan náà", "Ìjọba ń sọ ọ́ di kékeré"], answer: 2, why: "Èso tó pọ̀ ní àkókò ìkórè ń mú iye owó wálẹ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Owó, ewu àti ìdàgbàsókè",
      lessons: [
        {
          objectives: ["O4"],
          title: "Owó orí fóònù àti ìṣàn owó",
          minutes: 5,
          goal: "Ṣètò ìṣàn owó oṣù 12 kí o sì lo owó orí fóònù láìléwu fún oko.",
          text: [
            "Ọ̀pọ̀ oko ní ìṣòro owó, kì í ṣe nítorí pé wọ́n pàdánù, ṣùgbọ́n nítorí pé owó ń wọlé lẹ́ẹ̀kan tàbí lẹ́ẹ̀mejì lọ́dún, ó sì ń jáde ní gbogbo ọdún. Ètò ìṣàn owó ń fi owó tí a retí pé yóò wọlé àti èyí tí yóò jáde hàn ní oṣù kọ̀ọ̀kan, kí o lè rí àwọn oṣù ìyàn tí ń bọ̀ kí o sì ṣètò.",
            "Owó orí fóònù (bí M-Pesa ní Kenya, àti àpò owó orí fóònù àti app báńkì ní Nàìjíríà) ń mú kí ó rọrùn láti san owó fún òṣìṣẹ́ àti àwọn tó ń ta ohun èlò fún ọ, láti gba owó lọ́wọ́ olùrà, láti fi owó pamọ́, àti láti ní àkọsílẹ̀. Àwọn àgbẹ̀ kan ń ní àpò owó tàbí àkáǹtì ọ̀tọ̀ fún oko kí owó oko àti owó ilé má bàa dàpọ̀.",
            "Dáàbò bo ara rẹ: má ṣe pín PIN rẹ tàbí kóòdù ìgbà kan pẹ̀lú ẹnikẹ́ni láéláé, títí kan àwọn tó sọ pé àwọn wá láti ilé-iṣẹ́ owó orí fóònù tàbí pé olùrà ni àwọn; ṣàyẹ̀wò orúkọ kí o tó fi owó ránṣẹ́; kí o sì ṣọ́ra fún ọ̀rọ̀ \"wrong transfer\" (owó tí a fi ránṣẹ́ ní àṣìṣe) tí ó dé lójijì tí ó ní kí o dá owó padà. Ròyìn ìṣòro fún ilé-iṣẹ́ náà ní ọ̀nà tirẹ̀ gan-an."
          ],
          steps: ["Ya ìlà 12 fún oṣù kọ̀ọ̀kan.", "Kọ owó tí o retí pé yóò wọlé ní oṣù kọ̀ọ̀kan (títà, owó míì).", "Kọ owó tí o retí pé yóò jáde (ohun èlò, owó iṣẹ́, owó ilé-ìwé, oúnjẹ).", "Wá àwọn oṣù tí owó tó jáde pọ̀ ju èyí tó wọlé lọ, kí o sì ṣètò ìfipamọ́ tàbí àkókò.", "Lo àpò owó tàbí àkáǹtì ọ̀tọ̀ fún owó oko; má ṣe pín PIN rẹ láéláé."],
          words: [["Ìṣàn owó (cash flow)", "àkókò tí owó ń wọlé àti tí ó ń jáde."], ["Oṣù ìyàn", "àwọn oṣù tí owó tàbí oúnjẹ máa ń tán, sábà ṣáájú ìkórè."], ["PIN", "nọ́mbà àṣírí tí ó ń dáàbò bo àkáǹtì owó orí fóònù rẹ."]],
          slides: [
            { title: "Ìṣàn owó, kì í ṣe èrè nìkan", bullets: ["Owó ń wọlé lẹ́ẹ̀kan tàbí lẹ́ẹ̀mejì lọ́dún", "Owó ń jáde ní gbogbo ọdún", "Ṣètò fún àwọn oṣù ìyàn"] },
            { title: "Owó orí fóònù ń ṣèrànwọ́", bullets: ["San owó fún òṣìṣẹ́ àti olùtajà", "Gba owó lọ́wọ́ olùrà", "Fi owó pamọ́ kí o sì ní àkọsílẹ̀"] },
            { title: "Dáàbò bo ara rẹ", bullets: ["Má ṣe pín PIN tàbí kóòdù láéláé", "Ṣàyẹ̀wò orúkọ kí o tó fi owó ránṣẹ́", "Ṣọ́ra fún ẹ̀tàn \"wrong transfer\""] }
          ],
          tryIt: "Ya ètò ìṣàn owó oṣù 12 rẹ pẹ̀lú owó tó wọlé àti owó tó jáde. Fa òrùka yí àwọn oṣù ìyàn ká, kí o sì kọ ọ̀nà kan láti múra sílẹ̀ fún ọ̀kọ̀ọ̀kan (fi owó pamọ́ láti ìkórè, tà díẹ̀díẹ̀ ní àkókò ọ̀tọ̀ọ̀tọ̀, iṣẹ́ kékeré kan ní àsìkò tí kì í ṣe ti oko).",
          youCanNow: "ṣètò ìṣàn owó oko rẹ fún gbogbo ọdún kí o sì lo owó orí fóònù láìléwu.",
          quickCheck: [
            { objective: "O4", q: "Kí ni ètò ìṣàn owó oṣù 12 ń ràn ọ́ lọ́wọ́ láti rí?", options: ["Ohun ọ̀gbìn tó ga jù", "Ojú ọjọ́ ní oṣù kọ̀ọ̀kan", "Àwọn oṣù ìyàn kí wọ́n tó dé", "Owó tí àwọn aládùúgbò rẹ ń rí"], answer: 2, why: "Ó ń fi àwọn oṣù tí owó tó jáde pọ̀ ju owó tó wọlé hàn." },
            { objective: "O4", q: "Owó ilé-ìwé máa wọlé ní oṣù tí kò sí títà ìkórè. Kí ni ọ̀nà kan láti múra sílẹ̀?", options: ["Ná gbogbo owó ìkórè lẹ́ẹ̀kan náà", "Gba gbèsè èyíkéyìí tí wọ́n fi text fi lọ̀ ọ́", "Pa á tì títí di ìgbà náà", "Fi apá kan owó ìkórè pamọ́ tàbí tà díẹ̀díẹ̀ ní àkókò ọ̀tọ̀ọ̀tọ̀"], answer: 3, why: "Fífi owó pamọ́ láti ìkórè tàbí títà díẹ̀díẹ̀ ń bo àwọn oṣù ìyàn." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Gbèsè àti ewu: yíyá owó pẹ̀lú ọgbọ́n",
          minutes: 6,
          goal: "Ṣírò iye owó gbèsè kan lápapọ̀ kí o sì pinnu bóyá ó bọ́gbọ́n mu fún oko.",
          text: [
            "Gbèsè lè ṣèrànwọ́ láti ra ohun èlò tàbí ẹ̀rọ tí ó máa mú owó wá ju iye rẹ̀ lọ. Ó tún lè di páńpẹ́. Kí o tó yá owó, béèrè pé: kí ni owó náà máa rà, èrè tó pọ̀ tó wo ló máa mú wá, nígbà wo sì ni? Ṣé o máa lè san án padà ní àwọn ọjọ́ tí ayánilówó yàn, kódà tí ìkórè kò bá dára?",
            "Fi àwọn ìfilọ̀ wé ara wọn nípa iye owó tí o máa san padà lápapọ̀, kì í ṣe èlé nìkan: ṣírò gbogbo èlé, owó ìsanwó àti owó ìbánigbófò papọ̀. Fún àpẹẹrẹ (nọ́mbà àròsọ), yíyá 20,000 àti sísan 2,000 lóṣù fún oṣù 12 túmọ̀ sí sísan 24,000 padà: gbèsè náà ná ọ ní 4,000. Ṣàyẹ̀wò pé àwọn ọjọ́ ìsanpadà bá ìgbà tí owó rẹ ń wọlé mu. Gbèsè orí ayélujára tó kúrú lè wọ́n gan-an tí o bá ṣírò gbogbo owó ìsanwó rẹ̀.",
            "Lo àwọn ayánilówó tó ní ìwé àṣẹ: báńkì, báńkì microfinance, SACCO àti ẹgbẹ́ alájọṣe, àti àwọn ayánilówó orí ayélujára tí báńkì àpapọ̀ tàbí aláṣẹ tó yẹ fọwọ́ sí (ní Kenya, Central Bank of Kenya ń kọ orúkọ àwọn ilé-iṣẹ́ tó ní ìwé àṣẹ jáde; ní Nàìjíríà, Central Bank of Nigeria). Dín ewu kù pẹ̀lú ìfipamọ́, gbígbin oríṣiríṣi ohun ọ̀gbìn, ìbánigbófò níbi tí ó bá wà, àti yíyá iye tí ètò rẹ nílò nìkan. Bá olùdámọ̀ràn tí o fọkàn tán sọ̀rọ̀ kí o tó fọwọ́ sí i."
          ],
          steps: ["Kọ ohun tí gbèsè náà máa rà àti èrè tó yẹ kí ó mú wá.", "Ṣírò gbogbo ohun tí o máa san padà papọ̀: èlé, owó ìsanwó, ìbánigbófò.", "Fi àwọn ọjọ́ ìsanpadà wé ètò ìṣàn owó rẹ.", "Ṣàyẹ̀wò pé ayánilówó náà ní ìwé àṣẹ.", "Ṣètò fún àsìkò búburú: ìfipamọ́, ìbánigbófò, gbèsè tó kéré.", "Béèrè lọ́wọ́ olùdámọ̀ràn tí o fọkàn tán kí o tó fọwọ́ sí i."],
          words: [["Èlé", "owó tí o ń san láti yá owó."], ["Iye owó gbèsè lápapọ̀", "gbogbo ohun tí o ń san padà ju ohun tí o yá lọ: èlé pẹ̀lú owó ìsanwó àti owó míì."], ["SACCO", "ẹgbẹ́ alájọṣe ìfipamọ́ àti yíyá owó tí àwọn ọmọ ẹgbẹ́ ní."], ["Ìdógò (collateral)", "ohun tí o ṣèlérí fún ayánilówó tí o kò bá lè san án padà."]],
          slides: [
            { title: "Kí o tó yá owó", bullets: ["Kí ló máa rà?", "Èrè tó pọ̀ tó wo ló máa mú wá, nígbà wo?", "Ṣé o lè san án padà tí ìkórè kò bá dára?"] },
            { title: "Fi àpapọ̀ wé ara wọn", bullets: ["Èlé + owó ìsanwó + ìbánigbófò", "Yá 20,000, san 24,000 padà: ó ná 4,000", "Ṣé ìsanpadà bá ìṣàn owó rẹ mu?"] },
            { title: "Lo ayánilówó tó ní ìwé àṣẹ", bullets: ["Báńkì, microfinance, SACCO, ẹgbẹ́ alájọṣe", "Kenya: àkọsílẹ̀ CBK; Nàìjíríà: CBN", "Kọ́kọ́ bá olùdámọ̀ràn tí o fọkàn tán sọ̀rọ̀"] }
          ],
          sources: [CBK, CBN],
          tryIt: "Mú ìfilọ̀ gbèsè gidi tàbí ti àpẹẹrẹ kan. Kọ iye tí o yá, gbogbo ìsanpadà àti owó ìsanwó, àpapọ̀ ohun tí o san padà àti iye owó rẹ̀ lápapọ̀. Lẹ́yìn náà fi àwọn oṣù ìsanpadà wé ètò ìṣàn owó rẹ kí o sì kọ bóyá ó bọ́gbọ́n mu.",
          youCanNow: "ṣírò iye owó gbèsè gidi kí o sì pinnu bóyá yíyá owó bọ́gbọ́n mu fún oko rẹ.",
          quickCheck: [
            { objective: "O5", q: "Báwo ló ṣe yẹ kí o fi ìfilọ̀ gbèsè méjì wé ara wọn?", options: ["Nípa iye tí o máa san padà lápapọ̀, títí kan gbogbo owó ìsanwó", "Nípa bí owó náà ṣe yára dé", "Nípa èlé nìkan", "Nípa ìpolówó ayánilówó"], answer: 0, why: "Àpapọ̀ ohun tí o san padà ló ń fi iye owó gidi gbèsè kọ̀ọ̀kan hàn." },
            { objective: "O5", q: "Ìsanpadà gbèsè kan bẹ̀rẹ̀ ní oṣù tó tẹ̀lé gbingbin, ṣáájú ìkórè. Kí lo máa ṣe?", options: ["Fọwọ́ sí i kíákíá", "Fi í wé ìṣàn owó rẹ kí o sì béèrè àwọn ọjọ́ tó bá ìgbà tí owó ń wọlé mu", "Yá owó sí i láti bò ó", "Lo PIN rẹ láti mú un yára"], answer: 1, why: "Àwọn ọjọ́ ìsanpadà gbọ́dọ̀ bá àwọn oṣù tí owó rẹ ń wọlé mu." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkọ ètò òwò oko ojú-ewé kan",
          minutes: 5,
          goal: "Kọ ètò òwò ojú-ewé kan tí o lè fi han ẹgbẹ́ alájọṣe, ayánilówó tàbí alábàáṣiṣẹ́.",
          text: [
            "Ètò òwò ni ìtàn oko rẹ ní nọ́mbà àti àfojúsùn. Àwọn ayánilówó, ẹgbẹ́ alájọṣe, olùrà àti alábàáṣiṣẹ́ fẹ́ rí i pé o mọ oko rẹ, ọjà rẹ àti àwọn ewu rẹ. Ojú-ewé kan tó yé dára ju mẹ́wàá tí kò yé lọ.",
            "Fi kún un: ẹni tí o jẹ́ àti oko rẹ (ibi tí ó wà, ilẹ̀, ohun tí o ń gbìn tàbí sìn); àwọn iṣẹ́ rẹ pẹ̀lú èrè àkọ́kọ́ wọn; ọjà rẹ (ẹni tó ń rà, báwo, ní iye owó wo); àkọsílẹ̀ ìṣàn owó rẹ; ohun tí o nílò (ohun èlò, ẹ̀rọ, gbèsè) àti bí yóò ṣe san ara rẹ̀ padà; àwọn ewu pàtàkì rẹ (ojú ọjọ́, kòkòrò, iye owó) àti ohun tí o ń ṣe nípa wọn; àti àfojúsùn mẹ́ta fún àsìkò oko tó ń bọ̀ pẹ̀lú nọ́mbà.",
            "Pa àkọsílẹ̀ àti ìṣirò rẹ mọ́ lẹ́yìn ètò náà, kí o lè dáhùn ìbéèrè. Ṣe àtúnṣe rẹ̀ ní àsìkò kọ̀ọ̀kan pẹ̀lú ohun tó ṣẹlẹ̀ gan-an."
          ],
          steps: ["Àkópọ̀ oko: ibi tí ó wà, ilẹ̀, àwọn iṣẹ́.", "Èrè àkọ́kọ́ fún iṣẹ́ kọ̀ọ̀kan.", "Ọjà: olùrà, ọ̀nà títà, iye owó.", "Àkọsílẹ̀ ìṣàn owó àti ohun tí o nílò.", "Àwọn ewu àti bí o ṣe ń ṣàkóso wọn.", "Àfojúsùn mẹ́ta pẹ̀lú nọ́mbà; ṣe àtúnṣe ní àsìkò kọ̀ọ̀kan."],
          words: [["Ètò òwò", "ìwé kúkúrú tí ó ṣàlàyé ohun tí òwò kan ń ṣe, bí ó ṣe ń rí owó, ohun tí ó nílò àti àwọn àfojúsùn rẹ̀."], ["Àfojúsùn", "èrò tó yé pẹ̀lú nọ́mbà àti ọjọ́."]],
          slides: [
            { title: "Ìtàn oko rẹ ní nọ́mbà", bullets: ["Fún ayánilówó, ẹgbẹ́ alájọṣe, olùrà, alábàáṣiṣẹ́", "Ojú-ewé kan tó yé dára ju mẹ́wàá tí kò yé lọ"] },
            { title: "Ohun tó wà nínú rẹ̀", bullets: ["Àkópọ̀ oko àti àwọn iṣẹ́", "Èrè àkọ́kọ́ àti ọjà", "Ìṣàn owó, ohun tí o nílò, ìsanpadà"] },
            { title: "Parí rẹ̀ dáadáa", bullets: ["Àwọn ewu àti bí o ṣe ń ṣàkóso wọn", "Àfojúsùn mẹ́ta pẹ̀lú nọ́mbà", "Ṣe àtúnṣe ní àsìkò kọ̀ọ̀kan"] }
          ],
          sources: [FAO_CSA],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò òwò oko ojú-ewé kan rẹ pẹ̀lú èrè àkọ́kọ́ fún iṣẹ́ méjì, ọjà, ìṣàn owó oṣù 12, gbèsè èyíkéyìí àti iye owó rẹ̀ lápapọ̀, àwọn ewu àti ìdáhùn sí wọn, àti àfojúsùn mẹ́ta fún àsìkò oko tó ń bọ̀.",
          youCanNow: "kọ ètò òwò oko ojú-ewé kan tí àkọsílẹ̀ àti nọ́mbà tìrẹ fúnra rẹ ń tì lẹ́yìn.",
          quickCheck: [
            { objective: "O6", q: "Kí nìdí tí o fi gbọ́dọ̀ pa àkọsílẹ̀ àti ìṣirò mọ́ lẹ́yìn ètò ojú-ewé kan rẹ?", options: ["Láti mú ètò náà gùn sí i", "Àwọn ayánilówó kì í ka ètò", "Kí o lè dáhùn ìbéèrè nípa nọ́mbà rẹ", "Láti fi owó tí o ń rí gan-an pamọ́"], answer: 2, why: "Àkọsílẹ̀ ń ti ètò rẹ lẹ́yìn nígbà tí ayánilówó tàbí olùrà bá béèrè ìbéèrè." },
            { objective: "O6", q: "Àgbàdo rẹ kò ṣe dáadáa tó bí o ṣe ṣètò ní àsìkò yìí. Kí lo máa ṣe pẹ̀lú ètò òwò rẹ?", options: ["Jù ú nù", "Pa àwọn nọ́mbà àtijọ́ mọ́", "Yí àwọn àfojúsùn nìkan padà", "Ṣe àtúnṣe rẹ̀ pẹ̀lú ohun tó ṣẹlẹ̀ gan-an"], answer: 3, why: "A máa ń ṣe àtúnṣe ètò ní àsìkò kọ̀ọ̀kan pẹ̀lú èsì gidi." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Owó, ewu àti ìdàgbàsókè",
        questions: [
          { objective: "O4", q: "Kí nìdí tí owó fi lè tán lọ́wọ́ oko tó ń mú èrè wá?", options: ["Èrè kì í ṣe gidi", "Owó ń wọlé lẹ́ẹ̀kan tàbí lẹ́ẹ̀mejì lọ́dún ṣùgbọ́n ó ń jáde ní gbogbo ọdún", "Owó orí fóònù ń sọ ọ́ nù", "Àkọsílẹ̀ ló ń fà á"], answer: 1, why: "Àkókò ìṣàn owó, kì í ṣe èrè nìkan, ló ń pinnu bóyá o lè san owó tí o jẹ." },
          { objective: "O4", q: "Ẹnìkan tí ó ń pè láti \"ilé-iṣẹ́ owó orí fóònù rẹ\" béèrè PIN rẹ. O yẹ kí o:", options: ["Fún un kíákíá", "Fún un ní ìdajì rẹ̀", "Má ṣe pín in láéláé; kàn sí ilé-iṣẹ́ náà ní ọ̀nà tirẹ̀ gan-an", "Fi text rẹ̀ ránṣẹ́ sí wọn"], answer: 2, why: "Ilé-iṣẹ́ gidi kì í béèrè PIN rẹ láéláé." },
          { objective: "O5", q: "O yá 20,000, o sì ń san 2,000 lóṣù fún oṣù 12. Gbèsè náà ná ọ ní:", options: ["4,000", "2,000", "20,000", "Kò sí nǹkan"], answer: 0, why: "O san 24,000 padà, èyí tí ó jẹ́ 4,000 ju ohun tí o yá lọ." },
          { objective: "O5", q: "Kí o tó gba gbèsè, ṣàyẹ̀wò pé ayánilówó náà:", options: ["Jẹ́ ọ̀rẹ́ aládùúgbò rẹ", "Yára gan-an", "Wà lórí ẹ̀rọ ayélujára alájọṣepọ̀ (social media)", "Ní ìwé àṣẹ láti ọ̀dọ̀ báńkì àpapọ̀ tàbí aláṣẹ tó yẹ"], answer: 3, why: "Àwọn ayánilówó tó ní ìwé àṣẹ ń tẹ̀lé òfin tí ó ń dáàbò bo àwọn ayánilówó-gbà." },
          { objective: "O6", q: "Ètò òwò oko tó dára ni:", options: ["Gígùn tí kò sì yé", "Ojú-ewé kan tó yé tí àkọsílẹ̀ àti nọ́mbà ń tì lẹ́yìn", "Àkọsílẹ̀ ìfẹ́-ọkàn nìkan", "Àṣírí fún gbogbo ènìyàn"], answer: 1, why: "Ètò kúkúrú tó ṣe pàtó rọrùn láti ṣe àti láti gbẹ́kẹ̀lé." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Iṣẹ́ Àgbẹ̀ Bí Òwò àti Ìṣàkóso Oko",
    questions: [
      { objective: "O1", q: "Èwo ni àkọsílẹ̀ oko tó rọrùn?", options: ["Owó tó jáde: ọjọ́, kí ni, iṣẹ́ wo, iye owó", "Fọ́tò ojú ọ̀run", "Àkọsílẹ̀ àwọn orin", "Kò sí ohun tí a kọ"], answer: 0, why: "Kíkọ owó tó jáde fún iṣẹ́ kọ̀ọ̀kan ń fi ìnáwó hàn." },
      { objective: "O1", q: "Ìgbà wo ló yẹ kí o kọ àkọsílẹ̀?", options: ["Lẹ́ẹ̀kan lọ́dún", "Ní ọjọ́ náà gan-an", "Nígbà tí wọ́n bá béèrè nìkan", "Láéláé"], answer: 1, why: "Àkọsílẹ̀ ọjọ́ kan náà máa ń péye." },
      { objective: "O1", q: "Kí nìdí tí a fi ń ka ọjọ́ iṣẹ́ àwọn ará ilé?", options: ["Ọ̀fẹ́ ni wọ́n", "Láti san owó orí", "Àkókò rẹ ní iye, ó sì ń nípa lórí iṣẹ́ tó ń mú èrè wá", "Kò pọn dandan"], answer: 2, why: "Iṣẹ́ tí a kò sanwó fún ṣì jẹ́ ìnáwó àkókò gidi." },
      { objective: "O2", q: "Iṣẹ́ (enterprise) ni:", options: ["Báńkì", "Katakata (tractor)", "Ọjà", "Iṣẹ́ kan lórí oko, bí àgbàdo tàbí adìẹ"], answer: 3, why: "A máa ń wọn iṣẹ́ kọ̀ọ̀kan lọ́tọ̀." },
      { objective: "O2", q: "Owó tó wọlé 63,000, ìnáwó tó ń yí padà 34,000. Èrè àkọ́kọ́ ni:", options: ["29,000", "34,000", "63,000", "97,000"], answer: 0, why: "63,000 - 34,000 = 29,000." },
      { objective: "O2", q: "Kí nìdí tí a fi ń ṣírò èrè àkọ́kọ́ lórí éékà kan?", options: ["Láti mú nọ́mbà tóbi sí i", "Láti fi àwọn iṣẹ́ wé ara wọn lọ́nà tó tọ́", "Nítorí pé àwọn olùrà ń béèrè", "Láti san owó ilẹ̀"], answer: 1, why: "Ìwọ̀n ilẹ̀ kan náà ń mú ìfiwéra tọ́." },
      { objective: "O2", q: "Owó ilẹ̀ tí o ń san ohun yòówù tí o gbìn jẹ́:", options: ["Ìnáwó tó ń yí padà", "Èrè àkọ́kọ́", "Ìnáwó tí kì í yí padà", "Títà"], answer: 2, why: "Ìnáwó tí kì í yí padà kì í yí padà bí ohun tí o gbìn ṣe pọ̀ tó." },
      { objective: "O2", q: "Ohun ọ̀gbìn méjì ní èrè tó jọra, ṣùgbọ́n ọ̀kan sábà máa ń kùnà. O yẹ kí o:", options: ["Pa ewu tì", "Gbin èyí tó léwu nìkan", "Yan nípa àwọ̀", "Ro ewu pẹ̀lú èrè"], answer: 3, why: "Èrè gíga kò níye tó bẹ́ẹ̀ tí kíkùnà bá ṣeé ṣe." },
      { objective: "O3", q: "Kíkó èso jọ pẹ̀lú ẹgbẹ́ alájọṣe ń ṣèrànwọ́ nítorí:", options: ["Iye tó pọ̀ lè rí iye owó tó dára jù", "Ohun ọ̀gbìn ń dàgbà kíákíá", "A kò nílò ìpele dídára", "Àwọn olùrà ń san owó tó kéré"], answer: 0, why: "Àwọn olùrà ń san owó púpọ̀ fún èso tó pọ̀ tí ó sì ń dé déédéé." },
      { objective: "O3", q: "Èso tó mọ́, tó gbẹ, tí a ti tò:", options: ["Ń mú owó tó kéré wá", "Ń mú owó púpọ̀ wá, ó sì ń pẹ́ jù", "Kò sí ẹni tó fẹ́ ẹ", "Ń bàjẹ́ kíákíá"], answer: 1, why: "Títẹ̀lé ìpele dídára ń mú iye owó àti ìgbà ìpamọ́ pọ̀ sí i." },
      { objective: "O3", q: "Kí o tó fọwọ́ sí àdéhùn àgbẹ̀ (contract farming), o yẹ kí o:", options: ["Fọwọ́ sí i lẹ́sẹ̀kẹsẹ̀", "Fohùn ṣọ̀kan lórí fóònù nìkan", "Ka àwọn ìlànà kí o sì gbà á ní àkọsílẹ̀", "Ní kí olùrà pinnu ohun gbogbo"], answer: 2, why: "Àwọn ìlànà tí a kọ sílẹ̀ ń dáàbò bò ọ́." },
      { objective: "O4", q: "Ètò ìṣàn owó ń fi hàn:", options: ["Àpapọ̀ èrè nìkan", "Oríṣi ohun ọ̀gbìn", "Òjò", "Owó tó wọlé àti tó jáde ní oṣù kọ̀ọ̀kan"], answer: 3, why: "Àkókò owó ni ìtumọ̀ ìṣàn owó." },
      { objective: "O4", q: "Oṣù ìyàn ni:", options: ["Àwọn oṣù tí owó tàbí oúnjẹ máa ń tán", "Àwọn oṣù ìkórè", "Ọjọ́ ìsinmi", "Ọjọ́ ọjà"], answer: 0, why: "Ṣíṣètò fún wọn ń dènà yíyá owó tàbí títà ní àkókò wàhálà." },
      { objective: "O4", q: "Àǹfààní kan tí àpò owó tàbí àkáǹtì oko ọ̀tọ̀ ní ni:", options: ["Iye owó tó ga jù", "Owó oko àti owó ilé kò ní dàpọ̀", "A kò ní nílò àkọsílẹ̀", "Ajílẹ̀ ọ̀fẹ́"], answer: 1, why: "Yíyà wọ́n sọ́tọ̀ ń fi ohun tí oko ń rí àti ń ná gan-an hàn." },
      { objective: "O4", q: "Ọ̀rọ̀ kan sọ pé o gba owó ní àṣìṣe ó sì ní kí o dá a padà. O yẹ kí o:", options: ["Fi í ránṣẹ́ lẹ́sẹ̀kẹsẹ̀", "Fi ìlọ́po méjì ránṣẹ́", "Ṣàyẹ̀wò owó tó wà nínú àkáǹtì rẹ gan-an àti àkọsílẹ̀ rẹ, kí o sì kàn sí ilé-iṣẹ́ náà ní ọ̀nà tirẹ̀ gan-an", "Pín PIN rẹ"], answer: 2, why: "Ọ̀rọ̀ \"wrong transfer\" èké jẹ́ ẹ̀tàn tó wọ́pọ̀." },
      { objective: "O5", q: "Láti fi àwọn gbèsè wé ara wọn, wo:", options: ["Ìpolówó nìkan", "Èlé nìkan", "Bí wọ́n ṣe yára san owó jáde nìkan", "Iye tí o máa san padà lápapọ̀, títí kan gbogbo owó ìsanwó"], answer: 3, why: "Owó ìsanwó lè mú gbèsè tí èlé rẹ̀ kéré wọ́n." },
      { objective: "O5", q: "SACCO ni:", options: ["Ẹgbẹ́ alájọṣe ìfipamọ́ àti yíyá owó tí àwọn ọmọ ẹgbẹ́ ní", "Kòkòrò oko", "Owó orí ìjọba", "Drone"], answer: 0, why: "SACCO ń kó owó tí àwọn ọmọ ẹgbẹ́ fi pamọ́ jọ, ó sì ń yá àwọn ọmọ ẹgbẹ́ ní owó." },
      { objective: "O5", q: "Àwọn ọjọ́ ìsanpadà gbèsè gbọ́dọ̀:", options: ["Jẹ́ èyí tí a pa tì", "Bá àwọn oṣù tí owó rẹ ń wọlé mu", "Jẹ́ ọ̀sọ̀ọ̀sẹ̀ nígbà gbogbo", "Jẹ́ èyí tí a pinnu lẹ́yìn tí o bá ti ná owó náà"], answer: 1, why: "Ṣíṣe kí ìsanpadà bá owó tó ń wọlé mu ń dènà àìlèsan." },
      { objective: "O6", q: "Èwo ló ń dín ewu oko kù?", options: ["Yíyá owó tó pọ̀ jù tí ó ṣeé ṣe", "Gbígbin ohun ọ̀gbìn kan ṣoṣo", "Ìfipamọ́, oríṣiríṣi ohun ọ̀gbìn àti ìbánigbófò níbi tí ó bá wà", "Títa gbogbo rẹ̀ ní àkókò ìkórè"], answer: 2, why: "Pípín ewu ká ń dáàbò bo oko ní àsìkò búburú." },
      { objective: "O6", q: "Ó yẹ kí a ṣe àtúnṣe ètò òwò:", options: ["Láéláé", "Ní ọdún mẹ́wàá mẹ́wàá", "Nígbà tí ayánilówó bá béèrè nìkan", "Ní àsìkò kọ̀ọ̀kan pẹ̀lú ohun tó ṣẹlẹ̀ gan-an"], answer: 3, why: "Àtúnṣe ń mú kí ètò náà jẹ́ òótọ́ kí ó sì wúlò." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 4, 7, 8, 11, 14, 15, 17, 19] },
  rubric: {
    mastery: "Dé ìpele \"Ó tẹ́ni lọ́rùn\" tàbí \"Ó tayọ\" ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", ṣàtúnṣe apá yẹn kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Èrè àkọ́kọ́",
        objective: "O2",
        notYet: "Iṣẹ́ tí kò tó méjì, tàbí àṣìṣe ìṣirò.",
        meets: "Èrè àkọ́kọ́ lórí éékà kan fún iṣẹ́ méjì, pẹ̀lú iye owó agbègbè àti ìṣirò tó tọ̀nà.",
        exceeds: "Fi iṣẹ́ ọwọ́ àti ewu wé ara wọn pẹ̀lú èrè."
      },
      {
        name: "Ọjà",
        objective: "O3",
        notYet: "Kò dárúkọ olùrà tàbí ọ̀nà títà kankan.",
        meets: "Dárúkọ ẹni tó máa rà, báwo, àti ní iye owó wo.",
        exceeds: "Fi ó kéré tán ọ̀nà mẹ́ta láti tà wé ara wọn àti ìpele dídára tí ọ̀kọ̀ọ̀kan nílò."
      },
      {
        name: "Ìṣàn owó",
        objective: "O4",
        notYet: "Kò sí àkọsílẹ̀ oṣù kọ̀ọ̀kan.",
        meets: "Àkọsílẹ̀ oṣù 12 ti owó tó wọlé àti tó jáde, pẹ̀lú àmì sí àwọn oṣù ìyàn.",
        exceeds: "Ètò fún oṣù ìyàn kọ̀ọ̀kan."
      },
      {
        name: "Gbèsè",
        objective: "O5",
        notYet: "A kọ gbèsè sílẹ̀ láìsí iye owó rẹ̀ lápapọ̀ tàbí ètò ìsanpadà.",
        meets: "Gbèsè èyíkéyìí fi àpapọ̀ ohun tí a san padà, iye owó lápapọ̀ àti bí ìsanpadà ṣe bá ìṣàn owó mu hàn, tàbí a kò nílò gbèsè.",
        exceeds: "Dárúkọ ayánilówó tó ní ìwé àṣẹ àti ètò fún àsìkò búburú."
      },
      {
        name: "Ewu àti àfojúsùn",
        objective: "O6",
        notYet: "Kò sí ewu tàbí àfojúsùn.",
        meets: "Àwọn ewu pàtàkì pẹ̀lú bí a ṣe máa dín wọn kù, àti àfojúsùn mẹ́ta pẹ̀lú nọ́mbà.",
        exceeds: "Ó wọ ojú-ewé kan tó yé, àkọsílẹ̀ sì ń tì í lẹ́yìn."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn àgbẹ̀ tí wọ́n ń kọ àkọsílẹ̀ fún ó kéré tán oṣù mẹ́ta (ìwádìí àtẹ̀lé)",
      "Owó tí oko ń rí tàbí èrè àkọ́kọ́ ní ìfiwéra pẹ̀lú àsìkò tó kọjá, bí àwọn àgbẹ̀ tàbí alábàáṣiṣẹ́ ṣe ròyìn",
      "Àwọn àgbẹ̀ tí wọ́n dara pọ̀ mọ́ ẹgbẹ́ alájọṣe, tí wọ́n fọwọ́ sí àdéhùn olùrà ní àkọsílẹ̀, tàbí tí wọ́n gba gbèsè lọ́wọ́ ayánilówó tó ní ìwé àṣẹ pẹ̀lú ètò"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Ìwé àkọsílẹ̀ àti gègé, tàbí spreadsheet lórí fóònù",
      "Ẹ̀rọ ìṣirò (fóònù lásán ní ọ̀kan)",
      "Iye owó àti ìnáwó ti agbègbè akẹ́kọ̀ọ́, tàbí àwọn àpẹẹrẹ inú ẹ̀kọ́ náà",
      "Àkọsílẹ̀ owó orí fóònù (statement) tí akẹ́kọ̀ọ́ bá ní ọ̀kan",
      "Nǹkan bí ìṣẹ́jú 60 ti ẹ̀kọ́, pẹ̀lú àkókò láti gba iye owó jọ àti láti kọ ètò náà"
    ],
    facilitatorNotes: [
      "Ẹ ṣírò èrè àkọ́kọ́ kan papọ̀ pẹ̀lú iye owó gidi ti agbègbè ẹgbẹ́ náà kí àwọn akẹ́kọ̀ọ́ tó ṣe tiwọn.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé àròsọ ni àwọn nọ́mbà inú ẹ̀kọ́ náà; iye owó yàtọ̀ láti ibì kan dé ibòmíì àti láti àsìkò dé àsìkò.",
      "Tẹnu mọ́ ààbò owó orí fóònù: má ṣe pín PIN tàbí kóòdù láéláé, kí o sì ròyìn ìṣòro ní ọ̀nà ti ilé-iṣẹ́ náà gan-an nìkan.",
      "Pe òṣìṣẹ́ ẹgbẹ́ alájọṣe tàbí SACCO kan láti ṣàlàyé gbèsè tó ní ìwé àṣẹ; má ṣe dámọ̀ràn gbèsè kankan fúnra rẹ.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
