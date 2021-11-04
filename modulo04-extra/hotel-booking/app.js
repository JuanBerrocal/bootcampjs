


let getRoomTypePrice = () => {
    let selection = document.getElementById("room-type-select").selectedIndex;
    
    switch (selection) {
        case 0: 
            return 100;
            break;
        case 1:
            return 120;
            break;
        case 2:
            return 150;
            break;
        default: 
            return 0;
    }
}

let getSpaPrice = () => {
    let checked = document.getElementById("spa-checkbox").checked;

    return (checked) ? (20) : (0);
}

let getRoomOccupationRating = () => {
    let selection = document.getElementById("room-occupation-select").selectedIndex;
    
    switch (selection) {
        case 0: 
            return -0.25;
            break;
        case 1:
            return 0;
            break;
        case 2:
            return 0.25;
            break;
        default: 
            return 0;
    }
}

let getNights = () => parseInt(document.getElementById("total-nights").value);

let getParkingNights = () => parseInt(document.getElementById("parking-nights").value);
    

let updateAmount = () => {
    let price = getRoomTypePrice();
    console.log("Importe habitacion: " + price + " €");    
    let spa = getSpaPrice();
    console.log("Importe spa: " + spa + " €");    
    let subtotal = price + spa;
    let rating = getRoomOccupationRating();
    let roomDailyPrice = subtotal + (subtotal * rating);
    console.log("Importe ocupacion por noche: " + roomDailyPrice + " €");

    let subtotalParking = 10 * getParkingNights();
    console.log("Importe ocupacion del parking: " + subtotalParking + " €");    
    
    let nights = getNights();
    let total = (roomDailyPrice * nights) + subtotalParking;

    console.log("Importe ocupacion para la estancia total: " + 
        ((Number.isNaN(total)) ? (0) : (total)) + 
        " €");    
    
    document.getElementById("amount-spam").innerText = (((Number.isNaN(total)) ? (0) : (total))) + " €";
}

document.getElementById("room-type-select").addEventListener("input", updateAmount);
document.getElementById("spa-checkbox").addEventListener("input", updateAmount);
document.getElementById("room-occupation-select").addEventListener("input", updateAmount);
document.getElementById("total-nights").addEventListener("input", updateAmount);
document.getElementById("parking-nights").addEventListener("input", updateAmount);


