"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-ipm-pest-control.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_IPM = { name: "FAO: Ìṣàkóso àjọpọ̀ fún kòkòrò àjẹnirun (Integrated Pest Management, IPM)", url: "https://www.fao.org/pest-and-pesticide-management/ipm/integrated-pest-management/en/" };
const CIMMYT_FAW = { name: "CIMMYT, USAID àti àwọn alábàáṣiṣẹ́: Fall Armyworm ní Áfíríkà: Ìwé ìtọ́sọ́nà fún IPM (2018)", url: "https://repository.cimmyt.org/handle/10883/19204" };
const FAO_FAMEWS = { name: "FAO: app fóònù láti bá kòkòrò fall armyworm jà ní Áfíríkà (FAMEWS)", url: "https://www.fao.org/newsroom/detail/FAO-launches-mobile-application-to-support-fight-against-Fall-Armyworm-in-Africa/en" };
const ICIPE_TUTA = { name: "icipe: Kòkòrò oṣù: kòkòrò tó ń wa ihò nínú ewé tòmátì, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const ICIPE_PP_FAW = { name: "icipe: Ọ̀nà push-pull dá kòkòrò fall armyworm dúró", url: "https://www.icipe.org/news/icipe-push-pull-technology-halts-fall-armyworm-rampage" };
const ICIPE_PP_HOW = { name: "icipe: Ìwádìí tuntun ṣàlàyé bí push-pull ṣe ń ṣẹ́gun fall armyworm (bí desmodium àti brachiaria ṣe ń ṣiṣẹ́)", url: "https://www.icipe.org/news/new-study-unravels-mechanisms-through-which-icipe-push-pull-technology-conquers-fall-armyworm" };
const ICIPE_PP_GUIDE = { name: "icipe: Ìwé ìtọ́sọ́nà àgbẹ̀ fún Climate-Smart Push-Pull (ẹ̀dà tí a tún ṣe)", url: "https://technologytransfer.icipe.org/wp-content/uploads/2021/04/Climate_Smart_Push-Pull_English_Revised_Edition_Web_Version.pdf" };
const PCPB = { name: "Pest Control Products Board (Kenya)", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nàìjíríà)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Ghana)", url: "https://www.epa.gov.gh" };
const CILSS_CSP = { name: "CILSS / INSAH: Ìwé ìtọ́sọ́nà ìforúkọsílẹ̀ ti Sahelian Pesticides Committee (CSP)", url: "https://insah.cilss.int/wp-content/uploads/2023/08/GUIDE_CSP_FINAL_nov_2017_anglais.pdf" };

module.exports = {
  id: "agri-ipm-pest-control-yo",
  lang: "yo",
  translationOf: "agri-ipm-pest-control",
  category: "Agriculture (Africa)",
  name: "Ìṣàkóso Àjọpọ̀ fún Kòkòrò àti Ìṣàkóso Kòkòrò Láìlo Kẹ́míkà",
  skills: "Dídènà kòkòrò kí wọ́n tó bẹ̀rẹ̀, Yíyẹ oko wò àti mímọ fall armyworm àti Tuta absoluta, Pípinnu ìgbà tí a ó gbé ìgbésẹ̀ pẹ̀lú ìpele ìgbésẹ̀ àti àkọsílẹ̀, Lílo push-pull, ọ̀tá àdánidá, ìdẹkùn àti ọ̀nà alààyè, Lílo oògùn apakòkòrò láìléwu àti lọ́nà òfin gẹ́gẹ́ bí ìgbésẹ̀ ìkẹyìn",
  outcome: "kọ ètò ìṣàkóso àjọpọ̀ fún kòkòrò (IPM) fún irè oko kan lórí oko rẹ kí o sì ṣe é: dènà kòkòrò, yẹ oko wò ní gbogbo ọ̀sẹ̀, lo ìpele ìgbésẹ̀ láti pinnu ìgbà tí o máa gbé ìgbésẹ̀, kọ́kọ́ lo ọ̀nà tí kì í ṣe kẹ́míkà, kí o sì lo oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ láìléwu kìkì nígbà tí ó bá pọn dandan.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ (extension officer) tí ó ti sú láti máa fín oògùn léraléra, tí wọ́n sì ń pàdánù irè síbẹ̀. Àwọn àpẹẹrẹ jẹ́ àgbàdo, ọkà bàbà, ẹ̀wà àti tòmátì ní Kenya, Nàìjíríà, Ghana àti Burkina Faso.",
    "Orí 1 kọ́ ọ bí o ṣe lè dá kòkòrò dúró ní kùtùkùtù: ìgbésẹ̀ mẹ́rin IPM (dènà, ṣọ́, pinnu, gbé ìgbésẹ̀), bí o ṣe lè yẹ oko wò kí o sì mọ fall armyworm àti kòkòrò tó ń wa ihò nínú ewé tòmátì (Tuta absoluta) yàtọ̀ sí ìbàjẹ́ míì, àti bí o ṣe lè lo ìpele ìgbésẹ̀ àti àkọsílẹ̀ tó rọrùn láti mọ ìgbà tí ìgbésẹ̀ máa mú èrè wá. Orí 2 kọ́ ọ ní ìṣàkóso pẹ̀lú májèlé díẹ̀: push-pull láti ọ̀dọ̀ icipe, àwọn ọ̀tá àdánidá, ìdẹkùn, ọjà láti ara ewéko àti ọjà alààyè, àti, gẹ́gẹ́ bí ìgbésẹ̀ ìkẹyìn, lílo oògùn apakòkòrò láìléwu àti lọ́nà òfin tí ó tún ń dín ìfaradà oògùn kù.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" nínú oko tìrẹ. Kòkòrò àti àwọn ọjà tí a gbà láàyè yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, nítorí náà lo ẹ̀kọ́ yìí pẹ̀lú òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ rẹ, ilé ìwòsàn ọ̀gbìn (plant clinic) àti àjọ alábòójútó oògùn apakòkòrò ti orílẹ̀-èdè rẹ. Àyẹ̀wò kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ètò IPM fún àsìkò kan fún irè oko kan lórí oko tìrẹ (fún àpẹẹrẹ ìdajì éékà àgbàdo, tàbí ebè tòmátì kan): àwọn kòkòrò àti àrùn pàtàkì tí o retí, ó kéré tán ìgbésẹ̀ ìdènà mẹ́ta, ètò yíyẹ oko wò ọ̀sẹ̀ọ̀sẹ̀ pẹ̀lú ìwé àkọsílẹ̀, ìpele ìgbésẹ̀ tí o gbà láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn fún kòkòrò pàtàkì kọ̀ọ̀kan, àwọn ọ̀nà tí kì í ṣe kẹ́míkà tí o máa kọ́kọ́ lò, àti ètò oògùn apakòkòrò fún ìgbésẹ̀ ìkẹyìn (ọjà tí o ti ṣàyẹ̀wò lórí àkọsílẹ̀ àjọ alábòójútó rẹ, àwọn òfin àmì-ìtọ́sọ́nà (label) tí o máa tẹ̀lé, aṣọ ààbò tí o máa wọ̀, àti bí o ṣe máa yí ẹgbẹ́ oògùn padà láti dín ìfaradà oògùn kù).",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, àwọn òṣìṣẹ́ oko, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀ àti àwọn òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ káàkiri Áfíríkà, tí wọ́n ń gbin àgbàdo, ọkà bàbà, ìrẹsì, ẹ̀wà, ẹ̀pà, ẹ̀fọ́ àti tòmátì. Ọ̀pọ̀ ti ń bá fall armyworm jà láti ìgbà tí ó dé Áfíríkà ní 2016, àwọn tí ń gbin tòmátì sì ti ń bá Tuta absoluta jà.",
    startingPoint: "Wọ́n lè dárúkọ àwọn kòkòrò kan, wọ́n sì sábà máa ń fín oògùn nígbà tí wọ́n bá rí ìbàjẹ́, nígbà púpọ̀ pẹ̀lú ohunkóhun tí olùtajà ohun ọ̀gbìn (agro-dealer) bá dábàá. Díẹ̀ ló ń yẹ oko wò ní ìlànà, tí wọ́n ń kọ àkọsílẹ̀ kòkòrò, tí wọ́n ń lo ìpele ìgbésẹ̀, tàbí tí wọ́n mọ àwọn ọ̀tá àdánidá tí ó ń ràn wọ́n lọ́wọ́. Ọ̀pọ̀ ń fín oògùn láìwọ gbogbo aṣọ ààbò.",
    gap: "Fífín oògùn nítorí àṣà ń ná owó, ó ń pa àwọn ọ̀tá àdánidá, ó ń jẹ́ kí kòkòrò fara da oògùn, ó ń ba ìlera jẹ́, ó sì lè fi ìyókù oògùn sílẹ̀ lára irè tí àwọn olùrà máa kọ̀. Àwọn akẹ́kọ̀ọ́ nílò láti dènà kòkòrò, yẹ oko wò kí wọ́n sì kọ ọ́ sílẹ̀, gbé ìgbésẹ̀ kìkì nígbà tí ìpele ìgbésẹ̀ bá fi hàn pé ó máa mú èrè wá, kọ́kọ́ lo ọ̀nà tí kì í ṣe kẹ́míkà, kí wọ́n sì lo oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀ láìléwu gẹ́gẹ́ bí ìgbésẹ̀ ìkẹyìn.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì, ẹ̀kọ́ náà sì wà ní èdè Spanish, French àti Arabic pẹ̀lú",
      "Ẹ̀rọ: fóònù lásán tàbí smartphone; awò ìfojúwò (hand lens) ń ṣèrànwọ́ ṣùgbọ́n kò pọn dandan",
      "Àkókò: ẹ̀kọ́ tí ó gba nǹkan bí ìṣẹ́jú 5 tí ó bá iṣẹ́ oko mu; àṣeṣe ń wáyé nínú oko akẹ́kọ̀ọ́ fúnra rẹ̀",
      "Òfin yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn: ọjà gbọ́dọ̀ wà lórí àkọsílẹ̀ àjọ alábòójútó orílẹ̀-èdè (fún àpẹẹrẹ PCPB ní Kenya, NAFDAC ní Nàìjíríà, EPA ní Ghana, Sahelian Pesticides Committee fún àwọn orílẹ̀-èdè CILSS bí Senegal àti Burkina Faso)",
      "Ààbò: ẹ̀kọ́ náà kì í dárúkọ ọjà, ìwọ̀n lílò tàbí àkókò ìdúró ṣáájú ìkórè rárá; akẹ́kọ̀ọ́ ń tẹ̀lé àmì-ìtọ́sọ́nà àti òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ wọn"
    ],
    prerequisites: "Kò sí. \"Ọ̀gbìn Irè Oko àti Ẹ̀fọ́ Tó Lè Pẹ́\" kọ́kọ́ fúnni ní àkópọ̀ kúkúrú nípa IPM, \"Ìlera Ilẹ̀ àti Ọ̀rá Ilẹ̀\" sì ń ṣèrànwọ́ fún ìdènà."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún irè oko kan lórí oko tìrẹ", action: "kọ àwọn ìgbésẹ̀ ìdènà tí kì í jẹ́ kí kòkòrò pọ̀ sí i kí àsìkò tó bẹ̀rẹ̀ sílẹ̀", standard: "ní dídárúkọ ó kéré tán ìgbésẹ̀ mẹ́ta tí ó bá irè rẹ mu" },
    { id: "O2", condition: "Ní rírìn kọjá nínú oko rẹ lẹ́ẹ̀kan lọ́sẹ̀", action: "yẹ iye ọ̀gbìn kan pàtó wò kí o sì mọ fall armyworm, Tuta absoluta àti àwọn ọ̀tá àdánidá tí ó wọ́pọ̀ láti ara àmì wọn", standard: "ní ṣíṣàyẹ̀wò ó kéré tán ọ̀gbìn 50 (tàbí ọ̀gbìn tòmátì 20) àti kíkọ ohun tí o rí sílẹ̀" },
    { id: "O3", condition: "Tí o bá ní iye tí o kà nígbà yíyẹ oko wò àti ìpele ìgbésẹ̀ láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn", action: "pinnu bóyá o máa gbé ìgbésẹ̀ báyìí tàbí o máa ṣì ṣọ́ ọ, kí o sì kọ ìpinnu náà sílẹ̀", standard: "ní títẹ̀lé òfin ìpele ìgbésẹ̀ ní gbogbo ìgbà" },
    { id: "O4", condition: "Tí ìṣòro kòkòrò bá wà lórí irè rẹ", action: "yan àwọn ọ̀nà tí kì í ṣe kẹ́míkà bí push-pull, ọ̀tá àdánidá, ìdẹkùn àti ọjà alààyè kí o sì ṣètò wọn", standard: "kí o tó lo oògùn apakòkòrò kẹ́míkà kankan" },
    { id: "O5", condition: "Nígbà tí oògùn apakòkòrò bá pọn dandan lóòótọ́", action: "ṣàyẹ̀wò pé a ti forúkọ ọjà náà sílẹ̀, tẹ̀lé àmì-ìtọ́sọ́nà rẹ̀ kí o sì wọ aṣọ ààbò tí ó kọ sílẹ̀", standard: "láìfo ìgbésẹ̀ kankan" },
    { id: "O6", condition: "Jálẹ̀ àsìkò kan tí o ń pinnu nípa fífín oògùn", action: "yí ẹgbẹ́ oògùn apakòkòrò padà kí o sì kọ àkọsílẹ̀ fífín oògùn láti dín ìfaradà oògùn kù", standard: "láìlo ẹgbẹ́ kan náà lẹ́ẹ̀mejì ní ìtẹ̀léra lórí ìran kòkòrò kan náà" }
  ],
  chapters: [
    {
      name: "Orí 1: Dídá kòkòrò dúró ní kùtùkùtù",
      lessons: [
        {
          title: "Ìgbésẹ̀ mẹ́rin IPM, bẹ̀rẹ̀ pẹ̀lú ìdènà",
          objectives: ["O1"],
          minutes: 5,
          goal: "Kọ àwọn ìgbésẹ̀ ìdènà tí kì í jẹ́ kí kòkòrò pọ̀ sí i lórí ọ̀kan lára irè rẹ sílẹ̀.",
          text: [
            "FAO ṣàlàyé ìṣàkóso àjọpọ̀ fún kòkòrò (IPM) gẹ́gẹ́ bí wíwo gbogbo ọ̀nà láti ṣàkóso kòkòrò, dída àwọn tó tọ́ pọ̀, àti lílo oògùn apakòkòrò kìkì nígbà tí ìdí rẹ̀ bá wà. Ó ní ìgbésẹ̀ mẹ́rin: dènà, ṣọ́, pinnu, kí o sì gbé ìgbésẹ̀. Ìgbésẹ̀ àkọ́kọ́ ni ó ń fi owó pamọ́ jù.",
            "Ìdènà túmọ̀ sí ṣíṣe oko ní ibi tí kò dára fún kòkòrò, tí ó sì dára fún irè. Gbin irúgbìn tí a fọwọ́sí (certified) ti oríṣi tó bá agbègbè rẹ mu, àti oríṣi tí kòkòrò kò lè borí tàbí tí ó lè fara dà á níbi tí wọ́n bá wà. Yí irè padà kí àwọn kòkòrò tí ó ń gbé inú ilẹ̀ tàbí lára ìyókù irè pàdánù oúnjẹ wọn: fún àpẹẹrẹ, àgbàdo, lẹ́yìn náà ẹ̀wà, lẹ́yìn náà ọkà bàbà. Gbìn lásìkò, kí gbogbo yín sì gbìn pọ̀ pẹ̀lú àwọn aládùúgbò rẹ, kí kòkòrò má bàa kúrò ní oko tí a gbìn pẹ́ lọ sí oko tí a gbìn ṣáájú. Bọ́ ilẹ̀, nítorí ọ̀gbìn tí kò lágbára ni kòkòrò máa ń kọ́kọ́ kọlù.",
            "Jẹ́ kí oko mọ́: fà á tu kí o sì pa ọ̀gbìn tí ó ní àrùn kòkòrò àìfojúrí (virus) tàbí àrùn míì run, yọ àwọn ọ̀gbìn tí ó hù fúnra wọn àti èpò tí kòkòrò ń gbé lára wọn kúrò, kí o sì fọ irinṣẹ́ àti bàtà. Fún tòmátì, gbé àwọn ọmọ ọ̀gbìn dàgbà nínú ibi ìtọ́jú irúgbìn (nursery) tó mọ́ tí a fi àwọ̀n bò, kí wọ́n lè dé oko láìsí Tuta absoluta àti whiteflies. Fi àwọn ewéko olódòdó àti ọgbà igi sílẹ̀ ní ẹ̀gbẹ́ oko, nítorí wọ́n ń bọ́ àwọn kòkòrò tí ó ń jẹ kòkòrò àjẹnirun.",
            "Àgbẹ̀ obìnrin kan ní Ghana tí ó ń yí àgbàdo padà pẹ̀lú ẹ̀pà, tí ó ń gbìn ní kùtùkùtù pẹ̀lú àwọn aládùúgbò rẹ̀, tí ó sì ń fa ọ̀gbìn aláìsàn tu ní gbogbo ọ̀sẹ̀ sábà máa ń fín oògùn díẹ̀ gan-an ju ẹni tí ó ń gbin àgbàdo sórí ilẹ̀ kan náà ní gbogbo àsìkò."
          ],
          steps: ["Kọ àwọn kòkòrò àti àrùn pàtàkì ti irè rẹ sílẹ̀ (béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn tàbí ilé ìwòsàn ọ̀gbìn).", "Yan irúgbìn tí a fọwọ́sí ti oríṣi tó bá a mu, tí kòkòrò kò lè borí tàbí tí ó lè fara dà á.", "Ṣètò yíyí irè padà kí o sì gbìn lásìkò, ní àkókò kan náà pẹ̀lú àwọn aládùúgbò rẹ.", "Ṣètò ìmọ́tótó oko: yọ ọ̀gbìn aláìsàn, ọ̀gbìn tí ó hù fúnra rẹ̀ àti èpò tí kòkòrò ń gbé kúrò; fọ irinṣẹ́.", "Fi ewéko olódòdó sílẹ̀ ní ẹ̀gbẹ́ oko fún àwọn ọ̀tá àdánidá."],
          words: [["IPM", "ìṣàkóso àjọpọ̀ fún kòkòrò: dídènà kòkòrò, ṣíṣọ́ wọn, pípinnu ìgbà tí ìgbésẹ̀ máa mú èrè wá, àti dída ọ̀pọ̀ ọ̀nà ìṣàkóso pọ̀, pẹ̀lú oògùn apakòkòrò kìkì nígbà tí ìdí rẹ̀ bá wà."], ["Ìdènà", "àwọn ìgbésẹ̀ tí a gbé kí kòkòrò tó dé, kí wọ́n má bàa pọ̀ sí i."], ["Yíyí irè padà", "gbígbin irè míì sórí ilẹ̀ kan náà ní àsìkò kọ̀ọ̀kan."], ["Ọ̀gbìn tí ó hù fúnra rẹ̀ (volunteer plant)", "ọ̀gbìn irè tí ó hù fúnra rẹ̀ láti ara irúgbìn àsìkò tó kọjá, tí ó sì lè gbé kòkòrò."]],
          slides: [
            { title: "IPM ní ìgbésẹ̀ mẹ́rin", bullets: ["1. Dènà", "2. Ṣọ́ (yẹ oko wò)", "3. Pinnu: ṣé ìgbésẹ̀ máa mú èrè wá?", "4. Gbé ìgbésẹ̀: ọ̀nà tí kì í ṣe kẹ́míkà ṣáájú, oògùn ní ìkẹyìn"] },
            { title: "Ìdènà bẹ̀rẹ̀ láti ara irúgbìn", bullets: ["Irúgbìn tí a fọwọ́sí ti oríṣi tó bá a mu", "Oríṣi tí kòkòrò kò lè borí tàbí tí ó lè fara dà á", "Bọ́ ilẹ̀: ọ̀gbìn tí kò lágbára ni kòkòrò ń kọ́kọ́ kọlù"] },
            { title: "Fi ebi pa àwọn kòkòrò", bullets: ["Yí irè padà: àgbàdo, lẹ́yìn náà ẹ̀wà, lẹ́yìn náà ọkà bàbà", "Gbìn lásìkò, pọ̀ pẹ̀lú àwọn aládùúgbò", "Yọ ọ̀gbìn tí ó hù fúnra rẹ̀ àti èpò tí kòkòrò ń gbé kúrò"] },
            { title: "Jẹ́ kí oko mọ́", bullets: ["Fa ọ̀gbìn aláìsàn tu kí o sì pa á run", "Fọ irinṣẹ́ àti bàtà", "Ibi ìtọ́jú irúgbìn tòmátì tó mọ́, tí a fi àwọ̀n bò", "Ewéko olódòdó ní ẹ̀gbẹ́ oko ń bọ́ àwọn ọ̀tá àdánidá"] }
          ],
          sources: [FAO_IPM],
          tryIt: "Yan irè oko kan tí o máa gbìn ní àsìkò tó ń bọ̀. Kọ àwọn kòkòrò tàbí àrùn mẹ́ta tí ó burú jù fún un, lẹ́yìn náà kọ ó kéré tán ìgbésẹ̀ ìdènà mẹ́ta tí o máa gbé kí o tó gbìn (irúgbìn, yíyí irè padà, àkókò, ìmọ́tótó, ewéko ẹ̀gbẹ́ oko).",
          youCanNow: "dárúkọ ìgbésẹ̀ mẹ́rin IPM kí o sì kọ àwọn ìgbésẹ̀ ìdènà tí kì í jẹ́ kí kòkòrò pọ̀ sí i lórí irè rẹ sílẹ̀.",
          quickCheck: [
            { objective: "O1", q: "Ìgbésẹ̀ IPM wo ló sábà máa ń fi owó pamọ́ jù fún àgbẹ̀?", options: ["Fífín oògùn ní gbogbo ọ̀sẹ̀", "Rírà ọjà tó lágbára jù", "Ìdènà kí kòkòrò tó dé", "Fífín oògùn sí oko aládùúgbò"], answer: 2, why: "Ìdènà kì í jẹ́ kí kòkòrò pọ̀ sí i, nítorí náà a kò ní nílò ìṣàkóso púpọ̀ lẹ́yìn náà." },
            { objective: "O1", q: "Kòkòrò ba àgbàdo rẹ jẹ́ gan-an lórí ilẹ̀ kan náà fún àsìkò mẹ́ta ní ìtẹ̀léra. Ìgbésẹ̀ ìdènà wo ló bá a mu jù?", options: ["Gbin ẹ̀wà tàbí ẹ̀pà sórí ilẹ̀ náà ní àsìkò tó ń bọ̀", "Gbin àgbàdo lẹ́yìn àwọn aládùúgbò rẹ", "Fi pòròpórò àgbàdo àsìkò tó kọjá sílẹ̀ ní ìdúró", "Gbin irúgbìn tí a kò fọwọ́sí tí o mú láti ara àgbàdo tí kòkòrò ti bàjẹ́"], answer: 0, why: "Yíyí irè padà ń já ìyípo ìgbésí ayé kòkòrò nípa gbígba ọ̀gbìn tí ó ń jẹ lọ́wọ́ rẹ̀." }
          ]
        },
        {
          title: "Yíyẹ oko wò àti mímọ fall armyworm àti Tuta absoluta",
          objectives: ["O2"],
          minutes: 6,
          goal: "Yẹ oko wò ní ọ̀nà kan pàtó kí o sì mọ fall armyworm, Tuta absoluta àti àwọn ọ̀tá àdánidá láti ara àmì wọn.",
          text: [
            "Yíyẹ oko wò túmọ̀ sí rírìn kọjá nínú oko rẹ ní ìlànà àkókò kan àti ṣíṣàyẹ̀wò iye ọ̀gbìn kan pàtó, kí o lè rí wàhálà ní kùtùkùtù kí o sì lè kà á. Yẹ oko wò ó kéré tán lẹ́ẹ̀kan lọ́sẹ̀, kí ó sì pọ̀ jù bẹ́ẹ̀ lọ fún àgbàdo kékeré àti fún tòmátì. Rìn ní ìrísí lẹ́tà W tàbí ní wọ́ọ́rọ́wọ́ kí o lè ṣàyẹ̀wò gbogbo oko, kì í ṣe ẹ̀gbẹ́ rẹ̀ nìkan. Nínú àgbàdo, dúró ní ibi márùn-ún kí o sì ṣàyẹ̀wò ọ̀gbìn 10 ní ìlà kan ní ibi kọ̀ọ̀kan, ọ̀gbìn 50 lápapọ̀. Nínú ebè tòmátì kékeré, ṣàyẹ̀wò ọ̀gbìn 20 tí ó tàn káàkiri àwọn ebè.",
            "Fall armyworm dé Áfíríkà ní 2016, ó sì wà ní ọ̀pọ̀ jù lọ apá ilẹ̀ Áfíríkà báyìí. Lórí àgbàdo kékeré, wá \"fèrèsé\" kéékèèké (àwọn ibi tínínrín tí a lè ríran kọjá) lórí ewé, lẹ́yìn náà ihò ràbàtà-ràbàtà àti ìgbẹ́ tútù tí ó dà bí ìyẹ̀fun igi nínú ọ̀fun àgbàdo (whorl). Ìdin náà ní àmì Y tí ó dojú dé, tí ó ṣe àwọ̀ funfun díẹ̀, ní orí rẹ̀, àti àmì dúdú mẹ́rin tí ó ṣe bí igun mẹ́rin nítòsí ìrù rẹ̀. Ìdì ẹyin máa ń wà lórí ewé lábẹ́ ìbòrí onírun. A ka ọ̀gbìn sí èyí tí kòkòrò ti wọ̀ tí ó bá ní ìbàjẹ́ tuntun tàbí ìdin tí ó wà láàyè.",
            "Tuta absoluta, kòkòrò tó ń wa ihò nínú ewé tòmátì, wá láti South America, ó sì tàn káàkiri Áfíríkà láàárín ọdún díẹ̀; icipe ròyìn pé ní àríwá Nàìjíríà ní 2016 ó ba ọ̀pọ̀ jù lọ irè tòmátì jẹ́. Àwọn ìdin rẹ̀ kéékèèké ń wa ọ̀nà inú ewé, wọ́n ń ṣe àbààwọ́n funfun tí a lè ríran kọjá (leaf mine) pẹ̀lú ìgbẹ́ dúdú, wọ́n sì ń lu ihò kéékèèké sínú igi àti èso. Èyí tí ó ti dàgbà jẹ́ labalábá òru kékeré aláwọ̀ eérú àti ilẹ̀ tí ó ń fara pamọ́ ní ọ̀sán.",
            "Tún wá àwọn ọ̀rẹ́: ladybird àti àwọn ọmọ wọn, lacewing, aláǹtakùn, earwig, èèrà àti agbọ́n kéékèèké tí ó ń gbé ẹyin sínú kòkòrò, àti ìdin tí ó dà bí ẹni pé ó ń ṣàìsàn, tí ó rọ̀, tàbí tí olú (fungus) bò. FAO sọ pé àwọn ọ̀tá àdánidá ti ń pa ọ̀pọ̀ ìdin fall armyworm nínú oko ní Áfíríkà. Tí o kò bá dá ohun tí o rí lójú, ya fọ́tò tó ṣe kedere kí o sì béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí ilé ìwòsàn ọ̀gbìn; ní àwọn orílẹ̀-èdè kan, app FAMEWS ti FAO ń kọ ibi tí a ti rí fall armyworm sílẹ̀."
          ],
          steps: ["Yan ọjọ́ kan ní ọ̀sẹ̀ kọ̀ọ̀kan fún yíyẹ oko wò, kí o sì mú ìwé àkọsílẹ̀ tàbí fóònù dání.", "Rìn ní ìrísí W; dúró ní ibi 5 nínú àgbàdo (ọ̀gbìn 10 ní ibi kọ̀ọ̀kan) tàbí ṣàyẹ̀wò ọ̀gbìn tòmátì 20 tí ó tàn káàkiri.", "Lórí ọ̀gbìn kọ̀ọ̀kan, ṣàyẹ̀wò ewé, ọ̀fun tàbí orí ọ̀gbìn tí ó ń dàgbà, igi àti èso.", "Ka àwọn ọ̀gbìn tí ó ní ìbàjẹ́ tuntun tàbí kòkòrò tí ó wà láàyè; kọ ìdì ẹyin sílẹ̀.", "Kọ àwọn ọ̀tá àdánidá tí o rí sílẹ̀.", "Ya fọ́tò ohunkóhun tí o kò mọ̀ kí o sì béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn tàbí ilé ìwòsàn ọ̀gbìn."],
          words: [["Yíyẹ oko wò (scouting)", "rírìn kọjá nínú oko ní ìlànà àkókò kan àti ṣíṣàyẹ̀wò iye ọ̀gbìn kan pàtó fún kòkòrò, àrùn àti ọ̀tá àdánidá."], ["Ọ̀fun àgbàdo (whorl)", "àwọn ewé ọ̀dọ́ tí ó ká pọ̀ ní orí àgbàdo kékeré."], ["Ihò inú ewé (leaf mine)", "ọ̀nà tàbí àbààwọ́n funfun nínú ewé tí ìdin kékeré kan ṣe nígbà tí ó ń jẹun láàárín ojú méjèèjì ewé."], ["Ọ̀tá àdánidá", "kòkòrò, aláǹtakùn, olú tàbí ẹ̀dá alààyè míì tí ó ń pa kòkòrò àjẹnirun."]],
          slides: [
            { title: "Bí a ṣe ń yẹ oko wò", bullets: ["Ní gbogbo ọ̀sẹ̀, ní ọjọ́ kan náà", "Ìrísí W tàbí wọ́ọ́rọ́wọ́, kì í ṣe ẹ̀gbẹ́ oko nìkan", "Àgbàdo: ibi 5 x ọ̀gbìn 10 = 50", "Tòmátì: ọ̀gbìn 20 tí ó tàn káàkiri"] },
            { title: "Àwọn àmì fall armyworm", bullets: ["Fèrèsé lórí ewé ọ̀dọ́, lẹ́yìn náà ihò ràbàtà-ràbàtà", "Ìgbẹ́ tútù bí ìyẹ̀fun igi nínú ọ̀fun àgbàdo", "Y tí ó dojú dé ní orí, àmì dúdú 4 nítòsí ìrù"] },
            { title: "Àwọn àmì Tuta absoluta", bullets: ["Àbààwọ́n funfun nínú ewé pẹ̀lú ìgbẹ́ dúdú", "Ihò kéékèèké nínú igi àti èso", "Labalábá òru kékeré aláwọ̀ eérú tí ó ń fara pamọ́ ní ọ̀sán"] },
            { title: "Tún wá àwọn ọ̀rẹ́", bullets: ["Ladybird, lacewing, aláǹtakùn, earwig, èèrà", "Agbọ́n kékeré; ìdin aláìsàn tàbí tí olú bò", "Kò dá ọ lójú? Fọ́tò sí òṣìṣẹ́ ìmọ̀ràn tàbí ilé ìwòsàn ọ̀gbìn"] }
          ],
          sources: [CIMMYT_FAW, ICIPE_TUTA, FAO_FAMEWS],
          tryIt: "Yẹ ọ̀kan lára oko rẹ wò lónìí ní ìrísí W: ọ̀gbìn àgbàdo 50 tàbí ọ̀gbìn tòmátì 20. Kọ iye ọ̀gbìn tí ó ní ìbàjẹ́ tuntun tàbí kòkòrò tí ó wà láàyè, ìdì ẹyin èyíkéyìí, àti gbogbo ọ̀tá àdánidá tí o rí.",
          youCanNow: "yẹ oko wò ní ọ̀nà kan pàtó, mọ fall armyworm àti Tuta absoluta láti ara àmì wọn, kí o sì rí àwọn ọ̀tá àdánidá.",
          quickCheck: [
            { objective: "O2", q: "O rí ìgbẹ́ tútù tí ó dà bí ìyẹ̀fun igi àti ihò ràbàtà-ràbàtà nínú ọ̀fun àgbàdo kékeré. Kòkòrò wo ló ṣeé ṣe jù?", options: ["Kòkòrò tó ń wa ihò nínú ewé tòmátì", "Aphids", "Fall armyworm", "Ikán"], answer: 2, why: "Ihò ràbàtà-ràbàtà àti ìgbẹ́ tútù nínú ọ̀fun àgbàdo jẹ́ àmì fall armyworm tí a mọ̀ dáadáa." },
            { objective: "O2", q: "Kí ló dé tí a fi ń rìn ní ìrísí W nígbà yíyẹ oko wò dípò ṣíṣàyẹ̀wò àwọn ọ̀gbìn tí ó wà nítòsí ẹnu ọ̀nà?", options: ["Ó yára jù", "Àárín oko nìkan ni kòkòrò ń gbé", "Kò ná omi púpọ̀", "Ó ń ṣàyẹ̀wò gbogbo oko, kì í ṣe ẹ̀gbẹ́ rẹ̀ nìkan"], answer: 3, why: "Ìrísí W ń ṣàyẹ̀wò gbogbo apá oko, nítorí náà iye tí o kà ń fi ipò gidi hàn." }
          ]
        },
        {
          title: "Ìpele ìgbésẹ̀ àti àkọsílẹ̀: pípinnu ìgbà tí a ó gbé ìgbésẹ̀",
          objectives: ["O3"],
          minutes: 5,
          goal: "Fi iye tí o kà nígbà yíyẹ oko wò wé ìpele ìgbésẹ̀ kí o sì kọ ọ́ sílẹ̀ bóyá o máa gbé ìgbésẹ̀ tàbí o máa ṣì ṣọ́ ọ.",
          text: [
            "Rírí kòkòrò kò túmọ̀ sí pé o gbọ́dọ̀ fín oògùn. Ìpele ìgbésẹ̀ (action threshold) ni iye kòkòrò tàbí ìbàjẹ́ tí ìṣàkóso fi tọ́ sí owó tí a máa ná. Ní ìsàlẹ̀ rẹ̀, àwọn ọ̀tá àdánidá àti irè náà fúnra rẹ̀ sábà máa ń fara dà á, fífín oògùn sì máa fi owó ṣòfò, ó sì máa pa àwọn olùrànlọ́wọ́ rẹ. Gba ìpele ìgbésẹ̀ fún kòkòrò pàtàkì kọ̀ọ̀kan, ìpele ìdàgbà irè kọ̀ọ̀kan àti agbègbè rẹ láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí ilé-iṣẹ́ ìwádìí (bí KALRO ní Kenya), nítorí ó máa ń yí padà pẹ̀lú ìpele ìdàgbà irè, iye owó àti ìwádìí àdúgbò.",
            "Yí iye tí o kà padà sí ìdá-ọgọ́rùn-ún (%): àwọn ọ̀gbìn tí ó ní ìbàjẹ́ tuntun tàbí kòkòrò tí ó wà láàyè, pín sí àwọn ọ̀gbìn tí o ṣàyẹ̀wò, lọ́nà 100. Àpẹẹrẹ: o ṣàyẹ̀wò ọ̀gbìn àgbàdo 50, 9 sì ní ìbàjẹ́ fall armyworm tuntun, nítorí náà 9 / 50 x 100 = 18%. Tí òṣìṣẹ́ ìmọ̀ràn bá sọ fún ọ pé kí o gbé ìgbésẹ̀ ní 20% ní ìpele yìí, o máa ṣì ṣọ́ ọ, o sì máa tún yẹ ẹ́ wò ní ọjọ́ díẹ̀ sí i. Tí ó bá jẹ́ 26% ní ọ̀sẹ̀ tó ń bọ̀, o máa gbé ìgbésẹ̀. Àgbàdo kékeré sábà máa ń fara da ìbàjẹ́ díẹ̀ ju àgbàdo tí ó ti dàgbà lọ, nítorí náà ìpele ìgbésẹ̀ sábà máa ń yàtọ̀ ní ìpele ìdàgbà kọ̀ọ̀kan.",
            "Kọ ìbẹ̀wò kọ̀ọ̀kan sílẹ̀. Àkọsílẹ̀ tó rọrùn ní ọjọ́, oko, ìpele ìdàgbà irè, iye ọ̀gbìn tí o ṣàyẹ̀wò, iye tí kòkòrò ti wọ̀, ìdá-ọgọ́rùn-ún, àwọn ọ̀tá àdánidá tí o rí, ìpele ìgbésẹ̀, ìpinnu rẹ àti ohun tí o ṣe. Lẹ́yìn àsìkò díẹ̀, àkọsílẹ̀ rẹ máa fi hàn ìgbà tí kòkòrò ń dé oko rẹ, àwọn ọ̀nà ìṣàkóso tí ó ṣiṣẹ́ àti iye tí wọ́n ná. Ìwé àkọsílẹ̀ lè ṣiṣẹ́; spreadsheet lórí fóònù tàbí app oko náà lè ṣiṣẹ́."
          ],
          steps: ["Béèrè ìpele ìgbésẹ̀ fún kòkòrò pàtàkì kọ̀ọ̀kan àti ìpele ìdàgbà irè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn.", "Lẹ́yìn yíyẹ oko wò, ka àwọn ọ̀gbìn tí o ṣàyẹ̀wò àti àwọn tí kòkòrò ti wọ̀.", "Ṣírò ìdá-ọgọ́rùn-ún: èyí tí kòkòrò wọ̀ / èyí tí o ṣàyẹ̀wò x 100.", "Fi wé ìpele ìgbésẹ̀: ní ìsàlẹ̀ = máa ṣọ́ ọ; dé tàbí kọjá = gbé ìgbésẹ̀.", "Kọ ọjọ́, àwọn nọ́mbà, àwọn ọ̀tá àdánidá, ìpinnu àti ìgbésẹ̀ sínú àkọsílẹ̀ rẹ."],
          words: [["Ìpele ìgbésẹ̀ (action threshold)", "iye kòkòrò tàbí ìbàjẹ́ tí ìṣàkóso fi tọ́ sí owó tí a máa ná."], ["Tí kòkòrò ti wọ̀ (infested)", "tí ó ní kòkòrò tàbí ìbàjẹ́ tuntun láti ọwọ́ kòkòrò."], ["Ìpele ìdàgbà irè (crop stage)", "bí irè ti dàgbà tó, fún àpẹẹrẹ ọmọ ọ̀gbìn, ó ga dé orúnkún, ó yọ irun orí (tassel), ó ń yọ òdòdó, ó ń so èso."]],
          slides: [
            { title: "Rírí kòkòrò kì í ṣe ìdí láti fín oògùn", bullets: ["Ìpele ìgbésẹ̀: ibi tí ìgbésẹ̀ ti máa mú èrè wá", "Ní ìsàlẹ̀ rẹ̀, àwọn ọ̀tá àdánidá sábà máa ń kojú wọn", "Gba ìpele ìgbésẹ̀ lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn, ní ìpele ìdàgbà kọ̀ọ̀kan"] },
            { title: "Ṣírò ìdá-ọgọ́rùn-ún", bullets: ["Ọ̀gbìn tí kòkòrò wọ̀ / ọ̀gbìn tí o ṣàyẹ̀wò x 100", "Àpẹẹrẹ: 9 / 50 x 100 = 18%", "Ìpele ìgbésẹ̀ 20%: máa ṣọ́ ọ, tún yẹ ẹ́ wò láìpẹ́"] },
            { title: "Kọ gbogbo ìbẹ̀wò sílẹ̀", bullets: ["Ọjọ́, oko, ìpele ìdàgbà irè", "Iye tí o ṣàyẹ̀wò, iye tí kòkòrò wọ̀, %, ọ̀tá àdánidá", "Ìpele ìgbésẹ̀, ìpinnu, ìgbésẹ̀, iye owó"] }
          ],
          sources: [FAO_IPM, CIMMYT_FAW],
          tryIt: "Lo iye tí o kà nígbà yíyẹ oko wò ní ẹ̀kọ́ tó kọjá. Ṣírò ìdá-ọgọ́rùn-ún àwọn ọ̀gbìn tí kòkòrò ti wọ̀, béèrè ìpele ìgbésẹ̀ fún ìpele ìdàgbà irè rẹ lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀, kí o sì kọ ìlà àkọ́kọ́ àkọsílẹ̀ rẹ pẹ̀lú ìpinnu rẹ.",
          youCanNow: "yí iye tí o kà nígbà yíyẹ oko wò padà sí ìdá-ọgọ́rùn-ún, fi wé ìpele ìgbésẹ̀, kí o sì kọ ìpinnu rẹ sílẹ̀.",
          quickCheck: [
            { objective: "O3", q: "O ṣàyẹ̀wò ọ̀gbìn 50, 15 sì ní ìbàjẹ́ tuntun. Kí ni ìdá-ọgọ́rùn-ún tí kòkòrò ti wọ̀?", options: ["15%", "30%", "50%", "35%"], answer: 1, why: "15 / 50 x 100 = 30%." },
            { objective: "O3", q: "Iye tí o kà jẹ́ 12%, ìpele ìgbésẹ̀ láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn fún ìpele yìí sì jẹ́ 20%. Kí ni o máa ṣe?", options: ["Fín oògùn lónìí kí ó lè dájú", "Fa irè náà tu", "Ṣe ìwọ̀n oògùn ní ìlọ́po méjì", "Máa ṣọ́ ọ, tún yẹ ẹ́ wò láìpẹ́, kí o sì kọ ọ́ sílẹ̀"], answer: 3, why: "Ní ìsàlẹ̀ ìpele ìgbésẹ̀, ìṣàkóso kò tíì mú èrè wá; o máa ń yẹ oko wò, o sì máa ń kọ ọ́ sílẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Dídá kòkòrò dúró ní kùtùkùtù",
        questions: [
          { objective: "O1", q: "Èwo ni ìgbésẹ̀ ìdènà nínú IPM?", options: ["Fífín oògùn nígbà tí o bá rí ìdin kan", "Gbígbin irúgbìn tí a fọwọ́sí ti oríṣi tó bá a mu lásìkò", "Dída oògùn apakòkòrò méjì pọ̀", "Dídáná sun irè aládùúgbò"], answer: 1, why: "Irúgbìn rere àti gbígbìn lásìkò kì í jẹ́ kí kòkòrò pọ̀ sí i kí wọ́n tó bẹ̀rẹ̀." },
          { objective: "O2", q: "Àbààwọ́n funfun pẹ̀lú ìgbẹ́ dúdú nínú ewé tòmátì, àti ihò kéékèèké nínú èso, ń tọ́ka sí:", options: ["Tuta absoluta (kòkòrò tó ń wa ihò nínú ewé tòmátì)", "Fall armyworm", "Ajílẹ̀ tí ó pọ̀ jù", "Àìtó omi"], answer: 0, why: "Ihò inú ewé àti ihò inú èso ni àmì Tuta absoluta." },
          { objective: "O2", q: "Nígbà tí o ń yẹ oko wò, o rí ladybird àti ìdin kan tí olú funfun bò. O yẹ kí o:", options: ["Fín oògùn láti pa àwọn náà", "Fi wọ́n sílẹ̀; wọn kò ṣe pàtàkì", "Kọ wọ́n sílẹ̀ gẹ́gẹ́ bí ọ̀tá àdánidá tí ó ń ṣiṣẹ́", "Dáná sun ọ̀gbìn náà"], answer: 2, why: "Àwọn ọ̀tá àdánidá ń dín kòkòrò kù, nítorí náà o máa kọ wọ́n sílẹ̀, o sì máa dáàbò bò wọ́n." },
          { objective: "O3", q: "Kí ni ìpele ìgbésẹ̀ (action threshold)?", options: ["Ọjọ́ tí o gbìn", "Iye owó oògùn apakòkòrò", "Iye òṣìṣẹ́ tí o nílò", "Iye kòkòrò tí ìṣàkóso fi tọ́ sí owó tí a máa ná"], answer: 3, why: "Ní ìsàlẹ̀ ìpele ìgbésẹ̀, ìṣàkóso máa ná owó ju ohun tí ó máa gbà là." },
          { objective: "O3", q: "Kí ló dé tí a fi ń kọ ìbẹ̀wò yíyẹ oko wò kọ̀ọ̀kan sílẹ̀?", options: ["Láti rí ìgbà tí kòkòrò ń dé, ohun tí ó ṣiṣẹ́ àti iye tí ó ná", "Nítorí olùtajà ohun ọ̀gbìn ń béèrè rẹ̀", "Láti jẹ́ kí oko dà bí ẹni pé ó mọ́", "Kò wúlò"], answer: 0, why: "Àkọsílẹ̀ ń sọ àsìkò kọ̀ọ̀kan di ẹ̀kọ́ fún èyí tó ń bọ̀." }
        ]
      }
    },
    {
      name: "Orí 2: Ìṣàkóso kòkòrò pẹ̀lú májèlé díẹ̀",
      lessons: [
        {
          title: "Push-pull àti àwọn ọ̀tá àdánidá",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣètò ilẹ̀ push-pull kan kí o sì dáàbò bo àwọn ọ̀tá àdánidá lórí oko rẹ.",
          text: [
            "icipe àti àwọn alábàáṣiṣẹ́ rẹ̀ ló ṣe push-pull fún àgbàdo àti ọkà bàbà ní Ìlà-Oòrùn Áfíríkà. O máa gbin desmodium sáàárín àwọn ìlà àgbàdo. Desmodium ń tú òórùn jáde tí ó ń lé labalábá òru stemborer (kòkòrò tó ń wọ inú igi àgbàdo) kúrò lọ́dọ̀ irè. Yí ilẹ̀ náà ká, o máa gbin koríko oúnjẹ ẹran (brachiaria nínú ẹ̀dà climate-smart fún agbègbè gbígbẹ, napier grass nínú ẹ̀dà àkọ́kọ́), èyí tí ó ń fa àwọn labalábá òru mọ́ra, tí ó sì ń dẹkùn mú wọn. Desmodium tún ń dín èpò striga kù, ó ń fi náítrójìn kún ilẹ̀, àwọn ọ̀gbìn méjèèjì sì jẹ́ oúnjẹ tó dára fún màlúù.",
            "Àwọn ìwádìí icipe ní Kenya, Uganda àti Tanzania rí ìbàjẹ́ fall armyworm tí ó kéré gan-an nínú oko climate-smart push-pull ju nínú àgbàdo tí a gbìn nìkan, àti ìkórè ọkà tí ó pọ̀ jù. Push-pull ń gba iṣẹ́ láti ṣètò, o sì nílò irúgbìn tàbí igi desmodium àti ẹ̀ka koríko, nítorí náà bẹ̀rẹ̀ pẹ̀lú ilẹ̀ kékeré, béèrè ètò rẹ̀ lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí àgbẹ̀ tí icipe ti kọ́, kí o sì tẹ̀lé ìwé ìtọ́sọ́nà àgbẹ̀ ti icipe.",
            "Àwọn ọ̀tá àdánidá jẹ́ òṣìṣẹ́ ọ̀fẹ́. Èèrà, earwig, aláǹtakùn, ladybird àti lacewing ń jẹ ẹyin àti ìdin ọ̀dọ́; agbọ́n kéékèèké ń gbé ẹyin wọn sínú kòkòrò; olú (fungus) àti kòkòrò àìfojúrí (virus) ń pa ìdin. FAO sọ pé àwọn wọ̀nyí ti ń pa ìpín ńlá fall armyworm nínú oko ní Áfíríkà. icipe ti tú agbọ́n kékeré kan láti South America sílẹ̀ ní Kenya tí ó ń kọlu Tuta absoluta nìkan. Láti dáàbò bò wọ́n: fín oògùn kìkì nígbà tí ìpele ìgbésẹ̀ bá sọ bẹ́ẹ̀, yan ọjà tí ó ń pa kòkòrò kan pàtó nìkan (selective), fi ewéko olódòdó àti ọgbà igi sílẹ̀ yí oko ká, kí o sì fi ìbòrí ilẹ̀ díẹ̀ sílẹ̀."
          ],
          steps: ["Sàmì sí ilẹ̀ push-pull kékeré kan (béèrè ètò rẹ̀ lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn tàbí nínú ìwé ìtọ́sọ́nà icipe).", "Kọ́kọ́ gbin koríko ẹ̀gbẹ́ (brachiaria tàbí napier) yí ilẹ̀ náà ká.", "Gbin desmodium sáàárín àwọn ìlà àgbàdo tàbí ọkà bàbà.", "Gé koríko àti desmodium fún oúnjẹ ẹran, kí o sì fi àwọn ọ̀gbìn náà sílẹ̀ kí wọ́n tún hù.", "Dáàbò bo àwọn ọ̀tá àdánidá: má ṣe fín oògùn láìnídìí, fi òdòdó àti ìbòrí ilẹ̀ sílẹ̀."],
          words: [["Push-pull", "ọ̀nà icipe kan níbi tí irè àdàlù (desmodium) ti ń lé kòkòrò lọ (push), tí koríko ẹ̀gbẹ́ sì ń fà wọ́n jáde kúrò nínú irè (pull)."], ["Desmodium", "ọ̀gbìn ẹlẹ́wà tí ó ń hù mọ́lẹ̀, tí a ń gbìn sáàárín ìlà ọkà; ó ń lé labalábá òru stemborer, ó ń dín striga kù, ó sì ń fi náítrójìn kún ilẹ̀."], ["Striga", "èpò alápadé tí ó ní òdòdó pupa rúsúrúsú tàbí aláwọ̀ àlùkò, tí ó ń lẹ̀ mọ́ gbòǹgbò àgbàdo àti ọkà bàbà, tí ó sì ń jí oúnjẹ wọn."], ["Agbọ́n alápadé (parasitic wasp)", "agbọ́n kékeré tí ó ń gbé ẹyin rẹ̀ sínú tàbí sórí kòkòrò àjẹnirun, àwọn ọmọ rẹ̀ sì ń pa kòkòrò náà."]],
          slides: [
            { title: "Push-pull (icipe)", bullets: ["Desmodium láàárín ìlà ń lé labalábá òru lọ", "Koríko ẹ̀gbẹ́ (brachiaria tàbí napier) ń fà wọ́n jáde", "Fún àgbàdo àti ọkà bàbà"] },
            { title: "Àwọn àǹfààní míì", bullets: ["Desmodium ń dín striga kù, ó sì ń fi náítrójìn kún ilẹ̀", "Àwọn ọ̀gbìn méjèèjì ń bọ́ màlúù", "Ìdánwò icipe: ìbàjẹ́ fall armyworm kéré gan-an"] },
            { title: "Àwọn òṣìṣẹ́ ọ̀fẹ́ rẹ", bullets: ["Èèrà, earwig, aláǹtakùn, ladybird, lacewing", "Agbọ́n alápadé; olú àti kòkòrò àìfojúrí (virus)", "Agbọ́n kan tí a tú sílẹ̀ ní Kenya ń kọlu Tuta absoluta nìkan"] },
            { title: "Dáàbò bo àwọn ọ̀tá àdánidá", bullets: ["Fín oògùn kìkì nígbà tí ó bá kọjá ìpele ìgbésẹ̀", "Yan ọjà tí ó ń pa kòkòrò kan pàtó nìkan", "Fi òdòdó, ọgbà igi àti ìbòrí ilẹ̀ sílẹ̀"] }
          ],
          sources: [ICIPE_PP_FAW, ICIPE_PP_HOW, ICIPE_PP_GUIDE, ICIPE_TUTA],
          tryIt: "Ya àwòrán ilẹ̀ push-pull kékeré kan fún àgbàdo tàbí ọkà bàbà rẹ, pẹ̀lú koríko ẹ̀gbẹ́, àwọn ìlà desmodium àti àwọn ìlà irè. Lẹ́yìn náà kọ nǹkan méjì tí o máa yí padà lórí oko rẹ láti dáàbò bo àwọn ọ̀tá àdánidá.",
          youCanNow: "ṣàlàyé bí push-pull ṣe ń ṣiṣẹ́, ya àwòrán ilẹ̀ push-pull, kí o sì dárúkọ àwọn ọ̀nà láti dáàbò bo àwọn ọ̀tá àdánidá.",
          quickCheck: [
            { objective: "O4", q: "Nínú push-pull, kí ni desmodium tí ó wà láàárín ìlà àgbàdo ń ṣe?", options: ["Ó ń fa kòkòrò wọ inú àgbàdo", "Ó ń lé labalábá òru stemborer lọ, ó sì ń dín striga kù", "Ó ń ṣíji bo àgbàdo kí ó lè ga sí i", "Ó ń pa ladybird"], answer: 1, why: "Òórùn desmodium ń lé labalábá òru lọ, ó sì ń dín striga kù; koríko ẹ̀gbẹ́ ló ń ṣe fífà." },
            { objective: "O4", q: "Àṣà wo ló ń dáàbò bo àwọn ọ̀tá àdánidá jù?", options: ["Fífín oògùn tí ó ń pa gbogbo kòkòrò ní gbogbo ọ̀sẹ̀", "Gígé gbogbo òdòdó àti ọgbà igi tí ó yí oko ká", "Dídáná sun ìyókù irè àti gbogbo ìbòrí ilẹ̀", "Fífín oògùn kìkì nígbà tí ó bá kọjá ìpele ìgbésẹ̀ àti fífi ewéko olódòdó sílẹ̀ ní ẹ̀gbẹ́ oko"], answer: 3, why: "Fífín oògùn díẹ̀ àti ewéko olódòdó ń jẹ́ kí àwọn ọ̀tá àdánidá wà láàyè, kí wọ́n sì rí oúnjẹ." }
          ]
        },
        {
          title: "Ìdẹkùn, ọjà láti ara ewéko àti ọjà alààyè",
          objectives: ["O4"],
          minutes: 5,
          goal: "Yan ìdẹkùn àti ọjà láti ara ewéko tàbí ọjà alààyè tí a fọwọ́sí fún ìṣòro kòkòrò kan, kí o sì ṣètò wọn.",
          text: [
            "Ìdẹkùn ń ràn ọ́ lọ́wọ́ láti ṣọ́ kòkòrò kí o sì dín iye wọn kù. Ìdẹkùn pheromone ń lo òórùn labalábá òru abo láti mú àwọn akọ: icipe ń lo ìdẹkùn púpọ̀ gẹ́gẹ́ bí apá kan IPM rẹ̀ fún Tuta absoluta, ìdẹkùn pheromone fún fall armyworm sì ń sọ fún ọ ìgbà tí labalábá òru dé kí o lè túbọ̀ yẹ oko wò. Káàdì aláwọ̀ ìyeyè tí ó lẹ̀ (yellow sticky card) ń mú whiteflies, aphids àti labalábá òru leafminer tí ó ti dàgbà; àwọn aláwọ̀ búlúù ń mú thrips. Pààrọ̀ ìdẹ (lure) àti káàdì bí olùtajà ti sọ, kí o sì ka ohun tí ó mú ní gbogbo ọ̀sẹ̀ sínú àkọsílẹ̀ rẹ.",
            "Fífi ọwọ́ ṣa kòkòrò ń ṣiṣẹ́ lórí ilẹ̀ kékeré: tẹ ìdì ẹyin fall armyworm àti ìdin ọ̀dọ́ fọ́, kí o sì ká ewé tí Tuta ti wa ihò sí àti èso tí ó ti bàjẹ́ kúrò kí o sì pa wọ́n run (sin wọ́n jìn tàbí dì wọ́n sínú àpò kí o sì gbé e sínú oòrùn, má ṣe fi wọ́n sílẹ̀ lórí ilẹ̀ láéláé).",
            "Ọjà alààyè (biological) ń lo ẹ̀dá alààyè tàbí ohun àdánidá tí wọ́n ń ṣe láti bá kòkòrò jà: fún àpẹẹrẹ ọjà tí a ṣe láti ara bakitéríà Bt (Bacillus thuringiensis), láti ara olú tí ó ń kó àrùn bá kòkòrò, tàbí láti ara kòkòrò àìfojúrí (virus) tí ó ń pa kòkòrò. icipe ń ṣe oògùn apakòkòrò alààyè tí a ṣe láti ara olú. Wọn kì í sábà pa àwọn ọ̀tá àdánidá lára, ṣùgbọ́n wọ́n ń ṣiṣẹ́ díẹ̀díẹ̀, wọ́n gbọ́dọ̀ bá ìdin ọ̀dọ́, a sì gbọ́dọ̀ tọ́jú wọn bí àmì-ìtọ́sọ́nà ti sọ. Ní ọ̀pọ̀ orílẹ̀-èdè, a gbọ́dọ̀ forúkọ wọn sílẹ̀ bí oògùn apakòkòrò èyíkéyìí, nítorí náà ṣàyẹ̀wò àkọsílẹ̀ àjọ alábòójútó.",
            "Àwọn ọjà láti ara ewéko (botanical) wá láti inú ọ̀gbìn, bí neem (dóńgóyárò). Ọjà neem tí a forúkọ rẹ̀ sílẹ̀ ní àmì-ìtọ́sọ́nà tí o lè tẹ̀lé. Ọ̀pọ̀ ènìyàn ń lo omi ewéko tí a ṣe nílé, ṣùgbọ́n agbára wọn yàtọ̀ síra, wọ́n sì ṣì lè pa àwọn ọ̀tá àdánidá lára, kí wọ́n sì ṣe ìpalára fún awọ ara àti ojú, nítorí náà béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ bí wọ́n ṣe ń lò wọ́n ní agbègbè rẹ, wọ ìbọ̀wọ́, kí o sì kọ́kọ́ dán an wò lórí ọ̀gbìn díẹ̀."
          ],
          steps: ["Bá irinṣẹ́ mu kòkòrò: ìdẹkùn pheromone fún labalábá òru, káàdì ìyeyè fún whiteflies àti aphids, búlúù fún thrips.", "So ìdẹkùn kọ́ ní gíga irè, kí o sì ka ohun tí ó mú ní ọ̀sẹ̀ọ̀sẹ̀.", "Fi ọwọ́ ṣa ìdì ẹyin, ìdin ọ̀dọ́ àti ewé tí ó ní ihò kúrò, kí o sì pa wọ́n run.", "Tí ó bá nílò jù bẹ́ẹ̀ lọ, yan ọjà alààyè tàbí ọjà láti ara ewéko tí a forúkọ rẹ̀ sílẹ̀.", "Lò ó fún ìdin ọ̀dọ́ bí àmì-ìtọ́sọ́nà rẹ̀ ti sọ, kí o sì kọ ọ́ sílẹ̀."],
          words: [["Ìdẹkùn pheromone", "ìdẹkùn tí a fi òórùn ìbálòpọ̀ kòkòrò dẹ; ó ń mú àwọn akọ, ó sì ń fi hàn ìgbà tí kòkòrò dé."], ["Oògùn apakòkòrò alààyè (biopesticide)", "ọjà ìṣàkóso kòkòrò tí a ṣe láti ara ẹ̀dá alààyè bí bakitéríà, olú tàbí kòkòrò àìfojúrí (virus), tàbí ohun àdánidá tí wọ́n ń ṣe."], ["Bt", "Bacillus thuringiensis, bakitéríà inú ilẹ̀ tí a ń lò nínú oògùn apakòkòrò alààyè; ó ń pa àwọn ìdin kan nígbà tí wọ́n bá jẹ ẹ́."], ["Ọjà láti ara ewéko (botanical)", "ọjà ìṣàkóso kòkòrò tí a ṣe láti ara ọ̀gbìn, bí neem (dóńgóyárò)."]],
          slides: [
            { title: "Ìdẹkùn láti ṣọ́ àti dín kòkòrò kù", bullets: ["Ìdẹkùn pheromone ń mú labalábá òru akọ", "Káàdì ìyeyè: whiteflies, aphids; búlúù: thrips", "Ka ohun tí ó mú lọ́sẹ̀ọ̀sẹ̀; pààrọ̀ ìdẹ lásìkò"] },
            { title: "Fífi ọwọ́ ṣa ń ṣiṣẹ́", bullets: ["Tẹ ìdì ẹyin àti ìdin ọ̀dọ́ fọ́", "Yọ ewé tí Tuta wa ihò sí àti èso tí ó bàjẹ́ kúrò", "Sin wọ́n jìn tàbí dì wọ́n sínú àpò, má fi wọ́n sílẹ̀ lórí ilẹ̀"] },
            { title: "Ọjà alààyè", bullets: ["Bt, olú tí ó ń pa kòkòrò, kòkòrò àìfojúrí (virus)", "Kì í pa ọ̀tá àdánidá lára, ṣùgbọ́n ó ń ṣiṣẹ́ díẹ̀díẹ̀", "Lò ó fún ìdin ọ̀dọ́; ṣàyẹ̀wò ìforúkọsílẹ̀ rẹ̀"] },
            { title: "Ọjà láti ara ewéko bí neem", bullets: ["Ọjà tí a forúkọ rẹ̀ sílẹ̀ ní àmì-ìtọ́sọ́nà: tẹ̀lé e", "Agbára omi ewéko tí a ṣe nílé yàtọ̀ síra", "Béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn, wọ ìbọ̀wọ́, dán an wò lórí ọ̀gbìn díẹ̀"] }
          ],
          sources: [ICIPE_TUTA, CIMMYT_FAW, PCPB, NAFDAC],
          tryIt: "Fún kòkòrò tí ó burú jù lórí irè rẹ, kọ ìdẹkùn tí o máa lò àti ibi tí o máa so ó kọ́, ohun tí o máa fi ọwọ́ ṣa, àti ọjà alààyè tàbí ọjà láti ara ewéko kan. Lẹ́yìn náà ṣàyẹ̀wò bóyá ọjà náà wà lórí àkọsílẹ̀ ọjà tí a forúkọ sílẹ̀ ní orílẹ̀-èdè rẹ, tàbí ní kí olùtajà ohun ọ̀gbìn rẹ fi ìwé ìforúkọsílẹ̀ rẹ̀ hàn ọ́.",
          youCanNow: "yan ìdẹkùn, fífi ọwọ́ ṣa àti ọjà alààyè tàbí ọjà láti ara ewéko tí a fọwọ́sí fún kòkòrò kan, kí o sì ṣètò wọn.",
          quickCheck: [
            { objective: "O4", q: "O ń gbin tòmátì, o sì fẹ́ mọ ìgbà tí labalábá òru Tuta absoluta dé. Kí ni o máa ṣètò?", options: ["Ìdẹkùn pheromone fún Tuta absoluta", "Káàdì búlúù tí ó lẹ̀", "Bọ́ọ̀kẹ́ẹ̀tì omi nínú ilé ìkẹ́rùsí", "Ère ìdẹ́rùbà ẹyẹ"], answer: 0, why: "Ìdẹkùn pheromone tí a dẹ fún Tuta ń mú labalábá òru akọ, ó sì ń fi hàn ìgbà tí wọ́n dé." },
            { objective: "O4", q: "Oògùn apakòkòrò alààyè tí a ṣe láti ara Bt ń ṣiṣẹ́ jù nígbà tí o bá:", options: ["Fín in sí ìdin ńlá, àgbà ní ọ̀sán gangan", "Pò ó pọ̀ mọ́ kẹ́míkà míì èyíkéyìí", "Lò ó fún ìdin ọ̀dọ́ bí àmì-ìtọ́sọ́nà rẹ̀ ti sọ", "Tọ́jú rẹ̀ sínú oòrùn"], answer: 2, why: "Ọjà alààyè ń ṣiṣẹ́ díẹ̀díẹ̀, ó sì ń ṣiṣẹ́ jù lórí ìdin ọ̀dọ́, tí a bá lò ó bí àmì-ìtọ́sọ́nà ti sọ." }
          ]
        },
        {
          title: "Oògùn apakòkòrò gẹ́gẹ́ bí ìgbésẹ̀ ìkẹyìn, àti dídín ìfaradà oògùn kù",
          objectives: ["O5", "O6"],
          minutes: 6,
          goal: "Ṣàyẹ̀wò ìforúkọsílẹ̀ oògùn apakòkòrò, tẹ̀lé àmì-ìtọ́sọ́nà rẹ̀ pẹ̀lú aṣọ ààbò, kí o sì ṣètò yíyí ẹgbẹ́ oògùn padà láti dín ìfaradà oògùn kù.",
          text: [
            "Lo oògùn apakòkòrò kẹ́míkà kìkì nígbà tí iye tí o kà bá kọjá ìpele ìgbésẹ̀, tí àwọn ọ̀nà ìṣàkóso míì kò sì tó. Kọ́kọ́ ṣàyẹ̀wò pé a ti forúkọ ọjà náà sílẹ̀ fún irè àti kòkòrò rẹ ní orílẹ̀-èdè rẹ: Pest Control Products Board (PCPB) ní Kenya, NAFDAC ní Nàìjíríà, Environmental Protection Authority (EPA) ní Ghana, àti Sahelian Pesticides Committee (CSP) fún àwọn orílẹ̀-èdè CILSS bí Senegal àti Burkina Faso. Ọ̀kọ̀ọ̀kan ní àkọsílẹ̀ àwọn ọjà tí a forúkọ wọn sílẹ̀; ṣàyẹ̀wò rẹ̀, kí o sì ra ike tí a dì pa, tí ó ní àmì-ìtọ́sọ́nà, láti ọ̀dọ̀ olùtajà ohun ọ̀gbìn tí ó ní ìwé àṣẹ nìkan. Ọjà ayédèrú àti èyí tí a kò forúkọ rẹ̀ sílẹ̀ wọ́pọ̀.",
            "Àmì-ìtọ́sọ́nà (label) ni òfin. Kà á tán kí o tó ṣí ike náà: àwọn irè àti kòkòrò tí ó wà fún, ìwọ̀n lílò, bí a ṣe ń pò ó, ìgbà tí a ó fín in, aṣọ ààbò, bí ó ti pẹ́ tó tí a ó dúró kí a tó kórè (àkókò ìdúró ṣáájú ìkórè) àti kí ènìyàn tó padà wọ inú oko, àti ìrànlọ́wọ́ àkọ́kọ́. Wọ ohun tí àmì-ìtọ́sọ́nà kọ sílẹ̀, tí ó sábà máa ń jẹ́ ìbọ̀wọ́, bàtà orúnkún, aṣọ ọwọ́ gígùn àti ṣòkòtò, ààbò ojú àti ìbòmú tàbí ẹ̀rọ ìmí (respirator). Fín oògùn nígbà tí afẹ́fẹ́ bá dákẹ́, tí ojú ọjọ́ sì tutù, má ṣe fín in sí ọ̀nà ènìyàn, ẹranko tàbí omi láéláé. Má ṣe jẹun, mu nǹkan tàbí mu sìgá nígbà tí o ń fín oògùn, wẹ̀ lẹ́yìn náà, kí o sì tì àwọn ọjà náà pa mọ́ ibi tí ọmọdé àti oúnjẹ kò lè dé. Má ṣe da oògùn apakòkòrò sínú ìgò ohun mímu tàbí ìgò oúnjẹ láéláé.",
            "Kòkòrò máa ń fara da oògùn (resistance) nígbà tí a bá ń lo irú kẹ́míkà kan náà léraléra: àwọn díẹ̀ tí ó yè ń bí ọmọ. Fall armyworm àti Tuta absoluta ni a mọ̀ fún èyí. Àmì-ìtọ́sọ́nà sábà máa ń fi nọ́mbà ẹgbẹ́ tàbí èròjà tí ó ń ṣiṣẹ́ (active ingredient) hàn. Yí ẹgbẹ́ padà, má ṣe lo ẹgbẹ́ kan náà lẹ́ẹ̀mejì ní ìtẹ̀léra lórí ìran kòkòrò kan náà, má ṣe lo ìwọ̀n tí ó kéré jù tàbí pò ọjà pọ̀ fúnra rẹ láéláé, kí o sì kọ àkọsílẹ̀ fífín oògùn pẹ̀lú ọjọ́, ọjà, ẹgbẹ́, ìwọ̀n, oko àti ọjọ́ tí ó tọ́ láti kórè. Ní Kenya, àgbẹ̀ tòmátì tí ó ń fín ọjà kan náà ní ọjọ́ díẹ̀ díẹ̀ sábà máa ń rí i pé ó dáwọ́ iṣẹ́ dúró; ẹni tí ó ń yẹ oko wò, tí ó ń lo ìdẹkùn, tí ó sì ń yí ẹgbẹ́ padà ń jẹ́ kí àwọn oògùn díẹ̀ tí ó ń fín máa ṣiṣẹ́."
          ],
          steps: ["Rí i dájú pé iye tí o kà ti kọjá ìpele ìgbésẹ̀, àti pé àwọn ọ̀nà ìṣàkóso míì kò tó.", "Ṣàyẹ̀wò pé a ti forúkọ ọjà náà sílẹ̀ fún irè àti kòkòrò rẹ (PCPB, NAFDAC, EPA Ghana, CSP).", "Ra ike tí a dì pa, tí ó ní àmì-ìtọ́sọ́nà, láti ọ̀dọ̀ olùtajà ohun ọ̀gbìn tí ó ní ìwé àṣẹ.", "Ka gbogbo àmì-ìtọ́sọ́nà; wọ gbogbo aṣọ ààbò tí ó kọ sílẹ̀.", "Fín oògùn nígbà tí afẹ́fẹ́ dákẹ́, tí ojú ọjọ́ tutù, ní ìwọ̀n tí àmì-ìtọ́sọ́nà sọ; wẹ̀, kí o sì tọ́jú rẹ̀ láìléwu.", "Kọ ọjà, ẹgbẹ́, ìwọ̀n àti ọjọ́ tí ó tọ́ láti kórè sílẹ̀; yí ẹgbẹ́ padà nígbà míì."],
          words: [["Oògùn apakòkòrò tí a forúkọ rẹ̀ sílẹ̀", "ọjà tí àjọ alábòójútó orílẹ̀-èdè ti fọwọ́sí fún àwọn irè àti kòkòrò tí ó dárúkọ."], ["Àmì-ìtọ́sọ́nà (label)", "ìtọ́sọ́nà tí ó wà lára ike oògùn; títẹ̀lé e jẹ́ òfin."], ["PPE (aṣọ ààbò)", "ohun èlò ààbò ara ẹni: ìbọ̀wọ́, bàtà orúnkún, aṣọ gígùn, ààbò ojú àti ìbòmú tàbí ẹ̀rọ ìmí (respirator)."], ["Àkókò ìdúró ṣáájú ìkórè (pre-harvest interval)", "àkókò tí o gbọ́dọ̀ dúró lẹ́yìn fífín oògùn kí o tó kórè; ó wà lára àmì-ìtọ́sọ́nà."], ["Ìfaradà oògùn (resistance)", "nígbà tí ọjà tí ó ti ń pa kòkòrò kan tẹ́lẹ̀ kò bá pa á mọ́."], ["Ẹgbẹ́ ọ̀nà-ìpani (mode-of-action group)", "nọ́mbà tàbí orúkọ tí ó fi bí oògùn apakòkòrò ṣe ń pa kòkòrò hàn; yí ẹgbẹ́ padà láti dín ìfaradà oògùn kù."]],
          slides: [
            { title: "Oògùn apakòkòrò: ìgbésẹ̀ ìkẹyìn", bullets: ["Kìkì nígbà tí ó bá kọjá ìpele ìgbésẹ̀", "Kìkì nígbà tí àwọn ọ̀nà míì kò bá tó", "Kìkì èyí tí a forúkọ rẹ̀ sílẹ̀ fún irè àti kòkòrò rẹ"] },
            { title: "Ṣàyẹ̀wò ìforúkọsílẹ̀", bullets: ["Kenya: PCPB; Nàìjíríà: NAFDAC", "Ghana: EPA; Senegal, Burkina Faso: CSP (CILSS)", "Ike tí a dì pa, tí ó ní àmì-ìtọ́sọ́nà, olùtajà tí ó ní ìwé àṣẹ"] },
            { title: "Àmì-ìtọ́sọ́nà ni òfin", bullets: ["Irè, kòkòrò, ìwọ̀n lílò, àkókò", "PPE: ìbọ̀wọ́, bàtà orúnkún, aṣọ ọwọ́ gígùn, ojú, ìbòmú", "Àkókò ìdúró ṣáájú ìkórè àti àkókò kí a tó padà wọ oko"] },
            { title: "Dín ìfaradà oògùn kù", bullets: ["Yí ẹgbẹ́ ọ̀nà-ìpani padà", "Má lo ìwọ̀n tí ó kéré jù, má pò ọjà fúnra rẹ", "Kọ àkọsílẹ̀ fífín oògùn"] }
          ],
          sources: [PCPB, NAFDAC, GHANA_EPA, CILSS_CSP, FAO_IPM],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò IPM rẹ fún àsìkò kan fún irè oko kan lórí oko rẹ: àwọn kòkòrò pàtàkì, ó kéré tán ìgbésẹ̀ ìdènà mẹ́ta, ètò yíyẹ oko wò ọ̀sẹ̀ọ̀sẹ̀ àti ìwé àkọsílẹ̀ rẹ, ìpele ìgbésẹ̀ tí o gbà lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn, àwọn ọ̀nà tí kì í ṣe kẹ́míkà tí o máa kọ́kọ́ lò, àti ètò oògùn apakòkòrò fún ìgbésẹ̀ ìkẹyìn (ọjà tí o ti ṣàyẹ̀wò lórí àkọsílẹ̀ àjọ alábòójútó rẹ, àwọn òfin àmì-ìtọ́sọ́nà, PPE rẹ, àti bí o ṣe máa yí ẹgbẹ́ padà).",
          youCanNow: "ṣàyẹ̀wò pé a ti forúkọ oògùn apakòkòrò sílẹ̀, tẹ̀lé àmì-ìtọ́sọ́nà rẹ̀ pẹ̀lú aṣọ ààbò tó tọ́, kí o sì yí ẹgbẹ́ padà kí o sì kọ àkọsílẹ̀ láti dín ìfaradà oògùn kù.",
          quickCheck: [
            { objective: "O5", q: "Olùtajà ohun ọ̀gbìn kan fẹ́ tà ìgò oògùn apakòkòrò tí kò ní àmì-ìtọ́sọ́nà fún ọ ní owó pọ́ọ́kú. Kí ni o máa ṣe?", options: ["Rà á; ó dínwó jù", "Pò ó mọ́ omi kí o sì dán an wò", "Kọ̀ ọ́ kí o sì ra ọjà tí a dì pa, tí ó ní àmì-ìtọ́sọ́nà, tí a forúkọ rẹ̀ sílẹ̀", "Lo ìdajì ìgò náà"], answer: 2, why: "Láìsí àmì-ìtọ́sọ́nà, o kò lè mọ ohun tí ó jẹ́, bí a ṣe ń lò ó láìléwu, tàbí bóyá a ti forúkọ rẹ̀ sílẹ̀." },
            { objective: "O6", q: "O fín ọjà láti ẹgbẹ́ A ní ìgbà tó kọjá. Kòkòrò náà ṣì kọjá ìpele ìgbésẹ̀. Kí ló dára jù?", options: ["Fín ẹgbẹ́ A lẹ́ẹ̀kan sí i ní ìlọ́po méjì ìwọ̀n", "Fín ọjà tí a forúkọ rẹ̀ sílẹ̀ láti ẹgbẹ́ míì", "Pò ẹgbẹ́ A mọ́ ọjà míì fúnra rẹ", "Fín ẹgbẹ́ A lójoojúmọ́"], answer: 1, why: "Yíyí padà sí ẹgbẹ́ míì ń dín ìfaradà oògùn kù; ìlọ́po méjì ìwọ̀n àti pípò ọjà nílé kò ní ààbò, wọ́n sì lòdì sí òfin." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìṣàkóso kòkòrò pẹ̀lú májèlé díẹ̀",
        questions: [
          { objective: "O4", q: "Nínú push-pull, koríko ẹ̀gbẹ́ tí ó yí àgbàdo ká:", options: ["Ń fa labalábá òru stemborer kúrò lọ́dọ̀ àgbàdo", "Ń ti labalábá òru wọ inú àgbàdo", "Ń pa àgbàdo", "Ń rọ́pò ajílẹ̀"], answer: 0, why: "Koríko ẹ̀gbẹ́ (brachiaria tàbí napier) ń fa labalábá òru mọ́ra, ó sì ń dẹkùn mú wọn." },
          { objective: "O4", q: "Èwo ni ọ̀nà ìṣàkóso alààyè?", options: ["Oògùn apakòkòrò tí ó ń pa gbogbo kòkòrò", "Ọjà tí a ṣe láti ara bakitéríà Bt", "Dídáná sun oko", "Bíbomirin ní alẹ́"], answer: 1, why: "Ọjà Bt ń lo bakitéríà láti pa àwọn ìdin kan." },
          { objective: "O5", q: "Ta ló ń tọ́jú àkọsílẹ̀ oògùn apakòkòrò tí a forúkọ wọn sílẹ̀ ní Kenya?", options: ["Ọ́fíìsì ọ̀nà ti county", "Olùtajà ohun ọ̀gbìn", "Pest Control Products Board (PCPB)", "Ilé-iṣẹ́ irúgbìn"], answer: 2, why: "PCPB ló ń forúkọ ọjà ìṣàkóso kòkòrò sílẹ̀ ní Kenya." },
          { objective: "O5", q: "Níbo ni o ti máa rí bí ó ti pẹ́ tó tí o máa dúró láàárín fífín oògùn àti ìkórè?", options: ["Béèrè lọ́wọ́ aládùúgbò", "Méfò láti ara ojú ọjọ́", "Ọjọ́ kan ni nígbà gbogbo", "Lára àmì-ìtọ́sọ́nà ọjà náà (àkókò ìdúró ṣáájú ìkórè)"], answer: 3, why: "Àmì-ìtọ́sọ́nà ń fúnni ní àkókò ìdúró ṣáájú ìkórè fún irè kọ̀ọ̀kan." },
          { objective: "O6", q: "Kí ló dé tí a fi ń yí ẹgbẹ́ oògùn apakòkòrò padà?", options: ["Láti dín bí kòkòrò ṣe ń fara da oògùn kù", "Láti jẹ́ kí oko ní òórùn míì", "Nítorí ẹgbẹ́ kan máa ń lòdì sí òfin nígbà gbogbo", "Láti lo ọjà àtijọ́ tán"], answer: 0, why: "Lílo ẹgbẹ́ kan náà léraléra ń yan àwọn kòkòrò tí ó lè yè é." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìṣàkóso Àjọpọ̀ fún Kòkòrò àti Ìṣàkóso Kòkòrò Láìlo Kẹ́míkà",
    questions: [
      { objective: "O1", q: "Kí ni ìgbésẹ̀ mẹ́rin IPM, ní ìtẹ̀léra?", options: ["Fín oògùn, dúró, fín oògùn, kórè", "Dènà, ṣọ́, pinnu, gbé ìgbésẹ̀", "Rà, pò, fín, tà", "Tú ilẹ̀, gbìn, fín oògùn, tọ́jú"], answer: 1, why: "IPM bẹ̀rẹ̀ pẹ̀lú ìdènà, ó sì ń lo oògùn apakòkòrò kìkì lẹ́yìn ṣíṣọ́ àti pípinnu." },
      { objective: "O1", q: "Ìgbésẹ̀ wo ló ń ràn lọ́wọ́ láti dá kòkòrò dúró kí wọ́n má kúrò ní oko kan lọ sí òmíràn?", options: ["Gbígbìn ní àkókò tí ó yàtọ̀ sí ti àwọn aládùúgbò rẹ", "Fífi ọ̀gbìn tí ó hù fúnra rẹ̀ sílẹ̀", "Gbígbìn lásìkò, pọ̀ pẹ̀lú àwọn aládùúgbò rẹ", "Fífi èpò tí kòkòrò ń gbé sílẹ̀"], answer: 2, why: "Gbígbìn pọ̀ kì í fi oko tí a gbìn pẹ́ sílẹ̀ fún kòkòrò láti wọ̀." },
      { objective: "O1", q: "Kí ló dé tí a fi ń gbé ọmọ ọ̀gbìn tòmátì dàgbà nínú ibi ìtọ́jú irúgbìn tó mọ́, tí a fi àwọ̀n bò?", options: ["Kí ọmọ ọ̀gbìn lè dé oko láìsí Tuta absoluta àti whiteflies", "Kí wọ́n má nílò omi", "Nítorí àwọ̀n ń fi ajílẹ̀ kún un", "Láti gbé wọn dàgbà kíákíá nínú òkùnkùn"], answer: 0, why: "Ọmọ ọ̀gbìn tó mọ́, tí a fi àwọ̀n bò, kì í jẹ́ kí kòkòrò bá irè dé oko." },
      { objective: "O2", q: "Ọ̀gbìn àgbàdo mélòó ni ọ̀nà yíyẹ oko wò nínú ẹ̀kọ́ yìí ń ṣàyẹ̀wò?", options: ["5", "10", "100 ní ẹnu ọ̀nà", "50: ọ̀gbìn 10 ní ibi 5 ní ìrísí W"], answer: 3, why: "Ibi márùn-ún tí ọ̀gbìn 10 wà ní ìrísí W ń fi àwòrán oko tó tọ́ hàn." },
      { objective: "O2", q: "Ìdin kan ní àmì Y tí ó dojú dé ní orí rẹ̀ àti àmì dúdú mẹ́rin tí ó ṣe bí igun mẹ́rin nítòsí ìrù rẹ̀. Ó jẹ́:", options: ["Fall armyworm", "Ọmọ ladybird", "Tuta absoluta", "Lacewing"], answer: 0, why: "Àwọn àmì wọ̀nyẹn ló ń fi ìdin fall armyworm hàn." },
      { objective: "O2", q: "Èwo nínú ìwọ̀nyí ni ọ̀tá àdánidá tí o yẹ kí o kọ sílẹ̀ kí o sì dáàbò bò?", options: ["Labalábá òru fall armyworm", "Whitefly", "Ladybird", "Striga"], answer: 2, why: "Ladybird ń jẹ aphids àti àwọn kòkòrò kéékèèké míì." },
      { objective: "O2", q: "O rí ìbàjẹ́ tí o kò lè mọ̀. Ìgbésẹ̀ tó dára jù tó kàn ni:", options: ["Fín ọjà tó lágbára jù tí o ní", "Ya fọ́tò rẹ̀ kí o sì béèrè lọ́wọ́ òṣìṣẹ́ ìmọ̀ràn tàbí ilé ìwòsàn ọ̀gbìn", "Fi í sílẹ̀", "Dáná sun gbogbo oko"], answer: 1, why: "Mímọ ohun tó ń ṣẹlẹ̀ dáadáa ló máa ń ṣáájú ìṣàkóso èyíkéyìí." },
      { objective: "O3", q: "O ṣàyẹ̀wò ọ̀gbìn 40, kòkòrò sì ti wọ 10. Kí ni ìdá-ọgọ́rùn-ún?", options: ["10%", "40%", "4%", "25%"], answer: 3, why: "10 / 40 x 100 = 25%." },
      { objective: "O3", q: "Níbo ni ìpele ìgbésẹ̀ rẹ yẹ kí ó ti wá?", options: ["Ìpolówó oògùn apakòkòrò", "Òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí ilé-iṣẹ́ ìwádìí rẹ, fún ìpele ìdàgbà irè rẹ", "Nọ́mbà tí ó ga jù tí o lè ronú kàn", "Àméfò aládùúgbò"], answer: 1, why: "Ìpele ìgbésẹ̀ dá lórí ìpele ìdàgbà irè àti ìwádìí àdúgbò." },
      { objective: "O3", q: "Iye tí o kà ti kọjá ìpele ìgbésẹ̀. Kí ni o máa ṣe?", options: ["Gbé ìgbésẹ̀, bẹ̀rẹ̀ pẹ̀lú ọ̀nà tí kì í ṣe kẹ́míkà tó dára jù, kí o sì kọ ọ́ sílẹ̀", "Dúró títí di ìkórè", "Dáwọ́ yíyẹ oko wò dúró", "Tún gbìn"], answer: 0, why: "Nígbà tí ó bá kọjá ìpele ìgbésẹ̀, ìgbésẹ̀ máa mú èrè wá; IPM ń bẹ̀rẹ̀ pẹ̀lú ọ̀nà tí kì í ṣe kẹ́míkà." },
      { objective: "O4", q: "Ta ló ṣe push-pull?", options: ["Ilé-iṣẹ́ oògùn apakòkòrò kan", "icipe àti àwọn alábàáṣiṣẹ́ rẹ̀", "Ṣọ́ọ̀bù irúgbìn kan", "Báńkì kan"], answer: 1, why: "icipe àti àwọn alábàáṣiṣẹ́ rẹ̀ ló ṣe push-pull ní Ìlà-Oòrùn Áfíríkà." },
      { objective: "O4", q: "Yàtọ̀ sí kòkòrò, desmodium nínú push-pull tún:", options: ["Ń fa striga púpọ̀ sí i mọ́ra", "Ń nílò fífín oògùn lójoojúmọ́", "Ń pa màlúù", "Ń dín striga kù, ó sì ń fi náítrójìn kún ilẹ̀"], answer: 3, why: "Desmodium ń dín striga kù, ó ń fi náítrójìn kún ilẹ̀, ó sì jẹ́ oúnjẹ ẹran tó dára." },
      { objective: "O4", q: "Káàdì búlúù tí ó lẹ̀ ni a ń lò ní pàtàkì láti mú:", options: ["Thrips", "Ìdin fall armyworm", "Eku", "Ikán"], answer: 0, why: "Káàdì búlúù ń fa thrips mọ́ra; káàdì ìyeyè ń fa whiteflies àti aphids mọ́ra." },
      { objective: "O4", q: "Kí ni o yẹ kí o ṣe pẹ̀lú ewé tí Tuta ti wa ihò sí àti èso tí ó bàjẹ́ tí o ká kúrò?", options: ["Fi wọ́n sílẹ̀ lórí ilẹ̀", "Fi wọ́n bọ́ irè tòmátì tó kàn", "Tà wọ́n", "Sin wọ́n jìn tàbí dì wọ́n sínú àpò kí o sì gbé e sínú oòrùn"], answer: 3, why: "Tí a bá fi wọ́n sílẹ̀ lórí ilẹ̀, àwọn ìdin inú wọn máa dàgbà tán, wọ́n á sì tún kọlù." },
      { objective: "O5", q: "Ní Nàìjíríà, àjọ wo ló ń forúkọ oògùn apakòkòrò sílẹ̀?", options: ["Central Bank", "Nigerian Meteorological Agency", "NAFDAC", "Ìgbìmọ̀ irúgbìn"], answer: 2, why: "NAFDAC ló ń forúkọ oògùn apakòkòrò sílẹ̀ ní Nàìjíríà." },
      { objective: "O5", q: "Èwo ni òfin aṣọ ààbò tó tọ́?", options: ["Wọ ohun tí àmì-ìtọ́sọ́nà kọ sílẹ̀, bí ìbọ̀wọ́, bàtà orúnkún, aṣọ ọwọ́ gígùn, ààbò ojú àti ìbòmú", "Ṣòkòtò péńpé dára ní ọjọ́ tí ooru mú", "Ìbọ̀wọ́ wà fún obìnrin nìkan", "Aṣọ ààbò wà fún oko ńlá nìkan"], answer: 0, why: "Àmì-ìtọ́sọ́nà ń kọ aṣọ ààbò tí a nílò fún ọjà náà sílẹ̀." },
      { objective: "O5", q: "Níbo ni o kò gbọ́dọ̀ tọ́jú oògùn apakòkòrò sí láéláé?", options: ["Nínú ike rẹ̀ àkọ́kọ́", "Nínú ilé ìkẹ́rùsí tí a tì pa", "Nínú ìgò ọtí ẹlẹ́rìn-dòdò (soda) tàbí ìgò omi", "Ní ibi tí oúnjẹ àti ọmọdé kò lè dé"], answer: 2, why: "Oògùn apakòkòrò nínú ìgò ohun mímu ń fa ọ̀pọ̀ májèlé." },
      { objective: "O6", q: "Kòkòrò kan kò kú mọ́ nípasẹ̀ ọjà tí ó ti ń ṣiṣẹ́ tẹ́lẹ̀. A ń pe èyí ní:", options: ["Yíyí padà", "Ìfaradà oògùn (resistance)", "Ìpele ìgbésẹ̀", "Ìdàpọ̀ òdòdó (pollination)"], answer: 1, why: "Ìfaradà oògùn ń pọ̀ sí i nígbà tí a bá ń lo ẹgbẹ́ kẹ́míkà kan náà léraléra." },
      { objective: "O6", q: "Àṣà wo ló ń mú kí ìfaradà oògùn yára sí i?", options: ["Yíyí ẹgbẹ́ padà", "Fífín oògùn kìkì nígbà tí ó bá kọjá ìpele ìgbésẹ̀", "Kíkọ àkọsílẹ̀ fífín oògùn", "Fífín ọjà kan náà ní ọjọ́ díẹ̀ díẹ̀"], answer: 3, why: "Lílo ẹgbẹ́ kan náà léraléra ń yan àwọn kòkòrò tí ó lè yè é." },
      { objective: "O6", q: "Kí ló yẹ kí ó wà nínú àkọsílẹ̀ fífín oògùn?", options: ["Ọjọ́, ọjà, ẹgbẹ́, ìwọ̀n, oko àti ọjọ́ tí ó tọ́ láti kórè", "Iye owó nìkan", "Ojú ọjọ́ nìkan", "Kò sí nǹkan; a kò nílò àkọsílẹ̀"], answer: 0, why: "Àwọn ìsọfúnni wọ̀nyí ń jẹ́ kí o lè yí ẹgbẹ́ padà, kí o sì bọ̀wọ̀ fún àkókò ìdúró ṣáájú ìkórè." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 4, 7, 9, 11, 14, 16, 17] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ètò náà ṣe, kí o sì tún ṣàyẹ̀wò rẹ̀ pẹ̀lú òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ rẹ.",
    criteria: [
      { name: "Ìdènà", objective: "O1", notYet: "Kò sí ìgbésẹ̀ ìdènà, tàbí \"fín oògùn ní kùtùkùtù\" nìkan.", meets: "Ó kéré tán ìgbésẹ̀ ìdènà mẹ́ta tí ó bá irè náà mu (irúgbìn, yíyí irè padà, àkókò, ìmọ́tótó tàbí ewéko ẹ̀gbẹ́ oko).", exceeds: "A ti ṣètò àkókò àwọn ìgbésẹ̀ ìdènà sórí kàlẹ́ńdà, a sì ti fohùn ṣọ̀kan lé wọn lórí pẹ̀lú àwọn aládùúgbò, bí gbígbìn pọ̀." },
      { name: "Ètò yíyẹ oko wò", objective: "O2", notYet: "Yíyẹ oko wò jẹ́ \"nígbà tí mo bá rí ìbàjẹ́\", láìsí iye ọ̀gbìn kan pàtó.", meets: "Ọjọ́ kan lọ́sẹ̀, ìrísí W, iye ọ̀gbìn kan pàtó àti ìwé àkọsílẹ̀ tí ó ní ọ̀wọ̀n fún kòkòrò àti ọ̀tá àdánidá.", exceeds: "Ó ní fọ́tò àwọn kòkòrò pàtàkì àti ọ̀tá àdánidá láti mọ̀ wọ́n, a sì ti lo àkọsílẹ̀ náà fún ó kéré tán ọ̀sẹ̀ méjì." },
      { name: "Ìpele ìgbésẹ̀ àti ìpinnu", objective: "O3", notYet: "Kò sí ìpele ìgbésẹ̀; ìgbésẹ̀ jẹ́ nítorí àṣà.", meets: "Ìpele ìgbésẹ̀ láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn fún kòkòrò pàtàkì kọ̀ọ̀kan, pẹ̀lú ọ̀nà ìṣírò ìdá-ọgọ́rùn-ún tí a kọ sílẹ̀.", exceeds: "A kọ ìpele ìgbésẹ̀ sílẹ̀ ní ìpele ìdàgbà irè kọ̀ọ̀kan, ó sì ní àpẹẹrẹ ìṣírò láti ara iye tí akẹ́kọ̀ọ́ fúnra rẹ̀ kà." },
      { name: "Ọ̀nà tí kì í ṣe kẹ́míkà ṣáájú", objective: "O4", notYet: "Oògùn apakòkòrò ni ọ̀nà ìṣàkóso àkọ́kọ́ àti ọ̀kan ṣoṣo.", meets: "A ṣètò ó kéré tán ọ̀nà méjì tí kì í ṣe kẹ́míkà (push-pull, ìdẹkùn, fífi ọwọ́ ṣa, ọ̀tá àdánidá, ọjà alààyè tàbí ọjà láti ara ewéko) ṣáájú oògùn apakòkòrò èyíkéyìí.", exceeds: "A ti ṣètò àwọn ọ̀nà tí kì í ṣe kẹ́míkà sílẹ̀ ná, bí ìdẹkùn tí a ti so kọ́ tàbí ilẹ̀ push-pull tí a ti gbìn." },
      { name: "Ìgbésẹ̀ ìkẹyìn tí ó ní ààbò tí ó sì bá òfin mu", objective: "O5", notYet: "A kò ṣàyẹ̀wò ọjà náà, tàbí ètò náà fo àmì-ìtọ́sọ́nà tàbí PPE.", meets: "A ṣàyẹ̀wò ọjà náà lórí àkọsílẹ̀ àjọ alábòójútó orílẹ̀-èdè, ètò náà sì tẹ̀lé àmì-ìtọ́sọ́nà, ó kọ PPE sílẹ̀, ó sì dárúkọ àkókò ìdúró ṣáájú ìkórè láti ara àmì-ìtọ́sọ́nà.", exceeds: "Ó tún ní ìtọ́jú tí ó ní ààbò, bí a ṣe ń kó ike òfìfo dànù bí àmì-ìtọ́sọ́nà ti sọ, àti àwọn ìgbésẹ̀ ìrànlọ́wọ́ àkọ́kọ́." },
      { name: "Ìfaradà oògùn àti àkọsílẹ̀", objective: "O6", notYet: "Ọjà kan ṣoṣo ni a lò jálẹ̀ àsìkò, kò sí àkọsílẹ̀ fífín oògùn.", meets: "Àkọsílẹ̀ fífín oògùn àti yíyí padà láàárín ó kéré tán ẹgbẹ́ méjì.", exceeds: "A ṣètò yíyí padà ní ìran kòkòrò kọ̀ọ̀kan, àkọsílẹ̀ náà sì ní iye owó ọ̀nà ìṣàkóso kọ̀ọ̀kan." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n sọ pé àwọn ń yẹ oko wò lọ́sẹ̀ọ̀sẹ̀, tí wọ́n sì ń kọ àkọsílẹ̀ kòkòrò lẹ́yìn ọjọ́ 30 (ìwádìí àtẹ̀lé)",
      "Fífín oògùn tí ó dín kù ní àsìkò kọ̀ọ̀kan tí àwọn akẹ́kọ̀ọ́ ròyìn, pẹ̀lú ìkórè tí kò dín kù tàbí tí ó pọ̀ sí i",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣètò ó kéré tán ọ̀nà kan tí kì í ṣe kẹ́míkà (push-pull, ìdẹkùn, ọjà alààyè) láàárín àsìkò kan",
      "Ìròyìn májèlé oògùn apakòkòrò tàbí irè tí olùrà kọ̀ tí ó dín kù láti ọ̀dọ̀ ẹgbẹ́ àwọn akẹ́kọ̀ọ́ (èsì láti ọ̀dọ̀ òṣìṣẹ́ ìmọ̀ràn àti olùrà)"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù (kámẹ́rà ń ṣèrànwọ́) tàbí ìwé àti gègé fún àkọsílẹ̀ yíyẹ oko wò",
      "Oko tí irè wà nínú rẹ̀, ó dára jù tí ó bá jẹ́ àgbàdo, ọkà bàbà tàbí tòmátì",
      "Àṣàyàn: awò ìfojúwò (hand lens), ìdẹkùn pheromone àti káàdì tí ó lẹ̀ láti fi han ẹgbẹ́ náà",
      "Nọ́mbà ìkànsí òṣìṣẹ́ ìmọ̀ràn àgbẹ̀ àdúgbò tàbí ilé ìwòsàn ọ̀gbìn, àti ojú-òpó wẹ́ẹ̀bù àjọ alábòójútó oògùn apakòkòrò ti orílẹ̀-èdè",
      "Nǹkan bí ìṣẹ́jú 60 sí 90 lápapọ̀ fún ẹ̀kọ́, àyẹ̀wò kúkúrú àti ìdánwò, pẹ̀lú yíyẹ oko wò lọ́sẹ̀ọ̀sẹ̀ nínú oko"
    ],
    facilitatorNotes: [
      "Ṣe ẹ̀kọ́ náà bí ilé-ẹ̀kọ́ àgbẹ̀ inú oko (farmer field school) tí o bá lè ṣe é: ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ yẹ oko gidi kan wò gẹ́gẹ́ bí ẹgbẹ́ lẹ́yìn Ẹ̀kọ́ 2 àti 3.",
      "Mú àpẹẹrẹ gidi tàbí fọ́tò fall armyworm, Tuta absoluta àti àwọn ọ̀tá àdánidá wá kí àwọn akẹ́kọ̀ọ́ lè fi dánra wò láti mọ̀ wọ́n.",
      "Gba ìpele ìgbésẹ̀ àdúgbò láti ọ̀dọ̀ iṣẹ́ ìmọ̀ràn àgbẹ̀ tàbí ilé-iṣẹ́ ìwádìí ṣáájú ìpàdé; má ṣe hùmọ̀ wọn.",
      "Má ṣe dábàá ọjà oògùn apakòkòrò, ìwọ̀n lílò tàbí àkókò ìdúró ṣáájú ìkórè rárá; dípò bẹ́ẹ̀, fi bí a ṣe ń ka àmì-ìtọ́sọ́nà àti àkọsílẹ̀ àjọ alábòójútó han àwọn akẹ́kọ̀ọ́.",
      "Má ṣe fọwọ́ kan oògùn apakòkòrò nínú ìpàdé láìwọ gbogbo PPE; lo ike òfìfo tó mọ́ tí ó ní àmì-ìtọ́sọ́nà láti fi dánra wò kíka àmì-ìtọ́sọ́nà.",
      "Fi rubric ṣe àmì fún ètò IPM ìkẹyìn, kí o sì fohùn ṣọ̀kan lórí àtúnṣe kan fún akẹ́kọ̀ọ́ kọ̀ọ̀kan fún àsìkò tó ń bọ̀."
    ]
  }
};
