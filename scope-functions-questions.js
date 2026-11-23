const quizQuestions = [
  // Scope: Global, Block and Function
  {
    id: 1,
    question: "Where can a variable declared in the global scope be accessed?",
    options: ["Only inside functions", "Anywhere in the program", "Only inside blocks", "Only in loops"],
    correct: "Anywhere in the program",
  },
  {
    id: 2,
    question: "What is the output?\n\nlet x = 10;\nfunction show() { console.log(x); }\nshow();",
    options: ["undefined", "10", "ReferenceError", "null"],
    correct: "10",
  },
  {
    id: 3,
    question: "What is the output?\n\nfunction test() { let a = 5; }\ntest();\nconsole.log(typeof a);",
    options: ["number", "undefined", "ReferenceError", "string"],
    correct: "undefined",
  },
  {
    id: 4,
    question: "Which keywords are block-scoped?",
    options: ["var and let", "let and const", "var and const", "Only var"],
    correct: "let and const",
  },
  {
    id: 5,
    question: "What is the output?\n\nif (true) { var a = 1; }\nconsole.log(a);",
    options: ["1", "undefined", "ReferenceError", "null"],
    correct: "1",
  },
  {
    id: 6,
    question: "What is the output?\n\nif (true) { let b = 2; }\nconsole.log(b);",
    options: ["2", "undefined", "ReferenceError", "null"],
    correct: "ReferenceError",
  },
  {
    id: 7,
    question: "What is the scope of a variable declared with var inside a function?",
    options: ["Global scope", "Block scope", "Function scope", "Module scope"],
    correct: "Function scope",
  },
  {
    id: 8,
    question: "What is the output?\n\nlet x = 1;\n{ let x = 2; }\nconsole.log(x);",
    options: ["1", "2", "undefined", "ReferenceError"],
    correct: "1",
  },
  {
    id: 9,
    question: "What is the output?\n\nconsole.log(a);\nvar a = 5;",
    options: ["5", "undefined", "ReferenceError", "null"],
    correct: "undefined",
  },
  {
    id: 10,
    question: "What happens?\n\nconsole.log(b);\nlet b = 5;",
    options: ["Prints 5", "Prints undefined", "ReferenceError (temporal dead zone)", "Prints null"],
    correct: "ReferenceError (temporal dead zone)",
  },
  // Functions
  {
    id: 11,
    question: "Which is the correct way to declare a function?",
    options: ["function myFunc() {}", "func myFunc() {}", "def myFunc() {}", "function = myFunc() {}"],
    correct: "function myFunc() {}",
  },
  {
    id: 12,
    question: "What does a function return if it has no return statement?",
    options: ["null", "0", "undefined", "An empty string"],
    correct: "undefined",
  },
  {
    id: 13,
    question: "What is the output?\n\nfunction add(a, b) { return a + b; }\nconsole.log(add(2, 3));",
    options: ["23", "5", "undefined", "NaN"],
    correct: "5",
  },
  {
    id: 14,
    question: "Which is an arrow function?",
    options: ["const f = () => {}", "const f = function() {}", "function f() => {}", "const f = -> {}"],
    correct: "const f = () => {}",
  },
  {
    id: 15,
    question: "What is the output?\n\nfunction greet(name = 'Guest') { return 'Hi ' + name; }\nconsole.log(greet());",
    options: ["Hi undefined", "Hi Guest", "Hi", "Error"],
    correct: "Hi Guest",
  },
  {
    id: 16,
    question: "What is the output?\n\nsayHi();\nfunction sayHi() { console.log('Hi'); }",
    options: ["Hi", "undefined", "ReferenceError", "TypeError"],
    correct: "Hi",
  },
  {
    id: 17,
    question: "What is the output?\n\nhello();\nvar hello = function() { console.log('Hello'); };",
    options: ["Hello", "undefined", "ReferenceError", "TypeError"],
    correct: "TypeError",
  },
  {
    id: 18,
    question: "What is a closure?",
    options: [
      "A function that has no parameters",
      "A function that remembers variables from its outer scope",
      "A function that closes the browser",
      "A function that runs immediately",
    ],
    correct: "A function that remembers variables from its outer scope",
  },
  {
    id: 19,
    question: "What is the output?\n\nfunction outer() {\n  let n = 0;\n  return function() { return ++n; };\n}\nconst c = outer();\nc();\nconsole.log(c());",
    options: ["0", "1", "2", "undefined"],
    correct: "2",
  },
  {
    id: 20,
    question: "What do parameters do in a function?",
    options: [
      "Hold values passed into the function when called",
      "Name the function",
      "Stop the function",
      "Declare global variables",
    ],
    correct: "Hold values passed into the function when called",
  },
];
