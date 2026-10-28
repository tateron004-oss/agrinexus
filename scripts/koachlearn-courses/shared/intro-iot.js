"use strict";

// Koach Learn course (shared): "Introduction to the Internet of Things (IoT)". Listed for Veterans (military) and Workforce Development; category = the first one catalog.js gives (Veterans (military)).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

const FTC = { name: "FTC Consumer Advice: Securing Your Internet-Connected Devices at Home", url: "https://consumer.ftc.gov/articles/securing-your-internet-connected-devices-home" };
const CISA = { name: "CISA: Secure Our World", url: "https://www.cisa.gov/secure-our-world" };
const WOKWI = { name: "Wokwi online electronics simulator", url: "https://wokwi.com/" };

module.exports = {
  id: "intro-iot",
  category: "Veterans (military)",
  name: "Introduction to the Internet of Things (IoT)",
  skills: "Explaining how IoT systems work, Choosing sensors and actuators, Comparing ways devices connect, Writing a simple alert rule, Securing connected devices, Planning an IoT project",
  outcome: "plan a simple IoT monitoring project from sensor to alert: choose the sensor, device, connection and app, write the alert rule as a short piece of code, and list the steps that keep the devices secure.",
  about: [
    "The Internet of Things (IoT) is everyday objects with sensors and an internet connection: smart thermostats, doorbell cameras, fitness trackers, farm soil sensors, and the trackers on trucks and shipping containers. IoT skills are used in facilities, logistics, energy, farming and security jobs, and many veterans already know the ideas from sensors, radios and equipment maintenance.",
    "This course explains how an IoT system works, layer by layer, how devices talk to each other, how a simple rule turns a reading into an action, and how to keep connected devices from becoming a way in for attackers. You do not need to buy any hardware. One lesson shows how to try a simulated device in your web browser.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "Write a one-page plan for an IoT monitoring project, such as a temperature alert for a server closet, a freezer at a food pantry, or a garden that needs water: name the sensor, the device, how it connects and where the data goes, draw the data flow from sensor to alert, write the alert rule as a short if-statement in Python, and list five steps you will take to secure the devices.",
  chapters: [
    {
      name: "Chapter 1: How IoT systems work",
      lessons: [
        {
          title: "What the Internet of Things is",
          minutes: 4,
          goal: "Explain IoT and spot IoT devices around you.",
          text: [
            "The Internet of Things (IoT) means physical things that sense the world, connect to a network and share data, often with no person typing anything. A smart thermostat measures the room and turns the heat on. A fitness tracker counts steps and sends them to your phone.",
            "IoT is used at home (doorbell cameras, smart plugs, voice speakers), at work (machines that report when they need repair, called predictive maintenance), in logistics (GPS trackers on trucks and containers), in farming (soil moisture sensors), in health (heart-rate monitors) and in cities (smart traffic lights).",
            "The value is in what the data lets you do: catch a problem early, save energy, or act from far away. The risk is that every connected device is one more thing that can be hacked or can leak private data, so security is part of every IoT job."
          ],
          words: [["Internet of Things (IoT)", "physical objects with sensors and a network connection that share data."], ["Smart device", "an everyday object that can connect and act on data."], ["Predictive maintenance", "using sensor data to fix a machine before it breaks."]],
          slides: [
            { title: "IoT is", bullets: ["Physical things that sense the world", "Connected to a network", "Sharing data, often on their own"] },
            { title: "Where you find it", bullets: ["Home: doorbells, smart plugs, speakers", "Work: machines that report problems", "Logistics, farming, health, cities"] },
            { title: "Value and risk", bullets: ["Catch problems early, save energy", "Act from far away", "Every device is a possible way in"] }
          ],
          tryIt: "Walk through your home, workplace or a store and list five connected devices you see or use. For each one, write what it senses and what it does with the data.",
          youCanNow: "explain what IoT is and name IoT devices in daily life and at work."
        },
        {
          title: "The four layers: sensors, devices, connection and cloud",
          minutes: 5,
          goal: "Trace the data in an IoT system from the sensor to the action.",
          text: [
            "Most IoT systems have four layers. 1) Sensors measure something: temperature, motion, light, location, moisture. 2) A device (often a small, cheap computer called a microcontroller, like an ESP32 or Arduino) reads the sensor and sends the data. 3) A connection carries the data: Wi-Fi, Bluetooth, cellular or a long-range radio. 4) A cloud service or app stores the data, shows it on a dashboard and sends alerts.",
            "Some devices also have actuators: parts that do something in the real world, such as a motor that opens a valve, a relay that switches on a fan, or a buzzer.",
            "Sometimes the device makes the decision itself instead of waiting for the cloud. This is edge computing. It is faster, keeps working when the internet is down, and sends less data."
          ],
          steps: ["Name what is measured (the sensor).", "Name the device that reads it.", "Name how the data travels (the connection).", "Name where it goes and who sees it (cloud, app, dashboard).", "Name the action, by a person or an actuator."],
          words: [["Sensor", "a part that measures something in the real world."], ["Microcontroller", "a tiny, low-cost computer on a chip that runs one program."], ["Actuator", "a part that acts in the real world, like a motor, relay or buzzer."], ["Dashboard", "a screen that shows live data in charts and numbers."], ["Edge computing", "processing data on or near the device instead of in the cloud."]],
          slides: [
            { title: "The four layers", bullets: ["1. Sensor measures", "2. Device reads and sends", "3. Connection carries", "4. Cloud or app stores, shows, alerts"] },
            { title: "Actuators act", bullets: ["Motor opens a valve", "Relay switches on a fan", "Buzzer sounds an alarm"] },
            { title: "Edge computing", bullets: ["Decide on the device itself", "Faster, works offline", "Sends less data"] }
          ],
          tryIt: "Pick one device from your list in Lesson 1. Draw boxes for its four layers (sensor, device, connection, cloud or app) with arrows between them, and add the action at the end.",
          youCanNow: "trace data through the four layers of an IoT system and name sensors and actuators."
        },
        {
          title: "How devices connect and talk",
          minutes: 5,
          goal: "Choose a suitable connection for an IoT device.",
          text: [
            "There is no single best connection; each trades off range, power and data. Wi-Fi is fast and common at home and work, but uses a lot of power. Bluetooth Low Energy (BLE) uses very little power and has short range, good for wearables and phones. Cellular (4G, 5G and low-power versions) works almost anywhere with a signal, good for vehicles and remote sites, but needs a data plan. LoRaWAN is a low-power, long-range radio for small amounts of data, used for farm and city sensors.",
            "Devices also need a shared language, called a protocol, to send messages. MQTT is a popular light protocol: a device publishes a reading to a topic, such as pantry/freezer/temp, and any app subscribed to that topic receives it. HTTP, the same protocol websites use, is also common.",
            "Battery devices save power by sleeping most of the time and waking up only to read and send."
          ],
          steps: ["How far must the data travel?", "Is there power, or only a battery?", "How much data, and how often?", "Is there Wi-Fi or cell signal where it will sit?", "Pick the connection that fits all four answers."],
          words: [["Wi-Fi", "fast wireless networking for homes and offices; uses more power."], ["Bluetooth Low Energy (BLE)", "very low-power, short-range wireless."], ["Cellular", "connection through mobile phone networks."], ["LoRaWAN", "a long-range, low-power radio network for small amounts of data."], ["Protocol", "an agreed set of rules for sending messages."], ["MQTT", "a light messaging protocol where devices publish to topics and apps subscribe."]],
          slides: [
            { title: "Pick by range, power and data", bullets: ["Wi-Fi: fast, more power", "BLE: tiny power, short range", "Cellular: almost anywhere, needs a plan", "LoRaWAN: long range, small data"] },
            { title: "Protocols", bullets: ["MQTT: publish to a topic, apps subscribe", "Example topic: pantry/freezer/temp", "HTTP: the language of websites"] },
            { title: "Save the battery", bullets: ["Sleep most of the time", "Wake, read, send, sleep again"] }
          ],
          tryIt: "Choose the best connection for each and write one reason: a step counter on your wrist, a soil sensor in a field 5 km from any building, a GPS tracker on a delivery truck, and a smart plug in a living room.",
          youCanNow: "pick a suitable connection and explain how IoT devices send messages."
        }
      ],
      check: {
        title: "Knowledge Check 1: How IoT systems work",
        questions: [
          { q: "Which is an IoT device?", options: ["A paper calendar", "A printed map", "A smart thermostat that adjusts the heat on its own", "A wooden chair"], answer: 2, why: "It senses, connects and acts on data." },
          { q: "In an IoT system, what does a sensor do?", options: ["Measures something in the real world", "Stores data in the cloud", "Pays the internet bill", "Shows the dashboard"], answer: 0, why: "Sensors measure things like temperature or motion." },
          { q: "A relay that switches on a fan is an:", options: ["Sensor", "Protocol", "Dashboard", "Actuator"], answer: 3, why: "Actuators do something in the physical world." },
          { q: "A soil sensor sits in a field far from Wi-Fi and runs on a battery. Which connection fits best?", options: ["Wi-Fi", "LoRaWAN", "A USB cable", "Bluetooth to a phone in your pocket"], answer: 1, why: "LoRaWAN is long-range and low-power for small data." },
          { q: "In MQTT, how does an app get a freezer's readings?", options: ["It calls the freezer on the phone", "It subscribes to the topic the freezer publishes to", "It prints them", "It guesses"], answer: 1, why: "MQTT apps subscribe to topics that devices publish to." }
        ]
      }
    },
    {
      name: "Chapter 2: Building and securing an IoT project",
      lessons: [
        {
          title: "From reading to action: writing an alert rule",
          minutes: 6,
          goal: "Write a simple rule in Python that turns a sensor reading into an alert.",
          text: [
            "The heart of most IoT projects is a rule: if a reading crosses a limit, do something. If the pantry freezer is warmer than -15 degrees C for 10 minutes, text the manager. If the soil moisture drops below 30 percent, open the water valve.",
            "In Python, a rule is an if-statement. For example: temp = 28.5, then if temp > 27: print(\"ALERT: server closet too hot\") else: print(\"OK\"). On a real device the reading comes from the sensor, and the action might light an LED, switch a relay or send a message.",
            "Good rules avoid false alarms. One spike might be a door opening for a moment, so many systems wait for several readings in a row before alerting. Pick a limit with the people who know the equipment, and decide who gets the alert and what they should do."
          ],
          steps: ["Decide what you measure and its safe range.", "Pick the limit that means trouble.", "Write it as if reading > limit: (or < limit).", "Decide the action: a message, a light or a relay.", "Add a rule to avoid false alarms, like several readings in a row."],
          words: [["Rule", "an if-then instruction: if this happens, do that."], ["Threshold", "the limit that triggers an action."], ["False alarm", "an alert when nothing is really wrong."], ["Reading", "one measurement from a sensor."]],
          slides: [
            { title: "IoT runs on rules", bullets: ["If a reading crosses a limit", "Then do something", "Freezer too warm: text the manager"] },
            { title: "A rule in Python", bullets: ["if temp > 27:", "    print(\"ALERT: too hot\")", "else: print(\"OK\")"] },
            { title: "Avoid false alarms", bullets: ["Wait for several readings in a row", "Set limits with the experts", "Decide who acts, and how"] }
          ],
          tryIt: "Open Google Colab (colab.research.google.com) or any Python editor. Make a list of six temperature readings, such as [22, 23, 29, 30, 31, 24]. Loop through them and print \"ALERT\" for any reading over 27 and \"OK\" for the rest. Bonus: only alert when two readings in a row are over 27.",
          youCanNow: "write a simple alert rule in Python that turns sensor readings into an action."
        },
        {
          title: "Trying a simulated device in your browser",
          minutes: 6,
          goal: "Run a simulated microcontroller with a sensor and see readings change.",
          text: [
            "You can practice IoT without buying parts. An online simulator such as Wokwi lets you place a virtual board like an ESP32, add a sensor like a DHT22 temperature and humidity sensor, and run code in your web browser. Check the site for which features are free and whether you need an account.",
            "The easiest start is to open one of the simulator's ready-made example projects for the ESP32 with a DHT22, then read the code and run it. In MicroPython, a version of Python for small devices, the key lines look like this: sensor = dht.DHT22(machine.Pin(15)), then sensor.measure() and t = sensor.temperature(). The pin number must match the pin the sensor is wired to in the diagram.",
            "While the simulation runs you can click the virtual sensor and change its temperature, then watch your printed readings and your alert rule respond. That is exactly how you test a real device before installing it."
          ],
          steps: ["Open the simulator website in your browser.", "Find an example project for an ESP32 with a DHT22 sensor.", "Read the code: find where it reads the sensor and where it prints.", "Start the simulation and watch the readings.", "Change the virtual sensor's temperature and add your alert rule from Lesson 4."],
          words: [["Simulator", "software that acts like real hardware so you can test without buying it."], ["ESP32", "a low-cost microcontroller with built-in Wi-Fi and Bluetooth."], ["DHT22", "a common, low-cost temperature and humidity sensor."], ["MicroPython", "a small version of Python that runs on microcontrollers."], ["Pin", "a metal connection point on a board where parts are wired."]],
          slides: [
            { title: "Practice without parts", bullets: ["Online simulators run in the browser", "Virtual ESP32 board plus a DHT22 sensor", "Check which features are free"] },
            { title: "The key MicroPython lines", bullets: ["sensor = dht.DHT22(machine.Pin(15))", "sensor.measure()", "t = sensor.temperature()"] },
            { title: "Test like the real thing", bullets: ["Change the virtual temperature", "Watch your alert rule respond", "The pin in code must match the wiring"] }
          ],
          sources: [WOKWI],
          tryIt: "Open an ESP32 and DHT22 example in an online simulator and run it. Change the virtual sensor's temperature at least twice and write down the readings. If you can, add an if-statement that prints \"ALERT\" above 27 degrees C. If you cannot use the simulator, trace the example code on paper: mark the line that reads the sensor and the line that prints.",
          youCanNow: "run and test a simulated IoT device and connect its readings to an alert rule."
        },
        {
          title: "Securing IoT devices and planning your project",
          minutes: 6,
          goal: "Apply the key security steps to connected devices and finish your project plan.",
          text: [
            "Connected devices are a favorite target for attackers because many ship with weak default passwords and are never updated. A hacked camera or smart plug can spy on people or be used to attack others.",
            "The US Federal Trade Commission's advice for home devices: change the default username and password and do not reuse passwords; turn on two-factor authentication where offered; keep firmware and the companion app updated; turn off features you do not use, such as remote management; and disconnect old devices. For the router: change its default settings, turn on encryption and check for updates. A guest network keeps smart devices apart from computers with private files.",
            "At work, also keep a list of every connected device, put IoT devices on their own network, and only collect the data you need, especially when cameras or microphones are involved. Ask the organization's IT or security team before connecting anything to a work network."
          ],
          steps: ["Change every default password; use a unique, strong one.", "Turn on two-factor authentication where it is offered.", "Update firmware and companion apps.", "Turn off features you do not use; disconnect old devices.", "Put smart devices on a separate or guest network, and keep a device list."],
          words: [["Default password", "the password a device ships with; attackers know these lists."], ["Firmware", "the built-in software that runs a device."], ["Two-factor authentication", "signing in with a password plus a second proof, like a code."], ["Guest network", "a separate Wi-Fi network that keeps devices away from your main computers."], ["Device inventory", "a list of every connected device you are responsible for."]],
          slides: [
            { title: "Why IoT gets attacked", bullets: ["Weak default passwords", "Devices that are never updated", "Cameras and mics can leak private data"] },
            { title: "Secure every device", bullets: ["Change default passwords; no reuse", "Two-factor where offered", "Update firmware and apps", "Turn off unused features"] },
            { title: "Secure the network", bullets: ["Change router defaults, turn on encryption", "Smart devices on a guest network", "Keep a device list; ask IT at work"] }
          ],
          sources: [FTC, CISA],
          tryIt: "Final task: write your one-page IoT plan (for example a server closet, food pantry freezer or garden). Name the sensor, device, connection and where the data goes, draw the flow from sensor to alert, write the alert rule as a Python if-statement, and list five security steps you will take.",
          youCanNow: "secure connected devices and plan a complete IoT monitoring project."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building and securing an IoT project",
        questions: [
          { q: "Which line is a correct Python alert rule?", options: ["temp > 27 then alert", "alert if temp", "print if temp > 27", "if temp > 27: print(\"ALERT\")"], answer: 3, why: "Python uses if, a condition and a colon." },
          { q: "Why wait for several high readings in a row before alerting?", options: ["To avoid false alarms from a short spike", "To save paper", "Because sensors are always wrong", "To slow the device down"], answer: 0, why: "One spike, like an open door, may not be a real problem." },
          { q: "In the simulator, your code reads pin 15 but the sensor is wired to pin 4. What happens?", options: ["It works anyway", "The board catches fire", "The code will not get readings from the sensor", "The temperature doubles"], answer: 2, why: "The pin in the code must match the wiring." },
          { q: "What is the FIRST thing to do with a new smart camera?", options: ["Keep the default password", "Share its login with friends", "Turn off updates", "Change the default password to a unique, strong one"], answer: 3, why: "Default passwords are widely known to attackers." },
          { q: "Why put smart devices on a guest network?", options: ["To make them faster", "Because they need no password", "To keep them apart from computers with private files", "To turn off encryption"], answer: 2, why: "Separation limits what a hacked device can reach." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to the Internet of Things (IoT)",
    questions: [
      { q: "The Internet of Things is:", options: ["Only social media", "Physical objects with sensors that connect and share data", "A type of printer paper", "A computer game"], answer: 1, why: "IoT is connected things that sense and share." },
      { q: "Using sensor data to fix a machine before it breaks is called:", options: ["Predictive maintenance", "Phishing", "Edge storage", "Firmware"], answer: 0, why: "Predictive maintenance catches problems early." },
      { q: "Why is security part of every IoT job?", options: ["IoT devices cannot be hacked", "It is only needed for phones", "Every connected device can be a way in for attackers", "It makes devices cheaper"], answer: 2, why: "More devices mean more ways in." },
      { q: "What are the four layers of an IoT system?", options: ["Sensor, device, connection, cloud or app", "Keyboard, mouse, screen, printer", "Email, text, call, post", "Hot, cool, cold, archive"], answer: 0, why: "Data flows from sensor to device to connection to cloud or app." },
      { q: "A small, low-cost computer on a chip that runs one program is a:", options: ["Server farm", "Router", "Dashboard", "Microcontroller"], answer: 3, why: "Boards like the ESP32 and Arduino are microcontrollers." },
      { q: "A motor that opens a water valve is a:", options: ["Sensor", "Actuator", "Protocol", "Topic"], answer: 1, why: "Actuators act on the physical world." },
      { q: "Making decisions on the device instead of in the cloud is:", options: ["Cloud billing", "Edge computing", "Bluetooth", "A false alarm"], answer: 1, why: "Edge computing processes data close to where it is collected." },
      { q: "Which connection is best for a fitness band that talks to your phone?", options: ["LoRaWAN", "A wired cable", "Satellite TV", "Bluetooth Low Energy"], answer: 3, why: "BLE is low-power and short-range." },
      { q: "Which connection suits a GPS tracker on a delivery truck?", options: ["Cellular", "Home Wi-Fi", "A USB cable", "Bluetooth only"], answer: 0, why: "Cellular works almost anywhere with a signal." },
      { q: "In MQTT, a freezer sends its reading by:", options: ["Printing it", "Calling the manager", "Publishing to a topic", "Saving it to a USB stick"], answer: 2, why: "Devices publish; apps subscribe." },
      { q: "How do battery IoT devices last a long time?", options: ["They never turn on", "They use the fastest Wi-Fi", "They send video all day", "They sleep most of the time and wake to read and send"], answer: 3, why: "Sleeping saves power." },
      { q: "A rule in IoT usually means:", options: ["A ruler for measuring", "A password rule", "If a reading crosses a limit, do something", "A cable"], answer: 2, why: "Rules turn readings into actions." },
      { q: "readings = [20, 28, 22]. With the rule \"alert over 27\", how many alerts?", options: ["0", "1", "2", "3"], answer: 1, why: "Only 28 is over 27." },
      { q: "An alert fires when someone opens the freezer door for a second. This is:", options: ["A false alarm", "Edge computing", "A firmware update", "Encryption"], answer: 0, why: "A short spike that is not a real problem is a false alarm." },
      { q: "Why use a simulator before buying parts?", options: ["Because real devices never work", "To avoid learning code", "To test the design and code for free or cheaply first", "Simulators are required by law"], answer: 2, why: "Simulators let you test without hardware." },
      { q: "MicroPython is:", options: ["A small version of Python for microcontrollers", "A snake", "A type of sensor", "A Wi-Fi brand"], answer: 0, why: "It runs Python code on small boards." },
      { q: "A DHT22 measures:", options: ["GPS location", "Heart rate", "Video", "Temperature and humidity"], answer: 3, why: "It is a temperature and humidity sensor." },
      { q: "Which is the safest choice for a new smart plug's password?", options: ["Leave the default", "A unique, strong password", "Use the same password as your email", "\"password123\""], answer: 1, why: "Unique, strong passwords stop easy break-ins." },
      { q: "What should you do with firmware on IoT devices?", options: ["Never update it", "Keep it updated", "Delete it", "Share it online"], answer: 1, why: "Updates fix security holes." },
      { q: "You want to connect a sensor to your workplace network. What do you do first?", options: ["Plug it in quietly", "Turn off the firewall", "Share the Wi-Fi password online", "Ask the IT or security team"], answer: 3, why: "Work networks have rules; IT must approve new devices." }
    ]
  }
};
