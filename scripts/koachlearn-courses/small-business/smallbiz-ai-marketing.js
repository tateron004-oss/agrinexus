"use strict";

// Koach Learn course: Small Business -> "AI in Marketing for Small Business". Written as a skill-building course: by the end the student can DO the skill in `outcome`.
// Two chapters of three micro-lessons; a knowledge check closes each chapter; a 20-question quiz closes the course. See scripts/koachlearn-export.js for how it is built.
// FTC advertising and review rules were checked on ftc.gov on 27 October 2026.
//
// lesson: { title, minutes, goal, text: [paragraph], steps: [step] (optional), words: [[term, means]], slides: [{ title, bullets }], sources, tryIt, youCanNow }
// question: { q, options: [4], answer: index of the right option, why }

const FTC_ADS = { name: "FTC: Advertising and Marketing basics", url: "https://www.ftc.gov/business-guidance/advertising-marketing" };
const FTC_REVIEWS = { name: "FTC: Consumer Reviews and Testimonials Rule, Questions and Answers", url: "https://www.ftc.gov/business-guidance/resources/consumer-reviews-testimonials-rule-questions-answers" };
const CAN_SPAM = { name: "FTC: CAN-SPAM Act, A Compliance Guide for Business", url: "https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business" };

module.exports = {
  id: "smallbiz-ai-marketing",
  category: "Small Business",
  name: "AI in Marketing for Small Business",
  skills: "Writing a marketing message, Making social media posts with AI, Designing a flyer, Planning a content calendar, Keeping claims honest, Checking what works",
  outcome: "plan and make one month of marketing for your business with AI help: a clear core message, a four-week content calendar, a set of social posts and one flyer, all with honest claims, and a simple way to see which posts brought customers in.",
  about: [
    "This course is for small business owners who do their own marketing: restaurants and food trucks, salons and barbershops, shops, cleaning and repair services, and home businesses. Many of our students are minority-owned businesses marketing to their neighborhoods and communities.",
    "You will use free AI tools to find your core message, write posts and captions, design a flyer, plan a month of content, keep your claims honest under the FTC's rules, and track what actually brings in customers.",
    "Each lesson takes about five minutes with a \"Try it now\" task. There is a knowledge check after each chapter and a 20-question quiz at the end. The tasks build into one month of ready-to-post marketing."
  ],
  finalTask: "Make one month of marketing: write your core message, a four-week content calendar with at least eight posts, finished captions for four of them, one flyer made in a design tool, and a tracking table showing how you will tell which posts brought customers. Check every claim is true and every image is yours to use.",
  chapters: [
    {
      name: "Chapter 1: Your message and your posts",
      lessons: [
        {
          title: "Finding your core marketing message",
          minutes: 5,
          goal: "Write one or two sentences that say who you serve, what you do and why you are different.",
          text: [
            "Your core message is the short answer to \"Why should I choose you?\" Every post, flyer and sign should repeat it in different words.",
            "A simple formula: We help [who] get [what] with [what makes us different]. Example: \"We help busy families in South Sacramento get home-style Filipino meals, ready in 10 minutes, made by the same family since 2009.\"",
            "Ask AI to help you find it: \"Here is what customers say about my shop and what I do differently. Write five versions of a one-sentence core message.\" Pick the one that sounds true and like you."
          ],
          steps: ["Write who you serve.", "Write what they get.", "Write what makes you different (true, specific).", "Ask AI for five versions and pick one."],
          words: [["Core message", "the short statement of why customers should choose you."], ["Differentiator", "something true that makes you different from competitors."]],
          slides: [
            { title: "Why should I choose you?", bullets: ["Your core message answers it", "Repeat it in every post and flyer"] },
            { title: "The formula", bullets: ["We help [who]", "get [what]", "with [what makes us different]"] },
            { title: "Use AI to explore", bullets: ["Share what customers say about you", "Ask for five versions", "Pick the one that is true and sounds like you"] }
          ],
          tryIt: "Fill in the formula for your business. Then ask an AI assistant for five versions and choose the best one.",
          youCanNow: "write a clear core message for your business."
        },
        {
          title: "Writing social posts and captions with AI",
          minutes: 5,
          goal: "Turn your core message into several social posts in your own voice.",
          text: [
            "Good small business posts show real things: today's special, a before-and-after haircut, a happy customer (with permission), your team, behind the scenes, a tip, an event. People follow people.",
            "Ask AI for drafts: \"Write four short Instagram captions for my barbershop. Core message: [your message]. One about our Saturday hours, one about a fade, one introducing our new barber Marcus, one with a hair care tip. Friendly, 2 sentences each, 3 hashtags.\"",
            "Then edit. Add real details only you know. Remove anything that sounds fake or over the top. Always get permission before posting a customer's photo or name."
          ],
          steps: ["Choose four post types: offer, behind the scenes, team, tip.", "Ask AI for captions with your core message and voice.", "Add real details and cut anything fake.", "Get permission for any customer photo or name."],
          words: [["Caption", "the text that goes with a social media photo or video."], ["Hashtag", "a word with # in front, used to group posts on a topic."]],
          slides: [
            { title: "Post real things", bullets: ["Today's special or a before-and-after", "Your team and behind the scenes", "Tips and events"] },
            { title: "Ask AI for drafts", bullets: ["Give your core message and voice", "Say the post types and length", "Ask for a few hashtags"] },
            { title: "Then make it real", bullets: ["Add details only you know", "Cut anything fake or over the top", "Permission before customer photos or names"] }
          ],
          tryIt: "Ask AI for four captions for your business with your core message. Edit each one to add a real detail and remove anything that is not true.",
          youCanNow: "write social posts with AI help that sound real and like your business."
        },
        {
          title: "Designing a flyer or promo graphic",
          minutes: 5,
          goal: "Make a clear flyer or graphic for one offer or event.",
          text: [
            "A flyer works on a counter, a community board, a church bulletin or as a social post. Use a free design tool like Canva or Adobe Express, starting from a template.",
            "Keep the parts clear: a big headline (the offer), one picture, three short details (what, when, where), and a call to action (\"Call to book\", \"Order online\"). Use your core message in small words at the bottom.",
            "If you use AI-generated images, make sure they do not show food, work or results you do not really offer. Use your own photos when you can; customers trust real pictures."
          ],
          steps: ["Open a design tool and choose a template.", "Write a big headline with the offer.", "Add one picture, three details and a call to action.", "Check spelling, phone number, date and address.", "Download or share."],
          words: [["Call to action", "the words that tell people what to do next, like \"Call to book\"."], ["Headline", "the biggest words on a flyer or ad."]],
          slides: [
            { title: "Parts of a clear flyer", bullets: ["Big headline: the offer", "One picture", "What, when, where", "Call to action"] },
            { title: "Free design tools", bullets: ["Canva or Adobe Express", "Start from a template"] },
            { title: "Pictures customers trust", bullets: ["Use your own photos when you can", "AI images must not show things you do not offer"] }
          ],
          tryIt: "Make a flyer for one real offer or event with a headline, one picture, three details and a call to action. Check every detail before you save it.",
          youCanNow: "design a clear flyer or promo graphic for your business."
        }
      ],
      check: {
        title: "Knowledge Check 1: Your message and your posts",
        questions: [
          { q: "What does a core message answer?", options: ["What is your password?", "Why should I choose you?", "Where is the bank?", "How old is the owner?"], answer: 1, why: "The core message says why customers should choose you." },
          { q: "Which is a strong core message?", options: ["\"We are the best.\"", "\"Come in.\"", "\"Food.\"", "\"We help busy families in South Sacramento get home-style Filipino meals in 10 minutes.\""], answer: 3, why: "It says who, what and what is different." },
          { q: "Before posting a customer's photo you must:", options: ["Get their permission", "Add a filter", "Ask the AI", "Post it at night"], answer: 0, why: "Permission respects customers and avoids trouble." },
          { q: "What is a call to action?", options: ["A hashtag", "A phone bill", "Words telling people what to do next", "A logo"], answer: 2, why: "It tells people the next step, like \"Call to book\"." },
          { q: "An AI image shows a dish you do not sell. What do you do?", options: ["Use it anyway", "Add more fake dishes", "Replace it with a real photo or an image of what you sell", "Post it twice"], answer: 2, why: "Images must not mislead customers." }
        ]
      }
    },
    {
      name: "Chapter 2: Planning, honesty and results",
      lessons: [
        {
          title: "Planning a monthly content calendar",
          minutes: 5,
          goal: "Plan four weeks of posts in a simple calendar.",
          text: [
            "A content calendar is a table that says what you will post and when. It stops the \"what do I post today?\" panic.",
            "Make columns: Date, Platform, Post type, Idea, Caption done?, Picture done?. Plan two or three posts a week you can really keep up. Mix types: offers, tips, team, customers (with permission), and community events.",
            "Ask AI: \"Make a four-week posting calendar for my cleaning business, two posts a week, mixing offers, tips and team posts. Our core message is [...]. Include holidays and local events in [city] in [month] I should check.\" Then check each date and event yourself."
          ],
          steps: ["Make a calendar table with six columns.", "Choose how many posts a week you can keep up.", "Ask AI for four weeks of ideas.", "Check dates and local events yourself.", "Mark posts done as you go."],
          words: [["Content calendar", "a schedule of what you will post and when."], ["Platform", "a social media site or app, like Instagram, Facebook or TikTok."]],
          slides: [
            { title: "Why a calendar", bullets: ["No more \"what do I post today?\"", "A table of what and when"] },
            { title: "Columns", bullets: ["Date, Platform, Post type", "Idea, Caption done?, Picture done?"] },
            { title: "Plan with AI", bullets: ["Two or three posts a week you can keep", "Mix offers, tips, team, community", "Check every date and event yourself"] }
          ],
          tryIt: "Ask AI for a four-week, two-posts-a-week calendar for your business. Put it in a table and check every date.",
          youCanNow: "plan a month of posts in a content calendar."
        },
        {
          title: "Keeping your marketing honest and legal",
          minutes: 5,
          goal: "Check your marketing for claims you cannot back up, fake reviews and email rules.",
          text: [
            "The Federal Trade Commission (FTC) says advertising must be truthful and not misleading, and you need proof for claims you make. \"Best tacos in LA\" reads as opinion, but \"Our cleaning kills 99% of germs\" or \"Lose 10 pounds\" is a claim you must be able to back up.",
            "AI likes big words: \"guaranteed\", \"award-winning\", \"number one\". Remove any you cannot prove. Never post fake reviews or testimonials; the FTC's review rule bans them, including ones written by AI.",
            "Marketing emails must follow CAN-SPAM: honest sender and subject, say it is an ad, include your postal address and an easy unsubscribe, and honor unsubscribes within 10 business days."
          ],
          steps: ["Underline every claim in your post or flyer.", "Ask: can I prove this?", "Remove or change claims you cannot prove.", "No fake reviews or testimonials.", "Check marketing emails for CAN-SPAM basics."],
          words: [["Claim", "a statement of fact in an ad, like \"kills 99% of germs\"."], ["Misleading", "likely to give people a wrong idea."], ["Testimonial", "a customer's statement praising your business, used in marketing."]],
          slides: [
            { title: "FTC: truthful ads", bullets: ["Ads must not mislead", "You need proof for your claims"] },
            { title: "Cut big words you cannot prove", bullets: ["\"Guaranteed\", \"award-winning\", \"number one\"", "No fake reviews, even AI-written"] },
            { title: "Marketing emails (CAN-SPAM)", bullets: ["Honest sender and subject; say it is an ad", "Postal address and easy unsubscribe", "Honor unsubscribes within 10 business days"] }
          ],
          sources: [FTC_ADS, FTC_REVIEWS, CAN_SPAM],
          tryIt: "Take your four captions and your flyer. Underline every claim, and change or remove any you cannot prove.",
          youCanNow: "check your marketing for unprovable claims, fake reviews and email rule problems."
        },
        {
          title: "Seeing what works",
          minutes: 5,
          goal: "Track which posts and flyers bring in customers.",
          text: [
            "Likes are nice, but customers matter more. Track simple signals: messages and calls, bookings, people who mention a post, and use of a special code (\"Say FLYER10 for 10% off\").",
            "Most social platforms show free numbers for business accounts, such as reach and profile visits; look for the insights or analytics section. Write the key numbers in a tracking table each week.",
            "Once a month, paste your table (no customer names) into an AI assistant and ask: \"Which post types brought the most bookings? What should I do more of?\" Confirm it in your table, then plan next month."
          ],
          steps: ["Choose signals: messages, bookings, mentions, code use.", "Add a special code to one offer.", "Record the numbers weekly in a table.", "Ask AI for patterns once a month and confirm them."],
          words: [["Reach", "how many people saw a post."], ["Insights", "the numbers a platform shows about how your posts did."], ["Promo code", "a word customers say or type to get an offer, which helps you track it."]],
          slides: [
            { title: "Customers over likes", bullets: ["Messages, calls and bookings", "People who mention a post", "Special codes like FLYER10"] },
            { title: "Free numbers", bullets: ["Business accounts show insights", "Reach and profile visits", "Write them in a weekly table"] },
            { title: "Monthly review with AI", bullets: ["Paste the table, no names", "Ask what brought the most bookings", "Confirm, then plan next month"] }
          ],
          tryIt: "Final task: finish your month of marketing: core message, four-week calendar, four finished captions, one flyer, and a tracking table with a promo code on one offer. Check every claim and image.",
          youCanNow: "plan, make and measure a month of honest marketing for your business."
        }
      ],
      check: {
        title: "Knowledge Check 2: Planning, honesty and results",
        questions: [
          { q: "What is a content calendar?", options: ["A schedule of what you post and when", "A tax calendar", "A staff schedule", "A wall clock"], answer: 0, why: "It plans your posts." },
          { q: "AI's calendar lists a local festival on a date. What do you do?", options: ["Delete the calendar", "Trust it", "Post about it without checking", "Check the date yourself"], answer: 3, why: "AI can get dates and events wrong." },
          { q: "Which claim needs proof?", options: ["\"Come say hi\"", "\"Our cleaning kills 99% of germs\"", "\"We love our neighborhood\"", "\"Open Saturday\""], answer: 1, why: "Specific factual claims need proof." },
          { q: "Which is the best sign a post worked?", options: ["New bookings from people who mention it", "One more like", "A nice color", "A long caption"], answer: 0, why: "Customers matter more than likes." },
          { q: "Why add a special code like FLYER10?", options: ["It is required by law", "To confuse customers", "To track which marketing brought customers", "To hide the price"], answer: 2, why: "Codes show which piece worked." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: AI in Marketing for Small Business",
    questions: [
      { q: "The core message formula is: We help [who] get [what] with...", options: ["Our password", "What makes us different", "A discount always", "Our competitor's name"], answer: 1, why: "The differentiator completes it." },
      { q: "Your core message should be:", options: ["Secret", "As big as possible", "Copied from a competitor", "True and sound like you"], answer: 3, why: "Customers trust true messages." },
      { q: "Where should your core message appear?", options: ["Nowhere", "Only in your head", "Only on taxes", "In your posts, flyers and signs"], answer: 3, why: "Repeating it builds recognition." },
      { q: "Which is a good small business post?", options: ["A stock photo of a beach", "A before-and-after haircut, with permission", "A fake review", "A competitor's photo"], answer: 1, why: "Real work builds trust." },
      { q: "After AI writes captions you should:", options: ["Add more big claims", "Post them unchanged", "Add real details and cut anything fake", "Delete your page"], answer: 2, why: "Editing makes them real and accurate." },
      { q: "What is a caption?", options: ["The text with a social photo or video", "A receipt", "A price tag", "A logo"], answer: 0, why: "Captions describe posts." },
      { q: "Which free tools can make flyers?", options: ["A cash register", "A calculator", "Canva or Adobe Express", "A phone charger"], answer: 2, why: "They are design tools with templates." },
      { q: "A flyer headline should be:", options: ["Big and about the offer", "Tiny", "Missing", "Your password"], answer: 0, why: "The headline catches attention." },
      { q: "Which picture do customers trust most?", options: ["AI images of things you do not sell", "Your own real photos", "Random internet photos", "Competitors' photos"], answer: 1, why: "Real pictures build trust." },
      { q: "How many posts a week should you plan?", options: ["As many as AI suggests", "Fifty", "None", "A number you can really keep up"], answer: 3, why: "Consistency beats burnout." },
      { q: "Which is a content calendar column?", options: ["Post type", "Customer card number", "Password", "Bank PIN"], answer: 0, why: "Post type helps mix your content." },
      { q: "Mixing post types means:", options: ["Only reposts", "Only discounts", "Only selfies", "Offers, tips, team and community posts"], answer: 3, why: "Variety keeps followers interested." },
      { q: "According to the FTC, ads must be:", options: ["Long", "Funny", "Truthful and not misleading", "In color"], answer: 2, why: "That is the basic FTC rule." },
      { q: "AI added \"award-winning\" but you have no award. You:", options: ["Keep it", "Remove it", "Make up an award", "Add \"guaranteed\""], answer: 1, why: "Unprovable claims mislead." },
      { q: "Fake reviews written by AI are:", options: ["Required", "Fine if short", "Fine on weekends", "Banned under the FTC review rule"], answer: 3, why: "The rule covers AI-made fakes." },
      { q: "A CAN-SPAM marketing email must include:", options: ["A fake sender", "The customer's card number", "Your postal address and an unsubscribe option", "No subject"], answer: 2, why: "Both are required." },
      { q: "Reach means:", options: ["How many people saw a post", "How many bought", "How many staff", "Your Wi-Fi strength"], answer: 0, why: "Reach counts views." },
      { q: "Where do you find free post numbers on a business account?", options: ["Your receipt printer", "The insights or analytics section", "Your bank", "Nowhere"], answer: 1, why: "Platforms show insights to business accounts." },
      { q: "Before pasting tracking numbers into AI, remove:", options: ["Dates", "Customer names", "Post types", "Totals"], answer: 1, why: "Customer names are private." },
      { q: "After AI says tips posts bring the most bookings, you:", options: ["Confirm it in your table, then plan more", "Stop all tips posts", "Ignore it", "Delete your account"], answer: 0, why: "Confirm, then act." }
    ]
  }
};
