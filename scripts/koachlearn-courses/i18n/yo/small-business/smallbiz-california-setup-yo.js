"use strict";

// Koach Learn course (Yoruba translation of small-business/smallbiz-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.
// US-specific course: California and US office names stay in English, explained in Yoruba.

const SOS_LLC = { name: "California Secretary of State: Limited Liability Companies (fọ́ọ̀mù àti owó)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/limited-liability-companies-california-domestic" };
const SOS_CORP = { name: "California Secretary of State: Corporations (fọ́ọ̀mù àti owó)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov/" };
const FTB_LLC = { name: "Franchise Tax Board: Limited liability company", url: "https://www.ftb.ca.gov/file/business/types/limited-liability-company/index.html" };
const FTB_CORP = { name: "Franchise Tax Board: Corporations", url: "https://www.ftb.ca.gov/file/business/types/corporations/index.html" };
const FTB_FORMS = { name: "Franchise Tax Board: Ìtọ́sọ́nà sí àwọn ìṣètò iṣẹ́ òwò tí ó wọ́pọ̀ (FTB 1123)", url: "https://www.ftb.ca.gov/forms/misc/1123.html" };
const CDTFA = { name: "CDTFA: Ìwé àṣẹ (Permits and Licenses)", url: "https://www.cdtfa.ca.gov/services/permits-licenses.htm" };
const CDTFA_FAQ = { name: "CDTFA: Bí a ṣe ń gba seller's permit (ìbéèrè tí a máa ń béèrè)", url: "https://cdtfa.ca.gov/taxes-and-fees/faqseller.htm" };
const IRS_EIN = { name: "IRS: Gba Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const CALGOLD = { name: "CalGold: Ìrànlọ́wọ́ ìwé àṣẹ ní California", url: "https://www.calgold.ca.gov/" };
const EDD = { name: "EDD: Ìgbésẹ̀ 1, forúkọ sílẹ̀ gẹ́gẹ́ bí agbanisíṣẹ́", url: "https://edd.ca.gov/en/payroll_taxes/step-1-register-as-an-employer/" };
const LA_FBN = { name: "Los Angeles County Clerk: Ohun tí Fictitious Business Name nílò (county àpẹẹrẹ)", url: "https://www.lavote.gov/home/county-clerk/fictitious-business-names/filing/requirements" };
const CALOSBA = { name: "California Office of the Small Business Advocate: Ṣètò iṣẹ́ òwò rẹ", url: "https://calosba.ca.gov/for-small-businesses-and-non-profits/set-up-your-business-in-california/" };

module.exports = {
  id: "smallbiz-california-setup-yo",
  lang: "yo",
  translationOf: "smallbiz-california-setup",
  category: "Small Business",
  name: "Bíbẹ̀rẹ̀ Iṣẹ́ Òwò Kékeré ní California, pẹ̀lú Iye Owó Rẹ̀",
  skills: "Yíyan ìṣètò iṣẹ́ òwò, Fífi orúkọ sílẹ̀ lọ́dọ̀ ìpínlẹ̀ àti county, Gbígba EIN àti seller's permit, Wíwá àwọn ìwé àṣẹ ìbílẹ̀, Ṣíṣe ìwé iye owó ìbẹ̀rẹ̀ àti ọjọ́ ìparí",
  outcome: "ṣe ètò ìbẹ̀rẹ̀ ojú-ewé kan fún iṣẹ́ òwò tìrẹ ní California: ìṣètò tí o máa lò, ìforúkọsílẹ̀ àti ìwé àṣẹ kọ̀ọ̀kan tí o nílò ní ìtẹ̀léra tó tọ́, ọ́fíìsì ìjọba fún ọ̀kọ̀ọ̀kan, iye owó ọ̀kọ̀ọ̀kan (tàbí ibi tí o ti máa wò ó), àti àwọn ọjọ́ ìparí tí o kò gbọdọ̀ pàdánù.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí ń bẹ̀rẹ̀ iṣẹ́ òwò kékeré ní California: ọkọ̀ oúnjẹ (food truck), ṣọ́ọ̀bù irun, iṣẹ́ ìmọ́tótó, ṣọ́ọ̀bù kékeré, ìtajà lórí ayélujára tàbí ìdáná búrẹ́dì nílé. Ọ̀pọ̀ lára àwọn akẹ́kọ̀ọ́ wa ń bẹ̀rẹ̀ iṣẹ́ òwò fún ìgbà àkọ́kọ́, wọ́n wá láti ẹ̀yà kékeré, ọ̀pọ̀ sì ń ṣe é láìsí agbẹjọ́rò.",
    "O máa kọ́ àwọn ìgbésẹ̀ ìbẹ̀rẹ̀ ní ìtẹ̀léra: yan ìṣètò, forúkọ sílẹ̀, gba nọ́mbà owó-orí ìjọba àpapọ̀ lọ́fẹ̀ẹ́, gba seller's permit tí o bá ń ta ọjà, wá àwọn ìwé àṣẹ ìlú àti county rẹ, kí o sì múra fún owó-orí ọdọọdún àti ìwé tí o máa fi sílẹ̀ fún ìpínlẹ̀. A ṣàyẹ̀wò gbogbo owó ìpínlẹ̀ inú ẹ̀kọ́ yìí lórí ojú-òpó ìjọba gidi, ẹ̀kọ́ kọ̀ọ̀kan sì ń dárúkọ àwọn ojú-òpó náà.",
    "Owó àti òfin ń yí padà. Kí o tó san owó kankan, ṣí ojú-òpó ìjọba tí ẹ̀kọ́ náà dárúkọ kí o sì wo iye tó wà báyìí. Owó ìlú àti county yàtọ̀ láti ibì kan sí ibòmíì, nítorí náà ẹ̀kọ́ yìí fi ibi tí o ti máa wò ó hàn ọ́ dípò kí a fojú díwọ̀n. Fún ipò tìrẹ, olùkọ́ SCORE ọ̀fẹ́, Small Business Development Center (SBDC) tàbí ọ̀jọ̀gbọ́n owó-orí lè ràn ọ́ lọ́wọ́.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ka ẹ̀kọ́ náà, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". Ìdánwò ìmọ̀ kúkúrú wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí. Àwọn iṣẹ́ náà máa di ètò ìbẹ̀rẹ̀ tìrẹ."
  ],
  finalTask: "Ṣe ètò ìbẹ̀rẹ̀ ojú-ewé kan fún iṣẹ́ òwò rẹ pẹ̀lú òpó márùn-ún: Ìgbésẹ̀, Ọ́fíìsì (pẹ̀lú ojú-òpó ìjọba rẹ̀), Iye owó (tàbí \"wò ó ní ...\"), Ọjọ́ ìparí, Ó ti parí. Fi ìṣètò rẹ, ìforúkọsílẹ̀ orúkọ, EIN, seller's permit (tàbí ìdí tí o kò fi nílò rẹ̀), ìwé àṣẹ iṣẹ́ òwò ìlú, ìwé àṣẹ pàtàkì èyíkéyìí tí CalGold dárúkọ fún irú iṣẹ́ òwò rẹ, àti owó-orí $800 ọdọọdún àti Statement of Information tí o bá dá LLC tàbí corporation sílẹ̀.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń bẹ̀rẹ̀ iṣẹ́ òwò kékeré ní California, bí ọkọ̀ oúnjẹ, ṣọ́ọ̀bù irun, iṣẹ́ ìmọ́tótó, ṣọ́ọ̀bù kékeré, ìtajà lórí ayélujára tàbí ìdáná búrẹ́dì nílé. Ọ̀pọ̀ ń bẹ̀rẹ̀ iṣẹ́ òwò fún ìgbà àkọ́kọ́, wọ́n wá láti ẹ̀yà kékeré, wọ́n sì ń ṣe é láìsí agbẹjọ́rò.",
    startingPoint: "Wọ́n ní èrò iṣẹ́ òwò, wọ́n sì lè lo fóònù tàbí kọ̀mpútà láti ṣí ojú-òpó wẹ́ẹ̀bù. Ọ̀pọ̀ kò mọ àwọn ìgbésẹ̀ ìbẹ̀rẹ̀, ọ́fíìsì tí ó ń bójú tó ọ̀kọ̀ọ̀kan, iye owó ìpínlẹ̀, tàbí ìwé àti owó-orí ọdọọdún tí ó ń bá ìṣètò kọ̀ọ̀kan wá.",
    gap: "Pípàdánù ìforúkọsílẹ̀, ìwé àṣẹ tàbí ìwé ọdọọdún lè mú owó ìtanràn wá, àwọn ojú-òpó ayédèrú tí ń gba owó sì ń gba owó púpọ̀ fún iṣẹ́ tí ó jẹ́ ọ̀fẹ́. Àwọn akẹ́kọ̀ọ́ nílò ètò ìbẹ̀rẹ̀ tí ó ní ìgbésẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra, ọ́fíìsì ìjọba, iye owó àti ọjọ́ ìparí, kí wọ́n lè bẹ̀rẹ̀ lọ́nà òfin kí wọ́n sì ṣírò owó dáadáa.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú",
      "Ẹ̀rọ: fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì láti ṣí ojú-òpó ìjọba .gov",
      "Àkókò: ẹ̀kọ́ nǹkan bí ìṣẹ́jú 5 tí ó bá àkókò ṣíṣe tàbí ṣíṣètò iṣẹ́ òwò mu",
      "Owó àti òfin ń yí padà, owó ìlú àti county sì yàtọ̀ síra; akẹ́kọ̀ọ́ ń wo ojú-òpó ìjọba kọ̀ọ̀kan kí wọ́n tó sanwó",
      "Kì í ṣe ìmọ̀ràn òfin tàbí owó-orí; ìpamọ́: nọ́mbà Social Security máa ń lọ sórí fọ́ọ̀mù IRS gidi nìkan"
    ],
    prerequisites: "Kò sí. \"Ìfihàn sí AI fún Iṣẹ́ Òwò Kékeré\" lè ṣèrànwọ́ tí akẹ́kọ̀ọ́ bá fẹ́ lo AI láti ṣètò ètò náà."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí o bá ní èrò iṣẹ́ òwò rẹ, àwọn olùní rẹ̀ àti àwọn ewu rẹ̀", action: "yan ìṣètò iṣẹ́ òwò kí o sì kọ iye owó dídá a sílẹ̀", standard: "pẹ̀lú ìdí kan fún yíyàn náà, àti owó tí o ti wò lórí ojú-òpó Secretary of State" },
    { id: "O2", condition: "Tí o bá ní orúkọ iṣẹ́ òwò rẹ àti ìṣètò rẹ̀", action: "wá bí o ṣe máa forúkọ iṣẹ́ òwò rẹ sílẹ̀", standard: "pẹ̀lú ọ́fíìsì tó tọ́, ojú-òpó owó rẹ̀ àti òfin ìkéde nínú ìwé ìròyìn tí o kọ sínú ètò rẹ" },
    { id: "O3", condition: "Tí o bá mọ irú iṣẹ́ òwò rẹ", action: "pinnu bóyá o nílò seller's permit kí o sì kọ bí o ṣe máa gba EIN lọ́fẹ̀ẹ́", standard: "kí o dárúkọ IRS àti CDTFA gẹ́gẹ́ bí ọ́fíìsì, láìlo iṣẹ́ EIN tí ń gba owó" },
    { id: "O4", condition: "Pẹ̀lú CalGold àti ojú-òpó ìlú rẹ", action: "kọ àwọn ìwé àṣẹ ìbílẹ̀ tí iṣẹ́ òwò rẹ nílò", standard: "pẹ̀lú ojú-òpó àjọ kọ̀ọ̀kan, àti owó rẹ̀ tàbí ibi tí o ti máa wò ó" },
    { id: "O5", condition: "Tí o bá ní ìṣètò rẹ àti ètò gbígba òṣìṣẹ́", action: "kọ àwọn owó ìpínlẹ̀ ọdọọdún àti ọjọ́ ìparí wọn", standard: "pẹ̀lú owó-orí $800, Statement of Information àti ìforúkọsílẹ̀ EDD níbi tí wọ́n bá kàn ọ́, tí o wò ọ̀kọ̀ọ̀kan lórí ojú-òpó ìjọba" },
    { id: "O6", condition: "Pẹ̀lú gbogbo ìgbésẹ̀ inú ẹ̀kọ́ yìí", action: "ṣe ètò ìbẹ̀rẹ̀ ojú-ewé kan pẹ̀lú ìgbésẹ̀ ní ìtẹ̀léra, ọ́fíìsì, iye owó àti ọjọ́ ìparí", standard: "kí gbogbo iye owó jẹ́ èyí tí o wò lórí ojú-òpó ìjọba, tàbí tí o kọ \"wò ó ní\" pẹ̀lú ibi tí o ti máa wò ó" }
  ],
  chapters: [
    {
      name: "Orí 1: Yíyan àti fífi iṣẹ́ òwò rẹ sílẹ̀",
      lessons: [
        {
          objectives: ["O1"],
          title: "Yíyan ìṣètò iṣẹ́ òwò",
          minutes: 6,
          goal: "Yan ìṣètò iṣẹ́ òwò tí ó bá iṣẹ́ òwò rẹ mu lónìí, kí o sì mọ iye owó dídá a sílẹ̀.",
          text: [
            "Ìṣètò iṣẹ́ òwò rẹ ni irú ọ̀nà tí òfin fi mọ iṣẹ́ òwò rẹ. Àwọn tí ó wọ́pọ̀ jù fún iṣẹ́ òwò kékeré ni sole proprietorship (iṣẹ́ òwò ẹnìkan), general partnership (àjọṣepọ̀), limited liability company (LLC) àti corporation (ilé-iṣẹ́ àjọ).",
            "Sole proprietorship jẹ́ ẹnìkan tí ń ṣe òwò. O kò fi ìwé ìdásílẹ̀ sílẹ̀ lọ́dọ̀ California Secretary of State (ọ́fíìsì ìjọba ìpínlẹ̀ tí ń forúkọ iṣẹ́ òwò sílẹ̀), nítorí náà kò sí owó ìdásílẹ̀ ìpínlẹ̀. Ṣùgbọ́n lójú òfin, ìwọ àti iṣẹ́ òwò náà jẹ́ ọ̀kan: tí iṣẹ́ òwò bá jẹ gbèsè tàbí tí wọ́n bá pè é lẹ́jọ́, àwọn ohun ìní tìrẹ lè wà nínú ewu. Partnership jẹ́ èrò kan náà pẹ̀lú olùní méjì tàbí jù bẹ́ẹ̀ lọ.",
            "LLC tàbí corporation jẹ́ ara òfin tí ó dá dúró. O dá a sílẹ̀ nípa fífi ìwé sílẹ̀ lọ́dọ̀ California Secretary of State. Secretary of State kọ pé owó LLC Articles of Organization (Fọ́ọ̀mù LLC-1) jẹ́ $70, owó Articles of Incorporation fún general stock corporation (Fọ́ọ̀mù ARTS-GS) sì jẹ́ $100. LLC tàbí corporation lè ṣèrànwọ́ láti dáàbò bo àwọn ohun ìní tìrẹ kúrò lọ́wọ́ gbèsè iṣẹ́ òwò, ṣùgbọ́n ó ń náni ní owó púpọ̀ sí i lọ́dọọdún (Ẹ̀kọ́ 6).",
            "Kò sí ìdáhùn kan ṣoṣo tó tọ́. Iṣẹ́ ìmọ́tótó ẹnìkan tí ó ṣẹ̀ṣẹ̀ ń bẹ̀rẹ̀ lè bẹ̀rẹ̀ gẹ́gẹ́ bí sole proprietor; ilé oúnjẹ tí ó ní ilé tí wọ́n yá, òṣìṣẹ́ àti ewu tó pọ̀ sí i sábà máa ń dá LLC tàbí corporation sílẹ̀. Jíròrò rẹ̀ pẹ̀lú olùmọ̀ràn SBDC ọ̀fẹ́, olùkọ́ SCORE tàbí ọ̀jọ̀gbọ́n owó-orí kí o tó pinnu."
          ],
          steps: ["Kọ ẹni tí ó ni iṣẹ́ òwò náà sílẹ̀ àti iye ewu tí ó ní (ilé tí o yá, òṣìṣẹ́, oníbàárà ní ibi iṣẹ́, gbèsè).", "Ka FTB Guide to Common Forms of Ownership.", "Fi owó ọdọọdún wé ara wọn, kì í ṣe owó ìbẹ̀rẹ̀ nìkan.", "Yan ìṣètò kan, kí o sì béèrè lọ́wọ́ olùmọ̀ràn tí kò bá dá ọ lójú."],
          words: [["Ìṣètò iṣẹ́ òwò (business structure)", "ọ̀nà tí òfin fi mọ iṣẹ́ òwò kan, bí sole proprietorship, LLC tàbí corporation."], ["Sole proprietorship", "iṣẹ́ òwò tí ẹnìkan ni, tí kò yà sọ́tọ̀ kúrò lára olùní rẹ̀ lójú òfin."], ["LLC", "limited liability company: iṣẹ́ òwò tí a forúkọ rẹ̀ sílẹ̀ lọ́dọ̀ ìpínlẹ̀, tí ó yà sọ́tọ̀ kúrò lára àwọn olùní rẹ̀."], ["Liability (ojúṣe òfin)", "kí òfin ka ọ́ sí ẹni tí ó ní láti san gbèsè tàbí ẹni tí ó ṣe ìpalára."]],
          slides: [
            { title: "Ìṣètò mẹ́rin tí ó wọ́pọ̀", bullets: ["Sole proprietorship (olùní kan)", "General partnership (olùní méjì tàbí jù bẹ́ẹ̀ lọ)", "Limited liability company (LLC)", "Corporation"] },
            { title: "Sole proprietor tàbí partnership", bullets: ["Kò sí ìwé ìdásílẹ̀ lọ́dọ̀ Secretary of State", "Lójú òfin, ìwọ àti iṣẹ́ òwò jẹ́ ọ̀kan", "Àwọn ohun ìní tìrẹ lè wà nínú ewu"] },
            { title: "LLC tàbí corporation", bullets: ["A dá a sílẹ̀ nípa fífi ìwé sílẹ̀ lọ́dọ̀ Secretary of State", "LLC-1: $70. ARTS-GS stock corporation: $100", "Ó yà sọ́tọ̀ kúrò lára rẹ, ṣùgbọ́n ó ń náni jù lọ́dọọdún"] },
            { title: "Yíyàn", bullets: ["Ronú nípa ewu: ilé tí o yá, òṣìṣẹ́, oníbàárà, gbèsè", "Fi owó ọdọọdún wéra, kì í ṣe owó ìbẹ̀rẹ̀ nìkan", "Béèrè lọ́wọ́ olùmọ̀ràn SBDC tàbí SCORE ọ̀fẹ́"] }
          ],
          sources: [SOS_LLC, SOS_CORP, FTB_FORMS],
          tryIt: "Bẹ̀rẹ̀ ètò ìbẹ̀rẹ̀ rẹ. Ní òkè, kọ èrò iṣẹ́ òwò rẹ, ẹni tí ó ni í, àti àwọn ewu tí ó tóbi jù. Lẹ́yìn náà kọ ìṣètò tí o máa yàn lónìí àti ìdí kan.",
          youCanNow: "dárúkọ àwọn ìṣètò iṣẹ́ òwò tí ó wọ́pọ̀, sọ iye tí dídá LLC tàbí corporation sílẹ̀ ń náni lọ́dọ̀ ìpínlẹ̀, kí o sì yan ọ̀kan fún iṣẹ́ òwò rẹ.",
          quickCheck: [
            { objective: "O1", q: "Ìṣètò wo ni kò nílò ìwé ìdásílẹ̀ lọ́dọ̀ California Secretary of State?", options: ["LLC", "Corporation", "Sole proprietorship", "Nonprofit corporation (àjọ tí kì í ṣe fún èrè)"], answer: 2, why: "Sole proprietorship kì í fi ìwé ìdásílẹ̀ sílẹ̀ lọ́dọ̀ Secretary of State." },
            { objective: "O1", q: "O fẹ́ dá LLC sílẹ̀, o sì rí owó kan lórí ayélujára. Kí ni o máa ṣe kí o tó sanwó?", options: ["Wo owó tí ó wà báyìí lórí ojú-òpó ìjọba Secretary of State", "San án sí ojú-òpó àkọ́kọ́ tí ó yọ", "Béèrè lọ́wọ́ ọ̀rẹ́ iye tí ó san ní ọdún púpọ̀ sẹ́yìn", "Lo ohunkóhun tí AI bá sọ"], answer: 0, why: "Owó ń yí padà, nítorí náà o máa wo ojú-òpó ìjọba kí o tó sanwó." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Sísọ iṣẹ́ òwò rẹ lórúkọ àti fífi orúkọ náà sílẹ̀",
          minutes: 5,
          goal: "Forúkọ iṣẹ́ òwò rẹ sílẹ̀ ní ọ̀nà tó tọ́ fún ìṣètò rẹ.",
          text: [
            "LLC tàbí corporation máa ń forúkọ rẹ̀ sílẹ̀ nígbà tí ó bá fi ìwé ìdásílẹ̀ rẹ̀ sílẹ̀ lọ́dọ̀ Secretary of State. O lè ṣe é lórí ayélujára ní bizfile Online (bizfileonline.sos.ca.gov). Kọ́kọ́ wá orúkọ náà níbẹ̀ láti rí bóyá iṣẹ́ òwò míì ti ń lò ó.",
            "Tí o bá ń ṣe òwò lábẹ́ orúkọ tí kì í ṣe orúkọ òfin rẹ, o máa fi Fictitious Business Name (FBN) statement sílẹ̀, tí a tún ń pè ní DBA (\"doing business as\", ìyẹn \"ń ṣe òwò gẹ́gẹ́ bí\"), lọ́dọ̀ county clerk ní county tí iṣẹ́ òwò rẹ wà. Fún àpẹẹrẹ, tí Maria Lopez bá ń ṣe \"Sunrise Tamales\", ó máa fi FBN sílẹ̀. LLC tí ó ń lo orúkọ tí ó yàtọ̀ sí èyí tí ó forúkọ sílẹ̀ náà máa fi FBN sílẹ̀.",
            "County kọ̀ọ̀kan ló ń pinnu owó FBN, nítorí náà wò ó lórí ojú-òpó county clerk rẹ. Àwọn county tún ní kí o kéde FBN nínú ìwé ìròyìn ìbílẹ̀ lẹ́ẹ̀kan lọ́sẹ̀ fún ọ̀sẹ̀ mẹ́rin, tí ó sábà máa ń bẹ̀rẹ̀ láàárín ọjọ́ 30 lẹ́yìn tí o fi í sílẹ̀, lẹ́yìn náà kí o fi ẹ̀rí ìkéde sílẹ̀. Wo òfin gangan ti county rẹ."
          ],
          steps: ["Wá orúkọ tí o ní lọ́kàn lórí bizfile Online.", "LLC tàbí corporation: fi ìwé ìdásílẹ̀ sílẹ̀ lórí bizfile Online.", "Tí o bá ń lo orúkọ tí kì í ṣe orúkọ òfin rẹ: fi FBN sílẹ̀ lọ́dọ̀ county clerk rẹ.", "Kéde FBN nínú ìwé ìròyìn bí county rẹ ṣe ní kí o ṣe, kí o sì fi ẹ̀rí rẹ̀ sílẹ̀.", "Kọ ìgbésẹ̀ kọ̀ọ̀kan, ọ́fíìsì rẹ̀ àti owó rẹ̀ sínú ètò rẹ."],
          words: [["Fictitious Business Name (FBN)", "orúkọ iṣẹ́ òwò tí kì í ṣe orúkọ òfin olùní rẹ̀; a tún ń pè é ní DBA."], ["DBA", "\"doing business as\": orúkọ tí iṣẹ́ òwò ń lò níwájú gbogbo ènìyàn."], ["County clerk", "ọ́fíìsì county tí ó ń gba FBN statement àti àwọn àkọsílẹ̀ gbogbogbò míì."]],
          slides: [
            { title: "LLC tàbí corporation", bullets: ["A forúkọ sílẹ̀ nígbà tí o bá dá a sílẹ̀", "Fi sílẹ̀ lórí ayélujára ní bizfileonline.sos.ca.gov", "Kọ́kọ́ wá orúkọ náà"] },
            { title: "Fictitious Business Name (DBA)", bullets: ["Fún orúkọ tí kì í ṣe orúkọ òfin rẹ", "A fi í sílẹ̀ lọ́dọ̀ county clerk rẹ", "Àpẹẹrẹ: Maria Lopez ń ṣe òwò gẹ́gẹ́ bí Sunrise Tamales"] },
            { title: "Owó FBN àti ìkéde", bullets: ["County kọ̀ọ̀kan ló ń pinnu owó: wo ojú-òpó rẹ̀", "Kéde nínú ìwé ìròyìn ìbílẹ̀ lẹ́ẹ̀kan lọ́sẹ̀ fún ọ̀sẹ̀ 4", "Lẹ́yìn náà fi ẹ̀rí sílẹ̀; wo ọjọ́ ìparí county rẹ"] }
          ],
          sources: [BIZFILE, LA_FBN, CALOSBA],
          tryIt: "Wá orúkọ iṣẹ́ òwò rẹ lórí bizfile Online. Lẹ́yìn náà wá ojú-ewé FBN county clerk rẹ, kí o sì kọ owó ìforúkọsílẹ̀ àti òfin ìkéde sínú ètò rẹ.",
          youCanNow: "wò bóyá orúkọ iṣẹ́ òwò kan ṣì wà láìlò, kí o sì sọ ìgbà tí o nílò Fictitious Business Name àti ibi tí o ti máa fi í sílẹ̀.",
          quickCheck: [
            { objective: "O2", q: "Kí ni DBA?", options: ["Fọ́ọ̀mù owó-orí", "Ìwé àṣẹ iṣẹ́ òwò", "Irú LLC kan", "Orúkọ tí iṣẹ́ òwò ń lò níwájú gbogbo ènìyàn, tí kì í bá ṣe orúkọ òfin olùní"], answer: 3, why: "DBA ni orúkọ gbangba iṣẹ́ òwò tí ó yàtọ̀ sí orúkọ òfin olùní rẹ̀." },
            { objective: "O2", q: "O ti fi Fictitious Business Name sílẹ̀ lọ́dọ̀ county rẹ. Kí ni o ṣeé ṣe jù kí o ṣe lẹ́yìn náà?", options: ["Kò sí nǹkan míì", "Kéde rẹ̀ nínú ìwé ìròyìn ìbílẹ̀ bí county rẹ ṣe ní kí o ṣe", "Tún fi í sílẹ̀ lọ́dọ̀ IRS", "Dúró fún ọdún márùn-ún"], answer: 1, why: "Ọ̀pọ̀ county ní California ní kí o kéde FBN nínú ìwé ìròyìn ìbílẹ̀." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gbígba EIN ọ̀fẹ́ àti seller's permit",
          minutes: 5,
          goal: "Béèrè fún EIN lọ́dọ̀ IRS, kí o sì pinnu bóyá o nílò seller's permit ti California.",
          text: [
            "EIN (Employer Identification Number) ni nọ́mbà owó-orí ìjọba àpapọ̀ fún iṣẹ́ òwò rẹ. LLC, corporation, partnership àti iṣẹ́ òwò èyíkéyìí tí ó ní òṣìṣẹ́ nílò rẹ̀; sole proprietor tí kò ní òṣìṣẹ́ lè lo nọ́mbà tirẹ̀, ṣùgbọ́n ó sábà máa ń gba EIN láti ya iṣẹ́ òwò sọ́tọ̀ kúrò lára ọ̀rọ̀ ara rẹ̀. IRS (ọ́fíìsì owó-orí ìjọba àpapọ̀ US) sọ pé o kò ní láti san owó kankan fún EIN láéláé. Béèrè fún un lórí irs.gov, kí o sì ṣọ́ra fún àwọn ojú-òpó tí ń gba owó fún un.",
            "Seller's permit (ìwé àṣẹ olùtajà) ń wá láti California Department of Tax and Fee Administration (CDTFA). Tí o bá ń tà tàbí yá ọjà tí wọ́n sábà máa ń gba owó-orí lé lórí ní California, o nílò rẹ̀, o sì gbọdọ̀ gbé e kọ́ sí ibi iṣẹ́ òwò rẹ. Ṣọ́ọ̀bù, ṣọ́ọ̀bù aṣọ, ọkọ̀ oúnjẹ àti ilé oúnjẹ sábà máa ń nílò rẹ̀. Iṣẹ́ ìsìn lásán, bí ìmọ́tótó ilé tàbí kíkọ́ ọmọ lẹ́kọ̀ọ́, sábà kì í nílò rẹ̀, ṣùgbọ́n ṣàyẹ̀wò.",
            "CDTFA sọ pé kò sí owó fún seller's permit, ṣùgbọ́n ó lè béèrè owó ìdúró (security deposit), yóò sì pinnu iye rẹ̀ nígbà tí o bá béèrè. Tí o bá ń tajà ní ibì kan fún ọjọ́ 90 tàbí kí ó dín, bí ìsọ̀ àsìkò, o lè nílò temporary seller's permit (ìwé àṣẹ olùtajà fún ìgbà díẹ̀) dípò rẹ̀. Forúkọ sílẹ̀ lórí ayélujára láti ọ̀dọ̀ CDTFA."
          ],
          steps: ["Lọ sí irs.gov kí o sì wá \"apply for an EIN\".", "Béèrè lórí ayélujára ní ìjókòó kan, kí o sì fi lẹ́tà ìfìdímúlẹ̀ pamọ́.", "Pinnu bóyá o ń ta ọjà tí ó ní owó-orí.", "Tí ó bá rí bẹ́ẹ̀, forúkọ sílẹ̀ fún seller's permit lórí cdtfa.ca.gov.", "Gbé ìwé àṣẹ náà kọ́ sí ibi tí o ti ń ṣòwò."],
          words: [["EIN", "Employer Identification Number: nọ́mbà owó-orí ìjọba àpapọ̀ ọ̀fẹ́ fún iṣẹ́ òwò, láti ọ̀dọ̀ IRS."], ["Seller's permit", "ìwé àṣẹ California, láti ọ̀dọ̀ CDTFA, láti ta ọjà tí ó ní owó-orí kí o sì gba sales tax (owó-orí ọjà)."], ["CDTFA", "California Department of Tax and Fee Administration."], ["Security deposit (owó ìdúró)", "owó tí CDTFA lè dì mú bí o kò bá san sales tax lọ́jọ́ iwájú."]],
          slides: [
            { title: "EIN: nọ́mbà owó-orí iṣẹ́ òwò rẹ", bullets: ["Láti ọ̀dọ̀ IRS, lórí irs.gov", "Ọ̀fẹ́ nígbà gbogbo: IRS kì í gba owó fún EIN", "Ṣọ́ra fún àwọn ojú-òpó tí ń gba owó"] },
            { title: "Seller's permit: ta ló nílò rẹ̀", bullets: ["Títà tàbí yíyá ọjà tí ó ní owó-orí ní California", "Ṣọ́ọ̀bù, ọkọ̀ oúnjẹ, ilé oúnjẹ sábà máa ń nílò rẹ̀", "Iṣẹ́ ìsìn lásán sábà kì í nílò rẹ̀: ṣàyẹ̀wò"] },
            { title: "Seller's permit: iye owó", bullets: ["Kò sí owó láti béèrè (CDTFA)", "CDTFA lè béèrè owó ìdúró (security deposit)", "Ọjọ́ 90 tàbí kí ó dín? Béèrè nípa ìwé àṣẹ fún ìgbà díẹ̀"] }
          ],
          sources: [IRS_EIN, CDTFA, CDTFA_FAQ],
          tryIt: "Fi ìlà méjì kún ètò rẹ: EIN (IRS, ọ̀fẹ́, béèrè lórí irs.gov) àti seller's permit (CDTFA, kò sí owó, owó ìdúró ṣeé ṣe) tàbí àkíyèsí tí ó sọ ìdí tí o kò fi nílò rẹ̀. Má ṣe tẹ nọ́mbà Social Security rẹ síbìkan àyàfi sórí fọ́ọ̀mù IRS gidi.",
          youCanNow: "béèrè fún EIN ọ̀fẹ́ lórí ojú-òpó IRS gidi, kí o sì pinnu bóyá iṣẹ́ òwò rẹ nílò seller's permit.",
          quickCheck: [
            { objective: "O3", q: "Àjọ wo ló ń fúnni ní seller's permit ní California?", options: ["IRS", "County clerk rẹ", "CDTFA", "Secretary of State"], answer: 2, why: "California Department of Tax and Fee Administration ló ń fúnni ní seller's permit." },
            { objective: "O3", q: "O fẹ́ ta ọjà ní ọjà ọdún (holiday market) nìkan fún ọ̀sẹ̀ díẹ̀. Kí ni o máa ṣe?", options: ["Béèrè lọ́wọ́ CDTFA nípa temporary seller's permit", "Fi ìwé àṣẹ sílẹ̀ nítorí pé àkókò náà kúrú", "Gba EIN dípò rẹ̀", "San owó fún ojú-òpó aládàáni fún ìwé àṣẹ"], answer: 0, why: "Àwọn tí ń tajà fún ìgbà kúkúrú lè béèrè lọ́wọ́ CDTFA nípa temporary seller's permit." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Yíyan àti fífi iṣẹ́ òwò rẹ sílẹ̀",
        questions: [
          { objective: "O1", q: "Kí ni Secretary of State kọ gẹ́gẹ́ bí owó LLC Articles of Organization (Fọ́ọ̀mù LLC-1)?", options: ["$800", "$70", "$20", "Ọ̀fẹ́"], answer: 1, why: "Ojú-ewé fọ́ọ̀mù LLC ti Secretary of State kọ Fọ́ọ̀mù LLC-1 sí $70." },
          { objective: "O1", q: "Kevin ń ṣe iṣẹ́ títọ́jú pápá oko ilé gẹ́gẹ́ bí sole proprietor. Èwo ni òótọ́?", options: ["Ó gbọdọ̀ san $100 fún Secretary of State láti dá a sílẹ̀", "Kò lè lo orúkọ iṣẹ́ òwò", "Ó gbọdọ̀ kọ́kọ́ dá corporation sílẹ̀", "Kò fi ìwé ìdásílẹ̀ sílẹ̀ lọ́dọ̀ Secretary of State"], answer: 3, why: "Sole proprietor kì í fi ìwé ìdásílẹ̀ sílẹ̀ lọ́dọ̀ Secretary of State." },
          { objective: "O2", q: "Maria Lopez ń ta oúnjẹ gẹ́gẹ́ bí \"Sunrise Tamales\". Níbo ni ó máa fi Fictitious Business Name rẹ̀ sílẹ̀?", options: ["County clerk rẹ̀", "CDTFA", "IRS", "Franchise Tax Board"], answer: 0, why: "A máa ń fi FBN statement sílẹ̀ lọ́dọ̀ county clerk níbi tí iṣẹ́ òwò wà." },
          { objective: "O3", q: "Ojú-òpó kan béèrè $150 láti bá ọ gba EIN. Kí ni o máa ṣe?", options: ["San án; ó yára jù", "Lo EIN ọ̀rẹ́ rẹ", "Béèrè lọ́fẹ̀ẹ́ lórí irs.gov dípò rẹ̀", "Má ṣe gba EIN láéláé"], answer: 2, why: "IRS sọ pé o kò ní láti san owó kankan fún EIN láéláé." },
          { objective: "O3", q: "Iṣẹ́ òwò wo ló ṣeé ṣe jù kí ó nílò seller's permit ti California?", options: ["Iṣẹ́ ìmọ́tótó ilé", "Iṣẹ́ kíkọ́ ọmọ lẹ́kọ̀ọ́", "Ṣọ́ọ̀bù tí ń ta aṣọ", "Iṣẹ́ ìṣirò owó (bookkeeping)"], answer: 2, why: "Títa ọjà tí ó ní owó-orí, bí aṣọ, nílò seller's permit." }
        ]
      }
    },
    {
      name: "Orí 2: Ìwé àṣẹ ìbílẹ̀, owó ọdọọdún àti ètò rẹ",
      lessons: [
        {
          objectives: ["O4","O6"],
          title: "Wíwá àwọn ìwé àṣẹ ìlú àti county rẹ",
          minutes: 5,
          goal: "Lo CalGold àti ojú-òpó ìlú rẹ láti kọ àwọn ìwé àṣẹ ìbílẹ̀ tí iṣẹ́ òwò rẹ nílò.",
          text: [
            "Ọ̀pọ̀ ìlú ló ń béèrè business license (ìwé àṣẹ iṣẹ́ òwò) tàbí business tax certificate, kódà fún iṣẹ́ òwò inú ilé. Ìlú kọ̀ọ̀kan (tàbí county, tí o bá wà lẹ́yìn ìlú) ló ń pinnu owó rẹ̀, ó sì sábà máa ń sinmi lórí irú iṣẹ́ òwò rẹ tàbí owó tí ó ń wọlé fún ọ. Wò ó lórí ojú-òpó ìlú rẹ tàbí pe city hall (ọ́fíìsì ìjọba ìlú).",
            "Àwọn iṣẹ́ òwò kan nílò ìwé àṣẹ pàtàkì. Ilé oúnjẹ tàbí ọkọ̀ oúnjẹ nílò health permit (ìwé àṣẹ ìlera) láti ọ̀dọ̀ ẹ̀ka environmental health ti county. Ìdáná búrẹ́dì nílé lè nílò ìforúkọsílẹ̀ tàbí ìwé àṣẹ cottage food láti ọ̀dọ̀ county. Ṣọ́ọ̀bù irun nílò ìwé àṣẹ state board fún àwọn òṣìṣẹ́. Ọ̀pọ̀ ibi tún nílò àyẹ̀wò zoning, àyẹ̀wò iná tàbí ìwé àṣẹ àmì (sign).",
            "CalGold (calgold.ca.gov) jẹ́ irinṣẹ́ ìpínlẹ̀ ọ̀fẹ́ tí ó ń ràn ọ́ lọ́wọ́ láti rí ìsọfúnni nípa ìwé àṣẹ. O yan ìlú tàbí county rẹ àti irú iṣẹ́ òwò rẹ, ó sì máa kọ àwọn àjọ àti bí o ṣe lè kàn sí wọn. CalGold kì í fúnni ní ìwé àṣẹ, ó sì sọ pé wọ́n ṣì ń kọ́ ọ, nítorí náà pe àjọ náà láti fìdí rẹ̀ múlẹ̀."
          ],
          steps: ["Ṣí calgold.ca.gov.", "Yan ìlú tàbí county rẹ.", "Yan irú iṣẹ́ òwò rẹ (tàbí \"General Business Information\").", "Kọ ìwé àṣẹ kọ̀ọ̀kan àti àjọ tí ó ń fúnni ní i sílẹ̀.", "Lọ sí àjọ kọ̀ọ̀kan tàbí pè wọ́n láti fìdí owó àti bí o ṣe máa béèrè múlẹ̀."],
          words: [["Business license", "àṣẹ ìlú tàbí county láti ṣe iṣẹ́ òwò níbẹ̀; nígbà míì a máa ń pè é ní business tax certificate."], ["Zoning", "òfin ìbílẹ̀ nípa irú iṣẹ́ òwò tí ó lè wà ní àdírẹ́sì kan."], ["CalGold", "ojú-òpó California ọ̀fẹ́ tí ó ń kọ ìsọfúnni ìwé àṣẹ gẹ́gẹ́ bí ibi àti irú iṣẹ́ òwò."]],
          slides: [
            { title: "Ìwé àṣẹ iṣẹ́ òwò ìlú", bullets: ["Ọ̀pọ̀ ìlú ló ń béèrè rẹ̀, kódà nílé", "Ìlú tàbí county kọ̀ọ̀kan ló ń pinnu owó", "Wo ojú-òpó ìlú rẹ tàbí pe city hall"] },
            { title: "Ìwé àṣẹ pàtàkì", bullets: ["Oúnjẹ: ìwé àṣẹ environmental health ti county", "Ìdáná búrẹ́dì nílé: òfin cottage food ti county", "Zoning, àyẹ̀wò iná àti ìwé àṣẹ àmì (sign)"] },
            { title: "Lo CalGold", bullets: ["calgold.ca.gov: yan ìlú àti irú iṣẹ́ òwò", "Ó ń kọ àwọn àjọ; kì í fúnni ní ìwé àṣẹ", "Pe àjọ kọ̀ọ̀kan láti fìdí owó múlẹ̀"] }
          ],
          sources: [CALGOLD, CALOSBA],
          tryIt: "Lo CalGold fún ìlú rẹ àti irú iṣẹ́ òwò rẹ. Fi gbogbo ìwé àṣẹ tí ó kọ kún ètò rẹ, pẹ̀lú ojú-òpó àjọ náà. Fún ọ̀kọ̀ọ̀kan, kọ owó rẹ̀ tàbí \"wò ó ní\" pẹ̀lú ibi tí o ti máa wò ó.",
          youCanNow: "wá àwọn ìwé àṣẹ ìlú àti county tí iṣẹ́ òwò rẹ nílò àti ọ́fíìsì tí ó ń fúnni ní ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O4", q: "Kí ni CalGold ń ṣe?", options: ["Ó ń fúnni ní gbogbo ìwé àṣẹ tí o nílò", "Ó ń gba owó-orí rẹ", "Ó ń dá LLC rẹ sílẹ̀", "Ó ń kọ ìsọfúnni ìwé àṣẹ àti àwọn àjọ fún ìlú rẹ àti irú iṣẹ́ òwò rẹ"], answer: 3, why: "CalGold ń kọ àwọn ìwé àṣẹ àti àjọ, ṣùgbọ́n kì í fúnni ní wọn." },
            { objective: "O4", q: "CalGold kọ ìwé àṣẹ kan fún ọkọ̀ oúnjẹ rẹ. Kí ni o máa ṣe lẹ́yìn náà?", options: ["Rò pé o ti ní i báyìí", "Kàn sí àjọ tí ó kọ láti fìdí owó múlẹ̀ kí o sì béèrè", "Ní kí AI béèrè fún ọ", "Dúró títí olùyẹ̀wò yóò fi dé"], answer: 1, why: "CalGold kì í fúnni ní ìwé àṣẹ, nítorí náà o máa kàn sí àjọ kọ̀ọ̀kan." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Owó ọdọọdún: owó-orí $800, ìwé àti owó òṣìṣẹ́",
          minutes: 6,
          goal: "Kọ àwọn owó ìpínlẹ̀ ọdọọdún àti ọjọ́ ìparí tí ó ń bá ìṣètò rẹ wá.",
          text: [
            "LLC: Franchise Tax Board (FTB) sọ pé gbogbo LLC tí ó ń ṣòwò tàbí tí a dá sílẹ̀ ní California gbọdọ̀ san owó-orí ọdọọdún $800, lọ́dọọdún, títí a ó fi pa LLC náà rẹ́ (cancel), kódà tí kò bá ṣe òwò kankan. Ìsanwó àkọ́kọ́ gbọdọ̀ wọlé ní ọjọ́ 15 oṣù kẹrin lẹ́yìn tí o forúkọ sílẹ̀ lọ́dọ̀ Secretary of State. LLC tí ó ń pa owó tí ó ju $250,000 lọ tún ń san LLC fee. Ìdásílẹ̀ ọdún àkọ́kọ́ tí ó wà láti 2021 sí 2023 kò sí mọ́.",
            "Corporation: FTB sọ pé corporation ń san minimum franchise tax (owó-orí tí ó kéré jù) $800, ṣùgbọ́n corporation tuntun kò ní láti san iye tí ó kéré jù yìí ní ọdún owó-orí àkọ́kọ́ wọn. Wọ́n ṣì lè jẹ owó-orí lórí owó tí ó wọlé, wọ́n sì gbọdọ̀ san estimated payments (ìsanwó ìfojúdíwọ̀n).",
            "Statement of Information: LLC àti corporation ń fi í sílẹ̀ lọ́dọ̀ Secretary of State. Statement of Information ti LLC (LLC-12) jẹ́ $20, ó gbọdọ̀ wọlé láàárín ọjọ́ 90 lẹ́yìn ìdásílẹ̀, àti ní ọdún méjì-méjì lẹ́yìn náà. Ti stock corporation (SI-550) jẹ́ $25. Pípàdánù rẹ̀ lè mú owó ìtanràn wá.",
            "Gbígba òṣìṣẹ́: forúkọ sílẹ̀ lọ́dọ̀ Employment Development Department (EDD) láàárín ọjọ́ 15 lẹ́yìn tí o bá san owó oṣù tí ó ju $100 lọ ní ìdámẹ́rin ọdún kan (oṣù mẹ́ta). Òfin owó òṣìṣẹ́ (payroll) pọ̀, nítorí náà ọ̀pọ̀ olùní ń lo iṣẹ́ payroll tàbí ọ̀jọ̀gbọ́n owó-orí."
          ],
          words: [["Franchise Tax Board (FTB)", "àjọ owó-orí ìpínlẹ̀ California fún owó-orí owó-wíwọlé àti franchise tax."], ["Annual tax (owó-orí ọdọọdún)", "owó-orí $800 tí gbogbo LLC ní California ń san lọ́dọọdún."], ["Statement of Information", "fọ́ọ̀mù kúkúrú tí LLC àti corporation ń fi sílẹ̀ lọ́dọ̀ Secretary of State láti jẹ́ kí ìsọfúnni wọn wà ní ìbámu pẹ̀lú àkókò."], ["EDD", "Employment Development Department: ọ́fíìsì ìpínlẹ̀ fún owó-orí owó oṣù àti àwọn agbanisíṣẹ́."]],
          slides: [
            { title: "LLC: $800 lọ́dọọdún", bullets: ["Ó gbọdọ̀ wọlé ní ọjọ́ 15 oṣù kẹrin lẹ́yìn ìdásílẹ̀", "O jẹ ẹ́ kódà láìsí títà, títí o fi pa á rẹ́", "Owó tí ó ju $250,000 lọ: LLC fee pẹ̀lú"] },
            { title: "Corporation: $800 tí ó kéré jù", bullets: ["Minimum franchise tax: $800", "Kò pọn dandan ní ọdún owó-orí àkọ́kọ́", "Estimated payments ṣì lè pọn dandan"] },
            { title: "Statement of Information", bullets: ["LLC (LLC-12): $20, láàárín ọjọ́ 90, lẹ́yìn náà ní ọdún 2-2", "Stock corporation (SI-550): $25", "Pípàdánù rẹ̀ lè mú owó ìtanràn wá"] },
            { title: "Gbígba òṣìṣẹ́", bullets: ["Forúkọ sílẹ̀ lọ́dọ̀ EDD láàárín ọjọ́ 15", "Lẹ́yìn tí o bá san owó oṣù tí ó ju $100 lọ ní ìdámẹ́rin ọdún", "Ronú nípa iṣẹ́ payroll tàbí ọ̀jọ̀gbọ́n owó-orí"] }
          ],
          sources: [FTB_LLC, FTB_CORP, SOS_LLC, SOS_CORP, EDD],
          tryIt: "Fi àwọn ìlà ọdọọdún tí ó bá ìṣètò rẹ mu kún ètò rẹ: owó-orí $800 àti ọjọ́ ìparí rẹ̀, Statement of Information àti owó rẹ̀, àti ìforúkọsílẹ̀ EDD tí o bá máa gba òṣìṣẹ́. Ṣí ojú-òpó ìjọba kọ̀ọ̀kan kí o sì wo iye náà kí o tó kọ ọ́.",
          youCanNow: "kọ àwọn owó ìpínlẹ̀ ọdọọdún àti ọjọ́ ìparí fún ìṣètò rẹ, kí o sì sọ ọ́fíìsì tí ó ń gba ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O5", q: "Ìgbà mélòó ni LLC ń fi Statement of Information sílẹ̀ lẹ́yìn èyí àkọ́kọ́?", options: ["Lóṣooṣù", "Ní ọdún márùn-ún-márùn-ún", "Lẹ́ẹ̀kan ṣoṣo", "Ní ọdún méjì-méjì"], answer: 3, why: "Lẹ́yìn èyí àkọ́kọ́, LLC ń fi Statement of Information sílẹ̀ ní ọdún méjì-méjì." },
            { objective: "O5", q: "LLC rẹ kò pa owó kankan lọ́dún yìí. Kí ni o máa múra sílẹ̀ fún?", options: ["Kò sí nǹkan, nítorí kò sí òwò", "Fagi lé ètò owó-orí", "A ṣì jẹ owó-orí ọdọọdún $800 títí a ó fi pa LLC rẹ́", "Owó-orí ìjọba àpapọ̀ nìkan"], answer: 2, why: "LLC jẹ owó-orí ọdọọdún $800 títí a ó fi pa á rẹ́, kódà láìsí òwò." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Kíkó gbogbo rẹ̀ papọ̀: ètò ìbẹ̀rẹ̀ àti ìṣúná rẹ",
          minutes: 5,
          goal: "Ṣe ètò ìbẹ̀rẹ̀ ojú-ewé kan pẹ̀lú ìgbésẹ̀ ní ìtẹ̀léra, ọ́fíìsì, iye owó àti ọjọ́ ìparí.",
          text: [
            "Báyìí, kó gbogbo rẹ̀ sí ojú-ewé kan. Ìtẹ̀léra ṣe pàtàkì: yan ìṣètò, dá LLC tàbí corporation sílẹ̀ (tí ó bá wà), gba EIN, fi FBN sílẹ̀ (tí ó bá pọn dandan), gba seller's permit (tí ó bá pọn dandan), lẹ́yìn náà gba ìwé àṣẹ ìlú àti county. Ọ̀pọ̀ ìwé àṣẹ ń béèrè EIN rẹ tàbí entity number (nọ́mbà ìforúkọsílẹ̀ iṣẹ́ òwò) rẹ, nítorí náà kọ́kọ́ ṣe àwọn yẹn.",
            "Ṣírò àwọn owó tí o mọ̀ papọ̀, kí o sì sàmì sí àwọn tí o ṣì ní láti wò. Àpẹẹrẹ fún ọkọ̀ oúnjẹ LLC: LLC-1 $70, Statement of Information $20, EIN ọ̀fẹ́, seller's permit kò sí owó (owó ìdúró ṣeé ṣe), owó-orí ọdọọdún $800, pẹ̀lú owó ìwé àṣẹ ìlera county, ìwé àṣẹ ìlú àti FBN tí o máa wò ní àdúgbò rẹ.",
            "Olùrànlọ́wọ́ AI lè ràn ọ́ lọ́wọ́ láti ṣètò tábìlì kí o sì ṣe àkọsílẹ̀ àyẹ̀wò, ṣùgbọ́n ó lè ṣàṣìṣe nípa owó àti ọjọ́. Máa lo ojú-òpó ìjọba fún iye náà nígbà gbogbo. Má ṣe tẹ nọ́mbà Social Security rẹ, ìsọfúnni báńkì tàbí ọ̀rọ̀ aṣínà sínú irinṣẹ́ AI. Nígbà tí o bá parí, fi ètò náà han olùmọ̀ràn SBDC ọ̀fẹ́ tàbí ọ̀jọ̀gbọ́n owó-orí."
          ],
          steps: ["Kọ àwọn ìgbésẹ̀ ní ìtẹ̀léra.", "Fi ọ́fíìsì àti ojú-òpó ìjọba fún ọ̀kọ̀ọ̀kan kún un.", "Fi iye owó láti ojú-òpó ìjọba kún un, tàbí \"wò ó ní ...\".", "Fi ọjọ́ ìparí fún nǹkan ọdọọdún kọ̀ọ̀kan kún un.", "Ṣírò àpapọ̀ owó tí o mọ̀, kí o sì fi ètò náà han olùmọ̀ràn."],
          words: [["Owó ìbẹ̀rẹ̀ (startup costs)", "owó tí o ń ná lẹ́ẹ̀kan láti ṣí iṣẹ́ òwò."], ["Owó àtúnsan (recurring costs)", "owó tí o ń san lẹ́ẹ̀kan sí i lọ́dọọdún, bí owó-orí $800."]],
          slides: [
            { title: "Ìtẹ̀léra", bullets: ["1. Ìṣètò  2. Dá LLC tàbí corporation sílẹ̀", "3. EIN  4. FBN tí ó bá pọn dandan  5. Seller's permit", "6. Ìwé àṣẹ ìlú àti county"] },
            { title: "Àpẹẹrẹ: ọkọ̀ oúnjẹ LLC", bullets: ["LLC-1 $70; Statement of Information $20", "EIN ọ̀fẹ́; seller's permit kò sí owó", "Owó-orí ọdọọdún $800; owó ìbílẹ̀: wò wọ́n"] },
            { title: "Lílo AI láìléwu níbí", bullets: ["AI lè ṣètò tábìlì àti àkọsílẹ̀ àyẹ̀wò rẹ", "Gba gbogbo owó àti ọjọ́ láti ojú-òpó ìjọba", "Má ṣe tẹ SSN, ìsọfúnni báńkì tàbí ọ̀rọ̀ aṣínà láéláé"] }
          ],
          sources: [SOS_LLC, FTB_LLC, CDTFA, IRS_EIN, CALGOLD],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò ojú-ewé kan rẹ pẹ̀lú òpó márùn-ún: Ìgbésẹ̀, Ọ́fíìsì (ojú-òpó), Iye owó, Ọjọ́ ìparí, Ó ti parí. Kún gbogbo ìlà láti inú ẹ̀kọ́ yìí, ṣírò àpapọ̀ owó tí o mọ̀, kí o sì sàmì sí gbogbo owó ìbílẹ̀ tí o ṣì ní láti wò.",
          youCanNow: "ṣe ètò ìbẹ̀rẹ̀ pípé fún bíbẹ̀rẹ̀ iṣẹ́ òwò ní California, kí o sì lò ó.",
          quickCheck: [
            { objective: "O6", q: "Ní ìtẹ̀léra wo ni o sábà máa ṣe àwọn ìgbésẹ̀ wọ̀nyí?", options: ["Yan ìṣètò, dá a sílẹ̀, gba EIN, lẹ́yìn náà ìwé àṣẹ ìbílẹ̀", "Ìwé àṣẹ ìbílẹ̀, lẹ́yìn náà yan ìṣètò", "Gba EIN kí o tó yan orúkọ tàbí ìṣètò, lẹ́yìn náà dá a sílẹ̀ níkẹyìn", "Ìtẹ̀léra èyíkéyìí rí bákan náà"], answer: 0, why: "Ìgbésẹ̀ kọ̀ọ̀kan sinmi lórí èyí tí ó ṣáájú rẹ̀, bẹ̀rẹ̀ láti ìṣètò." },
            { objective: "O6", q: "O kò tíì mọ owó business license ti ìlú rẹ. Kí ni o máa kọ sínú ètò rẹ?", options: ["Ìfojúdíwọ̀n", "Òdo", "\"Wò ó ní\" pẹ̀lú ojú-òpó ìjọba ìlú náà", "Owó ìlú míì"], answer: 2, why: "Owó ìbílẹ̀ yàtọ̀ síra, nítorí náà o máa kọ ibi tí o ti máa wò ó dípò kí o fojú díwọ̀n." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìwé àṣẹ ìbílẹ̀, owó ọdọọdún àti ètò rẹ",
        questions: [
          { objective: "O4", q: "Kí ni CalGold ń ṣe?", options: ["Ó ń kọ ìsọfúnni ìwé àṣẹ àti àwọn àjọ fún ìlú rẹ àti irú iṣẹ́ òwò rẹ", "Ó ń fúnni ní business license rẹ", "Ó ń gba owó-orí $800", "Ó ń fún ọ ní EIN"], answer: 0, why: "CalGold ń wá ìsọfúnni ìwé àṣẹ; kì í fúnni ní ìwé àṣẹ." },
          { objective: "O4", q: "Ta ló ń pinnu owó business license ti ìlú?", options: ["IRS", "Secretary of State", "CDTFA", "Ìlú tàbí county kọ̀ọ̀kan"], answer: 3, why: "Ìlú tàbí county kọ̀ọ̀kan ló ń pinnu owó ìwé àṣẹ ìbílẹ̀." },
          { objective: "O5", q: "LLC kan kò ṣe òwò kankan lọ́dún yìí. Ṣé ó jẹ owó-orí ọdọọdún $800?", options: ["Rárá, àyàfi tí ó bá pa owó", "Bẹ́ẹ̀ ni, títí a ó fi pa LLC náà rẹ́", "Ní ọdún àkọ́kọ́ nìkan", "Tí ó bá ní òṣìṣẹ́ nìkan"], answer: 1, why: "FTB sọ pé owó-orí ọdọọdún pọn dandan kódà tí LLC kò bá ṣòwò, títí a ó fi pa á rẹ́." },
          { objective: "O5", q: "Ìgbà wo ni Statement of Information àkọ́kọ́ ti LLC gbọdọ̀ wọlé?", options: ["Láàárín ọjọ́ 90 lẹ́yìn ìdásílẹ̀", "Lóṣooṣù", "Nígbà tí ó bá ti ilẹ̀kùn nìkan", "Láàárín ọdún 10"], answer: 0, why: "Secretary of State sọ pé ó gbọdọ̀ wọlé láàárín ọjọ́ 90 lẹ́yìn ìforúkọsílẹ̀, àti ní ọdún méjì-méjì lẹ́yìn náà." },
          { objective: "O5", q: "O fẹ́ gba òṣìṣẹ́ àkọ́kọ́ rẹ. Ọ́fíìsì wo ni o máa forúkọ sílẹ̀ lọ́dọ̀ rẹ̀?", options: ["CalGold", "County clerk", "EDD", "DMV"], answer: 2, why: "Àwọn agbanisíṣẹ́ ń forúkọ sílẹ̀ lọ́dọ̀ EDD láàárín ọjọ́ 15 lẹ́yìn tí wọ́n bá san owó oṣù tí ó ju $100 lọ ní ìdámẹ́rin ọdún." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Bíbẹ̀rẹ̀ Iṣẹ́ Òwò Kékeré ní California, pẹ̀lú Iye Owó Rẹ̀",
    questions: [
      { objective: "O1", q: "Ìṣètò wo ni kò nílò ìwé ìdásílẹ̀ lọ́dọ̀ California Secretary of State?", options: ["LLC", "Sole proprietorship", "Corporation", "Nonprofit corporation (àjọ tí kì í ṣe fún èrè)"], answer: 1, why: "Sole proprietor kì í fi ìwé ìdásílẹ̀ sílẹ̀ lọ́dọ̀ Secretary of State." },
      { objective: "O1", q: "Kí ni ìdí pàtàkì kan tí àwọn olùní fi ń dá LLC sílẹ̀?", options: ["Ó máa ń jẹ́ ọ̀fẹ́ nígbà gbogbo", "Ó ń rọ́pò gbogbo ìwé àṣẹ", "Ó ń mú gbogbo owó-orí kúrò", "Ó lè ṣèrànwọ́ láti ya àwọn ohun ìní tìrẹ sọ́tọ̀ kúrò lọ́wọ́ gbèsè iṣẹ́ òwò"], answer: 3, why: "LLC jẹ́ ara òfin tí ó dá dúró tí ó lè ṣèrànwọ́ láti dáàbò bo olùní." },
      { objective: "O1", q: "Owó Secretary of State fún Articles of Incorporation ti general stock corporation (ARTS-GS) ni:", options: ["$20", "$70", "$100", "$800"], answer: 2, why: "Secretary of State kọ ARTS-GS sí $100." },
      { objective: "O1", q: "Níbo ni o ti ń fi ìwé ìdásílẹ̀ LLC sílẹ̀ lórí ayélujára?", options: ["irs.gov", "bizfileonline.sos.ca.gov", "calgold.ca.gov", "edd.ca.gov"], answer: 1, why: "bizfile Online ni ojú-òpó ìforúkọsílẹ̀ Secretary of State." },
      { objective: "O2", q: "Kí ni DBA?", options: ["Fọ́ọ̀mù owó-orí", "Irú ìwé àṣẹ kan fún oúnjẹ", "Orúkọ tí iṣẹ́ òwò ń lò níwájú gbogbo ènìyàn, tí kì í bá ṣe orúkọ òfin olùní", "Àkáǹtì báńkì"], answer: 2, why: "DBA túmọ̀ sí \"doing business as\"; a máa ń fi í sílẹ̀ gẹ́gẹ́ bí Fictitious Business Name." },
      { objective: "O2", q: "Lẹ́yìn fífi FBN sílẹ̀, ọ̀pọ̀ county ní California tún ní kí o:", options: ["Kéde rẹ̀ nínú ìwé ìròyìn ìbílẹ̀ fún ọ̀sẹ̀ mẹ́rin", "San owó fún IRS", "Gba seller's permit", "Dá LLC sílẹ̀"], answer: 0, why: "Àwọn county ní kí a kéde FBN lẹ́ẹ̀kan lọ́sẹ̀ fún ọ̀sẹ̀ mẹ́rin." },
      { objective: "O2", q: "Níbo ni o yẹ kí o ti wo owó FBN ti county rẹ?", options: ["Olùrànlọ́wọ́ AI", "IRS", "Ojú-òpó county clerk rẹ", "Ọ̀rọ̀ kan lórí ìkànnì àjọlò (social media)"], answer: 2, why: "County kọ̀ọ̀kan ló ń pinnu owó FBN tirẹ̀." },
      { objective: "O3", q: "Èló ni IRS ń gbà fún EIN?", options: ["Kò sí nǹkan", "$70", "$50", "$800"], answer: 0, why: "IRS sọ pé o kò ní láti san owó kankan fún EIN láéláé." },
      { objective: "O3", q: "Àjọ wo ló ń fúnni ní seller's permit ní California?", options: ["FTB", "CDTFA", "EDD", "County clerk"], answer: 1, why: "California Department of Tax and Fee Administration ló ń fúnni ní seller's permit." },
      { objective: "O3", q: "Kí ni CDTFA lè béèrè nígbà tí o bá ń gba seller's permit, bí kò tilẹ̀ sí owó?", options: ["Ìwé ìdásílẹ̀ corporation", "Ọ̀rọ̀ aṣínà báńkì rẹ", "Ìkéde nínú ìwé ìròyìn", "Owó ìdúró (security deposit)"], answer: 3, why: "CDTFA sọ pé ó lè béèrè owó ìdúró." },
      { objective: "O3", q: "Ìsọ̀ elégédé (pumpkin) àsìkò kan ń tajà ní ibì kan fún ọ̀sẹ̀ mẹ́fà. Kí ni olùní yẹ kí ó béèrè lọ́wọ́ CDTFA nípa rẹ̀?", options: ["Temporary seller's permit", "EIN", "FBN", "Statement of Information"], answer: 0, why: "Títà ní ibì kan fún ọjọ́ 90 tàbí kí ó dín lè nílò temporary seller's permit." },
      { objective: "O4", q: "Ọkọ̀ oúnjẹ sábà máa ń nílò health permit láti ọ̀dọ̀:", options: ["IRS", "EDD", "Secretary of State", "Ẹ̀ka environmental health ti county"], answer: 3, why: "Iṣẹ́ òwò oúnjẹ ń gba health permit láti ọ̀dọ̀ environmental health ti county." },
      { objective: "O6", q: "CalGold sọ pé òun kì í fúnni ní ìwé àṣẹ. Nítorí náà, lẹ́yìn lílò ó, o yẹ kí o:", options: ["Fojú fo àkọsílẹ̀ náà", "San owó fún CalGold", "Kàn sí àjọ kọ̀ọ̀kan tí ó kọ láti fìdí owó múlẹ̀ kí o sì béèrè", "Ní kí AI béèrè fún ọ"], answer: 2, why: "CalGold ń kọ àwọn àjọ; ìwọ ni o máa béèrè lọ́dọ̀ ọ̀kọ̀ọ̀kan." },
      { objective: "O4", q: "Iṣẹ́ kíkọ́ ọmọ lẹ́kọ̀ọ́ tí ó wà nínú ilé ṣì ṣeé ṣe kí ó nílò:", options: ["Seller's permit", "Business license tàbí tax certificate ti ìlú", "Health permit", "Ìwé àṣẹ ọtí (liquor license)"], answer: 1, why: "Ọ̀pọ̀ ìlú ló ń béèrè business license, kódà fún iṣẹ́ òwò inú ilé." },
      { objective: "O5", q: "Èló ni owó-orí ọdọọdún LLC ní California?", options: ["$20", "$70", "$250", "$800"], answer: 3, why: "FTB sọ pé gbogbo LLC gbọdọ̀ san owó-orí ọdọọdún $800." },
      { objective: "O5", q: "Ìgbà wo ni owó-orí ọdọọdún $800 àkọ́kọ́ ti LLC gbọdọ̀ wọlé?", options: ["Nígbà tí ó bá pa $250,000 nìkan", "Kì í ṣe ní ọdún àkọ́kọ́ láéláé", "Ní ọjọ́ 15 oṣù kẹrin lẹ́yìn ìforúkọsílẹ̀ lọ́dọ̀ Secretary of State", "Ní ọjọ́ 31 oṣù Kejìlá (December)"], answer: 2, why: "FTB fún ni ní ọjọ́ 15 oṣù kẹrin lẹ́yìn ìforúkọsílẹ̀." },
      { objective: "O5", q: "Corporation tuntun ní ọdún owó-orí àkọ́kọ́ rẹ̀:", options: ["Kò ní láti san minimum franchise tax $800", "Ń san $1,600", "Kì í san owó-orí kankan láéláé", "Gbọdọ̀ san LLC fee"], answer: 0, why: "FTB sọ pé corporation tuntun kò ní láti san iye tí ó kéré jù náà ní ọdún owó-orí àkọ́kọ́ wọn." },
      { objective: "O5", q: "Ìgbà mélòó ni LLC ń fi Statement of Information sílẹ̀ lẹ́yìn èyí àkọ́kọ́?", options: ["Lóṣooṣù", "Ní ọdún méjì-méjì", "Ní ọdún mẹ́wàá-mẹ́wàá", "Kò sígbà kankan"], answer: 1, why: "Secretary of State sọ pé ní ọdún méjì-méjì lẹ́yìn èyí àkọ́kọ́." },
      { objective: "O6", q: "Ní ìtẹ̀léra wo ni o sábà máa ṣe àwọn wọ̀nyí?", options: ["Ìwé àṣẹ ìlú, lẹ́yìn náà dá LLC sílẹ̀, lẹ́yìn náà yan ìṣètò", "Yan ìṣètò, dá a sílẹ̀, gba EIN, lẹ́yìn náà ìwé àṣẹ ìbílẹ̀", "Seller's permit, lẹ́yìn náà EIN, lẹ́yìn náà ìṣètò", "Ìtẹ̀léra èyíkéyìí dára"], answer: 1, why: "Ọ̀pọ̀ ìwé àṣẹ ń béèrè EIN àti entity number rẹ, nítorí náà kọ́kọ́ dá a sílẹ̀ kí o sì gba EIN." },
      { objective: "O6", q: "Olùrànlọ́wọ́ AI sọ owó FBN ní county rẹ fún ọ. Kí ni o máa ṣe?", options: ["Kọ́kọ́ wò ó lórí ojú-òpó ìjọba county clerk rẹ", "Fi í sínú ètò láìṣàyẹ̀wò", "San owó fún irinṣẹ́ AI náà", "Tẹ SSN rẹ láti rí ìdáhùn tó dára jù"], answer: 0, why: "AI lè ṣàṣìṣe; owó ń wá láti ojú-òpó ìjọba." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      0,
      3,
      4,
      7,
      8,
      11,
      12,
      14,
      17,
      18
    ]
  },
  rubric: {
    mastery: "\"Ó dé ìpele\" tàbí \"Ó ré ìpele kọjá\" lórí gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì gbìyànjú lẹ́ẹ̀kan sí i.",
    criteria: [
      {
        name: "Ìṣètò àti orúkọ",
        objective: "O1",
        notYet: "Kò yan ìṣètò kankan, tàbí ìforúkọsílẹ̀ orúkọ kò sí.",
        meets: "Ìṣètò pẹ̀lú ìdí, pẹ̀lú ìforúkọsílẹ̀ orúkọ tó tọ́ àti ọ́fíìsì rẹ̀.",
        exceeds: "Ó tún kọ òfin ìkéde FBN tí ó bá kàn án."
      },
      {
        name: "EIN àti seller's permit",
        objective: "O3",
        notYet: "Kò sí, tàbí ó lo iṣẹ́ EIN tí ń gba owó.",
        meets: "EIN láti irs.gov láìsanwó, àti ìlà seller's permit tàbí ìdí tí kò fi pọn dandan.",
        exceeds: "Ó kọ owó ìdúró CDTFA tí ó ṣeé ṣe."
      },
      {
        name: "Ìwé àṣẹ ìbílẹ̀",
        objective: "O4",
        notYet: "Kò kọ ìwé àṣẹ ìlú tàbí ìwé àṣẹ CalGold kankan.",
        meets: "Business license ìlú àti gbogbo ìwé àṣẹ CalGold, ọ̀kọ̀ọ̀kan pẹ̀lú ojú-òpó àjọ náà.",
        exceeds: "Owó ìbílẹ̀ kọ̀ọ̀kan ni a kọ láti ojú-òpó ìjọba."
      },
      {
        name: "Owó ọdọọdún àti ọjọ́ ìparí",
        objective: "O5",
        notYet: "Owó-orí $800 tàbí Statement of Information kò sí fún LLC tàbí corporation.",
        meets: "Àwọn ìlà ọdọọdún tí ó bá ìṣètò mu, pẹ̀lú ọjọ́ ìparí.",
        exceeds: "Ó ní ìforúkọsílẹ̀ EDD tí ó bá ń gba òṣìṣẹ́, ó sì wo nọ́mbà kọ̀ọ̀kan lórí ojú-òpó ìjọba."
      },
      {
        name: "Ètò ní ìtẹ̀léra pẹ̀lú iye owó",
        objective: "O6",
        notYet: "Àwọn ìgbésẹ̀ kò tẹ̀lé ìtẹ̀léra, tàbí ó fojú díwọ̀n owó.",
        meets: "Òpó márùn-ún tí a kún ní ìtẹ̀léra, pẹ̀lú àpapọ̀ owó tí a mọ̀, àti \"wò ó ní\" fún owó tí a kò mọ̀.",
        exceeds: "Gbogbo ojú-òpó ìjọba wà níbẹ̀, ó sì ń lo òpó \"Ó ti parí\"."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ó kéré tán ìforúkọsílẹ̀ tàbí ìwé àṣẹ kan láàárín ọjọ́ 60 (ìwádìí àtẹ̀lé)",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ṣí iṣẹ́ òwò wọn lọ́nà òfin láàárín oṣù 6",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n pàdé olùkọ́ SCORE tàbí olùmọ̀ràn SBDC láàárín ọjọ́ 60"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù tàbí kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Ìwé, tàbí spreadsheet ọ̀fẹ́, fún ètò ìbẹ̀rẹ̀ olópòó márùn-ún",
      "Àwọn ojú-òpó ìjọba tí ẹ̀kọ́ kọ̀ọ̀kan dárúkọ: bizfile Online, irs.gov, CDTFA, CalGold, FTB àti EDD",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀: ẹ̀kọ́, ìdánrawò, ìdánwò àti iṣẹ́ ìkẹyìn"
    ],
    facilitatorNotes: [
      "Ṣáájú ìpàdé kọ̀ọ̀kan, ṣí àwọn ojú-òpó ìjọba kí o sì rí i dájú pé owó ìpínlẹ̀ inú ẹ̀kọ́ náà ṣì wà bẹ́ẹ̀.",
      "Wá ojú-ewé county clerk àti business license ti ìlú àdúgbò rẹ kí o lè fi àwọn ojú-òpó ìbílẹ̀ gidi han àwọn akẹ́kọ̀ọ́.",
      "Má ṣe ní kí akẹ́kọ̀ọ́ tẹ nọ́mbà Social Security sórí ojú-iboju tí gbogbo ènìyàn ń wò; a máa ń béèrè fún EIN lórí irs.gov nìkan, ní ìkọ̀kọ̀.",
      "Ẹ̀kọ́ yìí kì í ṣe ìmọ̀ràn òfin tàbí owó-orí; pe olùkọ́ SCORE, olùmọ̀ràn SBDC tàbí ọ̀jọ̀gbọ́n owó-orí fún ìbéèrè nípa ipò akẹ́kọ̀ọ́ kan.",
      "Fi rubric ṣe àmì fún ètò ìbẹ̀rẹ̀, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
