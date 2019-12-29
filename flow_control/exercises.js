let evenOrOdd = (number) =>{
  if (!(Number.isInteger(number))) {
    return "ERROR";
  } else if (number % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
};

let capsLong = (word) => {
  return word.length > 10 ? word.toUpperCase() : word;
};

function numberRange(number) {
  if (number < 0) {
    console.log(`${number} is less than 0`);
  } else if (number <= 50) {
    console.log(`${number} is between 0 and 50`);
  } else if (number <= 100) {
    console.log(`${number} is between 50 and 100`);
  } else {
    console.log(`${number} is greater than 100`);
  }
}

console.log(capsLong("Sue Smith"));     // 'Sue Smith'
console.log(capsLong("Sue Robertson")); // 'SUE ROBERTSON'
console.log(capsLong("Joe Thomas"));    // 'Joe Thomas'
console.log(capsLong("Joe Stevens"));   // 'JOE STEVENS'


numberRange(25);   // '25 is between 0 and 50'
numberRange(75);   // '75 is between 51 and 100'
numberRange(125);  // '125 is greater than 100'
numberRange(-25);  // '-25 is less than 0'