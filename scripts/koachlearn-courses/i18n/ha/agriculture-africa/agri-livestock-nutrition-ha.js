"use strict";

// Koach Learn course, Hausa (ha) translation of agriculture-africa/agri-livestock-nutrition.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const FEEDIPEDIA = { name: "Feedipedia (INRAE, CIRAD, AFZ da FAO): tsarin bayanai kan kayan abincin dabbobi", url: "https://www.feedipedia.org/" };
const FEEDIPEDIA_MAIZE = { name: "Feedipedia: Hatsin masara (furotin kusan kashi 8 zuwa 10.5 cikin 100 na busasshen abu)", url: "https://www.feedipedia.org/node/556" };
const FEEDIPEDIA_SOY = { name: "Feedipedia: Kek ɗin waken soya (furotin bisa nau'i)", url: "https://www.feedipedia.org/node/674" };
const ICIPE_PUSHPULL = { name: "icipe: Fasahar push-pull (desmodium, Napier da Brachiaria a matsayin ciyawar dabbobi)", url: "https://www.icipe.org/impacts/demonstration-research-impacts-communities/push-pull-technology" };
const TENNESSEE_PEARSON = { name: "Jami'ar Tennessee, sashen faɗakarwa (Extension): Takardar atisaye kan kayan abinci (murabba'in Pearson)", url: "https://animalscience.tennessee.edu/wp-content/uploads/sites/7/2020/07/BeefFeedstuffsActivityPacket.pdf" };
const FAO_SILAGE = { name: "FAO: Dabarun girbi da adana ciyawa a matsayin silage (yin silage a ƙasashe masu zafi)", url: "https://www.fao.org/4/x8486e/x8486e0w.htm" };
const FAO_SILAGE_SMALL = { name: "FAO: Yin silage don ƙananan manoma (ƙarshe: silage a buhu, hanyoyi masu araha)", url: "https://www.fao.org/4/x8486e/x8486e13.htm" };
const ILRI_MYCO = { name: "ILRI: Masu kama gubar fumfuna (mycotoxin binders), hanyar samun madara mafi aminci a Kenya?", url: "https://www.ilri.org/knowledge/publications/mycotoxin-binders-option-safer-milk-kenya" };

module.exports = {
  id: "agri-livestock-nutrition-ha",
  lang: "ha",
  translationOf: "agri-livestock-nutrition",
  category: "Agriculture (Africa)",
  name: "Abincin Dabbobi da Haɗa Abinci da Kayan Gida",
  skills: "Daidaita sinadarai da buƙatun dabba, Zaɓar kayan abinci na gida da ciyawar dabbobi, Daidaita abinci da murabba'in Pearson, Yin silage da busasshiyar ciyawa da ajiye abinci lafiya, Tsara ciyarwa bisa matakin girma, Lissafin kuɗin abinci kan kowane kg na ƙarin nauyi ko lita na madara",
  outcome: "haɗa abinci mai daidaito daga kayan gida don rukunin dabbobi ɗaya da lissafin kuɗinsa: daidaita kuzari, furotin, ma'adinai da ruwa da matakinsu, daidaita furotin da murabba'in Pearson, adanawa da ajiye abinci lafiya, da lissafin kuɗin abinci kan kowane kg na ƙarin nauyi, kowane tire na ƙwai ko kowace lita ta madara.",
  about: [
    "Wannan kwas ɗin na ƙananan manoma ne da masu girma masu kiwon dabbobi da kaji, ma'aikatan gona, matasa 'yan kasuwar noma, ƙananan masu haɗa abinci da jami'an faɗakar da manoma (extension) a Kenya, Najeriya, Ghana, Côte d'Ivoire, Burkina Faso da sauran Afirka. Abinci yawanci shi ne kuɗi mafi girma a kiwo, don haka ciyarwa mai kyau da araha ita ke yanke ko gona za ta ci riba.",
    "Babi na 1 yana magana kan abin da dabbobi ke buƙata da abin da kuke da shi: sinadarai, kayan gida kamar masara, dusar masara, dusar alkama, kek ɗin waken soya da na auduga, garin kifi, da ciyawar dabbobi kamar ciyawar Napier, desmodium da lablab, da yadda ake daidaita abinci da murabba'in Pearson, mataki-mataki. Babi na 2 yana magana kan adanawa da tsarawa: silage da busasshiyar ciyawa, ajiye abinci lafiya daga fumfuna da gubarsa (mycotoxin), ciyarwa bisa matakin girma da shirin abinci mai sassa uku, da lissafin kuɗin abinci kan kowane kg na ƙarin nauyi ko lita na madara.",
    "Duk farashin da ke nan misalai ne kawai: ku yi amfani da farashin wurinku. Ƙimar sinadarai a kayan abinci tana bambanta, don haka ku tabbatar da ita wajen mai sayar muku, ɗakin gwajin abinci ko jami'in faɗakarwarku. Wannan kwas ɗin ba ya ba da yawan magani ko ƙarin sinadari (additive); ku bi abin da ke kan takardar kaya da likitan dabbobinku. Kowane darasi yana ɗaukar kusan minti biyar kuma yana ƙarewa da aiki. Akwai gwajin ilimi a ƙarshen kowane babi, da jarabawa mai tambayoyi 20 a ƙarshen kwas ɗin."
  ],
  finalTask: "Ku haɗa abinci da lissafin kuɗinsa don rukunin dabbobi ɗaya a gonarku (ko misali kamar kajin ƙwai kusa da Kumasi, aladun da ke girma kusa da Ibadan, kajin nama kusa da Bouake, ko saniyar madara a Kiambu): ku faɗi rukunin da matakinsu; ku rubuta shirin abinci mai sassa uku (abinci na tushe ko ciyawa, abinci mai ƙarfi, ƙarin sinadarai) da ruwa; ku daidaita furotin na abinci mai ƙarfi da murabba'in Pearson, kuna nuna lissafinku; ku jera kg na kowane kaya a cikin kowane kg 100 na haɗin; ku lissafa kuɗinsa kan kowane kg da farashin wurinku; sannan ku lissafa kuɗin abinci kan kowane kg na ƙarin nauyi, kowane tire na ƙwai ko kowace lita ta madara.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Ƙananan manoma da manoma masu girma na kasuwanci masu kiwon dabbobi da kaji, ma'aikatan gona, matasa 'yan kasuwar noma, ƙananan masu haɗa abinci da jami'an faɗakar da manoma a Gabas, Yamma da Tsakiyar Afirka (har da ƙasashen da ke magana da Faransanci).",
    startingPoint: "Suna ciyar da dabbobi da kiwo, ragowar amfanin gona da abincin da aka saya na kamfani. Yawancinsu ba sa iya karanta takardar bayanin abinci ko daidaita abinci, ba sa adana ciyawa don rani, kuma ba su san nawa abincinsu ke kashewa kan kowane kg na nama, ƙwai ko madara ba.",
    gap: "Abincin da aka saya yana da tsada kuma ingancinsa yana bambanta; abinci maras kyau ko mai fumfuna yana rage girma, ƙwai da madara, kuma yana iya sa dabbobi rashin lafiya. Manoman da suka iya haɗa abinci mai daidaito daga kayan gida, adana ciyawa da lissafin kuɗin abincinsu za su iya rage kashe kuɗi, su sa dabbobi su ci gaba da samarwa a lokacin rani, kuma su sanya farashin kayansu da tabbaci.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli; lissafi mai sauƙi kawai (ninkawa, rabawa, kaso); kwas ɗin yana kuma a Sifaniyanci, Faransanci da Larabci",
      "Na'urori: takarda da alƙalami ko na'urar lissafi ta waya; teburin lissafi (spreadsheet) a waya ba dole ba ne",
      "Kuɗi: farashi a KES, NGN, GHS da XOF misalai ne kawai; masu koyo suna amfani da farashin wurinsu",
      "Ƙimar kayan abinci tana bambanta: masu koyo suna tabbatar da ita wajen masu sayarwa, ɗakin gwaji ko jami'in faɗakarwa",
      "Dokokin lafiyar dabbobi: babu yawan magani, ƙarin sinadari ko abinci mai magani; ku bi likitan dabbobi da takardar kaya"
    ],
    prerequisites: "Kula da dabbobi na farko da lissafi mai sauƙi. Ana ba da shawarar fara ɗaukar \"Lafiyar Dabbobin Kiwo da Kula da Su\"."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku rukunin dabba da matakinta", action: "jera sinadaran da take buƙata (kuzari, furotin, ma'adinai da ruwa) da abincin gida da ke ba da kowanne", standard: "kuna ambaton abinci ɗaya daidai don kowane sinadari" },
    { id: "O2", condition: "Idan aka ba ku kayan abincin da ke kusa da ku", action: "rarraba kayan abinci na gida da ciyawa zuwa abincin kuzari, abincin furotin, abinci mai zare (roughage) da ƙarin sinadarai", standard: "aƙalla 8 cikin 10 an sanya su daidai" },
    { id: "O3", condition: "Idan aka ba ku kayan abinci biyu da matakin furotin da ake nema", action: "daidaita abinci da murabba'in Pearson da rubuta kg na kowane kaya a cikin kowane kg 100 na haɗin", standard: "haɗin yana tsakanin maki 0.5 na kaso daga abin da ake nema" },
    { id: "O4", condition: "Ta amfani da ciyawa da abinci a gonarku", action: "yin silage ko busasshiyar ciyawa da ajiye abinci ta yadda zai kasance a bushe kuma babu fumfuna", standard: "kuna bin kowane mataki na jerin dubawa" },
    { id: "O5", condition: "Don rukunin dabbobi ɗaya", action: "rubuta shirin ciyarwa bisa mataki mai abinci na tushe ko ciyawa, abinci mai ƙarfi da ƙarin sinadarai don kowane mataki", standard: "yana ƙunshe da kowane mataki daga ƙanana zuwa kasuwa, ƙwai ko madara" },
    { id: "O6", condition: "Ta amfani da farashin wurinku da bayananku", action: "lissafa kuɗin abinci kan kowane kg na haɗi da kowane kg na ƙarin nauyi, tire na ƙwai ko lita ta madara", standard: "lissafi daidai kuma an haɗa kowane kaya" }
  ],
  chapters: [
    {
      name: "Babi na 1: Abin da dabbobi ke buƙata da abin da kuke da shi",
      lessons: [
        {
          title: "Sinadarai: kuzari, furotin, ma'adinai da ruwa",
          objectives: ["O1"],
          minutes: 5,
          goal: "Jera abin da dabba ke buƙatar ci da sha, da abincin gida don kowace buƙata.",
          text: [
            "Kowace dabba tana buƙatar abubuwa huɗu daga abincinta da ruwanta. Kuzari (energy) yana sa ta rayu, ta ji ɗumi, ta yi motsi, kuma yana ƙarfafa girma, madara da ƙwai; yana fitowa galibi daga hatsi (masara, dawa, rogo), dusa da ciyawa sabuwa ko wadda aka adana. Furotin yana gina tsoka, madara, ƙwai da 'ya'ya; yana fitowa daga kek ɗin iri masu mai (waken soya, auduga, gyaɗa, sunflower), garin kifi da tsire-tsire masu wake kamar desmodium da lablab. Ma'adinai da bitamin suna gina ƙashi da ɓawon ƙwai kuma suna sa jiki ya yi aiki: gishiri, calcium daga farar ƙasa (limestone) ko ɓawon katantanwa, phosphorus, da haɗin ma'adinai da bitamin (premix).",
            "Ruwa shi ne sinadari mafi muhimmanci kuma mafi araha. Dabba tana daina cin abinci da sauri idan babu shi, kuma shanun madara da kajin ƙwai suna shan ruwa sosai. Ku ba da ruwa mai tsabta koyaushe, fiye da haka a lokacin zafi, a cikin kwanukan sha masu tsabta a inuwa.",
            "Buƙatu suna canjawa bisa dabbar da matakinta. Ƙaramar dabba mai saurin girma, kazar ƙwai da saniyar madara suna buƙatar furotin fiye da babbar dabba da ke hutawa. Shanu, awaki da tumaki dabbobi masu tuƙa ne (ruminants): cikinsu yana iya narkar da ciyawa da ragowar amfanin gona, don haka abinci mai zare shi ne tushen abincinsu. Aladu da kaji ba sa iya narkar da abinci mai zare sosai, don haka suna buƙatar garin abinci (mash) na hatsi da aka haɗa da furotin, ma'adinai da bitamin."
          ],
          words: [["Sinadari (nutrient)", "wani ɓangare na abinci da jiki ke buƙata: kuzari, furotin, ma'adinai, bitamin da ruwa."], ["Dabba mai tuƙa (ruminant)", "dabba mai ciki mai sassa huɗu da ke iya narkar da ciyawa: shanu, awaki da tumaki."], ["Premix", "haɗin ma'adinai da bitamin da ake saya, ana ƙara shi kaɗan cikin abinci kamar yadda takardar kaya ta ce."], ["Abinci mai zare (roughage)", "abinci mai yawa mai zare kamar ciyawa, busasshiyar ciyawa, silage da ragowar amfanin gona."]],
          slides: [
            { title: "Buƙatu huɗu", bullets: ["Kuzari: hatsi, dusa, rogo, ciyawa", "Furotin: kek ɗin iri masu mai, garin kifi, tsire-tsire masu wake", "Ma'adinai da bitamin: gishiri, farar ƙasa, premix", "Ruwa: mai tsabta, koyaushe"] },
            { title: "Ruwa da farko", bullets: ["Sinadari mafi araha kuma mafi muhimmanci", "Ƙari a lokacin zafi; dabbobin madara da na ƙwai suna sha sosai", "Kwanukan sha masu tsabta a inuwa"] },
            { title: "Buƙatu suna canjawa bisa mataki", bullets: ["Ƙanana, masu ƙwai da masu madara suna buƙatar ƙarin furotin", "Manya da ke hutawa suna buƙatar ƙasa"] },
            { title: "Masu tuƙa da aladu da kaji", bullets: ["Shanu, awaki, tumaki: abinci mai zare shi ne tushe", "Aladu da kaji: garin hatsi da furotin da premix"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Ku zaɓi rukunin dabbobi ɗaya a gonarku (misali aladun da ke girma, kajin ƙwai ko saniyar madara). Ku rubuta buƙatunsu huɗu, kuma kusa da kowanne, abinci ɗaya da za ku iya samu a wurinku da ke ba da shi.",
          youCanNow: "jera buƙatun kuzari, furotin, ma'adinai da ruwa na dabba da ambaton abincin gida don kowanne.",
          quickCheck: [
            { objective: "O1", q: "Wane sinadari ne mafi araha kuma mafi muhimmanci?", options: ["Furotin", "Kuzari", "Ruwa", "Bitamin"], answer: 2, why: "Dabbobi suna daina ci da samarwa da sauri idan babu ruwa mai tsabta." },
            { objective: "O1", q: "Wane abinci ne ke ba da furotin galibi?", options: ["Kek ɗin waken soya", "Hatsin masara", "Gishiri", "Busasshen rogo"], answer: 0, why: "Kek ɗin iri masu mai kamar na waken soya suna da furotin sosai; masara da rogo galibi kuzari suke bayarwa." }
          ]
        },
        {
          title: "Kayan abinci na gida da ciyawar dabbobi",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rarraba abincin da kuke iya samu zuwa abincin kuzari, abincin furotin, abinci mai zare da ƙarin sinadarai.",
          text: [
            "Abincin kuzari: hatsin masara, dawa da gero, rogo (wanda aka fere, aka busar ko aka sarrafa ta yadda zai zama lafiya), dusar masara da dusar alkama. Dusa ta fi hatsi araha kuma tana ba da ɗan furotin da zare, amma dusa da yawa a garin abincin kaji tana rage kuzarin. Hatsin masara yana da furotin kusan kashi 8 zuwa 10 cikin 100 kawai, don haka shi kaɗai ba zai iya ciyar da dabba mai girma ba.",
            "Abincin furotin: kek ɗin waken soya (sau da yawa furotin kusan kashi 44 zuwa 48 cikin 100, bisa yadda aka yi shi), kek ɗin auduga, kek ɗin gyaɗa (kuli-kuli), kek ɗin sunflower da garin kifi (kamar omena a Kenya). Kek ɗin auduga yana da gossypol, wanda zai iya cutar da aladu, kaji da ƙananan dabbobi, don haka ku yi amfani da shi a cikin iyakar da littafin jagorar abinci ko masanin abincin dabbobi ya bayar kawai. Garin kifi yana da wadata amma yana da tsada kuma ingancinsa yana bambanta: ku saya daga wanda kuka amince da shi kuma ku duba cewa ba a haɗa shi da yashi ko gishiri ba.",
            "Ciyawa da abinci mai zare don dabbobi masu tuƙa: ciyawar Napier, ciyawar Brachiaria, karan masara, tsire-tsire masu wake kamar desmodium da lablab, da ganyen bishiyoyi kamar leucaena da calliandra. Tsire-tsire masu wake suna da furotin sosai kuma suna iya maye gurbin wani ɓangare na abinci mai ƙarfi da ake saya. Tsarin push-pull na icipe yana shuka desmodium tsakanin layukan masara da Napier ko Brachiaria a kewayen gona: yana kare masara daga kwari kuma yana ba da ciyawa mai inganci. Ƙarin sinadarai: gishiri, farar ƙasa ko ɓawon katantanwa don calcium, da premix na ma'adinai da bitamin da ake amfani da shi kamar yadda takardar kaya ta ce."
          ],
          steps: ["Ku jera kowane abinci da za ku iya saya ko shukawa a kusa.", "Ku yi wa kowanne alama: kuzari, furotin, mai zare ko ƙarin sinadari.", "Ku rubuta farashinsa kan kowane kg da lokacin shekara da kuke samunsa.", "Ku tambayi mai sayar muku ko jami'in faɗakarwa ƙimar furotin ɗinsa.", "Ku lura da duk wata iyaka, kamar kek ɗin auduga don aladu da kaji."],
          words: [["Abinci mai ƙarfi (concentrate)", "abinci mai yawan kuzari ko furotin, kamar hatsi, dusa, kek ɗin iri masu mai ko abincin shanun madara da aka saya."], ["Kek ɗin iri masu mai (oilseed cake)", "abin da ya rage bayan an matse mai daga iri kamar waken soya ko auduga; yana da furotin sosai."], ["Tsiro mai wake (legume)", "tsiro kamar desmodium, lablab ko wake da ke da furotin sosai kuma yana ƙara nitrogen a ƙasa."], ["Gossypol", "wani abu na halitta a irin auduga da zai iya cutar da aladu, kaji da ƙananan dabbobi."]],
          slides: [
            { title: "Abincin kuzari", bullets: ["Masara, dawa, gero, rogo da aka sarrafa lafiya", "Dusar masara da ta alkama: sun fi araha, sun fi zare", "Masara ita kaɗai: furotin kusan kashi 8 zuwa 10 kawai"] },
            { title: "Abincin furotin", bullets: ["Kek ɗin waken soya, sau da yawa furotin kusan kashi 44 zuwa 48", "Kek ɗin auduga, gyaɗa da sunflower", "Garin kifi: yana da wadata amma ku duba ingancinsa"] },
            { title: "Ciyawa don dabbobi masu tuƙa", bullets: ["Napier, Brachiaria, karan masara", "Masu wake: desmodium, lablab, leucaena, calliandra", "Push-pull yana ba da ciyawa kuma yana kare masara"] },
            { title: "Ƙarin sinadarai da iyakoki", bullets: ["Gishiri, farar ƙasa ko ɓawo, premix kamar yadda takarda ta ce", "Kek ɗin auduga: akwai iyaka ga aladu, kaji, ƙanana", "Ku tabbatar da ƙima wajen mai sayarwa ko jami'in faɗakarwa"] }
          ],
          sources: [FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY, ICIPE_PUSHPULL],
          tryIt: "Ku yi tebur na kayan abinci 8 zuwa 10 da za ku iya samu kusa da ku mai layuka huɗu a tsaye: abinci, nau'i (kuzari, furotin, mai zare ko ƙarin sinadari), farashi kan kowane kg, da watannin da ake samunsa.",
          youCanNow: "rarraba abincin da ke kusa da ku zuwa abincin kuzari, abincin furotin, abinci mai zare da ƙarin sinadarai, da lura da farashinsu da iyakokinsu.",
          quickCheck: [
            { objective: "O2", q: "Wanne ne tsiro mai wake mai furotin sosai don shanu da awaki?", options: ["Karan masara", "Dusar alkama", "Desmodium", "Ɓawon rogo"], answer: 2, why: "Desmodium tsiro ne mai wake, mai furotin sosai; sauran galibi kuzari ko zare suke bayarwa." },
            { objective: "O2", q: "Me yasa za ku yi hankali da kek ɗin auduga ga aladu da kaji?", options: ["Ba shi da furotin", "Yana da gossypol, wanda zai iya cutar da su", "Ya yi araha sosai", "Na kifi ne kawai"], answer: 1, why: "Gossypol a irin auduga zai iya cutar da aladu, kaji da ƙananan dabbobi, don haka ku yi amfani da shi a cikin iyakar jagora." }
          ]
        },
        {
          title: "Daidaita abinci da murabba'in Pearson",
          objectives: ["O3"],
          minutes: 6,
          goal: "Daidaita kayan abinci biyu zuwa matakin furotin da ake nema da murabba'in Pearson.",
          text: [
            "Murabba'in Pearson (Pearson square) zane ne mai sauƙi da ke faɗa muku nawa za ku haɗa na kayan abinci biyu don kai wa ga abu ɗaya da ake nema, yawanci furotin. Yana aiki da sinadari ɗaya da kayan abinci biyu a lokaci ɗaya, kuma abin da ake nema dole ya kasance tsakanin ƙimar kayan biyu. Ku yi amfani da ƙimomi a kan tushe ɗaya (duka kamar yadda ake ciyarwa, ko duka busasshen abu).",
            "Misali da ƙimomi na yau da kullum (ku tabbatar da naku): masara mai furotin kashi 9, kek ɗin waken soya kashi 44, kuma ana neman kashi 18. Abin da kuke nema yana fitowa daga littafin jagorar abinci, jami'in faɗakarwarku ko masanin abincin dabbobi don wannan dabba da matakinta. Ku zana murabba'i. Ku rubuta 18 a tsakiya, masara 9 a sama hagu da kek ɗin waken soya 44 a ƙasa hagu. Ku cire a kan layukan da suka ratsa (diagonal) kuma ku yi watsi da alamar debewa: 44 debe 18 = sassa 26 na masara (sama dama); 18 debe 9 = sassa 9 na kek ɗin waken soya (ƙasa dama). Jimillar sassa = 26 + 9 = 35.",
            "Ku mayar da sassa zuwa kg a cikin kowane kg 100: masara = 26 / 35 x 100 = 74.3 kg; kek ɗin waken soya = 9 / 35 x 100 = 25.7 kg. Dubawa: 74.3 x 9 % = 6.7 kg na furotin, da 25.7 x 44 % = 11.3 kg, jimilla 18.0 kg na furotin a cikin kg 100: kashi 18. A garin abinci na gaske, da farko kuna ware wuri don kayayyakin da ba sa canjawa (premix, gishiri, farar ƙasa don kajin ƙwai, kamar yadda takarda ko jagora ta ce), sannan ku yi amfani da murabba'in don sauran. Murabba'in yana daidaita furotin kawai, don haka ku duba kuzari, zare da ma'adinai tare da jami'in faɗakarwarku."
          ],
          steps: ["Ku rubuta furotin da ake nema a tsakiyar murabba'i.", "Ku rubuta kaya A (furotin kaɗan) a sama hagu da kaya B (furotin mai yawa) a ƙasa hagu.", "Ku cire a kan kowane layi da ya ratsa; ku yi watsi da alamar debewa.", "Sama dama = sassan kaya A; ƙasa dama = sassan kaya B.", "Ku raba kowanne da jimillar sassa ku ninka da 100 don kg a cikin kowane kg 100.", "Dubawa: kg x kason furotin na kowane kaya yana haɗuwa ya kai abin da ake nema."],
          words: [["Murabba'in Pearson (Pearson square)", "zane mai sauƙi da ke nuna nawa za a haɗa na kayan abinci biyu don kai wa ga matakin sinadari ɗaya."], ["Furotin ɗanye (crude protein)", "ƙimar furotin da ake bugawa a takardun abinci da rahotannin ɗakin gwaji, a matsayin kaso."], ["Abinci (ration)", "abincin da dabba ke samu a rana, ko haɗin da ake ciyar da ita daga ciki."], ["Kamar yadda ake ciyarwa (as-fed)", "ana auna abincin yadda yake, da ruwansa a ciki; ƙimomin busasshen abu suna cire ruwan."]],
          slides: [
            { title: "Murabba'in Pearson", bullets: ["Sinadari ɗaya, kayan abinci biyu", "Abin da ake nema dole ya kasance tsakanin ƙimomi biyu", "Tushe ɗaya: kamar yadda ake ciyarwa ko busasshen abu"] },
            { title: "Ku shirya shi", bullets: ["Tsakiya: ana neman kashi 18", "Sama hagu: masara 9; ƙasa hagu: kek ɗin waken soya 44"] },
            { title: "Ku cire a kan layukan da suka ratsa", bullets: ["44 - 18 = sassa 26 na masara", "18 - 9 = sassa 9 na kek ɗin waken soya", "Jimilla sassa 35"] },
            { title: "A cikin kg 100, sannan ku duba", bullets: ["Masara 26 / 35 x 100 = 74.3 kg", "Kek ɗin waken soya 9 / 35 x 100 = 25.7 kg", "6.7 + 11.3 = 18.0 kg na furotin: ya kai"] }
          ],
          sources: [TENNESSEE_PEARSON, FEEDIPEDIA_MAIZE, FEEDIPEDIA_SOY],
          tryIt: "Ku yi amfani da murabba'in Pearson don haɗa dusar masara (ku yi amfani da furotin kashi 10 a matsayin ƙimar atisaye) da kek ɗin waken soya (kashi 44) don neman kashi 16. Ku rubuta kg a cikin kowane kg 100 kuma ku duba cewa furotin ya haɗu daidai. (Amsa: sassa 28 na dusa da sassa 6 na kek, wato 82.4 kg da 17.6 kg.)",
          youCanNow: "daidaita kayan abinci biyu zuwa matakin furotin da ake nema da murabba'in Pearson da duba sakamakon.",
          quickCheck: [
            { objective: "O3", q: "A murabba'in Pearson, me ake sakawa a tsakiya?", options: ["Farashin abincin", "Nauyin dabbar", "Yawan dabbobin", "Matakin furotin da ake nema"], answer: 3, why: "Matakin sinadarin da ake nema ne ke tsakiya; kayan abincin suna hagu." },
            { objective: "O3", q: "Kuna haɗa masara (kashi 9) da kek ɗin waken soya (kashi 44) don kashi 18. Sassa nawa na masara?", options: ["Sassa 26 (44 debe 18)", "Sassa 9 (18 debe 9)", "Sassa 35", "Sassa 18"], answer: 0, why: "Ku cire a kan layin da ya ratsa: 44 - 18 = sassa 26 na masara." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Abin da dabbobi ke buƙata da abin da kuke da shi",
        questions: [
          { objective: "O1", q: "Me yasa shanu da awaki za su iya rayuwa galibi da ciyawa amma aladu da kaji ba za su iya ba?", options: ["Aladu da kaji ba sa buƙatar kuzari", "Ciyawa guba ce ga aladu", "Shanu da awaki dabbobi masu tuƙa ne kuma suna iya narkar da abinci mai zare", "Kaji ruwa kawai suke sha"], answer: 2, why: "Cikin dabbobi masu tuƙa yana narkar da abinci mai zare; aladu da kaji suna buƙatar garin abinci na hatsi." },
          { objective: "O1", q: "Wace dabba ce ke buƙatar ƙarin furotin a abincinta?", options: ["Ƙaramar kazar nama mai saurin girma", "Babbar akuya da ke hutawa a lokacin rani", "Babbar saniya maras ciki da ba ta ba da madara", "Babban sa da ya gama girma yana hutawa"], answer: 0, why: "Ƙananan dabbobi masu saurin girma, masu ƙwai da masu madara suna buƙatar ƙarin furotin." },
          { objective: "O2", q: "Wanne daga cikin waɗannan galibi abincin kuzari ne?", options: ["Garin kifi", "Hatsin masara", "Kek ɗin waken soya", "Desmodium"], answer: 1, why: "Hatsin masara galibi kuzari ne, da furotin kusan kashi 8 zuwa 10 kawai." },
          { objective: "O3", q: "Wane biyu ne murabba'in Pearson zai iya daidaitawa zuwa furotin kashi 16?", options: ["Masara (kashi 9) da dusar masara (kashi 10)", "Garin kifi (kashi 60) da kek ɗin waken soya (kashi 44)", "Kayan abinci biyu duka sama da kashi 30", "Masara (kashi 9) da kek ɗin waken soya (kashi 44)"], answer: 3, why: "Abin da ake nema dole ya kasance tsakanin ƙimar kayan biyu: 16 yana tsakanin 9 da 44." },
          { objective: "O3", q: "Bayan murabba'in, sassa 26 na masara da sassa 9 na kek ɗin waken soya. Kg nawa na kek ɗin waken soya a cikin kg 100?", options: ["9 kg", "35 kg", "Kusan 25.7 kg", "Kusan 74.3 kg"], answer: 2, why: "9 / 35 x 100 = 25.7 kg na kek ɗin waken soya a cikin kg 100 na haɗi." }
        ]
      }
    },
    {
      name: "Babi na 2: Ku adana, ku tsara kuma ku lissafa kuɗin abincinku",
      lessons: [
        {
          title: "Silage, busasshiyar ciyawa da ajiye abinci lafiya",
          objectives: ["O4"],
          minutes: 6,
          goal: "Yin silage ko busasshiyar ciyawa da ajiye abinci ta yadda zai kasance a bushe kuma babu fumfuna.",
          text: [
            "A lokacin damina ciyawa tana da yawa sosai; a lokacin rani kuma ba ta isa, kuma madara da nauyi suna raguwa. Adana ciyawa yana daidaita wannan. Silage ciyawa ce danya (masara, dawa ko Napier) da aka ajiye ba tare da iska ba ta yadda za ta yi tsami (fermentation) ta kasance da danshi kuma mai kyau don ci na tsawon watanni. Busasshiyar ciyawa (hay) ciyawa ce ko tsiro mai wake da aka yanka aka busar a rana har ta bushe isasshe don a ajiye ta ba tare da ta ruɓe ba.",
            "Silage, bisa hanyar FAO: ku yayyanka ƙanana, ku cika da sauri, ku danne sosai kuma ku rufe ta yadda iska ba za ta shiga ba. Ku yanke masara ko dawa lokacin da hatsin ya yi laushi kamar madara zuwa kamar kullu. Ku yayyanka ciyawar gajeru-gajeru, ku cika rami, bututun roba, buhu ko ganga mai tsabta da sauri, ku fitar da duk wani wurin iska ta hanyar taka ko dannewa, sannan ku rufe da roba ku ɗora masa nauyi. Napier da sauran ciyawa ba su da sukari sosai; manoma sau da yawa suna ƙara molasses (ruwan sukari) don taimaka musu su yi tsami (ku tambayi jami'in faɗakarwarku yawansa). Ku bar shi a rufe na wasu makonni, kuma idan an buɗe, ku fitar da abin da kuke buƙata kowace rana ku sake rufewa. Silage mai kyau yana da ƙamshi mai zaƙi da tsami; ku zubar da sassan da suka yi fumfuna ko suka ruɓe.",
            "Fumfuna a abinci na iya samar da guba (mycotoxin), kamar aflatoxin. Guba ce da ba a gani da ke rage girma, madara da haihuwa, tana sa dabbobi rashin lafiya, kuma tana iya shiga cikin madara, ƙwai da nama. Binciken ILRI a Kenya ya sami aflatoxin a yawancin abincin shanun madara. Ku hana ta: ku saya abinci daga injinan niƙa da kuka amince da su, ku duba cewa ya bushe, yana zuba sosai kuma yana da ƙamshi sabo, ku ajiye buhuna a kan katako (pallet) daga ƙasa da nesa da bango, ƙarƙashin rufin da ba ya yoyo, ku fara amfani da abinci mafi tsufa, kuma kada ku taɓa ciyar da abinci mai fumfuna, ko da ga wasu dabbobi."
          ],
          steps: ["Silage: ku girbe a matakin da ya dace ku yayyanka ƙanana.", "Ku cika rami, bututu, buhu ko ganga da sauri ku danne sosai don fitar da iska.", "Ku rufe da roba ta yadda iska ba za ta shiga ba ku ɗora nauyi; ku bar shi a rufe na wasu makonni.", "Busasshiyar ciyawa: ku yanka, ku busar a rana, ku riƙa juyawa, ku ajiye a bushe ƙarƙashin rufi.", "Rumbun abinci: katako daga ƙasa, nesa da bango, rufin da ba ya yoyo.", "Ku fara amfani da abinci mafi tsufa; ku zubar da duk abin da ya yi fumfuna, ya dunƙule ko yake wari."],
          words: [["Silage", "ciyawa danya da aka ajiye ba tare da iska ba ta yadda za ta yi tsami ta kasance mai kyau don ciyarwa na watanni."], ["Busasshiyar ciyawa (hay)", "ciyawa ko tsiro mai wake da aka yanka aka busar a rana don ajiya."], ["Mycotoxin", "guba da fumfuna ke samarwa a abinci, kamar aflatoxin; ba a ganinta."], ["Katakon ajiya (pallet)", "dandamali na katako ko roba da ke ɗaga buhuna daga ƙasa."]],
          slides: [
            { title: "Me yasa ake adana ciyawa", bullets: ["Ciyawa da yawa a damina, kaɗan a rani", "Silage da busasshiyar ciyawa suna sa madara da girma su dore"] },
            { title: "Silage a matakai huɗu (FAO)", bullets: ["Ku yayyanka ƙanana", "Ku cika da sauri", "Ku danne sosai don fitar da iska", "Ku rufe sosai ku ɗora nauyi"] },
            { title: "Busasshiyar ciyawa", bullets: ["Ku yanka ciyawa ko tsiro mai wake", "Ku busar a rana, kuna juyawa sau da yawa", "Ku ajiye a bushe, ƙarƙashin rufi, daga ƙasa"] },
            { title: "Ku hana fumfuna da gubarsa", bullets: ["Ku saya daga injinan niƙa amintattu; ku duba ya bushe da ƙamshi sabo", "Katako, nesa da bango, rufin da ba ya yoyo", "Mafi tsufa da farko; kada ku taɓa ciyar da abinci mai fumfuna"] }
          ],
          sources: [FAO_SILAGE, FAO_SILAGE_SMALL, ILRI_MYCO],
          tryIt: "Ku je inda kuke ajiye abinci. Ku rubuta abubuwa uku da za su iya barin danshi ko fumfuna su shiga, da yadda za ku gyara kowanne. Sannan ku tsara silage ko busasshiyar ciyawa guda ɗaya: wace ciyawa, yaushe za ku yanka ta, da me za ku ajiye ta a ciki.",
          youCanNow: "yin silage ko busasshiyar ciyawa da ajiye abinci ta hanyar da ke hana danshi, fumfuna da gubarsa.",
          quickCheck: [
            { objective: "O4", q: "Mene ne abu mafi muhimmanci wajen yin silage?", options: ["Barin shi a buɗe don ya sha iska", "Fitar da iska da rufe shi sosai ta yadda iska ba za ta shiga ba", "Ƙara ruwa kowace rana", "Ajiye shi a rana"], answer: 1, why: "Silage yana daɗewa ne kawai idan an fitar da iska kuma an hana ta shiga, ta yadda zai yi tsami." },
            { objective: "O4", q: "Buhun abincin shanun madara yana da dunƙule masu launin toka kuma yana wari kamar danshi. Me za ku yi?", options: ["Ku ciyar da shanun da ba sa ba da madara", "Ku haɗa shi da sabon abinci", "Ku ciyar da kaji da shi a maimakon haka", "Kada ku ciyar da kowace dabba da shi"], answer: 3, why: "Fumfuna na iya ɗauke da guba da ke cutar da kowace dabba kuma tana iya shiga cikin madara da ƙwai." }
          ]
        },
        {
          title: "Ciyarwa bisa mataki: shirin abinci mai sassa uku",
          objectives: ["O5"],
          minutes: 5,
          goal: "Rubuta shirin abinci don kowane mataki na rukunin dabbobi ɗaya.",
          text: [
            "Dabbobi suna buƙatar abinci dabam-dabam a matakai dabam-dabam. Kajin nama (broilers): abincin farko (starter), sannan abincin ƙarshe (finisher) (wasu manoma suna ƙara abincin girma, grower, a tsakani). Kajin ƙwai (layers): garin abincin 'yan tsaki (chick mash), sannan na masu girma (growers mash), sannan garin abincin kajin ƙwai (layers mash) tun daga lokacin fara kwanciya, da ƙarin calcium don ɓawon ƙwai. Aladu: abincin 'yan alade (creep ko weaner), na girma, na ƙarshe, sannan abinci na musamman don aladu masu ciki da masu shayarwa. Shanun madara: maraƙi, karsana, saniya mai hutu (dry cow) da lokacin ba da madara, da abinci mai ƙarfi da aka daidaita da madarar da kowace saniya ke bayarwa. Ku canja daga wani abinci zuwa na gaba a cikin 'yan kwanaki, ba dare ɗaya ba.",
            "Ku yi amfani da shiri mai sauƙi mai sassa uku don kowane mataki. Sashe na 1, abinci na tushe: abin da galibin abincin ya ƙunsa. Ga shanu da awaki wannan ciyawa ce (kiwo, Napier, busasshiyar ciyawa, silage, karan masara); ga aladu da kaji hatsin kuzari ne da dusa a cikin garin abincin. Sashe na 2, abinci mai ƙarfi: ɓangaren mai yawan furotin (kek ɗin iri masu mai, garin kifi, abincin shanun madara da aka saya ko garin abinci mai daidaito) da ke cike abin da abinci na tushe ya rasa. Sashe na 3, ƙarin sinadarai: gishiri, ma'adinai, bitamin da calcium, kamar yadda takardar kaya ta ce. Da ruwa mai tsabta koyaushe.",
            "Ciyarwa bisa mataki tana adana kuɗi: ba za ku biya abincin farko mai yawan furotin don dabbar da ba ta ƙara buƙatarsa ba. Ku auna ko ku ƙiyasta nawa kowane mataki ke ci kuma ku lura da dabbobin: idan sun rame, ko suna yin ƙwai ko madara ƙasa da haka, ku nemi jami'in faɗakarwarku ya duba shirin. Takardar buhu, ko jagorar wurin ƙyanƙyasa ko ta irin dabbar, tana faɗin lokacin canja abinci don irin dabbobin kasuwanci."
          ],
          steps: ["Ku zaɓi rukunin dabbobi ɗaya.", "Ku jera matakansu daga ƙanana zuwa kasuwa, ƙwai ko madara.", "Don kowane mataki ku rubuta abinci na tushe.", "Ku ƙara abinci mai ƙarfi da ke cike shi.", "Ku ƙara ƙarin sinadarai da ruwa.", "Ku rubuta lokacin canjawa zuwa mataki na gaba, kuma ku canja a cikin 'yan kwanaki."],
          words: [["Abinci na tushe (basal feed)", "babban ɓangaren abinci: ciyawa ga dabbobi masu tuƙa, hatsin kuzari ga aladu da kaji."], ["Lokacin fara kwanciya (point of lay)", "shekarun da ƙananan kaji ke kusan fara yin ƙwai."], ["Lokacin ba da madara (lactation)", "lokacin da dabba mace ke samar da madara."]],
          slides: [
            { title: "Abinci yana canjawa bisa mataki", bullets: ["Kajin nama: abincin farko, sannan na ƙarshe", "Kajin ƙwai: na 'yan tsaki, na girma, sannan na kajin ƙwai", "Aladu: 'yan alade, girma, ƙarshe, uwa; shanu: bisa madara"] },
            { title: "Shiri mai sassa uku", bullets: ["1. Tushe: ciyawa, ko hatsi da dusa", "2. Abinci mai ƙarfi: ƙarin furotin", "3. Ƙarin sinadarai: gishiri, ma'adinai, bitamin, calcium"] },
            { title: "Ruwa, kuma ku canja a hankali", bullets: ["Ruwa mai tsabta koyaushe", "Ku canja abinci a cikin 'yan kwanaki"] },
            { title: "Me yasa yake adana kuɗi", bullets: ["Babu abincin farko mai tsada ga dabbobin da ba sa buƙatarsa", "Ku lura da yanayin jiki, ƙwai da madara"] }
          ],
          sources: [FEEDIPEDIA],
          tryIt: "Ku zaɓi rukunin dabbobi ɗaya. Ku rubuta tebur mai layi ɗaya don kowane mataki da layuka huɗu a tsaye: abinci na tushe, abinci mai ƙarfi, ƙarin sinadarai, da lokacin canjawa zuwa mataki na gaba.",
          youCanNow: "rubuta shirin ciyarwa bisa mataki mai abinci na tushe, abinci mai ƙarfi da ƙarin sinadarai don kowane mataki.",
          quickCheck: [
            { objective: "O5", q: "A shirin abinci mai sassa uku don saniyar madara, mene ne abinci na tushe?", options: ["Ciyawa kamar ciyawar Napier, busasshiyar ciyawa ko silage", "Premix na ma'adinai", "Abincin shanun madara", "Gishiri"], answer: 0, why: "Ga dabbobi masu tuƙa, ciyawa ce galibin abincin; abinci mai ƙarfi da ƙarin sinadarai suna cike shi." },
            { objective: "O5", q: "Ƙananan kajinku sun kusa lokacin fara kwanciya. Wane abinci za su koma?", options: ["Abincin farko na kajin nama", "Garin abincin 'yan tsaki", "Garin abincin kajin ƙwai, a canja a cikin 'yan kwanaki", "Hatsin masara kawai"], answer: 2, why: "Garin abincin kajin ƙwai yana ba da ƙarin calcium da ake buƙata don ɓawon ƙwai; ku canja a hankali a cikin 'yan kwanaki." }
          ]
        },
        {
          title: "Lissafin kuɗin abincinku kan kowane kg na ƙarin nauyi ko lita na madara",
          objectives: ["O6"],
          minutes: 6,
          goal: "Lissafa kuɗin abincinku kan kowane kg, da kuɗin abinci kan kowane kg na ƙarin nauyi, tire na ƙwai ko lita ta madara.",
          text: [
            "Mataki na 1, kuɗi kan kowane kg na haɗi. Ku ninka kg na kowane kaya da farashinsa, ku haɗa su, ku raba da jimillar kg. Misali da farashin shilling na Kenya na ƙirƙira: 74.3 kg na masara a KES 40 = 2,972; 25.7 kg na kek ɗin waken soya a KES 90 = 2,313. Jimilla KES 5,285 don kg 100, wato KES 52.85 kan kowane kg. Ku ƙara kuɗin niƙa, sufuri da premix idan kuna biyansu.",
            "Mataki na 2, abinci kan kowane abin da aka samar. Don nama, ku rubuta abincin da aka ci da nauyin da aka ƙara: idan aladu 10 sun ci kg 900 na abincin girma kuma sun ƙara kg 300, kowane kg na ƙarin nauyi ya ɗauki kg 3 na abinci (ma'aunin mayar da abinci zuwa nauyi, FCR). Kuɗin abinci kan kowane kg na ƙarin nauyi = 3 x KES 52.85 = KES 158.55. Don ƙwai: abincin da garken ya ci a mako x farashi kan kowane kg, a raba da tiren da aka tattara. Don madara: kuɗin abincin saniya na rana (ciyawa da abincin shanun madara) a raba da litar da ta bayar a ranar.",
            "Ku yi amfani da lambobin don yanke shawara. Ku kwatanta kuɗin abinci kan kowane kg na ƙarin nauyi ko kowace lita da farashin sayarwarku. Ku gwada kaya mafi araha, kamar ƙarin tsire-tsire masu wake ko dusar gida, amma ku duba cewa har yanzu yana kai wa ga abin da ake nema kuma baya rage girma ko madara. Ku yi aiki da kuɗin ƙasarku, ko NGN, GHS ko XOF: hanyar ɗaya ce. Farashi suna canjawa, don haka ku sabunta takardar duk lokacin da kuka saya."
          ],
          steps: ["Ku jera kowane kaya, kg ɗinsa a cikin kowane kg 100 da farashinsa kan kowane kg.", "Ku ninka kg da farashi don kowane kaya ku haɗa su.", "Ku ƙara kuɗin niƙa, sufuri da premix; ku raba da jimillar kg.", "Ku rubuta abincin da aka ci da nauyin da aka ƙara, ƙwai ko madarar da aka samar.", "Kuɗin abinci kan kowane kg na ƙarin nauyi = FCR x kuɗi kan kowane kg na abinci.", "Kuɗin abinci kan kowace lita ko tire = kuɗin abinci na rana ko mako / lita ko tire."],
          words: [["Ma'aunin mayar da abinci zuwa nauyi (FCR)", "kg na abinci da ake buƙata don kg 1 na ƙarin nauyi; ƙasa ya fi kyau."], ["Kuɗi kan kowane kg na ƙarin nauyi", "kuɗin abincin da aka kashe don kowane kg da dabbar ta ƙara."], ["Tire", "tire na ƙwai 30, ma'aunin da aka saba da shi wajen sayar da ƙwai."]],
          slides: [
            { title: "Mataki na 1: kuɗi kan kowane kg na haɗi", bullets: ["kg x farashi don kowane kaya, sannan ku haɗa", "Misali: KES 5,285 kan kg 100 = KES 52.85 kan kowane kg", "Ku ƙara niƙa, sufuri da premix"] },
            { title: "Mataki na 2: abinci kan kowane kg na ƙarin nauyi", bullets: ["kg 900 na abinci / kg 300 na ƙarin nauyi = FCR na 3", "3 x KES 52.85 = KES 158.55 kan kowane kg na ƙarin nauyi"] },
            { title: "Ƙwai da madara", bullets: ["Ƙwai: kuɗin abinci na mako / tiren da aka tattara", "Madara: kuɗin abinci na rana / litar ranar"] },
            { title: "Ku yi amfani da shi don yanke shawara", bullets: ["Ku kwatanta da farashin sayarwarku", "Ku gwada kayan gida mafi araha; ku duba abin da ake nema", "Ku sabunta duk lokacin da kuka saya; farashin misalai ne"] }
          ],
          tryIt: "Aikin ƙarshe: ku haɗa abinci da lissafin kuɗinsa don rukunin dabbobi ɗaya. Ku rubuta shiri mai sassa uku, ku daidaita abinci mai ƙarfi da murabba'in Pearson, ku jera kg a cikin kowane kg 100, ku lissafa kuɗinsa kan kowane kg da farashin wurinku, sannan ku lissafa kuɗin abinci kan kowane kg na ƙarin nauyi, kowane tire na ƙwai ko kowace lita ta madara.",
          youCanNow: "lissafa kuɗin abinci kan kowane kg da gano kuɗin abincinku kan kowane kg na ƙarin nauyi, tire na ƙwai ko lita ta madara.",
          quickCheck: [
            { objective: "O6", q: "Kg 100 na haɗi ya kashe XOF 20,000 gaba ɗaya. Nawa ne kan kowane kg?", options: ["XOF 2,000", "XOF 20", "XOF 100", "XOF 200"], answer: 3, why: "20,000 / kg 100 = XOF 200 kan kowane kg." },
            { objective: "O6", q: "Kajin nama sun ci kg 400 na abinci kuma sun ƙara kg 250. Mene ne FCR?", options: ["1.6", "0.6", "2.5", "4.0"], answer: 0, why: "FCR = abincin da aka ci / nauyin da aka ƙara = 400 / 250 = 1.6." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Ku adana, ku tsara kuma ku lissafa kuɗin abincinku",
        questions: [
          { objective: "O4", q: "Me yasa manoma ke ƙara molasses wajen yin silage na ciyawar Napier?", options: ["Napier ba ta da sukari sosai, kuma molasses yana taimaka mata ta yi tsami", "Don ya fi zaƙi ga yara", "Don hana ruwan sama shiga", "Don maye gurbin murfin roba"], answer: 0, why: "Ciyawa maras sukari ba ta yin tsami da kyau; molasses yana ba da sukarin da ake buƙata don tsamin." },
          { objective: "O4", q: "Wane rumbu ne ya fi kiyaye abinci daga fumfuna?", options: ["Buhuna a kan ƙasa jingine da bango", "Buhuna a waje ƙarƙashin bishiya", "Buhuna a kan katako, nesa da bango, ƙarƙashin rufin da ba ya yoyo", "Tarin abinci a buɗe a gidan dabbobi"], answer: 2, why: "Kiyaye buhuna a bushe da nesa da ƙasa da bango yana hana danshi, fumfuna da gubarsa." },
          { objective: "O5", q: "Mene ne sassa uku na shirin abinci a wannan kwas?", options: ["Abincin safe, rana da dare", "Abinci na tushe ko ciyawa, abinci mai ƙarfi, da ƙarin sinadarai", "Ciyawa, ruwa da gishiri kawai", "Abincin farko, na girma da na ƙarshe kawai"], answer: 1, why: "Shirin shi ne abinci na tushe, abinci mai ƙarfi da ƙarin sinadarai, da ruwa, don kowane mataki." },
          { objective: "O6", q: "Abinci yana KES 50 kan kowane kg kuma FCR shi ne 3. Nawa ne kuɗin abinci kan kowane kg na ƙarin nauyi?", options: ["KES 53", "KES 17", "KES 300", "KES 150"], answer: 3, why: "Kuɗin abinci kan kowane kg na ƙarin nauyi = FCR x farashi kan kowane kg = 3 x 50 = KES 150." },
          { objective: "O6", q: "Abincin saniya yana kashe NGN 3,000 a rana kuma tana ba da lita 10. Nawa ne kuɗin abinci kan kowace lita?", options: ["NGN 30", "NGN 300", "NGN 3,000", "NGN 30,000"], answer: 1, why: "3,000 / lita 10 = NGN 300 kan kowace lita." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Abincin Dabbobi da Haɗa Abinci da Kayan Gida",
    questions: [
      { objective: "O1", q: "Mene ne manyan buƙatu huɗu da dabba ke samu daga abinci da ruwa?", options: ["Kuzari, furotin, ma'adinai da bitamin, da ruwa", "Ciyawa, gishiri, sukari da mai", "Masara, wake, shinkafa da madara", "Zafi, haske, iska da ƙasa"], answer: 0, why: "Kuzari, furotin, ma'adinai da bitamin, da ruwa su ne buƙatu huɗu." },
      { objective: "O1", q: "Wane abinci ne ke ba da calcium galibi don ɓawon ƙwai?", options: ["Dusar masara", "Ciyawar Napier", "Farar ƙasa ko ɓawon katantanwa", "Molasses"], answer: 2, why: "Farar ƙasa da ɓawon da aka niƙa su ne tushen calcium ga kajin ƙwai." },
      { objective: "O1", q: "Waɗanne dabbobi ne ke buƙatar abinci mai zare a matsayin tushen abincinsu?", options: ["Kajin nama", "Kajin ƙwai", "'Yan alade da aka yaye", "Shanu, awaki da tumaki"], answer: 3, why: "Dabbobi masu tuƙa suna narkar da abinci mai zare; shi ne tushen abincinsu." },
      { objective: "O2", q: "Kusan nawa ne furotin a hatsin masara?", options: ["Kusan kashi 8 zuwa 10", "Kusan kashi 44", "Kusan kashi 60", "Babu ko kaɗan"], answer: 0, why: "Feedipedia ta ba masara furotin kusan kashi 8 zuwa 10.5, don haka galibi abincin kuzari ce." },
      { objective: "O2", q: "Wanne daga cikin waɗannan abincin furotin ne?", options: ["Busasshen rogo", "Dusar alkama", "Garin kifi", "Karan masara"], answer: 2, why: "Garin kifi yana da furotin sosai; sauran galibi kuzari ne ko abinci mai zare." },
      { objective: "O2", q: "Wane amfani ne tsarin push-pull na icipe ke da shi ga manomin shanun madara?", options: ["Yana maye gurbin ruwa", "Desmodium da Napier ko Brachiaria suna ba da ciyawa mai inganci", "Yana kawar da buƙatar ma'adinai", "Yana mayar da shanu dabbobi masu tuƙa"], answer: 1, why: "Push-pull yana kare masara kuma tsire-tsiren da ke tare da ita ciyawa ce mai inganci." },
      { objective: "O2", q: "Me ya kamata ku duba lokacin sayen garin kifi?", options: ["Cewa daga majiya amintacciya yake kuma ba a haɗa shi da yashi ko gishiri ba", "Cewa shi ne mafi araha", "Cewa yana da ruwa", "Cewa yana warin fumfuna"], answer: 0, why: "Ingancin garin kifi yana bambanta kuma ana iya gauraya shi da wasu abubuwa, don haka ku saya daga majiyoyi amintattu." },
      { objective: "O3", q: "Murabba'in Pearson yana daidaita sinadarai nawa a lokaci ɗaya?", options: ["Duka", "Uku", "Biyu", "Ɗaya"], answer: 3, why: "Yana daidaita sinadari ɗaya, yawanci furotin, tsakanin kayan abinci biyu." },
      { objective: "O3", q: "Masara (kashi 9) da kek ɗin waken soya (kashi 44), ana neman 18. Sassa nawa na kek ɗin waken soya?", options: ["26", "9", "35", "44"], answer: 1, why: "18 - 9 = sassa 9 na kek ɗin waken soya." },
      { objective: "O3", q: "Me yasa ba za ku iya amfani da masara (kashi 9) da dusa (kashi 10) don kai wa furotin kashi 18 ba?", options: ["Abin da ake nema dole ya kasance tsakanin ƙimar kayan biyu", "Dusa ta yi araha sosai", "Murabba'in yana aiki ga shanu ne kawai", "Masara ba ta da furotin"], answer: 0, why: "18 ya fi duka kayan biyu, don haka babu haɗinsu da zai kai shi." },
      { objective: "O3", q: "Bayan murabba'in, ta yaya za ku duba haɗinku?", options: ["Ku tambayi maƙwabci", "Ku shaƙa shi", "kg x kason furotin na kowane kaya ya kamata ya haɗu ya kai abin da ake nema", "Ku auna dabbobin a ranar"], answer: 2, why: "Haɗa furotin daga kowane kaya yana tabbatar da cewa haɗin ya kai abin da ake nema." },
      { objective: "O4", q: "Mene ne matakai huɗu na silage da FAO ke koyarwa?", options: ["Yanka, wanke, busar, ƙona", "Yayyanka, cika da sauri, danne, rufe", "Shuka, ban ruwa, nome ciyawa, sayarwa", "Jiƙa, tafasa, sanyaya, saka a buhu"], answer: 1, why: "Yayyankawa, cika da sauri, dannewa da rufewa suna sa silage ya yi kyau." },
      { objective: "O4", q: "Mene ne mycotoxin?", options: ["Bitamin a cikin abinci", "Wani nau'in ciyawa", "Ƙarin sinadarin furotin", "Guba da ba a gani da fumfuna ke samarwa a abinci"], answer: 3, why: "Fumfuna na iya samar da guba kamar aflatoxin, da ke cutar da dabbobi kuma tana iya shiga cikin madara." },
      { objective: "O4", q: "Wace doka ce ke taimakawa wajen kiyaye abincin da aka ajiye?", options: ["Ku fara amfani da abinci mafi tsufa", "Ku ajiye buhuna a ƙasa kusa da bango", "Ku ajiye abinci a gidan dabbobi", "Ku haɗa abinci mai fumfuna da sabo"], answer: 0, why: "Wanda ya fara shiga ya fara fita: wannan yana hana abinci zama har ya lalace." },
      { objective: "O5", q: "Me yasa ake ciyarwa bisa mataki?", options: ["Yana sa dabbobi su ƙara ci", "Kowane mataki yana da buƙatu dabam, don haka ba za ku biya sinadaran da ba sa buƙata ba", "Kamfanonin abinci ne suka wajabta", "Yana kawar da buƙatar ruwa"], answer: 1, why: "Daidaita abinci da mataki yana biyan buƙatu kuma yana adana kuɗi." },
      { objective: "O5", q: "Yaya ya kamata ku canja daga wani abinci zuwa na gaba?", options: ["Dare ɗaya", "Sai lokacin da dabbobi ba su da lafiya", "A cikin 'yan kwanaki", "Kada ku taɓa canja abinci"], answer: 2, why: "Canji a hankali yana hana ɓata narkewar abinci da cin dabbar." },
      { objective: "O5", q: "Ga aladu da kaji, mene ne ɓangaren tushe na abincinsu?", options: ["Ciyawar Napier", "Gishiri", "Garin kifi", "Hatsin kuzari da dusa a cikin garin abincin"], answer: 3, why: "Aladu da kaji ba sa iya narkar da abinci mai zare sosai, don haka hatsi da dusa su ne tushensu." },
      { objective: "O6", q: "Me FCR na 2 yake nufi?", options: ["kg 2 na abinci don kowane kg 1 na ƙarin nauyi", "Abinci 2 a rana", "Dabbobi 2 kan kowace kwanon ci", "Furotin kashi 2"], answer: 0, why: "FCR shi ne kg na abinci da ake buƙata don kg 1 na ƙarin nauyi." },
      { objective: "O6", q: "Kg 50 na masara a GHS 4 da kg 50 na dusa a GHS 2. Nawa ne kan kowane kg na haɗin?", options: ["GHS 6", "GHS 3", "GHS 300", "GHS 2"], answer: 1, why: "(50 x 4) + (50 x 2) = 300 don kg 100, wato GHS 3 kan kowane kg." },
      { objective: "O6", q: "Garken kajin ƙwai yana cin abincin da ke kashe KES 7,000 a mako kuma kuna tattara tire 70. Nawa ne kuɗin abinci kan kowane tire?", options: ["KES 10", "KES 70", "KES 100", "KES 490"], answer: 2, why: "7,000 / tire 70 = KES 100 na abinci kan kowane tire." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 2, 4, 7, 8, 12, 14, 17, 18] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe na abincin ku sake dubawa.",
    criteria: [
      { name: "Rukuni, mataki da shiri mai sassa uku", objective: "O5", notYet: "Ba a faɗi rukuni ko mataki ba, ko ɗaya daga cikin abinci na tushe, abinci mai ƙarfi da ƙarin sinadarai ya ɓace.", meets: "Ya faɗi rukunin da matakin kuma ya ba da abinci na tushe, abinci mai ƙarfi, ƙarin sinadarai da ruwa.", exceeds: "Ya kuma nuna mataki na gaba da yaushe da yadda za a canja abinci." },
      { name: "Kayan an rarraba su kuma sun dace", objective: "O2", notYet: "An rarraba kayan ba daidai ba ko ba su da aminci (misali masu fumfuna, ko kek ɗin auduga ba tare da iyaka ga kaji ba).", meets: "Ya yi amfani da kayan gida da aka rarraba daidai zuwa kuzari, furotin, mai zare da ƙarin sinadarai.", exceeds: "Ya yi amfani da tsiro mai wake ko dusa ta gida mafi araha kuma ya bayyana yadda take kiyaye abin da ake nema." },
      { name: "Murabba'in Pearson", objective: "O3", notYet: "Ba a nuna lissafi ba, ko abin da ake nema ba ya tsakanin kayan biyu.", meets: "An zana murabba'i, sassa da kg a cikin kowane kg 100 daidai ne, kuma dubawar ta haɗu ta kai abin da ake nema cikin maki 0.5.", exceeds: "Ya ware kayayyakin da ba sa canjawa kamar premix da farko kuma ya daidaita sauran." },
      { name: "Lissafin kuɗi", objective: "O6", notYet: "Kuɗi kan kowane kg babu, ko lissafin ba daidai ba ne.", meets: "Kuɗi daidai kan kowane kg na haɗi da kuɗin abinci kan kowane kg na ƙarin nauyi, tire na ƙwai ko lita ta madara, a kuɗin ƙasa.", exceeds: "Ya kwatanta shi da farashin sayarwa kuma ya nuna hanya ɗaya ta rage kuɗin." },
      { name: "Ingancin abinci da ajiya", objective: "O4", notYet: "Bai faɗi komai ba game da inda ake ajiye abinci ko yadda ake hana fumfuna.", meets: "Ya faɗi inda ake ajiye abinci da yadda ake kiyaye shi a bushe babu fumfuna, mafi tsufa da farko.", exceeds: "Ya haɗa da shirin silage ko busasshiyar ciyawa don rani." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka haɗa ko suka gyara aƙalla abinci ɗaya da murabba'in Pearson cikin kwanaki 30 (binciken biyo baya)",
      "Masu koyo da suka yi silage ko busasshiyar ciyawa kafin rani mai zuwa",
      "Canjin kuɗin abinci kan kowane kg na ƙarin nauyi, tire na ƙwai ko lita ta madara da masu koyo suka bayar bayan wata uku",
      "Ƙarancin rahotannin abinci mai fumfuna da cututtuka masu alaƙa da abinci a garkunan dabbobi da kajin masu koyo"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Takarda, alƙalami da na'urar lissafi ta waya; teburin lissafi (spreadsheet) a waya ba dole ba ne",
      "Farashin wurin don kayan abinci 8 zuwa 10, da takardun kaya ko ƙimomin masu sayarwa na furotin ɗinsu",
      "Don nuni ga ƙungiya: ciyawar da aka yayyanka, buhun roba mai ƙarfi ko bututu, da sikeli",
      "Kusan minti 70 zuwa 80 gaba ɗaya, a gajerun zama: darussa, atisaye, gwaje-gwaje da aikin ƙarshe"
    ],
    facilitatorNotes: [
      "Kafin zaman, ku tattara farashin abinci na wurin da ƙimomin furotin (takardun masu sayarwa, ɗakin gwajin abinci ko ofishin faɗakarwa) don masu koyo su yi atisaye da lambobi na gaske.",
      "Ku yi murabba'in Pearson tare a kan allo ko babbar takarda da misali ɗaya na wurin, sannan ku bar masu koyo bibbiyu su yi na biyu.",
      "Ku yi nunin silage a buhu idan lokaci ya ba da dama, kuma ku buɗe shi tare da ƙungiyar bayan 'yan makonni.",
      "Kada ku ba da yawan abinci mai magani, ƙarin sinadari ko magani; ku mayar da waɗannan tambayoyi ga likitan dabbobi da takardar kaya.",
      "Ku ba da maki ga abincin da aka lissafa kuɗinsa da ma'aunin rubric kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
