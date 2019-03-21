// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if(currency > 10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    
    let cost = {
        H : 50,
        Q : 25,
        D : 10,
        N : 5,
        P : 1
    };

    let result = {};

    if(currency <= 0){
        return {};
    }else {
        for(let key in cost){
            if(cost.hasOwnProperty(key)){
                while(cost[key] <= currency) {
                    result[key] = Math.floor(currency/cost[key]);
                    currency -= (cost[key] * result[key]);
                }
            }
        }   
    }
    return result;
}
