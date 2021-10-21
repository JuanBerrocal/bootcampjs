//****************************************************************************/
/* Lemoncode Bootcamp JS. Ejercicio modulo 3. */
/*****************************************************************************/

/* ========================= Ejercicio productos =========================== */

const shirt = {name:"Shirt", count: 7, price: 12.5, type: "clothes"};
const magazine = {name:"Magazine", count: 5, price: 5.5, type: "book"};
const apple = {name:"Apple", count: 30, price: 2.5, type: "food"};
const cheese = {name:"Cheese", count: 0, price: 25.5, type: "food"};

function getTotal(productP) {
    return (productP.count > 0) ? (productP.price * productP.count) : 0;
}

function getVAT(productP) {
    let vat = 0;
    switch (productP.type) {
        case "food": {
            vat =  0.01;
            break;
        }
        case "book": {
            vat =  0.04;
            break;
        }
        default: {
            vat =  0.21;
        }
    }
    return productP.price * vat;
}

function getTotalVAT(productP) {
    return (productP.count > 0) ? (getTotal(productP) * getVAT(productP)) : 0;
}

function printProductPrice(productP) {
    const subtotal = getTotal(productP);
    const vat = getTotalVAT(productP);
    const total = subtotal + vat;

    console.log("----------- " + productP.name + " --------------");
    console.log("Subtotal: " + subtotal + "€");
    console.log("VAT: " + vat + "€");
    console.log("Total: " + total + "€");
    console.log("------------------------------------------------");
}

printProductPrice(shirt);
printProductPrice(magazine);
printProductPrice(apple);
printProductPrice(cheese);


/* ================= Ejercicio nominas ====================== */

const employee = {name: "Sergio Perez", gross: 14500, sons: 3, wages: 14};

function getIRPFPercentage(employeeP) {
    let irpf;
    
    if (employeeP.gross < 12000) {
        irpf = 0;
    }
    else if (employeeP.gross < 24000) {
        irpf = 0.08;
    }
    else if (employeeP.gross < 34000) {
        irpf = 0.16;
    }
    else {
        irpf = 0.3;
    }

    if (employeeP.sons > 0) {
        irpf += 0.02;
    }
    
    return irpf;
}

function getSSDeduction(employeeP) {
    return employeeP.gross * 0.047;
}

function getUnemploymentDeduction(employeeP) {
    return employeeP.gross * 0.015;
}

function getYearNetWage(employeeP) {
    return employeeP.gross - 
        (employeeP.gross * getIRPFPercentage(employeeP)) - 
        getSSDeduction(employeeP) - 
        getUnemploymentDeduction(employeeP);
}

function getMonthNetWage(employeeP) {
    return (getYearNetWage(employeeP) / employeeP.wages);
}

function printWage(employeeP) {
    let irpf = getIRPFPercentage(employeeP);

    console.log("=============== Nomina de " + employeeP.name + " ===============");
    console.log("Bruto Anual: " + employeeP.gross + "€");
    console.log("----------- Retenciones anuales ---------------------------");
    console.log("Retencion IRPF: " + "(" + (irpf * 100) + "%):" + (employeeP.gross * irpf) + "€");
    console.log("Contingencias comunes: " +  getSSDeduction(employeeP) + "€");
    console.log("Desempleo: " +  getUnemploymentDeduction(employeeP) + "€");
    console.log("Neto Anual: " +  getYearNetWage(employeeP) + "€");
    console.log("----------- Liquido a percibir -----------------------");
    console.log("Neto Mensual: " +  getMonthNetWage(employeeP) + "€");
    console.log("================================================================");
}

printWage(employee);