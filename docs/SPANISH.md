# Spanish in Kyro

The owner asked for Spanish for the small and minority-owned business owners Kyro serves in the United States. This is the first release, deliberately limited.

## What works today

- **The checked small-business guide, in Spanish.** All 32 topics of `nexus/knowledge/us-small-business.js` (minority-owned business certification, 8(a), NMSDC, MBDA, SBA loans, grants, startup steps, funding, costs, business plan, LLC and corporations, EIN, licences, hiring, insurance, bank account, taxes, free help and the rest) are in `nexus/knowledge/us-small-business-es/`.
  Every figure, date, form number, web address and source is the English topic's; nothing is added or taken out (a test checks every figure and name).
- **Understanding Spanish questions.** `public/kyro-business-topics.js` reads a question in Spanish (with or without accents, so a speech-to-text line without them works) and reaches the same topic its English twin reaches. The page takes the question the same way it takes the English one, and the planner answers in the language of the words asked: a question in Spanish gets the Spanish answer, the same question in English gets the English one.
- **Honest about being a translation.** Every Spanish answer says "Traducción preliminar: puede tener errores, así que confirme en el sitio oficial", keeps the sources line ("Fuentes: ..., revisado el 9 de octubre de 2026") and the warning that it is general information and Kyro cannot file or apply for anything.
- Spoken answers are read by the voice session in Spanish (the page asks the voice to say the page's own words).

## What does not exist yet

- **Safety and health wording in Spanish, and recognising a Spanish emergency or crisis.** Kyro's safety layer reads English and Kiswahili. A person who says a danger sign in Spanish is not caught by it. This needs a clinician and a fluent speaker, and is the first thing to do before Spanish is offered to the public.
- Texting, calling and contacts by voice in Spanish; the veterans, seniors, youth and nonprofit guides; the Kenya and Nigeria guides; reminders, lists, documents and every screen's own words (buttons and labels stay in English).
- A fluent speaker's review (below).

## Review by a fluent speaker (needed before this is relied on)

Open `docs/spanish/Spanish-Review-Sheet.csv` in a spreadsheet: every topic with the English beside the Spanish and a column for notes. Please check the register (usted, neutral Latin American Spanish), the legal and tax terms, that official programme and form names are kept as the official English names with a Spanish gloss, and that no sentence promises something Kyro cannot do in Spanish. Send the notes back and the files in `nexus/knowledge/us-small-business-es/` are corrected from them. After a change, run `node scripts/spanish-review-sheet.js` to refresh the sheet.

## Adding or changing a topic

The English topic is the source of truth. Change it, change the Spanish topic of the same id, run `node --test test/nexus/us-small-business-spanish.test.js` (it fails when a topic or a figure is missing) and refresh the sheet.
