#! /usr/bin/env node
import inquirer from "inquirer";
let mybalance = 10000;
let mypin = 4729;
const pin = await inquirer.prompt([
    {
        name: "pinnumber",
        type: "number",
        message: "Enter your pin number:",
    },
]);
if (pin.pinnumber === mypin) {
    console.log("You can proceed now");
    const operation = await inquirer.prompt([
        {
            name: "want",
            type: "list",
            message: "What you want to do:",
            choices: ["bank balance", "Withdraw"],
        }
    ]);
    if (operation.want === "bank balance") {
        console.log(mybalance);
    }
    else if (operation.want === "Withdraw") {
        const withdrawamount = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter your withdraw amount",
            }
        ]);
        if (withdrawamount.amount <= mybalance) {
            mybalance = mybalance - withdrawamount.amount;
            console.log("Your Remaining balance is:", mybalance);
        }
        else {
            console.log("You don't have sufficient balance");
        }
    }
    else {
        console.log("You choose wrong option");
    }
}
else {
    console.log("You Enter wrong pin");
}
