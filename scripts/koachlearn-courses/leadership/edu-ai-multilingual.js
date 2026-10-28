"use strict";

// Koach Learn course: Leadership Development -> "AI for Multilingual Learners" (advanced topic in AI for School and Educational Leaders).
// Shape copied from re-entry/reentry-ai-digital-confidence.js. English-learner guidance status checked via K-12 Dive on 27 October 2026;
// FERPA via studentprivacy.ed.gov.

module.exports = {
  id: "edu-ai-multilingual",
  category: "Leadership Development",
  name: "AI for Multilingual Learners",
  skills: "Building language supports with AI, Making bilingual glossaries, Writing sentence frames by proficiency level, Using translation safely, Setting a human-checked translation workflow, Valuing home languages",
  outcome: "use AI to build language supports for multilingual learners, glossaries, sentence frames by proficiency level and adapted texts that keep grade-level ideas, and run a translation workflow for families in which a qualified person checks every AI translation before it is sent.",
  about: [
    "This course is for classroom teachers, English language development (ELD) and bilingual teachers, coaches, family liaisons and principals who serve multilingual learners and their families. AI can speed up making language supports and translations, but it can also produce errors that confuse students or mislead families.",
    "Chapter 1 builds classroom supports: adapted texts that keep the ideas, bilingual glossaries, and sentence frames by proficiency level. Chapter 2 covers family communication, a translation workflow with human checks, privacy, and the leader's role in valuing home languages.",
    "Federal guidance on English learners has changed recently; your district's English learner and civil-rights staff know your current obligations. Use made-up or general materials only, with no student information. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Create a multilingual support pack for one lesson: an adapted version of the main text that keeps the grade-level ideas, a bilingual glossary of 8 to 10 key words in one home language your school serves, sentence frames at three proficiency levels for the lesson's main speaking or writing task, and one family message translated by AI and checked by a qualified speaker. Write the four-step translation workflow your school will follow, and note every correction the checker made.",
  chapters: [
    {
      name: "Chapter 1: Classroom language supports",
      lessons: [
        {
          title: "Language supports that keep the learning high",
          minutes: 5,
          goal: "Adapt a text for language load without lowering the grade-level ideas.",
          text: [
            "Multilingual learners can think at grade level while still learning English. The goal of a support is to lower the language load, not the thinking. That means keeping the key concepts, vocabulary and questions, while adding clarity: shorter sentences, headings, visuals, key terms in bold with definitions.",
            "Prompt: \"Adapt this 7th-grade science passage for students learning English at an intermediate level. Keep every key concept and these academic words: [list]. Use shorter sentences and headings, bold the academic words and define each in simple English. Do not remove ideas.\"",
            "Check the adapted text against the original for accuracy. A good test: could a student who reads the adapted text answer the same main questions as a student who read the original?"
          ],
          steps: ["List the key concepts and academic words.", "Ask AI to adapt for language level, keeping both.", "Add headings, visuals and bolded terms with definitions.", "Check accuracy against the original.", "Test: same main questions answerable?"],
          words: [["Multilingual learner", "a student learning in more than one language, often still developing English."], ["Language load", "how hard the language of a text is, separate from how hard the ideas are."], ["Academic vocabulary", "words used in school subjects, like analyze, evidence or photosynthesis."]],
          slides: [
            { title: "Lower the language, not the thinking", bullets: ["Keep concepts, vocabulary, questions", "Add clarity: short sentences, headings, visuals"] },
            { title: "The prompt", bullets: ["Name the level and the academic words", "Bold and define key terms", "\"Do not remove ideas\""] },
            { title: "Check it", bullets: ["Accuracy against the original", "Same main questions answerable?"] }
          ],
          tryIt: "Adapt one grade-level passage with AI for an intermediate English level, keeping all key concepts. Check it with the same-questions test.",
          youCanNow: "adapt texts for multilingual learners without lowering the grade-level ideas."
        },
        {
          title: "Bilingual glossaries and cognates",
          minutes: 5,
          goal: "Make a checked bilingual glossary for a lesson's key words.",
          text: [
            "A bilingual glossary gives each key word in English, a simple definition, the word in the student's home language, and an example sentence. AI can draft one quickly in many languages: \"Make a glossary table of these 10 words for 5th-grade science: English word, simple definition, Spanish translation, example sentence in English.\"",
            "Ask AI to mark cognates (words that look and mean the same in both languages, like \"animal\" and \"animal\" or \"information\" and \"información\") and false friends (words that look alike but mean different things). Cognates are a strength students bring.",
            "AI translations of single words can pick the wrong meaning for your subject (for example, a math or science term with an everyday meaning). Have a qualified speaker, such as a bilingual teacher or district translator, check the glossary before students use it."
          ],
          steps: ["List 8-10 key words.", "Ask for a table: word, definition, home-language word, example.", "Ask AI to mark cognates and false friends.", "Have a qualified speaker check it.", "Share it with students before the lesson."],
          words: [["Bilingual glossary", "a list of key words with meanings in two languages."], ["Cognate", "a word that looks and means about the same in two languages."], ["False friend", "a word that looks similar in two languages but means something different."]],
          slides: [
            { title: "The glossary table", bullets: ["English word and simple definition", "Home-language word", "Example sentence"] },
            { title: "Cognates are a strength", bullets: ["Same look, same meaning: animal / animal", "Watch for false friends"] },
            { title: "Check before use", bullets: ["AI may pick the wrong subject meaning", "Bilingual teacher or district translator checks"] }
          ],
          tryIt: "Make a bilingual glossary of 8 to 10 words for one lesson in a home language your school serves, with cognates marked. Ask a qualified speaker to check it and record any corrections.",
          youCanNow: "create bilingual glossaries that build on students' home languages."
        },
        {
          title: "Sentence frames by proficiency level",
          minutes: 5,
          goal: "Write sentence frames at three levels for a speaking or writing task.",
          text: [
            "Sentence frames give students the structure of academic language so they can focus on ideas. For the same task, students at different English levels need different support. Example task: explain whether a claim is supported by evidence.",
            "Ask AI for three levels. Beginning: short frames with a word bank (\"The claim is ___. The evidence is ___.\"). Intermediate: frames with connecting words (\"The claim is supported because ___. However, ___.\"). Advanced: open starters and academic connectors (\"Although the evidence suggests ___, it does not fully account for ___.\").",
            "Post all three levels so students can choose and move up. Check that every level asks for the same thinking. Your district's English language development standards and your ELD colleagues can help you match frames to proficiency levels."
          ],
          steps: ["Name the speaking or writing task.", "Ask for frames at beginning, intermediate and advanced levels.", "Add a word bank at the beginning level.", "Check every level asks for the same thinking.", "Post all three; let students move up."],
          words: [["Sentence frame", "a sentence with blanks that shows the structure of a response."], ["Proficiency level", "how far a student has developed in English."], ["Connector", "a word that links ideas, like because, however or although."]],
          slides: [
            { title: "Frames free students to think", bullets: ["The structure of academic language", "Focus on ideas"] },
            { title: "Three levels, same thinking", bullets: ["Beginning: short frames, word bank", "Intermediate: connectors", "Advanced: open academic starters"] },
            { title: "Use them well", bullets: ["Post all three; students move up", "Match levels with your ELD colleagues"] }
          ],
          tryIt: "Pick a speaking or writing task from an upcoming lesson. Use AI to write frames at three levels, check they ask for the same thinking, and add a word bank.",
          youCanNow: "write sentence frames that support every English level in the same task."
        }
      ],
      check: {
        title: "Knowledge Check 1: Classroom language supports",
        questions: [
          { q: "A good language support lowers:", options: ["The thinking", "The grade level", "The language load, while keeping the ideas", "Expectations"], answer: 2, why: "Students can think at grade level while learning English." },
          { q: "Which test checks an adapted text?", options: ["Could students answer the same main questions as with the original?", "Is it shorter?", "Does it have more pictures?", "Is it in a new font?"], answer: 0, why: "Same questions means same ideas." },
          { q: "A cognate is:", options: ["A grammar rule", "A math term", "A wrong translation", "A word that looks and means about the same in two languages"], answer: 3, why: "Cognates are a strength students bring." },
          { q: "Who should check an AI bilingual glossary?", options: ["No one", "A qualified speaker such as a bilingual teacher or district translator", "The AI again", "A student who is learning English"], answer: 1, why: "AI may choose the wrong subject meaning." },
          { q: "Sentence frames at three levels should:", options: ["Ask for different thinking", "Only be for beginners", "Be kept secret", "Ask for the same thinking with different support"], answer: 3, why: "Support varies; the thinking does not." }
        ]
      }
    },
    {
      name: "Chapter 2: Families, translation and leadership",
      lessons: [
        {
          title: "A translation workflow with human checks",
          minutes: 6,
          goal: "Set a four-step workflow for translating family communications.",
          text: [
            "AI translation is fast and often good, but it makes mistakes that matter: wrong dates, wrong tone, school terms with no direct translation, and errors in less widely used languages. Families rely on what the school sends them.",
            "A four-step workflow: 1) Write the English in plain language first (short sentences, no idioms or jargon); clear English translates better. 2) Translate with an approved tool. 3) A qualified speaker (district translator, bilingual staff member or contracted service) checks and corrects it. 4) Send, and keep the checked version for reuse.",
            "For high-stakes communication (special education, discipline, health and safety, legal rights), use professional translation or interpretation as your district requires. Do not ask students to translate for their own families on important matters."
          ],
          steps: ["Write plain English first: no idioms or jargon.", "Translate with an approved tool.", "A qualified speaker checks and corrects.", "Send, and save the checked version.", "High-stakes messages: professional translation or interpretation."],
          words: [["Idiom", "a phrase whose meaning is not the sum of its words, like \"touch base\"."], ["Interpretation", "translating spoken language, for example at a meeting."]],
          slides: [
            { title: "Why check AI translations", bullets: ["Wrong dates and tone", "School terms with no direct match", "More errors in less common languages"] },
            { title: "Four steps", bullets: ["1 Plain English first", "2 Translate with an approved tool", "3 Qualified speaker checks", "4 Send and save"] },
            { title: "High-stakes messages", bullets: ["Special education, discipline, health, rights", "Professional translation or interpretation", "Never ask students to translate these"] }
          ],
          tryIt: "Write a short family message about a school event in plain English, translate it with an approved tool, and ask a qualified speaker to check it. Record each correction.",
          youCanNow: "run a translation workflow where a qualified person checks every AI translation."
        },
        {
          title: "Obligations, privacy and current guidance",
          minutes: 5,
          goal: "Know where to confirm your school's obligations to multilingual families.",
          text: [
            "Schools have long had federal civil-rights obligations to English learners and to communicate with parents who have limited English proficiency in a language they understand. In August 2025, as reported by K-12 Dive, the US Department of Education rescinded its 2015 joint Dear Colleague Letter on English learners, saying it did not align with the administration's priorities. Dear Colleague letters are guidance, not law.",
            "Because guidance has changed, do not rely on old summaries. Ask your district's English learner office, civil-rights or Title VI coordinator, or counsel what your current obligations are, and check your state education agency's English learner guidance, which may set its own requirements.",
            "Privacy still applies: a student's English learner status, language background and proficiency scores are part of education records protected by FERPA. Keep them out of unapproved AI tools, and describe needs in general terms when you prompt."
          ],
          steps: ["Do not rely on old summaries of EL guidance.", "Ask your district EL office or civil-rights coordinator about current obligations.", "Check your state education agency's EL guidance.", "Keep EL status and scores out of unapproved AI tools.", "Prompt with general descriptions of needs."],
          words: [["English learner (EL)", "a student identified as needing support to learn English for school."], ["Limited English proficiency (LEP)", "not yet able to read, write, speak or understand English well enough for a situation."], ["Rescind", "to cancel or withdraw an earlier guidance or decision."]],
          slides: [
            { title: "Guidance has changed", bullets: ["2015 EL Dear Colleague Letter rescinded, Aug 2025", "Guidance is not law"] },
            { title: "Confirm current obligations", bullets: ["District EL office or civil-rights coordinator", "State education agency EL guidance", "Counsel when unsure"] },
            { title: "Privacy", bullets: ["EL status and scores are education records", "Keep them out of unapproved tools", "Describe needs in general terms"] }
          ],
          sources: [{ name: "K-12 Dive: Education Department rescinds English learner guidance (Aug 2025)", url: "https://www.k12dive.com/news/education-department-rescinds-ela-english-learner-guidance-2015-dear-colleague/758163/" }, { name: "FERPA: Protecting Student Privacy", url: "https://studentprivacy.ed.gov/ferpa" }],
          tryIt: "Find out who in your district answers questions about communication with multilingual families (EL office, civil-rights coordinator or family liaison) and write their contact on your workflow page.",
          youCanNow: "find your current obligations to multilingual families and keep their information private."
        },
        {
          title: "Leading with home languages as a strength",
          minutes: 6,
          goal: "Plan how your school will use AI to value home languages, not replace people.",
          text: [
            "AI translation can make it seem as if bilingual staff and interpreters are less needed. The opposite is true: AI drafts make their checks faster, and their knowledge of culture and community cannot be automated. Protect their time for the checks and for the conversations that matter most.",
            "Use AI to honor home languages: let students explain ideas in their home language first and then build the English, create glossaries and welcome materials in families' languages, and invite families to share knowledge. Avoid tools or rules that treat home languages only as a problem.",
            "Bring it together in a short school plan: which supports teachers will use, the translation workflow, who checks, how families give feedback, and how you will know families are better informed (for example, attendance at events or a short survey in their languages)."
          ],
          steps: ["Protect bilingual staff time for checks and key conversations.", "Let students use home languages to build ideas.", "Create welcome materials in families' languages.", "Write a short school plan with the workflow and checkers.", "Measure whether families are better informed."],
          words: [["Asset-based", "seeing what students and families bring as strengths, not deficits."], ["Family liaison", "a staff member who builds connections between school and families."]],
          slides: [
            { title: "AI supports people", bullets: ["Drafts speed up bilingual staff checks", "Culture and community knowledge stay human"] },
            { title: "Home languages are a strength", bullets: ["Think in the home language, build the English", "Welcome materials in families' languages"] },
            { title: "A short school plan", bullets: ["Supports, workflow, checkers", "Family feedback", "Measure: are families better informed?"] }
          ],
          tryIt: "Final task: build your multilingual support pack (adapted text, checked bilingual glossary, three-level sentence frames, one checked family translation), write your four-step translation workflow with the checker's contact, and note every correction made.",
          youCanNow: "lead AI use that supports multilingual learners and families accurately and respectfully."
        }
      ],
      check: {
        title: "Knowledge Check 2: Families, translation and leadership",
        questions: [
          { q: "Why write plain English before translating?", options: ["AI cannot read long text", "It is shorter", "Clear English translates more accurately", "It is required by law"], answer: 2, why: "Idioms and jargon cause translation errors." },
          { q: "A message about a student's special education meeting needs translating. Best approach?", options: ["Professional translation as your district requires", "Ask the student to translate", "Unchecked AI translation", "Send it in English only"], answer: 0, why: "High-stakes messages need professional translation." },
          { q: "What happened to the 2015 English learner Dear Colleague Letter in 2025, as reported by K-12 Dive?", options: ["It became law", "It was rescinded", "It was translated", "Nothing"], answer: 1, why: "The Department rescinded it in August 2025." },
          { q: "A student's English proficiency scores are:", options: ["Part of education records protected by FERPA", "Public information", "Safe in any AI tool", "Owned by the vendor"], answer: 0, why: "They are student records." },
          { q: "How does AI translation change the role of bilingual staff?", options: ["They are no longer needed", "They only need to proofread spelling", "They should be replaced by students", "Their checks get faster, and their community knowledge still matters"], answer: 3, why: "AI drafts support people; it does not replace them." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI for Multilingual Learners",
    questions: [
      { q: "Multilingual learners can:", options: ["Only do easy work", "Think at grade level while still learning English", "Not use academic words", "Not learn with AI"], answer: 1, why: "Language level is not thinking level." },
      { q: "Language load means:", options: ["The number of languages spoken", "How heavy the book is", "How hard the language is, separate from the ideas", "Homework amount"], answer: 2, why: "Supports lower language load, not ideas." },
      { q: "An adapted text should keep:", options: ["No questions", "Only easy words", "Key concepts and academic vocabulary", "Half the ideas"], answer: 2, why: "The learning goal stays the same." },
      { q: "Academic vocabulary includes words like:", options: ["Evidence and analyze", "Hello and thanks", "Lunch and recess", "Bus and car"], answer: 0, why: "School-subject words need direct teaching." },
      { q: "A bilingual glossary includes:", options: ["Grades", "Only English words", "Student names", "Word, definition, home-language word, example"], answer: 3, why: "Both languages build understanding." },
      { q: "A false friend is:", options: ["A cognate", "A word that looks similar in two languages but means something different", "A classmate", "A translator"], answer: 1, why: "Students should watch for them." },
      { q: "AI single-word translations may:", options: ["Translate only names", "Always be perfect", "Never be useful", "Pick the wrong meaning for your subject"], answer: 3, why: "Context matters; check them." },
      { q: "A sentence frame:", options: ["Is a grammar test", "Is a picture frame", "Shows the structure of a response with blanks", "Is a grade"], answer: 2, why: "Frames let students focus on ideas." },
      { q: "Beginning-level frames often include:", options: ["A word bank", "No support", "Advanced connectors only", "Only questions"], answer: 0, why: "More support at early levels." },
      { q: "Who helps match frames to proficiency levels?", options: ["A vendor", "ELD colleagues and English language development standards", "The AI alone", "No one"], answer: 1, why: "Specialists know the levels." },
      { q: "Step 3 of the translation workflow is:", options: ["A qualified speaker checks and corrects", "Send immediately", "Delete the English", "Ask a student"], answer: 0, why: "Human checks catch errors." },
      { q: "Why save checked translations?", options: ["No reason", "To sell them", "To hide them", "To reuse accurate versions"], answer: 3, why: "Checked versions save time later." },
      { q: "Students should not translate:", options: ["Vocabulary words in class", "Important matters for their own families", "Their own ideas", "Book titles"], answer: 1, why: "It is unfair to the student and risky for the family." },
      { q: "Dear Colleague letters are:", options: ["Court rulings", "Laws passed by Congress", "Guidance, not law", "State statutes"], answer: 2, why: "Guidance can be issued or withdrawn." },
      { q: "To confirm current obligations to multilingual families, ask:", options: ["A vendor", "A chatbot", "Your district EL office or civil-rights coordinator", "Social media"], answer: 2, why: "They know current law and policy." },
      { q: "Your state education agency may:", options: ["Set its own English learner requirements", "Never publish guidance", "Override federal civil-rights law entirely", "Ban translation"], answer: 0, why: "States publish their own guidance." },
      { q: "When prompting AI about student needs, describe them:", options: ["With visa status", "With names and scores", "With home addresses", "In general terms"], answer: 3, why: "Keep student information private." },
      { q: "Asset-based means:", options: ["Counting school property", "Seeing what students bring as strengths", "Focusing on deficits", "A budget method"], answer: 1, why: "Home languages are a strength." },
      { q: "Letting students explain ideas first in their home language:", options: ["Replaces English instruction", "Slows learning", "Is not allowed", "Builds understanding before the English"], answer: 3, why: "Thinking in a strong language supports learning." },
      { q: "A good measure of better family communication is:", options: ["Number of pages sent", "Number of AI prompts", "Attendance at events or a family survey in their languages", "Vendor reports"], answer: 2, why: "Measure what families actually experience." }
    ]
  }
};
