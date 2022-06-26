import {
  Button,
  Group,
  Notification,
  showNotification
} from "/build/_shared/chunk-2ZWHLJUW.js";
import "/build/_shared/chunk-ZYPCWYTR.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// browser-route-module:/Users/yeesiang/testbase/remix-mantine/app/routes/mantine.jsx?browser
init_react();

// app/routes/mantine.jsx
init_react();
function Mantine() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Mantine"), /* @__PURE__ */ React.createElement("h2", null, "Buttons"), /* @__PURE__ */ React.createElement(Button, null, "Hello world!"), /* @__PURE__ */ React.createElement("h2", null, "Notifications"), /* @__PURE__ */ React.createElement(Notification, {
    title: "We notify you that"
  }, "You are now obligated to give a star to Mantine project on GitHub"), /* @__PURE__ */ React.createElement(Group, {
    position: "center"
  }, /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => showNotification({
      title: "Default notification",
      message: "Hey there, your code is awesome! \u{1F925}"
    })
  }, "Show notification")));
}
export {
  Mantine as default
};
//# sourceMappingURL=/build/routes/mantine-TF5RVOOR.js.map
