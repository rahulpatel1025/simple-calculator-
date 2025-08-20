//making caculator 
const prompt = require('prompt-sync')();
function getNumber(numberString){
    while(true){
        const number = parseFloat(prompt("enter number" + numberString + ": "))
        if(isNaN(number)) {
            console.log("invalid input, try again")
        } else{
            return number;
        }
        }    
    }
function getOperator(){
    const allowedOperators = ["+", "-", "*", "/"];
    while(true){
        const operator = prompt("enter operator (+, -, *, /): ");
         if(!operator || operator.trim() === ""){
        console.log("operator cannot be empty, try again");
        return;
    } else if (!allowedOperators.includes(operator)) {
        console.log("invalid operator, try again");
    }else {
        return operator.trim();
    }
    }
}
    
    const number1 = getNumber("1");
    const number2 = getNumber("2");
    const operator = getOperator();

    let result; 
    let valid = true;
    switch(operator) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            if (number2 === 0) {
                console.log("division by zero is not allowed");
                valid = false;
                console.log("zero division error");
            }   
            result = number1 / number2;
            break;
            default:
                console.log("invalid operator, try again");
                valid = false;
            return operator;
    }
    if (valid) {
        console.log("Result: " + number1 + " " + operator + " " + number2 + " = " + result);
    }
