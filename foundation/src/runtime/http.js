function json(status, body, headers = {}) {
  return {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      ...headers
    },
    body
  };
}

function text(status, body, headers = {}) {
  return {
    status,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      ...headers
    },
    body
  };
}

function parseRoutePattern(pattern) {
  const parts = pattern.split(" ").filter(Boolean);
  if (parts.length !== 2) throw new Error(`Invalid route pattern: ${pattern}`);
  const [method, path] = parts;
  const keys = [];
  const regex = new RegExp(`^${path.replace(/:[^/]+/g, token => {
    keys.push(token.slice(1));
    return "([^/]+)";
  })}$`);
  return { method: method.toUpperCase(), path, keys, regex };
}

function createRouter() {
  const routes = [];

  function add(pattern, handler) {
    routes.push({ ...parseRoutePattern(pattern), handler });
  }

  async function handle(request) {
    const method = request.method.toUpperCase();
    const url = new URL(request.url, "http://localhost");
    const route = routes.find(candidate => candidate.method === method && candidate.regex.test(url.pathname));
    if (!route) return json(404, { error: "Route not found" });

    const match = url.pathname.match(route.regex);
    const params = {};
    route.keys.forEach((key, index) => {
      params[key] = decodeURIComponent(match[index + 1]);
    });

    try {
      return await route.handler({
        ...request,
        params,
        query: Object.fromEntries(url.searchParams.entries()),
        path: url.pathname
      });
    } catch (error) {
      return json(500, { error: error.message || "Internal server error" });
    }
  }

  function describe() {
    return routes.map(route => `${route.method} ${route.path}`);
  }

  return { add, handle, describe };
}

module.exports = { createRouter, json, text };
