
let accumulativeG;
let lastOperationG;

let add = (op1, op2) => op1 + op2;
let subtract = (op1, op2) => op1 - op2;
let multiply = (op1, op2) => op1 * op2;
let divide = (op1, op2) => op1 / op2;
let reset = () => {
    accumulativeG = 0;
    lastOperationG = "";
    document.getElementById("operand").value = 0;
}

let show = () => {document.getElementById("result-spam").innerText = Number.isNaN(accumulativeG) ? "error" : accumulativeG;}

document.getElementById("result-spam").innerText = "0";
document.getElementById("operand").value = 0;

let accumulate = (operationP) => {
    let operand = parseInt(document.getElementById("operand").value);
        
    console.log("operando: " + operand);
    console.log("Cuando entro en la funcion la ultima operacion es: " + lastOperationG);

    switch (lastOperationG) {
        case '+': 
            accumulativeG = add(accumulativeG, operand);
            break;
        case '-':
            accumulativeG = subtract(accumulativeG, operand);
            break;
        case '*':
            accumulativeG = multiply(accumulativeG, operand);
            break;
        case '/':
            accumulativeG = divide(accumulativeG, operand);
            break;
        default: 
            accumulativeG = operand;
    }

    lastOperationG = operationP;
    show();

    if (operationP === '=') {
        reset();
    }
    
    console.log("acumulado: " + accumulativeG);
}

document.getElementById("plus-button").addEventListener("keyup", accumulate('+'));
document.getElementById("minus-button").addEventListener("keyup", accumulate('-'));
document.getElementById("mul-button").addEventListener("keyup", accumulate('*'));
document.getElementById("div-button").addEventListener("keyup", accumulate('/'));

reset();
