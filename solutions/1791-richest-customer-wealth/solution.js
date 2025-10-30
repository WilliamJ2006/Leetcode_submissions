/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    // let wealthiest = -Infinity;
    // for (let i = 0; i < accounts.length; i++){
    //     if (accounts[i].reduce((acc, curr) => acc + curr) > wealthiest){
    //         wealthiest = accounts[i].reduce((acc, curr) => acc + curr);
    //     }
    // }
    // return wealthiest;
    return Math.max(...accounts.map(val => val.reduce((acc, curr) => acc + curr)));
};
