"use strict";

// Koach Learn course (Yoruba translation of africa-life/afr-clean-cooking.js). See scripts/koachlearn-courses/README.md, "Translations", and AFRICAN-LANGUAGES-BRIEF.md.

const WHO_HAP = { name: "Ìwé òtítọ́ WHO: Èéfín inú ilé (epo tó ń bàyíká jẹ́, ipa lórí ìlera, epo mímọ́, kẹrosíìnì)", url: "https://www.who.int/news-room/fact-sheets/detail/household-air-pollution-and-health" };
const WHO_BURNS = { name: "Ìwé òtítọ́ WHO: Iná jíjó ara (ìtọ́jú àkọ́kọ́ àti ìdènà nílé)", url: "https://www.who.int/news-room/fact-sheets/detail/burns" };
const WHO_CHEST = { name: "WHO: Clean Household Energy Solutions Toolkit (epo mímọ́, epo àárín àti epo tó ń bàyíká jẹ́)", url: "https://www.who.int/tools/clean-household-energy-solutions-toolkit" };
const CCA = { name: "Clean Cooking Alliance (àjọ fún oúnjẹ sísè láìsí èéfín)", url: "https://www.cleancooking.org/" };

module.exports = {
  id: "afr-clean-cooking-yo",
  lang: "yo",
  translationOf: "afr-clean-cooking",
  category: "Africa: Life and Work",
  name: "Oúnjẹ Sísè Láìsí Èéfín: Sítóòfù Tí Kò Léwu àti Ilé Ìdáná Tí Kò Ní Èéfín",
  skills: "Ṣíṣàlàyé bí èéfín oúnjẹ sísè ṣe ń ba ìlera jẹ́, Dídín èéfín kù nínú ilé ìdáná lónìí, Lílo iná, èédú, gáàsì àti kẹrosíìnì láìléwu, Fífi sítóòfù àti epo tó mọ́ wé ara wọn, Ṣíṣírò owó ìyípadà, Kíkọ ètò ààbò àti ìyípadà ilé ìdáná",
  outcome: "jẹ́ kí ilé ìdáná rẹ wà láìléwu, kí èéfín rẹ̀ sì dín kù: ṣàlàyé bí èéfín ṣe ń pa ẹbí rẹ lára, dín èéfín kù lónìí pẹ̀lú ohun tí o ní, lo iná, èédú, gáàsì àti kẹrosíìnì láìléwu, fi sítóòfù àti epo tó mọ́ wé ara wọn nípa owó àti ààbò, kí o sì kọ ètò tí gbogbo ilé gbà sí.",
  about: [
    "Ẹ̀kọ́ yìí wà fún ẹnikẹ́ni tí ó ń fi igi, èédú tàbí kẹrosíìnì se oúnjẹ, nílé tàbí nínú iṣẹ́ oúnjẹ kékeré, ní ìlú àti abúlé káàkiri Áfíríkà: àwọn ìyá, àwọn bàbá, àwọn ìyá àgbà, àwọn ọmọ tó ti dàgbà díẹ̀ tí wọ́n ń ràn lọ́wọ́ láti se oúnjẹ, àti àwọn olùtajà oúnjẹ.",
    "Orí 1 sọ nípa èéfín àti ààbò: bí èéfín oúnjẹ sísè ṣe ń ba ìlera jẹ́, bí o ṣe lè dín èéfín kù lónìí pẹ̀lú ohun tí o ti ní, àti bí o ṣe lè wà láìléwu pẹ̀lú iná, èédú, gáàsì àti kẹrosíìnì. Orí 2 sọ nípa yíyí padà sí oúnjẹ sísè tó mọ́: fífi sítóòfù àti epo wé ara wọn, ṣíṣírò owó, àti kíkọ ètò ilé ìdáná pẹ̀lú àwọn ará ilé rẹ.",
    "Ẹ̀kọ́ yìí tẹ̀lé ìmọ̀ràn World Health Organization (WHO, Àjọ Ìlera Àgbáyé). Kò dámọ̀ràn orúkọ ọjà kan tàbí olùtajà kan. Owó sítóòfù àti epo ń yí padà, ó sì yàtọ̀ láti ibì kan sí ibòmíì; gbogbo nọ́mbà owó nínú ẹ̀kọ́ yìí jẹ́ àpẹẹrẹ lásán, nítorí náà lo owó ti agbègbè rẹ. Ẹ̀kọ́ kọ̀ọ̀kan gba nǹkan bí ìṣẹ́jú márùn-ún. Ìdánwò ìmọ̀ wà lẹ́yìn orí kọ̀ọ̀kan, ìdánwò ìbéèrè 20 sì wà ní ìparí."
  ],
  finalTask: "Kọ ètò ààbò àti ìyípadà ilé ìdáná ojú-ewé kan fún ilé rẹ tàbí iṣẹ́ oúnjẹ rẹ (tàbí àpẹẹrẹ kan, bí ẹbí kan ní Kisumu tí ó ń se oúnjẹ lórí jiko èédú, olùtajà oúnjẹ kan ní Èkó tí ó ń lo igi, tàbí ẹbí kan ní Ouagadougou tí ó ń se oúnjẹ lórí ààrò olókùúta mẹ́ta): ohun tí o fi ń se oúnjẹ báyìí àti iye tí ó ń náni lóṣù; ìgbésẹ̀ mẹ́ta láti dín èéfín kù lọ́sẹ̀ yìí; àwọn òfin ààbò rẹ fún iná, èédú, gáàsì tàbí kẹrosíìnì àti àwọn ọmọdé; ọ̀nà méjì tó mọ́ tí o fi wé ara wọn nípa owó, bí epo ṣe ń wà àti ààbò; ohun tí o yàn, bí o ṣe máa sanwó rẹ̀, àti ọjọ́ tí o máa yí padà; àti àwọn ará ilé tí wọ́n gbà sí i.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Àwọn tí ń se oúnjẹ fún ilé tàbí fún iṣẹ́ oúnjẹ kékeré ní Kenya, Nàìjíríà, Ghana, Burkina Faso, Senegal, Cameroon, Egypt àti káàkiri Áfíríkà, tí wọ́n sábà máa ń lo igi, èédú tàbí kẹrosíìnì. Ọ̀pọ̀ lára wọn jẹ́ obìnrin àti ọmọbìnrin tí wọ́n tún ń wá igi, ọ̀pọ̀ sì ní fóònù lásán àti owó tí kò pọ̀.",
    startingPoint: "Ọ̀pọ̀ jù lọ ń se oúnjẹ lórí iná gbangba, ààrò olókùúta mẹ́ta, sítóòfù èédú tàbí sítóòfù kẹrosíìnì, nígbà púpọ̀ nínú ilé ìdáná kékeré tí afẹ́fẹ́ kò wọ̀ dáadáa. Ọ̀pọ̀ mọ̀ pé èéfín ń ta ojú wọn, ṣùgbọ́n wọn kò so ó pọ̀ mọ́ àìsàn àyà nínú àwọn ọmọdé. Àwọn díẹ̀ ló ti fi owó tí wọ́n ń ná lórí epo lóṣù wé owó sítóòfù tó mọ́, àwọn kan sì ń bẹ̀rù gáàsì.",
    gap: "WHO ka nǹkan bí bílíọ̀nù 2.1 ènìyàn kárí ayé tí wọ́n ń se oúnjẹ pẹ̀lú epo àti sítóòfù tó ń bàyíká jẹ́, àti mílíọ̀nù ikú lọ́dọọdún láti inú èéfín inú ilé; àwọn obìnrin àti àwọn ọmọ kékeré ló ń mí i jù. Iná gbangba, èédú àti kẹrosíìnì tún ń fa iná jíjó ara, májèlé carbon monoxide àti májèlé nínú àwọn ọmọdé. Àwọn akẹ́kọ̀ọ́ tí wọ́n dín èéfín kù, tí wọ́n ń se oúnjẹ láìléwu, tí wọ́n sì ṣètò ìyípadà ń dáàbò bo ìlera ẹbí wọn, wọ́n sì sábà máa ń fi àkókò àti owó pamọ́.",
    constraints: [
      "Ìpele kíkàwé: ọ̀rọ̀ tó rọrùn àti gbólóhùn kúkúrú; a ṣàlàyé gbogbo ọ̀rọ̀ tuntun",
      "Owó: kò pọ̀; ẹ̀kọ́ náà kò fún ni ní owó gidi láéláé, àpẹẹrẹ nìkan, àwọn akẹ́kọ̀ọ́ sì ń lo owó ti agbègbè wọn",
      "Bí epo ṣe ń wà yàtọ̀ láti ibì kan sí ibòmíì: gáàsì, iná mànàmáná àti sítóòfù tí a ṣe dáradára kò sí níbi gbogbo, nítorí náà àwọn akẹ́kọ̀ọ́ ń yan ohun tó bá wọn mu",
      "Ààbò: kò sí iṣẹ́ lórí páìpù gáàsì, wáyà iná mànàmáná tàbí ìlà iná ìjọba; àwọn akẹ́kọ̀ọ́ ń lo olùtajà tó ní ìwé àṣẹ, wọ́n sì ń tẹ̀lé ìtọ́ni ẹni tó ṣe é",
      "Kò sí ìmọ̀ràn ìtọ́jú ìṣègùn: iná jíjó ara àti ìṣòro mímí ẹ̀mí ni a máa ń gbé lọ sí ilé ìwòsàn"
    ],
    prerequisites: "Kò sí. Ìrọ̀pọ̀ àti ìsọdipúpọ̀ tó rọrùn máa ràn ọ́ lọ́wọ́ ní Ẹ̀kọ́ 5; ẹ̀rọ ìṣirò fóònù tó."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Tí a bá fún ọ ní ilé ìdáná tí ó ń lo igi, èédú tàbí kẹrosíìnì", action: "ṣàlàyé bí èéfín oúnjẹ sísè ṣe ń ba ìlera jẹ́ àti àwọn tí ó ń pa lára jù", standard: "kí o sì dárúkọ ó kéré tán ipa mẹ́ta lórí ìlera àti àwọn tí ó ń mí i jù" },
    { id: "O2", condition: "Pẹ̀lú sítóòfù àti epo tí o ní báyìí", action: "kọ àwọn ìgbésẹ̀ tí ó ń dín èéfín kù nínú ilé ìdáná rẹ lọ́sẹ̀ yìí sílẹ̀", standard: "pẹ̀lú ó kéré tán ìgbésẹ̀ mẹ́ta tí kò ná owó púpọ̀ tàbí tí kò ná owó rárá" },
    { id: "O3", condition: "Nígbà tí o bá ń se oúnjẹ pẹ̀lú iná, èédú, gáàsì tàbí kẹrosíìnì", action: "tẹ̀lé àwọn òfin ààbò tí ó ń dènà iná jíjó ara, májèlé carbon monoxide, iná gáàsì àti májèlé kẹrosíìnì", standard: "kí o sì yan ohun tí kò léwu ní ó kéré tán 4 nínú ipò 5" },
    { id: "O4", condition: "Tí a bá fún ọ ní ọ̀nà méjì tàbí jù bẹ́ẹ̀ lọ ti sítóòfù àti epo tí ó wà níbi tí o ń gbé", action: "fi sítóòfù àti epo tó mọ́ wé ara wọn nípa èéfín, owó, bí epo ṣe ń wà àti ààbò", standard: "pẹ̀lú ìdí tó tọ́ fún ọ̀nà tí o yàn" },
    { id: "O5", condition: "Pẹ̀lú owó tí o ń ná lórí epo àti owó ti agbègbè rẹ", action: "ṣírò owó epo rẹ lóṣù kí o sì fi wé owó ọ̀nà tó mọ́ jù", standard: "pẹ̀lú ìṣirò tó tọ́ àti àwọn ewu ìsanwó tí o dárúkọ" },
    { id: "O6", condition: "Pẹ̀lú àwọn ará ilé rẹ tàbí iṣẹ́ rẹ", action: "kọ ètò ààbò àti ìyípadà ilé ìdáná tí gbogbo ilé gbà sí", standard: "pẹ̀lú gbogbo apá rẹ̀ tí o kọ kún àti ọjọ́ ìyípadà" }
  ],
  chapters: [
    {
      name: "Orí 1: Èéfín àti ààbò nínú ilé ìdáná",
      lessons: [
        {
          title: "Bí èéfín oúnjẹ sísè ṣe ń pa ẹbí rẹ lára",
          objectives: ["O1"],
          minutes: 5,
          goal: "Ṣàlàyé bí èéfín oúnjẹ sísè ṣe ń ba ìlera jẹ́ àti àwọn tí ó ń pa lára jù.",
          text: [
            "Èéfín igi, èédú, pàǹtí oko, ìgbẹ́ ẹran àti kẹrosíìnì kún fún èérún kéékèèké àti gáàsì. O kò lè rí ọ̀pọ̀ jù lọ wọn, ṣùgbọ́n wọ́n ń wọ inú ẹ̀dọ̀fóró lọ jìnnà. A ń pè é ní èéfín inú ilé (household air pollution).",
            "WHO sọ pé èéfín inú ilé ń fa pneumonia (òtútù àyà) àti àwọn àrùn àyà míì nínú àwọn ọmọdé, àti àrùn ẹ̀gbà (stroke), àrùn ọkàn, àrùn ẹ̀dọ̀fóró pípẹ́ àti jẹjẹrẹ ẹ̀dọ̀fóró nínú àwọn àgbàlagbà. Wọ́n tún so ó pọ̀ mọ́ ọmọ tí ìwọ̀n rẹ̀ kéré nígbà ìbí àti àrùn ojú. WHO ka nǹkan bí bílíọ̀nù 2.1 ènìyàn kárí ayé tí wọ́n ń se oúnjẹ pẹ̀lú epo àti sítóòfù tó ń bàyíká jẹ́, ọ̀pọ̀ jù lọ wọn ní Áfíríkà àti Éṣíà.",
            "Àwọn obìnrin àti àwọn ọmọ kékeré ló ń mí èéfín jù, nítorí wọ́n ń lo àkókò tó pọ̀ jù nítòsí iná, ìyá sì sábà máa ń pọn ọmọ ọwọ́ sẹ́yìn nígbà tí ó ń se oúnjẹ. Àwọn ọmọbìnrin àti obìnrin tún ń pàdánù wákàtí púpọ̀ nínú wíwá igi, àkókò tí ì bá lọ sí ilé-ìwé, iṣẹ́ tàbí ìsinmi.",
            "Èéfín tí o kò rí ṣì ń pani lára. Òórùn èéfín, ojú tí ó ń ta, ikọ́ nígbà oúnjẹ sísè, àti ògiri tàbí òrùlé tí ó ti dúdú jẹ́ àmì pé ẹbí rẹ ń mí èéfín jù."
          ],
          words: [["Èéfín inú ilé (household air pollution)", "èéfín àti gáàsì nínú ilé àti yí ilé ká, tí ó sábà máa ń wá láti inú oúnjẹ sísè, ìgbóná àti iná ìtànná pẹ̀lú epo tó ń bàyíká jẹ́."], ["Epo tó ń bàyíká jẹ́", "epo tí ó ń mú èéfín púpọ̀ jáde nígbà tí a bá sun ún nínú sítóòfù lásán: igi, èédú, pàǹtí oko, ìgbẹ́ ẹran, èédú ilẹ̀ (coal) àti kẹrosíìnì."], ["Pneumonia", "àrùn àyà tó le gan-an (òtútù àyà); ó wà lára ohun tí ó ń pa àwọn ọmọ kékeré jù."]],
          slides: [
            { title: "Ohun tí ó wà nínú èéfín", bullets: ["Èérún kéékèèké àti gáàsì", "Wọ́n ń wọ inú ẹ̀dọ̀fóró lọ jìnnà", "O kò lè rí ọ̀pọ̀ jù lọ wọn"] },
            { title: "Bí ó ṣe ń pani lára (WHO)", bullets: ["Ọmọdé: pneumonia àti àrùn àyà", "Àgbàlagbà: stroke, àrùn ọkàn àti ẹ̀dọ̀fóró, jẹjẹrẹ ẹ̀dọ̀fóró", "Ó ní í ṣe pẹ̀lú ìwọ̀n ọmọ tí ó kéré nígbà ìbí àti àrùn ojú"] },
            { title: "Àwọn tí ó ń mí i jù", bullets: ["Àwọn obìnrin tí ó ń se oúnjẹ", "Ọmọ ọwọ́ lẹ́yìn ìyá àti àwọn ọmọ kékeré", "Àwọn ọmọbìnrin tí ó ń wá igi ń pàdánù àkókò ilé-ìwé"] },
            { title: "Àmì pé èéfín ti pọ̀ jù", bullets: ["Ojú tí ó ń ta, ikọ́ nígbà oúnjẹ sísè", "Ògiri tàbí òrùlé tí ó ti dúdú", "Òórùn èéfín nínú aṣọ"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Wo ilé ìdáná rẹ nígbà oúnjẹ kan. Kọ bí iná ṣe pẹ́ tó, àwọn tí ó wà nítòsí rẹ̀, bóyá ọmọ ọwọ́ tàbí ọmọ kékeré wà níbẹ̀, àti àwọn àmì èéfín tí o rí. Kọ ọ̀nà mẹ́ta tí èéfín náà lè gbà pa ẹbí rẹ lára.",
          youCanNow: "ṣàlàyé bí èéfín oúnjẹ sísè ṣe ń ba ìlera jẹ́ àti ẹni tí ó ń mí i jù nínú ilé rẹ.",
          quickCheck: [
            { objective: "O1", q: "Àìsàn wo nínú àwọn ọmọ kékeré ni WHO so pọ̀ mọ́ èéfín oúnjẹ sísè?", options: ["Pneumonia àti àrùn àyà", "Egungun kíkán", "Ehín dídùn", "Ṣàǹpọ̀nná adìyẹ (chickenpox)"], answer: 0, why: "Èéfín inú ilé ń fa àrùn ọ̀nà èémí ìsàlẹ̀ bí pneumonia." },
            { objective: "O1", q: "Ta ló sábà máa ń mí èéfín oúnjẹ sísè jù?", options: ["Àwọn àlejò", "Àwọn ọkùnrin tí ó ń ṣiṣẹ́ lóko", "Àwọn obìnrin tí ó ń se oúnjẹ àti àwọn ọmọ kékeré tí ó wà nítòsí wọn", "Kò sí ẹnìkan; èéfín ń lọ sókè"], answer: 2, why: "Àwọn obìnrin àti ọmọ kékeré ló ń lo àkókò tó pọ̀ jù nítòsí iná." }
          ]
        },
        {
          title: "Dídín èéfín kù lónìí pẹ̀lú ohun tí o ní",
          objectives: ["O2"],
          minutes: 5,
          goal: "Kọ àwọn ìgbésẹ̀ tí ó ń dín èéfín kù nínú ilé ìdáná rẹ lọ́sẹ̀ yìí, pẹ̀lú sítóòfù tí o ní báyìí.",
          text: [
            "Sítóòfù tuntun ló ń ràn jù, ṣùgbọ́n o lè dín èéfín kù lónìí. Jẹ́ kí afẹ́fẹ́ wọlé, kí èéfín sì jáde: se oúnjẹ níta tàbí lábẹ́ àtíbàbà tí o bá lè ṣe é, ṣí ilẹ̀kùn àti fèrèsé sílẹ̀ nígbà oúnjẹ sísè, tí o bá sì lè ṣe é, ṣe fèrèsé, àlàfo lábẹ́ òrùlé tàbí ihò èéfín nítòsí iná.",
            "Sun díẹ̀, kí o sì sun ún dáadáa. Lo igi gbígbẹ: igi tútù ń mú èéfín púpọ̀ jáde. Là igi sí wẹ́wẹ́, kí o sì máa tì í wọlé díẹ̀díẹ̀. Fi ìdérí bo ìkòkò, rẹ ẹ̀wà àti àgbàdo sínú omi kí o tó sè wọ́n, kí o sì pa iná ní kété tí oúnjẹ bá ti jinná.",
            "Jẹ́ kí àwọn ọmọdé jìnnà. Jẹ́ kí àwọn ọmọ ọwọ́ àti ọmọ kékeré wà níta ilé ìdáná nígbà tí iná bá ń jó, má sì ṣe se oúnjẹ pẹ̀lú ọmọ ọwọ́ lẹ́yìn rẹ tí ẹlòmíì bá lè gbé ọmọ náà.",
            "Má ṣe sun ọ̀rá (plastic), rọ́bà tàbí igi tí wọ́n ti kun láéláé: èéfín wọn jẹ́ májèlé."
          ],
          steps: ["Jẹ́ kí afẹ́fẹ́ wọlé: se oúnjẹ níta tàbí ṣí ilẹ̀kùn àti fèrèsé.", "Lo igi gbígbẹ tí o là wẹ́wẹ́, kí o sì máa tì í wọlé díẹ̀díẹ̀.", "Bo ìkòkò; kọ́kọ́ rẹ ẹ̀wà àti àgbàdo sínú omi.", "Pa iná nígbà tí oúnjẹ bá ti jinná.", "Jẹ́ kí ọmọ ọwọ́ àti ọmọ kékeré jìnnà sí èéfín."],
          words: [["Afẹ́fẹ́ wíwọlé (ventilation)", "jíjẹ́ kí afẹ́fẹ́ tútù wọlé, kí afẹ́fẹ́ tí ó ní èéfín sì jáde."], ["Àlàfo lábẹ́ òrùlé (eave gap)", "ihò tí ó wà láàárín òkè ògiri àti òrùlé tí ó ń jẹ́ kí èéfín jáde."]],
          slides: [
            { title: "Jẹ́ kí afẹ́fẹ́ wọlé, kí èéfín jáde", bullets: ["Se oúnjẹ níta tàbí lábẹ́ àtíbàbà", "Ṣí ilẹ̀kùn àti fèrèsé", "Ṣe fèrèsé tàbí àlàfo lábẹ́ òrùlé nítòsí iná"] },
            { title: "Sun díẹ̀, sun ún dáadáa", bullets: ["Igi gbígbẹ, tí ó tẹ́ẹ́rẹ́", "Ìdérí lórí ìkòkò; rẹ ẹ̀wà àti àgbàdo", "Pa iná nígbà tí oúnjẹ bá ti jinná"] },
            { title: "Dáàbò bo àwọn ọmọdé", bullets: ["Jẹ́ kí wọ́n wà níta ilé ìdáná tí èéfín wà", "Kí ẹlòmíì gbé ọmọ ọwọ́", "Má ṣe sun ọ̀rá tàbí rọ́bà láéláé"] }
          ],
          sources: [WHO_HAP],
          tryIt: "Yan ìgbésẹ̀ mẹ́ta láti inú ẹ̀kọ́ yìí tí o lè bẹ̀rẹ̀ lọ́sẹ̀ yìí láìná owó tàbí pẹ̀lú owó díẹ̀ gan-an. Kọ wọ́n sílẹ̀, gbìyànjú wọn fún ọjọ́ mẹ́ta, kí o sì kọ ohun tí ó yí padà (èéfín tí ó dín kù, igi tí ó dín kù, àkókò tí ó dín kù).",
          youCanNow: "dín èéfín kù nínú ilé ìdáná rẹ pẹ̀lú àwọn ìgbésẹ̀ tí kò ná owó púpọ̀ tàbí tí kò ná owó rárá.",
          quickCheck: [
            { objective: "O2", q: "Igi wo ló ń mú èéfín tí ó kéré jù jáde?", options: ["Igi tútù, tí ó ṣẹ̀ṣẹ̀ gé", "Igi ńlá tí a tì wọlé lẹ́ẹ̀kan náà", "Igi tí a ti kun láti ara ilẹ̀kùn àtijọ́", "Igi gbígbẹ, tí ó tẹ́ẹ́rẹ́, tí a ń tì wọlé díẹ̀díẹ̀"], answer: 3, why: "Igi gbígbẹ, tí ó tẹ́ẹ́rẹ́ ń jó dáadáa jù, ó sì ń mú èéfín díẹ̀ jáde." },
            { objective: "O2", q: "Ìgbésẹ̀ wo ló ń dín èéfín àti epo kù lẹ́ẹ̀kan náà?", options: ["Sísè oúnjẹ pẹ̀lú ìdérí lórí ìkòkò", "Fífi iná sílẹ̀ kí ó máa jó lẹ́yìn oúnjẹ sísè", "Títi fèrèsé", "Sísun ọ̀rá láti dá iná"], answer: 0, why: "Ìdérí ń jẹ́ kí oúnjẹ yára jinná, nítorí náà o ń sun epo díẹ̀, èéfín sì ń dín kù." }
          ]
        },
        {
          title: "Wíwà láìléwu pẹ̀lú iná, èédú, gáàsì àti kẹrosíìnì",
          objectives: ["O3"],
          minutes: 6,
          goal: "Tẹ̀lé àwọn òfin ààbò tí ó ń dènà iná jíjó ara, májèlé carbon monoxide, iná gáàsì àti májèlé kẹrosíìnì.",
          text: [
            "Iná jíjó ara: jẹ́ kí sítóòfù dúró dáadáa, tí o bá sì lè ṣe é, gbé e sókè kúrò ní ilẹ̀, kí o sì fi ààbò yí iná gbangba ká. Yí ọwọ́ ìkòkò sí inú. Jẹ́ kí àwọn ọmọdé jìnnà sí ibi oúnjẹ sísè. Tí iná bá jó ẹnìkan, ìtọ́jú àkọ́kọ́ WHO ni: dá jíjó náà dúró, fi omi tútù tí ó ń ṣàn tu ojú ọgbẹ́ náà (nǹkan bí ìṣẹ́jú 20 fún ọgbẹ́ kékeré), bọ́ òrùka àti aṣọ tí ó há, kí o sì fi aṣọ mímọ́ bò ó. Má ṣe fi bọ́tà, epo, ọṣẹ ìfọyín tàbí oògùn ìbílẹ̀ pa á. Lọ sí ilé ìwòsàn fún ọgbẹ́ iná tí ó tóbi tàbí tí ó jìn, tàbí èyí tí ó wà lójú, lọ́wọ́, lẹ́sẹ̀ tàbí ní ibi ìkọ̀kọ̀.",
            "Èédú: sítóòfù èédú tí ó ń jó ń mú carbon monoxide jáde, gáàsì tí o kò lè rí tàbí gbọ́ òórùn rẹ̀, tí ó sì lè pani. Má ṣe gbé sítóòfù èédú tí ó ń jó wọ yàrá tí a tì láti se oúnjẹ tàbí láti mú yàrá gbóná, má sì sùn pẹ̀lú rẹ̀ nínú ilé láéláé. Orí fífọ́, òòyì àti oorun nítòsí sítóòfù jẹ́ àmì ìkìlọ̀: mú gbogbo ènìyàn jáde sí afẹ́fẹ́ tútù.",
            "Gáàsì (LPG): ra sílíńdà lọ́wọ́ olùtajà tó ní ìwé àṣẹ, jẹ́ kí sílíńdà dúró ṣánṣán, kí o sì ṣàyẹ̀wò òpó (hose) àti regulator. Tí o bá gbọ́ òórùn gáàsì: má ṣe tan ìṣáná tàbí tẹ ìyípadà (switch) kankan, pa ẹnu sílíńdà, ṣí ilẹ̀kùn àti fèrèsé, kí o sì mú àwọn ènìyàn jáde síta. Pa ẹnu sílíńdà lẹ́yìn oúnjẹ sísè.",
            "Kẹrosíìnì: WHO kò gbà kí a lo kẹrosíìnì fún oúnjẹ sísè àti iná ìtànná, gbígbé kẹrosíìnì mì sì wà lára ohun tí ó ń fa májèlé jù nínú àwọn ọmọdé. Fi í sínú ohun èlò tí a dé, tí a sì kọ orúkọ sí, kì í ṣe nínú ìgò ohun mímu láéláé, kí ó sì jìnnà sí ọwọ́ àwọn ọmọdé. Tí ọmọ kan bá gbé e mì, lọ sí ilé ìwòsàn nísinsìnyí."
          ],
          steps: ["Jẹ́ kí sítóòfù dúró dáadáa kí àwọn ọmọdé sì jìnnà; yí ọwọ́ ìkòkò sí inú.", "Má ṣe lo èédú nínú yàrá tí a tì tàbí nígbà oorun láéláé.", "Gáàsì: olùtajà tó ní ìwé àṣẹ, sílíńdà tí ó dúró ṣánṣán, pa ẹnu rẹ̀ lẹ́yìn oúnjẹ sísè.", "Òórùn gáàsì: kò sí iná tàbí switch, pa ẹnu sílíńdà, ṣí sílẹ̀, jáde.", "Kẹrosíìnì: ohun èlò tí a kọ orúkọ sí, kì í ṣe ìgò ohun mímu, kúrò lọ́wọ́ ọmọdé."],
          words: [["Carbon monoxide", "gáàsì olóró láti inú epo tí a ń sun; o kò lè rí i, o kò sì lè gbọ́ òórùn rẹ̀."], ["LPG", "liquefied petroleum gas: gáàsì ìdáná tí wọ́n ń tà nínú sílíńdà."], ["Regulator", "ohun tí ó wà lórí sílíńdà gáàsì tí ó ń ṣàkóso gáàsì tí ó ń lọ sí sítóòfù."]],
          slides: [
            { title: "Iná jíjó ara", bullets: ["Sítóòfù tí ó dúró dáadáa, ọwọ́ ìkòkò sí inú, ọmọdé jìnnà", "Ìtọ́jú àkọ́kọ́: omi tútù tí ó ń ṣàn nǹkan bí ìṣẹ́jú 20, aṣọ mímọ́", "Kò sí bọ́tà, epo tàbí oògùn ìpara; ọgbẹ́ ńlá lọ sí ilé ìwòsàn"] },
            { title: "Èédú", bullets: ["Ó ń mú carbon monoxide jáde: kò ní àwọ̀, kò ní òórùn", "Kò gbọdọ̀ wà nínú yàrá tí a tì; kò gbọdọ̀ wà nígbà oorun", "Orí ń fọ́ tàbí òòyì ń kọ́ ọ nítòsí rẹ̀: jáde sí afẹ́fẹ́ tútù"] },
            { title: "Gáàsì (LPG)", bullets: ["Olùtajà tó ní ìwé àṣẹ; sílíńdà dúró ṣánṣán", "Òórùn gáàsì: kò sí iná tàbí switch, pa ẹnu rẹ̀, ṣí sílẹ̀, jáde", "Pa ẹnu sílíńdà lẹ́yìn oúnjẹ sísè"] },
            { title: "Kẹrosíìnì", bullets: ["WHO kò gbà á nímọ̀ràn", "Ohun èlò tí a kọ orúkọ sí, kì í ṣe ìgò ohun mímu", "Ọmọ gbé e mì: ilé ìwòsàn nísinsìnyí"] }
          ],
          sources: [WHO_BURNS, WHO_HAP],
          tryIt: "Rìn yí ilé ìdáná rẹ ká, kí o sì kọ òfin ààbò márùn-ún fún ilé rẹ: ọ̀kan fún iná jíjó ara àti àwọn ọmọdé, ọ̀kan fún èédú, ọ̀kan fún gáàsì tàbí kẹrosíìnì (èyí tí o bá ń lò), ọ̀kan fún bí a ṣe ń tọ́jú epo pamọ́, àti ọ̀kan fún ohun tí a máa ṣe ní àkókò pàjáwìrì, pẹ̀lú ilé ìwòsàn tí ó sún mọ́ ọ jù.",
          youCanNow: "se oúnjẹ láìléwu pẹ̀lú iná, èédú, gáàsì àti kẹrosíìnì, kí o sì gbé ìgbésẹ̀ kíákíá tí nǹkan kan bá ṣẹlẹ̀.",
          quickCheck: [
            { objective: "O3", q: "Òtútù mú ní Ouagadougou lóru. Ṣé kò léwu láti gbé sítóòfù èédú tí ó ń jó wọ yàrá ìsùn tí a tì?", options: ["Bẹ́ẹ̀ ni, tí ilẹ̀kùn bá ti", "Bẹ́ẹ̀ ni, tí èédú bá dára", "Bẹ́ẹ̀ ni, tí o bá sùn jìnnà sí i", "Rárá: ó ń mú carbon monoxide jáde, èyí tí ó lè pani"], answer: 3, why: "Carbon monoxide ń kóra jọ nínú yàrá tí a tì, ó sì lè pa àwọn tí ó ń sùn." },
            { objective: "O3", q: "O gbọ́ òórùn gáàsì nínú ilé ìdáná. Kí ni o máa kọ́kọ́ ṣe?", options: ["Tan ìṣáná láti wá ibi tí ó ti ń jò", "Pa ẹnu sílíńdà kí o sì ṣí ilẹ̀kùn àti fèrèsé", "Tan iná mànàmáná", "Má ka á sí"], answer: 1, why: "Kò sí iná tàbí switch; pa gáàsì kí o sì jẹ́ kí ó jáde." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 1: Èéfín àti ààbò nínú ilé ìdáná",
        questions: [
          { objective: "O1", q: "Àìsàn àgbàlagbà wo ni WHO so pọ̀ mọ́ èéfín inú ilé?", options: ["Stroke àti àrùn ọkàn", "Ibà", "Ibà jẹ̀funjẹ̀fun (typhoid)", "Egungun kíkán"], answer: 0, why: "WHO dárúkọ stroke, àrùn ọkàn, àrùn ẹ̀dọ̀fóró àti jẹjẹrẹ ẹ̀dọ̀fóró." },
          { objective: "O1", q: "Yàtọ̀ sí èéfín, kí ló dé tí àwọn ọmọbìnrin fi ń pàdánù nínú oúnjẹ sísè pẹ̀lú igi?", options: ["Wọ́n ń rí owó púpọ̀ sí i", "Wọ́n ń pàdánù àkókò nínú wíwá igi, èyí tí ó lè gbà wọ́n ní ilé-ìwé", "Wọ́n ń sùn púpọ̀ sí i", "Kò kàn wọ́n"], answer: 1, why: "Wíwá epo ń gba àkókò ilé-ìwé àti iṣẹ́." },
          { objective: "O2", q: "Ìgbésẹ̀ wo ló ń dín èéfín kù nínú ilé ìdáná lónìí?", options: ["Títi gbogbo fèrèsé", "Lílo igi tútù", "Sísè oúnjẹ níta tàbí ṣíṣí ilẹ̀kùn àti fèrèsé", "Sísun ọ̀rá àtijọ́"], answer: 2, why: "Afẹ́fẹ́ wíwọlé ń jẹ́ kí èéfín jáde." },
          { objective: "O3", q: "Ọbẹ̀ gbígbóná jó ọmọ kan ní Yaoundé. Kí ni ìtọ́jú àkọ́kọ́ tó tọ́?", options: ["Fi bọ́tà pa á", "Fi ọṣẹ ìfọyín bò ó", "Fọ́ àwọn ọgbẹ́ olómi", "Fi omi tútù tí ó ń ṣàn tu ú, kí o sì fi aṣọ mímọ́ bò ó"], answer: 3, why: "Ìtọ́jú àkọ́kọ́ WHO ni omi tútù tí ó ń ṣàn àti ìbòrí mímọ́; kò sí bọ́tà tàbí ìpara." },
          { objective: "O3", q: "Níbo ni ó yẹ kí a tọ́jú kẹrosíìnì sí?", options: ["Nínú ohun èlò tí a dé, tí a kọ orúkọ sí, tí ó jìnnà sí ọwọ́ ọmọdé", "Nínú ìgò ohun mímu àtijọ́", "Lórí ilẹ̀ lẹ́gbẹ̀ẹ́ ibùsùn", "Nínú ife lórí tábìlì"], answer: 0, why: "Àwọn ọmọdé máa ń mu kẹrosíìnì láti inú ìgò ohun mímu àti ife; ó wà lára ohun tí ó ń fa májèlé jù nínú ọmọdé." }
        ]
      }
    },
    {
      name: "Orí 2: Yíyí padà sí oúnjẹ sísè tó mọ́",
      lessons: [
        {
          title: "Sítóòfù àti epo tó mọ́ jù",
          objectives: ["O4"],
          minutes: 6,
          goal: "Fi sítóòfù àti epo tó mọ́ wé ara wọn nípa èéfín, owó, bí epo ṣe ń wà àti ààbò.",
          text: [
            "WHO dárúkọ àwọn ọ̀nà tó mọ́ jù: oòrùn (solar), iná mànàmáná, biogas, LPG (gáàsì ìdáná), gáàsì àdánidá, epo ọtí bí ethanol, àti sítóòfù igi tí ó dé ìwọ̀n èéfín tí WHO ṣètò. WHO kò gbà kí a lo kẹrosíìnì àti èédú ilẹ̀ (coal) tí a kò ṣe lọ́jọ̀.",
            "Sítóòfù igi tàbí èédú tí a ṣe dáradára (improved cookstove) ń sun epo díẹ̀, ó sì ń mú èéfín díẹ̀ jáde ju ààrò olókùúta mẹ́ta tàbí iná gbangba lọ. Ìtẹ̀síwájú ni wọ́n, ṣùgbọ́n ọ̀pọ̀ jù lọ wọn ṣì ń mú èéfín púpọ̀ jáde, nítorí náà jẹ́ kí afẹ́fẹ́ máa wọ ilé ìdáná dáadáa. Béèrè lọ́wọ́ olùtajà bóyá wọ́n ti dán irú sítóòfù náà wò.",
            "Oúnjẹ sísè pẹ̀lú gáàsì (LPG) àti iná mànàmáná fẹ́rẹ̀ẹ́ má mú èéfín kankan jáde nínú ilé ìdáná. Ìkòkò ìfúnpá oníná mànàmáná (electric pressure cooker) tàbí hot plate lè má ná owó púpọ̀ láti lò níbi tí iná mànàmáná ti ń wà déédéé, ó sì dára fún ẹ̀wà àti ọbẹ̀. Biogas bá oko tí ó ní màlúù àti ààyè fún digester mu. Ohun ìdáná tí ó ń mú ooru dúró (retained-heat cooker, apẹ̀rẹ̀ tàbí àpótí tí a dì dáadáa) ń parí oúnjẹ sísè láìlo epo míì, ó sì ń ṣiṣẹ́ pẹ̀lú sítóòfù èyíkéyìí.",
            "Yan ohun tí ó bá ibi tí o wà mu: Ṣé wọ́n ń ta epo náà nítòsí rẹ ní gbogbo ọdún? Ṣé o lè sanwó láti tún un kún? Ṣé kò léwu fún ilé rẹ? Ní ọ̀pọ̀ ìlú, gáàsì tàbí iná mànàmáná lè bá a mu; ní abúlé tí ó jìnnà sí ibi tí wọ́n ti ń tà á, sítóòfù tí a ṣe dáradára pẹ̀lú afẹ́fẹ́ tí ó ń wọlé dáadáa lè jẹ́ ìgbésẹ̀ àkọ́kọ́."
          ],
          steps: ["Kọ àwọn sítóòfù àti epo tí wọ́n ń tà nítòsí rẹ sílẹ̀.", "Fún ọ̀kọ̀ọ̀kan, kọ èéfín rẹ̀ (púpọ̀, díẹ̀, ó fẹ́rẹ̀ẹ́ má sí).", "Kọ bí epo ṣe ń wà: nígbà gbogbo, nígbà míì, kò fi bẹ́ẹ̀ sí.", "Kọ ohun tí ààbò nílò, owó ìbẹ̀rẹ̀ àti owó ìlò.", "Yan ọ̀nà tó mọ́ jù tí epo rẹ̀ ń wà, tí o sì lè san owó rẹ̀."],
          words: [["Sítóòfù tí a ṣe dáradára (improved cookstove)", "sítóòfù igi tàbí èédú tí a ṣe láti sun epo díẹ̀ àti láti mú èéfín díẹ̀ jáde ju iná gbangba lọ."], ["Biogas", "gáàsì tí a ṣe láti inú ìgbẹ́ ẹran àti pàǹtí ewéko nínú táǹkì tí a dé tí a ń pè ní digester."], ["Ohun ìdáná tí ó ń mú ooru dúró (retained-heat cooker)", "apẹ̀rẹ̀ tàbí àpótí tí a dì tí ó ń jẹ́ kí ìkòkò gbígbóná máa se oúnjẹ lọ láìlo epo míì."]],
          slides: [
            { title: "Àwọn ọ̀nà tó mọ́ jù (WHO)", bullets: ["Oòrùn, iná mànàmáná, biogas, LPG, gáàsì àdánidá, ethanol", "Sítóòfù igi tí ó dé ìwọ̀n èéfín WHO", "WHO kò gbà kẹrosíìnì àti coal nímọ̀ràn"] },
            { title: "Sítóòfù igi àti èédú tí a ṣe dáradára", bullets: ["Epo díẹ̀ àti èéfín díẹ̀ ju iná gbangba lọ", "Ó ṣì ní èéfín: jẹ́ kí afẹ́fẹ́ máa wọlé", "Béèrè bóyá wọ́n ti dán irú rẹ̀ wò"] },
            { title: "Gáàsì àti iná mànàmáná", bullets: ["Ó fẹ́rẹ̀ẹ́ má sí èéfín nínú ilé ìdáná", "Electric pressure cooker: ó dára fún ẹ̀wà àti ọbẹ̀", "Retained-heat cooker ń fi epo pamọ́ pẹ̀lú sítóòfù èyíkéyìí"] },
            { title: "Yan ohun tí ó bá ọ mu", bullets: ["Ṣé wọ́n ń ta epo náà nítòsí rẹ ní gbogbo ọdún?", "Ṣé o lè sanwó láti tún un kún?", "Ṣé kò léwu fún ilé rẹ?"] }
          ],
          sources: [WHO_HAP, WHO_CHEST, CCA],
          tryIt: "Béèrè ní ọjà, ṣọ́ọ̀bù tàbí lọ́wọ́ olùtajà gáàsì nítòsí rẹ irú sítóòfù àti epo tí wọ́n ń tà. Ṣe tábìlì kékeré ti ọ̀nà méjì tàbí mẹ́ta pẹ̀lú ìlà mẹ́rin: èéfín, bí epo ṣe ń wà, ohun tí ààbò nílò, àti owó (lo owó gidi tí wọ́n sọ fún ọ).",
          youCanNow: "fi sítóòfù àti epo tó mọ́ wé ara wọn nípa èéfín, owó, bí epo ṣe ń wà àti ààbò, kí o sì yan èyí tí ó bá ọ mu.",
          quickCheck: [
            { objective: "O4", q: "Èwo nínú ìwọ̀nyí ni WHO kà sí epo ìdáná tó mọ́?", options: ["Kẹrosíìnì", "Coal tí a kò ṣe lọ́jọ̀", "LPG (gáàsì ìdáná)", "Pàǹtí ọ̀rá"], answer: 2, why: "WHO ka LPG, iná mànàmáná, biogas, oòrùn àti ethanol mọ́ epo tó mọ́." },
            { objective: "O4", q: "Ẹbí kan ní abúlé tí ó jìnnà sí olùtajà gáàsì kankan fẹ́ kí èéfín dín kù báyìí. Kí ni ìgbésẹ̀ àkọ́kọ́ tí ó yè kooro?", options: ["Sítóòfù tí a ṣe dáradára pẹ̀lú afẹ́fẹ́ tí ó ń wọlé dáadáa", "Ra sílíńdà gáàsì tí wọn kò lè tún kún", "Yí padà sí kẹrosíìnì", "Se oúnjẹ nínú ilé pẹ̀lú fèrèsé tí a tì"], answer: 0, why: "Sítóòfù tí a ṣe dáradára pẹ̀lú afẹ́fẹ́ wíwọlé ń dín èéfín kù níbi tí epo tó mọ́ kò tíì dé." }
          ]
        },
        {
          title: "Ṣíṣírò owó àti sísanwó fún ìyípadà",
          objectives: ["O5"],
          minutes: 6,
          goal: "Ṣírò owó epo rẹ lóṣù kí o sì fi wé owó ọ̀nà tó mọ́ jù.",
          text: [
            "Ọ̀pọ̀ ẹbí rò pé oúnjẹ sísè tó mọ́ wọ́n jù, ṣùgbọ́n wọn kò ṣírò iye tí wọ́n ti ń ná tẹ́lẹ̀ rí. Kọ iye tí o ń ná lórí igi, èédú tàbí kẹrosíìnì ní ọ̀sẹ̀ kan lásán, kí o sì fi 4 sọ ọ́ di púpọ̀ láti rí owó oṣù kan ní ìwọ̀nba. Tí o bá ń wá igi fúnra rẹ, ka àwọn wákàtí tí o ń lò pẹ̀lú.",
            "Fún ọ̀nà tó mọ́ jù, ka owó méjì: owó ìbẹ̀rẹ̀ (sítóòfù, sílíńdà àti regulator) àti owó ìlò (owó àtúnkún tàbí iná mànàmáná lóṣooṣù). Lẹ́yìn náà fi owó ìlò wé ohun tí o ń ná báyìí, kí o sì ṣírò oṣù mélòó ni yóò gbà kí owó tí o fi pamọ́ san owó ìbẹ̀rẹ̀ padà.",
            "Àpẹẹrẹ pẹ̀lú nọ́mbà àhùsọ, kì í ṣe owó gidi: ẹbí kan ní Kisumu ń ná KES 300 lọ́sẹ̀ lórí èédú, nǹkan bí KES 1,200 lóṣù. Ọ̀nà tó mọ́ jù ń ná KES 900 lóṣù láti lò àti KES 3,600 ní ìbẹ̀rẹ̀. Wọ́n ń fi KES 300 pamọ́ lóṣù, nítorí náà owó ìbẹ̀rẹ̀ máa padà ní oṣù 12 (3,600 pín sí 300). Lo owó ti agbègbè rẹ.",
            "Ọ̀nà láti sanwó: máa fi owó díẹ̀ pamọ́ lọ́sẹ̀, ẹ jọ ra á nípasẹ̀ ẹgbẹ́ ìfowópamọ́ bí àjọ, chama, tontine tàbí èsúsú, tàbí béèrè nípa ètò pay-as-you-go fún gáàsì tàbí sítóòfù tí ó wà ní agbègbè rẹ. Kí o tó fọwọ́ sí i, béèrè owó rẹ̀ lápapọ̀, ohun tí ó máa ṣẹlẹ̀ tí o bá kùnà láti san ìdá kan, àti ẹni tí ó máa tún un ṣe. Má ṣe san owó fún àjèjì tí ó ṣèlérí sítóòfù ọ̀fẹ́ tí o bá kọ́kọ́ san owó kan, kí o sì ra gáàsì lọ́wọ́ olùtajà tó ní ìwé àṣẹ nìkan."
          ],
          steps: ["Kọ iye tí o ń ná lórí epo lọ́sẹ̀, kí o sì fi 4 sọ ọ́ di púpọ̀.", "Kọ owó ìbẹ̀rẹ̀ àti owó oṣooṣù ti ọ̀nà tó mọ́ jù.", "Yọ ọ̀kan kúrò lára èkejì láti rí owó tí o ń fi pamọ́ lóṣù (tàbí owó àfikún).", "Pín owó ìbẹ̀rẹ̀ sí owó tí o ń fi pamọ́ lóṣù láti rí oṣù mélòó ni yóò gbà kí ó padà.", "Yan bí o ṣe máa sanwó, kí o sì ṣàyẹ̀wò àwọn òfin rẹ̀."],
          words: [["Owó ìbẹ̀rẹ̀", "owó tí o ń san lẹ́ẹ̀kan ní ìbẹ̀rẹ̀, bí owó sítóòfù."], ["Owó ìlò", "owó tí o ń san léraléra, bí owó àtúnkún epo."], ["Kí owó padà (pay back)", "àkókò tí ó máa gbà kí owó tí o fi pamọ́ san ohun tí o san ní ìbẹ̀rẹ̀."], ["Pay-as-you-go", "sísan owó díẹ̀díẹ̀, nígbà púpọ̀ pẹ̀lú owó orí fóònù, bí o ṣe ń lo epo tàbí sítóòfù."]],
          slides: [
            { title: "Kí ni o ń ná báyìí?", bullets: ["Owó epo lọ́sẹ̀ x 4 = owó oṣù", "Ka àwọn wákàtí wíwá igi pẹ̀lú"] },
            { title: "Owó méjì ìyípadà", bullets: ["Ìbẹ̀rẹ̀: sítóòfù, sílíńdà, regulator", "Ìlò: àtúnkún tàbí iná mànàmáná lóṣooṣù"] },
            { title: "Àpẹẹrẹ (nọ́mbà àhùsọ)", bullets: ["Èédú KES 1,200 lóṣù; ọ̀nà tó mọ́ jù KES 900", "Owó tí a fi pamọ́: KES 300 lóṣù", "Ìbẹ̀rẹ̀ KES 3,600 / 300 = oṣù 12 kí ó tó padà"] },
            { title: "Sísanwó láìléwu", bullets: ["Fi owó pamọ́ lọ́sẹ̀ tàbí ra á nípasẹ̀ ẹgbẹ́ ìfowópamọ́ rẹ", "Béèrè owó lápapọ̀ àti òfin tí o bá kùnà láti san", "Kò sí owó fún \"sítóòfù ọ̀fẹ́\"; olùtajà gáàsì tó ní ìwé àṣẹ nìkan"] }
          ],
          tryIt: "Kọ iye tí ilé rẹ ń ná lórí epo ìdáná ní ọ̀sẹ̀ kan lásán (ní owó orílẹ̀-èdè rẹ, fún àpẹẹrẹ NGN, GHS, XOF, XAF tàbí EGP), kí o sì ṣírò ti oṣù kan. Lẹ́yìn náà lo owó gidi tí o rí ní Ẹ̀kọ́ 4 láti ṣírò owó tí o máa fi pamọ́ lóṣù àti oṣù mélòó ni yóò gbà kí owó padà fún ọ̀nà tó mọ́ jù kan.",
          youCanNow: "ṣírò iye tí epo ìdáná ń ná ọ lóṣù àti bóyá ọ̀nà tó mọ́ jù máa dá owó rẹ padà.",
          quickCheck: [
            { objective: "O5", q: "Àpẹẹrẹ nìkan: ẹbí kan ń ná GHS 50 lọ́sẹ̀ lórí èédú. Nǹkan bí iye mélòó ni ìyẹn lóṣù?", options: ["GHS 50", "GHS 100", "GHS 500", "GHS 200"], answer: 3, why: "50 lọ́sẹ̀ lọ́nà ọ̀sẹ̀ 4 jẹ́ nǹkan bí 200 lóṣù." },
            { objective: "O5", q: "Ọkùnrin kan pè ọ́ lórí fóònù, ó ń fún ọ ní \"sítóòfù ọ̀fẹ́ ti ìjọba\" tí o bá kọ́kọ́ fi owó kan ránṣẹ́ pẹ̀lú owó orí fóònù. Kí ni èyí?", options: ["Àǹfààní tó dára", "Àmì ìkìlọ̀ jìbìtì; má ṣe sanwó", "Owó orí lásán", "Owó ìdógò tí ó pọn dandan"], answer: 1, why: "Bíbéèrè owó kí o tó gba nǹkan ọ̀fẹ́ jẹ́ àmì jìbìtì tí ó wọ́pọ̀." }
          ]
        },
        {
          title: "Ètò ààbò àti ìyípadà ilé ìdáná rẹ",
          objectives: ["O6"],
          minutes: 5,
          goal: "Kọ ètò ààbò àti ìyípadà ilé ìdáná tí gbogbo ilé rẹ gbà sí.",
          text: [
            "Ètò ń sọ ohun tí o kọ́ di ìṣe. Ó ní apá mẹ́fà: ohun tí o fi ń se oúnjẹ báyìí àti owó rẹ̀ lóṣù; ìgbésẹ̀ mẹ́ta láti dín èéfín kù lọ́sẹ̀ yìí; àwọn òfin ààbò rẹ; ọ̀nà méjì tó mọ́ tí o fi wé ara wọn; ohun tí o yàn, bí o ṣe máa sanwó àti ọjọ́ tí o máa yí padà; àti àwọn tí wọ́n gbà sí i.",
            "Bá gbogbo ará ilé sọ̀rọ̀. Ẹni tí ó ń sanwó àti ẹni tí ó ń se oúnjẹ lè rí nǹkan lọ́nà tó yàtọ̀. Sọ ohun tí èéfín ń ṣe sí àyà àwọn ọmọdé, owó tí o ṣírò, àti àkókò tí a máa rí gbà láti inú wíwá igi. Béèrè ohun tí ó ń da ẹnì kọ̀ọ̀kan lọ́kàn rú, bí ẹ̀rù gáàsì tàbí adùn oúnjẹ, kí o sì dáhùn rẹ̀.",
            "Tí o bá ní iṣẹ́ oúnjẹ, bí chop bar ní Kumasi, búkà (mama put) ní Èkó tàbí dibiterie ní Dakar, fi àwọn oníbàárà àti òṣìṣẹ́ rẹ kún un: èéfín tí ó dín kù túmọ̀ sí ibi tí ó mọ́ jù àti òṣìṣẹ́ tí ara wọn le jù, epo sì sábà máa ń wà lára owó tí o ń ná jù.",
            "Lẹ ètò náà mọ́ ògiri. Lẹ́yìn oṣù kan, ṣàyẹ̀wò: ṣé èéfín ti dín kù, àti iye mélòó ni epo ná? Yí ètò náà padà tí ó bá yẹ."
          ],
          steps: ["Kọ apá mẹ́fà ètò náà.", "Bá àwọn ará ilé tàbí òṣìṣẹ́ jíròrò rẹ̀.", "Dáhùn ohun tí ó ń dà wọ́n láàmú.", "Ẹ fohùn ṣọ̀kan lórí ohun tí ẹ yàn, ìsanwó àti ọjọ́ ìyípadà.", "Ṣàyẹ̀wò lẹ́yìn oṣù kan kí o sì ṣe àtúnṣe."],
          words: [["Ètò ìyípadà (switch plan)", "ètò tí a kọ sílẹ̀ fún yíyí padà sí ọ̀nà oúnjẹ sísè tó mọ́, tí kò sì léwu."]],
          slides: [
            { title: "Apá mẹ́fà ètò náà", bullets: ["Báyìí: epo àti owó oṣù", "Ìgbésẹ̀ mẹ́ta láti dín èéfín kù; òfin ààbò", "Ọ̀nà méjì tí a fi wéra; ohun tí a yàn, ìsanwó, ọjọ́; àwọn tí wọ́n gbà"] },
            { title: "Ẹ jọ fohùn ṣọ̀kan", bullets: ["Ẹni tí ó ń se oúnjẹ àti ẹni tí ó ń sanwó lè yàtọ̀", "Sọ òtítọ́ nípa ìlera, owó àti àkókò", "Dáhùn ohun tí ó ń dà wọ́n láàmú, bí ẹ̀rù gáàsì"] },
            { title: "Fún iṣẹ́ oúnjẹ", bullets: ["Ibi tí ó mọ́ jù, òṣìṣẹ́ tí ara wọn le jù", "Epo sábà máa ń jẹ́ owó ńlá"] },
            { title: "Ṣàyẹ̀wò lẹ́yìn oṣù kan", bullets: ["Ṣé èéfín ti dín kù?", "Iye mélòó ni epo ná?", "Yí ètò padà tí ó bá yẹ"] }
          ],
          tryIt: "Iṣẹ́ ìkẹyìn: kọ ètò ààbò àti ìyípadà ilé ìdáná ojú-ewé kan rẹ pẹ̀lú gbogbo apá mẹ́fà. Bá àwọn ará ilé tàbí òṣìṣẹ́ rẹ jíròrò rẹ̀, kí o sì kọ orúkọ àwọn tí wọ́n gbà sí i.",
          youCanNow: "kọ ètò ààbò àti ìyípadà ilé ìdáná, kí o sì fohùn ṣọ̀kan lórí rẹ̀ pẹ̀lú àwọn ará ilé rẹ.",
          quickCheck: [
            { objective: "O6", q: "Èwo ló yẹ kí ó wà nínú ètò ìyípadà ilé ìdáná?", options: ["Ọjọ́ ìyípadà àti bí o ṣe máa sanwó", "Àwọ̀ sítóòfù nìkan", "Kò sí nǹkan nípa ààbò", "Ìlérí láti máa fi èédú se oúnjẹ nínú ilé"], answer: 0, why: "Ètò náà nílò ohun tí a yàn, ètò ìsanwó àti ọjọ́ kí ìyípadà lè ṣẹlẹ̀." },
            { objective: "O6", q: "Ẹni tí ó ń se oúnjẹ fẹ́ gáàsì, ṣùgbọ́n ẹni tí ó ń sanwó ń ṣàníyàn nípa owó. Kí ló máa ràn lọ́wọ́ jù?", options: ["Má ka ìṣàníyàn náà sí", "Rà á láìsọ fún un", "Fi owó epo oṣù tí o ṣírò àti òtítọ́ nípa ìlera hàn", "Jáwọ́"], answer: 2, why: "Nọ́mbà gidi àti òtítọ́ nípa ìlera ń ran ilé lọ́wọ́ láti fohùn ṣọ̀kan." }
          ]
        }
      ],
      check: {
        title: "Ìdánwò ìmọ̀ 2: Yíyí padà sí oúnjẹ sísè tó mọ́",
        questions: [
          { objective: "O4", q: "Èwo ló fẹ́rẹ̀ẹ́ má mú èéfín kankan jáde nínú ilé ìdáná?", options: ["Ààrò olókùúta mẹ́ta", "Sítóòfù kẹrosíìnì", "Iná gbangba", "Electric pressure cooker"], answer: 3, why: "Oúnjẹ sísè pẹ̀lú iná mànàmáná àti gáàsì fẹ́rẹ̀ẹ́ má mú èéfín jáde nínú ilé ìdáná." },
          { objective: "O4", q: "Kí ni retained-heat cooker ń ṣe?", options: ["Ó ń ṣe gáàsì láti inú ìgbẹ́ ẹran", "Ó ń jẹ́ kí ìkòkò gbígbóná máa se oúnjẹ lọ láìlo epo míì", "Ó ń sun ọ̀rá láìsí èéfín", "Ó ń gba agbára fóònù"], answer: 1, why: "Ohun tí a fi dì í ń mú ooru dúró, kí oúnjẹ lè jinná láìlo epo míì." },
          { objective: "O5", q: "Àpẹẹrẹ nìkan: ọ̀nà tó mọ́ jù kan ń fi XAF 5,000 pamọ́ lóṣù, ó sì ná XAF 30,000 ní ìbẹ̀rẹ̀. Oṣù mélòó ni yóò gbà kí owó padà?", options: ["Oṣù 6", "Oṣù 3", "Oṣù 25", "Oṣù 35"], answer: 0, why: "30,000 pín sí 5,000 jẹ́ 6." },
          { objective: "O5", q: "Kí o tó fọwọ́ sí ètò sítóòfù pay-as-you-go, kí ni o yẹ kí o béèrè?", options: ["Kò sí nǹkan", "Àwọ̀ rẹ̀ nìkan", "Owó lápapọ̀ àti ohun tí ó máa ṣẹlẹ̀ tí o bá kùnà láti san", "Oúnjẹ tí olùtajà fẹ́ràn jù"], answer: 2, why: "Owó lápapọ̀ àti òfin ìkùnà ìsanwó ń fi ewu gidi hàn." },
          { objective: "O6", q: "Lẹ́yìn ìyípadà, kí ni ó yẹ kí ará ilé ṣe?", options: ["Má ronú nípa rẹ̀ mọ́ láéláé", "Ṣàyẹ̀wò èéfín àti owó lẹ́yìn oṣù kan, kí o sì ṣe àtúnṣe", "Padà sí kẹrosíìnì", "Ju ètò náà nù"], answer: 1, why: "Àyẹ̀wò ń fi hàn bóyá ètò náà ṣiṣẹ́ àti ohun tí ó yẹ kí a yí padà." }
        ]
      }
    }
  ],
  quiz: {
    title: "Ìdánwò ìkẹyìn: Oúnjẹ Sísè Láìsí Èéfín: Sítóòfù Tí Kò Léwu àti Ilé Ìdáná Tí Kò Ní Èéfín",
    questions: [
      { objective: "O1", q: "Èéfín inú ilé sábà máa ń wá láti:", options: ["Ìwo ọkọ̀", "Oúnjẹ sísè pẹ̀lú epo tó ń bàyíká jẹ́ nínú sítóòfù lásán", "Fóònù alágbèéká", "Omi mímu"], answer: 1, why: "Èéfín igi, èédú, ìgbẹ́ ẹran àti kẹrosíìnì ni orísun pàtàkì." },
      { objective: "O1", q: "Èwo ni àmì pé ẹbí rẹ ń mí èéfín jù?", options: ["Ojú tí ó ń ta àti ikọ́ nígbà oúnjẹ sísè", "Ògiri funfun tí ó mọ́", "Kò sí òórùn nínú aṣọ", "Afẹ́fẹ́ tútù nínú ilé ìdáná"], answer: 0, why: "Ojú tí ó ń ta, ikọ́ àti ògiri dúdú jẹ́ àmì èéfín tí ó pọ̀." },
      { objective: "O1", q: "Kí ló dé tí ó fi léwu láti se oúnjẹ lórí iná gbangba pẹ̀lú ọmọ ọwọ́ lẹ́yìn rẹ?", options: ["Ó ń sú ọmọ náà", "Kò léwu", "Ọmọ náà ń mí èéfín púpọ̀", "Oúnjẹ ń pẹ́ jinná"], answer: 2, why: "Àwọn ọmọ ọwọ́ tí ó wà nítòsí iná ń mí èéfín, wọ́n sì lè ní àrùn àyà." },
      { objective: "O2", q: "Èwo ló ń dín èéfín kù lọ́fẹ̀ẹ́?", options: ["Títi ilẹ̀kùn", "Lílo igi tútù", "Sísun rọ́bà", "Ṣíṣí ilẹ̀kùn àti fèrèsé nígbà oúnjẹ sísè"], answer: 3, why: "Afẹ́fẹ́ wíwọlé ń jẹ́ kí èéfín jáde láìná owó." },
      { objective: "O2", q: "Rírẹ ẹ̀wà sínú omi kí o tó sè é ń ràn lọ́wọ́ nítorí:", options: ["Ó ń yára jinná, ó ń lo epo díẹ̀, ó sì ń mú èéfín díẹ̀ jáde", "Ó ń fi iyọ̀ kún un", "Ó ń mú èéfín púpọ̀ jáde", "Kò wúlò"], answer: 0, why: "Oúnjẹ sísè tí kò pẹ́ túmọ̀ sí epo díẹ̀ àti èéfín díẹ̀." },
      { objective: "O2", q: "Èwo ni o kò gbọdọ̀ sun láéláé?", options: ["Igi gbígbẹ", "Èédú ní ibi gbangba", "Ọ̀rá àti rọ́bà", "Kùkù àgbàdo"], answer: 2, why: "Sísun ọ̀rá àti rọ́bà ń mú èéfín olóró jáde." },
      { objective: "O3", q: "Carbon monoxide láti inú èédú léwu nítorí:", options: ["Ó ní òórùn tí ó lágbára", "O kò lè rí i tàbí gbọ́ òórùn rẹ̀, ó sì lè pani", "Ó ní àwọ̀", "Ewéko nìkan ló ń pa lára"], answer: 1, why: "Kò fúnni ní ìkìlọ̀ kankan, nítorí náà ó lè ṣe àwọn ènìyàn léṣe nínú yàrá tí a tì." },
      { objective: "O3", q: "Ìtọ́jú àkọ́kọ́ WHO fún iná jíjó ara sọ pé kí o:", options: ["Fi bọ́tà pa á", "Lo yìnyín", "Fọ́ àwọn ọgbẹ́ olómi", "Fi omi tútù tí ó ń ṣàn tu ú"], answer: 3, why: "Omi tútù tí ó ń ṣàn fún nǹkan bí ìṣẹ́jú 20 ni ìmọ̀ràn WHO fún ọgbẹ́ iná kékeré." },
      { objective: "O3", q: "Tí o bá gbọ́ òórùn gáàsì, o KÒ gbọdọ̀:", options: ["Ṣí fèrèsé", "Pa ẹnu sílíńdà", "Tan ìṣáná tàbí tẹ switch", "Mú àwọn ènìyàn jáde síta"], answer: 2, why: "Iná tàbí ìtànṣán kékeré lè mú gáàsì náà bú gbàù." },
      { objective: "O3", q: "Ọmọ kan ní Kano mu kẹrosíìnì láti inú ìgò ohun mímu. Ẹbí náà gbọdọ̀:", options: ["Lọ sí ilé ìwòsàn nísinsìnyí", "Dúró kí wọ́n wò ó", "Fún ọmọ náà ní epo", "Mú kí ọmọ náà bì"], answer: 0, why: "Májèlé kẹrosíìnì nílò ìtọ́jú nísinsìnyí; ilé ìwòsàn ló máa pinnu ìtọ́jú." },
      { objective: "O4", q: "Èwo ni WHO kò gbà nímọ̀ràn fún oúnjẹ sísè?", options: ["LPG", "Iná mànàmáná", "Kẹrosíìnì", "Biogas"], answer: 2, why: "WHO kò gbà kẹrosíìnì àti coal tí a kò ṣe lọ́jọ̀ nímọ̀ràn." },
      { objective: "O4", q: "Sítóòfù èédú tí a ṣe dáradára:", options: ["Kò mú èéfín kankan jáde rárá", "Ń lo epo díẹ̀, ó sì ń mú èéfín díẹ̀ jáde, ṣùgbọ́n ó ṣì nílò afẹ́fẹ́ wíwọlé", "Bákan náà ni pẹ̀lú iná gbangba", "A lè lò ó nínú yàrá ìsùn tí a tì"], answer: 1, why: "Sítóòfù tí a ṣe dáradára ń ràn lọ́wọ́, ṣùgbọ́n ọ̀pọ̀ jù lọ wọn ṣì ń mú èéfín àti carbon monoxide jáde." },
      { objective: "O4", q: "Biogas bá èwo mu jù?", options: ["Oko tí ó ní màlúù àti ààyè fún digester", "Ilé kékeré tí kò ní ẹran ọ̀sìn", "Ìsọ̀ ọjà tí kò ní ààyè", "Ọkọ̀ ayọ́kẹ́lẹ́"], answer: 0, why: "Wọ́n ń ṣe biogas láti inú ìgbẹ́ ẹran àti pàǹtí ewéko nínú digester." },
      { objective: "O4", q: "Kí o tó yan epo, ìbéèrè tí ó ṣe pàtàkì jù ni:", options: ["Àwọ̀ wo ni sítóòfù náà?", "Ṣé wọ́n ń tà á nítòsí mi ní gbogbo ọdún, ṣé mo sì lè sanwó àtúnkún?", "Kí ni àwọn aládùúgbò mi rò nípa orúkọ ọjà náà?", "Ṣé àpótí rẹ̀ tóbi?"], answer: 1, why: "Sítóòfù tó mọ́ ń ràn lọ́wọ́ kìkì tí o bá lè máa ra epo rẹ̀ nìṣó." },
      { objective: "O5", q: "Láti rí owó epo rẹ lóṣù, o lè:", options: ["Méfò", "Fi 4 sọ owó ọ̀sẹ̀ rẹ di púpọ̀", "Pín in sí 4", "Béèrè lọ́wọ́ àjèjì"], answer: 1, why: "Owó ọ̀sẹ̀ lọ́nà 4 ń fúnni ní owó oṣù ní ìwọ̀nba." },
      { objective: "O5", q: "Àpẹẹrẹ nìkan: owó tí a ń fi pamọ́ lóṣù EGP 100, owó ìbẹ̀rẹ̀ EGP 800. Oṣù mélòó ni yóò gbà kí owó padà?", options: ["100", "900", "700", "8"], answer: 3, why: "800 pín sí 100 jẹ́ 8." },
      { objective: "O5", q: "Níbo ni o yẹ kí o ti ra sílíńdà gáàsì?", options: ["Lọ́wọ́ olùtajà tó ní ìwé àṣẹ", "Lọ́wọ́ ẹnikẹ́ni lẹ́gbẹ̀ẹ́ ọ̀nà", "Ní ṣọ́ọ̀bù àtúnkún tí kò ní àmì lóru", "Lọ́wọ́ àjèjì lórí ayélujára tí ó fẹ́ kí o kọ́kọ́ sanwó"], answer: 0, why: "Àwọn olùtajà tó ní ìwé àṣẹ ń tẹ̀lé òfin ààbò fún sílíńdà àti àtúnkún." },
      { objective: "O6", q: "Ta ló yẹ kí ó gbà sí ètò ìyípadà ilé ìdáná?", options: ["Olùtajà nìkan", "Kò sí ẹnìkan", "Àwọn ará ilé, títí kan ẹni tí ó ń se oúnjẹ àti ẹni tí ó ń sanwó", "Àwọn ọmọdé nìkan"], answer: 2, why: "Gbogbo ẹni tí ọ̀rọ̀ náà kàn gbọdọ̀ gbà kí ètò náà lè ṣiṣẹ́." },
      { objective: "O6", q: "Ètò ìyípadà tó dára ní:", options: ["Kò sí ọjọ́", "Orúkọ ọjà nìkan", "Kò sí nǹkan nípa ààbò", "Ọ̀nà méjì tí a fi wéra, ohun tí a yàn, bí a ṣe máa sanwó àti ọjọ́ ìyípadà"], answer: 3, why: "Àwọn apá wọ̀nyí ń jẹ́ kí ètò náà yé, kí ó sì ṣeé ṣe." },
      { objective: "O6", q: "Olùtajà oúnjẹ kan ní Dakar fi kókó àfikún wo kún ètò rẹ̀?", options: ["Èéfín tí ó dín kù fún òṣìṣẹ́ àti oníbàárà rẹ̀, àti owó epo rẹ̀", "Àwọ̀ àwọn àwo", "Kò sí nǹkan", "Kẹrosíìnì púpọ̀ sí i"], answer: 0, why: "Fún iṣẹ́ òwò, ìlera òṣìṣẹ́ àti owó epo ṣe pàtàkì." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  pretest: { title: "Ìdánwò ṣáájú: Kí ni o ti mọ̀ tẹ́lẹ̀?", from: [0, 3, 6, 8, 10, 13, 14, 15, 18] },
  rubric: {
    mastery: "Ó dé ìpele tàbí kọjá rẹ̀ ní gbogbo ìlà. Tí ìlà kan bá jẹ́ \"Kò tíì dé\", tún apá yẹn ṣe kí o sì tún gbìyànjú.",
    criteria: [
      { name: "Ìdí tí ó fi ṣe pàtàkì", objective: "O1", notYet: "Kò sí ìdí ìlera kankan, tàbí àwọn ìdí náà kò tọ́.", meets: "Ó dárúkọ ó kéré tán ipa mẹ́ta tí èéfín ń ní lórí ìlera àti ẹni tí ó ń mí i jù nínú ilé.", exceeds: "Ó tún dárúkọ àkókò tí a ń pàdánù nínú wíwá epo àti ẹni tí ó ń kàn." },
      { name: "Èéfín tí a dín kù lọ́sẹ̀ yìí", objective: "O2", notYet: "Ìgbésẹ̀ tí kò tó mẹ́ta, tàbí ìgbésẹ̀ tí ó ń ná owó púpọ̀.", meets: "Ìgbésẹ̀ mẹ́ta tí kò ná owó púpọ̀ tàbí tí kò ná owó rárá, bí afẹ́fẹ́ wíwọlé, igi gbígbẹ àti ìdérí.", exceeds: "A ti gbìyànjú àwọn ìgbésẹ̀ náà, a sì kọ ohun tí ó yí padà sílẹ̀." },
      { name: "Òfin ààbò", objective: "O3", notYet: "Kò sí òfin fún epo tí a ń lò, tàbí òfin kan léwu.", meets: "Òfin tí ó yé fún iná jíjó ara àti àwọn ọmọdé àti fún epo tí ilé ń lò, pẹ̀lú ilé ìwòsàn tí ó sún mọ́ jù.", exceeds: "Ó ní àwọn ìgbésẹ̀ fún gáàsì tí ó ń jò tàbí òfin carbon monoxide fún èédú, àti bí a ṣe ń tọ́jú epo pamọ́." },
      { name: "Ọ̀nà tí a fi wéra", objective: "O4", notYet: "Ọ̀nà kan ṣoṣo, tàbí kò sí ìfiwéra.", meets: "Ọ̀nà méjì tí a fi wéra nípa èéfín, bí epo ṣe ń wà, ààbò àti owó, pẹ̀lú ìdí tó tọ́ fún ohun tí a yàn.", exceeds: "Owó wá láti ọ̀dọ̀ olùtajà gidi ní agbègbè, a sì ti ṣàyẹ̀wò bí epo ṣe ń wà." },
      { name: "Owó àti ìsanwó", objective: "O5", notYet: "Kò sí owó oṣù, tàbí ìṣirò náà kò tọ́.", meets: "Owó epo oṣù báyìí, owó ọ̀nà tó mọ́ jù àti ọ̀nà ìsanwó, pẹ̀lú ìṣirò tó tọ́.", exceeds: "Ó fi oṣù tí yóò gbà kí owó padà hàn, ó sì dárúkọ àwọn ìbéèrè tí a ó béèrè kí a tó fọwọ́ sí i." },
      { name: "Ètò tí a fohùn ṣọ̀kan lé lórí", objective: "O6", notYet: "Kò sí ọjọ́ ìyípadà, tàbí kò sí ẹlòmíì tí ó ti rí i.", meets: "Gbogbo apá mẹ́fà ni a kọ kún, pẹ̀lú ọjọ́ ìyípadà àti orúkọ àwọn tí wọ́n gbà sí i.", exceeds: "Ó ní àyẹ̀wò èéfín àti owó lẹ́yìn oṣù kan." }
    ]
  },
  evaluation: {
    results: [
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n parí ẹ̀kọ́ náà tí wọ́n sì yege iṣẹ́ ìkẹyìn (rubric)",
      "Àwọn ilé tí wọ́n ròyìn pé àwọn ń lo ó kéré tán ìgbésẹ̀ mẹ́ta láti dín èéfín kù ní ọjọ́ 30 lẹ́yìn náà (ìwádìí àtẹ̀lé)",
      "Àwọn ilé tí wọ́n ròyìn pé àwọn kò lo sítóòfù èédú nínú yàrá tí a tì mọ́, tí wọ́n sì ń tọ́jú kẹrosíìnì láìléwu",
      "Àwọn ilé tàbí iṣẹ́ oúnjẹ tí wọ́n yí padà sí sítóòfù tàbí epo tó mọ́ jù láàárín oṣù 6",
      "Àwọn akẹ́kọ̀ọ́ tí wọ́n ròyìn pé owó tàbí àkókò tí wọ́n ń ná lórí epo ìdáná ti dín kù"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Fóònù lásán tí ó ní ẹ̀rọ ìṣirò, tàbí ìwé àti gègé",
      "Owó sítóòfù àti epo ní agbègbè, tí akẹ́kọ̀ọ́ tàbí olùkọ́ kó jọ",
      "Tí ó bá ṣeé ṣe, sítóòfù tí a ṣe dáradára, sítóòfù gáàsì tàbí apẹ̀rẹ̀ retained-heat láti fi han àwùjọ",
      "Nǹkan bí ìṣẹ́jú 60 lápapọ̀, ní àwọn ìpàdé kúkúrú"
    ],
    facilitatorNotes: [
      "Àwọn alábàáṣiṣẹ́ tó dára: ẹgbẹ́ obìnrin, ẹgbẹ́ ìfowópamọ́, ilé-ìwé, ilé ìwòsàn, òṣìṣẹ́ ìlera àdúgbò àti àwọn ilé-iṣẹ́ oúnjẹ sísè tó mọ́ ní agbègbè (má ṣe polówó orúkọ ọjà kan).",
      "Kó owó gidi ti sítóòfù àti epo ní agbègbè jọ ṣáájú ìpàdé; ẹ̀kọ́ náà ń lo nọ́mbà àpẹẹrẹ àhùsọ nìkan.",
      "Ìfihàn níta ń ṣiṣẹ́ dáadáa: fi èéfín igi tútù àti igi gbígbẹ wéra, tàbí ti ààrò olókùúta mẹ́ta àti sítóòfù tí a ṣe dáradára.",
      "Ààbò gáàsì: fi bí a ṣe ń pa ẹnu sílíńdà àti bí a ṣe ń ṣàyẹ̀wò òpó hàn; má ṣe fi iná wá ibi tí gáàsì ti ń jò láéláé. Má ṣe jẹ́ kí àwọn akẹ́kọ̀ọ́ ṣiṣẹ́ lórí wáyà tàbí páìpù gáàsì.",
      "Iná jíjó ara àti májèlé: kọ́ni ní ìtọ́jú àkọ́kọ́ láti ọ̀dọ̀ WHO kí o sì rán àwọn akẹ́kọ̀ọ́ lọ sí ilé ìwòsàn; má ṣe fúnni ní ìmọ̀ràn ìtọ́jú.",
      "Fi rubric ṣe àmì fún iṣẹ́ ìkẹyìn, kí o sì fúnni ní èsì lórí ìlà \"Kò tíì dé\" kan lẹ́ẹ̀kan."
    ]
  }
};
