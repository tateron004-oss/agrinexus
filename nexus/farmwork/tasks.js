"use strict";

const { clean, titleCase, anyDay, plural } = require("./parse.js");
const { startGuided, askConfirm } = require("./guided.js");
const { describeDay } = require("../personal/dates.js");

// Workers and the jobs given to them: who is supposed to do what, by when, and whether it is done. A worker does not need a Kyro account: this
// is the farmer's own record of their people and their jobs. An assignment to a name Kyro doesn't know yet is still recorded (the farmer
// said it), with a nudge to add the worker's details.
const templates = {
  worker: {
    collection: "worker", intro: "Let's add a worker.",
    questions: [
      { key: "name", ask: "What is the worker's name?", type: "text" },
      { key: "phone", ask: "Their phone number with the country code, like +254712345678?", type: "phone", optional: true },
      { key: "role", ask: "What do they do on the farm? For example weeding, milking or driving.", type: "text", optional: true }
    ],
    async finish(ctx, answers) {
      const clear = Object.fromEntries(Object.entries(answers).filter(([, value]) => value !== null && value !== undefined));
      const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
      const workers = await ctx.store.list({ ...scope, collection: "worker" });
      const name = titleCase(clear.name);
      if (workers.some(worker => worker.data.name.toLowerCase() === name.toLowerCase())) return `You already have a worker called ${name}.`;
      if (workers.length >= 100) return "That's the most workers I can keep (one hundred). Remove one first.";
      await ctx.store.add({ ...scope, collection: "worker", data: { ...clear, name } });
      // With a number, texting them by name works too (see contacts).
      if (clear.phone && ctx.memory?.saveContact) { try { await ctx.memory.saveContact({ ...scope, name, phone: clear.phone }); } catch { /* the worker is saved either way */ } }
      return `Added ${name}${clear.role ? ` (${clear.role})` : ""}. Say "assign ${name.split(" ")[0]} to weed North Plot by Friday" to give a job.`;
    }
  }
};

const first = name => clean(name).split(" ")[0];
function findWorker(workers, query) {
  const wanted = clean(query).toLowerCase();
  if (!wanted) return null;
  const exact = workers.filter(worker => worker.data.name.toLowerCase() === wanted);
  if (exact.length === 1) return exact[0];
  const loose = workers.filter(worker => worker.data.name.toLowerCase().split(" ").includes(wanted));
  return loose.length === 1 ? loose[0] : null;
}
const dueWords = (due, today) => (due ? `due ${describeDay(due, today)}` : "no due date");
const describeTask = (task, today) => `Task ${task.number}: ${task.data.title}${task.data.assignee ? ` — ${task.data.assignee}` : ""}, ${task.data.status === "done" ? `done${task.data.doneOn ? ` ${describeDay(task.data.doneOn, today)}` : ""}` : dueWords(task.data.due, today)}`;

// Splits "weed North Plot by Friday" into the job and its day.
function splitDue(text, today) {
  const m = /^(.*?)(?:\s+(?:by|before|on|due|until|for)\s+((?:next |this )?(?:today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday|\d{1,2}(?:st|nd|rd|th)?(?:\s+of)?\s+[a-z]+|[a-z]+\s+\d{1,2}(?:st|nd|rd|th)?|\d{4}-\d{2}-\d{2}|in \d+ (?:days?|weeks?))))\s*$/i.exec(clean(text));
  if (!m) {
    // "spray maize tomorrow", "weed the beans on friday" said without "by"
    const bare = /^(.+?)\s+((?:next |this )?(?:today|tomorrow|monday|tuesday|wednesday|thursday|friday|saturday|sunday))\s*$/i.exec(clean(text));
    if (bare) return { title: clean(bare[1]).replace(/[.,;]+$/g, ""), due: anyDay(bare[2], today) };
    return { title: clean(text).replace(/[.,;]+$/g, ""), due: null };
  }
  return { title: clean(m[1]).replace(/[.,;]+$/g, ""), due: anyDay(m[2], today) };
}

async function handle(ctx) {
  const t = clean(ctx.text).replace(/[.!?]+$/g, ""); const lower = t.toLowerCase().replace(/[.!?]+$/g, "");
  const scope = { tenantId: ctx.tenantId, userId: ctx.userId };
  let m;

  // ---- workers ----
  if ((m = /^(?:please )?(?:add|register|hire) (?:a |another |a new |new )?(?:worker|farmhand|farm hand|employee|labou?rer)(?: called| named)?\s*(.*)$/i.exec(t))) {
    const named = clean(m[1]);
    return startGuided(ctx, templates.worker, named && named.length <= 40 && !/\d/.test(named) ? { name: titleCase(named) } : {});
  }
  if (/^(?:show|list|who are) (?:me )?my (?:workers|farmhands|farm hands|employees|labou?rers|staff)$/.test(lower) || /^(?:who works for me|who works on my farm)$/.test(lower)) {
    const workers = await ctx.store.list({ ...scope, collection: "worker" });
    return workers.length ? `Your workers: ${workers.slice().reverse().map(worker => `${worker.data.name}${worker.data.role ? ` (${worker.data.role})` : ""}`).join("; ")}.` : 'You have no workers on your list. Say "add a worker".';
  }
  if ((m = /^(?:please )?(?:remove|delete|fire) (?:my )?worker (.+)$/i.exec(t))) {
    const workers = await ctx.store.list({ ...scope, collection: "worker" }); const found = findWorker(workers, m[1]);
    return found ? askConfirm(ctx, `Remove ${found.data.name} from your workers?`, { type: "remove-record", memoryId: found.memoryId, label: found.data.name }) : `I don't have a worker called ${clean(m[1])}.`;
  }

  // ---- giving jobs ----
  const create = async (title, assignee, due) => {
    const workers = await ctx.store.list({ ...scope, collection: "worker" });
    const worker = assignee ? findWorker(workers, assignee) : null;
    const tasks = await ctx.store.list({ ...scope, collection: "task" });
    if (tasks.filter(task => task.data.status !== "done").length >= 300) return { refused: "That's a lot of open jobs (three hundred). Mark some as done first." };
    const name = worker ? worker.data.name : assignee ? titleCase(assignee) : "";
    const record = await ctx.store.add({ ...scope, collection: "task", data: { title, assignee: name, status: "open", due: due || null, createdOn: ctx.today } });
    return { record, known: Boolean(worker), name };
  };
  if ((m = /^(?:please )?give (.+?) (?:this|the|a) (?:checklist|list of jobs|job list)\s*[:,-]\s*(.+)$/i.exec(t))) {
    const jobs = m[2].split(/\s*[;\n]\s*|\s*,\s*(?=[a-z])/i).map(item => clean(item).replace(/^(?:and|then)\s+/i, "")).filter(Boolean).slice(0, 15);
    if (jobs.length < 2) return null;
    const made = []; let unknown = false;
    for (const job of jobs) { const split = splitDue(job, ctx.today); const result = await create(split.title, m[1], split.due || ctx.today); if (result.refused) return result.refused; made.push(result.record); unknown = !result.known; }
    return `Gave ${made[0].data.assignee || clean(m[1])} ${plural(made.length, "job")} for today: ${made.map(task => `${task.number}. ${task.data.title}`).join("; ")}.${unknown ? ` I don't have ${first(m[1])} in your workers yet; say "add worker ${first(m[1])}" to keep their details.` : ""}`;
  }
  if ((m = /^(?:please )?(?:assign|give|tell|ask) (.+?) (?:to|the job of|to go and) (.+)$/i.exec(t)) && !/^(?:(?:my )?(?:list|farm)|me|us|you|him|her|them|it|everyone|someone|anyone|myself)$/i.test(clean(m[1])) && clean(m[1]).split(" ").length <= 3) {
    const split = splitDue(m[2], ctx.today);
    if (!split.title || split.title.length < 3) return null;
    const result = await create(split.title.replace(/^(?:to )/i, ""), m[1], split.due);
    if (result.refused) return result.refused;
    return `${describeTask(result.record, ctx.today)}.${result.known ? "" : ` I don't have ${first(m[1])} in your workers yet; say "add worker ${first(m[1])}" to keep their details.`}`;
  }
  if ((m = /^(?:please )?(?:add|new|create) (?:a )?(?:farm )?(?:task|job|to-?do for the farm)\s*[:,-]?\s*(.+)$/i.exec(t)) && !/\b(?:to my|on my)\b.*\b(?:list|calendar)\b/i.test(t)) {
    const assigned = /^(.*?)\s+(?:for|assign(?:ed)? to)\s+([A-Z][a-z]+(?: [A-Z][a-z]+)?)(?=\s+(?:by|before|on|due)\b|\s*$)(.*)$/.exec(m[1]);
    const split = splitDue(assigned ? `${assigned[1]}${assigned[3]}` : m[1], ctx.today);
    if (!split.title) return null;
    const result = await create(split.title, assigned ? assigned[2] : "", split.due);
    if (result.refused) return result.refused;
    return `${describeTask(result.record, ctx.today)}.`;
  }

  // ---- looking at jobs ----
  if (/^(?:what|which) (?:tasks|jobs) (?:are|do i have)(?: still)? (?:open|left|to do|outstanding|pending)$/.test(lower) || /^(?:show|list) (?:me )?my (?:open |farm )?(?:tasks|jobs)$/.test(lower) || /^what(?:'s| is) (?:still )?(?:open|outstanding|to do) on the farm$/.test(lower)) {
    const tasks = (await ctx.store.list({ ...scope, collection: "task" })).filter(task => task.data.status !== "done");
    if (!tasks.length) return "There are no open jobs. Everything is done.";
    tasks.sort((a, b) => (a.data.due || "9999").localeCompare(b.data.due || "9999"));
    return `${plural(tasks.length, "open job")}: ${tasks.slice(0, 8).map(task => describeTask(task, ctx.today)).join("; ")}${tasks.length > 8 ? ` and ${tasks.length - 8} more` : ""}.`;
  }
  if (/^(?:what|which) (?:tasks|jobs) (?:are|is) overdue$/.test(lower) || /^what(?:'s| is) overdue$/.test(lower) || /^(?:show|list) (?:me )?(?:my )?overdue (?:tasks|jobs)$/.test(lower)) {
    const late = (await ctx.store.list({ ...scope, collection: "task" })).filter(task => task.data.status !== "done" && task.data.due && task.data.due < ctx.today);
    return late.length ? `${plural(late.length, "job is", "jobs are")} overdue: ${late.slice(0, 8).map(task => describeTask(task, ctx.today)).join("; ")}.` : "Nothing is overdue.";
  }
  if ((m = /^what (?:is|are) (.+?) (?:supposed to do|meant to do|doing|to do|assigned)(?: today| this week)?$/i.exec(t)) || (m = /^(?:show|list) (?:the )?(?:tasks|jobs) (?:for|of) (.+)$/i.exec(t)) || (m = /^(?:show|list) (?:me )?(.+?)['’]s (?:tasks|jobs)$/i.exec(t))) {
    const workers = await ctx.store.list({ ...scope, collection: "worker" }); const worker = findWorker(workers, m[1]);
    const name = worker ? worker.data.name : titleCase(m[1]);
    const tasks = (await ctx.store.list({ ...scope, collection: "task" })).filter(task => task.data.assignee && task.data.assignee.toLowerCase() === name.toLowerCase() && task.data.status !== "done");
    if (!worker && !tasks.length) return null;
    return tasks.length ? `${first(name)} has ${plural(tasks.length, "job")}: ${tasks.slice(0, 8).map(task => `${task.number}. ${task.data.title} (${dueWords(task.data.due, ctx.today)})`).join("; ")}.` : `${first(name)} has nothing open.`;
  }
  if (/^(?:show|list|what) (?:are )?(?:the )?(?:completed|finished|done) (?:tasks|jobs)(?: this week)?$/.test(lower)) {
    const done = (await ctx.store.list({ ...scope, collection: "task" })).filter(task => task.data.status === "done").slice(0, 8);
    return done.length ? `Done: ${done.map(task => describeTask(task, ctx.today)).join("; ")}.` : "Nothing has been marked done yet.";
  }

  // ---- finishing jobs ----
  if ((m = /^(?:mark )?(?:task|job) #?(\d{1,5}) (?:as )?(?:done|finished|complete|completed)$/i.exec(t)) || (m = /^(?:task|job) #?(\d{1,5}) (?:is )?(?:done|finished|complete|completed)$/i.exec(t)) || (m = /^(?:.+?) (?:has )?(?:finished|completed|did) (?:task|job) #?(\d{1,5})$/i.exec(t))) {
    const tasks = await ctx.store.list({ ...scope, collection: "task" }); const task = tasks.find(item => item.number === Number(m[1]));
    if (!task) return `I can't find task ${m[1]}.`;
    if (task.data.status === "done") return `Task ${task.number} is already done.`;
    await ctx.store.update({ ...scope, record: { ...task, data: { ...task.data, status: "done", doneOn: ctx.today } } });
    const left = tasks.filter(item => item.data.status !== "done" && item.number !== task.number).length;
    return `Done: ${task.data.title}${task.data.assignee ? ` (${task.data.assignee})` : ""}. ${left ? `${plural(left, "job")} still open.` : "That was the last open job."}`;
  }
  if ((m = /^(.+?) (?:has )?(?:finished|completed|done with) (.+)$/i.exec(t)) && clean(m[1]).split(" ").length <= 2 && /^[A-Z]/.test(m[1])) {
    const tasks = (await ctx.store.list({ ...scope, collection: "task" })).filter(item => item.data.status !== "done" && item.data.assignee && item.data.assignee.toLowerCase().split(" ").includes(m[1].toLowerCase()));
    const words = clean(m[2]).toLowerCase().split(" ").filter(word => word.length > 2);
    const matches = tasks.filter(item => words.length && words.every(word => item.data.title.toLowerCase().includes(word)));
    if (matches.length === 1) { await ctx.store.update({ ...scope, record: { ...matches[0], data: { ...matches[0].data, status: "done", doneOn: ctx.today } } }); return `Done: ${matches[0].data.title} (${matches[0].data.assignee}).`; }
    if (matches.length > 1) return `Which job: ${matches.slice(0, 4).map(item => `${item.number}. ${item.data.title}`).join("; ")}?`;
  }
  if ((m = /^(?:please )?(?:remove|delete|cancel) (?:task|job) #?(\d{1,5})$/i.exec(t))) {
    const task = (await ctx.store.list({ ...scope, collection: "task" })).find(item => item.number === Number(m[1]));
    return task ? askConfirm(ctx, `Remove task ${task.number} (${task.data.title})?`, { type: "remove-record", memoryId: task.memoryId, label: `task ${task.number}` }) : `I can't find task ${m[1]}.`;
  }
  return null;
}

// For the morning brief: jobs due today and jobs already late.
function taskDigest(records, today) {
  const open = (records || []).filter(record => record.collection === "task" && record.data.status !== "done");
  return { dueToday: open.filter(record => record.data.due === today), overdue: open.filter(record => record.data.due && record.data.due < today) };
}

module.exports = Object.freeze({ handle, templates, taskDigest, splitDue, findWorker });
