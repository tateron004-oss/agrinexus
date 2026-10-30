// Runs inside the Koach Learn admin dashboard (the owner's signed-in Chrome) and fills in the dashboard's own forms for one course from its upload plan
// (scripts/koachlearn-upload-plan.js), the same steps a person would click: course form, chapters, lesson videos, knowledge checks, questions, quiz.
// It moves between pages with the site's own router so the files stay loaded, and it can be re-run: whatever is already on the course is skipped.
// Usage in the page: klRun(plan, files, categoryId); progress is in window.klState and window.klLog.
(() => {
  // Chrome slows timers in tabs that are not in front, so several tabs can run at once only if waiting is timed by a worker (not slowed)
  let worker = null, seq = 0; const waiting = {};
  try { worker = new Worker(URL.createObjectURL(new Blob(["onmessage=e=>setTimeout(()=>postMessage(e.data.id),e.data.ms)"], { type: "text/javascript" }))); worker.onmessage = e => { const r = waiting[e.data]; delete waiting[e.data]; if (r) r(); }; } catch (_) { worker = null; }
  const sleep = ms => new Promise(r => { if (!worker) return setTimeout(r, ms); const id = ++seq; waiting[id] = r; worker.postMessage({ id, ms }); });
  const until = async (fn, what, ms = 90000) => { const t = Date.now(); while (Date.now() - t < ms) { let v; try { v = fn(); } catch (_) { v = null; } if (v) return v; await sleep(200); } throw new Error(`timed out waiting for ${what}`); };
  const setVal = (el, v) => { Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, "value").set.call(el, v); el.dispatchEvent(new Event("input", { bubbles: true })); };
  const setFile = (el, f) => { const dt = new DataTransfer(); dt.items.add(f); el.files = dt.files; el.dispatchEvent(new Event("change", { bubbles: true })); };
  const btn = (root, text) => [...root.querySelectorAll("button")].find(b => b.textContent.trim().endsWith(text));
  const main = () => [...document.querySelectorAll("main")].pop();
  const log = m => { window.klLog.push(`${new Date().toLocaleTimeString()} ${m}`); };
  const go = async (url, ready, what) => { if (location.pathname !== url) window.next.router.push(url); await until(() => location.pathname === url && ready(), what); await sleep(600); };
  // a dialog that is closing waits for its closing animation, and Chrome does not run animations in a tab that is not in front; once it is marked
  // closed, telling it the animation has ended lets it go at once (an open dialog is never touched)
  const dialog = () => [...document.querySelectorAll('[role="dialog"]')].find(d => d.getAttribute("data-state") !== "closed");
  const finishClosing = () => document.querySelectorAll('[data-state="closed"]').forEach(el => { el.dispatchEvent(new AnimationEvent("animationend", { bubbles: true })); });
  const closed = what => until(() => { finishClosing(); return !dialog(); }, what, 120000);
  // the editor cannot hold tables, so a table becomes one list item per row
  const tables = html => { const doc = new DOMParser().parseFromString(`<div id="r">${html}</div>`, "text/html"); doc.querySelectorAll("table").forEach(t => { const rows = [...t.querySelectorAll("tr")]; const head = [...rows[0].children].map(c => c.textContent.trim()); const ul = doc.createElement("ul"); rows.slice(1).forEach(r => { const cells = [...r.children]; const li = doc.createElement("li"); li.innerHTML = `<strong>${cells[0].textContent.trim()}</strong>` + cells.slice(1).map((c, i) => `<br><em>${head[i + 1]}:</em> ${c.innerHTML.trim()}`).join(""); ul.appendChild(li); }); t.replaceWith(ul); }); return doc.getElementById("r").innerHTML; };
  const header = name => [...main().querySelectorAll("button[aria-controls]")].find(b => b.textContent.replace(/^\s*\d+\.\s*/, "").trim() === name.trim());
  // open a chapter and give its rows time to arrive, so nothing already there is added twice
  const region = async h => { if (h.getAttribute("aria-expanded") !== "true") h.click(); const r = await until(() => { const x = document.getElementById(h.getAttribute("aria-controls")); return x && x.querySelector("button") && x; }, "chapter to open"); await sleep(2500); return document.getElementById(h.getAttribute("aria-controls")); };

  async function courseId(cat, name) {
    await go(`/dashboard/admin/categories/${cat}`, () => main().innerText.includes("Add Course"), "category page");
    // the course cards arrive after the page frame; every category already has at least one course, so wait for the cards
    await until(() => main().querySelector('a[href$="/edit-course"]'), "course cards", 60000);
    await sleep(1500);
    const found = [];
    for (const a of main().querySelectorAll('a[href$="/edit-course"]')) {
      let el = a, card = null;
      while (el.parentElement && el.parentElement.querySelectorAll('a[href$="/edit-course"]').length === 1) el = el.parentElement;
      card = el;
      const title = [...card.querySelectorAll("h1,h2,h3,h4,h5,p,span,div")].map(e => e.childElementCount === 0 ? e.textContent.trim() : "").find(t => t === name.trim());
      if (title) found.push({ id: a.getAttribute("href").split("/").slice(-2)[0], chapters: +((card.innerText.match(/(\d+)\s+Chapters?/) || [0, 0])[1]) });
    }
    // a name that shows twice (an earlier failed run): keep working on the copy that has the most chapters
    found.sort((x, y) => y.chapters - x.chapters);
    return found.length ? found[0].id : null;
  }

  async function addCourse(plan, files, cat) {
    await go(`/dashboard/admin/categories/${cat}/add-course`, () => document.querySelector('input[name="name"]') && document.querySelector(".ProseMirror"), "add-course form");
    const fileInputs = [...document.querySelectorAll('input[type="file"]')];
    setFile(fileInputs.find(i => i.name !== "video"), files[plan.picture]);
    setFile(document.querySelector('input[name="video"]'), files[plan.introVideo]);
    setVal(document.querySelector('input[name="name"]'), plan.name);
    setVal(document.querySelector('input[name="skills"]'), plan.skills);
    document.querySelector(".ProseMirror").editor.commands.setContent(tables(plan.descriptionHtml), true);
    await sleep(500);
    btn(main(), "Add Course").click();
    await until(() => /added successfully/i.test(document.body.innerText), "course to save", 180000);
    log(`course added: ${plan.name}`);
  }

  async function ensureStructure(plan, files, cat, id) {
    const page = `/dashboard/admin/categories/${cat}/${id}`;
    await go(page, () => btn(main(), "Add Chapter"), "course page");
    await sleep(1500);
    for (const ch of plan.chapters) {
      if (header(ch.name)) continue;
      btn(main(), "Add Chapter").click();
      const d = await until(dialog, "chapter dialog");
      setVal(d.querySelector('input[type="text"]'), ch.name); await sleep(200);
      btn(d, "Add Chapter").click(); await closed("chapter dialog to close");
      await until(() => header(ch.name), `chapter "${ch.name}"`);
      log(`chapter: ${ch.name}`);
    }
    const hrefs = [];
    for (const ch of plan.chapters) {
      let r = await region(header(ch.name));
      // a video row shows its title only after it loads, but its video icon is there at once
      const videos = el => el.querySelectorAll("svg.lucide-video").length;
      if (ch.video && videos(r) === 0) {
        [...r.querySelectorAll("button")].find(b => /Add Video/.test(b.textContent)).click();
        const d = await until(dialog, "video dialog"); await sleep(300);
        setVal(d.querySelector('input[type="text"]'), ch.video.title);
        d.querySelector(".ProseMirror").editor.commands.setContent(tables(ch.video.html), true);
        setFile(d.querySelector('input[type="file"]'), files[ch.video.file]);
        await sleep(300); btn(d, "Upload Video").click(); await closed("video upload");
        r = await region(header(ch.name));
        await until(() => { const rr = document.getElementById(header(ch.name).getAttribute("aria-controls")); return rr && videos(rr) > 0; }, `video "${ch.video.title}" to appear`);
        log(`video: ${ch.video.title}`);
      }
      let link = [...r.querySelectorAll("a")].find(a => /add-question/.test(a.getAttribute("href") || ""));
      if (!link) {
        [...r.querySelectorAll("button")].find(b => /Add Knowledge check/.test(b.textContent)).click();
        const d = await until(dialog, "knowledge check dialog"); await sleep(300);
        setVal(d.querySelector("input"), ch.check.title); await sleep(200);
        btn(d, "Create Quiz").click(); await closed("knowledge check to save");
        link = await until(() => { const rr = document.getElementById(header(ch.name).getAttribute("aria-controls")); return rr && [...rr.querySelectorAll("a")].find(a => /add-question/.test(a.getAttribute("href") || "")); }, `knowledge check "${ch.check.title}"`);
        log(`knowledge check: ${ch.check.title}`);
      }
      hrefs.push(link.getAttribute("href"));
    }
    // the course quiz sits outside the chapters
    let quizHref = [...main().querySelectorAll('a[href*="add-question"]')].map(a => a.getAttribute("href")).find(h => !hrefs.includes(h));
    if (!quizHref) {
      btn(main(), "Add Quiz").click();
      const d = await until(dialog, "quiz dialog"); await sleep(300);
      setVal(d.querySelector("input"), plan.quiz.title); await sleep(200);
      btn(d, "Create Quiz").click(); await closed("quiz to save");
      quizHref = await until(() => [...main().querySelectorAll('a[href*="add-question"]')].map(a => a.getAttribute("href")).find(h => !hrefs.includes(h)), "quiz link");
      log(`quiz: ${plan.quiz.title}`);
    }
    return [...plan.chapters.map((ch, i) => ({ href: hrefs[i], set: ch.check })), { href: quizHref, set: plan.quiz }];
  }

  async function addQuestions(href, set) {
    await go(href, () => btn(document, "Add Question"), "question page");
    await sleep(1500);
    // compare by question text, so a question that did not save is found wherever it is, and nothing is added twice
    const norm = s => s.replace(/\s+/g, " ").trim();
    const onPage = () => new Set((main().innerText.match(/^\d+\. .+$/gm) || []).map(l => norm(l.replace(/^\d+\.\s*/, ""))));
    for (let pass = 0; pass < 3; pass++) {
    if (pass) await sleep(3000); // a late save shows up before anything is added again
    const have = onPage();
    const missing = set.questions.filter(q => !have.has(norm(q.q)));
    if (!missing.length) break;
    for (const q of missing) {
      btn(document, "Add Question").click();
      const d = await until(dialog, "question dialog");
      while (d.querySelectorAll('input[placeholder="React is ...."]').length < q.options.length) { btn(d, "Add Option").click(); await sleep(200); }
      setVal(d.querySelector('input[placeholder="What is react?"]'), q.q);
      const opts = [...d.querySelectorAll('input[placeholder="React is ...."]')];
      q.options.forEach((o, i) => setVal(opts[i], o));
      [...d.querySelectorAll('button[role="checkbox"]')][q.answer].click();
      await sleep(300); btn(d, "Create Question").click(); await closed("question to save");
      await sleep(800);
      window.klQuestions = (window.klQuestions || 0) + 1;
    }
    await sleep(2000);
    }
    const left = set.questions.filter(q => !onPage().has(norm(q.q))).length;
    log(`${set.title}: ${set.questions.length - left}/${set.questions.length} questions`);
    if (left) throw new Error(`${left} question(s) in "${set.title}" did not save`);
  }

  window.klCourseIdFor = courseId;
  window.klRun = async (plan, files, cat) => {
    window.klLog = []; window.klState = "running"; window.klQuestions = 0;
    try {
      for (const f of plan.files) if (!files[f]) throw new Error(`file not loaded: ${f}`);
      let id = await courseId(cat, plan.name);
      if (!id) {
        await addCourse(plan, files, cat);
        for (let i = 0; i < 5 && !id; i++) { await sleep(2000); id = await courseId(cat, plan.name); }
        if (!id) throw new Error("the new course did not show on the category page");
      }
      log(`course id ${id}`);
      window.klCourseId = id;
      const sets = await ensureStructure(plan, files, cat, id);
      for (const s of sets) await addQuestions(s.href, s.set);
      window.klState = "done";
    } catch (e) { window.klState = "error: " + e.message; log("ERROR " + e.message); }
    return window.klState;
  };

  // a batch of courses, one after another: items = [{ key, plan: "<plan file name>", cat }] with the batch's files loaded in window.klFiles
  window.klRunQueue = async items => {
    window.klResults = []; window.klQueueState = "running";
    for (const it of items) {
      window.klCurrent = it.key;
      const plan = JSON.parse(await window.klFiles[it.plan].text());
      let state = await window.klRun(plan, window.klFiles, it.cat);
      if (state !== "done") { await sleep(5000); state = await window.klRun(plan, window.klFiles, it.cat); } // one retry picks up where it stopped
      window.klResults.push({ key: it.key, state, course: window.klCourseId, log: window.klLog.slice(-3) });
    }
    window.klQueueState = "done";
    return window.klResults;
  };
})();
