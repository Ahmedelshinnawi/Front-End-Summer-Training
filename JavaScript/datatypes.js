
// Data types

// 1- Reverse string function
var reverseString = function(string){
    return string.split('').reverse().join('');
}



// 2- Find Factorial:
var factorializedNumber=1;

var factorial = function (number){
    for(var i = number; i >=1; i--){
          factorializedNumber = factorializedNumber*i;
    }
    return factorializedNumber
}


// 3- Merge Objects function
var merge = function (object1, object2){
    var newObject = {...object1, ...object2};
    return newObject;
}


// 4- Toggle Boolean function
var toggleBoolean = function(boolean){
    return !boolean;
}
