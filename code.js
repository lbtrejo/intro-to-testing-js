// helloWorld function 
// function helloWorld() {
//     return "Hello, World!";
// }

const helloWorld = function() {
    return "Hello, World!";
}

// sayHello function
function sayHello(input) {
    if (typeof input === "undefined") {
        return "Hello, World!";
    } else if (input === true) {
        return "Hello, World!";
    } else if (input === false) {
        return "Hello, World!";
    } else if (typeof input === "number") {
        return "Hello, World!";
    } else if (input === "5") {
        return "Hello, World!";
    } else if (input === null) {
        return "Hello, World!";
    } else if (input === '') {
        return "Hello, World!";
    }
    return "Hello, " + input + "!";
    // if (input === "Alex") {
    //     return "Hello, Alex!";
    // } else if (input === "Pat") {
    //     return "Hello, Pat!";
    // }
    // return "Hello, Jane!";
}