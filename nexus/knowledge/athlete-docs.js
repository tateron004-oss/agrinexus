"use strict";

// Two documents for athletes and the people who run teams, built from the answers to Kyro's voice interviews (public/kyro-intake-forms.js, "sponsorshipProposal" and "teamPacket") and saved as a Word document the person can edit,
// print and hand out. Both are the person's own words, word for word, under plain headings, or "Not decided yet": Kyro writes nothing about the athlete, the team, the money or the audience that the person did not say, makes up no
// number and promises no result. Below the person's part, what still needs checking with someone who can decide it (a compliance office, a league, a lawyer, a tax professional) is listed as things to do, not filled in.
// General information, not legal, tax or financial advice. Nothing is sent to anyone and no money is collected.
//
// sponsorshipProposalDocument(values) -> { title, content } | null   (null when the athlete or the ask is missing)
// teamPacketDocument(values)          -> { title, content } | null   (null when the team is missing)

const SPONSORSHIP_KEYS = Object.freeze(["athlete", "story", "results", "audience", "ask", "use", "offer", "levels", "contact", "timeline"]);
const TEAM_PACKET_KEYS = Object.freeze(["team", "season", "leader", "roster", "fees", "registration", "schedule", "travel", "forms", "staff"]);

const clean = value => String(value ?? "").replace(/\s+/g, " ").trim().slice(0, 600);
const orNot = value => clean(value) || "Not decided yet";
const nameOf = text => clean(text).split(/[,.;:]| - | but /)[0].trim().slice(0, 60);

// The roster is said in several short answers (an array) or one run of names; each name goes on its own numbered line. Names are split only at commas, semicolons, "and" and line ends.
function rosterNames(value) {
  const parts = Array.isArray(value) ? value : [value];
  const names = [];
  for (const part of parts) {
    for (const piece of clean(part).split(/\s*(?:,|;|\band\b)\s*/i)) {
      const name = piece.trim();
      if (name) names.push(name.slice(0, 60));
    }
  }
  return names.slice(0, 60);
}

function sponsorshipProposalDocument(values) {
  const v = values || {};
  const athlete = clean(v.athlete);
  const ask = clean(v.ask);
  if (!athlete || !ask) return null;
  const title = `Sponsorship proposal: ${nameOf(athlete) || athlete.slice(0, 60)}`.slice(0, 120);
  const lines = [
    "SPONSORSHIP PROPOSAL",
    "",
    "Prepared with Kyro from what the athlete said. It is a starting draft. Read it, change anything that is wrong, and fill in anything that says Not decided yet before you send it. Use only numbers you can show, such as your own account statistics or official results.",
    "",
    "About the athlete",
    athlete,
    "",
    "My story",
    orNot(v.story),
    "",
    "Results and milestones",
    orNot(v.results),
    "",
    "Who follows and supports me",
    orNot(v.audience),
    "",
    "What I am asking for",
    ask,
    "",
    "What the support would pay for",
    orNot(v.use),
    "",
    "What I can offer in return",
    orNot(v.offer),
    "",
    "Sponsor levels",
    orNot(v.levels),
    "",
    "How to reach me",
    orNot(v.contact),
    "",
    "Dates and when I need an answer",
    orNot(v.timeline),
    "",
    "CHECK THESE BEFORE YOU SEND OR SIGN",
    "1. If you compete for a school or college, ask your compliance office or athletic department whether you may accept money, gear or travel from a sponsor, and in what way. The rules differ by school, level and state.",
    "2. If a league, federation or team has its own sponsor or advertising rules, ask them before you agree to anything.",
    "3. Put every agreement in writing, with what each side gives, for how long and what happens if either side stops. Have a lawyer read a contract before you sign it.",
    "4. Money and free gear from a sponsor may be taxable income. Ask Kyro about athlete taxes, or a tax professional, before the season starts.",
    "5. When you post for a sponsor, say clearly that it is paid or that you were given the product. The FTC expects paid and gifted posts to be labelled.",
    "6. If you are under 18, a parent or guardian usually has to agree to and sign anything with a sponsor. Check the rules where you live.",
    "7. Be careful of anyone who asks you to pay a fee to find you a sponsor or a scholarship. Ask Kyro about scholarship scams before you pay anyone.",
    "",
    "This draft is general information to help you ask well. It is not legal, tax or financial advice, and Kyro has not sent it to anyone."
  ];
  return { title, content: lines.join("\n") };
}

function teamPacketDocument(values) {
  const v = values || {};
  const team = clean(v.team);
  if (!team) return null;
  const title = `Team packet: ${nameOf(team) || team.slice(0, 60)}`.slice(0, 120);
  const names = rosterNames(v.roster);
  const roster = names.length ? names.map((name, index) => `${index + 1}. ${name}`) : ["Not decided yet"];
  const lines = [
    "TEAM AND CLUB PACKET",
    "",
    "Prepared with Kyro from what the coach or organizer said. It is a starting packet. Read it, change anything that is wrong, and fill in anything that says Not decided yet before you give it to families.",
    "",
    "Team or club",
    team,
    "",
    "Season and dates",
    orNot(v.season),
    "",
    "Who is in charge and how to reach them",
    orNot(v.leader),
    "",
    "Coaches and volunteers",
    orNot(v.staff),
    "",
    "Roster",
    ...roster,
    "",
    "Practices and games (where and when)",
    orNot(v.schedule),
    "",
    "Registration (how and by when)",
    orNot(v.registration),
    "",
    "Fees (what it costs and when it is due)",
    orNot(v.fees),
    "",
    "Trips and tournaments (where, when, how we travel and stay)",
    orNot(v.travel),
    "",
    "Forms families must sign",
    orNot(v.forms),
    "",
    "CHECK THESE BEFORE YOU GIVE THIS OUT",
    "1. Waivers and medical releases: Kyro does not write waiver or release wording and does not decide who must sign. Ask your league, school or district, or a lawyer, for the form. For players under 18 a parent or guardian usually signs. Keep the signed copies.",
    "2. Adults who work with young players: ask your league or governing body what background checks and abuse-prevention training are required, and make sure they are done before the first practice. You can ask Kyro about SafeSport.",
    "3. Fees and money: write down what each fee pays for, who holds the money and how families get a receipt. Say what happens if a family cannot pay, or leaves mid-season, before the first payment.",
    "4. Travel: get a signed permission for every player under 18, a list of who is driving or flying with whom, an emergency contact for each player, and the hotel and tournament addresses and dates in writing.",
    "5. Insurance and injury plan: ask your league or school what insurance covers players, and write down who calls for help and where the nearest medical care is at every practice and game site.",
    "6. Keep the roster and the contact details private: share them only with the people who need them, and never post a child's full name, address or schedule in public.",
    "",
    "This packet is general information to help you get organized. It is not legal, tax or financial advice. Kyro has not sent it to anyone and has not collected any money."
  ];
  return { title, content: lines.join("\n") };
}

module.exports = Object.freeze({ SPONSORSHIP_KEYS, TEAM_PACKET_KEYS, sponsorshipProposalDocument, teamPacketDocument, rosterNames });
