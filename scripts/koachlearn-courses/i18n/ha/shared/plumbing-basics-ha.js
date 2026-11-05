"use strict";

// Koach Learn course, Hausa (ha) translation of shared/plumbing-basics.js. Translated from the English file.
// Structure, ids, objective tags, answer indexes and URLs are identical to the English; --check compares them.

const BLS = "https://www.bls.gov/ooh/construction-and-extraction/plumbers-pipefitters-and-steamfitters.htm";

module.exports = {
  id: "plumbing-basics-ha",
  lang: "ha",
  translationOf: "plumbing-basics",
  category: "Workforce Development",
  name: "Tushen Aikin Famfo (Plumbing)",
  skills: "Bin hanyar ruwan sha da ta magudanar ruwa, Bayanin trap da vent, Auna bututu da lissafin gangarar magudanar ruwa, Gane haɗurran aikin famfo, Tsara gyare-gyare masu sauƙi bisa tsari mai aminci, Shirin hanyarku zuwa koyon sana'ar famfo",
  outcome: "bayanin yadda ruwa ke shiga gini da yadda ƙazanta ke fita daga cikinsa, auna bututu da lissafin gangarar magudanar ruwa, faɗin haɗurran aikin famfo da yadda za ku zauna lafiya, tsara gyara mai sauƙi bisa tsari mai aminci, da bin tsari mai ranaku zuwa koyon sana'ar famfo (apprenticeship) da lasisi.",
  about: [
    "Masu aikin famfo (plumbers) suna kawo ruwa mai tsabta cikin gidaje, makarantu, asibitoci da masana'antu, kuma suna fitar da ruwan da aka yi amfani da shi lafiya. Kowane gini yana buƙatarsu, kuma yawancinsu suna koyon sana'ar ne a koyon sana'a mai albashi (apprenticeship), ba a jami'a ba. Wannan kwas ɗin na duk mai tunanin bin wannan hanya ne: matasa, tsofaffin sojoji, masu dawowa gida daga gidan yari, masu neman aiki, da manyan da ke komawa karatu.",
    "Za ku koyi tsare-tsare biyu da ke cikin kowane gini (ruwan sha, da tsarin magudanar ruwa, ƙazanta da iska), dalilin da yasa trap da vent ke hana iskar magudanar shara shiga, nau'o'in bututu da kayan haɗi na yau da kullum, da lissafin da masu famfo ke yi kowace rana: tsawon yanka da gangarar magudanar ruwa. Sannan za ku koyi haɗurran aikin, tsari mai aminci na gyare-gyare masu sauƙi, da yadda koyon sana'a da lasisi ke aiki.",
    "Wannan kwas ɗin yana shirya ku ne. Ba ya ba ku lasisi ko takardar shaida. Yawancin jihohi da wasu birane suna ba masu famfo lasisi, kuma su ne ke tsara ƙa'idojin ƙwarewa da jarabawa. Ayyukan hannu kamar yanka da haɗa bututu, walda da wuta (soldering), aikin layin gas da aikin rami ana koyon su ne gaban malami ƙwararre, ba daga bidiyo kaɗai ba.",
    "Kowane darasi yana ɗaukar kusan minti biyar, da ɗan aikin \"Gwada yanzu\" da tambayoyi biyu. Akwai gwajin ilimi bayan kowane babi, da jarabawa mai tambayoyi 20 a ƙarshe. Abin da za ku gama da shi shi ne shirinku na farawa a aikin famfo, mai ranaku na gaske."
  ],
  finalTask: "Ku yi shirinku na farawa a aikin famfo: (1) zanen hannu na bandaki ko kicin ɗaya da ke nuna layukan ruwan zafi da na sanyi, makullan ruwa (shutoff valves), trap, magudanar ruwa da vent, da kibiyoyi da ke nuna hanyar da ruwa ke bi; (2) takardar lissafi mai tsawon yanka bututu biyu da gangarar magudanar ruwa ɗaya, da aikin da aka nuna; (3) jerin haɗurran wani aikin famfo ɗaya da kariya ga kowane haɗari; da (4) tsari mai ranaku da ke ambaton shirye-shiryen koyon sana'a ko horo biyu kusa da ku, abin da jiharku ko birninku ke buƙata don lasisin famfo (daga shafin hukuma, da adireshin shafin), da rana ga kowane mataki.",
  // ---- ADDIE: Analysis ----
  analysis: {
    learners: "Matasa da manya da ke neman sana'ar hannu da ba ta buƙatar digiri na shekara huɗu: masu neman aiki, tsofaffin sojoji, masu dawowa gida daga gidan yari, baƙi da manyan da ke komawa karatu. Wasu sun yi aikin hannu (gyaran gini, gine-gine, aikin soja); da yawa ba su taɓa aiki da bututu ba.",
    startingPoint: "Suna iya karanta gajerun umarni, amfani da tef ɗin aunawa ko rula, da yin lissafin lambobi cikakku. Yawancinsu sun san inda sink da bandaki suke, amma ba za su iya bayanin inda ruwa ke fitowa ba, dalilin da yasa magudanar ruwa ke da trap, yadda ake auna bututu, ko yadda mutum ke zama mai famfo mai lasisi.",
    gap: "'Yan kwangila da shirye-shiryen koyon sana'a suna son mataimaka da suka san sassa da kalmomi na asali, suna iya aunawa da yin lissafi mai sauƙi, kuma suna ɗaukar tsaro da muhimmanci. Masu koyo suna buƙatar wannan tushe, da tsari na gaskiya mai ranaku, don su nemi aiki da ƙarfin gwiwa kuma su guji biyan kuɗin horon da ba ya kai wa ga aiki.",
    constraints: [
      "Matakin karatu: kalmomi masu sauƙi da gajerun jimloli (kusan aji 6 zuwa 8); ana bayanin kowace kalmar sana'a",
      "Babu aikin wuta (torch), layin gas, rami ko magudanar shara a wannan kwas: ana koyon su gaban malami ƙwararre da kayan kariya da suka dace",
      "Na'urori: waya ko kwamfutar ɗakin karatu don karanta shafukan hukuma; takarda, alƙalami da tef ɗin aunawa ko rula don atisaye",
      "Lokaci: darussa na minti 5 zuwa 6 da suka dace da aiki, makaranta da ganawa",
      "Lasisi ya bambanta bisa jiha da birni: masu koyo suna duba ƙa'idojin a shafin hukuma na inda suke zaune"
    ],
    prerequisites: "Babu. Kwas ɗin \"Fara Sana'a a Ayyukan Hannu na Ƙwarewa\" mataki ne mai kyau na farko don zaɓar sana'a; wannan kwas ɗin yana zurfafa a kan aikin famfo."
  },
  // ---- ADDIE: Design (objectives: condition, observable action, standard) ----
  objectives: [
    { id: "O1", condition: "Idan aka ba ku zane ko hoton kicin ko bandaki", action: "bin hanyar ruwan sha da tsarin magudanar ruwa, ƙazanta da iska, da faɗin sunan kowane sashe", standard: "da makullan ruwa, trap, magudanar ruwa da vent a rubuce, kuma kibiyoyin hanyar ruwa suna nuna inda ya dace" },
    { id: "O2", condition: "Idan aka ba ku bayanin wani aikin famfo", action: "rubuta jerin haɗurran aikin da kariya ga kowanne", standard: "kuna ambaton aƙalla haɗurra biyar, kowanne da matakin tsaro ko kayan kariya da ya dace da shi" },
    { id: "O3", condition: "Idan aka ba ku ma'aunin bututu da hanyar magudanar ruwa", action: "lissafin tsawon yanka bututu da yawan gangarar da magudanar ruwa ke buƙata", standard: "kuna samun aƙalla 4 cikin 5 na atisaye daidai, da aikin da aka nuna" },
    { id: "O4", condition: "Idan aka ba ku wata matsalar famfo mai sauƙi ta gida", action: "tsara matakan gyaran bisa tsari mai aminci", standard: "kuna farawa da rufe ruwa kuma kuna ƙarewa da duba ɗigo, ba tare da wani mataki mara aminci ba" },
    { id: "O5", condition: "Ta amfani da shafukan hukuma na jiharku", action: "rubuta tsari mai ranaku don shiga koyon sana'ar famfo da neman lasisi", standard: "da aƙalla matakai biyar masu ranaku da majiyar hukuma ga kowace buƙata" }
  ],
  chapters: [
    {
      name: "Babi na 1: Yadda aikin famfo ke aiki",
      lessons: [
        {
          title: "Tsare-tsare biyu: ruwa yana shiga, ƙazanta tana fita",
          objectives: ["O1"],
          minutes: 5,
          goal: "Bin hanyar da ruwa mai tsabta ke shiga gini da hanyar da ruwan da aka yi amfani da shi ke fita.",
          text: [
            "Kowane gini yana da tsare-tsaren famfo biyu daban-daban. Tsarin ruwan sha (water supply) yana kawo ruwa mai tsabta da matsi. Tsarin magudanar ruwa, ƙazanta da iska (DWV) yana fitar da ruwan da aka yi amfani da shi da ƙazanta, ta hanyar nauyi (gravity). Ba sa taɓa haɗuwa: haka ne ke kiyaye ruwan sha lafiya.",
            "Ruwan sha: ruwa yana zuwa daga babban bututun birni ko rijiya, ya ratsa ta mitar ruwa (idan ruwan birni ne) da babban makullin ruwa, sannan ya shiga ginin. Wani reshe yana zuwa injin dumama ruwa (water heater), don haka daga can akwai layin ruwan sanyi da na zafi zuwa kowace na'urar ruwa. Yawancin na'urorin ruwa ma suna da ƙananan makullan ruwa nasu a ƙarƙashin sink ko bayan bandaki.",
            "Magudanar ruwa, ƙazanta da iska: idan ruwa ya bar sink, yana faɗawa ta cikin trap zuwa bututun magudanar ruwa. Magudanan ruwa suna haɗuwa da manyan bututu kuma suna gudana zuwa magudanar shara ta ginin, sannan zuwa magudanar shara ta birni ko tankin septic. Bututun iska (vents) suna hawa sama su fita ta rufin gida don su bar iska ta shiga magudanan ruwa.",
            "Masu famfo kuma suna saka da gyara na'urorin ruwa (sink, bandaki, baho, shawa) da injunan da ke amfani da ruwa, kamar injin dumama ruwa da injin wanke kwanuka. Pipefitters da steamfitters suna yin irin wannan aiki a manyan tsare-tsare na masana'antu da manyan gine-gine."
          ],
          steps: [
            "Ku fara daga mitar ruwa ko rijiya, ku nemo babban makullin ruwa.",
            "Ku bi layin ruwan sanyi zuwa injin dumama ruwa; daga can, layin ruwan zafi da na sanyi suna zuwa na'urorin ruwa.",
            "A kowace na'urar ruwa, ku nemo ƙananan makullan ruwa.",
            "Ku bi ruwan da aka yi amfani da shi ƙasa ta trap, zuwa magudanar ruwa, har zuwa magudanar shara ko tankin septic."
          ],
          words: [
            ["Tsarin ruwan sha (water supply system)", "bututun da ke kawo ruwa mai tsabta cikin gini da matsi."],
            ["DWV (drain, waste and vent)", "bututun da ke fitar da ruwan da aka yi amfani da shi da ƙazanta ta nauyi, da bututun iska da ke barin iska ta shiga."],
            ["Babban makullin ruwa (main shutoff valve)", "makullin da ke rufe ruwa ga dukan ginin."],
            ["Na'urar ruwa (fixture)", "duk abin da ke amfani da ruwa ko riƙe shi kuma yake zubar da shi: sink, bandaki, baho ko shawa."],
            ["Babban bututun ruwa (water main)", "babban bututun jama'a a ƙarƙashin titi da ke kawo ruwan birni."],
            ["Tankin septic (septic tank)", "tanki a ƙarƙashin ƙasa da ke tace ƙazantar gida inda babu magudanar shara ta birni."]
          ],
          slides: [
            { title: "Tsare-tsare biyu da ba sa haɗuwa", bullets: ["Ruwan sha: ruwa mai tsabta yana shiga, da matsi", "DWV: ruwan da aka yi amfani da shi yana fita, ta nauyi"] },
            { title: "Bin hanyar ruwan sha", bullets: ["Mita ko rijiya, sannan babban makullin ruwa", "Injin dumama ruwa yana ba da layin ruwan zafi", "Ƙananan makullan ruwa a kowace na'urar ruwa"] },
            { title: "Bin hanyar magudanar ruwa", bullets: ["Na'urar ruwa, sannan trap, sannan bututun magudanar ruwa", "Magudanar shara ta gini zuwa ta birni ko tankin septic", "Bututun iska suna hawa ta rufin gida"] },
            { title: "Abin da masu famfo ke aiki a kai", bullets: ["Bututu, na'urorin ruwa da injin dumama ruwa", "Pipefitters: manyan tsare-tsare a manyan gine-gine"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Plumbers, pipefitters and steamfitters (masu famfo)", url: BLS }
          ],
          tryIt: "Ku je kicin ko bandaki inda kuke zaune. Ba tare da kun kwance komai ba, ku duba ƙarƙashin sink. A takarda, ku zana abin da kuke gani: layukan ruwa biyu (zafi da sanyi), ƙananan makullan ruwa, trap mai lanƙwasa da magudanar ruwa da ke shiga bango. Ku ƙara kibiyoyi na hanyar da ruwa ke bi. Sannan ku gano inda babban makullin ruwa na ginin yake (ku tambayi mai gida ko manaja idan ba ku tabbata ba). Ku ajiye zanen: shi ne farkon sashe na 1 na aikinku na ƙarshe.",
          youCanNow: "bin hanyar da ruwa mai tsabta ke shiga gini da hanyar da ruwan da aka yi amfani da shi ke fita.",
          quickCheck: [
            { objective: "O1", q: "Me ke tura ruwa a cikin tsarin magudanar ruwa?", options: ["Matsin ruwa daga birni", "Nauyi (gravity)", "Injin dumama ruwa", "Makullan ruwa"], answer: 1, why: "Magudanan ruwa suna fitar da ruwa ta nauyi, don haka dole bututunsu su yi gangara ƙasa." },
            { objective: "O1", q: "Bututu ya fashe kuma ruwa yana fesowa ko'ina. Wane makulli ne ke rufe ruwa ga dukan ginin?", options: ["Ƙaramin makulli a ƙarƙashin sink ɗaya", "Makullin zubar da ruwa a jikin injin dumama ruwa", "Murfin bututun iska a rufin gida", "Babban makullin ruwa"], answer: 3, why: "Babban makullin ruwa yana rufe ruwan sha ga dukan ginin." }
          ]
        },
        {
          title: "Trap, vent da gangara: hana iskar magudanar shara shiga",
          objectives: ["O1", "O3"],
          minutes: 5,
          goal: "Bayyana aikin trap da vent, da lissafin yawan gangarar da bututun magudanar ruwa ke buƙata.",
          text: [
            "Idan kuka duba ƙarƙashin sink za ku ga bututu mai lanƙwasa, sau da yawa kamar harafin P. Wannan shi ne trap. Koyaushe yana riƙe da ɗan ruwa. Wannan ruwan yana toshe iskar magudanar shara, wadda ke da wari mara daɗi kuma tana iya sa mutane rashin lafiya, daga hawowa ta magudanar ruwa zuwa cikin ɗaki. Bandaki (toilet) yana da trap a cikin jikinsa.",
            "Vents bututu ne da ke haɗe da magudanan ruwa kuma suna hawa ta rufin gida. Suna barin iska ta shiga tsarin magudanar ruwa don ruwa ya gudana sumul kuma kada ya tsotse ruwan da ke cikin trap. Idan sink yana yin ƙara kamar gurguɗi, ko trap ya bushe kuma ɗaki yana wari kamar magudanar shara, wataƙila vent ɗin babu shi ko an toshe shi.",
            "Dole bututun magudanar ruwa su yi gangara ƙasa don ƙazanta ta gudana. Idan sun yi lebur sosai, ƙazanta tana zama kuma tana toshewa. Dokokin famfo (plumbing codes) ne ke tsara gangarar. Ga ƙananan bututun magudanar ruwa, dokoki sau da yawa suna neman kusan gangarar inci 1/4 a kowace ƙafa ta bututu; dokar yankinku ce ke faɗin ainihin lambar. Don samun jimillar gangara, ku ninka gangara da tsawo: magudanar ruwa mai ƙafa 12 a inci 1/4 a kowace ƙafa tana buƙatar gangarar inci 3.",
            "Dokar famfo (plumbing code) ita ce tarin ƙa'idojin aikin famfo mai aminci. Wurare da yawa suna amfani da International Plumbing Code ko Uniform Plumbing Code, sau da yawa da canje-canje na yanki. Ofishin gine-gine na yankinku zai faɗa muku wace doka ce ke aiki, kuma yana duba aikin ta hanyar dubawa (inspection)."
          ],
          steps: [
            "Ku nemo gangarar da dokarku ko malaminku ya bayar (atisaye: inci 1/4 a kowace ƙafa).",
            "Ku auna tsawon hanyar magudanar ruwa da ƙafa.",
            "Ku ninka: tsawo x gangara = jimillar gangara da inci.",
            "Ku duba: dole ƙarshen nesa ya yi ƙasa da farko da wannan yawan."
          ],
          words: [
            ["Trap", "bututu mai lanƙwasa a ƙarƙashin na'urar ruwa da ke riƙe ruwa don toshe iskar magudanar shara."],
            ["Iskar magudanar shara (sewer gas)", "iska mai wari mara daɗi da cutarwa da ke taruwa a magudanan shara da na ruwa."],
            ["Vent", "bututu da ke barin iska ta shiga magudanan ruwa ta fita ta rufin gida, don trap su riƙe ruwansu."],
            ["Gangara (slope ko pitch)", "yawan saukar bututun magudanar ruwa a kowace ƙafa ta tsawo, don ƙazanta ta gudana ƙasa."],
            ["Dokar famfo (plumbing code)", "ƙa'idojin aikin famfo mai aminci da jiha ko birni ke amincewa da su, kuma masu dubawa ke dubawa."],
            ["Dubawa (inspection)", "ziyarar ofishin gine-gine don duba cewa aikin ya cika ka'ida."]
          ],
          slides: [
            { title: "Trap: hatimin ruwa", bullets: ["Bututu mai lanƙwasa da koyaushe ke riƙe ruwa", "Yana toshe iskar magudanar shara daga ɗaki", "Bandaki yana da shi a jikinsa"] },
            { title: "Vents suna sa magudanan ruwa su numfasa", bullets: ["Suna hawa ta rufin gida", "Suna kiyaye ruwa a cikin trap", "Ƙara ko warin magudanar shara: ku duba vent"] },
            { title: "Magudanan ruwa suna gangara ƙasa", bullets: ["Idan sun yi lebur sosai, ƙazanta tana zama ta toshe", "Jimillar gangara = tsawo x gangara", "Atisaye: ƙafa 12 x inci 1/4 = inci 3"] },
            { title: "Doka da mai dubawa", bullets: ["Wurare da yawa suna amfani da IPC ko UPC, da canje-canje na yanki", "Ofishin gine-gine yana duba aikin"] }
          ],
          tryIt: "Atisaye kawai: a takarda, ku lissafa jimillar gangara ga magudanan ruwa uku a inci 1/4 a kowace ƙafa: ƙafa 8, ƙafa 10 da ƙafa 16. Ku nuna aikinku (misali, 8 x 1/4 = inci 2). Sannan ku sake duba ƙarƙashin sink ku nuna trap. Ku rubuta jimla ɗaya kan dalilin da yasa dole koyaushe ya riƙe ruwa. Amsoshi: inci 2, inci 2 1/2, inci 4.",
          youCanNow: "bayyana aikin trap da vent da lissafin yawan gangarar da bututun magudanar ruwa ke buƙata.",
          quickCheck: [
            { objective: "O1", q: "Me yasa trap koyaushe yake riƙe da ɗan ruwa?", options: ["Don toshe iskar magudanar shara daga shiga ɗaki", "Don sanyaya bututu", "Don ƙara zafin ruwa", "Don auna yawan ruwan da aka yi amfani da shi"], answer: 0, why: "Ruwan da ke cikin trap hatimi ne da ke hana iskar magudanar shara shiga." },
            { objective: "O3", q: "Atisaye kawai: magudanar ruwa tana da tsawon ƙafa 20 kuma dole ta gangara inci 1/4 a kowace ƙafa. Jimillar gangara nawa take buƙata?", options: ["Inci 4", "Inci 20", "Inci 5", "Inci 1/4"], answer: 2, why: "20 x 1/4 = 5, don haka magudanar ruwan tana buƙatar gangarar inci 5." }
          ]
        },
        {
          title: "Bututu, kayan haɗi da auna yanka",
          objectives: ["O3"],
          minutes: 6,
          goal: "Faɗin nau'o'in bututu na yau da kullum da lissafin tsawon yanka bututu daga ma'aunin tsakiya zuwa tsakiya.",
          text: [
            "Masu famfo suna amfani da nau'o'in bututu da dama. Ana amfani da tagulla (copper) don layukan ruwan sha; ana haɗa shi ta walda da wuta (soldering ko sweating), ko da kayan haɗi na matsawa ko na turawa. PEX bututun roba ne mai lanƙwasuwa don layukan ruwan sha, ana haɗa shi da kayan haɗi na crimp ko expansion. PVC da ABS bututun roba ne masu ƙarfi da ake amfani da su galibi don magudanan ruwa da vents. Tsofaffin gidaje na iya samun bututun ƙarfe galvanized ko cast iron. Bututu da kayan haɗi na ruwan sha dole su zama marasa gubar dalma (lead free) bisa dokar tarayya.",
            "Kayan haɗi (fittings) suna canza hanya ko haɗa bututu: elbow yana juya kusurwa, tee yana yin reshe, coupling yana haɗa guda biyu madaidaita, adapter kuma yana haɗa nau'o'i biyu daban-daban. Girman bututu sunan sana'a ne (nominal): bututun inci 1/2 girman sana'a ne, ba ainihin ma'aunin cikinsa ko wajensa ba.",
            "Masu famfo sau da yawa suna aunawa daga tsakiya zuwa tsakiya: daga tsakiyar wani kayan haɗi zuwa tsakiyar na gaba. Amma bututu ba ya kai tsakiyar kayan haɗi. Kowane kayan haɗi yana da ragi (fitting allowance, ko take-off): nisan daga tsakiyarsa zuwa inda bututu ke tsayawa a cikinsa. Don samun tsawon yanka, ku cire ragin kowane ƙarshe.",
            "Misali (atisaye kawai, lambobin ƙirƙira): tsakiya zuwa tsakiya inci 24 ne, kuma kowane elbow yana da ragin inci 1/2. Tsawon yanka = 24 - 1/2 - 1/2 = inci 23. Ainihin ragi yana fitowa daga jadawalin mai ƙera kayan ko daga malaminku, kuma koyaushe ku auna sau biyu kafin ku yanka sau ɗaya."
          ],
          steps: [
            "Ku auna tsakiya zuwa tsakiya tsakanin kayan haɗi biyu.",
            "Ku nemo ragin kowane kayan haɗi (jadawalin mai ƙera ko malami).",
            "Ku cire ragin kowane ƙarshe: tsawon yanka = tsakiya zuwa tsakiya - ragi 1 - ragi 2.",
            "Ku auna sau biyu, ku yi alama a bututu, sannan ku yanka."
          ],
          words: [
            ["Tagulla (copper)", "bututun ƙarfe da ake amfani da shi don layukan ruwa, sau da yawa ana haɗa shi ta walda da wuta."],
            ["PEX", "bututun roba mai lanƙwasuwa da ake amfani da shi don layukan ruwan zafi da na sanyi."],
            ["PVC da ABS", "bututun roba masu ƙarfi da ake amfani da su galibi don magudanan ruwa da vents."],
            ["Kayan haɗi (fitting)", "sashe da ke haɗa bututu ko canza hanyarsu: elbow, tee, coupling, adapter."],
            ["Girman sana'a (nominal size)", "sunan sana'a na girman bututu, ba ainihin ma'auni ba."],
            ["Tsakiya zuwa tsakiya (center to center)", "ma'auni daga tsakiyar wani kayan haɗi zuwa tsakiyar na gaba."],
            ["Ragi (fitting allowance ko take-off)", "nisan daga tsakiyar kayan haɗi zuwa inda bututu ke tsayawa a cikinsa."],
            ["Mara gubar dalma (lead free)", "bisa dokar tarayya, bututu da kayan haɗi da matsakaicin dalma (lead) bai wuce 0.25% ba a fuskokin da ke taɓa ruwa, da solder da flux da dalmarsu ba ta wuce 0.2% ba."]
          ],
          slides: [
            { title: "Nau'o'in bututu na yau da kullum", bullets: ["Tagulla da PEX: ruwan sha", "PVC da ABS: magudanan ruwa da vents", "Tsofaffin gidaje: ƙarfe galvanized, cast iron"] },
            { title: "Kayan haɗi", bullets: ["Elbow yana juyawa, tee yana yin reshe", "Coupling yana haɗawa, adapter yana canza nau'in bututu", "Sassan ruwan sha dole su zama marasa dalma"] },
            { title: "Auna yanka", bullets: ["Ku auna tsakiya zuwa tsakiya", "Ku cire ragin kowane ƙarshe", "Misali: 24 - 1/2 - 1/2 = inci 23"] },
            { title: "Ku auna sau biyu, ku yanka sau ɗaya", bullets: ["Ragi yana fitowa daga jadawalin mai ƙera", "Girma sunan sana'a ne (nominal)"] }
          ],
          sources: [
            { name: "EPA: Amfani da bututu, kayan haɗi, solder da flux marasa dalma (lead free) don ruwan sha", url: "https://www.epa.gov/sdwa/use-lead-free-pipes-fittings-fixtures-solder-and-flux-drinking-water" }
          ],
          tryIt: "Atisaye kawai, da lambobin ƙirƙira: ku lissafa tsawon yanka ga bututu biyu. Bututu A: tsakiya zuwa tsakiya inci 36, ragin kowane kayan haɗi inci 3/4. Bututu B: tsakiya zuwa tsakiya inci 18 1/2, ragi inci 1/2 da inci 1. Ku nuna aikinku. Sannan ku yi amfani da tef ɗin aunawa ku yi alamar tsawon yanka na Bututu A a jikin tsiri na takarda ko kwali. Amsoshi: inci 34 1/2 da inci 17. Ku ajiye wannan takardar don sashe na 2 na aikinku na ƙarshe.",
          youCanNow: "faɗin nau'o'in bututu na yau da kullum da lissafin tsawon yanka bututu daga ma'aunin tsakiya zuwa tsakiya.",
          quickCheck: [
            { objective: "O3", q: "Atisaye kawai: tsakiya zuwa tsakiya inci 30 ne kuma ragin kowane kayan haɗi inci 1/2 ne. Menene tsawon yanka?", options: ["Inci 30", "Inci 31", "Inci 29 1/2", "Inci 29"], answer: 3, why: "30 - 1/2 - 1/2 = inci 29." },
            { objective: "O3", q: "Wane bututu ne aka fi amfani da shi don magudanan ruwa da vents a sababbin gidaje?", options: ["Tagulla (copper)", "PVC", "Bututun ban ruwa na lambu", "PEX"], answer: 1, why: "Bututun roba mai ƙarfi kamar PVC (ko ABS) ne ake amfani da shi galibi don magudanan ruwa da vents." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 1: Yadda aikin famfo ke aiki",
        questions: [
          { objective: "O1", q: "Wace magana ce gaskiya game da tsare-tsaren famfo biyu?", options: ["Ruwan sha da na magudanar ruwa suna haɗuwa a injin dumama ruwa", "Tsarin ruwan sha yana aiki ta nauyi", "Ruwan sha yana kawo ruwa mai tsabta da matsi; tsarin magudanar ruwa yana fitar da ƙazanta ta nauyi", "Vents suna kai ruwa mai tsabta zuwa rufin gida"], answer: 2, why: "Ruwan sha yana da matsi, magudanan ruwa suna aiki ta nauyi, kuma ba sa taɓa haɗuwa." },
          { objective: "O1", q: "Bandaki yana wari kamar magudanar shara kuma sink yana yin ƙara. Menene dalili ɗaya mai yiwuwa?", options: ["Injin dumama ruwa ya yi zafi sosai", "An toshe vent ko trap ya bushe", "Babban makullin ruwa a buɗe yake", "Bututun ruwan sha na tagulla ne"], answer: 1, why: "Vents suna kiyaye ruwa a cikin trap; idan an toshe vent ko trap ya bushe, iskar magudanar shara na iya shiga." },
          { objective: "O1", q: "Ina layin ruwan zafi yake farawa?", options: ["A injin dumama ruwa", "A bututun iska na rufin gida", "A trap", "A magudanar shara"], answer: 0, why: "Ruwan sanyi yana shiga injin dumama ruwa, kuma layin ruwan zafi yana tafiya daga can zuwa na'urorin ruwa." },
          { objective: "O3", q: "Atisaye kawai: magudanar ruwa mai ƙafa 16 dole ta gangara inci 1/4 a kowace ƙafa. Menene jimillar gangara?", options: ["Inci 2", "Inci 16", "Inci 8", "Inci 4"], answer: 3, why: "16 x 1/4 = inci 4." },
          { objective: "O3", q: "Me yasa kuke cire ragin kayan haɗi daga ma'aunin tsakiya zuwa tsakiya?", options: ["Don a rage kuɗin bututu", "Domin bututu yana tsayawa a cikin kayan haɗi kafin tsakiyarsa", "Domin bututu yana raguwa lokacin sanyi", "Ana buƙatarsa ne don PEX kaɗai"], answer: 1, why: "Bututu yana ƙarewa inda ya zauna a cikin kayan haɗi, ba a tsakiyar kayan haɗin ba." }
        ]
      }
    },
    {
      name: "Babi na 2: Tsaro, gyare-gyare masu sauƙi da hanyarku",
      lessons: [
        {
          title: "Haɗurran aikin famfo da yadda za ku zauna lafiya",
          objectives: ["O2"],
          minutes: 6,
          goal: "Rubuta jerin haɗurran wani aikin famfo da kariya ga kowanne.",
          text: [
            "BLS ta lissafa raunuka da suka zama ruwan dare ga masu famfo: yankewa daga kayan aiki masu kaifi, ƙuna daga bututu masu zafi da kayan walda, da faɗuwa daga tsani. Masu famfo kuma suna ɗaga kaya masu nauyi, suna aiki a wurare masu matsi, kuma sau da yawa suna aiki a waje a kowane yanayi.",
            "Ƙazantar magudanar shara (sewage) tana ɗauke da ƙwayoyin cuta. Ku sa safar hannu da kariyar ido idan kuna buɗe magudanar ruwa, ku wanke hannuwa kafin ku ci abinci ko ku taɓa fuskarku, kuma ku rufe raunuka. Ruwan zafi da tururi suna ƙona jiki, don haka ku bar layin injin dumama ruwa ya huce, kuma ku buɗe shi kawai yadda malaminku ya nuna muku. Aikin wuta (walda) na iya kunna gobara a cikin bango: ƙwararrun masu famfo suna amfani da garkuwar zafi (heat shield), suna ajiye injin kashe gobara kusa, kuma suna lura da wurin bayan sun gama.",
            "Gas: idan kuna jin warin gas, kada ku kunna komai ko ku danna makunnin wuta. Ku fita daga ginin ku kira kamfanin gas ko 911 daga waje. Aikin layin gas yana buƙatar horo kuma, a wasu jihohi, lasisi na musamman. Wutar lantarki da ruwa haɗi ne mai kisa: kada ku taɓa tsayawa cikin ruwa kusa da wayoyin lantarki, kuma ku nisanta igiyoyi da kayan aiki daga wurare masu jiƙe.",
            "Ramuka da wurare masu matsi: OSHA ta ce rushewar rami shi ne babban haɗari ga rayukan ma'aikata a aikin haƙa. Kada ku taɓa shiga rami sai an duba shi kuma an kare shi ta gangara (sloping), tallafi (shoring) ko akwatin rami (trench box), da hanya mai aminci ta shiga da fita. Ƙarƙashin gida (crawl space) da wurare masu matsi suna buƙatar abokin aiki da iska mai kyau."
          ],
          steps: [
            "Ku karanta aikin: me za ku buɗe, ku yanka, ku dumama ko ku ɗaga?",
            "Ku rubuta kowane haɗari: ƙwayoyin cuta, ƙuna, gobara, yankewa, faɗuwa, gas, wutar lantarki, rami, ɗaga kaya masu nauyi.",
            "Ku haɗa kowane haɗari da kariya: safar hannu, gilashin kariya, garkuwar zafi, injin kashe gobara, duba tsani, fita ku kira, wuri a bushe, rami da aka duba, ɗagawa tare da taimako.",
            "Idan wani abu ba shi da aminci, ku tsaya ku tambayi mai kula da ku."
          ],
          words: [
            ["Haɗari (hazard)", "duk wani abu a wurin aiki da zai iya cutar da ku."],
            ["PPE", "kayan kariya na jiki: safar hannu, gilashin kariya, takalma, kariyar kunne."],
            ["Walda da wuta (soldering ko sweating)", "haɗa bututun tagulla da kayan haɗi da narkakken solder da aka dumama da wuta (torch)."],
            ["Garkuwar zafi (heat shield)", "kushin da wuta ba ta kama da ake sakawa bayan haɗin bututu don kare bango daga wutar walda."],
            ["Akwatin rami (trench box)", "akwatin ƙarfe mai ƙarfi da ake sakawa cikin rami don kare ma'aikata idan gefensa ya rushe."],
            ["Wuri mai matsi (confined space)", "wuri mai matsi da ƙarancin hanyoyin shiga da fita, kamar ƙarƙashin gida ko rumbun ƙarƙashin ƙasa."]
          ],
          slides: [
            { title: "Raunukan aikin famfo na yau da kullum", bullets: ["Yankewa daga kayan aiki masu kaifi", "Ƙuna daga bututu masu zafi da wutar walda", "Faɗuwa daga tsani"] },
            { title: "Ƙwayoyin cuta, zafi da gobara", bullets: ["Sewage: safar hannu, gilashi, wanke hannuwa", "Ruwan zafi da tururi suna ƙonawa", "Wutar walda: garkuwar zafi da injin kashe gobara"] },
            { title: "Gas da wutar lantarki", bullets: ["Warin gas: ku fita, sannan ku kira daga waje", "Kada ku tsaya cikin ruwa kusa da wayoyin lantarki"] },
            { title: "Ramuka da wurare masu matsi", bullets: ["Kada ku shiga rami mara kariya", "Gangara, tallafi ko akwatin rami", "Ƙarƙashin gida: abokin aiki da iska mai kyau"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Plumbers, Work Environment (yanayin aiki)", url: BLS + "#tab-3" },
            { name: "OSHA: Trenching and excavation (aikin rami da haƙa)", url: "https://www.osha.gov/trenching-excavation" }
          ],
          tryIt: "Ku zaɓi aiki ɗaya: \"buɗe toshewar magudanar ruwan kicin\", \"canja injin dumama ruwa\" ko \"gyara ɗigon ruwa a ƙarƙashin gida (crawl space)\". A takarda, ku yi layuka biyu: Haɗari da Kariya. Ku rubuta aƙalla haɗurra biyar na wannan aikin da kariya ga kowanne. Ku ajiye shi: shi ne sashe na 3 na aikinku na ƙarshe.",
          youCanNow: "rubuta jerin haɗurran wani aikin famfo da kariya ga kowanne.",
          quickCheck: [
            { objective: "O2", q: "Kuna jin warin gas a ɗakin ƙarƙashin ƙasa inda kuke aiki. Me za ku fara yi?", options: ["Kunna ashana don nemo inda gas ke fita", "Kunna fitilu don ku ƙara gani", "Ci gaba da aiki ku faɗa wa wani daga baya", "Fita daga ginin ku kira kamfanin gas ko 911 daga waje"], answer: 3, why: "Tartsatsi ko wuta na iya kunna gas, don haka ku fara fita sannan ku kira daga waje." },
            { objective: "O2", q: "Wace kariya ce ta fi muhimmanci idan kuna buɗe magudanar shara?", options: ["Safar hannu da kariyar ido, sannan wanke hannuwa", "Garkuwar zafi", "Kariyar kunne kaɗai", "Akwatin rami"], answer: 0, why: "Sewage yana ɗauke da ƙwayoyin cuta, don haka kuna kare fata da idanunku kuma kuna wanke hannuwa." }
          ]
        },
        {
          title: "Gyare-gyare masu sauƙi bisa tsari mai aminci",
          objectives: ["O4"],
          minutes: 6,
          goal: "Tsara matakan gyaran famfo mai sauƙi bisa tsari mai aminci, daga rufe ruwa zuwa duba ɗigo.",
          text: [
            "Mataimaka da sababbin masu koyon sana'a sau da yawa suna farawa da ayyuka masu sauƙi. Kowanne yana bin tsari ɗaya mai aminci: rufe ruwa, sakin matsi, kare wurin, yin gyaran, buɗe ruwan a hankali, da duba ɗigo.",
            "Bandaki mai zubar da ruwa ba tsayawa: ruwa yana ci gaba da gudana cikin kwanon bandaki. Flapper da ya tsufa (hatimin roba a ƙasan tankin) dalili ne da aka saba. Ku rufe makullin ruwan bandakin, ku ja ruwa don tankin ya zube, ku canja flapper da wanda ya dace da wannan bandaki, ku sake buɗe ruwan ku kalli tankin yana cika. Idan ɗigon launin abinci (food coloring) a cikin tanki ya bayyana a kwanon ba tare da an ja ruwa ba, to har yanzu yana zubarwa.",
            "Sink mai jinkirin zubar da ruwa: ku fara gwada plunger. Idan bai yi aiki ba, ku saka bokiti a ƙarƙashin trap, ku sa safar hannu, ku sassauta slip nuts da hannu ko da filaya, ku cire trap ku share shi. Ku mayar da shi tare da washers suna fuskantar inda ya dace, ku buɗe ruwa ku duba ɗigo.",
            "Ku san iyakarku. Layukan gas, wutar injin dumama ruwa, babbar magudanar shara da duk abin da ke buƙatar izini (permit) na masu famfo masu lasisi ne. A gidan wani, ku yi abin da mai kula da ku ya ba ku kaɗai. Ku yi atisayen waɗannan matakan a takarda a nan; za ku koyi aikin hannu tare da malami."
          ],
          steps: [
            "Ku rufe ruwa a makullin na'urar ruwan (ko babban makulli idan babu).",
            "Ku saki matsi: ku buɗe famfo ko ku ja ruwan bandaki don ruwan ya zube.",
            "Ku kare wurin: bokiti, tawul, safar hannu da kariyar ido.",
            "Ku yi gyaran (canja sashen ko share trap).",
            "Ku sake buɗe ruwan a hankali.",
            "Ku duba ɗigo kuma ku gwada na'urar ruwan."
          ],
          words: [
            ["Flapper", "hatimin roba a ƙasan tankin bandaki da ke barin ruwa ya shiga kwano idan an ja ruwa."],
            ["Slip nut", "babban goro da ke riƙe trap na sink; sau da yawa ana iya sassauta shi da hannu."],
            ["Plunger", "kofin roba a jikin sanda da ke turawa da jan ruwa don buɗe toshewa."],
            ["Sakin matsi (relieve the pressure)", "buɗe famfo ko jan ruwa bayan rufe ruwa, don ruwa kada ya fesa idan kun buɗe layin."],
            ["Izini (permit)", "izinin hukuma daga ofishin gine-gine don yin wasu ayyukan famfo, sannan a yi dubawa."]
          ],
          slides: [
            { title: "Tsari mai aminci ga kowane gyara", bullets: ["Rufe ruwa, sakin matsi, kare wurin", "Gyara, buɗe ruwa a hankali, duba ɗigo"] },
            { title: "Bandaki mai zubar da ruwa ba tsayawa", bullets: ["Ku rufe ruwa ku ja ruwa don tankin ya zube", "Ku canja flapper da ya tsufa da wanda ya dace", "Gwajin launin abinci don ɗigo"] },
            { title: "Sink mai jinkirin zubar da ruwa", bullets: ["Ku fara gwada plunger", "Bokiti da safar hannu, sannan ku cire trap", "Ku mayar da shi ku duba ɗigo"] },
            { title: "Ku san iyakarku", bullets: ["Gas, wutar injin, babbar magudanar shara da aikin izini: masu lasisi", "Ku yi abin da mai kula da ku ya ba ku kaɗai"] }
          ],
          tryIt: "Ku rubuta kowane ɗaya daga cikin waɗannan matakan a guntun takarda daban, ku cakuɗa su, sannan ku jera su bisa tsari mai aminci don bandaki mai zubar da ruwa ba tsayawa: \"Ku kalli tankin yana cika\", \"Ku rufe makullin ruwan bandakin\", \"Ku canja flapper\", \"Ku ja ruwa don tankin ya zube\", \"Ku yi gwajin launin abinci\", \"Ku sake buɗe ruwan a hankali\". Sannan ku rubuta tsari mai aminci na share trap na sink da kalmominku, kuna farawa da bokiti.",
          youCanNow: "tsara matakan gyaran famfo mai sauƙi bisa tsari mai aminci, daga rufe ruwa zuwa duba ɗigo.",
          quickCheck: [
            { objective: "O4", q: "Menene matakin farko kafin ku cire layin ruwan sink?", options: ["Sassauta goron da sauri", "Buɗe famfo", "Rufe makullin ruwan wannan sink ɗin", "Kiran ofishin birni"], answer: 2, why: "Rufe ruwa da farko yana hana layin fesa ruwa idan kun buɗe shi." },
            { objective: "O4", q: "Kun gama mayar da trap na sink. Me ke biyo baya?", options: ["Tafiya nan take", "Buɗe ruwa ku duba ɗigo", "Fenti bututun", "Rufe babban makulli"], answer: 1, why: "Kowane gyara yana ƙarewa da gwaji da duba ɗigo." }
          ]
        },
        {
          title: "Hanyarku: koyon sana'a, lasisi da tsari mai ranaku",
          objectives: ["O5"],
          minutes: 6,
          goal: "Rubuta tsari mai ranaku don shiga koyon sana'ar famfo da neman lasisi, ta amfani da majiyoyin hukuma.",
          text: [
            "BLS ta ce yawancin masu famfo, pipefitters da steamfitters suna koyon sana'ar ta koyon sana'a (apprenticeship) na shekara 4 ko 5, da kusan awa 2,000 na horo mai albashi a wurin aiki a kowace shekara, da karatu a aji. Ƙungiyoyin ma'aikata (unions), ƙungiyoyin sana'a da kamfanoni ne ke ɗaukar nauyin koyon sana'a. Wasu suna farawa a matsayin mataimaka (helpers). Yawanci ana buƙatar takardar kammala sakandare ko makamancinta.",
            "BLS kuma ta ce yawancin jihohi da wasu yankuna suna buƙatar masu famfo su sami lasisi, sau da yawa bayan shekara 2 zuwa 5 na ƙwarewa da jarabawa. Wasu jihohi suna buƙatar lasisi na musamman don aikin layin gas. Ƙa'idoji sun bambanta, don haka ku duba shafin lasisi na hukuma na jiharku ko birninku. License Finder na CareerOneStop zai iya taimaka muku nemo shi. Idan kuna da tarihin laifi, ku tambayi hukumar yadda take duba tarihi kafin ku biya kuɗin horo.",
            "Don nemo koyon sana'a, ku yi amfani da Apprenticeship Job Finder a apprenticeship.gov, ku kira ƙungiyar masu famfo da pipefitters ta yankinku, ku tambayi 'yan kwangilar famfo ko suna ɗaukar mataimaka, kuma ku tambayi cibiyar ayyuka ta yankinku (American Job Center). Tsofaffin sojoji za su iya tambaya game da amfani da tallafin GI Bill don koyon sana'a da aka amince da shi.",
            "Albashi da yawan ayyuka suna canjawa kowace shekara. Ku karanta lambobin yanzu da shekararsu a shafin BLS maimakon ku amince da tallace-tallace ko bidiyo. Kafin ku biya kowace makaranta, ku tambaya: shin tana kai wa ga koyon sana'a ko aiki, kuma shin awoyinta suna ƙirguwa cikin awoyin lasisi na jiharku?"
          ],
          steps: [
            "Ku buɗe shafin lasisin famfo na jiharku (ku gwada License Finder na CareerOneStop). Ku rubuta matakan lasisi, awoyi da jarabawar da ya lissafa, da adireshin shafin.",
            "Ku bincika apprenticeship.gov don koyon sana'ar famfo kusa da ku. Ku rubuta guda biyu, da yadda da lokacin da za a nema.",
            "Ku rubuta aikin mataimaki ɗaya ko ɗan kwangila da za ku iya tuntuɓa yayin da kuke jira.",
            "Ku lissafa duk abin da kuke buƙata da farko: takardar sakandare ko GED, lasisin tuƙi, atisayen lissafi na asali.",
            "Ku sa rana a kowane mataki kuma ku nuna tsarin ga wani da zai riƙa bibiyar ku."
          ],
          words: [
            ["Koyon sana'a (apprenticeship)", "aiki mai albashi inda kuke koyon sana'a daga ƙwararrun ma'aikata, tare da karatu a aji."],
            ["Journeyworker (journeyman)", "mai famfo da ya gama horo kuma ya ci matakin lasisin da ke ba shi damar aiki ba tare da kulawa ta kusa ba."],
            ["Mataimaki (helper)", "ma'aikaci na matakin farko da ke taimakon masu famfo kuma yake koyo a wurin aiki."],
            ["Lasisi (license)", "izinin hukuma daga jiha ko birni don yin aikin famfo."],
            ["American Job Center", "ofishin jama'a kyauta da ke taimakon mutane su sami horo da aiki."]
          ],
          slides: [
            { title: "Yadda yawancin masu famfo ke koyo", bullets: ["Koyon sana'a mai albashi na shekara 4 ko 5", "Kusan awa 2,000 na aiki mai albashi a kowace shekara", "Tare da karatu a aji"] },
            { title: "Lasisi", bullets: ["Yawancin jihohi da wasu birane suna ba masu famfo lasisi", "Sau da yawa shekara 2 zuwa 5 na ƙwarewa da jarabawa", "Ku duba shafin hukuma na jiharku"] },
            { title: "Inda za ku nema", bullets: ["Job Finder na apprenticeship.gov", "Ƙungiyar ma'aikata ta yanki, 'yan kwangila, American Job Center"] },
            { title: "Tsarinku", bullets: ["Ƙa'idojin lasisi na hukuma da adireshin shafin", "Koyon sana'a biyu, aikin mataimaki ɗaya", "Rana a kowane mataki"] }
          ],
          sources: [
            { name: "US Bureau of Labor Statistics: Plumbers, How to Become One (yadda ake zama mai famfo)", url: BLS + "#tab-4" },
            { name: "Apprenticeship.gov: Apprenticeship Job Finder (mai nemo koyon sana'a)", url: "https://www.apprenticeship.gov/apprenticeship-job-finder" },
            { name: "CareerOneStop: License finder (mai nemo lasisi)", url: "https://www.careeronestop.org/Toolkit/Training/find-licenses.aspx" }
          ],
          tryIt: "Ku bi matakan don rubuta tsarinku a takarda ko a takardar kwamfuta kyauta. Ku rubuta aƙalla matakai biyar, kowanne da rana, da adireshin kowane shafin hukuma da kuka yi amfani da shi. Ku haɗa shi da zanenku, takardar lissafi da jerin haɗurra: tare su ne shirinku na farawa a aikin famfo.",
          youCanNow: "rubuta tsari mai ranaku don shiga koyon sana'ar famfo da neman lasisi, ta amfani da majiyoyin hukuma.",
          quickCheck: [
            { objective: "O5", q: "A ina ya kamata ku duba abin da jiharku ke buƙata don lasisin famfo?", options: ["Sharhi a ƙarƙashin bidiyo", "Tallar wata makarantar horo", "Ra'ayin aboki", "Shafin hukuma na hukumar lasisi ta jiha ko birni"], answer: 3, why: "Ƙa'idojin lasisi sun bambanta bisa wuri, kuma shafin hukuma ne ke da tasiri." },
            { objective: "O5", q: "Wane mataki na tsari ne aka rubuta mafi amfani?", options: ["\"Ku nemi koyon sana'ar famfo biyu daga apprenticeship.gov kafin 1 ga Maris\"", "\"Ku duba batun famfo\"", "\"Ku sami lasisi wata rana\"", "\"Ku koyi abubuwa da yawa\""], answer: 0, why: "Mataki mai amfani yana faɗin ainihin aikin, inda, da rana." }
          ]
        }
      ],
      check: {
        title: "Gwajin ilimi 2: Tsaro, gyare-gyare masu sauƙi da hanyarku",
        questions: [
          { objective: "O2", q: "Mai famfo zai yi walda bututun tagulla kusa da bangon katako. Me ke kare bangon?", options: ["Akwatin rami", "Garkuwar zafi, da injin kashe gobara a kusa", "Kariyar kunne", "Plunger"], answer: 1, why: "Garkuwar zafi tana tare wutar, kuma injin kashe gobara yana shirye idan gobara ta tashi." },
          { objective: "O2", q: "Ƙungiyarku tana buƙatar aiki a rami mai zurfi mai bangon ƙasa madaidaici kuma babu tallafi. Me za ku yi?", options: ["Ku shiga da sauri ku fito da sauri", "Ku shiga idan ƙasar ta yi kama da busasshiya", "Kada ku shiga sai an duba shi kuma an kare shi ta gangara, tallafi ko akwatin rami", "Ku tura sabon ma'aikaci ya fara shiga"], answer: 2, why: "OSHA ta ce kada a taɓa shiga rami sai an duba shi kuma an kare shi." },
          { objective: "O4", q: "Ku jera waɗannan don bandaki mai zubar da ruwa ba tsayawa: (a) canja flapper, (b) rufe makullin ruwa, (c) duba ɗigo, (d) ja ruwa don tankin ya zube.", options: ["b, d, a, c", "a, b, c, d", "d, a, b, c", "c, b, a, d"], answer: 0, why: "Rufe ruwa, zubar da tankin, yin gyaran, sannan duba ɗigo." },
          { objective: "O4", q: "Wane aiki ne ya kamata sabon mataimaki ya bar wa mai famfo mai lasisi?", options: ["Amfani da plunger a sink mai jinkiri", "Canja flapper na bandaki", "Matsar da layin gas zuwa sabuwar murhu", "Saka bokiti a ƙarƙashin trap"], answer: 2, why: "Aikin layin gas yana buƙatar horo kuma, a wasu jihohi, lasisi na musamman." },
          { objective: "O5", q: "A cewar BLS, ta yaya yawancin masu famfo ke koyon sana'ar?", options: ["Kwas na intanet na mako biyu", "Digiri na jami'a na shekara huɗu", "Kallon bidiyo a gida", "Koyon sana'a mai albashi na shekara 4 ko 5"], answer: 3, why: "BLS ta ce yawancinsu suna koyo ta koyon sana'a na shekara 4 ko 5 da horo mai albashi a wurin aiki." }
        ]
      }
    }
  ],
  quiz: {
    title: "Jarabawar ƙarshe: Tushen Aikin Famfo (Plumbing)",
    questions: [
      { objective: "O1", q: "Wane tsari ne ke fitar da ruwan da aka yi amfani da shi da ƙazanta daga gini?", options: ["Tsarin ruwan sha", "Tsarin magudanar ruwa, ƙazanta da iska (DWV)", "Mitar ruwa", "Injin dumama ruwa"], answer: 1, why: "Tsarin DWV yana fitar da ƙazanta ta nauyi kuma yana barin iska ta shiga ta vents." },
      { objective: "O1", q: "A ina ake yawan samun ƙananan makullan ruwa na sink?", options: ["A ƙarƙashin sink", "A rufin gida", "A cikin trap", "A magudanar shara"], answer: 0, why: "Makullan na'urorin ruwa yawanci suna ƙarƙashin sink ko bayan bandaki." },
      { objective: "O1", q: "Menene aikin bututun iska (vent)?", options: ["Kawo ruwan zafi zuwa shawa", "Riƙe ruwa don toshe iskar magudanar shara", "Auna yawan ruwan da ake amfani da shi", "Barin iska ta shiga magudanan ruwa don trap su riƙe ruwansu"], answer: 3, why: "Vents suna barin iska ta shiga don ruwa ya gudana sumul kuma kada a tsotse shi daga trap." },
      { objective: "O1", q: "Me ke toshe iskar magudanar shara daga hawowa ta magudanar ruwan sink?", options: ["Makullin ruwa", "Mitar ruwa", "Hatimin ruwa a cikin trap", "Famfo"], answer: 2, why: "Ruwan da trap ke riƙewa hatimi ne da ke hana iskar magudanar shara." },
      { objective: "O3", q: "Atisaye kawai: magudanar ruwa mai ƙafa 10 dole ta gangara inci 1/4 a kowace ƙafa. Menene jimillar gangara?", options: ["Inci 2 1/2", "Inci 10", "Inci 1/4", "Inci 4"], answer: 0, why: "10 x 1/4 = inci 2 1/2." },
      { objective: "O3", q: "Atisaye kawai: tsakiya zuwa tsakiya inci 40 ne kuma ragin kowane kayan haɗi inci 1 ne. Menene tsawon yanka?", options: ["Inci 40", "Inci 39", "Inci 42", "Inci 38"], answer: 3, why: "40 - 1 - 1 = inci 38." },
      { objective: "O3", q: "Wane bututu ne bututun roba mai lanƙwasuwa da ake amfani da shi don layukan ruwan sha?", options: ["Cast iron", "PEX", "ABS", "Ƙarfe galvanized"], answer: 1, why: "PEX bututu ne mai lanƙwasuwa don layukan ruwan zafi da na sanyi." },
      { objective: "O3", q: "Menene ma'anar \"girman sana'a\" (nominal size) ga bututu?", options: ["Ainihin ma'aunin wajensa", "Nauyinsa", "Girman sana'a, ba ainihin ma'auni ba", "Farashinsa"], answer: 2, why: "Girman bututu sunan sana'a ne; ainihin girman ciki da waje ya bambanta." },
      { objective: "O2", q: "A cewar BLS, wane rauni ne ya zama ruwan dare a aikin famfo?", options: ["Ƙuna daga bututu masu zafi da kayan walda", "Ƙunar rana daga allon na'ura", "Gajiyar ido daga karatu", "Rashin ji daga waƙa"], answer: 0, why: "BLS ta lissafa yankewa, ƙuna daga bututu masu zafi da kayan walda, da faɗuwa daga tsani." },
      { objective: "O2", q: "Kuna gyara ɗigo a ɗakin ƙarƙashin ƙasa mai jiƙe kusa da soket ɗin wuta. Menene zaɓi mai aminci?", options: ["Tsayawa cikin ruwan don ku kai da sauri", "Nisanta daga wayoyin lantarki yayin da kuke tsaye cikin ruwa, ku tambayi mai kula da ku game da kashe wutar", "Amfani da injin huda mai igiya cikin ruwan", "Taɓa soket ɗin don ganin ko yana aiki"], answer: 1, why: "Wutar lantarki da ruwa haɗi ne mai kisa, don haka ku nisanta kuma a fara magance wutar." },
      { objective: "O2", q: "Me yasa za ku wanke hannuwa bayan share magudanar ruwa, ko da kun sa safar hannu?", options: ["Don bututun ya yi sheƙi", "Al'ada ce kawai", "Ba a yarda da safar hannu ba", "Sewage yana ɗauke da ƙwayoyin cuta da ke iya sa ku rashin lafiya"], answer: 3, why: "Safar hannu tana taimakawa, amma wankewa yana cire ƙwayoyin cuta kafin ku ci abinci ko ku taɓa fuskarku." },
      { objective: "O4", q: "Menene tsari mai aminci na gyara mai sauƙi?", options: ["Gyara da farko, sannan rufe ruwa", "Rufe ruwa, sakin matsi, kare wurin, gyara, buɗe ruwa a hankali, duba ɗigo", "Buɗe ruwa gaba ɗaya, sannan gyara", "Duba ɗigo kafin ku fara, sannan ku tafi"], answer: 1, why: "Kowane gyara mai sauƙi yana farawa da rufe ruwa kuma yana ƙarewa da duba ɗigo." },
      { objective: "O4", q: "Bayan rufe ruwan sink, me yasa za ku buɗe famfo kafin ku cire layi?", options: ["Don sakin matsi don ruwa kada ya fesa", "Don dumama bututun", "Don gwada vent", "Don cika trap"], answer: 0, why: "Buɗe famfo yana zubar da matsin da ya rage a layin." },
      { objective: "O4", q: "Sink yana zubar da ruwa a hankali. Me za ku fara gwadawa?", options: ["Yanka bututun magudanar ruwa", "Neman izini (permit)", "Plunger", "Kashe babban makullin gas"], answer: 2, why: "Plunger shi ne mataki mai sauƙi na farko kafin a kwance trap." },
      { objective: "O4", q: "Ɗigon launin abinci a cikin tankin bandaki ya bayyana a kwano ba tare da an ja ruwa ba. Me hakan ke faɗa muku?", options: ["An toshe vent", "Injin dumama ruwa ya lalace", "Trap ya bushe", "Flapper har yanzu yana zubarwa"], answer: 3, why: "Launi da ya shiga kwano ba tare da jan ruwa ba yana nufin ruwa yana wucewa ta gefen flapper." },
      { objective: "O5", q: "Wannan kwas ɗin zai:", options: ["Ba ku lasisin famfo", "Ƙirgu a matsayin koyon sana'arku", "Shirya ku don horo da nema; ba ya ba ku lasisi", "Maye gurbin jarabawar jiharku"], answer: 2, why: "Lasisi yana fitowa daga jiha ko birni bayan ƙwarewa da jarabawar da suke buƙata." },
      { objective: "O5", q: "Wane shafi kyauta ne zai iya taimaka muku nemo koyon sana'ar famfo kusa da ku?", options: ["Tallar da ke bayyana kwatsam (pop-up)", "apprenticeship.gov", "Wani dandalin ayyuka da ba a sani ba", "Sashen sharhi na bidiyo"], answer: 1, why: "Apprenticeship.gov shafin Ma'aikatar Ƙwadago ta Amurka ne mai Apprenticeship Job Finder." },
      { objective: "O5", q: "Me BLS ta ce game da lasisin famfo?", options: ["Yawancin jihohi da wasu yankuna suna buƙatarsa, sau da yawa bayan shekara 2 zuwa 5 na ƙwarewa da jarabawa", "Babu jihar da ke buƙatarsa", "Masu famfo a manyan birane kaɗai ke buƙatarsa", "Kuna samunsa idan kun sayi kayan aiki"], answer: 0, why: "BLS ta ce yawancin jihohi da wasu yankuna suna ba masu famfo lasisi, sau da yawa da ƙwarewa da jarabawa." },
      { objective: "O5", q: "Wata makaranta ta yi alƙawarin kwas na famfo mai sauri. Wace tambaya ce ta fi taimaka muku kafin ku biya?", options: ["Shin ginin sabo ne?", "Wane launi ne rigunansu?", "Zan iya farawa ranar Litinin?", "Shin tana kai wa ga koyon sana'a ko aiki, kuma awoyinta suna ƙirguwa cikin lasisin jihata?"], answer: 3, why: "Horo mai kyau yana kai wa ga aiki kuma yana ƙirguwa cikin ƙa'idojin lasisi na inda kuke zaune." },
      { objective: "O5", q: "Wane mataki na tsari ne cikakke?", options: ["\"Ku kira ƙungiyar masu famfo ta yanki game da koyon sana'ar famfo kafin 10 ga Afrilu, bayan karanta shafin lasisi na jiha\"", "\"Ku koyi aikin famfo\"", "\"Ku nemi wani wuri nan ba da jimawa ba\"", "\"Ku yi tunani game da lasisi\""], answer: 0, why: "Yana faɗin aikin, wanda za a tuntuɓa, lokaci, da majiyar hukuma da za a fara dubawa." }
    ]
  },
  // ---- ADDIE: Evaluation ----
  // pre-test: these quiz questions, taken before Lesson 1, so the quiz shows how much each learner gained
  pretest: { title: "Gwajin farko: Me kuka riga kuka sani?", from: [0, 3, 4, 5, 8, 10, 11, 14, 16, 17] },
  rubric: {
    mastery: "\"Ya cika\" ko \"Ya wuce\" a kowane layi. Idan wani layi \"Bai kai ba tukuna\", ku gyara wannan sashe ku sake gwadawa.",
    criteria: [
      { name: "Zanen ruwan sha da magudanar ruwa", objective: "O1", notYet: "Wasu sassa babu su, ko kibiyoyi suna nuna inda bai dace ba.", meets: "An rubuta sunayen layukan ruwan zafi da sanyi, makullan ruwa, trap, magudanar ruwa da vent, da kibiyoyi suna nuna inda ya dace.", exceeds: "Yana kuma nuna inda babban makullin ruwa yake kuma yana bayyana a jimla ɗaya dalilin da yasa trap da vent ke da muhimmanci." },
      { name: "Lissafin famfo", objective: "O3", notYet: "Tsawon yanka ko gangara suna da kurakurai, ko ba a nuna aiki ba.", meets: "Tsawon yanka biyu da gangarar magudanar ruwa ɗaya, aƙalla 4 cikin 5 na atisaye daidai, da aikin da aka nuna.", exceeds: "Duka daidai ne, kuma mai koyo yana bayyana inda ainihin ragi da gangara ke fitowa." },
      { name: "Jerin haɗurra", objective: "O2", notYet: "Haɗurra ƙasa da biyar, ko kariya ba ta dace da haɗarin ba.", meets: "Aƙalla haɗurra biyar, kowanne da matakin tsaro ko kayan da suka dace.", exceeds: "Yana kuma faɗin abin da za a yi idan ana jin warin gas da lokacin da za a tsaya a tambayi mai kulawa." },
      { name: "Tsari mai aminci na gyara", objective: "O4", notYet: "Gyara yana farawa ba tare da rufe ruwa ba ko yana ƙarewa ba tare da duba ɗigo ba.", meets: "Gyare-gyaren biyu suna bisa tsari mai aminci, daga rufe ruwa zuwa duba ɗigo.", exceeds: "Yana kuma faɗin waɗanne ayyuka ne na mai famfo mai lasisi da dalili." },
      { name: "Tsari mai ranaku daga majiyoyin hukuma", objective: "O5", notYet: "Matakai ba su da ranaku, ko ƙa'idojin lasisi sun fito daga tallace-tallace ko rubuce-rubucen kafofin sada zumunta.", meets: "Aƙalla matakai biyar masu ranaku, koyon sana'a ko shirye-shirye biyu na gaske, da ƙa'idojin lasisi daga shafin hukuma da adireshinsa.", exceeds: "Yana kuma da aikin mataimaki da za a nema yayin jira da tambayoyin da za a yi wa kowane shiri." }
    ]
  },
  evaluation: {
    results: [
      "Masu koyo da suka kammala kwas ɗin kuma suka ci aikin ƙarshe (bisa ma'aunin rubric)",
      "Masu koyo da suka nemi koyon sana'ar famfo ko shirin horo cikin kwanaki 90",
      "Masu koyo da aka karɓa a koyon sana'a ko aka ɗauka a matsayin mataimakan masu famfo cikin watanni 6",
      "Masu koyo da suka zauna a koyon sana'arsu ko aikin mataimaki aƙalla watanni 6 (bisa faɗinsu a binciken biyo baya)",
      "Shirye-shiryen abokan aiki sun ce masu nema suna zuwa da sanin sassa, kalmomi, lissafi da matakan tsaro na asali"
    ]
  },
  // ---- ADDIE: Implementation ----
  implementation: {
    materials: [
      "Waya ko kwamfuta mai intanet don karanta shafukan BLS, OSHA, EPA, apprenticeship.gov da na lasisin jiha",
      "Takarda, alƙalami, tef ɗin aunawa ko rula da na'urar lissafi (na'urar lissafin waya ma ta isa)",
      "Na zaɓi: sink ko bandaki don a duba (kada a kwance komai don wannan kwas), ko hotunan trap na sink da kayan haɗin bututu",
      "Na zaɓi, ga shirye-shirye: guntayen bututu da kayan haɗi (PVC, PEX, tagulla) don a zagaya da su, ba tare da kayan aiki ko wutar walda ba"
    ],
    facilitatorNotes: [
      "Wannan kwas ɗin yana koyar da ilimi, matakai da tsaro. Kada ku sa masu koyo su yi walda, yanka bututu ko aiki a kan ruwa, gas ko magudanan ruwa masu aiki a cikinsa; ayyukan hannu na wurin bita ne da ake kulawa, tare da malami ƙwararre.",
      "Ku duba shafin lasisin famfo na jiharku da koyon sana'a na kusa kafin zaman, don masu koyo su duba su tare.",
      "Ku yi atisayen lissafin tsawon yanka da gangara a allo da misalai na ƙirƙira da dama; masu koyo da yawa suna buƙatar taimako da ɓangarori (fractions).",
      "Ku gayyaci mai famfo na yanki, mai kula da horo na ƙungiyar ma'aikata ko mai ɗaukar nauyin koyon sana'a don ya yi magana game da ranar aiki ta yau da kullum da yadda ake nema.",
      "Ga masu koyo masu tarihin laifi, ku sa su tambayi hukumar lasisi yadda take duba tarihi kafin su biya kuɗin horo.",
      "Ku ba da maki ga aikin ƙarshe da ma'aunin rubric, kuma ku ba da shawara kan layi ɗaya na \"Bai kai ba tukuna\" a lokaci ɗaya."
    ]
  }
};
