
var myHotels = {
    donpepe: 
        {
            name: "Don Pepe",
            location: "Marbella centro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ek5YaAodpOtaq2g2DfXVTyVXpnT9dDwX3Q&usqp=CAU",
            phone: "+34 952 77 02 00",
        },
    doncarlos:
        {
            name: "Don Carlos",
            location: "Las Chapas",
            image: "https://static2.diariosur.es/www/multimedia/202107/30/media/cortadas/Don%20Carlos%20Resort%20%26%20Spa_Marbella-kQAE-RfoBCrHzztddvBupV4P2SbJ-1248x770@Diario%20Sur.jpg",
            phone: "+34 951 56 98 91",
        },
    marbellaclub:
        {
            name: "Marbella Club",
            location: "Marbella milla de oro",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI8kA6LvjFFUWTzwSwaWv2vO9JZsfu5mkv_Q&usqp=CAU",
            phone: "+34 952 82 22 11",
        },
}

var stars = {
    uno: "&#9733" + "&#9734" + "&#9734" + "&#9734" + "&#9734",
    dos: "&#9733" + "&#9733" + "&#9734" + "&#9734" + "&#9734",
    tres: "&#9733" + "&#9733" + "&#9733" + "&#9734" + "&#9734",
    cuatro: "&#9733" + "&#9733" + "&#9733" + "&#9733" + "&#9734",
    cinco: "&#9733" + "&#9733" + "&#9733" + "&#9733" + "&#9733",
    "1": "&#9733" + "&#9734" + "&#9734" + "&#9734" + "&#9734",
    "2": "&#9733" + "&#9733" + "&#9734" + "&#9734" + "&#9734",
    "3": "&#9733" + "&#9733" + "&#9733" + "&#9734" + "&#9734",
    "4": "&#9733" + "&#9733" + "&#9733" + "&#9733" + "&#9734",
    "5": "&#9733" + "&#9733" + "&#9733" + "&#9733" + "&#9733",
}

var hotelID = prompt("Introduce el nombre del hotel (donpepe, doncarlos o marbellaclub)");
document.getElementById("hotel-name").innerHTML = "Hotel " + myHotels[hotelID]["name"];
document.getElementById("hotel-location").innerHTML = "Ubicado en " + myHotels[hotelID]["location"];
document.getElementById("hotel-phone").innerHTML = myHotels[hotelID]["phone"];
document.getElementById("hotel-image").src = myHotels[hotelID]["image"];

var review = prompt("Introduce una puntuacion para este hotel (1 a 5)");
document.getElementById("stars").innerHTML = stars[review];

var isAnonymous = confirm("La reseña es anónima?");
document.getElementById("anonymous").checked = isAnonymous;