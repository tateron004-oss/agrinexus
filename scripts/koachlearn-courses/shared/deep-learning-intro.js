"use strict";

// Koach Learn course (shared): "Introduction to Deep Learning and Neural Networks". Listed for Veterans (military); category = the first one catalog.js gives (Veterans (military)).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };
const KERAS_MNIST = { name: "Keras code example: Simple MNIST convnet", url: "https://keras.io/examples/vision/mnist_convnet/" };

module.exports = {
  id: "deep-learning-intro",
  category: "Veterans (military)",
  name: "Introduction to Deep Learning and Neural Networks",
  skills: "Explaining how a neural network works, Working out a neuron's output, Loading and scaling image data, Building and training a network in Keras, Evaluating and improving a model",
  outcome: "build, train and test a small neural network in Google Colab with Keras that reads handwritten digits, report its accuracy on new images, try one change to improve it, and explain what the model can and cannot do.",
  about: [
    "Deep learning powers face unlock on phones, voice assistants, translation apps, medical image tools and the cameras that inspect parts on a factory line. This course explains how it works in plain words, then has you build a working neural network yourself.",
    "It suits veterans moving into tech, people with some Python, and anyone who has finished \"Introduction to Machine Learning\". Chapter 1 builds the ideas with pencil-and-paper practice. Chapter 2 moves to Google Colab, a free website that runs Python, where you train a network with Keras, a free deep learning library. Every line of code is given and explained.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "In Google Colab, load the MNIST handwritten digits, scale them, build and train a Keras neural network, report its accuracy on the test images, predict five test images and compare them with the true labels, then make one change (more neurons or more epochs), retrain, and write two sentences on whether it helped and one limit of the model.",
  chapters: [
    {
      name: "Chapter 1: How neural networks work",
      lessons: [
        {
          title: "What deep learning is",
          minutes: 4,
          goal: "Explain deep learning in your own words and name where it is used.",
          text: [
            "Deep learning is a kind of machine learning that uses neural networks: many small math units, called neurons, joined in layers. \"Deep\" means there are many layers. Each layer finds patterns in the output of the one before it.",
            "For a picture, early layers notice simple things like edges, middle layers notice shapes, and later layers notice whole objects like a face or a number. Nobody writes those rules: the network learns them from many labeled examples.",
            "It works best when there is a lot of data and the data is messy and rich: images, sound, speech and long text. It needs more data and computing power than simpler models, which is why it took off once large datasets and fast graphics chips (GPUs) became common."
          ],
          words: [["Deep learning", "machine learning with neural networks that have many layers."], ["Neural network", "a model made of many small units (neurons) joined in layers."], ["Layer", "a group of neurons that all take input from the layer before."], ["GPU", "a graphics chip that does many calculations at once, used to train networks fast."]],
          slides: [
            { title: "Deep learning is", bullets: ["Machine learning with neural networks", "Many layers of small math units", "\"Deep\" = many layers"] },
            { title: "Layers find patterns", bullets: ["Early layers: edges", "Middle layers: shapes", "Later layers: whole objects"] },
            { title: "Where it shines", bullets: ["Images, sound, speech and text", "Lots of data", "Needs more computing power (GPUs)"] }
          ],
          tryIt: "Write down four tools you have used that probably use deep learning (for example face unlock, voice typing, photo search, translation). For each, write what kind of data it learns from: images, sound or text.",
          youCanNow: "explain what deep learning is, why it uses layers, and where it is used."
        },
        {
          title: "Inside a neuron: weights, bias and activation",
          minutes: 6,
          goal: "Work out by hand what a single neuron outputs.",
          text: [
            "A neuron takes some numbers in, multiplies each by a weight, adds them up, and adds one more number called the bias. The weights say how important each input is; the network learns them.",
            "Then it applies an activation function, which decides what to pass on. The most common one, ReLU, is simple: if the total is below zero, output 0; otherwise output the total.",
            "Example: inputs 2 and 3, weights 0.5 and -1, bias 1. Total = 2 x 0.5 + 3 x (-1) + 1 = 1 - 3 + 1 = -1. ReLU turns -1 into 0, so this neuron outputs 0. With input 2 and 1 instead: 1 - 1 + 1 = 1, so it outputs 1.",
            "A network has thousands of these. The last layer often uses softmax, which turns its outputs into chances that add up to 100 percent, one per possible answer."
          ],
          steps: ["Multiply each input by its weight.", "Add the results together.", "Add the bias.", "Apply the activation: with ReLU, negative becomes 0.", "That number is the neuron's output."],
          words: [["Neuron", "a small unit that multiplies inputs by weights, adds a bias and applies an activation."], ["Weight", "a number the network learns that says how much an input matters."], ["Bias", "an extra number added to the total, also learned."], ["Activation function", "the rule that decides what a neuron passes on."], ["ReLU", "an activation: negative totals become 0, others stay the same."], ["Softmax", "turns the last layer's outputs into chances that add up to 1."]],
          slides: [
            { title: "One neuron", bullets: ["Inputs x weights, added up", "Plus the bias", "Then an activation function"] },
            { title: "ReLU", bullets: ["Below zero: output 0", "Zero or more: output the total"] },
            { title: "Worked example", bullets: ["Inputs 2, 3; weights 0.5, -1; bias 1", "2 x 0.5 + 3 x (-1) + 1 = -1", "ReLU(-1) = 0"] },
            { title: "The last layer", bullets: ["Softmax gives chances for each answer", "The chances add up to 100%"] }
          ],
          tryIt: "Work out a neuron's output by hand: inputs 4 and 1, weights 0.5 and 2, bias -3, ReLU activation. Then change the bias to -6 and work it out again. (Answers: 1, then 0.)",
          youCanNow: "calculate a neuron's output from its inputs, weights, bias and activation."
        },
        {
          title: "How a network learns: loss, epochs and small steps",
          minutes: 5,
          goal: "Explain how training changes the weights to make fewer mistakes.",
          text: [
            "At the start, the weights are random, so the network's guesses are bad. Training fixes that. The network makes a guess, and a loss function measures how wrong it was: a big loss means very wrong, a small loss means close.",
            "Then it works out, for every weight, which direction would lower the loss (this step is called backpropagation) and moves each weight a small step that way (gradient descent). The size of the step is the learning rate: too big and it overshoots, too small and it is very slow.",
            "One pass through all the training examples is an epoch. Training usually takes several epochs. You watch the loss go down and accuracy go up, and you check a validation set (data held back from training) to catch overfitting: if training accuracy keeps rising but validation accuracy falls, stop."
          ],
          steps: ["Start with random weights.", "Make guesses on training examples.", "Measure the error with the loss function.", "Nudge every weight a small step to lower the loss.", "Repeat for several epochs, watching validation accuracy."],
          words: [["Loss", "a number that measures how wrong the network's guesses are."], ["Backpropagation", "working out how each weight affected the loss."], ["Gradient descent", "moving the weights in small steps to lower the loss."], ["Learning rate", "how big each step is."], ["Epoch", "one full pass through the training data."], ["Validation set", "data held back during training to check for overfitting."]],
          slides: [
            { title: "Guess, measure, adjust", bullets: ["Random weights at first", "Loss measures how wrong", "Adjust weights to lower the loss"] },
            { title: "Small steps", bullets: ["Backpropagation finds the direction", "Gradient descent takes the step", "Learning rate sets the step size"] },
            { title: "Epochs and validation", bullets: ["Epoch: one pass through the data", "Watch validation accuracy", "Training up, validation down = overfitting"] }
          ],
          tryIt: "Play \"guess the number\" with a friend or by yourself: pick a hidden number from 1 to 100, guess, get \"too high\" or \"too low\", and change your guess by a smaller step each time. Write down which part of the game is like the loss, which is like the learning rate, and how many rounds (epochs) it took.",
          youCanNow: "explain loss, backpropagation, gradient descent, learning rate, epochs and overfitting in plain words."
        }
      ],
      check: {
        title: "Knowledge Check 1: How neural networks work",
        questions: [
          { q: "What does \"deep\" mean in deep learning?", options: ["It uses a lot of electricity", "It only works underwater", "The network has many layers", "It is hard to explain"], answer: 2, why: "Deep means many layers of neurons." },
          { q: "A neuron's total is -2. With ReLU, what does it output?", options: ["-2", "0", "1", "2"], answer: 1, why: "ReLU turns any negative total into 0." },
          { q: "Inputs 1 and 2, weights 3 and 1, bias 0, ReLU. What is the output?", options: ["0", "3", "5", "6"], answer: 2, why: "1 x 3 + 2 x 1 + 0 = 5, and 5 is not negative." },
          { q: "What does the loss function measure?", options: ["How many layers there are", "How wrong the network's guesses are", "How fast the computer is", "How much data you have"], answer: 1, why: "Loss is the size of the error." },
          { q: "Training accuracy keeps rising but validation accuracy falls. What is happening?", options: ["The network is perfect", "Overfitting", "The learning rate is zero", "The data is missing"], answer: 1, why: "Doing better on training data but worse on held-back data is overfitting." }
        ]
      }
    },
    {
      name: "Chapter 2: Building a neural network in Colab",
      lessons: [
        {
          title: "Loading and preparing image data",
          minutes: 5,
          goal: "Load the MNIST digits in Colab, scale them, and look at one image.",
          text: [
            "MNIST is a famous practice dataset: 70,000 small pictures of handwritten digits 0 to 9, each 28 by 28 pixels, with the right digit as the label. Keras, a free deep learning library that works in Google Colab, can load it with one line, already split into 60,000 training and 10,000 test images.",
            "Each pixel is a number from 0 (black) to 255 (white). Networks learn better with small numbers, so you scale them to between 0 and 1 by dividing by 255. This is called normalizing.",
            "Look at your data before training. matplotlib, a plotting library, can draw one image so you can check that the label matches the picture."
          ],
          steps: ["In a new Colab notebook run: import keras", "Load: (x_train, y_train), (x_test, y_test) = keras.datasets.mnist.load_data()", "Scale: x_train = x_train / 255.0 and x_test = x_test / 255.0", "Check sizes: print(x_train.shape, x_test.shape)", "Draw one: import matplotlib.pyplot as plt; plt.imshow(x_train[0], cmap=\"gray\"); plt.show(); print(y_train[0])"],
          words: [["MNIST", "a practice dataset of 70,000 handwritten digit images."], ["Keras", "a free, beginner-friendly Python library for building neural networks."], ["Pixel", "one dot of an image, stored as a number."], ["Normalizing", "scaling numbers to a small range like 0 to 1 so training works better."], ["matplotlib", "a Python library for drawing charts and images."]],
          slides: [
            { title: "The MNIST digits", bullets: ["70,000 handwritten digits, 0 to 9", "28 x 28 pixels each", "60,000 for training, 10,000 for testing"] },
            { title: "Scale the pixels", bullets: ["Pixels go from 0 to 255", "Divide by 255.0 to get 0 to 1", "Small numbers train better"] },
            { title: "Look before you train", bullets: ["plt.imshow(x_train[0], cmap=\"gray\")", "Print the label to check it matches"] }
          ],
          sources: [KERAS_MNIST, COLAB],
          tryIt: "Load and scale MNIST in Colab. Print the shapes of the training and test sets. Draw the images at positions 0, 1 and 2 and print their labels to check they match.",
          youCanNow: "load an image dataset, normalize it and check it by eye."
        },
        {
          title: "Building and training the network",
          minutes: 6,
          goal: "Build a Keras network, compile it and train it for a few epochs.",
          text: [
            "A Sequential model is a stack of layers. Ours: keras.Input(shape=(28, 28)) says what goes in. layers.Flatten() turns each 28 x 28 picture into one row of 784 numbers. layers.Dense(128, activation=\"relu\") is a layer of 128 neurons. layers.Dense(10, activation=\"softmax\") is the output: one chance for each digit 0 to 9.",
            "compile sets how it learns: optimizer=\"adam\" (a popular kind of gradient descent), loss=\"sparse_categorical_crossentropy\" (the right loss when labels are plain numbers like 7), and metrics=[\"accuracy\"] so you see how often it is right.",
            "fit trains it: model.fit(x_train, y_train, epochs=5, validation_split=0.1). validation_split=0.1 holds back 10 percent of the training data to check for overfitting. Each epoch prints loss, accuracy, val_loss and val_accuracy. Watch the loss go down."
          ],
          steps: ["from keras import layers", "model = keras.Sequential([keras.Input(shape=(28, 28)), layers.Flatten(), layers.Dense(128, activation=\"relu\"), layers.Dense(10, activation=\"softmax\")])", "model.compile(optimizer=\"adam\", loss=\"sparse_categorical_crossentropy\", metrics=[\"accuracy\"])", "model.summary() to see the layers.", "model.fit(x_train, y_train, epochs=5, validation_split=0.1)"],
          words: [["Sequential model", "a network made of layers stacked one after another."], ["Flatten", "a layer that turns a grid of pixels into one long row."], ["Dense layer", "a layer where every neuron connects to every input."], ["Optimizer", "the method that updates the weights; adam is a common one."], ["compile", "sets the optimizer, loss and metrics before training."], ["validation_split", "the share of training data held back to check for overfitting."]],
          slides: [
            { title: "The layers", bullets: ["Input: a 28 x 28 picture", "Flatten: one row of 784 numbers", "Dense 128, relu: the hidden layer", "Dense 10, softmax: one chance per digit"] },
            { title: "compile", bullets: ["optimizer=\"adam\"", "loss=\"sparse_categorical_crossentropy\"", "metrics=[\"accuracy\"]"] },
            { title: "fit", bullets: ["epochs=5: five passes through the data", "validation_split=0.1 checks overfitting", "Watch loss fall and accuracy rise"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Build, compile and train the network for 5 epochs. Write down the accuracy and val_accuracy after epoch 1 and after epoch 5. Did both go up?",
          youCanNow: "build a neural network in Keras, compile it and train it while watching for overfitting."
        },
        {
          title: "Testing, predicting and improving",
          minutes: 6,
          goal: "Measure test accuracy, predict real images, try one improvement and name the model's limits.",
          text: [
            "The true test is data the network never saw: model.evaluate(x_test, y_test) prints the test loss and accuracy. A small network like ours usually gets well above 90 percent on MNIST.",
            "To predict, give it images: probs = model.predict(x_test[:5]) gives 10 chances for each image. probs.argmax(axis=1) picks the digit with the highest chance. Compare those with y_test[:5].",
            "To improve it, change one thing at a time and retest: more neurons (Dense(256)), more epochs, or a convolutional network (layers that scan small patches of the image), which reaches about 99 percent in the official Keras example.",
            "Know the limits: it only knows centered, single digits like MNIST. A photo of a street sign or a letter will still get a digit. In real work, such as reading forms or inspecting parts, a person checks low-confidence results, and the model is tested on data from the real place it will be used."
          ],
          steps: ["Run model.evaluate(x_test, y_test) and note the test accuracy.", "probs = model.predict(x_test[:5])", "print(probs.argmax(axis=1), y_test[:5]) to compare guesses with the truth.", "Change one thing (neurons or epochs), rebuild, retrain and re-evaluate.", "Write whether it helped and one limit."],
          words: [["evaluate", "tests the trained model on data and reports loss and accuracy."], ["argmax", "picks the position of the biggest number: here, the most likely digit."], ["Convolutional network (CNN)", "a network with layers that scan small patches of an image; very good at pictures."], ["Hyperparameter", "a setting you choose, like neurons or epochs, rather than one the network learns."]],
          slides: [
            { title: "Test on unseen data", bullets: ["model.evaluate(x_test, y_test)", "Reports test loss and accuracy"] },
            { title: "Make predictions", bullets: ["probs = model.predict(x_test[:5])", "probs.argmax(axis=1) = the guessed digits", "Compare with y_test[:5]"] },
            { title: "Improve one thing at a time", bullets: ["More neurons or more epochs", "Or a convolutional network", "Retest after every change"] },
            { title: "Know the limits", bullets: ["Only knows single digits like MNIST", "Test on real data from where it will be used", "A person checks unsure results"] }
          ],
          sources: [KERAS_MNIST],
          tryIt: "Final task: evaluate your network on the test set, predict the first five test images and compare with the true labels, then change Dense(128) to Dense(256) or epochs to 10, retrain and re-evaluate. Write two sentences: did the change help, and what is one limit of this model?",
          youCanNow: "train, test, use and improve a neural network, and explain where it should and should not be trusted."
        }
      ],
      check: {
        title: "Knowledge Check 2: Building a neural network in Colab",
        questions: [
          { q: "Why divide the MNIST pixels by 255.0?", options: ["To make the images bigger", "To delete dark pixels", "To change the labels", "To scale them between 0 and 1 so training works better"], answer: 3, why: "Normalizing to 0-1 helps the network learn." },
          { q: "What does layers.Flatten() do?", options: ["Turns a 28 x 28 grid into one row of 784 numbers", "Makes the image brighter", "Adds 10 neurons", "Splits the data"], answer: 0, why: "Flatten reshapes the grid into a row for Dense layers." },
          { q: "Why does the last layer have 10 neurons with softmax?", options: ["There are 10 epochs", "It is always 10", "There are 10 possible digits, and softmax gives a chance for each", "To save memory"], answer: 2, why: "One output per digit, as chances that add to 1." },
          { q: "Which line gives the most likely digit for each image?", options: ["probs.sum()", "model.fit(probs)", "y_test.argmax()", "probs.argmax(axis=1)"], answer: 3, why: "argmax picks the highest chance." },
          { q: "You want to know if Dense(256) is better than Dense(128). What do you do?", options: ["Change five things at once", "Look at the training loss only", "Change it, retrain, and compare test accuracy", "Guess"], answer: 2, why: "Change one thing and retest on the same test set." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Deep Learning and Neural Networks",
    questions: [
      { q: "Deep learning is:", options: ["A way to store files", "Machine learning with many-layered neural networks", "A kind of spreadsheet", "Learning while asleep"], answer: 1, why: "It uses deep (many-layer) networks." },
      { q: "Which task is deep learning especially good at?", options: ["Recognizing faces in photos", "Adding two numbers", "Sorting a short list", "Printing a page"], answer: 0, why: "Images, sound and text are its strengths." },
      { q: "In an image network, early layers usually notice:", options: ["Whole faces", "The file name", "Simple edges", "The label"], answer: 2, why: "Layers build from edges to shapes to objects." },
      { q: "Why did deep learning take off in recent years?", options: ["Big datasets and fast GPUs", "Smaller screens", "Fewer computers", "New keyboards"], answer: 0, why: "It needs lots of data and computing power." },
      { q: "What does a weight do in a neuron?", options: ["Counts the epochs", "Stores the label", "Draws the image", "Sets how much an input matters"], answer: 3, why: "Weights scale each input." },
      { q: "Inputs 2 and 2, weights 1 and -2, bias 1, ReLU. Output?", options: ["-1", "0", "1", "3"], answer: 1, why: "2 - 4 + 1 = -1, and ReLU turns -1 into 0." },
      { q: "Softmax in the last layer gives:", options: ["The number of layers", "Chances for each answer that add up to 100%", "The loss", "A random number"], answer: 1, why: "Softmax turns outputs into probabilities." },
      { q: "The loss going down during training means:", options: ["The data is shrinking", "The computer is slowing", "Overfitting for sure", "The network's guesses are getting less wrong"], answer: 3, why: "Lower loss means smaller errors." },
      { q: "The learning rate controls:", options: ["How big each weight update step is", "How many images there are", "The screen size", "The number of labels"], answer: 0, why: "It sets the size of each step." },
      { q: "One epoch is:", options: ["One neuron", "One test image", "One pass through all the training data", "One minute of training"], answer: 2, why: "An epoch covers the whole training set once." },
      { q: "A validation set is used to:", options: ["Train faster", "Store the model", "Label the images", "Catch overfitting during training"], answer: 3, why: "It is held back to check the model while it trains." },
      { q: "How many images does MNIST put in its test set?", options: ["28", "784", "10,000", "60,000"], answer: 2, why: "MNIST has 60,000 training and 10,000 test images." },
      { q: "Each MNIST image is:", options: ["A color photo of a street", "28 x 28 pixels of a handwritten digit", "A sound clip", "A sentence"], answer: 1, why: "Small grayscale digit images." },
      { q: "Which Keras layer has every neuron connected to every input?", options: ["Dense", "Flatten", "Input", "Softmax"], answer: 0, why: "Dense means fully connected." },
      { q: "What does model.compile set?", options: ["The dataset", "The image size", "The optimizer, loss and metrics", "The test accuracy"], answer: 2, why: "compile sets how the model learns and what it reports." },
      { q: "Labels are plain numbers like 7. Which loss fits?", options: ["sparse_categorical_crossentropy", "accuracy", "relu", "adam"], answer: 0, why: "That loss expects integer labels." },
      { q: "What does validation_split=0.1 in fit do?", options: ["Trains for 0.1 epochs", "Deletes 10% of the data", "Sets the learning rate", "Holds back 10% of training data to check the model"], answer: 3, why: "It reserves a validation share." },
      { q: "Which line measures accuracy on unseen images?", options: ["model.fit(x_test, y_test)", "model.evaluate(x_test, y_test)", "model.summary()", "plt.imshow(x_test[0])"], answer: 1, why: "evaluate tests on the data you give it." },
      { q: "What kind of network scans small patches of an image and does very well on pictures?", options: ["A spreadsheet", "A convolutional network (CNN)", "A rule-based chatbot", "A single neuron"], answer: 1, why: "CNNs are built for images." },
      { q: "Your digit model is used to read handwritten forms at work. What is a responsible step?", options: ["Trust every answer", "Never test it", "Hide that a model is used", "Have a person check low-confidence results and test it on real forms first"], answer: 3, why: "Real-world testing and human checks catch the model's mistakes." }
    ]
  }
};
