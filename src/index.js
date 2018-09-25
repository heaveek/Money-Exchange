// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	if(currency > 10000)
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    // create an object with a list of changeable coins
    const coinObj = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1
    }
    const result = {};
    for(let key in coinObj){       
        let amount = Math.trunc(currency / coinObj[key]); // .trunc found on the habr :)
        if(amount > 0) {
            result[key] = amount;
            currency = currency % coinObj[key]; // change the argument to remainder
        }
    }    
    return result;
}
