"use strict";

// Koach Learn course (Yoruba translation of non-profits/nonprofit-california-setup.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const SOS_ARTICLES = { name: "California Secretary of State: àwọn fọ́ọ̀mù àti owó ìforúkọsílẹ̀ fún àjọ ní California", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-california-domestic" };
const SOS_SI = { name: "California Secretary of State: Statement of Information (SI-100 fún àwọn àjọ àìlérè)", url: "https://www.sos.ca.gov/business-programs/business-entities/forms/corporations-statement-information" };
const BIZFILE = { name: "California Secretary of State: bizfile Online", url: "https://bizfileonline.sos.ca.gov" };
const IRS_EIN = { name: "IRS: Gba Employer Identification Number (EIN)", url: "https://www.irs.gov/businesses/small-businesses-self-employed/get-an-employer-identification-number" };
const IRS_FEE = { name: "IRS: Iye owó ìforúkọsílẹ̀ fún Form 1023 àti 1023-EZ", url: "https://www.irs.gov/charities-non-profits/form-1023-and-1023-ez-amount-of-user-fee" };
const IRS_1023 = { name: "IRS: Nípa Form 1023", url: "https://www.irs.gov/forms-pubs/about-form-1023" };
const IRS_1023EZ = { name: "IRS: Nípa Form 1023-EZ (ìwé àyẹ̀wò ẹ̀tọ́ wà nínú ìtọ́sọ́nà rẹ̀)", url: "https://www.irs.gov/forms-pubs/about-form-1023-ez" };
const IRS_990N = { name: "IRS: Form 990-N (e-Postcard) fún àwọn àjọ kékeré tí kò san owó-orí", url: "https://www.irs.gov/charities-non-profits/annual-electronic-filing-requirement-for-small-exempt-organizations-form-990-n-e-postcard" };
const IRS_CHURCH = { name: "IRS Publication 1828: Ìtọ́sọ́nà owó-orí fún ṣọ́ọ̀ṣì àti àwọn àjọ ẹ̀sìn", url: "https://www.irs.gov/pub/irs-pdf/p1828.pdf" };
const FTB = { name: "California Franchise Tax Board: Àwọn àjọ aláàánú àti àjọ àìlérè (Form 3500 / 3500A)", url: "https://www.ftb.ca.gov/file/business/types/charities-and-nonprofits/index.html" };
const AG_INITIAL = { name: "California Attorney General: Registry of Charities, ìforúkọsílẹ̀ àkọ́kọ́ (CT-1)", url: "https://oag.ca.gov/charities/initial-reg" };
const AG_RENEW = { name: "California Attorney General: Registry of Charities, ìsọdọ̀tun ọdọọdún (RRF-1)", url: "https://oag.ca.gov/charities/renewals" };

module.exports = {
  id: "nonprofit-california-setup-yo",
  lang: "yo",
  translationOf: "nonprofit-california-setup",
  category: "Non Profits",
  name: "Dídá Àjọ Àìlérè Sílẹ̀ ní California, Pẹ̀lú Iye Owó Rẹ̀",
  skills: "Yíyan irú àjọ àìlérè tó tọ́, Fífi articles sílẹ̀ ní ọ́fíìsì Secretary of State, Gbígba EIN lọ́fẹ̀ẹ́, Bíbéèrè ìdáǹdè owó-orí ti ìjọba àpapọ̀ àti ti ìpínlẹ̀, Fífi orúkọ sílẹ̀ lọ́dọ̀ Attorney General, Ṣíṣe ìṣirò owó àti kàlẹ́ńdà ìbẹ̀rẹ̀",
  outcome: "ṣe ètò ìbẹ̀rẹ̀ tó péye, tó ní ọjọ́, fún àjọ àìlérè fún àǹfààní gbogbo ènìyàn (public benefit) ní California: gbogbo ìwé ìforúkọsílẹ̀ ní ìtẹ̀léra tó tọ́, ọ́fíìsì tí ó ń gbà á, orúkọ fọ́ọ̀mù, owó ìjọba gidi, àti àwọn ìwé ọdọọdún tí ó ń pa àjọ náà mọ́ ní ipò rere.",
  about: [
    "Ẹ̀kọ́ yìí wà fún àwọn tí wọ́n ń dá àjọ aláàánú, iṣẹ́ ìránṣẹ́ ẹ̀sìn, ẹgbẹ́ àdúgbò tàbí ètò kan sílẹ̀ ní California: àwọn olùdásílẹ̀, àwọn pásítọ̀, ọmọ ìgbìmọ̀ olùdarí àti àwọn olùyọ̀ǹda ara ẹni tí wọ́n fẹ́ ṣe é dáadáa láti ìgbà àkọ́kọ́.",
    "O máa kọ́ àwọn ìgbésẹ̀ ní ìtẹ̀léra: yan irú àjọ rẹ àti ìgbìmọ̀ rẹ, fi articles of incorporation sílẹ̀ lọ́dọ̀ Secretary of State, gba EIN lọ́fẹ̀ẹ́ lọ́wọ́ IRS (ẹ̀ka owó-orí ìjọba àpapọ̀ US), béèrè ipò 501(c)(3), gba ìdáǹdè owó-orí California lọ́wọ́ Franchise Tax Board, kí o sì forúkọ sílẹ̀ ní Registry of Charities ti Attorney General. Lẹ́yìn náà o máa kọ́ àwọn ìwé ọdọọdún, o sì máa ṣe ìṣirò owó.",
    "Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Kà á, wo àwọn àwòrán ìfihàn, kí o sì ṣe iṣẹ́ \"Gbìyànjú rẹ̀ báyìí\". A ṣàyẹ̀wò gbogbo owó inú ẹ̀kọ́ yìí lórí ojú-òpó ìjọba gidi ní ọjọ́ 27 October 2026, a sì kọ ìjápọ̀ rẹ̀ kí o lè tún ṣàyẹ̀wò. Owó máa ń yí padà, nítorí náà máa jẹ́rìí sí i lórí ojú-òpó ìjọba kí o tó sanwó. Ẹ̀kọ́ ni èyí, kì í ṣe ìmọ̀ràn òfin tàbí ti owó-orí: fún ọ̀ràn tìrẹ, bá agbẹjọ́rò àjọ àìlérè, akọ̀wé-owó (accountant) tàbí ibùdó ìrànlọ́wọ́ ọ̀fẹ́ fún àjọ àìlérè sọ̀rọ̀."
  ],
  finalTask: "Ṣe ètò ìbẹ̀rẹ̀ ojú-ìwé kan fún àjọ àìlérè rẹ (gidi tàbí àṣeṣe): tábìlì tí ó ní ìwé ìforúkọsílẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra, ọ́fíìsì, orúkọ fọ́ọ̀mù, owó láti ojú-òpó ìjọba, ọjọ́ tí o fẹ́ fi sílẹ̀, àti àwọn ìwé ọdọọdún pẹ̀lú ọjọ́ ìparí wọn. Fi àpapọ̀ owó ìbẹ̀rẹ̀ kún un, àti ìjápọ̀ sí ojú-òpó ìjọba fún ọ̀kọ̀ọ̀kan.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí wọ́n ń dá àjọ aláàánú, iṣẹ́ ìránṣẹ́ ẹ̀sìn, ẹgbẹ́ àdúgbò tàbí ètò kan sílẹ̀ ní California: àwọn olùdásílẹ̀, àwọn pásítọ̀, ọmọ ìgbìmọ̀ olùdarí àti àwọn olùyọ̀ǹda ara ẹni tí wọ́n fẹ́ ṣe é dáadáa láti ìgbà àkọ́kọ́.",
    startingPoint: "Wọ́n ní èrò iṣẹ́ (mission), ọ̀pọ̀ ìgbà wọ́n sì ti ní àwọn olùrànlọ́wọ́. Ọ̀pọ̀ jù lọ kò tíì fi ìwé sílẹ̀ lọ́dọ̀ Secretary of State, IRS, Franchise Tax Board tàbí Attorney General rí, wọn kò sì mọ ìtẹ̀léra tàbí iye owó.",
    gap: "Àwọn olùdásílẹ̀ máa ń fi ìwé sílẹ̀ ní ìtẹ̀léra tí kò tọ́, wọ́n máa ń san owó fún àwọn ojú-òpó fún iṣẹ́ tí ó jẹ́ ọ̀fẹ́, tàbí kí wọ́n gbàgbé ìwé ọdọọdún kí wọ́n sì pàdánù ìdáǹdè owó-orí. Àwọn akẹ́kọ̀ọ́ nílò ètò kan tó ní ọjọ́, tí ó ní gbogbo ìwé, ọ́fíìsì, fọ́ọ̀mù, owó ìjọba gidi àti ọjọ́ ìparí ọdọọdún, kí àjọ náà lè bẹ̀rẹ̀ dáadáa kí ó sì wà ní ipò rere.",
    constraints: [
      "Owó àti fọ́ọ̀mù máa ń yí padà; a máa ń ṣàyẹ̀wò owó kọ̀ọ̀kan lórí ojú-òpó ìjọba kí a tó fi ìwé sílẹ̀",
      "Kì í ṣe ìmọ̀ràn òfin tàbí ti owó-orí: tí iyèméjì bá wà, akẹ́kọ̀ọ́ máa béèrè lọ́wọ́ agbẹjọ́rò àjọ àìlérè, ibùdó ìrànlọ́wọ́ tàbí akọ́ṣẹ́mọṣẹ́",
      "Ìsọfúnni àdáni: nọ́mbà Social Security tàbí ITIN máa ń lọ sí ojú-òpó IRS gidi nìkan, kì í ṣe sínú irinṣẹ́ AI tàbí email",
      "Ṣọ́ọ̀ṣì àti àwọn ẹgbẹ́ ẹ̀sìn ní àwọn òfin pàtàkì tí ó yẹ kí a ṣàyẹ̀wò",
      "Ọ̀rọ̀ tó rọrùn fún àwọn tí wọ́n ń dá àjọ sílẹ̀ fún ìgbà àkọ́kọ́; nǹkan bí ìṣẹ́jú 60 lápapọ̀"
    ],
    prerequisites: "Kò sí."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní àwọn ìgbésẹ̀ láti dá àjọ aláàánú sílẹ̀ ní California", action: "to àwọn ìwé ìforúkọsílẹ̀ pàtàkì lẹ́sẹẹsẹ, pẹ̀lú ọ́fíìsì tí ó ń bójú tó ọ̀kọ̀ọ̀kan", standard: "kí gbogbo wọn wà ní ìtẹ̀léra tó tọ́" },
    { id: "O2", condition: "Tí o bá mọ ìdí tí àjọ rẹ fi wà", action: "yan fọ́ọ̀mù articles of incorporation tó tọ́, kí o sì ṣètò Statement of Information", standard: "pẹ̀lú ibi tí a ó fi sílẹ̀ àti àwọn ọjọ́ ìparí tó tọ́" },
    { id: "O3", condition: "Lẹ́yìn tí o bá ti fi articles rẹ sílẹ̀", action: "gba EIN lọ́fẹ̀ẹ́ lórí irs.gov, kí o sì ṣètò ìpàdé àkọ́kọ́ ìgbìmọ̀", standard: "láìtẹ nọ́mbà àdáni sí ibì kankan àyàfi ojú-òpó IRS gidi, kí gbogbo ìpinnu ìpàdé àkọ́kọ́ sì wà lórí àkọsílẹ̀" },
    { id: "O4", condition: "Pẹ̀lú ìwé àyẹ̀wò ẹ̀tọ́ (eligibility worksheet) ti IRS", action: "yan láàárín Form 1023 àti Form 1023-EZ, kí o sì sọ ibi tí a ti ń fi í sílẹ̀", standard: "pẹ̀lú owó tí a mú láti ojú-òpó ìjọba" },
    { id: "O5", condition: "Lẹ́yìn ìfọwọ́sí ìjọba àpapọ̀ tàbí ẹ̀bùn owó àkọ́kọ́ rẹ", action: "ṣètò ìdáǹdè Franchise Tax Board àti ìforúkọsílẹ̀ ní Registry ti Attorney General", standard: "pẹ̀lú fọ́ọ̀mù tó tọ́ àti ọjọ́ 30 tí Registry fúnni" },
    { id: "O6", condition: "Tí o bá ní owó àti ọjọ́ ìparí tí a ti ṣàyẹ̀wò", action: "ṣe ìṣirò owó ìbẹ̀rẹ̀ àti kàlẹ́ńdà ìwé ọdọọdún", standard: "kí gbogbo owó àti ọjọ́ ìparí jẹ́ èyí tí a ṣàyẹ̀wò lórí ojú-òpó ìjọba" }
  ],
  chapters: [
    {
      name: "Orí 1: Dídá àjọ náà sílẹ̀",
      lessons: [
        {
          objectives: ["O1"],
          title: "Ìtọ́sọ́nà ọ̀nà: ohun tí àjọ àìlérè ní California nílò",
          minutes: 5,
          goal: "To àwọn ìwé ìforúkọsílẹ̀ pàtàkì ní ìtẹ̀léra tó tọ́, pẹ̀lú ọ́fíìsì tí ó ń bójú tó ọ̀kọ̀ọ̀kan.",
          text: [
            "Ní California, àjọ aláàánú sábà máa ń di nonprofit public benefit corporation (àjọ àìlérè fún àǹfààní gbogbo ènìyàn). Dídi àjọ àìlérè jẹ́ ọ̀ràn ìpínlẹ̀. Ìdáǹdè lọ́wọ́ owó-orí jẹ́ ìgbésẹ̀ mìíràn: ẹ̀ẹ̀kan lọ́dọ̀ IRS (ìjọba àpapọ̀) àti ẹ̀ẹ̀kan lọ́dọ̀ Franchise Tax Board (ìpínlẹ̀). Àwọn àjọ aláàánú tí ń kówó jọ tún máa ń forúkọ sílẹ̀ lọ́dọ̀ Attorney General.",
            "Ìtẹ̀léra tí a sábà máa ń tẹ̀lé ni: 1) yan ìdí àjọ, orúkọ àti ìgbìmọ̀ àkọ́kọ́; 2) fi articles of incorporation sílẹ̀ lọ́dọ̀ Secretary of State; 3) gba EIN lọ́wọ́ IRS; 4) gba bylaws, kí o sì ṣe ìpàdé àkọ́kọ́ ìgbìmọ̀; 5) fi Statement of Information sílẹ̀; 6) béèrè ipò 501(c)(3) ti ìjọba àpapọ̀; 7) béèrè ìdáǹdè California lọ́wọ́ Franchise Tax Board; 8) forúkọ sílẹ̀ ní Registry of Charities ti Attorney General.",
            "Ṣíṣe wọ́n ní ìtẹ̀léra ṣe pàtàkì. Fún àpẹẹrẹ, IRS sọ fún àwọn àjọ pé kí wọ́n forúkọ sílẹ̀ lọ́dọ̀ ìpínlẹ̀ kí wọ́n tó béèrè EIN, Attorney General sì máa ń béèrè articles àti bylaws rẹ nígbà tí o bá ń forúkọ sílẹ̀."
          ],
          steps: ["Kọ ìdí tí àjọ rẹ fi wà (mission) ní gbólóhùn kan tàbí méjì.", "Yan ènìyàn mẹ́ta tàbí jù bẹ́ẹ̀ lọ fún ìgbìmọ̀ àkọ́kọ́ rẹ, tí o bá lè ṣe é.", "Kọ àwọn ìgbésẹ̀ mẹ́jọ náà ní ìtẹ̀léra sórí ojú-ìwé kan.", "Lẹ́gbẹ̀ẹ́ ìgbésẹ̀ kọ̀ọ̀kan, kọ ọ́fíìsì rẹ̀: Secretary of State, IRS, Franchise Tax Board tàbí Attorney General."],
          words: [["Nonprofit public benefit corporation", "irú àjọ tí ọ̀pọ̀ àjọ aláàánú ní California ń lò; ó ń ṣiṣẹ́ fún gbogbo ènìyàn, kì í ṣe fún àwọn olówó rẹ̀."], ["501(c)(3)", "apá òfin owó-orí ìjọba àpapọ̀ US fún àwọn àjọ aláàánú; ẹ̀bùn sí wọn sábà máa ń dín owó-orí olùfúnni kù."], ["Ìdáǹdè owó-orí (tax-exempt)", "kí a má san owó-orí lórí owó tí ń wọlé, lẹ́yìn tí ẹ̀ka ìjọba kan bá fọwọ́ sí i."]],
          slides: [
            { title: "Ọ́fíìsì mẹ́rin tí o máa bá ṣiṣẹ́", bullets: ["Secretary of State: ó ń dá àjọ náà sílẹ̀", "IRS: EIN àti ipò 501(c)(3) ti ìjọba àpapọ̀", "Franchise Tax Board: ìdáǹdè owó-orí California", "Attorney General: Registry of Charities"] },
            { title: "Ìtẹ̀léra, apá 1", bullets: ["1. Ìdí àjọ, orúkọ, ìgbìmọ̀ àkọ́kọ́", "2. Articles of incorporation (Secretary of State)", "3. EIN (IRS, ọ̀fẹ́)", "4. Bylaws àti ìpàdé àkọ́kọ́ ìgbìmọ̀"] },
            { title: "Ìtẹ̀léra, apá 2", bullets: ["5. Statement of Information (Secretary of State)", "6. Ìbéèrè 501(c)(3) (IRS)", "7. Form 3500 tàbí 3500A (Franchise Tax Board)", "8. Forúkọ sílẹ̀ lọ́dọ̀ Attorney General (CT-1)"] },
            { title: "Ipò méjì ọ̀tọ̀ọ̀tọ̀", bullets: ["Àjọ àìlérè: ọ̀ràn ìpínlẹ̀", "Ìdáǹdè owó-orí: ìfọwọ́sí ọ̀tọ̀ ti ìjọba àpapọ̀ àti ti ìpínlẹ̀"] }
          ],
          sources: [SOS_ARTICLES, IRS_EIN, FTB, AG_INITIAL],
          tryIt: "Kọ ìdí tí àjọ àìlérè rẹ fi wà ní gbólóhùn kan tàbí méjì. Lẹ́yìn náà kọ àwọn ìgbésẹ̀ ìbẹ̀rẹ̀ mẹ́jọ ní ìtẹ̀léra àti ọ́fíìsì fún ọ̀kọ̀ọ̀kan. Pa ojú-ìwé yìí mọ́: òun ló máa di ètò ìbẹ̀rẹ̀ ìkẹyìn rẹ.",
          youCanNow: "to àwọn ìwé ìforúkọsílẹ̀ àjọ àìlérè ní California ní ìtẹ̀léra, kí o sì dárúkọ ọ́fíìsì tí ó ń bójú tó ọ̀kọ̀ọ̀kan.",
          quickCheck: [
            { objective: "O1", q: "Ọ́fíìsì wo ló ń bójú tó ìdáǹdè owó-orí California?", options: ["Franchise Tax Board", "Secretary of State", "Attorney General", "Ìgbìmọ̀ ìlú (city council)"], answer: 0, why: "Ìdáǹdè owó-orí wà lọ́dọ̀ IRS (ìjọba àpapọ̀) àti Franchise Tax Board (ìpínlẹ̀)." },
            { objective: "O1", q: "Olùdásílẹ̀ kan fẹ́ béèrè EIN kí ó tó fi articles sílẹ̀. Kí ni o máa sọ fún un?", options: ["Ìtẹ̀léra èyíkéyìí dára", "Kọ́kọ́ fi articles sílẹ̀ lọ́dọ̀ Secretary of State, bí IRS ṣe sọ fún àwọn àjọ", "Fo articles kọjá", "Kọ́kọ́ forúkọ sílẹ̀ lọ́dọ̀ Attorney General"], answer: 1, why: "IRS sọ fún àwọn àjọ pé kí wọ́n forúkọ sílẹ̀ lọ́dọ̀ ìpínlẹ̀ kí wọ́n tó béèrè EIN." }
          ]
        },
        {
          objectives: ["O2"],
          title: "Fífi articles of incorporation sílẹ̀",
          minutes: 5,
          goal: "Yan fọ́ọ̀mù articles tó tọ́, kí o sì fi í sílẹ̀ lọ́dọ̀ Secretary of State.",
          text: [
            "Articles of incorporation ló ń dá àjọ rẹ sílẹ̀ lábẹ́ òfin. Secretary of State ti California ní oríṣi mẹ́ta fún àjọ àìlérè: Form ARTS-PB (public benefit, fún àǹfààní gbogbo ènìyàn), Form ARTS-RE (ẹ̀sìn) àti Form ARTS-MU (mutual benefit, fún àǹfààní àwọn ọmọ ẹgbẹ́). Owó ìforúkọsílẹ̀ fún ọ̀kọ̀ọ̀kan jẹ́ $30 nígbà tí a ṣàyẹ̀wò.",
            "Ọ̀pọ̀ àjọ aláàánú ń lo public benefit. Ṣọ́ọ̀ṣì tàbí iṣẹ́ ìránṣẹ́ ẹ̀sìn lè lo fọ́ọ̀mù ẹ̀sìn. Mutual benefit wà fún àwọn ẹgbẹ́ tí ń ṣiṣẹ́ fún àwọn ọmọ ẹgbẹ́ wọn, bí àwọn kọ́ọ̀bù kan, kò sì bá ọ̀pọ̀ àjọ aláàánú mu. Tí o bá fẹ́ béèrè ipò 501(c)(3), IRS nílò àwọn ọ̀rọ̀ kan nínú articles rẹ nípa ìdí àjọ rẹ àti ohun tí yóò ṣẹlẹ̀ sí ohun ìní rẹ̀ tí o bá tì í pa. Ka ìtọ́sọ́nà fọ́ọ̀mù náà, kí o sì ní kí agbẹjọ́rò àjọ àìlérè tàbí ibùdó ìrànlọ́wọ́ yẹ̀ ẹ́ wò.",
            "O lè fi í sílẹ̀ lórí ayélujára ní bizfile Online (bizfileonline.sos.ca.gov), tàbí nípasẹ̀ ìfìwéránṣẹ́, tàbí ní ojúkojú. Kọ́kọ́ wá orúkọ náà láti rí i dájú pé kò sí ẹni tí ó ń lò ó. Láàárín ọjọ́ 90, o tún máa fi Statement of Information sílẹ̀ (Form SI-100, $20), àti lẹ́ẹ̀kan sí i ní ọdún méjì-méjì."
          ],
          steps: ["Wá orúkọ rẹ lórí bizfile Online.", "Yan fọ́ọ̀mù: ARTS-PB fún ọ̀pọ̀ àjọ aláàánú, ARTS-RE fún àwọn ẹgbẹ́ ẹ̀sìn.", "Kọ orúkọ, ìdí àjọ àti agent for service of process sínú rẹ̀.", "Fi í sílẹ̀ lórí ayélujára, kí o sì san owó tí ó wà lórí ojú-òpó ìjọba.", "Fi Statement of Information (SI-100) sí kàlẹ́ńdà rẹ: láàárín ọjọ́ 90, lẹ́yìn náà ní ọdún méjì-méjì."],
          words: [["Articles of incorporation", "ìwé kúkúrú tí ó ń dá àjọ rẹ sílẹ̀ lábẹ́ òfin."], ["Agent for service of process", "ẹni tàbí ilé-iṣẹ́ tí ó gbà láti gba ìwé òfin fún àjọ àìlérè náà."], ["Statement of Information", "fọ́ọ̀mù tí ó ń sọ àdírẹ́sì àti àwọn olóyè àjọ rẹ fún ìpínlẹ̀; àwọn àjọ àìlérè ń fi SI-100 sílẹ̀."]],
          slides: [
            { title: "Fọ́ọ̀mù articles mẹ́ta fún àjọ àìlérè", bullets: ["ARTS-PB: public benefit (ọ̀pọ̀ àjọ aláàánú)", "ARTS-RE: ẹ̀sìn", "ARTS-MU: mutual benefit (fún àwọn ọmọ ẹgbẹ́)"] },
            { title: "Owó nígbà tí a ṣàyẹ̀wò (27 Oct 2026)", bullets: ["Articles: $30", "Statement of Information SI-100: $20", "Máa jẹ́rìí sí i lórí sos.ca.gov kí o tó sanwó"] },
            { title: "Bí o ṣe lè fi í sílẹ̀", bullets: ["Kọ́kọ́ wá orúkọ náà", "Fi í sílẹ̀ lórí bizfileonline.sos.ca.gov", "Tàbí nípasẹ̀ ìfìwéránṣẹ́ tàbí ní ojúkojú"] },
            { title: "Má ṣe gbàgbé", bullets: ["SI-100 láàárín ọjọ́ 90 lẹ́yìn ìforúkọsílẹ̀", "Lẹ́yìn náà ní ọdún méjì-méjì", "Ọ̀rọ̀ 501(c)(3): jẹ́ kí ẹnìkan yẹ articles wò"] }
          ],
          sources: [SOS_ARTICLES, SOS_SI, BIZFILE],
          tryIt: "Ṣí ojú-ìwé fọ́ọ̀mù ti Secretary of State. Wá fọ́ọ̀mù articles tí ó bá ẹgbẹ́ rẹ mu, kí o sì kọ orúkọ fọ́ọ̀mù náà àti owó rẹ̀ lọ́wọ́lọ́wọ́ sílẹ̀. Lẹ́yìn náà wá owó SI-100, kí o sì fi méjèèjì kún ètò rẹ pẹ̀lú ọjọ́ ìparí fún SI-100.",
          youCanNow: "yan fọ́ọ̀mù articles tó tọ́, wá owó rẹ̀ lórí ojú-òpó ìjọba, kí o sì ṣètò ọjọ́ fún Statement of Information rẹ.",
          quickCheck: [
            { objective: "O2", q: "Fọ́ọ̀mù articles wo ni kò bá ọ̀pọ̀ àjọ aláàánú mu?", options: ["ARTS-PB", "ARTS-RE", "ARTS-MU (mutual benefit)", "Kò sí èyí tí ó bá wọn mu"], answer: 2, why: "Mutual benefit wà fún àwọn ẹgbẹ́ tí ń ṣiṣẹ́ fún àwọn ọmọ ẹgbẹ́ wọn, kò sì bá ọ̀pọ̀ àjọ aláàánú mu." },
            { objective: "O2", q: "O fẹ́ pe àjọ rẹ ní \"Hope Kitchen.\" Kí ni o máa ṣe kí o tó fi ìwé sílẹ̀?", options: ["Fi í sílẹ̀ lẹ́sẹ̀kẹsẹ̀", "Béèrè lọ́wọ́ AI bóyá orúkọ náà wà lófo", "San owó fún ojú-òpó kan láti fi pamọ́ fún ọ", "Kọ́kọ́ wá orúkọ náà láti rí i dájú pé ó wà lófo"], answer: 3, why: "Kọ́kọ́ wá orúkọ náà láti rí i dájú pé ó wà lófo." }
          ]
        },
        {
          objectives: ["O3"],
          title: "Gbígba EIN, bylaws àti ìpàdé àkọ́kọ́ ìgbìmọ̀",
          minutes: 5,
          goal: "Gba EIN lọ́fẹ̀ẹ́ láìléwu, kí o sì múra ìpàdé àkọ́kọ́ ìgbìmọ̀ sílẹ̀.",
          text: [
            "EIN (Employer Identification Number) ni nọ́mbà owó-orí ìjọba àpapọ̀ fún àjọ àìlérè. O nílò rẹ̀ fún àkáǹtì báńkì, fún sísan owó òṣìṣẹ́ àti fún àwọn ìbéèrè ìdáǹdè owó-orí. IRS sọ pé o kò ní láti san owó fún EIN láéláé. Àwọn ojú-òpó kan máa ń gba owó fún un: yẹra fún wọn, kí o sì béèrè rẹ̀ lórí irs.gov.",
            "Irinṣẹ́ ayélujára IRS nílò nọ́mbà Social Security tàbí ITIN ẹni tí ó ń bójú tó àjọ náà (responsible party), o sì gbọ́dọ̀ parí rẹ̀ ní ìjókòó kan. Tẹ àwọn nọ́mbà àdáni wọ̀nyí sínú ojú-òpó IRS gidi nìkan, kì í ṣe sínú irinṣẹ́ AI, email tàbí ojú-òpó èyíkéyìí. Tẹ̀ tàbí fi lẹ́tà ìjẹ́rìí náà pamọ́.",
            "Bylaws ni àwọn òfin yín: iye olùdarí, bí a ṣe ń yàn wọ́n, bí ìpàdé ṣe ń lọ, àti ẹni tí ó ń fọwọ́ sí ṣẹ́ẹ̀kì. Ní ìpàdé àkọ́kọ́, ìgbìmọ̀ máa gba bylaws, yan àwọn olóyè, fọwọ́ sí ṣíṣí àkáǹtì báńkì, kí ó sì gba ìlànà conflict-of-interest (ìforígbárí àǹfààní). Kọ àkọsílẹ̀ ìpàdé (minutes), kí o sì pa á mọ́."
          ],
          steps: ["Dúró títí Secretary of State yóò fi gba articles rẹ wọlé.", "Lọ sí irs.gov, kí o sì béèrè EIN pẹ̀lú irinṣẹ́ ayélujára ọ̀fẹ́.", "Fi lẹ́tà ìjẹ́rìí EIN sínú fódà àkọsílẹ̀ rẹ.", "Kọ àkọ́pẹrẹ bylaws àti ìlànà conflict-of-interest.", "Ṣe ìpàdé àkọ́kọ́ ìgbìmọ̀, kí o sì kọ àkọsílẹ̀ ìpàdé."],
          words: [["EIN", "Employer Identification Number: nọ́mbà owó-orí ìjọba àpapọ̀ ọ̀fẹ́ fún àjọ kan."], ["Bylaws", "àwọn òfin tí a kọ sílẹ̀ nípa bí àjọ àìlérè àti ìgbìmọ̀ rẹ̀ ṣe ń ṣiṣẹ́."], ["Minutes (àkọsílẹ̀ ìpàdé)", "àkọsílẹ̀ ohun tí ìgbìmọ̀ pinnu ní ìpàdé kan."], ["Conflict-of-interest policy", "àwọn òfin nípa ohun tí ọmọ ìgbìmọ̀ gbọ́dọ̀ ṣe nígbà tí ìpinnu kan lè ṣe òun fúnra rẹ̀ láǹfààní."]],
          slides: [
            { title: "EIN rẹ", bullets: ["Nọ́mbà owó-orí ìjọba àpapọ̀ fún àjọ àìlérè", "Ọ̀fẹ́ lórí irs.gov: má ṣe san owó fún ojú-òpó kankan", "Ó pọndandan fún báńkì àti fọ́ọ̀mù ìdáǹdè owó-orí"] },
            { title: "Pa nọ́mbà àdáni mọ́", bullets: ["SSN tàbí ITIN lọ sí ojú-òpó IRS gidi nìkan", "Kì í ṣe sínú irinṣẹ́ AI, email tàbí ojú-òpó míì", "Fi lẹ́tà ìjẹ́rìí pamọ́"] },
            { title: "Ìpàdé àkọ́kọ́ ìgbìmọ̀", bullets: ["Gba bylaws", "Yan àwọn olóyè", "Fọwọ́ sí àkáǹtì báńkì", "Gba ìlànà conflict-of-interest"] }
          ],
          sources: [IRS_EIN],
          tryIt: "Ṣe ètò ìpàdé àkọ́kọ́ tí ó ní nǹkan márùn-ún: gba bylaws, yan àwọn olóyè, fọwọ́ sí àkáǹtì báńkì, gba ìlànà conflict-of-interest, kí o sì yan ọjọ́ ìpàdé tó kàn. Fi \"Béèrè EIN lórí irs.gov (ọ̀fẹ́)\" kún ètò rẹ pẹ̀lú ọjọ́ kan lẹ́yìn tí a bá ti gba articles rẹ wọlé.",
          youCanNow: "gba EIN láìléwu àti lọ́fẹ̀ẹ́, kí o sì darí ìpàdé àkọ́kọ́ ìgbìmọ̀ pẹ̀lú àwọn ìpinnu tó tọ́ lórí ètò ìpàdé.",
          quickCheck: [
            { objective: "O3", q: "Kí ni o nílò EIN fún?", options: ["Àkáǹtì báńkì, sísan owó òṣìṣẹ́ àti àwọn ìbéèrè ìdáǹdè owó-orí", "Fún rírà ilé nìkan", "Fún ṣọ́ọ̀ṣì nìkan", "Kò sí nǹkan; ọ̀ṣọ́ lásán ni"], answer: 0, why: "EIN ni nọ́mbà owó-orí ìjọba àpapọ̀ fún báńkì, owó òṣìṣẹ́ àti àwọn ìbéèrè ìdáǹdè." },
            { objective: "O3", q: "O ń kún irinṣẹ́ EIN ayélujára ti IRS, o sì fẹ́ dúró ní ààbọ̀. Kí ni ó yẹ kí o mọ̀?", options: ["O lè fi pamọ́ kí o parí rẹ̀ ní ọ̀sẹ̀ tó ń bọ̀", "O gbọ́dọ̀ parí rẹ̀ ní ìjókòó kan", "AI lè parí rẹ̀ fún ọ", "O lè fi ìyókù ránṣẹ́ sí IRS nípasẹ̀ email"], answer: 1, why: "Irinṣẹ́ ayélujára IRS gbọ́dọ̀ parí ní ìjókòó kan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Dídá àjọ náà sílẹ̀",
        questions: [
          { objective: "O1", q: "Ọ́fíìsì wo ló ń dá àjọ àìlérè sílẹ̀ ní California?", options: ["IRS", "California Secretary of State", "Attorney General", "Akọ̀wé ìjọba ìbílẹ̀ (county clerk)"], answer: 1, why: "Lọ́dọ̀ Secretary of State ni a ti ń fi articles of incorporation sílẹ̀." },
          { objective: "O2", q: "Ilé oúnjẹ ọ̀fẹ́ (food pantry) fún gbogbo àdúgbò máa fi fọ́ọ̀mù articles wo sílẹ̀ jù lọ?", options: ["ARTS-MU (mutual benefit)", "ARTS-RE (ẹ̀sìn)", "ARTS-PB (public benefit)", "Fọ́ọ̀mù LLC fún iṣẹ́ òwò"], answer: 2, why: "Àwọn àjọ aláàánú tí ń ṣiṣẹ́ fún gbogbo ènìyàn sábà máa ń fi articles public benefit sílẹ̀." },
          { objective: "O3", q: "Ojú-òpó kan sọ pé òun máa bá ọ gba EIN fún $79. Kí ni o máa ṣe?", options: ["San án, ó yára jù", "Béèrè rẹ̀ lọ́fẹ̀ẹ́ lórí irs.gov", "Ní kí Attorney General san án", "Fo EIN kọjá"], answer: 1, why: "IRS sọ pé EIN kì í gba owó láéláé; béèrè rẹ̀ lórí irs.gov." },
          { objective: "O2", q: "Ìgbà wo ni Statement of Information (SI-100) àkọ́kọ́ gbọ́dọ̀ wọlé?", options: ["Láàárín ọjọ́ 90 lẹ́yìn fífi articles sílẹ̀", "Nígbà tí o bá tì í pa nìkan", "Ní ọdún mẹ́wàá-mẹ́wàá", "Kò pọndandan fún àjọ àìlérè láéláé"], answer: 0, why: "Secretary of State sọ pé láàárín ọjọ́ 90, lẹ́yìn náà ní ọdún méjì-méjì." },
          { objective: "O3", q: "Èwo ni iṣẹ́ ìpàdé àkọ́kọ́ ìgbìmọ̀?", options: ["Fífi 990-N sílẹ̀", "Gbígba bylaws àti yíyan àwọn olóyè", "Sísan owó IRS fún ìbéèrè", "Ìsọdọ̀tun lọ́dọ̀ Attorney General"], answer: 1, why: "Ìpàdé àkọ́kọ́ máa ń gba bylaws, yan àwọn olóyè, ó sì máa ń fọwọ́ sí àwọn nǹkan ìpìlẹ̀ bí àkáǹtì báńkì." }
        ]
      }
    },
    {
      name: "Orí 2: Ìdáǹdè owó-orí, ìforúkọsílẹ̀ àti iye owó",
      lessons: [
        {
          objectives: ["O4"],
          title: "Bíbéèrè ipò 501(c)(3) ti ìjọba àpapọ̀",
          minutes: 6,
          goal: "Yan láàárín Form 1023 àti Form 1023-EZ, kí o sì mọ owó rẹ̀.",
          text: [
            "Láti di àjọ aláàánú 501(c)(3), ọ̀pọ̀ àjọ máa ń kọ̀wé béèrè lọ́wọ́ IRS. Fọ́ọ̀mù méjì ló wà. Form 1023 ni ìbéèrè kíkún; owó rẹ̀ (user fee) jẹ́ $600 nígbà tí a ṣàyẹ̀wò. Form 1023-EZ jẹ́ fọ́ọ̀mù kúkúrú fún àwọn àjọ kékeré; owó rẹ̀ jẹ́ $275. A ń fi méjèèjì sílẹ̀ lórí ayélujára ní Pay.gov, a sì ń san owó náà níbẹ̀ nígbà tí a bá ń fi í sílẹ̀.",
            "Kì í ṣe gbogbo ènìyàn ló lè lo 1023-EZ. IRS ní ìwé àyẹ̀wò ẹ̀tọ́ (eligibility worksheet) ní ìparí ìtọ́sọ́nà Form 1023-EZ. Ó ń wo nǹkan bí iye owó tí o retí láti kó jọ àti ohun ìní rẹ. Kún ìwé àyẹ̀wò náà pẹ̀lú òtítọ́ kí o tó yan.",
            "Ṣọ́ọ̀ṣì ní àwọn òfin pàtàkì: IRS ń ṣe sí ṣọ́ọ̀ṣì yàtọ̀ sí àwọn àjọ aláàánú míì, ọ̀pọ̀ nínú wọn kò sì ní láti béèrè, bó tilẹ̀ jẹ́ pé àwọn kan yàn láti béèrè. Ka IRS Publication 1828 tàbí béèrè lọ́wọ́ akọ́ṣẹ́mọṣẹ́. Nígbà tí IRS bá fọwọ́ sí i, ó máa fi determination letter ránṣẹ́. Pa á mọ́ títí láé: àwọn olùfúnni, àwọn tí ń fúnni ní grant àti ìpínlẹ̀ máa béèrè fún un."
          ],
          steps: ["Ṣí ìtọ́sọ́nà Form 1023-EZ lórí irs.gov, kí o sì kún ìwé àyẹ̀wò ẹ̀tọ́.", "Tí o bá yege tí ó sì bá ọ mu, ṣètò fún 1023-EZ; tí kò bá rí bẹ́ẹ̀, ṣètò fún Form 1023.", "Ṣí àkáǹtì Pay.gov, kí o sì kún fọ́ọ̀mù náà níbẹ̀.", "San owó tí ó wà lórí ojú-ìwé owó ìbéèrè ti IRS.", "Fi determination letter pamọ́ nígbà tí ó bá dé."],
          words: [["Form 1023", "ìbéèrè kíkún IRS fún ipò 501(c)(3)."], ["Form 1023-EZ", "ìbéèrè kúkúrú IRS fún àwọn àjọ kékeré tí wọ́n yege nínú ìwé àyẹ̀wò ẹ̀tọ́."], ["User fee", "owó tí IRS ń gbà láti yẹ ìbéèrè náà wò."], ["Determination letter", "lẹ́tà IRS tí ó sọ pé àjọ rẹ kò ní san owó-orí."]],
          slides: [
            { title: "Fọ́ọ̀mù méjì ti ìjọba àpapọ̀", bullets: ["Form 1023: ìbéèrè kíkún, owó $600", "Form 1023-EZ: fọ́ọ̀mù kúkúrú, owó $275", "Owó nígbà tí a ṣàyẹ̀wò, 27 Oct 2026: jẹ́rìí sí i lórí irs.gov"] },
            { title: "Èwo ni?", bullets: ["Kún ìwé àyẹ̀wò ẹ̀tọ́ nínú ìtọ́sọ́nà 1023-EZ", "O yege, ó sì bá ọ mu: 1023-EZ", "O kò yege: Form 1023"] },
            { title: "Bí o ṣe lè fi í sílẹ̀", bullets: ["Lórí ayélujára ní Pay.gov", "San owó náà nígbà tí o bá ń fi í sílẹ̀"] },
            { title: "Ṣọ́ọ̀ṣì àti lẹ́tà náà", bullets: ["Ṣọ́ọ̀ṣì ní òfin pàtàkì: wo IRS Publication 1828", "Pa determination letter mọ́ títí láé"] }
          ],
          sources: [IRS_FEE, IRS_1023, IRS_1023EZ, IRS_CHURCH],
          tryIt: "Ṣí ìtọ́sọ́nà Form 1023-EZ lórí irs.gov, kí o sì ka ìwé àyẹ̀wò ẹ̀tọ́. Pinnu fọ́ọ̀mù tí àjọ rẹ máa fi sílẹ̀, lẹ́yìn náà fi fọ́ọ̀mù náà, owó láti ojú-ìwé owó ìbéèrè IRS, àti ọjọ́ tí o fẹ́ fi sílẹ̀ kún ètò rẹ.",
          youCanNow: "yan láàárín Form 1023 àti 1023-EZ, wá owó rẹ̀ lọ́wọ́lọ́wọ́, kí o sì mọ ibi tí o ti máa fi í sílẹ̀.",
          quickCheck: [
            { objective: "O4", q: "Ìgbà wo ni a ń san owó IRS fún Form 1023 tàbí 1023-EZ?", options: ["Ọdún kan lẹ́yìn ìfọwọ́sí", "Pẹ̀lú ṣẹ́ẹ̀kì sí Secretary of State", "Lórí Pay.gov nígbà tí o bá ń fi í sílẹ̀", "Láéláé"], answer: 2, why: "A ń fi fọ́ọ̀mù méjèèjì sílẹ̀ lórí Pay.gov, a sì ń san owó níbẹ̀ nígbà tí a bá ń fi í sílẹ̀." },
            { objective: "O4", q: "IRS fi determination letter rẹ ránṣẹ́. Kí ni o máa ṣe pẹ̀lú rẹ̀?", options: ["Jù ú nù lẹ́yìn ọdún kan", "Fún olùfúnni kan ní ẹ̀dà kan ṣoṣo tí o ní", "Lẹ̀ ẹ́ sínú AI", "Pa á mọ́ títí láé, nítorí àwọn olùfúnni, àwọn tí ń fúnni ní grant àti ìpínlẹ̀ máa béèrè fún un"], answer: 3, why: "Pa determination letter mọ́ títí láé; ọ̀pọ̀ ènìyàn máa béèrè fún un." }
          ]
        },
        {
          objectives: ["O5"],
          title: "Ìdáǹdè California àti Registry of Charities",
          minutes: 5,
          goal: "Ṣètò ìdáǹdè Franchise Tax Board àti ìforúkọsílẹ̀ lọ́dọ̀ Attorney General.",
          text: [
            "Ìfọwọ́sí ìjọba àpapọ̀ nìkan kò sọ ọ́ di ẹni tí kò san owó-orí California. O tún gbọ́dọ̀ kọ̀wé béèrè lọ́wọ́ Franchise Tax Board (FTB). Form 3500 ni ìbéèrè kíkún ti California. Form 3500A jẹ́ fọ́ọ̀mù kúkúrú fún àwọn àjọ tí wọ́n ti ní determination letter IRS. Ṣàyẹ̀wò ftb.ca.gov fún fọ́ọ̀mù lọ́wọ́lọ́wọ́, ìtọ́sọ́nà àti owó èyíkéyìí kí o tó fi í sílẹ̀, nítorí a kò lè jẹ́rìí sí owó náà lórí ojú-òpó FTB fún ẹ̀kọ́ yìí.",
            "Àwọn àjọ aláàánú tí ń mú tàbí kó owó jọ fún iṣẹ́ àánú ní California tún máa ń forúkọ sílẹ̀ ní Registry of Charities ti Attorney General. O máa forúkọ sílẹ̀ lórí ayélujára pẹ̀lú Form CT-1 láàárín ọjọ́ 30 lẹ́yìn tí o bá kọ́kọ́ gba ohun ìní fún iṣẹ́ àánú, bí ẹ̀bùn owó àkọ́kọ́ rẹ. Owó rẹ̀ jẹ́ $50 nígbà tí a ṣàyẹ̀wò. O máa gbé articles, bylaws, determination letter IRS (tàbí EIN rẹ tí o kò bá tíì ní lẹ́tà náà) àti Form 1023 tàbí 1023-EZ rẹ sókè, tí o bá ti fi ọ̀kan sílẹ̀.",
            "Àwọn ẹgbẹ́ kan lè má nílò ìforúkọsílẹ̀ ní Registry. Tí o bá rò pé tìrẹ wà lára wọn (fún àpẹẹrẹ, àjọ ẹ̀sìn), ka àwọn ojú-ìwé Registry tàbí béèrè lọ́wọ́ Registry kí o tó fò ó kọjá."
          ],
          steps: ["Lẹ́yìn tí lẹ́tà IRS bá dé, ṣètò Form 3500A lórí ftb.ca.gov (tàbí Form 3500 tí o bá ń béèrè láìsí lẹ́tà náà).", "Kọ ọjọ́ tí o kọ́kọ́ gba ẹ̀bùn owó tàbí ohun ìní míì fún iṣẹ́ àánú sílẹ̀.", "Láàárín ọjọ́ 30 lẹ́yìn ọjọ́ náà, forúkọ sílẹ̀ lórí ayélujára pẹ̀lú Form CT-1.", "Gbé articles, bylaws, lẹ́tà IRS tàbí EIN, àti 1023 tàbí 1023-EZ rẹ sókè.", "San owó Registry tí ó wà lórí oag.ca.gov."],
          words: [["Franchise Tax Board (FTB)", "ẹ̀ka owó-orí ìpínlẹ̀ California."], ["Form 3500A", "fọ́ọ̀mù ìdáǹdè kúkúrú ti California fún àwọn ẹgbẹ́ tí wọ́n ti ní lẹ́tà 501(c)(3) ti ìjọba àpapọ̀."], ["Registry of Charities", "ọ́fíìsì Attorney General tí ó ń forúkọ àwọn àjọ aláàánú sílẹ̀ tí ó sì ń bójú tó wọn ní California."], ["CT-1", "fọ́ọ̀mù ìforúkọsílẹ̀ àkọ́kọ́ ti Attorney General fún àwọn àjọ aláàánú."]],
          slides: [
            { title: "Ìdáǹdè owó-orí California (FTB)", bullets: ["Ó yàtọ̀ sí ìfọwọ́sí IRS", "Form 3500: ìbéèrè kíkún", "Form 3500A: tí o bá ti ní lẹ́tà IRS", "Ṣàyẹ̀wò ftb.ca.gov fún owó lọ́wọ́lọ́wọ́"] },
            { title: "Registry of Charities (Attorney General)", bullets: ["Form CT-1, lórí ayélujára", "Láàárín ọjọ́ 30 lẹ́yìn tí o kọ́kọ́ gba ohun ìní fún iṣẹ́ àánú", "Owó: $50 nígbà tí a ṣàyẹ̀wò, 27 Oct 2026"] },
            { title: "Múra wọ̀nyí sílẹ̀ fún CT-1", bullets: ["Articles àti bylaws", "Determination letter IRS, tàbí EIN tí lẹ́tà kò bá tíì dé", "Form 1023 tàbí 1023-EZ rẹ, tí o bá ti fi sílẹ̀"] }
          ],
          sources: [FTB, AG_INITIAL],
          tryIt: "Fi ìlà méjì kún ètò rẹ: ìdáǹdè FTB (orúkọ fọ́ọ̀mù, \"ṣàyẹ̀wò owó lórí ftb.ca.gov\", ọjọ́ tí o fẹ́ fi sílẹ̀ lẹ́yìn lẹ́tà IRS) àti CT-1 ti Attorney General ($50, láàárín ọjọ́ 30 lẹ́yìn ẹ̀bùn owó àkọ́kọ́ rẹ). Kọ àkọsílẹ̀ àwọn ìwé mẹ́rin tí o máa gbé sókè.",
          youCanNow: "ṣètò ìdáǹdè owó-orí California rẹ àti ìforúkọsílẹ̀ rẹ ní Registry of Charities pẹ̀lú fọ́ọ̀mù, àkókò àti ìwé tó tọ́.",
          quickCheck: [
            { objective: "O5", q: "Fọ́ọ̀mù wo ni ìbéèrè ìdáǹdè kíkún ti California?", options: ["Form 3500", "Form CT-1", "Form SI-100", "Form RRF-1"], answer: 0, why: "Form 3500 ni ìbéèrè kíkún ti California; 3500A ni èyí tó kúrú." },
            { objective: "O5", q: "Iṣẹ́ ìránṣẹ́ ẹ̀sìn rẹ rò pé òun kò nílò ìforúkọsílẹ̀ ní Registry. Kí ni o máa ṣe?", options: ["Fò ó kọjá láìṣàyẹ̀wò", "Ka àwọn ojú-ìwé Registry tàbí béèrè lọ́wọ́ Registry kí o tó fò ó kọjá", "Béèrè lọ́wọ́ ọ̀rẹ́ kan", "Forúkọ sílẹ̀ lọ́dọ̀ IRS dípò rẹ̀"], answer: 1, why: "Ṣàyẹ̀wò àwọn ojú-ìwé Registry tàbí béèrè lọ́wọ́ Registry kí o tó fo ìforúkọsílẹ̀ kọjá." }
          ]
        },
        {
          objectives: ["O6"],
          title: "Wíwà ní ipò rere àti ìṣirò owó ìbẹ̀rẹ̀ rẹ",
          minutes: 6,
          goal: "Ṣe ìṣirò owó ìbẹ̀rẹ̀ àti kàlẹ́ńdà ìwé ọdọọdún.",
          text: [
            "Ìbẹ̀rẹ̀ kì í ṣe òpin. Lọ́dọọdún o máa fi ìwé sílẹ̀ lọ́dọ̀ IRS: àwọn ẹgbẹ́ kékeré tí owó tí ń wọlé fún wọn (gross receipts) kì í sábà ju $50,000 lọ lè lo Form 990-N e-Postcard; àwọn tó tóbi jù máa ń fi Form 990-EZ tàbí 990 sílẹ̀. Tí o bá ṣàì fi í sílẹ̀ fún ọdún mẹ́ta ní títẹ̀léra, IRS máa gba ìdáǹdè owó-orí rẹ padà fúnra rẹ̀.",
            "Lọ́dọọdún o tún máa sọ ìforúkọsílẹ̀ rẹ dọ̀tun lọ́dọ̀ Attorney General pẹ̀lú Form RRF-1. Owó rẹ̀ dá lórí àpapọ̀ owó tí ń wọlé: nígbà tí a ṣàyẹ̀wò, ó jẹ́ $25 tí ó bá wà nísàlẹ̀ $50,000, $50 láti $50,000 sí $100,000, àti $75 láti $100,001 sí $250,000, ó sì ń ga sí i fún àwọn àjọ tó tóbi jù. Ó yẹ kí ó wọlé ní oṣù 4 àti ọjọ́ 15 lẹ́yìn tí ọdún ìnáwó rẹ bá parí (May 15 fún ọdún tí ó parí ní December 31). O tún ní Statement of Information ní ọdún méjì-méjì, àti àwọn ìwé ọdọọdún California lọ́dọ̀ FTB: ṣàyẹ̀wò ftb.ca.gov fún fọ́ọ̀mù tí ó bá ọ mu.",
            "Owó ìjọba fún ìbẹ̀rẹ̀, bí a ti ṣàyẹ̀wò: articles $30, Statement of Information $20, EIN ọ̀fẹ́, IRS $275 (1023-EZ) tàbí $600 (1023), Registry $50, pẹ̀lú owó FTB èyíkéyìí. Ìyẹn jẹ́ nǹkan bí $375 pẹ̀lú 1023-EZ tàbí $700 pẹ̀lú Form 1023, ṣáájú owó FTB èyíkéyìí, iṣẹ́ registered agent, tàbí agbẹjọ́rò. Lo AI láti ràn ọ́ lọ́wọ́ kọ tábìlì ìṣirò owó tàbí àkọsílẹ̀ ìrántí, ṣùgbọ́n ṣàyẹ̀wò gbogbo nọ́mbà lórí ojú-òpó ìjọba."
          ],
          steps: ["Kọ owó ìbẹ̀rẹ̀ kọ̀ọ̀kan láti ojú-òpó ìjọba sílẹ̀.", "Ṣe àpapọ̀ wọn fún fọ́ọ̀mù tí o yàn (1023-EZ tàbí 1023).", "Fi àwọn ìwé ọdọọdún kún un: IRS 990, RRF-1 ti Attorney General, ìwé ọdọọdún FTB.", "Fi Statement of Information ní ọdún méjì-méjì kún un.", "Fi gbogbo ọjọ́ ìparí sínú kàlẹ́ńdà àjọlò pẹ̀lú ìrántí méjì."],
          words: [["Form 990-N", "e-Postcard IRS: ìkéde kúkúrú ọdọọdún lórí ayélujára fún àwọn ẹgbẹ́ kékeré tí kò san owó-orí."], ["RRF-1", "fọ́ọ̀mù ìsọdọ̀tun ọdọọdún ti Attorney General fún àwọn àjọ aláàánú."], ["Ọdún ìnáwó (fiscal year)", "àkókò oṣù 12 tí àjọ àìlérè rẹ ń lò fún ìwé ìṣirò rẹ̀, ọ̀pọ̀ ìgbà January sí December."], ["Ipò rere (good standing)", "kí gbogbo ìwé àti owó tí a béèrè wà ní ìbámu, láìsí èyí tó kù."]],
          slides: [
            { title: "Lọ́dọọdún", bullets: ["IRS: 990-N, 990-EZ tàbí 990", "Attorney General: RRF-1, owó dá lórí owó tí ń wọlé", "FTB: ṣàyẹ̀wò ftb.ca.gov fún fọ́ọ̀mù ọdọọdún rẹ"] },
            { title: "Ṣọ́ra", bullets: ["Ṣàì fi ìwé IRS sílẹ̀ fún ọdún 3 ní títẹ̀léra: o pàdánù ìdáǹdè", "RRF-1 wọlé ní oṣù 4 ọjọ́ 15 lẹ́yìn òpin ọdún", "SI-100 ní ọdún méjì-méjì"] },
            { title: "Owó ìbẹ̀rẹ̀ (a ṣàyẹ̀wò 27 Oct 2026)", bullets: ["Articles $30 + SI-100 $20 + EIN ọ̀fẹ́", "IRS: $275 (1023-EZ) tàbí $600 (1023)", "Registry CT-1 $50, pẹ̀lú owó FTB èyíkéyìí"] },
            { title: "Àpapọ̀ rẹ", bullets: ["Nǹkan bí $375 pẹ̀lú 1023-EZ, $700 pẹ̀lú 1023", "Ṣáájú owó FTB, iṣẹ́ agent tàbí agbẹjọ́rò", "Jẹ́rìí sí gbogbo owó lórí ojú-òpó ìjọba"] }
          ],
          sources: [IRS_990N, AG_RENEW, SOS_SI, IRS_FEE, SOS_ARTICLES, AG_INITIAL, FTB],
          tryIt: "Iṣẹ́ ìkẹyìn: parí ètò ìbẹ̀rẹ̀ ojú-ìwé kan rẹ. Ṣe tábìlì tí ó ní ìwé ìforúkọsílẹ̀ kọ̀ọ̀kan ní ìtẹ̀léra, ọ́fíìsì, fọ́ọ̀mù, owó láti ojú-òpó ìjọba, àti ọjọ́ tí o fẹ́ fi sílẹ̀. Fi àwọn ìwé ọdọọdún àti ọjọ́ ìparí wọn kún un, àpapọ̀ owó ìbẹ̀rẹ̀, àti ìjápọ̀ ìjọba fún ìlà kọ̀ọ̀kan.",
          youCanNow: "ṣe ètò ìbẹ̀rẹ̀ tó péye fún àjọ àìlérè ní California, pẹ̀lú iye owó àti kàlẹ́ńdà ọdọọdún tí ó ń pa àjọ náà mọ́ ní ipò rere.",
          quickCheck: [
            { objective: "O6", q: "Ìwé ọdọọdún wo ló ń lọ sọ́dọ̀ Attorney General?", options: ["Form 990-N", "Form 1023", "Form RRF-1", "Form ARTS-PB"], answer: 2, why: "Lọ́dọọdún o máa sọ ìforúkọsílẹ̀ dọ̀tun lọ́dọ̀ Attorney General pẹ̀lú Form RRF-1." },
            { objective: "O6", q: "AI kọ tábìlì ìṣirò owó ìbẹ̀rẹ̀ rẹ. Kí ni o máa ṣe pẹ̀lú àwọn owó inú rẹ̀?", options: ["Gbà wọ́n gbọ́; AI mọ ohun tuntun", "Fi kún wọn", "Fi wọ́n sílẹ̀ lófo", "Ṣàyẹ̀wò gbogbo nọ́mbà lórí ojú-òpó ìjọba"], answer: 3, why: "Lo AI láti kọ tábìlì náà, ṣùgbọ́n ṣàyẹ̀wò gbogbo nọ́mbà lórí ojú-òpó ìjọba." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Ìdáǹdè owó-orí, ìforúkọsílẹ̀ àti iye owó",
        questions: [
          { objective: "O4", q: "Kí ni owó IRS fún Form 1023 àti Form 1023-EZ nígbà tí a ṣàyẹ̀wò?", options: ["$100 àti $50", "$600 àti $275", "Ọ̀fẹ́ fún méjèèjì", "$1,000 àti $500"], answer: 1, why: "Ojú-ìwé owó ìbéèrè IRS kọ $600 fún Form 1023 àti $275 fún Form 1023-EZ." },
          { objective: "O5", q: "Àjọ àìlérè rẹ ti ní determination letter IRS. Fọ́ọ̀mù California wo ni a ṣe fún ọ?", options: ["Form 3500A", "Form CT-1", "Form SI-100", "Form 990-N"], answer: 0, why: "Form 3500A ni fọ́ọ̀mù FTB kúkúrú fún àwọn ẹgbẹ́ tí wọ́n ti ní lẹ́tà ìjọba àpapọ̀." },
          { objective: "O5", q: "O gba ẹ̀bùn owó àkọ́kọ́ rẹ ní March 1. Ìgbà wo ni o gbọ́dọ̀ forúkọ sílẹ̀ ní Registry of Charities?", options: ["Láàárín ọjọ́ 30", "Láàárín ọdún 2", "Lẹ́yìn tí o bá kó $50,000 jọ nìkan", "Láéláé"], answer: 0, why: "Attorney General sọ pé kí o forúkọ sílẹ̀ láàárín ọjọ́ 30 lẹ́yìn tí o kọ́kọ́ gba ohun ìní fún iṣẹ́ àánú." },
          { objective: "O6", q: "Kí ló máa ṣẹlẹ̀ tí o bá ṣàì fi ìwé ọdọọdún IRS sílẹ̀ fún ọdún mẹ́ta ní títẹ̀léra?", options: ["Kò sí nǹkan", "Owó ìtanràn $10", "Pípàdánù ìdáǹdè owó-orí fúnra rẹ̀", "EIN rẹ máa yí padà"], answer: 2, why: "IRS máa gba ìdáǹdè padà fúnra rẹ̀ lẹ́yìn ọdún mẹ́ta ní títẹ̀léra tí a kò fi ìwé sílẹ̀." },
          { objective: "O6", q: "Àjọ aláàánú kan tí àpapọ̀ owó tí ń wọlé fún un jẹ́ $40,000 ń sọ ìforúkọsílẹ̀ dọ̀tun lọ́dọ̀ Attorney General. Kí ni owó RRF-1 nígbà tí a ṣàyẹ̀wò?", options: ["$200", "$100", "$75", "$25"], answer: 3, why: "Ìlànà owó RRF-1 kọ $25 fún àpapọ̀ owó tí ó wà nísàlẹ̀ $50,000." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Dídá Àjọ Àìlérè Sílẹ̀ ní California, Pẹ̀lú Iye Owó Rẹ̀",
    questions: [
      { objective: "O1", q: "Dídi àjọ àìlérè àti gbígba ìdáǹdè owó-orí jẹ́:", options: ["Ìgbésẹ̀ kan náà", "Ọ̀ràn ìjọba àpapọ̀ nìkan", "Ohun tí ṣọ́ọ̀ṣì nìkan nílò", "Ìgbésẹ̀ ọ̀tọ̀ọ̀tọ̀ pẹ̀lú ọ́fíìsì ọ̀tọ̀ọ̀tọ̀"], answer: 3, why: "Ìpínlẹ̀ ló ń dá àjọ náà sílẹ̀; IRS àti FTB ló ń fúnni ní ìdáǹdè lọ́tọ̀ọ̀tọ̀." },
      { objective: "O1", q: "Èwo ló kọ́kọ́ ṣáájú?", options: ["Fífi orúkọ sílẹ̀ lọ́dọ̀ Attorney General", "Fífi articles sílẹ̀ lọ́dọ̀ Secretary of State", "Fífi Form 3500A sílẹ̀", "Fífi RRF-1 sílẹ̀"], answer: 1, why: "Àjọ náà gbọ́dọ̀ wà kí àwọn ìwé míì tó lè wọlé." },
      { objective: "O1", q: "Ọ́fíìsì wo ló ń bójú tó Registry of Charities?", options: ["IRS", "Franchise Tax Board", "California Attorney General", "Secretary of State"], answer: 2, why: "Registry of Charities jẹ́ apá kan ọ́fíìsì Attorney General." },
      { objective: "O2", q: "Ọ̀pọ̀ àjọ aláàánú ní California ń fi irú articles wo sílẹ̀?", options: ["Mutual benefit", "Àjọ oníṣẹ̀ẹ́rẹ́ (general stock corporation)", "LLC", "Public benefit"], answer: 3, why: "Àwọn àjọ public benefit ń ṣiṣẹ́ fún gbogbo ènìyàn, èyí sì bá ọ̀pọ̀ àjọ aláàánú mu." },
      { objective: "O2", q: "Kí ni owó Secretary of State fún articles àjọ àìlérè nígbà tí a ṣàyẹ̀wò?", options: ["$30", "$300", "$600", "Ọ̀fẹ́"], answer: 0, why: "Ojú-ìwé fọ́ọ̀mù kọ $30 fún ARTS-PB, ARTS-RE àti ARTS-MU." },
      { objective: "O2", q: "Níbo ni o ti lè fi articles sílẹ̀ lórí ayélujára?", options: ["Pay.gov", "irs.gov", "Irinṣẹ́ AI èyíkéyìí", "bizfileonline.sos.ca.gov"], answer: 3, why: "bizfile Online ni ojú-òpó ìforúkọsílẹ̀ ayélujára ti Secretary of State." },
      { objective: "O2", q: "Lẹ́yìn èyí àkọ́kọ́, ìgbà mélòó ni a ń fi Statement of Information (SI-100) àjọ àìlérè sílẹ̀?", options: ["Lóṣooṣù", "Lọ́dọọdún", "Ní ọdún méjì-méjì", "Kò tún sí mọ́"], answer: 2, why: "Secretary of State sọ pé ní ọdún méjì-méjì." },
      { objective: "O3", q: "Èló ni IRS ń gbà fún EIN?", options: ["$50", "$25", "Ó dá lórí ìpínlẹ̀ rẹ", "Kò gba nǹkankan"], answer: 3, why: "IRS sọ pé o kò ní láti san owó kankan fún EIN láéláé." },
      { objective: "O3", q: "Níbo ni ó yẹ kí o tẹ nọ́mbà Social Security ẹni tí ó ń bójú tó àjọ náà sí fún EIN?", options: ["Lórí ojú-òpó IRS gidi nìkan", "Sínú olùrànlọ́wọ́ AI láti ṣàyẹ̀wò rẹ̀", "Nínú email sí gbogbo ìgbìmọ̀", "Lórí ojú-òpó èyíkéyìí tí ó ń fúnni ní ìrànlọ́wọ́"], answer: 0, why: "Nọ́mbà àdáni ń lọ sí ojú-òpó ẹ̀ka ìjọba gidi nìkan." },
      { objective: "O3", q: "Ìpinnu wo ló yẹ fún ìpàdé àkọ́kọ́ ìgbìmọ̀?", options: ["Fífi 990-N sílẹ̀", "Gbígba ìlànà conflict-of-interest", "Sísan RRF-1", "Gbígba lẹ́tà IRS"], answer: 1, why: "Ìpàdé àkọ́kọ́ máa ń gba bylaws àti àwọn ìlànà, ó sì máa ń yan àwọn olóyè." },
      { objective: "O4", q: "Báwo ni o ṣe máa mọ̀ bóyá o lè lo Form 1023-EZ?", options: ["Béèrè lọ́wọ́ ojú-òpó èyíkéyìí", "Yan èyí tí owó rẹ̀ kéré jù", "Attorney General ló máa pinnu", "Kún ìwé àyẹ̀wò ẹ̀tọ́ IRS nínú ìtọ́sọ́nà 1023-EZ"], answer: 3, why: "Ìwé àyẹ̀wò ẹ̀tọ́ IRS ló ń pinnu ẹni tí ó lè lo fọ́ọ̀mù kúkúrú náà." },
      { objective: "O4", q: "Níbo ni a ti ń fi Form 1023 àti 1023-EZ sílẹ̀?", options: ["Nípasẹ̀ fax sí Sacramento", "Ní ọ́fíìsì ìjọba ìbílẹ̀ (county)", "Lórí ayélujára ní Pay.gov", "Lórí bizfile Online"], answer: 2, why: "IRS sọ pé a ń kún méjèèjì, a sì ń sanwó wọn lórí Pay.gov." },
      { objective: "O4", q: "Kí ni determination letter IRS ń fi hàn?", options: ["Pé a ti fọwọ́ sí orúkọ àjọ rẹ", "Pé àjọ rẹ kò ní san owó-orí lábẹ́ òfin ìjọba àpapọ̀", "Pé o ti san owó Registry rẹ", "Nọ́mbà EIN rẹ"], answer: 1, why: "Determination letter ń jẹ́rìí sí ìdáǹdè owó-orí ti ìjọba àpapọ̀." },
      { objective: "O4", q: "Ṣọ́ọ̀ṣì kan fẹ́ mọ̀ bóyá ó gbọ́dọ̀ fi Form 1023 sílẹ̀. Níbo ló yẹ kí ó kọ́kọ́ wò?", options: ["IRS Publication 1828 tàbí akọ́ṣẹ́mọṣẹ́", "Ìfiránṣẹ́ kan lórí ìkànnì àjọlò (social media)", "Ọ́fíìsì ìwé-àṣẹ ọkọ̀ (DMV)", "Form SI-100"], answer: 0, why: "Ṣọ́ọ̀ṣì ní òfin IRS pàtàkì tí Publication 1828 ṣàlàyé." },
      { objective: "O5", q: "Lẹ́yìn ìfọwọ́sí ìjọba àpapọ̀, àjọ àìlérè ní California kò ní san owó-orí ìpínlẹ̀:", options: ["Fúnra rẹ̀, láìṣe nǹkankan", "Àyàfi lẹ́yìn tí FTB bá fọwọ́ sí i (Form 3500 tàbí 3500A)", "Àyàfi tí ó bá jẹ́ ṣọ́ọ̀ṣì", "Láéláé"], answer: 1, why: "Ìdáǹdè California jẹ́ ìbéèrè ọ̀tọ̀ sí Franchise Tax Board." },
      { objective: "O5", q: "Àwọn ìwé wo ni o máa gbé sókè fún CT-1 ti Attorney General?", options: ["Articles, bylaws, lẹ́tà IRS tàbí EIN, àti 1023 rẹ tí o bá ti fi sílẹ̀", "Káàdì ìdánimọ̀ olóòótẹ̀ nìkan", "Orúkọ àti àdírẹ́sì àwọn olùfúnni", "Ọ̀rọ̀ aṣínà báńkì rẹ"], answer: 0, why: "Registry ń béèrè ìwé ìdásílẹ̀, bylaws, lẹ́tà IRS tàbí EIN àti ìbéèrè ìdáǹdè." },
      { objective: "O5", q: "Kí ni owó ìforúkọsílẹ̀ àkọ́kọ́ ti Registry nígbà tí a ṣàyẹ̀wò?", options: ["$25", "$50", "$275", "$600"], answer: 1, why: "Ojú-ìwé ìforúkọsílẹ̀ àkọ́kọ́ kọ owó $50." },
      { objective: "O6", q: "Owó tí ń wọlé fún àjọ aláàánú kékeré kan kì í sábà ju $50,000 lọ. Ìwé ọdọọdún IRS wo ló sábà lè lò?", options: ["Form 1023", "Form 990-N e-Postcard", "Form CT-1", "Form ARTS-PB"], answer: 1, why: "IRS ń jẹ́ kí ọ̀pọ̀ ẹgbẹ́ kékeré tí ó wà nísàlẹ̀ iye yẹn fi 990-N sílẹ̀." },
      { objective: "O6", q: "Ọdún ìnáwó rẹ parí ní December 31. Ìgbà wo ni RRF-1 sábà máa ń wọlé?", options: ["January 1", "March 1", "May 15", "December 31"], answer: 2, why: "Ó máa ń wọlé ní oṣù 4 àti ọjọ́ 15 lẹ́yìn òpin ọdún, ìyẹn May 15." },
      { objective: "O6", q: "Pẹ̀lú owó tí a ṣàyẹ̀wò, nǹkan bí èló ni owó ìjọba fún ìbẹ̀rẹ̀ pẹ̀lú Form 1023-EZ, ṣáájú owó FTB èyíkéyìí?", options: ["Nǹkan bí $375", "Nǹkan bí $50", "Nǹkan bí $1,500", "Kò sí nǹkankan"], answer: 0, why: "$30 articles + $20 SI-100 + $275 1023-EZ + $50 CT-1 = $375, EIN sì jẹ́ ọ̀fẹ́." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: {
    title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?",
    from: [
      1,
      3,
      7,
      10,
      14,
      17,
      19
    ]
  },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      {
        name: "Ìwé ní ìtẹ̀léra",
        objective: "O1",
        notYet: "Ìwé kan kò sí, tàbí kò sí ní ìtẹ̀léra tó tọ́.",
        meets: "Gbogbo ìwé ìbẹ̀rẹ̀ wà ní ìtẹ̀léra tó tọ́ pẹ̀lú ọ́fíìsì wọn.",
        exceeds: "Ó ṣàlàyé ìdí tí ìtẹ̀léra fi ṣe pàtàkì fún ó kéré tán ìgbésẹ̀ méjì."
      },
      {
        name: "Fọ́ọ̀mù tó tọ́",
        objective: "O2",
        notYet: "Ó dárúkọ fọ́ọ̀mù tí kò tọ́, bí articles mutual benefit fún àjọ aláàánú.",
        meets: "Ìwé kọ̀ọ̀kan dárúkọ fọ́ọ̀mù tó tọ́, títí kan articles, SI-100, 1023 tàbí 1023-EZ, 3500 tàbí 3500A, àti CT-1.",
        exceeds: "Ó ṣàlàyé ìyàn láàárín 1023 àti 1023-EZ pẹ̀lú ìwé àyẹ̀wò ẹ̀tọ́."
      },
      {
        name: "Owó ìjọba àti ìjápọ̀",
        objective: "O6",
        notYet: "Owó kan jẹ́ àfojúdá, tàbí kò ní ìjápọ̀.",
        meets: "Gbogbo owó wá láti ojú-òpó ìjọba, pẹ̀lú ìjápọ̀, a sì ti ṣe àpapọ̀ owó ìbẹ̀rẹ̀.",
        exceeds: "Ó kọ ọjọ́ tí a ṣàyẹ̀wò owó kọ̀ọ̀kan."
      },
      {
        name: "Ọjọ́ tí a ṣètò",
        objective: "O5",
        notYet: "Kò sí ọjọ́ tí a ṣètò láti fi ìwé sílẹ̀, tàbí ọjọ́ 30 ti Registry àti ọjọ́ 90 ti SI-100 ti kọjá.",
        meets: "Ọjọ́ tí a ṣètò fún ìwé kọ̀ọ̀kan tí ó bá gbogbo ọjọ́ ìparí mu.",
        exceeds: "Ó dárúkọ ẹni tí ó ń bójú tó ìwé kọ̀ọ̀kan nínú ìgbìmọ̀."
      },
      {
        name: "Kàlẹ́ńdà ọdọọdún",
        objective: "O6",
        notYet: "Àwọn ìwé ọdọọdún kò sí.",
        meets: "Ìwé ọdọọdún IRS, RRF-1, Statement of Information ọdún méjì-méjì àti àwọn ìwé FTB, pẹ̀lú ọjọ́ ìparí wọn.",
        exceeds: "A ti fi ọjọ́ ìparí sí kàlẹ́ńdà bí ìrántí fún ìgbìmọ̀."
      }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn olùdásílẹ̀ tí wọ́n fi articles of incorporation sílẹ̀ láàárín ọjọ́ 90 (ìwádìí àtẹ̀lé)",
      "Àwọn àjọ tí wọ́n gba determination letter IRS tí wọ́n sì forúkọ sílẹ̀ ní Registry of Charities",
      "Àwọn àjọ tí wọ́n ṣì wà ní ipò rere lẹ́yìn ọdún kan, tí wọ́n ń fi ìwé ọdọọdún sílẹ̀ lásìkò"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Kọ̀mpútà tí ó ní íńtánẹ́ẹ̀tì",
      "Ìjápọ̀ sí àwọn ojú-òpó ìjọba: Secretary of State, IRS, Pay.gov, Franchise Tax Board àti Registry of Charities ti Attorney General",
      "Spreadsheet tàbí ìwé fún tábìlì ètò ìbẹ̀rẹ̀",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, pẹ̀lú àkókò láti ṣàyẹ̀wò owó lórí ojú-òpó ìjọba"
    ],
    facilitatorNotes: [
      "Jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣàyẹ̀wò gbogbo owó lórí ojú-òpó ìjọba nígbà ìpàdé, nítorí owó máa ń yí padà.",
      "Pe agbẹjọ́rò àjọ àìlérè tàbí olùyọ̀ǹda ara ẹni láti ibùdó ìrànlọ́wọ́ láti dáhùn ìbéèrè nípa ọ̀rọ̀ inú articles àti òfin ṣọ́ọ̀ṣì.",
      "Rán àwọn akẹ́kọ̀ọ́ létí láti má ṣe tẹ nọ́mbà Social Security tàbí ITIN sínú irinṣẹ́ AI tàbí email láéláé.",
      "Àwọn akẹ́kọ̀ọ́ tí kò ní àjọ àìlérè gidi lè ṣe ètò àṣeṣe fún àjọ aláàánú àpẹẹrẹ kan.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
