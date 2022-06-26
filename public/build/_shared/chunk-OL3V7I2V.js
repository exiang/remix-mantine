import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-IYRIQ6PI.js";

// node_modules/@mantine/notifications/esm/events.js
init_react();
var import_react = __toESM(require_react());
var NOTIFICATIONS_EVENTS = {
  show: "mantine:show-notification",
  hide: "mantine:hide-notification",
  update: "mantine:update-notification",
  clean: "mantine:clean-notifications",
  cleanQueue: "mantine:clean-notifications-queue"
};
function createEvent(type, detail) {
  return new CustomEvent(type, { detail });
}
function showNotification(notification) {
  window.dispatchEvent(createEvent(NOTIFICATIONS_EVENTS.show, notification));
}

// node_modules/@mantine/notifications/esm/index.js
init_react();

export {
  showNotification
};
//# sourceMappingURL=/build/_shared/chunk-OL3V7I2V.js.map
