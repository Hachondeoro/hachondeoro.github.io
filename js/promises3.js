// ES5: Part 1
// https://scotch.io/tutorials/javascript-promises-for-dummies#toc-promises-in-es5-es6-2015-es7-next

const isMomHappy = true;

// Promise

const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);
// ES5: Part 2


// 2nd promise
const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};
/*
* OK. so promise is an object.
*/
// 1. resolve(x) throw x is equivalent to return Promise.
// 2. you need to execute the promise and then the return
/*
3. LET A block is chunk of code bounded by {}.let variables are block scoped
3.1 CONST const declarations can only be accessed within the block it was declared. cannot be updated or re-declared
4. after executing a then, the chain gets emptied unless declared again with a return
*/
// call our promise
var askMom = function () {
    willIGetNewPhone
    .then(showOff) // chain it here
    .then(function (fulfilled) {
            console.log(fulfilled.repeat(1));
         // output: 'Hey friend, I have a new black Samsung phone.'
        })
        .catch(function (error) {
            // oops, mom don't buy it
            console.log(error.message);
         // output: 'mom is not happy'
        });
};

askMom();



remotedb.allDocs().then(function (resultOfAllDocs) {
    return localdb.put();
  }).then(function (resultOfPut) {
    return localdb.get();
  }).then(function (resultOfGet) {
    return localdb.put();
  }).catch(function (err) {
    console.log(err);
  }); 
//   .catch(console.log.bind(console)); // <-- this is badass
  