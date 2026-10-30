# Brief: translating Koach Learn courses into Swahili, Hausa, Amharic, Yoruba, Igbo and Portuguese (30 October 2026)

The owner wants every Koach Learn course in every language, "to be the standard for online education". English is the source; Spanish, French and Arabic already exist. This brief adds six languages:

| code | language | who reads it |
|---|---|---|
| `sw` | Swahili (Kiswahili) | Kenya, Tanzania, Uganda, Rwanda, eastern DR Congo |
| `ha` | Hausa | northern Nigeria, Niger, Ghana, Cameroon |
| `am` | Amharic | Ethiopia |
| `yo` | Yoruba | south-west Nigeria, Benin |
| `ig` | Igbo | south-east Nigeria |
| `pt` | Portuguese | Mozambique, Angola, Guinea-Bissau, Cabo Verde, São Tomé |

Every course becomes its own translated course. The file is `scripts/koachlearn-courses/i18n/<lang>/<folder>/<id>-<lang>.js`, where `<folder>/<id>.js` is the ENGLISH course. Always translate from the English file, never from another translation.

## Read first
1. `scripts/koachlearn-courses/README.md`: the "ADDIE" and "Translations" sections. Follow them exactly; this brief only adds what differs for these languages.
2. A model translated file with all the ADDIE parts, to copy the structure: `scripts/koachlearn-courses/i18n/fr/re-entry/reentry-ai-digital-confidence-fr.js`.

## Fixed words the builder adds (write your text to fit them)
- `outcome` finishes the sentence, and `youCanNow` finishes its sentence, and each objective reads "*condition*, YOU-WILL *action*, *standard*." :

| | outcome follows | youCanNow follows | objective "you will" | `action` form |
|---|---|---|---|---|
| sw | "Mwishoni utaweza ..." | "Sasa unaweza ..." | "utaweza" | infinitive (ku-...): "kutuma pesa kwa usalama" |
| ha | "A ƙarshe za ku iya ..." | "Yanzu za ku iya ..." | "za ku iya" | verbal noun: "aika kuɗi lafiya" |
| am | "በመጨረሻ ... ይችላሉ።" | "አሁን ... ይችላሉ።" | (none) "... ይችላሉ" is added after | verbal noun phrase WITHOUT ይችላሉ: "ገንዘብ በደህንነት መላክ" |
| yo | "Ní ìparí, o máa lè ..." | "Báyìí o lè ..." | "o máa lè" | verb phrase: "fi owó ránṣẹ́ láìléwu" |
| ig | "Na njedebe, ị ga-enwe ike ..." | "Ugbu a ị nwere ike ..." | "ị ga-enwe ike" | infinitive: "iziga ego n'enweghị nsogbu" |
| pt | "No final, você poderá ..." | "Agora você consegue ..." | "você poderá" | infinitive: "enviar dinheiro com segurança" |

- **Amharic:** `outcome`, `youCanNow` and every objective `action` are phrases that END in a verbal noun (…መላክ, …መጠቀም, …መለየት), with NO ይችላሉ and no final ። — the builder adds " ይችላሉ።". Use the Ethiopic comma ፣ and full stop ። in your own sentences.
- Each `action` must still make sense alone, because the intro video shows the actions by themselves.

## Titles (the checker and the uploader read these)
| | chapter | knowledge check | final quiz |
|---|---|---|---|
| sw | "Sura 1: ..." | "Jaribio la maarifa 1: ..." | "Mtihani wa mwisho: ..." |
| ha | "Babi na 1: ..." | "Gwajin ilimi 1: ..." | "Jarabawar ƙarshe: ..." |
| am | "ምዕራፍ 1: ..." | "የእውቀት ፍተሻ 1: ..." | "የመጨረሻ ፈተና: ..." |
| yo | "Orí 1: ..." | "Ìdánwò ìmọ̀ 1: ..." | "Ìdánwò ìkẹyìn: ..." |
| ig | "Isi 1: ..." | "Nnwale ihe ọmụma 1: ..." | "Ule ikpeazụ: ..." |
| pt | "Capítulo 1: ..." | "Verificação de conhecimentos 1: ..." | "Questionário final: ..." |
Use an ASCII colon ":" after the number in these titles.

## Writing
- Write as a teacher who speaks the language would: plain, short sentences, common words; don't translate word for word. Many learners are new readers in their own language.
- **Address the learner respectfully and without gender:** Hausa uses the plural "ku" forms throughout; Amharic uses the polite forms (እርስዎ, -ዎ, ይችላሉ); Swahili, Yoruba and Igbo use the normal "you"; Portuguese uses "você".
- **Spelling:** Swahili standard (Kiswahili sanifu). Hausa with the hooked letters ɓ ɗ ƙ and ʼy. Amharic in Ethiopic script (Fidel). Yoruba WITH tone marks and under-dots (ẹ ọ ṣ, á à). Igbo with the dotted vowels (ị ọ ụ) and ṅ. Portuguese: standard Portuguese that reads well in Mozambique and Angola (avoid Brazil-only slang).
- **Numbers:** Western digits 0-9 in all six. Keep every number, unit, price and date exactly as in the English.
- **Names and terms:** keep organization, agency, exam, product and app names as written (WHO, FAO, CompTIA, OSHA, GED, M-Pesa, WhatsApp, Excel, ChatGPT, Python), with a short explanation the first time. Technical words with no common local word may stay in English (for example "router", "Wi-Fi"), explained in `words`.
- **US-specific courses** (GED, CDL, Medicare, VA benefits, US agencies, California rules) stay about the US: many readers are immigrants in the US. Translate the explanations; keep US names.
- **ESL courses** (`esl-everyday-english`, `esl-workplace-english`): every English phrase being taught is inside double quotes. Keep those quoted phrases in ENGLISH exactly; translate only the explanations.
- **Code and formulas** (Python, SQL, spreadsheet formulas) stay exactly as written.
- **Safety and money:** never add doses, prices, fees or facts that are not in the English.

## Keep exactly as in the English (the checker compares)
Every `id` (yours is `<english id>-<lang>`), `category` (English, unchanged), `translationOf` (the English id), `lang` (your code), the number of chapters, lessons, slides, steps and sources, every `answer` index, every `objective` tag, every lesson `objectives` list, `pretest.from`, every objective `id`, every URL. Slides: title at most 72 characters, each bullet at most 135.

## Checking
- Run `node scripts/koachlearn-export.js --check <your file>` until it passes. Do NOT build videos.
- Touch ONLY your own files. Run no git commands and do not start helper agents.
- Finish with a two-line report: the files written and that each passes `--check`, plus any wording a native speaker should look at.
