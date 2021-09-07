// totalprciecalculation  function decluration

function totalPriceCalculation() {
    const basePrice = parseInt(document.getElementById('basePrice').innerText);
    const memoryCost = parseInt(document.getElementById('extraMemoryCost').innerText);
    const storageCost = parseInt(document.getElementById('extraStorageCost').innerText);
    const deliveryCost = parseInt(document.getElementById('deliveryChargeCost').innerText);

    const totalPrice = basePrice + memoryCost + storageCost + deliveryCost;
    document.getElementById('totalPrice').innerText = totalPrice;
    document.getElementById('finalPrice').innerText = totalPrice;
}
// ...promoCode function decluration ......

function promoCodeApply() {
    const promoCode = document.getElementById('promoCodeInput').value;
    if (promoCode.toLowerCase() == 'stevekaku') {
        let totalPrice = parseFloat(document.getElementById('totalPrice').innerText);
        totalPrice = totalPrice - (totalPrice * 0.20);
        document.getElementById('finalPrice').innerText = totalPrice;
        document.getElementById('promo-btn').setAttribute("disabled", true);
    }
    document.getElementById('promoCodeInput').value = '';
}

// extracost function decluration

function extraCost(product, price) {
    document.getElementById(product + 'Cost').innerText = price;
    totalPriceCalculation();
}
// Memory Selection & its functionality

document.getElementById('eightGbMemory').addEventListener('click', function() {

    extraCost('extraMemory', 0);

});

document.getElementById('sixteenGbMemory').addEventListener('click', function() {

    extraCost('extraMemory', 180);

});


//Storage selection & its functionality

document.getElementById('twoFiftySix-SSD').addEventListener('click', function() {

    extraCost('extraStorage', 0);
});

document.getElementById('fiveTweleve-SSD').addEventListener('click', function() {

    extraCost('extraStorage', 100);
});

document.getElementById('oneTB-SSD').addEventListener('click', function() {

    extraCost('extraStorage', 180);

});

//Delivery Charge & it's functionality

document.getElementById('free-delivery').addEventListener('click', function() {

    extraCost('deliveryCharge', 0);

});

document.getElementById('emergency-delivery').addEventListener('click', function() {

    extraCost('deliveryCharge', 20);

});