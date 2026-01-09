# React and Express Monorepo

http://localhost:3000/api/tasks

## How npm handles the "scripts" field
https://docs.npmjs.com/cli/v9/using-npm/scripts

##
NPM scoped packages - @scope/package

## ECMAScript - A collection of the main new features of each version
https://dev.to/techelopment/ecmascript-a-collection-of-the-main-new-features-of-each-version-8n5

- destructuring
const { name, age } = user;

- spread operator
const newUser[] = { ...user }

- rest operator

## JavaScript Under The Hood [2] - Execution Context

An Execution Context in JavaScript is the environment in which code is evaluated and executed.
- Global Execution Context (GEC): The default environment created when the JavaScript engine first loads a script file
- Function Execution Context (FEC): A new execution context is created every time a function is invoked (called)
- Eval Execution Context, is created when code is executed inside the eval() function

??? 
- Web Worker Execution Context (WEC): A new execution context is created for every Web Worker (worker thread)
- Script Execution Context (SEC): A new execution context is created for every script (script tag)
- Block Execution Context (BEC): A new execution context is created for every code block (curly braces)
- Module Execution Context (MEC): A new execution context is created for every module (import/export)

Phases of an Execution Context
- Creation Phase (Memory Allocation Phase): The JavaScript engine scans the code and allocates memory for variables and functions.
- Execution Phase (Code Execution Phase): The engine executes the code line by line

JavaScript Hoisting - Hoisting refers to the behavior 
where JavaScript moves the declarations of variables, functions, and classes to the top of their scope 
during the compilation phase.
https://www.geeksforgeeks.org/javascript/javascript-hoisting/

The lexical environment is a specific data structure within an execution context 
that handles variable and function storage and scope.

Scope is where a variable is available in your code 
and whether it’s the same as another variable or a copy of one

Scope:
- Global Scope
- Function Scope
- Block Scope

Scopes can also be nested within each other. This is called [Scope Chaining]
Variables and functions have different levels of scope:

- Global Scope: Variables defined outside any function or block, accessible anywhere in the program.
- Local Scope: Variables defined inside a function or block, accessible only within that specific function or block.
- Nested Scope: Inner functions have access to variables in their parent functions.
- Block Scope: Variables defined with let and const are limited to the block they are declared in, like loops or conditionals.

[Lexical scope] defines the accessibility of variables and functions depending on their location in the source code.
https://www.geeksforgeeks.org/javascript/lexical-scope-in-javascript/

Lexical Scope is the rule defining where variables are accessible (based on physical code location), 
while the Lexical Environment is the data structure that implements it, 
holding variable -> value mappings and a reference to its parent environment, 
forming the scope chain for variable lookups.

A [closure] is a feature in JavaScript where an inner function has access to the scope (variables and parameters) 
of its outer functions, even after the outer function has returned.


## Questions
* Call Stack
* Protoype Chain

## Advanced JavaScript Concepts 
https://www.capicua.com/blog/12-advanced-javascript-concepts
https://dev.to/noorulhassan/advanced-javascript-concepts-every-developer-should-know-jee

## Express Routes, Controllers, and Services
https://dev.to/hakimmohamed/understanding-express-routes-controllers-and-services-a-beginners-guide-nodejs-tutorial-part-12-2cd4
https://medium.com/@gabrielairiart.gi/express-essentials-service-classes-in-express-for-robust-applications-bad4becef945

## Modern JavaScript Features: ES6 and Beyond
https://www.suntecindia.com/blog/exciting-new-javascript-concepts-you-need-to-know/

???
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881/
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-iii-arrow-functions-and-the-this-keyword-381ac7a32881/
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-iv-arrow-functions-and-the-this-keyword-381ac7a32881/
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-v-arrow-functions-and-the-this-keyword-381ac7a32881/
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-vi-arrow-functions-and-the-this-keyword-381ac7a32881/
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-vii-arrow-functions-and-the-this-keyword-381ac7a32881/
https://www.freecodecamp.org/news/learn-es6-the-dope-way-part-v

## Patching Node Modules
https://medium.com/@rajrishij/how-to-patch-node-modules-2ba66c9a2e85
