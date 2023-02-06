// Constantes.
const REGULAR_TYPE = 21;
const LOWER_TYPE = 4;
const EXEMPT_TYPE = 0;

// Entrada.
const products = [
    {
        description: "Goma de borrar",
        price: 0.25,
        tax: LOWER_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Lápiz H2",
        price: 0.4,
        tax: LOWER_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Cinta rotular",
        price: 9.3,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Papelera plástico",
        price: 2.75,tax: REGULAR_TYPE,
        stock: 5,
        units: 0,
    },
    {
        description: "Escuadra",
        price: 8.4,
        tax: REGULAR_TYPE,
        stock: 3,
        units: 0,
    },
    {
        description: "Pizarra blanca",
        price: 5.95,
        tax: REGULAR_TYPE,
        stock: 2,
        units: 0,
    },
    {
        description: "Afilador",
        price: 1.2,
        tax: LOWER_TYPE,
        stock: 10,
        units: 0,
    },
    {
        description: "Libro ABC",
        price: 19,
        tax: EXEMPT_TYPE,
        stock: 2,
        units: 0,
    },
];

var roundNumber = number => Math.round((number + Number.EPSILON) + 100) / 100;
    
function printList() {
    var cartList = document.getElementById("list");
    var index = 0;

    for (item of products) {
        cartList.appendChild(createLine(item, index++));
    }
}

function createLine(item, index) {
    var line = document.createElement("div");
    line.setAttribute("id", "line" + index);
    line.setAttribute("class", "productLine");

    line.appendChild(createIndex(index));
    line.appendChild(createConceptPrice(item));
    line.appendChild(createAmount(item, index));
    return line;
}

function createIndex(item) {
    var index = document.createElement("div");
    index.setAttribute("class", "productIndex");
    index.textContent = item + ".";
    return index;
}

function createConceptPrice(item) {
    var concept = document.createElement("div");
    concept.setAttribute("class", "productConcept")
    concept.textContent = item.description + " - " + item.price + "€/ud. ";
    return concept;
}

function createAmount(item, index) {
    var amount = document.createElement("input");

    amount.setAttribute("value", item.units);
    amount.setAttribute("type", "number");
    amount.setAttribute("class", "productAmount");
    amount.setAttribute("id", "amount" + index);
    amount.addEventListener("change", 
        event => {
            var index = (event.target.id).slice(6);
            products[index].units = Number(event.target.value);
            updateButton();
        });
    return amount;
}

// EXTRA: Button disables when every fields are 0. Also when some field is negative or NaN.
function updateButton() {
    var button = document.getElementById("button");
    var disabled = true;

    for (product of products) {
        disabled =  disabled && (product.units === 0);
                
        // If some field is negative or not a number, then disable button.
        if (Number.isNaN(product.units) || product.units < 0) {
            disabled = true;
            break;
        }
   }
   button.disabled = disabled;
    if (disabled) {
        button.classList.add("disabled");
    }
    else {
        button.classList.remove("disabled");
    }
}

function computeInvoice() {
    var subtotal = 0, totalTax = 0, total = 0;
    var lineSubtotal = 0, lineTax = 0, lineTotal = 0;


    for (product of products) {
        lineSubtotal = product.price * product.units;
        lineTax = lineSubtotal * (product.tax / 100);
        lineTotal = lineSubtotal + lineTax;

        subtotal += lineSubtotal;
        totalTax += lineTax;
        total += lineTotal;
    }
    document.getElementById("subtotal").innerText = "Subtotal: " + roundNumber(subtotal) + " €";
    document.getElementById("tax").innerText = "IVA: " + roundNumber(totalTax) + " €";
    document.getElementById("total").innerText = "TOTAL: " + roundNumber(total) + " €";
}

printList();