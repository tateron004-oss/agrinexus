"use strict";

// Koach Learn course (shared): "Introduction to Machine Learning". Listed for Youth, Veterans (military), Workforce Development and Undeserved Community; category = the first one catalog.js gives (Youth).
// Shape and rules: scripts/koachlearn-courses/README.md. Model: re-entry/reentry-ai-digital-confidence.js.

const COLAB = { name: "Google Colab: Frequently Asked Questions", url: "https://research.google.com/colaboratory/faq.html" };
const SKLEARN = { name: "scikit-learn: Getting Started", url: "https://scikit-learn.org/stable/getting_started.html" };

module.exports = {
  id: "intro-machine-learning",
  category: "Youth",
  name: "Introduction to Machine Learning",
  skills: "Explaining how machines learn, Picking features and labels, Splitting data for training and testing, Training a model with scikit-learn, Measuring and comparing accuracy",
  outcome: "train two simple machine learning models in Google Colab with scikit-learn, test them on data they have not seen, compare their accuracy, and explain which one you would use and what its limits are.",
  about: [
    "Machine learning is behind spam filters, movie suggestions, map traffic times and the fraud alerts on a bank card. This course shows you how it works and then has you build a model yourself.",
    "Chapter 1 needs no code: you learn the ideas with everyday examples and small tables you make yourself. Chapter 2 moves to Google Colab, a free website that runs Python, where you train and test real models with a free library called scikit-learn. Knowing a little Python helps, but every line of code is given and explained.",
    "Each lesson takes about five minutes and ends with a \"Try it now\" task. A knowledge check closes each chapter and a 20-question quiz closes the course."
  ],
  finalTask: "In Google Colab, load the iris flower dataset, split it into training and test sets, train a decision tree and a k-nearest-neighbors model, print each model's accuracy on the test set, use the better one to predict the species of one new flower, and write two sentences: which model you would choose and one limit of your model.",
  chapters: [
    {
      name: "Chapter 1: How machines learn",
      lessons: [
        {
          title: "What machine learning is",
          minutes: 4,
          goal: "Explain machine learning in your own words and spot it in daily life.",
          text: [
            "In normal programming a person writes the rules. In machine learning (ML), you give the computer many examples with the right answers, and it finds the rules itself. The result is called a model.",
            "Everyday examples: your email learns what spam looks like from millions of marked emails. A music app suggests songs from what people like you played. A map app predicts traffic from past trips.",
            "Two common jobs: classification puts things in groups (spam or not spam, which kind of flower). Regression predicts a number (house price, minutes until the bus comes). When the examples come with answers, it is called supervised learning, and that is what this course teaches."
          ],
          words: [["Machine learning (ML)", "computers finding patterns in examples instead of following rules a person wrote."], ["Model", "what ML produces: a set of learned patterns that makes predictions."], ["Classification", "predicting a group or category."], ["Regression", "predicting a number."], ["Supervised learning", "learning from examples that come with the right answers."]],
          slides: [
            { title: "Rules vs learning", bullets: ["Programming: a person writes the rules", "ML: the computer finds rules from examples", "The result is a model"] },
            { title: "ML you already use", bullets: ["Spam filters", "Song and video suggestions", "Map traffic times", "Card fraud alerts"] },
            { title: "Two common jobs", bullets: ["Classification: which group?", "Regression: what number?", "Supervised: examples come with answers"] }
          ],
          tryIt: "List three apps you use that probably use machine learning. For each one, write what it predicts and whether that is classification (a group) or regression (a number).",
          youCanNow: "explain what machine learning is and tell classification from regression."
        },
        {
          title: "Data: features and labels",
          minutes: 5,
          goal: "Build a small dataset with features and a label.",
          text: [
            "ML learns from data, usually a table. Each row is one example. The columns that describe the example are features. The column with the answer you want to predict is the label.",
            "Example: to predict if a bus will be late, each row is one trip. Features might be time of day, day of the week and whether it rained. The label is late or on time.",
            "Good features are things that really affect the answer. More rows usually help. The data must also be fair and complete: if you only collect weekday trips, the model will be bad at weekends. A model can only be as good as its data."
          ],
          steps: ["Decide what you want to predict: that is your label.", "List things that might affect it: those are your features.", "Make a table with one row per example.", "Fill in at least 10 rows from real life.", "Check: are some kinds of examples missing?"],
          words: [["Dataset", "a collection of examples, usually a table."], ["Feature", "a column that describes an example, used to make the prediction."], ["Label", "the answer column the model learns to predict."], ["Bias in data", "when the data leaves out or over-counts some groups, so the model is unfair or wrong for them."]],
          slides: [
            { title: "Data is a table", bullets: ["Each row: one example", "Features: the describing columns", "Label: the answer to predict"] },
            { title: "Example: is the bus late?", bullets: ["Features: time, day, rain", "Label: late or on time"] },
            { title: "Good data", bullets: ["Features that really matter", "Enough rows", "No missing groups, like weekends"] }
          ],
          tryIt: "Pick something you can predict from daily life, such as whether you will be tired after practice or whether a store will be busy. Make a table with two or three features and a label, and fill in 10 rows.",
          youCanNow: "pick a label and useful features and build a small dataset."
        },
        {
          title: "Training and testing: is the model any good?",
          minutes: 5,
          goal: "Split data into a training set and a test set and measure accuracy.",
          text: [
            "Training is when the model studies examples to find patterns. But a model that only memorized its examples could look perfect and still fail on new ones. That is called overfitting, like a student who memorized last year's test answers.",
            "So you hold some data back. The training set (often about 75 to 80 percent of the rows) is used to learn. The test set (the rest) is hidden until the end and used to check the model on examples it has never seen.",
            "Accuracy is the share of test examples it got right. 18 right out of 20 is 90 percent. Always ask what a mistake costs: a wrong song suggestion is fine, a missed fraud alert is not."
          ],
          steps: ["Shuffle your rows.", "Put about 75 percent in the training set.", "Keep the rest as the test set and do not look at it.", "Find a pattern (a rule) from the training set only.", "Use it on the test set and count how many it got right."],
          words: [["Training", "the model learning patterns from examples."], ["Training set", "the rows used for learning."], ["Test set", "rows held back to check the model on new examples."], ["Overfitting", "when a model memorizes its training data and does badly on new data."], ["Accuracy", "the share of predictions that were right."]],
          slides: [
            { title: "Training", bullets: ["The model studies examples", "It finds patterns", "Memorizing is not learning"] },
            { title: "Hold data back", bullets: ["Training set: about 75-80% of rows", "Test set: the rest, hidden until the end"] },
            { title: "Accuracy", bullets: ["Right answers / total test examples", "18 of 20 right = 90%", "Ask what a mistake costs"] }
          ],
          tryIt: "Take your 10-row table from Lesson 2. Cover the last 2 rows. From the first 8, write one simple rule (for example \"if it rained, the bus is late\"). Test the rule on the 2 hidden rows and work out the accuracy.",
          youCanNow: "split data into training and test sets and calculate accuracy."
        }
      ],
      check: {
        title: "Knowledge Check 1: How machines learn",
        questions: [
          { q: "What does a machine learning model learn from?", options: ["Rules typed by a person for every case", "The computer's battery", "Examples, often with the right answers", "Random guesses only"], answer: 2, why: "ML finds patterns in examples." },
          { q: "Predicting tomorrow's temperature in degrees is:", options: ["Regression", "Classification", "Not ML", "A label"], answer: 0, why: "Predicting a number is regression." },
          { q: "In a table to predict if a store is busy, \"busy or not busy\" is the:", options: ["Feature", "Test set", "Accuracy", "Label"], answer: 3, why: "The label is the answer you want to predict." },
          { q: "Why keep a test set hidden until the end?", options: ["To make training faster", "To check the model on examples it has never seen", "Because it is broken", "To make the data bigger"], answer: 1, why: "Testing on new data shows whether the model really learned." },
          { q: "A model gets 15 of 20 test examples right. What is its accuracy?", options: ["15%", "20%", "50%", "75%"], answer: 3, why: "15 divided by 20 is 0.75, or 75 percent." }
        ]
      }
    },
    {
      name: "Chapter 2: Training your first model in Colab",
      lessons: [
        {
          title: "Loading a dataset with scikit-learn",
          minutes: 5,
          goal: "Load a practice dataset in Colab and look at its features and labels.",
          text: [
            "scikit-learn is a free Python library for machine learning, already installed in Google Colab. It comes with small practice datasets. The iris dataset has 150 flowers. Each has four features (length and width of two parts of the flower, in centimeters) and a label: one of three species.",
            "Load it with: from sklearn.datasets import load_iris, then iris = load_iris(). The features are in iris.data and the labels in iris.target. iris.feature_names and iris.target_names tell you what the columns and labels mean.",
            "Always look at your data before training: how many rows, what the columns are, and a few example rows. iris.data.shape tells you rows and columns: (150, 4)."
          ],
          steps: ["Open a new notebook at colab.research.google.com.", "Run: from sklearn.datasets import load_iris", "Run: iris = load_iris()", "Print iris.data.shape, iris.feature_names and iris.target_names.", "Print the first three rows: print(iris.data[:3], iris.target[:3])"],
          words: [["scikit-learn", "a free Python library for machine learning, imported as sklearn."], ["Iris dataset", "a famous practice dataset of 150 flowers in three species."], ["shape", "the number of rows and columns in the data."], ["X and y", "common names: X for the features, y for the labels."]],
          slides: [
            { title: "scikit-learn", bullets: ["Free Python ML library", "Already in Google Colab", "Comes with practice datasets"] },
            { title: "The iris dataset", bullets: ["150 flowers, 4 features each", "Label: one of 3 species", "iris.data and iris.target"] },
            { title: "Look before you train", bullets: ["iris.data.shape gives (150, 4)", "feature_names and target_names", "Print a few rows"] }
          ],
          sources: [SKLEARN, COLAB],
          tryIt: "Load the iris dataset in Colab. Print the shape, the four feature names, the three species names, and the first five rows with their labels. Write down which number stands for which species.",
          youCanNow: "load a dataset in Colab and describe its features, labels and size."
        },
        {
          title: "Training and testing a decision tree",
          minutes: 6,
          goal: "Split the data, train a decision tree, and measure its accuracy.",
          text: [
            "A decision tree learns a set of yes-or-no questions, like a flowchart: \"Is the petal shorter than 2.5 cm? Then it is species 0.\" It is easy to explain, which makes it a good first model.",
            "Every scikit-learn model works the same way: create it, fit it on training data, then predict on new data. The code: X, y = load_iris(return_X_y=True). X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.25, random_state=42). model = DecisionTreeClassifier(random_state=42). model.fit(X_train, y_train).",
            "Then test it: predictions = model.predict(X_test) and print(accuracy_score(y_test, predictions)). random_state=42 just fixes the shuffle so you get the same result every time you run it."
          ],
          steps: ["Import: from sklearn.model_selection import train_test_split", "Import: from sklearn.tree import DecisionTreeClassifier", "Import: from sklearn.metrics import accuracy_score", "Split with train_test_split(X, y, test_size=0.25, random_state=42).", "Create the model, call model.fit(X_train, y_train), then predict on X_test and print the accuracy."],
          words: [["Decision tree", "a model that learns a flowchart of yes-or-no questions."], ["fit", "train the model on data."], ["predict", "use the trained model to guess labels for new data."], ["train_test_split", "the scikit-learn tool that splits data into training and test sets."], ["random_state", "a number that fixes the random shuffle so results repeat."]],
          slides: [
            { title: "Decision trees", bullets: ["A flowchart of yes-or-no questions", "Easy to explain", "A good first model"] },
            { title: "The pattern for every model", bullets: ["Create it", "fit(X_train, y_train)", "predict(X_test)"] },
            { title: "Measure it", bullets: ["accuracy_score(y_test, predictions)", "test_size=0.25 keeps 25% for testing", "random_state makes results repeat"] }
          ],
          sources: [SKLEARN],
          tryIt: "Type and run the full decision tree code in Colab. Print the accuracy. Then change test_size to 0.5, run it again, and write down whether accuracy went up or down.",
          youCanNow: "split data, train a decision tree with fit, predict with it and measure accuracy."
        },
        {
          title: "Comparing models and knowing their limits",
          minutes: 6,
          goal: "Train a second model, compare it with the first, predict a new example and name a limit.",
          text: [
            "There is rarely one perfect model, so you try more than one. k-nearest neighbors (KNN) predicts by finding the k most similar examples in the training data and taking a vote. Create it with KNeighborsClassifier(n_neighbors=5) from sklearn.neighbors; it uses the same fit and predict steps.",
            "Compare both models on the same test set. To predict one new flower, give the model a list inside a list: model.predict([[5.1, 3.5, 1.4, 0.2]]). It returns the species number; iris.target_names turns it into a name.",
            "Know the limits. These models only know these three species and these four measurements: show them a rose and they will still name an iris. A small test set can make accuracy look better or worse than it is. And with real data about people, check that the model works fairly for every group before anyone relies on it."
          ],
          steps: ["Import: from sklearn.neighbors import KNeighborsClassifier", "Create knn = KNeighborsClassifier(n_neighbors=5) and fit it on the same training data.", "Print both accuracy scores.", "Predict one new flower with the better model: model.predict([[5.1, 3.5, 1.4, 0.2]])", "Write which model you would choose and one limit."],
          words: [["k-nearest neighbors (KNN)", "a model that predicts by a vote of the most similar training examples."], ["n_neighbors", "how many similar examples KNN looks at (the k)."], ["Limit", "a case the model cannot handle well."], ["Fairness", "a model working equally well for every group of people it affects."]],
          slides: [
            { title: "Try more than one model", bullets: ["KNN: vote of the k most similar examples", "KNeighborsClassifier(n_neighbors=5)", "Same fit and predict steps"] },
            { title: "Compare and predict", bullets: ["Same test set for both models", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "target_names turns numbers into names"] },
            { title: "Know the limits", bullets: ["Only knows what it was trained on", "Small test sets can mislead", "With people's data, check fairness"] }
          ],
          sources: [SKLEARN],
          tryIt: "Final task: in one notebook, train the decision tree and a KNN model on the same split, print both accuracies, predict the species of the flower [6.0, 2.9, 4.5, 1.5] with the better model and print its name, then write two sentences on which model you chose and one limit it has.",
          youCanNow: "train, test and compare two models, make a prediction, and explain a model's limits."
        }
      ],
      check: {
        title: "Knowledge Check 2: Training your first model in Colab",
        questions: [
          { q: "What does iris.data.shape (150, 4) tell you?", options: ["150 species and 4 flowers", "The model is 150% accurate", "4 rows and 150 columns", "150 rows and 4 feature columns"], answer: 3, why: "Shape lists rows, then columns." },
          { q: "What is the right order of steps for a scikit-learn model?", options: ["Create it, fit it on training data, then predict", "predict, then fit, then create", "fit on the test set, then predict on training data", "Only predict"], answer: 0, why: "Every model is created, fitted, then used to predict." },
          { q: "What does test_size=0.25 mean in train_test_split?", options: ["Use 25 rows", "Train for 25 minutes", "Keep 25% of rows for testing", "Accuracy must be 25%"], answer: 2, why: "test_size sets the share of rows held back." },
          { q: "How does k-nearest neighbors make a prediction?", options: ["It asks a person", "It flips a coin", "It writes rules by hand", "It takes a vote of the most similar training examples"], answer: 3, why: "KNN uses the k closest examples." },
          { q: "Your iris model is given the measurements of a rose. What happens?", options: ["It says \"rose\"", "It refuses", "It still names one of the three iris species", "It learns roses by itself"], answer: 2, why: "A model only knows the labels it was trained on." }
        ]
      }
    }
  ],
  quiz: {
    title: "Final Quiz: Introduction to Machine Learning",
    questions: [
      { q: "Machine learning means:", options: ["A person writes every rule", "A computer finds patterns from examples", "A robot that walks", "A faster internet"], answer: 1, why: "ML learns from data." },
      { q: "Which is an everyday use of machine learning?", options: ["An email spam filter", "A light switch", "A paper map", "A calculator adding 2 + 2"], answer: 0, why: "Spam filters learn from many marked emails." },
      { q: "Deciding if a photo shows a cat or a dog is:", options: ["Regression", "Overfitting", "Classification", "A feature"], answer: 2, why: "Choosing a group is classification." },
      { q: "Predicting how many minutes until the bus arrives is:", options: ["Regression", "Classification", "A label set", "Testing"], answer: 0, why: "Predicting a number is regression." },
      { q: "Supervised learning uses:", options: ["No data", "Only pictures", "Only a teacher in the room", "Examples with the right answers"], answer: 3, why: "Supervised means the examples are labeled." },
      { q: "In a dataset, each row is usually:", options: ["One feature", "One example", "The whole model", "A test score"], answer: 1, why: "Rows are examples; columns are features or the label." },
      { q: "To predict if a game will sell out, which is a sensible feature?", options: ["The color of the ticket website", "Day of the week and the opponent", "The model's accuracy", "The label"], answer: 1, why: "Features should really affect the answer." },
      { q: "Your bus data only has weekday trips. What is the risk?", options: ["None", "It will train too fast", "Accuracy will be 100%", "The model will be poor at predicting weekends"], answer: 3, why: "Missing kinds of examples make the model wrong for them." },
      { q: "Overfitting is when a model:", options: ["Memorizes training data and fails on new data", "Is too small to load", "Has too few features", "Runs out of memory"], answer: 0, why: "An overfit model does not generalize." },
      { q: "Which data should you use to measure accuracy?", options: ["The training set", "Any data you like", "The test set the model has not seen", "Only one row"], answer: 2, why: "Only unseen data shows real performance." },
      { q: "A model gets 45 of 50 test rows right. Accuracy is:", options: ["45%", "50%", "90%", "95%"], answer: 2, why: "45 divided by 50 is 0.9." },
      { q: "scikit-learn is:", options: ["A paid app", "A type of dataset", "A free Python library for machine learning", "A spreadsheet"], answer: 2, why: "scikit-learn (sklearn) is free and open source." },
      { q: "In the iris dataset, the species is the:", options: ["Feature", "Label", "Shape", "Model"], answer: 1, why: "Species is what we predict, so it is the label." },
      { q: "Which line trains a model?", options: ["model.fit(X_train, y_train)", "model.predict(X_test)", "print(model)", "load_iris()"], answer: 0, why: "fit trains the model." },
      { q: "Which line gives predictions for the test set?", options: ["model.fit(X_test)", "accuracy_score(X_test)", "model.predict(X_test)", "train_test_split(model)"], answer: 2, why: "predict uses the trained model on new data." },
      { q: "Why set random_state=42?", options: ["To make results the same each run", "To make the model 42% better", "To use 42 rows", "It is required to run Python"], answer: 0, why: "It fixes the random shuffle." },
      { q: "A decision tree is like:", options: ["A vote of neighbors", "A spreadsheet total", "A random guess", "A flowchart of yes-or-no questions"], answer: 3, why: "Trees split data with questions." },
      { q: "To predict one new flower you write:", options: ["model.predict(5.1, 3.5, 1.4, 0.2)", "model.predict([[5.1, 3.5, 1.4, 0.2]])", "model.fit([5.1])", "predict.model(5.1)"], answer: 1, why: "The model expects a list of rows, so one row goes inside another list." },
      { q: "Two models score 93% and 97% on the same test set. A good next step is:", options: ["Delete both", "Pick 97% and also think about its limits and the cost of mistakes", "Retrain on the test set", "Pick the slower one"], answer: 1, why: "Compare fairly, then weigh limits and mistake costs." },
      { q: "Before using a model that makes decisions about people, you should:", options: ["Skip testing", "Hide how it works", "Only use the training data", "Check it works fairly for every group"], answer: 3, why: "Fairness checks protect the people it affects." }
    ]
  }
};
