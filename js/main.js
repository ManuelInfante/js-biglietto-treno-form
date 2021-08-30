
// variabili dati passeggero 
var nameElement = document.getElementById("name");
var kmsElement = document.getElementById("kms");
var ageGroupElement = document.getElementById("age-group");
var buttonGenerateTicketElement = document.getElementById("button-generate-ticket");
var buttonResetElement = document.getElementById("button-reset");
var ticketInfoElement = document.getElementById("ticket-info");


// variabili tiket
var passengetNameElement = document.getElementById("passenger-name");
var discountAppliedElement = document.getElementById("discount-applied");
var trainCarElement = document.getElementById("train-car");
var trainCodeElement = document.getElementById("train-code");
var priceTicketElement = document.getElementById("price-ticket");

// funzione per la creazione del biglietto
buttonGenerateTicketElement.addEventListener("click", function () {
    
    //* acquisizione valori
    nameValue = nameElement.value;
    console.log("Nome passeggero: ", nameValue);
    kmsValue = kmsElement.value;
    console.log("Kms: ", kmsValue);
    ageGroupValue = ageGroupElement.value;
    console.log("Fascia d'età: ", ageGroupValue);

    //* calcolo prezzo 
    var priceKm = 0.21 * kmsValue;
    console.log("Prezzo/km: ", priceKm);
    var messageDiscountApplied = "Tariffa ordinaria";
    console.log("Tipo di tariffa: ", messageDiscountApplied);

    //* sconti
    if (ageGroupValue === "min-18") {
        priceKm *= 0.8;
        console.log("Prezzo scontato del 20%: ", priceKm);
        messageDiscountApplied = "Tariffa scontata (- 20%)";
        console.log("Tipo di tariffa: ", messageDiscountApplied);
    }

    if (ageGroupValue === "over-65") {
        priceKm *= 0.6;
        console.log("Prezzo scontato del 40%: ", priceKm);
        messageDiscountApplied = "Tariffa scontata (- 40%)";
        console.log("Tipo di tariffa: ", messageDiscountApplied);
    }

    // prezzo con 2 decimali
    priceKm = "€ " + priceKm.toFixed(2);
    console.log("Prezzo con due decimali: ", priceKm);

    // numero carrozza
    var trainCarNumber = Math.floor(Math.random() * 20) + 1;
    console.log("Numero cabina ", trainCarNumber);

    // numero treno
    var trainCodeNumber = Math.floor(Math.random() * (4999 - 4001)) + 4001;
    console.log("Numero treno: ", trainCodeNumber);

    // stampa video tiket
    passengetNameElement.innerHTML = nameValue;
    discountAppliedElement.innerHTML = " " + messageDiscountApplied;
    trainCarElement.innerHTML = " " + trainCarNumber;
    trainCodeElement.innerHTML = " " + trainCodeNumber;
    priceTicketElement.innerHTML = " " + priceKm;

    ticketInfoElement.classList.remove("hidden");
});

// funzione reset
buttonResetElement.addEventListener("click", function () {
    
    console.log("reset premuto")
    nameElement.value = "";
    kmsElement.value = "15";
    ageGroupElement.value = "maj-18";

    ticketInfoElement.classList.add("hidden");

});