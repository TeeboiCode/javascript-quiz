const quizQuestions = [
  // Variables: const, let, and var
  {
    id: 1,
    question:
      "Which keyword declares a block-scoped variable that can be reassigned?",
    options: ["const", "let", "var", "static"],
    correct: "let",
  },
  {
    id: 2,
    question: "Which keyword declares a variable that cannot be reassigned?",
    options: ["let", "const", "var", "change"],
    correct: "const",
  },
  {
    id: 3,
    question:
      "Which keyword was commonly used to declare variables before ES6?",
    options: ["var", "let", "const", "define"],
    correct: "var",
  },
  {
    id: 4,
    question: "Which keywords create block-scoped variables?",
    options: ["let and const", "var and let", "var and const", "Only var"],
    correct: "let and const",
  },
  {
    id: 5,
    question: "Which declaration allows the value of score to change later?",
    options: [
      "const score = 10",
      "let score = 10",
      "fixed score = 10",
      "static score = 10",
    ],
    correct: "let score = 10",
  },

  // Primitive data types
  {
    id: 6,
    question: "Which of these is a JavaScript primitive data type?",
    options: ["string", "array", "object", "function"],
    correct: "string",
  },
  {
    id: 7,
    question: "What is the data type of 'Hello'?",
    options: ["number", "string", "boolean", "undefined"],
    correct: "string",
  },
  {
    id: 8,
    question: "What is the data type of 25?",
    options: ["string", "boolean", "number", "object"],
    correct: "number",
  },
  {
    id: 9,
    question: "Which primitive data type has only true and false values?",
    options: ["string", "number", "boolean", "symbol"],
    correct: "boolean",
  },
  {
    id: 10,
    question: "What value does a declared but uninitialized variable have?",
    options: ["null", "0", "false", "undefined"],
    correct: "undefined",
  },

  // console.log(), prompt(), and alert()
  {
    id: 11,
    question: "Which method displays a message in the browser console?",
    options: ["console.log()", "prompt()", "alert()", "document.write()"],
    correct: "console.log()",
  },
  {
    id: 12,
    question: "What does console.log(2 + 3) display?",
    options: ["23", "5", "2 + 3", "undefined"],
    correct: "5",
  },
  {
    id: 13,
    question: "Which function asks a user to enter a value?",
    options: ["alert()", "console.log()", "prompt()", "confirm.log()"],
    correct: "prompt()",
  },
  {
    id: 14,
    question:
      "A value entered through prompt() is normally returned as which data type?",
    options: ["number", "string", "boolean", "object"],
    correct: "string",
  },
  {
    id: 15,
    question: "Which function displays a message in a browser pop-up box?",
    options: ["prompt()", "console.log()", "alert()", "print.log()"],
    correct: "alert()",
  },

  // Arithmetic operators and modulus
  {
    id: 16,
    question: "Which operator is used for addition in JavaScript?",
    options: ["+", "-", "*", "/"],
    correct: "+",
  },
  {
    id: 17,
    question: "What is the result of 12 - 5?",
    options: ["17", "7", "60", "2"],
    correct: "7",
  },
  {
    id: 18,
    question: "What is the result of 4 * 3?",
    options: ["7", "43", "12", "1"],
    correct: "12",
  },
  {
    id: 19,
    question: "Which operator returns the remainder after division?",
    options: ["/", "%", "*", "+"],
    correct: "%",
  },
  {
    id: 20,
    question: "What is the result of 10 % 3?",
    options: ["3", "1", "0", "10"],
    correct: "1",
  },
  {
    id: 21,
    question: "Which expression can be used to check whether a number is even?",
    options: [
      "number % 2 === 0",
      "number / 2 === 1",
      "number + 2 === 0",
      "number * 2 === 0",
    ],
    correct: "number % 2 === 0",
  },

  // String concatenation
  {
    id: 22,
    question: "What does concatenation mean?",
    options: [
      "Joining values together",
      "Dividing two numbers",
      "Removing a variable",
      "Comparing data types",
    ],
    correct: "Joining values together",
  },
  {
    id: 23,
    question: "What is the result of 'Hello' + ' World'?",
    options: ["HelloWorld", "Hello World", "Hello + World", "undefined"],
    correct: "Hello World",
  },
  {
    id: 24,
    question: "What is the result of 5 + '2'?",
    options: ["7", "52", "3", "undefined"],
    correct: "52",
  },

  // Index notation
  {
    id: 25,
    question: "What is the first index of a JavaScript string or array?",
    options: ["-1", "0", "1", "2"],
    correct: "0",
  },
  {
    id: 26,
    question: "What is the result of 'JavaScript'[0]?",
    options: ["J", "a", "JavaScript", "0"],
    correct: "J",
  },
  {
    id: 27,
    question: "What is the result of 'JavaScript'[4]?",
    options: ["a", "S", "c", "v"],
    correct: "S",
  },
  {
    id: 28,
    question: "What is the result of ['red', 'blue', 'green'][1]?",
    options: ["red", "blue", "green", "1"],
    correct: "blue",
  },

  // length
  {
    id: 29,
    question: "What is the value of 'Hello'.length?",
    options: ["4", "5", "6", "undefined"],
    correct: "5",
  },
  {
    id: 30,
    question: "What is the length of [10, 20, 30, 40]?",
    options: ["3", "4", "40", "10"],
    correct: "4",
  },
];
