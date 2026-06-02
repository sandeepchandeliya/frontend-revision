/*-------CALLBACK FUNCTION------- */

function greet(name, callback){
  console.log(`Hello ${name}!`)
  callback();
}

function sayBye(){
  console.log("Have a great day ahead!");
}

greet('Sandeep', sayBye)

// Explanation:
// greet takes another function (callback) as a parameter
// Inside greet, we call callback()
// So sayBye runs after greeting