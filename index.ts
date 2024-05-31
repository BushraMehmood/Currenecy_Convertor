#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


console.log(chalk.green.bold.underline("\n****** WELCOME TO CODE WITH BUSHRA - CURRENCY CONVERTOR ******\n"));

//Define the list of currency and their exchange rates
let exchange_rate: any = {
    "USD":1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 280,
    //you can add more currencies and their exchange rates from here
}
//ab hum user se input lengy ingquirer k through
//prompt the user to select currencies to cpnvert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Selcet the currency to convert into",
        choices: ["USD","EUR","JYP","CAD","AUD","PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:",
    }
]);
//from currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount
//formula of conversion
let base_amount = amount / from_amount;
let coverted_amount = base_amount * to_amount;

//Display the Converted amount
console.log(`Converted Amount = ${chalk.yellowBright(coverted_amount.toFixed(2))}`);
