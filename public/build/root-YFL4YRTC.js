import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "/build/_shared/chunk-BWWTP2IU.js";
import {
  MantineProvider,
  NotificationsProvider
} from "/build/_shared/chunk-5FJAJG3K.js";
import "/build/_shared/chunk-ZYPCWYTR.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/yeesiang/testbase/remix-mantine/app/root.jsx?browser
init_react();

// app/root.jsx
init_react();
var meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ React.createElement(MantineProvider, null, /* @__PURE__ */ React.createElement(NotificationsProvider, null, /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement(Meta, null), /* @__PURE__ */ React.createElement(Links, null)), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(Outlet, null), /* @__PURE__ */ React.createElement(ScrollRestoration, null), /* @__PURE__ */ React.createElement(Scripts, null), /* @__PURE__ */ React.createElement(LiveReload, null)))));
}
export {
  App as default,
  meta
};
//# sourceMappingURL=/build/root-YFL4YRTC.js.map
