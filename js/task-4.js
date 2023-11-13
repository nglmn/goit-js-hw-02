function getShippingCost(country) {

    let cost = 0;
    let resultPositiveMessage = "";
    const resultNegativeMessage = "Sorry, there is no delivery to your country";

    switch (country) {
        case "China":
            cost = 100;
            resultPositiveMessage;
            break;
        case "Chile":
            cost = 250;
            resultPositiveMessage;
            break;
        case "Australia":
            cost = 170;
            resultPositiveMessage;
            break;
        case "Jamaica":
            cost = 120;
            resultPositiveMessage;
            break;
        default:
            return resultNegativeMessage;
    }

    resultPositiveMessage = `Shipping to ${country} will cost ${cost} credits`;
    return resultPositiveMessage;
}
console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
