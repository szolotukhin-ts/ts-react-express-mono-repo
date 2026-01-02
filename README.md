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

Scopes can also be nested within each other. This is called Scope Chaining

## Questions
* Closure
* Scope
* Lexical Environment
* Call Stack
* Protoype Chain

## Advanced JavaScript Concepts 
https://www.capicua.com/blog/12-advanced-javascript-concepts
https://dev.to/noorulhassan/advanced-javascript-concepts-every-developer-should-know-jee
