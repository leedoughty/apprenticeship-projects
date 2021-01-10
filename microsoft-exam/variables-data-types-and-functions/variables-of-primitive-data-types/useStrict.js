// use strict

// with strict mode, you can not, for example, use undeclared variables.

// declared at the beginning of a script, it has global scope

"use strict";
x = 42;

// declared inside a function, it has local scope

function aStrictFunction() {
  "use strict";
  y = 3.14; // will cause an error
}
