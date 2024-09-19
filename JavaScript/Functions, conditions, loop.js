
var arr = [9, 21, 3, 20, 15, 16];

var sum = 0;
var calcSum = function(array){
    for(var i = 0; i < array.length; i++){
        sum+= array[i];
    }
    return sum;
}
var max=0;
var findMaximum = function(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
var min;
var findMinimum = function(array){
    min = array[0];
    for(var i = 0; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}

var even = 0; var odd= 0;
var countEvenOdd = function(array){
    for(var i = 0; i < array.length; i++){
        if(array[i] % 2 ===0){
            even++;
        }
        else{
            odd++;
        }
    }
    return {even, odd};
}
var generateReport = function(arr){
    countEvenOdd(arr);
    return `Array: [${arr}]
Sum: ${calcSum(arr)}
Maximum: ${findMaximum(arr)}
Minimum: ${findMinimum(arr)}
Even Numbers: ${even}
Odd Numbers: ${odd}`;
}
var main = function(){
    let report =generateReport(arr);
    console.log(report);
}
main();