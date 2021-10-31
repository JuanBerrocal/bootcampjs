

let add = (op1, op2) => op1 + op2;
let subtract = (op1, op2) => op1 - op2;
let multiply = (op1, op2) => op1 * op2;
let divide = (op1, op2) => op1 / op2;

let update = (operation) => {
    let result = 0;
    let op1 = parseInt(document.getElementById("operand1").value);
    let op2 = parseInt(document.getElementById("operand2").value);
    
    console.log("operando 1: " + op1);
    console.log("operando 2: " + op2);

    switch (operation) {
        case '+': 
            result = add(op1, op2);
            break;
        case '-':
            result = subtract(op1,op2);
            break;
        case '*':
            result = multiply(op1,op2);
            break;
        case '/':
            result = divide(op1, op2);
            break;
        default: 
            result = "error";
    }

    document.getElementById("result-spam").innerText = Number.isNaN(result) ? "error" : result;
}

document.getElementById("plus-button").addEventListener("keyup", update('+'));
document.getElementById("minus-button").addEventListener("keyup", update('-'));
document.getElementById("mul-button").addEventListener("keyup", update('*'));
document.getElementById("div-button").addEventListener("keyup", update('/'));

document.getElementById("result-spam").innerText = "0";
