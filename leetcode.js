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


// 2620. Counter
// Given an integer n, return a counter function.
// This counter function initially returns n and then returns
// 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
let createCounter = function (n) {
    let count = n;
    return function () {
        return count++;
    }
};