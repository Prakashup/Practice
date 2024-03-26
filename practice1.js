function calculateMaxProfit(stockPrice){

    if (stockPrice.length < 2){
        return 0;
    }

    let minPrice = stockPrice[0];
    let maxProfit = 0;

    for (let i = 1; i < stockPrice.length; i++){
        let currentPrice = stockPrice[i];
        let potentialProfit = currentPrice - minPrice;

        minPrice = Math.min(minPrice, currentPrice);
        maxProfit = Math.max(potentialProfit, maxProfit);
        
    }
}