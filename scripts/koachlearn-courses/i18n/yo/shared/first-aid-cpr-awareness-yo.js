"use strict";

// Koach Learn course (Yoruba translation of shared/first-aid-cpr-awareness.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// An AWARENESS course: it does NOT certify anyone. No medicine doses anywhere.

const MEDLINE_CPR = { name: "MedlinePlus (Ilé-ìkàwé Ìṣègùn Orílẹ̀-èdè US): CPR fún àgbàlagbà àti ọmọ tó ti bàlágà", url: "https://medlineplus.gov/ency/article/000013.htm" };
const MEDLINE_CHOKING = { name: "MedlinePlus: Ohun tó há sí ọ̀fun, àgbàlagbà tàbí ọmọ tó ju ọdún 1 lọ", url: "https://medlineplus.gov/ency/article/000049.htm" };
const MEDLINE_BLEEDING = { name: "MedlinePlus: Ẹ̀jẹ̀ dídà", url: "https://medlineplus.gov/ency/article/000045.htm" };
const MEDLINE_HEART = { name: "MedlinePlus: Ìrànlọ́wọ́ àkọ́kọ́ fún ìkọlù ọkàn (heart attack)", url: "https://medlineplus.gov/ency/article/000063.htm" };
const CDC_STROKE = { name: "CDC: Àwọn àmì àrùn ẹ̀gbà (stroke)", url: "https://www.cdc.gov/stroke/signs-symptoms/index.html" };
const AHA_CPR = { name: "American Heart Association: Kíláàsì CPR àti ìrànlọ́wọ́ àkọ́kọ́", url: "https://cpr.heart.org/" };
const REDCROSS = { name: "American Red Cross: Kíláàsì ìrànlọ́wọ́ àkọ́kọ́, CPR àti AED", url: "https://www.redcross.org/take-a-class" };
const OSHA_FIRSTAID = { name: "OSHA: Ìtọ́jú àti ìrànlọ́wọ́ àkọ́kọ́ níbi iṣẹ́", url: "https://www.osha.gov/medical-first-aid" };

module.exports = {
  id: "first-aid-cpr-awareness-yo",
  lang: "yo",
  translationOf: "first-aid-cpr-awareness",
  category: "Workforce Development",
  name: "Ìmọ̀ Ìrànlọ́wọ́ Àkọ́kọ́ àti CPR",
  skills: "Ṣíṣàyẹ̀wò ibi ìṣẹ̀lẹ̀ àti pípe 911, Àwọn ìgbésẹ̀ CPR Ọwọ́-nìkan, Lílo AED, Ríran ẹni tí nǹkan há sí ọ̀fun lọ́wọ́, Dídá ẹ̀jẹ̀ tó ń ṣàn púpọ̀ dúró, Dídá ìkọlù ọkàn àti àrùn ẹ̀gbà mọ̀",
  outcome: "ṣe nǹkan pẹ̀lú ọkàn balẹ̀ ní ìṣẹ́jú àkọ́kọ́ ti pàjáwìrì: ṣàyẹ̀wò pé ibẹ̀ kò léwu, pe 911 (tàbí nọ́mbà pàjáwìrì ti orílẹ̀-èdè rẹ), tẹ̀lé àwọn ìgbésẹ̀ CPR Ọwọ́-nìkan àti ti AED, ran ẹni tí nǹkan há sí ọ̀fun àti ẹni tí ẹ̀jẹ̀ ń ṣàn lára rẹ̀ púpọ̀ lọ́wọ́, dá ìkọlù ọkàn tàbí àrùn ẹ̀gbà mọ̀, kí o sì forúkọ sílẹ̀ fún kíláàsì CPR àti ìrànlọ́wọ́ àkọ́kọ́ ní ojúkojú tí ó ń fúnni ní ìwé ẹ̀rí gidi.",
  about: [
    "Ẹ̀kọ́ yìí wà fún ẹnikẹ́ni tó fẹ́ múra láti ṣèrànwọ́: àwọn ọ̀dọ́ tó ń wá iṣẹ́ àkọ́kọ́, àwọn òbí àti àwọn òbí àgbà, àwọn òṣìṣẹ́ ìtọ́jú ọmọdé, ilé oúnjẹ, ilé ìtajà, ààbò àti iṣẹ́ ọwọ́, àti àwọn olùyọ̀ǹda ní àwọn àjọ aláìlérè àti ṣọ́ọ̀ṣì. Ọ̀pọ̀ nínú àwọn iṣẹ́ wọ̀nyí ń béèrè ìwé ẹ̀rí CPR àti ìrànlọ́wọ́ àkọ́kọ́.",
    "O máa kọ́ ètò tí o máa tẹ̀lé nínú pàjáwìrì, àwọn ìgbésẹ̀ CPR Ọwọ́-nìkan, bí AED ṣe ń sọ̀rọ̀ láti tọ́ ọ sọ́nà nígbà ìtanná (shock), àti ohun tí o máa ṣe fún nǹkan tó há sí ọ̀fun, ẹ̀jẹ̀ tó ń ṣàn púpọ̀, ìkọlù ọkàn àti àrùn ẹ̀gbà. Àwọn ìgbésẹ̀ náà tẹ̀lé ìtọ́sọ́nà gbogbogbò láti American Red Cross, American Heart Association àti Ilé-ìkàwé Ìṣègùn Orílẹ̀-èdè US.",
    "Ẹ̀kọ́ ìmọ̀ ni èyí. Ó ń MÚRA rẹ sílẹ̀; kò fún ọ ní ìwé ẹ̀rí CPR tàbí ìrànlọ́wọ́ àkọ́kọ́. Ọgbọ́n ọwọ́ gidi, bíi títẹ àyà mọ́lẹ̀ dé ibi tó yẹ, ni a ń kọ́ tí a sì ń dánwò ní ojúkojú pẹ̀lú olùkọ́ tó kúnjú ìwọ̀n, lórí ère àṣeṣe (manikin). Ẹ̀kọ́ tó kẹ́yìn fi bí o ṣe lè rí kíláàsì yẹn hàn ọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Kà á, wo àwọn àwòrán ìfihàn, lẹ́yìn náà ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" pẹ̀lú ìwé tàbí ìrọ̀rí. Àyẹ̀wò kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Ṣe Ètò Ìmúrasílẹ̀ Ìrànlọ́wọ́ Àkọ́kọ́ àti CPR tìrẹ lórí ojú-ìwé kan: (1) nọ́mbà pàjáwìrì rẹ àti bí o ṣe máa sọ àdírẹ́sì rẹ kedere; (2) ibi tí AED àti àpótí ìrànlọ́wọ́ àkọ́kọ́ tó sún mọ́ jù wà nílé, níbi iṣẹ́, ní ilé-ìwé tàbí ní ilé ìjọsìn rẹ; (3) àwọn ìgbésẹ̀ pàjáwìrì, tí o kọ láti orí láìwò, ní ètò tó tọ́ (ṣàyẹ̀wò, pè, CPR àti AED, nǹkan tó há sí ọ̀fun, ẹ̀jẹ̀ dídà, B.E. F.A.S.T.); àti (4) kíláàsì CPR, AED àti ìrànlọ́wọ́ àkọ́kọ́ ní ojúkojú tí o yàn láti American Red Cross tàbí American Heart Association, pẹ̀lú orúkọ rẹ̀, ẹni tó ń fúnni ní ìwé ẹ̀rí, ibi tó wà, àti ọjọ́ tí o máa lọ.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Akẹ́kọ̀ọ́ oríṣiríṣi: àwọn ọ̀dọ́ tó ń wá iṣẹ́ àkọ́kọ́, àwọn àgbàlagbà tó wà níbi iṣẹ́ tàbí tó ń wọ iṣẹ́ tí ń béèrè CPR àti ìrànlọ́wọ́ àkọ́kọ́ (ìtọ́jú ọmọdé, ilé oúnjẹ, ilé ìtajà, ààbò, iṣẹ́ ọwọ́, ìtọ́jú nílé), àwọn àgbà tó ń tọ́jú ọkọ tàbí aya wọn tàbí ọmọ-ọmọ, àti àwọn olùyọ̀ǹda ní àjọ aláìlérè àti ṣọ́ọ̀ṣì. Àwọn kan ń sọ èdè yìí gẹ́gẹ́ bí èdè kejì.",
    startingPoint: "Ọ̀pọ̀ mọ̀ pé kí wọ́n pe 911, ṣùgbọ́n ara wọn máa ń dì tàbí wọn kò mọ ohun tí wọ́n máa ṣe tẹ̀lé e. Ọ̀pọ̀ ti rí CPR lórí tẹlifíṣọ̀n ṣùgbọ́n wọn kò ṣe é rí. Díẹ̀ ló mọ ibi tí AED tó sún mọ́ wọn jù wà tàbí bí ó ṣe ń ṣiṣẹ́. Àwọn kan rò pé wọ́n lè kó sí wàhálà tí wọ́n bá ṣèrànwọ́.",
    gap: "Nígbà tí ọkàn bá dúró, tí nǹkan bá há sí ọ̀fun tàbí tí ẹ̀jẹ̀ bá ń ṣàn púpọ̀, ìṣẹ́jú díẹ̀ àkọ́kọ́ kí ìrànlọ́wọ́ tó dé ló ṣe pàtàkì jù. Àwọn akẹ́kọ̀ọ́ nílò ètò ìgbésẹ̀ tó yé, ìgboyà láti bẹ̀rẹ̀, àti ètò láti gba ìwé ẹ̀rí ní ojúkojú, nítorí ọ̀pọ̀ iṣẹ́ ń béèrè ìwé ẹ̀rí tó wà lọ́wọ́ láti ọ̀dọ̀ àjọ tí a mọ̀.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú (nǹkan bí kíláàsì 6)",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà ilé-ìkàwé; àṣeṣe ń lo ìwé, ìrọ̀rí tàbí aṣọ ìnura tí a ká",
      "Àkókò: ẹ̀kọ́ ìṣẹ́jú 4 sí 6",
      "Ààbò: ìmọ̀ nìkan; kò sí àṣeṣe lórí ènìyàn gidi; ọgbọ́n ọwọ́ àti ìwé ẹ̀rí ń wáyé ní ojúkojú pẹ̀lú olùkọ́ tó kúnjú ìwọ̀n",
      "Kò sí ìwọ̀n oògùn tàbí ìmọ̀ràn ìṣègùn; tẹ̀lé olùgbọ́ ìpè 911 àti àwọn òṣìṣẹ́ pàjáwìrì",
      "Nọ́mbà pàjáwìrì yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè: 911 ní US; àwọn akẹ́kọ̀ọ́ ní òkè òkun ń lo nọ́mbà ti ìlú wọn"
    ],
    prerequisites: "Kò sí. Àwọn akẹ́kọ̀ọ́ tó fẹ́ mọ̀ sí i nípa kíka ìsọfúnni ìlera tún lè ṣe \"Ìmọ̀ Ìlera\" (Health Literacy)."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá ṣàpèjúwe ibi ìṣẹ̀lẹ̀ pàjáwìrì kan fún ọ ní ọ̀rọ̀", action: "ṣàyẹ̀wò ewu ní ibi ìṣẹ̀lẹ̀, ṣàyẹ̀wò bóyá ẹni náà ń dáhùn, kí o sì pe 911 tàbí nọ́mbà pàjáwìrì ti ìlú rẹ", standard: "ní ètò tó tọ́, kí o sì sọ àdírẹ́sì àti ohun tó ṣẹlẹ̀ nínú gbólóhùn kan tó yé" },
    { id: "O2", condition: "Tí àgbàlagbà kan bá ṣubú lulẹ̀ tí kò sì mí bó ṣe yẹ", action: "to àwọn ìgbésẹ̀ CPR Ọwọ́-nìkan àti ti lílo AED", standard: "ní ètò tó tọ́, pẹ̀lú ibi tí ọwọ́ máa wà, ìyára 100 sí 120 ní ìṣẹ́jú kan àti jíjìn tó nǹkan bí inch 2" },
    { id: "O3", condition: "Tí a bá ṣàpèjúwe àgbàlagbà kan tí nǹkan lè ti há sí ọ̀fun rẹ̀", action: "dá àwọn àmì nǹkan tó há sí ọ̀fun mọ̀ kí o sì ṣàlàyé ìrànlọ́wọ́ àkọ́kọ́ rẹ̀", standard: "kí o sì fi ìyàtọ̀ hàn láàárín ẹni tó lè wúkọ́ tó sì lè sọ̀rọ̀ àti ẹni tí kò lè ṣe bẹ́ẹ̀" },
    { id: "O4", condition: "Tí ọgbẹ́ kan bá ń ṣẹ̀jẹ̀ púpọ̀", action: "ṣàlàyé bí o ṣe lè dá ẹ̀jẹ̀ náà dúró nípa títẹ̀ ẹ́ mọ́lẹ̀ gidigidi ní tààrà", standard: "kí o sì dárúkọ ìbọ̀wọ́ tàbí ìdáàbòbò, títẹ̀ tí kò dúró, àti fífi aṣọ kún un dípò gbígbé aṣọ àkọ́kọ́ sókè" },
    { id: "O5", condition: "Tí a bá fún ọ ní àkọsílẹ̀ àwọn àmì àìsàn", action: "dá àwọn àmì ìkìlọ̀ ìkọlù ọkàn àti ti àrùn ẹ̀gbà mọ̀ nípa lílo B.E. F.A.S.T.", standard: "kí o sì gba ó kéré tán 4 nínú 5 tọ̀nà, kí o sì pe 911 dípò kí o gbé ẹni náà lọ fúnra rẹ" },
    { id: "O6", condition: "Nípa lílo ohun èlò wíwá kíláàsì ti American Red Cross tàbí American Heart Association", action: "yan kíláàsì CPR, AED àti ìrànlọ́wọ́ àkọ́kọ́ ní ojúkojú kí o sì kọ ètò ẹ̀kọ́ pẹ̀lú ọjọ́", standard: "kí o sì dárúkọ kíláàsì náà, ẹni tó ń fúnni ní ìwé ẹ̀rí àti bóyá iṣẹ́ rẹ nílò rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Ṣe kíá kí o sì jẹ́ kí ọkàn máa lù",
      lessons: [
        {
          title: "Ṣàyẹ̀wò, pè, tọ́jú: ìṣẹ́jú àkọ́kọ́",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣàyẹ̀wò ibi ìṣẹ̀lẹ̀ àti ẹni náà, lẹ́yìn náà pe 911 pẹ̀lú ọ̀rọ̀ tó yé.",
          text: [
            "Nínú pàjáwìrì èyíkéyìí, bẹ̀rẹ̀ pẹ̀lú ọ̀rọ̀ mẹ́ta: ṣàyẹ̀wò, pè, tọ́jú. Àkọ́kọ́, ṢÀYẸ̀WÒ pé ibi ìṣẹ̀lẹ̀ kò léwu fún ọ: ọkọ̀ tó ń kọjá, iná, èéfín, iná mànàmáná, ènìyàn tó ń bínú tàbí omi jíjìn. Tí kò bá dára, dúró sẹ́yìn kí o sì pè. O kò lè ran ẹnikẹ́ni lọ́wọ́ tí ìwọ náà bá farapa.",
            "Lẹ́yìn náà ṣàyẹ̀wò ẹni náà. Tẹ èjìká rẹ̀ díẹ̀ kí o sì pariwo pé, \"Ṣé o wà dáadáa?\" Wo àyà rẹ̀ bóyá ó ń mí bó ṣe yẹ. Mímí gúlẹ́gúlẹ́ lẹ́ẹ̀kọ̀ọ̀kan KÌ Í ṣe mímí tó yẹ.",
            "Tẹ̀lé e, PE 911 (tàbí nọ́mbà pàjáwìrì ti ìlú rẹ níta US). Tí ẹnì kan bá wà pẹ̀lú rẹ, nà ìka sí i kí o sì sọ pé, \"Ìwọ, pe 911 kí o sì mú AED wá.\" Tan ẹ̀rọ agbóhùnsókè fóònù (speaker). Sọ àdírẹ́sì kọ́kọ́, lẹ́yìn náà ohun tó ṣẹlẹ̀, má sì ṣe pa fóònù títí olùgbọ́ ìpè yóò fi sọ fún ọ. Olùgbọ́ ìpè lè tọ́ ọ sọ́nà nínú CPR.",
            "Lẹ́yìn náà TỌ́JÚ: ṣe ìrànlọ́wọ́ tí o lè ṣe títí àwọn tí a kọ́ yóò fi dé. Lo ìbọ̀wọ́ tàbí ìdáàbòbò tí o bá ní. Ọ̀pọ̀ ìpínlẹ̀ ní US ní òfin Good Samaritan tó ń dáàbò bo àwọn tó ṣèrànwọ́ pẹ̀lú èrò rere; àwọn àlàyé rẹ̀ yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀."
          ],
          steps: ["Ṣàyẹ̀wò ibi ìṣẹ̀lẹ̀: ṣé kò léwu fún mi?", "Ṣàyẹ̀wò ẹni náà: tẹ̀ ẹ́, pariwo \"Ṣé o wà dáadáa?\", wò bóyá ó ń mí bó ṣe yẹ.", "Pe 911 (tàbí nọ́mbà ti ìlú rẹ), tàbí nà ìka sí ẹnì kan láti pè àti ẹlòmíì láti mú AED wá.", "Fóònù lórí speaker: àdírẹ́sì kọ́kọ́, lẹ́yìn náà ohun tó ṣẹlẹ̀. Dúró lórí ìpè.", "Tọ́jú: ṣèrànwọ́ títí àwọn tí a kọ́ yóò fi dé."],
          words: [["Olùgbọ́ ìpè (dispatcher)", "ẹni tí a kọ́ tó ń gbé ìpè 911, tó ń rán ìrànlọ́wọ́, tó sì lè sọ ohun tí o máa ṣe fún ọ."], ["Kò dáhùn (unresponsive)", "ẹni tí kò mira, tí kò ṣí ojú tàbí tí kò dáhùn nígbà tí o tẹ̀ ẹ́ tí o sì pariwo."], ["Òfin Good Samaritan", "òfin ìpínlẹ̀ tó ń dáàbò bo àwọn tó ṣèrànwọ́ nínú pàjáwìrì pẹ̀lú èrò rere; àwọn àlàyé rẹ̀ yàtọ̀ láti ìpínlẹ̀ sí ìpínlẹ̀."]],
          slides: [
            { title: "Ṣàyẹ̀wò, pè, tọ́jú", bullets: ["Ṣàyẹ̀wò: ṣé ibi ìṣẹ̀lẹ̀ kò léwu? Ṣé ẹni náà ń dáhùn?", "Pè: 911 tàbí nọ́mbà pàjáwìrì ti ìlú rẹ", "Tọ́jú: ṣèrànwọ́ títí àwọn tí a kọ́ yóò fi dé"] },
            { title: "Ṣàyẹ̀wò ẹni náà", bullets: ["Tẹ èjìká kí o sì pariwo \"Ṣé o wà dáadáa?\"", "Wo àyà bóyá ó ń mí bó ṣe yẹ", "Mímí gúlẹ́gúlẹ́ KÌ Í ṣe mímí tó yẹ"] },
            { title: "Pè kedere", bullets: ["Nà ìka sí ẹnì kan: \"Ìwọ, pe 911\"", "Ní kí ẹlòmíì mú AED wá", "Àdírẹ́sì kọ́kọ́, lẹ́yìn náà ohun tó ṣẹlẹ̀", "Dúró lórí ìpè; olùgbọ́ ìpè yóò ràn ọ́ lọ́wọ́"] }
          ],
          sources: [MEDLINE_CPR, REDCROSS],
          tryIt: "Kọ gbólóhùn kan tí o máa sọ fún 911 láti ilé rẹ: àdírẹ́sì rẹ lódindi pẹ̀lú oríta ọ̀nà tó sún mọ́ jù, lẹ́yìn náà \"ọkùnrin kan ṣubú lulẹ̀ kò sì mí\". Kà á sókè lẹ́ẹ̀mejì títí o fi lè sọ ọ́ láìwò ìwé.",
          youCanNow: "ṣàyẹ̀wò ibi ìṣẹ̀lẹ̀ àti ẹni náà, kí o sì pe 911 pẹ̀lú ọ̀rọ̀ tó yé.",
          quickCheck: [
            { objective: "O1", q: "O rí ọkùnrin kan tó dùbúlẹ̀ lójú títì, ọkọ̀ sì ń kọjá. Kí ni o kọ́kọ́ ṣe?", options: ["Sá lọ bá a lẹ́sẹ̀kẹsẹ̀", "Rí i dájú pé ibẹ̀ kò léwu fún ọ, lẹ́yìn náà pe 911", "Bẹ̀rẹ̀ CPR lójú títì", "Ya fídíò rẹ̀"], answer: 1, why: "Ṣíṣàyẹ̀wò pé ibi ìṣẹ̀lẹ̀ kò léwu ló kọ́kọ́ wá; tí kò bá dára, dúró sẹ́yìn kí o sì pè." },
            { objective: "O1", q: "Lórí ìpè sí 911, kí ni o kọ́kọ́ sọ?", options: ["Ìtàn ìgbésí ayé rẹ", "Ìtàn àìsàn ẹni náà", "Àdírẹ́sì tàbí ibi tí ẹ wà", "Irú fóònù rẹ"], answer: 2, why: "Àdírẹ́sì ló kọ́kọ́ wá kí wọ́n lè rán ìrànlọ́wọ́ bí ìpè bá tilẹ̀ já." }
          ]
        },
        {
          title: "CPR Ọwọ́-nìkan: tẹ̀ ẹ́ gidigidi àti kíákíá",
          objectives: ["O2"],
          minutes: 6,
          goal: "To àwọn ìgbésẹ̀ CPR Ọwọ́-nìkan ní ètò tó tọ́.",
          text: [
            "Nígbà tí àgbàlagbà kan bá ṣubú lójijì, tí kò dáhùn, tí kò sì mí bó ṣe yẹ, ọkàn rẹ̀ lè ti dúró. A ń pè é ní ìdádúró ọkàn (cardiac arrest). CPR ń ti ẹ̀jẹ̀ lọ sí ọpọlọ títí AED àti àwọn òṣìṣẹ́ pàjáwìrì yóò fi dé.",
            "American Heart Association ń kọ́ni ní CPR Ọwọ́-nìkan fún ẹnikẹ́ni tí a kò kọ́ tàbí tí kò ní ìgboyà láti fẹ́ èémí sí ẹnu ẹlòmíì: pe 911, lẹ́yìn náà tẹ àárín àyà gidigidi àti kíákíá. O kò nílò láti wá ìlù ọkàn (pulse) àyàfi tí o bá jẹ́ òṣìṣẹ́ ìlera.",
            "Kúnlẹ̀ lẹ́gbẹ̀ẹ́ ẹni náà lórí ilẹ̀ tó le tó sì tẹ́jú. Fi ìpìlẹ̀ àtẹ́lẹwọ́ kan sí àárín àyà, ọwọ́ kejì lé e lórí, apá rẹ nà tààrà, èjìká rẹ lókè ọwọ́ rẹ. Tẹ̀ ẹ́ wọlẹ̀ nǹkan bí inch 2 (sẹ̀ǹtímítà 5), ní ìgbà 100 sí 120 ní ìṣẹ́jú kan, kí o sì jẹ́ kí àyà padà sókè pátápátá ní ìgbà kọ̀ọ̀kan.",
            "Máa bá a lọ títí AED yóò fi ṣetán, títí àwọn tí a kọ́ yóò fi gbà á, tàbí títí ẹni náà yóò fi bẹ̀rẹ̀ sí í mí bó ṣe yẹ. CPR ń mú ni rẹ̀wẹ̀sì: tí ẹlòmíì bá mọ̀ ọ́n ṣe, ẹ máa pàrọ̀ ní nǹkan bí ìṣẹ́jú méjì-méjì láìdúró púpọ̀. Kíláàsì ń jẹ́ kí o ṣe àṣeṣe jíjìn náà lórí manikin; má ṣe àṣeṣe lórí ènìyàn gidi láéláé."
          ],
          steps: ["Kò dáhùn, kò sì mí bó ṣe yẹ: pe 911 kí o sì rán ẹnì kan lọ mú AED.", "Tẹ́ ẹni náà sí ẹ̀yìn lórí ilẹ̀ tó le tó sì tẹ́jú.", "Ìpìlẹ̀ àtẹ́lẹwọ́ kan sí àárín àyà, ọwọ́ kejì lé e lórí.", "Apá nà tààrà, èjìká lókè ọwọ́.", "Tẹ̀ ẹ́ jìn tó nǹkan bí inch 2, ìgbà 100 sí 120 ní ìṣẹ́jú kan; jẹ́ kí àyà padà sókè pátápátá.", "Má ṣe dúró títí AED, àwọn tí a kọ́, tàbí mímí tó yẹ yóò fi dé."],
          words: [["CPR", "cardiopulmonary resuscitation: títẹ àyà (àti nígbà míì fífẹ́ èémí ìgbàlà) tó ń jẹ́ kí ẹ̀jẹ̀ máa ṣàn nígbà tí ọkàn bá dúró."], ["Ìdádúró ọkàn (cardiac arrest)", "nígbà tí ọkàn bá dúró lójijì tí kò fa ẹ̀jẹ̀ mọ́; ẹni náà ṣubú kò sì mí bó ṣe yẹ."], ["Títẹ àyà (compression)", "títẹ àyà wọlẹ̀ lẹ́ẹ̀kan."], ["Manikin", "ère ara àṣeṣe tí a ń lò ní kíláàsì CPR."]],
          slides: [
            { title: "Ìgbà tí o máa bẹ̀rẹ̀ CPR", bullets: ["Àgbàlagbà ṣubú kò sì dáhùn", "Kò mí bó ṣe yẹ, tàbí ó ń mí gúlẹ́gúlẹ́ nìkan", "Kọ́kọ́ pe 911 kí o sì rán ẹnì kan lọ mú AED"] },
            { title: "Ọwọ́ ní ibi tó tọ́", bullets: ["Ìpìlẹ̀ àtẹ́lẹwọ́ kan sí àárín àyà", "Ọwọ́ kejì lé e lórí", "Apá nà tààrà, èjìká lókè ọwọ́"] },
            { title: "Gidigidi àti kíákíá", bullets: ["Jíjìn tó nǹkan bí inch 2 (5 cm)", "Ìgbà 100 sí 120 ní ìṣẹ́jú kan", "Jẹ́ kí àyà padà sókè pátápátá"] },
            { title: "Máa bá a lọ", bullets: ["Títí AED yóò fi ṣetán tàbí àwọn olùrànlọ́wọ́ yóò fi gbà á", "Pàrọ̀ pẹ̀lú olùrànlọ́wọ́ ní nǹkan bí ìṣẹ́jú 2-2", "Ṣe àṣeṣe jíjìn lórí manikin ní kíláàsì"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR],
          tryIt: "Kúnlẹ̀ lẹ́gbẹ̀ẹ́ ìrọ̀rí tó le tàbí aṣọ ìnura tí a ká sórí ilẹ̀ (kì í ṣe ènìyàn láéláé). Gbé ọwọ́ rẹ bí a ṣe fi hàn, apá rẹ nà tààrà. Ṣètò aago fóònù fún ìṣẹ́jú-àáyá 30 kí o sì ka iye ìgbà tí o tẹ̀ ẹ́ sókè. Gbìyànjú láti tẹ̀ ẹ́ ní ìgbà 50 sí 60 nínú ìṣẹ́jú-àáyá 30, èyí tó bá 100 sí 120 ní ìṣẹ́jú kan mu.",
          youCanNow: "to àwọn ìgbésẹ̀ CPR Ọwọ́-nìkan kí o sì tẹ̀ ẹ́ ní ìyára tó tọ́.",
          quickCheck: [
            { objective: "O2", q: "Ibo ni ọwọ́ rẹ máa wà fún CPR àgbàlagbà?", options: ["Lórí ikùn", "Lórí èjìká òsì", "Lórí ọrùn", "Ní àárín àyà"], answer: 3, why: "Ìpìlẹ̀ àtẹ́lẹwọ́ kan máa wà ní àárín àyà, ọwọ́ kejì sì lé e lórí." },
            { objective: "O2", q: "Báwo ni o ṣe máa tẹ̀ ẹ́ yára tó nínú CPR?", options: ["Ìgbà 100 sí 120 ní ìṣẹ́jú kan", "Nǹkan bí ìgbà 20 ní ìṣẹ́jú kan", "Lẹ́ẹ̀kan ní ìṣẹ́jú-àáyá 10-10", "Bí o ṣe lè lọ́ra tó"], answer: 0, why: "Ìtọ́sọ́nà ni títẹ̀ ìgbà 100 sí 120 ní ìṣẹ́jú kan, kí àyà máa padà sókè ní ìgbà kọ̀ọ̀kan." }
          ]
        },
        {
          title: "Lílo AED, àti ohun tí kíláàsì CPR kíkún ń fi kún un",
          objectives: ["O2"],
          minutes: 5,
          goal: "To àwọn ìgbésẹ̀ lílo AED pẹ̀lú CPR.",
          text: [
            "AED (automated external defibrillator) jẹ́ àpótí kékeré tó lè fi ìtanná (shock) dá ọkàn padà sí ìlù tó yẹ. O máa rí wọn ní ilé-ìwé, ibi eré-ìdárayá, pápákọ̀ òfurufú, ọ́fíìsì, ilé ìtajà ńlá àti ilé ìjọsìn, nígbà púpọ̀ nínú àpótí ògiri tó ní àmì ọkàn àti mànàmáná.",
            "A ṣe AED fún àwọn tí a kò kọ́ rárá. Tan án, yóò sì máa bá ọ sọ̀rọ̀. Ṣí àyà sílẹ̀, nù ún gbẹ, fi àwọn pad sí ibi tí àwòrán fi hàn, kí o sì so wáyà mọ́ ọn tí ó bá yẹ. Gbogbo ènìyàn máa dúró kúrò nígbà tí ó ń ṣàyẹ̀wò ọkàn. Tí ó bá sọ pé kí o fún un ní ìtanná, rí i dájú pé ẹnikẹ́ni kò fọwọ́ kan ẹni náà kí o sì tẹ bọ́tìnnì. Lẹ́yìn náà padà sí CPR lẹ́sẹ̀kẹsẹ̀, bí AED ṣe sọ fún ọ.",
            "Lo AED ní kété tí ó bá dé, kí o sì tẹ̀lé ohùn rẹ̀ gẹ́lẹ́. Má ṣe dá CPR dúró láti lọ wá a fúnra rẹ tí ẹlòmíì bá lè mú un wá.",
            "Nínú kíláàsì CPR kíkún, o tún máa kọ́ fífẹ́ èémí ìgbàlà: títẹ̀ 30, lẹ́yìn náà èémí 2, léraléra. O tún máa kọ́ CPR fún ọmọdé àti ọmọ ọwọ́, èyí tó yàtọ̀. Ṣe àṣeṣe àwọn ìgbésẹ̀ wọ̀nyí ní kíláàsì pẹ̀lú olùkọ́."
          ],
          steps: ["Máa ṣe CPR lọ nígbà tí ẹnì kan ń mú AED bọ̀.", "Tan AED kí o sì fetí sílẹ̀.", "Ṣí àyà sílẹ̀ kí o sì nù ún gbẹ; fi àwọn pad sí ibi tí àwòrán fi hàn.", "Dúró kúrò nígbà tí ó ń ṣàyẹ̀wò; ẹnikẹ́ni kò gbọdọ̀ fọwọ́ kan ẹni náà.", "Tí ó bá sọ pé shock: gbogbo ènìyàn kúrò, tẹ bọ́tìnnì.", "Padà sí CPR lẹ́sẹ̀kẹsẹ̀ bí ó ṣe sọ fún ọ."],
          words: [["AED", "automated external defibrillator: àpótí tó ń ṣàyẹ̀wò ọkàn, tí ó bá sì yẹ, ó ń fún un ní ìtanná láti tún ìlù rẹ̀ ṣe. Ó ń sọ̀rọ̀ láti tọ́ ọ sọ́nà ní ìgbésẹ̀ kọ̀ọ̀kan."], ["Pad", "àwọn ìwé lẹ̀mọ́lẹ̀mọ́ tó ní wáyà tí a ń lẹ̀ mọ́ àyà tí kò ní aṣọ kí AED lè ṣàyẹ̀wò ọkàn kí ó sì fún un ní ìtanná."], ["Èémí ìgbàlà (rescue breaths)", "èémí tí o ń fẹ́ sí ẹnu ẹni náà nígbà CPR; a ń kọ́ ọ ní kíláàsì kíkún."]],
          slides: [
            { title: "Ohun tí AED ń ṣe", bullets: ["Ó ń ṣàyẹ̀wò ìlù ọkàn", "Ó ń fúnni ní ìtanná tó bá yẹ nìkan", "Ó ń sọ̀rọ̀ láti tọ́ ọ sọ́nà ní gbogbo ìgbésẹ̀"] },
            { title: "Àwọn ìgbésẹ̀ AED", bullets: ["Tan án kí o sì fetí sílẹ̀", "Àyà tí kò ní aṣọ tó gbẹ; pad sí ibi tí àwòrán fi hàn", "Dúró kúrò nígbà tí ó ń ṣàyẹ̀wò"] },
            { title: "Tí ó bá sọ pé shock", bullets: ["Rí i dájú pé ẹnikẹ́ni kò fọwọ́ kan ẹni náà", "Tẹ bọ́tìnnì shock", "Padà sí CPR lẹ́sẹ̀kẹsẹ̀"] },
            { title: "Kíláàsì kíkún ń fi kún un", bullets: ["Èémí ìgbàlà: títẹ̀ 30, lẹ́yìn náà èémí 2", "CPR fún ọmọdé àti ọmọ ọwọ́", "Àṣeṣe ọwọ́ pẹ̀lú olùkọ́"] }
          ],
          sources: [MEDLINE_CPR, AHA_CPR, REDCROSS],
          tryIt: "Wá ibi tí AED tó sún mọ́ jù wà níbi iṣẹ́, ilé-ìwé, ibi eré-ìdárayá tàbí ilé ìjọsìn rẹ. Béèrè lọ́wọ́ alábòójútó tàbí wá àmì rẹ̀. Kọ ibi tí ó wà gẹ́lẹ́ sílẹ̀, kí o sì ya ibi méjì tí pad máa wà sórí àwòrán ènìyàn onígi láti orí láìwò.",
          youCanNow: "to àwọn ìgbésẹ̀ lílo AED pẹ̀lú CPR kí o sì sọ ibi tí èyí tó sún mọ́ jù wà.",
          quickCheck: [
            { objective: "O2", q: "AED sọ pé ó yẹ kí a fún un ní shock. Kí ni o máa ṣe kí o tó tẹ bọ́tìnnì?", options: ["Di ọwọ́ ẹni náà mú", "Bọ́ àwọn pad kúrò", "Rí i dájú pé ẹnikẹ́ni kò fọwọ́ kan ẹni náà", "Fún ẹni náà ní omi"], answer: 2, why: "Gbogbo ènìyàn gbọdọ̀ kúrò kí ìtanná náà lè lọ sí ara ẹni náà nìkan." },
            { objective: "O2", q: "AED ti fúnni ní shock. Kí ló kàn?", options: ["Dúró jẹ́ẹ́ de ọkọ̀ aláìsàn", "Padà sí CPR bí AED ṣe sọ fún ọ", "Pa AED", "Gbé ẹni náà jókòó"], answer: 1, why: "Lẹ́yìn ìtanná, padà sí CPR lẹ́sẹ̀kẹsẹ̀, kí o máa tẹ̀lé ohùn AED." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Ṣe kíá kí o sì jẹ́ kí ọkàn máa lù",
        questions: [
          { objective: "O1", q: "Kí ni ọ̀rọ̀ mẹ́ta àkọ́kọ́ fún pàjáwìrì èyíkéyìí?", options: ["Dúró, wò, rìn", "Ṣàyẹ̀wò, pè, tọ́jú", "Sá, sá pamọ́, sọ", "Béèrè, ya fídíò, fi sórí ayélujára"], answer: 1, why: "Ṣàyẹ̀wò ibi ìṣẹ̀lẹ̀ àti ẹni náà, pe 911, lẹ́yìn náà tọ́jú títí ìrànlọ́wọ́ yóò fi dé." },
          { objective: "O1", q: "Ènìyàn mẹ́ta ń wo obìnrin kan tó ṣubú lulẹ̀. Báwo ni o ṣe máa rí ìrànlọ́wọ́ kíákíá jù?", options: ["Nà ìka sí ẹnì kan: \"Ìwọ, pe 911,\" kí o sì ní kí ẹlòmíì mú AED wá", "Pariwo sí èrò pé \"Kí ẹnì kan pè!\"", "Dúró de ẹlòmíì láti ṣe é", "Fi sórí ìkànnì àjọlò"], answer: 0, why: "Fífún ẹnì kan ní iṣẹ́ tó yé ń dènà kí gbogbo ènìyàn máa rò pé ẹlòmíì ti pè." },
          { objective: "O2", q: "Báwo ni o ṣe máa tẹ àyà àgbàlagbà jìn tó nínú CPR?", options: ["Fọwọ́ kàn án díẹ̀ nìkan", "Nǹkan bí ìdajì inch", "Bí o ṣe lè tẹ̀ ẹ́ jìn tó", "Nǹkan bí inch 2 (5 cm)"], answer: 3, why: "Títẹ àyà àgbàlagbà máa ń jìn tó nǹkan bí inch 2, kí àyà sì padà sókè." },
          { objective: "O2", q: "Ìgbà wo ni o yẹ kí o bẹ̀rẹ̀ CPR Ọwọ́-nìkan fún àgbàlagbà?", options: ["Nígbà tí ó ń sọ̀rọ̀ ṣùgbọ́n ó rẹ̀ ẹ́", "Nígbà tí kò dáhùn tí kò sì mí bó ṣe yẹ", "Nígbà tí ó ní ọgbẹ́ kékeré", "Nígbà tí ó ń wúkọ́ gidigidi"], answer: 1, why: "CPR wà fún ẹni tí kò dáhùn tí kò sì mí bó ṣe yẹ, tàbí tí ó ń mí gúlẹ́gúlẹ́ nìkan." },
          { objective: "O2", q: "Ta ló lè lo AED?", options: ["Ẹnikẹ́ni; ó ń sọ̀rọ̀ láti tọ́ ọ sọ́nà", "Àwọn dókítà nìkan", "Àwọn panápaná nìkan", "Àwọn tó ju ọmọ ọdún 30 lọ nìkan"], answer: 0, why: "A ṣe AED fún àwọn tí a kò kọ́, ó sì ń fúnni ní ìtọ́ni ní ohùn." }
        ]
      }
    },
    {
      name: "Orí 2: Àwọn pàjáwìrì tó wọ́pọ̀ àti gbígba ìwé ẹ̀rí",
      lessons: [
        {
          title: "Nǹkan tó há sí ọ̀fun àti ẹ̀jẹ̀ tó ń ṣàn púpọ̀",
          objectives: ["O3", "O4"],
          minutes: 6,
          goal: "Dá nǹkan tó há sí ọ̀fun mọ̀, kí o sì ṣàlàyé bí o ṣe lè dá ẹ̀jẹ̀ tó ń ṣàn púpọ̀ dúró nípa títẹ̀ ẹ́ mọ́lẹ̀ ní tààrà.",
          text: [
            "Nǹkan tó há sí ọ̀fun: ẹni náà lè di ọ̀fun rẹ̀ mú, kò lè sọ̀rọ̀, ó lè wúkọ́ láìlágbára, ó lè ké ohùn tín-ín-rín tó ga, tàbí kí ara rẹ̀ máa di àwọ̀ búlúù. Béèrè pé, \"Ṣé nǹkan há sí ọ̀fun rẹ? Ṣé o lè sọ̀rọ̀?\" Tí ó bá lè wúkọ́ gidigidi tí ó sì lè sọ̀rọ̀, má ṣe lù ú; sọ fún un pé kí ó máa wúkọ́ lọ.",
            "Tí kò bá lè sọ̀rọ̀, wúkọ́ tàbí mí, ní kí ẹnì kan pe 911. Ìtọ́sọ́nà US fi ọ̀nà méjì hàn láti ti nǹkan náà jáde: lílu ẹ̀yìn gidigidi láàárín àwọn egungun èjìká pẹ̀lú ìpìlẹ̀ àtẹ́lẹwọ́ (back blows), àti títì ikùn wọlé àti sókè kíákíá ní òkè ìdodo díẹ̀ (abdominal thrusts). Aboyún tàbí ẹni tó sanra gan-an máa gba títì àyà dípò rẹ̀. Tí ẹni náà bá dákú, pe 911, rọra gbé e sílẹ̀ sórí ilẹ̀ kí o sì bẹ̀rẹ̀ CPR. Kọ́ àwọn ìgbésẹ̀ wọ̀nyí kí o sì ṣe àṣeṣe wọn ní kíláàsì; má ṣe àṣeṣe títì ikùn lórí ènìyàn gidi.",
            "Ẹ̀jẹ̀ tó ń ṣàn púpọ̀: pe 911. Wọ ìbọ̀wọ́ tí o bá ní, tàbí lo ọ̀rá (plastic bag) gẹ́gẹ́ bí ìdáàbòbò. Tẹ̀ ẹ́ gidigidi, gẹ́lẹ́ lórí ọgbẹ́ náà, pẹ̀lú aṣọ tó mọ́, gauze tàbí kódà aṣọ tí a wọ̀, kí o sì máa tẹ̀ ẹ́ lọ. Má ṣe gbé e sókè láti wò ó. Tí ẹ̀jẹ̀ bá rin aṣọ náà, fi aṣọ míì lé e lórí kí o sì máa tẹ̀ ẹ́ lọ.",
            "Má ṣe fa nǹkan tó wọ inú ọgbẹ́ jáde; fi aṣọ yí i ká. Tourniquet wà fún ẹ̀jẹ̀ tó lè pani lórí apá tàbí ẹsẹ̀ nígbà tí títẹ̀ kò tó; àwọn kíláàsì Stop the Bleed àti ìrànlọ́wọ́ àkọ́kọ́ ń kọ́ni bí a ṣe ń lò ó."
          ],
          steps: ["Nǹkan há sí ọ̀fun: béèrè \"Ṣé nǹkan há sí ọ̀fun rẹ? Ṣé o lè sọ̀rọ̀?\"", "Ó lè wúkọ́ ó sì lè sọ̀rọ̀: jẹ́ kí ó máa wúkọ́ lọ.", "Kò lè sọ̀rọ̀ tàbí mí: pe 911 kí o sì ṣe ìrànlọ́wọ́ àkọ́kọ́ tí o kọ́ ní kíláàsì (lílu ẹ̀yìn àti títì ikùn).", "Ó dákú: gbé e sílẹ̀ sórí ilẹ̀, bẹ̀rẹ̀ CPR.", "Ẹ̀jẹ̀: pe 911, ìbọ̀wọ́ tàbí ìdáàbòbò, tẹ ọgbẹ́ náà gidigidi pẹ̀lú aṣọ tó mọ́.", "Ẹ̀jẹ̀ rin aṣọ: fi aṣọ míì kún un lórí; má ṣe gbé aṣọ àkọ́kọ́ sókè."],
          words: [["Títì ikùn (abdominal thrusts)", "títì kíákíá wọlé àti sókè ní òkè ìdodo díẹ̀ láti ti nǹkan tó há jáde; a tún ń pè é ní Heimlich maneuver."], ["Lílu ẹ̀yìn (back blows)", "lílu gidigidi láàárín àwọn egungun èjìká pẹ̀lú ìpìlẹ̀ àtẹ́lẹwọ́ láti tú nǹkan tó há sílẹ̀."], ["Títẹ̀ ní tààrà (direct pressure)", "títẹ gẹ́lẹ́ lórí ọgbẹ́ gidigidi láti dín ẹ̀jẹ̀ kù kí ó sì dá a dúró."], ["Tourniquet", "okùn líle tí a ń dè mọ́ apá tàbí ẹsẹ̀ lókè ọgbẹ́ láti dá ẹ̀jẹ̀ tó lè pani dúró; a ń kọ́ ọ ní kíláàsì."]],
          slides: [
            { title: "Àwọn àmì nǹkan tó há sí ọ̀fun", bullets: ["Ó di ọ̀fun mú, kò lè sọ̀rọ̀", "Ìwúkọ́ aláìlágbára tàbí ohùn tín-ín-rín tó ga", "Ara ń di àwọ̀ búlúù"] },
            { title: "Nǹkan há sí ọ̀fun: kí ni o máa ṣe", bullets: ["Ó lè wúkọ́ ó sì lè sọ̀rọ̀: jẹ́ kí ó máa wúkọ́", "Kò lè sọ̀rọ̀: pe 911, lílu ẹ̀yìn àti títì ikùn", "Ó dákú: gbé e sílẹ̀ sórí ilẹ̀, bẹ̀rẹ̀ CPR"] },
            { title: "Ẹ̀jẹ̀ tó ń ṣàn púpọ̀", bullets: ["Pe 911; ìbọ̀wọ́ tàbí ìdáàbòbò", "Tẹ̀ ẹ́ gidigidi, gẹ́lẹ́ lórí ọgbẹ́ náà", "Ẹ̀jẹ̀ rin aṣọ: fi aṣọ míì kún un, máa tẹ̀ ẹ́ lọ"] },
            { title: "Má ṣe", bullets: ["Má ṣe gbé aṣọ sókè láti wò ó", "Má ṣe fa nǹkan tó wọ inú ọgbẹ́ jáde", "Má ṣe àṣeṣe títì ikùn lórí ènìyàn gidi"] }
          ],
          sources: [MEDLINE_CHOKING, MEDLINE_BLEEDING, REDCROSS],
          tryIt: "Fi aṣọ ìnura tí a ká sórí apá iwájú rẹ. Fi àtẹ́lẹwọ́ rẹ tẹ̀ ẹ́ gidigidi fún ìṣẹ́jú-àáyá 60 lórí aago láìgbé e sókè. Lẹ́yìn náà fi aṣọ ìnura kejì lé e lórí kí o sì máa tẹ̀ ẹ́ lọ. Kọ ìlà méjì: bí ó ti ṣòro tó láti máa tẹ̀ ẹ́ lọ, àti àmì mẹ́ta nǹkan tó há sí ọ̀fun láti inú ẹ̀kọ́ yìí.",
          youCanNow: "dá àwọn àmì nǹkan tó há sí ọ̀fun mọ̀ kí o sì dá ẹ̀jẹ̀ tó ń ṣàn púpọ̀ dúró nípa títẹ̀ ẹ́ mọ́lẹ̀ gidigidi ní tààrà.",
          quickCheck: [
            { objective: "O3", q: "Obìnrin kan ń wúkọ́ gidigidi nígbà oúnjẹ ọ̀sán, ó sì tún lè sọ̀rọ̀. Kí ni o máa ṣe?", options: ["Lu ẹ̀yìn rẹ̀ gidigidi lẹ́sẹ̀kẹsẹ̀", "Ti ikùn rẹ̀ (abdominal thrusts)", "Gbà á níyànjú láti máa wúkọ́ lọ kí o sì dúró tì í", "Tẹ́ ẹ sílẹ̀ sórí ilẹ̀"], answer: 2, why: "Tí ẹnì kan bá lè wúkọ́ gidigidi tí ó sì lè sọ̀rọ̀, jẹ́ kí ó máa wúkọ́ lọ; má ṣe lù ú." },
            { objective: "O4", q: "Ẹ̀jẹ̀ rin aṣọ tí o fi ń tẹ ọgbẹ́ kan. Kí ni o máa ṣe?", options: ["Gbé aṣọ náà sókè láti wò ó", "Dá títẹ̀ dúró", "Fi omi fọ ọgbẹ́ náà", "Fi aṣọ míì lé e lórí kí o sì máa tẹ̀ ẹ́ lọ"], answer: 3, why: "Fífi aṣọ kún un ń jẹ́ kí títẹ̀ máa bá a lọ; gbígbé aṣọ sókè lè mú kí ẹ̀jẹ̀ tún bẹ̀rẹ̀." }
          ]
        },
        {
          title: "Dídá ìkọlù ọkàn àti àrùn ẹ̀gbà mọ̀",
          objectives: ["O5"],
          minutes: 5,
          goal: "Dá àwọn àmì ìkìlọ̀ ìkọlù ọkàn àti àrùn ẹ̀gbà mọ̀.",
          text: [
            "Ìkọlù ọkàn (heart attack) ni nígbà tí ẹ̀jẹ̀ kò bá lè ṣàn dé apá kan ọkàn. Àwọn àmì tó wọ́pọ̀: ìrora àyà tàbí ìfúnpọ̀ àyà tó lè tàn dé àgbọ̀n, apá, ẹ̀yìn tàbí ikùn, èémí kúkúrú, òógùn tútù, ara tí kò yá tàbí òòyì, àti àárẹ̀ tí kò wọ́pọ̀. Àwọn obìnrin, àwọn àgbàlagbà àti àwọn tó ní àrùn ṣúgà (diabetes) lè ní àmì tó fúyẹ́ tàbí tó yàtọ̀.",
            "Tí o bá rò pé ìkọlù ọkàn ni, pe 911 lẹ́sẹ̀kẹsẹ̀. Má ṣe dúró láti wò bóyá yóò kọjá, má sì jẹ́ kí ẹni náà yí ọ lọ́kàn padà. Jẹ́ kí ó jókòó kí ó sì sinmi, tú aṣọ tó há mọ́ ọn, kí o sì dúró tì í. Má ṣe fún un ní oògùn kankan àyàfi oògùn tirẹ̀ tí dókítà kọ fún un tàbí tí olùgbọ́ ìpè 911 bá sọ fún ọ. Tí kò bá dáhùn mọ́ tí kò sì mí bó ṣe yẹ, bẹ̀rẹ̀ CPR kí o sì lo AED.",
            "Àrùn ẹ̀gbà (stroke) ni nígbà tí ẹ̀jẹ̀ kò bá lè ṣàn dé apá kan ọpọlọ tàbí tí iṣan ẹ̀jẹ̀ kan bá bẹ́. CDC ń kọ́ni ní B.E. F.A.S.T.: Balance (òòyì òjijì tàbí àìlè dúró dáadáa), Eyes (ìṣòro rírí nǹkan lójijì), Face (ní kí ó rẹ́rìn-ín; ṣé apá kan ojú rẹ̀ wọ́ sílẹ̀?), Arms (ní kí ó gbé apá méjèèjì sókè; ṣé ọ̀kan ń já wálẹ̀?), Speech (ṣé ọ̀rọ̀ rẹ̀ ń dàrú tàbí ó ṣàjèjì?), Time (pe 911 lẹ́sẹ̀kẹsẹ̀).",
            "Kíyè sí àkókò tí àwọn àmì náà bẹ̀rẹ̀ kí o sì sọ fún àwọn òṣìṣẹ́ pàjáwìrì. Pe ọkọ̀ aláìsàn; má ṣe fi ọkọ̀ gbé ẹni náà lọ sí ilé ìwòsàn fúnra rẹ."
          ],
          steps: ["Àmì ìkọlù ọkàn: ìrora tàbí ìfúnpọ̀ àyà, èémí kúkúrú, òógùn tútù, ara kò yá, òòyì.", "Pe 911 lẹ́sẹ̀kẹsẹ̀; jẹ́ kí ó jókòó, tú aṣọ rẹ̀, dúró tì í.", "Kò sí oògùn àyàfi tirẹ̀ tàbí tí olùgbọ́ ìpè bá sọ.", "Àrùn ẹ̀gbà: ṣàyẹ̀wò B.E. F.A.S.T.", "Kíyè sí àkókò tí àmì bẹ̀rẹ̀; pe ọkọ̀ aláìsàn, má ṣe gbé e lọ fúnra rẹ."],
          words: [["Ìkọlù ọkàn (heart attack)", "nígbà tí ẹ̀jẹ̀ kò bá lè ṣàn dé apá kan ọkàn; ẹni náà sábà máa ń jí, ó sì ní ìrora tàbí ìfúnpọ̀ àyà."], ["Àrùn ẹ̀gbà (stroke)", "nígbà tí ẹ̀jẹ̀ kò bá lè ṣàn dé apá kan ọpọlọ tàbí tí iṣan ẹ̀jẹ̀ kan nínú ọpọlọ bá bẹ́."], ["B.E. F.A.S.T.", "Balance (ìdúró), Eyes (ojú), Face (ojú ara), Arms (apá), Speech (ọ̀rọ̀), Time (àkókò): ọ̀nà láti dá àrùn ẹ̀gbà mọ̀ kí o sì rántí láti pe 911."]],
          slides: [
            { title: "Àwọn àmì ìkọlù ọkàn", bullets: ["Ìrora tàbí ìfúnpọ̀ àyà; ó lè tàn dé àgbọ̀n, apá, ẹ̀yìn", "Èémí kúkúrú, òógùn tútù, ara kò yá", "Àwọn obìnrin àti àgbàlagbà lè ní àmì tó fúyẹ́"] },
            { title: "Ìkọlù ọkàn: kí ni o máa ṣe", bullets: ["Pe 911 báyìí; má ṣe dúró", "Jókòó, sinmi, tú aṣọ, dúró tì í", "Kò sí oògùn àyàfi tirẹ̀ tàbí tí olùgbọ́ ìpè bá sọ"] },
            { title: "Àrùn ẹ̀gbà: B.E. F.A.S.T.", bullets: ["Balance àti Eyes: òòyì òjijì tàbí ìṣòro rírí nǹkan", "Face wọ́ sílẹ̀, Arm ń já wálẹ̀, Speech ń dàrú", "Time: pe 911 lẹ́sẹ̀kẹsẹ̀"] },
            { title: "Àkókò ṣe pàtàkì", bullets: ["Kíyè sí ìgbà tí àwọn àmì bẹ̀rẹ̀", "Pe ọkọ̀ aláìsàn; má ṣe gbé e lọ fúnra rẹ"] }
          ],
          sources: [MEDLINE_HEART, CDC_STROKE],
          tryIt: "Kọ B.E. F.A.S.T. sílẹ̀ ní ẹ̀gbẹ́ ojú-ìwé kan. Lẹ́gbẹ̀ẹ́ lẹ́tà kọ̀ọ̀kan, kọ ìbéèrè tàbí àyẹ̀wò tí o máa lò, láti orí láìwò. Lẹ́yìn náà kọ́ ọ̀rẹ́ kan tàbí ẹbí kan ní rẹ̀ láàárín ìṣẹ́jú kan.",
          youCanNow: "dá àwọn àmì ìkìlọ̀ ìkọlù ọkàn àti àrùn ẹ̀gbà mọ̀ kí o sì pe 911 kíákíá.",
          quickCheck: [
            { objective: "O5", q: "Ẹ̀rín ẹ̀gbọ́n bàbá rẹ wọ́ sílẹ̀ ní apá kan, ọ̀rọ̀ rẹ̀ sì ń dàrú. Kí ni o máa ṣe?", options: ["Pe 911 lẹ́sẹ̀kẹsẹ̀ kí o sì kíyè sí àkókò", "Jẹ́ kí ó dùbúlẹ̀ kí ó sùn kí ó lè lọ", "Fi ọkọ̀ gbé e lọ sí ilé ìwòsàn fúnra rẹ", "Fún un ní oògùn ìrora"], answer: 0, why: "Àmì àrùn ẹ̀gbà nìwọ̀nyí; pe 911 lẹ́sẹ̀kẹsẹ̀, kíyè sí àkókò, kí ọkọ̀ aláìsàn gbé e lọ." },
            { objective: "O5", q: "Èwo ni àmì tó wọ́pọ̀ fún ìkọlù ọkàn?", options: ["Ọgbẹ́ kékeré ní ọwọ́", "Ìrora tàbí ìfúnpọ̀ àyà tó ń tàn dé apá tàbí àgbọ̀n", "Sín-ín", "Ara yíyún lórí ẹsẹ̀"], answer: 1, why: "Ìrora tàbí ìfúnpọ̀ àyà tó lè tàn ká jẹ́ àmì tó wọ́pọ̀ fún ìkọlù ọkàn." }
          ]
        },
        {
          title: "Gbígba ìwé ẹ̀rí: ètò ìmúrasílẹ̀ rẹ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Yan kíláàsì CPR àti ìrànlọ́wọ́ àkọ́kọ́ ní ojúkojú kí o sì kọ ètò ẹ̀kọ́ pẹ̀lú ọjọ́.",
          text: [
            "Ẹ̀kọ́ yìí ń fúnni ní ìmọ̀, kì í ṣe ìwé ẹ̀rí. Àwọn agbanisíṣẹ́ tó ń béèrè CPR àti ìrànlọ́wọ́ àkọ́kọ́ sábà máa ń fẹ́ káàdì láti ọ̀dọ̀ àjọ tí a mọ̀. Ní US, àwọn tí a mọ̀ jù ni American Red Cross àti American Heart Association. Àwọn méjèèjì ní ohun èlò wíwá kíláàsì lórí ojú-òpó wẹ́ẹ̀bù wọn.",
            "Yan kíláàsì tó bá ọ̀nà rẹ mu. Ọ̀pọ̀ iṣẹ́ ibi iṣẹ́ àti ti àwùjọ (ìtọ́jú ọmọdé, olùkọ́ eré-ìdárayá, ààbò, ilé oúnjẹ, àjọ aláìlérè) ń gba kíláàsì First Aid, CPR àti AED fún àgbàlagbà àti ọmọdé. Àwọn iṣẹ́ ìlera (olùrànlọ́wọ́ nọ́ọ̀sì, EMT, akẹ́kọ̀ọ́ oníṣègùn àti ti ilé oògùn) sábà máa ń nílò Basic Life Support (BLS). Béèrè lọ́wọ́ agbanisíṣẹ́ tàbí ètò rẹ èwo ni wọ́n ń gbà kí o tó sanwó.",
            "Ọ̀pọ̀ kíláàsì jẹ́ àdàlù: apá kan lórí ayélujára, lẹ́yìn náà ìpàdé ọgbọ́n ọwọ́ ní ojúkojú pẹ̀lú olùkọ́ àti manikin. Kíláàsì tó jẹ́ ti ayélujára nìkan tí kò ní ìdánwò ọwọ́ lè máà jẹ́ ìtẹ́wọ́gbà. Iye owó, gígùn kíláàsì àti bí káàdì ṣe pẹ́ tó yàtọ̀: ṣàyẹ̀wò ojú-òpó àjọ náà àti ọjọ́ tó wà lórí káàdì rẹ, kí o sì tún un ṣe kí ó tó parí.",
            "Béèrè nípa kíláàsì ọ̀fẹ́ tàbí tí owó rẹ̀ kéré: àwọn agbanisíṣẹ́ kan, àwọn ètò ìdàgbàsókè òṣìṣẹ́, ilé iṣẹ́ panápaná, ilé ìwòsàn àti àwọn ẹgbẹ́ àwùjọ ń ṣe wọ́n. OSHA sọ pé àwọn agbanisíṣẹ́ gbọdọ̀ ní àwọn ènìyàn ìrànlọ́wọ́ àkọ́kọ́ àti ohun èlò tó bá ewu ibi iṣẹ́ náà mu."
          ],
          steps: ["Béèrè lọ́wọ́ agbanisíṣẹ́ tàbí ètò rẹ kíláàsì tí wọ́n ń gbà (fún àpẹẹrẹ First Aid, CPR àti AED, tàbí BLS).", "Ṣí ohun èlò wíwá kíláàsì ti Red Cross tàbí American Heart Association.", "Yan kíláàsì ní ojúkojú tàbí àdàlù tó sún mọ́ ọ.", "Kọ orúkọ kíláàsì, ẹni tó ń fúnni ní káàdì, ibi, ọjọ́ àti iye owó.", "Fi ọjọ́ náà sínú kàlẹ́ńdà rẹ kí o sì ṣètò ìránnilétí kí káàdì tó parí."],
          words: [["Káàdì ìwé ẹ̀rí", "ẹ̀rí láti ọ̀dọ̀ àjọ ẹ̀kọ́ pé o yege ìdánwò ọgbọ́n ọwọ́; àwọn agbanisíṣẹ́ máa ń béèrè láti rí i."], ["BLS", "Basic Life Support: kíláàsì CPR fún àwọn òṣìṣẹ́ ìlera àti akẹ́kọ̀ọ́ ìlera."], ["Ẹ̀kọ́ àdàlù (blended learning)", "kíláàsì tí apá kan wà lórí ayélujára, apá kan sì wà ní ojúkojú, pẹ̀lú ìdánwò ọgbọ́n ọwọ́."], ["Pediatric", "fún ọmọdé àti ọmọ ọwọ́."]],
          slides: [
            { title: "Ẹ̀kọ́ ìmọ̀ ni èyí", bullets: ["Ó ń múra rẹ sílẹ̀; kò fún ọ ní ìwé ẹ̀rí", "Ìwé ẹ̀rí ń wá láti ọ̀dọ̀ àjọ tí a mọ̀", "Ní US: American Red Cross, American Heart Association"] },
            { title: "Yan kíláàsì tó tọ́", bullets: ["Ọ̀pọ̀ iṣẹ́: First Aid, CPR àti AED (àgbàlagbà àti ọmọdé)", "Iṣẹ́ ìlera: Basic Life Support (BLS)", "Béèrè lọ́wọ́ agbanisíṣẹ́ rẹ èwo ni wọ́n ń gbà"] },
            { title: "Kí o tó forúkọ sílẹ̀", bullets: ["Ó nílò ìdánwò ọgbọ́n ọwọ́ ní ojúkojú", "Ṣàyẹ̀wò iye owó, gígùn rẹ̀ àti bí káàdì ṣe pẹ́ tó", "Béèrè nípa kíláàsì ọ̀fẹ́ tàbí tí owó rẹ̀ kéré"] }
          ],
          sources: [REDCROSS, AHA_CPR, OSHA_FIRSTAID],
          tryIt: "Iṣẹ́ ìkẹyìn: ṣe Ètò Ìmúrasílẹ̀ Ìrànlọ́wọ́ Àkọ́kọ́ àti CPR tìrẹ lórí ojú-ìwé kan. Kọ nọ́mbà pàjáwìrì rẹ àti gbólóhùn àdírẹ́sì rẹ, ibi tí AED àti àpótí ìrànlọ́wọ́ àkọ́kọ́ tó sún mọ́ jù wà, àwọn ìgbésẹ̀ pàjáwìrì láti orí láìwò, àti kíláàsì ojúkojú kan tí o rí lórí ojú-òpó Red Cross tàbí AHA: orúkọ, ẹni tó ń fúnni ní ìwé ẹ̀rí, ibi àti ọjọ́.",
          youCanNow: "yan kíláàsì CPR àti ìrànlọ́wọ́ àkọ́kọ́ ní ojúkojú láti ọ̀dọ̀ àjọ tí a mọ̀, kí o sì ṣètò ìgbà tí o máa lọ.",
          quickCheck: [
            { objective: "O6", q: "O ti parí ẹ̀kọ́ ìmọ̀ yìí. Kí ló fún ọ?", options: ["Káàdì CPR tí agbanisíṣẹ́ rẹ gbọdọ̀ gbà", "Ìwé àṣẹ nọ́ọ̀sì", "Ìmọ̀ láti múra rẹ sílẹ̀ fún kíláàsì ìwé ẹ̀rí ní ojúkojú", "Àṣẹ láti kọ́ni ní CPR"], answer: 2, why: "Ẹ̀kọ́ yìí ń múra rẹ sílẹ̀; ìwé ẹ̀rí ń wá láti kíláàsì ojúkojú pẹ̀lú àjọ tí a mọ̀." },
            { objective: "O6", q: "O ń bẹ̀rẹ̀ ètò ẹ̀kọ́ olùrànlọ́wọ́ nọ́ọ̀sì. Kíláàsì CPR wo ni wọ́n ṣeé ṣe kí wọ́n fẹ́ jù?", options: ["Fídíò ayélujára nìkan láìsí ìdánwò ọwọ́", "Kò sí kíláàsì kankan", "Kíláàsì láti inú ìfiránṣẹ́ ìkànnì àjọlò", "Basic Life Support (BLS), lẹ́yìn tí o bá ti béèrè lọ́wọ́ ètò náà"], answer: 3, why: "Àwọn ètò ìlera sábà máa ń béèrè BLS; béèrè lọ́wọ́ ètò náà láti fìdí èyí tí wọ́n ń gbà múlẹ̀." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Àwọn pàjáwìrì tó wọ́pọ̀ àti gbígba ìwé ẹ̀rí",
        questions: [
          { objective: "O3", q: "Ọkùnrin kan di ọ̀fun rẹ̀ mú, kò sì lè sọ̀rọ̀ tàbí wúkọ́. Kí ni o máa ṣe?", options: ["Dúró títí ara rẹ̀ yóò fi yá", "Ní kí ẹnì kan pe 911 kí o sì ṣe ìrànlọ́wọ́ àkọ́kọ́ fún nǹkan tó há sí ọ̀fun", "Fún un ní omi mu", "Ní kí ó dùbúlẹ̀ kí ó sinmi"], answer: 1, why: "Ẹni tí kò lè sọ̀rọ̀ tàbí wúkọ́ ní nǹkan tó há sí ọ̀fun rẹ̀ gan-an; pe 911 kí o sì gbé ìgbésẹ̀." },
          { objective: "O4", q: "Kí ni ohun àkọ́kọ́ tí o máa ṣe fún ọgbẹ́ jíjìn tó ń ṣẹ̀jẹ̀ púpọ̀ (lẹ́yìn pípe 911)?", options: ["Tẹ̀ ẹ́ gidigidi, gẹ́lẹ́ lórí ọgbẹ́ náà, pẹ̀lú aṣọ tó mọ́", "Jẹ́ kí ó ṣẹ̀jẹ̀ kí ó lè mọ́", "Fi yìnyín sí i", "Ní kí ẹni náà máa rìn kiri"], answer: 0, why: "Títẹ̀ gidigidi ní tààrà ni ọ̀nà pàtàkì láti dá ẹ̀jẹ̀ tó ń ṣàn púpọ̀ dúró." },
          { objective: "O4", q: "Ègé dígí kan wọ inú ọgbẹ́. Kí ló yẹ kí o ṣe?", options: ["Fà á jáde kíákíá", "Tì í wọlé sí i", "Fi sílẹ̀ níbẹ̀ kí o sì fi aṣọ yí i ká", "Da omi sí i títí yóò fi jáde"], answer: 2, why: "Fífà á jáde lè mú kí ẹ̀jẹ̀ pọ̀ sí i; fi aṣọ yí i ká kí àwọn akọ́ṣẹ́mọṣẹ́ yọ ọ́." },
          { objective: "O5", q: "Nínú B.E. F.A.S.T., kí ni A dúró fún?", options: ["Allergy (ara kò gbà nǹkan)", "Address (àdírẹ́sì)", "Ambulance (ọkọ̀ aláìsàn)", "Arms (apá): ṣé apá kan ń já wálẹ̀?"], answer: 3, why: "A dúró fún Arms (apá): ní kí ẹni náà gbé apá méjèèjì sókè kí o sì wò bóyá ọ̀kan ń já wálẹ̀." },
          { objective: "O6", q: "Èwo ni ọ̀nà tó dára jù láti gba ìwé ẹ̀rí CPR tí iṣẹ́ yóò gbà?", options: ["Kíláàsì ojúkojú tàbí àdàlù láti Red Cross tàbí AHA", "Wíwo fídíò lórí ayélujára láìsí ìdánwò", "Kíka ẹ̀kọ́ yìí lẹ́ẹ̀mejì", "Bíbéèrè kí ọ̀rẹ́ kan buwọ́ lu ìwé kékeré kan"], answer: 0, why: "Àwọn agbanisíṣẹ́ sábà máa ń fẹ́ káàdì láti ọ̀dọ̀ àjọ tí a mọ̀ pẹ̀lú ìdánwò ọgbọ́n ọwọ́." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Ìmọ̀ Ìrànlọ́wọ́ Àkọ́kọ́ àti CPR",
    questions: [
      { objective: "O1", q: "O rí alábàáṣiṣẹ́ rẹ kan lórí ilẹ̀ nítòsí wáyà iná mànàmáná tó ń ta ìtànṣán. Kí ni o kọ́kọ́ ṣe?", options: ["Di apá rẹ̀ mú kí o sì fà á", "Dúró sẹ́yìn, pe 911 kí o sì ní kí wọ́n pa iná mànàmáná", "Da omi sí wáyà náà", "Bẹ̀rẹ̀ CPR níbi tí ó wà gan-an"], answer: 1, why: "Ibi ìṣẹ̀lẹ̀ kò dára; dúró sẹ́yìn, pè, kí o sì mú kí ó dára kí o tó fọwọ́ kan ẹnikẹ́ni." },
      { objective: "O1", q: "Báwo ni o ṣe máa ṣàyẹ̀wò bóyá ẹnì kan ń dáhùn?", options: ["Tẹ èjìká rẹ̀ kí o sì pariwo \"Ṣé o wà dáadáa?\"", "Da omi tútù sí ojú rẹ̀", "Mi orí rẹ̀ gidigidi", "Dúró fún ìṣẹ́jú márùn-ún"], answer: 0, why: "Títẹ̀ àti pípariwo ni ọ̀nà tí kò léwu láti mọ̀ bóyá ẹnì kan ń dáhùn." },
      { objective: "O1", q: "O ń pe 911. Ìgbà wo ni o lè pa fóònù?", options: ["Ní kété tí o bá sọ àdírẹ́sì", "Lẹ́yìn ìṣẹ́jú kan", "Nígbà tí olùgbọ́ ìpè bá sọ fún ọ", "Nígbà tí ẹni náà bá ṣí ojú"], answer: 2, why: "Dúró lórí ìpè; olùgbọ́ ìpè lè nílò àlàyé sí i tàbí kí ó tọ́ ọ sọ́nà nínú CPR." },
      { objective: "O1", q: "Níta US, nọ́mbà wo ni o máa pè?", options: ["911 nígbà gbogbo, níbi gbogbo", "Nọ́mbà ọ̀rẹ́ kan", "Ọ́fíìsì ńlá ilé ìwòsàn", "Nọ́mbà pàjáwìrì ti orílẹ̀-èdè rẹ"], answer: 3, why: "Nọ́mbà pàjáwìrì yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè; mọ ti ìlú rẹ." },
      { objective: "O2", q: "Àgbàlagbà kan ṣubú, kò dáhùn, ó sì ń mí gúlẹ́gúlẹ́ nìkan. Kí ló ń ṣẹlẹ̀?", options: ["Ó ṣeé ṣe kí ó ti sùn", "Ọkàn rẹ̀ lè ti dúró; pe 911 kí o sì bẹ̀rẹ̀ CPR", "Nǹkan há sí ọ̀fun rẹ̀ ṣùgbọ́n ara rẹ̀ dá", "Ó nílò ife omi kan"], answer: 1, why: "Mímí gúlẹ́gúlẹ́ kì í ṣe mímí tó yẹ; ṣe é bí ìdádúró ọkàn." },
      { objective: "O2", q: "Kí ni CPR Ọwọ́-nìkan túmọ̀ sí?", options: ["Pe 911 kí o sì tẹ àárín àyà gidigidi àti kíákíá", "Fi ọwọ́ pa ọwọ́ ẹni náà", "Fífẹ́ èémí ìgbàlà nìkan", "Di ọwọ́ ẹni náà mú títí ìrànlọ́wọ́ yóò fi dé"], answer: 0, why: "CPR Ọwọ́-nìkan ni títẹ àyà láìfẹ́ èémí, lẹ́yìn pípe 911." },
      { objective: "O2", q: "Lẹ́yìn títẹ̀ kọ̀ọ̀kan nínú CPR, kí ni o máa jẹ́ kí àyà ṣe?", options: ["Dúró ní ìsàlẹ̀", "Mì", "Padà sókè pátápátá", "Yí sí ẹ̀gbẹ́"], answer: 2, why: "Jíjẹ́ kí àyà padà sókè pátápátá ń jẹ́ kí ẹ̀jẹ̀ kún ọkàn kí títẹ̀ tó kàn tó dé." },
      { objective: "O2", q: "Ẹnì kan mú AED wá. Kí ni o máa ṣe?", options: ["Dúró de ọkọ̀ aláìsàn láti lò ó", "Kọ́kọ́ ka gbogbo ìwé ìtọ́ni rẹ̀", "Fi sí abẹ́ orí ẹni náà", "Tan án kí o sì tẹ̀lé ohùn rẹ̀"], answer: 3, why: "AED ń sọ̀rọ̀ láti tọ́ ọ sọ́nà ní ìgbésẹ̀ kọ̀ọ̀kan; lò ó ní kété tí ó bá dé." },
      { objective: "O3", q: "Èwo ni àmì pé nǹkan há sí ọ̀fun àgbàlagbà kan?", options: ["Ó ń rẹ́rìn-ín sókè", "Ó di ọ̀fun rẹ̀ mú kò sì lè sọ̀rọ̀", "Ó ń sín", "Ó ń béèrè fún aṣọ ìnuwọ́"], answer: 1, why: "Dídi ọ̀fun mú àti àìlè sọ̀rọ̀ jẹ́ àmì gidi pé nǹkan há sí ọ̀fun." },
      { objective: "O3", q: "Ẹni tí nǹkan há sí ọ̀fun rẹ̀ dákú. Kí ni o máa ṣe?", options: ["Pe 911, gbé e sílẹ̀ sórí ilẹ̀ kí o sì bẹ̀rẹ̀ CPR", "Máa lu ẹ̀yìn rẹ̀ lọ bí ó ṣe dùbúlẹ̀", "Fi í sílẹ̀ kí ó sinmi", "Fún un ní omi"], answer: 0, why: "Tí ẹni tí nǹkan há sí ọ̀fun rẹ̀ kò bá dáhùn mọ́, pe 911 kí o sì bẹ̀rẹ̀ CPR." },
      { objective: "O3", q: "Ibo ló yẹ kí o ti kọ́ lílu ẹ̀yìn àti títì ikùn dáadáa?", options: ["Nípa ṣíṣe àṣeṣe gidigidi lórí ọ̀rẹ́ kan", "Láti inú ọ̀rọ̀ àlàyé kan lábẹ́ fídíò", "Nínú kíláàsì ọwọ́ pẹ̀lú olùkọ́", "O kò nílò láti kọ́ wọn"], answer: 2, why: "A ń ṣe àṣeṣe àwọn ìgbésẹ̀ wọ̀nyí láìléwu ní kíláàsì; má ṣe àṣeṣe títì ikùn lórí ènìyàn gidi láéláé." },
      { objective: "O4", q: "Kí o tó tẹ ọgbẹ́ tó ń ṣẹ̀jẹ̀ ẹnì kan, kí ló ń dáàbò bò ọ́?", options: ["Ìbọ̀wọ́, tàbí ọ̀rá gẹ́gẹ́ bí ìdáàbòbò", "Kò sí ohun tí a nílò", "Fífọ ọwọ́ rẹ fún ìṣẹ́jú márùn-ún kọ́kọ́", "Dídi ojú rẹ"], answer: 0, why: "Ìbọ̀wọ́ tàbí ìdáàbòbò ń dáàbò bò ọ́ lọ́wọ́ ẹ̀jẹ̀ nígbà tí o ń ṣèrànwọ́." },
      { objective: "O4", q: "O ń tẹ ọgbẹ́ kan. Fún ìgbà wo ni o máa tẹ̀ ẹ́ lọ?", options: ["Ìṣẹ́jú-àáyá mẹ́wàá", "Títí ó fi rẹ̀ ọ́", "Títí o fi wo abẹ́ aṣọ náà", "Títí ẹ̀jẹ̀ yóò fi dúró tàbí àwọn olùrànlọ́wọ́ yóò fi gbà á, láìgbé e sókè"], answer: 3, why: "Títẹ̀ déédéé láìyọjú wò ń fún ẹ̀jẹ̀ ní àkókò láti dì." },
      { objective: "O4", q: "Ìgbà wo ni a ń lo tourniquet?", options: ["Fún ọgbẹ́ kékeré èyíkéyìí", "Fún ẹ̀jẹ̀ tó lè pani lórí apá tàbí ẹsẹ̀ nígbà tí títẹ̀ kò tó", "Fún ẹ̀jẹ̀ imú", "Fún ara tó dúdú nítorí ìgbálù"], answer: 1, why: "Tourniquet wà fún ẹ̀jẹ̀ tó lè pani lórí apá tàbí ẹsẹ̀, a sì ń kọ́ ọ ní kíláàsì." },
      { objective: "O5", q: "Ìyá-ìyá rẹ sọ pé àyà òun ń fún pọ̀, òógùn tútù sì ń bò ó, ṣùgbọ́n ó fẹ́ dúró. Kí ni o máa ṣe?", options: ["Dúró fún wákàtí kan láti wò ó", "Pe 911 báyìí kí o sì dúró tì í", "Fi ọkọ̀ gbé e lọ fúnra rẹ lẹ́yìn oúnjẹ alẹ́", "Fún un ní oògùn èyíkéyìí tó wà nílé"], answer: 1, why: "Àmì ìkọlù ọkàn nìwọ̀nyí; pe 911 báyìí, má sì jẹ́ kí ó yí ọ lọ́kàn padà." },
      { objective: "O5", q: "Nínú B.E. F.A.S.T., kí ni T ń rán ọ létí láti ṣe?", options: ["Ya fọ́tò", "Fi ọ̀rọ̀ ránṣẹ́ sí ọ̀rẹ́ kan", "Sọ fún un pé kí ó sùn", "Time (àkókò): pe 911 lẹ́sẹ̀kẹsẹ̀ kí o sì kíyè sí ìgbà tí àwọn àmì bẹ̀rẹ̀"], answer: 3, why: "T dúró fún Time (àkókò): pe 911 lẹ́sẹ̀kẹsẹ̀ kí o sì kíyè sí ìgbà tí àwọn àmì bẹ̀rẹ̀." },
      { objective: "O5", q: "Kí ló dé tí o fi máa pe ọkọ̀ aláìsàn fún àrùn ẹ̀gbà dípò kí o gbé ẹni náà lọ fúnra rẹ?", options: ["Àwọn òṣìṣẹ́ lè bẹ̀rẹ̀ ìtọ́jú lójú ọ̀nà kí wọ́n sì sọ fún ilé ìwòsàn", "Ọkọ̀ aláìsàn máa ń jẹ́ ọ̀fẹ́ nígbà gbogbo", "Ilé ìwòsàn kì í gba ẹni tó bá wọlé fúnra rẹ̀", "Òfin kò gbà kí o gbé ẹnì kan lọ"], answer: 0, why: "Àwọn òṣìṣẹ́ pàjáwìrì ń bẹ̀rẹ̀ ìtọ́jú ní kùtùkùtù wọ́n sì ń kìlọ̀ fún ilé ìwòsàn; CDC sọ pé kí o pe 911, kí o má ṣe gbé e lọ fúnra rẹ." },
      { objective: "O6", q: "Àwọn àjọ US méjì wo ni a mọ̀ jù fún ìwé ẹ̀rí CPR àti ìrànlọ́wọ́ àkọ́kọ́?", options: ["DMV (ọ́fíìsì ìwé àṣẹ ọkọ̀) àti ilé ìfìwéránṣẹ́", "IRS (ọ́fíìsì owó orí) àti SBA (ọ́fíìsì iṣẹ́ kékeré)", "American Red Cross àti American Heart Association", "Ẹgbẹ́ ìkànnì àjọlò èyíkéyìí"], answer: 2, why: "Red Cross àti AHA ni àwọn àjọ CPR àti ìrànlọ́wọ́ àkọ́kọ́ tí a mọ̀ jù ní US." },
      { objective: "O6", q: "Kí o tó sanwó fún kíláàsì CPR fún iṣẹ́ kan, kí ló yẹ kí o béèrè?", options: ["Kíláàsì àti àjọ wo ni agbanisíṣẹ́ ń gbà", "Bóyá o lè fo ìdánwò ọgbọ́n ọwọ́", "Bóyá ọ̀rẹ́ kan lè ṣe é fún ọ", "Kò sí nǹkan; gbogbo kíláàsì jọra"], answer: 0, why: "Iṣẹ́ yàtọ̀ síra: àwọn kan ń gba First Aid, CPR àti AED, iṣẹ́ ìlera sábà máa ń nílò BLS." },
      { objective: "O6", q: "Ọjọ́ kan wà lórí káàdì CPR rẹ. Kí ni o máa ṣe?", options: ["Ṣàìka á sí", "Ju káàdì náà nù", "Fi ọ̀rá bò ó kí ó má baà parí láéláé", "Ṣètò ìránnilétí láti tún un ṣe kí ó tó parí"], answer: 3, why: "Káàdì máa ń parí; tún un ṣe kí ọjọ́ náà tó dé kí ìwé ẹ̀rí rẹ lè máa wà lọ́wọ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 2, 4, 6, 8, 11, 15, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìpè pàjáwìrì ti ṣetán", objective: "O1", notYet: "Kò sí nọ́mbà pàjáwìrì tàbí gbólóhùn àdírẹ́sì, tàbí àdírẹ́sì kò yé.", meets: "Ó ní nọ́mbà pàjáwìrì tó tọ́ àti gbólóhùn tó yé pẹ̀lú àdírẹ́sì kọ́kọ́, lẹ́yìn náà ohun tó ṣẹlẹ̀.", exceeds: "Ó tún fi oríta ọ̀nà tàbí àmì ibi kan kún un, ó sì ṣe àṣeṣe sísọ ọ́ sókè." },
      { name: "Ibi AED àti àpótí", objective: "O2", notYet: "Kò mọ ibi tí AED tàbí àpótí ìrànlọ́wọ́ àkọ́kọ́ wà.", meets: "Ó dárúkọ ibi tí AED àti àpótí ìrànlọ́wọ́ àkọ́kọ́ tó sún mọ́ jù wà nílé, níbi iṣẹ́, ní ilé-ìwé tàbí ní ilé ìjọsìn.", exceeds: "Ó dárúkọ ibi méjì, ó sì ṣàyẹ̀wò pé ọwọ́ lè tó àpótí AED náà." },
      { name: "Àwọn ìgbésẹ̀ ní ètò", objective: "O2", notYet: "Àwọn ìgbésẹ̀ kan sọnù tàbí wọn kò sí ní ètò tó tọ́, tàbí ìyára àti jíjìn CPR kò tọ́.", meets: "Ó kọ ṣàyẹ̀wò, pè, CPR àti AED ní ètò, pẹ̀lú ọwọ́ ní àárín àyà, 100 sí 120 ní ìṣẹ́jú kan àti nǹkan bí inch 2.", exceeds: "Ó tún kọ àwọn ìgbésẹ̀ AED àti ìgbà tí àwọn olùrànlọ́wọ́ máa pàrọ̀." },
      { name: "Nǹkan há sí ọ̀fun àti ẹ̀jẹ̀", objective: "O4", notYet: "Ó da ohun tí a máa ṣe pọ̀, tàbí ó sọ pé kí a gbé aṣọ sókè tàbí fa nǹkan jáde.", meets: "Ó kọ àwọn àmì nǹkan tó há sí ọ̀fun (O3) àti títẹ̀ gidigidi ní tààrà pẹ̀lú fífi aṣọ kún un fún ẹ̀jẹ̀.", exceeds: "Ó tún sọ ìgbà tí ẹni tí nǹkan há sí ọ̀fun rẹ̀ nílò CPR àti ohun tí tourniquet wà fún." },
      { name: "Ìkọlù ọkàn àti àrùn ẹ̀gbà", objective: "O5", notYet: "Kò lè to B.E. F.A.S.T. tàbí àwọn àmì ìkọlù ọkàn.", meets: "Ó to B.E. F.A.S.T. àti àmì ìkọlù ọkàn mẹ́ta, pẹ̀lú \"pe 911\".", exceeds: "Ó tún kọ pé kí a kọ àkókò tí àmì bẹ̀rẹ̀ sílẹ̀ àti pé kí a má ṣe gbé ẹni náà lọ fúnra wa." },
      { name: "Ètò ìwé ẹ̀rí", objective: "O6", notYet: "Kò yan kíláàsì kankan, tàbí kíláàsì ayélujára nìkan láìsí ìdánwò ọgbọ́n ọwọ́.", meets: "Ó dárúkọ kíláàsì ojúkojú tàbí àdàlù, ẹni tó ń fúnni ní káàdì, ibi àti ọjọ́.", exceeds: "Ó tún fìdí rẹ̀ múlẹ̀ pẹ̀lú agbanisíṣẹ́ tàbí ètò pé wọ́n ń gba kíláàsì náà, ó sì ṣètò ìránnilétí fún títún un ṣe." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí kíláàsì CPR, AED àti ìrànlọ́wọ́ àkọ́kọ́ ní ojúkojú láti Red Cross tàbí AHA láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé, wọ́n fi káàdì hàn)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n kọ káàdì CPR àti ìrànlọ́wọ́ àkọ́kọ́ tó wà lọ́wọ́ sínú ìwé ìbéèrè iṣẹ́ tàbí résumé",
      "Àwọn ibi iṣẹ́ àti àjọ aláìlérè nínú ètò náà tí wọ́n ròyìn pé òṣìṣẹ́ àti olùyọ̀ǹda púpọ̀ sí i ti gba ìwé ẹ̀rí, wọ́n sì mọ ibi tí AED wà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tó ní íńtánẹ́ẹ̀tì láti wo àwọn ẹ̀kọ́ àti ohun èlò wíwá kíláàsì",
      "Ìwé àti gègé; ìrọ̀rí tó le tàbí aṣọ ìnura tí a ká fún àṣeṣe ìyára CPR; aṣọ ìnura fún àṣeṣe títẹ̀",
      "Aago fóònù tàbí aago ògiri",
      "Nǹkan bí ìṣẹ́jú 60 sí 75 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Ìmọ̀ nìkan ni èyí. Máa sọ léraléra pé kò fúnni ní ìwé ẹ̀rí, kí o sì darí àwọn akẹ́kọ̀ọ́ sí kíláàsì ojúkojú pẹ̀lú olùkọ́ Red Cross tàbí AHA tó kúnjú ìwọ̀n.",
      "Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣe àṣeṣe títẹ àyà, lílu ẹ̀yìn tàbí títì ikùn lórí ara wọn láéláé; lo ìrọ̀rí tàbí, tí ẹ bá ní wọn, manikin pẹ̀lú olùkọ́ tó ní ìwé ẹ̀rí.",
      "Má ṣe fúnni ní ìwọ̀n oògùn tàbí ìmọ̀ràn ìṣègùn; darí ìbéèrè ìlera sí dókítà tàbí olùgbọ́ ìpè 911.",
      "Àwọn akẹ́kọ̀ọ́ kan lè ti la pàjáwìrì kan já tàbí kí wọ́n ti pàdánù ẹnì kan; fún wọn ní àkókò ìsinmi kí o sì jẹ́ kí wọ́n jáde tí wọ́n bá fẹ́.",
      "Fún àwọn ẹgbẹ́ ní òkè òkun, fi nọ́mbà pàjáwìrì ti ìlú wọn àti àwọn àjọ ẹ̀kọ́ ti ìlú wọn rọ́pò 911 (fún àpẹẹrẹ àwọn ẹgbẹ́ Red Cross tàbí Red Crescent ti orílẹ̀-èdè).",
      "Bá ilé iṣẹ́ panápaná, ilé ìwòsàn tàbí ẹ̀ka Red Cross ní àdúgbò ṣiṣẹ́ pọ̀ láti ṣe kíláàsì ìwé ẹ̀rí lẹ́sẹ̀kẹsẹ̀ lẹ́yìn ẹ̀kọ́ náà."
    ]
  }
};
