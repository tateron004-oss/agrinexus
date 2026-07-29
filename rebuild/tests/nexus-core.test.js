"use strict";

const assert = require("node:assert/strict");
const { NexusConnectionMachine } = require("../nexus-core/connection-machine");
const { routeCommand } = require("../nexus-core/router");

const machine = new NexusConnectionMachine();
machine.beginMicrophone("nexus-primary");
machine.microphoneReady("nexus-primary", "track-1");
machine.requestSession("nexus-primary");
machine.connecting("nexus-primary", "session-1");
machine.connected("nexus-primary");

assert.equal(machine.snapshot().state, "connected");
assert.equal(machine.snapshot().receipts.length, 5);
assert.equal(routeCommand("Open the map of Nairobi", machine.state).workspace, "maps");
assert.equal(routeCommand("Search farming jobs in Kenya", machine.state).workspace, "workforce");
assert.equal(routeCommand("Sell 50 bags of maize", machine.state).workspace, "marketplace");
assert.equal(routeCommand("Record my blood pressure", machine.state).workspace, "health");
assert.equal(routeCommand("Play Kenyan music", machine.state).workspace, "music");
assert.equal(routeCommand("Show today's weather in Nairobi", machine.state).workspace, "live-knowledge");
assert.equal(routeCommand("Show the forecast for Mombasa", machine.state).workspace, "live-knowledge");
assert.equal(routeCommand("Open the map", "closed").code, "realtime-not-connected");

assert.throws(() => {
  const duplicate = new NexusConnectionMachine();
  duplicate.beginMicrophone("owner-a");
  duplicate.beginMicrophone("owner-b");
}, /already owned/);

assert.throws(() => {
  const invalid = new NexusConnectionMachine();
  invalid.connected("nexus-primary");
}, /ownership mismatch/);

machine.close();
assert.equal(machine.snapshot().state, "closed");
assert.equal(machine.snapshot().microphoneOwner, null);

console.log("Nexus clean core foundation: PASS");
