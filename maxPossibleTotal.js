// Given an array of 10 numbers, return the maximum possible total 
// made by summing just 5 of the 10 numbers.

const maxTotal = function(arr) {

    let numHigher = arr.sort(function(a, b) {
        return (a < b ? 1 : -1);
    }) 


    let sum = 0
    for(let i = 0; i < 5; i++) {
      sum += numHigher[i];
    }

    return sum

}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])) 
//➞ 43

console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])) 
//➞ 100

console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) 
//➞ 40