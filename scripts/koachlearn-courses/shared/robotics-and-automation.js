"use strict";

// Koach Learn course (shared): "Introduction to Robotics, AI and Automation". Categories: Youth, Veterans (military). Shape and rules: ../README.md; model: ../re-entry/reentry-ai-digital-confidence.js.

module.exports = {
  id: "robotics-and-automation",
  category: "Youth",
  name: "Introduction to Robotics, AI and Automation",
  skills: "Explaining sense-think-act, Matching sensors and actuators, Writing an algorithm, Coding a virtual robot with blocks, Using a sensor to make decisions, Testing and debugging",
  outcome: "plan and code a virtual robot with free block coding so it drives a route, uses a sensor to avoid a wall, and gets tested and fixed until it works.",
  about: [
    "Robots and automation are in warehouses, farms, hospitals, cars and homes. This course shows how they work and lets you program one yourself, with no robot to buy and no coding experience needed.",
    "It is for young people curious about tech careers, veterans who worked with unmanned systems or maintenance and want a civilian path, and anyone who wants to understand the machines changing the workplace.",
    "You will learn the sense-think-act idea, plan a robot's moves on paper, then code a free virtual robot in a web browser using blocks. Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "In a free virtual robot tool such as VEXcode VR, write a block program that drives the robot in a square, then a second program that drives forward until a sensor finds a wall, stops, turns and keeps going. Test it, fix at least one bug, and write three sentences explaining what the robot senses, how it decides and how it acts.",
  chapters: [
    {
      name: "Chapter 1: How robots and automation work",
      lessons: [
        {
          title: "Robots, automation and AI: what is the difference?",
          minutes: 4,
          goal: "Sort real machines into robots, automation and AI, and explain sense-think-act.",
          text: [
            "Automation means a machine or program does a task on its own once it is set up, like a dishwasher cycle or a factory conveyor. A robot is a machine that can sense the world around it and move or act in it, like a robot vacuum or a warehouse robot that carries shelves.",
            "Every robot follows the same loop: sense, think, act. It senses with sensors (cameras, bump switches, distance sensors), thinks with a computer program that decides what to do, and acts with motors, wheels, arms or grippers. Then it senses again.",
            "AI is a kind of thinking program that learns patterns from examples, such as spotting a person in a camera image. Many robots use simple rules, not AI. Some use AI to see, plan routes or understand speech."
          ],
          words: [["Automation", "a machine or program doing a task on its own once set up."], ["Robot", "a machine that can sense its surroundings and act in them."], ["Sense-think-act", "the loop every robot follows: take in information, decide, then move or act."], ["AI", "artificial intelligence: programs that learn patterns from examples to make decisions."]],
          slides: [
            { title: "Automation vs robot", bullets: ["Automation: does a set task on its own", "Robot: senses its surroundings and acts in them"] },
            { title: "The robot loop", bullets: ["Sense: sensors take in information", "Think: a program decides", "Act: motors, wheels or arms move", "Then sense again"] },
            { title: "Where AI fits", bullets: ["AI learns patterns from examples", "Many robots use simple rules, not AI", "Some use AI to see, plan or listen"] }
          ],
          tryIt: "Pick three machines you have seen (for example a robot vacuum, a self-checkout, a delivery drone). For each, write whether it is automation or a robot, and one way it senses, thinks and acts.",
          youCanNow: "tell automation, robots and AI apart and describe any robot using sense-think-act."
        },
        {
          title: "Sensors and actuators: the robot's senses and muscles",
          minutes: 5,
          goal: "Match common sensors and actuators to the jobs they do.",
          text: [
            "Sensors are a robot's senses. A distance sensor measures how far away something is. A bump sensor knows when the robot touches something. A camera sees images. A line or color sensor sees the floor. A GPS unit knows location outdoors.",
            "Actuators are a robot's muscles: anything that makes it move or act. Motors turn wheels, servos turn joints to an exact angle, and grippers or suction cups pick things up.",
            "When designing a robot, start with the job. A robot that must stop before hitting a wall needs a distance or bump sensor and drive motors. A robot that sorts red and blue boxes needs a color sensor and a gripper."
          ],
          words: [["Sensor", "a part that takes in information, like distance, touch, light or images."], ["Actuator", "a part that makes the robot move or act, like a motor or gripper."], ["Servo", "a motor that turns to an exact angle."]],
          slides: [
            { title: "Sensors = senses", bullets: ["Distance, bump, camera", "Line or color sensor", "GPS for location outdoors"] },
            { title: "Actuators = muscles", bullets: ["Motors turn wheels", "Servos turn to an exact angle", "Grippers pick things up"] },
            { title: "Start with the job", bullets: ["Stop before a wall: distance sensor + motors", "Sort by color: color sensor + gripper"] }
          ],
          tryIt: "Design on paper a robot for one job, such as watering plants or carrying a box across a room. List the sensors and actuators it needs and why.",
          youCanNow: "choose the sensors and actuators a robot needs for a job."
        },
        {
          title: "Writing an algorithm before you code",
          minutes: 5,
          goal: "Write a step-by-step plan with a loop and a decision that a robot could follow.",
          text: [
            "An algorithm is a list of exact steps to finish a task. Robots cannot guess, so every step must be clear: \"drive forward 50 centimeters\" instead of \"go a bit\".",
            "Two tools make algorithms powerful. A loop repeats steps, such as \"repeat 4 times: drive forward, turn right 90 degrees\" to drive a square. A decision, also called an if-then, chooses what to do: \"if the wall is closer than 10 centimeters, then stop; otherwise keep driving\".",
            "Write it in plain words or draw a flowchart first. Then walk through it yourself as if you were the robot. If you bump into something on paper, the robot will too."
          ],
          steps: ["Write the goal in one sentence.", "List each step in order, with exact amounts.", "Look for steps that repeat and turn them into a loop.", "Add any if-then decisions that use a sensor.", "Walk through it yourself to test it."],
          words: [["Algorithm", "a list of exact steps to finish a task."], ["Loop", "a set of steps that repeats."], ["If-then", "a decision: if something is true, do one thing; otherwise do another."], ["Flowchart", "a drawing of an algorithm with boxes and arrows."]],
          slides: [
            { title: "An algorithm is exact", bullets: ["\"Drive forward 50 cm\", not \"go a bit\"", "Robots cannot guess"] },
            { title: "Loops and decisions", bullets: ["Loop: repeat 4 times, forward then turn right 90", "If wall closer than 10 cm, stop; else keep driving"] },
            { title: "Test on paper first", bullets: ["Write it or draw a flowchart", "Walk through it as the robot", "Fix it before you code"] }
          ],
          tryIt: "Write an algorithm, with a loop, for a robot to drive in a square. Then add an if-then step so it stops if something is in its way. Walk through it with a toy, a phone or your own feet.",
          youCanNow: "write a clear algorithm with a loop and an if-then decision, and test it on paper."
        }
      ],
      check: {
        title: "Knowledge Check 1: How robots and automation work",
        questions: [
          { q: "What are the three steps every robot repeats?", options: ["Buy, build, sell", "Start, stop, pause", "Sense, think, act", "Charge, drive, park"], answer: 2, why: "Robots sense, decide with a program, then act, and repeat." },
          { q: "Which part is a sensor?", options: ["A distance sensor", "A wheel motor", "A gripper", "A battery"], answer: 0, why: "A distance sensor takes in information; motors and grippers are actuators." },
          { q: "A robot must sort red boxes from blue boxes. What does it need most?", options: ["A GPS unit", "A louder speaker", "A bigger battery only", "A color sensor and a gripper"], answer: 3, why: "It must see color and pick up boxes." },
          { q: "Which instruction is clear enough for a robot?", options: ["\"Go a bit\"", "\"Drive forward 50 centimeters\"", "\"Turn sort of right\"", "\"Do the thing\""], answer: 1, why: "Robots need exact amounts." },
          { q: "\"Repeat 4 times: drive forward, turn right 90 degrees\" uses a:", options: ["Sensor", "Loop", "Gripper", "Password"], answer: 1, why: "A loop repeats steps; this one drives a square." }
        ]
      }
    },
    {
      name: "Chapter 2: Coding and using robots",
      lessons: [
        {
          title: "Coding a virtual robot with blocks",
          minutes: 6,
          goal: "Open a free virtual robot and code it to drive a square.",
          text: [
            "You can practice robot coding in a web browser with no robot. VEXcode VR, from VEX Robotics, has a free version that uses drag-and-drop blocks, like Scratch, and runs on computers, Chromebooks and tablets at vr.vex.com. Other free options exist; your school or library may have one it prefers.",
            "Blocks snap together like puzzle pieces. A \"drive forward\" block moves the robot, a \"turn right\" block turns it, and a \"repeat\" block makes a loop. You press Start to watch the robot follow your program in a virtual playground.",
            "Turn your paper algorithm into blocks one step at a time. Run it after each change so you know which block caused what."
          ],
          steps: ["Open vr.vex.com in a web browser.", "Pick a simple playground with open floor space.", "Drag a drive-forward block and a turn-right block into the program.", "Wrap them in a repeat block set to 4.", "Press Start and watch. Adjust the distance or turn until it drives a clean square."],
          words: [["Block coding", "programming by snapping visual blocks together instead of typing code."], ["Playground", "the virtual space where the simulated robot drives."], ["Simulator", "software that acts like a real machine so you can practice safely."]],
          slides: [
            { title: "Practice without a robot", bullets: ["Free block coding in the browser", "VEXcode VR: vr.vex.com", "Works on computers, Chromebooks and tablets"] },
            { title: "Blocks snap together", bullets: ["Drive forward, turn right", "Repeat block = loop", "Press Start to watch"] },
            { title: "Build in small steps", bullets: ["Turn your paper plan into blocks", "Run after each change", "Adjust until it works"] }
          ],
          sources: [{ name: "VEX Robotics: VEXcode VR", url: "https://www.vexrobotics.com/vexcode-vr" }],
          tryIt: "In VEXcode VR or another free virtual robot, code the robot to drive a square using a repeat block. Get it to finish close to where it started.",
          youCanNow: "code a virtual robot with blocks, using a loop to drive a square."
        },
        {
          title: "Using a sensor to decide, then debugging",
          minutes: 6,
          goal: "Add a sensor-based if-then to a robot program and fix a bug.",
          text: [
            "A robot that only follows fixed steps is blind. Add a sensor and it can react. In block coding, you use an \"if\" block with a sensor reading inside, such as \"if distance is less than 100 millimeters\".",
            "A common pattern: forever loop, inside it an if-then-else. If the wall is close, stop and turn. Else, drive forward. The robot checks the sensor again and again, which is the sense-think-act loop in code.",
            "Bugs are normal. Debugging means finding and fixing them. Change one thing at a time, run it, and watch. Common bugs: the turn is not quite 90 degrees, the distance number is in the wrong unit, or a block sits outside the loop."
          ],
          steps: ["Add a forever loop.", "Inside it, add an if-then-else block.", "Put a distance sensor check in the if.", "Then: stop and turn. Else: drive forward.", "Run it, watch for a mistake, change one thing, run it again."],
          words: [["Bug", "a mistake in a program that makes it act wrongly."], ["Debugging", "finding and fixing bugs."], ["Forever loop", "a loop that keeps repeating until the program is stopped."]],
          slides: [
            { title: "Sensors let robots react", bullets: ["Use an if block with a sensor reading", "Example: if distance < 100 mm"] },
            { title: "The pattern", bullets: ["Forever loop", "If close: stop and turn", "Else: drive forward"] },
            { title: "Debugging", bullets: ["Change one thing at a time", "Check turns, units and block placement", "Bugs are normal"] }
          ],
          tryIt: "Code the robot to drive forward until its distance sensor finds a wall, then stop, turn and keep going. Write down one bug you hit and how you fixed it.",
          youCanNow: "use a sensor reading in an if-then-else to make a robot react, and debug the program."
        },
        {
          title: "Where robots work, and working safely with them",
          minutes: 5,
          goal: "Name real robot jobs and the safety rules people follow around robots.",
          text: [
            "Robots and automation are used in warehouses (moving shelves and packages), factories (welding, packing), farms (milking, spraying, drones), hospitals (delivering supplies, assisting surgeons) and the military (bomb disposal, unmanned aircraft).",
            "People still do important jobs: robotics technicians fix and maintain robots, operators run and watch them, and programmers and engineers design them. Many technician jobs start with a community college certificate or military training.",
            "Safety comes first. Industrial robots can move fast and hit hard. Workers keep out of marked robot areas, use the emergency stop, and lock out power before maintenance. Collaborative robots, or cobots, are designed to work closer to people, but the same rule applies: follow the site's safety training."
          ],
          words: [["Robotics technician", "a person who installs, maintains and repairs robots."], ["Cobot", "a collaborative robot built to work near people."], ["Emergency stop", "a big button that stops a machine right away."]],
          slides: [
            { title: "Where robots work", bullets: ["Warehouses, factories, farms", "Hospitals and the military"] },
            { title: "Jobs with robots", bullets: ["Technicians fix and maintain them", "Operators run and watch them", "Programmers and engineers design them"] },
            { title: "Safety first", bullets: ["Stay out of marked robot areas", "Know the emergency stop", "Follow the site's safety training"] }
          ],
          tryIt: "Final task: finish your square program and your sensor program in the virtual robot tool, fix at least one bug, and write three sentences explaining what your robot senses, how it decides and how it acts.",
          youCanNow: "code a virtual robot that senses and reacts, explain how it works, and name real robot jobs and safety rules."
        }
      ],
      check: {
        title: "Knowledge Check 2: Coding and using robots",
        questions: [
          { q: "What is a simulator?", options: ["A real robot", "A type of sensor", "A robot battery", "Software that acts like a real machine so you can practice"], answer: 3, why: "A simulator lets you practice safely without the real machine." },
          { q: "Which block makes the robot repeat steps?", options: ["Repeat", "Stop", "Start", "Print"], answer: 0, why: "A repeat block creates a loop." },
          { q: "Which program lets a robot avoid a wall?", options: ["Drive forward forever with no checks", "Turn right once", "Forever: if wall close, stop and turn; else drive forward", "Stop at the start"], answer: 2, why: "The if-then-else uses the sensor to react." },
          { q: "Your robot turns a little too far each time. What is the best way to debug?", options: ["Delete the whole program", "Change five blocks at once", "Give up", "Change the turn amount a little and run it again"], answer: 3, why: "Change one thing at a time and test." },
          { q: "What should a worker do before fixing an industrial robot?", options: ["Climb in while it runs", "Ask the robot to stop", "Follow safety training and lock out the power", "Turn off the lights"], answer: 2, why: "Locking out power and following training keeps people safe." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Robotics, AI and Automation",
    questions: [
      { q: "A dishwasher running its cycle is an example of:", options: ["A cobot", "Automation", "A sensor", "A flowchart"], answer: 1, why: "It does a set task on its own once started." },
      { q: "What makes a machine a robot?", options: ["It can sense its surroundings and act in them", "It is expensive", "It has a screen", "It uses electricity"], answer: 0, why: "Robots sense and act in the world." },
      { q: "In sense-think-act, the \"think\" part is done by:", options: ["The wheels", "The battery", "The program", "The paint"], answer: 2, why: "The program decides what to do." },
      { q: "Do all robots use AI?", options: ["No, many follow simple rules", "Yes, always", "Only robot vacuums", "Only in movies"], answer: 0, why: "Many robots run simple rule-based programs." },
      { q: "Which is an actuator?", options: ["Camera", "Bump sensor", "GPS", "Motor"], answer: 3, why: "Motors make the robot move." },
      { q: "A servo is:", options: ["A distance sensor", "A motor that turns to an exact angle", "A battery charger", "A type of loop"], answer: 1, why: "Servos are used for joints that need exact angles." },
      { q: "A robot must know when it touches something. Which sensor fits?", options: ["Speaker", "Bump sensor", "Color light", "Clock"], answer: 1, why: "A bump sensor detects contact." },
      { q: "An algorithm is:", options: ["A robot brand", "A type of motor", "A safety rule", "A list of exact steps to finish a task"], answer: 3, why: "Algorithms are step-by-step plans." },
      { q: "Why test an algorithm on paper first?", options: ["To find mistakes before coding", "Because robots need paper", "To make it longer", "It is required by law"], answer: 0, why: "Walking through it finds errors early." },
      { q: "\"If the wall is close, stop; otherwise drive\" is:", options: ["A loop", "A gripper", "An if-then decision", "A playground"], answer: 2, why: "It chooses between actions based on a condition." },
      { q: "A flowchart shows an algorithm with:", options: ["Musical notes", "Photos", "Passwords", "Boxes and arrows"], answer: 3, why: "Flowcharts draw steps as boxes joined by arrows." },
      { q: "Block coding means:", options: ["Typing long code only", "Blocking websites", "Snapping visual blocks together to program", "Building with wood blocks"], answer: 2, why: "Blocks are visual pieces of code." },
      { q: "How many times should you repeat \"forward, turn right 90\" to drive a square?", options: ["2", "3", "4", "10"], answer: 2, why: "A square has four sides and four turns." },
      { q: "Why run your program after each small change?", options: ["To know which change caused what", "To use more battery", "Because it is required", "To delete blocks"], answer: 0, why: "Small steps make problems easy to find." },
      { q: "A forever loop:", options: ["Runs once", "Turns the robot off", "Keeps repeating until the program stops", "Is a sensor"], answer: 2, why: "It repeats over and over." },
      { q: "Debugging means:", options: ["Finding and fixing mistakes in a program", "Cleaning insects off a robot", "Buying a new robot", "Turning off sensors"], answer: 0, why: "Bugs are program mistakes." },
      { q: "Your robot never stops at the wall. Which is a likely bug?", options: ["The robot is the wrong color", "The screen is too bright", "The playground is too nice", "The sensor check is outside the loop or uses the wrong distance"], answer: 3, why: "Wrong placement or numbers in the sensor check are common bugs." },
      { q: "Which is a real job working with robots?", options: ["Robot fortune teller", "Robotics technician", "Sensor painter only", "None exist"], answer: 1, why: "Technicians install, maintain and repair robots." },
      { q: "A cobot is:", options: ["A cooking robot only", "A robot designed to work near people", "A broken robot", "A robot without sensors"], answer: 1, why: "Collaborative robots are built to work alongside people." },
      { q: "You see a fast robot arm working behind a marked line. What do you do?", options: ["Step in to look closer", "Touch it to test it", "Turn off its sensors", "Stay out of the marked area and follow site safety rules"], answer: 3, why: "Marked areas keep people out of the robot's path." }
    ]
  }
};
