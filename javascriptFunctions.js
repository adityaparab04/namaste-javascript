//Function Statement or Function Declaration
function a() {
    console.log("a called");
}

//Function Expression or Anonymous Function (assigned to a const b)
const b = function () {
    console.log("b called");
}

//Anonymous Functions
//a function which is passed as a value to the variable/constant as done above in const b. Cannot be used alone like a function statement as it will give a SyntaxError.
// function (param1, param2, ...) {
//     
// }

//Arrow Functions
const c = () => {
    console.log("c called");
}

//Named Function Expression
//same like function expression but with a name but cannot be called by that name here by x.
const d = function x() {
    console.log("d called");
}

//First Class Functions aka. First Class Citizens
//ability of functions to be used as parameters or to be passed as arguments or returned as well.

function e(param1) {
    console.log(param1);
}
function e2(param1) {
    console.log(param1);
}
function e3(param1) {
    return(param1);
}

a();
b();
c();
d();
e(function abc () {
});
e2(function () {
});
const E3 = e3(function xyz() {
});
console.log(E3);