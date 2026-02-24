//https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function stockBuySell(prices){

    let maxProfit = 0;
    let minBuy = prices[0];

    for(let i=1;i<prices.length;i++){
        if(prices[i] > minBuy){
            maxProfit = Math.max(maxProfit, prices[i] - minBuy);
        }

        minBuy = Math.min(minBuy, prices[i]);
    }

    return maxProfit;
}




let prices = [7,1,5,3,6,4];
let prices2 = [7,6,4,3,1];
console.log(stockBuySell(prices));