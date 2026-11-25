// Tiny local server for previewing the catalogue: node koachlearn-catalog/build/serve.js  -> http://localhost:4318
const http = require("http"), fs = require("fs"), path = require("path");
const ROOT = path.join(__dirname, "..", "site");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8" };
http.createServer((req, res) => {
  const p = decodeURIComponent(req.url.split("?")[0]);
  const f = path.join(ROOT, p === "/" ? "index.html" : p);
  if (!f.startsWith(ROOT)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (err, b) => {
    if (err) { res.writeHead(404); return res.end("not found"); }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(f)] || "application/octet-stream", "Cache-Control": "no-cache" });
    res.end(b);
  });
}).listen(4318, () => console.log("catalogue preview on http://localhost:4318"));
