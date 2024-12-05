// def  max_profit(prices):
//     max=0
//     min=100000
//     for i in range(len(prices)):
//         if(prices[i]<min):
//             min=prices[i]
//         for j in range (len(prices)):
//             if(max<prices[j] and j >i):
//                 max=prices[j]
//     print(min)
//     print(max)
//     return(max-min)

// result = max_profit([18, 6,2,7])
// print(result)
function maxProfit(prices) {
  let max = 0
  let min = Infinity 

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    }
    for (let j = 0; j < prices.length; j++) {
      if (prices[j] > max && j > i) {
        max = prices[j]
      }
    }
  }

  console.log('Min:', min)
  console.log('Max:', max)
  return max - min
}

const result = maxProfit([18, 6, 2, 7])
console.log('Profit:', result)