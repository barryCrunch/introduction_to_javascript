// factorial.js

let factorial = (number) => {
  factor = 1;
  for(i=1; i <= number; i++) {
    factor *= i;
  }
  return factor;
};

let recursiveFactorial = (number) => {
  if(number < 1 ) return 1;
  return recursiveFactorial(number-1) * number
}

//console.log(factorial(0));     // => 1
//console.log(factorial(1));     // => 1
//console.log(factorial(2));     // => 2
//console.log(factorial(3));     // => 6
//console.log(factorial(4));     // => 24
//console.log(factorial(5));     // => 120
//console.log(factorial(6));     // => 720
//console.log(factorial(7));     // => 5040
//console.log(factorial(8));     // => 40320

console.log(recursiveFactorial(0));     // => 1
console.log(recursiveFactorial(1));     // => 1
console.log(recursiveFactorial(2));     // => 2
console.log(recursiveFactorial(3));     // => 6
console.log(recursiveFactorial(4));     // => 24
console.log(recursiveFactorial(5));     // => 120
console.log(recursiveFactorial(6));     // => 720
console.log(recursiveFactorial(7));     // => 5040
console.log(recursiveFactorial(8));     // => 40320