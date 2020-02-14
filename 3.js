// function coins(num){
//     var coins = [25,10,5,1]
//     var coinNumber = 0
//     if(num<1){
//         return 0
//     }else{
//         for(var i = 0; i<coins.length; i++){
//             coinNumber += num / coins[i]
//             num = num % coins[i]
//             coins -= num
//         }
//     }
//     return Math.floor(coinNumber)
// }

// console.log(coins(50))


function coins (koin) {
    let result = [];
    const coins = [25, 10, 5, 1];
    for (var coin of coins) {
        while (koin >= coin) {
            result.push(coin);
            koin -= coin;
        }
    }
    var count = result.length;
    return count;
}
console.log(coins(49));
console.log(coins(31));
console.log(coins(50));