const quizQuestions = [
  // ===== Section 1: Introduction to JavaScript (Beginner) =====
  {
    id: 1,
    question: "What best describes what JavaScript is used for?",
    options: [
      "It is a programming language that makes web pages interactive.",
      "It is a styling language used only to color text on a page.",
      "It is a type of web browser used to visit websites.",
      "It is a database used to store files on a computer.",
    ],
    correct: "It is a programming language that makes web pages interactive.",
  },
  {
    id: 2,
    question: "Where does JavaScript commonly run?",
    options: [
      "It runs only inside Microsoft Word documents.",
      "It runs inside web browsers and also on servers using Node.js.",
      "It runs only on printers connected to a computer.",
      "It runs only inside spreadsheet applications.",
    ],
    correct: "It runs inside web browsers and also on servers using Node.js.",
  },
  {
    id: 3,
    question: "Which statement correctly describes HTML, CSS, and JavaScript together?",
    options: [
      "HTML provides structure, CSS provides styling, and JavaScript provides behavior.",
      "HTML provides behavior, CSS provides structure, and JavaScript provides styling.",
      "HTML, CSS, and JavaScript all do the exact same job on a web page.",
      "CSS is used to write the logic that JavaScript later styles.",
    ],
    correct: "HTML provides structure, CSS provides styling, and JavaScript provides behavior.",
  },
  {
    id: 4,
    question: "Which tag is used to include JavaScript code inside an HTML file?",
    options: [
      "The <script> tag is used to include JavaScript inside an HTML file.",
      "The <style> tag is used to include JavaScript inside an HTML file.",
      "The <javascript> tag is used to include JavaScript inside an HTML file.",
      "The <link> tag is the only way to include JavaScript inside an HTML file.",
    ],
    correct: "The <script> tag is used to include JavaScript inside an HTML file.",
  },
  {
    id: 5,
    question: "What happens when a browser encounters a JavaScript error while loading a page?",
    options: [
      "The browser usually stops running that script and may show an error in the console.",
      "The entire computer shuts down immediately without any warning.",
      "The HTML and CSS of the page are permanently deleted from the server.",
      "The error is silently fixed by the browser without affecting anything.",
    ],
    correct: "The browser usually stops running that script and may show an error in the console.",
  },
  {
    id: 6,
    question: "Why is JavaScript considered important for building modern websites?",
    options: [
      "It allows a page to respond to clicks, update content, and validate forms without reloading.",
      "It is the only language that can display plain text on a page.",
      "It is required to install a web browser on a new computer.",
      "It replaces the need for any internet connection when visiting a website.",
    ],
    correct: "It allows a page to respond to clicks, update content, and validate forms without reloading.",
  },

  // ===== Section 2: Language and Syntax =====
  {
    id: 7,
    question: "What is the correct way to end a statement in JavaScript, even though it is often optional?",
    options: [
      "A statement is typically ended with a semicolon at the end of the line.",
      "A statement is typically ended with a comma at the end of the line.",
      "A statement is typically ended with a colon at the end of the line.",
      "A statement is typically ended with a question mark at the end of the line.",
    ],
    correct: "A statement is typically ended with a semicolon at the end of the line.",
  },
  {
    id: 8,
    question: "How does JavaScript treat the variable names myVariable and MyVariable?",
    options: [
      "JavaScript treats them as two completely different variables because it is case sensitive.",
      "JavaScript treats them as exactly the same variable because casing does not matter.",
      "JavaScript automatically converts both names to lowercase before running the code.",
      "JavaScript only allows one of them to be written in a program at a time.",
    ],
    correct: "JavaScript treats them as two completely different variables because it is case sensitive.",
  },
  {
    id: 9,
    question: "Which symbol is used to start a single-line comment in JavaScript?",
    options: [
      "Two forward slashes are used to start a single-line comment.",
      "A single pound sign is used to start a single-line comment.",
      "Two asterisks are used to start a single-line comment.",
      "A single backslash is used to start a single-line comment.",
    ],
    correct: "Two forward slashes are used to start a single-line comment.",
  },
  {
    id: 10,
    question: "Which pair of symbols is used to write a multi-line comment in JavaScript?",
    options: [
      "A multi-line comment starts with /* and ends with */.",
      "A multi-line comment starts with // and ends with //.",
      "A multi-line comment starts with <!-- and ends with -->.",
      "A multi-line comment starts with ** and ends with **.",
    ],
    correct: "A multi-line comment starts with /* and ends with */.",
  },
  {
    id: 11,
    question: "Which pair of symbols is normally used to group the body of a function or an if statement?",
    options: [
      "Curly braces are normally used to group a block of statements together.",
      "Square brackets are normally used to group a block of statements together.",
      "Parentheses are normally used to group a block of statements together.",
      "Angle brackets are normally used to group a block of statements together.",
    ],
    correct: "Curly braces are normally used to group a block of statements together.",
  },
  {
    id: 12,
    question: "What is the purpose of parentheses after a function name, such as in greet()?",
    options: [
      "They are used to pass values into the function and to call it.",
      "They are used only to make the code look more visually appealing.",
      "They are required so the browser can delete the function afterward.",
      "They indicate that the function must never return a value.",
    ],
    correct: "They are used to pass values into the function and to call it.",
  },
  {
    id: 13,
    question: "Which of the following is a reserved keyword that cannot be used as a variable name?",
    options: [
      "The word 'function' cannot be used as a variable name because it is reserved.",
      "The word 'total' cannot be used as a variable name because it is reserved.",
      "The word 'price' cannot be used as a variable name because it is reserved.",
      "The word 'myValue' cannot be used as a variable name because it is reserved.",
    ],
    correct: "The word 'function' cannot be used as a variable name because it is reserved.",
  },

  // ===== Section 3: Output - alert(), prompt(), console.log() =====
  {
    id: 14,
    question: "What does the method console.log() do when it is used in a program?",
    options: [
      "It prints a message or value to the browser's developer console.",
      "It permanently saves a message to the user's hard drive.",
      "It sends an email containing the message to the developer.",
      "It opens a pop-up window asking the user to type something.",
    ],
    correct: "It prints a message or value to the browser's developer console.",
  },
  {
    id: 15,
    question: "What is displayed when the statement console.log(2 + 3) runs?",
    options: [
      "The number 5 is displayed in the console.",
      "The text '2 + 3' is displayed in the console exactly as written.",
      "The text '23' is displayed in the console as a joined string.",
      "Nothing at all is displayed because the statement causes an error.",
    ],
    correct: "The number 5 is displayed in the console.",
  },
  {
    id: 16,
    question: "What does the prompt() function do in a browser?",
    options: [
      "It opens a dialog box that asks the user to type in a value.",
      "It prints a message only to the developer console and nothing else.",
      "It closes the current browser tab without asking for confirmation.",
      "It refreshes the current web page automatically every few seconds.",
    ],
    correct: "It opens a dialog box that asks the user to type in a value.",
  },
  {
    id: 17,
    question: "What data type is the value returned by prompt() usually treated as, even if the user types a number?",
    options: [
      "The value returned by prompt() is usually treated as a string.",
      "The value returned by prompt() is usually treated as a boolean.",
      "The value returned by prompt() is usually treated as a number automatically.",
      "The value returned by prompt() is usually treated as an array.",
    ],
    correct: "The value returned by prompt() is usually treated as a string.",
  },
  {
    id: 18,
    question: "What does the alert() function do when it is called in a browser?",
    options: [
      "It displays a simple pop-up message box that the user must acknowledge.",
      "It silently writes a message to the console without showing anything visually.",
      "It asks the user to enter text and then returns that text.",
      "It permanently stops the JavaScript program from running again.",
    ],
    correct: "It displays a simple pop-up message box that the user must acknowledge.",
  },
  {
    id: 19,
    question: "Which output method is most useful for developers while debugging code, without interrupting the user?",
    options: [
      "console.log() is most useful for debugging because it does not interrupt the user.",
      "alert() is most useful for debugging because it pauses the whole page.",
      "prompt() is most useful for debugging because it asks the user questions.",
      "None of these methods can be used for debugging JavaScript code.",
    ],
    correct: "console.log() is most useful for debugging because it does not interrupt the user.",
  },
  {
    id: 20,
    question: "Why might a developer avoid using alert() too often in a finished application?",
    options: [
      "Because it blocks the page and forces the user to click OK before continuing.",
      "Because it is impossible for alert() to display any text at all.",
      "Because alert() permanently deletes all variables in the program.",
      "Because alert() only works when the user has a slow internet connection.",
    ],
    correct: "Because it blocks the page and forces the user to click OK before continuing.",
  },

  // ===== Section 4: Data & Types =====
  {
    id: 21,
    question: "Which of the following is considered a primitive data type in JavaScript?",
    options: [
      "A string is considered a primitive data type in JavaScript.",
      "An array is considered a primitive data type in JavaScript.",
      "An object is considered a primitive data type in JavaScript.",
      "A function is considered a primitive data type in JavaScript.",
    ],
    correct: "A string is considered a primitive data type in JavaScript.",
  },
  {
    id: 22,
    question: "What type of value is 'Hello World' in JavaScript?",
    options: [
      "'Hello World' is a string because it is text wrapped in quotes.",
      "'Hello World' is a number because it contains letters and spaces.",
      "'Hello World' is a boolean because it represents a true value.",
      "'Hello World' is undefined because no value was assigned yet.",
    ],
    correct: "'Hello World' is a string because it is text wrapped in quotes.",
  },
  {
    id: 23,
    question: "What type of value is the number 42 in JavaScript?",
    options: [
      "The number 42 is a numeric value and belongs to the number type.",
      "The number 42 is treated as a string because it has two digits.",
      "The number 42 is treated as a boolean because it is not zero.",
      "The number 42 is treated as an object by default in JavaScript.",
    ],
    correct: "The number 42 is a numeric value and belongs to the number type.",
  },
  {
    id: 24,
    question: "Which data type only ever holds one of two possible values?",
    options: [
      "A boolean only ever holds one of two possible values, true or false.",
      "A string only ever holds one of two possible values.",
      "A number only ever holds one of two possible values.",
      "An array only ever holds one of two possible values.",
    ],
    correct: "A boolean only ever holds one of two possible values, true or false.",
  },
  {
    id: 25,
    question: "What value does a variable have if it has been declared but never assigned a value?",
    options: [
      "A variable that is declared but never assigned has the value undefined.",
      "A variable that is declared but never assigned automatically becomes zero.",
      "A variable that is declared but never assigned automatically becomes an empty string.",
      "A variable that is declared but never assigned causes the program to crash immediately.",
    ],
    correct: "A variable that is declared but never assigned has the value undefined.",
  },
  {
    id: 26,
    question: "What is returned by the expression typeof 'Hello'?",
    options: [
      "The expression typeof 'Hello' returns the text 'string'.",
      "The expression typeof 'Hello' returns the text 'text'.",
      "The expression typeof 'Hello' returns the text 'word'.",
      "The expression typeof 'Hello' returns the text 'char'.",
    ],
    correct: "The expression typeof 'Hello' returns the text 'string'.",
  },
  {
    id: 27,
    question: "Which value is used in JavaScript to intentionally represent 'no value' or 'empty' on purpose?",
    options: [
      "The value null is used to intentionally represent an empty or non-existent value.",
      "The value undefined is always used on purpose and never appears accidentally.",
      "The value zero is always used to represent that nothing was found.",
      "The value false is always used to represent that something is missing.",
    ],
    correct: "The value null is used to intentionally represent an empty or non-existent value.",
  },
  {
    id: 28,
    question: "What will typeof null return in JavaScript, even though it can be confusing?",
    options: [
      "Surprisingly, typeof null returns the text 'object' due to a long-standing quirk.",
      "typeof null returns the text 'null' exactly as expected.",
      "typeof null returns the text 'undefined' because null has no type.",
      "typeof null causes the program to throw an error immediately.",
    ],
    correct: "Surprisingly, typeof null returns the text 'object' due to a long-standing quirk.",
  },

  // ===== Section 5: Variables & Scope =====
  {
    id: 29,
    question: "Which keyword should be used to declare a variable that is expected to change its value later?",
    options: [
      "The keyword let should be used for a variable whose value may change later.",
      "The keyword const should be used for a variable whose value may change later.",
      "The keyword function should be used for a variable whose value may change later.",
      "The keyword return should be used for a variable whose value may change later.",
    ],
    correct: "The keyword let should be used for a variable whose value may change later.",
  },
  {
    id: 30,
    question: "What happens if you try to reassign a new value to a variable declared with const?",
    options: [
      "JavaScript throws an error because variables declared with const cannot be reassigned.",
      "JavaScript silently ignores the new value and keeps running normally.",
      "JavaScript automatically converts the const variable into a let variable.",
      "JavaScript allows the reassignment without any problem at all.",
    ],
    correct: "JavaScript throws an error because variables declared with const cannot be reassigned.",
  },
  {
    id: 31,
    question: "Why is the keyword var less commonly recommended in modern JavaScript code?",
    options: [
      "Because var is function-scoped and can lead to confusing bugs compared to let and const.",
      "Because var cannot be used to store any numbers or strings at all.",
      "Because var was removed completely from the JavaScript language.",
      "Because var can only be used one time in an entire program.",
    ],
    correct: "Because var is function-scoped and can lead to confusing bugs compared to let and const.",
  },
  {
    id: 32,
    question: "What is meant by the 'scope' of a variable in JavaScript?",
    options: [
      "Scope refers to the part of the code where a variable can be accessed and used.",
      "Scope refers to the exact numeric value that a variable is currently storing.",
      "Scope refers to how many times a variable has been printed to the console.",
      "Scope refers to the color that a variable is displayed with in the browser.",
    ],
    correct: "Scope refers to the part of the code where a variable can be accessed and used.",
  },
  {
    id: 33,
    question: "Where can a variable declared inside a function normally be accessed from?",
    options: [
      "It can normally only be accessed from inside that same function.",
      "It can normally be accessed from absolutely anywhere in the entire program.",
      "It can normally only be accessed from a completely different file.",
      "It can normally be accessed only after the program has finished running.",
    ],
    correct: "It can normally only be accessed from inside that same function.",
  },
  {
    id: 34,
    question: "What is the output of the following code?\n\nlet count = 10;\nfunction showCount() { console.log(count); }\nshowCount();",
    options: [
      "The output is 10, because showCount can access the outer variable count.",
      "The output is undefined, because functions cannot see outer variables.",
      "The output causes a ReferenceError because count does not exist inside the function.",
      "The output is an empty string because count was never properly defined.",
    ],
    correct: "The output is 10, because showCount can access the outer variable count.",
  },
  {
    id: 35,
    question: "What is the output of the following code?\n\nfunction test() { let value = 5; }\ntest();\nconsole.log(value);",
    options: [
      "The code throws a ReferenceError because value only exists inside the function.",
      "The output is 5, because value is accessible everywhere once it is declared.",
      "The output is undefined, because value leaks out of the function silently.",
      "The output is 0, because value resets once the function finishes running.",
    ],
    correct: "The code throws a ReferenceError because value only exists inside the function.",
  },
  {
    id: 36,
    question: "What best describes the difference between global scope and block scope?",
    options: [
      "Global scope is accessible anywhere in the file, while block scope is limited to the nearest curly braces.",
      "Global scope and block scope always refer to exactly the same area of code.",
      "Block scope is accessible everywhere, while global scope is limited to one function only.",
      "Global scope only applies to numbers, while block scope only applies to strings.",
    ],
    correct: "Global scope is accessible anywhere in the file, while block scope is limited to the nearest curly braces.",
  },

  // ===== Section 6: Boolean Logic =====
  {
    id: 37,
    question: "What does a boolean value represent in JavaScript?",
    options: [
      "A boolean value represents one of two logical states, either true or false.",
      "A boolean value represents any whole number between zero and one hundred.",
      "A boolean value represents a short piece of text used for labels.",
      "A boolean value represents a list of other values grouped together.",
    ],
    correct: "A boolean value represents one of two logical states, either true or false.",
  },
  {
    id: 38,
    question: "What is the result of the comparison 5 > 3 in JavaScript?",
    options: [
      "The comparison 5 > 3 evaluates to the boolean value true.",
      "The comparison 5 > 3 evaluates to the boolean value false.",
      "The comparison 5 > 3 evaluates to the number 2.",
      "The comparison 5 > 3 evaluates to the string 'true'.",
    ],
    correct: "The comparison 5 > 3 evaluates to the boolean value true.",
  },
  {
    id: 39,
    question: "What is the purpose of the strict equality operator, written as ===, in JavaScript?",
    options: [
      "It checks whether two values are equal in both value and data type.",
      "It checks only whether two values look similar when printed to the screen.",
      "It assigns a value to a variable instead of comparing two values.",
      "It always returns true no matter what two values are being compared.",
    ],
    correct: "It checks whether two values are equal in both value and data type.",
  },
  {
    id: 40,
    question: "What will the expression '5' === 5 evaluate to in JavaScript, and why?",
    options: [
      "It evaluates to false, because one value is a string and the other is a number.",
      "It evaluates to true, because JavaScript ignores data types during comparison.",
      "It evaluates to undefined, because strings and numbers cannot be compared.",
      "It causes an error, because the === operator cannot compare different types.",
    ],
    correct: "It evaluates to false, because one value is a string and the other is a number.",
  },
  {
    id: 41,
    question: "What does the logical AND operator, written as &&, require in order to return true?",
    options: [
      "Both conditions joined by && must be true for the overall expression to return true.",
      "Only one of the two conditions needs to be true for && to return true.",
      "Neither condition needs to be true because && always returns true.",
      "The && operator compares numbers only and never works with booleans.",
    ],
    correct: "Both conditions joined by && must be true for the overall expression to return true.",
  },
  {
    id: 42,
    question: "What does the logical OR operator, written as ||, require in order to return true?",
    options: [
      "At least one of the two conditions joined by || must be true.",
      "Both conditions joined by || must be true at the same time.",
      "Neither condition can be true for || to return a true result.",
      "The || operator can only be used with string values, never booleans.",
    ],
    correct: "At least one of the two conditions joined by || must be true.",
  },
  {
    id: 43,
    question: "What is the result of the following code?\n\nlet age = 20;\nconsole.log(age >= 18 && age < 65);",
    options: [
      "The result is true, because age is both 18 or older and under 65.",
      "The result is false, because age does not satisfy either condition.",
      "The result is the number 20, because comparisons return numbers.",
      "The result is undefined, because age was never declared with const.",
    ],
    correct: "The result is true, because age is both 18 or older and under 65.",
  },

  // ===== Section 7: JavaScript Functions (Advanced) =====
  {
    id: 44,
    question: "What is the main purpose of a function in JavaScript?",
    options: [
      "A function groups reusable code together so it can be run whenever it is called.",
      "A function permanently stores data on the server for later use.",
      "A function automatically styles the HTML elements on a web page.",
      "A function deletes variables that are no longer needed in the program.",
    ],
    correct: "A function groups reusable code together so it can be run whenever it is called.",
  },
  {
    id: 45,
    question: "What is the output of the following code?\n\nfunction add(a, b) { return a + b; }\nconsole.log(add(2, 3));",
    options: [
      "The output is 5, because the function returns the sum of its two parameters.",
      "The output is 23, because the two arguments are joined as text instead of added.",
      "The output is undefined, because the function never actually returns anything.",
      "The output causes an error, because add was never properly defined.",
    ],
    correct: "The output is 5, because the function returns the sum of its two parameters.",
  },
  {
    id: 46,
    question: "What happens to code written after a return statement inside a function?",
    options: [
      "That code is never executed because the return statement immediately exits the function.",
      "That code always runs first, before the return statement is processed.",
      "That code causes the entire program to crash as soon as it is reached.",
      "That code is automatically converted into a comment by the browser.",
    ],
    correct: "That code is never executed because the return statement immediately exits the function.",
  },
  {
    id: 47,
    question: "What is the difference between a function declaration and a function expression in JavaScript?",
    options: [
      "A function declaration is hoisted and can be called before it appears, while a function expression usually cannot.",
      "A function expression is hoisted and can be called before it appears, while a function declaration cannot.",
      "There is no real difference at all between the two ways of writing a function.",
      "A function expression can never be assigned to a variable in JavaScript.",
    ],
    correct: "A function declaration is hoisted and can be called before it appears, while a function expression usually cannot.",
  },
  {
    id: 48,
    question: "What is an arrow function in modern JavaScript?",
    options: [
      "It is a shorter syntax for writing a function, commonly written using the => symbol.",
      "It is a special type of variable used only to store boolean values.",
      "It is a built-in method used only for displaying alert boxes.",
      "It is a keyword that permanently stops a loop from continuing.",
    ],
    correct: "It is a shorter syntax for writing a function, commonly written using the => symbol.",
  },
  {
    id: 49,
    question: "What is the output of the following code?\n\nfunction multiply(a, b = 2) { return a * b; }\nconsole.log(multiply(5));",
    options: [
      "The output is 10, because b uses its default value of 2 when no second argument is given.",
      "The output is 5, because the default parameter is ignored completely.",
      "The output is NaN, because multiply requires exactly two arguments to run.",
      "The output causes an error, because default parameters are not allowed in functions.",
    ],
    correct: "The output is 10, because b uses its default value of 2 when no second argument is given.",
  },
  {
    id: 50,
    question: "What best describes a callback function in JavaScript?",
    options: [
      "It is a function passed as an argument to another function, to be run at a later point.",
      "It is a function that can only be used one single time in an entire program.",
      "It is a function that automatically deletes itself after it finishes running.",
      "It is a special keyword that stops all other functions from being called.",
    ],
    correct: "It is a function passed as an argument to another function, to be run at a later point.",
  },
];
