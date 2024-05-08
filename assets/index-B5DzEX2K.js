import require$$0, { useState, useEffect } from "react";
import require$$0$1 from "react-dom";
import { Row, Col, Accordion, Badge, Table } from "react-bootstrap";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = require$$0, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b in a)
    m$1.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
var jsxRuntimeExports = jsxRuntime.exports;
var client = {};
var m = require$$0$1;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const baseName = "/dragonball";
function App() {
  const [focus, setFocus] = useState({ nro: 0 });
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`${baseName}/data.json`).then((r) => r.json()).then((data2) => setData(data2));
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Row, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "3", children: [
      "DRAGONBALL",
      /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion, { defaultActiveKey: "0", children: data.map((it, ix) => {
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion.Item, { eventKey: `${ix}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Accordion.Header, { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: it.capitulos.length }),
            it.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Accordion.Body, { className: "scrolling-body", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Table, { variant: "striped", children: /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: it.capitulos.map((it2, ix2) => {
            const className = it2.nro === focus.nro ? "bg-warning text-white" : "";
            return /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Badge, { children: [
                "Cap: ",
                it2.nro
              ] }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  target: "_blank",
                  href: it2.url,
                  onClick: () => setFocus(it2),
                  className: "btn btn-danger",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: it2.titulo })
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: `#${it2.url}`,
                  onClick: () => setFocus(it2),
                  className: "btn btn-primary",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "PLAY" })
                }
              ) })
            ] }, ix2);
          }) }) }) })
        ] }, ix + 1);
      }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Col, { sm: "6", md: "9", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Badge, { children: focus.nro }),
        " ",
        focus.titulo
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          width: "400",
          height: "300",
          allowFullScreen: true,
          src: focus.url
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: focus.resumen })
    ] })
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(require$$0.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(App, {}) })
);
