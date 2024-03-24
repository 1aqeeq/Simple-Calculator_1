#! /usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "firstNumber" },
  { message: "Enter second number", type: "number", name: "secondNumber" },
  {
    message: "Select one of the operator to perform operation",
    type: "list",
    name: "operator",
    choices: ["Add", "Sub", "Multiply", "Div"],
  },
]);
// conditional statement
if (answer.operator === "Add") {
  console.log(+answer.firstNumber + answer.secondNumber);
} else if (answer.operator === "Sub") {
  console.log(answer.firstNumber - answer.secondNumber);
} else if (answer.operator === "Multiply") {
  console.log(answer.firstNumber * answer.secondNumber);
} else if (answer.operator === "Div") {
  console.log(answer.firstNumber / answer.secondNumber);
}
