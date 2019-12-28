let solicitName = (prompt) => {
  let rlSync = require("readline-sync");
  return rlSync.question(prompt);
}
let firstName= solicitName("What is you first name? ");
let lastName = solicitName("What is your last name? ");

console.log(`Hello ${firstName} ${lastName}`);