// Convert this into a shorter version

var promiseA = new Promise(function(resolve, reject) { 
      dataset = d3.csv("js/alphabet.csv");
      resolve(dataset);
})
var promiseA = new Promise(
    resolve => {
        var dataset = d3.csv("js/alphabet.csv");
        resolve(dataset)
    }
)

var showOff = function (message) {
  console.log('Hey friend, I have a new '+' phone');
  return Promise.resolve(message);
};

promiseB = promiseA
    .then(showOff) 
    .then(result => {
      console.log(result);
      return result;  
    })
    .then(successMessage =>{ 
      console.log(successMessage)
      return successMessage
    })
    .then(successMessage =>{ 
      console.log(successMessage)
      return successMessage
    })
    .then(successMessage =>{ 
      console.log(successMessage)
      return successMessage
    })
    .catch(errorMessage => console.log(errorMessage)); 
    
// new Promise(function (resolve, reject) );
      
var a = [
    "We're up all night 'til the sun",
    "We're up all night to get some",
    "We're up all night for good fun",
    "We're up all night to get lucky"
  ];
  
  // These two assignments are equivalent:
  
  // Old-school:
  var a2 = a.map(function(s){ return s.length });
//   console.log(a2)
  
  // ECMAscript 6 using arrow functions
  var a3 = a.map( s => s.length );
//   console.log(a3)
