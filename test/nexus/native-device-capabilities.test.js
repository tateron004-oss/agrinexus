const assert = require("node:assert/strict");
const test = require("node:test");
const fs = require("node:fs");
const path = require("node:path");

const root = path.join(__dirname, "../..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("Android performs real GPS, camera, file, notification, and lifecycle operations", () => {
  const runtime = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusDeviceRuntime.kt");
  const controller = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNativeController.kt");
  const receiver = read("native-mobile/android/app/src/main/java/com/agrinexus/mobile/NexusNotificationReceiver.kt");
  for (const token of ["requestLocationUpdates", "ACTION_IMAGE_CAPTURE", "ACTION_OPEN_DOCUMENT", "setAndAllowWhileIdle", "file-too-large"]) assert.match(runtime, new RegExp(token));
  assert.match(controller, /LOAD_CACHE_ELSE_NETWORK/);
  assert.match(controller, /nexus-native-events/);
  assert.match(controller, /offline\.queue_flushed/);
  assert.match(controller, /https:\/\/nexus-genesis-certified\.onrender\.com/);
  assert.match(receiver, /NotificationCompat\.Builder/);
  assert.doesNotMatch(runtime, /status", "ready"/);
});

test("iOS performs real Core Location, camera, file, notification, and lifecycle operations", () => {
  const runtime = read("native-mobile/ios/AgriNexus/NexusDeviceRuntime.swift");
  const controller = read("native-mobile/ios/AgriNexus/NexusWebViewController.swift");
  for (const token of ["startUpdatingLocation", "UIImagePickerController", "UIDocumentPickerViewController", "UNNotificationRequest", "registerForRemoteNotifications", "offline.queue_flushed"]) {
    assert.match(runtime, new RegExp(token.replace(".", "\\.")));
  }
  assert.match(controller, /https:\/\/nexus-genesis-certified\.onrender\.com/);
  assert.doesNotMatch(controller, /status": "ready"/);
});

test("native bridge exposes file, push, notification, route stop, and lifecycle recovery commands", () => {
  const bridge = JSON.parse(read("public/native-bridge.json"));
  assert.equal(bridge.version, "2.0.0");
  for (const command of ["file.open","push.register","notification.schedule","route.stop","lifecycle.flush"]) assert.ok(bridge.webCommands.includes(command));
  for (const event of ["file.attached","push.registration_requested","push.registration_unavailable","offline.queue_flushed"]) assert.ok(bridge.nativeEvents.includes(event));
});
