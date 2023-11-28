
// /**
//  * @return {Function}
//  */
let createHelloWorld = function() {

    return function(...args) {
        return "Hello World";
    }
};
const a = createHelloWorld();

// /**
//  * const f = createHelloWorld();
//  * f(); // "Hello World"
//  */
