"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-register-small-business.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const BRS = { name: "Business Registration Service, Kenya: forúkọ iṣẹ́ òwò rẹ sílẹ̀ lórí ayélujára nípasẹ̀ eCitizen", url: "https://brs.go.ke/" };
const CAC = { name: "Corporate Affairs Commission (CAC), Nàìjíríà: ìforúkọsílẹ̀ ilé-iṣẹ́, orúkọ iṣẹ́ òwò àti incorporated trustees (ojú-òpó icrp.cac.gov.ng)", url: "https://www.cac.gov.ng/" };
const ORC = { name: "Office of the Registrar of Companies (ORC), Ghana: orúkọ iṣẹ́ òwò, ilé-iṣẹ́, ìsọdọ̀tun (pẹ̀lú *222#) àti ìròyìn ọdọọdún", url: "https://orc.gov.gh/" };
const APIX = { name: "APIX, Senegal: àjọ ìgbéga ìdókòwò àti ibùdó kan ṣoṣo fún dídá iṣẹ́ òwò sílẹ̀", url: "https://www.apix.sn/" };
const CEPICI = { name: "CEPICI, Côte d'Ivoire: ibùdó ìgbéga ìdókòwò àti ibùdó kan ṣoṣo fún dídá iṣẹ́ òwò sílẹ̀", url: "https://cepici.ci/" };
const OHADA = { name: "OHADA: Àjọ tí ó ń mú òfin iṣẹ́ òwò ṣọ̀kan ní Áfíríkà (orílẹ̀-èdè ọmọ ẹgbẹ́ 17)", url: "https://www.ohada.org/en/" };
const MA_AE = { name: "Morocco: ojú-òpó ipò auto-entrepreneur (oníṣòwò kékeré)", url: "https://www.ae.gov.ma/" };
const KRA = { name: "Kenya Revenue Authority (KRA): nípa KRA PIN (gbà á lórí iTax)", url: "https://www.kra.go.ke/individual/individual-pin-registration/learn-about-pin/about-pin" };
const NRS = { name: "Nigeria Revenue Service (NRS): àjọ owó-orí àpapọ̀ (federal) ti Nàìjíríà", url: "https://www.nrs.gov.ng/" };
const GRA = { name: "Ghana Revenue Authority (GRA): ìforúkọsílẹ̀ pẹ̀lú TIN tàbí Ghana Card PIN; Modified Taxation Scheme fún iṣẹ́ òwò kékeré", url: "https://gra.gov.gh/" };
const SMEDAN = { name: "SMEDAN, Nàìjíríà: ìrànlọ́wọ́ fún iṣẹ́ òwò kékeré-jù, kékeré àti àárín (ìforúkọsílẹ̀ ọ̀fẹ́, SME Digital Academy)", url: "https://smedan.gov.ng/" };

module.exports = {
  id: "afr-register-small-business-yo",
  lang: "yo",
  translationOf: "afr-register-small-business",
  category: "Africa: Life and Work",
  name: "Fíforúkọ Iṣẹ́ Òwò Kékeré Sílẹ̀ àti Ṣíṣe É ní Áfíríkà",
  skills: "Yíyan irú iṣẹ́ òwò, Wíwá ọ́fíìsì ìforúkọsílẹ̀ ìjọba, Ṣíṣe àkọsílẹ̀ ohun tí a nílò fún ìforúkọsílẹ̀, Gbígba nọ́mbà owó-orí àti ìwé àṣẹ ìbílẹ̀, Kíkọ ìwé owó tó rọrùn, Ṣíṣètò ìsọdọ̀tun àti ìròyìn ọdọọdún",
  outcome: "sọ iṣẹ́ òwò kékeré rẹ di ti òfin kí o sì tọ́jú rẹ̀ létòlétò: yan irú iṣẹ́ òwò tó tọ́, wá ọ́fíìsì ìforúkọsílẹ̀ ìjọba ní orílẹ̀-èdè rẹ, pèsè gbogbo ohun tí o nílò láti forúkọ sílẹ̀, mọ nọ́mbà owó-orí àti ìwé àṣẹ tí ó kàn ọ́, kọ ìwé owó tó rọrùn, kí o sì ṣètò ìsọdọ̀tun àti ìròyìn ọdọọdún rẹ.",
  about: [
    "Ọ̀pọ̀ iṣẹ́ òwò kékeré ní Áfíríkà ń ṣiṣẹ́ láìforúkọ sílẹ̀. Èyí lè ṣiṣẹ́ fún ìgbà díẹ̀, ṣùgbọ́n ìforúkọsílẹ̀ lè ṣí ilẹ̀kùn: àkáǹtì báńkì ní orúkọ iṣẹ́ òwò, àdéhùn iṣẹ́ pẹ̀lú ilé-iṣẹ́ àti ìjọba, àkáǹtì lórí ọjà ayélujára, owó-ẹ̀yáwó àti àwọn ètò ìrànlọ́wọ́ kan. Ẹ̀kọ́ yìí wà fún àwọn oníṣòwò, oníṣẹ́ ọwọ́, onílé ìṣaralóge, olùsè oúnjẹ, telọ àti ẹnikẹ́ni tí ó ní iṣẹ́ àfikún ní Kenya, Nàìjíríà, Ghana, Senegal, Côte d'Ivoire, Cameroon, Morocco àti káàkiri Áfíríkà.",
    "O máa yan irú iṣẹ́ òwò tí ó bá ọ mu, wá ọ́fíìsì ìforúkọsílẹ̀ ìjọba ní orílẹ̀-èdè rẹ kí o sì yẹra fún aṣojú ayédèrú, ṣe àkọsílẹ̀ ohun tí o nílò fún ìforúkọsílẹ̀, mọ nọ́mbà owó-orí àti ìwé àṣẹ ìbílẹ̀ tí ó kàn ọ́, ṣètò ìwé owó tó rọrùn, kí o sì ṣe kàlẹ́ńdà ìsọdọ̀tun àti ìròyìn ọdọọdún.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún, ó sì parí pẹ̀lú iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\" fún iṣẹ́ òwò tìrẹ. Òfin, fọ́ọ̀mù àti owó ìforúkọsílẹ̀ máa ń yí padà, wọ́n sì yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, nítorí náà ẹ̀kọ́ yìí dárúkọ àwọn ọ́fíìsì náà, ó sì fi bí o ṣe lè ṣàyẹ̀wò wọn hàn ọ́. Kò sọ iye owó, kò sì fúnni ní ìmọ̀ràn òfin; fún ìpinnu ńlá, béèrè lọ́wọ́ ọ́fíìsì ìforúkọsílẹ̀, ibùdó ìrànlọ́wọ́ iṣẹ́ òwò, tàbí akọ̀wé owó (accountant) tàbí agbẹjọ́rò tó kúnjú ìwọ̀n."
  ],
  finalTask: "Ṣe àkọsílẹ̀ ìforúkọsílẹ̀ fún iṣẹ́ òwò tìrẹ: irú iṣẹ́ òwò tí o yàn àti ìdí rẹ̀, ọ́fíìsì ìforúkọsílẹ̀ ìjọba àti ojú-òpó wẹ́ẹ̀bù rẹ̀, orúkọ mẹ́ta tí o lè lò, àwọn ìwé àti ìsọfúnni tí o nílò, nọ́mbà owó-orí àti ìwé àṣẹ ìbílẹ̀ tí ó kàn ọ́ (pẹ̀lú ibi tí o ti ṣàyẹ̀wò), bí o ṣe máa kọ ìwé owó rẹ, àti kàlẹ́ńdà ọdọọdún ti ìsọdọ̀tun àti ìròyìn.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ó ní iṣẹ́ òwò kékeré àti èyí tí kò ní ìforúkọsílẹ̀ káàkiri Áfíríkà: oníṣòwò ọjà, oníṣẹ́ ọwọ́, telọ, onídìrí, olùsè oúnjẹ, mẹkáníìkì, olùtajà lórí ayélujára àti àwọn ọ̀dọ́ tí ń bẹ̀rẹ̀, ní Kenya, Nàìjíríà, Ghana, àwọn orílẹ̀-èdè tí ń sọ Faransé ní Ìwọ̀-oòrùn àti Àárín Áfíríkà, àti Àríwá Áfíríkà.",
    startingPoint: "Wọ́n ń ṣe iṣẹ́ òwò lójoojúmọ́, wọ́n sì ń lo owó lọ́wọ́ àti owó orí fóònù (mobile money). Ọ̀pọ̀ kò tíì forúkọ sílẹ̀, wọn kò mọ ọ́fíìsì tí wọn máa lò, wọ́n ń da owó iṣẹ́ òwò pọ̀ mọ́ owó ilé, wọn kì í sì kọ nǹkan sílẹ̀ púpọ̀. Àwọn kan ti san owó fún aṣojú ayédèrú tàbí gbọ́ ìmọ̀ràn tí ó dani lójú rú.",
    gap: "Láìsí ìforúkọsílẹ̀ àti àkọsílẹ̀ tó rọrùn, ọ̀pọ̀ iṣẹ́ òwò kékeré kò lè ṣí àkáǹtì báńkì iṣẹ́ òwò, gba àdéhùn iṣẹ́, tajà lórí àwọn ọjà ayélujára kan tàbí béèrè ìrànlọ́wọ́. Àwọn míì forúkọ sílẹ̀ lẹ́ẹ̀kan, lẹ́yìn náà wọ́n pẹ́ sẹ́yìn nínú ìsọdọ̀tun tàbí ìròyìn, wọ́n sì san owó ìtanràn. Àwọn akẹ́kọ̀ọ́ nílò láti yan irú iṣẹ́ òwò, forúkọ sílẹ̀ ní ọ̀nà ìjọba, mọ nọ́mbà owó-orí àti ìwé àṣẹ tí ó kàn wọ́n, kí wọ́n sì tọ́jú àkọsílẹ̀ àti àwọn ọjọ́ wọn létòlétò.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; ọ̀pọ̀ akẹ́kọ̀ọ́ ń sọ Gẹ̀ẹ́sì gẹ́gẹ́ bí èdè kejì (ẹ̀kọ́ náà tún wà ní Faransé àti Lárúbáwá)",
      "Ẹ̀rọ: fóònù lásán, nígbà míì kọ̀mpútà ṣọ́ọ̀bù íńtánẹ́ẹ̀tì (cyber café); dátà wọ́n",
      "Òfin: irú iṣẹ́ òwò, owó ìforúkọsílẹ̀, owó-orí àti ìwé àṣẹ yàtọ̀ láti orílẹ̀-èdè kan sí òmíràn, wọ́n sì ń yí padà; ẹ̀kọ́ náà kì í sọ iye owó tàbí ọjọ́ ìparí, ó máa ń tọ́ka sí ọ́fíìsì ìjọba nígbà gbogbo",
      "Ààbò: aṣojú ìforúkọsílẹ̀ ayédèrú àti ojú-òpó wẹ́ẹ̀bù ayédèrú wà; àwọn akẹ́kọ̀ọ́ ń lo ojú-òpó ìjọba nìkan, wọn kì í sì pín ọ̀rọ̀ aṣínà tàbí PIN",
      "Kì í ṣe ìmọ̀ràn òfin tàbí owó-orí: àwọn akẹ́kọ̀ọ́ ń ṣàyẹ̀wò pẹ̀lú ọ́fíìsì ìforúkọsílẹ̀, àjọ owó-orí tàbí akọ́ṣẹ́mọṣẹ́ tó kúnjú ìwọ̀n fún ọ̀rọ̀ tiwọn"
    ],
    prerequisites: "Ẹni tí ó ń ṣe iṣẹ́ òwò kékeré tàbí tí ó fẹ́ bẹ̀rẹ̀ ọ̀kan. Ìṣirò ìpìlẹ̀: àfikún àti àyọkúrò."
  },
  // ---- ADDIE: Design ----
  objectives: [
    { id: "O1", condition: "Ní ìbámu pẹ̀lú bí iṣẹ́ òwò rẹ ṣe tóbi tó, àwọn tí ó ni ín àti àwọn ewu rẹ̀", action: "yan irú iṣẹ́ òwò kan, bí orúkọ iṣẹ́ òwò ẹnìkan (sole proprietor) tàbí ilé-iṣẹ́ limited, kí o sì kọ ìdí tí ó fi bá ọ mu", standard: "kí o sì dárúkọ àǹfààní kan àti ojúṣe kan ti irú tí o yàn" },
    { id: "O2", condition: "Ní ìbámu pẹ̀lú orílẹ̀-èdè tí o ti ń ṣòwò", action: "dá ọ́fíìsì ìforúkọsílẹ̀ iṣẹ́ òwò ti ìjọba mọ̀, kí o sì ṣí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi tàbí lọ sí ọ́fíìsì rẹ̀", standard: "láìlo aṣojú tí kì í ṣe ti ìjọba tàbí ojú-òpó wẹ́ẹ̀bù ayédèrú" },
    { id: "O3", condition: "Kí o tó bẹ̀rẹ̀ ìforúkọsílẹ̀", action: "ṣe àkọsílẹ̀ ìforúkọsílẹ̀ pẹ̀lú orúkọ mẹ́ta, ìsọfúnni àwọn olówó, iṣẹ́ tí ẹ̀ ń ṣe, àdírẹ́sì àti àwọn ìwé", standard: "kí o lè kún fọ́ọ̀mù náà ní ìjókòó kan" },
    { id: "O4", condition: "Fún iṣẹ́ òwò rẹ àti ìlú rẹ", action: "kọ nọ́mbà owó-orí, ìwé àṣẹ ìṣòwò ìbílẹ̀ àti ìwé àṣẹ ẹ̀ka iṣẹ́ èyíkéyìí tí ó kàn ọ́ sílẹ̀, àti ibi tí o ti máa gba ọ̀kọ̀ọ̀kan", standard: "pẹ̀lú ọ́fíìsì ìjọba tí o ti ṣàyẹ̀wò fún ọ̀kọ̀ọ̀kan" },
    { id: "O5", condition: "Fún ọ̀sẹ̀ kan ìṣòwò", action: "kọ gbogbo ọjà tí o tà àti gbogbo ìnáwó sínú ìwé owó tó rọrùn, tí ó yàtọ̀ sí owó ilé", standard: "kí owó tí ó wọlé àti owó tí ó jáde ní ọ̀sẹ̀ náà ṣe ìṣirò dédé" },
    { id: "O6", condition: "Lẹ́yìn tí iṣẹ́ òwò rẹ bá ti forúkọ sílẹ̀", action: "ṣe kàlẹ́ńdà ọdọọdún ti ìsọdọ̀tun, ìròyìn àti ọjọ́ ìwé àṣẹ", standard: "pẹ̀lú ọjọ́ kọ̀ọ̀kan tí o ti ṣàyẹ̀wò lórí ojú-òpó ìjọba àti ìrántí tí o ṣètò ṣáájú rẹ̀" }
  ],
  chapters: [
    {
      name: "Orí 1: Yíyàn àti fíforúkọ sílẹ̀",
      lessons: [
        {
          title: "Ìdí tí a fi ń forúkọ sílẹ̀, àti irú iṣẹ́ òwò tí ó bá ọ mu",
          objectives: ["O1"],
          minutes: 5,
          goal: "Yan irú iṣẹ́ òwò tí ó bá iṣẹ́ rẹ mu kí o sì kọ ìdí rẹ̀ sílẹ̀.",
          text: [
            "Fíforúkọ sílẹ̀ ń sọ fún ìjọba pé iṣẹ́ òwò rẹ wà, ó sì ń fún un ní orúkọ ti òfin. Àwọn àǹfààní lè jẹ́ àkáǹtì báńkì iṣẹ́ òwò, àdéhùn iṣẹ́ pẹ̀lú ilé-iṣẹ́ àti ìjọba, títajà lórí àwọn ọjà ayélujára kan, ìgbẹ́kẹ̀lé àwọn oníbàárà, àti bíbéèrè owó-ẹ̀yáwó àti ètò ìrànlọ́wọ́. Àwọn ojúṣe lè jẹ́ kíkọ àkọsílẹ̀, ìsọdọ̀tun, fífi ìròyìn sílẹ̀ àti sísan owó-orí.",
            "Àwọn irú tí ó wọ́pọ̀: iṣẹ́ òwò ẹnìkan (sole proprietorship), olówó kan, tí a sábà máa ń forúkọ rẹ̀ sílẹ̀ bí orúkọ iṣẹ́ òwò; àjọṣepọ̀ (partnership), olówó méjì tàbí jù bẹ́ẹ̀ lọ tí wọ́n ń pín èrè àti gbèsè; àti ilé-iṣẹ́ limited, tí ó jẹ́ ẹni òfin tirẹ̀, nítorí náà ilé àti owó ìpamọ́ àwọn olówó ní ààbò jù lọ́wọ́ gbèsè iṣẹ́ òwò, ṣùgbọ́n ìwé púpọ̀ wà. Orúkọ wọn yàtọ̀ láti orílẹ̀-èdè sí orílẹ̀-èdè: Nàìjíríà àti Ghana ń forúkọ orúkọ iṣẹ́ òwò àti ilé-iṣẹ́ sílẹ̀; ní Kenya, Business Registration Service ló ń bójú tó orúkọ iṣẹ́ òwò àti ilé-iṣẹ́.",
            "Ní àwọn orílẹ̀-èdè OHADA 17, pẹ̀lú Senegal, Côte d'Ivoire, Cameroon, Mali, Burkina Faso àti DR Congo, òfin iṣẹ́ òwò jẹ́ ọ̀kan náà. Oníṣòwò kékeré lè forúkọ sílẹ̀ bí iṣẹ́ òwò ẹnìkan (entreprise individuelle) tàbí dá ilé-iṣẹ́ sílẹ̀ bí SARL. Ní Morocco, ọ̀pọ̀ olùtajà kékeré ń lo ipò auto-entrepreneur.",
            "Ọ̀pọ̀ oníṣòwò ọjà àti oníṣẹ́ ọwọ́ ń bẹ̀rẹ̀ bí iṣẹ́ òwò ẹnìkan tàbí orúkọ iṣẹ́ òwò. Ilé-iṣẹ́ lè bá ọ mu nígbà tí o bá ní alábàáṣiṣẹ́pọ̀, àdéhùn iṣẹ́ ńlá tàbí ewu ńlá. Fún ìpinnu ńlá, béèrè lọ́wọ́ ọ́fíìsì ìforúkọsílẹ̀ tàbí akọ̀wé owó tàbí agbẹjọ́rò tó kúnjú ìwọ̀n."
          ],
          steps: ["Kọ àwọn tí ó ni iṣẹ́ òwò náà: ìwọ nìkan, tàbí pẹ̀lú àwọn míì.", "Kọ ewu tí ó tóbi jù: gbèsè, ìfarapa, àdéhùn iṣẹ́ ńlá.", "Fi orúkọ iṣẹ́ òwò (iṣẹ́ òwò ẹnìkan), àjọṣepọ̀ àti ilé-iṣẹ́ wé ara wọn.", "Yan ọ̀kan kí o sì kọ àǹfààní kan àti ojúṣe kan."],
          words: [["Sole proprietor (iṣẹ́ òwò ẹnìkan)", "iṣẹ́ òwò tí ẹnìkan ṣoṣo ni, tí ó sì ń ṣe é, tí òun fúnra rẹ̀ sì ń dáhùn fún gbèsè rẹ̀."], ["Ilé-iṣẹ́ limited", "iṣẹ́ òwò tí ó jẹ́ ẹni òfin tirẹ̀, nítorí náà ohun ìní àdáni àwọn olówó ní ààbò jù lọ́wọ́ gbèsè rẹ̀."], ["OHADA", "àjọ orílẹ̀-èdè Áfíríkà 17 tí wọ́n ń lo òfin iṣẹ́ òwò kan náà, púpọ̀ jù lọ ní Ìwọ̀-oòrùn àti Àárín Áfíríkà."]],
          slides: [
            { title: "Kí ló dé tí a fi ń forúkọ sílẹ̀?", bullets: ["Àkáǹtì báńkì iṣẹ́ òwò àti àdéhùn iṣẹ́", "Ọjà ayélujára, owó-ẹ̀yáwó àti ètò ìrànlọ́wọ́", "Ìgbẹ́kẹ̀lé àwọn oníbàárà", "Ojúṣe: àkọsílẹ̀, ìsọdọ̀tun, ìròyìn, owó-orí"] },
            { title: "Irú mẹ́ta tí ó wọ́pọ̀", bullets: ["Iṣẹ́ òwò ẹnìkan / orúkọ iṣẹ́ òwò: olówó kan", "Àjọṣepọ̀ (partnership): olówó méjì tàbí jù bẹ́ẹ̀ lọ", "Ilé-iṣẹ́ limited: ẹni òfin tirẹ̀, ìwé púpọ̀ sí i"] },
            { title: "Áfíríkà tí ń sọ Faransé àti Àríwá Áfíríkà", bullets: ["Orílẹ̀-èdè OHADA 17 ń lo òfin iṣẹ́ òwò kan náà", "Entreprise individuelle tàbí ilé-iṣẹ́ bí SARL", "Morocco: ipò auto-entrepreneur"] },
            { title: "Yíyàn", bullets: ["Ọ̀pọ̀ oníṣòwò kékeré ń bẹ̀rẹ̀ pẹ̀lú orúkọ iṣẹ́ òwò", "Ilé-iṣẹ́: alábàáṣiṣẹ́pọ̀, àdéhùn ńlá, ewu ńlá", "Ìpinnu ńlá? Béèrè lọ́wọ́ ọ́fíìsì ìforúkọsílẹ̀ tàbí akọ́ṣẹ́mọṣẹ́"] }
          ],
          tryIt: "Kọ àwọn tí ó ni iṣẹ́ òwò rẹ àti ewu rẹ̀ tí ó tóbi jù. Lẹ́yìn náà yan irú iṣẹ́ òwò kan, kí o sì kọ àǹfààní kan àti ojúṣe kan ti irú náà.",
          youCanNow: "fi àwọn irú iṣẹ́ òwò tí ó wọ́pọ̀ wé ara wọn, kí o sì yan èyí tí ó bá iṣẹ́ òwò rẹ mu.",
          quickCheck: [
            { objective: "O1", q: "Fatima ń ta aṣọ fúnra rẹ̀ nìkan ní ọjà kan ní Kano. Irú wo ni ọ̀pọ̀ oníṣòwò bí i rẹ̀ fi ń bẹ̀rẹ̀?", options: ["Ilé-iṣẹ́ gbogbogbò ńlá", "Orúkọ iṣẹ́ òwò bí iṣẹ́ òwò ẹnìkan", "Àjọ ìjọba", "Àjọ aláàánú"], answer: 1, why: "Olówó kan tí ó ní iṣẹ́ òwò kékeré sábà máa ń bẹ̀rẹ̀ pẹ̀lú orúkọ iṣẹ́ òwò." },
            { objective: "O1", q: "Kí ni ìdí pàtàkì kan láti yan ilé-iṣẹ́ limited?", options: ["Kò ní ìwé kankan", "Kì í san owó-orí láéláé", "Ó ń dáàbò bo ohun ìní àdáni àwọn olówó jù lọ́wọ́ gbèsè iṣẹ́ òwò", "Kò lè ṣí àkáǹtì báńkì"], answer: 2, why: "Ilé-iṣẹ́ jẹ́ ẹni òfin tirẹ̀, èyí sì ń dín ewu àdáni àwọn olówó kù." }
          ],
          sources: [OHADA, MA_AE]
        },
        {
          title: "Wíwá ọ́fíìsì ìforúkọsílẹ̀ ìjọba, àti yíyẹra fún aṣojú ayédèrú",
          objectives: ["O2"],
          minutes: 5,
          goal: "Wá ọ́fíìsì ìforúkọsílẹ̀ iṣẹ́ òwò ti ìjọba ní orílẹ̀-èdè rẹ kí o sì ṣí ojú-òpó wẹ́ẹ̀bù rẹ̀ gidi.",
          text: [
            "Orílẹ̀-èdè kọ̀ọ̀kan ní ọ́fíìsì ìjọba tí ó ń forúkọ iṣẹ́ òwò sílẹ̀. Kenya: Business Registration Service (BRS), lórí ayélujára nípasẹ̀ eCitizen. Nàìjíríà: Corporate Affairs Commission (CAC). Ghana: Office of the Registrar of Companies (ORC). Senegal: APIX, ibùdó kan ṣoṣo fún dídá iṣẹ́ òwò sílẹ̀. Côte d'Ivoire: CEPICI. Ní Morocco, ipò auto-entrepreneur ní ojú-òpó orílẹ̀-èdè tirẹ̀.",
            "Lo ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì ìjọba nìkan. Àwọn ojú-òpó ìjọba sábà máa ń parí sí ìparí ti ìjọba orílẹ̀-èdè náà, bí .go.ke, .gov.ng tàbí .gov.gh. Àwọn ojú-òpó ayédèrú tí ó jọ ti gidi àti àwọn ènìyàn tí ń polówó ìforúkọsílẹ̀ \"kíákíá\" tàbí \"ọ̀fẹ́\" wà; ojú-òpó BRS ti Kenya fúnra rẹ̀ kìlọ̀ nípa ìpolówó ìforúkọsílẹ̀ \"ọ̀fẹ́\" ayédèrú.",
            "O lè sanwó fún aṣojú tí ó ní ìwé àṣẹ tàbí agbẹjọ́rò láti ràn ọ́ lọ́wọ́, ṣùgbọ́n ṣàyẹ̀wò pé wọ́n jẹ́ gidi, béèrè ìwé ìsanwó ti ìjọba, kí o sì rí i dájú pé orúkọ rẹ ni wọ́n fi forúkọ iṣẹ́ òwò náà sílẹ̀. Má ṣe fún ẹnikẹ́ni ní ọ̀rọ̀ aṣínà àkáǹtì eCitizen, CAC tàbí èyíkéyìí míì, tàbí kóòdù ẹ̀ẹ̀kan tí wọ́n fi ránṣẹ́ sí fóònù rẹ.",
            "Tí ojú-òpó wẹ́ẹ̀bù kò bá ṣí, gbìyànjú lẹ́yìn náà tàbí lọ sí ọ́fíìsì ìforúkọsílẹ̀ tàbí ibùdó iṣẹ́ ìjọba. Má ṣe sanwó fún àjèjì dípò rẹ̀."
          ],
          steps: ["Kọ ọ́fíìsì ìforúkọsílẹ̀ orílẹ̀-èdè rẹ láti inú àkọsílẹ̀ ẹ̀kọ́ yìí.", "Tẹ àdírẹ́sì rẹ̀ fúnra rẹ; má ṣe tẹ link láti inú ọ̀rọ̀ tí o kò mọ ibi tí ó ti wá.", "Ṣàyẹ̀wò ìparí àdírẹ́sì náà, bí .go.ke, .gov.ng tàbí .gov.gh.", "Tí o bá lo aṣojú, ṣàyẹ̀wò pé wọ́n jẹ́ gidi kí o sì gba ìwé ìsanwó ti ìjọba.", "Má ṣe pín ọ̀rọ̀ aṣínà tàbí kóòdù ẹ̀ẹ̀kan rẹ láéláé."],
          words: [["Ọ́fíìsì ìforúkọsílẹ̀ (registry)", "ọ́fíìsì ìjọba tí ó ń kọ àwọn iṣẹ́ òwò àti ilé-iṣẹ́ sílẹ̀."], ["Ojú-òpó wẹ́ẹ̀bù ayédèrú", "ojú-òpó èké tí wọ́n ṣe kí ó jọ ti ìjọba, nígbà púpọ̀ láti gba owó rẹ."], ["Kóòdù ẹ̀ẹ̀kan (one-time code)", "kóòdù kúkúrú tí wọ́n fi ránṣẹ́ sí fóònù rẹ láti fìdí rẹ̀ múlẹ̀ pé ìwọ ni; má ṣe pín in láéláé."]],
          slides: [
            { title: "Àwọn ọ́fíìsì ìforúkọsílẹ̀ ìjọba", bullets: ["Kenya: BRS nípasẹ̀ eCitizen", "Nàìjíríà: Corporate Affairs Commission (CAC)", "Ghana: Registrar of Companies (ORC)", "Senegal: APIX; Côte d'Ivoire: CEPICI"] },
            { title: "Lo ojú-òpó ìjọba nìkan", bullets: ["Tẹ àdírẹ́sì náà fúnra rẹ", "Ṣàyẹ̀wò ìparí bí .go.ke, .gov.ng, .gov.gh", "Ṣọ́ra fún ìpolówó ìforúkọsílẹ̀ \"kíákíá\" tàbí \"ọ̀fẹ́\""] },
            { title: "Tí o bá lo aṣojú", bullets: ["Ṣàyẹ̀wò pé wọ́n jẹ́ gidi", "Gba ìwé ìsanwó ti ìjọba", "Iṣẹ́ òwò náà gbọ́dọ̀ wà ní orúkọ RẸ"] },
            { title: "Má ṣe pín wọ̀nyí láéláé", bullets: ["Ọ̀rọ̀ aṣínà àkáǹtì rẹ", "Kóòdù ẹ̀ẹ̀kan tí wọ́n fi ránṣẹ́ sí fóònù rẹ"] }
          ],
          tryIt: "Wá ọ́fíìsì ìforúkọsílẹ̀ iṣẹ́ òwò ní orílẹ̀-èdè rẹ. Tẹ àdírẹ́sì ojú-òpó wẹ́ẹ̀bù rẹ̀ fúnra rẹ, ṣàyẹ̀wò ìparí rẹ̀, kí o sì kọ àdírẹ́sì náà àti iṣẹ́ kan tí ó ń ṣe sílẹ̀.",
          youCanNow: "wá ọ́fíìsì ìforúkọsílẹ̀ iṣẹ́ òwò ti ìjọba ní orílẹ̀-èdè rẹ, kí o sì mọ ìyàtọ̀ láàárín ojú-òpó gidi àti ayédèrú.",
          quickCheck: [
            { objective: "O2", q: "Níbo ni o ti máa forúkọ orúkọ iṣẹ́ òwò sílẹ̀ ní Nàìjíríà?", options: ["Corporate Affairs Commission (CAC)", "Ẹgbẹ́ WhatsApp kan", "Báńkì èyíkéyìí", "Àgọ́ ọlọ́pàá"], answer: 0, why: "CAC ló ń forúkọ orúkọ iṣẹ́ òwò, ilé-iṣẹ́ àti incorporated trustees sílẹ̀ ní Nàìjíríà." },
            { objective: "O2", q: "Ọ̀rọ̀ kan ń polówó \"ìforúkọsílẹ̀ iṣẹ́ òwò ọ̀fẹ́ láàárín wákàtí 1\" pẹ̀lú link. Kí ni o máa ṣe?", options: ["Tẹ ẹ́ kí o sì sanwó kíákíá", "Fi ọ̀rọ̀ aṣínà rẹ ránṣẹ́", "Fi í ránṣẹ́ sí àwọn ọ̀rẹ́", "Fi link náà sílẹ̀ kí o sì tẹ àdírẹ́sì ọ́fíìsì ìforúkọsílẹ̀ ìjọba fúnra rẹ"], answer: 3, why: "Ìpolówó ayédèrú ń lo link; ojú-òpó ìjọba tí o tẹ fúnra rẹ ni kò léwu." }
          ],
          sources: [BRS, CAC, ORC, APIX, CEPICI, MA_AE]
        },
        {
          title: "Ṣíṣe àkọsílẹ̀ ohun tí o nílò fún ìforúkọsílẹ̀",
          objectives: ["O3"],
          minutes: 5,
          goal: "Ṣe àkọsílẹ̀ ìforúkọsílẹ̀ kí o lè fi ìwé béèrè ní ìjókòó kan.",
          text: [
            "Fọ́ọ̀mù orí ayélujára lè kú (time out), dátà sì ń náni lówó. Kọ́kọ́ pèsè gbogbo nǹkan, lẹ́yìn náà fi ìwé béèrè ní ìjókòó kan.",
            "Ọ̀pọ̀ ọ́fíìsì ìforúkọsílẹ̀ ń béèrè àwọn nǹkan tí ó jọra: orúkọ iṣẹ́ òwò mẹ́ta tí o lè lò (tí ẹlòmíì bá ti lo èyí tí o kọ́kọ́ yàn; BRS ti Kenya ń béèrè orúkọ mẹ́ta), orúkọ kíkún àwọn olówó àti ìsọfúnni káàdì ìdánimọ̀ orílẹ̀-èdè tàbí ìwé ìrìnnà (passport), fóònù àti ímeèlì, àdírẹ́sì tàbí ibi tí iṣẹ́ òwò wà, àpèjúwe kúkúrú iṣẹ́ tí ẹ̀ ń ṣe, àti nígbà míì fọ́tò passport tàbí ìbuwọ́lù. Ilé-iṣẹ́ tún nílò àwọn olùdarí (directors), àwọn onípín (shareholders) àti òfin rẹ̀. Àkọsílẹ̀ gangan wà lórí ojú-òpó ọ́fíìsì ìforúkọsílẹ̀.",
            "Yan orúkọ tí ó yé, tí ẹlòmíì kò tíì lò, tí kò sì ṣe àdàkọ orúkọ ọjà olókìkí. Àpẹẹrẹ: Kofi ní Takoradi kọ \"Kofi Fresh Fish Supplies\", \"Takoradi Fresh Catch\" àti \"Sea Gold Fish Supplies\".",
            "Kọ owó ìforúkọsílẹ̀ tí ojú-òpó ìjọba fi hàn ní àkókò tí o fi ìwé béèrè sílẹ̀, àti bí o ṣe máa sanwó. Tọ́jú gbogbo ìwé ìsanwó àti ìwé ẹ̀rí ìforúkọsílẹ̀, ní ìwé àti bí fọ́tò ní ibi tí kò léwu."
          ],
          steps: ["Kọ orúkọ mẹ́ta tí o lè lò.", "Kọ orúkọ àwọn olówó, ìsọfúnni ìdánimọ̀, fóònù àti ímeèlì.", "Kọ àdírẹ́sì tàbí ibi tí iṣẹ́ òwò wà àti iṣẹ́ tí ẹ̀ ń ṣe.", "Ka àkọsílẹ̀ ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ̀ fún àwọn ìwé àfikún.", "Kọ owó ìforúkọsílẹ̀ lọ́wọ́lọ́wọ́ àti ọ̀nà ìsanwó láti ojú-òpó ìjọba.", "Fi ìwé béèrè ní ìjókòó kan kí o sì tọ́jú gbogbo ìwé ìsanwó àti ìwé ẹ̀rí."],
          words: [["Wíwá orúkọ / fífi orúkọ pamọ́ (name search / reservation)", "ṣíṣàyẹ̀wò pé kò sí ẹni tí ó ti lo orúkọ iṣẹ́ òwò kan, àti fífi í pamọ́ fún ọ nígbà tí o ń forúkọ sílẹ̀."], ["Ìwé ẹ̀rí ìforúkọsílẹ̀ (certificate of registration)", "ìwé ìjọba tí ó fi hàn pé iṣẹ́ òwò rẹ ti forúkọ sílẹ̀."], ["Olùdarí (director)", "ẹni tí ó ń darí ilé-iṣẹ́, tí ó sì ní ojúṣe òfin sí i."]],
          slides: [
            { title: "Kọ́kọ́ pèsè, fi ìwé béèrè lẹ́ẹ̀kan", bullets: ["Fọ́ọ̀mù lè kú (time out)", "Dátà ń náni lówó", "Jẹ́ kí gbogbo nǹkan wà ní sẹpẹ́"] },
            { title: "Ohun tí wọ́n sábà máa ń béèrè", bullets: ["Orúkọ mẹ́ta tí o lè lò", "Orúkọ àwọn olówó, ìdánimọ̀, fóònù àti ímeèlì", "Àdírẹ́sì àti iṣẹ́ tí ẹ̀ ń ṣe", "Ilé-iṣẹ́: àwọn olùdarí àti àwọn onípín"] },
            { title: "Orúkọ tó dára", bullets: ["Ó yé, ẹlòmíì kò sì tíì lò ó", "Má ṣe àdàkọ orúkọ ọjà olókìkí", "Ṣàyẹ̀wò àkọsílẹ̀ ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ̀"] },
            { title: "Lẹ́yìn tí o bá fi ìwé béèrè", bullets: ["Kọ owó ìforúkọsílẹ̀ láti ojú-òpó ìjọba", "Tọ́jú gbogbo ìwé ìsanwó", "Tọ́jú ìwé ẹ̀rí, ní ìwé àti fọ́tò"] }
          ],
          tryIt: "Kọ àkọsílẹ̀ ìforúkọsílẹ̀ rẹ: orúkọ mẹ́ta, ìsọfúnni olówó (láìkọ nọ́mbà ìdánimọ̀ rẹ sí ibikíbi tí àwọn míì ti lè rí i), àdírẹ́sì, iṣẹ́ tí o ń ṣe, àwọn ìwé, àti ojú-òpó wẹ́ẹ̀bù ọ́fíìsì ìforúkọsílẹ̀.",
          youCanNow: "ṣe àkọsílẹ̀ ìforúkọsílẹ̀ kí o lè fi ìwé béèrè ní ìjókòó kan.",
          quickCheck: [
            { objective: "O3", q: "Kí ló dé tí o fi máa pèsè orúkọ iṣẹ́ òwò mẹ́ta?", options: ["Òfin ní kí o ní iṣẹ́ òwò mẹ́ta", "Tí ẹlòmíì bá ti lo èyí tí o kọ́kọ́ yàn", "Láti da aṣojú ayédèrú lójú rú", "Láti san owó-orí díẹ̀"], answer: 1, why: "Tí ẹlòmíì bá ti lo orúkọ àkọ́kọ́, orúkọ tó kàn máa gbà ọ́ lọ́wọ́ fífi ìwé béèrè lẹ́ẹ̀kejì." },
            { objective: "O3", q: "Níbo ni o ti máa rí àwọn ìwé gangan tí ọ́fíìsì ìforúkọsílẹ̀ rẹ nílò?", options: ["Ohun tí aládùúgbò rántí", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò", "Ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì ìforúkọsílẹ̀ ti ìjọba", "Ìpolówó láti ọ̀dọ̀ aṣojú tí o kò mọ̀"], answer: 2, why: "Àwọn ohun tí wọ́n ń béèrè máa ń yí padà, ọ́fíìsì ìforúkọsílẹ̀ nìkan ló sì mọ̀ dájú." }
          ],
          sources: [BRS, ORC]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Yíyàn àti fíforúkọ sílẹ̀",
        questions: [
          { objective: "O1", q: "Ọ̀rẹ́ méjì ṣí iṣẹ́ òwò oúnjẹ papọ̀, wọ́n sì ń pín èrè. Irú wo ni èyí jọ jù?", options: ["Iṣẹ́ òwò ẹnìkan", "Àjọ ìjọba", "Àjọṣepọ̀ (partnership) tàbí ilé-iṣẹ́", "Àjọ aláàánú"], answer: 2, why: "Olówó méjì tàbí jù bẹ́ẹ̀ lọ tí ń pín èrè jẹ́ àjọṣepọ̀, tàbí wọ́n lè dá ilé-iṣẹ́ sílẹ̀." },
          { objective: "O1", q: "Ní Senegal àti Côte d'Ivoire, òfin iṣẹ́ òwò wá láti:", options: ["Òfin ìlú kọ̀ọ̀kan nìkan", "OHADA, tí orílẹ̀-èdè 17 ń lò papọ̀", "Ọjà ayélujára tí o ti ń tajà", "Báńkì rẹ"], answer: 1, why: "Òfin iṣẹ́ òwò kan náà ti OHADA ló ń ṣiṣẹ́ ní àwọn orílẹ̀-èdè ọmọ ẹgbẹ́ rẹ̀." },
          { objective: "O2", q: "Ìparí àdírẹ́sì wẹ́ẹ̀bù wo ló jẹ́ àmì ojú-òpó ìjọba Kenya?", options: [".go.ke", ".win", ".shop", ".xyz"], answer: 0, why: "Àwọn ojú-òpó ìjọba Kenya sábà máa ń parí sí .go.ke." },
          { objective: "O2", q: "Aṣojú kan fẹ́ bá ọ forúkọ iṣẹ́ òwò rẹ sílẹ̀. Kí ni o gbọ́dọ̀ ṣàyẹ̀wò?", options: ["Pé ó ní ọ́fíìsì tó rẹwà", "Pé ó yára", "Pé owó lọ́wọ́ nìkan ló ń gbà", "Pé ó jẹ́ gidi, ó fúnni ní ìwé ìsanwó ti ìjọba, ó sì forúkọ rẹ̀ sílẹ̀ ní orúkọ rẹ"], answer: 3, why: "Aṣojú gidi, ìwé ìsanwó ti ìjọba àti orúkọ rẹ lórí iṣẹ́ òwò náà ń dáàbò bò ọ́." },
          { objective: "O3", q: "Kí ni o yẹ kí o tọ́jú lẹ́yìn ìforúkọsílẹ̀?", options: ["Kò sí nǹkan", "Ọ̀rọ̀ text kan nìkan", "Ìwé ẹ̀rí ìforúkọsílẹ̀ àti gbogbo ìwé ìsanwó, ní ìwé àti bí fọ́tò", "Ọ̀rọ̀ ẹnu aṣojú"], answer: 2, why: "O máa nílò ìwé ẹ̀rí àti ìwé ìsanwó fún báńkì, ìsọdọ̀tun àti àdéhùn iṣẹ́." }
        ]
      }
    },
    {
      name: "Orí 2: Ṣíṣe é bí ó ti tọ́",
      lessons: [
        {
          title: "Nọ́mbà owó-orí àti ìwé àṣẹ ìbílẹ̀",
          objectives: ["O4"],
          minutes: 6,
          goal: "Kọ nọ́mbà owó-orí àti ìwé àṣẹ tí iṣẹ́ òwò rẹ nílò sílẹ̀, àti ibi tí o ti máa gba ọ̀kọ̀ọ̀kan.",
          text: [
            "Fíforúkọ orúkọ sílẹ̀ sábà máa ń jẹ́ ìgbésẹ̀ àkọ́kọ́ nìkan. Ọ̀pọ̀ iṣẹ́ òwò tún nílò nọ́mbà ìdánimọ̀ owó-orí, ìwé àṣẹ ìṣòwò ìbílẹ̀, àti, fún àwọn irú iṣẹ́ kan, ìwé àṣẹ ẹ̀ka iṣẹ́.",
            "Nọ́mbà owó-orí: ní Kenya, KRA PIN láti Kenya Revenue Authority, tí o máa gbà lórí iTax; wọ́n nílò rẹ̀ fún ìforúkọsílẹ̀ iṣẹ́ òwò àti ọ̀pọ̀ ìbálò míì. Ní Nàìjíríà, àjọ owó-orí àpapọ̀ (federal) ni Nigeria Revenue Service (NRS), ìpínlẹ̀ kọ̀ọ̀kan sì ní àjọ owó-orí abẹ́lé tirẹ̀ (internal revenue service). Ní Ghana, Ghana Revenue Authority ń lo TIN rẹ tàbí Ghana Card PIN, ó sì kọ Modified Taxation Scheme fún iṣẹ́ òwò kékeré sílẹ̀. Béèrè lọ́wọ́ ọ́fíìsì owó-orí èyí tí ó kàn ọ́ nínú owó-orí iṣẹ́ òwò kékeré.",
            "Ìwé àṣẹ ìbílẹ̀: ọ̀pọ̀ ìlú àti county ń béèrè ìwé àṣẹ ìṣòwò tàbí ìwé àṣẹ iṣẹ́ òwò, tí a ń sọ dọ̀tun déédéé. Ní Kenya, láti ọ̀dọ̀ ìjọba county rẹ ni; ní Nàìjíríà, láti ọ̀dọ̀ ìjọba ìpínlẹ̀ tàbí ìjọba ìbílẹ̀; ní Ghana, láti ọ̀dọ̀ district assembly tàbí municipal assembly. Ìwé àṣẹ ẹ̀ka iṣẹ́: àwọn olùtajà oúnjẹ, ilé ìṣaralóge, ilé ìwòsàn, ọkọ̀ èrò àti àwọn míì lè nílò ìwé ẹ̀rí ìlera tàbí ìwé àṣẹ láti ọ̀dọ̀ àjọ ẹ̀ka iṣẹ́ wọn.",
            "Béèrè ní ọ́fíìsì ìjọba ìbílẹ̀ tàbí ibùdó ìrànlọ́wọ́ iṣẹ́ òwò bí SMEDAN ní Nàìjíríà. Kọ ohun kọ̀ọ̀kan tí wọ́n béèrè, ọ́fíìsì náà, àti ọjọ́ tí o ṣàyẹ̀wò. Nọ́mbà ìdánimọ̀ orílẹ̀-èdè tàbí nọ́mbà owó-orí rẹ jẹ́ àṣírí: má ṣe gbé e sórí ayélujára tàbí fi í ránṣẹ́ sí àjèjì."
          ],
          steps: ["Wá àjọ owó-orí rẹ kí o sì béèrè bí iṣẹ́ òwò kékeré ṣe ń gba nọ́mbà owó-orí.", "Béèrè lọ́wọ́ county, ìpínlẹ̀, ìjọba ìbílẹ̀ tàbí assembly rẹ nípa ìwé àṣẹ ìṣòwò.", "Béèrè bóyá irú iṣẹ́ rẹ nílò ìwé ẹ̀rí ìlera tàbí ìwé àṣẹ ẹ̀ka iṣẹ́.", "Kọ ọ̀kọ̀ọ̀kan, ọ́fíìsì náà, àti ọjọ́ tí o ṣàyẹ̀wò."],
          words: [["Nọ́mbà ìdánimọ̀ owó-orí (TIN)", "nọ́mbà tí ọ́fíìsì owó-orí fún ọ láti fi ìròyìn owó-orí sílẹ̀ àti láti san owó-orí; ní Kenya, KRA PIN ni."], ["Ìwé àṣẹ ìṣòwò (trading permit)", "àṣẹ láti ọ̀dọ̀ ìjọba ìbílẹ̀ rẹ láti ṣe iṣẹ́ òwò ní agbègbè náà."], ["Ìwé àṣẹ ẹ̀ka iṣẹ́ (sector permit)", "ìwé àṣẹ fún àwọn irú iṣẹ́ kan, bí oúnjẹ, ìlera tàbí ọkọ̀ èrò."]],
          slides: [
            { title: "Lẹ́yìn orúkọ: àyẹ̀wò mẹ́ta sí i", bullets: ["Nọ́mbà owó-orí", "Ìwé àṣẹ ìṣòwò ìbílẹ̀", "Ìwé àṣẹ ẹ̀ka iṣẹ́ fún àwọn irú iṣẹ́ kan"] },
            { title: "Àwọn nọ́mbà owó-orí", bullets: ["Kenya: KRA PIN lórí iTax", "Nàìjíríà: Nigeria Revenue Service àti àjọ owó-orí ìpínlẹ̀", "Ghana: GRA, TIN tàbí Ghana Card PIN"] },
            { title: "Ìwé àṣẹ ìbílẹ̀ àti ti ẹ̀ka iṣẹ́", bullets: ["County, ìpínlẹ̀, ìjọba ìbílẹ̀ tàbí assembly", "Oúnjẹ, ilé ìṣaralóge, ọkọ̀ èrò lè nílò jù bẹ́ẹ̀ lọ", "Béèrè lọ́wọ́ ibùdó ìrànlọ́wọ́ iṣẹ́ òwò"] },
            { title: "Kọ ọ́ sílẹ̀", bullets: ["Ohun kọ̀ọ̀kan tí wọ́n béèrè àti ọ́fíìsì rẹ̀", "Ọjọ́ tí o ṣàyẹ̀wò", "Pa nọ́mbà ìdánimọ̀ àti nọ́mbà owó-orí mọ́ ní àṣírí"] }
          ],
          tryIt: "Ṣe tábìlì oníla mẹ́ta: nọ́mbà owó-orí, ìwé àṣẹ ìbílẹ̀, ìwé àṣẹ ẹ̀ka iṣẹ́. Fún ọ̀kọ̀ọ̀kan, kọ ọ́fíìsì náà, ojú-òpó wẹ́ẹ̀bù tàbí àdírẹ́sì rẹ̀, àti bóyá ó kàn ọ́. Ṣàyẹ̀wò ó kéré tán ọ̀kan pẹ̀lú ọ́fíìsì náà ní ọ̀sẹ̀ yìí.",
          youCanNow: "kọ nọ́mbà owó-orí àti ìwé àṣẹ tí iṣẹ́ òwò rẹ nílò sílẹ̀, àti ọ́fíìsì fún ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O4", q: "Ní Kenya, báwo ni o ṣe máa gba KRA PIN?", options: ["Láti ọ̀dọ̀ ìgbìmọ̀ ọjà", "Lórí iTax, láti Kenya Revenue Authority", "Láti ọ̀dọ̀ olùdarí báńkì rẹ", "Láti ọ̀dọ̀ aṣojú lórí WhatsApp"], answer: 1, why: "KRA ló ń fúnni ní PIN náà nípasẹ̀ ètò iTax rẹ̀." },
            { objective: "O4", q: "Grace ṣí ìsọ̀ oúnjẹ kan ní Accra. Yàtọ̀ sí ìforúkọsílẹ̀, kí ni ó yẹ kí ó béèrè nípa rẹ̀?", options: ["Kò sí nǹkan míì", "Ìwé ìwakọ̀", "Ìwé àṣẹ ìṣòwò àti ìwé ẹ̀rí oúnjẹ tàbí ìlera èyíkéyìí", "Passport"], answer: 2, why: "Ìwé àṣẹ ìbílẹ̀ àti òfin ààbò oúnjẹ sábà máa ń kan àwọn olùtajà oúnjẹ." }
          ],
          sources: [KRA, NRS, GRA, SMEDAN]
        },
        {
          title: "Ìwé owó tó rọrùn: yíya owó iṣẹ́ òwò sọ́tọ̀",
          objectives: ["O5"],
          minutes: 5,
          goal: "Kọ gbogbo ọjà tí o tà àti gbogbo ìnáwó sínú ìwé owó tó rọrùn fún ọ̀sẹ̀ kan.",
          text: [
            "Àkọsílẹ̀ ń fi hàn bóyá o ń jèrè gan-an. Ó tún ń ṣèrànwọ́ fún owó-orí, owó-ẹ̀yáwó àti ìsọdọ̀tun. Bẹ̀rẹ̀ ní ọ̀nà tó rọrùn: ìwé àkọsílẹ̀ tàbí ojú-ewé àkọsílẹ̀ lórí fóònù.",
            "Ìwé owó (cash book) ní ìlà-òòró mẹ́rin: ọjọ́, ohun tí ó ṣẹlẹ̀, owó tí ó wọlé, owó tí ó jáde. Kọ gbogbo ọjà tí o tà àti gbogbo ìnáwó ní ọjọ́ kan náà, pẹ̀lú mobile money. Ní òpin ọjọ́ tàbí ọ̀sẹ̀, ṣe àròpọ̀ owó tí ó wọlé, ṣe àròpọ̀ owó tí ó jáde, kí o sì yọ ọ̀kan kúrò nínú èkejì. Àpẹẹrẹ láti Douala: ní ọjọ́ Ajé, Paul ta ìbòrí fóònù 12 ní 24,000 XAF, ó sì ra ọjà ní 15,000 XAF; owó tí ó wọlé yọ owó tí ó jáde kúrò jẹ́ 9,000 XAF (iye àpẹẹrẹ ni).",
            "Ya owó iṣẹ́ òwò sọ́tọ̀ kúrò lára owó ilé. Tí o bá mú owó fún oúnjẹ tàbí owó ilé-ìwé, kọ ọ́ sílẹ̀ bí \"olówó mú\" kí o lè rí i. Nọ́mbà mobile money tàbí àkáǹtì ọ̀tọ̀ fún iṣẹ́ òwò ń jẹ́ kí èyí rọrùn. Tọ́jú ìwé ìsanwó sínú àpò ìwé tàbí ya fọ́tò wọn."
          ],
          steps: ["Fa ìlà-òòró mẹ́rin: ọjọ́, ohun tí ó ṣẹlẹ̀, owó tí ó wọlé, owó tí ó jáde.", "Kọ gbogbo ọjà tí o tà àti gbogbo ìnáwó ní ọjọ́ kan náà.", "Kọ owó tí o mú fún ilé bí \"olówó mú\".", "Ní òpin ọ̀sẹ̀, ṣe àròpọ̀ ìlà-òòró kọ̀ọ̀kan kí o sì wá ìyàtọ̀ rẹ̀.", "Tọ́jú ìwé ìsanwó sínú àpò ìwé tàbí bí fọ́tò."],
          words: [["Ìwé owó (cash book)", "àkọsílẹ̀ tó rọrùn ti owó tí ó ń wọ inú iṣẹ́ òwò àti èyí tí ó ń jáde."], ["Olówó mú (drawings)", "owó tí olówó mú jáde nínú iṣẹ́ òwò fún lílò ara rẹ̀."]],
          slides: [
            { title: "Ìdí tí a fi ń kọ àkọsílẹ̀", bullets: ["Láti rí bóyá o ń jèrè gan-an", "Wọ́n nílò rẹ̀ fún owó-orí, owó-ẹ̀yáwó àti ìsọdọ̀tun"] },
            { title: "Ìlà-òòró mẹ́rin", bullets: ["Ọjọ́", "Ohun tí ó ṣẹlẹ̀", "Owó tí ó wọlé", "Owó tí ó jáde"] },
            { title: "Ya owó iṣẹ́ òwò sọ́tọ̀", bullets: ["Kọ ìnáwó ilé bí \"olówó mú\"", "Nọ́mbà mobile money ọ̀tọ̀ ń ṣèrànwọ́", "Tọ́jú ìwé ìsanwó tàbí fọ́tò wọn"] }
          ],
          tryIt: "Bẹ̀rẹ̀ ìwé owó lónìí. Kọ gbogbo ọjà tí o tà àti gbogbo ìnáwó fún ọ̀sẹ̀ kan, pẹ̀lú owó tí o mú fún ilé. Ní ọjọ́ ìkẹyìn, ṣe àròpọ̀ ìlà-òòró kọ̀ọ̀kan kí o sì kọ ìyàtọ̀ rẹ̀.",
          youCanNow: "kọ ìwé owó tó rọrùn, kí o sì ya owó iṣẹ́ òwò sọ́tọ̀ kúrò lára owó ilé.",
          quickCheck: [
            { objective: "O5", q: "Kí ni ìlà-òòró mẹ́rin ìwé owó tó rọrùn?", options: ["Ọjọ́, ohun tí ó ṣẹlẹ̀, owó tí ó wọlé, owó tí ó jáde", "Orúkọ, ọjọ́ orí, ìlú, fóònù", "Iye owó, àwọ̀, ìwọ̀n, orúkọ ọjà", "Ọjọ́ Ajé sí Ọjọ́bọ̀"], answer: 0, why: "Ìlà-òòró mẹ́rin wọ̀nyí ń fi gbogbo ìrìn owó hàn." },
            { objective: "O5", q: "O mú 2,000 NGN nínú iṣẹ́ òwò fún oúnjẹ ilé. Kí ni o máa kọ?", options: ["Kò sí nǹkan", "Ọjà tí o tà", "Oníbàárà tuntun", "\"Olówó mú 2,000 NGN\" nínú owó tí ó jáde"], answer: 3, why: "Kíkọ ohun tí olówó mú sílẹ̀ ń jẹ́ kí àkọsílẹ̀ jẹ́ òótọ́." }
          ]
        },
        {
          title: "Dídúró lórí ìforúkọsílẹ̀: ìsọdọ̀tun, ìròyìn àti kàlẹ́ńdà ọdọọdún",
          objectives: ["O6"],
          minutes: 5,
          goal: "Ṣe kàlẹ́ńdà ọdọọdún ti ìsọdọ̀tun, ìròyìn àti ọjọ́ ìwé àṣẹ.",
          text: [
            "Fíforúkọ sílẹ̀ lẹ́ẹ̀kan kì í ṣe òpin. Ọ̀pọ̀ iṣẹ́ òwò gbọ́dọ̀ sọ ìforúkọsílẹ̀ dọ̀tun, fi ìròyìn ọdọọdún tàbí ìròyìn owó-orí sílẹ̀, kí wọ́n sì sọ ìwé àṣẹ ìbílẹ̀ dọ̀tun. Pípàdánù ọjọ́ kan lè mú owó ìtanràn wá tàbí kí o pàdánù ìforúkọsílẹ̀.",
            "Àpẹẹrẹ: ORC ti Ghana sọ pé gbogbo ilé-iṣẹ́ tí ó forúkọ sílẹ̀ (incorporated) gbọ́dọ̀ fi ìròyìn ọdọọdún sílẹ̀, a sì lè sọ orúkọ iṣẹ́ òwò dọ̀tun lórí ayélujára, pẹ̀lú títẹ *222#. CAC ti Nàìjíríà ló ń bójú tó ìròyìn ọdọọdún. KRA ti Kenya ń retí ìròyìn owó-orí láti ọ̀dọ̀ àwọn tí ó ní ojúṣe owó-orí. Ìwé àṣẹ ìbílẹ̀ sábà máa ń wà fún ọdún kan. Ọjọ́ àti owó gangan yàtọ̀ síra, nítorí náà ṣàyẹ̀wò ọ̀kọ̀ọ̀kan lórí ojú-òpó ìjọba tàbí ní ọ́fíìsì.",
            "Ṣe kàlẹ́ńdà ọdọọdún: kọ ojúṣe kọ̀ọ̀kan, ọ́fíìsì náà, oṣù tí ó máa yọ, àti ọjọ́ tí o ṣàyẹ̀wò. Ṣètò ìrántí lórí fóònù rẹ ní oṣù kan ṣáájú. Máa kọ ìwé owó rẹ lójoojúmọ́, nítorí àwọn nọ́mbà inú rẹ̀ ni ìròyìn máa ń lò.",
            "Tí o kò bá mọ̀ dájú ohun tí ó kàn ọ́, béèrè lọ́wọ́ ọ́fíìsì ìforúkọsílẹ̀, ọ́fíìsì owó-orí, ibùdó ìrànlọ́wọ́ iṣẹ́ òwò tàbí akọ̀wé owó tó kúnjú ìwọ̀n. Tí ẹnìkan bá pè ọ́ pé wọn máa fagi lé ìforúkọsílẹ̀ rẹ lónìí àyàfi tí o bá san owó fún wọn báyìí, kọ́kọ́ ṣàyẹ̀wò pẹ̀lú ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ."
          ],
          steps: ["Kọ gbogbo ojúṣe: ìsọdọ̀tun, ìròyìn ọdọọdún, ìròyìn owó-orí, ìsọdọ̀tun ìwé àṣẹ.", "Ṣàyẹ̀wò ọjọ́ àti ọ́fíìsì ọ̀kọ̀ọ̀kan lórí ojú-òpó ìjọba.", "Kọ wọ́n sínú kàlẹ́ńdà oṣù 12.", "Ṣètò ìrántí lórí fóònù ní oṣù kan ṣáájú ọjọ́ kọ̀ọ̀kan.", "Ṣàyẹ̀wò ìbéèrè owó kíákíá pẹ̀lú ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ."],
          words: [["Ìròyìn ọdọọdún (annual return)", "ìròyìn ọdọọdún sí ọ́fíìsì ìforúkọsílẹ̀ pé iṣẹ́ òwò rẹ ṣì wà àti pé ìsọfúnni rẹ̀ tọ̀nà."], ["Ìsọdọ̀tun (renewal)", "sísan owó tàbí fífi ìwé sílẹ̀ lẹ́ẹ̀kan sí i kí ìforúkọsílẹ̀ tàbí ìwé àṣẹ lè máa ṣiṣẹ́ lọ."], ["Owó ìtanràn (penalty)", "owó tí a ń san fún pípẹ́ tàbí rírú òfin."]],
          slides: [
            { title: "Ìforúkọsílẹ̀ kì í ṣe òpin", bullets: ["Ìsọdọ̀tun àti ìròyìn ọdọọdún", "Ìròyìn owó-orí", "Ìsọdọ̀tun ìwé àṣẹ ìbílẹ̀"] },
            { title: "Àpẹẹrẹ", bullets: ["Ghana ORC: ìròyìn ọdọọdún fún ilé-iṣẹ́; sọ orúkọ dọ̀tun pẹ̀lú *222#", "Nàìjíríà CAC: ìròyìn ọdọọdún", "Kenya KRA: ìròyìn owó-orí tí o bá ní ojúṣe owó-orí"] },
            { title: "Kàlẹ́ńdà ọdọọdún rẹ", bullets: ["Ojúṣe, ọ́fíìsì, oṣù tí ó máa yọ", "Ọjọ́ tí o ṣàyẹ̀wò rẹ̀", "Ìrántí lórí fóònù ní oṣù kan ṣáájú"] },
            { title: "Wà láìléwu", bullets: ["Kò dá ọ lójú? Béèrè lọ́wọ́ ọ́fíìsì tàbí akọ̀wé owó", "Ìpè \"sanwó báyìí\" kíákíá: ṣàyẹ̀wò pẹ̀lú ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kó àkọsílẹ̀ ìforúkọsílẹ̀ rẹ jọ pẹ̀lú irú iṣẹ́ òwò rẹ, ọ́fíìsì ìforúkọsílẹ̀, orúkọ tí o lè lò, àwọn ìwé, nọ́mbà owó-orí àti ìwé àṣẹ, ètò ìwé owó rẹ, àti kàlẹ́ńdà oṣù 12 ti ìsọdọ̀tun àti ìròyìn pẹ̀lú ìrántí tí o ti ṣètò.",
          youCanNow: "ṣètò ìsọdọ̀tun àti ìròyìn ọdọọdún rẹ kí iṣẹ́ òwò rẹ lè dúró lórí ìforúkọsílẹ̀, kí ó sì wà ní ipò rere.",
          quickCheck: [
            { objective: "O6", q: "Ìgbà wo ni o yẹ kí o ṣètò ìrántí fún ìsọdọ̀tun?", options: ["Lẹ́yìn tí ọjọ́ náà ti kọjá", "Láéláé", "Nǹkan bí oṣù kan ṣáájú ọjọ́ rẹ̀", "Tí ẹnìkan bá pè ọ́ nìkan"], answer: 2, why: "Ìrántí ní oṣù kan ṣáájú ń fún ọ ní àkókò láti múra sílẹ̀ àti láti sanwó." },
            { objective: "O6", q: "Ẹnìkan pè ọ́, ó sọ pé wọn máa fagi lé iṣẹ́ òwò rẹ lónìí àyàfi tí o bá san owó fún un báyìí. Kí ni o máa ṣe?", options: ["Kọ́kọ́ ṣàyẹ̀wò pẹ̀lú ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ kí o tó san owó fún ẹnikẹ́ni", "San owó fún un kíákíá", "Fi ọ̀rọ̀ aṣínà rẹ ránṣẹ́", "Ti iṣẹ́ òwò náà pa"], answer: 0, why: "Ìbéèrè owó kíákíá jẹ́ àmì jìbìtì; ọ́fíìsì ìforúkọsílẹ̀ fúnra rẹ̀ lè sọ ipò rẹ fún ọ." }
          ],
          sources: [ORC, CAC, KRA]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ṣíṣe é bí ó ti tọ́",
        questions: [
          { objective: "O4", q: "Yàtọ̀ sí fíforúkọ orúkọ sílẹ̀, ọ̀pọ̀ iṣẹ́ òwò tún nílò:", options: ["Nọ́mbà owó-orí àti ìwé àṣẹ ìṣòwò ìbílẹ̀", "Kò sí nǹkan rárá", "Fóònù tuntun", "Àkáǹtì lórí ọjà ayélujára"], answer: 0, why: "Nọ́mbà owó-orí àti ìwé àṣẹ ìbílẹ̀ yàtọ̀ sí ìforúkọsílẹ̀ orúkọ." },
          { objective: "O4", q: "Níbo ni o ti máa béèrè nípa ìwé àṣẹ ìṣòwò ní Kenya?", options: ["Aṣojú mobile money", "Ìjọba county rẹ", "Ilé-ìwé kan", "Ilé iṣẹ́ rédíò"], answer: 1, why: "Àwọn county ní Kenya ló ń fúnni ní ìwé àṣẹ iṣẹ́ òwò fún agbègbè wọn." },
          { objective: "O5", q: "Kí ló dé tí a fi ń ya owó iṣẹ́ òwò sọ́tọ̀ kúrò lára owó ilé?", options: ["Ó dùn jù", "Kí báńkì lè san owó fún ọ", "Kí o lè rí bóyá iṣẹ́ òwò náà ń jèrè gan-an", "Kí o má san owó-orí"], answer: 2, why: "Dída owó pọ̀ ń bo bóyá iṣẹ́ òwò ń jèrè mọ́lẹ̀." },
          { objective: "O5", q: "Ọ̀sẹ̀ rẹ fi hàn pé owó tí ó wọlé jẹ́ 40,000 KES, owó tí ó jáde sì jẹ́ 31,000 KES. Ìyàtọ̀ rẹ̀ ni:", options: ["71,000 KES", "31,000 KES", "40,000 KES", "9,000 KES"], answer: 3, why: "40,000 yọ 31,000 kúrò jẹ́ 9,000." },
          { objective: "O6", q: "Kí ni ìròyìn ọdọọdún (annual return)?", options: ["Ìròyìn ọdọọdún sí ọ́fíìsì ìforúkọsílẹ̀ pé iṣẹ́ òwò náà àti ìsọfúnni rẹ̀ ṣì wà bí ó ti yẹ", "Owó tí oníbàárà gbà padà", "Ìsinmi", "Owó-ẹ̀yáwó báńkì"], answer: 0, why: "Ìròyìn ọdọọdún ń jẹ́ kí àkọsílẹ̀ ọ́fíìsì ìforúkọsílẹ̀ nípa iṣẹ́ òwò rẹ wà ní ìbámu pẹ̀lú ìgbà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Fíforúkọ Iṣẹ́ Òwò Kékeré Sílẹ̀ àti Ṣíṣe É ní Áfíríkà",
    questions: [
      { objective: "O1", q: "Èwo ni àǹfààní fíforúkọ iṣẹ́ òwò sílẹ̀?", options: ["Kíkọ̀ láti san owó-orí láéláé", "Ṣíṣí àkáǹtì báńkì iṣẹ́ òwò àti gbígba àdéhùn iṣẹ́", "Kò sí àkọsílẹ̀ tí a nílò", "Kò sí ojúṣe kankan"], answer: 1, why: "Ìforúkọsílẹ̀ ń ṣí ọ̀nà sí àkáǹtì báńkì, àdéhùn iṣẹ́ àti àwọn ètò, pẹ̀lú àwọn ojúṣe." },
      { objective: "O1", q: "Iṣẹ́ òwò ẹnìkan (sole proprietor) ni:", options: ["Iṣẹ́ òwò tí ẹnìkan ṣoṣo ni", "Ọ́fíìsì ìjọba", "Ilé-iṣẹ́ tí ó ní ọ̀pọ̀ onípín", "Ẹgbẹ́ àjọ (savings group)"], answer: 0, why: "Olówó kan, tí òun fúnra rẹ̀ ń dáhùn fún iṣẹ́ òwò náà." },
      { objective: "O1", q: "Ọ̀pọ̀ olùtajà kékeré ní Morocco ń lo:", options: ["Ilé-iṣẹ́ gbogbogbò", "SARL ti OHADA nìkan", "Ipò auto-entrepreneur", "Kò sí ìforúkọsílẹ̀ láéláé"], answer: 2, why: "Morocco ní ipò auto-entrepreneur fún àwọn iṣẹ́ kékeré." },
      { objective: "O1", q: "Ta ni o yẹ kí o béèrè lọ́wọ́ rẹ̀ kí o tó ṣe ìpinnu ńlá nípa irú iṣẹ́ òwò rẹ?", options: ["Àjèjì kan lórí ayélujára", "Kò sí ẹnìkan", "Olùtajà kan ní ọjà", "Ọ́fíìsì ìforúkọsílẹ̀ tàbí akọ̀wé owó tàbí agbẹjọ́rò tó kúnjú ìwọ̀n"], answer: 3, why: "Ọ́fíìsì ìforúkọsílẹ̀ tàbí akọ́ṣẹ́mọṣẹ́ lè gbà ọ́ nímọ̀ràn lórí ọ̀rọ̀ tìrẹ." },
      { objective: "O2", q: "Ní Ghana, ta ló ń forúkọ orúkọ iṣẹ́ òwò sílẹ̀?", options: ["Office of the Registrar of Companies (ORC)", "Ghana Revenue Authority nìkan", "Aṣojú mobile money", "Ṣọ́ọ̀ṣì kan"], answer: 0, why: "ORC ló ń forúkọ orúkọ iṣẹ́ òwò àti ilé-iṣẹ́ sílẹ̀ ní Ghana." },
      { objective: "O2", q: "Ní Kenya, o máa forúkọ iṣẹ́ òwò sílẹ̀ lórí ayélujára nípasẹ̀:", options: ["Ojú-ewé Facebook kan", "eCitizen, pẹ̀lú Business Registration Service", "Ẹgbẹ́ WhatsApp àdáni kan", "App báńkì rẹ"], answer: 1, why: "Ìforúkọsílẹ̀ BRS ni a ń ṣe lórí ayélujára nípasẹ̀ eCitizen." },
      { objective: "O2", q: "Èwo ni ọ̀nà tí kò léwu jù láti dé ojú-òpó wẹ́ẹ̀bù ọ́fíìsì ìforúkọsílẹ̀?", options: ["Tẹ link nínú text tí o kò mọ ibi tí ó ti wá", "Lo ìpolówó tí ó yọ jáde lójijì", "Tẹ àdírẹ́sì ìjọba náà fúnra rẹ kí o sì ṣàyẹ̀wò ìparí rẹ̀", "Ní kí àjèjì ṣe é fún ọ pẹ̀lú ọ̀rọ̀ aṣínà rẹ"], answer: 2, why: "Títẹ àdírẹ́sì náà fúnra rẹ ń jẹ́ kí o yẹra fún ojú-òpó ayédèrú." },
      { objective: "O3", q: "Kí o tó bẹ̀rẹ̀ ìforúkọsílẹ̀ lórí ayélujára, o yẹ kí o:", options: ["Kọ́kọ́ pèsè gbogbo orúkọ, ìsọfúnni àti ìwé", "Bẹ̀rẹ̀ kí o sì retí pé yóò dára", "Pín ọ̀rọ̀ aṣínà rẹ pẹ̀lú aṣojú", "San owó fún àjèjì"], answer: 0, why: "Wíwà ní sẹpẹ́ ń jẹ́ kí o parí ní ìjókòó kan, ó sì ń dín ìnáwó dátà kù." },
      { objective: "O3", q: "Orúkọ iṣẹ́ òwò tó dára ni:", options: ["Àdàkọ orúkọ ọjà olókìkí", "Èyí tí ó yé tí iṣẹ́ òwò míì kò tíì lò", "Èyí tí ó gùn gan-an tí ó sì ṣòro láti kọ", "Ọ̀kan náà pẹ̀lú ti aládùúgbò rẹ"], answer: 1, why: "Orúkọ tí ó yé tí ẹnikẹ́ni kò tíì lò ló ṣeé ṣe jù kí wọ́n gbà." },
      { objective: "O3", q: "Níbo ni o ti máa rí owó ìforúkọsílẹ̀ lọ́wọ́lọ́wọ́?", options: ["Ìwé ìpolówó àtijọ́", "Àhesọ ọ̀rọ̀", "Ìméfò rẹ", "Ojú-òpó wẹ́ẹ̀bù tàbí ọ́fíìsì ìforúkọsílẹ̀ ti ìjọba"], answer: 3, why: "Owó máa ń yí padà, nítorí náà orísun ìjọba nìkan ló dájú." },
      { objective: "O4", q: "KRA PIN ni:", options: ["PIN mobile money", "Ọ̀rọ̀ aṣínà láti pín", "Nọ́mbà ìdánimọ̀ owó-orí ti Kenya", "Ìwé àṣẹ iṣẹ́ òwò"], answer: 2, why: "KRA PIN ni nọ́mbà owó-orí rẹ pẹ̀lú Kenya Revenue Authority." },
      { objective: "O4", q: "Àjọ owó-orí àpapọ̀ (federal) ti Nàìjíríà ni:", options: ["Nigeria Revenue Service (NRS)", "Corporate Affairs Commission", "SMEDAN", "Ẹgbẹ́ ọjà ìbílẹ̀ rẹ"], answer: 0, why: "NRS ni àjọ owó-orí àpapọ̀ ti Nàìjíríà; àwọn ìpínlẹ̀ ní àjọ owó-orí tiwọn." },
      { objective: "O4", q: "Ilé ìṣaralóge tàbí ìsọ̀ oúnjẹ lè tún nílò:", options: ["Ìwé àṣẹ awakọ̀ òfuurufú", "Kò sí nǹkan míì", "Oyè yunifásítì", "Ìwé ẹ̀rí ìlera tàbí ìwé àṣẹ ẹ̀ka iṣẹ́"], answer: 3, why: "Àwọn irú iṣẹ́ kan nílò ìwé àṣẹ ẹ̀ka iṣẹ́ fún ìlera àti ààbò." },
      { objective: "O5", q: "Ìwé owó ń kọ:", options: ["Ọjọ́ ìbí àwọn oníbàárà", "Owó tí ó wọlé àti owó tí ó jáde, pẹ̀lú ọjọ́", "Ọjà ńlá tí o tà nìkan", "Owó-ẹ̀yáwó báńkì nìkan"], answer: 1, why: "Ó ń kọ gbogbo ìrìn owó, pẹ̀lú ọjọ́ àti ohun tí ó ṣẹlẹ̀." },
      { objective: "O5", q: "Ìgbà wo ni o yẹ kí o kọ ọjà tí o tà sínú ìwé owó?", options: ["Lẹ́ẹ̀kan lọ́dún", "Nígbà tí o bá rántí nìkan", "Ní ọjọ́ kan náà", "Láéláé fún mobile money"], answer: 2, why: "Kíkọ ọ́ ní ọjọ́ kan náà ń jẹ́ kí àkọsílẹ̀ pé, kí ó sì jẹ́ òótọ́." },
      { objective: "O5", q: "Owó tí o mú nínú iṣẹ́ òwò fún owó ilé-ìwé ni a máa kọ bí:", options: ["\"Olówó mú\" nínú owó tí ó jáde", "Ọjà tí o tà", "Kò sí nǹkan", "Ẹ̀bùn láti ọ̀dọ̀ oníbàárà"], answer: 0, why: "Kíkọ ohun tí olówó mú sílẹ̀ ń jẹ́ kí owó iṣẹ́ òwò àti owó ilé yé kedere." },
      { objective: "O6", q: "ORC ti Ghana jẹ́ kí a sọ orúkọ iṣẹ́ òwò dọ̀tun:", options: ["Ní ojúkojú ní òkè òkun nìkan", "Láéláé", "Lórí ayélujára, pẹ̀lú títẹ *222#", "Nípasẹ̀ aṣojú lórí WhatsApp"], answer: 2, why: "ORC sọ pé a lè ṣe ìsọdọ̀tun lórí ayélujára àti pẹ̀lú *222#." },
      { objective: "O6", q: "Kàlẹ́ńdà ọdọọdún fún títẹ̀lé òfin ń kọ:", options: ["Ọjọ́ ìsinmi nìkan", "Àdírẹ́sì àwọn oníbàárà", "Ìdíje bọ́ọ̀lù", "Ìsọdọ̀tun, ìròyìn àti ìwé àṣẹ kọ̀ọ̀kan, ọ́fíìsì rẹ̀ àti oṣù tí ó máa yọ"], answer: 3, why: "Kàlẹ́ńdà kan ń jẹ́ kí o rí gbogbo ojúṣe àti ọjọ́." },
      { objective: "O6", q: "Pípàdánù ìsọdọ̀tun tàbí ìròyìn ọdọọdún lè fa:", options: ["Ẹ̀bùn ọ̀fẹ́", "Owó ìtanràn tàbí pípàdánù ìforúkọsílẹ̀", "Iye owó tí ó dín kù", "Kò sí nǹkan láéláé"], answer: 1, why: "Ìròyìn tí ó pẹ́ lè mú owó ìtanràn wá tàbí kí wọ́n yọ ọ́ kúrò nínú àkọsílẹ̀." },
      { objective: "O6", q: "Ṣáájú ọjọ́ ìparí kọ̀ọ̀kan, o yẹ kí o:", options: ["Ṣàyẹ̀wò ọjọ́ náà lórí ojú-òpó ìjọba kí o sì ṣètò ìrántí", "Dúró kí ẹnìkan pè ọ́ láti rán ọ létí", "San owó fún ẹnikẹ́ni tí ó bá béèrè", "Fojú fò ó"], answer: 0, why: "Ṣíṣàyẹ̀wò ní ọ̀nà ìjọba àti ṣíṣètò ìrántí ń jẹ́ kí o wà lásìkò, kí o sì yẹra fún jìbìtì." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 1, 5, 7, 10, 12, 13, 17, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Irú iṣẹ́ òwò", objective: "O1", notYet: "Kò yan irú kankan, tàbí kò fúnni ní ìdí.", meets: "Ó yan irú kan pẹ̀lú àǹfààní kan àti ojúṣe kan, tí ó bá àwọn olówó àti ewu mu.", exceeds: "Ó fi irú méjì wé ara wọn, ó sì sọ ìgbà tí iṣẹ́ òwò náà lè yí irú rẹ̀ padà." },
      { name: "Ọ́fíìsì ìforúkọsílẹ̀ ìjọba", objective: "O2", notYet: "Kò dárúkọ ọ́fíìsì ìforúkọsílẹ̀, tàbí ó lo ojú-òpó tàbí aṣojú tí kì í ṣe ti ìjọba.", meets: "Ọ́fíìsì ìforúkọsílẹ̀ ìjọba tó tọ́ àti ojú-òpó wẹ́ẹ̀bù tàbí àdírẹ́sì ọ́fíìsì rẹ̀ gidi.", exceeds: "Ó tún kọ bí a ṣe lè dá ojú-òpó tàbí aṣojú ayédèrú mọ̀." },
      { name: "Àkọsílẹ̀ ìforúkọsílẹ̀", objective: "O3", notYet: "Orúkọ tí ó lè lò, ìsọfúnni olówó tàbí iṣẹ́ tí ó ń ṣe kò sí nínú rẹ̀.", meets: "Orúkọ mẹ́ta, ìsọfúnni olówó, àdírẹ́sì, iṣẹ́ tí ó ń ṣe, àwọn ìwé àti owó ìforúkọsílẹ̀ láti ojú-òpó ìjọba.", exceeds: "Ó tún dárúkọ àwọn ìwé tí ilé-iṣẹ́ máa nílò, tàbí ibi tí ó ti máa tọ́jú ìwé ẹ̀rí láìléwu." },
      { name: "Nọ́mbà owó-orí àti ìwé àṣẹ", objective: "O4", notYet: "Kò kọ nọ́mbà owó-orí tàbí ìwé àṣẹ kankan, tàbí kò dárúkọ ọ́fíìsì.", meets: "Nọ́mbà owó-orí, ìwé àṣẹ ìbílẹ̀ àti ìwé àṣẹ ẹ̀ka iṣẹ́ èyíkéyìí, ọ̀kọ̀ọ̀kan pẹ̀lú ọ́fíìsì rẹ̀ àti ọjọ́ tí ó ṣàyẹ̀wò.", exceeds: "Ó ti fìdí ọ̀kan múlẹ̀ ó kéré tán pẹ̀lú ọ́fíìsì náà ní ojúkojú tàbí lórí fóònù." },
      { name: "Ìwé owó", objective: "O5", notYet: "Kò sí ìwé owó, tàbí owó iṣẹ́ òwò àti owó ilé dà pọ̀.", meets: "Àkọsílẹ̀ ọ̀sẹ̀ kan pẹ̀lú ìlà-òòró mẹ́rin, \"olówó mú\" àti àròpọ̀ ọ̀sẹ̀ tó tọ̀nà.", exceeds: "Nọ́mbà owó tàbí àkáǹtì ọ̀tọ̀ fún iṣẹ́ òwò, ó sì tọ́jú ìwé ìsanwó." },
      { name: "Kàlẹ́ńdà ọdọọdún", objective: "O6", notYet: "Kò sí kàlẹ́ńdà, tàbí ó méfò àwọn ọjọ́.", meets: "Kàlẹ́ńdà oṣù 12 ti ìsọdọ̀tun, ìròyìn àti ìwé àṣẹ pẹ̀lú ọ́fíìsì, ọjọ́ tí ó ṣàyẹ̀wò àti ìrántí tí ó ṣètò.", exceeds: "Ó kọ ẹni tí ó máa béèrè lọ́wọ́ rẹ̀ (ọ́fíìsì ìforúkọsílẹ̀, ọ́fíìsì owó-orí tàbí akọ̀wé owó) fún ojúṣe kọ̀ọ̀kan." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n forúkọ iṣẹ́ òwò wọn tàbí ìwé àṣẹ kan sílẹ̀ láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ń kọ ìwé owó fún ó kéré tán ọ̀sẹ̀ mẹ́rin lẹ́yìn ẹ̀kọ́ náà",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣí àkáǹtì báńkì tàbí mobile money ti iṣẹ́ òwò, gba àdéhùn iṣẹ́, tàbí darapọ̀ mọ́ ètò ìrànlọ́wọ́ láàárín oṣù mẹ́fà"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà ṣọ́ọ̀bù íńtánẹ́ẹ̀tì (cyber café) tí ó ní íńtánẹ́ẹ̀tì",
      "Ìwé àkọsílẹ̀ fún àkọsílẹ̀ ìforúkọsílẹ̀, ìwé owó àti kàlẹ́ńdà",
      "Àdírẹ́sì ojú-òpó wẹ́ẹ̀bù ìjọba ti ọ́fíìsì ìforúkọsílẹ̀, àjọ owó-orí àti ìjọba ìbílẹ̀ rẹ",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú, pẹ̀lú ọ̀sẹ̀ kan àṣeṣe ìwé owó"
    ],
    facilitatorNotes: [
      "Kí ẹ̀kọ́ tó bẹ̀rẹ̀, wá ọ́fíìsì ìforúkọsílẹ̀, àjọ owó-orí àti ọ́fíìsì ìwé àṣẹ ìbílẹ̀ fún orílẹ̀-èdè àti ìlú rẹ lórí ojú-òpó ìjọba wọn, kí o sì tẹ àwọn àdírẹ́sì náà jáde.",
      "Má ṣe gba nọ́mbà ìdánimọ̀, ọ̀rọ̀ aṣínà tàbí nọ́mbà owó-orí àwọn akẹ́kọ̀ọ́ láéláé; àkọsílẹ̀ ń kọ ohun tí a nílò, kì í ṣe àwọn nọ́mbà fúnra wọn.",
      "Pe ẹnìkan láti ọ́fíìsì ìforúkọsílẹ̀, ibùdó ìrànlọ́wọ́ iṣẹ́ òwò (fún àpẹẹrẹ SMEDAN ní Nàìjíríà) tàbí akọ̀wé owó ìbílẹ̀ láti dáhùn ìbéèrè.",
      "Má ṣe sọ iye owó tàbí ọjọ́ ìparí láti orí; fi bí a ṣe ń ṣàyẹ̀wò wọn lórí ojú-òpó ìjọba han àwọn akẹ́kọ̀ọ́.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
