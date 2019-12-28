let rlSync= require('readline-sync');
const greet = (firstName, lastName) => {
  console.log(`Hello, ${firstName} ${lastName}`);
}

let firstName= rlSync.question("What is you first name? ");
let lastName = rlSync.question("What is your last name? ");
greet(firstName, lastName);