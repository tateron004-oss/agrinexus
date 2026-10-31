"use strict";

// Koach Learn course (Yoruba translation of agriculture-africa/agri-protected-farming.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const FAO_GAP_GH = { name: "FAO: Ìlànà iṣẹ́ àgbẹ̀ rere fún ẹ̀fọ́ inú greenhouse ní agbègbè ojú-ọjọ́ Mediterranean (Plant Production and Protection Paper 217)", url: "https://www.fao.org/agriculture/crops/publications/detail/en/item/276049/icode/" };
const NORDEY_REVIEW = { name: "Nordey àti àwọn míì (2017): Gbígbin ẹ̀fọ́ abẹ́ ìbòrí ní Áfíríkà gúúsù Sàhárà: ààlà àti ìrètí fún àgbẹ̀ kékeré (Agronomy for Sustainable Development)", url: "https://publications.cirad.fr/une_notice.php?dk=585832" };
const ICIPE_TUTA = { name: "icipe: Kòkòrò oṣù náà: kòkòrò tó ń jẹ ewé tòmátì, Tuta absoluta", url: "https://www.icipe.org/news/insect-month-february-tomato-leafminer-tuta-absoluta" };
const PCPB = { name: "Pest Control Products Board (Kenya): àjọ tó ń forúkọ oògùn kòkòrò sílẹ̀", url: "https://www.pcpb.go.ke" };
const NAFDAC = { name: "National Agency for Food and Drug Administration and Control (NAFDAC, Nàìjíríà)", url: "https://www.nafdac.gov.ng" };
const GHANA_EPA = { name: "Environmental Protection Authority (Ghana)", url: "https://www.epa.gov.gh" };
const KEPHIS = { name: "Kenya Plant Health Inspectorate Service (KEPHIS): irúgbìn àti irúgbìn kékeré tí a fọwọ́ sí", url: "https://www.kephis.go.ke" };

module.exports = {
  id: "agri-protected-farming-yo",
  lang: "yo",
  translationOf: "agri-protected-farming",
  category: "Agriculture (Africa)",
  name: "Greenhouse àti Iṣẹ́ Àgbẹ̀ Abẹ́ Ìbòrí fún Irè Oko Olówó Gíga",
  skills: "Mímọ ìgbà tí iṣẹ́ àgbẹ̀ abẹ́ ìbòrí ń mówó wá, Fífi greenhouse, shade net àti tunnel wéra àti ṣíṣàyẹ̀wò ìlérí olùtajà, Títọ́ irúgbìn kékeré àti ṣíṣètò fertigation omi ẹ̀kán, Ṣíṣàkóso ooru, ọ̀rinrin, kòkòrò àti ìmọ́tótó, Kíkọ ìwé ìṣirò òwò pẹ̀lú àkókò ìsanpadà",
  outcome: "kọ ìwé ìṣirò òwò (business case) fún gbígbin irè oko olówó gíga kan (tòmátì, tàtàṣé tàbí kúkúmbà) lábẹ́ greenhouse, shade net tàbí tunnel lórí oko rẹ: bóyá ó bá omi, ọjà àti ọgbọ́n rẹ mu, ilé ìbòrí tí o yàn àti iye owó mẹ́ta láti ọ̀dọ̀ olùtajà, ètò irè oko àti fertigation, ìlànà fún kòkòrò àti ìmọ́tótó, àti owó ìnáwó, owó tí ń wọlé, èrè àkọ́kọ́ (gross margin) àti àkókò ìsanpadà.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn ẹgbẹ́ ọ̀dọ́ àti ẹgbẹ́ obìnrin, àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ tí wọ́n ń ronú nípa greenhouse, shade net tàbí tunnel, tàbí tí wọ́n ti ní ọ̀kan tí kò mówó wá. Àwọn àpẹẹrẹ ni tòmátì, tàtàṣé (capsicum) àti kúkúmbà ní Kenya, Nàìjíríà, Ghana àti Senegal.",
    "Orí 1 ń ràn ọ́ lọ́wọ́ láti pinnu àti láti bẹ̀rẹ̀: ìgbà tí iṣẹ́ àgbẹ̀ abẹ́ ìbòrí ń mówó wá àti ìgbà tí kò mówó wá, àwọn irú ilé ìbòrí pàtàkì àti bí o ṣe lè fi iye owó wọn wéra, bí o ṣe lè mọ olùtajà tí ń ṣèlérí jù, àti bí o ṣe lè yan irè oko kí o sì tọ́ irúgbìn kékeré tó mọ́. Orí 2 jẹ́ nípa ṣíṣe é bí òwò: ìpìlẹ̀ fertigation omi ẹ̀kán, ṣíṣàkóso ooru, ọ̀rinrin, àrùn àti kòkòrò, mímú ilé ìbòrí mọ́, àti kíkọ ìwé ìṣirò òwò pẹ̀lú àkókò ìsanpadà.",
    "Greenhouse jẹ́ ìdókòwò ńlá, ọ̀pọ̀ ló sì ti di òfìfo nítorí pé ìṣirò owó, omi tàbí ọjà kò ṣiṣẹ́. Gbogbo iye owó nínú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ àhùsọ láti fi kọ́ ìṣirò; lo iye owó tí àwọn olùtajà fún ọ àti iye ọjà ní agbègbè rẹ, kí o sì bá onímọ̀ ọ̀gbìn (agronomist), òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ rẹ àti olùdámọ̀ràn tí o gbẹ́kẹ̀ lé sọ̀rọ̀ kí o tó fọwọ́ sí nǹkan tàbí sanwó. Ìdánwò kúkúrú wà lẹ́yìn ẹ̀kọ́ kọ̀ọ̀kan, ìdánwò ìmọ̀ wà ní ìparí orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí ẹ̀kọ́ náà."
  ],
  finalTask: "Kọ ìwé ìṣirò òwò fún iṣẹ́ àgbẹ̀ abẹ́ ìbòrí fún irè oko kan lórí oko tìrẹ: ìdáhùn rẹ sí àwọn ipò márùn-ún \"Ṣé ó máa mówó wá?\" (omi, ọjà, ọgbọ́n, owó ìdókòwò, ojú-ọjọ́), ilé ìbòrí tí o máa lò pẹ̀lú ó kéré tán iye owó mẹ́ta tí o ti fi wéra àti àyẹ̀wò olùtajà tí o ti ṣe, irè oko àti orísìí rẹ̀, ètò ibi ìtọ́jú irúgbìn kékeré àti fertigation tí o ti fi ẹnu kò lé lórí pẹ̀lú onímọ̀ ọ̀gbìn, ìlànà ọ̀sọ̀ọ̀sẹ̀ fún kòkòrò, ooru inú ilé àti ìmọ́tótó, àti owó ìnáwó, iye èso tí o retí, owó tí ń wọlé, èrè àkọ́kọ́ fún ìgbà ọ̀gbìn kọ̀ọ̀kan, àkókò ìsanpadà, àti ohun tí ó máa ṣẹlẹ̀ sí àkókò ìsanpadà tí iye owó ọjà bá dín kù ní ìdá kan nínú mẹ́rin.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn àgbẹ̀ kékeré àti àwọn àgbẹ̀ oníṣòwò tí ń dàgbà, àwọn ọ̀dọ́ oníṣòwò àgbẹ̀, àwọn ẹgbẹ́ ọ̀dọ́ àti ẹgbẹ́ obìnrin, àti àwọn òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ ní Áfíríkà tí wọ́n ń ronú nípa greenhouse, shade net tàbí tunnel, tàbí tí wọ́n ti ní ọ̀kan, fún tòmátì, tàtàṣé, kúkúmbà tàbí ẹ̀fọ́ olówó gíga míì.",
    startingPoint: "Wọ́n ti gbin ẹ̀fọ́ nínú oko gbangba. Wọ́n ti fi greenhouse lọ àwọn kan pẹ̀lú ìlérí èso púpọ̀; àwọn kan ní ọ̀kan tí ó ti ní ìṣòro kòkòrò, àrùn tàbí ọjà. Díẹ̀ ni wọ́n ti fi iye owó olùtajà wéra, ṣètò fertigation, tàbí ṣírò àkókò ìsanpadà.",
    gap: "Iṣẹ́ àgbẹ̀ abẹ́ ìbòrí lè mú èso tó pọ̀ jù, tó mọ́ jù, tí ó sì ń wá déédéé, ṣùgbọ́n owó rẹ̀ pọ̀ ní ìbẹ̀rẹ̀, ó nílò ọgbọ́n àti omi tí ó dájú, ó ń há ooru àti àrùn mọ́ inú, ó sì ń mówó wá kìkì tí ọjà bá dúró déédéé. Àwọn akẹ́kọ̀ọ́ nílò láti pinnu bóyá ó bá wọn mu, yan ilé ìbòrí kí wọ́n sì ṣàyẹ̀wò rẹ̀, ṣe ọ̀gbìn náà dáadáa, kí wọ́n sì fi ìṣirò hàn pé ó lè san owó padà kí ìbòrí rẹ̀ tó gbó.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń lo Gẹ̀ẹ́sì bí èdè kejì, ẹ̀kọ́ náà sì wà ní èdè Spanish, French àti Arabic pẹ̀lú",
      "Ìṣirò: ìṣirò rírọrùn pẹ̀lú ẹ̀rọ ìṣirò fóònù; a fi gbogbo ìṣirò hàn ní ìgbésẹ̀ kọ̀ọ̀kan",
      "Owó: gbogbo iye owó jẹ́ àpẹẹrẹ àhùsọ; àwọn akẹ́kọ̀ọ́ ń lo iye owó olùtajà àti iye ọjà tiwọn ní owó orílẹ̀-èdè wọn (KES, NGN, GHS tàbí XOF)",
      "Ààbò: kò sí ìlànà àpòpọ̀ ajílẹ̀, kò sí orúkọ oògùn kòkòrò tàbí ìwọ̀n rẹ̀; àwọn akẹ́kọ̀ọ́ ń bá onímọ̀ ọ̀gbìn ṣiṣẹ́, wọ́n sì ń tẹ̀lé àkọlé ọjà (label) àti àjọ ìjọba tí ó ń ṣàkóso rẹ̀",
      "Ìnáwó: kò sí ìmọ̀ràn ìdókòwò; àwọn akẹ́kọ̀ọ́ ń ka àdéhùn látòkè délẹ̀, wọ́n sì ń béèrè lọ́wọ́ olùdámọ̀ràn tí wọ́n gbẹ́kẹ̀ lé kí wọ́n tó sanwó"
    ],
    prerequisites: "Kò sí. \"Ìbomirin Oko àti Ìṣàkóso Omi\" (omi ẹ̀kán àti ẹ̀rọ fífa omi) àti \"Ìṣàkóso Kòkòrò Àjẹnirun Lápapọ̀ (IPM) àti Ìṣàkóso Kòkòrò Láìlo Kẹ́míkà\" wúlò láti ṣe pẹ̀lú ẹ̀kọ́ yìí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Fún oko tìrẹ", action: "ṣàyẹ̀wò àwọn ipò márùn-ún fún iṣẹ́ àgbẹ̀ abẹ́ ìbòrí (omi, ọjà, ọgbọ́n, owó ìdókòwò àti ojú-ọjọ́) kí o sì pinnu bóyá o máa bẹ̀rẹ̀", standard: "nípa fífi bẹ́ẹ̀ ni tàbí bẹ́ẹ̀ kọ́ àti ìdí rẹ̀ fún ọ̀kọ̀ọ̀kan" },
    { id: "O2", condition: "Nígbà tí o bá ń yan ilé ìbòrí", action: "fi iye owó greenhouse, shade net tàbí tunnel wéra kí o sì ṣàyẹ̀wò ìlérí olùtajà kọ̀ọ̀kan", standard: "pẹ̀lú ó kéré tán iye owó mẹ́ta, kí o sì béèrè àwọn ẹni tí o lè bá sọ̀rọ̀ àti ìwé ìdánilójú (warranty)" },
    { id: "O3", condition: "Fún irè oko kan tí o yàn", action: "ṣètò orísìí irè oko, ibi ìtọ́jú irúgbìn kékeré, gbígbé irúgbìn lọ sí oko àti fertigation omi ẹ̀kán pẹ̀lú onímọ̀ ọ̀gbìn", standard: "bí ètò tí ó ní ọjọ́ fún ìgbà ọ̀gbìn kan" },
    { id: "O4", condition: "Lẹ́yìn tí o bá ti gbin irè oko náà", action: "ṣe ìlànà ojoojúmọ́ àti ọ̀sọ̀ọ̀sẹ̀ fún ooru, ọ̀rinrin, kòkòrò àti ìmọ́tótó", standard: "tí ó bo ojú afẹ́fẹ́, àyẹ̀wò oko, pańpẹ́ àti òfin ìwọlé lọ́sọ̀ọ̀sẹ̀" },
    { id: "O5", condition: "Pẹ̀lú iye owó olùtajà àti iye ọjà tí o ní", action: "ṣírò owó ìnáwó, owó tí ń wọlé, èrè àkọ́kọ́ àti àkókò ìsanpadà fún irè oko náà", standard: "kí o sì dán ohun tí ó máa ṣẹlẹ̀ wò tí iye owó ọjà bá dín kù ní ìdá kan nínú mẹ́rin" }
  ],
  chapters: [
    {
      name: "Orí 1: Pípinnu àti bíbẹ̀rẹ̀",
      lessons: [
        {
          title: "Ìgbà tí iṣẹ́ àgbẹ̀ abẹ́ ìbòrí ń mówó wá, àti ìgbà tí kò mówó wá",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣàyẹ̀wò àwọn ipò márùn-ún fún iṣẹ́ àgbẹ̀ abẹ́ ìbòrí lórí oko tìrẹ kí o sì pinnu bóyá o máa bẹ̀rẹ̀.",
          text: [
            "Iṣẹ́ àgbẹ̀ abẹ́ ìbòrí túmọ̀ sí gbígbin irè oko lábẹ́ ìbòrí: greenhouse tí ó ní ọ̀rá (plastic) àti àwọ̀n kòkòrò, ilé shade net, tàbí tunnel kékeré tàbí èyí tí a lè rìn wọ inú rẹ̀. Tí a bá ṣe é dáadáa, ó ń dá òjò líle, yìnyín àti ọ̀pọ̀ kòkòrò dúró, ó ń dín àwọn àrùn kan kù, ó sì ń mú èso tó pọ̀ jù, tó mọ́ jù, tí ó sì ń wá déédéé jáde fún irè oko olówó gíga bí tòmátì, tàtàṣé àti kúkúmbà.",
            "Kò bá gbogbo ènìyàn mu. Ìwádìí kan ní ọdún 2017 lórí gbígbin abẹ́ ìbòrí ní Áfíríkà gúúsù Sàhárà rí i pé kò bá gbogbo ojú-ọjọ́ mu, ó ṣì nílò àwọn ọ̀nà míì láti ṣàkóso kòkòrò, àti pé àìní ọgbọ́n, ìrànlọ́wọ́ onímọ̀ àti owó ń dá ọ̀pọ̀ àgbẹ̀ kékeré dúró. Ọ̀pọ̀ greenhouse ní Kenya, Nàìjíríà àti Ghana ló wà ní òfìfo lẹ́yìn ìgbà ọ̀gbìn kan tàbí méjì.",
            "Ṣàyẹ̀wò ipò márùn-ún kí o tó ná owó. Omi: omi tó mọ́ tí ó sì dájú jálẹ̀ ọdún, nítorí pé òjò kì í dé irè oko náà. Ọjà: àwọn olùrà tí wọ́n máa gba èso rẹ lọ́sọ̀ọ̀sẹ̀ ní iye owó tó tọ́, bí òtẹ́ẹ̀lì, ilé ìtajà ńlá (supermarket), ilé-ìwé tàbí àwọn oníṣòwò ọjà, kì í ṣe \"ọjà\" lásán. Ọgbọ́n: ìwọ tàbí òṣìṣẹ́ kan tí ó ti kọ́ fertigation, gígé ẹ̀ka àti àyẹ̀wò oko, àti onímọ̀ ọ̀gbìn tí o lè pè. Owó ìdókòwò: owó fún ilé ìbòrí, ọ̀gbìn àkọ́kọ́ àti ìnáwó oṣù díẹ̀, láìfi oúnjẹ ìdílé rẹ wewu. Ojú-ọjọ́: ní ilẹ̀ pẹ̀tẹ́lẹ̀ tí ó gbóná gan-an, greenhouse tí a tì pa lè gbóná jù, nítorí náà shade net tàbí ilé tí afẹ́fẹ́ ń wọ̀ dáadáa lè dára jù."
          ],
          steps: ["Omi: ṣé omi tó mọ́ tí ó sì dájú wà jálẹ̀ ọdún?", "Ọjà: ta ló máa rà lọ́sọ̀ọ̀sẹ̀, ní iye owó wo?", "Ọgbọ́n: ta ló máa ṣe fertigation, gígé ẹ̀ka àti àyẹ̀wò oko, onímọ̀ ọ̀gbìn wo lo sì lè pè?", "Owó ìdókòwò: ṣé o lè san fún ilé ìbòrí, ọ̀gbìn àkọ́kọ́ àti ìnáwó láìfi owó oúnjẹ wewu?", "Ojú-ọjọ́: ṣé ilé tí a tì pa máa gbóná jù níbi tí o wà?", "Pinnu: bẹ̀rẹ̀, bẹ̀rẹ̀ ní kékeré, tàbí kò tíì tó àkókò."],
          words: [["Iṣẹ́ àgbẹ̀ abẹ́ ìbòrí", "gbígbin irè oko lábẹ́ ìbòrí bí greenhouse, shade net tàbí tunnel."], ["Greenhouse", "férémù tí a fi ọ̀rá (plastic) àti àwọ̀n kòkòrò bò, tí ó ní ojú afẹ́fẹ́."], ["Shade net", "àwọ̀n tí ó ń dín oòrùn àti ooru kù, tí ó sì ń dá àwọn kòkòrò àti ẹyẹ kan dúró."], ["Tunnel", "férémù tí ó tẹ̀ bí àbọ̀, tí a fi ọ̀rá tàbí àwọ̀n bò; tunnel kékeré ń bo ebè kan, èyí tí a lè rìn wọ inú rẹ̀ ń bo ilẹ̀ kan."]],
          slides: [
            { title: "Ohun tí ìbòrí lè ṣe", bullets: ["Ó ń dá òjò líle, yìnyín àti ọ̀pọ̀ kòkòrò dúró", "Èso tó pọ̀ jù, tó mọ́ jù, tí ó ń wá déédéé", "Ó dára jù fún irè oko olówó gíga"] },
            { title: "Kò bá gbogbo ènìyàn mu", bullets: ["Kò bá gbogbo ojú-ọjọ́ mu (ìwádìí, 2017)", "Ó ṣì nílò àwọn ọ̀nà míì láti ṣàkóso kòkòrò", "Ọgbọ́n, ìrànlọ́wọ́ àti owó ni ìdènà ńlá"] },
            { title: "Ipò márùn-ún", bullets: ["Omi jálẹ̀ ọdún", "Olùrà lọ́sọ̀ọ̀sẹ̀", "Ọgbọ́n àti onímọ̀ ọ̀gbìn", "Owó ìdókòwò àti ojú-ọjọ́ tó yẹ"] },
            { title: "Ìpinnu rẹ", bullets: ["Bẹ̀rẹ̀", "Bẹ̀rẹ̀ ní kékeré (tunnel tàbí shade net)", "Kò tíì tó àkókò: kọ́kọ́ tún ipò tí ó kù ṣe"] }
          ],
          sources: [NORDEY_REVIEW, FAO_GAP_GH],
          tryIt: "Kọ àwọn ipò márùn-ún sílẹ̀, kí o sì dáhùn ọ̀kọ̀ọ̀kan fún oko rẹ pẹ̀lú bẹ́ẹ̀ ni tàbí bẹ́ẹ̀ kọ́ àti ìdí rẹ̀. Lẹ́yìn náà kọ ìpinnu rẹ: bẹ̀rẹ̀, bẹ̀rẹ̀ ní kékeré, tàbí kò tíì tó àkókò, àti ohun tí o máa nílò láti yí padà.",
          youCanNow: "ṣàyẹ̀wò àwọn ipò márùn-ún fún iṣẹ́ àgbẹ̀ abẹ́ ìbòrí kí o sì pinnu bóyá ó bá oko rẹ mu báyìí.",
          quickCheck: [
            { objective: "O1", q: "Èwo ni àmì tó lágbára jù pé o ti ṣetán fún greenhouse?", options: ["Olùtajà kan sọ pé ó máa mówó wá láàárín oṣù mẹ́ta", "Aládùúgbò rẹ ra ọ̀kan", "O ní omi jálẹ̀ ọdún àti olùrà tí ó ń gba tòmátì lọ́sọ̀ọ̀sẹ̀", "O ti rí àwòrán rẹ̀ lórí ayélujára"], answer: 2, why: "Omi tí ó dájú àti olùrà tí ó dúró déédéé jẹ́ méjì lára ipò márùn-ún tí ó ń jẹ́ kí ó mówó wá." },
            { objective: "O1", q: "O ń dá oko ní ilẹ̀ pẹ̀tẹ́lẹ̀ tí ó gbóná gan-an. Kí ni o máa kọ́kọ́ ṣàyẹ̀wò?", options: ["Bóyá greenhouse tí a tì pa máa gbóná jù, àti bóyá shade net dára jù", "Àwọ̀ ọ̀rá nìkan", "Kò sí nǹkan; ooru dára fún gbogbo irè oko", "Bóyá o lè gbin láìsí omi"], answer: 0, why: "Ilé tí a tì pa máa ń há ooru mọ́; ní ibi tí ó gbóná, ojú afẹ́fẹ́ tàbí shade net lè dára jù." }
          ]
        },
        {
          title: "Greenhouse, shade net àti tunnel: àwọn àṣàyàn, owó àti olùtajà",
          objectives: ["O2"],
          minutes: 6,
          goal: "Fi iye owó ilé ìbòrí mẹ́ta ó kéré tán wéra, kí o sì ṣàyẹ̀wò ìlérí olùtajà kọ̀ọ̀kan.",
          text: [
            "Àwọn àṣàyàn pàtàkì: greenhouse (férémù igi tàbí irin, pẹ̀lú ọ̀rá tí a ti tọ́jú fún UV lórí òrùlé àti àwọ̀n kòkòrò ní ẹ̀gbẹ́) ló ń dáàbò bò jù, owó rẹ̀ sì ga jù. Ilé shade net kò wọ́n tó bẹ́ẹ̀, ó tutù jù, ó sì bá ibi tí ó gbóná mu àti irè oko bí tàtàṣé àti ẹ̀fọ́ eléwé, ṣùgbọ́n kò dá òjò dúró. Tunnel tí a lè rìn wọ inú rẹ̀ tàbí tunnel kékeré ni ọ̀nà tí kò wọ́n jù láti bẹ̀rẹ̀ kí o sì kọ́ṣẹ́. Irin máa ń pẹ́ ju igi lọ ṣùgbọ́n ó wọ́n jù; igi tí a ti tọ́jú lè ṣiṣẹ́ tí a bá ń ṣàkóso ikán. Ọ̀rá ìbòrí máa ń gbó lẹ́yìn ọdún díẹ̀, nítorí náà béèrè iye ọdún tí wọ́n fi ń ṣe ìdánilójú ààbò UV rẹ̀.",
            "Owó yàtọ̀ síra gan-an nípa ìtóbi, ohun èlò, orílẹ̀-èdè àti ohun tí ó wà nínú rẹ̀, nítorí náà gba iye owó mẹ́ta ó kéré tán ní kíkọ (quote) fún ìtóbi kan náà, kí o sì fi wọ́n wéra ní ìlà-ìlà: férémù, ìbòrí àti àwọ̀n, ilẹ̀kùn, ẹ̀rọ omi ẹ̀kán, táńkì omi, ibi ìtọ́jú irúgbìn kékeré, ìkọ́lé, ìdálẹ́kọ̀ọ́ àti ìbẹ̀wò lẹ́yìn títà. Fún àpẹẹrẹ (iye owó àhùsọ, láti fi ọ̀nà náà hàn nìkan), quote A ti KES 380,000 lè ní omi ẹ̀kán àti ìdálẹ́kọ̀ọ́ nínú, nígbà tí quote B ti KES 300,000 kò ní wọn, nítorí náà B kò fi bẹ́ẹ̀ dín owó kù ní tòótọ́.",
            "Ṣọ́ra fún àwọn olùtajà tí ń ṣèlérí jù. Àwọn àmì ìkìlọ̀: ìdánilójú iye èso tàbí owó tí o máa rí, \"ó máa san owó padà láàárín ìgbà ọ̀gbìn kan\", ìlérí \"a máa ra èso rẹ\" láìsí àdéhùn ní kíkọ, kíkán ọ lójú láti san owó ìdógò ńlá lónìí, kò sí àgbẹ̀ tí o lè bẹ̀ wò, kò sí ìwé ìdánilójú (warranty) ní kíkọ, àti títa ohun èlò láìsí ìdálẹ́kọ̀ọ́ tàbí ètò omi. Béèrè láti bẹ àgbẹ̀ méjì wò tí wọ́n ti lo ilé ìbòrí olùtajà náà fún ìgbà ọ̀gbìn méjì ó kéré tán. Gba ìwé ìdánilójú, ọjọ́ tí wọ́n máa mú un wá àti ohun tí ó wà nínú rẹ̀ ní kíkọ, ka gbogbo àdéhùn náà, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀ lé kí o tó sanwó."
          ],
          steps: ["Yan ìtóbi tí o lè ṣàkóso tí o sì lè bomirin.", "Béèrè quote ní kíkọ lọ́wọ́ olùtajà mẹ́ta ó kéré tán fún ìtóbi kan náà.", "Fi wọ́n wéra ní ìlà-ìlà: férémù, ìbòrí, àwọ̀n, omi ẹ̀kán, táńkì, ibi ìtọ́jú irúgbìn, ìkọ́lé, ìdálẹ́kọ̀ọ́, ìrànlọ́wọ́ lẹ́yìn títà.", "Béèrè lọ́wọ́ olùtajà kọ̀ọ̀kan fún àwọn tí ó ti rà, kí o sì bẹ àgbẹ̀ méjì tí ń lo ilé wọn wò.", "Gba ìwé ìdánilójú, ọjọ́ ìmúwá àti ohun tí ó wà nínú rẹ̀ ní kíkọ; ka gbogbo rẹ̀ kí o sì béèrè lọ́wọ́ olùdámọ̀ràn."],
          words: [["Ọ̀rá tí a tọ́jú fún UV", "ọ̀rá (plastic) greenhouse tí a ṣe láti kojú ìtànṣán ultraviolet oòrùn kí ó lè pẹ́."], ["Àwọ̀n kòkòrò", "àwọ̀n tínńtín ní ẹ̀gbẹ́ àti ojú afẹ́fẹ́ tí ó ń dá ọ̀pọ̀ kòkòrò dúró ṣùgbọ́n tí afẹ́fẹ́ ń gbà kọjá."], ["Quote", "iye owó ní kíkọ láti ọ̀dọ̀ olùtajà tí ó fi gbogbo ohun tí ó wà nínú rẹ̀ hàn."], ["Ìwé ìdánilójú (warranty)", "ìlérí ní kíkọ láti ọ̀dọ̀ olùtajà pé òun máa tún ẹ̀yà tí ó bàjẹ́ ṣe tàbí pààrọ̀ rẹ̀ láàárín àkókò kan."]],
          slides: [
            { title: "Àwọn àṣàyàn", bullets: ["Greenhouse: ààbò tó pọ̀ jù, owó tó pọ̀ jù", "Shade net: ó tutù jù, kò wọ́n, kò dá òjò dúró", "Tunnel: ọ̀nà tí kò wọ́n jù láti bẹ̀rẹ̀ àti kọ́ṣẹ́"] },
            { title: "Fi quote mẹ́ta wéra", bullets: ["Ìtóbi kan náà, ní kíkọ, ní ìlà-ìlà", "Férémù, ìbòrí, àwọ̀n, omi ẹ̀kán, táńkì, ibi ìtọ́jú irúgbìn", "Ìkọ́lé, ìdálẹ́kọ̀ọ́, ìrànlọ́wọ́ lẹ́yìn títà"] },
            { title: "Àwọn àmì ìkìlọ̀", bullets: ["Ìdánilójú èso tàbí \"ó máa san padà ní ìgbà ọ̀gbìn kan\"", "Ìlérí láti ra èso láìsí àdéhùn", "Kíkán ọ lójú láti san owó ìdógò lónìí"] },
            { title: "Dáàbò bo ara rẹ", bullets: ["Bẹ àgbẹ̀ méjì wò tí wọ́n ti lò ó fún ìgbà ọ̀gbìn 2+", "Ìwé ìdánilójú àti ohun tí ó wà nínú rẹ̀ ní kíkọ", "Ka gbogbo àdéhùn; béèrè lọ́wọ́ olùdámọ̀ràn"] }
          ],
          sources: [FAO_GAP_GH, NORDEY_REVIEW],
          tryIt: "Béèrè quote ní kíkọ lọ́wọ́ olùtajà tàbí akọ́lé mẹ́ta ó kéré tán nítòsí rẹ fún ilé ìbòrí ìtóbi kan náà. Kọ wọ́n sínú tábìlì ní ìlà-ìlà, kí o sì sàmì sí ohun tí ọ̀kọ̀ọ̀kan fi sílẹ̀. Kọ àwọn ìbéèrè tí o máa béèrè lọ́wọ́ olùtajà kọ̀ọ̀kan, pẹ̀lú àgbẹ̀ méjì tí o lè bẹ̀ wò.",
          youCanNow: "fi quote ilé ìbòrí wéra ní ìlà-ìlà kí o sì ṣàyẹ̀wò ìlérí olùtajà kí o tó sanwó.",
          quickCheck: [
            { objective: "O2", q: "Olùtajà kan ṣe ìdánilójú tọ́ọ̀nù tòmátì 10 àti ìsanpadà láàárín ìgbà ọ̀gbìn kan, tí o bá san owó ìdógò lónìí. Kí ni o máa ṣe?", options: ["San án lẹ́sẹ̀kẹsẹ̀ kí ìfilọ̀ náà tó parí", "San ìdajì kí o sì pinnu lẹ́yìn náà", "Fọwọ́ sí i láìkà á", "Kà á sí àmì ìkìlọ̀, béèrè àwọn tí ó ti rà àti àdéhùn ní kíkọ, kí o sì fi quote wéra"], answer: 3, why: "Ìdánilójú iye èso àti kíkán ọ lójú láti sanwó lónìí jẹ́ àmì tí a mọ̀ dáadáa pé ẹnìkan ń ṣèlérí jù." },
            { objective: "O2", q: "Quote B kò wọ́n tó quote A ṣùgbọ́n kò ní ẹ̀rọ omi ẹ̀kán tàbí ìdálẹ́kọ̀ọ́. Kí ni òótọ́?", options: ["Ó hàn gbangba pé B ló dára jù", "B lè wọ́n jù nígbà tí o bá fi ohun tí ó kù kún un", "A kò nílò omi ẹ̀kán àti ìdálẹ́kọ̀ọ́ láéláé", "A kò lè fi quote wéra"], answer: 1, why: "Fi wọ́n wéra ní ìlà-ìlà; o máa ra ohun tí ó kù lọ́tọ̀." }
          ]
        },
        {
          title: "Yíyan irè oko àti títọ́ irúgbìn kékeré tó mọ́",
          objectives: ["O3"],
          minutes: 5,
          goal: "Yan irè oko àti orísìí rẹ̀ fún ilé ìbòrí rẹ, kí o sì ṣètò ibi ìtọ́jú irúgbìn kékeré tó mọ́ àti gbígbé wọn lọ sí oko.",
          text: [
            "Àwọn irè oko tí a sábà máa ń gbin abẹ́ ìbòrí ni tòmátì, tàtàṣé (capsicum, sweet pepper) àti kúkúmbà. Tòmátì ní ọjà tó tóbi jù, ṣùgbọ́n ewu kòkòrò àti àrùn rẹ̀ náà ló pọ̀ jù, pẹ̀lú Tuta absoluta. Tàtàṣé ń tà dáadáa fún òtẹ́ẹ̀lì àti supermarket, pàápàá àwọn aláwọ̀, ṣùgbọ́n ó ń pẹ́ kí ó tó bẹ̀rẹ̀ sí í so. Kúkúmbà ń dàgbà kíákíá, ó sì ń mówó wá kíákíá. Kọ́kọ́ yan nípa olùrà rẹ: irè oko, àwọ̀ àti ìtóbi wo ni wọ́n máa gbà lọ́sọ̀ọ̀sẹ̀.",
            "Lo orísìí tí a ṣe fún greenhouse. Ọ̀pọ̀ tòmátì greenhouse jẹ́ indeterminate (wọ́n ń dàgbà lọ, a sì ń so wọ́n mọ́ okùn lọ sókè fún ọ̀pọ̀ oṣù), ọ̀pọ̀ kúkúmbà greenhouse sì ń so láìsí oyin. Irúgbìn àwọn orísìí yìí lè wọ́n, nítorí náà ra irúgbìn tí a dì pa, tí a fọwọ́ sí (certified), láti ọ̀dọ̀ olùtajà tí a forúkọ rẹ̀ sílẹ̀ (KEPHIS ló ń fọwọ́ sí irúgbìn ní Kenya), má sì ṣe tọ́jú irúgbìn láti inú hybrid.",
            "Tọ́ irúgbìn kékeré ní ibi ìtọ́jú tó mọ́: àwọn àwo irúgbìn (trays) pẹ̀lú ohun ìgbìn tó mọ́ (kì í ṣe erùpẹ̀ láti oko), lábẹ́ àwọ̀n kòkòrò, pẹ̀lú bíbomirin tí a fi ìṣọ́ra ṣe. Ọ̀pọ̀ àgbẹ̀ ń ra irúgbìn kékeré lọ́wọ́ olùtọ́ irúgbìn (propagator) tí ó ní ìwé àṣẹ, èyí tí ó ń dín àkókò kù ṣùgbọ́n tí ó gbọ́dọ̀ jẹ́ orísun tó mọ́ tí a gbẹ́kẹ̀ lé. Gbé irúgbìn kékeré tí ó lágbára, tí ara rẹ̀ dá, tí kò ní kòkòrò lọ sí oko ní ìrọ̀lẹ́ tí ó tutù, ní àyè tí onímọ̀ ọ̀gbìn rẹ sọ, kí o sì bomirin wọn lẹ́sẹ̀kẹsẹ̀. Ṣètò àwọn ọjọ́: ìgbìn, gbígbé lọ sí oko, ìkórè àkọ́kọ́ àti ìkórè ìkẹyìn, kí olùrà rẹ lè rí èso ní àkókò."
          ],
          steps: ["Béèrè lọ́wọ́ olùrà rẹ irè oko, àwọ̀ àti ìtóbi tí wọ́n máa gbà lọ́sọ̀ọ̀sẹ̀.", "Yan orísìí greenhouse; ra irúgbìn tí a dì pa, tí a fọwọ́ sí.", "Tọ́ irúgbìn kékeré nínú trays pẹ̀lú ohun ìgbìn tó mọ́ lábẹ́ àwọ̀n kòkòrò, tàbí rà á lọ́wọ́ propagator tí ó ní ìwé àṣẹ.", "Gbé irúgbìn kékeré tí ó lágbára, tí kò ní kòkòrò lọ sí oko ní ìrọ̀lẹ́, ní àyè tí onímọ̀ ọ̀gbìn sọ.", "Kọ àwọn ọjọ́: ìgbìn, gbígbé lọ sí oko, ìkórè àkọ́kọ́ àti ìkẹyìn."],
          words: [["Tàtàṣé (capsicum)", "ata dídùn (sweet pepper); aláwọ̀ ewé, pupa, yẹ́lò tàbí ọsàn."], ["Indeterminate", "irú tòmátì tí ó ń dàgbà tí ó sì ń so fún ọ̀pọ̀ oṣù; a máa ń so ó mọ́ okùn lọ sókè."], ["Ohun ìgbìn (growing medium)", "àpòpọ̀ tó mọ́ (fún àpẹẹrẹ cocopeat) tí a ń lò dípò erùpẹ̀ láti tọ́ irúgbìn kékeré."], ["Propagator", "ilé-iṣẹ́ ibi ìtọ́jú irúgbìn tí ó ń tọ́ irúgbìn kékeré tí ó sì ń tà wọ́n."]],
          slides: [
            { title: "Yan nípa olùrà rẹ", bullets: ["Tòmátì: ọjà tó tóbi jù, ewu kòkòrò tó pọ̀ jù", "Tàtàṣé: òtẹ́ẹ̀lì àti supermarket; ó ń pẹ́ bẹ̀rẹ̀", "Kúkúmbà: ó yára, owó kíákíá"] },
            { title: "Orísìí greenhouse", bullets: ["Tòmátì indeterminate lórí okùn", "Kúkúmbà tí ń so láìsí oyin", "Irúgbìn tí a dì pa, tí a fọwọ́ sí; má tọ́jú irúgbìn hybrid"] },
            { title: "Irúgbìn kékeré tó mọ́", bullets: ["Trays, ohun ìgbìn tó mọ́, lábẹ́ àwọ̀n kòkòrò", "Tàbí propagator tí ó ní ìwé àṣẹ, tí a gbẹ́kẹ̀ lé", "Gbé àwọn tí kò ní kòkòrò lọ sí oko ní ìrọ̀lẹ́ tí ó tutù"] },
            { title: "Ṣètò àwọn ọjọ́", bullets: ["Ìgbìn, gbígbé lọ sí oko, ìkórè àkọ́kọ́ àti ìkẹyìn", "Jẹ́ kí ó bá ohun tí olùrà rẹ ń fẹ́ lọ́sọ̀ọ̀sẹ̀ mu"] }
          ],
          sources: [KEPHIS, ICIPE_TUTA],
          tryIt: "Béèrè lọ́wọ́ olùrà kan irè oko, àwọ̀ àti ìtóbi tí wọ́n máa gbà lọ́sọ̀ọ̀sẹ̀. Yan irè oko rẹ àti orísìí greenhouse kan, kí o sì kọ àwọn ọjọ́ fún ìgbìn (tàbí rírà irúgbìn kékeré), gbígbé lọ sí oko, ìkórè àkọ́kọ́ àti ìkórè ìkẹyìn.",
          youCanNow: "yan irè oko abẹ́ ìbòrí nípa ohun tí olùrà rẹ nílò, kí o sì ṣètò irúgbìn kékeré tó mọ́ àti gbígbé wọn lọ sí oko.",
          quickCheck: [
            { objective: "O3", q: "Kí ló yẹ kí ó pinnu irè oko tí o máa kọ́kọ́ gbin nínú greenhouse rẹ?", options: ["Ohun tí olùrà rẹ máa gbà lọ́sọ̀ọ̀sẹ̀", "Irè oko tí àpò irúgbìn rẹ̀ rẹwà jù", "Ohunkóhun tí aládùúgbò ń gbin", "Irúgbìn tí kò wọ́n jù"], answer: 0, why: "Olùrà tí ó dúró déédéé ló ń jẹ́ kí irè oko abẹ́ ìbòrí mówó wá." },
            { objective: "O3", q: "Níbo ló yẹ kí a tọ́ irúgbìn kékeré fún greenhouse?", options: ["Nínú erùpẹ̀ oko gbangba lẹ́gbẹ̀ẹ́ tòmátì àtijọ́", "Lábẹ́ igi láìsí àwọ̀n", "Nínú trays pẹ̀lú ohun ìgbìn tó mọ́ lábẹ́ àwọ̀n kòkòrò, tàbí lọ́wọ́ propagator tí ó ní ìwé àṣẹ", "Níbikíbi; kòkòrò kò já mọ́ nǹkan nínú greenhouse"], answer: 2, why: "Irúgbìn kékeré tó mọ́ ń dá kòkòrò àti àrùn dúró kí wọ́n má bàa wọ ilé ìbòrí pẹ̀lú irè oko." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Pípinnu àti bíbẹ̀rẹ̀",
        questions: [
          { objective: "O1", q: "Èwo ni KÌ Í ṢE ọ̀kan lára ipò márùn-ún nínú ẹ̀kọ́ yìí?", options: ["Omi jálẹ̀ ọdún", "Olùrà lọ́sọ̀ọ̀sẹ̀", "Greenhouse aláwọ̀ tí ó tàn jù", "Ọgbọ́n àti onímọ̀ ọ̀gbìn"], answer: 2, why: "Ipò márùn-ún náà ni omi, ọjà, ọgbọ́n, owó ìdókòwò àti ojú-ọjọ́." },
          { objective: "O1", q: "Kí ló dé tí omi gbọ́dọ̀ dájú jálẹ̀ ọdún fún greenhouse?", options: ["Òjò kì í dé irè oko tí ó wà lábẹ́ ìbòrí", "A gbọ́dọ̀ fọ ọ̀rá lójoojúmọ́", "Omi ń mú férémù tutù", "Kò ṣe pàtàkì"], answer: 0, why: "Lábẹ́ ìbòrí, gbogbo omi gbọ́dọ̀ wá láti orísun omi rẹ." },
          { objective: "O2", q: "Ilé ìbòrí wo ló tutù jù tí ó sì bá ibi tí ó gbóná mu, ṣùgbọ́n tí kò dá òjò dúró?", options: ["Greenhouse ọ̀rá tí a tì pa", "Ilé shade net", "Ilé ìkó-nǹkan-sí bíríkì", "Tunnel ọ̀rá kékeré"], answer: 1, why: "Shade net ń dín oòrùn àti ooru kù ṣùgbọ́n ó ń jẹ́ kí òjò kọjá." },
          { objective: "O2", q: "Kí ni ọ̀nà tó dára jù láti ṣàyẹ̀wò ìlérí olùtajà?", options: ["Gbẹ́kẹ̀ lé ìwé ìpolówó rẹ̀", "Kọ́kọ́ sanwó, lẹ́yìn náà béèrè", "Béèrè lórí ìkànnì àjọlò (social media) nìkan", "Bẹ àgbẹ̀ méjì wò tí wọ́n ti lo ilé wọn fún ìgbà ọ̀gbìn méjì tàbí jù bẹ́ẹ̀ lọ"], answer: 3, why: "Àwọn àgbẹ̀ tí wọ́n ti lò ó ń fi ohun tí ó ń ṣe ní tòótọ́ hàn." },
          { objective: "O3", q: "Tòmátì indeterminate:", options: ["Ń dàgbà tí ó sì ń so fún ọ̀pọ̀ oṣù, a sì ń so ó mọ́ okùn lọ sókè", "Ń dáwọ́ dídàgbà dúró lẹ́yìn ọ̀sẹ̀ díẹ̀", "Kò nílò ìtìlẹ́yìn láéláé", "Jẹ́ irú kúkúmbà kan"], answer: 0, why: "Tòmátì indeterminate ń dàgbà lọ, nítorí náà a ń so wọ́n mọ́ okùn nínú greenhouse." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe é bí òwò",
      lessons: [
        {
          title: "Ìpìlẹ̀ fertigation omi ẹ̀kán",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣàlàyé bí ẹ̀rọ fertigation omi ẹ̀kán ṣe ń ṣiṣẹ́, kí o sì ṣètò àyẹ̀wò ojoojúmọ́ rẹ̀ pẹ̀lú onímọ̀ ọ̀gbìn.",
          text: [
            "Fertigation túmọ̀ sí fífún irè oko ní ajílẹ̀ nípasẹ̀ ẹ̀rọ omi ẹ̀kán (drip), tí a ti yọ́ sínú omi ìbomirin, kí ewéko kọ̀ọ̀kan lè rí oúnjẹ àti omi díẹ̀ ní gbòǹgbò rẹ̀ lójoojúmọ́. Ó ń dín ìnáwó omi àti ajílẹ̀ kù, ó sì ń jẹ́ kí ewé gbẹ, èyí tí ó ń ràn lọ́wọ́ láti dènà àrùn. A kọ́ni nípa ẹ̀rọ omi ẹ̀kán, ẹ̀rọ fífa omi àti agbára oòrùn nínú \"Ìbomirin Oko àti Ìṣàkóso Omi\"; ẹ̀kọ́ yìí sọ̀rọ̀ nípa ohun tí ó yàtọ̀ lábẹ́ ìbòrí.",
            "Ẹ̀rọ rírọrùn kan ní táńkì omi, àsẹ́ (filter), ọ̀nà láti fi ajílẹ̀ kún un (táńkì ìpò ajílẹ̀ tàbí injector), ọ̀pá omi ńlá àti ọ̀pá omi ẹ̀kán pẹ̀lú emitter níbi ewéko kọ̀ọ̀kan. Lo kìkì ajílẹ̀ tí ó ń yọ́ nínú omi, tí a ṣe fún fertigation. Ìlànà àpòpọ̀ rẹ̀ ń yí padà pẹ̀lú irè oko àti ìpele rẹ̀ (irúgbìn kékeré, ìtànná, ìsoso) àti pẹ̀lú omi àti ilẹ̀ rẹ, nítorí náà gbà á lọ́wọ́ onímọ̀ ọ̀gbìn, láti inú àyẹ̀wò ilẹ̀ àti omi, tàbí lọ́wọ́ àwọn onímọ̀ ẹ̀rọ olùtajà ajílẹ̀. Má ṣe méfò láéláé, má sì ṣe po ọjà pọ̀ nínú táńkì kan náà àyàfi tí onímọ̀ ọ̀gbìn bá sọ pé a lè pò wọ́n pọ̀.",
            "Ṣàyẹ̀wò ẹ̀rọ náà lójoojúmọ́: àsẹ́ mọ́, gbogbo emitter ń kán omi, kò sí ọ̀pá tí ó ń jò, erùpẹ̀ ní àyíká ewéko sì rin díẹ̀, kò rin jù. Ọ̀pọ̀ àgbẹ̀ ń lo EC meter tí kò wọ́n láti ṣàyẹ̀wò pé agbára ajílẹ̀ nínú omi jẹ́ ohun tí onímọ̀ ọ̀gbìn ṣètò, àti pH meter tàbí ìwé àyẹ̀wò pH. Fi omi mímọ́ fọ àwọn ọ̀pá náà bí wọ́n ṣe gbà ọ́ nímọ̀ràn, kí iyọ̀ àti ajílẹ̀ má bàa dí àwọn emitter. Kọ omi àti oúnjẹ ọjọ́ kọ̀ọ̀kan sínú ìwé àkọsílẹ̀."
          ],
          steps: ["Gba ètò oúnjẹ ewéko ní ìpele kọ̀ọ̀kan lọ́wọ́ onímọ̀ ọ̀gbìn tàbí láti inú àyẹ̀wò ilẹ̀ àti omi.", "Lo kìkì ajílẹ̀ tí ó ń yọ́ nínú omi fún fertigation; pò wọ́n pọ̀ kìkì bí wọ́n ṣe gbà ọ́ nímọ̀ràn.", "Lójoojúmọ́: fọ àsẹ́, ṣàyẹ̀wò pé emitter ń kán, ọ̀pá kò sì jò.", "Ṣàyẹ̀wò agbára rẹ̀ pẹ̀lú EC meter àti pH bí onímọ̀ ọ̀gbìn ṣe ṣètò.", "Fọ àwọn ọ̀pá bí wọ́n ṣe gbà ọ́ nímọ̀ràn; kọ omi àti oúnjẹ ọjọ́ kọ̀ọ̀kan sílẹ̀."],
          words: [["Fertigation", "fífún irè oko ní ajílẹ̀ tí a ti yọ́ sínú omi ìbomirin nípasẹ̀ ẹ̀rọ omi ẹ̀kán."], ["Emitter", "ojú kékeré lórí ọ̀pá omi ẹ̀kán tí ó ń tú omi jáde níbi ewéko kọ̀ọ̀kan."], ["EC meter", "ẹ̀rọ kékeré tí ó ń wọn iye ajílẹ̀ (iyọ̀) tí ó ti yọ́ nínú omi."], ["Fífọ ọ̀pá (flushing)", "jíjẹ́ kí omi mímọ́ ṣàn gba inú àwọn ọ̀pá láti yọ iyọ̀ àti ohun tí ó dí i kúrò."]],
          slides: [
            { title: "Kí ni fertigation", bullets: ["Ajílẹ̀ tí a yọ́ sínú omi ẹ̀kán", "Oúnjẹ àti omi díẹ̀ ní gbòǹgbò lójoojúmọ́", "Ó ń dín ìnáwó omi kù, ó sì ń jẹ́ kí ewé gbẹ"] },
            { title: "Àwọn ẹ̀yà rẹ̀", bullets: ["Táńkì, àsẹ́, táńkì ìpò ajílẹ̀ tàbí injector", "Ọ̀pá omi ńlá àti ọ̀pá omi ẹ̀kán pẹ̀lú emitter", "Kìkì ajílẹ̀ tí ó ń yọ́ nínú omi"] },
            { title: "Ìlànà àpòpọ̀", bullets: ["Ó ń yí padà pẹ̀lú ìpele irè oko, omi àti ilẹ̀", "Láti ọ̀dọ̀ onímọ̀ ọ̀gbìn tàbí àyẹ̀wò omi àti ilẹ̀", "Má ṣe méfò láéláé; pò ó pọ̀ kìkì bí wọ́n ṣe gbà ọ́ nímọ̀ràn"] },
            { title: "Àyẹ̀wò ojoojúmọ́", bullets: ["Àsẹ́ mọ́; gbogbo emitter ń kán", "EC àti pH bí onímọ̀ ọ̀gbìn ṣe ṣètò", "Fọ ọ̀pá bí wọ́n ṣe gbà ọ́ nímọ̀ràn; kọ ọ́ sílẹ̀"] }
          ],
          sources: [FAO_GAP_GH],
          tryIt: "Ya àwòrán ẹ̀rọ fertigation omi ẹ̀kán rẹ láti táńkì dé ewéko, kí o sì kọ orúkọ ẹ̀yà kọ̀ọ̀kan. Lẹ́yìn náà kọ àkọsílẹ̀ àyẹ̀wò ojoojúmọ́ (àsẹ́, emitter, jíjò, EC, pH, ọ̀rinrin erùpẹ̀, àkọsílẹ̀) àti àwọn ìbéèrè tí o máa béèrè lọ́wọ́ onímọ̀ ọ̀gbìn rẹ nípa ètò oúnjẹ ewéko fún ìpele kọ̀ọ̀kan.",
          youCanNow: "ṣàlàyé ẹ̀rọ fertigation omi ẹ̀kán, ṣètò oúnjẹ rẹ̀ pẹ̀lú onímọ̀ ọ̀gbìn kí o sì ṣe àyẹ̀wò ojoojúmọ́ rẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Níbo ni ìlànà àpòpọ̀ fertigation rẹ yẹ kí ó ti wá?", options: ["Ìméfò láti inú àwọ̀ ewé", "Onímọ̀ ọ̀gbìn, àyẹ̀wò ilẹ̀ àti omi tàbí àwọn onímọ̀ ẹ̀rọ olùtajà", "Ìlànà kan náà fún gbogbo irè oko àti ìpele", "Ohunkóhun tí kò wọ́n jù ní ọ̀sẹ̀ yẹn"], answer: 1, why: "Ìlànà náà dá lórí irè oko, ìpele, omi àti ilẹ̀, nítorí náà ó gbọ́dọ̀ wá láti ọ̀dọ̀ onímọ̀." },
            { objective: "O3", q: "Àwọn ewéko kan ń rọ nígbà tí àwọn míì dára. Kí ni o máa kọ́kọ́ ṣàyẹ̀wò?", options: ["Bóyá emitter wọn ti dí àti bóyá àsẹ́ mọ́", "Fi ajílẹ̀ púpọ̀ sí i sínú táńkì", "Yọ àwọ̀n kòkòrò kúrò", "Fi okùn omi (hose) bomirin láti òkè"], answer: 0, why: "Emitter tí ó dí jẹ́ ìdí tí ó wọ́pọ̀ tí àwọn ewéko kan kò fi rí omi tàbí oúnjẹ." }
          ]
        },
        {
          title: "Ṣíṣàkóso ooru, ọ̀rinrin, kòkòrò àti ìmọ́tótó",
          objectives: ["O4"],
          minutes: 6,
          goal: "Ṣe ìlànà ojoojúmọ́ àti ọ̀sọ̀ọ̀sẹ̀ fún ooru, ọ̀rinrin, kòkòrò àti ìmọ́tótó nínú ilé ìbòrí rẹ.",
          text: [
            "Ooru àti ọ̀rinrin ni ìṣòro ojoojúmọ́ tó tóbi jù lábẹ́ ìbòrí ní ilẹ̀ olóoru. Greenhouse tí a tì pa lè gbóná ju ìta lọ gan-an, afẹ́fẹ́ tí ó gbóná, tí kò rìn, tí ó sì rin sì ń mú àrùn olú (fungal) wá bí late blight àti grey mould. Ṣí ojú afẹ́fẹ́ ẹ̀gbẹ́ àti ti òrùlé ní àárọ̀ kí o sì tì wọ́n ní ìrọ̀lẹ́ bí ó ṣe yẹ, jẹ́ kí ewé gbẹ nípa bíbomirin kìkì nípasẹ̀ omi ẹ̀kán, gé àwọn ewé àtijọ́ ìsàlẹ̀ àti ẹ̀ka ẹ̀gbẹ́ kí afẹ́fẹ́ lè rìn, má sì ṣe gbìn wọ́n há jù. Shade net lórí òrùlé ní àwọn oṣù tí ó gbóná jù lè ràn lọ́wọ́. Fi thermometer (ìwọ̀n ooru) tí kò wọ́n sínú ilé kí o sì máa kọ ìwọ̀n rẹ̀ sílẹ̀.",
            "Àwọ̀n kòkòrò ń dá ọ̀pọ̀ kòkòrò dúró, ṣùgbọ́n àwọn tí ó bá wọlé máa ń pọ̀ sí i kíákíá nítorí kò sí òjò tàbí ọ̀tá àdáyébá láti dá wọn dúró: whiteflies, thrips, aphids, spider mites àti, nínú tòmátì, Tuta absoluta. Nínú erùpẹ̀, root-knot nematodes jẹ́ ìṣòro tí ó wọ́pọ̀ nínú greenhouse tí a ti lò fún ìgbà pípẹ́. Ṣàyẹ̀wò gbogbo ìlà ewéko lọ́sọ̀ọ̀sẹ̀, so káàdì alálẹ̀mọ́ yẹ́lò kọ́ fún whiteflies àti aphids àti aláwọ̀ búlúù fún thrips, kí o sì lo pańpẹ́ pheromone fún Tuta absoluta. Tẹ̀lé àwọn ìgbésẹ̀ IPM; tí oògùn kòkòrò bá pọndandan, lo kìkì èyí tí a forúkọ rẹ̀ sílẹ̀ fún irè oko rẹ (PCPB ní Kenya, NAFDAC ní Nàìjíríà, EPA ní Ghana), tẹ̀lé àkọlé rẹ̀ (label) àti àkókò ìdúró kí a tó kórè (pre-harvest interval) rẹ̀, kí o sì wọ aṣọ ààbò, nítorí pé o máa ń ká èso nínú ibi tí a tì pa léraléra.",
            "Ìmọ́tótó ń dá kòkòrò àti àrùn dúró lóde. Lo ilẹ̀kùn méjì kí ọ̀kan lè máa wà ní títì nígbà gbogbo, àti ìgbá ìfọ bàtà (footbath) ní ẹnu ọ̀nà. Dín àwọn àlejò kù, kí àwọn òṣìṣẹ́ sì máa fọ ọwọ́ wọn kí wọ́n sì wọ aṣọ tó mọ́. Kó àwọn ewéko aláìsàn àti ewé àti èso tí ó já bọ́ kúrò nínú àpò tí a dì pa, jẹ́ kí àyíká ilé ìbòrí wà láìsí koríko, tún ihò inú àwọ̀n ṣe lẹ́sẹ̀kẹsẹ̀, kí o sì fọ àwọn irinṣẹ́. Láàárín ìgbà ọ̀gbìn kan sí èkejì, kó gbogbo pàǹtírí ewéko kúrò kí o sì fọ ilé ìbòrí náà kí o tó tún gbìn."
          ],
          steps: ["Àárọ̀ kọ̀ọ̀kan: ṣí ojú afẹ́fẹ́; ka thermometer; wò bóyá ewé rin.", "Ìrọ̀lẹ́ kọ̀ọ̀kan: ti ojú afẹ́fẹ́ bí ó ṣe yẹ; kọ ìwọ̀n ooru sílẹ̀.", "Lọ́sọ̀ọ̀sẹ̀: ṣàyẹ̀wò gbogbo ìlà; ka àwọn kòkòrò tí káàdì alálẹ̀mọ́ àti pańpẹ́ pheromone mú.", "Lọ́sọ̀ọ̀sẹ̀: gé ewé ìsàlẹ̀ àti ẹ̀ka ẹ̀gbẹ́; kó ewéko aláìsàn àti pàǹtírí kúrò nínú àpò tí a dì pa.", "Nígbà gbogbo: ilẹ̀kùn méjì (ọ̀kan ní títì), ìgbá ìfọ bàtà, àlejò díẹ̀, irinṣẹ́ tó mọ́, tún ihò àwọ̀n ṣe."],
          words: [["Ìfẹ́fẹ́ (ventilation)", "jíjẹ́ kí afẹ́fẹ́ rìn gba inú ilé ìbòrí nípasẹ̀ ojú afẹ́fẹ́ láti dín ooru àti ọ̀rinrin kù."], ["Ọ̀rinrin afẹ́fẹ́ (humidity)", "iye omi tí ó wà nínú afẹ́fẹ́; ọ̀rinrin tó pọ̀ ń ran àrùn olú lọ́wọ́."], ["Root-knot nematode", "kòkòrò tíńtín bí ekòló nínú erùpẹ̀ tí ó ń mú kí gbòǹgbò wú, tí ó sì ń sọ ewéko di aláìlera."], ["Ìgbá ìfọ bàtà (footbath)", "àwo kékeré tí ó ní oògùn apakòkòrò àrùn ní ẹnu ọ̀nà láti fọ bàtà."]],
          slides: [
            { title: "Ooru àti ọ̀rinrin", bullets: ["Ṣí ojú afẹ́fẹ́ ní àárọ̀, tì í bí ó ṣe yẹ", "Bomirin kìkì nípasẹ̀ omi ẹ̀kán; jẹ́ kí ewé gbẹ", "Gé ewé ìsàlẹ̀ àti ẹ̀ka ẹ̀gbẹ́; má ṣe gbìn wọ́n há jù"] },
            { title: "Kòkòrò lábẹ́ ìbòrí", bullets: ["Whiteflies, thrips, aphids, spider mites", "Tuta absoluta nínú tòmátì", "Root-knot nematodes nínú erùpẹ̀ àtijọ́"] },
            { title: "Ṣọ́ kí o sì dẹ pańpẹ́", bullets: ["Ṣàyẹ̀wò gbogbo ìlà lọ́sọ̀ọ̀sẹ̀", "Káàdì yẹ́lò: whiteflies, aphids; búlúù: thrips", "Pańpẹ́ pheromone fún Tuta absoluta"] },
            { title: "Ìmọ́tótó", bullets: ["Ilẹ̀kùn méjì àti ìgbá ìfọ bàtà", "Àlejò díẹ̀; ọwọ́, aṣọ àti irinṣẹ́ tó mọ́", "Kó pàǹtírí kúrò ní dídì; tún àwọ̀n ṣe lẹ́sẹ̀kẹsẹ̀"] }
          ],
          sources: [FAO_GAP_GH, ICIPE_TUTA, PCPB, NAFDAC, GHANA_EPA],
          tryIt: "Kọ ìlànà ojú-ewé kan fún ilé ìbòrí rẹ: ohun tí o máa ṣe ní àárọ̀ àti ìrọ̀lẹ́ kọ̀ọ̀kan, ohun tí o máa ṣe lọ́sọ̀ọ̀sẹ̀ (àyẹ̀wò, pańpẹ́, gígé ewé, pàǹtírí) àti òfin ìwọlé rẹ (ilẹ̀kùn, ìgbá ìfọ bàtà, àlejò). Lẹ̀ ẹ́ mọ́ ilẹ̀kùn.",
          youCanNow: "ṣe ìlànà ojoojúmọ́ àti ọ̀sọ̀ọ̀sẹ̀ fún ooru, ọ̀rinrin, kòkòrò àti ìmọ́tótó nínú ilé ìbòrí.",
          quickCheck: [
            { objective: "O4", q: "Inú ilé gbóná, ó sì rin, o sì rí grey mould tí ó ń bẹ̀rẹ̀. Kí ló máa ràn lọ́wọ́ jù?", options: ["Fi okùn omi (hose) bomirin àwọn ewé", "Ti gbogbo ojú afẹ́fẹ́ ní gbogbo ọjọ́", "Gbin ewéko púpọ̀ sí i, kí wọ́n súnmọ́ ara wọn", "Ṣí ojú afẹ́fẹ́, jẹ́ kí ewé gbẹ, kí o sì gé ewé ìsàlẹ̀ kí afẹ́fẹ́ lè rìn"], answer: 3, why: "Afẹ́fẹ́ tí ń rìn àti ewé gbígbẹ ń dín ìtànkálẹ̀ àrùn olú kù." },
            { objective: "O4", q: "Kí ló dé tí a fi ń lo ilẹ̀kùn méjì ní ẹnu ọ̀nà greenhouse?", options: ["Kí ó lè dà bí ti ìgbàlódé", "Kí ọ̀kan lè máa wà ní títì nígbà gbogbo, kí kòkòrò díẹ̀ ló lè wọlé", "Láti há àwọn òṣìṣẹ́ mọ́ inú", "Ó ń jẹ́ kí ooru púpọ̀ wọlé"], answer: 1, why: "Tí ilẹ̀kùn kan bá wà ní títì nígbà gbogbo, kòkòrò kò lè fò wọlé tààrà." }
          ]
        },
        {
          title: "Ìwé ìṣirò òwò: èrè àkọ́kọ́ àti àkókò ìsanpadà",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò owó ìnáwó, owó tí ń wọlé, èrè àkọ́kọ́ àti àkókò ìsanpadà fún irè oko abẹ́ ìbòrí kan.",
          text: [
            "Ìwé ìṣirò òwò (business case) ń fi hàn pẹ̀lú ìṣirò bóyá ilé ìbòrí lè san owó ara rẹ̀ padà kí ó tó gbó. O nílò irú ìnáwó méjì. Owó ìdókòwò ni ohun tí o san lẹ́ẹ̀kan: ilé ìbòrí, ẹ̀rọ omi ẹ̀kán, táńkì àti ìkọ́lé. Owó ìnáwó ìgbà kọ̀ọ̀kan ń wá ní ìgbà ọ̀gbìn kọ̀ọ̀kan: irúgbìn tàbí irúgbìn kékeré, ajílẹ̀, ààbò irè oko, owó òṣìṣẹ́, omi àti iná, ọkọ̀, àpò ìdìjà àti owó ọjà.",
            "Èrè àkọ́kọ́ fún ìgbà ọ̀gbìn kan = owó tí ń wọlé (kg tí o retí láti tà x iye owó kg kan) - owó ìnáwó ìgbà kọ̀ọ̀kan. Àkókò ìsanpadà = owó ìdókòwò / èrè àkọ́kọ́ lọ́dún. Àpẹẹrẹ àhùsọ ní KES, láti fi kọ́ ọ̀nà náà nìkan: owó ìdókòwò KES 400,000; ìgbà ọ̀gbìn tòmátì kan lọ́dún; títà tí a retí 4,000 kg ní KES 40 = KES 160,000; owó ìnáwó KES 90,000; èrè àkọ́kọ́ KES 70,000 lọ́dún. Ìsanpadà = 400,000 / 70,000 = nǹkan bí ọdún 5.7. Tí olùtajà bá sọ pé ìbòrí máa pẹ́ tó nǹkan bí ọdún 4, ìṣirò yìí kò ní san owó padà kí o tó ní láti pààrọ̀ rẹ̀. Àmì ìkìlọ̀ ni èyí, kì í ṣe ìdí láti yá owó púpọ̀ sí i.",
            "Báyìí, dán an wò. Tí iye owó bá dín kù ní ìdá kan nínú mẹ́rin (KES 30 dípò 40), owó tí ń wọlé di KES 120,000, èrè di KES 30,000, ìsanpadà sì ju ọdún 13 lọ. Iye owó tòmátì ń yí padà gan-an láti àsìkò kan sí èkejì, nítorí náà dán iye owó tí kò dára wò, èso tí ó dín kù àti irè oko tí ó ṣègbé. Lẹ́yìn náà wá ọ̀nà láti mú un dára sí i: ilé ìbòrí tí ó kéré jù tàbí tí kò wọ́n, àdéhùn pẹ̀lú olùrà, ìgbà ọ̀gbìn méjì lọ́dún, irè oko olówó gíga jù bí tàtàṣé aláwọ̀, tàbí pínpín owó náà nínú ẹgbẹ́. Ìṣirò kan náà ń ṣiṣẹ́ ní NGN, GHS tàbí XOF: àgbẹ̀ kan nítòsí Dakar ní Senegal ń ṣe ìṣirò kan náà ní CFA franc. Lo quote àti iye owó tìrẹ, máa kọ àkọsílẹ̀ gidi nígbà tí o bá bẹ̀rẹ̀, kí o sì béèrè lọ́wọ́ olùdámọ̀ràn tí o gbẹ́kẹ̀ lé kí o tó yá owó tàbí fọwọ́ sí nǹkan."
          ],
          steps: ["Ṣírò owó ìdókòwò láti inú quote tí o yàn.", "Kọ owó ìnáwó ìgbà ọ̀gbìn kan sílẹ̀.", "Owó tí ń wọlé = kg tí o retí láti tà x iye owó kg kan (láti ọ̀dọ̀ olùrà rẹ).", "Èrè àkọ́kọ́ = owó tí ń wọlé - owó ìnáwó; lọ́dún = èrè x iye ìgbà ọ̀gbìn lọ́dún.", "Ìsanpadà = owó ìdókòwò / èrè àkọ́kọ́ lọ́dún; fi wé ọjọ́ orí ìbòrí.", "Dán iye owó tí ó dín kù ní ìdá kan nínú mẹ́rin wò, èso tí ó dín kù àti irè oko tí ó ṣègbé."],
          words: [["Owó ìdókòwò (investment)", "owó tí a san lẹ́ẹ̀kan láti bẹ̀rẹ̀, bí ilé ìbòrí àti ẹ̀rọ omi ẹ̀kán."], ["Owó ìnáwó ìgbà kọ̀ọ̀kan (running costs)", "owó tí a ń ná ní ìgbà ọ̀gbìn kọ̀ọ̀kan, bí irúgbìn kékeré, ajílẹ̀, owó òṣìṣẹ́ àti ọkọ̀."], ["Èrè àkọ́kọ́ (gross margin)", "owó tí ń wọlé yọ owó ìnáwó ìgbà kọ̀ọ̀kan kúrò, fún ìgbà ọ̀gbìn kan tàbí ọdún kan."], ["Àkókò ìsanpadà (payback period)", "bí ó ṣe máa pẹ́ tó kí èrè àkọ́kọ́ tó san owó ìdókòwò padà."]],
          slides: [
            { title: "Irú ìnáwó méjì", bullets: ["Owó ìdókòwò: ilé ìbòrí, omi ẹ̀kán, táńkì, ìkọ́lé", "Owó ìnáwó: irúgbìn kékeré, ajílẹ̀, òṣìṣẹ́, omi, ọkọ̀"] },
            { title: "Àwọn agbekalẹ̀ ìṣirò", bullets: ["Èrè àkọ́kọ́ = owó tí ń wọlé - owó ìnáwó", "Ìsanpadà = owó ìdókòwò / èrè àkọ́kọ́ lọ́dún", "Ìsanpadà gbọ́dọ̀ kúrú ju ọjọ́ orí ìbòrí lọ"] },
            { title: "Àpẹẹrẹ àhùsọ (KES)", bullets: ["Owó ìdókòwò 400,000; èrè 70,000 lọ́dún", "Ìsanpadà nǹkan bí ọdún 5.7", "Iye owó dín kù ní ìdá kan nínú mẹ́rin: ó ju ọdún 13 lọ"] },
            { title: "Mú un lágbára sí i", bullets: ["Ilé ìbòrí kékeré tàbí pínpín nínú ẹgbẹ́", "Àdéhùn olùrà; ìgbà ọ̀gbìn méjì lọ́dún", "Irè oko olówó gíga jù; àkọsílẹ̀ gidi; béèrè lọ́wọ́ olùdámọ̀ràn"] }
          ],
          sources: [NORDEY_REVIEW],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ìwé ìṣirò òwò rẹ fún iṣẹ́ àgbẹ̀ abẹ́ ìbòrí fún irè oko kan: ipò márùn-ún rẹ, ilé ìbòrí pẹ̀lú quote mẹ́ta tí o ti fi wéra àti àyẹ̀wò olùtajà tí o ti ṣe, irè oko àti orísìí rẹ̀, ètò ibi ìtọ́jú irúgbìn àti fertigation rẹ, ìlànà ọ̀sọ̀ọ̀sẹ̀ rẹ, àti owó ìdókòwò, owó ìnáwó, owó tí ń wọlé, èrè àkọ́kọ́, àkókò ìsanpadà, àti ìsanpadà tí iye owó bá dín kù ní ìdá kan nínú mẹ́rin.",
          youCanNow: "ṣírò èrè àkọ́kọ́ àti àkókò ìsanpadà fún irè oko abẹ́ ìbòrí kí o sì dán an wò pẹ̀lú iye owó tí ó dín kù.",
          quickCheck: [
            { objective: "O5", q: "Owó ìdókòwò jẹ́ 300,000, èrè àkọ́kọ́ sì jẹ́ 100,000 lọ́dún. Kí ni àkókò ìsanpadà?", options: ["Ọdún 1", "Ọdún 30", "Ọdún 3", "Ọdún 100"], answer: 2, why: "300,000 / 100,000 = ọdún 3." },
            { objective: "O5", q: "Ìsanpadà rẹ jẹ́ ọdún 6 ṣùgbọ́n ìbòrí máa pẹ́ tó nǹkan bí ọdún 4. Kí ni èyí ń sọ fún ọ?", options: ["Ìṣirò náà kò ní san owó padà lásìkò; yí ètò padà tàbí má ṣe dókòwò báyìí", "Kò burú; yá owó púpọ̀ sí i", "Ìsanpadà kò ṣe pàtàkì", "Ra greenhouse kejì"], answer: 0, why: "Tí ìbòrí bá gbó kí ìsanpadà tó dé, o máa pàdánù owó àyàfi tí ètò bá yí padà." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe é bí òwò",
        questions: [
          { objective: "O3", q: "Kí ni fertigation?", options: ["Fífi okùn omi fín oògùn kòkòrò", "Sísun pàǹtírí ewéko", "Fífi àwọ̀n bo greenhouse", "Fífún irè oko ní ajílẹ̀ tí a yọ́ sínú omi ìbomirin ẹ̀kán"], answer: 3, why: "Fertigation ń bọ́ ewéko nípasẹ̀ ọ̀pá omi ẹ̀kán." },
          { objective: "O3", q: "EC meter ń sọ fún ọ:", options: ["Ìwọ̀n ooru afẹ́fẹ́", "Iye ajílẹ̀ tí ó ti yọ́ nínú omi", "Iye owó tòmátì", "Iye kòkòrò tí ó wà lórí káàdì"], answer: 1, why: "EC ń wọn iyọ̀ tí ó ti yọ́, èyí tí ó ń fi agbára ajílẹ̀ hàn." },
          { objective: "O4", q: "Kòkòrò wo ló jẹ́ ewu pàtàkì fún tòmátì inú greenhouse?", options: ["Tuta absoluta", "Eéṣú", "Eku nínú ilé ìkó-oúnjẹ-sí", "Ẹ̀gbọn màlúù"], answer: 0, why: "Tuta absoluta ń jẹ ewé, igi àti èso tòmátì, ó sì ń pọ̀ sí i kíákíá lábẹ́ ìbòrí." },
          { objective: "O4", q: "Káàdì alálẹ̀mọ́ búlúù nínú greenhouse máa ń mú:", options: ["Whiteflies", "Spider mites", "Thrips", "Nematodes"], answer: 2, why: "Àwọ̀ búlúù ń fa thrips mọ́ra; yẹ́lò ń fa whiteflies àti aphids." },
          { objective: "O5", q: "Èrè àkọ́kọ́ ni:", options: ["Owó tí ń wọlé yọ owó ìnáwó ìgbà kọ̀ọ̀kan kúrò", "Iye owó ilé ìbòrí", "Iye ewéko", "Owó tí ń wọlé pẹ̀lú owó ìdókòwò"], answer: 0, why: "Èrè àkọ́kọ́ ń fi ohun tí ó kù láti inú títà hàn lẹ́yìn owó ìnáwó ìgbà kọ̀ọ̀kan." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Greenhouse àti Iṣẹ́ Àgbẹ̀ Abẹ́ Ìbòrí fún Irè Oko Olówó Gíga",
    questions: [
      { objective: "O1", q: "Iṣẹ́ àgbẹ̀ abẹ́ ìbòrí túmọ̀ sí:", options: ["Dídá oko ní alẹ́ nìkan", "Gbígbin irè oko lábẹ́ ìbòrí bí greenhouse, shade net tàbí tunnel", "Lílo ajá olùṣọ́", "Dídá oko láìsí omi"], answer: 1, why: "Ìbòrí ń dáàbò bo irè oko lọ́wọ́ òjò, yìnyín àti ọ̀pọ̀ kòkòrò." },
      { objective: "O1", q: "Ipò olùrà wo ló ṣe àtìlẹ́yìn fún greenhouse jù?", options: ["\"Màá tà á ní ọjà lọ́nà kan\"", "Kò sí olùrà síbẹ̀", "Aládùúgbò kan lè ra díẹ̀", "Òtẹ́ẹ̀lì kan gbà láti gba iye kan pàtó lọ́sọ̀ọ̀sẹ̀"], answer: 3, why: "Olùrà tí ó dúró déédéé lọ́sọ̀ọ̀sẹ̀ jẹ́ ọ̀kan lára ipò márùn-ún." },
      { objective: "O1", q: "Ìwádìí ọdún 2017 lórí gbígbin abẹ́ ìbòrí ní Áfíríkà gúúsù Sàhárà rí i pé:", options: ["Kò bá gbogbo ojú-ọjọ́ mu, ó sì ṣì nílò àwọn ọ̀nà míì láti ṣàkóso kòkòrò", "Ó ń mú gbogbo kòkòrò kúrò", "Kò nílò ọgbọ́n kankan", "Ó máa ń mówó wá ní ìgbà ọ̀gbìn kan nígbà gbogbo"], answer: 0, why: "Ìwádìí náà rí ààlà nípa ojú-ọjọ́, ó sì rí i pé ọgbọ́n, ìrànlọ́wọ́ àti owó jẹ́ ìdènà." },
      { objective: "O1", q: "Èwo ni ipò owó ìdókòwò?", options: ["Níní tírákítọ̀", "Níní ìdílé ńlá", "Owó fún ilé ìbòrí, ọ̀gbìn àkọ́kọ́ àti ìnáwó láìfi owó oúnjẹ wewu", "Àwọ̀ greenhouse tí ó tàn"], answer: 2, why: "O nílò owó fún ìbẹ̀rẹ̀ àti ìnáwó láìfi ìdílé rẹ sínú ewu." },
      { objective: "O2", q: "Kí ló dé tí a fi ń fi quote wéra ní ìlà-ìlà?", options: ["Láti rí ohun tí ọ̀kọ̀ọ̀kan ní nínú àti ohun tí ó fi sílẹ̀", "Láti yan quote tí ó gùn jù", "Nítorí pé àwọn olùtajà fẹ́ràn rẹ̀", "Kò wúlò"], answer: 0, why: "Quote tí kò wọ́n lè fi omi ẹ̀kán, ìdálẹ́kọ̀ọ́ tàbí ìkọ́lé sílẹ̀." },
      { objective: "O2", q: "Èwo ni àmì ìkìlọ̀ láti ọ̀dọ̀ olùtajà greenhouse?", options: ["Ìwé ìdánilójú ní kíkọ", "Àwọn àgbẹ̀ tí o lè bẹ̀ wò", "Àkọsílẹ̀ tí ó ṣe kedere nípa ohun tí ó wà nínú rẹ̀", "Ìdánilójú iye èso àti kíkán ọ lójú láti sanwó lónìí"], answer: 3, why: "Ìdánilójú àti kíkán ọ lójú láti sanwó kíákíá jẹ́ àmì pé ẹnìkan ń ṣèlérí jù." },
      { objective: "O2", q: "Àṣàyàn wo ni ọ̀nà tí kò wọ́n jù láti bẹ̀rẹ̀ àti kọ́ṣẹ́?", options: ["Greenhouse irin ńlá", "Tunnel tí a lè rìn wọ inú rẹ̀ tàbí tunnel kékeré", "Greenhouse dígí", "Ilé ìtútù (cold store)"], answer: 1, why: "Tunnel ni owó rẹ̀ kéré jù, ó sì ń jẹ́ kí o kọ́ṣẹ́ kí o tó ṣe ìdókòwò ńlá." },
      { objective: "O2", q: "Kí ni o yẹ kí o gbà ní kíkọ kí o tó sanwó?", options: ["Nọ́mbà fóònù olùtajà nìkan", "Kò sí nǹkan; ìgbẹ́kẹ̀lé ti tó", "Ìwé ìdánilójú, ọjọ́ ìmúwá àti gbogbo ohun tí ó wà nínú rẹ̀", "Fọ́tò olùtajà"], answer: 2, why: "Àdéhùn ní kíkọ ń dáàbò bò ọ́ tí nǹkan kan bá yíwọ́." },
      { objective: "O3", q: "Ọ̀pọ̀ orísìí kúkúmbà greenhouse:", options: ["Ń so láìsí oyin", "Nílò oyin nínú ilé", "Ń hù ní ìgbà òtútù nìkan", "Ni a ń gbìn láti inú ẹ̀ka gígé"], answer: 0, why: "A ṣe ọ̀pọ̀ kúkúmbà greenhouse kí wọ́n lè so láìsí ìdàpọ̀ òdòdó (pollination)." },
      { objective: "O3", q: "Ìgbà wo ló dára jù láti gbé irúgbìn kékeré lọ sí oko?", options: ["Ní ọ̀sán gangan nínú oòrùn", "Nígbà tí òjò líle ń rọ̀ níta", "Kí irúgbìn kékeré tó ní gbòǹgbò", "Ní ìrọ̀lẹ́ tí ó tutù, lẹ́yìn náà bomirin wọn"], answer: 3, why: "Ìrọ̀lẹ́ tí ó tutù ń dín ìpayà ìṣípò (transplant shock) kù." },
      { objective: "O3", q: "Àwọn ajílẹ̀ wo la ń lò fún fertigation?", options: ["Ajílẹ̀ ẹlẹ́yinjú èyíkéyìí", "Ajílẹ̀ tí ó ń yọ́ nínú omi, tí a ṣe fún fertigation", "Ìgbẹ́ ẹran tuntun", "Lime (ẹfun)"], answer: 1, why: "Kìkì ajílẹ̀ tí ó ń yọ́ pátápátá ló lè gba inú ọ̀pá omi ẹ̀kán láìdí i." },
      { objective: "O4", q: "Afẹ́fẹ́ tí ó gbóná, tí kò rìn, tí ó sì rin lábẹ́ ìbòrí máa ń mú wá jù:", options: ["Àrùn olú bí late blight àti grey mould", "Ìdàpọ̀ òdòdó tí ó yára jù", "Kòkòrò díẹ̀", "Ìnáwó tí ó dín kù"], answer: 0, why: "Ọ̀rinrin àti ewé tí ó rin ń ran àrùn olú lọ́wọ́ láti tàn kálẹ̀." },
      { objective: "O4", q: "Kí ló dé tí kòkòrò tí ó wọ inú greenhouse fi lè pọ̀ sí i kíákíá?", options: ["Ọ̀rá ń bọ́ wọn", "Wọ́n máa ń tóbi jù nígbà gbogbo", "Greenhouse ń fa òjò mọ́ra", "Kò sí òjò tàbí ọ̀pọ̀ ọ̀tá àdáyébá nínú rẹ̀ láti dá wọn dúró"], answer: 3, why: "Lábẹ́ ìbòrí, àwọn ohun àdáyébá tí ń dá kòkòrò dúró kò pọ̀." },
      { objective: "O4", q: "Èwo ni òfin ìmọ́tótó tó dára?", options: ["Jẹ́ kí àlejò láti oko míì máa rìn wọlé bí wọ́n ṣe fẹ́", "Fi èso tí ó já bọ́ sílẹ̀ lórí ilẹ̀", "Lo ìgbá ìfọ bàtà, kí ọ̀kan lára ilẹ̀kùn méjì sì máa wà ní títì nígbà gbogbo", "Fi ihò sílẹ̀ nínú àwọ̀n fún afẹ́fẹ́"], answer: 2, why: "Ìgbá ìfọ bàtà àti ilẹ̀kùn méjì ń dá kòkòrò àti àrùn dúró lóde." },
      { objective: "O4", q: "Tí oògùn kòkòrò bá pọndandan nínú greenhouse ní Kenya, ó gbọ́dọ̀ jẹ́:", options: ["Èyí tí a forúkọ rẹ̀ sílẹ̀ pẹ̀lú PCPB, tí a lò bí àkọlé rẹ̀ ṣe sọ, pẹ̀lú aṣọ ààbò", "Ọjà èyíkéyìí tí aládùúgbò ní", "Èyí tí a pò ní agbára jù nítorí pé inú ilé ni", "Èyí tí a fín kí a tó ká èso díẹ̀"], answer: 0, why: "Kìkì ọjà tí a forúkọ rẹ̀ sílẹ̀, tí a lò bí àkọlé ṣe sọ, ló bá òfin mu tí kò sì léwu." },
      { objective: "O5", q: "Èwo ni owó ìdókòwò?", options: ["Irúgbìn kékeré", "Owó òṣìṣẹ́ fún kíká èso", "Ilé ìbòrí greenhouse àti ẹ̀rọ omi ẹ̀kán", "Ọkọ̀ lọ sí ọjà"], answer: 2, why: "Owó ìdókòwò ni a san lẹ́ẹ̀kan láti bẹ̀rẹ̀; àwọn yòókù jẹ́ owó ìnáwó ìgbà kọ̀ọ̀kan." },
      { objective: "O5", q: "Owó ìdókòwò 500,000; èrè àkọ́kọ́ 125,000 lọ́dún. Kí ni àkókò ìsanpadà?", options: ["Ọdún 2", "Ọdún 6", "Ọdún 10", "Ọdún 4"], answer: 3, why: "500,000 / 125,000 = ọdún 4." },
      { objective: "O5", q: "Owó tí ń wọlé 200,000, owó ìnáwó 120,000. Kí ni èrè àkọ́kọ́?", options: ["320,000", "80,000", "120,000", "200,000"], answer: 1, why: "200,000 - 120,000 = 80,000." },
      { objective: "O5", q: "Kí ló dé tí a fi ń dán ohun tí ó máa ṣẹlẹ̀ wò tí iye owó bá dín kù ní ìdá kan nínú mẹ́rin?", options: ["Nítorí pé iye owó ẹ̀fọ́ ń yí padà, o sì gbọ́dọ̀ mọ̀ bóyá o ṣì lè san owó padà", "Láti mú kí ìṣirò dára lójú", "Nítorí pé iye owó kì í yí padà láéláé", "Olùtajà ló ní kí a ṣe é"], answer: 0, why: "Ètò tí ó ń ṣiṣẹ́ kìkì ní iye owó tó dára jù léwu." },
      { objective: "O5", q: "Ìyípadà wo ló lè mú ìwé ìṣirò òwò tí kò lágbára lágbára sí i?", options: ["Yíyá owó púpọ̀ sí i láti ra greenhouse ńlá jù", "Ṣíṣàìka ìsanpadà sí", "Yíyan irè oko tí kò ní olùrà", "Àdéhùn olùrà, ilé ìbòrí kékeré tàbí ìgbà ọ̀gbìn méjì lọ́dún"], answer: 3, why: "Owó ìdókòwò tí ó kéré, iye owó tí ó dúró déédéé tàbí ìgbà ọ̀gbìn púpọ̀ ń mú èrè pọ̀ sí i tàbí dín àkókò ìsanpadà kù." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [1, 2, 5, 6, 9, 10, 11, 13, 16] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn nínú ìwé ìṣirò òwò ṣe, kí o sì tún un ṣàyẹ̀wò pẹ̀lú onímọ̀ ọ̀gbìn tàbí olùdámọ̀ràn tí o gbẹ́kẹ̀ lé kí o tó dókòwò.",
    criteria: [
      { name: "Ṣé ó bá mi mu?", objective: "O1", notYet: "Àwọn ipò márùn-ún kò sí, tàbí a dáhùn wọn láìsí ìdí.", meets: "A dáhùn omi, ọjà, ọgbọ́n, owó ìdókòwò àti ojú-ọjọ́ ní ọ̀kọ̀ọ̀kan pẹ̀lú bẹ́ẹ̀ ni tàbí bẹ́ẹ̀ kọ́ àti ìdí rẹ̀, a sì kọ ìpinnu tí ó ṣe kedere.", exceeds: "Ipò tí ó kù ní ètò láti tún un ṣe, bí olùrà tí a dárúkọ tàbí àyẹ̀wò omi." },
      { name: "Ilé ìbòrí àti àyẹ̀wò olùtajà", objective: "O2", notYet: "Quote kan ṣoṣo, tàbí a gba ìlérí olùtajà láìṣàyẹ̀wò.", meets: "Quote mẹ́ta ó kéré tán tí a fi wéra ní ìlà-ìlà, a béèrè àwọn tí ó ti rà, a sì gba ìwé ìdánilójú àti ohun tí ó wà nínú rẹ̀ ní kíkọ.", exceeds: "A bẹ àgbẹ̀ méjì wò, a sì kọ èsì gidi wọn sílẹ̀." },
      { name: "Ètò irè oko àti fertigation", objective: "O3", notYet: "Kò sí ètò àkókò irè oko, tàbí ètò oúnjẹ ewéko jẹ́ ìméfò.", meets: "A yan irè oko àti orísìí rẹ̀ nípa ohun tí olùrà nílò, pẹ̀lú ọjọ́ fún ibi ìtọ́jú irúgbìn, gbígbé lọ sí oko àti ìkórè, àti ètò oúnjẹ láti ọ̀dọ̀ onímọ̀ ọ̀gbìn tàbí àyẹ̀wò pẹ̀lú àyẹ̀wò omi ẹ̀kán ojoojúmọ́.", exceeds: "Ètò náà ní àfojúsùn EC àti pH tí onímọ̀ ọ̀gbìn ṣètò àti ìwé àkọsílẹ̀ ojoojúmọ́." },
      { name: "Ìlànà ooru, kòkòrò àti ìmọ́tótó", objective: "O4", notYet: "Kò sí ìlànà, tàbí fífín oògùn nìkan la fi ń ṣàkóso kòkòrò.", meets: "Ìlànà ojoojúmọ́ àti ọ̀sọ̀ọ̀sẹ̀ fún ojú afẹ́fẹ́, àyẹ̀wò oko, pańpẹ́, gígé ewé, pàǹtírí àti òfin ìwọlé, pẹ̀lú kìkì ọjà tí a forúkọ rẹ̀ sílẹ̀ tí a lò bí àkọlé ṣe sọ.", exceeds: "A lẹ ìlànà náà mọ́ ilẹ̀kùn, a sì ti tẹ̀lé e tí a sì kọ ọ́ sílẹ̀ fún ọ̀sẹ̀ méjì ó kéré tán." },
      { name: "Ìṣirò àti ìsanpadà", objective: "O5", notYet: "Kò sí ìṣirò, tàbí èrè àkọ́kọ́ tàbí ìsanpadà kò tọ́.", meets: "Owó ìdókòwò, owó ìnáwó, owó tí ń wọlé, èrè àkọ́kọ́ àti ìsanpadà tọ́, a fi wọ́n wé ọjọ́ orí ìbòrí, a sì dán iye owó tí ó dín kù ní ìdá kan nínú mẹ́rin wò.", exceeds: "A tún dán èso tí ó dín kù àti irè oko tí ó ṣègbé wò, a sì kọ àwọn ìyípadà tí ó máa mú ìṣirò náà lágbára sí i." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n fi quote mẹ́ta ó kéré tán wéra tí wọ́n sì bẹ àwọn àgbẹ̀ tí ó ti rà wò kí wọ́n tó ra ilé ìbòrí (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n pinnu láti má ṣe dókòwò báyìí, tàbí láti bẹ̀rẹ̀ ní kékeré, nítorí pé ìwé ìṣirò òwò wọn kò san owó padà (èsì rere ni èyí, kì í ṣe ìkùnà)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ní ilé ìbòrí tí wọ́n ròyìn ìlànà ọ̀sọ̀ọ̀sẹ̀ àti irè oko díẹ̀ tí ó ṣègbé sí kòkòrò tàbí àrùn lẹ́yìn ìgbà ọ̀gbìn kan",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn èrè àkọ́kọ́ gidi wọn fún ìgbà ọ̀gbìn kọ̀ọ̀kan, tí wọ́n fi wé ìwé ìṣirò òwò wọn"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tí ó ní ẹ̀rọ ìṣirò, tàbí ìwé, gègé àti ẹ̀rọ ìṣirò rírọrùn",
      "Quote ní kíkọ láti ọ̀dọ̀ àwọn olùtajà greenhouse, shade net tàbí tunnel ní agbègbè (àwọn akẹ́kọ̀ọ́ máa kó wọn jọ nígbà ẹ̀kọ́ náà)",
      "Ìsọfúnni ìkànsí onímọ̀ ọ̀gbìn tàbí òṣìṣẹ́ ìtọ́sọ́nà àgbẹ̀ àti olùrà tí akẹ́kọ̀ọ́ lè bá sọ̀rọ̀",
      "Àṣàyàn: ìbẹ̀wò sí greenhouse tí ó ń ṣiṣẹ́, thermometer, káàdì alálẹ̀mọ́ àti EC meter láti fi han ẹgbẹ́",
      "Nǹkan bí ìṣẹ́jú 60 sí 90 lápapọ̀ fún ẹ̀kọ́, ìdánwò kúkúrú àti ìdánwò, pẹ̀lú àkókò láti kó quote jọ àti láti bá àwọn olùrà sọ̀rọ̀"
    ],
    facilitatorNotes: [
      "Ẹ ṣe ìdánwò ṣáájú pọ̀, lẹ́yìn náà ẹ bẹ greenhouse tàbí shade net tí ó ń ṣiṣẹ́ wò tí ó bá ṣeé ṣe, kí ẹ sì béèrè lọ́wọ́ ẹni tí ó ni ín nípa owó gidi àti ìṣòro.",
      "Rán àwọn akẹ́kọ̀ọ́ létí pé gbogbo iye owó nínú ẹ̀kọ́ náà jẹ́ àpẹẹrẹ àhùsọ; wọ́n gbọ́dọ̀ lo quote tiwọn àti iye owó olùrà wọn.",
      "Má ṣe dámọ̀ràn olùtajà greenhouse, ọjà tàbí ìlànà àpòpọ̀ ajílẹ̀ kankan; kọ́ àwọn akẹ́kọ̀ọ́ bí wọ́n ṣe lè fi wéra kí wọ́n sì ṣàyẹ̀wò dípò rẹ̀.",
      "Ka \"kò tíì tó àkókò\" tàbí \"bẹ̀rẹ̀ ní kékeré\" sí èsì rere tí ìṣirò kò bá ṣiṣẹ́; ó ń gba àwọn ìdílé lọ́wọ́ gbèsè.",
      "Má ṣe dámọ̀ràn orúkọ oògùn kòkòrò tàbí ìwọ̀n rẹ̀ láéláé; fi han àwọn akẹ́kọ̀ọ́ bí wọ́n ṣe lè ṣàyẹ̀wò àkọsílẹ̀ àjọ ìjọba àti bí wọ́n ṣe lè ka àkọlé ọjà.",
      "Fi rubric ṣe àmì fún ìwé ìṣirò òwò kọ̀ọ̀kan, kí o sì ṣàyẹ̀wò gbogbo ìṣirò pẹ̀lú akẹ́kọ̀ọ́ kí ó tó bá ẹni tí ó ń yáni lówó tàbí olùtajà sọ̀rọ̀."
    ]
  }
};
