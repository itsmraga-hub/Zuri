console.log("CALCULATOR APP");
console.log("1 - Addition\n2 - Subtraction\n3 - Multiplication\n4 - Division\n\n");

// const number1 = prompt("Number 1: ");
const number1 = 34;
// const number2 = prompt("Number 2: ");
const number2 = 7;

// let operand = prompt("Choose operation: ");
let operand = 1;


// Used node to run my calculator on vscode
function calculator(number1, number2, operand)
{
    switch (Number(operand))
    {
        case 1: return number1 + number2;
        case 2: return number1 - number2;
        case 3: return number1 * number2;
        case 4: return number1 / number2;
        default: return 'Not Valid operation';
    }
}

console.log("Answer: ", calculator(number1, number2, operand));