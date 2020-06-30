// const messageee = function() {  
//     console.log("This message is shown after 3 seconds");
// }
 
// setTimeout(messageee, 3000);
/*
>>>>>>>>>>>>>>>>>>>Callbacks:
1. In JavaScript, functions are objects
More complexly put: In JavaScript, functions are objects. 
Because of this, functions can take functions as arguments, 
and can be returned by other functions. Functions that do this are 
called higher-order functions. Any function that is passed as an argument 
is called a callback function.
2. You can call functions inside a function
2.1 You can define functions on the fly
*/
// This is a callback function. settimeout is calling the other function inside it

// First example
function first(){
    // Simulate a code delay
    setTimeout( function(){
      console.log(1);
    }, 500 );
  }
function second(){
    console.log(2);
  }
// first();
// second();
// Second example
function doHomework(subject, callback) {
    alert(`Starting my ${subject} homework.`);
    callback();
};

function alertFinished() {
    alert('Finished my homework');
}


// doHomework('math', alertFinished) 
// As you can see, we’ve passed the alertFinished function definition as an argument during our doHomework() function call!

