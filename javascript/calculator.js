console.log("CALCULATOR APP");
console.log("1 - Addition\n2 - Subtraction\n3 - Multiplication\n4 - Division\n\n");

const number1 = prompt("Number 1: ");
const number2 = prompt("Number 2: ");

let operand = prompt("Choose operation: ");

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