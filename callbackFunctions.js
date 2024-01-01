// What is a callback function?
// Passing of a function to another function is called a callback function.
// best example setTimeout

setTimeout(function c(){
    console.log("In set timeout");
}, 5000);

function a(b){
    console.log("First");
    b();
}

a(function b(){
    console.log("Second");
});

// callbacks are used with event listeners to execute the block of code whenever the function is called usually when a button is pressed or other events