const cartG = [
    {
        id: 198752,
        name: "Tinta DJ27 Color",
        price: 52.95,
        count: 3,
        premium: true
    },
    {
        id: 75621,
        name: "Impresora ticketera PRO-201",
        price: 32.75,
        count: 2,
        premium: true
    },
    {
        id: 54657,
        name: "Caja de rollos de papel para ticketera",
        price: 5.95,
        count: 3,
        premium: false
    },
    {
        id: 3143,
        name: "Caja de folios DIN-A4 80gr",
        price: 9.95,
        count: 2,
        premium: false
    }
    ];

    const list = (cart) => {
        let list = "";
        let freePostage = true;

        for (var item in cart) {
            list = list + cart[item].name + 
            ", PVP: " + cart[item].price + " € " 
            + ", cantidad: " + cart[item].count + " un " + 
            ", " + ((cart[item].premium) ? ('PREMIUM') : ('STANDARD')) +
            "\n";
            freePostage = freePostage && cart[item].premium;
        }
        
        list = (freePostage) ? (list + "Pedido sin gastos de envío.") : (list + "Este pedido tiene gastos de envío.");
        list = list + "\n";

        document.getElementById("cart-body").innerText = list;
    }

    const filterPremium = (cart) => {
        let premiumItems = [];
        for (var item in cart) {
            if (cart[item].premium) {
                premiumItems.push(cart[item]);
            }
        }
        return premiumItems;
    }

    const showTotal = (cart) => {
        let total = 0, subtotal = 0;
        for(var item in cart) {
            subtotal += cart[item].price * cart[item].count;
        }

        discount = (subtotal > 50) ? (subtotal * 0.05) : 0;

        subtotal = Math.round(subtotal * 100) / 100;
        discount = Math.round(discount * 100) / 100;

        total = subtotal - discount;
        total = Math.round(total * 100) / 100;
        
        document.getElementById("cart-footer").innerText = 
            "Subtotal: " + subtotal + " € \n" + 
            "Descuento: " + discount + " € \n" + 
            "Total: " + total +  " €";
    }

    const deleteItem = (cart, itemID) => {
        for( var i in cart) {
            if (cart[i].id === itemID) {
                cart.splice(i, 1);
            }
        }
    }

    /*list(cartG);
    showTotal(cartG);
    
    /*deleteItem(cartG, 75621);
    list(cartG);
    showTotal(cartG);*/

    let premiumItems = filterPremium(cartG);
    deleteItem(premiumItems, 198752);
    list(premiumItems);
    showTotal(premiumItems);