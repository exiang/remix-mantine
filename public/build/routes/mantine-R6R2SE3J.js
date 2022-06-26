import {
  Button,
  Notification,
  Text,
  showNotification,
  useModals
} from "/build/_shared/chunk-E6GULHWZ.js";
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
  const modals = useModals();
  const openConfirmModal = () => modals.openConfirmModal({
    title: "Please confirm your action",
    children: /* @__PURE__ */ React.createElement(Text, {
      size: "sm"
    }, "This action is so important that you are required to confirm it with a modal. Please click one of these buttons to proceed."),
    labels: { confirm: "Confirm", cancel: "Cancel" },
    onCancel: () => console.log("Cancel"),
    onConfirm: () => console.log("Confirmed")
  });
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h1", null, "Mantine"), /* @__PURE__ */ React.createElement("h2", null, "Buttons"), /* @__PURE__ */ React.createElement(Button, null, "Hello world!"), /* @__PURE__ */ React.createElement("h2", null, "Notifications"), /* @__PURE__ */ React.createElement(Notification, {
    title: "We notify you that"
  }, "You are now obligated to give a star to Mantine project on GitHub"), /* @__PURE__ */ React.createElement(Button, {
    variant: "outline",
    onClick: () => showNotification({
      title: "Default notification",
      message: "Hey there, your code is awesome! \u{1F925}"
    })
  }, "Show notification"), /* @__PURE__ */ React.createElement("h2", null, "Modals"), /* @__PURE__ */ React.createElement(Button, {
    onClick: openConfirmModal
  }, "Open confirm modal"));
}
export {
  Mantine as default
};
//# sourceMappingURL=/build/routes/mantine-R6R2SE3J.js.map
