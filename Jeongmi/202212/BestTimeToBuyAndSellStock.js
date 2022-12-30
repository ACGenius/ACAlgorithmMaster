/**
 * 
 * 
 * 121. Best Time to Buy and Sell Stock
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.
 

Constraints:

1 <= prices.length <= 105
0 <= prices[i] <= 104
 */

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let newPrices = [];
    let length = prices.length;
    let maxProfit = 0;
  
  
    // multiple for loop will consum time complexity 
    
    for(let i =0; i< length;i++){
        newPrices = prices.slice(i);
        // console.log(newPrices);
        // console.log(Math.max(...newPrices), " > " ,prices[i]);
        if (Math.max(...newPrices) > prices[i]){
            for(let j=i+1;j<length;j++){
                // console.log(j,"-",i," = ",prices[j]-prices[i]);
                if( maxProfit < prices[j]-prices[i]){
                    maxProfit = prices[j]-prices[i];
                }
            }
        }
        
    }
    //[2,1,2,1,0,1,2]
    
    return maxProfit;
};

// others solution
var maxProfit = function(prices) {
    let profit = 0;
    let min = prices[0];
    
    for(let i = 1; i < prices.length; ++i) { 
        if(min > prices[i]) {
            min = prices[i];
        } else if(prices[i] - min > profit) {
            profit = prices[i] - min;
        }
    }
    
    return profit;
};

var maxProfit = function(prices) {
    var min = Number.MAX_SAFE_INTEGER; 
    var max = 0;
    for (var i = 0; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        max = Math.max(max, prices[i] - min);
    }
    return max;
};