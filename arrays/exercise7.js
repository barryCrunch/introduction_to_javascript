// exercise7.js

let checkThree = (array) => {
  return (array.filter(num => num === 3)).length > 0 ? true : false;
}

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];


console.log(checkThree(numbers1));
console.log(checkThree(numbers2));
console.log(checkThree(numbers3));

