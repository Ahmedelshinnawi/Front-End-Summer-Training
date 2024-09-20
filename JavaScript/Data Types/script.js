
// Data types

// 1- Reverse string function
var reverseString = function(string){
    return string.split('').reverse().join('');
}

console.log(reverseString('JavaScript'));

// 2- Find Factorial:
var factorializedNumber=1;

var factorial = function (number){
    for(var i = number; i >=1; i--){
          factorializedNumber = factorializedNumber*i;
    }
    return factorializedNumber
}

console.log(factorial(5));

// 3- Merge Objects function
var merge = function (object1, object2){
    var newObject = {...object1, ...object2};
    return newObject;
}
const objec1 = {
    course:'Front-end',
    language:'JavaScript'
}
const objec2 = {
    language: 'JavaScript',
    past:'HTML, CSS'
}
console.log(merge(objec1,objec2));


// 4- Toggle Boolean function
var toggleBoolean = function(boolean){
    return !boolean;
}

console.log(toggleBoolean(true));
