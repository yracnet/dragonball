import { jsxs, jsx } from "react/jsx-runtime";
import React, { useState, useEffect } from "react";
import require$$0 from "react-dom";
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
var client = {};
var m = require$$0;
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
  return /* @__PURE__ */ jsxs(Row, { children: [
    /* @__PURE__ */ jsxs(Col, { sm: "6", md: "3", children: [
      "DRAGONBALL",
      /* @__PURE__ */ jsx(Accordion, { defaultActiveKey: "0", children: data.map((it, ix) => {
        return /* @__PURE__ */ jsxs(Accordion.Item, { eventKey: `${ix}`, children: [
          /* @__PURE__ */ jsxs(Accordion.Header, { children: [
            /* @__PURE__ */ jsx(Badge, { children: it.capitulos.length }),
            it.title
          ] }),
          /* @__PURE__ */ jsx(Accordion.Body, { className: "scrolling-body", children: /* @__PURE__ */ jsx(Table, { variant: "striped", children: /* @__PURE__ */ jsx("tbody", { children: it.capitulos.map((it2, ix2) => {
            const className = it2.nro === focus.nro ? "bg-warning text-white" : "";
            return /* @__PURE__ */ jsxs("tr", { children: [
              /* @__PURE__ */ jsx("td", { className, children: /* @__PURE__ */ jsxs(Badge, { children: [
                "Cap: ",
                it2.nro
              ] }) }),
              /* @__PURE__ */ jsx("td", { className, children: /* @__PURE__ */ jsx(
                "a",
                {
                  target: "_blank",
                  href: it2.url,
                  onClick: () => setFocus(it2),
                  className: "btn btn-danger",
                  children: /* @__PURE__ */ jsx("b", { children: it2.titulo })
                }
              ) }),
              /* @__PURE__ */ jsx("td", { className, children: /* @__PURE__ */ jsx(
                "a",
                {
                  href: `#${it2.url}`,
                  onClick: () => setFocus(it2),
                  className: "btn btn-primary",
                  children: /* @__PURE__ */ jsx("b", { children: "PLAY" })
                }
              ) })
            ] }, ix2);
          }) }) }) })
        ] }, ix + 1);
      }) })
    ] }),
    /* @__PURE__ */ jsxs(Col, { sm: "6", md: "9", children: [
      /* @__PURE__ */ jsxs("h2", { children: [
        /* @__PURE__ */ jsx(Badge, { children: focus.nro }),
        " ",
        focus.titulo
      ] }),
      /* @__PURE__ */ jsx(
        "iframe",
        {
          width: "400",
          height: "300",
          allowFullScreen: true,
          src: focus.url
        }
      ),
      /* @__PURE__ */ jsx("p", { children: focus.resumen })
    ] })
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
