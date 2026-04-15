const categories = {
  mixed: {
    label: "All Subjects",
    description: "A balanced mix across social science, English grammar, mathematics, and science.",
    count: 80
  },
  socialScience: {
    label: "Social Science",
    description: "Geography, civics, history, and everyday world knowledge.",
    count: 20
  },
  englishGrammar: {
    label: "English Grammar",
    description: "Parts of speech, sentence usage, punctuation, and vocabulary basics.",
    count: 20
  },
  mathematics: {
    label: "Mathematics",
    description: "Number sense, arithmetic, fractions, geometry, and simple algebra.",
    count: 20
  },
  science: {
    label: "Science",
    description: "Living things, space, matter, energy, and basic human biology.",
    count: 20
  }
};

const questionBank = {
  socialScience: [
    {
      id: "ss-1",
      prompt: "What is the capital of India?",
      options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
      answer: "New Delhi",
      note: "Social Science"
    },
    {
      id: "ss-2",
      prompt: "In which direction does the sun appear to rise?",
      options: ["North", "South", "East", "West"],
      answer: "East",
      note: "Geography Basics"
    },
    {
      id: "ss-3",
      prompt: "India became independent in which year?",
      options: ["1945", "1947", "1950", "1952"],
      answer: "1947",
      note: "History"
    },
    {
      id: "ss-4",
      prompt: "Which body makes laws at the national level in India?",
      options: ["Parliament", "Supreme Court", "Election Commission", "Police Department"],
      answer: "Parliament",
      note: "Civics"
    },
    {
      id: "ss-5",
      prompt: "Which imaginary line divides Earth into the Northern and Southern Hemispheres?",
      options: ["Prime Meridian", "Tropic of Cancer", "Equator", "Arctic Circle"],
      answer: "Equator",
      note: "Geography"
    },
    {
      id: "ss-6",
      prompt: "Which is the smallest continent by land area?",
      options: ["Europe", "Antarctica", "Australia", "South America"],
      answer: "Australia",
      note: "World Geography"
    },
    {
      id: "ss-7",
      prompt: "Climate refers to:",
      options: [
        "the weather at one exact moment",
        "the long-term pattern of weather in a place",
        "only rainfall in a place",
        "only temperature in a place"
      ],
      answer: "the long-term pattern of weather in a place",
      note: "Geography"
    },
    {
      id: "ss-8",
      prompt: "What is the voting age for citizens in India?",
      options: ["16 years", "18 years", "20 years", "21 years"],
      answer: "18 years",
      note: "Civics"
    },
    {
      id: "ss-9",
      prompt: "The River Ganga flows into which water body?",
      options: ["Arabian Sea", "Indian Ocean", "Bay of Bengal", "Red Sea"],
      answer: "Bay of Bengal",
      note: "Indian Geography"
    },
    {
      id: "ss-10",
      prompt: "Which local body is commonly associated with village governance in India?",
      options: ["Municipal Corporation", "Panchayat", "Parliament", "Cabinet"],
      answer: "Panchayat",
      note: "Civics"
    },
    {
      id: "ss-11",
      prompt: "Who is known as the chairman of the Drafting Committee of the Indian Constitution?",
      options: ["Jawaharlal Nehru", "Mahatma Gandhi", "Dr. B. R. Ambedkar", "Sardar Patel"],
      answer: "Dr. B. R. Ambedkar",
      note: "History"
    },
    {
      id: "ss-12",
      prompt: "Coal, petroleum, and natural gas are examples of:",
      options: ["renewable resources", "fossil fuels", "cash crops", "minerals from rivers"],
      answer: "fossil fuels",
      note: "Resources"
    },
    {
      id: "ss-13",
      prompt: "The Himalayas are mainly located in which part of India?",
      options: ["North", "South", "East", "West"],
      answer: "North",
      note: "Indian Geography"
    },
    {
      id: "ss-14",
      prompt: "Democracy is best described as a system in which:",
      options: [
        "only kings make decisions",
        "the army rules the country",
        "people choose their government",
        "judges make every law"
      ],
      answer: "people choose their government",
      note: "Civics"
    },
    {
      id: "ss-15",
      prompt: "What is the currency of Japan?",
      options: ["Won", "Yuan", "Yen", "Dollar"],
      answer: "Yen",
      note: "World Knowledge"
    },
    {
      id: "ss-16",
      prompt: "Which branch of government interprets laws?",
      options: ["Judiciary", "Executive", "Legislature", "Media"],
      answer: "Judiciary",
      note: "Civics"
    },
    {
      id: "ss-17",
      prompt: "Earthquake strength is commonly recorded on which scale?",
      options: ["Celsius scale", "Richter scale", "Pascal scale", "Litre scale"],
      answer: "Richter scale",
      note: "Disaster Awareness"
    },
    {
      id: "ss-18",
      prompt: "A place where buyers and sellers exchange goods is called a:",
      options: ["museum", "market", "library", "factory"],
      answer: "market",
      note: "Economics"
    },
    {
      id: "ss-19",
      prompt: "The word monsoon is most closely related to:",
      options: ["desert storms only", "seasonal winds and rain", "earthquakes", "volcanoes"],
      answer: "seasonal winds and rain",
      note: "Climate"
    },
    {
      id: "ss-20",
      prompt: "The headquarters of the United Nations is in:",
      options: ["London", "Paris", "New York", "Geneva"],
      answer: "New York",
      note: "Global Organizations"
    }
  ],
  englishGrammar: [
    {
      id: "eg-1",
      prompt: "Choose the correct sentence.",
      options: [
        "Riya and me went to the park.",
        "Riya and I went to the park.",
        "Me and Riya went to the park.",
        "Riya and myself went to the park."
      ],
      answer: "Riya and I went to the park.",
      note: "Pronouns"
    },
    {
      id: "eg-2",
      prompt: "What is the past tense of the verb 'go'?",
      options: ["goed", "gone", "went", "goes"],
      answer: "went",
      note: "Verb Forms"
    },
    {
      id: "eg-3",
      prompt: "Which sentence has the correct punctuation?",
      options: [
        "Where are you going.",
        "Where are you going?",
        "Where are you going!",
        "Where are you, going?"
      ],
      answer: "Where are you going?",
      note: "Punctuation"
    },
    {
      id: "eg-4",
      prompt: "An adjective is a word that describes a:",
      options: ["verb", "noun", "punctuation mark", "preposition"],
      answer: "noun",
      note: "Parts of Speech"
    },
    {
      id: "eg-5",
      prompt: "Which word is a synonym of 'happy'?",
      options: ["sad", "joyful", "angry", "silent"],
      answer: "joyful",
      note: "Vocabulary"
    },
    {
      id: "eg-6",
      prompt: "Which word is the opposite of 'ancient'?",
      options: ["old", "historic", "modern", "stone"],
      answer: "modern",
      note: "Vocabulary"
    },
    {
      id: "eg-7",
      prompt: "Which word is a conjunction?",
      options: ["because", "gently", "window", "yellow"],
      answer: "because",
      note: "Grammar"
    },
    {
      id: "eg-8",
      prompt: "Complete the sentence: She ___ to school every day.",
      options: ["go", "goes", "going", "gone"],
      answer: "goes",
      note: "Subject-Verb Agreement"
    },
    {
      id: "eg-9",
      prompt: "Which sentence is written in passive voice?",
      options: [
        "Maya baked the cake.",
        "The cake was baked by Maya.",
        "Maya is baking the cake.",
        "Maya bakes cakes."
      ],
      answer: "The cake was baked by Maya.",
      note: "Voice"
    },
    {
      id: "eg-10",
      prompt: "Which word is an adverb?",
      options: ["quickly", "quick", "quiet", "queen"],
      answer: "quickly",
      note: "Parts of Speech"
    },
    {
      id: "eg-11",
      prompt: "Choose the correct article: It took me ___ hour to finish.",
      options: ["a", "an", "the", "no article"],
      answer: "an",
      note: "Articles"
    },
    {
      id: "eg-12",
      prompt: "Identify the noun in this sentence: The puppy slept on the rug.",
      options: ["slept", "on", "puppy", "the"],
      answer: "puppy",
      note: "Nouns"
    },
    {
      id: "eg-13",
      prompt: "Which sentence uses the apostrophe correctly?",
      options: [
        "The girls bag is blue.",
        "The girl's bag is blue.",
        "The girls' bag is blue's.",
        "The girl's bag are blue."
      ],
      answer: "The girl's bag is blue.",
      note: "Punctuation"
    },
    {
      id: "eg-14",
      prompt: "What is the plural form of 'child'?",
      options: ["childs", "children", "childes", "childrens"],
      answer: "children",
      note: "Word Forms"
    },
    {
      id: "eg-15",
      prompt: "Complete the sentence: If I ___ time, I will call you.",
      options: ["have", "had", "having", "has"],
      answer: "have",
      note: "Sentence Completion"
    },
    {
      id: "eg-16",
      prompt: "Which word is a preposition?",
      options: ["under", "happily", "beautiful", "jumped"],
      answer: "under",
      note: "Parts of Speech"
    },
    {
      id: "eg-17",
      prompt: "Choose the correct sentence.",
      options: [
        "Neither of the boys are late.",
        "Neither of the boys is late.",
        "Neither of the boys were late.",
        "Neither of the boys be late."
      ],
      answer: "Neither of the boys is late.",
      note: "Agreement"
    },
    {
      id: "eg-18",
      prompt: "Which sentence is a question?",
      options: [
        "You finished your homework.",
        "Please finish your homework.",
        "Did you finish your homework?",
        "Finish your homework now."
      ],
      answer: "Did you finish your homework?",
      note: "Sentence Types"
    },
    {
      id: "eg-19",
      prompt: "What is the comparative form of 'good'?",
      options: ["gooder", "more good", "best", "better"],
      answer: "better",
      note: "Comparison"
    },
    {
      id: "eg-20",
      prompt: "Choose the correctly punctuated sentence.",
      options: [
        "After lunch we went outside.",
        "After lunch, we went outside.",
        "After lunch; we went outside.",
        "After, lunch we went outside."
      ],
      answer: "After lunch, we went outside.",
      note: "Commas"
    }
  ],
  mathematics: [
    {
      id: "ma-1",
      prompt: "What is 24 + 18?",
      options: ["40", "41", "42", "44"],
      answer: "42",
      note: "Addition"
    },
    {
      id: "ma-2",
      prompt: "What is 9 x 7?",
      options: ["56", "63", "72", "79"],
      answer: "63",
      note: "Multiplication"
    },
    {
      id: "ma-3",
      prompt: "What is half of 96?",
      options: ["46", "48", "49", "52"],
      answer: "48",
      note: "Division"
    },
    {
      id: "ma-4",
      prompt: "What is 3/4 of 20?",
      options: ["12", "15", "16", "18"],
      answer: "15",
      note: "Fractions"
    },
    {
      id: "ma-5",
      prompt: "What is the perimeter of a square with side length 6 cm?",
      options: ["12 cm", "18 cm", "24 cm", "36 cm"],
      answer: "24 cm",
      note: "Geometry"
    },
    {
      id: "ma-6",
      prompt: "Which of these is a prime number?",
      options: ["21", "27", "29", "33"],
      answer: "29",
      note: "Number Sense"
    },
    {
      id: "ma-7",
      prompt: "What is 15% of 200?",
      options: ["15", "20", "25", "30"],
      answer: "30",
      note: "Percentages"
    },
    {
      id: "ma-8",
      prompt: "Which fraction is equal to 0.75?",
      options: ["1/2", "2/3", "3/4", "4/5"],
      answer: "3/4",
      note: "Decimals and Fractions"
    },
    {
      id: "ma-9",
      prompt: "Find the next number: 2, 4, 8, 16, __",
      options: ["18", "24", "30", "32"],
      answer: "32",
      note: "Patterns"
    },
    {
      id: "ma-10",
      prompt: "What is 144 / 12?",
      options: ["10", "11", "12", "14"],
      answer: "12",
      note: "Division"
    },
    {
      id: "ma-11",
      prompt: "How many degrees are in a right angle?",
      options: ["45", "90", "120", "180"],
      answer: "90",
      note: "Geometry"
    },
    {
      id: "ma-12",
      prompt: "What is the LCM of 6 and 8?",
      options: ["12", "18", "24", "48"],
      answer: "24",
      note: "Factors and Multiples"
    },
    {
      id: "ma-13",
      prompt: "What is the mean of 3, 6, and 9?",
      options: ["5", "6", "7", "9"],
      answer: "6",
      note: "Averages"
    },
    {
      id: "ma-14",
      prompt: "What is the area of a rectangle with length 8 cm and width 5 cm?",
      options: ["13 cm2", "26 cm2", "40 cm2", "80 cm2"],
      answer: "40 cm2",
      note: "Geometry"
    },
    {
      id: "ma-15",
      prompt: "Solve: 5x = 35",
      options: ["5", "6", "7", "8"],
      answer: "7",
      note: "Algebra"
    },
    {
      id: "ma-16",
      prompt: "What is 2 to the power of 5?",
      options: ["10", "16", "25", "32"],
      answer: "32",
      note: "Exponents"
    },
    {
      id: "ma-17",
      prompt: "If one book costs 75 rupees, what is the cost of 4 books?",
      options: ["225", "275", "300", "325"],
      answer: "300",
      note: "Word Problem"
    },
    {
      id: "ma-18",
      prompt: "What is 1.2 + 0.8?",
      options: ["1.0", "1.6", "2.0", "2.2"],
      answer: "2.0",
      note: "Decimals"
    },
    {
      id: "ma-19",
      prompt: "Simplify the fraction 18/24.",
      options: ["2/3", "3/4", "4/5", "5/6"],
      answer: "3/4",
      note: "Fractions"
    },
    {
      id: "ma-20",
      prompt: "A triangle with all sides equal is called:",
      options: ["scalene", "isosceles", "equilateral", "right"],
      answer: "equilateral",
      note: "Geometry"
    }
  ],
  science: [
    {
      id: "sc-1",
      prompt: "Plants make their own food through:",
      options: ["respiration", "digestion", "photosynthesis", "evaporation"],
      answer: "photosynthesis",
      note: "Life Science"
    },
    {
      id: "sc-2",
      prompt: "Which planet is closest to the Sun?",
      options: ["Venus", "Earth", "Mercury", "Mars"],
      answer: "Mercury",
      note: "Space"
    },
    {
      id: "sc-3",
      prompt: "Which organ pumps blood through the human body?",
      options: ["Lungs", "Heart", "Liver", "Kidney"],
      answer: "Heart",
      note: "Human Body"
    },
    {
      id: "sc-4",
      prompt: "At sea level, water boils at approximately:",
      options: ["0 C", "50 C", "100 C", "150 C"],
      answer: "100 C",
      note: "Matter"
    },
    {
      id: "sc-5",
      prompt: "Which gas do humans need for breathing?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Helium"],
      answer: "Oxygen",
      note: "Human Biology"
    },
    {
      id: "sc-6",
      prompt: "The force that pulls objects toward Earth is called:",
      options: ["friction", "gravity", "magnetism", "pressure"],
      answer: "gravity",
      note: "Physics"
    },
    {
      id: "sc-7",
      prompt: "When a solid changes into a liquid, the process is called:",
      options: ["freezing", "melting", "condensation", "evaporation"],
      answer: "melting",
      note: "States of Matter"
    },
    {
      id: "sc-8",
      prompt: "Which is the largest planet in our solar system?",
      options: ["Saturn", "Earth", "Jupiter", "Neptune"],
      answer: "Jupiter",
      note: "Space"
    },
    {
      id: "sc-9",
      prompt: "Which part of the body protects the brain?",
      options: ["Ribs", "Skull", "Spine", "Shoulder"],
      answer: "Skull",
      note: "Human Body"
    },
    {
      id: "sc-10",
      prompt: "A torch commonly gets electrical energy from a:",
      options: ["mirror", "battery", "magnet", "wire only"],
      answer: "battery",
      note: "Electricity"
    },
    {
      id: "sc-11",
      prompt: "Which animal undergoes metamorphosis?",
      options: ["Butterfly", "Cat", "Elephant", "Cow"],
      answer: "Butterfly",
      note: "Life Cycles"
    },
    {
      id: "sc-12",
      prompt: "Earth takes about how long to revolve around the Sun once?",
      options: ["24 hours", "30 days", "365 days", "10 years"],
      answer: "365 days",
      note: "Space"
    },
    {
      id: "sc-13",
      prompt: "Which acid is present in the stomach and helps digestion?",
      options: ["Sulfuric acid", "Hydrochloric acid", "Nitric acid", "Citric acid"],
      answer: "Hydrochloric acid",
      note: "Human Biology"
    },
    {
      id: "sc-14",
      prompt: "We hear sounds mainly with our:",
      options: ["eyes", "ears", "skin", "nose"],
      answer: "ears",
      note: "Sense Organs"
    },
    {
      id: "sc-15",
      prompt: "Which vitamin is produced when skin is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D",
      note: "Health"
    },
    {
      id: "sc-16",
      prompt: "The Moon looks bright because it:",
      options: ["produces its own light", "reflects sunlight", "is made of fire", "contains electricity"],
      answer: "reflects sunlight",
      note: "Space"
    },
    {
      id: "sc-17",
      prompt: "Which simple machine is often used to draw water from a well?",
      options: ["Pulley", "Wedge", "Screw", "Wheelbarrow"],
      answer: "Pulley",
      note: "Machines"
    },
    {
      id: "sc-18",
      prompt: "Which state of matter has no fixed shape and no fixed volume?",
      options: ["Solid", "Liquid", "Gas", "Crystal"],
      answer: "Gas",
      note: "States of Matter"
    },
    {
      id: "sc-19",
      prompt: "Red blood cells mainly carry:",
      options: ["water", "oxygen", "calcium", "sugar only"],
      answer: "oxygen",
      note: "Human Body"
    },
    {
      id: "sc-20",
      prompt: "Mixing vinegar and baking soda releases which gas?",
      options: ["Hydrogen", "Oxygen", "Carbon dioxide", "Nitrogen"],
      answer: "Carbon dioxide",
      note: "Chemistry"
    }
  ]
};

const state = {
  selectedCategory: "",
  roundQuestions: [],
  currentIndex: 0,
  score: 0,
  answered: false,
  roundNumber: 0,
  usedByMode: {
    mixed: new Set(),
    socialScience: new Set(),
    englishGrammar: new Set(),
    mathematics: new Set(),
    science: new Set()
  }
};

const elements = {
  homeScreen: document.getElementById("homeScreen"),
  previewPanel: document.getElementById("previewPanel"),
  quizScreen: document.getElementById("quizScreen"),
  resultScreen: document.getElementById("resultScreen"),
  categoryGrid: document.getElementById("categoryGrid"),
  selectionTitle: document.getElementById("selectionTitle"),
  selectionDescription: document.getElementById("selectionDescription"),
  startButton: document.getElementById("startButton"),
  activeCategoryPill: document.getElementById("activeCategoryPill"),
  quizHeading: document.getElementById("quizHeading"),
  roundCounter: document.getElementById("roundCounter"),
  progressText: document.getElementById("progressText"),
  scoreText: document.getElementById("scoreText"),
  progressBar: document.getElementById("progressBar"),
  questionLabel: document.getElementById("questionLabel"),
  questionText: document.getElementById("questionText"),
  optionsContainer: document.getElementById("optionsContainer"),
  feedbackText: document.getElementById("feedbackText"),
  nextButton: document.getElementById("nextButton"),
  resultBadge: document.getElementById("resultBadge"),
  resultTitle: document.getElementById("resultTitle"),
  resultSummary: document.getElementById("resultSummary"),
  finalScore: document.getElementById("finalScore"),
  finalAccuracy: document.getElementById("finalAccuracy"),
  finalCategory: document.getElementById("finalCategory"),
  nextSetButton: document.getElementById("nextSetButton"),
  changeCategoryButton: document.getElementById("changeCategoryButton")
};

function getQuestionPool(categoryKey) {
  if (categoryKey === "mixed") {
    return Object.values(questionBank).flat();
  }

  return questionBank[categoryKey];
}

function shuffle(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function buildCategoryCards() {
  const cardsMarkup = Object.entries(categories)
    .map(([key, category]) => {
      const isSelected = state.selectedCategory === key;

      return `
        <button class="category-card ${isSelected ? "is-active" : ""}" data-category="${key}" type="button">
          <h3>${category.label}</h3>
          <p>${category.description}</p>
          <div class="category-meta">
            <span>${key === "mixed" ? "Mixed mode" : "Single subject"}</span>
            <span>${category.count} questions</span>
          </div>
        </button>
      `;
    })
    .join("");

  elements.categoryGrid.innerHTML = cardsMarkup;

  elements.categoryGrid.querySelectorAll(".category-card").forEach((card) => {
    card.addEventListener("click", () => {
      selectCategory(card.dataset.category);
    });
  });
}

function selectCategory(categoryKey) {
  state.selectedCategory = categoryKey;
  const category = categories[categoryKey];

  elements.selectionTitle.textContent = category.label;
  elements.selectionDescription.textContent = category.description;
  elements.startButton.disabled = false;

  buildCategoryCards();
}

function showScreen(screen) {
  elements.homeScreen.classList.add("hidden");
  elements.previewPanel.classList.add("hidden");
  elements.quizScreen.classList.add("hidden");
  elements.resultScreen.classList.add("hidden");
  screen.classList.remove("hidden");

  if (screen === elements.homeScreen) {
    elements.previewPanel.classList.remove("hidden");
  }
}

function prepareRound() {
  const categoryKey = state.selectedCategory;
  const sourceQuestions = getQuestionPool(categoryKey);
  const usedSet = state.usedByMode[categoryKey];
  let availableQuestions = sourceQuestions.filter((question) => !usedSet.has(question.id));

  if (availableQuestions.length < 10) {
    usedSet.clear();
    availableQuestions = [...sourceQuestions];
  }

  state.roundQuestions = shuffle(availableQuestions).slice(0, 10);
  state.currentIndex = 0;
  state.score = 0;
  state.answered = false;
  state.roundNumber += 1;

  state.roundQuestions.forEach((question) => {
    usedSet.add(question.id);
  });
}

function renderQuestion() {
  const currentQuestion = state.roundQuestions[state.currentIndex];
  const questionNumber = state.currentIndex + 1;
  const currentCategory = categories[state.selectedCategory];

  state.answered = false;
  elements.activeCategoryPill.textContent = currentCategory.label;
  elements.quizHeading.textContent = `${currentCategory.label} Quiz`;
  elements.roundCounter.textContent = String(state.roundNumber).padStart(2, "0");
  elements.progressText.textContent = `Question ${questionNumber} of 10`;
  elements.scoreText.textContent = `${state.score} correct`;
  elements.progressBar.style.width = `${questionNumber * 10}%`;
  elements.questionLabel.textContent = currentQuestion.note;
  elements.questionText.textContent = currentQuestion.prompt;
  elements.feedbackText.textContent = "Select one answer to continue.";
  elements.nextButton.disabled = true;
  elements.nextButton.textContent = questionNumber === 10 ? "View Results" : "Next Question";

  elements.optionsContainer.innerHTML = currentQuestion.options
    .map((option) => `<button class="option-button" type="button">${option}</button>`)
    .join("");

  elements.optionsContainer.querySelectorAll(".option-button").forEach((button) => {
    button.addEventListener("click", () => handleAnswer(button, currentQuestion.answer));
  });
}

function handleAnswer(button, correctAnswer) {
  if (state.answered) {
    return;
  }

  state.answered = true;
  const selectedAnswer = button.textContent;
  const isCorrect = selectedAnswer === correctAnswer;

  if (isCorrect) {
    state.score += 1;
    elements.feedbackText.textContent = "Correct answer. Keep going.";
  } else {
    elements.feedbackText.textContent = `Not quite. The correct answer is ${correctAnswer}.`;
  }

  elements.scoreText.textContent = `${state.score} correct`;
  elements.nextButton.disabled = false;

  elements.optionsContainer.querySelectorAll(".option-button").forEach((optionButton) => {
    const optionText = optionButton.textContent;
    optionButton.disabled = true;

    if (optionText === correctAnswer) {
      optionButton.classList.add("is-correct");
    }

    if (optionButton === button) {
      optionButton.classList.add("is-selected");
    }

    if (optionButton === button && !isCorrect) {
      optionButton.classList.add("is-wrong");
    }
  });
}

function showResults() {
  const accuracy = Math.round((state.score / 10) * 100);
  const categoryLabel = categories[state.selectedCategory].label;

  elements.resultBadge.textContent = accuracy >= 80 ? "Excellent Work" : accuracy >= 60 ? "Solid Progress" : "Keep Practicing";
  elements.resultTitle.textContent = accuracy >= 80 ? "You are in a great rhythm." : accuracy >= 60 ? "You are building momentum." : "A fresh round will help you improve.";
  elements.resultSummary.textContent = `You completed a 10-question ${categoryLabel.toLowerCase()} round. Start a new set anytime for another mix of questions.`;
  elements.finalScore.textContent = `${state.score} / 10`;
  elements.finalAccuracy.textContent = `${accuracy}%`;
  elements.finalCategory.textContent = categoryLabel;

  showScreen(elements.resultScreen);
}

function nextStep() {
  if (!state.answered) {
    return;
  }

  if (state.currentIndex === state.roundQuestions.length - 1) {
    showResults();
    return;
  }

  state.currentIndex += 1;
  renderQuestion();
}

function startRound() {
  prepareRound();
  showScreen(elements.quizScreen);
  renderQuestion();
}

function resetToHome() {
  showScreen(elements.homeScreen);
}

elements.startButton.addEventListener("click", startRound);
elements.nextButton.addEventListener("click", nextStep);
elements.nextSetButton.addEventListener("click", startRound);
elements.changeCategoryButton.addEventListener("click", resetToHome);

document.addEventListener("keydown", (event) => {
  if (elements.quizScreen.classList.contains("hidden")) {
    return;
  }

  const optionButtons = Array.from(elements.optionsContainer.querySelectorAll(".option-button"));

  if (event.key >= "1" && event.key <= "4") {
    const index = Number(event.key) - 1;
    const targetButton = optionButtons[index];

    if (targetButton) {
      targetButton.click();
    }
  }

  if (event.key === "Enter" && !elements.nextButton.disabled) {
    elements.nextButton.click();
  }
});

buildCategoryCards();
