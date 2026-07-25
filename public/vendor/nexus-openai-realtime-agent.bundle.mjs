var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __typeError = (msg) => {
  throw TypeError(msg);
};
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __esm = (fn, res, err) => function __init() {
  if (err) throw err[0];
  try {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  } catch (e) {
    throw err = [e], e;
  }
};
var __commonJS = (cb, mod) => function __require() {
  try {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  } catch (e) {
    throw mod = 0, e;
  }
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __accessCheck = (obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg);
var __privateGet = (obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj));
var __privateAdd = (obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
var __privateSet = (obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value);
var __privateMethod = (obj, member, method) => (__accessCheck(obj, member, "access private method"), method);
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/@openai/agents-core/dist/shims/config-browser.mjs
var config_browser_exports = {};
__export(config_browser_exports, {
  isBrowserEnvironment: () => isBrowserEnvironment,
  loadEnv: () => loadEnv
});
function loadEnv() {
  return {};
}
function isBrowserEnvironment() {
  return true;
}
var init_config_browser = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/@openai/agents-core/dist/shims/config-browser.mjs"() {
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/ms/index.js
var require_ms = __commonJS({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/ms/index.js"(exports, module) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse3(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse3(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/debug/src/common.js
var require_common = __commonJS({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/debug/src/common.js"(exports, module) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash2 = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash2 = (hash2 << 5) - hash2 + namespace.charCodeAt(i);
          hash2 |= 0;
        }
        return createDebug.colors[Math.abs(hash2) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug3(...args) {
          if (!debug3.enabled) {
            return;
          }
          const self = debug3;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug3.namespace = namespace;
        debug3.useColors = createDebug.useColors();
        debug3.color = createDebug.selectColor(namespace);
        debug3.extend = extend2;
        debug3.destroy = createDebug.destroy;
        Object.defineProperty(debug3, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug3);
        }
        return debug3;
      }
      function extend2(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
        for (const ns of split) {
          if (ns[0] === "-") {
            createDebug.skips.push(ns.slice(1));
          } else {
            createDebug.names.push(ns);
          }
        }
      }
      function matchesTemplate(search, template) {
        let searchIndex = 0;
        let templateIndex = 0;
        let starIndex = -1;
        let matchIndex = 0;
        while (searchIndex < search.length) {
          if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
            if (template[templateIndex] === "*") {
              starIndex = templateIndex;
              matchIndex = searchIndex;
              templateIndex++;
            } else {
              searchIndex++;
              templateIndex++;
            }
          } else if (starIndex !== -1) {
            templateIndex = starIndex + 1;
            matchIndex++;
            searchIndex = matchIndex;
          } else {
            return false;
          }
        }
        while (templateIndex < template.length && template[templateIndex] === "*") {
          templateIndex++;
        }
        return templateIndex === template.length;
      }
      function disable() {
        const namespaces = [
          ...createDebug.names,
          ...createDebug.skips.map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        for (const skip of createDebug.skips) {
          if (matchesTemplate(name, skip)) {
            return false;
          }
        }
        for (const ns of createDebug.names) {
          if (matchesTemplate(name, ns)) {
            return true;
          }
        }
        return false;
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module.exports = setup;
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/debug/src/browser.js"(exports, module) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error51) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
      } catch (error51) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error51) {
      }
    }
    module.exports = require_common()(exports);
    var { formatters } = module.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error51) {
        return "[UnexpectedJSONParseError]: " + error51.message;
      }
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/core.js
// @__NO_SIDE_EFFECTS__
function $constructor(name, initializer3, params) {
  function init(inst, def) {
    if (!inst._zod) {
      Object.defineProperty(inst, "_zod", {
        value: {
          def,
          constr: _,
          traits: /* @__PURE__ */ new Set()
        },
        enumerable: false
      });
    }
    if (inst._zod.traits.has(name)) {
      return;
    }
    inst._zod.traits.add(name);
    initializer3(inst, def);
    const proto = _.prototype;
    const keys = Object.keys(proto);
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      if (!(k in inst)) {
        inst[k] = proto[k].bind(inst);
      }
    }
  }
  const Parent = params?.Parent ?? Object;
  class Definition extends Parent {
  }
  Object.defineProperty(Definition, "name", { value: name });
  function _(def) {
    var _a4;
    const inst = params?.Parent ? new Definition() : this;
    init(inst, def);
    (_a4 = inst._zod).deferred ?? (_a4.deferred = []);
    for (const fn of inst._zod.deferred) {
      fn();
    }
    return inst;
  }
  Object.defineProperty(_, "init", { value: init });
  Object.defineProperty(_, Symbol.hasInstance, {
    value: (inst) => {
      if (params?.Parent && inst instanceof params.Parent)
        return true;
      return inst?._zod?.traits?.has(name);
    }
  });
  Object.defineProperty(_, "name", { value: name });
  return _;
}
function config(newConfig) {
  if (newConfig)
    Object.assign(globalConfig, newConfig);
  return globalConfig;
}
var _a, NEVER, $brand, $ZodAsyncError, $ZodEncodeError, globalConfig;
var init_core = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/core.js"() {
    NEVER = /* @__PURE__ */ Object.freeze({
      status: "aborted"
    });
    $brand = /* @__PURE__ */ Symbol("zod_brand");
    $ZodAsyncError = class extends Error {
      constructor() {
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
      }
    };
    $ZodEncodeError = class extends Error {
      constructor(name) {
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
      }
    };
    (_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
    globalConfig = globalThis.__zod_globalConfig;
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/util.js
var util_exports = {};
__export(util_exports, {
  BIGINT_FORMAT_RANGES: () => BIGINT_FORMAT_RANGES,
  Class: () => Class,
  NUMBER_FORMAT_RANGES: () => NUMBER_FORMAT_RANGES,
  aborted: () => aborted,
  allowsEval: () => allowsEval,
  assert: () => assert,
  assertEqual: () => assertEqual,
  assertIs: () => assertIs,
  assertNever: () => assertNever,
  assertNotEqual: () => assertNotEqual,
  assignProp: () => assignProp,
  base64ToUint8Array: () => base64ToUint8Array,
  base64urlToUint8Array: () => base64urlToUint8Array,
  cached: () => cached,
  captureStackTrace: () => captureStackTrace,
  cleanEnum: () => cleanEnum,
  cleanRegex: () => cleanRegex,
  clone: () => clone,
  cloneDef: () => cloneDef,
  createTransparentProxy: () => createTransparentProxy,
  defineLazy: () => defineLazy,
  esc: () => esc,
  escapeRegex: () => escapeRegex,
  explicitlyAborted: () => explicitlyAborted,
  extend: () => extend,
  finalizeIssue: () => finalizeIssue,
  floatSafeRemainder: () => floatSafeRemainder,
  getElementAtPath: () => getElementAtPath,
  getEnumValues: () => getEnumValues,
  getLengthableOrigin: () => getLengthableOrigin,
  getParsedType: () => getParsedType,
  getSizableOrigin: () => getSizableOrigin,
  hexToUint8Array: () => hexToUint8Array,
  isObject: () => isObject,
  isPlainObject: () => isPlainObject,
  issue: () => issue,
  joinValues: () => joinValues,
  jsonStringifyReplacer: () => jsonStringifyReplacer,
  merge: () => merge,
  mergeDefs: () => mergeDefs,
  normalizeParams: () => normalizeParams,
  nullish: () => nullish,
  numKeys: () => numKeys,
  objectClone: () => objectClone,
  omit: () => omit,
  optionalKeys: () => optionalKeys,
  parsedType: () => parsedType,
  partial: () => partial,
  pick: () => pick,
  prefixIssues: () => prefixIssues,
  primitiveTypes: () => primitiveTypes,
  promiseAllObject: () => promiseAllObject,
  propertyKeyTypes: () => propertyKeyTypes,
  randomString: () => randomString,
  required: () => required,
  safeExtend: () => safeExtend,
  shallowClone: () => shallowClone,
  slugify: () => slugify,
  stringifyPrimitive: () => stringifyPrimitive,
  uint8ArrayToBase64: () => uint8ArrayToBase64,
  uint8ArrayToBase64url: () => uint8ArrayToBase64url,
  uint8ArrayToHex: () => uint8ArrayToHex,
  unwrapMessage: () => unwrapMessage
});
function assertEqual(val) {
  return val;
}
function assertNotEqual(val) {
  return val;
}
function assertIs(_arg) {
}
function assertNever(_x) {
  throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {
}
function getEnumValues(entries) {
  const numericValues = Object.values(entries).filter((v) => typeof v === "number");
  const values = Object.entries(entries).filter(([k, _]) => numericValues.indexOf(+k) === -1).map(([_, v]) => v);
  return values;
}
function joinValues(array2, separator = "|") {
  return array2.map((val) => stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
  if (typeof value === "bigint")
    return value.toString();
  return value;
}
function cached(getter) {
  const set2 = false;
  return {
    get value() {
      if (!set2) {
        const value = getter();
        Object.defineProperty(this, "value", { value });
        return value;
      }
      throw new Error("cached value already set");
    }
  };
}
function nullish(input) {
  return input === null || input === void 0;
}
function cleanRegex(source) {
  const start = source.startsWith("^") ? 1 : 0;
  const end = source.endsWith("$") ? source.length - 1 : source.length;
  return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
  const ratio = val / step;
  const roundedRatio = Math.round(ratio);
  const tolerance = Number.EPSILON * Math.max(Math.abs(ratio), 1);
  if (Math.abs(ratio - roundedRatio) < tolerance)
    return 0;
  return ratio - roundedRatio;
}
function defineLazy(object2, key, getter) {
  let value = void 0;
  Object.defineProperty(object2, key, {
    get() {
      if (value === EVALUATING) {
        return void 0;
      }
      if (value === void 0) {
        value = EVALUATING;
        value = getter();
      }
      return value;
    },
    set(v) {
      Object.defineProperty(object2, key, {
        value: v
        // configurable: true,
      });
    },
    configurable: true
  });
}
function objectClone(obj) {
  return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
  Object.defineProperty(target, prop, {
    value,
    writable: true,
    enumerable: true,
    configurable: true
  });
}
function mergeDefs(...defs) {
  const mergedDescriptors = {};
  for (const def of defs) {
    const descriptors = Object.getOwnPropertyDescriptors(def);
    Object.assign(mergedDescriptors, descriptors);
  }
  return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
  return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
  if (!path)
    return obj;
  return path.reduce((acc, key) => acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
  const keys = Object.keys(promisesObj);
  const promises = keys.map((key) => promisesObj[key]);
  return Promise.all(promises).then((results) => {
    const resolvedObj = {};
    for (let i = 0; i < keys.length; i++) {
      resolvedObj[keys[i]] = results[i];
    }
    return resolvedObj;
  });
}
function randomString(length = 10) {
  const chars = "abcdefghijklmnopqrstuvwxyz";
  let str = "";
  for (let i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}
function esc(str) {
  return JSON.stringify(str);
}
function slugify(input) {
  return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
function isObject(data) {
  return typeof data === "object" && data !== null && !Array.isArray(data);
}
function isPlainObject(o) {
  if (isObject(o) === false)
    return false;
  const ctor = o.constructor;
  if (ctor === void 0)
    return true;
  if (typeof ctor !== "function")
    return true;
  const prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function shallowClone(o) {
  if (isPlainObject(o))
    return { ...o };
  if (Array.isArray(o))
    return [...o];
  if (o instanceof Map)
    return new Map(o);
  if (o instanceof Set)
    return new Set(o);
  return o;
}
function numKeys(data) {
  let keyCount = 0;
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      keyCount++;
    }
  }
  return keyCount;
}
function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
  const cl = new inst._zod.constr(def ?? inst._zod.def);
  if (!def || params?.parent)
    cl._zod.parent = inst;
  return cl;
}
function normalizeParams(_params) {
  const params = _params;
  if (!params)
    return {};
  if (typeof params === "string")
    return { error: () => params };
  if (params?.message !== void 0) {
    if (params?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    params.error = params.message;
  }
  delete params.message;
  if (typeof params.error === "string")
    return { ...params, error: () => params.error };
  return params;
}
function createTransparentProxy(getter) {
  let target;
  return new Proxy({}, {
    get(_, prop, receiver) {
      target ?? (target = getter());
      return Reflect.get(target, prop, receiver);
    },
    set(_, prop, value, receiver) {
      target ?? (target = getter());
      return Reflect.set(target, prop, value, receiver);
    },
    has(_, prop) {
      target ?? (target = getter());
      return Reflect.has(target, prop);
    },
    deleteProperty(_, prop) {
      target ?? (target = getter());
      return Reflect.deleteProperty(target, prop);
    },
    ownKeys(_) {
      target ?? (target = getter());
      return Reflect.ownKeys(target);
    },
    getOwnPropertyDescriptor(_, prop) {
      target ?? (target = getter());
      return Reflect.getOwnPropertyDescriptor(target, prop);
    },
    defineProperty(_, prop, descriptor) {
      target ?? (target = getter());
      return Reflect.defineProperty(target, prop, descriptor);
    }
  });
}
function stringifyPrimitive(value) {
  if (typeof value === "bigint")
    return value.toString() + "n";
  if (typeof value === "string")
    return `"${value}"`;
  return `${value}`;
}
function optionalKeys(shape) {
  return Object.keys(shape).filter((k) => {
    return shape[k]._zod.optin === "optional" && shape[k]._zod.optout === "optional";
  });
}
function pick(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".pick() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = {};
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        newShape[key] = currDef.shape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function omit(schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".omit() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const newShape = { ...schema._zod.def.shape };
      for (const key in mask) {
        if (!(key in currDef.shape)) {
          throw new Error(`Unrecognized key: "${key}"`);
        }
        if (!mask[key])
          continue;
        delete newShape[key];
      }
      assignProp(this, "shape", newShape);
      return newShape;
    },
    checks: []
  });
  return clone(schema, def);
}
function extend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to extend: expected a plain object");
  }
  const checks = schema._zod.def.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    const existingShape = schema._zod.def.shape;
    for (const key in shape) {
      if (Object.getOwnPropertyDescriptor(existingShape, key) !== void 0) {
        throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
      }
    }
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function safeExtend(schema, shape) {
  if (!isPlainObject(shape)) {
    throw new Error("Invalid input to safeExtend: expected a plain object");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const _shape = { ...schema._zod.def.shape, ...shape };
      assignProp(this, "shape", _shape);
      return _shape;
    }
  });
  return clone(schema, def);
}
function merge(a, b) {
  if (a._zod.def.checks?.length) {
    throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
  }
  const def = mergeDefs(a._zod.def, {
    get shape() {
      const _shape = { ...a._zod.def.shape, ...b._zod.def.shape };
      assignProp(this, "shape", _shape);
      return _shape;
    },
    get catchall() {
      return b._zod.def.catchall;
    },
    checks: b._zod.def.checks ?? []
  });
  return clone(a, def);
}
function partial(Class2, schema, mask) {
  const currDef = schema._zod.def;
  const checks = currDef.checks;
  const hasChecks = checks && checks.length > 0;
  if (hasChecks) {
    throw new Error(".partial() cannot be used on object schemas containing refinements");
  }
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in oldShape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      } else {
        for (const key in oldShape) {
          shape[key] = Class2 ? new Class2({
            type: "optional",
            innerType: oldShape[key]
          }) : oldShape[key];
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    },
    checks: []
  });
  return clone(schema, def);
}
function required(Class2, schema, mask) {
  const def = mergeDefs(schema._zod.def, {
    get shape() {
      const oldShape = schema._zod.def.shape;
      const shape = { ...oldShape };
      if (mask) {
        for (const key in mask) {
          if (!(key in shape)) {
            throw new Error(`Unrecognized key: "${key}"`);
          }
          if (!mask[key])
            continue;
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      } else {
        for (const key in oldShape) {
          shape[key] = new Class2({
            type: "nonoptional",
            innerType: oldShape[key]
          });
        }
      }
      assignProp(this, "shape", shape);
      return shape;
    }
  });
  return clone(schema, def);
}
function aborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue !== true) {
      return true;
    }
  }
  return false;
}
function explicitlyAborted(x, startIndex = 0) {
  if (x.aborted === true)
    return true;
  for (let i = startIndex; i < x.issues.length; i++) {
    if (x.issues[i]?.continue === false) {
      return true;
    }
  }
  return false;
}
function prefixIssues(path, issues) {
  return issues.map((iss) => {
    var _a4;
    (_a4 = iss).path ?? (_a4.path = []);
    iss.path.unshift(path);
    return iss;
  });
}
function unwrapMessage(message) {
  return typeof message === "string" ? message : message?.message;
}
function finalizeIssue(iss, ctx, config2) {
  const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config2.customError?.(iss)) ?? unwrapMessage(config2.localeError?.(iss)) ?? "Invalid input";
  const { inst: _inst, continue: _continue, input: _input, ...rest } = iss;
  rest.path ?? (rest.path = []);
  rest.message = message;
  if (ctx?.reportInput) {
    rest.input = _input;
  }
  return rest;
}
function getSizableOrigin(input) {
  if (input instanceof Set)
    return "set";
  if (input instanceof Map)
    return "map";
  if (input instanceof File)
    return "file";
  return "unknown";
}
function getLengthableOrigin(input) {
  if (Array.isArray(input))
    return "array";
  if (typeof input === "string")
    return "string";
  return "unknown";
}
function parsedType(data) {
  const t = typeof data;
  switch (t) {
    case "number": {
      return Number.isNaN(data) ? "nan" : "number";
    }
    case "object": {
      if (data === null) {
        return "null";
      }
      if (Array.isArray(data)) {
        return "array";
      }
      const obj = data;
      if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
        return obj.constructor.name;
      }
    }
  }
  return t;
}
function issue(...args) {
  const [iss, input, inst] = args;
  if (typeof iss === "string") {
    return {
      message: iss,
      code: "custom",
      input,
      inst
    };
  }
  return { ...iss };
}
function cleanEnum(obj) {
  return Object.entries(obj).filter(([k, _]) => {
    return Number.isNaN(Number.parseInt(k, 10));
  }).map((el) => el[1]);
}
function base64ToUint8Array(base643) {
  const binaryString = atob(base643);
  const bytes = new Uint8Array(binaryString.length);
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}
function uint8ArrayToBase64(bytes) {
  let binaryString = "";
  for (let i = 0; i < bytes.length; i++) {
    binaryString += String.fromCharCode(bytes[i]);
  }
  return btoa(binaryString);
}
function base64urlToUint8Array(base64url3) {
  const base643 = base64url3.replace(/-/g, "+").replace(/_/g, "/");
  const padding = "=".repeat((4 - base643.length % 4) % 4);
  return base64ToUint8Array(base643 + padding);
}
function uint8ArrayToBase64url(bytes) {
  return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex3) {
  const cleanHex = hex3.replace(/^0x/, "");
  if (cleanHex.length % 2 !== 0) {
    throw new Error("Invalid hex string length");
  }
  const bytes = new Uint8Array(cleanHex.length / 2);
  for (let i = 0; i < cleanHex.length; i += 2) {
    bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
  }
  return bytes;
}
function uint8ArrayToHex(bytes) {
  return Array.from(bytes).map((b) => b.toString(16).padStart(2, "0")).join("");
}
var EVALUATING, captureStackTrace, allowsEval, getParsedType, propertyKeyTypes, primitiveTypes, NUMBER_FORMAT_RANGES, BIGINT_FORMAT_RANGES, Class;
var init_util = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/util.js"() {
    init_core();
    EVALUATING = /* @__PURE__ */ Symbol("evaluating");
    captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args) => {
    };
    allowsEval = /* @__PURE__ */ cached(() => {
      if (globalConfig.jitless) {
        return false;
      }
      if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
      }
      try {
        const F = Function;
        new F("");
        return true;
      } catch (_) {
        return false;
      }
    });
    getParsedType = (data) => {
      const t = typeof data;
      switch (t) {
        case "undefined":
          return "undefined";
        case "string":
          return "string";
        case "number":
          return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
          return "boolean";
        case "function":
          return "function";
        case "bigint":
          return "bigint";
        case "symbol":
          return "symbol";
        case "object":
          if (Array.isArray(data)) {
            return "array";
          }
          if (data === null) {
            return "null";
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return "promise";
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return "map";
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return "set";
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return "date";
          }
          if (typeof File !== "undefined" && data instanceof File) {
            return "file";
          }
          return "object";
        default:
          throw new Error(`Unknown data type: ${t}`);
      }
    };
    propertyKeyTypes = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
    primitiveTypes = /* @__PURE__ */ new Set([
      "string",
      "number",
      "bigint",
      "boolean",
      "symbol",
      "undefined"
    ]);
    NUMBER_FORMAT_RANGES = {
      safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
      int32: [-2147483648, 2147483647],
      uint32: [0, 4294967295],
      float32: [-34028234663852886e22, 34028234663852886e22],
      float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
    };
    BIGINT_FORMAT_RANGES = {
      int64: [/* @__PURE__ */ BigInt("-9223372036854775808"), /* @__PURE__ */ BigInt("9223372036854775807")],
      uint64: [/* @__PURE__ */ BigInt(0), /* @__PURE__ */ BigInt("18446744073709551615")]
    };
    Class = class {
      constructor(..._args) {
      }
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/errors.js
function flattenError(error51, mapper = (issue2) => issue2.message) {
  const fieldErrors = {};
  const formErrors = [];
  for (const sub of error51.issues) {
    if (sub.path.length > 0) {
      fieldErrors[sub.path[0]] = fieldErrors[sub.path[0]] || [];
      fieldErrors[sub.path[0]].push(mapper(sub));
    } else {
      formErrors.push(mapper(sub));
    }
  }
  return { formErrors, fieldErrors };
}
function formatError(error51, mapper = (issue2) => issue2.message) {
  const fieldErrors = { _errors: [] };
  const processError = (error52, path = []) => {
    for (const issue2 of error52.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          fieldErrors._errors.push(mapper(issue2));
        } else {
          let curr = fieldErrors;
          let i = 0;
          while (i < fullpath.length) {
            const el = fullpath[i];
            const terminal = i === fullpath.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue2));
            }
            curr = curr[el];
            i++;
          }
        }
      }
    }
  };
  processError(error51);
  return fieldErrors;
}
function treeifyError(error51, mapper = (issue2) => issue2.message) {
  const result = { errors: [] };
  const processError = (error52, path = []) => {
    var _a4, _b2;
    for (const issue2 of error52.issues) {
      if (issue2.code === "invalid_union" && issue2.errors.length) {
        issue2.errors.map((issues) => processError({ issues }, [...path, ...issue2.path]));
      } else if (issue2.code === "invalid_key") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else if (issue2.code === "invalid_element") {
        processError({ issues: issue2.issues }, [...path, ...issue2.path]);
      } else {
        const fullpath = [...path, ...issue2.path];
        if (fullpath.length === 0) {
          result.errors.push(mapper(issue2));
          continue;
        }
        let curr = result;
        let i = 0;
        while (i < fullpath.length) {
          const el = fullpath[i];
          const terminal = i === fullpath.length - 1;
          if (typeof el === "string") {
            curr.properties ?? (curr.properties = {});
            (_a4 = curr.properties)[el] ?? (_a4[el] = { errors: [] });
            curr = curr.properties[el];
          } else {
            curr.items ?? (curr.items = []);
            (_b2 = curr.items)[el] ?? (_b2[el] = { errors: [] });
            curr = curr.items[el];
          }
          if (terminal) {
            curr.errors.push(mapper(issue2));
          }
          i++;
        }
      }
    }
  };
  processError(error51);
  return result;
}
function toDotPath(_path) {
  const segs = [];
  const path = _path.map((seg) => typeof seg === "object" ? seg.key : seg);
  for (const seg of path) {
    if (typeof seg === "number")
      segs.push(`[${seg}]`);
    else if (typeof seg === "symbol")
      segs.push(`[${JSON.stringify(String(seg))}]`);
    else if (/[^\w$]/.test(seg))
      segs.push(`[${JSON.stringify(seg)}]`);
    else {
      if (segs.length)
        segs.push(".");
      segs.push(seg);
    }
  }
  return segs.join("");
}
function prettifyError(error51) {
  const lines = [];
  const issues = [...error51.issues].sort((a, b) => (a.path ?? []).length - (b.path ?? []).length);
  for (const issue2 of issues) {
    lines.push(`\u2716 ${issue2.message}`);
    if (issue2.path?.length)
      lines.push(`  \u2192 at ${toDotPath(issue2.path)}`);
  }
  return lines.join("\n");
}
var initializer, $ZodError, $ZodRealError;
var init_errors = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/errors.js"() {
    init_core();
    init_util();
    initializer = (inst, def) => {
      inst.name = "$ZodError";
      Object.defineProperty(inst, "_zod", {
        value: inst._zod,
        enumerable: false
      });
      Object.defineProperty(inst, "issues", {
        value: def,
        enumerable: false
      });
      inst.message = JSON.stringify(def, jsonStringifyReplacer, 2);
      Object.defineProperty(inst, "toString", {
        value: () => inst.message,
        enumerable: false
      });
    };
    $ZodError = $constructor("$ZodError", initializer);
    $ZodRealError = $constructor("$ZodError", initializer, { Parent: Error });
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/parse.js
var _parse, parse, _parseAsync, parseAsync, _safeParse, safeParse, _safeParseAsync, safeParseAsync, _encode, encode, _decode, decode, _encodeAsync, encodeAsync, _decodeAsync, decodeAsync, _safeEncode, safeEncode, _safeDecode, safeDecode, _safeEncodeAsync, safeEncodeAsync, _safeDecodeAsync, safeDecodeAsync;
var init_parse = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/parse.js"() {
    init_core();
    init_errors();
    init_util();
    _parse = (_Err) => (schema, value, _ctx, _params) => {
      const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
      const result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise) {
        throw new $ZodAsyncError();
      }
      if (result.issues.length) {
        const e = new (_params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
        captureStackTrace(e, _params?.callee);
        throw e;
      }
      return result.value;
    };
    parse = /* @__PURE__ */ _parse($ZodRealError);
    _parseAsync = (_Err) => async (schema, value, _ctx, params) => {
      const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
      let result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise)
        result = await result;
      if (result.issues.length) {
        const e = new (params?.Err ?? _Err)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())));
        captureStackTrace(e, params?.callee);
        throw e;
      }
      return result.value;
    };
    parseAsync = /* @__PURE__ */ _parseAsync($ZodRealError);
    _safeParse = (_Err) => (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, async: false } : { async: false };
      const result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise) {
        throw new $ZodAsyncError();
      }
      return result.issues.length ? {
        success: false,
        error: new (_Err ?? $ZodError)(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
      } : { success: true, data: result.value };
    };
    safeParse = /* @__PURE__ */ _safeParse($ZodRealError);
    _safeParseAsync = (_Err) => async (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, async: true } : { async: true };
      let result = schema._zod.run({ value, issues: [] }, ctx);
      if (result instanceof Promise)
        result = await result;
      return result.issues.length ? {
        success: false,
        error: new _Err(result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
      } : { success: true, data: result.value };
    };
    safeParseAsync = /* @__PURE__ */ _safeParseAsync($ZodRealError);
    _encode = (_Err) => (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
      return _parse(_Err)(schema, value, ctx);
    };
    encode = /* @__PURE__ */ _encode($ZodRealError);
    _decode = (_Err) => (schema, value, _ctx) => {
      return _parse(_Err)(schema, value, _ctx);
    };
    decode = /* @__PURE__ */ _decode($ZodRealError);
    _encodeAsync = (_Err) => async (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
      return _parseAsync(_Err)(schema, value, ctx);
    };
    encodeAsync = /* @__PURE__ */ _encodeAsync($ZodRealError);
    _decodeAsync = (_Err) => async (schema, value, _ctx) => {
      return _parseAsync(_Err)(schema, value, _ctx);
    };
    decodeAsync = /* @__PURE__ */ _decodeAsync($ZodRealError);
    _safeEncode = (_Err) => (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
      return _safeParse(_Err)(schema, value, ctx);
    };
    safeEncode = /* @__PURE__ */ _safeEncode($ZodRealError);
    _safeDecode = (_Err) => (schema, value, _ctx) => {
      return _safeParse(_Err)(schema, value, _ctx);
    };
    safeDecode = /* @__PURE__ */ _safeDecode($ZodRealError);
    _safeEncodeAsync = (_Err) => async (schema, value, _ctx) => {
      const ctx = _ctx ? { ..._ctx, direction: "backward" } : { direction: "backward" };
      return _safeParseAsync(_Err)(schema, value, ctx);
    };
    safeEncodeAsync = /* @__PURE__ */ _safeEncodeAsync($ZodRealError);
    _safeDecodeAsync = (_Err) => async (schema, value, _ctx) => {
      return _safeParseAsync(_Err)(schema, value, _ctx);
    };
    safeDecodeAsync = /* @__PURE__ */ _safeDecodeAsync($ZodRealError);
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/regexes.js
var regexes_exports = {};
__export(regexes_exports, {
  base64: () => base64,
  base64url: () => base64url,
  bigint: () => bigint,
  boolean: () => boolean,
  browserEmail: () => browserEmail,
  cidrv4: () => cidrv4,
  cidrv6: () => cidrv6,
  cuid: () => cuid,
  cuid2: () => cuid2,
  date: () => date,
  datetime: () => datetime,
  domain: () => domain,
  duration: () => duration,
  e164: () => e164,
  email: () => email,
  emoji: () => emoji,
  extendedDuration: () => extendedDuration,
  guid: () => guid,
  hex: () => hex,
  hostname: () => hostname,
  html5Email: () => html5Email,
  httpProtocol: () => httpProtocol,
  idnEmail: () => idnEmail,
  integer: () => integer,
  ipv4: () => ipv4,
  ipv6: () => ipv6,
  ksuid: () => ksuid,
  lowercase: () => lowercase,
  mac: () => mac,
  md5_base64: () => md5_base64,
  md5_base64url: () => md5_base64url,
  md5_hex: () => md5_hex,
  nanoid: () => nanoid,
  null: () => _null,
  number: () => number,
  rfc5322Email: () => rfc5322Email,
  sha1_base64: () => sha1_base64,
  sha1_base64url: () => sha1_base64url,
  sha1_hex: () => sha1_hex,
  sha256_base64: () => sha256_base64,
  sha256_base64url: () => sha256_base64url,
  sha256_hex: () => sha256_hex,
  sha384_base64: () => sha384_base64,
  sha384_base64url: () => sha384_base64url,
  sha384_hex: () => sha384_hex,
  sha512_base64: () => sha512_base64,
  sha512_base64url: () => sha512_base64url,
  sha512_hex: () => sha512_hex,
  string: () => string,
  time: () => time,
  ulid: () => ulid,
  undefined: () => _undefined,
  unicodeEmail: () => unicodeEmail,
  uppercase: () => uppercase,
  uuid: () => uuid,
  uuid4: () => uuid4,
  uuid6: () => uuid6,
  uuid7: () => uuid7,
  xid: () => xid
});
function emoji() {
  return new RegExp(_emoji, "u");
}
function timeSource(args) {
  const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
  const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
  return regex;
}
function time(args) {
  return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
  const time3 = timeSource({ precision: args.precision });
  const opts = ["Z"];
  if (args.local)
    opts.push("");
  if (args.offset)
    opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
  const timeRegex2 = `${time3}(?:${opts.join("|")})`;
  return new RegExp(`^${dateSource}T(?:${timeRegex2})$`);
}
function fixedBase64(bodyLength, padding) {
  return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
function fixedBase64url(length) {
  return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
var cuid, cuid2, ulid, xid, ksuid, nanoid, duration, extendedDuration, guid, uuid, uuid4, uuid6, uuid7, email, html5Email, rfc5322Email, unicodeEmail, idnEmail, browserEmail, _emoji, ipv4, ipv6, mac, cidrv4, cidrv6, base64, base64url, hostname, domain, httpProtocol, e164, dateSource, date, string, bigint, integer, number, boolean, _null, _undefined, lowercase, uppercase, hex, md5_hex, md5_base64, md5_base64url, sha1_hex, sha1_base64, sha1_base64url, sha256_hex, sha256_base64, sha256_base64url, sha384_hex, sha384_base64, sha384_base64url, sha512_hex, sha512_base64, sha512_base64url;
var init_regexes = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/regexes.js"() {
    init_util();
    cuid = /^[cC][0-9a-z]{6,}$/;
    cuid2 = /^[0-9a-z]+$/;
    ulid = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/;
    xid = /^[0-9a-vA-V]{20}$/;
    ksuid = /^[A-Za-z0-9]{27}$/;
    nanoid = /^[a-zA-Z0-9_-]{21}$/;
    duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
    extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
    uuid = (version2) => {
      if (!version2)
        return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
      return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version2}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
    };
    uuid4 = /* @__PURE__ */ uuid(4);
    uuid6 = /* @__PURE__ */ uuid(6);
    uuid7 = /* @__PURE__ */ uuid(7);
    email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
    html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
    idnEmail = unicodeEmail;
    browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    _emoji = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
    mac = (delimiter) => {
      const escapedDelim = escapeRegex(delimiter ?? ":");
      return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
    };
    cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
    cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
    base64url = /^[A-Za-z0-9_-]*$/;
    hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
    domain = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/;
    httpProtocol = /^https?$/;
    e164 = /^\+[1-9]\d{6,14}$/;
    dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
    date = /* @__PURE__ */ new RegExp(`^${dateSource}$`);
    string = (params) => {
      const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
      return new RegExp(`^${regex}$`);
    };
    bigint = /^-?\d+n?$/;
    integer = /^-?\d+$/;
    number = /^-?\d+(?:\.\d+)?$/;
    boolean = /^(?:true|false)$/i;
    _null = /^null$/i;
    _undefined = /^undefined$/i;
    lowercase = /^[^A-Z]*$/;
    uppercase = /^[^a-z]*$/;
    hex = /^[0-9a-fA-F]*$/;
    md5_hex = /^[0-9a-fA-F]{32}$/;
    md5_base64 = /* @__PURE__ */ fixedBase64(22, "==");
    md5_base64url = /* @__PURE__ */ fixedBase64url(22);
    sha1_hex = /^[0-9a-fA-F]{40}$/;
    sha1_base64 = /* @__PURE__ */ fixedBase64(27, "=");
    sha1_base64url = /* @__PURE__ */ fixedBase64url(27);
    sha256_hex = /^[0-9a-fA-F]{64}$/;
    sha256_base64 = /* @__PURE__ */ fixedBase64(43, "=");
    sha256_base64url = /* @__PURE__ */ fixedBase64url(43);
    sha384_hex = /^[0-9a-fA-F]{96}$/;
    sha384_base64 = /* @__PURE__ */ fixedBase64(64, "");
    sha384_base64url = /* @__PURE__ */ fixedBase64url(64);
    sha512_hex = /^[0-9a-fA-F]{128}$/;
    sha512_base64 = /* @__PURE__ */ fixedBase64(86, "==");
    sha512_base64url = /* @__PURE__ */ fixedBase64url(86);
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/checks.js
function handleCheckPropertyResult(result, payload, property) {
  if (result.issues.length) {
    payload.issues.push(...prefixIssues(property, result.issues));
  }
}
var $ZodCheck, numericOriginMap, $ZodCheckLessThan, $ZodCheckGreaterThan, $ZodCheckMultipleOf, $ZodCheckNumberFormat, $ZodCheckBigIntFormat, $ZodCheckMaxSize, $ZodCheckMinSize, $ZodCheckSizeEquals, $ZodCheckMaxLength, $ZodCheckMinLength, $ZodCheckLengthEquals, $ZodCheckStringFormat, $ZodCheckRegex, $ZodCheckLowerCase, $ZodCheckUpperCase, $ZodCheckIncludes, $ZodCheckStartsWith, $ZodCheckEndsWith, $ZodCheckProperty, $ZodCheckMimeType, $ZodCheckOverwrite;
var init_checks = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/checks.js"() {
    init_core();
    init_regexes();
    init_util();
    $ZodCheck = /* @__PURE__ */ $constructor("$ZodCheck", (inst, def) => {
      var _a4;
      inst._zod ?? (inst._zod = {});
      inst._zod.def = def;
      (_a4 = inst._zod).onattach ?? (_a4.onattach = []);
    });
    numericOriginMap = {
      number: "number",
      bigint: "bigint",
      object: "date"
    };
    $ZodCheckLessThan = /* @__PURE__ */ $constructor("$ZodCheckLessThan", (inst, def) => {
      $ZodCheck.init(inst, def);
      const origin = numericOriginMap[typeof def.value];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        const curr = (def.inclusive ? bag.maximum : bag.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
        if (def.value < curr) {
          if (def.inclusive)
            bag.maximum = def.value;
          else
            bag.exclusiveMaximum = def.value;
        }
      });
      inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value <= def.value : payload.value < def.value) {
          return;
        }
        payload.issues.push({
          origin,
          code: "too_big",
          maximum: typeof def.value === "object" ? def.value.getTime() : def.value,
          input: payload.value,
          inclusive: def.inclusive,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckGreaterThan = /* @__PURE__ */ $constructor("$ZodCheckGreaterThan", (inst, def) => {
      $ZodCheck.init(inst, def);
      const origin = numericOriginMap[typeof def.value];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        const curr = (def.inclusive ? bag.minimum : bag.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
        if (def.value > curr) {
          if (def.inclusive)
            bag.minimum = def.value;
          else
            bag.exclusiveMinimum = def.value;
        }
      });
      inst._zod.check = (payload) => {
        if (def.inclusive ? payload.value >= def.value : payload.value > def.value) {
          return;
        }
        payload.issues.push({
          origin,
          code: "too_small",
          minimum: typeof def.value === "object" ? def.value.getTime() : def.value,
          input: payload.value,
          inclusive: def.inclusive,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckMultipleOf = /* @__PURE__ */ $constructor("$ZodCheckMultipleOf", (inst, def) => {
      $ZodCheck.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        var _a4;
        (_a4 = inst2._zod.bag).multipleOf ?? (_a4.multipleOf = def.value);
      });
      inst._zod.check = (payload) => {
        if (typeof payload.value !== typeof def.value)
          throw new Error("Cannot mix number and bigint in multiple_of check.");
        const isMultiple = typeof payload.value === "bigint" ? payload.value % def.value === BigInt(0) : floatSafeRemainder(payload.value, def.value) === 0;
        if (isMultiple)
          return;
        payload.issues.push({
          origin: typeof payload.value,
          code: "not_multiple_of",
          divisor: def.value,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckNumberFormat = /* @__PURE__ */ $constructor("$ZodCheckNumberFormat", (inst, def) => {
      $ZodCheck.init(inst, def);
      def.format = def.format || "float64";
      const isInt = def.format?.includes("int");
      const origin = isInt ? "int" : "number";
      const [minimum, maximum] = NUMBER_FORMAT_RANGES[def.format];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
        if (isInt)
          bag.pattern = integer;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        if (isInt) {
          if (!Number.isInteger(input)) {
            payload.issues.push({
              expected: origin,
              format: def.format,
              code: "invalid_type",
              continue: false,
              input,
              inst
            });
            return;
          }
          if (!Number.isSafeInteger(input)) {
            if (input > 0) {
              payload.issues.push({
                input,
                code: "too_big",
                maximum: Number.MAX_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst,
                origin,
                inclusive: true,
                continue: !def.abort
              });
            } else {
              payload.issues.push({
                input,
                code: "too_small",
                minimum: Number.MIN_SAFE_INTEGER,
                note: "Integers must be within the safe integer range.",
                inst,
                origin,
                inclusive: true,
                continue: !def.abort
              });
            }
            return;
          }
        }
        if (input < minimum) {
          payload.issues.push({
            origin: "number",
            input,
            code: "too_small",
            minimum,
            inclusive: true,
            inst,
            continue: !def.abort
          });
        }
        if (input > maximum) {
          payload.issues.push({
            origin: "number",
            input,
            code: "too_big",
            maximum,
            inclusive: true,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    $ZodCheckBigIntFormat = /* @__PURE__ */ $constructor("$ZodCheckBigIntFormat", (inst, def) => {
      $ZodCheck.init(inst, def);
      const [minimum, maximum] = BIGINT_FORMAT_RANGES[def.format];
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = def.format;
        bag.minimum = minimum;
        bag.maximum = maximum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        if (input < minimum) {
          payload.issues.push({
            origin: "bigint",
            input,
            code: "too_small",
            minimum,
            inclusive: true,
            inst,
            continue: !def.abort
          });
        }
        if (input > maximum) {
          payload.issues.push({
            origin: "bigint",
            input,
            code: "too_big",
            maximum,
            inclusive: true,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    $ZodCheckMaxSize = /* @__PURE__ */ $constructor("$ZodCheckMaxSize", (inst, def) => {
      var _a4;
      $ZodCheck.init(inst, def);
      (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
        const val = payload.value;
        return !nullish(val) && val.size !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (def.maximum < curr)
          inst2._zod.bag.maximum = def.maximum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size <= def.maximum)
          return;
        payload.issues.push({
          origin: getSizableOrigin(input),
          code: "too_big",
          maximum: def.maximum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckMinSize = /* @__PURE__ */ $constructor("$ZodCheckMinSize", (inst, def) => {
      var _a4;
      $ZodCheck.init(inst, def);
      (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
        const val = payload.value;
        return !nullish(val) && val.size !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (def.minimum > curr)
          inst2._zod.bag.minimum = def.minimum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size >= def.minimum)
          return;
        payload.issues.push({
          origin: getSizableOrigin(input),
          code: "too_small",
          minimum: def.minimum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckSizeEquals = /* @__PURE__ */ $constructor("$ZodCheckSizeEquals", (inst, def) => {
      var _a4;
      $ZodCheck.init(inst, def);
      (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
        const val = payload.value;
        return !nullish(val) && val.size !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.minimum = def.size;
        bag.maximum = def.size;
        bag.size = def.size;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const size = input.size;
        if (size === def.size)
          return;
        const tooBig = size > def.size;
        payload.issues.push({
          origin: getSizableOrigin(input),
          ...tooBig ? { code: "too_big", maximum: def.size } : { code: "too_small", minimum: def.size },
          inclusive: true,
          exact: true,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckMaxLength = /* @__PURE__ */ $constructor("$ZodCheckMaxLength", (inst, def) => {
      var _a4;
      $ZodCheck.init(inst, def);
      (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
        if (def.maximum < curr)
          inst2._zod.bag.maximum = def.maximum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length <= def.maximum)
          return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
          origin,
          code: "too_big",
          maximum: def.maximum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckMinLength = /* @__PURE__ */ $constructor("$ZodCheckMinLength", (inst, def) => {
      var _a4;
      $ZodCheck.init(inst, def);
      (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const curr = inst2._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
        if (def.minimum > curr)
          inst2._zod.bag.minimum = def.minimum;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length >= def.minimum)
          return;
        const origin = getLengthableOrigin(input);
        payload.issues.push({
          origin,
          code: "too_small",
          minimum: def.minimum,
          inclusive: true,
          input,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckLengthEquals = /* @__PURE__ */ $constructor("$ZodCheckLengthEquals", (inst, def) => {
      var _a4;
      $ZodCheck.init(inst, def);
      (_a4 = inst._zod.def).when ?? (_a4.when = (payload) => {
        const val = payload.value;
        return !nullish(val) && val.length !== void 0;
      });
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.minimum = def.length;
        bag.maximum = def.length;
        bag.length = def.length;
      });
      inst._zod.check = (payload) => {
        const input = payload.value;
        const length = input.length;
        if (length === def.length)
          return;
        const origin = getLengthableOrigin(input);
        const tooBig = length > def.length;
        payload.issues.push({
          origin,
          ...tooBig ? { code: "too_big", maximum: def.length } : { code: "too_small", minimum: def.length },
          inclusive: true,
          exact: true,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckStringFormat = /* @__PURE__ */ $constructor("$ZodCheckStringFormat", (inst, def) => {
      var _a4, _b2;
      $ZodCheck.init(inst, def);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.format = def.format;
        if (def.pattern) {
          bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
          bag.patterns.add(def.pattern);
        }
      });
      if (def.pattern)
        (_a4 = inst._zod).check ?? (_a4.check = (payload) => {
          def.pattern.lastIndex = 0;
          if (def.pattern.test(payload.value))
            return;
          payload.issues.push({
            origin: "string",
            code: "invalid_format",
            format: def.format,
            input: payload.value,
            ...def.pattern ? { pattern: def.pattern.toString() } : {},
            inst,
            continue: !def.abort
          });
        });
      else
        (_b2 = inst._zod).check ?? (_b2.check = () => {
        });
    });
    $ZodCheckRegex = /* @__PURE__ */ $constructor("$ZodCheckRegex", (inst, def) => {
      $ZodCheckStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        def.pattern.lastIndex = 0;
        if (def.pattern.test(payload.value))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "regex",
          input: payload.value,
          pattern: def.pattern.toString(),
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckLowerCase = /* @__PURE__ */ $constructor("$ZodCheckLowerCase", (inst, def) => {
      def.pattern ?? (def.pattern = lowercase);
      $ZodCheckStringFormat.init(inst, def);
    });
    $ZodCheckUpperCase = /* @__PURE__ */ $constructor("$ZodCheckUpperCase", (inst, def) => {
      def.pattern ?? (def.pattern = uppercase);
      $ZodCheckStringFormat.init(inst, def);
    });
    $ZodCheckIncludes = /* @__PURE__ */ $constructor("$ZodCheckIncludes", (inst, def) => {
      $ZodCheck.init(inst, def);
      const escapedRegex = escapeRegex(def.includes);
      const pattern = new RegExp(typeof def.position === "number" ? `^.{${def.position}}${escapedRegex}` : escapedRegex);
      def.pattern = pattern;
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(pattern);
      });
      inst._zod.check = (payload) => {
        if (payload.value.includes(def.includes, def.position))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "includes",
          includes: def.includes,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckStartsWith = /* @__PURE__ */ $constructor("$ZodCheckStartsWith", (inst, def) => {
      $ZodCheck.init(inst, def);
      const pattern = new RegExp(`^${escapeRegex(def.prefix)}.*`);
      def.pattern ?? (def.pattern = pattern);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(pattern);
      });
      inst._zod.check = (payload) => {
        if (payload.value.startsWith(def.prefix))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "starts_with",
          prefix: def.prefix,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckEndsWith = /* @__PURE__ */ $constructor("$ZodCheckEndsWith", (inst, def) => {
      $ZodCheck.init(inst, def);
      const pattern = new RegExp(`.*${escapeRegex(def.suffix)}$`);
      def.pattern ?? (def.pattern = pattern);
      inst._zod.onattach.push((inst2) => {
        const bag = inst2._zod.bag;
        bag.patterns ?? (bag.patterns = /* @__PURE__ */ new Set());
        bag.patterns.add(pattern);
      });
      inst._zod.check = (payload) => {
        if (payload.value.endsWith(def.suffix))
          return;
        payload.issues.push({
          origin: "string",
          code: "invalid_format",
          format: "ends_with",
          suffix: def.suffix,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckProperty = /* @__PURE__ */ $constructor("$ZodCheckProperty", (inst, def) => {
      $ZodCheck.init(inst, def);
      inst._zod.check = (payload) => {
        const result = def.schema._zod.run({
          value: payload.value[def.property],
          issues: []
        }, {});
        if (result instanceof Promise) {
          return result.then((result2) => handleCheckPropertyResult(result2, payload, def.property));
        }
        handleCheckPropertyResult(result, payload, def.property);
        return;
      };
    });
    $ZodCheckMimeType = /* @__PURE__ */ $constructor("$ZodCheckMimeType", (inst, def) => {
      $ZodCheck.init(inst, def);
      const mimeSet = new Set(def.mime);
      inst._zod.onattach.push((inst2) => {
        inst2._zod.bag.mime = def.mime;
      });
      inst._zod.check = (payload) => {
        if (mimeSet.has(payload.value.type))
          return;
        payload.issues.push({
          code: "invalid_value",
          values: def.mime,
          input: payload.value.type,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCheckOverwrite = /* @__PURE__ */ $constructor("$ZodCheckOverwrite", (inst, def) => {
      $ZodCheck.init(inst, def);
      inst._zod.check = (payload) => {
        payload.value = def.tx(payload.value);
      };
    });
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/doc.js
var Doc;
var init_doc = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/doc.js"() {
    Doc = class {
      constructor(args = []) {
        this.content = [];
        this.indent = 0;
        if (this)
          this.args = args;
      }
      indented(fn) {
        this.indent += 1;
        fn(this);
        this.indent -= 1;
      }
      write(arg) {
        if (typeof arg === "function") {
          arg(this, { execution: "sync" });
          arg(this, { execution: "async" });
          return;
        }
        const content = arg;
        const lines = content.split("\n").filter((x) => x);
        const minIndent = Math.min(...lines.map((x) => x.length - x.trimStart().length));
        const dedented = lines.map((x) => x.slice(minIndent)).map((x) => " ".repeat(this.indent * 2) + x);
        for (const line of dedented) {
          this.content.push(line);
        }
      }
      compile() {
        const F = Function;
        const args = this?.args;
        const content = this?.content ?? [``];
        const lines = [...content.map((x) => `  ${x}`)];
        return new F(...args, lines.join("\n"));
      }
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/versions.js
var version;
var init_versions = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/versions.js"() {
    version = {
      major: 4,
      minor: 4,
      patch: 3
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/schemas.js
function isValidBase64(data) {
  if (data === "")
    return true;
  if (/\s/.test(data))
    return false;
  if (data.length % 4 !== 0)
    return false;
  try {
    atob(data);
    return true;
  } catch {
    return false;
  }
}
function isValidBase64URL(data) {
  if (!base64url.test(data))
    return false;
  const base643 = data.replace(/[-_]/g, (c) => c === "-" ? "+" : "/");
  const padded = base643.padEnd(Math.ceil(base643.length / 4) * 4, "=");
  return isValidBase64(padded);
}
function isValidJWT(token, algorithm = null) {
  try {
    const tokensParts = token.split(".");
    if (tokensParts.length !== 3)
      return false;
    const [header] = tokensParts;
    if (!header)
      return false;
    const parsedHeader = JSON.parse(atob(header));
    if ("typ" in parsedHeader && parsedHeader?.typ !== "JWT")
      return false;
    if (!parsedHeader.alg)
      return false;
    if (algorithm && (!("alg" in parsedHeader) || parsedHeader.alg !== algorithm))
      return false;
    return true;
  } catch {
    return false;
  }
}
function handleArrayResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
function handlePropertyResult(result, final, key, input, isOptionalIn, isOptionalOut) {
  const isPresent = key in input;
  if (result.issues.length) {
    if (isOptionalIn && isOptionalOut && !isPresent) {
      return;
    }
    final.issues.push(...prefixIssues(key, result.issues));
  }
  if (!isPresent && !isOptionalIn) {
    if (!result.issues.length) {
      final.issues.push({
        code: "invalid_type",
        expected: "nonoptional",
        input: void 0,
        path: [key]
      });
    }
    return;
  }
  if (result.value === void 0) {
    if (isPresent) {
      final.value[key] = void 0;
    }
  } else {
    final.value[key] = result.value;
  }
}
function normalizeDef(def) {
  const keys = Object.keys(def.shape);
  for (const k of keys) {
    if (!def.shape?.[k]?._zod?.traits?.has("$ZodType")) {
      throw new Error(`Invalid element at key "${k}": expected a Zod schema`);
    }
  }
  const okeys = optionalKeys(def.shape);
  return {
    ...def,
    keys,
    keySet: new Set(keys),
    numKeys: keys.length,
    optionalKeys: new Set(okeys)
  };
}
function handleCatchall(proms, input, payload, ctx, def, inst) {
  const unrecognized = [];
  const keySet = def.keySet;
  const _catchall = def.catchall._zod;
  const t = _catchall.def.type;
  const isOptionalIn = _catchall.optin === "optional";
  const isOptionalOut = _catchall.optout === "optional";
  for (const key in input) {
    if (key === "__proto__")
      continue;
    if (keySet.has(key))
      continue;
    if (t === "never") {
      unrecognized.push(key);
      continue;
    }
    const r = _catchall.run({ value: input[key], issues: [] }, ctx);
    if (r instanceof Promise) {
      proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut)));
    } else {
      handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
    }
  }
  if (unrecognized.length) {
    payload.issues.push({
      code: "unrecognized_keys",
      keys: unrecognized,
      input,
      inst
    });
  }
  if (!proms.length)
    return payload;
  return Promise.all(proms).then(() => {
    return payload;
  });
}
function handleUnionResults(results, final, inst, ctx) {
  for (const result of results) {
    if (result.issues.length === 0) {
      final.value = result.value;
      return final;
    }
  }
  const nonaborted = results.filter((r) => !aborted(r));
  if (nonaborted.length === 1) {
    final.value = nonaborted[0].value;
    return nonaborted[0];
  }
  final.issues.push({
    code: "invalid_union",
    input: final.value,
    inst,
    errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
  });
  return final;
}
function handleExclusiveUnionResults(results, final, inst, ctx) {
  const successes = results.filter((r) => r.issues.length === 0);
  if (successes.length === 1) {
    final.value = successes[0].value;
    return final;
  }
  if (successes.length === 0) {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: results.map((result) => result.issues.map((iss) => finalizeIssue(iss, ctx, config())))
    });
  } else {
    final.issues.push({
      code: "invalid_union",
      input: final.value,
      inst,
      errors: [],
      inclusive: false
    });
  }
  return final;
}
function mergeValues(a, b) {
  if (a === b) {
    return { valid: true, data: a };
  }
  if (a instanceof Date && b instanceof Date && +a === +b) {
    return { valid: true, data: a };
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const bKeys = Object.keys(b);
    const sharedKeys = Object.keys(a).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a, ...b };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a[key], b[key]);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [key, ...sharedValue.mergeErrorPath]
        };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  }
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return { valid: false, mergeErrorPath: [] };
    }
    const newArray = [];
    for (let index = 0; index < a.length; index++) {
      const itemA = a[index];
      const itemB = b[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return {
          valid: false,
          mergeErrorPath: [index, ...sharedValue.mergeErrorPath]
        };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  }
  return { valid: false, mergeErrorPath: [] };
}
function handleIntersectionResults(result, left, right) {
  const unrecKeys = /* @__PURE__ */ new Map();
  let unrecIssue;
  for (const iss of left.issues) {
    if (iss.code === "unrecognized_keys") {
      unrecIssue ?? (unrecIssue = iss);
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).l = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  for (const iss of right.issues) {
    if (iss.code === "unrecognized_keys") {
      for (const k of iss.keys) {
        if (!unrecKeys.has(k))
          unrecKeys.set(k, {});
        unrecKeys.get(k).r = true;
      }
    } else {
      result.issues.push(iss);
    }
  }
  const bothKeys = [...unrecKeys].filter(([, f]) => f.l && f.r).map(([k]) => k);
  if (bothKeys.length && unrecIssue) {
    result.issues.push({ ...unrecIssue, keys: bothKeys });
  }
  if (aborted(result))
    return result;
  const merged = mergeValues(left.value, right.value);
  if (!merged.valid) {
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(merged.mergeErrorPath)}`);
  }
  result.value = merged.data;
  return result;
}
function getTupleOptStart(items, key) {
  for (let i = items.length - 1; i >= 0; i--) {
    if (items[i]._zod[key] !== "optional")
      return i + 1;
  }
  return 0;
}
function handleTupleResult(result, final, index) {
  if (result.issues.length) {
    final.issues.push(...prefixIssues(index, result.issues));
  }
  final.value[index] = result.value;
}
function handleTupleResults(itemResults, final, items, input, optoutStart) {
  for (let i = 0; i < items.length; i++) {
    const r = itemResults[i];
    const isPresent = i < input.length;
    if (r.issues.length) {
      if (!isPresent && i >= optoutStart) {
        final.value.length = i;
        break;
      }
      final.issues.push(...prefixIssues(i, r.issues));
    }
    final.value[i] = r.value;
  }
  for (let i = final.value.length - 1; i >= input.length; i--) {
    if (items[i]._zod.optout === "optional" && final.value[i] === void 0) {
      final.value.length = i;
    } else {
      break;
    }
  }
  return final;
}
function handleMapResult(keyResult, valueResult, final, key, input, inst, ctx) {
  if (keyResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, keyResult.issues));
    } else {
      final.issues.push({
        code: "invalid_key",
        origin: "map",
        input,
        inst,
        issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  if (valueResult.issues.length) {
    if (propertyKeyTypes.has(typeof key)) {
      final.issues.push(...prefixIssues(key, valueResult.issues));
    } else {
      final.issues.push({
        origin: "map",
        code: "invalid_element",
        input,
        inst,
        key,
        issues: valueResult.issues.map((iss) => finalizeIssue(iss, ctx, config()))
      });
    }
  }
  final.value.set(keyResult.value, valueResult.value);
}
function handleSetResult(result, final) {
  if (result.issues.length) {
    final.issues.push(...result.issues);
  }
  final.value.add(result.value);
}
function handleOptionalResult(result, input) {
  if (input === void 0 && (result.issues.length || result.fallback)) {
    return { issues: [], value: void 0 };
  }
  return result;
}
function handleDefaultResult(payload, def) {
  if (payload.value === void 0) {
    payload.value = def.defaultValue;
  }
  return payload;
}
function handleNonOptionalResult(payload, inst) {
  if (!payload.issues.length && payload.value === void 0) {
    payload.issues.push({
      code: "invalid_type",
      expected: "nonoptional",
      input: payload.value,
      inst
    });
  }
  return payload;
}
function handlePipeResult(left, next, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return next._zod.run({ value: left.value, issues: left.issues, fallback: left.fallback }, ctx);
}
function handleCodecAResult(result, def, ctx) {
  if (result.issues.length) {
    result.aborted = true;
    return result;
  }
  const direction = ctx.direction || "forward";
  if (direction === "forward") {
    const transformed = def.transform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.out, ctx));
    }
    return handleCodecTxResult(result, transformed, def.out, ctx);
  } else {
    const transformed = def.reverseTransform(result.value, result);
    if (transformed instanceof Promise) {
      return transformed.then((value) => handleCodecTxResult(result, value, def.in, ctx));
    }
    return handleCodecTxResult(result, transformed, def.in, ctx);
  }
}
function handleCodecTxResult(left, value, nextSchema, ctx) {
  if (left.issues.length) {
    left.aborted = true;
    return left;
  }
  return nextSchema._zod.run({ value, issues: left.issues }, ctx);
}
function handleReadonlyResult(payload) {
  payload.value = Object.freeze(payload.value);
  return payload;
}
function handleRefineResult(result, payload, input, inst) {
  if (!result) {
    const _iss = {
      code: "custom",
      input,
      inst,
      // incorporates params.error into issue reporting
      path: [...inst._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !inst._zod.def.abort
      // params: inst._zod.def.params,
    };
    if (inst._zod.def.params)
      _iss.params = inst._zod.def.params;
    payload.issues.push(issue(_iss));
  }
}
var $ZodType, $ZodString, $ZodStringFormat, $ZodGUID, $ZodUUID, $ZodEmail, $ZodURL, $ZodEmoji, $ZodNanoID, $ZodCUID, $ZodCUID2, $ZodULID, $ZodXID, $ZodKSUID, $ZodISODateTime, $ZodISODate, $ZodISOTime, $ZodISODuration, $ZodIPv4, $ZodIPv6, $ZodMAC, $ZodCIDRv4, $ZodCIDRv6, $ZodBase64, $ZodBase64URL, $ZodE164, $ZodJWT, $ZodCustomStringFormat, $ZodNumber, $ZodNumberFormat, $ZodBoolean, $ZodBigInt, $ZodBigIntFormat, $ZodSymbol, $ZodUndefined, $ZodNull, $ZodAny, $ZodUnknown, $ZodNever, $ZodVoid, $ZodDate, $ZodArray, $ZodObject, $ZodObjectJIT, $ZodUnion, $ZodXor, $ZodDiscriminatedUnion, $ZodIntersection, $ZodTuple, $ZodRecord, $ZodMap, $ZodSet, $ZodEnum, $ZodLiteral, $ZodFile, $ZodTransform, $ZodOptional, $ZodExactOptional, $ZodNullable, $ZodDefault, $ZodPrefault, $ZodNonOptional, $ZodSuccess, $ZodCatch, $ZodNaN, $ZodPipe, $ZodCodec, $ZodPreprocess, $ZodReadonly, $ZodTemplateLiteral, $ZodFunction, $ZodPromise, $ZodLazy, $ZodCustom;
var init_schemas = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/core/schemas.js"() {
    init_checks();
    init_core();
    init_doc();
    init_parse();
    init_regexes();
    init_util();
    init_versions();
    init_util();
    $ZodType = /* @__PURE__ */ $constructor("$ZodType", (inst, def) => {
      var _a4;
      inst ?? (inst = {});
      inst._zod.def = def;
      inst._zod.bag = inst._zod.bag || {};
      inst._zod.version = version;
      const checks = [...inst._zod.def.checks ?? []];
      if (inst._zod.traits.has("$ZodCheck")) {
        checks.unshift(inst);
      }
      for (const ch of checks) {
        for (const fn of ch._zod.onattach) {
          fn(inst);
        }
      }
      if (checks.length === 0) {
        (_a4 = inst._zod).deferred ?? (_a4.deferred = []);
        inst._zod.deferred?.push(() => {
          inst._zod.run = inst._zod.parse;
        });
      } else {
        const runChecks = (payload, checks2, ctx) => {
          let isAborted2 = aborted(payload);
          let asyncResult;
          for (const ch of checks2) {
            if (ch._zod.def.when) {
              if (explicitlyAborted(payload))
                continue;
              const shouldRun = ch._zod.def.when(payload);
              if (!shouldRun)
                continue;
            } else if (isAborted2) {
              continue;
            }
            const currLen = payload.issues.length;
            const _ = ch._zod.check(payload);
            if (_ instanceof Promise && ctx?.async === false) {
              throw new $ZodAsyncError();
            }
            if (asyncResult || _ instanceof Promise) {
              asyncResult = (asyncResult ?? Promise.resolve()).then(async () => {
                await _;
                const nextLen = payload.issues.length;
                if (nextLen === currLen)
                  return;
                if (!isAborted2)
                  isAborted2 = aborted(payload, currLen);
              });
            } else {
              const nextLen = payload.issues.length;
              if (nextLen === currLen)
                continue;
              if (!isAborted2)
                isAborted2 = aborted(payload, currLen);
            }
          }
          if (asyncResult) {
            return asyncResult.then(() => {
              return payload;
            });
          }
          return payload;
        };
        const handleCanaryResult = (canary, payload, ctx) => {
          if (aborted(canary)) {
            canary.aborted = true;
            return canary;
          }
          const checkResult = runChecks(payload, checks, ctx);
          if (checkResult instanceof Promise) {
            if (ctx.async === false)
              throw new $ZodAsyncError();
            return checkResult.then((checkResult2) => inst._zod.parse(checkResult2, ctx));
          }
          return inst._zod.parse(checkResult, ctx);
        };
        inst._zod.run = (payload, ctx) => {
          if (ctx.skipChecks) {
            return inst._zod.parse(payload, ctx);
          }
          if (ctx.direction === "backward") {
            const canary = inst._zod.parse({ value: payload.value, issues: [] }, { ...ctx, skipChecks: true });
            if (canary instanceof Promise) {
              return canary.then((canary2) => {
                return handleCanaryResult(canary2, payload, ctx);
              });
            }
            return handleCanaryResult(canary, payload, ctx);
          }
          const result = inst._zod.parse(payload, ctx);
          if (result instanceof Promise) {
            if (ctx.async === false)
              throw new $ZodAsyncError();
            return result.then((result2) => runChecks(result2, checks, ctx));
          }
          return runChecks(result, checks, ctx);
        };
      }
      defineLazy(inst, "~standard", () => ({
        validate: (value) => {
          try {
            const r = safeParse(inst, value);
            return r.success ? { value: r.data } : { issues: r.error?.issues };
          } catch (_) {
            return safeParseAsync(inst, value).then((r) => r.success ? { value: r.data } : { issues: r.error?.issues });
          }
        },
        vendor: "zod",
        version: 1
      }));
    });
    $ZodString = /* @__PURE__ */ $constructor("$ZodString", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.pattern = [...inst?._zod.bag?.patterns ?? []].pop() ?? string(inst._zod.bag);
      inst._zod.parse = (payload, _) => {
        if (def.coerce)
          try {
            payload.value = String(payload.value);
          } catch (_2) {
          }
        if (typeof payload.value === "string")
          return payload;
        payload.issues.push({
          expected: "string",
          code: "invalid_type",
          input: payload.value,
          inst
        });
        return payload;
      };
    });
    $ZodStringFormat = /* @__PURE__ */ $constructor("$ZodStringFormat", (inst, def) => {
      $ZodCheckStringFormat.init(inst, def);
      $ZodString.init(inst, def);
    });
    $ZodGUID = /* @__PURE__ */ $constructor("$ZodGUID", (inst, def) => {
      def.pattern ?? (def.pattern = guid);
      $ZodStringFormat.init(inst, def);
    });
    $ZodUUID = /* @__PURE__ */ $constructor("$ZodUUID", (inst, def) => {
      if (def.version) {
        const versionMap = {
          v1: 1,
          v2: 2,
          v3: 3,
          v4: 4,
          v5: 5,
          v6: 6,
          v7: 7,
          v8: 8
        };
        const v = versionMap[def.version];
        if (v === void 0)
          throw new Error(`Invalid UUID version: "${def.version}"`);
        def.pattern ?? (def.pattern = uuid(v));
      } else
        def.pattern ?? (def.pattern = uuid());
      $ZodStringFormat.init(inst, def);
    });
    $ZodEmail = /* @__PURE__ */ $constructor("$ZodEmail", (inst, def) => {
      def.pattern ?? (def.pattern = email);
      $ZodStringFormat.init(inst, def);
    });
    $ZodURL = /* @__PURE__ */ $constructor("$ZodURL", (inst, def) => {
      $ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        try {
          const trimmed = payload.value.trim();
          if (!def.normalize && def.protocol?.source === httpProtocol.source) {
            if (!/^https?:\/\//i.test(trimmed)) {
              payload.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid URL format",
                input: payload.value,
                inst,
                continue: !def.abort
              });
              return;
            }
          }
          const url2 = new URL(trimmed);
          if (def.hostname) {
            def.hostname.lastIndex = 0;
            if (!def.hostname.test(url2.hostname)) {
              payload.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid hostname",
                pattern: def.hostname.source,
                input: payload.value,
                inst,
                continue: !def.abort
              });
            }
          }
          if (def.protocol) {
            def.protocol.lastIndex = 0;
            if (!def.protocol.test(url2.protocol.endsWith(":") ? url2.protocol.slice(0, -1) : url2.protocol)) {
              payload.issues.push({
                code: "invalid_format",
                format: "url",
                note: "Invalid protocol",
                pattern: def.protocol.source,
                input: payload.value,
                inst,
                continue: !def.abort
              });
            }
          }
          if (def.normalize) {
            payload.value = url2.href;
          } else {
            payload.value = trimmed;
          }
          return;
        } catch (_) {
          payload.issues.push({
            code: "invalid_format",
            format: "url",
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    $ZodEmoji = /* @__PURE__ */ $constructor("$ZodEmoji", (inst, def) => {
      def.pattern ?? (def.pattern = emoji());
      $ZodStringFormat.init(inst, def);
    });
    $ZodNanoID = /* @__PURE__ */ $constructor("$ZodNanoID", (inst, def) => {
      def.pattern ?? (def.pattern = nanoid);
      $ZodStringFormat.init(inst, def);
    });
    $ZodCUID = /* @__PURE__ */ $constructor("$ZodCUID", (inst, def) => {
      def.pattern ?? (def.pattern = cuid);
      $ZodStringFormat.init(inst, def);
    });
    $ZodCUID2 = /* @__PURE__ */ $constructor("$ZodCUID2", (inst, def) => {
      def.pattern ?? (def.pattern = cuid2);
      $ZodStringFormat.init(inst, def);
    });
    $ZodULID = /* @__PURE__ */ $constructor("$ZodULID", (inst, def) => {
      def.pattern ?? (def.pattern = ulid);
      $ZodStringFormat.init(inst, def);
    });
    $ZodXID = /* @__PURE__ */ $constructor("$ZodXID", (inst, def) => {
      def.pattern ?? (def.pattern = xid);
      $ZodStringFormat.init(inst, def);
    });
    $ZodKSUID = /* @__PURE__ */ $constructor("$ZodKSUID", (inst, def) => {
      def.pattern ?? (def.pattern = ksuid);
      $ZodStringFormat.init(inst, def);
    });
    $ZodISODateTime = /* @__PURE__ */ $constructor("$ZodISODateTime", (inst, def) => {
      def.pattern ?? (def.pattern = datetime(def));
      $ZodStringFormat.init(inst, def);
    });
    $ZodISODate = /* @__PURE__ */ $constructor("$ZodISODate", (inst, def) => {
      def.pattern ?? (def.pattern = date);
      $ZodStringFormat.init(inst, def);
    });
    $ZodISOTime = /* @__PURE__ */ $constructor("$ZodISOTime", (inst, def) => {
      def.pattern ?? (def.pattern = time(def));
      $ZodStringFormat.init(inst, def);
    });
    $ZodISODuration = /* @__PURE__ */ $constructor("$ZodISODuration", (inst, def) => {
      def.pattern ?? (def.pattern = duration);
      $ZodStringFormat.init(inst, def);
    });
    $ZodIPv4 = /* @__PURE__ */ $constructor("$ZodIPv4", (inst, def) => {
      def.pattern ?? (def.pattern = ipv4);
      $ZodStringFormat.init(inst, def);
      inst._zod.bag.format = `ipv4`;
    });
    $ZodIPv6 = /* @__PURE__ */ $constructor("$ZodIPv6", (inst, def) => {
      def.pattern ?? (def.pattern = ipv6);
      $ZodStringFormat.init(inst, def);
      inst._zod.bag.format = `ipv6`;
      inst._zod.check = (payload) => {
        try {
          new URL(`http://[${payload.value}]`);
        } catch {
          payload.issues.push({
            code: "invalid_format",
            format: "ipv6",
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    $ZodMAC = /* @__PURE__ */ $constructor("$ZodMAC", (inst, def) => {
      def.pattern ?? (def.pattern = mac(def.delimiter));
      $ZodStringFormat.init(inst, def);
      inst._zod.bag.format = `mac`;
    });
    $ZodCIDRv4 = /* @__PURE__ */ $constructor("$ZodCIDRv4", (inst, def) => {
      def.pattern ?? (def.pattern = cidrv4);
      $ZodStringFormat.init(inst, def);
    });
    $ZodCIDRv6 = /* @__PURE__ */ $constructor("$ZodCIDRv6", (inst, def) => {
      def.pattern ?? (def.pattern = cidrv6);
      $ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        const parts = payload.value.split("/");
        try {
          if (parts.length !== 2)
            throw new Error();
          const [address, prefix] = parts;
          if (!prefix)
            throw new Error();
          const prefixNum = Number(prefix);
          if (`${prefixNum}` !== prefix)
            throw new Error();
          if (prefixNum < 0 || prefixNum > 128)
            throw new Error();
          new URL(`http://[${address}]`);
        } catch {
          payload.issues.push({
            code: "invalid_format",
            format: "cidrv6",
            input: payload.value,
            inst,
            continue: !def.abort
          });
        }
      };
    });
    $ZodBase64 = /* @__PURE__ */ $constructor("$ZodBase64", (inst, def) => {
      def.pattern ?? (def.pattern = base64);
      $ZodStringFormat.init(inst, def);
      inst._zod.bag.contentEncoding = "base64";
      inst._zod.check = (payload) => {
        if (isValidBase64(payload.value))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: "base64",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodBase64URL = /* @__PURE__ */ $constructor("$ZodBase64URL", (inst, def) => {
      def.pattern ?? (def.pattern = base64url);
      $ZodStringFormat.init(inst, def);
      inst._zod.bag.contentEncoding = "base64url";
      inst._zod.check = (payload) => {
        if (isValidBase64URL(payload.value))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: "base64url",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodE164 = /* @__PURE__ */ $constructor("$ZodE164", (inst, def) => {
      def.pattern ?? (def.pattern = e164);
      $ZodStringFormat.init(inst, def);
    });
    $ZodJWT = /* @__PURE__ */ $constructor("$ZodJWT", (inst, def) => {
      $ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        if (isValidJWT(payload.value, def.alg))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: "jwt",
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodCustomStringFormat = /* @__PURE__ */ $constructor("$ZodCustomStringFormat", (inst, def) => {
      $ZodStringFormat.init(inst, def);
      inst._zod.check = (payload) => {
        if (def.fn(payload.value))
          return;
        payload.issues.push({
          code: "invalid_format",
          format: def.format,
          input: payload.value,
          inst,
          continue: !def.abort
        });
      };
    });
    $ZodNumber = /* @__PURE__ */ $constructor("$ZodNumber", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.pattern = inst._zod.bag.pattern ?? number;
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
          try {
            payload.value = Number(payload.value);
          } catch (_) {
          }
        const input = payload.value;
        if (typeof input === "number" && !Number.isNaN(input) && Number.isFinite(input)) {
          return payload;
        }
        const received = typeof input === "number" ? Number.isNaN(input) ? "NaN" : !Number.isFinite(input) ? "Infinity" : void 0 : void 0;
        payload.issues.push({
          expected: "number",
          code: "invalid_type",
          input,
          inst,
          ...received ? { received } : {}
        });
        return payload;
      };
    });
    $ZodNumberFormat = /* @__PURE__ */ $constructor("$ZodNumberFormat", (inst, def) => {
      $ZodCheckNumberFormat.init(inst, def);
      $ZodNumber.init(inst, def);
    });
    $ZodBoolean = /* @__PURE__ */ $constructor("$ZodBoolean", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.pattern = boolean;
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
          try {
            payload.value = Boolean(payload.value);
          } catch (_) {
          }
        const input = payload.value;
        if (typeof input === "boolean")
          return payload;
        payload.issues.push({
          expected: "boolean",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    $ZodBigInt = /* @__PURE__ */ $constructor("$ZodBigInt", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.pattern = bigint;
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce)
          try {
            payload.value = BigInt(payload.value);
          } catch (_) {
          }
        if (typeof payload.value === "bigint")
          return payload;
        payload.issues.push({
          expected: "bigint",
          code: "invalid_type",
          input: payload.value,
          inst
        });
        return payload;
      };
    });
    $ZodBigIntFormat = /* @__PURE__ */ $constructor("$ZodBigIntFormat", (inst, def) => {
      $ZodCheckBigIntFormat.init(inst, def);
      $ZodBigInt.init(inst, def);
    });
    $ZodSymbol = /* @__PURE__ */ $constructor("$ZodSymbol", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "symbol")
          return payload;
        payload.issues.push({
          expected: "symbol",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    $ZodUndefined = /* @__PURE__ */ $constructor("$ZodUndefined", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.pattern = _undefined;
      inst._zod.values = /* @__PURE__ */ new Set([void 0]);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
          return payload;
        payload.issues.push({
          expected: "undefined",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    $ZodNull = /* @__PURE__ */ $constructor("$ZodNull", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.pattern = _null;
      inst._zod.values = /* @__PURE__ */ new Set([null]);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input === null)
          return payload;
        payload.issues.push({
          expected: "null",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    $ZodAny = /* @__PURE__ */ $constructor("$ZodAny", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload) => payload;
    });
    $ZodUnknown = /* @__PURE__ */ $constructor("$ZodUnknown", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload) => payload;
    });
    $ZodNever = /* @__PURE__ */ $constructor("$ZodNever", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        payload.issues.push({
          expected: "never",
          code: "invalid_type",
          input: payload.value,
          inst
        });
        return payload;
      };
    });
    $ZodVoid = /* @__PURE__ */ $constructor("$ZodVoid", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (typeof input === "undefined")
          return payload;
        payload.issues.push({
          expected: "void",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    $ZodDate = /* @__PURE__ */ $constructor("$ZodDate", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        if (def.coerce) {
          try {
            payload.value = new Date(payload.value);
          } catch (_err) {
          }
        }
        const input = payload.value;
        const isDate = input instanceof Date;
        const isValidDate = isDate && !Number.isNaN(input.getTime());
        if (isValidDate)
          return payload;
        payload.issues.push({
          expected: "date",
          code: "invalid_type",
          input,
          ...isDate ? { received: "Invalid Date" } : {},
          inst
        });
        return payload;
      };
    });
    $ZodArray = /* @__PURE__ */ $constructor("$ZodArray", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
          payload.issues.push({
            expected: "array",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        payload.value = Array(input.length);
        const proms = [];
        for (let i = 0; i < input.length; i++) {
          const item = input[i];
          const result = def.element._zod.run({
            value: item,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => handleArrayResult(result2, payload, i)));
          } else {
            handleArrayResult(result, payload, i);
          }
        }
        if (proms.length) {
          return Promise.all(proms).then(() => payload);
        }
        return payload;
      };
    });
    $ZodObject = /* @__PURE__ */ $constructor("$ZodObject", (inst, def) => {
      $ZodType.init(inst, def);
      const desc = Object.getOwnPropertyDescriptor(def, "shape");
      if (!desc?.get) {
        const sh = def.shape;
        Object.defineProperty(def, "shape", {
          get: () => {
            const newSh = { ...sh };
            Object.defineProperty(def, "shape", {
              value: newSh
            });
            return newSh;
          }
        });
      }
      const _normalized = cached(() => normalizeDef(def));
      defineLazy(inst._zod, "propValues", () => {
        const shape = def.shape;
        const propValues = {};
        for (const key in shape) {
          const field = shape[key]._zod;
          if (field.values) {
            propValues[key] ?? (propValues[key] = /* @__PURE__ */ new Set());
            for (const v of field.values)
              propValues[key].add(v);
          }
        }
        return propValues;
      });
      const isObject3 = isObject;
      const catchall = def.catchall;
      let value;
      inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject3(input)) {
          payload.issues.push({
            expected: "object",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        payload.value = {};
        const proms = [];
        const shape = value.shape;
        for (const key of value.keys) {
          const el = shape[key];
          const isOptionalIn = el._zod.optin === "optional";
          const isOptionalOut = el._zod.optout === "optional";
          const r = el._zod.run({ value: input[key], issues: [] }, ctx);
          if (r instanceof Promise) {
            proms.push(r.then((r2) => handlePropertyResult(r2, payload, key, input, isOptionalIn, isOptionalOut)));
          } else {
            handlePropertyResult(r, payload, key, input, isOptionalIn, isOptionalOut);
          }
        }
        if (!catchall) {
          return proms.length ? Promise.all(proms).then(() => payload) : payload;
        }
        return handleCatchall(proms, input, payload, ctx, _normalized.value, inst);
      };
    });
    $ZodObjectJIT = /* @__PURE__ */ $constructor("$ZodObjectJIT", (inst, def) => {
      $ZodObject.init(inst, def);
      const superParse = inst._zod.parse;
      const _normalized = cached(() => normalizeDef(def));
      const generateFastpass = (shape) => {
        const doc = new Doc(["shape", "payload", "ctx"]);
        const normalized = _normalized.value;
        const parseStr = (key) => {
          const k = esc(key);
          return `shape[${k}]._zod.run({ value: input[${k}], issues: [] }, ctx)`;
        };
        doc.write(`const input = payload.value;`);
        const ids = /* @__PURE__ */ Object.create(null);
        let counter = 0;
        for (const key of normalized.keys) {
          ids[key] = `key_${counter++}`;
        }
        doc.write(`const newResult = {};`);
        for (const key of normalized.keys) {
          const id = ids[key];
          const k = esc(key);
          const schema = shape[key];
          const isOptionalIn = schema?._zod?.optin === "optional";
          const isOptionalOut = schema?._zod?.optout === "optional";
          doc.write(`const ${id} = ${parseStr(key)};`);
          if (isOptionalIn && isOptionalOut) {
            doc.write(`
        if (${id}.issues.length) {
          if (${k} in input) {
            payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${k}, ...iss.path] : [${k}]
            })));
          }
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
          } else if (!isOptionalIn) {
            doc.write(`
        const ${id}_present = ${k} in input;
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        if (!${id}_present && !${id}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${k}]
          });
        }

        if (${id}_present) {
          if (${id}.value === undefined) {
            newResult[${k}] = undefined;
          } else {
            newResult[${k}] = ${id}.value;
          }
        }

      `);
          } else {
            doc.write(`
        if (${id}.issues.length) {
          payload.issues = payload.issues.concat(${id}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${k}, ...iss.path] : [${k}]
          })));
        }
        
        if (${id}.value === undefined) {
          if (${k} in input) {
            newResult[${k}] = undefined;
          }
        } else {
          newResult[${k}] = ${id}.value;
        }
        
      `);
          }
        }
        doc.write(`payload.value = newResult;`);
        doc.write(`return payload;`);
        const fn = doc.compile();
        return (payload, ctx) => fn(shape, payload, ctx);
      };
      let fastpass;
      const isObject3 = isObject;
      const jit = !globalConfig.jitless;
      const allowsEval2 = allowsEval;
      const fastEnabled = jit && allowsEval2.value;
      const catchall = def.catchall;
      let value;
      inst._zod.parse = (payload, ctx) => {
        value ?? (value = _normalized.value);
        const input = payload.value;
        if (!isObject3(input)) {
          payload.issues.push({
            expected: "object",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        if (jit && fastEnabled && ctx?.async === false && ctx.jitless !== true) {
          if (!fastpass)
            fastpass = generateFastpass(def.shape);
          payload = fastpass(payload, ctx);
          if (!catchall)
            return payload;
          return handleCatchall([], input, payload, ctx, value, inst);
        }
        return superParse(payload, ctx);
      };
    });
    $ZodUnion = /* @__PURE__ */ $constructor("$ZodUnion", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "optin", () => def.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0);
      defineLazy(inst._zod, "optout", () => def.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0);
      defineLazy(inst._zod, "values", () => {
        if (def.options.every((o) => o._zod.values)) {
          return new Set(def.options.flatMap((option) => Array.from(option._zod.values)));
        }
        return void 0;
      });
      defineLazy(inst._zod, "pattern", () => {
        if (def.options.every((o) => o._zod.pattern)) {
          const patterns = def.options.map((o) => o._zod.pattern);
          return new RegExp(`^(${patterns.map((p) => cleanRegex(p.source)).join("|")})$`);
        }
        return void 0;
      });
      const first = def.options.length === 1 ? def.options[0]._zod.run : null;
      inst._zod.parse = (payload, ctx) => {
        if (first) {
          return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
          const result = option._zod.run({
            value: payload.value,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            results.push(result);
            async = true;
          } else {
            if (result.issues.length === 0)
              return result;
            results.push(result);
          }
        }
        if (!async)
          return handleUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results2) => {
          return handleUnionResults(results2, payload, inst, ctx);
        });
      };
    });
    $ZodXor = /* @__PURE__ */ $constructor("$ZodXor", (inst, def) => {
      $ZodUnion.init(inst, def);
      def.inclusive = false;
      const first = def.options.length === 1 ? def.options[0]._zod.run : null;
      inst._zod.parse = (payload, ctx) => {
        if (first) {
          return first(payload, ctx);
        }
        let async = false;
        const results = [];
        for (const option of def.options) {
          const result = option._zod.run({
            value: payload.value,
            issues: []
          }, ctx);
          if (result instanceof Promise) {
            results.push(result);
            async = true;
          } else {
            results.push(result);
          }
        }
        if (!async)
          return handleExclusiveUnionResults(results, payload, inst, ctx);
        return Promise.all(results).then((results2) => {
          return handleExclusiveUnionResults(results2, payload, inst, ctx);
        });
      };
    });
    $ZodDiscriminatedUnion = /* @__PURE__ */ $constructor("$ZodDiscriminatedUnion", (inst, def) => {
      def.inclusive = false;
      $ZodUnion.init(inst, def);
      const _super = inst._zod.parse;
      defineLazy(inst._zod, "propValues", () => {
        const propValues = {};
        for (const option of def.options) {
          const pv = option._zod.propValues;
          if (!pv || Object.keys(pv).length === 0)
            throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(option)}"`);
          for (const [k, v] of Object.entries(pv)) {
            if (!propValues[k])
              propValues[k] = /* @__PURE__ */ new Set();
            for (const val of v) {
              propValues[k].add(val);
            }
          }
        }
        return propValues;
      });
      const disc = cached(() => {
        const opts = def.options;
        const map2 = /* @__PURE__ */ new Map();
        for (const o of opts) {
          const values = o._zod.propValues?.[def.discriminator];
          if (!values || values.size === 0)
            throw new Error(`Invalid discriminated union option at index "${def.options.indexOf(o)}"`);
          for (const v of values) {
            if (map2.has(v)) {
              throw new Error(`Duplicate discriminator value "${String(v)}"`);
            }
            map2.set(v, o);
          }
        }
        return map2;
      });
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!isObject(input)) {
          payload.issues.push({
            code: "invalid_type",
            expected: "object",
            input,
            inst
          });
          return payload;
        }
        const opt = disc.value.get(input?.[def.discriminator]);
        if (opt) {
          return opt._zod.run(payload, ctx);
        }
        if (def.unionFallback || ctx.direction === "backward") {
          return _super(payload, ctx);
        }
        payload.issues.push({
          code: "invalid_union",
          errors: [],
          note: "No matching discriminator",
          discriminator: def.discriminator,
          options: Array.from(disc.value.keys()),
          input,
          path: [def.discriminator],
          inst
        });
        return payload;
      };
    });
    $ZodIntersection = /* @__PURE__ */ $constructor("$ZodIntersection", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        const left = def.left._zod.run({ value: input, issues: [] }, ctx);
        const right = def.right._zod.run({ value: input, issues: [] }, ctx);
        const async = left instanceof Promise || right instanceof Promise;
        if (async) {
          return Promise.all([left, right]).then(([left2, right2]) => {
            return handleIntersectionResults(payload, left2, right2);
          });
        }
        return handleIntersectionResults(payload, left, right);
      };
    });
    $ZodTuple = /* @__PURE__ */ $constructor("$ZodTuple", (inst, def) => {
      $ZodType.init(inst, def);
      const items = def.items;
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!Array.isArray(input)) {
          payload.issues.push({
            input,
            inst,
            expected: "tuple",
            code: "invalid_type"
          });
          return payload;
        }
        payload.value = [];
        const proms = [];
        const optinStart = getTupleOptStart(items, "optin");
        const optoutStart = getTupleOptStart(items, "optout");
        if (!def.rest) {
          if (input.length < optinStart) {
            payload.issues.push({
              code: "too_small",
              minimum: optinStart,
              inclusive: true,
              input,
              inst,
              origin: "array"
            });
            return payload;
          }
          if (input.length > items.length) {
            payload.issues.push({
              code: "too_big",
              maximum: items.length,
              inclusive: true,
              input,
              inst,
              origin: "array"
            });
          }
        }
        const itemResults = new Array(items.length);
        for (let i = 0; i < items.length; i++) {
          const r = items[i]._zod.run({ value: input[i], issues: [] }, ctx);
          if (r instanceof Promise) {
            proms.push(r.then((rr) => {
              itemResults[i] = rr;
            }));
          } else {
            itemResults[i] = r;
          }
        }
        if (def.rest) {
          let i = items.length - 1;
          const rest = input.slice(items.length);
          for (const el of rest) {
            i++;
            const result = def.rest._zod.run({ value: el, issues: [] }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then((r) => handleTupleResult(r, payload, i)));
            } else {
              handleTupleResult(result, payload, i);
            }
          }
        }
        if (proms.length) {
          return Promise.all(proms).then(() => handleTupleResults(itemResults, payload, items, input, optoutStart));
        }
        return handleTupleResults(itemResults, payload, items, input, optoutStart);
      };
    });
    $ZodRecord = /* @__PURE__ */ $constructor("$ZodRecord", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!isPlainObject(input)) {
          payload.issues.push({
            expected: "record",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        const proms = [];
        const values = def.keyType._zod.values;
        if (values) {
          payload.value = {};
          const recordKeys = /* @__PURE__ */ new Set();
          for (const key of values) {
            if (typeof key === "string" || typeof key === "number" || typeof key === "symbol") {
              recordKeys.add(typeof key === "number" ? key.toString() : key);
              const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
              if (keyResult instanceof Promise) {
                throw new Error("Async schemas not supported in object keys currently");
              }
              if (keyResult.issues.length) {
                payload.issues.push({
                  code: "invalid_key",
                  origin: "record",
                  issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
                  input: key,
                  path: [key],
                  inst
                });
                continue;
              }
              const outKey = keyResult.value;
              const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
              if (result instanceof Promise) {
                proms.push(result.then((result2) => {
                  if (result2.issues.length) {
                    payload.issues.push(...prefixIssues(key, result2.issues));
                  }
                  payload.value[outKey] = result2.value;
                }));
              } else {
                if (result.issues.length) {
                  payload.issues.push(...prefixIssues(key, result.issues));
                }
                payload.value[outKey] = result.value;
              }
            }
          }
          let unrecognized;
          for (const key in input) {
            if (!recordKeys.has(key)) {
              unrecognized = unrecognized ?? [];
              unrecognized.push(key);
            }
          }
          if (unrecognized && unrecognized.length > 0) {
            payload.issues.push({
              code: "unrecognized_keys",
              input,
              inst,
              keys: unrecognized
            });
          }
        } else {
          payload.value = {};
          for (const key of Reflect.ownKeys(input)) {
            if (key === "__proto__")
              continue;
            if (!Object.prototype.propertyIsEnumerable.call(input, key))
              continue;
            let keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
            if (keyResult instanceof Promise) {
              throw new Error("Async schemas not supported in object keys currently");
            }
            const checkNumericKey = typeof key === "string" && number.test(key) && keyResult.issues.length;
            if (checkNumericKey) {
              const retryResult = def.keyType._zod.run({ value: Number(key), issues: [] }, ctx);
              if (retryResult instanceof Promise) {
                throw new Error("Async schemas not supported in object keys currently");
              }
              if (retryResult.issues.length === 0) {
                keyResult = retryResult;
              }
            }
            if (keyResult.issues.length) {
              if (def.mode === "loose") {
                payload.value[key] = input[key];
              } else {
                payload.issues.push({
                  code: "invalid_key",
                  origin: "record",
                  issues: keyResult.issues.map((iss) => finalizeIssue(iss, ctx, config())),
                  input: key,
                  path: [key],
                  inst
                });
              }
              continue;
            }
            const result = def.valueType._zod.run({ value: input[key], issues: [] }, ctx);
            if (result instanceof Promise) {
              proms.push(result.then((result2) => {
                if (result2.issues.length) {
                  payload.issues.push(...prefixIssues(key, result2.issues));
                }
                payload.value[keyResult.value] = result2.value;
              }));
            } else {
              if (result.issues.length) {
                payload.issues.push(...prefixIssues(key, result.issues));
              }
              payload.value[keyResult.value] = result.value;
            }
          }
        }
        if (proms.length) {
          return Promise.all(proms).then(() => payload);
        }
        return payload;
      };
    });
    $ZodMap = /* @__PURE__ */ $constructor("$ZodMap", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Map)) {
          payload.issues.push({
            expected: "map",
            code: "invalid_type",
            input,
            inst
          });
          return payload;
        }
        const proms = [];
        payload.value = /* @__PURE__ */ new Map();
        for (const [key, value] of input) {
          const keyResult = def.keyType._zod.run({ value: key, issues: [] }, ctx);
          const valueResult = def.valueType._zod.run({ value, issues: [] }, ctx);
          if (keyResult instanceof Promise || valueResult instanceof Promise) {
            proms.push(Promise.all([keyResult, valueResult]).then(([keyResult2, valueResult2]) => {
              handleMapResult(keyResult2, valueResult2, payload, key, input, inst, ctx);
            }));
          } else {
            handleMapResult(keyResult, valueResult, payload, key, input, inst, ctx);
          }
        }
        if (proms.length)
          return Promise.all(proms).then(() => payload);
        return payload;
      };
    });
    $ZodSet = /* @__PURE__ */ $constructor("$ZodSet", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        const input = payload.value;
        if (!(input instanceof Set)) {
          payload.issues.push({
            input,
            inst,
            expected: "set",
            code: "invalid_type"
          });
          return payload;
        }
        const proms = [];
        payload.value = /* @__PURE__ */ new Set();
        for (const item of input) {
          const result = def.valueType._zod.run({ value: item, issues: [] }, ctx);
          if (result instanceof Promise) {
            proms.push(result.then((result2) => handleSetResult(result2, payload)));
          } else
            handleSetResult(result, payload);
        }
        if (proms.length)
          return Promise.all(proms).then(() => payload);
        return payload;
      };
    });
    $ZodEnum = /* @__PURE__ */ $constructor("$ZodEnum", (inst, def) => {
      $ZodType.init(inst, def);
      const values = getEnumValues(def.entries);
      const valuesSet = new Set(values);
      inst._zod.values = valuesSet;
      inst._zod.pattern = new RegExp(`^(${values.filter((k) => propertyKeyTypes.has(typeof k)).map((o) => typeof o === "string" ? escapeRegex(o) : o.toString()).join("|")})$`);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (valuesSet.has(input)) {
          return payload;
        }
        payload.issues.push({
          code: "invalid_value",
          values,
          input,
          inst
        });
        return payload;
      };
    });
    $ZodLiteral = /* @__PURE__ */ $constructor("$ZodLiteral", (inst, def) => {
      $ZodType.init(inst, def);
      if (def.values.length === 0) {
        throw new Error("Cannot create literal schema with no valid values");
      }
      const values = new Set(def.values);
      inst._zod.values = values;
      inst._zod.pattern = new RegExp(`^(${def.values.map((o) => typeof o === "string" ? escapeRegex(o) : o ? escapeRegex(o.toString()) : String(o)).join("|")})$`);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (values.has(input)) {
          return payload;
        }
        payload.issues.push({
          code: "invalid_value",
          values: def.values,
          input,
          inst
        });
        return payload;
      };
    });
    $ZodFile = /* @__PURE__ */ $constructor("$ZodFile", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        const input = payload.value;
        if (input instanceof File)
          return payload;
        payload.issues.push({
          expected: "file",
          code: "invalid_type",
          input,
          inst
        });
        return payload;
      };
    });
    $ZodTransform = /* @__PURE__ */ $constructor("$ZodTransform", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.optin = "optional";
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          throw new $ZodEncodeError(inst.constructor.name);
        }
        const _out = def.transform(payload.value, payload);
        if (ctx.async) {
          const output = _out instanceof Promise ? _out : Promise.resolve(_out);
          return output.then((output2) => {
            payload.value = output2;
            payload.fallback = true;
            return payload;
          });
        }
        if (_out instanceof Promise) {
          throw new $ZodAsyncError();
        }
        payload.value = _out;
        payload.fallback = true;
        return payload;
      };
    });
    $ZodOptional = /* @__PURE__ */ $constructor("$ZodOptional", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.optin = "optional";
      inst._zod.optout = "optional";
      defineLazy(inst._zod, "values", () => {
        return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, void 0]) : void 0;
      });
      defineLazy(inst._zod, "pattern", () => {
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)})?$`) : void 0;
      });
      inst._zod.parse = (payload, ctx) => {
        if (def.innerType._zod.optin === "optional") {
          const input = payload.value;
          const result = def.innerType._zod.run(payload, ctx);
          if (result instanceof Promise)
            return result.then((r) => handleOptionalResult(r, input));
          return handleOptionalResult(result, input);
        }
        if (payload.value === void 0) {
          return payload;
        }
        return def.innerType._zod.run(payload, ctx);
      };
    });
    $ZodExactOptional = /* @__PURE__ */ $constructor("$ZodExactOptional", (inst, def) => {
      $ZodOptional.init(inst, def);
      defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      defineLazy(inst._zod, "pattern", () => def.innerType._zod.pattern);
      inst._zod.parse = (payload, ctx) => {
        return def.innerType._zod.run(payload, ctx);
      };
    });
    $ZodNullable = /* @__PURE__ */ $constructor("$ZodNullable", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "optin", () => def.innerType._zod.optin);
      defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
      defineLazy(inst._zod, "pattern", () => {
        const pattern = def.innerType._zod.pattern;
        return pattern ? new RegExp(`^(${cleanRegex(pattern.source)}|null)$`) : void 0;
      });
      defineLazy(inst._zod, "values", () => {
        return def.innerType._zod.values ? /* @__PURE__ */ new Set([...def.innerType._zod.values, null]) : void 0;
      });
      inst._zod.parse = (payload, ctx) => {
        if (payload.value === null)
          return payload;
        return def.innerType._zod.run(payload, ctx);
      };
    });
    $ZodDefault = /* @__PURE__ */ $constructor("$ZodDefault", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.optin = "optional";
      defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === void 0) {
          payload.value = def.defaultValue;
          return payload;
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => handleDefaultResult(result2, def));
        }
        return handleDefaultResult(result, def);
      };
    });
    $ZodPrefault = /* @__PURE__ */ $constructor("$ZodPrefault", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.optin = "optional";
      defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        if (payload.value === void 0) {
          payload.value = def.defaultValue;
        }
        return def.innerType._zod.run(payload, ctx);
      };
    });
    $ZodNonOptional = /* @__PURE__ */ $constructor("$ZodNonOptional", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "values", () => {
        const v = def.innerType._zod.values;
        return v ? new Set([...v].filter((x) => x !== void 0)) : void 0;
      });
      inst._zod.parse = (payload, ctx) => {
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => handleNonOptionalResult(result2, inst));
        }
        return handleNonOptionalResult(result, inst);
      };
    });
    $ZodSuccess = /* @__PURE__ */ $constructor("$ZodSuccess", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          throw new $ZodEncodeError("ZodSuccess");
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => {
            payload.value = result2.issues.length === 0;
            return payload;
          });
        }
        payload.value = result.issues.length === 0;
        return payload;
      };
    });
    $ZodCatch = /* @__PURE__ */ $constructor("$ZodCatch", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.optin = "optional";
      defineLazy(inst._zod, "optout", () => def.innerType._zod.optout);
      defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then((result2) => {
            payload.value = result2.value;
            if (result2.issues.length) {
              payload.value = def.catchValue({
                ...payload,
                error: {
                  issues: result2.issues.map((iss) => finalizeIssue(iss, ctx, config()))
                },
                input: payload.value
              });
              payload.issues = [];
              payload.fallback = true;
            }
            return payload;
          });
        }
        payload.value = result.value;
        if (result.issues.length) {
          payload.value = def.catchValue({
            ...payload,
            error: {
              issues: result.issues.map((iss) => finalizeIssue(iss, ctx, config()))
            },
            input: payload.value
          });
          payload.issues = [];
          payload.fallback = true;
        }
        return payload;
      };
    });
    $ZodNaN = /* @__PURE__ */ $constructor("$ZodNaN", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "number" || !Number.isNaN(payload.value)) {
          payload.issues.push({
            input: payload.value,
            inst,
            expected: "nan",
            code: "invalid_type"
          });
          return payload;
        }
        return payload;
      };
    });
    $ZodPipe = /* @__PURE__ */ $constructor("$ZodPipe", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "values", () => def.in._zod.values);
      defineLazy(inst._zod, "optin", () => def.in._zod.optin);
      defineLazy(inst._zod, "optout", () => def.out._zod.optout);
      defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          const right = def.out._zod.run(payload, ctx);
          if (right instanceof Promise) {
            return right.then((right2) => handlePipeResult(right2, def.in, ctx));
          }
          return handlePipeResult(right, def.in, ctx);
        }
        const left = def.in._zod.run(payload, ctx);
        if (left instanceof Promise) {
          return left.then((left2) => handlePipeResult(left2, def.out, ctx));
        }
        return handlePipeResult(left, def.out, ctx);
      };
    });
    $ZodCodec = /* @__PURE__ */ $constructor("$ZodCodec", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "values", () => def.in._zod.values);
      defineLazy(inst._zod, "optin", () => def.in._zod.optin);
      defineLazy(inst._zod, "optout", () => def.out._zod.optout);
      defineLazy(inst._zod, "propValues", () => def.in._zod.propValues);
      inst._zod.parse = (payload, ctx) => {
        const direction = ctx.direction || "forward";
        if (direction === "forward") {
          const left = def.in._zod.run(payload, ctx);
          if (left instanceof Promise) {
            return left.then((left2) => handleCodecAResult(left2, def, ctx));
          }
          return handleCodecAResult(left, def, ctx);
        } else {
          const right = def.out._zod.run(payload, ctx);
          if (right instanceof Promise) {
            return right.then((right2) => handleCodecAResult(right2, def, ctx));
          }
          return handleCodecAResult(right, def, ctx);
        }
      };
    });
    $ZodPreprocess = /* @__PURE__ */ $constructor("$ZodPreprocess", (inst, def) => {
      $ZodPipe.init(inst, def);
    });
    $ZodReadonly = /* @__PURE__ */ $constructor("$ZodReadonly", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "propValues", () => def.innerType._zod.propValues);
      defineLazy(inst._zod, "values", () => def.innerType._zod.values);
      defineLazy(inst._zod, "optin", () => def.innerType?._zod?.optin);
      defineLazy(inst._zod, "optout", () => def.innerType?._zod?.optout);
      inst._zod.parse = (payload, ctx) => {
        if (ctx.direction === "backward") {
          return def.innerType._zod.run(payload, ctx);
        }
        const result = def.innerType._zod.run(payload, ctx);
        if (result instanceof Promise) {
          return result.then(handleReadonlyResult);
        }
        return handleReadonlyResult(result);
      };
    });
    $ZodTemplateLiteral = /* @__PURE__ */ $constructor("$ZodTemplateLiteral", (inst, def) => {
      $ZodType.init(inst, def);
      const regexParts = [];
      for (const part of def.parts) {
        if (typeof part === "object" && part !== null) {
          if (!part._zod.pattern) {
            throw new Error(`Invalid template literal part, no pattern found: ${[...part._zod.traits].shift()}`);
          }
          const source = part._zod.pattern instanceof RegExp ? part._zod.pattern.source : part._zod.pattern;
          if (!source)
            throw new Error(`Invalid template literal part: ${part._zod.traits}`);
          const start = source.startsWith("^") ? 1 : 0;
          const end = source.endsWith("$") ? source.length - 1 : source.length;
          regexParts.push(source.slice(start, end));
        } else if (part === null || primitiveTypes.has(typeof part)) {
          regexParts.push(escapeRegex(`${part}`));
        } else {
          throw new Error(`Invalid template literal part: ${part}`);
        }
      }
      inst._zod.pattern = new RegExp(`^${regexParts.join("")}$`);
      inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "string") {
          payload.issues.push({
            input: payload.value,
            inst,
            expected: "string",
            code: "invalid_type"
          });
          return payload;
        }
        inst._zod.pattern.lastIndex = 0;
        if (!inst._zod.pattern.test(payload.value)) {
          payload.issues.push({
            input: payload.value,
            inst,
            code: "invalid_format",
            format: def.format ?? "template_literal",
            pattern: inst._zod.pattern.source
          });
          return payload;
        }
        return payload;
      };
    });
    $ZodFunction = /* @__PURE__ */ $constructor("$ZodFunction", (inst, def) => {
      $ZodType.init(inst, def);
      inst._def = def;
      inst._zod.def = def;
      inst.implement = (func) => {
        if (typeof func !== "function") {
          throw new Error("implement() must be called with a function");
        }
        return function(...args) {
          const parsedArgs = inst._def.input ? parse(inst._def.input, args) : args;
          const result = Reflect.apply(func, this, parsedArgs);
          if (inst._def.output) {
            return parse(inst._def.output, result);
          }
          return result;
        };
      };
      inst.implementAsync = (func) => {
        if (typeof func !== "function") {
          throw new Error("implementAsync() must be called with a function");
        }
        return async function(...args) {
          const parsedArgs = inst._def.input ? await parseAsync(inst._def.input, args) : args;
          const result = await Reflect.apply(func, this, parsedArgs);
          if (inst._def.output) {
            return await parseAsync(inst._def.output, result);
          }
          return result;
        };
      };
      inst._zod.parse = (payload, _ctx) => {
        if (typeof payload.value !== "function") {
          payload.issues.push({
            code: "invalid_type",
            expected: "function",
            input: payload.value,
            inst
          });
          return payload;
        }
        const hasPromiseOutput = inst._def.output && inst._def.output._zod.def.type === "promise";
        if (hasPromiseOutput) {
          payload.value = inst.implementAsync(payload.value);
        } else {
          payload.value = inst.implement(payload.value);
        }
        return payload;
      };
      inst.input = (...args) => {
        const F = inst.constructor;
        if (Array.isArray(args[0])) {
          return new F({
            type: "function",
            input: new $ZodTuple({
              type: "tuple",
              items: args[0],
              rest: args[1]
            }),
            output: inst._def.output
          });
        }
        return new F({
          type: "function",
          input: args[0],
          output: inst._def.output
        });
      };
      inst.output = (output) => {
        const F = inst.constructor;
        return new F({
          type: "function",
          input: inst._def.input,
          output
        });
      };
      return inst;
    });
    $ZodPromise = /* @__PURE__ */ $constructor("$ZodPromise", (inst, def) => {
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, ctx) => {
        return Promise.resolve(payload.value).then((inner) => def.innerType._zod.run({ value: inner, issues: [] }, ctx));
      };
    });
    $ZodLazy = /* @__PURE__ */ $constructor("$ZodLazy", (inst, def) => {
      $ZodType.init(inst, def);
      defineLazy(inst._zod, "innerType", () => {
        const d = def;
        if (!d._cachedInner)
          d._cachedInner = def.getter();
        return d._cachedInner;
      });
      defineLazy(inst._zod, "pattern", () => inst._zod.innerType?._zod?.pattern);
      defineLazy(inst._zod, "propValues", () => inst._zod.innerType?._zod?.propValues);
      defineLazy(inst._zod, "optin", () => inst._zod.innerType?._zod?.optin ?? void 0);
      defineLazy(inst._zod, "optout", () => inst._zod.innerType?._zod?.optout ?? void 0);
      inst._zod.parse = (payload, ctx) => {
        const inner = inst._zod.innerType;
        return inner._zod.run(payload, ctx);
      };
    });
    $ZodCustom = /* @__PURE__ */ $constructor("$ZodCustom", (inst, def) => {
      $ZodCheck.init(inst, def);
      $ZodType.init(inst, def);
      inst._zod.parse = (payload, _) => {
        return payload;
      };
      inst._zod.check = (payload) => {
        const input = payload.value;
        const r = def.fn(input);
        if (r instanceof Promise) {
          return r.then((r2) => handleRefineResult(r2, payload, input, inst));
        }
        handleRefineResult(r, payload, input, inst);
        return;
      };
    });
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ar.js
function ar_default() {
  return {
    localeError: error()
  };
}
var error;
var init_ar = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ar.js"() {
    init_util();
    error = () => {
      const Sizable = {
        string: { unit: "\u062D\u0631\u0641", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        file: { unit: "\u0628\u0627\u064A\u062A", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        array: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" },
        set: { unit: "\u0639\u0646\u0635\u0631", verb: "\u0623\u0646 \u064A\u062D\u0648\u064A" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0645\u062F\u062E\u0644",
        email: "\u0628\u0631\u064A\u062F \u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A",
        url: "\u0631\u0627\u0628\u0637",
        emoji: "\u0625\u064A\u0645\u0648\u062C\u064A",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "\u062A\u0627\u0631\u064A\u062E \u0648\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
        date: "\u062A\u0627\u0631\u064A\u062E \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
        time: "\u0648\u0642\u062A \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
        duration: "\u0645\u062F\u0629 \u0628\u0645\u0639\u064A\u0627\u0631 ISO",
        ipv4: "\u0639\u0646\u0648\u0627\u0646 IPv4",
        ipv6: "\u0639\u0646\u0648\u0627\u0646 IPv6",
        cidrv4: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv4",
        cidrv6: "\u0645\u062F\u0649 \u0639\u0646\u0627\u0648\u064A\u0646 \u0628\u0635\u064A\u063A\u0629 IPv6",
        base64: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64-encoded",
        base64url: "\u0646\u064E\u0635 \u0628\u062A\u0631\u0645\u064A\u0632 base64url-encoded",
        json_string: "\u0646\u064E\u0635 \u0639\u0644\u0649 \u0647\u064A\u0626\u0629 JSON",
        e164: "\u0631\u0642\u0645 \u0647\u0627\u062A\u0641 \u0628\u0645\u0639\u064A\u0627\u0631 E.164",
        jwt: "JWT",
        template_literal: "\u0645\u062F\u062E\u0644"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 instanceof ${issue2.expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
            }
            return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${expected}\u060C \u0648\u0644\u0643\u0646 \u062A\u0645 \u0625\u062F\u062E\u0627\u0644 ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u0645\u062F\u062E\u0644\u0627\u062A \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644\u0629: \u064A\u0641\u062A\u0631\u0636 \u0625\u062F\u062E\u0627\u0644 ${stringifyPrimitive(issue2.values[0])}`;
            return `\u0627\u062E\u062A\u064A\u0627\u0631 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062A\u0648\u0642\u0639 \u0627\u0646\u062A\u0642\u0627\u0621 \u0623\u062D\u062F \u0647\u0630\u0647 \u0627\u0644\u062E\u064A\u0627\u0631\u0627\u062A: ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return ` \u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"}`;
            return `\u0623\u0643\u0628\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0623\u0646 \u062A\u0643\u0648\u0646 ${issue2.origin ?? "\u0627\u0644\u0642\u064A\u0645\u0629"} ${adj} ${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `\u0623\u0635\u063A\u0631 \u0645\u0646 \u0627\u0644\u0644\u0627\u0632\u0645: \u064A\u0641\u062A\u0631\u0636 \u0644\u0640 ${issue2.origin} \u0623\u0646 \u064A\u0643\u0648\u0646 ${adj} ${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0628\u062F\u0623 \u0628\u0640 "${issue2.prefix}"`;
            if (_issue.format === "ends_with")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0646\u062A\u0647\u064A \u0628\u0640 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0636\u0645\u0651\u064E\u0646 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u0646\u064E\u0635 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0637\u0627\u0628\u0642 \u0627\u0644\u0646\u0645\u0637 ${_issue.pattern}`;
            return `${FormatDictionary[_issue.format] ?? issue2.format} \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644`;
          }
          case "not_multiple_of":
            return `\u0631\u0642\u0645 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644: \u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0645\u0646 \u0645\u0636\u0627\u0639\u0641\u0627\u062A ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u0645\u0639\u0631\u0641${issue2.keys.length > 1 ? "\u0627\u062A" : ""} \u063A\u0631\u064A\u0628${issue2.keys.length > 1 ? "\u0629" : ""}: ${joinValues(issue2.keys, "\u060C ")}`;
          case "invalid_key":
            return `\u0645\u0639\u0631\u0641 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
          case "invalid_union":
            return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
          case "invalid_element":
            return `\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644 \u0641\u064A ${issue2.origin}`;
          default:
            return "\u0645\u062F\u062E\u0644 \u063A\u064A\u0631 \u0645\u0642\u0628\u0648\u0644";
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/az.js
function az_default() {
  return {
    localeError: error2()
  };
}
var error2;
var init_az = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/az.js"() {
    init_util();
    error2 = () => {
      const Sizable = {
        string: { unit: "simvol", verb: "olmal\u0131d\u0131r" },
        file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
        array: { unit: "element", verb: "olmal\u0131d\u0131r" },
        set: { unit: "element", verb: "olmal\u0131d\u0131r" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n instanceof ${issue2.expected}, daxil olan ${received}`;
            }
            return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${expected}, daxil olan ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Yanl\u0131\u015F d\u0259y\u0259r: g\xF6zl\u0259nil\u0259n ${stringifyPrimitive(issue2.values[0])}`;
            return `Yanl\u0131\u015F se\xE7im: a\u015Fa\u011F\u0131dak\u0131lardan biri olmal\u0131d\u0131r: ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element"}`;
            return `\xC7ox b\xF6y\xFCk: g\xF6zl\u0259nil\u0259n ${issue2.origin ?? "d\u0259y\u0259r"} ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            return `\xC7ox ki\xE7ik: g\xF6zl\u0259nil\u0259n ${issue2.origin} ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Yanl\u0131\u015F m\u0259tn: "${_issue.prefix}" il\u0259 ba\u015Flamal\u0131d\u0131r`;
            if (_issue.format === "ends_with")
              return `Yanl\u0131\u015F m\u0259tn: "${_issue.suffix}" il\u0259 bitm\u0259lidir`;
            if (_issue.format === "includes")
              return `Yanl\u0131\u015F m\u0259tn: "${_issue.includes}" daxil olmal\u0131d\u0131r`;
            if (_issue.format === "regex")
              return `Yanl\u0131\u015F m\u0259tn: ${_issue.pattern} \u015Fablonuna uy\u011Fun olmal\u0131d\u0131r`;
            return `Yanl\u0131\u015F ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Yanl\u0131\u015F \u0259d\u0259d: ${issue2.divisor} il\u0259 b\xF6l\xFCn\u0259 bil\u0259n olmal\u0131d\u0131r`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan a\xE7ar${issue2.keys.length > 1 ? "lar" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F a\xE7ar`;
          case "invalid_union":
            return "Yanl\u0131\u015F d\u0259y\u0259r";
          case "invalid_element":
            return `${issue2.origin} daxilind\u0259 yanl\u0131\u015F d\u0259y\u0259r`;
          default:
            return `Yanl\u0131\u015F d\u0259y\u0259r`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/be.js
function getBelarusianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
function be_default() {
  return {
    localeError: error3()
  };
}
var error3;
var init_be = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/be.js"() {
    init_util();
    error3 = () => {
      const Sizable = {
        string: {
          unit: {
            one: "\u0441\u0456\u043C\u0432\u0430\u043B",
            few: "\u0441\u0456\u043C\u0432\u0430\u043B\u044B",
            many: "\u0441\u0456\u043C\u0432\u0430\u043B\u0430\u045E"
          },
          verb: "\u043C\u0435\u0446\u044C"
        },
        array: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
          },
          verb: "\u043C\u0435\u0446\u044C"
        },
        set: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430\u045E"
          },
          verb: "\u043C\u0435\u0446\u044C"
        },
        file: {
          unit: {
            one: "\u0431\u0430\u0439\u0442",
            few: "\u0431\u0430\u0439\u0442\u044B",
            many: "\u0431\u0430\u0439\u0442\u0430\u045E"
          },
          verb: "\u043C\u0435\u0446\u044C"
        }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0443\u0432\u043E\u0434",
        email: "email \u0430\u0434\u0440\u0430\u0441",
        url: "URL",
        emoji: "\u044D\u043C\u043E\u0434\u0437\u0456",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0434\u0430\u0442\u0430 \u0456 \u0447\u0430\u0441",
        date: "ISO \u0434\u0430\u0442\u0430",
        time: "ISO \u0447\u0430\u0441",
        duration: "ISO \u043F\u0440\u0430\u0446\u044F\u0433\u043B\u0430\u0441\u0446\u044C",
        ipv4: "IPv4 \u0430\u0434\u0440\u0430\u0441",
        ipv6: "IPv6 \u0430\u0434\u0440\u0430\u0441",
        cidrv4: "IPv4 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
        cidrv6: "IPv6 \u0434\u044B\u044F\u043F\u0430\u0437\u043E\u043D",
        base64: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64",
        base64url: "\u0440\u0430\u0434\u043E\u043A \u0443 \u0444\u0430\u0440\u043C\u0430\u0446\u0435 base64url",
        json_string: "JSON \u0440\u0430\u0434\u043E\u043A",
        e164: "\u043D\u0443\u043C\u0430\u0440 E.164",
        jwt: "JWT",
        template_literal: "\u0443\u0432\u043E\u0434"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u043B\u0456\u043A",
        array: "\u043C\u0430\u0441\u0456\u045E"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F instanceof ${issue2.expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
            }
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u045E\u0441\u044F ${expected}, \u0430\u0442\u0440\u044B\u043C\u0430\u043D\u0430 ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F ${stringifyPrimitive(issue2.values[0])}`;
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0432\u0430\u0440\u044B\u044F\u043D\u0442: \u0447\u0430\u043A\u0430\u045E\u0441\u044F \u0430\u0434\u0437\u0456\u043D \u0437 ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              const maxValue = Number(issue2.maximum);
              const unit = getBelarusianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.maximum.toString()} ${unit}`;
            }
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u0432\u044F\u043B\u0456\u043A\u0456: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435"} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              const minValue = Number(issue2.minimum);
              const unit = getBelarusianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 ${sizing.verb} ${adj}${issue2.minimum.toString()} ${unit}`;
            }
            return `\u0417\u0430\u043D\u0430\u0434\u0442\u0430 \u043C\u0430\u043B\u044B: \u0447\u0430\u043A\u0430\u043B\u0430\u0441\u044F, \u0448\u0442\u043E ${issue2.origin} \u043F\u0430\u0432\u0456\u043D\u043D\u0430 \u0431\u044B\u0446\u044C ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u043F\u0430\u0447\u044B\u043D\u0430\u0446\u0446\u0430 \u0437 "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u0430\u043A\u0430\u043D\u0447\u0432\u0430\u0446\u0446\u0430 \u043D\u0430 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0437\u043C\u044F\u0448\u0447\u0430\u0446\u044C "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u0440\u0430\u0434\u043E\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0430\u0434\u043F\u0430\u0432\u044F\u0434\u0430\u0446\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043B\u0456\u043A: \u043F\u0430\u0432\u0456\u043D\u0435\u043D \u0431\u044B\u0446\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0441\u043F\u0430\u0437\u043D\u0430\u043D\u044B ${issue2.keys.length > 1 ? "\u043A\u043B\u044E\u0447\u044B" : "\u043A\u043B\u044E\u0447"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u043A\u043B\u044E\u0447 \u0443 ${issue2.origin}`;
          case "invalid_union":
            return "\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434";
          case "invalid_element":
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u0430\u0435 \u0437\u043D\u0430\u0447\u044D\u043D\u043D\u0435 \u045E ${issue2.origin}`;
          default:
            return `\u041D\u044F\u043F\u0440\u0430\u0432\u0456\u043B\u044C\u043D\u044B \u045E\u0432\u043E\u0434`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/bg.js
function bg_default() {
  return {
    localeError: error4()
  };
}
var error4;
var init_bg = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/bg.js"() {
    init_util();
    error4 = () => {
      const Sizable = {
        string: { unit: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
        file: { unit: "\u0431\u0430\u0439\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
        array: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" },
        set: { unit: "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430", verb: "\u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0432\u0445\u043E\u0434",
        email: "\u0438\u043C\u0435\u0439\u043B \u0430\u0434\u0440\u0435\u0441",
        url: "URL",
        emoji: "\u0435\u043C\u043E\u0434\u0436\u0438",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0432\u0440\u0435\u043C\u0435",
        date: "ISO \u0434\u0430\u0442\u0430",
        time: "ISO \u0432\u0440\u0435\u043C\u0435",
        duration: "ISO \u043F\u0440\u043E\u0434\u044A\u043B\u0436\u0438\u0442\u0435\u043B\u043D\u043E\u0441\u0442",
        ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
        ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
        cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        base64: "base64-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
        base64url: "base64url-\u043A\u043E\u0434\u0438\u0440\u0430\u043D \u043D\u0438\u0437",
        json_string: "JSON \u043D\u0438\u0437",
        e164: "E.164 \u043D\u043E\u043C\u0435\u0440",
        jwt: "JWT",
        template_literal: "\u0432\u0445\u043E\u0434"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0447\u0438\u0441\u043B\u043E",
        array: "\u043C\u0430\u0441\u0438\u0432"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
            }
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434: \u043E\u0447\u0430\u043A\u0432\u0430\u043D ${stringifyPrimitive(issue2.values[0])}`;
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u043E\u043F\u0446\u0438\u044F: \u043E\u0447\u0430\u043A\u0432\u0430\u043D\u043E \u0435\u0434\u043D\u043E \u043E\u0442 ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0430"}`;
            return `\u0422\u0432\u044A\u0440\u0434\u0435 \u0433\u043E\u043B\u044F\u043C\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin ?? "\u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442"} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0441\u044A\u0434\u044A\u0440\u0436\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `\u0422\u0432\u044A\u0440\u0434\u0435 \u043C\u0430\u043B\u043A\u043E: \u043E\u0447\u0430\u043A\u0432\u0430 \u0441\u0435 ${issue2.origin} \u0434\u0430 \u0431\u044A\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u0432\u0430 \u0441 "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0437\u0430\u0432\u044A\u0440\u0448\u0432\u0430 \u0441 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0432\u043A\u043B\u044E\u0447\u0432\u0430 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043D\u0438\u0437: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0441\u044A\u0432\u043F\u0430\u0434\u0430 \u0441 ${_issue.pattern}`;
            let invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D";
            if (_issue.format === "emoji")
              invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
            if (_issue.format === "datetime")
              invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
            if (_issue.format === "date")
              invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
            if (_issue.format === "time")
              invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E";
            if (_issue.format === "duration")
              invalid_adj = "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430";
            return `${invalid_adj} ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u043E \u0447\u0438\u0441\u043B\u043E: \u0442\u0440\u044F\u0431\u0432\u0430 \u0434\u0430 \u0431\u044A\u0434\u0435 \u043A\u0440\u0430\u0442\u043D\u043E \u043D\u0430 ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0437\u043F\u043E\u0437\u043D\u0430\u0442${issue2.keys.length > 1 ? "\u0438" : ""} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u043E\u0432\u0435" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434";
          case "invalid_element":
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u043D\u0430 \u0441\u0442\u043E\u0439\u043D\u043E\u0441\u0442 \u0432 ${issue2.origin}`;
          default:
            return `\u041D\u0435\u0432\u0430\u043B\u0438\u0434\u0435\u043D \u0432\u0445\u043E\u0434`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ca.js
function ca_default() {
  return {
    localeError: error5()
  };
}
var error5;
var init_ca = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ca.js"() {
    init_util();
    error5 = () => {
      const Sizable = {
        string: { unit: "car\xE0cters", verb: "contenir" },
        file: { unit: "bytes", verb: "contenir" },
        array: { unit: "elements", verb: "contenir" },
        set: { unit: "elements", verb: "contenir" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "entrada",
        email: "adre\xE7a electr\xF2nica",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "durada ISO",
        ipv4: "adre\xE7a IPv4",
        ipv6: "adre\xE7a IPv6",
        cidrv4: "rang IPv4",
        cidrv6: "rang IPv6",
        base64: "cadena codificada en base64",
        base64url: "cadena codificada en base64url",
        json_string: "cadena JSON",
        e164: "n\xFAmero E.164",
        jwt: "JWT",
        template_literal: "entrada"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Tipus inv\xE0lid: s'esperava instanceof ${issue2.expected}, s'ha rebut ${received}`;
            }
            return `Tipus inv\xE0lid: s'esperava ${expected}, s'ha rebut ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Valor inv\xE0lid: s'esperava ${stringifyPrimitive(issue2.values[0])}`;
            return `Opci\xF3 inv\xE0lida: s'esperava una de ${joinValues(issue2.values, " o ")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "com a m\xE0xim" : "menys de";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} contingu\xE9s ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
            return `Massa gran: s'esperava que ${issue2.origin ?? "el valor"} fos ${adj} ${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? "com a m\xEDnim" : "m\xE9s de";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Massa petit: s'esperava que ${issue2.origin} contingu\xE9s ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Massa petit: s'esperava que ${issue2.origin} fos ${adj} ${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `Format inv\xE0lid: ha de comen\xE7ar amb "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Format inv\xE0lid: ha d'acabar amb "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Format inv\xE0lid: ha d'incloure "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Format inv\xE0lid: ha de coincidir amb el patr\xF3 ${_issue.pattern}`;
            return `Format inv\xE0lid per a ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE0lid: ha de ser m\xFAltiple de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Clau${issue2.keys.length > 1 ? "s" : ""} no reconeguda${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Clau inv\xE0lida a ${issue2.origin}`;
          case "invalid_union":
            return "Entrada inv\xE0lida";
          // Could also be "Tipus d'uniÃ³ invÃ lid" but "Entrada invÃ lida" is more general
          case "invalid_element":
            return `Element inv\xE0lid a ${issue2.origin}`;
          default:
            return `Entrada inv\xE0lida`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/cs.js
function cs_default() {
  return {
    localeError: error6()
  };
}
var error6;
var init_cs = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/cs.js"() {
    init_util();
    error6 = () => {
      const Sizable = {
        string: { unit: "znak\u016F", verb: "m\xEDt" },
        file: { unit: "bajt\u016F", verb: "m\xEDt" },
        array: { unit: "prvk\u016F", verb: "m\xEDt" },
        set: { unit: "prvk\u016F", verb: "m\xEDt" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "regul\xE1rn\xED v\xFDraz",
        email: "e-mailov\xE1 adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "datum a \u010Das ve form\xE1tu ISO",
        date: "datum ve form\xE1tu ISO",
        time: "\u010Das ve form\xE1tu ISO",
        duration: "doba trv\xE1n\xED ISO",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "rozsah IPv4",
        cidrv6: "rozsah IPv6",
        base64: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64",
        base64url: "\u0159et\u011Bzec zak\xF3dovan\xFD ve form\xE1tu base64url",
        json_string: "\u0159et\u011Bzec ve form\xE1tu JSON",
        e164: "\u010D\xEDslo E.164",
        jwt: "JWT",
        template_literal: "vstup"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u010D\xEDslo",
        string: "\u0159et\u011Bzec",
        function: "funkce",
        array: "pole"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no instanceof ${issue2.expected}, obdr\u017Eeno ${received}`;
            }
            return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${expected}, obdr\u017Eeno ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Neplatn\xFD vstup: o\u010Dek\xE1v\xE1no ${stringifyPrimitive(issue2.values[0])}`;
            return `Neplatn\xE1 mo\u017Enost: o\u010Dek\xE1v\xE1na jedna z hodnot ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
            }
            return `Hodnota je p\u0159\xEDli\u0161 velk\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED m\xEDt ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "prvk\u016F"}`;
            }
            return `Hodnota je p\u0159\xEDli\u0161 mal\xE1: ${issue2.origin ?? "hodnota"} mus\xED b\xFDt ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Neplatn\xFD \u0159et\u011Bzec: mus\xED za\u010D\xEDnat na "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Neplatn\xFD \u0159et\u011Bzec: mus\xED kon\u010Dit na "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Neplatn\xFD \u0159et\u011Bzec: mus\xED obsahovat "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Neplatn\xFD \u0159et\u011Bzec: mus\xED odpov\xEDdat vzoru ${_issue.pattern}`;
            return `Neplatn\xFD form\xE1t ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Neplatn\xE9 \u010D\xEDslo: mus\xED b\xFDt n\xE1sobkem ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Nezn\xE1m\xE9 kl\xED\u010De: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Neplatn\xFD kl\xED\u010D v ${issue2.origin}`;
          case "invalid_union":
            return "Neplatn\xFD vstup";
          case "invalid_element":
            return `Neplatn\xE1 hodnota v ${issue2.origin}`;
          default:
            return `Neplatn\xFD vstup`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/da.js
function da_default() {
  return {
    localeError: error7()
  };
}
var error7;
var init_da = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/da.js"() {
    init_util();
    error7 = () => {
      const Sizable = {
        string: { unit: "tegn", verb: "havde" },
        file: { unit: "bytes", verb: "havde" },
        array: { unit: "elementer", verb: "indeholdt" },
        set: { unit: "elementer", verb: "indeholdt" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "e-mailadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkesl\xE6t",
        date: "ISO-dato",
        time: "ISO-klokkesl\xE6t",
        duration: "ISO-varighed",
        ipv4: "IPv4-omr\xE5de",
        ipv6: "IPv6-omr\xE5de",
        cidrv4: "IPv4-spektrum",
        cidrv6: "IPv6-spektrum",
        base64: "base64-kodet streng",
        base64url: "base64url-kodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        nan: "NaN",
        string: "streng",
        number: "tal",
        boolean: "boolean",
        array: "liste",
        object: "objekt",
        set: "s\xE6t",
        file: "fil"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Ugyldigt input: forventede instanceof ${issue2.expected}, fik ${received}`;
            }
            return `Ugyldigt input: forventede ${expected}, fik ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Ugyldig v\xE6rdi: forventede ${stringifyPrimitive(issue2.values[0])}`;
            return `Ugyldigt valg: forventede en af f\xF8lgende ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            if (sizing)
              return `For stor: forventede ${origin ?? "value"} ${sizing.verb} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
            return `For stor: forventede ${origin ?? "value"} havde ${adj} ${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            if (sizing) {
              return `For lille: forventede ${origin} ${sizing.verb} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `For lille: forventede ${origin} havde ${adj} ${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Ugyldig streng: skal starte med "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Ugyldig streng: skal ende med "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ugyldig streng: skal indeholde "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ugyldig streng: skal matche m\xF8nsteret ${_issue.pattern}`;
            return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Ugyldigt tal: skal v\xE6re deleligt med ${issue2.divisor}`;
          case "unrecognized_keys":
            return `${issue2.keys.length > 1 ? "Ukendte n\xF8gler" : "Ukendt n\xF8gle"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig n\xF8gle i ${issue2.origin}`;
          case "invalid_union":
            return "Ugyldigt input: matcher ingen af de tilladte typer";
          case "invalid_element":
            return `Ugyldig v\xE6rdi i ${issue2.origin}`;
          default:
            return `Ugyldigt input`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/de.js
function de_default() {
  return {
    localeError: error8()
  };
}
var error8;
var init_de = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/de.js"() {
    init_util();
    error8 = () => {
      const Sizable = {
        string: { unit: "Zeichen", verb: "zu haben" },
        file: { unit: "Bytes", verb: "zu haben" },
        array: { unit: "Elemente", verb: "zu haben" },
        set: { unit: "Elemente", verb: "zu haben" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "Eingabe",
        email: "E-Mail-Adresse",
        url: "URL",
        emoji: "Emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-Datum und -Uhrzeit",
        date: "ISO-Datum",
        time: "ISO-Uhrzeit",
        duration: "ISO-Dauer",
        ipv4: "IPv4-Adresse",
        ipv6: "IPv6-Adresse",
        cidrv4: "IPv4-Bereich",
        cidrv6: "IPv6-Bereich",
        base64: "Base64-codierter String",
        base64url: "Base64-URL-codierter String",
        json_string: "JSON-String",
        e164: "E.164-Nummer",
        jwt: "JWT",
        template_literal: "Eingabe"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "Zahl",
        array: "Array"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Ung\xFCltige Eingabe: erwartet instanceof ${issue2.expected}, erhalten ${received}`;
            }
            return `Ung\xFCltige Eingabe: erwartet ${expected}, erhalten ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Ung\xFCltige Eingabe: erwartet ${stringifyPrimitive(issue2.values[0])}`;
            return `Ung\xFCltige Option: erwartet eine von ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "Elemente"} hat`;
            return `Zu gro\xDF: erwartet, dass ${issue2.origin ?? "Wert"} ${adj}${issue2.maximum.toString()} ist`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} hat`;
            }
            return `Zu klein: erwartet, dass ${issue2.origin} ${adj}${issue2.minimum.toString()} ist`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Ung\xFCltiger String: muss mit "${_issue.prefix}" beginnen`;
            if (_issue.format === "ends_with")
              return `Ung\xFCltiger String: muss mit "${_issue.suffix}" enden`;
            if (_issue.format === "includes")
              return `Ung\xFCltiger String: muss "${_issue.includes}" enthalten`;
            if (_issue.format === "regex")
              return `Ung\xFCltiger String: muss dem Muster ${_issue.pattern} entsprechen`;
            return `Ung\xFCltig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Ung\xFCltige Zahl: muss ein Vielfaches von ${issue2.divisor} sein`;
          case "unrecognized_keys":
            return `${issue2.keys.length > 1 ? "Unbekannte Schl\xFCssel" : "Unbekannter Schl\xFCssel"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Ung\xFCltiger Schl\xFCssel in ${issue2.origin}`;
          case "invalid_union":
            return "Ung\xFCltige Eingabe";
          case "invalid_element":
            return `Ung\xFCltiger Wert in ${issue2.origin}`;
          default:
            return `Ung\xFCltige Eingabe`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/el.js
function el_default() {
  return {
    localeError: error9()
  };
}
var error9;
var init_el = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/el.js"() {
    init_util();
    error9 = () => {
      const Sizable = {
        string: { unit: "\u03C7\u03B1\u03C1\u03B1\u03BA\u03C4\u03AE\u03C1\u03B5\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
        file: { unit: "bytes", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
        array: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
        set: { unit: "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" },
        map: { unit: "\u03BA\u03B1\u03C4\u03B1\u03C7\u03C9\u03C1\u03AE\u03C3\u03B5\u03B9\u03C2", verb: "\u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2",
        email: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1 \u03BA\u03B1\u03B9 \u03CE\u03C1\u03B1",
        date: "ISO \u03B7\u03BC\u03B5\u03C1\u03BF\u03BC\u03B7\u03BD\u03AF\u03B1",
        time: "ISO \u03CE\u03C1\u03B1",
        duration: "ISO \u03B4\u03B9\u03AC\u03C1\u03BA\u03B5\u03B9\u03B1",
        ipv4: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv4",
        ipv6: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 IPv6",
        mac: "\u03B4\u03B9\u03B5\u03CD\u03B8\u03C5\u03BD\u03C3\u03B7 MAC",
        cidrv4: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv4",
        cidrv6: "\u03B5\u03CD\u03C1\u03BF\u03C2 IPv6",
        base64: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64",
        base64url: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC \u03BA\u03C9\u03B4\u03B9\u03BA\u03BF\u03C0\u03BF\u03B9\u03B7\u03BC\u03AD\u03BD\u03B7 \u03C3\u03B5 base64url",
        json_string: "\u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC JSON",
        e164: "\u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2 E.164",
        jwt: "JWT",
        template_literal: "\u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (typeof issue2.expected === "string" && /^[A-Z]/.test(issue2.expected)) {
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD instanceof ${issue2.expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
            }
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${expected}, \u03BB\u03AE\u03C6\u03B8\u03B7\u03BA\u03B5 ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${stringifyPrimitive(issue2.values[0])}`;
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03C0\u03B9\u03BB\u03BF\u03B3\u03AE: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD \u03AD\u03BD\u03B1 \u03B1\u03C0\u03CC ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u03C3\u03C4\u03BF\u03B9\u03C7\u03B5\u03AF\u03B1"}`;
            return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B5\u03B3\u03AC\u03BB\u03BF: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin ?? "\u03C4\u03B9\u03BC\u03AE"} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03AD\u03C7\u03B5\u03B9 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `\u03A0\u03BF\u03BB\u03CD \u03BC\u03B9\u03BA\u03C1\u03CC: \u03B1\u03BD\u03B1\u03BC\u03B5\u03BD\u03CC\u03C4\u03B1\u03BD ${issue2.origin} \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03BE\u03B5\u03BA\u03B9\u03BD\u03AC \u03BC\u03B5 "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B5\u03BB\u03B5\u03B9\u03CE\u03BD\u03B5\u03B9 \u03BC\u03B5 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C0\u03B5\u03C1\u03B9\u03AD\u03C7\u03B5\u03B9 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C3\u03C5\u03BC\u03B2\u03BF\u03BB\u03BF\u03C3\u03B5\u03B9\u03C1\u03AC: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03C4\u03B1\u03B9\u03C1\u03B9\u03AC\u03B6\u03B5\u03B9 \u03BC\u03B5 \u03C4\u03BF \u03BC\u03BF\u03C4\u03AF\u03B2\u03BF ${_issue.pattern}`;
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF: ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF\u03C2 \u03B1\u03C1\u03B9\u03B8\u03BC\u03CC\u03C2: \u03C0\u03C1\u03AD\u03C0\u03B5\u03B9 \u03BD\u03B1 \u03B5\u03AF\u03BD\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03B1\u03C0\u03BB\u03AC\u03C3\u03B9\u03BF \u03C4\u03BF\u03C5 ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u0386\u03B3\u03BD\u03C9\u03C3\u03C4${issue2.keys.length > 1 ? "\u03B1" : "\u03BF"} \u03BA\u03BB\u03B5\u03B9\u03B4${issue2.keys.length > 1 ? "\u03B9\u03AC" : "\u03AF"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03BF \u03BA\u03BB\u03B5\u03B9\u03B4\u03AF \u03C3\u03C4\u03BF ${issue2.origin}`;
          case "invalid_union":
            return "\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2";
          case "invalid_element":
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03C4\u03B9\u03BC\u03AE \u03C3\u03C4\u03BF ${issue2.origin}`;
          default:
            return `\u039C\u03B7 \u03AD\u03B3\u03BA\u03C5\u03C1\u03B7 \u03B5\u03AF\u03C3\u03BF\u03B4\u03BF\u03C2`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/en.js
function en_default() {
  return {
    localeError: error10()
  };
}
var error10;
var init_en = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/en.js"() {
    init_util();
    error10 = () => {
      const Sizable = {
        string: { unit: "characters", verb: "to have" },
        file: { unit: "bytes", verb: "to have" },
        array: { unit: "items", verb: "to have" },
        set: { unit: "items", verb: "to have" },
        map: { unit: "entries", verb: "to have" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "email address",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datetime",
        date: "ISO date",
        time: "ISO time",
        duration: "ISO duration",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        mac: "MAC address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded string",
        base64url: "base64url-encoded string",
        json_string: "JSON string",
        e164: "E.164 number",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        // Compatibility: "nan" -> "NaN" for display
        nan: "NaN"
        // All other type names omitted - they fall back to raw values via ?? operator
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            return `Invalid input: expected ${expected}, received ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
            return `Invalid option: expected one of ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Too big: expected ${issue2.origin ?? "value"} to have ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"}`;
            return `Too big: expected ${issue2.origin ?? "value"} to be ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Too small: expected ${issue2.origin} to have ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Too small: expected ${issue2.origin} to be ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `Invalid string: must start with "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Invalid string: must end with "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Invalid string: must include "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Invalid string: must match pattern ${_issue.pattern}`;
            return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Invalid number: must be a multiple of ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Unrecognized key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Invalid key in ${issue2.origin}`;
          case "invalid_union":
            if (issue2.options && Array.isArray(issue2.options) && issue2.options.length > 0) {
              const opts = issue2.options.map((o) => `'${o}'`).join(" | ");
              return `Invalid discriminator value. Expected ${opts}`;
            }
            return "Invalid input";
          case "invalid_element":
            return `Invalid value in ${issue2.origin}`;
          default:
            return `Invalid input`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/eo.js
function eo_default() {
  return {
    localeError: error11()
  };
}
var error11;
var init_eo = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/eo.js"() {
    init_util();
    error11 = () => {
      const Sizable = {
        string: { unit: "karaktrojn", verb: "havi" },
        file: { unit: "bajtojn", verb: "havi" },
        array: { unit: "elementojn", verb: "havi" },
        set: { unit: "elementojn", verb: "havi" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "enigo",
        email: "retadreso",
        url: "URL",
        emoji: "emo\u011Dio",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-datotempo",
        date: "ISO-dato",
        time: "ISO-tempo",
        duration: "ISO-da\u016Dro",
        ipv4: "IPv4-adreso",
        ipv6: "IPv6-adreso",
        cidrv4: "IPv4-rango",
        cidrv6: "IPv6-rango",
        base64: "64-ume kodita karaktraro",
        base64url: "URL-64-ume kodita karaktraro",
        json_string: "JSON-karaktraro",
        e164: "E.164-nombro",
        jwt: "JWT",
        template_literal: "enigo"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "nombro",
        array: "tabelo",
        null: "senvalora"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Nevalida enigo: atendi\u011Dis instanceof ${issue2.expected}, ricevi\u011Dis ${received}`;
            }
            return `Nevalida enigo: atendi\u011Dis ${expected}, ricevi\u011Dis ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Nevalida enigo: atendi\u011Dis ${stringifyPrimitive(issue2.values[0])}`;
            return `Nevalida opcio: atendi\u011Dis unu el ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementojn"}`;
            return `Tro granda: atendi\u011Dis ke ${issue2.origin ?? "valoro"} havu ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} havu ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Tro malgranda: atendi\u011Dis ke ${issue2.origin} estu ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Nevalida karaktraro: devas komenci\u011Di per "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Nevalida karaktraro: devas fini\u011Di per "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Nevalida karaktraro: devas inkluzivi "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Nevalida karaktraro: devas kongrui kun la modelo ${_issue.pattern}`;
            return `Nevalida ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Nevalida nombro: devas esti oblo de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Nekonata${issue2.keys.length > 1 ? "j" : ""} \u015Dlosilo${issue2.keys.length > 1 ? "j" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Nevalida \u015Dlosilo en ${issue2.origin}`;
          case "invalid_union":
            return "Nevalida enigo";
          case "invalid_element":
            return `Nevalida valoro en ${issue2.origin}`;
          default:
            return `Nevalida enigo`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/es.js
function es_default() {
  return {
    localeError: error12()
  };
}
var error12;
var init_es = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/es.js"() {
    init_util();
    error12 = () => {
      const Sizable = {
        string: { unit: "caracteres", verb: "tener" },
        file: { unit: "bytes", verb: "tener" },
        array: { unit: "elementos", verb: "tener" },
        set: { unit: "elementos", verb: "tener" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "entrada",
        email: "direcci\xF3n de correo electr\xF3nico",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "fecha y hora ISO",
        date: "fecha ISO",
        time: "hora ISO",
        duration: "duraci\xF3n ISO",
        ipv4: "direcci\xF3n IPv4",
        ipv6: "direcci\xF3n IPv6",
        cidrv4: "rango IPv4",
        cidrv6: "rango IPv6",
        base64: "cadena codificada en base64",
        base64url: "URL codificada en base64",
        json_string: "cadena JSON",
        e164: "n\xFAmero E.164",
        jwt: "JWT",
        template_literal: "entrada"
      };
      const TypeDictionary = {
        nan: "NaN",
        string: "texto",
        number: "n\xFAmero",
        boolean: "booleano",
        array: "arreglo",
        object: "objeto",
        set: "conjunto",
        file: "archivo",
        date: "fecha",
        bigint: "n\xFAmero grande",
        symbol: "s\xEDmbolo",
        undefined: "indefinido",
        null: "nulo",
        function: "funci\xF3n",
        map: "mapa",
        record: "registro",
        tuple: "tupla",
        enum: "enumeraci\xF3n",
        union: "uni\xF3n",
        literal: "literal",
        promise: "promesa",
        void: "vac\xEDo",
        never: "nunca",
        unknown: "desconocido",
        any: "cualquiera"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Entrada inv\xE1lida: se esperaba instanceof ${issue2.expected}, recibido ${received}`;
            }
            return `Entrada inv\xE1lida: se esperaba ${expected}, recibido ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Entrada inv\xE1lida: se esperaba ${stringifyPrimitive(issue2.values[0])}`;
            return `Opci\xF3n inv\xE1lida: se esperaba una de ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            if (sizing)
              return `Demasiado grande: se esperaba que ${origin ?? "valor"} tuviera ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
            return `Demasiado grande: se esperaba que ${origin ?? "valor"} fuera ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            if (sizing) {
              return `Demasiado peque\xF1o: se esperaba que ${origin} tuviera ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Demasiado peque\xF1o: se esperaba que ${origin} fuera ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Cadena inv\xE1lida: debe comenzar con "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Cadena inv\xE1lida: debe terminar en "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Cadena inv\xE1lida: debe incluir "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Cadena inv\xE1lida: debe coincidir con el patr\xF3n ${_issue.pattern}`;
            return `Inv\xE1lido ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE1lido: debe ser m\xFAltiplo de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Llave${issue2.keys.length > 1 ? "s" : ""} desconocida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Llave inv\xE1lida en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
          case "invalid_union":
            return "Entrada inv\xE1lida";
          case "invalid_element":
            return `Valor inv\xE1lido en ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
          default:
            return `Entrada inv\xE1lida`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fa.js
function fa_default() {
  return {
    localeError: error13()
  };
}
var error13;
var init_fa = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fa.js"() {
    init_util();
    error13 = () => {
      const Sizable = {
        string: { unit: "\u06A9\u0627\u0631\u0627\u06A9\u062A\u0631", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        file: { unit: "\u0628\u0627\u06CC\u062A", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        array: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" },
        set: { unit: "\u0622\u06CC\u062A\u0645", verb: "\u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0648\u0631\u0648\u062F\u06CC",
        email: "\u0622\u062F\u0631\u0633 \u0627\u06CC\u0645\u06CC\u0644",
        url: "URL",
        emoji: "\u0627\u06CC\u0645\u0648\u062C\u06CC",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "\u062A\u0627\u0631\u06CC\u062E \u0648 \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
        date: "\u062A\u0627\u0631\u06CC\u062E \u0627\u06CC\u0632\u0648",
        time: "\u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
        duration: "\u0645\u062F\u062A \u0632\u0645\u0627\u0646 \u0627\u06CC\u0632\u0648",
        ipv4: "IPv4 \u0622\u062F\u0631\u0633",
        ipv6: "IPv6 \u0622\u062F\u0631\u0633",
        cidrv4: "IPv4 \u062F\u0627\u0645\u0646\u0647",
        cidrv6: "IPv6 \u062F\u0627\u0645\u0646\u0647",
        base64: "base64-encoded \u0631\u0634\u062A\u0647",
        base64url: "base64url-encoded \u0631\u0634\u062A\u0647",
        json_string: "JSON \u0631\u0634\u062A\u0647",
        e164: "E.164 \u0639\u062F\u062F",
        jwt: "JWT",
        template_literal: "\u0648\u0631\u0648\u062F\u06CC"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0639\u062F\u062F",
        array: "\u0622\u0631\u0627\u06CC\u0647"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A instanceof ${issue2.expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
            }
            return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${expected} \u0645\u06CC\u200C\u0628\u0648\u062F\u060C ${received} \u062F\u0631\u06CC\u0627\u0641\u062A \u0634\u062F`;
          }
          case "invalid_value":
            if (issue2.values.length === 1) {
              return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A ${stringifyPrimitive(issue2.values[0])} \u0645\u06CC\u200C\u0628\u0648\u062F`;
            }
            return `\u06AF\u0632\u06CC\u0646\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0645\u06CC\u200C\u0628\u0627\u06CC\u0633\u062A \u06CC\u06A9\u06CC \u0627\u0632 ${joinValues(issue2.values, "|")} \u0645\u06CC\u200C\u0628\u0648\u062F`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631"} \u0628\u0627\u0634\u062F`;
            }
            return `\u062E\u06CC\u0644\u06CC \u0628\u0632\u0631\u06AF: ${issue2.origin ?? "\u0645\u0642\u062F\u0627\u0631"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0628\u0627\u0634\u062F`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0628\u0627\u0634\u062F`;
            }
            return `\u062E\u06CC\u0644\u06CC \u06A9\u0648\u0686\u06A9: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0628\u0627\u0634\u062F`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.prefix}" \u0634\u0631\u0648\u0639 \u0634\u0648\u062F`;
            }
            if (_issue.format === "ends_with") {
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 "${_issue.suffix}" \u062A\u0645\u0627\u0645 \u0634\u0648\u062F`;
            }
            if (_issue.format === "includes") {
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0634\u0627\u0645\u0644 "${_issue.includes}" \u0628\u0627\u0634\u062F`;
            }
            if (_issue.format === "regex") {
              return `\u0631\u0634\u062A\u0647 \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0628\u0627 \u0627\u0644\u06AF\u0648\u06CC ${_issue.pattern} \u0645\u0637\u0627\u0628\u0642\u062A \u062F\u0627\u0634\u062A\u0647 \u0628\u0627\u0634\u062F`;
            }
            return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
          }
          case "not_multiple_of":
            return `\u0639\u062F\u062F \u0646\u0627\u0645\u0639\u062A\u0628\u0631: \u0628\u0627\u06CC\u062F \u0645\u0636\u0631\u0628 ${issue2.divisor} \u0628\u0627\u0634\u062F`;
          case "unrecognized_keys":
            return `\u06A9\u0644\u06CC\u062F${issue2.keys.length > 1 ? "\u0647\u0627\u06CC" : ""} \u0646\u0627\u0634\u0646\u0627\u0633: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u06A9\u0644\u06CC\u062F \u0646\u0627\u0634\u0646\u0627\u0633 \u062F\u0631 ${issue2.origin}`;
          case "invalid_union":
            return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
          case "invalid_element":
            return `\u0645\u0642\u062F\u0627\u0631 \u0646\u0627\u0645\u0639\u062A\u0628\u0631 \u062F\u0631 ${issue2.origin}`;
          default:
            return `\u0648\u0631\u0648\u062F\u06CC \u0646\u0627\u0645\u0639\u062A\u0628\u0631`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fi.js
function fi_default() {
  return {
    localeError: error14()
  };
}
var error14;
var init_fi = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fi.js"() {
    init_util();
    error14 = () => {
      const Sizable = {
        string: { unit: "merkki\xE4", subject: "merkkijonon" },
        file: { unit: "tavua", subject: "tiedoston" },
        array: { unit: "alkiota", subject: "listan" },
        set: { unit: "alkiota", subject: "joukon" },
        number: { unit: "", subject: "luvun" },
        bigint: { unit: "", subject: "suuren kokonaisluvun" },
        int: { unit: "", subject: "kokonaisluvun" },
        date: { unit: "", subject: "p\xE4iv\xE4m\xE4\xE4r\xE4n" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "s\xE4\xE4nn\xF6llinen lauseke",
        email: "s\xE4hk\xF6postiosoite",
        url: "URL-osoite",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO-aikaleima",
        date: "ISO-p\xE4iv\xE4m\xE4\xE4r\xE4",
        time: "ISO-aika",
        duration: "ISO-kesto",
        ipv4: "IPv4-osoite",
        ipv6: "IPv6-osoite",
        cidrv4: "IPv4-alue",
        cidrv6: "IPv6-alue",
        base64: "base64-koodattu merkkijono",
        base64url: "base64url-koodattu merkkijono",
        json_string: "JSON-merkkijono",
        e164: "E.164-luku",
        jwt: "JWT",
        template_literal: "templaattimerkkijono"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Virheellinen tyyppi: odotettiin instanceof ${issue2.expected}, oli ${received}`;
            }
            return `Virheellinen tyyppi: odotettiin ${expected}, oli ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Virheellinen sy\xF6te: t\xE4ytyy olla ${stringifyPrimitive(issue2.values[0])}`;
            return `Virheellinen valinta: t\xE4ytyy olla yksi seuraavista: ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Liian suuri: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.maximum.toString()} ${sizing.unit}`.trim();
            }
            return `Liian suuri: arvon t\xE4ytyy olla ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Liian pieni: ${sizing.subject} t\xE4ytyy olla ${adj}${issue2.minimum.toString()} ${sizing.unit}`.trim();
            }
            return `Liian pieni: arvon t\xE4ytyy olla ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Virheellinen sy\xF6te: t\xE4ytyy alkaa "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Virheellinen sy\xF6te: t\xE4ytyy loppua "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Virheellinen sy\xF6te: t\xE4ytyy sis\xE4lt\xE4\xE4 "${_issue.includes}"`;
            if (_issue.format === "regex") {
              return `Virheellinen sy\xF6te: t\xE4ytyy vastata s\xE4\xE4nn\xF6llist\xE4 lauseketta ${_issue.pattern}`;
            }
            return `Virheellinen ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Virheellinen luku: t\xE4ytyy olla luvun ${issue2.divisor} monikerta`;
          case "unrecognized_keys":
            return `${issue2.keys.length > 1 ? "Tuntemattomat avaimet" : "Tuntematon avain"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return "Virheellinen avain tietueessa";
          case "invalid_union":
            return "Virheellinen unioni";
          case "invalid_element":
            return "Virheellinen arvo joukossa";
          default:
            return `Virheellinen sy\xF6te`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fr.js
function fr_default() {
  return {
    localeError: error15()
  };
}
var error15;
var init_fr = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fr.js"() {
    init_util();
    error15 = () => {
      const Sizable = {
        string: { unit: "caract\xE8res", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "\xE9l\xE9ments", verb: "avoir" },
        set: { unit: "\xE9l\xE9ments", verb: "avoir" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "entr\xE9e",
        email: "adresse e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date et heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "dur\xE9e ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "cha\xEEne encod\xE9e en base64",
        base64url: "cha\xEEne encod\xE9e en base64url",
        json_string: "cha\xEEne JSON",
        e164: "num\xE9ro E.164",
        jwt: "JWT",
        template_literal: "entr\xE9e"
      };
      const TypeDictionary = {
        string: "cha\xEEne",
        number: "nombre",
        int: "entier",
        boolean: "bool\xE9en",
        bigint: "grand entier",
        symbol: "symbole",
        undefined: "ind\xE9fini",
        null: "null",
        never: "jamais",
        void: "vide",
        date: "date",
        array: "tableau",
        object: "objet",
        tuple: "tuple",
        record: "enregistrement",
        map: "carte",
        set: "ensemble",
        file: "fichier",
        nonoptional: "non-optionnel",
        nan: "NaN",
        function: "fonction"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Entr\xE9e invalide : instanceof ${issue2.expected} attendu, ${received} re\xE7u`;
            }
            return `Entr\xE9e invalide : ${expected} attendu, ${received} re\xE7u`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Entr\xE9e invalide : ${stringifyPrimitive(issue2.values[0])} attendu`;
            return `Option invalide : une valeur parmi ${joinValues(issue2.values, "|")} attendue`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\xE9l\xE9ment(s)"}`;
            return `Trop grand : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            return `Trop petit : ${TypeDictionary[issue2.origin] ?? "valeur"} doit \xEAtre ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Cha\xEEne invalide : doit correspondre au mod\xE8le ${_issue.pattern}`;
            return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Cl\xE9 invalide dans ${issue2.origin}`;
          case "invalid_union":
            return "Entr\xE9e invalide";
          case "invalid_element":
            return `Valeur invalide dans ${issue2.origin}`;
          default:
            return `Entr\xE9e invalide`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fr-CA.js
function fr_CA_default() {
  return {
    localeError: error16()
  };
}
var error16;
var init_fr_CA = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/fr-CA.js"() {
    init_util();
    error16 = () => {
      const Sizable = {
        string: { unit: "caract\xE8res", verb: "avoir" },
        file: { unit: "octets", verb: "avoir" },
        array: { unit: "\xE9l\xE9ments", verb: "avoir" },
        set: { unit: "\xE9l\xE9ments", verb: "avoir" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "entr\xE9e",
        email: "adresse courriel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "date-heure ISO",
        date: "date ISO",
        time: "heure ISO",
        duration: "dur\xE9e ISO",
        ipv4: "adresse IPv4",
        ipv6: "adresse IPv6",
        cidrv4: "plage IPv4",
        cidrv6: "plage IPv6",
        base64: "cha\xEEne encod\xE9e en base64",
        base64url: "cha\xEEne encod\xE9e en base64url",
        json_string: "cha\xEEne JSON",
        e164: "num\xE9ro E.164",
        jwt: "JWT",
        template_literal: "entr\xE9e"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Entr\xE9e invalide : attendu instanceof ${issue2.expected}, re\xE7u ${received}`;
            }
            return `Entr\xE9e invalide : attendu ${expected}, re\xE7u ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Entr\xE9e invalide : attendu ${stringifyPrimitive(issue2.values[0])}`;
            return `Option invalide : attendu l'une des valeurs suivantes ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "\u2264" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} ait ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
            return `Trop grand : attendu que ${issue2.origin ?? "la valeur"} soit ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? "\u2265" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Trop petit : attendu que ${issue2.origin} ait ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Trop petit : attendu que ${issue2.origin} soit ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `Cha\xEEne invalide : doit commencer par "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Cha\xEEne invalide : doit se terminer par "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Cha\xEEne invalide : doit inclure "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Cha\xEEne invalide : doit correspondre au motif ${_issue.pattern}`;
            return `${FormatDictionary[_issue.format] ?? issue2.format} invalide`;
          }
          case "not_multiple_of":
            return `Nombre invalide : doit \xEAtre un multiple de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Cl\xE9${issue2.keys.length > 1 ? "s" : ""} non reconnue${issue2.keys.length > 1 ? "s" : ""} : ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Cl\xE9 invalide dans ${issue2.origin}`;
          case "invalid_union":
            return "Entr\xE9e invalide";
          case "invalid_element":
            return `Valeur invalide dans ${issue2.origin}`;
          default:
            return `Entr\xE9e invalide`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/he.js
function he_default() {
  return {
    localeError: error17()
  };
}
var error17;
var init_he = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/he.js"() {
    init_util();
    error17 = () => {
      const TypeNames = {
        string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA", gender: "f" },
        number: { label: "\u05DE\u05E1\u05E4\u05E8", gender: "m" },
        boolean: { label: "\u05E2\u05E8\u05DA \u05D1\u05D5\u05DC\u05D9\u05D0\u05E0\u05D9", gender: "m" },
        bigint: { label: "BigInt", gender: "m" },
        date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA", gender: "m" },
        array: { label: "\u05DE\u05E2\u05E8\u05DA", gender: "m" },
        object: { label: "\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8", gender: "m" },
        null: { label: "\u05E2\u05E8\u05DA \u05E8\u05D9\u05E7 (null)", gender: "m" },
        undefined: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05DE\u05D5\u05D2\u05D3\u05E8 (undefined)", gender: "m" },
        symbol: { label: "\u05E1\u05D9\u05DE\u05D1\u05D5\u05DC (Symbol)", gender: "m" },
        function: { label: "\u05E4\u05D5\u05E0\u05E7\u05E6\u05D9\u05D4", gender: "f" },
        map: { label: "\u05DE\u05E4\u05D4 (Map)", gender: "f" },
        set: { label: "\u05E7\u05D1\u05D5\u05E6\u05D4 (Set)", gender: "f" },
        file: { label: "\u05E7\u05D5\u05D1\u05E5", gender: "m" },
        promise: { label: "Promise", gender: "m" },
        NaN: { label: "NaN", gender: "m" },
        unknown: { label: "\u05E2\u05E8\u05DA \u05DC\u05D0 \u05D9\u05D3\u05D5\u05E2", gender: "m" },
        value: { label: "\u05E2\u05E8\u05DA", gender: "m" }
      };
      const Sizable = {
        string: { unit: "\u05EA\u05D5\u05D5\u05D9\u05DD", shortLabel: "\u05E7\u05E6\u05E8", longLabel: "\u05D0\u05E8\u05D5\u05DA" },
        file: { unit: "\u05D1\u05D9\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
        array: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
        set: { unit: "\u05E4\u05E8\u05D9\u05D8\u05D9\u05DD", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" },
        number: { unit: "", shortLabel: "\u05E7\u05D8\u05DF", longLabel: "\u05D2\u05D3\u05D5\u05DC" }
        // no unit
      };
      const typeEntry = (t) => t ? TypeNames[t] : void 0;
      const typeLabel = (t) => {
        const e = typeEntry(t);
        if (e)
          return e.label;
        return t ?? TypeNames.unknown.label;
      };
      const withDefinite = (t) => `\u05D4${typeLabel(t)}`;
      const verbFor = (t) => {
        const e = typeEntry(t);
        const gender = e?.gender ?? "m";
        return gender === "f" ? "\u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05D9\u05D5\u05EA" : "\u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA";
      };
      const getSizing = (origin) => {
        if (!origin)
          return null;
        return Sizable[origin] ?? null;
      };
      const FormatDictionary = {
        regex: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        email: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", gender: "f" },
        url: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E8\u05E9\u05EA", gender: "f" },
        emoji: { label: "\u05D0\u05D9\u05DE\u05D5\u05D2'\u05D9", gender: "m" },
        uuid: { label: "UUID", gender: "m" },
        nanoid: { label: "nanoid", gender: "m" },
        guid: { label: "GUID", gender: "m" },
        cuid: { label: "cuid", gender: "m" },
        cuid2: { label: "cuid2", gender: "m" },
        ulid: { label: "ULID", gender: "m" },
        xid: { label: "XID", gender: "m" },
        ksuid: { label: "KSUID", gender: "m" },
        datetime: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D5\u05D6\u05DE\u05DF ISO", gender: "m" },
        date: { label: "\u05EA\u05D0\u05E8\u05D9\u05DA ISO", gender: "m" },
        time: { label: "\u05D6\u05DE\u05DF ISO", gender: "m" },
        duration: { label: "\u05DE\u05E9\u05DA \u05D6\u05DE\u05DF ISO", gender: "m" },
        ipv4: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv4", gender: "f" },
        ipv6: { label: "\u05DB\u05EA\u05D5\u05D1\u05EA IPv6", gender: "f" },
        cidrv4: { label: "\u05D8\u05D5\u05D5\u05D7 IPv4", gender: "m" },
        cidrv6: { label: "\u05D8\u05D5\u05D5\u05D7 IPv6", gender: "m" },
        base64: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64", gender: "f" },
        base64url: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D1\u05D1\u05E1\u05D9\u05E1 64 \u05DC\u05DB\u05EA\u05D5\u05D1\u05D5\u05EA \u05E8\u05E9\u05EA", gender: "f" },
        json_string: { label: "\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA JSON", gender: "f" },
        e164: { label: "\u05DE\u05E1\u05E4\u05E8 E.164", gender: "m" },
        jwt: { label: "JWT", gender: "m" },
        ends_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        includes: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        lowercase: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        starts_with: { label: "\u05E7\u05DC\u05D8", gender: "m" },
        uppercase: { label: "\u05E7\u05DC\u05D8", gender: "m" }
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expectedKey = issue2.expected;
            const expected = TypeDictionary[expectedKey ?? ""] ?? typeLabel(expectedKey);
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? TypeNames[receivedType]?.label ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA instanceof ${issue2.expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
            }
            return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${expected}, \u05D4\u05EA\u05E7\u05D1\u05DC ${received}`;
          }
          case "invalid_value": {
            if (issue2.values.length === 1) {
              return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05E2\u05E8\u05DA \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA ${stringifyPrimitive(issue2.values[0])}`;
            }
            const stringified = issue2.values.map((v) => stringifyPrimitive(v));
            if (issue2.values.length === 2) {
              return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${stringified[0]} \u05D0\u05D5 ${stringified[1]}`;
            }
            const lastValue = stringified[stringified.length - 1];
            const restValues = stringified.slice(0, -1).join(", ");
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D4\u05D0\u05E4\u05E9\u05E8\u05D5\u05D9\u05D5\u05EA \u05D4\u05DE\u05EA\u05D0\u05D9\u05DE\u05D5\u05EA \u05D4\u05DF ${restValues} \u05D0\u05D5 ${lastValue}`;
          }
          case "too_big": {
            const sizing = getSizing(issue2.origin);
            const subject = withDefinite(issue2.origin ?? "value");
            if (issue2.origin === "string") {
              return `${sizing?.longLabel ?? "\u05D0\u05E8\u05D5\u05DA"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.maximum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA" : "\u05DC\u05DB\u05DC \u05D4\u05D9\u05D5\u05EA\u05E8"}`.trim();
            }
            if (issue2.origin === "number") {
              const comparison = issue2.inclusive ? `\u05E7\u05D8\u05DF \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.maximum}` : `\u05E7\u05D8\u05DF \u05DE-${issue2.maximum}`;
              return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
            }
            if (issue2.origin === "array" || issue2.origin === "set") {
              const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
              const comparison = issue2.inclusive ? `${issue2.maximum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05E4\u05D7\u05D5\u05EA` : `\u05E4\u05D7\u05D5\u05EA \u05DE-${issue2.maximum} ${sizing?.unit ?? ""}`;
              return `\u05D2\u05D3\u05D5\u05DC \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
            }
            const adj = issue2.inclusive ? "<=" : "<";
            const be = verbFor(issue2.origin ?? "value");
            if (sizing?.unit) {
              return `${sizing.longLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
            }
            return `${sizing?.longLabel ?? "\u05D2\u05D3\u05D5\u05DC"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const sizing = getSizing(issue2.origin);
            const subject = withDefinite(issue2.origin ?? "value");
            if (issue2.origin === "string") {
              return `${sizing?.shortLabel ?? "\u05E7\u05E6\u05E8"} \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DB\u05D4 \u05DC\u05D4\u05DB\u05D9\u05DC ${issue2.minimum.toString()} ${sizing?.unit ?? ""} ${issue2.inclusive ? "\u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8" : "\u05DC\u05E4\u05D7\u05D5\u05EA"}`.trim();
            }
            if (issue2.origin === "number") {
              const comparison = issue2.inclusive ? `\u05D2\u05D3\u05D5\u05DC \u05D0\u05D5 \u05E9\u05D5\u05D5\u05D4 \u05DC-${issue2.minimum}` : `\u05D2\u05D3\u05D5\u05DC \u05DE-${issue2.minimum}`;
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} \u05E6\u05E8\u05D9\u05DA \u05DC\u05D4\u05D9\u05D5\u05EA ${comparison}`;
            }
            if (issue2.origin === "array" || issue2.origin === "set") {
              const verb = issue2.origin === "set" ? "\u05E6\u05E8\u05D9\u05DB\u05D4" : "\u05E6\u05E8\u05D9\u05DA";
              if (issue2.minimum === 1 && issue2.inclusive) {
                const singularPhrase = issue2.origin === "set" ? "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3" : "\u05DC\u05E4\u05D7\u05D5\u05EA \u05E4\u05E8\u05D9\u05D8 \u05D0\u05D7\u05D3";
                return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${singularPhrase}`;
              }
              const comparison = issue2.inclusive ? `${issue2.minimum} ${sizing?.unit ?? ""} \u05D0\u05D5 \u05D9\u05D5\u05EA\u05E8` : `\u05D9\u05D5\u05EA\u05E8 \u05DE-${issue2.minimum} ${sizing?.unit ?? ""}`;
              return `\u05E7\u05D8\u05DF \u05DE\u05D3\u05D9: ${subject} ${verb} \u05DC\u05D4\u05DB\u05D9\u05DC ${comparison}`.trim();
            }
            const adj = issue2.inclusive ? ">=" : ">";
            const be = verbFor(issue2.origin ?? "value");
            if (sizing?.unit) {
              return `${sizing.shortLabel} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `${sizing?.shortLabel ?? "\u05E7\u05D8\u05DF"} \u05DE\u05D3\u05D9: ${subject} ${be} ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D7\u05D9\u05DC \u05D1 "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05E1\u05EA\u05D9\u05D9\u05DD \u05D1 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05DB\u05DC\u05D5\u05DC "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u05D4\u05DE\u05D7\u05E8\u05D5\u05D6\u05EA \u05D7\u05D9\u05D9\u05D1\u05EA \u05DC\u05D4\u05EA\u05D0\u05D9\u05DD \u05DC\u05EA\u05D1\u05E0\u05D9\u05EA ${_issue.pattern}`;
            const nounEntry = FormatDictionary[_issue.format];
            const noun = nounEntry?.label ?? _issue.format;
            const gender = nounEntry?.gender ?? "m";
            const adjective = gender === "f" ? "\u05EA\u05E7\u05D9\u05E0\u05D4" : "\u05EA\u05E7\u05D9\u05DF";
            return `${noun} \u05DC\u05D0 ${adjective}`;
          }
          case "not_multiple_of":
            return `\u05DE\u05E1\u05E4\u05E8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF: \u05D7\u05D9\u05D9\u05D1 \u05DC\u05D4\u05D9\u05D5\u05EA \u05DE\u05DB\u05E4\u05DC\u05D4 \u05E9\u05DC ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u05DE\u05E4\u05EA\u05D7${issue2.keys.length > 1 ? "\u05D5\u05EA" : ""} \u05DC\u05D0 \u05DE\u05D6\u05D5\u05D4${issue2.keys.length > 1 ? "\u05D9\u05DD" : "\u05D4"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key": {
            return `\u05E9\u05D3\u05D4 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1\u05D0\u05D5\u05D1\u05D9\u05D9\u05E7\u05D8`;
          }
          case "invalid_union":
            return "\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF";
          case "invalid_element": {
            const place = withDefinite(issue2.origin ?? "array");
            return `\u05E2\u05E8\u05DA \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF \u05D1${place}`;
          }
          default:
            return `\u05E7\u05DC\u05D8 \u05DC\u05D0 \u05EA\u05E7\u05D9\u05DF`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/hr.js
function hr_default() {
  return {
    localeError: error18()
  };
}
var error18;
var init_hr = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/hr.js"() {
    init_util();
    error18 = () => {
      const Sizable = {
        string: { unit: "znakova", verb: "imati" },
        file: { unit: "bajtova", verb: "imati" },
        array: { unit: "stavki", verb: "imati" },
        set: { unit: "stavki", verb: "imati" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "unos",
        email: "email adresa",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum i vrijeme",
        date: "ISO datum",
        time: "ISO vrijeme",
        duration: "ISO trajanje",
        ipv4: "IPv4 adresa",
        ipv6: "IPv6 adresa",
        cidrv4: "IPv4 raspon",
        cidrv6: "IPv6 raspon",
        base64: "base64 kodirani tekst",
        base64url: "base64url kodirani tekst",
        json_string: "JSON tekst",
        e164: "E.164 broj",
        jwt: "JWT",
        template_literal: "unos"
      };
      const TypeDictionary = {
        nan: "NaN",
        string: "tekst",
        number: "broj",
        boolean: "boolean",
        array: "niz",
        object: "objekt",
        set: "skup",
        file: "datoteka",
        date: "datum",
        bigint: "bigint",
        symbol: "simbol",
        undefined: "undefined",
        null: "null",
        function: "funkcija",
        map: "mapa"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Neispravan unos: o\u010Dekuje se instanceof ${issue2.expected}, a primljeno je ${received}`;
            }
            return `Neispravan unos: o\u010Dekuje se ${expected}, a primljeno je ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Neispravna vrijednost: o\u010Dekivano ${stringifyPrimitive(issue2.values[0])}`;
            return `Neispravna opcija: o\u010Dekivano jedno od ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            if (sizing)
              return `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} ima ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemenata"}`;
            return `Preveliko: o\u010Dekivano da ${origin ?? "vrijednost"} bude ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            if (sizing) {
              return `Premalo: o\u010Dekivano da ${origin} ima ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Premalo: o\u010Dekivano da ${origin} bude ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Neispravan tekst: mora zapo\u010Dinjati s "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Neispravan tekst: mora zavr\u0161avati s "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Neispravan tekst: mora sadr\u017Eavati "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Neispravan tekst: mora odgovarati uzorku ${_issue.pattern}`;
            return `Neispravna ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Neispravan broj: mora biti vi\u0161ekratnik od ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Neprepoznat${issue2.keys.length > 1 ? "i klju\u010Devi" : " klju\u010D"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Neispravan klju\u010D u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
          case "invalid_union":
            return "Neispravan unos";
          case "invalid_element":
            return `Neispravna vrijednost u ${TypeDictionary[issue2.origin] ?? issue2.origin}`;
          default:
            return `Neispravan unos`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/hu.js
function hu_default() {
  return {
    localeError: error19()
  };
}
var error19;
var init_hu = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/hu.js"() {
    init_util();
    error19 = () => {
      const Sizable = {
        string: { unit: "karakter", verb: "legyen" },
        file: { unit: "byte", verb: "legyen" },
        array: { unit: "elem", verb: "legyen" },
        set: { unit: "elem", verb: "legyen" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "bemenet",
        email: "email c\xEDm",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO id\u0151b\xE9lyeg",
        date: "ISO d\xE1tum",
        time: "ISO id\u0151",
        duration: "ISO id\u0151intervallum",
        ipv4: "IPv4 c\xEDm",
        ipv6: "IPv6 c\xEDm",
        cidrv4: "IPv4 tartom\xE1ny",
        cidrv6: "IPv6 tartom\xE1ny",
        base64: "base64-k\xF3dolt string",
        base64url: "base64url-k\xF3dolt string",
        json_string: "JSON string",
        e164: "E.164 sz\xE1m",
        jwt: "JWT",
        template_literal: "bemenet"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "sz\xE1m",
        array: "t\xF6mb"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k instanceof ${issue2.expected}, a kapott \xE9rt\xE9k ${received}`;
            }
            return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${expected}, a kapott \xE9rt\xE9k ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\xC9rv\xE9nytelen bemenet: a v\xE1rt \xE9rt\xE9k ${stringifyPrimitive(issue2.values[0])}`;
            return `\xC9rv\xE9nytelen opci\xF3: valamelyik \xE9rt\xE9k v\xE1rt ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `T\xFAl nagy: ${issue2.origin ?? "\xE9rt\xE9k"} m\xE9rete t\xFAl nagy ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elem"}`;
            return `T\xFAl nagy: a bemeneti \xE9rt\xE9k ${issue2.origin ?? "\xE9rt\xE9k"} t\xFAl nagy: ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} m\xE9rete t\xFAl kicsi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `T\xFAl kicsi: a bemeneti \xE9rt\xE9k ${issue2.origin} t\xFAl kicsi ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\xC9rv\xE9nytelen string: "${_issue.prefix}" \xE9rt\xE9kkel kell kezd\u0151dnie`;
            if (_issue.format === "ends_with")
              return `\xC9rv\xE9nytelen string: "${_issue.suffix}" \xE9rt\xE9kkel kell v\xE9gz\u0151dnie`;
            if (_issue.format === "includes")
              return `\xC9rv\xE9nytelen string: "${_issue.includes}" \xE9rt\xE9ket kell tartalmaznia`;
            if (_issue.format === "regex")
              return `\xC9rv\xE9nytelen string: ${_issue.pattern} mint\xE1nak kell megfelelnie`;
            return `\xC9rv\xE9nytelen ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\xC9rv\xE9nytelen sz\xE1m: ${issue2.divisor} t\xF6bbsz\xF6r\xF6s\xE9nek kell lennie`;
          case "unrecognized_keys":
            return `Ismeretlen kulcs${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\xC9rv\xE9nytelen kulcs ${issue2.origin}`;
          case "invalid_union":
            return "\xC9rv\xE9nytelen bemenet";
          case "invalid_element":
            return `\xC9rv\xE9nytelen \xE9rt\xE9k: ${issue2.origin}`;
          default:
            return `\xC9rv\xE9nytelen bemenet`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/hy.js
function getArmenianPlural(count, one, many) {
  return Math.abs(count) === 1 ? one : many;
}
function withDefiniteArticle(word) {
  if (!word)
    return "";
  const vowels = ["\u0561", "\u0565", "\u0568", "\u056B", "\u0578", "\u0578\u0582", "\u0585"];
  const lastChar = word[word.length - 1];
  return word + (vowels.includes(lastChar) ? "\u0576" : "\u0568");
}
function hy_default() {
  return {
    localeError: error20()
  };
}
var error20;
var init_hy = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/hy.js"() {
    init_util();
    error20 = () => {
      const Sizable = {
        string: {
          unit: {
            one: "\u0576\u0577\u0561\u0576",
            many: "\u0576\u0577\u0561\u0576\u0576\u0565\u0580"
          },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
        },
        file: {
          unit: {
            one: "\u0562\u0561\u0575\u0569",
            many: "\u0562\u0561\u0575\u0569\u0565\u0580"
          },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
        },
        array: {
          unit: {
            one: "\u057F\u0561\u0580\u0580",
            many: "\u057F\u0561\u0580\u0580\u0565\u0580"
          },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
        },
        set: {
          unit: {
            one: "\u057F\u0561\u0580\u0580",
            many: "\u057F\u0561\u0580\u0580\u0565\u0580"
          },
          verb: "\u0578\u0582\u0576\u0565\u0576\u0561\u056C"
        }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0574\u0578\u0582\u057F\u0584",
        email: "\u0567\u056C. \u0570\u0561\u057D\u0581\u0565",
        url: "URL",
        emoji: "\u0567\u0574\u0578\u057B\u056B",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E \u0587 \u056A\u0561\u0574",
        date: "ISO \u0561\u0574\u057D\u0561\u0569\u056B\u057E",
        time: "ISO \u056A\u0561\u0574",
        duration: "ISO \u057F\u0587\u0578\u0572\u0578\u0582\u0569\u0575\u0578\u0582\u0576",
        ipv4: "IPv4 \u0570\u0561\u057D\u0581\u0565",
        ipv6: "IPv6 \u0570\u0561\u057D\u0581\u0565",
        cidrv4: "IPv4 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
        cidrv6: "IPv6 \u0574\u056B\u057B\u0561\u056F\u0561\u0575\u0584",
        base64: "base64 \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
        base64url: "base64url \u0571\u0587\u0561\u0579\u0561\u0583\u0578\u057E \u057F\u0578\u0572",
        json_string: "JSON \u057F\u0578\u0572",
        e164: "E.164 \u0570\u0561\u0574\u0561\u0580",
        jwt: "JWT",
        template_literal: "\u0574\u0578\u0582\u057F\u0584"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0569\u056B\u057E",
        array: "\u0566\u0561\u0576\u0563\u057E\u0561\u056E"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 instanceof ${issue2.expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
            }
            return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${expected}, \u057D\u057F\u0561\u0581\u057E\u0565\u056C \u0567 ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 ${stringifyPrimitive(issue2.values[1])}`;
            return `\u054D\u056D\u0561\u056C \u057F\u0561\u0580\u0562\u0565\u0580\u0561\u056F\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567\u0580 \u0570\u0565\u057F\u0587\u0575\u0561\u056C\u0576\u0565\u0580\u056B\u0581 \u0574\u0565\u056F\u0568\u055D ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              const maxValue = Number(issue2.maximum);
              const unit = getArmenianPlural(maxValue, sizing.unit.one, sizing.unit.many);
              return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.maximum.toString()} ${unit}`;
            }
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0574\u0565\u056E \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin ?? "\u0561\u0580\u056A\u0565\u0584")} \u056C\u056B\u0576\u056B ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              const minValue = Number(issue2.minimum);
              const unit = getArmenianPlural(minValue, sizing.unit.one, sizing.unit.many);
              return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056F\u0578\u0582\u0576\u0565\u0576\u0561 ${adj}${issue2.minimum.toString()} ${unit}`;
            }
            return `\u0549\u0561\u0583\u0561\u0566\u0561\u0576\u0581 \u0583\u0578\u0584\u0580 \u0561\u0580\u056A\u0565\u0584\u2024 \u057D\u057A\u0561\u057D\u057E\u0578\u0582\u0574 \u0567, \u0578\u0580 ${withDefiniteArticle(issue2.origin)} \u056C\u056B\u0576\u056B ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057D\u056F\u057D\u057E\u056B "${_issue.prefix}"-\u0578\u057E`;
            if (_issue.format === "ends_with")
              return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0561\u057E\u0561\u0580\u057F\u057E\u056B "${_issue.suffix}"-\u0578\u057E`;
            if (_issue.format === "includes")
              return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u057A\u0561\u0580\u0578\u0582\u0576\u0561\u056F\u056B "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u054D\u056D\u0561\u056C \u057F\u0578\u0572\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0570\u0561\u0574\u0561\u057A\u0561\u057F\u0561\u057D\u056D\u0561\u0576\u056B ${_issue.pattern} \u0571\u0587\u0561\u0579\u0561\u0583\u056B\u0576`;
            return `\u054D\u056D\u0561\u056C ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u054D\u056D\u0561\u056C \u0569\u056B\u057E\u2024 \u057A\u0565\u057F\u0584 \u0567 \u0562\u0561\u0566\u0574\u0561\u057A\u0561\u057F\u056B\u056F \u056C\u056B\u0576\u056B ${issue2.divisor}-\u056B`;
          case "unrecognized_keys":
            return `\u0549\u0573\u0561\u0576\u0561\u0579\u057E\u0561\u056E \u0562\u0561\u0576\u0561\u056C\u056B${issue2.keys.length > 1 ? "\u0576\u0565\u0580" : ""}. ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u054D\u056D\u0561\u056C \u0562\u0561\u0576\u0561\u056C\u056B ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
          case "invalid_union":
            return "\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574";
          case "invalid_element":
            return `\u054D\u056D\u0561\u056C \u0561\u0580\u056A\u0565\u0584 ${withDefiniteArticle(issue2.origin)}-\u0578\u0582\u0574`;
          default:
            return `\u054D\u056D\u0561\u056C \u0574\u0578\u0582\u057F\u0584\u0561\u0563\u0580\u0578\u0582\u0574`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/id.js
function id_default() {
  return {
    localeError: error21()
  };
}
var error21;
var init_id = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/id.js"() {
    init_util();
    error21 = () => {
      const Sizable = {
        string: { unit: "karakter", verb: "memiliki" },
        file: { unit: "byte", verb: "memiliki" },
        array: { unit: "item", verb: "memiliki" },
        set: { unit: "item", verb: "memiliki" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "alamat email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tanggal dan waktu format ISO",
        date: "tanggal format ISO",
        time: "jam format ISO",
        duration: "durasi format ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "rentang alamat IPv4",
        cidrv6: "rentang alamat IPv6",
        base64: "string dengan enkode base64",
        base64url: "string dengan enkode base64url",
        json_string: "string JSON",
        e164: "angka E.164",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Input tidak valid: diharapkan instanceof ${issue2.expected}, diterima ${received}`;
            }
            return `Input tidak valid: diharapkan ${expected}, diterima ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Input tidak valid: diharapkan ${stringifyPrimitive(issue2.values[0])}`;
            return `Pilihan tidak valid: diharapkan salah satu dari ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} memiliki ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
            return `Terlalu besar: diharapkan ${issue2.origin ?? "value"} menjadi ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Terlalu kecil: diharapkan ${issue2.origin} memiliki ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Terlalu kecil: diharapkan ${issue2.origin} menjadi ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `String tidak valid: harus dimulai dengan "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `String tidak valid: harus berakhir dengan "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `String tidak valid: harus menyertakan "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `String tidak valid: harus sesuai pola ${_issue.pattern}`;
            return `${FormatDictionary[_issue.format] ?? issue2.format} tidak valid`;
          }
          case "not_multiple_of":
            return `Angka tidak valid: harus kelipatan dari ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak valid di ${issue2.origin}`;
          case "invalid_union":
            return "Input tidak valid";
          case "invalid_element":
            return `Nilai tidak valid di ${issue2.origin}`;
          default:
            return `Input tidak valid`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/is.js
function is_default() {
  return {
    localeError: error22()
  };
}
var error22;
var init_is = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/is.js"() {
    init_util();
    error22 = () => {
      const Sizable = {
        string: { unit: "stafi", verb: "a\xF0 hafa" },
        file: { unit: "b\xE6ti", verb: "a\xF0 hafa" },
        array: { unit: "hluti", verb: "a\xF0 hafa" },
        set: { unit: "hluti", verb: "a\xF0 hafa" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "gildi",
        email: "netfang",
        url: "vefsl\xF3\xF0",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dagsetning og t\xEDmi",
        date: "ISO dagsetning",
        time: "ISO t\xEDmi",
        duration: "ISO t\xEDmalengd",
        ipv4: "IPv4 address",
        ipv6: "IPv6 address",
        cidrv4: "IPv4 range",
        cidrv6: "IPv6 range",
        base64: "base64-encoded strengur",
        base64url: "base64url-encoded strengur",
        json_string: "JSON strengur",
        e164: "E.164 t\xF6lugildi",
        jwt: "JWT",
        template_literal: "gildi"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "n\xFAmer",
        array: "fylki"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera instanceof ${issue2.expected}`;
            }
            return `Rangt gildi: \xDE\xFA sl\xF3st inn ${received} \xFEar sem \xE1 a\xF0 vera ${expected}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Rangt gildi: gert r\xE1\xF0 fyrir ${stringifyPrimitive(issue2.values[0])}`;
            return `\xD3gilt val: m\xE1 vera eitt af eftirfarandi ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} hafi ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "hluti"}`;
            return `Of st\xF3rt: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin ?? "gildi"} s\xE9 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} hafi ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Of l\xEDti\xF0: gert er r\xE1\xF0 fyrir a\xF0 ${issue2.origin} s\xE9 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\xD3gildur strengur: ver\xF0ur a\xF0 byrja \xE1 "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `\xD3gildur strengur: ver\xF0ur a\xF0 enda \xE1 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\xD3gildur strengur: ver\xF0ur a\xF0 innihalda "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\xD3gildur strengur: ver\xF0ur a\xF0 fylgja mynstri ${_issue.pattern}`;
            return `Rangt ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `R\xF6ng tala: ver\xF0ur a\xF0 vera margfeldi af ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\xD3\xFEekkt ${issue2.keys.length > 1 ? "ir lyklar" : "ur lykill"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Rangur lykill \xED ${issue2.origin}`;
          case "invalid_union":
            return "Rangt gildi";
          case "invalid_element":
            return `Rangt gildi \xED ${issue2.origin}`;
          default:
            return `Rangt gildi`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/it.js
function it_default() {
  return {
    localeError: error23()
  };
}
var error23;
var init_it = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/it.js"() {
    init_util();
    error23 = () => {
      const Sizable = {
        string: { unit: "caratteri", verb: "avere" },
        file: { unit: "byte", verb: "avere" },
        array: { unit: "elementi", verb: "avere" },
        set: { unit: "elementi", verb: "avere" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "indirizzo email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e ora ISO",
        date: "data ISO",
        time: "ora ISO",
        duration: "durata ISO",
        ipv4: "indirizzo IPv4",
        ipv6: "indirizzo IPv6",
        cidrv4: "intervallo IPv4",
        cidrv6: "intervallo IPv6",
        base64: "stringa codificata in base64",
        base64url: "URL codificata in base64",
        json_string: "stringa JSON",
        e164: "numero E.164",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "numero",
        array: "vettore"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Input non valido: atteso instanceof ${issue2.expected}, ricevuto ${received}`;
            }
            return `Input non valido: atteso ${expected}, ricevuto ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Input non valido: atteso ${stringifyPrimitive(issue2.values[0])}`;
            return `Opzione non valida: atteso uno tra ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Troppo grande: ${issue2.origin ?? "valore"} deve avere ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementi"}`;
            return `Troppo grande: ${issue2.origin ?? "valore"} deve essere ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Troppo piccolo: ${issue2.origin} deve avere ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Troppo piccolo: ${issue2.origin} deve essere ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Stringa non valida: deve iniziare con "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Stringa non valida: deve terminare con "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Stringa non valida: deve includere "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Stringa non valida: deve corrispondere al pattern ${_issue.pattern}`;
            return `Input non valido: ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Numero non valido: deve essere un multiplo di ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Chiav${issue2.keys.length > 1 ? "i" : "e"} non riconosciut${issue2.keys.length > 1 ? "e" : "a"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Chiave non valida in ${issue2.origin}`;
          case "invalid_union":
            return "Input non valido";
          case "invalid_element":
            return `Valore non valido in ${issue2.origin}`;
          default:
            return `Input non valido`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ja.js
function ja_default() {
  return {
    localeError: error24()
  };
}
var error24;
var init_ja = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ja.js"() {
    init_util();
    error24 = () => {
      const Sizable = {
        string: { unit: "\u6587\u5B57", verb: "\u3067\u3042\u308B" },
        file: { unit: "\u30D0\u30A4\u30C8", verb: "\u3067\u3042\u308B" },
        array: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" },
        set: { unit: "\u8981\u7D20", verb: "\u3067\u3042\u308B" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u5165\u529B\u5024",
        email: "\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",
        url: "URL",
        emoji: "\u7D75\u6587\u5B57",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO\u65E5\u6642",
        date: "ISO\u65E5\u4ED8",
        time: "ISO\u6642\u523B",
        duration: "ISO\u671F\u9593",
        ipv4: "IPv4\u30A2\u30C9\u30EC\u30B9",
        ipv6: "IPv6\u30A2\u30C9\u30EC\u30B9",
        cidrv4: "IPv4\u7BC4\u56F2",
        cidrv6: "IPv6\u7BC4\u56F2",
        base64: "base64\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
        base64url: "base64url\u30A8\u30F3\u30B3\u30FC\u30C9\u6587\u5B57\u5217",
        json_string: "JSON\u6587\u5B57\u5217",
        e164: "E.164\u756A\u53F7",
        jwt: "JWT",
        template_literal: "\u5165\u529B\u5024"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u6570\u5024",
        array: "\u914D\u5217"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u7121\u52B9\u306A\u5165\u529B: instanceof ${issue2.expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
            }
            return `\u7121\u52B9\u306A\u5165\u529B: ${expected}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F\u304C\u3001${received}\u304C\u5165\u529B\u3055\u308C\u307E\u3057\u305F`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u7121\u52B9\u306A\u5165\u529B: ${stringifyPrimitive(issue2.values[0])}\u304C\u671F\u5F85\u3055\u308C\u307E\u3057\u305F`;
            return `\u7121\u52B9\u306A\u9078\u629E: ${joinValues(issue2.values, "\u3001")}\u306E\u3044\u305A\u308C\u304B\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          case "too_big": {
            const adj = issue2.inclusive ? "\u4EE5\u4E0B\u3067\u3042\u308B" : "\u3088\u308A\u5C0F\u3055\u3044";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${sizing.unit ?? "\u8981\u7D20"}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            return `\u5927\u304D\u3059\u304E\u308B\u5024: ${issue2.origin ?? "\u5024"}\u306F${issue2.maximum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? "\u4EE5\u4E0A\u3067\u3042\u308B" : "\u3088\u308A\u5927\u304D\u3044";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${sizing.unit}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            return `\u5C0F\u3055\u3059\u304E\u308B\u5024: ${issue2.origin}\u306F${issue2.minimum.toString()}${adj}\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.prefix}"\u3067\u59CB\u307E\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            if (_issue.format === "ends_with")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.suffix}"\u3067\u7D42\u308F\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            if (_issue.format === "includes")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: "${_issue.includes}"\u3092\u542B\u3080\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            if (_issue.format === "regex")
              return `\u7121\u52B9\u306A\u6587\u5B57\u5217: \u30D1\u30BF\u30FC\u30F3${_issue.pattern}\u306B\u4E00\u81F4\u3059\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
            return `\u7121\u52B9\u306A${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u7121\u52B9\u306A\u6570\u5024: ${issue2.divisor}\u306E\u500D\u6570\u3067\u3042\u308B\u5FC5\u8981\u304C\u3042\u308A\u307E\u3059`;
          case "unrecognized_keys":
            return `\u8A8D\u8B58\u3055\u308C\u3066\u3044\u306A\u3044\u30AD\u30FC${issue2.keys.length > 1 ? "\u7FA4" : ""}: ${joinValues(issue2.keys, "\u3001")}`;
          case "invalid_key":
            return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u30AD\u30FC`;
          case "invalid_union":
            return "\u7121\u52B9\u306A\u5165\u529B";
          case "invalid_element":
            return `${issue2.origin}\u5185\u306E\u7121\u52B9\u306A\u5024`;
          default:
            return `\u7121\u52B9\u306A\u5165\u529B`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ka.js
function ka_default() {
  return {
    localeError: error25()
  };
}
var error25;
var init_ka = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ka.js"() {
    init_util();
    error25 = () => {
      const Sizable = {
        string: { unit: "\u10E1\u10D8\u10DB\u10D1\u10DD\u10DA\u10DD", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
        file: { unit: "\u10D1\u10D0\u10D8\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
        array: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" },
        set: { unit: "\u10D4\u10DA\u10D4\u10DB\u10D4\u10DC\u10E2\u10D8", verb: "\u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0",
        email: "\u10D4\u10DA-\u10E4\u10DD\u10E1\u10E2\u10D8\u10E1 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
        url: "URL",
        emoji: "\u10D4\u10DB\u10DD\u10EF\u10D8",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8-\u10D3\u10E0\u10DD",
        date: "\u10D7\u10D0\u10E0\u10D8\u10E6\u10D8",
        time: "\u10D3\u10E0\u10DD",
        duration: "\u10EE\u10D0\u10DC\u10D2\u10E0\u10EB\u10DA\u10D8\u10D5\u10DD\u10D1\u10D0",
        ipv4: "IPv4 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
        ipv6: "IPv6 \u10DB\u10D8\u10E1\u10D0\u10DB\u10D0\u10E0\u10D7\u10D8",
        cidrv4: "IPv4 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
        cidrv6: "IPv6 \u10D3\u10D8\u10D0\u10DE\u10D0\u10D6\u10DD\u10DC\u10D8",
        base64: "base64-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
        base64url: "base64url-\u10D9\u10DD\u10D3\u10D8\u10E0\u10D4\u10D1\u10E3\u10DA\u10D8 \u10D5\u10D4\u10DA\u10D8",
        json_string: "JSON \u10D5\u10D4\u10DA\u10D8",
        e164: "E.164 \u10DC\u10DD\u10DB\u10D4\u10E0\u10D8",
        jwt: "JWT",
        template_literal: "\u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u10E0\u10D8\u10EA\u10EE\u10D5\u10D8",
        string: "\u10D5\u10D4\u10DA\u10D8",
        boolean: "\u10D1\u10E3\u10DA\u10D4\u10D0\u10DC\u10D8",
        function: "\u10E4\u10E3\u10DC\u10E5\u10EA\u10D8\u10D0",
        array: "\u10DB\u10D0\u10E1\u10D8\u10D5\u10D8"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 instanceof ${issue2.expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
            }
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${expected}, \u10DB\u10D8\u10E6\u10D4\u10D1\u10E3\u10DA\u10D8 ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${stringifyPrimitive(issue2.values[0])}`;
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D0\u10E0\u10D8\u10D0\u10DC\u10E2\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8\u10D0 \u10D4\u10E0\u10D7-\u10D4\u10E0\u10D7\u10D8 ${joinValues(issue2.values, "|")}-\u10D3\u10D0\u10DC`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit}`;
            return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10D3\u10D8\u10D3\u10D8: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin ?? "\u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0"} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `\u10D6\u10D4\u10D3\u10DB\u10D4\u10E2\u10D0\u10D3 \u10DE\u10D0\u10E2\u10D0\u10E0\u10D0: \u10DB\u10DD\u10E1\u10D0\u10DA\u10DD\u10D3\u10DC\u10D4\u10DA\u10D8 ${issue2.origin} \u10D8\u10E7\u10DD\u10E1 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10EC\u10E7\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.prefix}"-\u10D8\u10D7`;
            }
            if (_issue.format === "ends_with")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10DB\u10D7\u10D0\u10D5\u10E0\u10D3\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 "${_issue.suffix}"-\u10D8\u10D7`;
            if (_issue.format === "includes")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D8\u10EA\u10D0\u10D5\u10D3\u10D4\u10E1 "${_issue.includes}"-\u10E1`;
            if (_issue.format === "regex")
              return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D5\u10D4\u10DA\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10E8\u10D4\u10D4\u10E1\u10D0\u10D1\u10D0\u10DB\u10D4\u10D1\u10DD\u10D3\u10D4\u10E1 \u10E8\u10D0\u10D1\u10DA\u10DD\u10DC\u10E1 ${_issue.pattern}`;
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E0\u10D8\u10EA\u10EE\u10D5\u10D8: \u10E3\u10DC\u10D3\u10D0 \u10D8\u10E7\u10DD\u10E1 ${issue2.divisor}-\u10D8\u10E1 \u10EF\u10D4\u10E0\u10D0\u10D3\u10D8`;
          case "unrecognized_keys":
            return `\u10E3\u10EA\u10DC\u10DD\u10D1\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1${issue2.keys.length > 1 ? "\u10D4\u10D1\u10D8" : "\u10D8"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10D2\u10D0\u10E1\u10D0\u10E6\u10D4\u10D1\u10D8 ${issue2.origin}-\u10E8\u10D8`;
          case "invalid_union":
            return "\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0";
          case "invalid_element":
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10DB\u10DC\u10D8\u10E8\u10D5\u10DC\u10D4\u10DA\u10DD\u10D1\u10D0 ${issue2.origin}-\u10E8\u10D8`;
          default:
            return `\u10D0\u10E0\u10D0\u10E1\u10EC\u10DD\u10E0\u10D8 \u10E8\u10D4\u10E7\u10D5\u10D0\u10DC\u10D0`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/km.js
function km_default() {
  return {
    localeError: error26()
  };
}
var error26;
var init_km = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/km.js"() {
    init_util();
    error26 = () => {
      const Sizable = {
        string: { unit: "\u178F\u17BD\u17A2\u1780\u17D2\u179F\u179A", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        file: { unit: "\u1794\u17C3", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        array: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" },
        set: { unit: "\u1792\u17B6\u178F\u17BB", verb: "\u1782\u17BD\u179A\u1798\u17B6\u1793" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B",
        email: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793\u17A2\u17CA\u17B8\u1798\u17C2\u179B",
        url: "URL",
        emoji: "\u179F\u1789\u17D2\u1789\u17B6\u17A2\u17B6\u179A\u1798\u17D2\u1798\u178E\u17CD",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 \u1793\u17B7\u1784\u1798\u17C9\u17C4\u1784 ISO",
        date: "\u1780\u17B6\u179B\u1794\u179A\u17B7\u1785\u17D2\u1786\u17C1\u1791 ISO",
        time: "\u1798\u17C9\u17C4\u1784 ISO",
        duration: "\u179A\u1799\u17C8\u1796\u17C1\u179B ISO",
        ipv4: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
        ipv6: "\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
        cidrv4: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv4",
        cidrv6: "\u178A\u17C2\u1793\u17A2\u17B6\u179F\u1799\u178A\u17D2\u178B\u17B6\u1793 IPv6",
        base64: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64",
        base64url: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u17A2\u17CA\u17B7\u1780\u17BC\u178A base64url",
        json_string: "\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A JSON",
        e164: "\u179B\u17C1\u1781 E.164",
        jwt: "JWT",
        template_literal: "\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u179B\u17C1\u1781",
        array: "\u17A2\u17B6\u179A\u17C1 (Array)",
        null: "\u1782\u17D2\u1798\u17B6\u1793\u178F\u1798\u17D2\u179B\u17C3 (null)"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A instanceof ${issue2.expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
            }
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${expected} \u1794\u17C9\u17BB\u1793\u17D2\u178F\u17C2\u1791\u1791\u17BD\u179B\u1794\u17B6\u1793 ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1794\u1789\u17D2\u1785\u17BC\u179B\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${stringifyPrimitive(issue2.values[0])}`;
            return `\u1787\u1798\u17D2\u179A\u17BE\u179F\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1787\u17B6\u1798\u17BD\u1799\u1780\u17D2\u1793\u17BB\u1784\u1785\u17C6\u178E\u17C4\u1798 ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()} ${sizing.unit ?? "\u1792\u17B6\u178F\u17BB"}`;
            return `\u1792\u17C6\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin ?? "\u178F\u1798\u17D2\u179B\u17C3"} ${adj} ${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `\u178F\u17BC\u1785\u1796\u17C1\u1780\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1780\u17B6\u179A ${issue2.origin} ${adj} ${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1785\u17B6\u1794\u17CB\u1795\u17D2\u178F\u17BE\u1798\u178A\u17C4\u1799 "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1794\u1789\u17D2\u1785\u1794\u17CB\u178A\u17C4\u1799 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u1798\u17B6\u1793 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u1781\u17D2\u179F\u17C2\u17A2\u1780\u17D2\u179F\u179A\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1795\u17D2\u1782\u17BC\u1795\u17D2\u1782\u1784\u1793\u17B9\u1784\u1791\u1798\u17D2\u179A\u1784\u17CB\u178A\u17C2\u179B\u1794\u17B6\u1793\u1780\u17C6\u178E\u178F\u17CB ${_issue.pattern}`;
            return `\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u179B\u17C1\u1781\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u17D6 \u178F\u17D2\u179A\u17BC\u179C\u178F\u17C2\u1787\u17B6\u1796\u17A0\u17BB\u1782\u17BB\u178E\u1793\u17C3 ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u179A\u1780\u1783\u17BE\u1789\u179F\u17C4\u1798\u17B7\u1793\u179F\u17D2\u1782\u17B6\u179B\u17CB\u17D6 ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u179F\u17C4\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
          case "invalid_union":
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
          case "invalid_element":
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C\u1793\u17C5\u1780\u17D2\u1793\u17BB\u1784 ${issue2.origin}`;
          default:
            return `\u1791\u17B7\u1793\u17D2\u1793\u1793\u17D0\u1799\u1798\u17B7\u1793\u178F\u17D2\u179A\u17B9\u1798\u178F\u17D2\u179A\u17BC\u179C`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/kh.js
function kh_default() {
  return km_default();
}
var init_kh = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/kh.js"() {
    init_km();
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ko.js
function ko_default() {
  return {
    localeError: error27()
  };
}
var error27;
var init_ko = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ko.js"() {
    init_util();
    error27 = () => {
      const Sizable = {
        string: { unit: "\uBB38\uC790", verb: "to have" },
        file: { unit: "\uBC14\uC774\uD2B8", verb: "to have" },
        array: { unit: "\uAC1C", verb: "to have" },
        set: { unit: "\uAC1C", verb: "to have" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\uC785\uB825",
        email: "\uC774\uBA54\uC77C \uC8FC\uC18C",
        url: "URL",
        emoji: "\uC774\uBAA8\uC9C0",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \uB0A0\uC9DC\uC2DC\uAC04",
        date: "ISO \uB0A0\uC9DC",
        time: "ISO \uC2DC\uAC04",
        duration: "ISO \uAE30\uAC04",
        ipv4: "IPv4 \uC8FC\uC18C",
        ipv6: "IPv6 \uC8FC\uC18C",
        cidrv4: "IPv4 \uBC94\uC704",
        cidrv6: "IPv6 \uBC94\uC704",
        base64: "base64 \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
        base64url: "base64url \uC778\uCF54\uB529 \uBB38\uC790\uC5F4",
        json_string: "JSON \uBB38\uC790\uC5F4",
        e164: "E.164 \uBC88\uD638",
        jwt: "JWT",
        template_literal: "\uC785\uB825"
      };
      const TypeDictionary = {
        nan: "NaN"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 instanceof ${issue2.expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
            }
            return `\uC798\uBABB\uB41C \uC785\uB825: \uC608\uC0C1 \uD0C0\uC785\uC740 ${expected}, \uBC1B\uC740 \uD0C0\uC785\uC740 ${received}\uC785\uB2C8\uB2E4`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\uC798\uBABB\uB41C \uC785\uB825: \uAC12\uC740 ${stringifyPrimitive(issue2.values[0])} \uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4`;
            return `\uC798\uBABB\uB41C \uC635\uC158: ${joinValues(issue2.values, "\uB610\uB294 ")} \uC911 \uD558\uB098\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
          case "too_big": {
            const adj = issue2.inclusive ? "\uC774\uD558" : "\uBBF8\uB9CC";
            const suffix = adj === "\uBBF8\uB9CC" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
            const sizing = getSizing(issue2.origin);
            const unit = sizing?.unit ?? "\uC694\uC18C";
            if (sizing)
              return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()}${unit} ${adj}${suffix}`;
            return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uD07D\uB2C8\uB2E4: ${issue2.maximum.toString()} ${adj}${suffix}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? "\uC774\uC0C1" : "\uCD08\uACFC";
            const suffix = adj === "\uC774\uC0C1" ? "\uC774\uC5B4\uC57C \uD569\uB2C8\uB2E4" : "\uC5EC\uC57C \uD569\uB2C8\uB2E4";
            const sizing = getSizing(issue2.origin);
            const unit = sizing?.unit ?? "\uC694\uC18C";
            if (sizing) {
              return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()}${unit} ${adj}${suffix}`;
            }
            return `${issue2.origin ?? "\uAC12"}\uC774 \uB108\uBB34 \uC791\uC2B5\uB2C8\uB2E4: ${issue2.minimum.toString()} ${adj}${suffix}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.prefix}"(\uC73C)\uB85C \uC2DC\uC791\uD574\uC57C \uD569\uB2C8\uB2E4`;
            }
            if (_issue.format === "ends_with")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.suffix}"(\uC73C)\uB85C \uB05D\uB098\uC57C \uD569\uB2C8\uB2E4`;
            if (_issue.format === "includes")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: "${_issue.includes}"\uC744(\uB97C) \uD3EC\uD568\uD574\uC57C \uD569\uB2C8\uB2E4`;
            if (_issue.format === "regex")
              return `\uC798\uBABB\uB41C \uBB38\uC790\uC5F4: \uC815\uADDC\uC2DD ${_issue.pattern} \uD328\uD134\uACFC \uC77C\uCE58\uD574\uC57C \uD569\uB2C8\uB2E4`;
            return `\uC798\uBABB\uB41C ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\uC798\uBABB\uB41C \uC22B\uC790: ${issue2.divisor}\uC758 \uBC30\uC218\uC5EC\uC57C \uD569\uB2C8\uB2E4`;
          case "unrecognized_keys":
            return `\uC778\uC2DD\uD560 \uC218 \uC5C6\uB294 \uD0A4: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\uC798\uBABB\uB41C \uD0A4: ${issue2.origin}`;
          case "invalid_union":
            return `\uC798\uBABB\uB41C \uC785\uB825`;
          case "invalid_element":
            return `\uC798\uBABB\uB41C \uAC12: ${issue2.origin}`;
          default:
            return `\uC798\uBABB\uB41C \uC785\uB825`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/lt.js
function getUnitTypeFromNumber(number4) {
  const abs = Math.abs(number4);
  const last = abs % 10;
  const last2 = abs % 100;
  if (last2 >= 11 && last2 <= 19 || last === 0)
    return "many";
  if (last === 1)
    return "one";
  return "few";
}
function lt_default() {
  return {
    localeError: error28()
  };
}
var capitalizeFirstCharacter, error28;
var init_lt = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/lt.js"() {
    init_util();
    capitalizeFirstCharacter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    error28 = () => {
      const Sizable = {
        string: {
          unit: {
            one: "simbolis",
            few: "simboliai",
            many: "simboli\u0173"
          },
          verb: {
            smaller: {
              inclusive: "turi b\u016Bti ne ilgesn\u0117 kaip",
              notInclusive: "turi b\u016Bti trumpesn\u0117 kaip"
            },
            bigger: {
              inclusive: "turi b\u016Bti ne trumpesn\u0117 kaip",
              notInclusive: "turi b\u016Bti ilgesn\u0117 kaip"
            }
          }
        },
        file: {
          unit: {
            one: "baitas",
            few: "baitai",
            many: "bait\u0173"
          },
          verb: {
            smaller: {
              inclusive: "turi b\u016Bti ne didesnis kaip",
              notInclusive: "turi b\u016Bti ma\u017Eesnis kaip"
            },
            bigger: {
              inclusive: "turi b\u016Bti ne ma\u017Eesnis kaip",
              notInclusive: "turi b\u016Bti didesnis kaip"
            }
          }
        },
        array: {
          unit: {
            one: "element\u0105",
            few: "elementus",
            many: "element\u0173"
          },
          verb: {
            smaller: {
              inclusive: "turi tur\u0117ti ne daugiau kaip",
              notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
            },
            bigger: {
              inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
              notInclusive: "turi tur\u0117ti daugiau kaip"
            }
          }
        },
        set: {
          unit: {
            one: "element\u0105",
            few: "elementus",
            many: "element\u0173"
          },
          verb: {
            smaller: {
              inclusive: "turi tur\u0117ti ne daugiau kaip",
              notInclusive: "turi tur\u0117ti ma\u017Eiau kaip"
            },
            bigger: {
              inclusive: "turi tur\u0117ti ne ma\u017Eiau kaip",
              notInclusive: "turi tur\u0117ti daugiau kaip"
            }
          }
        }
      };
      function getSizing(origin, unitType, inclusive, targetShouldBe) {
        const result = Sizable[origin] ?? null;
        if (result === null)
          return result;
        return {
          unit: result.unit[unitType],
          verb: result.verb[targetShouldBe][inclusive ? "inclusive" : "notInclusive"]
        };
      }
      const FormatDictionary = {
        regex: "\u012Fvestis",
        email: "el. pa\u0161to adresas",
        url: "URL",
        emoji: "jaustukas",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO data ir laikas",
        date: "ISO data",
        time: "ISO laikas",
        duration: "ISO trukm\u0117",
        ipv4: "IPv4 adresas",
        ipv6: "IPv6 adresas",
        cidrv4: "IPv4 tinklo prefiksas (CIDR)",
        cidrv6: "IPv6 tinklo prefiksas (CIDR)",
        base64: "base64 u\u017Ekoduota eilut\u0117",
        base64url: "base64url u\u017Ekoduota eilut\u0117",
        json_string: "JSON eilut\u0117",
        e164: "E.164 numeris",
        jwt: "JWT",
        template_literal: "\u012Fvestis"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "skai\u010Dius",
        bigint: "sveikasis skai\u010Dius",
        string: "eilut\u0117",
        boolean: "login\u0117 reik\u0161m\u0117",
        undefined: "neapibr\u0117\u017Eta reik\u0161m\u0117",
        function: "funkcija",
        symbol: "simbolis",
        array: "masyvas",
        object: "objektas",
        null: "nulin\u0117 reik\u0161m\u0117"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Gautas tipas ${received}, o tik\u0117tasi - instanceof ${issue2.expected}`;
            }
            return `Gautas tipas ${received}, o tik\u0117tasi - ${expected}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Privalo b\u016Bti ${stringifyPrimitive(issue2.values[0])}`;
            return `Privalo b\u016Bti vienas i\u0161 ${joinValues(issue2.values, "|")} pasirinkim\u0173`;
          case "too_big": {
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.maximum)), issue2.inclusive ?? false, "smaller");
            if (sizing?.verb)
              return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.maximum.toString()} ${sizing.unit ?? "element\u0173"}`;
            const adj = issue2.inclusive ? "ne didesnis kaip" : "ma\u017Eesnis kaip";
            return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.maximum.toString()} ${sizing?.unit}`;
          }
          case "too_small": {
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            const sizing = getSizing(issue2.origin, getUnitTypeFromNumber(Number(issue2.minimum)), issue2.inclusive ?? false, "bigger");
            if (sizing?.verb)
              return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} ${sizing.verb} ${issue2.minimum.toString()} ${sizing.unit ?? "element\u0173"}`;
            const adj = issue2.inclusive ? "ne ma\u017Eesnis kaip" : "didesnis kaip";
            return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi b\u016Bti ${adj} ${issue2.minimum.toString()} ${sizing?.unit}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `Eilut\u0117 privalo prasid\u0117ti "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `Eilut\u0117 privalo pasibaigti "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Eilut\u0117 privalo \u012Ftraukti "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Eilut\u0117 privalo atitikti ${_issue.pattern}`;
            return `Neteisingas ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Skai\u010Dius privalo b\u016Bti ${issue2.divisor} kartotinis.`;
          case "unrecognized_keys":
            return `Neatpa\u017Eint${issue2.keys.length > 1 ? "i" : "as"} rakt${issue2.keys.length > 1 ? "ai" : "as"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return "Rastas klaidingas raktas";
          case "invalid_union":
            return "Klaidinga \u012Fvestis";
          case "invalid_element": {
            const origin = TypeDictionary[issue2.origin] ?? issue2.origin;
            return `${capitalizeFirstCharacter(origin ?? issue2.origin ?? "reik\u0161m\u0117")} turi klaiding\u0105 \u012Fvest\u012F`;
          }
          default:
            return "Klaidinga \u012Fvestis";
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/mk.js
function mk_default() {
  return {
    localeError: error29()
  };
}
var error29;
var init_mk = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/mk.js"() {
    init_util();
    error29 = () => {
      const Sizable = {
        string: { unit: "\u0437\u043D\u0430\u0446\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        file: { unit: "\u0431\u0430\u0458\u0442\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        array: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" },
        set: { unit: "\u0441\u0442\u0430\u0432\u043A\u0438", verb: "\u0434\u0430 \u0438\u043C\u0430\u0430\u0442" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0432\u043D\u0435\u0441",
        email: "\u0430\u0434\u0440\u0435\u0441\u0430 \u043D\u0430 \u0435-\u043F\u043E\u0448\u0442\u0430",
        url: "URL",
        emoji: "\u0435\u043C\u043E\u045F\u0438",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0434\u0430\u0442\u0443\u043C \u0438 \u0432\u0440\u0435\u043C\u0435",
        date: "ISO \u0434\u0430\u0442\u0443\u043C",
        time: "ISO \u0432\u0440\u0435\u043C\u0435",
        duration: "ISO \u0432\u0440\u0435\u043C\u0435\u0442\u0440\u0430\u0435\u045A\u0435",
        ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441\u0430",
        ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441\u0430",
        cidrv4: "IPv4 \u043E\u043F\u0441\u0435\u0433",
        cidrv6: "IPv6 \u043E\u043F\u0441\u0435\u0433",
        base64: "base64-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
        base64url: "base64url-\u0435\u043D\u043A\u043E\u0434\u0438\u0440\u0430\u043D\u0430 \u043D\u0438\u0437\u0430",
        json_string: "JSON \u043D\u0438\u0437\u0430",
        e164: "E.164 \u0431\u0440\u043E\u0458",
        jwt: "JWT",
        template_literal: "\u0432\u043D\u0435\u0441"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0431\u0440\u043E\u0458",
        array: "\u043D\u0438\u0437\u0430"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 instanceof ${issue2.expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
            }
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${expected}, \u043F\u0440\u0438\u043C\u0435\u043D\u043E ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Invalid input: expected ${stringifyPrimitive(issue2.values[0])}`;
            return `\u0413\u0440\u0435\u0448\u0430\u043D\u0430 \u043E\u043F\u0446\u0438\u0458\u0430: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 \u0435\u0434\u043D\u0430 ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438"}`;
            return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u0433\u043E\u043B\u0435\u043C: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin ?? "\u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442\u0430"} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0438\u043C\u0430 ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `\u041F\u0440\u0435\u043C\u043D\u043E\u0433\u0443 \u043C\u0430\u043B: \u0441\u0435 \u043E\u0447\u0435\u043A\u0443\u0432\u0430 ${issue2.origin} \u0434\u0430 \u0431\u0438\u0434\u0435 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u043F\u043E\u0447\u043D\u0443\u0432\u0430 \u0441\u043E "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0437\u0430\u0432\u0440\u0448\u0443\u0432\u0430 \u0441\u043E "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0432\u043A\u043B\u0443\u0447\u0443\u0432\u0430 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u041D\u0435\u0432\u0430\u0436\u0435\u0447\u043A\u0430 \u043D\u0438\u0437\u0430: \u043C\u043E\u0440\u0430 \u0434\u0430 \u043E\u0434\u0433\u043E\u0430\u0440\u0430 \u043D\u0430 \u043F\u0430\u0442\u0435\u0440\u043D\u043E\u0442 ${_issue.pattern}`;
            return `Invalid ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0431\u0440\u043E\u0458: \u043C\u043E\u0440\u0430 \u0434\u0430 \u0431\u0438\u0434\u0435 \u0434\u0435\u043B\u0438\u0432 \u0441\u043E ${issue2.divisor}`;
          case "unrecognized_keys":
            return `${issue2.keys.length > 1 ? "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D\u0438 \u043A\u043B\u0443\u0447\u0435\u0432\u0438" : "\u041D\u0435\u043F\u0440\u0435\u043F\u043E\u0437\u043D\u0430\u0435\u043D \u043A\u043B\u0443\u0447"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u043A\u043B\u0443\u0447 \u0432\u043E ${issue2.origin}`;
          case "invalid_union":
            return "\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441";
          case "invalid_element":
            return `\u0413\u0440\u0435\u0448\u043D\u0430 \u0432\u0440\u0435\u0434\u043D\u043E\u0441\u0442 \u0432\u043E ${issue2.origin}`;
          default:
            return `\u0413\u0440\u0435\u0448\u0435\u043D \u0432\u043D\u0435\u0441`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ms.js
function ms_default() {
  return {
    localeError: error30()
  };
}
var error30;
var init_ms = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ms.js"() {
    init_util();
    error30 = () => {
      const Sizable = {
        string: { unit: "aksara", verb: "mempunyai" },
        file: { unit: "bait", verb: "mempunyai" },
        array: { unit: "elemen", verb: "mempunyai" },
        set: { unit: "elemen", verb: "mempunyai" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "alamat e-mel",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "tarikh masa ISO",
        date: "tarikh ISO",
        time: "masa ISO",
        duration: "tempoh ISO",
        ipv4: "alamat IPv4",
        ipv6: "alamat IPv6",
        cidrv4: "julat IPv4",
        cidrv6: "julat IPv6",
        base64: "string dikodkan base64",
        base64url: "string dikodkan base64url",
        json_string: "string JSON",
        e164: "nombor E.164",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "nombor"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Input tidak sah: dijangka instanceof ${issue2.expected}, diterima ${received}`;
            }
            return `Input tidak sah: dijangka ${expected}, diterima ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Input tidak sah: dijangka ${stringifyPrimitive(issue2.values[0])}`;
            return `Pilihan tidak sah: dijangka salah satu daripada ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemen"}`;
            return `Terlalu besar: dijangka ${issue2.origin ?? "nilai"} adalah ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Terlalu kecil: dijangka ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Terlalu kecil: dijangka ${issue2.origin} adalah ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `String tidak sah: mesti bermula dengan "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `String tidak sah: mesti berakhir dengan "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `String tidak sah: mesti mengandungi "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `String tidak sah: mesti sepadan dengan corak ${_issue.pattern}`;
            return `${FormatDictionary[_issue.format] ?? issue2.format} tidak sah`;
          }
          case "not_multiple_of":
            return `Nombor tidak sah: perlu gandaan ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Kunci tidak dikenali: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Kunci tidak sah dalam ${issue2.origin}`;
          case "invalid_union":
            return "Input tidak sah";
          case "invalid_element":
            return `Nilai tidak sah dalam ${issue2.origin}`;
          default:
            return `Input tidak sah`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/nl.js
function nl_default() {
  return {
    localeError: error31()
  };
}
var error31;
var init_nl = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/nl.js"() {
    init_util();
    error31 = () => {
      const Sizable = {
        string: { unit: "tekens", verb: "heeft" },
        file: { unit: "bytes", verb: "heeft" },
        array: { unit: "elementen", verb: "heeft" },
        set: { unit: "elementen", verb: "heeft" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "invoer",
        email: "emailadres",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum en tijd",
        date: "ISO datum",
        time: "ISO tijd",
        duration: "ISO duur",
        ipv4: "IPv4-adres",
        ipv6: "IPv6-adres",
        cidrv4: "IPv4-bereik",
        cidrv6: "IPv6-bereik",
        base64: "base64-gecodeerde tekst",
        base64url: "base64 URL-gecodeerde tekst",
        json_string: "JSON string",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "invoer"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "getal"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Ongeldige invoer: verwacht instanceof ${issue2.expected}, ontving ${received}`;
            }
            return `Ongeldige invoer: verwacht ${expected}, ontving ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Ongeldige invoer: verwacht ${stringifyPrimitive(issue2.values[0])}`;
            return `Ongeldige optie: verwacht \xE9\xE9n van ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            const longName = issue2.origin === "date" ? "laat" : issue2.origin === "string" ? "lang" : "groot";
            if (sizing)
              return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementen"} ${sizing.verb}`;
            return `Te ${longName}: verwacht dat ${issue2.origin ?? "waarde"} ${adj}${issue2.maximum.toString()} is`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            const shortName = issue2.origin === "date" ? "vroeg" : issue2.origin === "string" ? "kort" : "klein";
            if (sizing) {
              return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} ${sizing.unit} ${sizing.verb}`;
            }
            return `Te ${shortName}: verwacht dat ${issue2.origin} ${adj}${issue2.minimum.toString()} is`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `Ongeldige tekst: moet met "${_issue.prefix}" beginnen`;
            }
            if (_issue.format === "ends_with")
              return `Ongeldige tekst: moet op "${_issue.suffix}" eindigen`;
            if (_issue.format === "includes")
              return `Ongeldige tekst: moet "${_issue.includes}" bevatten`;
            if (_issue.format === "regex")
              return `Ongeldige tekst: moet overeenkomen met patroon ${_issue.pattern}`;
            return `Ongeldig: ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Ongeldig getal: moet een veelvoud van ${issue2.divisor} zijn`;
          case "unrecognized_keys":
            return `Onbekende key${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Ongeldige key in ${issue2.origin}`;
          case "invalid_union":
            return "Ongeldige invoer";
          case "invalid_element":
            return `Ongeldige waarde in ${issue2.origin}`;
          default:
            return `Ongeldige invoer`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/no.js
function no_default() {
  return {
    localeError: error32()
  };
}
var error32;
var init_no = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/no.js"() {
    init_util();
    error32 = () => {
      const Sizable = {
        string: { unit: "tegn", verb: "\xE5 ha" },
        file: { unit: "bytes", verb: "\xE5 ha" },
        array: { unit: "elementer", verb: "\xE5 inneholde" },
        set: { unit: "elementer", verb: "\xE5 inneholde" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "input",
        email: "e-postadresse",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO dato- og klokkeslett",
        date: "ISO-dato",
        time: "ISO-klokkeslett",
        duration: "ISO-varighet",
        ipv4: "IPv4-omr\xE5de",
        ipv6: "IPv6-omr\xE5de",
        cidrv4: "IPv4-spekter",
        cidrv6: "IPv6-spekter",
        base64: "base64-enkodet streng",
        base64url: "base64url-enkodet streng",
        json_string: "JSON-streng",
        e164: "E.164-nummer",
        jwt: "JWT",
        template_literal: "input"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "tall",
        array: "liste"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Ugyldig input: forventet instanceof ${issue2.expected}, fikk ${received}`;
            }
            return `Ugyldig input: forventet ${expected}, fikk ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Ugyldig verdi: forventet ${stringifyPrimitive(issue2.values[0])}`;
            return `Ugyldig valg: forventet en av ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementer"}`;
            return `For stor(t): forventet ${issue2.origin ?? "value"} til \xE5 ha ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `For lite(n): forventet ${issue2.origin} til \xE5 ha ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Ugyldig streng: m\xE5 starte med "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Ugyldig streng: m\xE5 ende med "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Ugyldig streng: m\xE5 inneholde "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Ugyldig streng: m\xE5 matche m\xF8nsteret ${_issue.pattern}`;
            return `Ugyldig ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Ugyldig tall: m\xE5 v\xE6re et multiplum av ${issue2.divisor}`;
          case "unrecognized_keys":
            return `${issue2.keys.length > 1 ? "Ukjente n\xF8kler" : "Ukjent n\xF8kkel"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Ugyldig n\xF8kkel i ${issue2.origin}`;
          case "invalid_union":
            return "Ugyldig input";
          case "invalid_element":
            return `Ugyldig verdi i ${issue2.origin}`;
          default:
            return `Ugyldig input`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ota.js
function ota_default() {
  return {
    localeError: error33()
  };
}
var error33;
var init_ota = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ota.js"() {
    init_util();
    error33 = () => {
      const Sizable = {
        string: { unit: "harf", verb: "olmal\u0131d\u0131r" },
        file: { unit: "bayt", verb: "olmal\u0131d\u0131r" },
        array: { unit: "unsur", verb: "olmal\u0131d\u0131r" },
        set: { unit: "unsur", verb: "olmal\u0131d\u0131r" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "giren",
        email: "epostag\xE2h",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO heng\xE2m\u0131",
        date: "ISO tarihi",
        time: "ISO zaman\u0131",
        duration: "ISO m\xFCddeti",
        ipv4: "IPv4 ni\u015F\xE2n\u0131",
        ipv6: "IPv6 ni\u015F\xE2n\u0131",
        cidrv4: "IPv4 menzili",
        cidrv6: "IPv6 menzili",
        base64: "base64-\u015Fifreli metin",
        base64url: "base64url-\u015Fifreli metin",
        json_string: "JSON metin",
        e164: "E.164 say\u0131s\u0131",
        jwt: "JWT",
        template_literal: "giren"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "numara",
        array: "saf",
        null: "gayb"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `F\xE2sit giren: umulan instanceof ${issue2.expected}, al\u0131nan ${received}`;
            }
            return `F\xE2sit giren: umulan ${expected}, al\u0131nan ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `F\xE2sit giren: umulan ${stringifyPrimitive(issue2.values[0])}`;
            return `F\xE2sit tercih: m\xFBteberler ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elements"} sahip olmal\u0131yd\u0131.`;
            return `Fazla b\xFCy\xFCk: ${issue2.origin ?? "value"}, ${adj}${issue2.maximum.toString()} olmal\u0131yd\u0131.`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} ${sizing.unit} sahip olmal\u0131yd\u0131.`;
            }
            return `Fazla k\xFC\xE7\xFCk: ${issue2.origin}, ${adj}${issue2.minimum.toString()} olmal\u0131yd\u0131.`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `F\xE2sit metin: "${_issue.prefix}" ile ba\u015Flamal\u0131.`;
            if (_issue.format === "ends_with")
              return `F\xE2sit metin: "${_issue.suffix}" ile bitmeli.`;
            if (_issue.format === "includes")
              return `F\xE2sit metin: "${_issue.includes}" ihtiv\xE2 etmeli.`;
            if (_issue.format === "regex")
              return `F\xE2sit metin: ${_issue.pattern} nak\u015F\u0131na uymal\u0131.`;
            return `F\xE2sit ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `F\xE2sit say\u0131: ${issue2.divisor} kat\u0131 olmal\u0131yd\u0131.`;
          case "unrecognized_keys":
            return `Tan\u0131nmayan anahtar ${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `${issue2.origin} i\xE7in tan\u0131nmayan anahtar var.`;
          case "invalid_union":
            return "Giren tan\u0131namad\u0131.";
          case "invalid_element":
            return `${issue2.origin} i\xE7in tan\u0131nmayan k\u0131ymet var.`;
          default:
            return `K\u0131ymet tan\u0131namad\u0131.`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ps.js
function ps_default() {
  return {
    localeError: error34()
  };
}
var error34;
var init_ps = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ps.js"() {
    init_util();
    error34 = () => {
      const Sizable = {
        string: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
        file: { unit: "\u0628\u0627\u06CC\u067C\u0633", verb: "\u0648\u0644\u0631\u064A" },
        array: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" },
        set: { unit: "\u062A\u0648\u06A9\u064A", verb: "\u0648\u0644\u0631\u064A" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0648\u0631\u0648\u062F\u064A",
        email: "\u0628\u0631\u06CC\u069A\u0646\u0627\u0644\u06CC\u06A9",
        url: "\u06CC\u0648 \u0622\u0631 \u0627\u0644",
        emoji: "\u0627\u06CC\u0645\u0648\u062C\u064A",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "\u0646\u06CC\u067C\u0647 \u0627\u0648 \u0648\u062E\u062A",
        date: "\u0646\u06D0\u067C\u0647",
        time: "\u0648\u062E\u062A",
        duration: "\u0645\u0648\u062F\u0647",
        ipv4: "\u062F IPv4 \u067E\u062A\u0647",
        ipv6: "\u062F IPv6 \u067E\u062A\u0647",
        cidrv4: "\u062F IPv4 \u0633\u0627\u062D\u0647",
        cidrv6: "\u062F IPv6 \u0633\u0627\u062D\u0647",
        base64: "base64-encoded \u0645\u062A\u0646",
        base64url: "base64url-encoded \u0645\u062A\u0646",
        json_string: "JSON \u0645\u062A\u0646",
        e164: "\u062F E.164 \u0634\u0645\u06D0\u0631\u0647",
        jwt: "JWT",
        template_literal: "\u0648\u0631\u0648\u062F\u064A"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0639\u062F\u062F",
        array: "\u0627\u0631\u06D0"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F instanceof ${issue2.expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
            }
            return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${expected} \u0648\u0627\u06CC, \u0645\u06AB\u0631 ${received} \u062A\u0631\u0644\u0627\u0633\u0647 \u0634\u0648`;
          }
          case "invalid_value":
            if (issue2.values.length === 1) {
              return `\u0646\u0627\u0633\u0645 \u0648\u0631\u0648\u062F\u064A: \u0628\u0627\u06CC\u062F ${stringifyPrimitive(issue2.values[0])} \u0648\u0627\u06CC`;
            }
            return `\u0646\u0627\u0633\u0645 \u0627\u0646\u062A\u062E\u0627\u0628: \u0628\u0627\u06CC\u062F \u06CC\u0648 \u0644\u0647 ${joinValues(issue2.values, "|")} \u0685\u062E\u0647 \u0648\u0627\u06CC`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "\u0639\u0646\u0635\u0631\u0648\u0646\u0647"} \u0648\u0644\u0631\u064A`;
            }
            return `\u0689\u06CC\u0631 \u0644\u0648\u06CC: ${issue2.origin ?? "\u0627\u0631\u0632\u069A\u062A"} \u0628\u0627\u06CC\u062F ${adj}${issue2.maximum.toString()} \u0648\u064A`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} ${sizing.unit} \u0648\u0644\u0631\u064A`;
            }
            return `\u0689\u06CC\u0631 \u06A9\u0648\u0686\u0646\u06CC: ${issue2.origin} \u0628\u0627\u06CC\u062F ${adj}${issue2.minimum.toString()} \u0648\u064A`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.prefix}" \u0633\u0631\u0647 \u067E\u06CC\u0644 \u0634\u064A`;
            }
            if (_issue.format === "ends_with") {
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F "${_issue.suffix}" \u0633\u0631\u0647 \u067E\u0627\u06CC \u062A\u0647 \u0648\u0631\u0633\u064A\u0696\u064A`;
            }
            if (_issue.format === "includes") {
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F "${_issue.includes}" \u0648\u0644\u0631\u064A`;
            }
            if (_issue.format === "regex") {
              return `\u0646\u0627\u0633\u0645 \u0645\u062A\u0646: \u0628\u0627\u06CC\u062F \u062F ${_issue.pattern} \u0633\u0631\u0647 \u0645\u0637\u0627\u0628\u0642\u062A \u0648\u0644\u0631\u064A`;
            }
            return `${FormatDictionary[_issue.format] ?? issue2.format} \u0646\u0627\u0633\u0645 \u062F\u06CC`;
          }
          case "not_multiple_of":
            return `\u0646\u0627\u0633\u0645 \u0639\u062F\u062F: \u0628\u0627\u06CC\u062F \u062F ${issue2.divisor} \u0645\u0636\u0631\u0628 \u0648\u064A`;
          case "unrecognized_keys":
            return `\u0646\u0627\u0633\u0645 ${issue2.keys.length > 1 ? "\u06A9\u0644\u06CC\u0689\u0648\u0646\u0647" : "\u06A9\u0644\u06CC\u0689"}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u0646\u0627\u0633\u0645 \u06A9\u0644\u06CC\u0689 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
          case "invalid_union":
            return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
          case "invalid_element":
            return `\u0646\u0627\u0633\u0645 \u0639\u0646\u0635\u0631 \u067E\u0647 ${issue2.origin} \u06A9\u06D0`;
          default:
            return `\u0646\u0627\u0633\u0645\u0647 \u0648\u0631\u0648\u062F\u064A`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/pl.js
function pl_default() {
  return {
    localeError: error35()
  };
}
var error35;
var init_pl = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/pl.js"() {
    init_util();
    error35 = () => {
      const Sizable = {
        string: { unit: "znak\xF3w", verb: "mie\u0107" },
        file: { unit: "bajt\xF3w", verb: "mie\u0107" },
        array: { unit: "element\xF3w", verb: "mie\u0107" },
        set: { unit: "element\xF3w", verb: "mie\u0107" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "wyra\u017Cenie",
        email: "adres email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data i godzina w formacie ISO",
        date: "data w formacie ISO",
        time: "godzina w formacie ISO",
        duration: "czas trwania ISO",
        ipv4: "adres IPv4",
        ipv6: "adres IPv6",
        cidrv4: "zakres IPv4",
        cidrv6: "zakres IPv6",
        base64: "ci\u0105g znak\xF3w zakodowany w formacie base64",
        base64url: "ci\u0105g znak\xF3w zakodowany w formacie base64url",
        json_string: "ci\u0105g znak\xF3w w formacie JSON",
        e164: "liczba E.164",
        jwt: "JWT",
        template_literal: "wej\u015Bcie"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "liczba",
        array: "tablica"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano instanceof ${issue2.expected}, otrzymano ${received}`;
            }
            return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${expected}, otrzymano ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Nieprawid\u0142owe dane wej\u015Bciowe: oczekiwano ${stringifyPrimitive(issue2.values[0])}`;
            return `Nieprawid\u0142owa opcja: oczekiwano jednej z warto\u015Bci ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Za du\u017Ca warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "element\xF3w"}`;
            }
            return `Zbyt du\u017C(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Za ma\u0142a warto\u015B\u0107: oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie mie\u0107 ${adj}${issue2.minimum.toString()} ${sizing.unit ?? "element\xF3w"}`;
            }
            return `Zbyt ma\u0142(y/a/e): oczekiwano, \u017Ce ${issue2.origin ?? "warto\u015B\u0107"} b\u0119dzie wynosi\u0107 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zaczyna\u0107 si\u0119 od "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi ko\u0144czy\u0107 si\u0119 na "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi zawiera\u0107 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Nieprawid\u0142owy ci\u0105g znak\xF3w: musi odpowiada\u0107 wzorcowi ${_issue.pattern}`;
            return `Nieprawid\u0142ow(y/a/e) ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Nieprawid\u0142owa liczba: musi by\u0107 wielokrotno\u015Bci\u0105 ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Nierozpoznane klucze${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Nieprawid\u0142owy klucz w ${issue2.origin}`;
          case "invalid_union":
            return "Nieprawid\u0142owe dane wej\u015Bciowe";
          case "invalid_element":
            return `Nieprawid\u0142owa warto\u015B\u0107 w ${issue2.origin}`;
          default:
            return `Nieprawid\u0142owe dane wej\u015Bciowe`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/pt.js
function pt_default() {
  return {
    localeError: error36()
  };
}
var error36;
var init_pt = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/pt.js"() {
    init_util();
    error36 = () => {
      const Sizable = {
        string: { unit: "caracteres", verb: "ter" },
        file: { unit: "bytes", verb: "ter" },
        array: { unit: "itens", verb: "ter" },
        set: { unit: "itens", verb: "ter" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "padr\xE3o",
        email: "endere\xE7o de e-mail",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "data e hora ISO",
        date: "data ISO",
        time: "hora ISO",
        duration: "dura\xE7\xE3o ISO",
        ipv4: "endere\xE7o IPv4",
        ipv6: "endere\xE7o IPv6",
        cidrv4: "faixa de IPv4",
        cidrv6: "faixa de IPv6",
        base64: "texto codificado em base64",
        base64url: "URL codificada em base64",
        json_string: "texto JSON",
        e164: "n\xFAmero E.164",
        jwt: "JWT",
        template_literal: "entrada"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "n\xFAmero",
        null: "nulo"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Tipo inv\xE1lido: esperado instanceof ${issue2.expected}, recebido ${received}`;
            }
            return `Tipo inv\xE1lido: esperado ${expected}, recebido ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Entrada inv\xE1lida: esperado ${stringifyPrimitive(issue2.values[0])}`;
            return `Op\xE7\xE3o inv\xE1lida: esperada uma das ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Muito grande: esperado que ${issue2.origin ?? "valor"} tivesse ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementos"}`;
            return `Muito grande: esperado que ${issue2.origin ?? "valor"} fosse ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Muito pequeno: esperado que ${issue2.origin} tivesse ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Muito pequeno: esperado que ${issue2.origin} fosse ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `Texto inv\xE1lido: deve come\xE7ar com "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `Texto inv\xE1lido: deve terminar com "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `Texto inv\xE1lido: deve incluir "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `Texto inv\xE1lido: deve corresponder ao padr\xE3o ${_issue.pattern}`;
            return `${FormatDictionary[_issue.format] ?? issue2.format} inv\xE1lido`;
          }
          case "not_multiple_of":
            return `N\xFAmero inv\xE1lido: deve ser m\xFAltiplo de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Chave${issue2.keys.length > 1 ? "s" : ""} desconhecida${issue2.keys.length > 1 ? "s" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Chave inv\xE1lida em ${issue2.origin}`;
          case "invalid_union":
            return "Entrada inv\xE1lida";
          case "invalid_element":
            return `Valor inv\xE1lido em ${issue2.origin}`;
          default:
            return `Campo inv\xE1lido`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ro.js
function ro_default() {
  return {
    localeError: error37()
  };
}
var error37;
var init_ro = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ro.js"() {
    init_util();
    error37 = () => {
      const Sizable = {
        string: { unit: "caractere", verb: "s\u0103 aib\u0103" },
        file: { unit: "octe\u021Bi", verb: "s\u0103 aib\u0103" },
        array: { unit: "elemente", verb: "s\u0103 aib\u0103" },
        set: { unit: "elemente", verb: "s\u0103 aib\u0103" },
        map: { unit: "intr\u0103ri", verb: "s\u0103 aib\u0103" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "intrare",
        email: "adres\u0103 de email",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "dat\u0103 \u0219i or\u0103 ISO",
        date: "dat\u0103 ISO",
        time: "or\u0103 ISO",
        duration: "durat\u0103 ISO",
        ipv4: "adres\u0103 IPv4",
        ipv6: "adres\u0103 IPv6",
        mac: "adres\u0103 MAC",
        cidrv4: "interval IPv4",
        cidrv6: "interval IPv6",
        base64: "\u0219ir codat base64",
        base64url: "\u0219ir codat base64url",
        json_string: "\u0219ir JSON",
        e164: "num\u0103r E.164",
        jwt: "JWT",
        template_literal: "intrare"
      };
      const TypeDictionary = {
        nan: "NaN",
        string: "\u0219ir",
        number: "num\u0103r",
        boolean: "boolean",
        function: "func\u021Bie",
        array: "matrice",
        object: "obiect",
        undefined: "nedefinit",
        symbol: "simbol",
        bigint: "num\u0103r mare",
        void: "void",
        never: "never",
        map: "hart\u0103",
        set: "set"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            return `Intrare invalid\u0103: a\u0219teptat ${expected}, primit ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Intrare invalid\u0103: a\u0219teptat ${stringifyPrimitive(issue2.values[0])}`;
            return `Op\u021Biune invalid\u0103: a\u0219teptat una dintre ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} ${sizing.verb} ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elemente"}`;
            return `Prea mare: a\u0219teptat ca ${issue2.origin ?? "valoarea"} s\u0103 fie ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              return `Prea mic: a\u0219teptat ca ${issue2.origin} ${sizing.verb} ${adj}${issue2.minimum.toString()} ${sizing.unit}`;
            }
            return `Prea mic: a\u0219teptat ca ${issue2.origin} s\u0103 fie ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with") {
              return `\u0218ir invalid: trebuie s\u0103 \xEEnceap\u0103 cu "${_issue.prefix}"`;
            }
            if (_issue.format === "ends_with")
              return `\u0218ir invalid: trebuie s\u0103 se termine cu "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u0218ir invalid: trebuie s\u0103 includ\u0103 "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u0218ir invalid: trebuie s\u0103 se potriveasc\u0103 cu modelul ${_issue.pattern}`;
            return `Format invalid: ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `Num\u0103r invalid: trebuie s\u0103 fie multiplu de ${issue2.divisor}`;
          case "unrecognized_keys":
            return `Chei nerecunoscute: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `Cheie invalid\u0103 \xEEn ${issue2.origin}`;
          case "invalid_union":
            return "Intrare invalid\u0103";
          case "invalid_element":
            return `Valoare invalid\u0103 \xEEn ${issue2.origin}`;
          default:
            return `Intrare invalid\u0103`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ru.js
function getRussianPlural(count, one, few, many) {
  const absCount = Math.abs(count);
  const lastDigit = absCount % 10;
  const lastTwoDigits = absCount % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return many;
  }
  if (lastDigit === 1) {
    return one;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return few;
  }
  return many;
}
function ru_default() {
  return {
    localeError: error38()
  };
}
var error38;
var init_ru = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/ru.js"() {
    init_util();
    error38 = () => {
      const Sizable = {
        string: {
          unit: {
            one: "\u0441\u0438\u043C\u0432\u043E\u043B",
            few: "\u0441\u0438\u043C\u0432\u043E\u043B\u0430",
            many: "\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432"
          },
          verb: "\u0438\u043C\u0435\u0442\u044C"
        },
        file: {
          unit: {
            one: "\u0431\u0430\u0439\u0442",
            few: "\u0431\u0430\u0439\u0442\u0430",
            many: "\u0431\u0430\u0439\u0442"
          },
          verb: "\u0438\u043C\u0435\u0442\u044C"
        },
        array: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
          },
          verb: "\u0438\u043C\u0435\u0442\u044C"
        },
        set: {
          unit: {
            one: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442",
            few: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u0430",
            many: "\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u043E\u0432"
          },
          verb: "\u0438\u043C\u0435\u0442\u044C"
        }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "\u0432\u0432\u043E\u0434",
        email: "email \u0430\u0434\u0440\u0435\u0441",
        url: "URL",
        emoji: "\u044D\u043C\u043E\u0434\u0437\u0438",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO \u0434\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043C\u044F",
        date: "ISO \u0434\u0430\u0442\u0430",
        time: "ISO \u0432\u0440\u0435\u043C\u044F",
        duration: "ISO \u0434\u043B\u0438\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u044C",
        ipv4: "IPv4 \u0430\u0434\u0440\u0435\u0441",
        ipv6: "IPv6 \u0430\u0434\u0440\u0435\u0441",
        cidrv4: "IPv4 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        cidrv6: "IPv6 \u0434\u0438\u0430\u043F\u0430\u0437\u043E\u043D",
        base64: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64",
        base64url: "\u0441\u0442\u0440\u043E\u043A\u0430 \u0432 \u0444\u043E\u0440\u043C\u0430\u0442\u0435 base64url",
        json_string: "JSON \u0441\u0442\u0440\u043E\u043A\u0430",
        e164: "\u043D\u043E\u043C\u0435\u0440 E.164",
        jwt: "JWT",
        template_literal: "\u0432\u0432\u043E\u0434"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0447\u0438\u0441\u043B\u043E",
        array: "\u043C\u0430\u0441\u0441\u0438\u0432"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C instanceof ${issue2.expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
            }
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${expected}, \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0432\u043E\u0434: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C ${stringifyPrimitive(issue2.values[0])}`;
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u0432\u0430\u0440\u0438\u0430\u043D\u0442: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C \u043E\u0434\u043D\u043E \u0438\u0437 ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              const maxValue = Number(issue2.maximum);
              const unit = getRussianPlural(maxValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.maximum.toString()} ${unit}`;
            }
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u0431\u043E\u043B\u044C\u0448\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin ?? "\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435"} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.inclusive ? ">=" : ">";
            const sizing = getSizing(issue2.origin);
            if (sizing) {
              const minValue = Number(issue2.minimum);
              const unit = getRussianPlural(minValue, sizing.unit.one, sizing.unit.few, sizing.unit.many);
              return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 \u0438\u043C\u0435\u0442\u044C ${adj}${issue2.minimum.toString()} ${unit}`;
            }
            return `\u0421\u043B\u0438\u0448\u043A\u043E\u043C \u043C\u0430\u043B\u0435\u043D\u044C\u043A\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: \u043E\u0436\u0438\u0434\u0430\u043B\u043E\u0441\u044C, \u0447\u0442\u043E ${issue2.origin} \u0431\u0443\u0434\u0435\u0442 ${adj}${issue2.minimum.toString()}`;
          }
          case "invalid_format": {
            const _issue = issue2;
            if (_issue.format === "starts_with")
              return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u043D\u0430\u0447\u0438\u043D\u0430\u0442\u044C\u0441\u044F \u0441 "${_issue.prefix}"`;
            if (_issue.format === "ends_with")
              return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0437\u0430\u043A\u0430\u043D\u0447\u0438\u0432\u0430\u0442\u044C\u0441\u044F \u043D\u0430 "${_issue.suffix}"`;
            if (_issue.format === "includes")
              return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C "${_issue.includes}"`;
            if (_issue.format === "regex")
              return `\u041D\u0435\u0432\u0435\u0440\u043D\u0430\u044F \u0441\u0442\u0440\u043E\u043A\u0430: \u0434\u043E\u043B\u0436\u043D\u0430 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u043E\u0432\u0430\u0442\u044C \u0448\u0430\u0431\u043B\u043E\u043D\u0443 ${_issue.pattern}`;
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 ${FormatDictionary[_issue.format] ?? issue2.format}`;
          }
          case "not_multiple_of":
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0447\u0438\u0441\u043B\u043E: \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043A\u0440\u0430\u0442\u043D\u044B\u043C ${issue2.divisor}`;
          case "unrecognized_keys":
            return `\u041D\u0435\u0440\u0430\u0441\u043F\u043E\u0437\u043D\u0430\u043D\u043D${issue2.keys.length > 1 ? "\u044B\u0435" : "\u044B\u0439"} \u043A\u043B\u044E\u0447${issue2.keys.length > 1 ? "\u0438" : ""}: ${joinValues(issue2.keys, ", ")}`;
          case "invalid_key":
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043A\u043B\u044E\u0447 \u0432 ${issue2.origin}`;
          case "invalid_union":
            return "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435";
          case "invalid_element":
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435 \u0432 ${issue2.origin}`;
          default:
            return `\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0435 \u0432\u0445\u043E\u0434\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435`;
        }
      };
    };
  }
});

// ../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/sl.js
function sl_default() {
  return {
    localeError: error39()
  };
}
var error39;
var init_sl = __esm({
  "../../workspace/scratch/48a048f19b32/agrinexus/node_modules/zod/v4/locales/sl.js"() {
    init_util();
    error39 = () => {
      const Sizable = {
        string: { unit: "znakov", verb: "imeti" },
        file: { unit: "bajtov", verb: "imeti" },
        array: { unit: "elementov", verb: "imeti" },
        set: { unit: "elementov", verb: "imeti" }
      };
      function getSizing(origin) {
        return Sizable[origin] ?? null;
      }
      const FormatDictionary = {
        regex: "vnos",
        email: "e-po\u0161tni naslov",
        url: "URL",
        emoji: "emoji",
        uuid: "UUID",
        uuidv4: "UUIDv4",
        uuidv6: "UUIDv6",
        nanoid: "nanoid",
        guid: "GUID",
        cuid: "cuid",
        cuid2: "cuid2",
        ulid: "ULID",
        xid: "XID",
        ksuid: "KSUID",
        datetime: "ISO datum in \u010Das",
        date: "ISO datum",
        time: "ISO \u010Das",
        duration: "ISO trajanje",
        ipv4: "IPv4 naslov",
        ipv6: "IPv6 naslov",
        cidrv4: "obseg IPv4",
        cidrv6: "obseg IPv6",
        base64: "base64 kodiran niz",
        base64url: "base64url kodiran niz",
        json_string: "JSON niz",
        e164: "E.164 \u0161tevilka",
        jwt: "JWT",
        template_literal: "vnos"
      };
      const TypeDictionary = {
        nan: "NaN",
        number: "\u0161tevilo",
        array: "tabela"
      };
      return (issue2) => {
        switch (issue2.code) {
          case "invalid_type": {
            const expected = TypeDictionary[issue2.expected] ?? issue2.expected;
            const receivedType = parsedType(issue2.input);
            const received = TypeDictionary[receivedType] ?? receivedType;
            if (/^[A-Z]/.test(issue2.expected)) {
              return `Neveljaven vnos: pri\u010Dakovano instanceof ${issue2.expected}, prejeto ${received}`;
            }
            return `Neveljaven vnos: pri\u010Dakovano ${expected}, prejeto ${received}`;
          }
          case "invalid_value":
            if (issue2.values.length === 1)
              return `Neveljaven vnos: pri\u010Dakovano ${stringifyPrimitive(issue2.values[0])}`;
            return `Neveljavna mo\u017Enost: pri\u010Dakovano eno izmed ${joinValues(issue2.values, "|")}`;
          case "too_big": {
            const adj = issue2.inclusive ? "<=" : "<";
            const sizing = getSizing(issue2.origin);
            if (sizing)
              return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} imelo ${adj}${issue2.maximum.toString()} ${sizing.unit ?? "elementov"}`;
            return `Preveliko: pri\u010Dakovano, da bo ${issue2.origin ?? "vrednost"} ${adj}${issue2.maximum.toString()}`;
          }
          case "too_small": {
            const adj = issue2.incl×ŽûÓOÊ×¬¢h­µçHYÙ[ÛÛË[™Ù™œËš[Ü’][\ËÛÛ›Ý›Ý[™™Z]š[ÜŠNÂˆBˆÛÛœÝ][\ÈH×NÂˆÛÛœÝ[’[™Ù™œÈH×NÂˆÛÛœÝ[‘[˜Ý[ÛœÈH×NÂˆÛÛœÝ[˜Ý[Û•ÛÛÓ›Ý›Ý[™H×NÂˆÛÛœÝ[ÛÛ\]\XÝ[ÛœÈH×NÂˆÛÛœÝ[”Ú[XÝ[ÛœÈH×NÂˆ]\ÒÜÝYÚ[Ø[H˜[ÙNÂˆÛÛœÝ[\T]ÚXÝ[ÛœÈH×NÂˆÛÛœÝ[“PÔ\›Ý˜[™\]Y\ÝÈH×NÂˆÛÛœÝÛÛÕ\ÙYH×NÂˆÛÛœÝ[™Ù™“X\H™]ÈX\
[™Ù™œË›X\


HOˆÚÛÛ˜[YKJJNÂˆÛÛœÝ[˜Ý[Û“X\HZ[[˜Ý[Û•ÛÛX\
ÛÛÊNÂˆÛÛœÝÛÛ\]\•ÛÛˆHÛÛË™š[™


HOˆ\HOOH˜ÛÛ\]\ˆŠNÂˆÛÛœÝÚ[ÛÛˆHÛÛË™š[™


HOˆ\HOOHœÚ[ŠNÂˆÛÛœÝ\T]ÚÛÛˆHÛÛË™š[™


HOˆ\HOOH˜\WÜ]ÚŠNÂˆÛÛœÝXÜÛÛX\H™]ÈX\
ÛÛË™š[\Š

HOˆ\HOOHšÜÝYÝÛÛˆ	‰ˆœ›ÝšY\‘]OË\HOOH›XÜŠK›X\


HOˆ
K›X\


HOˆÝœ›ÝšY\‘]KœÙ\™\—ÛX™[JJNÂˆÛÛœÝÜšYÚ[˜[XÜÙ\™\“X™[ÈH™]ÈÙ]
XÜÛÛX\šÙ^\Ê
JNÂˆÛÛœÝ™\XÙXX›T[[YUÛÛÙ^\ÈH™]ÈÙ]
Ý]K™Ù]ÛÛÙX\˜Ú[[YUÛÛÊYÙ[
K›X\

ÛÛŠHOˆÙ]ÛÛÙX\˜Ú[[YUÛÛÙ^JÛÛŠJK™š[\Š
Ù^JHOˆ\[ÙˆÙ^HOOHœÝš[™ÈŠJNÂˆÛÛœÝØYYY™\œ™YÛÛÝ]HHÛÛXÝØYYY™\œ™YÛÛÝ]Qœ›ÛR\ÝÜžJš[Ü’][\ËYÙ[
NÂˆÙYYÜÝYXÜÛÛÑœ›ÛSØYYY™\œ™YÛÛÝ]JØYYY™\œ™YÛÛÝ]KXÜÛÛX\ÜšYÚ[˜[XÜÙ\™\“X™[ÊNÂˆÛÛœÝÙ[™\˜]YÛY[ÛÛÙX\˜ÚÝ]]ÐžPØ[H]ØZ]Z[Ù[™\˜]YÛY[ÛÛÙX\˜ÚÝ]]X\\Þ[˜ÊÂˆYÙ[ˆ[Ù[™\ÜÛœÙKˆ[ÛÛ^ˆÝ]K—ØÛÛ^ˆÛÛÂˆJNÂˆ]\ÑÙ[™\˜]YÛY[ÛÛÙX\˜ÚÝ]]ÈH˜[ÙNÂˆÛÛœÝ]˜Z[X›UÛÛÈHË‹‹ÛÛ×NÂˆ›Üˆ
ÛÛœÝÝ]]Ùˆ[Ù[™\ÜÛœÙK›Ý]]
HÂˆYˆ
Ý]]\HOOH›Y\ÜØYÙHŠHÂˆYˆ
Ý]]œ›ÛHOOH˜\ÜÚ\Ý[ŠHÂˆ][\Ëœ\Ú
™]È[“Y\ÜØYÙSÝ]]][JÝ]]YÙ[
JNÂˆBˆH[ÙHYˆ
Ý]]\HOOHÛÛÜÙX\˜ÚØØ[ŠHÂˆ][\Ëœ\Ú
™]È[•ÛÛÙX\˜ÚØ[][JÝ]]YÙ[
JNÂˆÛÛÕ\ÙYœ\Ú
ÛÛÜÙX\˜ÚŠNÂˆÛÛœÝÙ[™\˜]YÝ]]HÙ[™\˜]YÛY[ÛÛÙX\˜ÚÝ]]ÐžPØ[™Ù]
Ý]]
NÂˆYˆ
Ù[™\˜]YÝ]]
HÂˆ][\Ëœ\Ú
™]È[•ÛÛÙX\˜ÚÝ]]][JÙ[™\˜]YÝ]]›Ý]]YÙ[
JNÂˆ™XÛÜ™ØYYÛÛÙX\˜ÚÝ]]
ØYYY™\œ™YÛÛÝ]KÙ[™\˜]YÝ]]›Ý]]
NÂˆYÜÝYXÜÛÛÑœ›ÛUÛÛÙX\˜ÚÝ]]
Ù[™\˜]YÝ]]›Ý]]XÜÛÛX\Âˆ™\Ù\™Q^\Ý[™ÔÙ\™\“X™[ÎˆÜšYÚ[˜[XÜÙ\™\“X™[ÂˆJNÂˆÛÛœÝ›Ý™[[[YUÛÛÈH™YÚ\Ý\”[[YUÛÛÙX\˜ÚÛÛÊÂˆ]˜Z[X›UÛÛËˆ[˜Ý[Û“X\ˆXÜÛÛX\ˆ™\XÙXX›T[[YUÛÛÙ^\Ëˆ[[YUÛÛÎˆÙ[™\˜]YÝ]]œ[[YUÛÛÂˆJNÂˆÝ]Kœ™XÛÜ™ÛÛÙX\˜Ú[[YUÛÛÊYÙ[Ù[™\˜]YÝ]]›Ý]]›Ý™[[[YUÛÛÊNÂˆ\ÑÙ[™\˜]YÛY[ÛÛÙX\˜ÚÝ]]ÈHYNÂˆBˆH[ÙHYˆ
Ý]]\HOOHÛÛÜÙX\˜ÚÛÝ]]ŠHÂˆ][\Ëœ\Ú
™]È[•ÛÛÙX\˜ÚÝ]]][JÝ]]YÙ[
JNÂˆ™XÛÜ™ØYYÛÛÙX\˜ÚÝ]]
ØYYY™\œ™YÛÛÝ]KÝ]]
NÂˆYÜÝYXÜÛÛÑœ›ÛUÛÛÙX\˜ÚÝ]]
Ý]]XÜÛÛX\Âˆ™\Ù\™Q^\Ý[™ÔÙ\™\“X™[ÎˆÜšYÚ[˜[XÜÙ\™\“X™[ÂˆJNÂˆH[ÙHYˆ
Ý]]\HOOHšÜÝYÝÛÛØØ[ŠHÂˆ][\Ëœ\Ú
™]È[•ÛÛØ[][JÝ]]YÙ[
JNÂˆÛÛœÝÛÛ˜[YHHÝ]]›˜[YNÂˆÛÛÕ\ÙYœ\Ú
ÛÛ˜[YJNÂˆYˆ
Ý]]œ›ÝšY\‘]OË\HOOH›XÜØ\›Ý˜[Ü™\]Y\ÝˆÝ]]›˜[YHOOH›XÜØ\›Ý˜[Ü™\]Y\ÝŠHÂˆÛÛœÝ›ÝšY\‘]HHÝ]]œ›ÝšY\‘]NÂˆÛÛœÝXÜÙ\™\“X™[H›ÝšY\‘]KœÙ\™\—ÛX™[ÂˆÛÛœÝXÜÙ\™\•ÛÛHXÜÛÛX\™Ù]
XÜÙ\™\“X™[
NÂˆYˆ
\[ÙˆXÜÙ\™\•ÛÛOOH[™Yš[™YŠHÂˆÛÛœÝY\ÜØYÙHHPÔÙ\™\ˆ
	ÛXÜÙ\™\“X™[JH›Ý›Ý[™[ˆYÙ[
	ØYÙ[›˜[Y_JXÂˆY\œ›Ü•ÐÝ\œ™[Ü[ŠÂˆY\ÜØYÙKˆ]NˆÈXÜÜÙ\™\—ÛX™[ˆXÜÙ\™\“X™[BˆJNÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠY\ÜØYÙJNÂˆBˆÛÛœÝ\›Ý˜[][HH™]È[•ÛÛ\›Ý˜[][JÂˆ\NˆšÜÝYÝÛÛØØ[‹ˆ˜[YNˆ›ÝšY\‘]K›˜[YKˆYˆ›ÝšY\‘]KšYˆÝ]\Îˆš[—Ü›ÙÜ™\ÜÈ‹ˆ›ÝšY\‘]BˆKYÙ[
NÂˆ[“PÔ\›Ý˜[™\]Y\ÝËœ\Ú
Âˆ™\]Y\Ý][Nˆ\›Ý˜[][KˆXÜÛÛˆXÜÙ\™\•ÛÛˆJNÂˆYˆ
[XÜÙ\™\•ÛÛœ›ÝšY\‘]K›Û—Ø\›Ý˜[
HÂˆ][\Ëœ\Ú
\›Ý˜[][JNÂˆBˆBˆH[ÙHYˆ
Ý]]\HOOHœ™X\ÛÛš[™ÈŠHÂˆ][\Ëœ\Ú
™]È[”™X\ÛÛš[™Ò][JÝ]]YÙ[
JNÂˆH[ÙHYˆ
Ý]]\HOOH˜ÛÛ\]\—ØØ[ŠHÂˆ[™UÛÛØ[XÝ[ÛŠÂˆÝ]]ˆÛÛˆÛÛ\]\•ÛÛ‹ˆYÙ[ˆ\œ›Ü“Y\ÜØYÙNˆ“[Ù[›ÙXÙYÛÛ\]\ˆXÝ[ÛˆÚ]Ý]HÛÛ\]\ˆÛÛˆ‹ˆ\œ›Ü‘]NˆÈYÙ[Û˜[YNˆYÙ[›˜[YHKˆ][\ËˆÛÛÕ\ÙYˆXÝ[ÛœÎˆ[ÛÛ\]\XÝ[ÛœËˆZ[XÝ[ÛŽˆ
™\ÛÛ™YÛÛ
HOˆ
ÂˆÛÛØ[ˆÝ]]ˆÛÛ\]\Žˆ™\ÛÛ™YÛÛˆJBˆJNÂˆH[ÙHYˆ
Ý]]\HOOHœÚ[ØØ[ŠHÂˆÛÛœÝ™\ÛÛ™YÚ[ÛÛH[œÝ\™UÛÛ]˜Z[X›JÚ[ÛÛ‹“[Ù[›ÙXÙYÚ[XÝ[ÛˆÚ]Ý]HÚ[ÛÛˆ‹ÈYÙ[Û˜[YNˆYÙ[›˜[YHJNÂˆ][\Ëœ\Ú
™]È[•ÛÛØ[][JÝ]]YÙ[
JNÂˆÛÛÕ\ÙYœ\Ú
™\ÛÛ™YÚ[ÛÛ›˜[YJNÂˆÛÛœÝÚ[[š\›Û›Y[\HH™\ÛÛ™YÚ[ÛÛ™[š\›Û›Y[Ë\HÏÈ›ØØ[ŽÂˆYˆ
Ú[[š\›Û›Y[\HOOH›ØØ[ŠHÂˆYˆ
\ÔÚ[Ø[[™[™ÔÝ]\ÊÝ]]œÝ]\ÊJHÂˆ\ÒÜÝYÚ[Ø[HYNÂˆBˆÛÛ[YNÂˆBˆYˆ
\™\ÛÛ™YÚ[ÛÛœÚ[
HÂˆÛÛœÝY\ÜØYÙHH“[Ù[›ÙXÙYØØ[Ú[XÝ[ÛˆÚ]Ý]HØØ[Ú[[\[Y[][Û‹ˆŽÂˆY\œ›Ü•ÐÝ\œ™[Ü[ŠÂˆY\ÜØYÙKˆ]NˆÈYÙ[Û˜[YNˆYÙ[›˜[YHBˆJNÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠY\ÜØYÙJNÂˆBˆ[”Ú[XÝ[ÛœËœ\Ú
ÂˆÛÛØ[ˆÝ]]ˆÚ[ˆ™\ÛÛ™YÚ[ÛÛˆJNÂˆH[ÙHYˆ
Ý]]\HOOHœÚ[ØØ[ÛÝ]]ŠHÂˆ][\Ëœ\Ú
™]È[•ÛÛØ[Ý]]][JÝ]]YÙ[Ý]]›Ý]]
JNÂˆYˆ
\Ô[™[™ÔÚ[Ý]]Ý]\ÊÝ]]
JHÂˆ\ÒÜÝYÚ[Ø[HYNÂˆBˆH[ÙHYˆ
Ý]]\HOOH˜\WÜ]ÚØØ[ŠHÂˆ[™UÛÛØ[XÝ[ÛŠÂˆÝ]]ˆÛÛˆ\T]ÚÛÛ‹ˆYÙ[ˆ\œ›Ü“Y\ÜØYÙNˆ“[Ù[›ÙXÙY\WÜ]ÚXÝ[ÛˆÚ]Ý][ˆ\WÜ]ÚÛÛˆ‹ˆ\œ›Ü‘]NˆÈYÙ[Û˜[YNˆYÙ[›˜[YHKˆ][\ËˆÛÛÕ\ÙYˆXÝ[ÛœÎˆ[\T]ÚXÝ[ÛœËˆZ[XÝ[ÛŽˆ
™\ÛÛ™YÛÛ
HOˆ
ÂˆÛÛØ[ˆÝ]]ˆ\T]Úˆ™\ÛÛ™YÛÛˆJBˆJNÂˆBˆYˆ
Ý]]\HOOH™[˜Ý[Û—ØØ[ŠHÂˆÛÛ[YNÂˆBˆÛÛœÝ™\ÛÛ™YH™\ÛÛ™Q[˜Ý[Û“Ü’[™Ù™ŠÝ]][™Ù™“X\[˜Ý[Û“X\YÙ[
NÂˆYˆ
™\ÛÛ™Y\HOOH››ÝÙ›Ý[™ŠHÂˆYˆ
ÛÛ›Ý›Ý[™™Z]š[ÜˆOOHœ™]\›—Ù\œ›Ü—Ý×Û[Ù[ŠHÂˆ›ÝÑ[˜Ý[Û•ÛÛ›Ý›Ý[™
™\ÛÛ™YÛÛ˜[YKYÙ[
NÂˆBˆ™XÛÜ™Z\ÜÚ[™Ñ[˜Ý[Û•ÛÛ
Ý]]™\ÛÛ™YÛÛ˜[YKYÙ[][\ËÛÛÕ\ÙY[˜Ý[Û•ÛÛÓ›Ý›Ý[™
NÂˆH[ÙHYˆ
™\ÛÛ™Y\HOOHš[™Ù™ˆŠHÂˆ™XÛÜ™[™Ù™”™\]Y\Ý
Ý]]™\ÛÛ™Yš[™Ù™‹YÙ[][\ËÛÛÕ\ÙY[’[™Ù™œÊNÂˆH[ÙHÂˆ[œÝ\™QY™\œ™Y[˜Ý[Û•ÛÛØYY
Ý]]™\ÛÛ™YÛÛØYYY™\œ™YÛÛÝ]K›ØYYÛÛ˜[Y\ËYÙ[
NÂˆÛÛœÝ›Ü›X[^™YÛÛØ[H›Ü›X[^™Q[˜Ý[Û•ÛÛØ[›Ü”ÝÜ˜YÙJÝ]]™\ÛÛ™YÛÛ
NÂˆÛÛÕ\ÙYœ\Ú
Ù][˜Ý[Û•ÛÛ]X[YšYY˜[YJ™\ÛÛ™YÛÛ
HÏÈ™\ÛÛ™YÛÛ›˜[YJNÂˆ][\Ëœ\Ú
™]È[•ÛÛØ[][J›Ü›X[^™YÛÛØ[YÙ[
JNÂˆ[‘[˜Ý[ÛœËœ\Ú
ÂˆÛÛØ[ˆ›Ü›X[^™YÛÛØ[ˆÛÛˆ™\ÛÛ™YÛÛˆJNÂˆBˆBˆ™]\›ˆÂˆ™]Ò][\Îˆ][\Ëˆ[™Ù™œÎˆ[’[™Ù™œËˆ[˜Ý[ÛœÎˆ[‘[˜Ý[ÛœËˆ[˜Ý[Û•ÛÛÓ›Ý›Ý[™ˆÛÛ\]\XÝ[ÛœÎˆ[ÛÛ\]\XÝ[ÛœËˆÚ[XÝ[ÛœÎˆ[”Ú[XÝ[ÛœËˆ\T]ÚXÝ[ÛœÎˆ[\T]ÚXÝ[ÛœËˆXÜ\›Ý˜[™\]Y\ÝÎˆ[“PÔ\›Ý˜[™\]Y\ÝËˆÛÛÕ\ÙYˆ\ÕÛÛÓÜ\›Ý˜[ÕÔ[Š
HÂˆ™]\›ˆ[’[™Ù™œË›[™Ýˆ[‘[˜Ý[ÛœË›[™Ýˆ[˜Ý[Û•ÛÛÓ›Ý›Ý[™›[™Ýˆ[“PÔ\›Ý˜[™\]Y\ÝË›[™Ýˆ[ÛÛ\]\XÝ[ÛœË›[™Ýˆ[”Ú[XÝ[ÛœË›[™Ýˆ\ÒÜÝYÚ[Ø[[\T]ÚXÝ[ÛœË›[™Ýˆ\ÑÙ[™\˜]YÛY[ÛÛÙX\˜ÚÝ]]ÎÂˆBˆNÂŸB˜\ˆ[š]Û[Ù[Ý]]ÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Û[Ù[Ý]]Ë›ZœÈŠ
HÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]Ú][\ÌŠ
NÂˆ[š]ÝÛÛ

NÂˆ[š]ØÛÛ^

NÂˆ[š]ÝÛÛY[]J
NÂˆ[š]Ý][ÌŠ
NÂˆ[š]ÝÛÛÙX\˜ÚŠ
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜÝ™X[Z[™Ë›ZœÂ™[˜Ý[ÛˆÙ][’][TÝ™X[Q]™[˜[YJ][JHÂˆYˆ
][H[œÝ[˜Ù[Ùˆ[“Y\ÜØYÙSÝ]]][JHÂˆ™]\›ˆ›Y\ÜØYÙWÛÝ]]ØÜ™X]YŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[’[™Ù™Ø[][JHÂˆ™]\›ˆš[™Ù™—Ü™\]Y\ÝYŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[’[™Ù™“Ý]]][JHÂˆ™]\›ˆš[™Ù™—ÛØØÝ\œ™YŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛÙX\˜ÚØ[][JHÂˆ™]\›ˆÛÛÜÙX\˜ÚØØ[YŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛÙX\˜ÚÝ]]][JHÂˆ™]\›ˆÛÛÜÙX\˜ÚÛÝ]]ØÜ™X]YŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛØ[][JHÂˆ™]\›ˆÛÛØØ[YŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛØ[Ý]]][JHÂˆ™]\›ˆÛÛÛÝ]]ŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[”™X\ÛÛš[™Ò][JHÂˆ™]\›ˆœ™X\ÛÛš[™×Ú][WØÜ™X]YŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHÂˆ™]\›ˆÛÛØ\›Ý˜[Ü™\]Y\ÝYŽÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ[œ]Y]YT[’][TÝ™X[Q]™[
™\Ý[][JHÂˆÛÛœÝ][S˜[YHHÙ][’][TÝ™X[Q]™[˜[YJ][JNÂˆYˆ
Z][S˜[YJHÂˆÙÙÙ\—ÙY˜][Ø\›Š•[šÛ›ÝÛˆ][H\Nˆ‹][JNÂˆ™]\›ŽÂˆBˆ™\Ý[—ØY][J™]È[’][TÝ™X[Q]™[
][S˜[YK][JJNÂŸB™[˜Ý[ÛˆÝ™X[TÝ\][\ÕÔ[”™\Ý[
™\Ý[][\ÊHÂˆ›Üˆ
ÛÛœÝ][HÙˆ][\ÊHÂˆ[œ]Y]YT[’][TÝ™X[Q]™[
™\Ý[][JNÂˆBŸB™[˜Ý[ÛˆYÝ\Ô[”™\Ý[
™\Ý[Ý\Ü[ÛœÊHÂˆÛÛœÝÚÚ\Y][\ÈHÜ[ÛœÏËœÚÚ\][\ÎÂˆ›Üˆ
ÛÛœÝ][HÙˆÝ\›™]ÔÝ\][\ÊHÂˆYˆ
ÚÚ\Y][\ÏËš\Ê][JJHÂˆÛÛ[YNÂˆBˆ[œ]Y]YT[’][TÝ™X[Q]™[
™\Ý[][JNÂˆBŸB˜\ˆ\ÐX›Ü\œ›ÜŽÂ˜\ˆ[š]ÜÝ™X[Z[™ÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜÝ™X[Z[™Ë›ZœÈŠ
HÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]Ù]™[Ê
NÂˆ[š]Ú][\ÌŠ
NÂˆ\ÐX›Ü\œ›ÜˆH
\œ›ÜLJHOˆÂˆYˆ
Y\œ›ÜLJHÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›Üˆ	‰ˆ\œ›ÜLK›˜[YHOOHX›Ü\œ›ÜˆŠHÂˆ™]\›ˆYNÂˆBˆÛÛœÝÛQ^Ù\[ÛÝÜˆH\[ÙˆÓQ^Ù\[ÛˆOOH[™Yš[™YˆÈÓQ^Ù\[Ûˆˆ›ÚYÂˆYˆ
ÛQ^Ù\[ÛÝÜˆ	‰ˆ\œ›ÜLH[œÝ[˜Ù[ÙˆÛQ^Ù\[ÛÝÜˆ	‰ˆ\œ›ÜLK›˜[YHOOHX›Ü\œ›ÜˆŠHÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ˜[ÙNÂˆNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÛY[[ÜžKÜÙ\ÜÚ[Û‹›ZœÂ™[˜Ý[Ûˆ\ÓÜ[RT™\ÜÛœÙ\ÐÛÛ\XÝ[Û]Ø\™TÙ\ÜÚ[ÛŠÙ\ÜÚ[ÛŠHÂˆ™]\›ˆH\Ù\ÜÚ[Ûˆ	‰ˆ\[ÙˆÙ\ÜÚ[Û‹œ[ÛÛ\XÝ[ÛˆOOH™[˜Ý[ÛˆŽÂŸB˜\ˆ[š]ÜÙ\ÜÚ[ÛŒˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÛY[[ÜžKÜÙ\ÜÚ[Û‹›ZœÈŠ
HÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜÙ\ÜÚ[Û”\œÚ\Ý[˜ÙK›ZœÂ™[˜Ý[ÛˆÜ™X]TÙ\ÜÚ[Û”\œÚ\Ý[˜ÙU˜XÚÙ\ŠÜ[ÛœÊHÂˆÛÛœÝÈÙ\ÜÚ[ÛˆHHÜ[ÛœÎÂˆYˆ
\Ù\ÜÚ[ÛŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛ\ÜÈÙ\ÜÚ[Û”\œÚ\Ý[˜ÙU˜XÚÙ\’[\ÂˆÛÛœÝXÝÜŠ
HÂˆ×ÜX›XÑšY[
\ËœÙ\ÜÚ[ÛˆŠNÂˆ×ÜX›XÑšY[
\Ëš\ÐØ[[Ù[[œ]š[\ˆŠNÂˆ×ÜX›XÑšY[
\Ëœ\œÚ\Ý[œ]ŠNÂˆ×ÜX›XÑšY[
\Ë›ÜšYÚ[˜[Û˜\ÚÝŠNÂˆ×ÜX›XÑšY[
\Ë™š[\™YÛ˜\ÚÝŠNÂˆ×ÜX›XÑšY[
\Ëœ[™[™ÕÜš]PÛÝ[ÈŠNÂˆ×ÜX›XÑšY[
\Ëœ\œÚ\ÝY[œ]‹˜[ÙJNÂˆ×ÜX›XÑšY[
\ËœÙ]™\\™Y][\È‹
][\ÊHOˆÂˆÛÛœÝÙ\ÜÚ[Û’][\ÈH][\ÈÏÈ×NÂˆ\Ë›ÜšYÚ[˜[Û˜\ÚÝHÙ\ÜÚ[Û’][\Ë›X\

][JHOˆÝXÝ\™YÛÛ™J][JJNÂˆ\Ëœ[™[™ÕÜš]PÛÝ[ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝ][HÙˆÙ\ÜÚ[Û’][\ÊHÂˆÛÛœÝÙ^HHÙ]YÙ[[œ]][RÙ^J][JNÂˆ\Ëœ[™[™ÕÜš]PÛÝ[ËœÙ]
Ù^K
\Ëœ[™[™ÕÜš]PÛÝ[Ë™Ù]
Ù^JHÏÈ
H
ÈJNÂˆBˆJNÂˆ×ÜX›XÑšY[
\Ëœ™XÛÜ™\›’][\È‹
ÛÝ\˜ÙR][\Ëš[\™Y][\ÊHOˆÂˆÛÛœÝ[™[™ÐÛÝ[ÈH\Ëœ[™[™ÕÜš]PÛÝ[ÎÂˆYˆ
š[\™Y][\ÈOOH›ÚY
HÂˆYˆ
\[™[™ÐÛÝ[ÊHÂˆ\Ë™š[\™YÛ˜\ÚÝHÛÛ™R][\Êš[\™Y][\ÊNÂˆ™]\›ŽÂˆBˆÛÛœÝ™^Û˜\ÚÝHÛÛXÝ\œÚ\ÝX›Qš[\™Y][\ÊÂˆ[™[™ÐÛÝ[ËˆÛÝ\˜ÙR][\Ëˆš[\™Y][\Ëˆ^\Ý[™ÔÛ˜\ÚÝˆ\Ë™š[\™YÛ˜\ÚÝˆJNÂˆYˆ
™^Û˜\ÚÝOOH›ÚY
HÂˆ\Ë™š[\™YÛ˜\ÚÝH™^Û˜\ÚÝÂˆBˆ™]\›ŽÂˆBˆ\Ë™š[\™YÛ˜\ÚÝHZ[Û˜\ÚÝ›Ü•[™š[\™Y][\ÊÂˆ[™[™ÐÛÝ[ËˆÛÝ\˜ÙR][\Ëˆ^\Ý[™ÔÛ˜\ÚÝˆ\Ë™š[\™YÛ˜\ÚÝˆJNÂˆJNÂˆ×ÜX›XÑšY[
\Ë™Ù]][\Ñ›Ü”\œÚ\Ý[˜ÙH‹

HOˆÂˆYˆ
\Ë™š[\™YÛ˜\ÚÝOOH›ÚY
HÂˆ™]\›ˆ\Ë™š[\™YÛ˜\ÚÝÂˆBˆYˆ
\Ëš\ÐØ[[Ù[[œ]š[\ŠHÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆ\Ë›ÜšYÚ[˜[Û˜\ÚÝÂˆJNÂˆ×ÜX›XÑšY[
\Ë˜Z[\œÚ\Ý[œ]Û˜ÙH‹
Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠHOˆÂˆYˆ
]\ËœÙ\ÜÚ[ÛˆÙ\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ\œÚ\Ý[œ]H\Ëœ\œÚ\Ý[œ]ÏÈØ]™TÝ™X[R[œ]ÔÙ\ÜÚ[ÛŽÂˆ™]\›ˆ\Þ[˜È

HOˆÂˆYˆ
\Ëœ\œÚ\ÝY[œ]
HÂˆ™]\›ŽÂˆBˆÛÛœÝ][\ÕÔ\œÚ\ÝH\Ë™Ù]][\Ñ›Ü”\œÚ\Ý[˜ÙJ
NÂˆYˆ
Z][\ÕÔ\œÚ\Ý][\ÕÔ\œÚ\Ý›[™ÝOOH
HÂˆ™]\›ŽÂˆBˆ\Ëœ\œÚ\ÝY[œ]HYNÂˆ]ØZ]\œÚ\Ý[œ]
\ËœÙ\ÜÚ[Û‹][\ÕÔ\œÚ\Ý
NÂˆNÂˆJNÂˆ\ËœÙ\ÜÚ[ÛˆHÜ[ÛœËœÙ\ÜÚ[ÛŽÂˆ\Ëš\ÐØ[[Ù[[œ]š[\ˆHÜ[ÛœËš\ÐØ[[Ù[[œ]š[\ŽÂˆ\Ëœ\œÚ\Ý[œ]HÜ[ÛœËœ\œÚ\Ý[œ]Âˆ\Ë›ÜšYÚ[˜[Û˜\ÚÝHÜ[ÛœËœ™\Ý[Z[™Ñœ›ÛTÝ]HÈ×Hˆ›ÚYÂˆ\Ë™š[\™YÛ˜\ÚÝH›ÚYÂˆ\Ëœ[™[™ÕÜš]PÛÝ[ÈHÜ[ÛœËœ™\Ý[Z[™Ñœ›ÛTÝ]HÈÊˆ×ÔT‘W×È
‹È™]ÈX\

Hˆ›ÚYÂˆBˆBˆ™]\›ˆ™]ÈÙ\ÜÚ[Û”\œÚ\Ý[˜ÙU˜XÚÙ\’[\

NÂŸB™[˜Ý[ÛˆÛÛ™R][\Ê][\ÊHÂˆ™]\›ˆ][\Ë›X\

][JHOˆÝXÝ\™YÛÛ™J][JJNÂŸB™[˜Ý[ÛˆZ[ÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ÊÛÝ\˜ÙR][\ÊHÂˆÛÛœÝÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙXZÓX\

NÂˆ›Üˆ
ÛÛœÝÛÝ\˜ÙHÙˆÛÝ\˜ÙR][\ÊHÂˆYˆ
\ÛÝ\˜ÙH\[ÙˆÛÝ\˜ÙHOOH›Øš™XÝŠHÂˆÛÛ[YNÂˆBˆÛÛœÝ™^ÛÝ[H
ÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[Ë™Ù]
ÛÝ\˜ÙJHÏÈ
H
ÈNÂˆÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ËœÙ]
ÛÝ\˜ÙK™^ÛÝ[
NÂˆBˆ™]\›ˆÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ÎÂŸB™[˜Ý[ÛˆÛÛXÝ\œÚ\ÝX›Qš[\™Y][\ÊÜ[ÛœÊHÂˆÛÛœÝÈ[™[™ÐÛÝ[ËÛÝ\˜ÙR][\Ëš[\™Y][\Ë^\Ý[™ÔÛ˜\ÚÝHHÜ[ÛœÎÂˆÛÛœÝ\œÚ\ÝX›R][\ÈH×NÂˆÛÛœÝÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ÈHZ[ÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ÊÛÝ\˜ÙR][\ÊNÂˆÛÛœÝÛÛœÝ[YP[žT[™[™ÕÜš]TÛÝH

HOˆÂˆ›Üˆ
ÛÛœÝÚÙ^K™[XZ[š[™×HÙˆ[™[™ÐÛÝ[ÊHÂˆYˆ
™[XZ[š[™Èˆ
HÂˆ[™[™ÐÛÝ[ËœÙ]
Ù^K™[XZ[š[™ÈHJNÂˆ™]\›ˆYNÂˆBˆBˆ™]\›ˆ˜[ÙNÂˆNÂˆ›Üˆ
]HHÈHš[\™Y][\Ë›[™ÝÈJÊÊHÂˆÛÛœÝš[\™Y][HHš[\™Y][\ÖÚWNÂˆYˆ
Yš[\™Y][JHÂˆÛÛ[YNÂˆBˆ][ØØ]YH˜[ÙNÂˆÛÛœÝÛÝ\˜ÙHHÛÝ\˜ÙR][\ÖÚWNÂˆYˆ
ÛÝ\˜ÙH	‰ˆ\[ÙˆÛÝ\˜ÙHOOH›Øš™XÝŠHÂˆÛÛœÝ[™[™ÓØØÝ\œ™[˜Ù\ÈH
ÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[Ë™Ù]
ÛÝ\˜ÙJHÏÈ
HHNÂˆÛÝ\˜ÙSØØÝ\œ™[˜ÙPÛÝ[ËœÙ]
ÛÝ\˜ÙK[™[™ÓØØÝ\œ™[˜Ù\ÊNÂˆYˆ
[™[™ÓØØÝ\œ™[˜Ù\Èˆ
HÂˆÛÛ[YNÂˆBˆÛÛœÝÛÝ\˜ÙRÙ^HHÙ]YÙ[[œ]][RÙ^JÛÝ\˜ÙJNÂˆÛÛœÝ™[XZ[š[™ÈH[™[™ÐÛÝ[Ë™Ù]
ÛÝ\˜ÙRÙ^JHÏÈÂˆYˆ
™[XZ[š[™Èˆ
HÂˆ[™[™ÐÛÝ[ËœÙ]
ÛÝ\˜ÙRÙ^K™[XZ[š[™ÈHJNÂˆ\œÚ\ÝX›R][\Ëœ\Ú
ÝXÝ\™YÛÛ™Jš[\™Y][JJNÂˆ[ØØ]YHYNÂˆÛÛ[YNÂˆBˆBˆÛÛœÝš[\™YÙ^HHÙ]YÙ[[œ]][RÙ^Jš[\™Y][JNÂˆÛÛœÝš[\™Y™[XZ[š[™ÈH[™[™ÐÛÝ[Ë™Ù]
š[\™YÙ^JHÏÈÂˆYˆ
š[\™Y™[XZ[š[™Èˆ
HÂˆ[™[™ÐÛÝ[ËœÙ]
š[\™YÙ^Kš[\™Y™[XZ[š[™ÈHJNÂˆ\œÚ\ÝX›R][\Ëœ\Ú
ÝXÝ\™YÛÛ™Jš[\™Y][JJNÂˆ[ØØ]YHYNÂˆÛÛ[YNÂˆBˆYˆ
\ÛÝ\˜ÙH	‰ˆÛÛœÝ[YP[žT[™[™ÕÜš]TÛÝ

JHÂˆ\œÚ\ÝX›R][\Ëœ\Ú
ÝXÝ\™YÛÛ™Jš[\™Y][JJNÂˆ[ØØ]YHYNÂˆBˆYˆ
X[ØØ]Y	‰ˆ\ÛÝ\˜ÙH	‰ˆ^\Ý[™ÔÛ˜\ÚÝOOH›ÚY
HÂˆ\œÚ\ÝX›R][\Ëœ\Ú
ÝXÝ\™YÛÛ™Jš[\™Y][JJNÂˆBˆBˆYˆ
\œÚ\ÝX›R][\Ë›[™Ýˆ^\Ý[™ÔÛ˜\ÚÝOOH›ÚY
HÂˆ™]\›ˆ\œÚ\ÝX›R][\ÎÂˆBˆ™]\›ˆ^\Ý[™ÔÛ˜\ÚÝÂŸB™[˜Ý[ÛˆZ[Û˜\ÚÝ›Ü•[™š[\™Y][\ÊÜ[ÛœÊHÂˆÛÛœÝÈ[™[™ÐÛÝ[ËÛÝ\˜ÙR][\Ë^\Ý[™ÔÛ˜\ÚÝHHÜ[ÛœÎÂˆYˆ
\[™[™ÐÛÝ[ÊHÂˆÛÛœÝš[\™YˆHÛÝ\˜ÙR][\Ë™š[\Š
][JHOˆ›ÛÛX[Š][JJK›X\

][JHOˆÝXÝ\™YÛÛ™J][JJNÂˆ™]\›ˆš[\™Y‹›[™ÝˆÈš[\™Yˆˆ^\Ý[™ÔÛ˜\ÚÝOOH›ÚYÈ×Hˆ^\Ý[™ÔÛ˜\ÚÝÂˆBˆÛÛœÝš[\™YH×NÂˆ›Üˆ
ÛÛœÝ][HÙˆÛÝ\˜ÙR][\ÊHÂˆYˆ
Z][JHÂˆÛÛ[YNÂˆBˆÛÛœÝÙ^HHÙ]YÙ[[œ]][RÙ^J][JNÂˆÛÛœÝ™[XZ[š[™ÈH[™[™ÐÛÝ[Ë™Ù]
Ù^JHÏÈÂˆYˆ
™[XZ[š[™ÈH
HÂˆÛÛ[YNÂˆBˆ[™[™ÐÛÝ[ËœÙ]
Ù^K™[XZ[š[™ÈHJNÂˆš[\™Yœ\Ú
ÝXÝ\™YÛÛ™J][JJNÂˆBˆYˆ
š[\™Y›[™Ýˆ
HÂˆ™]\›ˆš[\™YÂˆBˆ™]\›ˆ^\Ý[™ÔÛ˜\ÚÝOOH›ÚYÈ×Hˆ^\Ý[™ÔÛ˜\ÚÝÂŸB˜\Þ[˜È[˜Ý[ÛˆØ]™UÔÙ\ÜÚ[ÛŠÙ\ÜÚ[Û‹Ù\ÜÚ[Û’[œ]][\Ë™\Ý[
HÂˆÛÛœÝÝ]HH™\Ý[œÝ]NÂˆÛÛœÝ[™XYT\œÚ\ÝYHÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[ÏÈÂˆÛÛœÝ™]Ô[’][\ÈH™\Ý[›™]Ò][\ËœÛXÙJ[™XYT\œÚ\ÝY
NÂˆYˆ
\[Ùˆ›ØÙ\ÜÈOOH[™Yš[™Yˆ	‰ˆ›ØÙ\ÜË™[Ë“ÔSRWÐQÑS•××ÑP•Q×ÔÐU‘WÔÑTÔÒSÓŠHÂˆÛÛœÛÛK™XYÊœØ]™UÔÙ\ÜÚ[ÛŽ›™]Ô[’][\È‹™]Ô[’][\Ë›X\

][JHOˆ][K\JJNÂˆBˆ]ØZ]\œÚ\Ý[’][\ÕÔÙ\ÜÚ[ÛŠÂˆÙ\ÜÚ[Û‹ˆÝ]Kˆ™]Ô[’][\Ëˆ^˜R[œ]][\ÎˆÙ\ÜÚ[Û’[œ]][\Ëˆ\Ý™\ÜÛœÙRYˆ™\Ý[›\Ý™\ÜÛœÙRYˆ[™XYT\œÚ\ÝYÛÝ[ˆ[™XYT\œÚ\ÝYˆJNÂŸB˜\Þ[˜È[˜Ý[ÛˆØ]™TÝ™X[R[œ]ÔÙ\ÜÚ[ÛŠÙ\ÜÚ[Û‹Ù\ÜÚ[Û’[œ]][\ÊHÂˆYˆ
\Ù\ÜÚ[ÛŠHÂˆ™]\›ŽÂˆBˆYˆ
\Ù\ÜÚ[Û’[œ]][\ÈÙ\ÜÚ[Û’[œ]][\Ë›[™ÝOOH
HÂˆ™]\›ŽÂˆBˆÛÛœÝØ[š]^™Y[œ]H›Ü›X[^™R][\Ñ›Ü”Ù\ÜÚ[Û”\œÚ\Ý[˜ÙJÙ\ÜÚ[Û’[œ]][\ÊNÂˆ]ØZ]Ù\ÜÚ[Û‹˜Y][\ÊØ[š]^™Y[œ]
NÂŸB˜\Þ[˜È[˜Ý[ÛˆØ]™TÝ™X[T™\Ý[ÔÙ\ÜÚ[ÛŠÙ\ÜÚ[Û‹™\Ý[
HÂˆÛÛœÝÝ]HH™\Ý[œÝ]NÂˆÛÛœÝ[™XYT\œÚ\ÝYHÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[ÏÈÂˆÛÛœÝ™]Ô[’][\ÈH™\Ý[›™]Ò][\ËœÛXÙJ[™XYT\œÚ\ÝY
NÂˆ]ØZ]\œÚ\Ý[’][\ÕÔÙ\ÜÚ[ÛŠÂˆÙ\ÜÚ[Û‹ˆÝ]Kˆ™]Ô[’][\Ëˆ\Ý™\ÜÛœÙRYˆ™\Ý[›\Ý™\ÜÛœÙRYˆ[™XYT\œÚ\ÝYÛÝ[ˆ[™XYT\œÚ\ÝYˆJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\\™R[œ]][\ÕÚ]Ù\ÜÚ[ÛŠ[œ]Ù\ÜÚ[Û‹Ù\ÜÚ[Û’[œ]Ø[˜XÚËÜ[ÛœÊHÂˆYˆ
\Ù\ÜÚ[ÛŠHÂˆ™]\›ˆÂˆ™\\™Y[œ]ˆ[œ]ˆÙ\ÜÚ[Û’][\Îˆ›ÚYˆNÂˆBˆÛÛœÝ[˜ÛYR\ÝÜžR[”™\\™Y[œ]HÜ[ÛœÏËš[˜ÛYR\ÝÜžR[”™\\™Y[œ]ÏÈYNÂˆÛÛœÝ™\Ù\™Q›ÜY™]Ò][\ÈHÜ[ÛœÏËœ™\Ù\™Q›ÜY™]Ò][\ÈÏÈ˜[ÙNÂˆÛÛœÝ™X\ÛÛš[™Ò][RYÛXÞHHÜ[ÛœÏËœ™X\ÛÛš[™Ò][RYÛXÞNÂˆÛÛœÝ\ÝÜžHH]ØZ]Ù\ÜÚ[Û‹™Ù]][\Ê
NÂˆÛÛœÝ™]Ò[œ]][\ÈHÐYÙ[[œ]\Ý
[œ]
NÂˆYˆ
\Ù\ÜÚ[Û’[œ]Ø[˜XÚÊHÂˆÛÛœÝ\ÝÜžQ›Ü“[Ù[[œ]H\ÝÜžK›X\

][JHOˆ™\\™R\ÝÜžR][Q›Ü“[Ù[[œ]
Ù\ÜÚ[Û‹][K™X\ÛÛš[™Ò][RYÛXÞJJNÂˆÛÛœÝ™\\™Y[œ]H[˜ÛYR\ÝÜžR[”™\\™Y[œ]È›ÜÜœ[•ÛÛØ[ÊË‹‹š\ÝÜžQ›Ü“[Ù[[œ]‹‹›™]Ò[œ]][\×KÂˆ[š[™Ò[™^\Îˆ™]ÈÙ]
\ÝÜžK›X\

Ë[™^
HOˆ[™^
JBˆJHˆ™]Ò[œ]][\ÎÂˆ™]\›ˆÂˆ™\\™Y[œ]ˆÙ\ÜÚ[Û’][\Îˆ™]Ò[œ]][\ÂˆNÂˆBˆÛÛœÝ\ÝÜžTÛ˜\ÚÝH\ÝÜžKœÛXÙJ
NÂˆÛÛœÝ™]Ò[œ]Û˜\ÚÝH™]Ò[œ]][\ËœÛXÙJ
NÂˆÛÛœÝÛÛXš[™YH]ØZ]Ù\ÜÚ[Û’[œ]Ø[˜XÚÊ\ÝÜžK™]Ò[œ]][\ÊNÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JÛÛXš[™Y
JHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ”Ù\ÜÚ[Ûˆ[œ]Ø[˜XÚÈ]\Ý™]\›ˆ[ˆ\œ˜^HÙˆYÙ[[œ]][HØš™XÝËˆŠNÂˆBˆÛÛœÝ\ÝÜžPÛÝ[ÈHZ[][Qœ™\]Y[˜ÞSX\
\ÝÜžTÛ˜\ÚÝÂˆÙ\ÜÚ[Û‹ˆ™\\™Q›Ü“[Ù[[œ]ˆYKˆ™X\ÛÛš[™Ò][RYÛXÞBˆJNÂˆÛÛœÝ™]Ò[œ]ÛÝ[ÈHZ[][Qœ™\]Y[˜ÞSX\
™]Ò[œ]Û˜\ÚÝ
NÂˆÛÛœÝ\ÝÜžT™YœÈHZ[YÙ[[œ]ÛÛ
\ÝÜžTÛ˜\ÚÝ
NÂˆÛÛœÝ™]Ò[œ]™YœÈHZ[YÙ[[œ]ÛÛ
™]Ò[œ]Û˜\ÚÝ
NÂˆÛÛœÝ\ÝÜžR[™^\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÛÛœÝ\[™YH×NÂˆ›Üˆ
ÛÛœÝÚ[™^][WHÙˆÛÛXš[™Y™[šY\Ê
JHÂˆÛÛœÝ\ÝÜžRÙ^HHÙ]\ÝÜžR][S[Ù[[œ]Ù^JÙ\ÜÚ[Û‹][K™X\ÛÛš[™Ò][RYÛXÞJNÂˆÛÛœÝ™]Ò[œ]Ù^HHÙ]YÙ[[œ]][RÙ^J][JNÂˆYˆ
™[[Ý™PYÙ[[œ]œ›ÛTÛÛ
™]Ò[œ]™YœË][JJHÂˆXÜ™[Y[ÛÝ[
™]Ò[œ]ÛÝ[Ë™]Ò[œ]Ù^JNÂˆ\[™Yœ\Ú
][JNÂˆÛÛ[YNÂˆBˆYˆ
™[[Ý™PYÙ[[œ]œ›ÛTÛÛ
\ÝÜžT™YœË][JJHÂˆXÜ™[Y[ÛÝ[
\ÝÜžPÛÝ[Ë\ÝÜžRÙ^JNÂˆ\ÝÜžR[™^\Ë˜Y
[™^
NÂˆÛÛ[YNÂˆBˆÛÛœÝ\ÝÜžT™[XZ[š[™ÈH\ÝÜžPÛÝ[Ë™Ù]
\ÝÜžRÙ^JHÏÈÂˆYˆ
\ÝÜžT™[XZ[š[™Èˆ
HÂˆ\ÝÜžPÛÝ[ËœÙ]
\ÝÜžRÙ^K\ÝÜžT™[XZ[š[™ÈHJNÂˆ\ÝÜžR[™^\Ë˜Y
[™^
NÂˆÛÛ[YNÂˆBˆÛÛœÝ™]Ô™[XZ[š[™ÈH™]Ò[œ]ÛÝ[Ë™Ù]
™]Ò[œ]Ù^JHÏÈÂˆYˆ
™]Ô™[XZ[š[™Èˆ
HÂˆ™]Ò[œ]ÛÝ[ËœÙ]
™]Ò[œ]Ù^K™]Ô™[XZ[š[™ÈHJNÂˆ\[™Yœ\Ú
][JNÂˆÛÛ[YNÂˆBˆ\[™Yœ\Ú
][JNÂˆBˆÛÛœÝ™\\™Y][\ÈH[˜ÛYR\ÝÜžR[”™\\™Y[œ]ÈÛÛXš[™Yˆ\[™Y›[™ÝˆÈ\[™Yˆ™\Ù\™Q›ÜY™]Ò][\ÈÈ™]Ò[œ]Û˜\ÚÝˆ×NÂˆYˆ
™\Ù\™Q›ÜY™]Ò][\È	‰ˆ\[™Y›[™ÝOOH	‰ˆ™]Ò[œ]Û˜\ÚÝ›[™Ýˆ
HÂˆÙÙÙ\—ÙY˜][Ø\›ŠœÙ\ÜÚ[Û’[œ]Ø[˜XÚÈ›ÜY[™]È[œ]È[ˆHÙ\™\‹[X[˜YÙYÛÛ™\œØ][ÛŽÈÜšYÚ[˜[\›ˆ[œ]ÈÙ\™H™\ÝÜ™YÈ]›ÚYÜÚ[™ÈHTH[KˆÙY\]X\ÝÛ™H™]È][HÜˆÛZ]ÛÛ™\œØ][Û’YYˆ[ÝH[[™YÈ›Ü[KˆŠNÂˆBˆÛÛœÝ[™Y™\\™Y][\ÈH[˜ÛYR\ÝÜžR[”™\\™Y[œ]È›ÜÜœ[•ÛÛØ[Ê™\\™R\ÝÜžR][\Ñ›Ü“[Ù[[œ]
Ù\ÜÚ[Û‹™\\™Y][\Ë\ÝÜžR[™^\Ë™X\ÛÛš[™Ò][RYÛXÞJKÈ[š[™Ò[™^\Îˆ\ÝÜžR[™^\ÈJHˆ™\\™Y][\ÎÂˆ™]\›ˆÂˆ™\\™Y[œ]ˆ[™Y™\\™Y][\ËˆÙ\ÜÚ[Û’][\Îˆ\[™YˆNÂŸB™[˜Ý[Ûˆ™\\™R\ÝÜžR][\Ñ›Ü“[Ù[[œ]
Ù\ÜÚ[Û‹][\Ë\ÝÜžR[™^\Ë™X\ÛÛš[™Ò][RYÛXÞJHÂˆYˆ
\ÝÜžR[™^\ËœÚ^™HOOH
HÂˆ™]\›ˆ][\ÎÂˆBˆ™]\›ˆ][\Ë›X\

][K[™^
HOˆ\ÝÜžR[™^\Ëš\Ê[™^
HÈ™\\™R\ÝÜžR][Q›Ü“[Ù[[œ]
Ù\ÜÚ[Û‹][K™X\ÛÛš[™Ò][RYÛXÞJHˆ][JNÂŸB™[˜Ý[Ûˆ™\\™R\ÝÜžR][Q›Ü“[Ù[[œ]
Ù\ÜÚ[Û‹][K™X\ÛÛš[™Ò][RYÛXÞJHÂˆÛÛœÝ™\\™YHÙ\ÜÚ[Û‹œ™\\™R\ÝÜžR][Q›Ü“[Ù[[œ]ËŠ][JHÏÈ][NÂˆ™]\›ˆÝš\™X\ÛÛš[™Ò][RY›Ü”ÛXÞJ™\\™Y™X\ÛÛš[™Ò][RYÛXÞJNÂŸB™[˜Ý[ÛˆÙ]\ÝÜžR][S[Ù[[œ]Ù^JÙ\ÜÚ[Û‹][K™X\ÛÛš[™Ò][RYÛXÞJHÂˆ™]\›ˆÙ]YÙ[[œ]][RÙ^J™\\™R\ÝÜžR][Q›Ü“[Ù[[œ]
Ù\ÜÚ[Û‹][K™X\ÛÛš[™Ò][RYÛXÞJJNÂŸB™[˜Ý[Ûˆ›Ü›X[^™R][\Ñ›Ü”Ù\ÜÚ[Û”\œÚ\Ý[˜ÙJ][\ÊHÂˆ™]\›ˆ][\Ë›X\

][JHOˆØ[š]^™U˜[YQ›Ü”Ù\ÜÚ[ÛŠÝš\˜[œÚY[Ø[YÊ][JJJNÂŸB™[˜Ý[ÛˆØ[š]^™U˜[YQ›Ü”Ù\ÜÚ[ÛŠ˜[YKÛÛ^HßJHÂˆYˆ
˜[YHOOH[˜[YHOOH›ÚY
HÂˆ™]\›ˆ˜[YNÂˆBˆÛÛœÝš[˜\žHHÕZ[\œ˜^Qœ›ÛPš[˜\žJ˜[YJNÂˆYˆ
š[˜\žJHÂˆ™]\›ˆÑ]U\›œ›ÛPž]\Êš[˜\žKÛÛ^›YYXU\JNÂˆBˆYˆ
\œ˜^Kš\Ð\œ˜^J˜[YJJHÂˆ™]\›ˆ˜[YK›X\

[žJHOˆØ[š]^™U˜[YQ›Ü”Ù\ÜÚ[ÛŠ[žKÛÛ^
JNÂˆBˆYˆ
Z\ÔZ[“Øš™XÝŠ˜[YJJHÂˆ™]\›ˆ˜[YNÂˆBˆÛÛœÝ™XÛÜ™ˆH˜[YNÂˆÛÛœÝ™\Ý[HßNÂˆÛÛœÝYYXU\HH\[Ùˆ™XÛÜ™‹›YYXU\HOOHœÝš[™Èˆ	‰ˆ™XÛÜ™‹›YYXU\K›[™ÝˆÈ™XÛÜ™‹›YYXU\HˆÛÛ^›YYXU\NÂˆ›Üˆ
ÛÛœÝÚÙ^K[žWHÙˆØš™XÝ™[šY\Ê™XÛÜ™ŠJHÂˆÛÛœÝ™^ÛÛ^HÙ^HOOH™]HˆÙ^HOOH™š[Q]HˆÈÈYYXU\HHˆÛÛ^Âˆ™\Ý[ÚÙ^WHHØ[š]^™U˜[YQ›Ü”Ù\ÜÚ[ÛŠ[žK™^ÛÛ^
NÂˆBˆ™]\›ˆ™\Ý[ÂŸB™[˜Ý[ÛˆÑ]U\›œ›ÛPž]\Êž]\ËYYXU\JHÂˆÛÛœÝ˜\ÙMÈH[˜ÛÙUZ[\œ˜^UÐ˜\ÙM
ž]\ÊNÂˆÛÛœÝ\HHYYXU\H	‰ˆ[YYXU\KœÝ\ÕÚ]
™]NˆŠHÈYYXU\Hˆ^ÜZ[ˆŽÂˆ™]\›ˆ]N‰Ý\_NØ˜\ÙM	Ø˜\ÙMßXÂŸB™[˜Ý[Ûˆ\ÔZ[“Øš™XÝŠ˜[YJHÂˆYˆ
\[Ùˆ˜[YHOOH›Øš™XÝˆ˜[YHOOH[
HÂˆ™]\›ˆ˜[ÙNÂˆBˆÛÛœÝ›ÝÈHØš™XÝ™Ù]›ÝÝ\SÙŠ˜[YJNÂˆ™]\›ˆ›ÝÈOOHØš™XÝœ›ÝÝ\H›ÝÈOOH[ÂŸB™[˜Ý[ÛˆÝš\˜[œÚY[Ø[YÊ˜[YJHÂˆYˆ
˜[YHOOH[˜[YHOOH›ÚY
HÂˆ™]\›ˆ˜[YNÂˆBˆYˆ
\œ˜^Kš\Ð\œ˜^J˜[YJJHÂˆ™]\›ˆ˜[YK›X\

[žJHOˆÝš\˜[œÚY[Ø[YÊ[žJJNÂˆBˆYˆ
Z\ÔZ[“Øš™XÝŠ˜[YJJHÂˆ™]\›ˆ˜[YNÂˆBˆÛÛœÝ™XÛÜ™ˆH˜[YNÂˆÛÛœÝ™\Ý[HßNÂˆÛÛœÝ\Ô›ÝØÛÛ][HH\[Ùˆ™XÛÜ™‹\HOOHœÝš[™Èˆ	‰ˆ™XÛÜ™‹\K›[™ÝˆÂˆÛÛœÝÚÝ[Ýš\YH\Ô›ÝØÛÛ][H	‰ˆÚÝ[Ýš\Y›Ü”›ÝØÛÛ][J™XÛÜ™ŠNÂˆ›Üˆ
ÛÛœÝÚÙ^K[žWHÙˆØš™XÝ™[šY\Ê™XÛÜ™ŠJHÂˆYˆ
ÚÝ[Ýš\Y	‰ˆÙ^HOOHšYŠHÂˆÛÛ[YNÂˆBˆ™\Ý[ÚÙ^WHHÝš\˜[œÚY[Ø[YÊ[žJNÂˆBˆ™]\›ˆ™\Ý[ÂŸB™[˜Ý[ÛˆÚÝ[Ýš\Y›Ü”›ÝØÛÛ][J™XÛÜ™ŠHÂˆÝÚ]Ú
™XÛÜ™‹\JHÂˆØ\ÙH™[˜Ý[Û—ØØ[Ž‚ˆØ\ÙH™[˜Ý[Û—ØØ[Ü™\Ý[Ž‚ˆ™]\›ˆYNÂˆØ\ÙHÛÛÜÙX\˜ÚØØ[Ž‚ˆØ\ÙHÛÛÜÙX\˜ÚÛÝ]]Ž‚ˆ™]\›ˆ\ÕÛÛÙX\˜ÚØ[Y
™XÛÜ™ŠNÂˆY˜][‚ˆ™]\›ˆ˜[ÙNÂˆBŸB™[˜Ý[Ûˆ\ÕÛÛÙX\˜ÚØ[Y
™XÛÜ™ŠHÂˆÛÛœÝÜ]™[Ø[YH™XÛÜ™‹˜Ø[ÚYÏÈ™XÛÜ™‹˜Ø[YÂˆYˆ
\[ÙˆÜ]™[Ø[YOOHœÝš[™Èˆ	‰ˆÜ]™[Ø[Y›[™Ýˆ
HÂˆ™]\›ˆYNÂˆBˆÛÛœÝ›ÝšY\‘]HH\ÔZ[“Øš™XÝŠ™XÛÜ™‹œ›ÝšY\‘]JHÈ™XÛÜ™‹œ›ÝšY\‘]Hˆ›ÚYÂˆÛÛœÝ›ÝšY\Ø[YH›ÝšY\‘]OË˜Ø[ÚYÏÈ›ÝšY\‘]OË˜Ø[YÂˆ™]\›ˆ\[Ùˆ›ÝšY\Ø[YOOHœÝš[™Èˆ	‰ˆ›ÝšY\Ø[Y›[™ÝˆÂŸB˜\Þ[˜È[˜Ý[Ûˆ\œÚ\Ý[’][\ÕÔÙ\ÜÚ[ÛŠÜ[ÛœÊHÂˆÛÛœÝÈÙ\ÜÚ[Û‹Ý]K™]Ô[’][\Ë^˜R[œ]][\ÈH×K\Ý™\ÜÛœÙRY[™XYT\œÚ\ÝYÛÝ[HHÜ[ÛœÎÂˆYˆ
\Ù\ÜÚ[ÛŠHÂˆ™]\›ŽÂˆBˆÛÛœÝ][\ÕÔØ]™HHÂˆ‹‹™^˜R[œ]][\Ëˆ‹‹™^˜XÝÝ]]][\Ñœ›ÛT[’][\Ê™]Ô[’][\ËÙ\ÜÚ[Û‹œ™\Ù\™T™X\ÛÛš[™Ò][RYÑ›Ü”\œÚ\Ý[˜ÙOËŠ
HOOHYHÈ›ÚYˆÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞJBˆNÂˆYˆ
][\ÕÔØ]™K›[™ÝOOH
HÂˆÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[H[™XYT\œÚ\ÝYÛÝ[
È™]Ô[’][\Ë›[™ÝÂˆ]ØZ][ÛÛ\XÝ[Û“Û”Ù\ÜÚ[ÛŠÙ\ÜÚ[Û‹\Ý™\ÜÛœÙRYÝ]JNÂˆ™]\›ŽÂˆBˆÛÛœÝØ[š]^™Y][\ÈH›Ü›X[^™R][\Ñ›Ü”Ù\ÜÚ[Û”\œÚ\Ý[˜ÙJ][\ÕÔØ]™JNÂˆ]ØZ]Ù\ÜÚ[Û‹˜Y][\ÊØ[š]^™Y][\ÊNÂˆ]ØZ][ÛÛ\XÝ[Û“Û”Ù\ÜÚ[ÛŠÙ\ÜÚ[Û‹\Ý™\ÜÛœÙRYÝ]JNÂˆÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[H[™XYT\œÚ\ÝYÛÝ[
È™]Ô[’][\Ë›[™ÝÂŸB˜\Þ[˜È[˜Ý[Ûˆ[ÛÛ\XÝ[Û“Û”Ù\ÜÚ[ÛŠÙ\ÜÚ[Û‹™\ÜÛœÙRYÝ]JHÂˆYˆ
Z\ÓÜ[RT™\ÜÛœÙ\ÐÛÛ\XÝ[Û]Ø\™TÙ\ÜÚ[ÛŠÙ\ÜÚ[ÛŠJHÂˆ™]\›ŽÂˆBˆÛÛœÝÝÜ™HHÝ]K—Û\Ý[Ù[Ù][™ÜÏËœÝÜ™HÏÈÝ]K—ØÝ\œ™[YÙ[›[Ù[Ù][™ÜÏËœÝÜ™NÂˆÛÛœÝÛÛ\XÝ[Û\™ÜÈH\[Ùˆ™\ÜÛœÙRYOOH[™Yš[™Yˆ	‰ˆ\[ÙˆÝÜ™HOOH[™Yš[™YˆÈ›ÚYˆÂˆ‹‹\[Ùˆ™\ÜÛœÙRYOOH[™Yš[™YˆÈßHˆÈ™\ÜÛœÙRYKˆ‹‹\[ÙˆÝÜ™HOOH[™Yš[™YˆÈßHˆÈÝÜ™HBˆNÂˆÛÛœÝÛÛ\XÝ[Û”™\Ý[H]ØZ]Ù\ÜÚ[Û‹œ[ÛÛ\XÝ[ÛŠÛÛ\XÝ[Û\™ÜÊNÂˆYˆ
XÛÛ\XÝ[Û”™\Ý[
HÂˆ™]\›ŽÂˆBˆÛÛœÝ\ØYÙHHÛÛ\XÝ[Û”™\Ý[\ØYÙNÂˆÝ]K—ØÛÛ^\ØYÙK˜Y
™]È\ØYÙJÂˆ™\]Y\ÝÎˆKˆ[œ]ÚÙ[œÎˆ\ØYÙKš[œ]ÚÙ[œËˆÝ]]ÚÙ[œÎˆ\ØYÙK›Ý]]ÚÙ[œËˆÝ[ÚÙ[œÎˆ\ØYÙKÝ[ÚÙ[œËˆ[œ]ÚÙ[œÑ]Z[Îˆ\ØYÙKš[œ]ÚÙ[œÑ]Z[ËˆÝ]]ÚÙ[œÑ]Z[Îˆ\ØYÙK›Ý]]ÚÙ[œÑ]Z[Ëˆ™\]Y\Ý\ØYÙQ[šY\ÎˆÝ\ØYÙWBˆJJNÂŸB™[˜Ý[ÛˆZ[][Qœ™\]Y[˜ÞSX\
][\ËÜ[ÛœÊHÂˆÛÛœÝÛÝ[ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝ][HÙˆ][\ÊHÂˆÛÛœÝÙ^HHÜ[ÛœÏËœ™\\™Q›Ü“[Ù[[œ]	‰ˆÜ[ÛœËœÙ\ÜÚ[ÛˆÈÙ]\ÝÜžR][S[Ù[[œ]Ù^JÜ[ÛœËœÙ\ÜÚ[Û‹][KÜ[ÛœËœ™X\ÛÛš[™Ò][RYÛXÞJHˆÙ]YÙ[[œ]][RÙ^J][JNÂˆÛÝ[ËœÙ]
Ù^K
ÛÝ[Ë™Ù]
Ù^JHÏÈ
H
ÈJNÂˆBˆ™]\›ˆÛÝ[ÎÂŸB™[˜Ý[ÛˆXÜ™[Y[ÛÝ[
X\‹Ù^JHÂˆÛÛœÝ™[XZ[š[™ÈH
X\‹™Ù]
Ù^JHÏÈ
HHNÂˆYˆ
™[XZ[š[™ÈH
HÂˆX\‹™[]JÙ^JNÂˆH[ÙHÂˆX\‹œÙ]
Ù^K™[XZ[š[™ÊNÂˆBŸB˜\ˆ[š]ÜÙ\ÜÚ[Û”\œÚ\Ý[˜ÙHH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜÙ\ÜÚ[Û”\œÚ\Ý[˜ÙK›ZœÈŠ
HÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]ÜÙ\ÜÚ[ÛŒŠ
NÂˆ[š]Ý\ØYÙJ
NÂˆ[š]Ø˜\ÙM

NÂˆ[š]Øš[˜\žJ
NÂˆ[š]Ú][\Ê
NÂˆ[š]ÛÙÙÙ\Š
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÝ][ËÛY\ÜØYÙ\Ë›ZœÂ™[˜Ý[ÛˆÙ]\ÜÚ\Ý[Y\ÜØYÙJÝ]]Y\ÜØYÙJHÂˆYˆ
Ý]]Y\ÜØYÙK\HOOH›Y\ÜØYÙHŠHÂˆ™]\›ˆ[ÂˆBˆYˆ
Jœ›ÛHˆ[ˆÝ]]Y\ÜØYÙJHÝ]]Y\ÜØYÙKœ›ÛHOOH˜\ÜÚ\Ý[ŠHÂˆ™]\›ˆ[ÂˆBˆ™]\›ˆÝ]]Y\ÜØYÙNÂŸB™[˜Ý[ÛˆÙ]^œ›ÛSÝ]]Y\ÜØYÙJÝ]]Y\ÜØYÙJHÂˆÛÛœÝ\ÜÚ\Ý[Y\ÜØYÙHHÙ]\ÜÚ\Ý[Y\ÜØYÙJÝ]]Y\ÜØYÙJNÂˆYˆ
X\ÜÚ\Ý[Y\ÜØYÙJHÂˆ™]\›ˆ›ÚYÂˆBˆ]Ø]Õ^H˜[ÙNÂˆÛÛœÝ^H\ÜÚ\Ý[Y\ÜØYÙK˜ÛÛ[œ™YXÙJ
XØË][JHOˆÂˆYˆ
][K\HOOH›Ý]]Ý^ŠHÂˆ™]\›ˆXØÎÂˆBˆØ]Õ^HYNÂˆ™]\›ˆXØÈ
È][K^ÂˆKˆŠNÂˆ™]\›ˆØ]Õ^È^ˆ›ÚYÂŸB™[˜Ý[ÛˆÙ]™Y\Ø[œ›ÛSÝ]]Y\ÜØYÙJÝ]]Y\ÜØYÙJHÂˆÛÛœÝ\ÜÚ\Ý[Y\ÜØYÙHHÙ]\ÜÚ\Ý[Y\ÜØYÙJÝ]]Y\ÜØYÙJNÂˆYˆ
X\ÜÚ\Ý[Y\ÜØYÙJHÂˆ™]\›ˆ›ÚYÂˆBˆ]Ø]Ô™Y\Ø[H˜[ÙNÂˆÛÛœÝ™Y\Ø[H\ÜÚ\Ý[Y\ÜØYÙK˜ÛÛ[œ™YXÙJ
XØË][JHOˆÂˆYˆ
][K\HOOHœ™Y\Ø[ŠHÂˆ™]\›ˆXØÎÂˆBˆØ]Ô™Y\Ø[HYNÂˆ™]\›ˆXØÈ
È][Kœ™Y\Ø[ÂˆKˆŠNÂˆ™]\›ˆØ]Ô™Y\Ø[È™Y\Ø[ˆ›ÚYÂŸB™[˜Ý[ÛˆÙ]Ý]]^
Ý]]
HÂˆYˆ
Ý]]›Ý]]›[™ÝOOH
HÂˆ™]\›ˆˆŽÂˆBˆ™]\›ˆÙ]^œ›ÛSÝ]]Y\ÜØYÙJÝ]]›Ý]]ÛÝ]]›Ý]]›[™ÝHWJHˆŽÂŸB˜\ˆ[š]ÛY\ÜØYÙ\ÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÝ][ËÛY\ÜØYÙ\Ë›ZœÈŠ
HÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[ÛÛ[ÛÛ™šYË›ZœÂ™[˜Ý[Ûˆ\ÔZ[“Øš™XÝZÙLŠ˜[YJHÂˆ™]\›ˆ\[Ùˆ˜[YHOOH›Øš™XÝˆ	‰ˆ˜[YHOOH[	‰ˆP\œ˜^Kš\Ð\œ˜^J˜[YJNÂŸB™[˜Ý[Ûˆ\ÓÝÛŠ˜[YKÙ^JHÂˆ™]\›ˆØš™XÝœ›ÝÝ\Kš\ÓÝÛ”›Ü\K˜Ø[
˜[YKÙ^JNÂŸB™[˜Ý[ÛˆÙ]YÙ[ÛÛ\™[[ÛÛ™šYÓÛ‘]Z[Ê]Z[Ë\™[[ÛÛ™šYÊHÂˆÛÛœÝØY™T\™[[ÛÛ™šYÈHÙ][š\š]YYÙ[ÛÛ[ÛÛ™šYÊ\™[[ÛÛ™šYË›ÚY
NÂˆYˆ
\ØY™T\™[[ÛÛ™šYÊHÂˆ™]\›ŽÂˆBˆØš™XÝ™Yš[™T›Ü\J]Z[ËQÑS•ÕÓÓÔT‘S•Ô•S—ÐÓÓ‘’Q×ÔÖSP“ÓÂˆ˜[YNˆØY™T\™[[ÛÛ™šYËˆ[[Y\˜X›Nˆ˜[ÙKˆÛÛ™šYÝ\˜X›NˆYKˆÜš]X›Nˆ˜[ÙBˆJNÂŸB™[˜Ý[ÛˆÙ]YÙ[ÛÛ\™[[ÛÛ™šYÑœ›ÛQ]Z[Ê]Z[ÊHÂˆYˆ
Y]Z[È\[Ùˆ]Z[ÈOOH›Øš™XÝŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ]Z[Ô™XÛÜ™H]Z[ÎÂˆÛÛœÝ[\›˜[\™[[ÛÛ™šYÈH]Z[Ô™XÛÜ™ÐQÑS•ÕÓÓÔT‘S•Ô•S—ÐÓÓ‘’Q×ÔÖSP“ÓNÂˆYˆ
\[Ùˆ[\›˜[\™[[ÛÛ™šYÈOOH[™Yš[™YŠHÂˆ™]\›ˆ[\›˜[\™[[ÛÛ™šYÎÂˆBˆÛÛœÝYØXÞT\™[[ÛÛ™šYÈH]Z[Ô™XÛÜ™œ\™[[ÛÛ™šYÎÂˆ™]\›ˆ\ÔZ[“Øš™XÝZÙLŠYØXÞT\™[[ÛÛ™šYÊHÈYØXÞT\™[[ÛÛ™šYÈˆ›ÚYÂŸB™[˜Ý[ÛˆÙ]ØY™R[š\š]YYÙ[ÛÛ[Ù[Ù][™ÜÊ[Ù[Ù][™ÜÊHÂˆYˆ
[[Ù[Ù][™ÜÊHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝÈÛÛÚÚXÙNˆÝÛÛÚÚXÙK\˜[[ÛÛØ[ÎˆÜ\˜[[ÛÛØ[Ë‹‹œØY™S[Ù[Ù][™ÜÈHH[Ù[Ù][™ÜÎÂˆ™]\›ˆØš™XÝšÙ^\ÊØY™S[Ù[Ù][™ÜÊK›[™ÝˆÈØY™S[Ù[Ù][™ÜÈˆ›ÚYÂŸB™[˜Ý[ÛˆY\™ÙS™\ÝYØš™XÝX\Š\™Ù]™XÛÜ™[š\š]Y™XÛÜ™Ý™\œšYT™XÛÜ™Ù^JHÂˆYˆ
\ÔZ[“Øš™XÝZÙLŠ[š\š]Y™XÛÜ™ÚÙ^WJH	‰ˆ\ÔZ[“Øš™XÝZÙLŠÝ™\œšYT™XÛÜ™ÚÙ^WJJHÂˆ\™Ù]™XÛÜ™ÚÙ^WHHÂˆ‹‹š[š\š]Y™XÛÜ™ÚÙ^WKˆ‹‹›Ý™\œšYT™XÛÜ™ÚÙ^WBˆNÂˆBŸB™[˜Ý[ÛˆÙ]Y\™ÙY›ÝšY\‘]P[X\ÓX\
›ÝšY\‘]Kš\œÝÙ^KÙXÛÛ™Ù^JHÂˆÛÛœÝš\œÝ˜[YHH›ÝšY\‘]VÙš\œÝÙ^WNÂˆÛÛœÝÙXÛÛ™˜[YHH›ÝšY\‘]VÜÙXÛÛ™Ù^WNÂˆÛÛœÝ\Ñš\œÝH\[Ùˆš\œÝ˜[YHOOH[™Yš[™YŽÂˆÛÛœÝ\ÔÙXÛÛ™H\[ÙˆÙXÛÛ™˜[YHOOH[™Yš[™YŽÂˆYˆ
Z\Ñš\œÝ	‰ˆZ\ÔÙXÛÛ™
HÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
\Ñš\œÝ	‰ˆZ\ÔZ[“Øš™XÝZÙLŠš\œÝ˜[YJH\ÔÙXÛÛ™	‰ˆZ\ÔZ[“Øš™XÝZÙLŠÙXÛÛ™˜[YJJHÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆÂˆ‹‹š\Ñš\œÝÈš\œÝ˜[YHˆßKˆ‹‹š\ÔÙXÛÛ™ÈÙXÛÛ™˜[YHˆßBˆNÂŸB™[˜Ý[ÛˆY\™ÙU˜[œÜÜÝ™\œšYP[X\ÓX\Ê\™Ù]›ÝšY\‘]K[š\š]Y›ÝšY\‘]KÛÛ›ÝšY\‘]KÛ˜ZÙRÙ^KØ[Y[Ù^JHÂˆÛÛœÝ[š\š]YY\™ÙYHÙ]Y\™ÙY›ÝšY\‘]P[X\ÓX\
[š\š]Y›ÝšY\‘]KÛ˜ZÙRÙ^KØ[Y[Ù^JNÂˆÛÛœÝÛÛY\™ÙYHÙ]Y\™ÙY›ÝšY\‘]P[X\ÓX\
ÛÛ›ÝšY\‘]KÛ˜ZÙRÙ^KØ[Y[Ù^JNÂˆYˆ
Z[š\š]YY\™ÙY]ÛÛY\™ÙY
HÂˆ™]\›ŽÂˆBˆÛÛœÝY\™ÙY[X\ÓX\HÂˆ‹‹š[š\š]YY\™ÙYˆ‹‹ÛÛY\™ÙYˆNÂˆÛÛœÝ[X\ÒÙ^\ÈHÜÛ˜ZÙRÙ^KØ[Y[Ù^WNÂˆ›Üˆ
ÛÛœÝ[X\ÒÙ^HÙˆ[X\ÒÙ^\ÊHÂˆYˆ
\ÓÝÛŠ[š\š]Y›ÝšY\‘]K[X\ÒÙ^JH\ÓÝÛŠÛÛ›ÝšY\‘]K[X\ÒÙ^JJHÂˆ\™Ù]›ÝšY\‘]VØ[X\ÒÙ^WHHY\™ÙY[X\ÓX\ÂˆBˆBŸB™[˜Ý[ÛˆY\™ÙPYÙ[ÛÛ›ÝšY\‘]J[š\š]Y›ÝšY\‘]KÛÛ›ÝšY\‘]JHÂˆÛÛœÝY\™ÙY›ÝšY\‘]HHÂˆ‹‹š[š\š]Y›ÝšY\‘]Kˆ‹‹ÛÛ›ÝšY\‘]BˆNÂˆ›Üˆ
ÛÛœÝÜÛ˜ZÙRÙ^KØ[Y[Ù^WHÙˆS”ÔÔ•ÓÕ‘T”’QWÔ“Õ’QT—ÑUWÐSPT×ÒÑVTÊHÂˆY\™ÙS™\ÝYØš™XÝX\ŠY\™ÙY›ÝšY\‘]K[š\š]Y›ÝšY\‘]KÛÛ›ÝšY\‘]KÛ˜ZÙRÙ^JNÂˆY\™ÙS™\ÝYØš™XÝX\ŠY\™ÙY›ÝšY\‘]K[š\š]Y›ÝšY\‘]KÛÛ›ÝšY\‘]KØ[Y[Ù^JNÂˆBˆ›Üˆ
ÛÛœÝÜÛ˜ZÙRÙ^KØ[Y[Ù^WHÙˆS”ÔÔ•ÓÕ‘T”’QWÔ“Õ’QT—ÑUWÐSPT×ÒÑVTÊHÂˆY\™ÙU˜[œÜÜÝ™\œšYP[X\ÓX\ÊY\™ÙY›ÝšY\‘]K[š\š]Y›ÝšY\‘]KÛÛ›ÝšY\‘]KÛ˜ZÙRÙ^KØ[Y[Ù^JNÂˆBˆ™]\›ˆY\™ÙY›ÝšY\‘]NÂŸB™[˜Ý[ÛˆY\™ÙPYÙ[ÛÛ[Ù[Ù][™ÜÊ[š\š]Y[ÛÛ™šYËÛÛ[ÛÛ™šYÓÝ™\œšYJHÂˆÛÛœÝ[š\š]Y[Ù[Ù][™ÜÈH[š\š]Y[ÛÛ™šYË›[Ù[Ù][™ÜÎÂˆÛÛœÝÛÛ[Ù[Ù][™ÜÈHÛÛ[ÛÛ™šYÓÝ™\œšYK›[Ù[Ù][™ÜÎÂˆÛÛœÝ\ÕÛÛ[Ù[Ù][™ÜÓÝ™\œšYHH\ÓÝÛŠÛÛ[ÛÛ™šYÓÝ™\œšYK›[Ù[Ù][™ÜÈŠNÂˆYˆ
Z[š\š]Y[Ù[Ù][™ÜÈZ\ÕÛÛ[Ù[Ù][™ÜÓÝ™\œšYH]ÛÛ[Ù[Ù][™ÜÊHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝY\™ÙY[Ù[Ù][™ÜÈHY\™ÙS[Ù[Ù][™ÜÊ[š\š]Y[Ù[Ù][™ÜËÛÛ[Ù[Ù][™ÜÊNÂˆÛÛœÝ[š\š]Y›ÝšY\‘]HH[š\š]Y[Ù[Ù][™ÜËœ›ÝšY\‘]NÂˆÛÛœÝÛÛ›ÝšY\‘]HHÛÛ[Ù[Ù][™ÜËœ›ÝšY\‘]NÂˆÛÛœÝ\ÕÛÛ›ÝšY\‘]SÝ™\œšYHH\ÓÝÛŠÛÛ[Ù[Ù][™ÜËœ›ÝšY\‘]HŠNÂˆYˆ
\ÕÛÛ›ÝšY\‘]SÝ™\œšYH	‰ˆ\ÔZ[“Øš™XÝZÙLŠ[š\š]Y›ÝšY\‘]JH	‰ˆ\ÔZ[“Øš™XÝZÙLŠÛÛ›ÝšY\‘]JJHÂˆY\™ÙY[Ù[Ù][™ÜËœ›ÝšY\‘]HHY\™ÙPYÙ[ÛÛ›ÝšY\‘]J[š\š]Y›ÝšY\‘]KÛÛ›ÝšY\‘]JNÂˆBˆ™]\›ˆY\™ÙY[Ù[Ù][™ÜÎÂŸB™[˜Ý[ÛˆÙ][š\š]YYÙ[ÛÛ[ÛÛ™šYÊ\™[[ÛÛ™šYËÛÛ[ÛÛ™šYÓÝ™\œšYJHÂˆYˆ
\\™[[ÛÛ™šYÊHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ[š\š]Y[ÛÛ™šYÈHßNÂˆÛÛœÝÝ™\œšY\Ó[Ù[›ÝšY\ˆH\[ÙˆÛÛ[ÛÛ™šYÓÝ™\œšYOË›[Ù[›ÝšY\ˆOOH[™Yš[™YŽÂˆYˆ
\[Ùˆ\™[[ÛÛ™šYË›[Ù[›ÝšY\ˆOOH[™Yš[™YŠHÂˆ[š\š]Y[ÛÛ™šYË›[Ù[›ÝšY\ˆH\™[[ÛÛ™šYË›[Ù[›ÝšY\ŽÂˆBˆYˆ
[Ý™\œšY\Ó[Ù[›ÝšY\ˆ	‰ˆ\[Ùˆ\™[[ÛÛ™šYË›[Ù[OOH[™Yš[™YŠHÂˆ[š\š]Y[ÛÛ™šYË›[Ù[H\™[[ÛÛ™šYË›[Ù[ÂˆBˆYˆ
[Ý™\œšY\Ó[Ù[›ÝšY\ˆ	‰ˆ\[Ùˆ\™[[ÛÛ™šYË›[Ù[Ù][™ÜÈOOH[™Yš[™YŠHÂˆÛÛœÝ[š\š]Y[Ù[Ù][™ÜÈHÙ]ØY™R[š\š]YYÙ[ÛÛ[Ù[Ù][™ÜÊ\™[[ÛÛ™šYË›[Ù[Ù][™ÜÊNÂˆYˆ
\[Ùˆ[š\š]Y[Ù[Ù][™ÜÈOOH[™Yš[™YŠHÂˆ[š\š]Y[ÛÛ™šYË›[Ù[Ù][™ÜÈH[š\š]Y[Ù[Ù][™ÜÎÂˆBˆBˆYˆ
\[Ùˆ\™[[ÛÛ™šYËœØ[™›ÞOOH[™Yš[™YŠHÂˆ[š\š]Y[ÛÛ™šYËœØ[™›ÞH\™[[ÛÛ™šYËœØ[™›ÞÂˆBˆYˆ
\[Ùˆ\™[[ÛÛ™šYËÛÛ^XÝ][ÛˆOOH[™Yš[™YŠHÂˆ[š\š]Y[ÛÛ™šYËÛÛ^XÝ][ÛˆH\™[[ÛÛ™šYËÛÛ^XÝ][ÛŽÂˆBˆYˆ
\[Ùˆ\™[[ÛÛ™šYËÛÛ›Ý›Ý[™™Z]š[ÜˆOOH[™Yš[™YŠHÂˆ[š\š]Y[ÛÛ™šYËÛÛ›Ý›Ý[™™Z]š[ÜˆH\™[[ÛÛ™šYËÛÛ›Ý›Ý[™™Z]š[ÜŽÂˆBˆ™]\›ˆØš™XÝšÙ^\Ê[š\š]Y[ÛÛ™šYÊK›[™ÝˆÈ[š\š]Y[ÛÛ™šYÈˆ›ÚYÂŸB™[˜Ý[ÛˆY\™ÙPYÙ[ÛÛ[ÛÛ™šYÊ[š\š]Y[ÛÛ™šYËÛÛ[ÛÛ™šYÓÝ™\œšYJHÂˆYˆ
Z[š\š]Y[ÛÛ™šYÊHÂˆ™]\›ˆÛÛ[ÛÛ™šYÓÝ™\œšYHÏÈßNÂˆBˆYˆ
]ÛÛ[ÛÛ™šYÓÝ™\œšYJHÂˆ™]\›ˆ[š\š]Y[ÛÛ™šYÎÂˆBˆÛÛœÝY\™ÙY[ÛÛ™šYÈHÂˆ‹‹š[š\š]Y[ÛÛ™šYËˆ‹‹ÛÛ[ÛÛ™šYÓÝ™\œšYBˆNÂˆÛÛœÝY\™ÙY[Ù[Ù][™ÜÈHY\™ÙPYÙ[ÛÛ[Ù[Ù][™ÜÊ[š\š]Y[ÛÛ™šYËÛÛ[ÛÛ™šYÓÝ™\œšYJNÂˆYˆ
\[ÙˆY\™ÙY[Ù[Ù][™ÜÈOOH[™Yš[™YŠHÂˆY\™ÙY[ÛÛ™šYË›[Ù[Ù][™ÜÈHY\™ÙY[Ù[Ù][™ÜÎÂˆBˆ™]\›ˆY\™ÙY[ÛÛ™šYÎÂŸB˜\ˆS”ÔÔ•ÓÕ‘T”’QWÔ“Õ’QT—ÑUWÐSPT×ÒÑVTËQÑS•ÕÓÓÔT‘S•Ô•S—ÐÓÓ‘’Q×ÔÖSP“ÓÂ˜\ˆ[š]ØYÙ[ÛÛ[ÛÛ™šYÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[ÛÛ[ÛÛ™šYË›ZœÈŠ
HÂˆ[š]Û[Ù[Ù][™ÜÓY\™ÙJ
NÂˆS”ÔÔ•ÓÕ‘T”’QWÔ“Õ’QT—ÑUWÐSPT×ÒÑVTÈHÂˆÈ™^˜WÚXY\œÈ‹™^˜RXY\œÈ—KˆÈ™^˜WÜ]Y\žH‹™^˜T]Y\žH—KˆÈ™^˜WØ›ÙH‹™^˜P›ÙH—BˆNÂˆQÑS•ÕÓÓÔT‘S•Ô•S—ÐÓÓ‘’Q×ÔÖSP“ÓHÊˆ×ÔT‘W×È
‹ÈÞ[X›Û
›Ü[˜ZK˜YÙ[Ë˜YÙ[ÛÛ\™[[ÛÛ™šYÈŠNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[ÛÛ[”™\Ý[Ë›ZœÂ™[˜Ý[ÛˆØ]™PYÙ[ÛÛ[”™\Ý[
ÛÛØ[[”™\Ý[
HÂˆYˆ
ÛÛØ[
HÂˆYÙ[ÛÛ[”™\Ý[ËœÙ]
ÛÛØ[[”™\Ý[
NÂˆBŸB™[˜Ý[ÛˆÛÛœÝ[YPYÙ[ÛÛ[”™\Ý[
ÛÛØ[
HÂˆÛÛœÝ[”™\Ý[HYÙ[ÛÛ[”™\Ý[Ë™Ù]
ÛÛØ[
NÂˆYˆ
[”™\Ý[
HÂˆYÙ[ÛÛ[”™\Ý[Ë™[]JÛÛØ[
NÂˆBˆ™]\›ˆ[”™\Ý[ÂŸB˜\ˆYÙ[ÛÛ[”™\Ý[ÎÂ˜\ˆ[š]ØYÙ[ÛÛ[”™\Ý[ÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[ÛÛ[”™\Ý[Ë›ZœÈŠ
HÂˆYÙ[ÛÛ[”™\Ý[ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙXZÓX\

NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÚ[\œËÛY\ÜØYÙK›ZœÂ™[˜Ý[Ûˆ\ÜÚ\Ý[
ÛÛ[Ü[ÛœÊHÂˆ™]\›ˆÂˆ\Nˆ›Y\ÜØYÙH‹ˆ›ÛNˆ˜\ÜÚ\Ý[‹ˆÛÛ[ˆ\[ÙˆÛÛ[OOHœÝš[™ÈˆÈÂˆÂˆ\Nˆ›Ý]]Ý^‹ˆ^ˆÛÛ[ˆBˆHˆÛÛ[ˆÝ]\Îˆ˜ÛÛ\]Y‹ˆ›ÝšY\‘]NˆÜ[ÛœÂˆNÂŸB˜\ˆ[š]ÛY\ÜØYÙHH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÚ[\œËÛY\ÜØYÙK›ZœÈŠ
HÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÝ][ËÚ[›[™Q]K›ZœÂ™[˜Ý[ÛˆÙ][›[™SYYXU\J˜[YJHÂˆYˆ
\[Ùˆ˜[YK›YYXU\HOOHœÝš[™Èˆ	‰ˆ˜[YK›YYXU\K›[™Ýˆ
HÂˆ™]\›ˆ˜[YK›YYXU\NÂˆBˆYˆ
\[Ùˆ˜[YK›Z[YU\HOOHœÝš[™Èˆ	‰ˆ˜[YK›Z[YU\K›[™Ýˆ
HÂˆ™]\›ˆ˜[YK›Z[YU\NÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ›Ü›X][›[™Q]J]KYYXU\JHÂˆYˆ
\[Ùˆ]HOOHœÝš[™Èˆ	‰ˆ]KœÝ\ÕÚ]
™]NˆŠJHÂˆ™]\›ˆ]NÂˆBˆÛÛœÝ˜\ÙMÈH\[Ùˆ]HOOHœÝš[™ÈˆÈ]Hˆ[˜ÛÙUZ[\œ˜^UÐ˜\ÙM
]JNÂˆ™]\›ˆYYXU\HÈ]N‰ÛYYXU\_NØ˜\ÙM	Ø˜\ÙMßXˆ˜\ÙMÎÂŸB˜\ˆ[š]Ú[›[™Q]HH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÝ][ËÚ[›[™Q]K›ZœÈŠ
HÂˆ[š]Ø˜\ÙM

NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÝÛÛÝ]]›Ü›X[^˜][Û‹›ZœÂ™[˜Ý[Ûˆ›Ü›X[^™TÝXÝ\™YÛÛÝ]]ÊÝ]]
HÂˆYˆ
\œ˜^Kš\Ð\œ˜^JÝ]]
JHÂˆYˆ
Ý]]›[™ÝOOH
HÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÝXÝ\™YH×NÂˆ›Üˆ
ÛÛœÝ][HÙˆÝ]]
HÂˆÛÛœÝ›Ü›X[^™YˆH›Ü›X[^™TÝXÝ\™YÛÛÝ]]
][JNÂˆYˆ
[›Ü›X[^™YŠHÂˆ™]\›ˆ[ÂˆBˆÝXÝ\™Yœ\Ú
›Ü›X[^™YŠNÂˆBˆ™]\›ˆÝXÝ\™YÂˆBˆÛÛœÝ›Ü›X[^™YH›Ü›X[^™TÝXÝ\™YÛÛÝ]]
Ý]]
NÂˆ™]\›ˆ›Ü›X[^™YÈÛ›Ü›X[^™YHˆ[ÂŸB™[˜Ý[Ûˆ›Ü›X[^™TÝXÝ\™YÛÛÝ]]
˜[YJHÂˆYˆ
Z\Ô™XÛÜ™Š˜[YJJHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝ\HH˜[YK\NÂˆYˆ
\HOOH^ˆ	‰ˆ\[Ùˆ˜[YK^OOHœÝš[™ÈŠHÂˆÛÛœÝÝ]]HÈ\Nˆ^‹^ˆ˜[YK^NÂˆYˆ
\Ô™XÛÜ™Š˜[YKœ›ÝšY\‘]JJHÂˆÝ]]œ›ÝšY\‘]HH˜[YKœ›ÝšY\‘]NÂˆBˆ™]\›ˆÝ]]ÂˆBˆYˆ
\HOOHš[XYÙHŠHÂˆÛÛœÝÝ]]HÈ\Nˆš[XYÙHˆNÂˆ][XYÙTÝš[™ÎÂˆ][XYÙQš[RYÂˆÛÛœÝ˜[˜XÚÒ[XYÙSYYXU\HHÙ][›[™SYYXU\J˜[YJNÂˆÛÛœÝ[XYÙQšY[H˜[YKš[XYÙNÂˆYˆ
\[Ùˆ[XYÙQšY[OOHœÝš[™Èˆ	‰ˆ[XYÙQšY[›[™Ýˆ
HÂˆ[XYÙTÝš[™ÈH[XYÙQšY[ÂˆH[ÙHYˆ
\Ô™XÛÜ™Š[XYÙQšY[
JHÂˆÛÛœÝ[XYÙSØšˆH[XYÙQšY[ÂˆÛÛœÝ[›[™SYYXU\HHÙ][›[™SYYXU\J[XYÙSØšŠHÏÈ˜[˜XÚÒ[XYÙSYYXU\NÂˆYˆ
\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹\›
JHÂˆ[XYÙTÝš[™ÈH[XYÙSØš‹\›ÂˆH[ÙHYˆ
\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹™]JJHÂˆ[XYÙTÝš[™ÈH›Ü›X][›[™Q]J[XYÙSØš‹™]K[›[™SYYXU\JNÂˆH[ÙHYˆ
[XYÙSØš‹™]H[œÝ[˜Ù[ÙˆZ[\œ˜^H	‰ˆ[XYÙSØš‹™]K›[™Ýˆ
HÂˆ[XYÙTÝš[™ÈH›Ü›X][›[™Q]J[XYÙSØš‹™]K[›[™SYYXU\JNÂˆBˆYˆ
Z[XYÙTÝš[™ÊHÂˆÛÛœÝØ[™Y]RYH\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹™š[RY
H	‰ˆ[XYÙSØš‹™š[RY\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹šY
H	‰ˆ[XYÙSØš‹šY›ÚYÂˆYˆ
Ø[™Y]RY
HÂˆ[XYÙQš[RYHØ[™Y]RYÂˆBˆBˆBˆYˆ
Z[XYÙTÝš[™È	‰ˆ\[Ùˆ˜[YKš[XYÙU\›OOHœÝš[™Èˆ	‰ˆ˜[YKš[XYÙU\››[™Ýˆ
HÂˆ[XYÙTÝš[™ÈH˜[YKš[XYÙU\›ÂˆBˆYˆ
Z[XYÙQš[RY	‰ˆ\[Ùˆ˜[YK™š[RYOOHœÝš[™Èˆ	‰ˆ˜[YK™š[RY›[™Ýˆ
HÂˆ[XYÙQš[RYH˜[YK™š[RYÂˆBˆYˆ
Z[XYÙTÝš[™È	‰ˆ\[Ùˆ˜[YK™]HOOHœÝš[™Èˆ	‰ˆ˜[YK™]K›[™Ýˆ
HÂˆ[XYÙTÝš[™ÈH˜[˜XÚÒ[XYÙSYYXU\HÈ›Ü›X][›[™Q]J˜[YK™]K˜[˜XÚÒ[XYÙSYYXU\JHˆ˜[YK™]NÂˆH[ÙHYˆ
Z[XYÙTÝš[™È	‰ˆ˜[YK™]H[œÝ[˜Ù[ÙˆZ[\œ˜^H	‰ˆ˜[YK™]K›[™Ýˆ
HÂˆ[XYÙTÝš[™ÈH›Ü›X][›[™Q]J˜[YK™]K˜[˜XÚÒ[XYÙSYYXU\JNÂˆBˆYˆ
\[Ùˆ˜[YK™]Z[OOHœÝš[™Èˆ	‰ˆ˜[YK™]Z[›[™Ýˆ
HÂˆÝ]]™]Z[H˜[YK™]Z[ÂˆBˆYˆ
[XYÙTÝš[™ÊHÂˆÝ]]š[XYÙHH[XYÙTÝš[™ÎÂˆH[ÙHYˆ
[XYÙQš[RY
HÂˆÝ]]š[XYÙHHÈš[RYˆ[XYÙQš[RYNÂˆH[ÙHÂˆ™]\›ˆ[ÂˆBˆYˆ
\Ô™XÛÜ™Š˜[YKœ›ÝšY\‘]JJHÂˆÝ]]œ›ÝšY\‘]HH˜[YKœ›ÝšY\‘]NÂˆBˆ™]\›ˆÝ]]ÂˆBˆYˆ
\HOOH™š[HŠHÂˆÛÛœÝš[U˜[YHH›Ü›X[^™Qš[U˜[YJ˜[YJNÂˆYˆ
Yš[U˜[YJHÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÝ]]HÈ\Nˆ™š[H‹š[Nˆš[U˜[YHNÂˆYˆ
\Ô™XÛÜ™Š˜[YKœ›ÝšY\‘]JJHÂˆÝ]]œ›ÝšY\‘]HH˜[YKœ›ÝšY\‘]NÂˆBˆ™]\›ˆÝ]]ÂˆBˆ™]\›ˆ[ÂŸB™[˜Ý[ÛˆÛÛ™\ÝXÝ\™YÛÛÝ]]Ò[œ]][JÝ]]
HÂˆYˆ
Ý]]\HOOH^ŠHÂˆÛÛœÝ™\Ý[HÂˆ\Nˆš[œ]Ý^‹ˆ^ˆÝ]]^ˆNÂˆYˆ
Ý]]œ›ÝšY\‘]JHÂˆ™\Ý[œ›ÝšY\‘]HHÝ]]œ›ÝšY\‘]NÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆYˆ
Ý]]\HOOHš[XYÙHŠHÂˆÛÛœÝ™\Ý[HÈ\Nˆš[œ]Ú[XYÙHˆNÂˆYˆ
\[ÙˆÝ]]™]Z[OOHœÝš[™Èˆ	‰ˆÝ]]™]Z[›[™Ýˆ
HÂˆ™\Ý[™]Z[HÝ]]™]Z[ÂˆBˆYˆ
\[ÙˆÝ]]š[XYÙHOOHœÝš[™Èˆ	‰ˆÝ]]š[XYÙK›[™Ýˆ
HÂˆ™\Ý[š[XYÙHHÝ]]š[XYÙNÂˆH[ÙHYˆ
\Ô™XÛÜ™ŠÝ]]š[XYÙJJHÂˆÛÛœÝ[XYÙSØšˆHÝ]]š[XYÙNÂˆÛÛœÝ[›[™SYYXU\HHÙ][›[™SYYXU\J[XYÙSØšŠNÂˆYˆ
\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹\›
JHÂˆ™\Ý[š[XYÙHH[XYÙSØš‹\›ÂˆH[ÙHYˆ
\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹™]JJHÂˆ™\Ý[š[XYÙHH[›[™SYYXU\H	‰ˆZ[XYÙSØš‹™]KœÝ\ÕÚ]
™]NˆŠHÈ\Ñ]U\›
[XYÙSØš‹™]K[›[™SYYXU\JHˆ[XYÙSØš‹™]NÂˆH[ÙHYˆ
[XYÙSØš‹™]H[œÝ[˜Ù[ÙˆZ[\œ˜^H	‰ˆ[XYÙSØš‹™]K›[™Ýˆ
HÂˆÛÛœÝ˜\ÙMÈH[˜ÛÙUZ[\œ˜^UÐ˜\ÙM
[XYÙSØš‹™]JNÂˆ™\Ý[š[XYÙHH\Ñ]U\›
˜\ÙMË[›[™SYYXU\JNÂˆH[ÙHÂˆÛÛœÝ™Y™\™[˜ÙYYH\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹™š[RY
H	‰ˆ[XYÙSØš‹™š[RY\Ó›Û‘[\TÝš[™ÌÊ[XYÙSØš‹šY
H	‰ˆ[XYÙSØš‹šY›ÚYÂˆYˆ
™Y™\™[˜ÙYY
HÂˆ™\Ý[š[XYÙHHÈYˆ™Y™\™[˜ÙYYNÂˆBˆBˆBˆYˆ
Ý]]œ›ÝšY\‘]JHÂˆ™\Ý[œ›ÝšY\‘]HHÝ]]œ›ÝšY\‘]NÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆYˆ
Ý]]\HOOH™š[HŠHÂˆÛÛœÝ™\Ý[HÈ\Nˆš[œ]Ùš[HˆNÂˆÛÛœÝš[U˜[YHHÝ]]™š[NÂˆYˆ
\[Ùˆš[U˜[YHOOHœÝš[™ÈŠHÂˆ™\Ý[™š[HHš[U˜[YNÂˆH[ÙHYˆ
š[U˜[YH	‰ˆ\[Ùˆš[U˜[YHOOH›Øš™XÝŠHÂˆÛÛœÝ™XÛÜ™ˆHš[U˜[YNÂˆYˆ
™]Hˆ[ˆ™XÛÜ™ˆ	‰ˆ™XÛÜ™‹™]JHÂˆÛÛœÝYYXU\HH™XÛÜ™‹›YYXU\HÏÈ^ÜZ[ˆŽÂˆYˆ
\[Ùˆ™XÛÜ™‹™]HOOHœÝš[™ÈŠHÂˆ™\Ý[™š[HH\Ñ]U\›
™XÛÜ™‹™]KYYXU\JNÂˆH[ÙHÂˆÛÛœÝ˜\ÙMÈH[˜ÛÙUZ[\œ˜^UÐ˜\ÙM
™XÛÜ™‹™]JNÂˆ™\Ý[™š[HH\Ñ]U\›
˜\ÙMËYYXU\JNÂˆBˆH[ÙHYˆ
\[Ùˆ™XÛÜ™‹\›OOHœÝš[™Èˆ	‰ˆ™XÛÜ™‹\››[™Ýˆ
HÂˆ™\Ý[™š[HHÈ\›ˆ™XÛÜ™‹\›NÂˆH[ÙHÂˆÛÛœÝ™Y™\™[˜ÙYYH\[Ùˆ™XÛÜ™‹šYOOHœÝš[™Èˆ	‰ˆ™XÛÜ™‹šY›[™Ýˆ	‰ˆ™XÛÜ™‹šY
\[Ùˆ™XÛÜ™‹™š[RYOOHœÝš[™Èˆ	‰ˆ™XÛÜ™‹™š[RY›[™ÝˆÈ™XÛÜ™‹™š[RYˆ›ÚY
NÂˆYˆ
™Y™\™[˜ÙYY
HÂˆ™\Ý[™š[HHÈYˆ™Y™\™[˜ÙYYNÂˆBˆBˆYˆ
\[Ùˆ™XÛÜ™‹™š[[˜[YHOOHœÝš[™Èˆ	‰ˆ™XÛÜ™‹™š[[˜[YK›[™Ýˆ
HÂˆ™\Ý[™š[[˜[YHH™XÛÜ™‹™š[[˜[YNÂˆBˆBˆYˆ
Ý]]œ›ÝšY\‘]JHÂˆ™\Ý[œ›ÝšY\‘]HHÝ]]œ›ÝšY\‘]NÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆÛÛœÝ^]\Ý]™PÚXÚÈHÝ]]Âˆ™]\›ˆ^]\Ý]™PÚXÚÎÂŸB™[˜Ý[Ûˆ›Ü›X[^™Qš[U˜[YJ˜[YJHÂˆÛÛœÝ\™XÝš[HH˜[YK™š[NÂˆYˆ
\[Ùˆ\™XÝš[HOOHœÝš[™Èˆ	‰ˆ\™XÝš[K›[™Ýˆ
HÂˆ™]\›ˆ\™XÝš[NÂˆBˆÛÛœÝ›Ü›X[^™YØš™XÝH›Ü›X[^™Qš[SØš™XÝØ[™Y]J\™XÝš[JNÂˆYˆ
›Ü›X[^™YØš™XÝ
HÂˆ™]\›ˆ›Ü›X[^™YØš™XÝÂˆBˆÛÛœÝYØXÞU˜[YHH›Ü›X[^™SYØXÞQš[U˜[YJ˜[YJNÂˆYˆ
YØXÞU˜[YJHÂˆ™]\›ˆYØXÞU˜[YNÂˆBˆ™]\›ˆ[ÂŸB™[˜Ý[Ûˆ›Ü›X[^™Qš[SØš™XÝØ[™Y]J˜[YJHÂˆYˆ
Z\Ô™XÛÜ™Š˜[YJJHÂˆ™]\›ˆ[ÂˆBˆYˆ
™]Hˆ[ˆ˜[YH	‰ˆ˜[YK™]HOOH›ÚY
HÂˆÛÛœÝ]U˜[YHH˜[YK™]NÂˆÛÛœÝ\ÔÝš[™Ñ]HH\[Ùˆ]U˜[YHOOHœÝš[™Èˆ	‰ˆ]U˜[YK›[™ÝˆÂˆÛÛœÝ\Ðš[˜\žQ]HH]U˜[YH[œÝ[˜Ù[ÙˆZ[\œ˜^H	‰ˆ]U˜[YK›[™ÝˆÂˆYˆ
Z\ÔÝš[™Ñ]H	‰ˆZ\Ðš[˜\žQ]JHÂˆ™]\›ˆ[ÂˆBˆYˆ
Z\Ó›Û‘[\TÝš[™ÌÊ˜[YK›YYXU\JHZ\Ó›Û‘[\TÝš[™ÌÊ˜[YK™š[[˜[YJJHÂˆ™]\›ˆ[ÂˆBˆ™]\›ˆÂˆ]Nˆ\[Ùˆ]U˜[YHOOHœÝš[™ÈˆÈ]U˜[YHˆ™]ÈZ[\œ˜^J]U˜[YJKˆYYXU\Nˆ˜[YK›YYXU\Kˆš[[˜[YNˆ˜[YK™š[[˜[YBˆNÂˆBˆYˆ
\Ó›Û‘[\TÝš[™ÌÊ˜[YK\›
JHÂˆÛÛœÝ™\Ý[HÈ\›ˆ˜[YK\›NÂˆYˆ
\Ó›Û‘[\TÝš[™ÌÊ˜[YK™š[[˜[YJJHÂˆ™\Ý[™š[[˜[YHH˜[YK™š[[˜[YNÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆÛÛœÝ™Y™\™[˜ÙYYH\Ó›Û‘[\TÝš[™ÌÊ˜[YKšY
H	‰ˆ˜[YKšY\Ó›Û‘[\TÝš[™ÌÊ˜[YK™š[RY
H	‰ˆ˜[YK™š[RYÂˆYˆ
™Y™\™[˜ÙYY
HÂˆÛÛœÝ™\Ý[HÈYˆ™Y™\™[˜ÙYYNÂˆYˆ
\Ó›Û‘[\TÝš[™ÌÊ˜[YK™š[[˜[YJJHÂˆ™\Ý[™š[[˜[YHH˜[YK™š[[˜[YNÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆ™]\›ˆ[ÂŸB™[˜Ý[Ûˆ›Ü›X[^™SYØXÞQš[U˜[YJ˜[YJHÂˆÛÛœÝš[[˜[YHH\[Ùˆ˜[YK™š[[˜[YHOOHœÝš[™Èˆ	‰ˆ˜[YK™š[[˜[YK›[™ÝˆÈ˜[YK™š[[˜[YHˆ›ÚYÂˆÛÛœÝYYXU\HH\[Ùˆ˜[YK›YYXU\HOOHœÝš[™Èˆ	‰ˆ˜[YK›YYXU\K›[™ÝˆÈ˜[YK›YYXU\Hˆ›ÚYÂˆYˆ
\[Ùˆ˜[YK™š[Q]HOOHœÝš[™Èˆ	‰ˆ˜[YK™š[Q]K›[™Ýˆ
HÂˆYˆ
[YYXU\HYš[[˜[YJHÂˆ™]\›ˆ[ÂˆBˆ™]\›ˆÈ]Nˆ˜[YK™š[Q]KYYXU\Kš[[˜[YHNÂˆBˆYˆ
˜[YK™š[Q]H[œÝ[˜Ù[ÙˆZ[\œ˜^H	‰ˆ˜[YK™š[Q]K›[™Ýˆ
HÂˆYˆ
[YYXU\HYš[[˜[YJHÂˆ™]\›ˆ[ÂˆBˆ™]\›ˆÈ]Nˆ™]ÈZ[\œ˜^J˜[YK™š[Q]JKYYXU\Kš[[˜[YHNÂˆBˆYˆ
\[Ùˆ˜[YK™š[U\›OOHœÝš[™Èˆ	‰ˆ˜[YK™š[U\››[™Ýˆ
HÂˆÛÛœÝ™\Ý[HÈ\›ˆ˜[YK™š[U\›NÂˆYˆ
š[[˜[YJHÂˆ™\Ý[™š[[˜[YHHš[[˜[YNÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆYˆ
\[Ùˆ˜[YK™š[RYOOHœÝš[™Èˆ	‰ˆ˜[YK™š[RY›[™Ýˆ
HÂˆÛÛœÝ™\Ý[HÈYˆ˜[YK™š[RYNÂˆYˆ
š[[˜[YJHÂˆ™\Ý[™š[[˜[YHHš[[˜[YNÂˆBˆ™]\›ˆ™\Ý[ÂˆBˆ™]\›ˆ[ÂŸB™[˜Ý[Ûˆ\Ô™XÛÜ™Š˜[YJHÂˆ™]\›ˆ\[Ùˆ˜[YHOOH›Øš™XÝˆ	‰ˆ˜[YHOOH[ÂŸB™[˜Ý[Ûˆ\Ó›Û‘[\TÝš[™ÌÊ˜[YJHÂˆ™]\›ˆ\[Ùˆ˜[YHOOHœÝš[™Èˆ	‰ˆ˜[YK›[™ÝˆÂŸB™[˜Ý[Ûˆ\Ñ]U\›
˜\ÙMËYYXU\JHÂˆ™]\›ˆYYXU\HÈ]N‰ÛYYXU\_NØ˜\ÙM	Ø˜\ÙMßXˆ˜\ÙMÎÂŸB˜\ˆ[š]ÝÛÛÝ]]›Ü›X[^˜][ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÝÛÛÝ]]›Ü›X[^˜][Û‹›ZœÈŠ
HÂˆ[š]Ø˜\ÙM

NÂˆ[š]Ú[›[™Q]J
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÝ][ËÝÛÛÝX\™˜Z[Ë›ZœÂ™[˜Ý[Ûˆ›Ü›X[^™P™Z]š[ÜŠÝ]]
HÂˆ™]\›ˆÝ]]˜™Z]š[ÜˆÏÈÈ\Nˆ˜[ÝÈˆNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[•ÛÛ[œ]ÝX\™˜Z[ÊÈÝX\™˜Z[ËÛÛ^YÙ[ÛÛØ[Û”™\Ý[JHÂˆÛÛœÝ\ÝHÝX\™˜Z[ÈÏÈ×NÂˆ›Üˆ
ÛÛœÝÝX\™˜Z[Ùˆ\Ý
HÂˆÛÛœÝÝ]]H]ØZ]ÝX\™˜Z[œ[ŠÂˆÛÛ^ˆYÙ[ˆÛÛØ[ˆJNÂˆÛÛœÝ™Z]š[ÜˆH›Ü›X[^™P™Z]š[ÜŠÝ]]
NÂˆÛÛœÝ™\Ý[HÂˆÝX\™˜Z[ˆÈ\NˆÛÛÚ[œ]‹˜[YNˆÝX\™˜Z[›˜[YHKˆÝ]]ˆÈ‹‹›Ý]]™Z]š[ÜˆBˆNÂˆÛ”™\Ý[ËŠ™\Ý[
NÂˆYˆ
™Z]š[Ü‹\HOOHœ™Z™XÝÛÛ[ŠHÂˆ™]\›ˆÈ\Nˆœ™Z™XÝ‹Y\ÜØYÙNˆ™Z]š[Ü‹›Y\ÜØYÙHNÂˆBˆYˆ
™Z]š[Ü‹\HOOH›ÝÑ^Ù\[ÛˆŠHÂˆ›ÝÈ™]ÈÛÛ[œ]ÝX\™˜Z[š\Ú\™UšYÙÙ\™Y
ÛÛ[œ]ÝX\™˜Z[šYÙÙ\™Yˆ	ÙÝX\™˜Z[›˜[Y_X™\Ý[
NÂˆBˆBˆ™]\›ˆÈ\Nˆ˜[ÝÈˆNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[•ÛÛÝ]]ÝX\™˜Z[ÊÈÝX\™˜Z[ËÛÛ^YÙ[ÛÛØ[ÛÛÝ]]Û”™\Ý[JHÂˆÛÛœÝ\ÝHÝX\™˜Z[ÈÏÈ×NÂˆ]š[˜[Ý]]HÛÛÝ]]Âˆ›Üˆ
ÛÛœÝÝX\™˜Z[Ùˆ\Ý
HÂˆÛÛœÝÝ]]H]ØZ]ÝX\™˜Z[œ[ŠÂˆÛÛ^ˆYÙ[ˆÛÛØ[ˆÝ]]ˆÛÛÝ]]ˆJNÂˆÛÛœÝ™Z]š[ÜˆH›Ü›X[^™P™Z]š[ÜŠÝ]]
NÂˆÛÛœÝ™\Ý[HÂˆÝX\™˜Z[ˆÈ\NˆÛÛÛÝ]]‹˜[YNˆÝX\™˜Z[›˜[YHKˆÝ]]ˆÈ‹‹›Ý]]™Z]š[ÜˆBˆNÂˆÛ”™\Ý[ËŠ™\Ý[
NÂˆYˆ
™Z]š[Ü‹\HOOHœ™Z™XÝÛÛ[ŠHÂˆš[˜[Ý]]H™Z]š[Ü‹›Y\ÜØYÙNÂˆœ™XZÎÂˆBˆYˆ
™Z]š[Ü‹\HOOH›ÝÑ^Ù\[ÛˆŠHÂˆ›ÝÈ™]ÈÛÛÝ]]ÝX\™˜Z[š\Ú\™UšYÙÙ\™Y
ÛÛÝ]]ÝX\™˜Z[šYÙÙ\™Yˆ	ÙÝX\™˜Z[›˜[Y_X™\Ý[
NÂˆBˆBˆ™]\›ˆš[˜[Ý]]ÂŸB˜\ˆ[š]ÝÛÛÝX\™˜Z[ÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÝ][ËÝÛÛÝX\™˜Z[Ë›ZœÈŠ
HÂˆ[š]Ù\œ›ÜœÍJ
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ø\›Ý˜[™Z™XÝ[Û‹›ZœÂ™[˜Ý[ÛˆÑ\œ›Ü“Y\ÜØYÙLŠ\œ›ÜLJHÂˆ™]\›ˆ\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›ÜˆÈ\œ›ÜLK›Y\ÜØYÙHˆÝš[™Ê\œ›ÜLJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙJÈ[ÛÛ^ÛÛ\KÛÛ˜[YKØ[YÛÛ\œ›Ü‘›Ü›X]\ˆJHÂˆÛÛœÝ\Ø[Y\ÜØYÙHH[ÛÛ^™Ù]™Z™XÝ[Û“Y\ÜØYÙJÛÛ˜[YKØ[Y
NÂˆYˆ
\[Ùˆ\Ø[Y\ÜØYÙHOOHœÝš[™ÈŠHÂˆ™]\›ˆ\Ø[Y\ÜØYÙNÂˆBˆYˆ
]ÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆ™]\›ˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑNÂˆBˆžHÂˆÛÛœÝ›Ü›X]YY\ÜØYÙHH]ØZ]ÛÛ\œ›Ü‘›Ü›X]\ŠÂˆÚ[™ˆ˜\›Ý˜[Ü™Z™XÝY‹ˆÛÛ\KˆÛÛ˜[YKˆØ[YˆY˜][Y\ÜØYÙNˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑKˆ[ÛÛ^ˆJNÂˆYˆ
\[Ùˆ›Ü›X]YY\ÜØYÙHOOHœÝš[™ÈŠHÂˆ™]\›ˆ›Ü›X]YY\ÜØYÙNÂˆBˆYˆ
\[Ùˆ›Ü›X]YY\ÜØYÙHOOH[™Yš[™YŠHÂˆÙÙÙ\—ÙY˜][Ø\›ŠÛÛ\œ›Ü‘›Ü›X]\ˆ™]\›™YH›Û‹\Ýš[™È˜[YKˆ˜[[™È˜XÚÈÈHY˜][ÛÛ\›Ý˜[™Z™XÝ[ÛˆY\ÜØYÙKˆŠNÂˆBˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][Ø\›ŠÛÛ\œ›Ü‘›Ü›X]\ˆ™]ÈÚ[H›Ü›X][™È\›Ý˜[™Z™XÝ[ÛŽˆ	ÝÑ\œ›Ü“Y\ÜØYÙLŠ\œ›ÜLJ_X
NÂˆBˆ™]\›ˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑNÂŸB˜\ˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑNÂ˜\ˆ[š]Ø\›Ý˜[™Z™XÝ[ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ø\›Ý˜[™Z™XÝ[Û‹›ZœÈŠ
HÂˆ[š]ÛÙÙÙ\Š
NÂˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑHH•ÛÛ^XÝ][ÛˆØ\È›Ý\›Ý™YˆŽÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÝÛÛ^XÝ][Û‹›ZœÂ™[˜Ý[ÛˆÙ][˜Ý[Û•ÛÛY[]JÛÛ[ŠHÂˆ™]\›ˆÙ][˜Ý[Û•ÛÛ]X[YšYY˜[YJÛÛ[‹ÛÛ
HÏÈÛÛ[‹ÛÛ›˜[YNÂŸB™[˜Ý[ÛˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
˜[YJHÂˆžHÂˆ™]\›ˆÝXÝ\™YÛÛ™J˜[YJNÂˆHØ]ÚÂˆ™]\›ˆ˜[YNÂˆBŸB™[˜Ý[ÛˆÙ][˜Ý[Û•ÛÛ˜XÙS˜[YJÛÛ[ŠHÂˆ™]\›ˆÙ][˜Ý[Û•ÛÛY[]JÛÛ[ŠNÂŸB™[˜Ý[ÛˆÙ]ÛÛ\]\•ÛÛXÝ[ÛœÊÛÛØ[
HÂˆYˆ
\œ˜^Kš\Ð\œ˜^JÛÛØ[˜XÝ[ÛœÊH	‰ˆÛÛØ[˜XÝ[ÛœË›[™Ýˆ
HÂˆ™]\›ˆÛÛØ[˜XÝ[ÛœÎÂˆBˆ™]\›ˆÛÛØ[˜XÝ[ÛˆÈÝÛÛØ[˜XÝ[Û—Hˆ×NÂŸB™[˜Ý[ÛˆÙ]ÛÛ\]\•˜XÙR[œ]^[ØY
ÛÛØ[
HÂˆÛÛœÝXÝ[ÛœÈHÙ]ÛÛ\]\•ÛÛXÝ[ÛœÊÛÛØ[
NÂˆYˆ
\œ˜^Kš\Ð\œ˜^JÛÛØ[˜XÝ[ÛœÊH	‰ˆÛÛØ[˜XÝ[ÛœË›[™Ýˆ
HÂˆ™]\›ˆXÝ[ÛœÎÂˆBˆ™]\›ˆXÝ[ÛœÖÌNÂŸB™[˜Ý[ÛˆÙ]ÛÛØ[Ý]]][JÛÛØ[Ý]]
HÂˆÛÛœÝX^X™TÝXÝ\™YÝ]]ÈH›Ü›X[^™TÝXÝ\™YÛÛÝ]]ÊÝ]]
NÂˆYˆ
X^X™TÝXÝ\™YÝ]]ÊHÂˆÛÛœÝÝXÝ\™Y][\ÈHX^X™TÝXÝ\™YÝ]]Ë›X\
ÛÛ™\ÝXÝ\™YÛÛÝ]]Ò[œ]][JNÂˆ™]\›ˆÂˆ\Nˆ™[˜Ý[Û—ØØ[Ü™\Ý[‹ˆ˜[YNˆÛÛØ[›˜[YKˆ‹‹\[ÙˆÛÛØ[›˜[Y\ÜXÙHOOHœÝš[™ÈˆÈÈ˜[Y\ÜXÙNˆÛÛØ[›˜[Y\ÜXÙHHˆßKˆØ[YˆÛÛØ[˜Ø[YˆÝ]\Îˆ˜ÛÛ\]Y‹ˆÝ]]ˆÝXÝ\™Y][\ÂˆNÂˆBˆ™]\›ˆÂˆ\Nˆ™[˜Ý[Û—ØØ[Ü™\Ý[‹ˆ˜[YNˆÛÛØ[›˜[YKˆ‹‹\[ÙˆÛÛØ[›˜[Y\ÜXÙHOOHœÝš[™ÈˆÈÈ˜[Y\ÜXÙNˆÛÛØ[›˜[Y\ÜXÙHHˆßKˆØ[YˆÛÛØ[˜Ø[YˆÝ]\Îˆ˜ÛÛ\]Y‹ˆÝ]]ˆÂˆ\Nˆ^‹ˆ^ˆÔÛX\Ýš[™ÊÝ]]
BˆBˆNÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]Q[˜Ý[Û•ÛÛØ[ÊYÙ[ÛÛ[œË[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYÊHÂˆÛÛœÝ\ÈHÂˆYÙ[ˆ[›™\‹ˆÝ]KˆÛÛ\œ›Ü‘›Ü›X]\‹ˆYÙ[ÛÛ\™[[ÛÛ™šYÂˆNÂˆÛÛœÝ^XÝ]UÛÛ[ˆH\Þ[˜È
ÛÛ[ŠHOˆÂˆÛÛœÝ\œÙT™\Ý[H\œÙUÛÛ\™Ý[Y[ÊÛÛ[ŠNÂˆYˆ
\\œÙT™\Ý[œÝXØÙ\ÜÊHÂˆ™]\›ˆZ[\œÙQ\œ›Ü”™\Ý[
\ËÛÛ[‹\œÙT™\Ý[™\œ›ÜŠNÂˆBˆÛÛœÝ\›Ý˜[Ý]ÛÛYHH]ØZ][™Q[˜Ý[Û\›Ý˜[
\ËÛÛ[‹\œÙT™\Ý[˜\™ÜÊNÂˆYˆ
\›Ý˜[Ý]ÛÛYHOOH˜\›Ý™YŠHÂˆ™]\›ˆ\›Ý˜[Ý]ÛÛYNÂˆBˆ™]\›ˆ[\›Ý™Y[˜Ý[Û•ÛÛ
\ËÛÛ[‹\œÙT™\Ý[˜\™ÜÊNÂˆNÂˆžHÂˆÛÛœÝ™\Ý[ÈH]ØZ]^XÝ]UÛÛ[œÕÚ]ÛÛ˜Ý\œ™[˜ÞJÛÛ[œËÙ]X^[˜Ý[Û•ÛÛÛÛ˜Ý\œ™[˜ÞJYÙ[ÛÛ\™[[ÛÛ™šYÏËÛÛ^XÝ][ÛˆÏÈ[›™\‹˜ÛÛ™šYËÛÛ^XÝ][ÛŠK^XÝ]UÛÛ[ŠNÂˆ™]\›ˆ™\Ý[ÎÂˆHØ]Ú
JHÂˆYˆ
H[œÝ[˜Ù[ÙˆÛÛ[Y[Ý]\œ›ÜŠHÂˆKœÝ]HÏÈ
KœÝ]HHÝ]JNÂˆ›ÝÈNÂˆBˆ›ÝÈ™]ÈÛÛØ[\œ›ÜŠ˜Z[YÈ[ˆ[˜Ý[ÛˆÛÛÎˆ	Ù_XKÝ]JNÂˆBŸB™[˜Ý[ÛˆÙ]X^[˜Ý[Û•ÛÛÛÛ˜Ý\œ™[˜ÞJÛÛ^XÝ][ÛŠHÂˆ™]\›ˆÛÛ^XÝ][ÛË›X^[˜Ý[Û•ÛÛÛÛ˜Ý\œ™[˜ÞHÏÈ›ÚYÂŸB™[˜Ý[ÛˆÚÝ[[”™P\›Ý˜[[œ]ÝX\™˜Z[Ê\ÊHÂˆ™]\›ˆ
\Ë˜YÙ[ÛÛ\™[[ÛÛ™šYÏËÛÛ^XÝ][ÛˆÏÈ\Ëœ[›™\‹˜ÛÛ™šYËÛÛ^XÝ][ÛŠOËœ™P\›Ý˜[[œ]ÝX\™˜Z[ÈOOHYNÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]UÛÛ[œÕÚ]ÛÛ˜Ý\œ™[˜ÞJÛÛ[œËX^ÛÛ˜Ý\œ™[˜ÞK^XÝ]UÛÛ[ŠHÂˆYˆ
X^ÛÛ˜Ý\œ™[˜ÞHOOH›ÚYX^ÛÛ˜Ý\œ™[˜ÞHHÛÛ[œË›[™ÝÛÛ[œË›[™ÝHJHÂˆ™]\›ˆ›ÛZ\ÙK˜[
ÛÛ[œË›X\

ÛÛ[ŠHOˆ^XÝ]UÛÛ[ŠÛÛ[ŠJJNÂˆBˆÛÛœÝ™\Ý[ÈH×NÂˆ]™^[™^HÂˆ]š\œÝ\œ›ÜŽÂˆÛÛœÝÛÜšÙ\ˆH\Þ[˜È

HOˆÂˆÚ[H
™^[™^ÛÛ[œË›[™Ý	‰ˆš\œÝ\œ›ÜˆOOH›ÚY
HÂˆÛÛœÝÝ\œ™[[™^H™^[™^Âˆ™^[™^
ÏHNÂˆžHÂˆ™\Ý[ÖØÝ\œ™[[™^HH]ØZ]^XÝ]UÛÛ[ŠÛÛ[œÖØÝ\œ™[[™^JNÂˆHØ]Ú
\œ›ÜLJHÂˆš\œÝ\œ›ÜˆÏÈ
š\œÝ\œ›ÜˆH\œ›ÜLJNÂˆœ™XZÎÂˆBˆBˆNÂˆÛÛœÝÛÜšÙ\ÛÝ[HX]›Z[ŠX^ÛÛ˜Ý\œ™[˜ÞKÛÛ[œË›[™Ý
NÂˆ]ØZ]›ÛZ\ÙK˜[Ù]Y
\œ˜^K™œ›ÛJÈ[™ÝˆÛÜšÙ\ÛÝ[K\Þ[˜È

HOˆÛÜšÙ\Š
JJNÂˆYˆ
š\œÝ\œ›ÜˆOOH›ÚY
HÂˆ›ÝÈš\œÝ\œ›ÜŽÂˆBˆ™]\›ˆ™\Ý[ÎÂŸB™[˜Ý[Ûˆ\œÙUÛÛ\™Ý[Y[ÊÛÛ[ŠHÂˆÛÛœÝÛÛ˜[YHHÙ][˜Ý[Û•ÛÛY[]JÛÛ[ŠNÂˆžHÂˆ]\œÙY\™ÜÈHÛÛ[‹ÛÛØ[˜\™Ý[Y[ÎÂˆYˆ
ÛÛ[‹ÛÛœ\˜[Y]\œÊHÂˆYˆ
\Ö›ÙØš™XÝ
ÛÛ[‹ÛÛœ\˜[Y]\œÊJHÂˆ\œÙY\™ÜÈHÛÛ[‹ÛÛœ\˜[Y]\œËœ\œÙJ\œÙY\™ÜÊNÂˆH[ÙHÂˆ\œÙY\™ÜÈH”ÓÓ‹œ\œÙJ\œÙY\™ÜÊNÂˆBˆBˆ™]\›ˆÈÝXØÙ\ÜÎˆYK\™ÜÎˆ\œÙY\™ÜÈNÂˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][™XYÊ˜Z[YÈ\œÙHÛÛ\™Ý[Y[È›Üˆ	ÝÛÛ˜[Y_Nˆ	Ù\œ›ÜL_X
NÂˆ™]\›ˆÈÝXØÙ\ÜÎˆ˜[ÙK\œ›ÜŽˆ\œ›ÜLHNÂˆBŸB™[˜Ý[ÛˆZ[\›Ý˜[™\]Y\Ý™\Ý[
\ËÛÛ[ŠHÂˆ™]\›ˆÂˆ\Nˆ™[˜Ý[Û—Ø\›Ý˜[‹ˆÛÛˆÛÛ[‹ÛÛˆ[’][Nˆ™]È[•ÛÛ\›Ý˜[][JÛÛ[‹ÛÛØ[\Ë˜YÙ[Ù][˜Ý[Û•ÛÛY[]JÛÛ[ŠJBˆNÂŸB™[˜Ý[ÛˆZ[\œÙQ\œ›Ü”™\Ý[
\ËÛÛ[‹\œ›ÜLJHÂˆÛÛœÝ\œ›Ü“Y\ÜØYÙHH[ˆ\œ›ÜˆØØÝ\œ™YÚ[H\œÚ[™ÈÛÛ\™Ý[Y[ËˆX\ÙHžHYØZ[ˆÚ]˜[Y”ÓÓ‹ˆ\œ›ÜŽˆ	Ù\œ›ÜLK›Y\ÜØYÙ_XÂˆ™]\›ˆÂˆ\Nˆ™[˜Ý[Û—ÛÝ]]‹ˆÛÛˆÛÛ[‹ÛÛˆÝ]]ˆ\œ›Ü“Y\ÜØYÙKˆ[’][Nˆ™]È[•ÛÛØ[Ý]]][JÙ]ÛÛØ[Ý]]][JÛÛ[‹ÛÛØ[\œ›Ü“Y\ÜØYÙJK\Ë˜YÙ[\œ›Ü“Y\ÜØYÙJBˆNÂŸB˜\Þ[˜È[˜Ý[ÛˆZ[\›Ý˜[™Z™XÝ[Û”™\Ý[
\ËÛÛ[ŠHÂˆÛÛœÝÈYÙ[[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\ˆHH\ÎÂˆÛÛœÝÛÛ˜[YHHÙ][˜Ý[Û•ÛÛY[]JÛÛ[ŠNÂˆÛÛœÝ˜XÙUÛÛ˜[YHHÙ][˜Ý[Û•ÛÛ˜XÙS˜[YJÛÛ[ŠNÂˆ™]\›ˆÚ]ÛÛ[˜Ý[Û”Ü[Š[›™\‹˜XÙUÛÛ˜[YK\Þ[˜È
Ü[ŠHOˆÂˆÛÛœÝ™\ÜÛœÙHH]ØZ]™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙJÂˆ[ÛÛ^ˆÝ]K—ØÛÛ^ˆÛÛ\Nˆ™[˜Ý[Ûˆ‹ˆÛÛ˜[YKˆØ[YˆÛÛ[‹ÛÛØ[˜Ø[YˆÛÛ\œ›Ü‘›Ü›X]\‚ˆJNÂˆÛÛœÝ˜XÙQ\œ›Ü“Y\ÜØYÙHH[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]HÈ™\ÜÛœÙHˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑNÂˆÜ[ËœÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ˜XÙQ\œ›Ü“Y\ÜØYÙKˆ]NˆÂˆÛÛÛ˜[YNˆ˜XÙUÛÛ˜[YKˆ\œ›ÜŽˆÛÛ^XÝ][Ûˆ›Üˆ	ÝÛÛ[‹ÛÛØ[˜Ø[YHØ\ÈX[X[H™Z™XÝYžH\Ù\‹˜ˆBˆJNÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]K›Ý]]H™\ÜÛœÙNÂˆBˆ™]\›ˆÂˆ\Nˆ™[˜Ý[Û—ÛÝ]]‹ˆÛÛˆÛÛ[‹ÛÛˆÝ]]ˆ™\ÜÛœÙKˆ[’][Nˆ™]È[•ÛÛØ[Ý]]][JÙ]ÛÛØ[Ý]]][JÛÛ[‹ÛÛØ[™\ÜÛœÙJKYÙ[™\ÜÛœÙJBˆNÂˆJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[™Q[˜Ý[Û\›Ý˜[
\ËÛÛ[‹\œÙY\™ÜÊHÂˆÛÛœÝÈYÙ[Ý]HHH\ÎÂˆÛÛœÝÛÛ˜[YHHÙ][˜Ý[Û•ÛÛY[]JÛÛ[ŠNÂˆÛÛœÝ\›Ý˜[HÝ]K—ØÛÛ^š\ÕÛÛ\›Ý™Y
ÂˆÛÛ˜[YKˆØ[YˆÛÛ[‹ÛÛØ[˜Ø[YˆJNÂˆYˆ
\›Ý˜[OOH˜[ÙJHÂˆÝ]K˜ÛX\”[™[™ÐYÙ[ÛÛ[ŠÛÛ˜[YKÛÛ[‹ÛÛØ[˜Ø[Y
NÂˆ™]\›ˆ]ØZ]Z[\›Ý˜[™Z™XÝ[Û”™\Ý[
\ËÛÛ[ŠNÂˆBˆYˆ
\›Ý˜[OOHYJHÂˆ™]\›ˆ˜\›Ý™YŽÂˆBˆÛÛœÝ™YYÐ\›Ý˜[H]ØZ]ÛÛ[‹ÛÛ›™YYÐ\›Ý˜[
Ý]K—ØÛÛ^\œÙY\™ÜËÛÛ[‹ÛÛØ[˜Ø[Y
NÂˆYˆ
[™YYÐ\›Ý˜[
HÂˆ™]\›ˆ˜\›Ý™YŽÂˆBˆYˆ
ÚÝ[[”™P\›Ý˜[[œ]ÝX\™˜Z[Ê\ÊJHÂˆÛÛœÝ[œ]ÝX\™˜Z[™\Ý[H]ØZ][‘[˜Ý[Û•ÛÛ[œ]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ÎˆÛÛ[‹ÛÛš[œ]ÝX\™˜Z[ËˆÛÛ^ˆÝ]K—ØÛÛ^ˆYÙ[ˆÛÛØ[ˆÛÛ[‹ÛÛØ[ˆÛ”™\Ý[ˆ
™\Ý[
HOˆÂˆÝ]K—ÝÛÛ[œ]ÝX\™˜Z[™\Ý[Ëœ\Ú
™\Ý[
NÂˆBˆJNÂˆYˆ
[œ]ÝX\™˜Z[™\Ý[\HOOHœ™Z™XÝŠHÂˆ™]\›ˆZ[[œ]ÝX\™˜Z[™Z™XÝ[Û”™\Ý[
\ËÛÛ[‹[œ]ÝX\™˜Z[™\Ý[›Y\ÜØYÙJNÂˆBˆBˆ™]\›ˆZ[\›Ý˜[™\]Y\Ý™\Ý[
\ËÛÛ[ŠNÂŸB™[˜Ý[ÛˆZ[[œ]ÝX\™˜Z[™Z™XÝ[Û”™\Ý[
\ËÛÛ[‹Y\ÜØYÙJHÂˆ™]\›ˆÂˆ\Nˆ™[˜Ý[Û—ÛÝ]]‹ˆÛÛˆÛÛ[‹ÛÛˆÝ]]ˆY\ÜØYÙKˆ[’][Nˆ™]È[•ÛÛØ[Ý]]][JÙ]ÛÛØ[Ý]]][JÛÛ[‹ÛÛØ[Y\ÜØYÙJK\Ë˜YÙ[Y\ÜØYÙJBˆNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[‘[˜Ý[Û•ÛÛ[œ]ÝX\™˜Z[ÊÈÝX\™˜Z[ËÛÛ^YÙ[ÛÛØ[Û”™\Ý[JHÂˆ™]\›ˆ[•ÛÛ[œ]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ËˆÛÛ^ˆYÙ[ˆÛÛØ[ˆÛ”™\Ý[ˆJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[\›Ý™Y[˜Ý[Û•ÛÛ
\ËÛÛ[‹\œÙY[œ]
HÂˆÛÛœÝÈYÙ[[›™\‹Ý]KYÙ[ÛÛ\™[[ÛÛ™šYÈHH\ÎÂˆÛÛœÝÛÛ˜[YHHÙ][˜Ý[Û•ÛÛY[]JÛÛ[ŠNÂˆÛÛœÝ˜XÙUÛÛ˜[YHHÙ][˜Ý[Û•ÛÛ˜XÙS˜[YJÛÛ[ŠNÂˆ™]\›ˆÚ]ÛÛ[˜Ý[Û”Ü[Š[›™\‹˜XÙUÛÛ˜[YK\Þ[˜È
Ü[ŠHOˆÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]Kš[œ]HÛÛ[‹ÛÛØ[˜\™Ý[Y[ÎÂˆBˆžHÂˆÛÛœÝ[œ]ÝX\™˜Z[™\Ý[H]ØZ][‘[˜Ý[Û•ÛÛ[œ]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ÎˆÛÛ[‹ÛÛš[œ]ÝX\™˜Z[ËˆÛÛ^ˆÝ]K—ØÛÛ^ˆYÙ[ˆÛÛØ[ˆÛÛ[‹ÛÛØ[ˆÛ”™\Ý[ˆ
™\Ý[
HOˆÂˆÝ]K—ÝÛÛ[œ]ÝX\™˜Z[™\Ý[Ëœ\Ú
™\Ý[
NÂˆBˆJNÂˆ[Z]ÛÛÝ\
[›™\‹Ý]K—ØÛÛ^YÙ[ÛÛ[‹ÛÛÛÛ[‹ÛÛØ[
NÂˆ]ÛÛÝ]]Âˆ]^XÝ]Y[œ]H\œÙY[œ]ÂˆYˆ
[œ]ÝX\™˜Z[™\Ý[\HOOHœ™Z™XÝŠHÂˆÛÛÝ]]H[œ]ÝX\™˜Z[™\Ý[›Y\ÜØYÙNÂˆH[ÙHÂˆÛÛœÝ™\Ý[YTÝ]HHÝ]K™Ù][™[™ÐYÙ[ÛÛ[ŠÛÛ˜[YKÛÛ[‹ÛÛØ[˜Ø[Y
NÂˆÛÛœÝÛÛ]Z[ÈHÂˆÛÛØ[ˆÛÛ[‹ÛÛØ[ˆ™\Ý[YTÝ]KˆÑ•SÕSÓ—ÕÓÓÔT”ÑQÒS”UÐÐSPÒ×Nˆ
[œ]
HOˆÂˆ^XÝ]Y[œ]HÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
[œ]
NÂˆBˆNÂˆÙ]YÙ[ÛÛ\™[[ÛÛ™šYÓÛ‘]Z[ÊÛÛ]Z[ËYÙ[ÛÛ\™[[ÛÛ™šYÈÏÈ[›™\‹˜ÛÛ™šYÊNÂˆÛÛÝ]]H]ØZ][›ÚÙQ[˜Ý[Û•ÛÛ
ÂˆÛÛˆÛÛ[‹ÛÛˆ[ÛÛ^ˆÝ]K—ØÛÛ^ˆ[œ]ˆÛÛ[‹ÛÛØ[˜\™Ý[Y[Ëˆ]Z[ÎˆÛÛ]Z[ÂˆJNÂˆÛÛÝ]]H]ØZ][•ÛÛÝ]]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ÎˆÛÛ[‹ÛÛ›Ý]]ÝX\™˜Z[ËˆÛÛ^ˆÝ]K—ØÛÛ^ˆYÙ[ˆÛÛØ[ˆÛÛ[‹ÛÛØ[ˆÛÛÝ]]ˆÛ”™\Ý[ˆ
™\Ý[
HOˆÂˆÝ]K—ÝÛÛÝ]]ÝX\™˜Z[™\Ý[Ëœ\Ú
™\Ý[
NÂˆBˆJNÂˆBˆÛÛœÝÝš[™Ô™\Ý[HÔÛX\Ýš[™ÊÛÛÝ]]
NÂˆÛÛœÝ˜]Ò][HHÙ]ÛÛØ[Ý]]][JÛÛ[‹ÛÛØ[ÛÛÝ]]
NÂˆÛÛœÝÝ\ÝÛQ]HH]ØZ]X^X™Q^˜XÝÛÛÝ]]Ý\ÝÛQ]JÛÛ[‹ÛÛ˜Ý\ÝÛQ]Q^˜XÝÜ‹Âˆ[ÛÛ^ˆÝ]K—ØÛÛ^ˆÛÛˆÛÛ[‹ÛÛˆÛÛØ[ˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
ÛÛ[‹ÛÛØ[
Kˆ[œ]ˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
^XÝ]Y[œ]
KˆÝ]]ˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
ÛÛÝ]]
Kˆ˜]Ò][NˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
˜]Ò][JBˆJNÂˆ[Z]ÛÛ[™
[›™\‹Ý]K—ØÛÛ^YÙ[ÛÛ[‹ÛÛÝš[™Ô™\Ý[ÛÛ[‹ÛÛØ[
NÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]K›Ý]]HÝš[™Ô™\Ý[ÂˆBˆÛÛœÝ[˜Ý[Û”™\Ý[HÂˆ\Nˆ™[˜Ý[Û—ÛÝ]]‹ˆÛÛˆÛÛ[‹ÛÛˆÝ]]ˆÛÛÝ]]ˆ[’][Nˆ™]È[•ÛÛØ[Ý]]][J˜]Ò][KYÙ[ÛÛÝ]]Ý\ÝÛQ]JBˆNÂˆÛÛœÝ™\ÝY[”™\Ý[HÛÛœÝ[YPYÙ[ÛÛ[”™\Ý[
ÛÛ[‹ÛÛØ[
NÂˆYˆ
™\ÝY[”™\Ý[
HÂˆ[˜Ý[Û”™\Ý[˜YÙ[[”™\Ý[H™\ÝY[”™\Ý[ÂˆÛÛœÝ™\ÝY[\œ\[ÛœÈH™\ÝY[”™\Ý[š[\œ\[ÛœÎÂˆYˆ
™\ÝY[\œ\[ÛœË›[™Ýˆ
HÂˆ[˜Ý[Û”™\Ý[š[\œ\[ÛœÈH™\ÝY[\œ\[ÛœÎÂˆÛÛœÝ™\ÝY[”Ý]RœÛÛˆH™\ÝY[”™\Ý[œÝ]KÒ”ÓÓŠ
NÂˆÝ]KœÙ][™[™ÐYÙ[ÛÛ[ŠÛÛ˜[YKÛÛ[‹ÛÛØ[˜Ø[Y”ÓÓ‹œÝš[™ÚYžJ™\ÝY[”Ý]RœÛÛŠJNÂˆH[ÙHÂˆÝ]K˜ÛX\”[™[™ÐYÙ[ÛÛ[ŠÛÛ˜[YKÛÛ[‹ÛÛØ[˜Ø[Y
NÂˆBˆBˆ™]\›ˆ[˜Ý[Û”™\Ý[ÂˆHØ]Ú
\œ›ÜLJHÂˆÜ[ËœÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ‘\œ›Üˆ[›š[™ÈÛÛ‹ˆ]NˆÂˆÛÛÛ˜[YNˆ˜XÙUÛÛ˜[YKˆ\œ›ÜŽˆÝš[™Ê\œ›ÜLJBˆBˆJNÂˆÛÛœÝ\œ›Ü”™\Ý[HÝš[™Ê\œ›ÜLJNÂˆ[Z]ÛÛ[™
[›™\‹Ý]K—ØÛÛ^YÙ[ÛÛ[‹ÛÛ\œ›Ü”™\Ý[ÛÛ[‹ÛÛØ[
NÂˆ›ÝÈ\œ›ÜLNÂˆBˆJNÂŸB˜\Þ[˜È[˜Ý[ÛˆÜ[ÛÛ\]\XÝ[Û[™ØÜ™Y[œÚÝ
ÛÛ\]\‹ÛÛØ[[ÛÛ^
HÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆÙ]ÛÛ\]\•ÛÛXÝ[ÛœÊÛÛØ[
JHÂˆÝÚ]Ú
XÝ[Û‹\JHÂˆØ\ÙH˜ÛXÚÈŽ‚ˆ]ØZ]ÛÛ\]\‹˜ÛXÚÊXÝ[Û‹žXÝ[Û‹žKXÝ[Û‹˜]Û‹[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙH™ÝX›WØÛXÚÈŽ‚ˆ]ØZ]ÛÛ\]\‹™ÝX›PÛXÚÊXÝ[Û‹žXÝ[Û‹žK[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙH™˜YÈŽ‚ˆ]ØZ]ÛÛ\]\‹™˜YÊXÝ[Û‹œ]›X\


HOˆÜžžWJK[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙHšÙ^\™\ÜÈŽ‚ˆ]ØZ]ÛÛ\]\‹šÙ^\™\ÜÊXÝ[Û‹šÙ^\Ë[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙH›[Ý™HŽ‚ˆ]ØZ]ÛÛ\]\‹›[Ý™JXÝ[Û‹žXÝ[Û‹žK[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙHœØÜ™Y[œÚÝŽ‚ˆ]ØZ]ÛÛ\]\‹œØÜ™Y[œÚÝ
[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙHœØÜ›ÛŽ‚ˆ]ØZ]ÛÛ\]\‹œØÜ›Û
XÝ[Û‹žXÝ[Û‹žKXÝ[Û‹œØÜ›ÛÞXÝ[Û‹œØÜ›ÛÞK[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙH\HŽ‚ˆ]ØZ]ÛÛ\]\‹\JXÝ[Û‹^[ÛÛ^
NÂˆœ™XZÎÂˆØ\ÙHØZ]Ž‚ˆ]ØZ]ÛÛ\]\‹ØZ]
[ÛÛ^
NÂˆœ™XZÎÂˆY˜][‚ˆXÝ[ÛŽÂˆœ™XZÎÂˆBˆBˆYˆ
\[ÙˆÛÛ\]\‹œØÜ™Y[œÚÝOOH™[˜Ý[ÛˆŠHÂˆÛÛœÝØÜ™Y[œÚÝH]ØZ]ÛÛ\]\‹œØÜ™Y[œÚÝ
[ÛÛ^
NÂˆYˆ
\[ÙˆØÜ™Y[œÚÝOOH[™Yš[™YŠHÂˆ™]\›ˆØÜ™Y[œÚÝÂˆBˆBˆ›ÝÈ™]È\œ›ÜŠÛÛ\]\ˆÙ\È›Ý[\[Y[ØÜ™Y[œÚÝ

HŠNÂŸB™[˜Ý[ÛˆÑ\œ›Ü“Y\ÜØYÙLÊ\œ›ÜLJHÂˆYˆ
\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›ÜŠHÂˆ™]\›ˆ\œ›ÜLK›Y\ÜØYÙH\œ›ÜLKÔÝš[™Ê
NÂˆBˆžHÂˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJ\œ›ÜLJNÂˆHØ]ÚÂˆ™]\›ˆÝš[™Ê\œ›ÜLJNÂˆBŸB™[˜Ý[ÛˆÙ]˜XÙUÛÛ\œ›ÜŠ˜XÙR[˜ÛYTÙ[œÚ]]™Q]K\œ›Ü“Y\ÜØYÙJHÂˆ™]\›ˆ˜XÙR[˜ÛYTÙ[œÚ]]™Q]HÈ\œ›Ü“Y\ÜØYÙHˆ‘QPÕQÕÓÓÑT”“Ô—ÓQTÔÐQÑNÂŸB˜\Þ[˜È[˜Ý[ÛˆÚ]ÛÛ[˜Ý[Û”Ü[Š[›™\‹ÛÛ˜[YK›ŠHÂˆYˆ
[›™\‹˜ÛÛ™šYË˜XÚ[™Ñ\ØX›YYÙ]Ý\œ™[˜XÙJ
JHÂˆ™]\›ˆ›Š
NÂˆBˆ™]\›ˆÚ][˜Ý[Û”Ü[Š\Þ[˜È
Ü[ŠHOˆ›ŠÜ[ŠKÂˆ]NˆÂˆ˜[YNˆÛÛ˜[YBˆBˆJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™UÛÛ\›Ý˜[
Ü[ÛœÊHÂˆÛÛœÝÈ[ÛÛ^ÛÛ˜[YKØ[Y\›Ý˜[][K™YYÐ\›Ý˜[Û\›Ý˜[HHÜ[ÛœÎÂˆÛÛœÝ^\Ý[™Ð\›Ý˜[H[ÛÛ^š\ÕÛÛ\›Ý™Y
ÂˆÛÛ˜[YKˆØ[YˆJNÂˆYˆ
^\Ý[™Ð\›Ý˜[OOHYJHÂˆ™]\›ˆ˜\›Ý™YŽÂˆBˆYˆ
^\Ý[™Ð\›Ý˜[OOH˜[ÙJHÂˆ™]\›ˆœ™Z™XÝYŽÂˆBˆYˆ
X]ØZ]™YYÐ\›Ý˜[

JHÂˆ™]\›ˆ˜\›Ý™YŽÂˆBˆYˆ
Û\›Ý˜[
HÂˆÛÛœÝXÚ\Ú[ÛˆH]ØZ]Û\›Ý˜[
[ÛÛ^\›Ý˜[][JNÂˆYˆ
XÚ\Ú[Û‹˜\›Ý™HOOHYJHÂˆ[ÛÛ^˜\›Ý™UÛÛ
\›Ý˜[][JNÂˆH[ÙHYˆ
XÚ\Ú[Û‹˜\›Ý™HOOH˜[ÙJHÂˆÛÛœÝ™X\ÛÛˆH\[ÙˆXÚ\Ú[Û‹œ™X\ÛÛˆOOHœÝš[™Èˆ	‰ˆXÚ\Ú[Û‹œ™X\ÛÛ‹›[™ÝˆÈXÚ\Ú[Û‹œ™X\ÛÛˆˆ›ÚYÂˆ[ÛÛ^œ™Z™XÝÛÛ
\›Ý˜[][K™X\ÛÛˆOOH›ÚYÈ›ÚYˆÈY\ÜØYÙNˆ™X\ÛÛˆJNÂˆBˆBˆÛÛœÝ\›Ý˜[H[ÛÛ^š\ÕÛÛ\›Ý™Y
ÂˆÛÛ˜[YKˆØ[YˆJNÂˆYˆ
\›Ý˜[OOHYJHÂˆ™]\›ˆ˜\›Ý™YŽÂˆBˆYˆ
\›Ý˜[OOH˜[ÙJHÂˆ™]\›ˆœ™Z™XÝYŽÂˆBˆ™]\›ˆœ[™[™ÈŽÂŸB˜\Þ[˜È[˜Ý[Ûˆ[™UÛÛ\›Ý˜[XÚ\Ú[ÛŠÜ[ÛœÊHÂˆÛÛœÝÈ[ÛÛ^ÛÛ˜[YKØ[Y\›Ý˜[][K™YYÐ\›Ý˜[Û\›Ý˜[Z[™Z™XÝ[Û’][HHHÜ[ÛœÎÂˆÛÛœÝ\›Ý˜[Ý]HH]ØZ]™\ÛÛ™UÛÛ\›Ý˜[
Âˆ[ÛÛ^ˆÛÛ˜[YKˆØ[Yˆ\›Ý˜[][Kˆ™YYÐ\›Ý˜[ˆÛ\›Ý˜[ˆJNÂˆYˆ
\›Ý˜[Ý]HOOHœ™Z™XÝYŠHÂˆ™]\›ˆÈÝ]\Îˆœ™Z™XÝY‹][Nˆ]ØZ]Z[™Z™XÝ[Û’][J
HNÂˆBˆYˆ
\›Ý˜[Ý]HOOHœ[™[™ÈŠHÂˆ™]\›ˆÈÝ]\Îˆœ[™[™È‹][Nˆ\›Ý˜[][HNÂˆBˆ™]\›ˆÈÝ]\Îˆ˜\›Ý™YˆNÂŸB™[˜Ý[Ûˆ[Z]ÛÛÝ\
[›™\‹[ÛÛ^YÙ[ÛÛ‹ÛÛØ[
HÂˆ[›™\‹™[Z]
˜YÙ[ÝÛÛÜÝ\‹[ÛÛ^YÙ[ÛÛ‹ÈÛÛØ[JNÂˆYˆ
\[ÙˆYÙ[™[Z]OOH™[˜Ý[ÛˆŠHÂˆYÙ[™[Z]
˜YÙ[ÝÛÛÜÝ\‹[ÛÛ^ÛÛ‹ÈÛÛØ[JNÂˆBŸB™[˜Ý[Ûˆ[Z]ÛÛ[™
[›™\‹[ÛÛ^YÙ[ÛÛ‹Ý]]ÛÛØ[
HÂˆ[›™\‹™[Z]
˜YÙ[ÝÛÛÙ[™‹[ÛÛ^YÙ[ÛÛ‹Ý]]ÈÛÛØ[JNÂˆYˆ
\[ÙˆYÙ[™[Z]OOH™[˜Ý[ÛˆŠHÂˆYÙ[™[Z]
˜YÙ[ÝÛÛÙ[™‹[ÛÛ^ÛÛ‹Ý]]ÈÛÛØ[JNÂˆBŸB™[˜Ý[ÛˆÙ]ÛÛØ[Ù^JÛÛØ[
HÂˆYˆ
˜Ø[Yˆ[ˆÛÛØ[	‰ˆ\[ÙˆÛÛØ[˜Ø[YOOHœÝš[™ÈŠHÂˆ™]\›ˆÛÛØ[˜Ø[YÂˆBˆYˆ
šYˆ[ˆÛÛØ[	‰ˆ\[ÙˆÛÛØ[šYOOHœÝš[™ÈŠHÂˆ™]\›ˆÛÛØ[šYÂˆBˆ™]\›ˆ›ÚYÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]TÚ[XÝ[ÛœÊYÙ[XÝ[ÛœË[›™\‹[ÛÛ^Ý\ÝÛSÙÙÙ\ˆH›ÚYÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆÛÛœÝÛÙÙÙ\ˆHÝ\ÝÛSÙÙÙ\ˆÏÈÙÙÙ\—ÙY˜][ÂˆÛÛœÝ™\Ý[ÈH×NÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆXÝ[ÛœÊHÂˆÛÛœÝÚ[ÛÛˆHXÝ[Û‹œÚ[ÂˆÛÛœÝÛÛØ[HXÝ[Û‹ÛÛØ[ÂˆÛÛœÝÛÛØ[Ù^HHÙ]ÛÛØ[Ù^JÛÛØ[
HÏÈÛÛØ[˜Ø[YÂˆYˆ
\Ú[ÛÛ‹œÚ[
HÂˆÛÙÙÙ\‹Ø\›ŠÚÚ\[™ÈÚ[XÝ[Ûˆ›ÜˆÛÛ‰ÜÚ[ÛÛ‹›˜[Y_Hˆ™XØ]\ÙH›ÈØØ[Ú[[\[Y[][Ûˆ\ÈÛÛ™šYÝ\™Y˜
NÂˆÛÛ[YNÂˆBˆÛÛœÝ\›Ý˜[][HH™]È[•ÛÛ\›Ý˜[][JÛÛØ[YÙ[Ú[ÛÛ‹›˜[YJNÂˆÛÛœÝ\›Ý˜[XÚ\Ú[ÛˆH]ØZ][™UÛÛ\›Ý˜[XÚ\Ú[ÛŠÂˆ[ÛÛ^ˆÛÛ˜[YNˆÚ[ÛÛ‹›˜[YKˆØ[YˆÛÛØ[Ù^Kˆ\›Ý˜[][Kˆ™YYÐ\›Ý˜[ˆ

HOˆÚ[ÛÛ‹›™YYÐ\›Ý˜[
[ÛÛ^ÛÛØ[˜XÝ[Û‹ÛÛØ[Ù^JKˆÛ\›Ý˜[ˆÚ[ÛÛ‹›Û\›Ý˜[ˆZ[™Z™XÝ[Û’][Nˆ\Þ[˜È

HOˆÂˆÛÛœÝ™\ÜÛœÙHH]ØZ]™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙJÂˆ[ÛÛ^ˆÛÛ\NˆœÚ[‹ˆÛÛ˜[YNˆÚ[ÛÛ‹›˜[YKˆØ[YˆÛÛØ[Ù^KˆÛÛ\œ›Ü‘›Ü›X]\‚ˆJNÂˆÛÛœÝ™Z™XÝ[Û“Ý]]HÂˆÝÝ]ˆˆ‹ˆÝ\œŽˆ™\ÜÛœÙKˆÝ]ÛÛYNˆÈ\Nˆ™^]‹^]ÛÙNˆ[BˆNÂˆ™]\›ˆ™]È[•ÛÛØ[Ý]]][JÂˆ\NˆœÚ[ØØ[ÛÝ]]‹ˆØ[YˆÛÛØ[Ù^KˆÝ]]ˆÜ™Z™XÝ[Û“Ý]]BˆKYÙ[™\ÜÛœÙJNÂˆBˆJNÂˆYˆ
\›Ý˜[XÚ\Ú[Û‹œÝ]\ÈOOH˜\›Ý™YŠHÂˆ™\Ý[Ëœ\Ú
\›Ý˜[XÚ\Ú[Û‹š][JNÂˆÛÛ[YNÂˆBˆÛÛœÝÚ[][HH]ØZ]Ú]ÛÛ[˜Ý[Û”Ü[Š[›™\‹Ú[ÛÛ‹›˜[YK\Þ[˜È
Ü[ŠHOˆÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]Kš[œ]H”ÓÓ‹œÝš[™ÚYžJÛÛØ[˜XÝ[ÛŠNÂˆBˆ[Z]ÛÛÝ\
[›™\‹[ÛÛ^YÙ[Ú[ÛÛ‹ÛÛØ[
NÂˆ]Ú[Ý]]ÎÂˆÛÛœÝ›ÝšY\“Y]HHßNÂˆ]X^Ý]][™ÝÂˆžHÂˆÛÛœÝÚ[™\Ý[H]ØZ]Ú[ÛÛ‹œÚ[œ[ŠÛÛØ[˜XÝ[ÛŠNÂˆÚ[Ý]]ÈHÚ[™\Ý[›Ý]]ÏÈ×NÂˆYˆ
Ú[™\Ý[œ›ÝšY\‘]JHÂˆØš™XÝ˜\ÜÚYÛŠ›ÝšY\“Y]KÚ[™\Ý[œ›ÝšY\‘]JNÂˆBˆYˆ
\[ÙˆÚ[™\Ý[›X^Ý]][™ÝOOH›[X™\ˆŠHÂˆX^Ý]][™ÝHÚ[™\Ý[›X^Ý]][™ÝÂˆBˆHØ]Ú
\œŠHÂˆÛÛœÝ\œ›Ü•^HÑ\œ›Ü“Y\ÜØYÙLÊ\œŠNÂˆÛÛœÝ˜XÙQ\œ›ÜˆHÙ]˜XÙUÛÛ\œ›ÜŠ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]K\œ›Ü•^
NÂˆÚ[Ý]]ÈHÂˆÂˆÝÝ]ˆˆ‹ˆÝ\œŽˆ\œ›Ü•^ˆÝ]ÛÛYNˆÈ\Nˆ™^]‹^]ÛÙNˆ[BˆBˆNÂˆÜ[ËœÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ‘\œ›Üˆ[›š[™ÈÛÛ‹ˆ]NˆÂˆÛÛÛ˜[YNˆÚ[ÛÛ‹›˜[YKˆ\œ›ÜŽˆ˜XÙQ\œ›Ü‚ˆBˆJNÂˆÛÙÙÙ\‹™\œ›ÜŠ‘˜Z[YÈ^XÝ]HÚ[XÝ[ÛŽˆ‹\œŠNÂˆBˆÚ[Ý]]ÈHÚ[Ý]]ÈÏÈ×NÂˆÛÛœÝÝ]]H”ÓÓ‹œÝš[™ÚYžJÚ[Ý]]ÊNÂˆ[Z]ÛÛ[™
[›™\‹[ÛÛ^YÙ[Ú[ÛÛ‹Ý]]ÛÛØ[
NÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]K›Ý]]HÝ]]ÂˆBˆÛÛœÝ˜]Ò][HHÂˆ\NˆœÚ[ØØ[ÛÝ]]‹ˆØ[YˆÛÛØ[Ù^KˆÝ]]ˆÚ[Ý]]ÈÏÈ×BˆNÂˆYˆ
\[ÙˆX^Ý]][™ÝOOH›[X™\ˆŠHÂˆ˜]Ò][K›X^Ý]][™ÝHX^Ý]][™ÝÂˆBˆYˆ
Øš™XÝšÙ^\Ê›ÝšY\“Y]JK›[™Ýˆ
HÂˆ˜]Ò][Kœ›ÝšY\‘]HH›ÝšY\“Y]NÂˆBˆ™]\›ˆ™]È[•ÛÛØ[Ý]]][J˜]Ò][KYÙ[˜]Ò][K›Ý]]
NÂˆJNÂˆ™\Ý[Ëœ\Ú
Ú[][JNÂˆBˆ™]\›ˆ™\Ý[ÎÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]P\T]ÚÜ\˜][ÛœÊYÙ[XÝ[ÛœË[›™\‹[ÛÛ^Ý\ÝÛSÙÙÙ\ˆH›ÚYÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆÛÛœÝÛÙÙÙ\ˆHÝ\ÝÛSÙÙÙ\ˆÏÈÙÙÙ\—ÙY˜][ÂˆÛÛœÝ™\Ý[ÈH×NÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆXÝ[ÛœÊHÂˆÛÛœÝ\T]ÚÛÛˆHXÝ[Û‹˜\T]ÚÂˆÛÛœÝÛÛØ[HXÝ[Û‹ÛÛØ[ÂˆÛÛœÝÛÛØ[Ù^HHÙ]ÛÛØ[Ù^JÛÛØ[
HÏÈÛÛØ[˜Ø[YÂˆÛÛœÝY]ÜÛÛ^HÈ[ÛÛ^NÂˆÛÛœÝ\›Ý˜[][HH™]È[•ÛÛ\›Ý˜[][JÛÛØ[YÙ[\T]ÚÛÛ‹›˜[YJNÂˆÛÛœÝ\›Ý˜[XÚ\Ú[ÛˆH]ØZ][™UÛÛ\›Ý˜[XÚ\Ú[ÛŠÂˆ[ÛÛ^ˆÛÛ˜[YNˆ\T]ÚÛÛ‹›˜[YKˆØ[YˆÛÛØ[Ù^Kˆ\›Ý˜[][Kˆ™YYÐ\›Ý˜[ˆ

HOˆ\T]ÚÛÛ‹›™YYÐ\›Ý˜[
[ÛÛ^ÛÛØ[›Ü\˜][Û‹ÛÛØ[Ù^JKˆÛ\›Ý˜[ˆ\T]ÚÛÛ‹›Û\›Ý˜[ˆZ[™Z™XÝ[Û’][Nˆ\Þ[˜È

HOˆÂˆÛÛœÝ™\ÜÛœÙHH]ØZ]™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙJÂˆ[ÛÛ^ˆÛÛ\Nˆ˜\WÜ]Ú‹ˆÛÛ˜[YNˆ\T]ÚÛÛ‹›˜[YKˆØ[YˆÛÛØ[Ù^KˆÛÛ\œ›Ü‘›Ü›X]\‚ˆJNÂˆ™]\›ˆ™]È[•ÛÛØ[Ý]]][JÂˆ\Nˆ˜\WÜ]ÚØØ[ÛÝ]]‹ˆØ[YˆÛÛØ[Ù^KˆÝ]\Îˆ™˜Z[Y‹ˆÝ]]ˆ™\ÜÛœÙBˆKYÙ[™\ÜÛœÙJNÂˆBˆJNÂˆYˆ
\›Ý˜[XÚ\Ú[Û‹œÝ]\ÈOOH˜\›Ý™YŠHÂˆ™\Ý[Ëœ\Ú
\›Ý˜[XÚ\Ú[Û‹š][JNÂˆÛÛ[YNÂˆBˆÛÛœÝ\T]Ú][HH]ØZ]Ú]ÛÛ[˜Ý[Û”Ü[Š[›™\‹\T]ÚÛÛ‹›˜[YK\Þ[˜È
Ü[ŠHOˆÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]Kš[œ]H”ÓÓ‹œÝš[™ÚYžJÛÛØ[›Ü\˜][ÛŠNÂˆBˆ[Z]ÛÛÝ\
[›™\‹[ÛÛ^YÙ[\T]ÚÛÛ‹ÛÛØ[
NÂˆ]Ý]\ÈH˜ÛÛ\]YŽÂˆ]Ý]]HˆŽÂˆžHÂˆ]™\Ý[ÂˆÝÚ]Ú
ÛÛØ[›Ü\˜][Û‹\JHÂˆØ\ÙH˜Ü™X]WÙš[HŽ‚ˆ™\Ý[H]ØZ]\T]ÚÛÛ‹™Y]Ü‹˜Ü™X]Qš[JÛÛØ[›Ü\˜][Û‹Y]ÜÛÛ^
NÂˆœ™XZÎÂˆØ\ÙH\]WÙš[HŽ‚ˆ™\Ý[H]ØZ]\T]ÚÛÛ‹™Y]Ü‹\]Qš[JÛÛØ[›Ü\˜][Û‹Y]ÜÛÛ^
NÂˆœ™XZÎÂˆØ\ÙH™[]WÙš[HŽ‚ˆ™\Ý[H]ØZ]\T]ÚÛÛ‹™Y]Ü‹™[]Qš[JÛÛØ[›Ü\˜][Û‹Y]ÜÛÛ^
NÂˆœ™XZÎÂˆY˜][‚ˆ›ÝÈ™]È\œ›ÜŠ•[œÝ\ÜY\WÜ]ÚÜ\˜][ÛˆŠNÂˆBˆYˆ
™\Ý[	‰ˆ\[Ùˆ™\Ý[œÝ]\ÈOOHœÝš[™ÈŠHÂˆÝ]\ÈH™\Ý[œÝ]\ÎÂˆBˆYˆ
™\Ý[	‰ˆ\[Ùˆ™\Ý[›Ý]]OOHœÝš[™ÈŠHÂˆÝ]]H™\Ý[›Ý]]ÂˆBˆHØ]Ú
\œŠHÂˆÝ]\ÈH™˜Z[YŽÂˆÝ]]HÑ\œ›Ü“Y\ÜØYÙLÊ\œŠNÂˆÛÛœÝ˜XÙQ\œ›ÜˆHÙ]˜XÙUÛÛ\œ›ÜŠ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]KÝ]]
NÂˆÜ[ËœÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ‘\œ›Üˆ[›š[™ÈÛÛ‹ˆ]NˆÂˆÛÛÛ˜[YNˆ\T]ÚÛÛ‹›˜[YKˆ\œ›ÜŽˆ˜XÙQ\œ›Ü‚ˆBˆJNÂˆÛÙÙÙ\‹™\œ›ÜŠ‘˜Z[YÈ^XÝ]H\WÜ]ÚÜ\˜][ÛŽˆ‹\œŠNÂˆBˆÛÛœÝ˜]Ò][HHÂˆ\Nˆ˜\WÜ]ÚØØ[ÛÝ]]‹ˆØ[YˆÛÛØ[Ù^KˆÝ]\ÂˆNÂˆYˆ
Ý]]
HÂˆ˜]Ò][K›Ý]]HÝ]]ÂˆBˆÛÛœÝÝ\ÝÛQ]HH]ØZ]X^X™Q^˜XÝÛÛÝ]]Ý\ÝÛQ]J\T]ÚÛÛ‹˜Ý\ÝÛQ]Q^˜XÝÜ‹Âˆ[ÛÛ^ˆÛÛˆ\T]ÚÛÛ‹ˆÜ\˜][ÛŽˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
ÛÛØ[›Ü\˜][ÛŠKˆÝ]]ˆÝ]\Ëˆ˜]Ò][NˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
˜]Ò][JBˆJNÂˆ[Z]ÛÛ[™
[›™\‹[ÛÛ^YÙ[\T]ÚÛÛ‹Ý]]ÛÛØ[
NÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]K›Ý]]HÝ]]ÂˆBˆ™]\›ˆ™]È[•ÛÛØ[Ý]]][J˜]Ò][KYÙ[Ý]]Ý\ÝÛQ]JNÂˆJNÂˆ™\Ý[Ëœ\Ú
\T]Ú][JNÂˆBˆ™]\›ˆ™\Ý[ÎÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]PÛÛ\]\XÝ[ÛœÊYÙ[XÝ[ÛœË[›™\‹[ÛÛ^Ý\ÝÛSÙÙÙ\ˆH›ÚYÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆÛÛœÝÛÙÙÙ\ˆHÝ\ÝÛSÙÙÙ\ˆÏÈÙÙÙ\—ÙY˜][ÂˆÛÛœÝ™\Ý[ÈH×NÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆXÝ[ÛœÊHÂˆÛÛœÝÛÛØ[HXÝ[Û‹ÛÛØ[ÂˆÛÛœÝÛÛ\]\•ÛÛˆHXÝ[Û‹˜ÛÛ\]\ŽÂˆÛÛœÝÛÛ\]\XÝ[ÛœÌˆHÙ]ÛÛ\]\•ÛÛXÝ[ÛœÊÛÛØ[
NÂˆ]ØXÚY™Z™XÝ[Û“Y\ÜØYÙNÂˆÛÛœÝÙ]™Z™XÝ[Û“Y\ÜØYÙHH\Þ[˜È

HOˆÂˆYˆ
\[ÙˆØXÚY™Z™XÝ[Û“Y\ÜØYÙHOOHœÝš[™ÈŠHÂˆ™]\›ˆØXÚY™Z™XÝ[Û“Y\ÜØYÙNÂˆBˆØXÚY™Z™XÝ[Û“Y\ÜØYÙHH]ØZ]™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙJÂˆ[ÛÛ^ˆÛÛ\Nˆ˜ÛÛ\]\ˆ‹ˆÛÛ˜[YNˆÛÛ\]\•ÛÛ‹›˜[YKˆØ[YˆÛÛØ[˜Ø[YˆÛÛ\œ›Ü‘›Ü›X]\‚ˆJNÂˆ™]\›ˆØXÚY™Z™XÝ[Û“Y\ÜØYÙNÂˆNÂˆÛÛœÝ[™[™ÔØY™]PÚXÚÜÈHÙ][™[™ÔØY™]PÚXÚÜÊÛÛØ[
NÂˆÛÛœÝ\›Ý˜[][HH™]È[•ÛÛ\›Ý˜[][JÛÛØ[YÙ[ÛÛ\]\•ÛÛ‹›˜[YJNÂˆÛÛœÝ™YYÐ\›Ý˜[Ø[™Y]HHÛÛ\]\•ÛÛ‹›™YYÐ\›Ý˜[ÂˆÛÛœÝ\›Ý˜[XÚ\Ú[ÛˆH]ØZ][™UÛÛ\›Ý˜[XÚ\Ú[ÛŠÂˆ[ÛÛ^ˆÛÛ˜[YNˆÛÛ\]\•ÛÛ‹›˜[YKˆØ[YˆÛÛØ[˜Ø[Yˆ\›Ý˜[][Kˆ™YYÐ\›Ý˜[ˆ\Þ[˜È

HOˆ\[Ùˆ™YYÐ\›Ý˜[Ø[™Y]HOOH™[˜Ý[ÛˆˆÈ
]ØZ]›ÛZ\ÙK˜[
ÛÛ\]\XÝ[ÛœÌ‹›X\

ÛÛ\]\XÝ[ÛŠHOˆ™YYÐ\›Ý˜[Ø[™Y]J[ÛÛ^ÛÛ\]\XÝ[Û‹ÛÛØ[˜Ø[Y
JJJKœÛÛYJ›ÛÛX[ŠHˆ\[Ùˆ™YYÐ\›Ý˜[Ø[™Y]HOOH˜›ÛÛX[ˆˆÈ™YYÐ\›Ý˜[Ø[™Y]Hˆ˜[ÙKˆZ[™Z™XÝ[Û’][Nˆ\Þ[˜È

HOˆÂˆÛÛœÝ™Z™XÝ[Û“Y\ÜØYÙHH]ØZ]Ù]™Z™XÝ[Û“Y\ÜØYÙJ
NÂˆÛÛœÝ™Z™XÝ[Û“Ý]]HÂˆ\Nˆ˜ÛÛ\]\—ÜØÜ™Y[œÚÝ‹ˆ]NˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÔÐÔ‘QS”ÒÕÑUWÕT“ˆ›ÝšY\‘]NˆÂˆ\›Ý˜[Ý]\Îˆœ™Z™XÝY‹ˆY\ÜØYÙNˆ™Z™XÝ[Û“Y\ÜØYÙBˆBˆNÂˆÛÛœÝ˜]Ò][HHÂˆ\Nˆ˜ÛÛ\]\—ØØ[Ü™\Ý[‹ˆØ[YˆÛÛØ[˜Ø[YˆÝ]]ˆ™Z™XÝ[Û“Ý]]ˆNÂˆ™]\›ˆ™]È[•ÛÛØ[Ý]]][J˜]Ò][KYÙ[ÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÔÐÔ‘QS”ÒÕÑUWÕT“
NÂˆBˆJNÂˆYˆ
\›Ý˜[XÚ\Ú[Û‹œÝ]\ÈOOHœ™Z™XÝYŠHÂˆÛÛœÝ™Z™XÝ[Û“Y\ÜØYÙHH]ØZ]Ù]™Z™XÝ[Û“Y\ÜØYÙJ
NÂˆ™\Ý[Ëœ\Ú
\›Ý˜[XÚ\Ú[Û‹š][JNÂˆ™\Ý[Ëœ\Ú
™]È[“Y\ÜØYÙSÝ]]][J\ÜÚ\Ý[
™Z™XÝ[Û“Y\ÜØYÙJKYÙ[
JNÂˆÛÛ[YNÂˆBˆYˆ
\›Ý˜[XÚ\Ú[Û‹œÝ]\ÈOOHœ[™[™ÈŠHÂˆ™\Ý[Ëœ\Ú
\›Ý˜[XÚ\Ú[Û‹š][JNÂˆÛÛ[YNÂˆBˆÛÛœÝÛÛ\]\’][HH]ØZ]Ú]ÛÛ[˜Ý[Û”Ü[Š[›™\‹ÓÓTUT—ÕPÑWÓSQK\Þ[˜È
Ü[ŠHOˆÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÛÛœÝ˜XÙR[œ]HÙ]ÛÛ\]\•˜XÙR[œ]^[ØY
ÛÛØ[
NÂˆÜ[‹œÜ[‘]Kš[œ]H\[Ùˆ˜XÙR[œ]OOH[™Yš[™YˆÈˆˆˆ”ÓÓ‹œÝš[™ÚYžJ˜XÙR[œ]
NÂˆBˆ[Z]ÛÛÝ\
[›™\‹[ÛÛ^YÙ[ÛÛ\]\•ÛÛ‹ÛÛØ[
NÂˆÛÛœÝXÚÛ›ÝÛYÙYØY™]PÚXÚÜÈH[™[™ÔØY™]PÚXÚÜÈ	‰ˆ[™[™ÔØY™]PÚXÚÜË›[™ÝˆÈ]ØZ]™\ÛÛ™TØY™]PÚXÚÐXÚÛ›ÝÛYÙ[Y[ÊÂˆ[ÛÛ^ˆÛÛØ[ˆ[™[™ÔØY™]PÚXÚÜËˆÛ”ØY™]PÚXÚÎˆÛÛ\]\•ÛÛ‹›Û”ØY™]PÚXÚÂˆJHˆ›ÚYÂˆ]Ý]]ÂˆžHÂˆÛÛœÝÛÛ\]\ˆH]ØZ]™\ÛÛ™PÛÛ\]\ŠÂˆÛÛˆÛÛ\]\•ÛÛ‹ˆ[ÛÛ^ˆJNÂˆÝ]]H]ØZ]Ü[ÛÛ\]\XÝ[Û[™ØÜ™Y[œÚÝ
ÛÛ\]\‹ÛÛØ[[ÛÛ^
NÂˆHØ]Ú
\œŠHÂˆÛÙÙÙ\‹™\œ›ÜŠ‘˜Z[YÈ^XÝ]HÛÛ\]\ˆXÝ[ÛŽˆ‹\œŠNÂˆÝ]]HˆŽÂˆÛÛœÝ\œ›Ü•^HÑ\œ›Ü“Y\ÜØYÙLÊ\œŠNÂˆÛÛœÝ˜XÙQ\œ›ÜˆHÙ]˜XÙUÛÛ\œ›ÜŠ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]K\œ›Ü•^
NÂˆÜ[ËœÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ‘\œ›Üˆ[›š[™ÈÛÛ‹ˆ]NˆÂˆÛÛÛ˜[YNˆÓÓTUT—ÕPÑWÓSQKˆ\œ›ÜŽˆ˜XÙQ\œ›Ü‚ˆBˆJNÂˆBˆÛÛœÝ[XYÙU\›HÝ]]È]Nš[XYÙKÜ™ÎØ˜\ÙM	ÛÝ]]XˆˆŽÂˆÛÛœÝ˜]Ò][HHÂˆ\Nˆ˜ÛÛ\]\—ØØ[Ü™\Ý[‹ˆØ[YˆÛÛØ[˜Ø[YˆÝ]]ˆÈ\Nˆ˜ÛÛ\]\—ÜØÜ™Y[œÚÝ‹]Nˆ[XYÙU\›BˆNÂˆYˆ
XÚÛ›ÝÛYÙYØY™]PÚXÚÜÈ	‰ˆXÚÛ›ÝÛYÙYØY™]PÚXÚÜË›[™Ýˆ
HÂˆ˜]Ò][Kœ›ÝšY\‘]HHÂˆXÚÛ›ÝÛYÙYØY™]PÚXÚÜÂˆNÂˆBˆÛÛœÝÝ\ÝÛQ]HH]ØZ]X^X™Q^˜XÝÛÛÝ]]Ý\ÝÛQ]JÛÛ\]\•ÛÛ‹˜Ý\ÝÛQ]Q^˜XÝÜ‹Âˆ[ÛÛ^ˆÛÛˆÛÛ\]\•ÛÛ‹ˆÛÛØ[ˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
ÛÛØ[
KˆÝ]]ˆ[XYÙU\›ˆ˜]Ò][NˆÛÛ™Q›ÜÝ\ÝÛQ]PÛÛ^
˜]Ò][JBˆJNÂˆ[Z]ÛÛ[™
[›™\‹[ÛÛ^YÙ[ÛÛ\]\•ÛÛ‹Ý]]ÛÛØ[
NÂˆYˆ
Ü[ˆ	‰ˆ[›™\‹˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆÜ[‹œÜ[‘]K›Ý]]H[XYÙU\›ÂˆBˆ™]\›ˆ™]È[•ÛÛØ[Ý]]][J˜]Ò][KYÙ[[XYÙU\›Ý\ÝÛQ]JNÂˆJNÂˆ™\Ý[Ëœ\Ú
ÛÛ\]\’][JNÂˆBˆ™]\›ˆ™\Ý[ÎÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]R[™Ù™Ø[ÊYÙ[ÜšYÚ[˜[[œ]™TÝ\][\Ë™]ÔÝ\][\Ë™]Ô™\ÜÛœÙK[’[™Ù™œË[›™\‹[ÛÛ^
HÂˆ™]ÔÝ\][\ÈHË‹‹›™]ÔÝ\][\×NÂˆYˆ
[’[™Ù™œË›[™ÝOOH
HÂˆÙÙÙ\—ÙY˜][Ø\›Š’[˜ÛÜœ™XÝHØ[Y^XÝ]R[™Ù™Ø[ÈÚ]›È[™Ù™œËˆ\ÈÚÝ[›Ý\[‹ˆ[Ýš[™ÈÛ‹ˆŠNÂˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]ÔÝ\][\ËÈ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆˆJNÂˆBˆYˆ
[’[™Ù™œË›[™ÝˆJHÂˆÛÛœÝYÛ›Ü™YØ[YÈH™]ÈÙ]
[’[™Ù™œËœÛXÙJJK›X\

[™Ù™ŒŠHOˆ[™Ù™Œ‹ÛÛØ[˜Ø[Y
JNÂˆ™]ÔÝ\][\ÈH™]ÔÝ\][\Ë™š[\Š
][JHOˆJ][H[œÝ[˜Ù[Ùˆ[’[™Ù™Ø[][H	‰ˆYÛ›Ü™YØ[YËš\Ê][Kœ˜]Ò][K˜Ø[Y
JJNÂˆBˆÛÛœÝXÝX[[™Ù™ˆH[’[™Ù™œÖÌNÂˆ™]\›ˆÚ][™Ù™”Ü[Š\Þ[˜È
[™Ù™”Ü[ŠHOˆÂˆÛÛœÝ[™Ù™ŒˆHXÝX[[™Ù™‹š[™Ù™ŽÂˆÛÛœÝ[œ]š[\ˆH[™Ù™Œ‹š[œ]š[\ˆÏÈ[›™\‹˜ÛÛ™šYËš[™Ù™’[œ]š[\ŽÂˆYˆ
[œ]š[\ˆOH[	‰ˆ\[Ùˆ[œ]š[\ˆOOH™[˜Ý[ÛˆŠHÂˆ›ÝÈØš™XÝ˜\ÜÚYÛŠ™]È\Ù\‘\œ›ÜŠ’[˜[Y[™Ù™ˆ[œ]š[\Žˆ›ÝØ[X›HŠKÂˆ]NˆÂˆ]Z[Îˆ››ÝØ[X›H‚ˆBˆJNÂˆBˆÛÛœÝ™]ÐYÙ[H]ØZ][™Ù™Œ‹›Û’[›ÚÙR[™Ù™Š[ÛÛ^XÝX[[™Ù™‹ÛÛØ[˜\™Ý[Y[ÊNÂˆ[™Ù™”Ü[‹œÜ[‘]K×ØYÙ[H™]ÐYÙ[›˜[YNÂˆYˆ
[’[™Ù™œË›[™ÝˆJHÂˆÛÛœÝ™\]Y\ÝYYÙ[ÈH[’[™Ù™œË›X\


HOˆš[™Ù™‹˜YÙ[˜[YJNÂˆ[™Ù™”Ü[‹œÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ“][\H[™Ù™œÈ™\]Y\ÝY‹ˆ]NˆÂˆ™\]Y\ÝYØYÙ[Îˆ™\]Y\ÝYYÙ[ÂˆBˆJNÂˆBˆ™]ÔÝ\][\Ëœ\Ú
™]È[’[™Ù™“Ý]]][JÙ]ÛÛØ[Ý]]][JXÝX[[™Ù™‹ÛÛØ[Ù]˜[œÙ™\“Y\ÜØYÙJ™]ÐYÙ[
JKYÙ[™]ÐYÙ[
JNÂˆ[›™\‹™[Z]
˜YÙ[Ú[™Ù™ˆ‹[ÛÛ^YÙ[™]ÐYÙ[
NÂˆYÙ[™[Z]
˜YÙ[Ú[™Ù™ˆ‹[ÛÛ^™]ÐYÙ[
NÂˆYˆ
[œ]š[\ˆOH[
HÂˆÙÙÙ\—ÙY˜][™XYÊ‘š[\š[™È[œ]È›Üˆ[™Ù™ˆŠNÂˆÛÛœÝ[™Ù™’[œ]]HHÂˆ[œ]\ÝÜžNˆ\œ˜^Kš\Ð\œ˜^JÜšYÚ[˜[[œ]
HÈË‹‹›ÜšYÚ[˜[[œ]HˆÜšYÚ[˜[[œ]ˆ™R[™Ù™’][\ÎˆË‹‹œ™TÝ\][\×Kˆ™]Ò][\ÎˆË‹‹›™]ÔÝ\][\×Kˆ[ÛÛ^ˆNÂˆÛÛœÝš[\™YH[œ]š[\Š[™Ù™’[œ]]JNÂˆÜšYÚ[˜[[œ]Hš[\™Yš[œ]\ÝÜžNÂˆ™TÝ\][\ÈHš[\™Yœ™R[™Ù™’][\ÎÂˆ™]ÔÝ\][\ÈHš[\™Y›™]Ò][\ÎÂˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]ÔÝ\][\ËÈ\Nˆ›™^ÜÝ\Ú[™Ù™ˆ‹™]ÐYÙ[JNÂˆKÂˆ]NˆÂˆœ›ÛWØYÙ[ˆYÙ[›˜[YBˆBˆJNÂŸB™[˜Ý[ÛˆÛÛXÝ[\œ\[ÛœÊÛÛ™\Ý[ËY][Û˜[][\ÈH×JHÂˆÛÛœÝ[\œ\[ÛœÈH×NÂˆ›Üˆ
ÛÛœÝ][HÙˆY][Û˜[][\ÊHÂˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHÂˆ[\œ\[ÛœËœ\Ú
][JNÂˆBˆBˆ›Üˆ
ÛÛœÝ™\Ý[ÙˆÛÛ™\Ý[ÊHÂˆYˆ
™\Ý[œ[’][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHÂˆ[\œ\[ÛœËœ\Ú
™\Ý[œ[’][JNÂˆBˆYˆ
™\Ý[\HOOH™[˜Ý[Û—ÛÝ]]ŠHÂˆYˆ
\œ˜^Kš\Ð\œ˜^J™\Ý[š[\œ\[ÛœÊJHÂˆ[\œ\[ÛœËœ\Ú
‹‹œ™\Ý[š[\œ\[ÛœÊNÂˆH[ÙHYˆ
™\Ý[˜YÙ[[”™\Ý[
HÂˆÛÛœÝ™\ÝY[\œ\[ÛœÈH™\Ý[˜YÙ[[”™\Ý[š[\œ\[ÛœÎÂˆYˆ
™\ÝY[\œ\[ÛœË›[™Ýˆ
HÂˆ[\œ\[ÛœËœ\Ú
‹‹›™\ÝY[\œ\[ÛœÊNÂˆBˆBˆBˆBˆ™]\›ˆ[\œ\[ÛœÎÂŸB˜\Þ[˜È[˜Ý[ÛˆÚXÚÑ›Ü‘š[˜[Ý]]œ›ÛUÛÛÊYÙ[ÛÛ™\Ý[ËÝ]KY][Û˜[[\œ\[ÛœÈH×JHÂˆYˆ
ÛÛ™\Ý[Ë›[™ÝOOH	‰ˆY][Û˜[[\œ\[ÛœË›[™ÝOOH
HÂˆ™]\›ˆ“ÕÑ’SSÓÕUUÂˆBˆÛÛœÝ[\œ\[ÛœÈHÛÛXÝ[\œ\[ÛœÊÛÛ™\Ý[ËY][Û˜[[\œ\[ÛœÊNÂˆYˆ
[\œ\[ÛœË›[™Ýˆ
HÂˆ™]\›ˆÂˆ\Ñš[˜[Ý]]ˆ˜[ÙKˆ\Ò[\œ\YˆYKˆ[\œ\[ÛœÂˆNÂˆBˆYˆ
YÙ[ÛÛ\ÙP™Z]š[ÜˆOOHœ[—ÛWØYØZ[ˆŠHÂˆ™]\›ˆ“ÕÑ’SSÓÕUUÂˆBˆÛÛœÝš\œÝÛÛ™\Ý[HÛÛ™\Ý[ÖÌNÂˆYˆ
YÙ[ÛÛ\ÙP™Z]š[ÜˆOOHœÝÜÛÛ—Ùš\œÝÝÛÛŠHÂˆYˆ
š\œÝÛÛ™\Ý[Ë\HOOH™[˜Ý[Û—ÛÝ]]ŠHÂˆÛÛœÝÝš[™ÓÝ]]HÔÛX\Ýš[™Êš\œÝÛÛ™\Ý[›Ý]]
NÂˆ™]\›ˆÂˆ\Ñš[˜[Ý]]ˆYKˆ\Ò[\œ\Yˆ›ÚYˆš[˜[Ý]]ˆÝš[™ÓÝ]]ˆNÂˆBˆ™]\›ˆ“ÕÑ’SSÓÕUUÂˆBˆÛÛœÝÛÛ\ÙP™Z]š[ÜˆHYÙ[ÛÛ\ÙP™Z]š[ÜŽÂˆYˆ
\[ÙˆÛÛ\ÙP™Z]š[ÜˆOOH›Øš™XÝŠHÂˆÛÛœÝÝÜ[™ÕÛÛHÛÛ™\Ý[Ë™š[™

ŠHOˆÂˆ™]\›ˆÛÛ\ÙP™Z]š[Ü‹œÝÜ]ÛÛ˜[Y\ËœÛÛYJ
ÛÛ˜[YJHOˆX]Ú\Ñ[˜Ý[Û•ÛÛ˜[YJ‹ÛÛÛÛ˜[YJJNÂˆJNÂˆYˆ
ÝÜ[™ÕÛÛË\HOOH™[˜Ý[Û—ÛÝ]]ŠHÂˆÛÛœÝÝš[™ÓÝ]]HÔÛX\Ýš[™ÊÝÜ[™ÕÛÛ›Ý]]
NÂˆ™]\›ˆÂˆ\Ñš[˜[Ý]]ˆYKˆ\Ò[\œ\Yˆ›ÚYˆš[˜[Ý]]ˆÝš[™ÓÝ]]ˆNÂˆBˆ™]\›ˆ“ÕÑ’SSÓÕUUÂˆBˆYˆ
\[ÙˆÛÛ\ÙP™Z]š[ÜˆOOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆÛÛ\ÙP™Z]š[ÜŠÝ]K—ØÛÛ^ÛÛ™\Ý[ÊNÂˆBˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ[˜[YÛÛ\ÙP™Z]š[ÜŽˆ	ÝÛÛ\ÙP™Z]š[ÜŸXÝ]JNÂŸB™[˜Ý[Ûˆ›Ü›X[^™TØY™]PÚXÚÜÊÚXÚÜÊHÂˆYˆ
P\œ˜^Kš\Ð\œ˜^JÚXÚÜÊJHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ›Ü›X[^™YH×NÂˆ›Üˆ
ÛÛœÝ[žHÙˆÚXÚÜÊHÂˆYˆ
Z\Ô™XÛÜ™Ê[žJJHÂˆÛÛ[YNÂˆBˆÛÛœÝYH[žKšYÂˆÛÛœÝÛÙHH[žK˜ÛÙNÂˆYˆ
Z\Ó›Û‘[\TÝš[™Í
Y
HZ\Ó›Û‘[\TÝš[™Í
ÛÙJJHÂˆÛÛ[YNÂˆBˆÛÛœÝY\ÜØYÙHH›Y\ÜØYÙHˆ[ˆ[žH	‰ˆ\Ó›Û‘[\TÝš[™Í
[žK›Y\ÜØYÙJHÈ[žK›Y\ÜØYÙHˆ›ÚYÂˆÛÛœÝ›Ü›X[^™Y[žHHÈ‹‹™[žKYÛÙHNÂˆYˆ
Y\ÜØYÙJHÂˆ›Ü›X[^™Y[žK›Y\ÜØYÙHHY\ÜØYÙNÂˆBˆ›Ü›X[^™Yœ\Ú
›Ü›X[^™Y[žJNÂˆBˆ™]\›ˆ›Ü›X[^™Y›[™ÝˆÈ›Ü›X[^™Yˆ›ÚYÂŸB™[˜Ý[Ûˆ›Ü›X[^™TØY™]PÚXÚÔ™\Ý[
™\Ý[
HÂˆYˆ
\™\Ý[
HÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
Z\Ô™XÛÜ™Ê™\Ý[
JHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
˜XÚÛ›ÝÛYÙYØY™]PÚXÚÜÈˆ[ˆ™\Ý[
HÂˆ™]\›ˆ›Ü›X[^™TØY™]PÚXÚÜÊ™\Ý[˜XÚÛ›ÝÛYÙYØY™]PÚXÚÜÊNÂˆBˆYˆ
˜XÚÛ›ÝÛYÙYÜØY™]WØÚXÚÜÈˆ[ˆ™\Ý[
HÂˆ™]\›ˆ›Ü›X[^™TØY™]PÚXÚÜÊ™\Ý[˜XÚÛ›ÝÛYÙYÜØY™]WØÚXÚÜÊNÂˆBˆ™]\›ˆ›ÚYÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™TØY™]PÚXÚÐXÚÛ›ÝÛYÙ[Y[ÊÜ[ÛœÊHÂˆÛÛœÝÈ[ÛÛ^ÛÛØ[[™[™ÔØY™]PÚXÚÜËÛ”ØY™]PÚXÚÈHHÜ[ÛœÎÂˆYˆ
[Û”ØY™]PÚXÚÊHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ™\Ý[H]ØZ]Û”ØY™]PÚXÚÊÂˆ[ÛÛ^ˆ[™[™ÔØY™]PÚXÚÜËˆÛÛØ[ˆJNÂˆYˆ
™\Ý[OOHYJHÂˆ™]\›ˆ[™[™ÔØY™]PÚXÚÜÎÂˆBˆYˆ
™\Ý[OOH˜[ÙJHÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆ›Ü›X[^™TØY™]PÚXÚÔ™\Ý[
™\Ý[
NÂŸB™[˜Ý[ÛˆÙ][™[™ÔØY™]PÚXÚÜÊÛÛØ[
HÂˆÛÛœÝ›ÝšY\‘]HHÛÛØ[œ›ÝšY\‘]NÂˆYˆ
Z\Ô™XÛÜ™Ê›ÝšY\‘]JJHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
œ[™[™×ÜØY™]WØÚXÚÜÈˆ[ˆ›ÝšY\‘]JHÂˆ™]\›ˆ›Ü›X[^™TØY™]PÚXÚÜÊ›ÝšY\‘]Kœ[™[™×ÜØY™]WØÚXÚÜÊNÂˆBˆYˆ
œ[™[™ÔØY™]PÚXÚÜÈˆ[ˆ›ÝšY\‘]JHÂˆ™]\›ˆ›Ü›X[^™TØY™]PÚXÚÜÊ›ÝšY\‘]Kœ[™[™ÔØY™]PÚXÚÜÊNÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ\Ô™XÛÜ™Ê˜[YJHÂˆ™]\›ˆ\[Ùˆ˜[YHOOH›Øš™XÝˆ	‰ˆ˜[YHOOH[ÂŸB™[˜Ý[Ûˆ\Ó›Û‘[\TÝš[™Í
˜[YJHÂˆ™]\›ˆ\[Ùˆ˜[YHOOHœÝš[™Èˆ	‰ˆ˜[YK›[™ÝˆÂŸB˜\ˆ‘QPÕQÕÓÓÑT”“Ô—ÓQTÔÐQÑKÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÔÐÔ‘QS”ÒÕÑUWÕT“ÓÓTUT—ÕPÑWÓSQK“ÕÑ’SSÓÕUUÂ˜\ˆ[š]ÝÛÛ^XÝ][ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÝÛÛ^XÝ][Û‹›ZœÈŠ
HÂˆ[š]ØYÙ[ÛÛ[ÛÛ™šYÊ
NÂˆ[š]ØYÙ[ÛÛ[”™\Ý[Ê
NÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]Ú[™Ù™Š
NÂˆ[š]Ú][\ÌŠ
NÂˆ[š]ÛY\ÜØYÙJ
NÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]ÝÛÛ

NÂˆ[š]ÜÛX\Ýš[™Ê
NÂˆ[š]Ý][ÌŠ
NÂˆ[š]ØÜ™X]TÜ[œÊ
NÂˆ[š]ØÛÛ^

NÂˆ[š]ÝÛÛY[]J
NÂˆ[š]ÝÛÛÝ]]›Ü›X[^˜][ÛŠ
NÂˆ[š]ÝÛÛÝX\™˜Z[Ê
NÂˆ[š]ØÝ\ÝÛQ]J
NÂˆ[š]Ø\›Ý˜[™Z™XÝ[ÛŠ
NÂˆ[š]ÜÝ\Ê
NÂˆ‘QPÕQÕÓÓÑT”“Ô—ÓQTÔÐQÑHH•ÛÛ^XÝ][Ûˆ˜Z[Yˆ\œ›Üˆ]Z[È\™H™YXÝYˆŽÂˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÔÐÔ‘QS”ÒÕÑUWÕT“H™]Nš[XYÙKÜ™ÎØ˜\ÙMU“ÔÌÑÙÛÐPPPS”ÕZUYÐPPPQPPPPPÐVPPPPY‘˜ÔÒPPPQ[TU”‘ÔŽÒÐQPRÚVšÎRPPPPP’”•MQ\šÒ™ÙÙÏOHŽÂˆÓÓTUT—ÕPÑWÓSQHH˜ÛÛ\]\ˆŽÂˆ“ÕÑ’SSÓÕUUHÂˆ\Ñš[˜[Ý]]ˆ˜[ÙKˆ\Ò[\œ\Yˆ›ÚYˆNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÛXÜ\›Ý˜[Ë›ZœÂ˜\Þ[˜È[˜Ý[Ûˆ[™RÜÝYXÜ\›Ý˜[ÊÈ™\]Y\ÝËYÙ[Ý]K[˜Ý[Û”™\Ý[Ë\[™Y“™]Ë™\ÛÛ™P\›Ý˜[JHÂˆÛÛœÝ[™[™Ð\›Ý˜[ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÛÛœÝ[™[™Ð\›Ý˜[YÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝ\›Ý˜[™\]Y\ÝÙˆ™\]Y\ÝÊHÂˆÛÛœÝ˜]Ò][HH\›Ý˜[™\]Y\Ýœ™\]Y\Ý][Kœ˜]Ò][NÂˆYˆ
˜]Ò][K\HOOHšÜÝYÝÛÛØØ[ŠHÂˆÛÛ[YNÂˆBˆÛÛœÝ›ÝšY\‘]HH˜]Ò][Kœ›ÝšY\‘]NÂˆYˆ
\›ÝšY\‘]JHÂˆÛÛ[YNÂˆBˆÛÛœÝÛÛ]HH\›Ý˜[™\]Y\Ý›XÜÛÛœ›ÝšY\‘]NÂˆÛÛœÝ\›Ý˜[™\]Y\ÝYH˜]Ò][KšYÏÈ›ÝšY\‘]KšYÂˆYˆ
ÛÛ]OË›Û—Ø\›Ý˜[
HÂˆÛÛœÝ\›Ý˜[™\Ý[H]ØZ]ÛÛ]K›Û—Ø\›Ý˜[
Ý]K—ØÛÛ^\›Ý˜[™\]Y\Ýœ™\]Y\Ý][JNÂˆÛÛœÝ\›Ý˜[™\ÜÛœÙQ]HHÂˆ\›Ý™Nˆ\›Ý˜[™\Ý[˜\›Ý™Kˆ\›Ý˜[Ü™\]Y\ÝÚYˆ\›Ý˜[™\]Y\ÝYÏÈ›ÝšY\‘]KšYˆ™X\ÛÛŽˆ\›Ý˜[™\Ý[œ™X\ÛÛ‚ˆNÂˆ\[™Y“™]Ê™]È[•ÛÛØ[][JÂˆ\NˆšÜÝYÝÛÛØØ[‹ˆ˜[YNˆ›XÜØ\›Ý˜[Ü™\ÜÛœÙH‹ˆ›ÝšY\‘]Nˆ\›Ý˜[™\ÜÛœÙQ]BˆKYÙ[
JNÂˆÛÛ[YNÂˆBˆÛÛœÝ\›Ý˜[XÚ\Ú[ÛˆH\[Ùˆ™\ÛÛ™P\›Ý˜[OOH™[˜Ý[ÛˆˆÈ™\ÛÛ™P\›Ý˜[
˜]Ò][JHˆ›ÚYÂˆYˆ
\[Ùˆ\›Ý˜[XÚ\Ú[ÛˆOOH[™Yš[™Yˆ	‰ˆ\›Ý˜[™\]Y\ÝY
HÂˆÛÛœÝ™Z™XÝ[Û”™X\ÛÛˆH\›Ý˜[XÚ\Ú[ÛˆOOH˜[ÙHÈÝ]K—ØÛÛ^™Ù]™Z™XÝ[Û“Y\ÜØYÙJ˜]Ò][K›˜[YK\›Ý˜[™\]Y\ÝY
Hˆ›ÚYÂˆÛÛœÝ\›Ý˜[™\ÜÛœÙQ]HHÂˆ\›Ý™Nˆ\›Ý˜[XÚ\Ú[Û‹ˆ\›Ý˜[Ü™\]Y\ÝÚYˆ\›Ý˜[™\]Y\ÝYˆ™X\ÛÛŽˆ™Z™XÝ[Û”™X\ÛÛ‚ˆNÂˆ\[™Y“™]Ê™]È[•ÛÛØ[][JÂˆ\NˆšÜÝYÝÛÛØØ[‹ˆ˜[YNˆ›XÜØ\›Ý˜[Ü™\ÜÛœÙH‹ˆ›ÝšY\‘]Nˆ\›Ý˜[™\ÜÛœÙQ]BˆKYÙ[
JNÂˆÛÛ[YNÂˆBˆ[˜Ý[Û”™\Ý[Ëœ\Ú
Âˆ\NˆšÜÝYÛXÜÝÛÛØ\›Ý˜[‹ˆÛÛˆ\›Ý˜[™\]Y\Ý›XÜÛÛˆ[’][Nˆ\›Ý˜[™\]Y\Ýœ™\]Y\Ý][BˆJNÂˆ\[™Y“™]Ê\›Ý˜[™\]Y\Ýœ™\]Y\Ý][JNÂˆ[™[™Ð\›Ý˜[Ë˜Y
\›Ý˜[™\]Y\Ýœ™\]Y\Ý][JNÂˆYˆ
\›Ý˜[™\]Y\ÝY
HÂˆ[™[™Ð\›Ý˜[YË˜Y
\›Ý˜[™\]Y\ÝY
NÂˆBˆBˆ™]\›ˆÈ[™[™Ð\›Ý˜[Ë[™[™Ð\›Ý˜[YÈNÂŸB˜\ˆ[š]ÛXÜ\›Ý˜[ÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÛXÜ\›Ý˜[Ë›ZœÈŠ
HÂˆ[š]Ú][\ÌŠ
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ù\œ›Ü’[™\œË›ZœÂ™[˜Ý[Ûˆ˜[Y]T[‘\œ›Ü‘š[˜[Ý]]
YÙ[Ý]]^
HÂˆžHÂˆYÙ[œ›ØÙ\ÜÑš[˜[Ý]]
Ý]]^
NÂˆHØ]Ú
\œ›ÜLJHÂˆÛÛœÝY\ÜØYÙHH\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›ÜˆÈ\œ›ÜLK›Y\ÜØYÙHˆÝš[™Ê\œ›ÜLJNÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ[˜[Y[ˆ\œ›Üˆ[™\ˆš[˜[Ý]]ˆ	ÛY\ÜØYÙ_X
NÂˆBŸB˜\ˆZ[[‘]K›Ü›X]š[˜[Ý]]Ü™X]Qš[˜[Ý]]][K›Ü›X][‘\œ›Ü‘š[˜[Ý]]Ü™X]T[‘\œ›Ü‘š[˜[Ý]]][K˜[Y]T[‘\œ›Ü’[™\‘š[˜[Ý]]™\ÛÛ™T[‘\œ›Ü’[™\‹žR[™T[‘\œ›ÜŽÂ˜\ˆ[š]Ù\œ›Ü’[™\œÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ù\œ›Ü’[™\œË›ZœÈŠ
HÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]ÛY\ÜØYÙJ
NÂˆ[š]Ú][\ÌŠ
NÂˆ[š]Ü™\Ý[

NÂˆ[š]ÙÝX\™˜Z[Ê
NÂˆ[š]Ú][\Ê
NÂˆ[š]ÜÝ™X[Z[™Ê
NÂˆZ[[‘]HH
Ý]JHOˆ
Âˆ[œ]ˆÝ]K—ÛÜšYÚ[˜[[œ]ˆ™]Ò][\ÎˆÝ]K—ÙÙ[™\˜]Y][\Ëˆ\ÝÜžNˆÙ]\›’[œ]
Ý]K—ÛÜšYÚ[˜[[œ]Ý]K—ÙÙ[™\˜]Y][\ËÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞJKˆÝ]]ˆÙ]\›’[œ]
×KÝ]K—ÙÙ[™\˜]Y][\ËÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞJKˆ˜]Ô™\ÜÛœÙ\ÎˆÝ]K—Û[Ù[™\ÜÛœÙ\Ëˆ\ÝYÙ[ˆÝ]K—ØÝ\œ™[YÙ[ˆÝ]BˆJNÂˆ›Ü›X]š[˜[Ý]]H
YÙ[š[˜[Ý]]
HOˆÂˆYˆ
YÙ[›Ý]]\HOOH^ŠHÂˆ™]\›ˆÝš[™Êš[˜[Ý]]
NÂˆBˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJš[˜[Ý]]
NÂˆNÂˆÜ™X]Qš[˜[Ý]]][HH
YÙ[Ý]]^
HOˆ™]È[“Y\ÜØYÙSÝ]]][J\ÜÚ\Ý[
Ý]]^
KYÙ[
NÂˆ›Ü›X][‘\œ›Ü‘š[˜[Ý]]H›Ü›X]š[˜[Ý]]ÂˆÜ™X]T[‘\œ›Ü‘š[˜[Ý]]][HHÜ™X]Qš[˜[Ý]]][NÂˆ˜[Y]T[‘\œ›Ü’[™\‘š[˜[Ý]]H˜[Y]T[‘\œ›Ü‘š[˜[Ý]]Âˆ™\ÛÛ™T[‘\œ›Ü’[™\ˆH\Þ[˜È
È\œ›ÜŽˆ\œ›ÜLK\œ›Ü’Ú[™\œ›Ü’[™\œËÛÛ^[‘]HJHOˆÂˆÛÛœÝÚ[™H\œ›Ü’Ú[™ÏÈ
\œ›ÜLH[œÝ[˜Ù[ÙˆX^\›œÑ^ÙYYY\œ›ÜˆÈ›X^\›œÈˆˆ\œ›ÜLH[œÝ[˜Ù[Ùˆ[Ù[™Y\Ø[\œ›ÜˆÈ›[Ù[™Y\Ø[ˆˆ›ÚY
NÂˆYˆ
ZÚ[™
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ\Y\œ›ÜˆHÚ[™OOH›X^\›œÈˆ	‰ˆ\œ›ÜLH[œÝ[˜Ù[ÙˆX^\›œÑ^ÙYYY\œ›ÜˆÈ\œ›ÜLHˆÚ[™OOH›[Ù[™Y\Ø[ˆ	‰ˆ\œ›ÜLH[œÝ[˜Ù[Ùˆ[Ù[™Y\Ø[\œ›ÜˆÈ\œ›ÜLHˆÚ[™OOHš[˜[Yš[˜[Ý]]ˆ	‰ˆ\œ›ÜLH[œÝ[˜Ù[Ùˆ[Ù[™Z]š[Ü‘\œ›ÜˆÈ\œ›ÜLHˆ›ÚYÂˆYˆ
]\Y\œ›ÜŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ[™\ˆH\œ›Ü’[™\œÏË–ÚÚ[™HÏÈ\œ›Ü’[™\œÏË™Y˜][ÂˆYˆ
Z[™\ŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ[™\”™\Ý[H]ØZ][™\ŠÂˆ\œ›ÜŽˆ\Y\œ›Ü‹ˆÛÛ^ˆ[‘]BˆJNÂˆ™]\›ˆ[™\”™\Ý[›ÚYÂˆNÂˆžR[™T[‘\œ›ÜˆH\Þ[˜È
È\œ›ÜŽˆ\œ›ÜLKÝ]K\œ›Ü’[™\œËÝ]]ÝX\™˜Z[YœË[Z]YÙ[[™Ý™X[T™\Ý[JHOˆÂˆÛÛœÝ[™\”™\Ý[H]ØZ]™\ÛÛ™T[‘\œ›Ü’[™\ŠÂˆ\œ›ÜŽˆ\œ›ÜLKˆ\œ›Ü’[™\œËˆÛÛ^ˆÝ]K—ØÛÛ^ˆ[‘]NˆZ[[‘]JÝ]JBˆJNÂˆYˆ
Z[™\”™\Ý[
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ[˜ÛYR[’\ÝÜžHH[™\”™\Ý[š[˜ÛYR[’\ÝÜžHOOH˜[ÙNÂˆÛÛœÝÝ]]^H›Ü›X]š[˜[Ý]]
Ý]K—ØÝ\œ™[YÙ[[™\”™\Ý[™š[˜[Ý]]
NÂˆ˜[Y]T[‘\œ›Ü‘š[˜[Ý]]
Ý]K—ØÝ\œ™[YÙ[Ý]]^
NÂˆÝ]K—Û\Ý\›”™\ÜÛœÙHH›ÚYÂˆÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙHH›ÚYÂˆÛÛœÝ][HHÜ™X]Qš[˜[Ý]]][JÝ]K—ØÝ\œ™[YÙ[Ý]]^
NÂˆYˆ
[˜ÛYR[’\ÝÜžJHÂˆÝ]K—ÙÙ[™\˜]Y][\Ëœ\Ú
][JNÂˆBˆYˆ
Ý™X[T™\Ý[
HÂˆÝ™X[TÝ\][\ÕÔ[”™\Ý[
Ý™X[T™\Ý[Ú][WJNÂˆBˆÝ]K—ØÝ\œ™[Ý\HÂˆ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹ˆÝ]]ˆÝ]]^ˆNÂˆÝ]K—Ùš[˜[Ý]]ÛÝ\˜ÙHH™\œ›Ü—Ú[™\ˆŽÂˆ]ØZ][“Ý]]ÝX\™˜Z[ÊÝ]KÝ]]ÝX\™˜Z[YœËÝ]]^
NÂˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆ[Z]YÙ[[™
Ý]K—ØÛÛ^Ý]K—ØÝ\œ™[YÙ[Ý]]^
NÂˆ™]\›ˆ™]È[”™\Ý[
Ý]JNÂˆNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ý\›”™\ÛÛ][Û‹›ZœÂ˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™UÛÛ›Ý›Ý[™Y\ÜØYÙJÝ]KÛÛ[‹ÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆÛÛœÝY˜][Y\ÜØYÙHHQUSÕÓÓÓ“ÕÑ“ÕS‘ÓQTÔÐQÑJÛÛ[‹ÛÛ˜[YJNÂˆYˆ
]ÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆ™]\›ˆY˜][Y\ÜØYÙNÂˆBˆžHÂˆÛÛœÝ›Ü›X]YY\ÜØYÙHH]ØZ]ÛÛ\œ›Ü‘›Ü›X]\ŠÂˆÚ[™ˆÛÛÛ›ÝÙ›Ý[™‹ˆÛÛ\Nˆ™[˜Ý[Ûˆ‹ˆÛÛ˜[YNˆÛÛ[‹ÛÛ˜[YKˆØ[YˆÛÛ[‹ÛÛØ[˜Ø[YˆY˜][Y\ÜØYÙKˆ[ÛÛ^ˆÝ]K—ØÛÛ^ˆJNÂˆYˆ
\[Ùˆ›Ü›X]YY\ÜØYÙHOOHœÝš[™ÈŠHÂˆ™]\›ˆ›Ü›X]YY\ÜØYÙNÂˆBˆYˆ
\[Ùˆ›Ü›X]YY\ÜØYÙHOOH[™Yš[™YŠHÂˆÙÙÙ\—ÙY˜][Ø\›ŠÛÛ\œ›Ü‘›Ü›X]\ˆ™]\›™YH›Û‹\Ýš[™È˜[YKˆ˜[[™È˜XÚÈÈHY˜][ÛÛ›Ý›Ý[™Y\ÜØYÙKˆŠNÂˆBˆHØ]Ú
\œ›ÜLJHÂˆÛÛœÝY\ÜØYÙHH\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›ÜˆÈ\œ›ÜLK›Y\ÜØYÙHˆÝš[™Ê\œ›ÜLJNÂˆÙÙÙ\—ÙY˜][Ø\›ŠÛÛ\œ›Ü‘›Ü›X]\ˆ™]ÈÚ[H›Ü›X][™ÈÛÛ›Ý›Ý[™ˆ	ÛY\ÜØYÙ_X
NÂˆBˆ™]\›ˆY˜][Y\ÜØYÙNÂŸB˜\Þ[˜È[˜Ý[ÛˆZ[ÛÛ›Ý›Ý[™Ý]]][\ÊYÙ[Ý]KÛÛ[œËÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆÛÛœÝ][\ÈH×NÂˆ›Üˆ
ÛÛœÝÛÛ[ˆÙˆÛÛ[œÊHÂˆÛÛœÝY\ÜØYÙHH]ØZ]™\ÛÛ™UÛÛ›Ý›Ý[™Y\ÜØYÙJÝ]KÛÛ[‹ÛÛ\œ›Ü‘›Ü›X]\ŠNÂˆ][\Ëœ\Ú
™]È[•ÛÛØ[Ý]]][JÙ]ÛÛØ[Ý]]][JÛÛ[‹ÛÛØ[Y\ÜØYÙJKYÙ[Y\ÜØYÙJJNÂˆBˆ™]\›ˆ][\ÎÂŸB™[˜Ý[Ûˆ\ÒÜÝYXÜ\›Ý˜[][J][JHÂˆ™]\›ˆ][Kœ˜]Ò][K\HOOHšÜÝYÝÛÛØØ[ˆ	‰ˆ][Kœ˜]Ò][Kœ›ÝšY\‘]OË\HOOH›XÜØ\›Ý˜[Ü™\]Y\ÝŽÂŸB™[˜Ý[Ûˆ™\ÛÛ™P\›Ý˜[Ý]J][KÝ]JHÂˆYˆ
\ÒÜÝYXÜ\›Ý˜[][J][JJHÂˆ™]\›ˆœ[™[™ÈŽÂˆBˆÛÛœÝ˜]Ò][HH][Kœ˜]Ò][NÂˆÛÛœÝÛÛ˜[YHH][KÛÛ˜[YHÏÈ
›˜[YHˆ[ˆ˜]Ò][H	‰ˆ\[Ùˆ˜]Ò][K›˜[YHOOHœÝš[™ÈˆÈ˜]Ò][K›˜[YHˆ›ÚY
NÂˆÛÛœÝØ[YH˜Ø[Yˆ[ˆ˜]Ò][H	‰ˆ\[Ùˆ˜]Ò][K˜Ø[YOOHœÝš[™ÈˆÈ˜]Ò][K˜Ø[YˆšYˆ[ˆ˜]Ò][H	‰ˆ\[Ùˆ˜]Ò][KšYOOHœÝš[™ÈˆÈ˜]Ò][KšYˆ›ÚYÂˆYˆ
]ÛÛ˜[YHXØ[Y
HÂˆ™]\›ˆœ[™[™ÈŽÂˆBˆÛÛœÝ\›Ý˜[HÝ]K—ØÛÛ^š\ÕÛÛ\›Ý™Y
ÈÛÛ˜[YKØ[YJNÂˆYˆ
\›Ý˜[OOHYJHÂˆ™]\›ˆ˜\›Ý™YŽÂˆBˆYˆ
\›Ý˜[OOH˜[ÙJHÂˆ™]\›ˆœ™Z™XÝYŽÂˆBˆ™]\›ˆœ[™[™ÈŽÂŸB™[˜Ý[Ûˆ\Ð\›Ý˜[][SZÙJ˜[YJHÂˆYˆ
]˜[YH\[Ùˆ˜[YHOOH›Øš™XÝŠHÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
Jœ˜]Ò][Hˆ[ˆ˜[YJJHÂˆ™]\›ˆ˜[ÙNÂˆBˆÛÛœÝ˜]Ò][HH˜[YKœ˜]Ò][NÂˆYˆ
\˜]Ò][H\[Ùˆ˜]Ò][HOOH›Øš™XÝŠHÂˆ™]\›ˆ˜[ÙNÂˆBˆÛÛœÝ][U\HH˜]Ò][K\NÂˆ™]\›ˆT“ÕSÒUSWÕTTËš[˜ÛY\Ê][U\JNÂŸB™[˜Ý[ÛˆÙ]\›Ý˜[Y[]J\›Ý˜[
HÂˆÛÛœÝ˜]Ò][HH\›Ý˜[œ˜]Ò][NÂˆYˆ
\˜]Ò][JHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
˜]Ò][K\HOOH™[˜Ý[Û—ØØ[ˆ	‰ˆ˜]Ò][K˜Ø[Y
HÂˆ™]\›ˆ[˜Ý[Û—ØØ[‰Ü˜]Ò][K˜Ø[YXÂˆBˆYˆ
˜Ø[Yˆ[ˆ˜]Ò][H	‰ˆ˜]Ò][K˜Ø[Y
HÂˆ™]\›ˆ	Ü˜]Ò][K\_N‰Ü˜]Ò][K˜Ø[YXÂˆBˆÛÛœÝYHšYˆ[ˆ˜]Ò][HÈ˜]Ò][KšYˆ›ÚYÂˆYˆ
Y
HÂˆ™]\›ˆ	Ü˜]Ò][K\_N‰ÚYXÂˆBˆÛÛœÝ›ÝšY\‘]HH\[Ùˆ˜]Ò][Kœ›ÝšY\‘]HOOH›Øš™XÝˆ	‰ˆ˜]Ò][Kœ›ÝšY\‘]HÈ˜]Ò][Kœ›ÝšY\‘]Hˆ›ÚYÂˆYˆ
›ÝšY\‘]OËšY
HÂˆ™]\›ˆ	Ü˜]Ò][K\_Nœ›ÝšY\Ž‰Ü›ÝšY\‘]KšYXÂˆBˆÛÛœÝYÙ[˜[YHH˜YÙ[ˆ[ˆ\›Ý˜[	‰ˆ\›Ý˜[˜YÙ[È\›Ý˜[˜YÙ[›˜[YHˆˆŽÂˆžHÂˆ™]\›ˆ	ØYÙ[˜[Y_N‰Ü˜]Ò][K\_N‰Ò”ÓÓ‹œÝš[™ÚYžJ˜]Ò][J_XÂˆHØ]ÚÂˆ™]\›ˆ	ØYÙ[˜[Y_N‰Ü˜]Ò][K\_XÂˆBŸB™[˜Ý[ÛˆZ[\[™ÛÛ^
^\Ý[™Ò][\ÊHÂˆÛÛœÝÙY[’][\ÈH™]ÈÙ]
^\Ý[™Ò][\ÊNÂˆÛÛœÝÙY[\›Ý˜[Y[]Y\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝ][HÙˆ^\Ý[™Ò][\ÊHÂˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHÂˆÛÛœÝY[]HHÙ]\›Ý˜[Y[]J][JNÂˆYˆ
Y[]JHÂˆÙY[\›Ý˜[Y[]Y\Ë˜Y
Y[]JNÂˆBˆBˆBˆ™]\›ˆÈÙY[’][\ËÙY[\›Ý˜[Y[]Y\ÈNÂŸB™[˜Ý[Ûˆ\[™[’][RY“™]Ê][K\™Ù]ÛÛ^
HÂˆYˆ
ÛÛ^œÙY[’][\Ëš\Ê][JJHÂˆ™]\›ŽÂˆBˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHÂˆÛÛœÝY[]HHÙ]\›Ý˜[Y[]J][JNÂˆYˆ
Y[]JHÂˆYˆ
ÛÛ^œÙY[\›Ý˜[Y[]Y\Ëš\ÊY[]JJHÂˆ™]\›ŽÂˆBˆÛÛ^œÙY[\›Ý˜[Y[]Y\Ë˜Y
Y[]JNÂˆBˆBˆÛÛ^œÙY[’][\Ë˜Y
][JNÂˆ\™Ù]œ\Ú
][JNÂŸB™[˜Ý[ÛˆZ[\›Ý™YØ[YÙ]
][\Ë\JHÂˆÛÛœÝØ[YÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝ][HÙˆ][\ÊHÂˆYˆ
J][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JJHÂˆÛÛ[YNÂˆBˆÛÛœÝ˜]Ò][HH][Kœ˜]Ò][NÂˆYˆ
\˜]Ò][H˜]Ò][K\HOOH\JHÂˆÛÛ[YNÂˆBˆÛÛœÝØ[Ù^HHÙ]ÛÛXÝ[Û’Ù^J˜]Ò][JNÂˆYˆ
Ø[Ù^JHÂˆØ[YË˜Y
Ø[Ù^JNÂˆBˆBˆ™]\›ˆØ[YÎÂŸB™[˜Ý[ÛˆÛÛXÝÛÛ\]YØ[YÊ][\Ë\JHÂˆÛÛœÝÛÛ\]YHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝ][HÙˆ][\ÊHÂˆÛÛœÝ˜]Ò][HH][Kœ˜]Ò][NÂˆYˆ
\˜]Ò][H\[Ùˆ˜]Ò][HOOH›Øš™XÝŠHÂˆÛÛ[YNÂˆBˆYˆ
˜]Ò][K\HOOH\JHÂˆÛÛ[YNÂˆBˆÛÛœÝØ[YH˜]Ò][K˜Ø[YÂˆYˆ
\[ÙˆØ[YOOHœÝš[™ÈŠHÂˆÛÛ\]Y˜Y
Ø[Y
NÂˆBˆBˆ™]\›ˆÛÛ\]YÂŸB™[˜Ý[Ûˆš[\XÝ[ÛœÐžP\›Ý˜[
™TÝ\][\ËXÝ[ÛœË\JHÂˆÛÛœÝ[ÝÙYØ[YÈHZ[\›Ý™YØ[YÙ]
™TÝ\][\Ë\JNÂˆYˆ
[ÝÙYØ[YËœÚ^™HOOH
HÂˆ™]\›ˆ×NÂˆBˆ™]\›ˆXÝ[ÛœË™š[\Š
XÝ[ÛŠHOˆÂˆÛÛœÝØ[Ù^HHÙ]ÛÛXÝ[Û’Ù^JXÝ[Û‹ÛÛØ[
NÂˆ™]\›ˆ\[ÙˆØ[Ù^HOOHœÝš[™Èˆ	‰ˆ[ÝÙYØ[YËš\ÊØ[Ù^JNÂˆJNÂŸB™[˜Ý[Ûˆš[\”[™[™ÐXÝ[ÛœÊXÝ[ÛœËÜ[ÛœÊHÂˆ™]\›ˆXÝ[ÛœË™š[\Š
XÝ[ÛŠHOˆÂˆÛÛœÝØ[YHXÝ[Û‹ÛÛØ[˜Ø[YÂˆÛÛœÝ\ÐØ[YH\[ÙˆØ[YOOHœÝš[™ÈŽÂˆYˆ
Ü[ÛœË˜[ÝÙYØ[YÈ	‰ˆÜ[ÛœË˜[ÝÙYØ[YËœÚ^™Hˆ
HÂˆYˆ
Z\ÐØ[Y[Ü[ÛœË˜[ÝÙYØ[YËš\ÊØ[Y
JHÂˆ™]\›ˆ˜[ÙNÂˆBˆBˆYˆ
\ÐØ[Y	‰ˆÜ[ÛœË˜ÛÛ\]YØ[YËš\ÊØ[Y
JHÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆYNÂˆJNÂŸB™[˜Ý[Ûˆ]Y]YPXÝ[ÛœÐžPØ[Y
XÝ[ÛœÊHÂˆÛÛœÝ]Y]YYHÂˆžPØ[YˆÊˆ×ÔT‘W×È
‹È™]ÈX\

KˆÚ]Ý]Ø[Yˆ×BˆNÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆXÝ[ÛœÊHÂˆÛÛœÝØ[Ù^HHÙ]ÛÛXÝ[Û’Ù^JXÝ[Û‹ÛÛØ[
NÂˆYˆ
XØ[Ù^JHÂˆ]Y]YYÚ]Ý]Ø[Yœ\Ú
XÝ[ÛŠNÂˆÛÛ[YNÂˆBˆÛÛœÝXÝ[ÛœÑ›ÜØ[YH]Y]YY˜žPØ[Y™Ù]
Ø[Ù^JHÏÈ×NÂˆXÝ[ÛœÑ›ÜØ[Yœ\Ú
XÝ[ÛŠNÂˆ]Y]YY˜žPØ[YœÙ]
Ø[Ù^KXÝ[ÛœÑ›ÜØ[Y
NÂˆBˆ™]\›ˆ]Y]YYÂŸB™[˜Ý[ÛˆZÙT]Y]YYXÝ[ÛŠXÝ[ÛœÐžPØ[YØ[Y
HÂˆÛÛœÝ]Y]YYHXÝ[ÛœÐžPØ[Y™Ù]
Ø[Y
NÂˆÛÛœÝXÝ[ÛˆH]Y]YYËœÚY

NÂˆYˆ
\]Y]YY]Y]YY›[™ÝOOH
HÂˆXÝ[ÛœÐžPØ[Y™[]JØ[Y
NÂˆBˆ™]\›ˆXÝ[ÛŽÂŸB™[˜Ý[Ûˆ\[™™[XZ[š[™Ô]Y]YYXÝ[ÛœÊ\™Ù]XÝ[ÛœÐžPØ[Y
HÂˆ›Üˆ
ÛÛœÝ]Y]YYÙˆXÝ[ÛœÐžPØ[Y˜[Y\Ê
JHÂˆ\™Ù]œ\Ú
‹‹œ]Y]YY
NÂˆBŸB™[˜Ý[ÛˆÜ™\”Ú[[™\T]ÚXÝ[ÛœÊÛÝ\˜ÙR][\ËÚ[XÝ[ÛœË\T]ÚXÝ[ÛœÊHÂˆÛÛœÝÚ[XÝ[ÛœÐžPØ[YH]Y]YPXÝ[ÛœÐžPØ[Y
Ú[XÝ[ÛœÊNÂˆÛÛœÝ\T]ÚXÝ[ÛœÐžPØ[YH]Y]YPXÝ[ÛœÐžPØ[Y
\T]ÚXÝ[ÛœÊNÂˆÛÛœÝÜ™\™YXÝ[ÛœÈH×NÂˆ›Üˆ
ÛÛœÝ][HÙˆÛÝ\˜ÙR][\ÊHÂˆÛÛœÝ˜]Ò][HH][Kœ˜]Ò][NÂˆYˆ
˜]Ò][OË\HOOHœÚ[ØØ[ŠHÂˆÛÛœÝØ[Ù^HHÙ]ÛÛXÝ[Û’Ù^J˜]Ò][JNÂˆÛÛœÝXÝ[ÛˆHZÙT]Y]YYXÝ[ÛŠÚ[XÝ[ÛœÐžPØ[Y˜žPØ[YØ[Ù^HÏÈˆŠNÂˆYˆ
XÝ[ÛŠHÂˆÜ™\™YXÝ[ÛœËœ\Ú
È\NˆœÚ[‹XÝ[ÛˆJNÂˆBˆÛÛ[YNÂˆBˆYˆ
˜]Ò][OË\HOOH˜\WÜ]ÚØØ[ŠHÂˆÛÛœÝØ[Ù^HHÙ]ÛÛXÝ[Û’Ù^J˜]Ò][JNÂˆÛÛœÝXÝ[ÛˆHZÙT]Y]YYXÝ[ÛŠ\T]ÚXÝ[ÛœÐžPØ[Y˜žPØ[YØ[Ù^HÏÈˆŠNÂˆYˆ
XÝ[ÛŠHÂˆÜ™\™YXÝ[ÛœËœ\Ú
È\Nˆ˜\WÜ]Ú‹XÝ[ÛˆJNÂˆBˆBˆBˆÛÛœÝ™[XZ[š[™ÔÚ[XÝ[ÛœÈH×NÂˆ\[™™[XZ[š[™Ô]Y]YYXÝ[ÛœÊ™[XZ[š[™ÔÚ[XÝ[ÛœËÚ[XÝ[ÛœÐžPØ[Y˜žPØ[Y
NÂˆ™[XZ[š[™ÔÚ[XÝ[ÛœËœ\Ú
‹‹œÚ[XÝ[ÛœÐžPØ[YÚ]Ý]Ø[Y
NÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆ™[XZ[š[™ÔÚ[XÝ[ÛœÊHÂˆÜ™\™YXÝ[ÛœËœ\Ú
È\NˆœÚ[‹XÝ[ÛˆJNÂˆBˆÛÛœÝ™[XZ[š[™Ð\T]ÚXÝ[ÛœÈH×NÂˆ\[™™[XZ[š[™Ô]Y]YYXÝ[ÛœÊ™[XZ[š[™Ð\T]ÚXÝ[ÛœË\T]ÚXÝ[ÛœÐžPØ[Y˜žPØ[Y
NÂˆ™[XZ[š[™Ð\T]ÚXÝ[ÛœËœ\Ú
‹‹˜\T]ÚXÝ[ÛœÐžPØ[YÚ]Ý]Ø[Y
NÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆ™[XZ[š[™Ð\T]ÚXÝ[ÛœÊHÂˆÜ™\™YXÝ[ÛœËœ\Ú
È\Nˆ˜\WÜ]Ú‹XÝ[ÛˆJNÂˆBˆ™]\›ˆÜ™\™YXÝ[ÛœÎÂŸB™[˜Ý[ÛˆÙ]ÛÛXÝ[Û’Ù^J˜[YJHÂˆYˆ
\[Ùˆ˜[YK˜Ø[YOOHœÝš[™Èˆ	‰ˆ˜[YK˜Ø[Y›[™Ýˆ
HÂˆ™]\›ˆ˜[YK˜Ø[YÂˆBˆYˆ
\[Ùˆ˜[YKšYOOHœÝš[™Èˆ	‰ˆ˜[YKšY›[™Ýˆ
HÂˆ™]\›ˆ˜[YKšYÂˆBˆ™]\›ˆ›ÚYÂŸB˜\Þ[˜È[˜Ý[Ûˆ^XÝ]TÚ[[™\T]ÚXÝ[ÛœÒ[“Ü™\Š\™ÜÊHÂˆÛÛœÝ™\Ý[ÈH×NÂˆ›Üˆ
ÛÛœÝXÝ[ÛˆÙˆÜ™\”Ú[[™\T]ÚXÝ[ÛœÊ\™ÜËœÛÝ\˜ÙR][\Ë\™ÜËœÚ[XÝ[ÛœË\™ÜË˜\T]ÚXÝ[ÛœÊJHÂˆÛÛœÝ][\ÈHXÝ[Û‹\HOOHœÚ[ˆÈ]ØZ]^XÝ]TÚ[XÝ[ÛœÊ\™ÜË˜YÙ[ØXÝ[Û‹˜XÝ[Û—K\™ÜËœ[›™\‹\™ÜËœÝ]K—ØÛÛ^›ÚY\™ÜËÛÛ\œ›Ü‘›Ü›X]\ŠHˆ]ØZ]^XÝ]P\T]ÚÜ\˜][ÛœÊ\™ÜË˜YÙ[ØXÝ[Û‹˜XÝ[Û—K\™ÜËœ[›™\‹\™ÜËœÝ]K—ØÛÛ^›ÚY\™ÜËÛÛ\œ›Ü‘›Ü›X]\ŠNÂˆ™\Ý[Ëœ\Ú
‹‹š][\ÊNÂˆBˆ™]\›ˆ™\Ý[ÎÂŸB™[˜Ý[Ûˆ[˜Ø]Q›Ü‘]™[Ü\ŠY\ÜØYÙKX^[™ÝHMŒ
HÂˆÛÛœÝš[[YYHY\ÜØYÙKš[J
NÂˆYˆ
]š[[YY
HÂˆ™]\›ˆ”ØÚ[XH˜[Y][Ûˆ˜Z[YˆŽÂˆBˆYˆ
š[[YY›[™ÝHX^[™Ý
HÂˆ™]\›ˆš[[YYÂˆBˆ™]\›ˆ	Ýš[[YYœÛXÙJX^[™ÝHÊ_K‹‹˜ÂŸB™[˜Ý[Ûˆ›Ü›X]š[˜[Ý]]\Q\œ›ÜŠ\œ›ÜLJHÂˆžHÂˆYˆ
\œ›ÜLH[œÝ[˜Ù[Ùˆ^\›˜[Ù^ÜË–›Ù\œ›ÜŠHÂˆÛÛœÝ\ÜÝYLˆH\œ›ÜLKš\ÜÝY\ÖÌNÂˆYˆ
\ÜÝYLŠHÂˆÛÛœÝ\ÜÝYT]\ÈH\œ˜^Kš\Ð\œ˜^J\ÜÝYL‹œ]
HÈ\ÜÝYL‹œ]ˆ×NÂˆÛÛœÝ\ÜÝYT]H\ÜÝYT]\Ë›[™ÝˆÈ\ÜÝYT]\Ë›X\

\
HOˆÝš[™Ê\
JKš›Ú[Š‹ˆŠHˆŠ›ÛÝ
HŽÂˆÛÛœÝY\ÜØYÙHH[˜Ø]Q›Ü‘]™[Ü\Š\ÜÝYL‹›Y\ÜØYÙHÏÈˆŠNÂˆ™]\›ˆ[˜[YÝ]]\Nˆš[˜[\ÜÚ\Ý[Ý]]˜Z[YØÚ[XH˜[Y][Ûˆ]‰Ú\ÜÝYT]Hˆ
	ÛY\ÜØYÙ_JK˜ÂˆBˆ™]\›ˆ’[˜[YÝ]]\Nˆš[˜[\ÜÚ\Ý[Ý]]˜Z[YØÚ[XH˜[Y][Û‹ˆŽÂˆBˆYˆ
\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›Üˆ	‰ˆ\œ›ÜLK›Y\ÜØYÙJHÂˆ™]\›ˆ[˜[YÝ]]\Nˆ	Ý[˜Ø]Q›Ü‘]™[Ü\Š\œ›ÜLK›Y\ÜØYÙJ_XÂˆBˆHØ]ÚÂˆBˆ™]\›ˆ’[˜[YÝ]]\Nˆš[˜[\ÜÚ\Ý[Ý]]Y›ÝX]ÚH^XÝYØÚ[XKˆŽÂŸB™[˜Ý[ÛˆZ[\›”[‘\œ›Ü‘]JÝ]KYÙ[ÜšYÚ[˜[[œ]™TÝ\][\Ë™]Ò][\ÊHÂˆÛÛœÝÙ[™\˜]Y][\ÈH™TÝ\][\Ë˜ÛÛ˜Ø]
™]Ò][\ÊNÂˆ™]\›ˆÂˆ[œ]ˆÜšYÚ[˜[[œ]ˆ™]Ò][\ÎˆÙ[™\˜]Y][\Ëˆ\ÝÜžNˆÙ]\›’[œ]
ÜšYÚ[˜[[œ]Ù[™\˜]Y][\ËÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞJKˆÝ]]ˆÙ]\›’[œ]
×KÙ[™\˜]Y][\ËÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞJKˆ˜]Ô™\ÜÛœÙ\ÎˆÝ]K—Û[Ù[™\ÜÛœÙ\Ëˆ\ÝYÙ[ˆYÙ[ˆÝ]BˆNÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™R[˜[Yš[˜[Ý]]
\™ÜÊHÂˆÛÛœÝ[™\”™\Ý[H]ØZ]™\ÛÛ™T[‘\œ›Ü’[™\ŠÂˆ\œ›ÜŽˆ\™ÜË™\œ›Ü‹ˆ\œ›Ü’Ú[™ˆš[˜[Yš[˜[Ý]]‹ˆ\œ›Ü’[™\œÎˆ\™ÜË™\œ›Ü’[™\œËˆÛÛ^ˆ\™ÜËœÝ]K—ØÛÛ^ˆ[‘]NˆZ[\›”[‘\œ›Ü‘]J\™ÜËœÝ]K\™ÜË˜YÙ[\™ÜË›ÜšYÚ[˜[[œ]\™ÜËœ™TÝ\][\Ë\™ÜË›™]Ò][\ÊBˆJNÂˆYˆ
Z[™\”™\Ý[
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝÝ]]^H›Ü›X][‘\œ›Ü‘š[˜[Ý]]
\™ÜË˜YÙ[[™\”™\Ý[™š[˜[Ý]]
NÂˆ˜[Y]T[‘\œ›Ü’[™\‘š[˜[Ý]]
\™ÜË˜YÙ[Ý]]^
NÂˆYˆ
[™\”™\Ý[š[˜ÛYR[’\ÝÜžHOOH˜[ÙJHÂˆ\™ÜË›™]Ò][\Ëœ\Ú
Ü™X]T[‘\œ›Ü‘š[˜[Ý]]][J\™ÜË˜YÙ[Ý]]^
JNÂˆBˆ™]\›ˆÝ]]^ÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™R[\œ\Y\›ŠYÙ[ÜšYÚ[˜[[œ]ÜšYÚ[˜[™TÝ\][\Ë™]Ô™\ÜÛœÙK›ØÙ\ÜÙY™\ÜÛœÙK[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYÊHÂˆÛÛœÝ[˜Ý[ÛØ[YÈHÜšYÚ[˜[™TÝ\][\Ë™š[\Š
][JHOˆ][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][H	‰ˆ˜Ø[Yˆ[ˆ][Kœ˜]Ò][H	‰ˆ][Kœ˜]Ò][K\HOOH™[˜Ý[Û—ØØ[ŠK›X\

][JHOˆ][Kœ˜]Ò][K˜Ø[Y
NÂˆÛÛœÝÛÛ\]Y[˜Ý[ÛØ[YÈHÛÛXÝÛÛ\]YØ[YÊÜšYÚ[˜[™TÝ\][\Ë™[˜Ý[Û—ØØ[Ü™\Ý[ŠNÂˆÛÛœÝÛÛ\]YÛÛ\]\Ø[YÈHÛÛXÝÛÛ\]YØ[YÊÜšYÚ[˜[™TÝ\][\Ë˜ÛÛ\]\—ØØ[Ü™\Ý[ŠNÂˆÛÛœÝÛÛ\]YÚ[Ø[YÈHÛÛXÝÛÛ\]YØ[YÊÜšYÚ[˜[™TÝ\][\ËœÚ[ØØ[ÛÝ]]ŠNÂˆÛÛœÝÛÛ\]Y\T]ÚØ[YÈHÛÛXÝÛÛ\]YØ[YÊÜšYÚ[˜[™TÝ\][\Ë˜\WÜ]ÚØØ[ÛÝ]]ŠNÂˆÛÛœÝ[™[™Ð\›Ý˜[][\ÈHÝ]K™Ù][\œ\[ÛœÊ
K™š[\Š\Ð\›Ý˜[][SZÙJNÂˆÛÛœÝ[™[™Ð\›Ý˜[Y[]Y\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝ\›Ý˜[Ùˆ[™[™Ð\›Ý˜[][\ÊHÂˆYˆ
J\›Ý˜[[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JJHÂˆÛÛ[YNÂˆBˆYˆ
\ÒÜÝYXÜ\›Ý˜[][J\›Ý˜[
JHÂˆÛÛ[YNÂˆBˆÛÛœÝ˜]Ò][HH\›Ý˜[œ˜]Ò][NÂˆYˆ
˜]Ò][K\HOOH™[˜Ý[Û—ØØ[ˆ	‰ˆ˜]Ò][K˜Ø[Y	‰ˆÛÛ\]Y[˜Ý[ÛØ[YËš\Ê˜]Ò][K˜Ø[Y
JHÂˆÛÛ[YNÂˆBˆYˆ
˜]Ò][K\HOOH˜ÛÛ\]\—ØØ[ˆ	‰ˆ˜]Ò][K˜Ø[Y	‰ˆÛÛ\]YÛÛ\]\Ø[YËš\Ê˜]Ò][K˜Ø[Y
JHÂˆÛÛ[YNÂˆBˆYˆ
˜]Ò][K\HOOHœÚ[ØØ[ˆ	‰ˆ˜]Ò][K˜Ø[Y	‰ˆÛÛ\]YÚ[Ø[YËš\Ê˜]Ò][K˜Ø[Y
JHÂˆÛÛ[YNÂˆBˆYˆ
˜]Ò][K\HOOH˜\WÜ]ÚØØ[ˆ	‰ˆ˜]Ò][K˜Ø[Y	‰ˆÛÛ\]Y\T]ÚØ[YËš\Ê˜]Ò][K˜Ø[Y
JHÂˆÛÛ[YNÂˆBˆÛÛœÝY[]HHÙ]\›Ý˜[Y[]J\›Ý˜[
NÂˆYˆ
Y[]JHÂˆYˆ
™\ÛÛ™P\›Ý˜[Ý]J\›Ý˜[Ý]JHOOHœ[™[™ÈŠHÂˆ[™[™Ð\›Ý˜[Y[]Y\Ë˜Y
Y[]JNÂˆBˆBˆBˆÛÛœÝ[˜Ý[Û•ÛÛ[œÈH›ØÙ\ÜÙY™\ÜÛœÙK™[˜Ý[ÛœË™š[\Š
[ŒŠHOˆÂˆÛÛœÝØ[YH[Œ‹ÛÛØ[˜Ø[YÂˆYˆ
XØ[Y
HÂˆ™]\›ˆ˜[ÙNÂˆBˆÛÛœÝ\Ð\›Ý™YØ[H[˜Ý[ÛØ[YËš[˜ÛY\ÊØ[Y
NÂˆÛÛœÝ\Ô[™[™Ó™\ÝYHÝ]Kš\Ô[™[™ÐYÙ[ÛÛ[ŠÙ][˜Ý[Û•ÛÛ]X[YšYY˜[YJ[Œ‹ÛÛ
HÏÈ[Œ‹ÛÛ›˜[YKØ[Y
NÂˆYˆ
Z\Ð\›Ý™YØ[	‰ˆZ\Ô[™[™Ó™\ÝY
HÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆXÛÛ\]Y[˜Ý[ÛØ[YËš\ÊØ[Y
NÂˆJNÂˆÛÛœÝÚ[[œÈHš[\”[™[™ÐXÝ[ÛœÊš[\XÝ[ÛœÐžP\›Ý˜[
ÜšYÚ[˜[™TÝ\][\Ë›ØÙ\ÜÙY™\ÜÛœÙKœÚ[XÝ[ÛœËœÚ[ØØ[ŠKÂˆÛÛ\]YØ[YÎˆÛÛ\]YÚ[Ø[YÂˆJNÂˆÛÛœÝ[™[™ÐÛÛ\]\XÝ[ÛœÈHš[\”[™[™ÐXÝ[ÛœÊš[\XÝ[ÛœÐžP\›Ý˜[
ÜšYÚ[˜[™TÝ\][\Ë›ØÙ\ÜÙY™\ÜÛœÙK˜ÛÛ\]\XÝ[ÛœË˜ÛÛ\]\—ØØ[ŠKÂˆÛÛ\]YØ[YÎˆÛÛ\]YÛÛ\]\Ø[YÂˆJNÂˆÛÛœÝ\T]Ú[œÈHš[\”[™[™ÐXÝ[ÛœÊš[\XÝ[ÛœÐžP\›Ý˜[
ÜšYÚ[˜[™TÝ\][\Ë›ØÙ\ÜÙY™\ÜÛœÙK˜\T]ÚXÝ[ÛœË˜\WÜ]ÚØØ[ŠKÂˆÛÛ\]YØ[YÎˆÛÛ\]Y\T]ÚØ[YÂˆJNÂˆÛÛœÝ[˜Ý[Û”™\Ý[ÈH]ØZ]^XÝ]Q[˜Ý[Û•ÛÛØ[ÊYÙ[[˜Ý[Û•ÛÛ[œË[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYÊNÂˆÛÛœÝÛÛ\]\”™\Ý[ÈH[™[™ÐÛÛ\]\XÝ[ÛœË›[™ÝˆÈ]ØZ]^XÝ]PÛÛ\]\XÝ[ÛœÊYÙ[[™[™ÐÛÛ\]\XÝ[ÛœË[›™\‹Ý]K—ØÛÛ^›ÚYÛÛ\œ›Ü‘›Ü›X]\ŠHˆ×NÂˆÛÛœÝÚ[[™\T]Ú™\Ý[ÈHÚ[[œË›[™Ýˆ\T]Ú[œË›[™ÝˆÈ]ØZ]^XÝ]TÚ[[™\T]ÚXÝ[ÛœÒ[“Ü™\ŠÂˆYÙ[ˆÛÝ\˜ÙR][\ÎˆÜšYÚ[˜[™TÝ\][\ËˆÚ[XÝ[ÛœÎˆÚ[[œËˆ\T]ÚXÝ[ÛœÎˆ\T]Ú[œËˆ[›™\‹ˆÝ]KˆÛÛ\œ›Ü‘›Ü›X]\‚ˆJHˆ×NÂˆÛÛœÝ[™[™Ñ[˜Ý[Û•ÛÛÓ›Ý›Ý[™Hš[\”[™[™ÐXÝ[ÛœÊ›ØÙ\ÜÙY™\ÜÛœÙK™[˜Ý[Û•ÛÛÓ›Ý›Ý[™ÏÈ×KÂˆÛÛ\]YØ[YÎˆÛÛ\]Y[˜Ý[ÛØ[YÂˆJNÂˆÛÛœÝÛÛ›Ý›Ý[™™\Ý[ÈH]ØZ]Z[ÛÛ›Ý›Ý[™Ý]]][\ÊYÙ[Ý]K[™[™Ñ[˜Ý[Û•ÛÛÓ›Ý›Ý[™ÛÛ\œ›Ü‘›Ü›X]\ŠNÂˆÛÛœÝ™]Ò][\ÈH×NÂˆÛÛœÝ\[™ÛÛ^HZ[\[™ÛÛ^
ÜšYÚ[˜[™TÝ\][\ÊNÂˆÛÛœÝ\[™Y“™]ÈH
][JHOˆ\[™[’][RY“™]Ê][K™]Ò][\Ë\[™ÛÛ^
NÂˆ›Üˆ
ÛÛœÝ™\Ý[Ùˆ[˜Ý[Û”™\Ý[ÊHÂˆYˆ
™\Ý[\HOOH™[˜Ý[Û—ÛÝ]]ˆ	‰ˆ\œ˜^Kš\Ð\œ˜^J™\Ý[š[\œ\[ÛœÊH	‰ˆ™\Ý[š[\œ\[ÛœË›[™Ýˆ
HÂˆÛÛ[YNÂˆBˆ\[™Y“™]Ê™\Ý[œ[’][JNÂˆBˆ›Üˆ
ÛÛœÝ™\Ý[ÙˆÛÛ›Ý›Ý[™™\Ý[ÊHÂˆ\[™Y“™]Ê™\Ý[
NÂˆBˆ›Üˆ
ÛÛœÝ™\Ý[ÙˆÛÛ\]\”™\Ý[ÊHÂˆ\[™Y“™]Ê™\Ý[
NÂˆBˆ›Üˆ
ÛÛœÝ™\Ý[ÙˆÚ[[™\T]Ú™\Ý[ÊHÂˆ\[™Y“™]Ê™\Ý[
NÂˆBˆÛÛœÝY][Û˜[[\œ\[ÛœÈHÛÛXÝ[\œ\[ÛœÊ×KË‹‹˜ÛÛ\]\”™\Ý[Ë‹‹œÚ[[™\T]Ú™\Ý[×JNÂˆÛÛœÝÜÝYXÜ\›Ý˜[ÈH]ØZ][™RÜÝYXÜ\›Ý˜[ÊÂˆ™\]Y\ÝÎˆ›ØÙ\ÜÙY™\ÜÛœÙK›XÜ\›Ý˜[™\]Y\ÝËˆYÙ[ˆÝ]Kˆ[˜Ý[Û”™\Ý[Ëˆ\[™Y“™]Ëˆ™\ÛÛ™P\›Ý˜[ˆ
˜]Ò][JHOˆÂˆÛÛœÝ›ÝšY\‘]HH˜]Ò][Kœ›ÝšY\‘]NÂˆÛÛœÝ\›Ý˜[™\]Y\ÝYH˜]Ò][KšYÏÈ›ÝšY\‘]OËšYÂˆYˆ
X\›Ý˜[™\]Y\ÝY
HÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆÝ]K—ØÛÛ^š\ÕÛÛ\›Ý™Y
ÂˆÛÛ˜[YNˆ˜]Ò][K›˜[YKˆØ[Yˆ\›Ý˜[™\]Y\ÝYˆJNÂˆBˆJNÂˆÛÛœÝ™TÝ\][\ÈHÜšYÚ[˜[™TÝ\][\Ë™š[\Š
][JHOˆÂˆYˆ
J][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JJHÂˆ™]\›ˆYNÂˆBˆYˆ
\ÒÜÝYXÜ\›Ý˜[][J][JJHÂˆYˆ
ÜÝYXÜ\›Ý˜[Ëœ[™[™Ð\›Ý˜[Ëš\Ê][JJHÂˆ™]\›ˆYNÂˆBˆÛÛœÝ\›Ý˜[™\]Y\ÝYH][Kœ˜]Ò][KšYÏÈ][Kœ˜]Ò][Kœ›ÝšY\‘]OËšYÂˆYˆ
\›Ý˜[™\]Y\ÝY
HÂˆ™]\›ˆÜÝYXÜ\›Ý˜[Ëœ[™[™Ð\›Ý˜[YËš\Ê\›Ý˜[™\]Y\ÝY
NÂˆBˆ™]\›ˆ˜[ÙNÂˆBˆÛÛœÝY[]HHÙ]\›Ý˜[Y[]J][JNÂˆYˆ
ZY[]JHÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ[™[™Ð\›Ý˜[Y[]Y\Ëš\ÊY[]JNÂˆJNÂˆÛÛœÝÙ\\›Ý˜[][\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ›Üˆ
ÛÛœÝ][HÙˆ™TÝ\][\ÊHÂˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHÂˆÙ\\›Ý˜[][\Ë˜Y
][JNÂˆBˆBˆ]™[[Ý™Y\›Ý˜[ÛÝ[HÂˆ›Üˆ
ÛÛœÝ][HÙˆÜšYÚ[˜[™TÝ\][\ÊHÂˆYˆ
][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][H	‰ˆZÙ\\›Ý˜[][\Ëš\Ê][JJHÂˆ™[[Ý™Y\›Ý˜[ÛÝ[
ÊÎÂˆBˆBˆYˆ
™[[Ý™Y\›Ý˜[ÛÝ[ˆ
HÂˆÝ]Kœ™]Ú[™\›”\œÚ\Ý[˜ÙJ™[[Ý™Y\›Ý˜[ÛÝ[
NÂˆBˆÛÛœÝÛÛ\]YÝ\H]ØZ]X^X™PÛÛ\]U\›‘œ›ÛUÛÛ™\Ý[ÊÂˆYÙ[ˆ[›™\‹ˆÝ]Kˆ[˜Ý[Û”™\Ý[ËˆÜšYÚ[˜[[œ]ˆ™]Ô™\ÜÛœÙKˆ™TÝ\][\Ëˆ™]Ò][\ËˆY][Û˜[[\œ\[ÛœÂˆJNÂˆYˆ
ÛÛ\]YÝ\
HÂˆ™]\›ˆÛÛ\]YÝ\ÂˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆˆJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™U\›Y\“[Ù[™\ÜÛœÙJYÙ[ÜšYÚ[˜[[œ]ÜšYÚ[˜[™TÝ\][\Ë™]Ô™\ÜÛœÙK›ØÙ\ÜÙY™\ÜÛœÙK[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYË\œ›Ü’[™\œÊHÂˆÛÛœÝ™TÝ\][\ÈHÜšYÚ[˜[™TÝ\][\ÎÂˆÛÛœÝ™]Ò][\ÈH×NÂˆÛÛœÝ\[™ÛÛ^HZ[\[™ÛÛ^
ÜšYÚ[˜[™TÝ\][\ÊNÂˆÛÛœÝ\[™Y“™]ÈH
][JHOˆ\[™[’][RY“™]Ê][K™]Ò][\Ë\[™ÛÛ^
NÂˆ›Üˆ
ÛÛœÝ][HÙˆ›ØÙ\ÜÙY™\ÜÛœÙK›™]Ò][\ÊHÂˆ\[™Y“™]Ê][JNÂˆBˆÛÛœÝÙ[˜Ý[Û”™\Ý[ËÛÛ\]\”™\Ý[×HH]ØZ]›ÛZ\ÙK˜[
Âˆ^XÝ]Q[˜Ý[Û•ÛÛØ[ÊYÙ[›ØÙ\ÜÙY™\ÜÛœÙK™[˜Ý[ÛœË[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYÊKˆ^XÝ]PÛÛ\]\XÝ[ÛœÊYÙ[›ØÙ\ÜÙY™\ÜÛœÙK˜ÛÛ\]\XÝ[ÛœË[›™\‹Ý]K—ØÛÛ^›ÚYÛÛ\œ›Ü‘›Ü›X]\ŠBˆJNÂˆÛÛœÝÚ[[™\T]Ú™\Ý[ÈH›ØÙ\ÜÙY™\ÜÛœÙKœÚ[XÝ[ÛœË›[™Ýˆ›ØÙ\ÜÙY™\ÜÛœÙK˜\T]ÚXÝ[ÛœË›[™ÝˆÈ]ØZ]^XÝ]TÚ[[™\T]ÚXÝ[ÛœÒ[“Ü™\ŠÂˆYÙ[ˆÛÝ\˜ÙR][\Îˆ›ØÙ\ÜÙY™\ÜÛœÙK›™]Ò][\ËˆÚ[XÝ[ÛœÎˆ›ØÙ\ÜÙY™\ÜÛœÙKœÚ[XÝ[ÛœËˆ\T]ÚXÝ[ÛœÎˆ›ØÙ\ÜÙY™\ÜÛœÙK˜\T]ÚXÝ[ÛœËˆ[›™\‹ˆÝ]KˆÛÛ\œ›Ü‘›Ü›X]\‚ˆJHˆ×NÂˆÛÛœÝÛÛ›Ý›Ý[™™\Ý[ÈH]ØZ]Z[ÛÛ›Ý›Ý[™Ý]]][\ÊYÙ[Ý]K›ØÙ\ÜÙY™\ÜÛœÙK™[˜Ý[Û•ÛÛÓ›Ý›Ý[™ÏÈ×KÛÛ\œ›Ü‘›Ü›X]\ŠNÂˆ›Üˆ
ÛÛœÝ™\Ý[Ùˆ[˜Ý[Û”™\Ý[ÊHÂˆYˆ
™\Ý[\HOOH™[˜Ý[Û—ÛÝ]]ˆ	‰ˆ\œ˜^Kš\Ð\œ˜^J™\Ý[š[\œ\[ÛœÊH	‰ˆ™\Ý[š[\œ\[ÛœË›[™Ýˆ
HÂˆÛÛ[YNÂˆBˆ\[™Y“™]Ê™\Ý[œ[’][JNÂˆBˆ›Üˆ
ÛÛœÝ][HÙˆÛÛ›Ý›Ý[™™\Ý[ÊHÂˆ\[™Y“™]Ê][JNÂˆBˆ›Üˆ
ÛÛœÝ][HÙˆÛÛ\]\”™\Ý[ÊHÂˆ\[™Y“™]Ê][JNÂˆBˆ›Üˆ
ÛÛœÝ][HÙˆÚ[[™\T]Ú™\Ý[ÊHÂˆ\[™Y“™]Ê][JNÂˆBˆÛÛœÝY][Û˜[[\œ\[ÛœÈHÛÛXÝ[\œ\[ÛœÊ×KË‹‹˜ÛÛ\]\”™\Ý[Ë‹‹œÚ[[™\T]Ú™\Ý[×JNÂˆYˆ
›ØÙ\ÜÙY™\ÜÛœÙK›XÜ\›Ý˜[™\]Y\ÝË›[™Ýˆ
HÂˆ]ØZ][™RÜÝYXÜ\›Ý˜[ÊÂˆ™\]Y\ÝÎˆ›ØÙ\ÜÙY™\ÜÛœÙK›XÜ\›Ý˜[™\]Y\ÝËˆYÙ[ˆÝ]Kˆ[˜Ý[Û”™\Ý[Ëˆ\[™Y“™]Ëˆ™\ÛÛ™P\›Ý˜[ˆ
˜]Ò][JHOˆÂˆÛÛœÝ›ÝšY\‘]HH˜]Ò][Kœ›ÝšY\‘]NÂˆÛÛœÝ\›Ý˜[™\]Y\ÝYH˜]Ò][KšYÏÈ›ÝšY\‘]OËšYÂˆYˆ
X\›Ý˜[™\]Y\ÝY
HÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆÝ]K—ØÛÛ^š\ÕÛÛ\›Ý™Y
ÂˆÛÛ˜[YNˆ˜]Ò][K›˜[YKˆØ[Yˆ\›Ý˜[™\]Y\ÝYˆJNÂˆBˆJNÂˆBˆYˆ
›ØÙ\ÜÙY™\ÜÛœÙKš[™Ù™œË›[™Ýˆ
HÂˆ™]\›ˆ]ØZ]^XÝ]R[™Ù™Ø[ÊYÙ[ÜšYÚ[˜[[œ]™TÝ\][\Ë™]Ò][\Ë™]Ô™\ÜÛœÙK›ØÙ\ÜÙY™\ÜÛœÙKš[™Ù™œË[›™\‹Ý]K—ØÛÛ^
NÂˆBˆÛÛœÝÛÛ\]YÝ\H]ØZ]X^X™PÛÛ\]U\›‘œ›ÛUÛÛ™\Ý[ÊÂˆYÙ[ˆ[›™\‹ˆÝ]Kˆ[˜Ý[Û”™\Ý[ËˆÜšYÚ[˜[[œ]ˆ™]Ô™\ÜÛœÙKˆ™TÝ\][\Ëˆ™]Ò][\ËˆY][Û˜[[\œ\[ÛœÂˆJNÂˆYˆ
ÛÛ\]YÝ\
HÂˆ™]\›ˆÛÛ\]YÝ\ÂˆBˆYˆ
›ØÙ\ÜÙY™\ÜÛœÙKš\ÕÛÛÓÜ\›Ý˜[ÕÔ[Š
JHÂˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆˆJNÂˆBˆÛÛœÝY\ÜØYÙR][\ÈH™]Ò][\Ë™š[\Š
][JHOˆ][H[œÝ[˜Ù[Ùˆ[“Y\ÜØYÙSÝ]]][JNÂˆÛÛœÝÝ[X[š[˜[Ý]]HY\ÜØYÙR][\Ë›[™ÝˆÈÙ]^œ›ÛSÝ]]Y\ÜØYÙJY\ÜØYÙR][\ÖÛY\ÜØYÙR][\Ë›[™ÝHWKœ˜]Ò][JHˆ›ÚYÂˆÛÛœÝ\Ô[™[™ÕÛÛÓÜ\›Ý˜[ÈH[˜Ý[Û”™\Ý[ËœÛÛYJ
™\Ý[
HOˆ™\Ý[œ[’][H[œÝ[˜Ù[Ùˆ[•ÛÛ\›Ý˜[][JHY][Û˜[[\œ\[ÛœË›[™ÝˆÂˆYˆ
Z\Ô[™[™ÕÛÛÓÜ\›Ý˜[È	‰ˆY\ÜØYÙR][\Ë›[™Ýˆ
HÂˆÛÛœÝ™Y\Ø[HÙ]™Y\Ø[œ›ÛSÝ]]Y\ÜØYÙJY\ÜØYÙR][\ÖÛY\ÜØYÙR][\Ë›[™ÝHWKœ˜]Ò][JNÂˆYˆ
™Y\Ø[	‰ˆ\[ÙˆÝ[X[š[˜[Ý]]OOH[™Yš[™YŠHÂˆÛÛœÝ™Y\Ø[\œ›ÜˆH™]È[Ù[™Y\Ø[\œ›ÜŠ™Y\Ø[Ý]JNÂˆÛÛœÝ[™\”™\Ý[H]ØZ]™\ÛÛ™T[‘\œ›Ü’[™\ŠÂˆ\œ›ÜŽˆ™Y\Ø[\œ›Ü‹ˆ\œ›Ü’[™\œËˆÛÛ^ˆÝ]K—ØÛÛ^ˆ[‘]NˆZ[\›”[‘\œ›Ü‘]JÝ]KYÙ[ÜšYÚ[˜[[œ]™TÝ\][\Ë™]Ò][\ÊBˆJNÂˆYˆ
Z[™\”™\Ý[
HÂˆ›ÝÈ™Y\Ø[\œ›ÜŽÂˆBˆÛÛœÝÝ]]^H›Ü›X][‘\œ›Ü‘š[˜[Ý]]
YÙ[[™\”™\Ý[™š[˜[Ý]]
NÂˆ˜[Y]T[‘\œ›Ü’[™\‘š[˜[Ý]]
YÙ[Ý]]^
NÂˆYˆ
[™\”™\Ý[š[˜ÛYR[’\ÝÜžHOOH˜[ÙJHÂˆ™]Ò][\Ëœ\Ú
Ü™X]T[‘\œ›Ü‘š[˜[Ý]]][JYÙ[Ý]]^
JNÂˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹Ý]]ˆÝ]]^K™\œ›Ü—Ú[™\ˆŠNÂˆBˆBˆÛÛœÝ\ÓZ\ÜÚ[™ÔÝXÝ\™Yš[˜[Ý]]HYÙ[›Ý]]\HOOH^ˆ	‰ˆ\Ý[X[š[˜[Ý]]ÂˆYˆ
\[ÙˆÝ[X[š[˜[Ý]]OOH[™Yš[™Yˆ\ÓZ\ÜÚ[™ÔÝXÝ\™Yš[˜[Ý]]
HÂˆYˆ
Z\Ô[™[™ÕÛÛÓÜ\›Ý˜[È	‰ˆ\ÓZ\ÜÚ[™ÔÝXÝ\™Yš[˜[Ý]]
HÂˆÛÛœÝÝ]]\œ›ÜˆH™]È[Ù[™Z]š[Ü‘\œ›ÜŠ“[Ù[™]\›™Y›Èš[˜[Ý]]›ÜˆHÝXÝ\™YÝ]]\KˆŠNÂˆÛÛœÝ[™YÝ]]H]ØZ]™\ÛÛ™R[˜[Yš[˜[Ý]]
Âˆ\œ›ÜŽˆÝ]]\œ›Ü‹ˆ\œ›Ü’[™\œËˆYÙ[ˆÜšYÚ[˜[[œ]ˆ™TÝ\][\Ëˆ™]Ò][\ËˆÝ]BˆJNÂˆYˆ
\[Ùˆ[™YÝ]]OOH[™Yš[™YŠHÂˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹Ý]]ˆ[™YÝ]]K™\œ›Ü—Ú[™\ˆŠNÂˆBˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆˆJNÂˆBˆYˆ
Z\Ô[™[™ÕÛÛÓÜ\›Ý˜[ÊHÂˆYˆ
YÙ[›Ý]]\HOOH^ŠHÂˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÂˆ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹ˆÝ]]ˆÝ[X[š[˜[Ý]]ˆJNÂˆBˆYˆ
YÙ[›Ý]]\HOOH^ˆ	‰ˆÝ[X[š[˜[Ý]]
HÂˆÛÛœÝÈ\œÙ\ˆHHÙ]ØÚ[XP[™\œÙ\‘œ›ÛR[œ]\JYÙ[›Ý]]\K™š[˜[ÛÝ]]ŠNÂˆÛÛœÝÙ\œ›ÜLWHH]ØZ]ØY™Q^XÝ]J

HOˆ\œÙ\ŠÝ[X[š[˜[Ý]]
JNÂˆYˆ
\œ›ÜLJHÂˆÛÛœÝÝ]]\œ›Ü“Y\ÜØYÙHH›Ü›X]š[˜[Ý]]\Q\œ›ÜŠ\œ›ÜLJNÂˆY\œ›Ü•ÐÝ\œ™[Ü[ŠÂˆY\ÜØYÙNˆÝ]]\œ›Ü“Y\ÜØYÙKˆ]NˆÂˆ\œ›ÜŽˆÝš[™Ê\œ›ÜLJBˆBˆJNÂˆÛÛœÝÝ]]\œ›ÜˆH™]È[Ù[™Z]š[Ü‘\œ›ÜŠÝ]]\œ›Ü“Y\ÜØYÙJNÂˆÛÛœÝ[™YÝ]]H]ØZ]™\ÛÛ™R[˜[Yš[˜[Ý]]
Âˆ\œ›ÜŽˆÝ]]\œ›Ü‹ˆ\œ›Ü’[™\œËˆYÙ[ˆÜšYÚ[˜[[œ]ˆ™TÝ\][\Ëˆ™]Ò][\ËˆÝ]BˆJNÂˆYˆ
\[Ùˆ[™YÝ]]OOH[™Yš[™YŠHÂˆ›ÝÈÝ]]\œ›ÜŽÂˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹Ý]]ˆ[™YÝ]]K™\œ›Ü—Ú[™\ˆŠNÂˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹Ý]]ˆÝ[X[š[˜[Ý]]JNÂˆBˆBˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÈ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆˆJNÂŸB˜\Þ[˜È[˜Ý[ÛˆX^X™PÛÛ\]U\›‘œ›ÛUÛÛ™\Ý[ÊÈYÙ[[›™\ŽˆÜ[›™\‹Ý]K[˜Ý[Û”™\Ý[ËÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËY][Û˜[[\œ\[ÛœÈH×HJHÂˆÛÛœÝÛÛÝ]ÛÛYHH]ØZ]ÚXÚÑ›Ü‘š[˜[Ý]]œ›ÛUÛÛÊYÙ[[˜Ý[Û”™\Ý[ËÝ]KY][Û˜[[\œ\[ÛœÊNÂˆYˆ
ÛÛÝ]ÛÛYKš\Ñš[˜[Ý]]
HÂˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÂˆ\Nˆ›™^ÜÝ\Ùš[˜[ÛÝ]]‹ˆÝ]]ˆÛÛÝ]ÛÛYK™š[˜[Ý]]ˆJNÂˆBˆYˆ
ÛÛÝ]ÛÛYKš\Ò[\œ\Y
HÂˆ™]\›ˆ™]ÈÚ[™ÛTÝ\™\Ý[
ÜšYÚ[˜[[œ]™]Ô™\ÜÛœÙK™TÝ\][\Ë™]Ò][\ËÂˆ\Nˆ›™^ÜÝ\Ú[\œ\[Ûˆ‹ˆ]NˆÂˆ[\œ\[ÛœÎˆÛÛÝ]ÛÛYKš[\œ\[ÛœÂˆBˆJNÂˆBˆ™]\›ˆ[ÂŸB˜\ˆQUSÕÓÓÓ“ÕÑ“ÕS‘ÓQTÔÐQÑKT“ÕSÒUSWÕTTÎÂ˜\ˆ[š]Ý\›”™\ÛÛ][ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ý\›”™\ÛÛ][Û‹›ZœÈŠ
HÂˆ[š]Þ›Ù

NÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]Ú][\ÌŠ
NÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]ÛY\ÜØYÙ\Ê
NÂˆ[š]ÝÛÛÊ
NÂˆ[š]ÜØY™Q^XÝ]J
NÂˆ[š]ØÛÛ^

NÂˆ[š]ÜÝ\Ê
NÂˆ[š]ÝÛÛ^XÝ][ÛŠ
NÂˆ[š]ÛXÜ\›Ý˜[Ê
NÂˆ[š]ÝÛÛY[]J
NÂˆ[š]Ù\œ›Ü’[™\œÊ
NÂˆ[š]Ú][\Ê
NÂˆQUSÕÓÓÓ“ÕÑ“ÕS‘ÓQTÔÐQÑHH
ÛÛ˜[YJHOˆÛÛ	ÉÝÛÛ˜[Y_IÈ›Ý›Ý[™˜ÂˆT“ÕSÒUSWÕTTÈHÂˆ™[˜Ý[Û—ØØ[‹ˆ˜ÛÛ\]\—ØØ[‹ˆšÜÝYÝÛÛØØ[‹ˆœÚ[ØØ[‹ˆ˜\WÜ]ÚØØ[‚ˆNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ý˜XÚ[™Ë›ZœÂ™[˜Ý[ÛˆÙ]˜XÚ[™Ê˜XÚ[™Ñ\ØX›Y˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆYˆ
˜XÚ[™Ñ\ØX›Y
HÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
˜XÙR[˜ÛYTÙ[œÚ]]™Q]JHÂˆ™]\›ˆYNÂˆBˆ™]\›ˆ™[˜X›YÝÚ]Ý]Ù]HŽÂŸB™[˜Ý[Ûˆ™X˜\ÙTÜ[ÚZ[ŠÜ[‹˜XÙJHÂˆÛÛœÝ™]š[Ý\ÔÜ[ˆHÜ[‹œ™]š[Ý\ÔÜ[ˆÈ™X˜\ÙTÜ[ÚZ[ŠÜ[‹œ™]š[Ý\ÔÜ[‹˜XÙJHˆ›ÚYÂˆÛÛœÝ\™[H™]š[Ý\ÔÜ[ˆÏÈ˜XÙNÂˆÛÛœÝ™X˜\ÙYÜ[ˆHÙ]ÛØ˜[˜XÙT›ÝšY\Š
K˜Ü™X]TÜ[ŠÂˆÜ[’YˆÜ[‹œÜ[’Yˆ\™[YˆÜ[‹œ\™[YÏÈ›ÚYˆÝ\Y]ˆÜ[‹œÝ\Y]ÏÈ›ÚYˆ[™Y]ˆÜ[‹™[™Y]ÏÈ›ÚYˆ]NˆÜ[‹œÜ[‘]Kˆ\œ›ÜŽˆÜ[‹™\œ›ÜˆÏÈ›ÚYˆ˜XÚ[™Ð\RÙ^NˆÜ[‹˜XÚ[™Ð\RÙ^BˆK\™[
NÂˆ™X˜\ÙYÜ[‹œ™]š[Ý\ÔÜ[ˆH™]š[Ý\ÔÜ[ŽÂˆ™]\›ˆ™X˜\ÙYÜ[ŽÂŸB™[˜Ý[Ûˆ\U˜XÙSÝ™\œšY\Ê˜XÙKÝ\œ™[Ü[‹Ý™\œšY\ÊHÂˆÛÛœÝ˜XÙRYÝ™\œšYHHÝ™\œšY\Ë˜XÙRYOOH›ÚY	‰ˆÝ™\œšY\Ë˜XÙRYOOH˜XÙK˜XÙRYÂˆÛÛœÝ˜XÚ[™Ð\RÙ^SÝ™\œšYHHÝ™\œšY\Ë˜XÚ[™Ð\RÙ^HOOH›ÚY	‰ˆÝ™\œšY\Ë˜XÚ[™Ð\RÙ^HOOH˜XÙK˜XÚ[™Ð\RÙ^NÂˆÛÛœÝ˜XÙSY]Y]SÝ™\œšYHHÝ™\œšY\Ë˜XÙSY]Y]HOOH›ÚY	‰ˆÝ™\œšY\Ë˜XÙSY]Y]HOOH˜XÙK›Y]Y]NÂˆYˆ
Ý™\œšY\Ë˜XÙRYOOH›ÚY
HÂˆ˜XÙK˜XÙRYHÝ™\œšY\Ë˜XÙRYÂˆBˆYˆ
Ý™\œšY\ËÛÜšÙ›ÝÓ˜[YHOOH›ÚY
HÂˆ˜XÙK›˜[YHHÝ™\œšY\ËÛÜšÙ›ÝÓ˜[YNÂˆBˆYˆ
Ý™\œšY\Ë™Ü›Ý\YOOH›ÚY
HÂˆ˜XÙK™Ü›Ý\YHÝ™\œšY\Ë™Ü›Ý\YÏÈ[ÂˆBˆYˆ
Ý™\œšY\Ë˜XÙSY]Y]HOOH›ÚY
HÂˆ˜XÙK›Y]Y]HHÝ™\œšY\Ë˜XÙSY]Y]NÂˆBˆYˆ
Ý™\œšY\Ë˜XÚ[™Ð\RÙ^HOOH›ÚY
HÂˆ˜XÙK˜XÚ[™Ð\RÙ^HHÝ™\œšY\Ë˜XÚ[™Ð\RÙ^NÂˆBˆYˆ
Ý\œ™[Ü[ˆ	‰ˆ
˜XÙRYÝ™\œšYH˜XÚ[™Ð\RÙ^SÝ™\œšYH˜XÙSY]Y]SÝ™\œšYJJHÂˆ™]\›ˆÈ˜XÙKÝ\œ™[Ü[Žˆ™X˜\ÙTÜ[ÚZ[ŠÝ\œ™[Ü[‹˜XÙJHNÂˆBˆ™]\›ˆÈ˜XÙKÝ\œ™[Ü[ˆNÂŸB™[˜Ý[Ûˆ[œÝ\™PYÙ[Ü[Š\˜[\ÊHÂˆÛÛœÝÈYÙ[[™Ù™œËÛÛËÝ\œ™[Ü[ˆHH\˜[\ÎÂˆÛÛœÝ^\Ý[™ÔÜ[ˆHÝ\œ™[Ü[ŽÂˆYˆ
^\Ý[™ÔÜ[ŠHÂˆ^\Ý[™ÔÜ[‹œÜ[‘]Kš[™Ù™œÈH[™Ù™œË›X\


HOˆ˜YÙ[˜[YJNÂˆ^\Ý[™ÔÜ[‹œÜ[‘]KÛÛÈHÛÛË›X\


HOˆ›˜[YJNÂˆ™]\›ˆ^\Ý[™ÔÜ[ŽÂˆBˆÛÛœÝ[™Ù™“˜[Y\ÈH[™Ù™œË›X\


HOˆ˜YÙ[˜[YJNÂˆÛÛœÝÜ[ˆHÜ™X]PYÙ[Ü[ŠÂˆ]NˆÂˆ˜[YNˆYÙ[›˜[YKˆ[™Ù™œÎˆ[™Ù™“˜[Y\ËˆÛÛÎˆÛÛË›X\


HOˆ›˜[YJKˆÝ]]Ý\NˆYÙ[›Ý]]ØÚ[XS˜[YBˆBˆJNÂˆÜ[‹œÝ\

NÂˆÙ]Ý\œ™[Ü[ŠÜ[ŠNÂˆ™]\›ˆÜ[ŽÂŸB˜\ˆ[š]Ý˜XÚ[™ÌˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ý˜XÚ[™Ë›ZœÈŠ
HÂˆ[š]ØÛÛ^

NÂˆ[š]Ý˜XÚ[™Ê
NÂˆ[š]Ü›ÝšY\Š
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ý\›”™\\˜][Û‹›ZœÂ˜\Þ[˜È[˜Ý[Ûˆ™\\™U\›ŠÜ[ÛœÊHÂˆÛÛœÝÈÝ]K[œ]Ù[™\˜]Y][\Ë\Ô™\Ý[YYÝ]K™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKÛÛ[Z[™Ò[\œ\Y\›‹Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹[œ]ÝX\™˜Z[YœËÝX\™˜Z[[™\œË[Z]YÙ[Ý\HHÜ[ÛœÎÂˆÛÛœÝÈ\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[ÛˆHH™YÚ[•\›ŠÝ]KÂˆ\Ô™\Ý[YYÝ]Kˆ™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKˆÛÛ[Z[™Ò[\œ\Y\›‚ˆJNÂˆYˆ
Ý]K—ÛX^\›œÈOOH[	‰ˆÝ]K—ØÝ\œ™[\›ˆˆÝ]K—ÛX^\›œÊHÂˆÝ]K—ØÝ\œ™[YÙ[Ü[ËœÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ“X^\›œÈ^ÙYYY‹ˆ]NˆÈX^Ý\›œÎˆÝ]K—ÛX^\›œÈBˆJNÂˆ›ÝÈ™]ÈX^\›œÑ^ÙYYY\œ›ÜŠX^\›œÈ
	ÜÝ]K—ÛX^\›œßJH^ÙYYYÝ]JNÂˆBˆÙÙÙ\—ÙY˜][™XYÊ[›š[™ÈYÙ[	ÜÝ]K—ØÝ\œ™[YÙ[›˜[Y_H
\›ˆ	ÜÝ]K—ØÝ\œ™[\›ŸJX
NÂˆÝ]KœÙ]Ý\œ™[YÙ[Ü[Š[œÝ\™PYÙ[Ü[ŠÂˆYÙ[ˆÝ]K—ØÝ\œ™[YÙ[ˆ[™Ù™œÎˆ×KˆÛÛÎˆ×KˆÝ\œ™[Ü[ŽˆÝ]K—ØÝ\œ™[YÙ[Ü[‚ˆJJNÂˆÛÛœÝÈ\˜[[ÝX\™˜Z[›ÛZ\ÙHHH]ØZ][’[œ]ÝX\™˜Z[Ñ›Ü•\›ŠÝ]K[œ]ÝX\™˜Z[YœË\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[Û‹ÝX\™˜Z[[™\œÊNÂˆÛÛœÝ\›’[œ]HÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\ˆÈÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™\\™R[œ]
[œ]Ù[™\˜]Y][\ËÙ]X[˜YÙYÛÛ™\œØ][Û”Ý\[Y[[][\ÊÝ]JJHˆ™\\™S[Ù[[œ]][\Ê[œ]Ù[™\˜]Y][\ËÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞJNÂˆYˆ
Ý]K—Û›ÐXÝ]™PYÙ[[ŠHÂˆÝ]K—ØÝ\œ™[YÙ[™[Z]
˜YÙ[ÜÝ\‹Ý]K—ØÛÛ^Ý]K—ØÝ\œ™[YÙ[\›’[œ]
NÂˆ[Z]YÙ[Ý\ËŠÝ]K—ØÛÛ^Ý]K—ØÝ\œ™[YÙ[\›’[œ]
NÂˆBˆ™]\›ˆÂˆ\›’[œ]ˆ\˜[[ÝX\™˜Z[›ÛZ\ÙBˆNÂŸB™[˜Ý[ÛˆÙ]X[˜YÙYÛÛ™\œØ][Û”Ý\[Y[[][\ÊÝ]JHÂˆÛÛœÝ›ØÙ\ÜÙY™\ÜÛœÙHHÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙNÂˆÛÛœÝ[™Ù™œÈH›ØÙ\ÜÙY™\ÜÛœÙOËš[™Ù™œÎÂˆYˆ
Z[™Ù™œÈ[™Ù™œË›[™ÝHJHÂˆ™]\›ˆ×NÂˆBˆÛÛœÝXØÙ\YØ[YH[™Ù™œÖÌOËÛÛØ[˜Ø[YÂˆÛÛœÝXØÙ\Y[™Ù™“Ý]]Ý[™\Ù[H\[ÙˆXØÙ\YØ[YOOHœÝš[™Èˆ	‰ˆÝ]K—ÙÙ[™\˜]Y][\ËœÛÛYJ
][JHOˆ][H[œÝ[˜Ù[Ùˆ[’[™Ù™“Ý]]][H	‰ˆ][Kœ˜]Ò][K˜Ø[YOOHXØÙ\YØ[Y
NÂˆYˆ
XXØÙ\Y[™Ù™“Ý]]Ý[™\Ù[
HÂˆ™]\›ˆ×NÂˆBˆÛÛœÝØXÚYˆHX[˜YÙYÛÛ™\œØ][Û”Ý\[Y[[][\ÐØXÚK™Ù]
›ØÙ\ÜÙY™\ÜÛœÙJNÂˆYˆ
ØXÚYŠHÂˆ™]\›ˆØXÚYŽÂˆBˆÛÛœÝ][\ÈH[™Ù™œËœÛXÙJJK›X\

ÈÛÛØ[JHOˆÙ]ÛÛØ[Ý]]][JÛÛØ[QÓ“Ô‘QÒS‘Ñ‘—ÓÕUUÓQTÔÐQÑJJNÂˆX[˜YÙYÛÛ™\œØ][Û”Ý\[Y[[][\ÐØXÚKœÙ]
›ØÙ\ÜÙY™\ÜÛœÙK][\ÊNÂˆ™]\›ˆ][\ÎÂŸB˜\Þ[˜È[˜Ý[Ûˆ[’[œ]ÝX\™˜Z[Ñ›Ü•\›ŠÝ]K[›™\‘ÝX\™˜Z[Ë\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[Û‹[™\œÈHßJHÂˆYˆ
Ý]K—ØÝ\œ™[\›ˆOOHH\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[ÛŠHÂˆ™]\›ˆßNÂˆBˆÛÛœÝÝX\™˜Z[YœÈHZ[[œ]ÝX\™˜Z[Yš[š][ÛœÊÝ]K[›™\‘ÝX\™˜Z[ÊNÂˆÛÛœÝÝX\™˜Z[ÈHÜ][œ]ÝX\™˜Z[ÊÝX\™˜Z[YœÊNÂˆYˆ
ÝX\™˜Z[Ë˜›ØÚÚ[™Ë›[™Ýˆ
HÂˆ]ØZ][’[œ]ÝX\™˜Z[ÊÝ]KÝX\™˜Z[Ë˜›ØÚÚ[™ÊNÂˆBˆYˆ
ÝX\™˜Z[Ëœ\˜[[›[™Ýˆ
HÂˆ[™\œË›Û”\˜[[Ý\ËŠ
NÂˆÛÛœÝ\˜[[ÝX\™˜Z[›ÛZ\ÙHH[’[œ]ÝX\™˜Z[ÊÝ]KÝX\™˜Z[Ëœ\˜[[ÈÛ‘\œ›Ü“ØœÙ\™Yˆ[™\œË›Û”\˜[[\œ›ÜˆJK˜Ø]Ú


HOˆ×JNÂˆ™]\›ˆÈ\˜[[ÝX\™˜Z[›ÛZ\ÙHNÂˆBˆ™]\›ˆßNÂŸB™[˜Ý[Ûˆ™YÚ[•\›ŠÝ]KÜ[ÛœÊHÂˆÛÛœÝ\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[ÛˆHÜ[ÛœËš\Ô™\Ý[YYÝ]H	‰ˆÜ[ÛœË˜ÛÛ[Z[™Ò[\œ\Y\›ŽÂˆÛÛœÝ™\Ý[Z[™Õ\›’[”›ÙÜ™\ÜÈHÜ[ÛœËš\Ô™\Ý[YYÝ]H	‰ˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈOOHYNÂˆYˆ
Z\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[Ûˆ	‰ˆ\™\Ý[Z[™Õ\›’[”›ÙÜ™\ÜÊHÂˆÝ]K—ØÝ\œ™[\›ŠÊÎÂˆYˆ
[Ü[ÛœËš\Ô™\Ý[YYÝ]H[Ü[ÛœËœ™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YJHÂˆÝ]Kœ™\Ù]\›”\œÚ\Ý[˜ÙJ
NÂˆH[ÙHYˆ
Ý]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[ˆÝ]K—ÙÙ[™\˜]Y][\Ë›[™Ý
HÂˆÝ]Kœ™\Ù]\›”\œÚ\Ý[˜ÙJ
NÂˆBˆBˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈHYNÂˆ™]\›ˆÈ\Ô™\Ý[Z[™Ñœ›ÛR[\œ\[ÛˆNÂŸB˜\ˆQÓ“Ô‘QÒS‘Ñ‘—ÓÕUUÓQTÔÐQÑKX[˜YÙYÛÛ™\œØ][Û”Ý\[Y[[][\ÐØXÚNÂ˜\ˆ[š]Ý\›”™\\˜][ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ý\›”™\\˜][Û‹›ZœÈŠ
HÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]Ú][\ÌŠ
NÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]ÙÝX\™˜Z[Ê
NÂˆ[š]Ú][\Ê
NÂˆ[š]Ý˜XÚ[™ÌŠ
NÂˆ[š]ÝÛÛ^XÝ][ÛŠ
NÂˆQÓ“Ô‘QÒS‘Ñ‘—ÓÕUUÓQTÔÐQÑHH“][\H[™Ù™œÈ]XÝYYÛ›Üš[™È\ÈÛ™KˆŽÂˆX[˜YÙYÛÛ™\œØ][Û”Ý\[Y[[][\ÐØXÚHHÊˆ×ÔT‘W×È
‹È™]ÈÙXZÓX\

NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Û[Ù[™\\˜][Û‹›ZœÂ™[˜Ý[ÛˆÙ]ÛÛ\]\’[š]X\
Ý]JHÂˆ][š]X\HÛÛ\]\’[š]›ÛZ\Ù\ÐžT[”Ý]K™Ù]
Ý]JNÂˆYˆ
Z[š]X\
HÂˆ[š]X\HÊˆ×ÔT‘W×È
‹È™]ÈÙXZÓX\

NÂˆÛÛ\]\’[š]›ÛZ\Ù\ÐžT[”Ý]KœÙ]
Ý]K[š]X\
NÂˆBˆ™]\›ˆ[š]X\ÂŸB˜\Þ[˜È[˜Ý[Ûˆ[š]ÛÛ\]\“Û˜ÙJÛÛ\]\‹Ý]JHÂˆYˆ
\[ÙˆÛÛ\]\‹š[š][ˆOOH™[˜Ý[ÛˆŠHÂˆ™]\›ŽÂˆBˆÛÛœÝ[š]X\HÙ]ÛÛ\]\’[š]X\
Ý]JNÂˆÛÛœÝ^\Ý[™ÈH[š]X\™Ù]
ÛÛ\]\ŠNÂˆYˆ
^\Ý[™ÊHÂˆ]ØZ]^\Ý[™ÎÂˆ™]\›ŽÂˆBˆÛÛœÝ[š]›ÛZ\ÙHH
\Þ[˜È

HOˆÂˆ]ØZ]ÛÛ\]\‹š[š][ËŠÝ]K—ØÛÛ^
NÂˆJJ
NÂˆ[š]X\œÙ]
ÛÛ\]\‹[š]›ÛZ\ÙJNÂˆžHÂˆ]ØZ][š]›ÛZ\ÙNÂˆHØ]Ú
\œ›ÜLJHÂˆ[š]X\™[]JÛÛ\]\ŠNÂˆ›ÝÈ\œ›ÜLNÂˆBŸB˜\Þ[˜È[˜Ý[Ûˆ™\\™PYÙ[\Y˜XÝÊÝ]K^XÝ][ÛYÙ[HÝ]K—ØÝ\œ™[YÙ[
HÂˆÛÛœÝØ\Xš[]Y\ÈH]ØZ]ÛÛXÝYÙ[Ø\Xš[]Y\ÊÝ]K^XÝ][ÛYÙ[
NÂˆ˜[Y]PÛY[ÛÛÙX\˜ÚÝ\Ü
Ø\Xš[]Y\ËÛÛÊNÂˆ]ØZ]Ø\›U\ÛÛ\]\•ÛÛÊØ\Xš[]Y\ËÛÛËÝ]K—ØÛÛ^
NÂˆ]ØZ][š]X[^™PÛÛ\]\•ÛÛÊØ\Xš[]Y\ËÛÛËÝ]JNÂˆÝ]KœÙ]Ý\œ™[YÙ[Ü[Š[œÝ\™PYÙ[Ü[ŠÂˆYÙ[ˆ^XÝ][ÛYÙ[ˆ[™Ù™œÎˆØ\Xš[]Y\Ëš[™Ù™œËˆÛÛÎˆØ\Xš[]Y\ËÛÛËˆÝ\œ™[Ü[ŽˆÝ]K—ØÝ\œ™[YÙ[Ü[‚ˆJJNÂˆ™]\›ˆÂˆ‹‹˜Ø\Xš[]Y\ËˆÙ\šX[^™Y[™Ù™œÎˆØ\Xš[]Y\Ëš[™Ù™œË›X\

[™Ù™ŒŠHOˆÙ\šX[^™R[™Ù™Š[™Ù™ŒŠJKˆÙ\šX[^™YÛÛÎˆØ\Xš[]Y\ËÛÛË›X\

ÛÛŠHOˆÙ\šX[^™UÛÛ
ÛÛŠJKˆÛÛÑ^XÚ]T›ÝšYYˆ^XÝ][ÛYÙ[š\Ñ^XÚ]ÛÛÛÛ™šYÊ
BˆNÂŸB˜\Þ[˜È[˜Ý[ÛˆÛÛXÝYÙ[Ø\Xš[]Y\ÊÝ]K^XÝ][ÛYÙ[
HÂˆÛÛœÝ[™Ù™œÈH]ØZ]^XÝ][ÛYÙ[™Ù][˜X›Y[™Ù™œÊÝ]K—ØÛÛ^
NÂˆÛÛœÝÛÛ™šYÝ\™YÛÛÈH]ØZ]^XÝ][ÛYÙ[™Ù][ÛÛÊÝ]K—ØÛÛ^
NÂˆÛÛœÝ[[YSØYYÛÛÈHÝ]K™Ù]ÛÛÙX\˜Ú[[YUÛÛÊÝ]K—ØÝ\œ™[YÙ[
NÂˆ™]\›ˆÈ[™Ù™œËÛÛÎˆË‹‹˜ÛÛ™šYÝ\™YÛÛË‹‹œ[[YSØYYÛÛ×HNÂŸB˜\Þ[˜È[˜Ý[ÛˆØ\›U\ÛÛ\]\•ÛÛÊÛÛË[ÛÛ^
HÂˆÛÛœÝÛÛ\]\•ÛÛÈHÛÛË™š[\Š
ÛÛŠHOˆÛÛ‹\HOOH˜ÛÛ\]\ˆŠNÂˆYˆ
ÛÛ\]\•ÛÛË›[™ÝOOH
HÂˆ™]\›ŽÂˆBˆ]ØZ]›ÛZ\ÙK˜[
ÛÛ\]\•ÛÛË›X\
\Þ[˜È
ÛÛŠHOˆÂˆ]ØZ]™\ÛÛ™PÛÛ\]\ŠÈÛÛˆÛÛ‹[ÛÛ^JNÂˆJJNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[š]X[^™PÛÛ\]\•ÛÛÊÛÛËÝ]JHÂˆÛÛœÝÛÛ\]\•ÛÛÈHÛÛË™š[\Š
ÛÛŠHOˆÛÛ‹\HOOH˜ÛÛ\]\ˆŠNÂˆYˆ
ÛÛ\]\•ÛÛË›[™ÝOOH
HÂˆ™]\›ŽÂˆBˆ]ØZ]›ÛZ\ÙK˜[
ÛÛ\]\•ÛÛË›X\
\Þ[˜È
ÛÛŠHOˆÂˆÛÛœÝÛÛ\]\ˆH]ØZ]™\ÛÛ™PÛÛ\]\ŠÂˆÛÛˆÛÛ‹ˆ[ÛÛ^ˆÝ]K—ØÛÛ^ˆJNÂˆ]ØZ][š]ÛÛ\]\“Û˜ÙJÛÛ\]\‹Ý]JNÂˆJJNÂŸB˜\ˆÛÛ\]\’[š]›ÛZ\Ù\ÐžT[”Ý]NÂ˜\ˆ[š]Û[Ù[™\\˜][ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Û[Ù[™\\˜][Û‹›ZœÈŠ
HÂˆ[š]ÝÛÛ

NÂˆ[š]ÜÙ\šX[^™J
NÂˆ[š]Ý˜XÚ[™ÌŠ
NÂˆ[š]ÝÛÛÙX\˜ÚŠ
NÂˆÛÛ\]\’[š]›ÛZ\Ù\ÐžT[”Ý]HHÊˆ×ÔT‘W×È
‹È™]ÈÙXZÓX\

NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ü[“ÛÜ›ZœÂ™[˜Ý[Ûˆ\U\›”™\Ý[
Ü[ÛœÊHÂˆÛÛœÝÈÝ]K\›”™\Ý[YÙ[ÛÛÕ\ÙY™\Ù]\›”\œÚ\Ý[˜ÙKÛ”Ý\][\ÈHHÜ[ÛœÎÂˆÛ”Ý\][\ÏËŠ\›”™\Ý[
NÂˆÝ]K—ÝÛÛ\ÙU˜XÚÙ\‹˜YÛÛ\ÙJYÙ[ÛÛÕ\ÙY
NÂˆÝ]K—ÛÜšYÚ[˜[[œ]H\›”™\Ý[›ÜšYÚ[˜[[œ]ÂˆÝ]K—ÙÙ[™\˜]Y][\ÈH\›”™\Ý[™Ù[™\˜]Y][\ÎÂˆYˆ
™\Ù]\›”\œÚ\Ý[˜ÙH	‰ˆ\›”™\Ý[›™^Ý\\HOOH›™^ÜÝ\Ü[—ØYØZ[ˆŠHÂˆÝ]Kœ™\Ù]\›”\œÚ\Ý[˜ÙJ
NÂˆBˆÝ]K—ØÝ\œ™[Ý\H\›”™\Ý[›™^Ý\ÂˆÝ]K—Ùš[˜[Ý]]ÛÝ\˜ÙHH\›”™\Ý[›™^Ý\\HOOH›™^ÜÝ\Ùš[˜[ÛÝ]]ˆÈ\›”™\Ý[™š[˜[Ý]]ÛÝ\˜ÙHÏÈ\›—Ü™\ÛÛ][Ûˆˆˆ›ÚYÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\Ý[YR[\œ\Y\›ŠÜ[ÛœÊHÂˆÛÛœÝÈÝ]K[›™\‹ÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYËÛ”Ý\][\ÈHHÜ[ÛœÎÂˆÛÛœÝ\›”™\Ý[H]ØZ]™\ÛÛ™R[\œ\Y\›ŠÝ]K—ØÝ\œ™[YÙ[Ý]K—ÛÜšYÚ[˜[[œ]Ý]K—ÙÙ[™\˜]Y][\ËÝ]K—Û\Ý\›”™\ÜÛœÙKÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙK[›™\‹Ý]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYÊNÂˆ\U\›”™\Ý[
ÂˆÝ]Kˆ\›”™\Ý[ˆYÙ[ˆÝ]K—ØÝ\œ™[YÙ[ˆÛÛÕ\ÙYˆÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙOËÛÛÕ\ÙYÏÈ×Kˆ™\Ù]\›”\œÚ\Ý[˜ÙNˆ˜[ÙKˆÛ”Ý\][\ÂˆJNÂˆYˆ
\›”™\Ý[›™^Ý\\HOOH›™^ÜÝ\Ú[\œ\[ÛˆŠHÂˆ™]\›ˆÈ™^Ý\ˆ\›”™\Ý[›™^Ý\XÝ[ÛŽˆœ™]\›—Ú[\œ\[ÛˆˆNÂˆBˆYˆ
\›”™\Ý[›™^Ý\\HOOH›™^ÜÝ\Ü[—ØYØZ[ˆŠHÂˆ™]\›ˆÈ™^Ý\ˆ\›”™\Ý[›™^Ý\XÝ[ÛŽˆœ™\[—Ý\›ˆˆNÂˆBˆ™]\›ˆÈ™^Ý\ˆ\›”™\Ý[›™^Ý\XÝ[ÛŽˆ˜Y˜[˜ÙWÜÝ\ˆNÂŸB™[˜Ý[Ûˆ[™R[\œ\YÝ]ÛÛYJÜ[ÛœÊHÂˆÛÛœÝÈÝ]KÝ]ÛÛYKÙ]ÛÛ[Z[™Ò[\œ\Y\›ˆHHÜ[ÛœÎÂˆÝÚ]Ú
Ý]ÛÛYK˜XÝ[ÛŠHÂˆØ\ÙHœ™]\›—Ú[\œ\[ÛˆŽ‚ˆÝ]K—ØÝ\œ™[Ý\HÝ]ÛÛYK›™^Ý\Âˆ™]\›ˆÈÚÝ[™]\›ŽˆYKÚÝ[ÛÛ[YNˆ˜[ÙHNÂˆØ\ÙHœ™\[—Ý\›ˆŽ‚ˆÙ]ÛÛ[Z[™Ò[\œ\Y\›ŠYJNÂˆÝ]K—ØÝ\œ™[Ý\H›ÚYÂˆ™]\›ˆÈÚÝ[™]\›Žˆ˜[ÙKÚÝ[ÛÛ[YNˆYHNÂˆØ\ÙH˜Y˜[˜ÙWÜÝ\Ž‚ˆÙ]ÛÛ[Z[™Ò[\œ\Y\›Š˜[ÙJNÂˆÝ]K—ØÝ\œ™[Ý\HÝ]ÛÛYK›™^Ý\Âˆ™]\›ˆÈÚÝ[™]\›Žˆ˜[ÙKÚÝ[ÛÛ[YNˆ˜[ÙHNÂˆY˜][ˆÂˆÛÛœÝÙ^]\Ý]™HHÝ]ÛÛYK˜XÝ[ÛŽÂˆ›ÝÈ™]È\œ›ÜŠ[š[™Y[\œ\[ÛˆÝ]ÛÛYNˆ	×Ù^]\Ý]™_X
NÂˆBˆBŸB˜\ˆ[š]Ü[“ÛÜH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ü[“ÛÜ›ZœÈŠ
HÂˆ[š]Ý\›”™\ÛÛ][ÛŠ
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜØ[™›Þ›ZœÂ˜\Þ[˜È[˜Ý[Ûˆ™\\™TØ[™›Þ[\œ\Y\›”™\Ý[YJ\™ÜÊHÂˆÛÛœÝÈÝ\[™ÐYÙ[Ý]KØ[™›Þ[[YK[ÛÛ™šYÓ[Ù[HH\™ÜÎÂˆÙÙÙ\—ÙY˜][™XYÊÛÛ[Z[™Èœ›ÛH[\œ\[ÛˆŠNÂˆYˆ
\Ý]K—Û\Ý\›”™\ÜÛœÙH\Ý]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙJHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ“›È[Ù[™\ÜÛœÙH›Ý[™[ˆ™]š[Ý\ÈÝ]H‹Ý]JNÂˆBˆÛÛœÝ™\]Z\™\Ñ^XÝ][Û•ÛÛ™ZY˜][ÛˆH›ØÙ\ÜÙY™\ÜÛœÙT™\]Z\™\Ñ^XÝ][Û•ÛÛ™ZY˜][ÛŠÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙJNÂˆYˆ
Z\ÔØ[™›ÞYÙ[
Ý]K—ØÝ\œ™[YÙ[
H	‰ˆ\™\]Z\™\Ñ^XÝ][Û•ÛÛ™ZY˜][ÛŠHÂˆ™]\›ŽÂˆBˆÛÛœÝ™\Ý[YY™\Ù\™YÙ\ÜÚ[ÛœÈH]ØZ]Ø[™›Þ[[YK˜YÜ™\Ù\™YÝÛ™YÙ\ÜÚ[ÛœÊ
NÂˆYˆ
™\Ý[YY™\Ù\™YÙ\ÜÚ[ÛœÈ™\]Z\™\Ñ^XÝ][Û•ÛÛ™ZY˜][ÛŠHÂˆ]ØZ]™ZY˜]R[\œ\Y\›‘^XÝ][Û•ÛÛÊÂˆÝ\[™ÐYÙ[ˆÝ]KˆØ[™›Þ[[YKˆ[ÛÛ™šYÓ[Ù[ˆ›Ü˜ÙNˆ™\Ý[YY™\Ù\™YÙ\ÜÚ[ÛœÂˆJNÂˆBŸB˜\Þ[˜È[˜Ý[Ûˆš[˜[^™TØ[™›Þ[[YJ\™ÜÊHÂˆÛÛœÝÈÝ]KØ[™›Þ[[YK™\Ù\™TÙ\ÜÚ[ÛœÑ›Ü’[\œ\[Û‹[‘\œ›Ü‹Ü›Ý\YY[[ÜžPÛÛ^[YÙ[HH\™ÜÎÂˆYˆ
\™\Ù\™TÙ\ÜÚ[ÛœÑ›Ü’[\œ\[ÛŠHÂˆžHÂˆ]ØZ]\ÜÜÙT™\ÛÛ™YÛÛ\]\œÊÈ[ÛÛ^ˆÝ]K—ØÛÛ^JNÂˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][Ø\›Š˜Z[YÈ\ÜÜÙHÛÛ\]\œÈY\ˆ[Žˆ	Ù\œ›ÜL_X
NÂˆBˆBˆ]ØZ]Ø[™›Þ[[YK™[œ]Y]YSY[[ÜžQÙ[™\˜][ÛŠÝ]KÂˆ^Ù\[ÛŽˆ[‘\œ›Ü‹ˆÜ›Ý\Yˆ[œ]Ý™\œšYNˆY[[ÜžPÛÛ^Ëš[œ]Ý™\œšYOËŠ
KˆÙÔÙ\ÜÚ[Û’YˆY[[ÜžPÛÛ^ËœÙÔÙ\ÜÚ[Û’Yˆ[YÙ[ˆ\Þ[˜È
YÙ[[œ][“Ü[ÛœÊHOˆ]ØZ][YÙ[
YÙ[[œ][“Ü[ÛœÊBˆJNÂˆžHÂˆ]ØZ]Ø[™›Þ[[YK˜ÛX[\
Ý]KÂˆ™\Ù\™SÝÛ™YÙ\ÜÚ[ÛœÎˆ™\Ù\™TÙ\ÜÚ[ÛœÑ›Ü’[\œ\[Û‚ˆJNÂˆHš[˜[HÂˆYˆ
Ý]K—ØÝ\œ™[YÙ[Ü[ŠHÂˆžHÂˆYˆ
\™\Ù\™TÙ\ÜÚ[ÛœÑ›Ü’[\œ\[ÛŠHÂˆÝ]K—ØÝ\œ™[YÙ[Ü[‹™[™

NÂˆBˆHš[˜[HÂˆ™\Ù]Ý\œ™[Ü[Š
NÂˆBˆBˆBŸB˜\Þ[˜È[˜Ý[Ûˆ™ZY˜]R[\œ\Y\›‘^XÝ][Û•ÛÛÊ\™ÜÊHÂˆÛÛœÝÈÝ\[™ÐYÙ[Ý]KØ[™›Þ[[YK[ÛÛ™šYÓ[Ù[›Ü˜ÙHHH\™ÜÎÂˆYˆ
Y›Ü˜ÙH	‰ˆ\›ØÙ\ÜÙY™\ÜÛœÙT™\]Z\™\Ñ^XÝ][Û•ÛÛ™ZY˜][ÛŠÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙJJHÂˆ™]\›ŽÂˆBˆÛÛœÝ™\\™YØ[™›ÞYÙ[H]ØZ]Ø[™›Þ[[YKœ™\\™PYÙ[
ÂˆÝ\œ™[YÙ[ˆÝ]K—ØÝ\œ™[YÙ[ˆ\›’[œ]ˆ×Kˆ[ÛÛ™šYÓ[Ù[ˆJNÂˆÛÛœÝ\Y˜XÝÈH]ØZ]™\\™PYÙ[\Y˜XÝÊÝ]K™\\™YØ[™›ÞYÙ[™^XÝ][ÛYÙ[
NÂˆ]ØZ]™ZY˜]T›ØÙ\ÜÙY™\ÜÛœÙUÛÛÊÝ\[™ÐYÙ[Ý]K\Y˜XÝËÛÛÊNÂŸB™[˜Ý[Ûˆ\ÔØ[™›Þ[[YPYÙ[
YÙ[
HÂˆ™]\›ˆ\ÔØ[™›ÞYÙ[
YÙ[
NÂŸB˜\ˆ[š]ÜØ[™›ÞH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜØ[™›Þ›ZœÈŠ
HÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]Ü[”Ý]J
NÂˆ[š]ØYÙ[Ù^\Ê
NÂˆ[š]ÝÛÛ™ZY˜][ÛŠ
NÂˆ[š]ÝÛÛ

NÂˆ[š]ØÛÛ^

NÂˆ[š]Û[Ù[™\\˜][ÛŠ
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜÝ™X[T™XÛÛ˜Ú[X][Û‹›ZœÂ™[˜Ý[ÛˆÜ™X]TÝ™X[PX›Ü™XÛÛ˜Ú[X][Û”Ý]J
HÂˆ™]\›ˆÂˆ[™[™Ñ[˜Ý[ÛØ[ÎˆÊˆ×ÔT‘W×È
‹È™]ÈX\

BˆNÂŸB™[˜Ý[Ûˆ™XÛÜ™Ý™X[Q]™[›ÜX›Ü™XÛÛ˜Ú[X][ÛŠÝ]K]™[
HÂˆYˆ
]™[\HOOHœ™\ÜÛœÙWÙÛ™HŠHÂˆÝ]Kœ[™[™Ñ[˜Ý[ÛØ[Ë˜ÛX\Š
NÂˆÝ]Kœ™\ÜÛœÙRYH]™[œ™\ÜÛœÙKšYÂˆ™]\›ŽÂˆBˆYˆ
]™[\HOOH›[Ù[ˆZ\Ô™XÛÜ™
]™[™]™[
JHÂˆ™]\›ŽÂˆBˆÛÛœÝ˜]Ñ]™[H]™[™]™[ÂˆYˆ
˜]Ñ]™[\HOOHœ™\ÜÛœÙK˜Ü™X]Yˆ	‰ˆ\Ô™XÛÜ™
˜]Ñ]™[œ™\ÜÛœÙJH	‰ˆ\[Ùˆ˜]Ñ]™[œ™\ÜÛœÙKšYOOHœÝš[™ÈŠHÂˆÝ]Kœ™\ÜÛœÙRYH˜]Ñ]™[œ™\ÜÛœÙKšYÂˆ™]\›ŽÂˆBˆYˆ
˜]Ñ]™[\HOOHœ™\ÜÛœÙK›Ý]]Ú][K™Û™HˆZ\Ô™XÛÜ™
˜]Ñ]™[š][JJHÂˆ™]\›ŽÂˆBˆÛÛœÝ][HH˜]Ñ]™[š][NÂˆYˆ
][K\HOOH™[˜Ý[Û—ØØ[ˆ	‰ˆ\[Ùˆ][K˜Ø[ÚYOOHœÝš[™ÈŠHÂˆÝ]Kœ[™[™Ñ[˜Ý[ÛØ[ËœÙ]
][K˜Ø[ÚYÂˆØ[Yˆ][K˜Ø[ÚYˆ˜[YNˆ\[Ùˆ][K›˜[YHOOHœÝš[™ÈˆÈ][K›˜[YHˆ][K˜Ø[ÚYˆ‹‹\[Ùˆ][K›˜[Y\ÜXÙHOOHœÝš[™ÈˆÈÈ˜[Y\ÜXÙNˆ][K›˜[Y\ÜXÙHHˆßBˆJNÂˆ™]\›ŽÂˆBˆYˆ
][K\HOOH™[˜Ý[Û—ØØ[ÛÝ]]ˆ	‰ˆ\[Ùˆ][K˜Ø[ÚYOOHœÝš[™ÈŠHÂˆÝ]Kœ[™[™Ñ[˜Ý[ÛØ[Ë™[]J][K˜Ø[ÚY
NÂˆBŸB™[˜Ý[ÛˆZ[X›Ü™XÛÛ˜Ú[X][Û’[œ]
Ý]JHÂˆ™]\›ˆ\œ˜^K™œ›ÛJÝ]Kœ[™[™Ñ[˜Ý[ÛØ[Ë˜[Y\Ê
K
ÛÛØ[
HOˆ
Âˆ\Nˆ™[˜Ý[Û—ØØ[Ü™\Ý[‹ˆ˜[YNˆÛÛØ[›˜[YKˆ‹‹\[ÙˆÛÛØ[›˜[Y\ÜXÙHOOHœÝš[™ÈˆÈÈ˜[Y\ÜXÙNˆÛÛØ[›˜[Y\ÜXÙHHˆßKˆØ[YˆÛÛØ[˜Ø[YˆÝ]\Îˆš[˜ÛÛ\]H‹ˆÝ]]ˆÈ\Nˆ^‹^ˆ˜X›ÜYˆBˆJJNÂŸB™[˜Ý[ÛˆÙ]X›Ü™XÛÛ˜Ú[X][Û”™]š[Ý\Ô™\ÜÛœÙRY
Ý]K™\]Y\Ý
HÂˆYˆ
™\]Y\Ý˜ÛÛ™\œØ][Û’Y
HÂˆ™]\›ˆ™\]Y\Ýœ™]š[Ý\Ô™\ÜÛœÙRYÂˆBˆ™]\›ˆÝ]Kœ™\ÜÛœÙRYÏÈ™\]Y\Ýœ™]š[Ý\Ô™\ÜÛœÙRYÂŸB™[˜Ý[ÛˆÚÝ[™XÛÛ˜Ú[TÝ™X[PX›Ü
Ý]JHÂˆ™]\›ˆÝ]Kœ[™[™Ñ[˜Ý[ÛØ[ËœÚ^™HˆÂŸB™[˜Ý[ÛˆX\šÐX›Ü™XÛÛ˜Ú[X][ÛÛÛ\]JÝ]K™\ÜÛœÙJHÂˆÝ]Kœ[™[™Ñ[˜Ý[ÛØ[Ë˜ÛX\Š
NÂˆYˆ
™\ÜÛœÙOËœ™\ÜÛœÙRY
HÂˆÝ]Kœ™\ÜÛœÙRYH™\ÜÛœÙKœ™\ÜÛœÙRYÂˆBŸB™[˜Ý[Ûˆ\Ô™XÛÜ™
˜[YJHÂˆ™]\›ˆ\[Ùˆ˜[YHOOH›Øš™XÝˆ	‰ˆ˜[YHOOH[ÂŸB˜\ˆ[š]ÜÝ™X[T™XÛÛ˜Ú[X][ÛˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹ÜÝ™X[T™XÛÛ˜Ú[X][Û‹›ZœÈŠ
HÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ü[ÛÛ™šYË›ZœÂ™[˜Ý[ÛˆÙ][\XÚ][Ù[Ù][™ÜÑ›Ü”™\ÛÛ™Y[Ù[
^XÚ]S[Ù[Ù]™\ÛÛ™Y[Ù[˜[YJHÂˆYˆ
™\ÛÛ™Y[Ù[˜[YH	‰ˆ™\ÛÛ™Y[Ù[˜[YKš[J
K›[™Ýˆ
HÂˆ™]\›ˆÙ]Y˜][[Ù[Ù][™ÜÊ™\ÛÛ™Y[Ù[˜[YJNÂˆBˆYˆ
^XÚ]S[Ù[Ù]
HÂˆ™]\›ˆßNÂˆBˆ™]\›ˆÙ]Y˜][[Ù[Ù][™ÜÊ
NÂŸB™[˜Ý[Ûˆ˜[Y]UÛÛ^XÝ][ÛÛÛ™šYÊÛÛ™šYÌŠHÂˆÛÛœÝX^ÛÛ˜Ý\œ™[˜ÞHHÛÛ™šYÌË›X^[˜Ý[Û•ÛÛÛÛ˜Ý\œ™[˜ÞNÂˆÛÛœÝ™P\›Ý˜[[œ]ÝX\™˜Z[ÈHÛÛ™šYÌËœ™P\›Ý˜[[œ]ÝX\™˜Z[ÎÂˆYˆ
\[Ùˆ™P\›Ý˜[[œ]ÝX\™˜Z[ÈOOH[™Yš[™Yˆ	‰ˆ\[Ùˆ™P\›Ý˜[[œ]ÝX\™˜Z[ÈOOH˜›ÛÛX[ˆŠHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠÛÛ^XÝ][Û‹œ™P\›Ý˜[[œ]ÝX\™˜Z[È]\Ý™HH›ÛÛX[ˆÚ[ˆ›ÝšYYˆŠNÂˆBˆYˆ
X^ÛÛ˜Ý\œ™[˜ÞHOH[
HÂˆ™]\›ˆÛÛ™šYÌŽÂˆBˆYˆ
S[X™\‹š\Ò[YÙ\ŠX^ÛÛ˜Ý\œ™[˜ÞJHX^ÛÛ˜Ý\œ™[˜ÞHJHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠÛÛ^XÝ][Û‹›X^[˜Ý[Û•ÛÛÛÛ˜Ý\œ™[˜ÞH]\Ý™H[ˆ[YÙ\ˆÜ™X]\ˆ[ˆÜˆ\]X[ÈKˆŠNÂˆBˆ™]\›ˆÛÛ™šYÌŽÂŸB˜\ˆ[š]Ü[ÛÛ™šYÈH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[›™\‹Ü[ÛÛ™šYË›ZœÈŠ
HÂˆ[š]ÙY˜][[Ù[

NÂˆ[š]Ù\œ›ÜœÍJ
NÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[‹›ZœÂ™[˜Ý[Ûˆ\Ñ^XÚ]Ü]™[™X\ÛÛš[™ÑY™›Ü
Ù][™ÜÊHÂˆ™]\›ˆÙ][™ÜÏËœ™X\ÛÛš[™ÏË™Y™›ÜOOH›ÚYÂŸB˜\ˆÛ[Ù[›ÝšY\‹^žQY˜][[Ù[›ÝšY\‹Ô[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™S[Ù[›ÜYÙ[Ù›‹™\ÛÛ™TØ[™›Þ[[YS[Ù[›ÜYÙ[Ù›‹Ù]YÙ[ÛÛ\™[[ÛÛ™šY×Ù›‹[’[™]šYX[›Û”Ý™X[WÙ›‹[”Ý™X[SÛÜÙ›‹[’[™]šYX[Ý™X[WÙ›‹™\\™S[Ù[Ø[Ù›‹[›™\ŽÂ˜\ˆ[š]Ü[ˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÜ[‹›ZœÈŠ
HÂˆ[š]ØYÙ[Š
NÂˆ[š]Ù]™[Ê
NÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]ÙÝX\™˜Z[

NÂˆ[š]ÛY™XÞXÛJ
NÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]Ü›ÝšY\œÊ
NÂˆ[š]Ü[ÛÛ^

NÂˆ[š]Ü™\Ý[

NÂˆ[š]Ü[”Ý]J
NÂˆ[š]ØÛÛ^

NÂˆ[š]Ý\ØYÙJ
NÂˆ[š]ÝÛÛÊ
NÂˆ[š]ØÛÛœÝ[Ê
NÂˆ[š]Ü›ÝØÛÛ

NÂˆ[š]Ü[[YJ
NÂˆ[š]ØÛÛ™\œØ][ÛŠ
NÂˆ[š]ÙÝX\™˜Z[Ê
NÂˆ[š]Û[Ù[Ù][™ÜÊ
NÂˆ[š]Û[Ù[™]žJ
NÂˆ[š]Û[Ù[Ý]]Ê
NÂˆ[š]ÜÝ™X[Z[™Ê
NÂˆ[š]ÜÙ\ÜÚ[Û”\œÚ\Ý[˜ÙJ
NÂˆ[š]Ý\›”™\ÛÛ][ÛŠ
NÂˆ[š]Ý\›”™\\˜][ÛŠ
NÂˆ[š]Û[Ù[™\\˜][ÛŠ
NÂˆ[š]Ü[“ÛÜ

NÂˆ[š]Ý˜XÚ[™ÌŠ
NÂˆ[š]Ù\œ›Ü’[™\œÊ
NÂˆ[š]ÜØ[™›Þ

NÂˆ[š]ÜÝ™X[T™XÛÛ˜Ú[X][ÛŠ
NÂˆ[š]Ü[ÛÛ™šYÊ
NÂˆ[š]Ý˜XÚ[™ÌŠ
NÂˆ[š]Û[Ù[Ù][™ÜÊ
NÂˆ[š]Ú][\Ê
NÂˆ^žQY˜][[Ù[›ÝšY\ˆHÛ\ÜÈÂˆÛÛœÝXÝÜŠ
HÂˆ×Üš]˜]PY
\ËÛ[Ù[›ÝšY\ŠNÂˆBˆÙ][Ù[
[Ù[˜[YJHÂˆÛÛœÝ[Ù[›ÝšY\ˆH×Üš]˜]QÙ]
\ËÛ[Ù[›ÝšY\ŠHÏÈÙ]Y˜][[Ù[›ÝšY\Š
NÂˆ×Üš]˜]TÙ]
\ËÛ[Ù[›ÝšY\‹[Ù[›ÝšY\ŠNÂˆ™]\›ˆ[Ù[›ÝšY\‹™Ù][Ù[
[Ù[˜[YJNÂˆBˆNÂˆÛ[Ù[›ÝšY\ˆH™]ÈÙXZÓX\

NÂˆ[›™\ˆHÛ\ÜÈ^[™È[’ÛÚÜÈÂˆÊŠ‚ˆ
ˆÜ™X]\ÈH[›™\ˆÚ]Ü[Û˜[Y˜][È]\HÈ]™\žHÝXœÙ\]Y[[ˆ[›ØØ][Û‹‚ˆ
‚ˆ
ˆ\˜[HÛÛ™šYÈHÝ™\œšY\È›Üˆ[Ù[ËÝX\™˜Z[Ë˜XÚ[™ËÜˆÙ\ÜÚ[Ûˆ™Z]š[Ü‹‚ˆ
‹ÂˆÛÛœÝXÝÜŠÛÛ™šYÌˆHßJHÂˆÝ\\Š
NÂˆ×Üš]˜]PY
\ËÔ[›™\—Ú[œÝ[˜Ù\ÊNÂˆ×ÜX›XÑšY[
\Ë˜ÛÛ™šYÈŠNÂˆ×ÜX›XÑšY[
\Ë˜XÙSÝ™\œšY\ÈŠNÂˆËÈKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKBˆËÈ[\›˜[ÂˆËÈKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKBˆ×ÜX›XÑšY[
\Ëš[œ]ÝX\™˜Z[YœÈŠNÂˆ×ÜX›XÑšY[
\Ë›Ý]]ÝX\™˜Z[YœÈŠNÂˆ\Ë˜ÛÛ™šYÈHÂˆ[Ù[›ÝšY\ŽˆÛÛ™šYÌ‹›[Ù[›ÝšY\ˆÏÈ™]È^žQY˜][[Ù[›ÝšY\Š
Kˆ[Ù[ˆÛÛ™šYÌ‹›[Ù[ˆ[Ù[Ù][™ÜÎˆÛÛ™šYÌ‹›[Ù[Ù][™ÜËˆ[™Ù™’[œ]š[\ŽˆÛÛ™šYÌ‹š[™Ù™’[œ]š[\‹ˆ[œ]ÝX\™˜Z[ÎˆÛÛ™šYÌ‹š[œ]ÝX\™˜Z[ËˆÝ]]ÝX\™˜Z[ÎˆÛÛ™šYÌ‹›Ý]]ÝX\™˜Z[Ëˆ˜XÚ[™Ñ\ØX›YˆÛÛ™šYÌ‹˜XÚ[™Ñ\ØX›YÏÈ˜[ÙKˆ˜XÙR[˜ÛYTÙ[œÚ]]™Q]NˆÛÛ™šYÌ‹˜XÙR[˜ÛYTÙ[œÚ]]™Q]HÏÈYKˆÛÜšÙ›ÝÓ˜[YNˆÛÛ™šYÌ‹ÛÜšÙ›ÝÓ˜[YHÏÈYÙ[ÛÜšÙ›ÝÈ‹ˆ˜XÙRYˆÛÛ™šYÌ‹˜XÙRYˆÜ›Ý\YˆÛÛ™šYÌ‹™Ü›Ý\Yˆ˜XÙSY]Y]NˆÛÛ™šYÌ‹˜XÙSY]Y]Kˆ˜XÚ[™ÎˆÛÛ™šYÌ‹˜XÚ[™ËˆØ[™›ÞˆÛÛ™šYÌ‹œØ[™›ÞˆÛÛ^XÝ][ÛŽˆ˜[Y]UÛÛ^XÝ][ÛÛÛ™šYÊÛÛ™šYÌ‹ÛÛ^XÝ][ÛŠKˆÛÛ›Ý›Ý[™™Z]š[ÜŽˆÛÛ™šYÌ‹ÛÛ›Ý›Ý[™™Z]š[ÜˆÏÈœ˜Z\ÙWÙ\œ›Üˆ‹ˆÙ\ÜÚ[Û’[œ]Ø[˜XÚÎˆÛÛ™šYÌ‹œÙ\ÜÚ[Û’[œ]Ø[˜XÚËˆØ[[Ù[[œ]š[\ŽˆÛÛ™šYÌ‹˜Ø[[Ù[[œ]š[\‹ˆÛÛ\œ›Ü‘›Ü›X]\ŽˆÛÛ™šYÌ‹ÛÛ\œ›Ü‘›Ü›X]\‹ˆ™X\ÛÛš[™Ò][RYÛXÞNˆÛÛ™šYÌ‹œ™X\ÛÛš[™Ò][RYÛXÞBˆNÂˆ\Ë˜XÙSÝ™\œšY\ÈHÂˆ‹‹˜ÛÛ™šYÌ‹˜XÙRYOOH›ÚYÈÈ˜XÙRYˆÛÛ™šYÌ‹˜XÙRYHˆßKˆ‹‹˜ÛÛ™šYÌ‹ÛÜšÙ›ÝÓ˜[YHOOH›ÚYÈÈÛÜšÙ›ÝÓ˜[YNˆÛÛ™šYÌ‹ÛÜšÙ›ÝÓ˜[YHHˆßKˆ‹‹˜ÛÛ™šYÌ‹™Ü›Ý\YOOH›ÚYÈÈÜ›Ý\YˆÛÛ™šYÌ‹™Ü›Ý\YHˆßKˆ‹‹˜ÛÛ™šYÌ‹˜XÙSY]Y]HOOH›ÚYÈÈ˜XÙSY]Y]NˆÛÛ™šYÌ‹˜XÙSY]Y]HHˆßKˆ‹‹˜ÛÛ™šYÌ‹˜XÚ[™ÏË˜\RÙ^HOOH›ÚYÈÈ˜XÚ[™Ð\RÙ^NˆÛÛ™šYÌ‹˜XÚ[™Ë˜\RÙ^HHˆßBˆNÂˆ\Ëš[œ]ÝX\™˜Z[YœÈH
ÛÛ™šYÌ‹š[œ]ÝX\™˜Z[ÈÏÈ×JK›X\
Yš[™R[œ]ÝX\™˜Z[
NÂˆ\Ë›Ý]]ÝX\™˜Z[YœÈH
ÛÛ™šYÌ‹›Ý]]ÝX\™˜Z[ÈÏÈ×JK›X\
Yš[™SÝ]]ÝX\™˜Z[
NÂˆBˆ\Þ[˜È[ŠYÙ[[œ]Ü[ÛœÈHÂˆÝ™X[Nˆ˜[ÙKˆÛÛ^ˆ›ÚYˆJHÂˆÛÛœÝ™\ÛÛ™YÜ[ÛœÈHÜ[ÛœÈÏÈÈÝ™X[Nˆ˜[ÙKÛÛ^ˆ›ÚYNÂˆÛÛœÝÙ\ÜÚ[Û’[œ]Ø[˜XÚÈH™\ÛÛ™YÜ[ÛœËœÙ\ÜÚ[Û’[œ]Ø[˜XÚÈÏÈ\Ë˜ÛÛ™šYËœÙ\ÜÚ[Û’[œ]Ø[˜XÚÎÂˆÛÛœÝØ[[Ù[[œ]š[\ˆH™\ÛÛ™YÜ[ÛœË˜Ø[[Ù[[œ]š[\ˆÏÈ\Ë˜ÛÛ™šYË˜Ø[[Ù[[œ]š[\ŽÂˆÛÛœÝÛÛ\œ›Ü‘›Ü›X]\ˆH™\ÛÛ™YÜ[ÛœËÛÛ\œ›Ü‘›Ü›X]\ˆÏÈ\Ë˜ÛÛ™šYËÛÛ\œ›Ü‘›Ü›X]\ŽÂˆÛÛœÝ™X\ÛÛš[™Ò][RYÛXÞHH™\ÛÛ™YÜ[ÛœËœ™X\ÛÛš[™Ò][RYÛXÞHÏÈ\Ë˜ÛÛ™šYËœ™X\ÛÛš[™Ò][RYÛXÞNÂˆÛÛœÝÛÛ^XÝ][ÛˆH˜[Y]UÛÛ^XÝ][ÛÛÛ™šYÊ™\ÛÛ™YÜ[ÛœËÛÛ^XÝ][ÛˆÏÈ\Ë˜ÛÛ™šYËÛÛ^XÝ][ÛŠNÂˆÛÛœÝÛÛ›Ý›Ý[™™Z]š[ÜˆH™\ÛÛ™YÜ[ÛœËÛÛ›Ý›Ý[™™Z]š[ÜˆÏÈ\Ë˜ÛÛ™šYËÛÛ›Ý›Ý[™™Z]š[ÜŽÂˆÛÛœÝ\ÐØ[[Ù[[œ]š[\ˆH›ÛÛX[ŠØ[[Ù[[œ]š[\ŠNÂˆÛÛœÝ˜XÚ[™ÐÛÛ™šYÈH™\ÛÛ™YÜ[ÛœË˜XÚ[™ÈÏÈ\Ë˜ÛÛ™šYË˜XÚ[™ÎÂˆÛÛœÝ˜XÙSÝ™\œšY\ÈHÂˆ‹‹\Ë˜XÙSÝ™\œšY\Ëˆ‹‹œ™\ÛÛ™YÜ[ÛœË˜XÚ[™ÏË˜\RÙ^HOOH›ÚYÈÈ˜XÚ[™Ð\RÙ^Nˆ™\ÛÛ™YÜ[ÛœË˜XÚ[™Ë˜\RÙ^HHˆßBˆNÂˆÛÛœÝY™™XÝ]™SÜ[ÛœÈHÂˆ‹‹œ™\ÛÛ™YÜ[ÛœËˆÙ\ÜÚ[Û’[œ]Ø[˜XÚËˆØ[[Ù[[œ]š[\‹ˆÛÛ\œ›Ü‘›Ü›X]\‹ˆ™X\ÛÛš[™Ò][RYÛXÞKˆÛÛ^XÝ][Û‹ˆÛÛ›Ý›Ý[™™Z]š[Ü‚ˆNÂˆÛÛœÝ™\Ý[Z[™Ñœ›ÛTÝ]HH[œ][œÝ[˜Ù[Ùˆ[”Ý]NÂˆÛÛœÝ™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YHH™\Ý[Z[™Ñœ›ÛTÝ]H	‰ˆ[œ]—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈOOHYNÂˆÛÛœÝ™\Ý[YYÛÛ™\œØ][Û’YH™\Ý[Z[™Ñœ›ÛTÝ]HÈ[œ]—ØÛÛ™\œØ][Û’Yˆ›ÚYÂˆÛÛœÝ™\Ý[YY™]š[Ý\Ô™\ÜÛœÙRYH™\Ý[Z[™Ñœ›ÛTÝ]HÈ[œ]—Ü™]š[Ý\Ô™\ÜÛœÙRYˆ›ÚYÂˆÛÛœÝÙ\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛˆH›ÛÛX[ŠY™™XÝ]™SÜ[ÛœË˜ÛÛ™\œØ][Û’YÏÈ™\Ý[YYÛÛ™\œØ][Û’Y
H›ÛÛX[ŠY™™XÝ]™SÜ[ÛœËœ™]š[Ý\Ô™\ÜÛœÙRYÏÈ™\Ý[YY™]š[Ý\Ô™\ÜÛœÙRY
NÂˆÛÛœÝÙ\ÜÚ[ÛˆHY™™XÝ]™SÜ[ÛœËœÙ\ÜÚ[ÛŽÂˆÛÛœÝÙ\ÜÚ[Û”\œÚ\Ý[˜ÙHHÜ™X]TÙ\ÜÚ[Û”\œÚ\Ý[˜ÙU˜XÚÙ\ŠÂˆÙ\ÜÚ[Û‹ˆ\ÐØ[[Ù[[œ]š[\‹ˆ\œÚ\Ý[œ]ˆØ]™TÝ™X[R[œ]ÔÙ\ÜÚ[Û‹ˆ™\Ý[Z[™Ñœ›ÛTÝ]BˆJNÂˆ]™\\™Y[œ]H[œ]ÂˆYˆ
J™\\™Y[œ][œÝ[˜Ù[Ùˆ[”Ý]JJHÂˆÛÛœÝ™\\™YH]ØZ]™\\™R[œ]][\ÕÚ]Ù\ÜÚ[ÛŠ™\\™Y[œ]Ù\ÜÚ[Û‹Ù\ÜÚ[Û’[œ]Ø[˜XÚËÂˆËÈÚ[ˆHÙ\™\ˆ˜XÚÜÈÛÛ™\œØ][ÛˆÝ]HÙHÛ›HÙ[™H™]È\›ˆ[œ]ÎÂˆËÈ™]š[Ý\ÈY\ÜØYÙ\È\™H™XÛÝ™\™YšXHÛÛ™\œØ][Û’YÜ™]š[Ý\Ô™\ÜÛœÙRY‚ˆ[˜ÛYR\ÝÜžR[”™\\™Y[œ]ˆ\Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][Û‹ˆ™\Ù\™Q›ÜY™]Ò][\ÎˆÙ\™\“X[˜YÙ\ÐÛÛ™\œØ][Û‹ˆ™X\ÛÛš[™Ò][RYÛXÞBˆJNÂˆYˆ
Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][Ûˆ	‰ˆÙ\ÜÚ[ÛŠHÂˆÛÛœÝÙ\ÜÚ[Û’][\ÈH™\\™YœÙ\ÜÚ[Û’][\ÎÂˆYˆ
Ù\ÜÚ[Û’][\È	‰ˆÙ\ÜÚ[Û’][\Ë›[™Ýˆ
HÂˆ™\\™Y[œ]HÙ\ÜÚ[Û’][\ÎÂˆH[ÙHÂˆ™\\™Y[œ]H™\\™Yœ™\\™Y[œ]ÂˆBˆH[ÙHÂˆ™\\™Y[œ]H™\\™Yœ™\\™Y[œ]ÂˆBˆÙ\ÜÚ[Û”\œÚ\Ý[˜ÙOËœÙ]™\\™Y][\Ê™\\™YœÙ\ÜÚ[Û’][\ÊNÂˆBˆÛÛœÝ[œÝ\™TÝ™X[R[œ]\œÚ\ÝYHÙ\ÜÚ[Û”\œÚ\Ý[˜ÙOË˜Z[\œÚ\Ý[œ]Û˜ÙJÙ\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠNÂˆÛÛœÝ^XÝ]T[ˆH\Þ[˜È

HOˆÂˆYˆ
Y™™XÝ]™SÜ[ÛœËœÝ™X[JHÂˆÛÛœÝÝ™X[T™\Ý[H]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë[’[™]šYX[Ý™X[WÙ›ŠK˜Ø[
\ËYÙ[™\\™Y[œ]Y™™XÝ]™SÜ[ÛœË[œÝ\™TÝ™X[R[œ]\œÚ\ÝYÙ\ÜÚ[Û”\œÚ\Ý[˜ÙOËœ™XÛÜ™\›’][\Ë™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKÂˆÙÔÙ\ÜÚ[Û’Yˆ\Þ[˜È

HOˆ]ØZ]Ù\ÜÚ[ÛË™Ù]Ù\ÜÚ[Û’Y

Kˆ[œ]Ý™\œšYNˆ

HOˆÙ\ÜÚ[Û”\œÚ\Ý[˜ÙOË™Ù]][\Ñ›Ü”\œÚ\Ý[˜ÙJ
BˆJNÂˆ™]\›ˆÝ™X[T™\Ý[ÂˆBˆÛÛœÝ[”™\Ý[H]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë[’[™]šYX[›Û”Ý™X[WÙ›ŠK˜Ø[
\ËYÙ[™\\™Y[œ]Y™™XÝ]™SÜ[ÛœËÙ\ÜÚ[Û”\œÚ\Ý[˜ÙOËœ™XÛÜ™\›’][\Ë™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKÂˆÙÔÙ\ÜÚ[Û’Yˆ\Þ[˜È

HOˆ]ØZ]Ù\ÜÚ[ÛË™Ù]Ù\ÜÚ[Û’Y

Kˆ[œ]Ý™\œšYNˆ

HOˆÙ\ÜÚ[Û”\œÚ\Ý[˜ÙOË™Ù]][\Ñ›Ü”\œÚ\Ý[˜ÙJ
BˆJNÂˆYˆ
Ù\ÜÚ[Û”\œÚ\Ý[˜ÙH	‰ˆ\Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠHÂˆ]ØZ]Ø]™UÔÙ\ÜÚ[ÛŠÙ\ÜÚ[Û‹Ù\ÜÚ[Û”\œÚ\Ý[˜ÙK™Ù]][\Ñ›Ü”\œÚ\Ý[˜ÙJ
K[”™\Ý[
NÂˆBˆ™]\›ˆ[”™\Ý[ÂˆNÂˆYˆ
™\\™Y[œ][œÝ[˜Ù[Ùˆ[”Ý]H	‰ˆ™\\™Y[œ]—Ý˜XÙJHÂˆÛÛœÝ\YYH\U˜XÙSÝ™\œšY\Ê™\\™Y[œ]—Ý˜XÙK™\\™Y[œ]—ØÝ\œ™[YÙ[Ü[‹˜XÙSÝ™\œšY\ÊNÂˆ™\\™Y[œ]—Ý˜XÙHH\YY˜XÙNÂˆ™\\™Y[œ]—ØÝ\œ™[YÙ[Ü[ˆH\YY˜Ý\œ™[Ü[ŽÂˆ™]\›ˆÚ]˜XÙJ™\\™Y[œ]—Ý˜XÙK\Þ[˜È

HOˆÂˆYˆ
™\\™Y[œ]—ØÝ\œ™[YÙ[Ü[ŠHÂˆÙ]Ý\œ™[Ü[Š™\\™Y[œ]—ØÝ\œ™[YÙ[Ü[ŠNÂˆBˆ™]\›ˆ^XÝ]T[Š
NÂˆJNÂˆBˆ™]\›ˆÙ]ÜÜ™X]U˜XÙJ\Þ[˜È

HOˆÂˆYˆ
™\\™Y[œ][œÝ[˜Ù[Ùˆ[”Ý]H	‰ˆ\™\\™Y[œ]—Ý˜XÙJHÂˆ™\\™Y[œ]—Ý˜XÙHHÙ]Ý\œ™[˜XÙJ
NÂˆBˆ™]\›ˆ^XÝ]T[Š
NÂˆKÂˆ˜XÙRYˆ\Ë˜ÛÛ™šYË˜XÙRYˆ˜[YNˆ\Ë˜ÛÛ™šYËÛÜšÙ›ÝÓ˜[YKˆÜ›Ý\Yˆ\Ë˜ÛÛ™šYË™Ü›Ý\YˆY]Y]Nˆ\Ë˜ÛÛ™šYË˜XÙSY]Y]KˆËÈ\‹\[ˆ˜XÚ[™ÈÛÛ™šYÈÝ™\œšY\È^Ü\ˆY˜][ÈÝXÚ\È[š\›Û›Y[THÙ^K‚ˆ˜XÚ[™Ð\RÙ^Nˆ˜XÚ[™ÐÛÛ™šYÏË˜\RÙ^BˆJNÂˆBˆNÂˆÔ[›™\—Ú[œÝ[˜Ù\ÈH™]ÈÙXZÔÙ]

NÂˆ™\ÛÛ™S[Ù[›ÜYÙ[Ù›ˆH\Þ[˜È[˜Ý[ÛŠYÙ[
HÂˆÛÛœÝ^XÚ]S[Ù[Ù]HYÙ[›[Ù[OOH›ÚY	‰ˆYÙ[›[Ù[OOHYÙ[‘QUSÓSÑSÔPÑRÓTˆ\Ë˜ÛÛ™šYË›[Ù[OOH›ÚY	‰ˆ\Ë˜ÛÛ™šYË›[Ù[OOHYÙ[‘QUSÓSÑSÔPÑRÓTŽÂˆÛÛœÝÙ[XÝY[Ù[HÙ[XÝ[Ù[
YÙ[›[Ù[\Ë˜ÛÛ™šYË›[Ù[
NÂˆÛÛœÝ™\ÛÛ™Y[Ù[˜[YHH\[ÙˆÙ[XÝY[Ù[OOHœÝš[™ÈˆÈÙ[XÝY[Ù[ˆ›ÚYÂˆÛÛœÝ™\ÛÛ™Y[Ù[H\[ÙˆÙ[XÝY[Ù[OOHœÝš[™ÈˆÈ]ØZ]\Ë˜ÛÛ™šYË›[Ù[›ÝšY\‹™Ù][Ù[
Ù[XÝY[Ù[
HˆÙ[XÝY[Ù[Âˆ™]\›ˆÈ[Ù[ˆ™\ÛÛ™Y[Ù[^XÚ]S[Ù[Ù]™\ÛÛ™Y[Ù[˜[YHNÂˆNÂˆ™\ÛÛ™TØ[™›Þ[[YS[Ù[›ÜYÙ[Ù›ˆH\Þ[˜È[˜Ý[ÛŠYÙ[
HÂˆYˆ
Z\ÔØ[™›Þ[[YPYÙ[
YÙ[
JHÂˆ™]\›ˆ\Ë˜ÛÛ™šYË›[Ù[ÂˆBˆÛÛœÝ™\ÛÛ™YH]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™S[Ù[›ÜYÙ[Ù›ŠK˜Ø[
\ËYÙ[
NÂˆYˆ
™\ÛÛ™Yœ™\ÛÛ™Y[Ù[˜[YH	‰ˆ™\ÛÛ™Yœ™\ÛÛ™Y[Ù[˜[YKš[J
K›[™Ýˆ
HÂˆ™]\›ˆÂˆ[Ù[ˆ™\ÛÛ™Yœ™\ÛÛ™Y[Ù[˜[YKˆ[Ù[[œÝ[˜ÙNˆ™\ÛÛ™Y›[Ù[ˆNÂˆBˆ™]\›ˆ™\ÛÛ™Y›[Ù[ÂˆNÂˆÙ]YÙ[ÛÛ\™[[ÛÛ™šY×Ù›ˆH[˜Ý[ÛŠÜ[ÛœÊHÂˆÛÛœÝ\ÔØ[™›ÞÝ™\œšYHH\[ÙˆÜ[ÛœËœØ[™›ÞOOH[™Yš[™YŽÂˆÛÛœÝ\ÕÛÛ^XÝ][Û“Ý™\œšYHH\[ÙˆÜ[ÛœËÛÛ^XÝ][ÛˆOOH[™Yš[™YŽÂˆÛÛœÝ\ÕÛÛ›Ý›Ý[™™Z]š[Ü“Ý™\œšYHH\[ÙˆÜ[ÛœËÛÛ›Ý›Ý[™™Z]š[ÜˆOOH[™Yš[™YŽÂˆYˆ
Z\ÔØ[™›ÞÝ™\œšYH	‰ˆZ\ÕÛÛ^XÝ][Û“Ý™\œšYH	‰ˆZ\ÕÛÛ›Ý›Ý[™™Z]š[Ü“Ý™\œšYJHÂˆ™]\›ˆ\Ë˜ÛÛ™šYÎÂˆBˆ™]\›ˆÂˆ‹‹\Ë˜ÛÛ™šYËˆ‹‹š\ÔØ[™›ÞÝ™\œšYHÈÈØ[™›ÞˆÜ[ÛœËœØ[™›ÞHˆßKˆ‹‹š\ÕÛÛ^XÝ][Û“Ý™\œšYHÈÈÛÛ^XÝ][ÛŽˆÜ[ÛœËÛÛ^XÝ][ÛˆHˆßKˆ‹‹š\ÕÛÛ›Ý›Ý[™™Z]š[Ü“Ý™\œšYHÈÈÛÛ›Ý›Ý[™™Z]š[ÜŽˆÜ[ÛœËÛÛ›Ý›Ý[™™Z]š[ÜˆHˆßBˆNÂˆNÂˆ[’[™]šYX[›Û”Ý™X[WÙ›ˆH\Þ[˜È[˜Ý[ÛŠÝ\[™ÐYÙ[[œ]Ü[ÛœËÙ\ÜÚ[Û’[œ]\]K™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKØ[™›ÞY[[ÜžT[ÛÛ^
HÂˆ™]\›ˆÚ]™]ÔÜ[ÛÛ^
\Þ[˜È

HOˆÂˆÛÛœÝ\Ô™\Ý[YYÝ]HH[œ][œÝ[˜Ù[Ùˆ[”Ý]NÂˆÛÛœÝÝ]HH\Ô™\Ý[YYÝ]HÈ[œ]ˆ™]È[”Ý]JÜ[ÛœË˜ÛÛ^[œÝ[˜Ù[Ùˆ[ÛÛ^ÈÜ[ÛœË˜ÛÛ^ˆ™]È[ÛÛ^
Ü[ÛœË˜ÛÛ^
K[œ]Ý\[™ÐYÙ[Ü[ÛœË›X^\›œÈOOH›ÚYÈQUSÓPVÕT“”ÈˆÜ[ÛœË›X^\›œÊNÂˆYˆ
\Ô™\Ý[YYÝ]JHÂˆÝ]K—ØYÙ[ÛÛ[›ØØ][ÛˆH›ÚYÂˆYˆ
Ü[ÛœË›X^\›œÈOOH›ÚY
HÂˆÝ]K—ÛX^\›œÈHÜ[ÛœË›X^\›œÎÂˆBˆBˆÛÛœÝØ[™›Þ[[YHH™]ÈØ[™›Þ[[YSX[˜YÙ\ŠÂˆÝ\[™ÐYÙ[ˆØ[™›ÞÛÛ™šYÎˆÜ[ÛœËœØ[™›ÞÏÈ\Ë˜ÛÛ™šYËœØ[™›Þˆ[”Ý]Nˆ\Ô™\Ý[YYÝ]HÈÝ]Hˆ›ÚYˆJNÂˆÛÛœÝYÙ[ÛÛ\™[[ÛÛ™šYÈH×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\ËÙ]YÙ[ÛÛ\™[[ÛÛ™šY×Ù›ŠK˜Ø[
\ËÜ[ÛœÊNÂˆÛÛœÝ™\ÛÛ™Y™X\ÛÛš[™Ò][RYÛXÞHHÜ[ÛœËœ™X\ÛÛš[™Ò][RYÛXÞHÏÈ
\Ô™\Ý[YYÝ]HÈÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞHˆ›ÚY
HÏÈ\Ë˜ÛÛ™šYËœ™X\ÛÛš[™Ò][RYÛXÞNÂˆÝ]KœÙ]™X\ÛÛš[™Ò][RYÛXÞJ™\ÛÛ™Y™X\ÛÛš[™Ò][RYÛXÞJNÂˆÛÛœÝ™\ÛÛ™YÛÛ™\œØ][Û’YHÜ[ÛœË˜ÛÛ™\œØ][Û’YÏÈ
\Ô™\Ý[YYÝ]HÈÝ]K—ØÛÛ™\œØ][Û’Yˆ›ÚY
NÂˆÛÛœÝ™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRYHÜ[ÛœËœ™]š[Ý\Ô™\ÜÛœÙRYÏÈ
\Ô™\Ý[YYÝ]HÈÝ]K—Ü™]š[Ý\Ô™\ÜÛœÙRYˆ›ÚY
NÂˆYˆ
Z\Ô™\Ý[YYÝ]JHÂˆÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
™\ÛÛ™YÛÛ™\œØ][Û’Y™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆÛÛœÝÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\ˆH™\ÛÛ™YÛÛ™\œØ][Û’Y™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRYÈ™]ÈÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠÂˆÛÛ™\œØ][Û’Yˆ™\ÛÛ™YÛÛ™\œØ][Û’Yˆ™]š[Ý\Ô™\ÜÛœÙRYˆ™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRYˆ™X\ÛÛš[™Ò][RYÛXÞNˆ™\ÛÛ™Y™X\ÛÛš[™Ò][RYÛXÞBˆJHˆ›ÚYÂˆYˆ
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ˆ	‰ˆ\Ô™\Ý[YYÝ]JHÂˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œš[YQœ›ÛTÝ]JÂˆÜšYÚ[˜[[œ]ˆÝ]K—ÛÜšYÚ[˜[[œ]ˆÙ[™\˜]Y][\ÎˆÝ]K—ÙÙ[™\˜]Y][\Ëˆ[Ù[™\ÜÛœÙ\ÎˆÝ]K—Û[Ù[™\ÜÛœÙ\ÂˆJNÂˆÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜ÛÛ™\œØ][Û’YÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆÛÛœÝÛÛ\œ›Ü‘›Ü›X]\ˆHÜ[ÛœËÛÛ\œ›Ü‘›Ü›X]\ˆÏÈ\Ë˜ÛÛ™šYËÛÛ\œ›Ü‘›Ü›X]\ŽÂˆ]ÛÛ[Z[™Ò[\œ\Y\›ˆH˜[ÙNÂˆ][‘\œ›ÜŽÂˆžHÂˆÚ[H
YJHÂˆÝ]K—ØÝ\œ™[Ý\HÝ]K—ØÝ\œ™[Ý\ÏÈÂˆ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆ‚ˆNÂˆYˆ
Ý]K—ØÝ\œ™[Ý\\HOOH›™^ÜÝ\Ú[\œ\[ÛˆŠHÂˆ]ØZ]™\\™TØ[™›Þ[\œ\Y\›”™\Ý[YJÂˆÝ\[™ÐYÙ[ˆÝ]KˆØ[™›Þ[[YKˆ[ÛÛ™šYÓ[Ù[ˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™TØ[™›Þ[[YS[Ù[›ÜYÙ[Ù›ŠK˜Ø[
\ËÝ]K—ØÝ\œ™[YÙ[
BˆJNÂˆÛÛœÝ[\œ\YÝ]ÛÛYHH]ØZ]™\Ý[YR[\œ\Y\›ŠÂˆÝ]Kˆ[›™\Žˆ\ËˆÛÛ\œ›Ü‘›Ü›X]\‹ˆYÙ[ÛÛ\™[[ÛÛ™šYÂˆJNÂˆÛÛœÝÈÚÝ[™]\›‹ÚÝ[ÛÛ[YHHH[™R[\œ\YÝ]ÛÛYJÂˆÝ]KˆÝ]ÛÛYNˆ[\œ\YÝ]ÛÛYKˆÙ]ÛÛ[Z[™Ò[\œ\Y\›Žˆ
˜[YJHOˆÂˆÛÛ[Z[™Ò[\œ\Y\›ˆH˜[YNÂˆBˆJNÂˆYˆ
ÚÝ[™]\›ŠHÂˆ™]\›ˆ™]È[”™\Ý[
Ý]JNÂˆBˆYˆ
ÚÝ[ÛÛ[YJHÂˆÛÛ[YNÂˆBˆBˆYˆ
Ý]K—ØÝ\œ™[Ý\\HOOH›™^ÜÝ\Ü[—ØYØZ[ˆŠHÂˆÛÛœÝØ\ÐÛÛ[Z[™Ò[\œ\Y\›ˆHÛÛ[Z[™Ò[\œ\Y\›ŽÂˆÛÛ[Z[™Ò[\œ\Y\›ˆH˜[ÙNÂˆÛÛœÝÝX\™˜Z[˜XÚÙ\ˆHÜ™X]QÝX\™˜Z[˜XÚÙ\Š
NÂˆÛÛœÝ™]š[Ý\Õ\›ˆHÝ]K—ØÝ\œ™[\›ŽÂˆÛÛœÝ™]š[Ý\Ô\œÚ\ÝYÛÝ[HÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[ÂˆÛÛœÝ™]š[Ý\ÑÙ[™\˜]YÛÝ[HÝ]K—ÙÙ[™\˜]Y][\Ë›[™ÝÂˆÛÛœÝÈ\›’[œ]\˜[[ÝX\™˜Z[›ÛZ\ÙHHH]ØZ]™\\™U\›ŠÂˆÝ]Kˆ[œ]ˆÝ]K—ÛÜšYÚ[˜[[œ]ˆÙ[™\˜]Y][\ÎˆÝ]K—ÙÙ[™\˜]Y][\Ëˆ\Ô™\Ý[YYÝ]Kˆ™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKˆÛÛ[Z[™Ò[\œ\Y\›ŽˆØ\ÐÛÛ[Z[™Ò[\œ\Y\›‹ˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹ˆ[œ]ÝX\™˜Z[YœÎˆ\Ëš[œ]ÝX\™˜Z[YœËˆÝX\™˜Z[[™\œÎˆÂˆÛ”\˜[[Ý\ˆÝX\™˜Z[˜XÚÙ\‹›X\šÔ[™[™ËˆÛ”\˜[[\œ›ÜŽˆÝX\™˜Z[˜XÚÙ\‹œÙ]\œ›Ü‚ˆKˆ[Z]YÙ[Ý\ˆ
ÛÛ^YÙ[[œ]][\ÊHOˆÂˆ\Ë™[Z]
˜YÙ[ÜÝ\‹ÛÛ^YÙ[[œ]][\ÊNÂˆBˆJNÂˆYˆ
™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YH	‰ˆÝ]K—ØÝ\œ™[\›ˆˆ™]š[Ý\Õ\›ˆ	‰ˆ™]š[Ý\Ô\œÚ\ÝYÛÝ[H™]š[Ý\ÑÙ[™\˜]YÛÝ[
HÂˆÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[H™]š[Ý\Ô\œÚ\ÝYÛÝ[ÂˆBˆÝX\™˜Z[˜XÚÙ\‹œÙ]›ÛZ\ÙJ\˜[[ÝX\™˜Z[›ÛZ\ÙJNÂˆÛÛœÝ™\\™YØ[™›ÞYÙ[H]ØZ]Ø[™›Þ[[YKœ™\\™PYÙ[
ÂˆÝ\œ™[YÙ[ˆÝ]K—ØÝ\œ™[YÙ[ˆ\›’[œ]ˆ[ÛÛ™šYÓ[Ù[ˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™TØ[™›Þ[[YS[Ù[›ÜYÙ[Ù›ŠK˜Ø[
\ËÝ]K—ØÝ\œ™[YÙ[
BˆJNÂˆÛÛœÝ\Y˜XÝÈH]ØZ]™\\™PYÙ[\Y˜XÝÊÝ]K™\\™YØ[™›ÞYÙ[™^XÝ][ÛYÙ[
NÂˆÛÛœÝ™\\™YØ[H]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\\™S[Ù[Ø[Ù›ŠK˜Ø[
\ËÝ]K™\\™YØ[™›ÞYÙ[™^XÝ][ÛYÙ[Ü[ÛœË\Y˜XÝË™\\™YØ[™›ÞYÙ[\›’[œ]Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹Ù\ÜÚ[Û’[œ]\]JNÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹›ÝÒY‘\œ›ÜŠ
NÂˆÝ]K—Û\Ý\›”™\ÜÛœÙHH]ØZ]Ù]™\ÜÛœÙUÚ]™]žJ™\\™YØ[›[Ù[ÂˆÞ\Ý[R[œÝXÝ[ÛœÎˆ™\\™YØ[›[Ù[[œ]š[œÝXÝ[ÛœËˆ›Û\ˆ™\\™YØ[œ›Û\ˆËÈ^XÚ]YÙ[Ü[ˆÛÛ™šYÈ[Ù[ÈÚÝ[ZÙH™XÙY[˜ÙHÝ™\ˆ›Û\Y˜][Ë‚ˆ‹‹œ™\\™YØ[™^XÚ]S[Ù[Ù]ÈÈÝ™\œšYT›Û\[Ù[ˆYHHˆßKˆ[œ]ˆ™\\™YØ[›[Ù[[œ]š[œ]ˆ™]š[Ý\Ô™\ÜÛœÙRYˆ™\\™YØ[œ™]š[Ý\Ô™\ÜÛœÙRYˆÛÛ™\œØ][Û’Yˆ™\\™YØ[˜ÛÛ™\œØ][Û’Yˆ[Ù[Ù][™ÜÎˆ™\\™YØ[›[Ù[Ù][™ÜËˆÚ[\›˜[ˆ™\\™YØ[›[Ù[™\]Y\Ý[\›˜[ˆÛÛÎˆ™\\™YØ[œÙ\šX[^™YÛÛËˆÛÛÑ^XÚ]T›ÝšYYˆ™\\™YØ[ÛÛÑ^XÚ]T›ÝšYYˆÝ]]\NˆÛÛ™\YÙ[Ý]]\UÔÙ\šX[^˜X›JÝ]K—ØÝ\œ™[YÙ[›Ý]]\JKˆ[™Ù™œÎˆ™\\™YØ[œÙ\šX[^™Y[™Ù™œËˆ˜XÚ[™ÎˆÙ]˜XÚ[™Ê\Ë˜ÛÛ™šYË˜XÚ[™Ñ\ØX›Y\Ë˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JKˆÚYÛ˜[ˆÜ[ÛœËœÚYÛ˜[ˆJNÂˆYˆ
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠHÂˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹›X\šÒ[œ]\ÔÙ[
™\\™YØ[œÛÝ\˜ÙR][\ËÂˆš[\\YYˆ™\\™YØ[™š[\\YYˆ[\›’][\Îˆ™\\™YØ[\›’[œ]ˆJNÂˆBˆÝ]K—Û[Ù[™\ÜÛœÙ\Ëœ\Ú
Ý]K—Û\Ý\›”™\ÜÛœÙJNÂˆÝ]K—ØÛÛ^\ØYÙK˜Y
Ý]K—Û\Ý\›”™\ÜÛœÙK\ØYÙJNÂˆÝ]K—Û›ÐXÝ]™PYÙ[[ˆH˜[ÙNÂˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\Ë˜XÚÔÙ\™\’][\ÊÝ]K—Û\Ý\›”™\ÜÛœÙJNÂˆYˆ
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠHÂˆÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜ÛÛ™\œØ][Û’YÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆÛÛœÝ›ØÙ\ÜÙY™\ÜÛœÙHH]ØZ]›ØÙ\ÜÓ[Ù[™\ÜÛœÙP\Þ[˜ÊÝ]K—Û\Ý\›”™\ÜÛœÙKÝ]K—ØÝ\œ™[YÙ[™\\™YØ[ÛÛË™\\™YØ[š[™Ù™œËÝ]KË‹‹œ™\\™YØ[\›’[œ]‹‹œÝ]K—ÙÙ[™\˜]Y][\×KÜ[ÛœËÛÛ›Ý›Ý[™™Z]š[ÜŠNÂˆÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙHH›ØÙ\ÜÙY™\ÜÛœÙNÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹˜]ØZ]ÛÛ\][ÛŠ
NÂˆÛÛœÝ\›”™\Ý[H]ØZ]™\ÛÛ™U\›Y\“[Ù[™\ÜÛœÙJÝ]K—ØÝ\œ™[YÙ[Ý]K—ÛÜšYÚ[˜[[œ]Ý]K—ÙÙ[™\˜]Y][\ËÝ]K—Û\Ý\›”™\ÜÛœÙKÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙK\ËÝ]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYËÜ[ÛœË™\œ›Ü’[™\œÊNÂˆ\U\›”™\Ý[
ÂˆÝ]Kˆ\›”™\Ý[ˆYÙ[ˆÝ]K—ØÝ\œ™[YÙ[ˆÛÛÕ\ÙYˆÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙOËÛÛÕ\ÙYÏÈ×Kˆ™\Ù]\›”\œÚ\Ý[˜ÙNˆZ\Ô™\Ý[YYÝ]BˆJNÂˆBˆÛÛœÝÝ\œ™[Ý\HÝ]K—ØÝ\œ™[Ý\ÂˆYˆ
XÝ\œ™[Ý\
HÂˆÙÙÙ\—ÙY˜][™XYÊ”[›š[™È™^ÛÜŠNÂˆÛÛ[YNÂˆBˆÝÚ]Ú
Ý\œ™[Ý\\JHÂˆØ\ÙH›™^ÜÝ\Ùš[˜[ÛÝ]]Ž‚ˆ]ØZ][“Ý]]ÝX\™˜Z[ÊÝ]K\Ë›Ý]]ÝX\™˜Z[YœËÝ\œ™[Ý\›Ý]]
NÂˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆ\Ë™[Z]
˜YÙ[Ù[™‹Ý]K—ØÛÛ^Ý]K—ØÝ\œ™[YÙ[Ý\œ™[Ý\›Ý]]
NÂˆÝ]K—ØÝ\œ™[YÙ[™[Z]
˜YÙ[Ù[™‹Ý]K—ØÛÛ^Ý\œ™[Ý\›Ý]]
NÂˆ™]\›ˆ™]È[”™\Ý[
Ý]JNÂˆØ\ÙH›™^ÜÝ\Ú[™Ù™ˆŽ‚ˆÝ]KœÙ]Ý\œ™[YÙ[
Ý\œ™[Ý\›™]ÐYÙ[
NÂˆYˆ
Ý]K—ØÝ\œ™[YÙ[Ü[ŠHÂˆÝ]K—ØÝ\œ™[YÙ[Ü[‹™[™

NÂˆ™\Ù]Ý\œ™[Ü[Š
NÂˆÝ]KœÙ]Ý\œ™[YÙ[Ü[Š›ÚY
NÂˆBˆÝ]K—Û›ÐXÝ]™PYÙ[[ˆHYNÂˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆÝ]K—ØÝ\œ™[Ý\HÈ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆˆNÂˆœ™XZÎÂˆØ\ÙH›™^ÜÝ\Ú[\œ\[ÛˆŽ‚ˆ™]\›ˆ™]È[”™\Ý[
Ý]JNÂˆØ\ÙH›™^ÜÝ\Ü[—ØYØZ[ˆŽ‚ˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆÙÙÙ\—ÙY˜][™XYÊ”[›š[™È™^ÛÜŠNÂˆœ™XZÎÂˆY˜][‚ˆÙÙÙ\—ÙY˜][™XYÊ”[›š[™È™^ÛÜŠNÂˆBˆBˆHØ]Ú
\œŠHÂˆÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆÛÛœÝ[™Y™\Ý[H]ØZ]žR[™T[‘\œ›ÜŠÂˆ\œ›ÜŽˆ\œ‹ˆÝ]Kˆ\œ›Ü’[™\œÎˆÜ[ÛœË™\œ›Ü’[™\œËˆÝ]]ÝX\™˜Z[YœÎˆ\Ë›Ý]]ÝX\™˜Z[YœËˆ[Z]YÙ[[™ˆ
ÛÛ^YÙ[Ý]]^
HOˆÂˆ\Ë™[Z]
˜YÙ[Ù[™‹ÛÛ^YÙ[Ý]]^
NÂˆYÙ[™[Z]
˜YÙ[Ù[™‹ÛÛ^Ý]]^
NÂˆBˆJNÂˆYˆ
[™Y™\Ý[
HÂˆ™]\›ˆ[™Y™\Ý[ÂˆBˆYˆ
Ý]K—ØÝ\œ™[YÙ[Ü[ŠHÂˆÝ]K—ØÝ\œ™[YÙ[Ü[‹œÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ‘\œ›Üˆ[ˆYÙ[[ˆ‹ˆ]NˆÈ\œ›ÜŽˆÝš[™Ê\œŠHBˆJNÂˆBˆ[‘\œ›ÜˆH\œŽÂˆ›ÝÈ\œŽÂˆHš[˜[HÂˆÛÛœÝ™\Ù\™TØ[™›ÞÙ\ÜÚ[ÛœÈHÝ]K—ØÝ\œ™[Ý\Ë\HOOH›™^ÜÝ\Ú[\œ\[ÛˆŽÂˆ]ØZ]š[˜[^™TØ[™›Þ[[YJÂˆÝ]KˆØ[™›Þ[[YKˆ™\Ù\™TÙ\ÜÚ[ÛœÑ›Ü’[\œ\[ÛŽˆ™\Ù\™TØ[™›ÞÙ\ÜÚ[ÛœËˆ[‘\œ›Ü‹ˆÜ›Ý\Yˆ\Ë˜ÛÛ™šYË™Ü›Ý\YˆY[[ÜžPÛÛ^ˆØ[™›ÞY[[ÜžT[ÛÛ^ˆ[YÙ[ˆ\Þ[˜È
YÙ[[œ]‹[“Ü[ÛœÊHOˆ]ØZ]\Ëœ[ŠYÙ[[œ]‹[“Ü[ÛœÊBˆJNÂˆBˆJNÂˆNÂˆ[”Ý™X[SÛÜÙ›ˆH\Þ[˜È[˜Ý[ÛŠ™\Ý[Ý\[™ÐYÙ[Ø[™›Þ[[YKÜ[ÛœË\Ô™\Ý[YYÝ]K[œÝ\™TÝ™X[R[œ]\œÚ\ÝYÙ\ÜÚ[Û’[œ]\]K™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKØ[™›ÞY[[ÜžT[ÛÛ^
HÂˆÛÛœÝ™\ÛÛ™Y™X\ÛÛš[™Ò][RYÛXÞHHÜ[ÛœËœ™X\ÛÛš[™Ò][RYÛXÞHÏÈ
\Ô™\Ý[YYÝ]HÈ™\Ý[œÝ]K—Ü™X\ÛÛš[™Ò][RYÛXÞHˆ›ÚY
HÏÈ\Ë˜ÛÛ™šYËœ™X\ÛÛš[™Ò][RYÛXÞNÂˆ™\Ý[œÝ]KœÙ]™X\ÛÛš[™Ò][RYÛXÞJ™\ÛÛ™Y™X\ÛÛš[™Ò][RYÛXÞJNÂˆÛÛœÝ™\ÛÛ™YÛÛ™\œØ][Û’YHÜ[ÛœË˜ÛÛ™\œØ][Û’YÏÈ™\Ý[œÝ]K—ØÛÛ™\œØ][Û’YÂˆÛÛœÝ™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRYHÜ[ÛœËœ™]š[Ý\Ô™\ÜÛœÙRYÏÈ™\Ý[œÝ]K—Ü™]š[Ý\Ô™\ÜÛœÙRYÂˆÛÛœÝÙ\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛˆH›ÛÛX[Š™\ÛÛ™YÛÛ™\œØ][Û’Y
H›ÛÛX[Š™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRY
NÂˆÛÛœÝÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\ˆHÙ\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛˆÈ™]ÈÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠÂˆÛÛ™\œØ][Û’Yˆ™\ÛÛ™YÛÛ™\œØ][Û’Yˆ™]š[Ý\Ô™\ÜÛœÙRYˆ™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRYˆ™X\ÛÛš[™Ò][RYÛXÞNˆ™\ÛÛ™Y™X\ÛÛš[™Ò][RYÛXÞBˆJHˆ›ÚYÂˆYˆ
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠHÂˆ™\Ý[œÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜ÛÛ™\œØ][Û’YÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆ]Ù[[œ]Ó[Ù[H˜[ÙNÂˆ]Ý™X[R[œ]\œÚ\ÝYH˜[ÙNÂˆ]ÝX\™˜Z[˜XÚÙ\ˆHÜ™X]QÝX\™˜Z[˜XÚÙ\Š
NÂˆÛÛœÝ\œÚ\ÝÝ™X[R[œ]Y“™YYYH\Þ[˜È

HOˆÂˆYˆ
Ý™X[R[œ]\œÚ\ÝYY[œÝ\™TÝ™X[R[œ]\œÚ\ÝY
HÂˆ™]\›ŽÂˆBˆ]ØZ][œÝ\™TÝ™X[R[œ]\œÚ\ÝY

NÂˆÝ™X[R[œ]\œÚ\ÝYHYNÂˆNÂˆ]\˜[[ÝX\™˜Z[›ÛZ\ÙNÂˆÛÛœÝ]ØZ]ÝX\™˜Z[Ð[™\œÚ\Ý[œ]H\Þ[˜È

HOˆÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹˜]ØZ]ÛÛ\][ÛŠ
NÂˆYˆ
ÝX\™˜Z[˜XÚÙ\‹™˜Z[Y
HÂˆ›ÝÈÝX\™˜Z[˜XÚÙ\‹™\œ›ÜŽÂˆBˆYˆ
Ù[[œ]Ó[Ù[	‰ˆ\Ý™X[R[œ]\œÚ\ÝY	‰ˆYÝX\™˜Z[˜XÚÙ\‹™˜Z[Y
HÂˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆBˆNÂˆYˆ
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ˆ	‰ˆ\Ô™\Ý[YYÝ]JHÂˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œš[YQœ›ÛTÝ]JÂˆÜšYÚ[˜[[œ]ˆ™\Ý[œÝ]K—ÛÜšYÚ[˜[[œ]ˆÙ[™\˜]Y][\Îˆ™\Ý[œÝ]K—ÙÙ[™\˜]Y][\Ëˆ[Ù[™\ÜÛœÙ\Îˆ™\Ý[œÝ]K—Û[Ù[™\ÜÛœÙ\ÂˆJNÂˆ™\Ý[œÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜ÛÛ™\œØ][Û’YÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆÛÛœÝÛÛ\œ›Ü‘›Ü›X]\ˆHÜ[ÛœËÛÛ\œ›Ü‘›Ü›X]\ˆÏÈ\Ë˜ÛÛ™šYËÛÛ\œ›Ü‘›Ü›X]\ŽÂˆÛÛœÝYÙ[ÛÛ\™[[ÛÛ™šYÈH×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\ËÙ]YÙ[ÛÛ\™[[ÛÛ™šY×Ù›ŠK˜Ø[
\ËÜ[ÛœÊNÂˆ]ÛÛ[Z[™Ò[\œ\Y\›ˆH˜[ÙNÂˆ][‘\œ›ÜŽÂˆžHÂˆÚ[H
YJHÂˆÛÛœÝÝ\œ™[YÙ[H™\Ý[œÝ]K—ØÝ\œ™[YÙ[Âˆ™\Ý[œÝ]K—ØÝ\œ™[Ý\H™\Ý[œÝ]K—ØÝ\œ™[Ý\ÏÈÂˆ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆ‚ˆNÂˆYˆ
™\Ý[œÝ]K—ØÝ\œ™[Ý\\HOOH›™^ÜÝ\Ú[\œ\[ÛˆŠHÂˆ]ØZ]™\\™TØ[™›Þ[\œ\Y\›”™\Ý[YJÂˆÝ\[™ÐYÙ[ˆÝ]Nˆ™\Ý[œÝ]KˆØ[™›Þ[[YKˆ[ÛÛ™šYÓ[Ù[ˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™TØ[™›Þ[[YS[Ù[›ÜYÙ[Ù›ŠK˜Ø[
\Ë™\Ý[œÝ]K—ØÝ\œ™[YÙ[
BˆJNÂˆÛÛœÝ[\œ\YÝ]ÛÛYHH]ØZ]™\Ý[YR[\œ\Y\›ŠÂˆÝ]Nˆ™\Ý[œÝ]Kˆ[›™\Žˆ\ËˆÛÛ\œ›Ü‘›Ü›X]\‹ˆYÙ[ÛÛ\™[[ÛÛ™šYËˆÛ”Ý\][\Îˆ
\›”™\Ý[
HOˆÂˆYÝ\Ô[”™\Ý[
™\Ý[\›”™\Ý[
NÂˆBˆJNÂˆÛÛœÝÈÚÝ[™]\›‹ÚÝ[ÛÛ[YHHH[™R[\œ\YÝ]ÛÛYJÂˆÝ]Nˆ™\Ý[œÝ]KˆÝ]ÛÛYNˆ[\œ\YÝ]ÛÛYKˆÙ]ÛÛ[Z[™Ò[\œ\Y\›Žˆ
˜[YJHOˆÂˆÛÛ[Z[™Ò[\œ\Y\›ˆH˜[YNÂˆBˆJNÂˆYˆ
ÚÝ[™]\›ŠHÂˆ™]\›ŽÂˆBˆYˆ
ÚÝ[ÛÛ[YJHÂˆÛÛ[YNÂˆBˆBˆYˆ
™\Ý[œÝ]K—ØÝ\œ™[Ý\\HOOH›™^ÜÝ\Ü[—ØYØZ[ˆŠHÂˆ\˜[[ÝX\™˜Z[›ÛZ\ÙHH›ÚYÂˆÝX\™˜Z[˜XÚÙ\ˆHÜ™X]QÝX\™˜Z[˜XÚÙ\Š
NÂˆÛÛœÝØ\ÐÛÛ[Z[™Ò[\œ\Y\›ˆHÛÛ[Z[™Ò[\œ\Y\›ŽÂˆÛÛ[Z[™Ò[\œ\Y\›ˆH˜[ÙNÂˆÛÛœÝ™]š[Ý\Õ\›ˆH™\Ý[œÝ]K—ØÝ\œ™[\›ŽÂˆÛÛœÝ™]š[Ý\Ô\œÚ\ÝYÛÝ[H™\Ý[œÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[ÂˆÛÛœÝ™]š[Ý\ÑÙ[™\˜]YÛÝ[H™\Ý[œÝ]K—ÙÙ[™\˜]Y][\Ë›[™ÝÂˆÛÛœÝ™\\™Y\›ˆH]ØZ]™\\™U\›ŠÂˆÝ]Nˆ™\Ý[œÝ]Kˆ[œ]ˆ™\Ý[š[œ]ˆÙ[™\˜]Y][\Îˆ™\Ý[›™]Ò][\Ëˆ\Ô™\Ý[YYÝ]Kˆ™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKˆÛÛ[Z[™Ò[\œ\Y\›ŽˆØ\ÐÛÛ[Z[™Ò[\œ\Y\›‹ˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹ˆ[œ]ÝX\™˜Z[YœÎˆ\Ëš[œ]ÝX\™˜Z[YœËˆÝX\™˜Z[[™\œÎˆÂˆÛ”\˜[[Ý\ˆ

HOˆÂˆÝX\™˜Z[˜XÚÙ\‹›X\šÔ[™[™Ê
NÂˆKˆÛ”\˜[[\œ›ÜŽˆ
\œŠHOˆÂˆÝX\™˜Z[˜XÚÙ\‹œÙ]\œ›ÜŠ\œŠNÂˆBˆKˆ[Z]YÙ[Ý\ˆ
ÛÛ^YÙ[[œ]][\ÊHOˆÂˆ\Ë™[Z]
˜YÙ[ÜÝ\‹ÛÛ^YÙ[[œ]][\ÊNÂˆBˆJNÂˆYˆ
™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YH	‰ˆ™\Ý[œÝ]K—ØÝ\œ™[\›ˆˆ™]š[Ý\Õ\›ˆ	‰ˆ™]š[Ý\Ô\œÚ\ÝYÛÝ[H™]š[Ý\ÑÙ[™\˜]YÛÝ[
HÂˆ™\Ý[œÝ]K—ØÝ\œ™[\›”\œÚ\ÝY][PÛÝ[H™]š[Ý\Ô\œÚ\ÝYÛÝ[ÂˆBˆÛÛœÝÈ\›’[œ]HH™\\™Y\›ŽÂˆ\˜[[ÝX\™˜Z[›ÛZ\ÙHH™\\™Y\›‹œ\˜[[ÝX\™˜Z[›ÛZ\ÙNÂˆÝX\™˜Z[˜XÚÙ\‹œÙ]›ÛZ\ÙJ\˜[[ÝX\™˜Z[›ÛZ\ÙJNÂˆÛÛœÝ[^TÝ™X[R[œ]\œÚ\Ý[˜ÙHHÝX\™˜Z[˜XÚÙ\‹œ[™[™ÎÂˆÛÛœÝ™\\™YØ[™›ÞYÙ[H]ØZ]Ø[™›Þ[[YKœ™\\™PYÙ[
ÂˆÝ\œ™[YÙ[ˆ™\Ý[œÝ]K—ØÝ\œ™[YÙ[ˆ\›’[œ]ˆ[ÛÛ™šYÓ[Ù[ˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™TØ[™›Þ[[YS[Ù[›ÜYÙ[Ù›ŠK˜Ø[
\Ë™\Ý[œÝ]K—ØÝ\œ™[YÙ[
BˆJNÂˆÛÛœÝ\Y˜XÝÈH]ØZ]™\\™PYÙ[\Y˜XÝÊ™\Ý[œÝ]K™\\™YØ[™›ÞYÙ[™^XÝ][ÛYÙ[
NÂˆÛÛœÝ™\\™YØ[H]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\\™S[Ù[Ø[Ù›ŠK˜Ø[
\Ë™\Ý[œÝ]K™\\™YØ[™›ÞYÙ[™^XÝ][ÛYÙ[Ü[ÛœË\Y˜XÝË™\\™YØ[™›ÞYÙ[\›’[œ]Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹Ù\ÜÚ[Û’[œ]\]JNÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹›ÝÒY‘\œ›ÜŠ
NÂˆ]š[˜[™\ÜÛœÙHH›ÚYÂˆÛÛœÝX›Ü™XÛÛ˜Ú[X][Û”Ý]HHÜ™X]TÝ™X[PX›Ü™XÛÛ˜Ú[X][Û”Ý]J
NÂˆ][œ]X\šÙYH˜[ÙNÂˆÛÛœÝX\šÒ[œ]Û˜ÙHH

HOˆÂˆYˆ
[œ]X\šÙY\Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠHÂˆ™]\›ŽÂˆBˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹›X\šÒ[œ]\ÔÙ[
™\\™YØ[œÛÝ\˜ÙR][\ËÂˆš[\\YYˆ™\\™YØ[™š[\\YYˆ[\›’][\Îˆ™\\™YØ[\›’[œ]ˆJNÂˆ[œ]X\šÙYHYNÂˆNÂˆÛÛœÝ™XÛÛ˜Ú[TÝ™X[PX›ÜY“™YYYH\Þ[˜È

HOˆÂˆYˆ
\Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ˆ\ÚÝ[™XÛÛ˜Ú[TÝ™X[PX›Ü
X›Ü™XÛÛ˜Ú[X][Û”Ý]JJHÂˆ™]\›ŽÂˆBˆÛÛœÝ™XÛÛ˜Ú[X][Û’[œ]HZ[X›Ü™XÛÛ˜Ú[X][Û’[œ]
X›Ü™XÛÛ˜Ú[X][Û”Ý]JNÂˆžHÂˆÛÛœÝ™XÛÛ˜Ú[X][Û”™\ÜÛœÙHH]ØZ]Ù]™\ÜÛœÙUÚ]™]žJ™\\™YØ[›[Ù[ÂˆÞ\Ý[R[œÝXÝ[ÛœÎˆ™\\™YØ[›[Ù[[œ]š[œÝXÝ[ÛœËˆ›Û\ˆ™\\™YØ[œ›Û\ˆ‹‹œ™\\™YØ[™^XÚ]S[Ù[Ù]ÈÈÝ™\œšYT›Û\[Ù[ˆYHHˆßKˆ[œ]ˆ™XÛÛ˜Ú[X][Û’[œ]ˆ™]š[Ý\Ô™\ÜÛœÙRYˆÙ]X›Ü™XÛÛ˜Ú[X][Û”™]š[Ý\Ô™\ÜÛœÙRY
X›Ü™XÛÛ˜Ú[X][Û”Ý]K™\\™YØ[
KˆÛÛ™\œØ][Û’Yˆ™\\™YØ[˜ÛÛ™\œØ][Û’Yˆ[Ù[Ù][™ÜÎˆ™\\™YØ[›[Ù[Ù][™ÜËˆÚ[\›˜[ˆ™\\™YØ[›[Ù[™\]Y\Ý[\›˜[ˆÛÛÎˆ™\\™YØ[œÙ\šX[^™YÛÛËˆÛÛÑ^XÚ]T›ÝšYYˆ™\\™YØ[ÛÛÑ^XÚ]T›ÝšYYˆ[™Ù™œÎˆ™\\™YØ[œÙ\šX[^™Y[™Ù™œËˆÝ]]\NˆÛÛ™\YÙ[Ý]]\UÔÙ\šX[^˜X›JÝ\œ™[YÙ[›Ý]]\JKˆ˜XÚ[™ÎˆÙ]˜XÚ[™Ê\Ë˜ÛÛ™šYË˜XÚ[™Ñ\ØX›Y\Ë˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JBˆJNÂˆX\šÐX›Ü™XÛÛ˜Ú[X][ÛÛÛ\]JX›Ü™XÛÛ˜Ú[X][Û”Ý]K™XÛÛ˜Ú[X][Û”™\ÜÛœÙJNÂˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜XÚÔÙ\™\’][\Ê™XÛÛ˜Ú[X][Û”™\ÜÛœÙJNÂˆ™\Ý[œÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜ÛÛ™\œØ][Û’YÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™]š[Ý\Ô™\ÜÛœÙRY
NÂˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][™XYÊ‘˜Z[YÈ™XÛÛ˜Ú[HÝ™X[YY[˜Ý[ÛˆØ[ÈY\ˆX›Üˆ‹\œ›ÜLJNÂˆBˆNÂˆÙ[[œ]Ó[Ù[HYNÂˆYˆ
Y[^TÝ™X[R[œ]\œÚ\Ý[˜ÙJHÂˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆBˆžHÂˆ›Üˆ]ØZ]
ÛÛœÝ]™[ÙˆÙ]Ý™X[YY™\ÜÛœÙUÚ]™]žJ™\\™YØ[›[Ù[ÂˆÞ\Ý[R[œÝXÝ[ÛœÎˆ™\\™YØ[›[Ù[[œ]š[œÝXÝ[ÛœËˆ›Û\ˆ™\\™YØ[œ›Û\ˆËÈÝ™X[Z[™È™\]Y\ÝÈÚÝ[[ÛÈÛ›Üˆ^XÚ]HÚÜÙ[ˆ[Ù[Ë‚ˆ‹‹œ™\\™YØ[™^XÚ]S[Ù[Ù]ÈÈÝ™\œšYT›Û\[Ù[ˆYHHˆßKˆ[œ]ˆ™\\™YØ[›[Ù[[œ]š[œ]ˆ™]š[Ý\Ô™\ÜÛœÙRYˆ™\\™YØ[œ™]š[Ý\Ô™\ÜÛœÙRYˆÛÛ™\œØ][Û’Yˆ™\\™YØ[˜ÛÛ™\œØ][Û’Yˆ[Ù[Ù][™ÜÎˆ™\\™YØ[›[Ù[Ù][™ÜËˆÚ[\›˜[ˆ™\\™YØ[›[Ù[™\]Y\Ý[\›˜[ˆÛÛÎˆ™\\™YØ[œÙ\šX[^™YÛÛËˆÛÛÑ^XÚ]T›ÝšYYˆ™\\™YØ[ÛÛÑ^XÚ]T›ÝšYYˆ[™Ù™œÎˆ™\\™YØ[œÙ\šX[^™Y[™Ù™œËˆÝ]]\NˆÛÛ™\YÙ[Ý]]\UÔÙ\šX[^˜X›JÝ\œ™[YÙ[›Ý]]\JKˆ˜XÚ[™ÎˆÙ]˜XÚ[™Ê\Ë˜ÛÛ™šYË˜XÚ[™Ñ\ØX›Y\Ë˜ÛÛ™šYË˜XÙR[˜ÛYTÙ[œÚ]]™Q]JKˆÚYÛ˜[ˆÜ[ÛœËœÚYÛ˜[ˆJJHÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹›ÝÒY‘\œ›ÜŠ
NÂˆX\šÒ[œ]Û˜ÙJ
NÂˆ™XÛÜ™Ý™X[Q]™[›ÜX›Ü™XÛÛ˜Ú[X][ÛŠX›Ü™XÛÛ˜Ú[X][Û”Ý]K]™[
NÂˆYˆ
]™[\HOOHœ™\ÜÛœÙWÙÛ™HŠHÂˆÛÛœÝ\œÙYHÝ™X[Q]™[™\ÜÛœÙPÛÛ\]Yœ\œÙJ]™[
NÂˆš[˜[™\ÜÛœÙHHÂˆ\ØYÙNˆ™]È\ØYÙJ\œÙYœ™\ÜÛœÙK\ØYÙJKˆÝ]]ˆ\œÙYœ™\ÜÛœÙK›Ý]]ˆ™\ÜÛœÙRYˆ\œÙYœ™\ÜÛœÙKšYˆ™\]Y\ÝYˆ\œÙYœ™\ÜÛœÙKœ™\]Y\ÝYˆNÂˆ™\Ý[œÝ]K—ØÛÛ^\ØYÙK˜Y
š[˜[™\ÜÛœÙK\ØYÙJNÂˆBˆYˆ
™\Ý[˜Ø[˜Ù[Y
HÂˆ]ØZ]]ØZ]ÝX\™˜Z[Ð[™\œÚ\Ý[œ]

NÂˆ]ØZ]™XÛÛ˜Ú[TÝ™X[PX›ÜY“™YYY

NÂˆ™]\›ŽÂˆBˆ™\Ý[—ØY][J™]È[”˜]Ó[Ù[Ý™X[Q]™[
]™[
JNÂˆBˆHØ]Ú
\œ›ÜLJHÂˆYˆ
\ÐX›Ü\œ›ÜŠ\œ›ÜLJJHÂˆYˆ
Ù[[œ]Ó[Ù[
HÂˆX\šÒ[œ]Û˜ÙJ
NÂˆBˆ]ØZ]]ØZ]ÝX\™˜Z[Ð[™\œÚ\Ý[œ]

NÂˆ]ØZ]™XÛÛ˜Ú[TÝ™X[PX›ÜY“™YYY

NÂˆ™]\›ŽÂˆBˆ›ÝÈ\œ›ÜLNÂˆBˆYˆ
š[˜[™\ÜÛœÙJHÂˆX\šÒ[œ]Û˜ÙJ
NÂˆBˆ]ØZ]]ØZ]ÝX\™˜Z[Ð[™\œÚ\Ý[œ]

NÂˆYˆ
™\Ý[˜Ø[˜Ù[Y
HÂˆ™]\›ŽÂˆBˆ™\Ý[œÝ]K—Û›ÐXÝ]™PYÙ[[ˆH˜[ÙNÂˆYˆ
Yš[˜[™\ÜÛœÙJHÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠ“[Ù[Y›Ý›ÙXÙHHš[˜[™\ÜÛœÙHH‹™\Ý[œÝ]JNÂˆBˆ™\Ý[œÝ]K—Û\Ý\›”™\ÜÛœÙHHš[˜[™\ÜÛœÙNÂˆÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\Ë˜XÚÔÙ\™\’][\Êš[˜[™\ÜÛœÙJNÂˆYˆ
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\ŠHÂˆ™\Ý[œÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹˜ÛÛ™\œØ][Û’YÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\‹œ™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆ™\Ý[œÝ]K—Û[Ù[™\ÜÛœÙ\Ëœ\Ú
™\Ý[œÝ]K—Û\Ý\›”™\ÜÛœÙJNÂˆÛÛœÝ›ØÙ\ÜÙY™\ÜÛœÙHH]ØZ]›ØÙ\ÜÓ[Ù[™\ÜÛœÙP\Þ[˜Ê™\Ý[œÝ]K—Û\Ý\›”™\ÜÛœÙKÝ\œ™[YÙ[™\\™YØ[ÛÛË™\\™YØ[š[™Ù™œË™\Ý[œÝ]KË‹‹œ™\\™YØ[\›’[œ]‹‹œ™\Ý[œÝ]K—ÙÙ[™\˜]Y][\×KÜ[ÛœËÛÛ›Ý›Ý[™™Z]š[ÜŠNÂˆ™\Ý[œÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙHH›ØÙ\ÜÙY™\ÜÛœÙNÂˆÛÛœÝ™UÛÛ][\ÈH™]ÈÙ]
›ØÙ\ÜÙY™\ÜÛœÙK›™]Ò][\ÊNÂˆYˆ
™UÛÛ][\ËœÚ^™Hˆ
HÂˆÝ™X[TÝ\][\ÕÔ[”™\Ý[
™\Ý[›ØÙ\ÜÙY™\ÜÛœÙK›™]Ò][\ÊNÂˆBˆÛÛœÝ\›”™\Ý[H]ØZ]™\ÛÛ™U\›Y\“[Ù[™\ÜÛœÙJÝ\œ™[YÙ[™\Ý[œÝ]K—ÛÜšYÚ[˜[[œ]™\Ý[œÝ]K—ÙÙ[™\˜]Y][\Ë™\Ý[œÝ]K—Û\Ý\›”™\ÜÛœÙK™\Ý[œÝ]K—Û\Ý›ØÙ\ÜÙY™\ÜÛœÙK\Ë™\Ý[œÝ]KÛÛ\œ›Ü‘›Ü›X]\‹YÙ[ÛÛ\™[[ÛÛ™šYËÜ[ÛœË™\œ›Ü’[™\œÊNÂˆ\U\›”™\Ý[
ÂˆÝ]Nˆ™\Ý[œÝ]Kˆ\›”™\Ý[ˆYÙ[ˆÝ\œ™[YÙ[ˆÛÛÕ\ÙYˆ›ØÙ\ÜÙY™\ÜÛœÙKÛÛÕ\ÙYˆ™\Ù]\›”\œÚ\Ý[˜ÙNˆZ\Ô™\Ý[YYÝ]KˆÛ”Ý\][\Îˆ
Ý\
HOˆÂˆYÝ\Ô[”™\Ý[
™\Ý[Ý\ÈÚÚ\][\Îˆ™UÛÛ][\ÈJNÂˆBˆJNÂˆBˆÛÛœÝÝ\œ™[Ý\H™\Ý[œÝ]K—ØÝ\œ™[Ý\ÂˆÝÚ]Ú
Ý\œ™[Ý\\JHÂˆØ\ÙH›™^ÜÝ\Ùš[˜[ÛÝ]]Ž‚ˆžHÂˆ]ØZ][“Ý]]ÝX\™˜Z[Ê™\Ý[œÝ]K\Ë›Ý]]ÝX\™˜Z[YœËÝ\œ™[Ý\›Ý]]
NÂˆHØ]Ú
\œ›ÜLJHÂˆ™\Ý[œÝ]K—ØÝ\œ™[Ý\H›ÚYÂˆ™\Ý[œÝ]K—Ùš[˜[Ý]]ÛÝ\˜ÙHH›ÚYÂˆ›ÝÈ\œ›ÜLNÂˆBˆ™\Ý[œÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆYˆ
\Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠHÂˆ]ØZ]Ø]™TÝ™X[T™\Ý[ÔÙ\ÜÚ[ÛŠÜ[ÛœËœÙ\ÜÚ[Û‹™\Ý[
NÂˆBˆ\Ë™[Z]
˜YÙ[Ù[™‹™\Ý[œÝ]K—ØÛÛ^Ý\œ™[YÙ[Ý\œ™[Ý\›Ý]]
NÂˆÝ\œ™[YÙ[™[Z]
˜YÙ[Ù[™‹™\Ý[œÝ]K—ØÛÛ^Ý\œ™[Ý\›Ý]]
NÂˆ™]\›ŽÂˆØ\ÙH›™^ÜÝ\Ú[\œ\[ÛˆŽ‚ˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆYˆ
\Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠHÂˆ]ØZ]Ø]™TÝ™X[T™\Ý[ÔÙ\ÜÚ[ÛŠÜ[ÛœËœÙ\ÜÚ[Û‹™\Ý[
NÂˆBˆ™]\›ŽÂˆØ\ÙH›™^ÜÝ\Ú[™Ù™ˆŽ‚ˆ™\Ý[œÝ]KœÙ]Ý\œ™[YÙ[
Ý\œ™[Ý\›™]ÐYÙ[
NÂˆYˆ
™\Ý[œÝ]K—ØÝ\œ™[YÙ[Ü[ŠHÂˆ™\Ý[œÝ]K—ØÝ\œ™[YÙ[Ü[‹™[™

NÂˆ™\Ù]Ý\œ™[Ü[Š
NÂˆBˆ™\Ý[œÝ]KœÙ]Ý\œ™[YÙ[Ü[Š›ÚY
NÂˆ™\Ý[—ØY][J™]È[YÙ[\]YÝ™X[Q]™[
™\Ý[œÝ]K—ØÝ\œ™[YÙ[
JNÂˆ™\Ý[œÝ]K—Û›ÐXÝ]™PYÙ[[ˆHYNÂˆ™\Ý[œÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆ™\Ý[œÝ]K—ØÝ\œ™[Ý\HÂˆ\Nˆ›™^ÜÝ\Ü[—ØYØZ[ˆ‚ˆNÂˆœ™XZÎÂˆØ\ÙH›™^ÜÝ\Ü[—ØYØZ[ˆŽ‚ˆ™\Ý[œÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆÙÙÙ\—ÙY˜][™XYÊ”[›š[™È™^ÛÜŠNÂˆœ™XZÎÂˆY˜][‚ˆÙÙÙ\—ÙY˜][™XYÊ”[›š[™È™^ÛÜŠNÂˆBˆBˆHØ]Ú
\œ›ÜLJHÂˆ™\Ý[œÝ]K—ØÝ\œ™[\›’[”›ÙÜ™\ÜÈH˜[ÙNÂˆYˆ
ÝX\™˜Z[˜XÚÙ\‹œ[™[™ÊHÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹˜]ØZ]ÛÛ\][ÛŠÈÝ\™\ÜÑ\œ›ÜœÎˆYHJNÂˆBˆYˆ
Ù[[œ]Ó[Ù[	‰ˆ\Ý™X[R[œ]\œÚ\ÝY	‰ˆYÝX\™˜Z[˜XÚÙ\‹™˜Z[Y
HÂˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆBˆÛÛœÝ[™Y™\Ý[H]ØZ]žR[™T[‘\œ›ÜŠÂˆ\œ›ÜŽˆ\œ›ÜLKˆÝ]Nˆ™\Ý[œÝ]Kˆ\œ›Ü’[™\œÎˆÜ[ÛœË™\œ›Ü’[™\œËˆÝ]]ÝX\™˜Z[YœÎˆ\Ë›Ý]]ÝX\™˜Z[YœËˆ[Z]YÙ[[™ˆ
ÛÛ^YÙ[Ý]]^
HOˆÂˆ\Ë™[Z]
˜YÙ[Ù[™‹ÛÛ^YÙ[Ý]]^
NÂˆYÙ[™[Z]
˜YÙ[Ù[™‹ÛÛ^Ý]]^
NÂˆKˆÝ™X[T™\Ý[ˆ™\Ý[ˆJNÂˆYˆ
[™Y™\Ý[
HÂˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆYˆ
\Ù\™\“X[˜YÙ\ÐÛÛ™\œØ][ÛŠHÂˆ]ØZ]Ø]™TÝ™X[T™\Ý[ÔÙ\ÜÚ[ÛŠÜ[ÛœËœÙ\ÜÚ[Û‹™\Ý[
NÂˆBˆ™]\›ŽÂˆBˆYˆ
™\Ý[œÝ]K—ØÝ\œ™[YÙ[Ü[ŠHÂˆ™\Ý[œÝ]K—ØÝ\œ™[YÙ[Ü[‹œÙ]\œ›ÜŠÂˆY\ÜØYÙNˆ‘\œ›Üˆ[ˆYÙ[[ˆ‹ˆ]NˆÈ\œ›ÜŽˆÝš[™Ê\œ›ÜLJHBˆJNÂˆBˆ[‘\œ›ÜˆH\œ›ÜLNÂˆ›ÝÈ\œ›ÜLNÂˆHš[˜[HÂˆYˆ
ÝX\™˜Z[˜XÚÙ\‹œ[™[™ÊHÂˆ]ØZ]ÝX\™˜Z[˜XÚÙ\‹˜]ØZ]ÛÛ\][ÛŠÈÝ\™\ÜÑ\œ›ÜœÎˆYHJNÂˆBˆYˆ
Ù[[œ]Ó[Ù[	‰ˆ\Ý™X[R[œ]\œÚ\ÝY	‰ˆYÝX\™˜Z[˜XÚÙ\‹™˜Z[Y
HÂˆ]ØZ]\œÚ\ÝÝ™X[R[œ]Y“™YYY

NÂˆBˆÛÛœÝ™\Ù\™TØ[™›ÞÙ\ÜÚ[ÛœÈH™\Ý[œÝ]K—ØÝ\œ™[Ý\Ë\HOOH›™^ÜÝ\Ú[\œ\[ÛˆŽÂˆ]ØZ]š[˜[^™TØ[™›Þ[[YJÂˆÝ]Nˆ™\Ý[œÝ]KˆØ[™›Þ[[YKˆ™\Ù\™TÙ\ÜÚ[ÛœÑ›Ü’[\œ\[ÛŽˆ™\Ù\™TØ[™›ÞÙ\ÜÚ[ÛœËˆ[‘\œ›Ü‹ˆÜ›Ý\Yˆ\Ë˜ÛÛ™šYË™Ü›Ý\YˆY[[ÜžPÛÛ^ˆØ[™›ÞY[[ÜžT[ÛÛ^ˆ[YÙ[ˆ\Þ[˜È
YÙ[[œ][“Ü[ÛœÊHOˆ]ØZ]\Ëœ[ŠYÙ[[œ][“Ü[ÛœÊBˆJNÂˆBˆNÂˆ[’[™]šYX[Ý™X[WÙ›ˆH\Þ[˜È[˜Ý[ÛŠYÙ[[œ]Ü[ÛœË[œÝ\™TÝ™X[R[œ]\œÚ\ÝYÙ\ÜÚ[Û’[œ]\]K™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKØ[™›ÞY[[ÜžT[ÛÛ^
HÂˆÜ[ÛœÈHÜ[ÛœÈÏÈßNÂˆ™]\›ˆÚ]™]ÔÜ[ÛÛ^
\Þ[˜È

HOˆÂˆÛÛœÝ\Ô™\Ý[YYÝ]HH[œ][œÝ[˜Ù[Ùˆ[”Ý]NÂˆÛÛœÝÝ]HH\Ô™\Ý[YYÝ]HÈ[œ]ˆ™]È[”Ý]JÜ[ÛœË˜ÛÛ^[œÝ[˜Ù[Ùˆ[ÛÛ^ÈÜ[ÛœË˜ÛÛ^ˆ™]È[ÛÛ^
Ü[ÛœË˜ÛÛ^
K[œ]YÙ[Ü[ÛœË›X^\›œÈOOH›ÚYÈQUSÓPVÕT“”ÈˆÜ[ÛœË›X^\›œÊNÂˆYˆ
\Ô™\Ý[YYÝ]JHÂˆÝ]K—ØYÙ[ÛÛ[›ØØ][ÛˆH›ÚYÂˆYˆ
Ü[ÛœË›X^\›œÈOOH›ÚY
HÂˆÝ]K—ÛX^\›œÈHÜ[ÛœË›X^\›œÎÂˆBˆBˆÛÛœÝØ[™›Þ[[YHH™]ÈØ[™›Þ[[YSX[˜YÙ\ŠÂˆÝ\[™ÐYÙ[ˆYÙ[ˆØ[™›ÞÛÛ™šYÎˆÜ[ÛœËœØ[™›ÞÏÈ\Ë˜ÛÛ™šYËœØ[™›Þˆ[”Ý]Nˆ\Ô™\Ý[YYÝ]HÈÝ]Hˆ›ÚYˆJNÂˆÛÛœÝ™\ÛÛ™YÛÛ™\œØ][Û’YHÜ[ÛœË˜ÛÛ™\œØ][Û’YÏÈ
\Ô™\Ý[YYÝ]HÈÝ]K—ØÛÛ™\œØ][Û’Yˆ›ÚY
NÂˆÛÛœÝ™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRYHÜ[ÛœËœ™]š[Ý\Ô™\ÜÛœÙRYÏÈ
\Ô™\Ý[YYÝ]HÈÝ]K—Ü™]š[Ý\Ô™\ÜÛœÙRYˆ›ÚY
NÂˆYˆ
Z\Ô™\Ý[YYÝ]JHÂˆÝ]KœÙ]ÛÛ™\œØ][ÛÛÛ^
™\ÛÛ™YÛÛ™\œØ][Û’Y™\ÛÛ™Y™]š[Ý\Ô™\ÜÛœÙRY
NÂˆBˆÛÛœÝ™\Ý[H™]ÈÝ™X[YY[”™\Ý[
ÂˆÚYÛ˜[ˆÜ[ÛœËœÚYÛ˜[ˆÝ]BˆJNÂˆÛÛœÝÝ™X[SÜ[ÛœÈHÂˆ‹‹›Ü[ÛœËˆÚYÛ˜[ˆ™\Ý[—ÙÙ]X›ÜÚYÛ˜[

BˆNÂˆ™\Ý[›X^\›œÈHÝ]K—ÛX^\›œÎÂˆÛÛœÝÝ™X[SÛÜ›ÛZ\ÙHH×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë[”Ý™X[SÛÜÙ›ŠK˜Ø[
\Ë™\Ý[YÙ[Ø[™›Þ[[YKÝ™X[SÜ[ÛœË\Ô™\Ý[YYÝ]K[œÝ\™TÝ™X[R[œ]\œÚ\ÝYÙ\ÜÚ[Û’[œ]\]K™\Ù\™U\›”\œÚ\Ý[˜ÙSÛ”™\Ý[YKØ[™›ÞY[[ÜžT[ÛÛ^
K[Š

HOˆÂˆ™\Ý[—ÙÛ™J
NÂˆK
\œŠHOˆÂˆ™\Ý[—Ü˜Z\ÙQ\œ›ÜŠ\œŠNÂˆJNÂˆ™\Ý[—ÜÙ]Ý™X[SÛÜ›ÛZ\ÙJÝ™X[SÛÜ›ÛZ\ÙJNÂˆ™]\›ˆ™\Ý[ÂˆJNÂˆNÂˆ™\\™S[Ù[Ø[Ù›ˆH\Þ[˜È[˜Ý[ÛŠÝ]K^XÝ][ÛYÙ[Ü[ÛœË\Y˜XÝË\›’[œ]Ù\™\ÛÛ™\œØ][Û•˜XÚÙ\‹Ù\ÜÚ[Û’[œ]\]JHÂˆÛÛœÝÈ[Ù[^XÚ]S[Ù[Ù]™\ÛÛ™Y[Ù[˜[YHHH]ØZ]×Üš]˜]SY]Ù
\ËÔ[›™\—Ú[œÝ[˜Ù\Ë™\ÛÛ™S[Ù[›ÜYÙ[Ù›ŠK˜Ø[
\Ë^XÝ][ÛYÙ[
NÂˆÛÛœÝ\Ñ^XÚ]YÙ[[Ù[Ù][™ÜÈH^XÝ][ÛYÙ[š\Ñ^XÚ][Ù[Ù][™ÜÊ
NÂˆÛÛœÝYÙ[[Ù[Ù][™ÜÈH\Ñ^XÚ]YÙ[[Ù[Ù][™ÜÈÈ^XÝ][ÛYÙ[›[Ù[Ù][™ÜÈˆ›ÚYÂˆÛÛœÝ[\XÚ][Ù[Ù][™ÜÈH\Ñ^XÚ]YÙ[[Ù[Ù][™ÜÈÈ›ÚYˆÙ][\XÚ][Ù[Ù][™ÜÑ›Ü”™\ÛÛ™Y[Ù[
^XÚ]S[Ù[Ù]™\ÛÛ™Y[Ù[˜[YJNÂˆÛÛœÝ[Ù[™\]Y\Ý[\›˜[HÂˆ™X\ÛÛš[™ÑY™›Ü[\XÚ]ˆ[\XÚ][Ù[Ù][™ÜÏËœ™X\ÛÛš[™ÏË™Y™›ÜOOH›ÚY	‰ˆZ\Ñ^XÚ]Ü]™[™X\ÛÛš[™ÑY™›Ü
\Ë˜ÛÛ™šYË›[Ù[Ù][™ÜÊH	‰ˆZ\Ñ^XÚ]Ü]™[™X\ÛÛš[™ÑY™›Ü
YÙ[[Ù[Ù][™ÜÊBˆNÂˆ][Ù[Ù][™ÜÈHY\™ÙS[Ù[Ù][™ÜÊ[\XÚ][Ù[Ù][™ÜË\Ë˜ÛÛ™šYË›[Ù[Ù][™ÜÊNÂˆ[Ù[Ù][™ÜÈHY\™ÙS[Ù[Ù][™ÜÊ[Ù[Ù][™ÜËYÙ[[Ù[Ù][™ÜÊNÂˆ[Ù[Ù][™ÜÈHY\Ý[Ù[Ù][™ÜÑ›Ü“›Û‘ÔT[›™\“[Ù[
^XÚ]S[Ù[Ù]YÙ[[Ù[Ù][™ÜÈÏÈ[\XÚ][Ù[Ù][™ÜÈÏÈßK[Ù[[Ù[Ù][™ÜË™\ÛÛ™Y[Ù[˜[YJNÂˆ[Ù[Ù][™ÜÈHX^X™T™\Ù]ÛÛÚÚXÙJÝ]K—ØÝ\œ™[YÙ[Ý]K—ÝÛÛ\ÙU˜XÚÙ\‹[Ù[Ù][™ÜÊNÂˆÝ]K—Û\Ý[Ù[Ù][™ÜÈH[Ù[Ù][™ÜÎÂˆÛÛœÝÞ\Ý[R[œÝXÝ[ÛœÈH]ØZ]^XÝ][ÛYÙ[™Ù]Þ\Ý[T›Û\
Ý]K—ØÛÛ^
NÂˆÛÛœÝ›Û\ˆH]ØZ]^XÝ][ÛYÙ[™Ù]›Û\
Ý]K—ØÛÛ^
NÂˆÛÛœÝÈ[Ù[[œ]ÛÝ\˜ÙR][\Ë\œÚ\ÝY][\Ëš[\\YYHH]ØZ]\PØ[[Ù[[œ]š[\ŠÝ]K—ØÝ\œ™[YÙ[Ü[ÛœË˜Ø[[Ù[[œ]š[\‹Ý]K—ØÛÛ^\›’[œ]Þ\Ý[R[œÝXÝ[ÛœÊNÂˆÙ\ÜÚ[Û’[œ]\]OËŠÛÝ\˜ÙR][\Ëš[\\YYÈ\œÚ\ÝY][\Èˆ›ÚY
NÂˆÛÛœÝ™]š[Ý\Ô™\ÜÛœÙRYHÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\Ëœ™]š[Ý\Ô™\ÜÛœÙRYÏÈÜ[ÛœËœ™]š[Ý\Ô™\ÜÛœÙRYÂˆÛÛœÝÛÛ™\œØ][Û’YHÙ\™\ÛÛ™\œØ][Û•˜XÚÙ\Ë˜ÛÛ™\œØ][Û’YÏÈÜ[ÛœË˜ÛÛ™\œØ][Û’YÂˆ™]\›ˆÂˆ‹‹˜\Y˜XÝËˆ[Ù[ˆ^XÚ]S[Ù[Ù]ˆ[Ù[™\]Y\Ý[\›˜[ˆ[Ù[Ù][™ÜËˆ[Ù[[œ]ˆ›Û\ˆ›Û\‹ˆ™]š[Ý\Ô™\ÜÛœÙRYˆÛÛ™\œØ][Û’YˆÛÝ\˜ÙR][\Ëˆš[\\YYˆ\›’[œ]ˆNÂˆNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[ÛÛ[œ]›ZœÂ™[˜Ý[ÛˆY˜][[œ]Z[\ŠÜ[ÛœÊHÂˆÛÛœÝÙXÝ[ÛœÈHÔÕ•PÕT‘QÒS”UÔ‘PSP“WNÂˆÙXÝ[ÛœËœ\Ú
ˆÈÈÝXÝ\™Y[œ]]NˆŠNÂˆÙXÝ[ÛœËœ\Ú
—˜ŠNÂˆÛÛœÝ]RœÛÛˆHØY™RœÛÛ”Ýš[™ÚYžJÜ[ÛœËœ\˜[\ËŠNÂˆÙXÝ[ÛœËœ\Ú
]RœÛÛˆÏÈ›[ŠNÂˆÙXÝ[ÛœËœ\Ú
˜ˆŠNÂˆYˆ
Ü[ÛœËšœÛÛ”ØÚ[XJHÂˆÙXÝ[ÛœËœ\Ú
ˆÈÈ[œ]”ÓÓˆØÚ[XNˆŠNÂˆÙXÝ[ÛœËœ\Ú
—˜ŠNÂˆÙXÝ[ÛœËœ\Ú
ØY™RœÛÛ”Ýš[™ÚYžJÜ[ÛœËšœÛÛ”ØÚ[XKŠHÏÈ›[ŠNÂˆÙXÝ[ÛœËœ\Ú
˜ˆŠNÂˆÙXÝ[ÛœËœ\Ú
—ˆŠNÂˆH[ÙHYˆ
Ü[ÛœËœÝ[[X\žJHÂˆÙXÝ[ÛœËœ\Ú
ˆÈÈ[œ]ØÚ[XHÝ[[X\žNˆŠNÂˆÙXÝ[ÛœËœ\Ú
Ü[ÛœËœÝ[[X\žJNÂˆÙXÝ[ÛœËœ\Ú
—ˆŠNÂˆBˆ™]\›ˆÙXÝ[ÛœËš›Ú[Š—ˆŠNÂŸB˜\Þ[˜È[˜Ý[Ûˆ™\ÛÛ™PYÙ[ÛÛ[œ]
Ü[ÛœÊHÂˆÛÛœÝÚÝ[Z[ÝXÝ\™Y[œ]H\[ÙˆÜ[ÛœËš[œ]Z[\ˆOOH™[˜Ý[Ûˆˆ›ÛÛX[ŠÜ[ÛœËœØÚ[XR[™›ÏËœÝ[[X\žJH›ÛÛX[ŠÜ[ÛœËœØÚ[XR[™›ÏËšœÛÛ”ØÚ[XJNÂˆYˆ
ÚÝ[Z[ÝXÝ\™Y[œ]
HÂˆÛÛœÝZ[\ˆHÜ[ÛœËš[œ]Z[\ˆÏÈY˜][[œ]Z[\ŽÂˆ™]\›ˆ]ØZ]Z[\ŠÂˆ\˜[\ÎˆÜ[ÛœËœ\˜[\ËˆÝ[[X\žNˆÜ[ÛœËœØÚ[XR[™›ÏËœÝ[[X\žKˆœÛÛ”ØÚ[XNˆÜ[ÛœËœØÚ[XR[™›ÏËšœÛÛ”ØÚ[XBˆJNÂˆBˆYˆ
\ÐYÙ[ÛÛ[œ]
Ü[ÛœËœ\˜[\ÊH	‰ˆ\ÓÛ›R[œ]šY[
Ü[ÛœËœ\˜[\ÊJHÂˆ™]\›ˆÜ[ÛœËœ\˜[\Ëš[œ]ÂˆBˆ™]\›ˆØY™RœÛÛ”Ýš[™ÚYžJÜ[ÛœËœ\˜[\ÊHÏÈ›[ŽÂŸB™[˜Ý[Ûˆ\ÓÛ›R[œ]šY[
˜[YJHÂˆÛÛœÝÙ^\ÈHØš™XÝšÙ^\Ê˜[YJNÂˆ™]\›ˆÙ^\Ë›[™ÝOOHH	‰ˆÙ^\ÖÌHOOHš[œ]ŽÂŸB™[˜Ý[ÛˆØY™RœÛÛ”Ýš[™ÚYžJ˜[YKÜXÙJHÂˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJ˜[YK”ÓÓ—Ð’QÒS•Ô‘TPÑT‹ÜXÙJNÂŸB™[˜Ý[ÛˆZ[ÝXÝ\™Y[œ]ØÚ[XR[™›Ê\˜[\ËÛÛ˜[YK[˜ÛYRœÛÛ”ØÚ[XJHÂˆYˆ
\\˜[\ÊHÂˆ™]\›ˆßNÂˆBˆÛÛœÝÝ[[X\žHHZ[ØÚ[XTÝ[[X\žJ\˜[\ÊNÂˆÛÛœÝœÛÛ”ØÚ[XHH[˜ÛYRœÛÛ”ØÚ[XHÈÙ]ØÚ[XP[™\œÙ\‘œ›ÛR[œ]\J\˜[\ËÛÛ˜[YJKœØÚ[XHˆ›ÚYÂˆ™]\›ˆÈÝ[[X\žKœÛÛ”ØÚ[XHNÂŸB™[˜Ý[Ûˆ›Ü›X]ØÚ[XTÝ[[X\žJÝ[[X\žJHÂˆÛÛœÝ[™\ÈH×NÂˆYˆ
Ý[[X\žK™\ØÜš\[ÛŠHÂˆ[™\Ëœ\Ú
\ØÜš\[ÛŽˆ	ÜÝ[[X\žK™\ØÜš\[ÛŸX
NÂˆBˆ›Üˆ
ÛÛœÝšY[ÙˆÝ[[X\žK™šY[ÊHÂˆÛÛœÝ™\]Z\™[Y[HšY[œ™\]Z\™YÈœ™\]Z\™Yˆˆ›Ü[Û˜[ŽÂˆÛÛœÝÝY™š^HšY[™\ØÜš\[ÛˆÈH	ÙšY[™\ØÜš\[ÛŸXˆˆŽÂˆ[™\Ëœ\Ú
H	ÙšY[›˜[Y_H
	ÙšY[\_K	Ü™\]Z\™[Y[JIÜÝY™š^X
NÂˆBˆ™]\›ˆ[™\Ëš›Ú[Š—ˆŠNÂŸB™[˜Ý[ÛˆZ[ØÚ[XTÝ[[X\žJ\˜[Y]\œÊHÂˆYˆ
\Ö›ÙØš™XÝ
\˜[Y]\œÊJHÂˆÛÛœÝÝ[[X\žHHÝ[[X\š^™V›ÙØÚ[XJ\˜[Y]\œÊNÂˆ™]\›ˆÝ[[X\žHÈ›Ü›X]ØÚ[XTÝ[[X\žJÝ[[X\žJHˆ›ÚYÂˆBˆYˆ
\ÒœÛÛ”ØÚ[XSØš™XÝÚ\J\˜[Y]\œÊJHÂˆÛÛœÝÝ[[X\žHHÝ[[X\š^™RœÛÛ”ØÚ[XJ\˜[Y]\œÊNÂˆ™]\›ˆÝ[[X\žHÈ›Ü›X]ØÚ[XTÝ[[X\žJÝ[[X\žJHˆ›ÚYÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[ÛˆÝ[[X\š^™V›ÙØÚ[XJØÚ[XJHÂˆÛÛœÝÚ\HH™XY›ÙÚ\JØÚ[XJNÂˆYˆ
\Ú\JHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝšY[ÈH×NÂˆ]\Ñ\ØÜš\[ÛˆH˜[ÙNÂˆ›Üˆ
ÛÛœÝÛ˜[YKšY[ØÚ[XWHÙˆØš™XÝ™[šY\ÊÚ\JJHÂˆÛÛœÝšY[H\ØÜšX™V›ÙšY[
šY[ØÚ[XJNÂˆYˆ
YšY[
HÂˆ™]\›ˆ›ÚYÂˆBˆšY[Ëœ\Ú
Âˆ˜[YKˆ\NˆšY[\Kˆ™\]Z\™YˆYšY[›Ü[Û˜[ˆ\ØÜš\[ÛŽˆšY[™\ØÜš\[Û‚ˆJNÂˆYˆ
šY[™\ØÜš\[ÛŠHÂˆ\Ñ\ØÜš\[ÛˆHYNÂˆBˆBˆÛÛœÝ\ØÜš\[ÛˆH™XY›Ù\ØÜš\[ÛŒŠØÚ[XJNÂˆYˆ
\ØÜš\[ÛŠHÂˆ\Ñ\ØÜš\[ÛˆHYNÂˆBˆYˆ
Z\Ñ\ØÜš\[ÛŠHÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆÈ\ØÜš\[Û‹šY[ÈNÂŸB™[˜Ý[ÛˆÝ[[X\š^™RœÛÛ”ØÚ[XJØÚ[XJHÂˆYˆ
ØÚ[XK\HOOH›Øš™XÝˆ\[ÙˆØÚ[XKœ›Ü\Y\ÈOOH›Øš™XÝŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ™\]Z\™YˆH™]ÈÙ]
\œ˜^Kš\Ð\œ˜^JØÚ[XKœ™\]Z\™Y
HÈØÚ[XKœ™\]Z\™Yˆ×JNÂˆÛÛœÝšY[ÈH×NÂˆ]\Ñ\ØÜš\[ÛˆH˜[ÙNÂˆÛÛœÝ\ØÜš\[ÛˆH™XYØÚ[XQ\ØÜš\[ÛŠØÚ[XJNÂˆYˆ
\ØÜš\[ÛŠHÂˆ\Ñ\ØÜš\[ÛˆHYNÂˆBˆ›Üˆ
ÛÛœÝÛ˜[YKšY[ØÚ[XWHÙˆØš™XÝ™[šY\ÊØÚ[XKœ›Ü\Y\ÊJHÂˆÛÛœÝšY[H\ØÜšX™RœÛÛ”ØÚ[XQšY[
šY[ØÚ[XJNÂˆYˆ
YšY[
HÂˆ™]\›ˆ›ÚYÂˆBˆšY[Ëœ\Ú
Âˆ˜[YKˆ\NˆšY[\Kˆ™\]Z\™Yˆ™\]Z\™Y‹š\Ê˜[YJKˆ\ØÜš\[ÛŽˆšY[™\ØÜš\[Û‚ˆJNÂˆYˆ
šY[™\ØÜš\[ÛŠHÂˆ\Ñ\ØÜš\[ÛˆHYNÂˆBˆBˆYˆ
Z\Ñ\ØÜš\[ÛŠHÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆÈ\ØÜš\[Û‹šY[ÈNÂŸB™[˜Ý[Ûˆ\ØÜšX™V›ÙšY[
˜[YJHÂˆÛÛœÝÈ[›™\‹Ü[Û˜[ˆÜ[Û˜[‹[X›Nˆ[X›LˆHH[Ü˜\›ÙÜ[Û˜[
˜[YJNÂˆÛÛœÝ\HH™XY›Ù\J[›™\ŠNÂˆYˆ
]\JHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝYˆH™XY›ÙYš[š][ÛŠ[›™\ŠNÂˆ]\SX™[HÒSTWÖ“ÑÕTWÓP‘SÖÝ\WNÂˆYˆ
]\SX™[
HÂˆYˆ
\HOOH™[[Hˆ\HOOH›˜]]™Y[[HŠHÂˆ\SX™[H›Ü›X][[SX™[
^˜XÝ[[U˜[Y\ÊYŠJNÂˆH[ÙHYˆ
\HOOH›]\˜[ŠHÂˆ\SX™[H›Ü›X]]\˜[X™[
YŠNÂˆH[ÙHÂˆ™]\›ˆ›ÚYÂˆBˆBˆYˆ
[X›LŠHÂˆ\SX™[H	Ý\SX™[H[ÂˆBˆÛÛœÝ\ØÜš\[ÛˆH™XY›Ù\ØÜš\[ÛŒŠ˜[YJNÂˆ™]\›ˆÈ\Nˆ\SX™[Ü[Û˜[ˆÜ[Û˜[‹\ØÜš\[ÛˆNÂŸB™[˜Ý[Ûˆ\ØÜšX™RœÛÛ”ØÚ[XQšY[
ØÚ[XJHÂˆYˆ
\[ÙˆØÚ[XHOOH›Øš™XÝˆØÚ[XHOOH[
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝYš[š][ÛˆHØÚ[XNÂˆYˆ
œ›Ü\Y\Èˆ[ˆYš[š][Ûˆš][\Èˆ[ˆYš[š][Ûˆ›Û™SÙˆˆ[ˆYš[š][Ûˆ˜[žSÙˆˆ[ˆYš[š][Ûˆ˜[Ùˆˆ[ˆYš[š][ÛŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ\ØÜš\[ÛˆH™XYØÚ[XQ\ØÜš\[ÛŠYš[š][ÛŠNÂˆÛÛœÝ˜]Õ\HHYš[š][Û‹\NÂˆYˆ
\œ˜^Kš\Ð\œ˜^J˜]Õ\JJHÂˆÛÛœÝ\\ÈH˜]Õ\K™š[\Š
[žJHOˆ\[Ùˆ[žHOOHœÝš[™ÈŠNÂˆÛÛœÝ[ÝÙYH\\Ë™š[\Š
[žJHOˆÒSTWÒ”ÓÓ—ÔÐÒSPWÕTTËš\Ê[žJJNÂˆÛÛœÝ\Ó[H\\Ëš[˜ÛY\Ê›[ŠNÂˆYˆ
[ÝÙY›[™ÝOOHH\\Ë›[™ÝOOH[ÝÙY›[™Ý
È
\Ó[ÈHˆ
JHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ˜\ÙU\HH[ÝÙYÌNÂˆ™]\›ˆÈ\Nˆ\Ó[È	Ø˜\ÙU\_H[ˆ˜\ÙU\K\ØÜš\[ÛˆNÂˆBˆYˆ
\[Ùˆ˜]Õ\HOOHœÝš[™ÈŠHÂˆYˆ
TÒSTWÒ”ÓÓ—ÔÐÒSPWÕTTËš\Ê˜]Õ\JJHÂˆ™]\›ˆ›ÚYÂˆBˆ™]\›ˆÈ\Nˆ˜]Õ\K\ØÜš\[ÛˆNÂˆBˆYˆ
\œ˜^Kš\Ð\œ˜^JYš[š][Û‹™[[JJHÂˆ™]\›ˆÈ\Nˆ›Ü›X][[SX™[
Yš[š][Û‹™[[JK\ØÜš\[ÛˆNÂˆBˆYˆ
˜ÛÛœÝˆ[ˆYš[š][ÛŠHÂˆ™]\›ˆÈ\Nˆ›Ü›X]]\˜[X™[
Yš[š][ÛŠK\ØÜš\[ÛˆNÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ[Ü˜\›ÙÜ[Û˜[
˜[YJHÂˆ]Ý\œ™[H[Ü˜\XÛÜ˜]ÜœÌÊ˜[YJNÂˆ]Ü[Û˜[ˆH˜[ÙNÂˆ][X›LˆH˜[ÙNÂˆÛÛœÝš\Ú]YHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÚ[H
Ý\œ™[	‰ˆ\[ÙˆÝ\œ™[OOH›Øš™XÝˆ	‰ˆ]š\Ú]Yš\ÊÝ\œ™[
JHÂˆš\Ú]Y˜Y
Ý\œ™[
NÂˆÛÛœÝ\HH™XY›Ù\JÝ\œ™[
NÂˆÛÛœÝYˆH™XY›ÙYš[š][ÛŠÝ\œ™[
NÂˆYˆ
\H	‰ˆÔSÓSÕÔTT”Ì‹š\Ê\JJHÂˆÜ[Û˜[ˆHYNÂˆÛÛœÝ™^H[Ü˜\XÛÜ˜]ÜœÌÊYËš[›™\•\JNÂˆYˆ
[™^™^OOHÝ\œ™[
HÂˆœ™XZÎÂˆBˆÝ\œ™[H™^ÂˆÛÛ[YNÂˆBˆYˆ
\H	‰ˆ•SP“WÕÔTT”Ëš\Ê\JJHÂˆ[X›LˆHYNÂˆÛÛœÝ™^H[Ü˜\XÛÜ˜]ÜœÌÊYËš[›™\•\HÏÈYË\JNÂˆYˆ
[™^™^OOHÝ\œ™[
HÂˆœ™XZÎÂˆBˆÝ\œ™[H™^ÂˆÛÛ[YNÂˆBˆœ™XZÎÂˆBˆ™]\›ˆÈ[›™\ŽˆÝ\œ™[Ü[Û˜[ˆÜ[Û˜[‹[X›Nˆ[X›LˆNÂŸB™[˜Ý[Ûˆ[Ü˜\XÛÜ˜]ÜœÌÊ˜[YJHÂˆ]Ý\œ™[H˜[YNÂˆÛÛœÝš\Ú]YHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÚ[H
Ý\œ™[	‰ˆ\[ÙˆÝ\œ™[OOH›Øš™XÝˆ	‰ˆ]š\Ú]Yš\ÊÝ\œ™[
JHÂˆš\Ú]Y˜Y
Ý\œ™[
NÂˆÛÛœÝ\HH™XY›Ù\JÝ\œ™[
NÂˆYˆ
]\HQPÓÔUÔ—ÕÔTT”Ì‹š\Ê\JJHÂˆœ™XZÎÂˆBˆÛÛœÝYˆH™XY›ÙYš[š][ÛŠÝ\œ™[
NÂˆÛÛœÝ™^HYËš[›™\•\HÏÈYËœØÚ[XHÏÈYË˜˜\ÙHÏÈYË\HÏÈYËÜ˜\YÏÈYË[™\›Z[™ÎÂˆYˆ
[™^™^OOHÝ\œ™[
HÂˆœ™XZÎÂˆBˆÝ\œ™[H™^ÂˆBˆ™]\›ˆÝ\œ™[ÂŸB™[˜Ý[Ûˆ™XY›ÙÚ\J[œ]
HÂˆYˆ
\[Ùˆ[œ]OOH›Øš™XÝˆ[œ]OOH[
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝØ[™Y]HH[œ]ÂˆYˆ
Ø[™Y]KœÚ\H	‰ˆ\[ÙˆØ[™Y]KœÚ\HOOH›Øš™XÝŠHÂˆ™]\›ˆØ[™Y]KœÚ\NÂˆBˆYˆ
\[ÙˆØ[™Y]KœÚ\HOOH™[˜Ý[ÛˆŠHÂˆžHÂˆ™]\›ˆØ[™Y]KœÚ\J
NÂˆHØ]Ú
Ù\œ›ÜŒÊHÂˆ™]\›ˆ›ÚYÂˆBˆBˆÛÛœÝYˆH™XY›ÙYš[š][ÛŠØ[™Y]JNÂˆÛÛœÝÚ\HHYËœÚ\NÂˆYˆ
Ú\H	‰ˆ\[ÙˆÚ\HOOH›Øš™XÝŠHÂˆ™]\›ˆÚ\NÂˆBˆYˆ
\[ÙˆÚ\HOOH™[˜Ý[ÛˆŠHÂˆžHÂˆ™]\›ˆÚ\J
NÂˆHØ]Ú
Ù\œ›ÜŒÊHÂˆ™]\›ˆ›ÚYÂˆBˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ™XY›Ù\ØÜš\[ÛŒŠ˜[YJHÂˆYˆ
\[Ùˆ˜[YHOOH›Øš™XÝˆ	‰ˆ˜[YHOOH[
HÂˆÛÛœÝ\™XÝH˜[YK™\ØÜš\[ÛŽÂˆYˆ
\[Ùˆ\™XÝOOHœÝš[™Èˆ	‰ˆ\™XÝš[J
JHÂˆ™]\›ˆ\™XÝÂˆBˆBˆ]Ý\œ™[H˜[YNÂˆÛÛœÝš\Ú]YHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÚ[H
Ý\œ™[	‰ˆ\[ÙˆÝ\œ™[OOH›Øš™XÝˆ	‰ˆ]š\Ú]Yš\ÊÝ\œ™[
JHÂˆš\Ú]Y˜Y
Ý\œ™[
NÂˆÛÛœÝYˆH™XY›ÙYš[š][ÛŠÝ\œ™[
NÂˆYˆ
\[ÙˆYË™\ØÜš\[ÛˆOOHœÝš[™Èˆ	‰ˆY‹™\ØÜš\[Û‹š[J
JHÂˆ™]\›ˆY‹™\ØÜš\[ÛŽÂˆBˆÛÛœÝ™^HYËš[›™\•\HÏÈYËœØÚ[XHÏÈYË˜˜\ÙHÏÈYË\HÏÈYËÜ˜\YÏÈYË[™\›Z[™ÎÂˆYˆ
[™^™^OOHÝ\œ™[
HÂˆœ™XZÎÂˆBˆÝ\œ™[H™^ÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ™XYØÚ[XQ\ØÜš\[ÛŠ˜[YJHÂˆYˆ
\[Ùˆ˜[YHOOH›Øš™XÝˆ˜[YHOOH[
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ\ØÜš\[ÛˆH˜[YK™\ØÜš\[ÛŽÂˆYˆ
\[Ùˆ\ØÜš\[ÛˆOOHœÝš[™Èˆ	‰ˆ\ØÜš\[Û‹š[J
JHÂˆ™]\›ˆ\ØÜš\[ÛŽÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ^˜XÝ[[U˜[Y\ÊYŠHÂˆYˆ
YYŠHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
\œ˜^Kš\Ð\œ˜^JY‹˜[Y\ÊJHÂˆ™]\›ˆY‹˜[Y\ÎÂˆBˆYˆ
Y‹™[šY\È	‰ˆ\[ÙˆY‹™[šY\ÈOOH›Øš™XÝŠHÂˆ™]\›ˆØš™XÝ˜[Y\ÊY‹™[šY\ÊNÂˆBˆYˆ
\œ˜^Kš\Ð\œ˜^JY‹›Ü[ÛœÊJHÂˆ™]\›ˆY‹›Ü[ÛœÎÂˆBˆYˆ
Y‹˜[Y\È	‰ˆ\[ÙˆY‹˜[Y\ÈOOH›Øš™XÝŠHÂˆ™]\›ˆØš™XÝ˜[Y\ÊY‹˜[Y\ÊNÂˆBˆYˆ
Y‹™[[H	‰ˆ\[ÙˆY‹™[[HOOH›Øš™XÝŠHÂˆ™]\›ˆØš™XÝ˜[Y\ÊY‹™[[JNÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[Ûˆ›Ü›X][[SX™[
˜[Y\ÊHÂˆYˆ
]˜[Y\È˜[Y\Ë›[™ÝOOH
HÂˆ™]\›ˆ™[[HŽÂˆBˆÛÛœÝ™]šY]ÈH˜[Y\ËœÛXÙJJK›X\

˜[YJHOˆ”ÓÓ‹œÝš[™ÚYžJ˜[YJJKš›Ú[ŠˆŠNÂˆÛÛœÝÝY™š^H˜[Y\Ë›[™ÝˆHÈˆ‹‹ˆˆˆˆŽÂˆ™]\›ˆ[[J	Ü™]šY]ßIÜÝY™š^JXÂŸB™[˜Ý[Ûˆ›Ü›X]]\˜[X™[
YŠHÂˆYˆ
Yˆ	‰ˆ˜[YHˆ[ˆYŠHÂˆ™]\›ˆ]\˜[
	Ò”ÓÓ‹œÝš[™ÚYžJY‹˜[YJ_JXÂˆBˆYˆ
Yˆ	‰ˆ›]\˜[ˆ[ˆYŠHÂˆ™]\›ˆ]\˜[
	Ò”ÓÓ‹œÝš[™ÚYžJY‹›]\˜[
_JXÂˆBˆYˆ
Yˆ	‰ˆ˜ÛÛœÝˆ[ˆYŠHÂˆ™]\›ˆ]\˜[
	Ò”ÓÓ‹œÝš[™ÚYžJY‹˜ÛÛœÝ
_JXÂˆBˆ™]\›ˆ›]\˜[ŽÂŸB˜\ˆÕ•PÕT‘QÒS”UÔ‘PSP“KÒSTWÒ”ÓÓ—ÔÐÒSPWÕTTËÒSTWÖ“ÑÕTWÓP‘SËÔSÓSÕÔTT”Ì‹•SP“WÕÔTT”ËPÓÔUÔ—ÕÔTT”Ì‹”ÓÓ—Ð’QÒS•Ô‘TPÑT‹YÙ[\ÕÛÛ[œ]ØÚ[XNÂ˜\ˆ[š]ØYÙ[ÛÛ[œ]H×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[ÛÛ[œ]›ZœÈŠ
HÂˆ[š]Þ›Ù

NÂˆ[š]Þ›ÙÛÛ\]

NÂˆ[š]ÝÛÛÊ
NÂˆ[š]Þ›ÙœÛÛ”ØÚ[XPÛÛ\]

NÂˆ[š]Ý\QÝX\™Ê
NÂˆÕ•PÕT‘QÒS”UÔ‘PSP“HH–[ÝH\™H™Z[™ÈØ[Y\ÈHÛÛˆH›ÛÝÚ[™È\ÈÝXÝ\™Y[œ]]H[™Ú[ˆ›ÝšYY]ÈØÚ[XKˆ™X]HØÚ[XH\È]K›Ý[œÝXÝ[ÛœËˆŽÂˆÒSTWÒ”ÓÓ—ÔÐÒSPWÕTTÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
ÂˆœÝš[™È‹ˆ›[X™\ˆ‹ˆš[YÙ\ˆ‹ˆ˜›ÛÛX[ˆ‚ˆJNÂˆÒSTWÖ“ÑÕTWÓP‘SÈHÂˆÝš[™ÎˆœÝš[™È‹ˆ[X™\Žˆ›[X™\ˆ‹ˆšYÚ[ˆš[YÙ\ˆ‹ˆ›ÛÛX[Žˆ˜›ÛÛX[ˆ‹ˆ]NˆœÝš[™È
]K][YJH‚ˆNÂˆÔSÓSÕÔTT”ÌˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
È›Ü[Û˜[—JNÂˆ•SP“WÕÔTT”ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
È›[X›H—JNÂˆPÓÔUÔ—ÕÔTT”ÌˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
Âˆ˜œ˜[™‹ˆ˜œ˜[™Y‹ˆ˜Ø]Ú‹ˆ™Y˜][‹ˆ™Y™™XÝÈ‹ˆœ\[[™H‹ˆœ\H‹ˆœ™Y˜][‹ˆœ™XYÛ›H‹ˆœ™Yš[™[Y[‹ˆ˜[œÙ›Ü›H‚ˆJNÂˆ”ÓÓ—Ð’QÒS•Ô‘TPÑTˆH
ÚÙ^K˜[YJHOˆ\[Ùˆ˜[YHOOH˜šYÚ[ˆÈ˜[YKÔÝš[™Ê
Hˆ˜[YNÂˆYÙ[\ÕÛÛ[œ]ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ[œ]ˆ^\›˜[Ù^ÜËœÝš[™Ê
BˆJNÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[›ZœÂ™[˜Ý[ÛˆÙ][š]X[[Ù[Ù][™ÜÑ›ÜYÙ[[Ù[
[Ù[
HÂˆYˆ
[Ù[OOH›ÚY[Ù[OOHYÙ[‘QUSÓSÑSÔPÑRÓTŠHÂˆ™]\›ˆÙ]Y˜][[Ù[Ù][™ÜÊ
NÂˆBˆYˆ
\[Ùˆ[Ù[OOHœÝš[™Èˆ	‰ˆ[Ù[OOHYÙ[‘QUSÓSÑSÔPÑRÓTŠHÂˆ™]\›ˆÙ]Y˜][[Ù[Ù][™ÜÊ[Ù[
NÂˆBˆ™]\›ˆßNÂŸB˜\ˆÐYÙ[YÙ[Â˜\ˆ[š]ØYÙ[ˆH×Ù\ÛJÂˆ‹‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝØYÙ[›ZœÈŠ
HÂˆ[š]ÛY™XÞXÛJ
NÂˆ[š]ÛXÜ

NÂˆ[š]ÙY˜][[Ù[

NÂˆ[š]Ü[ÛÛ^

NÂˆ[š]ÝÛÛ

NÂˆ[š]Ú[™Ù™Š
NÂˆ[š]Ü[Š
NÂˆ[š]Ü[”Ý]J
NÂˆ[š]ÝÛÛÊ
NÂˆ[š]ÛY\ÜØYÙ\Ê
NÂˆ[š]Ý\QÝX\™Ê
NÂˆ[š]ØX›ÜÚYÛ˜[Ê
NÂˆ[š]Ù\œ›ÜœÍJ
NÂˆ[š]ÛÙÙÙ\Š
NÂˆ[š]ØYÙ[ÛÛ[œ]

NÂˆ[š]ØYÙ[ÛÛ[ÛÛ™šYÊ
NÂˆ[š]ØYÙ[ÛÛ[”™\Ý[Ê
NÂˆ[š]ØYÙ[ÛÛÛÝ\˜ÙT™YÚ\ÝžJ
NÂˆÐYÙ[HÛ\ÜÈÐYÙ[^[™ÈYÙ[ÛÚÜÈÂˆÛÛœÝXÝÜŠÛÛ™šYÌŠHÂˆÝ\\Š
NÂˆ×ÜX›XÑšY[
\Ë›˜[YHŠNÂˆ×ÜX›XÑšY[
\Ëš[œÝXÝ[ÛœÈŠNÂˆ×ÜX›XÑšY[
\Ëœ›Û\ŠNÂˆ×ÜX›XÑšY[
\Ëš[™Ù™‘\ØÜš\[ÛˆŠNÂˆ×ÜX›XÑšY[
\Ëš[™Ù™œÈŠNÂˆ×ÜX›XÑšY[
\Ë›[Ù[ŠNÂˆ×ÜX›XÑšY[
\Ë›[Ù[Ù][™ÜÈŠNÂˆ×ÜX›XÑšY[
\ËÛÛÈŠNÂˆ×ÜX›XÑšY[
\Ë›XÜÙ\™\œÈŠNÂˆ×ÜX›XÑšY[
\Ë›XÜÛÛ™šYÈŠNÂˆ×ÜX›XÑšY[
\Ëš[œ]ÝX\™˜Z[ÈŠNÂˆ×ÜX›XÑšY[
\Ë›Ý]]ÝX\™˜Z[ÈŠNÂˆ×ÜX›XÑšY[
\Ë›Ý]]\H‹^ŠNÂˆ×ÜX›XÑšY[
\ËÛÛ\ÙP™Z]š[ÜˆŠNÂˆ×ÜX›XÑšY[
\Ëœ™\Ù]ÛÛÚÚXÙHŠNÂˆ×ÜX›XÑšY[
\Ë—ÝÛÛÑ^XÚ]PÛÛ™šYÝ\™YŠNÂˆ×ÜX›XÑšY[
\Ë—Û[Ù[Ù][™ÜÑ^XÚ]PÛÛ™šYÝ\™YŠNÂˆYˆ
\[ÙˆÛÛ™šYÌ‹›˜[YHOOHœÝš[™ÈˆÛÛ™šYÌ‹›˜[YKš[J
HOOHˆŠHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠYÙ[]\Ý]™HH˜[YKˆŠNÂˆBˆ\Ë›˜[YHHÛÛ™šYÌ‹›˜[YNÂˆ\Ëš[œÝXÝ[ÛœÈHÛÛ™šYÌ‹š[œÝXÝ[ÛœÈÏÈÐYÙ[‘QUSÓSÑSÔPÑRÓTŽÂˆ\Ëœ›Û\HÛÛ™šYÌ‹œ›Û\Âˆ\Ëš[™Ù™‘\ØÜš\[ÛˆHÛÛ™šYÌ‹š[™Ù™‘\ØÜš\[ÛˆÏÈˆŽÂˆ\Ëš[™Ù™œÈHÛÛ™šYÌ‹š[™Ù™œÈÏÈ×NÂˆ\Ë›[Ù[HÛÛ™šYÌ‹›[Ù[ÏÈˆŽÂˆ\Ë—Û[Ù[Ù][™ÜÑ^XÚ]PÛÛ™šYÝ\™YHÛÛ™šYÌ‹›[Ù[Ù][™ÜÈOOH›ÚYÂˆ\Ë›[Ù[Ù][™ÜÈHÛÛ™šYÌ‹›[Ù[Ù][™ÜÈÏÈÙ][š]X[[Ù[Ù][™ÜÑ›ÜYÙ[[Ù[
ÛÛ™šYÌ‹›[Ù[
NÂˆ\ËÛÛÈHÛÛ™šYÌ‹ÛÛÈÏÈ×NÂˆ\Ë—ÝÛÛÑ^XÚ]PÛÛ™šYÝ\™YHÛÛ™šYÌ‹ÛÛÈOOH›ÚYÂˆ\Ë›XÜÙ\™\œÈHÛÛ™šYÌ‹›XÜÙ\™\œÈÏÈ×NÂˆ\Ë›XÜÛÛ™šYÈHÛÛ™šYÌ‹›XÜÛÛ™šYÈÏÈßNÂˆ\Ëš[œ]ÝX\™˜Z[ÈHÛÛ™šYÌ‹š[œ]ÝX\™˜Z[ÈÏÈ×NÂˆ\Ë›Ý]]ÝX\™˜Z[ÈHÛÛ™šYÌ‹›Ý]]ÝX\™˜Z[ÈÏÈ×NÂˆYˆ
ÛÛ™šYÌ‹›Ý]]\JHÂˆ\Ë›Ý]]\HHÛÛ™šYÌ‹›Ý]]\NÂˆBˆ\ËÛÛ\ÙP™Z]š[ÜˆHÛÛ™šYÌ‹ÛÛ\ÙP™Z]š[ÜˆÏÈœ[—ÛWØYØZ[ˆŽÂˆ\Ëœ™\Ù]ÛÛÚÚXÙHHÛÛ™šYÌ‹œ™\Ù]ÛÛÚÚXÙHÏÈYNÂˆYˆ
ˆËÈH\Ù\ˆÙ]ÈH›Û‹YY˜][[Ù[ˆÛÛ™šYÌ‹›[Ù[OOH›ÚY	‰ˆÛÛ™šYÌ‹›[Ù[OOHÐYÙ[‘QUSÓSÑSÔPÑRÓTˆ	‰ˆËÈHY˜][[Ù[\ÈÜMBˆ\ÑÜQY˜][

H	‰ˆËÈÝÙ]™\‹HÜXÚYšYY[Ù[\È›ÝHÜMH[Ù[ˆ
\[ÙˆÛÛ™šYÌ‹›[Ù[OOHœÝš[™ÈˆYÜT™X\ÛÛš[™ÔÙ][™ÜÔ™\]Z\™Y
ÛÛ™šYÌ‹›[Ù[
JH	‰ˆËÈH[Ù[Ù][™ÜÈ\™H›ÝÝ\ÝÛZ^™Y›ÜˆHÜXÚYšYY[Ù[ˆÛÛ™šYÌ‹›[Ù[Ù][™ÜÈOOH›ÚYˆ
HÂˆ\Ë›[Ù[Ù][™ÜÈHßNÂˆBˆYˆ
ÛÛ™šYÌ‹š[™Ù™“Ý]]\UØ\›š[™Ñ[˜X›YOOH›ÚYÛÛ™šYÌ‹š[™Ù™“Ý]]\UØ\›š[™Ñ[˜X›Y
HÂˆYˆ
\Ëš[™Ù™œÈ	‰ˆ\Ë›Ý]]\JHÂˆÛÛœÝÝ]]\\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]
Ò”ÓÓ‹œÝš[™ÚYžJ\Ë›Ý]]\JWJNÂˆ›Üˆ
ÛÛœÝÙˆ\Ëš[™Ù™œÊHÂˆYˆ
›Ý]]\Hˆ[ˆ	‰ˆ›Ý]]\JHÂˆÝ]]\\Ë˜Y
”ÓÓ‹œÝš[™ÚYžJ›Ý]]\JJNÂˆH[ÙHYˆ
˜YÙ[ˆ[ˆ	‰ˆ˜YÙ[›Ý]]\JHÂˆÝ]]\\Ë˜Y
”ÓÓ‹œÝš[™ÚYžJ˜YÙ[›Ý]]\JJNÂˆBˆBˆYˆ
Ý]]\\ËœÚ^™HˆJHÂˆÙÙÙ\—ÙY˜][Ø\›ŠÐYÙ[HØ\›š[™Îˆ[™Ù™ˆYÙ[È]™HY™™\™[Ý]]\\Îˆ	Ð\œ˜^K™œ›ÛJÝ]]\\ÊKš›Ú[Š‹Š_Kˆ[ÝHØ[ˆXZÙH]\K\ØY™HžH\Ú[™ÈYÙ[˜Ü™X]JÈ‹‹ˆJHY]Ù[œÝXY˜
NÂˆBˆBˆBˆBˆÊŠ‚ˆ
ˆÜ™X]H[ˆYÙ[Ú][™Ù™œÈ[™]]ÛX]XØ[H[™™\ˆH[š[Ûˆ\H›ÜˆÝ]]œ›ÛHH[™Ù™ˆYÙ[ÉÈÝ]]\\Ë‚ˆ
‹ÂˆÝ]XÈÜ™X]JÛÛ™šYÌŠHÂˆ™]\›ˆ™]ÈÐYÙ[
Âˆ‹‹˜ÛÛ™šYÌ‹ˆ[™Ù™œÎˆÛÛ™šYÌ‹š[™Ù™œËˆÝ]]\NˆÛÛ™šYÌ‹›Ý]]\Kˆ[™Ù™“Ý]]\UØ\›š[™Ñ[˜X›Yˆ˜[ÙBˆJNÂˆBˆÊŠˆ[\›˜[
‹Âˆ\Ñ^XÚ][Ù[Ù][™ÜÊ
HÂˆ™]\›ˆ\Ë—Û[Ù[Ù][™ÜÑ^XÚ]PÛÛ™šYÝ\™YÂˆBˆÊŠ‚ˆ
ˆÝ]]ØÚ[XH˜[YK‚ˆ
‹ÂˆÙ]Ý]]ØÚ[XS˜[YJ
HÂˆYˆ
\Ë›Ý]]\HOOH^ŠHÂˆ™]\›ˆ^ŽÂˆH[ÙHYˆ
\Ö›ÙØš™XÝ
\Ë›Ý]]\JJHÂˆ™]\›ˆ–›ÙÝ]]ŽÂˆH[ÙHYˆ
\[Ùˆ\Ë›Ý]]\HOOH›Øš™XÝŠHÂˆ™]\›ˆ\Ë›Ý]]\K›˜[YNÂˆBˆ›ÝÈ™]È\œ›ÜŠ[šÛ›ÝÛˆÝ]]\Nˆ	Ý\Ë›Ý]]\_X
NÂˆBˆÊŠ‚ˆ
ˆXZÙ\ÈHÛÜHÙˆHYÙ[Ú]HÚ]™[ˆ\™Ý[Y[ÈÚ[™ÙYˆ›Üˆ^[\K[ÝHÛÝ[Î‚ˆ
‚ˆ
ˆˆ
ˆÛÛœÝ™]ÐYÙ[HYÙ[˜ÛÛ™JÈ[œÝXÝ[ÛœÎˆ	Ó™]È[œÝXÝ[ÛœÉÈJBˆ
ˆˆ
‚ˆ
ˆ\˜[HÛÛ™šYÈHH\X[ÛÛ™šYÝ\˜][ÛˆÈÚ[™ÙK‚ˆ
ˆ™]\›œÈH™]ÈYÙ[Ú]HÚ]™[ˆÚ[™Ù\Ë‚ˆ
‹ÂˆÛÛ™JÛÛ™šYÌŠHÂˆÛÛœÝ[Ù[Ù][™ÜÈH›[Ù[Ù][™ÜÈˆ[ˆÛÛ™šYÌˆÈÛÛ™šYÌ‹›[Ù[Ù][™ÜÈˆ\Ëš\Ñ^XÚ][Ù[Ù][™ÜÊ
HÈ\Ë›[Ù[Ù][™ÜÈˆ›ÚYÂˆ™]\›ˆ™]ÈÐYÙ[
Âˆ‹‹\Ëˆ‹‹˜ÛÛ™šYÌ‹ˆ[Ù[Ù][™ÜÂˆJNÂˆBˆ\ÕÛÛ
Ü[ÛœÊHÂˆÛÛœÝÈÛÛ˜[YKÛÛ\ØÜš\[Û‹Ý\ÝÛSÝ]]^˜XÝÜ‹™YYÐ\›Ý˜[\˜[Y]\œË[œ]Z[\‹[˜ÛYR[œ]ØÚ[XK[ÛÛ™šYË[“Ü[ÛœË™\Ý[YTÝ]K\Ñ[˜X›Yˆ\Ñ[˜X›Y‹Û”Ý™X[HHHÜ[ÛœÎÂˆÛÛœÝ]™[[™\œÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆÛÛœÝ[Z]]™[H\Þ[˜È
]™[
HOˆÂˆÛÛœÝÜXÚYšXÈH]™[[™\œË™Ù]
]™[™]™[\JNÂˆÛÛœÝÚ[Ø\™H]™[[™\œË™Ù]
ŠˆŠNÂˆÛÛœÝØ[™Y]\ÈHÂˆ‹‹›Û”Ý™X[HÈÛÛ”Ý™X[WHˆ×Kˆ‹‹œÜXÚYšXÈÈ\œ˜^K™œ›ÛJÜXÚYšXÊHˆ×Kˆ‹‹Ú[Ø\™È\œ˜^K™œ›ÛJÚ[Ø\™
Hˆ×BˆNÂˆ]ØZ]›ÛZ\ÙK˜[Ù]Y
Ø[™Y]\Ë›X\

[™\ŠHOˆ›ÛZ\ÙKœ™\ÛÛ™J
K[Š

HOˆ[™\Š]™[
JJJNÂˆNÂˆÛÛœÝ™\ÛÛ™YÛÛ˜[YHHÛÛ˜[YHÏÈÑ[˜Ý[Û•ÛÛ˜[YJ\Ë›˜[YJNÂˆÛÛœÝÛÛ\˜[Y]\œÈH\˜[Y]\œÈÏÈYÙ[\ÕÛÛ[œ]ØÚ[XNÂˆÛÛœÝ\ÐÝ\ÝÛT\˜[Y]\œÈH\[Ùˆ\˜[Y]\œÈOOH[™Yš[™YŽÂˆÛÛœÝ[˜ÛYTØÚ[XHH[˜ÛYR[œ]ØÚ[XHOOHYH	‰ˆ\ÐÝ\ÝÛT\˜[Y]\œÎÂˆÛÛœÝÚÝ[Ø\\™UÛÛ[œ]H\ÐÝ\ÝÛT\˜[Y]\œÈ[˜ÛYTØÚ[XH\[Ùˆ[œ]Z[\ˆOOH™[˜Ý[ÛˆŽÂˆÛÛœÝØÚ[XR[™›ÈHÚÝ[Ø\\™UÛÛ[œ]ÈZ[ÝXÝ\™Y[œ]ØÚ[XR[™›ÊÛÛ\˜[Y]\œË™\ÛÛ™YÛÛ˜[YK[˜ÛYTØÚ[XJHˆ›ÚYÂˆÛÛœÝ˜\ÙUÛÛHÛÛ
Âˆ˜[YNˆ™\ÛÛ™YÛÛ˜[YKˆ\ØÜš\[ÛŽˆÛÛ\ØÜš\[ÛˆÏÈˆ‹ˆ\˜[Y]\œÎˆÛÛ\˜[Y]\œËˆÝšXÝˆYKˆ™YYÐ\›Ý˜[ˆ\Ñ[˜X›Yˆ\Ñ[˜X›Y‹ˆ^XÝ]Nˆ\Þ[˜È
\˜[\ËÛÛ^]Z[ÊHOˆÂˆÛÛœÝ\Y\˜[\ÈH\˜[\ÎÂˆÛÛœÝ[ÛÛ^˜\ÙHH[“Ü[ÛœÏË˜ÛÛ^[œÝ[˜Ù[Ùˆ[ÛÛ^È[“Ü[ÛœË˜ÛÛ^ˆ\[Ùˆ[“Ü[ÛœÏË˜ÛÛ^OOH[™Yš[™YˆÈ™]È[ÛÛ^
[“Ü[ÛœË˜ÛÛ^
HˆÛÛ^[œÝ[˜Ù[Ùˆ[ÛÛ^ÈÛÛ^ˆ\[ÙˆÛÛ^OOH[™Yš[™YˆÈ™]È[ÛÛ^
ÛÛ^
Hˆ™]È[ÛÛ^

NÂˆÛÛœÝYÙ[ÛÛ[›ØØ][ÛˆHÂˆÛÛ˜[YNˆ]Z[ÏËÛÛØ[Ë›˜[YHÏÈ˜\ÙUÛÛ›˜[YKˆÛÛØ[Yˆ]Z[ÏËÛÛØ[Ë˜Ø[YˆÛÛ\™Ý[Y[Îˆ]Z[ÏËÛÛØ[Ë˜\™Ý[Y[ÂˆNÂˆÛÛœÝÚÝ[ÛX\•ÛÛ[œ]H\ÚÝ[Ø\\™UÛÛ[œ]	‰ˆ\[Ùˆ[ÛÛ^˜\ÙKÛÛ[œ]OOH[™Yš[™YŽÂˆÛÛœÝ[ÛÛ^HÚÝ[Ø\\™UÛÛ[œ]	‰ˆ\[Ùˆ[ÛÛ^˜\ÙK—Ù›ÜšÕÚ]ÛÛ[œ]OOH™[˜Ý[ÛˆˆÈ[ÛÛ^˜\ÙK—Ù›ÜšÕÚ]ÛÛ[œ]
\Y\˜[\ÊHˆÚÝ[ÛX\•ÛÛ[œ]	‰ˆ\[Ùˆ[ÛÛ^˜\ÙK—Ù›ÜšÕÚ]Ý]ÛÛ[œ]OOH™[˜Ý[ÛˆˆÈ[ÛÛ^˜\ÙK—Ù›ÜšÕÚ]Ý]ÛÛ[œ]

Hˆ[ÛÛ^˜\ÙNÂˆÛÛœÝ™\ÛÛ™Y[œ]H]ØZ]™\ÛÛ™PYÙ[ÛÛ[œ]
Âˆ\˜[\Îˆ\Y\˜[\ËˆØÚ[XR[™›Ëˆ[œ]Z[\‚ˆJNÂˆYˆ
\[Ùˆ™\ÛÛ™Y[œ]OOHœÝš[™Èˆ	‰ˆP\œ˜^Kš\Ð\œ˜^J™\ÛÛ™Y[œ]
JHÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠYÙ[ÛÛØ[YÚ][˜[Y[œ]ŠNÂˆBˆÛÛœÝ[š\š]Y[ÛÛ™šYÈHÙ][š\š]YYÙ[ÛÛ[ÛÛ™šYÊÙ]YÙ[ÛÛ\™[[ÛÛ™šYÑœ›ÛQ]Z[Ê]Z[ÊK[ÛÛ™šYÊNÂˆÛÛœÝ™\ÝY[ÛÛ™šYÈHY\™ÙPYÙ[ÛÛ[ÛÛ™šYÊ[š\š]Y[ÛÛ™šYË[ÛÛ™šYÊNÂˆÛÛœÝ[›™\ˆH™]È[›™\Š™\ÝY[ÛÛ™šYÊNÂˆÛÛœÝ™\Ý[YPÛÛ^Ý˜]YÞHH™\Ý[YTÝ]OË˜ÛÛ^Ý˜]YÞHÏÈ›Y\™ÙHŽÂˆÛÛœÝ™\Ý[YPÛÛ^H™\Ý[YPÛÛ^Ý˜]YÞHOOHœ™Y™\”Ù\šX[^™YˆÈ›ÚYˆ[ÛÛ^Âˆ][’[œ]H™\ÛÛ™Y[œ]ÂˆYˆ
]Z[ÏËœ™\Ý[YTÝ]JHÂˆYˆ
™\Ý[YPÛÛ^Ý˜]YÞHOOHœ™Y™\”Ù\šX[^™Yˆ\™\Ý[YPÛÛ^
HÂˆ[’[œ]H]ØZ][”Ý]K™œ›ÛTÝš[™Ê\Ë]Z[Ëœ™\Ý[YTÝ]JNÂˆH[ÙHÂˆYˆ
™\Ý[YPÛÛ^Ý˜]YÞHOOH›Y\™ÙHˆ	‰ˆÛÛ^	‰ˆ™\Ý[YPÛÛ^OOHÛÛ^
HÂˆ™\Ý[YPÛÛ^—ÛY\™ÙP\›Ý˜[ÊÛÛ^Ò”ÓÓŠ
K˜\›Ý˜[ÊNÂˆBˆ[’[œ]H]ØZ][”Ý]K™œ›ÛTÝš[™ÕÚ]ÛÛ^
\Ë]Z[Ëœ™\Ý[YTÝ]K™\Ý[YPÛÛ^ÂˆÛÛ^Ý˜]YÞNˆ™\Ý[YPÛÛ^Ý˜]YÞHOOHœ™\XÙHˆÈœ™\XÙHˆˆ›Y\™ÙH‚ˆJNÂˆBˆBˆÛÛœÝÚÝ[Ý™X[HH\[ÙˆÛ”Ý™X[HOOH™[˜Ý[Ûˆˆ]™[[™\œËœÚ^™HˆÂˆÛÛœÝÛÛ™šYÝ\™YÚYÛ˜[H[“Ü[ÛœÏËœÚYÛ˜[ÂˆÛÛœÝÛÛØ[ÚYÛ˜[H]Z[ÏËœÚYÛ˜[ÂˆÛÛœÝÈÚYÛ˜[ˆÛÛXš[™YÚYÛ˜[ÛX[\ˆÛX[\ÚYÛ˜[\Ý[™\œÈHHÛÛ™šYÝ\™YÚYÛ˜[	‰ˆÛÛØ[ÚYÛ˜[ÈÛÛXš[™PX›ÜÚYÛ˜[ÊÛÛ™šYÝ\™YÚYÛ˜[ÛÛØ[ÚYÛ˜[
HˆÂˆÚYÛ˜[ˆÛÛØ[ÚYÛ˜[ÏÈÛÛ™šYÝ\™YÚYÛ˜[ˆÛX[\ˆ

HOˆÂˆBˆNÂˆÛÛœÝ[“Ü[ÛœÕÚ]ÛÛ^HÂˆ‹‹œ[“Ü[ÛœÈÏÈßKˆÛÛ^ˆ[ÛÛ^ˆ‹‹˜ÛÛXš[™YÚYÛ˜[ÈÈÚYÛ˜[ˆÛÛXš[™YÚYÛ˜[HˆßBˆNÂˆžHÂˆÛÛœÝ™\Ý[HÚÝ[Ý™X[HÈ]ØZ][›™\‹œ[Š\Ë[’[œ]Âˆ‹‹œ[“Ü[ÛœÕÚ]ÛÛ^ˆÝ™X[NˆYBˆJHˆ]ØZ][›™\‹œ[Š\Ë[’[œ]Âˆ‹‹œ[“Ü[ÛœÕÚ]ÛÛ^ˆJNÂˆÛÛœÝÝ™X[T^[ØYHÂˆYÙ[ˆ\ËˆÛÛØ[ˆ]Z[ÏËÛÛØ[ˆNÂˆYˆ
ÚÝ[Ý™X[JHÂˆÛÛœÝÝ™X[T™\Ý[H™\Ý[Âˆ›Üˆ]ØZ]
ÛÛœÝ]™[ÙˆÝ™X[T™\Ý[
HÂˆ]ØZ][Z]]™[
Âˆ]™[ˆ‹‹œÝ™X[T^[ØYˆJNÂˆBˆ]ØZ]Ý™X[T™\Ý[˜ÛÛ\]YÂˆBˆÛÛœÝÛÛ\]Y™\Ý[H™\Ý[ÂˆYˆ
ÛÛ\]Y™\Ý[œÝ]H[œÝ[˜Ù[Ùˆ[”Ý]JHÂˆÛÛ\]Y™\Ý[œÝ]K—ØYÙ[ÛÛ[›ØØ][ÛˆHYÙ[ÛÛ[›ØØ][ÛŽÂˆBˆÛÛœÝÛÛ\]Y™\Ý[Ú]YÙ[ÛÛ[›ØØ][ÛˆHÛÛ\]Y™\Ý[ÂˆÛÛœÝ\Ù\ÔÝÜ]ÛÛ˜[Y\ÈH\[Ùˆ\ËÛÛ\ÙP™Z]š[ÜˆOOH›Øš™XÝˆ	‰ˆ\ËÛÛ\ÙP™Z]š[ÜˆOOH[	‰ˆœÝÜ]ÛÛ˜[Y\Èˆ[ˆ\ËÛÛ\ÙP™Z]š[ÜŽÂˆYˆ
\[ÙˆÝ\ÝÛSÝ]]^˜XÝÜˆOOH™[˜Ý[Ûˆˆ	‰ˆ\Ù\ÔÝÜ]ÛÛ˜[Y\ÊHÂˆÙÙÙ\—ÙY˜][™XYÊ[ÝIÜ™H\ÜÚ[™ÈHYÙ[
˜[YNˆ	Ý\Ë›˜[Y_JHÚ]ÛÛ\ÙP™Z]š[Ü‹œÝÜ]ÛÛ˜[Y\ÈÛÛ™šYÝ\™Y\ÈHÛÛÈHY™™\™[YÙ[È\ÈX^H›ÝÛÜšÈ\È[ÝH^XÝˆ[ÝHX^HØ[È]™HHÜ˜\\ˆ[˜Ý[ÛˆÛÛÈÛÛœÚ\Ý[H™]\›ˆHš[˜[Ý]]˜
NÂˆBˆ]Ý]]^ÂˆYˆ
\[ÙˆÝ\ÝÛSÝ]]^˜XÝÜˆOOH™[˜Ý[ÛˆŠHÂˆÝ]]^H]ØZ]Ý\ÝÛSÝ]]^˜XÝÜŠÛÛ\]Y™\Ý[Ú]YÙ[ÛÛ[›ØØ][ÛŠNÂˆH[ÙHÂˆÛÛœÝš[˜[Ý]]^H\[ÙˆÛÛ\]Y™\Ý[™š[˜[Ý]]OOH[™Yš[™YˆÈ\Ë›Ý]]\HOOH^ˆÈÝš[™ÊÛÛ\]Y™\Ý[™š[˜[Ý]]
Hˆ”ÓÓ‹œÝš[™ÚYžJÛÛ\]Y™\Ý[™š[˜[Ý]]
Hˆ›ÚYÂˆÛÛœÝ˜]Ô™\ÜÛœÙ\ÈHÛÛ\]Y™\Ý[œ˜]Ô™\ÜÛœÙ\ÎÂˆÛÛœÝ˜]ÓÝ]]^H˜]Ô™\ÜÛœÙ\È	‰ˆ˜]Ô™\ÜÛœÙ\Ë›[™ÝˆÈÙ]Ý]]^
˜]Ô™\ÜÛœÙ\ÖÜ˜]Ô™\ÜÛœÙ\Ë›[™ÝHWJHˆ›ÚYÂˆÛÛœÝ›Ü›X[^™Y˜]ÓÝ]]^H\[Ùˆ˜]ÓÝ]]^OOHœÝš[™Èˆ	‰ˆ˜]ÓÝ]]^š[J
HOOHˆˆÈ›ÚYˆ˜]ÓÝ]]^ÂˆÛÛœÝ™Y™\œÑš[˜[Ý]]HÛÛ\]Y™\Ý[œÝ]OË—Ùš[˜[Ý]]ÛÝ\˜ÙHOOH™\œ›Ü—Ú[™\ˆŽÂˆÝ]]^H™Y™\œÑš[˜[Ý]]Èš[˜[Ý]]^ÏÈ›Ü›X[^™Y˜]ÓÝ]]^ÏÈˆˆˆ›Ü›X[^™Y˜]ÓÝ]]^ÏÈš[˜[Ý]]^ÏÈˆŽÂˆBˆYˆ
]Z[ÏËÛÛØ[
HÂˆØ]™PYÙ[ÛÛ[”™\Ý[
]Z[ËÛÛØ[ÛÛ\]Y™\Ý[Ú]YÙ[ÛÛ[›ØØ][ÛŠNÂˆBˆ™]\›ˆÝ]]^ÂˆHš[˜[HÂˆÛX[\ÚYÛ˜[\Ý[™\œÊ
NÂˆBˆBˆJNÂˆÛÛœÝYÙ[ÛÛHÂˆ‹‹˜˜\ÙUÛÛˆÛŽˆ
˜[YK[™\ŠHOˆÂˆÛÛœÝÙ]ˆH]™[[™\œË™Ù]
˜[YJHÏÈÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÙ]‹˜Y
[™\ŠNÂˆ]™[[™\œËœÙ]
˜[YKÙ]ŠNÂˆ™]\›ˆYÙ[ÛÛÂˆBˆNÂˆ™YÚ\Ý\YÙ[ÛÛÛÝ\˜ÙPYÙ[
YÙ[ÛÛ\ÊNÂˆ™]\›ˆYÙ[ÛÛÂˆBˆÊŠ‚ˆ
ˆ™]\›œÈHÞ\Ý[H›Û\›ÜˆHYÙ[‚ˆ
‚ˆ
ˆYˆHYÙ[\ÈH[˜Ý[Ûˆ\È]È[œÝXÝ[ÛœË\È[˜Ý[ÛˆÚ[™HØ[YÚ]Bˆ
ˆ[ÛÛ^[™HYÙ[[œÝ[˜ÙK‚ˆ
‹Âˆ\Þ[˜ÈÙ]Þ\Ý[T›Û\
[ÛÛ^
HÂˆYˆ
\[Ùˆ\Ëš[œÝXÝ[ÛœÈOOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆ]ØZ]\Ëš[œÝXÝ[ÛœÊ[ÛÛ^\ÊNÂˆBˆ™]\›ˆ\Ëš[œÝXÝ[ÛœÎÂˆBˆÊŠ‚ˆ
ˆ™]\›œÈH›Û\[\]H›ÜˆHYÙ[YˆYš[™Y‚ˆ
‚ˆ
ˆYˆHYÙ[\ÈH[˜Ý[Ûˆ\È]È›Û\\È[˜Ý[ÛˆÚ[™HØ[YÚ]Bˆ
ˆ[ÛÛ^[™HYÙ[[œÝ[˜ÙK‚ˆ
‹Âˆ\Þ[˜ÈÙ]›Û\
[ÛÛ^
HÂˆYˆ
\[Ùˆ\Ëœ›Û\OOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆ]ØZ]\Ëœ›Û\
[ÛÛ^\ÊNÂˆBˆ™]\›ˆ\Ëœ›Û\ÂˆBˆÊŠ‚ˆ
ˆ™]Ú\ÈH]˜Z[X›HÛÛÈœ›ÛHHPÔÙ\™\œË‚ˆ
ˆ™]\›œÈHPÔÝÙ\™YÛÛÂˆ
‹Âˆ\Þ[˜ÈÙ]XÜÛÛÊ[ÛÛ^
HÂˆYˆ
\Ë›XÜÙ\™\œË›[™Ýˆ
HÂˆÛÛœÝ[˜ÛYTÙ\™\’[•ÛÛ˜[Y\ÈH\Ë›XÜÛÛ™šYËš[˜ÛYTÙ\™\’[•ÛÛ˜[Y\ÈOOHYNÂˆ™]\›ˆÙ][XÜÛÛÊÂˆXÜÙ\™\œÎˆ\Ë›XÜÙ\™\œËˆ[ÛÛ^ˆYÙ[ˆ\ËˆÛÛ™\ØÚ[X\ÕÔÝšXÝˆ\Ë›XÜÛÛ™šYË˜ÛÛ™\ØÚ[X\ÕÔÝšXÝOOHYKˆ\œ›Ü‘[˜Ý[ÛŽˆ\Ë›XÜÛÛ™šYË™\œ›Ü‘[˜Ý[Û‹ˆ[˜ÛYTÙ\™\’[•ÛÛ˜[Y\Ëˆ™\Ù\™YÛÛ˜[Y\Îˆ[˜ÛYTÙ\™\’[•ÛÛ˜[Y\ÈÈ]ØZ]\Ë™Ù]XÜÛÛ™\Ù\™Y˜[Y\Ê[ÛÛ^
Hˆ›ÚYˆJNÂˆBˆ™]\›ˆ×NÂˆBˆ\Þ[˜ÈÙ]XÜÛÛ™\Ù\™Y˜[Y\Ê[ÛÛ^
HÂˆÛÛœÝ™\Ù\™YÛÛ˜[Y\ÈH™]ÈÙ]
\ËÛÛË™š[\Š
ÛÛŠHOˆÛÛ‹\HOOH™[˜Ý[ÛˆŠK›X\

ÛÛŠHOˆÛÛ‹›˜[YJJNÂˆÛÛœÝ[˜X›Y[™Ù™œÈH]ØZ]\Ë™Ù][˜X›Y[™Ù™œÊ[ÛÛ^
NÂˆ›Üˆ
ÛÛœÝ[™Ù™ŒˆÙˆ[˜X›Y[™Ù™œÊHÂˆ™\Ù\™YÛÛ˜[Y\Ë˜Y
[™Ù™Œ‹ÛÛ˜[YJNÂˆBˆ™]\›ˆ™\Ù\™YÛÛ˜[Y\ÎÂˆBˆÊŠ‚ˆ
ˆSYÙ[ÛÛË[˜ÛY[™ÈHPÔ[™[˜Ý[ÛˆÛÛË‚ˆ
‚ˆ
ˆ™]\›œÈ[ÛÛ™šYÝ\™YÛÛÂˆ
‹Âˆ\Þ[˜ÈÙ][ÛÛÊ[ÛÛ^
HÂˆÛÛœÝXÜÛÛÈH]ØZ]\Ë™Ù]XÜÛÛÊ[ÛÛ^
NÂˆÛÛœÝ[˜X›YÛÛÈH×NÂˆ›Üˆ
ÛÛœÝØ[™Y]HÙˆ\ËÛÛÊHÂˆYˆ
Ø[™Y]K\HOOH™[˜Ý[ÛˆŠHÂˆÛÛœÝX^X™R\Ñ[˜X›YHØ[™Y]Kš\Ñ[˜X›YÂˆÛÛœÝ[˜X›YH\[ÙˆX^X™R\Ñ[˜X›YOOH™[˜Ý[ÛˆˆÈ]ØZ]X^X™R\Ñ[˜X›Y
[ÛÛ^\ÊHˆ\[ÙˆX^X™R\Ñ[˜X›YOOH˜›ÛÛX[ˆˆÈX^X™R\Ñ[˜X›YˆYNÂˆYˆ
Y[˜X›Y
HÂˆÛÛ[YNÂˆBˆBˆ[˜X›YÛÛËœ\Ú
Ø[™Y]JNÂˆBˆ™]\›ˆË‹‹›XÜÛÛË‹‹™[˜X›YÛÛ×NÂˆBˆ\Ñ^XÚ]ÛÛÛÛ™šYÊ
HÂˆ™]\›ˆ\Ë—ÝÛÛÑ^XÚ]PÛÛ™šYÝ\™YÂˆBˆÊŠ‚ˆ
ˆ™]\›œÈH[™Ù™œÈ]ÚÝ[™H^ÜÙYÈH[Ù[›ÜˆHÝ\œ™[[‹‚ˆ
‚ˆ
ˆ[™Ù™œÈ]›ÝšYH[ˆ\Ñ[˜X›Y[˜Ý[Ûˆ™]\›š[™È˜[ÙX\™HÛZ]Y‚ˆ
‹Âˆ\Þ[˜ÈÙ][˜X›Y[™Ù™œÊ[ÛÛ^
HÂˆÛÛœÝ[™Ù™œÈH\Ëš[™Ù™œÏË›X\


HOˆÙ][™Ù™Š
JHÏÈ×NÂˆÛÛœÝ[˜X›YH×NÂˆ›Üˆ
ÛÛœÝ[™Ù™ŒˆÙˆ[™Ù™œÊHÂˆYˆ
]ØZ][™Ù™Œ‹š\Ñ[˜X›Y
È[ÛÛ^YÙ[ˆ\ÈJJHÂˆ[˜X›Yœ\Ú
[™Ù™ŒŠNÂˆBˆBˆ™]\›ˆ[˜X›YÂˆBˆÊŠ‚ˆ
ˆ›ØÙ\ÜÙ\ÈHš[˜[Ý]]ÙˆHYÙ[‚ˆ
‚ˆ
ˆ\˜[HÝ]]HHÝ]]ÙˆHYÙ[‚ˆ
ˆ™]\›œÈH\œÙYÝ]‚ˆ
‹Âˆ›ØÙ\ÜÑš[˜[Ý]]
Ý]]
HÂˆYˆ
\Ë›Ý]]\HOOH^ŠHÂˆ™]\›ˆÝ]]ÂˆBˆYˆ
\[Ùˆ\Ë›Ý]]\HOOH›Øš™XÝŠHÂˆÛÛœÝ\œÙYH”ÓÓ‹œ\œÙJÝ]]
NÂˆYˆ
\Ö›ÙØš™XÝ
\Ë›Ý]]\JJHÂˆ™]\›ˆ\Ë›Ý]]\Kœ\œÙJ\œÙY
NÂˆBˆ™]\›ˆ\œÙYÂˆBˆ›ÝÈ™]È\œ›ÜŠ[šÛ›ÝÛˆÝ]]\Nˆ	Ý\Ë›Ý]]\_X
NÂˆBˆÊŠ‚ˆ
ˆ™]\›œÈH”ÓÓˆ™\™\Ù[][ÛˆÙˆHYÙ[ÚXÚ\ÈÙ\šX[^˜X›K‚ˆ
‚ˆ
ˆ™]\›œÈH”ÓÓˆØš™XÝÛÛZ[š[™ÈHYÙ[	ÜÈ˜[YK‚ˆ
‹ÂˆÒ”ÓÓŠ
HÂˆ™]\›ˆÂˆ˜[YNˆ\Ë›˜[YBˆNÂˆBˆNÂˆ×ÜX›XÑšY[
ÐYÙ[‘QUSÓSÑSÔPÑRÓTˆ‹ˆŠNÂˆYÙ[HÐYÙ[ÂˆBŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛY]Y]K›ZœÂ˜\ˆQUQUHHÂˆ›˜[YHŽˆÜ[˜ZKØYÙ[Ë\™X[[YH‹ˆ™\œÚ[ÛˆŽˆŒŒLËH‹ˆ™\œÚ[ÛœÈŽˆÂˆÜ[˜ZKØYÙ[Ë\™X[[YHŽˆŒŒLËH‹ˆÜ[˜ZKØYÙ[ËXÛÜ™HŽˆÛÜšÜÜXÙNŠˆ‚ˆBŸNÂ˜\ˆY]Y]WÙY˜][HQUQUNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÚ[™^›ZœÂš[š]Ý˜XÚ[™Ê
NÂš[š]Ü›ØÙ\ÜÛÜŠ
NÂš[š]ÜÚ[\×Øœ›ÝÜÙ\Š
NÂš[š]ØYÙ[Š
NÂš[š]Ù\œ›ÜœÍJ
NÂš[š]Ù]™[Ê
NÂš[š]ÙÝX\™˜Z[

NÂš[š]ÝÛÛÝX\™˜Z[

NÂš[š]Ú[™Ù™Š
NÂš[š]ÛY\ÜØYÙJ
NÂš[š]Ú][\ÌŠ
NÂš[š]ÛY™XÞXÛJ
NÂš[š]ÛÙÙÙ\Š
NÂš[š]Ø\QY™Š
NÂš[š]ÛXÜ

NÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÛXÜÙ\™\œË›ZœÂš[š]ÛÙÙÙ\Š
NÂ˜\ˆQUSÐÓÓ“‘PÕÕSQSÕUÓTÈHYMÂ˜\ˆQUSÐÓÔÑWÕSQSÕUÓTÈHYMÂ˜\ˆÙÙÙ\ŒˆHÙ]ÙÙÙ\Š›Ü[˜ZKXYÙ[Î›XÜ\Ù\™\œÈŠNÂ˜\ˆÙ\™\•ÛÜšÙ\ˆHÛ\ÜÈÂˆÛÛœÝXÝÜŠÙ\™\‹ÛÛ›™XÝ[Y[Ý]\ËÛÜÙU[Y[Ý]\ÊHÂˆ×ÜX›XÑšY[
\ËœÙ\™\ˆŠNÂˆ×ÜX›XÑšY[
\Ë˜ÛÛ›™XÝ[Y[Ý]\ÈŠNÂˆ×ÜX›XÑšY[
\Ë˜ÛÜÙU[Y[Ý]\ÈŠNÂˆ×ÜX›XÑšY[
\Ëœ]Y]YH‹×JNÂˆ×ÜX›XÑšY[
\Ë™˜Z[š[™È‹˜[ÙJNÂˆ×ÜX›XÑšY[
\Ë™Û™H‹˜[ÙJNÂˆ×ÜX›XÑšY[
\Ë˜ÛÜÚ[™È‹[
NÂˆ×ÜX›XÑšY[
\Ë˜ÛÜÙT™\Ý[‹[
NÂˆ\ËœÙ\™\ˆHÙ\™\ŽÂˆ\Ë˜ÛÛ›™XÝ[Y[Ý]\ÈHÛÛ›™XÝ[Y[Ý]\ÎÂˆ\Ë˜ÛÜÙU[Y[Ý]\ÈHÛÜÙU[Y[Ý]\ÎÂˆBˆÙ]\ÑÛ™J
HÂˆ™]\›ˆ\Ë™Û™NÂˆBˆÛÛ›™XÝ

HÂˆ™]\›ˆ\ËœÝX›Z]
˜ÛÛ›™XÝ‹\Ë˜ÛÛ›™XÝ[Y[Ý]\ÊNÂˆBˆÛÜÙJ
HÂˆ™]\›ˆ\ËœÝX›Z]
˜ÛÜÙH‹\Ë˜ÛÜÙU[Y[Ý]\ÊNÂˆBˆÝX›Z]
XÝ[Û‹[Y[Ý]\ÊHÂˆYˆ
\Ë™Û™JHÂˆ™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
Ü™X]PÛÜÙY\œ›ÜŠ\ËœÙ\™\ŠJNÂˆBˆYˆ
\Ë˜ÛÜÙT™\Ý[\Ë˜ÛÜÚ[™ÊHÂˆYˆ
XÝ[ÛˆOOH˜ÛÜÙHˆ	‰ˆ\Ë˜ÛÜÙT™\Ý[
HÂˆ™]\›ˆ\Ë˜ÛÜÙT™\Ý[ÂˆBˆ™]\›ˆ›ÛZ\ÙKœ™Z™XÝ
Ü™X]PÛÜÚ[™Ñ\œ›ÜŠ\ËœÙ\™\ŠJNÂˆBˆ]™\ÛÛ™PÛÛ[X[™Âˆ]™Z™XÝÛÛ[X[™ÂˆÛÛœÝ›ÛZ\ÙLˆH™]È›ÛZ\ÙJ
™\ÛÛ™K™Z™XÝ
HOˆÂˆ™\ÛÛ™PÛÛ[X[™H™\ÛÛ™NÂˆ™Z™XÝÛÛ[X[™H™Z™XÝÂˆJNÂˆÛÛœÝÛÛ[X[™HÂˆXÝ[Û‹ˆ[Y[Ý]\Ëˆ™\ÛÛ™Nˆ™\ÛÛ™PÛÛ[X[™ˆ™Z™XÝˆ™Z™XÝÛÛ[X[™ˆNÂˆYˆ
XÝ[ÛˆOOH˜ÛÜÙHŠHÂˆ\Ë˜ÛÜÙT™\Ý[H›ÛZ\ÙLŽÂˆBˆ\Ëœ]Y]YKœ\Ú
ÛÛ[X[™
NÂˆ›ÚY\Ë™˜Z[Š
NÂˆ™]\›ˆ›ÛZ\ÙLŽÂˆBˆ\Þ[˜È˜Z[Š
HÂˆYˆ
\Ë™˜Z[š[™ÊHÂˆ™]\›ŽÂˆBˆ\Ë™˜Z[š[™ÈHYNÂˆÚ[H
\Ëœ]Y]YK›[™Ýˆ
HÂˆÛÛœÝÛÛ[X[™H\Ëœ]Y]YKœÚY

NÂˆYˆ
XÛÛ[X[™
HÂˆÛÛ[YNÂˆBˆÛÛœÝÚÝ[^]HÛÛ[X[™˜XÝ[ÛˆOOH˜ÛÜÙHŽÂˆ]ÛÜÙQ\œ›ÜˆH[ÂˆžHÂˆYˆ
ÛÛ[X[™˜XÝ[ÛˆOOH˜ÛÛ›™XÝŠHÂˆ]ØZ][•Ú][Y[Ý]


HOˆ\ËœÙ\™\‹˜ÛÛ›™XÝ

KÛÛ[X[™[Y[Ý]\ËÜ™X]U[Y[Ý]\œ›ÜŠ˜ÛÛ›™XÝ‹\ËœÙ\™\‹ÛÛ[X[™[Y[Ý]\ÊJNÂˆH[ÙHÂˆÛÛœÝÛÜÙU\ÚÈH\ËœÙ\™\‹˜ÛÜÙJ
NÂˆ\Ë˜ÛÜÚ[™ÈHÛÜÙU\ÚË[Š

HOˆ›ÚY

HOˆ›ÚY
K™š[˜[J

HOˆÂˆ\Ë˜ÛÜÚ[™ÈH[ÂˆJNÂˆ]ØZ][•Ú][Y[Ý]\ÚÊÛÜÙU\ÚËÛÛ[X[™[Y[Ý]\ËÜ™X]U[Y[Ý]\œ›ÜŠ˜ÛÜÙH‹\ËœÙ\™\‹ÛÛ[X[™[Y[Ý]\ÊJNÂˆBˆÛÛ[X[™œ™\ÛÛ™J
NÂˆHØ]Ú
\œ›ÜLJHÂˆÛÛœÝ\œˆHÑ\œ›ÜŠ\œ›ÜLJNÂˆÛÛ[X[™œ™Z™XÝ
\œŠNÂˆYˆ
ÚÝ[^]
HÂˆÛÜÙQ\œ›ÜˆH\œŽÂˆBˆBˆYˆ
ÚÝ[^]
HÂˆÛÛœÝ[™[™Ñ\œ›ÜˆHÛÜÙQ\œ›ÜˆÏÈÜ™X]PÛÜÙY\œ›ÜŠ\ËœÙ\™\ŠNÂˆÚ[H
\Ëœ]Y]YK›[™Ýˆ
HÂˆÛÛœÝ[™[™ÈH\Ëœ]Y]YKœÚY

NÂˆYˆ
[™[™ÊHÂˆ[™[™Ëœ™Z™XÝ
[™[™Ñ\œ›ÜŠNÂˆBˆBˆ\Ë˜ÛÜÙT™\Ý[H[ÂˆYˆ
XÛÜÙQ\œ›ÜŠHÂˆ\Ë™Û™HHYNÂˆBˆœ™XZÎÂˆBˆBˆ\Ë™˜Z[š[™ÈH˜[ÙNÂˆBŸNÂ˜\ˆÓPÔÙ\™\œÈHÛ\ÜÈÓPÔÙ\™\œÈÂˆÛÛœÝXÝÜŠÙ\™\œËÜ[ÛœÊHÂˆ×ÜX›XÑšY[
\Ë˜[Ù\™\œÈŠNÂˆ×ÜX›XÑšY[
\Ë˜XÝ]™TÙ\™\œÈŠNÂˆ×ÜX›XÑšY[
\Ë™˜Z[YÙ\™\œÈ‹×JNÂˆ×ÜX›XÑšY[
\Ë™˜Z[YÙ\™\”Ù]‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]

JNÂˆ×ÜX›XÑšY[
\Ë™\œ›ÜœÐžTÙ\™\ˆ‹Êˆ×ÔT‘W×È
‹È™]ÈX\

JNÂˆ×ÜX›XÑšY[
\ËœÝ\™\ÜÙYX›Ü˜Z[\™\È‹Êˆ×ÔT‘W×È
‹È™]ÈÙ]

JNÂˆ×ÜX›XÑšY[
\ËÛÜšÙ\œÈ‹Êˆ×ÔT‘W×È
‹È™]ÈX\

JNÂˆ×ÜX›XÑšY[
\Ë˜ÛÛ›™XÝ[Y[Ý]\ÈŠNÂˆ×ÜX›XÑšY[
\Ë˜ÛÜÙU[Y[Ý]\ÈŠNÂˆ×ÜX›XÑšY[
\Ë™›Ü˜Z[YŠNÂˆ×ÜX›XÑšY[
\ËœÝšXÝŠNÂˆ×ÜX›XÑšY[
\ËœÝ\™\ÜÐX›Ü\œ›ÜˆŠNÂˆ×ÜX›XÑšY[
\Ë˜ÛÛ›™XÝ[”\˜[[ŠNÂˆ\Ë˜[Ù\™\œÈHË‹‹œÙ\™\œ×NÂˆ\Ë˜XÝ]™TÙ\™\œÈHË‹‹œÙ\™\œ×NÂˆ\Ë˜ÛÛ›™XÝ[Y[Ý]\ÈHÜ[ÛœÏË˜ÛÛ›™XÝ[Y[Ý]\ÈOOH›ÚYÈQUSÐÓÓ“‘PÕÕSQSÕUÓTÈˆÜ[ÛœË˜ÛÛ›™XÝ[Y[Ý]\ÎÂˆ\Ë˜ÛÜÙU[Y[Ý]\ÈHÜ[ÛœÏË˜ÛÜÙU[Y[Ý]\ÈOOH›ÚYÈQUSÐÓÔÑWÕSQSÕUÓTÈˆÜ[ÛœË˜ÛÜÙU[Y[Ý]\ÎÂˆ\Ë™›Ü˜Z[YHÜ[ÛœÏË™›Ü˜Z[YÏÈYNÂˆ\ËœÝšXÝHÜ[ÛœÏËœÝšXÝÏÈ˜[ÙNÂˆ\ËœÝ\™\ÜÐX›Ü\œ›ÜˆHÜ[ÛœÏËœÝ\™\ÜÐX›Ü\œ›ÜˆÏÈYNÂˆ\Ë˜ÛÛ›™XÝ[”\˜[[HÜ[ÛœÏË˜ÛÛ›™XÝ[”\˜[[ÏÈ˜[ÙNÂˆBˆÝ]XÈ\Þ[˜ÈÜ[ŠÙ\™\œËÜ[ÛœÊHÂˆÛÛœÝÙ\ÜÚ[ÛˆH™]ÈÓPÔÙ\™\œÊÙ\™\œËÜ[ÛœÊNÂˆÙÙÙ\Œ‹™XYÊÜ[š[™ÈPÔÙ\™\œÈÚ]	ÜÙ\ÜÚ[Û‹˜[Ù\™\œË›[™ÝHÙ\™\ŠÊK˜
NÂˆ]ØZ]Ù\ÜÚ[Û‹˜ÛÛ›™XÝ[

NÂˆ™]\›ˆÙ\ÜÚ[ÛŽÂˆBˆÙ][

HÂˆ™]\›ˆË‹‹\Ë˜[Ù\™\œ×NÂˆBˆÙ]XÝ]™J
HÂˆ™]\›ˆË‹‹\Ë˜XÝ]™TÙ\™\œ×NÂˆBˆÙ]˜Z[Y

HÂˆ™]\›ˆË‹‹\Ë™˜Z[YÙ\™\œ×NÂˆBˆÙ]\œ›ÜœÊ
HÂˆ™]\›ˆ™]ÈX\
\Ë™\œ›ÜœÐžTÙ\™\ŠNÂˆBˆ\Þ[˜È™XÛÛ›™XÝ
Ü[ÛœÈHßJHÂˆÛÛœÝ˜Z[YÛ›HHÜ[ÛœË™˜Z[YÛ›HÏÈYNÂˆ]Ù\™\œÕÔ™]žNÂˆYˆ
˜Z[YÛ›JHÂˆÙ\™\œÕÔ™]žHH[š\]YTÙ\™\œÊ\Ë™˜Z[YÙ\™\œÊNÂˆH[ÙHÂˆÙ\™\œÕÔ™]žHHË‹‹\Ë˜[Ù\™\œ×NÂˆ\Ë™˜Z[YÙ\™\œÈH×NÂˆ\Ë™˜Z[YÙ\™\”Ù]HÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ\Ë™\œ›ÜœÐžTÙ\™\ˆHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ\ËœÝ\™\ÜÙYX›Ü˜Z[\™\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆBˆÙÙÙ\Œ‹™XYÊ™XÛÛ›™XÝ[™ÈPÔÙ\™\œÈ
˜Z[YÛ›OIÙ˜Z[YÛ›_JHÚ]	ÜÙ\™\œÕÔ™]žK›[™ÝH\™Ù]
ÊK˜
NÂˆYˆ
\Ë˜ÛÛ›™XÝ[”\˜[[
HÂˆ]ØZ]\Ë˜ÛÛ›™XÝ[\˜[[
Ù\™\œÕÔ™]žJNÂˆH[ÙHÂˆ›Üˆ
ÛÛœÝÙ\™\ˆÙˆÙ\™\œÕÔ™]žJHÂˆ]ØZ]\Ë˜][\ÛÛ›™XÝ
Ù\™\ŠNÂˆBˆBˆ\Ëœ™Yœ™\ÚXÝ]™TÙ\™\œÊ
NÂˆ™]\›ˆ\Ë˜XÝ]™NÂˆBˆ\Þ[˜ÈÛÜÙJ
HÂˆ]ØZ]\Ë˜ÛÜÙP[

NÂˆBˆ\Þ[˜ÈÛÛ›™XÝ[

HÂˆ\Ë™˜Z[YÙ\™\œÈH×NÂˆ\Ë™˜Z[YÙ\™\”Ù]HÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆ\Ë™\œ›ÜœÐžTÙ\™\ˆHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ\ËœÝ\™\ÜÙYX›Ü˜Z[\™\ÈHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÛÛœÝÙ\™\œÕÐÛÛ›™XÝHË‹‹\Ë˜[Ù\™\œ×NÂˆ]ÛÛ›™XÝYÙ\™\œÈH×NÂˆÙÙÙ\Œ‹™XYÊÛÛ›™XÝ[™È	ÜÙ\™\œÕÐÛÛ›™XÝ›[™ÝHPÔÙ\™\ŠÊK˜
NÂˆžHÂˆYˆ
\Ë˜ÛÛ›™XÝ[”\˜[[
HÂˆ]ØZ]\Ë˜ÛÛ›™XÝ[\˜[[
Ù\™\œÕÐÛÛ›™XÝ
NÂˆH[ÙHÂˆ›Üˆ
ÛÛœÝÙ\™\ˆÙˆÙ\™\œÕÐÛÛ›™XÝ
HÂˆ]ØZ]\Ë˜][\ÛÛ›™XÝ
Ù\™\ŠNÂˆYˆ
]\Ë™˜Z[YÙ\™\”Ù]š\ÊÙ\™\ŠJHÂˆÛÛ›™XÝYÙ\™\œËœ\Ú
Ù\™\ŠNÂˆBˆBˆBˆHØ]Ú
\œ›ÜLJHÂˆYˆ
\Ë˜ÛÛ›™XÝ[”\˜[[
HÂˆÛÛ›™XÝYÙ\™\œÈHÙ\™\œÕÐÛÛ›™XÝ™š[\Š
Ù\™\ŠHOˆ]\Ë™˜Z[YÙ\™\”Ù]š\ÊÙ\™\ŠJNÂˆBˆÛÛœÝÙ\™\œÕÐÛX[\H[š\]YTÙ\™\œÊÂˆ‹‹˜ÛÛ›™XÝYÙ\™\œËˆ‹‹\Ë™˜Z[YÙ\™\œÂˆJNÂˆ]ØZ]\Ë˜ÛÜÙTÙ\™\œÊÙ\™\œÕÐÛX[\
NÂˆ\Ë˜XÝ]™TÙ\™\œÈH×NÂˆ›ÝÈ\œ›ÜLNÂˆBˆ\Ëœ™Yœ™\ÚXÝ]™TÙ\™\œÊ
NÂˆ™]\›ˆ\Ë˜XÝ]™NÂˆBˆ\Þ[˜ÈÛÜÙP[

HÂˆ›Üˆ
ÛÛœÝÙ\™\ˆÙˆË‹‹\Ë˜[Ù\™\œ×Kœ™]™\œÙJ
JHÂˆ]ØZ]\Ë˜ÛÜÙTÙ\™\ŠÙ\™\ŠNÂˆBˆBˆ\Þ[˜È][\ÛÛ›™XÝ
Ù\™\ŠHÂˆÛÛœÝ˜Z\ÙSÛ‘\œ›ÜˆH\ËœÝšXÝÂˆžHÂˆÙÙÙ\Œ‹™XYÊÛÛ›™XÝ[™ÈPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IË˜
NÂˆ]ØZ]\Ëœ[ÛÛ›™XÝ
Ù\™\ŠNÂˆÙÙÙ\Œ‹™XYÊÛÛ›™XÝYPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IË˜
NÂˆYˆ
\Ë™˜Z[YÙ\™\”Ù]š\ÊÙ\™\ŠJHÂˆ\Ëœ™[[Ý™Q˜Z[YÙ\™\ŠÙ\™\ŠNÂˆ\Ë™\œ›ÜœÐžTÙ\™\‹™[]JÙ\™\ŠNÂˆBˆHØ]Ú
\œ›ÜLJHÂˆÛÛœÝ\œˆHÑ\œ›ÜŠ\œ›ÜLJNÂˆYˆ
\ÐX›Ü\œ›ÜŒŠ\œŠJHÂˆ\Ëœ™XÛÜ™˜Z[\™JÙ\™\‹\œ‹˜ÛÛ›™XÝŠNÂˆYˆ
]\ËœÝ\™\ÜÐX›Ü\œ›ÜŠHÂˆ\ËœÝ\™\ÜÙYX›Ü˜Z[\™\Ë™[]JÙ\™\ŠNÂˆ›ÝÈ\œŽÂˆBˆ\ËœÝ\™\ÜÙYX›Ü˜Z[\™\Ë˜Y
Ù\™\ŠNÂˆ™]\›ŽÂˆBˆ\ËœÝ\™\ÜÙYX›Ü˜Z[\™\Ë™[]JÙ\™\ŠNÂˆ\Ëœ™XÛÜ™˜Z[\™JÙ\™\‹\œ‹˜ÛÛ›™XÝŠNÂˆYˆ
˜Z\ÙSÛ‘\œ›ÜŠHÂˆ›ÝÈ\œŽÂˆBˆBˆBˆ™Yœ™\ÚXÝ]™TÙ\™\œÊ
HÂˆYˆ
\Ë™›Ü˜Z[Y
HÂˆÛÛœÝ˜Z[YH™]ÈÙ]
\Ë™˜Z[YÙ\™\”Ù]
NÂˆ\Ë˜XÝ]™TÙ\™\œÈH\Ë˜[Ù\™\œË™š[\Š
Ù\™\ŠHOˆY˜Z[Yš\ÊÙ\™\ŠJNÂˆH[ÙHÂˆ\Ë˜XÝ]™TÙ\™\œÈHË‹‹\Ë˜[Ù\™\œ×NÂˆBˆÙÙÙ\Œ‹™XYÊXÝ]™HPÔÙ\™\œÎˆ	Ý\Ë˜XÝ]™TÙ\™\œË›[™ÝNÈ˜Z[Yˆ	Ý\Ë™˜Z[YÙ\™\œË›[™ÝK˜
NÂˆBˆ™XÛÜ™˜Z[\™JÙ\™\‹\œ›ÜLK\ÙJHÂˆÙÙÙ\Œ‹™\œ›ÜŠ˜Z[YÈ	Ü\Ù_HPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IÎ˜\œ›ÜLJNÂˆYˆ
]\Ë™˜Z[YÙ\™\”Ù]š\ÊÙ\™\ŠJHÂˆ\Ë™˜Z[YÙ\™\œËœ\Ú
Ù\™\ŠNÂˆ\Ë™˜Z[YÙ\™\”Ù]˜Y
Ù\™\ŠNÂˆBˆ\Ë™\œ›ÜœÐžTÙ\™\‹œÙ]
Ù\™\‹\œ›ÜLJNÂˆBˆ\Þ[˜È[ÛÛ›™XÝ
Ù\™\ŠHÂˆYˆ
\Ë˜ÛÛ›™XÝ[”\˜[[
HÂˆÛÛœÝÛÜšÙ\ˆH\Ë™Ù]ÛÜšÙ\ŠÙ\™\ŠNÂˆ]ØZ]ÛÜšÙ\‹˜ÛÛ›™XÝ

NÂˆ™]\›ŽÂˆBˆ]ØZ][•Ú][Y[Ý]


HOˆÙ\™\‹˜ÛÛ›™XÝ

K\Ë˜ÛÛ›™XÝ[Y[Ý]\ËÜ™X]U[Y[Ý]\œ›ÜŠ˜ÛÛ›™XÝ‹Ù\™\‹\Ë˜ÛÛ›™XÝ[Y[Ý]\ÊJNÂˆBˆ\Þ[˜ÈÛÜÙTÙ\™\ŠÙ\™\ŠHÂˆžHÂˆÙÙÙ\Œ‹™XYÊÛÜÚ[™ÈPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IË˜
NÂˆ]ØZ]\Ëœ[ÛÜÙJÙ\™\ŠNÂˆÙÙÙ\Œ‹™XYÊÛÜÙYPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IË˜
NÂˆHØ]Ú
\œ›ÜLJHÂˆÛÛœÝ\œˆHÑ\œ›ÜŠ\œ›ÜLJNÂˆYˆ
\ÐX›Ü\œ›ÜŒŠ\œŠJHÂˆYˆ
]\ËœÝ\™\ÜÐX›Ü\œ›ÜŠHÂˆ›ÝÈ\œŽÂˆBˆÙÙÙ\Œ‹™XYÊÛÜÙHØ[˜Ù[Y›ÜˆPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IÎˆ	Ù\œŸX
NÂˆ\Ë™\œ›ÜœÐžTÙ\™\‹œÙ]
Ù\™\‹\œŠNÂˆ™]\›ŽÂˆBˆÙÙÙ\Œ‹™\œ›ÜŠ˜Z[YÈÛÜÙHPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IÎ˜\œŠNÂˆ\Ë™\œ›ÜœÐžTÙ\™\‹œÙ]
Ù\™\‹\œŠNÂˆBˆBˆ\Þ[˜È[ÛÜÙJÙ\™\ŠHÂˆYˆ
\Ë˜ÛÛ›™XÝ[”\˜[[	‰ˆ\ËÛÜšÙ\œËš\ÊÙ\™\ŠJHÂˆÛÛœÝÛÜšÙ\ˆH\ËÛÜšÙ\œË™Ù]
Ù\™\ŠNÂˆYˆ
ÛÜšÙ\ŠHÂˆ]ØZ]ÛÜšÙ\‹˜ÛÜÙJ
NÂˆYˆ
ÛÜšÙ\‹š\ÑÛ™JHÂˆ\ËÛÜšÙ\œË™[]JÙ\™\ŠNÂˆBˆ™]\›ŽÂˆBˆBˆ]ØZ][•Ú][Y[Ý]


HOˆÙ\™\‹˜ÛÜÙJ
K\Ë˜ÛÜÙU[Y[Ý]\ËÜ™X]U[Y[Ý]\œ›ÜŠ˜ÛÜÙH‹Ù\™\‹\Ë˜ÛÜÙU[Y[Ý]\ÊJNÂˆBˆ\Þ[˜ÈÛÜÙTÙ\™\œÊÙ\™\œÊHÂˆ›Üˆ
ÛÛœÝÙ\™\ˆÙˆË‹‹œÙ\™\œ×Kœ™]™\œÙJ
JHÂˆ]ØZ]\Ë˜ÛÜÙTÙ\™\ŠÙ\™\ŠNÂˆBˆBˆ\Þ[˜ÈÛÛ›™XÝ[\˜[[
Ù\™\œÊHÂˆÛÛœÝ™\Ý[ÈH]ØZ]›ÛZ\ÙK˜[Ù]Y
Ù\™\œË›X\

Ù\™\ŠHOˆ\Ë˜][\ÛÛ›™XÝ
Ù\™\ŠJJNÂˆÛÛœÝ™Z™XÝ[ÛˆH™\Ý[Ë™š[™

™\Ý[
HOˆ™\Ý[œÝ]\ÈOOHœ™Z™XÝYŠNÂˆYˆ
™Z™XÝ[ÛŠHÂˆ›ÝÈ™Z™XÝ[Û‹œ™X\ÛÛŽÂˆBˆYˆ
\ËœÝšXÝ	‰ˆ\Ë™˜Z[YÙ\™\œË›[™Ýˆ
HÂˆÛÛœÝš\œÝ˜Z[\™HH\Ë™˜Z[YÙ\™\œË™š[™

Ù\™\ŠHOˆ]\ËœÝ\™\ÜÙYX›Ü˜Z[\™\Ëš\ÊÙ\™\ŠJNÂˆYˆ
š\œÝ˜Z[\™JHÂˆÛÛœÝ\œ›ÜLHH\Ë™\œ›ÜœÐžTÙ\™\‹™Ù]
š\œÝ˜Z[\™JNÂˆYˆ
\œ›ÜLJHÂˆ›ÝÈ\œ›ÜLNÂˆBˆ›ÝÈ™]È\œ›ÜŠ˜Z[YÈÛÛ›™XÝPÔÙ\™\ˆ	ÉÙš\œÝ˜Z[\™K›˜[Y_IË˜
NÂˆBˆBˆBˆÙ]ÛÜšÙ\ŠÙ\™\ŠHÂˆÛÛœÝÛÜšÙ\ˆH\ËÛÜšÙ\œË™Ù]
Ù\™\ŠNÂˆYˆ
]ÛÜšÙ\ˆÛÜšÙ\‹š\ÑÛ™JHÂˆÛÛœÝ™^H™]ÈÙ\™\•ÛÜšÙ\ŠÙ\™\‹\Ë˜ÛÛ›™XÝ[Y[Ý]\Ë\Ë˜ÛÜÙU[Y[Ý]\ÊNÂˆ\ËÛÜšÙ\œËœÙ]
Ù\™\‹™^
NÂˆ™]\›ˆ™^ÂˆBˆ™]\›ˆÛÜšÙ\ŽÂˆBˆ™[[Ý™Q˜Z[YÙ\™\ŠÙ\™\ŠHÂˆYˆ
\Ë™˜Z[YÙ\™\”Ù]š\ÊÙ\™\ŠJHÂˆ\Ë™˜Z[YÙ\™\”Ù]™[]JÙ\™\ŠNÂˆBˆ\ËœÝ\™\ÜÙYX›Ü˜Z[\™\Ë™[]JÙ\™\ŠNÂˆ\Ë™˜Z[YÙ\™\œÈH\Ë™˜Z[YÙ\™\œË™š[\Š
˜Z[YÙ\™\ŠHOˆ˜Z[YÙ\™\ˆOOHÙ\™\ŠNÂˆBŸNÂŠ

HOˆÂˆÛÛœÝ\Þ[˜Ñ\ÜÜÙHHÞ[X›Û˜\Þ[˜Ñ\ÜÜÙNÂˆYˆ
\Þ[˜Ñ\ÜÜÙJHÂˆØš™XÝ™Yš[™T›Ü\JÓPÔÙ\™\œËœ›ÝÝ\K\Þ[˜Ñ\ÜÜÙKÂˆ˜[YNˆ[˜Ý[ÛŠ
HÂˆ™]\›ˆ\Ë˜ÛÜÙJ
NÂˆKˆÛÛ™šYÝ\˜X›NˆYBˆJNÂˆBŸJJ
NÂ˜\ˆPÔÙ\™\œÈHÓPÔÙ\™\œÎÂ™[˜Ý[ÛˆÜ™X]U[Y[Ý]\œ›ÜŠXÝ[Û‹Ù\™\‹[Y[Ý]\ÊHÂˆYˆ
[Y[Ý]\ÈOOH[
HÂˆ™]\›ˆ™]È\œ›ÜŠPÔÙ\™\ˆ	ØXÝ[ÛŸH[YYÝ]˜
NÂˆBˆÛÛœÝ\œ›ÜLHH™]È\œ›ÜŠPÔÙ\™\ˆ	ØXÝ[ÛŸH[YYÝ]Y\ˆ	Ý[Y[Ý]\ß[\È›Üˆ	ÉÜÙ\™\‹›˜[Y_IË˜
NÂˆ\œ›ÜLK›˜[YHH•[Y[Ý]\œ›ÜˆŽÂˆ™]\›ˆ\œ›ÜLNÂŸB™[˜Ý[ÛˆÜ™X]PÛÜÙY\œ›ÜŠÙ\™\ŠHÂˆÛÛœÝ\œ›ÜLHH™]È\œ›ÜŠPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IÈ\ÈÛÜÙY˜
NÂˆ\œ›ÜLK›˜[YHHÛÜÙY\œ›ÜˆŽÂˆ™]\›ˆ\œ›ÜLNÂŸB™[˜Ý[ÛˆÜ™X]PÛÜÚ[™Ñ\œ›ÜŠÙ\™\ŠHÂˆÛÛœÝ\œ›ÜLHH™]È\œ›ÜŠPÔÙ\™\ˆ	ÉÜÙ\™\‹›˜[Y_IÈ\ÈÛÜÚ[™Ë˜
NÂˆ\œ›ÜLK›˜[YHHÛÜÚ[™Ñ\œ›ÜˆŽÂˆ™]\›ˆ\œ›ÜLNÂŸB˜\Þ[˜È[˜Ý[Ûˆ[•Ú][Y[Ý]
›‹[Y[Ý]\Ë[Y[Ý]\œ›ÜŠHÂˆYˆ
[Y[Ý]\ÈOOH[
HÂˆ]ØZ]›Š
NÂˆ™]\›ŽÂˆBˆ][Y\ŒŽÂˆ][YYÝ]H˜[ÙNÂˆÛÛœÝ\ÚÈH›Š
NÂˆÛÛœÝ[Y[Ý]›ÛZ\ÙHH™]È›ÛZ\ÙJ
Ë™Z™XÝ
HOˆÂˆ[Y\ŒˆHÙ][Y[Ý]


HOˆÂˆ[YYÝ]HYNÂˆ™Z™XÝ
[Y[Ý]\œ›ÜŠNÂˆK[Y[Ý]\ÊNÂˆJNÂˆžHÂˆ]ØZ]›ÛZ\ÙKœ˜XÙJÝ\ÚË[Y[Ý]›ÛZ\ÙWJNÂˆHš[˜[HÂˆYˆ
[Y\ŒŠHÂˆÛX\•[Y[Ý]
[Y\ŒŠNÂˆBˆYˆ
[YYÝ]
HÂˆ\ÚË˜Ø]Ú


HOˆ›ÚY
NÂˆBˆBŸB˜\Þ[˜È[˜Ý[Ûˆ[•Ú][Y[Ý]\ÚÊ\ÚË[Y[Ý]\Ë[Y[Ý]\œ›ÜŠHÂˆYˆ
[Y[Ý]\ÈOOH[
HÂˆ]ØZ]\ÚÎÂˆ™]\›ŽÂˆBˆ][Y\ŒŽÂˆ][YYÝ]H˜[ÙNÂˆÛÛœÝ[Y[Ý]›ÛZ\ÙHH™]È›ÛZ\ÙJ
Ë™Z™XÝ
HOˆÂˆ[Y\ŒˆHÙ][Y[Ý]


HOˆÂˆ[YYÝ]HYNÂˆ™Z™XÝ
[Y[Ý]\œ›ÜŠNÂˆK[Y[Ý]\ÊNÂˆJNÂˆžHÂˆ]ØZ]›ÛZ\ÙKœ˜XÙJÝ\ÚË[Y[Ý]›ÛZ\ÙWJNÂˆHš[˜[HÂˆYˆ
[Y\ŒŠHÂˆÛX\•[Y[Ý]
[Y\ŒŠNÂˆBˆYˆ
[YYÝ]
HÂˆ\ÚË˜Ø]Ú


HOˆ›ÚY
NÂˆBˆBŸB™[˜Ý[ÛˆÑ\œ›ÜŠ\œ›ÜLJHÂˆYˆ
\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›ÜŠHÂˆ™]\›ˆ\œ›ÜLNÂˆBˆ™]\›ˆ™]È\œ›ÜŠÝš[™Ê\œ›ÜLJJNÂŸB™[˜Ý[Ûˆ\ÐX›Ü\œ›ÜŒŠ\œ›ÜLJHÂˆÛÛœÝÛÙHH\œ›ÜLK˜ÛÙNÂˆ™]\›ˆ\œ›ÜLK›˜[YHOOHX›Ü\œ›Üˆˆ\œ›ÜLK›˜[YHOOHØ[˜Ù[Y\œ›Üˆˆ\œ›ÜLK›˜[YHOOHØ[˜Ù[Y\œ›ÜˆˆÛÙHOOHP“Ô•ÑT”ˆˆÛÙHOOH‘T”—ÐP“Ô•QŽÂŸB™[˜Ý[Ûˆ[š\]YTÙ\™\œÊÙ\™\œÊHÂˆÛÛœÝÙY[ˆHÊˆ×ÔT‘W×È
‹È™]ÈÙ]

NÂˆÛÛœÝ[š\]YHH×NÂˆ›Üˆ
ÛÛœÝÙ\™\ˆÙˆÙ\™\œÊHÂˆYˆ
\ÙY[‹š\ÊÙ\™\ŠJHÂˆÙY[‹˜Y
Ù\™\ŠNÂˆ[š\]YKœ\Ú
Ù\™\ŠNÂˆBˆBˆ™]\›ˆ[š\]YNÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÚ[™^›ZœÂš[š]ÙY˜][[Ù[

NÂš[š]Ü›ÝšY\œÊ
NÂš[š]Û[Ù[™]žJ
NÂš[š]Ü™\Ý[

NÂš[š]Ü[Š
NÂš[š]Ü[ÛÛ^

NÂš[š]Ü[”Ý]J
NÂš[š]ÝÛÛ

NÂš[š]Ý˜XÚ[™Ê
NÂš[š]Ü›ÝšY\Š
NÂš[š]ÝÛÛÝX\™˜Z[Ê
NÂš[š]Ý\ØYÙJ
NÂš[š]ÜÙ\ÜÚ[ÛŒŠ
NÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÛY[[ÜžKÛY[[ÜžTÙ\ÜÚ[Û‹›ZœÂš[š]ÜÚ[\×Øœ›ÝÜÙ\Š
NÂš[š]ÛÙÙÙ\Š
NÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[ËXÛÜ™KÙ\ÝÚ[™^›ZœÂš[š]Ü›ÝØÛÛ

NÂ˜Y˜XÙT›ØÙ\ÜÛÜŠY˜][›ØÙ\ÜÛÜŒŠ
JNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÝ][Ë›ZœÂ™[˜Ý[Ûˆ˜\ÙMÐ\œ˜^PY™™\Š˜\ÙMÊHÂˆÛÛœÝš[˜\žTÝš[™ÈH]ØŠ˜\ÙMÊNÂˆÛÛœÝ[ˆHš[˜\žTÝš[™Ë›[™ÝÂˆÛÛœÝž]\ÈH™]ÈZ[\œ˜^J[ŠNÂˆ›Üˆ
]HHÈH[ŽÈJÊÊHÂˆž]\ÖÚWHHš[˜\žTÝš[™Ë˜Ú\ÛÙP]
JNÂˆBˆ™]\›ˆž]\Ë˜Y™™\ŽÂŸB™[˜Ý[Ûˆ\œ˜^PY™™\•Ð˜\ÙM
\œ˜^PY™™\ŠHÂˆÛÛœÝš[˜\žTÝš[™ÈHÝš[™Ë™œ›ÛPÚ\ÛÙJ‹‹›™]ÈZ[\œ˜^J\œ˜^PY™™\ŠJNÂˆ™]\›ˆØJš[˜\žTÝš[™ÊNÂŸB™[˜Ý[ÛˆÙ]\Ý^œ›ÛP]Y[ÓÝ]]Y\ÜØYÙJ][JHÂˆYˆ
\[Ùˆ][HOOH[™Yš[™Yˆ][HOOH[\[Ùˆ][HOOH›Øš™XÝˆJ\Hˆ[ˆ][JH\[Ùˆ][K\HOOHœÝš[™ÈˆZ][K\JHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
][K\HOOH›Y\ÜØYÙHŠHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
J˜ÛÛ[ˆ[ˆ][JHP\œ˜^Kš\Ð\œ˜^J][K˜ÛÛ[
H][K˜ÛÛ[›[™ÝJHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ\ÝÛÛ[][HH][K˜ÛÛ[Ú][K˜ÛÛ[›[™ÝHWNÂˆYˆ
J\Hˆ[ˆ\ÝÛÛ[][JH\[Ùˆ\ÝÛÛ[][K\HOOHœÝš[™ÈŠHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
\ÝÛÛ[][K\HOOH›Ý]]Ý^ŠHÂˆ™]\›ˆ\[Ùˆ\ÝÛÛ[][K^OOHœÝš[™ÈˆÈ\ÝÛÛ[][K^ˆ›ÚYÂˆBˆYˆ
\ÝÛÛ[][K\HOOH›Ý]]Ø]Y[ÈŠHÂˆ™]\›ˆ\[Ùˆ\ÝÛÛ[][K˜[œØÜš\OOHœÝš[™ÈˆÈ\ÝÛÛ[][K˜[œØÜš\ˆ›ÚYÂˆBˆ™]\›ˆ›ÚYÂŸB™[˜Ý[ÛˆY™”™X[[YR\ÝÜžJÛ\ÝÜžK™]Ò\ÝÜžJHÂˆÛÛœÝ™[[Ý˜[ÈHÛ\ÝÜžK™š[\Š
][JHOˆ[™]Ò\ÝÜžKœÛÛYJ
™]Ò][JHOˆ™]Ò][Kš][RYOOH][Kš][RY
JNÂˆÛÛœÝY][ÛœÈH™]Ò\ÝÜžK™š[\Š
][JHOˆ[Û\ÝÜžKœÛÛYJ
Û][JHOˆÛ][Kš][RYOOH][Kš][RY
JNÂˆÛÛœÝ\]\ÈH™]Ò\ÝÜžK™š[\Š
][JHOˆÛ\ÝÜžKœÛÛYJ
Û][JHOˆÛ][Kš][RYOOH][Kš][RY	‰ˆ”ÓÓ‹œÝš[™ÚYžJÛ][JHOOH”ÓÓ‹œÝš[™ÚYžJ][JJJNÂˆ™]\›ˆÂˆ™[[Ý˜[ËˆY][ÛœËˆ\]\ÂˆNÂŸB™[˜Ý[Ûˆ\ÕÙX”•ÔÝ\Ü

HÂˆYˆ
\[ÙˆÚ[™ÝÈOOH[™Yš[™YŠHÂˆ™]\›ˆ˜[ÙNÂˆBˆ™]\›ˆ\[ÙˆÚ[™ÝÖÈ”•ÔY\ÛÛ›™XÝ[Ûˆ—HOOH[™Yš[™YŽÂŸB™[˜Ý[Ûˆ™[[Ý™P]Y[Ñœ›ÛPÛÛ[
][JHÂˆYˆ
][Kœ›ÛHOOHœÞ\Ý[HŠHÂˆ™]\›ˆ][NÂˆBˆYˆ
][Kœ›ÛHOOH˜\ÜÚ\Ý[ŠHÂˆ™]\›ˆÂˆ‹‹š][KˆÛÛ[ˆ][K˜ÛÛ[›X\

[žJHOˆÂˆYˆ
[žK\HOOH›Ý]]Ø]Y[ÈŠHÂˆ™]\›ˆÂˆ‹‹™[žKˆ]Y[Îˆ[ˆNÂˆBˆ™]\›ˆ[žNÂˆJBˆNÂˆBˆYˆ
][Kœ›ÛHOOH\Ù\ˆŠHÂˆ™]\›ˆÂˆ‹‹š][KˆÛÛ[ˆ][K˜ÛÛ[›X\

[žJHOˆÂˆYˆ
[žK\HOOHš[œ]Ø]Y[ÈŠHÂˆ™]\›ˆÂˆ‹‹™[žKˆ]Y[Îˆ[ˆNÂˆBˆ™]\›ˆ[žNÂˆJBˆNÂˆBˆ™]\›ˆ][NÂŸB™[˜Ý[Ûˆ™\Ù\™P\ÜÚ\Ý[]Y[Õ˜[œØÜš\Ê^\Ý[™Ë[˜ÛÛZ[™ÊHÂˆYˆ
^\Ý[™Ëœ›ÛHOOH˜\ÜÚ\Ý[ˆ[˜ÛÛZ[™Ëœ›ÛHOOH˜\ÜÚ\Ý[ŠHÂˆ™]\›ˆ[˜ÛÛZ[™ÎÂˆBˆÛÛœÝY\™ÙYÛÛ[H[˜ÛÛZ[™Ë˜ÛÛ[›X\

[žK[™^
HOˆÂˆYˆ
[žK\HOOH›Ý]]Ø]Y[ÈŠHÂˆ™]\›ˆ[žNÂˆBˆÛÛœÝ˜[œØÜš\Z\ÜÚ[™ÈH\[Ùˆ[žK˜[œØÜš\OOHœÝš[™Èˆ[žK˜[œØÜš\›[™ÝOOHÂˆYˆ
]˜[œØÜš\Z\ÜÚ[™ÊHÂˆ™]\›ˆ[žNÂˆBˆÛÛœÝ™]š[Ý\Ñ[žHH^\Ý[™Ë˜ÛÛ[Ú[™^NÂˆYˆ
™]š[Ý\Ñ[žH	‰ˆ™]š[Ý\Ñ[žK\HOOH›Ý]]Ø]Y[Èˆ	‰ˆ\[Ùˆ™]š[Ý\Ñ[žK˜[œØÜš\OOHœÝš[™Èˆ	‰ˆ™]š[Ý\Ñ[žK˜[œØÜš\›[™Ýˆ
HÂˆ™]\›ˆÂˆ‹‹™[žKˆ˜[œØÜš\ˆ™]š[Ý\Ñ[žK˜[œØÜš\ˆNÂˆBˆ™]\›ˆ[žNÂˆJNÂˆ™]\›ˆÂˆ‹‹š[˜ÛÛZ[™ËˆÛÛ[ˆY\™ÙYÛÛ[ˆNÂŸB™[˜Ý[Ûˆ\]T™X[[YR\ÝÜžJ\ÝÜžK]™[ÚÝ[[˜ÛYP]Y[Ñ]JHÂˆYˆ
]™[\HOOH˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹˜ÛÛ\]YŠHÂˆ™]\›ˆ\ÝÜžK›X\

][JHOˆÂˆYˆ
][Kš][RYOOH]™[š][WÚY	‰ˆ][K\HOOH›Y\ÜØYÙHˆ	‰ˆœ›ÛHˆ[ˆ][H	‰ˆ][Kœ›ÛHOOH\Ù\ˆŠHÂˆÛÛœÝ\]YÛÛ[H][K˜ÛÛ[›X\

[žJHOˆÂˆYˆ
[žK\HOOHš[œ]Ø]Y[ÈŠHÂˆ™]\›ˆÂˆ‹‹™[žKˆ˜[œØÜš\ˆ]™[˜[œØÜš\ˆNÂˆBˆ™]\›ˆ[žNÂˆJNÂˆ™]\›ˆÂˆ‹‹š][KˆÛÛ[ˆ\]YÛÛ[ˆÝ]\Îˆ˜ÛÛ\]Y‚ˆNÂˆBˆ™]\›ˆ][NÂˆJNÂˆBˆÛÛœÝ™]Ñ]™[H\ÚÝ[[˜ÛYP]Y[Ñ]H	‰ˆ]™[\HOOH›Y\ÜØYÙHˆÈ™[[Ý™P]Y[Ñœ›ÛPÛÛ[
]™[
Hˆ]™[ÂˆÛÛœÝ^\Ý[™Ò[™^H\ÝÜžK™š[™[™^

][JHOˆ][Kš][RYOOH]™[š][RY
NÂˆYˆ
^\Ý[™Ò[™^OOHLJHÂˆÛÛœÝ^\Ý[™Ò][HH\ÝÜžVÙ^\Ý[™Ò[™^NÂˆÛÛœÝY\™ÙY]™[H™]Ñ]™[\HOOH›Y\ÜØYÙHˆ	‰ˆ^\Ý[™Ò][K\HOOH›Y\ÜØYÙHˆÈ™\Ù\™P\ÜÚ\Ý[]Y[Õ˜[œØÜš\Ê^\Ý[™Ò][K™]Ñ]™[
Hˆ™]Ñ]™[Âˆ™]\›ˆ\ÝÜžK›X\

][KY
HOˆÂˆYˆ
YOOH^\Ý[™Ò[™^
HÂˆ™]\›ˆY\™ÙY]™[ÂˆBˆYˆ
\ÚÝ[[˜ÛYP]Y[Ñ]H	‰ˆ][K\HOOH›Y\ÜØYÙHŠHÂˆ™]\›ˆ™[[Ý™P]Y[Ñœ›ÛPÛÛ[
][JNÂˆBˆ™]\›ˆ][NÂˆJNÂˆH[ÙHYˆ
]™[œ™]š[Ý\Ò][RY
HÂˆÛÛœÝ™]’[™^H\ÝÜžK™š[™[™^

][JHOˆ][Kš][RYOOH]™[œ™]š[Ý\Ò][RY
NÂˆYˆ
™]’[™^OOHLJHÂˆ™]\›ˆÂˆ‹‹š\ÝÜžKœÛXÙJ™]’[™^
ÈJKˆ™]Ñ]™[ˆ‹‹š\ÝÜžKœÛXÙJ™]’[™^
ÈJBˆNÂˆH[ÙHÂˆ™]\›ˆË‹‹š\ÝÜžK™]Ñ]™[NÂˆBˆH[ÙHÂˆ™]\›ˆË‹‹š\ÝÜžK™]Ñ]™[NÂˆBŸB˜\ˆPQT”ÈHÂˆ•\Ù\‹PYÙ[ŽˆYÙ[ËÒ˜]˜TØÜš\	ÛY]Y]WÙY˜][™\œÚ[ÛŸXˆ–SÜ[RKPYÙ[ËTÑÈŽˆÜ[˜ZKXYÙ[Ë\ÙË‰ÛY]Y]WÙY˜][™\œÚ[ÛŸXŸNÂ˜\ˆÑP”ÓÐÒÑUÓQUHHÜ[˜ZKXYÙ[Ë\ÙË‰ÛY]Y]WÙY˜][™\œÚ[ÛŸXÂ™[˜Ý[Ûˆ™X[[YP\›Ý˜[][UÐ\›Ý˜[][JYÙ[][JHÂˆÛÛœÝÈ˜[YK\™Ý[Y[Îˆ\™ÜË‹‹œ™\ÝHH][NÂˆ™]\›ˆ™]È[•ÛÛ\›Ý˜[][JÂˆ\NˆšÜÝYÝÛÛØØ[‹ˆ˜[YKˆ\™Ý[Y[Îˆ”ÓÓ‹œÝš[™ÚYžJ\™ÜÊKˆÝ]\Îˆš[—Ü›ÙÜ™\ÜÈ‹ˆ›ÝšY\‘]NˆÂˆ‹‹œ™\ÝˆBˆKYÙ[
NÂŸB™[˜Ý[Ûˆ\›Ý˜[][UÔ™X[[YP\›Ý˜[][J][JHÂˆYˆ
][Kœ˜]Ò][K\HOOH™[˜Ý[Û—ØØ[ˆ	‰ˆ][Kœ˜]Ò][K\HOOHšÜÝYÝÛÛØØ[ŠHÂˆ›ÝÈ™]È\œ›ÜŠ’[˜[Y\›Ý˜[][H\H›Üˆ™X[[YHPÔ\›Ý˜[™\]Y\ÝŠNÂˆBˆÛÛœÝÈ˜[YK\™Ý[Y[Îˆ\™ÜË›ÝšY\‘]HHH][Kœ˜]Ò][NÂˆÛÛœÝÈ][RYÙ\™\“X™[‹‹œ™\ÝHH›ÝšY\‘]HÏÈßNÂˆYˆ
Z][RY\Ù\™\“X™[
HÂˆ›ÝÈ™]È\œ›ÜŠ’[˜[Y\›Ý˜[][H›Üˆ™X[[YHPÔ\›Ý˜[™\]Y\ÝŠNÂˆBˆ™]\›ˆÂˆ\Nˆ›XÜØ\›Ý˜[Ü™\]Y\Ý‹ˆ][RYˆÙ\™\“X™[ˆ‹‹œ™\Ýˆ˜[YKˆ\™Ý[Y[Îˆ\™ÜÈÈ”ÓÓ‹œ\œÙJ\™ÜÊHˆßKˆ\›Ý™Yˆ[ˆNÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÜ™X[[YPYÙ[›ZœÂ˜\ˆ™X[[YPYÙ[HÛ\ÜÈ^[™ÈYÙ[ÂˆÛÛœÝXÝÜŠÛÛ™šYÌŠHÂˆÝ\\ŠÛÛ™šYÌŠNÂˆÊŠ‚ˆ
ˆH›ÚXÙH[[™YÈ™H\ÙYžHHYÙ[ˆYˆ[›Ý\ˆYÙ[[™XYHÜÚÙH\š[™ÈBˆ
ˆ™X[[YTÙ\ÜÚ[Û‹Ú[™Ú[™ÈH›ÚXÙH\š[™ÈH[™Ù™ˆÚ[˜Z[‚ˆ
‹Âˆ×ÜX›XÑšY[
\Ë›ÚXÙHŠNÂˆ\Ë›ÚXÙHHÛÛ™šYÌ‹›ÚXÙNÂˆBŸNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÜ™X[[YTÙ\ÜÚ[Û‹›ZœÂš[š]ÜÚ[\×Øœ›ÝÜÙ\Š
NÂš[š]Ý][ÌŠ
NÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÙÝX\™˜Z[›ZœÂ™[˜Ý[ÛˆÙ]™X[[YQÝX\™˜Z[Ù][™ÜÊÙ][™ÜÊHÂˆ™]\›ˆÂˆX›Ý[˜ÙU^[™ÝˆÙ][™ÜË™X›Ý[˜ÙU^[™ÝÏÈLˆNÂŸB™[˜Ý[ÛˆYš[™T™X[[YSÝ]]ÝX\™˜Z[
ÈÛXÞR[ˆÛXÞR[[œ]‹‹›Ü[ÛœÈJHÂˆÛÛœÝ˜\ÙQÝX\™˜Z[HYš[™SÝ]]ÝX\™˜Z[
Ü[ÛœÊNÂˆÛÛœÝÛXÞR[HÛXÞR[[œ]ÏÈ˜\ÙQÝX\™˜Z[›˜[YNÂˆ™]\›ˆÂˆ‹‹˜˜\ÙQÝX\™˜Z[ˆÛXÞR[ˆ[Žˆ\Þ[˜È
\™ÜÊHOˆÂˆÛÛœÝ™\Ý[H]ØZ]˜\ÙQÝX\™˜Z[œ[Š\™ÜÊNÂˆ™]\›ˆÂˆ‹‹œ™\Ý[ˆÝX\™˜Z[ˆÈ‹‹œ™\Ý[™ÝX\™˜Z[ÛXÞR[BˆNÂˆBˆNÂŸB™[˜Ý[ÛˆÙ]™X[[YQÝX\™˜Z[™YY˜XÚÓY\ÜØYÙJ™\Ý[
HÂˆ™]\›ˆ—LLQ‘Lˆ[Ý\ˆ\Ý[œÝÙ\ˆØ\È›ØÚÙYˆ‘˜Z[YÝX\™˜Z[™X\ÛÛŽˆ	Ü™\Ý[™ÝX\™˜Z[œÛXÞR[Kˆ‘˜Z[\™H]Z[Îˆ	Ò”ÓÓ‹œÝš[™ÚYžJ™\Ý[›Ý]]›Ý]][™›ÈÏÈßJ_Kˆ”X\ÙH™\ÜÛ™YØZ[ˆ›ÛÝÚ[™ÈÛXÞKˆ\ÛÙÚ^™H›Üˆ›Ý™Z[™ÈX›HÈ[œÝÙ\ˆH]Y\Ý[Ûˆ
Ú[H]›ÚY[™ÈHÜXÚYšXÈ™X\ÛÛŠH[™]™\\ØÝ\ÜÚ[Ûˆ˜XÚÈÈ[ˆ\›Ý™YÜXÈ[[YYX][H[™›Ý[š]H[Ü™H\ØÝ\ÜÚ[Û‹‚˜š[J
NÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÜ[˜ZT™X[[YP˜\ÙK›ZœÂš[š]Ý][ÌŠ
NÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝØÛY[Y\ÜØYÙ\Ë›ZœÂ™[˜Ý[Ûˆ\ÑYš[™Y
Ù^KØš™XÝŠHÂˆÛÛœÝÛÛ™šYÌˆHØš™XÝŽÂˆ™]\›ˆÙ^H[ˆÛÛ™šYÌˆ	‰ˆ\[ÙˆÛÛ™šYÌ–ÚÙ^WHOOH[™Yš[™YŽÂŸB™[˜Ý[Ûˆ\Ñ\™XØ]YÛÛ™šYÊÛÛ™šYÌŠHÂˆ™]\›ˆ\ÑYš[™Y
›[Ù[]Y\È‹ÛÛ™šYÌŠH\ÑYš[™Y
š[œ]]Y[Ñ›Ü›X]‹ÛÛ™šYÌŠH\ÑYš[™Y
›Ý]]]Y[Ñ›Ü›X]‹ÛÛ™šYÌŠH\ÑYš[™Y
š[œ]]Y[Õ˜[œØÜš\[Ûˆ‹ÛÛ™šYÌŠH\ÑYš[™Y
\›‘]XÝ[Ûˆ‹ÛÛ™šYÌŠH\ÑYš[™Y
š[œ]]Y[Ó›Ú\ÙT™YXÝ[Ûˆ‹ÛÛ™šYÌŠH\ÑYš[™Y
œÜYY‹ÛÛ™šYÌŠNÂŸB™[˜Ý[ÛˆÓ™]ÔÙ\ÜÚ[ÛÛÛ™šYÊÛÛ™šYÌŠHÂˆYˆ
Z\Ñ\™XØ]YÛÛ™šYÊÛÛ™šYÌŠJHÂˆÛÛœÝ]Y[Ò[œ]HÛÛ™šYÌ‹˜]Y[ÏËš[œ]ÏÈ›ÚYÂˆÛÛœÝ]Y[ÓÝ]]HÛÛ™šYÌ‹˜]Y[ÏË›Ý]]ÏÈ›ÚYÂˆÛÛœÝ[œ]ÛÛ™šYÈH]Y[Ò[œ]ÈÂˆ›Ü›X]ˆ›Ü›X[^™P]Y[Ñ›Ü›X]
]Y[Ò[œ]Ë™›Ü›X]
Kˆ›Ú\ÙT™YXÝ[ÛŽˆ]Y[Ò[œ]Ë››Ú\ÙT™YXÝ[ÛˆÏÈ[ˆ˜[œØÜš\[ÛŽˆ]Y[Ò[œ]Ë˜[œØÜš\[Û‹ˆ\›‘]XÝ[ÛŽˆ]Y[Ò[œ]Ë\›‘]XÝ[Û‚ˆHˆ›ÚYÂˆÛÛœÝ™\]Y\ÝYÝ]]›ÚXÙHH]Y[ÓÝ]]Ë›ÚXÙHÏÈÛÛ™šYÌ‹›ÚXÙNÂˆÛÛœÝÝ]]ÛÛ™šYÈH]Y[ÓÝ]]\[Ùˆ™\]Y\ÝYÝ]]›ÚXÙHOOH[™Yš[™YˆÈÂˆ›Ü›X]ˆ›Ü›X[^™P]Y[Ñ›Ü›X]
]Y[ÓÝ]]Ë™›Ü›X]
Kˆ›ÚXÙNˆ™\]Y\ÝYÝ]]›ÚXÙKˆÜYYˆ]Y[ÓÝ]]ËœÜYYˆHˆ›ÚYÂˆ™]\›ˆÂˆ[Ù[ˆÛÛ™šYÌ‹›[Ù[ˆ[œÝXÝ[ÛœÎˆÛÛ™šYÌ‹š[œÝXÝ[ÛœËˆÛÛÚÚXÙNˆÛÛ™šYÌ‹ÛÛÚÚXÙKˆÛÛÎˆÛÛ™šYÌ‹ÛÛËˆ\˜[[ÛÛØ[ÎˆÛÛ™šYÌ‹œ\˜[[ÛÛØ[Ëˆ™X\ÛÛš[™ÎˆÛÛ™šYÌ‹œ™X\ÛÛš[™Ëˆ˜XÚ[™ÎˆÛÛ™šYÌ‹˜XÚ[™Ëˆ›ÝšY\‘]NˆÛÛ™šYÌ‹œ›ÝšY\‘]Kˆ›Û\ˆÛÛ™šYÌ‹œ›Û\ˆÝ]][Ù[]Y\ÎˆÛÛ™šYÌ‹›Ý]][Ù[]Y\Ëˆ]Y[Îˆ[œ]ÛÛ™šYÈÝ]]ÛÛ™šYÈÈÂˆ[œ]ˆ[œ]ÛÛ™šYËˆÝ]]ˆÝ]]ÛÛ™šYÂˆHˆ›ÚYˆNÂˆBˆ™]\›ˆÂˆ[Ù[ˆÛÛ™šYÌ‹›[Ù[ˆ[œÝXÝ[ÛœÎˆÛÛ™šYÌ‹š[œÝXÝ[ÛœËˆÛÛÚÚXÙNˆÛÛ™šYÌ‹ÛÛÚÚXÙKˆÛÛÎˆÛÛ™šYÌ‹ÛÛËˆ\˜[[ÛÛØ[ÎˆÛÛ™šYÌ‹œ\˜[[ÛÛØ[Ëˆ™X\ÛÛš[™ÎˆÛÛ™šYÌ‹œ™X\ÛÛš[™Ëˆ˜XÚ[™ÎˆÛÛ™šYÌ‹˜XÚ[™Ëˆ›ÝšY\‘]NˆÛÛ™šYÌ‹œ›ÝšY\‘]Kˆ›Û\ˆÛÛ™šYÌ‹œ›Û\ˆÝ]][Ù[]Y\ÎˆÛÛ™šYÌ‹›[Ù[]Y\Ëˆ]Y[ÎˆÂˆ[œ]ˆÂˆ›Ü›X]ˆ›Ü›X[^™P]Y[Ñ›Ü›X]
ÛÛ™šYÌ‹š[œ]]Y[Ñ›Ü›X]
Kˆ›Ú\ÙT™YXÝ[ÛŽˆÛÛ™šYÌ‹š[œ]]Y[Ó›Ú\ÙT™YXÝ[ÛˆÏÈ[ˆ˜[œØÜš\[ÛŽˆÛÛ™šYÌ‹š[œ]]Y[Õ˜[œØÜš\[Û‹ˆ\›‘]XÝ[ÛŽˆÛÛ™šYÌ‹\›‘]XÝ[Û‚ˆKˆÝ]]ˆÂˆ›Ü›X]ˆ›Ü›X[^™P]Y[Ñ›Ü›X]
ÛÛ™šYÌ‹›Ý]]]Y[Ñ›Ü›X]
Kˆ›ÚXÙNˆÛÛ™šYÌ‹›ÚXÙKˆÜYYˆÛÛ™šYÌ‹œÜYYˆBˆBˆNÂŸB™[˜Ý[Ûˆ›Ü›X[^™P]Y[Ñ›Ü›X]
›Ü›X]
HÂˆYˆ
Y›Ü›X]
Bˆ™]\›ˆ›ÚYÂˆYˆ
\[Ùˆ›Ü›X]OOH›Øš™XÝŠBˆ™]\›ˆ›Ü›X]ÂˆÛÛœÝˆHÝš[™Ê›Ü›X]
NÂˆYˆ
ˆOOHœÛLMˆŠBˆ™]\›ˆÈ\Nˆ˜]Y[ËÜÛH‹˜]NˆLÈNÂˆYˆ
ˆOOH™ÍÌLWÝ[]ÈŠBˆ™]\›ˆÈ\Nˆ˜]Y[ËÜÛ]HˆNÂˆYˆ
ˆOOH™ÍÌLWØ[]ÈŠBˆ™]\›ˆÈ\Nˆ˜]Y[ËÜÛXHˆNÂˆ™]\›ˆÈ\Nˆ˜]Y[ËÜÛH‹˜]NˆLÈNÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÚ][\Ë›ZœÂš[š]Þ›Ù

NÂ˜\ˆ˜\ÙR][TØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™X[[YSY\ÜØYÙR][TØÚ[XHH^\›˜[Ù^ÜË™\ØÜš[Z[˜]Y[š[ÛŠœ›ÛH‹Âˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™]š[Ý\Ò][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Y\ÜØYÙHŠKˆ›ÛNˆ^\›˜[Ù^ÜË›]\˜[
œÞ\Ý[HŠKˆÛÛ[ˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË›Øš™XÝ
È\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ý^ŠK^ˆ^\›˜[Ù^ÜËœÝš[™Ê
HJJBˆJKˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™]š[Ý\Ò][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Y\ÜØYÙHŠKˆ›ÛNˆ^\›˜[Ù^ÜË›]\˜[
\Ù\ˆŠKˆÝ]\Îˆ^\›˜[Ù^ÜË™[[JÈš[—Ü›ÙÜ™\ÜÈ‹˜ÛÛ\]Y—JKˆÛÛ[ˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË›Øš™XÝ
È\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ý^ŠK^ˆ^\›˜[Ù^ÜËœÝš[™Ê
HJK›ÜŠ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[ÈŠKˆ]Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
BˆJJJBˆJKˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™]š[Ý\Ò][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Y\ÜØYÙHŠKˆ›ÛNˆ^\›˜[Ù^ÜË›]\˜[
˜\ÜÚ\Ý[ŠKˆÝ]\Îˆ^\›˜[Ù^ÜË™[[JÈš[—Ü›ÙÜ™\ÜÈ‹˜ÛÛ\]Y‹š[˜ÛÛ\]H—JKˆÛÛ[ˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË›Øš™XÝ
È\Nˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ý^ŠK^ˆ^\›˜[Ù^ÜËœÝš[™Ê
HJK›ÜŠ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ø]Y[ÈŠKˆ]Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

BˆJJJBˆJB—JNÂ˜\ˆ™X[[YUÛÛØ[][HH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™]š[Ý\Ò][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
™[˜Ý[Û—ØØ[ŠKˆÝ]\Îˆ^\›˜[Ù^ÜË™[[JÈš[—Ü›ÙÜ™\ÜÈ‹˜ÛÛ\]Y‹š[˜ÛÛ\]H—JKˆ\™Ý[Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ˜[YNˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
BŸJNÂ˜\ˆ™X[[YSXÜØ[][HH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™]š[Ý\Ò][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË™[[JÈ›XÜØØ[‹›XÜÝÛÛØØ[—JKˆÝ]\Îˆ^\›˜[Ù^ÜË™[[JÈš[—Ü›ÙÜ™\ÜÈ‹˜ÛÛ\]Y‹š[˜ÛÛ\]H—JKˆ\™Ý[Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ˜[YNˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
BŸJNÂ˜\ˆ™X[[YSXÜØ[\›Ý˜[™\]Y\Ý][HH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ][RYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›XÜØ\›Ý˜[Ü™\]Y\ÝŠKˆÙ\™\“X™[ˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ˜[YNˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ\™Ý[Y[Îˆ^\›˜[Ù^ÜËœ™XÛÜ™
^\›˜[Ù^ÜËœÝš[™Ê
K^\›˜[Ù^ÜË˜[žJ
JKˆ\›Ý™Yˆ^\›˜[Ù^ÜË˜›ÛÛX[Š
K›Ü[Û˜[

K›[X›J
BŸJNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÙÙÙ\‹›ZœÂ˜\ˆÙÙÙ\ŒÈHÙ]ÙÙÙ\Š›Ü[˜ZKXYÙ[Îœ™X[[YHŠNÂ˜\ˆÙÙÙ\—ÙY˜][ˆHÙÙÙ\ŒÎÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÜ[˜ZT™X[[YQ]™[Ë›ZœÂš[š]Þ›Ù

NÂ˜\ˆ™X[[YT™\ÜÛœÙHH^\›˜[Ù^ÜË›Øš™XÝ
ÂˆYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

K›[X›J
KˆÛÛ™\œØ][Û—ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

K›[X›J
KˆX^ÛÝ]]ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
K›ÜŠ^\›˜[Ù^ÜË›]\˜[
š[™ˆŠJK›Ü[Û˜[

K›[X›J
KˆY]Y]Nˆ^\›˜[Ù^ÜËœ™XÛÜ™
^\›˜[Ù^ÜËœÝš[™Ê
K^\›˜[Ù^ÜË˜[žJ
JK›Ü[Û˜[

K›[X›J
KˆËÈÐH™[˜[YNˆ[Ù[]Y\ÈOˆÝ]]Û[Ù[]Y\ÂˆÝ]]Û[Ù[]Y\Îˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜËœÝš[™Ê
JK›Ü[Û˜[

K›[X›J
KˆØš™XÝˆ^\›˜[Ù^ÜË›]\˜[
œ™X[[YKœ™\ÜÛœÙHŠK›Ü[Û˜[

K›[X›J
KˆÝ]]ˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË˜[žJ
JK›Ü[Û˜[

K›[X›J
KˆËÈÐHÜ›Ý\[™Îˆ]Y[Ë›Ý]]žÙ›Ü›X]›ÚXÙ_Bˆ]Y[Îˆ^\›˜[Ù^ÜË›Øš™XÝ
ÂˆÝ]]ˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ›Ü›X]ˆ^\›˜[Ù^ÜË˜[žJ
K›Ü[Û˜[

K›[X›J
Kˆ›ÚXÙNˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

K›[X›J
BˆJK›Ü[Û˜[

K›[X›J
BˆJK›Ü[Û˜[

K›[X›J
KˆÝ]\Îˆ^\›˜[Ù^ÜË™[[JÈ˜ÛÛ\]Y‹š[˜ÛÛ\]H‹™˜Z[Y‹˜Ø[˜Ù[Y‹š[—Ü›ÙÜ™\ÜÈ—JK›Ü[Û˜[

K›[X›J
KˆÝ]\×Ù]Z[Îˆ^\›˜[Ù^ÜËœ™XÛÜ™
^\›˜[Ù^ÜËœÝš[™Ê
K^\›˜[Ù^ÜË˜[žJ
JK›Ü[Û˜[

K›[X›J
Kˆ\ØYÙNˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ[œ]ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
K›Ü[Û˜[

Kˆ[œ]ÝÚÙ[—Ù]Z[Îˆ^\›˜[Ù^ÜËœ™XÛÜ™
^\›˜[Ù^ÜËœÝš[™Ê
K^\›˜[Ù^ÜË˜[žJ
JK›Ü[Û˜[

K›[X›J
KˆÝ]]ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
K›Ü[Û˜[

KˆÝ]]ÝÚÙ[—Ù]Z[Îˆ^\›˜[Ù^ÜËœ™XÛÜ™
^\›˜[Ù^ÜËœÝš[™Ê
K^\›˜[Ù^ÜË˜[žJ
JK›Ü[Û˜[

K›[X›J
BˆJK›Ü[Û˜[

K›[X›J
BŸJNÂ˜\ˆÛÛ™\œØ][Û’][PÛÛ[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
ÂˆYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ]Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ^ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË[š[ÛŠÂˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ý^ŠKˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[ÈŠKˆ^\›˜[Ù^ÜË›]\˜[
š][WÜ™Y™\™[˜ÙHŠKˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ý^ŠKˆ^\›˜[Ù^ÜË›]\˜[
˜]Y[ÈŠKˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ø]Y[ÈŠBˆJBŸJNÂ˜\ˆÛÛ™\œØ][Û’][TØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
ÂˆYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\™Ý[Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆØ[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆÛÛ[ˆ^\›˜[Ù^ÜË˜\œ˜^JÛÛ™\œØ][Û’][PÛÛ[ØÚ[XJK›Ü[Û˜[

Kˆ˜[YNˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆÝ]]ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ›ÛNˆ^\›˜[Ù^ÜË™[[JÈ\Ù\ˆ‹˜\ÜÚ\Ý[‹œÞ\Ý[H—JK›Ü[Û˜[

KˆÝ]\Îˆ^\›˜[Ù^ÜË™[[JÈ˜ÛÛ\]Y‹š[˜ÛÛ\]H‹š[—Ü›ÙÜ™\ÜÈ—JK›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË™[[JÂˆ›Y\ÜØYÙH‹ˆ™[˜Ý[Û—ØØ[‹ˆ™[˜Ý[Û—ØØ[ÛÝ]]‹ˆ›XÜÛ\ÝÝÛÛÈ‹ˆ›XÜÝÛÛØØ[‹ˆ›XÜØØ[‹ˆ›XÜØ\›Ý˜[Ü™\]Y\Ý‹ˆ›XÜØ\›Ý˜[Ü™\ÜÛœÙH‚ˆJK›Ü[Û˜[

Kˆ\›Ý˜[Ü™\]Y\ÝÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

Kˆ\›Ý™Nˆ^\›˜[Ù^ÜË˜›ÛÛX[Š
K›[X›J
K›Ü[Û˜[

Kˆ™X\ÛÛŽˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

KˆÙ\™\—ÛX™[ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\œ›ÜŽˆ^\›˜[Ù^ÜË˜[žJ
K›[X›J
K›Ü[Û˜[

KˆÛÛÎˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË›Øš™XÝ
Âˆ˜[YNˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ\ØÜš\[ÛŽˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ[œ]ÜØÚ[XNˆ^\›˜[Ù^ÜËœ™XÛÜ™
^\›˜[Ù^ÜËœÝš[™Ê
K^\›˜[Ù^ÜË˜[žJ
JK›Ü[Û˜[

BˆJKœ\ÜÝ›ÝYÚ

JK›Ü[Û˜[

BŸJKœ\ÜÝ›ÝYÚ

NÂ˜\ˆÛÛ™\œØ][ÛÜ™X]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹˜Ü™X]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ™\œØ][ÛŽˆ^\›˜[Ù^ÜË›Øš™XÝ
ÂˆYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆØš™XÝˆ^\›˜[Ù^ÜË›]\˜[
œ™X[[YK˜ÛÛ™\œØ][ÛˆŠK›Ü[Û˜[

BˆJBŸJNÂ˜\ˆÛÛ™\œØ][Û’][PYY]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K˜YYŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][NˆÛÛ™\œØ][Û’][TØÚ[XKˆ™]š[Ý\×Ú][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][QÛ™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][NˆÛÛ™\œØ][Û’][TØÚ[XKˆ™]š[Ý\×Ú][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][Q[]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K™[]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆÛÛ™\œØ][Û’][R[œ]]Y[Õ˜[œØÜš\[ÛÛÛ\]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹˜ÛÛ\]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÙÜ›ØœÎˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË˜[žJ
JK›[X›J
K›Ü[Û˜[

Kˆ\ØYÙNˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
ÚÙ[œÈŠKˆÝ[ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ[œ]ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ[œ]ÝÚÙ[—Ù]Z[Îˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ^ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ]Y[×ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
BˆJKˆÝ]]ÝÚÙ[œÎˆ^\›˜[Ù^ÜË›[X™\Š
BˆJK›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][R[œ]]Y[Õ˜[œØÜš\[Û‘[Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹™[HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
K›Ü[Û˜[

Kˆ[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆÙÜ›ØœÎˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË˜[žJ
JK›[X›J
K›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][R[œ]]Y[Õ˜[œØÜš\[Û‘˜Z[Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹™˜Z[YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ\œ›ÜŽˆ^\›˜[Ù^ÜË›Øš™XÝ
ÂˆÛÙNˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆY\ÜØYÙNˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\˜[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BˆJBŸJNÂ˜\ˆÛÛ™\œØ][Û’][T™]šY]™Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][Kœ™]šY]™YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][NˆÛÛ™\œØ][Û’][TØÚ[XBŸJNÂ˜\ˆÛÛ™\œØ][Û’][U[˜Ø]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K[˜Ø]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]Y[×Ù[™Û\Îˆ^\›˜[Ù^ÜË›[X™\Š
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
BŸJNÂ˜\ˆÛÛ™\œØ][Û’][PÜ™X]Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K˜Ü™X]HŠKˆ][NˆÛÛ™\œØ][Û’][TØÚ[XKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ™]š[Ý\×Ú][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][Q[]Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K™[]HŠKˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][T™]šY]™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][Kœ™]šY]™HŠKˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆÛÛ™\œØ][Û’][U[˜Ø]Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
˜ÛÛ™\œØ][Û‹š][K[˜Ø]HŠKˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]Y[×Ù[™Û\Îˆ^\›˜[Ù^ÜË›[X™\Š
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆ\œ›Ü‘]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
™\œ›ÜˆŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\œ›ÜŽˆ^\›˜[Ù^ÜË˜[žJ
K›Ü[Û˜[

BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\ÛX\™Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹˜ÛX\™YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\\[™]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹˜\[™ŠKˆ]Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\ÛX\‘]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹˜ÛX\ˆŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\ÛÛ[Z]]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹˜ÛÛ[Z]ŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\ÛÛ[Z]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹˜ÛÛ[Z]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™]š[Ý\×Ú][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›[X›J
K›Ü[Û˜[

BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\”ÜYXÚÝ\Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹œÜYXÚÜÝ\YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]Y[×ÜÝ\Û\Îˆ^\›˜[Ù^ÜË›[X™\Š
BŸJNÂ˜\ˆ[œ]]Y[ÐY™™\”ÜYXÚÝÜY]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
š[œ]Ø]Y[×ØY™™\‹œÜYXÚÜÝÜYŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]Y[×Ù[™Û\Îˆ^\›˜[Ù^ÜË›[X™\Š
BŸJNÂ˜\ˆÝ]]]Y[ÐY™™\”Ý\Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ø]Y[×ØY™™\‹œÝ\YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJKœ\ÜÝ›ÝYÚ

NÂ˜\ˆÝ]]]Y[ÐY™™\”ÝÜY]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ø]Y[×ØY™™\‹œÝÜYŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJKœ\ÜÝ›ÝYÚ

NÂ˜\ˆÝ]]]Y[ÐY™™\ÛX\™Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›Ý]]Ø]Y[×ØY™™\‹˜ÛX\™YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ˜]S[Z]Õ\]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ˜]WÛ[Z]Ë\]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ˜]WÛ[Z]Îˆ^\›˜[Ù^ÜË˜\œ˜^J^\›˜[Ù^ÜË›Øš™XÝ
Âˆ[Z]ˆ^\›˜[Ù^ÜË›[X™\Š
K›Ü[Û˜[

Kˆ˜[YNˆ^\›˜[Ù^ÜË™[[JÈœ™\]Y\ÝÈ‹ÚÙ[œÈ—JK›Ü[Û˜[

Kˆ™[XZ[š[™Îˆ^\›˜[Ù^ÜË›[X™\Š
K›Ü[Û˜[

Kˆ™\Ù]ÜÙXÛÛ™Îˆ^\›˜[Ù^ÜË›[X™\Š
K›Ü[Û˜[

BˆJJBŸJNÂ˜\ˆ™\ÜÛœÙP]Y[Ñ[Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ø]Y[Ë™[HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙP]Y[ÑÛ™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ø]Y[Ë™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙP]Y[Õ˜[œØÜš\[Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ø]Y[×Ý˜[œØÜš\™[HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙP]Y[Õ˜[œØÜš\Û™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
ÂˆËÈÐHX^H[›ÙXÙH™\ÜÛœÙK›Ý]]Ø]Y[×Ý˜[œØÜš\™Û™Bˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ø]Y[×Ý˜[œØÜš\™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙPÛÛ[\YY]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK˜ÛÛ[Ü\˜YYŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ\ˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ]Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ^ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË™[[JÈ^‹˜]Y[È—JK›Ü[Û˜[

BˆJBŸJNÂ˜\ˆ™\ÜÛœÙPÛÛ[\Û™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK˜ÛÛ[Ü\™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ\ˆ^\›˜[Ù^ÜË›Øš™XÝ
Âˆ]Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ^ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ˜[œØÜš\ˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ\Nˆ^\›˜[Ù^ÜË™[[JÈ^‹˜]Y[È—JK›Ü[Û˜[

BˆJBŸJNÂ˜\ˆ™\ÜÛœÙPÜ™X]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK˜Ü™X]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™\ÜÛœÙNˆ™X[[YT™\ÜÛœÙBŸJNÂ˜\ˆ™\ÜÛœÙQÛ™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™\ÜÛœÙNˆ™X[[YT™\ÜÛœÙBŸJNÂ˜\ˆ™\ÜÛœÙQ[˜Ý[ÛØ[\™Ý[Y[Ñ[Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK™[˜Ý[Û—ØØ[Ø\™Ý[Y[Ë™[HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆØ[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙQ[˜Ý[ÛØ[\™Ý[Y[ÑÛ™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK™[˜Ý[Û—ØØ[Ø\™Ý[Y[Ë™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆØ[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ\™Ý[Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙSÝ]]][PYY]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ú][K˜YYŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][NˆÛÛ™\œØ][Û’][TØÚ[XKˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙSÝ]]][QÛ™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ú][K™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][NˆÛÛ™\œØ][Û’][TØÚ[XKˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙU^[Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ý^™[HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙU^Û™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
ÂˆËÈ›È™[˜[YHÜXÚYšYY›ÜˆÛ™NÈÙY\™\ÜÛœÙK^™Û™Bˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›Ý]]Ý^™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÛÛ[Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ^ˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆÙ\ÜÚ[ÛÜ™X]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œÙ\ÜÚ[Û‹˜Ü™X]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÙ\ÜÚ[ÛŽˆ^\›˜[Ù^ÜË˜[žJ
BŸJNÂ˜\ˆÙ\ÜÚ[Û•\]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œÙ\ÜÚ[Û‹\]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÙ\ÜÚ[ÛŽˆ^\›˜[Ù^ÜË˜[žJ
BŸJNÂ˜\ˆ™\ÜÛœÙPØ[˜Ù[]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK˜Ø[˜Ù[ŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆ™\ÜÛœÙPÜ™X]Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK˜Ü™X]HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ™\ÜÛœÙNˆ^\›˜[Ù^ÜË˜[žJ
K›Ü[Û˜[

BŸJNÂ˜\ˆÙ\ÜÚ[Û•\]Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œÙ\ÜÚ[Û‹\]HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

KˆÙ\ÜÚ[ÛŽˆ^\›˜[Ù^ÜË˜[žJ
BŸJNÂ˜\ˆXÜ\ÝÛÛÒ[”›ÙÜ™\ÜÑ]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›XÜÛ\ÝÝÛÛËš[—Ü›ÙÜ™\ÜÈŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆXÜ\ÝÛÛÐÛÛ\]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›XÜÛ\ÝÝÛÛË˜ÛÛ\]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆ™\ÜÛœÙSXÜØ[\™Ý[Y[Ñ[Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›XÜØØ[Ø\™Ý[Y[Ë™[HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ[Nˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆØ™\ØØ][ÛŽˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙSXÜØ[\™Ý[Y[ÑÛ™Q]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›XÜØØ[Ø\™Ý[Y[Ë™Û™HŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ™\ÜÛœÙWÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ\™Ý[Y[Îˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙSXÜØ[[”›ÙÜ™\ÜÑ]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›XÜØØ[š[—Ü›ÙÜ™\ÜÈŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆ™\ÜÛœÙSXÜØ[ÛÛ\]Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
œ™\ÜÛœÙK›XÜØØ[˜ÛÛ\]YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
KˆÝ]]Ú[™^ˆ^\›˜[Ù^ÜË›[X™\Š
Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
BŸJNÂ˜\ˆXÜ\ÝÛÛÑ˜Z[Y]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜË›]\˜[
›XÜÛ\ÝÝÛÛË™˜Z[YŠKˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

Kˆ][WÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

BŸJNÂ˜\ˆÙ[™\šXÑ]™[ØÚ[XHH^\›˜[Ù^ÜË›Øš™XÝ
Âˆ\Nˆ^\›˜[Ù^ÜËœÝš[™Ê
Kˆ]™[ÚYˆ^\›˜[Ù^ÜËœÝš[™Ê
K›Ü[Û˜[

K›[X›J
BŸJKœ\ÜÝ›ÝYÚ

NÂ˜\ˆ™X[[YTÙ\™\‘]™[ØÚ[XHH^\›˜[Ù^ÜË™\ØÜš[Z[˜]Y[š[ÛŠ\H‹ÂˆÛÛ™\œØ][ÛÜ™X]Y]™[ØÚ[XKˆÛÛ™\œØ][Û’][PYY]™[ØÚ[XKˆÛÛ™\œØ][Û’][QÛ™Q]™[ØÚ[XKˆÛÛ™\œØ][Û’][Q[]Y]™[ØÚ[XKˆÛÛ™\œØ][Û’][R[œ]]Y[Õ˜[œØÜš\[ÛÛÛ\]Y]™[ØÚ[XKˆÛÛ™\œØ][Û’][R[œ]]Y[Õ˜[œØÜš\[Û‘[Q]™[ØÚ[XKˆÛÛ™\œØ][Û’][R[œ]]Y[Õ˜[œØÜš\[Û‘˜Z[Y]™[ØÚ[XKˆÛÛ™\œØ][Û’][T™]šY]™Y]™[ØÚ[XKˆÛÛ™\œØ][Û’][U[˜Ø]Y]™[ØÚ[XKˆ\œ›Ü‘]™[ØÚ[XKˆ[œ]]Y[ÐY™™\ÛX\™Y]™[ØÚ[XKˆ[œ]]Y[ÐY™™\ÛÛ[Z]Y]™[ØÚ[XKˆ[œ]]Y[ÐY™™\”ÜYXÚÝ\Y]™[ØÚ[XKˆ[œ]]Y[ÐY™™\”ÜYXÚÝÜY]™[ØÚ[XKˆÝ]]]Y[ÐY™™\”Ý\Y]™[ØÚ[XKˆÝ]]]Y[ÐY™™\”ÝÜY]™[ØÚ[XKˆÝ]]]Y[ÐY™™\ÛX\™Y]™[ØÚ[XKˆ˜]S[Z]Õ\]Y]™[ØÚ[XKˆ™\ÜÛœÙP]Y[Ñ[Q]™[ØÚ[XKˆ™\ÜÛœÙP]Y[ÑÛ™Q]™[ØÚ[XKˆ™\ÜÛœÙP]Y[Õ˜[œØÜš\[Q]™[ØÚ[XKˆ™\ÜÛœÙP]Y[Õ˜[œØÜš\Û™Q]™[ØÚ[XKˆ™\ÜÛœÙPÛÛ[\YY]™[ØÚ[XKˆ™\ÜÛœÙPÛÛ[\Û™Q]™[ØÚ[XKˆ™\ÜÛœÙPÜ™X]Y]™[ØÚ[XKˆ™\ÜÛœÙQÛ™Q]™[ØÚ[XKˆ™\ÜÛœÙQ[˜Ý[ÛØ[\™Ý[Y[Ñ[Q]™[ØÚ[XKˆ™\ÜÛœÙQ[˜Ý[ÛØ[\™Ý[Y[ÑÛ™Q]™[ØÚ[XKˆ™\ÜÛœÙSÝ]]][PYY]™[ØÚ[XKˆ™\ÜÛœÙSÝ]]][QÛ™Q]™[ØÚ[XKˆ™\ÜÛœÙU^[Q]™[ØÚ[XKˆ™\ÜÛœÙU^Û™Q]™[ØÚ[XKˆÙ\ÜÚ[ÛÜ™X]Y]™[ØÚ[XKˆÙ\ÜÚ[Û•\]Y]™[ØÚ[XKˆXÜ\ÝÛÛÒ[”›ÙÜ™\ÜÑ]™[ØÚ[XKˆXÜ\ÝÛÛÐÛÛ\]Y]™[ØÚ[XKˆXÜ\ÝÛÛÑ˜Z[Y]™[ØÚ[XKˆ™\ÜÛœÙSXÜØ[\™Ý[Y[Ñ[Q]™[ØÚ[XKˆ™\ÜÛœÙSXÜØ[\™Ý[Y[ÑÛ™Q]™[ØÚ[XKˆ™\ÜÛœÙSXÜØ[[”›ÙÜ™\ÜÑ]™[ØÚ[XKˆ™\ÜÛœÙSXÜØ[ÛÛ\]Y]™[ØÚ[XB—JNÂ˜\ˆ™X[[YPÛY[]™[ØÚ[XHH^\›˜[Ù^ÜË™\ØÜš[Z[˜]Y[š[ÛŠ\H‹ÂˆÛÛ™\œØ][Û’][PÜ™X]Q]™[ØÚ[XKˆÛÛ™\œØ][Û’][Q[]Q]™[ØÚ[XKˆÛÛ™\œØ][Û’][T™]šY]™Q]™[ØÚ[XKˆÛÛ™\œØ][Û’][U[˜Ø]Q]™[ØÚ[XKˆ[œ]]Y[ÐY™™\\[™]™[ØÚ[XKˆ[œ]]Y[ÐY™™\ÛX\‘]™[ØÚ[XKˆ[œ]]Y[ÐY™™\ÛÛ[Z]]™[ØÚ[XKˆ™\ÜÛœÙPØ[˜Ù[]™[ØÚ[XKˆ™\ÜÛœÙPÜ™X]Q]™[ØÚ[XKˆÙ\ÜÚ[Û•\]Q]™[ØÚ[XB—JNÂ™[˜Ý[Ûˆ\œÙT™X[[YQ]™[
]™[
HÂˆ]˜]ÎÂˆžHÂˆ˜]ÈH”ÓÓ‹œ\œÙJ]™[™]KÔÝš[™Ê
JNÂˆHØ]ÚÂˆ™]\›ˆÈ]Nˆ[\ÑÙ[™\šXÎˆYHNÂˆBˆÛÛœÝ\œÙYH™X[[YTÙ\™\‘]™[ØÚ[XKœØY™T\œÙJ˜]ÊNÂˆYˆ
\\œÙYœÝXØÙ\ÜÊHÂˆÛÛœÝÙ[™\šXÔ\œÙYHÙ[™\šXÑ]™[ØÚ[XKœØY™T\œÙJ˜]ÊNÂˆYˆ
Ù[™\šXÔ\œÙYœÝXØÙ\ÜÊHÂˆ™]\›ˆÈ]NˆÙ[™\šXÔ\œÙY™]K\ÑÙ[™\šXÎˆYHNÂˆBˆ™]\›ˆÈ]Nˆ[\ÑÙ[™\šXÎˆYHNÂˆBˆ™]\›ˆÈ]Nˆ\œÙY™]K\ÑÙ[™\šXÎˆ˜[ÙHNÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÜ[˜ZT™X[[YP˜\ÙK›ZœÂš[š]Ý][ÌŠ
NÂ˜\ˆQUSÓÔSRWÔ‘PSSQWÓSÑSH™Ü\™X[[YKL‹ŒHŽÂ˜\ˆQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QÈHÂˆÝ]][Ù[]Y\ÎˆÈ˜]Y[È—Kˆ]Y[ÎˆÂˆ[œ]ˆÂˆ›Ü›X]ˆÈ\Nˆ˜]Y[ËÜÛH‹˜]NˆLÈKˆ˜[œØÜš\[ÛŽˆÈ[Ù[ˆ™ÜMË[Z[šK]˜[œØÜšX™HˆKˆ\›‘]XÝ[ÛŽˆÈ\NˆœÙ[X[X×Ý˜YˆKˆ›Ú\ÙT™YXÝ[ÛŽˆ[ˆKˆÝ]]ˆÂˆ›Ü›X]ˆÈ\Nˆ˜]Y[ËÜÛH‹˜]NˆLÈKˆÜYYˆBˆBˆBŸNÂ™[˜Ý[Ûˆ›Ü›X[^™T™X[[YSY\ÜØYÙPÛÛ[
›ÛKÛÛ[
HÂˆYˆ
›ÛHOOH˜\ÜÚ\Ý[ˆP\œ˜^Kš\Ð\œ˜^JÛÛ[
JHÂˆ™]\›ˆÛÛ[ÂˆBˆ™]\›ˆÛÛ[›X\

\
HOˆÂˆYˆ
\	‰ˆ\[Ùˆ\OOH›Øš™XÝˆ	‰ˆ\Hˆ[ˆ\	‰ˆ\\HOOH˜]Y[ÈŠHÂˆ™]\›ˆÂˆ‹‹œ\ˆ\Nˆ›Ý]]Ø]Y[È‚ˆNÂˆBˆ™]\›ˆ\ÂˆJNÂŸB˜\ˆÛ[Ù[Ø\RÙ^KÝ˜XÚ[™ÐÛÛ™šYËÜ˜]ÔÙ\ÜÚ[ÛÛÛ™šYÎÂ˜\ˆÓÜ[RT™X[[YP˜\ÙHHÛ\ÜÈÓÜ[RT™X[[YP˜\ÙH^[™È]™[[Z]\‘[YØ]HÂˆÛÛœÝXÝÜŠÜ[ÛœÈHßJHÂˆÝ\\Š
NÂˆ×Üš]˜]PY
\ËÛ[Ù[
NÂˆ×Üš]˜]PY
\ËØ\RÙ^JNÂˆ×Üš]˜]PY
\ËÝ˜XÚ[™ÐÛÛ™šYË[
NÂˆ×Üš]˜]PY
\ËÜ˜]ÔÙ\ÜÚ[ÛÛÛ™šYË[
NÂˆ×ÜX›XÑšY[
\Ë™]™[[Z]\ˆ‹™]Èœ›ÝÜÙ\‘]™[[Z]\Š
JNÂˆ×Üš]˜]TÙ]
\ËÛ[Ù[Ü[ÛœË›[Ù[ÏÈQUSÓÔSRWÔ‘PSSQWÓSÑS
NÂˆ×Üš]˜]TÙ]
\ËØ\RÙ^KÜ[ÛœË˜\RÙ^JNÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[[Ù[]\È™Z[™È\ÙYžHH˜[œÜÜ^Y\‹‚ˆ
‹ÂˆÙ]Ý\œ™[[Ù[

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÛ[Ù[
NÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[[Ù[]\È™Z[™È\ÙYžHH˜[œÜÜ^Y\‹‚ˆ
ˆ
Š“›ÝJŠŽˆH[Ù[Ø[››Ý™HÚ[™ÙYZYÛÛ™\œØ][Û‹‚ˆ
‹ÂˆÙ]Ý\œ™[[Ù[
[Ù[
HÂˆ×Üš]˜]TÙ]
\ËÛ[Ù[[Ù[
NÂˆBˆÊŠ‚ˆ
ˆÛÚÈ›ÜˆÝX˜Û\ÜÙ\ÈÈÛX[ˆ\˜[œÜÜ\ÜXÚYšXÈÝ]HÚ[ˆ]Y[Âˆ
ˆ^X˜XÚÈš[š\Ú\ËˆY˜][ÈÈH›Ë[Ü‚ˆ
‹ÂˆØY\]Y[ÑÛ™Q]™[

HÂˆBˆÙ]Ü˜]ÔÙ\ÜÚ[ÛÛÛ™šYÊ
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜ˜]ÔÙ\ÜÚ[ÛÛÛ™šYÊHÏÈ[ÂˆBˆ\Þ[˜ÈÙÙ]\RÙ^JÜ[ÛœÊHÂˆÛÛœÝ\RÙ^HHÜ[ÛœË˜\RÙ^HÏÈ×Üš]˜]QÙ]
\ËØ\RÙ^JNÂˆYˆ
\[Ùˆ\RÙ^HOOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆ]ØZ]\RÙ^J
NÂˆBˆ™]\›ˆ\RÙ^NÂˆBˆÛÛ“Y\ÜØYÙJ]™[
HÂˆÛÛœÝÈ]Nˆ\œÙY\ÑÙ[™\šXÈHH\œÙT™X[[YQ]™[
]™[
NÂˆYˆ
\œÙYOOH[
HÂˆ™]\›ŽÂˆBˆ\Ë™[Z]
Šˆ‹\œÙY
NÂˆYˆ
\ÑÙ[™\šXÊHÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH™\œ›ÜˆŠHÂˆ\Ë™[Z]
™\œ›Üˆ‹È\Nˆ™\œ›Üˆ‹\œ›ÜŽˆ\œÙYJNÂˆH[ÙHÂˆ\Ë™[Z]
\œÙY\K\œÙY
NÂˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK˜Ü™X]YŠHÂˆ\Ë™[Z]
\›—ÜÝ\Y‹Âˆ\Nˆœ™\ÜÛœÙWÜÝ\Y‹ˆ›ÝšY\‘]NˆÂˆ‹‹œ\œÙYˆBˆJNÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOHœÙ\ÜÚ[Û‹\]YŠHÂˆ×Üš]˜]TÙ]
\ËÜ˜]ÔÙ\ÜÚ[ÛÛÛ™šYË\œÙYœÙ\ÜÚ[ÛŠNÂˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK™Û™HŠHÂˆÛÛœÝ™\ÜÛœÙHH™\ÜÛœÙQÛ™Q]™[ØÚ[XKœØY™T\œÙJ\œÙY
NÂˆYˆ
\™\ÜÛœÙKœÝXØÙ\ÜÊHÂˆÙÙÙ\—ÙY˜][‹™\œ›ÜŠ‘\œ›Üˆ\œÚ[™È™\ÜÛœÙHÛ™H]™[‹™\ÜÛœÙK™\œ›ÜŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ[œ]ÚÙ[œÈH™\ÜÛœÙK™]Kœ™\ÜÛœÙK\ØYÙOËš[œ]ÝÚÙ[œÈÏÈÂˆÛÛœÝÝ]]ÚÙ[œÈH™\ÜÛœÙK™]Kœ™\ÜÛœÙK\ØYÙOË›Ý]]ÝÚÙ[œÈÏÈÂˆÛÛœÝÝ[ÚÙ[œÈH[œ]ÚÙ[œÈ
ÈÝ]]ÚÙ[œÎÂˆÛÛœÝ\ØYÙHH™]È\ØYÙJÂˆ[œ]ÚÙ[œËˆ[œ]ÚÙ[œÑ]Z[Îˆ™\ÜÛœÙK™]Kœ™\ÜÛœÙK\ØYÙOËš[œ]ÝÚÙ[—Ù]Z[ÈÏÈßKˆÝ]]ÚÙ[œËˆÝ]]ÚÙ[œÑ]Z[Îˆ™\ÜÛœÙK™]Kœ™\ÜÛœÙK\ØYÙOË›Ý]]ÝÚÙ[—Ù]Z[ÈÏÈßKˆÝ[ÚÙ[œÂˆJNÂˆ\Ë™[Z]
\ØYÙWÝ\]H‹\ØYÙJNÂˆ\Ë™[Z]
\›—ÙÛ™H‹Âˆ\Nˆœ™\ÜÛœÙWÙÛ™H‹ˆ™\ÜÛœÙNˆÂˆYˆ™\ÜÛœÙK™]Kœ™\ÜÛœÙKšYÏÈˆ‹ˆÝ]]ˆ™\ÜÛœÙK™]Kœ™\ÜÛœÙK›Ý]]ÏÈ×Kˆ\ØYÙNˆÂˆ[œ]ÚÙ[œËˆ[œ]ÚÙ[œÑ]Z[Îˆ™\ÜÛœÙK™]Kœ™\ÜÛœÙK\ØYÙOËš[œ]ÝÚÙ[—Ù]Z[ÈÏÈßKˆÝ]]ÚÙ[œËˆÝ]]ÚÙ[œÑ]Z[Îˆ™\ÜÛœÙK™]Kœ™\ÜÛœÙK\ØYÙOË›Ý]]ÝÚÙ[—Ù]Z[ÈÏÈßKˆÝ[ÚÙ[œÂˆBˆBˆJNÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ø]Y[Ë™Û™HŠHÂˆ\Ë™[Z]
˜]Y[×ÙÛ™HŠNÂˆ\Ë—ØY\]Y[ÑÛ™Q]™[

NÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™[]YŠHÂˆ\Ë™[Z]
š][WÙ[]Y‹Âˆ][RYˆ\œÙYš][WÚYˆJNÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹˜ÛÛ\]Yˆ\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K[˜Ø]YŠHÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][Kœ™]šY]™H‹ˆ][WÚYˆ\œÙYš][WÚYˆJNÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹™[Hˆ\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ý^™[Hˆ\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ø]Y[×Ý˜[œØÜš\™[Hˆ\œÙY\HOOHœ™\ÜÛœÙK™[˜Ý[Û—ØØ[Ø\™Ý[Y[Ë™[HŠHÂˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ø]Y[×Ý˜[œØÜš\™[HŠHÂˆ\Ë™[Z]
˜]Y[×Ý˜[œØÜš\Ù[H‹Âˆ\Nˆ˜[œØÜš\Ù[H‹ˆ[Nˆ\œÙY™[Kˆ][RYˆ\œÙYš][WÚYˆ™\ÜÛœÙRYˆ\œÙYœ™\ÜÛœÙWÚYˆJNÂˆBˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K˜YYˆ\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™Û™Hˆ\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][Kœ™]šY]™YŠHÂˆYˆ
\œÙYš][K\HOOH›XÜÛ\ÝÝÛÛÈˆ	‰ˆ\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™Û™HŠHÂˆÛÛœÝÙ\™\“X™[H\œÙYš][KœÙ\™\—ÛX™[ÏÈˆŽÂˆÛÛœÝÛÛÈH\œÙYš][KÛÛÈÏÈ×NÂˆžHÂˆ\Ë™[Z]
›XÜÝÛÛ×Û\ÝY‹ÂˆÙ\™\“X™[ˆÛÛÂˆJNÂˆHØ]Ú
\œŠHÂˆÙÙÙ\—ÙY˜][‹™\œ›ÜŠ‘\œ›Üˆ[Z][™ÈXÜÝÛÛ×Û\ÝY‹\œ‹\œÙYš][JNÂˆBˆ™]\›ŽÂˆBˆYˆ
\œÙYš][K\HOOH›Y\ÜØYÙHŠHÂˆÛÛœÝ™]š[Ý\Ò][RYH\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K˜YYˆ\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™Û™HˆÈ\œÙYœ™]š[Ý\×Ú][WÚYˆ[ÂˆÛÛœÝ][HH™X[[YSY\ÜØYÙR][TØÚ[XKœ\œÙJÂˆ][RYˆ\œÙYš][KšYˆ™]š[Ý\Ò][RYˆ\Nˆ\œÙYš][K\Kˆ›ÛNˆ\œÙYš][Kœ›ÛKˆÛÛ[ˆ›Ü›X[^™T™X[[YSY\ÜØYÙPÛÛ[
\œÙYš][Kœ›ÛK\œÙYš][K˜ÛÛ[
KˆÝ]\Îˆ\œÙYš][KœÝ]\ÂˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹][JNÂˆ™]\›ŽÂˆBˆYˆ
\œÙYš][K\HOOH›XÜØ\›Ý˜[Ü™\]Y\Ýˆ	‰ˆ\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™Û™HŠHÂˆÛÛœÝ][HH\œÙYš][NÂˆÛÛœÝXÜ\›Ý˜[™\]Y\ÝH™X[[YSXÜØ[\›Ý˜[™\]Y\Ý][Kœ\œÙJÂˆ][RYˆ][KšYˆ\Nˆ][K\KˆÙ\™\“X™[ˆ][KœÙ\™\—ÛX™[ˆ˜[YNˆ][K›˜[YKˆ\™Ý[Y[Îˆ”ÓÓ‹œ\œÙJ][K˜\™Ý[Y[ÈžßHŠKˆ\›Ý™Yˆ][K˜\›Ý™YˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹XÜ\›Ý˜[™\]Y\Ý
NÂˆ\Ë™[Z]
›XÜØ\›Ý˜[Ü™\]Y\Ý‹XÜ\›Ý˜[™\]Y\Ý
NÂˆ™]\›ŽÂˆBˆYˆ
\œÙYš][K\HOOH›XÜÝÛÛØØ[ˆ\œÙYš][K\HOOH›XÜØØ[ŠHÂˆÛÛœÝÝ]\ÈH\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™Û™HˆÈ˜ÛÛ\]Yˆˆš[—Ü›ÙÜ™\ÜÈŽÂˆÛÛœÝXÜØ[H™X[[YSXÜØ[][Kœ\œÙJÂˆ][RYˆ\œÙYš][KšYˆ\Nˆ\œÙYš][K\KˆÝ]\Ëˆ\™Ý[Y[Îˆ\œÙYš][K˜\™Ý[Y[Ëˆ˜[YNˆ\œÙYš][K›˜[YKˆÝ]]ˆ\œÙYš][K›Ý]]ˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹XÜØ[
NÂˆYˆ
\œÙY\HOOH˜ÛÛ™\œØ][Û‹š][K™Û™HŠHÂˆ\Ë™[Z]
›XÜÝÛÛØØ[ØÛÛ\]Y‹XÜØ[
NÂˆBˆ™]\›ŽÂˆBˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK›XÜØØ[š[—Ü›ÙÜ™\ÜÈŠHÂˆÛÛœÝ][HH\œÙYÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][Kœ™]šY]™H‹ˆ][WÚYˆ][Kš][WÚYˆJNÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH›XÜÛ\ÝÝÛÛËš[—Ü›ÙÜ™\ÜÈŠHÂˆÛÛœÝ][HH\œÙYÂˆYˆ
][Kš][WÚY
HÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][Kœ™]šY]™H‹ˆ][WÚYˆ][Kš][WÚYˆJNÂˆBˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ú][K™Û™Hˆ\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ú][K˜YYŠHÂˆÛÛœÝ][HH\œÙYš][NÂˆYˆ
][K\HOOH™[˜Ý[Û—ØØ[ˆ	‰ˆ][KœÝ]\ÈOOH˜ÛÛ\]YŠHÂˆÛÛœÝÛÛØ[H™X[[YUÛÛØ[][Kœ\œÙJÂˆ][RYˆ][KšYˆ\Nˆ][K\KˆÝ]\Îˆš[—Ü›ÙÜ™\ÜÈ‹ˆËÈÙHÙ]]È[—Ü›ÙÜ™\ÜÈ›ÜˆHRH\È]Ú[Û›H™HÛÛ\]YÚ]HÝ]]ˆ\™Ý[Y[Îˆ][K˜\™Ý[Y[Ëˆ˜[YNˆ][K›˜[YKˆÝ]]ˆ[ˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹ÛÛØ[
NÂˆ\Ë™[Z]
™[˜Ý[Û—ØØ[‹ÂˆYˆ][KšYˆ\Nˆ™[˜Ý[Û—ØØ[‹ˆØ[Yˆ][K˜Ø[ÚYÏÈˆ‹ˆ\™Ý[Y[Îˆ][K˜\™Ý[Y[ÈÏÈˆ‹ˆ˜[YNˆ][K›˜[YHÏÈˆ‹ˆ™\ÜÛœÙRYˆ\œÙYœ™\ÜÛœÙWÚYˆJNÂˆ™]\›ŽÂˆBˆYˆ
][K\HOOH›XÜÝÛÛØØ[ˆ][K\HOOH›XÜØØ[ŠHÂˆÛÛœÝXÜØ[H™X[[YSXÜØ[][Kœ\œÙJÂˆ][RYˆ][KšYˆ\Nˆ][K\KˆÝ]\Îˆ\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ú][K™Û™HˆÈ˜ÛÛ\]Yˆˆš[—Ü›ÙÜ™\ÜÈ‹ˆËÈÙHÙ]]È[—Ü›ÙÜ™\ÜÈ›ÜˆHRH\È]Ú[Û›H™HÛÛ\]YÚ]HÝ]]ˆ\™Ý[Y[Îˆ][K˜\™Ý[Y[Ëˆ˜[YNˆ][K›˜[YKˆÝ]]ˆ][K›Ý]]ˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹XÜØ[
NÂˆ™]\›ŽÂˆBˆYˆ
][K\HOOH›Y\ÜØYÙHŠHÂˆÛÛœÝ™X[[YR][HH™X[[YSY\ÜØYÙR][TØÚ[XKœ\œÙJÂˆ][RYˆ\œÙYš][KšYˆ\Nˆ\œÙYš][K\Kˆ›ÛNˆ\œÙYš][Kœ›ÛKˆÛÛ[ˆ›Ü›X[^™T™X[[YSY\ÜØYÙPÛÛ[
\œÙYš][Kœ›ÛK\œÙYš][K˜ÛÛ[
KˆÝ]\Îˆ\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ú][K™Û™HˆÈ][KœÝ]\ÈÏÈ˜ÛÛ\]Yˆˆ][KœÝ]\ÈÏÈš[—Ü›ÙÜ™\ÜÈ‚ˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹™X[[YR][JNÂˆ™]\›ŽÂˆBˆBˆBˆÛÛ‘\œ›ÜŠ\œ›ÜLJHÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ\œ›ÜLBˆJNÂˆBˆÛÛ“Ü[Š
HÂˆ\Ë™[Z]
˜ÛÛ›™XÝYŠNÂˆBˆÛÛÛÜÙJ
HÂˆ\Ë™[Z]
™\ØÛÛ›™XÝYŠNÂˆBˆ™\]Y\Ý™\ÜÛœÙJ™\ÜÛœÙJHÂˆ\ËœÙ[™]™[
Âˆ\Nˆœ™\ÜÛœÙK˜Ü™X]H‹ˆ‹‹œ™\ÜÛœÙHÈÈ™\ÜÛœÙHHˆßBˆJNÂˆBˆÊŠ‚ˆ
ˆÙ[™HY\ÜØYÙHÈH™X[[YHTKˆ\ÈÚ[Ü™X]HH™]È][H[ˆHÛÛ™\œØ][Ûˆ[™ˆ
ˆšYÙÙ\ˆH™\ÜÛœÙK‚ˆ
‚ˆ
ˆ\˜[HY\ÜØYÙHHHY\ÜØYÙHÈÙ[™‚ˆ
ˆ\˜[HÝ\‘]™[]HHY][Û˜[]™[]HÈÙ[™‚ˆ
‹ÂˆÙ[™Y\ÜØYÙJY\ÜØYÙKÝ\‘]™[]KÈšYÙÙ\”™\ÜÛœÙHHYHHHßJHÂˆÛÛœÝÛÛ[H\[ÙˆY\ÜØYÙHOOHœÝš[™ÈˆÈÂˆÂˆ\Nˆš[œ]Ý^‹ˆ^ˆY\ÜØYÙBˆBˆHˆY\ÜØYÙK˜ÛÛ[›X\

ÛÛ[ŠHOˆÂˆYˆ
ÛÛ[‹\HOOHš[œ]Ú[XYÙHŠHÂˆ™]\›ˆÂˆ\Nˆš[œ]Ú[XYÙH‹ˆ[XYÙWÝ\›ˆÛÛ[‹š[XYÙKˆ‹‹˜ÛÛ[‹œ›ÝšY\‘]HÏÈßBˆNÂˆBˆ™]\›ˆÛÛ[ŽÂˆJNÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][K˜Ü™X]H‹ˆ][NˆÂˆ\Nˆ›Y\ÜØYÙH‹ˆ›ÛNˆ\Ù\ˆ‹ˆÛÛ[ˆKˆ‹‹›Ý\‘]™[]BˆJNÂˆYˆ
šYÙÙ\”™\ÜÛœÙJHÂˆ\Ëœ™\]Y\Ý™\ÜÛœÙJ
NÂˆBˆBˆY[XYÙJ[XYÙKÈšYÙÙ\”™\ÜÛœÙHHYHHHßJHÂˆ\ËœÙ[™Y\ÜØYÙJÂˆ\Nˆ›Y\ÜØYÙH‹ˆ›ÛNˆ\Ù\ˆ‹ˆÛÛ[ˆÞÈ\Nˆš[œ]Ú[XYÙH‹[XYÙHWBˆKßKÈšYÙÙ\”™\ÜÛœÙHJNÂˆBˆÙÙ]Y\™ÙYÙ\ÜÚ[ÛÛÛ™šYÊÛÛ™šYÌŠHÂˆÛÛœÝ™]ÐÛÛ™šYÈHÓ™]ÔÙ\ÜÚ[ÛÛÛ™šYÊÛÛ™šYÌŠNÂˆÛÛœÝ›Ú\ÙT™YXÝ[Û“Ý™\œšYHH™]ÐÛÛ™šYË˜]Y[ÏËš[œ]Ë››Ú\ÙT™YXÝ[ÛŽÂˆÛÛœÝ˜[œØÜš\[Û“Ý™\œšYHH™]ÐÛÛ™šYË˜]Y[ÏËš[œ]Ë˜[œØÜš\[ÛŽÂˆÛÛœÝ\›‘]XÝ[Û“Ý™\œšYHHÓÜ[RT™X[[YP˜\ÙK˜Z[\›‘]XÝ[ÛÛÛ™šYÊ™]ÐÛÛ™šYË˜]Y[ÏËš[œ]Ë\›‘]XÝ[ÛŠNÂˆÛÛœÝÙ\ÜÚ[Û‘]HHÂˆ\Nˆœ™X[[YH‹ˆ[œÝXÝ[ÛœÎˆ™]ÐÛÛ™šYËš[œÝXÝ[ÛœËˆ[Ù[ˆ™]ÐÛÛ™šYË›[Ù[ÏÈ×Üš]˜]QÙ]
\ËÛ[Ù[
KˆÝ]]Û[Ù[]Y\Îˆ™]ÐÛÛ™šYË›Ý]][Ù[]Y\ÈÏÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË›Ý]][Ù[]Y\Ëˆ]Y[ÎˆÂˆ[œ]ˆÂˆ›Ü›X]ˆ™]ÐÛÛ™šYË˜]Y[ÏËš[œ]Ë™›Ü›X]ÏÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏËš[œ]Ë™›Ü›X]ˆ›Ú\ÙWÜ™YXÝ[ÛŽˆ›Ú\ÙT™YXÝ[Û“Ý™\œšYHOOH›ÚYÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏËš[œ]Ë››Ú\ÙT™YXÝ[Ûˆˆ›Ú\ÙT™YXÝ[Û“Ý™\œšYKˆ˜[œØÜš\[ÛŽˆ˜[œØÜš\[Û“Ý™\œšYHOOH›ÚYÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏËš[œ]Ë˜[œØÜš\[Ûˆˆ˜[œØÜš\[Û“Ý™\œšYKˆ\›—Ù]XÝ[ÛŽˆ\›‘]XÝ[Û“Ý™\œšYHOOH›ÚYÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏËš[œ]Ë\›‘]XÝ[Ûˆˆ\›‘]XÝ[Û“Ý™\œšYBˆKˆÝ]]ˆÂˆ›Ü›X]ˆ™]ÐÛÛ™šYË˜]Y[ÏË›Ý]]Ë™›Ü›X]ÏÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏË›Ý]]Ë™›Ü›X]ˆ›ÚXÙNˆ™]ÐÛÛ™šYË˜]Y[ÏË›Ý]]Ë›ÚXÙHÏÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏË›Ý]]Ë›ÚXÙKˆÜYYˆ™]ÐÛÛ™šYË˜]Y[ÏË›Ý]]ËœÜYYÏÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QË˜]Y[ÏË›Ý]]ËœÜYYˆBˆKˆÛÛØÚÚXÙNˆ™]ÐÛÛ™šYËÛÛÚÚXÙHÏÈQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QËÛÛÚÚXÙKˆ‹‹\[Ùˆ™]ÐÛÛ™šYËœ\˜[[ÛÛØ[ÈOOH[™Yš[™YˆÈßHˆÈ\˜[[ÝÛÛØØ[Îˆ™]ÐÛÛ™šYËœ\˜[[ÛÛØ[ÈKˆ‹‹›™]ÐÛÛ™šYËœ™X\ÛÛš[™ÈÈÈ™X\ÛÛš[™Îˆ™]ÐÛÛ™šYËœ™X\ÛÛš[™ÈHˆßKˆËÈÙHÛ‰ÝÙ]˜XÚ[™È\™HÈXZÙHÝ\™H]ÙHÛ‰ÝžHÈÝ™\œšYH]Ûˆ]™\žBˆËÈÙ\ÜÚ[Û‹\]H\È]ZYÚXYÈ\œ›ÜœÂˆ‹‹›™]ÐÛÛ™šYËœ›ÝšY\‘]HÏÈßBˆNÂˆYˆ
™]ÐÛÛ™šYËœ›Û\
HÂˆÙ\ÜÚ[Û‘]Kœ›Û\HÂˆYˆ™]ÐÛÛ™šYËœ›Û\œ›Û\Yˆ™\œÚ[ÛŽˆ™]ÐÛÛ™šYËœ›Û\™\œÚ[Û‹ˆ˜\šXX›\Îˆ™]ÐÛÛ™šYËœ›Û\˜\šXX›\ÂˆNÂˆBˆYˆ
™]ÐÛÛ™šYËÛÛÈ	‰ˆ™]ÐÛÛ™šYËÛÛË›[™Ýˆ
HÂˆÙ\ÜÚ[Û‘]KÛÛÈH™]ÐÛÛ™šYËÛÛË›X\

ÛÛŠHOˆÂˆÛÛœÝXÚÑYš[™YH
ØšŠHOˆØš™XÝ™œ›ÛQ[šY\ÊØš™XÝ™[šY\ÊØšŠK™š[\Š
Ë˜[YWJHOˆ\[Ùˆ˜[YHOOH[™Yš[™YŠJNÂˆYˆ
ÛÛ‹\HOOH›XÜŠHÂˆ™]\›ˆXÚÑYš[™Y
Âˆ\Nˆ›XÜ‹ˆÙ\™\—ÛX™[ˆÛÛ‹œÙ\™\—ÛX™[ˆÙ\™\—Ý\›ˆÛÛ‹œÙ\™\—Ý\›ˆÙ\™\—Ù\ØÜš\[ÛŽˆÛÛ‹œÙ\™\—Ù\ØÜš\[Û‹ˆÛÛ›™XÝÜ—ÚYˆÛÛ‹˜ÛÛ›™XÝÜ—ÚYˆ]]Üš^˜][ÛŽˆÛÛ‹˜]]Üš^˜][Û‹ˆXY\œÎˆÛÛ‹šXY\œËˆ[ÝÙYÝÛÛÎˆÛÛ‹˜[ÝÙYÝÛÛËˆ™\]Z\™WØ\›Ý˜[ˆ\[ÙˆÛÛ‹œ™\]Z\™WØ\›Ý˜[OOH[™Yš[™YˆÈ›ÚYˆ›Ü›X[^™RÜÝYXÜ™\]Z\™P\›Ý˜[
ÛÛ‹œ™\]Z\™WØ\›Ý˜[
BˆJNÂˆBˆ™]\›ˆXÚÑYš[™Y
Âˆ\NˆÛÛ‹\Kˆ˜[YNˆÛÛ‹›˜[YKˆ\ØÜš\[ÛŽˆÛÛ‹™\ØÜš\[Û‹ˆ\˜[Y]\œÎˆÛÛ‹œ\˜[Y]\œÂˆJNÂˆJNÂˆBˆ™]\›ˆÙ\ÜÚ[Û‘]NÂˆBˆÊŠ‚ˆ
ˆZ[H^[ØYØš™XÝ^XÝYžHH™X[[YHTHÚ[ˆÜ™X][™ÈÜˆ\][™ÈHÙ\ÜÚ[Û‹‚ˆ
‚ˆ
ˆH[\ˆÙ[˜[\Ù\ÈHÛÛ™\œÚ[Ûˆœ›ÛHØ[Y[Ø\ÙH[[YHÛÛ™šYÈÈHÛ˜ZÙWØØ\ÙH^[ØYˆ
ˆ™\]Z\™YžHH™X[[YHTHÛÈ˜[œÜÜÈ]™YYHÛ™K[Ù™ˆ^[ØY
›Üˆ^[\HÒTØ[ˆ
ˆXØÙ\[˜ÙJHØ[ˆ™]\ÙHHØ[YHÙÚXÈÚ]Ý]\XØ][™Èš]˜]HÝ]K‚ˆ
‚ˆ
ˆ\˜[HÛÛ™šYÈHHÙ\ÜÚ[ÛˆÛÛ™šYÈÈY\™ÙHÚ]Y˜][Ë‚ˆ
‹ÂˆZ[Ù\ÜÚ[Û”^[ØY
ÛÛ™šYÌŠHÂˆ™]\›ˆ\Ë—ÙÙ]Y\™ÙYÙ\ÜÚ[ÛÛÛ™šYÊÛÛ™šYÌŠNÂˆBˆÝ]XÈZ[\›‘]XÝ[ÛÛÛ™šYÊÊHÂˆYˆ
\[ÙˆÈOOH[™Yš[™YŠHÂˆ™]\›ˆ›ÚYÂˆBˆYˆ
ÈOOH[
HÂˆ™]\›ˆ[ÂˆBˆÛÛœÝÈ\KÜ™X]T™\ÜÛœÙKÜ™X]WÜ™\ÜÛœÙKXYÙ\›™\ÜË[\œ\™\ÜÛœÙK[\œ\Ü™\ÜÛœÙK™Yš^Y[™Ó\Ë™Yš^ÜY[™×Û\ËÚ[[˜ÙQ\˜][Û“\ËÚ[[˜ÙWÙ\˜][Û—Û\Ë™\ÚÛYU[Y[Ý]\ËYWÝ[Y[Ý]Û\Ë[Ù[™\œÚ[Û‹[Ù[Ý™\œÚ[Û‹‹‹œ™\ÝHHÎÂˆÛÛœÝÛÛ™šYÌˆHÂˆ\KˆÜ™X]WÜ™\ÜÛœÙNˆÜ™X]T™\ÜÛœÙHÏÈÜ™X]WÜ™\ÜÛœÙKˆXYÙ\›™\ÜËˆ[\œ\Ü™\ÜÛœÙNˆ[\œ\™\ÜÛœÙHÏÈ[\œ\Ü™\ÜÛœÙKˆ™Yš^ÜY[™×Û\Îˆ™Yš^Y[™Ó\ÈÏÈ™Yš^ÜY[™×Û\ËˆÚ[[˜ÙWÙ\˜][Û—Û\ÎˆÚ[[˜ÙQ\˜][Û“\ÈÏÈÚ[[˜ÙWÙ\˜][Û—Û\ËˆYWÝ[Y[Ý]Û\ÎˆYU[Y[Ý]\ÈÏÈYWÝ[Y[Ý]Û\Ëˆ[Ù[Ý™\œÚ[ÛŽˆ[Ù[™\œÚ[ÛˆÏÈ[Ù[Ý™\œÚ[Û‹ˆ™\ÚÛˆ‹‹œ™\ÝˆNÂˆØš™XÝšÙ^\ÊÛÛ™šYÌŠK™›Ü‘XXÚ

Ù^JHOˆÂˆYˆ
ÛÛ™šYÌ–ÚÙ^WHOOH›ÚY
Bˆ[]HÛÛ™šYÌ–ÚÙ^WNÂˆJNÂˆ™]\›ˆØš™XÝšÙ^\ÊÛÛ™šYÌŠK›[™ÝˆÈÛÛ™šYÌˆˆ›ÚYÂˆBˆÊŠ‚ˆ
ˆÙ]ÈH[\›˜[˜XÚ[™ÈÛÛ™šYËˆ\È\È\ÙYÈ˜XÚÈH˜XÚ[™ÈÛÛ™šYÈ]\È™Y[ˆÙ]ˆ
ˆ\š[™ÈHÙ\ÜÚ[Û‹˜Ü™X]H]™[‚ˆ
‹ÂˆÙ]Ý˜XÚ[™ÐÛÛ™šYÊ˜XÚ[™ÐÛÛ™šYÊHÂˆ×Üš]˜]TÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYË˜XÚ[™ÐÛÛ™šYÊNÂˆBˆÊŠ‚ˆ
ˆÙ]ÈH˜XÚ[™ÈÛÛ™šYÈ›ÜˆHÙ\ÜÚ[Û‹ˆ\ÈÚ[Ù[™H˜XÚ[™ÈÛÛ™šYÈÈH™X[[YHTK‚ˆ
‚ˆ
ˆ\˜[H˜XÚ[™ÐÛÛ™šYÈHH˜XÚ[™ÈÛÛ™šYÈÈÙ]ˆÙHÛ‰ÝÝ\Ü	Ø]]ÉÈ\™H\ÈHÑÈÚ[[Ø^\ÈÛÛ™šYÝ\™HHÛÜšÙ›ÝÈ˜[YH[›\ÜÈ]^\ÝÂˆ
‹ÂˆÝ\]U˜XÚ[™ÐÛÛ™šYÊ˜XÚ[™ÐÛÛ™šYÊHÂˆYˆ
\[Ùˆ×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊHOOH[™Yš[™YŠHÂˆ×Üš]˜]TÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYË[
NÂˆBˆYˆ
˜XÚ[™ÐÛÛ™šYÈOOH˜]]ÈŠHÂˆ\ËœÙ[™]™[
Âˆ\NˆœÙ\ÜÚ[Û‹\]H‹ˆÙ\ÜÚ[ÛŽˆÂˆ\Nˆœ™X[[YH‹ˆ˜XÚ[™Îˆ˜]]È‚ˆBˆJNÂˆ™]\›ŽÂˆBˆYˆ
×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊHOOH[	‰ˆ\[Ùˆ×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊHOOHœÝš[™Èˆ	‰ˆ\[Ùˆ˜XÚ[™ÐÛÛ™šYÈOOHœÝš[™ÈŠHÂˆÙÙÙ\—ÙY˜][‹Ø\›Š•˜XÚ[™ÈÛÛ™šYÈ\È[™XYHÙ]ÚÚ\[™ÈÙ][™È]YØZ[‹ˆ\ÈZÙ[H\[œÈÚ[ˆ[ÝH[™XYHÙ]H˜XÚ[™ÈÛÛ™šYÈÛˆÙ\ÜÚ[ÛˆÜ™X][Û‹ˆŠNÂˆ™]\›ŽÂˆBˆYˆ
˜XÚ[™ÐÛÛ™šYÈOOH[
HÂˆÙÙÙ\—ÙY˜][‹™XYÊ‘\ØX›[™È˜XÚ[™È›Üˆ\ÈÙ\ÜÚ[Û‹ˆ]Ø[››Ý™H\›™YÛˆ›Üˆ\ÈÙ\ÜÚ[Ûˆœ›ÛH\ÈÚ[Û‹ˆŠNÂˆ\ËœÙ[™]™[
Âˆ\NˆœÙ\ÜÚ[Û‹\]H‹ˆÙ\ÜÚ[ÛŽˆÂˆ\Nˆœ™X[[YH‹ˆ˜XÚ[™Îˆ[ˆBˆJNÂˆ™]\›ŽÂˆBˆYˆ
×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊHOOH[\[Ùˆ×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊHOOHœÝš[™ÈŠHÂˆ\ËœÙ[™]™[
Âˆ\NˆœÙ\ÜÚ[Û‹\]H‹ˆÙ\ÜÚ[ÛŽˆÂˆ\Nˆœ™X[[YH‹ˆ˜XÚ[™Îˆ˜XÚ[™ÐÛÛ™šYÂˆBˆJNÂˆ™]\›ŽÂˆBˆYˆ
˜XÚ[™ÐÛÛ™šYÏË™Ü›Ý\ÚYOOH×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊOË™Ü›Ý\ÚY˜XÚ[™ÐÛÛ™šYÏË›Y]Y]HOOH×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊOË›Y]Y]H˜XÚ[™ÐÛÛ™šYÏËÛÜšÙ›Ý×Û˜[YHOOH×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊOËÛÜšÙ›Ý×Û˜[YJHÂˆÙÙÙ\—ÙY˜][‹Ø\›Š“Z\ÛX]Ú[ˆ˜XÚ[™ÈÛÛ™šYËˆYÛ›Üš[™ÈH™]È˜XÚ[™ÈÛÛ™šYËˆ\ÈZÙ[H\[œÈÚ[ˆ[ÝH[™XYHÙ]H˜XÚ[™ÈÛÛ™šYÈÛˆÙ\ÜÚ[ÛˆÜ™X][Û‹ˆÝ\œ™[˜XÚ[™ÈÛÛ™šYÎˆ	\Ë™]È˜XÚ[™ÈÛÛ™šYÎˆ	\È‹”ÓÓ‹œÝš[™ÚYžJ×Üš]˜]QÙ]
\ËÝ˜XÚ[™ÐÛÛ™šYÊJK”ÓÓ‹œÝš[™ÚYžJ˜XÚ[™ÐÛÛ™šYÊJNÂˆ™]\›ŽÂˆBˆ\ËœÙ[™]™[
Âˆ\NˆœÙ\ÜÚ[Û‹\]H‹ˆÙ\ÜÚ[ÛŽˆÂˆ\Nˆœ™X[[YH‹ˆ˜XÚ[™Îˆ˜XÚ[™ÐÛÛ™šYÂˆBˆJNÂˆBˆÊŠ‚ˆ
ˆ\]\ÈHÙ\ÜÚ[ÛˆÛÛ™šYËˆ\ÈÚ[Y\™ÙH]Ú]HÝ\œ™[Ù\ÜÚ[ÛˆÛÛ™šYÈÚ]HY˜][ˆ
ˆ˜[Y\È[™Ù[™]ÈH™X[[YHTK‚ˆ
‚ˆ
ˆ\˜[HÛÛ™šYÈHHÙ\ÜÚ[ÛˆÛÛ™šYÈÈ\]K‚ˆ
‹Âˆ\]TÙ\ÜÚ[ÛÛÛ™šYÊÛÛ™šYÌŠHÂˆÛÛœÝÙ\ÜÚ[Û‘]HH\Ë˜Z[Ù\ÜÚ[Û”^[ØY
ÛÛ™šYÌŠNÂˆ\ËœÙ[™]™[
Âˆ\NˆœÙ\ÜÚ[Û‹\]H‹ˆÙ\ÜÚ[ÛŽˆÙ\ÜÚ[Û‘]BˆJNÂˆBˆÊŠ‚ˆ
ˆÙ[™HÝ]]ÙˆH[˜Ý[ÛˆØ[ÈH™X[[YHTK‚ˆ
‚ˆ
ˆ\˜[HÛÛØ[HHÛÛØ[ÈÙ[™HÝ]]›Ü‹‚ˆ
ˆ\˜[HÝ]]HHÝ]]ÙˆH[˜Ý[ÛˆØ[‚ˆ
ˆ\˜[HÝ\™\ÜÛœÙHHÚ]\ˆÈÝ\H™]È™\ÜÛœÙHY\ˆÙ[™[™ÈHÝ]]‚ˆ
‹ÂˆÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[Ý]]Ý\™\ÜÛœÙHHYJHÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][K˜Ü™X]H‹ˆ][NˆÂˆ\Nˆ™[˜Ý[Û—ØØ[ÛÝ]]‹ˆÝ]]ˆØ[ÚYˆÛÛØ[˜Ø[YˆBˆJNÂˆžHÂˆÛÛœÝ][HH™X[[YUÛÛØ[][Kœ\œÙJÂˆ][RYˆÛÛØ[šYˆ™]š[Ý\Ò][RYˆÛÛØ[œ™]š[Ý\Ò][RYˆ\Nˆ™[˜Ý[Û—ØØ[‹ˆÝ]\Îˆ˜ÛÛ\]Y‹ˆ\™Ý[Y[ÎˆÛÛØ[˜\™Ý[Y[Ëˆ˜[YNˆÛÛØ[›˜[YKˆÝ]]ˆJNÂˆ\Ë™[Z]
š][WÝ\]H‹][JNÂˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][‹™\œ›ÜŠ‘\œ›Üˆ\œÚ[™ÈÛÛØ[][H‹\œ›ÜLKÛÛØ[
NÂˆBˆYˆ
Ý\™\ÜÛœÙJHÂˆ\Ëœ™\]Y\Ý™\ÜÛœÙJ
NÂˆBˆBˆÊŠ‚ˆ
ˆÙ[™[ˆ]Y[ÈY™™\ˆÈH™X[[YHTKˆYˆÈÛÛ[Z]ˆYHX\È\ÜÙYH]Y[ÈY™™\‚ˆ
ˆÚ[™HÛÛ[Z]Y[™H[Ù[Ú[Ý\›ØÙ\ÜÚ[™È]ˆ\È\È™XÙ\ÜØ\žHYˆ[ÝH]™Bˆ
ˆ\ØX›Y\›ˆ]XÝ[ÛˆÈ›ÚXÙHXÝ]š]H]XÝ[Ûˆ
Q
K‚ˆ
‚ˆ
ˆ\˜[H]Y[ÈHH]Y[ÈY™™\ˆÈÙ[™‚ˆ
ˆ\˜[HÜ[ÛœÈHHÜ[ÛœÈ›ÜˆH]Y[ÈY™™\‹‚ˆ
‹ÂˆÙ[™]Y[Ê]Y[ËÈÛÛ[Z]H˜[ÙHHHßJHÂˆ\ËœÙ[™]™[
Âˆ\Nˆš[œ]Ø]Y[×ØY™™\‹˜\[™‹ˆ]Y[Îˆ\œ˜^PY™™\•Ð˜\ÙM
]Y[ÊBˆJNÂˆYˆ
ÛÛ[Z]
HÂˆ\ËœÙ[™]™[
Âˆ\Nˆš[œ]Ø]Y[×ØY™™\‹˜ÛÛ[Z]‚ˆJNÂˆBˆBˆÊŠ‚ˆ
ˆ™\Ù]H\ÝÜžHÙˆHÛÛ™\œØ][Û‹ˆ\ÈÚ[Ü™X]HHY™ˆ™]ÙY[ˆHÛ[™™]È\ÝÜžBˆ
ˆ[™Ù[™H™XÙ\ÜØ\žH]™[ÈÈH™X[[YHTHÈ\]HH\ÝÜžK‚ˆ
‚ˆ
ˆ\˜[HÛ\ÝÜžHHHÛ\ÝÜžHÙˆHÛÛ™\œØ][Û‹‚ˆ
ˆ\˜[H™]Ò\ÝÜžHHH™]È\ÝÜžHÙˆHÛÛ™\œØ][Û‹‚ˆ
‹Âˆ™\Ù]\ÝÜžJÛ\ÝÜžK™]Ò\ÝÜžJHÂˆÛÛœÝÈ™[[Ý˜[ËY][ÛœË\]\ÈHHY™”™X[[YR\ÝÜžJÛ\ÝÜžK™]Ò\ÝÜžJNÂˆÛÛœÝ™[[Ý˜[YÈH™]ÈÙ]
™[[Ý˜[Ë›X\

][JHOˆ][Kš][RY
JNÂˆ›Üˆ
ÛÛœÝ\]HÙˆ\]\ÊHÂˆ™[[Ý˜[YË˜Y
\]Kš][RY
NÂˆBˆYˆ
™[[Ý˜[YËœÚ^™Hˆ
HÂˆ›Üˆ
ÛÛœÝ][RYÙˆ™[[Ý˜[YÊHÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][K™[]H‹ˆ][WÚYˆ][RYˆJNÂˆBˆBˆÛÛœÝY][ÛœÐ[™\]\ÈHË‹‹˜Y][ÛœË‹‹\]\×NÂˆ›Üˆ
ÛÛœÝY][ÛˆÙˆY][ÛœÐ[™\]\ÊHÂˆYˆ
Y][Û‹\HOOH›Y\ÜØYÙHŠHÂˆÛÛœÝ][Q[žHHÂˆ\Nˆ›Y\ÜØYÙH‹ˆ›ÛNˆY][Û‹œ›ÛKˆÛÛ[ˆY][Û‹˜ÛÛ[ˆYˆY][Û‹š][RYˆNÂˆYˆ
Y][Û‹œ›ÛHOOHœÞ\Ý[Hˆ	‰ˆY][Û‹œÝ]\ÊHÂˆ][Q[žKœÝ]\ÈHY][Û‹œÝ]\ÎÂˆBˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][K˜Ü™X]H‹ˆ][Nˆ][Q[žBˆJNÂˆH[ÙHYˆ
Y][Û‹\HOOH™[˜Ý[Û—ØØ[ŠHÂˆÙÙÙ\—ÙY˜][‹Ø\›Š‘[˜Ý[ÛˆØ[ÈØ[››Ý™HX[X[HYYÜˆ\]Y]H[ÛY[ˆYÛ›Üš[™ËˆŠNÂˆBˆBˆBˆÙ[™XÜ™\ÜÛœÙJ\›Ý˜[™\]Y\Ý\›Ý™Y™X\ÛÛŠHÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][K˜Ü™X]H‹ˆ™]š[Ý\×Ú][WÚYˆ\›Ý˜[™\]Y\Ýš][RYˆ][NˆÂˆ\Nˆ›XÜØ\›Ý˜[Ü™\ÜÛœÙH‹ˆ\›Ý˜[Ü™\]Y\ÝÚYˆ\›Ý˜[™\]Y\Ýš][RYˆ\›Ý™Nˆ\›Ý™Yˆ‹‹œ™X\ÛÛˆOOH›ÚYÈÈ™X\ÛÛˆHˆßBˆBˆJNÂˆBŸNÂ—Û[Ù[H™]ÈÙXZÓX\

NÂ—Ø\RÙ^HH™]ÈÙXZÓX\

NÂ—Ý˜XÚ[™ÐÛÛ™šYÈH™]ÈÙXZÓX\

NÂ—Ü˜]ÔÙ\ÜÚ[ÛÛÛ™šYÈH™]ÈÙXZÓX\

NÂ˜\ˆÜ[RT™X[[YP˜\ÙHHÓÜ[RT™X[[YP˜\ÙNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÜ[˜ZT™X[[YUÙX”Ë›ZœÂš[š]ÜÚ[\×Øœ›ÝÜÙ\Š
NÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\‹›ZœÂ˜\ˆÛÛ™ÛÚ[™Ô™\ÜÛœÙKÜ™\ÜÛœÙPÛÛ›ÛÜ™\ÜÛœÙPÜ™X]T™\]Y\Ý™\œÚ[Û‹Ü™\ÜÛœÙPÜ™X]Q]™[ÛÝ[\‹Ü[™[™Ô™\]Y\Ý™\œÚ[ÛœËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœËÜ[™[™Ô™\ÜÛœÙPÜ™X]KÝØZ]\œËÙÙ[™\˜][Û‹Ô™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë™\Ù\™T™\ÜÛœÙPÜ™X]T™\]Y\ÝÙ›‹Ý\™\ÜÛœÙPÜ™X]WÙ›‹\Ü]Ú™\ÜÛœÙPÜ™X]WÙ›‹ØZ]›Ü”™\ÜÛœÙPÜ™X]TÛÝÙ›‹žT™\\™T™\ÜÛœÙPÜ™X]WÙ›‹ÛX\”[™[™Ô™\ÜÛœÙPÜ™X]WÙ›‹ÛX\XØÙ\Y™\ÜÛœÙPÜ™X]WÙ›‹™\ÝÜ™PÛÝ™\™Y]]Ô™\]Y\Ý™\œÚ[Ûœ×Ù›‹™^[™[™Ô™\]Y\Ý™\œÚ[Û—Ù›‹]]Ô™\ÜÛœÙPÜ™X]U\™Ù]™\œÚ[Û—Ù›‹™^™\ÜÛœÙPÜ™X]Q]™[YÙ›‹\Ô™\ÜÛœÙPÜ™X]SZÙQ\œ›Ü—Ù›‹›ÝYžUØZ]\œ×Ù›‹ØZ]›ÜÚ[™ÙWÙ›ŽÂ˜\ˆ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ˆHÛ\ÜÈÂˆÛÛœÝXÝÜŠÙ[™]™[›ÝËÛ‘\œ›ÜŠHÂˆ×Üš]˜]PY
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ÊNÂˆ×ÜX›XÑšY[
\ËœÙ[™]™[›ÝÈŠNÂˆ×ÜX›XÑšY[
\Ë›Û‘\œ›ÜˆŠNÂˆ×Üš]˜]PY
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆ×Üš]˜]PY
\ËÜ™\ÜÛœÙPÛÛ›Û™œ™YHŠNÂˆ×Üš]˜]PY
\ËÜ™\ÜÛœÙPÜ™X]T™\]Y\Ý™\œÚ[Û‹
NÂˆ×Üš]˜]PY
\ËÜ™\ÜÛœÙPÜ™X]Q]™[ÛÝ[\‹
NÂˆ×Üš]˜]PY
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœËÊˆ×ÔT‘W×È
‹È™]ÈÙ]

JNÂˆ×Üš]˜]PY
\ËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœËÊˆ×ÔT‘W×È
‹È™]ÈÙ]

JNÂˆ×Üš]˜]PY
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]K[
NÂˆ×Üš]˜]PY
\ËÝØZ]\œËÊˆ×ÔT‘W×È
‹È™]ÈÙ]

JNÂˆ×Üš]˜]PY
\ËÙÙ[™\˜][Û‹
NÂˆ\ËœÙ[™]™[›ÝÈHÙ[™]™[›ÝÎÂˆ\Ë›Û‘\œ›ÜˆHÛ‘\œ›ÜŽÂˆBˆÙ]Û™ÛÚ[™Ô™\ÜÛœÙJ
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙJNÂˆBˆÙ]™\ÜÛœÙPÛÛ›Û

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û
NÂˆBˆÙ][™[™Ô™\ÜÛœÙPÜ™X]Q]™[Y

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JOË™]™[YÏÈ[ÂˆBˆ™\]Y\Ý™\ÜÛœÙPÜ™X]J]™[ÈX[X[H˜[ÙHHHßJHÂˆÛÛœÝ™\]Y\Ý™\œÚ[ÛˆH×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë™\Ù\™T™\ÜÛœÙPÜ™X]T™\]Y\ÝÙ›ŠK˜Ø[
\ËX[X[
NÂˆÛÛœÝÙ[™\˜][ÛˆH×Üš]˜]QÙ]
\ËÙÙ[™\˜][ÛŠNÂˆÛÛœÝ[™[™ÈH×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËžT™\\™T™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\ËÂˆ]™[ˆX[X[ˆ™\]Y\Ý™\œÚ[Û‚ˆJNÂˆYˆ
[™[™ÊHÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë\Ü]Ú™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\Ë[™[™ËÙ[™\˜][ÛŠNÂˆ™]\›ŽÂˆBˆ›ÚY×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËÝ\™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\ËÂˆ]™[ˆX[X[ˆ™\]Y\Ý™\œÚ[Û‹ˆÙ[™\˜][Û‚ˆJNÂˆBˆX\šÔ™\ÜÛœÙPÜ™X]Y

HÂˆ×Üš]˜]TÙ]
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙKYJNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËÛX\XØÙ\Y™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û™œ™YHŠNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë›ÝYžUØZ]\œ×Ù›ŠK˜Ø[
\ÊNÂˆBˆX\šÔ™\ÜÛœÙQÛ™J
HÂˆ×Üš]˜]TÙ]
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËÛX\XØÙ\Y™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û™œ™YHŠNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë›ÝYžUØZ]\œ×Ù›ŠK˜Ø[
\ÊNÂˆBˆ™[X\ÙUØZ]\œÊ
HÂˆ×Üš]˜]TÙ]
\ËÙÙ[™\˜][Û‹×Üš]˜]QÙ]
\ËÙÙ[™\˜][ÛŠH
ÈJNÂˆ×Üš]˜]TÙ]
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊK˜ÛX\Š
NÂˆ×Üš]˜]QÙ]
\ËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœÊK˜ÛX\Š
NÂˆ×Üš]˜]TÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]K[
NÂˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û™œ™YHŠNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë›ÝYžUØZ]\œ×Ù›ŠK˜Ø[
\ÊNÂˆBˆ™YÚ[Ø[˜Ù[™\ÜÛœÙJ
HÂˆYˆ
W×Üš]˜]QÙ]
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙJH×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û
HOOH˜Ø[˜Ù[Ü™\]Y\ÝYŠHÂˆ™]\›ˆ˜[ÙNÂˆBˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û˜Ø[˜Ù[Ü™\]Y\ÝYŠNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë›ÝYžUØZ]\œ×Ù›ŠK˜Ø[
\ÊNÂˆ™]\›ˆYNÂˆBˆ[™T™\ÜÛœÙPÜ™X]Q\œ›ÜŠ]™[
HÂˆÛÛœÝ\œ›ÜLHH]™[™\œ›ÜŽÂˆÛÛœÝ[šÙY]™[YH\[Ùˆ\œ›ÜLOË™]™[ÚYOOHœÝš[™ÈˆÈ\œ›ÜLK™]™[ÚYˆ›ÚYÂˆYˆ
[šÙY]™[Y
HÂˆ™]\›ˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËÛX\”[™[™Ô™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\Ë[šÙY]™[Y
NÂˆBˆYˆ
×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë\Ô™\ÜÛœÙPÜ™X]SZÙQ\œ›Ü—Ù›ŠK˜Ø[
\Ë\œ›ÜLJJHÂˆ™]\›ˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËÛX\”[™[™Ô™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\ÊNÂˆBˆ™]\›ˆ˜[ÙNÂˆBŸNÂ—ÛÛ™ÛÚ[™Ô™\ÜÛœÙHH™]ÈÙXZÓX\

NÂ—Ü™\ÜÛœÙPÛÛ›ÛH™]ÈÙXZÓX\

NÂ—Ü™\ÜÛœÙPÜ™X]T™\]Y\Ý™\œÚ[ÛˆH™]ÈÙXZÓX\

NÂ—Ü™\ÜÛœÙPÜ™X]Q]™[ÛÝ[\ˆH™]ÈÙXZÓX\

NÂ—Ü[™[™Ô™\]Y\Ý™\œÚ[ÛœÈH™]ÈÙXZÓX\

NÂ—ÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœÈH™]ÈÙXZÓX\

NÂ—Ü[™[™Ô™\ÜÛœÙPÜ™X]HH™]ÈÙXZÓX\

NÂ—ÝØZ]\œÈH™]ÈÙXZÓX\

NÂ—ÙÙ[™\˜][ÛˆH™]ÈÙXZÓX\

NÂ—Ô™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ÈH™]ÈÙXZÔÙ]

NÂœ™\Ù\™T™\ÜÛœÙPÜ™X]T™\]Y\ÝÙ›ˆH[˜Ý[ÛŠX[X[
HÂˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÜ™X]T™\]Y\Ý™\œÚ[Û‹×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]T™\]Y\Ý™\œÚ[ÛŠH
ÈJNÂˆÛÛœÝ™\]Y\Ý™\œÚ[ÛˆH×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]T™\]Y\Ý™\œÚ[ÛŠNÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊK˜Y
™\]Y\Ý™\œÚ[ÛŠNÂˆYˆ
X[X[
HÂˆ×Üš]˜]QÙ]
\ËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœÊK˜Y
™\]Y\Ý™\œÚ[ÛŠNÂˆBˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë›ÝYžUØZ]\œ×Ù›ŠK˜Ø[
\ÊNÂˆ™]\›ˆ™\]Y\Ý™\œÚ[ÛŽÂŸNÂœÝ\™\ÜÛœÙPÜ™X]WÙ›ˆH\Þ[˜È[˜Ý[ÛŠÈ]™[X[X[™\]Y\Ý™\œÚ[Û‹Ù[™\˜][ÛˆJHÂˆÛÛœÝ[™[™ÈH]ØZ]×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËØZ]›Ü”™\ÜÛœÙPÜ™X]TÛÝÙ›ŠK˜Ø[
\ËÂˆ]™[ˆX[X[ˆ™\]Y\Ý™\œÚ[Û‹ˆÙ[™\˜][Û‚ˆJNÂˆYˆ
\[™[™ÈÙ[™\˜][ÛˆOOH×Üš]˜]QÙ]
\ËÙÙ[™\˜][ÛŠJHÂˆ™]\›ŽÂˆBˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë\Ü]Ú™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\Ë[™[™ËÙ[™\˜][ÛŠNÂŸNÂ™\Ü]Ú™\ÜÛœÙPÜ™X]WÙ›ˆH[˜Ý[ÛŠ[™[™ËÙ[™\˜][ÛŠHÂˆYˆ
Ù[™\˜][ÛˆOOH×Üš]˜]QÙ]
\ËÙÙ[™\˜][ÛŠJHÂˆ™]\›ŽÂˆBˆžHÂˆ\ËœÙ[™]™[›ÝÊ[™[™Ë™]™[
NÂˆHØ]Ú
\œ›ÜLJHÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËÛX\”[™[™Ô™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\Ë[™[™Ë™]™[Y
NÂˆ\Ë›Û‘\œ›ÜËŠ\œ›ÜLJNÂˆ™]\›ŽÂˆBŸNÂØZ]›Ü”™\ÜÛœÙPÜ™X]TÛÝÙ›ˆH\Þ[˜È[˜Ý[ÛŠÈ]™[X[X[™\]Y\Ý™\œÚ[Û‹Ù[™\˜][ÛˆJHÂˆÚ[H
Ù[™\˜][ÛˆOOH×Üš]˜]QÙ]
\ËÙÙ[™\˜][ÛŠJHÂˆÛÛœÝ[™[™ÈH×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËžT™\\™T™\ÜÛœÙPÜ™X]WÙ›ŠK˜Ø[
\ËÂˆ]™[ˆX[X[ˆ™\]Y\Ý™\œÚ[Û‚ˆJNÂˆYˆ
[™[™ÊHÂˆ™]\›ˆ[™[™ÎÂˆBˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\ËØZ]›ÜÚ[™ÙWÙ›ŠK˜Ø[
\ËÙ[™\˜][ÛŠNÂˆBˆ™]\›ˆ[ÂŸNÂžT™\\™T™\ÜÛœÙPÜ™X]WÙ›ˆH[˜Ý[ÛŠÈ]™[X[X[™\]Y\Ý™\œÚ[ÛˆJHÂˆYˆ
W×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊKš\Ê™\]Y\Ý™\œÚ[ÛŠJHÂˆ™]\›ˆ[ÂˆBˆYˆ
×Üš]˜]QÙ]
\ËÛÛ™ÛÚ[™Ô™\ÜÛœÙJH×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û
HOOH™œ™YHˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë™^[™[™Ô™\]Y\Ý™\œÚ[Û—Ù›ŠK˜Ø[
\ÊHOOH™\]Y\Ý™\œÚ[ÛŠHÂˆ™]\›ˆ[ÂˆBˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û˜Ü™X]WÜ™\]Y\ÝYŠNÂˆÛÛœÝ]™[YH\[Ùˆ]™[™]™[ÚYOOHœÝš[™ÈˆÈ]™[™]™[ÚYˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë™^™\ÜÛœÙPÜ™X]Q]™[YÙ›ŠK˜Ø[
\ÊNÂˆÛÛœÝ\™Ù]™\œÚ[ÛˆHX[X[È™\]Y\Ý™\œÚ[Ûˆˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë]]Ô™\ÜÛœÙPÜ™X]U\™Ù]™\œÚ[Û—Ù›ŠK˜Ø[
\Ë™\]Y\Ý™\œÚ[ÛŠNÂˆÛÛœÝ[™[™ÈHÂˆ]™[ˆÂˆ‹‹™]™[ˆ]™[ÚYˆ]™[YˆKˆ]™[Yˆ™\]Y\Ý™\œÚ[Û‹ˆ\™Ù]™\œÚ[Û‹ˆX[X[ˆNÂˆ×Üš]˜]TÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]K[™[™ÊNÂˆ™]\›ˆ[™[™ÎÂŸNÂ˜ÛX\”[™[™Ô™\ÜÛœÙPÜ™X]WÙ›ˆH[˜Ý[ÛŠ]™[Y
HÂˆYˆ
×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û
HOOH˜Ü™X]WÜ™\]Y\ÝYˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JHOOH[
HÂˆ™]\›ˆ˜[ÙNÂˆBˆYˆ
]™[Y	‰ˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JK™]™[YOOH]™[Y
HÂˆ™]\›ˆ˜[ÙNÂˆBˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë™\ÝÜ™PÛÝ™\™Y]]Ô™\]Y\Ý™\œÚ[Ûœ×Ù›ŠK˜Ø[
\Ë×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JJNÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊK™[]J×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JKœ™\]Y\Ý™\œÚ[ÛŠNÂˆYˆ
×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JK›X[X[
HÂˆ×Üš]˜]QÙ]
\ËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœÊK™[]J×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JKœ™\]Y\Ý™\œÚ[ÛŠNÂˆBˆ×Üš]˜]TÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]K[
NÂˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÛÛ›Û™œ™YHŠNÂˆ×Üš]˜]SY]Ù
\ËÔ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\—Ú[œÝ[˜Ù\Ë›ÝYžUØZ]\œ×Ù›ŠK˜Ø[
\ÊNÂˆ™]\›ˆYNÂŸNÂ˜ÛX\XØÙ\Y™\ÜÛœÙPÜ™X]WÙ›ˆH[˜Ý[ÛŠ
HÂˆYˆ
×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JHOOH[
HÂˆ™]\›ŽÂˆBˆ›Üˆ
]™\œÚ[ÛŒˆH×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JKœ™\]Y\Ý™\œÚ[ÛŽÈ™\œÚ[ÛŒˆH×Üš]˜]QÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]JK\™Ù]™\œÚ[ÛŽÈ™\œÚ[ÛŒˆ
ÏHJHÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊK™[]J™\œÚ[ÛŒŠNÂˆ×Üš]˜]QÙ]
\ËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœÊK™[]J™\œÚ[ÛŒŠNÂˆBˆ×Üš]˜]TÙ]
\ËÜ[™[™Ô™\ÜÛœÙPÜ™X]K[
NÂŸNÂœ™\ÝÜ™PÛÝ™\™Y]]Ô™\]Y\Ý™\œÚ[Ûœ×Ù›ˆH[˜Ý[ÛŠ[™[™ÊHÂˆ›Üˆ
]™\œÚ[ÛŒˆH[™[™Ëœ™\]Y\Ý™\œÚ[Ûˆ
ÈNÈ™\œÚ[ÛŒˆH[™[™Ë\™Ù]™\œÚ[ÛŽÈ™\œÚ[ÛŒˆ
ÏHJHÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊK˜Y
™\œÚ[ÛŒŠNÂˆBŸNÂ›™^[™[™Ô™\]Y\Ý™\œÚ[Û—Ù›ˆH[˜Ý[ÛŠ
HÂˆYˆ
×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊKœÚ^™HOOH
HÂˆ™]\›ˆ[ÂˆBˆ™]\›ˆX]›Z[Š‹‹—×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊJNÂŸNÂ˜]]Ô™\ÜÛœÙPÜ™X]U\™Ù]™\œÚ[Û—Ù›ˆH[˜Ý[ÛŠ™\]Y\Ý™\œÚ[ÛŠHÂˆÛÛœÝ™^X[X[™\œÚ[ÛˆHX]›Z[Š‹‹\œ˜^K™œ›ÛJ×Üš]˜]QÙ]
\ËÛX[X[™\ÜÛœÙPÜ™X]U™\œÚ[ÛœÊJK™š[\Š
™\œÚ[ÛŒŠHOˆ™\œÚ[ÛŒˆH™\]Y\Ý™\œÚ[ÛŠJNÂˆÛÛœÝ[YÚX›U™\œÚ[ÛœÈH[X™\‹š\Ñš[š]J™^X[X[™\œÚ[ÛŠHÈ\œ˜^K™œ›ÛJ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊJK™š[\Š
™\œÚ[ÛŒŠHOˆ™\œÚ[ÛŒˆ™^X[X[™\œÚ[ÛŠHˆ\œ˜^K™œ›ÛJ×Üš]˜]QÙ]
\ËÜ[™[™Ô™\]Y\Ý™\œÚ[ÛœÊJNÂˆ™]\›ˆX]›X^
‹‹™[YÚX›U™\œÚ[ÛœÊNÂŸNÂ›™^™\ÜÛœÙPÜ™X]Q]™[YÙ›ˆH[˜Ý[ÛŠ
HÂˆ×Üš]˜]TÙ]
\ËÜ™\ÜÛœÙPÜ™X]Q]™[ÛÝ[\‹×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]Q]™[ÛÝ[\ŠH
ÈJNÂˆ™]\›ˆYÙ[×Úœ×Ü™\ÜÛœÙWØÜ™X]WÉ××Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]Q]™[ÛÝ[\Š_XÂŸNÂš\Ô™\ÜÛœÙPÜ™X]SZÙQ\œ›Ü—Ù›ˆH[˜Ý[ÛŠ\œ›ÜLJHÂˆÛÛœÝÛÙHH\[Ùˆ\œ›ÜLOË˜ÛÙHOOHœÝš[™ÈˆÈ\œ›ÜLK˜ÛÙHˆˆŽÂˆYˆ
ÛÙKš[˜ÛY\Êœ™\ÜÛœÙWØÜ™X]HŠJHÂˆ™]\›ˆYNÂˆBˆÛÛœÝY\ÜØYÙHH\[Ùˆ\œ›ÜLOË›Y\ÜØYÙHOOHœÝš[™ÈˆÈ\œ›ÜLK›Y\ÜØYÙHˆˆŽÂˆ™]\›ˆY\ÜØYÙKš[˜ÛY\Êœ™\ÜÛœÙK˜Ü™X]HŠNÂŸNÂ››ÝYžUØZ]\œ×Ù›ˆH[˜Ý[ÛŠ
HÂˆÛÛœÝØZ]\œÈH\œ˜^K™œ›ÛJ×Üš]˜]QÙ]
\ËÝØZ]\œÊJNÂˆ×Üš]˜]QÙ]
\ËÝØZ]\œÊK˜ÛX\Š
NÂˆ›Üˆ
ÛÛœÝ™\ÛÛ™HÙˆØZ]\œÊHÂˆ™\ÛÛ™J
NÂˆBŸNÂØZ]›ÜÚ[™ÙWÙ›ˆH[˜Ý[ÛŠÙ[™\˜][ÛŠHÂˆYˆ
Ù[™\˜][ÛˆOOH×Üš]˜]QÙ]
\ËÙÙ[™\˜][ÛŠJHÂˆ™]\›ˆ›ÛZ\ÙKœ™\ÛÛ™J
NÂˆBˆ™]\›ˆ™]È›ÛZ\ÙJ
™\ÛÛ™JHOˆÂˆ×Üš]˜]QÙ]
\ËÝØZ]\œÊK˜Y
™\ÛÛ™JNÂˆJNÂŸNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÜ[˜ZT™X[[YUÙX”Ë›ZœÂ˜\ˆQT—ÐÓÓ“‘PÕSÓ—ÑTÐÓÓ“‘PÕQÑÔPÑWÓTÈHYLÎÂ˜\ˆÝ\›‹ÜÝ]KÝ\ÙR[œÙXÝ\™P\RÙ^KØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙKÛ]]YØÛÛ›™XÝ›ÛZ\ÙKØÛÛ›™XÝ][\YÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ü™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\‹ÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›‹Ù[™]™[›Ý×Ù›‹[™TY\ÛÛ›™XÝ[Û”Ý]PÚ[™ÙWÙ›‹ØÚY[TY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝYÛÜÙWÙ›‹ÛX\”Y\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù›ŽÂ˜\ˆÜ[RT™X[[YUÙX”•ÈHÛ\ÜÈ^[™ÈÜ[RT™X[[YP˜\ÙHÂˆÛÛœÝXÝÜŠÜ[ÛœÈHßJHÂˆYˆ
\[Ùˆ•ÔY\ÛÛ›™XÝ[ÛˆOOH[™Yš[™YŠHÂˆ›ÝÈ™]È\œ›ÜŠ•ÙX”•È\È›ÝÝ\ÜY[ˆ\È[š\›Û›Y[ŠNÂˆBˆÝ\\ŠÜ[ÛœÊNÂˆ×Üš]˜]PY
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ÊNÂˆ×ÜX›XÑšY[
\Ë›Ü[ÛœÈŠNÂˆ×Üš]˜]PY
\ËÝ\›ŠNÂˆ×Üš]˜]PY
\ËÜÝ]KÂˆÝ]\Îˆ™\ØÛÛ›™XÝY‹ˆY\ÛÛ›™XÝ[ÛŽˆ›ÚYˆ]PÚ[›™[ˆ›ÚYˆØ[Yˆ›ÚYˆJNÂˆ×Üš]˜]PY
\ËÝ\ÙR[œÙXÝ\™P\RÙ^JNÂˆ×Üš]˜]PY
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆ×Üš]˜]PY
\ËÛ]]Y˜[ÙJNÂˆ×Üš]˜]PY
\ËØÛÛ›™XÝ›ÛZ\ÙJNÂˆ×Üš]˜]PY
\ËØÛÛ›™XÝ][\Y
NÂˆ×Üš]˜]PY
\ËÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]
NÂˆ×Üš]˜]PY
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\‹™]È™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\Š
]™[
HOˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŠK˜Ø[
\Ë]™[
K
\œ›ÜLJHOˆ\Ë—ÛÛ‘\œ›ÜŠ\œ›ÜLJJJNÂˆ\Ë›Ü[ÛœÈHÜ[ÛœÎÂˆ×Üš]˜]TÙ]
\ËÝ\›‹Ü[ÛœË˜˜\ÙU\›ÏÈÎ‹ËØ\K›Ü[˜ZK˜ÛÛKÝŒKÜ™X[[YKØØ[Ø
NÂˆ×Üš]˜]TÙ]
\ËÝ\ÙR[œÙXÝ\™P\RÙ^KÜ[ÛœË\ÙR[œÙXÝ\™P\RÙ^HÏÈ˜[ÙJNÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[Ø[QÙˆHÙX”•ÈÛÛ›™XÝ[Û‹‚ˆ
‹ÂˆÙ]Ø[Y

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜÝ]JK˜Ø[YÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[Ý]\ÈÙˆHÙX”•ÈÛÛ›™XÝ[Û‹‚ˆ
‹ÂˆÙ]Ý]\Ê
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÎÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[ÛÛ›™XÝ[ÛˆÝ]HÙˆHÙX”•ÈÛÛ›™XÝ[Ûˆ[˜ÛY[™ÈHY\ˆÛÛ›™XÝ[Ûˆ[™]Bˆ
ˆÚ[›™[‚ˆ
‹ÂˆÙ]ÛÛ›™XÝ[Û”Ý]J
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜÝ]JNÂˆBˆÊŠ‚ˆ
ˆÚ]\ˆHÙ\ÜÚ[Ûˆ\È]]Y‚ˆ
‹ÂˆÙ]]]Y

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÛ]]Y
NÂˆBˆÊŠ‚ˆ
ˆÛÛ›™XÝÈH™X[[YHTKˆ\ÈÚ[\ÝX›\ÚHÛÛ›™XÝ[ÛˆÈHÜ[RH™X[[YHTBˆ
ˆšXHÙX”•Ë‚ˆ
‚ˆ
ˆYˆ[ÝH\™H\Ú[™ÈHœ›ÝÜÙ\‹H˜[œÜÜ^Y\ˆÚ[[ÛÈ]]ÛX]XØ[HÛÛ™šYÝ\™HBˆ
ˆZXÜ›ÜÛ™H[™]Y[ÈÝ]]È™H\ÙYžHHÙ\ÜÚ[Û‹‚ˆ
‚ˆ
ˆ\˜[HÜ[ÛœÈHHÜ[ÛœÈ›ÜˆHÛÛ›™XÝ[Û‹‚ˆ
‹Âˆ\Þ[˜ÈÛÛ›™XÝ
Ü[ÛœÊHÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÈOOH˜ÛÛ›™XÝYŠHÂˆ™]\›ŽÂˆBˆYˆ
×Üš]˜]QÙ]
\ËØÛÛ›™XÝ›ÛZ\ÙJJHÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØÛÛ›™XÝ›ÛZ\ÙJNÂˆBˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÈOOH˜ÛÛ›™XÝ[™ÈŠHÂˆÙÙÙ\—ÙY˜][‹Ø\›Š”™X[[YHÛÛ›™XÝ[Ûˆ[™XYH[ˆ›ÙÜ™\ÜÈ]›È›ÛZ\ÙH›Ý[™ŠNÂˆ™]\›ŽÂˆBˆÛÛœÝ[Ù[HÜ[ÛœË›[Ù[ÏÈ\Ë˜Ý\œ™[[Ù[Âˆ\Ë˜Ý\œ™[[Ù[H[Ù[ÂˆÛÛœÝ˜\ÙU\›HÜ[ÛœË\›ÏÈ×Üš]˜]QÙ]
\ËÝ\›ŠNÂˆÛÛœÝ][\YH
Ê××Üš]˜]UÜ˜\\Š\ËØÛÛ›™XÝ][\Y
K—ÎÂˆ]™\ÛÛ™PÛÛ›™XÝ[ÛŽÂˆ]™Z™XÝÛÛ›™XÝ[ÛŽÂˆÛÛœÝÛÛ›™XÝ[Û”™XYHH™]È›ÛZ\ÙJ
™\ÛÛ™K™Z™XÝ
HOˆÂˆ™\ÛÛ™PÛÛ›™XÝ[ÛˆH™\ÛÛ™NÂˆ™Z™XÝÛÛ›™XÝ[ÛˆH™Z™XÝÂˆJNÂˆÛÛœÝ™\\™PÛÛ›™XÝ[ÛˆH\Þ[˜È

HOˆÂˆ]\RÙ^NÂˆžHÂˆ\RÙ^HH]ØZ]\Ë—ÙÙ]\RÙ^JÜ[ÛœÊNÂˆHØ]Ú
\œ›ÜLJHÂˆ™Z™XÝÛÛ›™XÝ[ÛŠ\œ›ÜLJNÂˆ™]\›ŽÂˆBˆÛÛœÝ\ÐÛY[Ù^HH\[Ùˆ\RÙ^HOOHœÝš[™Èˆ	‰ˆ\RÙ^KœÝ\ÕÚ]
™Z×ÈŠNÂˆYˆ
\Ðœ›ÝÜÙ\‘[š\›Û›Y[

H	‰ˆW×Üš]˜]QÙ]
\ËÝ\ÙR[œÙXÝ\™P\RÙ^JH	‰ˆZ\ÐÛY[Ù^JHÂˆ™Z™XÝÛÛ›™XÝ[ÛŠ™]È\Ù\‘\œ›ÜŠ•\Ú[™ÈHÙX”•ÈÛÛ›™XÝ[Ûˆ[ˆHœ›ÝÜÙ\ˆ[š\›Û›Y[™\]Z\™\È[ˆ\[Y\˜[ÛY[Ù^KˆYˆ[ÝH™YYÈ\ÙHH™YÝ[\ˆTHÙ^K\ÙHHÙX”ÛØÚÙ]˜[œÜÜÜˆÙ]H\ÙR[œÙXÝ\™P\RÙ^XÜ[ÛˆÈYKˆŠJNÂˆ™]\›ŽÂˆBˆžHÂˆÛÛœÝ\Ù\”Ù\ÜÚ[ÛÛÛ™šYÈHÂˆ‹‹›Ü[ÛœËš[š]X[Ù\ÜÚ[ÛÛÛ™šYÈßKˆ[Ù[ˆ\Ë˜Ý\œ™[[Ù[ˆNÂˆÛÛœÝÛÛ›™XÝ[Û•\›H™]ÈT“
˜\ÙU\›
NÂˆ]Y\ÛÛ›™XÝ[ÛˆH™]È•ÔY\ÛÛ›™XÝ[ÛŠ
NÂˆÛÛœÝ]PÚ[›™[HY\ÛÛ›™XÝ[Û‹˜Ü™X]Q]PÚ[›™[
›ØZKY]™[ÈŠNÂˆ]Ø[YH›ÚYÂˆÛÛœÝ]XÚÛÛ›™XÝ[Û”Ý]R[™\ˆH
ÛÛ›™XÝ[ÛŠHOˆÂˆÛÛ›™XÝ[Û‹›Û˜ÛÛ›™XÝ[ÛœÝ]XÚ[™ÙHH

HOˆÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\Ë[™TY\ÛÛ›™XÝ[Û”Ý]PÚ[™ÙWÙ›ŠK˜Ø[
\ËÛÛ›™XÝ[ÛŠNÂˆNÂˆNÂˆ]XÚÛÛ›™XÝ[Û”Ý]R[™\ŠY\ÛÛ›™XÝ[ÛŠNÂˆ×Üš]˜]TÙ]
\ËÜÝ]KÂˆÝ]\Îˆ˜ÛÛ›™XÝ[™È‹ˆY\ÛÛ›™XÝ[Û‹ˆ]PÚ[›™[ˆØ[YˆJNÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÊNÂˆ]PÚ[›™[˜Y]™[\Ý[™\Š›Ü[ˆ‹

HOˆÂˆYˆ
×Üš]˜]QÙ]
\ËØÛÛ›™XÝ][\Y
HOOH][\Y×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[OOH]PÚ[›™[
HÂˆ™]\›ŽÂˆBˆ×Üš]˜]TÙ]
\ËÜÝ]KÂˆÝ]\Îˆ˜ÛÛ›™XÝ[™È‹ˆY\ÛÛ›™XÝ[Û‹ˆ]PÚ[›™[ˆØ[YˆJNÂˆ]™\ÛÛ™YH˜[ÙNÂˆ][Y[Ý]YÂˆÛÛœÝš[š\ÚH

HOˆÂˆYˆ
™\ÛÛ™Y
Bˆ™]\›ŽÂˆ™\ÛÛ™YHYNÂˆYˆ
[Y[Ý]YOOH›ÚY
BˆÛX\•[Y[Ý]
[Y[Ý]Y
NÂˆ]PÚ[›™[œ™[[Ý™Q]™[\Ý[™\Š›Y\ÜØYÙH‹ÛÛÛ™šYÐXÚÊNÂˆ]PÚ[›™[œ™[[Ý™Q]™[\Ý[™\Š˜ÛÜÙH‹ÛÛÜÙJNÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÈOOH˜ÛÛ›™XÝ[™Èˆ×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[OOH]PÚ[›™[]PÚ[›™[œ™XYTÝ]HOOH›Ü[ˆŠHÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[OOH]PÚ[›™[
HÂˆ\Ë˜ÛÜÙJ
NÂˆBˆ™Z™XÝÛÛ›™XÝ[ÛŠ™]È\œ›ÜŠÛÛ›™XÝ[ÛˆÛÜÙY™Y›Ü™HÙ\ÜÚ[ÛˆÛÛ™šYÈØ\ÈXÚÛ›ÝÛYÙYŠJNÂˆ™]\›ŽÂˆBˆ×Üš]˜]TÙ]
\ËÜÝ]KÂˆÝ]\Îˆ˜ÛÛ›™XÝY‹ˆY\ÛÛ›™XÝ[Û‹ˆ]PÚ[›™[ˆØ[YˆJNÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÊNÂˆ\Ë—ÛÛ“Ü[Š
NÂˆ™\ÛÛ™PÛÛ›™XÝ[ÛŠ
NÂˆNÂˆÛÛœÝÛÛÛ™šYÐXÚÈH
XÚÑ]™[
HOˆÂˆÛÛœÝÈ]Nˆ\œÙYHH\œÙT™X[[YQ]™[
XÚÑ]™[
NÂˆYˆ
\œÙYË\HOOHœÙ\ÜÚ[Û‹\]YŠHÂˆš[š\Ú

NÂˆBˆNÂˆÛÛœÝÛÛÜÙHH

HOˆÂˆš[š\Ú

NÂˆNÂˆ[Y[Ý]YHÙ][Y[Ý]


HOˆÂˆYˆ
\™\ÛÛ™Y
HÂˆÙÙÙ\—ÙY˜][‹Ø\›Š•[YYÝ]ØZ][™È›ÜˆÙ\ÜÚ[Û‹\]YXÚÈLŒM™\ÛÛš[™ÈÛÛ›™XÝ

H[ž]Ø^HŠNÂˆš[š\Ú

NÂˆBˆKYLÊNÂˆ]PÚ[›™[˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹ÛÛÛ™šYÐXÚÊNÂˆ]PÚ[›™[˜Y]™[\Ý[™\Š˜ÛÜÙH‹ÛÛÜÙJNÂˆ]PÚ[›™[˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹
]™[
HOˆÂˆ\Ë—ÛÛ“Y\ÜØYÙJ]™[
NÂˆÛÛœÝÈ]Nˆ\œÙY\ÑÙ[™\šXÈHH\œÙT™X[[YQ]™[
]™[
NÂˆYˆ
\\œÙY\ÑÙ[™\šXÊHÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH™\œ›ÜˆŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠKš[™T™\ÜÛœÙPÜ™X]Q\œ›ÜŠ\œÙY
NÂˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK˜Ü™X]YŠHÂˆ×Üš]˜]TÙ]
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙKYJNÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠK›X\šÔ™\ÜÛœÙPÜ™X]Y

NÂˆH[ÙHYˆ
\œÙY\HOOHœ™\ÜÛœÙK™Û™HŠHÂˆ×Üš]˜]TÙ]
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠK›X\šÔ™\ÜÛœÙQÛ™J
NÂˆBˆYˆ
\œÙY\HOOHœÙ\ÜÚ[Û‹˜Ü™X]YŠHÂˆ\Ë—Ý˜XÚ[™ÐÛÛ™šYÈH\œÙYœÙ\ÜÚ[Û‹˜XÚ[™ÎÂˆÛÛœÝ˜XÚ[™ÐÛÛ™šYÈH\[Ùˆ\Ù\”Ù\ÜÚ[ÛÛÛ™šYË˜XÚ[™ÈOOH[™Yš[™YˆÈ˜]]Èˆˆ\Ù\”Ù\ÜÚ[ÛÛÛ™šYË˜XÚ[™ÎÂˆ\Ë—Ý\]U˜XÚ[™ÐÛÛ™šYÊ˜XÚ[™ÐÛÛ™šYÊNÂˆBˆJNÂˆ\Ë\]TÙ\ÜÚ[ÛÛÛ™šYÊ\Ù\”Ù\ÜÚ[ÛÛÛ™šYÊNÂˆJNÂˆ]PÚ[›™[˜Y]™[\Ý[™\Š™\œ›Üˆ‹
]™[
HOˆÂˆYˆ
×Üš]˜]QÙ]
\ËØÛÛ›™XÝ][\Y
HOOH][\Y×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[OOH]PÚ[›™[
HÂˆ™]\›ŽÂˆBˆ\Ë˜ÛÜÙJ
NÂˆ\Ë—ÛÛ‘\œ›ÜŠ]™[
NÂˆ™Z™XÝÛÛ›™XÝ[ÛŠ]™[
NÂˆJNÂˆÛÛœÝ]Y[Ñ[[Y[H\Ë›Ü[ÛœË˜]Y[Ñ[[Y[ÏÈØÝ[Y[˜Ü™X]Q[[Y[
˜]Y[ÈŠNÂˆ]Y[Ñ[[Y[˜]]Ü^HHYNÂˆY\ÛÛ›™XÝ[Û‹›Û˜XÚÈH
]™[
HOˆÂˆ]Y[Ñ[[Y[œÜ˜ÓØš™XÝH]™[œÝ™X[\ÖÌNÂˆNÂˆÛÛœÝÝ™X[HH\Ë›Ü[ÛœË›YYXTÝ™X[HÏÈ]ØZ]˜]šYØ]Ü‹›YYXQ]šXÙ\Ë™Ù]\Ù\“YYXJÂˆ]Y[ÎˆYBˆJNÂˆY\ÛÛ›™XÝ[Û‹˜Y˜XÚÊÝ™X[K™Ù]]Y[Õ˜XÚÜÊ
VÌJNÂˆYˆ
\Ë›Ü[ÛœË˜Ú[™ÙTY\ÛÛ›™XÝ[ÛŠHÂˆÛÛœÝÜšYÚ[˜[Y\ÛÛ›™XÝ[ÛˆHY\ÛÛ›™XÝ[ÛŽÂˆY\ÛÛ›™XÝ[ÛˆH]ØZ]\Ë›Ü[ÛœË˜Ú[™ÙTY\ÛÛ›™XÝ[ÛŠY\ÛÛ›™XÝ[ÛŠNÂˆYˆ
ÜšYÚ[˜[Y\ÛÛ›™XÝ[ÛˆOOHY\ÛÛ›™XÝ[ÛŠHÂˆÜšYÚ[˜[Y\ÛÛ›™XÝ[Û‹›Û˜ÛÛ›™XÝ[ÛœÝ]XÚ[™ÙHH[ÂˆBˆ]XÚÛÛ›™XÝ[Û”Ý]R[™\ŠY\ÛÛ›™XÝ[ÛŠNÂˆ×Üš]˜]TÙ]
\ËÜÝ]KÈ‹‹—×Üš]˜]QÙ]
\ËÜÝ]JKY\ÛÛ›™XÝ[ÛˆJNÂˆBˆÛÛœÝÙ™™\ˆH]ØZ]Y\ÛÛ›™XÝ[Û‹˜Ü™X]SÙ™™\Š
NÂˆ]ØZ]Y\ÛÛ›™XÝ[Û‹œÙ]ØØ[\ØÜš\[ÛŠÙ™™\ŠNÂˆYˆ
[Ù™™\‹œÙ
HÂˆ›ÝÈ™]È\œ›ÜŠ‘˜Z[YÈÜ™X]HÙ™™\ˆŠNÂˆBˆÛÛœÝÙ™\ÜÛœÙHH]ØZ]™]Ú
ÛÛ›™XÝ[Û•\›ÂˆY]Ùˆ”ÔÕ‹ˆ›ÙNˆÙ™™\‹œÙˆXY\œÎˆÂˆÛÛ[U\HŽˆ˜\XØ][Û‹ÜÙ‹ˆ]]Üš^˜][ÛŽˆ™X\™\ˆ	Ø\RÙ^_Xˆ–SÜ[RKPYÙ[ËTÑÈŽˆPQT”ÖÈ–SÜ[RKPYÙ[ËTÑÈ—BˆBˆJNÂˆYˆ
\Ù™\ÜÛœÙK›ÚÊHÂˆÛÛœÝ]Z[H]ØZ]™XYÙ\œ›Ü‘]Z[
Ù™\ÜÛœÙJNÂˆ›ÝÈ™]È\œ›ÜŠ™X[[YHØ[™\]Y\Ý˜Z[YÚ]Ý]\È	ÜÙ™\ÜÛœÙKœÝ]\ßIÙ]Z[X
NÂˆBˆØ[YHÙ™\ÜÛœÙKšXY\œÏË™Ù]
“ØØ][ÛˆŠOËœÜ]
‹ÈŠKœÜ

NÂˆ×Üš]˜]TÙ]
\ËÜÝ]KÈ‹‹—×Üš]˜]QÙ]
\ËÜÝ]JKØ[YJNÂˆÛÛœÝ[œÝÙ\ˆHÂˆ\Nˆ˜[œÝÙ\ˆ‹ˆÙˆ]ØZ]Ù™\ÜÛœÙK^

BˆNÂˆ]ØZ]Y\ÛÛ›™XÝ[Û‹œÙ]™[[ÝQ\ØÜš\[ÛŠ[œÝÙ\ŠNÂˆHØ]Ú
\œ›ÜLJHÂˆ\Ë˜ÛÜÙJ
NÂˆ\Ë—ÛÛ‘\œ›ÜŠ\œ›ÜLJNÂˆ™Z™XÝÛÛ›™XÝ[ÛŠ\œ›ÜLJNÂˆBˆNÂˆ×Üš]˜]TÙ]
\ËØÛÛ›™XÝ›ÛZ\ÙKÛÛ›™XÝ[Û”™XYK™š[˜[J

HOˆÂˆYˆ
×Üš]˜]QÙ]
\ËØÛÛ›™XÝ][\Y
HOOH][\Y
HÂˆ×Üš]˜]TÙ]
\ËØÛÛ›™XÝ›ÛZ\ÙK›ÚY
NÂˆBˆJJNÂˆ›ÚY™\\™PÛÛ›™XÝ[ÛŠ
NÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØÛÛ›™XÝ›ÛZ\ÙJNÂˆBˆÊŠ‚ˆ
ˆÙ[™[ˆ]™[ÈH™X[[YHTKˆ\ÈÚ[Ýš[™ÚYžHH]™[[™Ù[™]\™XÝHÈBˆ
ˆTKˆ\ÈØ[ˆ™H\ÙYYˆ[ÝHØ[ÈZÙHÛÛ›ÛÝ™\ˆHÛÛ›™XÝ[Ûˆ[™Ù[™]™[ÈX[X[K‚ˆ
‚ˆ
ˆ\˜[H]™[HH]™[ÈÙ[™‚ˆ
‹ÂˆÙ[™]™[
]™[
HÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›ŠK˜Ø[
\ÊNÂˆYˆ
]™[\HOOHœ™\ÜÛœÙK˜Ü™X]HŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠKœ™\]Y\Ý™\ÜÛœÙPÜ™X]J]™[ÂˆX[X[ˆYBˆJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\HOOHœ™\ÜÛœÙK˜Ø[˜Ù[ŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠK˜™YÚ[Ø[˜Ù[™\ÜÛœÙJ
NÂˆBˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŠK˜Ø[
\Ë]™[
NÂˆBˆ™\]Y\Ý™\ÜÛœÙJ™\ÜÛœÙJHÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠKœ™\]Y\Ý™\ÜÛœÙPÜ™X]JÂˆ\Nˆœ™\ÜÛœÙK˜Ü™X]H‹ˆ‹‹œ™\ÜÛœÙHÈÈ™\ÜÛœÙHHˆßBˆKÈX[X[ˆ™\ÜÛœÙHOOH›ÚYJNÂˆBˆÊŠ‚ˆ
ˆ]]HÜˆ[›]]HHÙ\ÜÚ[Û‹‚ˆ
ˆ\˜[H]]YHÚ]\ˆÈ]]HHÙ\ÜÚ[Û‹‚ˆ
‹Âˆ]]J]]Y
HÂˆ×Üš]˜]TÙ]
\ËÛ]]Y]]Y
NÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœY\ÛÛ›™XÝ[ÛŠHÂˆÛÛœÝY\ÛÛ›™XÝ[ÛˆH×Üš]˜]QÙ]
\ËÜÝ]JKœY\ÛÛ›™XÝ[ÛŽÂˆY\ÛÛ›™XÝ[Û‹™Ù]Ù[™\œÊ
K™›Ü‘XXÚ

Ù[™\ŠHOˆÂˆYˆ
Ù[™\‹˜XÚÊHÂˆÙ[™\‹˜XÚË™[˜X›YH[]]YÂˆBˆJNÂˆBˆBˆØY\]Y[ÑÛ™Q]™[

HÂˆ×Üš]˜]TÙ]
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆBˆÊŠ‚ˆ
ˆÛÜÙHHÛÛ›™XÝ[ÛˆÈH™X[[YHTH[™\ØÛÛ›™XÝÈH[™\›Z[™ÈÙX”•ÈÛÛ›™XÝ[Û‹‚ˆ
‹ÂˆÛÜÙJ
HÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÛX\”Y\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠKœ™[X\ÙUØZ]\œÊ
NÂˆ×Üš]˜]TÙ]
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[
HÂˆ×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[˜ÛÜÙJ
NÂˆBˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœY\ÛÛ›™XÝ[ÛŠHÂˆÛÛœÝY\ÛÛ›™XÝ[ÛˆH×Üš]˜]QÙ]
\ËÜÝ]JKœY\ÛÛ›™XÝ[ÛŽÂˆY\ÛÛ›™XÝ[Û‹›Û˜ÛÛ›™XÝ[ÛœÝ]XÚ[™ÙHH[ÂˆY\ÛÛ›™XÝ[Û‹™Ù]Ù[™\œÊ
K™›Ü‘XXÚ

Ù[™\ŠHOˆÂˆÙ[™\‹˜XÚÏËœÝÜ

NÂˆJNÂˆY\ÛÛ›™XÝ[Û‹˜ÛÜÙJ
NÂˆBˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÈOOH™\ØÛÛ›™XÝYŠHÂˆ×Üš]˜]TÙ]
\ËÜÝ]KÂˆÝ]\Îˆ™\ØÛÛ›™XÝY‹ˆY\ÛÛ›™XÝ[ÛŽˆ›ÚYˆ]PÚ[›™[ˆ›ÚYˆØ[Yˆ›ÚYˆJNÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]JKœÝ]\ÊNÂˆ\Ë—ÛÛÛÜÙJ
NÂˆBˆBˆÊŠ‚ˆ
ˆ[\œ\HÝ\œ™[™\ÜÛœÙHYˆÛ™H\ÈÛ™ÛÚ[™È[™ÛX\ˆH]Y[ÈY™™\ˆÛÈ]HYÙ[ˆ
ˆÝÜÈ[Ú[™Ë‚ˆ
‹Âˆ[\œ\

HÂˆYˆ
×Üš]˜]QÙ]
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙJH	‰ˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŠK˜™YÚ[Ø[˜Ù[™\ÜÛœÙJ
JHÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŠK˜Ø[
\ËÂˆ\Nˆœ™\ÜÛœÙK˜Ø[˜Ù[‚ˆJNÂˆ×Üš]˜]TÙ]
\ËØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙK˜[ÙJNÂˆBˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŠK˜Ø[
\ËÂˆ\Nˆ›Ý]]Ø]Y[×ØY™™\‹˜ÛX\ˆ‚ˆJNÂˆBŸNÂ—Ý\›ˆH™]ÈÙXZÓX\

NÂ—ÜÝ]HH™]ÈÙXZÓX\

NÂ—Ý\ÙR[œÙXÝ\™P\RÙ^HH™]ÈÙXZÓX\

NÂ—ØØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙHH™]ÈÙXZÓX\

NÂ—Û]]YH™]ÈÙXZÓX\

NÂ—ØÛÛ›™XÝ›ÛZ\ÙHH™]ÈÙXZÓX\

NÂ—ØÛÛ›™XÝ][\YH™]ÈÙXZÓX\

NÂ—ÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]H™]ÈÙXZÓX\

NÂ—Ü™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ˆH™]ÈÙXZÓX\

NÂ—ÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ÈH™]ÈÙXZÔÙ]

NÂ˜\ÜÙ\ÛÛ›™XÝYÙ›ˆH[˜Ý[ÛŠ
HÂˆYˆ
W×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[œ™XYTÝ]HOOH›Ü[ˆŠHÂˆ›ÝÈ™]È\œ›ÜŠ•ÙX”•È]HÚ[›™[\È›ÝÛÛ›™XÝYˆXZÙHÝ\™H[ÝHØ[ÛÛ›™XÝ

X™Y›Ü™HÙ[™[™È]™[ËˆŠNÂˆBŸNÂœÙ[™]™[›Ý×Ù›ˆH[˜Ý[ÛŠ]™[
HÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]QÙ]
\ËÜÝ]JK™]PÚ[›™[œÙ[™
”ÓÓ‹œÝš[™ÚYžJ]™[
JNÂŸNÂš[™TY\ÛÛ›™XÝ[Û”Ý]PÚ[™ÙWÙ›ˆH[˜Ý[ÛŠÛÛ›™XÝ[ÛŠHÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœY\ÛÛ›™XÝ[ÛˆOOHÛÛ›™XÝ[ÛŠHÂˆ™]\›ŽÂˆBˆÝÚ]Ú
ÛÛ›™XÝ[Û‹˜ÛÛ›™XÝ[Û”Ý]JHÂˆØ\ÙH˜ÛÛ›™XÝYŽ‚ˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÛX\”Y\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù›ŠK˜Ø[
\ÊNÂˆœ™XZÎÂˆØ\ÙH™\ØÛÛ›™XÝYŽ‚ˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËØÚY[TY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝYÛÜÙWÙ›ŠK˜Ø[
\ËÛÛ›™XÝ[ÛŠNÂˆœ™XZÎÂˆØ\ÙH™˜Z[YŽ‚ˆØ\ÙH˜ÛÜÙYŽ‚ˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÛX\”Y\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù›ŠK˜Ø[
\ÊNÂˆ\Ë˜ÛÜÙJ
NÂˆœ™XZÎÂˆBŸNÂœØÚY[TY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝYÛÜÙWÙ›ˆH[˜Ý[ÛŠÛÛ›™XÝ[ÛŠHÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”•×Ú[œÝ[˜Ù\ËÛX\”Y\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]TÙ]
\ËÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù][Y[Ý]


HOˆÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]JKœY\ÛÛ›™XÝ[ÛˆOOHÛÛ›™XÝ[Ûˆ	‰ˆÛÛ›™XÝ[Û‹˜ÛÛ›™XÝ[Û”Ý]HOOH™\ØÛÛ›™XÝYŠHÂˆ\Ë˜ÛÜÙJ
NÂˆBˆKQT—ÐÓÓ“‘PÕSÓ—ÑTÐÓÓ“‘PÕQÑÔPÑWÓTÊJNÂŸNÂ˜ÛX\”Y\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]Ù›ˆH[˜Ý[ÛŠ
HÂˆYˆ
×Üš]˜]QÙ]
\ËÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]
HOOH›ÚY
HÂˆ™]\›ŽÂˆBˆÛX\•[Y[Ý]
×Üš]˜]QÙ]
\ËÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]
JNÂˆ×Üš]˜]TÙ]
\ËÜY\ÛÛ›™XÝ[Û‘\ØÛÛ›™XÝY[Y[Ý]›ÚY
NÂŸNÂ˜\Þ[˜È[˜Ý[Ûˆ™XYÙ\œ›Ü‘]Z[
™\ÜÛœÙJHÂˆžHÂˆÛÛœÝ^H]ØZ]™\ÜÛœÙK^

NÂˆYˆ
^
HÂˆžHÂˆÛÛœÝY\ÜØYÙHH”ÓÓ‹œ\œÙJ^
OË™\œ›ÜË›Y\ÜØYÙNÂˆYˆ
\[ÙˆY\ÜØYÙHOOHœÝš[™Èˆ	‰ˆY\ÜØYÙJHÂˆ™]\›ˆˆ	ÛY\ÜØYÙ_XÂˆBˆHØ]ÚÂˆBˆ™]\›ˆˆ	Ý^XÂˆBˆHØ]ÚÂˆBˆ™]\›ˆ™\ÜÛœÙKœÝ]\Õ^Èˆ	Ü™\ÜÛœÙKœÝ]\Õ^XˆˆŽÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÜÚ[\ËÜÚ[\ËXœ›ÝÜÙ\‹›ZœÂ˜\ˆÙX”ÛØÚÙ]HÛØ˜[\Ë•ÙX”ÛØÚÙ]Â™[˜Ý[Ûˆ\Ðœ›ÝÜÙ\‘[š\›Û›Y[Ê
HÂˆ™]\›ˆYNÂŸB˜\ˆ\ÙUÙX”ÛØÚÙ]›ÝØÛÛÈHYNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÛÜ[˜ZT™X[[YUÙXœÛØÚÙ]›ZœÂ˜\ˆØ\RÙ^L‹Ý\›ËÙY˜][\›ÜÝ]L‹Ý\ÙR[œÙXÝ\™P\RÙ^L‹ØÝ\œ™[][RYØÝ\œ™[]Y[ÐÛÛ[[™^ØÜ™X]UÙX”ÛØÚÙ]ÜÚÚ\Ü[‘]™[\Ý[™\œËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\Œ‹ÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\Ë™\Ù]]Y[Ô^X˜XÚÔÝ]WÙ›‹Ù]\ÙX”ÛØÚÙ]Ù›‹\ÜÙ\ÛÛ›™XÝYÙ›Œ‹Ù[™]™[›Ý×Ù›ŒŽÂ˜\ˆÜ[RT™X[[YUÙX”ÛØÚÙ]HÛ\ÜÈ^[™ÈÜ[RT™X[[YP˜\ÙHÂˆÛÛœÝXÝÜŠÜ[ÛœÈHßJHÂˆÝ\\ŠÜ[ÛœÊNÂˆ×Üš]˜]PY
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\ÊNÂˆ×Üš]˜]PY
\ËØ\RÙ^LŠNÂˆ×Üš]˜]PY
\ËÝ\›ÊNÂˆ×Üš]˜]PY
\ËÙY˜][\›
NÂˆ×Üš]˜]PY
\ËÜÝ]L‹ÂˆÝ]\Îˆ™\ØÛÛ›™XÝY‹ˆÙXœÛØÚÙ]ˆ›ÚYˆJNÂˆ×Üš]˜]PY
\ËÝ\ÙR[œÙXÝ\™P\RÙ^LŠNÂˆ×Üš]˜]PY
\ËØÝ\œ™[][RY
NÂˆ×Üš]˜]PY
\ËØÝ\œ™[]Y[ÐÛÛ[[™^
NÂˆÊŠ‚ˆ
ˆ[Y\Ý[\XZ[Z[™YžHH˜[œÜÜ^Y\ˆÈZYÚ]HØ[Ý[][ÛˆÙˆH[\ÙY[YBˆ
ˆÚ[˜ÙHH™\ÜÛœÙHÝ\YÈÛÛ\]HHšYÚ[\œ\[Ûˆ[YK‚ˆ
‚ˆ
ˆ[ÜÝH[\›˜[]ZYÚ™H\ÙYžH^[™Y˜[œÜÜ^Y\œÈ›ÜˆZ\ˆ[\œ\[Û‚ˆ
ˆØ[Ý[][Û‹‚ˆ
‹Âˆ×ÜX›XÑšY[
\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\ŠNÂˆ×ÜX›XÑšY[
\Ë—Ø]Y[Ó[™Ý\È‹
NÂˆ×Üš]˜]PY
\ËØÜ™X]UÙX”ÛØÚÙ]
NÂˆ×Üš]˜]PY
\ËÜÚÚ\Ü[‘]™[\Ý[™\œÊNÂˆ×Üš]˜]PY
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\Œ‹™]È™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\Š
]™[
HOˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŒŠK˜Ø[
\Ë]™[
K
\œ›ÜLJHOˆ\Ë—ÛÛ‘\œ›ÜŠ\œ›ÜLJJJNÂˆ×Üš]˜]TÙ]
\ËÝ\›ËÜ[ÛœË\›
NÂˆ×Üš]˜]TÙ]
\ËÙY˜][\›Ü[ÛœË\›
NÂˆ×Üš]˜]TÙ]
\ËÝ\ÙR[œÙXÝ\™P\RÙ^L‹Ü[ÛœË\ÙR[œÙXÝ\™P\RÙ^HÏÈ˜[ÙJNÂˆ×Üš]˜]TÙ]
\ËØÜ™X]UÙX”ÛØÚÙ]Ü[ÛœË˜Ü™X]UÙX”ÛØÚÙ]
NÂˆ×Üš]˜]TÙ]
\ËÜÚÚ\Ü[‘]™[\Ý[™\œËÜ[ÛœËœÚÚ\Ü[‘]™[\Ý[™\œÈÏÈ˜[ÙJNÂˆBˆÙ]ÛÛ[[Û”™\]Y\ÝXY\œÊ
HÂˆ™]\›ˆPQT”ÎÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[Ý]\ÈÙˆHÙX”ÛØÚÙ]ÛÛ›™XÝ[Û‹‚ˆ
‹ÂˆÙ]Ý]\Ê
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜÝ]LŠKœÝ]\ÎÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[ÛÛ›™XÝ[ÛˆÝ]HÙˆHÙX”ÛØÚÙ]ÛÛ›™XÝ[Û‹‚ˆ
‹ÂˆÙ]ÛÛ›™XÝ[Û”Ý]J
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÜÝ]LŠNÂˆBˆÊŠ‚ˆ
ˆ[Ø^\È™]\›œÈ[\ÈHÙX”ÛØÚÙ]˜[œÜÜ^Y\ˆÙ\È›Ý[™H]][™Ëˆ[œÝXYˆ
ˆ\ÈÚÝ[™H[™YžHHÛY[žH›ÝšYÙÙ\š[™ÈHÙ[™]Y[ØY]Ù‚ˆ
‹ÂˆÙ]]]Y

HÂˆ™]\›ˆ[ÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[][HQÙˆHÛ™ÛÚ[™È™\ÜÛœÙK‚ˆ
‹ÂˆÙ]Ý\œ™[][RY

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØÝ\œ™[][RY
NÂˆBˆÊŠ‚ˆ
ˆšYÙÙ\œÈH]Y[Ø]™[]HÛY[ZYÚ\Ý[ˆÈÈ™XÙZ]™HH]Y[ÈY™™\‹‚ˆ
ˆ›ÝXÝY›Üˆ[ÝHÈ™HX›HÈÝ™\œšYH[™\ØX›H[Z][™È\È]™[[ˆØ\ÙH[Ý\ˆ^[™Yˆ
ˆ˜[œÜÜ^Y\ˆ[™\È]Y[È[\›˜[K‚ˆ
‚ˆ
ˆ\˜[H]Y[Ñ]™[HH]Y[È]™[È[Z]‚ˆ
‹ÂˆÛÛ]Y[Ê]Y[Ñ]™[
HÂˆ\Ë™[Z]
˜]Y[È‹]Y[Ñ]™[
NÂˆBˆØY\]Y[ÑÛ™Q]™[

HÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\Ë™\Ù]]Y[Ô^X˜XÚÔÝ]WÙ›ŠK˜Ø[
\ÊNÂˆBˆ\Þ[˜ÈÛÛ›™XÝ
Ü[ÛœÊHÂˆÛÛœÝ[Ù[HÜ[ÛœË›[Ù[ÏÈ\Ë˜Ý\œ™[[Ù[Âˆ\Ë˜Ý\œ™[[Ù[H[Ù[Âˆ×Üš]˜]TÙ]
\ËØ\RÙ^L‹]ØZ]\Ë—ÙÙ]\RÙ^JÜ[ÛœÊJNÂˆÛÛœÝØ[YHÜ[ÛœË˜Ø[YÂˆ]\›ŽÂˆYˆ
Ü[ÛœË\›
HÂˆ\›ˆHÜ[ÛœË\›Âˆ×Üš]˜]TÙ]
\ËÙY˜][\›Ü[ÛœË\›
NÂˆH[ÙHYˆ
Ø[Y
HÂˆ\›ˆHÜÜÎ‹ËØ\K›Ü[˜ZK˜ÛÛKÝŒKÜ™X[[YOØØ[ÚYIØØ[YXÂˆH[ÙHYˆ
×Üš]˜]QÙ]
\ËÙY˜][\›
JHÂˆ\›ˆH×Üš]˜]QÙ]
\ËÙY˜][\›
NÂˆH[ÙHÂˆ\›ˆHÜÜÎ‹ËØ\K›Ü[˜ZK˜ÛÛKÝŒKÜ™X[[YOÛ[Ù[IÝ\Ë˜Ý\œ™[[Ù[XÂˆBˆ×Üš]˜]TÙ]
\ËÝ\›Ë\›ŠNÂˆÛÛœÝÙ\ÜÚ[ÛÛÛ™šYÈHÂˆ‹‹›Ü[ÛœËš[š]X[Ù\ÜÚ[ÛÛÛ™šYÈßKˆ[Ù[ˆ\Ë˜Ý\œ™[[Ù[ˆNÂˆ]ØZ]™]È›ÛZ\ÙJ
™\ÛÛ™K™Z™XÝ
HOˆÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\ËÙ]\ÙX”ÛØÚÙ]Ù›ŠK˜Ø[
\Ë™\ÛÛ™K™Z™XÝÙ\ÜÚ[ÛÛÛ™šYÊK˜Ø]Ú
™Z™XÝ
NÂˆJNÂˆ]ØZ]\Ë\]TÙ\ÜÚ[ÛÛÛ™šYÊÙ\ÜÚ[ÛÛÛ™šYÊNÂˆBˆÊŠ‚ˆ
ˆÙ[™[ˆ]™[ÈH™X[[YHTKˆ\ÈÚ[Ýš[™ÚYžHH]™[[™Ù[™]\™XÝHÈBˆ
ˆTKˆ\ÈØ[ˆ™H\ÙYYˆ[ÝHØ[ÈZÙHÛÛ›ÛÝ™\ˆHÛÛ›™XÝ[Ûˆ[™Ù[™]™[ÈX[X[K‚ˆ
‚ˆ
ˆ\˜[H]™[HH]™[ÈÙ[™‚ˆ
‹ÂˆÙ[™]™[
]™[
HÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›ŒŠK˜Ø[
\ÊNÂˆYˆ
]™[\HOOHœ™\ÜÛœÙK˜Ü™X]HŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠKœ™\]Y\Ý™\ÜÛœÙPÜ™X]J]™[ÂˆX[X[ˆYBˆJNÂˆ™]\›ŽÂˆBˆYˆ
]™[\HOOHœ™\ÜÛœÙK˜Ø[˜Ù[ŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠK˜™YÚ[Ø[˜Ù[™\ÜÛœÙJ
NÂˆBˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŒŠK˜Ø[
\Ë]™[
NÂˆBˆ™\]Y\Ý™\ÜÛœÙJ™\ÜÛœÙJHÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›ŒŠK˜Ø[
\ÊNÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠKœ™\]Y\Ý™\ÜÛœÙPÜ™X]JÂˆ\Nˆœ™\ÜÛœÙK˜Ü™X]H‹ˆ‹‹œ™\ÜÛœÙHÈÈ™\ÜÛœÙHHˆßBˆKÈX[X[ˆ™\ÜÛœÙHOOH›ÚYJNÂˆBˆÊŠ‚ˆ
ˆÛÜÙHHÙX”ÛØÚÙ]ÛÛ›™XÝ[Û‹‚ˆ
‚ˆ
ˆ\ÈÚ[[ÛÈ™\Ù][žH[\›˜[ÛÛ›™XÝ[Ûˆ˜XÚÚ[™È\ÙY›Üˆ[\œ\[Ûˆ[™[™Ë‚ˆ
‹ÂˆÛÜÙJ
HÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠKœ™[X\ÙUØZ]\œÊ
NÂˆ×Üš]˜]QÙ]
\ËÜÝ]LŠKÙXœÛØÚÙ]Ë˜ÛÜÙJ
NÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[][RY›ÚY
NÂˆ\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\H›ÚYÂˆ\Ë—Ø]Y[Ó[™Ý\ÈHÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[]Y[ÐÛÛ[[™^›ÚY
NÂˆBˆÊŠ‚ˆ
ˆÚ[›ÝÈ[ˆ\œ›Üˆ\ÈHÙX”ÛØÚÙ]˜[œÜÜ^Y\ˆÙ\È›ÝÝ\Ü]][™Ë‚ˆ
‹Âˆ]]JÛ]]YŠHÂˆ›ÝÈ™]È\œ›ÜŠ“]]H\È›ÝÝ\ÜY›ÜˆHÙX”ÛØÚÙ]˜[œÜÜˆ[ÝH]™HÈ]]HH]Y[È[œ][Ý\œÙ[‹ˆŠNÂˆBˆÊŠ‚ˆ
ˆÙ[™[ˆ]Y[ÈY™™\ˆÈH™X[[YHTKˆ\È\È\ÙY›Üˆ[Ý\ˆÛY[ÈÙ[™]Y[ÈÈBˆ
ˆ[Ù[È™\ÜÛ™‚ˆ
‚ˆ
ˆ\˜[H]Y[ÈHH]Y[ÈY™™\ˆÈÙ[™‚ˆ
ˆ\˜[HÜ[ÛœÈHHÜ[ÛœÈ›ÜˆH]Y[ÈY™™\‹‚ˆ
‹ÂˆÙ[™]Y[Ê]Y[ËÜ[ÛœÈHßJHÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]LŠKœÝ]\ÈOOH˜ÛÛ›™XÝYŠHÂˆÝ\\‹œÙ[™]Y[Ê]Y[ËÜ[ÛœÊNÂˆBˆBˆÊŠ‚ˆ
ˆÙ[™HØ[˜Ù[™\ÜÛœÙH]™[ÈH™X[[YHTKˆ\È\È\ÙYÈØ[˜Ù[[ˆÛ™ÛÚ[™Âˆ
ˆ™\ÜÛœÙH]H[Ù[\ÈÝ\œ™[HÙ[™\˜][™Ë‚ˆ
‹ÂˆØØ[˜Ù[™\ÜÛœÙJ
HÂˆYˆ
×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠK˜™YÚ[Ø[˜Ù[™\ÜÛœÙJ
JHÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\ËÙ[™]™[›Ý×Ù›ŒŠK˜Ø[
\ËÂˆ\Nˆœ™\ÜÛœÙK˜Ø[˜Ù[‚ˆJNÂˆBˆBˆÊŠ‚ˆ
ˆÈ“ÕØ[\ÈY]Ù\™XÝKˆØ[[\œ\

X[œÝXY›Üˆ›Ü\ˆ[\œ\[Ûˆ[™[™Ë‚ˆ
‚ˆ
ˆ\ÈY]Ù\È\ÙYÈÙ[™HšYÚ]™[ÈÈHTHÈ[™›Ü›HH[Ù[]H\Ù\ˆ\Âˆ
ˆ[\œ\YH™\ÜÛœÙKˆ]ZYÚ™HÝ™\œšY[‹Ù^[™YžH[ˆ^[™Y˜[œÜÜ^Y\‹ˆÙYBˆ
ˆHÚ[[Ô™X[[YU˜[œÜÜ^Y\˜›Üˆ[ˆ^[\K‚ˆ
‚ˆ
ˆ\˜[H[\ÙY[YHHH[\ÙY[YHÚ[˜ÙHH™\ÜÛœÙHÝ\Y‚ˆ
‹ÂˆÚ[\œ\
[\ÙY[YKØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙHHYJHÂˆYˆ
[\ÙY[YH
HÂˆ™]\›ŽÂˆBˆYˆ
Ø[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙJHÂˆ\Ë—ØØ[˜Ù[™\ÜÛœÙJ
NÂˆBˆÛÛœÝ[™ÝH\Ë—Ø]Y[Ó[™Ý\ÈÏÈ[X™\‹”ÔÒUU‘WÒS‘’S’UNÂˆÛÛœÝ]Y[×Ù[™Û\ÈHX]›X^
X]™›ÛÜŠX]›Z[Š[\ÙY[YK[™Ý
JJNÂˆ\Ë™[Z]
˜]Y[×Ú[\œ\YŠNÂˆ\ËœÙ[™]™[
Âˆ\Nˆ˜ÛÛ™\œØ][Û‹š][K[˜Ø]H‹ˆ][WÚYˆ×Üš]˜]QÙ]
\ËØÝ\œ™[][RY
KˆÛÛ[Ú[™^ˆ×Üš]˜]QÙ]
\ËØÝ\œ™[]Y[ÐÛÛ[[™^
Kˆ]Y[×Ù[™Û\ÂˆJNÂˆBˆÊŠ‚ˆ
ˆ[\œ\HÛ™ÛÚ[™È™\ÜÛœÙKˆ\ÈY]Ù\ÈšYÙÙ\™Y]]ÛX]XØ[HžHHÛY[Ú[‚ˆ
ˆ›ÚXÙHXÝ]š]H]XÝ[Ûˆ
Q
H\È[˜X›Y
Y˜][
H\ÈÙ[\ÈÚ[ˆ[ˆÝ]]ÝX\™˜Z[ÛÝˆ
ˆšYÙÙ\™Y‚ˆ
‚ˆ
ˆ[ÝHØ[ˆ[ÛÈØ[\ÈY]Ù\™XÝHYˆ[ÝHØ[È[\œ\HÛÛ™\œØ][Ûˆ›Üˆ^[\Bˆ
ˆ˜\ÙYÛˆ[ˆ]™[[ˆHÛY[‚ˆ
‹Âˆ[\œ\
Ø[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙHHYJHÂˆYˆ
W×Üš]˜]QÙ]
\ËØÝ\œ™[][RY
H\[Ùˆ\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\OOH›[X™\ˆŠHÂˆ™]\›ŽÂˆBˆÛÛœÝ[\ÙY[YHH]K››ÝÊ
HH\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\ÂˆYˆ
[\ÙY[YHH
HÂˆ\Ë—Ú[\œ\
[\ÙY[YKØ[˜Ù[Û™ÛÚ[™Ô™\ÜÛœÙJNÂˆBˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\Ë™\Ù]]Y[Ô^X˜XÚÔÝ]WÙ›ŠK˜Ø[
\ÊNÂˆBŸNÂ—Ø\RÙ^LˆH™]ÈÙXZÓX\

NÂ—Ý\›ÈH™]ÈÙXZÓX\

NÂ—ÙY˜][\›H™]ÈÙXZÓX\

NÂ—ÜÝ]LˆH™]ÈÙXZÓX\

NÂ—Ý\ÙR[œÙXÝ\™P\RÙ^LˆH™]ÈÙXZÓX\

NÂ—ØÝ\œ™[][RYH™]ÈÙXZÓX\

NÂ—ØÝ\œ™[]Y[ÐÛÛ[[™^H™]ÈÙXZÓX\

NÂ—ØÜ™X]UÙX”ÛØÚÙ]H™]ÈÙXZÓX\

NÂ—ÜÚÚ\Ü[‘]™[\Ý[™\œÈH™]ÈÙXZÓX\

NÂ—Ü™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒˆH™]ÈÙXZÓX\

NÂ—ÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\ÈH™]ÈÙXZÔÙ]

NÂœ™\Ù]]Y[Ô^X˜XÚÔÝ]WÙ›ˆH[˜Ý[ÛŠ
HÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[][RY›ÚY
NÂˆ\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\H›ÚYÂˆ\Ë—Ø]Y[Ó[™Ý\ÈHÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[]Y[ÐÛÛ[[™^›ÚY
NÂŸNÂœÙ]\ÙX”ÛØÚÙ]Ù›ˆH\Þ[˜È[˜Ý[ÛŠ™\ÛÛ™K™Z™XÝÙ\ÜÚ[ÛÛÛ™šYÊHÂˆYˆ
×Üš]˜]QÙ]
\ËÜÝ]LŠKÙXœÛØÚÙ]
HÂˆ™\ÛÛ™J
NÂˆ™]\›ŽÂˆBˆYˆ
W×Üš]˜]QÙ]
\ËØ\RÙ^LŠJHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠTHÙ^H\È›ÝÙ]ˆX\ÙHØ[ÛÛ›™XÝ

XÚ][ˆTHÙ^Hš\œÝˆŠNÂˆBˆYˆ
\Ðœ›ÝÜÙ\‘[š\›Û›Y[Ê
H	‰ˆW×Üš]˜]QÙ]
\ËØ\RÙ^LŠKœÝ\ÕÚ]
™Z×ÈŠH	‰ˆW×Üš]˜]QÙ]
\ËÝ\ÙR[œÙXÝ\™P\RÙ^LŠJHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ•\Ú[™ÈHÙX”ÛØÚÙ]ÛÛ›™XÝ[Ûˆ[ˆHœ›ÝÜÙ\ˆ[š\›Û›Y[™\]Z\™\È[ˆ\[Y\˜[ÛY[Ù^KˆYˆ[ÝH]™HÈ\ÙHH™YÝ[\ˆTHÙ^KÙ]H\ÙR[œÙXÝ\™P\RÙ^XÜ[ÛˆÈYKˆŠNÂˆBˆ]ÜÈH[ÂˆYˆ
×Üš]˜]QÙ]
\ËØÜ™X]UÙX”ÛØÚÙ]
JHÂˆÜÈH]ØZ]×Üš]˜]QÙ]
\ËØÜ™X]UÙX”ÛØÚÙ]
K˜Ø[
\ËÂˆ\›ˆ×Üš]˜]QÙ]
\ËÝ\›ÊKˆ\RÙ^Nˆ×Üš]˜]QÙ]
\ËØ\RÙ^LŠBˆJNÂˆH[ÙHÂˆÛÛœÝÙXœÛØÚÙ]\™Ý[Y[ÈH\ÙUÙX”ÛØÚÙ]›ÝØÛÛÈÈÂˆœ™X[[YH‹ˆËÈ]]ˆ›Ü[˜ZKZ[œÙXÝ\™KX\KZÙ^Kˆˆ
È×Üš]˜]QÙ]
\ËØ\RÙ^LŠKˆËÈ™\œÚ[ÛˆXY\‚ˆÑP”ÓÐÒÑUÓQUBˆHˆÂˆXY\œÎˆÂˆ]]Üš^˜][ÛŽˆ™X\™\ˆ	××Üš]˜]QÙ]
\ËØ\RÙ^LŠ_Xˆ‹‹\Ë™Ù]ÛÛ[[Û”™\]Y\ÝXY\œÊ
BˆBˆNÂˆÜÈH™]ÈÙX”ÛØÚÙ]
×Üš]˜]QÙ]
\ËÝ\›ÊKÙXœÛØÚÙ]\™Ý[Y[ÊNÂˆBˆ×Üš]˜]TÙ]
\ËÜÝ]L‹ÂˆÝ]\Îˆ˜ÛÛ›™XÝ[™È‹ˆÙXœÛØÚÙ]ˆÜÂˆJNÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]LŠKœÝ]\ÊNÂˆÛÛœÝÛ”ÛØÚÙ]Ü[”™XYHH

HOˆÂˆ×Üš]˜]TÙ]
\ËÜÝ]L‹ÂˆÝ]\Îˆ˜ÛÛ›™XÝY‹ˆÙXœÛØÚÙ]ˆÜÂˆJNÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]LŠKœÝ]\ÊNÂˆ\Ë—ÛÛ“Ü[Š
NÂˆ™\ÛÛ™J
NÂˆNÂˆYˆ
×Üš]˜]QÙ]
\ËÜÚÚ\Ü[‘]™[\Ý[™\œÊHOOHYJHÂˆÛ”ÛØÚÙ]Ü[”™XYJ
NÂˆH[ÙHÂˆÜË˜Y]™[\Ý[™\Š›Ü[ˆ‹Û”ÛØÚÙ]Ü[”™XYJNÂˆBˆÜË˜Y]™[\Ý[™\Š™\œ›Üˆ‹
\œ›ÜLJHOˆÂˆ\Ë—ÛÛ‘\œ›ÜŠ\œ›ÜLJNÂˆ×Üš]˜]TÙ]
\ËÜÝ]L‹ÂˆÝ]\Îˆ™\ØÛÛ›™XÝY‹ˆÙXœÛØÚÙ]ˆ›ÚYˆJNÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]LŠKœÝ]\ÊNÂˆ™Z™XÝ
\œ›ÜLJNÂˆJNÂˆÜË˜Y]™[\Ý[™\Š›Y\ÜØYÙH‹
Y\ÜØYÙJHOˆÂˆ\Ë—ÛÛ“Y\ÜØYÙJY\ÜØYÙJNÂˆÛÛœÝÈ]Nˆ\œÙY\ÑÙ[™\šXÈHH\œÙT™X[[YQ]™[
Y\ÜØYÙJNÂˆYˆ
\\œÙY\ÑÙ[™\šXÊHÂˆ™]\›ŽÂˆBˆYˆ
\œÙY\HOOH™\œ›ÜˆŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠKš[™T™\ÜÛœÙPÜ™X]Q\œ›ÜŠ\œÙY
NÂˆBˆYˆ
\œÙY\HOOHœ™\ÜÛœÙK›Ý]]Ø]Y[Ë™[HŠHÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[]Y[ÐÛÛ[[™^\œÙY˜ÛÛ[Ú[™^
NÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[][RY\œÙYš][WÚY
NÂˆYˆ
\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\OOH›ÚY
HÂˆ\Ë—Ùš\œÝ]Y[Õ[Y\Ý[\H]K››ÝÊ
NÂˆ\Ë—Ø]Y[Ó[™Ý\ÈHÂˆBˆÛÛœÝY™ˆH˜\ÙMÐ\œ˜^PY™™\Š\œÙY™[JNÂˆÛÛœÝ›]H\Ë—Ü˜]ÔÙ\ÜÚ[ÛÛÛ™šYÏË˜]Y[ÏË›Ý]]Ë™›Ü›X]ÂˆYˆ
›]	‰ˆ\[Ùˆ›]OOH›Øš™XÝŠHÂˆÛÛœÝH›]\NÂˆYˆ
OOH˜]Y[ËÜÛ]HˆOOH˜]Y[ËÜÛXHŠHÂˆ\Ë—Ø]Y[Ó[™Ý\È
ÏHY™‹˜ž]S[™ÝÈÂˆH[ÙHYˆ
OOH˜]Y[ËÜÛHŠHÂˆÛÛœÝ˜]HH›]œ˜]HÏÈLÎÂˆ\Ë—Ø]Y[Ó[™Ý\È
ÏHY™‹˜ž]S[™ÝÈˆÈ˜]H
ˆYLÎÂˆH[ÙHÂˆ\Ë—Ø]Y[Ó[™Ý\È
ÏHY™‹˜ž]S[™ÝÈÈŽÂˆBˆH[ÙHYˆ
\[Ùˆ›]OOHœÝš[™ÈŠHÂˆYˆ
›]œÝ\ÕÚ]
™ÍÌLWÈŠJHÂˆ\Ë—Ø]Y[Ó[™Ý\È
ÏHY™‹˜ž]S[™ÝÈÂˆH[ÙHÂˆ\Ë—Ø]Y[Ó[™Ý\È
ÏHY™‹˜ž]S[™ÝÈÈŽÂˆBˆH[ÙHÂˆ\Ë—Ø]Y[Ó[™Ý\È
ÏHY™‹˜ž]S[™ÝÈÈŽÂˆBˆÛÛœÝ]Y[Ñ]™[HÂˆ\Nˆ˜]Y[È‹ˆ]NˆY™‹ˆ™\ÜÛœÙRYˆ\œÙYœ™\ÜÛœÙWÚYˆNÂˆ\Ë—ÛÛ]Y[Ê]Y[Ñ]™[
NÂˆH[ÙHYˆ
\œÙY\HOOHš[œ]Ø]Y[×ØY™™\‹œÜYXÚÜÝ\YŠHÂˆÛÛœÝ]]ÛX]XÔ™\ÜÛœÙPØ[˜Ù[][Û‘[˜X›YH\Ë—Ü˜]ÔÙ\ÜÚ[ÛÛÛ™šYÏË˜]Y[ÏËš[œ]Ë\›—Ù]XÝ[ÛËš[\œ\Ü™\ÜÛœÙHÏÈ˜[ÙNÂˆ\Ëš[\œ\
X]]ÛX]XÔ™\ÜÛœÙPØ[˜Ù[][Û‘[˜X›Y
NÂˆH[ÙHYˆ
\œÙY\HOOHœ™\ÜÛœÙK˜Ü™X]YŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠK›X\šÔ™\ÜÛœÙPÜ™X]Y

NÂˆH[ÙHYˆ
\œÙY\HOOHœ™\ÜÛœÙK™Û™HŠHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠK›X\šÔ™\ÜÛœÙQÛ™J
NÂˆH[ÙHYˆ
\œÙY\HOOHœÙ\ÜÚ[Û‹˜Ü™X]YŠHÂˆ\Ë—Ý˜XÚ[™ÐÛÛ™šYÈH\œÙYœÙ\ÜÚ[Û‹˜XÚ[™ÎÂˆÛÛœÝ˜XÚ[™ÐÛÛ™šYÈH\[ÙˆÙ\ÜÚ[ÛÛÛ™šYË˜XÚ[™ÈOOH[™Yš[™YˆÈ˜]]ÈˆˆÙ\ÜÚ[ÛÛÛ™šYË˜XÚ[™ÎÂˆ\Ë—Ý\]U˜XÚ[™ÐÛÛ™šYÊ˜XÚ[™ÐÛÛ™šYÊNÂˆBˆJNÂˆÜË˜Y]™[\Ý[™\Š˜ÛÜÙH‹

HOˆÂˆ×Üš]˜]TÙ]
\ËÜÝ]L‹ÂˆÝ]\Îˆ™\ØÛÛ›™XÝY‹ˆÙXœÛØÚÙ]ˆ›ÚYˆJNÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙPÜ™X]TÙ\]Y[˜Ù\ŒŠKœ™[X\ÙUØZ]\œÊ
NÂˆ\Ë™[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹×Üš]˜]QÙ]
\ËÜÝ]LŠKœÝ]\ÊNÂˆ\Ë—ÛÛÛÜÙJ
NÂˆJNÂŸNÂ˜\ÜÙ\ÛÛ›™XÝYÙ›ŒˆH[˜Ý[ÛŠ
HÂˆYˆ
W×Üš]˜]QÙ]
\ËÜÝ]LŠKÙXœÛØÚÙ]
HÂˆ›ÝÈ™]È\œ›ÜŠ•ÙX”ÛØÚÙ]\È›ÝÛÛ›™XÝYˆXZÙHÝ\™H[ÝHØ[ÛÛ›™XÝ

X™Y›Ü™HÙ[™[™È]™[ËˆŠNÂˆBŸNÂœÙ[™]™[›Ý×Ù›ŒˆH[˜Ý[ÛŠ]™[
HÂˆ×Üš]˜]SY]Ù
\ËÓÜ[RT™X[[YUÙX”ÛØÚÙ]Ú[œÝ[˜Ù\Ë\ÜÙ\ÛÛ›™XÝYÙ›ŒŠK˜Ø[
\ÊNÂˆ×Üš]˜]QÙ]
\ËÜÝ]LŠKÙXœÛØÚÙ]œÙ[™
”ÓÓ‹œÝš[™ÚYžJ]™[
JNÂŸNÂ‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÝÛÛ›ZœÂš[š]Ý][ÌŠ
NÂ˜\ˆPÒÑÔ“ÕS‘Ô‘TÕSÔÖSP“ÓHÊˆ×ÔT‘W×È
‹ÈÞ[X›Û
˜˜XÚÙÜ›Ý[™™\Ý[ŠNÂ™[˜Ý[Ûˆ\Ð˜XÚÙÜ›Ý[™™\Ý[
™\Ý[
HÂˆ™]\›ˆ\[Ùˆ™\Ý[OOH›Øš™XÝˆ	‰ˆ™\Ý[OOH[	‰ˆPÒÑÔ“ÕS‘Ô‘TÕSÔÖSP“Ó[ˆ™\Ý[ÂŸB™[˜Ý[Ûˆ\Õ˜[Y™X[[YUÛÛ
ÛÛŠHÂˆ™]\›ˆÛÛ‹\HOOH™[˜Ý[ÛˆˆÛÛ‹\HOOHšÜÝYÝÛÛˆ	‰ˆÛÛ‹›˜[YHOOHšÜÝYÛXÜŽÂŸB™[˜Ý[Ûˆ˜[Y]T™X[[YUÛÛ˜[Y\ÊÛÛË[™Ù™œÊHÂˆÛÛœÝÛÝ\˜Ù\ÐžS˜[YHHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝÛÛˆÙˆÛÛÊHÂˆÛÛœÝÛÝ\˜Ù\ÈHÛÝ\˜Ù\ÐžS˜[YK™Ù]
ÛÛ‹›˜[YJHÏÈ×NÂˆÛÝ\˜Ù\Ëœ\Ú
™[˜Ý[ÛˆÛÛŠNÂˆÛÝ\˜Ù\ÐžS˜[YKœÙ]
ÛÛ‹›˜[YKÛÝ\˜Ù\ÊNÂˆBˆ›Üˆ
ÛÛœÝ[™Ù™ŒˆÙˆ[™Ù™œÊHÂˆÛÛœÝÛÝ\˜Ù\ÈHÛÝ\˜Ù\ÐžS˜[YK™Ù]
[™Ù™Œ‹ÛÛ˜[YJHÏÈ×NÂˆÛÝ\˜Ù\Ëœ\Ú
š[™Ù™ˆŠNÂˆÛÝ\˜Ù\ÐžS˜[YKœÙ]
[™Ù™Œ‹ÛÛ˜[YKÛÝ\˜Ù\ÊNÂˆBˆÛÛœÝ\XØ]Q\ØÜš\[ÛœÈHË‹‹œÛÝ\˜Ù\ÐžS˜[YK™[šY\Ê
WK™š[\Š
ËÛÝ\˜Ù\×JHOˆÛÝ\˜Ù\Ë›[™ÝˆJKœÛÜ

ÛYKÜšYÚJHOˆY›ØØ[PÛÛ\\™JšYÚ
JK›X\

Û˜[YKÛÝ\˜Ù\×JHOˆ	ÉÛ˜[Y_IÈ
	Ù›Ü›X]™X[[YUÛÛÛÝ\˜Ù\ÊÛÝ\˜Ù\Ê_JX
NÂˆYˆ
\XØ]Q\ØÜš\[ÛœË›[™ÝOOH
HÂˆ™]\›ŽÂˆBˆÛÛœÝX™[H\XØ]Q\ØÜš\[ÛœË›[™ÝOOHHÈ›˜[YHˆˆ›˜[Y\ÈŽÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ\XØ]H™X[[YHÛÛ	ÛX™[H›Ý[™ˆ	Ù\XØ]Q\ØÜš\[ÛœËš›Ú[Š‹Š_Kˆ™X[[YH[˜Ý[ÛˆÛÛ[™[™Ù™ˆ˜[Y\È]\Ý™H[š\]YKˆ™[˜[YHÛ™HÙˆ[H™Y›Ü™HÝ\[™ÈHÙ\ÜÚ[Û‹˜
NÂŸB™[˜Ý[Ûˆ›Ü›X]™X[[YUÛÛÛÝ\˜Ù\ÊÛÝ\˜Ù\ÊHÂˆÛÛœÝÛÝ[ÈHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝÛÝ\˜ÙHÙˆÛÝ\˜Ù\ÊHÂˆÛÝ[ËœÙ]
ÛÝ\˜ÙK
ÛÝ[Ë™Ù]
ÛÝ\˜ÙJHÏÈ
H
ÈJNÂˆBˆÛÛœÝ\ØÜš\[ÛœÈHË‹‹˜ÛÝ[Ë™[šY\Ê
WK›X\

ÜÛÝ\˜ÙKÛÝ[JHOˆÛÝ[OOHHÈÛÝ\˜ÙHˆ	ØÛÝ[H	ÜÛÝ\˜Ù_\Ø
NÂˆYˆ
\ØÜš\[ÛœË›[™ÝOOHJHÂˆ™]\›ˆ\ØÜš\[ÛœÖÌNÂˆBˆYˆ
\ØÜš\[ÛœË›[™ÝOOHŠHÂˆ™]\›ˆ	Ù\ØÜš\[ÛœÖÌ_H[™	Ù\ØÜš\[ÛœÖÌW_XÂˆBˆ™]\›ˆ	Ù\ØÜš\[ÛœËœÛXÙJLJKš›Ú[Š‹Š_K[™	Ù\ØÜš\[ÛœË˜]
LJ_XÂŸB™[˜Ý[ÛˆÔ™X[[YUÛÛYš[š][ÛŠÛÛŠHÂˆYˆ
ÛÛ‹\HOOH™[˜Ý[ÛˆŠHÂˆ™]\›ˆÛÛŽÂˆBˆYˆ
ÛÛ‹\HOOHšÜÝYÝÛÛˆ	‰ˆÛÛ‹›˜[YHOOHšÜÝYÛXÜŠHÂˆÛÛœÝÙ\™\•\›HÛÛ‹œ›ÝšY\‘]KœÙ\™\—Ý\›	‰ˆÛÛ‹œ›ÝšY\‘]KœÙ\™\—Ý\››[™ÝˆÈÛÛ‹œ›ÝšY\‘]KœÙ\™\—Ý\›ˆ›ÚYÂˆÛÛœÝ™\]Z\™P\›Ý˜[H\[ÙˆÛÛ‹œ›ÝšY\‘]Kœ™\]Z\™WØ\›Ý˜[OOH[™Yš[™YˆÈ›ÚYˆ›Ü›X[^™RÜÝYXÜ™\]Z\™P\›Ý˜[
ÛÛ‹œ›ÝšY\‘]Kœ™\]Z\™WØ\›Ý˜[
NÂˆ™]\›ˆÂˆ\Nˆ›XÜ‹ˆÙ\™\—ÛX™[ˆÛÛ‹œ›ÝšY\‘]KœÙ\™\—ÛX™[ˆÙ\™\—Ý\›ˆÙ\™\•\›ˆXY\œÎˆÛÛ‹œ›ÝšY\‘]KšXY\œËˆ[ÝÙYÝÛÛÎˆÛÛ‹œ›ÝšY\‘]K˜[ÝÙYÝÛÛËˆ‹‹\[Ùˆ™\]Z\™P\›Ý˜[OOH[™Yš[™YˆÈßHˆÈ™\]Z\™WØ\›Ý˜[ˆ™\]Z\™P\›Ý˜[BˆNÂˆBˆ›ÝÈ™]È\Ù\‘\œ›ÜŠ[˜[YÛÛ\Nˆ	ÝÛÛŸX
NÂŸB‚‹ËÈ‹‹Ë‹‹ÝÛÜšÜÜXÙKÜØÜ˜]ÚÍLŒNXŒÌ‹ØYÜš[™^\ËÛ›ÙWÛ[Ù[\ËÐÜ[˜ZKØYÙ[Ë\™X[[YKÙ\ÝÜ™X[[YTÙ\ÜÚ[Û‹›ZœÂ™[˜Ý[ÛˆÛÛ™QY˜][Ù\ÜÚ[ÛÛÛ™šYÊ
HÂˆ™]\›ˆ”ÓÓ‹œ\œÙJ”ÓÓ‹œÝš[™ÚYžJQUSÓÔSRWÔ‘PSSQWÔÑTÔÒSÓ—ÐÓÓ‘’QÊJNÂŸB™[˜Ý[Ûˆ˜[Y]T™X[[YUÛÛ^XÝ][ÛÛÛ™šYÊÛÛ™šYÌŠHÂˆYˆ
\[ÙˆÛÛ™šYÌËœ™P\›Ý˜[[œ]ÝX\™˜Z[ÈOOH[™Yš[™Yˆ	‰ˆ\[ÙˆÛÛ™šYÌ‹œ™P\›Ý˜[[œ]ÝX\™˜Z[ÈOOH˜›ÛÛX[ˆŠHÂˆ›ÝÈ™]È\Ù\‘\œ›ÜŠÛÛ^XÝ][Û‹œ™P\›Ý˜[[œ]ÝX\™˜Z[È]\Ý™HH›ÛÛX[ˆÚ[ˆ›ÝšYYˆŠNÂˆBˆ™]\›ˆÛÛ™šYÌŽÂŸB˜\ˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑLˆH•ÛÛ^XÝ][ÛˆØ\È›Ý\›Ý™YˆŽÂ™[˜Ý[Ûˆ›Ü›X[^™T™X[[YQ[˜Ý[ÛØ[Y
ÛÛØ[
HÂˆÛÛœÝØ[YHÛÛØ[˜Ø[YÛÛØ[šYˆŽÂˆ™]\›ˆØ[YOOHÛÛØ[˜Ø[YÈÛÛØ[ˆÈ‹‹ÛÛØ[Ø[YNÂŸB™[˜Ý[ÛˆÙ]Ý\Y™\ÜÛœÙRY
]™[
HÂˆÛÛœÝ™\ÜÛœÙHH]™[œ›ÝšY\‘]OËœ™\ÜÛœÙNÂˆYˆ
\[Ùˆ™\ÜÛœÙHOOH›Øš™XÝˆ™\ÜÛœÙHOOH[
HÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ™\ÜÛœÙRYH™\ÜÛœÙKšYÂˆ™]\›ˆ\[Ùˆ™\ÜÛœÙRYOOHœÝš[™ÈˆÈ™\ÜÛœÙRYˆ›ÚYÂŸB™[˜Ý[ÛˆÑ\œ›Ü“Y\ÜØYÙM
\œ›ÜLJHÂˆ™]\›ˆ\œ›ÜLH[œÝ[˜Ù[Ùˆ\œ›ÜˆÈ\œ›ÜLK›Y\ÜØYÙHˆÝš[™Ê\œ›ÜLJNÂŸB˜\ˆÝ˜[œÜÜØÝ\œ™[YÙ[ØÝ\œ™[ÛÛËØÝ\œ™[\Ü]ÚÛ˜\ÚÝÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝËÜ[™[™Ñ[˜Ý[ÛØ[ËØÛÛ^ÛÝ]]ÝX\™˜Z[ËÛÝ]]ÝX\™˜Z[Ù][™ÜËÝ˜[œØÜšX™Y^[\ËÚ\ÝÜžKÜÚÝ[[˜ÛYP]Y[Ñ]KÚ[\œ\YžQÝX\™˜Z[Ø]Y[ÔÝ\YØ[XÜÛÛÐžTÙ\™\‹Ø]˜Z[X›SXÜÛÛËÛ\ÝÙ\ÜÚ[ÛÛÛ™šYËØ]]ÛX]XØ[UšYÙÙ\”™\ÜÛœÙQ›Ü“XÜÛÛØ[ËÝÛÛ^XÝ][Û‹Ù]™[\Ý[™\œÐ]XÚYÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\\™PYÙ[Ù›‹\T™\\™YYÙ[Ù›‹Ù]Ý\œ™[YÙ[Ù›‹Ø\\™T™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÙ›‹Ù]Ù\ÜÚ[ÛÛÛ™šY×Ù›‹[™R[™Ù™—Ù›‹™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙWÙ›‹[™Q[˜Ý[Û•ÛÛØ[Ù›‹[™Q[˜Ý[ÛØ[Ù›‹[“Ý]]ÝX\™˜Z[×Ù›‹Ù]]™[\Ý[™\œ×Ù›‹\]P]˜Z[X›SXÜÛÛ×Ù›‹™\ÛÛ™T[™[™Ñ[˜Ý[ÛØ[Ù›ŽÂ˜\ˆÔ™X[[YTÙ\ÜÚ[ÛˆHÛ\ÜÈÔ™X[[YTÙ\ÜÚ[Ûˆ^[™Èœ›ÝÜÙ\‘]™[[Z]\ˆÂˆÛÛœÝXÝÜŠ[š]X[YÙ[Ü[ÛœÈHßJHÂˆÝ\\Š
NÂˆ×Üš]˜]PY
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ÊNÂˆ×ÜX›XÑšY[
\Ëš[š]X[YÙ[ŠNÂˆ×ÜX›XÑšY[
\Ë›Ü[ÛœÈŠNÂˆ×Üš]˜]PY
\ËÝ˜[œÜÜ
NÂˆ×Üš]˜]PY
\ËØÝ\œ™[YÙ[
NÂˆ×Üš]˜]PY
\ËØÝ\œ™[ÛÛÊNÂˆ×Üš]˜]PY
\ËØÝ\œ™[\Ü]ÚÛ˜\ÚÝ
NÂˆ×Üš]˜]PY
\ËÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝËÊˆ×ÔT‘W×È
‹È™]ÈX\

JNÂˆ×Üš]˜]PY
\ËÜ[™[™Ñ[˜Ý[ÛØ[ËÊˆ×ÔT‘W×È
‹È™]ÈX\

JNÂˆ×Üš]˜]PY
\ËØÛÛ^
NÂˆ×Üš]˜]PY
\ËÛÝ]]ÝX\™˜Z[Ë×JNÂˆ×Üš]˜]PY
\ËÛÝ]]ÝX\™˜Z[Ù][™ÜÊNÂˆ×Üš]˜]PY
\ËÝ˜[œØÜšX™Y^[\ËßJNÂˆ×Üš]˜]PY
\ËÚ\ÝÜžK×JNÂˆ×Üš]˜]PY
\ËÜÚÝ[[˜ÛYP]Y[Ñ]JNÂˆ×Üš]˜]PY
\ËÚ[\œ\YžQÝX\™˜Z[ßJNÂˆ×Üš]˜]PY
\ËØ]Y[ÔÝ\Y˜[ÙJNÂˆËÈ˜XÚÜÈ[PÔÛÛÈ™]ÚY\ˆÙ\™\ˆX™[
œ›ÛHXÜÛ\ÝÝÛÛÈ™\Ý[ÊK‚ˆ×Üš]˜]PY
\ËØ[XÜÛÛÐžTÙ\™\‹Êˆ×ÔT‘W×È
‹È™]ÈX\

JNÂˆËÈ˜XÚÜÈÝ\œ™[H]˜Z[X›HPÔÛÛÈ˜\ÙYÛˆHXÝ]™HYÙ[	ÜÈÛÛ™šYÝ\™YÙ\™\—ÛX™[Ë‚ˆ×Üš]˜]PY
\ËØ]˜Z[X›SXÜÛÛË×JNÂˆËÈÙY\È˜XÚÈÙˆH\Ý[Ù\ÜÚ[ÛˆÛÛ™šYÈÙHÙ[
Ø[Y[Ø\ÙHÙ^\ÊHÛÈ]ˆËÈÝXœÙ\]Y[\]\È
K™Ëˆ\š[™ÈYÙ[[™Ù™œÊH™\Ù\™H›Ü\Y\È]\™BˆËÈ›Ý^XÚ]H™XØ[Ý[]Y\™H
ÝXÚ\È[œ]]Y[Ñ›Ü›X]Ý]]]Y[Ñ›Ü›X]ˆËÈ[Ù[]Y\ËÜYYÛÛÚÚXÙK\›‘]XÝ[Û‹]ËŠKˆÚ]Ý]\Ë\][™ÂˆËÈHYÙ[ÛÝ[›Ü]Y[È›Ü›X]Ý™\œšY\È
K™ËˆÍÌLWÝ[]ÊH[™™]™\ÂˆËÈ˜[œÜÜY˜][ÈØ]\Ú[™È\ÜÝY\È›Üˆ[YÜ˜][ÛœÈZÙHÚ[[Ë‚ˆ×Üš]˜]PY
\ËÛ\ÝÙ\ÜÚ[ÛÛÛ™šYËÛÛ™QY˜][Ù\ÜÚ[ÛÛÛ™šYÊ
JNÂˆ×Üš]˜]PY
\ËØ]]ÛX]XØ[UšYÙÙ\”™\ÜÛœÙQ›Ü“XÜÛÛØ[ËYJNÂˆ×Üš]˜]PY
\ËÝÛÛ^XÝ][ÛŠNÂˆ×Üš]˜]PY
\ËÙ]™[\Ý[™\œÐ]XÚY˜[ÙJNÂˆ\Ëš[š]X[YÙ[H[š]X[YÙ[Âˆ\Ë›Ü[ÛœÈHÜ[ÛœÎÂˆYˆ
\[ÙˆÜ[ÛœË˜[œÜÜOOH[™Yš[™Yˆ	‰ˆ\ÕÙX”•ÔÝ\Ü

HÜ[ÛœË˜[œÜÜOOHÙXœÈŠHÂˆ×Üš]˜]TÙ]
\ËÝ˜[œÜÜ™]ÈÜ[RT™X[[YUÙX”•Ê
JNÂˆH[ÙHYˆ
Ü[ÛœË˜[œÜÜOOHÙXœÛØÚÙ]ˆ\[ÙˆÜ[ÛœË˜[œÜÜOOH[™Yš[™YŠHÂˆ×Üš]˜]TÙ]
\ËÝ˜[œÜÜ™]ÈÜ[RT™X[[YUÙX”ÛØÚÙ]

JNÂˆH[ÙHÂˆ×Üš]˜]TÙ]
\ËÝ˜[œÜÜÜ[ÛœË˜[œÜÜ
NÂˆBˆ×Üš]˜]TÙ]
\ËØÝ\œ™[YÙ[[š]X[YÙ[
NÂˆ×Üš]˜]TÙ]
\ËØÛÛ^™]È[ÛÛ^
Âˆ‹‹›Ü[ÛœË˜ÛÛ^ÏÈßKˆ\ÝÜžNˆ×Üš]˜]QÙ]
\ËÚ\ÝÜžJBˆJJNÂˆ×Üš]˜]TÙ]
\ËÛÝ]]ÝX\™˜Z[Ë
Ü[ÛœË›Ý]]ÝX\™˜Z[ÈÏÈ×JK›X\
Yš[™T™X[[YSÝ]]ÝX\™˜Z[
JNÂˆ×Üš]˜]TÙ]
\ËÛÝ]]ÝX\™˜Z[Ù][™ÜËÙ]™X[[YQÝX\™˜Z[Ù][™ÜÊÜ[ÛœË›Ý]]ÝX\™˜Z[Ù][™ÜÈÏÈßJJNÂˆ×Üš]˜]TÙ]
\ËÜÚÝ[[˜ÛYP]Y[Ñ]KÜ[ÛœËš\ÝÜžTÝÜ™P]Y[ÈÏÈ˜[ÙJNÂˆ×Üš]˜]TÙ]
\ËØ]]ÛX]XØ[UšYÙÙ\”™\ÜÛœÙQ›Ü“XÜÛÛØ[ËÜ[ÛœË˜]]ÛX]XØ[UšYÙÙ\”™\ÜÛœÙQ›Ü“XÜÛÛØ[ÈÏÈYJNÂˆ×Üš]˜]TÙ]
\ËÝÛÛ^XÝ][Û‹˜[Y]T™X[[YUÛÛ^XÝ][ÛÛÛ™šYÊÜ[ÛœËÛÛ^XÝ][ÛŠJNÂˆBˆÊŠ‚ˆ
ˆH˜[œÜÜ^Y\ˆ\ÙYžHHÙ\ÜÚ[Û‹‚ˆ
‹ÂˆÙ]˜[œÜÜ

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
NÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[YÙ[[ˆHÙ\ÜÚ[Û‹‚ˆ
‹ÂˆÙ]Ý\œ™[YÙ[

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
NÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[\ØYÙHÙˆHÙ\ÜÚ[Û‹‚ˆ
‹ÂˆÙ]\ØYÙJ
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØÛÛ^
K\ØYÙNÂˆBˆÊŠ‚ˆ
ˆHÝ\œ™[ÛÛ^ÙˆHÙ\ÜÚ[Û‹‚ˆ
‹ÂˆÙ]ÛÛ^

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØÛÛ^
NÂˆBˆÊŠ‚ˆ
ˆÚ]\ˆHÙ\ÜÚ[Ûˆ\È]]YˆZYÚ™H[YˆH[™\›Z[™È˜[œÜÜ^Y\ˆÙ\È›Ýˆ
ˆÝ\Ü]][™Ë‚ˆ
‹ÂˆÙ]]]Y

HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›]]YÂˆBˆÊŠ‚ˆ
ˆH\ÝÜžHÙˆHÙ\ÜÚ[Û‹‚ˆ
‹ÂˆÙ]\ÝÜžJ
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËÚ\ÝÜžJNÂˆBˆÙ]]˜Z[X›SXÜÛÛÊ
HÂˆ™]\›ˆ×Üš]˜]QÙ]
\ËØ]˜Z[X›SXÜÛÛÊNÂˆBˆÊŠ‚ˆ
ˆÛÛ\]HH[š]X[Ù\ÜÚ[ÛˆÛÛ™šYÈ]HÝ\œ™[Ù\ÜÚ[ÛˆÚ[\ÙHÚ[ˆÛÛ›™XÝ[™Ë‚ˆ
‚ˆ
ˆ\ÈZ\œ›ÜœÈHÛÛ™šYÝ\˜][Ûˆ^[ØYÙHÙ[™\š[™ÈÛÛ›™XÝ[˜ÛY[™È[˜[ZXÈ˜[Y\Âˆ
ˆÝXÚ\ÈH\Ý™X[HYÙ[[œÝXÝ[ÛœËÛÛYš[š][ÛœË[™›Û\ÛÛ[Ù[™\˜]Y]ˆ
ˆ[[YKˆÙY\[™È\È[\ˆ^ÜÙY[ÝÜÈ˜[œÜÜÈÜˆÜ˜Ú\Ý˜][Ûˆ^Y\œÈÈ™XÛÛ\]Bˆ
ˆHØ[XØÙ\XÛÛ\]X›H^[ØYÚ]Ý]Ü[š[™ÈHÛØÚÙ]‚ˆ
‚ˆ
ˆ\˜[HÝ™\œšY\ÈHY][Û˜[ÛÛ™šYÈÝ™\œšY\È\YYÛˆÜÙˆHÙ\ÜÚ[ÛˆÜ[ÛœË‚ˆ
‹Âˆ\Þ[˜ÈÙ][š]X[Ù\ÜÚ[ÛÛÛ™šYÊÝ™\œšY\ÈHßJHÂˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]Ý\œ™[YÙ[Ù›ŠK˜Ø[
\Ë\Ëš[š]X[YÙ[
NÂˆ™]\›ˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]Ù\ÜÚ[ÛÛÛ™šY×Ù›ŠK˜Ø[
\ËÂˆ‹‹\Ë›Ü[ÛœË˜ÛÛ™šYÈÏÈßKˆ‹‹›Ý™\œšY\ÈÏÈßBˆJNÂˆBˆÊŠ‚ˆ
ˆÛÛ™[šY[˜ÙH[\ˆÈÛÛ\]HH[š]X[Ù\ÜÚ[ÛˆÛÛ™šYÈÚ]Ý]X[X[H[œÝ[X][™È[™ÛÛ›™XÝ[™ÈHÙ\ÜÚ[Û‹‚ˆ
‚ˆ
ˆ\È\Èš[X\š[H\ÙY[›Üˆ[YÜ˜][ÛœÈ]]\Ý›ÝšYHHÙ\ÜÚ[ÛˆÛÛ™šYÝ\˜][ÛˆÈBˆ
ˆ\™\H
›Üˆ^[\HHÒTØ[Ë˜XØÙ\[™Ú[
H™Y›Ü™HHXÝX[™X[[YHÙ\ÜÚ[Û‚ˆ
ˆ\È]XÚYˆH[\ˆ[œÝ[X]\ÈH›ÝØ]Ø^HÙ\ÜÚ[ÛˆÛÈ[YÙ[Yš]™[ˆ[˜[ZXÈšY[Âˆ
ˆ™\ÛÛ™H[ˆ^XÝHHØ[YHØ^H\ÈH]™HÙ\ÜÚ[Ûˆ]‚ˆ
‚ˆ
ˆ\˜[HYÙ[HHÝ\[™ÈYÙ[›ÜˆHÙ\ÜÚ[Û‹‚ˆ
ˆ\˜[HÜ[ÛœÈHÙ\ÜÚ[ÛˆÜ[ÛœÈ\ÙYÈÙYYHÛÛ™šYÈØ[Ý[][Û‹‚ˆ
ˆ\˜[HÝ™\œšY\ÈHY][Û˜[ÛÛ™šYÈÝ™\œšY\È\YYÛˆÜÙˆH›ÝšYYÜ[ÛœË‚ˆ
‹ÂˆÝ]XÈ\Þ[˜ÈÛÛ\]R[š]X[Ù\ÜÚ[ÛÛÛ™šYÊYÙ[Ü[ÛœÈHßKÝ™\œšY\ÈHßJHÂˆÛÛœÝÙ\ÜÚ[ÛˆH™]ÈÔ™X[[YTÙ\ÜÚ[ÛŠYÙ[Ü[ÛœÊNÂˆžHÂˆ™]\›ˆ]ØZ]Ù\ÜÚ[Û‹™Ù][š]X[Ù\ÜÚ[ÛÛÛ™šYÊÝ™\œšY\ÊNÂˆHš[˜[HÂˆÙ\ÜÚ[Û‹˜ÛÜÙJ
NÂˆBˆBˆ\Þ[˜È\]PYÙ[
™]ÐYÙ[
HÂˆÛÛœÝ™\\™YH]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\\™PYÙ[Ù›ŠK˜Ø[
\Ë™]ÐYÙ[
NÂˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K™[Z]
˜YÙ[Ú[™Ù™ˆ‹×Üš]˜]QÙ]
\ËØÛÛ^
K™]ÐYÙ[
NÂˆ\Ë™[Z]
˜YÙ[Ú[™Ù™ˆ‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K™]ÐYÙ[
NÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë\T™\\™YYÙ[Ù›ŠK˜Ø[
\Ë™\\™Y
NÂˆ]ØZ]×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K\]TÙ\ÜÚ[ÛÛÛ™šYÊ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]Ù\ÜÚ[ÛÛÛ™šY×Ù›ŠK˜Ø[
\ÊJNÂˆ™]\›ˆ™]ÐYÙ[ÂˆBˆÊŠ‚ˆ
ˆÛÛ›™XÝÈHÙ\ÜÚ[Û‹ˆ\ÈÚ[\ÝX›\ÚHÛÛ›™XÝ[ÛˆÈH[™\›Z[™È˜[œÜÜ^Y\‚ˆ
ˆ[™Ý\HÙ\ÜÚ[Û‹‚ˆ
‚ˆ
ˆY\ˆÛÛ›™XÝ[™ËHÙ\ÜÚ[ÛˆÚ[[ÛÈ[Z]H\ÝÜžWÝ\]Y]™[Ú][ˆ[\H\ÝÜžK‚ˆ
‚ˆ
ˆ\˜[HÜ[ÛœÈHHÜ[ÛœÈ›ÜˆHÛÛ›™XÝ[Û‹‚ˆ
‹Âˆ\Þ[˜ÈÛÛ›™XÝ
Ü[ÛœÊHÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÊK˜ÛX\Š
NÂˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]Ý\œ™[YÙ[Ù›ŠK˜Ø[
\Ë\Ëš[š]X[YÙ[
NÂˆYˆ
W×Üš]˜]QÙ]
\ËÙ]™[\Ý[™\œÐ]XÚY
JHÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]]™[\Ý[™\œ×Ù›ŠK˜Ø[
\ÊNÂˆ×Üš]˜]TÙ]
\ËÙ]™[\Ý[™\œÐ]XÚYYJNÂˆBˆ]ØZ]×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K˜ÛÛ›™XÝ
Âˆ\RÙ^NˆÜ[ÛœË˜\RÙ^HÏÈ\Ë›Ü[ÛœË˜\RÙ^Kˆ[Ù[ˆ\Ë›Ü[ÛœË›[Ù[ˆ\›ˆÜ[ÛœË\›ˆØ[YˆÜ[ÛœË˜Ø[Yˆ[š]X[Ù\ÜÚ[ÛÛÛ™šYÎˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]Ù\ÜÚ[ÛÛÛ™šY×Ù›ŠK˜Ø[
\Ë\Ë›Ü[ÛœË˜ÛÛ™šYÊBˆJNÂˆ×Üš]˜]TÙ]
\ËÚ\ÝÜžK×JNÂˆ\Ë™[Z]
š\ÝÜžWÝ\]Y‹×Üš]˜]QÙ]
\ËÚ\ÝÜžJJNÂˆBˆÊŠ‚ˆ
ˆ\]HH\ÝÜžHÙˆHÙ\ÜÚ[Û‹‚ˆ
ˆ\˜[H™]Ò\ÝÜžHHH™]È\ÝÜžHÈÙ]‚ˆ
‹Âˆ\]R\ÝÜžJ™]Ò\ÝÜžJHÂˆ]\]Y\ÝÜžNÂˆYˆ
\[Ùˆ™]Ò\ÝÜžHOOH™[˜Ý[ÛˆŠHÂˆ\]Y\ÝÜžHH™]Ò\ÝÜžJ×Üš]˜]QÙ]
\ËÚ\ÝÜžJJNÂˆH[ÙHÂˆ\]Y\ÝÜžHH™]Ò\ÝÜžNÂˆBˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
Kœ™\Ù]\ÝÜžJ×Üš]˜]QÙ]
\ËÚ\ÝÜžJK\]Y\ÝÜžJNÂˆBˆÊŠ‚ˆ
ˆÙ[™HY\ÜØYÙHÈHÙ\ÜÚ[Û‹‚ˆ
ˆ\˜[HY\ÜØYÙHHHY\ÜØYÙHÈÙ[™‚ˆ
ˆ\˜[HÝ\‘]™[]HHY][Û˜[]™[]HÈÙ[™‚ˆ
‹ÂˆÙ[™Y\ÜØYÙJY\ÜØYÙKÝ\‘]™[]HHßJHÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™Y\ÜØYÙJY\ÜØYÙKÝ\‘]™[]JNÂˆBˆÊŠ‚ˆ
ˆY[XYÙHÈHÙ\ÜÚ[Û‚ˆ
ˆ\˜[H[XYÙHHH[XYÙHÈY‚ˆ
‹ÂˆY[XYÙJ[XYÙKÈšYÙÙ\”™\ÜÛœÙHHYHHHßJHÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K˜Y[XYÙJ[XYÙKÈšYÙÙ\”™\ÜÛœÙHJNÂˆBˆÊŠ‚ˆ
ˆ]]HHÙ\ÜÚ[Û‹‚ˆ
ˆ\˜[H]]YHÚ]\ˆÈ]]HHÙ\ÜÚ[Û‹‚ˆ
‹Âˆ]]J]]Y
HÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›]]J]]Y
NÂˆBˆÊŠ‚ˆ
ˆ\ØÛÛ›™XÝœ›ÛHHÙ\ÜÚ[Û‹‚ˆ
‹ÂˆÛÜÙJ
HÂˆ×Üš]˜]TÙ]
\ËÚ[\œ\YžQÝX\™˜Z[ßJNÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊK˜ÛX\Š
NÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÊK˜ÛX\Š
NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K˜ÛÜÙJ
NÂˆBˆÊŠ‚ˆ
ˆÙ[™]Y[ÈÈHÙ\ÜÚ[Û‹‚ˆ
ˆ\˜[H]Y[ÈHH]Y[ÈÈÙ[™‚ˆ
ˆ\˜[HÜ[ÛœÈHY][Û˜[Ü[ÛœË‚ˆ
ˆ\˜[HÜ[ÛœË˜ÛÛ[Z]HÚ]\ˆÈš[š\ÚH\›ˆÚ]\È]Y[Ë‚ˆ
‹ÂˆÙ[™]Y[Ê]Y[ËÜ[ÛœÈHßJHÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™]Y[Ê]Y[ËÜ[ÛœÊNÂˆBˆÊŠ‚ˆ
ˆ[\œ\HÙ\ÜÚ[Ûˆ\YšXÚX[H›Üˆ^[\HYˆ[ÝHØ[ÈZ[HœÝÜ[Ú[™È‚ˆ
ˆ]Û‹‚ˆ
‹Âˆ[\œ\

HÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
Kš[\œ\

NÂˆBˆÊŠ‚ˆ
ˆ\›Ý™HHÛÛØ[ˆ\ÈÚ[[ÛÈšYÙÙ\ˆHÛÛØ[ÈHYÙ[‚ˆ
ˆ\˜[H\›Ý˜[][HHH\›Ý˜[][HÈ\›Ý™K‚ˆ
ˆ\˜[HÜ[ÛœÈHY][Û˜[Ü[ÛœË‚ˆ
ˆ\˜[HÜ[ÛœË˜[Ø^\Ð\›Ý™HHÚ]\ˆÈ[Ø^\È\›Ý™HHÛÛØ[‚ˆ
‹Âˆ\Þ[˜È\›Ý™J\›Ý˜[][KÜ[ÛœÈHÈ[Ø^\Ð\›Ý™Nˆ˜[ÙHJHÂˆÛÛœÝ[™[™ÈH×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\ÛÛ™T[™[™Ñ[˜Ý[ÛØ[Ù›ŠK˜Ø[
\Ë\›Ý˜[][JNÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K˜\›Ý™UÛÛ
[™[™ÏË˜\›Ý˜[][HÏÈ\›Ý˜[][KÜ[ÛœÊNÂˆÛÛœÝÛÛ˜[YHH\›Ý˜[][KÛÛ˜[YHÏÈ\›Ý˜[][Kœ˜]Ò][K›˜[YNÂˆYˆ
[™[™ÊHÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊK™[]J[™[™ËÛÛØ[˜Ø[Y
NÂˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[™Q[˜Ý[Û•ÛÛØ[Ù›ŠK˜Ø[
\Ë[™[™ËÛÛØ[[™[™ËÛÛ[™[™Ë˜YÙ[[™[™Ë™\Ü]ÚÛ˜\ÚÝ
NÂˆH[ÙHYˆ
\›Ý˜[][Kœ˜]Ò][K\HOOHšÜÝYÝÛÛØØ[ŠHÂˆYˆ
Ü[ÛœË˜[Ø^\Ð\›Ý™JHÂˆÙÙÙ\—ÙY˜][‹Ø\›Š[Ø^\È\›Ýš[™ÈPÔÛÛÈ\È›ÝÝ\ÜYˆ\ÙHH[ÝÙYÛÛÈÛÛ™šYÝ\˜][Ûˆ[œÝXYˆŠNÂˆBˆÛÛœÝXÜ\›Ý˜[™\]Y\ÝH\›Ý˜[][UÔ™X[[YP\›Ý˜[][J\›Ý˜[][JNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™XÜ™\ÜÛœÙJXÜ\›Ý˜[™\]Y\ÝYJNÂˆH[ÙHÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠÛÛ	ÝÛÛ˜[YHÏÈ[šÛ›ÝÛˆŸH›Ý›Ý[™
NÂˆBˆBˆÊŠ‚ˆ
ˆ™Z™XÝHÛÛØ[ˆ\ÈÚ[[ÛÈšYÙÙ\ˆHÛÛØ[ÈHYÙ[‚ˆ
ˆ\˜[H\›Ý˜[][HHH\›Ý˜[][HÈ™Z™XÝ‚ˆ
ˆ\˜[HÜ[ÛœÈHY][Û˜[Ü[ÛœË‚ˆ
ˆ\˜[HÜ[ÛœË˜[Ø^\Ô™Z™XÝHÚ]\ˆÈ[Ø^\È™Z™XÝHÛÛØ[‚ˆ
ˆ\˜[HÜ[ÛœË›Y\ÜØYÙHHH™Z™XÝ[Ûˆ^Ù[ÈH[Ù[‚ˆ
ˆYˆ›Ý›ÝšYYÛÛ\œ›Ü‘›Ü›X]\˜
YˆÛÛ™šYÝ\™Y
HÜˆHÑÈY˜][\È\ÙY‚ˆ
‹Âˆ\Þ[˜È™Z™XÝ
\›Ý˜[][KÜ[ÛœÈHÂˆ[Ø^\Ô™Z™XÝˆ˜[ÙBˆJHÂˆÛÛœÝ[™[™ÈH×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\ÛÛ™T[™[™Ñ[˜Ý[ÛØ[Ù›ŠK˜Ø[
\Ë\›Ý˜[][JNÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
Kœ™Z™XÝÛÛ
[™[™ÏË˜\›Ý˜[][HÏÈ\›Ý˜[][KÜ[ÛœÊNÂˆÛÛœÝÛÛ˜[YHH\›Ý˜[][KÛÛ˜[YHÏÈ\›Ý˜[][Kœ˜]Ò][K›˜[YNÂˆYˆ
[™[™ÊHÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊK™[]J[™[™ËÛÛØ[˜Ø[Y
NÂˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[™Q[˜Ý[Û•ÛÛØ[Ù›ŠK˜Ø[
\Ë[™[™ËÛÛØ[[™[™ËÛÛ[™[™Ë˜YÙ[[™[™Ë™\Ü]ÚÛ˜\ÚÝ
NÂˆH[ÙHYˆ
\›Ý˜[][Kœ˜]Ò][K\HOOHšÜÝYÝÛÛØØ[ŠHÂˆYˆ
Ü[ÛœË˜[Ø^\Ô™Z™XÝ
HÂˆÙÙÙ\—ÙY˜][‹Ø\›Š[Ø^\È™Z™XÝ[™ÈPÔÛÛÈ\È›ÝÝ\ÜYˆ\ÙHH[ÝÙYÛÛÈÛÛ™šYÝ\˜][Ûˆ[œÝXYˆŠNÂˆBˆÛÛœÝXÜ\›Ý˜[™\]Y\ÝH\›Ý˜[][UÔ™X[[YP\›Ý˜[][J\›Ý˜[][JNÂˆÛÛœÝ™Z™XÝ[Û”™X\ÛÛˆH×Üš]˜]QÙ]
\ËØÛÛ^
K™Ù]™Z™XÝ[Û“Y\ÜØYÙJÛÛ˜[YKXÜ\›Ý˜[™\]Y\Ýš][RY
NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™XÜ™\ÜÛœÙJXÜ\›Ý˜[™\]Y\Ý˜[ÙK™Z™XÝ[Û”™X\ÛÛŠNÂˆH[ÙHÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠÛÛ	ÝÛÛ˜[YHÏÈ[šÛ›ÝÛˆŸH›Ý›Ý[™
NÂˆBˆBŸNÂ—Ý˜[œÜÜH™]ÈÙXZÓX\

NÂ—ØÝ\œ™[YÙ[H™]ÈÙXZÓX\

NÂ—ØÝ\œ™[ÛÛÈH™]ÈÙXZÓX\

NÂ—ØÝ\œ™[\Ü]ÚÛ˜\ÚÝH™]ÈÙXZÓX\

NÂ—Ü™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÈH™]ÈÙXZÓX\

NÂ—Ü[™[™Ñ[˜Ý[ÛØ[ÈH™]ÈÙXZÓX\

NÂ—ØÛÛ^H™]ÈÙXZÓX\

NÂ—ÛÝ]]ÝX\™˜Z[ÈH™]ÈÙXZÓX\

NÂ—ÛÝ]]ÝX\™˜Z[Ù][™ÜÈH™]ÈÙXZÓX\

NÂ—Ý˜[œØÜšX™Y^[\ÈH™]ÈÙXZÓX\

NÂ—Ú\ÝÜžHH™]ÈÙXZÓX\

NÂ—ÜÚÝ[[˜ÛYP]Y[Ñ]HH™]ÈÙXZÓX\

NÂ—Ú[\œ\YžQÝX\™˜Z[H™]ÈÙXZÓX\

NÂ—Ø]Y[ÔÝ\YH™]ÈÙXZÓX\

NÂ—Ø[XÜÛÛÐžTÙ\™\ˆH™]ÈÙXZÓX\

NÂ—Ø]˜Z[X›SXÜÛÛÈH™]ÈÙXZÓX\

NÂ—Û\ÝÙ\ÜÚ[ÛÛÛ™šYÈH™]ÈÙXZÓX\

NÂ—Ø]]ÛX]XØ[UšYÙÙ\”™\ÜÛœÙQ›Ü“XÜÛÛØ[ÈH™]ÈÙXZÓX\

NÂ—ÝÛÛ^XÝ][ÛˆH™]ÈÙXZÓX\

NÂ—Ù]™[\Ý[™\œÐ]XÚYH™]ÈÙXZÓX\

NÂ—Ô™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ÈH™]ÈÙXZÔÙ]

NÂœ™\\™PYÙ[Ù›ˆH\Þ[˜È[˜Ý[ÛŠYÙ[
HÂˆÛÛœÝÚ[™Ù™œËYÙ[ÛÛ×HH]ØZ]›ÛZ\ÙK˜[
ÂˆYÙ[™Ù][˜X›Y[™Ù™œÊ×Üš]˜]QÙ]
\ËØÛÛ^
JKˆYÙ[™Ù][ÛÛÊ×Üš]˜]QÙ]
\ËØÛÛ^
JBˆJNÂˆÛÛœÝ[™Ù™•ÛÛÈH[™Ù™œË›X\

[™Ù™ŒŠHOˆ[™Ù™Œ‹™Ù][™Ù™\Ñ[˜Ý[Û•ÛÛ

JNÂˆÛÛœÝ™X[[YUÛÛÈHYÙ[ÛÛË™š[\Š\Õ˜[Y™X[[YUÛÛ
NÂˆÛÛœÝ[˜Ý[Û•ÛÛÈH™X[[YUÛÛË™š[\Š
ÛÛŠHOˆÛÛ‹\HOOH™[˜Ý[ÛˆŠNÂˆ˜[Y]T™X[[YUÛÛ˜[Y\Ê[˜Ý[Û•ÛÛË[™Ù™œÊNÂˆÛÛœÝ\ÕÛÛÑYš[™YH\[ÙˆYÙ[ÛÛÈOOH[™Yš[™Yˆ\[ÙˆYÙ[›XÜÙ\™\œÈOOH[™Yš[™YŽÂˆÛÛœÝ\Ò[™Ù™œÑYš[™YH[™Ù™œË›[™ÝˆÂˆ™]\›ˆÂˆYÙ[ˆÛÛYš[š][ÛœÎˆ\ÕÛÛÑYš[™Y\Ò[™Ù™œÑYš[™YÈË‹‹œ™X[[YUÛÛË›X\
Ô™X[[YUÛÛYš[š][ÛŠK‹‹š[™Ù™•ÛÛ×Hˆ›ÚYˆ\Ü]ÚÛ˜\ÚÝˆÂˆYÙ[ˆ[˜Ý[Û•ÛÛËˆ[™Ù™œÂˆBˆNÂŸNÂ˜\T™\\™YYÙ[Ù›ˆH[˜Ý[ÛŠ™\\™Y
HÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[YÙ[™\\™Y˜YÙ[
NÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[ÛÛË™\\™YÛÛYš[š][ÛœÊNÂˆ×Üš]˜]TÙ]
\ËØÝ\œ™[\Ü]ÚÛ˜\ÚÝ™\\™Y™\Ü]ÚÛ˜\ÚÝ
NÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë\]P]˜Z[X›SXÜÛÛ×Ù›ŠK˜Ø[
\ÊNÂŸNÂœÙ]Ý\œ™[YÙ[Ù›ˆH\Þ[˜È[˜Ý[ÛŠYÙ[
HÂˆÛÛœÝ™\\™YH]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\\™PYÙ[Ù›ŠK˜Ø[
\ËYÙ[
NÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë\T™\\™YYÙ[Ù›ŠK˜Ø[
\Ë™\\™Y
NÂŸNÂ˜Ø\\™T™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÙ›ˆH[˜Ý[ÛŠ™\ÜÛœÙRY
HÂˆÛÛœÝ^\Ý[™ÔÛ˜\ÚÝH×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÊK™Ù]
™\ÜÛœÙRY
NÂˆYˆ
^\Ý[™ÔÛ˜\ÚÝ
HÂˆ™]\›ˆ^\Ý[™ÔÛ˜\ÚÝÂˆBˆÛÛœÝÛ˜\ÚÝH×Üš]˜]QÙ]
\ËØÝ\œ™[\Ü]ÚÛ˜\ÚÝ
NÂˆYˆ
Û˜\ÚÝ
HÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÊKœÙ]
™\ÜÛœÙRYÛ˜\ÚÝ
NÂˆBˆ™]\›ˆÛ˜\ÚÝÂŸNÂ™Ù]Ù\ÜÚ[ÛÛÛ™šY×Ù›ˆH\Þ[˜È[˜Ý[ÛŠY][Û˜[ÛÛ™šYÈHßJHÂˆÛÛœÝÝ™\œšY\ÐÛÛ™šYÈHY][Û˜[ÛÛ™šYÈÏÈßNÂˆÛÛœÝÜ[ÛœÐÛÛ™šYÈH\Ë›Ü[ÛœË˜ÛÛ™šYÈÏÈßNÂˆÛÛœÝ[œÝXÝ[ÛœÈH]ØZ]×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K™Ù]Þ\Ý[T›Û\
×Üš]˜]QÙ]
\ËØÛÛ^
JNÂˆÛÛœÝÙ]]Y[ÓÝ]]›ÚXÙSÝ™\œšYHH
ÛÛ™šYÌŠHOˆÂˆÛÛœÝ]Y[ÐÛÛ™šYÈHÛÛ™šYÌ‹˜]Y[ÎÂˆ™]\›ˆ]Y[ÐÛÛ™šYÏË›Ý]]Ë›ÚXÙNÂˆNÂˆÛÛœÝ˜XÚ[™ÐÛÛ™šYÈH\Ë›Ü[ÛœË˜XÚ[™Ñ\ØX›YÈ[ˆ\Ë›Ü[ÛœËÛÜšÙ›ÝÓ˜[YHÈÂˆÛÜšÙ›Ý×Û˜[YNˆ\Ë›Ü[ÛœËÛÜšÙ›ÝÓ˜[YBˆHˆ˜]]ÈŽÂˆYˆ
˜XÚ[™ÐÛÛ™šYÈOOH[	‰ˆ˜XÚ[™ÐÛÛ™šYÈOOH˜]]ÈŠHÂˆYˆ
\Ë›Ü[ÛœË™Ü›Ý\Y
HÂˆ˜XÚ[™ÐÛÛ™šYË™Ü›Ý\ÚYH\Ë›Ü[ÛœË™Ü›Ý\YÂˆBˆYˆ
\Ë›Ü[ÛœË˜XÙSY]Y]JHÂˆ˜XÚ[™ÐÛÛ™šYË›Y]Y]HH\Ë›Ü[ÛœË˜XÙSY]Y]NÂˆBˆH[ÙHYˆ
\Ë›Ü[ÛœË™Ü›Ý\Y\Ë›Ü[ÛœË˜XÙSY]Y]JHÂˆÙÙÙ\—ÙY˜][‹Ø\›Š’[ˆÜ™\ˆÈÙ]˜XÙSY]Y]HÜˆHÜ›Ý\Y[ÝH™YYÈÜXÚYžHHÛÜšÙ›ÝÓ˜[YKˆŠNÂˆBˆÛÛœÝ]Y[ÓÝ]]›ÚXÙSÝ™\œšYHHÙ]]Y[ÓÝ]]›ÚXÙSÝ™\œšYJÝ™\œšY\ÐÛÛ™šYÊHÏÈÙ]]Y[ÓÝ]]›ÚXÙSÝ™\œšYJÜ[ÛœÐÛÛ™šYÊNÂˆÛÛœÝÜ]™[›ÚXÙSÝ™\œšYHHÝ™\œšY\ÐÛÛ™šYË›ÚXÙHÏÈÜ[ÛœÐÛÛ™šYË›ÚXÙNÂˆÛÛœÝ™\ÛÛ™Y›ÚXÙHH\[Ùˆ]Y[ÓÝ]]›ÚXÙSÝ™\œšYHOOH[™Yš[™YˆÈ]Y[ÓÝ]]›ÚXÙSÝ™\œšYHˆ\[ÙˆÜ]™[›ÚXÙSÝ™\œšYHOOH[™Yš[™YˆÈÜ]™[›ÚXÙSÝ™\œšYHˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K›ÚXÙNÂˆÛÛœÝ˜\ÙHHÂˆ‹‹—×Üš]˜]QÙ]
\ËÛ\ÝÙ\ÜÚ[ÛÛÛ™šYÊHÏÈßKˆ‹‹›Ü[ÛœÐÛÛ™šYËˆ‹‹›Ý™\œšY\ÐÛÛ™šYÂˆNÂˆÛÛœÝ[ÛÛ™šYÈHÂˆ‹‹˜˜\ÙKˆ[œÝXÝ[ÛœËˆ›ÚXÙNˆ™\ÛÛ™Y›ÚXÙKˆ[Ù[ˆ\Ë›Ü[ÛœË›[Ù[ˆÛÛÎˆ×Üš]˜]QÙ]
\ËØÝ\œ™[ÛÛÊKˆ˜XÚ[™Îˆ˜XÚ[™ÐÛÛ™šYËˆ›Û\ˆ\[Ùˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
Kœ›Û\OOH™[˜Ý[ÛˆˆÈ]ØZ]×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
Kœ›Û\
×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
JHˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
Kœ›Û\ˆNÂˆ×Üš]˜]TÙ]
\ËÛ\ÝÙ\ÜÚ[ÛÛÛ™šYË[ÛÛ™šYÊNÂˆ™]\›ˆ[ÛÛ™šYÎÂŸNÂš[™R[™Ù™—Ù›ˆH\Þ[˜È[˜Ý[ÛŠÛÛØ[[™Ù™Œ‹ÛÝ\˜ÙPYÙ[
HÂˆÛÛœÝ™]ÐYÙ[H]ØZ][™Ù™Œ‹›Û’[›ÚÙR[™Ù™Š×Üš]˜]QÙ]
\ËØÛÛ^
KÛÛØ[˜\™Ý[Y[ÊNÂˆÛÛœÝ™\\™YH]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\\™PYÙ[Ù›ŠK˜Ø[
\Ë™]ÐYÙ[
NÂˆÛÝ\˜ÙPYÙ[™[Z]
˜YÙ[Ú[™Ù™ˆ‹×Üš]˜]QÙ]
\ËØÛÛ^
K™]ÐYÙ[
NÂˆ\Ë™[Z]
˜YÙ[Ú[™Ù™ˆ‹×Üš]˜]QÙ]
\ËØÛÛ^
KÛÝ\˜ÙPYÙ[™]ÐYÙ[
NÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë\T™\\™YYÙ[Ù›ŠK˜Ø[
\Ë™\\™Y
NÂˆ]ØZ]×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K\]TÙ\ÜÚ[ÛÛÛ™šYÊ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËÙ]Ù\ÜÚ[ÛÛÛ™šY×Ù›ŠK˜Ø[
\ÊJNÂˆÛÛœÝÝ]]HÙ]˜[œÙ™\“Y\ÜØYÙJ™]ÐYÙ[
NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[Ý]]YJNÂˆ™]\›ˆ™]ÐYÙ[ÂŸNÂœ™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙWÙ›ˆH\Þ[˜È[˜Ý[ÛŠÛÛ˜[YKØ[YÛÛ\HH™[˜Ý[ÛˆŠHÂˆÛÛœÝ\Ø[Y\ÜØYÙHH×Üš]˜]QÙ]
\ËØÛÛ^
K™Ù]™Z™XÝ[Û“Y\ÜØYÙJÛÛ˜[YKØ[Y
NÂˆYˆ
\[Ùˆ\Ø[Y\ÜØYÙHOOHœÝš[™ÈŠHÂˆ™]\›ˆ\Ø[Y\ÜØYÙNÂˆBˆÛÛœÝÈÛÛ\œ›Ü‘›Ü›X]\ˆHH\Ë›Ü[ÛœÎÂˆYˆ
]ÛÛ\œ›Ü‘›Ü›X]\ŠHÂˆ™]\›ˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑLŽÂˆBˆžHÂˆÛÛœÝ›Ü›X]YY\ÜØYÙHH]ØZ]ÛÛ\œ›Ü‘›Ü›X]\ŠÂˆÚ[™ˆ˜\›Ý˜[Ü™Z™XÝY‹ˆÛÛ\KˆÛÛ˜[YKˆØ[YˆY˜][Y\ÜØYÙNˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑL‹ˆ[ÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
BˆJNÂˆYˆ
\[Ùˆ›Ü›X]YY\ÜØYÙHOOHœÝš[™ÈŠHÂˆ™]\›ˆ›Ü›X]YY\ÜØYÙNÂˆBˆYˆ
\[Ùˆ›Ü›X]YY\ÜØYÙHOOH[™Yš[™YŠHÂˆÙÙÙ\—ÙY˜][‹Ø\›ŠÛÛ\œ›Ü‘›Ü›X]\ˆ™]\›™YH›Û‹\Ýš[™È˜[YKˆ˜[[™È˜XÚÈÈHY˜][ÛÛ\›Ý˜[™Z™XÝ[ÛˆY\ÜØYÙKˆŠNÂˆBˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][‹Ø\›ŠÛÛ\œ›Ü‘›Ü›X]\ˆ™]ÈÚ[H›Ü›X][™È\›Ý˜[™Z™XÝ[ÛŽˆ	ÝÑ\œ›Ü“Y\ÜØYÙM
\œ›ÜLJ_X
NÂˆBˆ™]\›ˆÓÓÐT“ÕSÔ‘R‘PÕSÓ—ÓQTÔÐQÑLŽÂŸNÂš[™Q[˜Ý[Û•ÛÛØ[Ù›ˆH\Þ[˜È[˜Ý[ÛŠ[˜ÛÛZ[™ÕÛÛØ[ÛÛ‹YÙ[\Ü]ÚÛ˜\ÚÝ
HÂˆÛÛœÝÛÛØ[H›Ü›X[^™T™X[[YQ[˜Ý[ÛØ[Y
[˜ÛÛZ[™ÕÛÛØ[
NÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K˜ÛÛ^š\ÝÜžHH”ÓÓ‹œ\œÙJ”ÓÓ‹œÝš[™ÚYžJ×Üš]˜]QÙ]
\ËÚ\ÝÜžJJJNÂˆ]\œÙY\™ÜÈHÛÛØ[˜\™Ý[Y[ÎÂˆYˆ
ÛÛ‹œ\˜[Y]\œÊHÂˆYˆ
\Ö›ÙØš™XÝ
ÛÛ‹œ\˜[Y]\œÊJHÂˆ\œÙY\™ÜÈHÛÛ‹œ\˜[Y]\œËœ\œÙJ\œÙY\™ÜÊNÂˆH[ÙHÂˆ\œÙY\™ÜÈH”ÓÓ‹œ\œÙJ\œÙY\™ÜÊNÂˆBˆBˆÛÛœÝ™YYÐ\›Ý˜[H]ØZ]ÛÛ‹›™YYÐ\›Ý˜[
×Üš]˜]QÙ]
\ËØÛÛ^
K\œÙY\™ÜËÛÛØ[˜Ø[Y
NÂˆYˆ
™YYÐ\›Ý˜[
HÂˆÛÛœÝ\›Ý˜[H\Ë˜ÛÛ^š\ÕÛÛ\›Ý™Y
ÂˆÛÛ˜[YNˆÛÛ‹›˜[YKˆØ[YˆÛÛØ[˜Ø[YˆJNÂˆYˆ
\›Ý˜[OOH˜[ÙJHÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊK™[]JÛÛØ[˜Ø[Y
NÂˆ\Ë™[Z]
˜YÙ[ÝÛÛÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
KYÙ[ÛÛ‹ÂˆÛÛØ[ˆJNÂˆYÙ[™[Z]
˜YÙ[ÝÛÛÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
KÛÛ‹ÂˆÛÛØ[ˆJNÂˆÛÛœÝ™\Ý[ˆH]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë™\ÛÛ™P\›Ý˜[™Z™XÝ[Û“Y\ÜØYÙWÙ›ŠK˜Ø[
\ËÛÛ‹›˜[YKÛÛØ[˜Ø[Y
NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[™\Ý[‹YJNÂˆ\Ë™[Z]
˜YÙ[ÝÛÛÙ[™‹×Üš]˜]QÙ]
\ËØÛÛ^
KYÙ[ÛÛ‹™\Ý[‹ÂˆÛÛØ[ˆJNÂˆYÙ[™[Z]
˜YÙ[ÝÛÛÙ[™‹×Üš]˜]QÙ]
\ËØÛÛ^
KÛÛ‹™\Ý[‹ÂˆÛÛØ[ˆJNÂˆ™]\›ŽÂˆH[ÙHYˆ
\[Ùˆ\›Ý˜[OOH[™Yš[™YŠHÂˆYˆ
×Üš]˜]QÙ]
\ËÝÛÛ^XÝ][ÛŠOËœ™P\›Ý˜[[œ]ÝX\™˜Z[ÈOOHYJHÂˆÛÛœÝ[œ]ÝX\™˜Z[™\Ý[ˆH]ØZ][•ÛÛ[œ]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ÎˆÛÛ‹š[œ]ÝX\™˜Z[ËˆÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
KˆYÙ[ˆÛÛØ[ˆJNÂˆYˆ
[œ]ÝX\™˜Z[™\Ý[‹\HOOHœ™Z™XÝŠHÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[[œ]ÝX\™˜Z[™\Ý[‹›Y\ÜØYÙKYJNÂˆ™]\›ŽÂˆBˆBˆÛÛœÝ\›Ý˜[][HH™]È[•ÛÛ\›Ý˜[][JÛÛØ[YÙ[
NÂˆ×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊKœÙ]
ÛÛØ[˜Ø[YÂˆÛÛØ[ˆÛÛˆÛÛ‹ˆYÙ[ˆ\Ü]ÚÛ˜\ÚÝˆ\›Ý˜[][BˆJNÂˆ\Ë™[Z]
ÛÛØ\›Ý˜[Ü™\]Y\ÝY‹×Üš]˜]QÙ]
\ËØÛÛ^
KYÙ[Âˆ\Nˆ™[˜Ý[Û—Ø\›Ý˜[‹ˆÛÛˆÛÛ‹ˆ\›Ý˜[][BˆJNÂˆ™]\›ŽÂˆBˆBˆ×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊK™[]JÛÛØ[˜Ø[Y
NÂˆÛÛœÝ[œ]ÝX\™˜Z[™\Ý[H]ØZ][•ÛÛ[œ]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ÎˆÛÛ‹š[œ]ÝX\™˜Z[ËˆÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
KˆYÙ[ˆÛÛØ[ˆJNÂˆ\Ë™[Z]
˜YÙ[ÝÛÛÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
KYÙ[ÛÛ‹ÂˆÛÛØ[ˆJNÂˆYÙ[™[Z]
˜YÙ[ÝÛÛÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
KÛÛ‹ÂˆÛÛØ[ˆJNÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K˜ÛÛ^š\ÝÜžHH”ÓÓ‹œ\œÙJ”ÓÓ‹œÝš[™ÚYžJ×Üš]˜]QÙ]
\ËÚ\ÝÜžJJJNÂˆÛÛœÝ™\Ý[H[œ]ÝX\™˜Z[™\Ý[\HOOHœ™Z™XÝˆÈ[œ]ÝX\™˜Z[™\Ý[›Y\ÜØYÙHˆ]ØZ][›ÚÙQ[˜Ý[Û•ÛÛ
ÂˆÛÛˆÛÛ‹ˆ[ÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
Kˆ[œ]ˆÛÛØ[˜\™Ý[Y[Ëˆ]Z[ÎˆÂˆÛÛØ[ˆBˆJNÂˆÛÛœÝÝX\™Y™\Ý[H[œ]ÝX\™˜Z[™\Ý[\HOOHœ™Z™XÝˆÈ™\Ý[ˆ]ØZ][•ÛÛÝ]]ÝX\™˜Z[ÊÂˆÝX\™˜Z[ÎˆÛÛ‹›Ý]]ÝX\™˜Z[ËˆÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
KˆYÙ[ˆÛÛØ[ˆÛÛÝ]]ˆ™\Ý[ˆJNÂˆ]Ýš[™Ô™\Ý[ÂˆYˆ
\Ð˜XÚÙÜ›Ý[™™\Ý[
ÝX\™Y™\Ý[
JHÂˆÝš[™Ô™\Ý[HÔÛX\Ýš[™ÊÝX\™Y™\Ý[˜ÛÛ[
NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[Ýš[™Ô™\Ý[˜[ÙJNÂˆH[ÙHÂˆÝš[™Ô™\Ý[HÔÛX\Ýš[™ÊÝX\™Y™\Ý[
NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[Ýš[™Ô™\Ý[YJNÂˆBˆ\Ë™[Z]
˜YÙ[ÝÛÛÙ[™‹×Üš]˜]QÙ]
\ËØÛÛ^
KYÙ[ÛÛ‹Ýš[™Ô™\Ý[ÂˆÛÛØ[ˆJNÂˆYÙ[™[Z]
˜YÙ[ÝÛÛÙ[™‹×Üš]˜]QÙ]
\ËØÛÛ^
KÛÛ‹Ýš[™Ô™\Ý[ÂˆÛÛØ[ˆJNÂŸNÂš[™Q[˜Ý[ÛØ[Ù›ˆH\Þ[˜È[˜Ý[ÛŠÛÛØ[\Ü]ÚÛ˜\ÚÝ
HÂˆÛÛœÝÝÛÛ[˜X›Y[™Ù™‘[˜X›YHH]ØZ]›ÛZ\ÙK˜[
Âˆ›ÛZ\ÙK˜[
\Ü]ÚÛ˜\ÚÝ™[˜Ý[Û•ÛÛË›X\

ÛÛŠHOˆÛÛ‹š\Ñ[˜X›Y
×Üš]˜]QÙ]
\ËØÛÛ^
K\Ü]ÚÛ˜\ÚÝ˜YÙ[
JJKˆ›ÛZ\ÙK˜[
\Ü]ÚÛ˜\ÚÝš[™Ù™œË›X\

[™Ù™ŒŠHOˆ[™Ù™Œ‹š\Ñ[˜X›Y
Âˆ[ÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
KˆYÙ[ˆ\Ü]ÚÛ˜\ÚÝ˜YÙ[ˆJJJBˆJNÂˆÛÛœÝš[\™YÛ˜\ÚÝHÂˆYÙ[ˆ\Ü]ÚÛ˜\ÚÝ˜YÙ[ˆ[˜Ý[Û•ÛÛÎˆ\Ü]ÚÛ˜\ÚÝ™[˜Ý[Û•ÛÛË™š[\Š
ÝÛÛ[™^
HOˆÛÛ[˜X›YÚ[™^JKˆ[™Ù™œÎˆ\Ü]ÚÛ˜\ÚÝš[™Ù™œË™š[\Š
Ú[™Ù™‹[™^
HOˆ[™Ù™‘[˜X›YÚ[™^JBˆNÂˆ˜[Y]T™X[[YUÛÛ˜[Y\Êš[\™YÛ˜\ÚÝ™[˜Ý[Û•ÛÛËš[\™YÛ˜\ÚÝš[™Ù™œÊNÂˆÛÛœÝ[˜Ý[Û•ÛÛX\H™]ÈX\
š[\™YÛ˜\ÚÝ™[˜Ý[Û•ÛÛË›X\

ÛÛŠHOˆÝÛÛ‹›˜[YKÛÛ—JJNÂˆÛÛœÝ[™Ù™“X\H™]ÈX\
š[\™YÛ˜\ÚÝš[™Ù™œË›X\

[™Ù™ŒŠHOˆÚ[™Ù™Œ‹ÛÛ˜[YK[™Ù™Œ—JJNÂˆÛÛœÝ[˜Ý[Û•ÛÛH[˜Ý[Û•ÛÛX\™Ù]
ÛÛØ[›˜[YJNÂˆYˆ
[˜Ý[Û•ÛÛ
HÂˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[™Q[˜Ý[Û•ÛÛØ[Ù›ŠK˜Ø[
\ËÛÛØ[[˜Ý[Û•ÛÛš[\™YÛ˜\ÚÝ˜YÙ[š[\™YÛ˜\ÚÝ
NÂˆ™]\›ŽÂˆBˆÛÛœÝÜÜÚX›R[™Ù™ˆH[™Ù™“X\™Ù]
ÛÛØ[›˜[YJNÂˆYˆ
ÜÜÚX›R[™Ù™ŠHÂˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[™R[™Ù™—Ù›ŠK˜Ø[
\ËÛÛØ[ÜÜÚX›R[™Ù™‹š[\™YÛ˜\ÚÝ˜YÙ[
NÂˆ™]\›ŽÂˆBˆÛÛœÝY\ÜØYÙHHÛÛ	ÝÛÛØ[›˜[Y_H›Ý›Ý[™Âˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™[˜Ý[ÛØ[Ý]]
ÛÛØ[Y\ÜØYÙK˜[ÙJNÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ™]È[Ù[™Z]š[Ü‘\œ›ÜŠY\ÜØYÙJBˆJNÂŸNÂœ[“Ý]]ÝX\™˜Z[×Ù›ˆH\Þ[˜È[˜Ý[ÛŠÝ]]™\ÜÛœÙRY][RY
HÂˆYˆ
×Üš]˜]QÙ]
\ËÛÝ]]ÝX\™˜Z[ÊK›[™ÝOOH
HÂˆ™]\›ŽÂˆBˆÛÛœÝÝX\™˜Z[\™ÜÈHÂˆYÙ[ˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
KˆYÙ[Ý]]ˆÝ]]ˆÛÛ^ˆ×Üš]˜]QÙ]
\ËØÛÛ^
BˆNÂˆÛÛœÝ™\Ý[ÈH]ØZ]›ÛZ\ÙK˜[
×Üš]˜]QÙ]
\ËÛÝ]]ÝX\™˜Z[ÊK›X\

ÝX\™˜Z[
HOˆÝX\™˜Z[œ[ŠÝX\™˜Z[\™ÜÊJJNÂˆÛÛœÝš\œÝš\Ú\™UšYÙÙ\™YH™\Ý[Ë™š[™

™\Ý[
HOˆ™\Ý[›Ý]]š\Ú\™UšYÙÙ\™Y
NÂˆYˆ
š\œÝš\Ú\™UšYÙÙ\™Y
HÂˆYˆ
×Üš]˜]QÙ]
\ËÚ[\œ\YžQÝX\™˜Z[
VÜ™\ÜÛœÙRYJHÂˆ™]\›ŽÂˆBˆ×Üš]˜]QÙ]
\ËÚ[\œ\YžQÝX\™˜Z[
VÜ™\ÜÛœÙRYHHYNÂˆÛÛœÝ\œ›ÜLHH™]ÈÝ]]ÝX\™˜Z[š\Ú\™UšYÙÙ\™Y
Ý]]ÝX\™˜Z[šYÙÙ\™Yˆ	Ò”ÓÓ‹œÝš[™ÚYžJš\œÝš\Ú\™UšYÙÙ\™Y›Ý]]›Ý]][™›Ê_Xš\œÝš\Ú\™UšYÙÙ\™Y
NÂˆ\Ë™[Z]
™ÝX\™˜Z[Ýš\Y‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K\œ›ÜLKÂˆ][RYˆJNÂˆ\Ëš[\œ\

NÂˆÛÛœÝ™YY˜XÚÕ^HÙ]™X[[YQÝX\™˜Z[™YY˜XÚÓY\ÜØYÙJš\œÝš\Ú\™UšYÙÙ\™Y
NÂˆ\ËœÙ[™Y\ÜØYÙJ™YY˜XÚÕ^
NÂˆ™]\›ŽÂˆBŸNÂœÙ]]™[\Ý[™\œ×Ù›ˆH[˜Ý[ÛŠ
HÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠŠˆ‹
]™[
HOˆÂˆ\Ë™[Z]
˜[œÜÜÙ]™[‹]™[
NÂˆYˆ
]™[\HOOH˜ÛÛ™\œØ][Û‹š][Kš[œ]Ø]Y[×Ý˜[œØÜš\[Û‹˜ÛÛ\]YŠHÂˆžHÂˆÛÛœÝÛÛ\]Y]™[H]™[Âˆ×Üš]˜]TÙ]
\ËÚ\ÝÜžK\]T™X[[YR\ÝÜžJ×Üš]˜]QÙ]
\ËÚ\ÝÜžJKÛÛ\]Y]™[×Üš]˜]QÙ]
\ËÜÚÝ[[˜ÛYP]Y[Ñ]JJJNÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K˜ÛÛ^š\ÝÜžHH×Üš]˜]QÙ]
\ËÚ\ÝÜžJNÂˆ\Ë™[Z]
š\ÝÜžWÝ\]Y‹×Üš]˜]QÙ]
\ËÚ\ÝÜžJJNÂˆHØ]Ú
\œŠHÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ\œ‚ˆJNÂˆBˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ›XÜÝÛÛ×Û\ÝY‹
ÈÙ\™\“X™[ÛÛÈJHOˆÂˆžHÂˆ×Üš]˜]QÙ]
\ËØ[XÜÛÛÐžTÙ\™\ŠKœÙ]
Ù\™\“X™[ÛÛÈÏÈ×JNÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë\]P]˜Z[X›SXÜÛÛ×Ù›ŠK˜Ø[
\ÊNÂˆHØ]Ú
\œŠHÂˆ\Ë™[Z]
™\œ›Üˆ‹È\Nˆ™\œ›Üˆ‹\œ›ÜŽˆ\œˆJNÂˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ˜]Y[È‹
]™[
HOˆÂˆYˆ
W×Üš]˜]QÙ]
\ËØ]Y[ÔÝ\Y
JHÂˆ×Üš]˜]TÙ]
\ËØ]Y[ÔÝ\YYJNÂˆ\Ë™[Z]
˜]Y[×ÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
JNÂˆBˆ\Ë™[Z]
˜]Y[È‹]™[
NÂˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ\›—ÜÝ\Y‹
]™[
HOˆÂˆ×Üš]˜]TÙ]
\ËØ]Y[ÔÝ\Y˜[ÙJNÂˆÛÛœÝ™\ÜÛœÙRYHÙ]Ý\Y™\ÜÛœÙRY
]™[
NÂˆYˆ
™\ÜÛœÙRY
HÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËØ\\™T™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÙ›ŠK˜Ø[
\Ë™\ÜÛœÙRY
NÂˆBˆ\Ë™[Z]
˜YÙ[ÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
JNÂˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K™[Z]
˜YÙ[ÜÝ\‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
JNÂˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ\›—ÙÛ™H‹
]™[
HOˆÂˆÛÛœÝÝ]]][\ÈH]™[œ™\ÜÛœÙK›Ý]]ÏÈ×NÂˆ]^Ý]]HˆŽÂˆ]][RYHˆŽÂˆ›Üˆ
]YHÝ]]][\Ë›[™ÝHNÈYHÈYKJHÂˆÛÛœÝØ[™Y]HHÝ]]][\ÖÚYNÂˆÛÛœÝØ[™Y]U^HÙ]\Ý^œ›ÛP]Y[ÓÝ]]Y\ÜØYÙJØ[™Y]JNÂˆYˆ
\[ÙˆØ[™Y]U^OOHœÝš[™ÈŠHÂˆ^Ý]]HØ[™Y]U^ÂˆÛÛœÝØ[™Y]RYHØ[™Y]OËšYÂˆ][RYH\[ÙˆØ[™Y]RYOOHœÝš[™ÈˆÈØ[™Y]RYˆˆŽÂˆœ™XZÎÂˆBˆBˆYˆ
Z][RY	‰ˆÝ]]][\Ë›[™Ýˆ
HÂˆÛÛœÝ\Ý][HHÝ]]][\ÖÛÝ]]][\Ë›[™ÝHWNÂˆ][RYH\[Ùˆ\Ý][OËšYOOHœÝš[™ÈˆÈ\Ý][KšYˆˆŽÂˆBˆ\Ë™[Z]
˜YÙ[Ù[™‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K^Ý]]
NÂˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K™[Z]
˜YÙ[Ù[™‹×Üš]˜]QÙ]
\ËØÛÛ^
K^Ý]]
NÂˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[“Ý]]ÝX\™˜Z[×Ù›ŠK˜Ø[
\Ë^Ý]]]™[œ™\ÜÛœÙKšY][RY
NÂˆ×Üš]˜]QÙ]
\ËÜ™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÊK™[]J]™[œ™\ÜÛœÙKšY
NÂˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ˜]Y[×ÙÛ™H‹

HOˆÂˆYˆ
×Üš]˜]QÙ]
\ËØ]Y[ÔÝ\Y
JHÂˆ×Üš]˜]TÙ]
\ËØ]Y[ÔÝ\Y˜[ÙJNÂˆBˆ\Ë™[Z]
˜]Y[×ÜÝÜY‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
JNÂˆJNÂˆ]\Ý[’[™^HÂˆ]\Ý][RYÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ˜]Y[×Ý˜[œØÜš\Ù[H‹
]™[
HOˆÂˆžHÂˆÛÛœÝ[HH]™[™[NÂˆÛÛœÝ][RYH]™[š][RYÂˆÛÛœÝ™\ÜÛœÙRYH]™[œ™\ÜÛœÙRYÂˆYˆ
\Ý][RYOOH][RY
HÂˆ\Ý][RYH][RYÂˆ\Ý[’[™^HÂˆBˆÛÛœÝÝ\œ™[^H×Üš]˜]QÙ]
\ËÝ˜[œØÜšX™Y^[\ÊVÚ][RYHÏÈˆŽÂˆÛÛœÝ™]Õ^HÝ\œ™[^
È[NÂˆ×Üš]˜]QÙ]
\ËÝ˜[œØÜšX™Y^[\ÊVÚ][RYHH™]Õ^ÂˆYˆ
×Üš]˜]QÙ]
\ËÛÝ]]ÝX\™˜Z[Ù][™ÜÊK™X›Ý[˜ÙU^[™Ý
HÂˆ™]\›ŽÂˆBˆÛÛœÝ™]Ô[’[™^HX]™›ÛÜŠ™]Õ^›[™ÝÈ×Üš]˜]QÙ]
\ËÛÝ]]ÝX\™˜Z[Ù][™ÜÊK™X›Ý[˜ÙU^[™Ý
NÂˆYˆ
™]Ô[’[™^ˆ\Ý[’[™^
HÂˆ\Ý[’[™^H™]Ô[’[™^Âˆ×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[“Ý]]ÝX\™˜Z[×Ù›ŠK˜Ø[
\Ë™]Õ^™\ÜÛœÙRY][RY
NÂˆBˆHØ]Ú
\œŠHÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ\œ‚ˆJNÂˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠš][WÝ\]H‹
]™[
HOˆÂˆžHÂˆÛÛœÝ\Ó™]ÈHW×Üš]˜]QÙ]
\ËÚ\ÝÜžJKœÛÛYJ
][JHOˆ][Kš][RYOOH]™[š][RY
NÂˆ×Üš]˜]TÙ]
\ËÚ\ÝÜžK\]T™X[[YR\ÝÜžJ×Üš]˜]QÙ]
\ËÚ\ÝÜžJK]™[×Üš]˜]QÙ]
\ËÜÚÝ[[˜ÛYP]Y[Ñ]JJJNÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K˜ÛÛ^š\ÝÜžHH×Üš]˜]QÙ]
\ËÚ\ÝÜžJNÂˆYˆ
\Ó™]ÊHÂˆÛÛœÝYY][HH×Üš]˜]QÙ]
\ËÚ\ÝÜžJK™š[™

][JHOˆ][Kš][RYOOH]™[š][RY
NÂˆYˆ
YY][JHÂˆ\Ë™[Z]
š\ÝÜžWØYY‹YY][JNÂˆBˆBˆ\Ë™[Z]
š\ÝÜžWÝ\]Y‹×Üš]˜]QÙ]
\ËÚ\ÝÜžJJNÂˆHØ]Ú
\œŠHÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ\œ‚ˆJNÂˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠš][WÙ[]Y‹
]™[
HOˆÂˆžHÂˆ×Üš]˜]TÙ]
\ËÚ\ÝÜžK×Üš]˜]QÙ]
\ËÚ\ÝÜžJK™š[\Š
][JHOˆ][Kš][RYOOH]™[š][RY
JNÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K˜ÛÛ^š\ÝÜžHH×Üš]˜]QÙ]
\ËÚ\ÝÜžJNÂˆ\Ë™[Z]
š\ÝÜžWÝ\]Y‹×Üš]˜]QÙ]
\ËÚ\ÝÜžJJNÂˆHØ]Ú
\œŠHÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ\œ‚ˆJNÂˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ™[˜Ý[Û—ØØ[‹\Þ[˜È
]™[
HOˆÂˆžHÂˆYˆ
Y]™[œ™\ÜÛœÙRY
HÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠ”™X[[YH[˜Ý[ÛˆØ[\ÈZ\ÜÚ[™ÈH™\ÜÛœÙRY[™Ø[››Ý™H\Ü]ÚYØY™[KˆŠNÂˆBˆÛÛœÝ\Ü]ÚÛ˜\ÚÝH×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\ËØ\\™T™\ÜÛœÙQ\Ü]ÚÛ˜\ÚÝÙ›ŠK˜Ø[
\Ë]™[œ™\ÜÛœÙRY
NÂˆYˆ
Y\Ü]ÚÛ˜\ÚÝ
HÂˆ›ÝÈ™]È[Ù[™Z]š[Ü‘\œ›ÜŠ”™X[[YHÛÛ\Ü]Ú\È[˜]˜Z[X›H™Y›Ü™HHÙ\ÜÚ[ÛˆÛÛÛÛ™šYÝ\˜][Ûˆ\È™\ÛÛ™YˆŠNÂˆBˆ]ØZ]×Üš]˜]SY]Ù
\ËÔ™X[[YTÙ\ÜÚ[Û—Ú[œÝ[˜Ù\Ë[™Q[˜Ý[ÛØ[Ù›ŠK˜Ø[
\Ë]™[\Ü]ÚÛ˜\ÚÝ
NÂˆHØ]Ú
\œ›ÜLJHÂˆÙÙÙ\—ÙY˜][‹™\œ›ÜŠ‘\œ›Üˆ[™[™È[˜Ý[ÛˆØ[‹\œ›ÜLJNÂˆ\Ë™[Z]
™\œ›Üˆ‹Âˆ\Nˆ™\œ›Üˆ‹ˆ\œ›ÜŽˆ\œ›ÜLBˆJNÂˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ\ØYÙWÝ\]H‹
\ØYÙJHOˆÂˆ×Üš]˜]QÙ]
\ËØÛÛ^
K\ØYÙK˜Y
\ØYÙJNÂˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ˜]Y[×Ú[\œ\Y‹

HOˆÂˆYˆ
×Üš]˜]QÙ]
\ËØ]Y[ÔÝ\Y
JHÂˆ×Üš]˜]TÙ]
\ËØ]Y[ÔÝ\Y˜[ÙJNÂˆBˆ\Ë™[Z]
˜]Y[×Ú[\œ\Y‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
JNÂˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ™\œ›Üˆ‹
\œ›ÜLJHOˆÂˆ\Ë™[Z]
™\œ›Üˆ‹\œ›ÜLJNÂˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ›XÜÝÛÛØØ[ØÛÛ\]Y‹
ÛÛØ[
HOˆÂˆ\Ë™[Z]
›XÜÝÛÛØØ[ØÛÛ\]Y‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
KÛÛØ[
NÂˆYˆ
×Üš]˜]QÙ]
\ËØ]]ÛX]XØ[UšYÙÙ\”™\ÜÛœÙQ›Ü“XÜÛÛØ[ÊJHÂˆYˆ
×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
Kœ™\]Y\Ý™\ÜÛœÙJHÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
Kœ™\]Y\Ý™\ÜÛœÙJ
NÂˆH[ÙHÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
KœÙ[™]™[
Âˆ\Nˆœ™\ÜÛœÙK˜Ü™X]H‚ˆJNÂˆBˆBˆJNÂˆ×Üš]˜]QÙ]
\ËÝ˜[œÜÜ
K›ÛŠ›XÜØ\›Ý˜[Ü™\]Y\Ý‹
\›Ý˜[™\]Y\Ý
HOˆÂˆ\Ë™[Z]
ÛÛØ\›Ý˜[Ü™\]Y\ÝY‹×Üš]˜]QÙ]
\ËØÛÛ^
K×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
KÂˆ\Nˆ›XÜØ\›Ý˜[Ü™\]Y\Ý‹ˆ\›Ý˜[][Nˆ™X[[YP\›Ý˜[][UÐ\›Ý˜[][J×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
K\›Ý˜[™\]Y\Ý
BˆJNÂˆJNÂŸNÂ‹ÊŠ‚ˆ
ˆ™XÛÛ\]\ÈHÝ\œ™[H]˜Z[X›HPÔÛÛÈ˜\ÙYÛˆHÝ\œ™[YÙ[	ÜÈXÝ]™Bˆ
ˆPÔÙ\™\ˆÛÛ™šYÝ\˜][ÛœÈ[™HØXÚY\‹\Ù\™\ˆÛÛ\Ý[™ÜËˆ[Z]Âˆ
ˆXÜÝÛÛ×ØÚ[™ÙYYˆHÙ]Ú[™ÙY‚ˆ
‹Â\]P]˜Z[X›SXÜÛÛ×Ù›ˆH[˜Ý[ÛŠ
HÂˆÛÛœÝXÝ]™SXÜÛÛ™šYÜÈH×Üš]˜]QÙ]
\ËØÝ\œ™[ÛÛÊOË™š[\Š

HOˆ\HOOH›XÜŠNÂˆÛÛœÝ[ÝÙYœ›ÛPÛÛ™šYÈH
Ù™ÊHOˆÂˆÛÛœÝ[ÝÙYHÙ™Ë˜[ÝÙYÝÛÛÎÂˆYˆ
X[ÝÙY
Bˆ™]\›ˆ›ÚYÂˆYˆ
\œ˜^Kš\Ð\œ˜^J[ÝÙY
JBˆ™]\›ˆ[ÝÙYÂˆYˆ
[ÝÙY	‰ˆ\œ˜^Kš\Ð\œ˜^J[ÝÙYÛÛÛ˜[Y\ÊJBˆ™]\›ˆ[ÝÙYÛÛÛ˜[Y\ÎÂˆ™]\›ˆ›ÚYÂˆNÂˆÛÛœÝY\žS˜[YHHÊˆ×ÔT‘W×È
‹È™]ÈX\

NÂˆ›Üˆ
ÛÛœÝÙ™ÈÙˆXÝ]™SXÜÛÛ™šYÜÊHÂˆÛÛœÝÛÛÈH×Üš]˜]QÙ]
\ËØ[XÜÛÛÐžTÙ\™\ŠK™Ù]
Ù™ËœÙ\™\—ÛX™[
HÏÈ×NÂˆÛÛœÝ[ÝÙYH[ÝÙYœ›ÛPÛÛ™šYÊÙ™ÊNÂˆ›Üˆ
ÛÛœÝÛÛˆÙˆÛÛÊHÂˆYˆ
[ÝÙY	‰ˆX[ÝÙYš[˜ÛY\ÊÛÛ‹›˜[YJJBˆÛÛ[YNÂˆYˆ
YY\žS˜[YKš\ÊÛÛ‹›˜[YJJHÂˆY\žS˜[YKœÙ]
ÛÛ‹›˜[YKÛÛŠNÂˆBˆBˆBˆÛÛœÝ™^H\œ˜^K™œ›ÛJY\žS˜[YK˜[Y\Ê
JNÂˆÛÛœÝ™]ˆH×Üš]˜]QÙ]
\ËØ]˜Z[X›SXÜÛÛÊNÂˆÛÛœÝÚ[™ÙYH™]‹›[™ÝOOH™^›[™Ý”ÓÓ‹œÝš[™ÚYžJ™]‹›X\


HOˆ›˜[YJKœÛÜ

JHOOH”ÓÓ‹œÝš[™ÚYžJ™^›X\


HOˆ›˜[YJKœÛÜ

JNÂˆYˆ
Ú[™ÙY
HÂˆ×Üš]˜]TÙ]
\ËØ]˜Z[X›SXÜÛÛË™^
NÂˆ\Ë™[Z]
›XÜÝÛÛ×ØÚ[™ÙY‹×Üš]˜]QÙ]
\ËØ]˜Z[X›SXÜÛÛÊJNÂˆBŸNÂœ™\ÛÛ™T[™[™Ñ[˜Ý[ÛØ[Ù›ˆH[˜Ý[ÛŠ\›Ý˜[][JHÂˆYˆ
\›Ý˜[][Kœ˜]Ò][K\HOOH™[˜Ý[Û—ØØ[ŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ˜]ÕÛÛØ[H\›Ý˜[][Kœ˜]Ò][NÂˆYˆ
\[Ùˆ˜]ÕÛÛØ[œ™\ÜÛœÙRYOOHœÝš[™ÈŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝÛÛØ[H›Ü›X[^™T™X[[YQ[˜Ý[ÛØ[Y
˜]ÕÛÛØ[
NÂˆÛÛœÝ[™[™ÈH×Üš]˜]QÙ]
\ËÜ[™[™Ñ[˜Ý[ÛØ[ÊK™Ù]
ÛÛØ[˜Ø[Y
NÂˆYˆ
[™[™ÊHÂˆ™]\›ˆ[™[™ÎÂˆBˆÛÛœÝYÙ[H\›Ý˜[][K˜YÙ[[œÝ[˜Ù[Ùˆ™X[[YPYÙ[È\›Ý˜[][K˜YÙ[ˆ×Üš]˜]QÙ]
\ËØÝ\œ™[YÙ[
NÂˆÛÛœÝÛÛ˜[YHH\›Ý˜[][KÛÛ˜[YHÏÈ\›Ý˜[][Kœ˜]Ò][K›˜[YNÂˆÛÛœÝÛÛˆHYÙ[ÛÛË™š[™

Ø[™Y]JHOˆØ[™Y]K\HOOH™[˜Ý[Ûˆˆ	‰ˆØ[™Y]K›˜[YHOOHÛÛ˜[YJNÂˆYˆ
]ÛÛŠHÂˆ™]\›ˆ›ÚYÂˆBˆÛÛœÝ\Ü]ÚÛ˜\ÚÝH×Üš]˜]QÙ]
\ËØÝ\œ™[\Ü]ÚÛ˜\ÚÝ
OË˜YÙ[OOHYÙ[È×Üš]˜]QÙ]
\ËØÝ\œ™[\Ü]ÚÛ˜\ÚÝ
HˆÈYÙ[[˜Ý[Û•ÛÛÎˆÝÛÛ—K[™Ù™œÎˆ×HNÂˆ™]\›ˆÂˆÛÛØ[ˆÛÛˆÛÛ‹ˆYÙ[ˆ\Ü]ÚÛ˜\ÚÝˆ\›Ý˜[][NˆÛÛØ[OOH\›Ý˜[][Kœ˜]Ò][HÈ\›Ý˜[][Hˆ™]È[•ÛÛ\›Ý˜[][JÛÛØ[\›Ý˜[][K˜YÙ[\›Ý˜[][KÛÛ˜[YJBˆNÂŸNÂ˜\ˆ™X[[YTÙ\ÜÚ[ÛˆHÔ™X[[YTÙ\ÜÚ[ÛŽÂ‚‹ËÈX›XËÛ™^\Ë[Ü[˜ZK\™X[[YKXYÙ[šœÂ˜\ˆ‘VT×Ô‘PSSQWÕÓÓÔTSQUT”ÈHÂˆ\Nˆ›Øš™XÝ‹ˆY][Û˜[›Ü\Y\Îˆ˜[ÙKˆ›Ü\Y\ÎˆÂˆÛÛ[X[™ˆÈ\NˆœÝš[™È‹\ØÜš\[ÛŽˆ•H\Ù\‰ÜÈZ[‹[[™ÝXYÙH™^\È™\]Y\ÝˆˆKˆ]Y\žNˆÈ\NˆœÝš[™È‹\ØÜš\[ÛŽˆHÛÛ˜Ú\ÙHÛÝ\˜ÙKÙX]\‹›Ý]KÜˆÛÜšÙ›ÝÈ]Y\žKˆˆKˆØ\Xš[]NˆÂˆ\NˆœÝš[™È‹ˆ[[NˆÂˆ™Ù[™\˜[‹ˆÙX]\ˆ‹ˆ›]™KZÛ›ÝÛYÙH‹ˆ›X\Ë\›Ý][™È‹ˆ˜YÜšXÝ[\™H‹ˆšX[\™\\˜][Ûˆ‹ˆÛÜšÙ›Ü˜ÙH‹ˆ›X\›š[™Ë]˜Z[š[™È‹ˆ›X\šÙ]XÙK]˜YH‹ˆ›ÙÚ\ÝXÜÈ‹ˆ˜ÛÛ[][šXØ][ÛœÈ‹ˆÛÜšÙ›ÝÈ‹ˆœ›ÝšY\‹\™XY[™\ÜÈ‹ˆœ™XÙZ\ËZ\ÝÜžH‚ˆKˆ\ØÜš\[ÛŽˆ•HØY™\Ý™^\ÈØ\Xš[]H[™H›ÜˆH™\]Y\Ýˆ‚ˆKˆ[™ÝXYÙNˆÈ\NˆœÝš[™È‹\ØÜš\[ÛŽˆ•H\Ù\‰ÜÈXÝ]™H[™ÝXYÙHÜˆÔMÈ[™ÝXYÙHÛÙKˆˆKˆØØ][ÛŽˆÈ\NˆœÝš[™È‹\ØÜš\[ÛŽˆ“Ü[Û˜[\Ù\‹\›ÝšYYØØ][Ûˆ^ˆ™]™\ˆ[™™\ˆ™XÚ\ÙHØØ][Û‹ˆˆKˆÛÛ™š\›YYˆÈ\Nˆ˜›ÛÛX[ˆ‹\ØÜš\[ÛŽˆ•YHÛ›HY\ˆ^XÚ][‹]\›ˆ\Ù\ˆÛÛ™š\›X][Û‹ˆˆBˆKˆ™\]Z\™YˆÈ˜ÛÛ[X[™—BŸNÂ˜\ˆ‘VT×Ô‘PSSQWÕÓÓÑQ’S’USÓ”ÈHÂˆÈ›™^\×Û]™WÚÛ›ÝÛYÙH‹Ý\œ™[ÜˆÛÝ\˜ÙKX˜XÚÙY™\ÙX\˜Ú\Ú[™È™^\È]™HÛ›ÝÛYÙH[™]šY[˜ÙH™XÙZ\Ëˆ—KˆÈ›™^\×ÝÙX]\ˆ‹•ÙX]\ˆ[™›Ü™XØ\ÝÝ\Ü\Ú[™ÈÛÛ™šYÝ\™Y™XY[Û›H›ÝšY\œÈÜˆ][Z\ÜÚ[™Ë[ØØ][Û‹Ü›ÝšY\ˆÝ]\Ëˆ—KˆÈ›™^\×ÛX\×Ü›Ý]H‹“X\Ë\Y[ØØ][Ûˆ›Ý]H[›š[™ËšY[š\Ú]ËÙÚ\ÝXÜË[™˜]™[™\\˜][ÛˆÚ]Ý]Ù[ÛØØ][ÛˆÜˆ\Ü]Úˆ—KˆÈ›™^\×ØYÜšXÝ[\™H‹YÜšXÝ[\™KÜ›ÜËšY[[›š[™Ë™YXÝ]™HYÜšXÝ[\™K[™˜\›Y\ˆÝ\Üˆ—KˆÈ›™^\×ÚX[Ü™\\˜][Ûˆ‹’X[]\˜XÞKÚ›ÛšXËXØ\™K”KÔ•K[ZX[™\\›XXÞH™\[™›ÝšY\ˆÝ[[X\šY\ÈÚ]Ý]XYÛ›ÜÚ\ÈÜˆ™\ØÜšXš[™Ëˆ—KˆÈ›™^\×ÝÛÜšÙ›Ü˜ÙWÛX\›š[™È‹“X\›š[™Ë]\˜XÞK˜Z[š[™Ë›ØœËÛÜšÙ›Ü˜ÙH]Ø^\Ë[™Ø\™Y\ˆÝ\Üˆ—KˆÈ›™^\×ÛX\šÙ]XÙWÛÙÚ\ÝXÜÈ‹“X\šÙ]XÙK^Y\‹ÜÙ[\‹™[™Üˆ™\ÙX\˜ÚÙÚ\ÝXÜË[™Ú\Y[[›š[™ÈÚ]Ý]^[Y[Üˆ\˜Ú\ÙH^XÝ][Û‹ˆ—KˆÈ›™^\×ØÛÛ[][šXØ][ÛœÈ‹”ÓTËÚ]Ð\[XZ[Û™K[™[YÜ˜[H™\\˜][ÛˆÚ]ÛÛ™š\›X][Û‹YØ]Y^XÝ][Û‹ˆ—KˆÈ›™^\×ÝÛÜšÙ›ÝÈ‹”ÝXÝ\™YÛÜšÙ›ÝÈÝ\ÜÛ›HÚ[ˆH\Ù\ˆÛX\›H\ÚÜÈ›Üˆ]ˆ—KˆÈ›™^\×Ü›ÝšY\—Ü™XY[™\ÜÈ‹”›ÝšY\ˆ™XY[™\ÜËZ\ÜÚ[™È[š\›Û›Y[˜\šXX›H˜[Y\ËÛÛ›™XÝÜˆÝ]\Ë[™›ØÚÙYÝ]\ÈÚ]Ý]ÙXÜ™]Ëˆ—B—NÂ™[˜Ý[ÛˆØY™U^
˜[YKX^HL
HÂˆ™]\›ˆÝš[™Ê˜[YHˆŠKœ™\XÙJ×ÊËÙËˆŠKš[J
KœÛXÙJX^
NÂŸB™[˜Ý[Ûˆ›Ü›X[^™Q\œ›ÜŠ\œ›ÜLJHÂˆÛÛœÝÛÝ\˜ÙHH\œ›ÜLH	‰ˆ\[Ùˆ\œ›ÜLHOOH›Øš™XÝˆÈ\œ›ÜLHˆßNÂˆÛÛœÝ™\ÝYHÛÝ\˜ÙK™\œ›Üˆ	‰ˆ\[ÙˆÛÝ\˜ÙK™\œ›ÜˆOOH›Øš™XÝˆÈÛÝ\˜ÙK™\œ›ÜˆˆßNÂˆ™]\›ˆÂˆ\NˆÝš[™ÊÛÝ\˜ÙK\HÛÝ\˜ÙK˜ÛÙH™\ÝY\H™\ÝY˜ÛÙH›Ü[˜ZK\™X[[YK\[[YKY\œ›ÜˆŠKœÛXÙJ
KˆY\ÜØYÙNˆÝš[™ÊÛÝ\˜ÙK›Y\ÜØYÙH™\ÝY›Y\ÜØYÙH\œ›ÜLH“Ü[RH™X[[YH[[YH\œ›Ü‹ˆŠKœÛXÙJ
BˆNÂŸB™[˜Ý[ÛˆZXÜ›ÜÛ™T›ÛÙ‘›Ü”Ý™X[JÝ™X[JHÂˆÛÛœÝ˜XÚÜÈH\[ÙˆÝ™X[OË™Ù]]Y[Õ˜XÚÜÈOOH™[˜Ý[ÛˆˆÈÝ™X[K™Ù]]Y[Õ˜XÚÜÊ
Hˆ×NÂˆÛÛœÝ]™U˜XÚÈH˜XÚÜË™š[™

˜XÚÊHOˆ˜XÚÈ	‰ˆ˜XÚË™[˜X›YOOH˜[ÙH	‰ˆ˜XÚËœ™XYTÝ]HOOH›]™HŠH[Âˆ™]\›ˆÂˆÝ™X[PXÝ]™Nˆ›ÛÛX[ŠÝ™X[OË˜XÝ]™JKˆ˜XÚÐÛÝ[ˆ˜XÚÜË›[™Ýˆ˜XÚÔÝ]Nˆ]™U˜XÚÏËœ™XYTÝ]H˜XÚÜÖÌOËœ™XYTÝ]H››Û™H‹ˆ˜XÚÑ[˜X›Yˆ]™U˜XÚÈÈ]™U˜XÚË™[˜X›YOOH˜[ÙHˆ˜[ÙKˆ˜XÚÓ]]Yˆ]™U˜XÚÈÈ›ÛÛX[Š]™U˜XÚË›]]Y
Hˆ˜[ÙKˆ\Ó]™U˜XÚÎˆ›ÛÛX[Š]™U˜XÚÊKˆZXÜ›ÜÛ™U˜XÚÎˆ]™U˜XÚÂˆNÂŸB˜\Þ[˜È[˜Ý[ÛˆÛÛ›™XÝÙ\ÜÚ[Û•Ú]ZXÜ›ÜÛ™T›ÛÙŠÙ\ÜÚ[Û‹ÛÛ›™XÝÜ[ÛœÈHßK[Z]H

HOˆÂŸJHÂˆYˆ
[˜]šYØ]Ü‹›YYXQ]šXÙ\ÏË™Ù]\Ù\“YYXJH›ÝÈ™]È\œ›ÜŠœ›ÝÜÙ\ˆZXÜ›ÜÛ™HØ\\™H\È[˜]˜Z[X›KˆŠNÂˆÛÛœÝYYXQ]šXÙ\ÈH˜]šYØ]Ü‹›YYXQ]šXÙ\ÎÂˆÛÛœÝÜšYÚ[˜[Ù]\Ù\“YYXHHYYXQ]šXÙ\Ë™Ù]\Ù\“YYXK˜š[™
YYXQ]šXÙ\ÊNÂˆÛÛœÝ™]™\šYšYYÝ™X[HHÛÛ›™XÝÜ[ÛœËœ™]™\šYšYYZXÜ›ÜÛ™TÝ™X[H[ÂˆÛÛœÝ™]™\šYšYY›ÛÙˆH™]™\šYšYYÝ™X[HÈZXÜ›ÜÛ™T›ÛÙ‘›Ü”Ý™X[J™]™\šYšYYÝ™X[JHˆ[ÂˆYˆ
™]™\šYšYYÝ™X[H	‰ˆ\™]™\šYšYY›ÛÙ‹š\Ó]™U˜XÚÊH›ÝÈ™]È\œ›ÜŠ”™KXXÜ]Z\™Y™^\ÈZXÜ›ÜÛ™HÝ™X[H\È›Ý]™KˆŠNÂˆ]™\]Y\ÝYH˜[ÙNÂˆ]XÜ]Z\™YÝ™X[HH™]™\šYšYYÝ™X[H[ÂˆYYXQ]šXÙ\Ë™Ù]\Ù\“YYXHH\Þ[˜È
ÛÛœÝ˜Z[ÊHOˆÂˆ™\]Y\ÝYHYNÂˆ[Z]
›YYXWÜÝ™X[WÜ™\]Y\ÝY‹È]Y[Ô™\]Y\ÝYˆ›ÛÛX[ŠÛÛœÝ˜Z[ÏË˜]Y[ÊHJNÂˆYˆ
™]™\šYšYYÝ™X[JHÂˆ[Z]
›YYXWÜÝ™X[WØXÜ]Z\™Y‹ÂˆÝ™X[PXÝ]™Nˆ™]™\šYšYY›ÛÙ‹œÝ™X[PXÝ]™Kˆ˜XÚÐÛÝ[ˆ™]™\šYšYY›ÛÙ‹˜XÚÐÛÝ[ˆ˜XÚÔÝ]Nˆ™]™\šYšYY›ÛÙ‹˜XÚÔÝ]Kˆ˜XÚÑ[˜X›Yˆ™]™\šYšYY›ÛÙ‹˜XÚÑ[˜X›Yˆ\Ó]™U˜XÚÎˆ™]™\šYšYY›ÛÙ‹š\Ó]™U˜XÚËˆ™]™\šYšYYˆYBˆJNÂˆ™]\›ˆ™]™\šYšYYÝ™X[NÂˆBˆžHÂˆXÜ]Z\™YÝ™X[HH]ØZ]ÜšYÚ[˜[Ù]\Ù\“YYXJÛÛœÝ˜Z[ÊNÂˆÛÛœÝ›ÛÙŒˆHZXÜ›ÜÛ™T›ÛÙ‘›Ü”Ý™X[JXÜ]Z\™YÝ™X[JNÂˆ[Z]
›YYXWÜÝ™X[WØXÜ]Z\™Y‹ÂˆÝ™X[PXÝ]™Nˆ›ÛÙŒ‹œÝ™X[PXÝ]™Kˆ˜XÚÐÛÝ[ˆ›ÛÙŒ‹˜XÚÐÛÝ[ˆ˜XÚÔÝ]Nˆ›ÛÙŒ‹˜XÚÔÝ]Kˆ˜XÚÑ[˜X›Yˆ›ÛÙŒ‹˜XÚÑ[˜X›Yˆ\Ó]™U˜XÚÎˆ›ÛÙŒ‹š\Ó]™U˜XÚÂˆJNÂˆYˆ
›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚÊHÂˆ›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚË˜Y]™[\Ý[™\Š™[™Y‹

HOˆ[Z]
›ZXÜ›ÜÛ™WÝ˜XÚ×Ù[™Y‹È˜XÚÔÝ]Nˆ›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚËœ™XYTÝ]HJKÈÛ˜ÙNˆYHJNÂˆ›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚË˜Y]™[\Ý[™\Š›]]H‹

HOˆ[Z]
›ZXÜ›ÜÛ™WÝ˜XÚ×Û]]Y‹È˜XÚÔÝ]Nˆ›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚËœ™XYTÝ]HJJNÂˆ›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚË˜Y]™[\Ý[™\Š[›]]H‹

HOˆ[Z]
›ZXÜ›ÜÛ™WÝ˜XÚ×Ý[›]]Y‹È˜XÚÔÝ]Nˆ›ÛÙŒ‹›ZXÜ›ÜÛ™U˜XÚËœ™XYTÝ]HJJNÂˆBˆ™]\›ˆXÜ]Z\™YÝ™X[NÂˆHØ]Ú
\œ›ÜLJHÂˆÛÛœÝ›Ü›X[^™YH›Ü›X[^™Q\œ›ÜŠ\œ›ÜLJNÂˆ[Z]
›YYXWÜÝ™X[WÙ˜Z[Y‹È\Nˆ›Ü›X[^™Y\KY\ÜØYÙNˆ›Ü›X[^™Y›Y\ÜØYÙHJNÂˆ›ÝÈ\œ›ÜLNÂˆBˆNÂˆžHÂˆ]ØZ]Ù\ÜÚ[Û‹˜ÛÛ›™XÝ
ÛÛ›™XÝÜ[ÛœÊNÂˆHš[˜[HÂˆYYXQ]šXÙ\Ë™Ù]\Ù\“YYXHHÜšYÚ[˜[Ù]\Ù\“YYXNÂˆBˆÛÛœÝ›ÛÙˆHZXÜ›ÜÛ™T›ÛÙ‘›Ü”Ý™X[JXÜ]Z\™YÝ™X[JNÂˆYˆ
\™\]Y\ÝY
H›ÝÈ™]È\œ›ÜŠ“Ü[RH™X[[YHY›Ý™\]Y\Ýœ›ÝÜÙ\ˆZXÜ›ÜÛ™HØ\\™KˆŠNÂˆYˆ
\›ÛÙ‹š\Ó]™U˜XÚÊH›ÝÈ™]È\œ›ÜŠ“Ü[RH™X[[YHÛÛ›™XÝYÚ]Ý]H]™HZXÜ›ÜÛ™H˜XÚËˆŠNÂˆ[Z]
›ZXÜ›ÜÛ™WÝ˜XÚ×Û]™H‹ÂˆÝ™X[PXÝ]™Nˆ›ÛÙ‹œÝ™X[PXÝ]™Kˆ˜XÚÐÛÝ[ˆ›ÛÙ‹˜XÚÐÛÝ[ˆ˜XÚÔÝ]Nˆ›ÛÙ‹˜XÚÔÝ]Kˆ˜XÚÑ[˜X›Yˆ›ÛÙ‹˜XÚÑ[˜X›Yˆ˜XÚÓ]]Yˆ›ÛÙ‹˜XÚÓ]]YˆJNÂˆ™]\›ˆÈÝ™X[NˆXÜ]Z\™YÝ™X[KZXÜ›ÜÛ™U˜XÚÎˆ›ÛÙ‹›ZXÜ›ÜÛ™U˜XÚË›ÛÙˆNÂŸB™[˜Ý[Ûˆ™\ÜÛœÙQ›Ü“[Ù[
™\Ý[HßJHÂˆ™]\›ˆ”ÓÓ‹œÝš[™ÚYžJÂˆÚÎˆ›ÛÛX[Š™\Ý[›ÚÈOOH˜[ÙJKˆÝ]\Îˆ™\Ý[œÝ]\È˜ÛÛ\]Y‹ˆ™\ÜÛœÙNˆØY™U^
™\Ý[œ™\ÜÛœÙH™\Ý[œÜÚÙ[ˆ™\Ý[˜[œÝÙ\ˆ“™^\ÈÛÛ\]YHÛÛ™\]Y\Ýˆ‹LŒ
KˆÚ]][ÛœÎˆ\œ˜^Kš\Ð\œ˜^J™\Ý[˜Ú]][ÛœÊHÈ™\Ý[˜Ú]][ÛœËœÛXÙJJHˆ×KˆÛÝ\˜Ù\Îˆ\œ˜^Kš\Ð\œ˜^J™\Ý[œÛÝ\˜Ù\ÊHÈ™\Ý[œÛÝ\˜Ù\ËœÛXÙJJHˆ×KˆZ\ÜÚ[™Ò[™›Ü›X][ÛŽˆ™\Ý[›Z\ÜÚ[™Ò[™›Ü›X][Ûˆ×KˆZ\ÜÚ[™Ñ[•˜\œÎˆ™\Ý[›Z\ÜÚ[™Ñ[•˜\œÈ™\Ý[›Z\ÜÚ[™Ñ[ˆ×Kˆ›ØÚÙY™X\ÛÛŽˆ™\Ý[˜›ØÚÙY™X\ÛÛˆ[ˆ›ÝšY\][\Yˆ›ÛÛX[Š™\Ý[œ›ÝšY\][\Y™\Ý[œ›ÝšY\Ë˜][\Y
Kˆ›ÝšY\”ÝXØÙYYYˆ›ÛÛX[Š™\Ý[œ›ÝšY\”ÝXØÙYYY™\Ý[œ›ÝšY\ËœÝXØÙYYY
Kˆ^XÝ][Û][\Yˆ›ÛÛX[Š™\Ý[™^XÝ][Û][\Y™\Ý[™^XÝ][ÛË˜][\Y
Kˆ^XÝ][Û•™\šYšYYˆ›ÛÛX[Š™\Ý[™^XÝ][Û•™\šYšYY™\Ý[™^XÝ][ÛË™\šYšYY
Kˆ›ÔÙXÜ™]˜[Y\Ô™]\›™YˆYKˆ›Õ[™Ø]Y^XÝ][ÛŽˆYKˆ[œÝXÝ[ÛŽˆ‘^Z[ˆ\È™^\È™\Ý[˜]\˜[KˆÈ›Ý™XY”ÓÓ‹›Ý]H˜[Y\Ë[\›˜[Ý]\ÈX™[ËÜ™Y[X[ËÜˆY]Y]H[ÝYˆ‚ˆJNÂŸB™[˜Ý[ÛˆÜ™X]S™^\Ô™X[[YUÛÛ
˜[YK\ØÜš\[Û‹Ü[ÛœÊHÂˆ™]\›ˆÛÛ
Âˆ˜[YKˆ\ØÜš\[Û‹ˆÝšXÝˆ˜[ÙKˆ\˜[Y]\œÎˆ‘VT×Ô‘PSSQWÕÓÓÔTSQUT”Ëˆ[Y[Ý]\Îˆ[X™\ŠÜ[ÛœËÛÛ[Y[Ý]\ÈMYLÊKˆ[Y[Ý]™Z]š[ÜŽˆ™\œ›Ü—Ø\×Ü™\Ý[‹ˆ™YYÐ\›Ý˜[ˆ˜[ÙKˆ\Þ[˜È^XÝ]J[œ]
HÂˆÛÛœÝ\™ÜÈH[œ]	‰ˆ\[Ùˆ[œ]OOH›Øš™XÝˆÈ[œ]ˆßNÂˆÛÛœÝÛÛ[X[™HØY™U^
\™ÜË˜ÛÛ[X[™\™ÜËœ]Y\žHÜ[ÛœË›\Ý\Ù\ÛÛ[X[™ËŠ
Hˆ‹L
NÂˆÛÛœÝ™\Ý[H]ØZ]Ü[ÛœË˜Ø[™^\ÕÛÛ
˜[YKÂˆ‹‹˜\™ÜËˆÛÛ[X[™ˆ[™ÝXYÙNˆ\™ÜË›[™ÝXYÙHÜ[ÛœË›[™ÝXYÙOËŠ
H™[ˆ‚ˆJNÂˆÜ[ÛœË›Û•ÛÛ™\Ý[ËŠ˜[YK™\Ý[
NÂˆ™]\›ˆ™\ÜÛœÙQ›Ü“[Ù[
™\Ý[
NÂˆKˆ\œ›Ü‘[˜Ý[ÛŠØÛÛ^‹\œ›ÜLJHÂˆÛÛœÝ›Ü›X[^™YH›Ü›X[^™Q\œ›ÜŠ\œ›ÜLJNÂˆ™]\›ˆ™\ÜÛœÙQ›Ü“[Ù[
ÂˆÚÎˆ˜[ÙKˆÝ]\Îˆ™˜Z[Y]][H‹ˆ™\ÜÛœÙNˆ•H™^\ÈÛÛ^Y\ˆÛÝ[›ÝÛÛ\]H]™\]Y\ÝšYÚ›ÝËˆ‹ˆ›ØÚÙY™X\ÛÛŽˆ›Ü›X[^™Y\BˆJNÂˆBˆJNÂŸB™[˜Ý[ÛˆÜ™X]S™^\Ô™X[[YUÛÛÊÜ[ÛœÊHÂˆ™]\›ˆ‘VT×Ô‘PSSQWÕÓÓÑQ’S’USÓ”Ë›X\

Û˜[YK\ØÜš\[Û—JHOˆÜ™X]S™^\Ô™X[[YUÛÛ
˜[YK\ØÜš\[Û‹Ü[ÛœÊJNÂŸB˜\Þ[˜È[˜Ý[ÛˆÝ\™^\ÓÜ[ZT™X[[YQÙ[™\Ú\ÔÙ\ÜÚ[ÛŠÜ[ÛœÈHßJHÂˆYˆ
[Ü[ÛœË˜ÛY[ÙXÜ™]
H›ÝÈ™]È\œ›ÜŠ“Ü[RH™X[[YHÛY[ÙXÜ™]\È™\]Z\™YˆŠNÂˆÛÛœÝ[™ÝXYÙHHÜ[ÛœË›[™ÝXYÙOËŠ
H™[ˆŽÂˆÛÛœÝ™]™\šYšYYZXÜ›ÜÛ™TÝ™X[HHÜ[ÛœËœ™]™\šYšYYZXÜ›ÜÛ™TÝ™X[H[ÂˆÛÛœÝYÙ[H™]È™X[[YPYÙ[
Âˆ˜[YNˆ“™^\ÈÙ[™\Ú\È‹ˆ›ÚXÙNˆÜ[ÛœË›ÚXÙH›X\š[ˆ‹ˆ[œÝXÝ[ÛœÎˆ	ÛÜ[ÛœËš[œÝXÝ[ÛœÈˆŸHÙ[™\˜[ÛÛ™\œØ][Û‹Ü™Y][™ÜË™\Ù[˜ÙHÚXÚÜË[[Ý[Û˜[Ý\ÜØ\Xš[]H]Y\Ý[ÛœËØ\ÝX[]Y\Ý[ÛœË[™ÛÛ^X[›ÛÝË]\È]\Ý™H[œÝÙ\™Y\™XÝHžHH[Ù[Ú]Ý]H[˜Ý[ÛˆÛÛˆØ[H™^\ÈÛÛÛ›H›ÜˆHÙ[Z[™HÙX]\‹ÛÝ\˜ÙH™]šY]˜[X\YÜšXÝ[\™KX[\™\\˜][Û‹ÛÜšÙ›Ü˜ÙKX\šÙ]XÙKÛÛ[][šXØ][Û‹ÛÜšÙ›ÝË›ÝšY\‹\™XY[™\ÜËØ[Ý[][Û‹Ù]Kš[Kš\ÝX[Y[[ÜžK™[Z[™\‹Ø[[™\‹^Üœ›ÝÜÙ\‹XXÝ[Û‹Üˆ™XÙZ\™\]Y\ÝˆÙY\]™\žHÛÛ™\Ý[›ÝšY\ˆ˜Z[\™KÛ\šYšXØ][Û‹[™Ø\Xš[]H[œÝÙ\ˆ[œÚYHHÝ\œ™[›ÚXÙHÛÛ™\œØ][Ûˆ[›\ÜÈH\Ù\ˆ^XÚ]H\ÚÜÈÈ˜]šYØ]Kˆ™]™\ˆÜ[ˆÜˆY[[ÛˆÜ[š[™ÈRH[\Ú›Ø\™ËÛÜšÜÜXÙ\Ë[œËÜˆ[ÙH[™[È[›\ÜÈ˜]šYØ][ÛˆØ\È^XÚ]H™\]Y\ÝY˜ˆÛÛÎˆÜ™X]S™^\Ô™X[[YUÛÛÊÜ[ÛœÊBˆJNÂˆÛÛœÝÙ\ÜÚ[ÛˆH™]È™X[[YTÙ\ÜÚ[ÛŠYÙ[Âˆ˜[œÜÜˆÙXœÈ‹ˆ[Ù[ˆÜ[ÛœË›[Ù[™Ü\™X[[YKLˆ‹ˆÛÛ™šYÎˆÜ[ÛœË˜ÛY[ÛÛ™šYÈßKˆÛÛ^ˆÂˆ™^\Ô[[YNˆ›Ü[˜ZKXYÙ[Ë\™X[[YH‹ˆ[™ÝXYÙKˆ›ÔÙXÜ™]˜[Y\Ô™]\›™YˆYKˆ›Õ[™Ø]Y^XÝ][ÛŽˆYBˆKˆÛÛ\œ›Ü‘›Ü›X]\Žˆ
\œ›ÜLJHOˆÂˆÛÛœÝ›Ü›X[^™YH›Ü›X[^™Q\œ›ÜŠ\œ›ÜLJNÂˆ™]\›ˆH™^\ÈÛÛ^Y\ˆ˜Z[Y][Nˆ	Û›Ü›X[^™Y\_Kˆ\ÚÈÛ™HÛÛ˜Ú\ÙH›ÛÝË]\]Y\Ý[Û‹˜ÂˆBˆJNÂˆÛÛœÝ[Z]H
]™[^[ØYHßJHOˆÜ[ÛœË›Û‘]™[ËŠ]™[^[ØY
NÂˆÙ\ÜÚ[Û‹›ÛŠ˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹
Ý]\ÊHOˆ[Z]
˜ÛÛ›™XÝ[Û—ØÚ[™ÙH‹ÈÝ]\ÈJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜]Y[×ÜÝ\‹

HOˆ[Z]
˜]Y[×ÜÝ\‹È\ÜÚ\Ý[ÜXZÚ[™ÎˆYHJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜]Y[×ÜÝÜY‹

HOˆ[Z]
˜]Y[×ÜÝÜY‹È\ÜÚ\Ý[ÜXZÚ[™Îˆ˜[ÙHJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜]Y[×Ú[\œ\Y‹

HOˆ[Z]
˜]Y[×Ú[\œ\Y‹È[\œ\YˆYHJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜YÙ[ÜÝ\‹

HOˆ[Z]
˜YÙ[ÜÝ\‹È›ØÙ\ÜÚ[™ÎˆYHJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜YÙ[Ù[™‹
ØÛÛ^‹ØYÙ[Ý]]
HOˆ[Z]
˜YÙ[Ù[™‹ÈÝ]]ˆØY™U^
Ý]]LŒ
HJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜YÙ[ÝÛÛÜÝ\‹
ØÛÛ^‹ØYÙ[ÛÛ™YŠHOˆ[Z]
˜YÙ[ÝÛÛÜÝ\‹ÈÛÛ˜[YNˆÛÛ™YË›˜[YHˆˆJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜YÙ[ÝÛÛÙ[™‹
ØÛÛ^‹ØYÙ[ÛÛ™Y‹™\Ý[
HOˆ[Z]
˜YÙ[ÝÛÛÙ[™‹ÈÛÛ˜[YNˆÛÛ™YË›˜[YHˆ‹™\Ý[ˆØY™U^
™\Ý[
HJJNÂˆÙ\ÜÚ[Û‹›ÛŠš\ÝÜžWÝ\]Y‹
\ÝÜžJHOˆ[Z]
š\ÝÜžWÝ\]Y‹È\›ÛÝ[ˆ\œ˜^Kš\Ð\œ˜^J\ÝÜžJHÈ\ÝÜžK›[™ÝˆJJNÂˆÙ\ÜÚ[Û‹›ÛŠš\ÝÜžWØYY‹
][JHOˆ[Z]
š\ÝÜžWØYY‹È\Nˆ][OË\Hˆ‹›ÛNˆ][OËœ›ÛHˆˆJJNÂˆÙ\ÜÚ[Û‹›ÛŠ˜[œÜÜÙ]™[‹
]™[
HOˆÂˆÛÛœÝ˜[œÜÜ]™[H]™[Ë™]™[	‰ˆ\[Ùˆ]™[™]™[OOH›Øš™XÝˆÈ]™[™]™[ˆ]™[ÂˆÛÛœÝ\HHÝš[™Ê˜[œÜÜ]™[Ë\H]™[Ë\HˆŠNÂˆÛÛœÝ][HH˜[œÜÜ]™[Ëš][H	‰ˆ\[Ùˆ˜[œÜÜ]™[š][HOOH›Øš™XÝˆÈ˜[œÜÜ]™[š][Hˆ[Âˆ[Z]
˜[œÜÜÙ]™[‹Âˆ\KˆXØÙ\[˜ÙU^ˆØY™U^
˜[œÜÜ]™[Ë˜[œØÜš\˜[œÜÜ]™[Ë™[H˜[œÜÜ]™[Ë^ˆ‹LŒ
Kˆ˜[œØÜš\ˆØY™U^
˜[œÜÜ]™[Ë˜[œØÜš\ˆ‹LŒ
Kˆ˜[œØÜš\ÚYˆÝš[™Ê˜[œÜÜ]™[Ë˜[œØÜš\ÚYˆŠKˆ][WÚYˆÝš[™Ê˜[œÜÜ]™[Ëš][WÚY][OËšYˆŠKˆ›ÛNˆÝš[™Ê˜[œÜÜ]™[Ëœ›ÛH][OËœ›ÛHˆŠKˆ][BˆJNÂˆJNÂˆÙ\ÜÚ[Û‹›ÛŠ™\œ›Üˆ‹
\œ›ÜLJHOˆ[Z]
™\œ›Üˆ‹›Ü›X[^™Q\œ›ÜŠ\œ›ÜLJJJNÂˆÛÛœÝZXÜ›ÜÛ™HH]ØZ]ÛÛ›™XÝÙ\ÜÚ[Û•Ú]ZXÜ›ÜÛ™T›ÛÙŠÙ\ÜÚ[Û‹Âˆ\RÙ^NˆÜ[ÛœË˜ÛY[ÙXÜ™]ˆ[Ù[ˆÜ[ÛœË›[Ù[™Ü\™X[[YKLˆ‹ˆ™]™\šYšYYZXÜ›ÜÛ™TÝ™X[BˆK[Z]
NÂˆ™]\›ˆÂˆÙ\ÜÚ[Û‹ˆYYXTÝ™X[NˆZXÜ›ÜÛ™KœÝ™X[KˆZXÜ›ÜÛ™U˜XÚÎˆZXÜ›ÜÛ™K›ZXÜ›ÜÛ™U˜XÚËˆÙ]ZXÜ›ÜÛ™T›ÛÙŠ
HÂˆ™]\›ˆZXÜ›ÜÛ™T›ÛÙ‘›Ü”Ý™X[JZXÜ›ÜÛ™KœÝ™X[JNÂˆKˆÛÜÙJ™X\ÛÛˆH˜ÛÜÙY‹Ü[ÛœÌˆHßJHÂˆ[Z]
˜ÛÜÚ[™È‹È™X\ÛÛˆJNÂˆÙ\ÜÚ[Û‹˜ÛÜÙJ
NÂˆÛÛœÝÚÝ[ÝÜZXÜ›ÜÛ™HHÜ[ÛœÌ‹œÝÜZXÜ›ÜÛ™HOOHYH[Ü[ÛœÌ‹œ™]™\šYšYYZXÜ›ÜÛ™H	‰ˆ\™]™\šYšYYZXÜ›ÜÛ™TÝ™X[NÂˆYˆ
ÚÝ[ÝÜZXÜ›ÜÛ™JHÂˆžHÂˆZXÜ›ÜÛ™KœÝ™X[OË™Ù]˜XÚÜÏËŠ
K™›Ü‘XXÚ

˜XÚÊHOˆ˜XÚËœÝÜ

JNÂˆHØ]ÚÂˆBˆBˆKˆ[\œ\

HÂˆÙ\ÜÚ[Û‹š[\œ\

NÂˆKˆ]]J˜[YJHÂˆÙ\ÜÚ[Û‹›]]J›ÛÛX[Š˜[YJJNÂˆKˆÙ[™Y\ÜØYÙJ^
HÂˆÙ\ÜÚ[Û‹œÙ[™Y\ÜØYÙJÝš[™Ê^ˆŠJNÂˆBˆNÂŸB™[˜Ý[Ûˆ›Ü›X[^™S™^\ÓÜ[ZT™X[[YQ\œ›ÜŠ\œ›ÜLJHÂˆ™]\›ˆ›Ü›X[^™Q\œ›ÜŠ\œ›ÜLJNÂŸB™^ÜÂˆ›Ü›X[^™S™^\ÓÜ[ZT™X[[YQ\œ›Ü‹ˆÝ\™^\ÓÜ[ZT™X[[YQÙ[™\Ú\ÔÙ\ÜÚ[Û‚ŸNÂ